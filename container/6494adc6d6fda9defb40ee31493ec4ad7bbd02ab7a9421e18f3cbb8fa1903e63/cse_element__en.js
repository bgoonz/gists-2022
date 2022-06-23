(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var g, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        fa = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ha = fa(this),
        ka = function(a, b) {
            if (b) a: {
                var c = ha;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ka("Symbol", function(a) {
        if (a) return a;
        var b = function(f, h) {
            this.Kr = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        };
        b.prototype.toString = function() {
            return this.Kr
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6", "es3");
    ka("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ha[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return la(aa(this))
                }
            })
        }
        return a
    }, "es6", "es3");
    var la = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        r = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ma = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ra;
    if ("function" == typeof Object.setPrototypeOf) ra = Object.setPrototypeOf;
    else {
        var ua;
        a: {
            var xa = {
                    a: !0
                },
                Ca = {};
            try {
                Ca.__proto__ = xa;
                ua = Ca.a;
                break a
            } catch (a) {}
            ua = !1
        }
        ra = ua ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var Da = ra,
        Ea = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (Da) Da(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.qd = b.prototype
        },
        Ha = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    ka("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var h = d[f];
                    if (b.call(c, h, f, d)) {
                        b = h;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6", "es3");
    var Ia = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ka("WeakMap", function(a) {
        function b() {}

        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function d(l) {
            if (!Ia(l, f)) {
                var m = new b;
                ba(l, f, {
                    value: m
                })
            }
        }

        function e(l) {
            var m = Object[l];
            m && (Object[l] = function(u) {
                if (u instanceof b) return u;
                Object.isExtensible(u) && d(u);
                return m(u)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        u = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != u.get(l) || 3 != u.get(m)) return !1;
                    u.delete(l);
                    u.set(m, 4);
                    return !u.has(l) && 4 == u.get(m)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var h = 0,
            k = function(l) {
                this.Fb = (h += Math.random() + 1).toString();
                if (l) {
                    l = r(l);
                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        k.prototype.set = function(l, m) {
            if (!c(l)) throw Error("Invalid WeakMap key");
            d(l);
            if (!Ia(l, f)) throw Error("WeakMap key fail: " + l);
            l[f][this.Fb] = m;
            return this
        };
        k.prototype.get = function(l) {
            return c(l) && Ia(l, f) ? l[f][this.Fb] : void 0
        };
        k.prototype.has = function(l) {
            return c(l) && Ia(l, f) && Ia(l[f],
                this.Fb)
        };
        k.prototype.delete = function(l) {
            return c(l) && Ia(l, f) && Ia(l[f], this.Fb) ? delete l[f][this.Fb] : !1
        };
        return k
    }, "es6", "es3");
    ka("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        l = new a(r([
                            [k, "s"]
                        ]));
                    if ("s" != l.get(k) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        u = m.next();
                    if (u.done || u.value[0] != k || "s" != u.value[1]) return !1;
                    u = m.next();
                    return u.done || 4 != u.value[0].x || "t" != u.value[1] || !m.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(k) {
                this.Ve = {};
                this.Qa =
                    f();
                this.size = 0;
                if (k) {
                    k = r(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.Ve[m.id] = []);
            m.Fa ? m.Fa.value = l : (m.Fa = {
                next: this.Qa,
                dc: this.Qa.dc,
                head: this.Qa,
                key: k,
                value: l
            }, m.list.push(m.Fa), this.Qa.dc.next = m.Fa, this.Qa.dc = m.Fa, this.size++);
            return this
        };
        c.prototype.delete = function(k) {
            k = d(this, k);
            return k.Fa && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.Ve[k.id], k.Fa.dc.next = k.Fa.next, k.Fa.next.dc =
                k.Fa.dc, k.Fa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.Ve = {};
            this.Qa = this.Qa.dc = f();
            this.size = 0
        };
        c.prototype.has = function(k) {
            return !!d(this, k).Fa
        };
        c.prototype.get = function(k) {
            return (k = d(this, k).Fa) && k.value
        };
        c.prototype.entries = function() {
            return e(this, function(k) {
                return [k.key, k.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(k) {
                return k.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(k) {
                return k.value
            })
        };
        c.prototype.forEach = function(k, l) {
            for (var m = this.entries(),
                    u; !(u = m.next()).done;) u = u.value, k.call(l, u[1], u[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(k, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++h, b.set(l, m)) : m = "p_" + l;
                var u = k.Ve[m];
                if (u && Ia(k.Ve, m))
                    for (k = 0; k < u.length; k++) {
                        var t = u[k];
                        if (l !== l && t.key !== t.key || l === t.key) return {
                            id: m,
                            list: u,
                            index: k,
                            Fa: t
                        }
                    }
                return {
                    id: m,
                    list: u,
                    index: -1,
                    Fa: void 0
                }
            },
            e = function(k, l) {
                var m = k.Qa;
                return la(function() {
                    if (m) {
                        for (; m.head != k.Qa;) m = m.dc;
                        for (; m.next != m.head;) return m =
                            m.next, {
                                done: !1,
                                value: l(m)
                            };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var k = {};
                return k.dc = k.next = k.head = k
            },
            h = 0;
        return c
    }, "es6", "es3");
    var Ja = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    ka("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ja(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6", "es3");
    var Qa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    ka("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Qa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6", "es3");
    ka("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ja(this, function(b) {
                return b
            })
        }
    }, "es6", "es3");
    ka("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ja(this, function(b, c) {
                return c
            })
        }
    }, "es8", "es3");
    ka("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++))
            } else
                for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
            return e
        }
    }, "es6", "es3");
    ka("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(r([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (h) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.Lb = new Map;
            if (c) {
                c =
                    r(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.Lb.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.Lb.set(c, c);
            this.size = this.Lb.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.Lb.delete(c);
            this.size = this.Lb.size;
            return c
        };
        b.prototype.clear = function() {
            this.Lb.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.Lb.has(c)
        };
        b.prototype.entries = function() {
            return this.Lb.entries()
        };
        b.prototype.values = function() {
            return this.Lb.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.Lb.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6", "es3");
    ka("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6", "es3");
    ka("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    }, "es7", "es3");
    ka("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Qa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6", "es3");
    ka("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Ia(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8", "es3");
    var Ta = Ta || {},
        x = this || self,
        Ua = function(a) {
            a = a || "";
            throw Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
        },
        Va = function() {},
        Wa = function(a) {
            var b = typeof a;
            b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Xa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        $a = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ab = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments,
                    2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        bb = function(a, b, c) {
            bb = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $a : ab;
            return bb.apply(null, arguments)
        },
        cb = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        y = function(a, b, c) {
            a = a.split(".");
            c = c ||
                x;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        },
        hb = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.qd = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.PC = function(d, e, f) {
                for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
                return b.prototype[e].apply(d, h)
            }
        },
        ib = function(a) {
            return a
        };

    function jb(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, jb);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    hb(jb, Error);
    jb.prototype.name = "CustomError";
    var kb = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        jb.call(this, c + a[d])
    };
    hb(kb, jb);
    kb.prototype.name = "AssertionError";
    var lb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        ub = function(a, b) {
            if (b) a = a.replace(mb, "&amp;").replace(nb, "&lt;").replace(ob, "&gt;").replace(pb, "&quot;").replace(qb, "&#39;").replace(rb, "&#0;");
            else {
                if (!tb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(mb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(nb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ob, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qb,
                    "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(rb, "&#0;"))
            }
            return a
        },
        mb = /&/g,
        nb = /</g,
        ob = />/g,
        pb = /"/g,
        qb = /'/g,
        rb = /\x00/g,
        tb = /[\x00&<>"']/,
        wb = function(a, b) {
            var c = 0;
            a = lb(String(a)).split(".");
            b = lb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    h = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == h[0].length) break;
                    c = vb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) ||
                        vb(0 == f[2].length, 0 == h[2].length) || vb(f[2], h[2]);
                    f = f[3];
                    h = h[3]
                } while (0 == c)
            }
            return c
        },
        vb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function xb() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function B(a) {
        return -1 != xb().indexOf(a)
    }

    function yb(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function zb() {
        return B("Opera")
    }

    function Ab() {
        return B("Trident") || B("MSIE")
    }

    function Bb() {
        return B("Firefox") || B("FxiOS")
    }

    function Db() {
        return B("Safari") && !(Eb() || B("Coast") || zb() || B("Edge") || B("Edg/") || B("OPR") || Bb() || B("Silk") || B("Android"))
    }

    function Eb() {
        return (B("Chrome") || B("CriOS")) && !B("Edge") || B("Silk")
    }

    function Fb() {
        return B("Android") && !(Eb() || Bb() || zb() || B("Silk"))
    }

    function Gb(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[c.find(function(d) {
                return d in b
            })] || ""
        }
    }

    function Hb() {
        var a = xb();
        if (Ab()) return Ib(a);
        a = yb(a);
        var b = Gb(a);
        return zb() ? b(["Version", "Opera"]) : B("Edge") ? b(["Edge"]) : B("Edg/") ? b(["Edg"]) : B("Silk") ? b(["Silk"]) : Eb() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    }

    function Ib(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
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
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    }

    function Jb(a) {
        var b = xb();
        if ("Internet Explorer" === a) return Ab() ? Ib(b) : "";
        b = yb(b);
        var c = Gb(b);
        switch (a) {
            case "Opera":
                if (zb()) return c(["Version", "Opera"]);
                if (B("OPR")) return c(["OPR"]);
                break;
            case "Microsoft Edge":
                if (B("Edge")) return c(["Edge"]);
                if (B("Edg/")) return c(["Edg"]);
                break;
            case "Chromium":
                if (Eb()) return c(["Chrome", "CriOS", "HeadlessChrome"])
        }
        return "Firefox" === a && Bb() || "Safari" === a && Db() || "Android Browser" === a && Fb() || "Silk" === a && B("Silk") ? (a = b[2]) && a[1] || "" : ""
    }

    function Kb(a) {
        a = Jb(a);
        if ("" === a) return NaN;
        a = a.split(".");
        return 0 === a.length ? NaN : Number(a[0])
    };

    function Mb() {
        return B("iPhone") && !B("iPod") && !B("iPad")
    }

    function Nb() {
        var a = xb(),
            b = "";
        B("Windows") ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : Mb() || B("iPad") || B("iPod") ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : B("Macintosh") ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : -1 != xb().toLowerCase().indexOf("kaios") ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : B("Android") ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : B("CrOS") && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
            b = (a = b.exec(a)) && a[1]);
        return b || ""
    };
    var Ob = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Pb = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Qb = Array.prototype.map ?
        function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        },
        Rb = Array.prototype.some ? function(a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        };

    function Sb(a, b) {
        b = Ob(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Tb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ub(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Vb(a, b, c) {
        return Tb.apply([], Qb(a, b, c))
    };

    function Wb() {
        return -1 != xb().toLowerCase().indexOf("webkit") && !B("Edge")
    }

    function Xb() {
        return B("Gecko") && !Wb() && !(B("Trident") || B("MSIE")) && !B("Edge")
    };
    var Yb = function(a) {
        Yb[" "](a);
        return a
    };
    Yb[" "] = Va;
    var Zb = function(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var $b = zb(),
        ac = Ab(),
        bc = B("Edge"),
        cc = Xb(),
        dc = Wb(),
        ec = function() {
            var a = x.document;
            return a ? a.documentMode : void 0
        },
        fc;
    a: {
        var gc = "",
            hc = function() {
                var a = xb();
                if (cc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (bc) return /Edge\/([\d\.]+)/.exec(a);
                if (ac) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (dc) return /WebKit\/(\S+)/.exec(a);
                if ($b) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();hc && (gc = hc ? hc[1] : "");
        if (ac) {
            var ic = ec();
            if (null != ic && ic > parseFloat(gc)) {
                fc = String(ic);
                break a
            }
        }
        fc = gc
    }
    var jc = fc,
        kc = {},
        lc = function(a) {
            return Zb(kc, a, function() {
                return 0 <= wb(jc, a)
            })
        },
        mc;
    if (x.document && ac) {
        var nc = ec();
        mc = nc ? nc : parseInt(jc, 10) || void 0
    } else mc = void 0;
    var oc = mc;
    Fb();
    Eb();
    var pc = Db() && !(Mb() || B("iPad") || B("iPod"));
    var qc = {},
        rc = null,
        sc = function(a, b) {
            void 0 === b && (b = 0);
            if (!rc) {
                rc = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    qc[e] = f;
                    for (var h = 0; h < f.length; h++) {
                        var k = f[h];
                        void 0 === rc[k] && (rc[k] = h)
                    }
                }
            }
            b = qc[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
                var l = a[f],
                    m = a[f + 1];
                k = a[f + 2];
                h = b[l >> 2];
                l = b[(l & 3) << 4 | m >> 4];
                m = b[(m & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[e++] = "" + h + l + m + k
            }
            h = 0;
            k = d;
            switch (a.length -
                f) {
                case 2:
                    h = a[f + 1], k = b[(h & 15) << 2] || d;
                case 1:
                    a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | h >> 4] + k + d
            }
            return c.join("")
        };
    var tc = "function" === typeof Uint8Array;
    var uc = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;

    function vc(a) {
        Object.isFrozen(a) || (uc ? a[uc] |= 1 : void 0 !== a.Sg ? a.Sg |= 1 : Object.defineProperties(a, {
            Sg: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    };

    function wc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var xc;

    function yc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && tc && null != a && a instanceof Uint8Array) return sc(a)
        }
        return a
    };

    function zc(a, b) {
        if (null != a) return Array.isArray(a) || wc(a) ? Ac(a, b) : b(a)
    }

    function Ac(a, b) {
        if (Array.isArray(a)) {
            for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = zc(a[d], b);
            if (b = Array.isArray(a)) a = uc ? a[uc] : a.Sg, b = (null == a ? 0 : a) & 1;
            b && vc(c);
            return c
        }
        c = {};
        for (d in a) c[d] = zc(a[d], b);
        return c
    }

    function Bc(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = yc(a);
        return Array.isArray(a) ? Ac(a, Bc) : a
    }

    function Cc(a) {
        return tc && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };
    var Dc;
    var Gc = function(a, b, c) {
            var d = Dc;
            Dc = null;
            a || (a = d);
            d = this.constructor.hE;
            a || (a = d ? [d] : []);
            this.zd = (d ? 0 : -1) - (this.constructor.OD || 0);
            this.ra = null;
            this.$a = a;
            a: {
                d = this.$a.length;a = d - 1;
                if (d && (d = this.$a[a], wc(d))) {
                    this.je = a - this.zd;
                    this.rb = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.je = Math.max(b, a + 1 - this.zd), this.rb = null) : this.je = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++) a = c[b], a < this.je ? (a += this.zd, (d = this.$a[a]) ? Array.isArray(d) && vc(d) : this.$a[a] = Ec) : (Fc(this), (d = this.rb[a]) ? Array.isArray(d) && vc(d) : this.rb[a] =
                    Ec)
        },
        Ec = Object.freeze(vc([])),
        Fc = function(a) {
            var b = a.je + a.zd;
            a.$a[b] || (a.rb = a.$a[b] = {})
        };
    g = Gc.prototype;
    g.Ac = function(a, b) {
        return -1 === a ? null : a >= this.je ? this.rb ? this.rb[a] : void 0 : (void 0 === b ? 0 : b) && this.rb && this.rb[a] ? this.rb[a] : this.$a[a + this.zd]
    };
    g.Iw = function(a) {
        return null != this.Ac(a)
    };
    g.Hw = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        b = this.Ac(a, c);
        null == b && (b = Ec);
        b === Ec && (b = vc(b.slice()), this.X(a, b, c));
        return b
    };
    g.Ho = function(a, b) {
        a = this.Ac(a);
        return null == a ? b : a
    };
    g.X = function(a, b, c) {
        (void 0 === c ? 0 : c) || a >= this.je ? (Fc(this), this.rb[a] = b) : this.$a[a + this.zd] = b;
        return this
    };
    g.Jo = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        return this.X(a, null == b ? vc([]) : Array.isArray(b) ? vc(b) : b, c)
    };
    g.Fw = function(a, b) {
        return this.X(a, void 0, !1, void 0 === b ? !1 : b)
    };
    g.Tg = function(a, b, c, d) {
        if (-1 === b) return null;
        this.ra || (this.ra = {});
        var e = this.ra[b];
        if (e) return e;
        d = this.Ac(b, void 0 === d ? !1 : d);
        if (null == d && !c) return e;
        a = new a(d);
        return this.ra[b] = a
    };
    g.Sj = function(a, b, c) {
        this.ra || (this.ra = {});
        var d = this.ra[b];
        if (!d) {
            c = this.Hw(b, !0, void 0 === c ? !1 : c);
            d = [];
            for (var e = 0; e < c.length; e++) d[e] = new a(c[e]);
            this.ra[b] = d
        }
        return d
    };
    g.$d = function(a, b, c) {
        this.ra || (this.ra = {});
        var d = b ? b.$a : b;
        this.ra[a] = b;
        return this.X(a, d, void 0 === c ? !1 : c)
    };
    g.Ko = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (b) {
            var d = vc([]);
            for (var e = 0; e < b.length; e++) d[e] = b[e].$a;
            this.ra || (this.ra = {});
            this.ra[a] = b
        } else this.ra && (this.ra[a] = void 0), d = Ec;
        return this.X(a, d, c)
    };
    g.toJSON = function() {
        var a = this.$a;
        return xc ? a : Ac(a, Bc)
    };

    function Hc(a, b) {
        return yc(b)
    }
    g.xe = function() {
        xc = !0;
        try {
            return JSON.stringify(this.toJSON(), Hc)
        } finally {
            xc = !1
        }
    };
    g.toString = function() {
        return this.$a.toString()
    };
    g.getExtension = function(a) {
        return a.Pu(this)
    };
    g.clone = function() {
        var a = this.constructor,
            b = Ac(this.$a, Cc);
        Dc = b;
        a = new a(b);
        Dc = null;
        Ic(a, this);
        return a
    };

    function Ic(a, b) {
        b.Go && (a.Go = b.Go.slice());
        var c = b.ra;
        if (c) {
            b = b.rb;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var f = !(!b || !b[d]),
                        h = +d;
                    if (Array.isArray(e)) {
                        if (e.length)
                            for (f = a.Sj(e[0].constructor, h, f), h = 0; h < Math.min(f.length, e.length); h++) Ic(f[h], e[h])
                    } else(f = a.Tg(e.constructor, h, void 0, f)) && Ic(f, e)
                }
            }
        }
    }
    g.Io = function(a, b) {
        return this.Ho(a, void 0 === b ? 0 : b)
    };
    g.Gw = function(a, b) {
        return this.Ho(a, void 0 === b ? "0" : b)
    };
    var Kc = function(a) {
        Gc.call(this, a, -1, Jc)
    };
    Ea(Kc, Gc);
    Kc.prototype.lz = function(a) {
        return this.X(4, a)
    };
    Kc.prototype.Ps = function() {
        return this.Fw(4)
    };
    Kc.prototype.uz = function(a) {
        return this.Jo(2, a)
    };
    var Jc = [2];
    var Lc = function(a) {
        if (!a) return "";
        if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
        c = a.substring(0, a.indexOf("://"));
        if (!c) throw Error("URI is missing protocol: " + a);
        if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !==
            c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
        a = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
        }
        return c + "://" + b + a
    };

    function Mc() {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            u = m = 0
        }

        function b(t) {
            for (var z = h, v = 0; 64 > v; v += 4) z[v / 4] = t[v] << 24 | t[v + 1] << 16 | t[v + 2] << 8 | t[v + 3];
            for (v = 16; 80 > v; v++) t = z[v - 3] ^ z[v - 8] ^ z[v - 14] ^ z[v - 16], z[v] = (t << 1 | t >>> 31) & 4294967295;
            t = e[0];
            var U = e[1],
                ca = e[2],
                S = e[3],
                pa = e[4];
            for (v = 0; 80 > v; v++) {
                if (40 > v)
                    if (20 > v) {
                        var F = S ^ U & (ca ^ S);
                        var C = 1518500249
                    } else F = U ^ ca ^ S, C = 1859775393;
                else 60 > v ? (F = U & ca | S & (U | ca), C = 2400959708) : (F = U ^ ca ^ S, C = 3395469782);
                F = ((t << 5 | t >>> 27) & 4294967295) +
                    F + pa + C + z[v] & 4294967295;
                pa = S;
                S = ca;
                ca = (U << 30 | U >>> 2) & 4294967295;
                U = t;
                t = F
            }
            e[0] = e[0] + t & 4294967295;
            e[1] = e[1] + U & 4294967295;
            e[2] = e[2] + ca & 4294967295;
            e[3] = e[3] + S & 4294967295;
            e[4] = e[4] + pa & 4294967295
        }

        function c(t, z) {
            if ("string" === typeof t) {
                t = unescape(encodeURIComponent(t));
                for (var v = [], U = 0, ca = t.length; U < ca; ++U) v.push(t.charCodeAt(U));
                t = v
            }
            z || (z = t.length);
            v = 0;
            if (0 == m)
                for (; v + 64 < z;) b(t.slice(v, v + 64)), v += 64, u += 64;
            for (; v < z;)
                if (f[m++] = t[v++], u++, 64 == m)
                    for (m = 0, b(f); v + 64 < z;) b(t.slice(v, v + 64)), v += 64, u += 64
        }

        function d() {
            var t = [],
                z = 8 * u;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var v = 63; 56 <= v; v--) f[v] = z & 255, z >>>= 8;
            b(f);
            for (v = z = 0; 5 > v; v++)
                for (var U = 24; 0 <= U; U -= 8) t[z++] = e[v] >> U & 255;
            return t
        }
        for (var e = [], f = [], h = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
        var m, u;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            At: function() {
                for (var t = d(), z = "", v = 0; v < t.length; v++) z += "0123456789ABCDEF".charAt(Math.floor(t[v] / 16)) + "0123456789ABCDEF".charAt(t[v] % 16);
                return z
            }
        }
    };
    var Oc = function(a, b, c, d, e) {
            return a && b && c ? [c, Nc(Lc(a), b, d || null, e || [])].join(" ") : null
        },
        Nc = function(a, b, c, d) {
            var e = [];
            if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], Pb(d, function(k) {
                e.push(k)
            }), Pc(e.join(" "));
            var f = [],
                h = [];
            Pb(c, function(k) {
                h.push(k.key);
                f.push(k.value)
            });
            c = Math.floor((new Date).getTime() / 1E3);
            e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
            Pb(d, function(k) {
                e.push(k)
            });
            a = Pc(e.join(" "));
            a = [c, a];
            0 == h.length || a.push(h.join(""));
            return a.join("_")
        },
        Pc = function(a) {
            var b = Mc();
            b.update(a);
            return b.At().toLowerCase()
        };
    var Qc = {};
    var Rc = function() {
            return null
        },
        Sc = function(a) {
            return a
        },
        Tc = function(a, b) {
            b = b || 0;
            return function() {
                return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
            }
        };

    function Uc(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Vc(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return !0;
        return !1
    }

    function Wc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Xc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }

    function Yc(a) {
        if (!a || "object" !== typeof a) return a;
        if ("function" === typeof a.clone) return a.clone();
        if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
        if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
        var b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length),
            c;
        for (c in a) b[c] = Yc(a[c]);
        return b
    }
    var Zc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function $c(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Zc.length; f++) c = Zc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var ad = {
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
        wbr: !0
    };
    var bd, cd = function() {
        if (void 0 === bd) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) try {
                a = b.createPolicy("goog#html", {
                    createHTML: ib,
                    createScript: ib,
                    createScriptURL: ib
                })
            } catch (c) {
                x.console && x.console.error(c.message)
            }
            bd = a
        }
        return bd
    };
    var fd = function(a, b) {
        this.gr = a === dd && b || "";
        this.Vr = ed
    };
    fd.prototype.Gb = !0;
    fd.prototype.Za = function() {
        return this.gr
    };
    var gd = function(a) {
            return a instanceof fd && a.constructor === fd && a.Vr === ed ? a.gr : "type_error:Const"
        },
        ed = {},
        dd = {};
    var hd = /<[^>]*>|&[^;]+;/g,
        id = function(a, b) {
            return b ? a.replace(hd, "") : a
        },
        jd = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        kd = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"),
        ld = /^http:\/\/.*/,
        md = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*$"),
        nd = RegExp("[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$"),
        od = /\s+/,
        pd = /[\d\u06f0-\u06f9]/;
    var rd = function(a, b) {
        this.uk = b === qd ? a : ""
    };
    g = rd.prototype;
    g.Gb = !0;
    g.Za = function() {
        return this.uk.toString()
    };
    g.Lj = !0;
    g.Qd = function() {
        return 1
    };
    g.toString = function() {
        return this.uk + ""
    };
    var sd = function(a) {
            return a instanceof rd && a.constructor === rd ? a.uk : "type_error:TrustedResourceUrl"
        },
        wd = function(a, b) {
            var c = gd(a);
            if (!td.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(ud, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof fd ? gd(d) : encodeURIComponent(String(d))
            });
            return vd(a)
        },
        ud = /%{(\w+)}/g,
        td = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)",
            "i"),
        qd = {},
        vd = function(a) {
            var b = cd();
            a = b ? b.createScriptURL(a) : a;
            return new rd(a, qd)
        };
    var yd = function(a, b) {
        this.tk = b === xd ? a : ""
    };
    g = yd.prototype;
    g.Gb = !0;
    g.Za = function() {
        return this.tk.toString()
    };
    g.Lj = !0;
    g.Qd = function() {
        return 1
    };
    g.toString = function() {
        return this.tk.toString()
    };
    var zd = function(a) {
            return a instanceof yd && a.constructor === yd ? a.tk : "type_error:SafeUrl"
        },
        Bd = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
        Cd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Ed = function(a) {
            a = String(a);
            a = a.replace(/(%0A|%0D)/g, "");
            var b = a.match(Cd);
            return b && Bd.test(b[1]) ? Dd(a) : null
        },
        Fd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Hd = function(a) {
            a instanceof yd || (a = "object" == typeof a && a.Gb ? a.Za() : String(a), a = Fd.test(a) ? Dd(a) : Ed(a));
            return a || Gd
        },
        Id = function(a, b) {
            if (a instanceof yd) return a;
            a = "object" == typeof a && a.Gb ? a.Za() : String(a);
            if (b && /^data:/i.test(a) && (b = Ed(a) || Gd, b.Za() == a)) return b;
            Fd.test(a) || (a = "about:invalid#zClosurez");
            return Dd(a)
        },
        xd = {},
        Dd = function(a) {
            return new yd(a, xd)
        },
        Gd = Dd("about:invalid#zClosurez");
    var Jd = {},
        Kd = function(a, b) {
            this.sk = b === Jd ? a : "";
            this.Gb = !0
        };
    Kd.prototype.Za = function() {
        return this.sk
    };
    Kd.prototype.toString = function() {
        return this.sk.toString()
    };
    var Ld = function(a) {
            return a instanceof Kd && a.constructor === Kd ? a.sk : "type_error:SafeStyle"
        },
        Od = function(a) {
            var b = "",
                c;
            for (c in a)
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                    var d = a[c];
                    null != d && (d = Array.isArray(d) ? d.map(Md).join(" ") : Md(d), b += c + ":" + d + ";")
                }
            return b ? new Kd(b, Jd) : Nd
        },
        Nd = new Kd("", Jd);

    function Md(a) {
        if (a instanceof yd) return 'url("' + zd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof fd) a = gd(a);
        else {
            a = String(a);
            var b = a.replace(Pd, "$1").replace(Pd, "$1").replace(Qd, "url");
            if (Rd.test(b)) {
                if (b = !Sd.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Td(a)
                }
                a = b ? Ud(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new kb("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Td(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Rd = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Qd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Pd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Sd = /\/\*/;

    function Ud(a) {
        return a.replace(Qd, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                f = k;
                return l
            });
            b = Hd(d).Za();
            return c + f + b + f + e
        })
    };
    var Vd = {},
        Wd = function(a, b) {
            this.rk = b === Vd ? a : "";
            this.Gb = !0
        },
        Yd = function(a) {
            var b = "",
                c = function(d) {
                    Array.isArray(d) ? d.forEach(c) : b += Xd(d)
                };
            Array.prototype.forEach.call(arguments, c);
            return new Wd(b, Vd)
        };
    Wd.prototype.Za = function() {
        return this.rk
    };
    var Xd = function(a) {
        return a instanceof Wd && a.constructor === Wd ? a.rk : "type_error:SafeStyleSheet"
    };
    Wd.prototype.toString = function() {
        return this.rk.toString()
    };
    var Zd = new Wd("", Vd);
    var $d = {},
        ae = function(a, b, c) {
            this.qk = c === $d ? a : "";
            this.Nm = b;
            this.Gb = this.Lj = !0
        };
    ae.prototype.Qd = function() {
        return this.Nm
    };
    ae.prototype.Za = function() {
        return this.qk.toString()
    };
    ae.prototype.toString = function() {
        return this.qk.toString()
    };
    var be = function(a) {
            return a instanceof ae && a.constructor === ae ? a.qk : "type_error:SafeHtml"
        },
        de = function(a) {
            if (a instanceof ae) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.Lj && (c = a.Qd());
            return ce(ub(b && a.Gb ? a.Za() : String(a)), c)
        },
        ee = function(a, b) {
            a = de(a);
            var c = a.Qd(),
                d = [],
                e = function(f) {
                    Array.isArray(f) ? f.forEach(e) : (f = de(f), d.push(be(f).toString()), f = f.Qd(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            b.forEach(e);
            return ce(d.join(be(a).toString()), c)
        },
        ge = function(a) {
            return ee(fe, Array.prototype.slice.call(arguments))
        },
        he = function(a, b) {
            var c = ge(Array.prototype.slice.call(arguments, 1));
            c.Nm = a;
            return c
        },
        ce = function(a, b) {
            var c = cd();
            a = c ? c.createHTML(a) : a;
            return new ae(a, b, $d)
        },
        ie = /^[a-zA-Z0-9-]+$/,
        je = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        ke = {
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
            TEMPLATE: !0
        },
        fe = new ae(x.trustedTypes && x.trustedTypes.emptyHTML || "", 0, $d);
    var le = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = be(fe);
            return !b.parentElement
        }),
        me = function(a, b) {
            if (le())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = be(b)
        },
        ne = function(a, b) {
            me(a, b)
        },
        oe = function(a, b) {
            b = b instanceof yd ? b : Id(b);
            a.href = zd(b)
        },
        pe = function(a, b) {
            b = b instanceof yd ? b : Id(b, /^data:image\//i.test(b));
            a.src = zd(b)
        },
        re = function(a) {
            var b = qe("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView);
            b && a.setAttribute("nonce", b)
        },
        se = /^[\w+/_-]+[=]{0,2}$/,
        qe = function(a, b) {
            b = (b || x).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && se.test(a) ? a : "" : ""
        };
    var te = function(a, b) {
        return a = ub(a, b)
    };
    var ue = function(a) {
        this.uc = a || {
            cookie: ""
        }
    };
    g = ue.prototype;
    g.isEnabled = function() {
        if (!x.navigator.cookieEnabled) return !1;
        if (!this.Nw()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            lp: 60
        });
        if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    g.gx = function(a) {
        return !/[;=\s]/.test(a)
    };
    g.ix = function(a) {
        return !/[;\r\n]/.test(a)
    };
    g.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.LE;
            d = c.OE || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var k = c.lp
        }
        if (!this.gx(a)) throw Error('Invalid cookie name "' + a + '"');
        if (!this.ix(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === k && (k = -1);
        this.pz(a + "=" + b + (f ? ";domain=" + f : "") + (h ? ";path=" + h : "") + (0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * k)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : ""))
    };
    g.get = function(a, b) {
        for (var c = a + "=", d = this.Yn(), e = 0, f; e < d.length; e++) {
            f = lb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    g.remove = function(a, b, c) {
        var d = this.ct(a);
        this.set(a, "", {
            lp: 0,
            path: b,
            domain: c
        });
        return d
    };
    g.Nw = function() {
        return !this.uc.cookie
    };
    g.ct = function(a) {
        return void 0 !== this.get(a)
    };
    g.clear = function() {
        for (var a = this.Vu().keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    g.pz = function(a) {
        this.uc.cookie = a
    };
    g.Yn = function() {
        return (this.uc.cookie || "").split(";")
    };
    g.Vu = function() {
        for (var a = this.Yn(), b = [], c = [], d, e, f = 0; f < a.length; f++) e = lb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var ve = function(a) {
            return !!Qc.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
        },
        we = function(a, b, c, d) {
            (a = x[a]) || (a = (new ue(document)).get(b));
            return a ? Oc(String(x.location.href), a, c, d) : null
        },
        xe = function(a, b) {
            b = void 0 === b ? !1 : b;
            var c = Lc(String(x.location.href)),
                d = [];
            var e = b;
            e = void 0 === e ? !1 : e;
            var f = x.__SAPISID || x.__APISID || x.__3PSAPISID || x.__OVERRIDE_SID;
            ve(e) && (f = f || x.__1PSAPISID);
            if (f) e = !0;
            else {
                var h = new ue(document);
                f = h.get("SAPISID") || h.get("APISID") || h.get("__Secure-3PAPISID") || h.get("SID");
                ve(e) && (f =
                    f || h.get("__Secure-1PAPISID"));
                e = !!f
            }
            e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ? x.__SAPISID : x.__APISID, e || (e = new ue(document), e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? Oc(String(x.location.href), e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && ve(b) && ((b = we("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = we("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
            return 0 == d.length ? null :
                d.join(" ")
        };
    var ye = function(a, b) {
        return a + Math.random() * (b - a)
    };
    var Ae = function(a, b) {
            Uc(b, function(c, d) {
                c && "object" == typeof c && c.Gb && (c = c.Za());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ze.hasOwnProperty(d) ? a.setAttribute(ze[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        ze = {
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
            width: "width"
        },
        Be = function(a, b, c, d) {
            function e(k) {
                k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Wa(f) || Xa(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Xa(f)) {
                                var h = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                h = "function" == typeof f.item;
                                break a
                            }
                        }
                        h = !1
                    }
                    Pb(h ? Ub(f) : f, e)
                }
            }
        },
        Ce = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        De =
        function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        Ee = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        Fe = function(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else De(a), a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)))
        },
        Ge = function(a) {
            this.uc = a || x.document || document
        };
    g = Ge.prototype;
    g.lj = function(a) {
        return "string" === typeof a ? this.uc.getElementById(a) : a
    };
    g.getElementsByTagName = function(a, b) {
        return (b || this.uc).getElementsByTagName(String(a))
    };
    g.createElement = function(a) {
        return Ce(this.uc, a)
    };
    g.createTextNode = function(a) {
        return this.uc.createTextNode(String(a))
    };
    g.appendChild = function(a, b) {
        a.appendChild(b)
    };
    g.append = function(a, b) {
        Be(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1)
    };
    g.canHaveChildren = function(a) {
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
                return !1
        }
        return !0
    };
    g.removeNode = Ee;
    g.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function He(a) {
        a && "function" == typeof a.zi && a.zi()
    };
    var Ie = function() {
        this.Hd = this.Hd;
        this.hd = this.hd
    };
    g = Ie.prototype;
    g.Hd = !1;
    g.zi = function() {
        this.Hd || (this.Hd = !0, this.Tb())
    };
    g.Vp = function(a) {
        this.hs(cb(He, a))
    };
    g.hs = function(a, b) {
        this.Hd ? void 0 !== b ? a.call(b) : a() : (this.hd || (this.hd = []), this.hd.push(void 0 !== b ? bb(a, b) : a))
    };
    g.Tb = function() {
        if (this.hd)
            for (; this.hd.length;) this.hd.shift()()
    };
    var Je = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.qf = !1
    };
    Je.prototype.stopPropagation = function() {
        this.qf = !0
    };
    Je.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Ke = function() {
        if (!x.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            x.addEventListener("test", Va, b), x.removeEventListener("test", Va, b)
        } catch (c) {}
        return a
    }();
    var Le = function(a, b) {
        Je.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ye = null;
        a && this.sw(a, b)
    };
    hb(Le, Je);
    var Me = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Le.prototype.sw = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (cc) {
                a: {
                    try {
                        Yb(b.nodeName);
                        var e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (b = null)
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = dc || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = dc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Me[a.pointerType] || "";
        this.state = a.state;
        this.Ye = a;
        a.defaultPrevented && Le.qd.preventDefault.call(this)
    };
    Le.prototype.stopPropagation = function() {
        Le.qd.stopPropagation.call(this);
        this.Ye.stopPropagation ? this.Ye.stopPropagation() : this.Ye.cancelBubble = !0
    };
    Le.prototype.preventDefault = function() {
        Le.qd.preventDefault.call(this);
        var a = this.Ye;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Ne = "closure_listenable_" + (1E6 * Math.random() | 0);
    var Oe = 0;
    var Pe = function(a, b, c, d, e, f) {
        this.listener = a;
        this.proxy = b;
        this.src = c;
        this.type = d;
        this.capture = !!e;
        this.Mg = f;
        this.key = ++Oe;
        this.rf = this.$f = !1
    };
    Pe.prototype.$g = function() {
        this.rf = !0;
        this.Mg = this.src = this.proxy = this.listener = null
    };
    var Qe = function(a) {
        this.src = a;
        this.Ia = {};
        this.Lf = 0
    };
    g = Qe.prototype;
    g.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.Ia[f];
        a || (a = this.Ia[f] = [], this.Lf++);
        var h = Re(a, b, d, e); - 1 < h ? (b = a[h], c || (b.$f = !1)) : (b = new Pe(b, null, this.src, f, !!d, e), b.$f = c, a.push(b));
        return b
    };
    g.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.Ia)) return !1;
        var e = this.Ia[a];
        b = Re(e, b, c, d);
        return -1 < b ? (e[b].$g(), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.Ia[a], this.Lf--), !0) : !1
    };
    g.Wp = function(a) {
        var b = a.type;
        if (!(b in this.Ia)) return !1;
        var c = Sb(this.Ia[b], a);
        c && (a.$g(), 0 == this.Ia[b].length && (delete this.Ia[b], this.Lf--));
        return c
    };
    g.py = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.Ia)
            if (!a || c == a) {
                for (var d = this.Ia[c], e = 0; e < d.length; e++) ++b, d[e].$g();
                delete this.Ia[c];
                this.Lf--
            }
        return b
    };
    g.rj = function(a, b, c, d) {
        a = this.Ia[a.toString()];
        var e = -1;
        a && (e = Re(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    g.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return Vc(this.Ia, function(f) {
            for (var h = 0; h < f.length; ++h)
                if (!(c && f[h].type != d || e && f[h].capture != b)) return !0;
            return !1
        })
    };
    var Re = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.rf && f.listener == b && f.capture == !!c && f.Mg == d) return e
        }
        return -1
    };
    var Se = "closure_lm_" + (1E6 * Math.random() | 0),
        Te = {},
        Ue = 0,
        We = function(a, b, c, d, e) {
            if (d && d.once) return Ve(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) We(a, b[f], c, d, e);
                return null
            }
            c = Xe(c);
            return a && a[Ne] ? a.cc(b, c, Xa(d) ? !!d.capture : !!d, e) : Ye(a, b, c, !1, d, e)
        },
        Ye = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var h = Xa(e) ? !!e.capture : !!e,
                k = Ze(a);
            k || (a[Se] = k = new Qe(a));
            c = k.add(b, c, d, h, f);
            if (c.proxy) return c;
            d = $e();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Ke || (e = h), void 0 ===
                e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(af(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Ue++;
            return c
        },
        $e = function() {
            var a = bf,
                b = function(c) {
                    return a.call(b.src, b.listener, c)
                };
            return b
        },
        Ve = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) Ve(a, b[f], c, d, e);
                return null
            }
            c = Xe(c);
            return a && a[Ne] ? a.ep(b, c, Xa(d) ? !!d.capture : !!d, e) : Ye(a, b, c, !0, d, e)
        },
        cf = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) cf(a, b[f], c, d, e);
                return null
            }
            d = Xa(d) ? !!d.capture : !!d;
            c = Xe(c);
            if (a && a[Ne]) return a.ul(b, c, d, e);
            if (!a) return !1;
            if (a = Ze(a))
                if (b = a.rj(b, c, d, e)) return df(b);
            return !1
        },
        df = function(a) {
            if ("number" === typeof a || !a || a.rf) return !1;
            var b = a.src;
            if (b && b[Ne]) return b.wr(a);
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(af(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            Ue--;
            (c = Ze(b)) ? (c.Wp(a), 0 == c.Lf && (c.src = null, b[Se] = null)) : a.$g();
            return !0
        },
        af = function(a) {
            return a in Te ? Te[a] : Te[a] = "on" + a
        },
        bf = function(a, b) {
            if (a.rf) a = !0;
            else {
                b = new Le(b, this);
                var c = a.listener,
                    d = a.Mg || a.src;
                a.$f && df(a);
                a = c.call(d, b)
            }
            return a
        },
        Ze = function(a) {
            a = a[Se];
            return a instanceof Qe ? a : null
        },
        ef = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Xe = function(a) {
            if ("function" === typeof a) return a;
            a[ef] || (a[ef] = function(b) {
                return a.handleEvent(b)
            });
            return a[ef]
        };
    var ff = function() {
        Ie.call(this);
        this.Wb = new Qe(this);
        this.Wr = this;
        this.nk = null
    };
    hb(ff, Ie);
    ff.prototype[Ne] = !0;
    g = ff.prototype;
    g.addEventListener = function(a, b, c, d) {
        We(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        cf(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        var b = this.nk;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.nk) c.push(b), ++d
        }
        b = this.Wr;
        d = a.type || a;
        if ("string" === typeof a) a = new Je(a, b);
        else if (a instanceof Je) a.target = a.target || b;
        else {
            var e = a;
            a = new Je(d, b);
            $c(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.qf && 0 <= f; f--) {
                var h = a.currentTarget = c[f];
                e = h.ug(d, !0, a) && e
            }
        a.qf || (h = a.currentTarget = b, e = h.ug(d, !0, a) && e, a.qf || (e = h.ug(d, !1, a) && e));
        if (c)
            for (f = 0; !a.qf && f < c.length; f++) h = a.currentTarget = c[f], e = h.ug(d, !1, a) && e;
        return e
    };
    g.Tb = function() {
        ff.qd.Tb.call(this);
        this.qy();
        this.nk = null
    };
    g.cc = function(a, b, c, d) {
        return this.Wb.add(String(a), b, !1, c, d)
    };
    g.ep = function(a, b, c, d) {
        return this.Wb.add(String(a), b, !0, c, d)
    };
    g.ul = function(a, b, c, d) {
        return this.Wb.remove(String(a), b, c, d)
    };
    g.wr = function(a) {
        return this.Wb.Wp(a)
    };
    g.qy = function(a) {
        return this.Wb ? this.Wb.py(a) : 0
    };
    g.ug = function(a, b, c) {
        a = this.Wb.Ia[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.rf && f.capture == b) {
                var h = f.listener,
                    k = f.Mg || f.src;
                f.$f && this.wr(f);
                d = !1 !== h.call(k, c) && d
            }
        }
        return d && !c.defaultPrevented
    };
    g.rj = function(a, b, c, d) {
        return this.Wb.rj(String(a), b, c, d)
    };
    g.hasListener = function(a, b) {
        return this.Wb.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var gf = function(a, b, c, d) {
        this.Do = a;
        this.mp = b;
        this.Se = this.ui = a;
        this.Rp = c || 0;
        this.As = d || 2
    };
    gf.prototype.reset = function() {
        this.Se = this.ui = this.Do
    };
    gf.prototype.Ud = function() {
        return this.ui
    };
    gf.prototype.zs = function() {
        this.Se = Math.min(this.mp, this.Se * this.As);
        this.ui = Math.min(this.mp, this.Se + (this.Rp ? Math.round(this.Rp * (Math.random() - .5) * 2 * this.Se) : 0))
    };
    var hf = function() {};
    hf.prototype.$l = null;
    hf.prototype.Wn = function() {
        return this.$l || (this.$l = this.Dw())
    };
    var jf, kf = function() {};
    hb(kf, hf);
    kf.prototype.Bm = function() {
        var a = this.Zn();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    kf.prototype.Dw = function() {
        var a = {};
        this.Zn() && (a[0] = !0, a[1] = !0);
        return a
    };
    kf.prototype.Zn = function() {
        if (!this.yo && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c), this.yo = c
                } catch (d) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return this.yo
    };
    jf = new kf;
    var lf = function(a, b, c) {
        this.nx = c;
        this.tt = a;
        this.Iy = b;
        this.dh = 0;
        this.Qa = null
    };
    lf.prototype.get = function() {
        if (0 < this.dh) {
            this.dh--;
            var a = this.Qa;
            this.Qa = a.next;
            a.next = null
        } else a = this.tt();
        return a
    };
    lf.prototype.put = function(a) {
        this.Iy(a);
        this.dh < this.nx && (this.dh++, a.next = this.Qa, this.Qa = a)
    };
    var mf, nf = function() {
        var a = x.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function() {
            var e = Ce(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var h = "callImmediate" + Math.random(),
                k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = bb(function(l) {
                    if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(h, k)
                }
            }
        });
        if ("undefined" !== typeof a && !Ab()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.bm;
                    c.bm = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    bm: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            x.setTimeout(e, 0)
        }
    };

    function of (a) {
        x.setTimeout(function() {
            throw a;
        }, 0)
    };
    var pf = function() {
        this.Jh = this.Je = null
    };
    pf.prototype.add = function(a, b) {
        var c = this.xv();
        c.set(a, b);
        this.Jh ? this.Jh.next = c : this.Je = c;
        this.Jh = c
    };
    pf.prototype.remove = function() {
        var a = null;
        this.Je && (a = this.Je, this.Je = this.Je.next, this.Je || (this.Jh = null), a.next = null);
        return a
    };
    pf.prototype.Ly = function(a) {
        qf.put(a)
    };
    pf.prototype.xv = function() {
        return qf.get()
    };
    var qf = new lf(function() {
            return new rf
        }, function(a) {
            return a.reset()
        }, 100),
        rf = function() {
            this.next = this.scope = this.hj = null
        };
    rf.prototype.set = function(a, b) {
        this.hj = a;
        this.scope = b;
        this.next = null
    };
    rf.prototype.reset = function() {
        this.next = this.scope = this.hj = null
    };
    var wf = function(a, b) {
            sf || tf();
            uf || (sf(), uf = !0);
            vf.add(a, b)
        },
        sf, tf = function() {
            if (x.Promise && x.Promise.resolve) {
                var a = x.Promise.resolve(void 0);
                sf = function() {
                    a.then(xf)
                }
            } else sf = function() {
                var b = xf;
                "function" !== typeof x.setImmediate || x.Window && x.Window.prototype && !B("Edge") && x.Window.prototype.setImmediate == x.setImmediate ? (mf || (mf = nf()), mf(b)) : x.setImmediate(b)
            }
        },
        uf = !1,
        vf = new pf,
        xf = function() {
            for (var a; a = vf.remove();) {
                try {
                    a.hj.call(a.scope)
                } catch (b) { of (b)
                }
                vf.Ly(a)
            }
            uf = !1
        };
    var yf = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var zf = function(a, b) {
            this.wb = 0;
            this.fc = void 0;
            this.Bd = this.oc = this.Ra = null;
            this.Jg = this.aj = !1;
            if (a != Va) try {
                var c = this;
                a.call(b, function(d) {
                    c.me(2, d)
                }, function(d) {
                    c.me(3, d)
                })
            } catch (d) {
                this.me(3, d)
            }
        },
        Af = function() {
            this.next = this.context = this.ge = this.mf = this.Qc = null;
            this.Sf = !1
        };
    Af.prototype.reset = function() {
        this.context = this.ge = this.mf = this.Qc = null;
        this.Sf = !1
    };
    var Bf = new lf(function() {
            return new Af
        }, function(a) {
            a.reset()
        }, 100),
        Cf = function(a, b, c) {
            var d = Bf.get();
            d.mf = a;
            d.ge = b;
            d.context = c;
            return d
        };
    zf.prototype.then = function(a, b, c) {
        return this.Nl("function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    zf.prototype.$goog_Thenable = !0;
    g = zf.prototype;
    g.AA = function(a, b, c) {
        this.Ml(Cf(a || Va, b || null, c))
    };
    g.zA = function(a, b) {
        return this.Nl(null, a, b)
    };
    g.catch = zf.prototype.zA;
    g.cancel = function(a) {
        if (0 == this.wb) {
            var b = new Df(a);
            wf(function() {
                this.am(b)
            }, this)
        }
    };
    g.am = function(a) {
        0 == this.wb && (this.Ra ? (this.Ra.Ls(this, a), this.Ra = null) : this.me(3, a))
    };
    g.Ls = function(a, b) {
        if (this.oc) {
            for (var c = 0, d = null, e = null, f = this.oc; f && (f.Sf || (c++, f.Qc == a && (d = f), !(d && 1 < c))); f = f.next) d || (e = f);
            d && (0 == this.wb && 1 == c ? this.am(b) : (e ? this.sy(e) : this.Hp(), this.bn(d, 3, b)))
        }
    };
    g.Ml = function(a) {
        this.aw() || 2 != this.wb && 3 != this.wb || this.nq();
        this.hy(a)
    };
    g.Nl = function(a, b, c) {
        var d = Cf(null, null, null);
        d.Qc = new zf(function(e, f) {
            d.mf = a ? function(h) {
                try {
                    var k = a.call(c, h);
                    e(k)
                } catch (l) {
                    f(l)
                }
            } : e;
            d.ge = b ? function(h) {
                try {
                    var k = b.call(c, h);
                    void 0 === k && h instanceof Df ? f(h) : e(k)
                } catch (l) {
                    f(l)
                }
            } : f
        });
        d.Qc.Ra = this;
        this.Ml(d);
        return d.Qc
    };
    g.IA = function(a) {
        this.wb = 0;
        this.me(2, a)
    };
    g.JA = function(a) {
        this.wb = 0;
        this.me(3, a)
    };
    g.me = function(a, b) {
        if (0 == this.wb) {
            this === b && (a = 3, b = new TypeError("Promise cannot resolve to itself"));
            this.wb = 1;
            a: {
                var c = b,
                    d = this.IA,
                    e = this.JA;
                if (c instanceof zf) {
                    c.AA(d, e, this);
                    var f = !0
                } else if (yf(c)) c.then(d, e, this),
                f = !0;
                else {
                    if (Xa(c)) try {
                        var h = c.then;
                        if ("function" === typeof h) {
                            Ef(c, h, d, e, this);
                            f = !0;
                            break a
                        }
                    } catch (k) {
                        e.call(this, k);
                        f = !0;
                        break a
                    }
                    f = !1
                }
            }
            f || (this.fc = b, this.wb = a, this.Ra = null, this.nq(), 3 != a || b instanceof Df || Ff(this, b))
        }
    };
    var Ef = function(a, b, c, d, e) {
        var f = !1,
            h = function(l) {
                f || (f = !0, c.call(e, l))
            },
            k = function(l) {
                f || (f = !0, d.call(e, l))
            };
        try {
            b.call(a, h, k)
        } catch (l) {
            k(l)
        }
    };
    g = zf.prototype;
    g.nq = function() {
        this.aj || (this.aj = !0, wf(this.cu, this))
    };
    g.aw = function() {
        return !!this.oc
    };
    g.hy = function(a) {
        this.Bd ? this.Bd.next = a : this.oc = a;
        this.Bd = a
    };
    g.Hp = function() {
        var a = null;
        this.oc && (a = this.oc, this.oc = a.next, a.next = null);
        this.oc || (this.Bd = null);
        return a
    };
    g.sy = function(a) {
        a.next == this.Bd && (this.Bd = a);
        a.next = a.next.next
    };
    g.cu = function() {
        for (var a; a = this.Hp();) this.bn(a, this.wb, this.fc);
        this.aj = !1
    };
    g.bn = function(a, b, c) {
        3 == b && a.ge && !a.Sf && this.uy();
        if (a.Qc) a.Qc.Ra = null, Gf(a, b, c);
        else try {
            a.Sf ? a.mf.call(a.context) : Gf(a, b, c)
        } catch (d) {
            Hf.call(null, d)
        }
        Bf.put(a)
    };
    var Gf = function(a, b, c) {
        2 == b ? a.mf.call(a.context, c) : a.ge && a.ge.call(a.context, c)
    };
    zf.prototype.uy = function() {
        var a;
        for (a = this; a && a.Jg; a = a.Ra) a.Jg = !1
    };
    var Ff = function(a, b) {
            a.Jg = !0;
            wf(function() {
                a.Jg && Hf.call(null, b)
            })
        },
        Hf = of ,
        Df = function(a) {
            jb.call(this, a)
        };
    hb(Df, jb);
    Df.prototype.name = "cancel";
    var If = function(a, b) {
        ff.call(this);
        this.Ug = a || 1;
        this.If = b || x;
        this.Wl = bb(this.CA, this);
        this.bp = Date.now()
    };
    hb(If, ff);
    g = If.prototype;
    g.enabled = !1;
    g.za = null;
    g.setInterval = function(a) {
        this.Ug = a;
        this.za && this.enabled ? (this.stop(), this.start()) : this.za && this.stop()
    };
    g.CA = function() {
        if (this.enabled) {
            var a = Date.now() - this.bp;
            0 < a && a < .8 * this.Ug ? this.za = this.If.setTimeout(this.Wl, this.Ug - a) : (this.za && (this.If.clearTimeout(this.za), this.za = null), this.Ft(), this.enabled && (this.stop(), this.start()))
        }
    };
    g.Ft = function() {
        this.dispatchEvent("tick")
    };
    g.start = function() {
        this.enabled = !0;
        this.za || (this.za = this.If.setTimeout(this.Wl, this.Ug), this.bp = Date.now())
    };
    g.stop = function() {
        this.enabled = !1;
        this.za && (this.If.clearTimeout(this.za), this.za = null)
    };
    g.Tb = function() {
        If.qd.Tb.call(this);
        this.stop();
        delete this.If
    };
    var Jf = function(a, b, c) {
        if ("function" === typeof a) c && (a = bb(a, c));
        else if (a && "function" == typeof a.handleEvent) a = bb(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0)
    };
    var Kf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Lf = function(a, b) {
            if (!b) return a;
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0, d), e, a.substr(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        },
        Mf = function(a, b, c) {
            if (Array.isArray(b))
                for (var d = 0; d < b.length; d++) Mf(a, String(b[d]), c);
            else null != b && c.push(a + ("" ===
                b ? "" : "=" + encodeURIComponent(String(b))))
        },
        Nf = function(a, b) {
            var c = [];
            for (b = b || 0; b < a.length; b += 2) Mf(a[b], a[b + 1], c);
            return c.join("&")
        },
        Of = function(a, b) {
            var c = 2 == arguments.length ? Nf(arguments[1], 0) : Nf(arguments, 1);
            return Lf(a, c)
        },
        Pf = function(a, b, c) {
            c = null != c ? "=" + encodeURIComponent(String(c)) : "";
            return Lf(a, b + c)
        },
        Qf = function(a, b, c, d) {
            for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
                var f = a.charCodeAt(b - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
                b += e + 1
            }
            return -1
        },
        Rf = /#|$/,
        Sf = /[?&]($|#)/;
    var Tf = function(a) {
        ff.call(this);
        this.headers = new Map;
        this.Lh = a || null;
        this.jc = !1;
        this.Kh = this.D = null;
        this.$j = "";
        this.$c = this.Mj = this.Qg = this.Wi = !1;
        this.ic = 0;
        this.Ch = null;
        this.Ik = "";
        this.Cl = this.ey = this.Dl = !1;
        this.tl = null
    };
    hb(Tf, ff);
    var Uf = /^https?$/i,
        Vf = ["POST", "PUT"],
        Wf = [],
        Xf = function(a, b, c, d, e, f, h) {
            var k = new Tf;
            Wf.push(k);
            b && k.cc("complete", b);
            k.ep("ready", k.Os);
            f && k.Zk(f);
            h && k.gA(h);
            k.send(a, c, d, e);
            return k
        };
    g = Tf.prototype;
    g.Os = function() {
        this.zi();
        Sb(Wf, this)
    };
    g.Zk = function(a) {
        this.ic = Math.max(0, a)
    };
    g.gA = function(a) {
        this.Dl = a
    };
    g.setTrustToken = function(a) {
        this.tl = a
    };
    g.send = function(a, b, c, d) {
        if (this.D) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$j + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.$j = a;
        this.Wi = !1;
        this.jc = !0;
        this.D = this.st();
        this.Kh = this.Lh ? this.Lh.Wn() : jf.Wn();
        this.D.onreadystatechange = bb(this.vp, this);
        this.ey && "onprogress" in this.D && (this.D.onprogress = bb(function(h) {
            this.tp(h, !0)
        }, this), this.D.upload && (this.D.upload.onprogress = bb(this.tp, this)));
        try {
            this.Mj = !0, this.D.open(b, String(a), !0), this.Mj = !1
        } catch (h) {
            this.rg(5,
                h);
            return
        }
        a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d) c.set(e, d[e]);
            else if ("function" === typeof d.keys && "function" === typeof d.get) {
            e = r(d.keys());
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, c.set(f, d.get(f))
        } else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(function(h) {
            return "content-type" == h.toLowerCase()
        });
        e = x.FormData && a instanceof x.FormData;
        !(0 <= Ob(Vf, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = r(c);
        for (d = b.next(); !d.done; d = b.next()) c = r(d.value), d = c.next().value, c = c.next().value, this.D.setRequestHeader(d, c);
        this.Ik && (this.D.responseType = this.Ik);
        "withCredentials" in this.D && this.D.withCredentials !== this.Dl && (this.D.withCredentials = this.Dl);
        if ("setTrustToken" in this.D && this.tl) try {
            this.D.setTrustToken(this.tl)
        } catch (h) {}
        try {
            this.em(), 0 < this.ic && ((this.Cl = Yf(this.D)) ? (this.D.timeout = this.ic, this.D.ontimeout = bb(this.Hf, this)) : this.Ch = Jf(this.Hf, this.ic, this)), this.Qg = !0, this.D.send(a), this.Qg = !1
        } catch (h) {
            this.rg(5, h)
        }
    };
    var Yf = function(a) {
        return ac && lc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    };
    g = Tf.prototype;
    g.st = function() {
        return this.Lh ? this.Lh.Bm() : jf.Bm()
    };
    g.Hf = function() {
        "undefined" != typeof Ta && this.D && (this.dispatchEvent("timeout"), this.abort(8))
    };
    g.rg = function() {
        this.jc = !1;
        this.D && (this.$c = !0, this.D.abort(), this.$c = !1);
        this.Pm();
        this.bg()
    };
    g.Pm = function() {
        this.Wi || (this.Wi = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"))
    };
    g.abort = function() {
        this.D && this.jc && (this.jc = !1, this.$c = !0, this.D.abort(), this.$c = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.bg())
    };
    g.Tb = function() {
        this.D && (this.jc && (this.jc = !1, this.$c = !0, this.D.abort(), this.$c = !1), this.bg(!0));
        Tf.qd.Tb.call(this)
    };
    g.vp = function() {
        this.Hd || (this.Mj || this.Qg || this.$c ? this.up() : this.Ex())
    };
    g.Ex = function() {
        this.up()
    };
    g.up = function() {
        if (this.jc && "undefined" != typeof Ta && (!this.Kh[1] || 4 != this.Dg() || 2 != this.yj()))
            if (this.Qg && 4 == this.Dg()) Jf(this.vp, 0, this);
            else if (this.dispatchEvent("readystatechange"), this.Vj()) {
            this.jc = !1;
            try {
                this.Wo() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : this.Pm()
            } finally {
                this.bg()
            }
        }
    };
    g.tp = function(a, b) {
        this.dispatchEvent(Zf(a, "progress"));
        this.dispatchEvent(Zf(a, b ? "downloadprogress" : "uploadprogress"))
    };
    var Zf = function(a, b) {
        return {
            type: b,
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        }
    };
    g = Tf.prototype;
    g.bg = function(a) {
        if (this.D) {
            this.em();
            var b = this.D,
                c = this.Kh[0] ? Va : null;
            this.Kh = this.D = null;
            a || this.dispatchEvent("ready");
            try {
                b.onreadystatechange = c
            } catch (d) {}
        }
    };
    g.em = function() {
        this.D && this.Cl && (this.D.ontimeout = null);
        this.Ch && (x.clearTimeout(this.Ch), this.Ch = null)
    };
    g.Uj = function() {
        return !!this.D
    };
    g.Vj = function() {
        return 4 == this.Dg()
    };
    g.Wo = function() {
        var a = this.yj();
        a: switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var b = !0;
                break a;
            default:
                b = !1
        }
        return b || 0 === a && !this.Yw()
    };
    g.Yw = function() {
        var a = String(this.$j).match(Kf)[1] || null;
        !a && x.self && x.self.location && (a = x.self.location.protocol, a = a.substr(0, a.length - 1));
        return Uf.test(a ? a.toLowerCase() : "")
    };
    g.Dg = function() {
        return this.D ? this.D.readyState : 0
    };
    g.yj = function() {
        try {
            return 2 < this.Dg() ? this.D.status : -1
        } catch (a) {
            return -1
        }
    };
    g.lv = function() {
        try {
            return this.D ? this.D.responseText : ""
        } catch (a) {
            return ""
        }
    };
    g.getResponse = function() {
        try {
            if (!this.D) return null;
            if ("response" in this.D) return this.D.response;
            switch (this.Ik) {
                case "":
                case "text":
                    return this.D.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in this.D) return this.D.mozResponseArrayBuffer
            }
            return null
        } catch (a) {
            return null
        }
    };
    g.getResponseHeader = function(a) {
        if (this.D && this.Vj()) return a = this.D.getResponseHeader(a), null === a ? void 0 : a
    };
    g.getAllResponseHeaders = function() {
        return this.D && this.Vj() ? this.D.getAllResponseHeaders() || "" : ""
    };
    var $f = function(a) {
        Gc.call(this, a)
    };
    Ea($f, Gc);
    $f.prototype.Lz = function(a) {
        return this.X(5, a)
    };
    $f.prototype.oh = function(a) {
        return this.X(7, a)
    };
    var ag = function(a) {
        Gc.call(this, a)
    };
    Ea(ag, Gc);
    ag.prototype.Bu = function() {
        return this.Ac(1)
    };
    ag.prototype.yq = function(a) {
        return this.X(1, a)
    };
    ag.prototype.Uu = function() {
        return this.Tg($f, 11)
    };
    ag.prototype.Kq = function(a) {
        return this.$d(11, a)
    };
    var cg = function(a) {
        Gc.call(this, a, 31, bg)
    };
    Ea(cg, Gc);
    g = cg.prototype;
    g.Mu = function() {
        return this.Ac(1)
    };
    g.vz = function(a) {
        return this.X(1, a)
    };
    g.Vz = function(a) {
        return this.X(21, a)
    };
    g.qh = function(a) {
        return this.X(26, a)
    };
    g.Wz = function(a) {
        return this.X(8, a)
    };
    g.Yz = function(a) {
        return this.X(15, a)
    };
    g.jw = function() {
        return this.Iw(15)
    };
    g.wz = function(a) {
        return this.$d(16, a)
    };
    var bg = [3, 20, 27];
    var eg = function(a) {
        Gc.call(this, a, 17, dg)
    };
    Ea(eg, Gc);
    g = eg.prototype;
    g.Qq = function(a) {
        return this.X(4, a)
    };
    g.Au = function() {
        return this.Tg(ag, 1)
    };
    g.xq = function(a) {
        return this.$d(1, a)
    };
    g.Mz = function(a) {
        return this.X(2, a)
    };
    g.Yu = function() {
        return this.Sj(cg, 3)
    };
    g.Mq = function(a) {
        return this.Ko(3, a)
    };
    g.Lq = function(a) {
        return this.X(14, a)
    };
    g.zq = function(a) {
        return this.$d(13, a)
    };
    var dg = [3, 5];
    var gg = function(a) {
        Gc.call(this, a, 6, fg)
    };
    Ea(gg, Gc);
    gg.prototype.dv = function() {
        return this.Gw(1, "-1")
    };
    gg.prototype.Ae = function(a) {
        return this.$d(2, a)
    };
    var fg = [5];
    var hg = function(a) {
        Gc.call(this, a)
    };
    Ea(hg, Gc);
    hg.prototype.uv = function() {
        return this.Io(1, -1)
    };
    var ig;
    ig = new function(a, b, c, d, e, f) {
        this.hn = a;
        this.vt = c;
        this.So = e;
        this.Pu = f
    }(175237375, {
        bE: 0
    }, hg, function(a, b) {
        if (null != b) {
            var c = {
                XE: b.Io(1, -1)
            };
            a && (c.ZA = b);
            return c
        }
    }, 0, function(a) {
        var b = this.vt,
            c = this.hn;
        return this.So ? a.Sj(b, c, !0) : a.Tg(b, c, void 0, !0)
    }, function(a, b) {
        var c = this.hn;
        return this.So ? a.Ko(c, b, !0) : a.$d(c, b, !0)
    });
    var jg = function(a, b, c, d, e, f, h, k, l, m, u) {
        ff.call(this);
        var t = this;
        this.Rc = "";
        this.cb = [];
        this.$o = "";
        this.wl = this.Al = this.gi = !1;
        this.rp = this.jl = -1;
        this.lm = !1;
        this.Xc = this.$ = null;
        this.kf = 0;
        this.fz = 1;
        this.ii = null;
        this.nl = 0;
        this.mh = !1;
        ff.call(this);
        this.bk = a;
        this.Dn = b || Va;
        this.Ad = new eg;
        this.jk = d;
        this.bh = u;
        this.bufferSize = 1E3;
        this.KA = cb(ye, 0, 1);
        this.fi = e || null;
        this.ye = c || null;
        this.Om = h || !1;
        this.kk = l || null;
        this.withCredentials = !k;
        this.Vo = f || !1;
        this.Uo = !this.Vo && (65 <= Kb("Chromium") || 45 <= Kb("Firefox") || 12 <=
            Kb("Safari") || (Mb() || B("iPad") || B("iPod")) && 0 <= wb(Nb(), 12)) && !!window && !!window.navigator && !!window.navigator.sendBeacon;
        a = (new ag).yq(1);
        f || (f = (new $f).Lz(document.documentElement.getAttribute("lang")), a.Kq(f));
        this.Ad.xq(a);
        this.Ad.Mz(this.bk);
        this.Tc = new gf(1E4, 3E5, .1);
        this.Xb = new If(this.Tc.Ud());
        this.Vp(this.Xb);
        We(this.Xb, "tick", Tc(this.Kn(m)), !1, this);
        this.Yh = new If(6E5);
        this.Vp(this.Yh);
        We(this.Yh, "tick", Tc(this.Kn(m)), !1, this);
        this.Om || this.Yh.start();
        this.Vo || (We(document, "visibilitychange",
            function() {
                "hidden" === document.visibilityState && t.fj()
            }), We(document, "pagehide", this.fj, !1, this))
    };
    Ea(jg, ff);
    g = jg.prototype;
    g.Kn = function(a) {
        if (a) {
            var b = this;
            return function() {
                a().then(b.flush.bind(b))
            }
        }
        return this.flush
    };
    g.Tb = function() {
        this.fj();
        ff.prototype.Tb.call(this)
    };
    g.Fn = function() {
        this.fi || (this.fi = this.yt());
        return this.fi
    };
    g.Et = function(a) {
        a instanceof cg ? this.log(a) : (a = (new cg).Wz(a.xe()), this.log(a))
    };
    g.Pk = function(a) {
        a.Bu() || a.yq(1);
        this.Ad.xq(a)
    };
    g.qh = function(a) {
        this.Rc = a
    };
    g.Gu = function() {
        return this.Ad.Au()
    };
    g.Oq = function(a) {
        this.$ || (this.$ = new Kc);
        this.$.uz(a)
    };
    g.wq = function(a) {
        a ? (this.$ || (this.$ = new Kc), this.$.lz(a.xe())) : this.$ && this.$.Ps()
    };
    g.mz = function(a) {
        this.gi = a
    };
    g.zq = function(a) {
        this.ii = a
    };
    g.Hq = function(a) {
        this.Xc = a
    };
    g.aA = function(a) {
        this.Al = a && this.Uo
    };
    g.SA = function(a) {
        this.mh = a && this.Uo
    };
    g.oh = function(a) {
        var b = this.Gu(),
            c = b.Uu();
        c || (c = new $f);
        c.oh(a);
        b.Kq(c);
        this.Pk(b)
    };
    g.$z = function(a) {
        this.wl = a
    };
    g.Gq = function(a) {
        this.lm = !0;
        this.Sm(a)
    };
    g.zz = function(a) {
        this.lm || this.Sm(a)
    };
    g.Sm = function(a) {
        this.Tc = new gf(1 > a ? 1 : a, 3E5, .1);
        this.Xb.setInterval(this.Tc.Ud())
    };
    g.Bs = function() {
        this.Tc.zs();
        this.Xb.setInterval(this.Tc.Ud())
    };
    g.Ey = function() {
        this.Tc.reset();
        this.Xb.setInterval(this.Tc.Ud())
    };
    g.log = function(a) {
        a = a.clone();
        a.Vz(this.fz++);
        this.Rc && a.qh(this.Rc);
        a.Mu() || a.vz(Date.now().toString());
        a.jw() || a.Yz(60 * (new Date).getTimezoneOffset());
        this.$ && a.wz(this.$.clone());
        this.$r(a)
    };
    g.$r = function(a) {
        for (; this.cb.length >= this.bufferSize;) this.cb.shift(), ++this.kf;
        this.cb.push(a);
        this.dispatchEvent(new kg(a));
        this.op()
    };
    g.op = function() {
        this.Om || this.Xb.enabled || this.Xb.start()
    };
    g.hm = function() {
        this.Xb.enabled && this.Xb.stop()
    };
    g.flush = function(a, b) {
        var c = this;
        if (0 === this.cb.length) a && a();
        else if (this.mh) this.sn();
        else {
            var d = Date.now();
            if (this.rp > d && this.jl < d) b && b("throttled");
            else {
                var e = this.Ad.clone().Qq(Date.now().toString()).Mq(this.cb).Lq(this.kf);
                this.ii && e.zq(this.ii);
                d = {};
                var f = this.Dn();
                f && (d.Authorization = f);
                var h = this.Fn();
                this.ye && (d["X-Goog-AuthUser"] = this.ye, h = Pf(h, "authuser", this.ye));
                this.kk && (d["X-Goog-PageId"] = this.kk, h = Pf(h, "pageId", this.kk));
                if (f && this.$o === f) b && b("stale-auth-token");
                else if (this.Ts(),
                    this.gi) e.xe(), d && JSON.stringify(d), a && a();
                else {
                    var k = e.xe(),
                        l;
                    this.Xc && this.Xc.YD(k.length) && (l = this.Xc.$C(k));
                    var m = {
                            url: h,
                            body: k,
                            Es: 1,
                            Fk: d,
                            Dy: "POST",
                            withCredentials: this.withCredentials,
                            nl: this.nl
                        },
                        u = function(v) {
                            c.Rv(v);
                            a && a()
                        },
                        t = function(v) {
                            c.Kv(e.Yu(), v, f);
                            b && b("net-send-failed", v)
                        },
                        z = function() {
                            c.bh ? c.bh.send(m, u, t) : c.jk(m, u, t)
                        };
                    l ? l.then(function(v) {
                        m.Fk["Content-Encoding"] = "gzip";
                        m.Fk["Content-Type"] = "application/binary";
                        m.body = v;
                        m.Es = 2;
                        z()
                    }, function() {
                        z()
                    }) : z()
                }
            }
        }
    };
    g.Ts = function() {
        this.cb = [];
        this.hm();
        this.kf = 0
    };
    g.fj = function() {
        this.gi || (this.Al && this.sn(), this.wl && this.hu(), this.flush())
    };
    g.sn = function() {
        var a = this;
        this.sq(32, 10, function(b, c) {
            b = Pf(b, "format", "json");
            b = window.navigator.sendBeacon(b, c.xe());
            a.mh && !b && (a.mh = !1);
            return b
        })
    };
    g.dz = function(a) {
        pe(new Image, a)
    };
    g.hu = function() {
        var a = this;
        this.sq(6, 5, function(b, c) {
            c = c.xe();
            for (var d = [], e = 0, f = 0; f < c.length; f++) {
                var h = c.charCodeAt(f);
                255 < h && (d[e++] = h & 255, h >>= 8);
                d[e++] = h
            }
            c = sc(d, 3);
            b = Of(b, "format", "base64json", "p", c);
            if (15360 < b.length) return !1;
            a.dz(b);
            return !0
        })
    };
    g.sq = function(a, b, c) {
        if (0 !== this.cb.length) {
            var d = this.Fn();
            for (var e = d.search(Rf), f = 0, h, k = []; 0 <= (h = Qf(d, f, "format", e));) k.push(d.substring(f, h)), f = Math.min(d.indexOf("&", h) + 1 || e, e);
            k.push(d.substr(f));
            d = k.join("").replace(Sf, "$1");
            d = Of(d, "auth", this.Dn(), "authuser", this.ye || "0");
            for (e = 0; e < b && this.cb.length; ++e) {
                f = this.cb.slice(0, a);
                h = this.Ad.clone().Qq(Date.now().toString()).Mq(f);
                0 === e && h.Lq(this.kf);
                if (!c(d, h)) break;
                this.cb = this.cb.slice(f.length)
            }
            this.hm();
            this.kf = 0
        }
    };
    g.$w = function(a) {
        return 500 <= a && 600 > a || 401 === a || 0 === a
    };
    g.Rx = function(a) {
        this.cb = a.concat(this.cb);
        this.op()
    };
    g.Kv = function(a, b, c) {
        this.Bs();
        401 === b && c && (this.$o = c);
        this.$w(b) && this.Rx(a)
    };
    g.Rv = function(a) {
        this.Ey();
        if (a) {
            var b = null;
            try {
                var c = JSON.parse(a.replace(")]}'\n", ""));
                b = new gg(c)
            } catch (d) {}
            b && (a = Number(b.dv()), 0 < a && (this.jl = Date.now(), this.rp = this.jl + a), b = b.getExtension(ig)) && (b = b.uv(), -1 != b && this.zz(b))
        }
    };
    g.yt = function() {
        return .01 > this.KA() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true"
    };
    var kg = function() {
        Je.call(this, "event-logged", void 0)
    };
    Ea(kg, Je);

    function lg(a, b, c) {
        Xf(a.url, function(d) {
            d = d.target;
            d.Wo() ? b(d.lv()) : c(d.yj())
        }, a.Dy, a.body, a.Fk, a.nl, a.withCredentials)
    };

    function mg(a, b) {
        this.bk = a;
        this.ye = b;
        this.zt = "https://play.google.com/log?format=json&hasfast=true";
        this.Dt = !1;
        this.jx = !0;
        this.$t = !1;
        this.jk = lg;
        this.Rc = "";
        this.Zt = this.xl = this.Bl = !1
    }
    g = mg.prototype;
    g.oh = function(a) {
        this.Xl = a;
        return this
    };
    g.Hq = function(a) {
        this.Xc = a;
        return this
    };
    g.qh = function(a) {
        this.Rc = a;
        return this
    };
    g.wq = function(a) {
        this.gm = a;
        return this
    };
    g.Oq = function(a) {
        this.yp = a;
        return this
    };
    g.Pk = function(a) {
        this.km = a;
        return this
    };
    g.Al = function() {
        this.Bl = !0;
        return this
    };
    g.wl = function() {
        this.xl = !0;
        return this
    };
    g.Gq = function(a) {
        this.qn = Math.max(a, 5E3);
        return this
    };
    g.Zf = function() {
        var a = new jg(this.bk, this.vu ? this.vu : xe, this.ye, this.jk, this.zt, this.$t, this.Dt, void 0, void 0, void 0, this.bh ? this.bh : void 0);
        this.jx || a.mz(!0);
        this.km && a.Pk(this.km);
        this.Xl && a.oh(this.Xl);
        this.Xc && a.Hq(this.Xc);
        this.Rc && a.qh(this.Rc);
        this.gm && a.wq(this.gm);
        this.yp && a.Oq(this.yp);
        this.Bl && a.aA(this.Bl);
        this.xl && a.$z(this.xl);
        this.qn && a.Gq(this.qn);
        this.Zt && a.SA(!0);
        return a
    };
    var ng = function(a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        },
        og = function(a, b) {
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        },
        pg = function(a, b) {
            a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : ng(a).match(/\S+/g) || [], b = 0 <= Ob(a, b));
            return b
        },
        D = function(a, b) {
            if (a.classList) a.classList.add(b);
            else if (!pg(a, b)) {
                var c = ng(a);
                og(a, c + (0 < c.length ? " " + b : b))
            }
        },
        qg = function(a, b) {
            a.classList ? a.classList.remove(b) :
                pg(a, b) && og(a, Array.prototype.filter.call(a.classList ? a.classList : ng(a).match(/\S+/g) || [], function(c) {
                    return c != b
                }).join(" "))
        };
    var rg = {};

    function sg(a) {
        if (ac && !lc(9)) return [0, 0, 0, 0];
        var b = rg.hasOwnProperty(a) ? rg[a] : null;
        if (b) return b;
        65536 < Object.keys(rg).length && (rg = {});
        var c = [0, 0, 0, 0],
            d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
        b = tg(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
        b = tg(b, d);
        b = tg(b, /\\./g);
        b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
        b = b.replace(RegExp("{[^]*", "gm"), "");
        b = ug(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
        b = ug(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
        b = ug(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"), 2);
        b = ug(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
        b = ug(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
        b = ug(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        ug(b, c, /([^\s\+>~\.\[:]+)/g, 3);
        b = c;
        return rg[a] = b
    }

    function ug(a, b, c, d) {
        return a.replace(c, function(e) {
            b[d] += 1;
            return Array(e.length + 1).join(" ")
        })
    }

    function tg(a, b) {
        return a.replace(b, function(c) {
            return Array(c.length + 1).join("A")
        })
    };
    var vg = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        wg = /[\n\f\r"'()*<>]/g,
        xg = {
            "\n": "%0a",
            "\f": "%0c",
            "\r": "%0d",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "*": "%2a",
            "<": "%3c",
            ">": "%3e"
        };

    function yg(a) {
        return xg[a]
    }
    var zg = function(a, b, c) {
        b = lb(b);
        if ("" == b) return null;
        var d = String(b.substr(0, 4)).toLowerCase();
        if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
            if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
            else {
                a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
                a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != zd(a) ? 'url("' + zd(a).replace(wg, yg) + '")' : null : null
            }
            return a
        }
        if (0 < b.indexOf("(")) {
            if (/"|'/.test(b)) return null;
            for (a = /([\-\w]+)\(/g; c = a.exec(b);)
                if (!(c[1].toLowerCase() in vg)) return null
        }
        return b
    };

    function Ag(a, b) {
        a = x[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function Bg(a, b) {
        return (a = x[a]) && a.prototype && a.prototype[b] || null
    }
    var Cg = Ag("Element", "attributes") || Ag("Node", "attributes"),
        Dg = Bg("Element", "hasAttribute"),
        Eg = Bg("Element", "getAttribute"),
        Fg = Bg("Element", "setAttribute"),
        Gg = Bg("Element", "removeAttribute");
    Ag("Element", "innerHTML") || Ag("HTMLElement", "innerHTML");
    var Hg = Bg("Element", "getElementsByTagName"),
        Ig = Bg("Element", "matches") || Bg("Element", "msMatchesSelector"),
        Jg = Ag("Node", "nodeName"),
        Kg = Ag("Node", "nodeType"),
        Lg = Ag("Node", "parentNode");
    Ag("Node", "childNodes");
    var Mg = Ag("HTMLElement", "style") || Ag("Element", "style"),
        Og = Ag("HTMLStyleElement", "sheet"),
        Pg = Bg("CSSStyleDeclaration", "getPropertyValue"),
        Qg = Bg("CSSStyleDeclaration", "setProperty"),
        Rg = Ag("Element", "namespaceURI") || Ag("Node", "namespaceURI");

    function Sg(a, b, c, d) {
        if (a) return a.apply(b);
        a = b[c];
        if (!d(a)) throw Error("Clobbering detected");
        return a
    }

    function Tg(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (ac && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }

    function Ug(a) {
        return Sg(Cg, a, "attributes", function(b) {
            return b instanceof NamedNodeMap
        })
    }

    function Vg(a, b, c) {
        try {
            Tg(Fg, a, "setAttribute", [b, c])
        } catch (d) {
            if (-1 == d.message.indexOf("A security problem occurred")) throw d;
        }
    }

    function Wg(a) {
        return Sg(Mg, a, "style", function(b) {
            return b instanceof CSSStyleDeclaration
        })
    }

    function Xg(a) {
        return Sg(Og, a, "sheet", function(b) {
            return b instanceof CSSStyleSheet
        })
    }

    function Yg(a) {
        return Sg(Jg, a, "nodeName", function(b) {
            return "string" == typeof b
        })
    }

    function Zg(a) {
        return Sg(Kg, a, "nodeType", function(b) {
            return "number" == typeof b
        })
    }

    function $g(a) {
        return Sg(Lg, a, "parentNode", function(b) {
            return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
        })
    }

    function ah(a, b) {
        return Tg(Pg, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
    }

    function bh(a, b, c) {
        Tg(Qg, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
    }

    function ch(a) {
        return Sg(Rg, a, "namespaceURI", function(b) {
            return "string" == typeof b
        })
    };
    var dh = ac && 10 > document.documentMode ? null : RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g"),
        eh = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        hh = function(a, b, c) {
            var d = [];
            fh(Ub(a.cssRules)).forEach(function(e) {
                if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
                if (!(b && ac && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                    var f = b ? e.selectorText.replace(dh, "#" + b + " $1") : e.selectorText,
                        h = d.push;
                    e = gh(e.style, c);
                    if (-1 != f.indexOf("<")) throw Error("Selector does not allow '<', got: " + f);
                    var k = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
                    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(k)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + f);
                    a: {
                        for (var l = {
                                "(": ")",
                                "[": "]"
                            }, m = [], u = 0; u < k.length; u++) {
                            var t = k[u];
                            if (l[t]) m.push(l[t]);
                            else {
                                b: {
                                    var z = void 0;
                                    for (z in l)
                                        if (l[z] == t) {
                                            z = !0;
                                            break b
                                        }
                                    z = !1
                                }
                                if (z && m.pop() != t) {
                                    k = !1;
                                    break a
                                }
                            }
                        }
                        k = 0 == m.length
                    }
                    if (!k) throw Error("() and [] in selector must be balanced, got: " +
                        f);
                    e instanceof Kd || (e = Od(e));
                    f = f + "{" + Ld(e).replace(/</g, "\\3C ") + "}";
                    h.call(d, new Wd(f, Vd))
                }
            });
            return Yd(d)
        },
        fh = function(a) {
            return a.filter(function(b) {
                return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
            })
        },
        jh = function(a, b, c) {
            a = ih("<style>" + a + "</style>");
            return null == a || null == a.sheet ? Zd : hh(a.sheet, void 0 != b ? b : null, c)
        },
        ih = function(a) {
            if (ac && !lc(10) || "function" != typeof x.DOMParser) return null;
            a = ce("<html><head></head><body>" + a + "</body></html>", null);
            return (new DOMParser).parseFromString(be(a),
                "text/html").body.children[0]
        },
        gh = function(a, b) {
            if (!a) return Nd;
            var c = document.createElement("div").style;
            kh(a).forEach(function(d) {
                var e = dc && d in eh ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != e.lastIndexOf("--", 0) && 0 != e.lastIndexOf("var", 0) && (d = ah(a, d), d = zg(e, d, b), null != d && bh(c, e, d))
            });
            return new Kd(c.cssText || "", Jd)
        },
        mh = function(a) {
            var b = Array.from(Tg(Hg, a, "getElementsByTagName", ["STYLE"])),
                c = Vb(b, function(h) {
                    return Ub(Xg(h).cssRules)
                });
            c = fh(c);
            for (var d = [], e = 0; e < c.length; e++) d[e] = {
                index: e,
                Nk: c[e]
            };
            d.sort(function(h, k) {
                var l = sg(h.Nk.selectorText);
                a: {
                    var m = sg(k.Nk.selectorText);
                    for (var u = Math.min(l.length, m.length), t = 0; t < u; t++) {
                        var z = l[t],
                            v = m[t];
                        z = z > v ? 1 : z < v ? -1 : 0;
                        if (0 != z) {
                            m = z;
                            break a
                        }
                    }
                    l = l.length;m = m.length;m = l > m ? 1 : l < m ? -1 : 0
                }
                return m || h.index - k.index
            });
            for (e = 0; e < d.length; e++) c[e] = d[e].Nk;
            c.reverse();
            a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
            for (var f; f = a.nextNode();) c.forEach(function(h) {
                Tg(Ig, f, f.matches ? "matches" : "msMatchesSelector", [h.selectorText]) && h.style && lh(f, h.style)
            });
            b.forEach(Ee)
        },
        lh = function(a, b) {
            var c = kh(a.style);
            kh(b).forEach(function(d) {
                if (!(0 <= c.indexOf(d))) {
                    var e = ah(b, d);
                    bh(a.style, d, e)
                }
            })
        },
        kh = function(a) {
            Wa(a) ? a = Ub(a) : (a = Wc(a), Sb(a, "cssText"));
            return a
        };
    var nh = {
            "* ARIA-CHECKED": !0,
            "* ARIA-COLCOUNT": !0,
            "* ARIA-COLINDEX": !0,
            "* ARIA-CONTROLS": !0,
            "* ARIA-DESCRIBEDBY": !0,
            "* ARIA-DISABLED": !0,
            "* ARIA-EXPANDED": !0,
            "* ARIA-GOOG-EDITABLE": !0,
            "* ARIA-HASPOPUP": !0,
            "* ARIA-HIDDEN": !0,
            "* ARIA-LABEL": !0,
            "* ARIA-LABELLEDBY": !0,
            "* ARIA-MULTILINE": !0,
            "* ARIA-MULTISELECTABLE": !0,
            "* ARIA-ORIENTATION": !0,
            "* ARIA-PLACEHOLDER": !0,
            "* ARIA-READONLY": !0,
            "* ARIA-REQUIRED": !0,
            "* ARIA-ROLEDESCRIPTION": !0,
            "* ARIA-ROWCOUNT": !0,
            "* ARIA-ROWINDEX": !0,
            "* ARIA-SELECTED": !0,
            "* ABBR": !0,
            "* ACCEPT": !0,
            "* ACCESSKEY": !0,
            "* ALIGN": !0,
            "* ALT": !0,
            "* AUTOCOMPLETE": !0,
            "* AXIS": !0,
            "* BGCOLOR": !0,
            "* BORDER": !0,
            "* CELLPADDING": !0,
            "* CELLSPACING": !0,
            "* CHAROFF": !0,
            "* CHAR": !0,
            "* CHECKED": !0,
            "* CLEAR": !0,
            "* COLOR": !0,
            "* COLSPAN": !0,
            "* COLS": !0,
            "* COMPACT": !0,
            "* COORDS": !0,
            "* DATETIME": !0,
            "* DIR": !0,
            "* DISABLED": !0,
            "* ENCTYPE": !0,
            "* FACE": !0,
            "* FRAME": !0,
            "* HEIGHT": !0,
            "* HREFLANG": !0,
            "* HSPACE": !0,
            "* ISMAP": !0,
            "* LABEL": !0,
            "* LANG": !0,
            "* MAX": !0,
            "* MAXLENGTH": !0,
            "* METHOD": !0,
            "* MULTIPLE": !0,
            "* NOHREF": !0,
            "* NOSHADE": !0,
            "* NOWRAP": !0,
            "* OPEN": !0,
            "* READONLY": !0,
            "* REQUIRED": !0,
            "* REL": !0,
            "* REV": !0,
            "* ROLE": !0,
            "* ROWSPAN": !0,
            "* ROWS": !0,
            "* RULES": !0,
            "* SCOPE": !0,
            "* SELECTED": !0,
            "* SHAPE": !0,
            "* SIZE": !0,
            "* SPAN": !0,
            "* START": !0,
            "* SUMMARY": !0,
            "* TABINDEX": !0,
            "* TITLE": !0,
            "* TYPE": !0,
            "* VALIGN": !0,
            "* VALUE": !0,
            "* VSPACE": !0,
            "* WIDTH": !0
        },
        oh = {
            "* USEMAP": !0,
            "* ACTION": !0,
            "* CITE": !0,
            "* HREF": !0,
            "* LONGDESC": !0,
            "* SRC": !0,
            "LINK HREF": !0,
            "* FOR": !0,
            "* HEADERS": !0,
            "* NAME": !0,
            "A TARGET": !0,
            "* CLASS": !0,
            "* ID": !0,
            "* STYLE": !0
        };
    var ph = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
        qh = 0,
        rh = function() {
            this.Yj = [];
            this.Ih = [];
            this.Ed = "data-elementweakmap-index-" + qh++
        };
    rh.prototype.set = function(a, b) {
        if (Tg(Dg, a, "hasAttribute", [this.Ed])) {
            var c = parseInt(Tg(Eg, a, "getAttribute", [this.Ed]) || null, 10);
            this.Ih[c] = b
        } else c = this.Ih.push(b) - 1, Vg(a, this.Ed, c.toString()), this.Yj.push(a);
        return this
    };
    rh.prototype.get = function(a) {
        if (Tg(Dg, a, "hasAttribute", [this.Ed])) return a = parseInt(Tg(Eg, a, "getAttribute", [this.Ed]) || null, 10), this.Ih[a]
    };
    rh.prototype.clear = function() {
        this.Yj.forEach(function(a) {
            Tg(Gg, a, "removeAttribute", [this.Ed])
        }, this);
        this.Yj = [];
        this.Ih = []
    };
    var sh = !ac || 10 <= Number(oc),
        th = !ac || null == document.documentMode,
        uh = function() {};
    g = uh.prototype;
    g.ay = function(a) {
        if (!sh) return "";
        a = this.by(a);
        if (0 < Ug(a).length) {
            var b = Ce(document, "SPAN");
            b.appendChild(a);
            a = b
        }
        a = (new XMLSerializer).serializeToString(a);
        return a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"))
    };
    g.by = function(a) {
        if (!sh) return Ce(document, "SPAN");
        var b = Ce(document, "SPAN");
        this.Zx(b);
        a = this.Qx(a);
        a = ce(a, null);
        var c = document.createElement("template");
        if (th && "content" in c) me(c, a), c = c.content;
        else {
            var d = document.implementation.createHTMLDocument("x");
            c = d.body;
            me(d.body, a)
        }
        a = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
        c = ph ? new WeakMap : new rh;
        for (var e; e = a.nextNode();)
            if (d = this.nt(e)) {
                1 == Zg(d) && c.set(e, d);
                e = $g(e);
                var f = !1;
                if (e) {
                    var h = Zg(e),
                        k = Yg(e).toLowerCase(),
                        l = $g(e);
                    11 != h || l ? "body" == k && l && (h = $g(l)) && !$g(h) && (f = !0) : f = !0;
                    h = null;
                    f || !e ? h = b : 1 == Zg(e) && (h = c.get(e));
                    h.content && (h = h.content);
                    h.appendChild(d)
                }
            } else De(e);
        c.clear && c.clear();
        return b
    };
    g.nt = function(a) {
        switch (Zg(a)) {
            case 3:
                return this.createTextNode(a);
            case 1:
                return this.lt(a);
            default:
                return null
        }
    };
    g.lt = function(a) {
        if ("TEMPLATE" == Yg(a).toUpperCase()) return null;
        var b = this.kt(a);
        if (!b) return null;
        this.Ux(a, b);
        return b
    };
    g.Ux = function(a, b) {
        var c = Ug(a);
        if (null != c)
            for (var d = 0, e; e = c[d]; d++)
                if (e.specified) {
                    var f = this.Tx(a, e);
                    null !== f && Vg(b, e.name, f)
                }
    };
    var vh = {
        APPLET: !0,
        AUDIO: !0,
        BASE: !0,
        BGSOUND: !0,
        EMBED: !0,
        FORM: !0,
        IFRAME: !0,
        ISINDEX: !0,
        KEYGEN: !0,
        LAYER: !0,
        LINK: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        SVG: !0,
        STYLE: !0,
        TEMPLATE: !0,
        VIDEO: !0
    };
    var wh = {
        A: !0,
        ABBR: !0,
        ACRONYM: !0,
        ADDRESS: !0,
        AREA: !0,
        ARTICLE: !0,
        ASIDE: !0,
        B: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        BLOCKQUOTE: !0,
        BR: !0,
        BUTTON: !0,
        CAPTION: !0,
        CENTER: !0,
        CITE: !0,
        CODE: !0,
        COL: !0,
        COLGROUP: !0,
        DATA: !0,
        DATALIST: !0,
        DD: !0,
        DEL: !0,
        DETAILS: !0,
        DFN: !0,
        DIALOG: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DT: !0,
        EM: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FONT: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        I: !0,
        IMG: !0,
        INPUT: !0,
        INS: !0,
        KBD: !0,
        LABEL: !0,
        LEGEND: !0,
        LI: !0,
        MAIN: !0,
        MAP: !0,
        MARK: !0,
        MENU: !0,
        METER: !0,
        NAV: !0,
        NOSCRIPT: !0,
        OL: !0,
        OPTGROUP: !0,
        OPTION: !0,
        OUTPUT: !0,
        P: !0,
        PRE: !0,
        PROGRESS: !0,
        Q: !0,
        S: !0,
        SAMP: !0,
        SECTION: !0,
        SELECT: !0,
        SMALL: !0,
        SOURCE: !0,
        SPAN: !0,
        STRIKE: !0,
        STRONG: !0,
        STYLE: !0,
        SUB: !0,
        SUMMARY: !0,
        SUP: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TEXTAREA: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TIME: !0,
        TR: !0,
        TT: !0,
        U: !0,
        UL: !0,
        VAR: !0,
        WBR: !0
    };
    var xh = {
            "ANNOTATION-XML": !0,
            "COLOR-PROFILE": !0,
            "FONT-FACE": !0,
            "FONT-FACE-SRC": !0,
            "FONT-FACE-URI": !0,
            "FONT-FACE-FORMAT": !0,
            "FONT-FACE-NAME": !0,
            "MISSING-GLYPH": !0
        },
        Ah = function(a) {
            a = a || new yh;
            a.Aw();
            this.Me = Xc(a.Ab);
            this.Ff = Xc(a.Ff);
            this.De = Xc(a.De);
            this.cl = a.cl;
            a.xt.forEach(function(b) {
                if (0 != b.lastIndexOf("data-", 0)) throw new kb('Only "data-" attributes allowed, got: %s.', [b]);
                if (0 == b.lastIndexOf("data-sanitizer-", 0)) throw new kb('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-",
                    b
                ]);
                this.Me["* " + b.toUpperCase()] = zh
            }, this);
            a.wt.forEach(function(b) {
                b = b.toUpperCase();
                if (-1 == b.indexOf("-") || xh[b]) throw new kb("Only valid custom element tag names allowed, got: %s.", [b]);
                this.De[b] = !0
            }, this);
            this.jf = a.jf;
            this.Cf = a.Cf;
            this.ig = null;
            this.Oj = a.Oj
        };
    hb(Ah, uh);
    var Bh = function(a) {
            return function(b, c) {
                return (b = a(lb(b), c)) && "about:invalid#zClosurez" != zd(b) ? zd(b) : null
            }
        },
        yh = function() {
            this.Ab = {};
            Pb([nh, oh], function(a) {
                Wc(a).forEach(function(b) {
                    this.Ab[b] = zh
                }, this)
            }, this);
            this.mc = {};
            this.xt = [];
            this.wt = [];
            this.Ff = Xc(vh);
            this.De = Xc(wh);
            this.cl = !1;
            this.Br = Hd;
            this.lq = this.ol = this.qp = this.jf = Rc;
            this.Cf = null;
            this.Gp = this.Oj = !1
        };
    g = yh.prototype;
    g.rs = function() {
        this.lq = Ch;
        return this
    };
    g.VA = function(a) {
        this.jf = a;
        return this
    };
    g.XA = function(a) {
        this.Br = a;
        return this
    };
    g.UA = function(a) {
        this.qp = a;
        return this
    };
    g.WA = function(a) {
        this.ol = a;
        return this
    };
    var Dh = function(a, b) {
            return function(c, d, e, f) {
                c = a(c, d, e, f);
                return null == c ? null : b(c, d, e, f)
            }
        },
        Eh = function(a, b, c, d) {
            a[c] && !b[c] && (a[c] = Dh(a[c], d))
        };
    yh.prototype.Zf = function() {
        return new Ah(this)
    };
    yh.prototype.Aw = function() {
        if (this.Gp) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        Eh(this.Ab, this.mc, "* USEMAP", Fh);
        var a = Bh(this.Br);
        ["* ACTION", "* CITE", "* HREF"].forEach(function(c) {
            Eh(this.Ab, this.mc, c, a)
        }, this);
        var b = Bh(this.jf);
        ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(c) {
            Eh(this.Ab, this.mc, c, b)
        }, this);
        ["* FOR", "* HEADERS", "* NAME"].forEach(function(c) {
            Eh(this.Ab, this.mc, c, cb(Gh, this.qp))
        }, this);
        Eh(this.Ab, this.mc, "A TARGET", cb(Hh, ["_blank", "_self"]));
        Eh(this.Ab,
            this.mc, "* CLASS", cb(Ih, this.ol));
        Eh(this.Ab, this.mc, "* ID", cb(Jh, this.ol));
        Eh(this.Ab, this.mc, "* STYLE", cb(this.lq, b));
        this.Gp = !0
    };
    var Kh = function(a, b) {
            a || (a = "*");
            return (a + " " + b).toUpperCase()
        },
        Ch = function(a, b, c, d) {
            if (!d.si) return null;
            b = Ld(gh(d.si, function(e, f) {
                c.ut = f;
                e = a(e, c);
                return null == e ? null : Dd(e)
            }));
            return "" == b ? null : b
        },
        zh = function(a) {
            return lb(a)
        },
        Hh = function(a, b) {
            b = lb(b);
            return 0 <= Ob(a, b.toLowerCase()) ? b : null
        },
        Fh = function(a) {
            return (a = lb(a)) && "#" == a.charAt(0) ? a : null
        },
        Gh = function(a, b, c) {
            return a(lb(b), c)
        },
        Ih = function(a, b, c) {
            b = b.split(/(?:\s+)/);
            for (var d = [], e = 0; e < b.length; e++) {
                var f = a(b[e], c);
                f && d.push(f)
            }
            return 0 == d.length ?
                null : d.join(" ")
        },
        Jh = function(a, b, c) {
            return a(lb(b), c)
        };
    g = Ah.prototype;
    g.Sa = function(a) {
        this.ig = this.sv();
        a = this.ay(a);
        return ce(a, null)
    };
    g.Zx = function(a) {
        this.ig && "*" == this.Cf && (a.id = this.ig)
    };
    g.Qx = function(a) {
        if (!this.Oj) return a;
        a = ih("<div>" + a + "</div>");
        mh(a);
        return a.innerHTML
    };
    g.sv = function() {
        var a = !("STYLE" in this.Ff) && "STYLE" in this.De;
        return "*" == this.Cf && a ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)) : this.Cf
    };
    g.createTextNode = function(a) {
        var b = a.data;
        (a = $g(a)) && "style" == Yg(a).toLowerCase() && !("STYLE" in this.Ff) && "STYLE" in this.De && (b = Xd(jh(b, this.ig, bb(function(c, d) {
            return this.jf(c, {
                ut: d
            })
        }, this))));
        return document.createTextNode(b)
    };
    g.kt = function(a) {
        var b = Yg(a).toUpperCase();
        if (b in this.Ff || "http://www.w3.org/1999/xhtml" != ch(a)) return null;
        if (this.De[b]) return document.createElement(b);
        a = Ce(document, "SPAN");
        this.cl && Vg(a, "data-sanitizer-original-tag", b.toLowerCase());
        return a
    };
    g.Tx = function(a, b) {
        var c = b.name;
        if (0 == c.lastIndexOf("data-sanitizer-", 0)) return null;
        var d = Yg(a);
        b = b.value;
        var e = {
                tagName: lb(d).toLowerCase(),
                attributeName: lb(c).toLowerCase()
            },
            f = {
                si: void 0
            };
        "style" == e.attributeName && (f.si = Wg(a));
        a = Kh(d, c);
        if (a in this.Me) return c = this.Me[a], c(b, e, f);
        c = Kh(null, c);
        return c in this.Me ? (c = this.Me[c], c(b, e, f)) : null
    };
    var Lh = function(a) {
        return (new yh).Zf().Sa(a)
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Mh = {};

    function Nh(a) {
        return {
            valueOf: a
        }.valueOf()
    };

    function Oh() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var Ph;

    function Qh() {
        var a, b;
        if (void 0 === Ph) try {
            Ph = null !== (b = null === (a = Oh()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            Ph = null
        }
        return Ph
    };
    var Rh = function() {},
        Sh = function(a) {
            this.Jp = a
        };
    Ea(Sh, Rh);
    Sh.prototype.toString = function() {
        return this.Jp.toString()
    };

    function Th(a) {
        var b, c = null === (b = Qh()) || void 0 === b ? void 0 : b.createHTML(a);
        return new Sh(null !== c && void 0 !== c ? c : a, Mh)
    }

    function Uh(a) {
        if (a instanceof Sh) return a.Jp;
        throw Error("");
    };

    function Vh(a, b) {
        a = "undefined" === typeof window ? null : window[a];
        if (null === a || void 0 === a || !a.prototype.hasOwnProperty(b)) return null;
        var c = Object.getOwnPropertyDescriptor(a.prototype, b);
        return function(d) {
            return c.get.apply(d)
        }
    }
    var Wh = Nh(function() {
            var a;
            return null !== (a = Vh("Element", "attributes")) && void 0 !== a ? a : Vh("Node", "attributes")
        }),
        Xh = Nh(function() {
            return Vh("Node", "nodeName")
        }),
        Yh = Nh(function() {
            return Vh("Node", "nodeType")
        }),
        Zh = Nh(function() {
            return Vh("Node", "childNodes")
        }),
        $h = Nh(function() {
            return Vh("Node", "firstChild")
        }),
        ai = Nh(function() {
            return Vh("Attr", "name")
        }),
        bi = Nh(function() {
            return Vh("Attr", "value")
        });
    var ci = function() {},
        di = function(a) {
            this.Kp = a
        };
    Ea(di, ci);
    di.prototype.toString = function() {
        return this.Kp
    };
    var ei = Nh(function() {
        return new di("about:invalid#zTSz", Mh)
    });

    function fi(a) {
        if (a instanceof di) return a.Kp;
        throw Error("");
    };

    function gi(a) {
        try {
            for (var b = Th("<html><body>" + a), c = (new DOMParser).parseFromString(Uh(b), "text/html"), d = c.createDocumentFragment(); Zh(c.body).length;) d.appendChild($h(c.body));
            return d
        } catch (e) {
            return a = Th(a), b = document.createElement("template"), b.innerHTML = Uh(a), b.content
        }
    };
    var hi = function(a, b, c, d) {
        this.ss = a;
        this.Um = b;
        this.ts = c;
        this.Bv = d
    };
    hi.prototype.Jw = function(a) {
        return this.ss.has(a) || this.Um.has(a)
    };
    hi.prototype.uu = function(a, b) {
        b = this.Um.get(b);
        return (null === b || void 0 === b ? 0 : b.has(a)) ? b.get(a) : this.ts.has(a) ? {
            Ka: 1
        } : this.Bv.get(a) || {
            Ka: 0
        }
    };
    var ii = new hi(new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")), new Map([
            ["A",
                new Map([
                    ["href", {
                        Ka: 2
                    }]
                ])
            ],
            ["AREA", new Map([
                ["href", {
                    Ka: 2
                }]
            ])],
            ["LINK", new Map([
                ["href", {
                    Ka: 2,
                    conditions: new Map([
                        ["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                    ])
                }]
            ])],
            ["SOURCE", new Map([
                ["src", {
                    Ka: 2
                }]
            ])],
            ["IMG", new Map([
                ["src", {
                    Ka: 2
                }]
            ])],
            ["VIDEO", new Map([
                ["src", {
                    Ka: 2
                }]
            ])],
            ["AUDIO", new Map([
                ["src", {
                    Ka: 2
                }]
            ])]
        ]), new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")),
        new Map([
            ["dir", {
                Ka: 3,
                conditions: new Map([
                    ["dir", new Set(["auto", "ltr", "rtl"])]
                ])
            }],
            ["async", {
                Ka: 3,
                conditions: new Map([
                    ["async", new Set(["async"])]
                ])
            }],
            ["cite", {
                Ka: 2
            }],
            ["loading", {
                Ka: 3,
                conditions: new Map([
                    ["loading", new Set(["eager", "lazy"])]
                ])
            }],
            ["poster", {
                Ka: 2
            }],
            ["target", {
                Ka: 3,
                conditions: new Map([
                    ["target", new Set(["_self", "_blank"])]
                ])
            }]
        ]));
    var ji = function(a) {
        this.ex = a
    };

    function ki(a) {
        return new ji(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var li = [ki("data"), ki("http"), ki("https"), ki("mailto"), ki("ftp"), new ji(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function mi(a, b) {
        b = void 0 === b ? li : b;
        a: {
            b = void 0 === b ? li : b;
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof ji && d.ex(a)) {
                    a = new di(a, Mh);
                    break a
                }
            }
            a = void 0
        }
        return a || ei
    };
    var ni = function(a, b) {
        this.mq = a;
        this.cm = [];
        if (b !== Mh) throw Error("Bad secret");
    };
    g = ni.prototype;
    g.Sa = function(a) {
        var b = document.createElement("span");
        b.appendChild(this.Py(a));
        a = (new XMLSerializer).serializeToString(b);
        a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
        return Th(a)
    };
    g.Py = function(a) {
        var b = this;
        a = gi(a);
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function(h) {
            return b.zx(h)
        }, !1);
        for (var c = a.nextNode(), d = document.createDocumentFragment(), e = d; null !== c;) {
            var f = void 0;
            if (Yh(c) === Node.TEXT_NODE) f = this.Oy(c);
            else if (Yh(c) === Node.ELEMENT_NODE) f = this.Ny(c);
            else throw Error("Node is not of type text or element");
            e.appendChild(f);
            if (c = a.firstChild()) e = f;
            else
                for (; !(c = a.nextSibling()) && (c = a.parentNode());) e = e.parentNode
        }
        return d
    };
    g.Oy = function(a) {
        return document.createTextNode(a.data)
    };
    g.Ny = function(a) {
        var b = Xh(a),
            c = document.createElement(b);
        if (a = Wh(a))
            for (var d = r(a), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = ai(f);
                f = bi(f);
                var h = this.mq.uu(e, b);
                if (this.Qy(h.conditions, a)) switch (h.Ka) {
                    case 1:
                        c.setAttribute(e, f);
                        break;
                    case 2:
                        h = fi(mi(f));
                        h !== f && this.ke("Url in attribute " + e + ' was modified during sanitization. Original url:"' + f + '" was sanitized to: "' + h + '"');
                        c.setAttribute(e, h);
                        break;
                    case 3:
                        c.setAttribute(e, f.toLowerCase());
                        break;
                    case 0:
                        this.ke("Attribute: " + e + " was dropped");
                        break;
                    default:
                        throw Error("Unhandled AttributePolicyAction case");
                } else this.ke("Not all conditions satisfied for attribute: " + e + ".")
            }
        return c
    };
    g.zx = function(a) {
        if (Yh(a) === Node.TEXT_NODE) return NodeFilter.FILTER_ACCEPT;
        if (Yh(a) !== Node.ELEMENT_NODE) return this.ke("Node: " + a + " was dropped as it was not a text or element node"), NodeFilter.FILTER_REJECT;
        var b = Xh(a);
        if (null === b) return this.ke("Node name was null for node: " + a), NodeFilter.FILTER_REJECT;
        if (this.mq.Jw(b)) return NodeFilter.FILTER_ACCEPT;
        if ("DF" === b) return NodeFilter.FILTER_SKIP;
        this.ke("Element: " + b + " was dropped");
        return NodeFilter.FILTER_REJECT
    };
    g.ke = function() {
        0 === this.cm.length && this.cm.push("")
    };
    g.Qy = function(a, b) {
        var c;
        if (!a) return !0;
        a = r(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = r(d.value);
            d = e.next().value;
            e = e.next().value;
            if ((d = null === (c = b.getNamedItem(d)) || void 0 === c ? void 0 : c.value) && !e.has(d)) return !1
        }
        return !0
    };
    var oi = Nh(function() {
        return new ni(ii, Mh)
    });

    function pi(a) {
        return a instanceof Rh ? Uh(a) : be(a)
    }

    function qi(a) {
        return a instanceof ci ? fi(a) : zd(a)
    }

    function ri(a) {
        a = pi(a).toString();
        return ce(a, null)
    };

    function si(a, b) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = pi(b)
    };

    function ti(a, b) {
        a.src = sd(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var vi = function(a) {
        Gc.call(this, a, -1, ui)
    };
    Ea(vi, Gc);
    g = vi.prototype;
    g.Qz = function(a) {
        return this.X(1, a)
    };
    g.rz = function(a) {
        return this.X(2, a)
    };
    g.Kz = function(a) {
        return this.X(3, a)
    };
    g.wf = function(a) {
        return this.X(4, a)
    };
    g.Gg = function() {
        return this.Ac(5)
    };
    g.Xz = function(a) {
        return this.X(5, a)
    };
    g.In = function() {
        return this.Ac(6)
    };
    g.qz = function(a) {
        return this.X(6, a)
    };
    g.Rz = function(a) {
        return this.X(7, a)
    };
    g.xz = function(a) {
        return this.Jo(8, a)
    };
    g.Tz = function(a) {
        return this.X(9, a)
    };
    var ui = [8];
    var wi = function(a, b) {
        this.qc = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
        this.us = !!b
    };
    g = wi.prototype;
    g.Yi = function(a, b) {
        var c = 0,
            d = 0,
            e = !1;
        a = id(a, b).split(od);
        for (b = 0; b < a.length; b++) {
            var f = a[b];
            kd.test(id(f, void 0)) ? (c++, d++) : ld.test(f) ? e = !0 : jd.test(id(f, void 0)) ? d++ : pd.test(f) && (e = !0)
        }
        return 0 == d ? e ? 1 : 0 : .4 < c / d ? -1 : 1
    };
    g.ws = function(a, b) {
        return 0 > Number(a) * Number(b)
    };
    g.Mm = function(a, b, c, d) {
        return d && (this.ws(b, this.qc) || 1 == this.qc && nd.test(id(a, c)) || -1 == this.qc && md.test(id(a, c))) ? 1 == this.qc ? "\u200e" : "\u200f" : ""
    };
    g.Lm = function(a, b) {
        return this.Xo(this.Yi(a, b))
    };
    g.Xo = function(a) {
        return -1 == (0 == a ? this.qc : a) ? "rtl" : "ltr"
    };
    g.er = function(a, b) {
        return this.kA(null, a, b)
    };
    g.kA = function(a, b, c) {
        null == a && (a = this.Yi(be(b).toString(), !0));
        return this.lA(a, b, c)
    };
    g.lA = function(a, b, c) {
        c = c || void 0 == c;
        var d = 0 != a && a != this.qc;
        if (this.us || d) {
            var e;
            d && (e = -1 == a ? "rtl" : "ltr");
            d = {
                dir: e
            };
            if (!ie.test("span")) throw Error("");
            if ("SPAN" in ke) throw Error("");
            var f = b;
            e = null;
            var h = "";
            if (d)
                for (m in d)
                    if (Object.prototype.hasOwnProperty.call(d, m)) {
                        if (!ie.test(m)) throw Error("");
                        var k = d[m];
                        if (null != k) {
                            var l = m;
                            if (k instanceof fd) k = gd(k);
                            else if ("style" == l.toLowerCase()) {
                                if (!Xa(k)) throw Error("");
                                k instanceof Kd || (k = Od(k));
                                k = Ld(k)
                            } else {
                                if (/^on/i.test(l)) throw Error("");
                                if (l.toLowerCase() in
                                    je)
                                    if (k instanceof rd) k = sd(k).toString();
                                    else if (k instanceof yd) k = zd(k);
                                else if ("string" === typeof k) k = Hd(k).Za();
                                else throw Error("");
                            }
                            k.Gb && (k = k.Za());
                            l = l + '="' + ub(String(k)) + '"';
                            h += " " + l
                        }
                    }
            var m = "<span" + h;
            null == f ? f = [] : Array.isArray(f) || (f = [f]);
            !0 === ad.span ? m += ">" : (e = ge(f), m += ">" + be(e).toString() + "</span>", e = e.Qd());
            (d = d && d.dir) && (e = /^(ltr|rtl|auto)$/i.test(d) ? 0 : null);
            d = ce(m, e)
        } else d = b;
        return d = he(0, d, this.Mm(be(b).toString(), a, !0, c))
    };
    g.kp = function(a, b) {
        return this.sx(null, a, b)
    };
    g.sx = function(a, b, c) {
        null == a && (a = this.Yi(b, c));
        return this.Mm(b, a, c, !0)
    };
    g.mark = function() {
        switch (this.qc) {
            case 1:
                return "\u200e";
            case -1:
                return "\u200f";
            default:
                return ""
        }
    };
    g.mA = function() {
        return -1 == this.qc ? "right" : "left"
    };
    var xi = new wi(1),
        yi = xi.Xo(1),
        zi = xi.mA(),
        Ai = function(a, b) {
            return be(xi.er(de(a), b)).toString()
        },
        Bi = function(a, b) {
            return xi.er(ri(oi.Sa(a)), b)
        },
        Ci = function(a) {
            return a ? xi.Lm(a, !1) : yi
        },
        Di = function(a) {
            return a ? xi.Lm(a, !0) : yi
        },
        Ei = function(a) {
            return a ? xi.kp(a, !1) : ""
        },
        Fi = function(a) {
            return a ? xi.kp(a, !0) : ""
        };
    var Gi = {
            "result-info": function(a, b) {
                return "About " + a + " results (" + b + " seconds)"
            },
            page: function(a) {
                return "Page " + a
            }
        },
        Hi = {
            "search-on-google": function() {
                var a = r(["Search for ", " on Google"]),
                    b = a.next().value;
                a = a.next().value;
                return {
                    prefix: b,
                    mr: a
                }
            },
            "google-custom-search": function() {
                var a = r(["", " Custom Search"]),
                    b = a.next().value;
                a = a.next().value;
                return {
                    prefix: b,
                    mr: a
                }
            },
            "sorry-message": function() {
                var a = r(["Please verify that you are not a robot. $$DIVIDER1$$Learn more.", ""]),
                    b = a.next().value;
                a = a.next().value;
                var c = r(b.split("$$DIVIDER1$$"));
                b = c.next().value;
                c = c.next().value;
                return {
                    yA: b,
                    ox: c,
                    xA: a
                }
            }
        };
    var Ii = {
        blank: "&nbsp;",
        image: "Image",
        web: "Web",
        "ads-by-google": "Ads by Google",
        watermark: "clipped from Google",
        "clear-results": "clear results",
        search: "search",
        "search-uc": "Search",
        "powered-by": "powered by",
        previous: "Previous",
        next: "Next",
        "clear-tool-title": "Clear search box",
        "no-results": "No Results",
        "linked-cse-error-results": "Linked CSEs are no longer supported.  See https://goo.gl/Gs1KIc.",
        dym: "Did you mean:",
        "showing-results-for": "Showing results for",
        "search-instead-for": "Search instead for",
        "custom-search": "Custom Search",
        labeled: "Labeled",
        "all-results-short": "All",
        "all-results-long": "All results",
        "refine-results": "Refine results:",
        "file-format": "File Format:",
        "order-results-by": "Sort by:",
        "order-by-relevance": "Relevance",
        "order-by-date": "Date",
        "structured-data": "Structured data",
        "cse-branding": "Google Custom Search Branding",
        "enhanced-by-google": "enhanced by Google",
        "next-page": "Next page",
        "prev-page": "Previous page",
        "close-button": "Close",
        "visit-website": "Visit Website",
        "learn-more": "Learn more",
        "thumbnail-image": "Thumbnail image"
    };
    var Ki = function(a) {
            Ji();
            return ce(a, null)
        },
        Li = function(a) {
            Ji();
            return vd(a)
        },
        Ji = Va;

    function Mi(a, b) {
        var c = function() {};
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.DC = function(d, e, f, h) {
            var k = Array.prototype.splice.apply(arguments, [1, arguments.length]);
            return d.apply(a, k)
        }
    }
    var Ni = (new Date).getTime(),
        Oi = !0;

    function Pi(a, b) {
        Qi(a, void 0 === b ? "1" : b)
    }

    function Ri(a) {
        Oi = !1;
        Pi(a);
        Oi = !0
    }

    function Qi(a, b) {
        b = void 0 === b ? "1" : b;
        var c = document.getElementsByTagName("head")[0];
        c || (c = document.body.parentNode.appendChild(document.createElement("head")));
        var d = document.createElement("script");
        d.type = "text/javascript";
        d.charset = "utf-8";
        a = Oi ? a + "&key=notsupplied&v=" + (void 0 === b ? "1" : b) : a;
        if (ac || pc || Si("konqueror")) a = a + "&nocache=" + Ni++;
        ti(d, Li(a));
        var e = function() {
            d.onload = null;
            d.parentNode.removeChild(d)
        };
        a = function(f) {
            f = f ? f : window.event;
            f = f.target ? f.target : f.srcElement;
            if ("loaded" == f.readyState ||
                "complete" == f.readyState) f.onreadystatechange && (f.onreadystatechange = null), e()
        };
        "Gecko" == navigator.product ? d.onload = e : d.onreadystatechange = a;
        c.appendChild(d)
    }

    function Ti(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }

    function Ui(a, b, c) {
        c = void 0 === c ? [] : c;
        return function() {
            return b.apply(a, c)
        }
    }

    function Vi(a) {
        for (; a.firstChild;) a.removeChild(a.firstChild)
    }

    function Wi(a, b) {
        if (a) try {
            Vi(a), a.appendChild(b)
        } catch (c) {}
        return b
    }

    function E(a, b) {
        try {
            a.appendChild(b)
        } catch (c) {}
        return b
    }

    function Xi(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.yb ? !1 : c.yb;
        (void 0 === c.be ? 0 : c.be) || d ? (b = (new yh).rs().UA(Sc).WA(Sc).VA(Hd).XA(Hd).Zf().Sa(b), si(a, b)) : si(a, Lh(b))
    }

    function Yi(a, b) {
        void 0 != a.textContent ? a.textContent = b : a.innerText = b
    }

    function Zi(a) {
        return document.createTextNode(void 0 === a ? "" : a)
    }

    function $i(a) {
        a = void 0 === a ? {} : a;
        var b = void 0 === a.text ? void 0 : a.text,
            c = void 0 === a.className ? void 0 : a.className,
            d = void 0 === a.be ? !1 : a.be,
            e = void 0 === a.yb ? !1 : a.yb,
            f = document.createElement("div");
        (void 0 === a.Kc ? 0 : a.Kc) ? E(f, Zi(b)): b && (b instanceof ae ? si(f, b) : Xi(f, b, {
            be: d,
            yb: e
        }));
        c && (f.className = c);
        return f
    }

    function L(a) {
        return $i({
            className: a
        })
    }

    function aj(a, b) {
        var c = document.createElement("span");
        a && E(c, Zi(a));
        b && (c.className = b);
        return c
    }

    function bj(a, b, c) {
        var d = document.createElement("table");
        d.setAttribute("cellSpacing", a ? a : 0);
        d.setAttribute("cellPadding", b ? b : 0);
        c && (d.className = c);
        return d
    }

    function cj(a, b, c) {
        (a = a.insertRow(-1)) || alert(a);
        for (var d = 0; d < b; d++) dj(a, c);
        return a
    }

    function dj(a, b) {
        a = a.insertCell(-1);
        b && (a.className = b);
        return a
    }

    function ej(a, b, c, d) {
        var e = Ce(document, "IMG");
        e.src = a;
        b && (e.width = b);
        c && (e.height = c);
        d && (e.className = d);
        return e
    }

    function fj(a, b, c, d, e) {
        var f = document.createElement("a");
        a && oe(f, a);
        b && (d ? E(f, aj(b, d)) : E(f, Zi(b)));
        c && (f.target = c);
        e && (f.title = e);
        return f
    }

    function gj(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var h = L(d),
            k = document.createElement("a");
        k.href = a;
        Xi(k, b, {
            be: !0
        });
        d && (k.className = d);
        c && (k.target = c);
        e && (k.title = e);
        for (var l in f) k.setAttribute(l, f[l]);
        h.appendChild(k);
        return h
    }

    function hj(a, b) {
        b = void 0 === b ? {} : b;
        b = void 0 === b.yb ? !1 : b.yb;
        var c = document.createDocumentFragment(),
            d = document.createElement("div");
        for (a instanceof ae ? si(d, a) : b ? si(d, Ki(a)) : Xi(d, a, {
                be: !1
            }); d.firstChild;) c.appendChild(d.firstChild);
        return c
    }

    function ij(a, b, c, d, e, f, h) {
        e = void 0 === e ? "" : e;
        var k = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        k.setAttribute("width", f || c);
        k.setAttribute("height", h || d);
        k.setAttribute("viewBox", "0 0 " + c + " " + d);
        e && k.setAttribute("class", e);
        c = document.createElementNS("http://www.w3.org/2000/svg", "title");
        c.textContent = b;
        k.appendChild(c);
        b = document.createElementNS("http://www.w3.org/2000/svg", "path");
        b.setAttribute("d", a);
        k.appendChild(b);
        return k
    }

    function jj(a, b) {
        b ? (a.tabIndex = 0, a.onclick = b, a.onkeypress = function(c) {
            c = c || window.event;
            c.keyCode && 13 == c.keyCode && b.call(a, c)
        }) : (a.tabIndex = -1, a.removeAttribute("tabIndex"), a.onclick = null, a.onkeypress = null)
    }
    var kj = "",
        lj = {
            $s: {
                UC: 1,
                aD: 1,
                MD: 1,
                id: 1,
                ND: 1,
                "in": 1,
                ZD: 1,
                aE: 1,
                cE: 1,
                dE: 1,
                fE: 1,
                pE: 1,
                cF: 1,
                iF: 1,
                jF: 1,
                nF: 1,
                oF: 1,
                qF: 1
            },
            ZC: {
                HC: 1,
                MC: 1,
                OC: 1,
                QC: 1,
                RC: 1,
                SC: 1,
                $s: 1,
                bD: 1,
                "do": 1,
                fD: 1,
                mD: 1,
                BD: 1,
                CD: 1,
                ED: 1,
                LD: 1,
                $D: 1,
                gE: 1,
                iE: 1,
                jE: 1,
                kE: 1,
                lE: 1,
                mE: 1,
                nE: 1,
                oE: 1,
                vE: 1,
                wE: 1,
                xE: 1,
                yE: 1,
                zE: 1,
                AE: 1,
                KE: 1,
                RE: 1,
                ZE: 1,
                eF: 1,
                gF: 1,
                hF: 1,
                lF: 1,
                mF: 1,
                pF: 1
            },
            qE: {
                IC: 1
            }
        };

    function Si(a) {
        return a in mj ? mj[a] : mj[a] = -1 != navigator.userAgent.toLowerCase().indexOf(a)
    }
    var mj = {},
        nj = function(a) {
            this.Is = a + "branding";
            this.vertical = a + "branding-vertical";
            this.rw = a + "branding-img-noclear";
            this.Ws = a + "branding-clickable";
            this.text = a + "branding-text"
        },
        oj = function(a, b, c) {
            if (!a) return {
                length: 0
            };
            b = b && "*" != b ? b.toUpperCase() : "";
            if (c && a.getElementsByClassName) {
                c = a.getElementsByClassName(c);
                if (b) {
                    a = {};
                    for (var d = 0, e = 0, f; f = c[e]; e++) b == f.nodeName && (a[d++] = f);
                    a.length = d;
                    return a
                }
                return c
            }
            b = a.getElementsByTagName(b || "*");
            if (c) {
                a = {};
                for (e = d = 0; f = b[e]; e++) pg(f, c) && (a[d++] = f);
                a.length = d;
                return a
            }
            return b
        };

    function pj(a) {
        var b = [];
        if (a)
            for (var c in a) null != a[c] && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }

    function qj(a, b) {
        b || (b = document.body);
        for (var c = 0; a != b;) c += a.offsetTop, a = a.offsetParent;
        return c
    }

    function rj(a) {
        try {
            return a instanceof HTMLFormElement
        } catch (b) {
            return !!a && "object" === typeof a && 1 === a.nodeType && "object" === typeof a.style && "object" === typeof a.ownerDocument && "form" === a.tagName.toLowerCase()
        }
    }

    function sj(a) {
        return "string" == typeof a ? document.getElementById(a) : a
    }

    function tj(a) {
        var b = a.parentElement;
        return b ? b.firstElementChild : a
    }

    function uj(a) {
        if (a) {
            var b = Ce(document, "A");
            oe(b, Dd(a));
            a = b.href
        } else a = null;
        return a
    }

    function vj(a) {
        return !!a && /https?:\/\/([^/.:]+\.)*google(\.[^/.:]+)*(:[0-9]+)?\/cse/.test(a)
    }

    function wj(a) {
        window.console && window.console.warn(a)
    };
    var xj = this,
        yj = vd(gd(new fd(dd, "https://support.google.com/programmable-search/answer/6001359#captcha"))),
        zj = vd(gd(new fd(dd, "https://www.google.com/recaptcha/api.js?render=explicit"))),
        Aj, Bj = gd(new fd(dd, "display:none;"));
    Aj = 0 === Bj.length ? Nd : new Kd(Bj, Jd);
    var Cj = function(a) {
            a = L(a);
            D(a, "gs-result");
            D(a, "gs-error-result");
            D(a, "gs-captcha-outer-wrapper");
            a.setAttribute("id", "recaptcha-wrapper");
            var b = Hi["sorry-message"](),
                c = b.yA,
                d = b.ox,
                e = b.xA;
            b = L();
            c = c ? aj(c, "gs-captcha-msg") : null;
            e = e ? aj(e, "gs-captcha-msg") : null;
            d = fj(yj.toString(), d, "_blank", "gs-captcha-info-link");
            c && E(b, c);
            E(b, d);
            e && E(b, e);
            d = L("gs-captcha-wrapper");
            d.setAttribute("id", "recaptcha-element");
            E(a, b);
            E(a, d);
            return {
                kq: a,
                iy: d
            }
        },
        Dj = function() {
            var a;
            (null == (a = x.console) ? 0 : a.log) && x.console.log("Unable to load recaptcha widget")
        },
        Ej = function() {
            var a = sj("recaptcha-wrapper");
            a && a.remove()
        },
        Fj = function(a, b, c, d) {
            var e = b.kq;
            x.grecaptcha.render(b.iy, {
                sitekey: a ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" : "6LdE6qgbAAAAANq2Tal4NuP8YdGwtfdTpCLArNE-",
                callback: function(f) {
                    e.style.cssText = Ld(Aj);
                    c(f);
                    d && d()
                },
                "expired-callback": function() {}
            })
        },
        Gj = function(a, b, c, d, e, f) {
            Ej();
            var h = "762379dc6347d760b" === a,
                k = Cj(b);
            d(zj, {
                async: !0,
                defer: !0
            }).Xr(function() {
                x.grecaptcha.ready(function() {
                    if (c.gp) {
                        var l = c.gp;
                        l(c.query, "reCaptcha.render", c.Yy, function() {
                            return Fj(h,
                                k, f, e)
                        }).apply(xj)
                    } else Fj(h, k, f, e)
                })
            }).Zr(Dj);
            return k.kq
        },
        Hj = function(a, b, c) {
            var d = ["gsc-adBlock", "gsc-adBlockNoHeight", "gsc-adBlockInvisible"],
                e = function(t) {
                    t && (D(t, "gsc-adBlockInvisible"), b(function() {
                        og(t, "gsc-adBlock")
                    }))
                },
                f = function(t) {
                    t && "gsc-wrapper" === t.className ? (t = t.firstElementChild, t = null != t && d.includes(t.className)) : t = !1;
                    return t
                },
                h = function(t) {
                    c(function() {
                        e(t)
                    })
                };
            a = oj(a, "div", "gsc-wrapper");
            for (var k = 0; k < a.length; ++k)
                if (f(a[k]))
                    for (var l = 0; l < a[k].childElementCount; ++l) {
                        var m = void 0,
                            u = null == (m = a[k]) ? void 0 : m.children[l];
                        if ("gsc-adBlock" === u.className) {
                            e(u);
                            return
                        }
                        if (null != u && d.includes(u.className)) {
                            h(u);
                            return
                        }
                    }
        };
    var Ij = function(a) {
            return "string" == typeof a ? "" != a && "0" != a && "false" != a.toLowerCase() : !!a
        },
        Jj = function(a) {
            a = parseInt(a, 10);
            return isNaN(a) ? void 0 : a
        },
        P = function(a) {
            return function(b) {
                for (var c = 0; c < a.length; c++)
                    if (typeof b == a[c]) return b
            }
        },
        Kj = function() {
            var a = 0;
            return function() {
                return "___gcse_" + a++
            }
        }(),
        Lj = function(a) {
            var b = 0;
            return function(c) {
                return "two-column" == a ? c || String(a) : c || String(a + b++)
            }
        },
        Mj = {};
    Mj.standard = {
        Pe: ["searchbox+results"],
        zg: Lj("standard")
    };
    Mj["two-column"] = {
        Pe: ["searchbox", "results"],
        zg: Lj("two-column")
    };
    Mj["searchbox-only"] = {
        Pe: ["searchbox"],
        zg: Lj("searchbox-only")
    };
    Mj["searchresults-only"] = {
        Pe: ["results"],
        zg: Lj("searchresults-only")
    };
    var Nj = {
            search: {
                vc: "standard",
                Oe: "searchbox+results"
            },
            searchbox: {
                vc: "two-column",
                Oe: "searchbox"
            },
            searchresults: {
                vc: "two-column",
                Oe: "results"
            },
            "searchbox-only": {
                vc: "searchbox-only",
                Oe: "searchbox"
            },
            "searchresults-only": {
                vc: "searchresults-only",
                Oe: "results"
            }
        },
        Oj, Pj = [],
        Qj;
    for (Qj in Nj) Pj.push("gcse\\:" + Qj), Pj.push("div.gcse-" + Qj);
    Oj = Pj.join(", ");
    var Rj = function(a, b, c) {
            b = b && "*" != b ? b.toUpperCase() : "";
            if (c && a.getElementsByClassName) {
                c = a.getElementsByClassName(c);
                if (b) {
                    a = {};
                    for (var d = 0, e, f = 0; e = c[f]; f++) b == e.nodeName && (a[d++] = e);
                    a.length = d;
                    return a
                }
                return c
            }
            b = a.getElementsByTagName(b || "*");
            if (c) {
                a = {};
                for (f = d = 0; e = b[f]; f++) {
                    a: {
                        if (null != e && null != e.className) {
                            var h = e.className.split(" ");
                            for (var k = 0; k < h.length; k++)
                                if (h[k] == c) {
                                    h = !0;
                                    break a
                                }
                        }
                        h = !1
                    }
                    h && (a[d++] = e)
                }
                a.length = d;
                return a
            }
            return b
        },
        Sj = function(a) {
            var b = [],
                c;
            for (c in Nj) {
                for (var d = a.getElementsByTagName("gcse:" +
                        c), e = 0; e < d.length; e++) b.push(d[e]);
                d = Rj(a, "div", "gcse-" + c);
                for (e = 0; e < d.length; e++) b.push(d[e])
            }
            return b
        },
        Tj = {
            $B: {
                name: "resultsUrl",
                l: function(a) {
                    if ("string" == typeof a && (a = uj(a)) && (0 == a.indexOf("http://") || 0 == a.indexOf("https://"))) return a
                },
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            RB: {
                name: "newWindow",
                l: Ij,
                defaultValue: !1,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            XB: {
                name: "queryParameterName",
                l: P(["string"]),
                defaultValue: "q",
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            iB: {
                name: "autoSearchOnLoad",
                l: Ij,
                defaultValue: !0,
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            mB: {
                name: "defaultToRefinement",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "defaultToRefinement",
                i: void 0,
                m: void 0
            },
            rB: {
                name: "enableOrderBy",
                l: Ij,
                defaultValue: void 0,
                s: !0,
                g: "enableOrderBy",
                i: void 0,
                m: void 0
            },
            UB: {
                name: "orderByOptions",
                l: P(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "keys",
                i: "orderByOptions",
                m: void 0
            },
            aC: {
                name: "resultSetSize",
                l: P(["string", "number"]),
                defaultValue: void 0,
                s: !0,
                g: "resultSetSize",
                i: void 0,
                m: void 0
            },
            YB: {
                name: "extendedRestricts",
                l: P(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "restrict-extended",
                i: void 0,
                m: void 0
            },
            bC: {
                name: "safeSearch",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "restrict-safesearch",
                i: void 0,
                m: void 0
            },
            pB: {
                name: "enableHistory",
                l: Ij,
                defaultValue: !1,
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            PB: {
                name: "linkTarget",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "results"
            },
            tB: {
                name: "enableSpeech",
                l: Ij,
                defaultValue: !1,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            oB: {
                name: "enableAutoComplete",
                l: Ij,
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "searchbox"
            },
            hB: {
                name: "autoCompleteValidLanguages",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "validLanguages",
                i: "autoCompleteOptions",
                m: "searchbox"
            },
            eB: {
                name: "autoCompleteMaxCompletions",
                l: Jj,
                defaultValue: void 0,
                s: !0,
                g: "maxCompletions",
                i: "autoCompleteOptions",
                m: "searchbox"
            },
            fB: {
                name: "autoCompleteMaxPromotions",
                l: Jj,
                defaultValue: void 0,
                s: !0,
                g: "maxPromotions",
                i: "autoCompleteOptions",
                m: "searchbox"
            },
            gB: {
                name: "autoCompleteSource",
                l: P(["string"]),
                defaultValue: void 0,
                s: !1,
                g: "autoCompleteSource",
                i: void 0,
                m: void 0
            },
            SB: {
                name: "noResultsString",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: "results"
            },
            bB: {
                name: "addOverride",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: void 0,
                i: void 0,
                m: void 0
            },
            TB: {
                name: "numTopRefinements",
                l: Jj,
                defaultValue: void 0,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            AC: {
                name: "webSearchResultSetSize",
                l: P(["number", "string"]),
                defaultValue: void 0,
                s: !0,
                g: "resultSetSize",
                i: "webSearchOptions",
                m: void 0
            },
            zC: {
                name: "webSearchExtendedRestricts",
                l: P(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "restrict-extended",
                i: "webSearchOptions",
                m: void 0
            },
            xC: {
                name: "lr",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "lr",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            tC: {
                name: "cr",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "cr",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            vC: {
                name: "gl",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "gl",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            uC: {
                name: "filter",
                l: P(["number"]),
                defaultValue: void 0,
                s: !0,
                g: "filter",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            sC: {
                name: "as_sitesearch",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_sitesearch",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            qC: {
                name: "as_oq",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_oq",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            CC: {
                name: "sort_by",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "sort_by",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            rC: {
                name: "as_rights",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_rights",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            pC: {
                name: "as_filetype",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_filetype",
                i: "webSearchExtendedRestricts",
                m: void 0
            },
            BC: {
                name: "webSearchSafesearch",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "restrict-safesearch",
                i: "webSearchOptions",
                m: void 0
            },
            wC: {
                name: "webSearchLinkTarget",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "linkTarget",
                i: "webSearchOptions",
                m: "results"
            },
            yC: {
                name: "webSearchQueryAddition",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "queryAddition",
                i: "webSearchOptions",
                m: void 0
            },
            qB: {
                name: "enableImageSearch",
                l: Ij,
                defaultValue: void 0,
                s: !0,
                g: "enableImageSearch",
                i: void 0,
                m: "results"
            },
            nB: {
                name: "disableWebSearch",
                l: Ij,
                defaultValue: void 0,
                s: !0,
                g: "disableWebSearch",
                i: void 0,
                m: void 0
            },
            lB: {
                name: "defaultToImageSearch",
                l: Ij,
                defaultValue: void 0,
                s: !0,
                g: "defaultToImageSearch",
                i: void 0,
                m: void 0
            },
            IB: {
                name: "imageSearchLayout",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "layout",
                i: "imageSearchOptions",
                m: "results"
            },
            KB: {
                name: "imageSearchExtendedRestricts",
                l: P(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "restrict-extended",
                i: "imageSearchOptions",
                m: void 0
            },
            JB: {
                name: "image_lr",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "lr",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            BB: {
                name: "image_cr",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "cr",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            DB: {
                name: "image_gl",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "gl",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            CB: {
                name: "image_filter",
                l: P(["number"]),
                defaultValue: void 0,
                s: !0,
                g: "filter",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            AB: {
                name: "image_as_sitesearch",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_sitesearch",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            yB: {
                name: "image_as_oq",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_oq",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            MB: {
                name: "image_sort_by",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "sort",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            zB: {
                name: "image_as_rights",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_rights",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            xB: {
                name: "image_as_filetype",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "as_filetype",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            GB: {
                name: "image_size",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgsz",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            EB: {
                name: "image_colortype",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgc",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            FB: {
                name: "image_dominantcolor",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgcolor",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            HB: {
                name: "image_type",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "imgtype",
                i: "imageSearchExtendedRestricts",
                m: void 0
            },
            LB: {
                name: "imageSearchResultSetSize",
                l: P(["number", "string"]),
                defaultValue: void 0,
                s: !0,
                g: "resultSetSize",
                i: "imageSearchOptions",
                m: void 0
            },
            vB: {
                name: "gaQueryParameter",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "queryParameter",
                i: "googleAnalyticsOptions",
                m: "searchbox"
            },
            uB: {
                name: "gaCategoryParameter",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "categoryParameter",
                i: "googleAnalyticsOptions",
                m: "searchbox"
            },
            $A: {
                name: "adchannel",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "adchannel",
                i: void 0,
                m: void 0
            },
            aB: {
                name: "adclient",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "adclient",
                i: void 0,
                m: void 0
            },
            dB: {
                name: "adtest",
                l: P(["string"]),
                defaultValue: void 0,
                s: !0,
                g: "adtest",
                i: void 0,
                m: void 0
            },
            cB: {
                name: "adoptions",
                l: P(["object"]),
                defaultValue: void 0,
                s: !1,
                g: "adoptions",
                i: void 0,
                m: void 0
            },
            gC: {
                name: "overlayResults",
                l: Ij,
                defaultValue: !1,
                s: !0,
                g: "overlayResults",
                i: void 0,
                m: void 0
            },
            sB: {
                name: "enableRichSnippets",
                l: Ij,
                defaultValue: !1,
                s: !1,
                g: void 0,
                i: void 0,
                m: "results"
            },
            wB: {
                name: "hideElementBranding",
                l: Ij,
                defaultValue: !1,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            WB: {
                name: "personalizedAds",
                l: Ij,
                defaultValue: !0,
                s: !0,
                g: "personalizedAds",
                i: void 0,
                m: void 0
            },
            kB: {
                name: "cssThemeVersion",
                l: P(["number"]),
                defaultValue: void 0,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            QB: {
                name: "mobileLayout",
                l: P(["string"]),
                defaultValue: "enabled",
                s: !0,
                g: "mobileLayout",
                i: void 0,
                m: void 0
            },
            NB: {
                name: "isMobileDevice",
                l: Ij,
                defaultValue: !1,
                s: !1,
                g: void 0,
                i: void 0,
                m: void 0
            },
            OB: {
                name: "isSafeSearchActive",
                l: function(a) {
                    if ("string" == typeof a) {
                        if ("off" == a || "moderate" == a) return "off";
                        if ("active" == a) return "active"
                    } else if ("boolean" == typeof a) return a ?
                        "active" : "off"
                },
                defaultValue: void 0,
                s: !0,
                g: "isSafeSearchActive",
                i: void 0,
                m: void 0
            }
        },
        Uj = function(a, b) {
            for (var c in Tj) Tj.hasOwnProperty(c) && a.call(b, Tj[c])
        },
        Vj = ["oq", "gs_204"];
    var Wj = function(a, b) {
            var c = {};
            Uj(function(d) {
                var e = a.getAttribute(b + d.name);
                null != e && (c[d.name] = e)
            }, null);
            return c
        },
        Xj = function(a, b) {
            this.node = a;
            this.Yp = b ? 1 : 0;
            if (b) {
                var c = b.tag || "search";
                var d = b.attributes || {}
            } else {
                c = "";
                c = a.nodeName.toLowerCase();
                var e = "";
                "div" == c ? (e = "data-", c = (a.className || a.getAttribute("class")).substr(5)) : c = c.substr(5);
                d = Wj(a, e)
            }
            this.attributes = d;
            this.vc = Nj[c].vc;
            this.type = Nj[c].Oe;
            a = b ? b.gname : a.getAttribute(e + "gname");
            this.wa = Mj[this.vc].zg(a);
            this.jt = function() {
                var f = this.node;
                if (0 == this.Yp) {
                    var h = document.createElement("div");
                    var k = f.parentNode;
                    k.insertBefore(h, f);
                    k.removeChild(f);
                    h.id = f.id;
                    this.node = h
                } else 1 == this.Yp && (h = document.createElement("div"), f.appendChild(h), this.node = h);
                this.node.id && 0 !== this.node.id.length || (this.node.id = Kj())
            }
        };
    var Yj = ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="anchor"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div class="gsc-thumbnail-inside"> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div class="gsc-table-result"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target,localizedMessages:localizedMessages})"> </div> <div class="gsc-table-cell-snippet-close"> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div data-if="Vars.richSnippet && Vars.richSnippet.action" class="gs-actions" data-body="render(\'action\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gs-richsnippet-box" style="display: none;"> </div> <div class="gs-per-result-labels" data-attr="{url:unescapedUrl}"> <span data-body="localizedMessages[\'labeled\']" data-if="Vars.perResultLabels"></span> <div data-foreach="Vars.perResultLabels" data-attr="0" data-if="Vars.perResultLabels"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </div> </div> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'href\':originalContextUrl, \'target\':target, \'class\':imageClass }" ><img data-attr="{ \'src\':tbUrl, \'title\':titleNoFormatting, \'alt\': titleNoFormatting, \'class\':imageClass }"/ ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \' \u00d7 \' + height" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box" ></div ></div> <div id="base_imageResult_classic" ><div class="gs-result gs-imageResult gs-imageResult-classic" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_column" ><div class="gs-result gs-imageResult gs-imageResult-column" data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" onmouseover="google.search.ImageSearch.showPopup(this)" onmouseout="google.search.ImageSearch.hidePopup(this)" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div class="gsc-table-cell-thumbnail gsc-thumbnail" data-if="tn.src"> <div data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image-box gs-web-image-box gs-web-image-box-landscape"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> <div data-elif="true" class="gs-image-box gs-web-image-box gs-web-image-box-portrait"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ',
        Zj = ' <div style="display:none"> <span id="private_ratings"> <span class="gsc-snippet-metadata"> <span data-if="Vars.ratingstars"> <span class="gsc-rating-bar"> <span data-attr="{style:\'width:\' + (Vars.ratingstars * 20) + \'%\'}"></span> </span> <span data-if="Vars.ratingcount"> <span data-body="\' \' + Vars.ratingcount"></span> <span> reviews</span> </span> </span> <span data-if="Vars.totaltime"> <span data-if="Vars.ratingstars && Vars.ratingcount"> - </span> <span data-body="Vars.totaltime"></span> </span> <span data-if="Vars.calories"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime"> - </span> <span data-body="Vars.calories"></span> <span> cal</span> </span> <span data-if="Vars.pricerange"> <span data-if="Vars.ratingstars && Vars.ratingcount || Vars.totaltime || Vars.calories"> - </span> <span> Price range: </span> <span data-body="Vars.pricerange"></span> </span> <span data-if="Vars.reviewer" class="gsc-reviewer"> <span data-body="\' \' + Vars.reviewer"></span> </span> </span> </span> <span id="private_hproduct"> <span class="gsc-snippet-metadata"> <span data-if="Vars.availability">Availability: <span data-body="Vars.availability"></span>.</span> <span data-if="Vars.availability && Vars.price">&nbsp;</span> <span data-if="Vars.price"> Price: <span data-body="Vars.price"></span>.</span> </span> </span> <span id="private_hrecipe"> <span data-if="Vars.author" class="gsc-author"> <span data-body="\' \' + Vars.author"></span> </span> </span> <span id="private_recipe"> <span data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.recipe))"> </span> <span data-if="Vars.richSnippet.hrecipe && Vars.richSnippet.hrecipe.author && !Vars.richSnippet.recipe.reviewer" data-attr="0" data-body="render(\'private_hrecipe\',richSnippet.hrecipe)"> </span> </span> <span id="private_person"> <span data-vars="{vcard:google.search.richsnippets.merge(Vars.richSnippet.vcard)}"> <span data-if="Vars.richSnippet.vcard && vcard.adr"> <span data-if="vcard.adr" class="gs-location"> <span data-body="\' \' + vcard.adr"> </span> </span> </span> <span data-elif="Vars.richSnippet.person"> <span data-if="person.role" class="gsc-role"> <span data-attr="0" data-body="\' \' + person.role"> </span> </span> <span data-if="person.org" class="gsc-org"> <span data-body="\' @\' + person.org"> </span> </span> <span data-if="person.location" class="gsc-location"> <span data-if="person.org || person.role || Vars.richSnippet.review"> - </span> <span data-body="\' \' + person.location"> </span> </span> </span> <span data-if="Vars.richSnippet.vcard && vcard.tel" class="gsc-tel"> <span data-if="(person && (person.org || person.role || Vars.richSnippet.review || person.location)) || (Vars.richSnippet.vcard && vcard.adr) "> - </span> <span data-body="\' Tel: \' + vcard.tel"> </span> </span> </span> </span> <span id="private_metadata" class="gsc-snippet-metadata"> <span data-vars="{person:google.search.richsnippets.merge(Vars.richSnippet.person), product:google.search.richsnippets.merge(Vars.richSnippet.hproduct)}"> <span data-if="Vars.richSnippet.recipe" data-attr="0" data-body="render(\'private_recipe\', Vars)"> </span> <span data-elif="Vars.richSnippet.review" data-attr="0" data-body="render(\'private_ratings\',google.search.richsnippets.merge(richSnippet.review))"> </span> <span data-if="Vars.richSnippet.hproduct && (product.availability || product.price)" data-attr="0" data-body="render(\'private_hproduct\', product)"> </span> <span data-elif="Vars.richSnippet.person || Vars.richSnippet.vcard" data-attr="0" data-body="render(\'private_person\', Vars)"> </span> </span> </span> <div id="base_facets"> <div class="gsc-context-box" data-facetgroup=\'title\'> </div> </div> <div id="base_facetGroupEntry"> <div> <div class="gsc-facet-label gsc-col" style="display:inline-block;"> <a data-attr="{\'data-refinementLabel\': label, \'label-with-op\': label_with_op}" data-body="anchor"></a> </div> <div class="gsc-facet-result gsc-col" data-body="html(width + \'%\')" style="display:inline-block;"> </div> <div data-attr="{\'class\': index == \'first\' ? \'gsc-chart gsc-top gsc-col\' : index == \'last\' ? \'gsc-chart gsc-bottom gsc-col\' : index == \'sizeone\' ? \'gsc-chart gsc-bottom gsc-col gsc-top\' : \'gsc-chart gsc-col\'}" style="display:inline-block;"> <div class="" data-attr="{style:\'width:\' + width + \'%\'}"></div> </div> </div> </div> <div id="base_webResult"> <div class="gs-webResult gs-result" data-vars="{longUrl:function() { var i = unescapedUrl.indexOf(visibleUrl); return i < 1 ? visibleUrl : unescapedUrl.substring(i);}}"> <div class="gsc-thumbnail-inside"> <div class="gs-title"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> </div> <div class="gsc-url-top"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-breadcrumb"> <span data-body="(Vars.richSnippet && Vars.richSnippet.metatags && Vars.richSnippet.metatags.ogSiteName) || (Vars.breadcrumbUrl && Vars.breadcrumbUrl.host) || visibleUrl"></span> <span data-if="Vars.breadcrumbUrl.crumbs" data-foreach="Vars.breadcrumbUrl.crumbs" data-body="\' \u203a \' + Cur"></span> </div> </div> <div class="gsc-table-result"> <div data-if="Vars.richSnippet" data-attr="0" data-body="render(\'thumbnail\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gsc-table-cell-snippet-close"> <div class="gs-title gsc-table-cell-thumbnail gsc-thumbnail-left"> <a class="gs-title" data-attr="{href:unescapedUrl,target:target,dir:bidiHtmlDir(title)}" data-body="html(title)"> </a> </div> <div class="gs-fileFormat" data-if="Vars.fileFormat"> <span class="gs-fileFormat" data-body="localizedMessages[\'file-format\'] + \' \'"></span> <span class="gs-fileFormatType" data-body="Vars.fileFormat"></span> </div> <div data-if="google.search.CurrentLocale == \'en\' && Vars.richSnippet"> <span data-attr="0" data-body="render(\'private_metadata\', Vars)"> </span> </div> <div class="gs-bidi-start-align gs-snippet" data-body="html(content)" data-attr="{dir:bidiHtmlDir(content)}"> </div> <div class="gsc-url-bottom"> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-short" data-body="visibleUrl" data-attr="{dir:bidiTextDir(visibleUrl)}"> </div> <div class="gs-bidi-start-align gs-visibleUrl gs-visibleUrl-long" data-body="Vars.formattedUrl ? html(Vars.formattedUrl) : longUrl()" data-attr="{dir: Vars.formattedUrl ? bidiHtmlDir(Vars.formattedUrl) : bidiTextDir(longUrl()), style:\'word-break:break-all;\'}"> </div> </div> <div data-if="Vars.richSnippet && Vars.richSnippet.action" class="gs-actions" data-body="render(\'action\',richSnippet,{url:unescapedUrl,target:target})"> </div> <div class="gs-richsnippet-box" style="display: none;"> </div> <div class="gs-per-result-labels" data-attr="{url:unescapedUrl}"> <span data-body="localizedMessages[\'labeled\']" data-if="Vars.perResultLabels"></span> <div data-foreach="Vars.perResultLabels" data-attr="0" data-if="Vars.perResultLabels"> <a class="gs-label" data-attr="{\'data-refinementLabel\': Cur[\'label\'], \'label-with-op\': Cur[\'label_with_op\'], \'dir\' : bidiTextDir(Cur.anchor)}" data-body="Cur.anchor"></a> <span data-body="bidiTextMarkAfter(Cur.anchor)"></span> </div> </div> </div> </div> </div> </div> <div id="base_imageResult_image" ><a data-attr="{ \'class\':imageClass }" ><img data-attr="{ \'src\':Vars.tbLargeUrl || Vars.tbMedUrl || Vars.tbUrl, \'title\':titleNoFormatting, \'alt\': titleNoFormatting, \'class\':imageClass }" ></a ></div> <div id="base_imageResult_text" ><div class="gs-title gs-ellipsis" ><a class="gs-title" data-attr="{ href:originalContextUrl, target:target, dir:bidiHtmlDir(title) }" data-body="html(title)"></a ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-top" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ><div class="gs-snippet gs-bidi-start-align gs-ellipsis" data-attr="{title:contentNoFormatting, dir:bidiHtmlDir(content)}" data-body="html(content)" ></div ><div class="gs-size gs-ellipsis" data-body="width + \'&times;\' + height + \' &sdot; \'" ></div ><div class="gs-visibleUrl gs-bidi-start-align gs-ellipsis gsc-url-bottom" data-attr="{title:visibleUrl, dir:bidiTextDir(visibleUrl)}" data-body="visibleUrl" ></div ></div> <div id="base_imageResult_content" ><div data-body="render(\'base_imageResult_image\', Vars)" class="gs-image-box" ></div ><div data-body="render(\'base_imageResult_text\', Vars)" class="gs-text-box gs-ellipsis" ></div ></div> <div id="base_imageResult_popup" ><div class="gs-result gs-imageResult gs-imageResult-popup" ><div class="gs-image-thumbnail-box" ><div data-body="render(\'base_imageResult_image\', Vars, { imageClass: \'gs-image gs-image-scalable\' })" class="gs-image-box" ></div ></div ><div data-body="render(\'base_imageResult_content\', Vars, { imageClass: \'gs-image\' })" class="gs-image-popup-box" ></div ></div ><div class="gs-imagePreviewArea-invisible" ><a class="gs-previewLink" data-attr="{href:Vars.originalContextUrl, target:target}" ></a ><div class="gs-previewSnippet" ><div class="gs-previewTitle" ><a class="gs-previewLink"data-attr="{href:Vars.originalContextUrl, target:target}" data-body="titleNoFormatting" ></a ></div ><div class="gs-previewUrl" data-body="visibleUrl" ></div ><div class="gs-previewSize" data-body="width + \'&times;\' + height" ></div ><div class="gs-previewDescription" data-body="contentNoFormatting" ></div ></div ></div ></div> <div id="base_thumbnail"> <div data-attr="0" data-vars="{tn:(Vars.cseThumbnail && cseThumbnail.src) ? cseThumbnail : ( (Vars.thumbnail && thumbnail.src) ? thumbnail : {src:Vars.document && document.thumbnailUrl})}"> <div class="gsc-table-cell-thumbnail gsc-thumbnail" data-if="tn.src"> <div data-if="!tn.width || !tn.height || tn.width >= tn.height * 7 / 5" class="gs-image-box gs-web-image-box gs-web-image-box-landscape"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> <div data-elif="true" class="gs-image-box gs-web-image-box gs-web-image-box-portrait"> <a class="gs-image" data-attr="{href:url,target:target}"> <img class="gs-image" data-attr="{ src:tn.src, alt:localizedMessages[\'thumbnail-image\'], }"> </a> </div> </div> </div> </div> <div id="base_action"> <div data-foreach="Vars.action" data-attr="0"> <div data-attr="{\'class\': \'gs-action \' + Cur[\'class\']}" data-if="Cur.url && Cur.label"> <a class="gs-action" data-attr="{href:Cur.url,target:target,dir:bidiTextDir(Cur.label)}" data-body="Cur.label"></a> </div> </div> </div> </div> ';
    var bk = {
            $q: function(a) {
                ak = a
            }
        },
        ck = de(""),
        ak;
    bk.Ol = function(a) {
        dk.unshift(a);
        return dk
    };
    var dk = ["base_", ""],
        fk = function(a, b) {
            ek[a] || (ek[a] = eval("[function(Vars,render,html,bidiTextDir,bidiHtmlDir,bidiTextMarkAfter,bidiHtmlMarkAfter, localizedMessages){with(Vars)return(" + a + ")}][0]"));
            return ek[a](b, bk.render, hj, Ci, Di, Ei, Fi, Ii)
        };
    bk.Gx = function(a) {
        Ua();
        fk = a
    };
    var ek = {},
        gk = function() {
            var a = 3 === ak ? Yj : Zj;
            a && (E(document.body, hj(a, {
                yb: !0
            })), Zj = Yj = "")
        };
    bk.render = function(a, b) {
        var c = 0;
        for (gk(); !a.appendChild;) {
            if (c >= dk.length) return hj(a + " not found");
            a = sj(dk[c++] + a) || a
        }
        for (var d = {}, e = 1; e < arguments.length; e++)
            for (var f in arguments[e]) d[f] = arguments[e][f];
        var h;
        try {
            var k = hj(ck, {
                yb: !0
            });
            f = e = !1;
            var l, m, u = function(S) {
                S = "data-" + S;
                l = (h = m.getAttribute(S)) ? fk(h, d) : "";
                t.removeAttribute && t.removeAttribute(S);
                return h
            };
            for (m = a.firstChild; m; m = e ? m : m.nextSibling) {
                var t = m.cloneNode(!1);
                if (1 != m.nodeType)(3 != m.nodeType || m.nodeValue.match(/\S/)) && E(k, t);
                else {
                    u("foreach");
                    !e && h && (d.Foreach = l && "function" == typeof l.join ? l : [l], c = 0, e = !0);
                    if (e)
                        if (c < d.Foreach.length) d.Cur = d.Foreach[d.Index = c++];
                        else {
                            e = !1;
                            continue
                        }
                    u("if") && (f = !1);
                    if (h || u("elif"))
                        if (f || !l) continue;
                        else f = !0;
                    if (!u("attr") || l) {
                        var z = t;
                        E(k, z);
                        if (h)
                            for (var v in l) void 0 != l[v] && ("class" == v ? z.className = l[v] : z.setAttribute(v, l[v]))
                    } else t = k;
                    if (u("facetgroup"))
                        for (z = 0; z < d.display_facets.length; z++) {
                            var U = {
                                index: ""
                            };
                            1 == d.display_facets.length ? U = {
                                    index: "sizeone"
                                } : 0 == z ? U = {
                                    index: "first"
                                } : z == d.display_facets.length - 1 &&
                                (U = {
                                    index: "last"
                                });
                            E(t, (0, bk.render)("facetGroupEntry", d.display_facets[z], U))
                        }
                    var ca = u("body") ? l && l instanceof Node ? l : Zi("" + l) : (0, bk.render)(m, d, u("vars") ? l : {});
                    try {
                        ca && E(t, ca)
                    } catch (S) {}
                }
            }
            return k
        } catch (S) {
            return hj(S.toString() + ": " + h, {
                yb: !0
            })
        }
    };
    var hk = function(a, b, c, d, e) {
        e = void 0 === e ? null : e;
        this.kx = a;
        this.Ca = b;
        this.sc = c;
        this.du = d;
        this.ur = e ? e : (new mg(1151, "0")).Zf()
    };
    hk.prototype.cz = function(a, b, c, d) {
        a = (new vi).Qz(1).rz(c + ": " + a).Kz(this.kx).wf(this.Ca).Xz(Date.now()).qz(this.sc).Rz(b).xz(this.du);
        d && a.Tz(d);
        this.ur.Et(a);
        this.ur.flush()
    };
    hk.prototype.vd = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Array.prototype.slice.call(arguments, 0) || [];
            try {
                return d.apply(this, f)
            } catch (h) {
                throw "string" === typeof h && (h = {
                    message: h
                }), e.cz(h.message, a, b, c), h.message;
            }
        }
    };
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    var ik = function(a, b) {
        this.nh = [];
        this.sp = a;
        this.Jm = b || null;
        this.df = this.Ld = !1;
        this.fc = void 0;
        this.el = this.Ds = this.Zh = !1;
        this.Eh = 0;
        this.Ra = null;
        this.$h = 0
    };
    g = ik.prototype;
    g.cancel = function(a) {
        if (this.Ld) this.fc instanceof ik && this.fc.cancel();
        else {
            if (this.Ra) {
                var b = this.Ra;
                delete this.Ra;
                a ? b.cancel(a) : b.Hs()
            }
            this.sp ? this.sp.call(this.Jm, this) : this.el = !0;
            this.Ld || this.Vi(new jk(this))
        }
    };
    g.Hs = function() {
        this.$h--;
        0 >= this.$h && this.cancel()
    };
    g.xm = function(a, b) {
        this.Zh = !1;
        this.vl(a, b)
    };
    g.vl = function(a, b) {
        this.Ld = !0;
        this.fc = b;
        this.df = !a;
        this.on()
    };
    g.dm = function() {
        if (this.Ld) {
            if (!this.el) throw new kk(this);
            this.el = !1
        }
    };
    g.Ks = function(a) {
        this.dm();
        this.vl(!0, a)
    };
    g.Vi = function(a) {
        this.dm();
        this.vl(!1, a)
    };
    g.Xr = function(a, b) {
        return this.Pf(a, null, b)
    };
    g.Zr = function(a, b) {
        return this.Pf(null, a, b)
    };
    g.Pf = function(a, b, c) {
        this.nh.push([a, b, c]);
        this.Ld && this.on();
        return this
    };
    g.then = function(a, b, c) {
        var d, e, f = new zf(function(h, k) {
            e = h;
            d = k
        });
        this.Pf(e, function(h) {
            h instanceof jk ? f.cancel() : d(h)
        });
        return f.then(a, b, c)
    };
    ik.prototype.$goog_Thenable = !0;
    ik.prototype.Rw = function(a) {
        return a instanceof Error
    };
    ik.prototype.no = function() {
        return Rb(this.nh, function(a) {
            return "function" === typeof a[1]
        })
    };
    ik.prototype.on = function() {
        if (this.Eh && this.Ld && this.no()) {
            var a = this.Eh,
                b = lk[a];
            b && (b.Hy(), delete lk[a]);
            this.Eh = 0
        }
        this.Ra && (this.Ra.$h--, delete this.Ra);
        a = this.fc;
        for (var c = b = !1; this.nh.length && !this.Zh;) {
            var d = this.nh.shift(),
                e = d[0],
                f = d[1];
            d = d[2];
            if (e = this.df ? f : e) try {
                var h = e.call(d || this.Jm, a);
                void 0 !== h && (this.df = this.df && (h == a || this.Rw(h)), this.fc = a = h);
                if (yf(a) || "function" === typeof x.Promise && a instanceof x.Promise) this.Zh = c = !0
            } catch (k) {
                a = k, this.df = !0, this.no() || (b = !0)
            }
        }
        this.fc = a;
        c && (h = bb(this.xm,
            this, !0), c = bb(this.xm, this, !1), a instanceof ik ? (a.Pf(h, c), a.Ds = !0) : a.then(h, c));
        b && (a = new mk(a), lk[a.Fb] = a, this.Eh = a.Fb)
    };
    var kk = function() {
        jb.call(this)
    };
    hb(kk, jb);
    kk.prototype.message = "Deferred has already fired";
    kk.prototype.name = "AlreadyCalledError";
    var jk = function() {
        jb.call(this)
    };
    hb(jk, jb);
    jk.prototype.message = "Deferred was canceled";
    jk.prototype.name = "CanceledError";
    var mk = function(a) {
        this.Fb = x.setTimeout(bb(this.BA, this), 0);
        this.rg = a
    };
    mk.prototype.BA = function() {
        delete lk[this.Fb];
        throw this.rg;
    };
    mk.prototype.Hy = function() {
        x.clearTimeout(this.Fb)
    };
    var lk = {};
    var rk = function(a, b) {
            var c = b || {};
            b = c.document || document;
            var d = sd(a).toString(),
                e = (new Ge(b)).createElement("SCRIPT"),
                f = {
                    pq: e,
                    Hf: void 0
                },
                h = new ik(nk, f),
                k = null,
                l = null != c.timeout ? c.timeout : 5E3;
            0 < l && (k = window.setTimeout(function() {
                ok(e, !0);
                h.Vi(new pk(1, "Timeout reached for loading script " + d))
            }, l), f.Hf = k);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (ok(e, c.VC || !1, k), h.Ks(null))
            };
            e.onerror = function() {
                ok(e, !0, k);
                h.Vi(new pk(0, "Error while loading script " +
                    d))
            };
            f = c.attributes || {};
            $c(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            Ae(e, f);
            e.src = sd(a);
            re(e);
            qk(b).appendChild(e);
            return h
        },
        qk = function(a) {
            var b = (a || document).getElementsByTagName("HEAD");
            return b && 0 !== b.length ? b[0] : a.documentElement
        },
        nk = function() {
            if (this && this.pq) {
                var a = this.pq;
                a && "SCRIPT" == a.tagName && ok(a, !0, this.Hf)
            }
        },
        ok = function(a, b, c) {
            null != c && x.clearTimeout(c);
            a.onload = Va;
            a.onerror = Va;
            a.onreadystatechange = Va;
            b && window.setTimeout(function() {
                Ee(a)
            }, 0)
        },
        pk = function(a, b) {
            var c = "Jsloader error (code #" +
                a + ")";
            b && (c += ": " + b);
            jb.call(this, c);
            this.code = a
        };
    hb(pk, jb);
    var Q = function() {
            this.Zy = sk;
            sk += 1;
            this.jb = {
                width: 100,
                height: 75
            };
            this.Kb = "_blank";
            this.Na("small");
            this.jm();
            this.cd = this.kd = this.Ta = this.Nf = this.td = this.Ah = this.ri = this.Qe = null;
            this.results = [];
            this.Bh = {};
            this.Cc = this.Ib = "";
            if ("object" === typeof window && window.location && window.location.hostname && "" != window.location.hostname) {
                if ("" == kj) {
                    var a = window.location.hostname.toLowerCase().split(".");
                    2 > a.length && (kj = ".com");
                    var b = a.pop();
                    a = a.pop();
                    kj = 2 == b.length ? lj[a] && 1 == lj[a][b] ? "." + a + "." + b : "." + b : ".com"
                }
                b =
                    kj
            } else b = ".com";
            this.fo = b;
            this.an = this.Xi = this.fd = this.Kd = null;
            this.M = !1;
            this.Ca = "none";
            this.gh = this.sb = null
        },
        sk = 0;
    y("module$exports$cse$search.Search.BASE", "https://www.google.com/cse/static");
    var tk = /style=([^&]*)/;
    y("module$exports$cse$search.Search.LARGE_RESULTSET", "large");
    y("module$exports$cse$search.Search.SMALL_RESULTSET", "small");
    y("module$exports$cse$search.Search.FILTERED_CSE_RESULTSET", "filtered_cse");
    y("module$exports$cse$search.Search.LARGE_RESULTS", 8);
    y("module$exports$cse$search.Search.SMALL_RESULTS", 4);
    y("module$exports$cse$search.Search.FILTERED_CSE_RESULTS", 10);
    y("module$exports$cse$search.Search.LINK_TARGET_TOP", "_top");
    y("module$exports$cse$search.Search.LINK_TARGET_SELF", "_self");
    y("module$exports$cse$search.Search.LINK_TARGET_PARENT", "_parent");
    y("module$exports$cse$search.Search.LINK_TARGET_BLANK", "_blank");
    y("module$exports$cse$search.Search.ORDER_BY_RELEVANCE", "order-by-relevance");
    y("module$exports$cse$search.Search.ORDER_BY_DATE", "order-by-date");
    y("module$exports$cse$search.Search.ORDER_BY_ASCENDING_DATE", "order-by-ascending-date");
    y("module$exports$cse$search.Search.RESTRICT_TYPE", "restrict-type");
    y("module$exports$cse$search.Search.RESTRICT_SAFESEARCH", "restrict-safesearch");
    y("module$exports$cse$search.Search.SAFESEARCH_STRICT", "active");
    y("module$exports$cse$search.Search.SAFESEARCH_OFF", "off");
    y("module$exports$cse$search.Search.SAFESEARCH_MODERATE", "moderate");
    y("module$exports$cse$search.Search.RESTRICT_EXTENDED_ARGS", "restrict-extended");
    y("module$exports$cse$search.Search.MOBILE_LAYOUT_ENABLED", "enabled");
    y("module$exports$cse$search.Search.MOBILE_LAYOUT_DISABLED", "disabled");
    y("module$exports$cse$search.Search.MOBILE_LAYOUT_FORCED", "forced");
    g = Q.prototype;
    g.Fm = function(a) {
        a.html && delete a.html;
        if (a.type && "SPELL_CORRECTED_RESULTS" == a.type) {
            var b = L("gs-result");
            var c = $i({
                    text: Ii["showing-results-for"] + " ",
                    className: "gs-spelling",
                    Kc: !0
                }),
                d = document.createElement("a");
            si(d, Bi(this.ec(a.correctedAnchor)));
            c.appendChild(d);
            b.appendChild(c);
            c = $i({
                text: Ii["search-instead-for"] + " ",
                className: "gs-spelling",
                Kc: !0
            });
            D(c, "gs-spelling-original");
            d = document.createElement("a");
            si(d, Bi(this.ec(a.originalAnchor)));
            c.appendChild(d);
            b.appendChild(c)
        } else b = $i({
            text: Ii.dym +
                " ",
            className: "gs-spelling",
            Kc: !0
        }), D(b, "gs-result"), c = document.createElement("a"), si(c, Bi(this.ec(a.anchor))), b.appendChild(c);
        a.html = b
    };
    g.rc = function() {
        return null
    };
    g.ec = function(a) {
        return a
    };
    g.Yd = function() {
        return !1
    };
    g.ee = function(a) {
        return a
    };
    g.hi = function() {
        return new Q
    };
    g.Qk = function() {};
    g.Ue = function() {
        return null
    };
    g.jg = function() {
        return null
    };
    g.Ak = function() {};
    g.ni = function() {};
    g.li = function() {};
    var uk = function() {
        if (google.search && google.search.Sr) {
            var a = decodeURIComponent(google.search.Sr).match(tk);
            if (a && a[1]) return a[1]
        }
        return null
    };
    Q.prototype.In = function() {
        return "cx" === this.jg() ? this.Ue() : null
    };
    Q.prototype.ym = function(a) {
        a.kd = this.kd;
        a.ve = this.ve;
        a.Kb = this.Kb;
        a.xa = this.xa;
        a.td = this.td;
        this.jb && (a.jb = {
            width: this.jb.width,
            height: this.jb.height
        });
        a.ai = this.ai;
        a.Ub = this.Ub;
        a.Vb = this.Vb;
        a.Sc = this.Sc;
        a.Ca = this.Ca;
        a.sb = this.sb
    };
    Q.prototype.hc = function(a) {
        this.kd = null == a || "" == a ? null : a
    };
    Q.prototype.setQueryAddition = Q.prototype.hc;
    Q.prototype.Op = function(a, b) {
        a = "";
        this.Vb && this.M ? (a = this.Sc ? "https://csqr-autopush.corp.google.com/cse/element/v1" : "https://cse.google.com/cse/element/v1", a += "?rsz=" + this.xa + "&num=" + this.Vc() + "&hl=en") : this.Ub && this.M && (a = "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=" + this.xa + "&num=" + this.Vc() + "&hl=en&prettyPrint=false");
        this.ve && (a += "&source=" + encodeURIComponent(this.ve));
        this.fo && (a += "&gss=" + this.fo);
        b && (a += "&start=" + b);
        this.Ca && (a += "&cselibv=" +
            this.Ca);
        return a
    };
    Q.prototype.Uz = function(a) {
        this.ve = a
    };
    Q.prototype.setSearcherSrc = Q.prototype.Uz;
    Q.prototype.Ma = function(a) {
        this.Kb = a
    };
    Q.prototype.setLinkTarget = Q.prototype.Ma;
    g = Q.prototype;
    g.Nn = function() {
        return this.Zb
    };
    g.$e = function() {
        return this.Kb && "" != this.Kb ? this.Kb : null
    };
    g.Uc = function() {
        null == this.Qe && (this.Qe = "gsc-" + this.Ta + "Result");
        return this.Qe
    };
    g.vg = function() {
        null == this.ri && (this.ri = "gs-" + this.Ta + "Result");
        return this.ri
    };
    g.Aj = function() {
        null == this.Ah && (this.Ah = Ii[this.Ta]);
        return this.td ? this.td : this.Ah
    };
    Q.prototype.getTabLabel = Q.prototype.Aj;
    Q.prototype.mv = function() {
        return this.xa
    };
    Q.prototype.getResultSetSize = Q.prototype.mv;
    Q.prototype.Na = function(a) {
        this.Sq(a)
    };
    Q.prototype.setResultSetSize = Q.prototype.Na;
    Q.prototype.wf = function(a) {
        a && (this.Ca = a)
    };
    Q.prototype.setCselibVersion = Q.prototype.wf;
    Q.prototype.mi = function(a, b, c) {
        this.sb = new hk(a, this.Ca, b, c)
    };
    Q.prototype.createLogUploader = Q.prototype.mi;
    Q.prototype.Sq = function(a) {
        var b = -1;
        "number" === typeof a ? b = a : isNaN(parseInt(a, 10)) || (b = parseInt(a, 10));
        if (0 < b && 8 >= b) this.xa = b;
        else switch (a) {
            case "large":
                this.xa = "large";
                break;
            default:
            case "small":
                this.xa = "small"
        }
    };
    Q.prototype.Rq = function(a, b) {
        var c = void 0 === b ? {} : b;
        b = void 0 === c.hk ? 1 : c.hk;
        c = void 0 === c.fk ? 10 : c.fk;
        var d = -1;
        "number" === typeof a ? d = a : isNaN(parseInt(a, 10)) || (d = parseInt(a, 10));
        d >= b && d <= c ? this.xa = d : "filtered_cse" == a ? this.xa = a : this.Sq(a)
    };
    Q.prototype.execute = function(a, b, c) {
        var d = void 0;
        this.gh = null;
        if (c && 0 < c)
            if (this.cursor && this.cursor.pages && this.cursor.pages[c - 1] && this.cursor.pages[c - 1].start) d = this.cursor.pages[c - 1].start;
            else {
                var e = this.Vc();
                e && (d = e * (c - 1))
            }
        c = this.sg(a, void 0, d);
        (b = pj(b)) && (c += "&" + b);
        b = this.Bh.hasOwnProperty(c);
        if (c == this.Cc && !b) return this.cn(), !1;
        d = (new Date).getTime();
        if (b && 5E3 > d - this.Bh[c]) return !1;
        b && (d = -1);
        this.Bh[c] = d;
        this.cursor = null;
        this.Ib = a;
        this.Cc = c;
        this.Zb = this.xg ? this.xg() : null;
        this.fn(c, this.ip.bind(this));
        return !0
    };
    Q.prototype.execute = Q.prototype.execute;
    Q.prototype.ip = function(a) {
        this.M && (this.Vb || this.Ub) ? Ri(vk(this, a)) : Pi(this.Vn(this.Ib, a))
    };
    Q.prototype.fn = function(a, b, c) {
        c = void 0 === c ? {} : c;
        for (var d in c) a = a + "&" + d + "=" + c[d];
        b(a)
    };
    var vk = function(a, b) {
        var c = x.google.search.cse,
            d = "api" + Math.floor(2E4 * Math.random());
        c[d] = function(e) {
            var f, h, k = null != (h = null == (f = e.error) ? void 0 : f.code) ? h : 200,
                l, m;
            f = null != (m = null == (l = e.error) ? void 0 : l.message) ? m : null;
            var u, t;
            l = null != (t = null == (u = e.error) ? void 0 : u.submessage) ? t : null;
            var z, v;
            u = null != (v = null == (z = e.error) ? void 0 : z.url) ? v : null;
            a.jd(e, k, f, k, b, l, u);
            delete c[d]
        };
        return b + "&callback=google.search.cse." + d
    };
    Q.prototype.Vn = function(a, b) {
        var c = b + (this.Zb ? "&" + this.Zb : "");
        a = this.Wh(a, b);
        return c + ("&context=" + a)
    };
    Q.prototype.ho = function(a, b) {
        this.cursor && a < this.cursor.pages.length && (a = this.sg(this.Ib, void 0, this.cursor.pages[a].start), b && (a += "&rsToken=" + b), this.cursor = null, this.Cc = a, this.M && (this.Vb || this.Ub) ? Ri(vk(this, a)) : Pi(this.Vn(this.Ib, a)))
    };
    Q.prototype.gotoPage = Q.prototype.ho;
    Q.prototype.wg = function() {
        return this.cursor && null != this.cursor.currentPageIndex ? this.cursor.currentPageIndex + 1 : null
    };
    Q.prototype.Vc = function() {
        return isNaN(parseInt(this.xa, 10)) ? "small" == this.xa ? 4 : "large" == this.xa ? 8 : "filtered_cse" == this.xa ? 10 : 4 : parseInt(this.xa, 10)
    };
    Q.prototype.getNumResultsPerPage = Q.prototype.Vc;
    Q.prototype.Nu = function(a, b, c) {
        b = this.sg(a, b);
        if (null == c || void 0 == c) c = this.Wh(a, b);
        return b + ("&context=" + c) + "&key=notsupplied&v=1"
    };
    Q.prototype.getExecuteUrl = Q.prototype.Nu;
    Q.prototype.Pl = function(a) {
        var b = gj("http://code.google.com/apis/ajaxsearch/faq.html", Ii.watermark + " - " + this.at(), "_blank", "gs-watermark");
        E(a, b)
    };
    Q.prototype.at = function() {
        var a = new Date;
        return a.getMonth() + 1 + "/" + a.getFullYear()
    };
    Q.prototype.jm = function() {
        this.results = []
    };
    Q.prototype.clearResults = Q.prototype.jm;
    Q.prototype.cn = function() {
        this.nm && this.nm()
    };
    Q.prototype.$n = function() {
        return {
            web: 1,
            image: 2
        }[this.Ta] || 0
    };
    Q.prototype.jd = function(a, b, c, d, e, f, h) {
        var k = this;
        this.sb ? this.sb.vd(this.Ib, "onSearchComplete", this.$n(), function() {
            return k.xp(a, b, c, d, e, f, h)
        }).apply(this) : this.xp(a, b, c, d, e, f, h)
    };
    Q.prototype.onSearchComplete = Q.prototype.jd;
    g = Q.prototype;
    g.tw = function(a) {
        var b = this,
            c, d = {
                gp: null == (c = this.sb) ? void 0 : c.vd,
                query: this.Ib,
                Yy: this.$n()
            };
        return Gj(this.In(), this.vg(), d, rk, a, function(e) {
            b.gh = e;
            b.Zb = b.xg ? b.xg() : null;
            var f = {};
            b.fn(b.Cc, b.ip.bind(b), (f["g-recaptcha-response"] = "" + e, f))
        })
    };
    g.fw = function() {
        return !!this.gh
    };
    g.xp = function(a, b, c, d, e, f, h) {
        e && delete this.Bh[e];
        if (!e || !this.Cc || e === this.Cc || e === this.Cc + "&g-recaptcha-response=" + (this.gh || "")) {
            if (this.results && 0 < this.results.length)
                for (e = 0; e < this.results.length; e++) this.results[e].html && wk(this.results[e].html);
            this.results = a && a.results && 0 < a.results.length ? a.results : [];
            this.completionStatus = b;
            this.hashStatus = d;
            c && (this.Kd = c);
            f && (this.Xi = f);
            h && (this.an = h);
            a && a.cursor && a.cursor.pages && 0 < a.cursor.pages.length ? this.cursor = a.cursor : "cursor" in this && delete this.cursor;
            if (a && a.context) {
                this.context = a.context;
                b = [];
                if (a.context.facets && 0 < parseInt(a.context.total_results, 10)) {
                    for (c = 0; c < a.context.facets.length; c++) a.context.facets[c].facet_search_label && (d = a.context.facets[c], f = parseInt(d.count, 10), 0 < f && (d.count = f, d.width = Math.ceil(100 * f / parseInt(a.context.total_results, 10)), b.push(d)));
                    0 < b.length && b.sort(function(k, l) {
                        return l.count - k.count
                    })
                }
                this.context.display_facets = b
            } else "context" in this && delete this.context;
            a && a.promotions ? this.promotions = a.promotions : "promotions" in
                this && delete this.promotions;
            a && a.omittedResults ? this.omittedResults = a.omittedResults : "omittedResults" in this && delete this.omittedResults;
            a && a.spelling ? this.spelling = a.spelling : "spelling" in this && delete this.spelling;
            a && a.findMoreOnGoogle ? this.findMoreOnGoogle = a.findMoreOnGoogle : "findMoreOnGoogle" in this && delete this.findMoreOnGoogle;
            this.os();
            this.cn()
        }
    };
    g.Tq = function(a) {
        this.ai = a
    };
    g.os = function() {
        for (var a = 0; a < this.results.length; a++) this.Re(this.results[a]);
        (a = this.context) && this.li(a)
    };
    g.Uq = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.nm = Ui(a, b, c)
    };
    Q.prototype.setSearchCompleteCallback = Q.prototype.Uq;
    Q.prototype.Az = function(a, b) {
        this.xg = Ui(a, b)
    };
    var yk = function(a, b, c) {
            return 3 == a[b].length ? new xk(a[b][1] || c && c.prefetchQuery, a[b][2], a[b][0], c) : new xk("", "", a[b], c)
        },
        zk = function(a, b) {
            if (a.length)
                for (var c = 0; c < a.length; c++)
                    if (null == a[c]) {
                        a[c] = b;
                        var d = c;
                        break
                    }
            d || (d = a.length, a.push(b));
            return d
        };
    y("module$exports$cse$search.Search.AllocateCompletionMapContext", zk);
    Q.prototype.vb = function(a) {
        this.td = a
    };
    Q.prototype.setUserDefinedLabel = Q.prototype.vb;
    Q.prototype.bA = function(a) {
        this.Nf = a
    };
    Q.prototype.setUserDefinedClassSuffix = Q.prototype.bA;
    y("module$exports$cse$search.Search.scaleImage", function(a, b, c, d, e) {
        var f = Math.min(Math.min(c.width / a, c.height / b), 1);
        a = {
            width: Math.round(a * f),
            height: Math.round(b * f)
        };
        d && (d.width = a.width, d.height = a.height, e && (d.style.left = (c.width - a.width) / 2 + "px"));
        return a
    });
    var Ak;

    function wk(a) {
        Ak || (Ak = $i());
        Ak.appendChild(a);
        si(Ak, fe)
    }
    g = Q.prototype;
    g.lu = function(a) {
        var b = a || this.Kd;
        a = L(this.vg());
        D(a, "gs-result");
        D(a, "gs-error-result");
        b = $i({
            text: b,
            className: "gs-snippet"
        });
        E(a, b);
        return {
            html: a
        }
    };
    g.nu = function(a) {
        var b = void 0 === a ? {} : a;
        a = void 0 === b.message ? this.Kd : b.message;
        var c = void 0 === b.rA ? this.Xi : b.rA,
            d = void 0 === b.link ? this.an : b.link;
        b = L(this.vg());
        D(b, "gs-result");
        D(b, "gs-stylized-error-result");
        E(b, $i({
            text: a,
            className: "gs-stylized-error-message"
        }));
        E(b, $i({
            text: c,
            className: "gs-stylized-error-submessage"
        }));
        d && (a = fj(d, Ii["learn-more"]), D(a, "gs-stylized-error-link"), E(b, a));
        return {
            html: b
        }
    };
    g.mu = function(a) {
        var b = a || this.fd;
        a = {};
        var c = L(this.vg());
        D(c, "gs-result");
        D(c, "gs-no-results-result");
        b = $i({
            text: b,
            className: "gs-snippet"
        });
        E(c, b);
        a.html = c;
        return a
    };
    g.Iq = function(a) {
        this.jb = a
    };
    g.Wu = function() {
        return this.Cc
    };
    Q.prototype.getLastQueryUrl = Q.prototype.Wu;
    var xk = function(a, b, c) {
        this.query = a;
        this.Qp = b;
        this.ta = c
    };
    Q.prototype.Fq = function(a) {
        this.Vb = a
    };
    Q.prototype.Qw = function() {
        return this.Vb
    };
    Q.prototype.isEnableCsqrResults = Q.prototype.Qw;
    Q.prototype.Eq = function(a) {
        this.Sc = a
    };
    Q.prototype.Pw = function() {
        return this.Sc
    };
    Q.prototype.isEnableCsqrDevStack = Q.prototype.Pw;
    Q.prototype.Dq = function(a) {
        this.Ub = a
    };
    Q.prototype.Ow = function() {
        return this.Ub
    };
    Q.prototype.isEnableApiary = Q.prototype.Ow;
    var Bk = function() {};
    g = Bk.prototype;
    g.Th = function() {
        return []
    };
    g.Sh = function() {
        return {}
    };
    g.Jk = function() {
        return ""
    };
    g.ld = function() {
        return null
    };
    g.Vk = function() {};
    g.type = function() {
        return null
    };
    g.clone = function() {
        return new Bk
    };
    var Ck = function(a, b) {
        this.vr = "cx";
        this.Kk = a;
        this.Fc = (void 0 === b ? null : b) || null
    };
    g = Ck.prototype;
    g.type = function() {
        return this.vr
    };
    g.Jk = function() {
        return this.Kk
    };
    g.ld = function() {
        return this.Fc
    };
    g.Vk = function(a) {
        this.Fc = a
    };
    g.Th = function() {
        var a = [];
        this.Fc && (0 == this.Fc.indexOf("more:") || 0 == this.Fc.indexOf("less:") ? a.push(this.Fc) : a.push("more:" + this.Fc));
        return a
    };
    g.Sh = function() {
        var a = {};
        return a[this.vr] = this.Kk, a
    };
    g.clone = function() {
        return new Ck(this.Kk, this.Fc)
    };

    function Dk(a, b) {
        if (null == a) throw Error("Missing CX value: " + a);
        if (/^[\s\xa0]*$/.test(a)) throw Error("Invalid or missing CX value: '" + a + "'");
        return new Ck(a, b)
    };
    var Ek = bk,
        Fk = function() {
            Q.call(this);
            this.Ta = "image";
            this.$ = this.ab = this.ub = null;
            this.Wa = {};
            this.Y = new Bk;
            this.pb = null
        };
    Mi(Fk, Q);
    y("module$exports$cse$CustomImageSearch.CSE_LARGE_RESULTSET", 20);
    var Gk = [],
        Hk = {
            as_dt: !0,
            as_epq: !0,
            as_eq: !0,
            as_filetype: !0,
            as_lq: !0,
            as_nlo: !0,
            as_nhi: !0,
            as_oq: !0,
            as_q: !0,
            as_qdr: !0,
            as_rights: !0,
            as_rq: !0,
            as_sitesearch: !0,
            cr: !0,
            c2coff: !0,
            filter: !0,
            gl: !0,
            hq: !0,
            imgsz: !0,
            imgc: !0,
            imgcolor: !0,
            imgtype: !0,
            lr: !0,
            query: !0,
            sort: !0
        };
    g = Fk.prototype;
    g.hi = function() {
        var a = new Fk;
        this.ym(a);
        a.ub = this.ub;
        a.ab = this.ab;
        a.$ = this.$;
        a.Wa = this.Wa;
        a.Y = this.Y.clone();
        a.M = this.M;
        a.pb = this.pb;
        return a
    };
    g.ee = function(a) {
        a = a.replace(/\s+$/, "").replace(/^\s+/, "");
        return a.replace(/\s+/g, "_").toLowerCase()
    };
    g.Yd = function(a) {
        return this.M ? this.Y.ld() == this.ee(a) : !1
    };
    g.ec = function(a) {
        var b = this.Y.ld();
        return this.M && b ? a.replace(new RegExp("[ +]?" + b.replace(/^[\s\xa0]+/, "")), "") : a
    };
    g.Uc = function() {
        return this.Qe = ["gsc-" + this.Ta + "Result", "gsc-" + this.Ta + "Result-popup"].join(" ")
    };
    y("module$exports$cse$CustomImageSearch.RawCompletion", function(a, b, c, d, e) {
        var f = 0;
        a && (f = parseInt(a, 10));
        a = yk(Gk, f, b);
        Gk[f] = null;
        a.ta.jd(b, c, d, e, a.Qp)
    });
    Fk.prototype.Wh = function(a, b) {
        return zk(Gk, [this, a, b])
    };
    Fk.prototype.sg = function(a, b, c) {
        b = this.Op(null == b ? "CustomImageSearch.RawCompletion" : b, c);
        this.Ub && this.M && (b += "&searchtype=image");
        a = [a];
        this.kd && a.push(this.kd);
        a = a.concat(this.Y.Th()).join(" ");
        var d = this.Y.Sh(),
            e = [];
        for (f in d) e.push(f + "=" + d[f]);
        var f = "&" + e.join("&");
        f = f + "&q=" + encodeURIComponent(a);
        "off" == this.ab || "active" == this.ab ? f += "&safe=" + this.ab : this.ub && (f += "&safe=" + this.ub);
        this.pb && (f += "&cse_tok=" + this.pb);
        this.Wa && (a = pj(this.Wa)) && (f += "&" + a);
        this.$ && (f += "&exp=" + this.$.join());
        b += f;
        this.cd =
            f;
        c && 0 != c && (this.cd = this.cd + "&start=" + c);
        window.google.loader.GoogleLocale && this.Ub && this.M && (b += "&googlehost=" + encodeURIComponent(window.google.loader.GoogleLocale));
        return b
    };
    Fk.prototype.Re = function(a) {
        a.html && delete a.html;
        a.target = this.$e() || void 0;
        a.html = Ek.render("imageResult_popup", a);
        this.Pl(a.html)
    };
    Fk.prototype.createResultHtml = Fk.prototype.Re;
    Fk.prototype.yf = function(a, b) {
        this.Y = Dk(a, b);
        this.Y instanceof Ck && (this.M = !0)
    };
    Fk.prototype.setSiteRestriction = Fk.prototype.yf;
    g = Fk.prototype;
    g.jg = function() {
        return this.M ? this.Y.type() : null
    };
    g.Ue = function() {
        return this.M ? this.Y.Jk() : null
    };
    g.rc = function() {
        return this.M ? this.Y.ld() : null
    };
    g.Qk = function(a) {
        this.M && a && this.Y.Vk(a)
    };
    g.vf = function(a) {
        a && (this.pb = a)
    };
    g.Na = function(a) {
        this.Rq(a, {
            hk: 1,
            fk: 20
        })
    };
    Fk.prototype.setResultSetSize = Fk.prototype.Na;
    Fk.prototype.Vc = function() {
        var a = Q.prototype.Vc.call(this);
        return this.M && a && "number" != typeof this.xa ? 2 * a : a
    };
    Fk.prototype.getNumResultsPerPage = Fk.prototype.Vc;
    Fk.prototype.xf = function(a) {
        this.ab = a
    };
    Fk.prototype.setIsSafeSearchActive = Fk.prototype.xf;
    Fk.prototype.Hc = function(a, b) {
        if ("restrict-safesearch" == a) this.ub = b ? "active" == b || "off" == b ? b : null : null;
        else if ("restrict-extended" == a)
            if (b)
                for (var c in b) a = b[c], Hk[c] && (this.Wa[c] = a);
            else this.Wa = {}
    };
    Fk.prototype.setRestriction = Fk.prototype.Hc;
    var Ik = function(a) {
        var b = a.getElementsByClassName("gs-image-popup-box")[0];
        b && "block" != b.style.display && (b.style.display = "block", a.style.zIndex = 4E3)
    };
    y("module$exports$cse$CustomImageSearch.showPopup", Ik);
    var Jk = function(a) {
        (a = a.getElementsByClassName("gs-image-popup-box")[0]) && "none" != a.style.display && (a.style.display = "none", a.parentElement.style.zIndex = 0)
    };
    y("module$exports$cse$CustomImageSearch.hidePopup", Jk);
    Fk.prototype.Ma = function(a) {
        Q.prototype.Ma.call(this, a)
    };
    Fk.prototype.setLinkTarget = Fk.prototype.Ma;
    Fk.prototype.hc = function(a) {
        Q.prototype.hc.call(this, a)
    };
    Fk.prototype.setQueryAddition = Fk.prototype.hc;
    Fk.prototype.Ae = function(a) {
        this.$ = Array.isArray(a) && 0 != a.length ? a : null
    };
    Fk.prototype.setExperiments = Fk.prototype.Ae;
    Fk.prototype.Ix = function(a) {
        Ua();
        Ek = {
            Ol: function() {},
            render: a,
            $q: function() {},
            Gx: function() {}
        }
    };
    Fk.prototype.overrideRenderForTesting = Fk.prototype.Ix;
    var R = function() {
        Q.call(this);
        this.Ta = "web";
        this.$ = this.ab = this.ub = null;
        this.Wa = {};
        this.Y = new Bk;
        this.pb = null;
        this.$b = new Ah
    };
    Mi(R, Q);
    var Kk = [],
        Lk = {
            as_dt: !0,
            as_epq: !0,
            as_eq: !0,
            as_filetype: !0,
            as_lq: !0,
            as_nlo: !0,
            as_nhi: !0,
            as_oq: !0,
            as_q: !0,
            as_qdr: !0,
            as_rights: !0,
            as_rq: !0,
            as_sitesearch: !0,
            cr: !0,
            c2coff: !0,
            filter: !0,
            gl: !0,
            hq: !0,
            lr: !0,
            query: !0,
            richsnippet: !0,
            sort: !0,
            usg: !0
        },
        Mk = function(a, b, c, d, e) {
            var f = 0;
            a && (f = parseInt(a, 10));
            a = yk(Kk, f, b);
            Kk[f] = null;
            a.ta.jd(b, c, d, e, a.Qp)
        };
    y("module$exports$cse$CustomWebSearch.RawCompletion", Mk);
    R.prototype.hi = function() {
        var a = new R;
        this.ym(a);
        a.ub = this.ub;
        a.ab = this.ab;
        a.$ = this.$;
        a.Wa = this.Wa;
        a.Y = this.Y.clone();
        a.M = this.M;
        a.pb = this.pb;
        return a
    };
    R.prototype.Ak = function(a) {
        var b = zk(Kk, [this, null, null]);
        Mk(b, a, 200, void 0, 200)
    };
    R.prototype.renderJson = R.prototype.Ak;
    g = R.prototype;
    g.ee = function(a) {
        a = a.replace(/\s+$/, "").replace(/^\s+/, "");
        return a.replace(/\s+/g, "_").toLowerCase()
    };
    g.Yd = function(a) {
        return this.M ? this.Y.ld() == this.ee(a) : !1
    };
    g.ec = function(a) {
        var b = this.Y.ld();
        return this.M && b ? a.replace(new RegExp("[ +]?" + b.replace(/^[\s\xa0]+/, "")), "") : a
    };
    g.Wh = function(a, b) {
        return zk(Kk, [this, a, b])
    };
    g.sg = function(a, b, c) {
        b = null == b ? "CustomWebSearch.RawCompletion" : b;
        a = [a];
        this.kd && a.push(this.kd);
        a = a.concat(this.Y.Th()).join(" ");
        var d = this.Y.Sh(),
            e = [];
        for (f in d) e.push(f + "=" + d[f]);
        var f = "&" + e.join("&");
        f += "&q=" + encodeURIComponent(a);
        "off" == this.ab || "active" == this.ab ? f += "&safe=" + this.ab : this.ub && (f += "&safe=" + this.ub);
        this.pb && (f += "&cse_tok=" + this.pb);
        this.Wa && (a = pj(this.Wa)) && (f += "&" + a);
        this.$ && (f += "&exp=" + this.$.join());
        b = this.Op(b, c);
        b += f;
        this.cd = f;
        c && 0 != c && (this.cd = this.cd + "&start=" + c);
        window.google.loader.GoogleLocale &&
            (b = this.Ub && this.M ? b + ("&googlehost=" + encodeURIComponent(window.google.loader.GoogleLocale)) : b + ("&gl=" + encodeURIComponent(window.google.loader.GoogleLocale)));
        return b
    };
    g.pt = function(a, b) {
        var c = $i({
            text: Ai(a.visibleUrl),
            className: "gs-visibleUrl"
        });
        E(b, c);
        D(c, "gs-visibleUrl-short");
        a = $i({
            text: Ai(a.url),
            className: "gs-visibleUrl"
        });
        E(b, a);
        D(a, "gs-visibleUrl-long")
    };
    g.ni = function(a) {
        a.html && delete a.html;
        var b = L("gs-promotion");
        D(b, "gs-result");
        var c = L("gs-promotion-table");
        E(b, c);
        if (a.image) {
            var d = a.image.url.replace("resize_w=40", "resize_w=60").replace("resize_h=40", "resize_h=60");
            d = ej(d, null, null, "gs-promotion-image");
            if (a.url) {
                var e = fj(a.url, "", this.$e());
                a.clicktrackUrl && Nk(e, a.clicktrackUrl, a.url);
                E(e, d);
                d = e
            }
            e = d
        }
        d = null;
        a.clicktrackUrl && (d = {}, d["data-cturl"] = a.clicktrackUrl, d["data-ctorig"] = a.url);
        d = gj(a.url, a.title, this.$e(), "gs-title", void 0, d);
        if (a.titleRight) {
            var f =
                aj("", "gs-promotion-title-right");
            si(f, this.$b.Sa(" " + a.titleRight));
            E(d, f)
        }
        d.dir = Di(d.innerHTML);
        D(d, "gs-bidi-start-align");
        var h = L(a.image ? "" : "gs-promotion-text-cell");
        E(c, h);
        E(h, d);
        R.prototype.pt(a, h);
        c = L();
        if (e) {
            f = L("gs-promotion-table-snippet-with-image");
            E(h, f);
            h = L("gs-promotion-image-cell");
            var k = L("gs-promotion-image-box");
            E(k, e);
            E(h, k);
            E(f, h);
            D(c, "gs-promotion-text-cell-with-image");
            E(f, c)
        } else a.bodyLines && E(h, c);
        if (a.bodyLines)
            for (e = a.bodyLines, f = "right" == a.bodyLinkAlignment, h = 0; h < e.length; h++) {
                var l =
                    e[h],
                    m = l.title,
                    u = l.url,
                    t = l.visibleUrl;
                k = void 0;
                m && (k = aj(""), si(k, this.$b.Sa(m)));
                m = void 0;
                u && t && (m = fj(u, "", this.$e()), l.clicktrackUrl && Nk(m, l.clicktrackUrl, u), l = aj("", "gs-title"), si(l, this.$b.Sa(t)), E(m, l));
                t = L("gs-snippet");
                k && f && (E(t, k), m && E(t, Zi(" ")));
                m && E(t, m);
                k && !f && (m && E(t, Zi(" ")), E(t, k));
                t.dir = Di(d.innerHTML);
                D(t, "gs-bidi-start-align");
                E(c, t)
            }
        a.html = b
    };
    R.prototype.createPromotionHtml = R.prototype.ni;
    R.prototype.li = function(a) {
        delete a.html;
        0 < a.display_facets.length && (a.html = (0, bk.render)("facets", a))
    };
    R.prototype.createFacetResultHtml = R.prototype.li;
    R.prototype.Re = function(a) {
        a.html && delete a.html;
        a.target = this.$e() || void 0;
        a.title = a.title || a.visibleUrl;
        a.html = (0, bk.render)("webResult", a);
        if (a.clicktrackUrl)
            for (var b = a.html.firstChild; b; b = b.nextSibling)
                if (1 == b.nodeType) {
                    "a" == b.tagName.toLowerCase() && b.href == a.unescapedUrl && Nk(b, a.clicktrackUrl, a.unescapedUrl);
                    for (var c = b.getElementsByTagName("a"), d = 0, e; e = c[d]; d++) e.href == a.unescapedUrl && Nk(e, a.clicktrackUrl, a.unescapedUrl)
                }
        this.Pl(a.html)
    };
    R.prototype.createResultHtml = R.prototype.Re;
    var Nk = function(a, b, c) {
        a.setAttribute("data-cturl", b);
        a.setAttribute("data-ctorig", c)
    };
    R.prototype.yf = function(a, b) {
        this.Kd = null;
        this.Y = Dk(a, b);
        this.Y instanceof Ck && (this.M = !0)
    };
    R.prototype.setSiteRestriction = R.prototype.yf;
    g = R.prototype;
    g.jg = function() {
        return this.M ? this.Y.type() : null
    };
    g.Ue = function() {
        return this.M ? this.Y.Jk() : null
    };
    g.rc = function() {
        return this.M ? this.Y.ld() : null
    };
    g.Qk = function(a) {
        this.M && a && this.Y.Vk(a)
    };
    g.vf = function(a) {
        a && (this.pb = a)
    };
    g.xf = function(a) {
        this.ab = a
    };
    R.prototype.setIsSafeSearchActive = R.prototype.xf;
    R.prototype.Hc = function(a, b) {
        "restrict-safesearch" == a && (this.ub = b ? "active" == b || "off" == b || "moderate" == b ? b : null : null);
        if ("restrict-extended" == a)
            if (b)
                for (var c in b) a = b[c], Lk[c] && (this.Wa[c] = a);
            else this.Wa = {}
    };
    R.prototype.setRestriction = R.prototype.Hc;
    R.prototype.Na = function(a) {
        this.Rq(a, {
            hk: 1,
            fk: 20
        })
    };
    R.prototype.setResultSetSize = R.prototype.Na;
    R.prototype.Ma = function(a) {
        Q.prototype.Ma.call(this, a)
    };
    R.prototype.setLinkTarget = R.prototype.Ma;
    R.prototype.hc = function(a) {
        Q.prototype.hc.call(this, a)
    };
    R.prototype.setQueryAddition = R.prototype.hc;
    R.prototype.Ae = function(a) {
        this.$ = Array.isArray(a) && 0 != a.length ? a : null
    };
    R.prototype.setExperiments = R.prototype.Ae;
    var Rk = function(a, b) {
            this.yl = !(!window.history || !window.history.pushState);
            this.zl = Ok();
            this.Ui = this.yl || this.zl;
            var c = window.location.href;
            this.Cs = 0 <= c.indexOf("#") ? c.substring(0, c.indexOf("#")) : c;
            this.Dj = !1;
            this.xx = b;
            b = Pk(Qk());
            this.ak = b.cp;
            this.dd = b.state;
            if (this.Ui) {
                b = Ti(this, Rk.prototype.Bx);
                this.yl && window.addEventListener ? (window.addEventListener("popstate", b, !1), window.addEventListener("hashchange", b, !1)) : this.zl && (window.addEventListener ? window.addEventListener("hashchange", b, !1) : window.attachEvent &&
                    window.attachEvent("onhashchange", b));
                b = !1;
                for (var d in this.dd) {
                    b = !0;
                    break
                }
                b ? this.nn() : this.Wq(a, !0)
            }
        },
        Ok = function() {
            return "onhashchange" in window && (!ac || 8 <= document.documentMode)
        };
    g = Rk.prototype;
    g.isEnabled = function() {
        return this.Ui
    };
    g.pushState = function(a) {
        this.Ui && !this.Dj && this.Wq(a, !1)
    };
    g.Wq = function(a, b) {
        var c = {};
        for (d in a) Sk[d] && (c[d] = a[d]);
        a = c;
        if (!Tk(this.dd, a)) {
            var d = this.dd = a;
            a = [];
            for (var e in d) null != d[e] && Sk[e] && a.push(encodeURIComponent(e) + "=" + encodeURIComponent(d[e]));
            d = a.join("&");
            this.ak && (d = this.ak + "&" + d);
            this.yl ? (e = document.title || "", d = "#" + d, b ? window.history.replaceState(null, e, d) : window.history.pushState(null, e, d)) : this.zl && (e = this.Cs + "#" + d, b ? window.location.replace(e) : (b = mi(e), window.location.href = qi(b)))
        }
    };
    g.getState = function() {
        var a = {},
            b;
        for (b in this.dd) a[b] = this.dd[b];
        return a
    };
    g.Bx = function() {
        var a = Pk(Qk());
        this.ak = a.cp;
        Tk(this.dd, a.state) || (this.dd = a.state, this.nn())
    };
    g.nn = function() {
        this.Dj = !0;
        this.xx(this.getState());
        this.Dj = !1
    };
    var Qk = function() {
            var a = window.location.href,
                b = a.indexOf("#");
            return 0 > b ? "" : a.substring(b + 1)
        },
        Tk = function(a, b) {
            for (var c in a)
                if (a[c] !== b[c]) return !1;
            for (var d in b)
                if (!a.hasOwnProperty(d)) return !1;
            return !0
        },
        Pk = function(a) {
            var b = {};
            a = a.split("&");
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d],
                    f = e.indexOf("="),
                    h = !1;
                if (-1 != f) {
                    var k = decodeURIComponent(e.substr(0, f));
                    Sk[k] && (f = decodeURIComponent(e.substr(f + 1)), Uk[k] ? (f = parseInt(f, 10), isNaN(f) || (b[k] = f)) : b[k] = f, h = !0)
                }
                h || c.push(e)
            }
            return {
                state: b,
                cp: c.join("&")
            }
        },
        Sk = {
            "gsc.q": !0,
            "gsc.tab": !0,
            "gsc.page": !0,
            "gsc.ref": !0,
            "gsc.sort": !0
        },
        Uk = {
            "gsc.tab": !0,
            "gsc.page": !0
        };
    var Vk = function(a) {
        if (!a) return a;
        var b = [
                ["url", "url"],
                ["clicktrackUrl", function(t) {
                    return ["url", "https://www.google.com" + t]
                }],
                ["title", "title"],
                ["visibleUrl", "visibleUrl"]
            ],
            c = [
                ["title", "content"]
            ],
            d = [
                ["url", "url"],
                ["width", "width"],
                ["height", "height"]
            ],
            e = [];
        a = r(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            var h = f.value;
            f = {};
            for (var k = r(b), l = k.next(); !l.done; l = k.next()) {
                var m = r(l.value);
                l = m.next().value;
                m = m.next().value;
                h[l] && ("function" === typeof m ? (m = r(m(h[l])), l = m.next().value, m = m.next().value, f[l] =
                    m) : f[m] = h[l])
            }
            if (h.bodyLines && 0 < h.bodyLines.length)
                for (k = h.bodyLines[0], l = r(c), m = l.next(); !m.done; m = l.next()) {
                    var u = r(m.value);
                    m = u.next().value;
                    u = u.next().value;
                    k[m] && (f[u] = k[m])
                }
            if (h.image)
                for (h = h.image, k = {}, f.image = k, l = r(d), m = l.next(); !m.done; m = l.next()) u = r(m.value), m = u.next().value, u = u.next().value, h[m] && (k[u] = h[m]);
            e.push(f)
        }
        return e
    };
    for (var Wk = {
            BUBBLEGUM: "//www.google.com/cse/static/style/look/bubblegum.css",
            V2_BUBBLEGUM: "//www.google.com/cse/static/style/look/v2/bubblegum.css",
            GREENSKY: "//www.google.com/cse/static/style/look/greensky.css",
            V2_GREENSKY: "//www.google.com/cse/static/style/look/v2/greensky.css",
            ESPRESSO: "//www.google.com/cse/static/style/look/espresso.css",
            V2_ESPRESSO: "//www.google.com/cse/static/style/look/v2/espresso.css",
            SHINY: "//www.google.com/cse/static/style/look/shiny.css",
            V2_SHINY: "//www.google.com/cse/static/style/look/v2/shiny.css",
            MINIMALIST: "//www.google.com/cse/static/style/look/minimalist.css",
            V2_MINIMALIST: "//www.google.com/cse/static/style/look/v2/minimalist.css",
            V2_DEFAULT: "//www.google.com/cse/static/style/look/v2/default.css"
        }, Xk = r(Object.entries(Wk)), Yk = Xk.next(); !Yk.done; Yk = Xk.next()) {
        var Zk = r(Yk.value),
            $k = Zk.next().value,
            al = Zk.next().value;
        y("google.loader.themes." + $k, al)
    };
    var bl = /^[6-9]$/,
        cl = /<\/?(?:b|em)>/gi,
        dl = {
            Pr: 8,
            Fl: 9,
            El: 13,
            Nh: 27,
            hC: 32,
            Mr: 37,
            Or: 38,
            Nr: 39,
            Lr: 40,
            Qr: 46,
            VB: 190
        };
    var el = function(a) {
            return {
                contains: function(b) {
                    return b in a
                },
                nD: function(b) {
                    return !!a[b]
                },
                ev: function(b) {
                    return a[b] || 0
                },
                ib: function(b) {
                    return a[b] || ""
                },
                fv: function(b) {
                    return a[b] || null
                }
            }
        },
        fl = el({});
    var gl = function(a, b, c, d, e, f) {
        function h(m) {
            if (e)
                for (var u = 0, t; t = m[u++];)
                    for (var z = 0; z < e.length; ++z)
                        if (t == e[z]) return !0;
            return !1
        }
        var k = !1,
            l = {
                nj: function() {
                    return a
                },
                Eb: function() {
                    return b
                },
                yg: function() {
                    return c
                },
                getType: function() {
                    return d
                },
                co: function() {
                    return f.ib("za")
                },
                AD: function() {
                    return f.ib("zb")
                },
                zj: function() {
                    return e || []
                },
                JD: function(m) {
                    return !!e && h([m])
                },
                FD: h,
                getParameters: function() {
                    return f
                },
                Pn: function() {
                    return k
                }
            };
        switch (d) {
            case 0:
            case 32:
            case 38:
            case 400:
            case 407:
            case 35:
            case 33:
            case 41:
            case 34:
            case 44:
            case 45:
            case 40:
            case 46:
            case 56:
            case 30:
            case 411:
            case 410:
            case 71:
                k = !0
        }
        f || (f = fl);
        return l
    };
    var hl = /\s/g,
        il = /\u3000/g,
        jl = /^\s/,
        kl = /\s+/,
        ll = /\s+/g,
        ml = /^\s+|\s+$/g,
        nl = /^\s+$/,
        ol = /<[^>]*>/g,
        pl = /&nbsp;/g,
        ql = /&#x3000;/g,
        rl = [/&/g, /&amp;/g, /</g, /&lt;/g, />/g, /&gt;/g, /"/g, /&quot;/g, /'/g, /&#39;/g, /{/g, /&#123;/g],
        sl = document.getElementsByTagName("head")[0],
        tl = 0,
        ul = 1,
        vl = function(a) {
            var b = {};
            if (a)
                for (var c = 0; c < a.length; ++c) b[a[c]] = !0;
            return b
        },
        wl = function() {
            return (new Date).getTime()
        },
        xl = function(a, b) {
            void 0 === b && (b = a);
            var c = function() {
                return b
            };
            return {
                Bg: c,
                bo: function() {
                    return a
                },
                ov: c,
                ID: function() {
                    return a <
                        b
                },
                jD: function(d) {
                    return d && a == d.bo() && b == d.ov()
                }
            }
        },
        yl = function(a, b, c, d) {
            if (null == b || "" === b) {
                if (!d) return;
                b = ""
            }
            c.push(a + "=" + encodeURIComponent(String(b)))
        },
        zl = function(a, b) {
            var c = [],
                d;
            for (d in a) yl(d, a[d], c, b);
            return c.join("&")
        },
        Al = function(a) {
            for (var b = rl.length, c = 0; c < b; c += 2) a = a.replace(rl[c], rl[c + 1].source);
            return a
        },
        Bl = function(a) {
            for (var b = rl.length, c = 0; c < b; c += 2) a = a.replace(rl[c + 1], rl[c].source);
            a = a.replace(pl, " ");
            return a.replace(ql, "\u3000")
        },
        Cl = function(a, b) {
            return a && (-1 < a.indexOf(" ") ||
                kl.test(a)) ? (a = a.replace(ll, " "), a.replace(b ? ml : jl, "")) : a
        },
        Dl = function(a, b, c) {
            c && (a = a.toLowerCase(), b = b.toLowerCase());
            return b.length <= a.length && a.substring(0, b.length) == b
        },
        El = function() {},
        Fl = function(a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var c = 0, d = b.length; c < d; ++c)
                if (b[c] === a) return c;
            return -1
        },
        Gl = function(a, b) {
            return b.Ha() - a.Ha()
        },
        Hl = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        };
    var Il = Ab(),
        Jl = Il && !(0 <= wb(Hb(), 9)),
        Kl = Il && !(0 <= wb(Hb(), 8)),
        Ll = Il && 0 <= wb(Hb(), 10),
        Ml = Xb();
    Ml && Hb();
    var Nl = zb(),
        Ol = Wb(),
        Pl = Db(),
        Ql = Eb();
    B("iPad") || B("Android") && !B("Mobile") || B("Silk") || !(B("iPod") || B("iPhone") || B("Android") || B("IEMobile")) || Db();
    var Rl = B("Android"),
        Sl = B("Macintosh");
    var Tl = void 0 != document.documentElement.style.opacity,
        Ul = {
            rtl: "right",
            ltr: "left"
        };

    function Vl(a, b) {
        try {
            if (a.setSelectionRange) a.setSelectionRange(b, b);
            else if (a.createTextRange) {
                var c = a.createTextRange();
                c.collapse(!0);
                c.moveStart("character", b);
                c.select()
            }
        } catch (d) {}
    }

    function Wl(a, b) {
        for (var c = 0, d = 0; a && (!b || a != b);) {
            c += a.offsetTop;
            d += a.offsetLeft;
            try {
                a = a.offsetParent
            } catch (e) {
                a = null
            }
        }
        return {
            Ie: c,
            Jb: d
        }
    }

    function Xl(a, b, c) {
        a = document.createElement(a);
        b && (a.className = b);
        c && (a.id = c);
        return a
    }

    function Yl() {
        var a = Xl("table");
        a.cellPadding = a.cellSpacing = 0;
        a.style.width = "100%";
        return a
    }

    function Zl(a) {
        return Xl("div", a)
    }

    function $l(a, b) {
        a.innerHTML != b && (b && (Kl ? b && (-1 < b.indexOf(" ") || kl.test(b)) && (b = b.replace(il, "&#x3000;"), b = b.replace(hl, "&nbsp;")) : Jl && (b = '<pre style="font:inherit;margin:0">' + b + "</pre>")), b = Ki(b), me(a, b))
    }

    function am(a, b) {
        a.dir != b && (a.dir = b, a.style.textAlign = Ul[b])
    }

    function bm(a, b, c) {
        if (cm(a, b)) return null;
        var d = Xl("input");
        d.type = "hidden";
        d.name = b;
        c && (d.value = c);
        a.appendChild(d);
        return d
    }

    function cm(a, b) {
        if (a = a.getElementsByTagName("input"))
            for (var c = 0, d; d = a[c++];)
                if (d.name == b && "submit" != d.type.toLowerCase()) return d;
        return null
    }

    function dm(a) {
        a && (a.preventDefault && a.preventDefault(), a.returnValue = !1);
        return !1
    }

    function em(a) {
        if (a = a || window.event) a.stopPropagation && a.stopPropagation(), a.cancelBubble = a.cancel = !0;
        return dm(a)
    }

    function fm(a) {
        a = a.insertCell(-1);
        var b = Xl("a");
        oe(b, "#ifl");
        b.className = "gssb_j gss_ifl";
        a.appendChild(b);
        return b
    }

    function gm(a) {
        var b = a || window;
        a = b.document;
        var c = b.innerWidth;
        b = b.innerHeight;
        if (!c) {
            var d = a.documentElement;
            d && (c = d.clientWidth, b = d.clientHeight);
            c || (c = a.body.clientWidth, b = a.body.clientHeight)
        }
        return {
            Ir: c,
            qo: b
        }
    }

    function hm(a) {
        var b = {};
        if (a)
            for (var c = 0, d; d = a[c++];) b[d.xj()] = d;
        return b
    }

    function im(a) {
        return a ? a.ownerDocument || a.document : window.document
    }

    function jm(a) {
        return a ? (a = im(a), a.defaultView || a.parentWindow) : window
    }

    function km() {
        return Tl ? "opacity" : "filter"
    }

    function lm(a) {
        return Tl ? a + "" : (Kl ? "progid:DXImageTransform.Microsoft.Alpha(" : "alpha(") + "opacity=" + Math.floor(100 * a) + ")"
    };
    var mm = function() {
            var a = function() {
                    return 5
                },
                b = function(c, d, e) {
                    e.push({
                        getType: function() {
                            return 505
                        },
                        position: 1
                    })
                };
            return {
                getType: function() {
                    return 153
                },
                qa: function() {
                    return {
                        Ha: a,
                        av: b
                    }
                }
            }
        },
        om = function(a, b, c) {
            var d, e = function() {
                    return nm(a, b, c, d)
                },
                f = function(k, l) {
                    l.render(k)
                },
                h = function() {
                    return 505
                };
            return {
                ua: function(k) {
                    d = k.Sd()
                },
                getType: function() {
                    return 152
                },
                qa: function() {
                    return {
                        pi: e,
                        render: f,
                        Wd: El,
                        Cj: El,
                        xj: h
                    }
                }
            }
        },
        nm = function(a, b, c, d) {
            var e, f = {
                getType: function() {
                    return 505
                },
                ma: function() {
                    return e
                },
                render: El
            };
            (function() {
                e = Zl();
                e.style.textAlign = "ltr" == d ? "right" : "left";
                var h = Xl("img");
                pe(h, a);
                h.srcset = b + " 2x";
                h.style.verticalAlign = "middle";
                "ltr" == d ? h.style.paddingRight = "1px" : h.style.paddingLeft = "1px";
                e.appendChild(h);
                h = Xl("span");
                h.style.color = "#b5b5b5";
                h.style.fontSize = "12px";
                h.style.verticalAlign = "middle";
                var k = Lh("");
                me(h, k);
                h.appendChild(document.createTextNode(c));
                e.appendChild(h)
            })();
            return f
        };
    var pm = function(a) {
        var b, c = function(e) {
                var f = 1;
                if (b) {
                    var h = e.Ig();
                    "focus" == h || "blur" == h || "mousedown" == h ? f = 3 : (e.ph("partnerid", a), e.Uk("types", "t"))
                }
                return f
            },
            d = function() {
                return 10
            };
        return {
            H: function() {
                b = !0
            },
            getType: function() {
                return 156
            },
            qa: function() {
                return {
                    Cg: c,
                    Ha: d
                }
            }
        }
    };

    function qm(a) {
        return {
            Gn: function() {
                return a.Gn()
            },
            hb: function() {
                return a.hb()
            },
            yc: function() {
                return a.yc()
            }
        }
    };
    var rm = function(a, b, c, d, e, f) {
        function h() {
            return !!b && !!b[0]
        }
        var k, l = !0,
            m, u = {
                bf: function() {
                    return a
                },
                hb: function() {
                    return a.hb()
                },
                mj: function() {
                    return h() ? b[0] : null
                },
                yc: function() {
                    return b
                },
                Yc: h,
                getParameters: function() {
                    return c
                },
                Oo: function() {
                    return d
                },
                Kw: function() {
                    return e
                },
                SD: function() {
                    return f
                },
                getType: function() {
                    return l
                },
                Ru: function() {
                    m || (m = qm(u));
                    return m
                },
                Gn: function() {
                    return k
                }
            };
        b ? b.length && 33 == b[0].getType() && (e = l = !1) : b = [];
        c ? k = c.fv("t") : c = fl;
        return u
    };
    var sm = function(a, b) {
        var c = function() {
                return 2
            },
            d = function(e) {
                for (var f = [], h = [], k = e.yc(), l = !1, m = 0, u; u = k[m++];)
                    if (34 == u.getType()) h.length < b && (h.push(u), u.getParameters().ib("c") && (l = !0));
                    else if (f.length < a) {
                    var t = f,
                        z = t.push;
                    u = gl(u.nj(), u.Eb(), f.length, u.getType(), u.zj(), u.getParameters());
                    z.call(t, u)
                }
                for (k = 0; m = h[k++];) t = m.getParameters(), z = {}, z.a = t.ib("a"), z.b = t.ib("b"), z.c = t.ib("c"), z.d = t.ib("d"), z.e = l, f.push(gl("", "", f.length, m.getType(), m.zj(), el(z)));
                return rm(e.bf(), f, e.getParameters(), e.Oo(),
                    e.Kw(), !0)
            };
        return {
            getType: function() {
                return 122
            },
            qa: function() {
                return {
                    Ha: c,
                    Pt: d
                }
            }
        }
    };
    var tm = function() {
            this.Cd = {}
        },
        um = vl([155, 149, 153, 154, 311, 152, 156, 122, 151, 158, 294, 160]);
    tm.prototype.set = function(a, b) {
        this.Cd[a] = b
    };
    tm.prototype.Pa = function(a, b) {
        a in this.Cd || (this.Cd[a] = []);
        this.Cd[a].push(b)
    };
    var vm = function(a, b, c, d, e, f) {
            this.L = a;
            this.Qt = b;
            this.Ea = c;
            this.ti = d;
            this.lh = e;
            this.C = f;
            this.Rb = {};
            this.ji = {};
            this.Di = new tm;
            this.Kl = [];
            this.lc = [];
            this.Hb = !1;
            this.zc()
        },
        wm = [127, 149, 134, 494, 123, 121, 126, 553, 118, 115, 128, 160, 173, 119, 116, 152, 153, 129, 120, 374, 124, 158, 155, 131, 130, 147, 570, 141, 142, 137, 143, 138, 144, 139, 140, 135, 136];
    g = vm.prototype;
    g.H = function(a) {
        this.Da();
        for (var b = 0, c; c = this.lc[b++];) c.H && c.H(a);
        this.Hb = !0
    };
    g.Da = function() {
        if (this.Hb) {
            for (var a = 0, b; b = this.lc[a++];) b.Da && b.Da();
            this.Hb = !1
        }
    };
    g.Uj = function() {
        return this.Hb
    };
    g.get = function(a, b) {
        if (a = this.Rb[a]) return this.Bn(a, this.Cn(b))
    };
    g.Ya = function(a, b) {
        if (a = this.ji[a]) {
            var c = [];
            b = this.Cn(b);
            for (var d = 0, e; e = a[d++];) c.push(this.Bn(e, b));
            return c
        }
        return []
    };
    g.Lp = function(a) {
        a = a.Cd;
        for (var b in a) {
            var c = b,
                d = a[c];
            um[c] ? this.oz(c, d) : this.nz(c, d)
        }
    };
    g.nz = function(a, b) {
        (b = this.Tn(a, b)) && (this.Rb[a] = b)
    };
    g.oz = function(a, b) {
        for (var c = this.ji[a] || [], d = 0, e; d < b.length; ++d)(e = this.Tn(a, b[d])) && c.push(e);
        this.ji[a] = c
    };
    g.Tn = function(a, b) {
        if (!(b instanceof Object)) return null;
        if (b.Od) {
            var c = b.Od();
            c && this.jz(c)
        }
        b.getType();
        this.hz(b, a);
        this.lc.push(b);
        return b
    };
    g.Bn = function(a, b) {
        return a.qa ? a.qa(b) : {}
    };
    g.hz = function(a, b) {
        this.Kl.push([a, b])
    };
    g.Cn = function(a) {
        for (var b = 0, c = 0, d; d = this.Kl[c++];) d[0] == a && (b = d[1]);
        return b
    };
    g.jz = function(a) {
        for (var b = 0, c; c = a[b++];) {
            var d = c.getType();
            um[d] ? this.Di.Pa(d, c) : this.Di.set(d, c)
        }
    };
    var xm = function(a, b) {
        a = Fl(a.getType(), wm);
        b = Fl(b.getType(), wm);
        return 0 > a ? 1 : 0 > b ? -1 : a - b
    };
    vm.prototype.zc = function() {
        this.Lp(this.Qt);
        this.Lp(this.Di);
        this.lc.sort(xm);
        for (var a = 0, b; b = this.lc[a++];) b.ua && b.ua(this.Ea, this.ti);
        this.L.ik(this.ti, this.Ea.Uf());
        this.ti.vs();
        for (a = 0; b = this.lc[a++];) b.O && b.O(this);
        for (a = 0; b = this.lc[a++];) b.ya && b.ya(this.C);
        for (a = 0; b = this.lc[a++];) b.H && b.H(this.C);
        this.Hb = !0
    };

    function ym(a) {
        var b;
        (function() {
            var c = function() {};
            a || (a = {});
            var d = function(e) {
                return a[e] || c
            };
            b = {
                search: d("b"),
                ah: d("c"),
                redirect: d("d"),
                Eg: d("e"),
                ng: d("f"),
                Li: d("g"),
                Mi: d("h"),
                Hi: d("i"),
                Ni: d("j"),
                mg: d("k"),
                Ii: d("l"),
                zr: d("n"),
                Oi: d("o"),
                Pi: d("p"),
                kg: d("q"),
                ik: d("r"),
                Vm: d("s"),
                Wm: d("t"),
                Ki: d("u"),
                Qi: d("w"),
                Ei: d("x"),
                Ji: d("y"),
                Gi: d("z"),
                Fi: d("aa"),
                Ri: d("ab"),
                $k: d("ac")
            }
        })();
        return {
            search: function(c, d) {
                b.search(c, d)
            },
            ah: function(c) {
                b.ah(c)
            },
            redirect: function(c) {
                b.redirect(c)
            },
            Eg: function(c) {
                return b.Eg(c)
            },
            ng: function(c) {
                b.ng(c)
            },
            Li: function(c) {
                b.Li(c)
            },
            Mi: function(c) {
                b.Mi(c)
            },
            Hi: function(c) {
                b.Hi(c)
            },
            Ni: function(c, d) {
                b.Ni(c, d)
            },
            mg: function(c, d) {
                b.mg(c, d)
            },
            Ii: function() {
                b.Ii()
            },
            zr: function(c) {
                b.zr(c)
            },
            Oi: function() {
                b.Oi()
            },
            Pi: function() {
                b.Pi()
            },
            kg: function(c) {
                b.kg(c)
            },
            ik: function(c, d) {
                b.ik(c, d)
            },
            Vm: function(c) {
                b.Vm(c)
            },
            Wm: function() {
                b.Wm()
            },
            Ki: function() {
                b.Ki()
            },
            Ji: function() {
                b.Ji()
            },
            Qi: function(c) {
                b.Qi(c)
            },
            Ei: function() {
                b.Ei()
            },
            Gi: function() {
                b.Gi()
            },
            Fi: function() {
                b.Fi()
            },
            Ri: function() {
                b.Ri()
            },
            $k: function(c,
                d) {
                return b.$k(c, d)
            }
        }
    };

    function zm(a, b, c, d, e) {
        var f = Ml ? "-moz-" : Il ? "-ms-" : Nl ? "-o-" : Ol ? "-webkit-" : "",
            h = ".gstl_" + d,
            k = new RegExp("(\\.(" + e.join("|") + ")\\b)"),
            l = [];
        return {
            addRule: function(m, u) {
                if (b) {
                    if (c) {
                        m = m.split(",");
                        for (var t = [], z = 0, v; v = m[z++];) v = k.test(v) ? v.replace(k, h + "$1") : h + " " + v, t.push(v);
                        m = t.join(",")
                    }
                    l.push(m, "{", u, "}")
                }
            },
            vs: function() {
                if (b && l.length) {
                    b = !1;
                    var m = Xl("style");
                    m.setAttribute("type", "text/css");
                    (a || sl).appendChild(m);
                    var u = l.join("");
                    l = null;
                    m.styleSheet ? m.styleSheet.cssText = u : (u = document.createTextNode(u),
                        m.appendChild(u))
                }
            },
            prefix: function(m, u) {
                var t = m + (u || "");
                f && (t += u ? m + f + u : f + m);
                return t
            }
        }
    };
    var Am = function(a, b, c, d, e) {
        function f() {
            F.Da()
        }

        function h(n) {
            V.Pb(n || "")
        }

        function k() {
            return V.la()
        }

        function l() {
            return Aa.cf()
        }

        function m() {
            M.va(8)
        }

        function u(n) {
            return ia.getParameters(n)
        }

        function t() {
            return I || !!C && C.Oc()
        }

        function z() {
            return qa.ap
        }

        function v(n) {
            n = jm(n.ir || sl);
            void 0 == n.nextSearchboxId && (n.nextSearchboxId = 50);
            return n.nextSearchboxId++
        }

        function U() {
            if (a)
                for (var n = a; n = n.parentNode;) {
                    var q = n.dir;
                    if (q) return q
                }
            return "ltr"
        }

        function ca(n) {
            n = Hl(n);
            n.ll[35] || (n.TA = "");
            var q = n.wp;
            q ? n.wp =
                q.toLowerCase() : n.ew = !1;
            n.dj && !n.cj && (n.dj = !1);
            Ql || (n.Xj = !1);
            return n
        }

        function S() {
            var n = jm(a),
                q = gm(n);
            M.cc(n, "resize", function() {
                var da = gm(n);
                if (da.Ir != q.Ir || da.qo != q.qo) q = da, m()
            })
        }

        function pa(n) {
            var q = n.pg,
                da = q[135],
                J = q[138],
                O = q[139];
            q[136] || O || da || J ? (n.pg[136] = !0, n.pg[141] = !0, sa = J ? 3 : 1) : sa = 0
        }
        var F, C, K, M, T, V, N, qa, ia, wa, Ka, La, db, Aa, Fa, va, ya, sa, p = !1,
            I, A = {
                install: function(n) {
                    if (!p) {
                        n = ca(n);
                        ya = null == e ? v(n) : e;
                        var q = im(a),
                            da = U(),
                            J = !!q.getElementById("gs_id" + ya),
                            O = ["gssb_c", "gssb_k"];
                        n.ql && O.push(n.ql);
                        O = zm(n.ir, n.iw, n.Vt, ya, O);
                        pa(n);
                        I = n.Oc;
                        F = new vm(W, d, {
                            Uf: function() {
                                return J
                            },
                            get: function(na) {
                                return q.getElementById(na + ya)
                            },
                            jj: function(na) {
                                return q.getElementById(na)
                            },
                            Ln: function() {
                                return b
                            },
                            Sd: function() {
                                return da
                            },
                            Ga: function(na) {
                                return na + ya
                            },
                            oj: function() {
                                return a
                            }
                        }, O, A, n);
                        F.get(347, A);
                        C = F.get(130, A);
                        K = F.get(115, A);
                        M = F.get(117, A);
                        T = F.get(123, A);
                        V = F.get(118, A);
                        N = F.get(119, A);
                        qa = F.get(374, A);
                        ia = F.get(120, A);
                        wa = F.get(189, A);
                        Ka = F.get(553, A);
                        F.get(124, A);
                        La = F.get(419, A);
                        db = F.get(126, A);
                        Aa = F.get(128,
                            A);
                        Fa = F.get(139, A);
                        va = F.get(121, A);
                        S();
                        p = !0
                    }
                },
                H: function(n) {
                    f();
                    n = ca(n);
                    pa(n);
                    I = n.Oc;
                    F.H(n)
                },
                Da: f,
                rD: function() {
                    return b
                },
                cs: function(n, q) {
                    return bm(n, q)
                },
                Db: function() {
                    return V.Db()
                },
                la: k,
                Yc: function() {
                    return Aa.Yc()
                },
                ef: function() {
                    return Aa.ef()
                },
                sj: u,
                hv: function(n, q) {
                    n || (n = ia.getParameters(q));
                    return zl(n)
                },
                XD: function() {
                    return Aa.isVisible()
                },
                ls: function(n, q) {
                    M.cc(n, "click", function(da) {
                        va.search(k(), q);
                        return dm(da)
                    })
                },
                ei: function() {
                    T.ei()
                },
                eD: function() {
                    Aa.wi()
                },
                fl: function(n) {
                    V.fl(n || "")
                },
                qD: function() {
                    return K.Yb()
                },
                XC: function() {
                    V.clear()
                },
                tq: function() {
                    V.tq()
                },
                focus: function() {
                    N.focus()
                },
                blur: function() {
                    N.blur()
                },
                Qo: function() {
                    return T.Qo()
                },
                Rd: function() {
                    var n = db.Rd();
                    return n ? n.Ru() : null
                },
                Pb: h,
                nd: function() {
                    ia.reset()
                },
                search: function(n, q) {
                    va.search(n, q)
                },
                DE: function() {
                    Fa && Fa.refresh()
                },
                QE: function(n) {
                    Aa.Jz(n)
                },
                lg: function() {
                    Aa.lg()
                },
                cf: l,
                kF: m,
                Il: function() {
                    V.Il()
                },
                Uj: function() {
                    return !!F && F.Uj()
                },
                CE: function() {},
                Oc: t,
                Ju: function() {
                    return t() && C ? C.Ju() : ""
                },
                uD: function(n, q) {
                    return cm(n,
                        q)
                },
                Rn: function() {
                    return sa
                },
                Ga: function() {
                    return ya
                },
                YC: function() {
                    Fa && Fa.clear()
                },
                Yk: function(n, q) {
                    h(n);
                    Aa.isEnabled() && Aa.Yk(n, q, !1)
                },
                ME: function(n) {
                    M.va(15, {
                        query: n
                    })
                },
                Wj: function() {
                    return N.Wj()
                },
                Pq: function(n) {
                    Ka.Pq(n)
                },
                sh: function(n) {
                    K.sh(n)
                },
                co: function() {
                    var n, q = db.Rd();
                    if (q) {
                        var da = q.mj();
                        da && ((n = da.co()) || (n = q.getParameters().ib("o")))
                    }
                    return n || ""
                },
                HE: function(n, q) {
                    return wa ? (wa.IE(n, q), !0) : !1
                },
                xD: function(n, q) {
                    switch (n) {
                        case "oq":
                        case "gs_l":
                            return u(q)[n] || null;
                        case "gs_ssp":
                            a: {
                                if ((n =
                                        l()) && 46 == n.getType() && (n = n.getParameters().ib("g"))) break a;n = null
                            }
                            return n;
                        default:
                            return null
                    }
                },
                PE: function() {},
                vD: z,
                eg: function(n) {
                    return 6 == z() && !!La && La.eg(n)
                }
            };
        var W = ym(c);
        return A
    };
    var Bm = function() {
        var a = function(b) {
            var c = {
                    KC: b
                },
                d;
            for (d in b) c[d] = b[d];
            return c
        };
        return {
            qj: function(b, c, d, e, f) {
                try {
                    var h = Am(b, c, d, e, f);
                    return a(h)
                } catch (k) {
                    return null
                }
            },
            translate: function(b) {
                return a(b.api || b)
            }
        }
    };
    var Cm = function() {
        var a, b, c, d, e, f, h = function(m) {
                if ("keyup" == m.Ig()) {
                    var u = wl();
                    if (f) {
                        var t = u - f;
                        a += t;
                        b += t * t
                    }
                    m = m.hb().length;
                    m < e && ++c;
                    ++d;
                    e = m;
                    f = u
                }
            },
            k = function() {
                return [a, b, d, c]
            },
            l = function() {
                f = e = d = c = b = a = 0
            };
        return {
            getType: function() {
                return 582
            },
            qa: function() {
                return {
                    Wx: h,
                    sj: k,
                    nd: l
                }
            }
        }
    };
    var Dm = function() {
        var a = /j0/g,
            b = /j+$/,
            c, d = function() {
                return 23
            },
            e = function() {
                return c.sj().join("j").replace(a, "j").replace(b, "")
            },
            f = function() {
                c.nd()
            },
            h = {
                O: function(k) {
                    c = k.get(582, h)
                },
                getType: function() {
                    return 311
                },
                qa: function() {
                    return {
                        yg: d,
                        Ud: e,
                        reset: f
                    }
                }
            };
        return h
    };
    var Em = function() {
        var a, b = function(e) {
                a.Wx(e);
                return 1
            },
            c = function() {
                return 17
            },
            d = {
                O: function(e) {
                    a = e.get(582, d)
                },
                getType: function() {
                    return 156
                },
                qa: function() {
                    return {
                        Cg: b,
                        Ha: c
                    }
                }
            };
        return d
    };

    function Fm() {}
    g = Fm.prototype;
    g.ua = function() {};
    g.O = function() {};
    g.ya = function() {};
    g.H = function() {};
    g.qa = function() {
        return this
    };
    g.Od = function() {
        return null
    };
    g.Da = function() {};
    var Gm = ul++,
        Hm = function(a) {
            var b = this;
            this.Vl = a;
            this.ba = Zl();
            this.hh = function() {
                b.G.Ww() || b.G.la() ? b.Ij() : b.Vl && b.jA()
            };
            this.jA = function() {
                b.da || (b.G.th(b.Vl), b.da = !0)
            };
            this.Ij = function() {
                if (b.da || void 0 == b.da) b.G.th("#fff"), b.da = !1
            }
        };
    Ea(Hm, Fm);
    g = Hm.prototype;
    g.ua = function(a) {
        this.bc = a.oj()
    };
    g.O = function(a) {
        a && (this.J = a.get(117, this), this.G = a.get(118, this))
    };
    g.ya = function() {
        this.J.La(this.bc, "focus", this.Ij);
        this.J.La(this.bc, "blur", this.hh);
        this.J.tb(4, this.hh);
        this.J.tb(5, this.hh)
    };
    g.H = function() {
        this.hh()
    };
    g.getType = function() {
        return 160
    };
    g.Da = function() {
        this.Ij()
    };
    g.isEnabled = function() {
        return this.Bc
    };
    g.Hg = function() {
        return Gm
    };
    g.Ha = function() {
        return 5
    };
    g.ma = function() {
        return this.ba
    };
    g.wj = function() {
        return {
            Po: !this.da
        }
    };
    var Im = function() {
        function a(C, K, M, T) {
            var V = C.Ga(),
                N = C.hb();
            ca.Xm || e();
            K = u + t + z + "?" + (v ? v + "&" : "") + (K ? K + "&" : "");
            C = [];
            yl("q", N, C, !0);
            ca.Dr || yl("callback", "google.sbox.p" + m, C);
            if (U) {
                N = "";
                for (var qa = 4 + Math.floor(32 * Math.random()), ia = 0, wa; ia < qa; ++ia) wa = .3 > Math.random() ? 48 + Math.floor(10 * Math.random()) : (.5 < Math.random() ? 65 : 97) + Math.floor(26 * Math.random()), N += String.fromCharCode(wa);
                yl("gs_gbg", N, C)
            }
            N = Xl("script");
            K = Li(K + C.join("&"));
            N.src = sd(K);
            re(N);
            N.charset = "utf-8";
            S[V] = N;
            pa = ca.Xm ? T : M;
            k.appendChild(N);
            return !0
        }

        function b() {
            return 0
        }

        function c() {
            return 0
        }

        function d(C) {
            var K = S[C];
            K && (k.removeChild(K), delete S[C])
        }

        function e() {
            for (var C in S) k.removeChild(S[C]);
            S = {};
            pa = null
        }

        function f(C) {
            pa && pa(C)
        }

        function h(C) {
            C || (C = El);
            var K = window.google;
            ca.Dr ? K.ac.h = C : K.sbox["p" + m] = C
        }
        var k = sl,
            l, m, u, t, z, v, U, ca, S = {},
            pa, F = {
                O: function(C) {
                    l = C.get(127, F);
                    m = C.lh.Ga()
                },
                ya: function() {
                    "google" in window || (window.google = {});
                    "sbox" in window.google || (window.google.sbox = {})
                },
                H: function(C) {
                    ca = C;
                    0 == C.ki && (C = l.bt, u = C.protocol,
                        t = C.host, z = C.Dk, v = C.pA, U = "https:" == document.location.protocol, h(f), (new Image).src = u + t + "/generate_204")
                },
                getType: function() {
                    return 149
                },
                qa: function() {
                    return {
                        ez: a,
                        Mt: d,
                        ei: El,
                        Hn: b,
                        Jn: c
                    }
                },
                Da: function() {
                    h(null);
                    e()
                }
            };
        return F
    };
    var Jm = function() {
        this.Bi = {}
    };
    Ea(Jm, Fm);
    g = Jm.prototype;
    g.O = function(a) {
        this.Z = a.get(116, this);
        if (a = a.Ya(154, this))
            for (var b = 0, c; c = a[b++];) this.Bi[c.af()] = c
    };
    g.H = function() {
        this.da = !1
    };
    g.Da = function() {
        this.Zc()
    };
    g.getType = function() {
        return 115
    };
    g.isVisible = function() {
        return this.da
    };
    g.Tk = function(a) {
        if (a in this.Bi) {
            if (this.xd) {
                if (a == this.xd.af()) return;
                this.Zc();
                this.xd.Lg()
            }
            this.xd = this.Bi[a];
            this.Z.Tk(this.xd)
        }
    };
    g.Yb = function() {
        return this.da ? this.Z.Yb() : 0
    };
    g.show = function() {
        this.da || (this.Z.show(this.gv()), this.da = !0)
    };
    g.Zc = function() {
        this.da && (this.Z.Zc(), this.da = !1)
    };
    g.sh = function(a) {
        this.Z.sh(a)
    };
    g.gv = function() {
        var a = Hl(Km);
        this.xd && this.xd.Tf(a);
        return a
    };
    var Km = {
        Yv: !1,
        Jj: "left",
        Mo: !0,
        Gd: null,
        marginWidth: 0
    };
    var Lm = function() {};
    Ea(Lm, Fm);
    g = Lm.prototype;
    g.O = function(a) {
        this.Z = a.get(119, this);
        this.Bb = a.get(130, this);
        this.Bt = a.get(145, this);
        this.J = a.get(117, this);
        this.ka = a.get(123, this);
        this.kb = a.get(374, this);
        this.Ep = a.get(121, this);
        this.By = a.get(553, this);
        this.N = a.get(128, this);
        this.Gf = a.get(139, this);
        this.GA = a.get(173, this);
        this.Ge = a.Ya(160, this);
        this.L = a.L;
        this.xw = a.lh.Rn()
    };
    g.ya = function(a) {
        this.C = a;
        this.ia = this.Lc = this.Z.Su() || ""
    };
    g.H = function(a) {
        this.C = a;
        this.Ro = this.Fo = !1;
        this.ze()
    };
    g.getType = function() {
        return 118
    };
    g.io = function() {
        var a = {};
        this.J.va(13, a);
        !a.cancel && this.C.so && this.J.defer(this.N.wi);
        this.L.Ji()
    };
    g.Lv = function() {
        this.J.va(12);
        this.L.Ki()
    };
    g.Ov = function() {
        this.jo("rtl")
    };
    g.Pv = function() {
        this.jo("ltr")
    };
    g.Tv = function() {
        this.N.Uy()
    };
    g.Hv = function(a) {
        this.N.Yc() ? this.N.Ty() : this.N.lg(a)
    };
    g.Xd = function() {
        if (0 == this.C.ml) return !1;
        if (4 == this.C.ml) return this.L.Ri(), !1;
        var a = this.An();
        if (a) switch (this.C.ml) {
            case 1:
                if (this.Jl(a, !0)) return this.kb.add(8), !0;
                break;
            case 3:
                return this.N.Xd(a)
        }
        return !1
    };
    g.Jv = function() {
        this.C.Wy ? this.search(5) : (this.N.isVisible() ? this.N.wi() : this.Xf(), this.iq())
    };
    g.Gv = function(a) {
        this.ia && a.bo() == this.ia.length && (this.Gf && this.Gf.clear(), this.C.Vy && this.search(2), this.L.Hi(this.ia))
    };
    g.Dv = function(a) {
        this.Bb && 0 == a.Bg() && this.Bb.az()
    };
    g.ko = function(a, b, c, d) {
        this.C.Ht && !this.N.isVisible() && "mousedown" == c && this.N.lg(b);
        var e = !1,
            f = !1;
        if (a != this.ia || "onremovechip" == c) Dl(c, "key") ? this.kb.add(1) : "paste" == c && this.kb.add(2), e = !0, this.Iv(a, c), a && !nl.test(a) && (d = !0), f = !0;
        a = this.By.Cm(a, b, c);
        switch (a.Qu()) {
            case 2:
                d = !0;
                break;
            case 3:
                d = !1
        }
        d ? (e && this.N.nA(), this.eu(a)) : f && this.Vs();
        this.J.va(2, {
            Kf: c
        })
    };
    g.Iz = function(a) {
        (this.Fo = a) && this.kb.add(4)
    };
    g.Jq = function(a) {
        this.Ro != a && ((this.Ro = a) ? this.L.Gi() : this.L.Fi())
    };
    g.rh = function(a) {
        this.Dp(a)
    };
    g.iu = function() {
        this.Z.focus()
    };
    g.Xf = function() {
        this.Z.blur()
    };
    g.Ww = function() {
        return this.Z.Wj()
    };
    g.fl = function(a, b, c) {
        Dl(a, this.ia, !0) && (a = this.ia + a.substr(this.ia.length));
        this.ko(a, c || xl(a.length), "", b);
        this.Dp(a, !0)
    };
    g.Pb = function(a) {
        this.vh(a);
        this.Z.refresh();
        this.J.va(4, {
            Gd: this.Va,
            input: a
        })
    };
    g.tq = function() {
        this.Z.select()
    };
    g.iq = function() {
        this.ia != this.Lc && this.vh(this.Lc);
        this.J.va(5, {
            input: this.Lc,
            uA: this.N.yc(),
            Gd: this.Va
        });
        this.Z.refresh();
        this.L.Mi(this.Lc)
    };
    g.mm = function() {
        this.Lc = this.ia
    };
    g.En = function() {
        return this.Z.En()
    };
    g.Db = function() {
        return this.Lc
    };
    g.la = function() {
        return this.ia
    };
    g.kj = function() {
        return this.Va
    };
    g.Pd = function() {
        return this.Z.Pd()
    };
    g.uj = function() {
        return this.Z.uj()
    };
    g.Yb = function() {
        return this.Z.Yb()
    };
    g.Vd = function() {
        return this.Z.Vd()
    };
    g.Sn = function() {
        return this.Z.Sn()
    };
    g.cw = function() {
        return 0 != this.xw
    };
    g.Gj = function() {
        if (this.GA) {
            if (this.C.Fj) return !0;
            for (var a = 0, b; b = this.Ge[a++];)
                if (b.isEnabled()) return !0
        }
        return !1
    };
    g.pk = function() {
        this.Z.pk()
    };
    g.search = function(a) {
        this.Ep.search(this.ia, a)
    };
    g.clear = function(a) {
        this.ia && (this.vh(""), this.Z.clear(), this.J.va(1), this.N.clear(), this.L.ng(this.ia));
        a && this.L.Ei()
    };
    g.nd = function() {
        this.lx = this.Yo = this.gj = 0
    };
    g.th = function(a) {
        this.Z.th(a)
    };
    g.Il = function() {
        var a = this.An();
        a && this.Jl(a)
    };
    g.Iv = function(a, b) {
        this.vh(a);
        this.J.va(1, {
            Kf: b,
            Gd: this.Va
        });
        this.L.ng(a);
        a = wl();
        this.gj || (this.gj = a);
        this.Yo = a
    };
    g.jo = function(a) {
        var b = this.Pd().Bg();
        this.Va == a ? this.N.Yc() && b == this.ia.length && (this.N.ef() ? this.C.dj && (a = this.N.cf(), this.Ep.search(a.Eb(), 6)) : this.C.vx && this.Xd()) : this.Bb && 0 == b && this.Bb.az()
    };
    g.An = function() {
        if (this.N.Yc()) {
            var a = this.N.ef() ? this.N.cf() : this.N.mj();
            if (a.Pn()) return a
        }
        return null
    };
    g.Jl = function(a, b) {
        a = a.Eb();
        var c = this.Lc;
        return (c || a ? c && a && c.toLowerCase() == a.toLowerCase() : 1) ? !1 : (this.mm(), b ? this.fl(a, !0) : this.Pb(a), !0)
    };
    g.Dp = function(a, b) {
        this.ia = a || "";
        this.ze();
        this.Z.refresh();
        b || (this.J.va(4, {
            Gd: this.Va,
            input: this.ia
        }), this.L.Li(this.ia))
    };
    g.ze = function() {
        var a = this.Bt.kj(this.ia);
        a != this.Va && (this.Z.Rk(a), this.Va = a)
    };
    g.eu = function(a) {
        this.Fo && a.Uk("gs_is", 1);
        this.ka.gn(a)
    };
    g.Vs = function() {
        this.N.clear();
        this.ka.Pg()
    };
    g.vh = function(a) {
        this.ia = this.Lc = a || "";
        this.ze()
    };

    function Mm() {
        function a(H) {
            H.Gd = sb;
            H.marginWidth = eb;
            var ja = Cb.qr;
            ja || (ja = "rtl" == sb ? "right" : "left");
            H.Jj = ja
        }

        function b(H, ja, Ya) {
            var ta = !1;
            H = O && O.PD(ja);
            M();
            if ((Ba = ja) && ja.length) {
                ta = ja[0].Eb();
                I.dw(ta) && (ta = n.Db());
                sb = I.kj(ta);
                if (Ya) Lb = !0, ta = p.vy(ja, sb), ja = ja[0].getParameters().ib("a"), ja = Bl(ja), eb = q.Vd(ja);
                else {
                    Lb = !1;
                    ja = p;
                    Ya = ja.render;
                    if (S() && !Lb) {
                        ta = [];
                        for (var Ma = [], fb = 0, gb;
                            (gb = da[fb++]) && !gb.av(n.Db(), Ba, Ma););
                        (fb = Ma ? Ma.length : 0) && (fb -= Fa(Ma, ta, 0));
                        for (gb = 0; gb < Ba.length; ++gb) ta.push(Ba[gb]);
                        fb &&
                            (fb -= Fa(Ma, ta, 1));
                        Cb.gw && ta.push(1);
                        fb && Fa(Ma, ta, 2);
                        Cb.oo && ta.push(2);
                        na && na.GC(ta)
                    } else ta = null;
                    ta = Ya.call(ja, ta, sb);
                    eb = 0
                }
                H && (za = O.zD(), c(O.sD()));
                ta ? C() : M()
            }
            return ta
        }

        function c(H) {
            sa();
            if (ea != H) {
                var ja = ea;
                ea = H;
                ya(ja)
            }
        }

        function d() {
            if (S())
                if (Za) {
                    var H = ea;
                    ea == Ba.length - 1 ? za = ea = null : null == ea ? ea = 0 : ++ea;
                    za = ea;
                    va(H, d)
                } else C()
        }

        function e() {
            if (S())
                if (Za) {
                    var H = ea;
                    Ba && 0 != ea ? null == ea ? ea = Ba.length - 1 : --ea : za = ea = null;
                    za = ea;
                    va(H, e)
                } else C()
        }

        function f(H) {
            H = H ? 4 : 3;
            if (pa()) {
                var ja = U();
                p.Kg(ja) || n.search(H);
                Ra.mg(n.Db(),
                    ja)
            } else n.search(H)
        }

        function h(H) {
            return p.Xd(H)
        }

        function k(H) {
            za = ea = H;
            Ra.mg(n.Db(), Ba[H])
        }

        function l() {
            return Za
        }

        function m() {
            return Ga
        }

        function u(H) {
            Ga && !H && M();
            Ga = H
        }

        function t() {
            return Ba
        }

        function z() {
            return S() ? Ba[0] : null
        }

        function v() {
            return ea
        }

        function U() {
            return null != za ? Ba[za] : null
        }

        function ca() {
            return za
        }

        function S() {
            return !(!Ba || !Ba.length)
        }

        function pa() {
            return null != za
        }

        function F() {
            Za && !Na && (Na = window.setTimeout(M, Cb.mw))
        }

        function C() {
            Za || (A.Tk(Nm), A.show(), Za = !0, Ra.Oi())
        }

        function K() {
            Za &&
                (Na && (window.clearTimeout(Na), Na = null), A.Zc(), Za = !1, Ra.Pi())
        }

        function M() {
            K();
            Ba = null;
            Lb = !1;
            null != ea && p.Fh(ea);
            za = ea = null;
            p.clear()
        }

        function T() {
            W.Pg();
            K()
        }

        function V() {
            null != ea && p.Fh(ea);
            za = ea = null
        }

        function N() {
            sa();
            Oa = window.setTimeout(V, 0)
        }

        function qa() {
            sa()
        }

        function ia(H) {
            if (S()) C();
            else {
                var ja = n.Db();
                ja && (H = H || n.Pd(), ja = J.Cm(ja, H), W.gn(ja))
            }
        }

        function wa() {
            return p.ma()
        }

        function Ka() {
            return p.Td()
        }

        function La() {
            Za = !1
        }

        function db() {
            p.Gc()
        }

        function Aa() {
            return Nm
        }

        function Fa(H, ja, Ya) {
            for (var ta =
                    0, Ma = 0, fb; Ma < H.length; ++Ma)(fb = H[Ma]) && fb.position == Ya && (ja.push(fb), ++ta);
            return ta
        }

        function va(H, ja) {
            null == ea || p.Wg(ea) ? (ya(H), null == ea ? n.iq() : (H = p.bj(Ba[ea]), n.rh(H), Ra.Qi(H))) : (p.Fh(H), ja())
        }

        function ya(H) {
            sa();
            null != H && p.Fh(H);
            null != ea && p.nw(ea)
        }

        function sa() {
            Oa && (window.clearTimeout(Oa), Oa = null)
        }
        var p, I, A, W, n, q, da, J, O, na, Ra, Ba, ea, za, Lb, Za, Ga, Na, Oa, eb, sb, Cb, Pa = {
            O: function(H) {
                p = H.get(129, Pa);
                I = H.get(145, Pa);
                A = H.get(115, Pa);
                W = H.get(123, Pa);
                n = H.get(118, Pa);
                q = H.get(147, Pa);
                da = H.Ya(153, Pa);
                J = H.get(553,
                    Pa);
                H.get(126, Pa);
                O = H.get(184, Pa);
                na = H.get(157, Pa);
                Ra = H.L
            },
            ya: function() {
                da.sort(Gl)
            },
            H: function(H) {
                Cb = H;
                za = ea = null;
                Za = Lb = !1;
                Ga = !0;
                sb = "";
                eb = 0
            },
            getType: function() {
                return 128
            },
            qa: function() {
                return {
                    Yk: b,
                    Cz: c,
                    Ty: d,
                    Uy: e,
                    Kg: f,
                    Xd: h,
                    Fv: k,
                    isVisible: l,
                    isEnabled: m,
                    Jz: u,
                    yc: t,
                    mj: z,
                    tD: v,
                    cf: U,
                    nv: ca,
                    Yc: S,
                    ef: pa,
                    nA: F,
                    show: C,
                    Zc: K,
                    clear: M,
                    wi: T,
                    Fy: V,
                    Gy: N,
                    EC: qa,
                    lg: ia
                }
            },
            Od: function() {
                var H = {
                    Tf: a,
                    ma: wa,
                    Td: Ka,
                    Lg: La,
                    Gc: db,
                    af: Aa
                };
                return [{
                    ua: El,
                    O: El,
                    ya: El,
                    H: El,
                    getType: function() {
                        return 154
                    },
                    qa: function() {
                        return H
                    },
                    Od: function() {
                        return null
                    },
                    Da: El
                }]
            },
            Da: function() {
                Na && (window.clearTimeout(Na), Na = null);
                Ba = null;
                K()
            }
        };
        return Pa
    }
    var Nm = ul++;
    var Pm = function() {
        this.Lo = Om.test("x")
    };
    Ea(Pm, Fm);
    Pm.prototype.ua = function(a) {
        this.Nd = a.Sd()
    };
    Pm.prototype.getType = function() {
        return 145
    };
    Pm.prototype.dw = function(a) {
        if (!this.Lo) return !0;
        for (var b = !1, c = !1, d = 0, e; d < a.length; ++d)
            if (e = a.charAt(d), !Qm.test(e) && (Om.test(e) ? c = !0 : b = !0, c && b)) return !0;
        return !1
    };
    Pm.prototype.kj = function(a) {
        var b = this.Nd;
        this.Lo && (Om.test(a) ? b = "ltr" : Qm.test(a) || (b = "rtl"));
        return b
    };
    var Qm = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),
        Om = RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");
    var Rm = function() {
        this.yk = [];
        this.vi = {
            Rr: 1
        }
    };
    Ea(Rm, Fm);
    g = Rm.prototype;
    g.getType = function() {
        return 117
    };
    g.Da = function() {
        this.tc = null
    };
    g.La = function(a, b, c, d, e) {
        var f = this.On(a);
        f || (f = {}, this.yk.push({
            element: a,
            Uv: f
        }));
        var h = f[b];
        h || (h = f[b] = [], f = this.Lu(b, a.Rr ? window : jm(a), h), "string" == typeof b ? a.addEventListener ? a.addEventListener(b, f, !1) : a["on" + b] = f : a[b] = f);
        h.push(this.Ku(c, d || 0, !!e));
        h.sort(Sm);
        c.bu = b
    };
    g.Gh = function(a, b) {
        if (a = this.On(a))
            if (a = a[b.bu])
                for (var c = 0, d; d = a[c++];)
                    if (d.process == b) {
                        d.ek = !0;
                        break
                    }
    };
    g.tb = function(a, b, c, d) {
        this.La(this.vi, a, b, c, d)
    };
    g.LA = function(a) {
        this.Gh(this.vi, a)
    };
    g.va = function(a, b) {
        b = b || {};
        (a = this.vi[a]) && a(b, b.Kf)
    };
    g.cc = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    };
    g.ul = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
    };
    g.defer = function(a) {
        if (Tm) {
            if (!this.tc) {
                this.tc = [];
                var b = bb(this.bv, this);
                this.cc(window, "message", b)
            }
            this.tc.push(a);
            a = window.location.href;
            window.postMessage("sbox.df", /HTTPS?:\/\//i.test(a) ? a : "*")
        } else window.setTimeout(a, 0)
    };
    g.bv = function(a) {
        this.tc && a && a.source == window && "sbox.df" == a.data && this.tc.length && (this.tc.shift()(), this.tc && this.tc.length && window.postMessage("sbox.df", window.location.href))
    };
    g.Lu = function(a, b, c) {
        return bb(function(d, e) {
            if (c.length && (d = d || this.ru(b), d.Kf = e || a, this.Vx(d, c), d.Vg)) return delete d.Vg, d.Lw && (d = b.event || d), em(d), d.returnValue = !1
        }, this)
    };
    g.ru = function(a) {
        var b = {};
        if (a = a.event) a.keyCode && (b.keyCode = a.keyCode), b.Lw = !0;
        return b
    };
    g.Ku = function(a, b, c) {
        return {
            Mw: c,
            ek: !1,
            priority: b,
            process: a
        }
    };
    g.On = function(a) {
        for (var b = 0, c; b < this.yk.length; ++b)
            if (c = this.yk[b], c.element == a) return c.Uv;
        return null
    };
    g.Vx = function(a, b) {
        for (var c, d, e = 0, f; f = b[e++];) f.ek ? d = !0 : c || (f.Mw ? this.Ry(f, a) : c = f.process(a));
        if (d)
            for (e = 0; f = b[e];) f.ek ? b.splice(e, 1) : ++e
    };
    g.Ry = function(a, b) {
        this.defer(function() {
            a.process(b)
        })
    };
    var Sm = function(a, b) {
            return b.priority - a.priority
        },
        Tm = window.postMessage && !(Il || Pl || Nl);
    var Um = function() {
        this.Mf = {};
        this.Dh = this.Bk = 0
    };
    Ea(Um, Fm);
    g = Um.prototype;
    g.H = function() {
        this.reset()
    };
    g.getType = function() {
        return 494
    };
    g.ms = function(a) {
        this.Mf[a.Ga()] = !0
    };
    g.tx = function(a) {
        a = a.bf();
        var b = a.Ga();
        b in this.Mf && (this.Dh += wl() - a.Gg(), ++this.Bk, delete this.Mf[b])
    };
    g.ou = function() {
        var a = 0,
            b;
        for (b in this.Mf) a++;
        return a
    };
    g.reset = function() {
        this.Mf = {};
        this.Dh = this.Bk = 0
    };
    var Vm = function() {};
    Ea(Vm, Fm);
    g = Vm.prototype;
    g.H = function() {
        this.reset()
    };
    g.getType = function() {
        return 374
    };
    g.add = function(a) {
        this.kb[a] = !0;
        this.ap = a
    };
    g.yv = function() {
        var a = [],
            b;
        for (b in this.kb) a.push(parseInt(b, 10));
        return a
    };
    g.reset = function() {
        this.kb = {};
        this.ap = null
    };
    var Wm = function() {
        this.uq = -1
    };
    Ea(Wm, Fm);
    g = Wm.prototype;
    g.O = function(a) {
        this.qg = a.get(191, this);
        this.ka = a.get(123, this);
        this.G = a.get(118, this);
        this.kb = a.get(374, this);
        this.Wc = a.get(494, this);
        this.pd = a.get(126, this);
        this.N = a.get(128, this);
        this.Jr = a.Ya(311, this);
        hm(a.Ya(152, this))
    };
    g.ya = function(a) {
        this.pl = a.px
    };
    g.H = function(a) {
        this.C = a;
        this.reset()
    };
    g.getType = function() {
        return 120
    };
    g.getParameters = function(a) {
        var b = this.G.Db();
        a = this.pv(a);
        var c = this.rv(b, a);
        b = {
            oq: b,
            gs_l: a + "." + c
        };
        this.C.Vw && (b.q = this.G.la());
        return b
    };
    g.reset = function() {
        this.vq = wl();
        ++this.uq;
        this.G.nd();
        this.kb.reset();
        this.ka.nd();
        for (var a = 0, b; b = this.Jr[a++];) b.reset()
    };
    g.Zz = function(a) {
        this.pl = a
    };
    g.Ou = function() {
        var a = this.pd.Rd();
        return a ? a.getParameters().ib("e") || "" : ""
    };
    g.Tu = function() {
        return this.kb.yv().join("j")
    };
    g.tu = function() {
        var a = "";
        this.pd.Ej() ? a = "o" : this.N.ef() && (a = this.N.nv() + "");
        return a
    };
    g.pv = function(a) {
        var b = [];
        b[27] = 34;
        b[0] = Xm(this.C.Ne);
        b[28] = Xm(this.C.ih);
        b[1] = void 0 == a ? "" : a + "";
        b[26] = this.Tu();
        b[2] = this.tu();
        b[3] = this.wu();
        b[4] = this.vj(this.G.gj);
        b[5] = this.vj(this.G.Yo);
        b[6] = this.uq;
        b[7] = wl() - this.vq;
        b[18] = this.vj(this.G.lx);
        b[8] = this.ka.bq;
        if (a = this.ka.yu()) b[25] = this.xu(a), b[10] = a.Ew;
        b[11] = this.ka.Mn();
        b[12] = this.ka.zn;
        if (a = this.ka.Du()) b[9] = a.Ay, b[22] = a.oy, b[17] = a.Jy;
        b[13] = this.ka.Bp;
        b[14] = this.ka.gk;
        b[15] = this.ka.rl;
        b[16] = this.ka.Cu();
        b[30] = this.Wc.ou();
        b[31] = this.Wc.Bk;
        b[32] = this.Wc.Dh;
        b[19] = Xm(this.C.kl);
        b[20] = this.Ou();
        a = 0;
        for (var c; c = this.Jr[a++];) {
            var d = c.yg();
            Ym[d] && (b[d] = void 0 == b[d] ? Xm(c.Ud()) : "")
        }
        return b.join(".").replace(Zm, "")
    };
    var Xm = function(a) {
        return a ? a.replace($m, "-") : ""
    };
    Wm.prototype.wu = function() {
        var a = "",
            b = this.N.yc();
        if (b) {
            for (var c, d = 0, e = 0, f; f = b[e++];) {
                var h = f;
                f = h.getType() + "";
                h = h.zj();
                h.length && (f += "i" + h.join("i"));
                f != c && (1 < d && (a += "l" + d), a += (c ? "j" : "") + f, d = 0, c = f);
                ++d
            }
            1 < d && (a += "l" + d)
        }
        return a
    };
    Wm.prototype.rv = function(a, b) {
        return this.qg && this.pl ? (a += b, b = this.qg.decode(this.pl), a = this.qg.qv(a, b), a = a.slice(0, 8), this.qg.encode(a)) : ""
    };
    Wm.prototype.vj = function(a) {
        return Math.max(a - this.vq, 0)
    };
    Wm.prototype.xu = function(a) {
        return a.Xw ? "1" + (this.C.Rt ? "a" : "") + (this.C.Ut ? "c" : "") : ""
    };
    var Zm = /\.+$/,
        $m = /\./g,
        Ym = vl([23]);
    var an = function() {};
    Ea(an, Fm);
    g = an.prototype;
    g.ua = function(a) {
        this.ij = a.Ln()
    };
    g.O = function(a) {
        a.get(347, this);
        this.Bb = a.get(130, this);
        this.J = a.get(117, this);
        this.ka = a.get(123, this);
        this.G = a.get(118, this);
        this.ck = a.get(120, this);
        this.N = a.get(128, this);
        this.Gf = a.get(139, this);
        this.L = a.L;
        this.qq = a.Ya(294, this)
    };
    g.H = function(a) {
        this.C = a
    };
    g.getType = function() {
        return 121
    };
    g.search = function(a, b) {
        if (this.qq) {
            for (var c = !1, d = 0, e; e = this.qq[d++];) 2 == e.Cg(a, b) && (c = !0);
            if (c) return
        }
        if (a && !nl.test(a) || this.C.Oc || this.Bb && this.Bb.Oc()) bl.test(b) ? this.ij && !this.tg && (this.tg = bm(this.ij, "btnI", "1")) : this.tg && (this.ij.removeChild(this.tg), this.tg = null), this.L.search(a, b), this.cg(), this.J.va(14, {
            query: a
        })
    };
    g.ah = function(a) {
        this.L.ah(a);
        this.cg()
    };
    g.redirect = function(a) {
        this.L.redirect(a);
        this.cg()
    };
    g.kg = function(a) {
        this.L.kg(a);
        this.cg()
    };
    g.Eg = function(a) {
        return this.L.Eg(a)
    };
    g.cg = function() {
        this.ka.Pg();
        this.ka.dg();
        this.ck.reset();
        this.N.clear();
        this.G.Db() != this.G.la() && this.G.mm();
        this.Gf && this.Gf.clear()
    };
    var bn = function(a, b, c) {
        function d() {
            return a
        }

        function e() {
            return N
        }

        function f() {
            return qa
        }

        function h() {
            return b
        }

        function k() {
            return c || ""
        }

        function l(ia, wa) {
            z(ia, wa)
        }

        function m(ia, wa) {
            z(ia, wa, !0)
        }

        function u() {
            F || (C = !0)
        }

        function t() {
            M = !0
        }

        function z(ia, wa, Ka) {
            F || (U[ia] = wa, Ka && (ca[ia] = wa))
        }
        var v = (tl++).toString(36),
            U = {},
            ca = {},
            S, pa, F = !1,
            C = !1,
            K = !1,
            M = !1,
            T = 1,
            V = {
                Ga: function() {
                    return v
                },
                Un: function() {
                    var ia = parseInt(v, 36);
                    return isNaN(ia) ? -1 : ia
                },
                hb: d,
                Zu: e,
                tj: f,
                Pd: h,
                Qu: function() {
                    return T
                },
                getParameters: function() {
                    return U
                },
                pD: function() {
                    return S
                },
                Ig: k,
                Gg: function() {
                    return pa
                },
                su: function() {
                    return {
                        hb: d,
                        Zu: e,
                        tj: f,
                        Pd: h,
                        Ig: k,
                        Uk: l,
                        ph: m,
                        xn: u,
                        Js: t
                    }
                },
                yz: function(ia) {
                    T = ia
                },
                Uk: l,
                ph: m,
                xn: u,
                Js: t,
                Sw: function() {
                    return C
                },
                qw: function() {
                    K = !0
                },
                To: function() {
                    return K
                },
                RD: function() {
                    return M
                },
                gu: function() {
                    F || (pa = wl(), "cp" in ca || m("cp", b.Bg()), z("gs_id", v), S = zl(ca) + ":" + a, F = !0)
                }
            };
        var N = a.toLowerCase();
        var qa = Cl(N);
        return V
    };
    var cn = function() {};
    Ea(cn, Fm);
    g = cn.prototype;
    g.O = function(a) {
        this.Ek = a.Ya(156, this);
        this.pd = a.get(126, this)
    };
    g.ya = function() {
        this.Ek.sort(dn)
    };
    g.H = function(a) {
        this.C = a;
        this.Ip = a.Sx
    };
    g.getType = function() {
        return 553
    };
    g.Cm = function(a, b, c) {
        return this.cv(a, b, c)
    };
    g.Pq = function(a) {
        this.Ip = a
    };
    g.cv = function(a, b, c, d) {
        a = bn(a, b || xl(a.length), c || "");
        this.fu(a);
        a.ph("ds", this.C.Gm);
        a.ph("pq", this.Ip);
        d && a.xn();
        a.gu();
        return a
    };
    g.fu = function(a) {
        var b = 1,
            c = a.su(),
            d = this.pd.Rd();
        if (this.Ek)
            for (var e = 0, f; f = this.Ek[e++];) f = f.Cg(c, d), f > b && (b = f);
        a.yz(b)
    };
    var dn = function(a, b) {
        return a.Ha() - b.Ha()
    };
    var en = function() {
        this.Hb = !1;
        this.Yg = -1
    };
    Ea(en, Fm);
    g = en.prototype;
    g.O = function(a) {
        this.Pc = a.get(133, this);
        this.Bb = a.get(130, this);
        this.G = a.get(118, this);
        this.ck = a.get(120, this);
        this.Wc = a.get(494, this);
        this.eq = a.get(124, this);
        this.fq = a.get(125, this);
        this.gq = a.get(230, this);
        this.gz = a.get(127, this);
        this.L = a.L
    };
    g.H = function(a) {
        this.pc = this.gz.pc;
        this.C = a;
        this.Hb = !0;
        this.ie = {};
        this.Tj = 0;
        this.Tw = a.ju;
        this.Uw = a.Og;
        this.Kj = -1;
        this.ad = this.C.Tt && !!this.Pc
    };
    g.getType = function() {
        return 123
    };
    g.Da = function() {
        this.Hb = !1;
        this.Hl();
        this.dg();
        this.ie = null;
        this.Pg()
    };
    g.gn = function(a, b) {
        if (!(!this.Hb || this.Uw || this.Bb && this.Bb.NC())) {
            var c = !0;
            this.NA(a);
            ++this.bq;
            this.Wc.ms(a);
            this.ty();
            if (this.ad) {
                var d = this.Pc.get(a);
                d && ((c = this.Tw || a.Sw()) && this.C.pw && a.qw(), this.fq.process(d), d.Oo() && ++this.zn, this.dg())
            }
            c && (this.bd = a, this.za && !b || this.Mp())
        }
    };
    g.Ej = function() {
        return 10 <= this.pf || 3 <= this.pc.Jn() ? !0 : !1
    };
    g.Pg = function() {
        this.Kj = this.Yg
    };
    g.Qo = function() {
        return this.Yg <= this.Kj
    };
    g.dg = function() {
        this.bd = null
    };
    g.yu = function() {
        return {
            Xw: this.ad,
            Ew: this.ad ? this.Pc.oD() : 0
        }
    };
    g.Mn = function() {
        return this.ad ? this.Pc.Mn() : 0
    };
    g.Du = function() {
        return {
            Ay: this.sm,
            oy: this.rm,
            Jy: this.tm
        }
    };
    g.Cu = function() {
        for (var a = [], b = 0, c, d = 0; d <= fn; ++d) c = this.Mk[d], 0 == c ? b++ : (b = 1 == b ? "0j" : 1 < b ? d + "-" : "", a.push(b + c), b = 0);
        return a.join("j")
    };
    g.ei = function() {
        this.ad && this.Pc.WC()
    };
    g.nd = function() {
        this.ad && this.Pc.nd();
        this.rl = this.gk = this.Bp = this.tm = this.rm = this.sm = this.zn = this.pf = this.bq = 0;
        this.Mk = [];
        for (var a = 0; a <= fn; ++a) this.Mk[a] = 0
    };
    g.zu = function(a) {
        return bb(function(b) {
            this.Np(b, a)
        }, this)
    };
    g.Mp = function() {
        this.Hl();
        if (!(2 < this.pc.Jn()) && this.bd) {
            var a = [],
                b = this.bd.getParameters();
            if (b)
                for (var c in b) yl(c, b[c], a);
            this.L.Ii();
            a = this.pc.ez(this.bd, a.join("&"), this.zu(this.bd), bb(this.Np, this));
            this.bd.To() || (++this.sm, a ? this.js(this.bd) : ++this.rm);
            this.dg();
            this.Sy()
        }
    };
    g.Sy = function() {
        for (var a = 100, b = (this.pf - 2) / 2, c = 1; c++ <= b;) a *= 2;
        a < this.Tj && (a = this.Tj);
        this.za = window.setTimeout(bb(this.Mp, this), a)
    };
    g.Hl = function() {
        null != this.za && (window.clearTimeout(this.za), this.za = null)
    };
    g.js = function(a) {
        this.ie[a.Ga()] = a;
        ++this.pf
    };
    g.Xp = function(a) {
        this.pc.Mt(a);
        delete this.ie[a];
        this.pf && --this.pf
    };
    g.ty = function() {
        var a = wl(),
            b;
        for (b in this.ie) 2500 < a - this.ie[b].Gg() && this.Xp(b)
    };
    g.Np = function(a, b) {
        if (this.Hb) {
            if (!b && (b = this.ie[this.eq.Mx(a)], !b)) return;
            if (!b.To()) {
                a = this.eq.Nx(a, b);
                if (this.gq) {
                    var c = this.G.la();
                    a = this.gq.Sa(a, c)
                }
                this.ad && this.Pc.put(a);
                this.Zw(b) || (++this.tm, this.fq.process(a) || ++this.Bp, this.QA(b, a));
                this.OA(a)
            }
        }
    };
    g.QA = function(a, b) {
        this.Tj = b.getParameters().ev("d");
        a && (this.Xp(a.Ga()), a = wl() - a.Gg(), this.rl += a, this.gk = Math.max(a, this.gk), this.PA(a))
    };
    g.PA = function(a) {
        ++this.Mk[a > gn ? fn : hn[Math.floor(a / 100)]]
    };
    g.OA = function(a) {
        a && (a = a.getParameters().ib("q")) && this.ck.Zz(a)
    };
    g.NA = function(a) {
        a = a.Un();
        a > this.Yg && (this.Yg = a)
    };
    g.Zw = function(a) {
        return a.Un() <= this.Kj
    };
    var hn = [0, 1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8],
        fn = hn[hn.length - 1] + 1,
        gn = 100 * hn.length - 1;
    var jn = function() {
        this.mk = {}
    };
    Ea(jn, Fm);
    g = jn.prototype;
    g.O = function(a) {
        this.Gs = a.get(150, this);
        if (a = a.Ya(158, this))
            for (var b = 0, c; c = a[b++];) this.mk[c.wD()] = c
    };
    g.H = function(a) {
        this.vA = a.ll;
        this.Xv = a.lo
    };
    g.getType = function() {
        return 124
    };
    g.Mx = function(a) {
        return (a[2] || {}).j
    };
    g.Nx = function(a, b) {
        var c = a[0],
            d = a[1],
            e = {};
        if (a = a[2])
            for (var f in a) {
                var h = a[f];
                f in this.mk && (h = this.mk[f].parse(h));
                e[f] = h
            }
        return rm(b, this.Ox(c, d), el(e), !1, !0, !1)
    };
    g.Ox = function(a, b) {
        for (var c = !1, d = !1, e = !1, f = 0, h; h = b[f++];)
            if (33 == this.eo(h) ? d = !0 : c = !0, d && c) {
                e = !0;
                break
            }
        c = 0;
        d = [];
        for (f = 0; h = b[f++];) {
            var k = this.eo(h);
            if (this.vA[k] && (!e || 33 != k)) {
                var l = this.vv(h, a);
                d.push(gl(l, this.Hm(l), c++, k, this.tv(h), this.jv(h)))
            }
        }
        return d
    };
    g.eo = function(a) {
        return a[1] || 0
    };
    g.tv = function(a) {
        return a[2] || []
    };
    g.vv = function(a, b) {
        a = a[0];
        this.Xv && (a = this.Gs.bold(b.toLowerCase(), this.Hm(a)));
        return a
    };
    g.jv = function(a) {
        return (a = a[3]) ? el(a) : fl
    };
    g.Hm = function(a) {
        return Bl(a).replace(ol, "")
    };
    var kn = function() {};
    Ea(kn, Fm);
    kn.prototype.O = function(a) {
        this.J = a.get(117, this);
        this.G = a.get(118, this);
        this.Wc = a.get(494, this);
        this.Hk = a.Ya(122, this);
        this.pd = a.get(126, this);
        this.N = a.get(128, this);
        this.L = a.L;
        this.Hk.sort(ln)
    };
    kn.prototype.getType = function() {
        return 125
    };
    kn.prototype.process = function(a) {
        var b = this.hx(a);
        if (b) {
            if (this.Hk)
                for (var c = 0, d; d = this.Hk[c++];) a = d.Pt(a);
            this.pd.sz(a);
            this.$x(a)
        }
        this.L.Ni(a, b);
        return b
    };
    kn.prototype.hx = function(a) {
        var b = this.G.la(),
            c = this.pd.Rd();
        b = b.toLowerCase();
        var d = a.hb().toLowerCase();
        b == d ? c = !0 : (b = Cl(b), a = (d = a.bf()) ? d.tj() : Cl(a.hb().toLowerCase()), c = c ? c.bf().tj() : "", c = 0 == b.indexOf(a) ? 0 == b.indexOf(c) ? a.length >= c.length : !0 : !1);
        return c
    };
    var ln = function(a, b) {
        return a.Ha() - b.Ha()
    };
    kn.prototype.$x = function(a) {
        var b = a.bf().hb(),
            c = a.yc();
        if (this.N.isEnabled())
            if (c.length) {
                var d = 0 == a.getType();
                this.N.Yk(b, c, d) && this.Wc.tx(a)
            } else this.N.clear();
        this.J.va(3, {
            input: b,
            uA: c
        })
    };
    var mn = function() {};
    Ea(mn, Fm);
    g = mn.prototype;
    g.O = function(a) {
        this.ka = a.get(123, this)
    };
    g.H = function() {
        this.Qs()
    };
    g.getType = function() {
        return 126
    };
    g.Ej = function() {
        return this.ka.Ej()
    };
    g.sz = function(a) {
        this.Qm = a
    };
    g.Rd = function() {
        return this.Qm
    };
    g.Qs = function() {
        this.Qm = null
    };
    var nn = function() {
        this.um = {}
    };
    Ea(nn, Fm);
    nn.prototype.O = function(a) {
        a = a.Ya(149, this);
        for (var b = 0, c; c = a[b++];) this.um[c.Hn()] = c
    };
    nn.prototype.H = function(a) {
        var b = "https:" == document.location.protocol,
            c = [];
        yl("client", a.Ne, c);
        yl("hl", a.hf, c);
        yl("gl", a.qA, c);
        yl("sugexp", a.kl, c);
        yl("gs_rn", 34, c);
        yl("gs_ri", a.ih, c);
        a.Ul && yl("authuser", a.Ul, c);
        this.bt = {
            protocol: "http" + (b ? "s" : "") + "://",
            host: a.Cy || "clients1." + a.dt,
            Dk: a.Dk || "/complete/search",
            pA: c.length ? c.join("&") : ""
        };
        this.pc && this.pc.Hn() == a.ki || (this.pc = this.um[a.ki])
    };
    nn.prototype.getType = function() {
        return 127
    };
    var on = function() {};
    Ea(on, Fm);
    on.prototype.getType = function() {
        return 191
    };
    on.prototype.encode = function(a) {
        "string" == typeof a && (a = pn(a));
        var b = "";
        if (a) {
            for (var c = a.length, d = 0, e = 0, f = 0; c--;)
                for (e <<= 8, e |= a[f++], d += 8; 6 <= d;) b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e >> d - 6 & 63), d -= 6;
            d && (b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e << 8 >> d + 8 - 6 & 63))
        }
        return b
    };
    on.prototype.decode = function(a) {
        var b = [];
        if (a)
            for (var c = 0, d = 0, e = 0; e < a.length; ++e) {
                var f = a.charCodeAt(e);
                if (32 > f || 127 < f || !qn[f - 32]) return [];
                c <<= 6;
                c |= qn[f - 32] - 1;
                d += 6;
                8 <= d && (b.push(c >> d - 8 & 255), d -= 8)
            }
        return b
    };
    on.prototype.qv = function(a, b) {
        var c = {};
        c.pa = Array(4);
        c.buffer = Array(4);
        c.YA = Array(4);
        c.padding = Array(64);
        c.padding[0] = 128;
        for (var d = 1; 64 > d; ++d) c.padding[d] = 0;
        rn(c);
        d = Array(64);
        64 < b.length && (rn(c), sn(c, b), b = tn(c));
        for (var e = 0; e < b.length; ++e) d[e] = b[e] ^ 92;
        for (e = b.length; 64 > e; ++e) d[e] = 92;
        rn(c);
        for (e = 0; 64 > e; ++e) c.buffer[e] = d[e] ^ 106;
        un(c, c.buffer);
        c.total = 64;
        sn(c, pn(a));
        a = tn(c);
        rn(c);
        un(c, d);
        c.total = 64;
        sn(c, a);
        return tn(c)
    };
    var pn = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            return b
        },
        rn = function(a) {
            a.pa[0] = 1732584193;
            a.pa[1] = 4023233417;
            a.pa[2] = 2562383102;
            a.pa[3] = 271733878;
            a.Yf = a.total = 0
        },
        un = function(a, b) {
            for (var c = a.YA, d = 0; 64 > d; d += 4) c[d / 4] = b[d] | b[d + 1] << 8 | b[d + 2] << 16 | b[d + 3] << 24;
            var e = a.pa[0];
            b = a.pa[1];
            d = a.pa[2];
            for (var f = a.pa[3], h, k, l, m = 0; 64 > m; ++m) 16 > m ? (h = f ^ b & (d ^ f), k = m) : 32 > m ? (h = d ^ f & (b ^ d), k = 5 * m + 1 & 15) :
                48 > m ? (h = b ^ d ^ f, k = 3 * m + 5 & 15) : (h = d ^ (b | ~f), k = 7 * m & 15), l = f, f = d, d = b, e = e + h + vn[m] + c[k] & 4294967295, h = wn[m], b = b + ((e << h | e >>> 32 - h) & 4294967295) & 4294967295, e = l;
            a.pa[0] = a.pa[0] + e & 4294967295;
            a.pa[1] = a.pa[1] + b & 4294967295;
            a.pa[2] = a.pa[2] + d & 4294967295;
            a.pa[3] = a.pa[3] + f & 4294967295
        },
        sn = function(a, b, c) {
            c || (c = b.length);
            a.total += c;
            for (var d = 0; d < c; ++d) a.buffer[a.Yf++] = b[d], 64 == a.Yf && (un(a, a.buffer), a.Yf = 0)
        },
        tn = function(a) {
            var b = Array(16),
                c = 8 * a.total,
                d = a.Yf;
            sn(a, a.padding, 56 > d ? 56 - d : 64 - (d - 56));
            for (var e = 56; 64 > e; ++e) a.buffer[e] =
                c & 255, c >>>= 8;
            un(a, a.buffer);
            for (e = d = 0; 4 > e; ++e)
                for (c = 0; 32 > c; c += 8) b[d++] = a.pa[e] >> c & 255;
            return b
        },
        qn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64, 0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0],
        wn = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21,
            6, 10, 15, 21, 6, 10, 15, 21
        ],
        vn = [3614090360, 3905402710, 606105819, 3250441966, 4118548399, 1200080426, 2821735955, 4249261313, 1770035416, 2336552879, 4294925233, 2304563134, 1804603682, 4254626195, 2792965006, 1236535329, 4129170786, 3225465664, 643717713, 3921069994, 3593408605, 38016083, 3634488961, 3889429448, 568446438, 3275163606, 4107603335, 1163531501, 2850285829, 4243563512, 1735328473, 2368359562, 4294588738, 2272392833, 1839030562, 4259657740, 2763975236, 1272893353, 4139469664, 3200236656, 681279174, 3936430074, 3572445317, 76029189,
            3654602809, 3873151461, 530742520, 3299628645, 4096336452, 1126891415, 2878612391, 4237533241, 1700485571, 2399980690, 4293915773, 2240044497, 1873313359, 4264355552, 2734768916, 1309151649, 4149444226, 3174756917, 718787259, 3951481745
        ];
    var xn = function() {};
    Ea(xn, Fm);
    xn.prototype.getType = function() {
        return 150
    };
    xn.prototype.bold = function(a, b) {
        b = Al(b.replace(cl, ""));
        a = Al(Cl(a, !0));
        if (Dl(b, a)) return a + "<b>" + b.substr(a.length) + "</b>";
        for (var c = "", d = [], e = b.length - 1, f = 0, h = -1, k; k = b.charAt(f); ++f) " " == k || "\t" == k ? c.length && (d.push({
            t: c,
            sf: h,
            e: f + 1
        }), c = "", h = -1) : (c += k, -1 == h ? h = f : f == e && d.push({
            t: c,
            sf: h,
            e: f + 1
        }));
        a = this.$u(a, d);
        if (!a.length) return "<b>" + b + "</b>";
        c = "";
        for (f = e = 0; h = a[f]; ++f)(k = d[h.sf].sf) && (c += "<b>" + b.substring(e, k - 1) + "</b> "), e = d[h.e].e, c += b.substring(k, e);
        e < b.length && (c += "<b>" + b.substring(e) + "</b> ");
        return c
    };
    xn.prototype.$u = function(a, b) {
        var c = a.split(/\s+/);
        a = {};
        for (var d = 0, e; e = c[d++];) a[e] = 1;
        c = -1;
        var f = [],
            h = b.length - 1;
        for (d = 0; e = b[d]; ++d) a[e.t] ? (e = -1 == c, d == h ? f.push({
            sf: e ? d : c,
            e: d
        }) : e && (c = d)) : -1 < c && (f.push({
            sf: c,
            e: d - 1
        }), c = -1);
        return f
    };
    var yn = function() {};
    Ea(yn, Fm);
    var zn = function(a) {
        return a.split(",").map(function(b) {
            return String.fromCharCode(12288 + parseInt(b, 16)) + b.substring(2)
        }).join("")
    };
    yn.prototype.getType = function() {
        return 146
    };
    zn("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");
    zn("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");
    zn("D1,D4,D7,DA,DD");
    zn("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");
    zn("D1__,D4__,D7__,DA__,DD");
    zn("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");
    zn("CF,D2,D5,D8,DB");
    var An = function() {
        this.No = !0
    };
    Ea(An, Fm);
    g = An.prototype;
    g.ua = function(a, b) {
        this.Nd = a.Sd();
        b.addRule(".gssb_c", "border:0;position:absolute;z-index:989");
        b.addRule(".gssb_e", "border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "cursor:default");
        b.addRule(".gssb_f", "visibility:hidden;white-space:nowrap");
        b.addRule(".gssb_k", "border:0;display:block;position:absolute;top:0;z-index:988");
        b.addRule(".gsdd_a", "border:none!important")
    };
    g.O = function(a) {
        this.fg = a.get(115, this);
        this.G = a.get(118, this);
        this.J = a.get(117, this);
        this.rq = a.lh.Ga()
    };
    g.ya = function(a) {
        this.C = a;
        this.rt();
        (a.We || document.body).appendChild(this.Aa);
        this.J.tb(8, bb(this.Gc, this))
    };
    g.H = function(a) {
        this.C = a;
        this.Aa.style.position = a.Xe
    };
    g.getType = function() {
        return 116
    };
    g.Tk = function(a) {
        a != this.nf && (this.nf = a, a = a.ma(), this.lk ? a != this.lk && this.lb.replaceChild(a, this.lk) : this.lb.appendChild(a), this.lk = a)
    };
    g.Yb = function() {
        this.eh || (this.eh = this.lb ? Math.max(this.lb.offsetHeight, 0) : 0);
        return this.eh
    };
    g.show = function(a) {
        this.Yx(a);
        this.Ic(this.yi, !0);
        this.Ic(this.nc, !0);
        this.J.va(16);
        this.Gc()
    };
    g.Zc = function() {
        this.eh = 0;
        this.Ic(this.yi, !1);
        this.Ic(this.nc, !1);
        this.ze(this.Nd);
        this.J.va(11)
    };
    g.Gc = function() {
        this.eh = 0;
        this.$p();
        this.zy();
        this.nf && this.nf.Gc()
    };
    g.sh = function(a) {
        this.Nj ? this.Co != a && this.Nj.replaceChild(a, this.Co) : (this.mt(), this.Nj.appendChild(a));
        this.Co = a
    };
    g.mt = function() {
        var a = this.Aa.insertRow(-1);
        a.style.height = "0";
        a.insertCell(-1);
        this.Nj = a.insertCell(-1);
        this.fg.isVisible() || (this.Ic(this.lb, !1), this.Ic(this.Aa, !0), this.Gc());
        this.yi = this.lb
    };
    g.rt = function() {
        this.Aa = Yl();
        this.Aa.className = "gstl_" + this.rq + " gssb_c";
        this.Ic(this.Aa, !1);
        this.yi = this.Aa;
        var a = this.Aa.insertRow(-1);
        this.ce = a.insertCell(-1);
        this.ce.className = "gssb_f";
        this.dk = Zl();
        this.lb = a.insertCell(-1);
        this.lb.className = "gssb_e";
        this.lb.style.width = "100%";
        this.C.Wv && (this.nc = Xl("iframe", "gstl_" + this.rq + " gssb_k"), this.Ic(this.nc, !1), (this.C.We || document.body).appendChild(this.nc));
        if (this.Md = this.C.Tm) "number" == typeof this.Md && (this.Md += this.C.Jd[2]), this.bl(this.Aa, this.Md);
        this.$p()
    };
    g.$p = function() {
        var a = this.nf && this.nf.Td(),
            b = a ? a.offsetWidth : this.G.Vd(),
            c = this.Md;
        c ? "string" == typeof c && (c = null) : this.jp || !this.No ? (this.lb.style.width = "", this.Aa.style.width = "") : (this.lb.style.width = "100%", c = b + this.C.Jd[2], this.bl(this.Aa, c));
        if ("relative" != this.C.Xe) {
            var d = this.G.uj();
            a && (d.Jb = Wl(a).Jb);
            a = this.wv(d, b, c);
            b = {
                Jb: 0,
                Ie: 0
            };
            "absolute" == this.C.Xe && this.C.We && this.C.We != document.body && (b = Wl(this.C.We));
            d = this.Aa.style;
            d.top = a.Ie - b.Ie + "px";
            d.left = d.right = "";
            void 0 != a.Jb ? d.left = a.Jb - b.Jb +
                "px" : d.right = a.My + b.Jb + "px"
        }
        Kl && (d.zoom = "normal", d.zoom = 1)
    };
    g.wv = function(a, b, c) {
        var d = this.C.Jd,
            e = d[1];
        d = d[0];
        d = a.Ie + this.G.Yb() + d;
        if ("right" == this.wo) return {
            My: (jm(this.Aa) || window).document.documentElement.clientWidth - (a.Jb - e + b),
            Ie: d
        };
        a = a.Jb + e;
        "center" == this.wo && c && (a += (b - c) / 2);
        return {
            Jb: a,
            Ie: d
        }
    };
    g.Bz = function(a, b) {
        a.style.height = Math.max(b, 0) + "px"
    };
    g.bl = function(a, b) {
        "number" == typeof b ? 0 < b && (a.style.width = b + "px") : a.style.width = b
    };
    g.zy = function() {
        if (this.nc) {
            var a = this.C.ys[0],
                b = this.nc.style;
            "relative" != this.C.Xe && (b.top = this.Aa.style.top, b.left = this.Aa.offsetLeft + this.ce.offsetWidth + "px");
            this.Bz(this.nc, this.Yb() + a);
            this.bl(this.nc, this.lb.offsetWidth)
        }
    };
    g.Ic = function(a, b) {
        a && (a.style.display = b ? "" : "none")
    };
    g.ze = function(a) {
        this.Va != a && (this.Va = a, am(this.Aa, a))
    };
    g.Nz = function(a) {
        if (this.jp != a) {
            var b = this.dk.style;
            a ? (this.ce.hasChildNodes() || this.ce.appendChild(this.dk), b.width = a + "px", Ml && (b.paddingLeft = "1px")) : (this.ce.hasChildNodes() && this.ce.removeChild(this.dk), b.paddingLeft = "");
            this.jp = a
        }
    };
    g.Yx = function(a) {
        this.lb.className = a.Yv ? "gssb_e gsdd_a" : "gssb_e";
        this.ze(a.Gd || this.Nd);
        this.Nz(a.marginWidth);
        this.No = a.Mo;
        this.wo = a.Jj
    };
    var Bn = function() {
        function a(w, G) {
            Ra && (Ra = !1, A.Gh(q, ia), A.Gh(q, wa));
            G || (G = w);
            q.parentNode.replaceChild(w, q);
            G.appendChild(q);
            na && O.jy && (Il || Ml ? A.defer(function() {
                q.focus();
                Vl(q, za.Bg())
            }) : q.focus());
            Ka()
        }

        function b() {
            return Oa
        }

        function c(w) {
            var G = "rtl" == w == ("rtl" == ja);
            q.dir = w;
            if (eb) {
                W.Rk(w);
                var oa = Ga.parentNode;
                oa.removeChild(eb);
                G ? Ga.parentNode.insertBefore(eb, Ga.nextSibling) : oa.insertBefore(eb, Ga)
            }
            Oa && (Oa.dir = w, oa = Oa.parentNode, oa.removeChild(Oa), G ? oa.insertBefore(Oa, Ga) : Ga.parentNode.insertBefore(Oa,
                Ga.nextSibling));
            0 != da && (G = 0, oa = q.style, "INPUT" != q.nodeName && (G += 1), oa.left = oa.right = "", oa["rtl" == w ? "right" : "left"] = G + "px")
        }

        function d() {
            return za
        }

        function e() {
            return Wl(Na)
        }

        function f() {
            var w = Na ? Na.offsetHeight : 0;
            ta > w && (w = ta);
            return w
        }

        function h() {
            return Ma ? Ma : Na ? Na.offsetWidth : 0
        }

        function k() {
            var w = q.offsetWidth;
            O.Xj && (w -= q.offsetHeight);
            return w
        }

        function l() {
            return q.value
        }

        function m(w) {
            var G = O.wn ? q : Ga || fb || q;
            G.style.background = w || "transparent";
            O.Xh && (G.style.textIndent = -1 == w.indexOf("url") ? "0" :
                O.Xh + "px")
        }

        function u() {
            Za = !0
        }

        function t() {
            q.select();
            va()
        }

        function z() {
            Rl && (q.value = "");
            q.value = p.la();
            Rl && (q.value = q.value);
            F()
        }

        function v() {
            if (!na) try {
                q.focus(), na = !0, F()
            } catch (w) {}
        }

        function U() {
            na && (q.blur(), na = !1)
        }

        function ca() {
            return na
        }

        function S() {
            q.value = ""
        }

        function pa() {
            var w = Ya.get("gs_id");
            if (w) Oa = Ya.get("gs_ttc"), Ga = Ya.get("gs_tti"), p.Gj() && W && (sb = W.ma(), eb = sb.parentNode);
            else {
                w = Yl();
                w.id = Ya.Ga("gs_id");
                w.className = "gstl_" + J + " " + (O.ql || q.className);
                var G = w.insertRow(-1),
                    oa = w.style,
                    Sa =
                    q.style;
                oa.width = Ma ? Ma + "px" : Sa.width;
                oa.height = ta ? ta + "px" : Sa.height;
                oa.padding = "0";
                oa = q.style;
                oa.border = "none";
                oa.padding = Nl || Il ? "0 1px" : "0";
                oa.margin = "0";
                oa.height = "auto";
                oa.width = "100%";
                q.className = O.Qj;
                H && (Oa = G.insertCell(-1), Oa.id = Ya.Ga("gs_ttc"), Oa.style.whiteSpace = "nowrap");
                Ga = G.insertCell(-1);
                Ga.id = Ya.Ga("gs_tti");
                Ga.className = "gsib_a";
                p.Gj() && W && (sb = W.ma(), eb = G.insertCell(-1), eb.className = "gsib_b", eb.appendChild(sb));
                a(w, Ga)
            }
            Sl && Ol && (q.style.height = "1.25em", q.style.marginTop = "-0.0625em");
            C(w);
            Na = w
        }

        function F() {
            if (na) {
                var w = q.value.length;
                za = xl(w);
                Vl(q, w)
            }
        }

        function C(w) {
            A.La(w, "mouseup", function() {
                q.focus()
            })
        }

        function K() {
            A.La(q, "keydown", T);
            (Nl || O.Ms) && A.La(q, "keypress", N);
            A.La(q, "select", va, 10);
            var w = !1,
                G = function(oa) {
                    A.La(q, oa, qa, 10, w)
                };
            G("mousedown");
            G("keyup");
            G("keypress");
            w = !0;
            G("mouseup");
            G("keydown");
            G("focus");
            G("blur");
            G("cut");
            G("paste");
            G("input");
            A.La(q, "compositionstart", M);
            A.La(q, "compositionend", M)
        }

        function M(w) {
            w = w.type;
            "compositionstart" == w ? p.Jq(!0) : "compositionend" ==
                w && p.Jq(!1)
        }

        function T(w) {
            var G = w.keyCode;
            Lb = G;
            var oa = (Ol || Ml) && (38 == G || 40 == G) && I.Yc(),
                Sa = G == sa.El,
                Ad = G == sa.Nh;
            Cb = !1;
            G == sa.Fl && (Cb = p.Xd());
            Sa && ((G = I.cf()) && V(G) ? I.Kg(w.shiftKey) : A.defer(function() {
                I.Kg(w.shiftKey)
            }));
            if (oa || Sa || Ad || Cb) w.Vg = !0
        }

        function V(w) {
            return (w = n[w.getType()].UD) && w()
        }

        function N(w) {
            var G = w.keyCode,
                oa = G == sa.Nh,
                Sa = G == sa.Fl && Cb;
            if (G == sa.El || oa || Sa) w.Vg = !0
        }

        function qa(w) {
            if (!Pa) {
                var G = w.Kf;
                if (!(G.indexOf("key") || w.ctrlKey || w.altKey || w.shiftKey || w.metaKey)) a: if (w = w.keyCode, "keypress" !=
                    G) {
                    var oa = 38 == w || 40 == w;
                    if ("keydown" == G) {
                        if (p.Iz(229 == w), oa) break a
                    } else {
                        var Sa = w != Lb;
                        Lb = -1;
                        if (!oa || Sa) break a
                    }
                    switch (w) {
                        case sa.Nh:
                            p.Jv();
                            break;
                        case sa.Mr:
                            p.Ov();
                            break;
                        case sa.Nr:
                            p.Pv();
                            break;
                        case sa.Or:
                            p.Tv();
                            break;
                        case sa.Lr:
                            p.Hv(za);
                            break;
                        case sa.Qr:
                            p.Gv(za);
                            break;
                        case sa.Pr:
                            p.Dv(za)
                    }
                }
                va();
                p.ko(q.value, za, G)
            }
        }

        function ia() {
            na = !0;
            p.Lv()
        }

        function wa() {
            na = !1;
            p.io()
        }

        function Ka() {
            Ra || (Ra = !0, A.La(q, "focus", ia, 99), A.La(q, "blur", wa, 99))
        }

        function La() {
            ea || (ea = window.setInterval(Aa, O.Px || 50))
        }

        function db() {
            ea &&
                (window.clearTimeout(ea), ea = null)
        }

        function Aa() {
            qa({
                Kf: "polling"
            })
        }

        function Fa() {
            if (Ml) {
                var w = q,
                    G = document.createEvent("KeyboardEvent");
                G.initKeyEvent && (G.initKeyEvent("keypress", !0, !0, null, !1, !1, !0, !1, 27, 0), w.dispatchEvent(G))
            }
        }

        function va() {
            if (na) {
                a: {
                    var w = q;
                    try {
                        if ("selectionStart" in w) {
                            var G = w.selectionStart;
                            var oa = w.selectionEnd
                        } else {
                            var Sa = w.createTextRange(),
                                Ad = im(w).selection.createRange();
                            Sa.inRange(Ad) && (Sa.setEndPoint("EndToStart", Ad), G = Sa.text.length, Sa.setEndPoint("EndToEnd", Ad), oa = Sa.text.length)
                        }
                        if (void 0 !==
                            G) {
                            var Ng = xl(G, oa);
                            break a
                        }
                    } catch (Ko) {}
                    Ng = null
                }
                Ng && (za = Ng)
            }
        }

        function ya() {
            var w;
            A.cc(window, "pagehide", function() {
                Pa = !0;
                w = q.value
            });
            A.cc(window, "pageshow", function(G) {
                Pa = !1;
                (G.persisted || void 0 !== w) && p.Pb(w)
            })
        }
        var sa = dl,
            p, I, A, W, n, q, da, J, O, na, Ra = !1,
            Ba, ea, za = xl(0),
            Lb = -1,
            Za = !1,
            Ga, Na, Oa, eb, sb, Cb, Pa, H, ja, Ya, ta, Ma, fb, gb = {
                ua: function(w, G) {
                    Ya = w;
                    q = w.oj();
                    ja = w.Sd();
                    w.Uf() || (G.addRule(".gsib_a", "width:100%;padding:4px 6px 0"), Ll && G.addRule(".gsib_a input::-ms-clear", "display: none"), G.addRule(".gsib_a,.gsib_b",
                        "vertical-align:top"))
                },
                O: function(w) {
                    p = w.get(118, gb);
                    A = w.get(117, gb);
                    I = w.get(128, gb);
                    W = w.get(173, gb);
                    n = hm(w.Ya(152, gb));
                    w = w.lh;
                    da = w.Rn();
                    J = w.Ga()
                },
                ya: function(w) {
                    O = w;
                    ta = w.Eo;
                    Ma = w.vw;
                    a: {
                        try {
                            na = im(q).activeElement == q;
                            break a
                        } catch (G) {}
                        na = !1
                    }
                    va();
                    Il && A.La(q, "beforedeactivate", function(G) {
                        Za && (Za = !1, G.Vg = !0)
                    }, 10);
                    Ml && ya();
                    Na = q;
                    H = !!w.pg[130];
                    (p.cw() || p.Gj() || H || w.ku) && pa();
                    w.Xt && (A.La(q, "blur", db, 10), A.La(q, "focus", La, 10), Ba = !0);
                    A.tb(8, Fa);
                    K();
                    Ka()
                },
                H: function(w) {
                    O = w;
                    var G = w.uw;
                    G && (fb = Ya.jj(G));
                    q.setAttribute("autocomplete",
                        "off");
                    q.setAttribute("spellcheck", !1);
                    q.style.outline = w.wx ? "" : "none";
                    Ba && La()
                },
                getType: function() {
                    return 119
                },
                qa: function() {
                    return {
                        $E: a,
                        En: b,
                        Rk: c,
                        Pd: d,
                        uj: e,
                        Yb: f,
                        Vd: h,
                        Sn: k,
                        Su: l,
                        th: m,
                        pk: u,
                        select: t,
                        refresh: z,
                        focus: v,
                        blur: U,
                        Wj: ca,
                        clear: S
                    }
                },
                Da: function() {
                    Ba && db();
                    O.so && A.Gh(q, p.io)
                }
            };
        return gb
    };
    var Cn = function() {
        function a(n, q) {
            if (!va) return !1;
            Aa = q;
            pa();
            q = !1;
            for (var da = 0, J; J = n[da++];) z(J) && (q = !0);
            return q
        }

        function b(n) {
            var q = M[n.getType()];
            return q && q.Sv ? q.Sv(n) : !1
        }

        function c(n) {
            return M[n.getType()].Cj(null, n, T)
        }

        function d(n) {
            var q = M[n.getType()];
            return q && q.bj ? q.bj(n, K.Db()) : n.Eb()
        }

        function e(n, q) {
            if (!va) return !1;
            Aa = q;
            pa();
            q = !1;
            for (var da = 0, J; J = n[da++];)
                if (1 == J)
                    if (sa) ya.appendChild(sa);
                    else {
                        J = U();
                        var O = J.style;
                        O.textAlign = "center";
                        O.whiteSpace = "nowrap";
                        J.dir = Fa;
                        O = Zl();
                        O.style.position =
                            "relative";
                        p = Zl();
                        p.className = "gssb_g";
                        N.oo && (p.style.paddingBottom = "1px");
                        v(N.Xy, p, 13);
                        N.bw ? v(N.ej, p, 8) : N.hw && v(N.$y, p, 14);
                        O.appendChild(p);
                        J.appendChild(O);
                        sa = J.parentNode
                    }
            else if (2 == J)
                if (I) ya.appendChild(I);
                else {
                    J = U();
                    O = J.style;
                    O.padding = "1px 4px 2px 0";
                    O.fontSize = "11px";
                    O.textAlign = "right";
                    O = Xl("a");
                    O.id = "gssb_b";
                    oe(O, "http://www.google.com/support/websearch/bin/answer.py?hl=" + N.hf + "&answer=106230");
                    var na = Lh(N.mx);
                    me(O, na);
                    J.appendChild(O);
                    I = J.parentNode
                }
            else 3 == J ? (J = Ka.pop()) ? ya.appendChild(J) :
                (J = va.insertRow(-1), J.ax = !0, J = J.insertCell(-1), O = Xl("div", "gssb_l"), J.appendChild(O)) : z(J) && (q = !0);
            return q
        }

        function f(n) {
            ca(n, A);
            var q = F.yc();
            q && C.va(9, {
                index: n,
                YE: q[n],
                aF: La[n]
            })
        }

        function h(n) {
            ca(n, "");
            C.va(10)
        }

        function k() {
            for (var n, q, da; da = ia.pop();) n = da.getType(), (q = qa[n]) || (q = qa[n] = []), q.push(da), n = da.ma(), n.parentNode.removeChild(n);
            for (; n = ya.firstChild;) n = ya.removeChild(n), n.ax ? Ka.push(n) : n != sa && n != I && wa.push(n);
            La = []
        }

        function l(n) {
            return (n = La[n]) ? n.Wg() : !1
        }

        function m() {
            pa()
        }

        function u() {
            return va
        }

        function t() {
            return N.mo || Fa == Aa ? db : null
        }

        function z(n) {
            var q = n.getType(),
                da = M[q];
            if (!da) return !1;
            var J = (q = qa[q]) && q.pop();
            J || (J = da.pi(T));
            da.render(n, J);
            ia.push(J);
            var O = J.ma();
            q = U();
            q.className = "gssb_a " + N.nr;
            q.appendChild(O);
            if (void 0 !== n.yg) {
                La.push(J);
                J = Aa;
                var na = n.yg();
                N.ow && (O.onmouseover = function() {
                    F.Cz(na)
                }, O.onmouseout = function() {
                    F.Gy()
                });
                O.onclick = function(Ra) {
                    K.Xf();
                    n.Pn() && K.rh(n.Eb());
                    F.Fy();
                    F.Fv(na);
                    Ra = Ra || jm(O).event;
                    da.Wd(Ra, n, T)
                }
            } else J = Fa;
            am(q, J);
            return !0
        }

        function v(n, q, da) {
            var J =
                Xl("input");
            J.type = "button";
            J.value = Bl(n);
            J.onclick = function() {
                T.search(K.la(), da)
            };
            if (N.Zv) {
                n = "lsb";
                var O = Xl("span");
                var na = Xl("span");
                O.className = "ds";
                na.className = "lsbb";
                O.appendChild(na);
                na.appendChild(J)
            } else n = "gssb_h", O = J;
            J.className = n;
            q.appendChild(O)
        }

        function U() {
            var n = wa.pop();
            if (n) return ya.appendChild(n), n.firstChild;
            n = va.insertRow(-1);
            n = n.insertCell(-1);
            n.className = N.nr;
            n.onmousedown = S;
            return n
        }

        function ca(n, q) {
            (n = La[n]) && n.Wg() && (n.ma().parentNode.parentNode.className = q)
        }

        function S(n) {
            n =
                n || jm(va).event;
            n.stopPropagation ? n.stopPropagation() : Nl || Il && K.pk();
            return !1
        }

        function pa() {
            if (p) {
                var n = K.Vd() - 3;
                0 < n && (p.style.width = n + "px")
            }
        }
        var F, C, K, M, T, V, N, qa = {},
            ia = [],
            wa = [],
            Ka = [],
            La = [],
            db, Aa, Fa, va, ya, sa, p, I, A, W = {
                ua: function(n, q) {
                    V = n;
                    Fa = n.Sd();
                    q.addRule(".gssb_a", "padding:0 7px");
                    q.addRule(".gssb_a,.gssb_a td", "white-space:nowrap;overflow:hidden;line-height:22px");
                    q.addRule("#gssb_b", "font-size:11px;color:#36c;text-decoration:none");
                    q.addRule("#gssb_b:hover", "font-size:11px;color:#36c;text-decoration:underline");
                    q.addRule(".gssb_g", "text-align:center;padding:8px 0 7px;position:relative");
                    q.addRule(".gssb_h", "font-size:15px;height:28px;margin:0.2em" + (Ol ? ";-webkit-appearance:button" : ""));
                    q.addRule(".gssb_i", "background:#eee");
                    q.addRule(".gss_ifl", "visibility:hidden;padding-left:5px");
                    q.addRule(".gssb_i .gss_ifl", "visibility:visible");
                    q.addRule("a.gssb_j", "font-size:13px;color:#36c;text-decoration:none;line-height:100%");
                    q.addRule("a.gssb_j:hover", "text-decoration:underline");
                    q.addRule(".gssb_l", "height:1px;background-color:#e5e5e5");
                    q.addRule(".gssb_m", "color:#000;background:#fff")
                },
                O: function(n) {
                    F = n.get(128, W);
                    C = n.get(117, W);
                    K = n.get(118, W);
                    T = n.get(121, W);
                    M = hm(n.Ya(152, W))
                },
                ya: function(n) {
                    N = n;
                    va = Yl();
                    n = Xl("tbody");
                    va.appendChild(n);
                    ya = va.getElementsByTagName("tbody")[0]
                },
                H: function(n) {
                    N = n;
                    var q = n.Sp;
                    q && (db = V.jj(q));
                    va.className = n.rr || "gssb_m";
                    A = n.pr || "gssb_i"
                },
                getType: function() {
                    return 129
                },
                qa: function() {
                    return {
                        vy: a,
                        bj: d,
                        Kg: c,
                        Xd: b,
                        render: e,
                        nw: f,
                        Fh: h,
                        clear: k,
                        Wg: l,
                        Gc: m,
                        ma: u,
                        Td: t
                    }
                }
            };
        return W
    };
    var Dn = function() {};
    Ea(Dn, Fm);
    g = Dn.prototype;
    g.ua = function(a) {
        this.Lx = a.Ln() || document.body
    };
    g.ya = function(a) {
        this.C = a
    };
    g.getType = function() {
        return 147
    };
    g.Vd = function(a) {
        var b = 0;
        a && (this.Mb || this.vm(), this.im(), a in this.ci ? b = this.ci[a] : ($l(this.Mb, Al(a)), this.ci[a] = b = this.Mb.offsetWidth, $l(this.Mb, "")));
        return b
    };
    g.Yb = function() {
        this.Mb || this.vm();
        this.im();
        this.bi || ($l(this.Mb, "|"), this.bi = this.Mb.offsetHeight);
        return this.bi
    };
    g.vm = function() {
        var a = Zl(this.C.Qj),
            b = a.style;
        b.background = "transparent";
        b.color = "#000";
        b.padding = 0;
        b.position = "absolute";
        b.whiteSpace = "pre";
        this.Mb = a;
        this.Mb.style.visibility = "hidden";
        this.Lx.appendChild(this.Mb)
    };
    g.im = function() {
        var a = wl();
        if (!this.Yl || this.Yl + 3E3 < a) {
            this.Yl = a;
            a = this.Mb;
            var b = jm(a);
            a = (a = b.getComputedStyle ? b.getComputedStyle(a, "") : a.currentStyle) ? a.fontSize : null;
            this.Zl && a == this.Zl || (this.ci = {}, this.bi = null, this.Zl = a)
        }
    };
    var En = function() {
        this.Cd = {};
        this.set(191, new on);
        this.set(150, new xn);
        this.set(146, new yn);
        this.set(147, new Dn);
        this.Pa(149, Im());
        this.set(145, new Pm);
        this.set(117, new Rm);
        this.set(494, new Um);
        this.set(374, new Vm);
        this.set(120, new Wm);
        this.set(121, new an);
        this.set(553, new cn);
        this.set(124, new jn);
        this.set(125, new kn);
        this.set(123, new en);
        this.set(126, new mn);
        this.set(127, new nn);
        this.set(115, new Jm);
        this.set(118, new Lm);
        this.set(128, Mm());
        this.set(116, new An);
        this.set(119, Bn());
        this.set(129, Cn())
    };
    hb(En, tm);

    function Fn() {
        return {
            qj: function() {
                return {
                    Ne: "hp",
                    ih: "hp",
                    dt: "google.com",
                    qA: "",
                    hf: "en",
                    Gm: "",
                    Sx: "",
                    TA: "",
                    Ul: 0,
                    px: "",
                    kl: "",
                    Xm: !1,
                    Cy: "",
                    Dk: "",
                    ki: 0,
                    fF: null,
                    Dr: !1,
                    JE: !1,
                    Og: !1,
                    ll: vl([19, 5, 0]),
                    Tt: !0,
                    kD: 10,
                    Rt: !0,
                    Ut: !0,
                    dD: !1,
                    ju: !1,
                    Vw: !1,
                    Xj: !1,
                    bx: !1,
                    lw: !1,
                    JC: !0,
                    VE: "en",
                    Xh: 0,
                    so: !0,
                    Ht: !1,
                    mw: 500,
                    Fj: !1,
                    Ng: !0,
                    ro: !0,
                    ew: !1,
                    wp: "",
                    rE: "//www.google.com/textinputassistant",
                    sE: "",
                    uE: 7,
                    GD: !1,
                    HD: !1,
                    gw: !1,
                    bw: !0,
                    hw: !1,
                    oo: !1,
                    Wy: !1,
                    Vy: !1,
                    ml: 1,
                    vx: !0,
                    dj: !1,
                    cj: !1,
                    Xt: !1,
                    Px: 10,
                    lo: !1,
                    jy: !0,
                    We: document.body,
                    iw: !0,
                    ir: null,
                    pg: {},
                    iD: {},
                    BE: 0,
                    ku: !1,
                    pw: !0,
                    Oc: !1,
                    lD: !1,
                    QD: !1,
                    SE: null,
                    Vt: !1,
                    eE: null,
                    oA: null,
                    hD: !1,
                    ow: !0,
                    Ms: !1,
                    bF: 1,
                    wx: !1,
                    Xy: "Search",
                    ej: "I'm  Feeling Lucky",
                    $y: "",
                    mx: "Learn more",
                    GE: "Remove",
                    EE: "This search was removed from your Web History",
                    KD: "",
                    cD: "Did you mean:",
                    tE: "",
                    NE: "",
                    WE: "Search by voice",
                    UE: 'Listening for "Ok Google"',
                    TE: 'Say "Ok Google"',
                    wn: !1,
                    uw: null,
                    Eo: 0,
                    vw: 0,
                    Qj: "",
                    nr: "",
                    WD: !1,
                    Xe: "absolute",
                    Zv: !1,
                    Wv: !1,
                    Sp: null,
                    mo: !0,
                    Jd: [0, 0, 0],
                    Tm: null,
                    qr: null,
                    ys: [0],
                    FE: 1,
                    ql: "",
                    rr: "",
                    pr: "",
                    tn: null,
                    vn: "",
                    un: "",
                    TC: 1
                }
            }
        }
    };
    var Gn = function() {
        this.da = !1;
        this.Zj = ""
    };
    Ea(Gn, Fm);
    g = Gn.prototype;
    g.ua = function(a) {
        this.bc = a.oj()
    };
    g.O = function(a) {
        this.J = a.get(117, this);
        this.G = a.get(118, this);
        this.kb = a.get(374, this);
        this.Jf = a.get(121, this)
    };
    g.H = function(a) {
        this.Bc = a.Xj && !a.bx;
        this.vo = a.lw;
        this.Ar();
        this.bc.setAttribute("x-webkit-grammar", "builtin:search");
        "" != a.hf && this.bc.setAttribute("lang", a.hf);
        this.Bc ? (this.Af || (this.Af = bb(this.Qv, this)), this.J.cc(this.bc, "webkitspeechchange", this.Af)) : this.Af && (this.J.ul(this.bc, "webkitspeechchange", this.Af), this.Af = null);
        this.Bc && this.vo ? (this.ud || (this.ud = bb(this.Ar, this)), this.J.tb(4, this.ud), this.J.tb(5, this.ud), this.J.tb(1, this.ud)) : this.ud && (this.J.LA(this.ud), this.ud = null)
    };
    g.getType = function() {
        return 419
    };
    g.Xu = function(a) {
        return this.xh && this.Bf == a.hb() ? rm(a, this.xh, fl, !0, !1, !1) : null
    };
    g.eg = function(a) {
        return !!a && 0 <= a.indexOf("**")
    };
    g.Ss = function() {
        this.Zj = ""
    };
    g.Ar = function() {
        var a = this.Bc && (!this.vo || !this.G.la());
        a != this.da && (this.da ? this.bc.removeAttribute("x-webkit-speech") : this.bc.setAttribute("x-webkit-speech", ""), this.da = a)
    };
    g.Fs = function(a, b) {
        b = Al(b);
        a = Al(Cl(a, !0));
        a = a.split(" ");
        b = b.split(" ");
        for (var c, d = 0; d < b.length; ++d) c = b[d], 0 > a.indexOf(c) && (b[d] = c.bold());
        return b.join(" ").replace(Hn, " ")
    };
    g.Qv = function(a) {
        a = a && a.results ? a.results : [];
        var b = Math.min(a.length, 3);
        this.Bf = a[0].utterance;
        this.kb.add(6);
        if (this.eg(this.Bf)) {
            this.xh = [];
            for (var c = 0; c < b; ++c) {
                var d = a[c].utterance;
                this.eg(d) || (d = gl(this.Fs(this.Bf, d), d, c, 40, null), this.xh.push(d))
            }
        } else this.xh = null, this.Zj = this.Bf, this.Jf.search(this.Bf, 15)
    };
    var Hn = /<\/b> <b>/gi;

    function In() {}
    In.prototype.Wg = function() {
        return !0
    };
    var Jn = function(a, b) {
        this.G = a;
        this.Jf = b;
        this.zc()
    };
    Ea(Jn, In);
    Jn.prototype.ma = function() {
        return this.ba
    };
    Jn.prototype.getType = function() {
        return 40
    };
    Jn.prototype.render = function(a, b, c) {
        ne(this.Ef, Lh(a));
        this.Of = b;
        c && !this.Xa && (this.Xa = fm(this.Df), this.Xa.onclick = bb(function(d) {
            this.G.Xf();
            this.G.rh(this.Of);
            this.Jf.search(this.Of, 9);
            return em(d)
        }, this));
        c ? (ne(this.Xa, Lh(c + " &raquo;")), this.Xa.style.display = "") : this.Xa && (this.Xa.style.display = "none")
    };
    Jn.prototype.zc = function() {
        this.ba = Zl();
        this.ba.className = "gsq_a";
        var a = Yl();
        this.ba.appendChild(a);
        this.Df = a.insertRow(-1);
        a = this.Df.insertCell(-1);
        a.style.width = "100%";
        this.Ef = Xl("span");
        a.appendChild(this.Ef)
    };
    var Kn = function() {
        function a(k) {
            return new Jn(e, k)
        }

        function b(k, l) {
            l.render(k.nj(), k.Eb(), f)
        }

        function c(k, l, m) {
            m.search(l.Eb(), 1)
        }

        function d() {
            return 40
        }
        var e, f, h = {
            ua: function(k, l) {
                l.addRule(".gsq_a", "padding:0")
            },
            O: function(k) {
                e = k.get(118, h)
            },
            H: function(k) {
                f = k.cj ? k.ej : ""
            },
            getType: function() {
                return 152
            },
            qa: function() {
                return {
                    pi: a,
                    render: b,
                    Wd: c,
                    Cj: El,
                    xj: d
                }
            }
        };
        return h
    };
    var Ln = function() {};
    Ea(Ln, Fm);
    Ln.prototype.O = function(a) {
        this.il = a.get(419, this)
    };
    Ln.prototype.getType = function() {
        return 156
    };
    Ln.prototype.Cg = function(a) {
        var b = a.Ig();
        return this.il && "input" == b && this.il.Zj == a.hb() ? (this.il.Ss(), 3) : 1
    };
    Ln.prototype.Ha = function() {
        return 22
    };
    var Mn = function() {};
    Ea(Mn, Fm);
    g = Mn.prototype;
    g.O = function(a) {
        this.fg = a.get(419, this)
    };
    g.getType = function() {
        return 151
    };
    g.Ha = function() {
        return 1
    };
    g.update = function() {};
    g.get = function(a) {
        var b = null;
        this.fg && (b = this.fg.Xu(a));
        return b
    };
    g.reset = function() {};
    var Nn = function() {};
    Ea(Nn, Fm);
    g = Nn.prototype;
    g.ua = function(a, b) {
        this.Ea = a;
        a.Uf() || (b.addRule(".gscb_a", "display:inline-block;font:27px/13px arial,sans-serif"), b.addRule(".gsst_a .gscb_a", "color:#a1b9ed;cursor:pointer"), b.addRule(".gsst_a:hover .gscb_a,.gsst_a:focus .gscb_a", "color:#36c"))
    };
    g.O = function(a) {
        this.G = a.get(118, this);
        this.J = a.get(117, this);
        this.wm = a.get(173, this)
    };
    g.ya = function(a) {
        this.Bc = !!a.Ng;
        this.xr(a);
        this.zf = this.Ea.get("gs_cb");
        this.zf || (this.zf = Xl("span", "gscb_a"), this.zf.id = this.Ea.Ga("gs_cb"), a = Lh("&times;"), me(this.zf, a));
        a = bb(this.Nv, this);
        this.J.tb(4, a);
        this.J.tb(5, a);
        this.J.tb(1, a)
    };
    g.H = function(a) {
        a.Fj && (this.Bc = !!a.Ng);
        this.xr(a)
    };
    g.getType = function() {
        return 160
    };
    g.isEnabled = function() {
        return this.Bc
    };
    g.Hg = function() {
        return On
    };
    g.Ha = function() {
        return 5
    };
    g.ma = function() {
        return this.zf
    };
    g.wj = function() {
        return {
            Po: !this.da
        }
    };
    g.Wd = function() {
        this.G.clear(!0)
    };
    g.xr = function(a) {
        this.uo = a.ro;
        this.da = !this.uo || !!this.G.la()
    };
    g.RA = function() {
        var a = this.Hg();
        this.da && this.Bc ? this.wm.iA(a) : this.wm.to(a)
    };
    g.Nv = function() {
        this.uo && (this.da = !!this.G.la(), this.RA())
    };
    var On = ul++;
    var Pn = function() {
        this.Fe = {}
    };
    Ea(Pn, Fm);
    g = Pn.prototype;
    g.ua = function(a, b) {
        this.Ea = a;
        this.Nd = a.Sd();
        a.Uf() || (b.addRule(".gsst_a", "display:inline-block"), b.addRule(".gsst_a", "cursor:pointer;padding:0 4px"), b.addRule(".gsst_a:hover", "text-decoration:none!important"), b.addRule(".gsst_b", "font-size:16px;padding:0 2px;position:relative;" + b.prefix("user-select:none;") + "white-space:nowrap"), b.addRule(".gsst_e", "vertical-align:middle;" + (km() + ":" + lm(.55) + ";")), b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e", km() + ":" + lm(.72) + ";"), b.addRule(".gsst_a:active .gsst_e",
            km() + ":" + lm(1) + ";"), b.addRule(".gsst_f", "background:white;text-align:left"), b.addRule(".gsst_g", "background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;" + b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);") + "margin:-1px -3px;padding:0 6px"), b.addRule(".gsst_h", "background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px"))
    };
    g.Od = function() {
        var a = {
            Tf: bb(this.Tf, this),
            ma: bb(this.Hu, this),
            Td: bb(this.Td, this),
            Lg: bb(this.Lg, this),
            Gc: El,
            af: bb(this.af, this)
        };
        return [{
            ua: El,
            O: El,
            ya: El,
            H: El,
            getType: function() {
                return 154
            },
            qa: function() {
                return a
            },
            Od: function() {
                return null
            },
            Da: El
        }]
    };
    g.O = function(a) {
        this.Ot = a.get(115, this);
        this.J = a.get(117, this);
        this.G = a.get(118, this);
        this.Ge = a.Ya(160, this);
        this.L = a.L
    };
    g.getType = function() {
        return 173
    };
    g.ya = function(a) {
        this.$v = a.Fj;
        this.Ge.sort(Qn);
        this.ba = this.Ea.get("gs_st");
        if (!this.ba) {
            this.ba = Zl("gsst_b");
            this.ba.id = this.Ea.Ga("gs_st");
            if (a = a.Eo) this.ba.style.lineHeight = a + "px";
            this.kn()
        }
        this.qm()
    };
    g.H = function(a) {
        this.C = a;
        if (a = a.Sp) this.ky = this.Ea.jj(a);
        if (this.$v) {
            a = 0;
            for (var b; b = this.Ge[a++];) {
                var c = !!this.Fe[b.Hg()];
                if (b.isEnabled() != c) {
                    for (; this.ba.hasChildNodes();) this.ba.removeChild(this.ba.lastChild);
                    this.kn();
                    this.qm();
                    break
                }
            }
        }
        this.Nt = Zl("gsst_h");
        this.Ai = Zl("gsst_f");
        this.Ai.dir = "ltr";
        this.Ai.appendChild(this.Nt);
        this.J.tb(13, bb(this.Ev, this))
    };
    g.Rk = function(a) {
        this.Va != a && (this.ba.dir = this.Va = a, this.Hj())
    };
    g.ma = function() {
        return this.ba
    };
    g.iA = function(a) {
        (a = this.Fe[a]) && a.style && (a.style.display = "")
    };
    g.to = function(a) {
        (a = this.Fe[a]) && a.style && (a.style.display = "none")
    };
    g.Hj = function() {
        this.Ci && (this.Fe[this.Ci].className = "gsst_a", this.Ot.Zc(), this.Ci = null)
    };
    g.Tf = function(a) {
        a.Jj = "rtl" == this.Va ? "left" : "right";
        a.Mo = !1
    };
    g.Hu = function() {
        return this.Ai
    };
    g.Td = function() {
        return this.C.mo || this.Nd == this.Va ? this.ky : null
    };
    g.Lg = function() {
        this.Hj()
    };
    g.af = function() {
        return Rn
    };
    var Qn = function(a, b) {
        return b.Ha() - a.Ha()
    };
    g = Pn.prototype;
    g.Ev = function() {
        this.xo != this.Ci && this.Hj()
    };
    g.kn = function() {
        for (var a, b = 0, c; c = this.Ge[b++];)
            if (c.isEnabled()) {
                a = !0;
                var d = Xl("a", "gsst_a");
                this.Yt(d, c);
                d.appendChild(c.ma());
                this.ba.appendChild(d)
            }
        this.ba.style.display = a ? "" : "none"
    };
    g.Rs = function() {
        this.xo = null
    };
    g.qm = function() {
        this.Fe = {};
        for (var a = 0, b; b = this.Ge[a++];)
            if (b.isEnabled()) {
                var c = b.Hg(),
                    d = b.ma().parentNode;
                d.onclick = bb(b.Wd, b);
                d.onmouseover = function() {
                    this.xo = c
                };
                d.onmouseout = this.Rs;
                this.Fe[c] = d;
                b.wj && (b = b.wj(), b.Po && this.to(c), (b = b.dF) && !this.L.$k(d, b) && (d.title = b))
            }
    };
    g.Yt = function(a, b) {
        a.href = "javascript:void(0)";
        Nl && (a.tabIndex = 0);
        a.onkeydown = function(c) {
            c = c || window.event;
            var d = c.keyCode;
            if (13 == d || 32 == d) b.Wd(c), this.G.iu(), em(c)
        }
    };
    var Rn = ul++;
    var Sn = function(a, b) {
        this.G = a;
        this.Jf = b;
        this.zc()
    };
    Ea(Sn, In);
    Sn.prototype.ma = function() {
        return this.ba
    };
    Sn.prototype.getType = function() {
        return 0
    };
    Sn.prototype.render = function(a, b, c) {
        ne(this.Ef, Lh(a));
        this.Of = b;
        c && !this.Xa && (this.Xa = fm(this.Df), this.Xa.onclick = bb(function(d) {
            this.G.Xf();
            this.G.rh(this.Of);
            this.Jf.search(this.Of, 9);
            return em(d)
        }, this));
        c ? (ne(this.Xa, Lh(c + " &raquo;")), this.Xa.style.display = "") : this.Xa && (this.Xa.style.display = "none")
    };
    Sn.prototype.zc = function() {
        this.ba = Zl();
        this.ba.className = "gsq_a";
        var a = Yl();
        this.ba.appendChild(a);
        this.Df = a.insertRow(-1);
        a = this.Df.insertCell(-1);
        a.style.width = "100%";
        this.Ef = Xl("span");
        a.appendChild(this.Ef)
    };
    var Tn = function() {
        function a(k) {
            return new Sn(e, k)
        }

        function b(k, l) {
            l.render(k.nj(), k.Eb(), f)
        }

        function c(k, l, m) {
            m.search(l.Eb(), 1)
        }

        function d() {
            return 0
        }
        var e, f, h = {
            ua: function(k, l) {
                l.addRule(".gsq_a", "padding:0")
            },
            O: function(k) {
                e = k.get(118, h)
            },
            H: function(k) {
                f = k.cj ? k.ej : ""
            },
            getType: function() {
                return 152
            },
            qa: function() {
                return {
                    pi: a,
                    render: b,
                    Wd: c,
                    Cj: El,
                    xj: d
                }
            }
        };
        return h
    };
    var Un = function() {
        var a = {
                Tr: "oq",
                Ur: "gs_l"
            },
            b, c, d, e, f, h, k, l, m, u, t, z, v, U, ca, S = !1,
            pa, F, C, K, M = !1,
            T = function(p) {
                var I = !0;
                void 0 != p && (I = p == c.Og, c.Og = p);
                b ? I || b.H(c) : (b = Bm().qj(f, d, ya, c.pm), b.install(c))
            },
            V = function(p) {
                b.Pb(p)
            },
            N = function(p) {
                return p + (0 <= p.indexOf("?") ? "&" : "?") + b.hv()
            },
            qa = function(p) {
                var I = window.location;
                p = p instanceof yd ? p : Id(p);
                I.href = zd(p)
            },
            ia = function() {
                F && F()
            },
            wa = function() {
                return c.ih
            },
            Ka = function(p, I, A, W, n) {
                d = p;
                f = I;
                C = W;
                K = A || "partner-generic";
                (m = n.brandingPlaceholder) && I.setAttribute("placeholder",
                    m);
                D(f, "gsc-input");
                var q = n.onRenderCallback;
                q && (F = function() {
                    try {
                        q()
                    } catch (da) {}
                });
                c = db();
                Fa(c, n);
                p = new Nn;
                Aa(C, c, p);
                T();
                La(p, n.clearToolTitle);
                n.searchButton && b.ls(n.searchButton, 12)
            },
            La = function(p, I) {
                p = p.ma();
                var A = p.parentElement;
                A && (A.setAttribute("title", I), "button" != (A.getAttribute("role") || null) && A.setAttribute("role", "button"), p.setAttribute("aria-hidden", !0))
            },
            db = function() {
                var p = sa.qj(),
                    I = K;
                p.Ne = I;
                p.ih = I;
                p.Gm = "partner-generic-exp" === p.Ne || "partner-web-exp" === p.Ne ? "cse_exp" : "cse";
                p.VD = !0;
                p.oA = {
                    partnerid: C
                };
                p.wn = !0;
                p.Qj = "gsc-input";
                p.rr = "gsc-completion-container";
                p.pr = "gsc-completion-selected";
                v && (p.tn = f.id, p.vn = "gsc-input-hover", p.un = "gsc-input-focus");
                p.Jd = [-1, 0, 0];
                p.lo = !0;
                p.Oc = !0;
                p.Ng = !0;
                p.ro = !0;
                p.spellcheck = !1;
                p.ll = vl([0, 34]);
                return p
            },
            Aa = function(p, I, A) {
                var W = new En;
                W.Pa(152, Tn());
                W.Pa(153, mm());
                W.Pa(160, A);
                W.set(173, new Pn);
                k && W.Pa(152, om(k, l, m));
                W.Pa(156, pm(p));
                W.set(582, Cm());
                W.Pa(156, Em());
                W.Pa(311, Dm());
                u && W.Pa(160, new Hm(u));
                W.Pa(122, sm(t, z));
                I.pm = W;
                ca && (p = I.pm, p.set(419,
                    new Gn), p.Pa(156, new Ln), p.Pa(151, new Mn), p.Pa(152, Kn()))
            },
            Fa = function(p, I) {
                if (U = !!I.useKennedyLookAndFeel) v && (p.tn = f.parentNode.id, p.vn = "gsc-input-box-hover", p.un = "gsc-input-box-focus"), p.Jd = [3, -1, 2], p.Ng = !0;
                I.interfaceLanguage && (p.hf = I.interfaceLanguage);
                I.disableAutoCompletions && (p.Og = !0);
                t = parseInt(I.maxSuggestions, 10);
                0 <= t || (t = 10);
                z = parseInt(I.maxPromotions, 10);
                0 <= z || (z = 3);
                p.kl = "csems,nrl=" + (t + 3);
                k = I.brandingImageUrl;
                l = I.brandingImage2xUrl;
                k && (u = I.brandingImageStyle + " url(" + k + ")", p.Xh = I.backgroundTextIndent);
                var A = I.styleOptions;
                if (A) {
                    var W = A.xOffset || 0,
                        n = A.yOffset || 0,
                        q = A.widthOffset || 0,
                        da = A.fixedWidth;
                    S = !!A.allowWordWrapping;
                    var J = p.Jd;
                    J[0] += n;
                    J[1] += W;
                    J[2] += q;
                    p.Tm = da;
                    p.qr = A.xAlign;
                    A.positionFixed && (p.Xe = "fixed")
                }
                ca = !!I.enableSpeech
            },
            va = function() {},
            ya = {
                H: T,
                install: function(p, I, A, W, n) {
                    Ka(p, I, void 0 === n ? null : n, A, W);
                    if (W.isLoggingWithHiddenFormFields) {
                        h = {};
                        for (var q in a) p = a[q], h[p] = b.cs(d, p)
                    } else M = !0, d && (d.addEventListener ? d.addEventListener("submit", va, !1) : d.attachEvent && d.attachEvent("onsubmit", va))
                },
                Bw: function(p, I, A, W) {
                    v = A;
                    Ka(p, I, v.Fg(), v.Ag() || "", W);
                    W.enableAsynchronousLogging && (M = !0)
                },
                Cw: function(p, I, A, W, n) {
                    Ka(null, I, void 0 === n ? null : n, A, W);
                    M = !0;
                    e = p
                },
                Pb: V,
                la: function() {
                    return b.la()
                },
                yD: wa,
                b: function(p, I) {
                    p != f.value && (v && window.console && window.console.log && window.console.log("Programmatically setting input.value? Please consider using prefillQuery() or execute() from google.search.SearchControl instead."), p = f.value, V(p));
                    if (p && !nl.test(p)) {
                        pa = I;
                        I = b.sj(pa);
                        if (h) {
                            var A = a.Tr;
                            h[A] && (h[A].value =
                                I[A]);
                            A = a.Ur;
                            h[A] && (h[A].value = I[A])
                        }
                        v ? (p != b.la() && b.Pb(p), M ? v.submit() : v.tA(I)) : e ? e(I) : d && (d.fireEvent && document.createEventObject ? (p = document.createEventObject(), d.fireEvent("onsubmit", p) && d.submit()) : d.dispatchEvent && document.createEvent ? (p = document.createEvent("HTMLEvents"), p.initEvent("submit", !0, !0), d.dispatchEvent(p) && d.submit()) : d.onsubmit && 0 == d.onsubmit() || d.submit());
                        pa = null
                    }
                },
                c: qa,
                d: function(p) {
                    qa(N(p))
                },
                e: N,
                f: wa,
                o: ia,
                p: ia,
                r: function(p) {
                    v ? U ? (p.addRule(".gssb_a", "padding:0 9px"), p.addRule(".gsib_a",
                        "padding:5px 9px 4px 9px"), p.addRule(".gscb_a", "line-height:27px")) : p.addRule(".gssb_a", "padding:0 7px") : p.addRule(".gssb_a", "padding:0 2px");
                    p.addRule(".gssb_e", "border:0");
                    p.addRule(".gssb_l", "margin:5px 0");
                    p.addRule("input.gsc-input::-webkit-input-placeholder", "font-size:14px");
                    p.addRule("input.gsc-input:-moz-placeholder", "font-size:14px");
                    p.addRule("input.gsc-input::-moz-placeholder", "font-size:14px");
                    p.addRule("input.gsc-input:-ms-input-placeholder", "font-size:14px");
                    p.addRule("input.gsc-input:focus::-webkit-input-placeholder",
                        "color:transparent");
                    p.addRule("input.gsc-input:focus:-moz-placeholder", "color:transparent");
                    p.addRule("input.gsc-input:focus::-moz-placeholder", "color:transparent");
                    p.addRule("input.gsc-input:focus:-ms-input-placeholder", "color:transparent");
                    p.addRule(".gssb_c .gsc-completion-container", "position:static");
                    p.addRule(".gssb_c", "z-index:5000");
                    p.addRule(".gsc-completion-container table", "background:transparent;font-size:inherit;font-family:inherit");
                    p.addRule(".gssb_c > tbody > tr,.gssb_c > tbody > tr > td,.gssb_d,.gssb_d > tbody > tr,.gssb_d > tbody > tr > td,.gssb_e,.gssb_e > tbody > tr,.gssb_e > tbody > tr > td",
                        "padding:0;margin:0;border:0");
                    p.addRule(".gssb_a table,.gssb_a table tr,.gssb_a table tr td", "padding:0;margin:0;border:0");
                    S && p.addRule(".gssb_a,.gssb_a td", "white-space:normal")
                },
                x: function() {
                    v && v.Qb()
                }
            };
        var sa = Fn();
        return ya
    };
    var Vn = ri(oi.Sa(Ii.blank)),
        Wn = de(Ii.next),
        Xn = function(a) {
            var b = a.u.Aj();
            this.level = a.ed;
            this.V = $i({
                text: Ai(b)
            });
            this.Cb = null;
            this.ta = a.u;
            this.context = a
        },
        Yn = function() {
            this.root = null;
            this.jb = {
                width: 112,
                height: 84
            };
            this.Er = {
                width: 100,
                height: 75
            };
            this.fd = null
        };
    Yn.prototype.Sz = function(a) {
        Vi(a);
        this.root = a
    };
    Yn.prototype.setRoot = Yn.prototype.Sz;
    Yn.prototype.Be = function(a) {
        this.fd = a
    };
    Yn.prototype.setNoResultsString = Yn.prototype.Be;
    Yn.prototype.Fz = function(a) {
        100 < a && (a = 100);
        this.jb.height = a;
        this.jb.width = Math.round(1.33 * a)
    };
    Yn.prototype.setImageResultsTbHeight = Yn.prototype.Fz;
    Yn.prototype.cA = function(a) {
        100 < a && (a = 100);
        this.Er.height = a;
        this.Er.width = Math.round(1.33 * a)
    };
    Yn.prototype.setVideoResultsTbHeight = Yn.prototype.cA;
    var Zn = function() {
        this.ar = this.input = null;
        this.ja = 1;
        this.Wf = !1;
        this.oa = null;
        this.qb = "standard";
        this.og = !1;
        this.He = -1;
        this.kc = !0;
        this.ob = "en";
        this.setAutoComplete = this.Ok;
        this.setSearchFormRoot = this.Wk
    };
    Zn.prototype.Hz = function(a) {
        this.input = a
    };
    Zn.prototype.setInput = Zn.prototype.Hz;
    Zn.prototype.Wk = function(a) {
        this.ar = sj(a)
    };
    Zn.prototype.setSearchFormRoot = Zn.prototype.Wk;
    Zn.prototype.Cq = function(a) {
        this.ja = 1 == a || 2 == a ? a : 1
    };
    Zn.prototype.setDrawMode = Zn.prototype.Cq;
    Zn.prototype.Ok = function(a) {
        this.Wf = a
    };
    Zn.prototype.setAutoComplete = Zn.prototype.Ok;
    Zn.prototype.Vq = function(a) {
        this.og = a
    };
    Zn.prototype.setSpeech = Zn.prototype.Vq;
    Zn.prototype.Aq = function(a) {
        this.kc = a
    };
    Zn.prototype.setCseBranding = Zn.prototype.Aq;
    Zn.prototype.Bq = function(a) {
        this.ob = a
    };
    Zn.prototype.setCseLanguage = Zn.prototype.Bq;
    Zn.prototype.Yq = function(a) {
        this.He = a
    };
    Zn.prototype.setTopRefinementsWanted = Zn.prototype.Yq;
    Zn.prototype.$m = function(a, b, c, d) {
        b = void 0 === b ? "q" : b;
        this.qb = "searchbox-only";
        this.oa = {
            Lk: a,
            gy: "" == b ? "q" : b,
            yx: void 0 === c ? !1 : c,
            Kx: void 0 === d ? "?" : d
        }
    };
    Zn.prototype.enableSearchboxOnly = Zn.prototype.$m;
    Zn.prototype.Zm = function() {
        this.qb = "searchresults-only"
    };
    Zn.prototype.enableSearchResultsOnly = Zn.prototype.Zm;
    var $n = function(a, b, c) {
            this.Ob = c;
            this.u = a;
            this.ca = null;
            this.u.Uq(b, b.jd, [this]);
            this.u.Az(b, X.prototype.Nn);
            this.u.Na(b.oe);
            this.u.Ma(b.Kb);
            this.sa = this.ff = this.root = null;
            this.Pj = !0;
            this.ha = [];
            this.he = this.Le = this.gb = this.fa = null;
            this.ed = 0;
            this.le = !1
        },
        X = function(a) {
            this.Uh = this.oe = "small";
            this.ja = 1;
            this.ue = this.input = this.root = null;
            this.ic = 500;
            this.yw = Ui(this, X.prototype.Cx, [null]);
            this.zw = Ui(this, X.prototype.Dx, [null]);
            this.Fr = this.Gr = this.zo = this.Ao = this.Hr = this.Bo = this.sl = null;
            this.Zd = 0;
            this.ag = !1;
            this.Kb = "_blank";
            this.qb = "standard";
            this.od = this.na = null;
            this.Zo = 0;
            this.Ja = this.Ec = this.uf = this.bb = this.wd = this.xb = null;
            this.Ap = !1;
            this.Dc = null;
            this.Fd = this.we = 0;
            this.ly = "gsc-refinementHeader";
            this.xk = "gsc-refinementhInactive";
            this.Tp = "gsc-refinementhActive";
            this.Up = "gsc-refinementsAreaInvisible";
            this.my = "gsc-refinementsArea";
            this.aa = {};
            this.aa[Y.eb] = {
                enabled: !0,
                className: "gsc-adBlock",
                fb: "",
                yh: {
                    lines: 2
                }
            };
            this.aa[Y.Ua] = {
                enabled: !1,
                className: "gsc-adBlockVertical",
                fb: "gsc-thinWrapper",
                yh: {}
            };
            this.aa[Y.Ba] = {
                enabled: !1,
                className: "gsc-adBlockBottom",
                fb: "",
                yh: {}
            };
            this.wh = this.lf = null;
            this.K = [];
            if (a)
                for (var b = 0; b < a.length; b++) {
                    var c = new $n(a[b], this, new Yn);
                    this.K.push(c)
                }
            this.Ql = {};
            this.kc = !1;
            this.rd = !0;
            this.$b = new Ah;
            this.Zg = null
        };
    X.prototype.zk = !1;
    var Y = {
            eb: "top",
            Ua: "right",
            Ba: "bottom"
        },
        ao = Ii["no-results"];
    y("module$exports$cse$searchcontrol.SearchControl.NO_RESULTS_DEFAULT_STRING", ao);
    y("module$exports$cse$searchcontrol.SearchControl.TIMEOUT_SHORT", 350);
    y("module$exports$cse$searchcontrol.SearchControl.TIMEOUT_MEDIUM", 500);
    y("module$exports$cse$searchcontrol.SearchControl.TIMEOUT_LONG", 700);
    y("module$exports$cse$searchcontrol.SearchControl.DRAW_MODE_LINEAR", 1);
    y("module$exports$cse$searchcontrol.SearchControl.DRAW_MODE_TABBED", 2);
    y("module$exports$cse$searchcontrol.SearchControl.REFINEMENT_AS_TAB", "tab");
    y("module$exports$cse$searchcontrol.SearchControl.REFINEMENT_AS_LINK", "link");
    y("module$exports$cse$searchcontrol.SearchControl.MODE_STANDARD", "standard");
    y("module$exports$cse$searchcontrol.SearchControl.MODE_SEARCHBOX_ONLY", "searchbox-only");
    y("module$exports$cse$searchcontrol.SearchControl.MODE_RESULTS_ONLY", "searchresults-only");
    var bo = {},
        co = (bo[Wk.Mh] = {
            colorBackground: "#FDE5FF",
            colorTitleLink: "#0568CD",
            colorText: "#000",
            colorDomainLink: "#CC7A9F",
            fontFamily: "Arial"
        }, bo[Wk.Ph] = {
            colorBackground: "#EEFFE5",
            colorBorder: "#A9DA92",
            colorTitleLink: "#06C",
            colorText: "#454545",
            colorDomainLink: "#8D5FA7",
            fontFamily: "Trebuchet MS"
        }, bo[Wk.Oh] = {
            colorBackground: "#F2F0E6",
            colorTitleLink: "#950000",
            colorText: "#333",
            colorDomainLink: "#A25B08",
            fontFamily: "Georgia"
        }, bo[Wk.Rh] = {
            colorBackground: "#F0F0F6",
            colorBorder: "#CCC",
            colorTitleLink: "#06C",
            colorDomainLink: "#008000",
            fontFamily: "Verdana"
        }, bo[Wk.Qh] = {
            colorBackground: "#EEE",
            colorBorder: "#CCC",
            colorTitleLink: "#000",
            colorText: "#444",
            colorDomainLink: "#333",
            fontFamily: "Arial"
        }, bo[Wk.Gl] = {
            colorBackground: "#fff",
            colorBorder: "#ddd",
            colorTitleLink: "#1155CC",
            colorText: "#222",
            colorDomainLink: "#093",
            fontFamily: "Arial, sans-serif"
        }, bo),
        eo = {},
        fo = (eo[Wk.Mh] = co[Wk.Mh], eo[Wk.kC] = co[Wk.Mh], eo[Wk.Ph] = co[Wk.Ph], eo[Wk.mC] = co[Wk.Ph], eo[Wk.Oh] = co[Wk.Oh], eo[Wk.lC] = co[Wk.Oh], eo[Wk.Rh] = co[Wk.Rh], eo[Wk.oC] = co[Wk.Rh], eo[Wk.Qh] = co[Wk.Qh],
            eo[Wk.nC] = co[Wk.Qh], eo[Wk.Gl] = co[Wk.Gl], eo);
    X.prototype.ps = function() {
        var a = this;
        return function() {
            a.zk && (a.aq(), a.zk = !1)
        }
    };
    X.prototype.Si = function(a, b) {
        this.Nc = !0;
        this.yd = a;
        if (b) {
            a = this.aa[Y.eb];
            var c = this.aa[Y.Ua],
                d = this.aa[Y.Ba];
            void 0 != b.includeVerticalAds && (c.enabled = b.includeVerticalAds);
            void 0 != b.includeSideAds && (c.enabled = b.includeSideAds);
            void 0 != b._includeBottomAds_ && (d.enabled = b._includeBottomAds_);
            void 0 != b.iframes && (this.yn = b.iframes);
            b.channel && (this.Qf = b.channel);
            b.clientIP && (this.Rl = b.clientIP);
            "off" == b.isSafeSearchActive ? this.Ke = "low" : "active" == b.isSafeSearchActive ? this.Ke = "high" : b.safe && (this.Ke = b.safe);
            b.userAgent && (this.Sl = b.userAgent);
            b.adStyle && (this.Ll = b.adStyle);
            b.cseGoogleHosting && (this.Rf = b.cseGoogleHosting);
            if (d = b.adtest || b.debug) this.Vh = d;
            void 0 != b.numTopAds && (a.Nb = Math.max(0, Math.min(4, b.numTopAds)), a.enabled = a.Nb ? !0 : !1);
            void 0 != b.numSideAds && (c.Nb = Math.max(0, Math.min(8, b.numSideAds)), c.enabled = c.Nb ? !0 : !1);
            "noTop" == b.layout && (a.enabled = !1, c.enabled = !0);
            "personalizedAds" in b && (this.Fp = b.personalizedAds)
        }(function(e, f, h, k) {
            e[k] = e[k] || function() {
                (e[k].q = e[k].q || []).push(arguments)
            };
            e[k].t =
                Number(new Date);
            var l = f.createElement(h);
            f = f.getElementsByTagName(h)[0];
            l.async = !0;
            ti(l, vd(gd(new fd(dd, "//cse.google.com/adsense/search/async-ads.js"))));
            f.parentNode.insertBefore(l, f)
        })(window, document, "script", "_googCsa");
        window._googCsa("jsLoadedCallback", this.ps())
    };
    X.prototype.enableAds = X.prototype.Si;
    X.prototype.Mc = function(a, b, c) {
        b || (b = new Yn);
        b.jb && a.Iq(b.jb);
        b = new $n(a, this, b);
        c ? (c.ha.push(b), b.he = c, b.ed = c.ed + 1) : (this.K.push(b), b.ed = 0);
        this.tf(a) && (this.Vv = !0);
        a.ve = "gsc"
    };
    X.prototype.addSearcher = X.prototype.Mc;
    X.prototype.Dm = function(a) {
        a.Ob.root && (a.Pj = !1, D(a.Ob.root, "gsc-resultsRoot"), qg(a.Ob.root, "gsc-resultsbox-visible"), D(a.Ob.root, "gsc-resultsbox-invisible"));
        var b = a.Ob.root ? a.Ob.root : L("gsc-resultsRoot");
        a.root = b;
        a.u.Nf && D(b, "gsc-resultsRoot-" + a.u.Nf);
        2 == this.ja && (a.fa.Cb = b);
        a.ff = $i({
            className: "gsc-stats"
        });
        a.sa = L();
        a.sa.onmousedown = Ti(this, X.prototype.Ys);
        a.sa.onclick = Ti(this, X.prototype.Xs);
        a.ca = L("gsc-expansionArea");
        E(a.sa, a.ca);
        a.Pj && E(this.pe, b);
        E(b, a.sa)
    };
    var go = /^https?:\/\/www\.google\.com\/url\?/;
    g = X.prototype;
    g.Ys = function(a) {
        this.kc && this.jq(this.ln(a));
        return !0
    };
    g.Xs = function(a) {
        var b = this.ln(a);
        this.kc || this.jq(b);
        b && window.setTimeout(function() {
            var c = b.getAttribute("data-ctorig");
            c && oe(b, c)
        }, 0);
        return !0
    };
    g.ln = function(a) {
        a = a || window.event;
        for (a = a.target || a.srcElement; a && !(a.href && a.getAttribute("data-cturl") && a.getAttribute("data-ctorig"));) a = a.parentNode;
        return a
    };
    g.jq = function(a) {
        if (a) {
            var b = a.getAttribute("data-cturl");
            b && go.test(b) && oe(a, b)
        }
    };
    g.zm = function(a) {
        var b = $i({
            Kc: !0
        });
        D(b, "gsc-refinementBlockInvisible");
        this.mb && E(this.mb, b);
        a.gb = b;
        this.ft(a)
    };
    g.et = function(a) {
        return aj(a)
    };
    g.Em = function(a) {
        var b = aj();
        si(b, this.$b.Sa(a));
        a = document.createDocumentFragment();
        a.appendChild(b);
        return a
    };
    g.ft = function(a) {
        var b = a.fa,
            c = this.oi(a, a);
        c.level += 1;
        Wi(c.V, this.et(Ii["all-results-long"]));
        a.fa = b;
        a.Le = c;
        a.Le.Cb = a.fa.Cb
    };
    g.oi = function(a, b) {
        var c = new Xn(a);
        a.fa = c;
        jj(c.V, Ui(this, this.Ce, [c]));
        Ae(c.V, {
            "aria-label": "refinement",
            role: "tab",
            tabindex: 0,
            tabIndex: 0
        });
        a = "gs-spacer";
        $b && (a += " gs-spacer-opera");
        b ? (b = b.gb, D(c.V, this.ly), D(c.V, this.xk)) : (b = this.xb, D(c.V, "gsc-tabHeader"), D(c.V, "gsc-tabhInactive"));
        D(c.V, "gsc-inline-block");
        b && (E(b, c.V), a = aj(" ", a), E(b, a));
        return c
    };
    g.pp = function(a) {
        if (1 != a.ha.length) {
            var b = a.ha.shift();
            if (b) {
                a.ha.push(b);
                a = b.fa.V;
                var c = a.nextSibling;
                a.parentNode && (E(a.parentNode, a), c && E(a.parentNode, c), b = b.fa.Cb, b.parentNode && E(b.parentNode, b))
            }
        }
    };
    g.Xn = function(a) {
        for (var b = 0; b < this.Dc.length; ++b)
            if (this.Dc[b].key == a) return b;
        return null
    };
    g.Fx = function(a) {
        this.Ja && og(this.Ja, "gsc-option-menu-invisible");
        this.we != a && (this.Sk(a), this.uh(a, this.F.ta), this.execute())
    };
    g.bz = function(a) {
        a = a || window.event;
        og(this.Ja, "gsc-option-menu");
        var b = oj(this.Ja, "div", "gsc-option-menu-item-highlighted")[0];
        this.Ja.style.top = qj(this.Ja, this.Ec) + qj(this.uf, this.Ec) - qj(b, this.Ec) + "px";
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation()
    };
    g.Jt = function(a) {
        a = a || window.event;
        var b;
        if (b = this.Ja) {
            b = this.Ja;
            for (a = a.target || a.srcElement; a && a != b;) a = a.parentNode;
            b = a != b
        }
        b && og(this.Ja, "gsc-option-menu-invisible")
    };
    var ho = function(a) {
        a = a || window.event;
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation()
    };
    g = X.prototype;
    g.ot = function() {
        var a = L("gsc-orderby-invisible"),
            b = $i({
                text: Ii["order-results-by"],
                className: "gsc-orderby-label",
                Kc: !0
            });
        D(b, "gsc-inline-block");
        E(a, b);
        this.Ec = L("gsc-option-menu-container");
        D(this.Ec, "gsc-inline-block");
        E(a, this.Ec);
        b = L("gsc-selected-option-container");
        D(b, "gsc-inline-block");
        this.uf = L("gsc-selected-option");
        var c = L("gsc-option-selector");
        E(b, this.uf);
        E(b, c);
        b.onclick = Ti(this, this.bz);
        E(this.Ec, b);
        this.Ja = L("gsc-option-menu-invisible");
        for (b = 0; b < this.Dc.length; ++b) {
            var d = this.Dc[b].label;
            c = L("gsc-option-menu-item");
            d = $i({
                text: d,
                className: "gsc-option",
                Kc: !0
            });
            E(c, d);
            E(this.Ja, c);
            d.onclick = Ui(this, X.prototype.Fx, [b])
        }
        E(this.Ec, this.Ja);
        this.Ja.onclick = ho;
        b = Ti(this, this.Jt);
        this.root.attachEvent ? (this.root.attachEvent("onmousedown", b), document.attachEvent("onmousedown", b)) : document.addEventListener && document.addEventListener("mousedown", b, !0);
        return a
    };
    g.qt = function() {
        var a = L("gsc-richsnippet-popup-box");
        D(a, "gsc-richsnippet-popup-box-invisible");
        return a
    };
    g.Oa = function(a, b, c) {
        c = void 0 === c ? [] : c;
        jj(a, Ui(this, b, c))
    };
    g.ds = function(a, b, c) {
        a.addEventListener("mouseover", function() {
            return b(a)
        });
        a.addEventListener("mouseout", function() {
            return c(a)
        })
    };
    g.Id = function(a, b) {
        var c = null,
            d = null;
        b ? b.ja ? (this.ja = b.ja, c = b.input, d = b.ar, this.qb = b.qb, this.Wf = b.Wf, this.og = b.og, this.He = b.He, "searchbox-only" == this.qb && (this.oa = b.oa)) : this.ja = 1 : this.ja = 1;
        this.root = L(this.oa ? "gsc-control-searchbox-only" : "gsc-control");
        this.root.dir = yi;
        var e = sj(a);
        e && Wi(e, this.root);
        b && b.kc && (this.kc = !0, this.T && this.T.Tq(this.hp(b.ob)), this.W && this.W.Tq(this.hp(b.ob)));
        null != c ? (this.input = c, this.input.onkeyup = this.yw, this.input.onpaste = this.zw, this.rd = !1) : (this.rd = !0, null == d ? d = this.root :
            d.dir = yi, this.ue = new io(!0, d, {
                Hh: !0,
                FC: this.kc,
                Tl: !0
            }), this.ue.Nq(this, this.Qb), this.input = this.ue.input, d = this.ue.jh, e = {
                clearToolTitle: Ii["clear-tool-title"],
                interfaceLanguage: "en",
                searchButton: this.ue.te,
                useKennedyLookAndFeel: !0
            }, this.kc && (e.brandingImageUrl = "https://www.google.com/cse/static/images/1x/" + b.ob + "/branding.png", e.brandingImage2xUrl = "https://www.google.com/cse/static/images/2x/" + b.ob + "/branding.png", e.brandingImageStyle = "#FFFFFF " + zi + " no-repeat", e.brandingPlaceholder = ""), this.Wf ? this.Vf &&
            (e.maxSuggestions = this.Vf.maxCompletions, e.maxPromotions = this.Vf.maxPromotions) : e.disableAutoCompletions = !0, this.oa && (e.enableAsynchronousLogging = !vj(uj(this.oa.Lk))), e.enableSpeech = b ? b.og : !1, this.od = Un(), this.od.Bw(d, this.input, this, e), e.useKennedyLookAndFeel && D(d, "gsc-search-box-tools"));
        c || "searchresults-only" != this.qb || (this.ue.jh.style.display = "none", this.root.style.visibility = "hidden");
        if (!this.oa) {
            this.pe = L("gsc-resultsbox-invisible");
            this.Ym && (this.re = this.qt(), E(this.pe, this.re));
            this.ea =
                this.Cp ? L("gsc-results-wrapper-overlay") : L("gsc-results-wrapper-nooverlay");
            E(this.root, this.ea);
            this.Cp && (this.de = L("gsc-modal-background-image"), E(this.root, this.de), this.Oa(this.de, X.prototype.Qb), this.qe = L("gsc-results-close-btn"), E(this.ea, this.qe), this.Oa(this.qe, X.prototype.Qb));
            if (2 == this.ja)
                for (this.xb = L("gsc-tabsAreaInvisible"), b = L("gsc-positioningWrapper"), E(b, this.xb), E(this.ea, b), this.mb = L(this.Up), b = L("gsc-positioningWrapper"), E(b, this.mb), E(this.ea, b), this.sd && (b = L("gsc-refinementsGradient"),
                        E(this.mb, b)), b = 0; b < this.K.length; b++) this.oi(this.K[b]);
            this.wd = L("gsc-above-wrapper-area-invisible");
            E(this.ea, this.wd);
            b = bj(0, 0, "gsc-above-wrapper-area-container");
            E(this.wd, b);
            b = cj(b, 0);
            c = dj(b, "gsc-result-info-container");
            this.ne = L("gsc-result-info-invisible");
            E(c, this.ne);
            this.Ap && 2 == this.ja && (b = dj(b, "gsc-orderby-container"), this.bb = this.ot(), E(b, this.bb), og(this.bb, "gsc-orderby-invisible"));
            this.nb = this.ea;
            if (this.Nc) {
                var f = this.ea;
                this.nb = L("gsc-wrapper");
                this.wc(function(h, k) {
                    k.R = L("gsc-adBlockInvisible");
                    h == Y.eb ? E(this.nb, k.R) : h == Y.Ua && E(f, k.R)
                });
                E(f, this.nb)
            }
            E(this.nb, this.pe);
            for (b = 0; b < this.K.length; b++) this.Dm(this.K[b]), c = this.K[b].fa.Cb, 2 == this.ja && c && (D(c, "gsc-tabData"), D(c, "gsc-tabdInactive"));
            if (2 == this.ja && 0 < this.K.length) {
                this.F = this.K[0].fa;
                this.Ee(this.F);
                if (b = this.K[0].fa.Cb) qg(b, "gsc-tabdInactive"), D(b, "gsc-tabdActive");
                this.bb && (this.Sk(this.Fd), this.uh(this.Fd, this.F.ta))
            }
        }
        a && (a = this.Eu()) && 300 > a && D(this.root, "gsc-narrow")
    };
    X.prototype.draw = X.prototype.Id;
    X.prototype.Sk = function(a) {
        if (this.bb) {
            var b = oj(this.Ja, "div", "gsc-option-menu-item-highlighted")[0];
            b && qg(b, "gsc-option-menu-item-highlighted");
            this.we = a;
            a = oj(this.Ja, "div", "gsc-option")[this.we];
            D(a.parentNode, "gsc-option-menu-item-highlighted");
            this.uf && Yi(this.uf, this.Dc[this.we].label)
        }
    };
    X.prototype.uh = function(a, b) {
        b instanceof R && b.Hc("restrict-extended", {
            sort: this.Dc[a].key
        })
    };
    X.prototype.Zk = function(a) {
        switch (a) {
            case 350:
            case 500:
            case 700:
                this.ic = a;
                break;
            default:
                this.ic = 500
        }
    };
    X.prototype.setTimeoutInterval = X.prototype.Zk;
    g = X.prototype;
    g.tf = function(a) {
        return "web" == a.Ta && a.M ? !1 : !0
    };
    g.Ee = function(a) {
        1 == a.level ? a.V.onclick ? (jj(a.V, null), qg(a.V, this.xk), D(a.V, this.Tp)) : (this.Oa(a.V, this.Ce, [a]), qg(a.V, this.Tp), D(a.V, this.xk)) : a.V.onclick ? (jj(a.V, null), qg(a.V, "gsc-tabhInactive"), D(a.V, "gsc-tabhActive")) : (this.Oa(a.V, this.Ce, [a]), qg(a.V, "gsc-tabhActive"), D(a.V, "gsc-tabhInactive"))
    };
    g.Ce = function(a, b) {
        if (this.F != a) {
            this.al(!0);
            var c = this.F.Cb;
            c && (qg(c, "gsc-tabdActive"), D(c, "gsc-tabdInactive"));
            this.Ee(this.F);
            c = this.xc(this.F.context);
            var d = this.xc(a.context);
            1 == this.F.level && c != d && (D(c.gb, "gsc-refinementBlockInvisible"), this.Ee(c.fa));
            this.F = a;
            c = this.F.ta;
            this.Ee(this.F);
            this.bb && this.uh(this.we, this.F.ta);
            1 == this.F.level && d.fa.V.onclick && this.Ee(d.fa);
            this.np();
            d = null;
            !b && this.na && this.na.isEnabled() && (d = this.na.getState(), this.Xq(a, d));
            if (a = this.F.Cb) D(a, "gsc-tabdActive"),
                qg(a, "gsc-tabdInactive");
            var e = (a = b ? b.query : this.ae) && a == c.Ib;
            b && (e = e && b.page == c.wg());
            if (e) {
                d && (d["gsc.page"] = c.wg(), this.na.pushState(d));
                if (!this.Cr(c.Ib, c.wg()) || $b && b) this.Zb = c.Zb, this.Zi(c.Ib, c.wg());
                this.F.context.fp || (this.dr(this.F.context), this.jn(c), this.bb && this.yr())
            } else a && this.dn(a, b && b.page, null, d)
        }
    };
    g.Cr = function(a, b) {
        (b = void 0 === b ? null : b) || (b = 1);
        var c = this.aa[Y.Ba];
        return !!this.zb && this.zb.query == a && (this.zb.adPage || 1) == b && !(c.enabled && this.F && this.F.context.ca != c.R.parentNode)
    };
    g.jn = function(a) {
        var b = a.results,
            c = a.cursor;
        1 != this.ja && (this.ne.id = "resInfo-" + a.Zy);
        1 != this.ja && 0 < b.length && c && c.resultCount && c.searchResultTime ? (a = Zi(Gi["result-info"](c.resultCount, c.searchResultTime)), Wi(this.ne, a), og(this.ne, "gsc-result-info")) : (og(this.ne, "gsc-result-info-invisible"), Vi(this.ne))
    };
    g.mn = function(a, b) {
        if (a.u.M)
            for (var c = 0; c < a.ha.length; c++) {
                var d = a.ha[c];
                if (d.u.Yd(b)) return d.fa
            }
        return null
    };
    g.sr = function(a, b) {
        b = this.mn(a, b);
        var c = !0;
        b || (b = a.fa, c = !1);
        this.Ce(b);
        return c
    };
    g.hA = function(a, b) {
        Fe(this.re, "");
        var c = L("gsc-richsnippet-popup-close-button");
        this.Oa(c, function() {
            D(this.re, "gsc-richsnippet-popup-box-invisible")
        });
        var d = Zi(Ii["structured-data"] + " : "),
            e = L("gsc-richsnippet-popup-box-title-text");
        E(e, d);
        d = Zi(decodeURIComponent(a));
        a = L("gsc-richsnippet-popup-box-title-url");
        E(a, d);
        d = L("gsc-richsnippet-popup-box-title");
        E(d, e);
        E(d, a);
        E(d, c);
        E(this.re, d);
        c = L("gsc-richsnippet-popup-box-contents");
        for (var f in b) this.wy(f, b[f], c);
        E(this.re, c);
        qg(this.re, "gsc-richsnippet-popup-box-invisible")
    };
    g.wy = function(a, b, c) {
        var d = L("gsc-richsnippet-individual-snippet-box"),
            e = L("gsc-richsnippet-individual-snippet-key");
        a = a.charAt(0).toUpperCase() + a.slice(1);
        a = Zi(a);
        E(e, a);
        a = L("gsc-richsnippet-individual-snippet-data");
        for (var f in b) this.Zp(f, b[f], a);
        E(d, e);
        E(d, a);
        E(c, d)
    };
    g.Zp = function(a, b, c) {
        var d = Zi(a + "  :  ");
        a = L("gsc-richsnippet-individual-snippet-valueelem");
        if ("string" == typeof b) {
            var e = L("gsc-richsnippet-individual-snippet-keyelem");
            E(e, d);
            d = Zi(b);
            E(a, d)
        }
        if ("object" == typeof b)
            for (var f in b) this.Zp(f, b[f], a);
        b = L("gsc-richsnippet-individual-snippet-keyvalue");
        e && E(b, e);
        E(b, a);
        E(c, b)
    };
    g.dl = function(a, b) {
        var c = this.root,
            d = a.sa;
        b ? (D(c, "gsc-loading-fade"), a.fp = !0, D(d, "gsc-loading-resultsRoot"), 0 == a.ed && this.mb && D(this.mb, "gsc-loading-refinementsArea")) : (qg(c, "gsc-loading-fade"), a.fp = !1, qg(d, "gsc-loading-resultsRoot"), this.mb && qg(this.mb, "gsc-loading-refinementsArea"))
    };
    g.np = function() {
        this.Nc && (this.tf(this.F.ta) ? this.gf() : this.xi())
    };
    g.MA = function(a) {
        var b = this.aa[Y.Ba];
        if (b.R.parentNode != a.ca) {
            var c = oj(a.ca, "div", "gsc-cursor-box")[0];
            c && c.parentNode == a.ca ? a.ca.insertBefore(b.R, c) : a.ca && E(a.ca, b.R)
        }
    };
    g.gf = function() {
        var a = this;
        this.Nc && this.wc(function(b, c) {
            og(c.R, "gsc-adBlockInvisible");
            c.enabled && c.fb && qg(a.nb, c.fb)
        })
    };
    g.xi = function() {
        this.Nc && (null != this.lf ? this.lf() : this.wc(function(a, b) {
            0 < b.gd ? (og(b.R, b.className), b.fb && D(this.nb, b.fb)) : (og(b.R, "gsc-adBlockInvisible"), b.fb && qg(this.nb, b.fb))
        }))
    };
    g.submit = function() {
        return this.kr()
    };
    X.prototype.submit = X.prototype.submit;
    g = X.prototype;
    g.kr = function(a) {
        this.input.value.length ? this.oa ? this.zp(a) : this.execute(void 0, void 0, a) : this.Qb();
        return !1
    };
    g.tA = function(a) {
        return this.kr(a)
    };
    g.zp = function(a) {
        var b = this.oa.Kx;
        b = this.oa.Lk + (0 <= this.oa.Lk.indexOf(b) ? "&" : b) + encodeURIComponent(this.oa.gy) + "=" + encodeURIComponent(this.input.value);
        (a = pj(a)) && (b += "&" + a);
        this.oa.yx ? window.open(b) : (a = mi(b), window.location.href = qi(a))
    };
    g.Rm = function() {
        this.xb && !this.wA && 1 < this.K.length && og(this.xb, "gsc-tabsArea");
        !this.mb || this.K[0] && 0 == this.K[0].ha.length || og(this.mb, this.my)
    };
    g.qs = function(a) {
        var b = this;
        return function(c, d) {
            if (d) {
                b.aa[a].gd = 1;
                var e = 0,
                    f = 0;
                b.wc(function(h, k) {
                    k.enabled && k.cq && (e++, k.gd && f++)
                });
                e == f ? (window.clearTimeout(b.Gt), b.xi()) : 1 == f && (b.Gt = window.setTimeout(function() {
                    b.xi()
                }, 200))
            }
        }
    };
    g.Ag = function() {
        return null
    };
    X.prototype.getPartnerId = X.prototype.Ag;
    X.prototype.Fg = function() {
        return null
    };
    X.prototype.getSearchboxClientName = X.prototype.Fg;
    X.prototype.fh = function(a) {
        if (this.rd) this.od.Pb(a);
        else if (this.input.value = a, this.input.onfocus) this.input.onfocus(null)
    };
    X.prototype.prefillQuery = X.prototype.fh;
    X.prototype.hp = function(a) {
        var b = new nj("gcsc-"),
            c = L(b.Is);
        Ae(c, {
            role: "contentinfo",
            "aria-label": Ii["cse-branding"]
        });
        var d = "https://www.google.com/cse/static/images/2x/" + a + "/branding.png";
        a = ej("https://www.google.com/cse/static/images/1x/" + a + "/branding.png", null, null, b.rw);
        d && !ac && (a.srcset = d + " 2x");
        Ae(a, {
            alt: Ii["enhanced-by-google"]
        });
        d = fj("https://cse.google.com/?ref=b&hl=en", null, "_BLANK");
        d.className = b.Ws;
        E(d, a);
        E(c, d);
        return c
    };
    X.prototype.ny = function(a) {
        a ? this.fh(a) : a = this.rd ? this.od.la() : this.input.value;
        return a
    };
    X.prototype.pj = function() {
        return this.rd ? this.od.la() : this.input.value
    };
    X.prototype.getInputQuery = X.prototype.pj;
    X.prototype.execute = function(a, b, c) {
        if (!this.oa) {
            var d = this.ao(this.Km, this.Im);
            d && this.Ce(d)
        }
        this.dn(a, b, c)
    };
    X.prototype.execute = X.prototype.execute;
    g = X.prototype;
    g.dn = function(a, b, c, d, e) {
        a = this.ny(a);
        this.$i(a, b, c, d, e)
    };
    g.$i = function(a, b, c, d, e) {
        if (a.length) {
            this.ag = !1;
            this.ae = a;
            this.Xg = b || 1;
            if (null == c ? 0 : c.rsToken) this.Te = c.rsToken;
            this.na && this.na.isEnabled() && (d = d || this.na.getState(), d["gsc.q"] = a, null == b ? delete d["gsc.page"] : d["gsc.page"] = b, this.bb && this.F.ta instanceof R && (d["gsc.sort"] = this.Dc[this.we].key), this.na.pushState(d));
            d = Math.floor(1E7 * Math.random());
            this.Zb = "qid=" + (new Date).getTime().toString(16) + d.toString(16);
            d = !1;
            if (2 == this.ja) d = this.en(this.F.context, this.F.Cb, a, e, b, c) || d;
            else
                for (var f = 0; f < this.K.length; f++) d =
                    this.en(this.K[f], this.K[f].root, a, e, b, c) || d;
            c = this.Cr(a, b);
            d || !c ? this.Zi(a, b) : this.np()
        }
    };
    g.Nn = function() {
        return this.Zb
    };
    g.Zi = function(a, b) {
        b = void 0 === b ? null : b;
        this.wh = this.lf = null;
        var c = this.Nc;
        c && (this.Vv && 1 == this.ja || 2 == this.ja && this.tf(this.F.ta)) && (c = !1);
        var d = this.Fu();
        void 0 != d || this.yd || this.yn || (c = !1);
        2 != this.ja && (this.aa[Y.Ba].enabled = !1);
        if (c)
            if (this.iz(), this.yn) {
                this.gf();
                this.wc(function(h, k) {
                    Fe(k.R, "")
                });
                this.zb = {
                    pubId: this.yd || "google-coop",
                    gcsc: !0,
                    hl: encodeURIComponent("en"),
                    adtest: this.Vh ? "on" : null,
                    channel: this.Qf ? this.Qf : null,
                    adsafe: this.Ke || null,
                    query: a,
                    adstyle: this.Ll ? this.Ll : null,
                    containerWidth: this.Zo ||
                        this.ea.offsetWidth
                };
                d && (this.zb.cx = d);
                b && (this.zb.adPage = b);
                void 0 !== this.Fp && (this.zb.personalizedAds = this.Fp);
                this.Te && (this.zb.afdToken = this.Te, this.aa[Y.eb].Nb = this.sd ? 2 : 3);
                this.zb.cseGoogleHosting = "full" == this.Rf || "iframe" == this.Rf || "partner" == this.Rf ? this.Rf : "partner";
                if ((b = uk()) && b in fo) {
                    b = fo[b];
                    for (var e in b) this.zb[e] = b[e]
                }
                google.ads && google.ads.search && google.ads && google.ads.search.Ads ? this.aq() : this.zk = !0
            } else {
                e = "";
                this.aa[Y.eb].enabled && (e = e + "w" + this.aa[Y.eb].Nb);
                this.aa[Y.Ua].enabled &&
                    (e = e + "n" + this.aa[Y.Ua].Nb);
                e = "http://www.google.com/" + (d ? "cse" : "search") + "?output=js&num=0&ie=utf8&oe=utf8&q=" + encodeURIComponent(a) + "&hl=" + encodeURIComponent("en") + "&ad=" + encodeURIComponent(e) + "&js=uds&" + this.Zb;
                d && (e += "&cx=" + d);
                this.yd && (e += "&client=" + encodeURIComponent(this.yd));
                this.Qf && (e += "&channel=" + encodeURIComponent(this.Qf));
                this.Vh && (e += "&adtest=on");
                this.Rl && (e += "&ip=" + encodeURIComponent(this.Rl));
                this.Ke && (e += "&adsafe=" + encodeURIComponent(this.Ke));
                this.Sl && (e += "&useragent=" + encodeURIComponent(this.Sl));
                b && (e += "&adpage=" + encodeURIComponent(b + ""));
                this.Te && (e += "&afdt=" + encodeURIComponent(this.Te));
                var f = this;
                window.google_afs_request_done = function(h) {
                    f.Ax(h)
                };
                Ri(e)
            }
    };
    g.wc = function(a) {
        for (var b in Y)
            if (Y.hasOwnProperty(b)) {
                var c = Y[b];
                a.call(this, c, this.aa[c])
            }
    };
    g.aq = function() {
        var a = [];
        this.wc(function(b, c) {
            c.gd = 0;
            if (c.enabled && 0 < c.Nb) {
                c.cq = !0;
                c.Gk = {
                    container: c.R,
                    number: c.Nb,
                    callback: this.qs(b),
                    position: b
                };
                for (var d in c.yh) null != c.Gk[d] && (c.Gk[d] = c.yh);
                a.push(c.Gk)
            } else c.cq = !1;
            b == Y.Ba && this.MA(this.F.context);
            og(c.R, "gsc-adBlockNoHeight");
            c.R.style.height = "0px"
        });
        0 < a.length && new google.ads.search.Ads(this.zb, a)
    };
    g.en = function(a, b, c, d, e, f) {
        b = a.u;
        this.sl && this.sl(this, b, c);
        var h = !1;
        if (d) b.Ak(d);
        else {
            d = {};
            if (f)
                for (var k in f) d[k] = f[k];
            for (var l in this.Ql) d[l] || (d[l] = this.Ql[l]);
            this.yd && (d.cseclient = this.yd);
            (f = "web" === b.Ta ? this.Hr : this.Bo) && (c = f(this.wa || "", c) || c);
            h = b.execute(c, d, e)
        }
        this.dl(a, h);
        return h
    };
    g.Fu = function() {
        for (var a = 0; a < this.K.length; a++) {
            var b = this.K[a].u;
            if (b.M && b.Ue() && "cx" === b.jg() && ("web" === b.Ta || "image" === b.Ta)) return b.Ue()
        }
        return null
    };
    g.Ax = function(a) {
        window.google_afs_request_done = null;
        var b = this.aa[Y.eb],
            c = this.aa[Y.Ua];
        if (b.R)
            if (Fe(b.R, ""), Fe(c.R, ""), b.gd = c.gd = 0, !a || 1 > a.length) this.gf();
            else {
                if (!this.xb)
                    for (var d = 0; d < this.K.length; d++)
                        if (this.tf(this.K[d].u)) {
                            this.gf();
                            return
                        }
                og(b.R, b.className);
                d = !1;
                var e = document.createElement("h2"),
                    f = "";
                this.Vh && (f = "*DEBUG* ");
                f += Ii["ads-by-google"];
                Yi(e, f);
                E(b.R, e);
                f = a.length;
                for (var h = 0; h < f; h++) {
                    var k = a[h];
                    if ("text/wide" == k.type) {
                        b.gd++;
                        var l = L("gsc-ad"),
                            m = gj(k.url, k.line1, "_blank");
                        E(l,
                            m);
                        m = document.createElement("cite");
                        si(m, this.$b.Sa(k.visible_url));
                        E(l, m);
                        m = aj();
                        si(m, this.$b.Sa(k.line2));
                        E(l, m);
                        E(b.R, l)
                    } else c.enabled && (c.gd++, d || (d = !0, D(this.nb, c.fb), c.R && (E(c.R, e.cloneNode(!0)), og(c.R, c.className))), l = L("gsc-ad"), m = gj(k.url, k.line1, "_blank"), E(l, m), m = aj(), si(m, this.$b.Sa(k.line2 + "<br/>" + k.line3)), E(l, m), m = document.createElement("cite"), si(m, this.$b.Sa(k.visible_url)), E(l, m), c.R && E(c.R, l))
                }
                c.enabled && !d && qg(this.nb, c.fb);
                this.xb && this.tf(this.F.ta) && this.gf()
            }
    };
    g.Cx = function() {
        var a = this.input.value;
        a && "" != a && (this.Zd && window.clearTimeout(this.Zd), this.Zd = window.setTimeout(Ui(this, X.prototype.execute, [null]), this.ic))
    };
    g.Dx = function() {
        this.Zd && window.clearTimeout(this.Zd);
        this.Zd = window.setTimeout(Ui(this, X.prototype.execute, [null]), this.ic)
    };
    g.iz = function() {
        var a = {};
        if (this.aa[Y.eb].enabled) switch (this.Uh) {
            case "filtered_cse":
                a[Y.eb] = 3;
                a[Y.Ua] = 5;
                a[Y.Ba] = 3;
                break;
            case "large":
                a[Y.eb] = 2;
                a[Y.Ua] = 4;
                a[Y.Ba] = 2;
                break;
            default:
                a[Y.eb] = 1, a[Y.Ua] = 2, a[Y.Ba] = 1
        } else switch (a[Y.eb] = 0, this.Uh) {
            case "filtered_cse":
                a[Y.Ua] = 8;
                a[Y.Ba] = 3;
                break;
            case "large":
                a[Y.Ua] = 6;
                a[Y.Ba] = 2;
                break;
            case "small":
                a[Y.Ua] = 3;
                a[Y.Ba] = 1;
                break;
            default:
                a[Y.Ua] = 6, a[Y.Ba] = 2
        }
        this.wc(function(b, c) {
            void 0 == c.Nb && (c.Nb = a[b])
        })
    };
    g.Na = function(a) {
        var b = parseInt(a, 10);
        if (!isNaN(b) && 0 < b && 8 >= b) this.oe = a;
        else switch (a) {
            case "large":
                this.oe = "large";
                break;
            case "filtered_cse":
                this.oe = "filtered_cse";
                break;
            default:
            case "small":
                this.oe = "small"
        }
        for (b = 0; b < this.K.length; b++) this.K[b].u.Na(a);
        this.Uh = a
    };
    X.prototype.setResultSetSize = X.prototype.Na;
    X.prototype.Ma = function(a) {
        this.Kb = a;
        for (var b = 0; b < this.K.length; b++) this.K[b].u.Ma(a)
    };
    X.prototype.setLinkTarget = X.prototype.Ma;
    X.prototype.Be = function(a) {
        for (var b = 0; b < this.K.length; b++) this.K[b].Ob.Be(a)
    };
    X.prototype.setNoResultsString = X.prototype.Be;
    X.prototype.Ns = function() {
        this.ag = !0
    };
    X.prototype.cancelSearch = X.prototype.Ns;
    X.prototype.al = function(a) {
        a ? (og(this.pe, "gsc-resultsbox-visible"), this.ea && D(this.ea, "gsc-results-wrapper-visible"), this.qe && D(this.qe, "gsc-results-close-btn-visible"), this.de && (D(this.de, "gsc-modal-background-image-visible"), D(document.getElementsByTagName("body")[0], "gsc-overflow-hidden"))) : (og(this.pe, "gsc-resultsbox-invisible"), this.ea && qg(this.ea, "gsc-results-wrapper-visible"), this.qe && qg(this.qe, "gsc-results-close-btn-visible"), this.de && (qg(this.de, "gsc-modal-background-image-visible"), qg(document.getElementsByTagName("body")[0],
            "gsc-overflow-hidden")));
        for (var b = 0; b < this.K.length; b++)
            if (!this.K[b].Pj) {
                var c = this.K[b].root;
                a ? (qg(c, "gsc-resultsbox-invisible"), D(c, "gsc-resultsbox-visible")) : (qg(c, "gsc-resultsbox-visible"), D(c, "gsc-resultsbox-invisible"))
            }
    };
    X.prototype.Qb = function() {
        this.rd ? this.od.Pb("") : this.input.value = "";
        this.Xg = this.ae = null;
        if ("searchbox-only" != this.qb && ("searchresults-only" == this.qb && (this.root.style.visibility = "hidden"), this.al(!1), this.xb && og(this.xb, "gsc-tabsAreaInvisible"), this.mb && og(this.mb, this.Up), this.wc(function(b, c) {
                c.R && (og(c.R, "gsc-adBlockInvisible"), c.fb && qg(this.nb, c.fb))
            }), this.wd && og(this.wd, "gsc-above-wrapper-area-invisible"), this.na && this.na.isEnabled())) {
            var a = this.na.getState();
            delete a["gsc.page"];
            delete a["gsc.q"];
            this.na.pushState(a)
        }
    };
    X.prototype.clearAllResults = X.prototype.Qb;
    g = X.prototype;
    g.Xk = function(a, b, c, d, e) {
        a = a.ec ? a.ec(b) : b;
        d ? (b = {}, b[d] = e, d = Ui(this, this.execute, [a, void 0, b])) : d = Ui(this, this.execute, [a]);
        jj(c, d)
    };
    g.yr = function() {
        this.bb && (this.F.context.u instanceof R ? og(this.bb, "gsc-orderby") : og(this.bb, "gsc-orderby-invisible"))
    };
    g.fm = function(a) {
        var b = function(c, d) {
            for (var e = c.firstChild; e;) {
                var f = e.nextSibling;
                e != d && c.removeChild(e);
                e = f
            }
        };
        b(a.ca, this.aa[Y.Ba].R);
        b(a.sa, a.ca)
    };
    g.It = function(a, b) {
        var c = this,
            d = [{
                Rg: "gsc-tabsArea",
                Ck: "gsc-tabsAreaInvisible",
                element: null
            }, {
                Rg: "gsc-above-wrapper-area",
                Ck: "gsc-above-wrapper-area-invisible",
                element: null
            }, {
                Rg: "gsc-refinementsArea",
                Ck: "gsc-refinementsAreaInvisible",
                element: null
            }];
        (function() {
            for (var e = r(d), f = e.next(); !f.done; f = e.next()) {
                f = f.value;
                var h = c.ea.getElementsByClassName(f.Rg)[0];
                (f.element = h) && og(h, f.Ck)
            }
        })();
        a = b(function() {
            c.lf = null;
            c.wh && c.wh();
            for (var e = r(d), f = e.next(); !f.done; f = e.next()) {
                f = f.value;
                var h = f.element;
                h && og(h, f.Rg)
            }
        });
        Hj(this.ea, function(e) {
            return c.wh = e
        }, function(e) {
            return c.lf = e
        });
        (b = this.nb) && E(b, a)
    };
    g.jd = function(a) {
        "searchresults-only" == this.qb && (this.root.style.visibility = "visible");
        this.dl(a, !1);
        this.al(!0);
        if (!this.ag) {
            this.fm(a);
            var b = a.u;
            "please trigger recaptcha" !== this.pj() || b.fw() || (b.completionStatus = 429);
            if (429 === b.completionStatus) this.It(a, b.tw.bind(b));
            else {
                var c = ["gsc-results", b.Uc()].join(" ");
                og(a.sa, c);
                this.Ky(a);
                c = b.context || {};
                var d = !(!this.xb || !c);
                !this.ns && d && (this.ux(c.title, a), this.ns = !0);
                var e = b.promotions;
                var f = a.u.Kd && 400 <= a.u.completionStatus ? a.u.Xi ? [a.u.nu()] : [a.u.lu()] :
                    0 == a.u.results.length && a.Ob.fd && 200 == a.u.completionStatus ? [a.u.mu(a.Ob.fd)] : a.u.results;
                d = "web" === b.Ta;
                var h = !0,
                    k = d ? this.Fr : this.zo;
                if (k) {
                    var l = L(b.Uc());
                    D(l, "gsc-result");
                    h = this.wa;
                    var m = this.input.value,
                        u = Vk(e);
                    if (f) {
                        var t = [
                            ["content", "content"],
                            ["contentNoFormatting", "contentNoFormatting"],
                            ["originalContextUrl", "contextUrl"],
                            ["fileFormat", "fileFormat"],
                            ["perResultLabels", "perResultLabels"],
                            ["title", "title"],
                            ["titleNoFormatting", "titleNoFormatting"],
                            ["clicktrackUrl", "url"],
                            ["visibleUrl", "visibleUrl"]
                        ];
                        for (var z = [
                                ["tbHeight", "height"],
                                ["tbUrl", "url"],
                                ["tbWidth", "width"]
                            ], v = [
                                ["height", "height"],
                                ["unescapedUrl", "url"],
                                ["width", "width"]
                            ], U = [
                                ["anchor", "anchor"],
                                ["label", "label"],
                                ["label_with_op", "labelWithOp"]
                            ], ca = [
                                ["height", "height"],
                                ["src", "url"],
                                ["url", "url"],
                                ["width", "width"]
                            ], S = [], pa = r(f), F = pa.next(); !F.done; F = pa.next()) {
                            var C = F.value;
                            F = {};
                            for (var K = r(t), M = K.next(); !M.done; M = K.next()) {
                                var T = r(M.value);
                                M = T.next().value;
                                T = T.next().value;
                                C[M] && (F[T] = C[M])
                            }
                            K = !1;
                            M = {};
                            T = r(z);
                            for (var V = T.next(); !V.done; V =
                                T.next()) {
                                var N = r(V.value);
                                V = N.next().value;
                                N = N.next().value;
                                C[V] && (K = !0, M[N] = C[V])
                            }
                            K && (F.thumbnailImage = M);
                            if (C.height) {
                                K = {};
                                M = r(v);
                                for (T = M.next(); !T.done; T = M.next()) V = r(T.value), T = V.next().value, V = V.next().value, C[T] && (K[V] = C[T]);
                                F.image = K
                            }
                            if (C.richSnippet) {
                                K = void 0;
                                M = C.richSnippet;
                                if (M.cseThumbnail) {
                                    T = M.cseThumbnail;
                                    V = {};
                                    F.thumbnailImage = V;
                                    N = r(ca);
                                    for (var qa = N.next(); !qa.done; qa = N.next()) {
                                        var ia = r(qa.value);
                                        qa = ia.next().value;
                                        ia = ia.next().value;
                                        T[qa] && (V[ia] = T[qa])
                                    }
                                }
                                T = !1;
                                V = {};
                                for (K in M) M.hasOwnProperty(K) &&
                                    "cseThumbnail" !== K && "cseImage" !== K && (V[K] = Yc(M[K]), T = !0);
                                T && (F.richSnippet = V)
                            }
                            if (C.perResultLabels)
                                for (K = C.perResultLabels, C = [], F.perResultLabels = C, K = r(K), M = K.next(); !M.done; M = K.next()) {
                                    M = M.value;
                                    T = {};
                                    V = r(U);
                                    for (N = V.next(); !N.done; N = V.next()) qa = r(N.value), N = qa.next().value, qa = qa.next().value, M[N] && (T[qa] = M[N]);
                                    C.push(T)
                                }
                            S.push(F)
                        }
                        t = S
                    } else t = f;
                    (h = !k(h, m, u, t, l)) || a.sa.insertBefore(l, a.ca)
                }
                if (h && e && 0 < e.length) {
                    k = [];
                    e = r(e);
                    for (l = e.next(); !l.done; l = e.next()) l = l.value, l.html || a.u.ni(l), l.html && (m = L(a.u.Uc()),
                        D(m, "gsc-result"), D(m, "gsc-promotion"), E(m, l.html.cloneNode(!0)), a.sa.insertBefore(m, a.ca), k.push(m));
                    e = k
                } else e = [];
                (k = this.wd) && og(k, "gsc-above-wrapper-area");
                this.jn(b);
                this.bb && this.yr();
                this.bs(a, c.html);
                l = !h;
                k = [];
                if (h)
                    for (f = r(f), h = f.next(); !h.done; h = f.next()) h = h.value, h.html || b.Re(h), h.html && (l = !0, k.push(this.Xx(a, h)));
                if (!d && !a.u.Kd) {
                    b = r(k);
                    for (f = b.next(); !f.done; f = b.next()) f = f.value, this.Oa(f.firstElementChild, this.FA, [f]), this.ds(f.firstElementChild, Ik, Jk);
                    this.sd && this.es(a.sa)
                }
                this.gs(a);
                this.ks(l, a);
                this.qx(a, c);
                this.Rm();
                (a = d ? this.Gr : this.Ao) && a(this.wa, this.input.value, e, k)
            }
        }
    };
    X.prototype.onSearchComplete = X.prototype.jd;
    X.prototype.es = function(a) {
        var b = L("gs-mobilePreview"),
            c = ij("m100 50c0-28-22-50-50-50s-50 22-50 50 22 50 50 50 50-22 50-50zm-66 14c-0.1-0.7 0.4-1 6-7 6-6 6-6 6-7 0-0.9-0.5-1-6-7-6-6-6-6-6-7 0.2-1 1-2 2-2 0.8-0.2 1 0.3 7 6 6 6 6 6 7 6 0.9 0 1-0.5 7-6 6-6 6-6 7-6 1 0.2 2 1 2 2 0.2 0.7-0.3 1-6 7-6 6-6 6-6 7 0 0.8 0.7 2 6 7 6 6 6 6 6 7-0.2 1-1 2-2 2-0.7 0.2-1-0.4-7-6-6-6-6-6-7-6-0.9 0-1 0.5-7 6-6 6-6 6-7 6s-2-1-2-2z", Ii["close-button"], 100, 100, "gs-closeButton", 30, 30),
            d = fj();
        D(d, "gs-previewLink");
        var e =
            L("gs-previewSnippet"),
            f = L("gs-previewTitle"),
            h = fj();
        D(h, "gs-previewLink");
        var k = L("gs-previewUrl"),
            l = L("gs-previewSize"),
            m = fj();
        D(m, "gs-previewVisit");
        Yi(m, Ii["visit-website"]);
        E(f, h);
        E(e, f);
        E(e, k);
        E(e, l);
        E(e, m);
        E(b, c);
        E(b, d);
        E(b, e);
        b.style.setProperty("display", "none");
        this.Oa(c, this.tr);
        E(a, b)
    };
    X.prototype.FA = function(a) {
        var b = this,
            c = function() {
                return b.sd ? void b.tr(a) : void b.EA(a)
            };
        this.Zg ? this.Zg.vd(this.ae, "toggleImagePreviewVisibility_", 2, c)() : c()
    };
    X.prototype.tr = function(a) {
        for (var b = r(this.F.context.sa.children), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            if ("none" !== d.style.display) d.style.setProperty("display", "none");
            else if (d.style.removeProperty("display"), pg(d, "gs-mobilePreview")) {
                c = this.F.ta.results[jo(a)];
                ko(d, c);
                var e = d.getElementsByClassName("gs-previewUrl")[0],
                    f = d.getElementsByClassName("gs-previewSize")[0],
                    h = d.getElementsByClassName("gs-previewVisit")[0],
                    k = d.getElementsByClassName("gs-previewLink");
                Yi(d.getElementsByClassName("gs-previewTitle")[0],
                    c.titleNoFormatting);
                Yi(e, c.visibleUrl);
                Yi(f, c.width + "\u00d7" + c.height);
                h.setAttribute("href", c.originalContextUrl);
                h.setAttribute("target", c.target);
                d = r(k);
                for (e = d.next(); !e.done; e = d.next()) e = e.value, e.setAttribute("href", c.originalContextUrl), e.setAttribute("target", c.target)
            }
        }
    };
    X.prototype.EA = function(a) {
        for (var b = jo(a), c = tj(a); c; c = c.nextElementSibling)
            if (c !== a && pg(c, "gs-selectedImageResult")) {
                qg(c, "gs-selectedImageResult");
                var d = c.getElementsByClassName("gs-imagePreviewArea")[0];
                d && (qg(d, "gs-imagePreviewArea"), D(d, "gs-imagePreviewArea-invisible"))
            }
        pg(a, "gs-selectedImageResult") ? qg(a, "gs-selectedImageResult") : D(a, "gs-selectedImageResult");
        c = a.getElementsByClassName("gs-imagePreviewArea")[0];
        d = a.getElementsByClassName("gs-imagePreviewArea-invisible")[0];
        if (c) qg(c, "gs-imagePreviewArea"),
            D(c, "gs-imagePreviewArea-invisible");
        else if (d) ko(d, this.F.ta.results[b]), qg(d, "gs-imagePreviewArea-invisible"), D(d, "gs-imagePreviewArea");
        else throw Error("Could not find elements with class gs-imagePreviewArea or gs-imagePreviewArea-invisible in results: " + a.innerHTML);
    };
    var jo = function(a) {
            for (var b = 0, c = tj(a); c && c !== a; c = c.nextElementSibling, ++b);
            return b
        },
        ko = function(a, b) {
            a = a.getElementsByClassName("gs-previewLink")[0];
            if (a.firstElementChild) a = a.firstElementChild, a.setAttribute("src", b.unescapedUrl), a.setAttribute("width", b.width), a.setAttribute("height", b.height), a.setAttribute("alt", b.titleNoFormatting);
            else {
                var c = ej(b.unescapedUrl, b.width, b.height, "gs-imagePreview");
                c.setAttribute("alt", b.titleNoFormatting);
                a.appendChild(c)
            }
        };
    g = X.prototype;
    g.Ky = function(a) {
        var b = a.u.spelling;
        if (b && (!b.html && a.u.Fm && a.u.Fm(b), b.html)) {
            var c = b.html.cloneNode(!0),
                d = c.getElementsByTagName("a");
            b.type && "SPELL_CORRECTED_RESULTS" == b.type ? d && 1 < d.length && (this.Xk(a.u, b.correctedQuery, d[0], b.correctedParamName, b.correctedParamValue), this.Xk(a.u, b.originalQuery, d[1], b.originalParamName, b.originalParamValue)) : d && 0 < d.length && this.Xk(a.u, b.correctedQuery, d[0]);
            b = L(a.u.Uc());
            D(b, "gsc-result");
            E(b, c);
            a.sa.insertBefore(b, a.ca)
        }
    };
    g.ux = function(a, b) {
        b = this.xc(b);
        a && !b.u.td && Wi(b.fa.V, this.Em(Ai(a)))
    };
    g.bs = function(a, b) {
        var c = this.F && this.F.ta && "Web" == this.F.ta.td && 0 < a.u.results.length && 0 === a.u.cursor.currentPageIndex;
        if (b && c) {
            c = L(a.u.Uc());
            D(c, "gsc-result");
            E(c, b.cloneNode(!0));
            b = oj(c, "div", "gsc-facet-label");
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                if (e) {
                    var f = this.xc(a);
                    e = r(e.getElementsByTagName("a"));
                    for (var h = e.next(); !h.done; h = e.next()) {
                        h = h.value;
                        var k = h.getAttribute("data-refinementLabel");
                        if (k != a.u.rc()) {
                            var l = h.getAttribute("label-with-op");
                            l || (l = k);
                            this.Oa(h, this.sr, [f, l])
                        } else D(h, "gs-labelActive")
                    }
                }
            }
            a.sa.insertBefore(c,
                a.ca)
        }
    };
    g.Xx = function(a, b) {
        var c = L(a.u.Uc());
        D(c, "gsc-result");
        a.u.Nf && D(c, "gsc-result-" + a.u.Nf);
        E(c, b.html.cloneNode(!0));
        if (this.Ym) {
            var d = oj(c, "div", "gs-richsnippet-box")[0];
            if (d) {
                d.style.display = "block";
                var e = aj(Ii["structured-data"], "gsc-richsnippet-showsnippet-label");
                E(d, e);
                this.Oa(e, this.hA, [b.url, b.richSnippet])
            }
        }
        if (b.perResultLabels && (b = oj(c, "div", "gs-per-result-labels")[0])) {
            b = b.getElementsByTagName("a");
            d = this.xc(a);
            for (var f = 0; e = b[f]; f++) {
                var h = e.getAttribute("data-refinementLabel");
                if (h != a.u.rc()) {
                    var k =
                        e.getAttribute("label-with-op");
                    k || (k = h);
                    this.Oa(e, this.sr, [d, k])
                } else D(e, "gs-labelActive")
            }
        }(b = this.aa[Y.Ba].R) && b.parentNode == a.ca ? a.ca.insertBefore(c, b) : a.ca && E(a.ca, c);
        return c
    };
    g.ks = function(a, b) {
        a ? b.ff && Wi(b.ff, Zi("(" + b.u.results.length + ")")) : (b.ff && Wi(b.ff, Zi("(0)")), this.fm(b));
        var c = this.Kb,
            d = this.sd;
        a = void 0 === b.sa ? null : b.sa;
        var e = b.u;
        d = void 0 === d ? !1 : d;
        if (a)
            if (b = e.ai, e.findMoreOnGoogle && e.findMoreOnGoogle.url) {
                var f = e.findMoreOnGoogle.url;
                f = e.ec ? e.ec(f) : f;
                var h = e.Ib;
                e = Hi["search-on-google"]();
                var k = e.prefix,
                    l = e.mr;
                e = L("gcsc-find-more-on-google");
                var m = ij("m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z",
                    Ii.search, 13, 13, "gcsc-find-more-on-google-magnifier", 12, 12);
                E(e, m);
                k && (k = aj(k, "gcsc-find-more-on-google-text"), E(e, k));
                0 === h.length ? h = {
                    query: "",
                    po: !1
                } : (k = h.endsWith('"'), h = {
                    po: k,
                    query: h.slice(0, k ? -1 : h.length)
                });
                k = aj(h.query, "gcsc-find-more-on-google-query");
                E(e, k);
                h.po && E(e, aj('"', "gcsc-find-more-on-google-query"));
                l && (l = aj(l, "gcsc-find-more-on-google-text"), E(e, l));
                c = fj(f, null, c);
                E(c, e);
                d ? (d = b, d = void 0 === d ? null : d, b = $i({
                        className: "gcsc-more-maybe-branding-box"
                    }), E(b, c), c = L("gcsc-find-more-on-google-root"),
                    E(c, b), E(a, c.cloneNode(!0)), d && E(a, d.cloneNode(!0))) : (d = b, d = void 0 === d ? null : d, b = $i({
                    className: "gcsc-more-maybe-branding-root"
                }), E(b, c), d && (c = $i({
                    className: "gcsc-find-more-on-google-branding"
                }), E(c, d), E(b, c)), E(a, b.cloneNode(!0)))
            } else b && E(a, b.cloneNode(!0))
    };
    g.qx = function(a, b) {
        if (0 == a.ed || a.le) {
            var c = this.xc(a),
                d = 0 == a.ed && this.kw(a),
                e = a.le && 1 == c.ha.length;
            if (d || e) {
                if (d && this.Us(a), b.facets && 0 < b.facets.length) {
                    d && this.zm(a);
                    var f = !1,
                        h = b.facets;
                    if (h.length > this.He && 0 < b.display_facets.length && -1 !== this.He)
                        for (h.sort(function(m, u) {
                                return u.count - m.count
                            }), b = h.length; b > this.He; b--) h.pop();
                    for (b = 0; b < h.length; b++) {
                        var k = h[b],
                            l = k.label_with_op;
                        if (!l || this.Im) l = k.label;
                        d || e && !a.u.Yd(l) ? this.Am(c, l, k.anchor) : (a.u.vb(k.anchor), this.pp(c), f = !0)
                    }
                    e && !f && this.pp(c)
                }
            } else if (a.le &&
                b.facets && 0 < b.facets.length)
                for (c = b.facets, d = 0; d < c.length; d++) e = c[d], a.u.Yd(e.label) && a.u.vb(e.anchor);
            a.le && (a.le = !1)
        }
        this.xb && this.F && a == this.F.context && this.dr(a);
        this.yy(a)
    };
    g.Am = function(a, b, c) {
        var d = a.u,
            e = d.hi();
        e.Qk(b);
        e.vb(c);
        b = new Yn;
        b.fd = a.Ob.fd;
        this.Mc(e, b, a);
        e.Na(d.xa);
        d.jb && e.Iq(d.jb);
        d = a.ha[a.ha.length - 1];
        this.oi(d, a);
        this.Dm(d);
        if (a = d.fa.Cb) D(a, "gsc-tabData"), D(a, "gsc-tabdInactive");
        return d
    };
    g.gs = function(a) {
        if (a.u.cd && a.ca && a.u.cursor && a.u.cursor.pages && 1 < a.u.cursor.pages.length) {
            var b = L("gsc-cursor-box gs-bidi-start-align");
            this.sd || (b.dir = "ltr");
            var c = this.gt(a);
            b.appendChild(c);
            E(a.sa, b)
        }
    };
    g.yy = function(a) {
        var b = this.input.value;
        a = this.xc(a);
        if (a.ha)
            for (var c = 0; c < a.ha.length; c++) {
                var d = a.ha[c];
                Wi(d.fa.V, this.Em(Ai(d.u.Aj().replace(/\$q/g, b))))
            }
    };
    g.xc = function(a) {
        return a.he || a
    };
    g.dr = function(a) {
        a.gb ? (qg(a.gb, "gsc-refinementBlockInvisible"), D(a.gb, "gsc-refinementBlock"), this.F != a.Le && (this.F = a.Le, this.Ee(this.F))) : a.he && a.he.gb && (qg(a.he.gb, "gsc-refinementBlockInvisible"), D(a.he.gb, "gsc-refinementBlock"))
    };
    g.kw = function(a) {
        var b = a.u.context ? a.u.context.facets : null;
        if (!b) return 0 < a.ha.length;
        if (b.length != a.ha.length) return !0;
        for (var c = 0; c < b.length; c++) {
            var d = b[c].label_with_op;
            d || (d = b[c].label);
            if (!a.ha[c].u.Yd(d)) return !0
        }
        return !1
    };
    g.Us = function(a) {
        if (0 != a.ha.length) {
            var b = a.gb;
            b && (Vi(b), b.parentNode && b.parentNode.removeChild(b));
            for (a.gb = null; 0 < a.ha.length;) b = a.ha.pop(), b.root && (Vi(b.root), this.pe.removeChild(b.root))
        }
    };
    g.gt = function(a) {
        return this.sd ? this.it(a) : this.ht(a)
    };
    g.ht = function(a) {
        for (var b = L("gsc-cursor"), c = a.u.cursor, d = 0; d < c.pages.length; d++) {
            var e = d + 1,
                f = d == c.currentPageIndex,
                h = "gsc-cursor-page" + (f ? " gsc-cursor-current-page" : "");
            e = lo(f ? {
                text: c.pages[d].label
            } : {
                text: c.pages[d].label,
                title: Gi.page(e),
                se: "link"
            }, h);
            f ? Ae(e, {
                tabindex: 0,
                tabIndex: 0
            }) : this.Oa(e, X.prototype.kh, [a, d]);
            b.appendChild(e)
        }
        return b
    };
    g.it = function(a) {
        var b = L("gsc-cursor"),
            c = a.u.cursor,
            d = c.currentPageIndex,
            e = ["ar", "iw"].includes("en");
        if (0 == c.pages.length) return b;
        var f = function(k) {
                return ij(k != e ? "M10.2 11.5L5.2 6.5 10.2 1.56 8.65 0l-6.5 6.5 6.5 6.5z" : "M2.8 11.5L7.8 6.5 2.8 1.56 4.36 0l6.5 6.5-6.5 6.5z", k ? Ii.previous : Ii.next, 13, 13, "gsc-cursor-chevron")
            },
            h = lo(0 === d ? {} : {
                title: Ii["prev-page"],
                se: "link"
            }, "gsc-cursor-container-previous");
        b.appendChild(h);
        0 < d && (h.appendChild(f(!0)), this.Oa(h, X.prototype.kh, [a, d - 1]), b.appendChild(h));
        0 == d && 1 < c.pages.length ? (h = lo({
            text: Wn,
            title: Ii["next-page"],
            se: "link"
        }, "gsc-cursor-next-page"), this.Oa(h, X.prototype.kh, [a, 1]), Ae(h, {
            tabindex: -1,
            tabIndex: -1
        }), b.appendChild(h)) : (h = lo({
            text: Gi.page(d + 1)
        }, d < c.pages.length - 1 ? "gsc-cursor-numbered-page" : "gsc-cursor-final-page"), b.appendChild(h));
        h = lo({
            text: void 0,
            title: Ii["next-page"],
            se: "link"
        }, "gsc-cursor-container-next");
        b.appendChild(h);
        d < c.pages.length - 1 && (h.appendChild(f(!1)), this.Oa(h, X.prototype.kh, [a, d + 1]), b.appendChild(h));
        return b
    };
    var lo = function(a, b) {
        b = $i({
            text: a.text,
            className: b,
            yb: !0
        });
        var c = {};
        a.title && (c["aria-label"] = a.title);
        a.se && (c.role = a.se);
        (a.title || a.se) && Ae(b, c);
        return b
    };
    g = X.prototype;
    g.Eu = function(a) {
        a = a ? a : this.root;
        var b = null;
        window.getComputedStyle ? b = window.getComputedStyle(a, null) : a.currentStyle ? b = a.currentStyle : document.defaultView.getComputedStyle && (b = document.defaultView.getComputedStyle(a, null));
        return b ? parseInt(b.width, 10) : 300
    };
    g.Ez = function(a, b) {
        this.Ao = Ti(a, b)
    };
    g.Dz = function(a, b) {
        this.zo = Ti(a, b)
    };
    g.eA = function(a, b) {
        this.Gr = Ti(a, b)
    };
    g.dA = function(a, b) {
        this.Fr = Ti(a, b)
    };
    g.fA = function(a, b) {
        this.Hr = Ti(a, b)
    };
    g.Gz = function(a, b) {
        this.Bo = Ti(a, b)
    };
    g.Zq = function(a, b) {
        this.sl = b && Ti(a, b)
    };
    X.prototype.setTrackingCallback = X.prototype.Zq;
    X.prototype.kh = function(a, b) {
        this.ag = !1;
        this.Rm();
        this.dl(a, !0);
        this.Xg = b + 1;
        if (this.na && this.na.isEnabled()) {
            var c = this.na.getState();
            c["gsc.page"] = b + 1;
            this.na.pushState(c)
        }
        this.Zi(this.ae, b + 1);
        a.u.ho(b, this.Te);
        this.ea.scrollIntoView()
    };
    X.prototype.fr = function(a) {
        var b;
        if (!(b = !a) && (b = !(!window.history || !window.history.pushState) || Ok())) a: {
            b = Pk(Qk()).state;
            for (var c in b) {
                b = !0;
                break a
            }
            b = !1
        }
        b || a(this);
        a = {};
        this.oa || this.Xq(this.F, a);
        this.ae && (a["gsc.q"] = this.ae);
        this.Xg && (a["gsc.page"] = this.Xg);
        this.na = new Rk(a, Ti(this, X.prototype.Mv));
        return this.na.isEnabled()
    };
    X.prototype.startHistoryManagement = X.prototype.fr;
    X.prototype.ao = function(a, b) {
        if (null == a || 0 > a || a >= this.K.length) a = this.F;
        else {
            var c = this.K[a];
            if (c.u.M && b) {
                var d = b;
                c.u.ee && (d = c.u.ee(b));
                a = this.mn(c, d);
                a || (c.gb || this.zm(c), b = this.Am(c, d, b), b.le = !0, a = b.fa)
            } else a = c.Le || c.fa
        }
        return a
    };
    X.prototype.Mv = function(a) {
        var b = this.ao(a["gsc.tab"], a["gsc.ref"]);
        if (b) {
            if (this.bb) {
                var c;
                null != a["gsc.sort"] && (c = this.Xn(a["gsc.sort"]));
                null == c && (c = this.Fd);
                this.Sk(c);
                this.uh(c, b.ta)
            }
            c = a["gsc.q"] || "";
            a = a["gsc.page"];
            if (null == a || 0 >= a) a = 1;
            this.F == b ? c ? this.execute(c, a) : this.Qb() : (this.Ce(b, {
                query: c,
                page: a
            }), c || this.Qb())
        }
    };
    X.prototype.Xq = function(a, b) {
        for (var c = this.xc(a.context), d = 0; d < this.K.length; d++)
            if (this.K[d] == c) {
                b["gsc.tab"] = d;
                break
            }
        a = a.ta;
        a.rc && null != a.rc() ? b["gsc.ref"] = a.rc() : delete b["gsc.ref"]
    };
    var io = function(a, b, c) {
            mo++;
            var d = document.createElement("form");
            d.className = "gsc-search-box";
            d.acceptCharset = "utf-8";
            var e = Ii["search-uc"],
                f = Ii.search;
            c && c.Hh && c.Tl && (e = "");
            if (c && (c.buttonText && (f = e = c.buttonText), c.clickableBrandingUrl)) {
                var h = "http://www.google.com";
                "string" == typeof c.clickableBrandingUrl && c.clickableBrandingUrl.match(/^http:\/\/[a-z]*\.google\.com/) && (h = c.clickableBrandingUrl);
                h = fj(h, null, "_BLANK");
                h.className = "gsc-branding-clickable"
            }
            c && c.Hh ? "" == e ? (e = document.createElement("button"),
                e.className = "gsc-search-button gsc-search-button-v2", this.te = e, this.te.appendChild(ij("m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z",
                    f, 13, 13))) : (h = Ce(document, "INPUT"), h.type = "button", h.value = e, h.className = "gsc-search-button", this.te = h) : (h = Ce(document, "INPUT"), h.type = "submit", h.value = e, h.className = "gsc-search-button", this.te = h);
            e = Ce(document, "INPUT");
            e.setAttribute("autoComplete", "off");
            e.type = "text";
            e.size = 10;
            D(e, "gsc-input");
            this.input = e;
            this.input.name = "search";
            this.input.title = f;
            f = this.input;
            c && c.Hh && c.Tl && (this.input.className = "", this.input.style.width = "100%", this.input.style.padding = "0 2px 0 0", this.Rj = L("gsc-input-box"),
                this.Rj.id = "gsc-iw-id" + mo, E(this.Rj, this.input), f = this.Rj);
            c && c.Hh && (this.input.id = "gsc-i-id" + mo);
            c = bj(null, null, "gsc-search-box");
            E(d, c);
            c = cj(c, 0);
            this.ww = dj(c, "gsc-input");
            e = dj(c, "gsc-search-button");
            E(this.ww, f);
            E(e, this.te);
            this.jh = d;
            Vi(b);
            E(b, this.jh);
            a && (this.di = $i({
                text: Vn,
                className: "gsc-clear-button",
                yb: !0
            }), this.di.title = Ii["clear-results"], a = dj(c, "gsc-clear-button"), E(a, this.di))
        },
        mo = 0;
    io.prototype.Pz = function(a, b) {
        this.jr = Ui(this, this.sA, [this]);
        this.zh = Ui(a, b, [this]);
        this.jh.onsubmit = this.jr;
        this.te.onclick = this.jr
    };
    io.prototype.setOnSubmitCallback = io.prototype.Pz;
    io.prototype.Nq = function(a, b) {
        this.di.onclick = Ui(a, b, [this])
    };
    io.prototype.setOnClearCallback = io.prototype.Nq;
    io.prototype.sA = function() {
        this.zh && this.zh();
        return !1
    };
    io.prototype.execute = function(a) {
        a && (this.input.value = a);
        this.zh && this.zh()
    };
    io.prototype.execute = io.prototype.execute;
    var Z = function(a, b, c) {
        b = void 0 === b ? {} : b;
        this.DA = (new Date).getTime();
        this.wa = void 0 === c ? null : c;
        X.call(this);
        this.sd = b.useMobileLayout;
        this.Ti = null != b.enableApiary_ ? !!b.enableApiary_ : !0;
        this.Vb = null != b.experimentNames ? -1 < b.experimentNames.indexOf("csqr") : !1;
        this.Sc = Array.isArray(b.experimentNames) ? 0 <= Ob(b.experimentNames, "dev") : !1;
        this.Na(b.resultSetSize || "large");
        c = {
            iframes: !0,
            adtest: b.adtest || null,
            channel: b.adchannel || null,
            includeVerticalAds: !1,
            numTopAds: 4
        };
        if (b.adoptions)
            for (var d in b.adoptions) b.adoptions.hasOwnProperty(d) &&
                (c[d] = b.adoptions[d]);
        "noTop" == c.layout && (c.layout = null);
        "personalizedAds" in b && (c.personalizedAds = b.personalizedAds);
        "isSafeSearchActive" in b && (c.isSafeSearchActive = b.isSafeSearchActive);
        this.Si(b.adclient || "", c);
        this.Vf = b.autoCompleteOptions;
        this.om = "" + a;
        this.sc = a;
        this.Km = 0;
        this.Im = b.defaultToRefinement;
        this.T = null;
        if (!b.disableWebSearch || !b.enableImageSearch) {
            var e = {};
            b["restrict-extended"] && (e["restrict-extended"] = b["restrict-extended"]);
            b["restrict-safesearch"] && (e["restrict-safesearch"] = b["restrict-safesearch"]);
            b.isSafeSearchActive && (e.isSafeSearchActive = b.isSafeSearchActive);
            if (b.webSearchOptions)
                for (var f in b.webSearchOptions) e[f] = b.webSearchOptions[f];
            b.cse_token && (e.cse_token = b.cse_token);
            b.cselibVersion && (e.cselibVersion = b.cselibVersion);
            b.experimentNames && (e.experimentNames = b.experimentNames);
            this.au(e)
        }
        this.W = null;
        if (b.enableImageSearch) {
            a = {};
            b["restrict-safesearch"] && (a["restrict-safesearch"] = b["restrict-safesearch"]);
            b.isSafeSearchActive && (a.isSafeSearchActive = b.isSafeSearchActive);
            if (b.imageSearchOptions)
                for (var h in b.imageSearchOptions) a[h] =
                    b.imageSearchOptions[h];
            b.cse_token && (a.cse_token = b.cse_token);
            b.cselibVersion && (a.cselibVersion = b.cselibVersion);
            b.experimentNames && (a.experimentNames = b.experimentNames);
            this.Wt(a);
            b.defaultToImageSearch && this.T && (this.Km = 1)
        }
        this.T && this.W && this.vb({
            web: Ii.web,
            image: Ii.image
        });
        b.googleAnalyticsOptions && b.googleAnalyticsOptions.queryParameter && (this.Bj = b.googleAnalyticsOptions, this.Zq(null, no));
        b.enableOrderBy && (this.Ap = !0, this.Dc = b.orderByOptions && b.orderByOptions.keys && 0 < b.orderByOptions.keys.length ?
            b.orderByOptions.keys : [{
                key: "",
                label: Ii["order-by-relevance"]
            }, {
                key: "date",
                label: Ii["order-by-date"]
            }], void 0 !== e && b.orderByOptions && e["restrict-extended"] && void 0 !== e["restrict-extended"].sort_by && (this.Fd = this.Xn(e["restrict-extended"].sort_by) || 0), void 0 == this.Fd && (this.Fd = 0));
        this.Cp = b.overlayResults ? !0 : !1;
        this.Ym = !!b.enableRichSnippets;
        this.pn = !0;
        this.draw = this.Id;
        this.execute = this.execute;
        this.getImageSearcher = this.Qn;
        this.setResultSetSize = this.Na
    };
    Mi(Z, X);
    var oo = null,
        po = !1,
        qo = function() {
            po || (oo = new Image, oo.onload = oo.onerror = oo.onabort = function() {
                oo = null
            }, oo.src = "https://www.googleapis.com/generate_204", po = !0)
        };
    uk() && qo();
    Z.prototype.au = function(a) {
        this.T || (this.T = new R, this.T.yf(this.sc), this.T.Ah = Ii["custom-search"], this.T.Dq(this.Ti), this.T.Fq(this.Vb), this.T.Eq(this.Sc), this.Mc(this.T), a && (a.cse_token ? this.T.vf(a.cse_token) : this.T.vf("AHKYotWVmvV1wohA3g8oNFAm_6cK:1495660148313"), a.resultSetSize && this.T.Na(a.resultSetSize), a["restrict-extended"] && this.T.Hc("restrict-extended", a["restrict-extended"]), a["restrict-safesearch"] && this.T.Hc("restrict-safesearch", a["restrict-safesearch"]), a.isSafeSearchActive && this.T.xf(a.isSafeSearchActive),
            a.linkTarget && this.T.Ma(a.linkTarget), a.queryAddition && this.T.hc(a.queryAddition), a.experimentNames && this.T.Ae(a.experimentNames), a.cselibVersion && (this.T.wf(a.cselibVersion), this.T.mi("cse.customWebSearch", this.sc, a.experimentNames), this.Zg = new hk("cse.searchControl", a.cselibVersion, this.sc, a.experimentNames || []))))
    };
    Z.prototype.Wt = function(a) {
        if (!this.W && (this.W = new Fk, this.W.yf(this.sc), this.W.Dq(this.Ti), this.W.Fq(this.Vb), this.W.Eq(this.Sc), this.Mc(this.W), a)) {
            a.cse_token ? this.W.vf(a.cse_token) : this.W.vf("AHKYotWVmvV1wohA3g8oNFAm_6cK:1495660148313");
            a.resultSetSize && this.W.Na(a.resultSetSize);
            a["restrict-safesearch"] && this.W.Hc("restrict-safesearch", a["restrict-safesearch"]);
            a.isSafeSearchActive && this.W.xf(a.isSafeSearchActive);
            a["restrict-extended"] && this.W.Hc("restrict-extended", a["restrict-extended"]);
            a.linkTarget && this.W.Ma(a.linkTarget);
            a.queryAddition && this.W.hc(a.queryAddition);
            var b = [];
            a.experimentNames && (this.W.Ae(a.experimentNames), b = a.experimentNames.slice());
            a.cselibVersion && (this.W.wf(a.cselibVersion), this.W.mi("cse.customImageSearch", this.sc, b), this.Zg = new hk("cse.searchControl", a.cselibVersion, this.sc, b))
        }
    };

    function ro(a) {
        for (var b = a, c = ["+qptype:", "+lang:"], d = 0; d < c.length; ++d) {
            var e = a.indexOf(c[d]);
            0 <= e && (b = b.slice(0, e))
        }
        return b
    }
    Z.prototype.kz = function(a) {
        this.om = "string" == typeof a ? ro(a) : ""
    };
    Z.prototype.setAutoCompletionId = Z.prototype.kz;
    Z.prototype.Ag = function() {
        return this.om
    };
    Z.prototype.getPartnerId = Z.prototype.Ag;
    Z.prototype.Fg = function() {
        var a;
        return null == (a = this.Vf) ? void 0 : a.clientName
    };
    Z.prototype.getSearchboxClientName = Z.prototype.Fg;
    y("module$exports$cse$customsearchcontrol.CustomSearchControl.attachAutoCompletion", function(a, b, c, d, e, f, h, k) {
        return so(a, b, c, {
            callback: e,
            maxCompletions: f,
            styleOptions: k
        })
    });
    var so = function(a, b, c, d) {
        if (c instanceof X && window.console) return window.console.log("We no longer support attachAutoCompletionWithOptions for SearchControl object"), {};
        a = ro(a);
        d = d || {};
        var e = "string" == typeof c ? sj(c) : c;
        b = sj(b);
        if (!e)
            for (var f = b; f;) f = f.parentNode, rj(f) && (e = f);
        f = Un();
        var h = {
            clearToolTitle: Ii["clear-tool-title"],
            interfaceLanguage: "en",
            isLoggingWithHiddenFormFields: d.isLoggingWithHiddenFormFields,
            maxSuggestions: d.maxCompletions,
            maxPromotions: d.maxPromotions,
            styleOptions: d.styleOptions
        };
        (d = d.searchButton ? sj(d.searchButton) : null) && ("submit" != d.type ? h.searchButton = d : window.console && window.console.warn("Cannot associate searchButton with a button of type submit."));
        if (h.isLoggingWithHiddenFormFields && !h.searchButton) return window.console && window.console.warn('The "searchButton" option is required when "isLoggingWithHiddenFormFields" is true.'), {};
        d = c && (c.execute || c.submit);
        rj(e) ? (h.isLoggingWithHiddenFormFields = h.isLoggingWithHiddenFormFields || vj(uj(e.action)), f.install(e, b, a, h)) : f.Cw(d ?
            Ti(c, d) : function() {}, b, a, h);
        return {
            getInputQuery: f.la,
            prefillQuery: f.Pb
        }
    };
    y("module$exports$cse$customsearchcontrol.CustomSearchControl.attachAutoCompletionWithOptions", so);
    Z.prototype.St = function(a) {
        if (this.rd) {
            if (a) throw "Please use constructor of CustomSearchControl to pass in additional options.";
            this.od.H(!1)
        }
    };
    Z.prototype.enableAutoCompletion = Z.prototype.St;
    Z.prototype.Id = function(a, b) {
        b || (b = new Zn);
        b.Cq(2);
        this.rF && 1 == this.K.length && (this.wA = !0);
        this.Be(ao);
        "searchbox-only" != b.qb && this.Ti && qo();
        X.prototype.Id.call(this, a, b);
        sj("cse-hosted") || window.__gcse || window.console && window.console.warn("This page is calling an unsupported version of the Custom Search Element API. Please switch to the current version of the Custom Search Element API https://developers.google.com/custom-search/docs/element.");
        a = this.oa ? "gsc-control-searchbox-only" : "gsc-control-cse";
        b = this.root;
        this.oa || (b = L(), this.root.parentNode && this.root.parentNode.insertBefore(b, this.root), E(b, this.root), og(this.root, "gsc-control-wrapper-cse"));
        og(b, a);
        D(b, a + "-en")
    };
    Z.prototype.draw = Z.prototype.Id;
    Z.prototype.$i = function(a, b, c, d, e) {
        if (this.oa) this.zp();
        else {
            var f = this.ea.offsetWidth;
            qg(this.nb, "gsc-thinWrapper");
            this.pn && (f = this.kv(), this.pn = !1);
            this.Zo = f;
            if (500 > (new Date).getTime() - this.DA && this.Nc) try {
                var h = decodeURIComponent(window.location.href).replace(/\+/g, " "),
                    k = decodeURIComponent(a).replace(/\+/g, " ");
                this.Nc = -1 != h.indexOf(k)
            } catch (l) {}
            X.prototype.$i.call(this, a, b, c, d, e)
        }
    };
    Z.prototype.kv = function() {
        var a = "a a a a a ";
        for (var b = 5; 80 > b; b *= 2) a += a;
        a = $i({
            text: a,
            Kc: !0
        });
        a.style.fontFamily = "arial";
        a.style.fontSize = "16px";
        a.style.visibility = "hidden";
        return this.ea ? (E(this.ea, a), b = this.ea.offsetWidth, this.ea.removeChild(a), b) : 0
    };
    Z.prototype.vb = function(a) {
        "string" == typeof a ? this.T ? this.T.vb(a) : this.W && this.W.vb(a) : (a.web && this.T && this.T.vb(a.web), a.image && this.W && this.W.vb(a.image))
    };
    Z.prototype.setUserDefinedLabel = Z.prototype.vb;
    Z.prototype.Mc = function(a, b, c) {
        X.prototype.Mc.call(this, a, b, c);
        a.ve = "gcsc"
    };
    Z.prototype.addSearcher = Z.prototype.Mc;
    Z.prototype.Ct = function() {
        this.Si("", {
            numTopAds: 0,
            numSideAds: 0,
            _includeBottomAds_: !1
        })
    };
    Z.prototype.disableAds = Z.prototype.Ct;
    Z.prototype.Oz = function() {};
    Z.prototype.setMoreAds = Z.prototype.Oz;
    Z.prototype.Qn = function() {
        return this.W
    };
    Z.prototype.getImageSearcher = Z.prototype.Qn;
    Z.prototype.Av = function() {
        return this.T
    };
    Z.prototype.getWebSearcher = Z.prototype.Av;
    var to = function(a, b, c) {
        "web" == a && (a = "");
        b && c && (a = a ? a + (":" + c) : c);
        return null == a ? "unknown" : a
    };
    y("module$exports$cse$customsearchcontrol.CustomSearchControl.getTrackingCategory", to);
    var no = function(a, b, c) {
        var d = document.location;
        c = [d.pathname, d.search, d.search ? "&" : "?", encodeURIComponent(a.Bj.queryParameter), "=", encodeURIComponent(c)];
        a.Bj.categoryParameter && (b = to(b.Ta, b.M, b.rc())) && c.push("&", encodeURIComponent(a.Bj.categoryParameter), "=", encodeURIComponent(b));
        window.gtag && "function" == typeof window.gtag ? window.gtag("event", "page_view", {
                page_path: c.join("")
            }) : window.ga && "function" == typeof window.ga ? window.ga("send", "pageview", c.join("")) : window._gaq && "function" == typeof window._gaq.push ?
            window._gaq.push(["_trackPageview", c.join("")]) : window.console && window.console.log("Google Analytics tracking was not correctly setup.")
    };
    y("module$exports$cse$customsearchcontrol.CustomSearchControl.AUTO_PUBID", "");
    var uo = function(a, b, c, d, e, f, h, k, l) {
        this.Dd = a;
        this.wa = b;
        this.type = c;
        this.Rb = {};
        this.v = this.Zs(d);
        this.Jc = e;
        this.hg = f;
        this.Ze = h;
        this.ob = k;
        this.Ca = l
    };
    g = uo.prototype;
    g.Yr = function(a) {
        if (a.wa != this.wa) return wj("Name of the component, " + a.wa + ", should match name of the element, " + this.wa + "."), this.fe;
        if (!a.type) return wj("Component has null type."), this.fe;
        var b = !1;
        this.Rb[a.type] && (wj("Multiple components of the same type " + a.type + " for Element named " + this.wa + " are detected. Only the last is used."), b = !0);
        for (var c = Mj[this.type].Pe, d = 0; d < c.length; d++)
            if (c[d] == a.type) return this.Rb[a.type] = a, b || this.fe++, this.fe;
        wj("Component of type " + a.type + " is not allowed for Element named " +
            this.wa + " of type " + this.type + ".");
        return this.fe
    };
    g.render = function() {
        var a = Mj[this.type].Pe;
        if (a.length != this.fe)
            for (var b = 0; b < a.length; b++)
                if (!this.Rb[a[b]]) return wj("Component of type " + a[b] + " is missing for Element named " + this.wa + "."), !1;
        a = {};
        for (var c in this.Rb) this.Rb.hasOwnProperty(c) && (b = this.Rb[c], b.jt(), a[c] = b.node, this.Hx(), this.Jx(b.attributes, c));
        this.Sb = this.Lt(a);
        return !0
    };
    g.Zs = function(a) {
        var b = {},
            c;
        for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b
    };
    g.Jx = function(a, b) {
        a.hasOwnProperty("webSearchSafesearch") && (a.isSafeSearchActive = a.webSearchSafesearch);
        a.hasOwnProperty("safeSearch") && (a.isSafeSearchActive = a.safeSearch);
        Uj(function(c) {
            if (a.hasOwnProperty(c.name) && c.s && ("searchbox+results" == b || void 0 == c.m || c.m == b)) {
                var d = c.l(a[c.name]);
                null != d && ("webSearchExtendedRestricts" === c.i ? (this.v.webSearchExtendedRestricts || (this.v.webSearchExtendedRestricts = {}), this.v.webSearchExtendedRestricts[c.name] = d) : "imageSearchExtendedRestricts" === c.i ? (this.v.imageSearchExtendedRestricts ||
                    (this.v.imageSearchExtendedRestricts = {}), c.g && (this.v.imageSearchExtendedRestricts[c.g] = d)) : this.v[c.name] = d)
            }
        }, this)
    };
    g.Hx = function() {
        var a = x.__gcse;
        if (a && a.searchCallbacks) {
            a = void 0 === x.__gcse ? {} : x.__gcse;
            var b = void 0 === a.searchCallbacks ? {} : a.searchCallbacks;
            a = void 0 === b.image ? {} : b.image;
            b = void 0 === b.web ? {} : b.web;
            a = r([
                [a.starting, "onImageSearchStarting"],
                [a.ready, "onImageResultsReady"],
                [a.rendered, "onImageResultsRendered"],
                [b.starting, "onWebSearchStarting"],
                [b.ready, "onWebResultsReady"],
                [b.rendered, "onWebResultsRendered"]
            ]);
            for (b = a.next(); !b.done; b = a.next()) {
                var c = r(b.value);
                b = c.next().value;
                c = c.next().value;
                b &&
                    (this.v[c] = "function" == typeof b ? b : "string" == typeof b && "function" === typeof x[b] ? x[b] : null)
            }
        }
    };
    g.fs = function(a, b, c) {
        b = wd(new fd(dd, "https://www.google.com/cse/static/element/%{versionDir}/mobile%{suffix}+%{lang}.css"), {
            versionDir: a,
            suffix: b,
            lang: c
        });
        a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.href = sd(b).toString();
        (b = qe('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b);
        document.getElementsByTagName("head")[0].appendChild(a)
    };
    g.Lt = function(a) {
        var b = {
            imageSearchOptions: {},
            webSearchOptions: {},
            autoCompleteOptions: {},
            googleAnalyticsOptions: {},
            orderByOptions: {}
        };
        Uj(function(h) {
            h.g && void 0 != this.v[h.name] && ((h.i ? b[h.i] : b)[h.g] = this.v[h.name])
        }, this);
        this.Ca && (b.cselibVersion = this.Ca);
        this.hg && (b.cse_token = this.hg);
        this.Ze && (b.experimentNames = this.Ze);
        this.v.enableRichSnippets && (b.enableRichSnippets = !0);
        if ("forced" == this.v.mobileLayout || "enabled" == this.v.mobileLayout && this.v.isMobileDevice) document.querySelector("head>meta[name=viewport]") ||
            console.warn("Mobile layout requested, but viewport meta tag is missing. Page layout may not be optimal."), this.fs(this.Ca, "", this.ob), b.useMobileLayout = !0;
        void 0 != this.v.cssThemeVersion && (b.cssThemeVersion = this.v.cssThemeVersion, (0, bk.$q)(this.v.cssThemeVersion));
        void 0 != this.v.autoCompleteSource && (b.autoCompleteOptions.clientName = this.v.autoCompleteSource);
        var c = new Z(this.Dd, b, this.wa);
        void 0 != this.v.addOverride && (0, bk.Ol)(this.v.addOverride);
        void 0 != this.v.linkTarget && c.Ma(this.v.linkTarget);
        var d = [
            [this.v.onImageSearchStarting, bb(c.Gz, c)],
            [this.v.onImageResultsReady, bb(c.Dz, c)],
            [this.v.onImageResultsRendered, bb(c.Ez, c)],
            [this.v.onWebSearchStarting, bb(c.fA, c)],
            [this.v.onWebResultsReady, bb(c.dA, c)],
            [this.v.onWebResultsRendered, bb(c.eA, c)]
        ];
        d = r(d);
        for (var e = d.next(); !e.done; e = d.next()) {
            var f = r(e.value);
            e = f.next().value;
            f = f.next().value;
            null != e && f(null, e)
        }
        d = new Zn;
        void 0 != this.v.enableAutoComplete && d.Ok(this.v.enableAutoComplete);
        void 0 != this.v.enableSpeech && d.Vq(this.v.enableSpeech);
        void 0 !=
            this.v.numTopRefinements && d.Yq(this.v.numTopRefinements);
        void 0 != this.v.hideElementBranding && d.Aq(!this.v.hideElementBranding);
        this.ob && d.Bq(this.ob);
        e = null;
        "searchbox-only" == this.type ? (e = this.v.resultsUrl, !e && this.Dd ? e = "https://cse.google.com/cse?cx=" + encodeURIComponent(this.Dd) : void 0 == e && (e = window.location.href), this.v.personalizedAds || (e += "&personalized_ads=0"), d.$m(e, this.v.queryParameterName, this.v.newWindow), e = a.searchbox) : "searchresults-only" == this.type ? (d.Zm(), e = a.results) : "two-column" ==
            this.type ? (d.Wk(a.searchbox), e = a.results) : e = a["searchbox+results"];
        c.Id(e, d);
        this.v.noResultsString && (a = te(this.v.noResultsString), c.Be(a));
        this.v.enableHistory ? c.fr(Ti(this, this.zc)) && void 0 == this.v.linkTarget && c.Ma("_self") : this.zc(c);
        return c
    };
    g.zc = function(a) {
        var b = this.Jc[this.v.queryParameterName];
        if (b && this.v.autoSearchOnLoad)
            if ("searchbox-only" == this.type) a.fh(b);
            else {
                for (var c = this.Jc, d = {}, e = 0; e < Vj.length; e++) c.hasOwnProperty(Vj[e]) && (d[Vj[e]] = c[Vj[e]]);
                a.execute(b, void 0, d)
            }
    };
    g.fe = 0;
    g.Sb = null;
    var vo = function(a) {
        a = void 0 === a ? {} : a;
        this.Dd = a.cx || "";
        this.HA = this.zv(a.uiOptions);
        this.md = {};
        this.Ea = {};
        var b = window.location.search,
            c = {};
        if (1 < b.length) {
            b = b.substr(1).split("&");
            for (var d = 0; d < b.length; d++) {
                var e = b[d].split("="),
                    f = void 0;
                try {
                    f = decodeURIComponent(e[0])
                } catch (k) {
                    continue
                }
                if (f) {
                    var h = void 0;
                    try {
                        h = e[1] ? decodeURIComponent(e[1].replace(/\+/g, " ")) : e[1]
                    } catch (k) {}
                    c[f] = h
                }
            }
        }
        this.Jc = c;
        this.wk = a.rawCss;
        this.xs();
        this.hg = a.cse_token;
        this.Ze = a.exp;
        this.ob = a.language;
        this.Ca = a.cselibVersion;
        this.sb =
            new hk("cse.manager", this.Ca, this.Dd, this.Ze)
    };
    g = vo.prototype;
    g.zv = function(a) {
        a = a || {};
        var b = {};
        Uj(function(c) {
            var d = c.name,
                e = null;
            a.hasOwnProperty(d) && (e = c.l(a[d]));
            null != e ? b[d] = e : void 0 != c.defaultValue && (b[d] = c.defaultValue)
        }, this);
        return b
    };
    g.Kt = function() {
        if ("boolean" == typeof this.vk) return this.vk;
        var a = document.createElement("div");
        a.appendChild(document.createElement("G:TEST"));
        return this.vk = !!(a.querySelectorAll && 0 < a.querySelectorAll("G\\:TEST").length)
    };
    g.go = function(a) {
        var b = this;
        this.sb.vd(this.Jc.q, "go", null, function() {
            return b.Cv(a)
        }).apply(this)
    };
    g.Cv = function(a) {
        a = (a ? sj(a) : null) || document.body;
        a = this.Kt() ? a.querySelectorAll(Oj) : Sj(a);
        window || (window = {});
        for (var b = 0; b < a.length; ++b) this.Pp(new Xj(a[b]));
        this.rn()
    };
    g.render = function(a, b) {
        var c = this;
        return this.sb.vd(this.Jc.q, "render", null, function() {
            return c.xy(a, b)
        }).apply(this)
    };
    g.xy = function(a, b) {
        if (b && "searchbox" != a.tag && "searchresults" != b.tag) return wj('First and second components must be of tag "searchbox"  and "searchresults" separately.'), null;
        if (b && a.gname != b.gname) return wj("First and second components must be of the same gname."), null;
        a = [a];
        b && a.push(b);
        b = [];
        for (var c = 0; c < a.length; c++) {
            if (!a[c].div) return wj("div required for component."), null;
            a[c].tag || (a[c].tag = "search");
            if (!Nj[a[c].tag]) return wj("tag named " + a[c].tag + " is not recognized"), null;
            var d = sj(a[c].div);
            if (d && 1 === d.nodeType) {
                d = new Xj(d, a[c]);
                var e = d.wa;
                b.push(d)
            }
        }
        for (a = 0; a < b.length; a++) this.Pp(b[a]);
        this.rn();
        return e ? this.lj(e) : null
    };
    g.lj = function(a) {
        var b = this;
        return this.sb.vd(this.Jc.q, "getElement", null, function() {
            return b.Iu(a)
        }).apply(this)
    };
    g.Iu = function(a) {
        return this.Ea[a] ? new wo(this.Ea[a]) : null
    };
    g.pu = function() {
        var a = this;
        return this.sb.vd(this.Jc.q, "getAllElements", null, function() {
            return a.qu()
        }).apply()
    };
    g.qu = function() {
        var a = {},
            b;
        for (b in this.Ea) a[b] = new wo(this.Ea[b]);
        return a
    };
    g.Pp = function(a) {
        var b = a.wa;
        this.md[b] || (this.md[b] = new uo(this.Dd, b, a.vc, this.HA, this.Jc, this.hg, this.Ze, this.ob, this.Ca));
        this.md[b].Yr(a)
    };
    g.xs = function() {
        if (this.wk) {
            var a = document.getElementsByTagName("head")[0];
            a || (a = document.body.parentNode.appendChild(document.createElement("head")));
            var b = document.createElement("style");
            b.type = "text/css";
            b.styleSheet ? b.styleSheet.cssText = this.wk : b.appendChild(document.createTextNode(this.wk));
            a.appendChild(b)
        }
    };
    g.rn = function() {
        for (var a in this.md)
            if (this.md.hasOwnProperty(a)) {
                var b = this.md[a];
                b.render() && (this.Ea[a] = b);
                delete this.md[a]
            }
    };
    var wo = function(a) {
        this.gname = a.wa;
        this.type = a.type;
        this.uiOptions = a.v;
        this.execute = Ti(a.Sb, a.Sb.execute);
        this.prefillQuery = Ti(a.Sb, a.Sb.fh);
        this.getInputQuery = Ti(a.Sb, a.Sb.pj);
        this.clearAllResults = Ti(a.Sb, a.Sb.Qb)
    };
    var xo = Z,
        yo, zo = {
            cx: null,
            gg: null,
            exp: null
        },
        Ao = function(a) {
            if (!yo) {
                yo = new vo(a);
                if (a) {
                    if (!zo.gg) {
                        var b = a.cse_token;
                        b && (zo.gg = b)
                    }
                    zo.exp || (b = a.exp) && (zo.exp = b);
                    zo.cx || (a = a.cx) && (zo.cx = a)
                }
                return !0
            }
            return !1
        };
    var Bo = x.window.setTimeout,
        Co = x.window,
        Do = x.document,
        Eo = function() {
            return {
                loaded: !0,
                complete: !0
            }[Do.readyState]
        },
        Fo = function(a) {
            if ("loading" === Do.readyState)
                if (Co.addEventListener) Co.addEventListener("DOMContentLoaded", function c() {
                    Co.removeEventListener("DOMContentLoaded", c, !1);
                    a()
                }, !1);
                else if (Co.attachEvent) Co.attachEvent("onreadystatechange", function c() {
                Eo() && (Co.detachEvent("onreadystatechange", c), a())
            });
            else return !1;
            else a();
            return !0
        },
        Go = function(a) {
            if (Co.addEventListener) Co.addEventListener("load",
                function c() {
                    Co.removeEventListener("load", c, !1);
                    a()
                }, !1);
            else if (Co.attachEvent) Co.attachEvent("onload", function c() {
                Co.detachEvent("onload", c);
                a()
            });
            else return !1;
            return !0
        },
        Ho = function(a, b) {
            var c = function() {
                a() ? b() : Bo(c, 10)
            };
            c()
        };
    var Io = function(a, b) {
            for (var c = r(Ha.apply(2, arguments)), d = c.next(); !d.done; d = c.next()) d = d.value, y(b + "." + d, a[d])
        },
        Jo = function(a, b) {
            for (var c in b) y(a + "." + c, b[c])
        };
    Io({
            init: Ao,
            go: function(a) {
                Ao();
                yo.go(a)
            },
            render: function(a, b) {
                Ao();
                return yo.render(a, b)
            },
            createControl: function(a) {
                a.cse_token = zo.gg;
                a.experimentNames = zo.exp;
                return new xo(zo.cx || "unknown cx", a)
            },
            getElement: function(a) {
                Ao();
                return yo.lj(a)
            },
            getAllElements: function() {
                Ao();
                return yo.pu()
            },
            testAccess: function() {
                Ua("cse.element.api.testAccess");
                return {
                    gD: yo,
                    LC: zo
                }
            },
            installMocks: function(a, b, c) {
                Ua("cse.element.api.installMocks");
                a && (yo = null, zo.cx = null, zo.gg = null, zo.exp = null);
                b && (yo = b);
                c && (xo = c)
            }
        }, "google.search.cse.element",
        "getAllElements", "getElement", "go", "init", "render", "createControl");
    Jo("google.search.cse.element", {
        ComponentType: {
            dC: "searchbox+results",
            cC: "searchbox",
            ZB: "results"
        },
        ElementType: {
            iC: "standard",
            jC: "two-column",
            eC: "searchbox-only",
            fC: "searchresults-only"
        }
    });
    Jo("google.search.cse.element.settings", {
        CLASS_PREFIX: "gcse-",
        CSE_PREFIX: "gcse",
        DATA_PREFIX: "data-",
        ElementConfiguration: {},
        forEachOption: Uj,
        getAllComponentElements: Sj,
        getNextDivId: Kj,
        GNAME: "gname",
        HTML_TAG: "div",
        LOGGING_PARAMETERS: Vj,
        OptionConfig: {},
        Option: Tj,
        QUERY_SELECTOR_ALL_SELECTOR: Oj,
        RenderMode: {
            REPLACE: 0,
            jB: 1
        },
        TagConfiguration: {},
        TAG_PREFIX: "gcse:",
        WIDGET_TYPE_CONFIGURATIONS: Mj
    });
    Io(bk, "google.search.Csedr", "addOverride", "render");
    y("google.search.CustomSearchControl", Z);
    y("google.search.DrawOptions", Zn);
    Jo("google.search.ImageSearch", {
        showPopup: Ik,
        hidePopup: Jk
    });
    Jo("google.search.richsnippets", {
        merge: function(a) {
            if (!a) return a;
            if (!(a instanceof Array)) return a;
            for (var b = {}, c = 0; c < a.length; c++)
                for (var d in a[c]) b[d] = a[c][d];
            return b
        },
        hreviewNonEmpty: function(a) {
            if (!(a instanceof Array)) return !(!a.description && !a.summary);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.description || c.summary) return !0
            }
            return !1
        }
    });
    Jo("google.search.Search", {
        FILTERED_CSE_RESULTSET: "filtered_cse",
        LARGE_CSE_RESULTSET: "large",
        SMALL_RESULTSET: "small"
    });
    y("google.search.CurrentLocale", "en");
    y("google.search.cse.element.Element", uo);
    y("google.setOnLoadCallback", function(a, b) {
        Eo() ? a() : b ? Fo(a) || Ho(Eo, a) : Go(a) || Ho(Eo, a)
    });
}).call(this);