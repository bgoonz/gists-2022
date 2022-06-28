// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "4",

      macros: [
        {
          function: "__e",
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__f",
          vtp_component: "URL",
        },
        {
          function: "__e",
        },
      ],
      tags: [
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_autoLinkDomains: ["template", ["macro", 1], ["macro", 1]],
          vtp_trackingId: ["macro", 2],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: false,
          tag_id: 3,
        },
        {
          function: "__html",
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003Evar _smartsupp=_smartsupp||{};_smartsupp.key="d80a99a57a43d9ecbb6c5b86f2ae419b8f6c47ca";window.smartsupp||function(a){var b=smartsupp=function(){b._.push(arguments)};b._=[];var c=a.getElementsByTagName("script")[0];a=a.createElement("script");a.type="text/javascript";a.charset="utf-8";a.async=!0;a.src="https://www.smartsuppchat.com/loader.js?";c.parentNode.insertBefore(a,c)}(document);\u003C/script\u003E\n',
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 5,
        },
        {
          function: "__html",
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003Ewindow.__lc=window.__lc||{};window.__lc.license=13199361;\n(function(e,f,c){function d(a){return b._h?b._h.apply(null,a):b._q.push(a)}var b={_q:[],_h:null,_v:"2.0",on:function(){d(["on",c.call(arguments)])},once:function(){d(["once",c.call(arguments)])},off:function(){d(["off",c.call(arguments)])},get:function(){if(!b._h)throw Error("[LiveChatWidget] You can\'t use getters before load.");return d(["get",c.call(arguments)])},call:function(){d(["call",c.call(arguments)])},init:function(){var a=f.createElement("script");a.async=!0;a.type="text/javascript";a.src=\n"https://cdn.livechatinc.com/tracking.js";f.head.appendChild(a)}};!e.__lc.asyncInit\u0026\u0026b.init();e.LiveChatWidget=e.LiveChatWidget||b})(window,document,[].slice);\u003C/script\u003E\n\u003Cnoscript\u003E\u003Ca href="https://www.livechatinc.com/chat-with/13199361/" rel="nofollow"\u003EChat with us\u003C/a\u003E, powered by \u003Ca href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank"\u003ELiveChat\u003C/a\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 6,
        },
      ],
      predicates: [
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "gtm.init",
        },
        {
          function: "_eq",
          arg0: ["macro", 0],
          arg1: "gtm.js",
        },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
        [
          ["if", 1],
          ["add", 1, 2],
        ],
      ],
    },
    runtime: [],
  };

  /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length
          ? {
              done: !1,
              value: a[b++],
            }
          : {
              done: !0,
            };
      };
    },
    ba =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ca;
  if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
  else {
    var da;
    a: {
      var ea = {
          a: !0,
        },
        fa = {};
      try {
        fa.__proto__ = ea;
        da = fa.a;
        break a;
      } catch (a) {}
      da = !1;
    }
    ca = da
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ia = ca,
    ka = function (a, b) {
      a.prototype = ba(b.prototype);
      a.prototype.constructor = a;
      if (ia) ia(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Tj = b.prototype;
    },
    la = this || self,
    ma = function (a) {
      return a;
    };
  var na = function () {},
    qa = function (a) {
      return "function" == typeof a;
    },
    ta = function (a) {
      return "string" == typeof a;
    },
    ua = function (a) {
      return "number" == typeof a && !isNaN(a);
    },
    va = Array.isArray,
    wa = function (a, b) {
      if (a && va(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    xa = function (a, b) {
      if (!ua(a) || !ua(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Aa = function (a, b) {
      for (var c = new ya(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ca = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Da = function (a) {
      return (
        !!a &&
        ("[object Arguments]" == Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Ea = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Fa = function (a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Ha = function (a) {
      var b = [];
      if (va(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ka = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Oa = function () {
      return new Date(Date.now());
    },
    Pa = function () {
      return Oa().getTime();
    },
    ya = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  ya.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  ya.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Qa = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Sa = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ta = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Wa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Ya = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Za = /^\w{1,9}$/,
    $a = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ca(a, function (d, e) {
        Za.test(d) && e && c.push(d);
      });
      return c.join(b);
    };
  var ab,
    bb = function () {
      if (void 0 === ab) {
        var a = null,
          b = la.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ma,
              createScript: ma,
              createScriptURL: ma,
            });
          } catch (c) {
            la.console && la.console.error(c.message);
          }
          ab = a;
        } else ab = a;
      }
      return ab;
    };
  var db = function (a, b) {
    this.m = b === cb ? a : "";
  };
  db.prototype.toString = function () {
    return this.m + "";
  };
  var cb = {};
  var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function fb() {
    var a = la.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }

  function gb(a) {
    return -1 != fb().indexOf(a);
  }
  var hb = {},
    ib = function (a, b, c) {
      this.m = c === hb ? a : "";
    };
  ib.prototype.toString = function () {
    return this.m.toString();
  };
  var jb = function (a) {
      return a instanceof ib && a.constructor === ib
        ? a.m
        : "type_error:SafeHtml";
    },
    lb = function (a) {
      var b = bb(),
        c = b ? b.createHTML(a) : a;
      return new ib(c, null, hb);
    },
    mb = new ib((la.trustedTypes && la.trustedTypes.emptyHTML) || "", 0, hb);
  /*

     SPDX-License-Identifier: Apache-2.0
    */
  var nb = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ob = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var pb = (function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  })(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    var c = a.firstChild.firstChild;
    a.innerHTML = jb(mb);
    return !c.parentElement;
  });
  var k = window,
    C = document,
    qb = navigator,
    rb = C.currentScript && C.currentScript.src,
    ub = function (a, b) {
      var c = k[a];
      k[a] = void 0 === c ? b : c;
      return k[a];
    },
    vb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in
                {
                  loaded: 1,
                  complete: 1,
                } && ((a.onreadystatechange = null), b());
            }));
    },
    wb = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1,
    },
    xb = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1,
    };

  function yb(a, b, c) {
    b &&
      Ca(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var zb = function (a, b, c, d) {
      var e = C.createElement("script");
      yb(e, d, wb);
      e.type = "text/javascript";
      e.async = !0;
      var f,
        g = bb(),
        l = g ? g.createScriptURL(a) : a;
      f = new db(l, cb);
      e.src =
        f instanceof db && f.constructor === db
          ? f.m
          : "type_error:TrustedResourceUrl";
      var m,
        n,
        q = ((e.ownerDocument && e.ownerDocument.defaultView) || window)
          .document,
        r =
          null === (n = q.querySelector) || void 0 === n
            ? void 0
            : n.call(q, "script[nonce]");
      (m = r ? r.nonce || r.getAttribute("nonce") || "" : "") &&
        e.setAttribute("nonce", m);
      vb(e, b);
      c && (e.onerror = c);
      var u = C.getElementsByTagName("script")[0] || C.body || C.head;
      u.parentNode.insertBefore(e, u);
      return e;
    },
    Ab = function () {
      if (rb) {
        var a = rb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Eb = function (a, b, c, d, e) {
      var f = e,
        g = !1;
      f || ((f = C.createElement("iframe")), (g = !0));
      yb(f, c, xb);
      d &&
        Ca(d, function (m, n) {
          f.dataset[m] = n;
        });
      f.height = "0";
      f.width = "0";
      f.style.display = "none";
      f.style.visibility = "hidden";
      if (g) {
        var l = (C.body && C.body.lastChild) || C.body || C.head;
        l.parentNode.insertBefore(f, l);
      }
      vb(f, b);
      void 0 !== a && (f.src = a);
      return f;
    },
    Fb = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    Gb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Hb = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      k.setTimeout(a, 0);
    },
    Ib = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    Jb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Kb = function (a) {
      var b = C.createElement("div"),
        c = lb("A<div>" + a + "</div>"),
        d = b;
      if (pb()) for (; d.lastChild; ) d.removeChild(d.lastChild);
      d.innerHTML = jb(c);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Lb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Mb = function (a) {
      var b;
      try {
        b = qb.sendBeacon && qb.sendBeacon(a);
      } catch (c) {}
      b || Fb(a);
    },
    Nb = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Ob = function (a) {
      var b = C.featurePolicy;
      return b && qa(b.allowsFeature) ? b.allowsFeature(a) : !1;
    },
    Sb = function () {
      return qb.userLanguage || qb.language;
    };
  /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Tb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ub = function (a) {
      if (null == a) return String(a);
      var b = Tb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Vb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Wb = function (a) {
      if (!a || "object" != Ub(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Vb(a, "constructor") &&
          !Vb(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Vb(a, b);
    },
    H = function (a, b) {
      var c = b || ("array" == Ub(a) ? [] : {}),
        d;
      for (d in a)
        if (Vb(a, d)) {
          var e = a[d];
          "array" == Ub(e)
            ? ("array" != Ub(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
            : Wb(e)
            ? (Wb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Xb = function (a) {
    if (void 0 === a || va(a) || Wb(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  var Yb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      eh: a("consent"),
      fh: a("consent_always_fire"),
      ef: a("convert_case_to"),
      ff: a("convert_false_to"),
      hf: a("convert_null_to"),
      jf: a("convert_true_to"),
      kf: a("convert_undefined_to"),
      Bj: a("debug_mode_metadata"),
      Dj: a("event_data_overrides"),
      pb: a("function"),
      Nh: a("instance_name"),
      Rh: a("live_only"),
      Sh: a("malware_disabled"),
      Th: a("metadata"),
      Gj: a("original_activity_id"),
      Hj: a("original_vendor_template_id"),
      Xh: a("once_per_event"),
      Qf: a("once_per_load"),
      Jj: a("priority_override"),
      Kj: a("respected_consent_types"),
      Vf: a("setup_tags"),
      Xf: a("tag_id"),
      Yf: a("teardown_tags"),
    };
  })();
  var uc;
  var vc = [],
    wc = [],
    xc = [],
    Dc = [],
    Ec = [],
    Fc = {},
    Gc,
    Hc,
    Ic,
    Jc = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Fc[c],
        f = {},
        g;
      for (g in a)
        if (a.hasOwnProperty(g))
          if (0 === g.indexOf("vtp_"))
            e && d && d.ig && d.ig(a[g]),
              (f[void 0 !== e ? g : g.substr(4)] = a[g]);
          else if (g === Yb.fh.toString() && a[g]) {
          }
      e && d && d.hg && (f.vtp_gtmCachedValues = d.hg);
      return void 0 !== e ? e(f) : uc(c, f, b);
    },
    Lc = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Kc(a[e], b, c));
      return d;
    },
    Kc = function (a, b, c) {
      if (va(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Kc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = vc[f];
            if (!g || b.Le(g)) return;
            c[f] = !0;
            try {
              var l = Lc(g, b, c);
              l.vtp_gtmEventId = b.id;
              d = Jc(l, {
                event: b,
                index: f,
                type: 2,
              });
              Ic && (d = Ic.ki(d, l));
            } catch (A) {
              b.Bg && b.Bg(A, Number(f)), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var m = 1; m < a.length; m += 2)
              d[Kc(a[m], b, c)] = Kc(a[m + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var n = !1, q = 1; q < a.length; q++) {
              var r = Kc(a[q], b, c);
              Hc && (n = n || r === Hc.bd);
              d.push(r);
            }
            return Hc && n ? Hc.oi(d) : d.join("");
          case "escape":
            d = Kc(a[1], b, c);
            if (Hc && va(a[1]) && "macro" === a[1][0] && Hc.Mi(a))
              return Hc.aj(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Zb[a[u]] && (d = Zb[a[u]](d));
            return d;
          case "tag":
            var t = a[1];
            if (!Dc[t])
              throw Error("Unable to resolve tag reference " + t + ".");
            return (d = {
              ng: a[2],
              index: t,
            });
          case "zb":
            var p = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5],
            };
            p["function"] = a[1];
            var v = Mc(p, b, c),
              w = !!a[4];
            return w || 2 !== v ? w !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Mc = function (a, b, c) {
      try {
        return Gc(Lc(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Pc = function (a) {
      function b(u) {
        for (var t = 0; t < u.length; t++) d[u[t]] = !0;
      }
      for (var c = [], d = [], e = Nc(a), f = 0; f < wc.length; f++) {
        var g = wc[f],
          l = Oc(g, e);
        if (l) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === l && b(g.block || []);
      }
      for (var q = [], r = 0; r < Dc.length; r++) c[r] && !d[r] && (q[r] = !0);
      return q;
    },
    Oc = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var l = b(f[g]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    Nc = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Mc(xc[c], a));
        return b[c];
      };
    };
  var Qc = {
    ki: function (a, b) {
      b[Yb.ef] &&
        "string" === typeof a &&
        (a = 1 == b[Yb.ef] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Yb.hf) && null === a && (a = b[Yb.hf]);
      b.hasOwnProperty(Yb.kf) && void 0 === a && (a = b[Yb.kf]);
      b.hasOwnProperty(Yb.jf) && !0 === a && (a = b[Yb.jf]);
      b.hasOwnProperty(Yb.ff) && !1 === a && (a = b[Yb.ff]);
      return a;
    },
  };
  var L = {
    Mb: "_ee",
    hd: "_syn_or_mod",
    Mj: "_uei",
    fe: "_eu",
    Ij: "_pci",
    Jb: "event_callback",
    Rc: "event_timeout",
    ya: "gtag.config",
    Ka: "gtag.get",
    wa: "purchase",
    Fb: "refund",
    hb: "begin_checkout",
    Db: "add_to_cart",
    Eb: "remove_from_cart",
    oh: "view_cart",
    nf: "add_to_wishlist",
    xa: "view_item",
    ib: "view_promotion",
    Nc: "select_promotion",
    Id: "select_item",
    Va: "view_item_list",
    lf: "add_payment_info",
    nh: "add_shipping_info",
    Ma: "value_key",
    Xa: "value_callback",
    O: "allow_ad_personalization_signals",
    hc: "restricted_data_processing",
    $b: "allow_google_signals",
    qa: "cookie_expires",
    Hb: "cookie_update",
    ic: "session_duration",
    Wc: "session_engaged_time",
    Oa: "user_properties",
    ra: "transport_url",
    U: "ads_data_redaction",
    Aa: "user_data",
    cc: "first_party_collection",
    C: "ad_storage",
    H: "analytics_storage",
    cf: "region",
    df: "wait_for_update",
    oa: "conversion_linker",
    Ea: "conversion_cookie_prefix",
    ia: "value",
    fa: "currency",
    Mf: "trip_type",
    aa: "items",
    Ef: "passengers",
    Ld: "allow_custom_scripts",
    jc: "session_id",
    Jf: "quantity",
    Za: "transaction_id",
    lb: "language",
    Pc: "country",
    Oc: "allow_enhanced_conversions",
    Qd: "aw_merchant_id",
    Od: "aw_feed_country",
    Pd: "aw_feed_language",
    Nd: "discount",
    W: "developer_id",
    Xc: "delivery_postal_code",
    Wd: "estimated_delivery_date",
    Ud: "shipping",
    be: "new_customer",
    Rd: "customer_lifetime_value",
    Vd: "enhanced_conversions",
    Zb: "page_view",
    ka: "linker",
    N: "domains",
    Lb: "decorate_forms",
    zf: "enhanced_conversions_automatic_settings",
    vh: "auto_detection_enabled",
    Af: "ga_temp_client_id",
    Jd: "user_engagement",
    ih: "app_remove",
    jh: "app_store_refund",
    kh: "app_store_subscription_cancel",
    lh: "app_store_subscription_convert",
    mh: "app_store_subscription_renew",
    ph: "first_open",
    qh: "first_visit",
    rh: "in_app_purchase",
    sh: "session_start",
    th: "allow_display_features",
    ac: "campaign",
    pf: "campaign_content",
    qf: "campaign_id",
    rf: "campaign_medium",
    sf: "campaign_name",
    tf: "campaign_source",
    uf: "campaign_term",
    jb: "client_id",
    ja: "cookie_domain",
    Gb: "cookie_name",
    Wa: "cookie_path",
    Fa: "cookie_flags",
    bc: "custom_map",
    Zd: "groups",
    Df: "non_interaction",
    nb: "page_location",
    ce: "page_path",
    Na: "page_referrer",
    Uc: "page_title",
    la: "send_page_view",
    ob: "send_to",
    de: "session_engaged",
    Bf: "_logged_in_state",
    ee: "session_number",
    Jh: "tracking_id",
    $a: "url_passthrough",
    Kb: "accept_incoming",
    fc: "url_position",
    Hf: "phone_conversion_number",
    Ff: "phone_conversion_callback",
    Gf: "phone_conversion_css_class",
    If: "phone_conversion_options",
    Gh: "phone_conversion_ids",
    Fh: "phone_conversion_country_code",
    La: "aw_remarketing",
    Md: "aw_remarketing_only",
    Kd: "gclid",
    uh: "auid",
    Ah: "affiliation",
    yf: "tax",
    Td: "list_name",
    xf: "checkout_step",
    wf: "checkout_option",
    Bh: "coupon",
    Ch: "promotions",
    ab: "user_id",
    Hh: "retoken",
    za: "cookie_prefix",
    vf: "disable_merchant_reported_purchases",
    zh: "dc_natural_search",
    yh: "dc_custom_params",
    Cf: "method",
    Ih: "search_term",
    xh: "content_type",
    Eh: "optimize_id",
    Dh: "experiments",
    Ya: "google_signals",
  };
  L.Tc = "google_tld";
  L.Yc = "update";
  L.Xd = "firebase_id";
  L.Yd = "ga_restrict_domain";
  L.Qc = "event_settings";
  L.Sd = "dynamic_event_settings";
  L.kc = "user_data_settings";
  L.Kf = "screen_name";
  L.kb = "_x_19";
  L.Ib = "_ecid";
  L.Sc = "_x_20";
  L.ae = "internal_traffic_results";
  L.Lf = "traffic_type";
  L.Vc = "referral_exclusion_definition";
  L.$d = "ignore_referrer";
  L.wh = "content_group";
  L.da = "allow_interest_groups";
  var qd = {};
  L.Of = Object.freeze(
    ((qd[L.lf] = 1),
    (qd[L.nh] = 1),
    (qd[L.Db] = 1),
    (qd[L.Eb] = 1),
    (qd[L.oh] = 1),
    (qd[L.hb] = 1),
    (qd[L.Id] = 1),
    (qd[L.Va] = 1),
    (qd[L.Nc] = 1),
    (qd[L.ib] = 1),
    (qd[L.wa] = 1),
    (qd[L.Fb] = 1),
    (qd[L.xa] = 1),
    (qd[L.nf] = 1),
    qd)
  );
  L.ie = Object.freeze([L.O, L.$b, L.Hb]);
  L.Vh = Object.freeze([].concat(L.ie));
  L.je = Object.freeze([L.qa, L.Rc, L.ic, L.Wc]);
  L.Wh = Object.freeze([].concat(L.je));
  var rd = {};
  L.Fd = ((rd[L.C] = "1"), (rd[L.H] = "2"), rd);
  var Ad = {},
    Bd = function (a, b) {
      Ad[a] = Ad[a] || [];
      Ad[a][b] = !0;
    },
    Cd = function (a) {
      for (var b = [], c = Ad[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[e] =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
            b[e] || 0
          );
      return b.join("");
    };
  var Dd = function (a) {
    Bd("GTM", a);
  };
  var O = {},
    Q = (k.google_tag_manager = k.google_tag_manager || {}),
    Ed = Math.random();
  O.I = "GTM-5S5XXNR";
  O.fd = "1c0";
  O.V = "dataLayer";
  O.hh =
    "ChAIgKGPjwYQ+/eXoNiAhsYQEiQAEsWJypqOq3KZMxgKTJffpuLzuq779gapqNrh2JQYun0iO+waApua";
  var Fd = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    Gd = {
      __paused: !0,
      __tg: !0,
    },
    Hd;
  for (Hd in Fd) Fd.hasOwnProperty(Hd) && (Gd[Hd] = !0);
  O.Gd = "www.googletagmanager.com";
  var Id,
    Jd = O.Gd + "/gtm.js";
  Id = Jd;
  var Kd = Fa(""),
    Ld = null,
    Md = null,
    Nd = "https://www.googletagmanager.com/a?id=" + O.I + "&cv=4",
    Od = {},
    Pd = {},
    Qd = function () {
      var a = Q.sequence || 1;
      Q.sequence = a + 1;
      return a;
    };
  O.gh = "";
  var Rd = "";
  O.gd = Rd;
  var Yd = {},
    Zd = new ya(),
    $d = {},
    ae = {},
    de = {
      name: O.V,
      set: function (a, b) {
        H(Ya(a, b), $d);
        be();
      },
      get: function (a) {
        return ce(a, 2);
      },
      reset: function () {
        Zd = new ya();
        $d = {};
        be();
      },
    },
    ce = function (a, b) {
      return 2 != b ? Zd.get(a) : ee(a);
    },
    ee = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = $d, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    fe = function (a, b) {
      ae.hasOwnProperty(a) || (Zd.set(a, b), H(Ya(a, b), $d), be());
    },
    be = function (a) {
      Ca(ae, function (b, c) {
        Zd.set(b, c);
        H(Ya(b, void 0), $d);
        H(Ya(b, c), $d);
        a && delete ae[b];
      });
    },
    he = function (a, b, c) {
      Yd[a] = Yd[a] || {};
      Yd[a][b] = ge(b, c);
    },
    ge = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? ee(a) : Zd.get(a);
      "array" === Ub(d) || "object" === Ub(d) ? (c = H(d)) : (c = d);
      return c;
    },
    ie = function (a, b) {
      if (Yd[a]) return Yd[a][b];
    },
    je = function (a, b) {
      Yd[a] && delete Yd[a][b];
    };
  var ke = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    le = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    me = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    ne =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  var oe = function () {
      var a = !1;
      return a;
    },
    qe = function (a) {
      var b = ce("gtm.allowlist") || ce("gtm.whitelist");
      b && Dd(9);
      oe() && (b = "google gtagfl lcl zone oid op".split(" "));
      var c = b && Xa(Ha(b), le),
        d = ce("gtm.blocklist") || ce("gtm.blacklist");
      d || ((d = ce("tagTypeBlacklist")) && Dd(3));
      d ? Dd(8) : (d = []);
      pe() &&
        ((d = Ha(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ha(d).indexOf("google") && Dd(2);
      var e = d && Xa(Ha(d), me),
        f = {};
      return function (g) {
        var l = g && g[Yb.pb];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Pd[l] || [],
          n = a(l, m);
        if (b) {
          var q;
          if ((q = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var r = 0; r < m.length; r++) {
                    if (0 > c.indexOf(m[r])) {
                      Dd(11);
                      q = !1;
                      break a;
                    }
                  }
                else {
                  q = !1;
                  break a;
                }
              q = !0;
            }
          n = q;
        }
        var u = !1;
        if (d) {
          var t = 0 <= e.indexOf(l);
          if (t) u = t;
          else {
            var p = Aa(e, m || []);
            p && Dd(10);
            u = p;
          }
        }
        var v = !n || u;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Aa(e, ne));
        return (f[l] = v);
      };
    },
    pe = function () {
      return ke.test(k.location && k.location.hostname);
    };
  var re = {
      active: !0,
      isAllowed: function () {
        return !0;
      },
    },
    se = function (a) {
      var b = Q.zones;
      return b ? b.checkState(O.I, a) : re;
    },
    te = function (a) {
      var b = Q.zones;
      !b && a && (b = Q.zones = a());
      return b;
    };
  var ue = new (function (a, b) {
    this.m = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var we = function () {
    var a = ve,
      b = "Je";
    if (a.Je && a.hasOwnProperty(b)) return a.Je;
    var c = new a();
    a.Je = c;
    a.hasOwnProperty(b);
    return c;
  };
  var ve = function () {
    var a = {};
    this.m = function () {
      var b = ue.m,
        c = ue.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.o = function () {
      a[ue.m] = !0;
    };
  };
  var xe = [];

  function ye() {
    var a = ub("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: ze,
        update: Ae,
        addListener: Be,
        notifyListeners: Ce,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }

  function ze(a, b, c, d, e, f) {
    var g = ye();
    g.usedUpdate && (g.wasSetLate = !0);
    if (g.accessedDefault || g.accessedAny) g.wasSetLate = !0;
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var l = g.entries,
        m = l[a] || {},
        n = m.region,
        q = c && ta(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || q === e || (q === d ? n !== e : !q && !n)) {
        var r = !!(f && 0 < f && void 0 === m.update),
          u = {
            region: q,
            initial: "granted" === b,
            update: m.update,
            quiet: r,
          };
        if ("" !== d || !1 !== m.initial) l[a] = u;
        r &&
          k.setTimeout(function () {
            l[a] === u &&
              u.quiet &&
              ((u.quiet = !1), De(a), Ce(), Bd("TAGGING", 2));
          }, f);
      }
    }
  }

  function Ae(a, b) {
    var c = ye();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = Ee(a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = Ee(a);
      f.quiet ? ((f.quiet = !1), De(a)) : g !== d && De(a);
    }
  }

  function Be(a, b) {
    xe.push({
      ze: a,
      zi: b,
    });
  }

  function De(a) {
    for (var b = 0; b < xe.length; ++b) {
      var c = xe[b];
      va(c.ze) && -1 !== c.ze.indexOf(a) && (c.Gg = !0);
    }
  }

  function Ce(a) {
    for (var b = 0; b < xe.length; ++b) {
      var c = xe[b];
      if (c.Gg) {
        c.Gg = !1;
        try {
          c.zi({
            consentEventId: a,
          });
        } catch (d) {}
      }
    }
  }
  var Ee = function (a) {
      var b = ye();
      b.accessedAny = !0;
      var c = b.entries[a] || {};
      return void 0 !== c.update ? c.update : c.initial;
    },
    Fe = function (a) {
      var b = ye();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    Ge = function (a) {
      var b = ye();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    He = function () {
      if (!we().m()) return !1;
      var a = ye();
      a.accessedAny = !0;
      return a.active;
    },
    Ie = function () {
      var a = ye();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Je = function (a, b) {
      ye().addListener(a, b);
    },
    Ke = function (a) {
      ye().notifyListeners(a);
    },
    Le = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ge(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Je(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    Me = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var l = d[g];
          !1 === Ee(l) || e[l] || (f.push(l), (e[l] = !0));
        }
        return f;
      }
      var d = ta(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        Je(d, function (f) {
          var g = c();
          0 < g.length && ((f.ze = g), a(f));
        });
    };

  function Ne() {}

  function Oe() {}

  function Pe(a) {
    for (var b = [], c = 0; c < Qe.length; c++) {
      var d = a(Qe[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var Qe = [L.C, L.H],
    Re = function (a) {
      var b = a[L.cf];
      b && Dd(40);
      var c = a[L.df];
      c && Dd(41);
      for (
        var d = va(b) ? b : [b],
          e = {
            Wb: 0,
          };
        e.Wb < d.length;
        e = {
          Wb: e.Wb,
        },
          ++e.Wb
      )
        Ca(
          a,
          (function (f) {
            return function (g, l) {
              if (g !== L.cf && g !== L.df) {
                var m = d[f.Wb];
                ye().set(g, l, m, "US", "US-NJ", c);
              }
            };
          })(e)
        );
    },
    Se = 0,
    Te = function (a, b) {
      Ca(a, function (e, f) {
        ye().update(e, f);
      });
      Ke(b);
      var c = Pa(),
        d = c - Se;
      Se && 0 <= d && 1e3 > d && Dd(66);
      Se = c;
    },
    Xe = function (a) {
      var b = Ee(a);
      return void 0 != b ? b : !0;
    },
    Ye = function () {
      return "G1" + Pe(Ee);
    },
    Ze = function () {
      return "G1" + Pe(Fe);
    },
    $e = function (a, b) {
      Me(a, b);
    },
    af = function (a, b) {
      Le(a, b);
    };
  var cf = function (a) {
      return bf ? C.querySelectorAll(a) : null;
    },
    df = function (a, b) {
      if (!bf) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!C.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    ef = !1;
  if (C.querySelectorAll)
    try {
      var ff = C.querySelectorAll(":root");
      ff && 1 == ff.length && ff[0] == C.documentElement && (ef = !0);
    } catch (a) {}
  var bf = ef;
  var Af = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.remoteConfig = {};
      this.onSuccess = function () {};
      this.onFailure = function () {};
      this.setContainerTypeLoaded = function () {};
      this.getContainerTypeLoaded = function () {};
      this.eventId = void 0;
      this.isGtmEvent = !1;
    },
    Bf = function (a) {
      var b = new Af();
      b.eventModel = a;
      return b;
    },
    Cf = function (a, b) {
      a.targetConfig = b;
      return a;
    },
    Df = function (a, b) {
      a.containerConfig = b;
      return a;
    },
    Ef = function (a, b) {
      a.globalConfig = b;
      return a;
    },
    Ff = function (a, b) {
      a.remoteConfig = b;
      return a;
    },
    Gf = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Hf = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a;
    },
    If = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a;
    },
    Jf = function (a, b) {
      a.onFailure = b;
      return a;
    };
  Af.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
  };
  var Kf = function (a) {
      function b(d) {
        for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
      }
      var c = {};
      b(a.eventModel);
      b(a.targetConfig);
      b(a.containerConfig);
      b(a.globalConfig);
      return Object.keys(c);
    },
    Lf = function (a, b, c) {
      function d(g) {
        Wb(g) &&
          Ca(g, function (l, m) {
            f = !0;
            e[l] = m;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) ||
        (d(a.remoteConfig[b]),
        d(a.globalConfig[b]),
        d(a.containerConfig[b]),
        d(a.targetConfig[b]));
      (c && 2 !== c) || d(a.eventModel[b]);
      return f ? e : void 0;
    },
    Mf = function (a) {
      var b = [L.ac, L.pf, L.qf, L.rf, L.sf, L.tf, L.uf],
        c = {},
        d = !1,
        e = function (f) {
          for (var g = 0; g < b.length; g++)
            void 0 !== f[b[g]] && ((c[b[g]] = f[b[g]]), (d = !0));
          return d;
        };
      if (
        e(a.eventModel) ||
        e(a.targetConfig) ||
        e(a.containerConfig) ||
        e(a.globalConfig)
      )
        return c;
      e(a.remoteConfig);
      return c;
    },
    Nf = function (a) {
      var b = [],
        c;
      for (c in a.eventModel)
        c !== L.Mb &&
          a.eventModel.hasOwnProperty(c) &&
          void 0 !== a.eventModel[c] &&
          b.push(c);
      return b;
    };
  var Of,
    Pf = !1,
    Qf = function (a) {
      if (!Pf) {
        Pf = !0;
        Of = Of || {};
      }
      return Of[a];
    };
  var Rf = function (a) {
    if (C.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !k.getComputedStyle)
      return !0;
    var c = k.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d; ) {
      if ("none" === e.display) return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var l = g.indexOf("opacity(");
        0 <= l &&
          ((g = g.substring(l + 8, g.indexOf(")", l))),
          "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
          (f = Math.min(g, f)));
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = k.getComputedStyle(d, null));
    }
    return !1;
  };
  var $f = /:[0-9]+$/,
    ag = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var g = f.slice(1).join("=");
          return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
        }
      }
    },
    dg = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = bg(a.protocol) || bg(k.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : k.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || k.location.hostname)
            .replace($f, "")
            .toLowerCase());
      return cg(a, b, c, d, e);
    },
    cg = function (a, b, c, d, e) {
      var f,
        g = bg(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = eg(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace($f, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || Bd("TAGGING", 1);
          f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = ag(f, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    bg = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    eg = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    fg = function (a) {
      var b = C.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Bd("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace($f, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    gg = function (a) {
      function b(n) {
        var q = n.split("=")[0];
        return 0 > d.indexOf(q) ? n : q + "=0";
      }

      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (q) {
            return void 0 != q;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = fg(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        l = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === l[0] && (l = l.substring(1));
      g = c(g);
      l = c(l);
      "" !== g && (g = "?" + g);
      "" !== l && (l = "#" + l);
      var m = "" + f + g + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    };
  var hg = {};
  var Ag = {},
    Bg = function (a, b) {
      if (k._gtmexpgrp && k._gtmexpgrp.hasOwnProperty(a))
        return k._gtmexpgrp[a];
      void 0 === Ag[a] && (Ag[a] = Math.floor(Math.random() * b));
      return Ag[a];
    };
  var Fg = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 != c ? b ^ (c >> 21) : b);
    return b;
  };
  var Gg = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        l = g[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };

  function Hg(a) {
    return "null" !== a.origin;
  }
  var Kg = function (a, b, c, d) {
      return Ig(d) ? Gg(a, String(b || Jg()), c) : [];
    },
    Ng = function (a, b, c, d, e) {
      if (Ig(e)) {
        var f = Lg(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Mg(
            f,
            function (g) {
              return g.pd;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Mg(
            f,
            function (g) {
              return g.Cc;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };

  function Og(a, b, c, d) {
    var e = Jg(),
      f = window;
    Hg(f) && (f.document.cookie = a);
    var g = Jg();
    return e != g || (void 0 != c && 0 <= Kg(b, g, !1, d).indexOf(c));
  }
  var Sg = function (a, b, c) {
      function d(t, p, v) {
        if (null == v) return delete g[p], t;
        g[p] = v;
        return t + "; " + p + "=" + v;
      }

      function e(t, p) {
        if (null == p) return delete g[p], t;
        g[p] = !0;
        return t + "; " + p;
      }
      if (!Ig(c.Ra)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Pg(b)),
          (f = a + "=" + b));
      var g = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.Pj);
      f = d(f, "samesite", c.Rj);
      c.Sj && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Qg(), q = 0; q < n.length; ++q) {
          var r = "none" !== n[q] ? n[q] : void 0,
            u = d(f, "domain", r);
          u = e(u, c.flags);
          if (!Rg(r, c.path) && Og(u, a, b, c.Ra)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Rg(m, c.path) ? 1 : Og(f, a, b, c.Ra) ? 0 : 1;
    },
    Tg = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Sg(a, b, c);
    };

  function Mg(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var l = a[g],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }

  function Lg(a, b, c) {
    for (var d = [], e = Kg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        l = g.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = g.shift();
        m &&
          ((m = m.split("-")),
          d.push({
            id: g.join("."),
            pd: 1 * m[0] || 1,
            Cc: 1 * m[1] || 1,
          }));
      }
    }
    return d;
  }
  var Pg = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Ug = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Vg = /(^|\.)doubleclick\.net$/i,
    Rg = function (a, b) {
      return (
        Vg.test(window.document.location.hostname) || ("/" === b && Ug.test(a))
      );
    },
    Jg = function () {
      return Hg(window) ? window.document.cookie : "";
    },
    Qg = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Vg.test(e) || Ug.test(e) || a.push("none");
      return a;
    },
    Ig = function (a) {
      if (!we().m() || !a || !He()) return !0;
      if (!Ge(a)) return !1;
      var b = Ee(a);
      return null == b ? !0 : !!b;
    };
  var Wg = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (Fg(a) & 2147483647)) : String(b);
    },
    Xg = function (a) {
      return [Wg(a), Math.round(Pa() / 1e3)].join(".");
    },
    $g = function (a, b, c, d, e) {
      var f = Yg(b);
      return Ng(a, f, Zg(c), d, e);
    },
    ah = function (a, b, c, d) {
      var e = "" + Yg(c),
        f = Zg(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Yg = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Zg = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };

  function bh(a, b, c) {
    var d,
      e = Number(null != a.vb ? a.vb : void 0);
    0 !== e && (d = new Date((b || Pa()) + 1e3 * (e || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d,
    };
  }
  var ch = ["1"],
    dh = {},
    eh = {},
    ih = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = fh(a.prefix);
      if (!dh[c] && !gh(c, a.path, a.domain) && b) {
        var d = fh(a.prefix),
          e = Xg();
        if (0 === hh(d, e, a)) {
          var f = ub("google_tag_data", {});
          f._gcl_au ? Bd("GTM", 57) : (f._gcl_au = e);
        }
        gh(c, a.path, a.domain);
      }
    };

  function hh(a, b, c, d) {
    var e = ah(b, "1", c.domain, c.path),
      f = bh(c, d);
    f.Ra = "ad_storage";
    return Tg(a, e, f);
  }

  function gh(a, b, c) {
    var d = $g(a, b, c, ch, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? ((dh[a] = e.slice(0, 2).join(".")),
        (eh[a] = {
          id: e.slice(2, 4).join("."),
          yg: Number(e[4]) || 0,
        }))
      : 3 === e.length
      ? (eh[a] = {
          id: e.slice(0, 2).join("."),
          yg: Number(e[2]) || 0,
        })
      : (dh[a] = d);
    return !0;
  }

  function fh(a) {
    return (a || "_gcl") + "_au";
  }
  var jh = function (a) {
    for (
      var b = [],
        c = C.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ze: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, l) {
      return l.timestamp - g.timestamp;
    });
    return b;
  };

  function kh(a, b) {
    var c = jh(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Ze] || (d[c[e].Ze] = []);
        var g = {
          version: f[0],
          timestamp: 1e3 * Number(f[1]),
          sa: f[2],
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Ze].push(g);
      }
    }
    return d;
  }

  function lh() {
    for (var a = mh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }

  function nh() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var mh, oh;

  function ph(a) {
    mh = mh || nh();
    oh = oh || lh();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        q = ((g & 15) << 2) | (l >> 6),
        r = l & 63;
      e || ((r = 64), d || (q = 64));
      b.push(mh[m], mh[n], mh[q], mh[r]);
    }
    return b.join("");
  }

  function qh(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          q = oh[n];
        if (null != q) return q;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    mh = mh || nh();
    oh = oh || lh();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != l && (c += String.fromCharCode(((g << 6) & 192) | l)));
    }
  }
  var rh,
    sh = function (a) {
      var b;
      if (!(b = rh)) {
        for (var c = Array(256), d = 0; 256 > d; d++) {
          for (var e = d, f = 0; 8 > f; f++)
            e = e & 1 ? (e >>> 1) ^ 3988292384 : e >>> 1;
          c[d] = e;
        }
        b = c;
      }
      rh = b;
      for (var g = 4294967295, l = 0; l < a.length; l++)
        g = (g >>> 8) ^ rh[(g ^ a.charCodeAt(l)) & 255];
      return (g ^ -1) >>> 0;
    };
  var th = {
      Aj: 0,
      Lj: 1,
      Fj: 2,
      Ej: 3,
    },
    xh = function () {
      var a = uh,
        b = vh,
        c = wh(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Gb(C, "mousedown", d);
        Gb(C, "keyup", d);
        Gb(C, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    yh = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      wh().decorators.push(f);
    },
    zh = function (a, b, c) {
      for (var d = wh().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          l;
        if ((l = !c || g.forms))
          a: {
            var m = g.domains,
              n = a,
              q = !!g.sameHost;
            if (m && (q || n !== C.location.hostname))
              for (var r = 0; r < m.length; r++)
                if (m[r] instanceof RegExp) {
                  if (m[r].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[r]) ||
                  (q && 0 <= m[r].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var u = g.placement;
          void 0 == u && (u = g.fragment ? 2 : 1);
          u === b && Ta(e, g.callback());
        }
      }
      return e;
    };

  function wh() {
    var a = ub("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) ||
      ((b = {
        decorators: [],
      }),
      (a.gl = b));
    return b;
  }
  var Ah = /(.*?)\*(.*?)\*(.*)/,
    Bh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Ch = /^(?:www\.|m\.|amp\.)+/,
    Dh = /\*?xp_[0-3]\*?/,
    Eh = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Fh(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Ih = function (a, b) {
    var c = [],
      d;
    for (d in a)
      if (a.hasOwnProperty(d)) {
        var e = a[d];
        void 0 !== e &&
          e === e &&
          null !== e &&
          "[object Object]" !== e.toString() &&
          (c.push(d), c.push(ph(String(e))));
      }
    var f = c.join("*");
    if (void 0 !== b) {
      var g = "xp_" + b,
        l = Gh[b](f);
      f = [f, g, ph(String(l))].join("*");
    }
    return ["1", Hh(f), f].join("*");
  };

  function Hh(a, b) {
    var c = [
      k.navigator.userAgent,
      new Date().getTimezoneOffset(),
      Sb(),
      Math.floor(Pa() / 60 / 1e3) - (void 0 === b ? 0 : b),
      a,
    ].join("*");
    return sh(c).toString(36);
  }
  var Jh = {},
    Gh =
      ((Jh[0] = function () {
        return "BASELINE";
      }),
      (Jh[1] = Kh),
      (Jh[2] = Lh),
      (Jh[3] = Mh),
      Jh);

  function Kh(a, b) {
    var c = [
      new Date().getTimezoneOffset(),
      Sb(),
      Math.floor(Pa() / 60 / 1e3) - (void 0 === b ? 0 : b),
      a,
    ].join("*");
    return sh(c).toString(36);
  }

  function Lh(a, b) {
    if (!qb.userAgentData) return "UA_DATA_NOT_PRESENT";
    var c = [
      new Date().getTimezoneOffset(),
      Sb(),
      Math.floor(Pa() / 60 / 1e3) - (void 0 === b ? 0 : b),
      qb.userAgentData.brands,
      qb.userAgentData.mobile,
      qb.userAgentData.platform,
      a,
    ].join("*");
    return sh(c).toString(36);
  }

  function Mh() {
    return "UACH_ACCESSED_TOO_EARLY";
  }

  function Nh() {
    return function (a) {
      var b = fg(k.location.href),
        c = b.search.replace("?", ""),
        d = ag(c, "_gl", !0) || "";
      a.query = Oh(d) || {};
      var e = dg(b, "fragment").match(Fh("_gl"));
      a.fragment = Oh((e && e[3]) || "") || {};
    };
  }
  var Ph = function (a) {
      var b = Nh(),
        c = wh();
      c.data ||
        ((c.data = {
          query: {},
          fragment: {},
        }),
        b(c.data));
      var d = {},
        e = c.data;
      e && (Ta(d, e.query), a && Ta(d, e.fragment));
      return d;
    },
    Oh = function (a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = Ah.exec(d);
              if (f) {
                c = f;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var g = c;
          if (g && "1" === g[1]) {
            var l = g[2],
              m = g[3],
              n = null !== m.match(Dh),
              q;
            a: {
              for (var r = 0; r < b; ++r)
                if (l === Hh(m, r)) {
                  q = !0;
                  break a;
                }
              q = !1;
            }
            var u = q;
            if (u || n) {
              for (
                var t = {}, p = m ? m.split("*") : [], v = 0;
                v + 1 < p.length;
                v += 2
              ) {
                var w = p[v],
                  A = null !== w.match(Dh);
                if (u || A) {
                  var x = qh(p[v + 1]);
                  t[w] = x;
                }
                if (A) {
                  var z = w.split("_")[1];
                  if (!(Number(z) < Object.keys(th).length)) return;
                  var y = b,
                    B = t[w],
                    F = m.slice(0, m.indexOf("*xp")),
                    D = u;
                  if (0 !== Number(z))
                    a: {
                      var E = B,
                        P = F,
                        K = y;
                      if (
                        "undefined" !== E &&
                        "UA_DATA_NOT_PRESENT" !== E &&
                        "UACH_ACCESSED_TOO_EARLY" !== E
                      )
                        for (var I = 0; I < K; ++I)
                          if (E === Gh[z](P, I)) {
                            D = !0;
                            break a;
                          }
                      D = !1;
                    }
                  t._z =
                    "uaxp." +
                    (u
                      ? D === u
                        ? "" + z + 0
                        : "" + z + 3
                      : D === u
                      ? "" + z + 1
                      : "" + z + 2);
                }
              }
              Bd("TAGGING", 6);
              return t;
            }
            Bd("TAGGING", 7);
          }
        }
      } catch (J) {
        Bd("TAGGING", 8);
      }
    };

  function Qh(a, b, c, d) {
    function e(q) {
      var r = q,
        u = Fh(a).exec(r),
        t = r;
      if (u) {
        var p = u[2],
          v = u[4];
        t = u[1];
        v && (t = t + p + v);
      }
      q = t;
      var w = q.charAt(q.length - 1);
      q && "&" !== w && (q += "&");
      return q + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Eh.exec(c);
    if (!f) return "";
    var g = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? (m = "#" + e(m.substring(1))) : (l = "?" + e(l.substring(1)));
    return "" + g + l + m;
  }

  function Rh(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = zh(b, 1, c),
      e = zh(b, 2, c),
      f = zh(b, 3, c);
    if (Wa(d)) {
      var g = Ih(d, void 0);
      c ? Sh("_gl", g, a) : Th("_gl", g, a, !1);
    }
    if (!c && Wa(e)) {
      var l = Ih(e);
      Th("_gl", l, a, !0);
    }
    for (var m in f)
      if (f.hasOwnProperty(m))
        a: {
          var n = m,
            q = f[m],
            r = a;
          if (r.tagName) {
            if ("a" === r.tagName.toLowerCase()) {
              Th(n, q, r, void 0);
              break a;
            }
            if ("form" === r.tagName.toLowerCase()) {
              Sh(n, q, r);
              break a;
            }
          }
          "string" == typeof r && Qh(n, q, r, void 0);
        }
  }

  function Th(a, b, c, d) {
    if (c.href) {
      var e = Qh(a, b, c.href, void 0 === d ? !1 : d);
      eb.test(e) && (c.href = e);
    }
  }

  function Sh(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var l = e[g];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = C.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Qh(a, b, c.action);
        eb.test(n) && (c.action = n);
      }
    }
  }

  function uh(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Rh(e, e.hostname);
      }
    } catch (g) {}
  }

  function vh(a) {
    try {
      if (a.action) {
        var b = dg(fg(a.action), "host");
        Rh(a, b);
      }
    } catch (c) {}
  }
  var Uh = function (a, b, c, d) {
      xh();
      yh(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Vh = function (a, b) {
      xh();
      yh(a, [cg(k.location, "host", !0)], b, !0, !0);
    },
    Wh = function () {
      var a = C.location.hostname,
        b = Bh.exec(C.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Ch, ""),
        m = e.replace(Ch, ""),
        n;
      if (!(n = l === m)) {
        var q = "." + m;
        n = l.substring(l.length - q.length, l.length) === q;
      }
      return n;
    },
    Xh = function (a, b) {
      return !1 === a ? !1 : a || b || Wh();
    };
  var Yh = {};
  var Zh = /^\w+$/,
    $h = /^[\w-]+$/,
    ai = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb",
    },
    bi = function () {
      if (!we().m() || !He()) return !0;
      var a = Ee("ad_storage");
      return null == a ? !0 : !!a;
    },
    ci = function (a, b) {
      Ge("ad_storage")
        ? bi()
          ? a()
          : Me(a, "ad_storage")
        : b
        ? Bd("TAGGING", 3)
        : Le(
            function () {
              ci(a, !0);
            },
            ["ad_storage"]
          );
    },
    ei = function (a) {
      return di(a).map(function (b) {
        return b.sa;
      });
    },
    di = function (a) {
      var b = [];
      if (!Hg(k) || !C.cookie) return b;
      var c = Kg(a, C.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (
        var d = {}, e = 0;
        e < c.length;
        d = {
          Jc: d.Jc,
        },
          e++
      ) {
        var f = fi(c[e]);
        if (null != f) {
          var g = f,
            l = g.version;
          d.Jc = g.sa;
          var m = g.timestamp,
            n = g.labels,
            q = wa(
              b,
              (function (r) {
                return function (u) {
                  return u.sa === r.Jc;
                };
              })(d)
            );
          q
            ? ((q.timestamp = Math.max(q.timestamp, m)),
              (q.labels = gi(q.labels, n || [])))
            : b.push({
                version: l,
                sa: d.Jc,
                timestamp: m,
                labels: n,
              });
        }
      }
      b.sort(function (r, u) {
        return u.timestamp - r.timestamp;
      });
      return hi(b);
    };

  function gi(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }

  function ii(a) {
    return a && "string" == typeof a && a.match(Zh) ? a : "_gcl";
  }
  var ki = function () {
      var a = fg(k.location.href),
        b = dg(a, "query", !1, void 0, "gclid"),
        c = dg(a, "query", !1, void 0, "gclsrc"),
        d = dg(a, "query", !1, void 0, "wbraid"),
        e = dg(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || ag(f, "gclid", void 0);
        c = c || ag(f, "gclsrc", void 0);
        d = d || ag(f, "wbraid", void 0);
      }
      return ji(b, c, e, d);
    },
    ji = function (a, b, c, d) {
      var e = {},
        f = function (g, l) {
          e[l] || (e[l] = []);
          e[l].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && $h.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match($h))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    mi = function (a) {
      var b = ki();
      ci(function () {
        li(b, !1, a);
      });
    };

  function li(a, b, c, d, e) {
    function f(w, A) {
      var x = ni(w, g);
      x && (Tg(x, A, l), (m = !0));
    }
    c = c || {};
    e = e || [];
    var g = ii(c.prefix);
    d = d || Pa();
    var l = bh(c, d, !0);
    l.Ra = "ad_storage";
    var m = !1,
      n = Math.round(d / 1e3),
      q = function (w) {
        var A = ["GCL", n, w];
        0 < e.length && A.push(e.join("."));
        return A.join(".");
      };
    a.aw && f("aw", q(a.aw[0]));
    a.dc && f("dc", q(a.dc[0]));
    a.gf && f("gf", q(a.gf[0]));
    a.ha && f("ha", q(a.ha[0]));
    a.gp && f("gp", q(a.gp[0]));
    if (
      (void 0 == Yh.enable_gbraid_cookie_write
        ? 0
        : Yh.enable_gbraid_cookie_write) &&
      !m &&
      a.gb
    ) {
      var r = a.gb[0],
        u = ni("gb", g),
        t = !1;
      if (!b)
        for (var p = di(u), v = 0; v < p.length; v++)
          p[v].sa === r && p[v].labels && 0 < p[v].labels.length && (t = !0);
      t || f("gb", q(r));
    }
  }
  var pi = function (a, b) {
      var c = Ph(!0);
      ci(function () {
        for (var d = ii(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== ai[f]) {
            var g = ni(f, d),
              l = c[g];
            if (l) {
              var m = Math.min(oi(l), Pa()),
                n;
              b: {
                var q = m;
                if (Hg(k))
                  for (
                    var r = Kg(g, C.cookie, void 0, "ad_storage"), u = 0;
                    u < r.length;
                    ++u
                  )
                    if (oi(r[u]) > q) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var t = bh(b, m, !0);
                t.Ra = "ad_storage";
                Tg(g, l, t);
              }
            }
          }
        }
        li(ji(c.gclid, c.gclsrc), !1, b);
      });
    },
    ni = function (a, b) {
      var c = ai[a];
      if (void 0 !== c) return b + c;
    },
    oi = function (a) {
      return 0 !== qi(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };

  function fi(a) {
    var b = qi(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          sa: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }

  function qi(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !$h.test(a[2])
      ? []
      : a;
  }
  var ri = function (a, b, c, d, e) {
      if (va(b) && Hg(k)) {
        var f = ii(e),
          g = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = ni(a[m], f);
              if (n) {
                var q = Kg(n, C.cookie, void 0, "ad_storage");
                q.length && (l[n] = q.sort()[q.length - 1]);
              }
            }
            return l;
          };
        ci(function () {
          Uh(g, b, c, d);
        });
      }
    },
    hi = function (a) {
      return a.filter(function (b) {
        return $h.test(b.sa);
      });
    },
    si = function (a, b) {
      if (Hg(k)) {
        for (var c = ii(b.prefix), d = {}, e = 0; e < a.length; e++)
          ai[a[e]] && (d[a[e]] = ai[a[e]]);
        ci(function () {
          Ca(d, function (f, g) {
            var l = Kg(c + g, C.cookie, void 0, "ad_storage");
            l.sort(function (t, p) {
              return oi(p) - oi(t);
            });
            if (l.length) {
              var m = l[0],
                n = oi(m),
                q = 0 !== qi(m.split(".")).length ? m.split(".").slice(3) : [],
                r = {},
                u;
              u = 0 !== qi(m.split(".")).length ? m.split(".")[2] : void 0;
              r[f] = [u];
              li(r, !0, b, n, q);
            }
          });
        });
      }
    };

  function ti(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var ui = function (a) {
    function b(e, f, g) {
      g && (e[f] = g);
    }
    if (He()) {
      var c = ki();
      if (ti(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Vh(function () {
          return d;
        }, 3);
        Vh(function () {
          var e = {};
          return (e._up = "1"), e;
        }, 1);
      }
    }
  };

  function vi(a, b) {
    var c = ii(b),
      d = ni(a, c);
    if (!d) return 0;
    for (var e = di(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }

  function wi(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Si = !1,
    Ti = 0,
    Ui = [];

  function Vi(a) {
    if (!Si) {
      var b = C.createEventObject,
        c = "complete" == C.readyState,
        d = "interactive" == C.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        Si = !0;
        for (var e = 0; e < Ui.length; e++) G(Ui[e]);
      }
      Ui.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }

  function Wi() {
    if (!Si && 140 > Ti) {
      Ti++;
      try {
        C.documentElement.doScroll("left"), Vi();
      } catch (a) {
        k.setTimeout(Wi, 50);
      }
    }
  }
  var Xi = function (a) {
    Si ? a() : Ui.push(a);
  };
  var Zi = function (a, b) {
      this.m = !1;
      this.D = [];
      this.K = {
        tags: [],
      };
      this.Z = !1;
      this.o = this.s = 0;
      Yi(this, a, b);
    },
    $i = function (a, b, c, d) {
      if (Gd.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Wb(d) && (e = H(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    aj = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    bj = function (a) {
      if (!a.m) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.m = !0;
        a.D.length = 0;
      }
    },
    Yi = function (a, b, c) {
      qa(b) && cj(a, b);
      c &&
        k.setTimeout(function () {
          return bj(a);
        }, Number(c));
    },
    cj = function (a, b) {
      var c = Sa(function () {
        return G(function () {
          b(O.I, a.K);
        });
      });
      a.m ? c() : a.D.push(c);
    },
    dj = function (a) {
      a.s++;
      return Sa(function () {
        a.o++;
        a.Z && a.o >= a.s && bj(a);
      });
    };
  var ej = function () {
      function a(d) {
        return !ua(d) || 0 > d ? 0 : d;
      }
      if (!Q._li && k.performance && k.performance.timing) {
        var b = k.performance.timing.navigationStart,
          c = ua(de.get("gtm.start")) ? de.get("gtm.start") : 0;
        Q._li = {
          cst: a(c - b),
          cbt: a(Md - b),
        };
      }
    },
    fj = function (a) {
      k.performance && k.performance.mark(O.I + "_" + a + "_start");
    },
    gj = function (a) {
      if (k.performance) {
        var b = O.I + "_" + a + "_start",
          c = O.I + "_" + a + "_duration";
        k.performance.measure(c, b);
        var d = k.performance.getEntriesByName(c)[0];
        k.performance.clearMarks(b);
        k.performance.clearMeasures(c);
        var e = Q._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (Q._p = e));
        return d.duration;
      }
    },
    hj = function () {
      if (k.performance && k.performance.now) {
        var a = Q._p || {};
        a.PAGEVIEW = k.performance.now();
        Q._p = a;
      }
    };
  var ij = {},
    jj = function () {
      return k.GoogleAnalyticsObject && k[k.GoogleAnalyticsObject];
    },
    kj = !1;
  var lj = function (a) {
      k.GoogleAnalyticsObject || (k.GoogleAnalyticsObject = a || "ga");
      var b = k.GoogleAnalyticsObject;
      if (k[b]) k.hasOwnProperty(b) || Dd(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Oa());
        k[b] = c;
      }
      ej();
      return k[b];
    },
    mj = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, "").split(",");
      var e = jj();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    },
    nj = function (a) {
      if (!He()) return;
      var b = jj();
      b(a + "require", "linker");
      b(a + "linker:passthrough", !0);
    };

  function oj() {
    return k.GoogleAnalyticsObject || "ga";
  }
  var rj = function (a) {},
    sj = function (a, b) {
      return function () {
        var c = jj(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var zj = function (a) {},
    Dj = function (a) {},
    Ej = function () {
      return (
        "&tc=" +
        Dc.filter(function (a) {
          return a;
        }).length
      );
    },
    Hj = function () {
      2022 <= Fj().length && Gj();
    },
    Ij = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
    },
    Kj = function () {
      Jj || (Jj = k.setTimeout(Gj, 500));
    },
    Gj = function () {
      Jj && (k.clearTimeout(Jj), (Jj = void 0));
      void 0 === Lj ||
        (Mj[Lj] && !Nj && !Oj) ||
        (Pj[Lj] || Qj.Ni() || 0 >= Rj--
          ? (Dd(1), (Pj[Lj] = !0))
          : (Qj.ij(),
            Fb(Fj(!0)),
            (Mj[Lj] = !0),
            (Sj = Tj = Uj = Oj = Nj = "")));
    },
    Fj = function (a) {
      var b = Lj;
      if (void 0 === b) return "";
      var c = Cd("GTM"),
        d = Cd("TAGGING");
      return [
        Vj,
        Mj[b] ? "" : "&es=1",
        Wj[b],
        zj(b),
        c ? "&u=" + c : "",
        d ? "&ut=" + d : "",
        Ej(),
        Nj,
        Oj,
        Uj,
        Tj,
        Dj(a),
        Sj,
        "&z=0",
      ].join("");
    },
    Yj = function () {
      Vj = Xj();
    },
    Xj = function () {
      return [Nd, "&v=3&t=t", "&pid=" + xa(), "&rv=" + O.fd].join("");
    },
    Cj = ["L", "S", "Y"],
    yj = ["S", "E"],
    Zj = {
      sampleRate: "0.005000",
      $g: "",
      Zg: Number("5"),
    },
    ak =
      0 <= C.location.search.indexOf("?gtm_latency=") ||
      0 <= C.location.search.indexOf("&gtm_latency="),
    bk;
  if (!(bk = ak)) {
    var ck = Math.random(),
      dk = Zj.sampleRate;
    bk = ck < dk;
  }
  var ek = bk,
    fk = {
      label: O.I + " Container",
      children: [
        {
          label: "Initialization",
          children: [],
        },
      ],
    },
    Vj = Xj(),
    Mj = {},
    Nj = "",
    Oj = "",
    Sj = "",
    Tj = "",
    Bj = {},
    Aj = !1,
    xj = {},
    gk = {},
    Uj = "",
    Lj = void 0,
    Wj = {},
    Pj = {},
    Jj = void 0,
    hk = 5;
  0 < Zj.Zg && (hk = Zj.Zg);
  var Qj = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        Ni: function () {
          return c < a ? !1 : Pa() - d[c % a] < b;
        },
        ij: function () {
          var f = c++ % a;
          d[f] = Pa();
        },
      };
    })(hk, 1e3),
    Rj = 1e3,
    jk = function (a, b) {
      if (ek && !Pj[a] && Lj !== a) {
        Gj();
        Lj = a;
        Sj = Nj = "";
        Wj[a] = "&e=" + Ij(b) + "&eid=" + a;
        Kj();
      }
    },
    kk = function (a, b, c, d) {
      if (ek && b) {
        var e,
          f = String(b[Yb.pb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Pj[a]) {
          a !== Lj && (Gj(), (Lj = a));
          Nj = Nj ? Nj + "." + g : "&tr=" + g;
          var l = b["function"];
          if (!l)
            throw Error("Error: No function name given for function call.");
          var m = (Fc[l] ? "1" : "2") + e;
          Sj = Sj ? Sj + "." + m : "&ti=" + m;
          Kj();
          Hj();
        }
      }
    };
  var rk = function (a, b, c) {
      if (ek && !Pj[a]) {
        a !== Lj && (Gj(), (Lj = a));
        var d = c + b;
        Oj = Oj ? Oj + "." + d : "&epr=" + d;
        Kj();
        Hj();
      }
    },
    sk = function (a, b, c) {};

  function tk(a, b, c, d) {
    var e = Dc[a],
      f = uk(a, b, c, d);
    if (!f) return null;
    var g = Kc(e[Yb.Vf], c, []);
    if (g && g.length) {
      var l = g[0];
      f = tk(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.ng ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }

  function uk(a, b, c, d) {
    function e() {
      if (f[Yb.Sh]) l();
      else {
        var w = Lc(f, c, []);
        var A = w[Yb.eh];
        if (null != A)
          for (var x = 0; x < A.length; x++)
            if (!Xe(A[x])) {
              l();
              return;
            }
        var z = $i(c.qb, String(f[Yb.pb]), Number(f[Yb.Xf]), w[Yb.Th]),
          y = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!y) {
            y = !0;
            var D = Pa() - F;
            kk(c.id, Dc[a], "5", D);
            aj(c.qb, z, "success", D);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!y) {
            y = !0;
            var D = Pa() - F;
            kk(c.id, Dc[a], "6", D);
            aj(c.qb, z, "failure", D);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        kk(c.id, f, "1");
        var B = function () {
          var D = Pa() - F;
          kk(c.id, f, "7", D);
          aj(c.qb, z, "exception", D);
          y || ((y = !0), l());
        };
        var F = Pa();
        try {
          Jc(w, {
            event: c,
            index: a,
            type: 1,
          });
        } catch (D) {
          B(D);
        }
      }
    }
    var f = Dc[a],
      g = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.Le(f)) return null;
    var n = Kc(f[Yb.Yf], c, []);
    if (n && n.length) {
      var q = n[0],
        r = tk(
          q.index,
          {
            onSuccess: g,
            onFailure: l,
            terminate: m,
          },
          c,
          d
        );
      if (!r) return null;
      g = r;
      l = 2 === q.ng ? m : r;
    }
    if (f[Yb.Qf] || f[Yb.Xh]) {
      var u = f[Yb.Qf] ? Ec : c.uj,
        t = g,
        p = l;
      if (!u[a]) {
        e = Sa(e);
        var v = vk(a, u, e);
        g = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        u[a](t, p);
      };
    }
    return e;
  }

  function vk(a, b, c) {
    var d = [],
      e = [];
    b[a] = wk(d, e, c);
    return {
      onSuccess: function () {
        b[a] = xk;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = yk;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }

  function wk(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }

  function xk(a) {
    a();
  }

  function yk(a, b) {
    b();
  }
  var Bk = function (a, b) {
    for (var c = [], d = 0; d < Dc.length; d++)
      if (a[d]) {
        var e = Dc[d];
        var f = dj(b.qb);
        try {
          var g = tk(
            d,
            {
              onSuccess: f,
              onFailure: f,
              terminate: f,
            },
            b,
            d
          );
          if (g) {
            var l = c,
              m = l.push,
              n = d,
              q = e["function"];
            if (!q) throw "Error: No function name given for function call.";
            var r = Fc[q];
            m.call(l, {
              Sg: n,
              Ig: r ? r.priorityOverride || 0 : 0,
              execute: g,
            });
          } else zk(d, b), f();
        } catch (p) {
          f();
        }
      }
    var u = b.qb;
    u.Z = !0;
    u.o >= u.s && bj(u);
    c.sort(Ak);
    for (var t = 0; t < c.length; t++) c[t].execute();
    return 0 < c.length;
  };

  function Ak(a, b) {
    var c,
      d = b.Ig,
      e = a.Ig;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.Sg,
        l = b.Sg;
      f = g > l ? 1 : g < l ? -1 : 0;
    }
    return f;
  }

  function zk(a, b) {
    if (!ek) return;
    var c = function (d) {
      var e = b.Le(Dc[d]) ? "3" : "4",
        f = Kc(Dc[d][Yb.Vf], b, []);
      f && f.length && c(f[0].index);
      kk(b.id, Dc[d], e);
      var g = Kc(Dc[d][Yb.Yf], b, []);
      g && g.length && c(g[0].index);
    };
    c(a);
  }
  var Ck = !1;
  var Ik = function (a) {
    var b = Pa(),
      c = a["gtm.uniqueEventId"],
      d = a.event;
    if ("gtm.js" === d) {
      if (Ck) return !1;
      Ck = !0;
    }
    var g = se(c),
      l = !1;
    if (!g.active) {
      if ("gtm.js" !== d) return !1;
      l = !0;
      g = se(Number.MAX_SAFE_INTEGER);
    }
    jk(c, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      q = m;
    var r = {
      id: c,
      name: d,
      Le: qe(g.isAllowed),
      uj: [],
      Bg: function () {
        Dd(6);
      },
      ig: Dk(c),
      qb: new Zi(q, n),
    };
    r.hg = Ek();
    Fk(c, r.qb);
    var u = Pc(r);
    l && (u = Gk(u));
    var t = Bk(u, r);
    ("gtm.js" !== d && "gtm.sync" !== d) || rj(O.I);
    return Hk(u, t);
  };

  function Dk(a) {
    return function (b) {
      ek && (Xb(b) || sk(a, "input", b));
    };
  }

  function Fk(a, b) {
    he(a, "event", 1);
    he(a, "ecommerce", 1);
    he(a, "gtm");
    he(a, "eventModel");
  }

  function Ek() {
    var a = {};
    a.event = ge("event", 1);
    a.ecommerce = ge("ecommerce", 1);
    a.gtm = ge("gtm");
    a.eventModel = ge("eventModel");
    return a;
  }

  function Gk(a) {
    for (var b = [], c = 0; c < a.length; c++)
      a[c] && Fd[String(Dc[c][Yb.pb])] && (b[c] = !0);
    return b;
  }

  function Hk(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Dc[c] && !Gd[String(Dc[c][Yb.pb])]) return !0;
    return !1;
  }

  function Jk(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return fg("" + c + b).href;
    }
  }

  function Kk(a, b) {
    return Lk() ? Jk(a, b) : void 0;
  }

  function Lk() {
    var a = !1;
    return a;
  }

  function Mk() {
    return !!O.gd && "SGTM_TOKEN" !== O.gd.replaceAll("@@", "");
  }
  var Nk = function () {
    var a = !1;
    return a;
  };
  var Ok;
  if (3 === O.fd.length) Ok = "g";
  else {
    var Pk = "G";
    Ok = Pk;
  }
  var Qk = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: Ok,
      OPT: "o",
    },
    Rk = function (a) {
      var b = O.I.split("-"),
        c = b[0].toUpperCase(),
        d = Qk[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        f;
      if (3 === O.fd.length) {
        var g = "w";
        f = "2" + g;
      } else f = "";
      return f + d + O.fd + e;
    };

  function Sk(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Tk = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1);
  };

  function Uk() {
    return gb("iPhone") && !gb("iPod") && !gb("iPad");
  }
  gb("Opera");
  gb("Trident") || gb("MSIE");
  gb("Edge");
  !gb("Gecko") ||
    (-1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge")) ||
    gb("Trident") ||
    gb("MSIE") ||
    gb("Edge");
  -1 != fb().toLowerCase().indexOf("webkit") && !gb("Edge") && gb("Mobile");
  gb("Macintosh");
  gb("Windows");
  gb("Linux") || gb("CrOS");
  var Vk = la.navigator || null;
  Vk && (Vk.appVersion || "").indexOf("X11");
  gb("Android");
  Uk();
  gb("iPad");
  gb("iPod");
  Uk() || gb("iPad") || gb("iPod");
  fb().toLowerCase().indexOf("kaios");
  var Wk = function (a) {
    if (!a || !C.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    C.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  };
  var Xk = function () {};
  var Yk = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Zk = function (a, b) {
      this.o = a;
      this.m = null;
      this.D = {};
      this.Z = 0;
      this.K = void 0 === b ? 500 : b;
      this.s = null;
    };
  ka(Zk, Xk);
  Zk.prototype.addEventListener = function (a) {
    var b = {},
      c = ob(function () {
        return a(b);
      }),
      d = 0;
    -1 !== this.K &&
      (d = setTimeout(function () {
        b.tcString = "tcunavailable";
        b.internalErrorState = 1;
        c();
      }, this.K));
    var e = function (f, g) {
      clearTimeout(d);
      f
        ? ((b = f),
          (b.internalErrorState = Yk(b)),
          (g && 0 === b.internalErrorState) ||
            ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
        : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
      a(b);
    };
    try {
      $k(this, "addEventListener", e);
    } catch (f) {
      (b.tcString = "tcunavailable"),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c();
    }
  };
  Zk.prototype.removeEventListener = function (a) {
    a && a.listenerId && $k(this, "removeEventListener", null, a.listenerId);
  };
  var bl = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === g && (l = 1))
        : 3 === c && ((l = 1), 1 === g && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = al(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && al(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? al(a.purpose.legitimateInterests, b) &&
                al(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    al = function (a, b) {
      return !(!a || !a[b]);
    },
    $k = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.o.__tcfapi) {
        var e = a.o.__tcfapi;
        e(b, 2, c, d);
      } else if (cl(a)) {
        dl(a);
        var f = ++a.Z;
        a.D[f] = c;
        if (a.m) {
          var g = {};
          a.m.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    cl = function (a) {
      if (a.m) return a.m;
      var b;
      a: {
        for (var c = a.o, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.m = b;
      return a.m;
    },
    dl = function (a) {
      a.s ||
        ((a.s = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.D[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Tk(a.o, a.s));
    };
  var el = !0;
  el = !1;
  var fl = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3,
    },
    gl = Sk("", 550),
    hl = Sk("", 500);

  function il() {
    var a = Q.tcf || {};
    return (Q.tcf = a);
  }
  var nl = function () {
    var a = il(),
      b = new Zk(k, el ? 3e3 : -1);
    if (
      !0 === k.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof k.__tcfapi ||
        "function" === typeof b.o.__tcfapi ||
        null != cl(b))
    ) {
      a.active = !0;
      a.Ec = {};
      jl();
      var c = null;
      el
        ? (c = k.setTimeout(function () {
            kl(a);
            ll(a);
            c = null;
          }, hl))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) kl(a), ll(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = ml()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in fl)
                if (fl.hasOwnProperty(g))
                  if ("1" === g) {
                    var l = d,
                      m = !0;
                    m = void 0 === m ? !1 : m;
                    var n;
                    var q = l;
                    !1 === q.gdprApplies
                      ? (n = !0)
                      : (void 0 === q.internalErrorState &&
                          (q.internalErrorState = Yk(q)),
                        (n =
                          "error" === q.cmpStatus ||
                          0 !== q.internalErrorState ||
                          ("loaded" === q.cmpStatus &&
                            ("tcloaded" === q.eventStatus ||
                              "useractioncomplete" === q.eventStatus))
                            ? !0
                            : !1));
                    f["1"] = n
                      ? !1 === l.gdprApplies ||
                        "tcunavailable" === l.tcString ||
                        (void 0 === l.gdprApplies && !m) ||
                        "string" !== typeof l.tcString ||
                        !l.tcString.length
                        ? !0
                        : bl(l, "1", 0)
                      : !1;
                  } else f[g] = bl(d, g, fl[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Ec = e), ll(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), kl(a), ll(a);
      }
    }
  };

  function kl(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    el && (a.Ec = ml());
  }

  function jl() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = gl), a);
    Re(b);
  }

  function ml() {
    var a = {},
      b;
    for (b in fl) fl.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }

  function ll(a) {
    var b = {},
      c = ((b.ad_storage = a.Ec["1"] ? "granted" : "denied"), b);
    Te(c, 0, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: ol(),
    });
  }
  var ol = function () {
      var a = il();
      return a.active ? a.tcString || "" : "";
    },
    pl = function () {
      var a = il();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    ql = function (a) {
      if (!fl.hasOwnProperty(String(a))) return !0;
      var b = il();
      return b.active && b.Ec ? !!b.Ec[String(a)] : !0;
    };
  var xl = !1;
  var yl = function () {
      this.m = {};
    },
    zl = function (a, b, c) {
      null != c && (a.m[b] = c);
    },
    Al = function (a) {
      return Object.keys(a.m)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]);
        })
        .join("&");
    },
    Cl = function (a, b, c, d, e) {};
  var El = /[A-Z]+/,
    Fl = /\s/,
    Gl = function (a) {
      if (ta(a)) {
        a = Ka(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (El.test(c)) {
            var d = !1;
            d = !0;
            for (
              var e = a.substring(b + 1).split("/"), f = 0;
              f < e.length;
              f++
            )
              if (!e[f] || (Fl.test(e[f]) && ("AW" !== c || 1 !== f || !d)))
                return;
            return {
              id: a,
              prefix: c,
              containerId: c + "-" + e[0],
              M: e,
            };
          }
        }
      }
    },
    Il = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Gl(a[c]);
        d && (b[d.id] = d);
      }
      Hl(b);
      var e = [];
      Ca(b, function (f, g) {
        e.push(g);
      });
      return e;
    };

  function Hl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.M[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Kl = function (a, b, c, d) {
      return (2 === Jl() || d || "http:" != k.location.protocol ? a : b) + c;
    },
    Jl = function () {
      var a = Ab(),
        b;
      if (1 === a)
        a: {
          var c = Id;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = C.getElementsByTagName("script"),
              l = 0;
            l < g.length && 100 > l;
            l++
          ) {
            var m = g[l].src;
            if (m) {
              m = m.toLowerCase();
              if (0 === m.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === m.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var Ml = function (a, b, c) {
      if (k[a.functionName]) return b.Re && G(b.Re), k[a.functionName];
      var d = Ll();
      k[a.functionName] = d;
      if (a.ld)
        for (var e = 0; e < a.ld.length; e++) k[a.ld[e]] = k[a.ld[e]] || Ll();
      a.wd && void 0 === k[a.wd] && (k[a.wd] = c);
      zb(Kl("https://", "http://", a.Xe), b.Re, b.Yi);
      return d;
    },
    Ll = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Nl = {
      functionName: "_googWcmImpl",
      wd: "_googWcmAk",
      Xe: "www.gstatic.com/wcm/loader.js",
    },
    Ol = {
      functionName: "_gaPhoneImpl",
      wd: "ga_wpid",
      Xe: "www.gstatic.com/gaphone/loader.js",
    },
    Pl = {
      dh: "",
      Yh: "5",
    },
    Ql = {
      functionName: "_googCallTrackingImpl",
      ld: [Ol.functionName, Nl.functionName],
      Xe:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Pl.dh || Pl.Yh) +
        ".js",
    },
    Rl = {},
    Sl = function (a, b, c, d) {
      Dd(22);
      if (c) {
        d = d || {};
        var e = Ml(Nl, d, a),
          f = {
            ak: a,
            cl: b,
          };
        void 0 === d.Qa && (f.autoreplace = c);
        e(2, d.Qa, f, c, 0, Oa(), d.options);
      }
    },
    Tl = function (a, b, c, d) {
      Dd(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Oa(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          Rl[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length
              ? ((e.adData = {
                  ak: g.M[0],
                  cl: g.M[1],
                }),
                (Rl[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = {
                  gaWpid: g.containerId,
                }),
                (Rl[g.id] = !0)));
        }
        (e.gaData || e.adData) && Ml(Ql, d)(d.Qa, e, d.options);
      }
    },
    Ul = function () {
      var a = !1;
      return a;
    },
    Vl = function (a, b) {
      if (a)
        if (Nk()) {
        } else {
          if (ta(a)) {
            var c = Gl(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(L.Gh);
          if (f && va(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var l = Gl(f[g]);
              l &&
                (d.push(l),
                (a.id === l.id ||
                  (a.id === a.containerId &&
                    a.containerId === l.containerId)) &&
                  (e = !0));
            }
          }
          if (!d || e) {
            var m = b.getWithConfig(L.Hf),
              n;
            if (m) {
              va(m) ? (n = m) : (n = [m]);
              var q = b.getWithConfig(L.Ff),
                r = b.getWithConfig(L.Gf),
                u = b.getWithConfig(L.If),
                t = b.getWithConfig(L.Fh),
                p = q || r,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d)
                    Tl(d, n[w], t, {
                      Qa: p,
                      options: u,
                    });
                  else if ("AW" === a.prefix && a.M[1])
                    Ul()
                      ? Tl([a], n[w], t || "US", {
                          Qa: p,
                          options: u,
                        })
                      : Sl(a.M[0], a.M[1], n[w], {
                          Qa: p,
                          options: u,
                        });
                  else if ("UA" === a.prefix)
                    if (Ul())
                      Tl([a], n[w], t || "US", {
                        Qa: p,
                      });
                    else {
                      var A = a.containerId,
                        x = n[w],
                        z = {
                          Qa: p,
                        };
                      Dd(23);
                      if (x) {
                        z = z || {};
                        var y = Ml(Ol, z, A),
                          B = {};
                        void 0 !== z.Qa ? (B.receiver = z.Qa) : (B.replace = x);
                        B.ga_wpid = A;
                        B.destination = x;
                        y(2, Oa(), B);
                      }
                    }
            }
          }
        }
    };
  var cm = !1;

  function dm() {
    if (qa(qb.joinAdInterestGroup)) return !0;
    cm || (Wk(""), (cm = !0));
    return qa(qb.joinAdInterestGroup);
  }

  function em(a, b) {
    var c = void 0;
    try {
      c = C.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Pa() - d) return;
    } else
      try {
        if (
          50 <=
          C.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        )
          return;
      } catch (e) {}
    Eb(
      a,
      void 0,
      {
        allow: "join-ad-interest-group",
      },
      {
        taggingId: b,
        loadTime: Pa(),
      },
      c
    );
  }
  var bn = function () {
      var a = !0;
      (ql(7) && ql(9) && ql(10)) || (a = !1);
      var b = !0;
      b = !1;
      b && !an() && (a = !1);
      return a;
    },
    an = function () {
      var a = !0;
      (ql(3) && ql(4)) || (a = !1);
      return a;
    };
  var fn = function (a, b) {},
    gn = function (a, b) {
      var c = a[L.fc];
      mj(
        b + ".",
        a[L.N] || "",
        void 0 === c ? !!a.use_anchor : "fragment" === c,
        !!a[L.Lb]
      );
    },
    ln = function (a, b, c) {
      if (He() && (!c.isGtmEvent || !hn[a])) {
        var d = !Xe(L.H),
          e = function (f) {
            var g,
              l,
              m = jj(),
              n = jn(b, "", c),
              q,
              r = n.createOnlyFields._useUp;
            if (c.isGtmEvent || kn(b, n.createOnlyFields)) {
              var u = !0;
              if (c.isGtmEvent) {
                g = "gtm" + Qd();
                l = n.createOnlyFields;
                n.gtmTrackerName && (l.name = g);
                u = !1;
                u = !0;
              }
              u &&
                m(function () {
                  var p = m.getByName(b);
                  p && (q = p.get("clientId"));
                  c.isGtmEvent || m.remove(b);
                });
              m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
              d &&
                Xe(L.H) &&
                ((d = !1),
                m(function () {
                  var p = jj().getByName(c.isGtmEvent ? g : b);
                  !p ||
                    (p.get("clientId") == q && r) ||
                    (c.isGtmEvent
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = L.Fd[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = L.Fd[f])),
                    p.set(n.fieldsToSet),
                    c.isGtmEvent
                      ? p.send("pageview")
                      : p.send("pageview", n.fieldsToSend));
                }));
              c.isGtmEvent &&
                m(function () {
                  m.remove(g);
                });
            }
          };
        $e(function () {
          return e(L.H);
        }, L.H);
        $e(function () {
          return e(L.C);
        }, L.C);
        c.isGtmEvent && (hn[a] = !0);
      }
    },
    mn = function (a, b) {
      Mk() && b && (a[L.kb] = b);
    },
    vn = function (a, b, c) {
      function d() {
        var K = c.getWithConfig(L.bc);
        l(function () {
          if (!c.isGtmEvent && Wb(K)) {
            var I = p.fieldsToSend,
              J = m().getByName(n),
              N;
            for (N in K)
              if (
                K.hasOwnProperty(N) &&
                /^(dimension|metric)\d+$/.test(N) &&
                void 0 != K[N]
              ) {
                var M = J.get(en(K[N]));
                nn(I, N, M);
              }
          }
        });
      }

      function e() {
        if (p.displayfeatures) {
          var K = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          q("require", "displayfeatures", void 0, {
            cookieName: K,
          });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        l = c.isGtmEvent ? lj(c.getWithConfig("gaFunctionName")) : lj();
      if (qa(l)) {
        var m = jj,
          n;
        c.isGtmEvent
          ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var q = function (K) {
            var I = [].slice.call(arguments, 0);
            I[0] = n ? n + "." + I[0] : "" + I[0];
            l.apply(window, I);
          },
          r = function (K) {
            var I = function (T, ra) {
                for (var sa = 0; ra && sa < ra.length; sa++) q(T, ra[sa]);
              },
              J = c.isGtmEvent,
              N = J ? on(p) : pn(b, c);
            if (N) {
              var M = {};
              mn(M, K);
              q("require", "ec", "ec.js", M);
              J && N.Ae && q("set", "&cu", N.Ae);
              var S = N.action;
              if (J || "impressions" === S)
                if ((I("ec:addImpression", N.xg), !J)) return;
              if ("promo_click" === S || "promo_view" === S || (J && N.Dc)) {
                var V = N.Dc;
                I("ec:addPromo", V);
                if (V && 0 < V.length && "promo_click" === S) {
                  J ? q("ec:setAction", S, N.cb) : q("ec:setAction", S);
                  return;
                }
                if (!J) return;
              }
              "promo_view" !== S &&
                "impressions" !== S &&
                (I("ec:addProduct", N.wb), q("ec:setAction", S, N.cb));
            }
          },
          u = function (K) {
            if (K) {
              var I = {};
              if (Wb(K))
                for (var J in qn) qn.hasOwnProperty(J) && rn(qn[J], J, K[J], I);
              mn(I, A);
              q("require", "linkid", I);
            }
          },
          t = function () {
            if (Nk()) {
            } else {
              var K = c.getWithConfig(L.Eh);
              K &&
                (q("require", K, {
                  dataLayer: O.V,
                }),
                q("require", "render"));
            }
          },
          p = jn(n, b, c),
          v = function (K, I, J) {
            J && (I = "" + I);
            p.fieldsToSend[K] = I;
          };
        !c.isGtmEvent &&
          kn(n, p.createOnlyFields) &&
          (l(function () {
            m() && m().remove(n);
          }),
          (sn[n] = !1));
        l("create", f, p.createOnlyFields);
        if (p.createOnlyFields[L.kb] && !c.isGtmEvent) {
          var w = Kk(p.createOnlyFields[L.kb], "/analytics.js");
          w && (g = w);
        }
        var A = c.isGtmEvent ? p.fieldsToSet[L.kb] : p.createOnlyFields[L.kb];
        if (A) {
          var x = c.isGtmEvent ? p.fieldsToSet[L.Sc] : p.createOnlyFields[L.Sc];
          x && !sn[n] && ((sn[n] = !0), l(sj(n, x)));
        }
        c.isGtmEvent
          ? p.enableRecaptcha && q("require", "recaptcha", "recaptcha.js")
          : (d(), u(p.linkAttribution));
        var z = p[L.ka];
        z && z[L.N] && gn(z, n);
        q("set", p.fieldsToSet);
        if (c.isGtmEvent) {
          if (p.enableLinkId) {
            var y = {};
            mn(y, A);
            q("require", "linkid", "linkid.js", y);
          }
          He() && ln(f, n, c);
        }
        if (b === L.Zb)
          if (c.isGtmEvent) {
            e();
            if (p.remarketingLists) {
              var B = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              q("require", "adfeatures", {
                cookieName: B,
              });
            }
            r(A);
            q("send", "pageview");
            p.createOnlyFields._useUp && nj(n + ".");
          } else t(), q("send", "pageview", p.fieldsToSend);
        else
          b === L.ya
            ? (t(),
              Vl(f, c),
              c.getWithConfig(L.$a) && (ui(["aw", "dc"]), nj(n + ".")),
              0 != p.sendPageView && q("send", "pageview", p.fieldsToSend),
              ln(f, n, c),
              !c.isGtmEvent &&
                0 < Nf(c).length &&
                (Dd(68), 1 < Q.configCount && Dd(69)))
            : b === L.Ka
            ? fn(n, c)
            : "screen_view" === b
            ? q("send", "screenview", p.fieldsToSend)
            : "timing_complete" === b
            ? ((p.fieldsToSend.hitType = "timing"),
              v("timingCategory", p.eventCategory, !0),
              c.isGtmEvent
                ? v("timingVar", p.timingVar, !0)
                : v("timingVar", p.name, !0),
              v("timingValue", Ea(p.value)),
              void 0 !== p.eventLabel && v("timingLabel", p.eventLabel, !0),
              q("send", p.fieldsToSend))
            : "exception" === b
            ? q("send", "exception", p.fieldsToSend)
            : ("" === b && c.isGtmEvent) ||
              ("track_social" === b && c.isGtmEvent
                ? ((p.fieldsToSend.hitType = "social"),
                  v("socialNetwork", p.socialNetwork, !0),
                  v("socialAction", p.socialAction, !0),
                  v("socialTarget", p.socialTarget, !0))
                : ((c.isGtmEvent || tn[b]) && r(A),
                  c.isGtmEvent && e(),
                  (p.fieldsToSend.hitType = "event"),
                  v("eventCategory", p.eventCategory, !0),
                  v("eventAction", p.eventAction || b, !0),
                  void 0 !== p.eventLabel && v("eventLabel", p.eventLabel, !0),
                  void 0 !== p.value && v("eventValue", Ea(p.value))),
              q("send", p.fieldsToSend));
        var F = !1;
        var D = un;
        F && (D = c.getContainerTypeLoaded("UA"));
        if (!D && !c.isGtmEvent) {
          un = !0;
          F && c.setContainerTypeLoaded("UA", !0);
          ej();
          var E = function () {
              F && c.setContainerTypeLoaded("UA", !1);
              c.onFailure();
            },
            P = function () {
              m().loaded || E();
            };
          Nk() ? G(P) : zb(g, P, E);
        }
      } else G(c.onFailure);
    },
    wn = function (a, b, c, d) {
      af(
        function () {
          vn(a, b, d);
        },
        [L.H, L.C]
      );
    },
    yn = function (a, b) {
      function c(f) {
        function g(q, r) {
          for (var u = 0; u < r.length; u++) {
            var t = r[u];
            if (f[t]) {
              m[q] = f[t];
              break;
            }
          }
        }

        function l() {
          if (f.category) m.category = f.category;
          else {
            for (var q = "", r = 0; r < xn.length; r++)
              void 0 !== f[xn[r]] && (q && (q += "/"), (q += f[xn[r]]));
            q && (m.category = q);
          }
        }
        var m = H(f),
          n = !1;
        if (n || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            l();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return m;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && Wb(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    zn = function (a) {
      return Xe(a);
    },
    An = !1;
  var un,
    sn = {},
    hn = {},
    Bn = {},
    cn = Object.freeze(
      ((Bn.client_storage = "storage"),
      (Bn.sample_rate = 1),
      (Bn.site_speed_sample_rate = 1),
      (Bn.store_gac = 1),
      (Bn.use_amp_client_id = 1),
      (Bn[L.jb] = 1),
      (Bn[L.oa] = "storeGac"),
      (Bn[L.ja] = 1),
      (Bn[L.qa] = 1),
      (Bn[L.Fa] = 1),
      (Bn[L.Gb] = 1),
      (Bn[L.Wa] = 1),
      (Bn[L.Hb] = 1),
      Bn)
    ),
    Cn = {},
    Dn = Object.freeze(
      ((Cn._cs = 1),
      (Cn._useUp = 1),
      (Cn.allowAnchor = 1),
      (Cn.allowLinker = 1),
      (Cn.alwaysSendReferrer = 1),
      (Cn.clientId = 1),
      (Cn.cookieDomain = 1),
      (Cn.cookieExpires = 1),
      (Cn.cookieFlags = 1),
      (Cn.cookieName = 1),
      (Cn.cookiePath = 1),
      (Cn.cookieUpdate = 1),
      (Cn.legacyCookieDomain = 1),
      (Cn.legacyHistoryImport = 1),
      (Cn.name = 1),
      (Cn.sampleRate = 1),
      (Cn.siteSpeedSampleRate = 1),
      (Cn.storage = 1),
      (Cn.storeGac = 1),
      (Cn.useAmpClientId = 1),
      (Cn._cd2l = 1),
      Cn)
    ),
    En = Object.freeze({
      anonymize_ip: 1,
    }),
    Fn = {},
    dn = Object.freeze(
      ((Fn.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (Fn.app_id = 1),
      (Fn.app_installer_id = 1),
      (Fn.app_name = 1),
      (Fn.app_version = 1),
      (Fn.description = "exDescription"),
      (Fn.fatal = "exFatal"),
      (Fn.language = 1),
      (Fn.page_hostname = "hostname"),
      (Fn.transport_type = "transport"),
      (Fn[L.fa] = "currencyCode"),
      (Fn[L.Df] = 1),
      (Fn[L.nb] = "location"),
      (Fn[L.ce] = "page"),
      (Fn[L.Na] = "referrer"),
      (Fn[L.Uc] = "title"),
      (Fn[L.Kf] = 1),
      (Fn[L.ab] = 1),
      Fn)
    ),
    Gn = {},
    Hn = Object.freeze(
      ((Gn.content_id = 1),
      (Gn.event_action = 1),
      (Gn.event_category = 1),
      (Gn.event_label = 1),
      (Gn.link_attribution = 1),
      (Gn.name = 1),
      (Gn[L.ka] = 1),
      (Gn[L.Cf] = 1),
      (Gn[L.la] = 1),
      (Gn[L.ia] = 1),
      Gn)
    ),
    In = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    xn = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    Jn = {},
    qn = Object.freeze(
      ((Jn.levels = 1), (Jn[L.qa] = "duration"), (Jn[L.Gb] = 1), Jn)
    ),
    Kn = {},
    Ln = Object.freeze(
      ((Kn.anonymize_ip = 1),
      (Kn.fatal = 1),
      (Kn.send_page_view = 1),
      (Kn.store_gac = 1),
      (Kn.use_amp_client_id = 1),
      (Kn[L.oa] = 1),
      (Kn[L.Df] = 1),
      Kn)
    ),
    rn = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (Ln[b] && (c = Fa(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[en(b)] = c;
        else if (ta(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    en = function (a) {
      return a && ta(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    Mn = {},
    tn = Object.freeze(
      ((Mn.checkout_progress = 1),
      (Mn.select_content = 1),
      (Mn.set_checkout_option = 1),
      (Mn[L.Db] = 1),
      (Mn[L.Eb] = 1),
      (Mn[L.hb] = 1),
      (Mn[L.Va] = 1),
      (Mn[L.ib] = 1),
      (Mn[L.wa] = 1),
      (Mn[L.Fb] = 1),
      (Mn[L.xa] = 1),
      Mn)
    ),
    Nn = {},
    On = Object.freeze(
      ((Nn.checkout_progress = 1),
      (Nn.set_checkout_option = 1),
      (Nn[L.lf] = 1),
      (Nn[L.Db] = 1),
      (Nn[L.Eb] = 1),
      (Nn[L.hb] = 1),
      (Nn[L.wa] = 1),
      (Nn[L.Fb] = 1),
      (Nn[L.nf] = 1),
      Nn)
    ),
    Pn = {},
    Qn = Object.freeze(
      ((Pn.generate_lead = 1),
      (Pn.login = 1),
      (Pn.search = 1),
      (Pn.select_content = 1),
      (Pn.share = 1),
      (Pn.sign_up = 1),
      (Pn.view_search_results = 1),
      (Pn[L.Va] = 1),
      (Pn[L.ib] = 1),
      (Pn[L.xa] = 1),
      Pn)
    ),
    Rn = function (a) {
      var b = "general";
      On[a]
        ? (b = "ecommerce")
        : Qn[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Sn = {},
    Tn = Object.freeze(
      ((Sn.view_search_results = 1),
      (Sn[L.Va] = 1),
      (Sn[L.ib] = 1),
      (Sn[L.xa] = 1),
      Sn)
    ),
    nn = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    Un = function (a) {
      if (va(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    jn = function (a, b, c) {
      var d = function (K) {
          return c.getWithConfig(K);
        },
        e = {},
        f = {},
        g = {},
        l = {},
        m = Un(d(L.Dh));
      !c.isGtmEvent && m && nn(f, "exp", m);
      g["&gtm"] = Rk(!0);
      He() && (l._cs = zn);
      var n = d(L.bc);
      if (!c.isGtmEvent && Wb(n))
        for (var q in n)
          if (
            n.hasOwnProperty(q) &&
            /^(dimension|metric)\d+$/.test(q) &&
            void 0 != n[q]
          ) {
            var r = d(String(n[q]));
            void 0 !== r && nn(f, q, r);
          }
      for (var u = Kf(c), t = 0; t < u.length; ++t) {
        var p = u[t];
        if (c.isGtmEvent) {
          var v = d(p);
          In.hasOwnProperty(p)
            ? (e[p] = v)
            : Dn.hasOwnProperty(p)
            ? (l[p] = v)
            : (g[p] = v);
        } else {
          var w = void 0;
          w = p !== L.W ? d(p) : Lf(c, p);
          if (Hn.hasOwnProperty(p)) rn(Hn[p], p, w, e);
          else if (En.hasOwnProperty(p)) rn(En[p], p, w, g);
          else if (dn.hasOwnProperty(p)) rn(dn[p], p, w, f);
          else if (cn.hasOwnProperty(p)) rn(cn[p], p, w, l);
          else if (/^(dimension|metric|content_group)\d+$/.test(p))
            rn(1, p, w, f);
          else if (p === L.W) {
            if (!An) {
              var A = $a(w);
              A && (f["&did"] = A);
            }
            var x = void 0,
              z = void 0;
            b === L.ya
              ? (x = $a(Lf(c, p), "."))
              : ((x = $a(Lf(c, p, 1), ".")), (z = $a(Lf(c, p, 2), ".")));
            x && (f["&gdid"] = x);
            z && (f["&edid"] = z);
          } else
            p === L.za && 0 > u.indexOf(L.Gb) && (l.cookieName = w + "_ga");
        }
      }
      (!1 !== d(L.th) && !1 !== d(L.$b) && bn()) || (g.allowAdFeatures = !1);
      if (!1 === d(L.O) || !an()) {
        var y = c.isGtmEvent
          ? "allowAdPersonalizationSignals"
          : "allowAdFeatures";
        y = "allowAdPersonalizationSignals";
        g[y] = !1;
      }
      !c.isGtmEvent && d(L.$a) && (l._useUp = !0);
      if (c.isGtmEvent) {
        l.name = l.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function () {
          qa(B) && B();
          c.onSuccess();
        };
      } else {
        nn(l, "cookieDomain", "auto");
        nn(g, "forceSSL", !0);
        nn(e, "eventCategory", Rn(b));
        Tn[b] && nn(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? nn(e, "eventLabel", d(L.Cf))
          : "search" === b || "view_search_results" === b
          ? nn(e, "eventLabel", d(L.Ih))
          : "select_content" === b && nn(e, "eventLabel", d(L.xh));
        var F = e[L.ka] || {},
          D = F[L.Kb];
        D || (0 != D && F[L.N])
          ? (l.allowLinker = !0)
          : !1 === D && nn(l, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        l.name = a;
      }
      He() &&
        ((g["&gcs"] = Ye()),
        Xe(L.H) || (l.storage = "none"),
        Xe(L.C) || ((g.allowAdFeatures = !1), (l.storeGac = !1)));
      var E = d(L.ra) || d(L.kb),
        P = d(L.Sc);
      E && (c.isGtmEvent || (l[L.kb] = E), (l._cd2l = !0));
      P && !c.isGtmEvent && (l[L.Sc] = P);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = l;
      return e;
    },
    on = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Ae = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.xg = "impressions" === b.translateIfKeyEquals ? yn(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Dc = "promoView" === b.translateIfKeyEquals ? yn(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Dc = "promoClick" === b.translateIfKeyEquals ? yn(f, !0) : f;
        c.cb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var l = b[g].products;
          c.wb = "products" === b.translateIfKeyEquals ? yn(l, !0) : l;
          c.cb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    pn = function (a, b) {
      function c(t) {
        return {
          id: d(L.Za),
          affiliation: d(L.Ah),
          revenue: d(L.ia),
          tax: d(L.yf),
          shipping: d(L.Ud),
          coupon: d(L.Bh),
          list: d(L.Td) || t,
        };
      }
      for (
        var d = function (t) {
            return b.getWithConfig(t);
          },
          e = d(L.aa),
          f,
          g = 0;
        e && g < e.length && !(f = e[g][L.Td]);
        g++
      );
      var l = d(L.bc);
      if (Wb(l))
        for (var m = 0; e && m < e.length; ++m) {
          var n = e[m],
            q;
          for (q in l)
            l.hasOwnProperty(q) &&
              /^(dimension|metric)\d+$/.test(q) &&
              void 0 != l[q] &&
              nn(n, q, n[l[q]]);
        }
      var r = null,
        u = d(L.Ch);
      a === L.wa || a === L.Fb
        ? (r = {
            action: a,
            cb: c(),
            wb: yn(e),
          })
        : a === L.Db
        ? (r = {
            action: "add",
            wb: yn(e),
          })
        : a === L.Eb
        ? (r = {
            action: "remove",
            wb: yn(e),
          })
        : a === L.xa
        ? (r = {
            action: "detail",
            cb: c(f),
            wb: yn(e),
          })
        : a === L.Va
        ? (r = {
            action: "impressions",
            xg: yn(e),
          })
        : "view_promotion" === a
        ? (r = {
            action: "promo_view",
            Dc: yn(u),
          })
        : "select_content" === a && u && 0 < u.length
        ? (r = {
            action: "promo_click",
            Dc: yn(u),
          })
        : "select_content" === a
        ? (r = {
            action: "click",
            cb: {
              list: d(L.Td) || f,
            },
            wb: yn(e),
          })
        : a === L.hb || "checkout_progress" === a
        ? (r = {
            action: "checkout",
            wb: yn(e),
            cb: {
              step: a === L.hb ? 1 : d(L.xf),
              option: d(L.wf),
            },
          })
        : "set_checkout_option" === a &&
          (r = {
            action: "checkout_option",
            cb: {
              step: d(L.xf),
              option: d(L.wf),
            },
          });
      r && (r.Ae = d(L.fa));
      return r;
    },
    Vn = {},
    kn = function (a, b) {
      var c = Vn[a];
      Vn[a] = H(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };

  function Wn() {
    return (Q.gcq = Q.gcq || new Xn());
  }
  var Yn = function (a, b, c) {
      Wn().register(a, b, c);
    },
    Zn = function (a, b, c, d) {
      Wn().push("event", [b, a], c, d);
    },
    $n = function (a, b) {
      Wn().push("config", [a], b);
    },
    ao = function (a, b, c, d) {
      Wn().push("get", [a, b], c, d);
    },
    bo = {},
    co = function () {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.remoteConfig = {};
      this.o = {};
      this.s = null;
      this.m = !1;
    },
    eo = function (a, b, c, d, e) {
      this.type = a;
      this.s = b;
      this.T = c || "";
      this.m = d;
      this.o = e;
    },
    Xn = function () {
      this.o = {};
      this.s = {};
      this.m = [];
      this.D = {
        AW: !1,
        UA: !1,
      };
    },
    fo = function (a, b) {
      var c = Gl(b);
      return (a.o[c.containerId] = a.o[c.containerId] || new co());
    },
    go = function (a, b, c) {
      if (b) {
        var d = Gl(b);
        if (d && 1 === fo(a, b).status) {
          fo(a, b).status = 2;
          var e = {};
          ek &&
            (e.timeoutId = k.setTimeout(function () {
              Dd(38);
              Kj();
            }, 3e3));
          a.push("require", [e], d.containerId);
          bo[d.containerId] = Pa();
          if (Nk()) {
          } else {
            var g =
              "/gtag/js?id=" +
              encodeURIComponent(d.containerId) +
              "&l=" +
              O.V +
              "&cx=c";
            Mk() && (g += "&sign=" + O.gd);
            var l =
                ("http:" != k.location.protocol ? "https:" : "http:") +
                ("//www.googletagmanager.com" + g),
              m = Kk(c, g) || l;
            zb(m);
          }
        }
      }
    },
    ho = function (a, b, c, d) {
      if (d.T) {
        var e = fo(a, d.T),
          f = e.s;
        if (f) {
          var g = H(c),
            l = H(e.targetConfig[d.T]),
            m = H(e.containerConfig),
            n = H(e.remoteConfig),
            q = H(a.s),
            r = ce("gtm.uniqueEventId"),
            u = Gl(d.T).prefix,
            t = Sa(function () {
              var v = g[L.Jb];
              v && G(v);
            }),
            p = If(
              Hf(
                Jf(
                  Gf(Ef(Ff(Df(Cf(Bf(g), l), m), n), q), function () {
                    rk(r, u, "2");
                    t();
                  }),
                  function () {
                    rk(r, u, "3");
                    t();
                  }
                ),
                function (v, w) {
                  a.D[v] = w;
                }
              ),
              function (v) {
                return a.D[v];
              }
            );
          try {
            rk(r, u, "1");
            f(d.T, b, d.s, p);
          } catch (v) {
            rk(r, u, "4");
          }
        }
      }
    };
  Xn.prototype.register = function (a, b, c) {
    var d = fo(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (H(d.remoteConfig, c), (d.remoteConfig = c));
      var e = Gl(a),
        f = bo[e.containerId];
      if (void 0 !== f) {
        var g = Q[e.containerId].bootstrap,
          l = e.prefix.toUpperCase();
        Q[e.containerId]._spx && (l = l.toLowerCase());
        var m = ce("gtm.uniqueEventId"),
          n = l,
          q = Pa() - g;
        if (ek && !Pj[m]) {
          m !== Lj && (Gj(), (Lj = m));
          var r = n + "." + Math.floor(g - f) + "." + Math.floor(q);
          Tj = Tj ? Tj + "," + r : "&cl=" + r;
        }
        delete bo[e.containerId];
      }
      this.flush();
    }
  };
  Xn.prototype.push = function (a, b, c, d) {
    var e = Math.floor(Pa() / 1e3);
    go(this, c, b[0][L.ra] || this.s[L.ra]);
    c && fo(this, c).m && (d = !1);
    this.m.push(new eo(a, e, c, b, d));
    d || this.flush();
  };
  Xn.prototype.insert = function (a, b, c) {
    var d = Math.floor(Pa() / 1e3);
    0 < this.m.length
      ? this.m.splice(1, 0, new eo(a, d, c, b, !1))
      : this.m.push(new eo(a, d, c, b, !1));
  };
  Xn.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
      var f = this.m[0];
      if (f.o)
        !f.T || fo(this, f.T).m ? ((f.o = !1), this.m.push(f)) : c.push(f),
          this.m.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== fo(this, f.T).status && !a) {
              this.m.push.apply(this.m, c);
              return;
            }
            ek && k.clearTimeout(f.m[0].timeoutId);
            break;
          case "set":
            Ca(f.m[0], function (u, t) {
              H(Ya(u, t), b.s);
            });
            break;
          case "config":
            e.Ja = {};
            Ca(
              f.m[0],
              (function (u) {
                return function (t, p) {
                  H(Ya(t, p), u.Ja);
                };
              })(e)
            );
            var g = !!e.Ja[L.Yc];
            delete e.Ja[L.Yc];
            var l = fo(this, f.T),
              m = Gl(f.T),
              n = m.containerId === m.id;
            g || (n ? (l.containerConfig = {}) : (l.targetConfig[f.T] = {}));
            (l.m && g) || ho(this, L.ya, e.Ja, f);
            l.m = !0;
            delete e.Ja[L.Mb];
            n ? H(e.Ja, l.containerConfig) : H(e.Ja, l.targetConfig[f.T]);
            d = !0;
            break;
          case "event":
            e.Ic = {};
            Ca(
              f.m[0],
              (function (u) {
                return function (t, p) {
                  H(Ya(t, p), u.Ic);
                };
              })(e)
            );
            ho(this, f.m[1], e.Ic, f);
            break;
          case "get":
            var q = {},
              r = ((q[L.Ma] = f.m[0]), (q[L.Xa] = f.m[1]), q);
            ho(this, L.Ka, r, f);
        }
        this.m.shift();
        io(this, f);
      }
      e = {
        Ja: e.Ja,
        Ic: e.Ic,
      };
    }
    this.m.push.apply(this.m, c);
    d && this.flush();
  };
  var io = function (a, b) {
    if ("require" !== b.type)
      if (b.T)
        for (
          var c = a.getCommandListeners(b.T)[b.type] || [], d = 0;
          d < c.length;
          d++
        )
          c[d]();
      else
        for (var e in a.o)
          if (a.o.hasOwnProperty(e)) {
            var f = a.o[e];
            if (f && f.o)
              for (var g = f.o[b.type] || [], l = 0; l < g.length; l++) g[l]();
          }
  };
  Xn.prototype.getRemoteConfig = function (a) {
    return fo(this, a).remoteConfig;
  };
  Xn.prototype.getCommandListeners = function (a) {
    return fo(this, a).o;
  };
  var mo = "HA GF G UA AW DC".split(" "),
    no = !1,
    oo = !1,
    ro = 0;

  function so(a, b) {
    var c = {
      event: a,
    };
    b &&
      ((c.eventModel = H(b)),
      b[L.Jb] && (c.eventCallback = b[L.Jb]),
      b[L.Rc] && (c.eventTimeout = b[L.Rc]));
    return c;
  }

  function to(a) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", {
        value: Qd(),
      });
    return a["gtm.uniqueEventId"];
  }

  function uo() {
    return no;
  }
  var vo = {
      config: function (a) {
        var b,
          c = to(a);
        return b;
      },
      consent: function (a) {
        if (3 === a.length) {
          Dd(39);
          var b = Qd(),
            c = a[1];
          "default" === c ? Re(a[2]) : "update" === c && Te(a[2], b);
        }
      },
      event: function (a) {
        var b = a[1];
        if (!(2 > a.length) && ta(b)) {
          var c;
          if (2 < a.length) {
            if ((!Wb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            c = a[2];
          }
          var d = so(b, c),
            e = to(a);
          d["gtm.uniqueEventId"] = e;
          return d;
        }
      },
      get: function (a) {},
      js: function (a) {
        if (2 == a.length && a[1].getTime) {
          oo = !0;
          uo();
          var b = {};
          return (
            (b.event = "gtm.js"),
            (b["gtm.start"] = a[1].getTime()),
            (b["gtm.uniqueEventId"] = to(a)),
            b
          );
        }
      },
      policy: function () {},
      set: function (a) {
        var b;
        2 == a.length && Wb(a[1])
          ? (b = H(a[1]))
          : 3 == a.length &&
            ta(a[1]) &&
            ((b = {}),
            Wb(a[2]) || va(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          b._clear = !0;
          return b;
        }
      },
    },
    wo = {
      policy: !0,
    };
  var xo = function () {
    this.m = [];
    this.o = [];
  };
  xo.prototype.push = function (a, b, c) {
    var d = {
      ui: c,
      message: a,
      Ac: b,
      Hg: this.m.length + 1,
    };
    this.m.push(d);
    for (var e = 0; e < this.o.length; e++)
      try {
        this.o[e](d);
      } catch (f) {}
  };
  xo.prototype.Ag = function (a) {
    this.o.push(a);
  };
  xo.prototype.get = function () {
    for (var a = {}, b = 0; b < this.m.length; b++) {
      var c = this.m[b],
        d = a[c.Ac];
      d || ((d = []), (a[c.Ac] = d));
      d.push(c);
    }
    return a;
  };
  xo.prototype.get = xo.prototype.get;
  xo.prototype.listen = xo.prototype.Ag;
  xo.prototype.push = xo.prototype.push;

  function yo(a, b) {
    return a.Ac - b.Ac || a.Hg - b.Hg;
  }
  var zo = function (a) {
      var b = k[O.V].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Ao = function (a) {
      var b = k[O.V],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Bo = !1,
    Co = [];

  function Do() {
    if (!Bo) {
      Bo = !0;
      for (var a = 0; a < Co.length; a++) G(Co[a]);
    }
  }
  var Eo = function (a) {
    Bo ? G(a) : Co.push(a);
  };
  var Vo = function (a) {
    if (Uo(a)) return a;
    this.m = a;
  };
  Vo.prototype.Fi = function () {
    return this.m;
  };
  var Uo = function (a) {
    return !a || "object" !== Ub(a) || Wb(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  Vo.prototype.getUntrustedUpdateValue = Vo.prototype.Fi;
  var Wo = 0,
    Xo,
    Yo = {},
    Zo = [],
    $o = [],
    ap = !1,
    bp = !1,
    cp = function (a) {
      return k[O.V].push(a);
    },
    dp = function (a, b) {
      var c = Q[O.V],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = k.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (k.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };

  function ep(a) {
    var b = a._clear;
    Ca(a, function (d, e) {
      "_clear" !== d && (b && fe(d, void 0), fe(d, e));
    });
    Ld || (Ld = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || ((c = Qd()), (a["gtm.uniqueEventId"] = c), fe("gtm.uniqueEventId", c));
    return Ik(a);
  }

  function fp(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Da(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0;
    }
    return !1;
  }

  function gp() {
    for (var a = !1; !bp && (0 < Zo.length || 0 < $o.length); ) {
      if (!ap && fp(Zo[0])) {
        var b = {},
          c = ((b.event = "gtm.init_consent"), b),
          d = {},
          e = ((d.event = "gtm.init"), d),
          f = Zo[0]["gtm.uniqueEventId"];
        f &&
          ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
        Zo.unshift(c, e);
        ap = !0;
      }
      bp = !0;
      delete $d.eventModel;
      be();
      var g = null,
        l = void 0;
      null == g && (g = Zo.shift());
      if (null != g) {
        var n = Uo(g);
        if (n) {
          var q = g;
          g = Uo(q) ? q.getUntrustedUpdateValue() : void 0;
          for (
            var r = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              u = 0;
            u < r.length;
            u++
          ) {
            var t = r[u],
              p = ce(t, 1);
            if (va(p) || Wb(p)) p = H(p);
            ae[t] = p;
          }
        }
        try {
          if (qa(g))
            try {
              g.call(de);
            } catch (E) {}
          else if (va(g)) {
            var v = g;
            if (ta(v[0])) {
              var w = v[0].split("."),
                A = w.pop(),
                x = v.slice(1),
                z = ce(w.join("."), 2);
              if (void 0 !== z && null !== z)
                try {
                  z[A].apply(z, x);
                } catch (E) {}
            }
          } else {
            if (Da(g)) {
              a: {
                var y = g,
                  B = l;
                if (y.length && ta(y[0])) {
                  var F = vo[y[0]];
                  if (F && (!n || !wo[y[0]])) {
                    g = F(y, B);
                    break a;
                  }
                }
                g = void 0;
              }
              if (!g) {
                bp = !1;
                continue;
              }
            }
            a = ep(g) || a;
          }
        } finally {
          n && be(!0);
        }
      }
      bp = !1;
    }
    return !a;
  }

  function ip() {
    var b = gp();
    try {
      zo(O.I);
    } catch (c) {}
    return b;
  }
  var lp = function () {
    var a = ub(O.V, []),
      b = ub("google_tag_manager", {});
    b = b[O.V] = b[O.V] || {};
    Xi(function () {
      b.gtmDom ||
        ((b.gtmDom = !0),
        a.push({
          event: "gtm.dom",
        }));
    });
    Eo(function () {
      b.gtmLoad ||
        ((b.gtmLoad = !0),
        a.push({
          event: "gtm.load",
        }));
    });
    b.subscribers = (b.subscribers || 0) + 1;
    var c = a.push;
    a.push = function () {
      var e;
      if (0 < Q.SANDBOXED_JS_SEMAPHORE) {
        e = [];
        for (var f = 0; f < arguments.length; f++) e[f] = new Vo(arguments[f]);
      } else e = [].slice.call(arguments, 0);
      Zo.push.apply(Zo, e);
      var g = c.apply(a, e);
      if (300 < this.length) for (Dd(4); 300 < this.length; ) this.shift();
      var l = "boolean" !== typeof g || g;
      return gp() && l;
    };
    var d = a.slice(0);
    Zo.push.apply(Zo, d);
    if (jp()) {
      G(ip);
    }
  };
  var jp = function () {
    var a = !0;
    return a;
  };

  function mp(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Pa();
    return b < c + 3e5 && b > c - 9e5;
  }
  var np = function (a) {
    Q.addTargetToGroup
      ? Q.addTargetToGroup(a)
      : ((Q.pendingDefaultTargets = Q.pendingDefaultTargets || []),
        Q.pendingDefaultTargets.push(a));
  };
  var op = {};
  op.bd = new String("undefined");
  var pp = function (a) {
    this.m = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === op.bd ? b : a[d]);
      return c.join("");
    };
  };
  pp.prototype.toString = function () {
    return this.m("undefined");
  };
  pp.prototype.valueOf = pp.prototype.toString;
  op.Zh = pp;
  op.te = {};
  op.oi = function (a) {
    return new pp(a);
  };
  var qp = {};
  op.jj = function (a, b) {
    var c = Qd();
    qp[c] = [a, b];
    return c;
  };
  op.kg = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = qp[c];
      if (d && "function" === typeof d[b]) d[b]();
      qp[c] = void 0;
    };
  };
  op.Mi = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  op.aj = function (a) {
    if (a === op.bd) return a;
    var b = Qd();
    op.te[b] = a;
    return 'google_tag_manager["' + O.I + '"].macro(' + b + ")";
  };
  op.Wi = function (a, b, c) {
    a instanceof op.Zh && ((a = a.m(op.jj(b, c))), (b = na));
    return {
      Ji: a,
      onSuccess: b,
    };
  };
  var Pp = k.clearTimeout,
    Qp = k.setTimeout,
    U = function (a, b, c, d) {
      if (Nk()) {
        b && G(b);
      } else return zb(a, b, c, d);
    },
    Rp = function () {
      return new Date();
    },
    Sp = function () {
      return k.location.href;
    },
    Tp = function (a) {
      return dg(fg(a), "fragment");
    },
    Up = function (a) {
      return eg(fg(a));
    },
    Vp = function (a, b) {
      return ce(a, b || 2);
    },
    Wp = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = cp(a)))
        : (d = cp(a));
      return d;
    },
    Xp = function (a, b) {
      k[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === k[a] || (c && !k[a])) && (k[a] = b);
      return k[a];
    },
    Yp = function (a, b, c) {
      return Kg(a, b, void 0 === c ? !0 : !!c);
    },
    Zp = function (a, b, c) {
      return 0 === Tg(a, b, c);
    },
    $p = function (a, b) {
      if (Nk()) {
        b && G(b);
      } else Eb(a, b);
    },
    aq = function (a) {
      return !!vp(a, "init", !1);
    },
    bq = function (a) {
      tp(a, "init", !0);
    },
    cq = function (a) {
      var b = Id,
        c = "?id=" + encodeURIComponent(a) + "&l=" + O.V;
      Mk() &&
        ((c += "&sign=" + O.gd),
        rb && (b = rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
      var d = Kl("https://", "http://", b + c);
      U(d);
    },
    dq = function (a, b, c) {
      ek && (Xb(a) || sk(c, b, a));
    };
  var eq = op.Wi;
  var Bq = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];

  function Cq(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var Dq = new ya();

  function Eq(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = Dq.get(e);
      f || ((f = new RegExp(b, d)), Dq.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }

  function Fq(a, b) {
    function c(g) {
      var l = fg(g),
        m = dg(l, "protocol"),
        n = dg(l, "host", !0),
        q = dg(l, "port"),
        r = dg(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === q) ||
        ("https" === m && "443" === q)
      )
        (m = "web"), (q = "default");
      return [m, n, q, r];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }

  function Gq(a) {
    return Hq(a) ? 1 : 0;
  }

  function Hq(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H(
          {
            arg1: c[d],
            any_of: void 0,
          },
          e
        );
        if (Gq(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < Bq.length; g++) {
                var l = Bq[g];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return Cq(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Eq(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Fq(b, c);
    }
    return !1;
  }
  Object.freeze({
    dl: 1,
    id: 1,
  });
  Object.freeze(["config", "event", "get", "set"]);
  var Iq = encodeURI,
    Y = encodeURIComponent,
    Jq = Fb;
  var Kq = function (a, b) {
    if (!a) return !1;
    var c = dg(fg(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
        if (0 <= f && c.indexOf(e, f) == f) return !0;
      }
    }
    return !1;
  };
  var Lq = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  };

  function js() {
    return (k.gaGlobal = k.gaGlobal || {});
  }
  var ks = function () {
      var a = js();
      a.hid = a.hid || xa();
      return a.hid;
    },
    ls = function (a, b) {
      var c = js();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Hs = function () {
    if (qa(k.__uspapi)) {
      var a = "";
      try {
        k.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var ct = window,
    dt = document,
    et = function (a) {
      var b = ct._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === ct["ga-disable-" + a]))
        return !0;
      try {
        var c = ct.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Gg("AMP_TOKEN", String(dt.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return dt.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var ft = {};

  function it(a) {
    delete a.eventModel[L.Mb];
    kt(a.eventModel);
  }
  var kt = function (a) {
    Ca(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[L.Oa] || {};
    Ca(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var nt = function (a, b, c) {
      Zn(b, c, a);
    },
    qt = function (a, b, c) {
      Zn(b, c, a, !0);
    },
    st = function (a, b) {};

  function rt(a, b) {}
  var Z = {
    g: {},
  };

  (Z.g.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.h = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
      })(function (a) {
        var b = String(ie(a.vtp_gtmEventId, "event"));
        a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
        return b;
      });
    })();
  (Z.g.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.h = "f";
        Z.__f.isVendorTemplate = !0;
        Z.__f.priorityOverride = 0;
      })(function (a) {
        var b = Vp("gtm.referrer", 1) || C.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? dg(
                fg(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Up(String(b))
          : String(b);
      });
    })();

  (Z.g.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.h = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : Vp("gtm.url", 1)) || Sp();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Up(String(c));
        var e = fg(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              l = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? va(l)
                ? (n = l)
                : (n = String(l).replace(/\s+/g, "").split(","))
              : (n = [String(l)]);
            for (var q = 0; q < n.length; q++) {
              var r = dg(e, "QUERY", void 0, void 0, n[q]);
              if (void 0 != r && (!m || "" !== r)) {
                f = r;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = dg(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0,
            void 0
          );
        return f;
      });
    })();
  (Z.g.ua = ["google"]),
    (function () {
      function a(p) {
        return Xe(p);
      }

      function b(p, v, w) {
        var A = !1;
        if (He() && !A && !f[p]) {
          var x = !Xe(L.H),
            z = function () {
              var y = jj(),
                B = "gtm" + Qd(),
                F = r(v);
              F["&gtm"] = Rk(!0);
              var D = {
                name: B,
              };
              q(F, D, !0);
              var E = void 0,
                P = D._useUp;
              y(function () {
                var K = y.getByName(w);
                K && (E = K.get("clientId"));
              });
              y("create", p, D);
              x &&
                Xe(L.H) &&
                ((x = !1),
                y(function () {
                  var K = jj().getByName(B);
                  !K ||
                    (K.get("clientId") === E && P) ||
                    ((F["&gcs"] = Ye()),
                    (F["&gcu"] = "1"),
                    K.set(F),
                    K.send("pageview"));
                }));
              y(function () {
                y.remove(B);
              });
            };
          Me(z, L.H);
          Me(z, L.C);
          f[p] = !0;
        }
      }
      var c = !1;
      c = !0;
      var d,
        e = {},
        f = {},
        g = {
          name: !0,
          clientId: !0,
          sampleRate: !0,
          siteSpeedSampleRate: !0,
          alwaysSendReferrer: !0,
          allowAnchor: !0,
          allowLinker: !0,
          cookieName: !0,
          cookieDomain: !0,
          cookieExpires: !0,
          cookiePath: !0,
          cookieUpdate: !0,
          cookieFlags: !0,
          legacyCookieDomain: !0,
          legacyHistoryImport: !0,
          storage: !0,
          useAmpClientId: !0,
          storeGac: !0,
          _cd2l: !0,
          _useUp: !0,
          _cs: !0,
        },
        l = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        m = {
          urlPassthrough: !0,
        };
      var n = function (p, v) {
        if (p)
          for (var w in p)
            if (!m[w] && p.hasOwnProperty(w)) {
              var A = l[w] ? Fa(p[w]) : p[w];
              "anonymizeIp" != w || A || (A = void 0);
              v[w] = A;
            }
      };
      var q = function (p, v, w) {
          var A = 0;
          if (p)
            for (var x in p)
              if (
                !m[x] &&
                p.hasOwnProperty(x) &&
                ((w && g[x]) || (!w && void 0 === g[x]))
              ) {
                var z = l[x] ? Fa(p[x]) : p[x];
                "anonymizeIp" != x || z || (z = void 0);
                v[x] = z;
                A++;
              }
          return A;
        },
        r = function (p) {
          var v = {};
          p.vtp_gaSettings &&
            H(Lq(p.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), v);
          H(Lq(p.vtp_fieldsToSet, "fieldName", "value"), v);
          Fa(v.urlPassthrough) && (v._useUp = !0);
          p.vtp_transportUrl && (v._x_19 = p.vtp_transportUrl);
          if (!c) {
            v._x_19 && (v._cd2l = !0);
            Xe(L.H) || (v.storage = "none");
            Xe(L.C) || ((v.allowAdFeatures = !1), (v.storeGac = !1));
            bn() || (v.allowAdFeatures = !1);
            an() || (v.allowAdPersonalizationSignals = !1);
            if (Fa(v.urlPassthrough)) {
              var w = !1;
              He() && !w && (v._cs = a);
            }
          }
          return v;
        },
        u = function (p, v) {
          var w = p.vtp_autoLinkDomains || "";
          w && mj(v, w, !!p.vtp_useHashAutoLink, !!p.vtp_decorateFormsAutoLink);
        },
        t = function (p) {
          function v(pa, ha) {
            void 0 !== p[ha] && J("set", pa, p[ha]);
          }

          function w() {
            if (
              p.vtp_doubleClick ||
              "DISPLAY_FEATURES" == p.vtp_advertisingFeaturesType
            ) {
              var pa =
                "_dc_gtm_" +
                String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
              J("require", "displayfeatures", void 0, {
                cookieName: pa,
              });
            }
          }
          var A = {},
            x = {},
            z = {},
            y = {};
          if (p.vtp_gaSettings) {
            var B = p.vtp_gaSettings;
            H(Lq(B.vtp_contentGroup, "index", "group"), x);
            H(Lq(B.vtp_dimension, "index", "dimension"), z);
            H(Lq(B.vtp_metric, "index", "metric"), y);
            var F = H(B);
            F.vtp_fieldsToSet = void 0;
            F.vtp_contentGroup = void 0;
            F.vtp_dimension = void 0;
            F.vtp_metric = void 0;
            p = H(p, F);
          }
          H(Lq(p.vtp_contentGroup, "index", "group"), x);
          H(Lq(p.vtp_dimension, "index", "dimension"), z);
          H(Lq(p.vtp_metric, "index", "metric"), y);
          var D = r(p),
            E = "",
            P = lj(p.vtp_functionName);
          if (qa(P)) {
            var K = "",
              I = "";
            p.vtp_setTrackerName && "string" == typeof p.vtp_trackerName
              ? "" !== p.vtp_trackerName &&
                ((I = p.vtp_trackerName), (K = I + "."))
              : ((I = "gtm" + Qd()), (K = I + "."));
            var J = function (pa) {
                var ha = [].slice.call(arguments, 0);
                ha[0] = K + ha[0];
                P.apply(window, ha);
              },
              N = function (pa, ha) {
                return void 0 === ha ? ha : pa(ha);
              },
              M = function (pa, ha) {
                if (ha)
                  for (var Ra in ha)
                    ha.hasOwnProperty(Ra) &&
                      (c ? (D[pa + Ra] = ha[Ra]) : J("set", pa + Ra, ha[Ra]));
              },
              S = function () {},
              V = function (pa, ha) {
                return void 0 === p[pa] ? A[ha] : p[pa];
              },
              T = String(p.vtp_trackingId || A.trackingId || "");
            if (c) {
              var ra = function () {
                if (
                  p.vtp_doubleClick ||
                  "DISPLAY_FEATURES" == p.vtp_advertisingFeaturesType
                )
                  D.displayfeatures = !0;
              };
              M("contentGroup", x);
              M("dimension", z);
              M("metric", y);
              var sa = {};
              p.vtp_enableEcommerce && (D.gtmEcommerceData = S());
              if ("TRACK_EVENT" === p.vtp_trackType)
                (E = "track_event"),
                  ra(),
                  (D.eventCategory = String(
                    V("vtp_eventCategory", "category")
                  )),
                  (D.eventAction = String(V("vtp_eventAction", "action"))),
                  (D.eventLabel = N(String, V("vtp_eventLabel", "label"))),
                  (D.value = N(Ea, V("vtp_eventValue", "value")));
              else if ("TRACK_PAGEVIEW" == p.vtp_trackType) {
                if (
                  ((E = L.Zb),
                  ra(),
                  "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                    p.vtp_advertisingFeaturesType && (D.remarketingLists = !0),
                  p.vtp_autoLinkDomains)
                ) {
                  var ja = {};
                  ja[L.N] = p.vtp_autoLinkDomains;
                  ja.use_anchor = p.vtp_useHashAutoLink;
                  ja[L.Lb] = p.vtp_decorateFormsAutoLink;
                  D[L.ka] = ja;
                }
              } else
                "TRACK_SOCIAL" === p.vtp_trackType
                  ? ((E = "track_social"),
                    (D.socialNetwork = String(p.vtp_socialNetwork)),
                    (D.socialAction = String(p.vtp_socialAction)),
                    (D.socialTarget = String(p.vtp_socialActionTarget)))
                  : "TRACK_TIMING" == p.vtp_trackType &&
                    ((E = "timing_complete"),
                    (D.eventCategory = String(
                      V("vtp_timingCategory", "category")
                    )),
                    (D.timingVar = String(V("vtp_timingVar", "name"))),
                    (D.value = Ea(V("vtp_timingValue", "value"))),
                    (D.eventLabel = N(String, V("vtp_timingLabel", "label"))));
              p.vtp_enableRecaptcha && (D.enableRecaptcha = !0);
              p.vtp_enableLinkId && (D.enableLinkId = !0);
              n(D, sa);
              D.name || (sa.gtmTrackerName = I);
              sa.gaFunctionName = p.vtp_functionName;
              void 0 !== p.vtp_nonInteraction &&
                (sa.nonInteraction = p.vtp_nonInteraction);
              var za = Jf(Gf(Bf(sa), p.vtp_gtmOnSuccess), p.vtp_gtmOnFailure);
              za.isGtmEvent = !0;
              wn(T, E, Date.now(), za);
            }
            if (!c) {
              var W = {
                name: I,
              };
              q(D, W, !0);
              P("create", T, W);
              J("set", "&gtm", Rk(!0));
              M("contentGroup", x);
              M("dimension", z);
              M("metric", y);
              var oa = !1;
              He() && !oa && (J("set", "&gcs", Ye()), b(T, p, I));
              D._x_19 &&
                D._x_20 &&
                !e[I] &&
                ((e[I] = !0), P(sj(I, String(D._x_20))));
              p.vtp_enableRecaptcha &&
                J("require", "recaptcha", "recaptcha.js");
              v("nonInteraction", "vtp_nonInteraction");
              var Ia = {};
              q(D, Ia, !1) && J("set", Ia);
              if (p.vtp_enableLinkId) {
                var La = {};
                Mk() && D._x_19 && (La._x_19 = D._x_19);
                J("require", "linkid", "linkid.js", La);
              }
              J("set", "hitCallback", function () {
                var pa = D && D.hitCallback;
                qa(pa) && pa();
                p.vtp_gtmOnSuccess();
              });
            }
            var Ga;
            if ("TRACK_EVENT" == p.vtp_trackType) {
              if (!c) {
              }
            } else if ("TRACK_SOCIAL" == p.vtp_trackType) {
              if (!c) {
              }
            } else if ("TRACK_TRANSACTION" == p.vtp_trackType) {
            } else if ("TRACK_TIMING" == p.vtp_trackType) {
              if (!c) {
              }
            } else if ("DECORATE_LINK" == p.vtp_trackType) {
            } else if ("DECORATE_FORM" == p.vtp_trackType) {
            } else if ("TRACK_DATA" == p.vtp_trackType) {
            } else if (!c) {
              if (p.vtp_enableEcommerce) {
                var Ue = {};
                Mk() && D._x_19 && (Ue._x_19 = D._x_19);
                J("require", "ec", "ec.js", Ue);
                S();
              }
              w();
              if (
                "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
                p.vtp_advertisingFeaturesType
              ) {
                var wd =
                  "_dc_gtm_" +
                  String(p.vtp_trackingId).replace(/[^A-Za-z0-9-]/g, "");
                J("require", "adfeatures", {
                  cookieName: wd,
                });
              }
              Ga ? J("send", "pageview", Ga) : J("send", "pageview");
              u(p, K);
              Fa(D.urlPassthrough) && nj(K);
            }
            if (!d) {
              var Pb = p.vtp_useDebugVersion
                ? "u/analytics_debug.js"
                : "analytics.js";
              p.vtp_useInternalVersion &&
                !p.vtp_useDebugVersion &&
                (Pb = "internal/" + Pb);
              d = !0;
              var Ve = Kk(D._x_19, "/analytics.js"),
                Cg = Kl(
                  "https:",
                  "http:",
                  "//www.google-analytics.com/" + Pb,
                  D && !!D.forceSSL
                );
              U(
                "analytics.js" === Pb && Ve ? Ve : Cg,
                function () {
                  var pa = jj();
                  (pa && pa.loaded) || p.vtp_gtmOnFailure();
                },
                p.vtp_gtmOnFailure
              );
            }
          } else G(p.vtp_gtmOnFailure);
        };
      (function (p) {
        Z.__ua = p;
        Z.__ua.h = "ua";
        Z.__ua.isVendorTemplate = !0;
        Z.__ua.priorityOverride = 0;
      })(function (p) {
        af(
          function () {
            t(p);
          },
          [L.H, L.C]
        );
      });
    })();

  (Z.g.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var l = e.shift(),
                m = a(d, e, f, g);
              if (
                "SCRIPT" == String(l.nodeName).toUpperCase() &&
                "text/gtmscript" == l.type
              ) {
                var n = C.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = l.id;
                n.text = l.text || l.textContent || l.innerHTML || "";
                l.charset && (n.charset = l.charset);
                var q = l.getAttribute("data-gtmsrc");
                q && ((n.src = q), vb(n, m));
                d.insertBefore(n, null);
                q || m();
              } else if (
                l.innerHTML &&
                0 <= l.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var r = []; l.firstChild; )
                  r.push(l.removeChild(l.firstChild));
                d.insertBefore(l, null);
                a(l, r, m, g)();
              } else d.insertBefore(l, null), m();
            } else f();
          } catch (u) {
            G(g);
          }
        };
      }
      var c = function (d) {
        if (C.body) {
          var e = d.vtp_gtmOnFailure,
            f = eq(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.Ji,
            l = f.onSuccess;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? b(g, l, e) : a(C.body, Kb(g), l, e)();
        } else
          Qp(function () {
            c(d);
          }, 200);
      };
      Z.__html = c;
      Z.__html.h = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
    })();

  var tt = {};
  (tt.macro = function (a) {
    if (op.te.hasOwnProperty(a)) return op.te[a];
  }),
    (tt.onHtmlSuccess = op.kg(!0)),
    (tt.onHtmlFailure = op.kg(!1));
  tt.dataLayer = de;
  tt.callback = function (a) {
    Od.hasOwnProperty(a) && qa(Od[a]) && Od[a]();
    delete Od[a];
  };
  tt.bootstrap = 0;
  tt._spx = !1;
  (function (a) {
    if (!k["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (C.referrer) {
        var c = fg(C.referrer);
        b = "cct.google" === cg(c, "host");
      }
      if (!b) {
        var d = Kg("googTaggyReferrer");
        b = d.length && d[0].length;
      }
      b &&
        ((k["__TAGGY_INSTALLED"] = !0),
        zb("https://cct.google/taggy/agent.js"));
    }
    var f = function (r) {
        var u = "GTM",
          t = "GTM";
        var p = k["google.tagmanager.debugui2.queue"];
        p ||
          ((p = []),
          (k["google.tagmanager.debugui2.queue"] = p),
          zb(
            "https://" +
              O.Gd +
              "/debug/bootstrap?id=" +
              O.I +
              "&src=" +
              t +
              "&cond=" +
              r +
              "&gtm=" +
              Rk()
          ));
        var v = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: rb,
            containerProduct: u,
            debug: !1,
            id: O.I,
          },
        };
        v.data.resume = function () {
          a();
        };
        O.gh && (v.data.initialPublish = !0);
        p.push(v);
      },
      g = void 0,
      l = dg(k.location, "query", !1, void 0, "gtm_debug");
    mp(l) && (g = 2);
    if (!g && C.referrer) {
      var m = fg(C.referrer);
      "tagassistant.google.com" === cg(m, "host") && (g = 3);
    }
    if (!g) {
      var n = Kg("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4);
    }
    if (!g) {
      var q = C.documentElement.getAttribute("data-tag-assistant-present");
      mp(q) && (g = 5);
    }
    g && rb ? f(g) : a();
  })(function () {
    var a = !1;
    a && fj("INIT");
    we().o();
    nl();
    Yh.enable_gbraid_cookie_write = !0;
    var b = !!Q[O.I];
    if (b) {
      var c = Q.zones;
      c && c.unregisterChild(O.I);
    } else {
      for (
        var g = data.resource || {}, l = g.macros || [], m = 0;
        m < l.length;
        m++
      )
        vc.push(l[m]);
      for (var n = g.tags || [], q = 0; q < n.length; q++) Dc.push(n[q]);
      for (var r = g.predicates || [], u = 0; u < r.length; u++) xc.push(r[u]);
      for (var t = g.rules || [], p = 0; p < t.length; p++) {
        for (var v = t[p], w = {}, A = 0; A < v.length; A++)
          w[v[A][0]] = Array.prototype.slice.call(v[A], 1);
        wc.push(w);
      }
      Fc = Z;
      Gc = Gq;
      Q[O.I] = tt;
      Ta(Pd, Z.g);
      Hc = Hc || op;
      Ic = Qc;
      lp();
      Si = !1;
      Ti = 0;
      if (
        ("interactive" == C.readyState && !C.createEventObject) ||
        "complete" == C.readyState
      )
        Vi();
      else {
        Gb(C, "DOMContentLoaded", Vi);
        Gb(C, "readystatechange", Vi);
        if (C.createEventObject && C.documentElement.doScroll) {
          var x = !0;
          try {
            x = !k.frameElement;
          } catch (D) {}
          x && Wi();
        }
        Gb(k, "load", Vi);
      }
      Bo = !1;
      "complete" === C.readyState ? Do() : Gb(k, "load", Do);
      ek && k.setInterval(Yj, 864e5);
      Md = Pa();
      if (a) {
        var F = gj("INIT");
      }
    }
  });
})();
