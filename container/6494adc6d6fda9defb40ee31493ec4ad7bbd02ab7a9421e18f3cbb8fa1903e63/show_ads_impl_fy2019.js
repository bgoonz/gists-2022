(function (sttc) {
  /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
  "use strict";
  var p,
    aa =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          };

  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this),
    da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
    ea = {},
    ia = {};

  function ja(a, b, c) {
    if (b)
      a: {
        var d = a.split(".");
        a = 1 === d.length;
        var e = d[0],
          f;
        !a && e in ea ? (f = ea) : (f = ca);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = da && "es6" === c ? f[d] : null;
        b = b(c);
        null != b &&
          (a
            ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b,
              })
            : b !== c &&
              (void 0 === ia[d] &&
                ((a = (1e9 * Math.random()) >>> 0),
                (ia[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d)),
              aa(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b,
              })));
      }
  }
  ja(
    "globalThis",
    function (a) {
      return a || ca;
    },
    "es_2020"
  );
  var u = this || self;

  function ka(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }

  function la(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }

  function na(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, oa) && a[oa]) || (a[oa] = ++pa)
    );
  }
  var oa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    pa = 0;

  function qa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }

  function ra(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }

  function ta(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (ta = qa)
      : (ta = ra);
    return ta.apply(null, arguments);
  }

  function ua(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }

  function va() {
    return Date.now();
  }

  function wa(a, b) {
    a = a.split(".");
    var c = u;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }

  function xa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.ti = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.ii = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }

  function ya(a) {
    return a;
  }

  function za(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, za);
    else {
      const b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  xa(za, Error);
  za.prototype.name = "CustomError";
  var Aa;

  function Ba(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : "%s");
    za.call(this, c + a[d]);
  }
  xa(Ba, za);
  Ba.prototype.name = "AssertionError";

  function Ca(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }

  function Da(a, b) {
    if (b)
      a = a
        .replace(Ea, "&amp;")
        .replace(Fa, "&lt;")
        .replace(Ga, "&gt;")
        .replace(Ha, "&quot;")
        .replace(Ia, "&#39;")
        .replace(Ja, "&#0;");
    else {
      if (!Ka.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(Ha, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(Ia, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(Ja, "&#0;"));
    }
    return a;
  }
  var Ea = /&/g,
    Fa = /</g,
    Ga = />/g,
    Ha = /"/g,
    Ia = /'/g,
    Ja = /\x00/g,
    Ka = /[\x00&<>"']/;

  function La(a, b) {
    let c = 0;
    a = Ca(String(a)).split(".");
    b = Ca(String(b)).split(".");
    const d = Math.max(a.length, b.length);
    for (let g = 0; 0 == c && g < d; g++) {
      var e = a[g] || "",
        f = b[g] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length) break;
        c =
          Na(
            0 == e[1].length ? 0 : parseInt(e[1], 10),
            0 == f[1].length ? 0 : parseInt(f[1], 10)
          ) ||
          Na(0 == e[2].length, 0 == f[2].length) ||
          Na(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == c);
    }
    return c;
  }

  function Na(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  function Oa() {
    var a = u.navigator;
    return a && (a = a.userAgent) ? a : "";
  }

  function v(a) {
    return -1 != Oa().indexOf(a);
  }

  function Pa() {
    return v("Opera");
  }

  function Qa() {
    return v("Trident") || v("MSIE");
  }

  function Ra() {
    return v("Firefox") || v("FxiOS");
  }

  function Sa() {
    return (
      v("Safari") &&
      !(
        Ta() ||
        v("Coast") ||
        Pa() ||
        v("Edge") ||
        v("Edg/") ||
        v("OPR") ||
        Ra() ||
        v("Silk") ||
        v("Android")
      )
    );
  }

  function Ta() {
    return ((v("Chrome") || v("CriOS")) && !v("Edge")) || v("Silk");
  }

  function Ua() {
    return v("Android") && !(Ta() || Ra() || Pa() || v("Silk"));
  }

  function Va(a) {
    const b = {};
    a.forEach((c) => {
      b[c[0]] = c[1];
    });
    return (c) => b[c.find((d) => d in b)] || "";
  }

  function Wa() {
    var a = Oa();
    if (Qa()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    let d;
    for (; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = Va(b);
    return Pa()
      ? a(["Version", "Opera"])
      : v("Edge")
      ? a(["Edge"])
      : v("Edg/")
      ? a(["Edg"])
      : v("Silk")
      ? a(["Silk"])
      : Ta()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }

  function Xa(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }

  function Ya(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }

  function $a(a, b) {
    const c = a.length,
      d = [];
    let e = 0;
    const f = "string" === typeof a ? a.split("") : a;
    for (let g = 0; g < c; g++)
      if (g in f) {
        const h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }

  function ab(a, b) {
    const c = a.length,
      d = Array(c),
      e = "string" === typeof a ? a.split("") : a;
    for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }

  function bb(a, b, c) {
    let d = c;
    Ya(a, function (e, f) {
      d = b.call(void 0, d, e, f, a);
    });
    return d;
  }

  function cb(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }

  function db(a, b) {
    return 0 <= Xa(a, b);
  }

  function eb(a, b) {
    b = Xa(a, b);
    let c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }

  function fb(a) {
    return Array.prototype.concat.apply([], arguments);
  }

  function gb(a) {
    const b = a.length;
    if (0 < b) {
      const c = Array(b);
      for (let d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }

  function ib(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  }

  function jb(a) {
    const b = [];
    for (let c = 0; c < arguments.length; c++) {
      const d = arguments[c];
      if (Array.isArray(d))
        for (let e = 0; e < d.length; e += 8192) {
          const f = jb.apply(null, ib(d, e, e + 8192));
          for (let g = 0; g < f.length; g++) b.push(f[g]);
        }
      else b.push(d);
    }
    return b;
  }

  function kb(a, b) {
    b = b || Math.random;
    for (let c = a.length - 1; 0 < c; c--) {
      const d = Math.floor(b() * (c + 1)),
        e = a[c];
      a[c] = a[d];
      a[d] = e;
    }
  }

  function lb(a) {
    lb[" "](a);
    return a;
  }
  lb[" "] = function () {};

  function mb(a, b) {
    try {
      return lb(a[b]), !0;
    } catch (c) {}
    return !1;
  }

  function nb(a, b) {
    var c = ob;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  }
  var pb = Pa(),
    qb = Qa(),
    rb = v("Edge"),
    sb = rb || qb,
    ub =
      v("Gecko") &&
      !(-1 != Oa().toLowerCase().indexOf("webkit") && !v("Edge")) &&
      !(v("Trident") || v("MSIE")) &&
      !v("Edge"),
    vb = -1 != Oa().toLowerCase().indexOf("webkit") && !v("Edge");

  function wb() {
    var a = u.document;
    return a ? a.documentMode : void 0;
  }
  var xb;
  a: {
    var yb = "",
      zb = (function () {
        var a = Oa();
        if (ub) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (rb) return /Edge\/([\d\.]+)/.exec(a);
        if (qb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (vb) return /WebKit\/(\S+)/.exec(a);
        if (pb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    zb && (yb = zb ? zb[1] : "");
    if (qb) {
      var Ab = wb();
      if (null != Ab && Ab > parseFloat(yb)) {
        xb = String(Ab);
        break a;
      }
    }
    xb = yb;
  }
  var Bb = xb,
    ob = {};

  function Cb(a) {
    return nb(a, function () {
      return 0 <= La(Bb, a);
    });
  }
  var Db;
  if (u.document && qb) {
    var Eb = wb();
    Db = Eb ? Eb : parseInt(Bb, 10) || void 0;
  } else Db = void 0;
  var Fb = Db;
  Ua();
  Ta();
  Sa();
  var Gb = {},
    Hb = null;

  function Ib(a, b) {
    void 0 === b && (b = 0);
    if (!Hb) {
      Hb = {};
      for (
        var c =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          d = ["+/=", "+/", "-_=", "-_.", "-_"],
          e = 0;
        5 > e;
        e++
      ) {
        var f = c.concat(d[e].split(""));
        Gb[e] = f;
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          void 0 === Hb[h] && (Hb[h] = g);
        }
      }
    }
    b = Gb[b];
    c = Array(Math.floor(a.length / 3));
    d = b[64] || "";
    for (e = f = 0; f < a.length - 2; f += 3) {
      var l = a[f],
        k = a[f + 1];
      h = a[f + 2];
      g = b[l >> 2];
      l = b[((l & 3) << 4) | (k >> 4)];
      k = b[((k & 15) << 2) | (h >> 6)];
      h = b[h & 63];
      c[e++] = g + l + k + h;
    }
    g = 0;
    h = d;
    switch (a.length - f) {
      case 2:
        (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
      case 1:
        (a = a[f]), (c[e] = b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
    }
    return c.join("");
  }

  function Jb(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      255 < e && ((b[c++] = e & 255), (e >>= 8));
      b[c++] = e;
    }
    return Ib(b, 3);
  }
  var Kb = "function" === typeof Uint8Array;
  const Lb = Symbol(void 0);

  function Mb(a) {
    Object.isFrozen(a) ||
      (Lb
        ? (a[Lb] |= 1)
        : void 0 !== a.j
        ? (a.j |= 1)
        : Object.defineProperties(a, {
            j: {
              value: 1,
              configurable: !0,
              writable: !0,
              enumerable: !1,
            },
          }));
    return a;
  }

  function Nb(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  let Ob;

  function Pb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (
          a &&
          !Array.isArray(a) &&
          Kb &&
          null != a &&
          a instanceof Uint8Array
        )
          return Ib(a);
    }
    return a;
  }

  function Qb(a, b) {
    if (null != a) {
      if (Array.isArray(a)) a = Rb(a, b);
      else if (Nb(a)) {
        const c = {};
        for (let d in a)
          Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Qb(a[d], b));
        a = c;
      } else a = b(a);
      return a;
    }
  }

  function Rb(a, b) {
    const c = a.slice();
    for (let d = 0; d < c.length; d++) c[d] = Qb(c[d], b);
    if ((b = Array.isArray(a))) {
      let d;
      Lb ? (d = a[Lb]) : (d = a.j);
      b = (null == d ? 0 : d) & 1;
    }
    b && Mb(c);
    return c;
  }

  function Sb(a) {
    if (a && "object" == typeof a && a.toJSON) return a.toJSON();
    a = Pb(a);
    return Array.isArray(a) ? Rb(a, Sb) : a;
  }

  function Tb(a) {
    return Kb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a;
  }
  let Ub;

  function Vb(a, b) {
    Ub = b;
    a = new a(b);
    Ub = null;
    return a;
  }

  function w(a, b, c) {
    var d = Ub;
    Ub = null;
    a || (a = d);
    d = this.constructor.messageId;
    a || (a = d ? [d] : []);
    this.C = (d ? 0 : -1) - (this.constructor.li || 0);
    this.j = void 0;
    this.A = a;
    a: {
      d = this.A.length;
      a = d - 1;
      if (d && ((d = this.A[a]), Nb(d))) {
        this.D = a - this.C;
        this.B = d;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.D = Math.max(b, a + 1 - this.C)), (this.B = void 0))
        : (this.D = Number.MAX_VALUE);
    }
    if (c)
      for (b = 0; b < c.length; b++)
        if (((a = c[b]), a < this.D))
          (a += this.C),
            (d = this.A[a]) ? Array.isArray(d) && Mb(d) : (this.A[a] = Wb);
        else {
          d = this.B || (this.B = this.A[this.D + this.C] = {});
          let e = d[a];
          e ? Array.isArray(e) && Mb(e) : (d[a] = Wb);
        }
  }
  const Wb = Object.freeze(Mb([]));

  function y(a, b, c = !1) {
    return -1 === b
      ? null
      : b >= a.D
      ? a.B
        ? a.B[b]
        : void 0
      : c && a.B && ((c = a.B[b]), null != c)
      ? c
      : a.A[b + a.C];
  }

  function Xb(a, b) {
    return null != y(a, b);
  }

  function Zb(a, b, c = !1) {
    let d = y(a, b, c);
    null == d && (d = Wb);
    d === Wb && ((d = Mb(d.slice())), z(a, b, d, c));
    return d;
  }

  function $b(a, b) {
    a = y(a, b);
    return null == a ? a : +a;
  }

  function A(a, b) {
    a = y(a, b);
    return null == a ? a : !!a;
  }

  function ac(a, b, c) {
    a = y(a, b);
    return null == a ? c : a;
  }

  function bc(a, b, c = !1) {
    a = A(a, b);
    return null == a ? c : a;
  }

  function z(a, b, c, d = !1) {
    b < a.D && !d
      ? (a.A[b + a.C] = c)
      : ((a.B || (a.B = a.A[a.D + a.C] = {}))[b] = c);
    return a;
  }

  function cc(a, b, c) {
    return z(a, b, null == c ? Mb([]) : Array.isArray(c) ? Mb(c) : c, !1);
  }

  function dc(a, b, c, d) {
    c !== d ? z(a, b, c) : z(a, b, void 0, !1);
    return a;
  }

  function ec(a, b, c, d) {
    (c = fc(a, c)) &&
      c !== b &&
      null != d &&
      (a.j && c in a.j && (a.j[c] = void 0), z(a, c, void 0));
    return z(a, b, d);
  }

  function fc(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
      const e = b[d];
      null != y(a, e) && (0 !== c && z(a, c, void 0, !1), (c = e));
    }
    return c;
  }

  function D(a, b, c, d, e = !1) {
    if (-1 === c) return null;
    a.j || (a.j = {});
    const f = a.j[c];
    if (f) return f;
    e = y(a, c, e);
    if (null == e && !d) return f;
    b = new b(e);
    return (a.j[c] = b);
  }

  function G(a, b, c, d = !1) {
    a.j || (a.j = {});
    let e = a.j[c];
    if (!e) {
      d = Zb(a, c, d);
      e = [];
      for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
      a.j[c] = e;
    }
    return e;
  }

  function gc(a, b, c) {
    a.j || (a.j = {});
    let d = c ? c.A : c;
    a.j[b] = c;
    return z(a, b, d, !1);
  }

  function hc(a, b, c, d) {
    a.j || (a.j = {});
    let e = d ? d.A : d;
    a.j[b] = d;
    return ec(a, b, c, e);
  }

  function ic(a, b, c) {
    let d;
    if (c) {
      d = Mb([]);
      for (let e = 0; e < c.length; e++) d[e] = c[e].A;
      a.j || (a.j = {});
      a.j[b] = c;
    } else a.j && (a.j[b] = void 0), (d = Wb);
    return z(a, b, d, !1);
  }
  w.prototype.toJSON = function () {
    const a = this.A;
    return Ob ? a : Rb(a, Sb);
  };

  function jc(a, b) {
    return Pb(b);
  }

  function kc(a) {
    Ob = !0;
    try {
      return JSON.stringify(a.toJSON(), jc);
    } finally {
      Ob = !1;
    }
  }

  function lc(a, b) {
    return Vb(a, b ? JSON.parse(b) : null);
  }

  function mc(a, b) {
    b.G && (a.G = b.G.slice());
    const c = b.j;
    if (c) {
      b = b.B;
      for (let f in c) {
        if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
        const g = c[f];
        if (g) {
          var d = !(!b || !b[f]),
            e = +f;
          if (Array.isArray(g)) {
            if (g.length)
              for (
                d = G(a, g[0].constructor, e, d), e = 0;
                e < Math.min(d.length, g.length);
                e++
              )
                mc(d[e], g[e]);
          } else (d = D(a, g.constructor, e, void 0, d)) && mc(d, g);
        }
      }
    }
  }

  function J(a, b) {
    return ac(a, b, "");
  }

  function nc(a, b, c, d) {
    c = fc(a, d) === c ? c : -1;
    return D(a, b, c);
  }

  function oc(a, b, c) {
    return dc(a, b, c, !1);
  }

  function pc(a, b) {
    return dc(a, b, 1, 0);
  }

  function qc(a, b) {
    this.j = (a === rc && b) || "";
    this.l = sc;
  }
  qc.prototype.ga = !0;
  qc.prototype.aa = function () {
    return this.j;
  };

  function tc(a) {
    return a instanceof qc && a.constructor === qc && a.l === sc
      ? a.j
      : "type_error:Const";
  }

  function vc(a) {
    return new qc(rc, a);
  }
  var sc = {},
    rc = {};
  var wc = vc("https://tpc.googlesyndication.com/sodar/%{basename}.js");

  function xc(a, b) {
    for (const c in a) b.call(void 0, a[c], c, a);
  }

  function yc(a, b) {
    const c = {};
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }

  function zc(a) {
    var b = Ac;
    a: {
      for (const c in b)
        if (b[c] == a) {
          a = !0;
          break a;
        }
      a = !1;
    }
    return a;
  }

  function Bc(a) {
    let b = 0;
    for (const c in a) b++;
  }

  function Cc(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  const Dc =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );

  function Ec(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < Dc.length; f++)
        (c = Dc[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Fc = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  var Gc;

  function Hc() {
    if (void 0 === Gc) {
      var a = null,
        b = u.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: ya,
            createScript: ya,
            createScriptURL: ya,
          });
        } catch (c) {
          u.console && u.console.error(c.message);
        }
        Gc = a;
      } else Gc = a;
    }
    return Gc;
  }
  const Ic = {};
  class Jc {
    constructor(a, b) {
      this.j = b === Ic ? a : "";
      this.ga = !0;
    }
    aa() {
      return this.j.toString();
    }
  }
  Jc.prototype.toString = function () {
    return this.j.toString();
  };
  var Lc = class {
    constructor(a, b) {
      this.j = b === Kc ? a : "";
    }
  };
  p = Lc.prototype;
  p.ga = !0;
  p.aa = function () {
    return this.j.toString();
  };
  p.cc = !0;
  p.Ea = function () {
    return 1;
  };

  function Mc(a, b) {
    a = Nc.exec(Oc(a).toString());
    var c = a[3] || "";
    return Pc(a[1] + Qc("?", a[2] || "", b) + Qc("#", c, void 0));
  }
  p.toString = function () {
    return this.j + "";
  };

  function Oc(a) {
    return a instanceof Lc && a.constructor === Lc
      ? a.j
      : "type_error:TrustedResourceUrl";
  }

  function Rc(a, b) {
    var c = tc(a);
    if (!Sc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(Tc, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e))
        throw Error(
          'Found marker, "' +
            e +
            '", in format string, "' +
            c +
            '", but no valid label mapping found in args: ' +
            JSON.stringify(b)
        );
      d = b[e];
      return d instanceof qc ? tc(d) : encodeURIComponent(String(d));
    });
    return Pc(a);
  }
  var Tc = /%{(\w+)}/g,
    Sc = RegExp(
      "^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)",
      "i"
    ),
    Nc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    Kc = {};

  function Pc(a) {
    const b = Hc();
    a = b ? b.createScriptURL(a) : a;
    return new Lc(a, Kc);
  }

  function Qc(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  var Vc = class {
    constructor(a, b) {
      this.j = b === Uc ? a : "";
    }
  };
  p = Vc.prototype;
  p.ga = !0;
  p.aa = function () {
    return this.j.toString();
  };
  p.cc = !0;
  p.Ea = function () {
    return 1;
  };
  p.toString = function () {
    return this.j.toString();
  };

  function Wc(a) {
    return a instanceof Vc && a.constructor === Vc ? a.j : "type_error:SafeUrl";
  }
  var Xc = RegExp(
      '^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',
      "i"
    ),
    Yc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

  function ad(a) {
    a = String(a);
    a = a.replace(/(%0A|%0D)/g, "");
    var b = a.match(Yc);
    return b && Xc.test(b[1]) ? new Vc(a, Uc) : null;
  }
  var bd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function cd(a) {
    a instanceof Vc ||
      ((a = "object" == typeof a && a.ga ? a.aa() : String(a)),
      (a = bd.test(a) ? new Vc(a, Uc) : ad(a)));
    return a || dd;
  }

  function ed(a, b) {
    if (a instanceof Vc) return a;
    a = "object" == typeof a && a.ga ? a.aa() : String(a);
    if (b && /^data:/i.test(a) && ((b = ad(a) || dd), b.aa() == a)) return b;
    bd.test(a) || (a = "about:invalid#zClosurez");
    return new Vc(a, Uc);
  }
  var Uc = {},
    dd = new Vc("about:invalid#zClosurez", Uc);
  const fd = {};

  function gd(a) {
    return a instanceof hd && a.constructor === hd
      ? a.j
      : "type_error:SafeStyle";
  }

  function id(a) {
    let b = "";
    for (let c in a)
      if (Object.prototype.hasOwnProperty.call(a, c)) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c))
          throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
        let d = a[c];
        null != d &&
          ((d = Array.isArray(d) ? d.map(jd).join(" ") : jd(d)),
          (b += `${c}:${d};`));
      }
    return b ? new hd(b, fd) : kd;
  }
  class hd {
    constructor(a, b) {
      this.j = b === fd ? a : "";
      this.ga = !0;
    }
    aa() {
      return this.j;
    }
    toString() {
      return this.j.toString();
    }
  }
  var kd = new hd("", fd);

  function jd(a) {
    if (a instanceof Vc)
      return (
        'url("' + Wc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
      );
    if (a instanceof qc) a = tc(a);
    else {
      a = String(a);
      var b = a.replace(ld, "$1").replace(ld, "$1").replace(md, "url");
      if (nd.test(b)) {
        if ((b = !od.test(a))) {
          let c = (b = !0);
          for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
          }
          b = b && c && pd(a);
        }
        a = b ? qd(a) : "zClosurez";
      } else a = "zClosurez";
    }
    if (/[{;}]/.test(a))
      throw new Ba("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }

  function pd(a) {
    let b = !0;
    const c = /^[-_a-zA-Z0-9]$/;
    for (let d = 0; d < a.length; d++) {
      const e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  const nd = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    md = RegExp(
      "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
      "g"
    ),
    ld = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    ),
    od = /\/\*/;

  function qd(a) {
    return a.replace(md, (b, c, d, e) => {
      let f = "";
      d = d.replace(/^(['"])(.*)\1$/, (g, h, l) => {
        f = h;
        return l;
      });
      b = cd(d).aa();
      return c + f + b + f + e;
    });
  }
  const rd = {};
  class sd {
    constructor(a, b) {
      this.j = b === rd ? a : "";
      this.ga = !0;
    }
    aa() {
      return this.j;
    }
  }
  sd.prototype.toString = function () {
    return this.j.toString();
  };
  const td = {};

  function ud(a) {
    return a instanceof vd && a.constructor === vd
      ? a.j
      : "type_error:SafeHtml";
  }

  function wd(a) {
    if (a instanceof vd) return a;
    const b = "object" == typeof a;
    let c = null;
    b && a.cc && (c = a.Ea());
    return xd(Da(b && a.ga ? a.aa() : String(a)), c);
  }

  function xd(a, b) {
    const c = Hc();
    a = c ? c.createHTML(a) : a;
    return new vd(a, b, td);
  }

  function yd(a) {
    if (!zd.test(a)) throw Error("");
    if (a.toUpperCase() in Ad) throw Error("");
  }

  function Bd(a, b, c) {
    var d = null;
    let e;
    e = `<${a}` + Cd(b);
    null == c ? (c = []) : Array.isArray(c) || (c = [c]);
    !0 === Fc[a.toLowerCase()]
      ? (e += ">")
      : ((d = Dd(c)),
        (e += ">" + ud(d).toString() + "</" + a + ">"),
        (d = d.Ea()));
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (d = 0) : (d = null));
    return xd(e, d);
  }

  function Ed(a) {
    const b = wd(Fd);
    let c = b.Ea();
    const d = [],
      e = (f) => {
        Array.isArray(f)
          ? f.forEach(e)
          : ((f = wd(f)),
            d.push(ud(f).toString()),
            (f = f.Ea()),
            0 == c ? (c = f) : 0 != f && c != f && (c = null));
      };
    a.forEach(e);
    return xd(d.join(ud(b).toString()), c);
  }

  function Dd(a) {
    return Ed(Array.prototype.slice.call(arguments));
  }

  function Cd(a) {
    var b = "";
    if (a)
      for (let e in a)
        if (Object.prototype.hasOwnProperty.call(a, e)) {
          if (!zd.test(e)) throw Error("");
          var c = a[e];
          if (null != c) {
            var d = e;
            if (c instanceof qc) c = tc(c);
            else if ("style" == d.toLowerCase()) {
              if (!la(c)) throw Error("");
              c instanceof hd || (c = id(c));
              c = gd(c);
            } else {
              if (/^on/i.test(d)) throw Error("");
              if (d.toLowerCase() in Gd)
                if (c instanceof Lc) c = Oc(c).toString();
                else if (c instanceof Vc) c = Wc(c);
                else if ("string" === typeof c) c = cd(c).aa();
                else throw Error("");
            }
            c.ga && (c = c.aa());
            d = `${d}="` + Da(String(c)) + '"';
            b += " " + d;
          }
        }
    return b;
  }
  class vd {
    constructor(a, b, c) {
      this.j = c === td ? a : "";
      this.l = b;
      this.ga = this.cc = !0;
    }
    Ea() {
      return this.l;
    }
    aa() {
      return this.j.toString();
    }
    toString() {
      return this.j.toString();
    }
  }
  const zd = /^[a-zA-Z0-9-]+$/,
    Gd = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    Ad = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    };
  var Hd = xd("<!DOCTYPE html>", 0),
    Fd = new vd((u.trustedTypes && u.trustedTypes.emptyHTML) || "", 0, td),
    Id = xd("<br>", 0);
  /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
  function Jd() {
    var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
    return null !== a && void 0 !== a ? a : null;
  }
  let Kd;

  function Ld() {
    var a, b;
    if (void 0 === Kd)
      try {
        Kd =
          null !==
            (b =
              null === (a = Jd()) || void 0 === a
                ? void 0
                : a.createPolicy("google#safe", {
                    createHTML: (c) => c,
                    createScript: (c) => c,
                    createScriptURL: (c) => c,
                  })) && void 0 !== b
            ? b
            : null;
      } catch (c) {
        Kd = null;
      }
    return Kd;
  }
  var Md = class {};
  class Nd extends Md {
    constructor(a) {
      super();
      this.j = a;
    }
    toString() {
      return this.j.toString();
    }
  }

  function Od(a) {
    var b;
    const c =
      null === (b = Ld()) || void 0 === b ? void 0 : b.createScriptURL(a);
    return new Nd(null !== c && void 0 !== c ? c : a);
  }

  function Pd(a) {
    if (a instanceof Nd) return a.j;
    throw Error("");
  }

  function Qd(a) {
    var b;
    a = Pd(a);
    return (null === (b = Jd()) || void 0 === b ? 0 : b.isScriptURL(a))
      ? TrustedScriptURL.prototype.toString.apply(a)
      : a;
  }
  var Rd = class {};
  class Sd extends Rd {
    constructor(a) {
      super();
      this.l = a;
    }
    toString() {
      return this.l.toString();
    }
  }

  function Td(a) {
    var b,
      c = null === (b = Ld()) || void 0 === b ? void 0 : b.createScript(a);
    return new Sd(null !== c && void 0 !== c ? c : a);
  }
  var Ud = class {};
  class Wd extends Ud {
    constructor(a) {
      super();
      this.j = a;
    }
    toString() {
      return this.j;
    }
  }
  var Xd = new Wd("about:invalid#zTSz");

  function Yd(a) {
    return a instanceof Md ? Pd(a) : Oc(a);
  }

  function Zd(a) {
    if (a instanceof Ud)
      if (a instanceof Wd) a = a.j;
      else throw Error("");
    else a = Wc(a);
    return a;
  }

  function $d(a) {
    return Pc(Yd(a).toString());
  }

  function ae(a, b) {
    a.href = Zd(b);
  }

  function be(a, b) {
    if (null !== a && void 0 !== a.tagName) {
      if ("script" === a.tagName.toLowerCase())
        throw Error("Use setTextContent with a SafeScript.");
      if ("style" === a.tagName.toLowerCase())
        throw Error("Use setTextContent with a SafeStyleSheet.");
    }
    a.innerHTML = ud(b);
  }

  function ce(a, b) {
    a.style.cssText = gd(b);
  }

  function de(a, b) {
    a.src = Zd(b);
  }
  const ee =
    "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
      " "
    );

  function fe(a) {
    var b;
    const c = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
        .document,
      d =
        null === (b = c.querySelector) || void 0 === b
          ? void 0
          : b.call(c, "script[nonce]");
    (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") &&
      a.setAttribute("nonce", b);
  }

  function ge(a, b) {
    if (b instanceof Rd)
      if (b instanceof Sd) b = b.l;
      else throw Error("");
    else
      b =
        b instanceof Jc && b.constructor === Jc ? b.j : "type_error:SafeScript";
    a.textContent = b;
    fe(a);
  }

  function he(a, b) {
    a.src = Yd(b);
    fe(a);
  }

  function ie() {
    return !1;
  }

  function je() {
    return !0;
  }

  function ke(a) {
    const b = arguments,
      c = b.length;
    return function () {
      for (let d = 0; d < c; d++) if (!b[d].apply(this, arguments)) return !1;
      return !0;
    };
  }

  function le(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }

  function me(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }

  function ne(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }

  function oe(a, b) {
    let c = 0;
    return function (d) {
      u.clearTimeout(c);
      const e = arguments;
      c = u.setTimeout(function () {
        a.apply(b, e);
      }, 63);
    };
  }

  function pe(a, b) {
    function c() {
      e = u.setTimeout(d, 63);
      let h = g;
      g = [];
      a.apply(b, h);
    }

    function d() {
      e = 0;
      f && ((f = !1), c());
    }
    let e = 0,
      f = !1,
      g = [];
    return function (h) {
      g = arguments;
      e ? (f = !0) : c();
    };
  }
  var qe = {
      passive: !0,
    },
    re = me(function () {
      let a = !1;
      try {
        const b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        u.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    });

  function se(a) {
    return a ? (a.passive && re() ? a : a.capture || !1) : !1;
  }

  function K(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, se(d)), !0) : !1;
  }

  function te(a, b, c, d) {
    return a.removeEventListener
      ? (a.removeEventListener(b, c, se(d)), !0)
      : !1;
  }

  function ue(a) {
    var b = window;
    new Promise((c, d) => {
      function e() {
        var g;
        f.onload = null;
        f.onerror = null;
        null === (g = f.parentElement) || void 0 === g
          ? void 0
          : g.removeChild(f);
      }
      const f = b.document.createElement("script");
      f.onload = () => {
        e();
        c();
      };
      f.onerror = () => {
        e();
        d(void 0);
      };
      f.type = "text/javascript";
      he(f, a);
      "complete" !== b.document.readyState
        ? K(b, "load", () => {
            b.document.body.appendChild(f);
          })
        : b.document.body.appendChild(f);
    });
  }
  async function ve(a) {
    var b =
      "https://pagead2.googlesyndication.com/getconfig/sodar" +
      `?sv=${200}&tid=${a.j}` +
      `&tv=${a.l}&st=` +
      `${a.Ma}`;
    let c = void 0;
    try {
      c = await we(b);
    } catch (g) {}
    if (c) {
      b = a.Ya || c.sodar_query_id;
      var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
        e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
        f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
      if (b && c.bg_hash_basename && c.bg_binary)
        return {
          context: a.B,
          Jd: c.bg_hash_basename,
          Id: c.bg_binary,
          ee: a.j + "_" + a.l,
          Ya: b,
          Ma: a.Ma,
          Db: d,
          Jb: e,
          Bb: f,
        };
    }
  }
  let we = (a) =>
    new Promise((b, c) => {
      const d = new XMLHttpRequest();
      d.onreadystatechange = () => {
        d.readyState === d.DONE &&
          (200 <= d.status && 300 > d.status
            ? b(JSON.parse(d.responseText))
            : c());
      };
      d.open("GET", a, !0);
      d.send();
    });
  async function xe(a) {
    var b = await ve(a);
    if (b) {
      a = window;
      let c = a.GoogleGcLKhOms;
      (c && "function" === typeof c.push) || (c = a.GoogleGcLKhOms = []);
      c.push({
        _ctx_: b.context,
        _bgv_: b.Jd,
        _bgp_: b.Id,
        _li_: b.ee,
        _jk_: b.Ya,
        _st_: b.Ma,
        _rc_: b.Db,
        _dl_: b.Jb,
        _g2_: b.Bb,
      });
      if ((b = a.GoogleDX5YKUSk)) (a.GoogleDX5YKUSk = void 0), b[1]();
      a = Rc(wc, {
        basename: "sodar2",
      });
      ue(a);
    }
  }

  function ye(a, b) {
    return gc(a, 5, b);
  }

  function ze(a, b) {
    return dc(a, 3, b, "");
  }
  var Ae = class extends w {
    constructor() {
      super(void 0);
    }
  };

  function Be(a, b) {
    return dc(a, 1, b, "");
  }
  var Ce = class extends w {
    constructor(a) {
      super(a);
    }
  };

  function De(a) {
    switch (a) {
      case 1:
        return "gda";
      case 2:
        return "gpt";
      case 3:
        return "ima";
      case 4:
        return "pal";
      case 5:
        return "xfad";
      case 6:
        return "dv3n";
      case 7:
        return "spa";
      default:
        return "unk";
    }
  }
  var Ee = class {
      constructor(a) {
        this.j = a.l;
        this.l = a.A;
        this.B = a.B;
        this.Ya = a.Ya;
        this.win = a.N();
        this.Ma = a.Ma;
        this.Db = a.Db;
        this.Jb = a.Jb;
        this.Bb = a.Bb;
        this.A = a.j;
      }
    },
    Fe = class {
      constructor(a, b, c) {
        this.l = a;
        this.A = b;
        this.B = c;
        this.win = window;
        this.Ma = "env";
        this.Db = "n";
        this.Jb = "0";
        this.Bb = "1";
        this.j = !0;
      }
      N() {
        return this.win;
      }
      build() {
        return new Ee(this);
      }
    };
  var He = class extends w {
      constructor(a) {
        super(a, -1, Ge);
      }
    },
    Ge = [2, 3];

  function Ie(a, b) {
    return z(a, 1, b);
  }

  function Je(a, b) {
    return z(a, 2, b);
  }

  function Ke(a, b) {
    return z(a, 3, b);
  }

  function Le(a, b) {
    return z(a, 4, b);
  }
  var Me = class extends w {
    constructor() {
      super(void 0);
    }
    getVersion() {
      return y(this, 5);
    }
  };
  var Ne = document,
    Oe = window;
  var Pe = {
    Pe: "google_adtest",
    Te: "google_ad_client",
    Ue: "google_ad_format",
    We: "google_ad_height",
    kf: "google_ad_width",
    $e: "google_ad_layout",
    bf: "google_ad_layout_key",
    cf: "google_ad_output",
    df: "google_ad_region",
    gf: "google_ad_slot",
    hf: "google_ad_type",
    jf: "google_ad_url",
    lf: "google_allow_expandable_ads",
    Af: "google_analytics_domain_name",
    Bf: "google_analytics_uacct",
    Pf: "google_container_id",
    Zf: "google_gl",
    sg: "google_enable_ose",
    Cg: "google_full_width_responsive",
    Bh: "google_rl_filtering",
    Ah: "google_rl_mode",
    Ch: "google_rt",
    zh: "google_rl_dest_url",
    hh: "google_max_radlink_len",
    mh: "google_num_radlinks",
    oh: "google_num_radlinks_per_unit",
    Se: "google_ad_channel",
    gh: "google_max_num_ads",
    ih: "google_max_responsive_height",
    Kf: "google_color_border",
    rg: "google_enable_content_recommendations",
    Wf: "google_content_recommendation_ui_type",
    Vf: "google_source_type",
    Uf: "google_content_recommendation_rows_num",
    Tf: "google_content_recommendation_columns_num",
    Sf: "google_content_recommendation_ad_positions",
    Xf: "google_content_recommendation_use_square_imgs",
    Mf: "google_color_link",
    Lf: "google_color_line",
    Of: "google_color_url",
    Qe: "google_ad_block",
    ff: "google_ad_section",
    Re: "google_ad_callback",
    Hf: "google_captcha_token",
    Nf: "google_color_text",
    yf: "google_alternate_ad_url",
    Ze: "google_ad_host_tier_id",
    If: "google_city",
    Xe: "google_ad_host",
    Ye: "google_ad_host_channel",
    zf: "google_alternate_color",
    Jf: "google_color_bg",
    tg: "google_encoding",
    Ag: "google_font_face",
    bg: "google_cust_ch",
    eg: "google_cust_job",
    dg: "google_cust_interests",
    cg: "google_cust_id",
    fg: "google_cust_u_url",
    Eg: "google_hints",
    Tg: "google_image_size",
    jh: "google_mtl",
    bi: "google_cpm",
    Rf: "google_contents",
    lh: "google_native_settings_key",
    Yf: "google_country",
    Uh: "google_targeting",
    Bg: "google_font_size",
    ig: "google_disable_video_autoplay",
    gi: "google_video_product_type",
    fi: "google_video_doc_id",
    ei: "google_cust_gender",
    Qh: "google_cust_lh",
    Ph: "google_cust_l",
    ai: "google_tfs",
    kh: "google_native_ad_template",
    Yg: "google_kw",
    Rh: "google_tag_for_child_directed_treatment",
    Sh: "google_tag_for_under_age_of_consent",
    Eh: "google_region",
    ag: "google_cust_criteria",
    ef: "google_safe",
    $f: "google_ctr_threshold",
    Fh: "google_resizing_allowed",
    Hh: "google_resizing_width",
    Gh: "google_resizing_height",
    di: "google_cust_age",
    LANGUAGE: "google_language",
    Zg: "google_kw_type",
    uh: "google_pucrd",
    th: "google_page_url",
    Th: "google_tag_partner",
    Lh: "google_restrict_data_processing",
    Me: "google_adbreak_test",
    Ve: "google_ad_frequency_hint",
    Ne: "google_admob_interstitial_slot",
    Oe: "google_admob_rewarded_slot",
    fh: "google_max_ad_content_rating",
    yh: "google_ad_public_floor",
    wh: "google_ad_private_floor",
  };
  var Qe = me(function () {
    var a = document.createElement("div"),
      b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = ud(Fd);
    return !b.parentElement;
  });

  function Re(a, b) {
    if (Qe()) for (; a.lastChild; ) a.removeChild(a.lastChild);
    a.innerHTML = ud(b);
  }

  function Se(a, b) {
    b = b instanceof Vc ? b : ed(b, /^data:image\//i.test(b));
    a.src = Wc(b);
  }
  var Te = /^[\w+/_-]+[=]{0,2}$/;

  function Ue() {
    var a = u.document;
    return a.querySelector
      ? (a = a.querySelector("script[nonce]")) &&
        (a = a.nonce || a.getAttribute("nonce")) &&
        Te.test(a)
        ? a
        : ""
      : "";
  }

  function Ve(a, b, c) {
    return Math.min(Math.max(a, b), c);
  }

  function We(a) {
    return Array.prototype.reduce.call(
      arguments,
      function (b, c) {
        return b + c;
      },
      0
    );
  }

  function Xe(a) {
    return We.apply(null, arguments) / arguments.length;
  }

  function Ye(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  }
  Ye.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Ye.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Ye.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };

  function Ze(a, b) {
    this.width = a;
    this.height = b;
  }
  p = Ze.prototype;
  p.aspectRatio = function () {
    return this.width / this.height;
  };
  p.isEmpty = function () {
    return !(this.width * this.height);
  };
  p.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  p.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  p.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };

  function $e(a) {
    return (a = Da(a, void 0));
  }

  function af(a, b) {
    const c = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
    };
    let d;
    d = b ? b.createElement("div") : u.document.createElement("div");
    return a.replace(bf, function (e, f) {
      var g = c[e];
      if (g) return g;
      "#" == f.charAt(0) &&
        ((f = Number("0" + f.substr(1))),
        isNaN(f) || (g = String.fromCharCode(f)));
      g ||
        ((g = xd(e + " ", null)),
        Re(d, g),
        (g = d.firstChild.nodeValue.slice(0, -1)));
      return (c[e] = g);
    });
  }
  var bf = /&([^;\s<&]+);?/g;

  function cf() {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ va()).toString(36)
    );
  }

  function df(a) {
    let b = 0;
    for (let c = 0; c < a.length; ++c) b = (31 * b + a.charCodeAt(c)) >>> 0;
    return b;
  }

  function ef(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }

  function ff(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }

  function gf(a) {
    return a ? new hf(jf(a)) : Aa || (Aa = new hf());
  }

  function kf(a, b) {
    xc(b, function (c, d) {
      c && "object" == typeof c && c.ga && (c = c.aa());
      "style" == d
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : lf.hasOwnProperty(d)
        ? a.setAttribute(lf[d], c)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  }
  var lf = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };

  function mf(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Ze(a.clientWidth, a.clientHeight);
  }

  function nf(a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : vb || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return qb && Cb("10") && a.pageYOffset != b.scrollTop
      ? new Ye(b.scrollLeft, b.scrollTop)
      : new Ye(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  }

  function of(a) {
    return a ? a.parentWindow || a.defaultView : window;
  }

  function pf(a, b, c, d) {
    function e(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (; d < c.length; d++) {
      var f = c[d];
      if (!ka(f) || (la(f) && 0 < f.nodeType)) e(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (la(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        Ya(g ? gb(f) : f, e);
      }
    }
  }

  function qf(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }

  function rf(a) {
    var b,
      c = arguments.length;
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      e = Infinity;
    for (b = 0; b < c; b++) {
      for (var f = [], g = arguments[b]; g; ) f.unshift(g), (g = g.parentNode);
      d.push(f);
      e = Math.min(e, f.length);
    }
    f = null;
    for (b = 0; b < e; b++) {
      g = d[0][b];
      for (var h = 1; h < c; h++) if (g != d[h][b]) return f;
      f = g;
    }
    return f;
  }

  function jf(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  var sf = {
      SCRIPT: 1,
      STYLE: 1,
      HEAD: 1,
      IFRAME: 1,
      OBJECT: 1,
    },
    tf = {
      IMG: " ",
      BR: "\n",
    };

  function uf(a) {
    var b = [];
    vf(a, b, !0);
    a = b.join("");
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    a = a.replace(/ +/g, " ");
    " " != a && (a = a.replace(/^\s*/, ""));
    return a;
  }

  function vf(a, b, c) {
    if (!(a.nodeName in sf))
      if (3 == a.nodeType)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : b.push(a.nodeValue);
      else if (a.nodeName in tf) b.push(tf[a.nodeName]);
      else for (a = a.firstChild; a; ) vf(a, b, c), (a = a.nextSibling);
  }

  function wf(a, b, c, d) {
    if (!b && !c) return null;
    var e = b ? String(b).toUpperCase() : null;
    return xf(
      a,
      function (f) {
        return (
          (!e || f.nodeName == e) &&
          (!c ||
            ("string" === typeof f.className &&
              db(f.className.split(/\s+/), c)))
        );
      },
      d
    );
  }

  function xf(a, b, c) {
    for (var d = 0; a && (null == c || d <= c); ) {
      if (b(a)) return a;
      a = a.parentNode;
      d++;
    }
    return null;
  }

  function hf(a) {
    this.j = a || u.document || document;
  }
  p = hf.prototype;
  p.getElementsByTagName = function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  };
  p.Ca = function (a, b, c) {
    var d = this.j,
      e = arguments,
      f = e[1],
      g = qf(d, String(e[0]));
    f &&
      ("string" === typeof f
        ? (g.className = f)
        : Array.isArray(f)
        ? (g.className = f.join(" "))
        : kf(g, f));
    2 < e.length && pf(d, g, e, 2);
    return g;
  };

  function yf(a, b) {
    return qf(a.j, b);
  }
  p.N = function () {
    var a = this.j;
    return a.parentWindow || a.defaultView;
  };
  p.appendChild = function (a, b) {
    a.appendChild(b);
  };
  p.append = function (a, b) {
    pf(jf(a), a, arguments, 1);
  };
  p.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  p.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  p.Vd = rf;

  function zf() {
    return (
      !(v("iPad") || (v("Android") && !v("Mobile")) || v("Silk")) &&
      (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    );
  }
  var Af = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );

  function Bf(a) {
    return a ? decodeURI(a) : a;
  }

  function Cf(a) {
    try {
      return !!a && null != a.location.href && mb(a, "foo");
    } catch (b) {
      return !1;
    }
  }

  function Df(a, b = !1, c = !1, d = u) {
    c = c ? Ef(d) : d;
    for (d = 0; c && 40 > d++ && ((!b && !Cf(c)) || !a(c)); ) c = Ef(c);
  }

  function Ef(a) {
    try {
      const b = a.parent;
      if (b && b != a) return b;
    } catch (b) {}
    return null;
  }

  function Ff(a) {
    return Cf(a.top) ? a.top : null;
  }

  function Gf(a, b) {
    const c = Hf("SCRIPT", a);
    he(c, b);
    (a = a.getElementsByTagName("script")[0]) &&
      a.parentNode &&
      a.parentNode.insertBefore(c, a);
  }

  function If(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }

  function Lf() {
    if (!ea.globalThis.crypto) return Math.random();
    try {
      const a = new Uint32Array(1);
      ea.globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch (a) {
      return Math.random();
    }
  }

  function Mf(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }

  function Nf(a) {
    const b = [];
    Mf(a, function (c) {
      b.push(c);
    });
    return b;
  }

  function Of(a) {
    const b = a.length;
    if (0 == b) return 0;
    let c = 305419896;
    for (let d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var Qf = me(
    () =>
      cb(
        [
          "Google Web Preview",
          "Mediapartners-Google",
          "Google-Read-Aloud",
          "Google-Adwords",
        ],
        Pf
      ) || 1e-4 > Math.random()
  );
  const Pf = (a) => -1 != Oa().indexOf(a);
  var Rf = /^([0-9.]+)px$/,
    Sf = /^(-?[0-9.]{1,30})$/;

  function Tf(a, b = null) {
    if (!Sf.test(a)) return b;
    a = Number(a);
    return isNaN(a) ? b : a;
  }

  function Uf(a) {
    return /^true$/.test(a);
  }

  function Vf(a) {
    return (a = Rf.exec(a)) ? +a[1] : null;
  }

  function Wf() {
    var a = u.document.URL;
    if (!a) return "";
    const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
    try {
      const c = b.exec(decodeURIComponent(a));
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
    } catch (c) {}
    return "";
  }
  var Xf = {
    mf: "allow-forms",
    nf: "allow-modals",
    pf: "allow-orientation-lock",
    qf: "allow-pointer-lock",
    rf: "allow-popups",
    sf: "allow-popups-to-escape-sandbox",
    tf: "allow-presentation",
    uf: "allow-same-origin",
    vf: "allow-scripts",
    wf: "allow-top-navigation",
    xf: "allow-top-navigation-by-user-activation",
  };
  const Yf = me(() => Nf(Xf));

  function Zf() {
    var a = [
      "allow-top-navigation",
      "allow-modals",
      "allow-orientation-lock",
      "allow-presentation",
      "allow-pointer-lock",
    ];
    const b = Yf();
    return a.length ? $a(b, (c) => !db(a, c)) : b;
  }

  function $f() {
    const a = Hf("IFRAME"),
      b = {};
    Ya(Yf(), (c) => {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  }
  var ag = (a, b) => {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch (c) {
        return !1;
      }
    },
    bg = (a, b) => {
      for (let c = 0; 50 > c; ++c) {
        if (ag(a, b)) return a;
        if (!(a = Ef(a))) break;
      }
      return null;
    },
    L = (a, b) => {
      Mf(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    },
    cg = {
      ["http://googleads.g.doubleclick.net"]: !0,
      ["http://pagead2.googlesyndication.com"]: !0,
      ["https://googleads.g.doubleclick.net"]: !0,
      ["https://pagead2.googlesyndication.com"]: !0,
    },
    dg = /\.proxy\.googleprod\.com(:\d+)?$/;
  const eg = /.*domain\.test$/,
    fg = /\.prod\.google\.com(:\d+)?$/;
  var gg = (a) => !!cg[a] || dg.test(a) || eg.test(a) || fg.test(a);
  let hg = [];
  const ig = () => {
    const a = hg;
    hg = [];
    for (const b of a)
      try {
        b();
      } catch (c) {}
  };
  var jg = (a, b) => {
    if ("number" !== typeof a.goog_pvsid)
      try {
        Object.defineProperty(a, "goog_pvsid", {
          value: Math.floor(Math.random() * 2 ** 52),
          configurable: !1,
        });
      } catch (c) {
        b && b.ua(784, c);
      }
    a = Number(a.goog_pvsid);
    b && (!a || 0 >= a) && b.ua(784, Error(`Invalid correlator, ${a}`));
    return a || -1;
  };

  function kg(a, b, c, d = []) {
    const e = new a.MutationObserver((f) => {
      for (const g of f)
        for (const h of g.removedNodes)
          if (d && (h === b || rf(h, b))) {
            for (const l of d) l.disconnect();
            d.length = 0;
            c();
            return;
          }
    });
    d.push(e);
    e.observe(a.document.documentElement, {
      childList: !0,
      subtree: !0,
    });
    Df(
      (f) => {
        if (!f.parent || !Cf(f.parent)) return !1;
        const g = f.parent.document.getElementsByTagName("iframe");
        for (let k = 0; k < g.length; k++)
          try {
            a: {
              var h = g[k];
              try {
                var l =
                  h.contentWindow ||
                  (h.contentDocument ? of(h.contentDocument) : null);
                break a;
              } catch (m) {}
              l = null;
            }
            if (l == f) {
              kg(f.parent, g[k], c, d);
              break;
            }
          } catch (m) {}
        return !1;
      },
      !1,
      !1,
      a
    );
  }
  var lg = (a, b) => {
      kg(of(jf(a)), a, b);
    },
    mg = (a, b) => {
      "complete" === a.document.readyState
        ? (hg.push(b),
          1 == hg.length &&
            (window.Promise
              ? Promise.resolve().then(ig)
              : window.setImmediate
              ? setImmediate(ig)
              : setTimeout(ig, 0)))
        : a.addEventListener("load", b);
    },
    ng = (a, b) => {
      const c = Hf("DIV");
      c.id = a;
      c.textContent = b;
      L(c, {
        height: "24px",
        "line-height": "24px",
        "text-align": "center",
        "vertical-align": "middle",
        color: "white",
        "background-color": "black",
        margin: "0",
        "font-family": "Roboto",
        "font-style": "normal",
        "font-weight": "500",
        "font-size": "11px",
        "letter-spacing": "0.08em",
      });
      return c;
    },
    og = (a, b) =>
      new Promise((c) => {
        setTimeout(() => void c(b), a);
      });

  function pg(a) {
    if ("localhost" === a) return ["localhost"];
    a = a.split(".");
    if (2 > a.length) return [];
    const b = [];
    for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
    return b;
  }

  function Hf(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  var qg = (a) => {
    let b = a;
    for (; a && a != a.parent; ) (a = a.parent), Cf(a) && (b = a);
    return b;
  };

  function rg(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  p = rg.prototype;
  p.getWidth = function () {
    return this.right - this.left;
  };
  p.getHeight = function () {
    return this.bottom - this.top;
  };

  function sg(a) {
    return new rg(a.top, a.right, a.bottom, a.left);
  }
  p.contains = function (a) {
    return this && a
      ? a instanceof rg
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };

  function tg(a, b) {
    return (
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
    );
  }
  p.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  p.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  p.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };

  function ug(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  }

  function vg(a, b) {
    var c = Math.max(a.left, b.left),
      d = Math.min(a.left + a.width, b.left + b.width);
    if (c <= d) {
      var e = Math.max(a.top, b.top);
      a = Math.min(a.top + a.height, b.top + b.height);
      if (e <= a) return new ug(c, e, d - c, a - e);
    }
    return null;
  }

  function wg(a, b) {
    var c = vg(a, b);
    if (!c || !c.height || !c.width)
      return [new ug(a.left, a.top, a.width, a.height)];
    c = [];
    var d = a.top,
      e = a.height,
      f = a.left + a.width,
      g = a.top + a.height,
      h = b.left + b.width,
      l = b.top + b.height;
    b.top > a.top &&
      (c.push(new ug(a.left, a.top, a.width, b.top - a.top)),
      (d = b.top),
      (e -= b.top - a.top));
    l < g && (c.push(new ug(a.left, l, a.width, g - l)), (e = l - d));
    b.left > a.left && c.push(new ug(a.left, d, b.left - a.left, e));
    h < f && c.push(new ug(h, d, f - h, e));
    return c;
  }
  ug.prototype.contains = function (a) {
    return a instanceof Ye
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  ug.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  ug.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  ug.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  const xg = {
    "AMP-CAROUSEL": "ac",
    "AMP-FX-FLYING-CARPET": "fc",
    "AMP-LIGHTBOX": "lb",
    "AMP-STICKY-AD": "sa",
  };

  function yg(a = u) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (c) {}
    try {
      if (b && b.pageViewId && b.canonicalUrl) return b;
    } catch (c) {}
    return null;
  }

  function zg() {
    const a = yg();
    return a && a.initialIntersection;
  }

  function Ag() {
    const a = zg();
    return a && la(a.rootBounds)
      ? new Ze(a.rootBounds.width, a.rootBounds.height)
      : null;
  }

  function Bg(a) {
    return (a = a || yg()) ? (Cf(a.master) ? a.master : null) : null;
  }

  function Cg(a, b) {
    const c = (a.ampInaboxIframes = a.ampInaboxIframes || []);
    let d = () => {},
      e = () => {};
    b &&
      (c.push(b),
      (e = () => {
        a.AMP &&
          a.AMP.inaboxUnregisterIframe &&
          a.AMP.inaboxUnregisterIframe(b);
        eb(c, b);
        d();
      }));
    if (a.ampInaboxInitialized) return e;
    a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
    const f = (g) => {
      if (a.ampInaboxInitialized) g = !0;
      else {
        var h,
          l = "amp-ini-load" === g.data;
        a.ampInaboxPendingMessages &&
          !l &&
          (h = /^amp-(\d{15,20})?/.exec(g.data)) &&
          (a.ampInaboxPendingMessages.push(g),
          (g = h[1]),
          a.ampInaboxInitialized ||
            (g && !/^\d{15,20}$/.test(g)) ||
            a.document.querySelector('script[src$="amp4ads-host-v0.js"]') ||
            Gf(
              a.document,
              g
                ? Rc(
                    vc(
                      "https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"
                    ),
                    {
                      ampVersion: g,
                    }
                  )
                : Pc(tc(vc("https://cdn.ampproject.org/amp4ads-host-v0.js")))
            ));
        g = !1;
      }
      g && d();
    };
    c.google_amp_listener_added ||
      ((c.google_amp_listener_added = !0),
      K(a, "message", f),
      (d = () => {
        te(a, "message", f);
      }));
    return e;
  }

  function Dg(a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    const c = Hf("IMG", a.document);
    c.src = b;
    a.google_image_requests.push(c);
  }
  var Fg = (a, b) => {
      let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
      Mf(a, (d, e) => {
        d && (c += `&${e}=${encodeURIComponent(d)}`);
      });
      Eg(c);
    },
    Eg = (a) => {
      var b = window;
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : Dg(b, a);
    };
  class Gg {
    constructor(a) {
      this.ce = a;
    }
  }

  function Hg(a) {
    return new Gg((b) => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const Ig = [
    Hg("data"),
    Hg("http"),
    Hg("https"),
    Hg("mailto"),
    Hg("ftp"),
    new Gg((a) => /^[^:]*([/?#]|$)/.test(a)),
  ];

  function Jg(a = Ig) {
    for (let b = 0; b < a.length; ++b) {
      const c = a[b];
      if (c instanceof Gg && c.ce("#")) return new Wd("#");
    }
  }

  function N(a, ...b) {
    if (0 === b.length) return Od(a[0]);
    const c = [a[0]];
    for (let d = 0; d < b.length; d++)
      c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return Od(c.join(""));
  }

  function Kg(a, b) {
    let c = Qd(a);
    if (/#/.test(c)) throw Error("");
    let d = /\?/.test(c) ? "&" : "?";
    b.forEach((e, f) => {
      e = e instanceof Array ? e : [e];
      for (let g = 0; g < e.length; g++) {
        const h = e[g];
        null !== h &&
          void 0 !== h &&
          ((c +=
            d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h))),
          (d = "&"));
      }
    });
    return Od(c);
  }

  function Lg(a) {
    return Td(a[0]);
  }

  function Mg(a) {
    return (...b) => {
      b = b.map((c) => Td(JSON.stringify(c).replace(/</g, "\\x3c")).toString());
      return Td(`(${a.join("")})(${b.join(",")})`);
    };
  }

  function Ng(a, b, c) {
    if ("string" === typeof b) (b = Og(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = Og(c, d);
        f && (c.style[f] = e);
      }
  }
  var Pg = {};

  function Og(a, b) {
    var c = Pg[b];
    if (!c) {
      var d = ef(b);
      c = d;
      void 0 === a.style[d] &&
        ((d = (vb ? "Webkit" : ub ? "Moz" : qb ? "ms" : null) + ff(d)),
        void 0 !== a.style[d] && (c = d));
      Pg[b] = c;
    }
    return c;
  }

  function Qg(a, b) {
    var c = jf(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ""
      : "";
  }

  function Rg(a, b) {
    return (
      Qg(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  }

  function Sg(a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      };
    }
  }

  function Tg(a) {
    var b = jf(a),
      c = new Ye(0, 0);
    var d = b ? jf(b) : document;
    d =
      !qb || 9 <= Number(Fb) || "CSS1Compat" == gf(d).j.compatMode
        ? d.documentElement
        : d.body;
    if (a == d) return c;
    a = Sg(a);
    b = nf(gf(b).j);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  }

  function Ug(a) {
    var b = Vg;
    if ("none" != Rg(a, "display")) return b(a);
    var c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  }

  function Vg(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = vb && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect
      ? ((a = Sg(a)), new Ze(a.right - a.left, a.bottom - a.top))
      : new Ze(b, c);
  }

  function Wg(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
      d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    b = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return +b;
  }

  function Xg(a, b) {
    return (b = a.currentStyle ? a.currentStyle[b] : null) ? Wg(a, b) : 0;
  }
  var Yg = {
    thin: 2,
    medium: 4,
    thick: 6,
  };

  function Zg(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
      return 0;
    b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return b in Yg ? Yg[b] : Wg(a, b);
  }
  var $g = (a) => "number" === typeof a && 0 < a,
    bh = (a, b) => {
      a = ah(a);
      if (!a) return b;
      const c = b.slice(-1);
      return b + ("?" === c || "#" === c ? "" : "&") + a;
    },
    ah = (a) =>
      Object.entries(ch(a))
        .map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`)
        .join("&"),
    ch = (a) => {
      const b = {};
      Mf(a, (c, d) => {
        if (c || 0 === c || !1 === c)
          "boolean" === typeof c && (c = c ? 1 : 0), (b[d] = c);
      });
      return b;
    },
    dh = () => {
      try {
        return Oe.history.length;
      } catch (a) {
        return 0;
      }
    },
    eh = (a) => {
      a = Bg(yg(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
    },
    fh = (a) => {
      a = a.google_unique_id;
      return "number" === typeof a ? a : 0;
    },
    gh = (a) => {
      a.u_tz = -new Date().getTimezoneOffset();
      a.u_his = dh();
      let b;
      a.u_h = null == (b = Oe.screen) ? void 0 : b.height;
      let c;
      a.u_w = null == (c = Oe.screen) ? void 0 : c.width;
      let d;
      a.u_ah = null == (d = Oe.screen) ? void 0 : d.availHeight;
      let e;
      a.u_aw = null == (e = Oe.screen) ? void 0 : e.availWidth;
      let f;
      a.u_cd = null == (f = Oe.screen) ? void 0 : f.colorDepth;
    },
    hh = (a) => {
      let b;
      b = 9 !== a.nodeType && a.id;
      a: {
        if (a && a.nodeName && a.parentElement) {
          var c = a.nodeName.toString().toLowerCase();
          const d = a.parentElement.childNodes;
          let e = 0;
          for (let f = 0; f < d.length; ++f) {
            const g = d[f];
            if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
              if (a === g) {
                c = "." + e;
                break a;
              }
              ++e;
            }
          }
        }
        c = "";
      }
      return (
        (a.nodeName && a.nodeName.toString().toLowerCase()) +
        (b ? "/" + b : "") +
        c
      );
    },
    ih = !!window.google_async_iframe_id;
  let jh = (ih && window.parent) || window;
  var R = () => {
      if (ih && !Cf(jh)) {
        let a = "." + Ne.domain;
        try {
          for (; 2 < a.split(".").length && !Cf(jh); )
            (Ne.domain = a = a.substr(a.indexOf(".") + 1)),
              (jh = window.parent);
        } catch (b) {}
        Cf(jh) || (jh = window);
      }
      jh !== window &&
        0.01 > Math.random() &&
        Fg(
          {
            stack: Error().stack,
            aswift: window.google_async_iframe_id,
          },
          "badpubwin"
        );
      return jh;
    },
    kh = (a) =>
      function () {
        if (a) {
          const b = a;
          a = null;
          b.apply(null, arguments);
        }
      },
    lh = () => {
      if (!Oe) return !1;
      try {
        return !(!Oe.navigator.standalone && !Oe.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    },
    mh = (a) => {
      let b;
      var c = a.ActiveXObject;
      if (a.navigator.plugins && a.navigator.mimeTypes.length) {
        if ((c = a.navigator.plugins["Shockwave Flash"]) && c.description)
          return c.description
            .replace(/([a-zA-Z]|\s)+/, "")
            .replace(/(\s)+r/, ".");
      } else {
        if (
          a.navigator.userAgent &&
          0 <= a.navigator.userAgent.indexOf("Windows CE")
        ) {
          b = 3;
          for (a = 1; a; )
            try {
              (a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1))), b++;
            } catch (d) {
              a = null;
            }
          return b.toString();
        }
        if (Qa()) {
          a = null;
          try {
            a = new c("ShockwaveFlash.ShockwaveFlash.7");
          } catch (d) {
            b = 0;
            try {
              (a = new c("ShockwaveFlash.ShockwaveFlash.6")),
                (b = 6),
                (a.AllowScriptAccess = "always");
            } catch (e) {
              if (6 === b) return b.toString();
            }
            try {
              a = new c("ShockwaveFlash.ShockwaveFlash");
            } catch (e) {}
          }
          if (a)
            return (
              (b = a.GetVariable("$version").split(" ")[1]),
              b.replace(/,/g, ".")
            );
        }
      }
      return "0";
    },
    nh = (a) => ((a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1),
    oh = (a) => {
      let b = Number(a.google_ad_width),
        c = Number(a.google_ad_height);
      if (!(0 < b && 0 < c)) {
        a: {
          try {
            const e = String(a.google_ad_format);
            if (e && e.match) {
              const f = e.match(/(\d+)x(\d+)/i);
              if (f) {
                const g = parseInt(f[1], 10),
                  h = parseInt(f[2], 10);
                if (0 < g && 0 < h) {
                  var d = {
                    width: g,
                    height: h,
                  };
                  break a;
                }
              }
            }
          } catch (e) {}
          d = null;
        }
        a = d;
        if (!a) return null;
        b = 0 < b ? b : a.width;
        c = 0 < c ? c : a.height;
      }
      return {
        width: b,
        height: c,
      };
    },
    ph = (a, b) =>
      a.source !== b.contentWindow && a.source.parent !== b.contentWindow
        ? !1
        : !0;
  class qh {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  }
  const rh = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var sh = class {
      constructor(a, b) {
        this.j = a;
        this.l = b;
      }
    },
    th = class {
      constructor(a, b, c) {
        this.url = a;
        this.win = b;
        this.Mc = !!c;
        this.depth = null;
      }
    };

  function uh(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }

  function vh(a, b, c, d, e) {
    const f = [];
    Mf(a, function (g, h) {
      (g = wh(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }

  function wh(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(wh(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(vh(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }

  function xh(a) {
    let b = 1;
    for (const c in a.l) b = c.length > b ? c.length : b;
    return 3997 - b - a.A.length - 1;
  }

  function yh(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = xh(a) - b.length;
    if (0 > d) return "";
    a.j.sort(function (f, g) {
      return f - g;
    });
    b = null;
    let e = "";
    for (let f = 0; f < a.j.length; f++) {
      const g = a.j[f],
        h = a.l[g];
      for (let l = 0; l < h.length; l++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        let k = vh(h[l], a.A, ",$");
        if (k) {
          k = e + k;
          if (d >= k.length) {
            d -= k.length;
            c += k;
            e = a.A;
            break;
          }
          b = null == b ? g : b;
        }
      }
    }
    a = "";
    null != b && (a = e + "trn=" + b);
    return c + a;
  }
  class zh {
    constructor() {
      this.A = "&";
      this.l = {};
      this.B = 0;
      this.j = [];
    }
  }

  function Ah() {
    var a = Bh,
      b = u.google_srt;
    0 <= b && 1 >= b && (a.j = b);
  }

  function Ch(a, b, c, d, e) {
    if ((d ? a.j : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof zh
          ? (f = c)
          : ((f = new zh()),
            Mf(c, (h, l) => {
              var k = f,
                m = k.B++;
              h = uh(l, h);
              k.j.push(m);
              k.l[m] = h;
            }));
        const g = yh(f, "/pagead/gen_204?id=" + b + "&");
        g && Dg(u, g);
      } catch (f) {}
  }
  class Dh {
    constructor() {
      this.j = Math.random();
    }
  }
  let Eh = null;

  function Fh() {
    if (null === Eh) {
      Eh = "";
      try {
        let a = "";
        try {
          a = u.top.location.hash;
        } catch (b) {
          a = u.location.hash;
        }
        if (a) {
          const b = a.match(/\bdeid=([\d,]+)/);
          Eh = b ? b[1] : "";
        }
      } catch (a) {}
    }
    return Eh;
  }
  var Gh = () => {
      const a = u.performance;
      return a && a.now && a.timing
        ? Math.floor(a.now() + a.timing.navigationStart)
        : va();
    },
    Hh = () => {
      const a = u.performance;
      return a && a.now ? a.now() : null;
    };
  class Ih {
    constructor(a, b) {
      var c = Hh() || Gh();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.uniqueId = Math.random();
      this.slotId = void 0;
    }
  }
  const Jh = u.performance,
    Kh = !!(Jh && Jh.mark && Jh.measure && Jh.clearMarks),
    Lh = me(() => {
      var a;
      if ((a = Kh)) (a = Fh()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });

  function Mh(a) {
    a &&
      Jh &&
      Lh() &&
      (Jh.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      Jh.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }

  function Nh() {
    var a = Oh;
    a.j = !1;
    a.events != a.l.google_js_reporting_queue &&
      (Lh() && Ya(a.events, Mh), (a.events.length = 0));
  }

  function Ph(a, b) {
    if (!a.j) return b();
    const c = a.start("491", 3);
    let d;
    try {
      d = b();
    } catch (e) {
      throw (Mh(c), e);
    }
    a.end(c);
    return d;
  }
  class Qh {
    constructor(a) {
      this.events = [];
      this.l = a || u;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.events = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.j = Lh() || (null != b ? b : 1 > Math.random());
    }
    start(a, b) {
      if (!this.j) return null;
      a = new Ih(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      Jh && Lh() && Jh.mark(b);
      return a;
    }
    end(a) {
      if (this.j && "number" === typeof a.value) {
        a.duration = (Hh() || Gh()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        Jh && Lh() && Jh.mark(b);
        !this.j || 2048 < this.events.length || this.events.push(a);
      }
    }
  }

  function Rh(a) {
    let b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    a.stack && (b = Sh(a.stack, b));
    return b;
  }

  function Sh(a, b) {
    try {
      -1 == a.indexOf(b) && (a = b + "\n" + a);
      let c;
      for (; a != c; )
        (c = a),
          (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
      return a.replace(/\n */g, "\n");
    } catch (c) {
      return b;
    }
  }

  function Th(a, b, c, d) {
    let e, f;
    try {
      a.j && a.j.j
        ? ((f = a.j.start(b.toString(), 3)), (e = c()), a.j.end(f))
        : (e = c());
    } catch (g) {
      c = !0;
      try {
        Mh(f),
          (c = a.B(
            b,
            new qh(g, {
              message: Rh(g),
            }),
            void 0,
            d
          ));
      } catch (h) {
        a.ua(217, h);
      }
      if (c) {
        let h, l;
        null == (h = window.console) || null == (l = h.error) || l.call(h, g);
      } else throw g;
    }
    return e;
  }

  function Uh(a, b, c, d, e) {
    return (...f) => Th(a, b, () => c.apply(d, f), e);
  }
  class Vh {
    constructor(a = null) {
      this.l = Bh;
      this.Nb = null;
      this.B = this.ua;
      this.j = a;
      this.A = !1;
    }
    ka() {
      return this.l;
    }
    ua(a, b, c, d, e) {
      e = e || "jserror";
      let f;
      try {
        const E = new zh();
        var g = E;
        g.j.push(1);
        g.l[1] = uh("context", a);
        (b.error && b.meta && b.id) ||
          (b = new qh(b, {
            message: Rh(b),
          }));
        if (b.msg) {
          g = E;
          var h = b.msg.substring(0, 512);
          g.j.push(2);
          g.l[2] = uh("msg", h);
        }
        var l = b.meta || {};
        b = l;
        if (this.Nb)
          try {
            this.Nb(b);
          } catch (ha) {}
        if (d)
          try {
            d(b);
          } catch (ha) {}
        d = E;
        l = [l];
        d.j.push(3);
        d.l[3] = l;
        d = u;
        l = [];
        b = null;
        do {
          var k = d;
          if (Cf(k)) {
            var m = k.location.href;
            b = (k.document && k.document.referrer) || null;
          } else (m = b), (b = null);
          l.push(new th(m || "", k));
          try {
            d = k.parent;
          } catch (ha) {
            d = null;
          }
        } while (d && k != d);
        for (let ha = 0, Ma = l.length - 1; ha <= Ma; ++ha)
          l[ha].depth = Ma - ha;
        k = u;
        if (
          k.location &&
          k.location.ancestorOrigins &&
          k.location.ancestorOrigins.length == l.length - 1
        )
          for (m = 1; m < l.length; ++m) {
            var n = l[m];
            n.url ||
              ((n.url = k.location.ancestorOrigins[m - 1] || ""), (n.Mc = !0));
          }
        var q = l;
        let T = new th(u.location.href, u, !1);
        k = null;
        const sa = q.length - 1;
        for (n = sa; 0 <= n; --n) {
          var r = q[n];
          !k && rh.test(r.url) && (k = r);
          if (r.url && !r.Mc) {
            T = r;
            break;
          }
        }
        r = null;
        const O = q.length && q[sa].url;
        0 != T.depth && O && (r = q[sa]);
        f = new sh(T, r);
        if (f.l) {
          q = E;
          var t = f.l.url || "";
          q.j.push(4);
          q.l[4] = uh("top", t);
        }
        var x = {
          url: f.j.url || "",
        };
        if (f.j.url) {
          var H = f.j.url.match(Af),
            B = H[1],
            C = H[3],
            F = H[4];
          t = "";
          B && (t += B + ":");
          C && ((t += "//"), (t += C), F && (t += ":" + F));
          var I = t;
        } else I = "";
        B = E;
        x = [
          x,
          {
            url: I,
          },
        ];
        B.j.push(5);
        B.l[5] = x;
        Ch(this.l, e, E, this.A, c);
      } catch (E) {
        try {
          Ch(
            this.l,
            e,
            {
              context: "ecmserr",
              rctx: a,
              msg: Rh(E),
              url: f && f.j.url,
            },
            this.A,
            c
          );
        } catch (T) {}
      }
      return !0;
    }
  }
  const Wh = (a) => null !== a && void 0 !== a;

  function Xh(a, b) {
    if (!b(a)) throw Error(String(a));
  }
  var Yh = (a) => "string" === typeof a,
    Zh = (a) => void 0 === a;
  var $h;
  $h = {
    xh: 0,
    jd: 3,
    kd: 4,
    nd: 5,
  };
  var ai = $h.jd,
    bi = $h.kd,
    ci = $h.nd;

  function di(a, ...b) {
    ei(
      a,
      ...b.map((c) => ({
        He: 7,
        message: c,
      }))
    );
  }

  function fi(a) {
    return function (...b) {
      try {
        return a.apply(this, b);
      } catch (c) {}
    };
  }
  var gi = fi((a) => {
    const b = [];
    for (const c of a)
      fi(() => {
        b.push(`[{"${c.He}":${kc(c.message)}}]`);
      })();
    return `[[${b.join(",")}]]`;
  });
  var hi = (a, b) => {
    ea.globalThis.fetch(a, {
      method: "POST",
      body: b,
      keepalive: 65536 > b.length,
      credentials: "omit",
      mode: "no-cors",
      redirect: "follow",
    });
  };

  function ei(a, ...b) {
    fi(() => {
      a.l.push(...b);
      const c = fi(() => {
        const d = gi(a.l);
        a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
        a.l = [];
        a.j = null;
      });
      100 <= a.l.length
        ? (null !== a.j && clearTimeout(a.j), (a.j = setTimeout(c, 0)))
        : null === a.j && (a.j = setTimeout(c, 100));
    })();
  }
  var ii = class {
    constructor() {
      this.A = hi;
      this.l = [];
      this.j = null;
    }
  };
  var ji = (a) => {
    var b = "dc";
    if (a.dc && a.hasOwnProperty(b)) return a.dc;
    b = new a();
    return (a.dc = b);
  };
  class ki {
    constructor(a) {
      this.methodName = a;
    }
  }
  var li = new ki(15),
    mi = new ki(2),
    ni = new ki(3),
    oi = new ki(5),
    pi = new ki(6),
    qi = new ki(7),
    ri = new ki(8),
    si = new ki(14),
    ti = (a, b, c) => b[a.methodName] || c || (() => {});

  function ui(a, b) {
    a.j = (c) => {
      ti(mi, b, () => [])(c, 1);
    };
    a.l = () => ti(ni, b, () => [])(1);
  }
  class vi {
    constructor() {
      this.j = () => {};
      this.l = () => [];
    }
  }
  let Bh, wi;
  const Oh = new Qh(u);
  ((a) => {
    Bh = a || new Dh();
    "number" !== typeof u.google_srt && (u.google_srt = Math.random());
    Ah();
    wi = new Vh(Oh);
    wi.A = !0;
    "complete" == u.document.readyState
      ? u.google_measure_js_timing || Nh()
      : Oh.j &&
        K(u, "load", () => {
          u.google_measure_js_timing || Nh();
        });
  })();
  var xi = (a, b, c) => Th(wi, a, b, c),
    yi = (a, b) => Uh(wi, a, b, void 0, void 0),
    S = (a, b, c) => {
      const d = ji(vi).l();
      !b.eid && d.length && (b.eid = d.toString());
      Ch(Bh, a, b, !0, c);
    },
    zi = (a, b) => wi.ua(a, b, void 0, void 0),
    Ai = (a) => (b) => {
      null != b || (b = "unnamed rejection");
      zi(a, b instanceof Error ? b : Error(b));
    };
  var Bi = (a, b) => {
    const c = Wf();
    return (
      a +
      (-1 == a.indexOf("?") ? "?" : "&") +
      [
        0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "",
        "xpc=",
        b,
        "&p=",
        encodeURIComponent(u.document.location.protocol),
        "//",
        encodeURIComponent(u.document.location.host),
      ].join("")
    );
  };
  Pc(tc(vc("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
  var Ci = (a, b, c, d = null) => {
      const e = (g) => {
        let h;
        try {
          h = JSON.parse(g.data);
        } catch (l) {
          return;
        }
        !h ||
          h.googMsgType !== b ||
          (d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g)) ||
          c(h, g);
      };
      K(a, "message", e);
      let f = !1;
      return () => {
        let g = !1;
        f || ((f = !0), (g = te(a, "message", e)));
        return g;
      };
    },
    Di = (a, b, c, d = null) => {
      const e = Ci(
        a,
        b,
        ke(c, () => e()),
        d
      );
      return e;
    },
    Ei = (a, b, c, d, e) => {
      if (
        !(0 >= e) &&
        ((c.googMsgType = b),
        a.postMessage(JSON.stringify(c), d),
        (a = a.frames))
      )
        for (let f = 0; f < a.length; ++f) 1 < e && Ei(a[f], b, c, d, --e);
    };

  function Fi(a, b, c, d) {
    gg(d.origin) && "expandable-xpc-ready" == c.notify && Gi(a, b);
  }

  function Gi(a, b) {
    var c = a.ac;
    c.google_eas_queue = c.google_eas_queue || [];
    c.google_eas_queue.push({
      a: a.id,
      b: a.url,
      c: a.width,
      d: a.height,
      e: a.zc,
      f: a.se,
      g: a.zd,
      h: a.be,
      i: void 0,
    });
    u.setTimeout(
      yi(
        220,
        kh(() => {
          Gf(c.document, $d(b));
        })
      ),
      0
    );
  }
  var Ii = class extends w {
      constructor() {
        super(void 0, -1, Hi);
      }
    },
    Hi = [15];
  var Ji = class extends w {
    constructor() {
      super(void 0);
    }
    getCorrelator() {
      return ac(this, 1, 0);
    }
    setCorrelator(a) {
      return dc(this, 1, a, 0);
    }
  };
  var Ki = class extends w {
    constructor() {
      super(void 0);
    }
  };
  let Li = null,
    Ri = null;
  var Si = () => {
      if (null != Li) return Li;
      Li = !1;
      try {
        const a = Ff(u);
        a && -1 !== a.location.hash.indexOf("google_logging") && (Li = !0);
        u.localStorage.getItem("google_logging") && (Li = !0);
      } catch (a) {}
      return Li;
    },
    Ti = () => {
      if (null != Ri) return Ri;
      Ri = !1;
      try {
        const a = Ff(u);
        if (
          (a && -1 !== a.location.hash.indexOf("auto_ads_logging")) ||
          u.localStorage.getItem("auto_ads_logging")
        )
          Ri = !0;
      } catch (a) {}
      return Ri;
    },
    Ui = (a, b = []) => {
      let c = !1;
      u.google_logging_queue || ((c = !0), (u.google_logging_queue = []));
      u.google_logging_queue.push([a, b]);
      c &&
        Si() &&
        Gf(
          u.document,
          Pc(
            tc(
              vc(
                "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"
              )
            )
          )
        );
    };
  Pc(tc(vc("https://pagead2.googlesyndication.com/pagead/osd.js")));
  var Vi = class extends w {
    constructor(a) {
      super(a);
    }
  };
  var Xi = class extends w {
      constructor(a) {
        super(a, -1, Wi);
      }
      getId() {
        return y(this, 3);
      }
    },
    Wi = [4];
  var Yi = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Zi = class extends w {
      constructor(a) {
        super(a);
      }
    },
    aj = class extends w {
      constructor(a) {
        super(a, -1, $i);
      }
    },
    bj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    cj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    $i = [1];
  var dj = class extends w {
    constructor(a) {
      super(a);
    }
  };
  var fj = class extends w {
      constructor(a) {
        super(a, -1, ej);
      }
    },
    gj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    hj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    ej = [3];
  var jj = class extends w {
      constructor(a) {
        super(a, -1, ij);
      }
    },
    ij = [2];
  var kj = class extends w {
    constructor(a) {
      super(a);
    }
  };
  var mj = class extends w {
      constructor(a) {
        super(a, -1, lj);
      }
    },
    lj = [1];
  var nj = class extends w {
    constructor(a) {
      super(a);
    }
    V() {
      return D(this, Xi, 1);
    }
    l() {
      return y(this, 2);
    }
  };
  var oj = class extends w {
      constructor(a) {
        super(a);
      }
      getName() {
        return y(this, 4);
      }
    },
    pj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    qj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    rj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    sj = [1, 2, 3];
  var tj = class extends w {
    constructor(a) {
      super(a);
    }
  };
  var vj = class extends w {
      constructor(a) {
        super(a, -1, uj);
      }
    },
    wj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    uj = [1];
  var yj = class extends w {
      constructor(a) {
        super(a, -1, xj);
      }
    },
    xj = [3, 4];
  var zj = class extends w {
    constructor(a) {
      super(a);
    }
  };

  function Aj() {
    var a = new Bj();
    return z(a, 2, 1);
  }
  var Bj = class extends w {
    constructor(a) {
      super(a);
    }
    setLocation(a) {
      return z(this, 1, a);
    }
  };
  var Dj = class extends w {
      constructor(a) {
        super(a, -1, Cj);
      }
      V() {
        return D(this, Xi, 1);
      }
      l() {
        return y(this, 2);
      }
    },
    Cj = [6, 7, 9, 10, 11];
  var Fj = class extends w {
      constructor(a) {
        super(a, -1, Ej);
      }
    },
    Ej = [4];
  var Gj = class extends w {
    constructor(a) {
      super(a);
    }
  };
  var Ij = class extends w {
      constructor(a) {
        super(a, -1, Hj);
      }
    },
    Kj = class extends w {
      constructor(a) {
        super(a, -1, Jj);
      }
    },
    Lj = class extends w {
      constructor(a) {
        super(a);
      }
      ub() {
        return J(this, 1);
      }
      $b() {
        return ac(this, 2, 0);
      }
    },
    Mj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Nj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Oj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Hj = [1],
    Jj = [1],
    Pj = [1, 2];

  function Qj(a) {
    return D(a, Rj, 13);
  }

  function Sj(a) {
    return D(a, Tj, 15);
  }
  var Vj = class extends w {
      constructor(a) {
        super(a, -1, Uj);
      }
    },
    Wj = class extends w {
      constructor() {
        super(void 0);
      }
    },
    Xj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Zj = class extends w {
      constructor(a) {
        super(a, -1, Yj);
      }
    },
    ak = class extends w {
      constructor(a) {
        super(a);
      }
    },
    bk = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Rj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    ck = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Tj = class extends w {
      constructor(a) {
        super(a);
      }
    },
    dk = class extends w {
      constructor(a) {
        super(a);
      }
    },
    ek = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Uj = [1, 2, 5, 7],
    Yj = [2, 5, 6, 11];
  var fk = class extends w {
    constructor() {
      super(void 0);
    }
  };
  var Ac = {
    Dh: 0,
    ug: 1,
    xg: 2,
    vg: 3,
    wg: 4,
    Dg: 8,
    Oh: 9,
    bh: 10,
    eh: 11,
    Kh: 16,
    hg: 17,
    gg: 24,
    $g: 25,
    Df: 26,
    Cf: 27,
    md: 30,
    Vg: 32,
    Xg: 40,
  };
  var gk = {
      overlays: 1,
      interstitials: 2,
      vignettes: 2,
      inserts: 3,
      immersives: 4,
      list_view: 5,
    },
    hk = {
      [1]: 1,
      [2]: 1,
      [3]: 1,
      [4]: 1,
      [8]: 2,
      [27]: 3,
      [9]: 4,
      [30]: 5,
    };

  function ik(a, b) {
    if (b) {
      var c = b.adClient;
      if ("string" === typeof c && c) {
        a.kb = c;
        a.A = !!b.adTest;
        c = b.pubVars;
        la(c) && (a.F = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
          a.D = {};
          for (d of b.fillMessage) a.D[d.key] = d.value;
        }
        a.B = b.adWidth;
        a.l = b.adHeight;
        ($g(a.B) && $g(a.l)) || S("rctnosize", b);
        var d = !0;
      } else d = !1;
    } else d = !1;
    return d && a.H(b);
  }
  class jk {
    constructor() {
      this.D = this.F = this.A = this.kb = null;
      this.l = this.B = 0;
    }
    H() {
      return !0;
    }
  }
  var W = class {
      constructor(a, b = !1) {
        this.j = a;
        this.defaultValue = b;
      }
    },
    kk = class {
      constructor(a, b = 0) {
        this.j = a;
        this.defaultValue = b;
      }
    },
    lk = class {
      constructor(a, b = []) {
        this.j = a;
        this.defaultValue = b;
      }
    };
  var mk = new W(1084),
    nk = new W(1082, !0),
    ok = new W(236),
    pk = new W(383, !0),
    qk = new kk(1130),
    rk = new kk(1126, 5e3),
    sk = new kk(1032),
    tk = new (class {
      constructor(a, b = "") {
        this.j = a;
        this.defaultValue = b;
      }
    })(14),
    uk = new kk(1044),
    vk = new W(1132),
    wk = new W(1131),
    xk = new kk(1103),
    yk = new kk(1116, 300),
    zk = new kk(1117, 100),
    Ak = new W(1121),
    Bk = new kk(1119),
    Ck = new W(1122),
    Dk = new W(316),
    Ek = new W(334),
    Fk = new kk(54),
    Gk = new W(313),
    Hk = new kk(66, -1),
    Ik = new kk(65, -1),
    Jk = new W(369),
    Kk = new W(368),
    Lk = new W(1087),
    Mk = new W(265),
    Nk = new W(1120),
    Ok = new W(1135),
    Pk = new W(1102, !0),
    Qk = new W(260),
    Rk = new W(1133),
    Sk = new kk(1072),
    Tk = new W(290),
    Uk = new W(190),
    Vk = new W(1036, !0),
    Wk = new W(154),
    Xk = new W(1127, !0),
    Yk = new W(380254521),
    Zk = new W(381914117),
    $k = new W(83),
    al = new W(360245598),
    bl = new kk(1927),
    cl = new lk(1934, [
      "A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
      "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
      "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
    ]),
    dl = new W(77),
    el = new W(78),
    fl = new W(309),
    gl = new W(1959),
    hl = new W(1953, !0),
    il = new W(1960),
    jl = new W(80),
    kl = new W(76),
    ll = new W(81),
    ml = new W(1957),
    nl = new W(380025941),
    ol = new W(84),
    pl = new W(188),
    ql = new W(1928),
    rl = new W(1941),
    sl = new W(370946349),
    tl = new W(392736476),
    ul = new kk(406149835),
    vl = new lk(1932, [
      "AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
      "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
      "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
    ]),
    wl = new kk(397907552, 500),
    xl = new W(419638674),
    yl = new kk(1935);
  var zl = class {
      constructor() {
        const a = {};
        this.B = (b, c) => (null != a[b] ? a[b] : c);
        this.C = (b, c) => (null != a[b] ? a[b] : c);
        this.j = (b, c) => (null != a[b] ? a[b] : c);
        this.l = () => {};
        this.A = () => {};
      }
    },
    X = (a) => ji(zl).B(a.j, a.defaultValue),
    Al = (a) => ji(zl).C(a.j, a.defaultValue);

  function Bl(a) {
    a.google_reactive_ads_global_state
      ? (null ==
          a.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new Set()),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new Map()))
      : (a.google_reactive_ads_global_state = new Cl());
    return a.google_reactive_ads_global_state;
  }
  class Cl {
    constructor() {
      this.wasPlaTagProcessed = !1;
      this.wasReactiveAdConfigReceived = {};
      this.adCount = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledInAsfe = {};
      this.wasReactiveTagRequestSent = !1;
      this.reactiveTypeDisabledByPublisher = {};
      this.tagSpecificState = {};
      this.messageValidationEnabled = !1;
      this.floatingAdsStacking = new Dl();
      this.sideRailProcessedFixedElements = new Set();
      this.sideRailAvailableSpace = new Map();
    }
  }
  var Dl = class {
    constructor() {
      this.maxZIndexRestrictions = {};
      this.nextRestrictionId = 0;
      this.maxZIndexListeners = [];
    }
  };
  var El = 728 * 1.38,
    Fl = (a, b = 420) =>
      (a = Y(a).clientWidth) ? (a > b ? 32768 : 320 > a ? 65536 : 0) : 16384,
    Gl = (a) => {
      var b = Y(a).clientWidth;
      a = a.innerWidth;
      return (b = b && a ? b / a : 0)
        ? 1.05 < b
          ? 262144
          : 0.95 > b
          ? 524288
          : 0
        : 131072;
    },
    Il = (a) => Math.max(0, Hl(a, !0) - Y(a).clientHeight),
    Y = (a) => {
      a = a.document;
      let b = {};
      a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
      return b || {};
    },
    Hl = (a, b) => {
      const c = Y(a);
      return b
        ? c.scrollHeight == Y(a).clientHeight
          ? c.offsetHeight
          : c.scrollHeight
        : c.offsetHeight;
    },
    Kl = (a, b) =>
      Jl(b) || 10 === b || !a.adCount
        ? !1
        : 1 == b || 2 == b
        ? !(!a.adCount[1] && !a.adCount[2])
        : (a = a.adCount[b])
        ? 1 <= a
        : !1,
    Ll = (a, b) =>
      a && a.source ? a.source === b || a.source.parent === b : !1,
    Ml = (a) =>
      void 0 === a.pageYOffset
        ? (
            a.document.documentElement ||
            a.document.body.parentNode ||
            a.document.body
          ).scrollTop
        : a.pageYOffset,
    Nl = (a) =>
      void 0 === a.pageXOffset
        ? (
            a.document.documentElement ||
            a.document.body.parentNode ||
            a.document.body
          ).scrollLeft
        : a.pageXOffset,
    Ol = (a) => {
      const b = {};
      let c;
      Array.isArray(a) ? (c = a) : a && a.key_value && (c = a.key_value);
      if (c)
        for (a = 0; a < c.length; a++) {
          const d = c[a];
          if ("key" in d && "value" in d) {
            const e = d.value;
            b[d.key] = null == e ? null : String(e);
          }
        }
      return b;
    },
    Pl = (a, b, c, d, e) => {
      Ch(
        c,
        b,
        {
          c: e.data.substring(0, 500),
          u: a.location.href.substring(0, 500),
        },
        !0,
        0.1
      );
      return !0;
    },
    Jl = (a) => 26 === a || 27 === a || 40 === a;

  function Ql(a, b = []) {
    const c = Date.now();
    return $a(b, (d) => c - d < 1e3 * a);
  }

  function Rl(a, b) {
    try {
      const c = a.getItem("__lsv__");
      if (!c) return [];
      let d;
      try {
        d = JSON.parse(c);
      } catch (e) {}
      if (!Array.isArray(d) || cb(d, (e) => !Number.isInteger(e)))
        return a.removeItem("__lsv__"), [];
      d = Ql(b, d);
      d.length || null == a || a.removeItem("__lsv__");
      return d;
    } catch (c) {
      return null;
    }
  }

  function Sl(a, b) {
    var c;
    if (!(c = 0 >= b) && !(c = null == a)) {
      try {
        a.setItem("__storage_test__", "__storage_test__");
        const e = a.getItem("__storage_test__");
        a.removeItem("__storage_test__");
        var d = "__storage_test__" === e;
      } catch (e) {
        d = !1;
      }
      c = !d;
    }
    return c ? null : Rl(a, b);
  }
  var Tl = (a, b, c) => {
    let d = 0;
    try {
      d |= a != a.top ? 512 : 0;
      d |= Gl(a);
      d |= Fl(a);
      d |= a.innerHeight >= a.innerWidth ? 0 : 8;
      d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
      var e;
      if ((e = b)) {
        var f = Sl(c, 3600);
        e = !(f && 1 > f.length);
      }
      e && (d |= 134217728);
      X(nl) && (d |= 128);
    } catch (g) {
      d |= 32;
    }
    return d;
  };
  class Ul extends jk {
    constructor() {
      super();
      this.C = !1;
      this.j = null;
      this.G = !1;
    }
    H(a) {
      this.C = !!a.enableAma;
      var b = a.amaConfig;
      if (b)
        try {
          var c = lc(Vj, b);
        } catch (d) {
          c = null;
        }
      else c = null;
      this.j = c;
      Array.isArray(a.fillMessage) && (this.G = !0);
      return !0;
    }
  }
  var Vl = (a, b = !1) => {
    try {
      return b
        ? new Ze(a.innerWidth, a.innerHeight).round()
        : mf(a || window).round();
    } catch (c) {
      return new Ze(-12245933, -12245933);
    }
  };

  function Wl(a = u) {
    a = a.devicePixelRatio;
    return "number" === typeof a ? +a.toFixed(3) : null;
  }

  function Xl(a, b = u) {
    a =
      a.scrollingElement ||
      ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return new Ye(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
  }

  function Yl(a) {
    try {
      return !(
        !a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
      );
    } catch (b) {
      return !1;
    }
  }
  var Zl = !qb && !Sa();

  function $l(a) {
    if (/-[a-z]/.test("adFormat")) return null;
    if (Zl && a.dataset) {
      if (Ua() && !("adFormat" in a.dataset)) return null;
      a = a.dataset.adFormat;
      return void 0 === a ? null : a;
    }
    return a.getAttribute(
      "data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase()
    );
  }
  var am = (a, b, c) => {
      if (!b) return null;
      const d = qf(document, "INS");
      d.id = "google_pedestal_container";
      d.style.width = "100%";
      d.style.zIndex = "-1";
      if (c) {
        var e = a.getComputedStyle(c),
          f = "";
        if (e && "static" != e.position) {
          var g = c.parentNode.lastElementChild;
          for (f = e.position; g && g != c; ) {
            if ("none" != a.getComputedStyle(g).display) {
              f = a.getComputedStyle(g).position;
              break;
            }
            g = g.previousElementSibling;
          }
        }
        if ((c = f)) d.style.position = c;
      }
      b.appendChild(d);
      if (d) {
        var h = a.document;
        f = h.createElement("div");
        f.style.width = "100%";
        f.style.height = "2000px";
        c = Y(a).clientHeight;
        e = h.body.scrollHeight;
        a = a.innerHeight;
        g = h.body.getBoundingClientRect().bottom;
        d.appendChild(f);
        var l = f.getBoundingClientRect().top;
        h = h.body.getBoundingClientRect().top;
        d.removeChild(f);
        f = e;
        e <= a && 0 < c && 0 < g && (f = g - h);
        a = l - h >= 0.8 * f;
      } else a = !1;
      return a ? d : (b.removeChild(d), null);
    },
    cm = (a) => {
      let b = 0;
      try {
        (b |= a != a.top ? 512 : 0),
          zf() || (b |= 1048576),
          1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
            (b |= 32768),
          bm(a) && (b |= 33554432);
      } catch (c) {
        b |= 32;
      }
      return b;
    },
    bm = (a) => {
      a = a.document.getElementsByClassName("adsbygoogle");
      for (let b = 0; b < a.length; b++)
        if ("autorelaxed" == $l(a[b])) return !0;
      return !1;
    };
  let dm = new Date().getTime();
  var em = (a) => {
    a = parseFloat(a);
    return isNaN(a) || 1 < a || 0 > a ? 0.05 : a;
  };
  var fm = {
    Pg: 0,
    Og: 1,
    Lg: 2,
    Gg: 3,
    Mg: 4,
    Hg: 5,
    Ng: 6,
    Jg: 7,
    Kg: 8,
    Fg: 9,
    Ig: 10,
  };
  var gm = {
    Rg: 0,
    Sg: 1,
    Qg: 2,
  };

  function hm(a, b) {
    return (
      a.left < b.right &&
      b.left < a.right &&
      a.top < b.bottom &&
      b.top < a.bottom
    );
  }

  function im(a) {
    a = ab(a, (b) => new rg(b.top, b.right, b.bottom, b.left));
    a = jm(a);
    return {
      top: a.top,
      right: a.right,
      bottom: a.bottom,
      left: a.left,
    };
  }

  function jm(a) {
    if (!a.length) throw Error("pso:box:m:nb");
    return bb(
      a.slice(1),
      (b, c) => {
        b.left = Math.min(b.left, c.left);
        b.top = Math.min(b.top, c.top);
        b.right = Math.max(b.right, c.right);
        b.bottom = Math.max(b.bottom, c.bottom);
        return b;
      },
      sg(a[0])
    );
  }

  function km(a) {
    if (0 != a.j) throw Error("Already resolved/rejected.");
  }
  var nm = class {
    constructor() {
      this.l = new lm(this);
      this.j = 0;
    }
    resolve(a) {
      km(this);
      this.j = 1;
      this.B = a;
      mm(this.l);
    }
  };

  function mm(a) {
    switch (a.j.j) {
      case 0:
        break;
      case 1:
        a.l && a.l(a.j.B);
        break;
      case 2:
        a.A && a.A(a.j.A);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var lm = class {
    constructor(a) {
      this.j = a;
    }
    then(a, b) {
      if (this.l) throw Error("Then functions already set.");
      this.l = a;
      this.A = b;
      mm(this);
    }
  };

  function om(a, b) {
    pm(a).forEach(b, void 0);
  }

  function pm(a) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
    return b;
  }

  function qm(a, b) {
    return void 0 !== a.j[rm(b)];
  }

  function sm(a) {
    var b = [],
      c;
    for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
    return b;
  }

  function tm(a) {
    var b = [],
      c;
    for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
    return b;
  }
  const um = class {
    constructor() {
      this.j = {};
      this.l = {};
    }
    set(a, b) {
      const c = rm(a);
      this.j[c] = b;
      this.l[c] = a;
    }
    remove(a) {
      a = rm(a);
      this.j[a] = void 0;
      this.l[a] = void 0;
    }
    get(a, b) {
      a = rm(a);
      return void 0 !== this.j[a] ? this.j[a] : b;
    }
    Wa() {
      return sm(this).length;
    }
    clear() {
      this.j = {};
      this.l = {};
    }
  };

  function rm(a) {
    return a instanceof Object ? String(na(a)) : a + "";
  }
  const vm = class {
    constructor(a) {
      this.j = new um();
      if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.j.set(a, !0);
    }
    remove(a) {
      this.j.remove(a);
    }
    contains(a) {
      return qm(this.j, a);
    }
  };
  const wm = new vm(
    "IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(
      " "
    )
  );
  var zm = (a, b) => {
    const c = new xm(a, b);
    return () => ym(c);
  };

  function ym(a) {
    if (a.j) return !1;
    if (null == a.l) return Am(a), !0;
    const b = a.l + 1e3 - new Date().getTime();
    if (1 > b) return Am(a), !0;
    Bm(a, b);
    return !0;
  }

  function Am(a) {
    a.l = new Date().getTime();
    a.B();
  }

  function Bm(a, b) {
    a.j = !0;
    a.A.setTimeout(() => {
      a.j = !1;
      Am(a);
    }, b);
  }
  class xm {
    constructor(a, b) {
      this.A = a;
      this.B = b;
      this.l = null;
      this.j = !1;
    }
  }

  function Cm(a, b) {
    return {
      top: a.j - b,
      right: a.A + a.l,
      bottom: a.j + b,
      left: a.A,
    };
  }
  class Dm {
    constructor(a, b, c) {
      this.A = a;
      this.j = b;
      this.l = c;
    }
  }

  function Em(a, b) {
    a = a.getBoundingClientRect();
    return new Fm(a.top + Ml(b), a.bottom - a.top);
  }

  function Gm(a) {
    return new Fm(Math.round(a.j), Math.round(a.l));
  }
  class Fm {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
    getHeight() {
      return this.l;
    }
  }

  function Hm(a, b) {
    a.D ? b(a.A) : a.l.push(b);
  }

  function Im(a, b) {
    a.D = !0;
    a.A = b;
    a.l.forEach((c) => {
      c(a.A);
    });
    a.l = [];
  }
  class Jm {
    constructor(a) {
      this.j = a;
      this.l = [];
      this.D = !1;
      this.C = this.A = null;
      this.G = zm(a, () => {
        if (null != this.C) {
          var b = Hl(this.j, !0) - this.C;
          1e3 < b && Im(this, b);
        }
      });
      this.B = null;
    }
    init(a, b) {
      null == a
        ? ((this.C = a = Hl(this.j, !0)),
          this.j.addEventListener("scroll", this.G),
          null != b && b(a))
        : (this.B = this.j.setTimeout(() => {
            this.init(void 0, b);
          }, a));
    }
    da() {
      null != this.B && this.j.clearTimeout(this.B);
      this.j.removeEventListener("scroll", this.G);
      this.l = [];
      this.A = null;
    }
  }
  var Km = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
  class Lm {
    constructor(a = 1) {
      this.j = a;
    }
  }

  function Mm(a, b) {
    a.j.forEach((c, d) => void b(c, d, a));
  }

  function Nm(a, b, c) {
    const d = [];
    for (const e of a.j) b(e) ? d.push(e) : c(e);
    return new Om(d);
  }

  function Pm(a, b = 1) {
    a = a.j.slice(0);
    const c = new Lm(b);
    kb(a, () => {
      var d = (48271 * c.j) % 2147483647;
      c.j = 0 > 2147483647 * d ? d + 2147483647 : d;
      return c.j / 2147483647;
    });
    return new Om(a);
  }
  const Om = class {
    constructor(a) {
      this.j = a.slice(0);
    }
    filter(a) {
      return new Om($a(this.j, a));
    }
    apply(a) {
      return new Om(a(this.j.slice(0)));
    }
    sort(a) {
      return new Om(this.j.slice(0).sort(a));
    }
    get(a) {
      return this.j[a];
    }
    add(a) {
      const b = this.j.slice(0);
      b.push(a);
      return new Om(b);
    }
  };
  class Qm {
    constructor(a) {
      this.j = new vm(a);
    }
    contains(a) {
      return this.j.contains(a);
    }
  }

  function Rm(a, b, c = !1) {
    a.l.push(b);
    c && b(a.j);
  }

  function Sm(a, b) {
    a.j = b;
    Ya(a.l, (c) => {
      c(a.j);
    });
  }

  function Tm(a, b) {
    Rm(b, (c) => Sm(a, c), !0);
  }
  class Um {
    constructor(a) {
      this.j = a;
      this.l = [];
    }
    map(a) {
      const b = new Um(a(this.j));
      Rm(this, (c) => Sm(b, a(c)));
      return b;
    }
  }

  function Vm(a) {
    return new Wm(
      {
        value: a,
      },
      null
    );
  }

  function Xm(a) {
    return new Wm(null, Error(a));
  }

  function Ym(a) {
    try {
      return Vm(a());
    } catch (b) {
      return new Wm(null, b);
    }
  }

  function Zm(a) {
    return null != a.j ? a.j.value : null;
  }

  function $m(a, b) {
    null != a.j && b(a.j.value);
  }

  function an(a, b) {
    null != a.j || b(a.l);
    return a;
  }
  class Wm {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
    map(a) {
      return null != this.j
        ? ((a = a(this.j.value)), a instanceof Wm ? a : Vm(a))
        : this;
    }
  }
  class bn {
    constructor() {
      this.j = new um();
    }
    set(a, b) {
      let c = this.j.get(a);
      c || ((c = new vm()), this.j.set(a, c));
      c.add(b);
    }
  }
  class cn {
    constructor(a, { xc: b, qd: c, $d: d, Yc: e }) {
      this.C = a;
      this.A = c;
      this.B = new Om(b || []);
      this.l = e;
      this.j = d;
    }
  }
  var dn = (a) => {
      var b = a.split("~").filter((c) => 0 < c.length);
      a = new um();
      for (const c of b)
        (b = c.indexOf(".")),
          -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    },
    fn = (a) => {
      var b = en(a);
      a = [];
      for (let c of b)
        (b = String(c.Qa)),
          a.push(c.xa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    };
  const en = (a) => {
      const b = [],
        c = a.B;
      c &&
        c.j.length &&
        b.push({
          xa: "a",
          Qa: gn(c),
        });
      null != a.A &&
        b.push({
          xa: "as",
          Qa: a.A,
        });
      null != a.j &&
        b.push({
          xa: "i",
          Qa: String(a.j),
        });
      null != a.l &&
        b.push({
          xa: "rp",
          Qa: String(a.l),
        });
      b.sort(function (d, e) {
        return d.xa.localeCompare(e.xa);
      });
      b.unshift({
        xa: "t",
        Qa: hn(a.C),
      });
      return b;
    },
    hn = (a) => {
      switch (a) {
        case 0:
          return "aa";
        case 1:
          return "ma";
        default:
          throw Error("Invalid slot type" + a);
      }
    },
    gn = (a) => {
      a = a.j.slice(0).map(jn);
      a = JSON.stringify(a);
      return Of(a);
    },
    jn = (a) => {
      const b = {};
      null != y(a, 7) && (b.q = y(a, 7));
      null != y(a, 2) && (b.o = y(a, 2));
      null != y(a, 5) && (b.p = y(a, 5));
      return b;
    };

  function kn(a) {
    const b = [].slice.call(arguments).filter(le((e) => null === e));
    if (!b.length) return null;
    let c = [],
      d = {};
    b.forEach((e) => {
      c = c.concat(e.Ac || []);
      d = Object.assign(d, e.Xa());
    });
    return new ln(c, d);
  }

  function mn(a) {
    switch (a) {
      case 1:
        return new ln(null, {
          google_ad_semantic_area: "mc",
        });
      case 2:
        return new ln(null, {
          google_ad_semantic_area: "h",
        });
      case 3:
        return new ln(null, {
          google_ad_semantic_area: "f",
        });
      case 4:
        return new ln(null, {
          google_ad_semantic_area: "s",
        });
      default:
        return null;
    }
  }

  function nn(a) {
    return null == a
      ? null
      : new ln(null, {
          google_placement_id: fn(a),
        });
  }
  class ln {
    constructor(a, b) {
      this.Ac = a;
      this.j = b;
    }
    Xa() {
      return this.j;
    }
  }
  var on = class extends w {
    constructor(a) {
      super(a);
    }
  };

  function pn(a) {
    try {
      const b = a.localStorage.getItem("google_ama_settings");
      return b ? lc(on, b) : null;
    } catch (b) {
      return null;
    }
  }

  function qn(a, b) {
    if (void 0 !== a.Vb) {
      let c = pn(b);
      c || (c = new on());
      void 0 !== a.Vb && z(c, 2, a.Vb);
      z(c, 1, va() + 864e5);
      a = kc(c);
      try {
        b.localStorage.setItem("google_ama_settings", a);
      } catch (d) {}
    } else if ((a = pn(b)) && y(a, 1) < va())
      try {
        b.localStorage.removeItem("google_ama_settings");
      } catch (c) {}
  }

  function rn(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = "INS" == a.tagName))
      a: {
        b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
          if (!c[b[d]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }

  function sn(a) {
    return pm(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
  }

  function tn(a, b) {
    a = yf(new hf(a), "DIV");
    const c = a.style;
    c.width = "100%";
    c.height = "auto";
    c.clear = b ? "both" : "none";
    return a;
  }

  function un(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          var d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && 8 == d.nodeType; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    rn(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }

  function vn(a) {
    if (a && a.parentNode) {
      const b = a.parentNode;
      b.removeChild(a);
      rn(b) &&
        (b.style.display = b.getAttribute("data-init-display") || "none");
    }
  }
  var xn = (a, b, c, d = 0) => {
      var e = wn(b, c, d);
      if (e.init) {
        for (c = b = e.init; (c = e.tb(c)); ) b = c;
        e = {
          anchor: b,
          position: e.Gb,
        };
      } else
        e = {
          anchor: b,
          position: c,
        };
      a["google-ama-order-assurance"] = d;
      un(a, e.anchor, e.position);
    },
    yn = (a, b, c, d = 0) => {
      X(Gk) ? xn(a, b, c, d) : un(a, b, c);
    };

  function wn(a, b, c) {
    const d = (f) => {
        f = zn(f);
        return null == f ? !1 : c < f;
      },
      e = (f) => {
        f = zn(f);
        return null == f ? !1 : c > f;
      };
    switch (b) {
      case 0:
        return {
          init: An(a.previousSibling, d),
          tb: (f) => An(f.previousSibling, d),
          Gb: 0,
        };
      case 2:
        return {
          init: An(a.lastChild, d),
          tb: (f) => An(f.previousSibling, d),
          Gb: 0,
        };
      case 3:
        return {
          init: An(a.nextSibling, e),
          tb: (f) => An(f.nextSibling, e),
          Gb: 3,
        };
      case 1:
        return {
          init: An(a.firstChild, e),
          tb: (f) => An(f.nextSibling, e),
          Gb: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }

  function zn(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }

  function An(a, b) {
    return a && b(a) ? a : null;
  }
  var Bn = (a, b) => {
      try {
        const c = b.document.documentElement.getBoundingClientRect(),
          d = a.getBoundingClientRect();
        return {
          x: d.left - c.left,
          y: d.top - c.top,
        };
      } catch (c) {
        return null;
      }
    },
    Cn = (a, b) => {
      const c = 40 === a.google_reactive_ad_format,
        d = 16 === a.google_reactive_ad_format;
      return (
        !!a.google_ad_resizable &&
        (!a.google_reactive_ad_format || c) &&
        !d &&
        !!b.navigator &&
        /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) &&
        b === b.top
      );
    },
    Dn = (a, b, c) => {
      a = a.style;
      "rtl" == b ? (a.marginRight = c) : (a.marginLeft = c);
    };
  const En = (a, b, c) => {
    a = Bn(b, a);
    return "rtl" == c ? -a.x : a.x;
  };
  var Fn = (a, b) => {
      b = b.parentElement;
      return b ? ((a = If(b, a)) ? a.direction : "") : "";
    },
    Gn = (a, b, c) => {
      if (0 === En(a, b, c)) return !1;
      Dn(b, c, "0px");
      const d = En(a, b, c);
      Dn(b, c, -1 * d + "px");
      a = En(a, b, c);
      0 !== a && a !== d && Dn(b, c, (d / (a - d)) * d + "px");
      return !0;
    };
  const Hn = RegExp("(^| )adsbygoogle($| )");

  function In(a, b) {
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = ef(d.lc);
      a[e] = d.value;
    }
  }

  function Jn(a, b, c, d, e, f) {
    a = Kn(a, e);
    a.ha.setAttribute("data-ad-format", d ? d : "auto");
    Ln(a, b, c, f);
    return a;
  }

  function Mn(a, b, c = null) {
    a = Kn(a, {});
    Ln(a, b, null, c);
    return a;
  }

  function Ln(a, b, c, d) {
    var e = [];
    if ((d = d && d.Ac)) a.Da.className = d.join(" ");
    a = a.ha;
    a.className = "adsbygoogle";
    a.setAttribute("data-ad-client", b);
    c && a.setAttribute("data-ad-slot", c);
    e.length && a.setAttribute("data-ad-channel", e.join("+"));
  }

  function Kn(a, b) {
    var c = tn(a, b.clearBoth || !1),
      d = c.style;
    d.textAlign = "center";
    b.Fb && In(d, b.Fb);
    a = yf(new hf(a), "INS");
    d = a.style;
    d.display = "block";
    d.margin = "auto";
    d.backgroundColor = "transparent";
    b.sc && (d.marginTop = b.sc);
    b.Pb && (d.marginBottom = b.Pb);
    b.Oa && In(d, b.Oa);
    c.appendChild(a);
    return {
      Da: c,
      ha: a,
    };
  }

  function Nn(a, b, c) {
    b.dataset.adsbygoogleStatus = "reserved";
    b.className += " adsbygoogle-noablate";
    var d = {
      element: b,
    };
    c = c && c.Xa();
    if (b.hasAttribute("data-pub-vars")) {
      try {
        c = JSON.parse(b.getAttribute("data-pub-vars"));
      } catch (e) {
        return;
      }
      b.removeAttribute("data-pub-vars");
    }
    c && (d.params = c);
    (a.adsbygoogle = a.adsbygoogle || []).push(d);
  }

  function On(a) {
    var b = sn(a.document);
    Ya(b, function (c) {
      var d = Pn(a, c),
        e;
      if ((e = d)) (e = Bn(c, a)), (e = !((e ? e.y : 0) < Y(a).clientHeight));
      e &&
        (c.setAttribute("data-pub-vars", JSON.stringify(d)),
        c.removeAttribute("height"),
        c.style.removeProperty("height"),
        c.removeAttribute("width"),
        c.style.removeProperty("width"),
        Nn(a, c));
    });
  }

  function Pn(a, b) {
    b = b.getAttribute("google_element_uid");
    a = a.google_sv_map;
    if (!b || !a || !a[b]) return null;
    a = a[b];
    b = {};
    for (let c in Pe) a[Pe[c]] && (b[Pe[c]] = a[Pe[c]]);
    return b;
  }
  const Qn = (a, b) => {
    if (3 == b.nodeType)
      return (
        3 == b.nodeType
          ? ((b = b.data),
            (a = -1 != b.indexOf("&") ? af(b, a.document) : b),
            (a = /\S/.test(a)))
          : (a = !1),
        a
      );
    if (1 == b.nodeType) {
      var c = a.getComputedStyle(b);
      if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility)
        return !1;
      if ((c = b.tagName) && wm.contains(c.toUpperCase())) return !0;
      b = b.childNodes;
      for (c = 0; c < b.length; c++) if (Qn(a, b[c])) return !0;
    }
    return !1;
  };
  var Rn = (a) => {
    if (460 <= a)
      return (a = Math.min(a, 1200)), Math.ceil(800 > a ? a / 4 : 200);
    a = Math.min(a, 600);
    return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130;
  };
  var Sn = class {
    constructor() {
      this.j = {
        clearBoth: !0,
      };
    }
    l(a, b, c, d) {
      return Jn(d.document, a, null, null, this.j, b);
    }
    A(a) {
      return Rn(Math.min(a.screen.width || 0, a.screen.height || 0));
    }
  };

  function Tn(a) {
    var b = [];
    om(a.getElementsByTagName("p"), function (c) {
      100 <= Un(c) && b.push(c);
    });
    return b;
  }

  function Un(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    om(a.childNodes, function (c) {
      b += Un(c);
    });
    return b;
  }

  function Vn(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }

  function Wn(a, b) {
    if (null == a.j) return b;
    switch (a.j) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.j);
    }
  }

  function Xn(a, b) {
    var c = [];
    try {
      c = b.querySelectorAll(a.B);
    } catch (g) {}
    if (!c.length) return [];
    b = gb(c);
    b = Wn(a, b);
    "number" === typeof a.l &&
      ((c = a.l),
      0 > c && (c += b.length),
      (b = 0 <= c && c < b.length ? [b[c]] : []));
    if ("number" === typeof a.A) {
      c = [];
      for (var d = 0; d < b.length; d++) {
        var e = Tn(b[d]),
          f = a.A;
        0 > f && (f += e.length);
        0 <= f && f < e.length && c.push(e[f]);
      }
      b = c;
    }
    return b;
  }
  const Yn = class {
    constructor(a, b, c, d) {
      this.B = a;
      this.l = b;
      this.A = c;
      this.j = d;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.B,
        occurrenceIndex: this.l,
        paragraphIndex: this.A,
        ignoreMode: this.j,
      });
    }
  };

  function Zn(a) {
    if (!a) return null;
    var b = y(a, 7);
    if (y(a, 1) || a.getId() || 0 < Zb(a, 4).length) {
      var c = a.getId();
      b = Zb(a, 4);
      var d = y(a, 1),
        e = "";
      d && (e += d);
      c && (e += "#" + Vn(c));
      if (b) for (c = 0; c < b.length; c++) e += "." + Vn(b[c]);
      a = (b = e) ? new Yn(b, y(a, 2), y(a, 5), $n(y(a, 6))) : null;
    } else a = b ? new Yn(b, y(a, 2), y(a, 5), $n(y(a, 6))) : null;
    return a;
  }
  var ao = {
    1: 1,
    2: 2,
    3: 3,
    0: 0,
  };

  function $n(a) {
    return null == a ? a : ao[a];
  }

  function bo(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      var d = y(a[c], 1),
        e = y(a[c], 2);
      if (d && null != e) {
        var f = {};
        f.lc = d;
        f.value = e;
        b.push(f);
      }
    }
    return b;
  }

  function co(a, b) {
    var c = {};
    a && ((c.sc = y(a, 1)), (c.Pb = y(a, 2)), (c.clearBoth = !!A(a, 3)));
    b && ((c.Fb = bo(G(b, Vi, 3))), (c.Oa = bo(G(b, Vi, 4))));
    return c;
  }
  var eo = {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
    },
    fo = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
    };
  const go = class {
    constructor(a) {
      this.j = a;
    }
    l(a, b, c, d) {
      return Jn(d.document, a, null, null, this.j, b);
    }
    A() {
      return null;
    }
  };
  class ho {
    constructor(a) {
      this.l = a;
    }
    j(a) {
      a = Math.floor(a.l);
      const b = Rn(a);
      return new ln(["ap_container"], {
        google_reactive_ad_format: 27,
        google_responsive_auto_format: 16,
        google_max_num_ads: 1,
        google_ad_type: this.l,
        google_ad_format: a + "x" + b,
        google_ad_width: a,
        google_ad_height: b,
      });
    }
  }
  var io = class {
    constructor(a, b) {
      this.B = a;
      this.A = b;
    }
    j() {
      return this.B;
    }
    l() {
      return this.A;
    }
  };
  const jo = class {
    constructor(a) {
      this.j = a;
    }
    l(a, b, c, d) {
      var e = 0 < G(this.j, yj, 9).length ? G(this.j, yj, 9)[0] : null,
        f = co(D(this.j, zj, 3), e);
      if (!e) return null;
      if ((e = y(e, 1))) {
        d = d.document;
        var g = c.tagName;
        c = yf(new hf(d), g);
        c.style.clear = f.clearBoth ? "both" : "none";
        "A" == g && (c.style.display = "block");
        c.style.padding = "0px";
        c.style.margin = "0px";
        f.Fb && In(c.style, f.Fb);
        d = yf(new hf(d), "INS");
        f.Oa && In(d.style, f.Oa);
        c.appendChild(d);
        f = {
          Da: c,
          ha: d,
        };
        f.ha.setAttribute("data-ad-type", "text");
        f.ha.setAttribute("data-native-settings-key", e);
        Ln(f, a, null, b);
        a = f;
      } else a = null;
      return a;
    }
    A() {
      var a = 0 < G(this.j, yj, 9).length ? G(this.j, yj, 9)[0] : null;
      if (!a) return null;
      a = G(a, Vi, 3);
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10))
          return parseInt(y(c, 2), 10);
      }
      return null;
    }
  };
  var ko = class {
    constructor(a) {
      this.j = a;
    }
    l(a, b, c, d) {
      if (!this.j) return null;
      const e = this.j.google_ad_format || null,
        f = this.j.google_ad_slot || null;
      if ((c = c.style)) {
        var g = [];
        for (let h = 0; h < c.length; h++) {
          const l = c.item(h);
          "width" !== l &&
            "height" !== l &&
            g.push({
              lc: l,
              value: c.getPropertyValue(l),
            });
        }
        c = {
          Oa: g,
        };
      } else c = {};
      a = Jn(d.document, a, f, e, c, b);
      a.ha.setAttribute("data-pub-vars", JSON.stringify(this.j));
      return a;
    }
    A() {
      return this.j ? parseInt(this.j.google_ad_height, 10) || null : null;
    }
    Xa() {
      return this.j;
    }
  };
  class lo {
    constructor(a) {
      this.l = a;
    }
    j() {
      return new ln([], {
        google_ad_type: this.l,
        google_reactive_ad_format: 26,
        google_ad_format: "fluid",
      });
    }
  }
  var mo = class {
    constructor(a, b) {
      this.B = a;
      this.A = b;
    }
    l() {
      return this.A;
    }
    j(a) {
      a = Xn(this.B, a.document);
      return 0 < a.length ? a[0] : null;
    }
  };

  function no(a, b, c, d) {
    var e = a.V();
    if (!e) return null;
    var f = Zn(e);
    if (!f) return null;
    var g = eo[a.l()];
    var h = void 0 === g ? null : g;
    if (null === h) return null;
    g = (g = D(a, zj, 3)) ? A(g, 3) : null;
    f = new mo(f, h);
    h = Zb(a, 10).slice(0);
    Xb(e, 5) && h.push(1);
    var l = d ? d : {};
    d = y(a, 12);
    e = Xb(a, 4) ? D(a, Bj, 4) : null;
    switch (y(a, 8)) {
      case 1:
        return (
          (l = l.Hd || null),
          new oo(f, new go(co(D(a, zj, 3), null)), l, g, 0, h, e, c, b, d, a)
        );
      case 2:
        return new oo(
          f,
          new jo(a),
          l.ae || new lo("text"),
          g,
          1,
          h,
          e,
          c,
          b,
          d,
          a
        );
    }
    return null;
  }

  function po(a, b, c) {
    const d = [];
    for (let e = 0; e < a.length; e++) {
      const f = no(a[e], e, b, c);
      null !== f && d.push(f);
    }
    return d;
  }

  function qo(a) {
    return a.B;
  }

  function ro(a) {
    return a.D instanceof ko ? a.D.Xa() : null;
  }

  function so(a, b, c) {
    qm(a.L, b) || a.L.set(b, []);
    a.L.get(b).push(c);
  }

  function to(a) {
    return tn(a.j.document, a.I || !1);
  }

  function uo(a) {
    return a.D.A(a.j);
  }

  function vo(a, b = null, c = null) {
    return new oo(
      a.H,
      b || a.D,
      c || a.T,
      a.I,
      a.Ga,
      a.ic,
      a.bb,
      a.j,
      a.Z,
      a.G,
      a.A,
      a.C,
      a.O
    );
  }
  class oo {
    constructor(
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      l,
      k = null,
      m = null,
      n = null,
      q = null
    ) {
      this.H = a;
      this.D = b;
      this.T = c;
      this.I = d;
      this.Ga = e;
      this.ic = f;
      this.bb = g ? g : new Bj();
      this.j = h;
      this.Z = l;
      this.G = k;
      this.A = m;
      this.C = n;
      this.O = q;
      this.J = [];
      this.B = !1;
      this.L = new um();
    }
    N() {
      return this.j;
    }
    l() {
      return this.H.l();
    }
  }
  const wo = {
    TABLE: {
      Sa: new Qm([1, 2]),
    },
    THEAD: {
      Sa: new Qm([0, 3, 1, 2]),
    },
    TBODY: {
      Sa: new Qm([0, 3, 1, 2]),
    },
    TR: {
      Sa: new Qm([0, 3, 1, 2]),
    },
    TD: {
      Sa: new Qm([0, 3]),
    },
  };

  function xo(a, b, c, d) {
    const e = c.childNodes;
    c = c.querySelectorAll(b);
    b = [];
    for (const f of c)
      (c = Xa(e, f)), 0 > c || b.push(new yo(a, [f], c, f, 3, uf(f).trim(), d));
    return b;
  }

  function zo(a, b, c) {
    let d = [];
    const e = [],
      f = b.childNodes,
      g = f.length;
    let h = 0,
      l = "";
    for (let n = 0; n < g; n++) {
      var k = f[n];
      if (1 == k.nodeType || 3 == k.nodeType) {
        a: {
          var m = k;
          if (1 != m.nodeType) {
            m = null;
            break a;
          }
          if ("BR" == m.tagName) break a;
          const q = c.getComputedStyle(m).getPropertyValue("display");
          m = "inline" == q || "inline-block" == q ? null : m;
        }
        m
          ? (d.length && l && e.push(new yo(a, d, n - 1, m, 0, l, c)),
            (d = []),
            (h = n + 1),
            (l = ""))
          : (d.push(k), (k = uf(k).trim()), (l += k && l ? " " + k : k));
      }
    }
    d.length && l && e.push(new yo(a, d, h, b, 2, l, c));
    return e;
  }

  function Ao(a, b) {
    return a.j - b.j;
  }

  function Bo(a) {
    const b = Aj();
    return new oo(
      new io(a.Lb, a.Mb),
      new go({
        clearBoth: !0,
      }),
      null,
      !0,
      2,
      [],
      b,
      a.l,
      null,
      null,
      null,
      a.A,
      a.j
    );
  }
  class yo {
    constructor(a, b, c, d, e, f, g) {
      this.A = a;
      this.Ra = b.slice(0);
      this.j = c;
      this.Lb = d;
      this.Mb = e;
      this.B = f;
      this.l = g;
    }
    N() {
      return this.l;
    }
  }

  function Co(a) {
    return fb(
      a.B ? zo(a.j, a.na, a.l) : [],
      a.A ? xo(a.j, a.A, a.na, a.l) : []
    ).filter((b) => {
      var c = b.Lb.tagName;
      c
        ? ((c = wo[c.toUpperCase()]), (b = null != c && c.Sa.contains(b.Mb)))
        : (b = !1);
      return !b;
    });
  }
  class Do {
    constructor(a, b, c) {
      this.na = a;
      this.A = b.pb;
      this.B = b.Ec;
      this.j = b.articleStructure;
      this.l = c;
    }
  }

  function Eo(a, b) {
    if (!b) return !1;
    const c = na(b),
      d = a.j.get(c);
    if (null != d) return d;
    if (
      1 == b.nodeType &&
      ("UL" == b.tagName || "OL" == b.tagName) &&
      "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")
    )
      return a.j.set(c, !0), !0;
    b = Eo(a, b.parentNode);
    a.j.set(c, b);
    return b;
  }

  function Fo(a, b) {
    return cb(b.Ra, (c) => Eo(a, c));
  }
  class Go {
    constructor(a) {
      this.j = new um();
      this.l = a;
    }
  }
  class Ho {
    constructor(a, b) {
      this.B = a;
      this.j = [];
      this.l = [];
      this.A = b;
    }
  }
  var Jo = (a, { ki: b = !1, mi: c = 3, Ee: d = null } = {}) => {
      a = Co(a);
      return Io(a, b, c, d);
    },
    Io = (a, b = !1, c = 3, d = null) => {
      if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
      var e = a.slice(0);
      e.sort(Ao);
      a = [];
      b = new Ho(b, d);
      for (const k of e) {
        d = b;
        e = {
          Hb: k,
          zb: 51 > k.B.length ? !1 : null != d.A ? !Fo(d.A, k) : !0,
        };
        if (d.B || e.zb) {
          if (d.j.length) {
            var f = d.j[d.j.length - 1].Hb;
            b: {
              var g = f.N();
              var h = f.Ra[f.Ra.length - 1];
              f = e.Hb.Ra[0];
              if (!h || !f) {
                g = !1;
                break b;
              }
              var l = h.parentElement;
              const m = f.parentElement;
              if (l && m && l == m) {
                l = 0;
                for (h = h.nextSibling; 10 > l && h; ) {
                  if (h == f) {
                    g = !0;
                    break b;
                  }
                  if (Qn(g, h)) break;
                  h = h.nextSibling;
                  l++;
                }
                g = !1;
              } else g = !1;
            }
          } else g = !0;
          g
            ? (d.j.push(e), e.zb && d.l.push(e.Hb))
            : ((d.j = [e]), (d.l = e.zb ? [e.Hb] : []));
        }
        if (b.l.length >= c) {
          if (1 >= b.l.length) d = null;
          else {
            e = b.l[1];
            for (d = b; d.j.length && !d.j[0].zb; ) d.j.shift();
            d.j.shift();
            d.l.shift();
            d = e;
          }
          d && a.push(d);
        }
      }
      return a;
    };
  var Lo = (a, b) => {
      a = Ko(a, b);
      const c = new Go(b);
      return Km(a, (d) =>
        Jo(d, {
          Ee: c,
        })
      );
    },
    Ko = (a, b) => {
      const c = new um();
      a.forEach((d) => {
        var e = Zn(D(d, Xi, 1));
        if (e) {
          const f = e.toString();
          qm(c, f) ||
            c.set(f, {
              articleStructure: d,
              xd: e,
              pb: null,
              Ec: !1,
            });
          e = c.get(f);
          (d = (d = D(d, Xi, 2)) ? y(d, 7) : null)
            ? (e.pb = e.pb ? e.pb + "," + d : d)
            : (e.Ec = !0);
        }
      });
      return tm(c)
        .map((d) => {
          const e = Xn(d.xd, b.document);
          return e.length ? new Do(e[0], d, b) : null;
        })
        .filter((d) => null != d);
    };
  const Mo = (a) => {
      a = a.na.getBoundingClientRect();
      return 0 < a.width && 0 < a.height;
    },
    No = (a) => {
      let b = 0;
      a.forEach((c) => (b = Math.max(b, c.na.getBoundingClientRect().width)));
      return (c) => c.na.getBoundingClientRect().width > 0.5 * b;
    },
    Oo = (a) => {
      const b = Y(a).clientHeight || 0;
      return (c) => c.na.getBoundingClientRect().height >= 0.75 * b;
    },
    Po = (a, b) =>
      a.na.getBoundingClientRect().top - b.na.getBoundingClientRect().top;
  var Qo = (a) =>
      (null == a ? 0 : a.google_ad_slot)
        ? Vm(
            new cn(1, {
              qd: a.google_ad_slot,
            })
          )
        : Xm("Missing dimension when creating placement id"),
    So = (a) => {
      switch (a.Ga) {
        case 0:
        case 1:
          var b = a.A;
          null == b
            ? (a = null)
            : ((a = b.V()),
              null == a
                ? (a = null)
                : ((b = b.l()),
                  (a =
                    null == b
                      ? null
                      : new cn(0, {
                          xc: [a],
                          Yc: b,
                        }))));
          return null != a
            ? Vm(a)
            : Xm("Missing dimension when creating placement id");
        case 2:
          return (
            (a = Ro(a)),
            null != a
              ? Vm(a)
              : Xm("Missing dimension when creating placement id")
          );
        default:
          return Xm("Invalid type: " + a.Ga);
      }
    };
  const Ro = (a) => {
    if (null == a || null == a.C) return null;
    const b = D(a.C, Xi, 1),
      c = D(a.C, Xi, 2);
    if (null == b || null == c) return null;
    const d = a.O;
    if (null == d) return null;
    a = a.l();
    return null == a
      ? null
      : new cn(0, {
          xc: [b, c],
          $d: d,
          Yc: fo[a],
        });
  };

  function To(a) {
    const b = ro(a.P);
    return (b ? Qo(b) : So(a.P)).map((c) => fn(c));
  }

  function Uo(a) {
    a.j = a.j || To(a);
    return a.j;
  }

  function Vo(a, b) {
    if (a.P.B) throw Error("AMA:AP:AP");
    yn(b, a.V(), a.P.l());
    a = a.P;
    a.B = !0;
    null != b && a.J.push(b);
  }
  var Wo = class {
    constructor(a, b, c) {
      this.P = a;
      this.l = b;
      this.U = c;
      this.j = null;
    }
    V() {
      return this.l;
    }
    fill(a, b) {
      var c = this.P;
      (a = c.D.l(a, b, this.l, c.j)) && Vo(this, a.Da);
      return a;
    }
  };
  var Xo = yi(754, function (a, b) {
    var c = [],
      d = [];
    try {
      for (var e = [], f = 0; f < a.length; f++) {
        var g = a[f],
          h = g.H.j(g.j);
        h &&
          e.push({
            Vc: g,
            anchorElement: h,
          });
      }
      for (f = 0; f < e.length; f++) {
        a = d;
        var l = a.push;
        var k = e[f],
          m = k.anchorElement,
          n = k.Vc,
          q = n.I,
          r = n.j.document.createElement("div");
        r.className = "google-auto-placed";
        var t = r.style;
        t.textAlign = "center";
        t.width = "100%";
        t.height = "0px";
        t.clear = q ? "both" : "none";
        var x = r;
        try {
          yn(x, m, n.l());
          var H = x;
        } catch (E) {
          throw (vn(x), E);
        }
        l.call(a, H);
      }
      var B = Ml(b),
        C = Nl(b);
      for (f = 0; f < d.length; f++) {
        b = C;
        l = B;
        var F = d[f].getBoundingClientRect(),
          I = e[f];
        c.push(
          new Wo(
            I.Vc,
            I.anchorElement,
            new Dm(F.left + b, F.top + l, F.right - F.left)
          )
        );
      }
    } finally {
      for (f = 0; f < d.length; f++) vn(d[f]);
    }
    return c;
  });

  function Yo(a, b) {
    const c = Co(b);
    c.sort(Ao);
    return new Zo(a, b, c);
  }

  function $o(a) {
    if (!a.l) {
      if (a.A >= a.B.length) var b = null;
      else {
        {
          const c = a.B[a.A++].Ra[0];
          la(c) && 1 == c.nodeType
            ? (b = ap(a, c, 0))
            : ((b = a.j.document.createElement("div")),
              L(b, {
                display: "none",
              }),
              c.parentNode.insertBefore(b, c),
              (b = ap(a, b, 3)));
        }
        b = Xo([b], a.j)[0] || null;
      }
      if (b) return b;
      a.l = !0;
    }
    return null;
  }

  function ap(a, b, c) {
    return new oo(
      new io(b, c),
      new go({}),
      null,
      !0,
      2,
      [],
      null,
      a.j,
      null,
      null,
      null,
      a.C.j,
      null
    );
  }
  var Zo = class {
    constructor(a, b, c) {
      this.j = a;
      this.C = b;
      this.B = c;
      this.l = !1;
      this.A = 0;
    }
  };
  var bp = class {
    constructor(a) {
      this.l = a;
    }
    j() {
      return $o(this.l);
    }
  };
  const cp = {
      1: "0.5vp",
      2: "300px",
    },
    dp = {
      1: 700,
      2: 1200,
    },
    ep = {
      [1]: {
        ed: "3vp",
        qc: "1vp",
        dd: "0.3vp",
      },
      [2]: {
        ed: "900px",
        qc: "300px",
        dd: "90px",
      },
    };

  function fp(a) {
    const b = gp(a);
    return hp(b, Y(a).clientHeight || dp[b]);
  }
  class ip {
    constructor(a, b, c, d, e, f) {
      this.A = a;
      this.C = b;
      this.D = c.sort((g, h) => g.adCount - h.adCount);
      this.l = d;
      this.B = e;
      this.j = f;
    }
  }

  function jp(a, b) {
    for (let c of a) if (y(c, 1) == b) return c;
    return null;
  }

  function kp(a, b) {
    if (void 0 === a) return null;
    const c = [];
    for (let d of a) {
      a = y(d, 1);
      const e = lp(y(d, 2), b);
      if ("number" !== typeof a || null === e) return null;
      c.push({
        adCount: a,
        pc: {
          Eb: e,
          va: lp(y(d, 3), b),
        },
      });
    }
    return c;
  }

  function mp(a, b) {
    const c = lp(y(a, 2), b),
      d = lp(y(a, 5), b);
    if (null === c) return null;
    const e = y(a, 4);
    if (null == e) return null;
    var f = G(a, gj, 3);
    f = kp(f, b);
    if (null === f) return null;
    const g = D(a, hj, 7);
    return new ip(c, d, f, e, $b(a, 6), g ? np(g, b) : void 0);
  }

  function hp(a, b) {
    a = lp(cp[a], b);
    return new ip(null === a ? Infinity : a, null, [], 3, null);
  }

  function lp(a, b) {
    if (!a) return null;
    const c = parseFloat(a);
    return isNaN(c)
      ? null
      : a.endsWith("px")
      ? c
      : a.endsWith("vp")
      ? c * b
      : null;
  }

  function gp(a) {
    a = 900 <= Y(a).clientWidth;
    return zf() && !a ? 1 : 2;
  }

  function op(a, b, c) {
    if (4 > c) return [];
    const d = Math.ceil(c / 2);
    return [
      {
        adCount: d,
        pc: {
          Eb: 2 * a,
          va: 2 * b,
        },
      },
      {
        adCount: d + Math.ceil((c - d) / 2),
        pc: {
          Eb: 3 * a,
          va: 3 * b,
        },
      },
    ];
  }

  function np(a, b) {
    return {
      Rc: lp(y(a, 2), b) || 0,
      Pc: y(a, 3) || 1,
      Pa: lp(y(a, 1), b) || 0,
    };
  }

  function pp(a, b, c) {
    return hm(
      {
        top: a.j.top - (c + 1),
        right: a.j.right + (c + 1),
        bottom: a.j.bottom + (c + 1),
        left: a.j.left - (c + 1),
      },
      b.j
    );
  }

  function qp(a) {
    if (!a.length) return null;
    const b = im(a.map((c) => c.j));
    a = a.reduce((c, d) => c + d.l, 0);
    return new rp(b, a);
  }
  class rp {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
  }

  function sp(a = window) {
    a = a.googletag;
    return (null === a || void 0 === a ? 0 : a.apiReady) ? a : void 0;
  }
  var yp = (a, b) => {
    const c = gb(b.document.querySelectorAll(".google-auto-placed")),
      d = tp(b),
      e = up(b),
      f = vp(b),
      g = wp(b),
      h = gb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
      l = gb(b.document.querySelectorAll("div.googlepublisherpluginad"));
    let k = [].concat(
      gb(
        b.document.querySelectorAll(
          "iframe[id^=aswift_],iframe[id^=google_ads_frame]"
        )
      ),
      gb(b.document.querySelectorAll("ins.adsbygoogle"))
    );
    b = [];
    for (const [m, n] of [
      [a.wb, c],
      [a.Fa, d],
      [a.Zd, e],
      [a.xb, f],
      [a.yb, g],
      [a.Xd, h],
      [a.Yd, l],
    ])
      (a = n), !1 === m ? (b = b.concat(a)) : (k = k.concat(a));
    a = xp(k);
    b = xp(b);
    a = a.slice(0);
    for (const m of b)
      for (b = 0; b < a.length; b++)
        (m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
    return a;
  };
  const zp = (a) => {
      const b = sp(a);
      return b
        ? $a(
            ab(b.pubads().getSlots(), (c) =>
              a.document.getElementById(c.getSlotElementId())
            ),
            (c) => null != c
          )
        : null;
    },
    tp = (a) =>
      gb(
        a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')
      ),
    up = (a) =>
      gb(
        a.document.querySelectorAll(
          "ins.adsbygoogle[data-ad-format=autorelaxed]"
        )
      ),
    vp = (a) =>
      (zp(a) || gb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(
        gb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))
      ),
    wp = (a) =>
      gb(
        a.document.querySelectorAll(
          "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
        )
      );
  var xp = (a) => {
    const b = [];
    for (const c of a) {
      a = !0;
      for (let d = 0; d < b.length; d++) {
        const e = b[d];
        if (e.contains(c)) {
          a = !1;
          break;
        }
        if (c.contains(e)) {
          a = !1;
          b[d] = c;
          break;
        }
      }
      a && b.push(c);
    }
    return b;
  };
  var Ap = yi(453, yp),
    Bp = yi(454, (a, b) => {
      const c = gb(b.document.querySelectorAll(".google-auto-placed")),
        d = tp(b),
        e = up(b),
        f = vp(b),
        g = wp(b),
        h = gb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
      b = gb(b.document.querySelectorAll("div.googlepublisherpluginad"));
      return xp(
        [].concat(
          !0 === a.wb ? c : [],
          !0 === a.Fa ? d : [],
          !0 === a.Zd ? e : [],
          !0 === a.xb ? f : [],
          !0 === a.yb ? g : [],
          !0 === a.Xd ? h : [],
          !0 === a.Yd ? b : []
        )
      );
    });

  function Cp(a, b, c) {
    const d = Dp(a);
    b = Ep(d, b, c);
    return new Fp(a, d, b);
  }

  function Gp(a) {
    return 1 < (a.bottom - a.top) * (a.right - a.left);
  }

  function Hp(a) {
    return a.j.map((b) => b.box);
  }

  function Ip(a) {
    return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0);
  }
  class Fp {
    constructor(a, b, c) {
      this.A = a;
      this.j = b.slice(0);
      this.B = c.slice(0);
      this.l = null;
    }
  }

  function Dp(a) {
    const b = Ap(
        {
          Fa: !1,
        },
        a
      ),
      c = Nl(a),
      d = Ml(a);
    return b
      .map((e) => {
        const f = e.getBoundingClientRect();
        return (e =
          !!e.className && -1 != e.className.indexOf("google-auto-placed")) ||
          Gp(f)
          ? {
              box: {
                top: f.top + d,
                right: f.right + c,
                bottom: f.bottom + d,
                left: f.left + c,
              },
              hi: e ? 1 : 0,
            }
          : null;
      })
      .filter(le((e) => null === e));
  }

  function Ep(a, b, c) {
    return void 0 != b && a.length <= (void 0 != c ? c : 8)
      ? Jp(a, b)
      : ab(a, (d) => new rp(d.box, 1));
  }

  function Jp(a, b) {
    a = ab(a, (d) => new rp(d.box, 1));
    const c = [];
    for (; 0 < a.length; ) {
      let d = a.pop(),
        e = !0;
      for (; e; ) {
        e = !1;
        for (let f = 0; f < a.length; f++)
          if (pp(d, a[f], b)) {
            d = qp([d, a[f]]);
            Array.prototype.splice.call(a, f, 1);
            e = !0;
            break;
          }
      }
      c.push(d);
    }
    return c;
  }

  function Kp(a, b, c) {
    const d = Cm(c, b);
    return !cb(a, (e) => hm(e, d));
  }

  function Lp(a, b, c, d, e) {
    e = e.U;
    const f = Cm(e, b),
      g = Cm(e, c),
      h = Cm(e, d);
    return !cb(a, (l) => hm(l, g) || (hm(l, f) && !hm(l, h)));
  }

  function Mp(a, b, c, d) {
    const e = Hp(a);
    if (Kp(e, b, d.U)) return !0;
    if (!Lp(e, b, c.Rc, c.Pa, d)) return !1;
    const f = new rp(Cm(d.U, 0), 1);
    a = $a(a.B, (g) => pp(g, f, c.Pa));
    b = bb(a, (g, h) => g + h.l, 1);
    return 0 === a.length || b > c.Pc ? !1 : !0;
  }
  var Np = (a, b) => {
    const c = [];
    let d = a;
    for (
      a = () => {
        c.push({
          anchor: d.anchor,
          position: d.position,
        });
        return d.anchor == b.anchor && d.position == b.position;
      };
      d;

    ) {
      switch (d.position) {
        case 1:
          if (a()) return c;
          d.position = 2;
        case 2:
          if (a()) return c;
          if (d.anchor.firstChild) {
            d = {
              anchor: d.anchor.firstChild,
              position: 1,
            };
            continue;
          } else d.position = 3;
        case 3:
          if (a()) return c;
          d.position = 4;
        case 4:
          if (a()) return c;
      }
      for (
        ;
        d &&
        !d.anchor.nextSibling &&
        d.anchor.parentNode != d.anchor.ownerDocument.body;

      ) {
        d = {
          anchor: d.anchor.parentNode,
          position: 3,
        };
        if (a()) return c;
        d.position = 4;
        if (a()) return c;
      }
      d && d.anchor.nextSibling
        ? (d = {
            anchor: d.anchor.nextSibling,
            position: 1,
          })
        : (d = null);
    }
    return c;
  };

  function Op(a, b) {
    const c = new bn(),
      d = new vm();
    b.forEach((e) => {
      if (nc(e, pj, 1, sj)) {
        e = nc(e, pj, 1, sj);
        if (D(e, nj, 1) && D(e, nj, 1).V() && D(e, nj, 2) && D(e, nj, 2).V()) {
          const g = Pp(a, D(e, nj, 1).V()),
            h = Pp(a, D(e, nj, 2).V());
          if (g && h)
            for (var f of Np(
              {
                anchor: g,
                position: D(e, nj, 1).l(),
              },
              {
                anchor: h,
                position: D(e, nj, 2).l(),
              }
            ))
              c.set(na(f.anchor), f.position);
        }
        D(e, nj, 3) &&
          D(e, nj, 3).V() &&
          (f = Pp(a, D(e, nj, 3).V())) &&
          c.set(na(f), D(e, nj, 3).l());
      } else
        nc(e, qj, 2, sj)
          ? Qp(a, nc(e, qj, 2, sj), c)
          : nc(e, rj, 3, sj) && Rp(a, nc(e, rj, 3, sj), d);
    });
    return new Sp(c, d);
  }
  class Sp {
    constructor(a, b) {
      this.l = a;
      this.j = b;
    }
  }
  const Qp = (a, b, c) => {
      D(b, Xi, 1) &&
        (a = Tp(a, D(b, Xi, 1))) &&
        a.forEach((d) => {
          d = na(d);
          c.set(d, 1);
          c.set(d, 4);
          c.set(d, 2);
          c.set(d, 3);
        });
    },
    Rp = (a, b, c) => {
      D(b, Xi, 1) &&
        (a = Tp(a, D(b, Xi, 1))) &&
        a.forEach((d) => {
          c.add(na(d));
        });
    },
    Pp = (a, b) => ((a = Tp(a, b)) && 0 < a.length ? a[0] : null),
    Tp = (a, b) => ((b = Zn(b)) ? Xn(b, a) : null);

  function Up(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b; ) {
      if (Vp(b)) return !0;
      if (a.j.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach((d) => a.j.add(d));
    return !1;
  }

  function Wp(a) {
    a = Xp(a);
    return a.has("all") || a.has("after");
  }

  function cq(a) {
    a = Xp(a);
    return a.has("all") || a.has("before");
  }

  function Xp(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new Set(a.split("|"))
      : new Set();
  }

  function Vp(a) {
    const b = Xp(a);
    return (
      a &&
      ("AUTO-ADS-EXCLUSION-AREA" === a.tagName ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  var dq = class {
    constructor() {
      this.j = new Set();
    }
  };

  function eq(a) {
    return function (b) {
      return Xo(b, a);
    };
  }

  function fq(a) {
    const b = Y(a).clientHeight;
    return b ? ua(gq, b + Ml(a)) : ie;
  }

  function hq(a, b, c) {
    if (0 > a) throw Error("ama::ead:nd");
    if (Infinity === a) return ie;
    const d = Hp(c || Cp(b));
    return (e) => Kp(d, a, e.U);
  }

  function iq(a, b, c, d) {
    if (0 > a || 0 > b.Rc || 0 > b.Pc || 0 > b.Pa) throw Error("ama::ead:nd");
    return Infinity === a ? ie : (e) => Mp(d || Cp(c, b.Pa), a, b, e);
  }

  function jq(a) {
    if (!a.length) return ie;
    const b = new Qm(a);
    return (c) => b.contains(c.Ga);
  }

  function kq(a) {
    return function (b) {
      for (let c of b.ic) if (-1 < a.indexOf(c)) return !1;
      return !0;
    };
  }

  function lq(a) {
    return a.length
      ? function (b) {
          const c = b.ic;
          return a.some((d) => -1 < c.indexOf(d));
        }
      : je;
  }

  function mq(a, b) {
    if (0 >= a) return je;
    const c = Y(b).scrollHeight - a;
    return function (d) {
      return d.U.j <= c;
    };
  }

  function nq(a) {
    const b = {};
    a &&
      a.forEach((c) => {
        b[c] = !0;
      });
    return function (c) {
      return !b[y(c.bb, 2) || 0];
    };
  }

  function oq(a) {
    return a.length ? (b) => a.includes(y(b.bb, 2) || 0) : je;
  }

  function pq(a) {
    return a.length ? (b) => a.includes(y(b.bb, 1) || 0) : je;
  }

  function qq(a, b) {
    const c = Op(a, b);
    return function (d) {
      var e = d.V();
      d = fo[d.P.l()];
      var f = na(e);
      f = c.l.j.get(f);
      if (!(f = f ? f.contains(d) : !1))
        a: {
          if (c.j.contains(na(e)))
            switch (d) {
              case 2:
              case 3:
                f = !0;
                break a;
              default:
                f = !1;
                break a;
            }
          for (e = e.parentElement; e; ) {
            if (c.j.contains(na(e))) {
              f = !0;
              break a;
            }
            e = e.parentElement;
          }
          f = !1;
        }
      return !f;
    };
  }

  function rq() {
    const a = new dq();
    return function (b) {
      var c = b.V();
      b = fo[b.P.l()];
      a: switch (b) {
        case 1:
          var d = Wp(c.previousElementSibling) || cq(c);
          break a;
        case 4:
          d = Wp(c) || cq(c.nextElementSibling);
          break a;
        case 2:
          d = cq(c.firstElementChild);
          break a;
        case 3:
          d = Wp(c.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + b);
      }
      return !(d || Up(a, c, b));
    };
  }
  const gq = (a, b) => b.U.j >= a,
    sq = (a, b, c) => {
      c = c.U.l;
      return a <= c && c <= b;
    };
  var tq = class {
    constructor(a, b) {
      this.A = a;
      this.l = b;
    }
    j() {
      const a = fq(this.A);
      let b = $o(this.l);
      for (; b; ) {
        if (a(b)) return b;
        b = $o(this.l);
      }
      return null;
    }
  };
  var uq = class {
    constructor(a, b) {
      this.l = a;
      this.A = b;
    }
    j() {
      var a = new Dj();
      var b = D(this.A.j, Xi, 1);
      a = gc(a, 1, b);
      a = z(a, 2, 2);
      a = z(a, 8, 1);
      a = po([a], this.l);
      return Xo(a, this.l)[0] || null;
    }
  };
  const vq = (a, b, c) => {
      a = a.createElement("script");
      he(a, Pc(tc(c)));
      a.setAttribute("async", "true");
      b.appendChild(a);
    },
    wq = {
      [1]: "out_of_view",
    };
  class xq {
    constructor() {
      this.promise = new Promise((a, b) => {
        this.resolve = a;
        this.j = b;
      });
    }
  }

  function yq() {
    const { promise: a, resolve: b } = new xq();
    return {
      promise: a,
      resolve: b,
    };
  }

  function zq(a, b, c = () => {}) {
    b.google_llp || (b.google_llp = {});
    b = b.google_llp;
    let d = b[a];
    if (d) return d;
    d = yq();
    b[a] = d;
    c();
    return d;
  }

  function Aq(a, b, c) {
    return zq(a, b, () => {
      Gf(b.document, c);
    }).promise;
  }

  function Bq(a, b, c) {
    return new Cq(
      Aq(7, a, c)
        .then((d) => {
          d.init(b);
          d.handleAdConfig({
            preloadAdBreaks: "on",
            sound: "on",
          });
          return d;
        })
        .catch(Ai(915))
    );
  }

  function Dq(a, b) {
    a.j ||
      (a.l.then((c) => {
        c.handleAdBreak({
          type: "preroll",
          name: "audiosense-preroll",
          adBreakDone: b,
        });
      }),
      (a.j = !0));
  }
  var Cq = class {
    constructor(a) {
      this.l = a;
      this.j = !1;
    }
  };
  var Eq = {
      ia: "ama_success",
      ca: 0.1,
      qa: !0,
    },
    Fq = {
      ia: "ama_failure",
      ca: 0.1,
      qa: !0,
    },
    Gq = {
      ia: "ama_inf_scr",
      ca: 0.1,
      qa: !0,
    },
    Hq = {
      ia: "ama_inf_scr",
      ca: 0.1,
      qa: !0,
    },
    Iq = {
      ia: "ama_coverage",
      ca: 0.1,
      qa: !0,
    },
    Jq = {
      ia: "ama_inf_scr",
      ca: 1,
      qa: !0,
    },
    Kq = {
      ia: "ama_opt",
      ca: 0.1,
      qa: !0,
    },
    Lq = {
      ia: "ama_aud_sen",
      ca: 1,
      qa: !0,
    };

  function Mq(a, b) {
    for (var c = 0; c < b.length; c++) a.la(b[c]);
    return a;
  }

  function Nq(a, b) {
    a.A = a.A ? a.A : b;
    return a;
  }
  class Oq {
    constructor(a) {
      this.G = {};
      this.G.c = a;
      this.C = [];
      this.A = null;
      this.D = [];
      this.H = 0;
    }
    La(a) {
      this.G.wpc = a;
      return this;
    }
    la(a) {
      for (var b = 0; b < this.C.length; b++) if (this.C[b] == a) return this;
      this.C.push(a);
      return this;
    }
    B(a) {
      var b = Cc(this.G);
      0 < this.H && (b.t = this.H);
      b.err = this.C.join();
      b.warn = this.D.join();
      this.A &&
        ((b.excp_n = this.A.name),
        (b.excp_m = this.A.message && this.A.message.substring(0, 512)),
        (b.excp_s = this.A.stack && Sh(this.A.stack, "")));
      b.w = 0 < a.innerWidth ? a.innerWidth : null;
      b.h = 0 < a.innerHeight ? a.innerHeight : null;
      return b;
    }
  }

  function Pq(a, b, c) {
    c = c.B(a.j);
    b.qa && (c.pvc = jg(a.j));
    0 < b.ca && ((c.r = b.ca), S(b.ia, c, b.ca));
  }
  var Qq = class {
    constructor(a) {
      this.j = a;
    }
  };

  function Rq(a, b, c, d) {
    let e;
    const f = null == (e = D(b, vj, 6)) ? void 0 : G(e, wj, 1);
    return f && 0 != f.length
      ? (b = D(b, Yi, 27))
        ? D(b, Zi, 2)
          ? Vm(new Sq(a, f, b, c, d))
          : Xm("No AudioSenseConfig.PlacementConfig found")
        : Xm("No AudioSenseConfig found")
      : Xm("No ArticleStructure found");
  }

  function Tq(a) {
    a.A.addEventListener("playing", () => {
      a.C.j || (a.A.pause(), Dq(a.C, () => a.A.play()));
    });
  }

  function Uq(a) {
    return (a = D(a.l, aj, 3))
      ? G(a, bj, 1).some((b) => 1 === ac(b, 1, 0))
      : !1;
  }

  function Vq(a, b) {
    let c;
    a = Object.assign({}, b, {
      vh: Y(a.j).clientHeight,
      eid: null == (c = D(a.l, cj, 4)) ? void 0 : J(c, 2),
    });
    S(Lq.ia, a, Lq.ca);
  }
  var Sq = class {
    constructor(a, b, c, d, e) {
      this.j = a;
      this.G = b;
      this.l = c;
      this.B = d;
      this.D = e;
      this.A = this.C = null;
    }
  };
  const Wq = ["-webkit-text-fill-color"];

  function Xq(a) {
    if (sb) {
      {
        const c = If(a.document.body, a);
        if (c) {
          a = {};
          var b = c.length;
          for (let d = 0; d < b; ++d) a[c[d]] = "initial";
          a = Yq(a);
        } else a = Zq();
      }
    } else a = Zq();
    return a;
  }
  var Zq = () => {
    const a = {
      all: "initial",
    };
    Ya(Wq, (b) => {
      a[b] = "unset";
    });
    return a;
  };

  function Yq(a) {
    Ya(Wq, (b) => {
      delete a[b];
    });
    return a;
  }
  var $q = class {
    constructor(a) {
      this.j = a;
    }
    pa(a) {
      const b = a.document.createElement("div");
      L(b, Xq(a));
      L(b, {
        width: "100%",
        "max-width": "1000px",
        margin: "auto",
      });
      b.appendChild(this.j);
      const c = a.document.createElement("div");
      L(c, Xq(a));
      L(c, {
        width: "100%",
        "text-align": "center",
        display: "block",
        padding: "5px 5px 2px",
        "box-sizing": "border-box",
        "background-color": "#FFF",
      });
      c.appendChild(b);
      return c;
    }
  };
  var ar = (a, b) =>
    (b = D(b, vj, 6)) ? Lo(G(b, wj, 1), a).map((c) => Bo(c)) : [];
  var br = {},
    cr = {};

  function dr() {
    throw Error("Do not instantiate directly");
  }
  dr.prototype.j = null;
  dr.prototype.pa = function () {
    return this.content;
  };
  dr.prototype.toString = function () {
    return this.content;
  };

  function er(a) {
    if (a.Qb !== br) throw Error("Sanitized content was not of kind HTML.");
    return xd(a.toString(), a.j || null);
  }

  function fr() {
    dr.call(this);
  }
  xa(fr, dr);
  fr.prototype.Qb = br;
  var gr = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.j = d);
      return c;
    };
  })(fr);

  function hr(a) {
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
  }

  function ir(a) {
    return null != a && a.Qb === br
      ? String(String(a.pa()).replace(jr, "").replace(kr, "&lt;")).replace(
          lr,
          mr
        )
      : String(a).replace(nr, mr);
  }

  function or(a) {
    null != a && a.Qb === cr
      ? (a = hr(a.pa()))
      : null == a
      ? (a = "")
      : a instanceof hd
      ? (a = hr(gd(a)))
      : a instanceof sd
      ? (a = hr(
          a instanceof sd && a.constructor === sd
            ? a.j
            : "type_error:SafeStyleSheet"
        ))
      : ((a = String(a)), (a = pr.test(a) ? a : "zSoyz"));
    return a;
  }
  const qr = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };

  function mr(a) {
    return qr[a];
  }
  const nr = /[\x00\x22\x26\x27\x3c\x3e]/g,
    lr = /[\x00\x22\x27\x3c\x3e]/g,
    pr =
      /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
    jr = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    kr = /</g;
  /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
  var rr = class {
    constructor(a, b, c, d) {
      this.j = a;
      this.l = b;
      this.host = c;
      this.language = d;
    }
    init() {
      this.j.setAttribute("id", "prose-iframe");
      this.j.setAttribute("width", "100%");
      this.j.setAttribute("height", "100%");
      ce(
        this.j,
        id({
          "box-sizing": "border-box",
          border: "unset",
        })
      );
      var a = this.l;
      var b = this.host,
        c = this.language;
      a = gr(
        '<div class="gcse-search" data-gname="' +
          ir("auto-rs-prose") +
          '" data-adclient="' +
          ir(a) +
          '" data-as_sitesearch="' +
          ir(b) +
          '" data-gl="' +
          ir(c) +
          '"></div>'
      );
      a = er(a);
      b = gr(
        "<style>.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style>"
      );
      c = er(b);
      b = {
        style: id({
          margin: 0,
        }),
      };
      var d = {
          src: Rc(
            vc(
              "https://cse.google.com/cse.js?cx=9d449ff4a772956c6&language=%{lang}"
            ),
            {
              lang: this.language,
            }
          ),
        },
        e = {};
      const f = {};
      for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] = d[g]);
      for (const h in e)
        Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
      var g = Bd("script", f);
      g = [a, c, g];
      yd("body");
      g = Bd("body", b, g);
      this.j.srcdoc = ud(g);
    }
  };

  function sr(a) {
    const b = tr(a);
    Ya(a.j.maxZIndexListeners, (c) => c(b));
  }

  function tr(a) {
    a = Nf(a.j.maxZIndexRestrictions);
    return a.length ? Math.min.apply(null, a) : null;
  }
  class ur {
    constructor(a) {
      this.j = Bl(a).floatingAdsStacking;
    }
  }

  function vr(a) {
    if (null == a.j) {
      var b = a.l,
        c = a.A;
      const d = b.j.nextRestrictionId++;
      b.j.maxZIndexRestrictions[d] = c;
      sr(b);
      a.j = d;
    }
  }

  function wr(a) {
    if (null != a.j) {
      var b = a.l;
      delete b.j.maxZIndexRestrictions[a.j];
      sr(b);
      a.j = null;
    }
  }
  class xr {
    constructor(a, b) {
      this.l = a;
      this.A = b;
      this.j = null;
    }
  }

  function yr(a) {
    K(a.G, "click", () => zr(a));
    K(a.j, "click", () => zr(a));
    K(a.j, "mousedown", () => {
      const b = (d) => Ar(a, d.movementY),
        c = () => {
          Br(a);
          te(a.j, "mousemove", b);
          te(a.j, "mouseup", c);
          te(a.j, "mouseleave", c);
        };
      K(a.j, "mousemove", b);
      K(a.j, "mouseup", c);
      K(a.j, "mouseleave", c);
    });
    K(a.j, "touchstart", (b) => {
      let c = b.touches[0];
      const d = (f) => {
          f = f.touches[0];
          c && Ar(a, f.pageY - c.pageY);
          c = f;
        },
        e = () => {
          Br(a);
          te(a.j, "touchmove", d);
          te(a.j, "touchend", e);
          te(a.j, "touchcancel", e);
        };
      K(a.j, "touchmove", d);
      K(a.j, "touchend", e);
      K(a.j, "touchcancel", e);
    });
    K(a.l, "scroll", () => {
      if (a.J) {
        clearTimeout(a.O);
        a.O = setTimeout(() => Br(a), 66);
        var b = a.B - a.l.scrollTop;
        a.l.scrollTop > a.B
          ? (Ar(a, b), (a.l.scrollTop = a.B))
          : 10 > a.l.scrollTop &&
            ((a.l.scrollTop = 10), 30 > b ? Ar(a, b) : zr(a));
      }
    });
  }

  function zr(a) {
    a.J = !1;
    a.I = !1;
    a.A.style.transitionDuration = ".5s";
    a.A.style.transform = `translateY(${a.D}px)`;
    a.G.style.opacity = "0";
    a.C.style.transitionDelay = ".5s";
    lb(a.C.offsetHeight);
    a.C.style.visibility = "hidden";
    setTimeout(() => {
      a.l.scrollTop = 10;
      a.win.document.body.style.overflow = "";
    }, 500);
    a.B = 10;
    for (const b of a.T)
      try {
        b();
      } catch (c) {
        console.error(c);
      }
  }

  function Ar(a, b) {
    a.A.style.transitionDuration = "0s";
    b = Cr(a) + b;
    0 > b &&
      ((a.B -= b),
      (a.B = Math.min(a.B, a.l.scrollHeight - a.l.offsetHeight)),
      (b = 0));
    a.A.style.transform = `translateY(${b}px)`;
    lb(a.A.offsetHeight);
    a.A.style.transitionDuration = ".5s";
  }

  function Br(a) {
    const b = Cr(a);
    if (a.I) 50 < b ? zr(a) : 0 !== b && Dr(a, 0);
    else {
      const c = a.D - a.H;
      b < c - 50 ? Dr(a, 0) : b > c + 50 ? zr(a) : b !== c && Dr(a, a.D - a.H);
    }
  }

  function Dr(a, b) {
    a.J = !0;
    0 === b && (a.I = !0);
    a.win.document.body.style.overflow = "hidden";
    a.C.style.transitionDelay = "0s";
    a.C.style.visibility = "visible";
    a.G.style.opacity = ".5";
    a.A.style.transform = `translateY(${b}px)`;
  }

  function Cr(a) {
    let b, c;
    a =
      null !=
      (c = null == (b = a.win.getComputedStyle(a.A)) ? void 0 : b.transform)
        ? c
        : null;
    return new DOMMatrix(a).m42;
  }
  var Er = class {
    constructor(a, b, c) {
      var d = new hf(a.document);
      this.G = d.Ca("DIV", {
        class: "cse-modal-background",
        tabindex: 1,
      });
      this.j = d.Ca("DIV", {
        class: "cse-drawer-handle",
      });
      this.l = d.Ca("DIV", {
        class: "cse-drawer-contents",
      });
      this.A = d.Ca(
        "DIV",
        {
          class: "cse-drawer",
        },
        this.j,
        this.l
      );
      this.C = d.Ca(
        "DIV",
        {
          class: "cse-drawer-container",
        },
        this.G,
        this.A
      );
      this.L = d.Ca("DIV", {
        class: "cse-drawer-root",
      });
      this.win = a;
      this.H = b;
      this.D = c;
      this.T = [];
      this.B = 10;
      this.J = this.I = !1;
      b = this.L.attachShadow({
        mode: "open",
      });
      c = b.appendChild;
      var e = this.D;
      e = gr(
        "<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
          or(100002) +
          ";}.cse-modal-background {background-color: black; height: 100%; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {bottom: 0; position: absolute; transform: translateY(" +
          or(e) +
          "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {border-radius: 20px 20px 0 0; background: white; height: " +
          or(30) +
          "px;}.cse-drawer-contents {background: white; height: " +
          or(e) +
          "px; padding-top: " +
          or(10) +
          "px; overflow: auto;}</style>"
      );
      e = er(e);
      var f = d.j;
      d = qf(f, "DIV");
      qb ? ((e = Dd(Id, e)), Re(d, e), d.removeChild(d.firstChild)) : Re(d, e);
      if (1 == d.childNodes.length) d = d.removeChild(d.firstChild);
      else {
        for (e = f.createDocumentFragment(); d.firstChild; )
          e.appendChild(d.firstChild);
        d = e;
      }
      c.call(b, d);
      b.appendChild(this.C);
      L(this.L, Xq(a));
      this.l.scrollTop = 10;
    }
    init() {
      this.win.document.body.appendChild(this.L);
      yr(this);
    }
  };

  function Fr(a, b) {
    a.j++;
    const c = "{SafeHtmlFormatter:" + a.j + "_" + cf() + "}";
    a.l[$e(c)] = b;
    return c;
  }
  class Gr {
    constructor() {
      this.l = {};
      this.j = 0;
    }
    A(a, b) {
      a = this.l[b];
      if (!a) return b;
      b = "";
      a.Kb && (b += "<" + a.Kb + a.attributes + ">");
      a.Ic && (b += a.Ic);
      a.rb && (b += "</" + a.rb + ">");
      return b;
    }
    Kb(a, b) {
      yd(a);
      return Fr(this, {
        Kb: a,
        attributes: Cd(b),
      });
    }
    rb(a) {
      yd(a);
      return Fr(this, {
        rb: a,
      });
    }
    text(a) {
      return Fr(this, {
        Ic: $e(a),
      });
    }
  }

  function Hr(a) {
    let b;
    a.j.id = "cse-overlay-div";
    ce(
      a.j,
      id({
        "background-color": "white",
        border: "none",
        "border-radius": "16px 16px 16px 16px",
        "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
        display: "none",
        "flex-direction": "column",
        height: "90%",
        left: "2.5%",
        margin: "auto",
        overflow: "auto",
        position: "fixed",
        padding: "1%",
        top: "5%",
        transition: "all 0.25s linear",
        width: "95%",
        "z-index": 100002,
      })
    );
    b = yf(a.l, "DIV");
    b.id = "cse-overlay-close-button";
    ce(
      b,
      id({
        "background-image": "url(//www.google.com/images/nav_logo114.png)",
        "background-position": "-140px -230px",
        "background-repeat": "no-repeat",
        cursor: "pointer",
        display: "block",
        float: "right",
        height: "12px",
        opacity: 1,
        position: "absolute",
        right: "15px",
        top: "15px",
        width: "12px",
      })
    );
    var c = a.A.location.host;
    const d = yf(a.l, "IMG");
    de(
      d,
      cd(
        "https://www.google.com/s2/favicons?sz=64&domain_url=" +
          encodeURIComponent(c)
      )
    );
    ce(
      d,
      id({
        display: "block",
        float: "left",
        height: "16px",
        position: "absolute",
        left: "15px",
        top: "15px",
        width: "16px",
      })
    );
    const e = yf(a.l, "P");
    be(
      e,
      Ir(a.C.trim().substring(0, 2), c.startsWith("www.") ? c.slice(4) : c)
    );
    e.style.fontSize = "16px";
    e.style.marginLeft = "35px";
    e.style.marginTop = "6px";
    e.style.marginBottom = "unset";
    e.style.display = "inline-block";
    a.B.classList.add("gsc-modal-background-image");
    a.B.setAttribute("tabindex", 0);
    a.A.document.body.appendChild(a.j);
    a.A.document.body.appendChild(a.B);
    a.j.appendChild(d);
    a.j.appendChild(e);
    c = () => {
      "flex" === a.j.style.display && (a.j.style.display = "none");
      a.B.classList.remove("gsc-modal-background-image-visible");
      wr(a.J);
    };
    b.onclick = c;
    a.B.onclick = c;
    a.j.appendChild(b);
    a.j.appendChild(a.H);
    a.I.init();
  }

  function Jr(a) {
    const b = yf(a.l, "SCRIPT");
    b.type = "text/javascript";
    var c = a.G.map((d) => ({
      container: d,
      relatedSearches: 5,
    }));
    wa("google.ads.autorscse.startProseSearch", (d, e) => {
      vr(a.J);
      a.B.classList.add("gsc-modal-background-image-visible");
      a.j.style.display = "flex";
      a.I.j.contentWindow.google.search.cse.element
        .getElement("auto-rs-prose")
        .execute(d, void 0, {
          rsToken: e,
        });
    });
    c = Mg`function(afsProperty, cseElementName, rsBlocks, language){ 
          function performSearch(query, rsToken) { 
            google.ads.autorscse.startProseSearch(query, rsToken); 
          } 
          const pageOptions = { 
            pubId: afsProperty, 
            styleId: '5134551505', 
            hl: language, 
            resultsPageBaseUrl: 'http://google.com', 
            resultsPageQueryParam: 'q', 
            relatedSearchTargeting: 'content', 
            relatedSearchResultClickedCallback: performSearch, 
            relatedSearchUseResultCallback: true, 
          }; 
          _googCsa('relatedsearch', pageOptions, rsBlocks); 
        }`(a.D, "auto-rs-prose", c, a.C);
    ge(b, c);
    a.A.document.body.appendChild(b);
  }
  var Kr = class {
    constructor(a, b, c, d) {
      this.A = a;
      this.G = b;
      this.C = d || "en";
      this.D = c.replace("ca", "partner");
      b = new ur(a);
      this.J = new xr(b, 1e5);
      this.l = new hf(a.document);
      this.j = yf(this.l, "DIV");
      this.B = yf(this.l, "DIV");
      this.H = yf(this.l, "IFRAME");
      this.I = new rr(this.H, this.D, a.location.host, this.C);
    }
    init() {
      if (
        0 != this.G.length &&
        !this.A.document.querySelector('script[src*="cse.google.com/cse"]')
      ) {
        Hr(this);
        var a = yf(this.l, "SCRIPT");
        he(a, N`https://www.google.com/adsense/search/async-ads.js`);
        this.A.document.head.appendChild(a);
        a = yf(this.l, "SCRIPT");
        a.type = "text/javascript";
        var b = Lg`(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`;
        ge(a, b);
        this.A.document.head.appendChild(a);
        a = yf(this.l, "SCRIPT");
        b = N`https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
        b = Kg(b, new Map([["language", this.C]]));
        he(a, b);
        this.A.document.head.appendChild(a);
        Jr(this);
      }
    }
  };

  function Ir(a, b) {
    var c = new Gr();
    const d = c.Kb("strong"),
      e = c.rb("strong");
    b = {
      en: `Search results from ${d}${b}${e}`,
      de: `Suchergebnisse von ${d}${b}${e}`,
      ja: `${d}${b}${e}\u304b\u3089\u306e\u691c\u7d22\u7d50\u679c`,
      fr: `R\u00e9sultats de recherche sur ${d}${b}${e}`,
      es: `Resultados de b\u00fasqueda de ${d}${b}${e}`,
    };
    a = b[a] || b.en;
    b = $e("SafeHtmlFormatter:");
    c = $e(a).replace(new RegExp(`\\{${b}[\\w&#;]+\\}`, "g"), ta(c.A, c, []));
    return xd(c, null);
  }

  function Lr(a) {
    const b = to(a.A.P),
      c = a.C.pa(a.D, () => a.remove());
    b.appendChild(c);
    a.B && (b.className = a.B);
    return {
      Rd: b,
      Od: c,
    };
  }
  class Mr {
    constructor(a, b, c, d) {
      this.D = a;
      this.A = b;
      this.C = c;
      this.B = d || null;
      this.j = null;
      this.l = new Um(null);
    }
    init() {
      const a = Lr(this);
      this.j = a.Rd;
      Vo(this.A, this.j);
      Sm(this.l, a.Od);
    }
    remove() {
      this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
      this.j = null;
      Sm(this.l, null);
    }
    G() {
      return this.l;
    }
  }
  var Nr = class {
    constructor(a, b, c) {
      this.j = a;
      this.l = b;
      this.A = c;
    }
  };

  function Or(a, b) {
    return a.U.j - b.U.j;
  }

  function Pr(a, b) {
    const c = a.document.createElement("img");
    Qr(a, c);
    Se(
      c,
      "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg"
    );
    L(c, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: null == b ? "auto" : "pointer",
    });
    b &&
      c.addEventListener("click", (d) => {
        b();
        d.stopPropagation();
      });
    return c;
  }

  function Rr(a, b) {
    const c = b.document.createElement("button");
    Qr(b, c);
    L(c, {
      display: "inline",
      "line-height": "24px",
      cursor: "pointer",
    });
    c.appendChild(b.document.createTextNode(a.l));
    c.addEventListener("click", (d) => {
      a.A();
      d.stopPropagation();
    });
    return c;
  }

  function Sr(a, b, c) {
    const d = b.document.createElement("img");
    Se(
      d,
      "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg"
    );
    d.setAttribute("aria-label", a.B);
    Qr(b, d);
    L(d, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: "pointer",
    });
    d.addEventListener("click", (e) => {
      c();
      e.stopPropagation();
    });
    return d;
  }

  function Tr(a) {
    const b = a.document.createElement("ins");
    Qr(a, b);
    L(b, {
      float: "left",
      display: "inline-flex",
      padding: "8px 0px",
      "background-color": "#FFF",
      "border-radius": "0px 20px 20px 0px",
      "box-shadow":
        "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)",
    });
    return b;
  }
  class Ur {
    constructor(a, b, c) {
      this.l = a;
      this.B = b;
      this.A = c;
      this.j = new Um(!1);
    }
    pa(a, b, c, d) {
      const e = Pr(a, d),
        f = Pr(a),
        g = Rr(this, a),
        h = Sr(this, a, c);
      a = Tr(a);
      a.appendChild(e);
      a.appendChild(f);
      a.appendChild(g);
      a.appendChild(h);
      Rm(
        this.j,
        (l) => {
          L(e, {
            display: l ? "none" : "inline",
          });
          L(f, {
            display: l ? "inline" : "none",
          });
          l
            ? (L(g, {
                "line-height": "24px",
                "max-width": "100vw",
                opacity: "1",
                transition:
                  "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms",
              }),
              L(h, {
                margin: "0px 12px 0px 8px",
                opacity: 1,
                width: "24px",
                transition:
                  "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms",
              }))
            : (L(g, {
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                transition:
                  "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms",
              }),
              L(h, {
                margin: "0",
                opacity: "0",
                width: "0",
                transition: "margin 100ms, opacity 50ms, width 100ms",
              }));
        },
        !0
      );
      return a;
    }
    Hc() {
      return 40;
    }
    Sc() {
      Sm(this.j, !1);
      return 0;
    }
    Tc() {
      Sm(this.j, !0);
    }
  }

  function Qr(a, b) {
    L(b, Xq(a));
    L(b, {
      "font-family": "Arial,sans-serif",
      "font-weight": "bold",
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: "#3C4043",
      "user-select": "none",
    });
  }

  function Vr(a, b) {
    const c = b.document.createElement("button");
    Wr(a, b, c);
    b = {
      width: "100%",
      "text-align": "center",
      display: "block",
      padding: "8px 0px",
      "background-color": a.l,
    };
    a.j && ((b["border-top"] = a.j), (b["border-bottom"] = a.j));
    L(c, b);
    c.addEventListener("click", (d) => {
      a.D();
      d.stopPropagation();
    });
    return c;
  }

  function Xr(a, b, c, d) {
    const e = b.document.createElement("div");
    L(e, Xq(b));
    L(e, {
      "align-items": "center",
      "background-color": a.l,
      display: "flex",
      "justify-content": "center",
    });
    const f = b.document.createElement("span");
    f.appendChild(b.document.createTextNode(d));
    L(f, Xq(b));
    L(f, {
      "font-family": "Arial,sans-serif",
      "font-size": "12px",
      padding: "8px 0px",
    });
    b = b.matchMedia("(min-width: 768px)");
    d = (g) => {
      g.matches
        ? (L(e, {
            "flex-direction": "row",
          }),
          a.j &&
            L(e, {
              "border-top": a.j,
              "border-bottom": a.j,
            }),
          L(f, {
            "margin-left": "8px",
            "text-align": "start",
          }),
          L(c, {
            border: "0",
            "margin-right": "8px",
            width: "auto",
          }))
        : (L(e, {
            border: "0",
            "flex-direction": "column",
          }),
          L(f, {
            "margin-left": "0",
            "text-align": "center",
          }),
          L(c, {
            "margin-right": "0",
            width: "100%",
          }),
          a.j &&
            L(c, {
              "border-top": a.j,
              "border-bottom": a.j,
            }));
    };
    d(b);
    b.addEventListener("change", d);
    e.appendChild(c);
    e.appendChild(f);
    return e;
  }

  function Wr(a, b, c) {
    L(c, Xq(b));
    L(c, {
      "font-family": "Arial,sans-serif",
      "font-weight": a.G,
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: a.H,
      "user-select": "none",
      cursor: "pointer",
    });
  }
  class Yr {
    constructor(a, b, c, d, e, f = null, g = null, h = null) {
      this.C = a;
      this.D = b;
      this.H = c;
      this.l = d;
      this.G = e;
      this.B = f;
      this.j = g;
      this.A = h;
    }
    pa(a) {
      const b = a.document.createElement("div");
      Wr(this, a, b);
      L(b, {
        display: "inline-flex",
        padding: "8px 0px",
        "background-color": this.l,
      });
      if (this.B) {
        var c = a.document.createElement("img");
        Se(c, this.B);
        Wr(this, a, c);
        L(c, {
          margin: "0px 8px 0px 0px",
          width: "24px",
          height: "24px",
        });
      } else c = null;
      c && b.appendChild(c);
      c = a.document.createElement("span");
      Wr(this, a, c);
      L(c, {
        "line-height": "24px",
      });
      c.appendChild(a.document.createTextNode(this.C));
      b.appendChild(c);
      c = Vr(this, a);
      c.appendChild(b);
      return this.A ? Xr(this, a, c, this.A) : c;
    }
  }
  var Zr = (a, b) => {
    b = b.filter((c) => 5 == y(D(c, Bj, 4), 1) && 1 == y(c, 8));
    b = po(b, a);
    a = Xo(b, a);
    a.sort((c, d) => d.U.j - c.U.j);
    return a[0] || null;
  };
  var $r = (a) =>
      (!X(il) && /Firefox/.test(a)) ||
      /Android 2/.test(a) ||
      /iPhone OS [34]_/.test(a) ||
      /Windows Phone (?:OS )?[67]/.test(a) ||
      /MSIE.*Windows NT/.test(a) ||
      /Windows NT.*Trident/.test(a),
    ds = (a, b = null) => {
      const c = as(
        a.innerWidth,
        0,
        Math.min(Math.round((a.innerWidth / 320) * 50), bs) + 15
      );
      return cs(a, c, b);
    },
    es = (a, b = null) => {
      const c = a.innerWidth,
        d = a.innerHeight,
        e = Math.min(Math.round((a.innerWidth / 320) * 50), bs) + 15,
        f = as(c, d - e, d);
      25 < e &&
        f.push({
          x: c - 25,
          y: d - 25,
        });
      return cs(a, f, b);
    },
    gs = (a, b) => {
      const c = a.innerWidth,
        d = a.innerHeight;
      let e = d;
      for (; e > b; ) {
        var f = as(c, e - b, e);
        f = fs(a, f);
        if (!f) return d - e;
        e = f.getBoundingClientRect().top - 1;
      }
      return null;
    },
    cs = (a, b, c = null) => null != fs(a, b, c);

  function fs(a, b, c = null) {
    for (const d of b) if ((b = hs(a, d, c))) return b;
    return null;
  }

  function hs(a, b, c = null) {
    const d = is(a.document, b.x, b.y);
    return d ? js(d, a, b, c) || ks(d, a, b, c) || null : null;
  }
  var is = (a, b, c) => {
    a.hasOwnProperty("_goog_efp_called_") ||
      (a._goog_efp_called_ = a.elementFromPoint(b, c));
    return a.elementFromPoint(b, c);
  };

  function ks(a, b, c, d = null) {
    const e = b.document;
    for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
      const f = js(a, b, c, d);
      if (f) return f;
    }
    return null;
  }
  var as = (a, b, c) => {
    const d = [];
    for (let f = 0; 3 > f; f++)
      for (let g = 0; 3 > g; g++) {
        var e = d;
        e.push.call(e, {
          x: (g / 2) * a,
          y: b + (f / 2) * (c - b),
        });
      }
    return d;
  };

  function js(a, b, c, d = null) {
    if ("fixed" !== Rg(a, "position")) return null;
    var e =
      "GoogleActiveViewInnerContainer" == a.getAttribute("class") ||
      (1 >= Ug(a).width && 1 >= Ug(a).height)
        ? !0
        : !1;
    d &&
      Ch(
        d,
        "ach_evt",
        {
          url: b.location.href,
          tn: a.tagName,
          id: a.getAttribute("id"),
          cls: a.getAttribute("class"),
          ign: e,
          pw: b.innerWidth,
          ph: b.innerHeight,
          x: c.x,
          y: c.y,
        },
        !0,
        1
      );
    return e ? null : a;
  }
  const bs = 90 * 1.38;

  function ls(a) {
    if (a.H) {
      const b = Ml(a.j);
      if (b > a.l + 100 || b < a.l - 100) ms(a), (a.l = Il(a.j));
    }
    a.I && a.j.clearTimeout(a.I);
    a.I = a.j.setTimeout(() => ns(a), 200);
  }

  function ns(a) {
    var b = Il(a.j);
    a.l && a.l > b && (a.l = b);
    b = Ml(a.j);
    b >= a.l - 100 && ((a.l = Math.max(a.l, b)), os(a));
  }

  function ps(a) {
    a.j.removeEventListener("scroll", a.L);
  }

  function ms(a) {
    a.H = !1;
    const b = a.C.Sc();
    switch (b) {
      case 0:
        Sm(a.B, a.D);
        break;
      case 1:
        a.A &&
          (L(a.A, {
            display: "none",
          }),
          Sm(a.B, null));
        break;
      default:
        throw Error("Unhandled OnHideOutcome: " + b);
    }
  }

  function os(a) {
    a.A || (a.A = qs(a));
    L(a.A, {
      display: "block",
    });
    a.H = !0;
    a.C.Tc();
    Sm(a.B, a.D);
  }

  function qs(a) {
    var b = gs(a.j, a.C.Hc() + 60);
    b = null == b ? 30 : b + 30;
    const c = a.j.document.createElement("div");
    L(c, Xq(a.j));
    L(c, {
      position: "fixed",
      left: "0px",
      bottom: b + "px",
      width: "100vw",
      "text-align": "center",
      "z-index": 2147483642,
      display: "none",
      "pointer-events": "none",
    });
    a.D = a.C.pa(
      a.j,
      () => a.remove(),
      () => {
        ps(a);
        ms(a);
      },
      () => {
        ps(a);
        os(a);
      }
    );
    c.appendChild(a.D);
    a.J && (c.className = a.J);
    a.j.document.body.appendChild(c);
    return c;
  }
  class rs {
    constructor(a, b, c) {
      this.j = a;
      this.C = b;
      this.D = null;
      this.B = new Um(null);
      this.J = c || null;
      this.A = null;
      this.H = !1;
      this.l = 0;
      this.I = null;
      this.L = () => ls(this);
    }
    init() {
      this.j.addEventListener("scroll", this.L);
      this.l = Il(this.j);
      ns(this);
    }
    remove() {
      this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
      this.A = null;
      ps(this);
      Sm(this.B, null);
    }
    G() {
      return this.B;
    }
  }

  function ss(a) {
    Sm(a.D, 0);
    null != a.A && (a.A.remove(), (a.A = null));
    null != a.l && (a.l.remove(), (a.l = null));
  }

  function ts(a) {
    a.l = new rs(a.C, a.J, a.H);
    a.l.init();
    Tm(a.B, a.l.G());
    Sm(a.D, 2);
  }
  class us {
    constructor(a, b, c, d, e) {
      this.C = a;
      this.I = b;
      this.L = c;
      this.J = d;
      this.H = e;
      this.D = new Um(0);
      this.B = new Um(null);
      this.l = this.A = this.j = null;
    }
    init() {
      this.I
        ? ((this.A = new Mr(this.C, this.I, this.L, this.H)),
          this.A.init(),
          Tm(this.B, this.A.G()),
          Sm(this.D, 1),
          null == this.j && ((this.j = new Jm(this.C)), this.j.init(2e3)),
          Hm(this.j, () => {
            ss(this);
            ts(this);
          }))
        : ts(this);
    }
    remove() {
      ss(this);
      this.j && (this.j.da(), (this.j = null));
    }
    G() {
      return this.B;
    }
  }
  var vs = (a, b, c, d, e) => {
    a = new us(
      a,
      Zr(a, e),
      new Yr(b, d, "#FFF", "#4A4A4A", "normal"),
      new Ur(b, c, d),
      "google-dns-link-placeholder"
    );
    a.init();
    return a;
  };
  var ws = (a) => (a.googlefc = a.googlefc || {}),
    xs = (a) => {
      a = a.googlefc = a.googlefc || {};
      return (a.ccpa = a.ccpa || {});
    };

  function ys(a) {
    var b = xs(a.j);
    if (zs(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
      var c = b.getLocalizedDnsText();
      b = b.getLocalizedDnsCollapseText();
      null != c && null != b && (a.l = vs(a.j, c, b, () => As(a), a.B));
    }
  }

  function Bs(a) {
    const b = ws(a.j);
    xs(a.j).overrideDnsLink = !0;
    b.callbackQueue = b.callbackQueue || [];
    b.callbackQueue.push({
      INITIAL_CCPA_DATA_READY: () => ys(a),
    });
  }

  function As(a) {
    vr(a.A);
    xs(a.j).openConfirmationDialog((b) => {
      b && a.l && (a.l.remove(), (a.l = null));
      wr(a.A);
    });
  }
  class Cs {
    constructor(a, b, c) {
      this.j = a;
      this.A = new xr(b, 2147483643);
      this.B = c;
      this.l = null;
    }
  }

  function zs(a, b) {
    switch (a) {
      case b.CCPA_DOES_NOT_APPLY:
      case b.OPTED_OUT:
        return !1;
      case b.NOT_OPTED_OUT:
        return !0;
      default:
        return !0;
    }
  }

  function Ds(a) {
    const b = a.document.createElement("ins");
    Es(a, b);
    L(b, {
      display: "flex",
      padding: "8px 0px",
      width: "100%",
    });
    return b;
  }

  function Fs(a, b, c, d) {
    const e = a.document.createElement("img");
    Se(e, b);
    d && e.setAttribute("aria-label", d);
    Es(a, e);
    L(e, {
      margin: "0px 12px 0px 8px",
      width: "24px",
      height: "24px",
      cursor: "pointer",
    });
    e.addEventListener("click", (f) => {
      c();
      f.stopPropagation();
    });
    return e;
  }

  function Gs(a, b) {
    const c = b.document.createElement("span");
    Es(b, c);
    L(c, {
      "line-height": "24px",
      cursor: "pointer",
    });
    c.appendChild(b.document.createTextNode(a.B));
    c.addEventListener("click", (d) => {
      a.l();
      d.stopPropagation();
    });
    return c;
  }

  function Hs(a, b) {
    const c = b.document.createElement("span");
    c.appendChild(b.document.createTextNode(a.A));
    L(c, Xq(b));
    L(c, {
      "border-top": "11px solid #ECEDED",
      "font-family": "Arial,sans-serif",
      "font-size": "12px",
      "line-height": "1414px",
      padding: "8px 32px",
      "text-align": "center",
    });
    return c;
  }

  function Is(a) {
    const b = a.document.createElement("div");
    L(b, Xq(a));
    L(b, {
      "align-items": "flex-start",
      "background-color": "#FFF",
      "border-radius": "0px 20px 20px 0px",
      "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
      display: "inline-flex",
      "flex-direction": "column",
      float: "left",
    });
    return b;
  }
  class Js {
    constructor(a, b, c, d) {
      this.B = a;
      this.C = b;
      this.A = c;
      this.l = d;
      this.j = new Um(!1);
    }
    pa(a, b, c, d) {
      c = Ds(a);
      const e = Fs(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg",
          d
        ),
        f = Fs(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg",
          this.l
        ),
        g = Gs(this, a),
        h = Fs(
          a,
          "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg",
          b,
          this.C
        );
      L(h, {
        "margin-left": "auto",
      });
      c.appendChild(e);
      c.appendChild(f);
      c.appendChild(g);
      c.appendChild(h);
      const l = Hs(this, a);
      a = Is(a);
      a.appendChild(c);
      a.appendChild(l);
      Rm(
        this.j,
        (k) => {
          L(e, {
            display: k ? "none" : "inline",
          });
          L(f, {
            display: k ? "inline" : "none",
          });
          k
            ? (L(g, {
                "line-height": "24px",
                "max-width": "100vw",
                opacity: "1",
                transition:
                  "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms",
              }),
              L(h, {
                "margin-right": "12px",
                opacity: 1,
                width: "24px",
                transition: "margin 50ms, opacity 50ms 50ms, width 50ms",
              }),
              L(l, {
                "border-width": "1px",
                "line-height": "14px",
                "max-width": "100vw",
                opacity: "1",
                padding: "8px 32px",
                transition:
                  "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms",
              }))
            : (L(g, {
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                transition:
                  "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms",
              }),
              L(h, {
                "margin-right": "0",
                opacity: "0",
                width: "0",
                transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms",
              }),
              L(l, {
                "border-width": "0px",
                "line-height": "0px",
                "max-width": "0vw",
                opacity: "0",
                padding: "0",
                transition:
                  "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms",
              }));
        },
        !0
      );
      return a;
    }
    Hc() {
      return 71;
    }
    Sc() {
      Sm(this.j, !1);
      return 0;
    }
    Tc() {
      Sm(this.j, !0);
    }
  }

  function Es(a, b) {
    L(b, Xq(a));
    L(b, {
      "font-family": "Arial,sans-serif",
      "font-weight": "bold",
      "font-size": "14px",
      "letter-spacing": "0.2px",
      color: "#1A73E8",
      "user-select": "none",
    });
  }

  function Ks(a) {
    Ls(
      a.l,
      (b) => {
        var c = a.B,
          d = b.Be,
          e = b.Md,
          f = b.Ad;
        b = b.showRevocationMessage;
        new us(
          c,
          Zr(c, a.A),
          new Yr(
            d,
            b,
            "#1A73E8",
            "#FFF",
            "bold",
            "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg",
            "2px solid #ECEDED",
            f
          ),
          new Js(d, e, f, b),
          "google-revocation-link-placeholder"
        ).init();
      },
      () => {
        wr(a.j);
      }
    );
  }
  class Ms {
    constructor(a, b, c, d) {
      this.B = a;
      this.j = new xr(b, 2147483643);
      this.A = c;
      this.l = d;
    }
  }
  var Ns = (a) => {
    if (!a || !Xb(a, 1)) return !1;
    a = y(a, 1);
    switch (a) {
      case 1:
        return !0;
      case 2:
        return !1;
      default:
        throw Error("Unhandled AutoConsentUiStatus: " + a);
    }
  };

  function Os(a) {
    if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
      var b = !1;
      Ns(a.l) &&
        ((b = new Ms(a.j, a.C, a.B || G(a.l, Dj, 4), a.A)),
        vr(b.j),
        Ks(b),
        (b = !0));
      var c;
      a: if ((c = a.l) && Xb(c, 3))
        switch (((c = y(c, 3)), c)) {
          case 1:
            c = !0;
            break a;
          case 2:
            c = !1;
            break a;
          default:
            throw Error("Unhandled AutoCcpaUiStatus: " + c);
        }
      else c = !1;
      c && (Bs(new Cs(a.j, a.C, a.B || G(a.l, Dj, 4))), (b = !0));
      b && (a.A.start(), (a.j.adsbygoogle_ama_fc_has_run = !0));
    }
  }
  class Ps {
    constructor(a, b, c, d, e) {
      this.j = a;
      this.A = b;
      this.l = c;
      this.C = d;
      this.B = e || null;
    }
  }
  var Qs = (a, b, c, d, e, f) => {
      try {
        const g = a.j,
          h = Hf("SCRIPT", g);
        h.async = !0;
        he(h, b);
        g.head.appendChild(h);
        h.addEventListener("load", () => {
          e();
          d && g.head.removeChild(h);
        });
        h.addEventListener("error", () => {
          0 < c ? Qs(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
        });
      } catch (g) {
        f();
      }
    },
    Rs = (a, b, c = () => {}, d = () => {}) => {
      Qs(gf(a), b, 0, !1, c, d);
    };
  var Ss = (a = null) => {
    a = a || u;
    return a.googlefc || (a.googlefc = {});
  };
  Bc(fm);
  Bc(gm);
  var Ts = (a, b) => {
    const c = a.document,
      d = () => {
        if (!a.frames[b])
          if (c.body) {
            const e = Hf("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  };

  function Us() {
    this.T = this.T;
    this.H = this.H;
  }
  Us.prototype.T = !1;
  Us.prototype.da = function () {
    this.T || ((this.T = !0), this.B());
  };

  function Vs(a, b) {
    a.T ? b() : (a.H || (a.H = []), a.H.push(b));
  }
  Us.prototype.B = function () {
    if (this.H) for (; this.H.length; ) this.H.shift()();
  };
  const Ws = (a) => {
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
  };

  function Xs(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = Ws(a));
    return "error" === a.cmpStatus ||
      0 !== a.internalErrorState ||
      ("loaded" === a.cmpStatus &&
        ("tcloaded" === a.eventStatus ||
          "useractioncomplete" === a.eventStatus))
      ? !0
      : !1;
  }

  function Ys(a) {
    if (Xs(a))
      if (
        !1 !== a.gdprApplies &&
        "tcunavailable" !== a.tcString &&
        void 0 !== a.gdprApplies &&
        "string" === typeof a.tcString &&
        a.tcString.length
      ) {
        b: {
          if (a.publisher && a.publisher.restrictions) {
            var b = a.publisher.restrictions["1"];
            if (void 0 !== b) {
              b = b["755"];
              break b;
            }
          }
          b = void 0;
        }
        0 === b
          ? (a = !1)
          : a.purpose && a.vendor
          ? ((b = a.vendor.consents),
            (b = !(!b || !b["755"])) &&
            a.purposeOneTreatment &&
            "CH" === a.publisherCC
              ? (a = !0)
              : (b && ((a = a.purpose.consents), (b = !(!a || !a["1"]))),
                (a = b)))
          : (a = !0);
      } else a = !0;
    else a = !1;
    return a;
  }

  function Zs(a) {
    if (a.l) return a.l;
    a.l = bg(a.j, "__tcfapiLocator");
    return a.l;
  }

  function $s(a) {
    return "function" === typeof a.j.__tcfapi || null != Zs(a);
  }

  function at(a, b, c, d) {
    c || (c = () => {});
    if ("function" === typeof a.j.__tcfapi) (a = a.j.__tcfapi), a(b, 2, c, d);
    else if (Zs(a)) {
      bt(a);
      const e = ++a.G;
      a.D[e] = c;
      a.l &&
        a.l.postMessage(
          {
            __tcfapiCall: {
              command: b,
              version: 2,
              callId: e,
              parameter: d,
            },
          },
          "*"
        );
    } else c({}, !1);
  }

  function ct(a, b) {
    let c = {
      internalErrorState: 0,
    };
    const d = ne(() => b(c));
    let e = 0;
    -1 !== a.C &&
      (e = setTimeout(() => {
        e = 0;
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.C));
    at(a, "addEventListener", (f) => {
      f &&
        ((c = f),
        (c.internalErrorState = Ws(c)),
        Xs(c) &&
          (0 != c.internalErrorState && (c.tcString = "tcunavailable"),
          at(a, "removeEventListener", null, c.listenerId),
          e && (clearTimeout(e), (e = 0)),
          d()));
    });
  }

  function dt(a, b) {
    let c = {
      internalErrorState: 0,
    };
    const d = ne(() => b(c));
    let e = 0;
    -1 !== a.C &&
      (e = setTimeout(() => {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.C));
    at(a, "addEventListener", (f, g) => {
      e && (clearTimeout(e), (e = 0));
      g && (c = f);
      c.internalErrorState = Ws(c);
      0 != c.internalErrorState && (c.tcString = "tcunavailable");
      if (0 != c.internalErrorState || Xs(c))
        at(a, "removeEventListener", null, c.listenerId), d();
    });
  }

  function et(a) {
    return new Promise((b) => {
      dt(a, b);
    });
  }

  function bt(a) {
    a.A ||
      ((a.A = (b) => {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.D[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      K(a.j, "message", a.A));
  }
  class ft extends Us {
    constructor(a, b = 500) {
      super();
      this.j = a;
      this.l = null;
      this.D = {};
      this.G = 0;
      this.C = b;
      this.A = null;
    }
    B() {
      this.D = {};
      this.A && (te(this.j, "message", this.A), delete this.A);
      delete this.D;
      delete this.j;
      delete this.l;
      super.B();
    }
    addEventListener(a) {
      let b = {};
      const c = ne(() => a(b));
      let d = 0;
      -1 !== this.C &&
        (d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.C));
      const e = (f, g) => {
        clearTimeout(d);
        f
          ? ((b = f),
            (b.internalErrorState = Ws(b)),
            (g && 0 === b.internalErrorState) ||
              ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
          : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
        a(b);
      };
      try {
        at(this, "addEventListener", e);
      } catch (f) {
        (b.tcString = "tcunavailable"),
          (b.internalErrorState = 3),
          d && (clearTimeout(d), (d = 0)),
          c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && at(this, "removeEventListener", null, a.listenerId);
    }
  }

  function Ls(a, b, c) {
    const d = Ss(a.j);
    d.callbackQueue = d.callbackQueue || [];
    d.callbackQueue.push({
      CONSENT_DATA_READY: () => {
        const e = Ss(a.j),
          f = new ft(a.j);
        $s(f) &&
          ct(f, (g) => {
            300 === g.cmpId &&
              g.tcString &&
              "tcunavailable" !== g.tcString &&
              b({
                Be: e.getDefaultConsentRevocationText(),
                Md: e.getDefaultConsentRevocationCloseText(),
                Ad: e.getDefaultConsentRevocationAttestationText(),
                showRevocationMessage: () => e.showRevocationMessage(),
              });
          });
        c();
      },
    });
  }

  function gt(a) {
    const b = Rc(
      vc("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"),
      {
        id: a.l,
        ers: 2,
      }
    );
    Rs(
      a.j,
      b,
      () => {},
      () => {}
    );
  }
  class ht {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
    start() {
      try {
        Ts(this.j, "googlefcPresent"), gt(this);
      } catch (a) {}
    }
  }
  var it = (a, b, c) => {
    const d = D(a, vj, 6);
    if (!d) return [];
    c = Lo(G(d, wj, 1), c);
    return (a = Sj(a)) && A(a, 11)
      ? c.map((e) => Bo(e))
      : c.map((e) => {
          const f = Aj();
          return new oo(
            new io(e.Lb, e.Mb),
            new Sn(),
            new ho(b),
            !0,
            2,
            [],
            f,
            e.l,
            null,
            null,
            null,
            e.A,
            e.j
          );
        });
  };
  var kt = class extends w {
    constructor() {
      super(void 0, -1, jt);
    }
  };

  function lt(a, b) {
    return z(a, 1, b);
  }

  function mt(a, b) {
    return ic(a, 2, b);
  }
  var ot = class extends w {
      constructor(a) {
        super(a, -1, nt);
      }
    },
    pt = class extends w {
      constructor(a) {
        super(a);
      }
      getHeight() {
        return ac(this, 2, 0);
      }
    },
    jt = [5],
    nt = [2];
  var qt = class extends w {
      constructor() {
        super(void 0);
      }
    },
    rt = [1, 2];

  function st(a) {
    return new ln(["pedestal_container"], {
      google_reactive_ad_format: 30,
      google_phwr: 2.189,
      google_ad_width: Math.floor(a),
      google_ad_format: "autorelaxed",
      google_full_width_responsive: !0,
      google_enable_content_recommendations: !0,
      google_content_recommendation_ui_type: "pedestal",
    });
  }
  class tt {
    j(a) {
      return st(Math.floor(a.l));
    }
  }
  var ut = {
    INTERSTITIAL: 1,
    BOTTOM_ANCHOR: 2,
    TOP_ANCHOR: 3,
    Nh: 4,
    1: "INTERSTITIAL",
    2: "BOTTOM_ANCHOR",
    3: "TOP_ANCHOR",
    4: "SCROLL_TRIGGERED_IMMERSIVE",
  };

  function vt(a) {
    var b = [
        "Could not locate a suitable placement in the content below the fold.",
      ],
      c,
      d;
    a = null === (c = Bl(a)) || void 0 === c ? void 0 : c.tagSpecificState[1];
    (c =
      null == a
        ? null
        : 4 ===
          (null === (d = a.debugCard) || void 0 === d ? void 0 : d.getAdType())
        ? a.debugCard
        : null) && c.displayAdLoadedContent(b);
  }
  var wt = {};

  function xt(a, b, c) {
    let d = yt(a, c, b);
    if (!d) return !0;
    let e = -1;
    const f = c.D.l;
    for (; d.$a && d.$a.length; ) {
      const h = d.$a.shift();
      var g = uo(h.P);
      const l = h.U.j,
        k = !!c.l.cb || !!c.l.gb || zt(c) || !!c.l.Cc || l > e;
      g = !g || g <= d.ob;
      if (
        k &&
        g &&
        At(c, h, {
          Nc: d.ob,
        })
      ) {
        e = l;
        if (d.mb.j.length + 1 >= f) return !0;
        d = yt(a, c, b);
        if (!d) return !0;
      }
    }
    return c.B;
  }
  var yt = (a, b, c) => {
    var d = b.D.l,
      e = b.D.B,
      f = b.D;
    f = Cp(b.N(), f.j ? f.j.Pa : void 0, d);
    if (f.j.length >= d) return null;
    e
      ? ((d = f.l || (f.l = Y(f.A).scrollHeight || null)),
        (e = !d || 0 > d ? -1 : f.l * e - Ip(f)))
      : (e = void 0);
    a =
      null == e || 50 <= e
        ? Bt(
            b,
            f,
            {
              types: a,
            },
            c
          )
        : null;
    return {
      mb: f,
      ob: e,
      $a: a,
    };
  };
  wt[2] = ua(
    function (a, b) {
      a = Bt(
        b,
        Cp(b.N()),
        {
          types: a,
          za: fp(b.N()),
        },
        2
      );
      if (0 == a.length) return !0;
      for (var c = 0; c < a.length; c++) if (At(b, a[c])) return !0;
      return b.B ? (b.C.push(11), !0) : !1;
    },
    [0]
  );
  wt[5] = ua(xt, [0], 5);
  wt[3] = function (a) {
    if (!a.B) return !1;
    var b = Bt(
      a,
      Cp(a.N()),
      {
        types: [0],
        za: fp(a.N()),
      },
      3
    );
    if (0 == b.length) return !0;
    for (var c = b.length - 1; 0 <= c; c--) if (At(a, b[c])) return !0;
    a.C.push(11);
    return !0;
  };
  var Ct = (a) => {
      var b;
      a.l.gd ? (b = new ip(0, null, [], 3, null)) : (b = fp(a.N()));
      return {
        types: [0],
        za: b,
      };
    },
    Et = (a) => {
      var b = a.N().document.body.getBoundingClientRect().width;
      b = st(b);
      var c = a.j;
      var d = c.document.body,
        e = am(c, d, null);
      if (e) c = e;
      else {
        if (c.document.body) {
          e = Math.floor(c.document.body.getBoundingClientRect().width);
          for (
            var f = [
                {
                  element: c.document.body,
                  depth: 0,
                  height: 0,
                },
              ],
              g = -1,
              h = null;
            0 < f.length;

          ) {
            const k = f.pop(),
              m = k.element;
            var l = k.height;
            0 < k.depth && l > g && ((g = l), (h = m));
            if (5 > k.depth)
              for (let n = 0; n < m.children.length; n++) {
                const q = m.children[n];
                l = e;
                const r = q.getBoundingClientRect().width;
                (null == r || null == l ? 0 : r >= 0.9 * l && r <= 1.01 * l) &&
                  f.push({
                    element: q,
                    depth: k.depth + 1,
                    height: q.getBoundingClientRect().height,
                  });
              }
          }
          e = h;
        } else e = null;
        c = e ? am(c, e.parentNode || d, e) : null;
      }
      c &&
        ((b = kn(a.J, b)), (d = Jn(a.j.document, a.G, null, null, {}, b))) &&
        (yn(d.Da, c, 2, 256), Dt(a, d, b));
    },
    Gt = (a, b) => {
      var c = Ct(a);
      c.oc = [5];
      c = Bt(a, Cp(a.N()), c, 8);
      Ft(a, c.reverse(), b);
    },
    Ft = (a, b, c) => {
      for (const d of b)
        if (
          ((b = c.j(d.U)),
          At(a, d, {
            pd: b,
          }))
        )
          return !0;
      return !1;
    };
  wt[8] = function (a) {
    var b = a.N().document;
    if ("complete" != b.readyState)
      return (
        b.addEventListener("readystatechange", () => wt[8](a), {
          once: !0,
        }),
        !0
      );
    if (!a.B) return !1;
    if (!a.Cb()) return !0;
    b = Ct(a);
    b.nc = [2, 4, 5];
    b = Bt(a, Cp(a.N()), b, 8);
    const c = new tt();
    if (Ft(a, b, c)) return !0;
    if (a.l.Dc)
      switch (a.l.Uc || 0) {
        case 1:
          Gt(a, c);
          break;
        default:
          Et(a);
      }
    return !0;
  };
  wt[6] = ua(xt, [2], 6);
  wt[7] = ua(xt, [1], 7);
  wt[9] = function (a) {
    const b = yt([0, 2], a, 9);
    if (!b || !b.$a) return a.C.push(17), vt(a.N()), a.B;
    for (var c of b.$a) {
      var d = c;
      var e = a.l.Yb || null;
      null == e
        ? (d = null)
        : ((e = vo(d.P, new Ht(), new It(e, a.N()))),
          (d = new Wo(e, d.V(), d.U)));
      if (
        d &&
        !(uo(d.P) > b.ob) &&
        At(a, d, {
          Nc: b.ob,
          Ld: !0,
        })
      )
        return (
          (a = d.P.J),
          (c = c.P),
          (a = 0 < a.length ? a[0] : null),
          (c.B = !0),
          null != a && c.J.push(a),
          !0
        );
    }
    a.C.push(17);
    vt(a.N());
    return a.B;
  };
  class Ht {
    l(a, b, c, d) {
      return Mn(d.document, a, b);
    }
    A(a) {
      return Y(a).clientHeight || 0;
    }
  }
  class It {
    constructor(a, b) {
      this.l = a;
      this.A = b;
    }
    j() {
      var a = this.l,
        b = this.A;
      const c = a.F || {};
      c.google_ad_client = a.kb;
      c.google_ad_height = Y(b).clientHeight || 0;
      c.google_ad_width = Y(b).clientWidth || 0;
      c.google_reactive_ad_format = 9;
      b = new fk();
      z(b, 1, a.C);
      a.j && gc(b, 2, a.j);
      a.G && z(b, 3, !0);
      c.google_rasc = kc(b);
      a.A && (c.google_adtest = "on");
      return new ln(["fsi_container"], c);
    }
  }
  var Jt = fn(new cn(0, {})),
    Kt = fn(new cn(1, {})),
    Lt = (a) => a === Jt || a === Kt;

  function Mt(a, b, c) {
    qm(a.j, b) || a.j.set(b, []);
    a.j.get(b).push(c);
  }
  class Nt {
    constructor() {
      this.j = new um();
    }
  }

  function Ot(a, b) {
    b &&
      ((a.l.apv = y(b, 4)), Xb(b, 23) && (a.l.sat = "" + y(D(b, Xj, 23), 1)));
    return a;
  }

  function Pt(a, b) {
    a.l.afm = b.join(",");
    return a;
  }
  class Qt extends Oq {
    constructor(a) {
      super(a);
      this.l = {};
    }
    B(a) {
      try {
        this.l.su = a.location.hostname;
      } catch (b) {
        this.l.su = "_ex";
      }
      a = super.B(a);
      Ec(a, this.l);
      return a;
    }
  }

  function Rt(a) {
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }

  function St(a, b) {
    a.j.op = Tt(b);
  }

  function Ut(a, b, c) {
    30 >= c.length
      ? (a.j[b] = Vt(c))
      : ((a.j[b] = Vt(c.slice(0, 30))), (a.j[b + "_c"] = c.length.toString()));
  }

  function Wt(a, b, c) {
    Ut(a, "fap", b);
    a.j.fad = Tt(c);
  }

  function Xt(a, b, c) {
    Ut(a, "fmp", b);
    a.j.fmd = Tt(c);
  }

  function Yt(a, b, c) {
    Ut(a, "vap", b);
    a.j.vad = Tt(c);
  }

  function Zt(a, b, c) {
    Ut(a, "vmp", b);
    a.j.vmd = Tt(c);
  }

  function $t(a, b, c) {
    Ut(a, "pap", b);
    a.j.pad = Tt(c);
  }

  function au(a, b, c) {
    Ut(a, "pmp", b);
    a.j.pmd = Tt(c);
  }

  function bu(a, b) {
    Ut(a, "psq", b);
  }
  var cu = class extends Qt {
    constructor(a) {
      super(0);
      Object.assign(this, a);
      this.j = {};
    }
    B(a) {
      a = super.B(a);
      Object.assign(a, this.j);
      return a;
    }
  };

  function Vt(a) {
    return a
      .map((b) => {
        let c;
        return null != (c = null == b ? void 0 : b.toString()) ? c : "null";
      })
      .join("~");
  }

  function Tt(a) {
    return null == a
      ? "null"
      : "string" === typeof a
      ? a
      : "boolean" === typeof a
      ? a
        ? "1"
        : "0"
      : Number.isInteger(a)
      ? a.toString()
      : a.toFixed(3);
  }
  var du = class extends w {
    constructor() {
      super(void 0);
    }
    ub() {
      return J(this, 1);
    }
    $b() {
      return ac(this, 2, 0);
    }
  };

  function eu(a, b) {
    return cc(a, 1, b);
  }

  function fu() {
    var a = new gu();
    Zb(a, 2).push("irr");
    return a;
  }

  function hu(a, b) {
    return z(a, 3, b);
  }

  function iu(a, b) {
    return z(a, 4, b);
  }

  function ju(a, b) {
    return z(a, 5, b);
  }

  function ku(a, b) {
    return z(a, 7, b);
  }

  function lu(a, b) {
    return z(a, 8, b);
  }

  function mu(a, b) {
    return z(a, 9, b);
  }

  function nu(a, b) {
    return ic(a, 10, b);
  }

  function ou(a, b) {
    return cc(a, 11, b);
  }
  var gu = class extends w {
      constructor() {
        super(void 0, -1, pu);
      }
    },
    pu = [1, 2, 10, 11];
  class qu {
    constructor(a) {
      this.A = this.l = this.j = !1;
      this.Ia = null;
      this.wa = a;
    }
  }

  function ru(a, b, c) {
    const d = b.P;
    if (!qm(a.j, d)) {
      let e;
      a.j.set(d, new qu(null != (e = Zm(Uo(b))) ? e : ""));
    }
    c(a.j.get(d));
  }

  function su(a) {
    ru(tu, a, (b) => {
      b.j = !0;
    });
  }

  function uu(a) {
    ru(tu, a, (b) => {
      b.l = !0;
    });
  }

  function vu(a) {
    var b = tu;
    ru(b, a, (c) => {
      c.A = !0;
    });
    b.I.push(a.P);
  }

  function wu(a, b) {
    ru(tu, a, (c) => {
      c.Ia = b;
    });
  }

  function xu(a, b, c) {
    const d = [];
    let e = 0;
    for (const f of c.filter(b)) {
      let g;
      if (Lt(null != (g = f.Ia) ? g : "")) ++e;
      else {
        let h;
        b = a.l.get(null != (h = f.Ia) ? h : "", null);
        d.push(b);
      }
    }
    return {
      list: d.sort((f, g) => (null != f ? f : -1) - (null != g ? g : -1)),
      Ja: e,
    };
  }

  function yu(a, b) {
    St(b, a.l.Wa());
    var c = tm(a.j).filter((f) => 0 === (f.wa.startsWith(Jt) ? 0 : 1)),
      d = tm(a.j).filter((f) => 1 === (f.wa.startsWith(Jt) ? 0 : 1)),
      e = xu(a, (f) => f.j, c);
    Wt(b, e.list, e.Ja);
    e = xu(a, (f) => f.j, d);
    Xt(b, e.list, e.Ja);
    e = xu(a, (f) => f.l, c);
    Yt(b, e.list, e.Ja);
    e = xu(a, (f) => f.l, d);
    Zt(b, e.list, e.Ja);
    c = xu(a, (f) => f.A, c);
    $t(b, c.list, c.Ja);
    d = xu(a, (f) => f.A, d);
    au(b, d.list, d.Ja);
    bu(
      b,
      a.I.map((f) => {
        let g;
        return null == (g = a.j.get(f)) ? void 0 : g.Ia;
      }).map((f) => {
        let g;
        return null != (g = a.l.get(f)) ? g : null;
      })
    );
  }

  function zu() {
    var a = tu;
    if (!a.B) return fu();
    let b, c;
    const d = ou(
      nu(
        mu(
          lu(
            ku(
              ju(
                iu(hu(eu(new gu(), null != (b = a.B) ? b : []), a.C), a.G),
                a.H
              ),
              a.J
            ),
            a.L
          ),
          null != (c = a.D) ? c : 0
        ),
        tm(a.j).map((e) => {
          var f;
          var g = new du();
          g = z(g, 1, e.wa);
          var h = a.l.get(null != (f = e.Ia) ? f : "", -1);
          f = z(g, 2, h);
          f = z(f, 3, e.j);
          return z(f, 4, e.l);
        })
      ),
      a.I.map((e) => {
        let f;
        return null == (f = a.j.get(e)) ? void 0 : f.Ia;
      }).map((e) => {
        let f;
        return null != (f = a.l.get(e)) ? f : null;
      })
    );
    null != a.A && z(d, 6, a.A);
    return d;
  }
  var tu = new (class {
    constructor() {
      this.B = null;
      this.H = this.G = !1;
      this.A = null;
      this.L = this.C = this.J = !1;
      this.D = null;
      this.l = new um();
      this.j = new um();
      this.I = [];
    }
  })();
  class Au {
    constructor(a = 0) {
      this.j = a;
    }
  }
  class Bu {
    constructor(a) {
      this.l = a;
      this.j = -1;
    }
  }

  function Cu(a) {
    let b = 0;
    for (; a; )
      (!b || a.previousElementSibling || a.nextElementSibling) && b++,
        (a = a.parentElement);
    return b;
  }

  function Du(a, b) {
    const c = a.B.filter((d) =>
      sm(d.qb).every((e) => d.qb.get(e) === b.get(e))
    );
    return 0 === c.length
      ? (a.l.push(19), null)
      : c.reduce((d, e) => (d.qb.Wa() > e.qb.Wa() ? d : e), c[0]);
  }

  function Eu(a, b) {
    b = Uo(b);
    if (null == b.j) return a.l.push(18), null;
    b = b.j.value;
    if (qm(a.A, b)) return a.A.get(b);
    var c = dn(b);
    c = Du(a, c);
    a.A.set(b, c);
    return c;
  }

  function Fu(a, b) {
    let c;
    return (null == (c = Eu(a, b)) ? void 0 : c.te) || Number.MAX_VALUE;
  }

  function Gu(a, b) {
    const c = Al(Sk) || 0;
    if (0 == b.length || 0 == c) return !0;
    const d = new Om(b).filter((e) => {
      let f;
      e = (null == (f = Eu(a, e)) ? void 0 : f.wa) || "";
      return "" != e && !(e === Jt || e === Kt);
    });
    return c <= d.j.length / b.length;
  }
  var Hu = class {
    constructor(a) {
      this.j = a;
      this.A = new um();
      let b;
      this.B = ((null == (b = D(a, Kj, 2)) ? void 0 : G(b, Lj, 1)) || []).map(
        (c) => ({
          qb: dn(c.ub()),
          te: c.$b(),
          wa: c.ub(),
        })
      );
      this.l = [];
    }
  };

  function Iu(a, b) {
    return 0 == b.j.length ? b : b.sort((c, d) => Fu(a.j, c) - Fu(a.j, d));
  }

  function Ju(a, b) {
    var c = b.U.j,
      d = Math,
      e = d.min;
    const f = b.V(),
      g = b.P.l();
    c += 200 * e.call(d, 20, 0 == g || 3 == g ? Cu(f.parentElement) : Cu(f));
    d = a.A;
    0 > d.j && (d.j = Y(d.l).scrollHeight || 0);
    d = d.j - b.U.j;
    c += 1e3 < d ? 0 : 2 * (1e3 - d);
    a = a.l;
    b = b.V();
    return (
      c +
      ("string" === typeof b.className &&
      0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot")
        ? a.j
        : 0)
    );
  }

  function Ku(a, b) {
    return 0 == b.j.length ? b : b.sort((c, d) => Ju(a, c) - Ju(a, d));
  }

  function Lu(a, b) {
    return b.sort((c, d) => {
      const e = c.P.G,
        f = d.P.G;
      var g;
      null == e || null == f
        ? (g =
            null == e && null == f ? Ju(a, c) - Ju(a, d) : null == e ? 1 : -1)
        : (g = e - f);
      return g;
    });
  }
  class Mu {
    constructor(a, b = 0, c = null) {
      this.A = new Bu(a);
      this.l = new Au(b);
      this.j = c && new Hu(c);
    }
  }
  class Nu {
    constructor(a, b, c = 0, d = null) {
      this.A = new Om(a);
      this.l = new Mu(b, c, d);
      this.j = b;
      this.B = new Nt();
    }
    find(a, b = 0) {
      const c = a.jc ? a.jc : [0],
        d = "number" === typeof a.Qc ? a.Qc : 0,
        e = "number" === typeof a.minWidth ? a.minWidth : 0,
        f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
        g = "number" === typeof a.va ? a.va : 0;
      let h = this.A;
      h = Nm(
        Nm(
          Nm(
            Nm(
              Nm(
                Nm(Nm(h, jq(c), Ou(1, b)), kq(a.Ua || []), Ou(2, b)),
                nq(a.Wb || []),
                Ou(3, b)
              ),
              oq(a.ni || []),
              Ou(4, b)
            ),
            pq(a.oc || []),
            Ou(5, b)
          ),
          lq(a.nc || []),
          Ou(6, b)
        ),
        le(qo),
        Ou(7, b)
      );
      let l = (h = h.apply(eq(this.j)));
      l =
        a.nb && a.Bc
          ? Nm(l, iq(d, a.Bc, this.j, a.mb), Pu(16, b))
          : Nm(l, hq(d, this.j, a.mb), Pu(9, b));
      l = Nm(l, ua(sq, e, f), Pu(10, b));
      a.lb && (l = Nm(l, qq(this.j.document, a.lb), Pu(11, b)));
      a.Xb && (l = Nm(l, rq(), Pu(17, b)));
      l = Nm(Nm(l, fq(this.j), Pu(12, b)), mq(g, this.j), Pu(13, b));
      a.gb
        ? (l = Lu(this.l, l))
        : a.Ie
        ? ((l = Iu(this.l, l)),
          Mm(h, (k) => {
            su(k);
            var m;
            null != (m = this.l.j) &&
              ((m = Eu(m, k)),
              null != (null == m ? void 0 : m.wa) && wu(k, m.wa));
          }),
          Mm(l, (k) => uu(k)))
        : (l = Ku(this.l, l));
      a.cb &&
        (l = Pm(
          l,
          df(this.j.location.href + this.j.localStorage.google_experiment_mod)
        ));
      1 === c.length &&
        Mt(this.B, c[0], {
          Cd: h.j.length,
          Je: l.j.length,
        });
      return l.j.slice(0);
    }
  }
  const Ou = (a, b) => (c) => so(c, b, a),
    Pu = (a, b) => (c) => so(c.P, b, a);

  function Qu(a, b) {
    if (!a) return !1;
    a = If(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }

  function Ru(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }

  function Su(a) {
    return !!a.nextSibling || (!!a.parentNode && Su(a.parentNode));
  }

  function Tu(a) {
    const b = Hl(a, !0),
      c = Y(a).scrollWidth,
      d = Y(a).scrollHeight;
    let e = "unknown";
    a && a.document && a.document.readyState && (e = a.document.readyState);
    var f = Ml(a);
    const g = [];
    var h = [];
    const l = [],
      k = [];
    var m = [],
      n = [],
      q = [];
    let r = 0,
      t = 0,
      x = Infinity,
      H = Infinity,
      B = null;
    var C = yp(
      {
        Fa: !1,
      },
      a
    );
    for (var F of C) {
      C = F.getBoundingClientRect();
      const T = b - (C.bottom + f);
      var I = void 0,
        E = void 0;
      if (
        F.className &&
        -1 != F.className.indexOf("adsbygoogle-ablated-ad-slot")
      ) {
        I = F.getAttribute("google_element_uid");
        E = a.google_sv_map;
        if (!I || !E || !E[I]) continue;
        I = (E = oh(E[I])) ? E.height : 0;
        E = E ? E.width : 0;
      } else if (
        ((I = C.bottom - C.top), (E = C.right - C.left), 1 >= I || 1 >= E)
      )
        continue;
      g.push(I);
      l.push(E);
      k.push(I * E);
      F.className && -1 != F.className.indexOf("google-auto-placed")
        ? ((t += 1),
          F.className &&
            -1 != F.className.indexOf("pedestal_container") &&
            (B = I))
        : ((x = Math.min(x, T)), n.push(C), (r += 1), h.push(I), m.push(I * E));
      H = Math.min(H, T);
      q.push(C);
    }
    x = Infinity === x ? null : x;
    H = Infinity === H ? null : H;
    f = Uu(n);
    q = Uu(q);
    h = Vu(b, h);
    n = Vu(b, g);
    m = Vu(b * c, m);
    F = Vu(b * c, k);
    return new Wu(a, {
      Qd: e,
      kc: b,
      ne: c,
      me: d,
      fe: r,
      Bd: t,
      Ed: Xu(g),
      Fd: Xu(l),
      Dd: Xu(k),
      ke: f,
      je: q,
      ie: x,
      he: H,
      Sb: h,
      Rb: n,
      wd: m,
      vd: F,
      pe: B,
    });
  }

  function Yu(a, b, c, d) {
    const e = zf() && !(900 <= Y(a.l).clientWidth);
    d = $a(d, (f) => db(a.A, f)).join(",");
    return {
      wpc: b,
      su: c,
      eid: d,
      doc: a.j.Qd,
      pg_h: Zu(a.j.kc),
      pg_w: Zu(a.j.ne),
      pg_hs: Zu(a.j.me),
      c: Zu(a.j.fe),
      aa_c: Zu(a.j.Bd),
      av_h: Zu(a.j.Ed),
      av_w: Zu(a.j.Fd),
      av_a: Zu(a.j.Dd),
      s: Zu(a.j.ke),
      all_s: Zu(a.j.je),
      b: Zu(a.j.ie),
      all_b: Zu(a.j.he),
      d: Zu(a.j.Sb),
      all_d: Zu(a.j.Rb),
      ard: Zu(a.j.wd),
      all_ard: Zu(a.j.vd),
      pd_h: Zu(a.j.pe),
      dt: e ? "m" : "d",
    };
  }
  class Wu {
    constructor(a, b) {
      this.l = a;
      this.j = b;
      this.A =
        "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(
          " "
        );
    }
  }

  function Xu(a) {
    return (
      Xe.apply(
        null,
        $a(a, (b) => 0 < b)
      ) || null
    );
  }

  function Vu(a, b) {
    return 0 >= a ? null : We.apply(null, b) / a;
  }

  function Uu(a) {
    let b = Infinity;
    for (let e = 0; e < a.length - 1; e++)
      for (let f = e + 1; f < a.length; f++) {
        var c = a[e],
          d = a[f];
        c = Math.max(
          Math.max(0, c.left - d.right, d.left - c.right),
          Math.max(0, c.top - d.bottom, d.top - c.bottom)
        );
        0 < c && (b = Math.min(c, b));
      }
    return Infinity !== b ? b : null;
  }

  function Zu(a) {
    return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }

  function $u(a, b) {
    b = (Y(b).clientHeight || 0) - Ml(b);
    let c = 0;
    for (let d = 0; d < a.length; d++) {
      const e = a[d].getBoundingClientRect();
      Gp(e) && e.top <= b && (c += 1);
    }
    return c;
  }

  function av(a) {
    const b = {};
    var c = Ap(
      {
        Fa: !1,
        wb: !1,
        xb: !1,
        yb: !1,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Gp);
    b.rd = c.length;
    c = Bp(
      {
        xb: !0,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Gp);
    b.Sd = c.length;
    c = Bp(
      {
        yb: !0,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Gp);
    b.le = c.length;
    c = Bp(
      {
        wb: !0,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Gp);
    b.ud = c.length;
    c = (Y(a).clientHeight || 0) - Ml(a);
    c = Ap(
      {
        Fa: !1,
      },
      a
    )
      .map((d) => d.getBoundingClientRect())
      .filter(Gp)
      .filter(ta(bv, null, c));
    b.sd = c.length;
    a = Tu(a);
    c = null != a.j.Sb ? a.j.Sb : null;
    null != c && (b.ge = c);
    a = null != a.j.Rb ? a.j.Rb : null;
    null != a && (b.td = a);
    return b;
  }

  function zt(a) {
    var b;
    let c;
    if (
      0 ==
      (null != (c = null == (b = a.A.l.j) ? void 0 : [...Zb(b.j, 1)].length)
        ? c
        : 0)
    )
      return !1;
    if (0 == (Al(Sk) || 0)) return !0;
    if (void 0 === a.I) {
      b = a.A.find({
        jc: [0, 1, 2],
      });
      let d;
      a.I = (null == (d = a.A.l.j) ? void 0 : Gu(d, b)) || !1;
    }
    return a.I;
  }

  function At(a, b, { Nc: c, pd: d, Ld: e } = {}) {
    const f = b.P;
    if (f.B) return !1;
    var g = b.V(),
      h = f.l(),
      l = a.B;
    a: {
      var k = a.j;
      switch (h) {
        case 0:
          k = Qu(Ru(g), k);
          break a;
        case 3:
          k = Qu(g, k);
          break a;
        case 2:
          var m = g.lastChild;
          k = Qu(m ? (1 == m.nodeType ? m : Ru(m)) : null, k);
          break a;
      }
      k = !1;
    }
    if ((l = !k && !(!l && 2 == h && !Su(g))))
      (g = 1 == h || 2 == h ? g : g.parentNode),
        (l = !(g && !rn(g) && 0 >= g.offsetWidth));
    if (!l) return !1;
    c =
      null == c
        ? null
        : new ln(null, {
            google_max_responsive_height: c,
          });
    g = mn(y(f.bb, 2) || 0);
    h = f.G;
    h =
      null == h
        ? null
        : new ln(null, {
            google_ml_rank: h,
          });
    l = cv(a, f);
    d = kn(a.J, f.T ? f.T.j(b.U) : null, c, d || null, g, h, l);
    c = b.fill(a.G, d);
    if (e) {
      if (c) {
        e = c.ha;
        g = e.style.width;
        e.style.width = "100%";
        h = e.offsetWidth;
        e.style.width = g;
        e = h;
        g = a.j;
        h = c.ha;
        l = (d && d.Xa()) || {};
        if (g !== g.top) k = Ff(g) ? 3 : 16;
        else if (488 > Y(g).clientWidth)
          if (g.innerHeight >= g.innerWidth)
            if (((k = Y(g).clientWidth), !k || 0.3 < (k - e) / k)) k = 6;
            else {
              if ((k = "true" != l.google_full_width_responsive))
                c: {
                  m = h.parentElement;
                  for (k = Y(g).clientWidth; m; m = m.parentElement) {
                    const n = If(m, g);
                    if (!n) continue;
                    const q = Vf(n.width);
                    if (q && !(q >= k) && "visible" != n.overflow) {
                      k = !0;
                      break c;
                    }
                  }
                  k = !1;
                }
              k = k ? 7 : !0;
            }
          else k = 5;
        else k = 4;
        if (!0 !== k) e = k;
        else {
          if (!(l = "true" == l.google_full_width_responsive))
            b: {
              do
                if ((l = If(h, g)) && "fixed" == l.position) {
                  l = !1;
                  break b;
                }
              while ((h = h.parentElement));
              l = !0;
            }
          l
            ? ((g = Y(g).clientWidth),
              (e = g - e),
              (e =
                g && 0 <= e ? !0 : g ? (-10 > e ? 11 : 0 > e ? 14 : 12) : 10))
            : (e = 9);
        }
        if (e) {
          e = a.j;
          g = c.ha;
          if ((h = Fn(e, g)))
            (g.style.border =
              g.style.borderStyle =
              g.style.outline =
              g.style.outlineStyle =
              g.style.transition =
                "none"),
              (g.style.borderSpacing = g.style.padding = "0"),
              Dn(g, h, "0px"),
              (g.style.width = Y(e).clientWidth + "px"),
              Gn(e, g, h),
              (g.style.zIndex = 30);
          e = !0;
        } else vn(c.Da), (e = !1);
      } else e = !1;
      e = !e;
    }
    if (e || !Dt(a, c, d)) return !1;
    Ui(9, [f.G, f.Ga]);
    zt(a) && vu(b);
    return !0;
  }

  function Bt(a, b, c, d) {
    const e = c.za ? c.za : a.D;
    var f = {
      Eb: e.A,
      va: e.C,
    };
    for (let g of e.D) g.adCount <= b.j.length && (f = g.pc);
    return a.A.find(
      {
        jc: c.types,
        Qc: f.Eb,
        mb: b,
        Ua: a.da,
        va: f.va || void 0,
        cb: !!a.l.cb,
        gb: !!a.l.gb,
        Ie: zt(a),
        nc: c.nc,
        minWidth: c.minWidth,
        maxWidth: c.maxWidth,
        Wb: a.O,
        lb: a.T,
        oc: c.oc,
        nb: !!a.l.nb,
        Bc: e.j,
        Xb: !!a.Z,
      },
      d
    );
  }

  function dv(a) {
    return a.H ? a.H : (a.H = a.j.google_ama_state);
  }

  function cv(a, b) {
    return Zm(
      an(So(b).map(nn), () => {
        a.C.push(18);
      })
    );
  }

  function Dt(a, b, c) {
    if (!b) return !1;
    try {
      Nn(a.j, b.ha, c);
    } catch (d) {
      return vn(b.Da), a.C.push(6), !1;
    }
    return !0;
  }
  class ev {
    constructor(a, b, c, d, e = {}) {
      this.A = a;
      this.G = b;
      this.j = c;
      this.D = d.za;
      this.da = d.Ua || [];
      this.J = d.Td || null;
      this.O = d.Wb || [];
      this.T = d.lb || [];
      this.Z = !!d.Xb;
      this.l = e;
      this.B = !1;
      this.L = [];
      this.C = [];
      this.I = this.H = void 0;
    }
    N() {
      return this.j;
    }
    la(a) {
      this.L.push(a);
    }
    ec() {
      return !!this.l.$c;
    }
    Cb() {
      return !bm(this.j);
    }
  }
  const bv = (a, b) => b.top <= a;

  function fv(a, b, c, d, e) {
    this.Aa = a;
    this.errors = b;
    this.hb = c;
    this.j = d;
    this.l = e;
  }
  var gv = (a, b, { Cb: c = !1, ec: d = !1, Ce: e = !1 } = {}) => {
    const f = [];
    e && f.push(9);
    -1 < b.indexOf(3) && f.push(6);
    -1 < b.indexOf(4) && !d && c && f.push(8);
    -1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3));
    -1 < b.indexOf(2) && f.push(7);
    -1 < b.indexOf(4) && d && c && f.push(8);
    return f;
  };
  class hv {
    constructor(a, b) {
      this.B = a.slice(0);
      this.l = a.slice(0);
      this.A = eb(this.l, 1);
      this.j = b;
    }
  }
  const iv = class {
    constructor(a) {
      this.j = a;
      this.exception = void 0;
    }
  };
  class jv {
    j() {
      return new ln([], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs",
      });
    }
  }
  class kv {
    j() {
      return new ln(["adsbygoogle-resurrected-ad-slot"], {});
    }
  }

  function lv(a) {
    return sn(a.j.document).map((b) => {
      const c = new io(b, 3);
      b = new ko(Pn(a.j, b));
      return new oo(c, b, a.l, !1, 0, [], null, a.j, null);
    });
  }
  class mv {
    constructor(a) {
      var b = new kv();
      this.j = a;
      this.l = b || null;
    }
  }
  const nv = {
    sc: "10px",
    Pb: "10px",
  };

  function ov(a) {
    return pm(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(
      (b) => new oo(new io(b, 1), new go(nv), a.l, !1, 0, [], null, a.j, null)
    );
  }
  class pv {
    constructor(a, b) {
      this.j = a;
      this.l = b || null;
    }
  }

  function qv(a, b) {
    return null == a
      ? b + "ShouldNotBeNull"
      : 0 == a
      ? b + "ShouldNotBeZero"
      : -1 > a
      ? b + "ShouldNotBeLessMinusOne"
      : null;
  }

  function rv(a, b, c) {
    const d =
      qv(c.sb, "gapsMeasurementWindow") ||
      qv(c.Va, "gapsPerMeasurementWindow") ||
      qv(c.Za, "maxGapsToReport");
    return null != d
      ? Xm(d)
      : c.wc || -1 != c.Va || -1 != c.Za
      ? Vm(new sv(a, b, c))
      : Xm("ShouldHaveLimits");
  }

  function tv(a) {
    return (dv(a.A) && dv(a.A).placed) || [];
  }

  function uv(a) {
    return tv(a).map((b) => Gm(Em(b.element, a.j)));
  }

  function vv(a) {
    return tv(a).map((b) => b.index);
  }

  function wv(a, b) {
    const c = b.P;
    return !a.D && c.A && Xb(c.A, 8) && 1 == y(c.A, 8)
      ? []
      : c.B
      ? (c.J || []).map((d) => Gm(Em(d, a.j)))
      : [Gm(new Fm(b.U.j, 0))];
  }

  function xv(a) {
    a.sort((e, f) => e.j - f.j);
    const b = [];
    let c = 0;
    for (let e = 0; e < a.length; ++e) {
      var d = a[e];
      let f = d.j;
      d = d.j + d.l;
      f <= c ? (c = Math.max(c, d)) : (b.push(new Fm(c, f - c)), (c = d));
    }
    return b;
  }

  function yv(a, b) {
    b = b.map((c) => {
      var d = new pt();
      d = z(d, 1, c.j);
      c = c.getHeight();
      return z(d, 2, c);
    });
    return mt(lt(new ot(), a), b);
  }

  function zv(a) {
    const b = G(a, pt, 2).map((c) => `G${ac(c, 1, 0)}~${c.getHeight()}`);
    return `W${ac(a, 1, 0)}${b.join("")}`;
  }

  function Av(a, b) {
    const c = [];
    let d = 0;
    for (const e of sm(b)) {
      const f = b.get(e);
      f.sort((g, h) => h.getHeight() - g.getHeight());
      a.I || f.splice(a.C, f.length);
      !a.G && d + f.length > a.l && f.splice(a.l - d, f.length);
      c.push(yv(e, f));
      d += f.length;
      if (!a.G && d >= a.l) break;
    }
    return c;
  }

  function Bv(a) {
    const b = G(a, ot, 5).map((c) => zv(c));
    return `M${ac(a, 1, 0)}H${ac(a, 2, 0)}C${ac(a, 3, 0)}B${Number(
      !!bc(a, 4)
    )}${b.join("")}`;
  }

  function Cv(a) {
    var b = Xo(a.A.A.A.j.slice(0), a.j),
      c = uv(a),
      d = new vm(vv(a));
    for (var e = 0; e < b.length; ++e)
      if (!d.contains(e)) {
        var f = wv(a, b[e]);
        c.push(...f);
      }
    c.push(new Fm(0, 0));
    c.push(Gm(new Fm(Y(a.j).scrollHeight, 0)));
    b = xv(c);
    c = new um();
    for (d = 0; d < b.length; ++d)
      (e = b[d]),
        (f = a.H ? 0 : Math.floor(e.j / a.B)),
        qm(c, f) || c.set(f, []),
        c.get(f).push(e);
    b = Av(a, c);
    c = new kt();
    c = z(c, 1, a.l);
    c = z(c, 2, a.B);
    c = z(c, 3, a.C);
    a = z(c, 4, a.D);
    return ic(a, 5, b);
  }

  function Dv(a) {
    a = Cv(a);
    return Bv(a);
  }
  var sv = class {
    constructor(a, b, c) {
      this.H = -1 == c.sb;
      this.B = c.sb;
      this.I = -1 == c.Va;
      this.C = c.Va;
      this.G = -1 == c.Za;
      this.l = c.Za;
      this.D = c.Lc;
      this.A = b;
      this.j = a;
    }
  };
  var Ev = class extends w {
    constructor() {
      super(void 0);
    }
  };
  const Fv = (a) => {
      const b = /[a-zA-Z0-9._~-]/,
        c = /%[89a-zA-Z]./;
      return a.replace(/(%[a-zA-Z0-9]{2})/g, function (d) {
        if (!d.match(c)) {
          const e = decodeURIComponent(d);
          if (e.match(b)) return e;
        }
        return d.toUpperCase();
      });
    },
    Gv = (a) => {
      let b = "";
      const c = /[/%?&=]/;
      for (let d = 0; d < a.length; ++d) {
        const e = a[d];
        b = e.match(c) ? b + e : b + encodeURIComponent(e);
      }
      return b;
    };
  var Hv = (a, b) => {
    a = Zb(a, 2);
    if (!a) return !1;
    for (let c = 0; c < a.length; c++) if (a[c] == b) return !0;
    return !1;
  };
  const Jv = (a, b) => {
      a = Gv(Fv(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
      const c = Of(a),
        d = Iv(a);
      return (
        b.find((e) => {
          const f = Xb(e, 7) ? y(D(e, ak, 7), 1) : y(e, 1);
          e = Xb(e, 7) ? y(D(e, ak, 7), 2) : 2;
          if ("number" !== typeof f) return !1;
          switch (e) {
            case 1:
              return f == c;
            case 2:
              return d[f] || !1;
          }
          return !1;
        }) || null
      );
    },
    Iv = (a) => {
      const b = {};
      for (;;) {
        b[Of(a)] = !0;
        if (!a) return b;
        a = a.substring(0, a.lastIndexOf("/"));
      }
    };
  var Kv = class extends w {
      constructor() {
        super(void 0);
      }
      La(a) {
        return z(this, 2, a);
      }
    },
    Lv = [4, 5];
  var Mv = (a) => {
      a.google_ad_modifications || (a.google_ad_modifications = {});
      return a.google_ad_modifications;
    },
    Nv = (a) => {
      a = Mv(a);
      a.eids || (a.eids = []);
      return a.eids;
    },
    Ov = (a, b) => {
      a = Mv(a);
      a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
      const c = !a.processed_sra_frame_pingbacks[b];
      a.processed_sra_frame_pingbacks[b] = !0;
      return c;
    };
  var Pv = {
      google_ad_block: "ad_block",
      google_ad_client: "client",
      google_ad_output: "output",
      google_ad_callback: "callback",
      google_ad_height: "h",
      google_ad_resize: "twa",
      google_ad_slot: "slotname",
      google_ad_unit_key: "adk",
      google_ad_dom_fingerprint: "adf",
      google_placement_id: "pi",
      google_ad_width: "w",
      google_captcha_token: "captok",
      google_content_recommendation_columns_num: "cr_col",
      google_content_recommendation_rows_num: "cr_row",
      google_ctr_threshold: "ctr_t",
      google_cust_criteria: "cust_params",
      gfwrnwer: "fwrn",
      gfwrnher: "fwrnh",
      google_image_size: "image_size",
      google_last_modified_time: "lmt",
      google_loeid: "loeid",
      google_max_num_ads: "num_ads",
      google_max_radlink_len: "max_radlink_len",
      google_mtl: "mtl",
      google_native_settings_key: "nsk",
      google_enable_content_recommendations: "ecr",
      google_num_radlinks: "num_radlinks",
      google_num_radlinks_per_unit: "num_radlinks_per_unit",
      google_pucrd: "pucrd",
      google_reactive_plaf: "plaf",
      google_reactive_plat: "plat",
      google_reactive_fba: "fba",
      google_reactive_sra_channels: "plach",
      google_responsive_auto_format: "rafmt",
      armr: "armr",
      google_plas: "plas",
      google_rl_dest_url: "rl_dest_url",
      google_rl_filtering: "rl_filtering",
      google_rl_mode: "rl_mode",
      google_rt: "rt",
      google_video_play_muted: "vpmute",
      google_source_type: "src_type",
      google_restrict_data_processing: "rdp",
      google_tag_for_child_directed_treatment: "tfcd",
      google_tag_for_under_age_of_consent: "tfua",
      google_tag_origin: "to",
      google_ad_semantic_area: "sem",
      google_tfs: "tfs",
      google_package: "pwprc",
      google_tag_partner: "tp",
      fra: "fpla",
      google_ml_rank: "mlr",
      google_apsail: "psa",
      google_ad_channel: "channel",
      google_ad_type: "ad_type",
      google_ad_format: "format",
      google_color_bg: "color_bg",
      google_color_border: "color_border",
      google_color_link: "color_link",
      google_color_text: "color_text",
      google_color_url: "color_url",
      google_page_url: "url",
      google_allow_expandable_ads: "ea",
      google_ad_section: "region",
      google_cpm: "cpm",
      google_encoding: "oe",
      google_safe: "adsafe",
      google_flash_version: "flash",
      google_font_face: "f",
      google_font_size: "fs",
      google_hints: "hints",
      google_ad_host: "host",
      google_ad_host_channel: "h_ch",
      google_ad_host_tier_id: "ht_id",
      google_kw_type: "kw_type",
      google_kw: "kw",
      google_contents: "contents",
      google_targeting: "targeting",
      google_adtest: "adtest",
      google_alternate_color: "alt_color",
      google_alternate_ad_url: "alternate_ad_url",
      google_cust_age: "cust_age",
      google_cust_ch: "cust_ch",
      google_cust_gender: "cust_gender",
      google_cust_interests: "cust_interests",
      google_cust_job: "cust_job",
      google_cust_l: "cust_l",
      google_cust_lh: "cust_lh",
      google_cust_u_url: "cust_u_url",
      google_cust_id: "cust_id",
      google_language: "hl",
      google_city: "gcs",
      google_country: "gl",
      google_region: "gr",
      google_content_recommendation_ad_positions: "ad_pos",
      google_content_recommendation_columns_num: "cr_col",
      google_content_recommendation_rows_num: "cr_row",
      google_content_recommendation_ui_type: "crui",
      google_content_recommendation_use_square_imgs: "cr_sq_img",
      google_color_line: "color_line",
      google_disable_video_autoplay: "disable_video_autoplay",
      google_full_width_responsive_allowed: "fwr",
      google_full_width_responsive: "fwrattr",
      efwr: "efwr",
      google_pgb_reactive: "pra",
      google_resizing_allowed: "rs",
      google_resizing_height: "rh",
      google_resizing_width: "rw",
      rpe: "rpe",
      google_responsive_formats: "resp_fmts",
      google_safe_for_responsive_override: "sfro",
      google_video_doc_id: "video_doc_id",
      google_video_product_type: "video_product_type",
      google_webgl_support: "wgl",
    },
    Qv = (a) =>
      (a = a.innerText || a.innerHTML) &&
      (a = a
        .replace(/^\s+/, "")
        .split(/\r?\n/, 1)[0]
        .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
      RegExp("google_ad_client").test(a[1])
        ? a[1]
        : null,
    Rv = (a) => {
      if ((a = a.innerText || a.innerHTML))
        if (
          ((a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";")),
          (a =
            a.match(/^\x3c!--+(.*?)(?:--+>)?$/) ||
            a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
            RegExp("google_ad_client").test(a[1]))
        )
          return a[1];
      return null;
    },
    Sv = (a) => {
      switch (a) {
        case "true":
          return !0;
        case "false":
          return !1;
        case "null":
          return null;
        case "undefined":
          break;
        default:
          try {
            const b = a.match(/^(?:'(.*)'|"(.*)")$/);
            if (b) return b[1] || b[2] || "";
            if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
              const c = parseFloat(a);
              return c === c ? c : void 0;
            }
          } catch (b) {}
      }
    };

  function Tv(a, b) {
    var c = new Kv();
    c = z(c, 1, a.B).La(a.webPropertyCode);
    c = z(c, 3, a.l);
    b = hc(c, 5, Lv, b);
    a.j && !a.A.has(2) && (a.A.add(2), di(a.ka, b));
  }
  var Uv = class {
    constructor(a) {
      this.A = new Set();
      this.l = Al(qk);
      this.B = (this.j = 0 < this.l && Lf() < 1 / this.l) ? jg(R()) : 0;
      if (this.j) {
        var b = R(),
          c,
          d,
          e;
        if (b.google_ad_client) var f = String(b.google_ad_client);
        else {
          var g = Mv(b).head_tag_slot_vars;
          if (
            null !==
              (d =
                null !==
                  (f =
                    null === g || void 0 === g ? void 0 : g.google_ad_client) &&
                void 0 !== f
                  ? f
                  : null ===
                      (c = b.document.querySelector(
                        ".adsbygoogle[data-ad-client]"
                      )) || void 0 === c
                  ? void 0
                  : c.getAttribute("data-ad-client")) &&
            void 0 !== d
          )
            f = d;
          else {
            c: {
              f = b.document.getElementsByTagName("script");
              b = (b.navigator && b.navigator.userAgent) || "";
              b =
                RegExp(
                  "appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                  "i"
                ).test(b) ||
                (/i(phone|pad|pod)/i.test(b) &&
                  /applewebkit/i.test(b) &&
                  !/version|safari/i.test(b) &&
                  !lh())
                  ? Qv
                  : Rv;
              for (c = f.length - 1; 0 <= c; c--)
                if (
                  ((d = f[c]),
                  !d.google_parsed_script_for_pub_code &&
                    ((d.google_parsed_script_for_pub_code = !0), (d = b(d))))
                ) {
                  f = d;
                  break c;
                }
              f = null;
            }
            if (f) {
              b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
              for (c = {}; (d = b.exec(f)); ) c[d[1]] = Sv(d[2]);
              f = c;
              f = f.google_ad_client ? f.google_ad_client : "";
            } else f = "";
          }
          f = null !== (e = f) && void 0 !== e ? e : "";
        }
      } else f = "";
      this.webPropertyCode = f;
      this.ka = null !== a && void 0 !== a ? a : new ii();
    }
  };
  var Wv = (a, b, c, d, e, f = null, g = null, h) => {
      Vv(a, new Qq(a), b, c, d, e, f, new Jm(a), g, h);
    },
    Vv = (a, b, c, d, e, f, g = null, h = null, l = null, k) => {
      if (c)
        if (d) {
          var m = [];
          D(d, Fj, 18) && m.push(2);
          e.W && m.push(0);
          const n = Sj(d) && A(Sj(d), 22),
            q = D(d, dj, 28) && 1 == ac(D(d, dj, 28), 1, 0);
          (n || q) && m.push(1);
          D(d, Yi, 27) && 1 == ac(D(d, Yi, 27), 1, 0) && m.push(3);
          D(d, Gj, 29) && m.push(4);
          try {
            Xv(new Yv(a, b, c, d, e, m, f, g, h, l, k));
          } catch (r) {
            Ti() && Ui(15, [r]),
              Pq(b, Fq, Nq(Pt(Ot(new Qt(0).La(c), d), m).la(1), r)),
              Tv(ji(Uv), new Ev());
          }
        } else Pq(b, Fq, new Qt(0).La(c).la(8)), Tv(ji(Uv), new Ev());
      else Pq(b, Fq, new Qt(0).la(9)), Tv(ji(Uv), new Ev());
    };

  function Xv(a) {
    a.G.forEach((b) => {
      switch (b) {
        case 0:
          Zv(a);
          break;
        case 1:
          var c = new Nr(a.l, a.j, a.C),
            d = ar(c.j, c.l);
          d = Xo(d, c.j).sort(Or);
          d = 0 == d.length ? [] : [d[Math.floor(d.length / 2)]];
          b = c.j;
          const e = [];
          for (let f = 0; f < d.length; f++) {
            const g = d[f],
              h = "autors-container-" + f,
              l = b.document.createElement("div");
            l.setAttribute("id", h);
            new Mr(b, g, new $q(l)).init();
            e.push(h);
          }
          new Kr(c.j, e, c.A, y(D(c.l, tj, 22), 1)).init();
          break;
        case 2:
          (c = D(a.j, Fj, 18)) &&
            Os(new Ps(a.l, new ht(a.l, a.C), c, new ur(a.l), G(a.j, Dj, 1)));
          break;
        case 3:
          $v(a);
          break;
        case 4:
          (b = D(a.j, Gj, 29)) &&
            aw(a.ka, {
              win: a.l,
              webPropertyCode: a.C,
              Wd: b,
              yd:
                null != (d = null == (c = D(a.j, vj, 6)) ? void 0 : G(c, wj, 1))
                  ? d
                  : [],
            });
      }
    });
  }

  function Zv(a) {
    bw(a) && cw(a, "p", dw(a));
    if (Qj(a.j) && 1 === y(Qj(a.j), 1)) {
      var b = D(Qj(a.j), ck, 6);
      b && 2 === y(b, 1) && On(a.l);
    }
    b = a.B.re;
    a: {
      var c = a.l;
      var d = gp(c);
      c = Y(c).clientHeight || dp[d];
      var e = jp(G(b, fj, 2), d);
      if (e && (e = mp(e, c))) {
        d = e;
        break a;
      }
      d = hp(d, c);
    }
    if (
      a.B.W &&
      Xb(a.B.W, 10) &&
      ((c = $b(D(a.B.W, bk, 10), 1)), null !== c && void 0 !== c)
    ) {
      var f = a.l;
      d = c;
      c = gp(f);
      e = Y(f).clientHeight || dp[c];
      var g = void 0;
      b &&
        (g = (g = (g = jp(G(b, fj, 2), c)) ? D(g, hj, 7) : void 0)
          ? np(g, e)
          : void 0);
      var h = gp(f);
      f = Y(f).clientHeight || dp[h];
      const O = lp(ep[h].qc, f);
      f = null === O ? hp(h, f) : new ip(O, O, op(O, O, 8), 8, 0.3, g);
      g = lp(ep[c].ed, e);
      h = lp(ep[c].qc, e);
      e = lp(ep[c].dd, e);
      c = f.A;
      g &&
        e &&
        h &&
        void 0 !== d &&
        (c = 0.5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
      d = c;
      d = new ip(c, d, op(c, d, f.l), f.l, f.B, f.j);
    }
    if (Xb(a.j, 26)) {
      c = D(a.j, ek, 26);
      e = a.l;
      g = A(c, 2);
      c = D(c, fj, 1);
      f = Y(e).clientHeight || dp[gp(e)];
      var l;
      e = null != (l = lp(null == c ? void 0 : y(c, 2), f)) ? l : d.A;
      var k;
      l = null != (k = lp(null == c ? void 0 : y(c, 5), f)) ? k : d.C;
      var m;
      k = g
        ? []
        : null != (m = kp(null == c ? void 0 : G(c, gj, 3), f))
        ? m
        : d.D;
      var n;
      m = null != (n = null == c ? void 0 : y(c, 4)) ? n : d.l;
      var q;
      n = null != (q = null == c ? void 0 : $b(c, 6)) ? q : d.B;
      var r;
      q =
        null != (r = (null == c ? 0 : Xb(c, 7)) ? np(D(c, hj, 7), f) : null)
          ? r
          : d.j;
      d = new ip(e, l, k, m, n, q);
    }
    r = a.B.W ? Zb(a.B.W, 6) : [];
    q = a.B.W ? G(a.B.W, oj, 5) : [];
    n = X(Ok);
    var t;
    k = a.j;
    c = G(k, Dj, 1);
    l = a.B.W && Hv(a.B.W, 1) ? "text_image" : "text";
    e = new jv();
    m = po(c, a.l, {
      Hd: e,
      ae: new lo(l),
    });
    c.length != m.length && a.L.push(13);
    m = m.concat(ov(new pv(a.l, e)));
    c = 0;
    e = X(Jk);
    f = !1;
    Qj(k) &&
      1 === y(Qj(k), 1) &&
      (g = D(Qj(k), ck, 6)) &&
      ((c = y(g, 2) || 0), 1 === y(g, 1) && (f = !0));
    var x, H;
    g =
      (null == (t = D(k, Ij, 24))
        ? void 0
        : null == (x = D(t, Mj, 3))
        ? void 0
        : null == (H = D(x, Nj, 3))
        ? void 0
        : nc(H, Oj, 2, Pj)) || !1;
    if (e || f || g)
      (t = lv(new mv(a.l))), (m = m.concat(t)), (tu.J = !0), (tu.D = t.length);
    m = m.concat(it(k, l, a.l));
    t = D(k, Ij, 24);
    t = new Nu(m, a.l, c, t);
    x = a.C;
    H = a.l;
    r = {
      za: d,
      Td: a.Z,
      Ua: a.B.Ua,
      Wb: r,
      lb: q,
      Xb: n,
    };
    n = X(Kk);
    Sj(a.j)
      ? ((q = Sj(a.j)),
        (m = $b(q, 8)),
        (q = {
          cb: n || bc(q, 14, !1),
          gb: bc(q, 2, !1),
          Cc: bc(q, 3, !1),
          gd: bc(q, 4, !1),
          Dc: bc(q, 5, !1),
          $c: bc(q, 6, !1),
          qe: null == m ? 0 : m,
          Uc: y(q, 10),
          nb: ew(a),
          Yb: a.T,
        }))
      : (q = {
          cb: n,
          gb: !1,
          Cc: !1,
          gd: !1,
          Dc: !1,
          $c: !1,
          qe: 0,
          Uc: 0,
          nb: ew(a),
          Yb: a.T,
        });
    a.A = new ev(t, x, H, r, q);
    var B, C;
    (null == (B = dv(a.A))
      ? 0
      : null == (C = B.optimization)
      ? 0
      : C.ablatingThisPageview) &&
      !zt(a.A) &&
      (On(a.l), (tu.C = !0));
    C = a.B.W ? Zb(a.B.W, 2) : [];
    B = a.A;
    b = gv(y(b, 1), C, {
      Cb: B.Cb(),
      ec: B.ec(),
      Ce: !!B.l.Yb,
    });
    b = new hv(b, B);
    a.H = b;
    B = a.H;
    b = new nm();
    for (B.j.B = !0; 0 < B.l.length; )
      (C = B),
        (t = wt[B.l[0]]) ? (C = t(C.j)) : (C.j.la(12), (C = !0)),
        C || B.j.la(5),
        B.l.shift();
    try {
      var F = b.resolve,
        I = B.j.A.A.filter(qo).j.length,
        E = B.j.L.slice(0),
        T = B.j;
      let O;
      var sa = [...T.C, ...((null == (O = T.A.l.j) ? void 0 : [...O.l]) || [])];
      F.call(b, new iv(new fv(I, E, sa, B.j.A.A.j.length, B.j.A.B.j)));
    } catch (O) {
      (F = O), km(b), (b.j = 2), (b.A = F), mm(b.l);
    }
    b.l.then(ta(a.ea, a), ta(a.O, a));
  }

  function $v(a) {
    $m(
      Rq(a.l, a.j, a.da, {
        google_ad_client: a.C,
      }),
      (b) => {
        const c = !!b.B.eb && Uq(b);
        c && (b.C = Bq(b.j, b.D, b.B.eb));
        var d = b.j;
        var e = D(b.l, Zi, 2);
        var f = Ko(b.G, d);
        f = f.filter(Mo).filter(No(f)).filter(Oo(d));
        f.sort(Po);
        if ((f = f[0] || null)) {
          a: switch (ac(e, 1, 0)) {
            case 1:
              d = new uq(d, f);
              break a;
            case 2:
              d = new bp(Yo(d, f));
              break a;
            case 3:
              d = new tq(d, Yo(d, f));
              break a;
            default:
              throw Error(`Unknown player position: ${ac(e, 1, 0)}`);
          }
          d = d.j();
        } else d = null;
        if (d) {
          e = b.j;
          f = D(b.l, cj, 4) || void 0;
          if (
            0 <
            e.document.getElementsByTagName("google-read-aloud-player").length
          )
            e = Xm("Player already created");
          else {
            var g = b.B,
              h = e.document;
            const l = h.createElement("div");
            l.id = "google-auto-placed-read-aloud-player";
            L(l, {
              margin: "5px",
            });
            const k = h.createElement("script");
            ge(
              k,
              Lg`window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`
            );
            l.appendChild(k);
            vq(h, l, vc("https://www.google-analytics.com/analytics.js"));
            vq(
              h,
              l,
              vc(
                "https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"
              )
            );
            h = h.createElement("google-read-aloud-player");
            h.setAttribute(
              "data-api-key",
              "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs"
            );
            h.setAttribute(
              "data-tracking-ids",
              "UA-199725947-1,UA-168915890-13"
            );
            h.setAttribute("data-url", g.url);
            h.setAttribute("data-voice", "en-us-f-1");
            f &&
              (Xb(f, 1) &&
                0 != ac(f, 1, 0) &&
                h.setAttribute("data-docking-begin-trigger", wq[ac(f, 1, 0)]),
              Xb(f, 2) && h.setAttribute("data-experiment", J(f, 2)));
            l.appendChild(h);
            Vo(d, l);
            e = Vm(
              e.document.getElementsByTagName("google-read-aloud-player")[0]
            );
          }
          null != e.j
            ? ((b.A = e.j.value),
              c && Tq(b),
              Vq(b, {
                sts: "ok",
                pp: d.U.j,
              }))
            : Vq(b, {
                sts: "wf",
              });
        } else
          Vq(b, {
            sts: "pf",
          });
      }
    );
  }

  function ew(a) {
    return a.B.W && Xb(a.B.W, 10) ? 0.5 <= ($b(D(a.B.W, bk, 10), 1) || 0) : !0;
  }

  function fw(a, b) {
    for (
      var c = Mq(Mq(new Qt(b.Aa), b.errors), a.L), d = b.hb, e = 0;
      e < d.length;
      e++
    )
      a: {
        for (var f = d[e], g = 0; g < c.D.length; g++) if (c.D[g] == f) break a;
        c.D.push(f);
      }
    c.l.ppos = b.placementPositionDiffs;
    c.l.eatf = b.Tb;
    c.l.eatfAbg = b.Ub;
    c.l.reatf = b.vb;
    c.l.a = a.H.B.slice(0).join(",");
    a = Pt(Ot(c, a.j), a.G).La(a.C);
    if ((c = b.Ob))
      (a.l.as_count = c.rd),
        (a.l.d_count = c.Sd),
        (a.l.ng_count = c.le),
        (a.l.am_count = c.ud),
        (a.l.atf_count = c.sd),
        (a.l.mdns = Rt(c.ge)),
        (a.l.alldns = Rt(c.td));
    c = b.Ib;
    null != c && (a.l.allp = c);
    if ((c = b.Ud)) {
      d = [];
      for (var h of sm(c))
        0 < c.get(h).length &&
          ((e = c.get(h)[0]), d.push("(" + [h, e.Cd, e.Je].join() + ")"));
      a.l.fd = d.join(",");
    }
    h = b.kc;
    null != h && (a.l.pgh = h);
    void 0 !== b.exception && Nq(a, b.exception).la(1);
    return a;
  }

  function gw(a, b) {
    var c = fw(a, b);
    Pq(
      a.D,
      0 < b.errors.length || 0 < a.L.length || void 0 !== b.exception
        ? 0 < a.J
          ? Hq
          : Fq
        : 0 < a.J
        ? Gq
        : Eq,
      c
    );
    if (D(a.j, Ij, 24)) {
      if (null != (b = a.A.A.l.j)) {
        tu.B = [...Zb(b.j, 1)];
        var d;
        let k;
        tu.H = !!(null == (d = D(b.j, Mj, 3))
          ? 0
          : null == (k = D(d, Nj, 3))
          ? 0
          : nc(k, Oj, 2, Pj));
        d = new um();
        var e;
        let m;
        for (const n of null !=
        (m = null == (e = D(b.j, Kj, 2)) ? void 0 : G(e, Lj, 1))
          ? m
          : [])
          d.set(n.ub(), n.$b());
        tu.l = d;
      }
      e = dv(a.A);
      var f;
      tu.A = !!(null == e
        ? 0
        : null == (f = e.optimization)
        ? 0
        : f.ablationFromStorage);
      var g;
      if (
        null == e
          ? 0
          : null == (g = e.optimization)
          ? 0
          : g.ablatingThisPageview
      )
        tu.G = !0;
      let l;
      tu.L = !!(null == e
        ? 0
        : null == (l = e.optimization)
        ? 0
        : l.availableAbg);
      var h;
      f = tu;
      c = new cu(c);
      f.B
        ? ((g = null != (h = f.B) ? h : []),
          (c.j.sl = g.join("~")),
          (c.j.ab = Tt(f.G)),
          (c.j.rr = Tt(f.J)),
          (c.j.oab = Tt(f.H)),
          null != f.A && (c.j.sab = Tt(f.A)),
          f.C && (c.j.fb = Tt(f.C)),
          (c.j.ls = Tt(f.L)),
          St(c, f.l.Wa()),
          null != f.D && (c.j.rp = Tt(f.D)),
          yu(f, c))
        : ((h = c),
          (f = "irr".replace(RegExp("~", "g"), "")),
          (h.j.e = h.j.e ? h.j.e + ("~" + f) : f));
      h = c;
      Pq(a.D, Kq, h);
    }
  }

  function hw(a) {
    const b = new Ev(),
      c = ji(Uv);
    c.j && D(a.j, Ij, 24) && ((a = zu()), gc(b, 1, a));
    Tv(c, b);
  }

  function iw(a) {
    return Qj(a.j) && 1 === y(Qj(a.j), 1)
      ? !(D(Qj(a.j), ck, 6) && 1 <= (y(D(Qj(a.j), ck, 6), 3) || 0))
      : !1;
  }

  function jw(a) {
    if (iw(a)) {
      a = a.A;
      var b = Bp(
        {
          xb: !0,
          yb: !0,
        },
        a.j
      );
      a = 0 < $u(b, a.j);
    } else
      (a = a.A.j),
        (b = Ap(
          {
            Fa: !1,
            wb: !1,
          },
          a
        )),
        (a = 0 < $u(b, a));
    return a;
  }

  function kw(a) {
    if (bw(a)) {
      var b = dw(a);
      a.I.init(null == b ? void 0 : b, () => {
        cw(a, "s", b);
      });
      Hm(a.I, (c) => {
        cw(a, "d", dw(a), c);
        a.I.da();
        let d, e;
        if (null == (d = a.j) ? 0 : null == (e = Sj(d)) ? 0 : bc(e, 21, !1)) {
          let f, g;
          null != (f = a.j) && null != (g = Sj(f)) && z(g, 18, !1);
          try {
            let h;
            if (null == (h = a.G) ? 0 : h.includes(0))
              a.J++, Zv(a), cw(a, "r", dw(a), c);
          } catch (h) {
            cw(a, "f", dw(a), c),
              Pq(a.D, Hq, Nq(Pt(Ot(new Qt(0).La(a.C), a.j), a.G).la(1), h));
          }
        }
      });
    }
  }

  function lw(a, b, c) {
    {
      var d = dv(a.A),
        e = b.j;
      const f = e.j;
      let g = e.Aa,
        h = e.errors.slice(),
        l = e.hb.slice(),
        k = b.exception;
      d
        ? (d.numAutoAdsPlaced ? (g += d.numAutoAdsPlaced) : a.H.A && l.push(13),
          void 0 !== d.exception && (k = d.exception),
          (c = {
            Aa: g,
            Ib: f,
            errors: e.errors.slice(),
            hb: l,
            exception: k,
            vb: c,
            Tb: !!d.eatf,
            Ub: !!d.eatfAbg,
          }))
        : (l.push(12),
          a.H.A && l.push(13),
          (c = {
            Aa: g,
            Ib: f,
            errors: h,
            hb: l,
            exception: k,
            vb: c,
            Tb: !1,
            Ub: !1,
          }));
    }
    c.Ob = av(a.A.j);
    if ((b = b.j.l)) c.Ud = b;
    c.kc = Y(a.l).scrollHeight;
    if (Ti()) {
      d = a.A.A.A.j.slice(0);
      b = [];
      for (const f of d) {
        d = {};
        e = f.L;
        for (const g of sm(e)) d[g] = e.get(g);
        d = {
          anchorElement: f.H.j(f.j),
          position: f.l(),
          clearBoth: f.I,
          locationType: f.Ga,
          placed: f.B,
          placementProto: f.A ? f.A.toJSON() : null,
          articleStructure: f.C ? f.C.toJSON() : null,
          rejectionReasons: d,
        };
        b.push(d);
      }
      Ui(14, [
        {
          placementIdentifiers: b,
        },
        a.A.G,
        c.Ob,
      ]);
    }
    return c;
  }

  function mw(a, b) {
    var c = a.A.j;
    c = c.googleSimulationState = c.googleSimulationState || {};
    c.amaConfigPlacementCount = b.Ib;
    c.numAutoAdsPlaced = b.Aa;
    c.hasAtfAd = b.vb;
    void 0 !== b.exception && (c.exception = b.exception);
    null != a.A &&
      ((a = rv(a.l, a.A, {
        sb: -1,
        Va: -1,
        Za: -1,
        Lc: !0,
        wc: !0,
      })),
      null != a.j
        ? ((c.placementPositionDiffs = Dv(a.j.value)),
          (b = Cv(a.j.value)),
          (a = new qt()),
          (a = hc(a, 2, rt, b)),
          (c.placementPositionDiffsReport = kc(a)))
        : ((b = a.l.message),
          (c.placementPositionDiffs = "E" + b),
          (a = new qt()),
          (a = ec(a, 1, rt, b)),
          (c.placementPositionDiffsReport = kc(a))));
  }

  function cw(a, b, c, d) {
    a = {
      r: b,
      pg_h: Y(a.l).scrollHeight,
      su: a.l.location.hostname,
      d: void 0 == c ? -1 : c,
    };
    void 0 !== d && (a.pg_hd = d);
    S(Jq.ia, a, Jq.ca);
  }

  function bw(a) {
    let b, c, d;
    return null !=
      (d =
        null == (b = a.j)
          ? void 0
          : null == (c = Sj(b))
          ? void 0
          : bc(c, 18, !1))
      ? d
      : !1;
  }

  function dw(a) {
    let b = null;
    Sj(a.j) && Xb(Sj(a.j), 19) && (b = y(Sj(a.j), 19));
    return b;
  }
  class Yv {
    constructor(a, b, c, d, e, f, g, h, l, k, m) {
      this.l = a;
      this.D = b;
      this.C = c;
      this.j = d;
      this.B = e;
      this.G = f;
      this.Z = h || null;
      this.L = [];
      this.I = l;
      this.T = k;
      this.ka = g;
      this.J = 0;
      this.da = m
        ? m
        : {
            url: a.location.href,
            eb: void 0,
          };
    }
    ea(a) {
      try {
        const b = jw(this) || iw(this) ? jw(this) : void 0;
        qn(
          {
            Vb: b,
          },
          this.l
        );
        kw(this);
        const c = lw(this, a, jw(this));
        Xb(this.j, 25) && A(D(this.j, dk, 25), 1) && mw(this, c);
        gw(this, c);
        hw(this);
        yi(753, () => {
          if (X(Ek) && null != this.A) {
            var d = rv(this.l, this.A, {
                sb: Al(Ik),
                Va: Al(Hk),
                Za: Al(Fk),
                Lc: !0,
                wc: !1,
              }),
              e = Cc(c);
            null != d.j
              ? ((d = Dv(d.j.value)), (e.placementPositionDiffs = d))
              : (e.placementPositionDiffs = "E" + d.l.message);
            e = fw(this, e);
            Pq(this.D, Iq, e);
          }
        })();
      } catch (b) {
        this.O(b);
      }
    }
    O(a) {
      gw(this, {
        Aa: 0,
        Ib: void 0,
        errors: [],
        hb: [],
        exception: a,
        vb: void 0,
        Tb: void 0,
        Ub: void 0,
        Ob: void 0,
      });
      hw(this);
    }
  }
  var nw = class extends w {
    constructor(a) {
      super(a);
    }
  };

  function ow(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? Ym(() => lc(nw, c)) : Vm(null);
  }

  function pw() {
    if (qw) return qw;
    const a = Bg() || R(),
      b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (qw = b)
      : (a.google_persistent_state_async = qw = new rw());
  }

  function sw(a) {
    return tw[a] || "google_ps_" + a;
  }

  function uw(a, b, c) {
    b = sw(b);
    a = a.S;
    const d = a[b];
    return void 0 === d ? (a[b] = c) : d;
  }

  function vw(a, b) {
    var c = uw(a, b, 0) + 1;
    return (a.S[sw(b)] = c);
  }

  function ww() {
    var a = pw();
    return uw(a, 20, {});
  }

  function xw() {
    var a = pw();
    return uw(a, 28, []);
  }
  class rw {
    constructor() {
      this.S = {};
    }
  }
  var qw = null;
  const tw = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };

  function yw(a) {
    this.j = a || {
      cookie: "",
    };
  }
  p = yw.prototype;
  p.set = function (a, b, c) {
    let d,
      e,
      f,
      g = !1,
      h;
    "object" === typeof c &&
      ((h = c.oi),
      (g = c.De || !1),
      (f = c.domain || void 0),
      (e = c.path || void 0),
      (d = c.Oc));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.j.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (e ? ";path=" + e : "") +
      (0 > d
        ? ""
        : 0 == d
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
      (g ? ";secure" : "") +
      (null != h ? ";samesite=" + h : "");
  };
  p.get = function (a, b) {
    const c = a + "=",
      d = (this.j.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
      f = Ca(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return "";
    }
    return b;
  };
  p.remove = function (a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
      Oc: 0,
      path: b,
      domain: c,
    });
    return d;
  };
  p.isEmpty = function () {
    return !this.j.cookie;
  };
  p.Wa = function () {
    return this.j.cookie ? (this.j.cookie || "").split(";").length : 0;
  };
  p.clear = function () {
    var a = (this.j.cookie || "").split(";");
    const b = [],
      c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
      (e = Ca(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a]);
  };

  function zw(a, b = window) {
    if (A(a, 5))
      try {
        return b.localStorage;
      } catch (c) {}
    return null;
  }

  function Aw(a) {
    return "null" !== a.origin;
  }

  function Bw(a, b, c) {
    b = A(b, 5) && Aw(c) ? c.document.cookie : null;
    return null === b
      ? null
      : new yw({
          cookie: b,
        }).get(a) || "";
  }

  function Cw(a, b) {
    return z(a, 5, b);
  }
  var Dw = class extends w {
    constructor() {
      super(void 0);
    }
  };
  var Gw = ({ win: a, Ab: b, Jc: c = !1, Kc: d = !1 }) => {
    if (
      !Ew({
        win: a,
        Ab: b,
        Jc: c,
        Kc: d,
      })
    )
      return Fw(a, Cw(new Dw(), !0));
    b = pw();
    (b = uw(b, 24, void 0))
      ? ((b = Cw(new Dw(), Ys(b))), (a = Fw(a, b)))
      : (a = new Wm(null, Error("tcunav")));
    return a;
  };

  function Ew({ win: a, Ab: b, Jc: c, Kc: d }) {
    if (!(d = !d && $s(new ft(a)))) {
      if ((c = !c)) {
        if (b) {
          a = ow(a);
          if (null != a.j)
            if ((a = a.j.value) && Xb(a, 1))
              b: switch (((a = y(a, 1)), a)) {
                case 1:
                  a = !0;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: " + a);
              }
            else a = !1;
          else zi(806, a.l), (a = !1);
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return d ? !0 : !1;
  }

  function Fw(a, b) {
    return (a = zw(b, a)) ? Vm(a) : new Wm(null, Error("unav"));
  }
  var Hw = class extends w {
    constructor(a) {
      super(a);
    }
  };
  class Iw {
    constructor(a, b, c, d) {
      this.j = a;
      this.A = b;
      this.C = c;
      this.l = !1;
      this.B = d;
    }
  }
  Bc(fm);
  Bc(gm);
  var Kw = class extends w {
      constructor(a) {
        super(a, -1, Jw);
      }
    },
    Lw = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Mw = class extends w {
      constructor(a) {
        super(a);
      }
    },
    Jw = [7];

  function Nw(a) {
    (a = Ow(a)) && D(a, Lw, 4);
  }

  function Ow(a) {
    a = (a = new yw(a).get("FCCDCF", "")) ? a : null;
    try {
      return a ? lc(Kw, a) : null;
    } catch (b) {
      return null;
    }
  }

  function Pw(a) {
    a.__uspapi || a.frames.__uspapiLocator || ((a = new Qw(a)), Rw(a));
  }

  function Rw(a) {
    !a.A ||
      a.j.__uspapi ||
      a.j.frames.__uspapiLocator ||
      ((a.j.__uspapiManager = "fc"),
      Ts(a.j, "__uspapiLocator"),
      wa("__uspapi", (...b) => Sw(a, ...b)));
  }

  function Sw(a, b, c, d) {
    "function" === typeof d &&
      "getUSPData" === b &&
      d(
        {
          version: 1,
          uspString: a.A,
        },
        !0
      );
  }
  class Qw {
    constructor(a) {
      this.j = a;
      this.l = a.document;
      this.A = (a = (a = Ow(this.l)) ? D(a, Mw, 5) || null : null)
        ? y(a, 2)
        : null;
      Nw(this.l);
      Nw(this.l);
    }
  }

  function Tw(a) {
    const b = a[0] / 255,
      c = a[1] / 255;
    a = a[2] / 255;
    return (
      0.2126 * (0.03928 >= b ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)) +
      0.7152 * (0.03928 >= c ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)) +
      0.0722 * (0.03928 >= a ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4))
    );
  }

  function Uw(a, b) {
    a = Tw(a);
    b = Tw(b);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  }
  const Vw = {
    google_ad_channel: !0,
    google_ad_host: !0,
  };
  var Ww = (a, b) => {
      a.location.href &&
        a.location.href.substring &&
        (b.url = a.location.href.substring(0, 200));
      S("ama", b, 0.01);
    },
    Xw = (a) => {
      const b = {};
      Mf(Vw, (c, d) => {
        d in a && (b[d] = a[d]);
      });
      return b;
    };
  const Zw = (a, b, c) => {
    var d = new Wj();
    gc(c, 3, d);
    var e = Sj(c) && y(Sj(c), 13) ? y(Sj(c), 13) : 1;
    z(d, 1, Date.now() + 864e5 * e);
    d = c.constructor;
    e = Rb(c.A, Tb);
    d = Vb(d, e);
    mc(d, c);
    if (Sj(c)) {
      e = new Tj();
      var f = A(Sj(c), 23);
      e = z(e, 23, f);
      f = bc(Sj(c), 12, !1);
      e = z(e, 12, f);
      c = bc(Sj(c), 15, !1);
      c = z(e, 15, c);
      gc(d, 15, c);
    }
    c = G(d, Dj, 1);
    for (e = 0; e < c.length; e++) z(c[e], 11, Wb);
    gc(d, 22, void 0);
    if (X(Dk)) Yw(a);
    else
      try {
        (b || a.localStorage).setItem("google_ama_config", kc(d));
      } catch (g) {
        Ww(a, {
          lserr: 1,
        });
      }
  };
  var Yw = (a) => {
    try {
      try {
        a.localStorage.removeItem("google_ama_config");
      } catch (b) {
        Ww(a, {
          lserr: 1,
        });
      }
    } catch (b) {
      Ww(a, {
        lserr: 1,
      });
    }
  };

  function aw(a, { win: b, webPropertyCode: c, Wd: d, yd: e }) {
    Aq(8, b, a.j)
      .then((f) =>
        f.runGallerify({
          win: b,
          webPropertyCode: c,
          serializedGallerifyConfig: kc(d),
          serializedArticleStructures: e.map((g) => kc(g)),
        })
      )
      .catch(Ai(927));
  }
  var $w = class {
    constructor(a) {
      this.j = a;
    }
  };
  var ax = (a, b, c, d, e, f, g = null, h) => {
    try {
      var l = a.localStorage;
    } catch (r) {
      l = null;
    }
    if (l) {
      if (X(Dk)) var k = null;
      else
        try {
          k = l.getItem("google_ama_config");
        } catch (r) {
          k = null;
        }
      try {
        var m = k ? lc(Vj, k) : null;
      } catch (r) {
        m = null;
      }
      k = m;
    } else k = null;
    a: {
      if (d)
        try {
          var n = lc(Vj, d);
          break a;
        } catch (r) {
          Ww(a, {
            cfg: 1,
            inv: 1,
          });
        }
      n = null;
    }
    if ((d = n)) {
      X(Lk) ? e && Zw(a, e, d) : Zw(a, null, d);
      e = Jv(a, G(d, Zj, 7));
      a: {
        if (e && ((n = y(e, 3)), (k = D(d, mj, 9)), n && k)) {
          b: {
            k = G(k, kj, 1);
            for (q of k)
              if (y(q, 1) == n) {
                var q = D(q, jj, 2) || null;
                break b;
              }
            q = null;
          }
          if (q) break a;
        }
        q = D(d, jj, 8) || new jj();
      }
      q = {
        re: q,
      };
      e && (q.W = e);
      e && Hv(e, 3) && (q.Ua = [1]);
      if (7 == c.google_pgb_reactive && ((e = q.W), !e || !A(e, 8))) return !1;
      Ov(a, 2) &&
        (Ui(5, [d.toJSON()]),
        (e = Xw(c)),
        (f = new $w(f)),
        (c = q.W),
        (e.google_package = (c && y(c, 4)) || ""),
        Wv(a, b, d, q, f, new ln(["google-auto-placed"], e), g, {
          url: a.location.href,
          eb: h,
        }));
      return !0;
    }
    k &&
      (Ww(a, {
        cfg: 1,
        cl: 1,
      }),
      Yw(a));
    return !1;
  };
  const bx = [255, 255, 255];

  function cx(a) {
    function b(d) {
      return [
        Number(d[1]),
        Number(d[2]),
        Number(d[3]),
        4 < d.length ? Number(d[4]) : 1,
      ];
    }
    var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
    if (
      c ||
      (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))
    )
      return b(c);
    if ("transparent" === a) return [0, 0, 0, 0];
    throw Error(`Invalid color: ${a}`);
  }

  function dx(a) {
    var b = getComputedStyle(a);
    if ("none" !== b.backgroundImage) return null;
    b = cx(b.backgroundColor);
    var c = ex(b);
    if (c) return c;
    a = (a = a.parentElement) ? dx(a) : bx;
    if (!a) return null;
    c = b[3];
    return [
      Math.round(c * b[0] + (1 - c) * a[0]),
      Math.round(c * b[1] + (1 - c) * a[1]),
      Math.round(c * b[2] + (1 - c) * a[2]),
    ];
  }

  function ex(a) {
    return 1 === a[3] ? [a[0], a[1], a[2]] : null;
  }
  var fx = class {
    constructor(a, b, c, d, e = !1) {
      this.C = a;
      this.j = b;
      this.B = c;
      this.A = d;
      this.l = e;
    }
  };
  var gx = (function (a, ...b) {
    const c = [a[0]];
    for (let d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
    return new Wd(c.join(""));
  })`https://support.google.com/adsense/answer/11188578`;
  const hx = /[\s!'",:;\\(\\)\\?\\.]/,
    ix = "\u00bf\u00a1\u037e\u061f\u3002\uff0c\u00b7\u2019".split(""),
    jx = ["block", "inline", "inline-block", "list-item", "table-cell"],
    kx = ["ja", "zh_CN", "zh_TW"];
  let lx = null;
  class mx {
    constructor() {
      this.l = null;
      this.j = Infinity;
    }
  }

  function nx(a, b, c, d, e, f) {
    var g;
    if (a.performance.now() >= c.A) return !1;
    for (let F = 0; F < b.childNodes.length; F++) {
      var h = b.childNodes[F];
      if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent) {
        var l = b;
        a: {
          var k = a;
          var m = c,
            n = l,
            q = h.textContent,
            r = e,
            t = f;
          const I = m.j;
          var x = [];
          let E = 0;
          for (;;) {
            var H = q.length;
            let T = null;
            var B = "";
            b: for (const sa of G(I, ox, 2))
              for (const O of G(sa, px, 2)) {
                const ha = J(O, 1);
                for (var C = E; C < q.length; ) {
                  C = q.indexOf(ha, C);
                  if (-1 === C) break;
                  if (C > H || (C === H && null !== T && ha.length < T.length))
                    break;
                  if (!qx(q.charAt(C - 1)) || !qx(q.charAt(C + ha.length)))
                    break;
                  if (r.j + rx(q.substr(E, C - E)) >= Al(zk)) {
                    const Ma = k.getComputedStyle(n),
                      hb = Ma.fontSize.match(/\d+/);
                    if (!(hb && 12 <= Number(hb[0]) && db(jx, Ma.display)))
                      break b;
                    H = C;
                    T = ha;
                    B = J(sa, 1);
                    break;
                  }
                  C += 1;
                }
              }
            if (null === T) {
              if (0 === E) {
                r.j += rx(q);
                k = null;
                break a;
              }
              E < q.length &&
                ((m = q.substr(E)),
                x.push(k.document.createTextNode(m)),
                (r.j += rx(m)));
              k = x;
              break a;
            }
            H > E && x.push(k.document.createTextNode(q.substr(E, H - E)));
            x.push(sx(k, m, B, T));
            r.j = 0;
            E = H + T.length;
            H = t;
            H.j++;
            H.l.add(B);
          }
        }
        if (k) {
          if (!X(Ak)) {
            for (const I of k) b.insertBefore(I, h), tx(I);
            b.removeChild(h);
            F += k.length - 1;
          }
          if (null !== (g = e.l) && void 0 !== g) g;
          else {
            a: {
              h = a;
              for (k = l; k; ) {
                b: switch (k.tagName) {
                  case "DIV":
                  case "DL":
                  case "P":
                  case "UL":
                  case "OL":
                  case "TABLE":
                    l =
                      !!k.parentElement &&
                      db(jx, h.getComputedStyle(k.parentElement).display);
                    break b;
                  default:
                    l = !1;
                }
                if (l) {
                  h = k;
                  break a;
                }
                k = k.parentElement;
              }
              h = h.document.body.childNodes[0];
            }
            e.l = h;
          }
        }
      } else {
        a: if (
          ((x = r = k = void 0),
          (l = h),
          l.nodeType !== Node.ELEMENT_NODE ||
            (null === (x = l.classList) || void 0 === x
              ? 0
              : x.contains("google-adfil-skip")))
        )
          l = !1;
        else
          switch (
            null ===
              (k =
                null === (r = l.tagName) || void 0 === r
                  ? void 0
                  : r.toUpperCase) || void 0 === k
              ? void 0
              : k.call(r)
          ) {
            case "A":
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "H1":
            case "H2":
            case "H3":
            case "H4":
            case "H5":
            case "H6":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
              l = !1;
              break a;
            default:
              (q = n = m = x = r = k = void 0),
                (t = l),
                (l = !(
                  (null ===
                    (m =
                      null === (n = (q = t.className).toUpperCase) ||
                      void 0 === n
                        ? void 0
                        : n.call(q)) || void 0 === m
                    ? 0
                    : m.includes("CRUMB")) ||
                  (null ===
                    (k =
                      null === (r = (x = t.id).toUpperCase) || void 0 === r
                        ? void 0
                        : r.call(x)) || void 0 === k
                    ? 0
                    : k.includes("CRUMB")) ||
                  t.innerText.includes("\u00bb")
                ));
          }
        if (l && !nx(a, h, c, d, e, f)) return !1;
      }
    }
    return !0;
  }

  function tx(a) {
    if (a.nodeType === Node.ELEMENT_NODE) {
      if ("A" === a.tagName) {
        var b = ex(cx(getComputedStyle(a.parentElement).color)),
          c = ex(cx(getComputedStyle(a).color));
        var d = dx(a);
        if (
          (d =
            b && c && d ? (Uw(c, d) < Math.min(Uw(b, d), 4.5) ? b : null) : b)
        ) {
          b = d[0];
          c = d[1];
          d = d[2];
          b = Number(b);
          c = Number(c);
          d = Number(d);
          if (b != (b & 255) || c != (c & 255) || d != (d & 255))
            throw Error(
              '"(' + b + "," + c + "," + d + '") is not a valid RGB color'
            );
          c = (b << 16) | (c << 8) | d;
          b =
            16 > b
              ? "#" + (16777216 | c).toString(16).substr(1)
              : "#" + c.toString(16);
          L(a, {
            color: b,
          });
        }
      }
      for (b = 0; b < a.childElementCount; b++) tx(a.children[b]);
    }
  }

  function qx(a) {
    return "" === a || !!a.match(hx) || db(ix, a);
  }

  function sx(a, b, c, d) {
    const e = b.j,
      f = a.document.createElement("SPAN");
    ux(f);
    f.appendChild(a.document.createTextNode(d));
    const g = a.document.createElement("A");
    vx(g);
    L(g, {
      "text-decoration": "none",
    });
    ae(g, Jg(Ig) || Xd);
    g.className = "google-adfil";
    g.appendChild(wx(a));
    g.appendChild(a.document.createTextNode("\u00a0"));
    g.appendChild(f);
    const h = a.performance.now();
    g.addEventListener("click", (l) => {
      var k = a.performance.now();
      k = {
        wp: b.C,
        c: b.B,
        e: Al(xk),
        m: d,
        q: c,
        v: Math.round(k - h),
      };
      S("adfil-clk", k, 1);
      lx ||
        ((k = a.innerHeight),
        (lx = new Er(a, Math.round(0.5 * k), k - 40)).init());
      k = document.createElement("DIV");
      var m = lx;
      const n = document.createElement("DIV");
      n.className = "google-adfil-dc";
      const q = wx(a);
      L(q, {
        color: "#1967D2",
      });
      const r = a.document.createElement("SPAN");
      L(r, {
        color: "#80868B",
      });
      r.appendChild(a.document.createTextNode(" Search results for "));
      const t = a.document.createElement("DIV");
      L(t, {
        padding: "0 16px 4px",
        "border-bottom": "1px solid #eee",
      });
      t.appendChild(q);
      t.appendChild(r);
      t.appendChild(a.document.createTextNode(c));
      n.appendChild(t);
      for (n.appendChild(k); m.l.firstChild; ) m.l.removeChild(m.l.firstChild);
      m.l.appendChild(n);
      Dr(lx, lx.D - lx.H);
      m = {
        pubId: "vert-pla-adfiliates-srp",
        styleId: "1138882718",
        query: c,
        hl: J(e, 7),
        personalizedAds: "false",
        fexp: Al(xk),
      };
      b.l && (m.adtest = "on");
      k = {
        container: k,
        linkTarget: "_blank",
        number: 4,
        width: Math.round(0.8 * a.document.body.offsetWidth - 6),
      };
      (a._googCsa = a._googCsa || xx(a))("plas", m, k);
      l.preventDefault();
      return !1;
    });
    return g;
  }

  function xx(a) {
    return (b, c, d) => {
      const e = a._googCsa;
      (e.q = e.q || []).push([b, c, d]);
      e.t = Number(new Date());
    };
  }

  function ux(a) {
    vx(a);
    L(a, {
      "text-decoration": "underline",
    });
    L(a, {
      "text-decoration-style": "dotted",
    });
    L(a, {
      "-webkit-text-decoration-line": "underline",
      "-webkit-text-decoration-style": "dotted",
    });
  }

  function wx(a) {
    const b = a.document.createElement("SPAN");
    b.appendChild(a.document.createTextNode("shoppingmode"));
    yx(b);
    L(b, {
      bottom: "-1px",
      "font-family": '"Google Material Icons"',
      "font-size": "90%",
      position: "relative",
    });
    return b;
  }

  function yx(a) {
    vx(a);
    L(a, {
      "font-style": "normal",
      "font-weight": "normal",
      "text-decoration": "none",
    });
  }

  function vx(a) {
    L(a, {
      border: "0",
      "box-shadow": "none",
      display: "inline",
      float: "none",
      margin: "0",
      outline: "0",
      padding: "0",
    });
  }

  function rx(a) {
    a = a.trim();
    return "" === a ? 0 : a.split(/\s+/).length;
  }
  var zx = class {
    constructor() {
      this.j = 0;
      this.l = new Set();
      this.A = 0;
      this.B = this.C = null;
    }
  };

  function Ax(a) {
    return (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "";
  }

  function Bx(a) {
    return new Set(a.map(Ax).filter((b) => b.length));
  }
  var Dx = class extends w {
      constructor(a) {
        super(a, -1, Cx);
      }
    },
    px = class extends w {
      constructor(a) {
        super(a);
      }
    },
    ox = class extends w {
      constructor(a) {
        super(a, -1, Ex);
      }
    },
    Cx = [2],
    Ex = [2];

  function Fx(a, b, c, d) {
    const e = Gx(a) || Hx(c);
    e &&
      xi(
        898,
        () => {
          a: {
            var f;
            try {
              var g = a.document.body;
            } catch (H) {
              break a;
            }
            if (
              a.performance &&
              g &&
              null !== (f = g.classList) &&
              void 0 !== f &&
              f.contains &&
              !g.hasAttribute("data-google-affiliate-annotated")
            ) {
              g.setAttribute("data-google-affiliate-annotated", "1");
              f = a.performance.now();
              var h = Al(Bk),
                l = h ? f + h : Infinity;
              if (!X(Ak)) {
                h = a.document;
                var k = h.createElement("LINK"),
                  m = N`https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                if (m instanceof Lc || m instanceof Md)
                  (m = m instanceof Md ? Pd(m).toString() : Oc(m).toString()),
                    (k.href = m);
                else {
                  if (-1 === ee.indexOf("stylesheet"))
                    throw Error(
                      'TrustedResourceUrl href attribute required with rel="stylesheet"'
                    );
                  k.href = Zd(m);
                }
                k.rel = "stylesheet";
                h.head.appendChild(k);
              }
              b.hasOwnProperty("adfcb") ||
                (b.adfcb = Qf() ? null : Math.floor(20 * Lf()));
              k = b.adfcb;
              if (null != k) {
                h = new zx();
                l = new fx(d, e, k, l, "on" === b.google_adtest);
                g = rx(g.innerText);
                h.A = g;
                m = Ax(J(l.j, 7));
                var n = Ax(a.document.documentElement.lang);
                if ("" !== n) var q = new Set([n]);
                else {
                  n = a.location;
                  var r = n.host.match(/^[a-z]{2}\./i);
                  r = r ? [r[0]] : [];
                  for (t of n.pathname.split("/")) 2 === t.length && r.push(t);
                  var t = Bx(r);
                  t.size ||
                    ((n = a.navigator),
                    (t = Bx(
                      (
                        null === (q = n.languages) || void 0 === q
                          ? 0
                          : q.length
                      )
                        ? n.languages
                        : [n.language]
                    )));
                  q = t;
                }
                h.C = m;
                h.B = new Set(q);
                g < Al(yk)
                  ? (q = "sw")
                  : a.document.querySelector(
                      'script[src*="www.google.com/adsense/search/ads.js"]'
                    )
                  ? (q = "si")
                  : q.has(m)
                  ? ((t = new mx()),
                    (q = nx(
                      a,
                      a.document.body,
                      l,
                      db(kx, J(l.j, 7)) ? 1 : 0,
                      t,
                      h
                    )),
                    t.l &&
                      !X(Ak) &&
                      ((l = l.j),
                      (g = a.document.createElement("A")),
                      g.appendChild(a.document.createTextNode(J(l, 6))),
                      ae(g, gx),
                      g.setAttribute("target", "_blank"),
                      ux(g),
                      L(g, {
                        padding: "0 8px",
                      }),
                      (m = a.document.createElement("P")),
                      (m.className = "google-adfil-skip"),
                      m.appendChild(a.document.createTextNode(J(l, 3))),
                      m.appendChild(g),
                      yx(m),
                      L(m, {
                        border: "0 solid #bdc1c6",
                        "border-width": "1px 0",
                        display: "block",
                        margin: "6pt 0",
                        padding: "21px",
                        "text-align": "center",
                        width: "auto",
                      }),
                      (l = m),
                      (t = t.l),
                      t.parentNode && t.parentNode.insertBefore(l, t),
                      tx(l)),
                    (q = q ? "a" : "p"))
                  : (q = "sl");
                f = a.performance.now() - f;
                !X(Ak) &&
                  0 < h.j &&
                  ((l = a.document),
                  (t = l.createElement("SCRIPT")),
                  t.setAttribute("async", "async"),
                  he(t, N`https://www.google.com/adsense/search/ads.js`),
                  l.body.appendChild(t));
                var x;
                k = {
                  wp: d,
                  c: k,
                  e: Al(xk),
                  ld: Array.from(null !== (x = h.B) && void 0 !== x ? x : [])
                    .sort()
                    .join(","),
                  lx: h.C || "",
                  n: h.j,
                  o: q,
                  p: G(e, ox, 2).length,
                  t: h.l.size,
                  w: h.A,
                  x: Math.round(f),
                };
                S("adfil-imp", k, 1);
              }
            }
          }
        },
        (f) => {
          f.e = `${Al(xk)}`;
        }
      );
  }

  function Gx(a) {
    var b, c;
    try {
      const d =
        null ===
          (c = null === (b = a.location) || void 0 === b ? void 0 : b.hash) ||
        void 0 === c
          ? void 0
          : c.match(/\bgoog_cpmi=([^&]*)/);
      if (!d) return null;
      const e = decodeURIComponent(d[1]);
      return new Dx(JSON.parse(e));
    } catch (d) {
      return null;
    }
  }

  function Hx(a) {
    return X(Nk) ? D(a, Dx, 11) : null;
  }
  var Jx = class extends w {
      constructor(a) {
        super(a, -1, Ix);
      }
    },
    Ix = [19];
  var Kx = class {
    constructor(a) {
      this.K = a.K;
      this.pubWin = a.pubWin;
      this.F = a.F;
      this.X = a.X;
      this.$ = a.$;
      this.Ha = a.Ha;
      this.Y = a.Y;
      this.ba = a.ba;
      this.B = -1;
      this.j = 0;
      this.A = this.H = null;
      this.G = this.D = 0;
      this.l = [];
      this.Ta = this.C = "";
    }
  };
  var Mx = (a) => {
      const b = a.F;
      null == b.google_ad_output && (b.google_ad_output = "html");
      if (null != b.google_ad_client) {
        var c;
        (c = String(b.google_ad_client))
          ? ((c = c.toLowerCase()),
            "ca-" != c.substring(0, 3) && (c = "ca-" + c))
          : (c = "");
        b.google_ad_client = c;
      }
      null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
      if (null == b.google_flash_version) {
        c = window;
        try {
          var d = mh(c);
        } catch (e) {
          d = "0";
        }
        b.google_flash_version = d;
      }
      b.google_webgl_support = !!Oe.WebGLRenderingContext;
      b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
      b.google_country = b.google_country || b.google_gl || "";
      d = new Date().getTime();
      Array.isArray(b.google_color_bg) &&
        (b.google_color_bg = Lx(a, b.google_color_bg, d));
      Array.isArray(b.google_color_text) &&
        (b.google_color_text = Lx(a, b.google_color_text, d));
      Array.isArray(b.google_color_link) &&
        (b.google_color_link = Lx(a, b.google_color_link, d));
      Array.isArray(b.google_color_url) &&
        (b.google_color_url = Lx(a, b.google_color_url, d));
      Array.isArray(b.google_color_border) &&
        (b.google_color_border = Lx(a, b.google_color_border, d));
      Array.isArray(b.google_color_line) &&
        (b.google_color_line = Lx(a, b.google_color_line, d));
    },
    Lx = (a, b, c) => {
      a.j |= 2;
      return b[c % b.length];
    };
  var Nx = (a, b, c, d) => {
    c = c || a.google_ad_width;
    d = d || a.google_ad_height;
    if (a && a.top == a) return !1;
    const e = b.documentElement;
    if (c && d) {
      let f = 1,
        g = 1;
      a.innerHeight
        ? ((f = a.innerWidth), (g = a.innerHeight))
        : e && e.clientHeight
        ? ((f = e.clientWidth), (g = e.clientHeight))
        : b.body && ((f = b.body.clientWidth), (g = b.body.clientHeight));
      if (g > 2 * d || f > 2 * c) return !1;
    }
    return !0;
  };

  function Ox(a, b) {
    Mf(a, (c, d) => {
      b[d] = c;
    });
  }
  var Px = (a) => {
    let b = a.location.href;
    if (a == a.top)
      return {
        url: b,
        hc: !0,
      };
    let c = !1;
    const d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent == a.top && (c = !0));
    (a = a.location.ancestorOrigins) &&
      (a = a[a.length - 1]) &&
      -1 == b.indexOf(a) &&
      ((c = !1), (b = a));
    return {
      url: b,
      hc: c,
    };
  };

  function Qx() {
    var a = R();
    if (a == a.top) return 0;
    for (; a && a != a.top && Cf(a); a = a.parent) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }
  var Rx = (a, b) => {
    var c = wi,
      d;
    var e;
    d = (e =
      (e = yg()) &&
      (d = e.initialLayoutRect) &&
      "number" === typeof d.top &&
      "number" === typeof d.left &&
      "number" === typeof d.width &&
      "number" === typeof d.height
        ? new ug(d.left, d.top, d.width, d.height)
        : null)
      ? new Ye(e.left, e.top)
      : (d = zg()) && la(d.rootBounds)
      ? new Ye(
          d.rootBounds.left + d.boundingClientRect.left,
          d.rootBounds.top + d.boundingClientRect.top
        )
      : null;
    if (d) return d;
    try {
      var f = new Ye(0, 0),
        g = of(jf(b));
      if (mb(g, "parent")) {
        do {
          if (g == a) var h = Tg(b);
          else {
            var l = Sg(b);
            h = new Ye(l.left, l.top);
          }
          d = h;
          f.x += d.x;
          f.y += d.y;
        } while (
          g &&
          g != a &&
          g != g.parent &&
          (b = g.frameElement) &&
          (g = g.parent)
        );
      }
      return f;
    } catch (k) {
      return c.ua(888, k), new Ye(-12245933, -12245933);
    }
  };
  var Sx = {
      Ef: "google_ads_preview",
      jg: "google_mc_lab",
      zg: "google_anchor_debug",
      yg: "google_bottom_anchor_debug",
      INTERSTITIAL: "google_ia_debug",
      Ug: "google_scr_debug",
      Wg: "google_ia_debug_allow_onclick",
      sh: "googleads",
      md: "google_pedestal_debug",
      Jh: "google_responsive_slot_preview",
      Ih: "google_responsive_dummy_ad",
    },
    Tx = {
      google_bottom_anchor_debug: 1,
      google_anchor_debug: 2,
      google_ia_debug: 8,
      google_scr_debug: 9,
      googleads: 2,
      google_pedestal_debug: 30,
    };
  var Vx = (a, b) => {
      if (!a) return !1;
      a = a.hash;
      if (!a || !a.indexOf) return !1;
      if (-1 != a.indexOf(b)) return !0;
      b = Ux(b);
      return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
    },
    Ux = (a) => {
      let b = "";
      Mf(a.split("_"), (c) => {
        b += c.substr(0, 2);
      });
      return b;
    },
    Wx = () => {
      var a = u.location;
      let b = !1;
      Mf(Sx, (c) => {
        Vx(a, c) && (b = !0);
      });
      return b;
    },
    Xx = (a, b) => {
      switch (a) {
        case 1:
          return Vx(b, "google_ia_debug");
        case 2:
          return Vx(b, "google_bottom_anchor_debug");
        case 3:
          return Vx(b, "google_anchor_debug") || Vx(b, "googleads");
        case 4:
          return Vx(b, "google_scr_debug");
      }
      return !1;
    };

  function Yx(a, b) {
    b &&
      !a.j &&
      (a.j = b.split(":").find((c) => 0 === c.indexOf("ID=")) || null);
  }
  var Zx = class {
      constructor() {
        this.j = null;
        this.l = {
          [ai]: {},
          [bi]: {},
          [ci]: {},
        };
        const a = (b) => (this.j ? Of(`${b} + ${this.j}`) % 1e3 : void 0);
        this.l[bi] = {
          [9]: (...b) => a(b[0]),
        };
      }
    },
    $x;
  let ay = void 0;

  function by() {
    Xh(ay, Wh);
    return ay;
  }

  function cy(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) return {};
      const c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : yc(
            c,
            (d, e) =>
              Object.prototype.hasOwnProperty.call(c, e) &&
              "string" === typeof e &&
              Array.isArray(d)
          );
    } catch (b) {
      return {};
    }
  }

  function dy(a) {
    X(mk) &&
      S(
        "abg_adsensesettings_lserr",
        {
          s: a,
          g: X(nk),
          c: by(),
          r: 0.01,
        },
        0.01
      );
  }
  var ey = (a = u) => a.ggeac || (a.ggeac = {});
  class fy {
    constructor() {
      this.j = () => {};
    }
  }
  var hy = (a = ey()) => {
      ui(ji(vi), a);
      gy(a);
      ji(fy).j = ti(si, a);
      ji(zl).A();
    },
    gy = (a) => {
      const b = ji(zl);
      b.B = (c, d) => ti(oi, a, () => !1)(c, d, 1);
      b.C = (c, d) => ti(pi, a, () => 0)(c, d, 1);
      b.j = (c, d) => ti(qi, a, () => "")(c, d, 1);
      b.l = (c, d) => {
        ti(ri, a, () => [])(c, d, 1);
      };
      b.A = () => {
        ti(li, a)(1);
      };
    };
  var iy = (a) => {
    const b = ji(vi).l();
    a = Nv(a);
    return b.concat(a).join(",");
  };

  function jy(a, b, c) {
    return c ? Bw(b, c, a.j) : null;
  }

  function ky(a, b, c, d) {
    if (d) {
      var e = {
        Oc: y(c, 2) - Date.now() / 1e3,
        path: y(c, 3),
        domain: y(c, 4),
        De: !1,
      };
      a = a.j;
      A(d, 5) && Aw(a) && new yw(a.document).set(b, y(c, 1), e);
    }
  }

  function ly(a, b, c) {
    if (c && Bw(b, c, a.j))
      for (const e of pg(a.j.location.hostname)) {
        var d = a.j;
        A(c, 5) && Aw(d) && new yw(d.document).remove(b, "/", e);
      }
  }
  var my = class {
    constructor(a) {
      this.j = a;
      this.l = 0;
    }
  };

  function ny(a, b, c) {
    return yi(629, (d) => {
      delete a._gfp_s_;
      if (!d) throw Error("Invalid JSONP response");
      d = d._cookies_;
      if (!d) return Promise.resolve();
      if (0 === d.length) throw Error("Invalid JSONP response");
      for (const f of d) {
        var e = f._domain_;
        const g = f._value_,
          h = f._expires_,
          l = f._path_;
        d = f._version_ || 1;
        if (
          "string" !== typeof e ||
          "string" !== typeof g ||
          "number" !== typeof h ||
          "string" !== typeof l ||
          "number" !== typeof d ||
          !g
        )
          throw Error("Invalid JSONP response");
        e = Le(Ke(Je(Ie(new Me(), g), h), l), e);
        switch (d) {
          case 1:
            ky(c, "__gads", e, b);
            break;
          case 2:
            X(Yk) && "1" !== jy(c, "__gpi_opt_out", b) && ky(c, "__gpi", e, b);
        }
      }
      return Promise.resolve();
    });
  }

  function oy(a, b, c) {
    let d = void 0;
    if (0 === a.l) {
      if (jy(a, "__gads", b)) var e = !0;
      else if (
        ((e = a.j),
        A(b, 5) &&
          Aw(e) &&
          new yw(e.document).set("GoogleAdServingTest", "Good", void 0),
        (e = "Good" === Bw("GoogleAdServingTest", b, a.j)))
      ) {
        var f = a.j;
        A(b, 5) &&
          Aw(f) &&
          new yw(f.document).remove("GoogleAdServingTest", void 0, void 0);
      }
      a.l = e ? 2 : 1;
    }
    2 === a.l && (d = ny(c, b, a));
    c._gfp_p_ = !0;
    return d;
  }

  function py(a, b, c, d) {
    d = {
      domain: c.location.hostname,
      callback: "_gfp_s_",
      client: d,
    };
    var e = jy(b, "__gads", a);
    e && (d.cookie = e);
    X(Yk) &&
      ((e = jy(b, "__gpi", a)) && !e.includes("&") && (d.gpi_cookie = e),
      (d.gpid_exp = "1"));
    const f = Mc(
        Pc(tc(vc("https://partner.googleadservices.com/gampad/cookie.js"))),
        d
      ),
      g = oy(b, a, c);
    g
      ? new Promise((h) => {
          c._gfp_s_ = (l) => {
            g(l).then(h);
          };
          Gf(c.document, f);
        })
      : Promise.resolve();
  }
  var qy = (a, b, c) => {
    "_gfp_p_" in b || ((b._gfp_p_ = !1), "_gfp_a_" in b || (b._gfp_a_ = !0));
    const d = new my(b);
    c = b.google_ad_client || c;
    var e = b._gfp_a_;
    if ("boolean" !== typeof e)
      throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
    if (e) {
      e = b._gfp_p_;
      if ("boolean" !== typeof e)
        throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
      e ? Promise.resolve() : py(a, d, b, c);
    } else Promise.resolve();
    a = jy(d, "__gads", a) || "";
    $x || ($x = new Zx());
    b = $x;
    Yx(b, a);
    a = b.l;
    ji(fy).j(a);
    ji(vi).j(20);
    ji(vi).j(17);
  };
  var ry = (a, b) => {
    var c = a.innerWidth > El ? 650 : 0,
      d = Bh;
    let e = 0;
    try {
      e |= a != a.top ? 512 : 0;
      const f = Math.min(a.screen.width || 0, a.screen.height || 0);
      e |= f ? (320 > f ? 8192 : 0) : 2048;
      e |= a.navigator && $r(a.navigator.userAgent) ? 1048576 : 0;
      e = c
        ? e | (a.innerHeight >= c ? 0 : 1024)
        : e | (a.innerHeight >= a.innerWidth ? 0 : 8);
      e |= Fl(a, 3e3);
      e |= Gl(a);
    } catch (f) {
      e |= 32;
    }
    switch (b) {
      case 2:
        ds(a, d) && (e |= 16777216);
        break;
      case 1:
        es(a, d) && (e |= 16777216);
    }
    return e;
  };
  var sy = (a) => {
    let b = 0;
    try {
      (b |= a != a.top ? 512 : 0), (b |= Fl(a, 1e4));
    } catch (c) {
      b |= 32;
    }
    return b;
  };
  var ty = (a) => {
    let b = 0;
    try {
      (b |= a != a.top ? 512 : 0), (b |= Fl(a, 1e4));
    } catch (c) {
      b |= 32;
    }
    return b;
  };
  var uy = (a) => {
      let b = 0;
      try {
        (b |= a != a.top ? 512 : 0),
          (b |=
            a.navigator && /Android 2/.test(a.navigator.userAgent)
              ? 1048576
              : 0);
      } catch (c) {
        b |= 32;
      }
      return b;
    },
    vy = (a, b, c) => {
      let d = 0;
      try {
        d |= Fl(a, 2500);
        if (X(fl)) {
          const g = Y(a).clientHeight;
          d |= g ? (320 > g ? -2147483648 : 0) : 1073741824;
        }
        d |= Gl(a);
        var e;
        if ((e = 0 < b)) {
          var f = Sl(c, b);
          e = !(f && 1 > f.length);
        }
        e && (d |= 134217728);
      } catch (g) {
        d |= 32;
      }
      return d;
    };

  function wy(a, b = null) {
    var c;
    if (!X(ml)) return 32;
    let d = a != a.top ? 512 : 0;
    $r(null === (c = a.navigator) || void 0 === c ? void 0 : c.userAgent) &&
      (d |= 1048576);
    const e = a.innerWidth;
    1200 > e && (d |= 65536);
    const f = a.innerHeight;
    650 > f && (d |= -2147483648);
    b &&
      0 === d &&
      (xy({
        K: a,
        cd: 1,
        position: 3 === b ? "left" : "right",
        M: e,
        R: f,
        ta: new Set(),
        minWidth: 120,
        minHeight: 500,
      }) ||
        (d |= 16));
    return d;
  }

  function yy(a) {
    if (0 !== wy(a)) return "";
    const b = [],
      c = a.innerWidth,
      d = a.innerHeight;
    for (const e of ["left", "right"]) {
      const f = xy({
        K: a,
        cd: 1,
        position: e,
        M: c,
        R: d,
        ta: new Set(),
        minWidth: 120,
        minHeight: 500,
      });
      f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`);
    }
    return b.join("|");
  }

  function zy(a, b) {
    return null !== xf(a, (c) => c.nodeType === Node.ELEMENT_NODE && b.has(c));
  }

  function Ay(a, b) {
    return (
      null !==
      xf(
        a,
        (c) =>
          c.nodeType === Node.ELEMENT_NODE &&
          "fixed" === b.getComputedStyle(c, null).position
      )
    );
  }

  function By(a) {
    const b = [];
    for (const c of a.document.querySelectorAll("*")) {
      const d = a.getComputedStyle(c, null);
      "fixed" === d.position &&
        "none" !== d.display &&
        "hidden" !== d.visibility &&
        b.push(c);
    }
    return b;
  }

  function Cy(a) {
    return Math.round(10 * Math.round(a / 10));
  }

  function Dy(a) {
    return `${a.position}-${Cy(a.M)}x${Cy(a.R)}-${Cy(a.scrollY + a.Ka)}Y`;
  }

  function Ey(a) {
    return `f-${Dy({
      position: a.position,
      Ka: a.Ka,
      scrollY: 0,
      M: a.M,
      R: a.R,
    })}`;
  }

  function Fy(a, b) {
    a = Math.min(
      null !== a && void 0 !== a ? a : Infinity,
      null !== b && void 0 !== b ? b : Infinity
    );
    return Infinity !== a ? a : 0;
  }

  function Gy(a, b, c) {
    const d = Bl(c.K).sideRailProcessedFixedElements;
    if (!d.has(a)) {
      var e = a.getBoundingClientRect();
      if (e) {
        var f = Math.max(e.top, 0),
          g = Math.min(e.bottom, c.R),
          h = Math.max(e.left, 0);
        e = Math.min(e.right, c.M);
        for (var l = 0.3 * c.M; f < g; f += 10) {
          if (0 < e && h < l) {
            var k = Ey({
              position: "left",
              Ka: f,
              M: c.M,
              R: c.R,
            });
            b.set(k, Fy(b.get(k), h));
          }
          if (h < c.M && e > c.M - l) {
            k = Ey({
              position: "right",
              Ka: f,
              M: c.M,
              R: c.R,
            });
            const m = c.M - e;
            b.set(k, Fy(b.get(k), m));
          }
        }
        d.add(a);
      }
    }
  }

  function xy(a) {
    var b = Bl(a.K).sideRailAvailableSpace,
      c = {
        K: a.K,
        M: a.M,
        R: a.R,
        ta: a.ta,
      },
      d = `f-${Cy(c.M)}x${Cy(c.R)}`;
    if (!b.has(d)) {
      b.set(d, 0);
      d = new Set([
        ...Array.from(c.K.document.querySelectorAll("[data-anchor-status]")),
        ...c.ta,
      ]);
      for (var e of By(c.K)) zy(e, d) || Gy(e, b, c);
    }
    c = [];
    d = 0.9 * a.R;
    var f = Ml(a.K),
      g = (e = (a.R - d) / 2),
      h = d / 11;
    for (var l = 0; 12 > l; l++) {
      var k = c,
        m = k.push;
      a: {
        var n = g;
        var q = a.position,
          r = b,
          t = {
            K: a.K,
            M: a.M,
            R: a.R,
            ta: a.ta,
          };
        const H = Ey({
            position: q,
            Ka: n,
            M: t.M,
            R: t.R,
          }),
          B = Dy({
            position: q,
            Ka: n,
            scrollY: f,
            M: t.M,
            R: t.R,
          });
        if (r.has(B)) {
          n = Fy(r.get(H), r.get(B));
          break a;
        }
        const C = "left" === q ? 20 : t.M - 20;
        let F = C;
        q = ((0.3 * t.M) / 7) * ("left" === q ? 1 : -1);
        for (let I = 0; 8 > I; I++) {
          const E = is(t.K.document, Math.round(F), Math.round(n));
          var x = zy(E, t.ta);
          const T = Ay(E, t.K);
          if (!x && T) {
            Gy(E, r, t);
            r.delete(B);
            break;
          }
          x ||
            ((x = E.offsetHeight >= 0.25 * t.R),
            (x = E.offsetWidth >= 0.9 * t.M && x));
          if (x) r.set(B, Math.round(Math.abs(F - C) + 20));
          else if (F !== C) (F -= q), (q /= 2);
          else {
            r.set(B, 0);
            break;
          }
          F += q;
        }
        n = Fy(r.get(H), r.get(B));
      }
      m.call(k, n);
      g += h;
    }
    b = a.cd;
    f = a.position;
    d = Math.round(d / 12);
    e = Math.round(e);
    g = a.minWidth;
    a = a.minHeight;
    m = [];
    h = Array(c.length).fill(0);
    for (k = 0; k < c.length; k++) {
      for (; 0 !== m.length && c[m[m.length - 1]] >= c[k]; ) m.pop();
      h[k] = 0 === m.length ? 0 : m[m.length - 1] + 1;
      m.push(k);
    }
    m = [];
    l = c.length - 1;
    k = Array(c.length).fill(0);
    for (n = l; 0 <= n; n--) {
      for (; 0 !== m.length && c[m[m.length - 1]] >= c[n]; ) m.pop();
      k[n] = 0 === m.length ? l : m[m.length - 1] - 1;
      m.push(n);
    }
    m = null;
    for (l = 0; l < c.length; l++)
      if (
        ((n = {
          position: f,
          width: Math.round(c[l]),
          height: Math.round((k[l] - h[l] + 1) * d),
          si: e + h[l] * d,
        }),
        (r = n.width >= g && n.height >= a),
        0 === b && r)
      ) {
        m = n;
        break;
      } else
        1 === b &&
          r &&
          (!m || n.width * n.height > m.width * m.height) &&
          (m = n);
    return m;
  }
  const Hy = {
    [27]: 512,
    [26]: 128,
  };
  var Iy = (a, b, c, d) => {
      switch (c) {
        case 1:
        case 2:
          return 0 === ry(a, c);
        case 3:
        case 4:
          return 0 === wy(a, c);
        case 8:
          return (
            (b =
              "on" === b.google_adtest || Vx(a.location, "google_ia_debug")
                ? -1
                : 3600),
            0 == (uy(a) | vy(a, b, d))
          );
        case 9:
          return (
            (b = !(
              "on" === b.google_adtest || Vx(a.location, "google_scr_debug")
            )),
            !Tl(a, b, d)
          );
        case 30:
          return 0 == cm(a);
        case 26:
          return 0 == ty(a);
        case 27:
          return 0 === sy(a);
        case 40:
          return !0;
        default:
          return !1;
      }
    },
    Jy = (a, b, c, d) => {
      switch (c) {
        case 0:
        case 40:
        case 10:
        case 11:
          return 0;
        case 1:
        case 2:
          return ry(a, c);
        case 3:
        case 4:
          return wy(a, c);
        case 8:
          return (
            (b =
              "on" === b.google_adtest || Vx(a.location, "google_ia_debug")
                ? -1
                : 3600),
            uy(a) | vy(a, b, d)
          );
        case 9:
          return Tl(
            a,
            !("on" === b.google_adtest || Vx(a.location, "google_scr_debug")),
            d
          );
        case 16:
          return Cn(b, a) ? 0 : 8388608;
        case 30:
          return cm(a);
        case 26:
          return ty(a);
        case 27:
          return sy(a);
        default:
          return 32;
      }
    },
    Ky = (a, b, c) => {
      const d = b.google_reactive_ad_format;
      if (!zc(d)) return !1;
      a = Ff(a);
      if (!a || !Iy(a, b, d, c)) return !1;
      b = Bl(a);
      if (Kl(b, d)) return !1;
      b.adCount[d] || (b.adCount[d] = 0);
      b.adCount[d]++;
      return !0;
    },
    My = (a) => {
      const b = a.google_reactive_ad_format;
      return (
        !a.google_reactive_ads_config &&
        Ly(a) &&
        16 !== b &&
        10 !== b &&
        11 !== b &&
        40 !== b
      );
    },
    Ny = (a) => {
      if (!a.hash) return null;
      let b = null;
      Mf(Sx, (c) => {
        !b && Vx(a, c) && (b = Tx[c]);
      });
      return b;
    },
    Py = (a, b) => {
      const c = Bl(a).tagSpecificState[1] || null;
      null != c &&
        null == c.debugCard &&
        Mf(ut, (d) => {
          !c.debugCardRequested &&
            "number" === typeof d &&
            Xx(d, a.location) &&
            ((c.debugCardRequested = !0),
            Oy(a, b, (e) => {
              c.debugCard = e.createDebugCard(d, a);
            }));
        });
    },
    Ry = (a, b, c) => {
      if (!b) return null;
      const d = Bl(b);
      let e = 0;
      Mf(Ac, (f) => {
        const g = Hy[f];
        g && 0 === Qy(a, b, f, c) && (e |= g);
      });
      d.wasPlaTagProcessed && (e |= 256);
      a.google_reactive_tag_first && (e |= 1024);
      return e ? "" + e : null;
    },
    Sy = (a, b, c) => {
      const d = [];
      Mf(Ac, (e) => {
        const f = Qy(b, a, e, c);
        0 !== f && d.push(e + ":" + f);
      });
      return d.join(",") || null;
    },
    Ty = (a) => {
      const b = [],
        c = {};
      Mf(a, (d, e) => {
        if ((e = gk[e]) && !c[e]) {
          c[e] = !0;
          if (d) d = 1;
          else if (!1 === d) d = 2;
          else return;
          b.push(e + ":" + d);
        }
      });
      return b.join(",");
    },
    Uy = (a) => {
      a = a.overlays;
      if (!a) return "";
      a = a.bottom;
      return "boolean" === typeof a ? (a ? "1" : "0") : "";
    },
    Qy = (a, b, c, d) => {
      if (!b) return 256;
      let e = 0;
      const f = Bl(b),
        g = Kl(f, c);
      if (a.google_reactive_ad_format == c || g) e |= 64;
      let h = !1;
      Mf(f.reactiveTypeDisabledByPublisher, (l, k) => {
        String(c) === String(k) && (h = !0);
      });
      h && Ny(b.location) !== c && (e |= 128);
      return e | Jy(b, a, c, d);
    },
    Vy = (a, b) => {
      if (a) {
        var c = Bl(a),
          d = {};
        Mf(b, (e, f) => {
          (f = gk[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0);
        });
        Mf(Ac, (e) => {
          d[hk[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0);
        });
      }
    },
    Wy = (a, b, c) => {
      b = yi(b, c);
      return Aq(
        1,
        R(),
        Mc(
          $d(a),
          ji(zl).j(tk.j, tk.defaultValue)
            ? {
                bust: ji(zl).j(tk.j, tk.defaultValue),
              }
            : {}
        )
      ).then(b);
    },
    Oy = (a, b, c) => {
      c = yi(212, c);
      Aq(3, a, $d(b)).then(c);
    };
  const Xy = (a) => {
    a.adsbygoogle ||
      ((a.adsbygoogle = []),
      Gf(
        a.document,
        $d(N`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)
      ));
  };
  var Yy = (a, b) => {
      K(a, "load", () => {
        Xy(a);
        a.adsbygoogle.push(b);
      });
    },
    Zy = (a) => {
      a = a.google_reactive_ad_format;
      return zc(a) ? "" + a : null;
    },
    Ly = (a) => !!Zy(a) || null != a.google_pgb_reactive,
    $y = (a) => {
      a = Zy(a);
      return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a;
    };
  var az = (a) => "number" === typeof a.google_reactive_sra_index,
    fz = (a, b, c) => {
      const d = b.K || b.pubWin,
        e = b.F;
      e.google_reactive_plat = Sy(d, e, c);
      var f = Ty(a);
      f && (e.google_reactive_plaf = f);
      (f = Uy(a)) && (e.google_reactive_fba = f);
      (f = yy(d)) && (e.google_plas = f);
      bz(a, e);
      f = Ny(b.pubWin.location);
      cz(a, f, e);
      f
        ? ((e.fra = f), (e.google_pgb_reactive = 6))
        : (e.google_pgb_reactive = 5);
      Ag() || Vl(b.pubWin.top);
      f = Di(
        b.pubWin,
        "rsrai",
        yi(429, (g, h) => dz(b, d, e.google_ad_client, a, g, h, c)),
        yi(430, ua(Pl, b.pubWin, 431, Bh))
      );
      b.l.push(f);
      Bl(d).wasReactiveTagRequestSent = !0;
      ez(b, a, c);
    };
  const ez = (a, b, c) => {
    const d = a.F,
      e = la(b.page_level_pubvars) ? b.page_level_pubvars : {};
    b = Di(
      a.pubWin,
      "apcnf",
      yi(353, (f, g) => {
        var h = a.pubWin,
          l = d.google_ad_client,
          k = $d(a.$.Fc),
          m = $d(a.$.eb);
        return gg(g.origin) ? ax(h, l, e, f.config, c, k, null, m) : !1;
      }),
      yi(353, ua(Pl, a.pubWin, 353, Bh))
    );
    a.l.push(b);
  };
  var dz = (a, b, c, d, e, f, g) => {
      if (!gg(f.origin)) return !1;
      f = e.data;
      if (!Array.isArray(f)) return !1;
      if (!Ov(b, 1)) return !0;
      f && Ui(6, [f]);
      e = e.amaConfig;
      const h = [],
        l = [],
        k = Bl(b);
      let m = null;
      for (let n = 0; n < f.length; n++) {
        if (!f[n]) continue;
        const q = f[n],
          r = q.adFormat;
        k && q.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[r] = !0);
        if (!q.noCreative) {
          q.google_reactive_sra_index = n;
          if (9 === r && e) {
            q.pubVars = Object.assign(q.pubVars || {}, gz(d, q));
            const t = new Ul();
            if (ik(t, q)) {
              m = t;
              continue;
            }
          }
          h.push(q);
          l.push(r);
        }
      }
      h.length &&
        (S(
          "rasra::pm",
          {
            rt: l.join(","),
            c,
          },
          0.1
        ),
        Wy(a.$.Wc, 522, (n) => {
          hz(h, b, c, n, d, g);
        }));
      e && ax(b, c, d, e, g, $d(a.$.Fc), m);
      return !0;
    },
    gz = (a, b) => {
      const c = b.adFormat,
        d = b.adKey;
      delete b.adKey;
      const e = {};
      a = a.page_level_pubvars;
      la(a) && Object.assign(e, a);
      e.google_ad_unit_key = d;
      e.google_reactive_sra_index = b.google_reactive_sra_index;
      30 === c && (e.google_reactive_ad_format = 30);
      e.google_pgb_reactive = e.google_pgb_reactive || 5;
      return (b.pubVars = e);
    },
    hz = (a, b, c, d, e, f) => {
      const g = [];
      for (let h = 0; h < a.length; h++) {
        const l = a[h],
          k = l.adFormat,
          m = l.adKey,
          n = d.configProcessorForAdFormat(k);
        k && n && m
          ? ((l.pubVars = gz(e, l)),
            delete l.google_reactive_sra_index,
            g.push(k),
            xi(466, () => n.verifyAndProcessConfig(b, l, f)))
          : S(
              "rasra::ivc",
              {
                af: k,
                ak: m,
                c,
              },
              0.1
            );
      }
      S(
        "rasra::pr",
        {
          rt: g.join(","),
          c,
        },
        0.1
      );
    },
    bz = (a, b) => {
      const c = [];
      let d = !1;
      Mf(gk, (e, f) => {
        let g;
        if (a.hasOwnProperty(f)) {
          const h = a[f];
          la(h) && h.google_ad_channel && (g = String(h.google_ad_channel));
        }
        f = gk[f] - 1;
        (c[f] && "+" != c[f]) ||
          ((c[f] = g ? g.replace(/,/g, "+") : "+"), (d = d || g));
      });
      d && (b.google_reactive_sra_channels = c.join(","));
    },
    cz = (a, b, c) => {
      const d = a.page_level_pubvars;
      !c.google_adtest &&
        ("on" == a.google_adtest || (d && "on" == d.google_adtest) || b) &&
        (c.google_adtest = "on");
    };
  lb("script");
  var iz = {
    "image-top": 0,
    "image-middle": 1,
    "image-side": 2,
    "text-only": 3,
    "in-article": 4,
  };

  function jz(a, b) {
    if (!Cn(b, a)) return () => {};
    a = kz(b, a);
    if (!a) return () => {};
    const c = xw();
    b = Cc(b);
    const d = {
      mc: a,
      F: b,
      offsetWidth: a.offsetWidth,
    };
    c.push(d);
    return () => eb(c, d);
  }

  function kz(a, b) {
    a = b.document.getElementById(a.google_async_iframe_id);
    if (!a) return null;
    for (a = a.parentElement; a && !Hn.test(a.className); ) a = a.parentElement;
    return a;
  }

  function lz(a, b) {
    for (let g = 0; g < a.childNodes.length; g++) {
      const h = {},
        l = a.childNodes[g];
      var c = l.style,
        d = h,
        e = ["width", "height"];
      for (let k = 0; k < e.length; k++) {
        const m = "google_ad_" + e[k];
        if (!d.hasOwnProperty(m)) {
          var f = Vf(c[e[k]]);
          f = null === f ? null : Math.round(f);
          null != f && (d[m] = f);
        }
      }
      if (
        h.google_ad_width == b.google_ad_width &&
        h.google_ad_height == b.google_ad_height
      )
        return l;
    }
    return null;
  }

  function mz(a, b) {
    a.style.display = b ? "inline-block" : "none";
    const c = a.parentElement;
    b
      ? (c.dataset.adStatus = a.dataset.adStatus)
      : ((a.dataset.adStatus = c.dataset.adStatus), delete c.dataset.adStatus);
  }

  function nz(a, b) {
    const c = b.innerHeight >= b.innerWidth ? 1 : 2;
    if (a.j != c) {
      a.j = c;
      a = xw();
      for (const d of a)
        if (
          d.mc.offsetWidth != d.offsetWidth ||
          d.F.google_full_width_responsive_allowed
        )
          (d.offsetWidth = d.mc.offsetWidth),
            xi(467, () => {
              var e = d.mc,
                f = d.F;
              const g = lz(e, f);
              f.google_full_width_responsive_allowed &&
                ((e.style.marginLeft = f.gfwroml || ""),
                (e.style.marginRight = f.gfwromr || ""),
                (e.style.height = f.gfwroh ? f.gfwroh + "px" : ""),
                (e.style.width = f.gfwrow ? f.gfwrow + "px" : ""),
                (e.style.zIndex = f.gfwroz || ""),
                delete f.google_full_width_responsive_allowed);
              delete f.google_ad_format;
              delete f.google_ad_width;
              delete f.google_ad_height;
              delete f.google_content_recommendation_ui_type;
              delete f.google_content_recommendation_rows_num;
              delete f.google_content_recommendation_columns_num;
              R().google_spfd(e, f, b);
              const h = lz(e, f);
              !h && g && 1 == e.childNodes.length
                ? (mz(g, !1),
                  (f.google_reactive_ad_format = 16),
                  (f.google_ad_section = "responsive_resize"),
                  (e.dataset.adsbygoogleStatus = "reserved"),
                  (e.className += " adsbygoogle-noablate"),
                  Xy(b),
                  b.adsbygoogle.push({
                    element: e,
                    params: f,
                  }))
                : h && g
                ? h != g && (mz(g, !1), mz(h, !0))
                : S("auto_size_refresh", {
                    context: "showOrHideElm",
                    url: b.location.href,
                    nodes: e.childNodes.length,
                  });
            });
    }
  }
  class oz extends Us {
    constructor() {
      super();
      this.j = null;
    }
    init(a) {
      const b = pw();
      if (!uw(b, 27, !1)) {
        b.S[sw(27)] = !0;
        this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
        var c = () => nz(this, a);
        K(a, "resize", c);
        Vs(this, () => {
          te(a, "resize", c);
        });
      }
    }
  }
  var pz = class {
    constructor(a, b, c) {
      this.B = a;
      this.A = b;
      this.j = c;
      this.l = null;
      this.C = this.D = 0;
    }
    G() {
      10 <= ++this.D && u.clearInterval(this.l);
      var a = Fn(this.B, this.A);
      a = Gn(this.B, this.A, a);
      const b = Bn(this.A, this.B);
      (null != b && 0 === b.x) || u.clearInterval(this.l);
      a &&
        (this.C++,
        S(
          "rspv:al",
          {
            aligns: this.C,
            attempt: this.D,
            client: this.j.google_ad_client,
            eoffs: null != b ? b.x : null,
            eids: iy(this.j),
            slot: this.j.google_ad_slot,
            url: this.j.google_page_url,
          },
          0.01
        ));
    }
  };
  var rz = (a) => {
      const b = {};
      b.dtd = qz(new Date().getTime(), dm);
      return bh(b, a);
    },
    qz = (a, b, c = 1e5) => {
      a -= b;
      return a >= c ? "M" : 0 <= a ? a : "-M";
    };
  var tz = (a, b, c) => {
    let d;
    const e = (
      null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")
    )
      ? b.parentElement
      : b;
    c.addEventListener("load", () => sz(e));
    return Di(a, "adpnt", (f, g) => {
      var h;
      if (Ll(g, c.contentWindow)) {
        f = Ol(f).qid;
        try {
          c.setAttribute("data-google-query-id", f);
          var l;
          null !== (h = a.googletag) && void 0 !== h ? h : (a.googletag = {});
          const k =
            null !== (l = a.googletag.queryIds) && void 0 !== l ? l : [];
          k.push(f);
          500 < k.length && k.shift();
          a.googletag.queryIds = k;
        } catch (k) {}
        e.dataset.adStatus &&
          S("adsense_late_fill", {
            status: e.dataset.adStatus,
          });
        e.dataset.adStatus = "filled";
        h = !0;
      } else h = !1;
      return h;
    });
  };

  function sz(a) {
    setTimeout(() => {
      "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled");
    }, 1e3);
  }

  function uz(a, b, c) {
    try {
      if (!gg(c.origin)) return;
    } catch (f) {
      return;
    }
    const d = b.msg_type;
    let e;
    "string" === typeof d &&
      (e = a.tc[d]) &&
      Th(a.ya, 168, () => {
        e.call(a, b, c);
      });
  }
  class vz extends Us {
    constructor(a) {
      var b = wi,
        c = Bh;
      super();
      this.j = a;
      this.ya = b;
      this.ka = c;
      this.tc = {};
      this.od = Uh(this.ya, 168, (d, e) => void uz(this, d, e));
      this.Kd = Uh(this.ya, 169, (d, e) =>
        Pl(this.j, "ras::xsf", this.ka, d, e)
      );
      this.Na = [];
      this.Z(this.tc);
      this.Na.push(Ci(this.j, "sth", this.od, this.Kd));
    }
    B() {
      for (const a of this.Na) a();
      this.Na.length = 0;
      super.B();
    }
  }
  class wz extends vz {
    constructor(a) {
      super(a);
      this.j = a;
    }
  }
  var xz = class extends wz {
    constructor(a, b) {
      super(a);
      this.l = b;
      this.A = () => {};
      K(this.l, "load", this.A);
    }
    B() {
      this.l && te(this.l, "load", this.A);
      super.B();
      this.l = null;
    }
    Z(a) {
      a["adsense-labs"] = (b) => {
        if ((b = Ol(b).settings))
          try {
            var c = new He(JSON.parse(b));
            if (Xb(c, 1)) {
              var d = this.j,
                e = y(c, 1) || "";
              if (
                X(nk)
                  ? null !=
                    Gw({
                      win: d,
                      Ab: by(),
                    }).j
                  : 1
              ) {
                if (X(nk)) {
                  var f = Gw({
                    win: d,
                    Ab: by(),
                  });
                  if (null != f.j) {
                    dy("ok");
                    var g = cy(f.j.value);
                  } else dy(f.l.message), (g = {});
                } else g = cy(d.localStorage);
                null !== c && (g[e] = c.toJSON());
                try {
                  d.localStorage.setItem(
                    "google_adsense_settings",
                    JSON.stringify(g)
                  );
                } catch (h) {}
              }
            }
          } catch (h) {}
      };
    }
  };

  function yz(a) {
    a.A = a.D;
    a.I.style.transition = "height 500ms";
    a.C.style.transition = "height 500ms";
    a.G.style.transition = "height 500ms";
    a.l.style.transition = "height 500ms";
    zz(a);
  }

  function Az(a, b) {
    (a.l.contentWindow || a.l.contentWindow).postMessage(
      JSON.stringify({
        msg_type: "expand-on-scroll-result",
        eos_success: !0,
        eos_amount: b,
        googMsgType: "sth",
      }),
      "*"
    );
  }

  function zz(a) {
    const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
    a.l.style.clip = b;
    a.G.style.clip = b;
    a.l.setAttribute("height", a.A);
    a.l.style.height = a.A + "px";
    a.G.setAttribute("height", a.A);
    a.G.style.height = a.A + "px";
    a.C.style.height = a.A + "px";
    a.I.style.height = a.A + "px";
  }

  function Bz(a, b) {
    b = Tf(b.r_nh);
    a.D = null == b ? 0 : b;
    if (0 >= a.D) return "1";
    a.L = Tg(a.I).y;
    a.J = Ml(a.j);
    if (a.L + a.A < a.J) return "2";
    if (a.L > Hl(a.j) - a.j.innerHeight) return "3";
    b = a.J;
    a.l.setAttribute("height", a.D);
    a.l.style.height = a.D + "px";
    a.G.style.overflow = "hidden";
    a.I.style.position = "relative";
    a.I.style.transition = "height 100ms";
    a.C.style.transition = "height 100ms";
    a.G.style.transition = "height 100ms";
    a.l.style.transition = "height 100ms";
    b = Math.min(b + a.j.innerHeight - a.L, a.A);
    Ng(a.C, {
      position: "relative",
      top: "auto",
      bottom: "auto",
    });
    b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
    Ng(a.l, {
      clip: b,
    });
    Ng(a.G, {
      clip: b,
    });
    return "0";
  }

  function Cz(a, b = {}) {
    a.ea && (b.eid = a.ea);
    b.qid = a.ra;
    S("eoscrl", b, em(String(a.ib)));
  }
  class Dz extends wz {
    constructor(a, b) {
      super(a.K);
      this.l = b;
      this.G = a.ba.firstElementChild;
      this.C = a.ba;
      this.I =
        this.C.parentElement &&
        this.C.parentElement.classList.contains("adsbygoogle")
          ? this.C.parentElement
          : this.C;
      this.A = parseInt(this.C.style.height, 10);
      this.ea = null;
      this.uc = this.jb = !1;
      this.ra = "";
      this.ma = this.J = this.D = 0;
      this.Gd = this.A / 5;
      this.L = Tg(this.I).y;
      this.ib = null;
      this.hd = pe(
        yi(651, () => {
          this.L = Tg(this.I).y;
          var c = this.J;
          this.J = Ml(this.j);
          this.A < this.D
            ? ((c = this.J - c),
              0 < c &&
                ((this.ma += c),
                this.ma >= this.Gd
                  ? (yz(this), Az(this, this.D))
                  : ((this.A = Math.min(this.D, this.A + c)),
                    Az(this, c),
                    zz(this))))
            : te(this.j, "scroll", this.O);
        }),
        this
      );
      this.O = () => {
        var c = this.hd;
        Oe.requestAnimationFrame ? Oe.requestAnimationFrame(c) : c();
      };
    }
    Z(a) {
      a["expand-on-scroll"] = (b, c) => {
        ph(c, this.l) &&
          ((b = Ol(b)),
          (this.ea = b.i_expid),
          (this.ra = b.qid),
          (this.ib = b.gen204_fraction),
          this.jb ||
            ((this.jb = !0),
            (b = Bz(this, b)),
            "0" === b && K(this.j, "scroll", this.O, qe),
            c.source.postMessage(
              JSON.stringify({
                msg_type: "expand-on-scroll-result",
                eos_success: "0" === b,
                googMsgType: "sth",
              }),
              "*"
            ),
            Cz(this, {
              err: b,
            })));
      };
      a["expand-on-scroll-force-expand"] = (b, c) => {
        ph(c, this.l) &&
          !this.uc &&
          ((this.uc = !0), yz(this), te(this.j, "scroll", this.O));
      };
    }
    B() {
      this.O && te(this.j, "scroll", this.O, qe);
      super.B();
    }
  }

  function Ez(a) {
    const b = a.J.getBoundingClientRect(),
      c = 0 > b.top + b.height;
    return !(b.top > a.l.innerHeight) && !c;
  }
  class Fz extends Us {
    constructor(a, b, c) {
      super();
      this.l = a;
      this.C = b;
      this.J = c;
      this.D = 0;
      this.A = Ez(this);
      this.I = oe(this.G, this);
      this.j = yi(433, () => {
        var d = this.I;
        Oe.requestAnimationFrame ? Oe.requestAnimationFrame(d) : d();
      });
      K(this.l, "scroll", this.j, qe);
    }
    G() {
      const a = Ez(this);
      if (a && !this.A) {
        var b = {
          rr: "vis-bcr",
        };
        const c = this.C.contentWindow;
        c &&
          (Ei(c, "ig", b, "*", 2),
          10 <= ++this.D && this.j && te(this.l, "scroll", this.j, qe));
      }
      this.A = a;
    }
  }
  class Gz extends wz {
    constructor(a, b) {
      a.K && super(a.K);
      this.l = b;
      this.C = a.ba;
      this.A = a.Y;
    }
    Z(a) {
      a.interscroller = (b, c) => {
        if (
          ph(c, this.l) &&
          ((c = Ol(b)),
          (b = c.i_h),
          (c = c.i_f),
          null != b && "" !== b && null != c && "" !== c)
        ) {
          this.C.style.position = "relative";
          L(this.A, {
            position: "absolute",
            clip: "rect(0, auto, auto, 0)",
          });
          var d = this.A.firstElementChild;
          d &&
            d.id == this.l.id &&
            L(d, {
              position: "fixed",
            });
          d = Tf(Rg(this.A, "zIndex").toString(), 0) + 1;
          b = ng(this.l.id + "_header", b);
          L(b, {
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            "z-index": d,
          });
          this.C.insertAdjacentElement("afterbegin", b);
          b = ng(this.l.id + "_footer", c);
          L(b, {
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            "z-index": d,
          });
          this.C.insertAdjacentElement("beforeend", b);
        }
      };
    }
  }
  const Hz = {
    display: "block",
    left: "auto",
    position: "fixed",
    bottom: "0px",
  };

  function Iz(a, b) {
    if (!a.ra) return "1";
    b = Tf(b.r_nh);
    a.D = null == b ? 0 : b;
    if (0 >= a.D) return "2";
    a.C = Tg(a.A).y;
    b = a.j.innerHeight;
    if (a.C + a.ea < b) return "4";
    if (a.C > Hl(a.j) - b) return "3";
    a.A.setAttribute("height", a.D);
    a.A.style.height = a.D + "px";
    Ng(a.l, Hz);
    a.l.style.height = a.D + "px";
    a.O.style.position = "relative";
    a.ma();
    return "0";
  }

  function Jz(a, b = {}) {
    a.G && (b.eid = a.G);
    b.qid = a.I;
    S("pscrl", b, em(String(a.J)));
  }
  class Kz extends wz {
    constructor(a, b) {
      a.K && super(a.K);
      this.A = b;
      this.l = a.ba;
      this.O = this.l.parentElement;
      this.ea = parseInt(this.l.style.height, 10);
      this.G = null;
      this.L = !1;
      this.I = "";
      this.D = 0;
      this.C = Tg(this.A).y;
      this.J = null;
      this.ra =
        u.requestAnimationFrame ||
        u.webkitRequestAnimationFrame ||
        u.mozRequestAnimationFrame ||
        u.oRequestAnimationFrame ||
        u.msRequestAnimationFrame;
      this.ma = yi(636, () => {
        this.ra.call(this.j, this.ma);
        var c = this.j.innerHeight,
          d = Ml(this.j);
        this.C = Tg(this.O).y;
        d + c > this.C
          ? ((d = d + c - this.C),
            (c = Math.min(d, this.ea)),
            (d = this.D - d),
            (d = Math.max(0, d)),
            0 >= d
              ? Ng(this.l, {
                  position: "absolute",
                  top: "0px",
                  bottom: "auto",
                })
              : Ng(this.l, {
                  position: "fixed",
                  top: "auto",
                  bottom: "0px",
                }),
            Ng(this.l, {
              clip:
                "rect(" +
                d +
                "px, " +
                this.A.width +
                "px, " +
                (d + c) +
                "px, 0px)",
            }))
          : Ng(this.l, {
              clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)",
            });
      });
    }
    Z(a) {
      a["parallax-scroll"] = (b, c) => {
        b = Ol(b);
        this.G = b.i_expid;
        this.I = b.qid;
        this.J = b.gen204_fraction;
        !this.L &&
          ph(c, this.A) &&
          ((this.L = !0),
          (b = Iz(this, b)),
          c.source.postMessage(
            JSON.stringify({
              msg_type: "parallax-scroll-result",
              ps_success: "0" === b,
              googMsgType: "sth",
            }),
            "*"
          ),
          Jz(this, {
            err: b,
          }));
      };
    }
  }

  function Lz(a, b) {
    b = b && b[0];
    if (!b) return null;
    b = b.target;
    const c = b.getBoundingClientRect(),
      d = mf(a.j.N() || window);
    if (
      0 >= c.bottom ||
      c.bottom > d.height ||
      0 >= c.right ||
      c.left >= d.width
    )
      return null;
    var e = Mz(
        a,
        b,
        c,
        a.j.j.elementsFromPoint(
          Ve(c.left + c.width / 2, c.left, c.right - 1),
          Ve(c.bottom - 1 - 2, c.top, c.bottom - 1)
        ),
        1,
        []
      ),
      f = Mz(
        a,
        b,
        c,
        a.j.j.elementsFromPoint(
          Ve(c.left + c.width / 2, c.left, c.right - 1),
          Ve(c.top + 2, c.top, c.bottom - 1)
        ),
        2,
        e.sa
      ),
      g = Mz(
        a,
        b,
        c,
        a.j.j.elementsFromPoint(
          Ve(c.left + 2, c.left, c.right - 1),
          Ve(c.top + c.height / 2, c.top, c.bottom - 1)
        ),
        3,
        [...e.sa, ...f.sa]
      );
    const h = Mz(
      a,
      b,
      c,
      a.j.j.elementsFromPoint(
        Ve(c.right - 1 - 2, c.left, c.right - 1),
        Ve(c.top + c.height / 2, c.top, c.bottom - 1)
      ),
      4,
      [...e.sa, ...f.sa, ...g.sa]
    );
    var l = Nz(a, b, c),
      k = (n) =>
        db(a.A, n.overlapType) &&
        db(a.B, n.overlapDepth) &&
        db(a.l, n.overlapDetectionPoint);
    e = $a([...e.entries, ...f.entries, ...g.entries, ...h.entries], k);
    k = $a(l, k);
    l = [...e, ...k];
    f = -2 > c.left || c.right > d.width + 2;
    f = 0 < l.length || f;
    g = nf(a.j.j);
    const m = new ug(c.left, c.top, c.width, c.height);
    e = [
      ...ab(
        e,
        (n) =>
          new ug(
            n.elementRect.left,
            n.elementRect.top,
            n.elementRect.width,
            n.elementRect.height
          )
      ),
      ...jb(ab(k, (n) => wg(m, n.elementRect))),
      ...$a(
        wg(m, new ug(0, 0, d.width, d.height)),
        (n) => 0 <= n.top && n.top + n.height <= d.height
      ),
    ];
    return {
      entries: l,
      isOverlappingOrOutsideViewport: f,
      scrollPosition: {
        scrollX: g.x,
        scrollY: g.y,
      },
      target: b,
      targetRect: c,
      viewportSize: {
        width: d.width,
        height: d.height,
      },
      overlappedArea: 20 > e.length ? Oz(m, e) : Pz(c, e),
    };
  }

  function Qz(a, b) {
    const c = a.j.N(),
      d = a.j.j;
    return new Promise((e, f) => {
      const g = c.IntersectionObserver;
      if (g)
        if (d.elementsFromPoint)
          if (d.createNodeIterator)
            if (d.createRange)
              if (c.Range.prototype.getBoundingClientRect) {
                var h = new g((l) => {
                  const k = new Qh(),
                    m = Ph(k, () => Lz(a, l));
                  m &&
                    (k.events.length &&
                      (m.executionTime = Math.round(
                        Number(k.events[0].duration)
                      )),
                    h.disconnect(),
                    e(m));
                }, Rz);
                h.observe(b);
              } else f(Error("5"));
            else f(Error("4"));
          else f(Error("3"));
        else f(Error("2"));
      else f(Error("1"));
    });
  }

  function Mz(a, b, c, d, e, f) {
    if (0 === c.width || 0 === c.height)
      return {
        entries: [],
        sa: [],
      };
    const g = [],
      h = [];
    for (let n = 0; n < d.length; n++) {
      const q = d[n];
      if (q === b) continue;
      if (db(f, q)) continue;
      h.push(q);
      const r = q.getBoundingClientRect();
      if (a.j.contains(q, b)) {
        g.push(Sz(a, c, q, r, 1, e));
        continue;
      }
      if (a.j.contains(b, q)) {
        g.push(Sz(a, c, q, r, 2, e));
        continue;
      }
      a: {
        var l = a;
        var k = b,
          m = q;
        const H = l.j.Vd(k, m);
        if (!H) {
          l = null;
          break a;
        }
        const { suspectAncestor: B, Ba: C } = Tz(l, k, H, m) || {},
          { suspectAncestor: F, Ba: I } = Tz(l, m, H, k) || {};
        l =
          B && C && F && I
            ? C <= I
              ? {
                  suspectAncestor: B,
                  overlapType: Uz[C],
                }
              : {
                  suspectAncestor: F,
                  overlapType: Vz[I],
                }
            : B && C
            ? {
                suspectAncestor: B,
                overlapType: Uz[C],
              }
            : F && I
            ? {
                suspectAncestor: F,
                overlapType: Vz[I],
              }
            : null;
      }
      const { suspectAncestor: t, overlapType: x } = l || {};
      t && x ? g.push(Sz(a, c, q, r, x, e, t)) : g.push(Sz(a, c, q, r, 9, e));
    }
    return {
      entries: g,
      sa: h,
    };
  }

  function Nz(a, b, c) {
    const d = [];
    for (b = b.parentElement; b; b = b.parentElement) {
      const f = b.getBoundingClientRect();
      if (f) {
        var e = If(b, a.j.N());
        e &&
          "visible" !== e.overflow &&
          ("auto" !== e.overflowY &&
          "scroll" !== e.overflowY &&
          c.bottom > f.bottom + 2
            ? d.push(Sz(a, c, b, f, 5, 1))
            : ((e = "auto" === e.overflowX || "scroll" === e.overflowX),
              !e && c.left < f.left - 2
                ? d.push(Sz(a, c, b, f, 5, 3))
                : !e && c.right > f.right + 2 && d.push(Sz(a, c, b, f, 5, 4))));
      }
    }
    return d;
  }

  function Oz(a, b) {
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = 0;
    for (let d = 1; d < 1 << b.length; d++) {
      let e = a,
        f = 0;
      for (
        let g = 0;
        g < b.length && (!(d & (1 << g)) || (f++, (e = vg(e, b[g])), e));
        g++
      );
      e &&
        (c =
          1 === f % 2
            ? c + (e.width + 1) * (e.height + 1)
            : c - (e.width + 1) * (e.height + 1));
    }
    return c / ((a.width + 1) * (a.height + 1));
  }

  function Pz(a, b) {
    if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
    let c = 0;
    for (let d = a.left; d <= a.right; d++)
      for (let e = a.top; e <= a.bottom; e++)
        for (let f = 0; f < b.length; f++)
          if (
            d >= b[f].left &&
            d <= b[f].left + b[f].width &&
            e >= b[f].top &&
            e <= b[f].top + b[f].height
          ) {
            c++;
            break;
          }
    return c / ((a.width + 1) * (a.height + 1));
  }

  function Sz(a, b, c, d, e, f, g) {
    const h = {
      element: c,
      elementRect: d,
      overlapType: e,
      overlapDetectionPoint: f,
    };
    if (db(a.A, e) && db(a.l, f)) {
      b = new rg(b.top, b.right - 1, b.bottom - 1, b.left);
      if ((a = Wz(a, c)) && tg(b, a)) c = 4;
      else {
        a = Xz(c, d);
        if (qb) {
          e = Xg(c, "paddingLeft");
          f = Xg(c, "paddingRight");
          var l = Xg(c, "paddingTop"),
            k = Xg(c, "paddingBottom");
          e = new rg(l, f, k, e);
        } else
          (e = Qg(c, "paddingLeft")),
            (f = Qg(c, "paddingRight")),
            (l = Qg(c, "paddingTop")),
            (k = Qg(c, "paddingBottom")),
            (e = new rg(
              parseFloat(l),
              parseFloat(f),
              parseFloat(k),
              parseFloat(e)
            ));
        tg(
          b,
          new rg(
            a.top + e.top,
            a.right - e.right,
            a.bottom - e.bottom,
            a.left + e.left
          )
        )
          ? (c = 3)
          : ((c = Xz(c, d)), (c = tg(b, c) ? 2 : 1));
      }
      h.overlapDepth = c;
    }
    g && (h.suspectAncestor = g);
    return h;
  }

  function Tz(a, b, c, d) {
    const e = [];
    for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
    c = a.j.N();
    for (f = 0; f < e.length; f++) {
      const h = e[f];
      var g = If(h, c);
      if (g) {
        if ("fixed" === g.position)
          return {
            suspectAncestor: h,
            Ba: 1,
          };
        if ("sticky" === g.position && a.j.contains(h.parentElement, d))
          return {
            suspectAncestor: h,
            Ba: 2,
          };
        if ("absolute" === g.position)
          return {
            suspectAncestor: h,
            Ba: 3,
          };
        if ("none" !== g.cssFloat) {
          g = h === e[0];
          const l = Yz(a, e.slice(0, f), h);
          if (g || l)
            return {
              suspectAncestor: h,
              Ba: 4,
            };
        }
      }
    }
    return (a = Yz(a, e, b))
      ? {
          suspectAncestor: a,
          Ba: 5,
        }
      : null;
  }

  function Yz(a, b, c) {
    const d = c.getBoundingClientRect();
    if (!d) return null;
    for (let e = 0; e < b.length; e++) {
      const f = b[e];
      if (!a.j.contains(f, c)) continue;
      const g = f.getBoundingClientRect();
      if (!g) continue;
      const h = If(f, a.j.N());
      if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f;
    }
    return null;
  }

  function Wz(a, b) {
    var c = a.j.j;
    a = c.createRange();
    if (!a) return null;
    c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
      acceptNode: (d) =>
        /^[\s\xa0]*$/.test(d.nodeValue)
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT,
    });
    for (b = c.nextNode(); c.nextNode(); );
    c = c.previousNode();
    if (!b || !c) return null;
    a.setStartBefore(b);
    a.setEndAfter(c);
    a = a.getBoundingClientRect();
    return 0 === a.width || 0 === a.height
      ? null
      : new rg(a.top, a.right, a.bottom, a.left);
  }

  function Xz(a, b) {
    if (!qb || 9 <= Number(Fb)) {
      var c = Qg(a, "borderLeftWidth");
      d = Qg(a, "borderRightWidth");
      e = Qg(a, "borderTopWidth");
      a = Qg(a, "borderBottomWidth");
      c = new rg(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
    } else {
      c = Zg(a, "borderLeft");
      var d = Zg(a, "borderRight"),
        e = Zg(a, "borderTop");
      a = Zg(a, "borderBottom");
      c = new rg(e, d, a, c);
    }
    return new rg(
      b.top + c.top,
      b.right - 1 - c.right,
      b.bottom - 1 - c.bottom,
      b.left + c.left
    );
  }
  class Zz {
    constructor(a, b = $z) {
      this.j = gf(a);
      this.A = [5, 8, 9];
      this.B = [3, 4];
      this.l = b;
    }
  }
  const Uz = {
      [1]: 3,
      [4]: 10,
      [3]: 12,
      [2]: 4,
      [5]: 5,
    },
    Vz = {
      [1]: 6,
      [4]: 11,
      [3]: 13,
      [2]: 7,
      [5]: 8,
    };
  $a(
    Nf({
      pg: 1,
      qg: 2,
      Wh: 3,
      Xh: 4,
      Zh: 5,
      lg: 6,
      mg: 7,
      og: 8,
      qh: 9,
      Yh: 10,
      ng: 11,
      Vh: 12,
      kg: 13,
    }),
    (a) => !db([1, 2], a)
  );
  Nf({
    Ff: 1,
    rh: 2,
    Qf: 3,
    $h: 4,
  });
  const $z = Nf({
      Gf: 1,
      ci: 2,
      ah: 3,
      Mh: 4,
    }),
    Rz = {
      threshold: [0, 0.25, 0.5, 0.75, 0.95, 0.96, 0.97, 0.98, 0.99, 1],
    };

  function aA(a) {
    return X(gl) && a.prerendering
      ? 3
      : {
          visible: 1,
          hidden: 2,
          prerender: 3,
          preview: 4,
          unloaded: 5,
        }[
          a.visibilityState ||
            a.webkitVisibilityState ||
            a.mozVisibilityState ||
            ""
        ] || 0;
  }

  function bA(a) {
    let b;
    a.visibilityState
      ? (b = "visibilitychange")
      : a.mozVisibilityState
      ? (b = "mozvisibilitychange")
      : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b;
  }

  function cA(a) {
    return null != a.hidden
      ? a.hidden
      : null != a.mozHidden
      ? a.mozHidden
      : null != a.webkitHidden
      ? a.webkitHidden
      : null;
  }

  function dA(a, b) {
    Array.isArray(b) || (b = [b]);
    b = b.map(function (c) {
      return "string" === typeof c
        ? c
        : c.lc + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
    });
    Ng(a, "transition", b.join(","));
  }
  var eA = me(function () {
    if (qb) return Cb("10.0");
    var a = qf(document, "DIV"),
      b = vb ? "-webkit" : ub ? "-moz" : qb ? "-ms" : null,
      c = {
        transition: "opacity 1s linear",
      };
    b && (c[b + "-transition"] = "opacity 1s linear");
    b = {
      style: c,
    };
    yd("div");
    b = Bd("div", b, void 0);
    Re(a, b);
    a = a.firstChild;
    b = a.style[ef("transition")];
    return (
      "" != ("undefined" !== typeof b ? b : a.style[Og(a, "transition")] || "")
    );
  });

  function fA(a, b, c) {
    0 > a.l[b].indexOf(c) && (a.l[b] += c);
  }

  function gA(a, b) {
    0 <= a.j.indexOf(b) || (a.j = b + a.j);
  }

  function hA(a, b) {
    0 > a.A.indexOf(b) && (a.A = b + a.A);
  }

  function iA(a, b, c, d) {
    return "" != a.A || b
      ? null
      : "" == a.j.replace(jA, "")
      ? (null != c && a.l[0]) || (null != d && a.l[1])
        ? !1
        : !0
      : !1;
  }

  function kA(a) {
    var b = iA(a, "", null, 0);
    if (null === b) return "XS";
    b = b ? "C" : "N";
    a = a.j;
    return 0 <= a.indexOf("a")
      ? b + "A"
      : 0 <= a.indexOf("f")
      ? b + "F"
      : b + "S";
  }
  var lA = class {
    constructor(a, b) {
      this.l = ["", ""];
      this.j = a || "";
      this.A = b || "";
    }
    toString() {
      return [this.l[0], this.l[1], this.j, this.A].join("|");
    }
  };

  function mA(a) {
    let b = a.da;
    a.J = function () {};
    nA(a, a.I, b);
    let c = a.I.parentElement;
    if (!c) return a.j;
    let d = !0,
      e = null;
    for (; c; ) {
      try {
        e = /^head|html$/i.test(c.nodeName) ? null : If(c, b);
      } catch (g) {
        hA(a.j, "c");
      }
      const f = oA(a, b, c, e);
      c.classList.contains("adsbygoogle") &&
        e &&
        (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) &&
        (a.Z = !0);
      if (d && !f && pA(e)) {
        gA(a.j, "l");
        a.L = c;
        break;
      }
      d = d && f;
      if (e && qA(a, e)) break;
      c = c.parentElement;
      if (!c) {
        if (b === a.ib) break;
        try {
          if (((c = b.frameElement), (b = b.parent), !Cf(b))) {
            gA(a.j, "c");
            break;
          }
        } catch (g) {
          gA(a.j, "c");
          break;
        }
      }
    }
    a.H && a.B && rA(a);
    return a.j;
  }

  function sA(a) {
    function b() {
      tA(c, f, g);
      if (h && !l && !g) {
        const k = function (m) {
          for (let n = 0; n < m.length; n++) Ng(h, m[n], "0px");
        };
        k(uA);
        k(vA);
      }
    }
    const c = a.I;
    c.style.overflow = a.ra ? "visible" : "hidden";
    a.H &&
      (a.L
        ? (dA(c, wA), dA(a.L, wA))
        : dA(
            c,
            "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"
          ));
    null !== a.O && (c.style.opacity = a.O);
    const d = null != a.G && null != a.A && (a.ea || a.A > a.G) ? a.A : null,
      e = null != a.D && null != a.l && (a.ea || a.l > a.D) ? a.l : null;
    if (a.T) {
      const k = a.T.length;
      for (let m = 0; m < k; m++) tA(a.T[m], d, e);
    }
    const f = a.A,
      g = a.l,
      h = a.L,
      l = a.Z;
    a.H ? u.setTimeout(b, 1e3) : b();
  }

  function xA(a) {
    if ((a.B && !a.Na) || (null == a.A && null == a.l && null == a.O && a.B))
      return a.j;
    var b = a.B;
    a.B = !1;
    mA(a);
    a.B = b;
    if (!b || (null != a.ka && !iA(a.j, a.ka, a.A, a.l))) return a.j;
    0 <= a.j.j.indexOf("n") && ((a.G = null), (a.D = null));
    if ((null == a.G && null !== a.A) || (null == a.D && null !== a.l))
      a.H = !1;
    (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && ((a.A = 0), (a.l = 0));
    b = a.j;
    b.l[0] = "";
    b.l[1] = "";
    b.j = "";
    b.A = "";
    sA(a);
    return mA(a);
  }

  function qA(a, b) {
    let c = !1;
    "none" == b.display && (gA(a.j, "n"), a.B && (c = !0));
    ("hidden" != b.visibility && "collapse" != b.visibility) || gA(a.j, "v");
    "hidden" == b.overflow && gA(a.j, "o");
    "absolute" == b.position
      ? (gA(a.j, "a"), (c = !0))
      : "fixed" == b.position && (gA(a.j, "f"), (c = !0));
    return c;
  }

  function nA(a, b, c) {
    let d = 0;
    if (!b || !b.parentElement) return !0;
    let e = !1,
      f = 0;
    const g = b.parentElement.childNodes;
    for (let l = 0; l < g.length; l++) {
      var h = g[l];
      h == b ? (e = !0) : ((h = yA(a, h, c)), (d |= h), e && (f |= h));
    }
    f & 1 && (d & 2 && fA(a.j, 0, "o"), d & 4 && fA(a.j, 1, "o"));
    return !(d & 1);
  }

  function oA(a, b, c, d) {
    let e = null;
    try {
      e = c.style;
    } catch (H) {
      hA(a.j, "s");
    }
    var f = c.getAttribute("width"),
      g = Tf(f),
      h = c.getAttribute("height"),
      l = Tf(h),
      k = (d && /^block$/.test(d.display)) || (e && /^block$/.test(e.display));
    const m = nA(a, c, b);
    var n = d && d.width,
      q = d && d.height,
      r = e && e.width,
      t = e && e.height,
      x = Vf(n) == a.G && Vf(q) == a.D;
    n = x ? n : r;
    t = x ? q : t;
    r = Vf(n);
    x = Vf(t);
    g = null !== a.G && ((null !== r && a.G >= r) || (null !== g && a.G >= g));
    x = null !== a.D && ((null !== x && a.D >= x) || (null !== l && a.D >= l));
    l = !m && pA(d);
    x =
      m ||
      x ||
      l ||
      !(f || n || (d && (!zA(String(d.minWidth)) || !AA(String(d.maxWidth)))));
    k =
      m ||
      g ||
      l ||
      k ||
      !(
        h ||
        t ||
        (d && (!zA(String(d.minHeight)) || !AA(String(d.maxHeight))))
      );
    BA(a, 0, x, c, "width", f, a.G, a.A);
    CA(a, 0, "d", x, e, d, "width", n, a.G, a.A);
    CA(a, 0, "m", x, e, d, "minWidth", e && e.minWidth, a.G, a.A);
    CA(a, 0, "M", x, e, d, "maxWidth", e && e.maxWidth, a.G, a.A);
    if (a.jb) {
      c = /^html|body$/i.test(c.nodeName);
      q = Vf(q);
      h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
      (f = null != a.l && d && q && Math.round(q) !== a.l) &&
        !(f = !h) &&
        ((f = q),
        (f =
          (X(Qk) || (b.location && "#gffwroe2ettq" == b.location.hash)) &&
          Math.round(f) < 0.8 * Math.round(b.innerHeight)));
      f = f && "100%" !== d.minHeight;
      if ((c = a.B && !c && f))
        c = !(
          a.ma &&
          d &&
          (X(Mk) || (b.location && "#gffwroe2etoq" == b.location.hash)) &&
          Math.round(Vf(d.minHeight)) === Math.round(b.innerHeight)
        );
      c &&
        (e.setProperty("height", "auto", "important"),
        d &&
          !zA(String(d.minHeight)) &&
          e.setProperty("min-height", "0px", "important"),
        d &&
          !AA(String(d.maxHeight)) &&
          a.l &&
          Math.round(q) < a.l &&
          e.setProperty("max-height", "none", "important"));
    } else
      BA(a, 1, k, c, "height", h, a.D, a.l),
        CA(a, 1, "d", k, e, d, "height", t, a.D, a.l),
        CA(a, 1, "m", k, e, d, "minHeight", e && e.minHeight, a.D, a.l),
        CA(a, 1, "M", k, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
    return m;
  }

  function rA(a) {
    function b() {
      if (0 < c) {
        var k = If(e, d) || {};
        const m = Vf(k.width);
        k = Vf(k.height);
        null !== m && null !== f && h && h(0, f - m);
        null !== k && null !== g && h && h(1, g - k);
        --c;
      } else u.clearInterval(l), h && (h(0, 0), h(1, 0));
    }
    let c = 31.25;
    const d = a.da,
      e = a.I,
      f = a.A,
      g = a.l,
      h = a.J;
    let l;
    u.setTimeout(function () {
      l = u.setInterval(b, 16);
    }, 990);
  }

  function yA(a, b, c) {
    if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
    if (1 == b.nodeType) {
      if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
      let d = null;
      try {
        d = If(b, c);
      } catch (e) {}
      if (d) {
        if ("none" == d.display || "fixed" == d.position) return 0;
        if ("absolute" == d.position) {
          if (
            !a.C.boundingClientRect ||
            "hidden" == d.visibility ||
            "collapse" == d.visibility
          )
            return 0;
          c = null;
          try {
            c = b.getBoundingClientRect();
          } catch (e) {
            return 0;
          }
          return (
            (c.right > a.C.boundingClientRect.left ? 2 : 0) |
            (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
          );
        }
      }
      return 1;
    }
    return 0;
  }

  function BA(a, b, c, d, e, f, g, h) {
    if (null != h) {
      if ("string" == typeof f) {
        if ("100%" == f || !f) return;
        f = Tf(f);
        null == f && (hA(a.j, "n"), fA(a.j, b, "d"));
      }
      if (null != f)
        if (c) {
          if (a.B)
            if (a.H) {
              const l = Math.max(f + h - (g || 0), 0),
                k = a.J;
              a.J = function (m, n) {
                m == b && d.setAttribute(e, l - n);
                k && k(m, n);
              };
            } else d.setAttribute(e, h);
        } else fA(a.j, b, "d");
    }
  }

  function CA(a, b, c, d, e, f, g, h, l, k) {
    if (null != k) {
      f = f && f[g];
      "string" != typeof f ||
        ("m" == c ? zA(f) : AA(f)) ||
        ((f = Vf(f)),
        null == f ? gA(a.j, "p") : null != l && gA(a.j, f == l ? "E" : "e"));
      if ("string" == typeof h) {
        if ("m" == c ? zA(h) : AA(h)) return;
        h = Vf(h);
        null == h && (hA(a.j, "p"), fA(a.j, b, c));
      }
      if (null != h)
        if (d && e) {
          if (a.B)
            if (a.H) {
              const m = Math.max(h + k - (l || 0), 0),
                n = a.J;
              a.J = function (q, r) {
                q == b && (e[g] = m - r + "px");
                n && n(q, r);
              };
            } else e[g] = k + "px";
        } else fA(a.j, b, c);
    }
  }
  var HA = class {
    constructor(a, b, c, d, e, f, g) {
      this.ib = a;
      this.T = c;
      this.I = b;
      this.da = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
      this.C = new DA(this.I);
      this.B = g;
      this.Na = EA(this.C, d.rc, d.height, d.bd);
      this.G = this.B
        ? this.C.boundingClientRect
          ? this.C.boundingClientRect.right - this.C.boundingClientRect.left
          : null
        : e;
      this.D = this.B
        ? this.C.boundingClientRect
          ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top
          : null
        : f;
      this.A = FA(d.width);
      this.l = FA(d.height);
      this.O = this.B ? FA(d.opacity) : null;
      this.ka = d.check;
      this.H = "animate" == d.rc && !GA(this.C, this.l, this.ya) && eA();
      this.ra = !!d.vc;
      this.j = new lA();
      GA(this.C, this.l, this.ya) && gA(this.j, "r");
      e = this.C;
      e.j && e.l >= e.A && gA(this.j, "b");
      this.L = this.J = null;
      this.Z = !1;
      this.ea = !!d.Ae;
      this.jb = !!d.Zc;
      this.ya = !!d.bd;
      this.ma = d.kb;
    }
  };

  function GA(a, b, c) {
    var d;
    (d = a.j) &&
      !(d = !a.B) &&
      (c
        ? ((b = a.l + Math.min(b, FA(a.getHeight()))), (a = a.j && b >= a.A))
        : (a = a.j && a.l >= a.A),
      (d = a));
    return d;
  }
  var DA = class {
    constructor(a) {
      var b = a && a.ownerDocument,
        c = b && (b.defaultView || b.parentWindow);
      c = c && Ff(c);
      this.j = !!c;
      this.boundingClientRect = null;
      if (a)
        try {
          this.boundingClientRect = a.getBoundingClientRect();
        } catch (g) {}
      var d = a;
      let e = 0,
        f = this.boundingClientRect;
      for (; d; )
        try {
          f && (e += f.top);
          const g = d.ownerDocument,
            h = g && (g.defaultView || g.parentWindow);
          (d = h && h.frameElement) && (f = d.getBoundingClientRect());
        } catch (g) {
          break;
        }
      this.l = e;
      c = c || u;
      this.A = (
        "CSS1Compat" == c.document.compatMode
          ? c.document.documentElement
          : c.document.body
      ).clientHeight;
      b = b && aA(b);
      this.B =
        !!a &&
        !(2 == b || 3 == b) &&
        !(
          this.boundingClientRect &&
          this.boundingClientRect.top >= this.boundingClientRect.bottom &&
          this.boundingClientRect.left >= this.boundingClientRect.right
        );
    }
    isVisible() {
      return this.B;
    }
    getWidth() {
      return this.boundingClientRect
        ? this.boundingClientRect.right - this.boundingClientRect.left
        : null;
    }
    getHeight() {
      return this.boundingClientRect
        ? this.boundingClientRect.bottom - this.boundingClientRect.top
        : null;
    }
  };

  function EA(a, b, c, d) {
    switch (b) {
      case "no_rsz":
        return !1;
      case "force":
      case "animate":
        return !0;
      default:
        return GA(a, c, d);
    }
  }

  function pA(a) {
    return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat);
  }

  function IA(a, b, c, d) {
    return xA(new HA(a, b, d, c, null, null, !0));
  }
  var JA = new lA("s", ""),
    jA = RegExp("[lonvafrbpEe]", "g");

  function AA(a) {
    return !a || /^(auto|none|100%)$/.test(a);
  }

  function zA(a) {
    return !a || /^(0px|auto|none|0%)$/.test(a);
  }

  function tA(a, b, c) {
    null !== b &&
      null !== Tf(a.getAttribute("width")) &&
      a.setAttribute("width", b);
    null !== c &&
      null !== Tf(a.getAttribute("height")) &&
      a.setAttribute("height", c);
    null !== b && (a.style.width = b + "px");
    null !== c && (a.style.height = c + "px");
  }
  var uA =
      "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(
        " "
      ),
    vA =
      "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(
        " "
      );
  let KA =
      "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
    LA = uA;
  for (let a = 0; a < LA.length; a++)
    KA += ", " + LA[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
  LA = vA;
  for (let a = 0; a < LA.length; a++)
    KA += ", " + LA[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
  var wA = KA;

  function FA(a) {
    return "string" === typeof a
      ? Tf(a)
      : "number" === typeof a && isFinite(a)
      ? a
      : null;
  }

  function MA(a, b, c, d, e, f, g, h, l, k) {
    const m = R();
    if (!a.l || !m) return (k.err = "2"), NA(a, k, null), !1;
    if ("no_rsz" === f) return (k.err = "7"), NA(a, k, null), !0;
    const n = new DA(a.l);
    if (!n.j) return (k.err = "3"), NA(a, k, null), !1;
    var q = n.getWidth();
    null != q && (k.w = q);
    q = n.getHeight();
    null != q && (k.h = q);
    if (EA(n, f, d, l)) {
      var r = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
      q = r ? [a.l] : null;
      r = r || a.l;
      const t = X(Wk);
      b = IA(
        m,
        r,
        {
          width: c,
          height: d,
          opacity: e,
          check: b,
          rc: f,
          vc: g,
          Ae: h,
          Zc: t,
          bd: l,
        },
        q
      );
      k.r_cui &&
        Uf(k.r_cui.toString()) &&
        L(r, {
          height: (null === d ? 0 : d - 48) + "px",
          top: "24px",
        });
      null != c && (k.nw = c);
      null != d && (k.nh = d);
      k.rsz = b.toString();
      k.abl = kA(b);
      k.frsz = ("force" === f).toString();
      k.err = "0";
      NA(a, k, n);
      cb(ji(vi).l(), (x) => db([248427477, 248427478], x)) &&
        a.j === m &&
        Qz(new Zz(a.j, void 0), r)
          .then((x) => {
            Ui(8, [x]);
            return x;
          })
          .then((x) => {
            S(
              "resize-ovlp",
              {
                adf: a.A,
                eid: a.G,
                io: Number(x.isOverlappingOrOutsideViewport),
                oa: x.overlappedArea.toFixed(2),
                qid: k.qid || "",
                slot: a.I,
                url: a.J,
                vp: x.viewportSize.width + "x" + x.viewportSize.height,
              },
              1
            );
          })
          .catch((x) => {
            S(
              "resize-ovlp-err",
              {
                err: x.message,
              },
              1
            );
          });
      return !0;
    }
    k.err = "1";
    NA(a, k, n);
    return !1;
  }

  function OA(a, b, c) {
    const d = {
      scrl: Ml(a.j || R()),
      adk: a.D,
      adf: a.A,
      fmt: a.C,
    };
    b &&
      ((d.str = GA(b, Tf(c.r_nh), Uf(c.r_cab))), (d.ad_y = b.l), (d.vph = b.A));
    Mf(c, (e, f) => {
      d[f] = e;
    });
    return d;
  }

  function NA(a, b, c) {
    const d = em(String(b.gen204_fraction));
    b = OA(a, c, b);
    b.url = a.j.document.URL;
    S("resize", b, d);
  }
  class PA extends wz {
    constructor(a, b, c) {
      super(a);
      this.l = b;
      this.D = String(c.google_ad_unit_key || "");
      this.A = String(c.google_ad_dom_fingerprint || "");
      this.C = String(c.google_ad_format || "");
      this.G = iy(c);
      this.I = String(c.google_ad_slot || "");
      this.J = String(c.google_page_url || "");
    }
    Z(a) {
      a["resize-me"] = (b, c) => {
        if (Ll(c, this.l.contentWindow)) {
          b = Ol(b);
          var d = b.r_chk;
          if (null == d || "" === d) {
            var e = Tf(b.r_nw),
              f = Tf(b.r_nh),
              g = Tf(b.r_no);
            null != g || (0 !== e && 0 !== f) || (g = 0);
            var h = b.r_str;
            h = h ? h : null;
            e = MA(
              this,
              d,
              e,
              f,
              g,
              h,
              Uf(b.r_ao),
              Uf(b.r_ifr),
              Uf(b.r_cab),
              b
            );
            d = {
              msg_type: "resize-result",
            };
            d.r_str = h;
            d.r_status = e;
            c = c.source;
            d.googMsgType = "sth";
            c.postMessage(JSON.stringify(d), "*");
            this.l.dataset.googleQueryId ||
              this.l.setAttribute("data-google-query-id", b.qid);
          }
        }
      };
    }
    B() {
      super.B();
      this.l = null;
    }
  }
  const QA = {
    google: 1,
    googlegroups: 1,
    gmail: 1,
    googlemail: 1,
    googleimages: 1,
    googleprint: 1,
  };
  const RA = /^blogger$/,
    SA = /^wordpress(.|\s|$)/i,
    TA = /^joomla!/i,
    UA = /^drupal/i,
    VA = /\/wp-content\//,
    WA = /\/wp-content\/plugins\/advanced-ads/,
    XA = /\/wp-content\/themes\/genesis/,
    YA = /\/wp-content\/plugins\/genesis/;
  var ZA = (a) => {
    var b = a.getElementsByTagName("script"),
      c = b.length;
    for (var d = 0; d < c; ++d) {
      var e = b[d];
      if (e.hasAttribute("src")) {
        e = e.getAttribute("src");
        if (WA.test(e)) return 5;
        if (YA.test(e)) return 6;
      }
    }
    b = a.getElementsByTagName("link");
    c = b.length;
    for (d = 0; d < c; ++d)
      if (
        ((e = b[d]),
        e.hasAttribute("href") &&
          ((e = e.getAttribute("href")), XA.test(e) || YA.test(e)))
      )
        return 6;
    a = a.getElementsByTagName("meta");
    d = a.length;
    for (e = 0; e < d; ++e) {
      var f = a[e];
      if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
        f = f.getAttribute("content");
        if (RA.test(f)) return 1;
        if (SA.test(f)) return 2;
        if (TA.test(f)) return 3;
        if (UA.test(f)) return 4;
      }
    }
    for (a = 0; a < c; ++a)
      if (
        ((d = b[a]),
        "stylesheet" == d.getAttribute("rel") &&
          d.hasAttribute("href") &&
          ((d = d.getAttribute("href")), VA.test(d)))
      )
        return 2;
    return 0;
  };
  let $A = navigator;
  var aB = (a) => {
      let b = 1;
      let c;
      if (void 0 != a && "" != a)
        for (b = 0, c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c);
          b = ((b << 6) & 268435455) + d + (d << 14);
          d = b & 266338304;
          b = 0 != d ? b ^ (d >> 21) : b;
        }
      return b;
    },
    bB = (a, b) => {
      if (!a || "none" == a) return 1;
      a = String(a);
      "auto" == a &&
        ((a = b),
        "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
      return aB(a.toLowerCase());
    };
  const cB = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
    dB = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
    eB = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

  function fB(a) {
    -1 == a.l && (a.l = bb(a.j, (b, c, d) => (c ? b + 2 ** d : b), 0));
    return a.l;
  }
  class gB {
    constructor() {
      this.j = [];
      this.l = -1;
    }
    set(a, b = !0) {
      0 <= a &&
        52 > a &&
        0 === a % 1 &&
        this.j[a] != b &&
        ((this.j[a] = b), (this.l = -1));
    }
    get(a) {
      return !!this.j[a];
    }
  }
  var hB = () => {
    const a = new gB();
    u.SVGElement && u.document.createElementNS && a.set(0);
    const b = $f();
    b["allow-top-navigation-by-user-activation"] && a.set(1);
    b["allow-popups-to-escape-sandbox"] && a.set(2);
    u.crypto && u.crypto.subtle && a.set(3);
    u.TextDecoder && u.TextEncoder && a.set(4);
    return fB(a);
  };
  var iB = new Map(
    [
      [
        ".google.com",
        (a) => N`https://adservice.google.com/adsid/integrator.${a}`,
      ],
      [
        ".google.ad",
        (a) => N`https://adservice.google.ad/adsid/integrator.${a}`,
      ],
      [
        ".google.ae",
        (a) => N`https://adservice.google.ae/adsid/integrator.${a}`,
      ],
      [
        ".google.com.af",
        (a) => N`https://adservice.google.com.af/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ag",
        (a) => N`https://adservice.google.com.ag/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ai",
        (a) => N`https://adservice.google.com.ai/adsid/integrator.${a}`,
      ],
      [
        ".google.al",
        (a) => N`https://adservice.google.al/adsid/integrator.${a}`,
      ],
      [
        ".google.co.ao",
        (a) => N`https://adservice.google.co.ao/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ar",
        (a) => N`https://adservice.google.com.ar/adsid/integrator.${a}`,
      ],
      [
        ".google.as",
        (a) => N`https://adservice.google.as/adsid/integrator.${a}`,
      ],
      [
        ".google.at",
        (a) => N`https://adservice.google.at/adsid/integrator.${a}`,
      ],
      [
        ".google.com.au",
        (a) => N`https://adservice.google.com.au/adsid/integrator.${a}`,
      ],
      [
        ".google.az",
        (a) => N`https://adservice.google.az/adsid/integrator.${a}`,
      ],
      [
        ".google.com.bd",
        (a) => N`https://adservice.google.com.bd/adsid/integrator.${a}`,
      ],
      [
        ".google.be",
        (a) => N`https://adservice.google.be/adsid/integrator.${a}`,
      ],
      [
        ".google.bf",
        (a) => N`https://adservice.google.bf/adsid/integrator.${a}`,
      ],
      [
        ".google.bg",
        (a) => N`https://adservice.google.bg/adsid/integrator.${a}`,
      ],
      [
        ".google.com.bh",
        (a) => N`https://adservice.google.com.bh/adsid/integrator.${a}`,
      ],
      [
        ".google.bi",
        (a) => N`https://adservice.google.bi/adsid/integrator.${a}`,
      ],
      [
        ".google.bj",
        (a) => N`https://adservice.google.bj/adsid/integrator.${a}`,
      ],
      [
        ".google.com.bn",
        (a) => N`https://adservice.google.com.bn/adsid/integrator.${a}`,
      ],
      [
        ".google.com.bo",
        (a) => N`https://adservice.google.com.bo/adsid/integrator.${a}`,
      ],
      [
        ".google.com.br",
        (a) => N`https://adservice.google.com.br/adsid/integrator.${a}`,
      ],
      [
        ".google.bs",
        (a) => N`https://adservice.google.bs/adsid/integrator.${a}`,
      ],
      [
        ".google.bt",
        (a) => N`https://adservice.google.bt/adsid/integrator.${a}`,
      ],
      [
        ".google.co.bw",
        (a) => N`https://adservice.google.co.bw/adsid/integrator.${a}`,
      ],
      [
        ".google.com.bz",
        (a) => N`https://adservice.google.com.bz/adsid/integrator.${a}`,
      ],
      [
        ".google.ca",
        (a) => N`https://adservice.google.ca/adsid/integrator.${a}`,
      ],
      [
        ".google.cd",
        (a) => N`https://adservice.google.cd/adsid/integrator.${a}`,
      ],
      [
        ".google.cf",
        (a) => N`https://adservice.google.cf/adsid/integrator.${a}`,
      ],
      [
        ".google.cg",
        (a) => N`https://adservice.google.cg/adsid/integrator.${a}`,
      ],
      [
        ".google.ch",
        (a) => N`https://adservice.google.ch/adsid/integrator.${a}`,
      ],
      [
        ".google.ci",
        (a) => N`https://adservice.google.ci/adsid/integrator.${a}`,
      ],
      [
        ".google.co.ck",
        (a) => N`https://adservice.google.co.ck/adsid/integrator.${a}`,
      ],
      [
        ".google.cl",
        (a) => N`https://adservice.google.cl/adsid/integrator.${a}`,
      ],
      [
        ".google.cm",
        (a) => N`https://adservice.google.cm/adsid/integrator.${a}`,
      ],
      [
        ".google.com.co",
        (a) => N`https://adservice.google.com.co/adsid/integrator.${a}`,
      ],
      [
        ".google.co.cr",
        (a) => N`https://adservice.google.co.cr/adsid/integrator.${a}`,
      ],
      [
        ".google.com.cu",
        (a) => N`https://adservice.google.com.cu/adsid/integrator.${a}`,
      ],
      [
        ".google.cv",
        (a) => N`https://adservice.google.cv/adsid/integrator.${a}`,
      ],
      [
        ".google.com.cy",
        (a) => N`https://adservice.google.com.cy/adsid/integrator.${a}`,
      ],
      [
        ".google.cz",
        (a) => N`https://adservice.google.cz/adsid/integrator.${a}`,
      ],
      [
        ".google.de",
        (a) => N`https://adservice.google.de/adsid/integrator.${a}`,
      ],
      [
        ".google.dj",
        (a) => N`https://adservice.google.dj/adsid/integrator.${a}`,
      ],
      [
        ".google.dk",
        (a) => N`https://adservice.google.dk/adsid/integrator.${a}`,
      ],
      [
        ".google.dm",
        (a) => N`https://adservice.google.dm/adsid/integrator.${a}`,
      ],
      [
        ".google.dz",
        (a) => N`https://adservice.google.dz/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ec",
        (a) => N`https://adservice.google.com.ec/adsid/integrator.${a}`,
      ],
      [
        ".google.ee",
        (a) => N`https://adservice.google.ee/adsid/integrator.${a}`,
      ],
      [
        ".google.com.eg",
        (a) => N`https://adservice.google.com.eg/adsid/integrator.${a}`,
      ],
      [
        ".google.es",
        (a) => N`https://adservice.google.es/adsid/integrator.${a}`,
      ],
      [
        ".google.com.et",
        (a) => N`https://adservice.google.com.et/adsid/integrator.${a}`,
      ],
      [
        ".google.fi",
        (a) => N`https://adservice.google.fi/adsid/integrator.${a}`,
      ],
      [
        ".google.com.fj",
        (a) => N`https://adservice.google.com.fj/adsid/integrator.${a}`,
      ],
      [
        ".google.fm",
        (a) => N`https://adservice.google.fm/adsid/integrator.${a}`,
      ],
      [
        ".google.fr",
        (a) => N`https://adservice.google.fr/adsid/integrator.${a}`,
      ],
      [
        ".google.ga",
        (a) => N`https://adservice.google.ga/adsid/integrator.${a}`,
      ],
      [
        ".google.ge",
        (a) => N`https://adservice.google.ge/adsid/integrator.${a}`,
      ],
      [
        ".google.gg",
        (a) => N`https://adservice.google.gg/adsid/integrator.${a}`,
      ],
      [
        ".google.com.gh",
        (a) => N`https://adservice.google.com.gh/adsid/integrator.${a}`,
      ],
      [
        ".google.com.gi",
        (a) => N`https://adservice.google.com.gi/adsid/integrator.${a}`,
      ],
      [
        ".google.gl",
        (a) => N`https://adservice.google.gl/adsid/integrator.${a}`,
      ],
      [
        ".google.gm",
        (a) => N`https://adservice.google.gm/adsid/integrator.${a}`,
      ],
      [
        ".google.gr",
        (a) => N`https://adservice.google.gr/adsid/integrator.${a}`,
      ],
      [
        ".google.com.gt",
        (a) => N`https://adservice.google.com.gt/adsid/integrator.${a}`,
      ],
      [
        ".google.gy",
        (a) => N`https://adservice.google.gy/adsid/integrator.${a}`,
      ],
      [
        ".google.com.hk",
        (a) => N`https://adservice.google.com.hk/adsid/integrator.${a}`,
      ],
      [
        ".google.hn",
        (a) => N`https://adservice.google.hn/adsid/integrator.${a}`,
      ],
      [
        ".google.hr",
        (a) => N`https://adservice.google.hr/adsid/integrator.${a}`,
      ],
      [
        ".google.ht",
        (a) => N`https://adservice.google.ht/adsid/integrator.${a}`,
      ],
      [
        ".google.hu",
        (a) => N`https://adservice.google.hu/adsid/integrator.${a}`,
      ],
      [
        ".google.co.id",
        (a) => N`https://adservice.google.co.id/adsid/integrator.${a}`,
      ],
      [
        ".google.ie",
        (a) => N`https://adservice.google.ie/adsid/integrator.${a}`,
      ],
      [
        ".google.co.il",
        (a) => N`https://adservice.google.co.il/adsid/integrator.${a}`,
      ],
      [
        ".google.im",
        (a) => N`https://adservice.google.im/adsid/integrator.${a}`,
      ],
      [
        ".google.co.in",
        (a) => N`https://adservice.google.co.in/adsid/integrator.${a}`,
      ],
      [
        ".google.iq",
        (a) => N`https://adservice.google.iq/adsid/integrator.${a}`,
      ],
      [
        ".google.is",
        (a) => N`https://adservice.google.is/adsid/integrator.${a}`,
      ],
      [
        ".google.it",
        (a) => N`https://adservice.google.it/adsid/integrator.${a}`,
      ],
      [
        ".google.je",
        (a) => N`https://adservice.google.je/adsid/integrator.${a}`,
      ],
      [
        ".google.com.jm",
        (a) => N`https://adservice.google.com.jm/adsid/integrator.${a}`,
      ],
      [
        ".google.jo",
        (a) => N`https://adservice.google.jo/adsid/integrator.${a}`,
      ],
      [
        ".google.co.jp",
        (a) => N`https://adservice.google.co.jp/adsid/integrator.${a}`,
      ],
      [
        ".google.co.ke",
        (a) => N`https://adservice.google.co.ke/adsid/integrator.${a}`,
      ],
      [
        ".google.com.kh",
        (a) => N`https://adservice.google.com.kh/adsid/integrator.${a}`,
      ],
      [
        ".google.ki",
        (a) => N`https://adservice.google.ki/adsid/integrator.${a}`,
      ],
      [
        ".google.kg",
        (a) => N`https://adservice.google.kg/adsid/integrator.${a}`,
      ],
      [
        ".google.co.kr",
        (a) => N`https://adservice.google.co.kr/adsid/integrator.${a}`,
      ],
      [
        ".google.com.kw",
        (a) => N`https://adservice.google.com.kw/adsid/integrator.${a}`,
      ],
      [
        ".google.kz",
        (a) => N`https://adservice.google.kz/adsid/integrator.${a}`,
      ],
      [
        ".google.la",
        (a) => N`https://adservice.google.la/adsid/integrator.${a}`,
      ],
      [
        ".google.com.lb",
        (a) => N`https://adservice.google.com.lb/adsid/integrator.${a}`,
      ],
      [
        ".google.li",
        (a) => N`https://adservice.google.li/adsid/integrator.${a}`,
      ],
      [
        ".google.lk",
        (a) => N`https://adservice.google.lk/adsid/integrator.${a}`,
      ],
      [
        ".google.co.ls",
        (a) => N`https://adservice.google.co.ls/adsid/integrator.${a}`,
      ],
      [
        ".google.lt",
        (a) => N`https://adservice.google.lt/adsid/integrator.${a}`,
      ],
      [
        ".google.lu",
        (a) => N`https://adservice.google.lu/adsid/integrator.${a}`,
      ],
      [
        ".google.lv",
        (a) => N`https://adservice.google.lv/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ly",
        (a) => N`https://adservice.google.com.ly/adsid/integrator.${a}`,
      ],
      [
        ".google.md",
        (a) => N`https://adservice.google.md/adsid/integrator.${a}`,
      ],
      [
        ".google.me",
        (a) => N`https://adservice.google.me/adsid/integrator.${a}`,
      ],
      [
        ".google.mg",
        (a) => N`https://adservice.google.mg/adsid/integrator.${a}`,
      ],
      [
        ".google.mk",
        (a) => N`https://adservice.google.mk/adsid/integrator.${a}`,
      ],
      [
        ".google.ml",
        (a) => N`https://adservice.google.ml/adsid/integrator.${a}`,
      ],
      [
        ".google.com.mm",
        (a) => N`https://adservice.google.com.mm/adsid/integrator.${a}`,
      ],
      [
        ".google.mn",
        (a) => N`https://adservice.google.mn/adsid/integrator.${a}`,
      ],
      [
        ".google.ms",
        (a) => N`https://adservice.google.ms/adsid/integrator.${a}`,
      ],
      [
        ".google.com.mt",
        (a) => N`https://adservice.google.com.mt/adsid/integrator.${a}`,
      ],
      [
        ".google.mu",
        (a) => N`https://adservice.google.mu/adsid/integrator.${a}`,
      ],
      [
        ".google.mv",
        (a) => N`https://adservice.google.mv/adsid/integrator.${a}`,
      ],
      [
        ".google.mw",
        (a) => N`https://adservice.google.mw/adsid/integrator.${a}`,
      ],
      [
        ".google.com.mx",
        (a) => N`https://adservice.google.com.mx/adsid/integrator.${a}`,
      ],
      [
        ".google.com.my",
        (a) => N`https://adservice.google.com.my/adsid/integrator.${a}`,
      ],
      [
        ".google.co.mz",
        (a) => N`https://adservice.google.co.mz/adsid/integrator.${a}`,
      ],
      [
        ".google.com.na",
        (a) => N`https://adservice.google.com.na/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ng",
        (a) => N`https://adservice.google.com.ng/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ni",
        (a) => N`https://adservice.google.com.ni/adsid/integrator.${a}`,
      ],
      [
        ".google.ne",
        (a) => N`https://adservice.google.ne/adsid/integrator.${a}`,
      ],
      [
        ".google.nl",
        (a) => N`https://adservice.google.nl/adsid/integrator.${a}`,
      ],
      [
        ".google.no",
        (a) => N`https://adservice.google.no/adsid/integrator.${a}`,
      ],
      [
        ".google.com.np",
        (a) => N`https://adservice.google.com.np/adsid/integrator.${a}`,
      ],
      [
        ".google.nr",
        (a) => N`https://adservice.google.nr/adsid/integrator.${a}`,
      ],
      [
        ".google.nu",
        (a) => N`https://adservice.google.nu/adsid/integrator.${a}`,
      ],
      [
        ".google.co.nz",
        (a) => N`https://adservice.google.co.nz/adsid/integrator.${a}`,
      ],
      [
        ".google.com.om",
        (a) => N`https://adservice.google.com.om/adsid/integrator.${a}`,
      ],
      [
        ".google.com.pa",
        (a) => N`https://adservice.google.com.pa/adsid/integrator.${a}`,
      ],
      [
        ".google.com.pe",
        (a) => N`https://adservice.google.com.pe/adsid/integrator.${a}`,
      ],
      [
        ".google.com.pg",
        (a) => N`https://adservice.google.com.pg/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ph",
        (a) => N`https://adservice.google.com.ph/adsid/integrator.${a}`,
      ],
      [
        ".google.com.pk",
        (a) => N`https://adservice.google.com.pk/adsid/integrator.${a}`,
      ],
      [
        ".google.pl",
        (a) => N`https://adservice.google.pl/adsid/integrator.${a}`,
      ],
      [
        ".google.pn",
        (a) => N`https://adservice.google.pn/adsid/integrator.${a}`,
      ],
      [
        ".google.com.pr",
        (a) => N`https://adservice.google.com.pr/adsid/integrator.${a}`,
      ],
      [
        ".google.ps",
        (a) => N`https://adservice.google.ps/adsid/integrator.${a}`,
      ],
      [
        ".google.pt",
        (a) => N`https://adservice.google.pt/adsid/integrator.${a}`,
      ],
      [
        ".google.com.py",
        (a) => N`https://adservice.google.com.py/adsid/integrator.${a}`,
      ],
      [
        ".google.com.qa",
        (a) => N`https://adservice.google.com.qa/adsid/integrator.${a}`,
      ],
      [
        ".google.ro",
        (a) => N`https://adservice.google.ro/adsid/integrator.${a}`,
      ],
      [
        ".google.ru",
        (a) => N`https://adservice.google.ru/adsid/integrator.${a}`,
      ],
      [
        ".google.rw",
        (a) => N`https://adservice.google.rw/adsid/integrator.${a}`,
      ],
      [
        ".google.com.sa",
        (a) => N`https://adservice.google.com.sa/adsid/integrator.${a}`,
      ],
      [
        ".google.com.sb",
        (a) => N`https://adservice.google.com.sb/adsid/integrator.${a}`,
      ],
      [
        ".google.sc",
        (a) => N`https://adservice.google.sc/adsid/integrator.${a}`,
      ],
      [
        ".google.se",
        (a) => N`https://adservice.google.se/adsid/integrator.${a}`,
      ],
      [
        ".google.com.sg",
        (a) => N`https://adservice.google.com.sg/adsid/integrator.${a}`,
      ],
      [
        ".google.sh",
        (a) => N`https://adservice.google.sh/adsid/integrator.${a}`,
      ],
      [
        ".google.si",
        (a) => N`https://adservice.google.si/adsid/integrator.${a}`,
      ],
      [
        ".google.sk",
        (a) => N`https://adservice.google.sk/adsid/integrator.${a}`,
      ],
      [
        ".google.sn",
        (a) => N`https://adservice.google.sn/adsid/integrator.${a}`,
      ],
      [
        ".google.so",
        (a) => N`https://adservice.google.so/adsid/integrator.${a}`,
      ],
      [
        ".google.sm",
        (a) => N`https://adservice.google.sm/adsid/integrator.${a}`,
      ],
      [
        ".google.sr",
        (a) => N`https://adservice.google.sr/adsid/integrator.${a}`,
      ],
      [
        ".google.st",
        (a) => N`https://adservice.google.st/adsid/integrator.${a}`,
      ],
      [
        ".google.com.sv",
        (a) => N`https://adservice.google.com.sv/adsid/integrator.${a}`,
      ],
      [
        ".google.td",
        (a) => N`https://adservice.google.td/adsid/integrator.${a}`,
      ],
      [
        ".google.tg",
        (a) => N`https://adservice.google.tg/adsid/integrator.${a}`,
      ],
      [
        ".google.co.th",
        (a) => N`https://adservice.google.co.th/adsid/integrator.${a}`,
      ],
      [
        ".google.com.tj",
        (a) => N`https://adservice.google.com.tj/adsid/integrator.${a}`,
      ],
      [
        ".google.tl",
        (a) => N`https://adservice.google.tl/adsid/integrator.${a}`,
      ],
      [
        ".google.tm",
        (a) => N`https://adservice.google.tm/adsid/integrator.${a}`,
      ],
      [
        ".google.tn",
        (a) => N`https://adservice.google.tn/adsid/integrator.${a}`,
      ],
      [
        ".google.to",
        (a) => N`https://adservice.google.to/adsid/integrator.${a}`,
      ],
      [
        ".google.com.tr",
        (a) => N`https://adservice.google.com.tr/adsid/integrator.${a}`,
      ],
      [
        ".google.tt",
        (a) => N`https://adservice.google.tt/adsid/integrator.${a}`,
      ],
      [
        ".google.com.tw",
        (a) => N`https://adservice.google.com.tw/adsid/integrator.${a}`,
      ],
      [
        ".google.co.tz",
        (a) => N`https://adservice.google.co.tz/adsid/integrator.${a}`,
      ],
      [
        ".google.com.ua",
        (a) => N`https://adservice.google.com.ua/adsid/integrator.${a}`,
      ],
      [
        ".google.co.ug",
        (a) => N`https://adservice.google.co.ug/adsid/integrator.${a}`,
      ],
      [
        ".google.co.uk",
        (a) => N`https://adservice.google.co.uk/adsid/integrator.${a}`,
      ],
      [
        ".google.com.uy",
        (a) => N`https://adservice.google.com.uy/adsid/integrator.${a}`,
      ],
      [
        ".google.co.uz",
        (a) => N`https://adservice.google.co.uz/adsid/integrator.${a}`,
      ],
      [
        ".google.com.vc",
        (a) => N`https://adservice.google.com.vc/adsid/integrator.${a}`,
      ],
      [
        ".google.co.ve",
        (a) => N`https://adservice.google.co.ve/adsid/integrator.${a}`,
      ],
      [
        ".google.vg",
        (a) => N`https://adservice.google.vg/adsid/integrator.${a}`,
      ],
      [
        ".google.co.vi",
        (a) => N`https://adservice.google.co.vi/adsid/integrator.${a}`,
      ],
      [
        ".google.com.vn",
        (a) => N`https://adservice.google.com.vn/adsid/integrator.${a}`,
      ],
      [
        ".google.vu",
        (a) => N`https://adservice.google.vu/adsid/integrator.${a}`,
      ],
      [
        ".google.ws",
        (a) => N`https://adservice.google.ws/adsid/integrator.${a}`,
      ],
      [
        ".google.rs",
        (a) => N`https://adservice.google.rs/adsid/integrator.${a}`,
      ],
      [
        ".google.co.za",
        (a) => N`https://adservice.google.co.za/adsid/integrator.${a}`,
      ],
      [
        ".google.co.zm",
        (a) => N`https://adservice.google.co.zm/adsid/integrator.${a}`,
      ],
      [
        ".google.co.zw",
        (a) => N`https://adservice.google.co.zw/adsid/integrator.${a}`,
      ],
      [
        ".google.cat",
        (a) => N`https://adservice.google.cat/adsid/integrator.${a}`,
      ],
    ].map(([a, b]) => [
      a,
      {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js"),
      },
    ])
  );

  function jB(a, b, c) {
    const d = Hf("LINK", a);
    try {
      (d.rel = "preload"),
        (d.href =
          b instanceof Lc
            ? Oc(b).toString()
            : b instanceof Vc
            ? Wc(b)
            : Wc(ed(b)));
    } catch (e) {
      return;
    }
    d.as = "script";
    c && d.setAttribute("nonce", c);
    if ((a = a.getElementsByTagName("head")[0]))
      try {
        a.appendChild(d);
      } catch (e) {}
  }
  let kB = () => u,
    lB = u;
  const nB = (a) => {
    const b = new Map([["domain", u.location.hostname]]);
    mB[3] >= va() && b.set("adsid", mB[1]);
    return Kg(iB.get(a).js, b);
  };
  let mB, oB;
  const pB = () => {
    lB = kB();
    mB = lB.googleToken = lB.googleToken || {};
    const a = va();
    (mB[1] && mB[3] > a && 0 < mB[2]) ||
      ((mB[1] = ""), (mB[2] = -1), (mB[3] = -1), (mB[4] = ""), (mB[6] = ""));
    oB = lB.googleIMState = lB.googleIMState || {};
    iB.has(oB[1]) || (oB[1] = ".google.com");
    Array.isArray(oB[5]) || (oB[5] = []);
    "boolean" !== typeof oB[6] && (oB[6] = !1);
    Array.isArray(oB[7]) || (oB[7] = []);
    "number" !== typeof oB[8] && (oB[8] = 0);
  };
  var qB = (a) => {
    pB();
    iB.has(a) && (oB[1] = a);
  };
  const rB = {
    Zb: () => 0 < oB[8],
    we: () => {
      oB[8]++;
    },
    xe: () => {
      0 < oB[8] && oB[8]--;
    },
    ye: () => {
      oB[8] = 0;
    },
    ri: () => !1,
    Gc: () => oB[5],
    yc: (a) => {
      try {
        a();
      } catch (b) {
        u.setTimeout(() => {
          throw b;
        }, 0);
      }
    },
    Xc: () => {
      if (!rB.Zb()) {
        var a = u.document,
          b = (e) => {
            e = nB(e);
            a: {
              try {
                var f = Ue();
                break a;
              } catch (g) {}
              f = void 0;
            }
            jB(a, e.toString(), f);
            f = Hf("SCRIPT", a);
            f.type = "text/javascript";
            f.onerror = () => u.processGoogleToken({}, 2);
            he(f, e);
            try {
              (a.head || a.body || a.documentElement).appendChild(f), rB.we();
            } catch (g) {}
          },
          c = oB[1];
        b(c);
        ".google.com" != c && b(".google.com");
        var d = {
          newToken: "FBT",
        };
        u.setTimeout(() => u.processGoogleToken(d, 1), 1e3);
      }
    },
  };

  function sB(a) {
    pB();
    const b = lB.googleToken[5] || 0;
    a && (0 != b || mB[3] >= va() ? rB.yc(a) : (rB.Gc().push(a), rB.Xc()));
    (mB[3] >= va() && mB[2] >= va()) || rB.Xc();
  }
  var uB = (a) => {
    u.processGoogleToken = u.processGoogleToken || ((b, c) => tB(b, c));
    sB(a);
  };
  const tB = (a = {}, b = 0) => {
    var c = a.newToken || "",
      d = "NT" == c,
      e = parseInt(a.freshLifetimeSecs || "", 10),
      f = parseInt(a.validLifetimeSecs || "", 10);
    const g = a["1p_jar"] || "";
    a = a.pucrd || "";
    pB();
    1 == b ? rB.ye() : rB.xe();
    var h = (lB.googleToken = lB.googleToken || {}),
      l =
        0 == b &&
        c &&
        "string" === typeof c &&
        !d &&
        "number" === typeof e &&
        0 < e &&
        "number" === typeof f &&
        0 < f &&
        "string" === typeof g;
    d = d && !rB.Zb() && (!(mB[3] >= va()) || "NT" == mB[1]);
    var k = !(mB[3] >= va()) && 0 != b;
    if (l || d || k)
      (d = va()),
        (e = d + 1e3 * e),
        (f = d + 1e3 * f),
        1e-5 > Math.random() &&
          Dg(
            u,
            "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
              `&err=${b}`
          ),
        (h[5] = b),
        (h[1] = c),
        (h[2] = e),
        (h[3] = f),
        (h[4] = g),
        (h[6] = a),
        pB();
    if (l || !rB.Zb()) {
      b = rB.Gc();
      for (c = 0; c < b.length; c++) rB.yc(b[c]);
      b.length = 0;
    }
  };
  const vB = new Map([
      ["navigate", 1],
      ["reload", 2],
      ["back_forward", 3],
      ["prerender", 4],
    ]),
    wB = new Map([
      [0, 1],
      [1, 2],
      [2, 3],
    ]);

  function xB(a) {
    var b, c, d, e, f, g;
    try {
      const h =
        null ===
          (c =
            null === (b = a.performance) || void 0 === b
              ? void 0
              : b.getEntriesByType("navigation")) || void 0 === c
          ? void 0
          : c[0];
      if (null === h || void 0 === h ? 0 : h.type)
        return null !== (d = vB.get(h.type)) && void 0 !== d ? d : 0;
    } catch (h) {}
    return null !==
      (g = wB.get(
        null ===
          (f =
            null === (e = a.performance) || void 0 === e
              ? void 0
              : e.navigation) || void 0 === f
          ? void 0
          : f.type
      )) && void 0 !== g
      ? g
      : 0;
  }
  var yB = {
      issuerOrigin: "https://attestation.android.com",
      issuancePath: "/att/i",
      redemptionPath: "/att/r",
    },
    Z = {
      issuerOrigin: "https://pagead2.googlesyndication.com",
      issuancePath: "/dtt/i",
      redemptionPath: "/dtt/r",
      getStatePath: "/dtt/s",
    };
  ji(zl).l(vl.j, vl.defaultValue);

  function zB() {
    const a = window.navigator.userAgent,
      b = /Chrome/.test(a);
    return /Android/.test(a) && b;
  }

  function AB(a = window) {
    return !a.PeriodicSyncManager;
  }

  function BB(a, b, c) {
    a = a.goog_tt_state_map;
    let d,
      e = [];
    b && (d = null == a ? void 0 : a.get(yB.issuerOrigin)) && e.push(d);
    c && (d = null == a ? void 0 : a.get(Z.issuerOrigin)) && e.push(d);
    return e;
  }

  function CB(a) {
    return a.some((b) => b.hasRedemptionRecord);
  }

  function DB(a, b, c) {
    return b || ".google.ch" === c || "function" === typeof a.__tcfapi;
  }

  function EB(a, b) {
    a = a.filter((c) => c.hasRedemptionRecord).map((c) => c.issuerOrigin);
    if (0 == a.length) return null;
    a = {
      type: "send-redemption-record",
      issuers: a,
      refreshPolicy: "none",
      signRequestData: X(xl) ? "omit" : "include",
      includeTimestampHeader: !0,
      additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"],
    };
    !X(xl) &&
      b &&
      0 < Object.keys(b).length &&
      (a.additionalSigningData = Jb(JSON.stringify(b)));
    return a;
  }

  function FB(a, b, c) {
    let d;
    const e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
    e && ((e.state = b), void 0 != c && (e.hasRedemptionRecord = c));
  }

  function GB() {
    const a = `${yB.issuerOrigin}${yB.redemptionPath}`,
      b = {
        keepalive: !0,
        trustToken: {
          type: "token-redemption",
          issuer: yB.issuerOrigin,
          refreshPolicy: "none",
        },
      };
    FB(yB.issuerOrigin, 2);
    return window
      .fetch(a, b)
      .then((c) => {
        if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
        FB(yB.issuerOrigin, 6, !0);
      })
      .catch((c) => {
        c && "NoModificationAllowedError" === c.name
          ? FB(yB.issuerOrigin, 6, !0)
          : FB(yB.issuerOrigin, 5);
      });
  }

  function HB() {
    const a = `${yB.issuerOrigin}${yB.issuancePath}`;
    FB(yB.issuerOrigin, 8);
    return window
      .fetch(a, {
        keepalive: !0,
        trustToken: {
          type: "token-request",
        },
      })
      .then((b) => {
        if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
        FB(yB.issuerOrigin, 10);
        return GB();
      })
      .catch((b) => {
        if (b && "NoModificationAllowedError" === b.name)
          return FB(yB.issuerOrigin, 10), GB();
        FB(yB.issuerOrigin, 9);
      });
  }

  function IB() {
    FB(yB.issuerOrigin, 13);
    return document
      .hasTrustToken(yB.issuerOrigin)
      .then((a) => (a ? GB() : HB()));
  }

  function JB() {
    FB(Z.issuerOrigin, 13);
    if (window.Promise) {
      var a = document
        .hasTrustToken(Z.issuerOrigin)
        .then((e) => e)
        .catch((e) =>
          window.Promise.reject({
            state: 19,
            error: e,
          })
        );
      const b = `${Z.issuerOrigin}${Z.redemptionPath}`,
        c = {
          keepalive: !0,
          trustToken: {
            type: "token-redemption",
            refreshPolicy: "none",
          },
        };
      FB(Z.issuerOrigin, 16);
      a = a
        .then((e) =>
          window
            .fetch(b, c)
            .then((f) => {
              if (!f.ok)
                throw Error(`${f.status}: Network response was not ok!`);
              FB(Z.issuerOrigin, 18, !0);
            })
            .catch((f) => {
              if (f && "NoModificationAllowedError" === f.name)
                FB(Z.issuerOrigin, 18, !0);
              else {
                if (e)
                  return window.Promise.reject({
                    state: 17,
                    error: f,
                  });
                FB(Z.issuerOrigin, 17);
              }
            })
        )
        .then(() =>
          document
            .hasTrustToken(Z.issuerOrigin)
            .then((e) => e)
            .catch((e) =>
              window.Promise.reject({
                state: 19,
                error: e,
              })
            )
        )
        .then((e) => {
          const f = `${Z.issuerOrigin}${Z.getStatePath}`;
          FB(Z.issuerOrigin, 20);
          return window
            .fetch(`${f}?ht=${e}`, {
              trustToken: {
                type: "send-redemption-record",
                issuers: [Z.issuerOrigin],
              },
            })
            .then((g) => {
              if (!g.ok)
                throw Error(`${g.status}: Network response was not ok!`);
              FB(Z.issuerOrigin, 22);
              return g.text().then((h) => JSON.parse(h));
            })
            .catch((g) =>
              window.Promise.reject({
                state: 21,
                error: g,
              })
            );
        });
      const d = jg(window);
      return a
        .then((e) => {
          const f = `${Z.issuerOrigin}${Z.issuancePath}`;
          return e && e.srqt && e.cs
            ? (FB(Z.issuerOrigin, 23),
              window
                .fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                  keepalive: !0,
                  trustToken: {
                    type: "token-request",
                  },
                })
                .then((g) => {
                  if (!g.ok)
                    throw Error(`${g.status}: Network response was not ok!`);
                  FB(Z.issuerOrigin, 25);
                  return e;
                })
                .catch((g) =>
                  window.Promise.reject({
                    state: 24,
                    error: g,
                  })
                ))
            : e;
        })
        .then((e) => {
          if (e && e.srdt && e.cs)
            return (
              FB(Z.issuerOrigin, 26),
              window
                .fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                  keepalive: !0,
                  trustToken: {
                    type: "token-redemption",
                    refreshPolicy: "refresh",
                  },
                })
                .then((f) => {
                  if (!f.ok)
                    throw Error(`${f.status}: Network response was not ok!`);
                  FB(Z.issuerOrigin, 28, !0);
                })
                .catch((f) =>
                  window.Promise.reject({
                    state: 27,
                    error: f,
                  })
                )
            );
        })
        .then(() => {
          FB(Z.issuerOrigin, 29);
        })
        .catch((e) => {
          if (
            e instanceof Object &&
            e.hasOwnProperty("state") &&
            e.hasOwnProperty("error")
          )
            if ("number" === typeof e.state && e.error instanceof Error) {
              FB(Z.issuerOrigin, e.state);
              const f = Al(ul);
              Math.random() <= f &&
                Fg(
                  {
                    state: e.state,
                    err: e.error.toString(),
                  },
                  "dtt_err"
                );
            } else throw Error(e);
          else throw e;
        });
    }
  }

  function KB(a) {
    if (document.hasTrustToken && !X(sl) && a.l) {
      var b = window.goog_tt_promise_map;
      if (b && b instanceof Map) {
        var c = [];
        if (a.j.some((d) => d.issuerOrigin === yB.issuerOrigin)) {
          let d = b.get(yB.issuerOrigin);
          d || ((d = IB()), b.set(yB.issuerOrigin, d));
          c.push(d);
        }
        a.j.some((d) => d.issuerOrigin === Z.issuerOrigin) &&
          ((a = b.get(Z.issuerOrigin)),
          a || ((a = JB()), b.set(Z.issuerOrigin, a)),
          c.push(a));
        if (0 < c.length && window.Promise && window.Promise.all)
          return window.Promise.all(c);
      }
    }
  }
  var LB = class extends Us {
    constructor(a, b, c) {
      super();
      this.l = a;
      this.j = [];
      b && zB() && this.j.push(yB);
      c && this.j.push(Z);
      if (document.hasTrustToken && !X(sl)) {
        const d = new Map();
        this.j.forEach((e) => {
          d.set(e.issuerOrigin, {
            issuerOrigin: e.issuerOrigin,
            state: this.l ? 1 : 12,
            hasRedemptionRecord: !1,
          });
        });
        window.goog_tt_state_map =
          window.goog_tt_state_map && window.goog_tt_state_map instanceof Map
            ? new Map([...d, ...window.goog_tt_state_map])
            : d;
        (window.goog_tt_promise_map &&
          window.goog_tt_promise_map instanceof Map) ||
          (window.goog_tt_promise_map = new Map());
      }
    }
  };

  function MB(a) {
    var b;
    if (
      (a =
        null === (b = a.navigator) || void 0 === b ? void 0 : b.userActivation)
    ) {
      var c = 0;
      if (null === a || void 0 === a ? 0 : a.hasBeenActive) c |= 1;
      if (null === a || void 0 === a ? 0 : a.isActive) c |= 2;
      return c;
    }
  }
  const NB = /[+, ]/;
  var QB = (a, b) => {
      const c = a.F;
      var d = R().document,
        e = {},
        f = R(),
        g;
      var h = qg(R());
      var l = Px(h);
      var k = (g = Nx(R(), d, c.google_ad_width, c.google_ad_height));
      l = l.hc;
      var m = R();
      m = m.top == m ? 0 : Cf(m.top) ? 1 : 2;
      let n = 4;
      k || 1 != m
        ? k || 2 != m
          ? k && 1 == m
            ? (n = 7)
            : k && 2 == m && (n = 8)
          : (n = 6)
        : (n = 5);
      l && (n |= 16);
      k = "" + n;
      l = Qx();
      m = !!c.google_page_url;
      e.google_iframing = k;
      0 != l && (e.google_iframing_environment = l);
      if (!m && "ad.yieldmanager.com" == d.domain) {
        for (
          k = d.URL.substring(d.URL.lastIndexOf("http"));
          -1 < k.indexOf("%");

        )
          try {
            k = decodeURIComponent(k);
          } catch (r) {
            break;
          }
        c.google_page_url = k;
        m = !!k;
      }
      m
        ? ((e.google_page_url = c.google_page_url),
          (e.google_page_location = (g ? d.referrer : d.URL) || "EMPTY"))
        : (g &&
          Cf(f.top) &&
          d.referrer &&
          f.top.document.referrer === d.referrer
            ? (e.google_page_url = f.top.document.URL)
            : (e.google_page_url = g ? d.referrer : d.URL),
          (e.google_page_location = null));
      if (d.URL === e.google_page_url)
        try {
          var q = Math.round(Date.parse(d.lastModified) / 1e3) || null;
        } catch (r) {
          q = null;
        }
      else q = null;
      e.google_last_modified_time = q;
      d = h == h.top ? h.document.referrer : ((d = yg()) && d.referrer) || "";
      e.google_referrer_url = d;
      Ox(e, c);
      e = c.google_page_location || c.google_page_url;
      "EMPTY" == e && (e = c.google_page_url);
      e
        ? ((e = e.toString()),
          0 == e.indexOf("http://")
            ? (e = e.substring(7, e.length))
            : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)),
          (d = e.indexOf("/")),
          -1 == d && (d = e.length),
          (e = e.substring(0, d).split(".")),
          (d = !1),
          3 <= e.length && (d = e[e.length - 3] in QA),
          2 <= e.length && (d = d || e[e.length - 2] in QA),
          (e = d))
        : (e = !1);
      e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
      b = OB(a, b);
      d = a.F;
      f = d.google_ad_channel;
      q = "/pagead/ads?";
      "ca-pub-6219811747049371" === d.google_ad_client &&
        PB.test(f) &&
        (q = "/pagead/lopri?");
      a = bh(
        b,
        `https://${e}${q}` +
          (bc(a.X, 9) && c.google_debug_params ? c.google_debug_params : "")
      );
      return (c.google_ad_url = a);
    },
    RB = (a) =>
      encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") +
      "&" +
      ah({
        adk: a.google_ad_unit_key,
        client: a.google_ad_client,
        fa: a.google_reactive_ad_format,
      }),
    SB = (a) => {
      try {
        if (a.parentNode) return a.parentNode;
      } catch (c) {
        return null;
      }
      if (9 === a.nodeType)
        a: {
          try {
            const c = of(a);
            if (c) {
              const d = c.frameElement;
              if (d && Cf(c.parent)) {
                var b = d;
                break a;
              }
            }
          } catch (c) {}
          b = null;
        }
      else b = null;
      return b;
    },
    TB = (a, b) => {
      b.eid = iy(a.pubWin);
      const c = a.F.google_loeid;
      "string" === typeof c && ((a.j |= 4096), (b.loeid = c));
    },
    UB = (a, b) => {
      a =
        (a = Ff(a.pubWin)) && a.document
          ? Xl(a.document, a)
          : new Ye(-12245933, -12245933);
      b.scr_x = Math.round(a.x);
      b.scr_y = Math.round(a.y);
    };
  const VB = (a) => {
    try {
      const b = u.top.location.hash;
      if (b) {
        const c = b.match(a);
        return (c && c[1]) || "";
      }
    } catch (b) {}
    return "";
  };
  var WB = (a) => {
      const b = Fh();
      b && (a.debug_experiment_id = b);
      a.creatives = VB(/\b(?:creatives)=([\d,]+)/);
      a.adgroups = VB(/\b(?:adgroups)=([\d,]+)/);
      a.adgroups &&
        ((a.adtest = "on"),
        (a.disable_budget_throttling = !0),
        (a.use_budget_filtering = !1),
        (a.retrieve_only = !0),
        (a.disable_fcap = !0));
    },
    XB = (a, b, c) => {
      const d = a.F;
      var e = a.pubWin,
        f = a.K,
        g = qg(window);
      b.ref = d.google_referrer_url;
      b.loc = d.google_page_location;
      var h;
      (h = yg(e)) && la(h.data) && "string" === typeof h.data.type
        ? ((h = h.data.type.toLowerCase()),
          (h = "doubleclick" == h || "adsense" == h ? null : h))
        : (h = null);
      h && (b.apn = h.substr(0, 10));
      g = Px(g);
      b.url || b.loc || !g.url || ((b.url = g.url), g.hc || (b.usrc = 1));
      h = d.google_trust_token_additional_signing_data || {};
      h.url = b.url;
      d.google_trust_token_additional_signing_data = h;
      g.url != (b.loc || b.url) && (b.top = g.url);
      0 < Al(uk) && a.Ta && (b.etu = a.Ta);
      0 <= a.B && (b.eae = a.B);
      (c = Ry(d, f, f ? zw(c, f) : null)) && (b.fc = c);
      if (!nh(d)) {
        c = a.pubWin.document;
        g = "";
        if (
          c.documentMode &&
          ((h = yf(new hf(c), "IFRAME")),
          (h.frameBorder = "0"),
          (h.style.height = 0),
          (h.style.width = 0),
          (h.style.position = "absolute"),
          c.body)
        ) {
          c.body.appendChild(h);
          try {
            const Q = h.contentWindow.document;
            Q.open();
            Q.write(ud(Hd));
            Q.close();
            g += Q.documentMode;
          } catch (Q) {}
          c.body.removeChild(h);
        }
        b.docm = g;
      }
      let l, k, m, n, q, r, t, x, H;
      try {
        var B = e.screenX;
        l = e.screenY;
      } catch (Q) {}
      try {
        (k = e.outerWidth), (m = e.outerHeight);
      } catch (Q) {}
      try {
        (n = e.innerWidth), (q = e.innerHeight);
      } catch (Q) {}
      try {
        (r = e.screenLeft), (t = e.screenTop);
      } catch (Q) {}
      try {
        (n = e.innerWidth), (q = e.innerHeight);
      } catch (Q) {}
      try {
        (x = e.screen.availWidth), (H = e.screen.availTop);
      } catch (Q) {}
      b.brdim = [r, t, B, l, x, H, k, m, n, q].join();
      B = 0;
      void 0 === u.postMessage && (B |= 1);
      0 < B && (b.osd = B);
      b.vis = aA(e.document);
      B = a.Y;
      e = Ly(d)
        ? JA
        : xA(
            new HA(
              e,
              B,
              null,
              {
                width: 0,
                height: 0,
              },
              d.google_ad_width,
              d.google_ad_height,
              !1
            )
          );
      b.rsz = e.toString();
      b.abl = kA(e);
      if (!Ly(d) && (e = oh(d))) {
        B = 0;
        a: {
          try {
            {
              var C = d.google_async_iframe_id;
              const Q = R().document;
              if (C) var F = Q.getElementById(C);
              else {
                var I = Q.getElementsByTagName("script"),
                  E = I[I.length - 1];
                F = (E && E.parentNode) || null;
              }
            }
            if ((C = F)) {
              F = [];
              I = 0;
              for (
                var T = Date.now();
                100 >= ++I && 50 > Date.now() - T && (C = SB(C));

              )
                1 === C.nodeType && F.push(C);
              var sa = F;
              b: {
                for (T = 0; T < sa.length; T++) {
                  c: {
                    var O = sa[T];
                    try {
                      if (
                        O.parentNode &&
                        0 < O.offsetWidth &&
                        0 < O.offsetHeight &&
                        O.style &&
                        "none" !== O.style.display &&
                        "hidden" !== O.style.visibility &&
                        (!O.style.opacity || 0 !== Number(O.style.opacity))
                      ) {
                        const Q = O.getBoundingClientRect();
                        var ha = 0 < Q.right && 0 < Q.bottom;
                        break c;
                      }
                    } catch (Q) {}
                    ha = !1;
                  }
                  if (!ha) {
                    var Ma = !1;
                    break b;
                  }
                }
                Ma = !0;
              }
              if (Ma) {
                b: {
                  const Q = Date.now();
                  Ma = /^html|body$/i;
                  ha = /^fixed/i;
                  for (O = 0; O < sa.length && 50 > Date.now() - Q; O++) {
                    const Zc = sa[O];
                    if (
                      !Ma.test(Zc.tagName) &&
                      ha.test(Zc.style.position || Rg(Zc, "position"))
                    ) {
                      var hb = Zc;
                      break b;
                    }
                  }
                  hb = null;
                }
                break a;
              }
            }
          } catch (Q) {}
          hb = null;
        }
        hb &&
          hb.offsetWidth * hb.offsetHeight <= 4 * e.width * e.height &&
          (B = 1);
        b.pfx = B;
      }
      a: {
        if (0.05 > Math.random() && f)
          try {
            const Q = f.document.getElementsByTagName("head")[0];
            var Yb = Q ? ZA(Q) : 0;
            break a;
          } catch (Q) {}
        Yb = 0;
      }
      f = Yb;
      0 !== f && (b.cms = f);
      d.google_lrv !== J(a.X, 2) && (b.alvm = d.google_lrv || "none");
    },
    YB = (a, b) => {
      let c = 0;
      a.location && a.location.ancestorOrigins
        ? (c = a.location.ancestorOrigins.length)
        : Df(
            () => {
              c++;
              return !1;
            },
            !0,
            !0,
            a
          );
      c && (b.nhd = c);
    },
    ZB = (a, b) => {
      const c = uw(b, 8, {});
      b = uw(b, 9, {});
      const d = a.google_ad_section,
        e = a.google_ad_format;
      a = a.google_ad_slot;
      e
        ? (c[d] = c[d] ? c[d] + `,${e}` : e)
        : a && (b[d] = b[d] ? b[d] + `,${a}` : a);
    },
    $B = (a, b, c) => {
      const d = a.F,
        e = a.F;
      b.dt = dm;
      e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
      var f;
      const g = R();
      a: {
        const P = R();
        try {
          const M = P.performance;
          if (M && M.timing && M.now) {
            var h =
              M.timing.navigationStart +
              Math.round(M.now()) -
              M.timing.domLoading;
            break a;
          }
        } catch (M) {}
        h = null;
      }
      const l = h;
      (f = l ? qz(l, g.Date.now() - dm, 1e6) : null) && (b.bdt = f);
      b.idt = qz(a.G, dm);
      const k = a.F;
      b.shv = J(a.X, 2);
      a.Ha && (b.mjsv = a.Ha);
      "sa" == k.google_loader_used
        ? (b.ptt = 5)
        : "aa" == k.google_loader_used && (b.ptt = 9);
      /^\w{1,3}$/.test(k.google_loader_used) &&
        (b.saldr = k.google_loader_used);
      const m = yg(a.pubWin);
      if (m) {
        b.is_amp = 1;
        const P = m || yg();
        b.amp_v = P && P.mode ? +P.mode.version || null : null;
        {
          const U = m || yg();
          if (U && U.container) {
            const fa = U.container.split(","),
              V = [];
            for (let Za = 0; Za < fa.length; Za++) V.push(xg[fa[Za]] || "x");
            var n = V.join();
          } else n = null;
        }
        const M = n;
        M && (b.act = M);
      }
      R() == window.top && (b.abxe = 1);
      if ("_gfp_a_" in a.pubWin) {
        const P = a.pubWin._gfp_a_;
        if ("boolean" !== typeof P)
          throw Error(`Illegal value of ${"_gfp_a_"}: ${P}`);
        if (P) {
          const M = new my(a.pubWin),
            U = jy(M, "__gads", c);
          U && (b.cookie = U);
          if (X(Yk)) {
            const fa = jy(M, "__gpi", c);
            fa && !fa.includes("&") && (b.gpic = fa);
          }
          X(Zk) && "1" === jy(M, "__gpi_opt_out", c) && (b.gpico = "1");
        }
      }
      const q = pw(),
        r = uw(q, 8, {}),
        t = d.google_ad_section;
      r[t] && (b.prev_fmts = r[t]);
      const x = uw(q, 9, {});
      x[t] && (b.prev_slotnames = x[t].toLowerCase());
      ZB(d, q);
      const H = uw(q, 15, 0);
      0 < H && (b.nras = String(H));
      {
        const P = R(),
          M = yg(P);
        if (M) {
          {
            const U = M || yg();
            if (U) {
              let fa = U.pageViewId;
              const V = U.clientId;
              "string" === typeof V &&
                (fa += V.replace(/\D/g, "").substr(0, 6));
              var B = fa;
            } else B = null;
          }
          var C = +B;
        } else {
          var F = qg(P),
            I = F.google_global_correlator;
          I ||
            (F.google_global_correlator = I =
              1 + Math.floor(Math.random() * Math.pow(2, 43)));
          C = I;
        }
      }
      b.correlator = uw(q, 7, C);
      X($k) && (b.rume = 1);
      if (d.google_ad_channel) {
        const P = uw(q, 10, {});
        let M = "";
        const U = d.google_ad_channel.split(NB);
        for (let fa = 0; fa < U.length; fa++) {
          const V = U[fa];
          P[V] ? (M += V + "+") : (P[V] = !0);
        }
        b.pv_ch = M;
      }
      if (d.google_ad_host_channel) {
        var E = uw(q, 11, []);
        const P = d.google_ad_host_channel.split("|");
        let M = -1;
        const U = [];
        for (let V = 0; V < P.length; V++) {
          const Za = P[V].split(NB);
          E[V] || (E[V] = {});
          let tb = "";
          for (let uc = 0; uc < Za.length; uc++) {
            const Jf = Za[uc];
            "" !== Jf && (E[V][Jf] ? (tb += "+" + Jf) : (E[V][Jf] = !0));
          }
          tb = tb.slice(1);
          U[V] = tb;
          "" !== tb && (M = V);
        }
        let fa = "";
        if (-1 < M) {
          for (let V = 0; V < M; V++) fa += U[V] + "|";
          fa += U[M];
        }
        b.pv_h_ch = fa;
      }
      b.frm = d.google_iframing;
      b.ife = d.google_iframing_environment;
      var T = d.google_ad_client;
      try {
        const P = qg(window);
        let M = P.google_prev_clients;
        M || (M = P.google_prev_clients = {});
        if (T in M) var sa = 1;
        else (M[T] = !0), (sa = 2);
      } catch (P) {
        sa = 0;
      }
      b.pv = sa;
      const O = a.pubWin.document,
        ha = a.F;
      var Ma = a.pubWin;
      var hb = O.domain,
        Yb = (A(c, 5) && Aw(Ma) ? Ma.document.cookie : null) || "",
        Q = a.pubWin.screen,
        Zc = O.referrer,
        mC = dh();
      if (yg()) var Yp = R().gaGlobal || {};
      else {
        var Mi = Math.round(new Date().getTime() / 1e3),
          Ni = ha.google_analytics_domain_name,
          Kf = "undefined" == typeof Ni ? bB("auto", hb) : bB(Ni, hb),
          nC = -1 < Yb.indexOf("__utma=" + Kf + "."),
          oC = -1 < Yb.indexOf("__utmb=" + Kf),
          Oi;
        if (!(Oi = (Bg() || R()).gaGlobal)) {
          var pC = {};
          Oi = (Bg() || R()).gaGlobal = pC;
        }
        var ma = Oi,
          Zp = !1;
        if (nC) {
          var Pi = Yb.split("__utma=" + Kf + ".")[1]
            .split(";")[0]
            .split(".");
          oC ? (ma.sid = Pi[3]) : ma.sid || (ma.sid = Mi + "");
          ma.vid = Pi[0] + "." + Pi[1];
          ma.from_cookie = !0;
        } else {
          ma.sid || (ma.sid = Mi + "");
          if (!ma.vid) {
            Zp = !0;
            var qC = Math.round(2147483647 * Math.random()),
              $p = mC;
            let P, M;
            var rC = $A.appName,
              sC = $A.version,
              tC = $A.language ? $A.language : $A.browserLanguage,
              uC = $A.platform,
              vC = $A.userAgent;
            try {
              var aq = $A.javaEnabled();
            } catch (fa) {
              aq = !1;
            }
            let U = [rC, sC, tC, uC, vC, aq ? 1 : 0].join("");
            Q
              ? (U += Q.width + "x" + Q.height + Q.colorDepth)
              : u.java &&
                u.java.awt &&
                ((M = u.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
                (U += M.screen.width + "x" + M.screen.height));
            U = U + Yb + (Zc || "");
            for (P = U.length; 0 < $p; ) U += $p-- ^ P++;
            ma.vid = (qC ^ (aB(U) & 2147483647)) + "." + Mi;
          }
          (X(hl) && ma.from_cookie) || (ma.from_cookie = !1);
        }
        if (!ma.cid) {
          b: {
            var $c = Ni;
            let M = 999;
            $c &&
              (($c = 0 == $c.indexOf(".") ? $c.substr(1) : $c),
              (M = $c.split(".").length));
            let U,
              fa = 999;
            const V = Yb.split(";");
            for (let Za = 0; Za < V.length; Za++) {
              const tb = cB.exec(V[Za]) || dB.exec(V[Za]) || eB.exec(V[Za]);
              if (!tb) continue;
              const uc = tb[1] || 0;
              if (uc == M) {
                var bq = tb[2];
                break b;
              }
              uc < fa && ((fa = uc), (U = tb[2]));
            }
            bq = U;
          }
          const P = bq;
          Zp && P && -1 != P.search(/^\d+\.\d+$/)
            ? ((ma.vid = P), (ma.from_cookie = !0))
            : P != ma.vid && (ma.cid = P);
        }
        ma.dh = Kf;
        ma.hid || (ma.hid = Math.round(2147483647 * Math.random()));
        Yp = ma;
      }
      const Vd = Yp;
      b.ga_vid = Vd.vid;
      b.ga_sid = Vd.sid;
      b.ga_hid = Vd.hid;
      b.ga_fc = Vd.from_cookie;
      b.ga_cid = Vd.cid;
      b.ga_wpids = ha.google_analytics_uacct;
      YB(a.pubWin, b);
      const Qi = d.google_ad_layout;
      Qi && 0 <= iz[Qi] && (b.rplot = iz[Qi]);
    };
  const aC = (a, b) => {
    a = a.A;
    var c;
    (c = null == a ? 0 : A(a, 6)) || ((c = pw()), (c = uw(c, 26, void 0)));
    c && (b.npa = 1);
    a &&
      (Xb(a, 3) && (b.gdpr = A(a, 3) ? "1" : "0"),
      (c = y(a, 1)) && (b.us_privacy = c),
      (c = y(a, 2)) && (b.gdpr_consent = c),
      (c = y(a, 4)) && (b.addtl_consent = c),
      (a = y(a, 7)) && (b.tcfe = a));
  };
  var bC = (a, b) => {
      const c = a.F;
      aC(a, b);
      Mf(Pv, (d, e) => {
        b[d] = c[e];
      });
      Ly(c) && ((a = Zy(c)), (b.fa = a));
      b.pi ||
        null == c.google_ad_slot ||
        ((a = Qo(c)), null != a.j && ((a = fn(a.j.value)), (b.pi = a)));
    },
    cC = (a, b) => {
      var c = Ag() || Vl(a.pubWin.top);
      c && ((b.biw = c.width), (b.bih = c.height));
      c = a.pubWin;
      c !== c.top &&
        (a = Vl(a.pubWin)) &&
        ((b.isw = a.width), (b.ish = a.height));
    },
    dC = (a, b) => {
      var c = a.pubWin;
      null !== c && c != c.top
        ? ((a = [c.document.URL]),
          c.name && a.push(c.name),
          (c = Vl(c, !1)),
          a.push(c.width.toString()),
          a.push(c.height.toString()),
          (a = Of(a.join(""))))
        : (a = 0);
      0 !== a && (b.ifk = a);
    },
    eC = (a, b) => {
      (a = ww()[a.F.google_ad_client]) && (b.psts = a.join());
    },
    fC = (a, b, c) => {
      a: {
        c = zw(c, a.pubWin);
        let d = -1;
        try {
          c && (d = parseInt(c.getItem("goog_pem_mod"), 10));
        } catch (e) {
          c = null;
          break a;
        }
        c = 0 <= d && 1e3 > d ? d : null;
      }
      b.pem = c;
      X(Pk) && (a = a.pubWin.tmod) && (b.tmod = a);
    },
    gC = (a, b) => {
      (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Jb(a));
    },
    hC = (a, b) => {
      const c = X(AB(window) ? rl : ql),
        d = X(tl);
      (a = BB(a.pubWin, c, d)) &&
        0 < a.length &&
        (b.tt_state = Jb(JSON.stringify(a)));
    },
    iC = (a, b) => {
      if ((a = a.F.google_floc)) (b.floc_id = a.id), (b.floc_ver = a.version);
    },
    jC = (a, b) => {
      try {
        const d =
          a.pubWin &&
          a.pubWin.external &&
          a.pubWin.external.getHostEnvironmentValue &&
          a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
        if (d) {
          var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
          0 <= c && (b.wsm = c + 1);
        }
      } catch (d) {}
    };

  function kC(a, b) {
    0 <= a.F.google_ad_public_floor && (b.pubf = a.F.google_ad_public_floor);
    0 <= a.F.google_ad_private_floor && (b.pvtf = a.F.google_ad_private_floor);
  }

  function lC(a, b) {
    if (X(Rk))
      if (new Set(["e", "pg", "t", "ma"]).has(a.F.google_max_ad_content_rating))
        b.macr = a.F.google_max_ad_content_rating;
      else
        throw Error(
          `Illegal value of ${"google_max_ad_content_rating"}: ${
            a.F.google_max_ad_content_rating
          }`
        );
  }
  var OB = (a, b) => {
    const c = {};
    bC(a, c);
    pB();
    c.adsid = mB[1];
    pB();
    c.pucrd = mB[6];
    gC(a, c);
    hC(a, c);
    iC(a, c);
    $B(a, c, b);
    gh(c);
    c.u_sd = Wl(a.pubWin);
    var d;
    c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
    xi(889, () => {
      if (null == a.K) (c.adx = -12245933), (c.ady = -12245933);
      else {
        var e = Rx(a.K, a.Y);
        (c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady) ||
          ((c.adx = Math.round(e.x)), (c.ady = Math.round(e.y)));
        Yl(a.Y) || ((c.adx = -12245933), (c.ady = -12245933), (a.j |= 32768));
      }
    });
    cC(a, c);
    dC(a, c);
    UB(a, c);
    TB(a, c);
    a.D && (c.oid = a.D);
    eC(a, c);
    c.pvsid = jg(a.pubWin, wi);
    fC(a, c, b);
    jC(a, c);
    X(wk) && (c.uas = MB(a.pubWin));
    X(vk) && ((d = xB(a.pubWin)), 0 !== d && (c.nvt = d));
    a.C && (c.scar = a.C);
    XB(a, c, b);
    c.fu = a.j;
    c.bc = hB();
    pB();
    c.jar = mB[4];
    bc(a.X, 9) && WB(c);
    Si() && (c.atl = !0);
    kC(a, c);
    a.F.google_max_ad_content_rating && lC(a, c);
    return c;
  };
  const PB = /YtLoPri/;

  function wC(a) {
    wi.Nb = (b) => {
      b.shv = String(a);
      b.mjsv = "m202201110101";
      b.eid = iy(u);
    };
  }

  function xC(a) {
    wC(J(a, 2));
    a = bc(a, 6);
    Xh(ay, Zh);
    ay = a;
  }

  function yC({ Nd: a, Fe: b }) {
    return a || ("dev" === b ? "dev" : "");
  }
  var zC = "undefined" === typeof sttc ? void 0 : sttc;

  function AC(a) {
    var b = wi;
    try {
      return Xh(a, Yh), new Jx(JSON.parse(a));
    } catch (c) {
      b.ua(838, c instanceof Error ? c : Error(String(c)), void 0, (d) => {
        d.jspb = String(a);
      });
    }
    return new Jx();
  }
  ji(zl).l(cl.j, cl.defaultValue);

  function BC(a, b, c, d) {
    var e, f, g, h, l, k, m;
    const n = new xq();
    let q = "";
    const r = (t) => {
      try {
        const x = "object" === typeof t.data ? t.data : JSON.parse(t.data);
        q === x.paw_id &&
          (te(a, "message", r),
          x.error ? n.j(Error(x.error)) : n.resolve(d(x)));
      } catch (x) {}
    };
    return "function" ===
      typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo)
      ? (K(a, "message", r), (q = c(a.gmaSdk)), n.promise)
      : "function" ===
          typeof (null ===
            (h =
              null ===
                (g =
                  null === (f = a.webkit) || void 0 === f
                    ? void 0
                    : f.messageHandlers) || void 0 === g
                ? void 0
                : g.getGmaQueryInfo) || void 0 === h
            ? void 0
            : h.postMessage) ||
        "function" ===
          typeof (null ===
            (m =
              null ===
                (k =
                  null === (l = a.webkit) || void 0 === l
                    ? void 0
                    : l.messageHandlers) || void 0 === k
                ? void 0
                : k.getGmaSig) || void 0 === m
            ? void 0
            : m.postMessage)
      ? ((q = String(Math.floor(2147483647 * Lf()))),
        K(a, "message", r),
        b(a.webkit.messageHandlers, q),
        n.promise)
      : null;
  }

  function CC(a) {
    return BC(
      a,
      (b, c) => {
        var d;
        return void (
          null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig
        ).postMessage(c);
      },
      (b) => b.getQueryInfo(),
      (b) => b.signal
    );
  }

  function DC(a) {
    if (a.j) return a.j;
    a.j = bg(a.l, "__uspapiLocator");
    return a.j;
  }

  function EC(a) {
    var b;
    return (
      "function" ===
        typeof (null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) ||
      null != DC(a)
    );
  }

  function FC(a, b) {
    var c;
    if (
      "function" ===
      typeof (null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi)
    )
      (a = a.l.__uspapi), a("getUSPData", 1, b);
    else if (DC(a)) {
      GC(a);
      const d = ++a.D;
      a.C[d] = b;
      a.j &&
        a.j.postMessage(
          {
            __uspapiCall: {
              command: "getUSPData",
              version: 1,
              callId: d,
            },
          },
          "*"
        );
    }
  }

  function HC(a, b) {
    let c = {};
    if (EC(a)) {
      var d = ne(() => b(c));
      FC(a, (e, f) => {
        f && (c = e);
        d();
      });
      setTimeout(d, 500);
    } else b(c);
  }

  function GC(a) {
    a.A ||
      ((a.A = (b) => {
        var c;
        try {
          let e = {};
          "string" === typeof b.data ? (e = JSON.parse(b.data)) : (e = b.data);
          var d = e.__uspapiReturn;
          null === (c = a.C) || void 0 === c
            ? void 0
            : c[d.callId](d.returnValue, d.success);
        } catch (e) {}
      }),
      K(a.l, "message", a.A));
  }
  var IC = class extends Us {
    constructor(a) {
      super();
      this.l = a;
      this.j = null;
      this.C = {};
      this.D = 0;
      this.A = null;
    }
    B() {
      this.C = {};
      this.A && (te(this.l, "message", this.A), delete this.A);
      delete this.C;
      delete this.l;
      delete this.j;
      super.B();
    }
  };
  var JC = class extends w {
    constructor(a) {
      super(a);
    }
  };
  var LC = class extends w {
      constructor(a) {
        super(a, -1, KC);
      }
    },
    KC = [1, 2];
  var MC = class extends w {
    constructor(a) {
      super(a);
    }
  };
  var NC = class extends w {
    constructor(a) {
      super(a);
    }
  };

  function OC(a) {
    a.D ||
      (a.j || (a.j = a.l.googlefc ? a.l : bg(a.l, "googlefcPresent")),
      (a.D = !0));
    return !!a.j;
  }

  function PC(a) {
    a.A ||
      ((a.A = (b) => {
        try {
          const c = lc(NC, b.data.__fciReturn);
          (0, a.C[y(c, 1)])(c);
        } catch (c) {}
      }),
      K(a.l, "message", a.A));
  }

  function QC(a, b, c) {
    if (OC(a))
      if (a.j === a.l)
        (a = a.j.googlefc || (a.j.googlefc = {})),
          (a.__fci = a.__fci || []),
          a.__fci.push(b, (d) => {
            c(lc(NC, d));
          });
      else {
        PC(a);
        const d = a.G++;
        a.C[d] = c;
        a.j.postMessage(
          {
            __fciCall: {
              command: b,
              callId: d,
            },
          },
          "*"
        );
      }
  }

  function RC(a, b) {
    return new Promise((c) => {
      QC(a, b, c);
    });
  }
  var SC = class extends Us {
      constructor(a) {
        super();
        this.l = a;
        this.A = this.j = null;
        this.C = {};
        this.G = 0;
        this.D = !1;
      }
    },
    TC = (a, b, c, d) => {
      if (!b) return Promise.resolve(null);
      const e = D(b, JC, 3);
      b = D(b, MC, 2);
      return e && b && 1 === y(b, 1) && 2 === y(e, 1)
        ? RC(a, "getM25Consent").then((f) => {
            var g = D(f, LC, 4);
            if (g) {
              if (((f = d), c)) {
                const h = Zb(g, 1);
                h && h.includes(c) && (f = !1);
                (g = Zb(g, 2)) && g.includes(c) && (f = !0);
              }
            } else f = null;
            return f;
          })
        : Promise.resolve(null);
    };
  const UC = (a, b) => {
    try {
      var c, d;
      const l = void 0 === bc(b, 6) ? !0 : bc(b, 6);
      a: switch (ac(b, 4, 0)) {
        case 1:
          var e = "pt";
          break a;
        case 2:
          e = "cr";
          break a;
        default:
          e = "";
      }
      var f = new Fe(De(ac(b, 2, 0)), J(b, 3), e),
        g =
          null !==
            (d =
              null === (c = D(b, Ce, 5)) || void 0 === c ? void 0 : J(c, 1)) &&
          void 0 !== d
            ? d
            : "";
      f.Ya = g;
      f.j = l;
      f.win = a;
      var h = f.build();
      xe(h);
    } catch (l) {}
  };

  function VC(a, b) {
    a.goog_sdr_l ||
      (Object.defineProperty(a, "goog_sdr_l", {
        value: !0,
      }),
      "complete" === a.document.readyState
        ? UC(a, b)
        : K(a, "load", () => void UC(a, b)));
  }

  function WC(a) {
    var b, c;
    try {
      return (
        null !==
          (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) &&
        void 0 !== c
          ? c
          : {}
      ).google_ads_top_frame;
    } catch (d) {}
    return null;
  }

  function XC(a) {
    const b = RegExp("^https?://[^/#?]+/?$");
    return !!a && !b.test(a);
  }

  function YC(a) {
    if (a === a.top || Cf(a.top))
      return Promise.resolve({
        status: 4,
      });
    const b = WC(a);
    if (!b)
      return Promise.resolve({
        status: 2,
      });
    if (a.parent === a.top && XC(a.document.referrer))
      return Promise.resolve({
        status: 3,
      });
    const c = new xq();
    a = new MessageChannel();
    a.port1.onmessage = (d) => {
      "__goog_top_url_resp" === d.data.msgType &&
        c.resolve({
          Ta: d.data.topUrl,
          status: d.data.topUrl ? 0 : 1,
        });
    };
    b.postMessage(
      {
        msgType: "__goog_top_url_req",
      },
      "*",
      [a.port2]
    );
    return c.promise;
  }

  function ZC(a, b) {
    const c = a.document.getElementById(b.google_async_iframe_id + "_anchor");
    a = a.document.getElementById(b.google_async_iframe_id + "_expand");
    if (null == c || null == a) throw Error("no_ins");
    return {
      Y: c,
      ba: a,
    };
  }
  async function $C({ X: a, $: b, Ha: c, slot: d }) {
    const e = d.vars,
      { Y: f, ba: g } = ZC(d.pubWin, d.vars),
      h = Ff(d.pubWin),
      l = new Kx({
        K: h,
        pubWin: d.pubWin,
        F: e,
        X: a,
        $: b,
        Ha: c,
        Y: f,
        ba: g,
      });
    l.G = Date.now();
    Ui(1, [l.F]);
    try {
      await aD(l);
    } catch (k) {
      if (!zi(159, k)) throw k;
    }
    xi(639, () => {
      {
        var k = l.F;
        const n = l.K;
        if (
          n &&
          1 === k.google_responsive_auto_format &&
          !0 === k.google_full_width_responsive_allowed
        ) {
          var m;
          (m = (m = n.document.getElementById(k.google_async_iframe_id))
            ? wf(m, "INS", "adsbygoogle")
            : null)
            ? ((k = new pz(n, m, k)),
              (k.l = u.setInterval(ta(k.G, k), 500)),
              k.G(),
              (k = !0))
            : (k = !1);
        } else k = !1;
      }
      return k;
    });
    xi(914, () => {
      h && Fx(h, d.vars, a, d.vars.google_ad_client);
    });
    return l;
  }

  function aD(a) {
    if (/_sdo/.test(a.F.google_ad_format)) return Promise.resolve();
    var b = pw(),
      c = uw(b, 22, !1);
    c || (b.S[sw(22)] = !0);
    c ||
      ((c = a.F),
      (b = a.X),
      ji(vi).j(13),
      ji(vi).j(11),
      (c = Nv(c)),
      (b = J(b, 10)) && c.push(b));
    b = pw();
    (c = uw(b, 23, !1)) || (b.S[sw(23)] = !0);
    if (!c) {
      b = D(a.X, Hw, 5) || new Hw();
      b = new Iw(a.pubWin, a.F.google_ad_client, b, bc(a.X, 6));
      c = X(Vk);
      b.l = c;
      const e = D(b.C, Fj, 1);
      if (b.l) {
        c = b.j;
        if (b.B && !Ns(e)) {
          var d = new nw();
          d = z(d, 1, 1);
        } else d = null;
        if (d) {
          d = kc(d);
          try {
            c.localStorage.setItem("google_auto_fc_cmp_setting", d);
          } catch (f) {}
        }
      }
      e && Os(new Ps(b.j, new ht(b.j, b.A), e, new ur(b.j)));
    }
    b = !yg() && !Pa();
    return !b || (b && !bD(a)) ? cD(a) : Promise.resolve();
  }

  function dD(a, b, c = !1) {
    b = Rx(a.K, b);
    const d = Ag() || Vl(a.pubWin.top);
    if (
      !b ||
      -12245933 == b.y ||
      -12245933 == d.width ||
      -12245933 == d.height ||
      !d.height
    )
      return 0;
    let e = 0;
    try {
      const f = a.pubWin.top;
      e = Xl(f.document, f).y;
    } catch (f) {
      return 0;
    }
    a = e + d.height;
    return b.y < e
      ? c
        ? 0
        : (e - b.y) / d.height
      : b.y > a
      ? (b.y - a) / d.height
      : 0;
  }

  function bD(a) {
    return eD(a) || fD(a);
  }

  function eD(a) {
    const b = a.F;
    if (!b.google_pause_ad_requests) return !1;
    const c = u.setTimeout(() => {
        S("abg:cmppar", {
          client: a.F.google_ad_client,
          url: a.F.google_page_url,
        });
      }, 1e4),
      d = yi(450, () => {
        b.google_pause_ad_requests = !1;
        u.clearTimeout(c);
        a.pubWin.removeEventListener(
          "adsbygoogle-pub-unpause-ad-requests-event",
          d
        );
        bD(a) || cD(a);
      });
    a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
    return !0;
  }

  function fD(a) {
    const b = a.pubWin.document,
      c = gD();
    if (0 > c.hidden && 0 > c.visible) return !1;
    const d = a.Y,
      e = bA(b);
    if (!e) return !1;
    if (!cA(b)) return hD(a, c.visible, d);
    const f = 3 === aA(b);
    if (dD(a, d) <= c.hidden && !f) return !1;
    let g = yi(332, () => {
      !cA(b) && g && (te(b, e, g), hD(a, c.visible, d) || cD(a), (g = null));
    });
    return K(b, e, g);
  }

  function gD() {
    const a = {
      hidden: 0,
      visible: 3,
    };
    u.IntersectionObserver || (a.visible = -1);
    zf() && (a.visible *= 2);
    return a;
  }

  function hD(a, b, c) {
    if (!c || 0 > b) return !1;
    var d = a.F;
    if (
      (!Jl(d.google_reactive_ad_format) &&
        (Ly(d) || d.google_reactive_ads_config)) ||
      !Yl(c) ||
      dD(a, c) <= b
    )
      return !1;
    var e = pw();
    const f = uw(e, 8, {});
    e = uw(e, 9, {});
    d = d.google_ad_section || d.google_ad_region || "";
    const g = !!a.pubWin.google_apltlad;
    if (!f[d] && !e[d] && !g) return !1;
    b = new u.IntersectionObserver(
      (h, l) => {
        Ya(h, (k) => {
          0 >= k.intersectionRatio ||
            (l.unobserve(k.target),
            xi(294, () => {
              cD(a);
            }));
        });
      },
      {
        rootMargin: 100 * b + "%",
      }
    );
    a.H = b;
    b.observe(c);
    return !0;
  }
  async function cD(a) {
    xi(326, () => {
      if (1 === fh(a.F)) {
        var c = X(pl),
          d = c || X(ol),
          e = a.pubWin;
        if (d && e === a.K) {
          var f = new Ji();
          d = new Ki();
          f.setCorrelator(jg(a.pubWin));
          var g = iy(a.pubWin);
          dc(f, 5, g, "");
          pc(f, 2);
          gc(d, 1, f);
          g = new Ii();
          g = oc(g, 10, !0);
          f = X(dl);
          g = oc(g, 8, f);
          f = X(el);
          g = oc(g, 9, f);
          f = X(kl);
          g = oc(g, 7, f);
          f = X(jl);
          g = oc(g, 13, f);
          f = X(ll);
          g = oc(g, 14, f);
          gc(d, 2, g);
          e.google_rum_config = d.toJSON();
          Gf(e.document, $d(bc(a.X, 9) && c ? a.$.ue : a.$.ve));
        } else Nh();
      }
    });
    try {
      await iD(a);
    } catch (c) {
      zi(827, c);
    }
    a.F.google_ad_channel = jD(a, a.F.google_ad_channel);
    a.F.google_tag_partner = kD(a, a.F.google_tag_partner);
    lD(a);
    const b = a.F.google_start_time;
    "number" === typeof b && ((dm = b), (a.F.google_start_time = null));
    Mx(a);
    mD(a);
    Ly(a.F) &&
      (Wx() && (a.F.google_adtest = a.F.google_adtest || "on"),
      (a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3));
    nD(a.K);
    return oD(a);
  }

  function mD(a) {
    a.K &&
      (Py(a.K, a.$.Pd),
      Ny(a.K.location) &&
        Yy(a.K, {
          enable_page_level_ads: {
            pltais: !0,
          },
          google_ad_client: a.F.google_ad_client,
        }));
  }

  function jD(a, b) {
    return (b ? [b] : []).concat(Mv(a.F).ad_channels || []).join("+");
  }

  function kD(a, b) {
    return (b ? [b] : []).concat(Mv(a.F).tag_partners || []).join("+");
  }

  function pD(a, b, c, d) {
    c.src = rz(a);
    const e = d.pubWin.document;
    a = R() == window.top;
    c = qD(c);
    a && d.l.push(Cg(d.pubWin, c));
    rD(d.Y, c);
    X(ok) &&
      u.setTimeout(
        yi(644, () => {
          const f = e.getElementById(b);
          lg(f, () => {
            u.setTimeout(() => {
              for (const g of d.l) g();
              d.l.length = 0;
            }, 200);
          });
        }),
        0
      );
    return Promise.resolve(c);
  }

  function qD(a) {
    const b = Hf("IFRAME");
    Mf(a, (c, d) => {
      null != c && b.setAttribute(d, c);
    });
    return b;
  }

  function sD(a, b, c) {
    return 9 == a.F.google_reactive_ad_format &&
      wf(a.ba, null, "fsi_container", void 0)
      ? (a.Y.appendChild(b), Promise.resolve(b))
      : Wy(a.$.Wc, 525, (d) => {
          a.Y.appendChild(b);
          d.createAdSlot(a.K, a.F, b, a.ba.parentElement, zw(c, a.pubWin));
          return b;
        });
  }

  function tD(a, b, c) {
    VC(
      a.pubWin,
      oc(
        ze(
          pc(pc(ye(new Ae(), Be(new Ce(), String(jg(a.pubWin)))), 4), 2),
          J(a.X, 2)
        ),
        6,
        !0
      )
    );
    const d = a.K;
    a.F.google_acr && a.F.google_acr(b);
    K(b, "load", () => {
      b && b.setAttribute("data-load-complete", !0);
      const f = d ? Mv(d).enable_overlap_observer || !1 : !1;
      (a.F.ovlp || X(Uk) || f) && d && d === a.pubWin && uD(d, a, a.ba, b);
    });
    var e = (f) => {
      f &&
        a.l.push(() => {
          f.da();
        });
    };
    vD(a, b);
    X(Zk) && wD(a, b);
    !d ||
      (Ly(a.F) && !$y(a.F)) ||
      (e(new Gz(a, b)),
      e(new PA(d, b, a.F)),
      e(new Kz(a, b)),
      e(new Dz(a, b)),
      e(d.IntersectionObserver ? null : new Fz(d, b, a.Y)));
    d &&
      (e(new xz(d, b)),
      a.l.push(jz(d, a.F)),
      ji(oz).init(d),
      a.l.push(tz(d, a.ba, b)));
    b && b.setAttribute("data-google-container-id", c);
    c = a.F.iaaso;
    if (null != c) {
      e = a.ba;
      const f = e.parentElement;
      (f && Hn.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c);
    }
    c = a.ba;
    c.setAttribute("tabindex", "0");
    c.setAttribute("title", "Advertisement");
    c.setAttribute("aria-label", "Advertisement");
    xD(a);
  }

  function vD(a, b) {
    const c = a.pubWin,
      d = a.F.google_ad_client,
      e = ww();
    let f = null;
    const g = Ci(c, "pvt", (h, l) => {
      "string" === typeof h.token &&
        l.source === b.contentWindow &&
        ((f = h.token),
        g(),
        (e[d] = e[d] || []),
        e[d].push(f),
        100 < e[d].length && e[d].shift());
    });
    a.l.push(g);
  }

  function yD(a, b) {
    var c = jy(a, "__gpi_opt_out", b.A);
    c &&
      ((c = Le(
        Ke(Je(Ie(new Me(), c), 2147483647), "/"),
        Bf(b.F.google_page_url.match(Af)[3] || null)
      )),
      ky(a, "__gpi_opt_out", c, b.A));
  }

  function wD(a, b) {
    const c = Ci(a.pubWin, "gpi-uoo", (d, e) => {
      if (e.source === b.contentWindow) {
        e = Le(
          Ke(Je(Ie(new Me(), d.userOptOut ? "1" : "0"), 2147483647), "/"),
          Bf(a.F.google_page_url.match(Af)[3] || null)
        );
        var f = new my(a.pubWin);
        ky(f, "__gpi_opt_out", e, a.A);
        if (d.userOptOut || d.clearAdsData)
          ly(f, "__gads", a.A), ly(f, "__gpi", a.A);
      }
    });
    a.l.push(c);
  }

  function xD(a) {
    const b = yg(a.pubWin);
    if (b)
      if ("AMP-STICKY-AD" === b.container) {
        const c = (d) => {
          "fill_sticky" === d.data && b.renderStart && b.renderStart();
        };
        K(a.pubWin, "message", yi(616, c));
        a.l.push(() => {
          te(a.pubWin, "message", c);
        });
      } else b.renderStart && b.renderStart();
  }

  function uD(a, b, c, d) {
    Qz(new Zz(a, void 0), c)
      .then((e) => {
        Ui(8, [e]);
        return e;
      })
      .then((e) => {
        const f = c.parentElement;
        (f && Hn.test(f.className) ? f : c).setAttribute(
          "data-overlap-observer-io",
          e.isOverlappingOrOutsideViewport
        );
        return e;
      })
      .then((e) => {
        const f = b.F.armr || "",
          g = e.executionTime || "",
          h = null == b.F.iaaso ? "" : Number(b.F.iaaso),
          l = Number(e.isOverlappingOrOutsideViewport),
          k = ab(
            e.entries,
            (H) =>
              `${H.overlapType}:${H.overlapDepth}:${H.overlapDetectionPoint}`
          ),
          m = Number(e.overlappedArea.toFixed(2)),
          n = d.dataset.googleQueryId || "",
          q = m * e.targetRect.width * e.targetRect.height,
          r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
          t = hh(e.target),
          x = [
            e.targetRect.left,
            e.targetRect.top,
            e.targetRect.right,
            e.targetRect.bottom,
          ].join();
        e = e.viewportSize.width + "x" + e.viewportSize.height;
        S(
          "ovlp",
          {
            adf: b.F.google_ad_dom_fingerprint,
            armr: f,
            client: b.F.google_ad_client,
            eid: iy(b.F),
            et: g,
            fwrattr: b.F.google_full_width_responsive,
            iaaso: h,
            io: l,
            saldr: b.F.google_loader_used,
            oa: m,
            oe: k.join(","),
            qid: n,
            rafmt: b.F.google_responsive_auto_format,
            roa: q,
            slot: b.F.google_ad_slot,
            sp: r,
            tgt: t,
            tr: x,
            url: b.F.google_page_url,
            vp: e,
          },
          1
        );
      })
      .catch((e) => {
        Ui(8, ["Error:", e.message, c]);
        S(
          "ovlp-err",
          {
            err: e.message,
          },
          1
        );
      });
  }

  function zD(a, b) {
    b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a;
  }

  function AD(a) {
    var b = v("Edge") ? 4e3 : 8100;
    var c = a;
    c.length > b &&
      ((c = c.substring(0, b - 8)),
      (c = c.replace(/%\w?$/, "")),
      (c = c.replace(/&[^=]*=?$/, "")),
      (c += "&trunc=1"));
    if (c !== a) {
      b -= 8;
      let d = a.lastIndexOf("&", b);
      -1 === d && (d = a.lastIndexOf("?", b));
      S(
        "trn",
        {
          ol: a.length,
          tr: -1 === d ? "" : a.substring(d + 1),
          url: a,
        },
        0.01
      );
    }
    return c;
  }

  function BD(a, b, c) {
    var d = b,
      e = 0 === a.B;
    b = a.F;
    const f = b.google_async_iframe_id,
      g = b.google_ad_width,
      h = b.google_ad_height,
      l = az(b);
    var k = {
      id: f,
      name: f,
    };
    l ||
      (k.style =
        "left:0;position:absolute;top:0;border:0;" +
        `width:${g}px;` +
        `height:${h}px;`);
    var m = $f();
    if (
      m["allow-top-navigation-by-user-activation"] &&
      m["allow-popups-to-escape-sandbox"]
    ) {
      m = d;
      if ((d = "fsb=" + encodeURIComponent("1"))) {
        var n = m.indexOf("#");
        0 > n && (n = m.length);
        var q = m.indexOf("?");
        if (0 > q || q > n) {
          q = n;
          var r = "";
        } else r = m.substring(q + 1, n);
        m = [m.substr(0, q), r, m.substr(n)];
        n = m[1];
        m[1] = d ? (n ? n + "&" + d : d) : n;
        d = m[0] + (m[1] ? "?" + m[1] : "") + m[2];
      } else d = m;
      k.sandbox = Zf().join(" ");
    }
    X(Ck) && !1 === b.google_video_play_muted && zD("autoplay", k);
    n = d;
    d = AD(d);
    q = e ? d.replace(/&ea=[^&]*/, "") + "&ea=0" : d;
    m = l ? d : rz(q);
    null != g && (k.width = String(g));
    null != h && (k.height = String(h));
    k.frameborder = "0";
    X(Xk) || (k.src = m);
    k.marginwidth = "0";
    k.marginheight = "0";
    k.vspace = "0";
    k.hspace = "0";
    k.allowtransparency = "true";
    k.scrolling = "no";
    k.allowfullscreen = "true";
    m = "";
    if (e) {
      m = 10;
      for (q = ""; 0 < m--; )
        q +=
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(
            Math.floor(62 * Math.random())
          );
      m = q;
      d = Bi(d, m);
      Bi(n, m);
    } else d = q;
    b.dash && (k.srcdoc = b.dash);
    n = X(AB(window) ? rl : ql);
    q = X(tl);
    n = BB(a.pubWin, n, q);
    q = b.google_trust_token_additional_signing_data;
    n && CB(n) && (n = EB(n, q)) && (k.trustToken = JSON.stringify(n));
    var t;
    n =
      (n = window.navigator.userAgent.match(/Chrome\/([0-9]+)/)) &&
      92 > Number(n[1])
        ? "conversion-measurement"
        : "attribution-reporting";
    (null === (t = a.pubWin.document.featurePolicy) || void 0 === t
      ? 0
      : t.features().includes(n)) && zD(n, k);
    l
      ? ((t = d),
        (k.name = ""),
        X(Xk) && (k.src = t),
        (k = qD(k)),
        (c = sD(a, k, c)))
      : (c = pD(d, f, k, a));
    e &&
      ((e = a.$.Ke),
      (b = {
        id: f,
        url: d,
        width: g,
        height: h,
        zc: m,
        se: a.pubWin,
        zd: f,
        ji: "google_expandable_ad_slot" + fh(b),
        be: e.toString(),
        ac: a.pubWin,
      }),
      (b =
        !b.id || !b.url || 0 >= b.width || 0 >= b.height || !b.zc || !b.ac
          ? void 0
          : Ci(b.ac, "ct", ua(Fi, b, e))),
      b && a.l.push(b));
    return c;
  }
  async function CD(a) {
    var b = a.F,
      c = a.pubWin,
      d = a.A;
    X(Yk) && A(d, 5) && yD(new my(a.pubWin), a);
    var e = zw(d, a.pubWin);
    if (!A(d, 5) && X(pk)) return Promise.resolve();
    A(d, 5) && qy(d, a.pubWin, a.F.google_ad_client);
    var f = a.F.google_reactive_ads_config;
    f &&
      (Vy(a.K, f),
      fz(f, a, zw(d)),
      (f = f.page_level_pubvars),
      la(f) && Ec(a.F, f));
    A(d, 5) && (await DD());
    if (!DB(a.pubWin, by(), J(a.X, 8))) {
      const g = Al(yl);
      f = c.google_trust_token_operation_promise;
      0 < g &&
        f &&
        (await Promise.race([
          f,
          new Promise(
            (h) =>
              void setTimeout(() => {
                h(void 0);
              }, g)
          ),
        ]));
    }
    f = "";
    az(b)
      ? ((f = a.$.Le.toString() + "#" + RB(b)), ZB(b, pw()), ED(b))
      : ((5 == b.google_pgb_reactive && b.google_reactive_ads_config) ||
          !My(b) ||
          Ky(c, b, e)) &&
        ED(b) &&
        (f = QB(a, d));
    Ui(2, [b, f]);
    if (!f) return Promise.resolve();
    b.google_async_iframe_id || eh(c);
    e = fh(b);
    b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${cf()}`;
    c = 0 < dD(a, a.Y, !0);
    e = {
      ifi: e,
      uci: b,
    };
    c && ((c = pw()), (e.btvi = uw(c, 21, 1)), vw(c, 21));
    f = bh(e, f);
    d = BD(a, f, d);
    f = AD(f);
    a.F.rpe &&
      IA(a.pubWin, a.Y, {
        height: a.F.google_ad_height,
        rc: "force",
        vc: !0,
        Zc: !0,
        kb: a.F.google_ad_client,
      });
    d = await d;
    try {
      tD(a, d, b);
    } catch (g) {
      zi(223, g);
    }
  }

  function DD() {
    return (Sa() ? 0 <= La(Wa(), 11) : Ra() && 0 <= La(Wa(), 65))
      ? new Promise((a) => {
          uB(a.bind(null, !0));
        })
      : (uB(null), Promise.resolve(!1));
  }

  function FD(a) {
    const b = new IC(a);
    return new Promise((c) => {
      HC(b, (d) => {
        d && "string" === typeof d.uspString ? c(d.uspString) : c(null);
      });
    });
  }

  function GD(a) {
    a = new ft(a, -1);
    return $s(a) ? et(a) : Promise.resolve(null);
  }

  function HD(a) {
    var b = ag(u.top, "googlefcPresent");
    u.googlefc &&
      !b &&
      S(
        "adsense_fc_has_namespace_but_no_iframes",
        {
          publisherId: a,
        },
        1
      );
  }

  function ID(a) {
    return OC(a) ? RC(a, "loaded") : Promise.resolve(null);
  }

  function JD(a, b) {
    const c = b.Ge,
      d = b.uspString;
    b = b.ze;
    const e = new Dw();
    if (c) {
      var f = Cw(e, Ys(c));
      f = z(f, 2, c.tcString);
      f = z(f, 4, c.addtlConsent || "");
      z(f, 7, c.internalErrorState);
      void 0 !== c.gdprApplies && z(e, 3, c.gdprApplies);
    } else Cw(e, !0);
    d && z(e, 1, d);
    null !== b && z(e, 6, b);
    a.A = e;
  }
  async function KD(a) {
    var b = Al(sk);
    if (0 >= b) return Promise.resolve(void 0);
    const c = xi(809, () => CC(a));
    if (c)
      try {
        const d = await Promise.race([c, og(b, "0")]);
        return (null === d || void 0 === d ? void 0 : d.length) > Al(rk)
          ? (zi(809, Error(`ML:${d.length}`)), "0")
          : d;
      } catch (d) {
        return zi(809, d), "0";
      }
  }

  function LD(a) {
    var b = Al(uk);
    if (0 >= b) return Promise.resolve(void 0);
    const c = Gh();
    return Promise.race([xi(832, () => YC(a)), og(b)]).then((d) => {
      var e;
      const f =
        null !== (e = null === d || void 0 === d ? void 0 : d.status) &&
        void 0 !== e
          ? e
          : 100;
      S("afc_etu", {
        etus: f,
        sig: Gh() - c,
        tms: b,
      });
      return null === d || void 0 === d ? void 0 : d.Ta;
    });
  }

  function MD(a) {
    var b = Al(wl);
    return Promise.race([
      yi(779, () => {
        const c = X(AB(window) ? rl : ql),
          d = X(tl);
        return KB(new LB(a, c, d));
      })(),
      og(b),
    ]);
  }
  async function ND(a) {
    kB = R;
    qB(J(a.X, 8));
    Pw(a.pubWin);
    HD(a.F.google_ad_client);
    var b = new SC(a.pubWin),
      c = await ID(b);
    b = [
      GD(a.pubWin),
      FD(a.pubWin),
      TC(b, c, a.F.google_ad_client, bc(a.X, 6)),
    ];
    b = await Promise.all(b);
    JD(a, {
      Ge: b[0],
      uspString: b[1],
      ze: b[2],
    });
    DB(a.pubWin, by(), J(a.X, 8)) && (await MD(!!A(a.A, 5)));
    b = KD(a.pubWin);
    c = xi(868, () => LD(a.pubWin));
    a.C = (await b) || "";
    a.Ta = (await c) || "";
    await CD(a);
  }

  function oD(a) {
    var b = a.pubWin.document,
      c = a.F;
    const d = c.google_ad_width,
      e = c.google_ad_height;
    let f = 0;
    try {
      !1 === c.google_allow_expandable_ads && (f |= 1);
      if (
        !b.body ||
        isNaN(c.google_ad_height) ||
        isNaN(c.google_ad_width) ||
        !/^http/.test(b.location.protocol)
      )
        f |= 2;
      a: {
        c = navigator;
        const l = c.userAgent,
          k = c.platform,
          m = /WebKit\/(\d+)/,
          n = /rv:(\d+\.\d+)/,
          q = /rv:1\.8([^.]|\.0)/;
        if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(l)) {
          const r = (m.exec(l) || [0, 0])[1],
            t = (n.exec(l) || [0, 0])[1];
          if (
            (/Win/.test(k) && /Trident/.test(l) && 11 <= b.documentMode) ||
            (!r && "Gecko" === c.product && 27 <= t && !q.test(l)) ||
            536 <= r
          ) {
            var g = !0;
            break a;
          }
        }
        g = !1;
      }
      g || (f |= 4);
      Nx(a.pubWin, a.pubWin.document, d, e) && (f |= 2);
    } catch (l) {
      f |= 8;
    }
    a.B = f;
    0 === a.B || (a.F.google_allow_expandable_ads = !1);
    var h;
    qg(a.pubWin) != a.pubWin && (a.j |= 4);
    3 === aA(a.pubWin.document) && (a.j |= 32);
    if ((b = a.K)) (b = a.K), (b = !(Y(b).scrollWidth <= Y(b).clientWidth));
    b && (a.j |= 1024);
    if (null === (h = a.pubWin.Prototype) || void 0 === h ? 0 : h.Version)
      a.j |= 16384;
    a.F.google_loader_features_used && (a.j |= a.F.google_loader_features_used);
    a.D = 2;
    return ND(a);
  }

  function rD(a, b) {
    a.style.visibility = "visible";
    for (var c; (c = a.firstChild); ) a.removeChild(c);
    a.appendChild(b);
  }

  function ED(a) {
    const b = pw(),
      c = a.google_ad_section;
    Ly(a) && vw(b, 15);
    if (nh(a)) {
      if (100 < vw(b, 5)) return !1;
    } else if (100 < vw(b, 6) - uw(b, 15, 0) && "" == c) return !1;
    return !0;
  }

  function lD(a) {
    const b = a.K;
    if (
      b &&
      !Mv(b).ads_density_stats_processed &&
      !yg(b) &&
      ((Mv(b).ads_density_stats_processed = !0), X(Tk) || 0.01 > Lf())
    ) {
      const c = () => {
        if (b) {
          var d = Yu(
            Tu(b),
            a.F.google_ad_client,
            b.location.hostname,
            iy(a.F).split(",")
          );
          S("ama_stats", d, 1);
        }
      };
      mg(b, () => {
        u.setTimeout(c, 1e3);
      });
    }
  }

  function nD(a) {
    a &&
      !Mv(a).host_pinged_back &&
      ((Mv(a).host_pinged_back = !0),
      S(
        "abg_host",
        {
          host: a.location.host,
        },
        0.01
      ));
  }
  async function iD(a) {
    const b = a.pubWin.document;
    if ("function" === typeof b.interestCohort && X(al)) {
      const c = Al(bl),
        d = await Promise.race([
          (async () => {
            var e;
            const f = performance.now(),
              g = await (null === (e = b.interestCohort) || void 0 === e
                ? void 0
                : e.call(b));
            S(
              "flocapi",
              {
                time: performance.now() - f,
              },
              1
            );
            return g;
          })(),
          new Promise(
            (e) =>
              void setTimeout(() => {
                e(void 0);
              }, c)
          ),
        ]);
      d && (a.F.google_floc = d);
    }
  }
  (function (a, b, c) {
    xi(843, () => {
      var d,
        e = u.google_sl_win || u;
      if (!e.google_sa_impl) {
        var f = AC(a);
        xC(f);
        Ui(16, [3, f.toJSON()]);
        var g = yC({
            Nd: b,
            Fe: J(f, 2),
          }),
          h = c(g, f);
        e.google_sa_impl = async (l) =>
          $C({
            X: f,
            $: h,
            Ha: g,
            slot: l,
          });
        hy(ey(e));
        null === (d = e.google_process_slots) || void 0 === d
          ? void 0
          : d.call(e);
        e = (u.Prototype || {}).Version;
        null != e &&
          S("prtpjs", {
            version: e,
          });
      }
    });
  })(zC, "m202201110101", function (a, b) {
    const c = 2012 < ac(b, 1, 0) ? `_fy${ac(b, 1, 0)}` : "",
      d = J(b, 3);
    b = J(b, 2);
    return {
      ve: N`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
      ue: N`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
      Wc: N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
      Pd: N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
      Ke: N`https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
      Le: N`https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
      eb: N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
      Fc: N`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
    };
  });
}.call(
  this,
  '[2019,"r20220112","r20110914",null,[],null,null,null,null,null,[],null,[],null,null,null,null,-1]'
));
