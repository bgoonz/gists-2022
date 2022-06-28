(function () {
  "use strict";
  var _config = window.disqus_recommendations_config;
  window.disqus_recommendations_config = function () {
    if (_config) {
      try {
        _config.call(this);
      } catch (err) {
        console.error(
          "There was a problem with the Disqus configuration.",
          err
        );
      }
    }
    this.server_side = {
      bin: "embed:promoted_discovery:dynamic:network_default:fallthrough",
      recs_outside_embed_enabled: "1",
      forum: {
        id: 6693141,
        disable_disqus_branding: false,
        recommendation_placement: "top",
        recommendations_feature_enabled: true,
      },
      service: "dynamic",
      sourceless_iframe: "1",
      variant: "fallthrough",
      forum_id: "6693141",
      recommendations_placement_url: "",
      experiment: "network_default",
      default_placement_url: "",
      t: "1642338161",
      can_disable_ads: "",
    };
  };
})();
!(function (a, b) {
  function c(a) {
    if (Array.isArray(a)) {
      for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
      return c;
    }
    return Array.from(a);
  }

  function d(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }

  function d(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  var e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    $,
    _,
    aa,
    ba,
    ca,
    da,
    ea,
    fa = {},
    ga = {},
    ha = {},
    ia = {},
    ja = {},
    ka = {},
    la = {},
    ma = {};
  (e = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }),
    (f = (function (a) {
      return function (b, c) {
        var d = b.length,
          e = Array.prototype.forEach;
        if (isNaN(d)) for (var f in b) a(b, f) && c(b[f], f, b);
        else if (e) e.call(b, c);
        else for (var g = 0; g < d; g++) c(b[g], g, b);
      };
    })(e)),
    (fa = (function (a) {
      var c = f;
      return (a = function (a) {
        var d = [];
        return (
          c(a, function (a, c) {
            a !== b &&
              d.push(
                encodeURIComponent(c) +
                  (null === a ? "" : "=" + encodeURIComponent(a))
              );
          }),
          d.join("&")
        );
      });
    })(fa)),
    (ga = (function (a) {
      var b = fa;
      return (a = function c(a, d, e) {
        if (
          (d &&
            (a.indexOf("?") === -1
              ? (a += "?")
              : "&" !== a.charAt(a.length - 1) && (a += "&"),
            (a += b(d))),
          e)
        ) {
          var f = {};
          return (f[new Date().getTime()] = null), c(a, f);
        }
        var g = a.length;
        return "&" === a.charAt(g - 1) ? a.slice(0, g - 1) : a;
      });
    })(ga)),
    (ha = (function (b) {
      var c = ga,
        d = a.document,
        e = d.head || d.getElementsByTagName("head")[0] || d.body;
      return (b = function (a, b, f, g) {
        var h = d.createElement("script");
        (h.src = c(a, b, f)),
          (h.async = !0),
          (h.charset = "UTF-8"),
          (h.onload = g),
          e.appendChild(h);
      });
    })(ha)),
    (g = (function () {
      function c() {
        var a = f.createElement("div");
        return (
          a.setAttribute(
            "class",
            "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links ad-text adSense adBlock adContent adBanner"
          ),
          a.setAttribute(
            "style",
            "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"
          ),
          a
        );
      }

      function d(c) {
        if (
          null === c.offsetParent ||
          0 === c.offsetHeight ||
          0 === c.offsetLeft ||
          0 === c.offsetTop ||
          0 === c.offsetWidth ||
          0 === c.clientHeight ||
          0 === c.clientWidth
        )
          return !0;
        if (a.getComputedStyle !== b) {
          var d = a.getComputedStyle(c, null);
          if (
            d &&
            ("none" === d.getPropertyValue("display") ||
              "hidden" === d.getPropertyValue("visibility"))
          )
            return !0;
        }
        return !1;
      }
      var e = 100,
        f = a.document;
      return function (a) {
        var b = c();
        f.body.appendChild(b),
          setTimeout(function () {
            var c = d(b);
            f.body.removeChild(b), a(c);
          }, e);
      };
    })()),
    (h = function (a) {
      try {
        return a.self !== a.top;
      } catch (b) {
        return !0;
      }
    }),
    (i = function (b) {
      return (
        (b = b || a),
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(
          b.navigator.userAgent || b.navigator.vendor || b.opera
        )
      );
    }),
    (j = (function (a, b) {
      return function (c) {
        return (
          a(Array.prototype.slice.call(arguments, 1), function (a) {
            for (var d in a) b(a, d) && (c[d] = a[d]);
          }),
          c
        );
      };
    })(f, e)),
    (k = (function (b) {
      var c = "https:" === a.location.protocol,
        d = {
          root: "https://disqus.com",
          shortener: "http://disq.us",
          logger: "https://x.disq.us",
          media: "https://c.disquscdn.com/next/current/recommendations",
          realertime: "//realtime.services.disqus.com",
          jester: "https://referrer.disqus.com/juggler",
          glitter: "https://glitter.services.disqus.com/urls/",
          login: "https://disqus.com/next/login/",
          dotcomLogin: "https://disqus.com/profile/login/",
          api: "https://disqus.com/api/3.0/",
          logout: "http://disqus.com/logout/",
          verifyEmail: "https://disqus.com/next/verify/",
          authorize: "https://disqus.com/api/oauth/2.0/authorize/",
          oauth: {
            twitter: "https://disqus.com/_ax/twitter/begin/",
            google: "https://disqus.com/_ax/google/begin/",
            facebook: "https://disqus.com/_ax/facebook/begin/",
          },
          avatar: {
            generic:
              "https://c.disquscdn.com/next/recommendations/assets/img/noavatar92.b5e491fa31234c53d6aaf029f9b0c34e.png",
          },
        };
      return (
        c &&
          (d = b(d, {
            logout: "https://disqus.com/logout/",
            editProfile: "https://disqus.com/home/settings/account/",
            moderate: "https://disqus.com/admin/moderate/",
          })),
        d
      );
    })(j)),
    (l = (function (a) {
      return a;
    })(k)),
    (m = (function (c) {
      function d(a) {
        var b = a.split("."),
          c = b.length > 2 ? b[b.length - 2] : "";
        return c.match(/^[0-9a-f]{32}$/i) && c;
      }

      function e(b) {
        new a.Image().src = j(m + "/stat.gif", {
          event: b,
        });
      }

      function g(b) {
        new a.Image().src = j(m + "/event.gif", b);
      }

      function h(c) {
        var d = new a.URLSearchParams();
        i(c, function (a, c) {
          a !== b && d.append(c, a);
        });
        var e = new a.XMLHttpRequest();
        e.open("POST", m + "/event.json", !0),
          (e.withCredentials = !0),
          e.send(d);
      }
      var i = f,
        j = ga,
        k = l,
        m = k.jester;
      return {
        getLoaderVersionFromUrl: d,
        logStat: e,
        reportJester: g,
        reportJesterPOST: h,
      };
    })({})),
    (n = (function () {
      var a;
      return (
        (a =
          "undefined" == typeof console
            ? function () {}
            : "function" == typeof console.log
            ? function () {
                return console.log(
                  Array.prototype.slice.call(arguments, 0).join(" ")
                );
              }
            : function () {
                return console.log.apply(console, arguments);
              }),
        {
          log: a,
        }
      );
    })()),
    (o = (function () {
      function b(b) {
        b = b || {};
        var c = b.Math || a.Math,
          d = b.Date || a.Date;
        try {
          var e = new d().getTimezoneOffset(),
            f = 1,
            g = a.screen;
          g && g.availWidth
            ? (f = g.availWidth * g.availHeight + g.colorDepth)
            : g && g.width && (f = g.width * g.height);
          var h = a.document.documentElement,
            i = h.clientWidth * h.clientHeight;
          return c.abs(17 * e + 25 * f - i);
        } catch (j) {
          return 1;
        }
      }
      return {
        get: b,
      };
    })()),
    (p = (function (b) {
      function c(b) {
        b = b || {};
        var c = b.Uint32Array || a.Uint32Array,
          d = b.crypto || a.crypto,
          e = b.Math || a.Math;
        try {
          var f = new c(1);
          return d.getRandomValues(f), f[0];
        } catch (g) {
          return e.floor(1e9 * e.random());
        }
      }

      function d() {
        var b = a.performance,
          c = b && b.timing;
        if (!c) return 1e5;
        var d = c.domainLookupEnd - c.domainLookupStart,
          e = c.connectEnd - c.connectStart,
          f = c.responseStart - c.navigationStart;
        return 11 * d + 13 * e + 17 * f;
      }

      function e(e) {
        e = e || {};
        var f = e.Math || a.Math,
          g = Number(new Date().getTime().toString().substring(3)),
          h = f.abs(g + d() - b.get()).toString(32);
        return (h += c(e).toString(32));
      }
      return {
        generate: e,
      };
    })(o)),
    (q = (function (b) {
      var c = a.document,
        d = c.createElement("iframe");
      return (
        (d.style.display = "none"),
        function (a, b) {
          var e = (b && b[a]) || null;
          try {
            return (
              d.parentNode !== c.body && c.body.appendChild(d),
              d.contentWindow[a] || e
            );
          } catch (f) {
            return e;
          }
        }
      );
    })({})),
    (r = (function () {
      var c = {
        isIE: function () {
          return Boolean(a.document.documentMode);
        },
        isSafari: function () {
          var b = a.navigator.userAgent.toLowerCase();
          return b.indexOf("safari") > -1 && b.indexOf("chrome") === -1;
        },
        isFirefox: function () {
          var b = a.navigator.userAgent.toLowerCase();
          return b.indexOf("firefox") > -1 && b.indexOf("chrome") === -1;
        },
        isChrome: function () {
          var c = a.navigator.userAgent.toLowerCase();
          return (
            c.indexOf("crios") > -1 ||
            (Boolean(a.chrome) &&
              "Google Inc." === a.navigator.vendor &&
              a.opr === b &&
              c.indexOf("edge") === -1)
          );
        },
        isEdge: function () {
          var b = a.navigator.userAgent.toLowerCase();
          return b.indexOf("edge") > -1;
        },
        isOpera: function () {
          var b = a.navigator.userAgent.toLowerCase();
          return b.indexOf("opera") > -1 || b.indexOf("opr") > -1;
        },
        isCrawler: function (c) {
          c === b && (c = a);
          var d = c.navigator.userAgent;
          return /bot|crawl|slurp|spider|facebookexternalhit|embedly|feedly|pinterest/i.test(
            d
          );
        },
      };
      return c;
    })()),
    (s = function (a) {
      return "[object String]" === Object.prototype.toString.call(a);
    }),
    (t = (function () {
      return a.getComputedStyle
        ? function (b, c, d) {
            try {
              return a.document.defaultView
                .getComputedStyle(b, null)
                .getPropertyValue(c);
            } catch (e) {
              return null;
            }
          }
        : function (a, b, c) {
            return a.currentStyle[b] || a.currentStyle[c];
          };
    })()),
    (u = (function (a) {
      function b(a) {
        return a.replace(/\s+/g, "").toLowerCase();
      }
      var c = f,
        d = s,
        e = j;
      return function (a, f, g) {
        var h = {};
        d(f) ? (h[f] = g) : (h = f);
        var i = e({}, h);
        c(i, function (a, c) {
          var d = b(c);
          d !== c && (delete i[c], (i[d] = a)),
            null === a && (i[d] = ""),
            void 0 === a && delete i[d];
        });
        var j = a.style;
        c(i, function (a, b) {
          j.setProperty(b, String(a), "important");
        });
      };
    })({})),
    (v = (function (b) {
      function c(a) {
        return a.replace(/\s+/g, "").toLowerCase();
      }

      function d(a) {
        return (
          (a = a.replace(/^#([a-f0-9])([a-f0-9])([a-f0-9])$/, "#$1$1$2$2$3$3")),
          (a = a.slice(1)),
          {
            red: parseInt(a.slice(0, 2), 16),
            green: parseInt(a.slice(2, 4), 16),
            blue: parseInt(a.slice(4, 6), 16),
          }
        );
      }

      function e(a) {
        var b = a.match(/^rgb\((\d+),(\d+),(\d+)\)$/);
        return {
          red: parseInt(b[1], 10),
          green: parseInt(b[2], 10),
          blue: parseInt(b[3], 10),
        };
      }

      function f(a) {
        var b = a.match(/^rgba\((\d+),(\d+),(\d+),([\d.]+)\)$/);
        return {
          red: parseInt(b[1], 10),
          green: parseInt(b[2], 10),
          blue: parseInt(b[3], 10),
          alpha: parseFloat(b[4]),
        };
      }

      function g(b, c, d, e) {
        return (
          (c = a.document.createElement(c)),
          i(c, {
            visibility: "hidden",
            color: d,
          }),
          b.appendChild(c),
          (d = e(c)),
          b.removeChild(c),
          d
        );
      }

      function h(b, d) {
        d = d || {};
        var f = d.container || a.document.body;
        return a.getComputedStyle
          ? ((b = g(f, "span", b, function (b) {
              return a.getComputedStyle(b, null).getPropertyValue("color");
            })),
            e(c(b)))
          : ((b = g(f, "textarea", b, function (a) {
              return a.createTextRange().queryCommandValue("ForeColor");
            })),
            {
              red: 255 & b,
              blue: b >>> 16,
              green: (65280 & b) >>> 8,
            });
      }
      var i = u;
      return function (a, b) {
        a = c(a);
        var g;
        if ("transparent" === a)
          return {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 0,
          };
        if ("#" === a.charAt(0)) g = d;
        else if ("rgba(" === a.slice(0, 5)) g = f;
        else if ("rgb(" === a.slice(0, 4)) g = e;
        else {
          if (!/^[a-z]+$/.test(a))
            throw new Error("parseColor received unparseable color: " + a);
          g = h;
        }
        return g(a, b);
      };
    })({})),
    (w = (function (c) {
      function d(a) {
        for (
          var b = [
              /(https?:)?\/\/(www\.)?disqus\.com\/forums\/([\w_-]+)/i,
              /(https?:)?\/\/(www\.)?([\w_-]+)\.disqus\.com/i,
              /(https?:)?\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_-]+)/i,
              /(https?:)?\/\/(www\.)?([\w_-]+)\.dev\.disqus\.org/i,
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = a.match(b[c]);
          if (d && d.length && 4 === d.length) return d[3];
        }
        return null;
      }

      function e(a, b, c) {
        var e = a.querySelector('script[src*="disqus"][src$="' + b + '"]');
        if (e) {
          var f = e.getAttribute ? e.getAttribute("src") : e.src;
          c = c || d;
          var g = c(f);
          return g ? g.toLowerCase() : null;
        }
        return null;
      }

      function f(a, b) {
        var c,
          d,
          e = 0,
          f = new Array(a.length);
        for (c = 0; c <= a.length; c++)
          for (f[c] = new Array(b.length), d = 0; d <= b.length; d++)
            f[c][d] = 0;
        for (c = 0; c < a.length; c++)
          for (d = 0; d < b.length; d++)
            a[c] === b[d] &&
              ((f[c + 1][d + 1] = f[c][d] + 1),
              f[c + 1][d + 1] > e && (e = f[c + 1][d + 1]));
        return e;
      }

      function g() {
        for (
          var a = z.getElementsByTagName("h1"),
            c = z.title,
            d = c.length,
            e = c,
            g = 0.6,
            h = function (a) {
              var h,
                i = a.textContent || a.innerText;
              null !== i &&
                i !== b &&
                ((h = f(c, i) / d), h > g && ((g = h), (e = i)));
            },
            i = 0;
          i < a.length;
          i++
        )
          h(a[i]);
        return e;
      }

      function h(a) {
        return a
          .toLowerCase()
          .replace(/^\s+|\s+$/g, "")
          .replace(/['"]/g, "");
      }

      function i(a) {
        var b = 0,
          c = 1,
          d = 2;
        if (!y("atob") || !y("requestAnimationFrame")) return c;
        try {
          a.postMessage("ping", "*");
        } catch (e) {
          return d;
        }
        return b;
      }

      function j(a, b, c) {
        c = c || b;
        var d = w(a, b, c);
        return !d || (/color/i.test(b) && 0 === x(d).alpha)
          ? (a && j(a.parentNode, b, c)) || d
          : d || null;
      }

      function k(a, b, c, d) {
        u(b) && (b = z.createElement(b));
        var e = null;
        return (
          (b.style.visibility = "hidden"),
          a.appendChild(b),
          (e = j(b, c, d)),
          a.removeChild(b),
          e
        );
      }

      function l(a) {
        for (
          var b,
            c = k(a, "span", "font-family", "fontFamily"),
            d = c.split(","),
            e = {
              courier: 1,
              times: 1,
              "times new roman": 1,
              georgia: 1,
              palatino: 1,
              serif: 1,
            },
            f = 0;
          f < d.length;
          f++
        )
          if (((b = h(d[f])), e.hasOwnProperty(b))) return !0;
        return !1;
      }

      function m(a) {
        var b = z.createElement("a");
        return (
          (b.href = Number(new Date())),
          x(k(a, b, "color"), {
            container: a,
          })
        );
      }

      function n(a) {
        var b = a.red,
          c = a.green,
          d = a.blue;
        if (a.hasOwnProperty("alpha")) {
          var e = a.alpha,
            f = function (a) {
              return Math.round(a * e + 255 * (1 - e));
            };
          (b = f(b)), (c = f(c)), (d = f(d));
        }
        return (299 * b + 587 * c + 114 * d) / 1e3;
      }

      function o(a) {
        var b = k(a, "span", "background-color", "backgroundColor"),
          c = x(b, {
            container: a,
          });
        return 0 === c.alpha ? "light" : n(c) < 128 ? "dark" : "light";
      }
      var p = r,
        u = s,
        w = t,
        x = v,
        y = q,
        z = a.document,
        A = (function () {
          var a,
            b,
            c = function () {
              return !1;
            };
          if ("hidden" in z) (a = "hidden"), (b = "visibilitychange");
          else {
            if (!("webkitHidden" in z))
              return {
                isHidden: c,
                listen: c,
                stopListening: c,
              };
            (a = "webkitHidden"), (b = "webkitvisibilitychange");
          }
          return {
            isHidden: function () {
              return z[a];
            },
            listen: function (a) {
              return z.addEventListener(b, a);
            },
            stopListening: function (a) {
              return z.removeEventListener(b, a);
            },
          };
        })(),
        B = function () {
          var a = z.createElement("div");
          (a.style.visibility = "hidden"),
            (a.style.width = "100px"),
            (a.style.msOverflowStyle = "scrollbar"),
            z.body.appendChild(a);
          var b = a.offsetWidth;
          a.style.overflow = "scroll";
          var c = z.createElement("div");
          (c.style.width = "100%"), a.appendChild(c);
          var d = c.offsetWidth;
          return a.parentNode.removeChild(a), b - d;
        },
        C = {
          getItem: function (b) {
            try {
              return a.localStorage.getItem(b);
            } catch (c) {}
          },
          setItem: function (b, c) {
            try {
              return a.localStorage.setItem(b, c);
            } catch (d) {}
          },
        },
        D = 1,
        E = function (a) {
          if (a.nodeType === D) {
            var b = w(a, "max-height", "maxHeight"),
              c = w(a, "overflow-y", "overflowY");
            return b && "none" !== b && c && "visible" !== c;
          }
        },
        F = 4,
        G = function (a) {
          if (a.nodeType === D) return a.scrollHeight - a.clientHeight > F;
        },
        H = function () {
          if (z.querySelector) {
            var a = z.querySelector("link[rel=canonical]");
            if (a) return a.href;
          }
        };
      return {
        MAX_Z_INDEX: 2147483647,
        getShortnameFromUrl: d,
        getForum: e,
        guessThreadTitle: g,
        getContrastYIQ: n,
        getColorScheme: o,
        getElementStyle: k,
        getAnchorColor: m,
        normalizeFontValue: h,
        isSerif: l,
        getBrowserSupport: i,
        pageVisibility: A,
        getScrollbarWidth: B,
        browser: p,
        storage: C,
        appearsToHideContent: E,
        hasOverflow: G,
        getCanonicalUrl: H,
      };
    })({})),
    (x = (function (a) {
      var c = f,
        d = p,
        e = q,
        g = w,
        h = function (a, c) {
          (this.win = a),
            (this.configurator = c),
            (this.config = {
              page: {
                url: b,
                title: b,
                slug: b,
                identifier: b,
                language: b,
                api_key: b,
                remote_auth_s3: b,
                author_s3: b,
              },
              experiment: {
                force_auto_styles: b,
                force_mobile: b,
              },
              server_side: {
                service: "static",
                experiment: "default",
                variant: "control",
                recommendations_placement_url: b,
                default_placement_url: b,
                can_disable_ads: b,
                sourceless_iframe: b,
                forum_id: b,
                forum: {
                  id: b,
                  disable_disqus_branding: b,
                  recommendations_feature_enabled: b,
                  recommendation_placement: b,
                },
                recs_outside_embed_enabled: b,
                lazyload_viewports: b,
                forceSwitch: b,
                forceRecommendationsOutside: b,
                forceLocalHome: b,
              },
              disable_ads: b,
              disable_loader: b,
              sso: {},
            });
        };
      h.DISQUS_GLOBALS = ["shortname", "identifier", "url", "title"];
      var i = h.prototype;
      return (
        (i.getContainer = function () {
          var a = this.win;
          return a.document.getElementById(
            a.disqus_recommendations_id || "disqus_recommendations"
          );
        }),
        (i.runConfigurator = function () {
          var a = this.configurator || this.win.disqus_recommendations_config;
          if ("function" == typeof a)
            try {
              a.call(this.config);
            } catch (b) {}
        }),
        (i.getValuesFromGlobals = function () {
          var a,
            b = this.win,
            d = this.config,
            e = d.page;
          c(h.DISQUS_GLOBALS, function (a) {
            var c = b["disqus_" + a];
            "undefined" != typeof c && (e[a] = c);
          }),
            this.runConfigurator(),
            d.forum ||
              ((a = e.shortname),
              (d.forum = a
                ? a.toLowerCase()
                : g.getForum(b.document, "recommendations.js")));
        }),
        (i.toJSON = function () {
          var a,
            c = this.win,
            f = this.config,
            h = f.page,
            i = this.getContainer(),
            j = g.getBrowserSupport(c);
          return (
            this.getValuesFromGlobals(),
            f.server_side.recommendations_placement_url &&
              (a = d.generate({
                Math: e("Math", c),
                crypto: e("crypto", c),
                Uint32Array: e("Uint32Array", c),
                Date: e("Date", c),
              })),
            {
              impressionId: a || null,
              container: i,
              forum: f.forum,
              language: f.language,
              typeface: g.isSerif(i) ? "serif" : "sans-serif",
              anchorColor: g.getAnchorColor(i),
              colorScheme: g.getColorScheme(i),
              canonicalUrl: g.getCanonicalUrl(),
              url: h.url || c.location.href.replace(/#.*$/, ""),
              title: h.title,
              documentTitle: g.guessThreadTitle(),
              slug: h.slug,
              category: h.category_id,
              identifier: h.identifier,
              experimentName: f.server_side.experiment,
              experimentVariant: f.server_side.variant,
              experimentService: f.server_side.service,
              forumId: f.server_side.forum_id,
              disableAds: f.disable_ads,
              disableLoader: f.disable_loader,
              recommendationsPlacementUrl:
                f.server_side.recommendations_placement_url,
              defaultPlacementUrl: f.server_side.default_placement_url,
              canDisableAds: f.server_side.can_disable_ads,
              sourcelessIframe: Boolean(f.server_side.sourceless_iframe),
              apiKey: h.api_key,
              remoteAuthS3: h.remote_auth_s3,
              sso: f.sso,
              unsupported: j,
              degraded: Boolean(j) || g.browser.isCrawler(),
              forceAutoStyles: f.experiment.force_auto_styles,
              forceMobile: f.experiment.force_mobile,
              forumDetails: {
                id: f.server_side.forum && f.server_side.forum.id,
                disableDisqusBranding: Boolean(
                  f.server_side.forum &&
                    f.server_side.forum.disable_disqus_branding
                ),
                recommendationsEnabled: Boolean(
                  f.server_side.forum &&
                    f.server_side.forum.recommendations_feature_enabled
                ),
                recommendationsPlacement:
                  f.server_side.forum &&
                  f.server_side.forum.recommendation_placement,
              },
              recsOutsideEmbedEnabled: Boolean(
                f.server_side.recs_outside_embed_enabled
              ),
              lazyloadViewports: f.server_side.lazyload_viewports,
              forceSwitch: b,
              forceRecommendationsOutside: b,
              forceLocalHome: b,
            }
          );
        }),
        {
          HostConfig: h,
        }
      );
    })({})),
    (y = (function (a) {
      var b = j,
        c = ga,
        d = fa,
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
    })({})),
    (z = (function () {
      var a = 1e4,
        b = Math.floor(Math.random() * a + 1);
      return function (a) {
        b += 1;
        var c = String(b);
        return a ? a + c : c;
      };
    })()),
    (A = (function (a) {
      var b = f,
        c = e,
        d = z,
        g = function (a) {
          var b,
            c = !1;
          return function () {
            return c
              ? b
              : ((c = !0), (b = a.apply(this, arguments)), (a = null), b);
          };
        },
        h =
          Object.keys ||
          function (a) {
            if (a !== Object(a)) throw new TypeError("Invalid object");
            var b = [];
            for (var d in a) c(a, d) && (b[b.length] = d);
            return b;
          },
        i = [].slice,
        j = {
          on: function (a, b, c) {
            if (!l(this, "on", a, [b, c]) || !b) return this;
            this._events = this._events || {};
            var d = this._events[a] || (this._events[a] = []);
            return (
              d.push({
                callback: b,
                context: c,
                ctx: c || this,
              }),
              this
            );
          },
          once: function (a, b, c) {
            if (!l(this, "once", a, [b, c]) || !b) return this;
            var d = this,
              e = g(function () {
                d.off(a, e), b.apply(this, arguments);
              });
            return (e._callback = b), this.on(a, e, c);
          },
          off: function (a, b, c) {
            var d, e, f, g, i, j, k, m;
            if (!this._events || !l(this, "off", a, [b, c])) return this;
            if (!a && !b && !c) return (this._events = {}), this;
            for (g = a ? [a] : h(this._events), i = 0, j = g.length; i < j; i++)
              if (((a = g[i]), (f = this._events[a]))) {
                if (((this._events[a] = d = []), b || c))
                  for (k = 0, m = f.length; k < m; k++)
                    (e = f[k]),
                      ((c && c !== e.context) ||
                        (b &&
                          b !== e.callback &&
                          b !== e.callback._callback)) &&
                        d.push(e);
                d.length || delete this._events[a];
              }
            return this;
          },
          trigger: function (a) {
            if (!this._events) return this;
            var b = i.call(arguments, 1);
            if (!l(this, "trigger", a, b)) return this;
            var c = this._events[a],
              d = this._events.all;
            return c && m(c, b), d && m(d, arguments), this;
          },
          stopListening: function (a, b, c) {
            var d = this._listeners;
            if (!d) return this;
            var e = !b && !c;
            "object" == typeof b && (c = this),
              a && ((d = {})[a._listenerId] = a);
            for (var f in d)
              d[f].off(b, c, this), e && delete this._listeners[f];
            return this;
          },
        },
        k = /\s+/,
        l = function (a, b, c, d) {
          if (!c) return !0;
          if ("object" == typeof c) {
            for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
            return !1;
          }
          if (k.test(c)) {
            for (var f = c.split(k), g = 0, h = f.length; g < h; g++)
              a[b].apply(a, [f[g]].concat(d));
            return !1;
          }
          return !0;
        },
        m = function (a, b) {
          var c,
            d,
            e = a.length,
            f = b[0],
            g = b[1],
            h = b[2];
          switch (b.length) {
            case 0:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx);
              return;
            case 1:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx, f);
              return;
            case 2:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx, f, g);
              return;
            case 3:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx, f, g, h);
              return;
            default:
              for (d = 0; d < e; d++) (c = a[d]).callback.apply(c.ctx, b);
          }
        },
        n = {
          listenTo: "on",
          listenToOnce: "once",
        };
      return (
        b(n, function (a, b) {
          j[b] = function (b, c, e) {
            var f = this._listeners || (this._listeners = {}),
              g = b._listenerId || (b._listenerId = d("l"));
            return (
              (f[g] = b),
              "object" == typeof c && (e = this),
              b[a](c, e, this),
              this
            );
          };
        }),
        (j.bind = j.on),
        (j.unbind = j.off),
        j
      );
    })({})),
    (B = (function (a) {
      var b = A,
        c = j,
        d = e,
        f = z,
        g = function (a) {
          (this.uid = f("dsq-app")), (this.settings = a || {});
          var b = [],
            c = this.constructor.prototype;
          do b.unshift(c), (c = c.constructor.__super__);
          while (c);
          for (var e = 0, g = b.length; e < g; e++)
            (c = b[e]),
              d(c, "events") && this.on(c.events, this),
              d(c, "onceEvents") && this.once(c.onceEvents, this);
        };
      return (
        c(g.prototype, b),
        (g.prototype.destroy = function () {
          this.off(), this.stopListening();
        }),
        (g.extend = function (a, b) {
          var e,
            f = this;
          (e =
            a && d(a, "constructor")
              ? a.constructor
              : function () {
                  return f.apply(this, arguments);
                }),
            c(e, f, b);
          var g = function () {
            this.constructor = e;
          };
          return (
            (g.prototype = f.prototype),
            (e.prototype = new g()),
            a && c(e.prototype, a),
            (e.__super__ = f.prototype),
            e
          );
        }),
        g
      );
    })({})),
    (C = (function (b) {
      function c(a) {
        return f.getElementById(a) || f.body || f.documentElement;
      }

      function d(a) {
        return (g.href = a), g.hostname;
      }

      function e(a, b) {
        b = b || f.documentElement;
        for (var c = a, d = 0, e = 0; c && c !== b; )
          (d += c.offsetLeft), (e += c.offsetTop), (c = c.offsetParent);
        return {
          top: e,
          left: d,
          height: a.offsetHeight,
          width: a.offsetWidth,
        };
      }
      var f = a.document,
        g = f.createElement("a");
      return {
        getContainer: c,
        getHost: d,
        getOffset: e,
      };
    })({})),
    (D = (function (b) {
      var c,
        d = a,
        e = q;
      return (
        (c =
          "[object JSON]" === d.Object.prototype.toString.call(d.JSON)
            ? d.JSON
            : e("JSON", d)),
        c ? c : {}
      );
    })({})),
    (E = (function (b) {
      var c = A,
        d = j,
        e = z,
        f = C,
        g = D,
        h = function (b) {
          (b = b || {}),
            (this.state = h.INIT),
            (this.uid = b.uid || e("dsq-frame")),
            (this.origin = b.origin),
            b.useSourcelessFrame
              ? (this.host = f.getHost(a.location.href))
              : (this.host = f.getHost(this.origin)),
            (this.target = b.target),
            (this.sandbox = b.sandbox),
            (this.window = null),
            (h.windows[this.uid] = this),
            this.on(
              "ready",
              function () {
                this.state = h.READY;
              },
              this
            ),
            this.on(
              "die",
              function () {
                this.state = h.KILLED;
              },
              this
            );
        };
      return (
        d(h, {
          INIT: 0,
          READY: 1,
          KILLED: 2,
          windows: {},
          postMessage: function (a, b, c) {
            return a.postMessage(b, c);
          },
        }),
        d(h.prototype, c),
        (h.prototype.requiresWindow = function (a) {
          var b = this;
          return function () {
            var c = Array.prototype.slice.call(arguments),
              d = function () {
                var e = b.window;
                e ? a.apply(b, c) : setTimeout(d, 500);
              };
            b.isReady() ? d() : b.on("ready", d);
          };
        }),
        (h.prototype.sendMessage = function (a, b) {
          var c = g.stringify({
            scope: "client",
            name: a,
            data: b,
          });
          this.requiresWindow(function (a) {
            h.postMessage(this.window, a, this.origin);
          })(c);
        }),
        (h.prototype.hide = function () {}),
        (h.prototype.show = function () {}),
        (h.prototype.url = function () {
          return this.target;
        }),
        (h.prototype.destroy = function () {
          (this.state = h.KILLED), this.off();
        }),
        (h.prototype.isReady = function () {
          return this.state === h.READY;
        }),
        (h.prototype.isKilled = function () {
          return this.state === h.KILLED;
        }),
        h
      );
    })({})),
    (F = (function (b) {
      var c = u,
        d = j,
        e = E,
        f = C,
        g = a.document,
        h = function (a) {
          e.call(this, a),
            (this.styles = a.styles || {}),
            (this.tabIndex = a.tabIndex || 0),
            (this.title = a.title || "Disqus"),
            (this.sandbox = a.sandbox),
            (this.container = a.container),
            (this.elem = null);
        };
      return (
        d(h.prototype, e.prototype),
        (h.prototype.load = function () {
          var a = (this.elem = g.createElement("iframe"));
          a.setAttribute("id", this.uid),
            a.setAttribute("name", this.uid),
            a.setAttribute("allowTransparency", "true"),
            a.setAttribute("frameBorder", "0"),
            a.setAttribute("scrolling", "no"),
            this.role && a.setAttribute("role", this.role),
            a.setAttribute("tabindex", this.tabIndex),
            a.setAttribute("title", this.title),
            "string" == typeof this.sandbox &&
              a.setAttribute("sandbox", this.sandbox),
            this.setInlineStyle(this.styles);
        }),
        (h.prototype.getOffset = function (a) {
          return f.getOffset(this.elem, a);
        }),
        (h.prototype.setInlineStyle = function (a, b) {
          return c(this.elem, a, b);
        }),
        (h.prototype.removeInlineStyle = function (a) {
          var b = this.elem.style;
          return "removeProperty" in b
            ? void b.removeProperty(a)
            : void (b[a] = "");
        }),
        (h.prototype.hide = function () {
          this.setInlineStyle("display", "none");
        }),
        (h.prototype.show = function () {
          this.removeInlineStyle("display");
        }),
        (h.prototype.destroy = function () {
          return (
            this.elem &&
              this.elem.parentNode &&
              (this.elem.parentNode.removeChild(this.elem), (this.elem = null)),
            e.prototype.destroy.call(this)
          );
        }),
        h
      );
    })({})),
    (G = function (a, b, c) {
      c || (c = 0);
      var d,
        e,
        f,
        g,
        h = 0,
        i = function () {
          (h = new Date()), (f = null), (g = a.apply(d, e));
        };
      return function () {
        var j = new Date(),
          k = b - (j - h);
        return (
          (d = this),
          (e = arguments),
          k <= 0
            ? (clearTimeout(f), (f = null), (h = j), (g = a.apply(d, e)))
            : f || (f = setTimeout(i, k + c)),
          g
        );
      };
    }),
    (ia = (function (b) {
      var c = A,
        d = s,
        f = e,
        g = j,
        h = F,
        i = C,
        k = E,
        l = D,
        m = a.document;
      (b.throttle = G),
        a.addEventListener("message", function (a) {
          var c;
          try {
            c = l.parse(a.data);
          } catch (d) {
            return;
          }
          var e = c.sender,
            g = f(k.windows, e) && k.windows[e];
          g &&
            i.getHost(a.origin) === g.host &&
            (a.origin !== g.origin && (g.origin = a.origin),
            "host" === c.scope && g.trigger(c.name, c.data),
            "error" === c.name && b.trigger("error", c.data));
        }),
        a.addEventListener("hashchange", function () {
          b.trigger("window.hashchange", {
            hash: a.location.hash,
          });
        }),
        a.addEventListener(
          "resize",
          b.throttle(
            function () {
              b.trigger("window.resize");
            },
            250,
            50
          )
        ),
        m.addEventListener(
          "mousemove",
          b.throttle(
            function () {
              b.trigger("window.mousemove");
            },
            250,
            50
          )
        );
      var n = function () {
        b.trigger("window.scroll");
      };
      a.addEventListener("scroll", b.throttle(n, 250, 50), !1),
        m.addEventListener("click", function () {
          b.trigger("window.click");
        });
      var o = (b.Popup = function (a) {
        (a.uid = a.windowName), k.call(this, a);
      });
      g(o.prototype, k.prototype),
        (o.prototype.load = function () {
          var b = (this.window = a.open("", this.uid || "_blank"));
          b.location = this.url();
        }),
        (o.prototype.isKilled = function () {
          return k.prototype.isKilled() || this.window.closed;
        });
      var p = (b.Channel = function (a) {
        var b = this;
        (b.window = null),
          h.call(b, a),
          (this.insertBeforeEl = a.insertBeforeEl),
          (this.insertAfterEl = a.insertAfterEl),
          (b.useSourcelessFrame = a.useSourcelessFrame),
          (b.styles = g(
            {
              width: "1px",
              "min-width": "100%",
              border: "none",
              overflow: "hidden",
              height: "0",
            },
            a.styles || {}
          ));
      });
      return (
        g(p.prototype, h.prototype),
        (p.prototype.load = function (b) {
          var c = this;
          h.prototype.load.call(c);
          var e = c.elem;
          if ((e.setAttribute("width", "100%"), c.useSourcelessFrame)) {
            var f = function () {
              var b = new a.XMLHttpRequest();
              b.open("GET", c.url()),
                (b.onreadystatechange = function () {
                  e.contentWindow &&
                    b.readyState === e.contentWindow.XMLHttpRequest.DONE &&
                    200 === b.status &&
                    (e.contentWindow.document.open(),
                    e.contentWindow.document.write(b.responseText),
                    e.contentWindow.document.close());
                }),
                b.send();
            };
            c.on("redirect", function (a) {
              (c.target = a), f();
            }),
              f();
          } else e.setAttribute("src", c.url());
          e.addEventListener("load", function () {
            (c.window = e.contentWindow), b && b();
          });
          var g = d(c.container) ? i.getContainer(c.container) : c.container,
            j =
              (c.insertAfterEl
                ? c.insertAfterEl.nextSibling
                : c.insertBeforeEl) || null;
          g.insertBefore(e, j);
        }),
        (p.prototype.destroy = function () {
          return (this.window = null), h.prototype.destroy.call(this);
        }),
        (b.on = c.on),
        (b.off = c.off),
        (b.trigger = c.trigger),
        b
      );
    })(ia)),
    (H = (function (b) {
      var c = j,
        d = y,
        e = B,
        f = ia,
        g = a.document,
        h = e.extend(
          {
            name: null,
            loaderVersion: null,
            frame: null,
            origin: d.ensureHTTPSProtocol("https://disqus.com"),
            state: null,
            getUrl: function (a, b) {
              return (
                this.loaderVersion &&
                  (b = c(
                    {
                      version: this.loaderVersion,
                    },
                    b
                  )),
                d.ensureHTTPSProtocol(d.get(this.name, a, b))
              );
            },
            getFrameSettings: function () {
              var a = {
                  target: this.getUrl(),
                  origin: this.origin,
                  uid: this.uid,
                  sandbox: this.sandbox,
                },
                b = this.settings;
              return (
                b.windowName
                  ? (a.windowName = b.windowName)
                  : (a.container = b.container || g.body),
                b.styles && (a.styles = b.styles),
                (a.useSourcelessFrame = b.useSourcelessFrame),
                a
              );
            },
            getFrame: function () {
              var a = this.getFrameSettings(),
                b = a.windowName ? f.Popup : f.Channel;
              return new b(a);
            },
            setState: function (a) {
              var b = this.constructor;
              return (
                a in b.states &&
                ((this.state = b.states[a]), void this.trigger("state:" + a))
              );
            },
            init: function () {
              var a,
                b = this;
              (b.frame = a = this.getFrame()),
                b.listenTo(a, "all", function (c, d) {
                  b.trigger("frame:" + c, d, a);
                }),
                b.listenTo(a, "resize", function (a) {
                  b.lastResizedHeight = a.height;
                }),
                b.trigger("change:frame", a),
                b.frame.load(function () {
                  b.setState("LOADED");
                }),
                b.setState("INIT");
            },
            destroy: function () {
              var a = this.frame;
              a && (this.stopListening(a), a.destroy()),
                this.setState("KILLED"),
                (this.frame = null),
                e.prototype.destroy.call(this);
            },
            events: {
              "frame:ready": function () {
                this.setState("READY");
              },
            },
          },
          {
            states: {
              INIT: 0,
              LOADED: 1,
              READY: 2,
              RUNNING: 3,
              KILLED: 4,
            },
          }
        );
      return h;
    })({})),
    (I = function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = function () {
          var j = new Date().getTime() - g;
          j < b && j >= 0
            ? (d = setTimeout(i, b - j))
            : ((d = null), c || ((h = a.apply(f, e)), d || (f = e = null)));
        };
      return function () {
        (f = this), (e = arguments), (g = new Date().getTime());
        var j = c && !d;
        return (
          d || (d = setTimeout(i, b)),
          j && ((h = a.apply(f, e)), (f = e = null)),
          h
        );
      };
    }),
    (J = function (a, b) {
      for (var c = 0; c < a.length; ++c) if (a[c] === b) return c;
      return -1;
    }),
    (K = function (a, b, c) {
      for (var d = 0; d < a.length; ++d) if (b.call(c, a[d], d, a)) return !0;
      return !1;
    }),
    (L = (function (a) {
      return function (b) {
        return Boolean(
          b &&
            (b.offsetWidth || b.offsetHeight || b.getClientRects().length) &&
            "hidden" !== a(b, "visibility")
        );
      };
    })(t)),
    (M = function (a) {
      return "[object Function]" === Object.prototype.toString.call(a);
    }),
    (N = (function (a) {
      return function (b, c, d) {
        var e = null === b || void 0 === b ? void 0 : b[c];
        return void 0 === e && (e = d), a(e) ? e.call(b) : e;
      };
    })(M)),
    (O = function (a) {
      return Boolean(a && 1 === a.nodeType);
    }),
    (ja = (function (a, b, c) {
      return (
        (a.getElement = function (a) {
          return b(a) ? a : a && a.el;
        }),
        (a.EL_ID_ATTR = "data-visibility-id"),
        (a.OBJ_ID_PROP = "_visibility_id"),
        (a.getId = function (d) {
          var e = null;
          return (
            b(d)
              ? ((e = d.getAttribute(a.EL_ID_ATTR) || null),
                e || ((e = c()), d.setAttribute(a.EL_ID_ATTR, e)))
              : d &&
                ((e = d[a.OBJ_ID_PROP] || null),
                e || (e = d[a.OBJ_ID_PROP] = c())),
            e
          );
        }),
        (a.visiblePercent = function (a, b) {
          var c = 0;
          if (!b) return c;
          var d = a.top,
            e = d + a.height,
            f = b.visibleTop < d,
            g = b.visibleBottom > e;
          return (
            (!f && !g) || (f && g)
              ? (c = 1)
              : f
              ? (c = (b.height - (d - b.visibleTop)) / b.height)
              : g && (c = (e - b.visibleTop) / b.height),
            Math.round(100 * c)
          );
        }),
        a
      );
    })(ja, O, z)),
    (ka = (function (c, d, e, f, g, h) {
      return (
        (h.events = []),
        (h.lastPos = null),
        (h.clearCache = function (a) {
          if (a === b) h.getElementOffset.cache = {};
          else {
            var c = g.getId(a);
            c && (h.getElementOffset.cache[c] = null);
          }
        }),
        (h.calculateOffset = function (b) {
          if (!b) return null;
          if (!e(b)) return null;
          var c = b.ownerDocument.documentElement;
          return {
            height: b.offsetHeight,
            top:
              b.getBoundingClientRect().top +
              a.pageYOffset -
              (c.clientTop || 0),
          };
        }),
        (h._getElementOffset = function (a) {
          var b = g.getElement(a);
          if (!b) return null;
          var c = h.calculateOffset(b);
          return c
            ? {
                visibleTop: c.top + (f(a, "topEdgeOffset") || 0),
                visibleBottom:
                  c.top + c.height - (f(a, "bottomEdgeOffset") || 0),
                offsetTop: c.top,
                height: c.height,
              }
            : null;
        }),
        (h.getElementOffset = (function () {
          var a = function (b) {
            var c = a.cache,
              d = g.getId(b);
            if (d && c[d]) return c[d];
            var e = h._getElementOffset(b);
            return d && e && (c[d] = e), e;
          };
          return (a.cache = {}), a;
        })()),
        (h.EVENT_NAMES = ["enter", "exit", "visible", "invisible", "all"]),
        (h.updateTracking = function (a) {
          var e,
            f = function (a) {
              return a
                ? function (b) {
                    return a[b];
                  }
                : function () {
                    return b;
                  };
            };
          d(h.EVENT_NAMES, f(a._events))
            ? ((e = c(h.events, a)), e === -1 && h.events.push(a))
            : ((e = c(h.events, a)), e !== -1 && h.events.splice(e, 1));
        }),
        (h.processEvents = function (a) {
          h.lastPos = a;
          var b = h.events;
          if (b.length)
            for (var c = b.length - 1; c >= 0; --c) {
              var d = b[c],
                e = d.isVisible(a);
              null !== e &&
                (e !== d.lastVisible && d.trigger(e ? "enter" : "exit", d, a),
                d.trigger(e ? "visible" : "invisible", d, a),
                (d.lastVisible = e));
            }
        }),
        h
      );
    })(J, K, L, N, ja, ka)),
    (P = (function (b, c, d, e, f) {
      function g(a) {
        return this instanceof g
          ? ((this.obj = a), void (this.lastVisible = !1))
          : new g(a);
      }
      var h = c(function () {
        f.processEvents(f.lastPos);
      }, 250);
      return (
        e(g.prototype, b, {
          on: function (a) {
            var c = !(this._events && this._events[a]),
              d = b.on.apply(this, arguments);
            return c && f.updateTracking(this), h(), d;
          },
          off: function (a) {
            var c = b.off.apply(this, arguments);
            return (
              (this._events && this._events[a]) || f.updateTracking(this), c
            );
          },
          offset: function () {
            return f.getElementOffset(this.obj);
          },
          isVisible: function (a) {
            if (((a = a || f.lastPos), !a)) return null;
            var b = a.top,
              c = b + a.height,
              d = this.offset();
            return (
              !!d &&
              ((d.offsetTop >= b && d.visibleTop < c) ||
                (d.offsetTop + d.height <= c && d.visibleBottom > b))
            );
          },
          invalidate: function () {
            return f.clearCache(this.obj), this;
          },
        }),
        e(g, {
          invalidate: f.clearCache,
          scroll: f.processEvents,
          _windowScrollHandlerBound: !1,
          _ignoreCache: !1,
          _windowScrollHandler: d(function () {
            g._ignoreCache && g.invalidate(),
              f.processEvents({
                top: a.pageYOffset,
                height: a.document.documentElement.clientHeight,
              });
          }, 250),
          bindWindowEvents: function (b) {
            this._windowScrollHandlerBound ||
              ("undefined" != typeof b && (g._ignoreCache = b),
              a.addEventListener("scroll", this._windowScrollHandler),
              a.addEventListener("resize", this._windowScrollHandler),
              (this._windowScrollHandlerBound = !0),
              this._windowScrollHandler());
          },
          unbindWindowEvents: function () {
            (g._ignoreCache = !1),
              a.removeEventListener("scroll", this._windowScrollHandler),
              a.removeEventListener("resize", this._windowScrollHandler),
              (this._windowScrollHandlerBound = !1);
          },
        }),
        g
      );
    })(A, I, G, j, ka)),
    (Q = (function (a) {
      return a;
    })(P)),
    (la = (function (a) {
      return (a = function (a, b) {
        var c = null,
          d = !1;
        (this.start = function () {
          d ||
            (c = setTimeout(function () {
              (d = !0), a();
            }, b));
        }),
          (this.clear = function () {
            clearTimeout(c);
          });
      });
    })(la)),
    (R = (function () {
      function a(a) {
        if (((a = Number(a)), isNaN(a) || a > 255))
          throw new Error("Color components should be numbers less than 256");
        return (a = a.toString(16)), 1 === a.length ? "0" + a : String(a);
      }
      return function (b) {
        return "#" + a(b.red) + a(b.green) + a(b.blue);
      };
    })()),
    (S = (function () {
      var a = [
          "allow-forms",
          "allow-pointer-lock",
          "allow-popups",
          "allow-same-origin",
          "allow-scripts",
          "allow-top-navigation",
        ],
        b = function (b) {
          return b
            ? a
                .reduce(function (a, c) {
                  return b[c] && (a += c + " "), a;
                }, "")
                .trim()
            : "";
        };
      return {
        getAttribute: b,
      };
    })()),
    (T = (function (b) {
      return function (c) {
        "undefined" == typeof c && (c = a.location.search);
        var d = {};
        return (
          b(c.substr(1).split("&"), function (a) {
            var b = a.split("=").map(function (a) {
              return decodeURIComponent(a.replace(/\+/g, "%20"));
            });
            b[0] && (d[b[0]] = b[1]);
          }),
          d
        );
      };
    })(f)),
    (U = (function () {
      var b = {},
        c = a.document.createElement("a");
      return (
        (b.getOrigin = function (a) {
          c.href = a;
          var b = c.href.split("/");
          return b[0] + "//" + b[2];
        }),
        (b.getHostName = function (a) {
          return (c.href = a), c.hostname;
        }),
        (b.getDomainPart = function (a, c) {
          "undefined" == typeof c && (c = 0);
          var d = b.getHostName(a),
            e = d.split(".").reverse();
          return e[c];
        }),
        (b.getQuery = function (a) {
          return (c.href = a), c.search;
        }),
        (b.getPathname = function (a) {
          return (c.href = a), c.pathname;
        }),
        b
      );
    })()),
    (V = (function () {
      var a = function (a) {
          return null !== a && !isNaN(Number(a)) && isFinite(a);
        },
        b = function (a) {
          return Math.min.apply(Math, c(a)) || 0;
        },
        d = function (a) {
          return Math.max.apply(Math, c(a)) || 0;
        };
      return {
        min: b,
        max: d,
        isNumeric: a,
      };
    })());
  var na = (function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        (d.enumerable = d.enumerable || !1),
          (d.configurable = !0),
          "value" in d && (d.writable = !0),
          Object.defineProperty(a, d.key, d);
      }
    }
    return function (b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  })();
  (W = (function (a) {
    var b = (function () {
      function b() {
        return (
          d(this, b),
          1 !== arguments.length || a.isNumeric(arguments[0])
            ? void this.fromArray(arguments)
            : Array.isArray(arguments[0])
            ? this.fromArray(arguments[0])
            : this.fromObject(arguments[0])
        );
      }
      return (
        na(b, [
          {
            key: "fromArray",
            value: function (a) {
              this.reset(),
                a.length >= 6
                  ? ((this.top = a[0]),
                    (this.right = a[1]),
                    (this.bottom = a[2]),
                    (this.left = a[3]),
                    (this.width = a[4]),
                    (this.height = a[5]))
                  : a.length >= 4
                  ? ((this.top = a[0]),
                    (this.right = a[1]),
                    (this.bottom = a[2]),
                    (this.left = a[3]))
                  : 3 === a.length
                  ? ((this.top = a[0]),
                    (this.right = a[1]),
                    (this.bottom = a[2]),
                    (this.left = 0))
                  : 2 === a.length
                  ? ((this.top = a[0]),
                    (this.right = a[1]),
                    (this.bottom = a[0]),
                    (this.left = a[1]))
                  : ((this.top = a[0]),
                    (this.right = a[0]),
                    (this.bottom = a[0]),
                    (this.left = a[0])),
                this.update();
            },
          },
          {
            key: "fromObject",
            value: function (a) {
              return this.fromArray([
                a.top,
                a.right,
                a.bottom,
                a.left,
                a.width,
                a.height,
              ]);
            },
          },
          {
            key: "update",
            value: function () {
              this.width || (this.width = this.right - this.left),
                this.height || (this.height = this.bottom - this.top);
            },
          },
          {
            key: "reset",
            value: function (a) {
              (a = a || 0),
                (this.top = a),
                (this.right = a),
                (this.bottom = a),
                (this.left = a),
                (this.width = a),
                (this.height = a);
            },
          },
          {
            key: "getArea",
            value: function () {
              return (this.right - this.left) * (this.bottom - this.top);
            },
          },
        ]),
        b
      );
    })();
    return (
      (b.getOverlapRect = function (c, d) {
        var e = a.max([c.left, d.left]),
          f = a.min([c.left + c.width, d.left + d.width]),
          g = a.max([c.top, d.top]),
          h = a.min([c.top + c.height, d.top + d.height]);
        return f >= e && h >= g && new b(g, f, h, e, f - e, h - g);
      }),
      (b.getOverlapArea = function (b, c) {
        var d = a.max([0, a.min([b.right, c.right]) - a.max([b.left, c.left])]),
          e = a.max([0, a.min([b.bottom, c.bottom]) - a.max([b.top, c.top])]);
        return d * e;
      }),
      b
    );
  })(V)),
    (X = (function (b) {
      var c = 9,
        d = function (a) {
          return a && a.parentNode;
        },
        e = function (b, c) {
          if (!b) return null;
          var d = a.document.defaultView.getComputedStyle(b);
          return c && d.hasOwnProperty(c) ? d[c] : d;
        },
        f = function () {
          return {
            x: a.pageXOffset,
            y: a.pageYOffset,
          };
        },
        g = function (a) {
          var c = void 0;
          if (a && a.style) {
            var d = a.style.display;
            (a.style.display = "block"),
              (c = a.getBoundingClientRect()),
              (a.style.display = d),
              (c = new b(c));
            var e = f();
            (c.left += e.x),
              (c.right += e.x),
              (c.top += e.y),
              (c.bottom += e.y);
          } else c = new b(0);
          return c;
        },
        h = function (a, b) {
          var c = g(a);
          if (b) {
            var d = g(b);
            (c.top = d.top - d.top + b.scrollTop),
              (c.bottom = c.top + c.height + b.scrollTop),
              (c.left = c.left - d.left + b.scrollLeft),
              (c.right = c.left + c.width + b.scrollLeft);
          }
          return c;
        },
        i = function () {
          var c = f(),
            d = c.y,
            e = c.x + a.innerWidth,
            g = c.y + a.innerHeight,
            h = c.x,
            i = a.innerWidth,
            j = a.innerHeight;
          return new b(d, e, g, h, i, j);
        },
        j = function (a) {
          try {
            return a.nodeType === c ? a : a.ownerDocument;
          } catch (b) {
            return null;
          }
        },
        k = function (b) {
          var c = j(b),
            d = void 0;
          try {
            c && (d = c.parentWindow || c.defaultView || a);
          } catch (e) {
            d = a;
          }
          return d;
        },
        l = function (a) {
          var c = k(a),
            d = new b(
              0,
              c.innerWidth,
              c.innerHeight,
              0,
              c.innerWidth,
              c.innerHeight
            ),
            e = f();
          return (
            (d.left += e.x),
            (d.right += e.x),
            (d.top += e.y),
            (d.bottom += e.y),
            d
          );
        },
        m = function (a) {
          var b = j(a);
          if (b) return b.documentElement || b.body;
        },
        n = function (a) {
          var c = m(a) || {},
            d = new b();
          return (
            (d.right = d.width = c.scrollWidth || 0),
            (d.bottom = d.height = c.scrollHeight || 0),
            d
          );
        },
        o = function (a, b) {
          for (; b; ) {
            if (b === a) return !0;
            b = b.parentNode;
          }
          return !1;
        },
        p = function (a) {
          var b = e(a);
          return (
            "inline-block" === b.display ||
            "none" !== b["float"] ||
            "absolute" === b.position ||
            "fixed" === b.position ||
            "auto" !== b.width ||
            "auto" !== b.height
          );
        },
        q = function (a) {
          var b = e(a),
            c = {};
          return (
            "scroll" === b.overflowX || "auto" === b.overflowX
              ? (c.xscroll = a.offsetWidth - a.clientWidth)
              : (c.xscroll = 0),
            "scroll" === b.overflowY || "auto" === b.overflowY
              ? (c.yscroll = a.offsetHeight - a.clientHeight)
              : (c.yscroll = 0),
            (c.xhidden = "hidden" === b.overflowX),
            (c.yhidden = "hidden" === b.overflowY),
            c
          );
        },
        r = function (a) {
          var b = e(a);
          return !!(
            (b.clip && "auto" !== b.clip) ||
            (b.clipPath && "none" !== b.clipPath)
          );
        };
      return {
        getParentNode: d,
        getWindow: k,
        getScroll: f,
        getRect: g,
        getRectRelativeTo: h,
        getViewportRect: i,
        getDocument: j,
        getWindowRect: l,
        getRootNode: m,
        getRootRect: n,
        getNodeStyle: e,
        isParentOf: o,
        hasLayout: p,
        getNodeOverflow: q,
        isNodeClipped: r,
      };
    })(W));
  var na = (function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        (d.enumerable = d.enumerable || !1),
          (d.configurable = !0),
          "value" in d && (d.writable = !0),
          Object.defineProperty(a, d.key, d);
      }
    }
    return function (b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  })();
  (Y = (function (b, c) {
    var e = 1,
      f = (function () {
        function f(a) {
          d(this, f),
            (this.node = a),
            (this.document = b.getDocument(a)),
            (this.window = b.getWindow(a)),
            (this.root = b.getRootNode(a)),
            (this.ref = this.getRefNode(a.parentNode));
        }
        return (
          na(f, [
            {
              key: "getRefNode",
              value: function (a) {
                for (; a && a.nodeType === e; ) {
                  var c = b.getNodeStyle(a);
                  if (
                    b.hasLayout(a) ||
                    "block" === c.display ||
                    "none" !== c.clear
                  ) {
                    var d = b.getNodeOverflow(a);
                    if (d.xscroll || d.yscroll || d.xhidden || d.yhidden)
                      return a;
                    if (b.isNodeClipped(a)) return a;
                  }
                  a = a.parentNode;
                }
                return this.root;
              },
            },
            {
              key: "getNodesOver",
              value: function (d, f) {
                f = f || 1;
                var g = [],
                  h = b.getRect(d),
                  i = b.getRect(this.ref),
                  j = b.getViewportRect(d);
                if (!a.document.elementFromPoint) return g;
                for (
                  var k = {
                      top: c.max([h.top, i.top]) - j.top,
                      right: c.min([h.right, i.right]) - j.left,
                      bottom: c.min([h.bottom, i.bottom]) - j.top,
                      left: c.max([h.left, i.left]) - j.left,
                    },
                    l = (k.right - k.left) / 10,
                    m = (k.bottom - k.top) / 10,
                    n = k.left;
                  n < k.right;
                  n += l
                )
                  for (var o = k.top; o < k.bottom; o += m) {
                    for (
                      var p = a.document.elementFromPoint(n, o);
                      p && p.nodeType === e;

                    ) {
                      var q = b.getNodeStyle(p);
                      if (
                        b.hasLayout(p) ||
                        "block" === q.display ||
                        "none" !== q.clear
                      )
                        break;
                      p = p.parentNode;
                    }
                    p &&
                      p.nodeType === e &&
                      p !== this.node &&
                      p !== this.root &&
                      !b.isParentOf(p, this.node) &&
                      (g.push(p),
                      g.length >= f && ((n = k.right), (o = k.bottom)));
                  }
                return g;
              },
            },
            {
              key: "getWindowGeom",
              value: function () {
                var a = this.window.innerHeight || 0,
                  b = this.window.innerWidth || 0,
                  c = this.window.screenY || this.window.screenTop || 0,
                  d = c + a,
                  e = this.window.screenX || this.window.screenLeft || 0,
                  f = e + b;
                return {
                  t: c,
                  r: f,
                  b: d,
                  l: e,
                  w: b,
                  h: a,
                };
              },
            },
            {
              key: "getSelfGeom",
              value: function () {
                var a = b.getRect(this.node),
                  d = b.getRect(this.ref),
                  e = b.getNodeStyle(this.node),
                  f = b.getWindowRect(this.node),
                  g = a.width,
                  h = a.height;
                this.ref !== this.root &&
                  ((g = c.max([
                    0,
                    c.min([a.right, d.right]) - c.max([a.left, d.left]),
                  ])),
                  (h = c.max([
                    0,
                    c.min([a.bottom, d.bottom]) - c.max([a.top, d.top]),
                  ])));
                var i = c.max([
                    0,
                    c.min(a.right, f.right) - c.max([a.left, f.left]),
                  ]),
                  j = c.max([
                    0,
                    c.min([a.bottom, f.bottom]) - c.max([a.top, f.top]),
                  ]),
                  k = c.min([g, i]),
                  l = c.min([h, j]),
                  m = a.width ? k / a.width : 0,
                  n = a.height ? l / a.height : 0,
                  o = (k * l) / (a.width * a.height),
                  p = 1,
                  q = this.getNodesOver(this.node, p);
                if (q.length) {
                  var r = b.getRect(q[0]),
                    s = c.max([
                      0,
                      c.min([r.right, a.right]) - c.max([r.left, a.left]),
                    ]),
                    t = c.max([
                      0,
                      c.min([r.bottom, a.bottom]) - c.max([r.top, a.top]),
                    ]);
                  o = c.max([0, (k * l - s * t) / (a.width * a.height)]);
                }
                var u = b.getScroll();
                return {
                  t: a.top - u.y,
                  r: a.right - u.x,
                  b: a.bottom - u.y,
                  l: a.left - u.x,
                  z: e.zIndex,
                  w: a.width,
                  h: a.height,
                  xiv: 1 === m ? "1" : Number(m).toFixed(2),
                  yiv: 1 === n ? "1" : Number(n).toFixed(2),
                  iv: 1 === o ? "1" : Number(o).toFixed(2),
                };
              },
            },
            {
              key: "getExpandGeom",
              value: function () {
                var a = b.getRect(this.ref),
                  d = b.getRect(this.node),
                  e = b.getWindowRect(this.node),
                  f = {
                    top: c.max([a.top, e.top]),
                    right: c.min([a.right, e.right]),
                    bottom: c.min([a.bottom, e.bottom]),
                    left: c.max([a.left, e.left]),
                  },
                  g = b.getNodeOverflow(this.ref);
                return {
                  t: c.max([0, d.top - f.top]),
                  r: c.max([0, f.right - d.right]),
                  b: c.max([0, f.bottom - d.bottom]),
                  l: c.max([0, d.left - f.left]),
                  xs: Boolean(g.yscroll),
                  yx: Boolean(g.xscroll),
                };
              },
            },
            {
              key: "getGeom",
              value: function () {
                return {
                  win: this.getWindowGeom(),
                  self: this.getSelfGeom(),
                  exp: this.getExpandGeom(),
                };
              },
            },
          ]),
          f
        );
      })(),
      g = {
        get: function (a) {
          var b = new f(a);
          return b.getGeom();
        },
      };
    return g;
  })(X, V)),
    (Z = (function (c) {
      var d = y,
        e = H,
        f = D,
        g = P,
        h = ja,
        i = E,
        k = la,
        l = R,
        n = j,
        o = S,
        p = T,
        q = ga,
        r = U.getOrigin,
        s = U.getQuery,
        t = m,
        u = Y,
        v = e.extend({
          name: "ads",
          origin: b,
          onceEvents: {
            "view:enter": function () {
              this._reportLegacy({
                verb: "view",
                adverb: "0ms-no50perc",
              });
            },
            "view:iab": function () {
              this._reportLegacy({
                verb: "view",
                adverb: "iab-scroll",
              });
            },
          },
          events: {
            "frame:ready": function (a) {
              (this.forumId = a.forumId),
                this._reportLegacy({
                  verb: "load",
                  extra_data: a.extraData,
                  advertisement_id: a.advertisement_id,
                  provider: a.provider,
                }),
                this.bindViewEvents(),
                this.triggerGeomUpdate();
            },
            "frame:resize": function (a) {
              this.frame.setInlineStyle("height", a.height + "px"),
                0 === a.height
                  ? this.trigger("ad-placement-empty")
                  : this.trigger("ad-placement-filled"),
                this.triggerGeomUpdate();
            },
            "frame:click": function () {
              this._reportOnce(
                {
                  verb: "click",
                },
                "click"
              );
            },
            "frame:hover": function () {
              this._reportOnce(
                {
                  verb: "hover",
                },
                "hover"
              );
            },
            "frame:error-provider-not-ready": function (a) {
              this._reportLegacy({
                verb: "fail",
                object_type: "provider",
                object_id: a.provider || this.getProvider(),
                adverb: "provider_not_ready",
              });
            },
            "frame:error-no-height": function (a) {
              this._reportLegacy({
                verb: "fail",
                object_type: "provider",
                object_id: a.provider || this.getProvider(),
                adverb: "no_height",
              });
            },
            "frame:clearSandbox": function () {
              this.frame.elem.hasAttribute("sandbox") &&
                this.frame.elem.removeAttribute("sandbox");
            },
            "frame:$sf-init": function () {
              this.settings.isOnHostPage && (this.isSafeframe = !0);
            },
            "frame:error": function (a) {
              this.settings.isOnHostPage &&
                this.postMessageDirect({
                  event: "error",
                  data: {
                    error: a,
                  },
                });
            },
          },
          constructor: function () {
            e.apply(this, arguments),
              (this.origin = r(this.settings.adUrl)),
              (this._reportOnceHistory = {}),
              this.settings.isOnHostPage &&
                ((this.detectLazyload = this.detectLazyload.bind(this)),
                a.addEventListener("scroll", this.detectLazyload)),
              (this.settings.useSourcelessFrame =
                this.settings.sourcelessIframe &&
                this.settings.isOnHostPage &&
                (!this.settings.defaultPlacementUrl ||
                  !this.settings.adBlockEnabled));
          },
          init: function () {
            if (
              ((this.settings.forum = p(s(this.settings.adUrl)).shortname),
              this.settings.forum)
            ) {
              var b = this.settings.disableAds,
                c =
                  this.settings.isInHome ||
                  (this.settings.isOnHostPage &&
                    0 === a.location.href.indexOf(d.apps.home));
              if (!c && b && this.settings.canDisableAds)
                return void this.trigger("prevented-ad-load");
              this._reportOnce(
                {
                  verb: "call",
                  object_type: "provider",
                  object_id: this.getProvider(),
                  adjective: 1,
                },
                "call"
              ),
                this.settings.sandboxAds &&
                  (this.sandbox = o.getAttribute({
                    "allow-scripts": !0,
                    "allow-same-origin": !0,
                    "allow-forms": !0,
                    "allow-popups": !0,
                  })),
                e.prototype.init.call(this);
            }
          },
          detectLazyload: function () {
            if (this.frame && this.settings.isOnHostPage) {
              var b = this.frame.elem.getBoundingClientRect().top,
                c = b - a.innerHeight,
                d = a.innerHeight * this.settings.lazyloadViewports;
              c < d &&
                (this.postMessageDirect({
                  event: "lazyload",
                }),
                a.removeEventListener("scroll", this.detectLazyload));
            }
          },
          getProvider: function () {
            if (this._provider) return this._provider;
            var a = this.settings.adUrl.match(/provider=(\w+)/);
            return a && (this._provider = a[1]), this._provider;
          },
          getUrl: function () {
            var b,
              c = this.settings;
            return (
              (b =
                "inthreaddisqusadstxt" === c.experiment.experiment &&
                "active" === c.experiment.variant &&
                "inthread" === c.placement
                  ? a.document.location.href
                  : c.isOnHostPage
                  ? c.url || a.document.location.href
                  : c.url || c.referrer),
              q(c.adUrl, {
                anchorColor: l(c.anchorColor),
                colorScheme: c.colorScheme,
                sourceUrl: b,
                typeface: c.typeface,
                canonicalUrl: c.canonicalUrl,
                disqus_version: c.version,
              })
            );
          },
          triggerGeomUpdate: function () {
            if (
              this.frame.elem &&
              this.isSafeframe &&
              this.settings.isOnHostPage
            ) {
              var a = u.get(this.frame.elem);
              this.postMessageDirect({
                event: "geom-update",
                data: {
                  geom: a,
                },
              });
            }
          },
          bindViewEvents: function () {
            if (!this._viewEventsBound) {
              (this._viewEventsBound = !0), g.bindWindowEvents(!0);
              var a = this,
                b = function (b, c) {
                  a.postMessageDirect({
                    event: b,
                    percentViewable: c,
                  });
                },
                c = 1e3,
                d = new k(function () {
                  a.trigger("view:iab"), b("view:iab");
                }, c),
                e = !1;
              this.listenTo(
                g({
                  el: this.frame.elem,
                }),
                {
                  enter: function () {
                    a.trigger("view:enter"),
                      b("view:enter"),
                      a.triggerGeomUpdate();
                  },
                  exit: function () {
                    b("view:exit"),
                      e && ((e = !1), b("view:50out"), d.clear()),
                      a.triggerGeomUpdate();
                  },
                  visible: function (c, f) {
                    var g = h.visiblePercent(f, c.offset()),
                      i = 50;
                    g >= i && !e
                      ? ((e = !0), b("view:50in"), d.start())
                      : g < i && e && ((e = !1), b("view:50out"), d.clear()),
                      b("view", g),
                      a.triggerGeomUpdate();
                  },
                }
              );
            }
          },
          postMessageDirect: function (a) {
            this.frame.requiresWindow(function (a) {
              var b = f.stringify(
                n({}, a, {
                  space: "disqus",
                })
              );
              i.postMessage(this.window, b, this.origin),
                i.postMessage(this.window, "disqus." + a.event, this.origin);
            })(a);
          },
          _report: function (c) {
            var d =
                arguments.length > 1 && arguments[1] !== b ? arguments[1] : {},
              e = this.settings,
              f = d.provider || this.getProvider();
            c.forum_id = e.forumId || this.forumId;
            var g;
            g =
              e.placement && e.placement.indexOf("timeline") > -1
                ? "home"
                : "recommendations" === e.placement
                ? "recommendations"
                : "embed";
            var h = d.usePOST ? "reportJesterPOST" : "reportJester";
            t[h](
              n(
                {
                  imp: e.impressionId,
                  experiment: e.experiment.experiment,
                  variant: e.experiment.variant,
                  service: e.experiment.service,
                  area: e.placement,
                  product: g,
                  forum: e.forum,
                  zone: "thread",
                  version: e.loaderVersion,
                  page_url: e.referrer || a.document.location.href,
                  page_referrer: e.hostReferrer || a.document.referrer,
                  object_type: "advertisement",
                  provider: f,
                  event: "activity",
                },
                c
              )
            );
          },
          _reportLegacy: function (a) {
            var b = this.settings;
            this._report(
              n(
                {
                  ad_product_name: "iab_display",
                  ad_product_layout: "iab_display",
                  bin:
                    "embed:promoted_discovery:" +
                    b.experiment.service +
                    ":" +
                    b.experiment.experiment +
                    ":" +
                    b.experiment.variant,
                  object_id: a.advertisement_id
                    ? "[" + a.advertisement_id + "]"
                    : "",
                  section: "default",
                },
                a
              )
            );
          },
          _reportOnce: function (a, b) {
            this._reportOnceHistory[b] ||
              (this._reportLegacy(a), (this._reportOnceHistory[b] = !0));
          },
          getFrameSettings: function () {
            var a = e.prototype.getFrameSettings.call(this);
            return (
              (a.insertBeforeEl = this.settings.insertBeforeEl),
              (a.insertAfterEl = this.settings.insertAfterEl),
              a
            );
          },
        }),
        w = function (a) {
          return (
            (a = a || {}),
            a.experiment ||
              (a.experiment = {
                experiment: a.experimentName,
                variant: a.experimentVariant,
                service: a.experimentService,
              }),
            new v(a)
          );
        };
      return {
        Ads: w,
      };
    })({})),
    ($ = (function (b) {
      var c = s,
        d = j,
        e = C,
        f = F,
        g = a.document,
        h = function (a) {
          f.call(this, a),
            (this.contents = a.contents || ""),
            (this.styles = d(
              {
                width: "100%",
                border: "none",
                overflow: "hidden",
              },
              a.styles || {}
            ));
        };
      return (
        d(h.prototype, f.prototype),
        (h.prototype.load = function (a) {
          f.prototype.load.call(this);
          var b = this.elem,
            d = c(this.container)
              ? e.getContainer(this.container)
              : this.container;
          d.appendChild(b), (this.window = b.contentWindow);
          try {
            this.window.document.open();
          } catch (h) {
            b.src =
              'javascript:var d=document.open();d.domain="' +
              g.domain +
              '";void(0);';
          }
          return (
            (this.document = this.window.document),
            this.document.write(this.contents),
            this.document.close(),
            this.updateHeight(),
            a && setTimeout(a, 0),
            this
          );
        }),
        (h.prototype.updateHeight = function () {
          var a = this.document.body;
          if (a) {
            var b = a.offsetHeight + "px";
            this.setInlineStyle({
              height: b,
              "min-height": b,
              "max-height": b,
            });
          }
        }),
        (h.prototype.show = function () {
          this.setInlineStyle("display", "block"), this.updateHeight();
        }),
        (h.prototype.click = function (a) {
          var b = this,
            c = b.document.body;
          c.addEventListener("click", function (c) {
            a.call(b, c);
          });
        }),
        h
      );
    })({})),
    (_ = function (a, b, c) {
      var d = function () {
        var e = a();
        return e ? void b(e) : void setTimeout(d, c);
      };
      d();
    }),
    (aa = (function (b) {
      var c = t,
        d = a.document.body;
      return function () {
        var a = d.offsetHeight,
          b = parseInt(c(d, "margin-top", "marginTop"), 10);
        b && (a += b);
        var e = parseInt(c(d, "margin-bottom", "marginBottom"), 10);
        return e && (a += e), a;
      };
    })({})),
    (ba = (function (b) {
      var c = t,
        d = aa,
        e = L,
        f = H,
        g = ia,
        h = w,
        i = a.document,
        j = i.querySelector("html"),
        k = {
          lounge: "embed",
          recommendations: "recommendations",
        },
        l = f.extend({
          getUrl: function () {
            var b = this.settings,
              c = {
                f: b.forum,
                t_i: b.identifier,
                t_u: b.url || a.location.href,
                t_s: b.slug,
                t_e: b.title,
                t_d: b.documentTitle,
                t_t: b.title || b.documentTitle,
                t_c: b.category,
                s_o: b.sortOrder,
                l: b.language,
              };
            return (
              b.unsupported && (c.n_s = b.unsupported),
              f.prototype.getUrl.call(this, c)
            );
          },
          getFrameInitParams: function (b) {
            var c = this.settings,
              d = {
                permalink: c.permalink,
                anchorColor: c.anchorColor,
                referrer: a.location.href,
                hostReferrer: i.referrer,
                canonicalUrl: c.canonicalUrl,
                colorScheme: c.colorScheme,
                typeface: c.typeface,
                remoteAuthS3: c.remoteAuthS3,
                apiKey: c.apiKey,
                sso: c.sso,
                parentWindowHash: a.location.hash,
                forceAutoStyles: c.forceAutoStyles,
                forceMobile: c.forceMobile,
                layout: c.layout,
                integration: c.integration,
                version: c.version,
                isPrivate: c.isPrivate,
                timestamp: this.timestamp,
                loadTime: this.getBootloaderTimingInfo(),
                isHeightRestricted: this.isHeightRestricted(),
              };
            return (d.initialPosition = this.getViewportAndScrollStatus()), d;
          },
          listenToScrollEvent: function (a) {
            var b = this,
              c = b.getScrollContainer();
            if (c === j)
              return (
                b.listenTo(g, "window.scroll", a),
                function () {
                  b.stopListening(g, "window.scroll", a);
                }
              );
            var d = g.throttle(
              function () {
                a.call(b);
              },
              250,
              50
            );
            return (
              c.addEventListener("scroll", d),
              function () {
                c.removeEventListener("scroll", d);
              }
            );
          },
          storeScrollContainer: function () {
            if (!this.settings.enableScrollContainer)
              return void (this.scrollContainer = j);
            var a,
              b,
              d = [];
            if (this.potentialScrollContainers)
              for (
                b = 0;
                b < this.potentialScrollContainers.length &&
                ((a = this.potentialScrollContainers[b]),
                !(a.clientHeight < a.scrollHeight));
                b++
              )
                a = null;
            else {
              a = this.settings.container;
              do {
                var e = c(a, "overflow-y", "overflowY");
                if (
                  ("scroll" === e || "auto" === e) &&
                  (d.push(a), a.clientHeight < a.scrollHeight)
                )
                  break;
                a = a.parentNode;
              } while (a && a !== j);
            }
            (a && a !== i.body) || (a = j),
              this.potentialScrollContainers ||
                (this.potentialScrollContainers = d);
            var f = this.scrollContainer && this.scrollContainer !== a;
            (this.scrollContainer = a),
              f &&
                (this.stopListeningToScrollEvent &&
                  this.stopListeningToScrollEvent(),
                (this.stopListeningToScrollEvent = this.listenToScrollEvent(
                  this.communicateViewportAndScrollStatus
                )));
          },
          getScrollContainer: function () {
            return (
              this.scrollContainer || this.storeScrollContainer(),
              this.scrollContainer
            );
          },
          getViewportCoords: function () {
            return this.getScrollContainer() === j
              ? this.getWindowCoords()
              : this.getScrollContainerCoords();
          },
          getWindowCoords: function () {
            if ("number" == typeof a.pageYOffset)
              (this.getWindowScroll = function () {
                return a.pageYOffset;
              }),
                (this.getWindowHeight = function () {
                  return a.innerHeight;
                });
            else {
              var b = j.clientHeight || j.clientWidth ? j : i.body;
              (this.getWindowScroll = function () {
                return b.scrollTop;
              }),
                (this.getWindowHeight = function () {
                  return b.clientHeight;
                });
            }
            return (
              (this.getWindowCoords = function () {
                return {
                  top: this.getWindowScroll(),
                  height: this.getWindowHeight(),
                };
              }),
              this.getWindowCoords()
            );
          },
          getScrollContainerCoords: function () {
            var a = this.getScrollContainer();
            return {
              top: a.scrollTop,
              height: a.clientHeight,
            };
          },
          getBootloaderTimingInfo: function () {
            if (a.performance && a.performance.getEntriesByName) {
              var b = i.currentScript
                  ? i.currentScript.src
                  : "https://" +
                    this.settings.forum +
                    ".disqus.com/" +
                    k[this.name] +
                    ".js",
                c = a.performance.getEntriesByName(b)[0];
              return c && c.duration;
            }
          },
          getViewportAndScrollStatus: function () {
            var a = this.frame;
            if (!a || !a.getOffset) return null;
            if (!e(a.elem)) return null;
            var b = this.getViewportCoords();
            return {
              frameOffset: a.getOffset(this.getScrollContainer()),
              pageOffset: b.top,
              height: b.height,
            };
          },
          communicateViewportAndScrollStatus: function () {
            var a = this.getViewportAndScrollStatus();
            if (a) {
              var b = a.frameOffset,
                c = b.top,
                d = c + b.height,
                e = a.pageOffset,
                f = a.height,
                g = e + f,
                h = !1,
                i = !1;
              c <= g + f && ((h = d >= e), (i = h && c <= g));
              var j = this.frame;
              j.sendMessage("window.scroll.always", a),
                h && j.sendMessage("window.scroll", a),
                i !== this.wasInViewport &&
                  (j.sendMessage(
                    i ? "window.inViewport" : "window.scrollOffViewport"
                  ),
                  (this.wasInViewport = i));
            }
          },
          getBestNextFrameHeight: function (a) {
            var b = this.getViewportAndScrollStatus();
            if (
              !b ||
              this.settings.enableScrollContainer ||
              !this.getScrollContainer()
            )
              return a;
            var c = b.frameOffset;
            if (a >= c.height) return a;
            var e = d(),
              f = e - (c.height + c.top),
              g = b.pageOffset + b.height - (c.top + f);
            return g > a ? g + 1 : a;
          },
          isHeightRestricted: function (a) {
            function b() {
              return (
                h.appearsToHideContent(d) || (f && h.appearsToHideContent(e))
              );
            }

            function c() {
              return (
                (h.appearsToHideContent(d) && h.hasOverflow(d)) ||
                (f && h.appearsToHideContent(e) && h.hasOverflow(e))
              );
            }
            a = a || {};
            var d = this.settings.container,
              e = d.parentNode,
              f = e !== j && e !== i.body;
            return a.checkScrollHeight ? c() : b();
          },
          events: {
            "state:INIT": function () {
              this.settings.degraded ||
                (this.settings.windowName ||
                  ((this.stopListeningToScrollEvent = this.listenToScrollEvent(
                    this.communicateViewportAndScrollStatus
                  )),
                  this.listenTo(
                    g,
                    "window.resize",
                    this.communicateViewportAndScrollStatus
                  )),
                (this.timestamp = Number(new Date())));
            },
            "state:LOADED": function () {
              var a = this.frame,
                b = a.elem;
              this.settings.degraded
                ? (a.setInlineStyle("height", "500px"),
                  b.setAttribute("scrolling", "yes"),
                  b.setAttribute("horizontalscrolling", "no"),
                  b.setAttribute("verticalscrolling", "yes"),
                  a.show())
                : this.settings.windowName ||
                  ((this.rendered = !1),
                  a.setInlineStyle("height", "0"),
                  b.setAttribute("scrolling", "no"),
                  b.setAttribute("horizontalscrolling", "no"),
                  b.setAttribute("verticalscrolling", "no"));
            },
            "frame:ready": function (a, b) {
              var c = this.getFrameInitParams(a, b);
              b.sendMessage("init", c);
            },
            "frame:resize": function (a, b) {
              var c = a.height;
              b.elem &&
                this.rendered &&
                ((c = this.getBestNextFrameHeight(c)),
                b.setInlineStyle("height", c + "px"),
                b.sendMessage(k[this.name] + ".resized")),
                this.storeScrollContainer(),
                this.communicateViewportAndScrollStatus();
            },
            "frame:rendered": function (a, b) {
              (this.rendered = !0),
                (this.wasInViewport = !1),
                b.trigger("resize", a),
                b.sendMessage(k[this.name] + ".rendered");
            },
            "frame:fail": function (a, b) {
              b.elem && b.setInlineStyle("height", (a && a.height) || "75px");
            },
            "frame:scrollTo": function (b, c) {
              if (c.elem && c.getOffset) {
                var d = this.getScrollContainer(),
                  e = c.getOffset(d),
                  f = "window" === b.relative ? b.top : e.top + b.top,
                  g = this.getViewportCoords();
                (!b.force && f > g.top && f < g.top + g.height) ||
                  (d === j ? a.scrollTo(0, f) : (d.scrollTop = f));
              }
            },
          },
        });
      return l;
    })({})),
    (ca = (function (a) {
      var b = j,
        c = {
          height: "52px",
          width: "54px",
          top: "-12px",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
          boxingSize: "border-box",
        },
        d = function (a) {
          var d = a ? "0 -52px " : "";
          return b(
            {
              background:
                "url(https://c.disquscdn.com/next/recommendations/assets/img/loader-bg.a5b321d890ffdd553322adc8decaf4ed.png) " +
                d +
                "no-repeat",
            },
            c
          );
        },
        e =
          "https://c.disquscdn.com/next/recommendations/assets/img/disqus-social-icon-light.5a4245eaed6988115d6bd53f20074f71.svg",
        f =
          "https://c.disquscdn.com/next/recommendations/assets/img/disqus-social-icon-dark.a621bea3e02c9fa04fd3965a3d6f424d.svg",
        g = {
          display: "block",
          position: "relative",
          margin: "auto",
          width: "80px",
          height: "80px",
          top: "-12px",
          overflow: "hidden",
        },
        h = function (a) {
          var c = a ? e : f;
          return b(
            {
              background: "url(" + c + ") center center / contain no-repeat",
            },
            g
          );
        };
      return {
        getBubbleStyle: d,
        getIconStyle: h,
      };
    })({})),
    (da = (function (b) {
      var c = a.document,
        d = $,
        e = C,
        f = _,
        g = L,
        h = j,
        i = m,
        k = ia,
        l = w,
        n = ba,
        o = ca,
        p = n.extend(
          {
            name: "recommendations",
            loaderVersion: i.getLoaderVersionFromUrl(
              "https://c.disquscdn.com/next/recommendations/recommendations.load.8b0221d1e6088a6359fd494f934e58e6.js"
            ),
            wasInViewport: !1,
            triggeredSlowEvent: !1,
            events: {
              "state:INIT": function () {
                var b = this.settings,
                  d = b.server_side;
                return (
                  d &&
                    "fallback" === d.service &&
                    i.logStat("recommendations.fallback"),
                  b.degraded
                    ? void i.reportJester({
                        imp: b.impressionId,
                        experiment: b.experimentName,
                        variant: b.experimentVariant,
                        service: b.experimentService,
                        forum: b.forum,
                        version: this.loaderVersion,
                        page_url: a.location.href,
                        page_referrer: c.referrer,
                        event: "activity",
                        verb: "load",
                        product: "recommendations",
                        zone: "recommendation",
                        section: "degraded",
                        adjective: b.unsupported,
                        object_type: "thread",
                        object_id: b.identifier,
                      })
                    : ((this.indicators = {}),
                      this.isContainerVisible() && !b.disableLoader
                        ? this.addLoadingAnim()
                        : b.disableLoader ||
                          this.addLoadingAnimOnContainerVisible(),
                      void this.forwardGlobalEvents())
                );
              },
              "frame:reload": function () {
                a.location.reload();
              },
              "frame:navigate": function (b) {
                a.location.href = b;
              },
              "frame:session.identify": function (a) {
                this.trigger("session.identify", a);
              },
              "frame:indicator:init": function (a, b) {
                if (b.getOffset) {
                  for (
                    var c,
                      e,
                      f = ["north", "south"],
                      g = this.indicators,
                      i = b.getOffset().width + "px",
                      j = {
                        width: i,
                        "min-width": i,
                        "max-width": i,
                        position: "fixed",
                        "z-index": l.MAX_Z_INDEX - 1,
                      },
                      k = {
                        north: {
                          top: "0",
                        },
                        south: {
                          bottom: "0",
                        },
                      },
                      m = function () {
                        b.sendMessage(
                          "indicator:click",
                          this.uid.split("-")[1]
                        );
                      },
                      n = 0;
                    n < f.length;
                    n++
                  ) {
                    (e = f[n]),
                      (c = new d({
                        uid: "indicator-" + e,
                        container: this.settings.container,
                        contents: a[e].contents,
                        styles: h(k[e], j),
                        role: "alert",
                        type: e,
                      }));
                    try {
                      c.load();
                    } catch (o) {
                      continue;
                    }
                    c.hide(), c.click(m), (g[e] = c);
                  }
                  this.on({
                    "frame:indicator:show": function (a) {
                      var b = g[a.type];
                      b &&
                        ((b.document.getElementById("message").innerHTML =
                          a.content),
                        b.show());
                    },
                    "frame:indicator:hide": function (a) {
                      var b = a && a.type,
                        c = b && g[b];
                      if (c) c.hide();
                      else if (!b)
                        for (var d = 0; d < b.length; d++)
                          (b = b[d]), (c = g[b]), c && c.hide();
                    },
                  });
                }
              },
              "frame:fail frame:rendered": function () {
                this.removeLoadingAnim(), this.setState("RUNNING");
              },
              "frame:fail": function (a) {
                i.logStat("failed_recommendations.server." + a.code);
              },
              "frame:rendered": function () {
                this.triggeredSlowEvent &&
                  i.logStat("rendered_recommendations.slow");
              },
            },
            onceEvents: {},
            getFrameInitParams: function (a, b) {
              var c = n.prototype.getFrameInitParams.call(this, a, b);
              return (
                (c.identifier = this.settings.identifier),
                (c.url = this.settings.url),
                (c.experiment = {
                  experiment: this.settings.experimentName,
                  variant: this.settings.experimentVariant,
                  service: this.settings.experimentService,
                }),
                (c.startedFullyVisible = !1),
                this.whenFullyVisible(function () {
                  (c.startedFullyVisible = !0),
                    b.sendMessage("frame.visible", {});
                }),
                (c.disableAds = this.settings.disableAds),
                (c.sourcelessIframe = this.settings.sourcelessIframe),
                (c.isHostIframed = this.settings.isHostIframed),
                (c.canDisableAds = this.settings.canDisableAds),
                (c.recommendationsPlacementUrl =
                  this.settings.recommendationsPlacementUrl),
                (c.recsOutsideEmbedEnabled =
                  this.settings.recsOutsideEmbedEnabled),
                this.settings.impressionId &&
                  (c.impressionId = this.settings.impressionId),
                c
              );
            },
            forwardGlobalEvents: function () {
              var a = this;
              a.settings.windowName ||
                (a.listenTo(k, "window.resize", function () {
                  a.frame.sendMessage("window.resize");
                }),
                a.listenTo(k, "window.click", function () {
                  a.frame.sendMessage("window.click");
                }),
                a.listenTo(k, "window.mousemove", function () {
                  a.frame.sendMessage("window.mousemove");
                }),
                a.listenTo(k, "error", function (b) {
                  a.on("frame:rendered", function () {
                    a.frame.sendMessage("error", b);
                  });
                }));
            },
            isContainerVisible: function () {
              var a = this.getViewportCoords(),
                b = e.getOffset(
                  this.settings.container,
                  this.getScrollContainer()
                ),
                c = b.top + b.height - a.top;
              return c > 0 && c <= a.height;
            },
            pollFullyVisible: function () {
              var a = this;
              if (!a.pollingFullVisibility) {
                a.pollingFullVisibility = !0;
                var b = a.isHeightRestricted(),
                  c = {};
                f(
                  function () {
                    return a.frame && a.frame.elem
                      ? !(b && !a.rendered) &&
                          g(a.frame.elem) &&
                          !a.isHeightRestricted({
                            checkScrollHeight: !0,
                          })
                      : c;
                  },
                  function (b) {
                    b !== c &&
                      ((a.fullyVisible = !0), a.trigger("fullyVisible"));
                  },
                  a.constructor.VISIBILITY_POLL_INTERVAL
                );
              }
            },
            whenFullyVisible: function (a) {
              this.pollFullyVisible(),
                this.fullyVisible ? a() : this.once("fullyVisible", a);
            },
            showSlowLoadingMessage: function () {
              var a,
                b = this;
              if (b.loadingElem) {
                if (l.pageVisibility.isHidden())
                  return (
                    (a = function () {
                      l.pageVisibility.stopListening(a),
                        b.setSlowLoadingMessageTimer(2e3);
                    }),
                    void l.pageVisibility.listen(a)
                  );
                (b.triggeredSlowEvent = !0),
                  b.state === b.constructor.states.READY
                    ? i.logStat("slow_recommendations.got_ready")
                    : b.state === b.constructor.states.LOADED
                    ? i.logStat("slow_recommendations.loaded")
                    : i.logStat("slow_recommendations.no_ready"),
                  b.loadingElem.firstChild.insertAdjacentHTML(
                    "afterend",
                    '<p align="center">Disqus seems to be taking longer than usual. <a href="#" onclick="DISQUS_RECOMMENDATIONS.reset({reload: true}); return false;">Reload</a>?</p>'
                  );
              }
            },
            clearSlowLoadingMessageTimer: function () {
              this.timeout &&
                (clearTimeout(this.timeout), (this.timeout = null));
            },
            setSlowLoadingMessageTimer: function (a) {
              var b = this;
              b.clearSlowLoadingMessageTimer(),
                (b.timeout = setTimeout(function () {
                  b.showSlowLoadingMessage();
                }, a));
            },
            addLoadingAnimOnContainerVisible: function () {
              var a,
                b = this;
              a = b.listenToScrollEvent(function () {
                var c = b.isContainerVisible();
                (c || b.state >= b.constructor.states.RUNNING) && a(),
                  c && b.addLoadingAnim();
              });
            },
            addLoadingAnim: function () {
              var a,
                b,
                d,
                e = this,
                f = e.settings.container;
              if (e.loadingElem) return e.loadingElem;
              if (
                !(
                  e.state >= e.constructor.states.RUNNING ||
                  this.settings.degraded
                )
              ) {
                (a = c.createElement("div")), (a.dir = "ltr");
                var g = "dark" === e.settings.colorScheme;
                if (
                  e.settings.forumDetails &&
                  e.settings.forumDetails.disableDisqusBranding
                ) {
                  (b = c.createElement("div")), a.appendChild(b);
                  var j = b.style;
                  h(j, o.getBubbleStyle(g)), f.appendChild(a);
                } else {
                  (d = c.createElement("svg")), a.appendChild(d);
                  var k = d.style;
                  h(k, o.getIconStyle(g)), f.appendChild(a);
                }
                return (
                  (e.loadingElem = a),
                  e.setSlowLoadingMessageTimer(15e3),
                  i.logStat("recommendations.loading.view"),
                  e.loadingElem
                );
              }
            },
            removeLoadingAnim: function () {
              var a = this.loadingElem,
                b = this.settings.container;
              a &&
                a.parentNode === b &&
                (b.removeChild(a), (this.loadingElem = null));
            },
            destroy: function () {
              this.removeLoadingAnim(), n.prototype.destroy.call(this);
            },
          },
          {
            VISIBILITY_POLL_INTERVAL: 500,
          }
        ),
        q = function (a) {
          return new p(a);
        };
      return {
        Recommendations: q,
      };
    })({})),
    (ma = (function (c) {
      var d = g,
        f = h,
        k = i,
        l = j,
        o = e,
        p = ga,
        q = m,
        r = n,
        s = x.HostConfig,
        t = Z,
        u = da,
        v = new s(a);
      c.configAdapter = v;
      var w = [],
        y = function (a) {
          return a.lastResizedHeight === b
            ? parseInt(
                (a.frame && a.frame.elem && a.frame.elem.style.height) || 0,
                10
              )
            : a.lastResizedHeight;
        },
        z = !1,
        A = function () {
          for (var a; (a = w.pop()); )
            a.triggeredSlowEvent &&
              a.state !== a.constructor.states.RUNNING &&
              q.logStat("reset_recommendations.slow"),
              a.destroy();
        },
        B = (c.reset = function (a) {
          (a = a || {}), A(), a.reload && c.initRecommendations(a.config);
        }),
        C = f(a);
      (c.VERSION = "current"),
        (c.initRecommendations = function (a) {
          if (w.length)
            return (
              B({
                reload: !0,
              }),
              r.log(
                "Use DISQUS_RECOMMENDATIONS.reset instead of reloading recommendations.js please."
              ),
              void r.log(
                "See https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites"
              )
            );
          v.configurator = a;
          var b = v.toJSON();
          (b.version = c.VERSION),
            (b.loaderVersion = q.getLoaderVersionFromUrl(
              "https://c.disquscdn.com/next/recommendations/recommendations.load.8b0221d1e6088a6359fd494f934e58e6.js"
            )),
            z || ((b.container.innerHTML = ""), (z = !0)),
            c.loadApps(b);
        });
      var D = function (c) {
        A();
        var d = Boolean(!c.adBlockEnabled || c.defaultPlacementUrl),
          e = function (a) {
            return (
              c.adBlockEnabled &&
                c.defaultPlacementUrl &&
                (a = p(c.defaultPlacementUrl, {
                  position: "recommendations",
                })),
              a
            );
          },
          f = k(),
          g =
            c.experimentName &&
            0 === c.experimentName.indexOf("googlewidemargins") &&
            "fallthrough" !== c.experimentVariant,
          h = {
            "min-width": b,
            display: "inline",
            "box-sizing": "border-box",
          };
        if (c.recommendationsPlacementUrl && d && !f && g) {
          var i = 300 + 2 * parseInt(c.experimentVariant, 10);
          (h.width = "calc(100% - " + i + "px)"),
            (h.margin = c.experimentVariant + " 0");
        } else
          c.recommendationsPlacementUrl && d && !f
            ? (h.width = "calc(100% - 310px)")
            : (h.width = "100%");
        var j = u.Recommendations(
          l({}, c, {
            isHostIframed: C,
            styles: h,
          })
        );
        w.push(j), j.init();
        var m = function (a) {
            j.whenFullyVisible(a);
          },
          n = null;
        if (c.recommendationsPlacementUrl && d) {
          c.recommendationsPlacementUrl = e(c.recommendationsPlacementUrl);
          var q = {
            "min-width": b,
            display: "inline",
            "box-sizing": "border-box",
          };
          f
            ? ((q.width = "300px"),
              (q.display = "block"),
              (q.margin = "auto"),
              g
                ? (q.margin = c.experimentVariant + " auto")
                : ((q["padding-top"] = "10px"), (q.margin = "auto")))
            : g
            ? ((q.width = "300px"), (q.margin = c.experimentVariant))
            : ((q.width = "310px"), (q["padding-right"] = "10px")),
            (n = t.Ads(
              l(
                {
                  adUrl: c.recommendationsPlacementUrl,
                  placement: "recommendations",
                  isOnHostPage: !0,
                },
                c,
                {
                  insertBeforeEl: !f && j.frame.elem,
                  insertAfterEl: f && j.frame.elem,
                  styles: q,
                }
              )
            )),
            w.push(n),
            j.listenToOnce(
              n,
              "ad-placement-empty prevented-ad-load",
              function () {
                this.frame.setInlineStyle("width", "100%"),
                  n.frame && n.frame.setInlineStyle("padding", "0"),
                  g &&
                    (n.frame && n.frame.setInlineStyle("margin", "0"),
                    f || this.frame.setInlineStyle("margin", "0"));
              }
            ),
            m(function () {
              n.init();
            });
          var r = j.frame.container,
            s =
              r &&
              r.parentNode &&
              r.parentNode.children &&
              o(r.parentNode.children, "disqus_thread");
          C &&
            !s &&
            (j.on("frame:resize", function (b) {
              var c = b.height || y(this);
              n && f ? (c += y(n)) : n && (c = Math.max(c, y(n))),
                a.postMessage(
                  JSON.stringify({
                    scope: "host",
                    sender: "dsq-app-recommendations",
                    name: "resize",
                    data: {
                      height: c,
                    },
                  }),
                  "*"
                );
            }),
            n &&
              j.listenTo(n, "frame:resize", function (b) {
                var c = y(this),
                  d = b.height || y(n),
                  e = f ? c + d : Math.max(c, d);
                a.postMessage(
                  JSON.stringify({
                    scope: "host",
                    sender: "dsq-app-recommendations",
                    name: "resize",
                    data: {
                      height: e,
                    },
                  }),
                  "*"
                );
              }));
        }
      };
      return (
        (c.loadApps = function (a) {
          a.adBlockEnabled === b
            ? d(function (b) {
                (a.adBlockEnabled = b), D(a);
              })
            : D(a);
        }),
        c
      );
    })(ma)),
    (ea = (function (b) {
      var c = a.document,
        d = a.DISQUS_RECOMMENDATIONS || {},
        e = ha;
      d.reset || (d.reset = ma.reset),
        d.request || (d.request = {}),
        d.request.get ||
          (d.request.get = function (a, b, c) {
            e(a, b, c);
          }),
        d.host || (d.host = {}),
        d.host._initRecommendations ||
          (d.host._initRecommendations = ma.initRecommendations),
        (a.DISQUS_RECOMMENDATIONS = d);
      var f = function (a, b) {
        var d = c.createElement("link");
        return (
          (d.rel = "prefetch"),
          (d.as = b || "script"),
          (d.pr = 1),
          (d.href = a),
          c.head.appendChild(d),
          d
        );
      };
      f(
        "https://c.disquscdn.com/next/recommendations/styles/recommendations.10022a97346f1c6e3798931bbd8e4bb5.css",
        "style"
      ),
        f(
          "https://c.disquscdn.com/next/recommendations/common.bundle.a3659a8e961f4dff2575f07c23268b7f.js"
        ),
        f(
          "https://c.disquscdn.com/next/recommendations/recommendations.bundle.926bc472e4859a48daa346b4ba2ab4f4.js"
        ),
        f("https://disqus.com/next/config.js");
    })({}));
})(this),
  this.DISQUS_RECOMMENDATIONS.host._initRecommendations();
