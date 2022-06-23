! function() {
    "use strict";
    var e = function() {
        var e = setTimeout;

        function n() {}

        function t(e) {
            if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
        }

        function i(e, n) {
            for (; 3 === e._state;) e = e._value;
            0 !== e._state ? (e._handled = !0, t._immediateFn((function() {
                var t = 1 === e._state ? n.onFulfilled : n.onRejected;
                if (null !== t) {
                    var i;
                    try {
                        i = t(e._value)
                    } catch (e) {
                        return void o(n.promise, e)
                    }
                    r(n.promise, i)
                } else(1 === e._state ? r : o)(n.promise, e._value)
            }))) : e._deferreds.push(n)
        }

        function r(e, n) {
            try {
                if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var i = n.then;
                    if (n instanceof t) return e._state = 3, e._value = n, void a(e);
                    if ("function" == typeof i) return void c((r = i, u = n, function() {
                        r.apply(u, arguments)
                    }), e)
                }
                e._state = 1, e._value = n, a(e)
            } catch (n) {
                o(e, n)
            }
            var r, u
        }

        function o(e, n) {
            e._state = 2, e._value = n, a(e)
        }

        function a(e) {
            2 === e._state && 0 === e._deferreds.length && t._immediateFn((function() {
                e._handled || t._unhandledRejectionFn(e._value)
            }));
            for (var n = 0, r = e._deferreds.length; r > n; n++) i(e, e._deferreds[n]);
            e._deferreds = null
        }

        function u(e, n, t) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
        }

        function c(e, n) {
            var t = !1;
            try {
                e((function(e) {
                    t || (t = !0, r(n, e))
                }), (function(e) {
                    t || (t = !0, o(n, e))
                }))
            } catch (e) {
                if (t) return;
                t = !0, o(n, e)
            }
        }
        t.prototype.catch = function(e) {
            return this.then(null, e)
        }, t.prototype.then = function(e, t) {
            var r = new this.constructor(n);
            return i(this, new u(e, t, r)), r
        }, t.prototype.finally = function(e) {
            var n = this.constructor;
            return this.then((function(t) {
                return n.resolve(e()).then((function() {
                    return t
                }))
            }), (function(t) {
                return n.resolve(e()).then((function() {
                    return n.reject(t)
                }))
            }))
        }, t.all = function(e) {
            return new t((function(n, t) {
                if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
                var i = Array.prototype.slice.call(e);
                if (0 === i.length) return n([]);
                var r = i.length;

                function o(e, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var u = a.then;
                            if ("function" == typeof u) return void u.call(a, (function(n) {
                                o(e, n)
                            }), t)
                        }
                        i[e] = a, 0 == --r && n(i)
                    } catch (e) {
                        t(e)
                    }
                }
                for (var a = 0; i.length > a; a++) o(a, i[a])
            }))
        }, t.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === t ? e : new t((function(n) {
                n(e)
            }))
        }, t.reject = function(e) {
            return new t((function(n, t) {
                t(e)
            }))
        }, t.race = function(e) {
            return new t((function(n, t) {
                for (var i = 0, r = e.length; r > i; i++) e[i].then(n, t)
            }))
        }, t._immediateFn = "function" == typeof setImmediate && function(e) {
            setImmediate(e)
        } || function(n) {
            e(n, 0)
        }, t._unhandledRejectionFn = function(e) {
            void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        };
        var s = t;
        return /native code/.test(window.Promise) ? window.Promise : s
    }();

    function n() {
        return (n = Object.assign || function(e) {
            for (var n = 1; arguments.length > n; n++) {
                var t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }).apply(this, arguments)
    }

    function t(e, n) {
        return e + n
    }
    var i = {}.hasOwnProperty;

    function r(e, n) {
        return i.call(n, e)
    }

    function o() {
        return (o = Object.assign || function(e) {
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) t[i - 1] = arguments[i];
            return t.forEach((function(n) {
                for (var t in n) r(t, n) && (e[t] = n[t])
            })), e
        }).apply(void 0, arguments)
    }
    var a = Array.isArray;

    function u(e) {
        return "object" == typeof e && null !== e && !a(e)
    }

    function c(e, n) {
        return Object.keys(n).reduce((function(t, i) {
            return t[i] = e(n[i]), t
        }), {})
    }

    function s(e) {
        return a(e) ? e.map(s) : u(e) ? c(s, e) : e
    }

    function d(e, n) {
        for (var t = 0; n.length > t; t++) {
            var i = n[t];
            if (e(i)) return i
        }
    }

    function l(e, n) {
        for (var t = n.length - 1; t >= 0; t--)
            if (e(n[t])) return n[t]
    }

    function f(e) {
        return e
    }

    function p(e, n) {
        return Object.keys(n).forEach((function(t) {
            e(n[t], t)
        }))
    }

    function h() {
        return Math.random().toString(36).substring(2)
    }

    function v(e) {
        var n = h();
        return r(n, e) ? v(e) : n
    }

    function m(e, n, t) {
        var i = function(e, n) {
            for (var t = "string" == typeof e ? e.split(".") : e, i = 0, r = n; r && t.length > i;) r = r[t[i++]];
            return r
        }(n, t);
        return null != i ? i : e
    }

    function g(e, n) {
        return -1 !== n.indexOf(e)
    }

    function _(e) {
        return 0 === (a(e) ? e : Object.keys(e)).length
    }

    function w(e) {
        return !e
    }

    function y(e) {
        return !!e
    }

    function b(e) {
        return e.length > 0 ? e[e.length - 1] : null
    }

    function k(e, n) {
        return Object.keys(n).reduce((function(t, i) {
            return t[e(i)] = n[i], t
        }), {})
    }

    function C(e, n) {
        if (_(n)) return e;
        var t = {};
        return p((function(i, o) {
            if (r(o, n))
                if (u(e[o]) && u(n[o])) t[o] = C(e[o], n[o]);
                else if (a(e[o]) && a(n[o])) {
                var c = Math.max(e[o].length, n[o].length);
                t[o] = Array(c);
                for (var s = 0; c > s; s++) s in n[o] ? t[o][s] = n[o][s] : s in e[o] && (t[o][s] = e[o][s])
            } else t[o] = n[o];
            else t[o] = e[o]
        }), e), p((function(e, i) {
            r(i, t) || (t[i] = n[i])
        }), n), t
    }

    function I(e) {
        if (0 === e.length) return {};
        var n = e[0];
        return e.slice(1).reduce((function(e, n) {
            return C(e, n)
        }), n)
    }

    function L(e) {
        return function(e, n) {
            var t = {};
            return function() {
                var i = e.apply(void 0, arguments);
                if (r(i, t)) return t[i];
                var o = n.apply(void 0, arguments);
                return t[i] = o, o
            }
        }(f, e)
    }

    function x() {}

    function E(e, n) {
        return e === n ? 0 !== e || 0 !== n || 1 / e == 1 / n : e != e && n != n
    }

    function A(e, n) {
        if (E(e, n)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
        var t = Object.keys(e);
        if (t.length !== Object.keys(n).length) return !1;
        for (var i = 0; t.length > i; i++)
            if (!r(t[i], n) || !E(e[t[i]], n[t[i]])) return !1;
        return !0
    }

    function O(e) {
        return e.reduce(t, 0)
    }
    var T = function(e) {
        return Object.keys(e).map((function(n) {
            return [n, e[n]]
        }))
    };
    var P = function(e, n) {
            p((function(e, t) {
                n.style[t] = e
            }), e)
        },
        z = function(e, n) {
            p((function(e, t) {
                "style" !== t ? n.setAttribute(t, e) : P(e, n)
            }), e)
        },
        S = !!document.documentElement.currentStyle,
        M = function(e, n) {
            var t = window.getComputedStyle(n),
                i = "border-box" === t.boxSizing,
                o = function(e, n) {
                    return e.reduce((function(e, t) {
                        return e[t] = n[t], e
                    }), {})
                }(e, t);
            S && i && r("width", o) && null !== o.width && (o.width = O([o.width, t.paddingLeft, t.paddingRight, t.borderLeftWidth, t.borderRightWidth].map(parseFloat)) + "px");
            S && i && r("height", o) && null !== o.height && (o.height = O([o.height, t.paddingTop, t.paddingBottom, t.borderTopWidth, t.borderBottomWidth].map(parseFloat)) + "px");
            return o
        };

    function j() {
        return new e((function(e) {
            ! function n() {
                document.body ? e(document.body) : setTimeout(n, 100)
            }()
        }))
    }

    function N(e) {
        var n = e.parentNode;
        n && n.removeChild(e)
    }
    var q = function(e, n) {
            var t = document.createElement(e);
            return z(n, t), t
        },
        D = function(e) {
            return T(e).map((function(e) {
                return e.map(encodeURIComponent).join("=")
            })).join("&")
        },
        H = /(?:[^:]+:\/\/)?([^/\s]+)/;
    var F = /[^:]+:\/\/[^(/|?)\s]+/,
        W = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/,
        B = function(e) {
            return e.replace(/\w/g, "$&[\\r\\n\\t]*")
        },
        R = (RegExp("^[\0-]*(" + B("javascript") + "|" + B("data") + "):", "i"), /^((http(s)?:)?\/\/)/),
        V = function(e) {
            return function(n, t) {
                if (0 === n) {
                    if ("function" != typeof e) return t(0, (function() {})), void t(2);
                    var i, r = !1;
                    t(0, (function(e) {
                        r || (r = 2 === e) && "function" == typeof i && i()
                    })), r || (i = e((function(e) {
                        r || t(1, e)
                    }), (function(e) {
                        r || void 0 === e || (r = !0, t(2, e))
                    }), (function() {
                        r || (r = !0, t(2))
                    })))
                }
            }
        },
        G = function(e) {
            return function(n, t) {
                var i, r;
                0 === n && e(0, (function(e, n) {
                    if (0 === e) i = n, t(0, o);
                    else if (1 === e) {
                        var a = n;
                        r && r(2), a(0, (function(e, n) {
                            0 === e ? (r = n)(1) : 1 === e ? t(1, n) : 2 === e && n ? (i && i(2), t(2, n)) : 2 === e && (i ? (r = void 0, i(1)) : t(2))
                        }))
                    } else 2 === e && n ? (r && r(2), t(2, n)) : 2 === e && (r ? i = void 0 : t(2))
                }));

                function o(e, n) {
                    1 === e && (r || i)(1, n), 2 === e && (r && r(2), i && i(2))
                }
            }
        },
        U = function(e, n) {
            return e === n
        };

    function J(e) {
        return void 0 === e && (e = U),
            function(n) {
                return function(t, i) {
                    if (0 === t) {
                        var r, o, a = !1;
                        n(0, (function(n, t) {
                            0 === n && (o = t), 1 === n ? a && e(r, t) ? o(1) : (a = !0, r = t, i(1, t)) : i(n, t)
                        }))
                    }
                }
            }
    }
    var X = function(e) {
            return function(n) {
                return function(t, i) {
                    var r;
                    0 === t && n(0, (function(n, t) {
                        0 === n ? (r = t, i(n, t)) : 1 === n ? e(t) ? i(n, t) : r(1) : i(n, t)
                    }))
                }
            }
        },
        Y = function(e) {
            return function(n) {
                var t;
                n(0, (function(n, i) {
                    0 === n && (t = i), 1 === n && e(i), 1 !== n && 0 !== n || t(1)
                }))
            }
        },
        $ = function(e, n, t) {
            return function(i, r) {
                if (0 === i) {
                    var o = !1,
                        a = function(e) {
                            r(1, e)
                        };
                    r(0, (function(i) {
                        2 === i && (o = !0, e.removeEventListener(n, a, t))
                    })), o || e.addEventListener(n, a, t)
                }
            }
        };
    var K = function() {
        for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
        return function(e, t) {
            if (0 === e)
                for (var i = n.length, r = Array(i), o = 0, a = 0, u = function(e) {
                        if (0 !== e)
                            for (var n = 0; i > n; n++) r[n] && r[n](e)
                    }, c = function(e) {
                        n[e](0, (function(n, c) {
                            0 === n ? (r[e] = c, 1 == ++o && t(0, u)) : 2 === n ? (r[e] = void 0, ++a === i && t(2)) : t(n, c)
                        }))
                    }, s = 0; i > s; s++) c(s)
        }
    };

    function Q(e, n) {
        return V((function(t) {
            return e.on(n, t),
                function() {
                    e.off(n, t)
                }
        }))
    }! function(e) {
        var n, t = e.Symbol;
        "function" == typeof t ? t.observable ? n = t.observable : (n = t("observable"), t.observable = n) : n = "@@observable"
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());
    var Z = function() {
            for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
            for (var i = n[0], r = 1, o = n.length; o > r; r++) i = n[r](i);
            return i
        },
        ee = function(e) {
            return function(n) {
                return function(t, i) {
                    var r;
                    0 === t && n(0, (function(n, t) {
                        0 === n ? (r = t, i(0, (function(e, n) {
                            0 !== e && r(e, n)
                        })), i(1, e)) : i(n, t)
                    }))
                }
            }
        },
        ne = function(e) {
            return function(n) {
                return function(t, i) {
                    0 === t && n(0, (function(n, t) {
                        i(n, 1 === n ? e(t) : t)
                    }))
                }
            }
        };

    function te(e) {
        return function(n) {
            return G(ne(e)(n))
        }
    }
    var ie = function() {};

    function re(e, n) {
        0 === e && n(0, ie)
    }

    function oe() {
        for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
        return function(e, t) {
            if (0 === e) {
                var i = !1;
                for (t(0, (function(e) {
                        2 === e && (i = !0, n.length = 0)
                    })); 0 !== n.length;) t(1, n.shift());
                i || t(2)
            }
        }
    }

    function ae(e) {
        return function(n, t) {
            if (0 === n) {
                var i, r, o, a = 0;
                e(0, (function(e, n) {
                    if (0 === e && (o = n), 1 === e) {
                        var u = [r, n];
                        i = u[0], r = u[1], 2 > ++a ? o(1) : t(1, [i, r])
                    } else t(e, n)
                }))
            }
        }
    }
    var ue = function() {},
        ce = {};

    function se(e) {
        var n, t, i = [],
            r = !1,
            o = ce;
        return function(a, u) {
            if (0 === a) {
                if (o !== ce) return u(0, ue), r && u(1, t), void u(2, o);
                i.push(u);
                var c = function(e, t) {
                    if (2 !== e) o === ce && n(e, t);
                    else {
                        var r = i.indexOf(u); - 1 !== r && i.splice(r, 1)
                    }
                };
                1 !== i.length ? (u(0, c), r && o === ce && u(1, t)) : e(0, (function(e, a) {
                    if (0 === e) return n = a, void u(0, c);
                    1 === e && (r = !0, t = a);
                    var s = i.slice(0);
                    2 === e && (o = a, i = null), s.forEach((function(n) {
                        n(e, a)
                    }))
                }))
            }
        }
    }
    var de = function(e) {
            return function(n) {
                return function(t, i) {
                    if (0 === t) {
                        var r, o = 0;
                        n(0, (function(n, t) {
                            0 === n ? (r = t, i(n, t)) : 1 === n && e > o ? (o++, r(1)) : i(n, t)
                        }))
                    }
                }
            }
        },
        le = function(e) {
            return void 0 === e && (e = {}),
                function(n) {
                    "function" == typeof e && (e = {
                        next: e
                    });
                    var t, i = e.next,
                        r = e.error,
                        o = e.complete;
                    n(0, (function(e, n) {
                        0 === e && (t = n), 1 === e && i && i(n), 1 !== e && 0 !== e || t(1), 2 === e && !n && o && o(), 2 === e && n && r && r(n)
                    }));
                    return function() {
                        t && t(2)
                    }
                }
        },
        fe = function(e) {
            return function(n) {
                return function(t, i) {
                    if (0 === t) {
                        var r, o = 0;
                        n(0, (function(n, t) {
                            0 === n ? (r = t, i(0, a)) : 1 === n ? e > o && (o++, i(n, t), o === e && (i(2), r(2))) : i(n, t)
                        }))
                    }

                    function a(n, t) {
                        e > o && r(n, t)
                    }
                }
            }
        },
        pe = {},
        he = function(e) {
            return function(n) {
                return function(t, i) {
                    if (0 === t) {
                        var r, o, a = !1,
                            u = pe;
                        n(0, (function(n, t) {
                            if (0 === n) return r = t, e(0, (function(e, n) {
                                if (0 !== e) return 1 === e ? (u = void 0, o(2), r(2), void(a && i(2))) : void(2 === e && (o = null, n && (u = n, r(2), a && i(e, n))));
                                (o = n)(1)
                            })), a = !0, i(0, (function(e, n) {
                                u === pe && (2 === e && o && o(2), r(e, n))
                            })), void(u !== pe && i(2, u));
                            2 === n && o(2), i(n, t)
                        }))
                    }
                }
            }
        };

    function ve(n) {
        return new e((function(e, t) {
            le({
                next: e,
                error: t,
                complete: function() {
                    var e = Error("No elements in sequence.");
                    e.code = "NO_ELEMENTS", t(e)
                }
            })(function(e) {
                return function(n, t) {
                    if (0 === n) {
                        var i, r, o = !1,
                            a = !1;
                        e(0, (function(e, n) {
                            return 0 === e ? (i = n, void t(0, (function(e, n) {
                                2 === e && (a = !0), i(e, n)
                            }))) : 1 === e ? (o = !0, r = n, void i(1)) : void(2 === e && !n && o && (t(1, r), a) || t(e, n))
                        }))
                    }
                }
            }(n))
        }))
    }
    var me = function(e, n, t) {
            return e(t = {
                path: n,
                exports: {},
                require: function(e, n) {
                    return function() {
                        throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    }()
                }
            }, t.exports), t.exports
        }((function(e, n) {
            function t(e, n) {
                return e === n
            }

            function i(e, n, t) {
                if (null === n || null === t || n.length !== t.length) return !1;
                for (var i = n.length, r = 0; i > r; r++)
                    if (!e(n[r], t[r])) return !1;
                return !0
            }

            function r(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                    r = null,
                    o = null;
                return function() {
                    return i(n, r, arguments) || (o = e.apply(null, arguments)), r = arguments, o
                }
            }

            function o(e) {
                var n = Array.isArray(e[0]) ? e[0] : e;
                if (!n.every((function(e) {
                        return "function" == typeof e
                    }))) {
                    var t = n.map((function(e) {
                        return typeof e
                    })).join(", ");
                    throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + t + "]")
                }
                return n
            }

            function a(e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) t[i - 1] = arguments[i];
                return function() {
                    for (var n = arguments.length, i = Array(n), a = 0; n > a; a++) i[a] = arguments[a];
                    var u = 0,
                        c = i.pop(),
                        s = o(i),
                        d = e.apply(void 0, [function() {
                            return u++, c.apply(null, arguments)
                        }].concat(t)),
                        l = r((function() {
                            for (var e = [], n = s.length, t = 0; n > t; t++) e.push(s[t].apply(null, arguments));
                            return d.apply(null, e)
                        }));
                    return l.resultFunc = c, l.recomputations = function() {
                        return u
                    }, l.resetRecomputations = function() {
                        return u = 0
                    }, l
                }
            }
            n.__esModule = !0, n.defaultMemoize = r, n.createSelectorCreator = a, n.createStructuredSelector = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
                if ("object" != typeof e) throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
                var t = Object.keys(e);
                return n(t.map((function(n) {
                    return e[n]
                })), (function() {
                    for (var e = arguments.length, n = Array(e), i = 0; e > i; i++) n[i] = arguments[i];
                    return n.reduce((function(e, n, i) {
                        return e[t[i]] = n, e
                    }), {})
                }))
            };
            var u = n.createSelector = a(r)
        })),
        ge = function(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        },
        _e = function() {
            function e() {
                ge(this, e), this._cache = {}
            }
            return e.prototype.set = function(e, n) {
                this._cache[e] = n
            }, e.prototype.get = function(e) {
                return this._cache[e]
            }, e.prototype.remove = function(e) {
                delete this._cache[e]
            }, e.prototype.clear = function() {
                this._cache = {}
            }, e
        }();
    (function() {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = n.cacheSize;
            if (ge(this, e), void 0 === t) throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(t) || 0 >= t) throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {}, this._cacheOrdering = [], this._cacheSize = t
        }
        e.prototype.set = function(e, n) {
            (this._cache[e] = n, this._cacheOrdering.push(e), this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }, e.prototype.get = function(e) {
            return this._cache[e]
        }, e.prototype.remove = function(e) {
            var n = this._cacheOrdering.indexOf(e);
            n > -1 && this._cacheOrdering.splice(n, 1), delete this._cache[e]
        }, e.prototype.clear = function() {
            this._cache = {}, this._cacheOrdering = []
        }
    })(),
    function() {
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = n.cacheSize;
            if (ge(this, e), void 0 === t) throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(t) || 0 >= t) throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {}, this._cacheOrdering = [], this._cacheSize = t
        }
        e.prototype.set = function(e, n) {
            (this._cache[e] = n, this._registerCacheHit(e), this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }, e.prototype.get = function(e) {
            return this._registerCacheHit(e), this._cache[e]
        }, e.prototype.remove = function(e) {
            this._deleteCacheHit(e), delete this._cache[e]
        }, e.prototype.clear = function() {
            this._cache = {}, this._cacheOrdering = []
        }, e.prototype._registerCacheHit = function(e) {
            this._deleteCacheHit(e), this._cacheOrdering.push(e)
        }, e.prototype._deleteCacheHit = function(e) {
            var n = this._cacheOrdering.indexOf(e);
            n > -1 && this._cacheOrdering.splice(n, 1)
        }
    }();

    function we() {
        for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
        var i = _e;
        return function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = void 0,
                o = void 0;
            "function" == typeof t ? (console.warn('[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'), r = new i, o = t) : (r = t.cacheObject || new i, o = t.selectorCreator || me.createSelector);
            var a = function() {
                var t = e.apply(void 0, arguments);
                if ("string" == typeof t || "number" == typeof t) {
                    var i = r.get(t);
                    return void 0 === i && (i = o.apply(void 0, n), r.set(t, i)), i.apply(void 0, arguments)
                }
            };
            return a.getMatchingSelector = function() {
                var n = e.apply(void 0, arguments);
                return r.get(n)
            }, a.removeMatchingSelector = function() {
                var n = e.apply(void 0, arguments);
                r.remove(n)
            }, a.clearCache = function() {
                r.clear()
            }, a.resultFunc = n[n.length - 1], a
        }
    }
    var ye = function(e, n) {
            return n
        },
        be = function(e, n) {
            return function(e) {
                return e.entities.chats.byIds
            }(e)[n]
        },
        ke = we([function(e, n) {
            return be(e, n).events.orderedIds
        }, function(e, n) {
            return be(e, n).events.byIds
        }], (function(e, n) {
            return e.map((function(e) {
                return n[e]
            }))
        }))(ye),
        Ce = we([be, ke], (function(e, t) {
            return n({}, e, {
                events: t
            })
        }))(ye),
        Ie = function(e) {
            return e.entities.users.byIds
        },
        Le = function(e) {
            return Ie(e)[function(e) {
                return e.session.id
            }(e)]
        },
        xe = function(e, n) {
            return Ie(e)[n]
        },
        Ee = function(e) {
            return Le(e).id
        },
        Ae = (we([ke, Ee], (function(e, n) {
            return l((function(e) {
                return e.delivered && e.author === n
            }), e)
        }))(ye), we([ke, Ee], (function(e, n) {
            return l((function(e) {
                return e.seen && e.author === n
            }), e)
        }))(ye), {
            boosters: !0,
            form: !0,
            system_message: !0
        });
    me.createSelector([ke, function(e) {
        return Le(e).id
    }], (function(e, n) {
        return function(e, n, t) {
            for (var i = n; i >= 0; i--)
                if (e(t[i])) return i;
            return -1
        }((function(e) {
            return e.author === n && "message" === e.type && !(e.properties && "file" === e.properties.serverType) || !0 === e.seen && !Ae[e.type] && e.serverId
        }), (t = e).length - 1, t);
        var t
    })), we([function(e, n) {
        return be(e, n).participants
    }, Ie], (function(e, n) {
        return e.map((function(e) {
            return n[e]
        }))
    }))(ye);

    function Oe(e, n) {
        return void 0 === n ? e.application : e.application[n]
    }

    function Te(e, n) {
        if (null == e) return {};
        var t, i, r = {},
            o = Object.keys(e);
        for (i = 0; o.length > i; i++) 0 > n.indexOf(t = o[i]) && (r[t] = e[t]);
        return r
    }
    var Pe = "application/x-postmate-v1+json",
        ze = 0,
        Se = {
            handshake: 1,
            "handshake-reply": 1,
            call: 1,
            emit: 1,
            reply: 1,
            request: 1
        },
        Me = function(e, n) {
            return ("string" != typeof n || e.origin === n) && (!!e.data && ("object" == typeof e.data && ("postmate" in e.data && (e.data.type === Pe && !!Se[e.data.postmate]))))
        },
        je = function() {
            function e(e) {
                var n = this;
                this.parent = e.parent, this.frame = e.frame, this.child = e.child, this.childOrigin = e.childOrigin, this.events = {}, this.listener = function(e) {
                    if (!Me(e, n.childOrigin)) return !1;
                    var t = ((e || {}).data || {}).value || {},
                        i = t.name;
                    "emit" === e.data.postmate && i in n.events && n.events[i].call(n, t.data)
                }, this.parent.addEventListener("message", this.listener, !1)
            }
            var n = e.prototype;
            return n.get = function(e) {
                var n = this;
                return new qe.Promise((function(t) {
                    var i = ++ze;
                    n.parent.addEventListener("message", (function e(r) {
                        r.data.uid === i && "reply" === r.data.postmate && (n.parent.removeEventListener("message", e, !1), t(r.data.value))
                    }), !1), n.child.postMessage({
                        postmate: "request",
                        type: Pe,
                        property: e,
                        uid: i
                    }, n.childOrigin)
                }))
            }, n.call = function(e, n) {
                this.child.postMessage({
                    postmate: "call",
                    type: Pe,
                    property: e,
                    data: n
                }, this.childOrigin)
            }, n.on = function(e, n) {
                this.events[e] = n
            }, n.destroy = function() {
                window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame)
            }, e
        }(),
        Ne = function() {
            function e(e) {
                var n = this;
                this.model = e.model, this.parent = e.parent, this.parentOrigin = e.parentOrigin, this.child = e.child, this.child.addEventListener("message", (function(e) {
                    if (Me(e, n.parentOrigin)) {
                        var t = e.data,
                            i = t.property,
                            r = t.uid,
                            o = t.data;
                        "call" !== e.data.postmate ? function(e, n) {
                            var t = "function" == typeof e[n] ? e[n]() : e[n];
                            return qe.Promise.resolve(t)
                        }(n.model, i).then((function(n) {
                            return e.source.postMessage({
                                property: i,
                                postmate: "reply",
                                type: Pe,
                                uid: r,
                                value: n
                            }, e.origin)
                        })) : i in n.model && "function" == typeof n.model[i] && n.model[i].call(n, o)
                    }
                }))
            }
            return e.prototype.emit = function(e, n) {
                this.parent.postMessage({
                    postmate: "emit",
                    type: Pe,
                    value: {
                        name: e,
                        data: n
                    }
                }, this.parentOrigin)
            }, e
        }(),
        qe = function() {
            function e(e) {
                var n = e.container,
                    t = void 0 === n ? void 0 !== t ? t : document.body : n,
                    i = e.model,
                    r = e.url,
                    o = e.iframeAllowedProperties;
                return this.parent = window, this.frame = document.createElement("iframe"), o && (this.frame.allow = o), t.appendChild(this.frame), this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow, this.model = i || {}, this.sendHandshake(r)
            }
            return e.prototype.sendHandshake = function(n) {
                var t, i = this,
                    r = function(e) {
                        var n = document.createElement("a");
                        n.href = e;
                        var t = n.protocol.length > 4 ? n.protocol : window.location.protocol,
                            i = n.host.length ? "80" === n.port || "443" === n.port ? n.hostname : n.host : window.location.host;
                        return n.origin || t + "//" + i
                    }(n),
                    o = 0;
                return new e.Promise((function(e, a) {
                    i.parent.addEventListener("message", (function n(o) {
                        return !!Me(o, r) && ("handshake-reply" === o.data.postmate ? (clearInterval(t), i.parent.removeEventListener("message", n, !1), i.childOrigin = o.origin, e(new je(i))) : a("Failed handshake"))
                    }), !1);
                    var u = function() {
                            o++, i.child.postMessage({
                                postmate: "handshake",
                                type: Pe,
                                model: i.model
                            }, r), 5 === o && clearInterval(t)
                        },
                        c = function() {
                            u(), t = setInterval(u, 500)
                        };
                    i.frame.attachEvent ? i.frame.attachEvent("onload", c) : i.frame.addEventListener("load", c), i.frame.src = n
                }))
            }, e
        }();
    qe.debug = !1, qe.Promise = function() {
        try {
            return window ? window.Promise : e
        } catch (e) {
            return null
        }
    }(), qe.Model = function() {
        function e(e) {
            return this.child = window, this.model = e, this.parent = this.child.parent, this.sendHandshakeReply()
        }
        return e.prototype.sendHandshakeReply = function() {
            var e = this;
            return new qe.Promise((function(n, t) {
                e.child.addEventListener("message", (function i(r) {
                    if (r.data.postmate) {
                        if ("handshake" === r.data.postmate) {
                            e.child.removeEventListener("message", i, !1), r.source.postMessage({
                                postmate: "handshake-reply",
                                type: Pe
                            }, r.origin), e.parentOrigin = r.origin;
                            var o = r.data.model;
                            return o && Object.keys(o).forEach((function(n) {
                                e.model[n] = o[n]
                            })), n(new Ne(e))
                        }
                        return t("Handshake Reply Failed")
                    }
                }), !1)
            }))
        }, e
    }();
    var De = function() {
        var e, t = {
                all: e = e || new Map,
                on: function(n, t) {
                    var i = e.get(n);
                    i ? i.push(t) : e.set(n, [t])
                },
                off: function(n, t) {
                    var i = e.get(n);
                    i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : e.set(n, []))
                },
                emit: function(n, t) {
                    var i = e.get(n);
                    i && i.slice().map((function(e) {
                        e(t)
                    })), (i = e.get("*")) && i.slice().map((function(e) {
                        e(n, t)
                    }))
                }
            },
            i = t.all,
            r = Te(t, ["all"]);
        return n({}, r, {
            off: function(e, n) {
                e ? r.off(e, n) : i.clear()
            },
            once: function(e, n) {
                r.on(e, (function t(i, o) {
                    r.off(e, t), n(i, o)
                }))
            }
        })
    };
    qe.Promise = e;
    var He = function(n) {
        var t = n.methods,
            i = Te(n, ["methods"]);
        return new qe(i).then((function(n) {
            var i = n.on,
                r = n.call,
                a = function() {
                    for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                    return r.apply(n, t)
                },
                u = De(),
                c = {},
                s = {};
            return t.resolveRemoteCall = function(e) {
                var n = e.id,
                    t = e.value,
                    i = s[n];
                delete s[n], i(t)
            }, n.on = function(e, t) {
                u.on(e, t), c[e] || (c[e] = !0, function() {
                    for (var e = arguments.length, t = Array(e), r = 0; e > r; r++) t[r] = arguments[r];
                    i.apply(n, t)
                }(e, (function(n) {
                    u.emit(e, n)
                })))
            }, n.off = u.off, n.on("remote-call", (function(e) {
                var i = e.id,
                    r = e.method,
                    o = "function" == typeof t[r] ? t[r].apply(n, e.args) : void 0;
                o && "function" == typeof o.then ? o.then((function(e) {
                    a("resolveRemoteCall", {
                        id: i,
                        value: e
                    })
                })) : a("resolveRemoteCall", {
                    id: i,
                    value: o
                })
            })), n.emit = function(e, n) {
                a("emitEvent", {
                    event: e,
                    data: n
                })
            }, n._emit = u.emit, n.call = function(n) {
                for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) i[r - 1] = arguments[r];
                return new e((function(e) {
                    var t = v(s);
                    s[t] = e, a("remoteCall", {
                        id: t,
                        method: n,
                        args: i
                    })
                }))
            }, o(n, t)
        }))
    };

    function Fe(e, n) {
        return null != n && null != e && "object" == typeof n && "object" == typeof e ? We(n, e) : e
    }

    function We(e, t) {
        var i;
        if (Array.isArray(e)) {
            i = e.slice(0, t.length);
            for (var o = 0; t.length > o; o++) void 0 !== t[o] && (i[o] = Fe(t[o], i[o]))
        } else
            for (var a in i = n({}, e), t) r(a, t) && (void 0 === t[a] ? delete i[a] : i[a] = Fe(t[a], i[a]));
        return i
    }
    var Be = function(n) {
            return new e((function(e) {
                n.on("state", (function t(i) {
                    n.off("state", t), n.state = i, e(i)
                })), n.on("state_diff", (function(e) {
                    n.state = We(n.state, e)
                })), n.on("store_event", (function(e) {
                    n._emit(e[0], e[1])
                })), n.call("startStateSync")
            }))
        },
        Re = "chat-widget",
        Ve = {
            opacity: 0,
            visibility: "hidden",
            zIndex: -1
        },
        Ge = {
            opacity: 1,
            visibility: "visible",
            zIndex: 2147483639
        },
        Ue = {
            id: Re + "-container",
            style: n({}, Ve, {
                position: "fixed",
                bottom: 0,
                width: 0,
                height: 0,
                maxWidth: "100%",
                maxHeight: "100%",
                minHeight: 0,
                minWidth: 0,
                backgroundColor: "transparent",
                border: 0,
                overflow: "hidden"
            })
        },
        Je = {
            id: "livechat-eye-catcher",
            style: {
                position: "fixed",
                visibility: "visible",
                zIndex: 2147483639,
                background: "transparent",
                border: 0,
                padding: "10px 10px 0 0",
                float: "left",
                marginRight: "-10px",
                webkitBackfaceVisibility: "hidden"
            }
        },
        Xe = {
            style: {
                position: "absolute",
                display: "none",
                top: "-5px",
                right: "-5px",
                width: "16px",
                lineHeight: "16px",
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "none",
                color: "#000",
                fontSize: "20px",
                fontFamily: "Arial, sans-serif",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.5)"
            }
        },
        Ye = {
            id: "livechat-eye-catcher-img",
            style: {
                display: "block",
                overflow: "hidden",
                cursor: "pointer"
            }
        },
        $e = {
            alt: "",
            style: {
                display: "block",
                border: 0,
                float: "right"
            }
        },
        Ke = {
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px"
        },
        Qe = {
            allowtransparency: !0,
            id: Re,
            name: Re,
            title: "LiveChat chat widget",
            scrolling: "no",
            style: {
                width: "100%",
                height: "100%",
                "min-height": "0px",
                "min-width": "0px",
                margin: "0px",
                padding: "0px",
                "background-image": "none",
                "background-position-x": "0%",
                "background-position-y": "0%",
                "background-size": "initial",
                "background-attachment": "scroll",
                "background-origin": "initial",
                "background-clip": "initial",
                "background-color": "rgba(0, 0, 0, 0)",
                "border-width": "0px",
                float: "none"
            }
        },
        Ze = e.resolve(),
        en = function(e) {
            Ze.then(e)
        },
        nn = function(e) {
            return en((function() {
                throw e
            }))
        },
        tn = function(e) {
            return function(n) {
                var t = window.LC_API || {};
                if ("function" == typeof n && n(t), "function" == typeof t[e]) try {
                    t[e]()
                } catch (e) {
                    nn(e)
                }
            }
        },
        rn = function(e, n) {
            if (!e) return !0;
            var t = function(e) {
                var n = e.match(H);
                return n && n[1]
            }(n);
            return !!t && [].concat(e, ["livechatinc.com", "lc.chat"]).some((function(e) {
                var n = t.length - e.length;
                return -1 !== t.indexOf(e, n) && (t.length === e.length || "." === t.charAt(n - 1))
            }))
        },
        on = [],
        an = function(e) {
            30 > on.length || (on = on.slice(1));
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) t[i - 1] = arguments[i];
            on.push({
                name: e,
                args: t
            })
        },
        un = "always visible",
        cn = "always hide",
        sn = "hide until it gets activated";

    function dn(e, n, t) {
        return function(i) {
            var r, o = (void 0 === i ? {} : i).prettyPrint,
                a = void 0 === o || o,
                u = n.analytics.googleAnalytics.trackerName,
                c = !rn(t.allowedDomains, document.location.href),
                s = [
                    ["window.open", !/native code/.test(window.open)],
                    ["document.domain", window.location.hostname !== document.domain],
                    ["window.frames", window.frames !== window],
                    ["JSON.stringify", !/native code/.test(window.JSON.stringify)],
                    ["JSON.parse", !/native code/.test(window.JSON.parse)],
                    ["Object.keys", !/native code/.test(Object.keys)],
                    ["console.log", !/native code/.test(console.log)]
                ].filter((function(e) {
                    return e[1]
                })).map((function(e) {
                    return e[0]
                })),
                d = function(e) {
                    var n = [];
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                    return n
                }(Qe.style).some((function(n) {
                    return e.frame.style.getPropertyValue(n) !== Qe.style[n]
                })),
                l = function(e) {
                    var n = "";
                    return {
                        desktopVisibility: n = e.initiallyHidden ? e.disabledMinimized ? cn : sn : un,
                        mobileVisibility: e.hasCustomMobileSettings ? e.hiddenOnMobile ? cn : e.initiallyHiddenOnMobile ? e.disabledMinimizedOnMobile ? cn : sn : un : n
                    }
                }(t.__unsafeProperties.group),
                f = l.desktopVisibility,
                p = l.mobileVisibility,
                h = [{
                    msg: "language: " + t.__unsafeProperties.group.language
                }, {
                    msg: "region: " + t.region
                }, {
                    msg: "license number: " + window.__lc.license
                }, {
                    msg: "group id: " + e.state.application.group
                }, {
                    msg: "hidden: " + (e.state.application.hidden ? "yes" : "no")
                }, {
                    msg: "tracker name: " + u
                }, {
                    msg: "desktop visibility: " + f,
                    isNotStandard: f !== un
                }, {
                    msg: "mobile visibility: " + p,
                    isNotStandard: p !== un
                }, {
                    msg: "chat between groups: " + (window.__lc.chat_between_groups ? "yes" : "no")
                }, {
                    msg: "is iframe inline style modified: " + (d ? "yes" : "no"),
                    isNotStandard: d
                }, {
                    msg: "is current domain not allowed by the allowed domains: " + (c ? "yes" : "no"),
                    isNotStandard: c
                }, {
                    msg: "overrides: " + (s.length > 0 ? s.join(",\n") : "none"),
                    isNotStandard: s.length > 0
                }, {
                    msg: "call history: " + (on.length > 0 ? on.map((function(e) {
                        return e.name + "(" + e.args.join(", ") + ")"
                    })).join(",\n") : "none"),
                    isNotStandard: on.length > 0
                }];
            if (!a) return h;
            var v = h.filter((function(e) {
                    return e.isNotStandard
                })),
                m = h.filter((function(e) {
                    return !e.isNotStandard
                })),
                g = [].concat(v, m);
            return -1 !== s.indexOf("console.log") ? g.map((function(e) {
                return e.msg
            })).join("\n\n") : ((r = console).log.apply(r, [g.map((function(e) {
                return "%c" + e.msg
            })).join("\n\n")].concat(g.map((function(e) {
                return e.isNotStandard ? "color: red;" : ""
            })))), "")
        }
    }

    function ln(e) {
        for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) t[i - 1] = arguments[i];
        return function() {
            "function" == typeof e && e.apply(void 0, t)
        }
    }

    function fn(e, n, t) {
        return Z(Q(e, t), Y((function(e) {
            return en(ln(n[t], e))
        })))
    }

    function pn(e) {
        return I(e.filter(Boolean).map((function(e) {
            var n;
            return (n = {})[e.name] = e.value + "", n
        })))
    }

    function hn(e, n) {
        var t, i = d((function(e) {
            return !e[1]
        }), T((t = n, ["name", "email"].reduce((function(e, n) {
            return r(n, t) && (e[n] = t[n]), e
        }), {}))));
        if (i) {
            var o = i[1];
            console.error("[LiveChatWidget] Customer " + i[0] + " cannot be set to " + ("" === o ? "empty string" : o))
        } else e.call("storeMethod", ["requestUpdateUser", Ee(e.state), n])
    }

    function vn(e, n) {
        e.call("storeMethod", ["requestSetUserProperties", Ee(e.state), n])
    }

    function mn(e) {
        return null != e ? e + "" : null
    }
    var gn = function(e, n) {
        return Oe(e, "visibility").state === n
    };

    function _n(e, n) {
        return G((t = function() {
            return Z(Q(e, "state_diff"), ne((function() {
                return e.state
            })), ee(e.state), ne(n), J(A), he(Q(e, "unbind")))
        }, function(e, n) {
            if (0 === e) {
                var i = !1;
                n(0, (function(e) {
                    2 === e && (i = !0)
                })), n(1, t()), i || n(2)
            }
        }));
        var t
    }
    var wn = function(e, n) {
        return Z(_n(e, n), de(1))
    };

    function yn(e) {
        return Z(_n(e, (function(e) {
            return Oe(e, "availability")
        })), X(y))
    }
    var bn = "liveChatChatId";

    function kn(e) {
        return Z(_n(e, (function(e) {
            return Ce(e, bn).active
        })), de(1), te((function(n) {
            return n ? Z(_n(e, (function(e) {
                return Ce(e, bn).properties.currentAgent
            })), X(Boolean), ne((function() {
                return n
            })), fe(1)) : oe(n)
        })))
    }

    function Cn(e, n) {
        return Z(Q(e, "state_diff"), ne((function() {
            return Oe(e.state, "readyState")
        })), X((function(e) {
            return e === n
        })), fe(1), se)
    }
    var In = "not_ready",
        Ln = "ready",
        xn = "bootstrapped";

    function En(e, n) {
        return Z(Cn(e, Ln), te(n))
    }

    function An(e, n) {
        return Z(Cn(e, xn), te(n))
    }

    function On(e, n) {
        return Z(_n(e, (function(e) {
            return Oe(e, "invitation")
        })), ne((function(e) {
            return e[n]
        })), X(y), ae, X((function(e) {
            return e[1].length > e[0].length
        })), ne((function(e) {
            return b(e[1])
        })))
    }
    var Tn = function(e) {
            return e.actingAsDirectLink || e.isInCustomContainer
        },
        Pn = "liveChatChatId",
        zn = function(e) {
            for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) t[i - 1] = arguments[i];
            return en(ln.apply(void 0, [e].concat(t)))
        };

    function Sn(e, n, t) {
        window.LC_API = window.LC_API || {};
        var i = window.LC_API;
        Z(function(e) {
            return Z(_n(e, (function(e) {
                return gn(e, "maximized")
            })), X(y))
        }(e), Y((function() {
            return zn(i.on_chat_window_opened)
        }))), Z(An(e, (function() {
            return function(e) {
                return Z(_n(e, (function(e) {
                    return gn(e, "minimized")
                })), de(1), X(y))
            }(e)
        })), Y((function() {
            return zn(i.on_chat_window_minimized)
        }))), Z(function(e) {
            return Z(_n(e, (function(e) {
                return gn(e, "hidden")
            })), X(y))
        }(e), Y((function() {
            return zn(i.on_chat_window_hidden)
        }))), Z(yn(e), Y((function(e) {
            return zn(i.on_chat_state_changed, {
                state: "online" === e ? "online_for_chat" : "offline"
            })
        }))), Z(An(e, (function() {
            return kn(e)
        })), X(y), Y((function() {
            return zn(i.on_chat_started, {
                agent_name: xe(e.state, Ce(e.state, Pn).properties.currentAgent).name
            })
        }))), Z(An(e, (function() {
            return kn(e)
        })), X(w), Y((function() {
            return zn(i.on_chat_ended)
        }))), Z(An(e, (function() {
            return Q(e, "on_message")
        })), Y((function(e) {
            return zn(i.on_message, e)
        }))), Z(Q(e, "widget_resize"), Y((function(e) {
            return zn(i.on_widget_resize, e.size)
        }))), Z(function(e) {
            return Z(Q(e, "add_event"), X((function(e) {
                return e.event.properties.invitation
            })), ne((function(n) {
                var t = n.event;
                return {
                    event: t,
                    author: xe(e.state, t.author)
                }
            })))
        }(e), Y((function(e) {
            var n = e.author,
                t = e.event,
                r = t.properties;
            zn(i.on_message, {
                text: r.text,
                timestamp: t.timestamp,
                invitation: !0,
                user_type: "agent",
                agent_login: n.id,
                agent_name: n.name,
                received_first_time: r.receivedFirstTime
            })
        }))), fn(e, i, "on_postchat_survey_submitted"), fn(e, i, "on_prechat_survey_submitted"), fn(e, i, "on_rating_comment_submitted"), fn(e, i, "on_rating_submitted"), fn(e, i, "on_ticket_created"), i.set_custom_variables = function(n) {
            an("LC_API.set_custom_variables", n), vn(e, pn(n))
        }, i.update_custom_variables = function(n) {
            an("LC_API.update_custom_variables", n), hn(e, {
                properties: pn(n)
            })
        }, i.set_visitor_name = function(n) {
            an("LC_API.set_visitor_name", n), hn(e, {
                name: mn(n)
            })
        }, i.set_visitor_email = function(n) {
            an("LC_API.set_visitor_email", n), hn(e, {
                email: mn(n)
            })
        }, i.open_chat_window = i.show_full_view = i.open_mobile_window = function() {
            an("LC_API.open_chat_window"), e.maximize()
        }, i.minimize_chat_window = function() {
            an("LC_API.minimize_chat_window"), Tn(n) || e.minimize()
        }, i.hide_eye_catcher = function() {
            an("LC_API.hide_eye_catcher"), e.call("hideEyeCatcher")
        }, i.hide_chat_window = function() {
            an("LC_API.hide_chat_window"), Tn(n) || e.hide()
        }, i.agents_are_available = function() {
            return an("LC_API.agents_are_available"), "online" === Oe(e.state, "availability")
        }, i.chat_window_maximized = function() {
            return an("LC_API.chat_window_maximized"), gn(e.state, "maximized")
        }, i.chat_window_minimized = function() {
            return an("LC_API.chat_window_minimized"), gn(e.state, "minimized")
        }, i.chat_window_hidden = function() {
            return an("LC_API.chat_window_hidden"), gn(e.state, "hidden")
        }, i.visitor_queued = function() {
            return an("LC_API.visitor_queued"), Ce(e.state, Pn).properties.queued
        }, i.chat_running = function() {
            return an("LC_API.chat_running"), Ce(e.state, Pn).active
        }, i.visitor_engaged = function() {
            return an("LC_API.visitor_engaged"), i.visitor_queued() || i.chat_running() || !!Ce(e.state, Pn).properties.fakeAgentMessageId
        }, i.get_window_type = function() {
            return an("LC_API.get_window_type"), "embedded"
        }, i.close_chat = function() {
            an("LC_API.close_chat"), e.call("storeMethod", ["requestUpdateChat", Pn, {
                active: !1
            }])
        }, i.diagnose = dn(e, n, t), i.get_last_visit_timestamp = function() {
            return Oe(e.state).clientLastVisitTimestamp
        }, i.get_visits_number = function() {
            return Oe(e.state).clientVisitNumber
        }, i.get_page_views_number = function() {
            return Oe(e.state).clientPageViewsCount
        }, i.get_chats_number = function() {
            return Oe(e.state).clientChatNumber
        }, i.get_visitor_id = function() {
            return Le(e.state).serverId
        }, i.get_chat_id = function() {
            return Ce(e.state, Pn).serverId
        }, i.trigger_sales_tracker = function(e, n) {
            var t = a(n) ? n : [];
            "string" == typeof e && "" !== e && i.set_custom_variables([].concat(t, [{
                name: "__sales_tracker_" + e,
                value: "1"
            }]))
        }, i.scriptTagVersion = function() {
            return "LiveChatWidget" in window ? window.LiveChatWidget._v : "1.0"
        }, ["on", "off", "call", "get"].forEach((function(e) {
            i[e] = function() {
                var n = "LiveChatWidget" in window ? 'call it on the new "LiveChatWidget" global object.' : "upgrade your snippet code. You can do it by going to: https://my.livechatinc.com/settings/code";
                console.warn('[LiveChatWidget] In order to use "' + e + '" function you need to ' + n)
            }
        })), i.disable_sounds = x
    }
    var Mn = {
            handler: null,
            setHandler: function(e) {
                this.handler = e
            },
            navigate: function(e) {
                var n = this;
                en((function() {
                    window.location.origin === function(e) {
                        var n = e.match(F);
                        return n && n[0]
                    }(e) && "function" == typeof n.handler ? n.handler(function(e) {
                        var n = e.match(W);
                        return "/" + (n && n[1] || "")
                    }(e)) : window.open(e, "_blank")
                }))
            }
        },
        jn = "liveChatChatId",
        Nn = function(e) {
            var t, i = e.trackerId,
                r = e.variables;
            return n({}, c(String, void 0 === r ? {} : r), ((t = {})["__sales_tracker_" + i] = "1", t))
        },
        qn = function(e) {
            var t = e.id;
            return n({
                uniqueId: e.uniqueId
            }, t && {
                id: t
            })
        },
        Dn = function(e, n) {
            return m(null, "properties", l((function(e) {
                return e.properties.uniqueId === n
            }), ke(e.state, jn)))
        },
        Hn = function(e) {
            return n = function(e) {
                if ("call" !== e[0]) return "other";
                switch (e[1][0]) {
                    case "set_customer_email":
                        return "email";
                    case "set_customer_name":
                        return "name";
                    case "set_session_variables":
                    case "trigger_sales_tracker":
                    case "update_session_variables":
                        return "fields";
                    case "destroy":
                    case "hide":
                    case "maximize":
                    case "minimize":
                        return "visibility"
                }
            }, Object.keys(t = e).reduce((function(e, i) {
                var r = t[i],
                    o = n(r);
                return e[o] = e[o] || [], e[o].push(r), e
            }), {});
            var n, t
        };

    function Fn(e, t, i) {
        var r, o = De(),
            a = window.LiveChatWidget,
            u = function(e, n) {
                var t;
                return (t = {
                    get: w,
                    call: k,
                    on: v,
                    once: m,
                    off: o.off
                })[e].apply(t, n)
            },
            l = function(e, n) {
                return en((function() {
                    return o.emit(e, n)
                }))
            },
            f = function(e) {
                void 0 === e && (e = []);
                var n = b(e);
                if (n) {
                    var t = n[1];
                    k(t[0], t[1])
                }
            },
            p = Hn(a._q);

        function h(n, t, i) {
            switch (t) {
                case "new_event":
                case "form_submitted":
                case "greeting_hidden":
                case "rating_submitted":
                case "visibility_changed":
                case "greeting_displayed":
                case "availability_changed":
                case "customer_status_changed":
                case "rich_message_button_clicked":
                    return void o[n](t, i);
                case "ready":
                    return void(Oe(e.state, "readyState") !== In ? en((function() {
                        return i({
                            state: _("state"),
                            customerData: _("customer_data")
                        })
                    })) : o[n](t, i));
                default:
                    return void console.error('[LiveChatWidget] callback "' + t + '" does not exist.')
            }
        }

        function v(e, n) {
            an("LiveChatWidget.on", "'" + e + "'", n), h("on", e, n)
        }

        function m(e, n) {
            an("LiveChatWidget.once", "'" + e + "'", n), h("once", e, n)
        }

        function _(n) {
            switch (n) {
                case "state":
                    var t = Oe(e.state);
                    return {
                        availability: t.availability,
                        visibility: t.visibility.state
                    };
                case "chat_data":
                    var i = Ce(e.state, jn),
                        r = i.properties;
                    return {
                        chatId: i.serverId || null,
                        threadId: (i.active || r.ended) && r.lastThread || null
                    };
                case "customer_data":
                    var o = Le(e.state),
                        a = o.serverId,
                        u = o.name,
                        c = o.email,
                        l = o.properties,
                        f = Oe(e.state).isReturning,
                        p = Ce(e.state, jn),
                        h = p.active,
                        v = p.properties,
                        m = v.queued,
                        g = v.fakeAgentMessageId,
                        _ = d((function(e) {
                            return e.id === g
                        }), p.events);
                    return {
                        name: u,
                        email: c,
                        isReturning: f,
                        sessionVariables: l,
                        id: a,
                        status: m ? "queued" : h ? "chatting" : _ && _.properties.invitation ? "invited" : "browsing"
                    };
                case "features":
                    return s(Oe(e.state).config.features);
                default:
                    return void console.error('[LiveChatWidget] property "' + n + '" not exists.')
            }
        }

        function w(e) {
            return an("LiveChatWidget.get", "'" + e + "'"), _(e)
        }

        function k(n, i) {
            switch (an.apply(void 0, ["LiveChatWidget.call", "'" + n + "'"].concat(i)), n) {
                case "hide":
                case "maximize":
                case "minimize":
                    if (Tn(t)) return;
                    return void e[n](i);
                case "destroy":
                    return e.kill(), delete window.__lc_inited, delete window.LC_API, void delete window.LiveChatWidget;
                case "set_session_variables":
                    return void vn(e, c(String, i));
                case "set_customer_name":
                    return void hn(e, {
                        name: mn(i)
                    });
                case "set_customer_email":
                    return void hn(e, {
                        email: mn(i)
                    });
                case "update_session_variables":
                    return void hn(e, {
                        properties: c(String, i)
                    });
                case "trigger_sales_tracker":
                    return void vn(e, Nn(i));
                case "hide_greeting":
                    return void e.call("hideGreeting");
                case "set_navigation_handler":
                    return void Mn.setHandler(i);
                default:
                    return void console.error('[LiveChatWidget] method "' + n + '" not exists.')
            }
        }
        void 0 === (r = p.other) && (r = []), r.forEach((function(e) {
                u(e[0], e[1])
            })), f(p.visibility), f(p.name), f(p.email),
            function(e) {
                var t, i = (void 0 === (t = e) && (t = []), t.reduce((function(e, t) {
                        var i = t[1],
                            r = i[1];
                        switch (i[0]) {
                            case "set_session_variables":
                                return e.mode = "set", e.properties = r, e;
                            case "trigger_sales_tracker":
                                return e.mode = "set", e.properties = Nn(r), e;
                            case "update_session_variables":
                                return "none" === e.mode && (e.mode = "update"), e.properties = n({}, e.properties, r), e
                        }
                    }), {
                        mode: "none"
                    })),
                    r = i.mode;
                "none" !== r && k(r + "_session_variables", i.properties)
            }(p.fields), a._q = [], a._h = u, a.scriptTagVersion = function() {
                return a._v
            }, a.diagnose = dn(e, t, i), Z(Cn(e, xn), Y((function() {
                var e;
                e = function(e) {
                    return "function" == typeof e && en((function() {
                        return e(a)
                    }))
                }, Array.isArray(window.__lc_onready) && (window.__lc_onready.forEach(e), window.__lc_onready = {
                    push: e
                }), l("ready", {
                    state: _("state"),
                    customerData: _("customer_data")
                })
            }))), Z(An(e, (function() {
                return yn(e)
            })), Y((function(e) {
                return l("availability_changed", {
                    availability: e
                })
            }))), Z(An(e, (function() {
                return wn(e, (function() {
                    return _("state").visibility
                }))
            })), Y((function(e) {
                l("visibility_changed", {
                    visibility: e
                })
            }))), Z(An(e, (function() {
                return wn(e, (function() {
                    return _("customer_data").status
                }))
            })), Y((function(e) {
                return l("customer_status_changed", {
                    status: e
                })
            }))), Z(An(e, (function() {
                return On(e, "hiddenIds")
            })), ne((function(n) {
                return Dn(e, n)
            })), X(y), Y((function(e) {
                return l("greeting_hidden", qn(e))
            }))), Z(An(e, (function() {
                return On(e, "displayedIds")
            })), ne((function(n) {
                return Dn(e, n)
            })), X(y), Y((function(e) {
                return l("greeting_displayed", qn(e))
            }))), Z(Q(e, "on_rating_submitted"), Y((function(e) {
                return l("rating_submitted", e)
            }))), Z(K(Q(e, "add_event"), Q(e, "send_event")), X((function(e) {
                return g(e.event.type, ["message", "emoji", "rich_message", "file"])
            })), ne((function(t) {
                var i = t.event,
                    r = i.timestamp,
                    o = i.properties,
                    a = xe(e.state, i.author),
                    u = !0 === o.invitation;
                return n({
                    timestamp: r,
                    type: i.type,
                    author: {
                        id: a.serverId,
                        type: a.id === Ee(e.state) ? "customer" : "agent"
                    }
                }, u && {
                    greeting: qn(o)
                })
            })), Y((function(e) {
                return l("new_event", e)
            }))), Z(K(Z(Q(e, "send_event"), ne((function(e) {
                var n = e.event,
                    t = n.type,
                    i = n.properties;
                if ("rich_message_postback" === t) return {
                    postbackId: "postback" in i ? i.postback.id : i.id,
                    eventId: i.eventId
                };
                if ("message" === t && i.triggeredBy) {
                    var r = i.triggeredBy;
                    return {
                        postbackId: r.button.postbackId,
                        eventId: r.event
                    }
                }
                return null
            })), X(y)), Z(Q(e, "rich_greeting_button_clicked"), ne((function(e) {
                var n = e.event;
                return {
                    eventId: n.id,
                    postbackId: e.button.postbackId,
                    greeting: qn(n.properties)
                }
            })))), Y((function(e) {
                return l("rich_message_button_clicked", e)
            }))), Z(K(Z(Q(e, "on_ticket_created"), ne((function() {
                return "ticket"
            }))), Z(Q(e, "on_prechat_survey_submitted"), ne((function() {
                return "prechat"
            }))), Z(Q(e, "on_postchat_survey_submitted"), ne((function() {
                return "postchat"
            })))), Y((function(e) {
                return l("form_submitted", {
                    type: e
                })
            })))
    }
    var Wn = function() {
            return window.GoogleAnalyticsObject || "ga"
        },
        Bn = function(e) {
            var n = e.event,
                t = e.label,
                i = e.nonInteraction,
                r = e.trackerName,
                o = window[Wn()];
            o && "function" == typeof o && o([r, "send"].filter(Boolean).join("."), {
                hitType: "event",
                eventCategory: "LiveChat",
                eventAction: n,
                eventLabel: t,
                nonInteraction: i
            })
        },
        Rn = {
            ga: Bn,
            gaAll: function(e) {
                var t = window[Wn()];
                if (t && "function" == typeof t.getAll) {
                    var i = t.getAll();
                    a(i) && i.forEach((function(t) {
                        Bn(n({}, e, {
                            trackerName: t && "function" == typeof t.get ? t.get("name") : null
                        }))
                    }))
                }
            },
            gaq: function(e) {
                var n = window._gaq;
                n && "function" == typeof n.push && n.push(["_trackEvent", "LiveChat", e.event, e.label, null, e.nonInteraction])
            },
            gtm: function(e) {
                var n = window.dataLayer;
                n && "function" == typeof n.push && n.push({
                    event: "LiveChat",
                    eventCategory: "LiveChat",
                    eventAction: e.event,
                    eventLabel: e.label,
                    nonInteraction: e.nonInteraction
                })
            },
            pageTracker: function(e) {
                var n = window.pageTracker;
                n && "function" == typeof n._trackEvent && n._trackEvent("LiveChat", e.event, e.label, null, e.nonInteraction)
            },
            urchinTracker: function(e) {
                var n = window.urchinTracker;
                n && "function" == typeof n && n(e.event)
            },
            gtag: function(e) {
                var n = window.gtag;
                n && "function" == typeof n && n("event", e.event, {
                    event_category: "LiveChat",
                    event_label: e.label,
                    non_interaction: e.nonInteraction
                })
            }
        },
        Vn = function(e) {
            var n = e.version,
                t = e.sendToAll;
            if (n && "function" == typeof Rn[n]) return t && "ga" === n ? "gaAll" : n;
            if ("object" == typeof window.pageTracker && "function" == typeof window.pageTracker._trackEvent) return "pageTracker";
            if ("function" == typeof window.urchinTracker) return "urchinTracker";
            if ("function" == typeof window.gtag) return "gtag";
            if (!e.omitGtm && "object" == typeof window.dataLayer && "function" == typeof window.dataLayer.push) return "gtm";
            if ("object" == typeof window._gaq) return "gaq";
            if (window.GoogleAnalyticsObject && "string" == typeof window.GoogleAnalyticsObject) return t ? "gaAll" : "ga";
            if ("function" == typeof window.ga) {
                var i = !1;
                if (window.ga((function(e) {
                        i = "object" == typeof e
                    })), i) return t ? "gaAll" : "ga"
            }
            return null
        },
        Gn = {
            Chat: "LiveChat Chat started",
            "Automated greeting": "LiveChat Automated greeting displayed",
            "Ticket form": "LiveChat Ticket form displayed",
            "Ticket form filled in": "LiveChat Ticket form filled in",
            "Pre-chat survey": "LiveChat Pre-chat survey displayed",
            "Pre-chat survey filled in": "LiveChat Pre-chat survey filled in",
            "Post-chat survey": "LiveChat Post-chat survey displayed",
            "Post-chat survey filled in": "LiveChat Post-chat survey filled in"
        },
        Un = function() {
            return window.mixpanel && "function" == typeof window.mixpanel.track && "function" == typeof window.mixpanel.register
        },
        Jn = {
            googleAnalytics: function(e) {
                var n = e.trackerName;
                return n ? Rn[n] : null
            },
            kissmetrics: function() {
                return null
            },
            mixpanel: function() {
                if (!Un()) return null;
                return function(e) {
                    var n = e.event,
                        t = e.eventData,
                        i = e.persistentData;
                    if (Un()) {
                        var r = window.mixpanel;
                        i && (r.register(i), !Un()) || n in Gn && r.track(Gn[n], t)
                    }
                }
            }
        },
        Xn = function(e, t) {
            var i = t.analytics,
                r = Object.keys(i).filter((function(e) {
                    return i[e].enabled
                })).map((function(e) {
                    var n = i[e],
                        t = Jn[e];
                    try {
                        return t(n)
                    } catch (e) {
                        return nn(e), null
                    }
                })).filter(Boolean);
            if (0 !== r.length) {
                var o = function(t, i) {
                    var o = void 0 === i ? {} : i,
                        a = o.group,
                        u = void 0 === a ? Oe(e.state, "group") : a,
                        c = o.nonInteraction,
                        s = void 0 !== c && c,
                        d = o.eventData,
                        l = void 0 === d ? {} : d,
                        f = o.persistentData,
                        p = void 0 === f ? null : f,
                        h = o.useDataAsLabel,
                        v = 0 !== u ? "Group ID: " + u : "(no group)",
                        m = void 0 !== h && h ? T(l).map((function(e) {
                            return e[0] + ": " + e[1]
                        })).join(", ") : v;
                    r.forEach((function(e) {
                        try {
                            e({
                                event: t,
                                nonInteraction: s,
                                label: m,
                                eventData: n({}, l, {
                                    group: v
                                }),
                                persistentData: p
                            })
                        } catch (e) {
                            nn(e)
                        }
                    }))
                };
                Z(_n(e, (function(e) {
                    return Oe(e, "readyState")
                })), X((function(e) {
                    return e === Ln
                })), fe(1), te((function() {
                    return kn(e)
                })), X(Boolean), Y((function() {
                    var n = Le(e.state);
                    o("Chat", {
                        eventData: {
                            email: n.email,
                            name: n.name
                        },
                        persistentData: {
                            "performed chat": !0
                        }
                    })
                }))), e.on("add_event", (function(e) {
                    var n = e.event.properties;
                    n.invitation && n.receivedFirstTime && o("Automated greeting", {
                        nonInteraction: !0
                    })
                })), e.on("on_chat_booster_launched", (function(e) {
                    var n = e.title;
                    o("Chat Booster Launched: " + n, {
                        eventData: {
                            appId: e.id,
                            title: n
                        }
                    })
                })), e.on("on_prechat_survey_submitted", (function() {
                    o("Pre-chat survey filled in")
                })), e.on("on_postchat_survey_submitted", (function() {
                    o("Post-chat survey filled in")
                })), e.on("on_ticket_created", (function(e) {
                    o("Ticket form filled in", {
                        eventData: {
                            email: e.visitor_email
                        }
                    })
                })), e.on("rich_greeting_button_clicked", (function(e) {
                    o("Rich greeting button clicked", {
                        eventData: {
                            buttonText: e.button.text,
                            greetingId: e.event.properties.id
                        },
                        useDataAsLabel: !0
                    })
                })), ["prechat", "postchat", "ticket", "offline"].forEach((function(n) {
                    var t;
                    Z(K(Q(e, "set_default_view"), Q(e, "set_current_view")), X((function(e) {
                        return e.viewInfo && "Chat" === e.viewInfo.view && e.viewInfo.default === n
                    })), he(Q(e, "unbind")), (t = function() {
                        var t, i, r, o, a = {
                                prechat: ["on_prechat_survey_submitted", "Pre-chat survey"],
                                postchat: ["on_postchat_survey_submitted", "Post-chat survey"],
                                ticket: ["on_ticket_created", "Ticket form"],
                                offline: ["on_ticket_created", "Ticket form"]
                            }[n],
                            u = a[0];
                        return Z(function() {
                            for (var e = arguments.length, n = Array(e), t = 0; e > t; t++) n[t] = arguments[t];
                            return function(e, t) {
                                if (0 === e) {
                                    var i = n.length;
                                    if (0 === i) return t(0, (function() {})), void t(2);
                                    var r, o = 0,
                                        a = function(e, n) {
                                            r(e, n)
                                        };
                                    ! function e() {
                                        o !== i ? n[o](0, (function(n, i) {
                                            0 === n ? (r = i, 0 === o ? t(0, a) : r(1)) : 2 === n && i ? t(2, i) : 2 === n ? (o++, e()) : t(n, i)
                                        })) : t(2)
                                    }()
                                }
                            }
                        }(oe(a[1]), re), (t = Z(_n(e, (function(e) {
                            return gn(e, "maximized")
                        })), X(Boolean)), o = void 0 === (r = (void 0 === i ? {} : i).size) ? 100 : r, function(e) {
                            return function(n, i) {
                                var r = [];
                                if (0 === n) {
                                    var a, u, c = !1;
                                    e(0, (function(e, n) {
                                        if (0 === e && (a = n, t(0, (function(e, n) {
                                                if (0 === e)(u = n)(1);
                                                else if (1 === e) {
                                                    c = !0, u(2);
                                                    var t = r.slice();
                                                    r.length = 0, t.forEach((function(e) {
                                                        return i(1, e)
                                                    }))
                                                }
                                            }))), 1 === e) return c ? void i(1, n) : (r.push(n), r.length > o && r.shift(), void a(1));
                                        i(e, n)
                                    }))
                                }
                            }
                        }), he(Q(e, u)))
                    }, function(e) {
                        return function(n, i) {
                            if (0 === n) {
                                var r, o = null,
                                    a = function(e, n) {
                                        if (0 !== e) return 1 === e ? (i(1, n), void o(1)) : void(2 === e && (o = null));
                                        (o = n)(1)
                                    },
                                    u = function(e, n) {
                                        2 === e && null !== o && o(2, n), r(e, n)
                                    };
                                e(0, (function(e, n) {
                                    if (0 === e) return r = n, void i(0, u);
                                    if (1 !== e) {
                                        if (2 === e) {
                                            if (i(2, n), null === o) return;
                                            o(2, n)
                                        }
                                    } else {
                                        if (null !== o) return;
                                        t(n)(0, a)
                                    }
                                }))
                            }
                        }
                    }), Y((function(e) {
                        o(e)
                    })))
                }))
            }
        },
        Yn = /\.(\w+)$/i,
        $n = new Audio,
        Kn = {
            mp3: "audio/mpeg",
            ogg: "audio/ogg"
        },
        Qn = function(e) {
            var n, t = (n = e.match(Yn)) ? n[1].toLowerCase() : "";
            return t in Kn && "" !== $n.canPlayType(Kn[t])
        },
        Zn = function(n) {
            return new e((function(e, t) {
                var i = new Audio(n);
                i.onloadeddata = function() {
                    e(i)
                }, i.onerror = t
            }))
        },
        et = function(n) {
            var t, i = n.play();
            return (t = i) && "function" == typeof t.then ? i : e.resolve()
        },
        nt = function(e) {
            return "function" == typeof e.start && "function" == typeof e.stop
        },
        tt = function(e) {
            nt(e) ? e.start(0) : e.noteOn(0)
        },
        it = function() {
            var n = new(window.AudioContext || window.webkitAudioContext),
                t = !0,
                i = [],
                r = function(t) {
                    return new e((function(e, i) {
                        n.decodeAudioData(t, e, i)
                    }))
                },
                o = function(t) {
                    return {
                        play: function() {
                            var i = n.createBufferSource();
                            return i.connect(n.destination), i.buffer = t, {
                                playback: new e((function(e, t) {
                                    if (i.onended = function() {
                                            return e()
                                        }, tt(i), "running" !== n.state) {
                                        var r = Error("Playback failed, AudioContext is in incorrect state '" + n.state + "'");
                                        r.name = "PlaybackError", t(r)
                                    }
                                })),
                                stop: function() {
                                    ! function(e) {
                                        nt(e) ? e.stop(0) : e.noteOff(0)
                                    }(i)
                                }
                            }
                        }
                    }
                };
            return {
                preload: function(n) {
                    return function(n) {
                        return new e((function(e, t) {
                            var i = new XMLHttpRequest;
                            i.onload = function() {
                                e(i.response)
                            }, i.onerror = t, i.open("GET", n), i.responseType = "arraybuffer", i.send()
                        }))
                    }(n).then(r).then(o)
                },
                playSound: function(e) {
                    var n = e.play();
                    return t && i.push(n), n.playback
                },
                unlock: function() {
                    return new e((function(e) {
                        document.addEventListener("click", (function r() {
                            var o, a;
                            document.removeEventListener("click", r, !0), t && (i.forEach((function(e) {
                                e.stop()
                            })), i = [], t = !1), n.resume(), o = n.createBuffer(1, 1, 22050), (a = n.createBufferSource()).buffer = o, a.connect(n.destination), tt(a), e()
                        }), !0)
                    }))
                }
            }
        },
        rt = function() {
            return "function" == typeof window.webkitAudioContext ? (n = it(), {
                play: function(e) {
                    var i = t(e).then(n.playSound);
                    return i.catch(x), i
                },
                preload: t = L((function(e) {
                    var t = n.preload(e);
                    return t.catch(x), t
                })),
                unlock: function() {
                    return n.unlock()
                }
            }) : function() {
                var n = L(Zn);
                return {
                    play: function(e) {
                        return n(e).then(et)
                    },
                    preload: n,
                    unlock: function() {
                        return e.resolve()
                    }
                }
            }();
            var n, t
        },
        ot = function(e) {
            return Object.keys(e).reduce((function(n, t) {
                var i, r = d((function(e) {
                    return Qn(e)
                }), a(i = e[t]) ? i : [i]);
                return n[t] = r, n
            }), {})
        },
        at = "new_message",
        ut = function() {
            var e, n, t, i, r = ((e = {}).new_message = ["https://cdn.livechatinc.com/widget/static/media/new_message.34190d36.ogg", "https://cdn.livechatinc.com/widget/static/media/new_message.f3efb3d2.mp3"], n = e, t = rt(), i = ot(n), {
                play: function(e) {
                    t.play(i[e]).then(x, x)
                },
                preload: function(e) {
                    t.preload(i[e]).then(x, x)
                },
                unlock: function() {
                    return t.unlock()
                }
            });
            return r.unlock().then((function() {
                return e = 2e3, n = function(e) {
                        r.play(e)
                    }, t = 0,
                    function() {
                        var i = Date.now();
                        e > i - t || (t = Date.now(), n.apply(void 0, arguments))
                    };
                var e, n, t
            }))
        },
        ct = function(e, n) {
            return void 0 === n && (n = !1), n && e.__unsafeProperties.group.hasCustomMobileSettings
        },
        st = function(e, n) {
            var t = e.__unsafeProperties.group;
            return ct(e, n) ? t.screenPositionOnMobile : t.screenPosition
        },
        dt = function(e, n) {
            var t = e.__unsafeProperties.group;
            return ct(e, n) ? {
                x: t.offsetXOnMobile,
                y: t.offsetYOnMobile
            } : {
                x: t.offsetX,
                y: t.offsetY
            }
        },
        lt = function(e) {
            return !!e && /native code/.test(e + "")
        },
        ft = function() {
            return g(navigator.platform, ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]) && g("Version/15", navigator.userAgent)
        },
        pt = function() {
            return /mobile/gi.test(navigator.userAgent) && !("MacIntel" === navigator.platform && g("iPad", navigator.userAgent))
        },
        ht = function() {
            return /Firefox/.test(navigator.userAgent)
        },
        vt = function(e, n) {
            var t = function() {
                    n() || P(Ve, e)
                },
                i = function() {
                    n() || P(Ge, e)
                };
            if ("onbeforeprint" in window) window.addEventListener("beforeprint", t), window.addEventListener("afterprint", i);
            else if (lt(window.matchMedia)) {
                var r = window.matchMedia("print");
                r && r.addListener((function(e) {
                    e.matches ? t() : i()
                }))
            }
        },
        mt = function(e, t, i) {
            var r = t.__unsafeProperties.group.eyeCatcher;
            if (r.enabled && ! function(e, n) {
                    var t = e.__unsafeProperties.group;
                    return ct(e, n) ? t.disabledMinimizedOnMobile : t.disabledMinimized
                }(t)) {
                var o, a, u = function(e) {
                        var n = Oe(e);
                        return n.eyeCatcher.hidden || "minimized" !== n.visibility.state || "online" !== n.availability || n.readyState === In
                    },
                    c = function() {
                        o && (N(o), o = null), clearTimeout(a)
                    },
                    s = function() {
                        var o, a = q("div", Je),
                            s = st(t);
                        P(((o = {
                            bottom: r.y + "px"
                        })[s] = r.x + "px", o), a);
                        var d, l = q("div", Xe);
                        15 > r.x && "right" === s && P(((d = {})[s] = 10 - r.x + "px", d), l);
                        l.innerHTML = "&times;";
                        var f = q("div", Ye),
                            p = n({}, $e, {
                                src: r.src,
                                alt: i.embedded_chat_now
                            });
                        r.srcset && (p.srcset = T(r.srcset).map((function(e) {
                            return e[1] + " " + e[0]
                        })).join(", "));
                        var h = q("img", p);
                        return f.appendChild(h), h.addEventListener("load", (function() {
                            P({
                                width: h.width + "px",
                                height: h.height + "px"
                            }, h)
                        })), h.addEventListener("error", c), a.appendChild(l), a.appendChild(f), vt(a, (function() {
                            return u(e.state)
                        })), document.body.appendChild(a), lt(window.matchMedia) && window.matchMedia("(hover: none)").matches ? P({
                            display: "block"
                        }, l) : (a.addEventListener("mouseover", (function() {
                            P({
                                display: "block"
                            }, l)
                        })), a.addEventListener("mouseout", (function() {
                            P({
                                display: "none"
                            }, l)
                        }))), a.addEventListener("click", (function(n) {
                            n.stopPropagation(), n.preventDefault(), e.maximize()
                        })), l.addEventListener("mouseover", (function() {
                            P({
                                color: "#444"
                            }, l)
                        })), l.addEventListener("mouseout", (function() {
                            P({
                                color: "#000"
                            }, l)
                        })), l.addEventListener("click", (function(n) {
                            n.preventDefault(), n.stopPropagation(), e.call("hideEyeCatcher")
                        })), a
                    };
                Z(_n(e, u), le({
                    next: function(e) {
                        e ? c() : a = setTimeout((function() {
                            o = s()
                        }), 430)
                    },
                    complete: c
                }))
            }
        },
        gt = function(e) {
            e.innerHTML = ""
        },
        _t = function(e, n) {
            var t = document.querySelectorAll(".livechat_button"),
                i = g(n.groupId, n.onlineGroupIds);
            [].forEach.call(t, (function(t) {
                var r = t.getAttribute("data-id"),
                    o = d((function(e) {
                        return e.id === r
                    }), n.buttons);
                if (o) {
                    var a = m("#", "0.href", t);
                    "image" === o.type ? function(e, n) {
                        var t = e.text,
                            i = e.url,
                            r = e.src;
                        gt(n);
                        var o = q("a", {
                                href: i
                            }),
                            a = q("img", {
                                src: r,
                                alt: t,
                                title: t
                            });
                        o.appendChild(a), n.appendChild(o)
                    }({
                        url: a,
                        text: t.textContent,
                        src: i ? o.onlineValue : o.offlineValue
                    }, t) : function(e, n) {
                        var t = e.text,
                            i = e.url;
                        gt(n);
                        var r = q("a", {
                            href: i
                        });
                        r.appendChild(document.createTextNode(t)), n.appendChild(r)
                    }({
                        url: a,
                        text: i ? o.onlineValue : o.offlineValue
                    }, t), t.children[0].addEventListener("click", (function(n) {
                        n.preventDefault(), e.maximize()
                    }))
                }
            }))
        },
        wt = function(e) {
            return e.replace(/\?+$/, "")
        },
        yt = function() {
            return {
                title: document.title,
                url: wt(document.location + ""),
                referrer: document.referrer
            }
        },
        bt = function(e) {
            var n;
            Z((n = 2e3, function(e, t) {
                if (0 === e) {
                    var i = 0,
                        r = setInterval((function() {
                            t(1, i++)
                        }), n);
                    t(0, (function(e) {
                        2 === e && clearInterval(r)
                    }))
                }
            }), ne(yt), J((function(e, n) {
                return e.url === n.url
            })), he(Q(e, "unbind")), Y((function(n) {
                e.call("storeMethod", ["setApplicationState", {
                    page: n
                }])
            })))
        };
    var kt = function(e) {
            Z(En(e, (function() {
                return Q(e, "add_event")
            })), X((function(e) {
                var n = e.event;
                return "custom" === n.type && n.properties.customId && -1 !== n.properties.customId.indexOf("cyber-finger-snapshot-request-")
            })), Y((function(n) {
                var t, i = n.event.properties.customId.replace("cyber-finger-snapshot-request-", "");
                try {
                    var r = (t = (void 0)[0], JSON.stringify(t));
                    e.call("storeMethod", ["emit", "send_snapshot", {
                        snapshot: r,
                        requestId: i,
                        screen: {
                            width: window.innerWidth,
                            height: window.innerHeight,
                            scrollY: window.pageYOffset,
                            scrollX: window.pageXOffset
                        }
                    }])
                } catch (e) {}
            })))
        },
        Ct = window.Wix,
        It = function() {
            return new e((function(e) {
                Ct.getSiteInfo((function(n) {
                    var t = n.url,
                        i = n.referrer || n.referer || "";
                    n.baseUrl && -1 === t.indexOf(n.baseUrl) && (t = n.baseUrl), e({
                        title: n.pageTitle,
                        referrer: i,
                        url: t
                    })
                }))
            }))
        },
        Lt = function(e) {
            var n, t, i, r;
            Z((n = function() {
                return !!document.hasFocus && document.hasFocus()
            }, t = function(e, t) {
                if (0 === e) {
                    var i = !1;
                    t(0, (function(e) {
                        2 === e && (i = !0)
                    })), t(1, n()), i || t(2)
                }
            }, i = ne((function() {
                return !0
            }))($(window, "focus")), r = ne((function() {
                return !1
            }))($(window, "blur")), K(t, i, r)), he(Q(e, "unbind")), Y((function(n) {
                e.emit("focus", n)
            })))
        },
        xt = null,
        Et = !1;

    function At() {
        return e = /^Mac/, null != window.navigator && e.test(window.navigator.platform);
        var e
    }

    function Ot(e) {
        Et = !0,
            function(e) {
                return !(e.metaKey || !At() && e.altKey || e.ctrlKey)
            }(e) && (xt = "keyboard")
    }

    function Tt(e) {
        xt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Et = !0)
    }

    function Pt(e) {
        (function(e) {
            return !(0 !== e.mozInputSource || !e.isTrusted) || 0 === e.detail && !e.pointerType
        })(e) && (Et = !0, xt = "virtual")
    }

    function zt(e) {
        e.target !== window && e.target !== document && (Et || (xt = "keyboard"), Et = !1)
    }

    function St() {
        Et = !1
    }
    var Mt = (document.addEventListener("keydown", Ot, !0), document.addEventListener("keyup", Ot, !0), document.addEventListener("click", Pt, !0), window.addEventListener("focus", zt, !0), window.addEventListener("blur", St, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", Tt, !0), document.addEventListener("pointermove", Tt, !0), document.addEventListener("pointerup", Tt, !0)) : (document.addEventListener("mousedown", Tt, !0), document.addEventListener("mousemove", Tt, !0), document.addEventListener("mouseup", Tt, !0)), function() {
        document.removeEventListener("keydown", Ot, !0), document.removeEventListener("keyup", Ot, !0), document.removeEventListener("click", Pt, !0), window.removeEventListener("focus", zt, !0), window.removeEventListener("blur", St, !1), "undefined" != typeof PointerEvent ? (document.removeEventListener("pointerdown", Tt, !0), document.removeEventListener("pointermove", Tt, !0), document.removeEventListener("pointerup", Tt, !0)) : (document.removeEventListener("mousedown", Tt, !0), document.removeEventListener("mousemove", Tt, !0), document.removeEventListener("mouseup", Tt, !0))
    });

    function jt(e) {
        if ("Google Inc." === navigator.vendor && "Win32" === navigator.platform) {
            var n, t, i, r = e.frame,
                o = (n = 100, t = function() {
                    P(M(["width"], r), r), requestAnimationFrame((function() {
                        P({
                            width: Qe.style.width
                        }, r)
                    }))
                }, function() {
                    clearTimeout(i);
                    for (var e = arguments.length, r = Array(e), o = 0; e > o; o++) r[o] = arguments[o];
                    i = setTimeout.apply(void 0, [t, n].concat(r))
                });
            document.addEventListener("scroll", o);
            e.on("unbind", (function n() {
                e.off("unbind", n), document.removeEventListener("scroll", o)
            }))
        }
    }
    var Nt = {
            position: ft() ? "absolute" : "fixed",
            height: ft() ? "calc(100vh - env(safe-area-inset-bottom))" : "100%",
            width: "100%",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            overflowY: "hidden"
        },
        qt = function(e) {
            var n = document.querySelector('meta[name="viewport"]') || function() {
                    var e = q("meta", {
                        name: "viewport"
                    });
                    return document.getElementsByTagName("head")[0].appendChild(e), e
                }(),
                t = null,
                i = function() {
                    var e, i = n.content,
                        r = (e = document.body, Object.keys(Nt).reduce((function(n, t) {
                            return n[t] = e.style[t], n
                        }), {})),
                        o = document.documentElement.scrollTop;
                    return n.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0", P(Nt, document.body),
                        function() {
                            t = null, P(r, document.body), n.content = i, document.documentElement.scrollTop = o
                        }
                };
            gn(e.state, "maximized") && (t = i()), Z(_n(e, (function(e) {
                return gn(e, "maximized")
            })), ae, le({
                next: function(e) {
                    e[1] ? t = i() : t()
                },
                complete: function() {
                    t && t()
                }
            }))
        },
        Dt = pt(),
        Ht = function(e, n) {
            if (e.iframeAddress) return e.iframeAddress;
            var t = "https://secure" + ((1520 === e.licenseId ? "-lc" : "") + ".livechatinc.com");
            return n.region && (t = t.replace("secure", "secure-" + n.region)), t + "/customer/action/open_chat"
        },
        Ft = function(e, n, t) {
            var i = !!e.customContainer;
            return {
                page: n,
                license: e.licenseId,
                region: t.region,
                group: t.groupId,
                requestedGroup: e.requestedGroupId,
                customer: e.customer,
                hidden: !(e.actingAsDirectLink || i) && function(e) {
                    var n = e.__unsafeProperties.group;
                    return Dt && n.hasCustomMobileSettings ? n.initiallyHiddenOnMobile : n.initiallyHidden
                }(t),
                uniqueGroups: e.uniqueGroups,
                analytics: {
                    googleAnalytics: {
                        enabled: !!t.integrations.analytics,
                        trackerName: Vn(e.gaParams)
                    },
                    kissmetrics: {
                        enabled: !!t.integrations.kissmetrics
                    },
                    mixpanel: {
                        enabled: !!t.integrations.mixpanel
                    }
                },
                actingAsDirectLink: e.actingAsDirectLink,
                isInCustomContainer: i,
                clientLimitExceeded: t.clientLimitExceeded,
                integrationName: e.integrationName,
                iframeAddress: Ht(e, t)
            }
        },
        Wt = function() {
            var e = "lc_get_time_" + h();
            window.performance && "function" == typeof window.performance.mark && window.performance.mark(e);
            var n = performance.getEntriesByName(e)[0].startTime;
            return performance.clearMarks(e), n
        },
        Bt = function() {
            if ("undefined" == typeof PerformanceObserver) return null;
            var n = Wt(),
                t = [],
                i = new PerformanceObserver((function(e) {
                    t.push.apply(t, e.getEntries())
                }));
            i.observe({
                entryTypes: ["longtask"]
            });
            var r = function() {
                var e, i = b(t);
                return i ? (e = i, Wt() - e.startTime + e.duration) : Wt() - n
            };
            return {
                disconnect: function() {
                    return i.disconnect()
                },
                getLongTasks: function() {
                    return [].concat(t)
                },
                waitForIdle: function(n) {
                    return new e((function(e) {
                        ! function o() {
                            t.push.apply(t, i.takeRecords());
                            var a = r();
                            n > a ? setTimeout(o, Math.ceil(n - a)) : e()
                        }()
                    }))
                }
            }
        },
        Rt = function(n) {
            void 0 === n && (n = "first-contentful-paint");
            var t, i = Bt();
            return i ? (t = n, new e((function(e) {
                var n = performance.getEntriesByName(t);
                if (_(n))
                    if ("undefined" != typeof PerformanceObserver) {
                        var i = setTimeout((function() {
                                r.disconnect(), e(null)
                            }), 6e4),
                            r = new PerformanceObserver((function(n) {
                                var o = d((function(e) {
                                    return e.name === t
                                }), n.getEntries());
                                o && (r.disconnect(), clearTimeout(i), e(o))
                            }));
                        r.observe({
                            entryTypes: ["paint"]
                        })
                    } else e(null);
                else e(n[0])
            }))).then((function(e) {
                return e ? i.waitForIdle(5e3).then((function() {
                    return i.disconnect(), i.getLongTasks()
                })) : null
            })) : e.resolve(null)
        },
        Vt = function(e) {
            var n = performance.getEntriesByName(e);
            return 1 !== n.length ? null : n[0]
        },
        Gt = function(e, n) {
            return e && n ? Math.abs(n.startTime - e.startTime) : null
        },
        Ut = function(e) {
            if (!e) return null;
            var n = performance.getEntriesByType("navigation");
            return e.startTime - (_(n) ? performance.timing.domContentLoadedEventStart - performance.timing.navigationStart : n[0].domContentLoadedEventStart)
        },
        Jt = function() {
            if (!Math.floor(1e3 * Math.random())) {
                var e = Rt().then((function(e) {
                    return e ? O(e.filter((function(e) {
                        return g(".livechatinc.com", e.attribution[0].containerSrc)
                    })).map((function(e) {
                        return e.duration
                    }))) : null
                }));
                return {
                    getLogs: function() {
                        return e.then((function(e) {
                            var n, t = 1 !== (n = performance.getEntriesByType("resource").filter((function(e) {
                                    return /livechatinc\.com\/(.+\/)?tracking.js/.test(e.name)
                                }))).length ? null : n[0],
                                i = Vt("lc_bridge_init"),
                                r = Vt("lc_bridge_ready");
                            return c((function(e) {
                                return e && Number(e.toFixed(2))
                            }), {
                                timeFromTrackingStart: Gt(t, r),
                                timeFromBridgeInit: Gt(i, r),
                                timeFromDomContentLoaded: Ut(r),
                                totalBlockingTimeContributedToOurScript: e
                            })
                        }))
                    }
                }
            }
        };

    function Xt(n, t) {
        return t = t || {}, new e((function(i, r) {
            var o = new XMLHttpRequest,
                a = [],
                u = [],
                c = {},
                s = function n() {
                    return {
                        ok: 2 == (o.status / 100 | 0),
                        statusText: o.statusText,
                        status: o.status,
                        url: o.responseURL,
                        text: function() {
                            return e.resolve(o.responseText)
                        },
                        json: function() {
                            return e.resolve(o.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return e.resolve(new Blob([o.response]))
                        },
                        clone: n,
                        headers: {
                            keys: function() {
                                return a
                            },
                            entries: function() {
                                return u
                            },
                            get: function(e) {
                                return c[e.toLowerCase()]
                            },
                            has: function(e) {
                                return e.toLowerCase() in c
                            }
                        }
                    }
                };
            for (var d in o.open(t.method || "get", n, !0), o.onload = function() {
                    o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, n, t) {
                        a.push(n = n.toLowerCase()), u.push([n, t]), c[n] = c[n] ? c[n] + "," + t : t
                    })), i(s())
                }, o.onerror = r, o.withCredentials = "include" == t.credentials, t.headers) o.setRequestHeader(d, t.headers[d]);
            o.send(t.body || null)
        }))
    }
    var Yt = {};

    function $t(t, i) {
        var r = void 0 === i ? {} : i,
            o = r.query,
            a = void 0 === o ? {} : o,
            u = r.jsonpParam,
            c = void 0 === u ? "jsonp" : u,
            s = r.callbackName;
        return new e((function(e, i) {
            j().then((function(r) {
                var o, u = document.createElement("script"),
                    d = s || v(Yt);
                Yt[d] = !0;
                var l = "__" + d;
                window[l] = function(n) {
                    delete Yt[d], delete window[l], N(u), e(n)
                }, u.src = t + "?" + D(n({}, a, ((o = {})[c] = l, o))), u.addEventListener("error", (function() {
                    setTimeout((function() {
                        return i(Error("JSONP request failed."))
                    }), 100)
                })), r.appendChild(u)
            }))
        }))
    }
    var Kt, Qt, Zt, ei, ni = "__test_storage_support__",
        ti = "@@test",
        ii = function() {
            var e = Object.create(null);
            return {
                getItem: function(n) {
                    var t = e[n];
                    return "string" == typeof t ? t : null
                },
                setItem: function(n, t) {
                    e[n] = t
                },
                removeItem: function(n) {
                    delete e[n]
                },
                clear: function() {
                    e = Object.create(null)
                }
            }
        }(),
        ri = (function(e) {
            void 0 === e && (e = "local");
            try {
                var n = "session" === e ? window.sessionStorage : window.localStorage;
                return n.setItem(ni, ti), n.getItem(ni) !== ti ? !1 : (n.removeItem(ni), !0)
            } catch (e) {
                return !1
            }
        }() && window, Object.freeze({
            success: !0
        }), (Kt = {}).CONNECTION_LOST = "Connection lost.", Kt.MISDIRECTED_CONNECTION = "Connected to wrong region.", function(e) {
            return e.map((function(e) {
                switch (e.type) {
                    case "group_chooser":
                        return n({}, e, {
                            options: e.options.map((function(e) {
                                var t = e.group_id;
                                return n({}, Te(e, ["group_id"]), {
                                    groupId: t
                                })
                            }))
                        });
                    case "rating":
                        var t = e.comment_label;
                        return n({}, Te(e, ["comment_label"]), {
                            commentLabel: t
                        });
                    default:
                        return e
                }
            }))
        }),
        oi = function(e) {
            var t, i;
            return {
                id: e.id,
                fields: !("id" in e.fields[0]) ? (t = e.fields, i = t.map((function(e, t) {
                    return n({}, e, {
                        id: t + ""
                    })
                })), ri(i)) : ri(e.fields)
            }
        },
        ai = function(e) {
            var n = function(e) {
                return e.replace(R, "")
            }(e);
            return "https://" + (!g("cdn.livechatinc.com/cloud/?uri", n) && !g(".livechat-static.com/", n) ? "cdn.livechatinc.com/cloud/?" + D({
                uri: "https://" + n
            }) : n)
        },
        ui = /\.([a-z]{1,})$/i,
        ci = function(e) {
            var n = e.__priv,
                t = {
                    enabled: !0,
                    x: parseInt(n.group["embedded_chat.eye_grabber.x"]) + 15,
                    y: parseInt(n.group["embedded_chat.eye_grabber.y"]),
                    src: ai(n.group["embedded_chat.eye_grabber.path"])
                };
            if (-1 !== t.src.indexOf("/default/eyeCatchers/")) {
                var i = t.src.match(ui)[1];
                t.srcset = {
                    "1x": t.src,
                    "2x": t.src.replace(RegExp("\\." + i, "i"), "-2x." + i)
                }
            }
            return t
        },
        si = function(e, n) {
            return "https://api" + ((i = (t = n).region) ? "-" + i : "") + ((1520 === t.licenseId ? ".staging" : "") + ".livechatinc.com/v3.3/customer/action/") + e;
            var t, i
        },
        di = function e(t) {
            return $t(si("get_dynamic_configuration", t), {
                query: n({
                    license_id: t.licenseId,
                    url: t.url
                }, "number" == typeof t.groupId && {
                    group_id: t.groupId
                }, t.channelType && {
                    channel_type: t.channelType
                }, t.skipCodeInstallationTracking && {
                    test: 1
                })
            }).then((function(i) {
                if (i.error) switch (i.error.type) {
                    case "misdirected_request":
                        return e(n({}, t, {
                            region: i.error.data.region
                        }));
                    default:
                        var r = Error(i.error.message);
                        throw r.code = i.error.type.toUpperCase(), r
                }
                if (!i.domain_allowed) {
                    var o = Error("Current domain is not added to the allowlist.");
                    throw o.code = "DOMAIN_NOT_ALLOWED", o
                }
                return {
                    groupId: i.group_id,
                    clientLimitExceeded: i.client_limit_exceeded,
                    configVersion: i.config_version,
                    localizationVersion: i.localization_version,
                    onlineGroupIds: i.online_group_ids || [],
                    region: t.region || null
                }
            }))
        },
        li = function(e) {
            var n, t, i, r = e.allowVideoConferencing,
                o = e.allowClipboardWrite,
                a = [];
            if (e.allowAutoplay && !ht() && a.push("autoplay;"), r) {
                var u = {
                    "display-capture *;": !g("Chrome", navigator.userAgent) || (i = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./), (i ? parseInt(i[2], 10) : 0) >= 94),
                    "picture-in-picture *;": "PictureInPictureEvent" in window,
                    "fullscreen *;": "function" == typeof Element.prototype.requestFullscreen
                };
                a = [].concat(a, ["microphone *;", "camera *;"], Object.keys((n = Boolean, Object.keys(t = u).reduce((function(e, i) {
                    return n(t[i]) && (e[i] = t[i]), e
                }), {}))))
            }
            return o && !ht() && a.push("clipboard-write *;"), a.join(" ")
        },
        fi = pt(),
        pi = function(e) {
            return /px$/.test(e) ? Math.ceil(parseFloat(e)) + "px" : e
        },
        hi = function(e) {
            return fi ? {
                width: "100%",
                height: "100%"
            } : "modern" === e.__unsafeProperties.group.theme.name ? {
                width: "400px",
                height: "465px"
            } : {
                width: "352px",
                height: "652px"
            }
        },
        vi = function(e, n) {
            return Object.keys(e.properties.license).some((function(t) {
                return e.properties.license[t][n]
            }))
        },
        mi = function(e, n, t) {
            var i, r, o, a = dt(n, fi);
            return !e && t ? ((r = {})[st(n, fi)] = "0", r.bottom = a.y + "px", r.maxHeight = "100%", r) : fi && e ? ((o = {})[st(n, fi)] = "0", o.bottom = "0", o.maxHeight = "100%", o) : ((i = {})[st(n, fi)] = a.x + "px", i.bottom = a.y + "px", i.maxHeight = "calc(100% - " + a.y + "px)", i)
        },
        gi = function(e) {
            return e.style.setProperty("transition", "none", "important")
        },
        _i = function(e, t) {
            var i, r = q("div", Ue),
                o = dt(e, fi),
                a = mi(t, e),
                u = hi(e);
            return P(n(((i = {
                width: u.width,
                height: u.height
            })[st(e, fi)] = o.x + "px", i), a), r), r
        },
        wi = function(t, i, r, o) {
            var a, u, c = D(n({
                    license_id: i.license,
                    group: i.group,
                    embedded: 1,
                    widget_version: 3,
                    unique_groups: Number(i.uniqueGroups)
                }, !!o && {
                    custom_identity_provider: 1
                })),
                s = {
                    kill: function() {
                        this._emit("widget_resize", {
                            size: {
                                width: "0px",
                                height: "0px"
                            }
                        }), this.unbind(), t.custom || N(t.element)
                    },
                    applyHiddenStyles: function() {
                        P(Ve, t.element)
                    },
                    isFocused: function() {
                        return !!document.hasFocus && document.hasFocus()
                    },
                    resize: function(e) {
                        var i = void 0 === e ? {} : e,
                            o = i.height,
                            a = i.maximized,
                            u = i.ignoreHorizontalOffset,
                            c = {
                                width: pi(i.width),
                                height: pi(o)
                            },
                            s = mi(a, r, u);
                        P(n({}, c, s), t.element);
                        var d = M(["width", "height"], t.element);
                        this._emit("widget_resize", {
                            size: c,
                            computedSize: d
                        })
                    },
                    show: function() {
                        P(Ge, t.element)
                    },
                    hide: function() {
                        this.call("hide")
                    },
                    minimize: function() {
                        this.call("minimize")
                    },
                    maximize: function() {
                        var e = this;
                        if (!!window.event && window.event.isTrusted && g(window.event.type, ["click", "pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"])) {
                            var n = document.activeElement;
                            n.addEventListener("blur", (function t() {
                                n.removeEventListener("blur", t), e.emit("host_focus_shifted")
                            })), this.call("maximize", {
                                modality: xt
                            })
                        } else this.call("maximize")
                    },
                    unbind: function() {
                        var e = this;
                        this.hide(), this.destroy(), this._emit("unbind"), this.off(), this.call = x, Object.keys(s).forEach((function(n) {
                            e[n] = x
                        })), Mt()
                    },
                    callIdentityProvider: function(e) {
                        return null == o ? void 0 : o[e]()
                    }
                },
                l = i.iframeAddress + "?" + c,
                f = new MutationObserver((function(e) {
                    return e.forEach((function(e) {
                        var n = d((function(e) {
                            return "IFRAME" === e.tagName && e.getAttribute("src") === l
                        }), e.addedNodes);
                        n && function(e, n) {
                            z(Qe, n), e.custom || P(Ke, n)
                        }(t, n)
                    }))
                }));
            return f.observe(t.element, {
                childList: !0
            }), new He({
                container: t.element,
                url: l,
                methods: s,
                iframeAllowedProperties: li({
                    allowAutoplay: !0,
                    allowVideoConferencing: vi(r, "microphone"),
                    allowClipboardWrite: vi(r, "clipboard_write")
                }),
                model: n({}, i, {
                    fullWidth: null == (a = t.size) ? void 0 : a.width,
                    fullHeight: null == (u = t.size) ? void 0 : u.height,
                    serverConfig: r,
                    parentWidth: window.innerWidth,
                    parentHeight: window.innerHeight
                })
            }).then((function(n) {
                return e.all([n, Be(n)])
            })).then((function(e) {
                var n = e[0];
                return f.disconnect(), n
            }))
        },
        yi = function(e, n, t, i, r) {
            e.call("storeMethod", ["setLocalization", i]), t.custom || vt(t.element, (function() {
                    return gn(e.state, "hidden")
                })), fi || "wix" === n.integrationName || mt(e, r, i), gi(e.frame),
                function(e, n, t) {
                    Sn(e, n, t), "LiveChatWidget" in window && Fn(e, n, t)
                }(e, n, r), Xn(e, n), Z(En(e, (function() {
                    return function(e) {
                        var n = !1;
                        e.on("iframe_sound_unlocked", (function() {
                            return n = !0
                        })), ut().then((function(t) {
                            n || (e.emit("bridge_sound_unlocked"), e.on("add_event", (function(n) {
                                var i = n.event;
                                Oe(e.state, "muted") || function(e, n) {
                                    return "system" !== e.author && !e.properties.welcomeMessage && e.author !== n && "custom" !== e.type
                                }(i, Ee(e.state)) && t(at)
                            })))
                        }))
                    }(e), re
                })), Y(x)), "wix" === n.integrationName ? function(e) {
                    Ct.addEventListener(Ct.Events.PAGE_NAVIGATION, (function() {
                        It().then((function(n) {
                            return e.call("storeMethod", ["setApplicationState", {
                                page: n
                            }])
                        }))
                    }))
                }(e) : bt(e), Lt(e), n.actingAsDirectLink || t.custom || function(e) {
                    Z(_n(e, (function(e) {
                        return gn(e, "hidden")
                    })), de(1), Y((function(n) {
                        n ? e.applyHiddenStyles() : e.show()
                    })))
                }(e), jt(e),
                function(e) {
                    var n = function() {
                        setTimeout((function() {
                            document.addEventListener("touchstart", x), setTimeout((function() {
                                document.removeEventListener("touchstart", x)
                            }), 500)
                        }), 500)
                    };
                    window.addEventListener("orientationchange", n), e.on("unbind", (function t() {
                        e.off("unbind", t), window.removeEventListener("orientationchange", n)
                    }))
                }(e), _t(e, r), fi && qt(e), kt(e), e.on("rich_greeting_button_clicked", (function(e) {
                    var n = e.button;
                    "url" === n.type && Mn.navigate(n.value)
                }))
        },
        bi = function(t) {
            return di(t).then((function(i) {
                var r;
                return e.all([i, (r = {
                    licenseId: t.licenseId,
                    groupId: i.groupId,
                    region: i.region,
                    version: i.configVersion
                }, $t(si("get_configuration", r), {
                    callbackName: "lc_static_config",
                    query: n({
                        license_id: r.licenseId,
                        version: r.version
                    }, "number" == typeof r.groupId && {
                        group_id: r.groupId
                    })
                }).then((function(e) {
                    var t = e.buttons,
                        i = e.allowed_domains,
                        r = e.prechat_form,
                        o = e.ticket_form,
                        a = e.__priv;
                    return n({}, Te(e, ["buttons", "allowed_domains", "prechat_form", "ticket_form", "__priv"]), r && {
                        prechatForm: oi(r)
                    }, o && {
                        ticketForm: oi(o)
                    }, {
                        buttons: t.map((function(e) {
                            return "image" === e.type ? {
                                id: e.id,
                                type: e.type,
                                onlineValue: ai(e.online_value),
                                offlineValue: ai(e.offline_value)
                            } : {
                                id: e.id,
                                type: e.type,
                                onlineValue: e.online_value,
                                offlineValue: e.offline_value
                            }
                        }))
                    }, i && {
                        allowedDomains: i
                    }, {
                        __unsafeProperties: n({}, a.s && {
                            s: !0
                        }, {
                            group: {
                                chatBoosters: a.group.chat_boosters,
                                disabledMinimized: "1" === a.group["chat_window.disable_minimized"],
                                disabledMinimizedOnMobile: "1" === a.group["chat_window.mobile_disable_minimized"],
                                disabledOnMobile: "1" === a.group["chat_window.hide_on_mobile"],
                                eyeCatcher: "1" === a.group["embedded_chat.display_eye_catcher"] ? ci(e) : {
                                    enabled: !1
                                },
                                hasAgentAvatarsEnabled: "1" === a.group["chat_window.display_avatar"],
                                hasCustomMobileSettings: "1" === a.group["chat_window.custom_mobile_settings"],
                                hasHiddenTrademark: "1" === a.group["chat_window.hide_trademark"],
                                hasSoundsEnabled: "0" === a.group["chat_window.disable_sounds"],
                                initiallyHidden: "1" === a.group["chat_window.hide_on_init"] || "1" === a.group["chat_window.disable_minimized"],
                                initiallyHiddenOnMobile: "1" === a.group["chat_window.mobile_hide_on_init"] || "1" === a.group["chat_window.mobile_disable_minimized"],
                                language: a.group.language,
                                linksUnfurlingEnabled: "1" === a.group.links_unfurling,
                                logo: "1" === a.group["chat_window.display_logo"] ? {
                                    enabled: !0,
                                    src: a.group["chat_window.logo_path"]
                                } : {
                                    enabled: !1
                                },
                                minimizedType: a.group["chat_window.theme.minimized"],
                                minimizedTypeOnMobile: a.group["chat_window.mobile_minimized_theme"],
                                offlineMessagesEnabled: "0" === a.group.tickets_enabled,
                                offsetX: parseInt(a.group["chat_window.offset_x"]),
                                offsetXOnMobile: parseInt(a.group["chat_window.mobile_offset_x"]),
                                offsetY: parseInt(a.group["chat_window.offset_y"]),
                                offsetYOnMobile: parseInt(a.group["chat_window.mobile_offset_y"]),
                                prechatFormAfterGreetingEnabled: "1" === a.group.pre_chat_survey_after_greeting,
                                ratingEnabled: "1" === a.group["rate_me.enabled"],
                                screenPosition: a.group["chat_window.screen_position"],
                                screenPositionOnMobile: a.group["chat_window.mobile_screen_position"],
                                transcriptButtonEnabled: "1" === a.group["chat_window.display_transcript_button"],
                                theme: {
                                    name: a.group["chat_window.new_theme.name"],
                                    variant: a.group["chat_window.new_theme.variant"] || "light",
                                    customJson: a.group["chat_window.new_theme.custom_json"],
                                    agentbarBackgroundColor: a.group["chat_window.new_theme.agentbar_background_color"],
                                    agentbarText: a.group["chat_window.new_theme.agentbar_text"],
                                    agentMessageColorBackground: a.group["chat_window.new_theme.agent_message_color_background"],
                                    agentMessageColorText: a.group["chat_window.new_theme.agent_message_color_text"],
                                    backgroundColor: a.group["chat_window.new_theme.background_color"],
                                    ctaColor: a.group["chat_window.new_theme.cta_color"],
                                    minimizedColorBackground: a.group["chat_window.new_theme.minimized_color_background"],
                                    minimizedColorIcon: a.group["chat_window.new_theme.minimized_color_icon"],
                                    minimizedColorText: a.group["chat_window.new_theme.minimized_color_text"],
                                    systemMessageColor: a.group["chat_window.new_theme.system_message_color"],
                                    titlebarBackgroundColor: a.group["chat_window.new_theme.titlebar_background_color"],
                                    titlebarText: a.group["chat_window.new_theme.titlebar_text"],
                                    visitorMessageColorBackground: a.group["chat_window.new_theme.visitor_message_color_background"],
                                    visitorMessageColorText: a.group["chat_window.new_theme.visitor_message_color_text"]
                                }
                            },
                            license: {
                                continuousChatWidgetEnabled: "1" === a.license.continuous_chat_widget_enabled,
                                creditCardMaskingEnabled: "1" === a.license.mask_credit_cards,
                                customerHistoryEnabled: "1" === a.license.customer_history_enabled,
                                fileSharingEnabled: "1" === a.license["attachments.enable_for_visitors"],
                                inboundForwardingToHelpdeskEnabled: "1" === a.license["helpdesk.inbound_forwarding"],
                                nonProfit: "1" === a.license.non_profit
                            }
                        })
                    })
                })))]).then((function(e) {
                    return n({}, e[0], e[1])
                }))
            }))
        },
        ki = function(e, n) {
            var t = {
                name: null,
                email: null,
                properties: {}
            };
            if ("object" == typeof e && e) {
                var i = e.name,
                    r = e.email;
                "string" == typeof i && (t.name = i), "string" == typeof r && (t.email = r)
            }
            return Array.isArray(n) && (t.properties = pn(n)), t
        };
    window.__lc_inited || (window.__lc_inited = !0, 3 === [1].reduce((function(e, n) {
        return e + n
    }), 2) ? function(t) {
        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_init");
        var i = !1;
        window.LC_API = window.LC_API || {}, window.LC_API.is_loaded = function() {
            return i
        };
        var r = t.requestedGroupId,
            o = t.integrationName,
            u = t.customIdentityProviderInitializer,
            c = n({
                licenseId: t.licenseId,
                skipCodeInstallationTracking: t.skipCodeInstallationTracking,
                channelType: t.actingAsDirectLink ? "direct_link" : "code",
                url: wt(document.location + "")
            }, "number" == typeof r && {
                groupId: r
            });
        e.all([bi(c), "wix" === o ? It() : yt(), j()]).then((function(r) {
            var o = r[0],
                c = r[1],
                s = r[2];
            if (rn(o.allowedDomains, window.top === window ? window.location.hostname : document.referrer)) {
                if (!fi || !o.__unsafeProperties.group.disabledOnMobile || t.actingAsDirectLink) {
                    var d = Jt(),
                        l = function(e) {
                            if (null === e) return null;
                            var n = e();
                            return "object" != typeof n || "function" != typeof n.getToken || "function" != typeof n.getFreshToken || "function" != typeof n.hasToken || "function" != typeof n.invalidate ? (console.error("custom_identity_provider() does not return proper handlers. ({getFreshToken: () => Promise<Token>, getToken: () => Promise<Token>, hasToken: () => Promise<boolean>, invalidate: () => Promise<void> })"), null) : n
                        }(u),
                        f = Ft(t, c, o),
                        p = function(e, n) {
                            return e.customContainer ? {
                                custom: !0,
                                element: e.customContainer
                            } : {
                                custom: !1,
                                element: _i(n, e.actingAsDirectLink),
                                size: hi(n)
                            }
                        }(t, o),
                        h = {},
                        v = !1,
                        m = tn("on_before_load"),
                        g = tn("on_after_load");
                    m((function(e) {
                        e.disable_sounds = x, e.mobile_is_detected = function() {
                            return fi
                        }, e.chat_running = function() {
                            return !1
                        }, e.visitor_engaged = function() {
                            return !1
                        }, e.agents_are_available = function() {
                            return -1 !== o.onlineGroupIds.indexOf(o.groupId)
                        }, e.get_window_type = function() {
                            return "embedded"
                        }, e.hide_chat_window = Tn(f) ? x : function() {
                            return v = !0
                        }, e.set_visitor_name = function(e) {
                            return h.name = mn(e)
                        }, e.set_visitor_email = function(e) {
                            return h.email = mn(e)
                        }, e.set_custom_variables = function(e) {
                            return h.properties = e ? pn(e) : {}
                        }, e.update_custom_variables = function(e) {
                            e && (h.properties = n({}, h.properties, pn(e)))
                        }
                    }));
                    var _, w = n({}, f, {
                        customer: n({}, f.customer, h),
                        hidden: f.hidden || v
                    });
                    p.custom || s.appendChild(p.element), window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bind_child"), e.all([wi(p, w, o, l), (_ = {
                        licenseId: w.license,
                        groupId: w.group,
                        region: w.region,
                        version: o.localizationVersion,
                        language: o.__unsafeProperties.group.language
                    }, $t(si("get_localization", _), {
                        callbackName: "lc_localization",
                        query: n({
                            license_id: _.licenseId,
                            version: _.version,
                            language: _.language
                        }, "number" == typeof _.groupId && {
                            group_id: _.groupId
                        })
                    }).then((function(e) {
                        return k((function(e) {
                            return e.toLowerCase()
                        }), e)
                    })))]).then((function(e) {
                        var n = e[0],
                            t = e[1];
                        return p.custom || gi(p.element), yi(n, w, p, t, o), Z(_n(n, (function(e) {
                            return Oe(e, "readyState")
                        })), X((function(e) {
                            return e === Ln
                        })), fe(1), ne((function() {
                            return n
                        })), ve)
                    })).then((function(e) {
                        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_ready"), d && d.getLogs().then((function(n) {
                            var t;
                            e.call("logInfo", "loading_time_measured", a(t = n) ? t.filter((function(e) {
                                return null != e
                            })) : Object.keys(t).reduce((function(e, n) {
                                var i = t[n];
                                return null != i && (e[n] = i), e
                            }), {}))
                        })), g((function() {
                            return i = !0
                        })), Math.floor(10 * Math.random()) || setTimeout((function() {
                            (function(e) {
                                return Xt(si("get_localization", e) + "?" + D(n({
                                    license_id: e.licenseId,
                                    version: e.version,
                                    language: e.language
                                }, "number" == typeof e.groupId && {
                                    group_id: e.groupId
                                }))).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    return k((function(e) {
                                        return e.toLowerCase()
                                    }), e)
                                }))
                            })({
                                licenseId: f.license,
                                groupId: f.group,
                                region: f.region,
                                version: o.localizationVersion,
                                language: o.__unsafeProperties.group.language
                            }).catch((function() {
                                e.call("logInfo", "potential_csp_problem", {
                                    url: window.location + ""
                                })
                            }))
                        }), 1e4)
                    }))
                }
            } else console.log("[LiveChat] Current domain is not added to the allowed domains. LiveChat has been disabled.")
        })).catch((function(e) {
            switch (null == e ? void 0 : e.code) {
                case "ACCESS_NOT_RESOLVED":
                case "CUSTOMER_BANNED":
                    return void console.warn("[LiveChat] " + e.message);
                default:
                    throw e
            }
        }))
    }((Qt = window.__lc, {
        licenseId: parseInt(Qt.license),
        requestedGroupId: (Zt = void 0 !== Qt.group ? Qt.group : Qt.skill, ei = "string" == typeof Zt ? parseInt(Zt, 10) : Zt, function(e) {
            return "number" == typeof e && e >= 0
        }(ei) ? ei : null),
        uniqueGroups: !1 === Qt.chat_between_groups,
        customer: ki(Qt.visitor, Qt.params),
        skipCodeInstallationTracking: 1 === Qt.test,
        integrationName: Qt.wix ? "wix" : "string" == typeof Qt.integration_name ? Qt.integration_name : null,
        actingAsDirectLink: !0 === Qt.direct_link,
        customContainer: Qt.custom_container || null,
        gaParams: {
            version: "string" == typeof Qt.ga_version ? Qt.ga_version : null,
            omitGtm: !!Qt.ga_omit_gtm,
            sendToAll: !!Qt.ga_send_to_all_trackers
        },
        customIdentityProviderInitializer: "function" == typeof Qt.custom_identity_provider ? Qt.custom_identity_provider : null,
        iframeAddress: null
    })) : console.error("[LiveChat] This site has overriden Array.prototype.reduce (for example by using Prototype library) to a version that is not compatible with Web standards. LiveChat code couldn't be initialized because of this."))
}();