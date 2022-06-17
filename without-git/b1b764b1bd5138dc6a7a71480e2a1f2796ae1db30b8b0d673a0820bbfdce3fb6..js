/*!
 * XRegExp.build 4.2.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-present MIT License
 */
!(function (d) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = d();
  else if ("function" == typeof define && define.amd) define([], d);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).XRegExp = d();
  }
})(function () {
  return (function () {
    return function d(u, e, a) {
      function f(n, t) {
        if (!e[n]) {
          if (!u[n]) {
            var r = "function" == typeof require && require;
            if (!t && r) return r(n, !0);
            if (c) return c(n, !0);
            var i = new Error("Cannot find module '" + n + "'");
            throw ((i.code = "MODULE_NOT_FOUND"), i);
          }
          var l = (e[n] = { exports: {} });
          u[n][0].call(
            l.exports,
            function (d) {
              return f(u[n][1][d] || d);
            },
            l,
            l.exports,
            d,
            u,
            e,
            a
          );
        }
        return e[n].exports;
      }
      for (
        var c = "function" == typeof require && require, n = 0;
        n < a.length;
        n++
      )
        f(a[n]);
      return f;
    };
  })()(
    {
      1: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          (e.default = function (d) {
            var u = "xregexp",
              e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
              a = d.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", {
                conjunction: "or",
              });
            function f(e, a) {
              var f = a ? "x" : "";
              return d.isRegExp(e)
                ? e[u] && e[u].captureNames
                  ? e
                  : d(e.source, f)
                : d(e, f);
            }
            function c(u) {
              return u instanceof RegExp ? u : d.escape(u);
            }
            function n(d, u, e) {
              return (d["subpattern".concat(e)] = u), d;
            }
            function t(d, u, e) {
              return (
                d + (u < e.length - 1 ? "{{subpattern".concat(u, "}}") : "")
              );
            }
            (d.tag = function (u) {
              return function (e) {
                for (
                  var a = arguments.length,
                    f = new Array(a > 1 ? a - 1 : 0),
                    r = 1;
                  r < a;
                  r++
                )
                  f[r - 1] = arguments[r];
                var i = f.map(c).reduce(n, {}),
                  l = e.raw.map(t).join("");
                return d.build(l, i, u);
              };
            }),
              (d.build = function (c, n, t) {
                var r = -1 !== (t = t || "").indexOf("x"),
                  i = /^\(\?([\w$]+)\)/.exec(c);
                i && (t = d._clipDuplicates(t + i[1]));
                var l,
                  m,
                  s,
                  o = {};
                for (var b in n)
                  if (n.hasOwnProperty(b)) {
                    var p = f(n[b], r);
                    o[b] = {
                      pattern:
                        ((l = p.source),
                        (m = void 0),
                        (s = void 0),
                        (m = /^(?:\(\?:\))*\^/),
                        (s = /\$(?:\(\?:\))*$/),
                        m.test(l) &&
                        s.test(l) &&
                        s.test(l.replace(/\\[\s\S]/g, ""))
                          ? l.replace(m, "").replace(s, "")
                          : l),
                      names: p[u].captureNames || [],
                    };
                  }
                var _,
                  h = f(c, r),
                  I = 0,
                  g = 0,
                  y = [0],
                  x = h[u].captureNames || [],
                  S = h.source.replace(a, function (d, u, a, f, c) {
                    var n,
                      t,
                      r,
                      i = u || a;
                    if (i) {
                      if (!o.hasOwnProperty(i))
                        throw new ReferenceError(
                          "Undefined property ".concat(d)
                        );
                      u
                        ? ((n = x[g]),
                          (y[++g] = ++I),
                          (t = "(?<".concat(n || i, ">")))
                        : (t = "(?:"),
                        (_ = I);
                      var l = o[i].pattern.replace(e, function (d, u, e) {
                        if (u) {
                          if (((n = o[i].names[I - _]), ++I, n))
                            return "(?<".concat(n, ">");
                        } else if (e) return (r = +e - 1), o[i].names[r] ? "\\k<".concat(o[i].names[r], ">") : "\\".concat(+e + _);
                        return d;
                      });
                      return "".concat(t).concat(l, ")");
                    }
                    if (f) {
                      if (((n = x[g]), (y[++g] = ++I), n))
                        return "(?<".concat(n, ">");
                    } else if (c) return x[(r = +c - 1)] ? "\\k<".concat(x[r], ">") : "\\".concat(y[+c]);
                    return d;
                  });
                return d(S, t);
              });
          }),
            (u.exports = e.default);
        },
        {},
      ],
      2: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          (e.default = function (d) {
            function u(d, u, e, a) {
              return { name: d, value: u, start: e, end: a };
            }
            d.matchRecursive = function (e, a, f, c, n) {
              (c = c || ""), (n = n || {});
              var t,
                r,
                i,
                l,
                m,
                s = -1 !== c.indexOf("g"),
                o = -1 !== c.indexOf("y"),
                b = c.replace(/y/g, ""),
                p = n.escapeChar,
                _ = n.valueNames,
                h = [],
                I = 0,
                g = 0,
                y = 0,
                x = 0;
              if (((a = d(a, b)), (f = d(f, b)), p)) {
                if (p.length > 1)
                  throw new Error("Cannot use more than one escape character");
                (p = d.escape(p)),
                  (m = new RegExp(
                    "(?:"
                      .concat(p, "[\\S\\s]|(?:(?!")
                      .concat(
                        d.union([a, f], "", { conjunction: "or" }).source,
                        ")[^"
                      )
                      .concat(p, "])+)+"),
                    c.replace(/[^imu]+/g, "")
                  ));
              }
              for (;;) {
                if (
                  (p && (y += (d.exec(e, m, y, "sticky") || [""])[0].length),
                  (i = d.exec(e, a, y)),
                  (l = d.exec(e, f, y)),
                  i && l && (i.index <= l.index ? (l = null) : (i = null)),
                  i || l)
                )
                  y = (g = (i || l).index) + (i || l)[0].length;
                else if (!I) break;
                if (o && !I && g > x) break;
                if (i) I || ((t = g), (r = y)), ++I;
                else {
                  if (!l || !I)
                    throw new Error("Unbalanced delimiter found in string");
                  if (
                    !--I &&
                    (_
                      ? (_[0] && t > x && h.push(u(_[0], e.slice(x, t), x, t)),
                        _[1] && h.push(u(_[1], e.slice(t, r), t, r)),
                        _[2] && h.push(u(_[2], e.slice(r, g), r, g)),
                        _[3] && h.push(u(_[3], e.slice(g, y), g, y)))
                      : h.push(e.slice(r, g)),
                    (x = y),
                    !s)
                  )
                    break;
                }
                g === y && ++y;
              }
              return (
                s &&
                  !o &&
                  _ &&
                  _[0] &&
                  e.length > x &&
                  h.push(u(_[0], e.slice(x), x, e.length)),
                h
              );
            };
          }),
            (u.exports = e.default);
        },
        {},
      ],
      3: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          (e.default = function (d) {
            var u = {},
              e = d._dec,
              a = d._hex,
              f = d._pad4;
            function c(d) {
              return d.replace(/[- _]+/g, "").toLowerCase();
            }
            function n(d) {
              var u = /^\\[xu](.+)/.exec(d);
              return u ? e(u[1]) : d.charCodeAt("\\" === d[0] ? 1 : 0);
            }
            function t(e) {
              var c, t, r;
              return (
                u[e]["b!"] ||
                (u[e]["b!"] =
                  ((c = u[e].bmp),
                  (t = ""),
                  (r = -1),
                  d.forEach(
                    c,
                    /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,
                    function (d) {
                      var u = n(d[1]);
                      u > r + 1 &&
                        ((t += "\\u".concat(f(a(r + 1)))),
                        u > r + 2 && (t += "-\\u".concat(f(a(u - 1))))),
                        (r = n(d[2] || d[1]));
                    }
                  ),
                  r < 65535 &&
                    ((t += "\\u".concat(f(a(r + 1)))),
                    r < 65534 && (t += "-\\uFFFF")),
                  t))
              );
            }
            function r(d, e) {
              var a,
                f,
                c,
                n = e ? "a!" : "a=";
              return (
                u[d][n] ||
                (u[d][n] =
                  ((a = e),
                  (f = u[d]),
                  (c = ""),
                  f.bmp &&
                    !f.isBmpLast &&
                    (c = "[".concat(f.bmp, "]").concat(f.astral ? "|" : "")),
                  f.astral && (c += f.astral),
                  f.isBmpLast &&
                    f.bmp &&
                    (c += ""
                      .concat(f.astral ? "|" : "", "[")
                      .concat(f.bmp, "]")),
                  a
                    ? "(?:(?!".concat(
                        c,
                        ")(?:[\ud800-\udbff][\udc00-\udfff]|[\0-￿]))"
                      )
                    : "(?:".concat(c, ")")))
              );
            }
            d.addToken(
              /\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,
              function (d, e, a) {
                var f = "P" === d[1] || !!d[2],
                  n = -1 !== a.indexOf("A"),
                  i = c(d[4] || d[3]),
                  l = u[i];
                if ("P" === d[1] && d[2])
                  throw new SyntaxError("Invalid double negation " + d[0]);
                if (!u.hasOwnProperty(i))
                  throw new SyntaxError("Unknown Unicode token " + d[0]);
                if (l.inverseOf) {
                  if (((i = c(l.inverseOf)), !u.hasOwnProperty(i)))
                    throw new ReferenceError(
                      ""
                        .concat("Unicode token missing data " + d[0], " -> ")
                        .concat(l.inverseOf)
                    );
                  (l = u[i]), (f = !f);
                }
                if (!l.bmp && !n)
                  throw new SyntaxError(
                    "Astral mode required for Unicode token " + d[0]
                  );
                if (n) {
                  if ("class" === e)
                    throw new SyntaxError(
                      "Astral mode does not support Unicode tokens within character classes"
                    );
                  return r(i, f);
                }
                return "class" === e
                  ? f
                    ? t(i)
                    : l.bmp
                  : "".concat((f ? "[^" : "[") + l.bmp, "]");
              },
              { scope: "all", optionalFlags: "A", leadChar: "\\" }
            ),
              (d.addUnicodeData = function (e) {
                var a = !0,
                  f = !1,
                  n = void 0;
                try {
                  for (
                    var t, r = e[Symbol.iterator]();
                    !(a = (t = r.next()).done);
                    a = !0
                  ) {
                    var i = t.value;
                    if (!i.name) throw new Error("Unicode token requires name");
                    if (!(i.inverseOf || i.bmp || i.astral))
                      throw new Error(
                        "Unicode token has no character data " + i.name
                      );
                    (u[c(i.name)] = i), i.alias && (u[c(i.alias)] = i);
                  }
                } catch (d) {
                  (f = !0), (n = d);
                } finally {
                  try {
                    a || null == r.return || r.return();
                  } finally {
                    if (f) throw n;
                  }
                }
                d.cache.flush("patterns");
              }),
              (d._getUnicodeProperty = function (d) {
                var e = c(d);
                return u[e];
              });
          }),
            (u.exports = e.default);
        },
        {},
      ],
      4: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var a,
            f =
              (a = d("../../tools/output/blocks")) && a.__esModule
                ? a
                : { default: a };
          (e.default = function (d) {
            if (!d.addUnicodeData)
              throw new ReferenceError(
                "Unicode Base must be loaded before Unicode Blocks"
              );
            d.addUnicodeData(f.default);
          }),
            (u.exports = e.default);
        },
        { "../../tools/output/blocks": 10 },
      ],
      5: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var a,
            f =
              (a = d("../../tools/output/categories")) && a.__esModule
                ? a
                : { default: a };
          (e.default = function (d) {
            if (!d.addUnicodeData)
              throw new ReferenceError(
                "Unicode Base must be loaded before Unicode Categories"
              );
            d.addUnicodeData(f.default);
          }),
            (u.exports = e.default);
        },
        { "../../tools/output/categories": 11 },
      ],
      6: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var a,
            f =
              (a = d("../../tools/output/properties")) && a.__esModule
                ? a
                : { default: a };
          (e.default = function (d) {
            if (!d.addUnicodeData)
              throw new ReferenceError(
                "Unicode Base must be loaded before Unicode Properties"
              );
            var u = f.default;
            u.push({ name: "Assigned", inverseOf: "Cn" }), d.addUnicodeData(u);
          }),
            (u.exports = e.default);
        },
        { "../../tools/output/properties": 12 },
      ],
      7: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var a,
            f =
              (a = d("../../tools/output/scripts")) && a.__esModule
                ? a
                : { default: a };
          (e.default = function (d) {
            if (!d.addUnicodeData)
              throw new ReferenceError(
                "Unicode Base must be loaded before Unicode Scripts"
              );
            d.addUnicodeData(f.default);
          }),
            (u.exports = e.default);
        },
        { "../../tools/output/scripts": 13 },
      ],
      8: [
        function (d, u, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var a = m(d("./xregexp")),
            f = m(d("./addons/build")),
            c = m(d("./addons/matchrecursive")),
            n = m(d("./addons/unicode-base")),
            t = m(d("./addons/unicode-blocks")),
            r = m(d("./addons/unicode-categories")),
            i = m(d("./addons/unicode-properties")),
            l = m(d("./addons/unicode-scripts"));
          function m(d) {
            return d && d.__esModule ? d : { default: d };
          }
          (0, f.default)(a.default),
            (0, c.default)(a.default),
            (0, n.default)(a.default),
            (0, t.default)(a.default),
            (0, r.default)(a.default),
            (0, i.default)(a.default),
            (0, l.default)(a.default);
          var s = a.default;
          (e.default = s), (u.exports = e.default);
        },
        {
          "./addons/build": 1,
          "./addons/matchrecursive": 2,
          "./addons/unicode-base": 3,
          "./addons/unicode-blocks": 4,
          "./addons/unicode-categories": 5,
          "./addons/unicode-properties": 6,
          "./addons/unicode-scripts": 7,
          "./xregexp": 9,
        },
      ],
      9: [
        function (d, u, e) {
          "use strict";
          function a(d, u) {
            return (
              (function (d) {
                if (Array.isArray(d)) return d;
              })(d) ||
              (function (d, u) {
                var e = [],
                  a = !0,
                  f = !1,
                  c = void 0;
                try {
                  for (
                    var n, t = d[Symbol.iterator]();
                    !(a = (n = t.next()).done) &&
                    (e.push(n.value), !u || e.length !== u);
                    a = !0
                  );
                } catch (d) {
                  (f = !0), (c = d);
                } finally {
                  try {
                    a || null == t.return || t.return();
                  } finally {
                    if (f) throw c;
                  }
                }
                return e;
              })(d, u) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              })()
            );
          }
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.default = void 0);
          var f = "xregexp",
            c = { astral: !1, namespacing: !1 },
            n = {
              exec: RegExp.prototype.exec,
              test: RegExp.prototype.test,
              match: String.prototype.match,
              replace: String.prototype.replace,
              split: String.prototype.split,
            },
            t = {},
            r = {},
            i = {},
            l = [],
            m = "default",
            s = "class",
            o = {
              default:
                /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
              class:
                /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/,
            },
            b = /\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g,
            p = void 0 === n.exec.call(/()??/, "")[1],
            _ = void 0 !== /x/.flags,
            h = {}.toString;
          function I(d) {
            var u = !0;
            try {
              new RegExp("", d);
            } catch (d) {
              u = !1;
            }
            return u;
          }
          var g = I("u"),
            y = I("y"),
            x = { g: !0, i: !0, m: !0, u: g, y: y };
          function S(d, u, e, a, c) {
            if (((d[f] = { captureNames: u }), c)) return d;
            if (d.__proto__) d.__proto__ = U.prototype;
            else for (var n in U.prototype) d[n] = U.prototype[n];
            return (
              (d[f].source = e),
              (d[f].flags = a ? a.split("").sort().join("") : a),
              d
            );
          }
          function v(d) {
            return n.replace.call(d, /([\s\S])(?=[\s\S]*\1)/g, "");
          }
          function w(d, u) {
            if (!U.isRegExp(d)) throw new TypeError("Type RegExp expected");
            var e,
              a,
              c = d[f] || {},
              t =
                ((e = d),
                _
                  ? e.flags
                  : n.exec.call(
                      /\/([a-z]*)$/i,
                      RegExp.prototype.toString.call(e)
                    )[1]),
              r = "",
              i = "",
              l = null,
              m = null;
            return (
              (u = u || {}).removeG && (i += "g"),
              u.removeY && (i += "y"),
              i &&
                (t = n.replace.call(
                  t,
                  new RegExp("[".concat(i, "]+"), "g"),
                  ""
                )),
              u.addG && (r += "g"),
              u.addY && (r += "y"),
              r && (t = v(t + r)),
              u.isInternalOnly ||
                (void 0 !== c.source && (l = c.source),
                null != c.flags && (m = r ? v(c.flags + r) : c.flags)),
              (d = S(
                new RegExp(u.source || d.source, t),
                (a = d)[f] && a[f].captureNames
                  ? c.captureNames.slice(0)
                  : null,
                l,
                m,
                u.isInternalOnly
              ))
            );
          }
          function C(d) {
            return parseInt(d, 16);
          }
          function E(d, u, e) {
            return "(" === d.input[d.index - 1] ||
              ")" === d.input[d.index + d[0].length] ||
              "|" === d.input[d.index - 1] ||
              "|" === d.input[d.index + d[0].length] ||
              d.index < 1 ||
              d.index + d[0].length >= d.input.length ||
              n.test.call(/^\(\?[:=!]/, d.input.substr(d.index - 3, 3)) ||
              ((a = d.input),
              (f = d.index + d[0].length),
              (c = e),
              n.test.call(
                -1 !== c.indexOf("x")
                  ? /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
                  : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,
                a.slice(f)
              ))
              ? ""
              : "(?:)";
            var a, f, c;
          }
          function A(d) {
            return parseInt(d, 10).toString(16);
          }
          function k(d, u) {
            return h.call(d) === "[object ".concat(u, "]");
          }
          function M(d) {
            for (; d.length < 4; ) d = "0".concat(d);
            return d;
          }
          function P(d) {
            var u = {};
            return k(d, "String")
              ? (U.forEach(d, /[^\s,]+/, function (d) {
                  u[d] = !0;
                }),
                u)
              : d;
          }
          function O(d) {
            if (!/^[\w$]$/.test(d))
              throw new Error("Flag must be a single character A-Za-z0-9_$");
            x[d] = !0;
          }
          function N(d, u, e, a, f) {
            for (var c, n, t = l.length, r = d[e], i = null; t--; )
              if (
                !(
                  ((n = l[t]).leadChar && n.leadChar !== r) ||
                  (n.scope !== a && "all" !== n.scope) ||
                  (n.flag && -1 === u.indexOf(n.flag))
                ) &&
                (c = U.exec(d, n.regex, e, "sticky"))
              ) {
                i = {
                  matchLength: c[0].length,
                  output: n.handler.call(f, c, a, u),
                  reparse: n.reparse,
                };
                break;
              }
            return i;
          }
          function L(d) {
            c.astral = d;
          }
          function T(d) {
            c.namespacing = d;
          }
          function B(d) {
            if (null == d)
              throw new TypeError("Cannot convert null or undefined to object");
            return d;
          }
          function U(d, u) {
            if (U.isRegExp(d)) {
              if (void 0 !== u)
                throw new TypeError(
                  "Cannot supply flags when copying a RegExp"
                );
              return w(d);
            }
            if (
              ((d = void 0 === d ? "" : String(d)),
              (u = void 0 === u ? "" : String(u)),
              U.isInstalled("astral") && -1 === u.indexOf("A") && (u += "A"),
              i[d] || (i[d] = {}),
              !i[d][u])
            ) {
              for (
                var e,
                  f = { hasNamedCapture: !1, captureNames: [] },
                  c = m,
                  t = "",
                  r = 0,
                  l = (function (d, u) {
                    if (v(u) !== u)
                      throw new SyntaxError(
                        "Invalid duplicate regex flag ".concat(u)
                      );
                    d = n.replace.call(d, /^\(\?([\w$]+)\)/, function (d, e) {
                      if (n.test.call(/[gy]/, e))
                        throw new SyntaxError(
                          "Cannot use flag g or y in mode modifier ".concat(d)
                        );
                      return (u = v(u + e)), "";
                    });
                    var e = !0,
                      a = !1,
                      f = void 0;
                    try {
                      for (
                        var c, t = u[Symbol.iterator]();
                        !(e = (c = t.next()).done);
                        e = !0
                      ) {
                        var r = c.value;
                        if (!x[r])
                          throw new SyntaxError(
                            "Unknown regex flag ".concat(r)
                          );
                      }
                    } catch (d) {
                      (a = !0), (f = d);
                    } finally {
                      try {
                        e || null == t.return || t.return();
                      } finally {
                        if (a) throw f;
                      }
                    }
                    return { pattern: d, flags: u };
                  })(d, u),
                  b = l.pattern,
                  p = l.flags;
                r < b.length;

              ) {
                do {
                  (e = N(b, p, r, c, f)) &&
                    e.reparse &&
                    (b = b.slice(0, r) + e.output + b.slice(r + e.matchLength));
                } while (e && e.reparse);
                if (e) (t += e.output), (r += e.matchLength || 1);
                else {
                  var _ = a(U.exec(b, o[c], r, "sticky"), 1)[0];
                  (t += _),
                    (r += _.length),
                    "[" === _ && c === m
                      ? (c = s)
                      : "]" === _ && c === s && (c = m);
                }
              }
              i[d][u] = {
                pattern: n.replace.call(t, /(?:\(\?:\))+/g, "(?:)"),
                flags: n.replace.call(p, /[^gimuy]+/g, ""),
                captures: f.hasNamedCapture ? f.captureNames : null,
              };
            }
            var h = i[d][u];
            return S(new RegExp(h.pattern, h.flags), h.captures, d, u);
          }
          (U.prototype = /(?:)/),
            (U.version = "4.2.0"),
            (U._clipDuplicates = v),
            (U._hasNativeFlag = I),
            (U._dec = C),
            (U._hex = A),
            (U._pad4 = M),
            (U.addToken = function (d, u, e) {
              var a = (e = e || {}).optionalFlags;
              if ((e.flag && O(e.flag), a)) {
                a = n.split.call(a, "");
                var f = !0,
                  c = !1,
                  t = void 0;
                try {
                  for (
                    var r, i = a[Symbol.iterator]();
                    !(f = (r = i.next()).done);
                    f = !0
                  ) {
                    O(r.value);
                  }
                } catch (d) {
                  (c = !0), (t = d);
                } finally {
                  try {
                    f || null == i.return || i.return();
                  } finally {
                    if (c) throw t;
                  }
                }
              }
              l.push({
                regex: w(d, { addG: !0, addY: y, isInternalOnly: !0 }),
                handler: u,
                scope: e.scope || m,
                flag: e.flag,
                reparse: e.reparse,
                leadChar: e.leadChar,
              }),
                U.cache.flush("patterns");
            }),
            (U.cache = function (d, u) {
              return r[d] || (r[d] = {}), r[d][u] || (r[d][u] = U(d, u));
            }),
            (U.cache.flush = function (d) {
              "patterns" === d ? (i = {}) : (r = {});
            }),
            (U.escape = function (d) {
              return n.replace.call(B(d), /[-\[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            }),
            (U.exec = function (d, u, e, a) {
              var c,
                n,
                r = "g",
                i = !1;
              (c = y && !!(a || (u.sticky && !1 !== a)))
                ? (r += "y")
                : a && ((i = !0), (r += "FakeY")),
                (u[f] = u[f] || {});
              var l =
                u[f][r] ||
                (u[f][r] = w(u, {
                  addG: !0,
                  addY: c,
                  source: i ? "".concat(u.source, "|()") : void 0,
                  removeY: !1 === a,
                  isInternalOnly: !0,
                }));
              return (
                (e = e || 0),
                (l.lastIndex = e),
                (n = t.exec.call(l, d)),
                i && n && "" === n.pop() && (n = null),
                u.global && (u.lastIndex = n ? l.lastIndex : 0),
                n
              );
            }),
            (U.forEach = function (d, u, e) {
              for (var a, f = 0, c = -1; (a = U.exec(d, u, f)); )
                e(a, ++c, d, u), (f = a.index + (a[0].length || 1));
            }),
            (U.globalize = function (d) {
              return w(d, { addG: !0 });
            }),
            (U.install = function (d) {
              (d = P(d)),
                !c.astral && d.astral && L(!0),
                !c.namespacing && d.namespacing && T(!0);
            }),
            (U.isInstalled = function (d) {
              return !!c[d];
            }),
            (U.isRegExp = function (d) {
              return "[object RegExp]" === h.call(d);
            }),
            (U.match = function (d, u, e) {
              var a = (u.global && "one" !== e) || "all" === e,
                c = (a ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
              u[f] = u[f] || {};
              var t =
                  u[f][c] ||
                  (u[f][c] = w(u, {
                    addG: !!a,
                    removeG: "one" === e,
                    isInternalOnly: !0,
                  })),
                r = n.match.call(B(d), t);
              return (
                u.global &&
                  (u.lastIndex = "one" === e && r ? r.index + r[0].length : 0),
                a ? r || [] : r && r[0]
              );
            }),
            (U.matchChain = function (d, u) {
              return (function d(e, a) {
                var f = u[a].regex ? u[a] : { regex: u[a] },
                  c = [];
                function n(d) {
                  if (f.backref) {
                    var u = "Backreference to undefined group: ".concat(
                        f.backref
                      ),
                      e = isNaN(f.backref);
                    if (e && U.isInstalled("namespacing")) {
                      if (!(f.backref in d.groups)) throw new ReferenceError(u);
                    } else if (!d.hasOwnProperty(f.backref))
                      throw new ReferenceError(u);
                    var a =
                      e && U.isInstalled("namespacing")
                        ? d.groups[f.backref]
                        : d[f.backref];
                    c.push(a || "");
                  } else c.push(d[0]);
                }
                var t = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (
                    var l, m = e[Symbol.iterator]();
                    !(t = (l = m.next()).done);
                    t = !0
                  ) {
                    var s = l.value;
                    U.forEach(s, f.regex, n);
                  }
                } catch (d) {
                  (r = !0), (i = d);
                } finally {
                  try {
                    t || null == m.return || m.return();
                  } finally {
                    if (r) throw i;
                  }
                }
                return a !== u.length - 1 && c.length ? d(c, a + 1) : c;
              })([d], 0);
            }),
            (U.replace = function (d, u, e, a) {
              var c = U.isRegExp(u),
                n = (u.global && "one" !== a) || "all" === a,
                r = (n ? "g" : "") + (u.sticky ? "y" : "") || "noGY",
                i = u;
              c
                ? ((u[f] = u[f] || {}),
                  (i =
                    u[f][r] ||
                    (u[f][r] = w(u, {
                      addG: !!n,
                      removeG: "one" === a,
                      isInternalOnly: !0,
                    }))))
                : n && (i = new RegExp(U.escape(String(u)), "g"));
              var l = t.replace.call(B(d), i, e);
              return c && u.global && (u.lastIndex = 0), l;
            }),
            (U.replaceEach = function (d, u) {
              var e = !0,
                a = !1,
                f = void 0;
              try {
                for (
                  var c, n = u[Symbol.iterator]();
                  !(e = (c = n.next()).done);
                  e = !0
                ) {
                  var t = c.value;
                  d = U.replace(d, t[0], t[1], t[2]);
                }
              } catch (d) {
                (a = !0), (f = d);
              } finally {
                try {
                  e || null == n.return || n.return();
                } finally {
                  if (a) throw f;
                }
              }
              return d;
            }),
            (U.split = function (d, u, e) {
              return t.split.call(B(d), u, e);
            }),
            (U.test = function (d, u, e, a) {
              return !!U.exec(d, u, e, a);
            }),
            (U.uninstall = function (d) {
              (d = P(d)),
                c.astral && d.astral && L(!1),
                c.namespacing && d.namespacing && T(!1);
            }),
            (U.union = function (d, u, e) {
              var a,
                c,
                t = (e = e || {}).conjunction || "or",
                r = 0;
              function i(d, u, e) {
                var f = c[r - a];
                if (u) {
                  if ((++r, f)) return "(?<".concat(f, ">");
                } else if (e) return "\\".concat(+e + a);
                return d;
              }
              if (!k(d, "Array") || !d.length)
                throw new TypeError(
                  "Must provide a nonempty array of patterns to merge"
                );
              var l =
                  /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,
                m = [],
                s = !0,
                o = !1,
                b = void 0;
              try {
                for (
                  var p, _ = d[Symbol.iterator]();
                  !(s = (p = _.next()).done);
                  s = !0
                ) {
                  var h = p.value;
                  U.isRegExp(h)
                    ? ((a = r),
                      (c = (h[f] && h[f].captureNames) || []),
                      m.push(n.replace.call(U(h.source).source, l, i)))
                    : m.push(U.escape(h));
                }
              } catch (d) {
                (o = !0), (b = d);
              } finally {
                try {
                  s || null == _.return || _.return();
                } finally {
                  if (o) throw b;
                }
              }
              var I = "none" === t ? "" : "|";
              return U(m.join(I), u);
            }),
            (t.exec = function (d) {
              var u = this.lastIndex,
                e = n.exec.apply(this, arguments);
              if (e) {
                if (!p && e.length > 1 && -1 !== e.indexOf("")) {
                  var a = w(this, { removeG: !0, isInternalOnly: !0 });
                  n.replace.call(String(d).slice(e.index), a, function () {
                    for (var d = arguments.length, u = 1; u < d - 2; ++u)
                      void 0 ===
                        (u < 0 || arguments.length <= u
                          ? void 0
                          : arguments[u]) && (e[u] = void 0);
                  });
                }
                var c = e;
                if (
                  (U.isInstalled("namespacing") &&
                    ((e.groups = Object.create(null)), (c = e.groups)),
                  this[f] && this[f].captureNames)
                )
                  for (var t = 1; t < e.length; ++t) {
                    var r = this[f].captureNames[t - 1];
                    r && (c[r] = e[t]);
                  }
                this.global &&
                  !e[0].length &&
                  this.lastIndex > e.index &&
                  (this.lastIndex = e.index);
              }
              return this.global || (this.lastIndex = u), e;
            }),
            (t.test = function (d) {
              return !!t.exec.call(this, d);
            }),
            (t.match = function (d) {
              if (U.isRegExp(d)) {
                if (d.global) {
                  var u = n.match.apply(this, arguments);
                  return (d.lastIndex = 0), u;
                }
              } else d = new RegExp(d);
              return t.exec.call(d, B(this));
            }),
            (t.replace = function (d, u) {
              var e,
                a,
                c,
                t = U.isRegExp(d);
              return (
                t
                  ? (d[f] && (a = d[f].captureNames), (e = d.lastIndex))
                  : (d += ""),
                (c = k(u, "Function")
                  ? n.replace.call(String(this), d, function () {
                      for (
                        var e = arguments.length, f = new Array(e), c = 0;
                        c < e;
                        c++
                      )
                        f[c] = arguments[c];
                      if (a) {
                        var n;
                        U.isInstalled("namespacing")
                          ? ((n = Object.create(null)), f.push(n))
                          : ((f[0] = new String(f[0])), (n = f[0]));
                        for (var r = 0; r < a.length; ++r)
                          a[r] && (n[a[r]] = f[r + 1]);
                      }
                      return (
                        t &&
                          d.global &&
                          (d.lastIndex = f[f.length - 2] + f[0].length),
                        u.apply(void 0, f)
                      );
                    })
                  : n.replace.call(
                      null == this ? this : String(this),
                      d,
                      function () {
                        for (
                          var d = arguments.length, e = new Array(d), f = 0;
                          f < d;
                          f++
                        )
                          e[f] = arguments[f];
                        return n.replace.call(
                          String(u),
                          b,
                          function (d, u, f, c) {
                            if ((u = u || f)) {
                              var n = +u;
                              if (n <= e.length - 3) return e[n] || "";
                              if ((n = a ? a.indexOf(u) : -1) < 0)
                                throw new SyntaxError(
                                  "Backreference to undefined group ".concat(d)
                                );
                              return e[n + 1] || "";
                            }
                            if ("$" === c) return "$";
                            if ("&" === c || 0 == +c) return e[0];
                            if ("`" === c)
                              return e[e.length - 1].slice(0, e[e.length - 2]);
                            if ("'" === c)
                              return e[e.length - 1].slice(
                                e[e.length - 2] + e[0].length
                              );
                            if (((c = +c), !isNaN(c))) {
                              if (c > e.length - 3)
                                throw new SyntaxError(
                                  "Backreference to undefined group ".concat(d)
                                );
                              return e[c] || "";
                            }
                            throw new SyntaxError("Invalid token ".concat(d));
                          }
                        );
                      }
                    )),
                t && (d.global ? (d.lastIndex = 0) : (d.lastIndex = e)),
                c
              );
            }),
            (t.split = function (d, u) {
              if (!U.isRegExp(d)) return n.split.apply(this, arguments);
              var e,
                a = String(this),
                f = [],
                c = d.lastIndex,
                t = 0;
              return (
                (u = (void 0 === u ? -1 : u) >>> 0),
                U.forEach(a, d, function (d) {
                  d.index + d[0].length > t &&
                    (f.push(a.slice(t, d.index)),
                    d.length > 1 &&
                      d.index < a.length &&
                      Array.prototype.push.apply(f, d.slice(1)),
                    (e = d[0].length),
                    (t = d.index + e));
                }),
                t === a.length
                  ? (n.test.call(d, "") && !e) || f.push("")
                  : f.push(a.slice(t)),
                (d.lastIndex = c),
                f.length > u ? f.slice(0, u) : f
              );
            }),
            U.addToken(
              /\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,
              function (d, u) {
                if ("B" === d[1] && u === m) return d[0];
                throw new SyntaxError("Invalid escape ".concat(d[0]));
              },
              { scope: "all", leadChar: "\\" }
            ),
            U.addToken(
              /\\u{([\dA-Fa-f]+)}/,
              function (d, u, e) {
                var a = C(d[1]);
                if (a > 1114111)
                  throw new SyntaxError(
                    "Invalid Unicode code point ".concat(d[0])
                  );
                if (a <= 65535) return "\\u".concat(M(A(a)));
                if (g && -1 !== e.indexOf("u")) return d[0];
                throw new SyntaxError(
                  "Cannot use Unicode code point above \\u{FFFF} without flag u"
                );
              },
              { scope: "all", leadChar: "\\" }
            ),
            U.addToken(
              /\[(\^?)\]/,
              function (d) {
                return d[1] ? "[\\s\\S]" : "\\b\\B";
              },
              { leadChar: "[" }
            ),
            U.addToken(/\(\?#[^)]*\)/, E, { leadChar: "(" }),
            U.addToken(/\s+|#[^\n]*\n?/, E, { flag: "x" }),
            U.addToken(
              /\./,
              function () {
                return "[\\s\\S]";
              },
              { flag: "s", leadChar: "." }
            ),
            U.addToken(
              /\\k<([\w$]+)>/,
              function (d) {
                var u = isNaN(d[1])
                    ? this.captureNames.indexOf(d[1]) + 1
                    : +d[1],
                  e = d.index + d[0].length;
                if (!u || u > this.captureNames.length)
                  throw new SyntaxError(
                    "Backreference to undefined group ".concat(d[0])
                  );
                return "\\"
                  .concat(u)
                  .concat(
                    e === d.input.length || isNaN(d.input[e]) ? "" : "(?:)"
                  );
              },
              { leadChar: "\\" }
            ),
            U.addToken(
              /\\(\d+)/,
              function (d, u) {
                if (
                  !(
                    u === m &&
                    /^[1-9]/.test(d[1]) &&
                    +d[1] <= this.captureNames.length
                  ) &&
                  "0" !== d[1]
                )
                  throw new SyntaxError(
                    "Cannot use octal escape or backreference to undefined group ".concat(
                      d[0]
                    )
                  );
                return d[0];
              },
              { scope: "all", leadChar: "\\" }
            ),
            U.addToken(
              /\(\?P?<([\w$]+)>/,
              function (d) {
                if (!isNaN(d[1]))
                  throw new SyntaxError(
                    "Cannot use integer as capture name ".concat(d[0])
                  );
                if (
                  !U.isInstalled("namespacing") &&
                  ("length" === d[1] || "__proto__" === d[1])
                )
                  throw new SyntaxError(
                    "Cannot use reserved word as capture name ".concat(d[0])
                  );
                if (-1 !== this.captureNames.indexOf(d[1]))
                  throw new SyntaxError(
                    "Cannot use same name for multiple groups ".concat(d[0])
                  );
                return (
                  this.captureNames.push(d[1]), (this.hasNamedCapture = !0), "("
                );
              },
              { leadChar: "(" }
            ),
            U.addToken(
              /\((?!\?)/,
              function (d, u, e) {
                return -1 !== e.indexOf("n")
                  ? "(?:"
                  : (this.captureNames.push(null), "(");
              },
              { optionalFlags: "n", leadChar: "(" }
            );
          var R = U;
          (e.default = R), (u.exports = e.default);
        },
        {},
      ],
      10: [
        function (d, u, e) {
          u.exports = [
            { name: "InAdlam", astral: "\ud83a[\udd00-\udd5f]" },
            { name: "InAegean_Numbers", astral: "\ud800[\udd00-\udd3f]" },
            { name: "InAhom", astral: "\ud805[\udf00-\udf3f]" },
            { name: "InAlchemical_Symbols", astral: "\ud83d[\udf00-\udf7f]" },
            { name: "InAlphabetic_Presentation_Forms", bmp: "ﬀ-ﭏ" },
            {
              name: "InAnatolian_Hieroglyphs",
              astral: "\ud811[\udc00-\ude7f]",
            },
            {
              name: "InAncient_Greek_Musical_Notation",
              astral: "\ud834[\ude00-\ude4f]",
            },
            {
              name: "InAncient_Greek_Numbers",
              astral: "\ud800[\udd40-\udd8f]",
            },
            { name: "InAncient_Symbols", astral: "\ud800[\udd90-\uddcf]" },
            { name: "InArabic", bmp: "؀-ۿ" },
            { name: "InArabic_Extended_A", bmp: "ࢠ-ࣿ" },
            {
              name: "InArabic_Mathematical_Alphabetic_Symbols",
              astral: "\ud83b[\ude00-\udeff]",
            },
            { name: "InArabic_Presentation_Forms_A", bmp: "ﭐ-﷿" },
            { name: "InArabic_Presentation_Forms_B", bmp: "ﹰ-\ufeff" },
            { name: "InArabic_Supplement", bmp: "ݐ-ݿ" },
            { name: "InArmenian", bmp: "԰-֏" },
            { name: "InArrows", bmp: "←-⇿" },
            { name: "InAvestan", astral: "\ud802[\udf00-\udf3f]" },
            { name: "InBalinese", bmp: "ᬀ-᭿" },
            { name: "InBamum", bmp: "ꚠ-꛿" },
            { name: "InBamum_Supplement", astral: "\ud81a[\udc00-\ude3f]" },
            { name: "InBasic_Latin", bmp: "\0-" },
            { name: "InBassa_Vah", astral: "\ud81a[\uded0-\udeff]" },
            { name: "InBatak", bmp: "ᯀ-᯿" },
            { name: "InBengali", bmp: "ঀ-৿" },
            { name: "InBhaiksuki", astral: "\ud807[\udc00-\udc6f]" },
            { name: "InBlock_Elements", bmp: "▀-▟" },
            { name: "InBopomofo", bmp: "㄀-ㄯ" },
            { name: "InBopomofo_Extended", bmp: "ㆠ-ㆿ" },
            { name: "InBox_Drawing", bmp: "─-╿" },
            { name: "InBrahmi", astral: "\ud804[\udc00-\udc7f]" },
            { name: "InBraille_Patterns", bmp: "⠀-⣿" },
            { name: "InBuginese", bmp: "ᨀ-᨟" },
            { name: "InBuhid", bmp: "ᝀ-᝟" },
            {
              name: "InByzantine_Musical_Symbols",
              astral: "\ud834[\udc00-\udcff]",
            },
            { name: "InCJK_Compatibility", bmp: "㌀-㏿" },
            { name: "InCJK_Compatibility_Forms", bmp: "︰-﹏" },
            { name: "InCJK_Compatibility_Ideographs", bmp: "豈-﫿" },
            {
              name: "InCJK_Compatibility_Ideographs_Supplement",
              astral: "\ud87e[\udc00-\ude1f]",
            },
            { name: "InCJK_Radicals_Supplement", bmp: "⺀-⻿" },
            { name: "InCJK_Strokes", bmp: "㇀-㇯" },
            { name: "InCJK_Symbols_And_Punctuation", bmp: "　-〿" },
            { name: "InCJK_Unified_Ideographs", bmp: "一-鿿" },
            { name: "InCJK_Unified_Ideographs_Extension_A", bmp: "㐀-䶿" },
            {
              name: "InCJK_Unified_Ideographs_Extension_B",
              astral: "[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]",
            },
            {
              name: "InCJK_Unified_Ideographs_Extension_C",
              astral:
                "\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf3f]",
            },
            {
              name: "InCJK_Unified_Ideographs_Extension_D",
              astral: "\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]",
            },
            {
              name: "InCJK_Unified_Ideographs_Extension_E",
              astral:
                "\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]",
            },
            {
              name: "InCJK_Unified_Ideographs_Extension_F",
              astral:
                "\ud873[\udeb0-\udfff]|[\ud874-\ud879][\udc00-\udfff]|\ud87a[\udc00-\udfef]",
            },
            { name: "InCarian", astral: "\ud800[\udea0-\udedf]" },
            { name: "InCaucasian_Albanian", astral: "\ud801[\udd30-\udd6f]" },
            { name: "InChakma", astral: "\ud804[\udd00-\udd4f]" },
            { name: "InCham", bmp: "ꨀ-꩟" },
            { name: "InCherokee", bmp: "Ꭰ-᏿" },
            { name: "InCherokee_Supplement", bmp: "ꭰ-ꮿ" },
            { name: "InChess_Symbols", astral: "\ud83e[\ude00-\ude6f]" },
            { name: "InCombining_Diacritical_Marks", bmp: "̀-ͯ" },
            { name: "InCombining_Diacritical_Marks_Extended", bmp: "᪰-᫿" },
            { name: "InCombining_Diacritical_Marks_For_Symbols", bmp: "⃐-⃿" },
            { name: "InCombining_Diacritical_Marks_Supplement", bmp: "᷀-᷿" },
            { name: "InCombining_Half_Marks", bmp: "︠-︯" },
            { name: "InCommon_Indic_Number_Forms", bmp: "꠰-꠿" },
            { name: "InControl_Pictures", bmp: "␀-␿" },
            { name: "InCoptic", bmp: "Ⲁ-⳿" },
            { name: "InCoptic_Epact_Numbers", astral: "\ud800[\udee0-\udeff]" },
            {
              name: "InCounting_Rod_Numerals",
              astral: "\ud834[\udf60-\udf7f]",
            },
            { name: "InCuneiform", astral: "\ud808[\udc00-\udfff]" },
            {
              name: "InCuneiform_Numbers_And_Punctuation",
              astral: "\ud809[\udc00-\udc7f]",
            },
            { name: "InCurrency_Symbols", bmp: "₠-⃏" },
            { name: "InCypriot_Syllabary", astral: "\ud802[\udc00-\udc3f]" },
            { name: "InCyrillic", bmp: "Ѐ-ӿ" },
            { name: "InCyrillic_Extended_A", bmp: "ⷠ-ⷿ" },
            { name: "InCyrillic_Extended_B", bmp: "Ꙁ-ꚟ" },
            { name: "InCyrillic_Extended_C", bmp: "ᲀ-᲏" },
            { name: "InCyrillic_Supplement", bmp: "Ԁ-ԯ" },
            { name: "InDeseret", astral: "\ud801[\udc00-\udc4f]" },
            { name: "InDevanagari", bmp: "ऀ-ॿ" },
            { name: "InDevanagari_Extended", bmp: "꣠-ꣿ" },
            { name: "InDingbats", bmp: "✀-➿" },
            { name: "InDogra", astral: "\ud806[\udc00-\udc4f]" },
            { name: "InDomino_Tiles", astral: "\ud83c[\udc30-\udc9f]" },
            { name: "InDuployan", astral: "\ud82f[\udc00-\udc9f]" },
            {
              name: "InEarly_Dynastic_Cuneiform",
              astral: "\ud809[\udc80-\udd4f]",
            },
            {
              name: "InEgyptian_Hieroglyphs",
              astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]",
            },
            { name: "InElbasan", astral: "\ud801[\udd00-\udd2f]" },
            { name: "InEmoticons", astral: "\ud83d[\ude00-\ude4f]" },
            {
              name: "InEnclosed_Alphanumeric_Supplement",
              astral: "\ud83c[\udd00-\uddff]",
            },
            { name: "InEnclosed_Alphanumerics", bmp: "①-⓿" },
            { name: "InEnclosed_CJK_Letters_And_Months", bmp: "㈀-㋿" },
            {
              name: "InEnclosed_Ideographic_Supplement",
              astral: "\ud83c[\ude00-\udeff]",
            },
            { name: "InEthiopic", bmp: "ሀ-፿" },
            { name: "InEthiopic_Extended", bmp: "ⶀ-⷟" },
            { name: "InEthiopic_Extended_A", bmp: "꬀-꬯" },
            { name: "InEthiopic_Supplement", bmp: "ᎀ-᎟" },
            { name: "InGeneral_Punctuation", bmp: " -⁯" },
            { name: "InGeometric_Shapes", bmp: "■-◿" },
            {
              name: "InGeometric_Shapes_Extended",
              astral: "\ud83d[\udf80-\udfff]",
            },
            { name: "InGeorgian", bmp: "Ⴀ-ჿ" },
            { name: "InGeorgian_Extended", bmp: "Ა-Ჿ" },
            { name: "InGeorgian_Supplement", bmp: "ⴀ-⴯" },
            { name: "InGlagolitic", bmp: "Ⰰ-ⱟ" },
            {
              name: "InGlagolitic_Supplement",
              astral: "\ud838[\udc00-\udc2f]",
            },
            { name: "InGothic", astral: "\ud800[\udf30-\udf4f]" },
            { name: "InGrantha", astral: "\ud804[\udf00-\udf7f]" },
            { name: "InGreek_And_Coptic", bmp: "Ͱ-Ͽ" },
            { name: "InGreek_Extended", bmp: "ἀ-῿" },
            { name: "InGujarati", bmp: "઀-૿" },
            { name: "InGunjala_Gondi", astral: "\ud807[\udd60-\uddaf]" },
            { name: "InGurmukhi", bmp: "਀-੿" },
            { name: "InHalfwidth_And_Fullwidth_Forms", bmp: "＀-￯" },
            { name: "InHangul_Compatibility_Jamo", bmp: "㄰-㆏" },
            { name: "InHangul_Jamo", bmp: "ᄀ-ᇿ" },
            { name: "InHangul_Jamo_Extended_A", bmp: "ꥠ-꥿" },
            { name: "InHangul_Jamo_Extended_B", bmp: "ힰ-퟿" },
            { name: "InHangul_Syllables", bmp: "가-힯" },
            { name: "InHanifi_Rohingya", astral: "\ud803[\udd00-\udd3f]" },
            { name: "InHanunoo", bmp: "ᜠ-᜿" },
            { name: "InHatran", astral: "\ud802[\udce0-\udcff]" },
            { name: "InHebrew", bmp: "֐-׿" },
            { name: "InHigh_Private_Use_Surrogates", bmp: "\udb80-\udbff" },
            { name: "InHigh_Surrogates", bmp: "\ud800-\udb7f" },
            { name: "InHiragana", bmp: "぀-ゟ" },
            { name: "InIPA_Extensions", bmp: "ɐ-ʯ" },
            { name: "InIdeographic_Description_Characters", bmp: "⿰-⿿" },
            {
              name: "InIdeographic_Symbols_And_Punctuation",
              astral: "\ud81b[\udfe0-\udfff]",
            },
            { name: "InImperial_Aramaic", astral: "\ud802[\udc40-\udc5f]" },
            { name: "InIndic_Siyaq_Numbers", astral: "\ud83b[\udc70-\udcbf]" },
            {
              name: "InInscriptional_Pahlavi",
              astral: "\ud802[\udf60-\udf7f]",
            },
            {
              name: "InInscriptional_Parthian",
              astral: "\ud802[\udf40-\udf5f]",
            },
            { name: "InJavanese", bmp: "ꦀ-꧟" },
            { name: "InKaithi", astral: "\ud804[\udc80-\udccf]" },
            { name: "InKana_Extended_A", astral: "\ud82c[\udd00-\udd2f]" },
            { name: "InKana_Supplement", astral: "\ud82c[\udc00-\udcff]" },
            { name: "InKanbun", bmp: "㆐-㆟" },
            { name: "InKangxi_Radicals", bmp: "⼀-⿟" },
            { name: "InKannada", bmp: "ಀ-೿" },
            { name: "InKatakana", bmp: "゠-ヿ" },
            { name: "InKatakana_Phonetic_Extensions", bmp: "ㇰ-ㇿ" },
            { name: "InKayah_Li", bmp: "꤀-꤯" },
            { name: "InKharoshthi", astral: "\ud802[\ude00-\ude5f]" },
            { name: "InKhmer", bmp: "ក-៿" },
            { name: "InKhmer_Symbols", bmp: "᧠-᧿" },
            { name: "InKhojki", astral: "\ud804[\ude00-\ude4f]" },
            { name: "InKhudawadi", astral: "\ud804[\udeb0-\udeff]" },
            { name: "InLao", bmp: "຀-໿" },
            { name: "InLatin_1_Supplement", bmp: "-ÿ" },
            { name: "InLatin_Extended_A", bmp: "Ā-ſ" },
            { name: "InLatin_Extended_Additional", bmp: "Ḁ-ỿ" },
            { name: "InLatin_Extended_B", bmp: "ƀ-ɏ" },
            { name: "InLatin_Extended_C", bmp: "Ⱡ-Ɀ" },
            { name: "InLatin_Extended_D", bmp: "꜠-ꟿ" },
            { name: "InLatin_Extended_E", bmp: "ꬰ-꭯" },
            { name: "InLepcha", bmp: "ᰀ-ᱏ" },
            { name: "InLetterlike_Symbols", bmp: "℀-⅏" },
            { name: "InLimbu", bmp: "ᤀ-᥏" },
            { name: "InLinear_A", astral: "\ud801[\ude00-\udf7f]" },
            { name: "InLinear_B_Ideograms", astral: "\ud800[\udc80-\udcff]" },
            { name: "InLinear_B_Syllabary", astral: "\ud800[\udc00-\udc7f]" },
            { name: "InLisu", bmp: "ꓐ-꓿" },
            { name: "InLow_Surrogates", bmp: "\udc00-\udfff" },
            { name: "InLycian", astral: "\ud800[\ude80-\ude9f]" },
            { name: "InLydian", astral: "\ud802[\udd20-\udd3f]" },
            { name: "InMahajani", astral: "\ud804[\udd50-\udd7f]" },
            { name: "InMahjong_Tiles", astral: "\ud83c[\udc00-\udc2f]" },
            { name: "InMakasar", astral: "\ud807[\udee0-\udeff]" },
            { name: "InMalayalam", bmp: "ഀ-ൿ" },
            { name: "InMandaic", bmp: "ࡀ-࡟" },
            { name: "InManichaean", astral: "\ud802[\udec0-\udeff]" },
            { name: "InMarchen", astral: "\ud807[\udc70-\udcbf]" },
            { name: "InMasaram_Gondi", astral: "\ud807[\udd00-\udd5f]" },
            {
              name: "InMathematical_Alphanumeric_Symbols",
              astral: "\ud835[\udc00-\udfff]",
            },
            { name: "InMathematical_Operators", bmp: "∀-⋿" },
            { name: "InMayan_Numerals", astral: "\ud834[\udee0-\udeff]" },
            { name: "InMedefaidrin", astral: "\ud81b[\ude40-\ude9f]" },
            { name: "InMeetei_Mayek", bmp: "ꯀ-꯿" },
            { name: "InMeetei_Mayek_Extensions", bmp: "ꫠ-꫿" },
            { name: "InMende_Kikakui", astral: "\ud83a[\udc00-\udcdf]" },
            { name: "InMeroitic_Cursive", astral: "\ud802[\udda0-\uddff]" },
            { name: "InMeroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
            { name: "InMiao", astral: "\ud81b[\udf00-\udf9f]" },
            { name: "InMiscellaneous_Mathematical_Symbols_A", bmp: "⟀-⟯" },
            { name: "InMiscellaneous_Mathematical_Symbols_B", bmp: "⦀-⧿" },
            { name: "InMiscellaneous_Symbols", bmp: "☀-⛿" },
            { name: "InMiscellaneous_Symbols_And_Arrows", bmp: "⬀-⯿" },
            {
              name: "InMiscellaneous_Symbols_And_Pictographs",
              astral: "\ud83c[\udf00-\udfff]|\ud83d[\udc00-\uddff]",
            },
            { name: "InMiscellaneous_Technical", bmp: "⌀-⏿" },
            { name: "InModi", astral: "\ud805[\ude00-\ude5f]" },
            { name: "InModifier_Tone_Letters", bmp: "꜀-ꜟ" },
            { name: "InMongolian", bmp: "᠀-᢯" },
            { name: "InMongolian_Supplement", astral: "\ud805[\ude60-\ude7f]" },
            { name: "InMro", astral: "\ud81a[\ude40-\ude6f]" },
            { name: "InMultani", astral: "\ud804[\ude80-\udeaf]" },
            { name: "InMusical_Symbols", astral: "\ud834[\udd00-\uddff]" },
            { name: "InMyanmar", bmp: "က-႟" },
            { name: "InMyanmar_Extended_A", bmp: "ꩠ-ꩿ" },
            { name: "InMyanmar_Extended_B", bmp: "ꧠ-꧿" },
            { name: "InNKo", bmp: "߀-߿" },
            { name: "InNabataean", astral: "\ud802[\udc80-\udcaf]" },
            { name: "InNew_Tai_Lue", bmp: "ᦀ-᧟" },
            { name: "InNewa", astral: "\ud805[\udc00-\udc7f]" },
            { name: "InNumber_Forms", bmp: "⅐-↏" },
            { name: "InNushu", astral: "\ud82c[\udd70-\udeff]" },
            { name: "InOgham", bmp: " -᚟" },
            { name: "InOl_Chiki", bmp: "᱐-᱿" },
            { name: "InOld_Hungarian", astral: "\ud803[\udc80-\udcff]" },
            { name: "InOld_Italic", astral: "\ud800[\udf00-\udf2f]" },
            { name: "InOld_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
            { name: "InOld_Permic", astral: "\ud800[\udf50-\udf7f]" },
            { name: "InOld_Persian", astral: "\ud800[\udfa0-\udfdf]" },
            { name: "InOld_Sogdian", astral: "\ud803[\udf00-\udf2f]" },
            { name: "InOld_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
            { name: "InOld_Turkic", astral: "\ud803[\udc00-\udc4f]" },
            { name: "InOptical_Character_Recognition", bmp: "⑀-⑟" },
            { name: "InOriya", bmp: "଀-୿" },
            { name: "InOrnamental_Dingbats", astral: "\ud83d[\ude50-\ude7f]" },
            { name: "InOsage", astral: "\ud801[\udcb0-\udcff]" },
            { name: "InOsmanya", astral: "\ud801[\udc80-\udcaf]" },
            { name: "InPahawh_Hmong", astral: "\ud81a[\udf00-\udf8f]" },
            { name: "InPalmyrene", astral: "\ud802[\udc60-\udc7f]" },
            { name: "InPau_Cin_Hau", astral: "\ud806[\udec0-\udeff]" },
            { name: "InPhags_Pa", bmp: "ꡀ-꡿" },
            { name: "InPhaistos_Disc", astral: "\ud800[\uddd0-\uddff]" },
            { name: "InPhoenician", astral: "\ud802[\udd00-\udd1f]" },
            { name: "InPhonetic_Extensions", bmp: "ᴀ-ᵿ" },
            { name: "InPhonetic_Extensions_Supplement", bmp: "ᶀ-ᶿ" },
            { name: "InPlaying_Cards", astral: "\ud83c[\udca0-\udcff]" },
            { name: "InPrivate_Use_Area", bmp: "-" },
            { name: "InPsalter_Pahlavi", astral: "\ud802[\udf80-\udfaf]" },
            { name: "InRejang", bmp: "ꤰ-꥟" },
            { name: "InRumi_Numeral_Symbols", astral: "\ud803[\ude60-\ude7f]" },
            { name: "InRunic", bmp: "ᚠ-᛿" },
            { name: "InSamaritan", bmp: "ࠀ-࠿" },
            { name: "InSaurashtra", bmp: "ꢀ-꣟" },
            { name: "InSharada", astral: "\ud804[\udd80-\udddf]" },
            { name: "InShavian", astral: "\ud801[\udc50-\udc7f]" },
            {
              name: "InShorthand_Format_Controls",
              astral: "\ud82f[\udca0-\udcaf]",
            },
            { name: "InSiddham", astral: "\ud805[\udd80-\uddff]" },
            { name: "InSinhala", bmp: "඀-෿" },
            {
              name: "InSinhala_Archaic_Numbers",
              astral: "\ud804[\udde0-\uddff]",
            },
            { name: "InSmall_Form_Variants", bmp: "﹐-﹯" },
            { name: "InSogdian", astral: "\ud803[\udf30-\udf6f]" },
            { name: "InSora_Sompeng", astral: "\ud804[\udcd0-\udcff]" },
            { name: "InSoyombo", astral: "\ud806[\ude50-\udeaf]" },
            { name: "InSpacing_Modifier_Letters", bmp: "ʰ-˿" },
            { name: "InSpecials", bmp: "￰-￿" },
            { name: "InSundanese", bmp: "ᮀ-ᮿ" },
            { name: "InSundanese_Supplement", bmp: "᳀-᳏" },
            { name: "InSuperscripts_And_Subscripts", bmp: "⁰-₟" },
            { name: "InSupplemental_Arrows_A", bmp: "⟰-⟿" },
            { name: "InSupplemental_Arrows_B", bmp: "⤀-⥿" },
            {
              name: "InSupplemental_Arrows_C",
              astral: "\ud83e[\udc00-\udcff]",
            },
            { name: "InSupplemental_Mathematical_Operators", bmp: "⨀-⫿" },
            { name: "InSupplemental_Punctuation", bmp: "⸀-⹿" },
            {
              name: "InSupplemental_Symbols_And_Pictographs",
              astral: "\ud83e[\udd00-\uddff]",
            },
            {
              name: "InSupplementary_Private_Use_Area_A",
              astral: "[\udb80-\udbbf][\udc00-\udfff]",
            },
            {
              name: "InSupplementary_Private_Use_Area_B",
              astral: "[\udbc0-\udbff][\udc00-\udfff]",
            },
            { name: "InSutton_SignWriting", astral: "\ud836[\udc00-\udeaf]" },
            { name: "InSyloti_Nagri", bmp: "ꠀ-꠯" },
            { name: "InSyriac", bmp: "܀-ݏ" },
            { name: "InSyriac_Supplement", bmp: "ࡠ-࡯" },
            { name: "InTagalog", bmp: "ᜀ-ᜟ" },
            { name: "InTagbanwa", bmp: "ᝠ-᝿" },
            { name: "InTags", astral: "\udb40[\udc00-\udc7f]" },
            { name: "InTai_Le", bmp: "ᥐ-᥿" },
            { name: "InTai_Tham", bmp: "ᨠ-᪯" },
            { name: "InTai_Viet", bmp: "ꪀ-꫟" },
            {
              name: "InTai_Xuan_Jing_Symbols",
              astral: "\ud834[\udf00-\udf5f]",
            },
            { name: "InTakri", astral: "\ud805[\ude80-\udecf]" },
            { name: "InTamil", bmp: "஀-௿" },
            { name: "InTangut", astral: "[\ud81c-\ud821][\udc00-\udfff]" },
            { name: "InTangut_Components", astral: "\ud822[\udc00-\udeff]" },
            { name: "InTelugu", bmp: "ఀ-౿" },
            { name: "InThaana", bmp: "ހ-޿" },
            { name: "InThai", bmp: "฀-๿" },
            { name: "InTibetan", bmp: "ༀ-࿿" },
            { name: "InTifinagh", bmp: "ⴰ-⵿" },
            { name: "InTirhuta", astral: "\ud805[\udc80-\udcdf]" },
            {
              name: "InTransport_And_Map_Symbols",
              astral: "\ud83d[\ude80-\udeff]",
            },
            { name: "InUgaritic", astral: "\ud800[\udf80-\udf9f]" },
            { name: "InUnified_Canadian_Aboriginal_Syllabics", bmp: "᐀-ᙿ" },
            {
              name: "InUnified_Canadian_Aboriginal_Syllabics_Extended",
              bmp: "ᢰ-᣿",
            },
            { name: "InVai", bmp: "ꔀ-꘿" },
            { name: "InVariation_Selectors", bmp: "︀-️" },
            {
              name: "InVariation_Selectors_Supplement",
              astral: "\udb40[\udd00-\uddef]",
            },
            { name: "InVedic_Extensions", bmp: "᳐-᳿" },
            { name: "InVertical_Forms", bmp: "︐-︟" },
            { name: "InWarang_Citi", astral: "\ud806[\udca0-\udcff]" },
            { name: "InYi_Radicals", bmp: "꒐-꓏" },
            { name: "InYi_Syllables", bmp: "ꀀ-꒏" },
            { name: "InYijing_Hexagram_Symbols", bmp: "䷀-䷿" },
            { name: "InZanabazar_Square", astral: "\ud806[\ude00-\ude4f]" },
          ];
        },
        {},
      ],
      11: [
        function (d, u, e) {
          u.exports = [
            {
              name: "C",
              alias: "Other",
              isBmpLast: !0,
              bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜؝۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
              astral:
                "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]",
            },
            { name: "Cc", alias: "Control", bmp: "\0--" },
            {
              name: "Cf",
              alias: "Format",
              bmp: "­؀-؅؜۝܏࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\ufeff￹-￻",
              astral:
                "\ud804[\udcbd\udccd]|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]",
            },
            {
              name: "Cn",
              alias: "Unassigned",
              bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿؝܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࢟ࢵࢾ-࣒঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-೿ഄ഍഑൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏ᳺ-᳿᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃀-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⮗⯉⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹏-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿰-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ꞻ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
              astral:
                "\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2c\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude36\ude37\ude3b-\ude3e\ude49-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd28-\udd2f\udd3a-\ude5f\ude7f-\udeff\udf28-\udf2f\udf5a-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccc\udcce\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd47-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5f-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1b\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc3c-\udc9f\udcf3-\udcfe\udd00-\uddff\ude48-\ude4f\ude84\ude85\udea3-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udcff\udd07\udd0a\udd37-\udd39\udd3b\udd3e\udd48-\udd4f\udd5a-\udd5f\udd66\udd69\udd8f\udd92\udd99-\udd9f\uddaa-\udedf\udef9-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud87b-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\ude3f\ude9b-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe2-\udfff]|\ud821[\udff2-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udd1f-\udd6f\udefc-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udedf\udef4-\udeff\udf57-\udf5f\udf79-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\udc70\udcb5-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\ude5f\ude66-\udeff]|\ud83d[\uded5-\udedf\udeed-\udeef\udefa-\udeff\udf74-\udf7f\udfd9-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udcff\udd0c-\udd0f\udd3f\udd71\udd72\udd77-\udd79\udd7b\udda3-\uddaf\uddba-\uddbf\uddc3-\uddcf\ude00-\ude5f\ude6e-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udeaf]|\ud87a[\udfe1-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]",
            },
            {
              name: "Co",
              alias: "Private_Use",
              bmp: "-",
              astral:
                "[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]",
            },
            { name: "Cs", alias: "Surrogate", bmp: "\ud800-\udfff" },
            {
              name: "L",
              alias: "Letter",
              bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
              astral:
                "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udca0-\udcdf\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udd00-\udd43]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]",
            },
            {
              name: "LC",
              alias: "Cased_Letter",
              bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
              astral:
                "\ud801[\udc00-\udc4f\udcb0-\udcd3\udcd8-\udcfb]|\ud803[\udc80-\udcb2\udcc0-\udcf2]|\ud806[\udca0-\udcdf]|\ud81b[\ude40-\ude7f]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udd00-\udd43]",
            },
            {
              name: "Ll",
              alias: "Lowercase_Letter",
              bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
              astral:
                "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]",
            },
            {
              name: "Lm",
              alias: "Modifier_Letter",
              bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ",
              astral: "\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0\udfe1]",
            },
            {
              name: "Lo",
              alias: "Other_Letter",
              bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
              astral:
                "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udd00-\udd23\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd44\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf1a]|\ud806[\udc00-\udc2b\udcff\ude00\ude0b-\ude32\ude3a\ude50\ude5c-\ude83\ude86-\ude89\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f\udd00-\udd06\udd08\udd09\udd0b-\udd30\udd46\udd60-\udd65\udd67\udd68\udd6a-\udd89\udd98\udee0-\udef2]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]",
            },
            { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" },
            {
              name: "Lu",
              alias: "Uppercase_Letter",
              bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
              astral:
                "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]",
            },
            {
              name: "M",
              alias: "Mark",
              bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
              astral:
                "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd45\udd46\udd73\udd80-\udd82\uddb3-\uddc0\uddc9-\uddcc\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3b\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udc5e\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud806[\udc2c-\udc3a\ude01-\ude0a\ude33-\ude39\ude3b-\ude3e\ude47\ude51-\ude5b\ude8a-\ude99]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd8a-\udd8e\udd90\udd91\udd93-\udd97\udef3-\udef6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]",
            },
            {
              name: "Mc",
              alias: "Spacing_Mark",
              bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
              astral:
                "\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd45\udd46\udd82\uddb3-\uddb5\uddbf\uddc0\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud806[\udc2c-\udc2e\udc38\ude39\ude57\ude58\ude97]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4\udd8a-\udd8e\udd93\udd94\udd96\udef5\udef6]|\ud81b[\udf51-\udf7e]|\ud834[\udd65\udd66\udd6d-\udd72]",
            },
            { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" },
            {
              name: "Mn",
              alias: "Nonspacing_Mark",
              bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀఄా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
              astral:
                "\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud803[\udd24-\udd27\udf46-\udf50]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddc9-\uddcc\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3b\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udc5e\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud806[\udc2f-\udc37\udc39\udc3a\ude01-\ude0a\ude33-\ude38\ude3b-\ude3e\ude47\ude51-\ude56\ude59-\ude5b\ude8a-\ude96\ude98\ude99]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6\udd31-\udd36\udd3a\udd3c\udd3d\udd3f-\udd45\udd47\udd90\udd91\udd95\udd97\udef3\udef4]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]",
            },
            {
              name: "N",
              alias: "Number",
              bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
              astral:
                "\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\udd30-\udd39\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2]|\ud807[\udc50-\udc6c\udd50-\udd59\udda0-\udda9]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud835[\udfce-\udfff]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]",
            },
            {
              name: "Nd",
              alias: "Decimal_Number",
              bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
              astral:
                "\ud801[\udca0-\udca9]|\ud803[\udd30-\udd39]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9]|\ud807[\udc50-\udc59\udd50-\udd59\udda0-\udda9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud83a[\udd50-\udd59]",
            },
            {
              name: "Nl",
              alias: "Letter_Number",
              bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
              astral:
                "\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]",
            },
            {
              name: "No",
              alias: "Other_Number",
              bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
              astral:
                "\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude48\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e\udf1d-\udf26\udf51-\udf54]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c]|\ud81a[\udf5b-\udf61]|\ud81b[\ude80-\ude96]|\ud834[\udee0-\udef3\udf60-\udf78]|\ud83a[\udcc7-\udccf]|\ud83b[\udc71-\udcab\udcad-\udcaf\udcb1-\udcb4]|\ud83c[\udd00-\udd0c]",
            },
            {
              name: "P",
              alias: "Punctuation",
              bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹎、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
              astral:
                "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]",
            },
            {
              name: "Pc",
              alias: "Connector_Punctuation",
              bmp: "_‿⁀⁔︳︴﹍-﹏＿",
            },
            {
              name: "Pd",
              alias: "Dash_Punctuation",
              bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－",
            },
            {
              name: "Pe",
              alias: "Close_Punctuation",
              bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣",
            },
            { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" },
            { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" },
            {
              name: "Po",
              alias: "Other_Punctuation",
              bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹎、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
              astral:
                "\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud803[\udf55-\udf59]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc8\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud806[\udc3b\ude3f-\ude46\ude9a-\ude9c\ude9e-\udea2]|\ud807[\udc41-\udc45\udc70\udc71\udef7\udef8]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|\ud81b[\ude97-\ude9a]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]",
            },
            {
              name: "Ps",
              alias: "Open_Punctuation",
              bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢",
            },
            {
              name: "S",
              alias: "Symbol",
              bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₿℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
              astral:
                "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud83b[\udcac\udcb0\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]",
            },
            {
              name: "Sc",
              alias: "Currency_Symbol",
              bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-₿꠸﷼﹩＄￠￡￥￦",
              astral: "𞲰",
            },
            {
              name: "Sk",
              alias: "Modifier_Symbol",
              bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣",
              astral: "\ud83c[\udffb-\udfff]",
            },
            {
              name: "Sm",
              alias: "Math_Symbol",
              bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
              astral:
                "\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]",
            },
            {
              name: "So",
              alias: "Other_Symbol",
              bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⯈⯊-⯾⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",
              astral:
                "\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|𞲬|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udffa]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]",
            },
            { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" },
            { name: "Zl", alias: "Line_Separator", bmp: "\u2028" },
            { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" },
            { name: "Zs", alias: "Space_Separator", bmp: "    -   　" },
          ];
        },
        {},
      ],
      12: [
        function (d, u, e) {
          u.exports = [
            { name: "ASCII", bmp: "\0-" },
            {
              name: "Alphabetic",
              bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഀ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽꣾꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
              astral:
                "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf2d-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2\udd00-\udd27\udf00-\udf1c\udf27\udf30-\udf45]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd44-\udd46\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udf00-\udf1a\udf1d-\udf2a]|\ud806[\udc00-\udc38\udca0-\udcdf\udcff\ude00-\ude32\ude35-\ude3e\ude50-\ude83\ude86-\ude97\ude9d\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd41\udd43\udd46\udd47\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd96\udd98\udee0-\udef6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\ude40-\ude7f\udf00-\udf44\udf50-\udf7e\udf93-\udf9f\udfe0\udfe1]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]|\ud82c[\udc00-\udd1e\udd70-\udefb]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]",
            },
            {
              name: "Any",
              isBmpLast: !0,
              bmp: "\0-￿",
              astral: "[\ud800-\udbff][\udc00-\udfff]",
            },
            {
              name: "Default_Ignorable_Code_Point",
              bmp: "­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\ufeffﾠ￰-￸",
              astral:
                "\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]",
            },
            {
              name: "Lowercase",
              bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
              astral:
                "\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud81b[\ude60-\ude7f]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]",
            },
            {
              name: "Noncharacter_Code_Point",
              bmp: "﷐-﷯￾￿",
              astral:
                "[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]",
            },
            {
              name: "Uppercase",
              bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸＡ-Ｚ",
              astral:
                "\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud81b[\ude40-\ude5f]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]",
            },
            { name: "White_Space", bmp: "\t-\r    - \u2028\u2029  　" },
          ];
        },
        {},
      ],
      13: [
        function (d, u, e) {
          u.exports = [
            {
              name: "Adlam",
              astral: "\ud83a[\udd00-\udd4a\udd50-\udd59\udd5e\udd5f]",
            },
            {
              name: "Ahom",
              astral: "\ud805[\udf00-\udf1a\udf1d-\udf2b\udf30-\udf3f]",
            },
            { name: "Anatolian_Hieroglyphs", astral: "\ud811[\udc00-\ude46]" },
            {
              name: "Arabic",
              bmp: "؀-؄؆-؋؍-ؚ؜؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࢶ-ࢽ࣓-ࣣ࣡-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",
              astral:
                "\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]",
            },
            { name: "Armenian", bmp: "Ա-Ֆՙ-ֈ֊֍-֏ﬓ-ﬗ" },
            { name: "Avestan", astral: "\ud802[\udf00-\udf35\udf39-\udf3f]" },
            { name: "Balinese", bmp: "ᬀ-ᭋ᭐-᭼" },
            { name: "Bamum", bmp: "ꚠ-꛷", astral: "\ud81a[\udc00-\ude38]" },
            { name: "Bassa_Vah", astral: "\ud81a[\uded0-\udeed\udef0-\udef5]" },
            { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" },
            { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" },
            {
              name: "Bhaiksuki",
              astral:
                "\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]",
            },
            { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆺ" },
            {
              name: "Brahmi",
              astral: "\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]",
            },
            { name: "Braille", bmp: "⠀-⣿" },
            { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" },
            { name: "Buhid", bmp: "ᝀ-ᝓ" },
            { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ" },
            { name: "Carian", astral: "\ud800[\udea0-\uded0]" },
            {
              name: "Caucasian_Albanian",
              astral: "\ud801[\udd30-\udd63\udd6f]",
            },
            { name: "Chakma", astral: "\ud804[\udd00-\udd34\udd36-\udd46]" },
            { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" },
            { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" },
            {
              name: "Common",
              bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₿℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⯈⯊-⯾⸀-⹎⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\ufeff！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
              astral:
                "\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc\udee1-\udefb]|\ud82f[\udca0-\udca3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udee0-\udef3\udf00-\udf56\udf60-\udf78]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83b[\udc71-\udcb4]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\udd0c\udd10-\udd6b\udd70-\uddac\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\ude60-\ude65\udf00-\udfff]|\ud83d[\udc00-\uded4\udee0-\udeec\udef0-\udef9\udf00-\udf73\udf80-\udfd8]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd00-\udd0b\udd10-\udd3e\udd40-\udd70\udd73-\udd76\udd7a\udd7c-\udda2\uddb0-\uddb9\uddc0-\uddc2\uddd0-\uddff\ude60-\ude6d]|\udb40[\udc01\udc20-\udc7f]",
            },
            { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" },
            {
              name: "Cuneiform",
              astral:
                "\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]",
            },
            {
              name: "Cypriot",
              astral:
                "\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]",
            },
            { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" },
            { name: "Deseret", astral: "\ud801[\udc00-\udc4f]" },
            { name: "Devanagari", bmp: "ऀ-ॐ॓-ॣ०-ॿ꣠-ꣿ" },
            { name: "Dogra", astral: "\ud806[\udc00-\udc3b]" },
            {
              name: "Duployan",
              astral:
                "\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]",
            },
            {
              name: "Egyptian_Hieroglyphs",
              astral: "\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]",
            },
            { name: "Elbasan", astral: "\ud801[\udd00-\udd27]" },
            {
              name: "Ethiopic",
              bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ",
            },
            { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" },
            {
              name: "Glagolitic",
              bmp: "Ⰰ-Ⱞⰰ-ⱞ",
              astral:
                "\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]",
            },
            { name: "Gothic", astral: "\ud800[\udf30-\udf4a]" },
            {
              name: "Grantha",
              astral:
                "\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]",
            },
            {
              name: "Greek",
              bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
              astral: "\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]",
            },
            {
              name: "Gujarati",
              bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿",
            },
            {
              name: "Gunjala_Gondi",
              astral:
                "\ud807[\udd60-\udd65\udd67\udd68\udd6a-\udd8e\udd90\udd91\udd93-\udd98\udda0-\udda9]",
            },
            { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" },
            {
              name: "Han",
              bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿯豈-舘並-龎",
              astral:
                "[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872\ud874-\ud879][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1\udeb0-\udfff]|\ud87a[\udc00-\udfe0]|\ud87e[\udc00-\ude1d]",
            },
            {
              name: "Hangul",
              bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
            },
            {
              name: "Hanifi_Rohingya",
              astral: "\ud803[\udd00-\udd27\udd30-\udd39]",
            },
            { name: "Hanunoo", bmp: "ᜠ-᜴" },
            {
              name: "Hatran",
              astral: "\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]",
            },
            { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" },
            {
              name: "Hiragana",
              bmp: "ぁ-ゖゝ-ゟ",
              astral: "\ud82c[\udc01-\udd1e]|🈀",
            },
            {
              name: "Imperial_Aramaic",
              astral: "\ud802[\udc40-\udc55\udc57-\udc5f]",
            },
            {
              name: "Inherited",
              bmp: "̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
              astral:
                "\ud800[\uddfd\udee0]|𑌻|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]",
            },
            {
              name: "Inscriptional_Pahlavi",
              astral: "\ud802[\udf60-\udf72\udf78-\udf7f]",
            },
            {
              name: "Inscriptional_Parthian",
              astral: "\ud802[\udf40-\udf55\udf58-\udf5f]",
            },
            { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" },
            { name: "Kaithi", astral: "\ud804[\udc80-\udcc1\udccd]" },
            { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ" },
            {
              name: "Katakana",
              bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
              astral: "𛀀",
            },
            { name: "Kayah_Li", bmp: "꤀-꤭꤯" },
            {
              name: "Kharoshthi",
              astral:
                "\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude35\ude38-\ude3a\ude3f-\ude48\ude50-\ude58]",
            },
            { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" },
            { name: "Khojki", astral: "\ud804[\ude00-\ude11\ude13-\ude3e]" },
            { name: "Khudawadi", astral: "\ud804[\udeb0-\udeea\udef0-\udef9]" },
            { name: "Lao", bmp: "ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" },
            {
              name: "Latin",
              bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞹꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ",
            },
            { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" },
            { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" },
            {
              name: "Linear_A",
              astral: "\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]",
            },
            {
              name: "Linear_B",
              astral:
                "\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]",
            },
            { name: "Lisu", bmp: "ꓐ-꓿" },
            { name: "Lycian", astral: "\ud800[\ude80-\ude9c]" },
            { name: "Lydian", astral: "\ud802[\udd20-\udd39\udd3f]" },
            { name: "Mahajani", astral: "\ud804[\udd50-\udd76]" },
            { name: "Makasar", astral: "\ud807[\udee0-\udef8]" },
            { name: "Malayalam", bmp: "ഀ-ഃഅ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" },
            { name: "Mandaic", bmp: "ࡀ-࡛࡞" },
            {
              name: "Manichaean",
              astral: "\ud802[\udec0-\udee6\udeeb-\udef6]",
            },
            {
              name: "Marchen",
              astral: "\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]",
            },
            {
              name: "Masaram_Gondi",
              astral:
                "\ud807[\udd00-\udd06\udd08\udd09\udd0b-\udd36\udd3a\udd3c\udd3d\udd3f-\udd47\udd50-\udd59]",
            },
            { name: "Medefaidrin", astral: "\ud81b[\ude40-\ude9a]" },
            { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" },
            {
              name: "Mende_Kikakui",
              astral: "\ud83a[\udc00-\udcc4\udcc7-\udcd6]",
            },
            {
              name: "Meroitic_Cursive",
              astral: "\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]",
            },
            { name: "Meroitic_Hieroglyphs", astral: "\ud802[\udd80-\udd9f]" },
            {
              name: "Miao",
              astral: "\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]",
            },
            { name: "Modi", astral: "\ud805[\ude00-\ude44\ude50-\ude59]" },
            {
              name: "Mongolian",
              bmp: "᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡸᢀ-ᢪ",
              astral: "\ud805[\ude60-\ude6c]",
            },
            {
              name: "Mro",
              astral: "\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]",
            },
            {
              name: "Multani",
              astral:
                "\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]",
            },
            { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" },
            { name: "Nabataean", astral: "\ud802[\udc80-\udc9e\udca7-\udcaf]" },
            { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" },
            { name: "Newa", astral: "\ud805[\udc00-\udc59\udc5b\udc5d\udc5e]" },
            { name: "Nko", bmp: "߀-ߺ߽-߿" },
            { name: "Nushu", astral: "𖿡|\ud82c[\udd70-\udefb]" },
            { name: "Ogham", bmp: " -᚜" },
            { name: "Ol_Chiki", bmp: "᱐-᱿" },
            {
              name: "Old_Hungarian",
              astral: "\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]",
            },
            {
              name: "Old_Italic",
              astral: "\ud800[\udf00-\udf23\udf2d-\udf2f]",
            },
            { name: "Old_North_Arabian", astral: "\ud802[\ude80-\ude9f]" },
            { name: "Old_Permic", astral: "\ud800[\udf50-\udf7a]" },
            {
              name: "Old_Persian",
              astral: "\ud800[\udfa0-\udfc3\udfc8-\udfd5]",
            },
            { name: "Old_Sogdian", astral: "\ud803[\udf00-\udf27]" },
            { name: "Old_South_Arabian", astral: "\ud802[\ude60-\ude7f]" },
            { name: "Old_Turkic", astral: "\ud803[\udc00-\udc48]" },
            { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷" },
            { name: "Osage", astral: "\ud801[\udcb0-\udcd3\udcd8-\udcfb]" },
            { name: "Osmanya", astral: "\ud801[\udc80-\udc9d\udca0-\udca9]" },
            {
              name: "Pahawh_Hmong",
              astral:
                "\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]",
            },
            { name: "Palmyrene", astral: "\ud802[\udc60-\udc7f]" },
            { name: "Pau_Cin_Hau", astral: "\ud806[\udec0-\udef8]" },
            { name: "Phags_Pa", bmp: "ꡀ-꡷" },
            { name: "Phoenician", astral: "\ud802[\udd00-\udd1b\udd1f]" },
            {
              name: "Psalter_Pahlavi",
              astral: "\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]",
            },
            { name: "Rejang", bmp: "ꤰ-꥓꥟" },
            { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" },
            { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" },
            { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" },
            { name: "Sharada", astral: "\ud804[\udd80-\uddcd\uddd0-\udddf]" },
            { name: "Shavian", astral: "\ud801[\udc50-\udc7f]" },
            { name: "Siddham", astral: "\ud805[\udd80-\uddb5\uddb8-\udddd]" },
            {
              name: "SignWriting",
              astral: "\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]",
            },
            {
              name: "Sinhala",
              bmp: "ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
              astral: "\ud804[\udde1-\uddf4]",
            },
            { name: "Sogdian", astral: "\ud803[\udf30-\udf59]" },
            {
              name: "Sora_Sompeng",
              astral: "\ud804[\udcd0-\udce8\udcf0-\udcf9]",
            },
            { name: "Soyombo", astral: "\ud806[\ude50-\ude83\ude86-\udea2]" },
            { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" },
            { name: "Syloti_Nagri", bmp: "ꠀ-꠫" },
            { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" },
            { name: "Tagalog", bmp: "ᜀ-ᜌᜎ-᜔" },
            { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" },
            { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" },
            { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" },
            { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" },
            { name: "Takri", astral: "\ud805[\ude80-\udeb7\udec0-\udec9]" },
            { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺" },
            {
              name: "Tangut",
              astral:
                "𖿠|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udff1]|\ud822[\udc00-\udef2]",
            },
            { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿" },
            { name: "Thaana", bmp: "ހ-ޱ" },
            { name: "Thai", bmp: "ก-ฺเ-๛" },
            { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" },
            { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" },
            { name: "Tirhuta", astral: "\ud805[\udc80-\udcc7\udcd0-\udcd9]" },
            { name: "Ugaritic", astral: "\ud800[\udf80-\udf9d\udf9f]" },
            { name: "Vai", bmp: "ꔀ-ꘫ" },
            { name: "Warang_Citi", astral: "\ud806[\udca0-\udcf2\udcff]" },
            { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" },
            { name: "Zanabazar_Square", astral: "\ud806[\ude00-\ude47]" },
          ];
        },
        {},
      ],
    },
    {},
    [8]
  )(8);
});
