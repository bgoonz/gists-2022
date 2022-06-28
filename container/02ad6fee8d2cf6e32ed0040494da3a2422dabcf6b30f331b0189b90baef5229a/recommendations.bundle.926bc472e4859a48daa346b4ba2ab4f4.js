define("core/utils/getEmbeddedData", [], function () {
  "use strict";
  return function (a) {
    var b = window.document.getElementById("disqus-" + a);
    try {
      return b && JSON.parse(b.textContent || b.innerHTML);
    } catch (c) {
      return null;
    }
  };
}),
  define("core/utils/urls", [], function () {
    "use strict";
    var a = {},
      b = window.document.createElement("a");
    return (
      (a.getOrigin = function (a) {
        b.href = a;
        var c = b.href.split("/");
        return c[0] + "//" + c[2];
      }),
      (a.getHostName = function (a) {
        return (b.href = a), b.hostname;
      }),
      (a.getDomainPart = function (b, c) {
        "undefined" == typeof c && (c = 0);
        var d = a.getHostName(b),
          e = d.split(".").reverse();
        return e[c];
      }),
      (a.getQuery = function (a) {
        return (b.href = a), b.search;
      }),
      (a.getPathname = function (a) {
        return (b.href = a), b.pathname;
      }),
      a
    );
  }),
  define(
    "core/frameBus",
    ["jquery", "underscore", "backbone", "core/utils/urls"],
    function (a, b, c, d) {
      "use strict";
      var e = window.opener || window.parent,
        f = window.name,
        g = window.document.referrer,
        h = {};
      (h.client = d.getOrigin(window.document.location.href)),
        (h.secureClient = h.client.replace(/^\w+:\/\//, "https://")),
        (h.host = g ? d.getOrigin(g) : h.client);
      var i = {
        origins: h,
        messageHandler: function (a) {
          a = a.originalEvent;
          var b;
          try {
            b = JSON.parse(a.data);
          } catch (c) {
            return;
          }
          (b.name &&
            "!" === b.name[0] &&
            a.origin !== h.client &&
            a.origin !== h.secureClient) ||
            ("client" === b.scope && i.trigger(b.name, b.data));
        },
        postMessage: function (a) {
          (a = JSON.stringify(a)), e.postMessage(a, "*");
        },
        sendHostMessage: function (a, b) {
          (b = b || []),
            i.postMessage({
              scope: "host",
              sender: f,
              name: a,
              data: b,
            });
        },
      };
      return (
        b.extend(i, c.Events),
        a(window).on("message", i.messageHandler),
        a(window).on("unload", function () {
          i.sendHostMessage("die");
        }),
        (window.DISQUS = window.DISQUS || {}),
        (window.DISQUS.Bus = i),
        i
      );
    }
  ),
  define(
    "core/bus",
    ["backbone", "underscore", "core/frameBus"],
    function (a, b, c) {
      "use strict";
      var d = b.extend({}, a.Events);
      return (d.frame = c), d;
    }
  ),
  define("core/utils/cookies", [], function () {
    "use strict";
    var a = {
      _doc: window.document,
      create: function (b, c, d) {
        d || (d = {});
        var e = b + "=" + c + "; path=" + (d.path || "/"),
          f = d.domain,
          g = d.expiresIn;
        if (
          (f && (e += "; domain=." + f),
          "[object Number]" === Object.prototype.toString.call(g))
        ) {
          var h = new Date(new Date().getTime() + g);
          e += "; expires=" + h.toGMTString();
        }
        "https:" === a._doc.location.protocol && (e += "; secure"),
          (e += "; SameSite=None"),
          (a._doc.cookie = e);
      },
      read: function (b) {
        for (
          var c, d = b + "=", e = a._doc.cookie.split(";"), f = 0;
          f < e.length;
          f++
        )
          if (((c = e[f].replace(/^\s+/, "")), 0 === c.indexOf(d)))
            return c.substring(d.length);
        return null;
      },
      erase: function (b, c) {
        var d = {};
        for (var e in c) c.hasOwnProperty(e) && (d[e] = c[e]);
        return (d.expiresIn = -1), a.create(b, "", d);
      },
      supported: function () {
        return (
          a.create("cookie_support", "1"),
          "1" === a.read("cookie_support") && (a.erase("cookie_support"), !0)
        );
      },
    };
    return a;
  }),
  define("core/utils/fingerprint", [], function () {
    "use strict";

    function a(a) {
      a = a || {};
      var b = a.Math || window.Math,
        c = a.Date || window.Date;
      try {
        var d = new c().getTimezoneOffset(),
          e = 1,
          f = window.screen;
        f && f.availWidth
          ? (e = f.availWidth * f.availHeight + f.colorDepth)
          : f && f.width && (e = f.width * f.height);
        var g = window.document.documentElement,
          h = g.clientWidth * g.clientHeight;
        return b.abs(17 * d + 25 * e - h);
      } catch (i) {
        return 1;
      }
    }
    return {
      get: a,
    };
  }),
  define("core/utils/guid", ["core/utils/fingerprint"], function (a) {
    "use strict";

    function b(a) {
      a = a || {};
      var b = a.Uint32Array || window.Uint32Array,
        c = a.crypto || window.crypto,
        d = a.Math || window.Math;
      try {
        var e = new b(1);
        return c.getRandomValues(e), e[0];
      } catch (f) {
        return d.floor(1e9 * d.random());
      }
    }

    function c() {
      var a = window.performance,
        b = a && a.timing;
      if (!b) return 1e5;
      var c = b.domainLookupEnd - b.domainLookupStart,
        d = b.connectEnd - b.connectStart,
        e = b.responseStart - b.navigationStart;
      return 11 * c + 13 * d + 17 * e;
    }

    function d(d) {
      d = d || {};
      var e = d.Math || window.Math,
        f = Number(new Date().getTime().toString().substring(3)),
        g = e.abs(f + c() - a.get()).toString(32);
      return (g += b(d).toString(32));
    }
    return {
      generate: d,
    };
  }),
  define("core/utils/hash", [], function () {
    "use strict";
    var a = function (a) {
      var b,
        c,
        d,
        e = 0;
      if (0 === a.length) return e;
      for (b = 0, c = a.length; b < c; b++)
        (d = a.charCodeAt(b)), (e = (e << 5) - e + d), (e |= 0);
      return e;
    };
    return {
      calculate: a,
    };
  }),
  define(
    "core/analytics/identity",
    [
      "exports",
      "core/utils/cookies",
      "core/utils/guid",
      "core/utils/hash",
      "core/utils/fingerprint",
    ],
    function (a, b, c, d, e) {
      "use strict";
      var f = !1,
        g = (a.ImpressionManager = function () {
          (this.isPrivate = !0), (this.impId = c.generate());
        });
      (g.prototype.COOKIE_NAME = "__jid"),
        (g.prototype.TTL = 18e5),
        (g.prototype.init = function (a) {
          (this.isPrivate = a && a.isPrivate),
            this.isPrivate || (this.prevImp = b.read(this.COOKIE_NAME)),
            this.persist();
        }),
        (g.prototype.setImpressionId = function (a) {
          (this.impId = a), this.persist();
        }),
        (g.prototype.persist = function () {
          return this.isPrivate
            ? void b.erase(this.COOKIE_NAME)
            : void b.create(this.COOKIE_NAME, this.impId, {
                expiresIn: this.TTL,
              });
        });
      var h = (a.UniqueManager = function () {
        this.isPrivate = !0;
      });
      (h.prototype.COOKIE_NAME = "disqus_unique"),
        (h.prototype.TTL = 31536e6),
        (h.prototype.init = function (a) {
          return (
            (this.isPrivate = a && a.isPrivate),
            this.isPrivate
              ? void b.erase(this.COOKIE_NAME, {
                  domain: window.location.host.split(":")[0],
                })
              : ((this.value = b.read(this.COOKIE_NAME) || c.generate()),
                void b.create(this.COOKIE_NAME, this.value, {
                  domain: window.location.host.split(":")[0],
                  expiresIn: this.TTL,
                }))
          );
        }),
        (h.prototype.isPersistent = function () {
          return !this.isPrivate && b.read(this.COOKIE_NAME) === this.value;
        }),
        (a.init = function (b, c) {
          (f && !c) || (a.impression.init(b), a.unique.init(b), (f = !0));
        }),
        (a.reset = function () {
          (f = !1), (a.impression = new g()), (a.unique = new h());
        }),
        a.reset(),
        (a.clientId = function () {
          var b,
            c = a.unique;
          return c.isPersistent() && (b = c.value), b || e.get().toString();
        }),
        (a.getPercentBucketForString = function (a, b) {
          var c = 100,
            e = Math.abs(d.calculate(a));
          if (b) {
            var f = Math.pow(10, b);
            return (e % (c * f)) / f;
          }
          return e % c;
        }),
        (a.clientPercent = function () {
          return a.getPercentBucketForString(a.clientId());
        });
    }
  ),
  define("core/config/urls", ["common/urls"], function (a) {
    "use strict";
    return a;
  }),
  define(
    "core/analytics/jester",
    [
      "jquery",
      "underscore",
      "backbone",
      "core/analytics/identity",
      "core/config/urls",
    ],
    function (a, b, c, d, e) {
      "use strict";
      var f = c.Model.extend({
          url: e.jester + "/event.js",
          defaults: {
            experiment: "default",
            variant: "control",
          },
          setHostReferrer: function (a) {
            a
              ? a.indexOf("http") === -1 || this.set("page_referrer", a)
              : this.set("page_referrer", "direct");
          },
          decoratePayload: function (c) {
            c.event || (c.event = "activity"),
              (c = b.extend(this.toJSON(), c)),
              b.extend(c, {
                imp: d.impression.impId,
                prev_imp: d.impression.prevImp,
              }),
              c.section || (c.section = "default"),
              c.area || (c.area = "n/a");
            var e = a.param(c).length;
            if (e > 2048 && this.has("page_referrer")) {
              var f = window.document.createElement("a");
              f.href = this.get("page_referrer");
              var g = f.hostname;
              g && (c.page_referrer_domain = g), delete c.page_referrer;
            }
            return c;
          },
          emit: function (c) {
            return a.ajax({
              url: b.result(this, "url"),
              data: this.decoratePayload(c),
              dataType: "script",
              cache: !0,
            });
          },
        }),
        g = function (b) {
          var c = new window.Image();
          return (
            (c.src =
              e.jester +
              "/stat.gif?" +
              a.param({
                event: b,
              })),
            c
          );
        },
        h = function (c, d) {
          if (
            !b.any(d, function (a) {
              return a < 0;
            })
          ) {
            b.each(d, function (a, b) {
              d[b] = Math.round(a);
            });
            var f = new window.Image();
            return (
              (f.src = e.jester + "/telemetry/" + c + ".gif?" + a.param(d)), f
            );
          }
        },
        i = new f();
      return (
        i.setHostReferrer(window.document.referrer),
        {
          ActivityClient: f,
          client: i,
          logStat: g,
          telemetry: h,
        }
      );
    }
  ),
  define("recommendations/common", [], function () {
    "use strict";
    var a,
      b = function (b) {
        a = b;
      },
      c = function () {
        return a;
      };
    return {
      setRecommendations: b,
      getRecommendations: c,
    };
  }),
  define(
    "recommendations/tracking",
    [
      "jquery",
      "core/bus",
      "core/analytics/jester",
      "common/main",
      "recommendations/common",
    ],
    function (a, b, c, d, e) {
      "use strict";

      function f(a) {
        var e = a.forum,
          f = e.get("id"),
          g = e.get("pk");
        a.session.user.id && c.client.set("user_id", a.session.user.id),
          a.session.on("change:id", function (a) {
            c.client.set("user_id", a.id);
          }),
          c.client.set({
            product: "embed",
            forum: f,
            forum_id: g,
            zone: "thread",
            version: d.version,
          }),
          a.once("bootstrap:complete", function () {
            c.client.set({
              page_url: a.config.referrer,
            });
            var b = a.config.experiment;
            b &&
              c.client.set({
                experiment: b.experiment,
                variant: b.variant,
                service: b.service,
              }),
              c.client.setHostReferrer(a.config.hostReferrer);
          });
        var h = {
          "uiAction:recommendationsClick": function (a) {
            c.client.emit({
              verb: "click",
              object_type: "link",
              object_id: a,
              adjective: "recommendations",
              zone: "thread",
            });
          },
        };
        a.on(h), b.on(h);
      }
      var g = {};
      return (
        (g.init = function (a) {
          f(a);
        }),
        (g.getEventTrackingArea = function (b) {
          return a(b.currentTarget)
            .closest("[data-tracking-area]")
            .attr("data-tracking-area");
        }),
        (g.isPrivate = function () {
          return e.getRecommendations().config.isPrivate;
        }),
        (g.reset = function () {}),
        g
      );
    }
  ),
  define(
    "core/mixins/appliesPublisherClasses",
    ["jquery", "underscore", "remote/config"],
    function (a, b, c) {
      "use strict";

      function d() {
        (this._getStyleProperty = function (a) {
          var b = this.forum.get(a);
          return this.config.forceAutoStyles || "auto" === b
            ? this.config[a]
            : b;
        }),
          (this.getTypeface = function () {
            return this._getStyleProperty("typeface");
          }),
          (this.getColorScheme = function () {
            return this._getStyleProperty("colorScheme");
          }),
          (this.getFont = function () {
            return this.forum.get("customFont");
          }),
          (this.convertFontToClass = function (a) {
            return a ? a.toLowerCase().replace(/\+/g, "-") : "";
          }),
          (this.convertFontToStyle = function (a) {
            return a ? a.replace(/\+/g, " ") : "";
          }),
          (this.isFontAllowed = function (a) {
            return (
              !(!a || !c.lounge.font_options) &&
              c.lounge.font_options.some(function (b) {
                return a === b.name;
              })
            );
          }),
          (this.downloadFont = function (a) {
            var b = window.document,
              c = b.createElement("style");
            c.type = "text/css";
            var d = this.convertFontToClass(a.name),
              e = this.convertFontToStyle(a.name),
              f = a.category,
              g =
                '@import url("https://fonts.googleapis.com/css2?family=' +
                a.name +
                ':ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&display=swap"); ',
              h = ["", "input", "select", "textarea"]
                .map(function (a) {
                  return "." + d + " " + a;
                })
                .join(", ");
            (g += h + " { font-family: " + e + ", " + f + "; }"),
              c.styleSheet
                ? (c.styleSheet.cssText = g)
                : c.appendChild(b.createTextNode(g));
            var i = b.head || b.getElementsByTagName("head")[0] || b.body;
            i.appendChild(c);
          }),
          (this.applyPublisherClasses = function () {
            var d = a("body"),
              e = this.getFont(),
              f =
                e &&
                b.find(c.lounge.font_options, function (a) {
                  return a.name === e;
                });
            f
              ? (this.downloadFont(f),
                d.addClass(this.convertFontToClass(f.name)))
              : "serif" === this.getTypeface()
              ? d.addClass("serif")
              : d.addClass("sans-serif"),
              "dark" === this.getColorScheme() && d.addClass("dark");
          });
      }
      return d;
    }
  ),
  define("core/utils/storage", [], function () {
    "use strict";
    var a = (function (a) {
        var b = "_dsqstorage_";
        try {
          return (
            a.localStorage.setItem(b, b),
            a.localStorage.getItem(b),
            a.localStorage.removeItem(b),
            !0
          );
        } catch (c) {
          return !1;
        }
      })(window),
      b = (function () {
        var a = {};
        return {
          getItem: function (b) {
            return a.hasOwnProperty(b) ? a[b] : null;
          },
          setItem: function (b, c) {
            a[b] = String(c);
          },
          removeItem: function (b) {
            delete a[b];
          },
          clear: function () {
            a = {};
          },
        };
      })();
    return {
      get: function (a) {
        var b = null;
        try {
          return (b = this.backend.getItem(a)), JSON.parse(b);
        } catch (c) {
          return b;
        }
      },
      set: function (a, b) {
        try {
          this.backend.setItem(a, JSON.stringify(b));
        } catch (c) {}
      },
      remove: function (a) {
        try {
          this.backend.removeItem(a);
        } catch (b) {}
      },
      clear: function () {
        try {
          this.backend.clear();
        } catch (a) {}
      },
      backend: a ? window.localStorage : b,
      isPersistent: a,
    };
  }),
  define("core/utils/auth", ["core/utils/cookies"], function (a) {
    "use strict";
    var b = {},
      c = "disqusauth";
    return (
      (b.getFromCookie = function () {
        var b = (a.read(c) || "").replace(/"/g, "").split("|");
        !b || (b[1] && b[6]) || ((b = []), a.erase(c, {}));
        var d = parseInt(b[6] || "0", 10);
        return {
          avatarUrl: b[7] ? decodeURIComponent(b[7]) : void 0,
          datetimeFormatting: parseInt(b[4], 10) ? "absolute" : "relative",
          id: d,
          isModerator: parseInt(b[8], 10) > 0,
          staff: Boolean(parseInt(b[2], 10)),
          tzOffset: b[5],
          username: b[1],
          isAuthenticated: Boolean(d && "0" !== d),
        };
      }),
      b
    );
  }),
  define(
    "core/switches",
    [
      "underscore",
      "remote/config",
      "core/analytics/identity",
      "core/utils/storage",
      "core/utils/auth",
    ],
    function (a, b, c, d, e) {
      "use strict";
      var f = "switch:",
        g = {},
        h = {};
      return (
        (h._getKey = function (a) {
          return f + a;
        }),
        (h.disableFeature = function (a) {
          g[a] = !1;
        }),
        (h.resetFeature = function (a) {
          g[a] = null;
        }),
        (h.forceFeature = function (a) {
          g[a] = !0;
        }),
        (h.getSwitchContext = function (a) {
          var c = d.get(this._getKey(a));
          if (null !== c) return c;
          var e = g[a];
          return null != e ? e : ((b.lounge && b.lounge.switches) || {})[a];
        }),
        (h.isFeatureActive = function (b, d) {
          var f = h.getSwitchContext(b);
          if (a.isBoolean(f)) return f;
          if (!f) return !1;
          var g = e.getFromCookie(),
            i = {
              percent: c.clientPercent(),
              user_id: g.id,
              username: g.username,
              is_staff: g.staff,
              is_moderator: g.isModerator,
            },
            j = a.defaults(d || {}, i);
          return a.any(f, function (b, d) {
            var e = j[d];
            if (/percent$/.test(d) && a.isNumber(b)) {
              if (a.isNumber(e)) return b > e;
              if (a.isString(e)) {
                var f = 0;
                return (
                  b !== Math.round(b) &&
                    (f = b.toString().split(".").pop().length),
                  b > c.getPercentBucketForString(e, f)
                );
              }
              return !1;
            }
            return a.isArray(b) ? a.contains(b, e) : b === e;
          });
        }),
        h
      );
    }
  ),
  define("core/utils/isIframed", [], function () {
    "use strict";
    return function (a) {
      try {
        return a.self !== a.top;
      } catch (b) {
        return !0;
      }
    };
  }),
  define("core/time", [], function () {
    "use strict";

    function a(a) {
      return a.indexOf("+") >= 0 ? a : a + "+00:00";
    }
    var b = "YYYY-MM-DDTHH:mm:ssZ";
    return {
      ISO_8601: b,
      assureTzOffset: a,
    };
  }),
  define(
    "core/api",
    ["jquery", "underscore", "backbone", "core/config", "core/utils"],
    function (a, b, c, d, e) {
      "use strict";

      function f(a) {
        return (
          (l.href = a),
          l.origin ||
            l.protocol + "//" + l.hostname + (l.port ? ":" + l.port : "")
        );
      }

      function g(a) {
        return a.replace(/^(http:)?\/\//, "https://");
      }

      function h(c) {
        (c = b.defaults(c, m)),
          (c.traditional = !0),
          f(window.location.href) !== f(c.url) &&
            (c.xhrFields = {
              withCredentials: !0,
            }),
          c.omitDisqusApiKey ||
            ((c.data = c.data || {}),
            window.FormData && c.data instanceof window.FormData
              ? (c.url = e.serialize(c.url, {
                  api_key: d.keys.api,
                }))
              : (c.data.api_key = d.keys.api));
        var g = c.error;
        return (
          (c.error = function (a) {
            n.trigger("error", a), b.isFunction(g) && g(a);
          }),
          a.ajax(c)
        );
      }

      function i(a) {
        return /(https?:)?\/\//.test(a) ? g(a) : d.urls.api + a;
      }

      function j(a, c) {
        return (
          (c = c || {}),
          (c.url = i(a)),
          c.omitDisqusApiKey ||
            (c.data = b.extend(c.data || {}, {
              api_key: d.keys.api,
            })),
          n.trigger("call", c),
          h(c).always(b.bind(this.trigger, this, "complete", c))
        );
      }
      var k = window.document,
        l = k.createElement("a"),
        m = {},
        n = {
          ERROR_CODES: {
            OBJ_NOT_FOUND: 8,
            MAX_ITEMS_REACHED: 24,
          },
          ajax: h,
          call: j,
          getURL: i,
          defaults: function (a) {
            Object.keys(a).forEach(function (c) {
              var d = a[c],
                e = m[c];
              b.isObject(d) && b.isObject(e) ? b.extend(e, d) : (m[c] = d);
            });
          },
          headers: function (a) {
            var c = b.extend({}, m.headers, a);
            return (m.headers = b.pick(c, Boolean)), m.headers;
          },
          makeHttps: g,
        };
      return b.extend(n, c.Events), n;
    }
  ),
  define("core/models/BaseUser", ["backbone", "core/config"], function (a, b) {
    "use strict";
    var c = a.Model.extend({
      defaults: {
        about: null,
        avatar: {
          cache: b.urls.avatar.generic,
          permalink: b.urls.avatar.generic,
        },
        connections: {},
        badges: [],
        email: null,
        isAnonymous: !0,
        isFollowedBy: null,
        isFollowing: null,
        joinedAt: null,
        name: null,
        profileUrl: null,
        url: null,
        username: null,
        numPosts: null,
        numFollowing: null,
        numForumsFollowing: null,
        numFollowers: null,
        numLikesReceived: null,
        isFlagged: null,
      },
      hasValidAvatar: function (a) {
        var b = a ? a.avatar : this.get("avatar");
        return b && b.cache;
      },
      isAnonymous: function () {
        return !this.get("id");
      },
      isRegistered: function () {
        return !this.isAnonymous();
      },
      validate: function (a) {
        if (!this.hasValidAvatar(a))
          return "None of the avatar related properties can be null, undefined or empty on User models.";
      },
      toJSON: function () {
        var b = a.Model.prototype.toJSON.apply(this, arguments);
        return (
          (b.thread = {}),
          this.hasValidAvatar() || (b.avatar = this.defaults.avatar),
          (b.isRegistered = this.isRegistered()),
          b
        );
      },
    });
    return c;
  }),
  define(
    "core/models/User",
    [
      "jquery",
      "underscore",
      "moment",
      "core/config",
      "core/time",
      "core/utils",
      "core/strings",
      "core/api",
      "core/models/BaseUser",
    ],
    function (a, b, c, d, e, f, g, h, i) {
      "use strict";

      function j(a, b, c) {
        (a[b] = a[b] || []), a[b].push(c);
      }
      var k = g.get,
        l = i.extend(
          {
            url: h.getURL("users/details"),
            validate: function (c) {
              var d = {};
              if (
                (c.display_name && (c.display_name = a.trim(c.display_name)),
                c.display_name ||
                  j(d, "display_name", k("Please enter your name.")),
                c.email || j(d, "email", k("Please enter your email address.")),
                f.validateEmail(c.email) ||
                  j(d, "email", k("Invalid email address.")),
                this.isNew() &&
                  (c.password
                    ? c.password.length < l.MIN_PASSWORD_LEN &&
                      j(
                        d,
                        "password",
                        k("Password must have at least 6 characters.")
                      )
                    : j(d, "password", k("Please enter a password."))),
                c.name &&
                  (c.name.length < l.MIN_NAME_LEN &&
                    j(
                      d,
                      "name",
                      g.interpolate(
                        k("Name must have at least %(minLength)s characters."),
                        {
                          minLength: l.MIN_NAME_LEN,
                        }
                      )
                    ),
                  c.name.length > l.MAX_NAME_LEN &&
                    j(
                      d,
                      "name",
                      g.interpolate(
                        k("Name must have less than %(maxLength)s characters."),
                        {
                          maxLength: l.MAX_NAME_LEN,
                        }
                      )
                    )),
                c.location &&
                  c.location.length > l.MAX_LOCATION_LEN &&
                  j(
                    d,
                    "location",
                    g.interpolate(
                      k(
                        "Location must have less than %(maxLength)s characters."
                      ),
                      {
                        maxLength: l.MAX_LOCATION_LEN,
                      }
                    )
                  ),
                c.url &&
                  (c.url.length > l.MAX_URL_LEN &&
                    j(
                      d,
                      "url",
                      g.interpolate(
                        k("Site must have less than %(maxLength)s characters."),
                        {
                          maxLength: l.MAX_URL_LEN,
                        }
                      )
                    ),
                  f.isUrl(c.url) ||
                    j(d, "url", k("Please enter a valid site."))),
                !b.isEmpty(d))
              )
                return d;
            },
            prepareFetchOptions: function (a) {
              a = a ? b.clone(a) : {};
              var c = {};
              return (
                this.get("id")
                  ? (c.user = this.get("id"))
                  : this.get("username") &&
                    (c.user = "username:" + this.get("username")),
                b.extend(c, a.data),
                (a.data = c),
                a
              );
            },
            fetch: function (a) {
              return (
                (a = this.prepareFetchOptions(a)),
                i.prototype.fetch.call(this, a)
              );
            },
            parse: function (a) {
              var b = a.response || a;
              return (b = this.handleBadgesUpdate(b));
            },
            register: function (a) {
              var c = this;
              return (
                (a = a || {}),
                h.call("internal/users/register.json", {
                  data: b.extend(this.toRegisterJSON(), {
                    gRecaptchaResponse: a.gRecaptchaResponse,
                  }),
                  method: "POST",
                  success: function (d) {
                    h.call("users/acceptTerms", {
                      method: "POST",
                    }),
                      c.set(
                        b.extend({}, d.response, {
                          hasAcceptedGdprTerms: !0,
                        })
                      ),
                      a.success && a.success(d);
                  },
                  error: a.error,
                })
              );
            },
            saveAvatar: function (a) {
              var b = new window.FormData();
              return (
                b.append("avatar_file", a),
                b.append("api_key", d.keys.api),
                h.call("internal/users/updateAvatar.json", {
                  method: "post",
                  data: b,
                  cache: !1,
                  contentType: !1,
                  processData: !1,
                })
              );
            },
            saveProfile: function () {
              return h.call("users/updateProfile.json", {
                method: "POST",
                data: {
                  name: this.get("name"),
                  about: this.get("about"),
                  location: this.get("location"),
                  url: this.get("url"),
                },
              });
            },
            toRegisterJSON: function () {
              return b.pick(this.toJSON(), "display_name", "email", "password");
            },
            isSession: function (a) {
              return a.user.id && a.user.id === this.id;
            },
            isEditable: function (a) {
              return this.isSession(a) && !this.get("remote");
            },
            toJSON: function (a) {
              a = a || {};
              var b = i.prototype.toJSON.call(this),
                c = this.collection && this.collection.thread;
              return (
                (b.thread.canModerate = Boolean(c && c.isModerator(this))),
                a.session &&
                  ((b.isSession = this.isSession(a.session)),
                  (b.isEditable = this.isEditable(a.session))),
                b
              );
            },
            _changeFollowState: function (a) {
              this.set({
                isFollowing: a,
                numFollowers: Math.max(
                  0,
                  this.get("numFollowers") + (a ? 1 : -1)
                ),
              });
              var b = "users/" + (a ? "follow" : "unfollow"),
                c = this;
              return h.call(b + ".json", {
                data: {
                  target: this.get("id"),
                },
                method: "POST",
                success: function (a) {
                  c.trigger("sync", c, a, {});
                },
              });
            },
            follow: function () {
              return this._changeFollowState(!0);
            },
            unfollow: function () {
              return this._changeFollowState(!1);
            },
            _changeBlockState: function (a) {
              var b = "users/block/" + (a ? "create" : "delete"),
                c = this;
              return h.call(b + ".json", {
                data: {
                  user: this.get("id"),
                },
                method: "POST",
                success: function (a) {
                  c.set(a.response);
                },
              });
            },
            block: function () {
              return this._changeBlockState(!0);
            },
            unblock: function () {
              return this._changeBlockState(!1);
            },
            report: function (a) {
              var b = this;
              return h.call("users/report.json", {
                data: {
                  reason: a,
                  user: this.get("id"),
                },
                method: "POST",
                success: function () {
                  b.set("isFlagged", !0);
                },
              });
            },
            toggleFollowState: function () {
              return this._changeFollowState(!this.get("isFollowing"));
            },
            registeredLessThan: function (a, b) {
              var d = e.assureTzOffset(this.get("joinedAt")),
                f = c().subtract(a, b);
              return c(d).isAfter(f);
            },
            registeredToday: function () {
              return this.registeredLessThan(1, "day");
            },
            registeredThisWeek: function () {
              return this.registeredLessThan(1, "week");
            },
            shouldHomeOnboard: function () {
              return !this.get("homeOnboardingComplete");
            },
            setHomeOnboardComplete: function (a) {
              this.updateFlags({
                homeOnboardingComplete: a,
              }),
                a &&
                  this.listenTo(
                    this,
                    "change:homeOnboardingComplete",
                    b.bind(this.set, this, "homeOnboardingComplete", a, {
                      silent: !0,
                    })
                  );
            },
            handleBadgesUpdate: function (a) {
              if (
                this.collection &&
                this.collection.thread &&
                this.collection.thread.forum &&
                this.collection.thread.forum.get("badges")
              ) {
                var b = this.collection.thread.forum.get("badges");
                a.badges = a.badges
                  ? a.badges.filter(function (a) {
                      return b[a.id];
                    })
                  : [];
              }
              return a;
            },
            updateFlags: function (a) {
              return (
                this.set(a),
                h.call("internal/users/updateFlags.json", {
                  data: b.mapObject(a, function (a) {
                    return a ? 1 : 0;
                  }),
                  method: "POST",
                })
              );
            },
          },
          {
            MIN_PASSWORD_LEN: 6,
            MIN_NAME_LEN: 2,
            MAX_NAME_LEN: 30,
            MAX_LOCATION_LEN: 255,
            MAX_URL_LEN: 200,
          }
        );
      return l;
    }
  ),
  define(
    "core/models/Forum",
    ["backbone", "core/UniqueModel", "core/api"],
    function (a, b, c) {
      "use strict";
      var d = a.Model.extend({
        defaults: {
          settings: {},
          badges: [],
          followUrl: "forums/follow",
          unfollowUrl: "forums/unfollow",
          isFollowing: !1,
        },
        initialize: function (a, b) {
          b && b.channel && (this.channel = b.channel),
            this.getFeatures(),
            this.on("change:id", this.getFeatures),
            this.on("change:id", this.getBadges);
        },
        _changeFollowingState: function (a) {
          return c.call(a, {
            method: "POST",
            data: {
              target: this.get("id"),
            },
          });
        },
        follow: function () {
          return (
            this.set("isFollowing", !0),
            this._changeFollowingState(this.get("followUrl"))
          );
        },
        unfollow: function () {
          return (
            this.set("isFollowing", !1),
            this._changeFollowingState(this.get("unfollowUrl"))
          );
        },
        toggleFollowed: function () {
          if (this.channel && this.channel.get("options").isCurationOnlyChannel)
            return this.channel.toggleFollowed();
          var a = this.get("isFollowing") ? this.unfollow() : this.follow();
          return this.trigger("toggled:isFollowing"), a;
        },
        getFeatures: function () {
          var a = this;
          a.id &&
            c.call("forums/details", {
              data: {
                forum: this.id,
                attach: "forumFeatures",
              },
              success: function (b) {
                b && b.response && a.set("features", b.response.features);
              },
            });
        },
        getBadges: function () {
          if (this.id && this.get("badges")) {
            var a = {},
              b = {};
            (b.id = this.get("pk")),
              (b.url = this.get("id")),
              this.get("badges").forEach(function (c) {
                (c.forum = b), (a[c.id] = c);
              }),
              this.set("badges", a);
          }
        },
      });
      return b.addType("Forum", d), d;
    }
  ),
  define(
    "core/utils/url/serializeArgs",
    ["require", "exports", "module", "core/utils/collection/each"],
    function (a, b, c) {
      "use strict";
      var d = a("core/utils/collection/each");
      c.exports = function (a) {
        var b = [];
        return (
          d(a, function (a, c) {
            void 0 !== a &&
              b.push(
                encodeURIComponent(c) +
                  (null === a ? "" : "=" + encodeURIComponent(a))
              );
          }),
          b.join("&")
        );
      };
    }
  ),
  define(
    "core/utils/url/serialize",
    ["require", "exports", "module", "core/utils/url/serializeArgs"],
    function (a, b, c) {
      "use strict";
      var d = a("core/utils/url/serializeArgs");
      c.exports = function e(a, b, c) {
        if (
          (b &&
            (a.indexOf("?") === -1
              ? (a += "?")
              : "&" !== a.charAt(a.length - 1) && (a += "&"),
            (a += d(b))),
          c)
        ) {
          var f = {};
          return (f[new Date().getTime()] = null), e(a, f);
        }
        var g = a.length;
        return "&" === a.charAt(g - 1) ? a.slice(0, g - 1) : a;
      };
    }
  ),
  define(
    "common/utils",
    ["jquery", "underscore", "loglevel", "common/urls", "core/utils/cookies"],
    function (a, b, c, d, e) {
      "use strict";
      var f = window.document,
        g = {};
      (g.globalUniqueId = function (a) {
        return b.uniqueId(a) + "_" + Number(new Date());
      }),
        (g.addStylesheetRules = function (a) {
          function c() {
            var e = b.find(f.styleSheets, function (a) {
              var b = a.ownerNode || a.owningElement;
              return b.id === d;
            });
            if (!e) return void setTimeout(c, 50);
            for (var g = 0, h = a.length; g < h; g++) {
              var i = 1,
                j = a[g],
                k = j[0],
                l = "";
              "[object Array]" === Object.prototype.toString.call(j[1][0]) &&
                ((j = j[1]), (i = 0));
              for (var m = j.length; i < m; i++) {
                var n = j[i];
                l += n[0] + ":" + n[1] + (n[2] ? " !important" : "") + ";\n";
              }
              e.insertRule
                ? e.insertRule(k + "{" + l + "}", e.cssRules.length)
                : e.addRule(k, l, -1);
            }
          }
          var d = "css_" + new Date().getTime(),
            e = f.createElement("style");
          (e.id = d),
            f.getElementsByTagName("head")[0].appendChild(e),
            window.createPopup || e.appendChild(f.createTextNode("")),
            c();
        });
      var h = (g.CORS = {
        handler: function (a, b, c) {
          var d = 200,
            e = 300;
          a && c >= d && c < e ? a() : b && (c < d || c >= e) && b();
        },
        XHR2: function (a, b, c, d) {
          var e = h.handler,
            f = new window.XMLHttpRequest();
          return (
            f.open(a, b, !0),
            (f.onreadystatechange = function () {
              f.readyState === window.XMLHttpRequest.DONE && e(c, d, f.status);
            }),
            f
          );
        },
      });
      (h.request = (function () {
        return "withCredentials" in new window.XMLHttpRequest()
          ? h.XHR2
          : function () {
              return null;
            };
      })()),
        (g.isWindowClosed = function (a) {
          if (!a) return !0;
          try {
            return a.closed || void 0 === a.closed;
          } catch (b) {
            return !0;
          }
        }),
        (g.truncate = function (a, b, c) {
          return (c = c || "..."), a.length > b ? a.slice(0, b) + c : a;
        }),
        (g.extractDomainForCookies = function (a) {
          return a.split("/")[2].replace(/:[0-9]+/, "");
        }),
        (g.cookies = {
          domain: g.extractDomainForCookies(d.root),
          create: function (a, b) {
            var c = 31536e6;
            e.create(a, b, {
              domain: g.cookies.domain,
              expiresIn: c,
            });
          },
          read: e.read,
          erase: function (a) {
            e.erase(a, {
              domain: g.cookies.domain,
            });
          },
        }),
        (g.updateURL = function (a, c) {
          var d,
            e = f.createElement("a");
          return (
            (c = c || {}),
            (e.href = a),
            c.hostname && c.hostname.match(/\.$/) && (c.hostname += e.hostname),
            (d = b.extend(
              {
                protocol: e.protocol,
                hostname: e.hostname,
                pathname: e.pathname,
                search: e.search,
              },
              c
            )),
            d.pathname.match(/^\//) || (d.pathname = "/" + d.pathname),
            d.protocol + "//" + d.hostname + d.pathname + d.search
          );
        }),
        (g.injectBaseElement = function (a, b) {
          b = b || f;
          var c = b.getElementsByTagName("base")[0] || b.createElement("base");
          (c.target = "_parent"),
            a ? (c.href = a) : c.removeAttribute("href"),
            c.parentNode ||
              (b.head || b.getElementsByTagName("head")[0]).appendChild(c);
        });
      var i = a("html");
      (g.getPageHeight = function () {
        var b = a("#recommendations-header"),
          c = b.outerHeight();
        return c && (c += b.offset().top), Math.max(c, i.height());
      }),
        (g.calculatePositionFullscreen = function () {
          return {
            pageOffset: a(window).scrollTop(),
            height: f.documentElement.clientHeight,
            frameOffset: {
              left: 0,
              top: 0,
            },
          };
        }),
        (g.triggerClick = function (a, b) {
          var c,
            d,
            e = a[0],
            g = {
              altKey: !1,
              button: 0,
              ctrlKey: !1,
              metaKey: !1,
              shiftKey: !1,
            };
          if (f.createEvent) {
            if (((c = f.createEvent("MouseEvents")), b))
              for (d in g)
                g.hasOwnProperty(d) && b.hasOwnProperty(d) && (g[d] = b[d]);
            c.initMouseEvent(
              "click",
              !0,
              !0,
              window,
              0,
              0,
              0,
              0,
              0,
              g.ctrlKey,
              g.altKey,
              g.shiftKey,
              g.metaKey,
              0,
              null
            ),
              e.dispatchEvent && e.dispatchEvent(c);
          } else if (f.createEventObject) {
            if (((c = f.createEventObject()), (c.eventType = "click"), b))
              for (d in g)
                g.hasOwnProperty(d) && b.hasOwnProperty(d) && (c[d] = b[d]);
            e.fireEvent("onclick", c);
          }
        }),
        (g.delayLinkClick = function (a, c) {
          a.preventDefault(),
            b.delay(b.bind(g.triggerClick, this, c, a.originalEvent), 100);
        }),
        (g.mixin = function (a, c, d) {
          var e = a.prototype,
            f = b.extend({}, c, d);
          if (
            (b.defaults(e, f),
            b.defaults(e.events, f.events),
            void 0 !== e.initialize && void 0 !== f.initialize)
          ) {
            var g = e.initialize;
            e.initialize = function () {
              var a = g.apply(this, arguments);
              return f.initialize.apply(this, arguments), a;
            };
          }
          return a;
        }),
        (g.extractService = function (b, c) {
          var d = "[data-action^=" + c + "]",
            e = a(b);
          e = (e.is(d) && e) || e.closest(d);
          var f = e.attr("data-action") || ":",
            g = f.split(":")[1];
          return g;
        }),
        (g.getConfigFromHash = function (a) {
          var d,
            e = a.location.hash;
          try {
            d = JSON.parse(decodeURIComponent(String(e).substr(1)));
          } catch (f) {
            c.debug("Failed to parse config from URL hash", f);
          }
          return b.isObject(d) ? d : {};
        });
      var j = /[<>]|:\/\//;
      return (
        (g.isPlainText = function (a) {
          return !a.match(j);
        }),
        (g.isDNTEnabled = function (a) {
          return (
            a || (a = window),
            "1" === a.navigator.doNotTrack ||
              "yes" === a.navigator.doNotTrack ||
              "1" === a.navigator.msDoNotTrack
          );
        }),
        (g.shouldSample = function (a) {
          var b = parseInt(a, 10);
          return !!b && !(b > 100) && Math.random() < b / 100;
        }),
        (g.decorate = function () {
          var a,
            c = b.toArray(arguments),
            d = c.pop();
          return (
            b.isFunction(d) || ((a = d), (d = c.pop())),
            b.reduceRight(
              c,
              function (b, c) {
                return c.call(a || this, b);
              },
              function () {
                return d.apply(a || this, arguments);
              }
            )
          );
        }),
        g
      );
    }
  ),
  define(
    "core/shared/urls",
    [
      "require",
      "core/utils/object/extend",
      "core/utils/url/serialize",
      "core/utils/url/serializeArgs",
    ],
    function (a) {
      "use strict";
      var b = a("core/utils/object/extend"),
        c = a("core/utils/url/serialize"),
        d = a("core/utils/url/serializeArgs"),
        e = "default",
        f = {
          lounge: "http://disqus.com/embed/comments/",
          home: "https://disqus.com/home/".replace("home/", ""),
          recommendations: "http://disqus.com/recommendations/",
        },
        g = function (a) {
          return "https://" + a.replace(/^\s*(\w+:)?\/\//, "");
        },
        h = function (a, h, i) {
          var j = f[a];
          if (!j) throw new Error("Unknown app: " + a);
          var k = g(j),
            l = b(
              {
                base: e,
              },
              h || {}
            ),
            m = i ? "#" + d(i) : "";
          return c(k, l) + m;
        };
      return {
        BASE: e,
        apps: f,
        get: h,
        ensureHTTPSProtocol: g,
      };
    }
  ),
  define(
    "common/models",
    [
      "require",
      "underscore",
      "backbone",
      "modernizr",
      "core/UniqueModel",
      "core/models/User",
      "core/models/Forum",
      "core/utils/url/serialize",
      "core/utils/guid",
      "common/utils",
      "common/urls",
      "core/shared/urls",
      "backbone.uniquemodel",
    ],
    function (a, b, c, d, e, f, g, h, i, j, k, l) {
      "use strict";
      var m = g.extend({
          defaults: {
            settings: {},
          },
          toJSON: function () {
            return b.extend(c.Model.prototype.toJSON.apply(this, arguments), {
              homeUrl: l.apps.home + "home/forums/" + this.id + "/",
            });
          },
        }),
        n = c.Model.extend(
          {
            defaults: {
              user: null,
              post: null,
              thread: null,
              client_context: null,
              typing: !0,
            },
            idAttribute: "client_context",
            set: function () {
              return (
                (this.lastModified = new Date()),
                c.Model.prototype.set.apply(this, arguments)
              );
            },
            sync: function () {
              var a = this.toJSON(),
                b = h(k.realertime + "/api/typing", a);
              try {
                j.CORS.request("GET", b).send();
              } catch (c) {}
            },
          },
          {
            make: function (a) {
              return (
                a.client_context || (a.client_context = i.generate()),
                new e(n, a)
              );
            },
          }
        );
      e.addType("TypingUser", n);
      var o = f.prototype.toJSON;
      b.extend(f.prototype, {
        getFollowing: function () {
          var b = a("common/collections/profile");
          return (
            this.following ||
            (this.following = new b.FollowingCollection(null, {
              user: this,
            }))
          );
        },
        toJSON: function () {
          var b = o.apply(this, arguments),
            c = a("common/Session"),
            d = c.get(),
            e = d && d.get("sso") && d.get("sso").profile_url;
          e &&
            ((e = String(e)),
            0 === e.indexOf("//") && (e = "https:" + e),
            /https?:\/\//.test(e) || (e = null),
            (/\{username\}/.test(e) && b.name) || (e = null));
          var f = b.profileUrl && /disqus.com\/by\//.test(b.profileUrl);
          return (
            (b.isSSOProfileUrl = !f || Boolean(e)),
            f &&
              e &&
              (b.profileUrl = e.replace(
                /\{username\}/gi,
                encodeURIComponent(b.name)
              )),
            b
          );
        },
      }),
        e.addType("User", f);
      var p = f.extend({
          defaults: b.extend(
            {
              numPosts: 0,
            },
            f.prototype.defaults
          ),
        }),
        q = d.sessionstorage ? "sessionStorage" : null,
        r = c.UniqueModel(f, "User", q),
        s = c.UniqueModel(p, "User", q),
        t = c.Model.extend({});
      return {
        Forum: m,
        TypingUser: n,
        User: f,
        TopUser: p,
        Switch: t,
        SyncedUser: r,
        SyncedTopUser: s,
      };
    }
  ),
  define(
    "core/models/Session",
    [
      "jquery",
      "underscore",
      "backbone",
      "moment",
      "core/api",
      "core/bus",
      "core/config",
      "core/time",
      "core/utils",
      "core/utils/cookies",
      "core/utils/guid",
      "core/utils/auth",
      "core/models/BaseUser",
      "core/models/User",
    ],
    function (a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
      "use strict";
      var o = function () {
          return l.getFromCookie();
        },
        p = c.Model.extend({
          initialize: function () {
            (this.constructor.fromCookie = b.once(o)),
              (this.user = this.getAnonUserInstance());
          },
          setUser: function (a) {
            this.user && this.stopListening(this.user),
              (this.user = a),
              this.setIfNewUser(),
              this.listenTo(a, "all", this.trigger),
              this.trigger("change:id", a);
          },
          isLoggedOut: function () {
            return !this.isLoggedIn();
          },
          isLoggedIn: function () {
            return Boolean(this.user.get("id"));
          },
          fetch: function (a) {
            var c = a || {};
            return e.call("users/details.json", {
              data: c.data,
              success: b.bind(function (a) {
                (a = a.response),
                  a.id && this.setUser(this.getUserInstance(a)),
                  c.success && c.success(a),
                  c.complete && c.complete(a);
              }, this),
              error: function (a) {
                c.error && c.error(a), c.complete && c.complete(a);
              },
            });
          },
          getAnonUserInstance: function (a) {
            return new m(a);
          },
          getUserInstance: function (a) {
            return new n(a);
          },
          getCsrfToken: function () {
            var a = j.read("csrftoken");
            return (
              a ||
                ((a = k.generate().replace(/\W/g, "")),
                j.create("csrftoken", a, {
                  domain: window.location.hostname,
                  expiresIn: 31536e6,
                })),
              a
            );
          },
          authenticate: function (c) {
            var d = this.authServices[c];
            if (d) {
              if (b.isFunction(d)) return d.call(this);
              f.trigger("uiAction:openLogin", c);
              var e = this.getAuthWindowArgs(d),
                g = d.url;
              (g += (g.indexOf("?") > -1 ? "&" : "?") + a.param(e)),
                this.openAuthWindow(g, d.width, d.height);
            }
          },
          authServices: {
            disqus: {
              url: g.urls.login,
              width: 460,
              height: 355,
              attachExperiment: !0,
            },
            twitter: {
              url: g.urls.oauth.twitter,
              width: 650,
              height: 680,
              csrf: !0,
              attachExperiment: !0,
            },
            facebook: {
              url: g.urls.oauth.facebook,
              width: 550,
              height: 300,
              csrf: !0,
              attachExperiment: !0,
            },
            google: {
              url: g.urls.oauth.google,
              width: 445,
              height: 635,
              csrf: !0,
              attachExperiment: !0,
            },
          },
          getAuthWindowArgs: function (a) {
            var c = {};
            return (
              a.csrf && (c.ctkn = this.getCsrfToken()), b.extend(c, a.params), c
            );
          },
          openAuthWindow: function (a, b, c) {
            return i.openWindow(a, "_blank", {
              width: b,
              height: c,
            });
          },
          setIfNewUser: function () {
            var a = this.user.get("joinedAt");
            if (this.user.get("isAnonymous") || !a)
              return void this.user.set("joinedRecently", !1);
            var b = h.assureTzOffset(a);
            this.user.set(
              "joinedRecently",
              d().subtract(10, "seconds").isBefore(b)
            );
          },
        });
      return (
        (p.fromCookie = o),
        (p.isKnownToBeLoggedOut = function () {
          return !p.fromCookie().id;
        }),
        p
      );
    }
  ),
  define(
    "core/WindowBus",
    ["jquery", "underscore", "backbone", "modernizr"],
    function (a, b, c, d) {
      "use strict";
      var e = c.Model.extend(
        {
          initialize: function () {
            d.localstorage &&
              a(window).on("storage", b.bind(this.onStorageEvent, this));
          },
          broadcast: function (a, b) {
            if (d.localstorage) {
              var c = JSON.stringify({
                name: a,
                data: b,
                time: new Date().getTime(),
              });
              try {
                window.localStorage.setItem(this.constructor.STORAGE_KEY, c);
              } catch (e) {}
            }
          },
          onStorageEvent: function (a) {
            var b = a.originalEvent.key,
              c = a.originalEvent.newValue;
            if (c && b === this.constructor.STORAGE_KEY)
              try {
                (c = JSON.parse(c)), this.trigger(c.name, c.data);
              } catch (d) {}
          },
        },
        {
          STORAGE_KEY: "disqus.bus",
        }
      );
      return e;
    }
  ),
  define(
    "core/common/cached-storage",
    ["underscore", "core/utils/storage"],
    function (a, b) {
      "use strict";
      var c = function (a, b) {
        (this.namespace = a),
          (this.ttl = b || 300),
          (this.cache = this.getFromStorage());
      };
      return (
        a.extend(c.prototype, {
          getItem: function (a) {
            var b = this.cache[a];
            if (b) {
              if (!this.isExpired(b)) return b.value;
              delete this.cache[a];
            }
          },
          getCurrentTime: function () {
            return Math.floor(new Date().getTime() / 1e3);
          },
          persist: function () {
            b.set(this.namespace, this.cache);
          },
          getFromStorage: function () {
            var c = b.get(this.namespace);
            return a.isObject(c) ? c : {};
          },
          isExpired: function (a) {
            return this.getCurrentTime() > a.expiry;
          },
          setItem: function (a, b) {
            (this.cache[a] = {
              value: b,
              expiry: this.getCurrentTime() + this.ttl,
            }),
              this.persist();
          },
          removeItem: function (a) {
            delete this.cache[a], this.persist();
          },
          getAll: function () {
            var b = a
              .chain(this.cache)
              .map(function (a, b) {
                return this.getItem(b);
              }, this)
              .compact()
              .value();
            return this.persist(), b;
          },
        }),
        c
      );
    }
  ),
  define(
    "common/collections/LoggedOutCache",
    ["backbone", "core/common/cached-storage"],
    function (a, b) {
      "use strict";
      var c = [
          {
            id: "welcome",
            title: "",
            body: "",
          },
        ],
        d = [{}],
        e = new b("notes", 7776e3),
        f = a.Model.extend({
          markRead: function () {
            e.setItem(this.id, !0);
          },
          isRead: function () {
            return Boolean(e.getItem(this.id));
          },
        }),
        g = a.Collection.extend({
          initialize: function (a, b) {
            this.session = b.session;
          },
          model: f,
          markAllRead: function () {
            return (
              this.each(function (a) {
                a.markRead();
              }),
              this.session.set("notificationCount", 0),
              this
            );
          },
          getUnread: function () {
            return this.filter(function (a) {
              return !a.isRead();
            });
          },
        });
      return {
        storage: e,
        Collection: g,
        Model: f,
        LOGGED_OUT_NOTES: c,
        LOGGED_OUT_FLAGS: d,
      };
    }
  ),
  define(
    "common/Session",
    [
      "jquery",
      "underscore",
      "core/analytics/jester",
      "core/api",
      "core/bus",
      "core/config",
      "common/models",
      "common/urls",
      "core/models/Session",
      "core/UniqueModel",
      "core/utils/cookies",
      "core/utils/url/serialize",
      "core/WindowBus",
      "common/keys",
      "common/utils",
      "common/collections/LoggedOutCache",
      "recommendations/common",
      "recommendations/tracking",
    ],
    function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
      "use strict";
      var s,
        t = 3500,
        u = {},
        v = new m(),
        w = i.extend({
          _defaults: {
            canReply: !0,
            canModerate: !1,
            audienceSyncVerified: !1,
            sso: null,
          },
          socialLoginProviders: {
            facebook: function () {
              var b = a.Deferred();
              return (
                require(["fb"], b.resolve.bind(b), b.reject.bind(b)),
                b
                  .promise()
                  .then(function () {
                    window.FB.init({
                      appId: n.facebook,
                      xfbml: !1,
                      status: !0,
                      version: "v2.8",
                    });
                    var b = a.Deferred();
                    return (
                      window.FB.getLoginStatus(function (a) {
                        "connected" === a.status ? b.resolve(a) : b.reject();
                      }),
                      b.promise()
                    );
                  })
                  .then(function (a) {
                    c.logStat("lounge.auto_login.fb");
                    var b = a.authResponse;
                    return {
                      grant_type:
                        "urn:disqus:params:oauth:grant-type:facebook-login",
                      client_id: n.embedAPI,
                      expires: b.expiresIn,
                      fb_access_token: b.accessToken,
                    };
                  })
              );
            },
            google: function () {
              var b = a.Deferred();
              return (
                require(["gapi"], function (a) {
                  setTimeout(b.reject.bind(b), t),
                    a.load("auth2", b.resolve.bind(b, a));
                }, b.reject.bind(b)),
                b
                  .promise()
                  .then(function (b) {
                    var c = b.auth2.init({
                        client_id: n.google,
                        fetch_basic_profile: !1,
                        scope: "profile email",
                      }),
                      d = a.Deferred();
                    return (
                      c.then(function () {
                        c.isSignedIn.get()
                          ? d.resolve(c.currentUser.get())
                          : d.reject();
                      }),
                      d.promise()
                    );
                  })
                  .then(function (a) {
                    c.logStat("lounge.auto_login.google");
                    var b = a.getAuthResponse();
                    return {
                      grant_type:
                        "urn:disqus:params:oauth:grant-type:google-login",
                      client_id: n.embedAPI,
                      expires: b.expires_in,
                      google_access_token: JSON.stringify(b),
                    };
                  })
              );
            },
          },
          defaults: function () {
            var a = new p.Collection(p.LOGGED_OUT_NOTES, {
              session: this,
            });
            return b.extend(this._defaults, {
              notificationCount: a.getUnread().length,
            });
          },
          start: function (b) {
            var c = b || {};
            if (
              (this.set(c),
              this.listenTo(v, "auth:success", this.fetch),
              this.listenTo(e.frame, {
                "!auth:success": function (a) {
                  a &&
                    (a.sessionId &&
                      d.headers({
                        "X-Sessionid": a.sessionId,
                      }),
                    a.message &&
                      this.trigger("alert", a.message, {
                        type: "info",
                      }),
                    a.logEvent && e.trigger("uiAction:" + a.logEvent)),
                    v.broadcast("auth:success"),
                    this.fetch();
                },
              }),
              this.bindAudienceSyncHandlers(),
              this.shouldFetchSession())
            )
              this.fetch();
            else if (k.read("no_auto_login") || r.isPrivate())
              this.loginAsAnon();
            else {
              var f = this.socialLoginProviders,
                g = !1,
                h = 0,
                i = a.Deferred(),
                j = Object.keys(f).map(function (a) {
                  return f[a].call(this);
                }, this),
                l = function (a) {
                  g || ((g = !0), i.resolve(a));
                },
                m = function (a) {
                  (h += 1), h === j.length && i.reject(a);
                };
              j.forEach(function (a) {
                a.then(l).fail(m);
              }),
                i
                  .promise()
                  .then(function (b) {
                    return a.post(
                      "https://disqus.com/api/oauth/2.0/access_token/",
                      b
                    );
                  })
                  .then(
                    function (a) {
                      this.fetch({
                        data: {
                          access_token: a.access_token,
                        },
                      });
                    }.bind(this)
                  )
                  .fail(this.loginAsAnon.bind(this));
            }
          },
          stop: function () {
            this.stopListening(), this.off();
          },
          loginAsAnon: function () {
            this.setUser(this.getAnonUserInstance());
          },
          shouldFetchSession: function () {
            return Boolean(this.get("remoteAuthS3") || u.fromCookie().id);
          },
          getUserInstance: function (a) {
            return new j(g.User, a);
          },
          toJSON: function () {
            var a = this.user.toJSON.apply(this.user, arguments);
            return (
              (a.thread.canReply = this.get("canReply")),
              a.thread.canModerate ||
                (a.thread.canModerate = this.get("canModerate")),
              a
            );
          },
          fetch: function (a) {
            var b = this,
              c = a || {};
            b.has("thread") && (c.thread = b.get("thread"));
            var d = c.thread
              ? b.fetchThreadDetails(c)
              : i.prototype.fetch.call(b, c);
            return (
              d.done(function () {
                b.set("notificationCount", 0);
              }),
              d
            );
          },
          fetchNotificationCount: function () {
            var b = this;
            return b.isLoggedIn()
              ? d
                  .call("timelines/getUnreadCount.json", {
                    data: {
                      type: "notifications",
                      routingVersion: f.feedApiVersion,
                    },
                  })
                  .done(function (a) {
                    b.set("notificationCount", a.response);
                  })
              : a.Deferred().resolve();
          },
          fetchThreadDetails: function (a) {
            var c = this,
              e = a.thread;
            c._request && (c._request.abort(), (c._request = null));
            var f = {
              thread: e.id,
              post: e.posts.pluck("id"),
            };
            return (
              (c._request = d.call("embed/threadDetails.json", {
                data: f,
                success: function (a) {
                  var d = a.response,
                    f = {};
                  d.user &&
                    b.extend(f, d.user, {
                      votes: d.votes,
                    }),
                    c.set(d.session),
                    f.id
                      ? (c.setUser(new j(g.User, f)),
                        e.users.add(c.user),
                        d.thread &&
                          (e.set("userScore", d.thread.userScore),
                          e.set("userSubscription", d.thread.userSubscription),
                          e.set("userRating", d.thread.userRating)))
                      : c.loginAsAnon(),
                    d.blockedUsers &&
                      b.each(d.blockedUsers, function (a) {
                        new j(g.User, {
                          id: a,
                        }).set({
                          isBlocked: !0,
                        });
                      }),
                    c.trigger("fetchThreadDetails:success");
                },
                complete: function () {
                  c._request = null;
                },
              })),
              c._request
            );
          },
          logout: function () {
            var a = this.get("sso");
            this.isSSO() && a && a.logout
              ? e.frame.sendHostMessage("navigate", a.logout)
              : this.locationReplace(
                  l(h.logout, {
                    redirect: window.location.href,
                  })
                );
          },
          locationReplace: function (a) {
            window.location.replace(a);
          },
          isSSO: function () {
            return this.user && "sso" === this.user.get("user_type");
          },
          getAuthWindowArgs: function (a) {
            var c = i.prototype.getAuthWindowArgs.call(this, a),
              d = q.getLounge().config;
            if (a.attachExperiment && d && d.experiment) {
              var e = d.experiment;
              c.evs = window.btoa(
                [e.experiment, e.variant, e.service].join(":")
              );
            }
            return b.defaults(
              {
                forum: this.get("thread") && this.get("thread").forum.id,
              },
              c
            );
          },
          openAuthWindow: function (a, b, c) {
            try {
              var d = this.get("thread"),
                e = d && d.currentUrl;
              window.sessionStorage &&
                e &&
                window.sessionStorage.setItem("discussionUrl", e);
            } catch (f) {}
            return i.prototype.openAuthWindow.call(this, a, b, c);
          },
          authServices: b.defaults(
            {
              disqusDotcom: {
                url: h.dotcomLogin,
                width: 478,
                height: 590,
                params: {
                  next: h.login,
                },
                attachExperiment: !0,
              },
              sso: function x() {
                var x = this.get("sso"),
                  a = parseInt(x.width || "800", 10),
                  c = parseInt(x.height || "500", 10),
                  d = this.openAuthWindow(x.url, a, c);
                !(function f() {
                  o.isWindowClosed(d)
                    ? e.frame.sendHostMessage("reload")
                    : b.delay(f, 500);
                })();
              },
            },
            i.prototype.authServices
          ),
          bindAudienceSyncHandlers: function () {
            this.listenTo(
              this,
              "change:id change:audienceSyncVerified",
              function () {
                this.get("audienceSyncVerified") &&
                  e.frame.sendHostMessage("session.identify", this.user.id);
              }
            ),
              this.listenTo(e.frame, {
                "!audiencesync:grant": function () {
                  this.set("audienceSyncVerified", !0);
                },
              });
          },
          getAudienceSyncUrl: function () {
            var a = {
              client_id: this.get("apiKey"),
              response_type: "audiencesync",
              forum_id: this.get("thread").forum.id,
            };
            return (
              "https:" === window.location.protocol && (a.ssl = 1),
              l(h.authorize, a)
            );
          },
          audienceSync: function () {
            this.openAuthWindow(this.getAudienceSyncUrl(), 460, 355);
          },
          needsAudienceSyncAuth: function (a) {
            return (
              a.get("settings").audienceSyncEnabled &&
              this.isLoggedIn() &&
              !this.get("audienceSyncVerified")
            );
          },
          getLoggedOutUserFlags: function () {
            return this._loggedOutUserFlags
              ? this._loggedOutUserFlags
              : ((this._loggedOutUserFlags = new p.Collection(
                  p.LOGGED_OUT_FLAGS,
                  {
                    session: this,
                  }
                )),
                this._loggedOutUserFlags);
          },
        });
      return (
        b.extend(
          u,
          b
            .chain(w)
            .keys()
            .map(function (a) {
              return [a, w[a]];
            })
            .object()
            .value(),
          {
            get: function () {
              return (s = s || new w());
            },
            setDefaults: function (a) {
              if (s)
                throw new Error(
                  "Session defaults cannot be changed after a session instance is created!"
                );
              return (
                (w._defaults = b.extend(w.prototype._defaults, a)), w._defaults
              );
            },
            forget: function () {
              s && (s.stop(), (s = null));
            },
          }
        ),
        u
      );
    }
  ),
  define("core/utils/html", [], function () {
    "use strict";
    var a = "...",
      b = a.length,
      c = function (a) {
        var b;
        try {
          b = new window.DOMParser().parseFromString(
            "<!doctype html><meta charset=utf-8><title> </title>",
            "text/html"
          );
        } catch (c) {}
        return (
          b || (b = window.document.implementation.createHTMLDocument("")),
          b.body && (b.body.innerHTML = a),
          b
        );
      };
    return {
      stripTags: function (a) {
        var b = c(a).body;
        return (b.textContent || b.innerText).replace(/\r?\n/g, " ");
      },
      replaceAnchors: function (a, d) {
        var e = c(a);
        return (
          [].forEach.call(e.querySelectorAll("a"), function (a) {
            var c = a.getAttribute("href") || "",
              e = a.innerHTML,
              f = d(a);
            0 === c.indexOf(e.slice(0, -b))
              ? (e = f)
              : c.length && e.indexOf(c) !== -1
              ? (e = e.replace(c, f))
              : (e += " " + f),
              a.insertAdjacentHTML("afterend", e),
              a.parentNode.removeChild(a);
          }),
          e.body.innerHTML.trim()
        );
      },
    };
  }),
  define(
    "recommendations/models",
    ["backbone", "moment", "core/time"],
    function (a, b, c) {
      "use strict";
      var d = (function (a) {
        var d = a.prototype;
        return a.extend({
          defaults: {
            threadId: null,
            forumId: null,
            forum: null,
            threadForum: null,
            requestBin: null,
            createdAgo: !1,
          },
          initialize: function (a, d) {
            if (
              (this.set("threadForum", a.forum), d && d.humanFriendlyTimestamp)
            ) {
              var e = c.assureTzOffset(this.get("createdAt"));
              (e = b(e, c.ISO_8601)), this.set("createdAgo", e.fromNow());
            }
          },
          toJSON: function () {
            var a = d.toJSON.call(this);
            return a.preview && (a.preview = a.preview.toJSON()), a;
          },
          toString: function () {
            return (
              "recommendations link: " +
              this.get("title") +
              " " +
              this.get("link") +
              " (id = " +
              this.id +
              ")"
            );
          },
        });
      })(a.Model);
      return {
        RelatedThread: d,
      };
    }
  ),
  define(
    "recommendations/collections",
    [
      "underscore",
      "backbone",
      "loglevel",
      "core/api",
      "core/utils/html",
      "recommendations/models",
    ],
    function (a, b, c, d, e, f) {
      "use strict";
      var g = 1e4,
        h = b.Collection.extend({
          url: d.getURL("discovery/listTopPost.json"),
          parse: function (a) {
            for (
              var c = b.Collection.prototype.parse.call(this, a),
                d = 0,
                f = c.length;
              d < f;
              d++
            )
              c[d].plaintext = e.stripTags(c[d].message);
            return c;
          },
        }),
        i = b.Collection.extend(
          {
            url: d.getURL("discovery/listRecommendations.json"),
            initialize: function (a, b) {
              (this.model = f.RelatedThread),
                (this.forum = b.forum),
                (this.minLength = b.minLength),
                (this.maxLength = b.maxLength),
                (this.settings = b.settings),
                (this.featuredComments = b.featuredComments),
                (this.forumUrl = b.forumUrl),
                (this.identifier = b.identifier),
                (this.threadUrl = b.threadUrl);
            },
            addClickMetadata: function (a) {
              this.invoke("set", a);
            },
            fetch: function () {
              var a;
              this.identifier
                ? (a = "ident:" + this.identifier)
                : this.threadUrl && (a = "url:" + this.threadUrl);
              var d = {
                  timeout: g,
                  data: {
                    forum: this.forum,
                    thread: a,
                    limit: this.maxLength,
                  },
                  reset: !0,
                  humanFriendlyTimestamp: !0,
                },
                e = Promise.resolve(b.Collection.prototype.fetch.call(this, d)),
                f = this;
              return (
                this.featuredComments &&
                  (e = e.then(function () {
                    return f.getFeaturedPosts()["catch"](function (a) {
                      c.info(
                        "There was a problem fetching featured comments: ",
                        a
                      );
                    });
                  })),
                e
              );
            },
            parse: function (a) {
              var c = b.Collection.prototype.parse.call(this, a);
              return this.validateThreads(c);
            },
            validateThreads: function (a) {
              var b = this,
                c = a.filter(function (a) {
                  return (
                    Boolean(a.id) &&
                    Boolean(a.images.length) &&
                    Boolean(a.title) &&
                    Boolean(a.description) &&
                    Boolean(a.url)
                  );
                });
              return this.forumUrl
                ? ((this.forumUrl = this.forumUrl
                    .replace(/(^\w+:|^)\/\/(www\.)?/, "")
                    .split("/")[0]
                    .toLowerCase()),
                  c.filter(function (a) {
                    return a.url.indexOf(b.forumUrl) > -1;
                  }))
                : c;
            },
            getFeaturedPosts: function () {
              var b = this.map(function (a) {
                return parseInt(a.get("id"), 10);
              });
              if (b.length < this.minLength) return Promise.resolve();
              b.sort(function (a, b) {
                return a - b;
              });
              var c = Promise.resolve(
                this.previews.fetch({
                  data: {
                    thread: b,
                  },
                  timeout: i.CONTENT_PREVIEWS_FETCH_TIMEOUT,
                })
              );
              return c.then(a.bind(this.attachPreviews, this));
            },
            attachPreviews: function () {
              this.previews.each(function (a) {
                var b = a.get("thread"),
                  c = this.get(b);
                c && c.set("preview", a);
              }, this);
            },
          },
          {
            CONTENT_PREVIEWS_FETCH_TIMEOUT: 5e3,
          }
        ),
        j = {
          PostCollection: h,
          RelatedThreadCollection: i,
        };
      return j;
    }
  ),
  define(
    "recommendations/helpers",
    ["underscore", "jquery", "loglevel"],
    function (a, b, c) {
      "use strict";
      var d = function (d, e) {
          function f() {
            var a = 0.2;
            return j.scrollHeight - j.offsetHeight > a * k;
          }

          function g() {
            i.lastChild &&
              !a.contains(["...", "…"], i.lastChild.nodeValue) &&
              ((l = i.appendChild(window.document.createTextNode(" " + o))),
              f() && (i.removeChild(l), i.removeChild(i.lastChild), g()));
          }
          if (!d.closest("body").length)
            return void c.info("lineTruncate called on el not on DOM");
          if (d.text().length < 1)
            return void c.info("lineTruncated called on empty el");
          var h = function (a) {
            return 3 !== a.nodeType;
          };
          if (a.any(d.children(), h))
            return void c.info("lineTruncate called on non-flat el");
          var i = d[0],
            j = i;
          if ("block" !== d.css("display"))
            for (
              ;
              j.parentNode &&
              ((j = j.parentNode), "block" !== b(j).css("display"));

            );
          var k = parseFloat(d.parent().css("font-size"), 10);
          if (f()) {
            e = e || {};
            var l,
              m,
              n = e.lines || 1,
              o = e.ellipsis,
              p = d.text();
            if (p.length) {
              var q = d.width() / k,
                r = parseInt(q * n, 10),
                s = p.split(/\s/),
                t = 0;
              d.empty();
              var u = s.length;
              for (m = 0; m < u && ((t += s[m].length + 1), !(t >= r)); m++)
                0 !== m && (s[m] = " " + s[m]),
                  i.appendChild(window.document.createTextNode(s[m]));
              if (f())
                for (; i.lastChild && f(); ) l = i.removeChild(i.lastChild);
              else {
                do
                  (l = i.appendChild(
                    window.document.createTextNode(" " + s[m])
                  )),
                    (m += 1);
                while (!f() && m < u);
                i.removeChild(l);
              }
              o && (a.isString(o) || (o = "…"), g());
            }
          }
        },
        e = ["product", "zone", "service", "experiment", "variant"],
        f = function (b) {
          b = b || "";
          var c = a.object(e, b.split(":"));
          return {
            bin: b,
            experiment: c.experiment || "",
            variant: c.variant || "",
          };
        };
      return {
        lineTruncate: d,
        binToEventParams: f,
      };
    }
  ),
  define("recommendations/models/State", ["backbone"], function (a) {
    "use strict";
    var b = {
      UNTOUCHED: 1,
      PROCESSING: 2,
      DONE: 4,
    };
    return a.Model.extend(
      {
        defaults: {
          status: b.UNTOUCHED,
          placement: null,
          error: null,
        },
        isResolved: function () {
          return this.isDone() && !this.get("error");
        },
        isRejected: function () {
          return this.isDone() && this.get("error");
        },
        isDone: function () {
          return this.get("status") === b.DONE;
        },
      },
      {
        STATUS: b,
      }
    );
  }),
  define(
    "recommendations/models/Container",
    [
      "underscore",
      "backbone",
      "core/analytics/jester",
      "common/Session",
      "recommendations/helpers",
      "recommendations/models/State",
    ],
    function (a, b, c, d, e, f) {
      "use strict";
      return b.Model.extend({
        initialize: function (b) {
          var c = this;
          (c.app = b.app),
            (c.threads = b.threads),
            (c.collections = []),
            a.bindAll(c, "prepareData", "validateCollectionMin"),
            c.set("sectionNames", ["col-organic"]),
            c.set(
              "sectionIds",
              a.map(c.get("sectionNames"), function (a) {
                return a + "-" + c.cid;
              })
            ),
            c.collections.push(this.threads),
            (this.state = new f()),
            c.threads &&
              c.threads.each(function (a) {
                a.state = c.state;
              });
        },
        validateCollectionMin: function () {
          for (
            var a = this.collections,
              b = this.get("sectionNames").slice(0),
              c = this.get("sectionIds").slice(0),
              d = a.length;
            d > 0;

          ) {
            d -= 1;
            var e = a[d];
            e.length < e.minLength &&
              (a.splice(d, 1), b.splice(d, 1), c.splice(d, 1), (d = a.length));
          }
          this.set("sectionNames", b), this.set("sectionIds", c);
        },
        prepareData: function () {
          var a = this.commonClickMetadata();
          this.threads.addClickMetadata(a);
        },
        validateData: function () {
          this.validateCollectionMin(), this.prepareData();
        },
        commonClickMetadata: function () {
          var a = this.app,
            b = a.get("forum"),
            c = {
              forumId: b.get("pk"),
              forum: b.id,
              requestBin: a.get("requestBin"),
            };
          return d.isKnownToBeLoggedOut() || (c.userId = d.fromCookie().id), c;
        },
        report: function (b) {
          a.isEmpty(b) || c.client.emit(a.extend(this.snapshot(), b));
        },
        snapshot: function () {
          var b = this.threads,
            c = this.app,
            f = e.binToEventParams(c.get("requestBin")),
            g = d.isKnownToBeLoggedOut()
              ? {}
              : {
                  userId: d.fromCookie().id,
                },
            h = a.extend(
              {
                internal_organic: b && b.length,
                external_organic: 0,
                promoted: 0,
                display: !0,
                placement: this.state.get("placement"),
                zone: "thread",
                area: this.state.get("placement"),
                thread_id: c.get("thread").id,
                forum_id: c.get("forum").get("pk"),
              },
              g,
              f,
              {
                object_type: "link",
              }
            );
          return h;
        },
      });
    }
  ),
  define("common/jsxUtils", ["underscore"], function (a) {
    "use strict";
    return {
      append: function (b, c) {
        var d = function e(c) {
          if (null !== c)
            return a.isArray(c)
              ? void c.forEach(e)
              : a.isElement(c) ||
                (c && c.nodeType === window.Node.DOCUMENT_FRAGMENT_NODE)
              ? void b.appendChild(c)
              : void b.appendChild(window.document.createTextNode(c));
        };
        d(c);
      },
    };
  });
var _extends =
  Object.assign ||
  function (a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b];
      for (var d in c)
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    }
    return a;
  };
define(
  "react",
  ["jquery", "underscore", "common/jsxUtils"],
  function (a, b, c) {
    "use strict";
    var d = window.document;
    return {
      createElement: function (e, f) {
        for (
          var g = arguments.length, h = Array(g > 2 ? g - 2 : 0), i = 2;
          i < g;
          i++
        )
          h[i - 2] = arguments[i];
        if ("function" == typeof e) {
          h.length > 0 &&
            (f = _extends(
              {
                children: 1 === h.length ? h[0] : h,
              },
              f
            ));
          var j = e(f);
          if (b.isArray(j)) {
            var k = d.createDocumentFragment();
            return c.append(k, j), k;
          }
          return j;
        }
        if ("string" != typeof e) throw new Error("Unknown type");
        var l = d.createElement(e),
          m = !1;
        return (
          f &&
            Object.keys(f).forEach(function (b) {
              var c = f[b];
              if (/^(?:data-|aria-|role$)/.test(b))
                null !== c && l.setAttribute(b, c);
              else if ("dangerouslySetInnerHTML" === b)
                (m = !0), (l.innerHTML = (c && c.__html) || "");
              else if ("style" === b)
                Object.keys(c).forEach(function (a) {
                  l.style[a] = c[a];
                });
              else if (/^on[A-Z]/.test(b))
                c && a(l).on(b.slice(2).toLowerCase(), c);
              else if ("key" === b);
              else
                try {
                  l[b] = c;
                } catch (d) {}
            }),
          m || c.append(l, h),
          l
        );
      },
    };
  }
),
  define("react-dom", ["common/jsxUtils"], function (a) {
    "use strict";
    return {
      render: function (b, c, d) {
        return (c.innerHTML = ""), a.append(c, b), d && d(), null;
      },
    };
  }),
  define("core/utils/object/get", [], function () {
    "use strict";
    return function (a, b, c) {
      for (var d = 0, e = b.length; a && d < e; ) (a = a[b[d]]), (d += 1);
      return d < e || void 0 === a ? c : a;
    };
  });
var _extends =
  Object.assign ||
  function (a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b];
      for (var d in c)
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    }
    return a;
  };
define("templates/recommendationsCollection", [
  "underscore",
  "react",
  "core/strings",
  "core/utils/object/get",
], function (a, b, c, d) {
  "use strict";
  var e = c.gettext,
    f = function (c) {
      return a.map(c.collection, function (a, d) {
        return b.createElement(g, {
          index: d,
          post: a,
          settings: c.settings,
          onError: c.onError,
        });
      });
    },
    g = function (a) {
      var c = a.index,
        f = a.post,
        g = a.settings,
        j = a.onError;
      return b.createElement(
        "div",
        {
          className: "recommend-post post-" + c,
          id: "recommend-link-" + f.domIdSuffix,
          "data-role": "recommended-post",
          "data-link": f.recommendationLink,
          tabIndex: "0",
        },
        b.createElement(
          "header",
          {
            className: "recommend-post-header",
          },
          b.createElement(
            "div",
            {
              className: "recommend-image-wrapper",
            },
            b.createElement("img", {
              src: f.images[0].url,
              alt: f.title,
              title: f.title,
              onError: j,
            }),
            b.createElement("span", {
              className: "overlay",
            })
          ),
          g.disableOverlay
            ? null
            : b.createElement(
                "h3",
                {
                  className: "recommend-post-title",
                  title: f.title,
                },
                b.createElement("span", {
                  "data-role": "recommend-thread-title",
                  className: "title line-truncate",
                  "data-line-truncate": d(g, ["numLinesHeadline"], ""),
                  "data-content": f.title,
                  dangerouslySetInnerHTML: {
                    __html: f.title,
                  },
                })
              )
        ),
        b.createElement(
          "ul",
          {
            className: "meta",
          },
          g.metaDate
            ? b.createElement(
                "li",
                {
                  className: "time",
                },
                f.createdAgo
              )
            : null,
          " ",
          g.metaComments && f.posts > 0
            ? b.createElement(
                "li",
                {
                  className: "comments",
                },
                1 === f.posts
                  ? e("1 comment")
                  : e("%(numPosts)s comments", {
                      numPosts: f.posts,
                    }),
                " "
              )
            : null
        ),
        g.contentPreview
          ? b.createElement(
              h,
              _extends(
                {
                  settings: g,
                },
                f
              )
            )
          : null,
        g.featuredComment && !g.contentPreview ? b.createElement(i, f) : null
      );
    },
    h = function (a) {
      return b.createElement(
        "div",
        {
          className: "content-preview-wrapper",
        },
        b.createElement(
          "div",
          {
            className: "recommend-content",
          },
          a.settings.titleHidden || !a.settings.disableOverlay
            ? b.createElement(
                "span",
                {
                  "data-role": "recommend-description-snippet",
                  className: "line-truncate",
                  "data-line-truncate": "5",
                },
                a.description
              )
            : b.createElement(
                "h3",
                {
                  className: "recommend-post-title",
                  title: a.title,
                },
                b.createElement("span", {
                  "data-role": "recommend-thread-title",
                  className: "title line-truncate",
                  "data-line-truncate": 3,
                  "data-content": a.title,
                  dangerouslySetInnerHTML: {
                    __html: a.title,
                  },
                })
              )
        )
      );
    },
    i = function (a) {
      return b.createElement(
        "div",
        {
          className: "top-comment",
          "data-role": "recommend-top-comment",
        },
        b.createElement(
          "div",
          {
            className: "top-comment-header",
          },
          b.createElement(
            "span",
            {
              className: "top-comment-avatar-wrapper",
            },
            b.createElement("img", {
              "data-src": d(a.preview, ["author", "avatar", "cache"], ""),
              alt: e("Avatar"),
              "data-role": "recommend-avatar",
            })
          ),
          b.createElement(
            "span",
            {
              className: "user publisher-color",
              "data-role": "recommend-top-comment-author",
            },
            d(a.preview, ["author", "name"], null)
          )
        ),
        b.createElement(
          "div",
          {
            className: "recommend-top-comment-wrapper",
          },
          b.createElement("span", {
            "data-role": "recommend-top-comment-snippet",
            className: "line-truncate",
            "data-line-truncate": "3",
            dangerouslySetInnerHTML: {
              __html: d(a.preview, ["message"], null),
            },
          })
        )
      );
    };
  return f;
});
var _extends =
  Object.assign ||
  function (a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b];
      for (var d in c)
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    }
    return a;
  };
define(
  "recommendations/views/links/BaseCollectionView",
  [
    "underscore",
    "jquery",
    "backbone",
    "react",
    "react-dom",
    "recommendations/helpers",
    "templates/recommendationsCollection",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = c.View.extend({
      events: {
        "click [data-redirect]": "handleClick",
      },
      handleClick: function (a) {
        this.swapHref(a.currentTarget);
      },
      swapHref: function (b) {
        b.setAttribute("data-href", b.getAttribute("href")),
          b.setAttribute("href", b.getAttribute("data-redirect"));
        var c = 100;
        a.delay(function () {
          b.setAttribute("href", b.getAttribute("data-href"));
        }, c);
      },
      initialize: function (a) {
        (this.app = a.model.app),
          (this.initContext = a.context),
          (this.settings = a.settings),
          (this.adSupported = a.adSupported),
          (this.elementsSelector = "div.recommend-post"),
          (this.$elements = this.$el.find(this.elementsSelector));
        var b = this.collection;
        this.listenTo(b, {
          remove: this.remove,
          reset: this.render,
        });
      },
      truncate: function () {
        var c = this.$el.find(".line-truncate");
        a.each(c, function (a) {
          var c = b(a);
          f.lineTruncate(c, {
            lines: parseInt(c.attr("data-line-truncate"), 10),
            ellipsis: !0,
          });
        });
      },
      metaPlacement: function () {
        var c = this.$el.find(".meta"),
          d = this.$el.find(".recommend-post-title");
        c.length &&
          "absolute" === b(c[0]).css("position") &&
          a.each(c, function (a, c) {
            var e = 10,
              f = e + "px";
            if (d.length) {
              var g = b(d[c]),
                h = parseInt(g.context.offsetHeight, 10),
                i = Math.ceil(parseFloat(g.css("line-height")) / 2),
                j = 7;
              f = Math.ceil(i + h + j).toString() + "px";
            }
            b(a).css({
              bottom: f,
            });
          });
      },
      resizeImage: function (a) {
        var b = this.app.get("cardWidth"),
          c = this.app.get("cardHeight"),
          d = 0,
          e = a.images[0];
        return (
          e.width > b && e.height > c
            ? e.height < e.width
              ? ((d = c / e.height),
                (e.height = c),
                (e.width *= d),
                (e.url += "&h=" + e.height))
              : ((d = b / e.width),
                (e.width = b),
                (e.height *= d),
                (e.url += "&w=" + e.width))
            : e.size || (e.url += "&h=" + c),
          (a.image = e),
          a
        );
      },
      getTemplateContext: function () {
        this.appContext || (this.appContext = this.model.app.toJSON()),
          (this.settings = a.extend(this.settings, this.appContext));
        var b = a.extend(
          {
            settings: this.settings,
          },
          this.initContext
        );
        b.collection = this.collection.toJSON();
        var c = a.bind(this.resizeImage, this);
        b.collection = b.collection.reduce(function (a, b) {
          return a.push(c(b)), a;
        }, []);
        var d = this.collection.at(0);
        if (d) {
          var e = d.has("id") ? "organic-" : "promoted-",
            f = d.idAttribute;
          a.each(b.collection, function (a) {
            (a.advertisement_id = a[f]),
              (a.domIdSuffix = a[f]),
              (a.domIdSuffix = e + a.domIdSuffix),
              (a.recommendationLink = a.url);
          });
        }
        return b;
      },
      onImageError: function (a) {
        a.target.src =
          "https://c.disquscdn.com/next/recommendations/assets/img/img-placeholder.df52e7638153b73862008d3d0556fdda.png";
      },
      render: function () {
        var a = this.getTemplateContext();
        return (
          this.el.children.length ||
            e.render(
              d.createElement(
                g,
                _extends(
                  {
                    onError: this.onImageError,
                  },
                  a
                )
              ),
              this.el
            ),
          (this.$elements = this.$el.find(this.elementsSelector)),
          this.truncate(),
          this.metaPlacement(),
          this
        );
      },
      remove: function (d, e, f) {
        if (0 === arguments.length) return c.View.prototype.remove.call(this);
        var g = a.toArray(this.$elements),
          h = g.splice(f.index, 1)[0];
        return b(h).remove(), (this.$elements = b(g)), this;
      },
    });
    return h;
  }
),
  define(
    "templates/recommendationsMain",
    ["underscore", "react", "core/strings", "core/utils/object/get"],
    function (a, b, c, d) {
      "use strict";
      var e = c.gettext,
        f = function (c) {
          var f = c.settings.contentPreview ? "" : "no-preview";
          f =
            c.settings.titleHidden || !c.settings.disableOverlay
              ? f
              : "has-preview-title";
          var g =
            c.settings.metaDate || c.settings.metaComments ? "" : "no-meta";
          return b.createElement(
            "div",
            {
              id: c.id,
              className: "recommend-main " + f + " " + g,
            },
            a.map(c.sections, function (a) {
              return b.createElement(
                "section",
                {
                  id: a.id,
                  className: a.className,
                },
                b.createElement(
                  "header",
                  {
                    id: "recommendations-header",
                    className: "recommend-col-header",
                  },
                  b.createElement(
                    "h2",
                    {
                      className: "recommendations-unit-title",
                    },
                    e("Also on %(forumName)s", {
                      forumName: b.createElement(
                        "strong",
                        {
                          className: "recommendations-forum",
                        },
                        d(c.forum, ["name"], null)
                      ),
                    })
                  )
                ),
                b.createElement(
                  "div",
                  {
                    className: "recommendations-unit",
                  },
                  b.createElement(
                    "div",
                    {
                      className: "recommendation-container",
                    },
                    b.createElement(
                      "button",
                      {
                        className: "scroll-btn scroll-left",
                        "data-action": "scroll-left",
                        tabIndex: "-1",
                      },
                      "❮"
                    ),
                    b.createElement(
                      "div",
                      {
                        className: "recommend-wrapper",
                      },
                      b.createElement("div", {
                        className: "recommend-posts",
                        "data-role": "recommend-posts",
                      })
                    ),
                    b.createElement(
                      "button",
                      {
                        className: "scroll-btn scroll-right",
                        "data-action": "scroll-right",
                        tabIndex: "-1",
                      },
                      "❯"
                    )
                  )
                )
              );
            })
          );
        };
      return f;
    }
  ),
  define(
    "recommendations/views/links/MainView",
    [
      "jquery",
      "underscore",
      "backbone",
      "core/bus",
      "recommendations/views/links/BaseCollectionView",
      "templates/recommendationsMain",
    ],
    function (a, b, c, d, e, f) {
      "use strict";
      var g = c.View.extend({
        events: {
          "click [data-role=recommended-post]": "handleClick",
          "enter [data-role=recommended-post]": "handleClick",
          "click [data-action=scroll-left]": "clickScrollLeft",
          "click [data-action=scroll-right]": "clickScrollRight",
        },
        topEdgeOffset: 0,
        bottomEdgeOffset: 1 / 0,
        initialize: function (a) {
          (a = a || {}),
            (this.settings = a.settings),
            (this.adSupported = a.adSupported);
        },
        handleClick: function (b) {
          var c = a(b.currentTarget),
            e = c.data("link");
          d.trigger("uiAction:recommendationsClick", e),
            b.stopPropagation(),
            window.open(e, "_blank");
        },
        clickScrollLeft: function () {
          this.scroll(-1);
        },
        clickScrollRight: function () {
          this.scroll(1);
        },
        scroll: function (b) {
          var c = a(this.$el.find(".recommend-wrapper")[0]),
            d = a(this.$el.find(".recommend-posts")[0]),
            e = this.$el.find(".recommend-post").length,
            f = d.width() / e,
            g = 2 * f,
            h = 700;
          c.width() < g && ((g = f), (h /= 2));
          var i = c.scrollLeft() + g * b;
          c.animate(
            {
              scrollLeft: i,
            },
            h
          );
        },
        createSections: function () {
          var a = this.model,
            c = a.get("sectionNames"),
            d = a.get("sectionIds");
          return b.map(a.collections, function (a, b) {
            return {
              id: d[b],
              className: c[b],
              collection: a,
            };
          });
        },
        getTemplateContext: function () {
          var a = this.model.app,
            b = this.createSections();
          return {
            id: a.get("innerContainerId"),
            sections: b,
            forum: a.get("forum").toJSON(),
          };
        },
        render: function () {
          var c = this;
          return (
            c.model.validateData(),
            c.renderViews(),
            (c.resizeHandler = b.debounce(function () {
              c.views && b.invoke(c.views, "render");
            }, 100)),
            a(window).on("resize", c.resizeHandler),
            this
          );
        },
        renderViews: function () {
          var c = this.getTemplateContext(),
            d = this;
          (c.settings = d.settings),
            (c.adSupported = d.adSupported),
            this.$el.html(f(c)),
            this.$el.addClass("recommendations-wrapper");
          var g = b.map(c.sections, function (b) {
              return new e({
                model: d.model,
                collection: b.collection,
                settings: c.settings,
                adSupported: c.adSupported,
                el: a("#" + b.id + " [data-role=recommend-posts]"),
                context: {},
              });
            }),
            h = this.$el.width(),
            i = 20;
          this.$el.width(h - i), b.invoke(g, "render"), this.$el.width("100%");
          var j = g[0].$el.width();
          j <= h && this.$el.find(".scroll-btn").hide(), (this.views = g);
        },
        remove: function () {
          c.View.prototype.remove.call(this),
            this.resizeHandler && a(window).off("resize", this.resizeHandler);
        },
      });
      return g;
    }
  ),
  define(
    "recommendations/views/Placement",
    [
      "backbone",
      "core/bus",
      "common/utils",
      "recommendations/views/links/MainView",
    ],
    function (a, b, c, d) {
      "use strict";
      var e = a.View.extend({
        className: "post-list",
        initialize: function (a) {
          (a = a || {}),
            (this.placement = a.placement),
            (this.settings = a.settings),
            (this.adSupported = a.adSupported),
            (this.threadUrl = a.threadUrl),
            (this._enabled = !0),
            this._collapse();
        },
        setRequestBin: function (a) {
          this._bin = a;
        },
        tryPlacement: function (a) {
          this._unsetView(),
            a.state.set("placement", this.placement),
            (this._recommendations = new d({
              model: a,
              settings: this.settings,
              adSupported: this.adSupported,
            })),
            this.$el.html(this._recommendations.el),
            this._recommendations.render(),
            this._expand();
        },
        getCurrentUnit: function () {
          return this._recommendations;
        },
        disable: function () {
          (this._enabled = !1), this._collapse();
        },
        enable: function () {
          (this._enabled = !0), this._expand();
        },
        remove: function () {
          return (
            this._unsetView(), a.View.prototype.remove.apply(this, arguments)
          );
        },
        _unsetView: function () {
          this._recommendations &&
            (this._recommendations.model.state.unset("placement"),
            this._recommendations.remove(),
            (this._recommendations = null));
        },
        _expand: function () {
          if (this._enabled) {
            this.$el.css({
              height: "auto",
              visibility: "visible",
            }),
              this.trigger("recommendations:expanded");
            var a = c.getPageHeight();
            b.frame.sendHostMessage("rendered", {
              height: a,
            });
          }
        },
        _collapse: function () {
          this.$el.css({
            height: 0,
            visibility: "hidden",
          });
        },
      });
      return e;
    }
  ),
  define(
    "recommendations/app",
    [
      "backbone",
      "jquery",
      "loglevel",
      "core/bus",
      "recommendations/collections",
      "recommendations/models/Container",
      "recommendations/views/Placement",
    ],
    function (a, b, c, d, e, f, g) {
      "use strict";
      var h = a.Model.extend({
        defaults: {
          name: "default",
          featuredComments: !1,
          forum: null,
          minLength: 4,
          maxLength: 8,
          cardWidth: 200,
          cardHeight: 200,
          innerContainerName: "recommend-main",
          experiment: "",
          service: "",
          variant: "",
          lineTruncationEnabled: !0,
          numLinesHeadline: 3,
          adSupported: !1,
        },
        initialize: function () {
          (this.$el = b(this.get("el"))),
            (this.forum = this.get("forum")),
            (this.settings = this.get("settings")),
            this.initPlacement(),
            this.createDataCollections(),
            this.run(),
            this.set(
              "innerContainerId",
              this.get("innerContainerName") + "-" + this.cid
            );
        },
        initPlacement: function () {
          (this.position = new g({
            placement: this.settings.placement,
            settings: this.settings,
            adSupported: this.get("adSupported"),
          })),
            b("#recommendations-layout").html(this.position.$el),
            this.listenToOnce(
              this.position,
              "recommendations:expanded",
              function () {
                this.trigger("recommendations:visible");
              }
            );
        },
        createDataCollections: function () {
          var a = {
            forum: this.forum.get("id"),
            minLength: this.get("minLength"),
            maxLength: this.get("maxLength"),
            featuredComments: this.get("featuredComments"),
            settings: this.settings,
            forumUrl: this.forum.get("url"),
            identifier: this.get("identifier"),
            threadUrl: this.get("url"),
          };
          this.threads = new e.RelatedThreadCollection([], a);
        },
        run: function () {
          var a = this;
          return a
            .getRecommendationsData()
            .then(function () {
              return a.threads.length < a.get("minLength")
                ? (c.debug("Not enough recommended threads, bailing out"),
                  void d.frame.sendHostMessage("fail", {
                    height: "0px",
                  }))
                : a.renderRecommendations();
            })
            ["catch"](function (a) {
              c.debug("Recommendations collection failed", a);
            });
        },
        getRecommendationsData: function () {
          return this.threads.fetch();
        },
        renderRecommendations: function () {
          var a = new f({
            app: this,
            threads: this.threads,
          });
          this.position.tryPlacement(a);
        },
      });
      return {
        RecommendationsApp: h,
      };
    }
  ),
  define("templates/recommendationsLayout", ["react"], function (a) {
    "use strict";
    var b = function () {
      return a.createElement(
        "div",
        {
          id: "recommendations-layout",
          className: "recommendations-layout",
          "data-tracking-area": "recommendations-layout",
        },
        a.createElement("div", {
          id: "recommendations-error",
          className: "alert--error",
          style: {
            display: "none",
          },
        })
      );
    };
    return b;
  });
var _extends =
  Object.assign ||
  function (a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b];
      for (var d in c)
        Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
    }
    return a;
  };
define(
  "recommendations/views",
  [
    "backbone",
    "jquery",
    "underscore",
    "loglevel",
    "raven",
    "stance",
    "core/analytics/identity",
    "core/bus",
    "core/mixins/appliesPublisherClasses",
    "core/switches",
    "core/utils",
    "core/utils/isIframed",
    "common/models",
    "common/Session",
    "common/utils",
    "recommendations/app",
    "recommendations/common",
    "templates/recommendationsLayout",
  ],
  function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    "use strict";
    var s = window.document,
      t = a.View.extend({
        initialize: function (a) {
          q.setRecommendations(this),
            (a = a || {}),
            (this.language = s.documentElement.lang),
            n.setDefaults(a.session),
            (this.session = n.get()),
            (this.forum = new m.Forum()),
            this.forum.set(a.forum),
            (this.states = {
              hasError: !1,
              inViewport: !1,
              fullyVisible: !1,
              recommendationsLoaded: !1,
            }),
            (this.options = _extends({}, a, {
              forum: this.forum,
              session: this.session,
            }));
          var b = c.bind(this.bootstrap, this);
          l(window) ? this.listenTo(h.frame, "init", b) : c.defer(b),
            this.renderLayout();
        },
        bootstrap: function (a) {
          (this.config = a = a || o.getConfigFromHash(window)),
            (this.states.fullyVisible = a.startedFullyVisible),
            (this.config.experiment = a.experiment || {}),
            this.activateExperiment(this.config.experiment),
            a.forceSwitch && j.forceFeature(a.forceSwitch),
            g.init({
              isPrivate: a.isPrivate,
            }),
            a.impressionId && g.impression.setImpressionId(a.impressionId),
            this.bindBusListeners(),
            this.applyPublisherClasses(),
            this.forum.get("settings").organicDiscoveryEnabled &&
            a.recsOutsideEmbedEnabled
              ? this.initRecommendations()
              : this.setErrorMessage({
                  message:
                    "It appears that Recommendations are not enabled on the current forum. If you are a moderator you can enable this feature in the {LINK}.",
                  linkText: "settings",
                  linkUrl:
                    "https://" +
                    this.forum.id +
                    ".disqus.com/admin/settings/recommendations",
                }),
            this.trigger("bootstrap:complete", this);
        },
        bindBusListeners: function () {
          this.listenTo(h.frame, {
            "window.scroll": function (a) {
              this.trigger("scroll", a), this.relayScrollToStance(a);
            },
            "window.inViewport": function () {
              (this.states.inViewport = !0), this.trigger("inViewport");
            },
            "window.scrollOffViewport": function () {
              (this.states.inViewport = !1), this.trigger("scrollOffViewport");
            },
            "frame.visible": function () {
              (this.states.fullyVisible = !0), this.trigger("frame.visible");
            },
            error: function (a) {
              (a = JSON.parse(a)),
                e.captureException(a.error, {
                  extra: {
                    details: a.details,
                  },
                  culprit: a.culprit,
                });
            },
          });
        },
        relayScrollToStance: function (a) {
          f.scroll({
            top: a.pageOffset - a.frameOffset.top,
            height: a.height,
          });
        },
        activateExperiment: function (a) {
          if (a.experiment && a.variant) {
            var b = a.experiment,
              c = a.variant;
            (b = b.replace(/_hidden$/, "")),
              j.forceFeature(["experiment", b, c].join(":"));
          }
        },
        initRecommendations: function () {
          this.states.hasError ||
            this.states.recommendationsLoaded ||
            ((this.app = this.createRecommendationsApp()),
            this.listenToOnce(this.app, "recommendations:visible", function () {
              this.expand();
            }),
            (this.states.recommendationsLoaded = !0));
        },
        createRecommendationsApp: function () {
          var a = c.extend(
            {},
            _extends(
              {
                forum: this.options.forum,
                settings: this.options.settings,
                adSupported: Boolean(this.config.recommendationsPlacementUrl),
                identifier: this.config.identifier,
                url: this.config.url,
              },
              this.config.experiment
            )
          );
          return new p.RecommendationsApp(a);
        },
        setErrorMessage: function (a) {
          if (this.states.hasError)
            return void d.debug(a.message.replace("{LINK}", a.linkText));
          this.states.hasError = !0;
          var b = this.$el.find("#recommendations-error"),
            c =
              '<a href="' +
              a.linkUrl +
              '" target="_blank" rel="noopener noreferrer">' +
              a.linkText +
              "</a>";
          b.html(a.message.replace("{LINK}", c)),
            b.show(),
            d.debug(a.message.replace("{LINK}", a.linkText)),
            this.expand();
        },
        whenFullyVisible: function () {
          var a = b.Deferred();
          return (
            this.states.fullyVisible
              ? a.resolve()
              : this.listenTo(this, "frame.visible", function () {
                  a.resolve();
                }),
            a.promise()
          );
        },
        expand: function () {
          var a = o.getPageHeight();
          h.frame.sendHostMessage("rendered", {
            height: a,
          });
        },
        renderLayout: function () {
          this.addFeatureDetectionClasses();
          var a = b(r());
          a.appendTo(this.$el);
        },
        addFeatureDetectionClasses: function () {
          var a = b(s.documentElement);
          k.isMobileUserAgent() && a.addClass("mobile"),
            k.isMobileUserAgent() || a.addClass("use-opacity-transitions");
        },
      });
    return (
      i.call(t.prototype),
      {
        Recommendations: t,
      }
    );
  }
),
  define(
    "recommendations/main",
    [
      "jquery",
      "core/utils/getEmbeddedData",
      "recommendations/tracking",
      "recommendations/views",
    ],
    function (a, b, c, d) {
      "use strict";
      return {
        init: function () {
          var e = b("forumData"),
            f = b("recommendationSettings");
          delete f.id,
            a.extend(e, {
              settings: f,
            });
          var g = new d.Recommendations({
            forum: e.forum,
            settings: e.settings,
            session: e.session,
            el: window.document.body,
          });
          c.init(g);
        },
      };
    }
  ),
  define("recommendations.bundle", function () {});
