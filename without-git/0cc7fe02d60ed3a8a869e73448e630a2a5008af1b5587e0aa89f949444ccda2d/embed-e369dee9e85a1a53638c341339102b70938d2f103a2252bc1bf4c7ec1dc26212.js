! function() {
    function e(e) {
        return "string" == typeof e && /^(\[|\{)/.test(e)
    }
    const t = document.getElementById("init-data");
    if (t) try {
        const r = t.value;
        if (e(r)) {
            const t = JSON.parse(r);
            Object.keys(t).forEach(n => {
                window[n] = e(t[n]) ? JSON.parse(t[n]) : t[n]
            })
        }
    } catch (n) {
        console.error(`Error parsing 'init-data': ${n.message}`)
    }
}();
var NastyBrowserSniffing = {
    init: function() {
        NastyBrowserSniffing.isIE11OrLess() && NastyBrowserSniffing.addIEclasses(), NastyBrowserSniffing._hasClassList() && (document.documentElement.classList.add(__browser.platform), document.documentElement.classList.add(this.getBrowserClassname()))
    },
    _hasClassList: function() {
        return document.documentElement && document.documentElement.classList
    },
    isIE11OrLess: function() {
        return "ie" === __browser.name && 1 * __browser.version <= 11
    },
    getBrowserClassname: function() {
        return __browser.name + __browser.version
    },
    addIEclasses: function() {
        document.documentElement.className += " " + this.getBrowserClassname()
    }
};
try {
    NastyBrowserSniffing.init()
} catch (e) {}
window.Hub = window.Hub || {
    sub: function(e, t) {
        if ("function" != typeof t) throw "fn MUST be a function";
        const n = e => t(e, e.detail.data);
        return window.addEventListener(e, n),
            function() {
                window.removeEventListener(e, n)
            }
    },
    pub: function(e, t) {
        var n, r = new CustomEvent(e, {
            detail: {
                data: t
            }
        });
        window.dispatchEvent(r)
    },
    unsub: function(e, t) {
        window.removeEventListener(e, t)
    }
};
const TEXT_JAVASCRIPT = "text/javascript";
window.EditorModes = {
        htmlModes: {
            text: "text",
            none: {
                name: "htmlmixed",
                htmlMode: !0,
                tags: {
                    script: [
                        ["type", /^text\/x-template$/, "htmlmixed"],
                        ["type", /^x-shader\/x-vertex$/, "text/typescript"],
                        ["type", /^text\/x-handlebars-template$/, "htmlmixed"],
                        ["type", /^text\/paperscript$/, TEXT_JAVASCRIPT],
                        [null, null, TEXT_JAVASCRIPT]
                    ]
                }
            },
            html: {
                name: "htmlmixed",
                htmlMode: !0,
                tags: {
                    script: [
                        ["type", /^text\/x-template$/, "htmlmixed"],
                        ["type", /^x-shader\/x-vertex$/, "text/typescript"],
                        ["type", /^text\/x-handlebars-template$/, "htmlmixed"],
                        ["type", /^x-text\/paperscript$/, TEXT_JAVASCRIPT],
                        [null, null, TEXT_JAVASCRIPT]
                    ]
                }
            },
            haml: "haml",
            slim: "application/x-slim",
            markdown: "markdown",
            pug: "pug"
        },
        htmlLoaderModes: {
            text: "text",
            none: "xml",
            html: "xml",
            haml: "haml",
            slim: "application/x-slim",
            markdown: "markdown",
            pug: "pug"
        },
        cssModes: {
            none: "text/css",
            css: "text/css",
            postcss: "text/css",
            scss: "text/x-scss",
            stylus: "text/x-styl",
            less: "text/x-less",
            sass: "text/x-sass"
        },
        jsModes: {
            none: TEXT_JAVASCRIPT,
            js: TEXT_JAVASCRIPT,
            babel: "text/jsx",
            coffeescript: "text/x-coffeescript",
            dart: "application/dart",
            flutter: "application/dart",
            vue: "text/x-vue",
            livescript: "text/x-livescript",
            typescript: "text/typescript"
        },
        getLoaderMode: function(e, t) {
            return "html" === t ? e in this.htmlLoaderModes ? "mode_" + this.htmlLoaderModes[e] : "mode_text" : "css" === t ? e in this.cssModes ? "mode_" + this.cssModes[e] : "mode_text" : "js" === t ? e in this.jsModes ? "mode_" + this.jsModes[e] : "mode_text" : void 0
        },
        getCMMode: function(e, t) {
            return "html" === t ? e in this.htmlModes ? this.htmlModes[e] : "text" : "css" === t ? e in this.cssModes ? this.cssModes[e] : "text" : "js" === t ? e in this.jsModes ? {
                name: this.jsModes[e],
                globalVars: !0
            } : "text" : void 0
        },
        _HTML_TYPES: ["html", "xml", "haml", "markdown", "slim", "pug", "application/x-slim"],
        _CSS_TYPES: ["css", "less", "scss", "sass", "stylus", "postcss", "text/css", "text/x-sass", "text/x-scss", "text/x-less", "text/x-styl"],
        _JS_TYPES: ["js", "javascript", "coffeescript", "livescript", "typescript", "babel", "text/javascript", "text/x-coffeescript", "text/x-livescript", "text/typescript", "application/dart", "text/x-vue"],
        _CUSTOM_EDITOR_TYPES: {
            vue: "js",
            flutter: "js"
        },
        cmModeToType: function(e) {
            var t = this._getSafeInputMode(e);
            return this._getType(t)
        },
        _getSafeInputMode: function(e) {
            var t;
            return ("string" == typeof e ? e : e.name).toLowerCase()
        },
        syntaxToType: function(e) {
            return this._getType(e)
        },
        _getType: function(e) {
            return -1 !== this._HTML_TYPES.indexOf(e) ? "html" : -1 !== this._CSS_TYPES.indexOf(e) ? "css" : -1 !== this._JS_TYPES.indexOf(e) ? "js" : this._CUSTOM_EDITOR_TYPES[e] ? this._CUSTOM_EDITOR_TYPES[e] : "unknown"
        }
    },
    function() {
        "use strict";

        function e(e, t, n) {
            for (var r in t || (t = {}), e) !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
            return t
        }

        function t(e, t, n, r, i) {
            null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
            for (var o = r || 0, a = i || 0;;) {
                var s = e.indexOf("\t", o);
                if (s < 0 || s >= t) return a + (t - o);
                a += s - o, a += n - a % n, o = s + 1
            }
        }

        function n() {}

        function r(t, r) {
            var i;
            return Object.create ? i = Object.create(t) : (n.prototype = t, i = new n), r && e(r, i), i
        }

        function i(e, t) {
            arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), p[e] = t
        }

        function o(e, t) {
            m[e] = t
        }

        function a(e) {
            if ("string" == typeof e && m.hasOwnProperty(e)) e = m[e];
            else if (e && "string" == typeof e.name && m.hasOwnProperty(e.name)) {
                var t = m[e.name];
                "string" == typeof t && (t = {
                    name: t
                }), (e = r(t, e)).name = t.name
            } else {
                if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return a("application/xml");
                if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return a("application/json")
            }
            return "string" == typeof e ? {
                name: e
            } : e || {
                name: "null"
            }
        }

        function s(e, t) {
            t = a(t);
            var n = p[t.name];
            if (!n) return s(e, "text/plain");
            var r = n(e, t);
            if (h.hasOwnProperty(t.name)) {
                var i = h[t.name];
                for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o])
            }
            if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
                for (var l in t.modeProps) r[l] = t.modeProps[l];
            return r
        }

        function l(t, n) {
            var r;
            e(n, h.hasOwnProperty(t) ? h[t] : h[t] = {})
        }

        function c(e, t) {
            if (!0 === t) return t;
            if (e.copyState) return e.copyState(t);
            var n = {};
            for (var r in t) {
                var i = t[r];
                i instanceof Array && (i = i.concat([])), n[r] = i
            }
            return n
        }

        function u(e, t) {
            for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) t = n.state, e = n.mode;
            return n || {
                mode: e,
                state: t
            }
        }

        function d(e, t, n) {
            return !e.startState || e.startState(t, n)
        }
        var f = function(e, t, n) {
            this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n
        };
        f.prototype.eol = function() {
            return this.pos >= this.string.length
        }, f.prototype.sol = function() {
            return this.pos == this.lineStart
        }, f.prototype.peek = function() {
            return this.string.charAt(this.pos) || undefined
        }, f.prototype.next = function() {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++)
        }, f.prototype.eat = function(e) {
            var t = this.string.charAt(this.pos),
                n;
            if (n = "string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t
        }, f.prototype.eatWhile = function(e) {
            for (var t = this.pos; this.eat(e););
            return this.pos > t
        }, f.prototype.eatSpace = function() {
            for (var e = this.pos;
                /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos;
            return this.pos > e
        }, f.prototype.skipToEnd = function() {
            this.pos = this.string.length
        }, f.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return this.pos = t, !0
        }, f.prototype.backUp = function(e) {
            this.pos -= e
        }, f.prototype.column = function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = t(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? t(this.string, this.lineStart, this.tabSize) : 0)
        }, f.prototype.indentation = function() {
            return t(this.string, null, this.tabSize) - (this.lineStart ? t(this.string, this.lineStart, this.tabSize) : 0)
        }, f.prototype.match = function(e, t, n) {
            if ("string" != typeof e) {
                var r = this.string.slice(this.pos).match(e);
                return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r)
            }
            var i = function(e) {
                    return n ? e.toLowerCase() : e
                },
                o;
            if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0
        }, f.prototype.current = function() {
            return this.string.slice(this.start, this.pos)
        }, f.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
                return t()
            } finally {
                this.lineStart -= e
            }
        }, f.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e)
        }, f.prototype.baseToken = function() {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos)
        };
        var p = {},
            m = {},
            h = {},
            g = {
                __proto__: null,
                modes: p,
                mimeModes: m,
                defineMode: i,
                defineMIME: o,
                resolveMode: a,
                getMode: s,
                modeExtensions: h,
                extendMode: l,
                copyState: c,
                innerMode: u,
                startState: d
            },
            k = "undefined" != typeof globalThis ? globalThis : window,
            b;
        for (var y in k.CodeMirror = {}, CodeMirror.StringStream = f, g) CodeMirror[y] = g[y];
        CodeMirror.defineMode("null", function() {
            return {
                token: function(e) {
                    return e.skipToEnd()
                }
            }
        }), CodeMirror.defineMIME("text/plain", "null"), CodeMirror.registerHelper = CodeMirror.registerGlobalHelper = Math.min, CodeMirror.splitLines = function(e) {
            return e.split(/\r?\n|\r/)
        }, CodeMirror.defaults = {
            indentUnit: 2,
            tabSize: 2
        }, b = function(e) {
            e.runMode = function(t, n, r, i) {
                var o = e.getMode(e.defaults, n),
                    a = i && i.tabSize || e.defaults.tabSize;
                if (r.appendChild) {
                    var s, l = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 9),
                        c = r,
                        u = 0;
                    c.innerHTML = "", r = function(e, t) {
                        if ("\n" == e) return c.appendChild(document.createTextNode(l ? "\r" : e)), void(u = 0);
                        for (var n = "", r = 0;;) {
                            var i = e.indexOf("\t", r);
                            if (-1 == i) {
                                n += e.slice(r), u += e.length - r;
                                break
                            }
                            u += i - r, n += e.slice(r, i);
                            var o = a - u % a;
                            u += o;
                            for (var s = 0; s < o; ++s) n += " ";
                            r = i + 1
                        }
                        if (t) {
                            var d = c.appendChild(document.createElement("span"));
                            d.className = "cm-" + t.replace(/ +/g, " cm-"), d.appendChild(document.createTextNode(n))
                        } else c.appendChild(document.createTextNode(n))
                    }
                }
                for (var d = e.splitLines(t), f = i && i.state || e.startState(o), p = 0, m = d.length; p < m; ++p) {
                    p && r("\n");
                    var h = new e.StringStream(d[p], null, {
                        lookAhead: function(e) {
                            return d[p + e]
                        },
                        baseToken: function() {}
                    });
                    for (!h.string && o.blankLine && o.blankLine(f); !h.eol();) {
                        var g = o.token(h, f);
                        r(h.current(), g, p, h.start, f), h.start = h.pos
                    }
                }
            }
        }, "object" == typeof exports && "object" == typeof module ? b(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], b) : b(CodeMirror)
    }(),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("./runmode")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "./runmode"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e, r) {
            if (3 == e.nodeType) return r.push(e.nodeValue);
            for (var i = e.firstChild; i; i = i.nextSibling) t(i, r), n.test(e.nodeType) && r.push("\n")
        }
        var n = /^(p|li|div|h\\d|pre|blockquote|td)$/;
        e.colorize = function(n, r) {
            n || (n = document.body.getElementsByTagName("pre"));
            for (var i = 0; i < n.length; ++i) {
                var o = n[i],
                    a = o.getAttribute("data-lang") || r;
                if (a) {
                    var s = [];
                    t(o, s), o.innerHTML = "", e.runMode(s.join(""), a, o), o.className += " cm-s-default"
                }
            }
        }
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        var t = {
                autoSelfClosers: {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    command: !0,
                    embed: !0,
                    frame: !0,
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
                    menuitem: !0
                },
                implicitlyClosed: {
                    dd: !0,
                    li: !0,
                    optgroup: !0,
                    option: !0,
                    p: !0,
                    rp: !0,
                    rt: !0,
                    tbody: !0,
                    td: !0,
                    tfoot: !0,
                    th: !0,
                    tr: !0
                },
                contextGrabbers: {
                    dd: {
                        dd: !0,
                        dt: !0
                    },
                    dt: {
                        dd: !0,
                        dt: !0
                    },
                    li: {
                        li: !0
                    },
                    option: {
                        option: !0,
                        optgroup: !0
                    },
                    optgroup: {
                        optgroup: !0
                    },
                    p: {
                        address: !0,
                        article: !0,
                        aside: !0,
                        blockquote: !0,
                        dir: !0,
                        div: !0,
                        dl: !0,
                        fieldset: !0,
                        footer: !0,
                        form: !0,
                        h1: !0,
                        h2: !0,
                        h3: !0,
                        h4: !0,
                        h5: !0,
                        h6: !0,
                        header: !0,
                        hgroup: !0,
                        hr: !0,
                        menu: !0,
                        nav: !0,
                        ol: !0,
                        p: !0,
                        pre: !0,
                        section: !0,
                        table: !0,
                        ul: !0
                    },
                    rp: {
                        rp: !0,
                        rt: !0
                    },
                    rt: {
                        rp: !0,
                        rt: !0
                    },
                    tbody: {
                        tbody: !0,
                        tfoot: !0
                    },
                    td: {
                        td: !0,
                        th: !0
                    },
                    tfoot: {
                        tbody: !0
                    },
                    th: {
                        td: !0,
                        th: !0
                    },
                    thead: {
                        tbody: !0,
                        tfoot: !0
                    },
                    tr: {
                        tr: !0
                    }
                },
                doNotIndent: {
                    pre: !0
                },
                allowUnquoted: !0,
                allowMissing: !0,
                caseFold: !0
            },
            n = {
                autoSelfClosers: {},
                implicitlyClosed: {},
                contextGrabbers: {},
                doNotIndent: {},
                allowUnquoted: !1,
                allowMissing: !1,
                allowMissingTagName: !1,
                caseFold: !1
            };
        e.defineMode("xml", function(r, i) {
            function o(e, t) {
                function n(n) {
                    return t.tokenize = n, n(e, t)
                }
                var r = e.next(),
                    i;
                return "<" == r ? e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(l("atom", "]]>")) : null : e.match("--") ? n(l("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(c(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = l("meta", "?>"), "meta") : (_ = e.eat("/") ? "closeTag" : "openTag", t.tokenize = a, "tag bracket") : "&" == r ? (i = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error" : (e.eatWhile(/[^&<]/), null)
            }

            function a(e, t) {
                var n = e.next();
                if (">" == n || "/" == n && e.eat(">")) return t.tokenize = o, _ = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";
                if ("=" == n) return _ = "equals", null;
                if ("<" == n) {
                    t.tokenize = o, t.state = p, t.tagName = t.tagStart = null;
                    var r = t.tokenize(e, t);
                    return r ? r + " tag error" : "tag error"
                }
                return /[\'\"]/.test(n) ? (t.tokenize = s(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
            }

            function s(e) {
                var t = function(t, n) {
                    for (; !t.eol();)
                        if (t.next() == e) {
                            n.tokenize = a;
                            break
                        }
                    return "string"
                };
                return t.isInAttribute = !0, t
            }

            function l(e, t) {
                return function(n, r) {
                    for (; !n.eol();) {
                        if (n.match(t)) {
                            r.tokenize = o;
                            break
                        }
                        n.next()
                    }
                    return e
                }
            }

            function c(e) {
                return function(t, n) {
                    for (var r; null != (r = t.next());) {
                        if ("<" == r) return n.tokenize = c(e + 1), n.tokenize(t, n);
                        if (">" == r) {
                            if (1 == e) {
                                n.tokenize = o;
                                break
                            }
                            return n.tokenize = c(e - 1), n.tokenize(t, n)
                        }
                    }
                    return "meta"
                }
            }

            function u(e, t, n) {
                this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (E.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
            }

            function d(e) {
                e.context && (e.context = e.context.prev)
            }

            function f(e, t) {
                for (var n;;) {
                    if (!e.context) return;
                    if (n = e.context.tagName, !E.contextGrabbers.hasOwnProperty(n) || !E.contextGrabbers[n].hasOwnProperty(t)) return;
                    d(e)
                }
            }

            function p(e, t, n) {
                return "openTag" == e ? (n.tagStart = t.column(), m) : "closeTag" == e ? h : p
            }

            function m(e, t, n) {
                return "word" == e ? (n.tagName = t.current(), T = "tag", b) : E.allowMissingTagName && "endTag" == e ? (T = "tag bracket", b(e, t, n)) : (T = "error", m)
            }

            function h(e, t, n) {
                if ("word" == e) {
                    var r = t.current();
                    return n.context && n.context.tagName != r && E.implicitlyClosed.hasOwnProperty(n.context.tagName) && d(n), n.context && n.context.tagName == r || !1 === E.matchClosing ? (T = "tag", g) : (T = "tag error", k)
                }
                return E.allowMissingTagName && "endTag" == e ? (T = "tag bracket", g(e, t, n)) : (T = "error", k)
            }

            function g(e, t, n) {
                return "endTag" != e ? (T = "error", g) : (d(n), p)
            }

            function k(e, t, n) {
                return T = "error", g(e, t, n)
            }

            function b(e, t, n) {
                if ("word" == e) return T = "attribute", y;
                if ("endTag" == e || "selfcloseTag" == e) {
                    var r = n.tagName,
                        i = n.tagStart;
                    return n.tagName = n.tagStart = null, "selfcloseTag" == e || E.autoSelfClosers.hasOwnProperty(r) ? f(n, r) : (f(n, r), n.context = new u(n, r, i == n.indented)), p
                }
                return T = "error", b
            }

            function y(e, t, n) {
                return "equals" == e ? x : (E.allowMissing || (T = "error"), b(e, t, n))
            }

            function x(e, t, n) {
                return "string" == e ? v : "word" == e && E.allowUnquoted ? (T = "string", b) : (T = "error", b(e, t, n))
            }

            function v(e, t, n) {
                return "string" == e ? v : b(e, t, n)
            }
            var w = r.indentUnit,
                E = {},
                S = i.htmlMode ? t : n,
                _, T;
            for (var z in S) E[z] = S[z];
            for (var z in i) E[z] = i[z];
            return o.isInText = !0, {
                startState: function(e) {
                    var t = {
                        tokenize: o,
                        state: p,
                        indented: e || 0,
                        tagName: null,
                        tagStart: null,
                        context: null
                    };
                    return null != e && (t.baseIndent = e), t
                },
                token: function(e, t) {
                    if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                    _ = null;
                    var n = t.tokenize(e, t);
                    return (n || _) && "comment" != n && (T = null, t.state = t.state(_ || n, e, t), T && (n = "error" == T ? n + " error" : T)), n
                },
                indent: function(t, n, r) {
                    var i = t.context;
                    if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + w;
                    if (i && i.noIndent) return e.Pass;
                    if (t.tokenize != a && t.tokenize != o) return r ? r.match(/^(\s*)/)[0].length : 0;
                    if (t.tagName) return !1 !== E.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + w * (E.multilineTagIndentFactor || 1);
                    if (E.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                    var s = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                    if (s && s[1])
                        for (; i;) {
                            if (i.tagName == s[2]) {
                                i = i.prev;
                                break
                            }
                            if (!E.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                            i = i.prev
                        } else if (s)
                            for (; i;) {
                                var l = E.contextGrabbers[i.tagName];
                                if (!l || !l.hasOwnProperty(s[2])) break;
                                i = i.prev
                            }
                    for (; i && i.prev && !i.startOfLine;) i = i.prev;
                    return i ? i.indent + w : t.baseIndent || 0
                },
                electricInput: /<\/[\s\w:]+>$/,
                blockCommentStart: "<!--",
                blockCommentEnd: "-->",
                configuration: E.htmlMode ? "html" : "xml",
                helperType: E.htmlMode ? "html" : "xml",
                skipAttribute: function(e) {
                    e.state == x && (e.state = b)
                },
                xmlCurrentTag: function(e) {
                    return e.tagName ? {
                        name: e.tagName,
                        close: "closeTag" == e.type
                    } : null
                },
                xmlCurrentContext: function(e) {
                    for (var t = [], n = e.context; n; n = n.prev) n.tagName && t.push(n.tagName);
                    return t.reverse()
                }
            }
        }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
            name: "xml",
            htmlMode: !0
        })
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e, t, n) {
            var r = e.current(),
                i = r.search(t);
            return i > -1 ? e.backUp(r.length - i) : r.match(/<\/?$/) && (e.backUp(r.length), e.match(t, !1) || e.match(r)), n
        }

        function n(e) {
            var t = l[e];
            return t || (l[e] = new RegExp("\\s+" + e + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))
        }

        function r(e, t) {
            var r = e.match(n(t));
            return r ? /^\s*(.*?)\s*$/.exec(r[2])[1] : ""
        }

        function i(e, t) {
            return new RegExp((t ? "^" : "") + "</s*" + e + "s*>", "i")
        }

        function o(e, t) {
            for (var n in e)
                for (var r = t[n] || (t[n] = []), i = e[n], o = i.length - 1; o >= 0; o--) r.unshift(i[o])
        }

        function a(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                if (!i[0] || i[1].test(r(t, i[0]))) return i[2]
            }
        }
        var s = {
                script: [
                    ["lang", /(javascript|babel)/i, "javascript"],
                    ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
                    ["type", /./, "text/plain"],
                    [null, null, "javascript"]
                ],
                style: [
                    ["lang", /^css$/i, "css"],
                    ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
                    ["type", /./, "text/plain"],
                    [null, null, "css"]
                ]
            },
            l = {};
        e.defineMode("htmlmixed", function(n, r) {
            function l(r, o) {
                var s = c.token(r, o.htmlState),
                    d = /\btag\b/.test(s),
                    f;
                if (d && !/[<>\s\/]/.test(r.current()) && (f = o.htmlState.tagName && o.htmlState.tagName.toLowerCase()) && u.hasOwnProperty(f)) o.inTag = f + " ";
                else if (o.inTag && d && />$/.test(r.current())) {
                    var p = /^([\S]+) (.*)/.exec(o.inTag);
                    o.inTag = null;
                    var m = ">" == r.current() && a(u[p[1]], p[2]),
                        h = e.getMode(n, m),
                        g = i(p[1], !0),
                        k = i(p[1], !1);
                    o.token = function(e, n) {
                        return e.match(g, !1) ? (n.token = l, n.localState = n.localMode = null, null) : t(e, k, n.localMode.token(e, n.localState))
                    }, o.localMode = h, o.localState = e.startState(h, c.indent(o.htmlState, "", ""))
                } else o.inTag && (o.inTag += r.current(), r.eol() && (o.inTag += " "));
                return s
            }
            var c = e.getMode(n, {
                    name: "xml",
                    htmlMode: !0,
                    multilineTagIndentFactor: r.multilineTagIndentFactor,
                    multilineTagIndentPastTag: r.multilineTagIndentPastTag
                }),
                u = {},
                d = r && r.tags,
                f = r && r.scriptTypes;
            if (o(s, u), d && o(d, u), f)
                for (var p = f.length - 1; p >= 0; p--) u.script.unshift(["type", f[p].matches, f[p].mode]);
            return {
                startState: function() {
                    var t;
                    return {
                        token: l,
                        inTag: null,
                        localMode: null,
                        localState: null,
                        htmlState: e.startState(c)
                    }
                },
                copyState: function(t) {
                    var n;
                    return t.localState && (n = e.copyState(t.localMode, t.localState)), {
                        token: t.token,
                        inTag: t.inTag,
                        localMode: t.localMode,
                        localState: n,
                        htmlState: e.copyState(c, t.htmlState)
                    }
                },
                token: function(e, t) {
                    return t.token(e, t)
                },
                indent: function(t, n, r) {
                    return !t.localMode || /^\s*<\//.test(n) ? c.indent(t.htmlState, n, r) : t.localMode.indent ? t.localMode.indent(t.localState, n, r) : e.Pass
                },
                innerMode: function(e) {
                    return {
                        state: e.localState || e.htmlState,
                        mode: e.localMode || c
                    }
                }
            }
        }, "xml", "javascript", "css"), e.defineMIME("text/html", "htmlmixed")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../xml/xml"), require("../meta")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../meta"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("markdown", function(t, n) {
            function r(n) {
                if (e.findModeByName) {
                    var r = e.findModeByName(n);
                    r && (n = r.mime || r.mimes[0])
                }
                var i = e.getMode(t, n);
                return "null" == i.name ? null : i
            }

            function i(e, t, n) {
                return t.f = t.inline = n, n(e, t)
            }

            function o(e, t, n) {
                return t.f = t.block = n, n(e, t)
            }

            function a(e) {
                return !e || !/\S/.test(e.string)
            }

            function s(t) {
                if (t.linkTitle = !1, t.linkHref = !1, t.linkText = !1, t.em = !1, t.strong = !1, t.strikethrough = !1, t.quote = 0, t.indentedCode = !1, t.f == c) {
                    var n = v;
                    if (!n) {
                        var r = e.innerMode(x, t.htmlState);
                        n = "xml" == r.mode.name && null === r.state.tagStart && !r.state.context && r.state.tokenize.isInText
                    }
                    n && (t.f = p, t.block = l, t.htmlState = null)
                }
                return t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.prevLine = t.thisLine, t.thisLine = {
                    stream: null
                }, null
            }

            function l(t, o) {
                var s = t.column() === o.indentation,
                    l = a(o.prevLine.stream),
                    c = o.indentedCode,
                    f = o.prevLine.hr,
                    p = !1 !== o.list,
                    m = (o.listStack[o.listStack.length - 1] || 0) + 3;
                o.indentedCode = !1;
                var h = o.indentation;
                if (null === o.indentationDiff && (o.indentationDiff = o.indentation, p)) {
                    for (o.list = null; h < o.listStack[o.listStack.length - 1];) o.listStack.pop(), o.listStack.length ? o.indentation = o.listStack[o.listStack.length - 1] : o.list = !1;
                    !1 !== o.list && (o.indentationDiff = h - o.listStack[o.listStack.length - 1])
                }
                var g = !(l || f || o.prevLine.header || p && c || o.prevLine.fencedCodeEnd),
                    b = (!1 === o.list || f || l) && o.indentation <= m && t.match(S),
                    y = null;
                if (o.indentationDiff >= 4 && (c || o.prevLine.fencedCodeEnd || o.prevLine.header || l)) return t.skipToEnd(), o.indentedCode = !0, w.code;
                if (t.eatSpace()) return null;
                if (s && o.indentation <= m && (y = t.match(z)) && y[1].length <= 6) return o.quote = 0, o.header = y[1].length, o.thisLine.header = !0, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, d(o);
                if (o.indentation <= m && t.eat(">")) return o.quote = s ? 1 : o.quote + 1, n.highlightFormatting && (o.formatting = "quote"), t.eatSpace(), d(o);
                if (!b && !o.setext && s && o.indentation <= m && (y = t.match(_))) {
                    var x = y[1] ? "ol" : "ul";
                    return o.indentation = h + t.current().length, o.list = !0, o.quote = 0, o.listStack.push(o.indentation), o.em = !1, o.strong = !1, o.code = !1, o.strikethrough = !1, n.taskLists && t.match(T, !1) && (o.taskList = !0), o.f = o.inline, n.highlightFormatting && (o.formatting = ["list", "list-" + x]), d(o)
                }
                return s && o.indentation <= m && (y = t.match(A, !0)) ? (o.quote = 0, o.fencedEndRE = new RegExp(y[1] + "+ *$"), o.localMode = n.fencedCodeBlockHighlighting && r(y[2] || n.fencedCodeBlockDefaultMode), o.localMode && (o.localState = e.startState(o.localMode)), o.f = o.block = u, n.highlightFormatting && (o.formatting = "code-block"), o.code = -1, d(o)) : o.setext || !(g && p || o.quote || !1 !== o.list || o.code || b || L.test(t.string)) && (y = t.lookAhead(1)) && (y = y.match(M)) ? (o.setext ? (o.header = o.setext, o.setext = 0, t.skipToEnd(), n.highlightFormatting && (o.formatting = "header")) : (o.header = "=" == y[0].charAt(0) ? 1 : 2, o.setext = o.header), o.thisLine.header = !0, o.f = o.inline, d(o)) : b ? (t.skipToEnd(), o.hr = !0, o.thisLine.hr = !0, w.hr) : "[" === t.peek() ? i(t, o, k) : i(t, o, o.inline)
            }

            function c(t, n) {
                var r = x.token(t, n.htmlState);
                if (!v) {
                    var i = e.innerMode(x, n.htmlState);
                    ("xml" == i.mode.name && null === i.state.tagStart && !i.state.context && i.state.tokenize.isInText || n.md_inside && t.current().indexOf(">") > -1) && (n.f = p, n.block = l, n.htmlState = null)
                }
                return r
            }

            function u(e, t) {
                var r = t.listStack[t.listStack.length - 1] || 0,
                    i = t.indentation < r,
                    a = r + 3,
                    s;
                return t.fencedEndRE && t.indentation <= a && (i || e.match(t.fencedEndRE)) ? (n.highlightFormatting && (t.formatting = "code-block"), i || (s = d(t)), t.localMode = t.localState = null, t.block = l, t.f = p, t.fencedEndRE = null, t.code = 0, t.thisLine.fencedCodeEnd = !0, i ? o(e, t, t.block) : s) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), w.code)
            }

            function d(e) {
                var t = [];
                if (e.formatting) {
                    t.push(w.formatting), "string" == typeof e.formatting && (e.formatting = [e.formatting]);
                    for (var r = 0; r < e.formatting.length; r++) t.push(w.formatting + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(w.formatting + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(w.formatting + "-" + e.formatting[r] + "-" + e.quote) : t.push("error"))
                }
                if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null;
                if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null;
                if (e.linkHref ? t.push(w.linkHref, "url") : (e.strong && t.push(w.strong), e.em && t.push(w.em), e.strikethrough && t.push(w.strikethrough), e.emoji && t.push(w.emoji), e.linkText && t.push(w.linkText), e.code && t.push(w.code), e.image && t.push(w.image), e.imageAltText && t.push(w.imageAltText, "link"), e.imageMarker && t.push(w.imageMarker)), e.header && t.push(w.header, w.header + "-" + e.header), e.quote && (t.push(w.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(w.quote + "-" + e.quote) : t.push(w.quote + "-" + n.maxBlockquoteDepth)), !1 !== e.list) {
                    var i = (e.listStack.length - 1) % 3;
                    i ? 1 === i ? t.push(w.list2) : t.push(w.list3) : t.push(w.list1)
                }
                return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null
            }

            function f(e, t) {
                return e.match(C, !0) ? d(t) : undefined
            }

            function p(t, r) {
                var i = r.text(t, r),
                    a;
                if (void 0 !== i) return i;
                if (r.list) return r.list = null, d(r);
                if (r.taskList) return " " === t.match(T, !0)[1] ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, d(r);
                if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (r.formatting = "header"), d(r);
                var s = t.next(),
                    l, l;
                if (r.linkTitle) {
                    r.linkTitle = !1;
                    var u = s;
                    "(" === s && (u = ")");
                    var f = "^\\s*(?:[^" + (u = (u + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) + "\\\\]+|\\\\\\\\|\\\\.)" + u;
                    if (t.match(new RegExp(f), !0)) return w.linkHref
                }
                if ("`" === s) {
                    var g = r.formatting;
                    n.highlightFormatting && (r.formatting = "code"), t.eatWhile("`");
                    var k = t.current().length;
                    if (0 != r.code || r.quote && 1 != k) {
                        if (k == r.code) {
                            var b = d(r);
                            return r.code = 0, b
                        }
                        return r.formatting = g, d(r)
                    }
                    return r.code = k, d(r)
                }
                if (r.code) return d(r);
                if ("\\" === s && (t.next(), n.highlightFormatting)) {
                    var l = d(r),
                        y = w.formatting + "-escape";
                    return l ? l + " " + y : y
                }
                if ("!" === s && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return r.imageMarker = !0, r.image = !0, n.highlightFormatting && (r.formatting = "image"), d(r);
                if ("[" === s && r.imageMarker && t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)) return r.imageMarker = !1, r.imageAltText = !0, n.highlightFormatting && (r.formatting = "image"), d(r);
                if ("]" === s && r.imageAltText) {
                    n.highlightFormatting && (r.formatting = "image");
                    var l = d(r);
                    return r.imageAltText = !1, r.image = !1, r.inline = r.f = h, l
                }
                if ("[" === s && !r.image) return r.linkText && t.match(/^.*?\]/) ? d(r) : (r.linkText = !0, n.highlightFormatting && (r.formatting = "link"), d(r));
                if ("]" === s && r.linkText) {
                    n.highlightFormatting && (r.formatting = "link");
                    var l = d(r);
                    return r.linkText = !1, r.inline = r.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? h : p, l
                }
                if ("<" === s && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) return r.f = r.inline = m, n.highlightFormatting && (r.formatting = "link"), (l = d(r)) ? l += " " : l = "", l + w.linkInline;
                if ("<" === s && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) return r.f = r.inline = m, n.highlightFormatting && (r.formatting = "link"), (l = d(r)) ? l += " " : l = "", l + w.linkEmail;
                if (n.xml && "<" === s && t.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, !1)) {
                    var v = t.string.indexOf(">", t.pos);
                    if (-1 != v) {
                        var E = t.string.substring(t.start, v);
                        /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(E) && (r.md_inside = !0)
                    }
                    return t.backUp(1), r.htmlState = e.startState(x), o(t, r, c)
                }
                if (n.xml && "<" === s && t.match(/^\/\w*?>/)) return r.md_inside = !1, "tag";
                if ("*" === s || "_" === s) {
                    for (var S = 1, _ = 1 == t.pos ? " " : t.string.charAt(t.pos - 2); S < 3 && t.eat(s);) S++;
                    var z = t.peek() || " ",
                        M = !/\s/.test(z) && (!D.test(z) || /\s/.test(_) || D.test(_)),
                        C = !/\s/.test(_) && (!D.test(_) || /\s/.test(z) || D.test(z)),
                        A = null,
                        L = null;
                    if (S % 2 && (r.em || !M || "*" !== s && C && !D.test(_) ? r.em != s || !C || "*" !== s && M && !D.test(z) || (A = !1) : A = !0), S > 1 && (r.strong || !M || "*" !== s && C && !D.test(_) ? r.strong != s || !C || "*" !== s && M && !D.test(z) || (L = !1) : L = !0), null != L || null != A) {
                        n.highlightFormatting && (r.formatting = null == A ? "strong" : null == L ? "em" : "strong em"), !0 === A && (r.em = s), !0 === L && (r.strong = s);
                        var b = d(r);
                        return !1 === A && (r.em = !1), !1 === L && (r.strong = !1), b
                    }
                } else if (" " === s && (t.eat("*") || t.eat("_"))) {
                    if (" " === t.peek()) return d(r);
                    t.backUp(1)
                }
                if (n.strikethrough)
                    if ("~" === s && t.eatWhile(s)) {
                        if (r.strikethrough) {
                            n.highlightFormatting && (r.formatting = "strikethrough");
                            var b = d(r);
                            return r.strikethrough = !1, b
                        }
                        if (t.match(/^[^\s]/, !1)) return r.strikethrough = !0, n.highlightFormatting && (r.formatting = "strikethrough"), d(r)
                    } else if (" " === s && t.match(/^~~/, !0)) {
                    if (" " === t.peek()) return d(r);
                    t.backUp(2)
                }
                if (n.emoji && ":" === s && t.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
                    r.emoji = !0, n.highlightFormatting && (r.formatting = "emoji");
                    var N = d(r);
                    return r.emoji = !1, N
                }
                return " " === s && (t.match(/^ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), d(r)
            }

            function m(e, t) {
                var r;
                if (">" === e.next()) {
                    t.f = t.inline = p, n.highlightFormatting && (t.formatting = "link");
                    var i = d(t);
                    return i ? i += " " : i = "", i + w.linkInline
                }
                return e.match(/^[^>]+/, !0), w.linkInline
            }

            function h(e, t) {
                if (e.eatSpace()) return null;
                var r = e.next();
                return "(" === r || "[" === r ? (t.f = t.inline = g("(" === r ? ")" : "]"), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, d(t)) : "error"
            }

            function g(e) {
                return function(t, r) {
                    var i;
                    if (t.next() === e) {
                        r.f = r.inline = p, n.highlightFormatting && (r.formatting = "link-string");
                        var o = d(r);
                        return r.linkHref = !1, o
                    }
                    return t.match(I[e]), r.linkHref = !0, d(r)
                }
            }

            function k(e, t) {
                return e.match(/^([^\]\\]|\\.)*\]:/, !1) ? (t.f = b, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, d(t)) : i(e, t, p)
            }

            function b(e, t) {
                if (e.match(/^\]:/, !0)) {
                    t.f = t.inline = y, n.highlightFormatting && (t.formatting = "link");
                    var r = d(t);
                    return t.linkText = !1, r
                }
                return e.match(/^([^\]\\]|\\.)+/, !0), w.linkText
            }

            function y(e, t) {
                return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), e.peek() === undefined ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = p, w.linkHref + " url")
            }
            var x = e.getMode(t, "text/html"),
                v = "null" == x.name;
            n.highlightFormatting === undefined && (n.highlightFormatting = !1), n.maxBlockquoteDepth === undefined && (n.maxBlockquoteDepth = 0), n.taskLists === undefined && (n.taskLists = !1), n.strikethrough === undefined && (n.strikethrough = !1), n.emoji === undefined && (n.emoji = !1), n.fencedCodeBlockHighlighting === undefined && (n.fencedCodeBlockHighlighting = !0), n.fencedCodeBlockDefaultMode === undefined && (n.fencedCodeBlockDefaultMode = "text/plain"), n.xml === undefined && (n.xml = !0), n.tokenTypeOverrides === undefined && (n.tokenTypeOverrides = {});
            var w = {
                header: "header",
                code: "comment",
                quote: "quote",
                list1: "variable-2",
                list2: "variable-3",
                list3: "keyword",
                hr: "hr",
                image: "image",
                imageAltText: "image-alt-text",
                imageMarker: "image-marker",
                formatting: "formatting",
                linkInline: "link",
                linkEmail: "link",
                linkText: "link",
                linkHref: "string",
                em: "em",
                strong: "strong",
                strikethrough: "strikethrough",
                emoji: "builtin"
            };
            for (var E in w) w.hasOwnProperty(E) && n.tokenTypeOverrides[E] && (w[E] = n.tokenTypeOverrides[E]);
            var S = /^([*\-_])(?:\s*\1){2,}\s*$/,
                _ = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                T = /^\[(x| )\](?=\s)/i,
                z = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
                M = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
                C = /^[^#!\[\]*_\\<>` "'(~:]+/,
                A = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
                L = /^\s*\[[^\]]+?\]:.*$/,
                D = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/,
                N = "    ",
                I = {
                    ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
                    "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
                },
                j = {
                    startState: function() {
                        return {
                            f: l,
                            prevLine: {
                                stream: null
                            },
                            thisLine: {
                                stream: null
                            },
                            block: l,
                            htmlState: null,
                            indentation: 0,
                            inline: p,
                            text: f,
                            formatting: !1,
                            linkText: !1,
                            linkHref: !1,
                            linkTitle: !1,
                            code: 0,
                            em: !1,
                            strong: !1,
                            header: 0,
                            setext: 0,
                            hr: !1,
                            taskList: !1,
                            list: !1,
                            listStack: [],
                            quote: 0,
                            trailingSpace: 0,
                            trailingSpaceNewLine: !1,
                            strikethrough: !1,
                            emoji: !1,
                            fencedEndRE: null
                        }
                    },
                    copyState: function(t) {
                        return {
                            f: t.f,
                            prevLine: t.prevLine,
                            thisLine: t.thisLine,
                            block: t.block,
                            htmlState: t.htmlState && e.copyState(x, t.htmlState),
                            indentation: t.indentation,
                            localMode: t.localMode,
                            localState: t.localMode ? e.copyState(t.localMode, t.localState) : null,
                            inline: t.inline,
                            text: t.text,
                            formatting: !1,
                            linkText: t.linkText,
                            linkTitle: t.linkTitle,
                            linkHref: t.linkHref,
                            code: t.code,
                            em: t.em,
                            strong: t.strong,
                            strikethrough: t.strikethrough,
                            emoji: t.emoji,
                            header: t.header,
                            setext: t.setext,
                            hr: t.hr,
                            taskList: t.taskList,
                            list: t.list,
                            listStack: t.listStack.slice(0),
                            quote: t.quote,
                            indentedCode: t.indentedCode,
                            trailingSpace: t.trailingSpace,
                            trailingSpaceNewLine: t.trailingSpaceNewLine,
                            md_inside: t.md_inside,
                            fencedEndRE: t.fencedEndRE
                        }
                    },
                    token: function(e, t) {
                        if (t.formatting = !1, e != t.thisLine.stream) {
                            if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0)) return s(t), null;
                            if (t.prevLine = t.thisLine, t.thisLine = {
                                    stream: e
                                }, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, !t.localState && (t.f = t.block, t.f != c)) {
                                var n = e.match(/^\s*/, !0)[0].replace(/\t/g, N).length;
                                if (t.indentation = n, t.indentationDiff = null, n > 0) return null
                            }
                        }
                        return t.f(e, t)
                    },
                    innerMode: function(e) {
                        return e.block == c ? {
                            state: e.htmlState,
                            mode: x
                        } : e.localState ? {
                            state: e.localState,
                            mode: e.localMode
                        } : {
                            state: e,
                            mode: j
                        }
                    },
                    indent: function(t, n, r) {
                        return t.block == c && x.indent ? x.indent(t.htmlState, n, r) : t.localState && t.localMode.indent ? t.localMode.indent(t.localState, n, r) : e.Pass
                    },
                    blankLine: s,
                    getType: d,
                    blockCommentStart: "<!--",
                    blockCommentEnd: "-->",
                    closeBrackets: "()[]{}''\"\"``",
                    fold: "markdown"
                };
            return j
        }, "xml"), e.defineMIME("text/markdown", "markdown"), e.defineMIME("text/x-markdown", "markdown")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../ruby/ruby")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../ruby/ruby"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("haml", function(t) {
            function n(e) {
                return function(t, n) {
                    var o;
                    return t.peek() == e && 1 == n.rubyState.tokenize.length ? (t.next(), n.tokenize = i, "closeAttributeTag") : r(t, n)
                }
            }

            function r(e, t) {
                return e.match("-#") ? (e.skipToEnd(), "comment") : a.token(e, t.rubyState)
            }

            function i(e, t) {
                var i = e.peek();
                if ("comment" == t.previousToken.style && t.indented > t.previousToken.indented) return e.skipToEnd(), "commentLine";
                if (t.startOfLine) {
                    if ("!" == i && e.match("!!")) return e.skipToEnd(), "tag";
                    if (e.match(/^%[\w:#\.]+=/)) return t.tokenize = r, "hamlTag";
                    if (e.match(/^%[\w:]+/)) return "hamlTag";
                    if ("/" == i) return e.skipToEnd(), "comment"
                }
                if ((t.startOfLine || "hamlTag" == t.previousToken.style) && ("#" == i || "." == i)) return e.match(/[\w-#\.]*/), "hamlAttribute";
                if (t.startOfLine && !e.match("-->", !1) && ("=" == i || "-" == i)) return t.tokenize = r, t.tokenize(e, t);
                if ("hamlTag" == t.previousToken.style || "closeAttributeTag" == t.previousToken.style || "hamlAttribute" == t.previousToken.style) {
                    if ("(" == i) return t.tokenize = n(")"), t.tokenize(e, t);
                    if ("{" == i && !e.match(/^\{%.*/)) return t.tokenize = n("}"), t.tokenize(e, t)
                }
                return o.token(e, t.htmlState)
            }
            var o = e.getMode(t, {
                    name: "htmlmixed"
                }),
                a = e.getMode(t, "ruby");
            return {
                startState: function() {
                    var t, n;
                    return {
                        htmlState: e.startState(o),
                        rubyState: e.startState(a),
                        indented: 0,
                        previousToken: {
                            style: null,
                            indented: 0
                        },
                        tokenize: i
                    }
                },
                copyState: function(t) {
                    return {
                        htmlState: e.copyState(o, t.htmlState),
                        rubyState: e.copyState(a, t.rubyState),
                        indented: t.indented,
                        previousToken: t.previousToken,
                        tokenize: t.tokenize
                    }
                },
                token: function(e, t) {
                    if (e.sol() && (t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) return null;
                    var n = t.tokenize(e, t);
                    if (t.startOfLine = !1, n && "commentLine" != n && (t.previousToken = {
                            style: n,
                            indented: t.indented
                        }), e.eol() && t.tokenize == r) {
                        e.backUp(1);
                        var o = e.peek();
                        e.next(), o && "," != o && (t.tokenize = i)
                    }
                    return "hamlTag" == n ? n = "tag" : "commentLine" == n ? n = "comment" : "hamlAttribute" == n ? n = "attribute" : "closeAttributeTag" == n && (n = null), n
                }
            }
        }, "htmlmixed", "ruby"), e.defineMIME("text/x-haml", "haml")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../javascript/javascript"), require("../css/css"), require("../htmlmixed/htmlmixed")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../javascript/javascript", "../css/css", "../htmlmixed/htmlmixed"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("pug", function(t) {
            function n() {
                this.javaScriptLine = !1, this.javaScriptLineExcludesColon = !1, this.javaScriptArguments = !1, this.javaScriptArgumentsDepth = 0, this.isInterpolating = !1, this.interpolationNesting = 0, this.jsState = e.startState(X), this.restOfLine = "", this.isIncludeFiltered = !1, this.isEach = !1, this.lastTag = "", this.scriptType = "", this.isAttrs = !1, this.attrsNest = [], this.inAttributeName = !0, this.attributeIsType = !1, this.attrValue = "", this.indentOf = Infinity, this.indentToken = "", this.innerMode = null, this.innerState = null, this.innerModeForLine = !1
            }

            function r(e, t) {
                if (e.sol() && (t.javaScriptLine = !1, t.javaScriptLineExcludesColon = !1), t.javaScriptLine) {
                    if (t.javaScriptLineExcludesColon && ":" === e.peek()) return t.javaScriptLine = !1, void(t.javaScriptLineExcludesColon = !1);
                    var n = X.token(e, t.jsState);
                    return e.eol() && (t.javaScriptLine = !1), n || !0
                }
            }

            function i(e, t) {
                var n;
                if (t.javaScriptArguments) return 0 === t.javaScriptArgumentsDepth && "(" !== e.peek() ? void(t.javaScriptArguments = !1) : ("(" === e.peek() ? t.javaScriptArgumentsDepth++ : ")" === e.peek() && t.javaScriptArgumentsDepth--, 0 === t.javaScriptArgumentsDepth ? void(t.javaScriptArguments = !1) : X.token(e, t.jsState) || !0)
            }

            function o(e) {
                if (e.match(/^yield\b/)) return "keyword"
            }

            function a(e) {
                if (e.match(/^(?:doctype) *([^\n]+)?/)) return K
            }

            function s(e, t) {
                if (e.match("#{")) return t.isInterpolating = !0, t.interpolationNesting = 0, "punctuation"
            }

            function l(e, t) {
                if (t.isInterpolating) {
                    if ("}" === e.peek()) {
                        if (t.interpolationNesting--, t.interpolationNesting < 0) return e.next(), t.isInterpolating = !1, "punctuation"
                    } else "{" === e.peek() && t.interpolationNesting++;
                    return X.token(e, t.jsState) || !0
                }
            }

            function c(e, t) {
                if (e.match(/^case\b/)) return t.javaScriptLine = !0, W
            }

            function u(e, t) {
                if (e.match(/^when\b/)) return t.javaScriptLine = !0, t.javaScriptLineExcludesColon = !0, W
            }

            function d(e) {
                if (e.match(/^default\b/)) return W
            }

            function f(e, t) {
                if (e.match(/^extends?\b/)) return t.restOfLine = "string", W
            }

            function p(e, t) {
                if (e.match(/^append\b/)) return t.restOfLine = "variable", W
            }

            function m(e, t) {
                if (e.match(/^prepend\b/)) return t.restOfLine = "variable", W
            }

            function h(e, t) {
                if (e.match(/^block\b *(?:(prepend|append)\b)?/)) return t.restOfLine = "variable", W
            }

            function g(e, t) {
                if (e.match(/^include\b/)) return t.restOfLine = "string", W
            }

            function k(e, t) {
                if (e.match(/^include:([a-zA-Z0-9\-]+)/, !1) && e.match("include")) return t.isIncludeFiltered = !0, W
            }

            function b(e, t) {
                if (t.isIncludeFiltered) {
                    var n = z(e, t);
                    return t.isIncludeFiltered = !1, t.restOfLine = "string", n
                }
            }

            function y(e, t) {
                if (e.match(/^mixin\b/)) return t.javaScriptLine = !0, W
            }

            function x(e, t) {
                return e.match(/^\+([-\w]+)/) ? (e.match(/^\( *[-\w]+ *=/, !1) || (t.javaScriptArguments = !0, t.javaScriptArgumentsDepth = 0), "variable") : e.match(/^\+#{/, !1) ? (e.next(), t.mixinCallAfter = !0, s(e, t)) : void 0
            }

            function v(e, t) {
                if (t.mixinCallAfter) return t.mixinCallAfter = !1, e.match(/^\( *[-\w]+ *=/, !1) || (t.javaScriptArguments = !0, t.javaScriptArgumentsDepth = 0), !0
            }

            function w(e, t) {
                if (e.match(/^(if|unless|else if|else)\b/)) return t.javaScriptLine = !0, W
            }

            function E(e, t) {
                if (e.match(/^(- *)?(each|for)\b/)) return t.isEach = !0, W
            }

            function S(e, t) {
                if (t.isEach) {
                    if (e.match(/^ in\b/)) return t.javaScriptLine = !0, t.isEach = !1, W;
                    if (e.sol() || e.eol()) t.isEach = !1;
                    else if (e.next()) {
                        for (; !e.match(/^ in\b/, !1) && e.next(););
                        return "variable"
                    }
                }
            }

            function _(e, t) {
                if (e.match(/^while\b/)) return t.javaScriptLine = !0, W
            }

            function T(e, t) {
                var n;
                if (n = e.match(/^(\w(?:[-:\w]*\w)?)\/?/)) return t.lastTag = n[1].toLowerCase(), "script" === t.lastTag && (t.scriptType = "application/javascript"), "tag"
            }

            function z(n, r) {
                var i;
                if (n.match(/^:([\w\-]+)/)) return t && t.innerModes && (i = t.innerModes(n.current().substring(1))), i || (i = n.current().substring(1)), "string" == typeof i && (i = e.getMode(t, i)), q(n, r, i), "atom"
            }

            function M(e, t) {
                if (e.match(/^(!?=|-)/)) return t.javaScriptLine = !0, "punctuation"
            }

            function C(e) {
                if (e.match(/^#([\w-]+)/)) return G
            }

            function A(e) {
                if (e.match(/^\.([\w-]+)/)) return Z
            }

            function L(e, t) {
                if ("(" == e.peek()) return e.next(), t.isAttrs = !0, t.attrsNest = [], t.inAttributeName = !0, t.attrValue = "", t.attributeIsType = !1, "punctuation"
            }

            function D(t, n) {
                if (n.isAttrs) {
                    if (Y[t.peek()] && n.attrsNest.push(Y[t.peek()]), n.attrsNest[n.attrsNest.length - 1] === t.peek()) n.attrsNest.pop();
                    else if (t.eat(")")) return n.isAttrs = !1, "punctuation";
                    if (n.inAttributeName && t.match(/^[^=,\)!]+/)) return "=" !== t.peek() && "!" !== t.peek() || (n.inAttributeName = !1, n.jsState = e.startState(X), "script" === n.lastTag && "type" === t.current().trim().toLowerCase() ? n.attributeIsType = !0 : n.attributeIsType = !1), "attribute";
                    var r = X.token(t, n.jsState);
                    if (n.attributeIsType && "string" === r && (n.scriptType = t.current().toString()), 0 === n.attrsNest.length && ("string" === r || "variable" === r || "keyword" === r)) try {
                        return Function("", "var x " + n.attrValue.replace(/,\s*$/, "").replace(/^!/, "")), n.inAttributeName = !0, n.attrValue = "", t.backUp(t.current().length), D(t, n)
                    } catch (i) {}
                    return n.attrValue += t.current(), r || !0
                }
            }

            function N(e, t) {
                if (e.match(/^&attributes\b/)) return t.javaScriptArguments = !0, t.javaScriptArgumentsDepth = 0, "keyword"
            }

            function I(e) {
                if (e.sol() && e.eatSpace()) return "indent"
            }

            function j(e, t) {
                if (e.match(/^ *\/\/(-)?([^\n]*)/)) return t.indentOf = e.indentation(), t.indentToken = "comment", "comment"
            }

            function O(e) {
                if (e.match(/^: */)) return "colon"
            }

            function F(e, t) {
                return e.match(/^(?:\| ?| )([^\n]+)/) ? "string" : e.match(/^(<[^\n]*)/, !1) ? (q(e, t, "htmlmixed"), t.innerModeForLine = !0, B(e, t, !0)) : void 0
            }

            function P(e, t) {
                if (e.eat(".")) {
                    var n = null;
                    return "script" === t.lastTag && -1 != t.scriptType.toLowerCase().indexOf("javascript") ? n = t.scriptType.toLowerCase().replace(/"|'/g, "") : "style" === t.lastTag && (n = "css"), q(e, t, n), "dot"
                }
            }

            function R(e) {
                return e.next(), null
            }

            function q(n, r, i) {
                i = e.mimeModes[i] || i, i = t.innerModes && t.innerModes(i) || i, i = e.mimeModes[i] || i, i = e.getMode(t, i), r.indentOf = n.indentation(), i && "null" !== i.name ? r.innerMode = i : r.indentToken = "string"
            }

            function B(t, n, r) {
                if (t.indentation() > n.indentOf || n.innerModeForLine && !t.sol() || r) return n.innerMode ? (n.innerState || (n.innerState = n.innerMode.startState ? e.startState(n.innerMode, t.indentation()) : {}), t.hideFirstChars(n.indentOf + 2, function() {
                    return n.innerMode.token(t, n.innerState) || !0
                })) : (t.skipToEnd(), n.indentToken);
                t.sol() && (n.indentOf = Infinity, n.indentToken = null, n.innerMode = null, n.innerState = null)
            }

            function $(e, t) {
                if (e.sol() && (t.restOfLine = ""), t.restOfLine) {
                    e.skipToEnd();
                    var n = t.restOfLine;
                    return t.restOfLine = "", n
                }
            }

            function U() {
                return new n
            }

            function H(e) {
                return e.copy()
            }

            function V(e, t) {
                var n = B(e, t) || $(e, t) || l(e, t) || b(e, t) || S(e, t) || D(e, t) || r(e, t) || i(e, t) || v(e, t) || o(e) || a(e) || s(e, t) || c(e, t) || u(e, t) || d(e) || f(e, t) || p(e, t) || m(e, t) || h(e, t) || g(e, t) || k(e, t) || y(e, t) || x(e, t) || w(e, t) || E(e, t) || _(e, t) || T(e, t) || z(e, t) || M(e, t) || C(e) || A(e) || L(e, t) || N(e, t) || I(e) || F(e, t) || j(e, t) || O(e) || P(e, t) || R(e);
                return !0 === n ? null : n
            }
            var W = "keyword",
                K = "meta",
                G = "builtin",
                Z = "qualifier",
                Y = {
                    "{": "}",
                    "(": ")",
                    "[": "]"
                },
                X = e.getMode(t, "javascript");
            return n.prototype.copy = function() {
                var t = new n;
                return t.javaScriptLine = this.javaScriptLine, t.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon, t.javaScriptArguments = this.javaScriptArguments, t.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth, t.isInterpolating = this.isInterpolating, t.interpolationNesting = this.interpolationNesting, t.jsState = e.copyState(X, this.jsState), t.innerMode = this.innerMode, this.innerMode && this.innerState && (t.innerState = e.copyState(this.innerMode, this.innerState)), t.restOfLine = this.restOfLine, t.isIncludeFiltered = this.isIncludeFiltered, t.isEach = this.isEach, t.lastTag = this.lastTag, t.scriptType = this.scriptType, t.isAttrs = this.isAttrs, t.attrsNest = this.attrsNest.slice(), t.inAttributeName = this.inAttributeName, t.attributeIsType = this.attributeIsType, t.attrValue = this.attrValue, t.indentOf = this.indentOf, t.indentToken = this.indentToken, t.innerModeForLine = this.innerModeForLine, t
            }, {
                startState: U,
                copyState: H,
                token: V
            }
        }, "javascript", "css", "htmlmixed"), e.defineMIME("text/x-pug", "pug"), e.defineMIME("text/x-jade", "pug")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../ruby/ruby")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../ruby/ruby"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("slim", function(t) {
            function n(e, t, n) {
                var r = function(r, i) {
                    return i.tokenize = t, r.pos < e ? (r.pos = e, n) : i.tokenize(r, i)
                };
                return function(e, n) {
                    return n.tokenize = r, t(e, n)
                }
            }

            function r(e, t, r, i, o) {
                var a = e.current(),
                    s = a.search(r);
                return s > -1 && (t.tokenize = n(e.pos, t.tokenize, o), e.backUp(a.length - s - i)), o
            }

            function i(e, t) {
                e.stack = {
                    parent: e.stack,
                    style: "continuation",
                    indented: t,
                    tokenize: e.line
                }, e.line = e.tokenize
            }

            function o(e) {
                e.line == e.tokenize && (e.line = e.stack.tokenize, e.stack = e.stack.parent)
            }

            function a(e, t) {
                return function(n, r) {
                    if (o(r), n.match(/^\\$/)) return i(r, e), "lineContinuation";
                    var a = t(n, r);
                    return n.eol() && n.current().match(/(?:^|[^\\])(?:\\\\)*\\$/) && n.backUp(1), a
                }
            }

            function s(e, t) {
                return function(n, r) {
                    o(r);
                    var a = t(n, r);
                    return n.eol() && n.current().match(/,$/) && i(r, e), a
                }
            }

            function l(e, t) {
                return function(n, r) {
                    var i;
                    return n.peek() == e && 1 == r.rubyState.tokenize.length ? (n.next(), r.tokenize = t, "closeAttributeTag") : u(n, r)
                }
            }

            function c(t) {
                var n, r = function(e, r) {
                    if (1 == r.rubyState.tokenize.length && !r.rubyState.context.prev) {
                        if (e.backUp(1), e.eatSpace()) return r.rubyState = n, r.tokenize = t, t(e, r);
                        e.next()
                    }
                    return u(e, r)
                };
                return function(t, i) {
                    return n = i.rubyState, i.rubyState = e.startState(R), i.tokenize = r, u(t, i)
                }
            }

            function u(e, t) {
                return R.token(e, t.rubyState)
            }

            function d(e, t) {
                return e.match(/^\\$/) ? "lineContinuation" : f(e, t)
            }

            function f(e, t) {
                return e.match(/^#\{/) ? (t.tokenize = l("}", t.tokenize), null) : r(e, t, /[^\\]#\{/, 1, P.token(e, t.htmlState))
            }

            function p(e) {
                return function(t, n) {
                    var r = d(t, n);
                    return t.eol() && (n.tokenize = e), r
                }
            }

            function m(e, t, n) {
                return t.stack = {
                    parent: t.stack,
                    style: "html",
                    indented: e.column() + n,
                    tokenize: t.line
                }, t.line = t.tokenize = f, null
            }

            function h(e, t) {
                return e.skipToEnd(), t.stack.style
            }

            function g(e, t) {
                return t.stack = {
                    parent: t.stack,
                    style: "comment",
                    indented: t.indented + 1,
                    tokenize: t.line
                }, t.line = h, h(e, t)
            }

            function k(e, t) {
                return e.eat(t.stack.endQuote) ? (t.line = t.stack.line, t.tokenize = t.stack.tokenize, t.stack = t.stack.parent, null) : e.match(Z) ? (t.tokenize = b, "slimAttribute") : (e.next(), null)
            }

            function b(e, t) {
                return e.match(/^==?/) ? (t.tokenize = y, null) : k(e, t)
            }

            function y(e, t) {
                var n = e.peek();
                return '"' == n || "'" == n ? (t.tokenize = O(n, "string", !0, !1, k), e.next(), t.tokenize(e, t)) : "[" == n ? c(k)(e, t) : e.match(/^(true|false|nil)\b/) ? (t.tokenize = k, "keyword") : c(k)(e, t)
            }

            function x(e, t, n) {
                return e.stack = {
                    parent: e.stack,
                    style: "wrapper",
                    indented: e.indented + 1,
                    tokenize: n,
                    line: e.line,
                    endQuote: t
                }, e.line = e.tokenize = k, null
            }

            function v(t, n) {
                if (t.match(/^#\{/)) return n.tokenize = l("}", n.tokenize), null;
                var r = new e.StringStream(t.string.slice(n.stack.indented), t.tabSize);
                r.pos = t.pos - n.stack.indented, r.start = t.start - n.stack.indented, r.lastColumnPos = t.lastColumnPos - n.stack.indented, r.lastColumnValue = t.lastColumnValue - n.stack.indented;
                var i = n.subMode.token(r, n.subState);
                return t.pos = r.pos + n.stack.indented, i
            }

            function w(e, t) {
                return t.stack.indented = e.column(), t.line = t.tokenize = v, t.tokenize(e, t)
            }

            function E(n) {
                var r = B[n],
                    i = e.mimeModes[r];
                if (i) return e.getMode(t, i);
                var o = e.modes[r];
                return o ? o(t, {
                    name: r
                }) : e.getMode(t, "null")
            }

            function S(e) {
                return q.hasOwnProperty(e) ? q[e] : q[e] = E(e)
            }

            function _(t, n) {
                var r = S(t),
                    i = e.startState(r);
                return n.subMode = r, n.subState = i, n.stack = {
                    parent: n.stack,
                    style: "sub",
                    indented: n.indented + 1,
                    tokenize: n.line
                }, n.line = n.tokenize = w, "slimSubmode"
            }

            function T(e, t) {
                return e.skipToEnd(), "slimDoctype"
            }

            function z(e, t) {
                var n;
                if ("<" == e.peek()) return (t.tokenize = p(t.tokenize))(e, t);
                if (e.match(/^[|']/)) return m(e, t, 1);
                if (e.match(/^\/(!|\[\w+])?/)) return g(e, t);
                if (e.match(/^(-|==?[<>]?)/)) return t.tokenize = a(e.column(), s(e.column(), u)), "slimSwitch";
                if (e.match(/^doctype\b/)) return t.tokenize = T, "keyword";
                var r = e.match($);
                return r ? _(r[1], t) : C(e, t)
            }

            function M(e, t) {
                return t.startOfLine ? z(e, t) : C(e, t)
            }

            function C(e, t) {
                return e.eat("*") ? (t.tokenize = c(A), null) : e.match(K) ? (t.tokenize = A, "slimTag") : L(e, t)
            }

            function A(e, t) {
                return e.match(/^(<>?|><?)/) ? (t.tokenize = L, null) : L(e, t)
            }

            function L(e, t) {
                return e.match(X) ? (t.tokenize = L, "slimId") : e.match(Y) ? (t.tokenize = L, "slimClass") : D(e, t)
            }

            function D(e, t) {
                return e.match(/^([\[\{\(])/) ? x(t, H[RegExp.$1], D) : e.match(G) ? (t.tokenize = N, "slimAttribute") : "*" == e.peek() ? (e.next(), t.tokenize = c(F), null) : F(e, t)
            }

            function N(e, t) {
                return e.match(/^==?/) ? (t.tokenize = I, null) : D(e, t)
            }

            function I(e, t) {
                var n = e.peek();
                return '"' == n || "'" == n ? (t.tokenize = O(n, "string", !0, !1, D), e.next(), t.tokenize(e, t)) : "[" == n ? c(D)(e, t) : ":" == n ? c(j)(e, t) : e.match(/^(true|false|nil)\b/) ? (t.tokenize = D, "keyword") : c(D)(e, t)
            }

            function j(e, t) {
                return e.backUp(1), e.match(/^[^\s],(?=:)/) ? (t.tokenize = c(j), null) : (e.next(), D(e, t))
            }

            function O(e, t, n, r, a) {
                return function(s, c) {
                    o(c);
                    var u = 0 == s.current().length;
                    if (s.match(/^\\$/, u)) return u ? (i(c, c.indented), "lineContinuation") : t;
                    if (s.match(/^#\{/, u)) return u ? (c.tokenize = l("}", c.tokenize), null) : t;
                    for (var d = !1, f; null != (f = s.next());) {
                        if (f == e && (r || !d)) {
                            c.tokenize = a;
                            break
                        }
                        if (n && "#" == f && !d && s.eat("{")) {
                            s.backUp(2);
                            break
                        }
                        d = !d && "\\" == f
                    }
                    return s.eol() && d && s.backUp(1), t
                }
            }

            function F(e, t) {
                return e.match(/^==?/) ? (t.tokenize = u, "slimSwitch") : e.match(/^\/$/) ? (t.tokenize = M, null) : e.match(/^:/) ? (t.tokenize = C, "slimSwitch") : (m(e, t, 0), t.tokenize(e, t))
            }
            var P = e.getMode(t, {
                    name: "htmlmixed"
                }),
                R = e.getMode(t, "ruby"),
                q = {
                    html: P,
                    ruby: R
                },
                B = {
                    ruby: "ruby",
                    javascript: "javascript",
                    css: "text/css",
                    sass: "text/x-sass",
                    scss: "text/x-scss",
                    less: "text/x-less",
                    styl: "text/x-styl",
                    coffee: "coffeescript",
                    asciidoc: "text/x-asciidoc",
                    markdown: "text/x-markdown",
                    textile: "text/x-textile",
                    creole: "text/x-creole",
                    wiki: "text/x-wiki",
                    mediawiki: "text/x-mediawiki",
                    rdoc: "text/x-rdoc",
                    builder: "text/x-builder",
                    nokogiri: "text/x-nokogiri",
                    erb: "application/x-erb"
                },
                $ = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return new RegExp("^(" + t.join("|") + "):")
                }(B),
                U = {
                    commentLine: "comment",
                    slimSwitch: "operator special",
                    slimTag: "tag",
                    slimId: "attribute def",
                    slimClass: "attribute qualifier",
                    slimAttribute: "attribute",
                    slimSubmode: "keyword special",
                    closeAttributeTag: null,
                    slimDoctype: null,
                    lineContinuation: null
                },
                H = {
                    "{": "}",
                    "[": "]",
                    "(": ")"
                },
                V = "_a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd",
                W = V + "\\-0-9\xb7\u0300-\u036f\u203f-\u2040",
                K = new RegExp("^[:" + V + "](?::[" + W + "]|[" + W + "]*)"),
                G = new RegExp("^[:" + V + "][:\\." + W + "]*(?=\\s*=)"),
                Z = new RegExp("^[:" + V + "][:\\." + W + "]*"),
                Y = /^\.-?[_a-zA-Z]+[\w\-]*/,
                X = /^#[_a-zA-Z]+[\w\-]*/,
                J = {
                    startState: function() {
                        var t, n;
                        return {
                            htmlState: e.startState(P),
                            rubyState: e.startState(R),
                            stack: null,
                            last: null,
                            tokenize: M,
                            line: M,
                            indented: 0
                        }
                    },
                    copyState: function(t) {
                        return {
                            htmlState: e.copyState(P, t.htmlState),
                            rubyState: e.copyState(R, t.rubyState),
                            subMode: t.subMode,
                            subState: t.subMode && e.copyState(t.subMode, t.subState),
                            stack: t.stack,
                            last: t.last,
                            tokenize: t.tokenize,
                            line: t.line
                        }
                    },
                    token: function(e, t) {
                        if (e.sol())
                            for (t.indented = e.indentation(), t.startOfLine = !0, t.tokenize = t.line; t.stack && t.stack.indented > t.indented && "slimSubmode" != t.last;) t.line = t.tokenize = t.stack.tokenize, t.stack = t.stack.parent, t.subMode = null, t.subState = null;
                        if (e.eatSpace()) return null;
                        var n = t.tokenize(e, t);
                        return t.startOfLine = !1, n && (t.last = n), U.hasOwnProperty(n) ? U[n] : n
                    },
                    blankLine: function(e) {
                        if (e.subMode && e.subMode.blankLine) return e.subMode.blankLine(e.subState)
                    },
                    innerMode: function(e) {
                        return e.subMode ? {
                            state: e.subState,
                            mode: e.subMode
                        } : {
                            state: e,
                            mode: J
                        }
                    }
                };
            return J
        }, "htmlmixed", "ruby"), e.defineMIME("text/x-slim", "slim"), e.defineMIME("application/x-slim", "slim")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n].toLowerCase()] = !0;
            return t
        }

        function n(e, t) {
            for (var n = !1, r; null != (r = e.next());) {
                if (n && "/" == r) {
                    t.tokenize = null;
                    break
                }
                n = "*" == r
            }
            return ["comment", "comment"]
        }
        e.defineMode("css", function(t, n) {
            function r(e, t) {
                return A = t, e
            }

            function i(e, t) {
                var n = e.next();
                if (h[n]) {
                    var i = h[n](e, t);
                    if (!1 !== i) return i
                }
                return "@" == n ? (e.eatWhile(/[\w\\\-]/), r("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? r(null, "compare") : '"' == n || "'" == n ? (t.tokenize = o(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), r("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), r("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? r(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? r("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? r(null, n) : e.match(/[\w-.]+(?=\()/) ? (/^(url(-prefix)?|domain|regexp)$/.test(e.current().toLowerCase()) && (t.tokenize = a), r("variable callee", "variable")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), r("property", "word")) : r(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : e.match(/^-[\w\\\-]*/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? r("variable-2", "variable-definition") : r("variable-2", "variable")) : e.match(/^\w+-/) ? r("meta", "meta") : void 0
            }

            function o(e) {
                return function(t, n) {
                    for (var i = !1, o; null != (o = t.next());) {
                        if (o == e && !i) {
                            ")" == e && t.backUp(1);
                            break
                        }
                        i = !i && "\\" == o
                    }
                    return (o == e || !i && ")" != e) && (n.tokenize = null), r("string", "string")
                }
            }

            function a(e, t) {
                return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = o(")"), r(null, "(")
            }

            function s(e, t, n) {
                this.type = e, this.indent = t, this.prev = n
            }

            function l(e, t, n, r) {
                return e.context = new s(n, t.indentation() + (!1 === r ? 0 : m), e.context), n
            }

            function c(e) {
                return e.context.prev && (e.context = e.context.prev), e.context.type
            }

            function u(e, t, n) {
                return D[n.context.type](e, t, n)
            }

            function d(e, t, n, r) {
                for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
                return u(e, t, n)
            }

            function f(e) {
                var t = e.current().toLowerCase();
                L = _.hasOwnProperty(t) ? "atom" : S.hasOwnProperty(t) ? "keyword" : "variable"
            }
            var p = n.inline;
            n.propertyKeywords || (n = e.resolveMode("text/css"));
            var m = t.indentUnit,
                h = n.tokenHooks,
                g = n.documentTypes || {},
                k = n.mediaTypes || {},
                b = n.mediaFeatures || {},
                y = n.mediaValueKeywords || {},
                x = n.propertyKeywords || {},
                v = n.nonStandardPropertyKeywords || {},
                w = n.fontProperties || {},
                E = n.counterDescriptors || {},
                S = n.colorKeywords || {},
                _ = n.valueKeywords || {},
                T = n.allowNested,
                z = n.lineComment,
                M = !0 === n.supportsAtComponent,
                C = !1 !== t.highlightNonStandardPropertyKeywords,
                A, L, D = {
                    top: function(e, t, n) {
                        if ("{" == e) return l(n, t, "block");
                        if ("}" == e && n.context.prev) return c(n);
                        if (M && /@component/i.test(e)) return l(n, t, "atComponentBlock");
                        if (/^@(-moz-)?document$/i.test(e)) return l(n, t, "documentTypes");
                        if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) return l(n, t, "atBlock");
                        if (/^@(font-face|counter-style)/i.test(e)) return n.stateArg = e, "restricted_atBlock_before";
                        if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) return "keyframes";
                        if (e && "@" == e.charAt(0)) return l(n, t, "at");
                        if ("hash" == e) L = "builtin";
                        else if ("word" == e) L = "tag";
                        else {
                            if ("variable-definition" == e) return "maybeprop";
                            if ("interpolation" == e) return l(n, t, "interpolation");
                            if (":" == e) return "pseudo";
                            if (T && "(" == e) return l(n, t, "parens")
                        }
                        return n.context.type
                    },
                    block: function(e, t, n) {
                        if ("word" == e) {
                            var r = t.current().toLowerCase();
                            return x.hasOwnProperty(r) ? (L = "property", "maybeprop") : v.hasOwnProperty(r) ? (L = C ? "string-2" : "property", "maybeprop") : T ? (L = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (L += " error", "maybeprop")
                        }
                        return "meta" == e ? "block" : T || "hash" != e && "qualifier" != e ? D.top(e, t, n) : (L = "error", "block")
                    },
                    maybeprop: function(e, t, n) {
                        return ":" == e ? l(n, t, "prop") : u(e, t, n)
                    },
                    prop: function(e, t, n) {
                        if (";" == e) return c(n);
                        if ("{" == e && T) return l(n, t, "propBlock");
                        if ("}" == e || "{" == e) return d(e, t, n);
                        if ("(" == e) return l(n, t, "parens");
                        if ("hash" != e || /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())) {
                            if ("word" == e) f(t);
                            else if ("interpolation" == e) return l(n, t, "interpolation")
                        } else L += " error";
                        return "prop"
                    },
                    propBlock: function(e, t, n) {
                        return "}" == e ? c(n) : "word" == e ? (L = "property", "maybeprop") : n.context.type
                    },
                    parens: function(e, t, n) {
                        return "{" == e || "}" == e ? d(e, t, n) : ")" == e ? c(n) : "(" == e ? l(n, t, "parens") : "interpolation" == e ? l(n, t, "interpolation") : ("word" == e && f(t), "parens")
                    },
                    pseudo: function(e, t, n) {
                        return "meta" == e ? "pseudo" : "word" == e ? (L = "variable-3", n.context.type) : u(e, t, n)
                    },
                    documentTypes: function(e, t, n) {
                        return "word" == e && g.hasOwnProperty(t.current()) ? (L = "tag", n.context.type) : D.atBlock(e, t, n)
                    },
                    atBlock: function(e, t, n) {
                        if ("(" == e) return l(n, t, "atBlock_parens");
                        if ("}" == e || ";" == e) return d(e, t, n);
                        if ("{" == e) return c(n) && l(n, t, T ? "block" : "top");
                        if ("interpolation" == e) return l(n, t, "interpolation");
                        if ("word" == e) {
                            var r = t.current().toLowerCase();
                            L = "only" == r || "not" == r || "and" == r || "or" == r ? "keyword" : k.hasOwnProperty(r) ? "attribute" : b.hasOwnProperty(r) ? "property" : y.hasOwnProperty(r) ? "keyword" : x.hasOwnProperty(r) ? "property" : v.hasOwnProperty(r) ? C ? "string-2" : "property" : _.hasOwnProperty(r) ? "atom" : S.hasOwnProperty(r) ? "keyword" : "error"
                        }
                        return n.context.type
                    },
                    atComponentBlock: function(e, t, n) {
                        return "}" == e ? d(e, t, n) : "{" == e ? c(n) && l(n, t, T ? "block" : "top", !1) : ("word" == e && (L = "error"), n.context.type)
                    },
                    atBlock_parens: function(e, t, n) {
                        return ")" == e ? c(n) : "{" == e || "}" == e ? d(e, t, n, 2) : D.atBlock(e, t, n)
                    },
                    restricted_atBlock_before: function(e, t, n) {
                        return "{" == e ? l(n, t, "restricted_atBlock") : "word" == e && "@counter-style" == n.stateArg ? (L = "variable", "restricted_atBlock_before") : u(e, t, n)
                    },
                    restricted_atBlock: function(e, t, n) {
                        return "}" == e ? (n.stateArg = null, c(n)) : "word" == e ? (L = "@font-face" == n.stateArg && !w.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == n.stateArg && !E.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock"
                    },
                    keyframes: function(e, t, n) {
                        return "word" == e ? (L = "variable", "keyframes") : "{" == e ? l(n, t, "top") : u(e, t, n)
                    },
                    at: function(e, t, n) {
                        return ";" == e ? c(n) : "{" == e || "}" == e ? d(e, t, n) : ("word" == e ? L = "tag" : "hash" == e && (L = "builtin"), "at")
                    },
                    interpolation: function(e, t, n) {
                        return "}" == e ? c(n) : "{" == e || ";" == e ? d(e, t, n) : ("word" == e ? L = "variable" : "variable" != e && "(" != e && ")" != e && (L = "error"), "interpolation")
                    }
                };
            return {
                startState: function(e) {
                    return {
                        tokenize: null,
                        state: p ? "block" : "top",
                        stateArg: null,
                        context: new s(p ? "block" : "top", e || 0, null)
                    }
                },
                token: function(e, t) {
                    if (!t.tokenize && e.eatSpace()) return null;
                    var n = (t.tokenize || i)(e, t);
                    return n && "object" == typeof n && (A = n[1], n = n[0]), L = n, "comment" != A && (t.state = D[t.state](A, e, t)), L
                },
                indent: function(e, t) {
                    var n = e.context,
                        r = t && t.charAt(0),
                        i = n.indent;
                    return "prop" != n.type || "}" != r && ")" != r || (n = n.prev), n.prev && ("}" != r || "block" != n.type && "top" != n.type && "interpolation" != n.type && "restricted_atBlock" != n.type ? (")" != r || "parens" != n.type && "atBlock_parens" != n.type) && ("{" != r || "at" != n.type && "atBlock" != n.type) || (i = Math.max(0, n.indent - m)) : i = (n = n.prev).indent), i
                },
                electricChars: "}",
                blockCommentStart: "/*",
                blockCommentEnd: "*/",
                blockCommentContinue: " * ",
                lineComment: z,
                fold: "brace"
            }
        });
        var r = ["domain", "regexp", "url", "url-prefix"],
            i = t(r),
            o = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
            a = t(o),
            s = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid", "orientation", "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio", "pointer", "any-pointer", "hover", "any-hover", "prefers-color-scheme"],
            l = t(s),
            c = ["landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover", "interlace", "progressive", "dark", "light"],
            u = t(c),
            d = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "all", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backdrop-filter", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "block-size", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-optical-sizing", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "isolation", "justify-content", "justify-items", "justify-self", "left", "letter-spacing", "line-break", "line-height", "line-height-step", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "place-content", "place-items", "place-self", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotate", "rotation", "rotation-point", "row-gap", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-type", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-skip-ink", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-orientation", "text-outline", "text-overflow", "text-rendering", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "translate", "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "margin-block", "margin-block-end", "margin-block-start", "margin-inline", "margin-inline-end", "margin-inline-start", "padding-block", "padding-block-end", "padding-block-start", "padding-inline", "padding-inline-end", "padding-inline-start", "scroll-snap-stop", "scrollbar-3d-light-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "shape-inside", "zoom"],
            f = t(d),
            p = [],
            m = t(p),
            h, g = t(["font-display", "font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"]),
            k, b = t(["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"]),
            y = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
            x = t(y),
            v = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page", "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "dense", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "difference", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "manipulation", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "pinch-zoom", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running", "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub", "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "transform", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor", "xx-large", "xx-small"],
            w = t(v),
            E = r.concat(o).concat(s).concat(c).concat(d).concat(p).concat(y).concat(v);
        e.registerHelper("hintWords", "css", E), e.defineMIME("text/css", {
            documentTypes: i,
            mediaTypes: a,
            mediaFeatures: l,
            mediaValueKeywords: u,
            propertyKeywords: f,
            nonStandardPropertyKeywords: m,
            fontProperties: g,
            counterDescriptors: b,
            colorKeywords: x,
            valueKeywords: w,
            tokenHooks: {
                "/": function(e, t) {
                    return !!e.eat("*") && (t.tokenize = n, n(e, t))
                }
            },
            name: "css"
        }), e.defineMIME("text/x-scss", {
            mediaTypes: a,
            mediaFeatures: l,
            mediaValueKeywords: u,
            propertyKeywords: f,
            nonStandardPropertyKeywords: m,
            colorKeywords: x,
            valueKeywords: w,
            fontProperties: g,
            allowNested: !0,
            lineComment: "//",
            tokenHooks: {
                "/": function(e, t) {
                    return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
                },
                ":": function(e) {
                    return !!e.match(/\s*\{/, !1) && [null, null]
                },
                $: function(e) {
                    return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
                },
                "#": function(e) {
                    return !!e.eat("{") && [null, "interpolation"]
                }
            },
            name: "css",
            helperType: "scss"
        }), e.defineMIME("text/x-less", {
            mediaTypes: a,
            mediaFeatures: l,
            mediaValueKeywords: u,
            propertyKeywords: f,
            nonStandardPropertyKeywords: m,
            colorKeywords: x,
            valueKeywords: w,
            fontProperties: g,
            allowNested: !0,
            lineComment: "//",
            tokenHooks: {
                "/": function(e, t) {
                    return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = n, n(e, t)) : ["operator", "operator"]
                },
                "@": function(e) {
                    return e.eat("{") ? [null, "interpolation"] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
                },
                "&": function() {
                    return ["atom", "atom"]
                }
            },
            name: "css",
            helperType: "less"
        }), e.defineMIME("text/x-gss", {
            documentTypes: i,
            mediaTypes: a,
            mediaFeatures: l,
            propertyKeywords: f,
            nonStandardPropertyKeywords: m,
            fontProperties: g,
            counterDescriptors: b,
            colorKeywords: x,
            valueKeywords: w,
            supportsAtComponent: !0,
            tokenHooks: {
                "/": function(e, t) {
                    return !!e.eat("*") && (t.tokenize = n, n(e, t))
                }
            },
            name: "css",
            helperType: "gss"
        })
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../css/css"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("sass", function(t) {
            function n(e) {
                return new RegExp("^" + e.join("|"))
            }

            function r(e) {
                return !e.peek() || e.match(/\s+$/, !1)
            }

            function i(e, t) {
                var n = e.peek();
                return ")" === n ? (e.next(), t.tokenizer = u, "operator") : "(" === n ? (e.next(), e.eatSpace(), "operator") : "'" === n || '"' === n ? (t.tokenizer = a(e.next()), "string") : (t.tokenizer = a(")", !1), "string")
            }

            function o(e, t) {
                return function(n, r) {
                    return n.sol() && n.indentation() <= e ? (r.tokenizer = u, u(n, r)) : (t && n.skipTo("*/") ? (n.next(), n.next(), r.tokenizer = u) : n.skipToEnd(), "comment")
                }
            }

            function a(e, t) {
                function n(i, o) {
                    var a = i.next(),
                        l = i.peek(),
                        c = i.string.charAt(i.pos - 2),
                        d;
                    return "\\" !== a && l === e || a === e && "\\" !== c ? (a !== e && t && i.next(), r(i) && (o.cursorHalf = 0), o.tokenizer = u, "string") : "#" === a && "{" === l ? (o.tokenizer = s(n), i.next(), "operator") : "string"
                }
                return null == t && (t = !0), n
            }

            function s(e) {
                return function(t, n) {
                    return "}" === t.peek() ? (t.next(), n.tokenizer = e, "operator") : u(t, n)
                }
            }

            function l(e) {
                if (0 == e.indentCount) {
                    e.indentCount++;
                    var n, r = e.scopes[0].offset + t.indentUnit;
                    e.scopes.unshift({
                        offset: r
                    })
                }
            }

            function c(e) {
                1 != e.scopes.length && e.scopes.shift()
            }

            function u(e, t) {
                var n = e.peek();
                if (e.match("/*")) return t.tokenizer = o(e.indentation(), !0), t.tokenizer(e, t);
                if (e.match("//")) return t.tokenizer = o(e.indentation(), !1), t.tokenizer(e, t);
                if (e.match("#{")) return t.tokenizer = s(u), "operator";
                if ('"' === n || "'" === n) return e.next(), t.tokenizer = a(n), "string";
                if (t.cursorHalf) {
                    if ("#" === n && (e.next(), e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))) return r(e) && (t.cursorHalf = 0), "number";
                    if (e.match(/^-?[0-9\.]+/)) return r(e) && (t.cursorHalf = 0), "number";
                    if (e.match(/^(px|em|in)\b/)) return r(e) && (t.cursorHalf = 0), "unit";
                    if (e.match(b)) return r(e) && (t.cursorHalf = 0), "keyword";
                    if (e.match(/^url/) && "(" === e.peek()) return t.tokenizer = i, r(e) && (t.cursorHalf = 0), "atom";
                    if ("$" === n) return e.next(), e.eatWhile(/[\w-]/), r(e) && (t.cursorHalf = 0), "variable-2";
                    if ("!" === n) return e.next(), t.cursorHalf = 0, e.match(/^[\w]+/) ? "keyword" : "operator";
                    if (e.match(x)) return r(e) && (t.cursorHalf = 0), "operator";
                    if (e.eatWhile(/[\w-]/)) return r(e) && (t.cursorHalf = 0), w = e.current().toLowerCase(), h.hasOwnProperty(w) ? "atom" : m.hasOwnProperty(w) ? "keyword" : p.hasOwnProperty(w) ? (t.prevProp = e.current().toLowerCase(), "property") : "tag";
                    if (r(e)) return t.cursorHalf = 0, null
                } else {
                    if ("-" === n && e.match(/^-\w+-/)) return "meta";
                    if ("." === n) {
                        if (e.next(), e.match(/^[\w-]+/)) return l(t), "qualifier";
                        if ("#" === e.peek()) return l(t), "tag"
                    }
                    if ("#" === n) {
                        if (e.next(), e.match(/^[\w-]+/)) return l(t), "builtin";
                        if ("#" === e.peek()) return l(t), "tag"
                    }
                    if ("$" === n) return e.next(), e.eatWhile(/[\w-]/), "variable-2";
                    if (e.match(/^-?[0-9\.]+/)) return "number";
                    if (e.match(/^(px|em|in)\b/)) return "unit";
                    if (e.match(b)) return "keyword";
                    if (e.match(/^url/) && "(" === e.peek()) return t.tokenizer = i, "atom";
                    if ("=" === n && e.match(/^=[\w-]+/)) return l(t), "meta";
                    if ("+" === n && e.match(/^\+[\w-]+/)) return "variable-3";
                    if ("@" === n && e.match(/@extend/) && (e.match(/\s*[\w]/) || c(t)), e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)) return l(t), "def";
                    if ("@" === n) return e.next(), e.eatWhile(/[\w-]/), "def";
                    if (e.eatWhile(/[\w-]/)) {
                        if (e.match(/ *: *[\w-\+\$#!\("']/, !1)) {
                            w = e.current().toLowerCase();
                            var d = t.prevProp + "-" + w;
                            return p.hasOwnProperty(d) ? "property" : p.hasOwnProperty(w) ? (t.prevProp = w, "property") : g.hasOwnProperty(w) ? "property" : "tag"
                        }
                        return e.match(/ *:/, !1) ? (l(t), t.cursorHalf = 1, t.prevProp = e.current().toLowerCase(), "property") : e.match(/ *,/, !1) ? "tag" : (l(t), "tag")
                    }
                    if (":" === n) return e.match(v) ? "variable-3" : (e.next(), t.cursorHalf = 1, "operator")
                }
                return e.match(x) ? "operator" : (e.next(), null)
            }

            function d(e, n) {
                e.sol() && (n.indentCount = 0);
                var r = n.tokenizer(e, n),
                    i = e.current();
                if ("@return" !== i && "}" !== i || c(n), null !== r) {
                    for (var o, a = e.pos - i.length + t.indentUnit * n.indentCount, s = [], l = 0; l < n.scopes.length; l++) {
                        var u = n.scopes[l];
                        u.offset <= a && s.push(u)
                    }
                    n.scopes = s
                }
                return r
            }
            var f = e.mimeModes["text/css"],
                p = f.propertyKeywords || {},
                m = f.colorKeywords || {},
                h = f.valueKeywords || {},
                g = f.fontProperties || {},
                k, b = new RegExp("^" + ["true", "false", "null", "auto"].join("|")),
                y, x = n(["\\(", "\\)", "=", ">", "<", "==", ">=", "<=", "\\+", "-", "\\!=", "/", "\\*", "%", "and", "or", "not", ";", "\\{", "\\}", ":"]),
                v = /^::?[a-zA-Z_][\w\-]*/,
                w;
            return {
                startState: function() {
                    return {
                        tokenizer: u,
                        scopes: [{
                            offset: 0,
                            type: "sass"
                        }],
                        indentCount: 0,
                        cursorHalf: 0,
                        definedVars: [],
                        definedMixins: []
                    }
                },
                token: function(e, t) {
                    var n = d(e, t);
                    return t.lastToken = {
                        style: n,
                        content: e.current()
                    }, n
                },
                indent: function(e) {
                    return e.scopes[0].offset
                },
                blockCommentStart: "/*",
                blockCommentEnd: "*/",
                lineComment: "//",
                fold: "indent"
            }
        }, "css"), e.defineMIME("text/x-sass", "sass")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e) {
            return e = e.sort(function(e, t) {
                return t > e
            }), new RegExp("^((" + e.join(")|(") + "))\\b")
        }

        function n(e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = !0;
            return t
        }

        function r(e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }
        e.defineMode("stylus", function(e) {
            function g(e, t) {
                if (ee = e.string.match(/(^[\w-]+\s*=\s*$)|(^\s*[\w-]+\s*=\s*[\w-])|(^\s*(\.|#|@|\$|\&|\[|\d|\+|::?|\{|\>|~|\/)?\s*[\w-]*([a-z0-9-]|\*|\/\*)(\(|,)?)/), t.context.line.firstWord = ee ? ee[0].replace(/^\s*/, "") : "", t.context.line.indent = e.indentation(), ne = e.peek(), e.match("//")) return e.skipToEnd(), ["comment", "comment"];
                if (e.match("/*")) return t.tokenize = k, k(e, t);
                if ('"' == ne || "'" == ne) return e.next(), t.tokenize = b(ne), t.tokenize(e, t);
                if ("@" == ne) return e.next(), e.eatWhile(/[\w\\-]/), ["def", e.current()];
                if ("#" == ne) {
                    if (e.next(), e.match(/^[0-9a-f]{3}([0-9a-f]([0-9a-f]{2}){0,2})?\b(?!-)/i)) return ["atom", "atom"];
                    if (e.match(/^[a-z][\w-]*/i)) return ["builtin", "hash"]
                }
                return e.match(J) ? ["meta", "vendor-prefixes"] : e.match(/^-?[0-9]?\.?[0-9]/) ? (e.eatWhile(/[a-z%]/i), ["number", "unit"]) : "!" == ne ? (e.next(), [e.match(/^(important|optional)/i) ? "keyword" : "operator", "important"]) : "." == ne && e.match(/^\.[a-z][\w-]*/i) ? ["qualifier", "qualifier"] : e.match(V) ? ("(" == e.peek() && (t.tokenize = y), ["property", "word"]) : e.match(/^[a-z][\w-]*\(/i) ? (e.backUp(1), ["keyword", "mixin"]) : e.match(/^(\+|-)[a-z][\w-]*\(/i) ? (e.backUp(1), ["keyword", "block-mixin"]) : e.string.match(/^\s*&/) && e.match(/^[-_]+[a-z][\w-]*/) ? ["qualifier", "qualifier"] : e.match(/^(\/|&)(-|_|:|\.|#|[a-z])/) ? (e.backUp(1), ["variable-3", "reference"]) : e.match(/^&{1}\s*$/) ? ["variable-3", "reference"] : e.match(Y) ? ["operator", "operator"] : e.match(/^\$?[-_]*[a-z0-9]+[\w-]*/i) ? e.match(/^(\.|\[)[\w-\'\"\]]+/i, !1) && !_(e.current()) ? (e.match(/\./), ["variable-2", "variable-name"]) : ["variable-2", "word"] : e.match(Z) ? ["operator", e.current()] : /[:;,{}\[\]\(\)]/.test(ne) ? (e.next(), [null, ne]) : (e.next(), [null, null])
            }

            function k(e, t) {
                for (var n = !1, r; null != (r = e.next());) {
                    if (n && "/" == r) {
                        t.tokenize = null;
                        break
                    }
                    n = "*" == r
                }
                return ["comment", "comment"]
            }

            function b(e) {
                return function(t, n) {
                    for (var r = !1, i; null != (i = t.next());) {
                        if (i == e && !r) {
                            ")" == e && t.backUp(1);
                            break
                        }
                        r = !r && "\\" == i
                    }
                    return (i == e || !r && ")" != e) && (n.tokenize = null), ["string", "string"]
                }
            }

            function y(e, t) {
                return e.next(), e.match(/\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = b(")"), [null, "("]
            }

            function x(e, t, n, r) {
                this.type = e, this.indent = t, this.prev = n, this.line = r || {
                    firstWord: "",
                    indent: 0
                }
            }

            function v(e, t, n, r) {
                return r = r >= 0 ? r : O, e.context = new x(n, t.indentation() + r, e.context), n
            }

            function w(e, t) {
                var n = e.context.indent - O;
                return t = t || !1, e.context = e.context.prev, t && (e.context.indent = n), e.context.type
            }

            function E(e, t, n) {
                return te[n.context.type](e, t, n)
            }

            function S(e, t, n, r) {
                for (var i = r || 1; i > 0; i--) n.context = n.context.prev;
                return E(e, t, n)
            }

            function _(e) {
                return e.toLowerCase() in P
            }

            function T(e) {
                return (e = e.toLowerCase()) in q || e in G
            }

            function z(e) {
                return e.toLowerCase() in X
            }

            function M(e) {
                return e.toLowerCase().match(J)
            }

            function C(e) {
                var t = e.toLowerCase(),
                    n = "variable-2";
                return _(e) ? n = "tag" : z(e) ? n = "block-keyword" : T(e) ? n = "property" : t in $ || t in Q ? n = "atom" : "return" == t || t in U ? n = "keyword" : e.match(/^[A-Z]/) && (n = "string"), n
            }

            function A(e, t) {
                return I(t) && ("{" == e || "]" == e || "hash" == e || "qualifier" == e) || "block-mixin" == e
            }

            function L(e, t) {
                return "{" == e && t.match(/^\s*\$?[\w-]+/i, !1)
            }

            function D(e, t) {
                return ":" == e && t.match(/^[a-z-]+/, !1)
            }

            function N(e) {
                return e.sol() || e.string.match(new RegExp("^\\s*" + r(e.current())))
            }

            function I(e) {
                return e.eol() || e.match(/^\s*$/, !1)
            }

            function j(e) {
                var t = /^\s*[-_]*[a-z0-9]+[\w-]*/i,
                    n = "string" == typeof e ? e.match(t) : e.string.match(t);
                return n ? n[0].replace(/^\s*/, "") : ""
            }
            for (var O = e.indentUnit, F = "", P = n(i), R = /^(a|b|i|s|col|em)$/i, q = n(l), B = n(c), $ = n(f), U = n(d), H = n(o), V = t(o), W = n(s), K = n(a), G = n(u), Z = /^\s*([.]{2,3}|&&|\|\||\*\*|[?!=:]?=|[-+*\/%<>]=?|\?:|\~)/, Y = t(p), X = n(m), J = new RegExp(/^\-(moz|ms|o|webkit)-/i), Q = n(h), ee = "", te = {}, ne, re, ie, oe; F.length < O;) F += " ";
            return te.block = function(e, t, n) {
                if ("comment" == e && N(t) || "," == e && I(t) || "mixin" == e) return v(n, t, "block", 0);
                if (L(e, t)) return v(n, t, "interpolation");
                if (I(t) && "]" == e && !/^\s*(\.|#|:|\[|\*|&)/.test(t.string) && !_(j(t))) return v(n, t, "block", 0);
                if (A(e, t)) return v(n, t, "block");
                if ("}" == e && I(t)) return v(n, t, "block", 0);
                if ("variable-name" == e) return t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/) || z(j(t)) ? v(n, t, "variableName") : v(n, t, "variableName", 0);
                if ("=" == e) return I(t) || z(j(t)) ? v(n, t, "block") : v(n, t, "block", 0);
                if ("*" == e && (I(t) || t.match(/\s*(,|\.|#|\[|:|{)/, !1))) return oe = "tag", v(n, t, "block");
                if (D(e, t)) return v(n, t, "pseudo");
                if (/@(font-face|media|supports|(-moz-)?document)/.test(e)) return v(n, t, I(t) ? "block" : "atBlock");
                if (/@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return v(n, t, "keyframes");
                if (/@extends?/.test(e)) return v(n, t, "extend", 0);
                if (e && "@" == e.charAt(0)) return t.indentation() > 0 && T(t.current().slice(1)) ? (oe = "variable-2", "block") : /(@import|@require|@charset)/.test(e) ? v(n, t, "block", 0) : v(n, t, "block");
                if ("reference" == e && I(t)) return v(n, t, "block");
                if ("(" == e) return v(n, t, "parens");
                if ("vendor-prefixes" == e) return v(n, t, "vendorPrefixes");
                if ("word" == e) {
                    var r = t.current();
                    if ("property" == (oe = C(r))) return N(t) ? v(n, t, "block", 0) : (oe = "atom", "block");
                    if ("tag" == oe) {
                        if (/embed|menu|pre|progress|sub|table/.test(r) && T(j(t))) return oe = "atom", "block";
                        if (t.string.match(new RegExp("\\[\\s*" + r + "|" + r + "\\s*\\]"))) return oe = "atom", "block";
                        if (R.test(r) && (N(t) && t.string.match(/=/) || !N(t) && !t.string.match(/^(\s*\.|#|\&|\[|\/|>|\*)/) && !_(j(t)))) return oe = "variable-2", z(j(t)) ? "block" : v(n, t, "block", 0);
                        if (I(t)) return v(n, t, "block")
                    }
                    if ("block-keyword" == oe) return oe = "keyword", t.current(/(if|unless)/) && !N(t) ? "block" : v(n, t, "block");
                    if ("return" == r) return v(n, t, "block", 0);
                    if ("variable-2" == oe && t.string.match(/^\s?\$[\w-\.\[\]\'\"]+$/)) return v(n, t, "block")
                }
                return n.context.type
            }, te.parens = function(e, t, n) {
                if ("(" == e) return v(n, t, "parens");
                if (")" == e) return "parens" == n.context.prev.type ? w(n) : t.string.match(/^[a-z][\w-]*\(/i) && I(t) || z(j(t)) || /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(j(t)) || !t.string.match(/^-?[a-z][\w-\.\[\]\'\"]*\s*=/) && _(j(t)) ? v(n, t, "block") : t.string.match(/^[\$-]?[a-z][\w-\.\[\]\'\"]*\s*=/) || t.string.match(/^\s*(\(|\)|[0-9])/) || t.string.match(/^\s+[a-z][\w-]*\(/i) || t.string.match(/^\s+[\$-]?[a-z]/i) ? v(n, t, "block", 0) : I(t) ? v(n, t, "block") : v(n, t, "block", 0);
                if (e && "@" == e.charAt(0) && T(t.current().slice(1)) && (oe = "variable-2"), "word" == e) {
                    var r = t.current();
                    "tag" == (oe = C(r)) && R.test(r) && (oe = "variable-2"), "property" != oe && "to" != r || (oe = "atom")
                }
                return "variable-name" == e ? v(n, t, "variableName") : D(e, t) ? v(n, t, "pseudo") : n.context.type
            }, te.vendorPrefixes = function(e, t, n) {
                return "word" == e ? (oe = "property", v(n, t, "block", 0)) : w(n)
            }, te.pseudo = function(e, t, n) {
                return T(j(t.string)) ? S(e, t, n) : (t.match(/^[a-z-]+/), oe = "variable-3", I(t) ? v(n, t, "block") : w(n))
            }, te.atBlock = function(e, t, n) {
                if ("(" == e) return v(n, t, "atBlock_parens");
                if (A(e, t)) return v(n, t, "block");
                if (L(e, t)) return v(n, t, "interpolation");
                if ("word" == e) {
                    var r = t.current().toLowerCase();
                    if ("tag" == (oe = /^(only|not|and|or)$/.test(r) ? "keyword" : H.hasOwnProperty(r) ? "tag" : K.hasOwnProperty(r) ? "attribute" : W.hasOwnProperty(r) ? "property" : B.hasOwnProperty(r) ? "string-2" : C(t.current())) && I(t)) return v(n, t, "block")
                }
                return "operator" == e && /^(not|and|or)$/.test(t.current()) && (oe = "keyword"), n.context.type
            }, te.atBlock_parens = function(e, t, n) {
                if ("{" == e || "}" == e) return n.context.type;
                if (")" == e) return I(t) ? v(n, t, "block") : v(n, t, "atBlock");
                if ("word" == e) {
                    var r = t.current().toLowerCase();
                    return oe = C(r), /^(max|min)/.test(r) && (oe = "property"), "tag" == oe && (oe = R.test(r) ? "variable-2" : "atom"), n.context.type
                }
                return te.atBlock(e, t, n)
            }, te.keyframes = function(e, t, n) {
                return "0" == t.indentation() && ("}" == e && N(t) || "]" == e || "hash" == e || "qualifier" == e || _(t.current())) ? S(e, t, n) : "{" == e ? v(n, t, "keyframes") : "}" == e ? N(t) ? w(n, !0) : v(n, t, "keyframes") : "unit" == e && /^[0-9]+\%$/.test(t.current()) ? v(n, t, "keyframes") : "word" == e && "block-keyword" == (oe = C(t.current())) ? (oe = "keyword", v(n, t, "keyframes")) : /@(font-face|media|supports|(-moz-)?document)/.test(e) ? v(n, t, I(t) ? "block" : "atBlock") : "mixin" == e ? v(n, t, "block", 0) : n.context.type
            }, te.interpolation = function(e, t, n) {
                return "{" == e && w(n) && v(n, t, "block"), "}" == e ? t.string.match(/^\s*(\.|#|:|\[|\*|&|>|~|\+|\/)/i) || t.string.match(/^\s*[a-z]/i) && _(j(t)) ? v(n, t, "block") : !t.string.match(/^(\{|\s*\&)/) || t.match(/\s*[\w-]/, !1) ? v(n, t, "block", 0) : v(n, t, "block") : "variable-name" == e ? v(n, t, "variableName", 0) : ("word" == e && "tag" == (oe = C(t.current())) && (oe = "atom"), n.context.type)
            }, te.extend = function(e, t, n) {
                return "[" == e || "=" == e ? "extend" : "]" == e ? w(n) : "word" == e ? (oe = C(t.current()), "extend") : w(n)
            }, te.variableName = function(e, t, n) {
                return "string" == e || "[" == e || "]" == e || t.current().match(/^(\.|\$)/) ? (t.current().match(/^\.[\w-]+/i) && (oe = "variable-2"), "variableName") : S(e, t, n)
            }, {
                startState: function(e) {
                    return {
                        tokenize: null,
                        state: "block",
                        context: new x("block", e || 0, null)
                    }
                },
                token: function(e, t) {
                    return !t.tokenize && e.eatSpace() ? null : ((re = (t.tokenize || g)(e, t)) && "object" == typeof re && (ie = re[1], re = re[0]), oe = re, t.state = te[t.state](ie, e, t), oe)
                },
                indent: function(e, t, n) {
                    var r = e.context,
                        i = t && t.charAt(0),
                        o = r.indent,
                        a = j(t),
                        s = n.match(/^\s*/)[0].replace(/\t/g, F).length,
                        l = e.context.prev ? e.context.prev.line.firstWord : "",
                        c = e.context.prev ? e.context.prev.line.indent : s;
                    return r.prev && ("}" == i && ("block" == r.type || "atBlock" == r.type || "keyframes" == r.type) || ")" == i && ("parens" == r.type || "atBlock_parens" == r.type) || "{" == i && "at" == r.type) ? o = r.indent - O : /(\})/.test(i) || (/@|\$|\d/.test(i) || /^\{/.test(t) || /^\s*\/(\/|\*)/.test(t) || /^\s*\/\*/.test(l) || /^\s*[\w-\.\[\]\'\"]+\s*(\?|:|\+)?=/i.test(t) || /^(\+|-)?[a-z][\w-]*\(/i.test(t) || /^return/.test(t) || z(a) ? o = s : /(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(i) || _(a) ? o = /\,\s*$/.test(l) ? c : /^\s+/.test(n) && (/(\.|#|:|\[|\*|&|>|~|\+|\/)/.test(l) || _(l)) ? s <= c ? c : c + O : s : /,\s*$/.test(n) || !M(a) && !T(a) || (o = z(l) ? s <= c ? c : c + O : /^\{/.test(l) ? s <= c ? s : c + O : M(l) || T(l) ? s >= c ? c : s : /^(\.|#|:|\[|\*|&|@|\+|\-|>|~|\/)/.test(l) || /=\s*$/.test(l) || _(l) || /^\$[\w-\.\[\]\'\"]/.test(l) ? c + O : s)), o
                },
                electricChars: "}",
                lineComment: "//",
                fold: "indent"
            }
        });
        var i = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "bgsound", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "nobr", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "var", "video"],
            o = ["domain", "regexp", "url-prefix", "url"],
            a = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
            s = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid"],
            l = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode", "font-smoothing", "osx-font-smoothing"],
            c = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
            u = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
            d = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
            f = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "column", "compact", "condensed", "contain", "content", "contents", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "x-large", "x-small", "xor", "xx-large", "xx-small", "bicubic", "optimizespeed", "grayscale", "row", "row-reverse", "wrap", "wrap-reverse", "column-reverse", "flex-start", "flex-end", "space-between", "space-around", "unset"],
            p = ["in", "and", "or", "not", "is not", "is a", "is", "isnt", "defined", "if unless"],
            m = ["for", "if", "else", "unless", "from", "to"],
            h = ["null", "true", "false", "href", "title", "type", "not-allowed", "readonly", "disabled"],
            g = ["@font-face", "@keyframes", "@media", "@viewport", "@page", "@host", "@supports", "@block", "@css"],
            k = i.concat(o, a, s, l, c, d, f, u, p, m, h, g);
        e.registerHelper("hintWords", "stylus", k), e.defineMIME("text/x-styl", "stylus")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("javascript", function(t, n) {
            function r(e) {
                for (var t = !1, n, r = !1; null != (n = e.next());) {
                    if (!t) {
                        if ("/" == n && !r) return;
                        "[" == n ? r = !0 : r && "]" == n && (r = !1)
                    }
                    t = !t && "\\" == n
                }
            }

            function i(e, t, n) {
                return Ze = e, Ye = n, t
            }

            function o(e, t) {
                var n = e.next();
                if ('"' == n || "'" == n) return t.tokenize = a(n), t.tokenize(e, t);
                if ("." == n && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return i("number", "number");
                if ("." == n && e.match("..")) return i("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(n)) return i(n);
                if ("=" == n && e.eat(">")) return i("=>", "operator");
                if ("0" == n && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return i("number", "number");
                if (/\d/.test(n)) return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), i("number", "number");
                if ("/" == n) return e.eat("*") ? (t.tokenize = s, s(e, t)) : e.eat("/") ? (e.skipToEnd(), i("comment", "comment")) : Re(e, t, 1) ? (r(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), i("regexp", "string-2")) : (e.eat("="), i("operator", "operator", e.current()));
                if ("`" == n) return t.tokenize = l, l(e, t);
                if ("#" == n && "!" == e.peek()) return e.skipToEnd(), i("meta", "meta");
                if ("#" == n && e.eatWhile(Ve)) return i("variable", "property");
                if ("<" == n && e.match("!--") || "-" == n && e.match("->") && !/\S/.test(e.string.slice(0, e.start))) return e.skipToEnd(), i("comment", "comment");
                if (Ke.test(n)) return ">" == n && t.lexical && ">" == t.lexical.type || (e.eat("=") ? "!" != n && "=" != n || e.eat("=") : /[<>*+\-|&?]/.test(n) && (e.eat(n), ">" == n && e.eat(n))), "?" == n && e.eat(".") ? i(".") : i("operator", "operator", e.current());
                if (Ve.test(n)) {
                    e.eatWhile(Ve);
                    var o = e.current();
                    if ("." != t.lastType) {
                        if (We.propertyIsEnumerable(o)) {
                            var c = We[o];
                            return i(c.type, c.style, o)
                        }
                        if ("async" == o && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)) return i("async", "keyword", o)
                    }
                    return i("variable", "variable", o)
                }
            }

            function a(e) {
                return function(t, n) {
                    var r = !1,
                        a;
                    if ($e && "@" == t.peek() && t.match(Ge)) return n.tokenize = o, i("jsonld-keyword", "meta");
                    for (; null != (a = t.next()) && (a != e || r);) r = !r && "\\" == a;
                    return r || (n.tokenize = o), i("string", "string")
                }
            }

            function s(e, t) {
                for (var n = !1, r; r = e.next();) {
                    if ("/" == r && n) {
                        t.tokenize = o;
                        break
                    }
                    n = "*" == r
                }
                return i("comment", "comment")
            }

            function l(e, t) {
                for (var n = !1, r; null != (r = e.next());) {
                    if (!n && ("`" == r || "$" == r && e.eat("{"))) {
                        t.tokenize = o;
                        break
                    }
                    n = !n && "\\" == r
                }
                return i("quasi", "string-2", e.current())
            }

            function c(e, t) {
                t.fatArrowAt && (t.fatArrowAt = null);
                var n = e.string.indexOf("=>", e.start);
                if (!(n < 0)) {
                    if (He) {
                        var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                        r && (n = r.index)
                    }
                    for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                        var s = e.string.charAt(a),
                            l = Xe.indexOf(s);
                        if (l >= 0 && l < 3) {
                            if (!i) {
                                ++a;
                                break
                            }
                            if (0 == --i) {
                                "(" == s && (o = !0);
                                break
                            }
                        } else if (l >= 3 && l < 6) ++i;
                        else if (Ve.test(s)) o = !0;
                        else if (/["'\/`]/.test(s))
                            for (;; --a) {
                                if (0 == a) return;
                                var c;
                                if (e.string.charAt(a - 1) == s && "\\" != e.string.charAt(a - 2)) {
                                    a--;
                                    break
                                }
                            } else if (o && !i) {
                                ++a;
                                break
                            }
                    }
                    o && !i && (t.fatArrowAt = a)
                }
            }

            function u(e, t, n, r, i, o) {
                this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = o, null != r && (this.align = r)
            }

            function d(e, t) {
                for (var n = e.localVars; n; n = n.next)
                    if (n.name == t) return !0;
                for (var r = e.context; r; r = r.prev)
                    for (var n = r.vars; n; n = n.next)
                        if (n.name == t) return !0
            }

            function f(e, t, n, r, i) {
                var o = e.cc;
                for (Qe.state = e, Qe.stream = i, Qe.marked = null, Qe.cc = o, Qe.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;) {
                    var a;
                    if ((o.length ? o.pop() : Ue ? C : z)(n, r)) {
                        for (; o.length && o[o.length - 1].lex;) o.pop()();
                        return Qe.marked ? Qe.marked : "variable" == n && d(e, r) ? "variable-2" : t
                    }
                }
            }

            function p() {
                for (var e = arguments.length - 1; e >= 0; e--) Qe.cc.push(arguments[e])
            }

            function m() {
                return p.apply(null, arguments), !0
            }

            function h(e, t) {
                for (var n = t; n; n = n.next)
                    if (n.name == e) return !0;
                return !1
            }

            function g(e) {
                var t = Qe.state;
                if (Qe.marked = "def", t.context)
                    if ("var" == t.lexical.info && t.context && t.context.block) {
                        var r = k(e, t.context);
                        if (null != r) return void(t.context = r)
                    } else if (!h(e, t.localVars)) return void(t.localVars = new x(e, t.localVars));
                n.globalVars && !h(e, t.globalVars) && (t.globalVars = new x(e, t.globalVars))
            }

            function k(e, t) {
                if (t) {
                    if (t.block) {
                        var n = k(e, t.prev);
                        return n ? n == t.prev ? t : new y(n, t.vars, !0) : null
                    }
                    return h(e, t.vars) ? t : new y(t.prev, new x(e, t.vars), !1)
                }
                return null
            }

            function b(e) {
                return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e
            }

            function y(e, t, n) {
                this.prev = e, this.vars = t, this.block = n
            }

            function x(e, t) {
                this.name = e, this.next = t
            }

            function v() {
                Qe.state.context = new y(Qe.state.context, Qe.state.localVars, !1), Qe.state.localVars = et
            }

            function w() {
                Qe.state.context = new y(Qe.state.context, Qe.state.localVars, !0), Qe.state.localVars = null
            }

            function E() {
                Qe.state.localVars = Qe.state.context.vars, Qe.state.context = Qe.state.context.prev
            }

            function S(e, t) {
                var n = function() {
                    var n = Qe.state,
                        r = n.indented;
                    if ("stat" == n.lexical.type) r = n.lexical.indented;
                    else
                        for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                    n.lexical = new u(r, Qe.stream.column(), e, null, n.lexical, t)
                };
                return n.lex = !0, n
            }

            function _() {
                var e = Qe.state;
                e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
            }

            function T(e) {
                function t(n) {
                    return n == e ? m() : ";" == e || "}" == n || ")" == n || "]" == n ? p() : m(t)
                }
                return t
            }

            function z(e, t) {
                return "var" == e ? m(S("vardef", t), ce, T(";"), _) : "keyword a" == e ? m(S("form"), L, z, _) : "keyword b" == e ? m(S("form"), z, _) : "keyword d" == e ? Qe.stream.match(/^\s*$/, !1) ? m() : m(S("stat"), N, T(";"), _) : "debugger" == e ? m(T(";")) : "{" == e ? m(S("}"), w, Y, _, E) : ";" == e ? m() : "if" == e ? ("else" == Qe.state.lexical.info && Qe.state.cc[Qe.state.cc.length - 1] == _ && Qe.state.cc.pop()(), m(S("form"), L, z, _, he)) : "function" == e ? m(ye) : "for" == e ? m(S("form"), ge, z, _) : "class" == e || He && "interface" == t ? (Qe.marked = "keyword", m(S("form", "class" == e ? e : t), Se, _)) : "variable" == e ? He && "declare" == t ? (Qe.marked = "keyword", m(z)) : He && ("module" == t || "enum" == t || "type" == t) && Qe.stream.match(/^\s*\w/, !1) ? (Qe.marked = "keyword", "enum" == t ? m(Oe) : "type" == t ? m(ve, T("operator"), te, T(";")) : m(S("form"), ue, T("{"), S("}"), Y, _, _)) : He && "namespace" == t ? (Qe.marked = "keyword", m(S("form"), C, z, _)) : He && "abstract" == t ? (Qe.marked = "keyword", m(z)) : m(S("stat"), U) : "switch" == e ? m(S("form"), L, T("{"), S("}", "switch"), w, Y, _, _, E) : "case" == e ? m(C, T(":")) : "default" == e ? m(T(":")) : "catch" == e ? m(S("form"), v, M, z, _, E) : "export" == e ? m(S("stat"), Me, _) : "import" == e ? m(S("stat"), Ae, _) : "async" == e ? m(z) : "@" == t ? m(C, z) : p(S("stat"), C, T(";"), _)
            }

            function M(e) {
                if ("(" == e) return m(we, T(")"))
            }

            function C(e, t) {
                return D(e, t, !1)
            }

            function A(e, t) {
                return D(e, t, !0)
            }

            function L(e) {
                return "(" != e ? p() : m(S(")"), N, T(")"), _)
            }

            function D(e, t, n) {
                if (Qe.state.fatArrowAt == Qe.stream.start) {
                    var r = n ? R : P;
                    if ("(" == e) return m(v, S(")"), G(we, ")"), _, T("=>"), r, E);
                    if ("variable" == e) return p(v, ue, T("=>"), r, E)
                }
                var i = n ? j : I;
                return Je.hasOwnProperty(e) ? m(i) : "function" == e ? m(ye, i) : "class" == e || He && "interface" == t ? (Qe.marked = "keyword", m(S("form"), Ee, _)) : "keyword c" == e || "async" == e ? m(n ? A : C) : "(" == e ? m(S(")"), N, T(")"), _, i) : "operator" == e || "spread" == e ? m(n ? A : C) : "[" == e ? m(S("]"), je, _, i) : "{" == e ? Z(V, "}", null, i) : "quasi" == e ? p(O, i) : "new" == e ? m(q(n)) : "import" == e ? m(C) : m()
            }

            function N(e) {
                return e.match(/[;\}\)\],]/) ? p() : p(C)
            }

            function I(e, t) {
                return "," == e ? m(N) : j(e, t, !1)
            }

            function j(e, t, n) {
                var r = 0 == n ? I : j,
                    i = 0 == n ? C : A;
                return "=>" == e ? m(v, n ? R : P, E) : "operator" == e ? /\+\+|--/.test(t) || He && "!" == t ? m(r) : He && "<" == t && Qe.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? m(S(">"), G(te, ">"), _, r) : "?" == t ? m(C, T(":"), i) : m(i) : "quasi" == e ? p(O, r) : ";" != e ? "(" == e ? Z(A, ")", "call", r) : "." == e ? m(H, r) : "[" == e ? m(S("]"), N, T("]"), _, r) : He && "as" == t ? (Qe.marked = "keyword", m(te, r)) : "regexp" == e ? (Qe.state.lastType = Qe.marked = "operator", Qe.stream.backUp(Qe.stream.pos - Qe.stream.start - 1), m(i)) : void 0 : void 0
            }

            function O(e, t) {
                return "quasi" != e ? p() : "${" != t.slice(t.length - 2) ? m(O) : m(C, F)
            }

            function F(e) {
                if ("}" == e) return Qe.marked = "string-2", Qe.state.tokenize = l, m(O)
            }

            function P(e) {
                return c(Qe.stream, Qe.state), p("{" == e ? z : C)
            }

            function R(e) {
                return c(Qe.stream, Qe.state), p("{" == e ? z : A)
            }

            function q(e) {
                return function(t) {
                    return "." == t ? m(e ? $ : B) : "variable" == t && He ? m(ae, e ? j : I) : p(e ? A : C)
                }
            }

            function B(e, t) {
                if ("target" == t) return Qe.marked = "keyword", m(I)
            }

            function $(e, t) {
                if ("target" == t) return Qe.marked = "keyword", m(j)
            }

            function U(e) {
                return ":" == e ? m(_, z) : p(I, T(";"), _)
            }

            function H(e) {
                if ("variable" == e) return Qe.marked = "property", m()
            }

            function V(e, t) {
                if ("async" == e) return Qe.marked = "property", m(V);
                if ("variable" == e || "keyword" == Qe.style) {
                    return Qe.marked = "property", "get" == t || "set" == t ? m(W) : (He && Qe.state.fatArrowAt == Qe.stream.start && (n = Qe.stream.match(/^\s*:\s*/, !1)) && (Qe.state.fatArrowAt = Qe.stream.pos + n[0].length), m(K));
                    var n
                } else {
                    if ("number" == e || "string" == e) return Qe.marked = $e ? "property" : Qe.style + " property", m(K);
                    if ("jsonld-keyword" == e) return m(K);
                    if (He && b(t)) return Qe.marked = "keyword", m(V);
                    if ("[" == e) return m(C, X, T("]"), K);
                    if ("spread" == e) return m(A, K);
                    if ("*" == t) return Qe.marked = "keyword", m(V);
                    if (":" == e) return p(K)
                }
            }

            function W(e) {
                return "variable" != e ? p(K) : (Qe.marked = "property", m(ye))
            }

            function K(e) {
                return ":" == e ? m(A) : "(" == e ? p(ye) : void 0
            }

            function G(e, t, n) {
                function r(i, o) {
                    if (n ? n.indexOf(i) > -1 : "," == i) {
                        var a = Qe.state.lexical;
                        return "call" == a.info && (a.pos = (a.pos || 0) + 1), m(function(n, r) {
                            return n == t || r == t ? p() : p(e)
                        }, r)
                    }
                    return i == t || o == t ? m() : n && n.indexOf(";") > -1 ? p(e) : m(T(t))
                }
                return function(n, i) {
                    return n == t || i == t ? m() : p(e, r)
                }
            }

            function Z(e, t, n) {
                for (var r = 3; r < arguments.length; r++) Qe.cc.push(arguments[r]);
                return m(S(t, n), G(e, t), _)
            }

            function Y(e) {
                return "}" == e ? m() : p(z, Y)
            }

            function X(e, t) {
                if (He) {
                    if (":" == e) return m(te);
                    if ("?" == t) return m(X)
                }
            }

            function J(e, t) {
                if (He && (":" == e || "in" == t)) return m(te)
            }

            function Q(e) {
                if (He && ":" == e) return Qe.stream.match(/^\s*\w+\s+is\b/, !1) ? m(C, ee, te) : m(te)
            }

            function ee(e, t) {
                if ("is" == t) return Qe.marked = "keyword", m()
            }

            function te(e, t) {
                return "keyof" == t || "typeof" == t || "infer" == t ? (Qe.marked = "keyword", m("typeof" == t ? A : te)) : "variable" == e || "void" == t ? (Qe.marked = "type", m(oe)) : "|" == t || "&" == t ? m(te) : "string" == e || "number" == e || "atom" == e ? m(oe) : "[" == e ? m(S("]"), G(te, "]", ","), _, oe) : "{" == e ? m(S("}"), G(re, "}", ",;"), _, oe) : "(" == e ? m(G(ie, ")"), ne, oe) : "<" == e ? m(G(te, ">"), te) : void 0
            }

            function ne(e) {
                if ("=>" == e) return m(te)
            }

            function re(e, t) {
                return "variable" == e || "keyword" == Qe.style ? (Qe.marked = "property", m(re)) : "?" == t || "number" == e || "string" == e ? m(re) : ":" == e ? m(te) : "[" == e ? m(T("variable"), J, T("]"), re) : "(" == e ? p(xe, re) : void 0
            }

            function ie(e, t) {
                return "variable" == e && Qe.stream.match(/^\s*[?:]/, !1) || "?" == t ? m(ie) : ":" == e ? m(te) : "spread" == e ? m(ie) : p(te)
            }

            function oe(e, t) {
                return "<" == t ? m(S(">"), G(te, ">"), _, oe) : "|" == t || "." == e || "&" == t ? m(te) : "[" == e ? m(te, T("]"), oe) : "extends" == t || "implements" == t ? (Qe.marked = "keyword", m(te)) : "?" == t ? m(te, T(":"), te) : void 0
            }

            function ae(e, t) {
                if ("<" == t) return m(S(">"), G(te, ">"), _, oe)
            }

            function se() {
                return p(te, le)
            }

            function le(e, t) {
                if ("=" == t) return m(te)
            }

            function ce(e, t) {
                return "enum" == t ? (Qe.marked = "keyword", m(Oe)) : p(ue, X, pe, me)
            }

            function ue(e, t) {
                return He && b(t) ? (Qe.marked = "keyword", m(ue)) : "variable" == e ? (g(t), m()) : "spread" == e ? m(ue) : "[" == e ? Z(fe, "]") : "{" == e ? Z(de, "}") : void 0
            }

            function de(e, t) {
                return "variable" != e || Qe.stream.match(/^\s*:/, !1) ? ("variable" == e && (Qe.marked = "property"), "spread" == e ? m(ue) : "}" == e ? p() : "[" == e ? m(C, T("]"), T(":"), de) : m(T(":"), ue, pe)) : (g(t), m(pe))
            }

            function fe() {
                return p(ue, pe)
            }

            function pe(e, t) {
                if ("=" == t) return m(A)
            }

            function me(e) {
                if ("," == e) return m(ce)
            }

            function he(e, t) {
                if ("keyword b" == e && "else" == t) return m(S("form", "else"), z, _)
            }

            function ge(e, t) {
                return "await" == t ? m(ge) : "(" == e ? m(S(")"), ke, _) : void 0
            }

            function ke(e) {
                return "var" == e ? m(ce, be) : "variable" == e ? m(be) : p(be)
            }

            function be(e, t) {
                return ")" == e ? m() : ";" == e ? m(be) : "in" == t || "of" == t ? (Qe.marked = "keyword", m(C, be)) : p(C, be)
            }

            function ye(e, t) {
                return "*" == t ? (Qe.marked = "keyword", m(ye)) : "variable" == e ? (g(t), m(ye)) : "(" == e ? m(v, S(")"), G(we, ")"), _, Q, z, E) : He && "<" == t ? m(S(">"), G(se, ">"), _, ye) : void 0
            }

            function xe(e, t) {
                return "*" == t ? (Qe.marked = "keyword", m(xe)) : "variable" == e ? (g(t), m(xe)) : "(" == e ? m(v, S(")"), G(we, ")"), _, Q, E) : He && "<" == t ? m(S(">"), G(se, ">"), _, xe) : void 0
            }

            function ve(e, t) {
                return "keyword" == e || "variable" == e ? (Qe.marked = "type", m(ve)) : "<" == t ? m(S(">"), G(se, ">"), _) : void 0
            }

            function we(e, t) {
                return "@" == t && m(C, we), "spread" == e ? m(we) : He && b(t) ? (Qe.marked = "keyword", m(we)) : He && "this" == e ? m(X, pe) : p(ue, X, pe)
            }

            function Ee(e, t) {
                return "variable" == e ? Se(e, t) : _e(e, t)
            }

            function Se(e, t) {
                if ("variable" == e) return g(t), m(_e)
            }

            function _e(e, t) {
                return "<" == t ? m(S(">"), G(se, ">"), _, _e) : "extends" == t || "implements" == t || He && "," == e ? ("implements" == t && (Qe.marked = "keyword"), m(He ? te : C, _e)) : "{" == e ? m(S("}"), Te, _) : void 0
            }

            function Te(e, t) {
                return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || He && b(t)) && Qe.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (Qe.marked = "keyword", m(Te)) : "variable" == e || "keyword" == Qe.style ? (Qe.marked = "property", m(ze, Te)) : "number" == e || "string" == e ? m(ze, Te) : "[" == e ? m(C, X, T("]"), ze, Te) : "*" == t ? (Qe.marked = "keyword", m(Te)) : He && "(" == e ? p(xe, Te) : ";" == e || "," == e ? m(Te) : "}" == e ? m() : "@" == t ? m(C, Te) : void 0
            }

            function ze(e, t) {
                if ("?" == t) return m(ze);
                if (":" == e) return m(te, pe);
                if ("=" == t) return m(A);
                var n = Qe.state.lexical.prev,
                    r;
                return p(n && "interface" == n.info ? xe : ye)
            }

            function Me(e, t) {
                return "*" == t ? (Qe.marked = "keyword", m(Ie, T(";"))) : "default" == t ? (Qe.marked = "keyword", m(C, T(";"))) : "{" == e ? m(G(Ce, "}"), Ie, T(";")) : p(z)
            }

            function Ce(e, t) {
                return "as" == t ? (Qe.marked = "keyword", m(T("variable"))) : "variable" == e ? p(A, Ce) : void 0
            }

            function Ae(e) {
                return "string" == e ? m() : "(" == e ? p(C) : p(Le, De, Ie)
            }

            function Le(e, t) {
                return "{" == e ? Z(Le, "}") : ("variable" == e && g(t), "*" == t && (Qe.marked = "keyword"), m(Ne))
            }

            function De(e) {
                if ("," == e) return m(Le, De)
            }

            function Ne(e, t) {
                if ("as" == t) return Qe.marked = "keyword", m(Le)
            }

            function Ie(e, t) {
                if ("from" == t) return Qe.marked = "keyword", m(C)
            }

            function je(e) {
                return "]" == e ? m() : p(G(A, "]"))
            }

            function Oe() {
                return p(S("form"), ue, T("{"), S("}"), G(Fe, "}"), _, _)
            }

            function Fe() {
                return p(ue, pe)
            }

            function Pe(e, t) {
                return "operator" == e.lastType || "," == e.lastType || Ke.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
            }

            function Re(e, t, n) {
                return t.tokenize == o && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0)))
            }
            var qe = t.indentUnit,
                Be = n.statementIndent,
                $e = n.jsonld,
                Ue = n.json || $e,
                He = n.typescript,
                Ve = n.wordCharacters || /[\w$\xa1-\uffff]/,
                We = function() {
                    function e(e) {
                        return {
                            type: e,
                            style: "keyword"
                        }
                    }
                    var t = e("keyword a"),
                        n = e("keyword b"),
                        r = e("keyword c"),
                        i = e("keyword d"),
                        o = e("operator"),
                        a = {
                            type: "atom",
                            style: "atom"
                        };
                    return {
                        "if": e("if"),
                        "while": t,
                        "with": t,
                        "else": n,
                        "do": n,
                        "try": n,
                        "finally": n,
                        "return": i,
                        "break": i,
                        "continue": i,
                        "new": e("new"),
                        "delete": r,
                        "void": r,
                        "throw": r,
                        "debugger": e("debugger"),
                        "var": e("var"),
                        "const": e("var"),
                        "let": e("var"),
                        "function": e("function"),
                        "catch": e("catch"),
                        "for": e("for"),
                        "switch": e("switch"),
                        "case": e("case"),
                        "default": e("default"),
                        "in": o,
                        "typeof": o,
                        "instanceof": o,
                        "true": a,
                        "false": a,
                        "null": a,
                        undefined: a,
                        NaN: a,
                        Infinity: a,
                        "this": e("this"),
                        "class": e("class"),
                        "super": e("atom"),
                        yield: r,
                        "export": e("export"),
                        "import": e("import"),
                        "extends": r,
                        await: r
                    }
                }(),
                Ke = /[+\-*&%=<>!?|~^@]/,
                Ge = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
                Ze, Ye, Xe = "([{}])",
                Je = {
                    atom: !0,
                    number: !0,
                    variable: !0,
                    string: !0,
                    regexp: !0,
                    "this": !0,
                    "jsonld-keyword": !0
                },
                Qe = {
                    state: null,
                    column: null,
                    marked: null,
                    cc: null
                },
                et = new x("this", new x("arguments", null));
            return E.lex = !0, _.lex = !0, {
                startState: function(e) {
                    var t = {
                        tokenize: o,
                        lastType: "sof",
                        cc: [],
                        lexical: new u((e || 0) - qe, 0, "block", !1),
                        localVars: n.localVars,
                        context: n.localVars && new y(null, null, !1),
                        indented: e || 0
                    };
                    return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), t
                },
                token: function(e, t) {
                    if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), c(e, t)), t.tokenize != s && e.eatSpace()) return null;
                    var n = t.tokenize(e, t);
                    return "comment" == Ze ? n : (t.lastType = "operator" != Ze || "++" != Ye && "--" != Ye ? Ze : "incdec", f(t, n, Ze, Ye, e))
                },
                indent: function(t, r) {
                    if (t.tokenize == s || t.tokenize == l) return e.Pass;
                    if (t.tokenize != o) return 0;
                    var i = r && r.charAt(0),
                        a = t.lexical,
                        c;
                    if (!/^\s*else\b/.test(r))
                        for (var u = t.cc.length - 1; u >= 0; --u) {
                            var d = t.cc[u];
                            if (d == _) a = a.prev;
                            else if (d != he) break
                        }
                    for (;
                        ("stat" == a.type || "form" == a.type) && ("}" == i || (c = t.cc[t.cc.length - 1]) && (c == I || c == j) && !/^[,\.=+\-*:?[\(]/.test(r));) a = a.prev;
                    Be && ")" == a.type && "stat" == a.prev.type && (a = a.prev);
                    var f = a.type,
                        p = i == f;
                    return "vardef" == f ? a.indented + ("operator" == t.lastType || "," == t.lastType ? a.info.length + 1 : 0) : "form" == f && "{" == i ? a.indented : "form" == f ? a.indented + qe : "stat" == f ? a.indented + (Pe(t, r) ? Be || qe : 0) : "switch" != a.info || p || 0 == n.doubleIndentSwitch ? a.align ? a.column + (p ? 0 : 1) : a.indented + (p ? 0 : qe) : a.indented + (/^(?:case|default)\b/.test(r) ? qe : 2 * qe)
                },
                electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                blockCommentStart: Ue ? null : "/*",
                blockCommentEnd: Ue ? null : "*/",
                blockCommentContinue: Ue ? null : " * ",
                lineComment: Ue ? null : "//",
                fold: "brace",
                closeBrackets: "()[]{}''\"\"``",
                helperType: Ue ? "json" : "javascript",
                jsonldMode: $e,
                jsonMode: Ue,
                expressionAllowed: Re,
                skipExpression: function(e) {
                    var t = e.cc[e.cc.length - 1];
                    t != C && t != A || e.cc.pop()
                }
            }
        }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {
            name: "javascript",
            json: !0
        }), e.defineMIME("application/x-json", {
            name: "javascript",
            json: !0
        }), e.defineMIME("application/ld+json", {
            name: "javascript",
            jsonld: !0
        }), e.defineMIME("text/typescript", {
            name: "javascript",
            typescript: !0
        }), e.defineMIME("application/typescript", {
            name: "javascript",
            typescript: !0
        })
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("coffeescript", function(e, t) {
            function n(e) {
                return new RegExp("^((" + e.join(")|(") + "))\\b")
            }

            function r(e, t) {
                if (e.sol()) {
                    null === t.scope.align && (t.scope.align = !1);
                    var n = t.scope.offset;
                    if (e.eatSpace()) {
                        var r = e.indentation();
                        return r > n && "coffee" == t.scope.type ? "indent" : r < n ? "dedent" : null
                    }
                    n > 0 && s(e, t)
                }
                if (e.eatSpace()) return null;
                var a = e.peek();
                if (e.match("####")) return e.skipToEnd(), "comment";
                if (e.match("###")) return t.tokenize = o, t.tokenize(e, t);
                if ("#" === a) return e.skipToEnd(), "comment";
                if (e.match(/^-?[0-9\.]/, !1)) {
                    var l = !1;
                    if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (l = !0), e.match(/^-?\d+\.\d*/) && (l = !0), e.match(/^-?\.\d+/) && (l = !0), l) return "." == e.peek() && e.backUp(1), "number";
                    var h = !1;
                    if (e.match(/^-?0x[0-9a-f]+/i) && (h = !0), e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (h = !0), e.match(/^-?0(?![\dx])/i) && (h = !0), h) return "number"
                }
                if (e.match(b)) return t.tokenize = i(e.current(), !1, "string"), t.tokenize(e, t);
                if (e.match(y)) {
                    if ("/" != e.current() || e.match(/^.*\//, !1)) return t.tokenize = i(e.current(), !0, "string-2"), t.tokenize(e, t);
                    e.backUp(1)
                }
                return e.match(u) || e.match(m) ? "operator" : e.match(d) ? "punctuation" : e.match(v) ? "atom" : e.match(p) || t.prop && e.match(f) ? "property" : e.match(k) ? "keyword" : e.match(f) ? "variable" : (e.next(), c)
            }

            function i(e, n, i) {
                return function(o, a) {
                    for (; !o.eol();)
                        if (o.eatWhile(/[^'"\/\\]/), o.eat("\\")) {
                            if (o.next(), n && o.eol()) return i
                        } else {
                            if (o.match(e)) return a.tokenize = r, i;
                            o.eat(/['"\/]/)
                        }
                    return n && (t.singleLineStringErrors ? i = c : a.tokenize = r), i
                }
            }

            function o(e, t) {
                for (; !e.eol();) {
                    if (e.eatWhile(/[^#]/), e.match("###")) {
                        t.tokenize = r;
                        break
                    }
                    e.eatWhile("#")
                }
                return "comment"
            }

            function a(t, n, r) {
                r = r || "coffee";
                for (var i = 0, o = !1, a = null, s = n.scope; s; s = s.prev)
                    if ("coffee" === s.type || "}" == s.type) {
                        i = s.offset + e.indentUnit;
                        break
                    }
                "coffee" !== r ? (o = null, a = t.column() + t.current().length) : n.scope.align && (n.scope.align = !1), n.scope = {
                    offset: i,
                    type: r,
                    prev: n.scope,
                    align: o,
                    alignOffset: a
                }
            }

            function s(e, t) {
                if (t.scope.prev) {
                    if ("coffee" === t.scope.type) {
                        for (var n = e.indentation(), r = !1, i = t.scope; i; i = i.prev)
                            if (n === i.offset) {
                                r = !0;
                                break
                            }
                        if (!r) return !0;
                        for (; t.scope.prev && t.scope.offset !== n;) t.scope = t.scope.prev;
                        return !1
                    }
                    return t.scope = t.scope.prev, !1
                }
            }

            function l(e, t) {
                var n = t.tokenize(e, t),
                    r = e.current();
                "return" === r && (t.dedent = !0), (("->" === r || "=>" === r) && e.eol() || "indent" === n) && a(e, t);
                var i = "[({".indexOf(r);
                if (-1 !== i && a(e, t, "])}".slice(i, i + 1)), h.exec(r) && a(e, t), "then" == r && s(e, t), "dedent" === n && s(e, t)) return c;
                if (-1 !== (i = "])}".indexOf(r))) {
                    for (;
                        "coffee" == t.scope.type && t.scope.prev;) t.scope = t.scope.prev;
                    t.scope.type == r && (t.scope = t.scope.prev)
                }
                return t.dedent && e.eol() && ("coffee" == t.scope.type && t.scope.prev && (t.scope = t.scope.prev), t.dedent = !1), n
            }
            var c = "error",
                u = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,
                d = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/,
                f = /^[_A-Za-z$][_A-Za-z$0-9]*/,
                p = /^@[_A-Za-z$][_A-Za-z$0-9]*/,
                m = n(["and", "or", "not", "is", "isnt", "in", "instanceof", "typeof"]),
                h = ["for", "while", "loop", "if", "unless", "else", "switch", "try", "catch", "finally", "class"],
                g = ["break", "by", "continue", "debugger", "delete", "do", "in", "of", "new", "return", "then", "this", "@", "throw", "when", "until", "extends"],
                k = n(h.concat(g));
            h = n(h);
            var b = /^('{3}|\"{3}|['\"])/,
                y = /^(\/{3}|\/)/,
                x, v = n(["Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no"]),
                w;
            return {
                startState: function(e) {
                    return {
                        tokenize: r,
                        scope: {
                            offset: e || 0,
                            type: "coffee",
                            prev: null,
                            align: !1
                        },
                        prop: !1,
                        dedent: 0
                    }
                },
                token: function(e, t) {
                    var n = null === t.scope.align && t.scope;
                    n && e.sol() && (n.align = !1);
                    var r = l(e, t);
                    return r && "comment" != r && (n && (n.align = !0), t.prop = "punctuation" == r && "." == e.current()), r
                },
                indent: function(e, t) {
                    if (e.tokenize != r) return 0;
                    var n = e.scope,
                        i = t && "])}".indexOf(t.charAt(0)) > -1;
                    if (i)
                        for (;
                            "coffee" == n.type && n.prev;) n = n.prev;
                    var o = i && n.type === t.charAt(0);
                    return n.align ? n.alignOffset - (o ? 1 : 0) : (o ? n.prev : n).offset
                },
                lineComment: "#",
                fold: "indent"
            }
        }), e.defineMIME("application/vnd.coffeescript", "coffeescript"), e.defineMIME("text/x-coffeescript", "coffeescript"), e.defineMIME("text/coffeescript", "coffeescript")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.defineMode("livescript", function() {
            var e = function(e, t) {
                    var n = t.next || "start";
                    if (n) {
                        t.next = t.next;
                        var r = o[n];
                        if (r.splice) {
                            for (var i = 0; i < r.length; ++i) {
                                var a = r[i];
                                if (a.regex && e.match(a.regex)) return t.next = a.next || t.next, a.token
                            }
                            return e.next(), "error"
                        }
                        if (e.match(a = o[n])) return a.regex && e.match(a.regex) ? (t.next = a.next, a.token) : (e.next(), "error")
                    }
                    return e.next(), "error"
                },
                t;
            return {
                startState: function() {
                    return {
                        next: "start",
                        lastToken: {
                            style: null,
                            indent: 0,
                            content: ""
                        }
                    }
                },
                token: function(t, n) {
                    for (; t.pos == t.start;) var r = e(t, n);
                    return n.lastToken = {
                        style: r,
                        indent: t.indentation(),
                        content: t.current()
                    }, r.replace(/\./g, " ")
                },
                indent: function(e) {
                    var t = e.lastToken.indent;
                    return e.lastToken.content.match(n) && (t += 2), t
                }
            }
        });
        var t = "(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*",
            n = RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*" + t + ")?))\\s*$"),
            r = "(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))",
            i = {
                token: "string",
                regex: ".+"
            },
            o = {
                start: [{
                    token: "comment.doc",
                    regex: "/\\*",
                    next: "comment"
                }, {
                    token: "comment",
                    regex: "#.*"
                }, {
                    token: "keyword",
                    regex: "(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)" + r
                }, {
                    token: "constant.language",
                    regex: "(?:true|false|yes|no|on|off|null|void|undefined)" + r
                }, {
                    token: "invalid.illegal",
                    regex: "(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)" + r
                }, {
                    token: "language.support.class",
                    regex: "(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)" + r
                }, {
                    token: "language.support.function",
                    regex: "(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)" + r
                }, {
                    token: "variable.language",
                    regex: "(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)" + r
                }, {
                    token: "identifier",
                    regex: t + "\\s*:(?![:=])"
                }, {
                    token: "variable",
                    regex: t
                }, {
                    token: "keyword.operator",
                    regex: "(?:\\.{3}|\\s+\\?)"
                }, {
                    token: "keyword.variable",
                    regex: "(?:@+|::|\\.\\.)",
                    next: "key"
                }, {
                    token: "keyword.operator",
                    regex: "\\.\\s*",
                    next: "key"
                }, {
                    token: "string",
                    regex: "\\\\\\S[^\\s,;)}\\]]*"
                }, {
                    token: "string.doc",
                    regex: "'''",
                    next: "qdoc"
                }, {
                    token: "string.doc",
                    regex: '"""',
                    next: "qqdoc"
                }, {
                    token: "string",
                    regex: "'",
                    next: "qstring"
                }, {
                    token: "string",
                    regex: '"',
                    next: "qqstring"
                }, {
                    token: "string",
                    regex: "`",
                    next: "js"
                }, {
                    token: "string",
                    regex: "<\\[",
                    next: "words"
                }, {
                    token: "string.regex",
                    regex: "//",
                    next: "heregex"
                }, {
                    token: "string.regex",
                    regex: "\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",
                    next: "key"
                }, {
                    token: "constant.numeric",
                    regex: "(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"
                }, {
                    token: "lparen",
                    regex: "[({[]"
                }, {
                    token: "rparen",
                    regex: "[)}\\]]",
                    next: "key"
                }, {
                    token: "keyword.operator",
                    regex: "\\S+"
                }, {
                    token: "text",
                    regex: "\\s+"
                }],
                heregex: [{
                    token: "string.regex",
                    regex: ".*?//[gimy$?]{0,4}",
                    next: "start"
                }, {
                    token: "string.regex",
                    regex: "\\s*#{"
                }, {
                    token: "comment.regex",
                    regex: "\\s+(?:#.*)?"
                }, {
                    token: "string.regex",
                    regex: "\\S+"
                }],
                key: [{
                    token: "keyword.operator",
                    regex: "[.?@!]+"
                }, {
                    token: "identifier",
                    regex: t,
                    next: "start"
                }, {
                    token: "text",
                    regex: "",
                    next: "start"
                }],
                comment: [{
                    token: "comment.doc",
                    regex: ".*?\\*/",
                    next: "start"
                }, {
                    token: "comment.doc",
                    regex: ".+"
                }],
                qdoc: [{
                    token: "string",
                    regex: ".*?'''",
                    next: "key"
                }, i],
                qqdoc: [{
                    token: "string",
                    regex: '.*?"""',
                    next: "key"
                }, i],
                qstring: [{
                    token: "string",
                    regex: "[^\\\\']*(?:\\\\.[^\\\\']*)*'",
                    next: "key"
                }, i],
                qqstring: [{
                    token: "string",
                    regex: '[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',
                    next: "key"
                }, i],
                js: [{
                    token: "string",
                    regex: "[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",
                    next: "key"
                }, i],
                words: [{
                    token: "string",
                    regex: ".*?\\]>",
                    next: "key"
                }, i]
            };
        for (var a in o) {
            var s = o[a];
            if (s.splice)
                for (var l = 0, c = s.length; l < c; ++l) {
                    var u = s[l];
                    "string" == typeof u.regex && (o[a][l].regex = new RegExp("^" + u.regex))
                } else "string" == typeof u.regex && (o[a].regex = new RegExp("^" + s.regex))
        }
        e.defineMIME("text/x-livescript", "livescript")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e, t, n, r) {
            this.state = e, this.mode = t, this.depth = n, this.prev = r
        }

        function n(r) {
            return new t(e.copyState(r.mode, r.state), r.mode, r.depth, r.prev && n(r.prev))
        }
        e.defineMode("jsx", function(r, i) {
            function o(e) {
                var t = e.tagName;
                e.tagName = null;
                var n = c.indent(e, "", "");
                return e.tagName = t, n
            }

            function a(e, t) {
                return t.context.mode == c ? s(e, t, t.context) : l(e, t, t.context)
            }

            function s(n, i, s) {
                if (2 == s.depth) return n.match(/^.*?\*\//) ? s.depth = 1 : n.skipToEnd(), "comment";
                if ("{" == n.peek()) {
                    c.skipAttribute(s.state);
                    var l = o(s.state),
                        d = s.state.context;
                    if (d && n.match(/^[^>]*>\s*$/, !1)) {
                        for (; d.prev && !d.startOfLine;) d = d.prev;
                        d.startOfLine ? l -= r.indentUnit : s.prev.state.lexical && (l = s.prev.state.lexical.indented)
                    } else 1 == s.depth && (l += r.indentUnit);
                    return i.context = new t(e.startState(u, l), u, 0, i.context), null
                }
                if (1 == s.depth) {
                    if ("<" == n.peek()) return c.skipAttribute(s.state), i.context = new t(e.startState(c, o(s.state)), c, 0, i.context), null;
                    if (n.match("//")) return n.skipToEnd(), "comment";
                    if (n.match("/*")) return s.depth = 2, a(n, i)
                }
                var f = c.token(n, s.state),
                    p = n.current(),
                    m;
                return /\btag\b/.test(f) ? />$/.test(p) ? s.state.context ? s.depth = 0 : i.context = i.context.prev : /^</.test(p) && (s.depth = 1) : !f && (m = p.indexOf("{")) > -1 && n.backUp(p.length - m), f
            }

            function l(n, r, i) {
                if ("<" == n.peek() && u.expressionAllowed(n, i.state)) return u.skipExpression(i.state), r.context = new t(e.startState(c, u.indent(i.state, "", "")), c, 0, r.context), null;
                var o = u.token(n, i.state);
                if (!o && null != i.depth) {
                    var a = n.current();
                    "{" == a ? i.depth++ : "}" == a && 0 == --i.depth && (r.context = r.context.prev)
                }
                return o
            }
            var c = e.getMode(r, {
                    name: "xml",
                    allowMissing: !0,
                    multilineTagIndentPastTag: !1,
                    allowMissingTagName: !0
                }),
                u = e.getMode(r, i && i.base || "javascript");
            return {
                startState: function() {
                    return {
                        context: new t(e.startState(u), u)
                    }
                },
                copyState: function(e) {
                    return {
                        context: n(e.context)
                    }
                },
                token: a,
                indent: function(e, t, n) {
                    return e.context.mode.indent(e.context.state, t, n)
                },
                innerMode: function(e) {
                    return e.context
                }
            }
        }, "xml", "javascript"), e.defineMIME("text/jsx", "jsx"), e.defineMIME("text/typescript-jsx", {
            name: "jsx",
            base: {
                name: "javascript",
                typescript: !0
            }
        })
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e) {
            for (var t = {}, n = 0, r = e.length; n < r; ++n) t[e[n]] = !0;
            return t
        }
        var n = ["alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload", "__END__", "__FILE__", "__LINE__", "__dir__"],
            r = t(n),
            i = t(["def", "class", "case", "for", "while", "until", "module", "then", "catch", "loop", "proc", "begin"]),
            o = t(["end", "until"]),
            a = {
                "[": "]",
                "{": "}",
                "(": ")"
            },
            s = {
                "]": "[",
                "}": "{",
                ")": "("
            };
        e.defineMode("ruby", function(t) {
            function n(e, t, n) {
                return n.tokenize.push(e), e(t, n)
            }

            function l(e, t) {
                if (e.sol() && e.match("=begin") && e.eol()) return t.tokenize.push(m), "comment";
                if (e.eatSpace()) return null;
                var r = e.next(),
                    i;
                if ("`" == r || "'" == r || '"' == r) return n(f(r, "string", '"' == r || "`" == r), e, t);
                if ("/" == r) return c(e) ? n(f(r, "string-2", !0), e, t) : "operator";
                if ("%" == r) {
                    var o = "string",
                        s = !0;
                    e.eat("s") ? o = "atom" : e.eat(/[WQ]/) ? o = "string" : e.eat(/[r]/) ? o = "string-2" : e.eat(/[wxq]/) && (o = "string", s = !1);
                    var l = e.eat(/[^\w\s=]/);
                    return l ? (a.propertyIsEnumerable(l) && (l = a[l]), n(f(l, o, s, !0), e, t)) : "operator"
                }
                if ("#" == r) return e.skipToEnd(), "comment";
                if ("<" == r && (i = e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) return n(p(i[2], i[1]), e, t);
                if ("0" == r) return e.eat("x") ? e.eatWhile(/[\da-fA-F]/) : e.eat("b") ? e.eatWhile(/[01]/) : e.eatWhile(/[0-7]/), "number";
                if (/\d/.test(r)) return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/), "number";
                if ("?" == r) {
                    for (; e.match(/^\\[CM]-/););
                    return e.eat("\\") ? e.eatWhile(/\w/) : e.next(), "string"
                }
                if (":" == r) return e.eat("'") ? n(f("'", "atom", !1), e, t) : e.eat('"') ? n(f('"', "atom", !0), e, t) : e.eat(/[\<\>]/) ? (e.eat(/[\<\>]/), "atom") : e.eat(/[\+\-\*\/\&\|\:\!]/) ? "atom" : e.eat(/[a-zA-Z$@_\xa1-\uffff]/) ? (e.eatWhile(/[\w$\xa1-\uffff]/), e.eat(/[\?\!\=]/), "atom") : "operator";
                if ("@" == r && e.match(/^@?[a-zA-Z_\xa1-\uffff]/)) return e.eat("@"), e.eatWhile(/[\w\xa1-\uffff]/), "variable-2";
                if ("$" == r) return e.eat(/[a-zA-Z_]/) ? e.eatWhile(/[\w]/) : e.eat(/\d/) ? e.eat(/\d/) : e.next(), "variable-3";
                if (/[a-zA-Z_\xa1-\uffff]/.test(r)) return e.eatWhile(/[\w\xa1-\uffff]/), e.eat(/[\?\!]/), e.eat(":") ? "atom" : "ident";
                if ("|" != r || !t.varList && "{" != t.lastTok && "do" != t.lastTok) {
                    if (/[\(\)\[\]{}\\;]/.test(r)) return h = r, null;
                    if ("-" == r && e.eat(">")) return "arrow";
                    if (/[=+\-\/*:\.^%<>~|]/.test(r)) {
                        var u = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
                        return "." != r || u || (h = "."), "operator"
                    }
                    return null
                }
                return h = "|", null
            }

            function c(e) {
                for (var t = e.pos, n = 0, r, i = !1, o = !1; null != (r = e.next());)
                    if (o) o = !1;
                    else {
                        if ("[{(".indexOf(r) > -1) n++;
                        else if ("]})".indexOf(r) > -1) {
                            if (--n < 0) break
                        } else if ("/" == r && 0 == n) {
                            i = !0;
                            break
                        }
                        o = "\\" == r
                    }
                return e.backUp(e.pos - t), i
            }

            function u(e) {
                return e || (e = 1),
                    function(t, n) {
                        if ("}" == t.peek()) {
                            if (1 == e) return n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](t, n);
                            n.tokenize[n.tokenize.length - 1] = u(e - 1)
                        } else "{" == t.peek() && (n.tokenize[n.tokenize.length - 1] = u(e + 1));
                        return l(t, n)
                    }
            }

            function d() {
                var e = !1;
                return function(t, n) {
                    return e ? (n.tokenize.pop(), n.tokenize[n.tokenize.length - 1](t, n)) : (e = !0, l(t, n))
                }
            }

            function f(e, t, n, r) {
                return function(i, o) {
                    var a = !1,
                        s;
                    for ("read-quoted-paused" === o.context.type && (o.context = o.context.prev, i.eat("}")); null != (s = i.next());) {
                        if (s == e && (r || !a)) {
                            o.tokenize.pop();
                            break
                        }
                        if (n && "#" == s && !a) {
                            if (i.eat("{")) {
                                "}" == e && (o.context = {
                                    prev: o.context,
                                    type: "read-quoted-paused"
                                }), o.tokenize.push(u());
                                break
                            }
                            if (/[@\$]/.test(i.peek())) {
                                o.tokenize.push(d());
                                break
                            }
                        }
                        a = !a && "\\" == s
                    }
                    return t
                }
            }

            function p(e, t) {
                return function(n, r) {
                    return t && n.eatSpace(), n.match(e) ? r.tokenize.pop() : n.skipToEnd(), "string"
                }
            }

            function m(e, t) {
                return e.sol() && e.match("=end") && e.eol() && t.tokenize.pop(), e.skipToEnd(), "comment"
            }
            var h;
            return {
                startState: function() {
                    return {
                        tokenize: [l],
                        indented: 0,
                        context: {
                            type: "top",
                            indented: -t.indentUnit
                        },
                        continuedLine: !1,
                        lastTok: null,
                        varList: !1
                    }
                },
                token: function(e, t) {
                    h = null, e.sol() && (t.indented = e.indentation());
                    var n = t.tokenize[t.tokenize.length - 1](e, t),
                        a, s = h;
                    if ("ident" == n) {
                        var l = e.current();
                        "keyword" == (n = "." == t.lastTok ? "property" : r.propertyIsEnumerable(e.current()) ? "keyword" : /^[A-Z]/.test(l) ? "tag" : "def" == t.lastTok || "class" == t.lastTok || t.varList ? "def" : "variable") && (s = l, i.propertyIsEnumerable(l) ? a = "indent" : o.propertyIsEnumerable(l) ? a = "dedent" : "if" != l && "unless" != l || e.column() != e.indentation() ? "do" == l && t.context.indented < t.indented && (a = "indent") : a = "indent")
                    }
                    return (h || n && "comment" != n) && (t.lastTok = s), "|" == h && (t.varList = !t.varList), "indent" == a || /[\(\[\{]/.test(h) ? t.context = {
                        prev: t.context,
                        type: h || n,
                        indented: t.indented
                    } : ("dedent" == a || /[\)\]\}]/.test(h)) && t.context.prev && (t.context = t.context.prev), e.eol() && (t.continuedLine = "\\" == h || "operator" == n), n
                },
                indent: function(n, r) {
                    if (n.tokenize[n.tokenize.length - 1] != l) return e.Pass;
                    var i = r && r.charAt(0),
                        o = n.context,
                        a = o.type == s[i] || "keyword" == o.type && /^(?:end|until|else|elsif|when|rescue)\b/.test(r);
                    return o.indented + (a ? 0 : t.indentUnit) + (n.continuedLine ? t.indentUnit : 0)
                },
                electricInput: /^\s*(?:end|rescue|elsif|else|\})$/,
                lineComment: "#",
                fold: "indent"
            }
        }), e.defineMIME("text/x-ruby", "ruby"), e.registerHelper("hintWords", "ruby", n)
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e, t, n, r, i, o) {
            this.indented = e, this.column = t, this.type = n, this.info = r, this.align = i, this.prev = o
        }

        function n(e, n, r, i) {
            var o = e.indented;
            return e.context && "statement" == e.context.type && "statement" != r && (o = e.context.indented), e.context = new t(o, n, r, i, null, e.context)
        }

        function r(e) {
            var t = e.context.type;
            return ")" != t && "]" != t && "}" != t || (e.indented = e.context.indented), e.context = e.context.prev
        }

        function i(e, t, n) {
            return "variable" == t.prevToken || "type" == t.prevToken || (!!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, n)) || (!(!t.typeAtEndOfLine || e.column() != e.indentation()) || void 0))
        }

        function o(e) {
            for (;;) {
                if (!e || "top" == e.type) return !0;
                if ("}" == e.type && "namespace" != e.prev.info) return !1;
                e = e.prev
            }
        }

        function a(e) {
            for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r) t[n[r]] = !0;
            return t
        }

        function s(e, t) {
            return "function" == typeof e ? e(t) : e.propertyIsEnumerable(t)
        }

        function l(e) {
            return s(z, e) || /.+_t$/.test(e)
        }

        function c(e) {
            return l(e) || s(M, e)
        }

        function u(e, t) {
            if (!t.startOfLine) return !1;
            for (var n, r = null; n = e.peek();) {
                if ("\\" == n && e.match(/^.$/)) {
                    r = u;
                    break
                }
                if ("/" == n && e.match(/^\/[\/\*]/, !1)) break;
                e.next()
            }
            return t.tokenize = r, "meta"
        }

        function d(e, t) {
            return "type" == t.prevToken && "type"
        }

        function f(e) {
            return !(!e || e.length < 2) && ("_" == e[0] && ("_" == e[1] || e[1] !== e[1].toLowerCase()))
        }

        function p(e) {
            return e.eatWhile(/[\w\.']/), "number"
        }

        function m(e, t) {
            if (e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/)) {
                var n = e.match(/"([^\s\\()]{0,16})\(/);
                return !!n && (t.cpp11RawStringDelim = n[1], t.tokenize = k, k(e, t))
            }
            return e.match(/(u8|u|U|L)/) ? !!e.match(/["']/, !1) && "string" : (e.next(), !1)
        }

        function h(e) {
            var t = /(\w+)::~?(\w+)$/.exec(e);
            return t && t[1] == t[2]
        }

        function g(e, t) {
            for (var n; null != (n = e.next());)
                if ('"' == n && !e.eat('"')) {
                    t.tokenize = null;
                    break
                }
            return "string"
        }

        function k(e, t) {
            var n = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&"),
                r;
            return e.match(new RegExp(".*?\\)" + n + '"')) ? t.tokenize = null : e.skipToEnd(), "string"
        }

        function b(t, n) {
            function r(e) {
                if (e)
                    for (var t in e) e.hasOwnProperty(t) && i.push(t)
            }
            "string" == typeof t && (t = [t]);
            var i = [];
            r(n.keywords), r(n.types), r(n.builtin), r(n.atoms), i.length && (n.helperType = t[0], e.registerHelper("hintWords", t[0], i));
            for (var o = 0; o < t.length; ++o) e.defineMIME(t[o], n)
        }

        function y(e, t) {
            for (var n = !1; !e.eol();) {
                if (!n && e.match('"""')) {
                    t.tokenize = null;
                    break
                }
                n = "\\" == e.next() && !n
            }
            return "string"
        }

        function x(e) {
            return function(t, n) {
                for (var r; r = t.next();) {
                    if ("*" == r && t.eat("/")) {
                        if (1 == e) {
                            n.tokenize = null;
                            break
                        }
                        return n.tokenize = x(e - 1), n.tokenize(t, n)
                    }
                    if ("/" == r && t.eat("*")) return n.tokenize = x(e + 1), n.tokenize(t, n)
                }
                return "comment"
            }
        }

        function v(e) {
            return function(t, n) {
                for (var r = !1, i, o = !1; !t.eol();) {
                    if (!e && !r && t.match('"')) {
                        o = !0;
                        break
                    }
                    if (e && t.match('"""')) {
                        o = !0;
                        break
                    }
                    i = t.next(), !r && "$" == i && t.match("{") && t.skipTo("}"), r = !r && "\\" == i && !e
                }
                return !o && e || (n.tokenize = null), "string"
            }
        }

        function w(e) {
            return function(t, n) {
                for (var r = !1, i, o = !1; !t.eol();) {
                    if (!r && t.match('"') && ("single" == e || t.match('""'))) {
                        o = !0;
                        break
                    }
                    if (!r && t.match("``")) {
                        L = w(e), o = !0;
                        break
                    }
                    i = t.next(), r = "single" == e && !r && "\\" == i
                }
                return o && (n.tokenize = null), "string"
            }
        }
        e.defineMode("clike", function(a, l) {
            function c(e, t) {
                var n = e.next();
                if (w[n]) {
                    var r = w[n](e, t);
                    if (!1 !== r) return r
                }
                if ('"' == n || "'" == n) return t.tokenize = u(n), t.tokenize(e, t);
                if (z.test(n)) return N = n, null;
                if (M.test(n)) {
                    if (e.backUp(1), e.match(C)) return "number";
                    e.next()
                }
                if ("/" == n) {
                    if (e.eat("*")) return t.tokenize = d, d(e, t);
                    if (e.eat("/")) return e.skipToEnd(), "comment"
                }
                if (A.test(n)) {
                    for (; !e.match(/^\/[\/*]/, !1) && e.eat(A););
                    return "operator"
                }
                if (e.eatWhile(L), T)
                    for (; e.match(T);) e.eatWhile(L);
                var i = e.current();
                return s(g, i) ? (s(y, i) && (N = "newstatement"), s(x, i) && (I = !0), "keyword") : s(k, i) ? "type" : s(b, i) || D && D(i) ? (s(y, i) && (N = "newstatement"), "builtin") : s(v, i) ? "atom" : "variable"
            }

            function u(e) {
                return function(t, n) {
                    for (var r = !1, i, o = !1; null != (i = t.next());) {
                        if (i == e && !r) {
                            o = !0;
                            break
                        }
                        r = !r && "\\" == i
                    }
                    return (o || !r && !E) && (n.tokenize = null), "string"
                }
            }

            function d(e, t) {
                for (var n = !1, r; r = e.next();) {
                    if ("/" == r && n) {
                        t.tokenize = null;
                        break
                    }
                    n = "*" == r
                }
                return "comment"
            }

            function f(e, t) {
                l.typeFirstDefinitions && e.eol() && o(t.context) && (t.typeAtEndOfLine = i(e, t, e.pos))
            }
            var p = a.indentUnit,
                m = l.statementIndentUnit || p,
                h = l.dontAlignCalls,
                g = l.keywords || {},
                k = l.types || {},
                b = l.builtin || {},
                y = l.blockKeywords || {},
                x = l.defKeywords || {},
                v = l.atoms || {},
                w = l.hooks || {},
                E = l.multiLineStrings,
                S = !1 !== l.indentStatements,
                _ = !1 !== l.indentSwitch,
                T = l.namespaceSeparator,
                z = l.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
                M = l.numberStart || /[\d\.]/,
                C = l.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
                A = l.isOperatorChar || /[+\-*&%=<>!?|\/]/,
                L = l.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
                D = l.isReservedIdentifier || !1,
                N, I;
            return {
                startState: function(e) {
                    return {
                        tokenize: null,
                        context: new t((e || 0) - p, 0, "top", null, !1),
                        indented: 0,
                        startOfLine: !0,
                        prevToken: null
                    }
                },
                token: function(e, t) {
                    var a = t.context;
                    if (e.sol() && (null == a.align && (a.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) return f(e, t), null;
                    N = I = null;
                    var s = (t.tokenize || c)(e, t);
                    if ("comment" == s || "meta" == s) return s;
                    if (null == a.align && (a.align = !0), ";" == N || ":" == N || "," == N && e.match(/^\s*(?:\/\/.*)?$/, !1))
                        for (;
                            "statement" == t.context.type;) r(t);
                    else if ("{" == N) n(t, e.column(), "}");
                    else if ("[" == N) n(t, e.column(), "]");
                    else if ("(" == N) n(t, e.column(), ")");
                    else if ("}" == N) {
                        for (;
                            "statement" == a.type;) a = r(t);
                        for ("}" == a.type && (a = r(t));
                            "statement" == a.type;) a = r(t)
                    } else N == a.type ? r(t) : S && (("}" == a.type || "top" == a.type) && ";" != N || "statement" == a.type && "newstatement" == N) && n(t, e.column(), "statement", e.current());
                    if ("variable" == s && ("def" == t.prevToken || l.typeFirstDefinitions && i(e, t, e.start) && o(t.context) && e.match(/^\s*\(/, !1)) && (s = "def"), w.token) {
                        var u = w.token(e, t, s);
                        u !== undefined && (s = u)
                    }
                    return "def" == s && !1 === l.styleDefs && (s = "variable"), t.startOfLine = !1, t.prevToken = I ? "def" : s || N, f(e, t), s
                },
                indent: function(t, n) {
                    if (t.tokenize != c && null != t.tokenize || t.typeAtEndOfLine) return e.Pass;
                    var r = t.context,
                        i = n && n.charAt(0),
                        o = i == r.type;
                    if ("statement" == r.type && "}" == i && (r = r.prev), l.dontIndentStatements)
                        for (;
                            "statement" == r.type && l.dontIndentStatements.test(r.info);) r = r.prev;
                    if (w.indent) {
                        var a = w.indent(t, r, n, p);
                        if ("number" == typeof a) return a
                    }
                    var s = r.prev && "switch" == r.prev.info;
                    if (l.allmanIndentation && /[{(]/.test(i)) {
                        for (;
                            "top" != r.type && "}" != r.type;) r = r.prev;
                        return r.indented
                    }
                    return "statement" == r.type ? r.indented + ("{" == i ? 0 : m) : !r.align || h && ")" == r.type ? ")" != r.type || o ? r.indented + (o ? 0 : p) + (o || !s || /^(?:case|default)\b/.test(n) ? 0 : p) : r.indented + m : r.column + (o ? 0 : 1)
                },
                electricInput: _ ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
                blockCommentStart: "/*",
                blockCommentEnd: "*/",
                blockCommentContinue: " * ",
                lineComment: "//",
                fold: "brace"
            }
        });
        var E = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran",
            S = "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq",
            _ = "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available",
            T = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT",
            z = a("int long char short double float unsigned signed void bool"),
            M = a("SEL instancetype id Class Protocol BOOL"),
            C = "case do else for if switch while struct enum union",
            A = "struct enum union";
        b(["text/x-csrc", "text/x-c", "text/x-chdr"], {
            name: "clike",
            keywords: a(E),
            types: l,
            blockKeywords: a(C),
            defKeywords: a(A),
            typeFirstDefinitions: !0,
            atoms: a("NULL true false"),
            isReservedIdentifier: f,
            hooks: {
                "#": u,
                "*": d
            },
            modeProps: {
                fold: ["brace", "include"]
            }
        }), b(["text/x-c++src", "text/x-c++hdr"], {
            name: "clike",
            keywords: a(E + " " + S),
            types: l,
            blockKeywords: a(C + " class try catch"),
            defKeywords: a(A + " class namespace"),
            typeFirstDefinitions: !0,
            atoms: a("true false NULL nullptr"),
            dontIndentStatements: /^template$/,
            isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
            isReservedIdentifier: f,
            hooks: {
                "#": u,
                "*": d,
                u: m,
                U: m,
                L: m,
                R: m,
                0: p,
                1: p,
                2: p,
                3: p,
                4: p,
                5: p,
                6: p,
                7: p,
                8: p,
                9: p,
                token: function(e, t, n) {
                    if ("variable" == n && "(" == e.peek() && (";" == t.prevToken || null == t.prevToken || "}" == t.prevToken) && h(e.current())) return "def"
                }
            },
            namespaceSeparator: "::",
            modeProps: {
                fold: ["brace", "include"]
            }
        }), b("text/x-java", {
            name: "clike",
            keywords: a("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),
            types: a("byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
            blockKeywords: a("catch class do else finally for if switch try while"),
            defKeywords: a("class interface enum @interface"),
            typeFirstDefinitions: !0,
            atoms: a("true false null"),
            number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
            hooks: {
                "@": function(e) {
                    return !e.match("interface", !1) && (e.eatWhile(/[\w\$_]/), "meta")
                }
            },
            modeProps: {
                fold: ["brace", "import"]
            }
        }), b("text/x-csharp", {
            name: "clike",
            keywords: a("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
            types: a("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
            blockKeywords: a("catch class do else finally for foreach if struct switch try while"),
            defKeywords: a("class interface namespace struct var"),
            typeFirstDefinitions: !0,
            atoms: a("true false null"),
            hooks: {
                "@": function(e, t) {
                    return e.eat('"') ? (t.tokenize = g, g(e, t)) : (e.eatWhile(/[\w\$_]/), "meta")
                }
            }
        }), b("text/x-scala", {
            name: "clike",
            keywords: a("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),
            types: a("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
            multiLineStrings: !0,
            blockKeywords: a("catch class enum do else finally for forSome if match switch try while"),
            defKeywords: a("class enum def object package trait type val var"),
            atoms: a("true false null"),
            indentStatements: !1,
            indentSwitch: !1,
            isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
            hooks: {
                "@": function(e) {
                    return e.eatWhile(/[\w\$_]/), "meta"
                },
                '"': function(e, t) {
                    return !!e.match('""') && (t.tokenize = y, t.tokenize(e, t))
                },
                "'": function(e) {
                    return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom"
                },
                "=": function(e, n) {
                    var r = n.context;
                    return !("}" != r.type || !r.align || !e.eat(">")) && (n.context = new t(r.indented, r.column, r.type, r.info, null, r.prev), "operator")
                },
                "/": function(e, t) {
                    return !!e.eat("*") && (t.tokenize = x(1), t.tokenize(e, t))
                }
            },
            modeProps: {
                closeBrackets: {
                    pairs: '()[]{}""',
                    triples: '"'
                }
            }
        }), b("text/x-kotlin", {
            name: "clike",
            keywords: a("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),
            types: a("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),
            intendSwitch: !1,
            indentStatements: !1,
            multiLineStrings: !0,
            number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
            blockKeywords: a("catch class do else finally for if where try while enum"),
            defKeywords: a("class val var object interface fun"),
            atoms: a("true false null this"),
            hooks: {
                "@": function(e) {
                    return e.eatWhile(/[\w\$_]/), "meta"
                },
                "*": function(e, t) {
                    return "." == t.prevToken ? "variable" : "operator"
                },
                '"': function(e, t) {
                    return t.tokenize = v(e.match('""')), t.tokenize(e, t)
                },
                "/": function(e, t) {
                    return !!e.eat("*") && (t.tokenize = x(1), t.tokenize(e, t))
                },
                indent: function(e, t, n, r) {
                    var i = n && n.charAt(0);
                    return "}" != e.prevToken && ")" != e.prevToken || "" != n ? "operator" == e.prevToken && "}" != n && "}" != e.context.type || "variable" == e.prevToken && "." == i || ("}" == e.prevToken || ")" == e.prevToken) && "." == i ? 2 * r + t.indented : t.align && "}" == t.type ? t.indented + (e.context.type == (n || "").charAt(0) ? 0 : r) : void 0 : e.indented
                }
            },
            modeProps: {
                closeBrackets: {
                    triples: '"'
                }
            }
        }), b(["x-shader/x-vertex", "x-shader/x-fragment"], {
            name: "clike",
            keywords: a("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
            types: a("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
            blockKeywords: a("for while do if else struct"),
            builtin: a("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
            atoms: a("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
            indentSwitch: !1,
            hooks: {
                "#": u
            },
            modeProps: {
                fold: ["brace", "include"]
            }
        }), b("text/x-nesc", {
            name: "clike",
            keywords: a(E + " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
            types: l,
            blockKeywords: a(C),
            atoms: a("null true false"),
            hooks: {
                "#": u
            },
            modeProps: {
                fold: ["brace", "include"]
            }
        }), b("text/x-objectivec", {
            name: "clike",
            keywords: a(E + " " + _),
            types: c,
            builtin: a(T),
            blockKeywords: a(C + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
            defKeywords: a(A + " @interface @implementation @protocol @class"),
            dontIndentStatements: /^@.*$/,
            typeFirstDefinitions: !0,
            atoms: a("YES NO NULL Nil nil true false nullptr"),
            isReservedIdentifier: f,
            hooks: {
                "#": u,
                "*": d
            },
            modeProps: {
                fold: ["brace", "include"]
            }
        }), b("text/x-objectivec++", {
            name: "clike",
            keywords: a(E + " " + _ + " " + S),
            types: c,
            builtin: a(T),
            blockKeywords: a(C + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),
            defKeywords: a(A + " @interface @implementation @protocol @class class namespace"),
            dontIndentStatements: /^@.*$|^template$/,
            typeFirstDefinitions: !0,
            atoms: a("YES NO NULL Nil nil true false nullptr"),
            isReservedIdentifier: f,
            hooks: {
                "#": u,
                "*": d,
                u: m,
                U: m,
                L: m,
                R: m,
                0: p,
                1: p,
                2: p,
                3: p,
                4: p,
                5: p,
                6: p,
                7: p,
                8: p,
                9: p,
                token: function(e, t, n) {
                    if ("variable" == n && "(" == e.peek() && (";" == t.prevToken || null == t.prevToken || "}" == t.prevToken) && h(e.current())) return "def"
                }
            },
            namespaceSeparator: "::",
            modeProps: {
                fold: ["brace", "include"]
            }
        }), b("text/x-squirrel", {
            name: "clike",
            keywords: a("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
            types: l,
            blockKeywords: a("case catch class else for foreach if switch try while"),
            defKeywords: a("function local class"),
            typeFirstDefinitions: !0,
            atoms: a("true false null"),
            hooks: {
                "#": u
            },
            modeProps: {
                fold: ["brace", "include"]
            }
        });
        var L = null;
        b("text/x-ceylon", {
            name: "clike",
            keywords: a("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
            types: function(e) {
                var t = e.charAt(0);
                return t === t.toUpperCase() && t !== t.toLowerCase()
            },
            blockKeywords: a("case catch class dynamic else finally for function if interface module new object switch try while"),
            defKeywords: a("class dynamic function interface module object package value"),
            builtin: a("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
            isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
            isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
            numberStart: /[\d#$]/,
            number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
            multiLineStrings: !0,
            typeFirstDefinitions: !0,
            atoms: a("true false null larger smaller equal empty finished"),
            indentSwitch: !1,
            styleDefs: !1,
            hooks: {
                "@": function(e) {
                    return e.eatWhile(/[\w\$_]/), "meta"
                },
                '"': function(e, t) {
                    return t.tokenize = w(e.match('""') ? "triple" : "single"), t.tokenize(e, t)
                },
                "`": function(e, t) {
                    return !(!L || !e.match("`")) && (t.tokenize = L, L = null, t.tokenize(e, t))
                },
                "'": function(e) {
                    return e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom"
                },
                token: function(e, t, n) {
                    if (("variable" == n || "type" == n) && "." == t.prevToken) return "variable-2"
                }
            },
            modeProps: {
                fold: ["brace", "import"],
                closeBrackets: {
                    triples: '"'
                }
            }
        })
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../clike/clike")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../clike/clike"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";

        function t(e) {
            for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = !0;
            return t
        }

        function n(e) {
            (e.interpolationStack || (e.interpolationStack = [])).push(e.tokenize)
        }

        function r(e) {
            return (e.interpolationStack || (e.interpolationStack = [])).pop()
        }

        function i(e) {
            return e.interpolationStack ? e.interpolationStack.length : 0
        }

        function o(e, t, r, i) {
            function o(t, r) {
                for (var o = !1; !t.eol();) {
                    if (!i && !o && "$" == t.peek()) return n(r), r.tokenize = a, "string";
                    var l = t.next();
                    if (l == e && !o && (!s || t.match(e + e))) {
                        r.tokenize = null;
                        break
                    }
                    o = !i && !o && "\\" == l
                }
                return "string"
            }
            var s = !1;
            if (t.eat(e)) {
                if (!t.eat(e)) return "string";
                s = !0
            }
            return r.tokenize = o, o(t, r)
        }

        function a(e, t) {
            return e.eat("$"), e.eat("{") ? t.tokenize = null : t.tokenize = s, null
        }

        function s(e, t) {
            return e.eatWhile(/[\w_]/), t.tokenize = r(t), "variable"
        }

        function l(e) {
            return function(t, n) {
                for (var r; r = t.next();) {
                    if ("*" == r && t.eat("/")) {
                        if (1 == e) {
                            n.tokenize = null;
                            break
                        }
                        return n.tokenize = l(e - 1), n.tokenize(t, n)
                    }
                    if ("/" == r && t.eat("*")) return n.tokenize = l(e + 1), n.tokenize(t, n)
                }
                return "comment"
            }
        }
        var c = "this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required".split(" "),
            u = "try catch finally do else for if switch while".split(" "),
            d = "true false null".split(" "),
            f = "void bool num int double dynamic var String Null Never".split(" ");
        e.defineMIME("application/dart", {
            name: "clike",
            keywords: t(c),
            blockKeywords: t(u),
            builtin: t(f),
            atoms: t(d),
            hooks: {
                "@": function(e) {
                    return e.eatWhile(/[\w\$_\.]/), "meta"
                },
                "'": function(e, t) {
                    return o("'", e, t, !1)
                },
                '"': function(e, t) {
                    return o('"', e, t, !1)
                },
                r: function(e, t) {
                    var n = e.peek();
                    return ("'" == n || '"' == n) && o(e.next(), e, t, !0)
                },
                "}": function(e, t) {
                    return i(t) > 0 && (t.tokenize = r(t), null)
                },
                "/": function(e, t) {
                    return !!e.eat("*") && (t.tokenize = l(1), t.tokenize(e, t))
                },
                token: function(e, t, n) {
                    var r;
                    if ("variable" == n && RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$", "g").test(e.current())) return "variable-2"
                }
            }
        }), e.registerHelper("hintWords", "application/dart", c.concat(d).concat(f)), e.defineMode("dart", function(t) {
            return e.getMode(t, "application/dart")
        }, "clike")
    }),
    function(e) {
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
    }(function(e) {
        "use strict";
        e.overlayMode = function(t, n, r) {
            return {
                startState: function() {
                    return {
                        base: e.startState(t),
                        overlay: e.startState(n),
                        basePos: 0,
                        baseCur: null,
                        overlayPos: 0,
                        overlayCur: null,
                        streamSeen: null
                    }
                },
                copyState: function(r) {
                    return {
                        base: e.copyState(t, r.base),
                        overlay: e.copyState(n, r.overlay),
                        basePos: r.basePos,
                        baseCur: null,
                        overlayPos: r.overlayPos,
                        overlayCur: null
                    }
                },
                token: function(e, i) {
                    return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = n.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || r && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur
                },
                indent: t.indent && function(e, n, r) {
                    return t.indent(e.base, n, r)
                },
                electricChars: t.electricChars,
                innerMode: function(e) {
                    return {
                        state: e.base,
                        mode: t
                    }
                },
                blankLine: function(e) {
                    var i, o;
                    return t.blankLine && (i = t.blankLine(e.base)), n.blankLine && (o = n.blankLine(e.overlay)), null == o ? i : r && null != i ? i + " " + o : o
                }
            }
        }
    }),
    function(e) {
        "use strict";
        "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../../addon/mode/overlay"), require("../xml/xml"), require("../javascript/javascript"), require("../coffeescript/coffeescript"), require("../css/css"), require("../sass/sass"), require("../stylus/stylus"), require("../pug/pug"), require("../handlebars/handlebars")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../../addon/mode/overlay", "../xml/xml", "../javascript/javascript", "../coffeescript/coffeescript", "../css/css", "../sass/sass", "../stylus/stylus", "../pug/pug", "../handlebars/handlebars"], e) : e(CodeMirror)
    }(function(e) {
        var t = {
            script: [
                ["lang", /coffee(script)?/, "coffeescript"],
                ["type", /^(?:text|application)\/(?:x-)?coffee(?:script)?$/, "coffeescript"],
                ["lang", /^babel$/, "javascript"],
                ["type", /^text\/babel$/, "javascript"],
                ["type", /^text\/ecmascript-\d+$/, "javascript"]
            ],
            style: [
                ["lang", /^stylus$/i, "stylus"],
                ["lang", /^sass$/i, "sass"],
                ["lang", /^less$/i, "text/x-less"],
                ["lang", /^scss$/i, "text/x-scss"],
                ["type", /^(text\/)?(x-)?styl(us)?$/i, "stylus"],
                ["type", /^text\/sass/i, "sass"],
                ["type", /^(text\/)?(x-)?scss$/i, "text/x-scss"],
                ["type", /^(text\/)?(x-)?less$/i, "text/x-less"]
            ],
            template: [
                ["lang", /^vue-template$/i, "vue"],
                ["lang", /^pug$/i, "pug"],
                ["lang", /^handlebars$/i, "handlebars"],
                ["type", /^(text\/)?(x-)?pug$/i, "pug"],
                ["type", /^text\/x-handlebars-template$/i, "handlebars"],
                [null, null, "vue-template"]
            ]
        };
        e.defineMode("vue-template", function(t, n) {
            var r = {
                token: function(e) {
                    if (e.match(/^\{\{.*?\}\}/)) return "meta mustache";
                    for (; e.next() && !e.match("{{", !1););
                    return null
                }
            };
            return e.overlayMode(e.getMode(t, n.backdrop || "text/html"), r)
        }), e.defineMode("vue", function(n) {
            return e.getMode(n, {
                name: "htmlmixed",
                tags: t
            })
        }, "htmlmixed", "xml", "javascript", "coffeescript", "css", "sass", "stylus", "pug", "handlebars"), e.defineMIME("script/x-vue", "vue"), e.defineMIME("text/x-vue", "vue")
    }), window.HUB_EVENTS = {
        ASSET_ADDED: "ASSET_ADDED",
        ASSET_DELETED: "ASSET_DELETED",
        ASSET_DESELECTED: "ASSET_DESELECTED",
        ASSET_SELECTED: "ASSET_SELECTED",
        ASSET_UPDATED: "ASSET_UPDATED",
        CONSOLE_CHANGE: "CONSOLE_CHANGE",
        CONSOLE_CLOSED: "CONSOLE_CLOSED",
        CONSOLE_EVENT: "CONSOLE_EVENT",
        CONSOLE_OPENED: "CONSOLE_OPENED",
        CONSOLE_RUN_COMMAND: "CONSOLE_RUN_COMMAND",
        CONSOLE_SERVER_CHANGE: "CONSOLE_SERVER_CHANGE",
        EMBED_ACTIVE_PEN_CHANGE: "EMBED_ACTIVE_PEN_CHANGE",
        EMBED_ACTIVE_THEME_CHANGE: "EMBED_ACTIVE_THEME_CHANGE",
        EMBED_ATTRIBUTE_CHANGE: "EMBED_ATTRIBUTE_CHANGE",
        EMBED_RESHOWN: "EMBED_RESHOWN",
        FORMAT_FINISH: "FORMAT_FINISH",
        FORMAT_ERROR: "FORMAT_ERROR",
        FORMAT_START: "FORMAT_START",
        IFRAME_PREVIEW_RELOAD_CSS: "IFRAME_PREVIEW_RELOAD_CSS",
        IFRAME_PREVIEW_URL_CHANGE: "IFRAME_PREVIEW_URL_CHANGE",
        KEY_PRESS: "KEY_PRESS",
        LINTER_FINISH: "LINTER_FINISH",
        LINTER_START: "LINTER_START",
        PEN_CHANGE_SERVER: "PEN_CHANGE_SERVER",
        PEN_CHANGE: "PEN_CHANGE",
        PEN_EDITOR_CLOSE: "PEN_EDITOR_CLOSE",
        PEN_EDITOR_CODE_FOLD: "PEN_EDITOR_CODE_FOLD",
        PEN_EDITOR_ERRORS: "PEN_EDITOR_ERRORS",
        PEN_EDITOR_EXPAND: "PEN_EDITOR_EXPAND",
        PEN_EDITOR_FOLD_ALL: "PEN_EDITOR_FOLD_ALL",
        PEN_EDITOR_LOADED: "PEN_EDITOR_LOADED",
        PEN_EDITOR_REFRESH_REQUEST: "PEN_EDITOR_REFRESH_REQUEST",
        PEN_EDITOR_RESET_SIZES: "PEN_EDITOR_RESET_SIZES",
        PEN_EDITOR_SIZES_CHANGE: "PEN_EDITOR_SIZES_CHANGE",
        PEN_EDITOR_UI_CHANGE_SERVER: "PEN_EDITOR_UI_CHANGE_SERVER",
        PEN_EDITOR_UI_CHANGE: "PEN_EDITOR_UI_CHANGE",
        PEN_EDITOR_UI_DISABLE: "PEN_EDITOR_UI_DISABLE",
        PEN_EDITOR_UI_ENABLE: "PEN_EDITOR_UI_ENABLE",
        PEN_EDITOR_UNFOLD_ALL: "PEN_EDITOR_UNFOLD_ALL",
        PEN_ERROR_INFINITE_LOOP: "PEN_ERROR_INFINITE_LOOP",
        PEN_ERROR_RUNTIME: "PEN_ERROR_RUNTIME",
        PEN_ERRORS: "PEN_ERRORS",
        PEN_LIVE_CHANGE: "PEN_LIVE_CHANGE",
        PEN_LOGS: "PEN_LOGS",
        PEN_MANIFEST_CHANGE: "PEN_MANIFEST_CHANGE",
        PEN_MANIFEST_FULL: "PEN_MANIFEST_FULL",
        PEN_PREVIEW_FINISH: "PEN_PREVIEW_FINISH",
        PEN_PREVIEW_START: "PEN_PREVIEW_START",
        PEN_SAVED: "PEN_SAVED",
        POPUP_CLOSE: "POPUP_CLOSE",
        POPUP_OPEN: "POPUP_OPEN",
        POST_CHANGE: "POST_CHANGE",
        POST_SAVED: "POST_SAVED",
        PROCESSING_FINISH: "PROCESSING_FINISH",
        PROCESSING_START: "PROCESSED_STARTED"
    },
    function() {
        function e() {
            t(), n(), r(), i(), window.__browser && "ios" === window.__browser.platform && document.addEventListener("DOMContentLoaded", function() {
                document.body.classList.add("ios-scroll-fix")
            }, !1), q.classList.contains("active") && document.body.classList.add(_), a(), p()
        }

        function t() {
            var e, t;
            for (R = document.getElementById("result-iframe"), q = document.getElementById("result-link"), B = document.getElementById("result-box"), H = document.getElementById("rerun-button"), P = document.getElementById("output"), $ = document.getElementById("resources-box"), U = document.getElementById("resources-link"), e = 0; e < z.length; e++)(t = document.getElementById(z[e])) && L.push(t);
            for (e = 0; e < M.length; e++)(t = document.getElementById(M[e])) && D.push(t);
            for (e = 0; e < C.length; e++)(t = document.getElementById(C[e])) && N.push(t);
            for (e = 0; e < A.length; e++)(t = document.getElementById(A[e])) && I.push(t)
        }

        function n() {
            R && "" === R.src ? q.onmouseover = s : K = !0;
            for (var e = 0; e < L.length; e++) L[e].onclick = d;
            for (U.addEventListener("click", function(e) {
                    e.preventDefault(), k()
                }), q.addEventListener("click", function(e) {
                    e.preventDefault(), l(e)
                }), H.addEventListener("click", function(e) {
                    e.preventDefault(), g()
                }), e = 0; e < N.length; e++) N[e].addEventListener("click", function(e) {
                e.preventDefault(), y(e.target)
            });
            for (e = 0; e < I.length; e++) I[e].addEventListener("click", function(e) {
                e.preventDefault(), x(e.target.getAttribute("data-type"))
            });
            window.addEventListener("resize", function() {
                p()
            })
        }

        function r() {
            var e = document.getElementById("actual-html-code"),
                t = document.getElementById("actual-css-code"),
                n = document.getElementById("actual-js-code");
            Y.html = e ? e.innerHTML : "", Y.css = t ? t.innerHTML : "", Y.js = n ? n.innerHTML : ""
        }

        function i() {
            const e = document.querySelectorAll("code[data-lang]");
            0 !== e.length && CodeMirror.colorize(e, "javascript")
        }

        function o(e) {
            CodeMirror.colorize([e], "javascript")
        }

        function a() {
            R && (W = R.getAttribute("data-src"))
        }

        function s() {
            if (!K) {
                var e = R.getAttribute("data-src") || "";
                e.length > 0 && (R.src = e), q.onmouseover = null, K = !0
            }
        }

        function l(e) {
            s(), k(!1), !0 !== G ? (u(!q.classList.contains("active")), h()) : f(e)
        }

        function c() {
            for (var e = 0; e < L.length; e++) L[e].classList.remove("active"), L[e].setAttribute(T, !1);
            for (e = 0; e < D.length; e++) D[e].classList.remove("active")
        }

        function u(e) {
            var t = e ? "add" : "remove";
            q.setAttribute(T, !!e), q.classList[t]("active"), B.classList[t]("active"), document.body.classList[t](_)
        }

        function d(e) {
            if (e.preventDefault(), !0 !== G) {
                var t = !0,
                    n;
                if (this.classList.contains("active") && (t = !1), c(), k(!1), t) this.className = "active", this.setAttribute(T, !0), document.getElementById(this.id.replace("link", "box")).classList.add("active");
                h()
            } else f(e)
        }

        function f(e) {
            var t = !0,
                n;
            (e.target.classList.contains("active") && (t = !1), u(!1), c(), t) && ("result-link" === e.target.id && document.body.classList.add(_), e.target.className = "active", e.target.setAttribute(T, !0), document.getElementById(e.target.id.replace("link", "box")).classList.add("active"));
            h()
        }

        function p() {
            var e = window.innerWidth,
                t;
            0 !== e && (e <= Z ? (G = !0, P.querySelectorAll(".active").length > 0 && (document.body.className = "codepen-embed-body single-output", q.classList.contains("active") && document.body.classList.add(_), !1 === window.__editable && document.body.classList.add("static")), m()) : (G = !1, q.classList.contains("active") && document.body.classList.add(_)))
        }

        function m() {
            var e = document.querySelector(".active");
            e && ("result-link" !== e.id && u(!1), c(), e.classList.add("active"), document.getElementById(e.id.replace("link", "box")).classList.add("active"))
        }

        function h() {
            document.body.classList.remove("about-output", "single-output", "split-output", "static");
            var e = document.querySelectorAll(".embed-nav .active").length;
            0 === e ? document.body.classList.add("about-output") : 1 === e ? document.body.classList.add("single-output") : e >= 2 && document.body.classList.add("split-output"), window.__editable ? Hub.pub(HUB_EVENTS.PEN_EDITOR_REFRESH_REQUEST, 0) : document.body.classList.add("static")
        }

        function g() {
            if (window.CP && window.CP.renderPen) window.CP.renderPen(!0);
            else if (W) {
                var e = W.replace("animations=stop-after-5", "animations=run");
                R.src = e + "&forceRefresh=" + (new Date).getTime()
            }
        }

        function k(e) {
            var t = (V = e !== undefined ? e : !V) ? "add" : "remove";
            $.classList[t]("active"), U.classList[t]("active"), U.setAttribute(T, V)
        }

        function b() {
            for (var e = 0; e < N.length; e++) N[e].classList.remove("active")
        }

        function y(e) {
            var t;
            switch (b(), e.classList.add("active"), B.classList.remove("zoom-1", "zoom-05", "zoom-025"), e.innerText) {
                case "0.25\xd7":
                    t = "zoom-025";
                    break;
                case "0.5\xd7":
                    t = "zoom-05";
                    break;
                default:
                    t = "zoom-1"
            }
            B.classList.add(t)
        }

        function x(e) {
            X[e] = !X[e], v(e), E(e), S(e)
        }

        function v(e) {
            let t = document.getElementById("actual-" + e + "-code");
            t && (t.innerHTML = X[e] ? F[e] : Y[e], w(t, e), o(t))
        }

        function w(e, t) {
            let n = X[t] ? t : j[t],
                r = EditorModes.getCMMode(n, t);
            e.setAttribute("data-lang", r.name || r)
        }

        function E(e) {
            let t = document.getElementById("view-" + e + "-compiled-button");
            t && (t.innerHTML = X[e] ? "View " + O[e] + " Code" : "View Compiled")
        }

        function S(e) {
            let t = document.getElementById(e + "-link");
            t && (t.innerHTML = X[e] ? e.toUpperCase() : O[e])
        }
        const _ = "results-active",
            T = "aria-pressed";
        var z = ["html-link", "css-link", "js-link"],
            M = ["html-box", "css-box", "js-box"],
            C = ["zoom-button-1", "zoom-button-05", "zoom-button-025"],
            A = ["view-html-compiled-button", "view-css-compiled-button", "view-js-compiled-button"],
            L = [],
            D = [],
            N = [],
            I = [],
            j = window.__preprocessors,
            O = window.__preprocessorNames,
            F = window.__processedPen,
            P, R, q, B, $, U, H, V = !1,
            W = null,
            K = !1,
            G = !0,
            Z = 540,
            Y = {
                html: null,
                css: null,
                js: null
            };
        let X = {};
        e()
    }();