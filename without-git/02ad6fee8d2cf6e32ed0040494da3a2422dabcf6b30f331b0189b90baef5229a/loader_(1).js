/*! For license information please see loader.template.js.LICENSE.txt */
(() => {
    var t = {
            228: t => {
                t.exports = function() {
                    var t = !1; - 1 !== navigator.appVersion.indexOf("MSIE 10") && (t = !0);
                    var e, n = [],
                        o = "object" == typeof document && document,
                        r = t ? o.documentElement.doScroll("left") : o.documentElement.doScroll,
                        i = "DOMContentLoaded",
                        s = o && (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
                    return !s && o && o.addEventListener(i, e = function() {
                            for (o.removeEventListener(i, e), s = 1; e = n.shift();) e()
                        }),
                        function(t) {
                            s ? setTimeout(t, 0) : n.push(t)
                        }
                }()
            },
            412: (t, e, n) => {
                "use strict";
                n.r(e);
                const o = function(t) {
                        var e = this.constructor;
                        return this.then((function(n) {
                            return e.resolve(t()).then((function() {
                                return n
                            }))
                        }), (function(n) {
                            return e.resolve(t()).then((function() {
                                return e.reject(n)
                            }))
                        }))
                    },
                    r = function(t) {
                        return new this((function(e, n) {
                            if (!t || void 0 === t.length) return n(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                            var o = Array.prototype.slice.call(t);
                            if (0 === o.length) return e([]);
                            var r = o.length;

                            function i(t, n) {
                                if (n && ("object" == typeof n || "function" == typeof n)) {
                                    var s = n.then;
                                    if ("function" == typeof s) return void s.call(n, (function(e) {
                                        i(t, e)
                                    }), (function(n) {
                                        o[t] = {
                                            status: "rejected",
                                            reason: n
                                        }, 0 == --r && e(o)
                                    }))
                                }
                                o[t] = {
                                    status: "fulfilled",
                                    value: n
                                }, 0 == --r && e(o)
                            }
                            for (var s = 0; s < o.length; s++) i(s, o[s])
                        }))
                    };
                var i = setTimeout,
                    s = "undefined" != typeof setImmediate ? setImmediate : null;

                function a(t) {
                    return Boolean(t && void 0 !== t.length)
                }

                function c() {}

                function u(t) {
                    if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(t, this)
                }

                function p(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    0 !== t._state ? (t._handled = !0, u._immediateFn((function() {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                            var o;
                            try {
                                o = n(t._value)
                            } catch (t) {
                                return void f(e.promise, t)
                            }
                            l(e.promise, o)
                        } else(1 === t._state ? l : f)(e.promise, t._value)
                    }))) : t._deferreds.push(e)
                }

                function l(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof u) return t._state = 3, t._value = e, void d(t);
                            if ("function" == typeof n) return void y((o = n, r = e, function() {
                                o.apply(r, arguments)
                            }), t)
                        }
                        t._state = 1, t._value = e, d(t)
                    } catch (e) {
                        f(t, e)
                    }
                    var o, r
                }

                function f(t, e) {
                    t._state = 2, t._value = e, d(t)
                }

                function d(t) {
                    2 === t._state && 0 === t._deferreds.length && u._immediateFn((function() {
                        t._handled || u._unhandledRejectionFn(t._value)
                    }));
                    for (var e = 0, n = t._deferreds.length; e < n; e++) p(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function h(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                }

                function y(t, e) {
                    var n = !1;
                    try {
                        t((function(t) {
                            n || (n = !0, l(e, t))
                        }), (function(t) {
                            n || (n = !0, f(e, t))
                        }))
                    } catch (t) {
                        if (n) return;
                        n = !0, f(e, t)
                    }
                }
                u.prototype.catch = function(t) {
                    return this.then(null, t)
                }, u.prototype.then = function(t, e) {
                    var n = new this.constructor(c);
                    return p(this, new h(t, e, n)), n
                }, u.prototype.finally = o, u.all = function(t) {
                    return new u((function(e, n) {
                        if (!a(t)) return n(new TypeError("Promise.all accepts an array"));
                        var o = Array.prototype.slice.call(t);
                        if (0 === o.length) return e([]);
                        var r = o.length;

                        function i(t, s) {
                            try {
                                if (s && ("object" == typeof s || "function" == typeof s)) {
                                    var a = s.then;
                                    if ("function" == typeof a) return void a.call(s, (function(e) {
                                        i(t, e)
                                    }), n)
                                }
                                o[t] = s, 0 == --r && e(o)
                            } catch (t) {
                                n(t)
                            }
                        }
                        for (var s = 0; s < o.length; s++) i(s, o[s])
                    }))
                }, u.allSettled = r, u.resolve = function(t) {
                    return t && "object" == typeof t && t.constructor === u ? t : new u((function(e) {
                        e(t)
                    }))
                }, u.reject = function(t) {
                    return new u((function(e, n) {
                        n(t)
                    }))
                }, u.race = function(t) {
                    return new u((function(e, n) {
                        if (!a(t)) return n(new TypeError("Promise.race accepts an array"));
                        for (var o = 0, r = t.length; o < r; o++) u.resolve(t[o]).then(e, n)
                    }))
                }, u._immediateFn = "function" == typeof s && function(t) {
                    s(t)
                } || function(t) {
                    i(t, 0)
                }, u._unhandledRejectionFn = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                };
                const m = u;
                var v = function() {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== n.g) return n.g;
                    throw new Error("unable to locate global object")
                }();
                "function" != typeof v.Promise ? v.Promise = m : (v.Promise.prototype.finally || (v.Promise.prototype.finally = o), v.Promise.allSettled || (v.Promise.allSettled = r))
            },
            42: (t, e, n) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.SmartsuppLoader = void 0;
                var o = n(521),
                    r = n(416),
                    i = n(35),
                    s = function() {
                        function t(t) {
                            this.options = t, this.widgets = {}
                        }
                        return t.prototype.setDefaults = function(t) {
                            return this.options = (0, r.mergeDeep)(this.options, t), this
                        }, t.prototype.getChat = function(t) {
                            return this.widgets[t]
                        }, t.prototype.getWidget = function(t) {
                            return this.widgets[t]
                        }, t.prototype.create = function(t, e, n, s) {
                            var c = (0, r.mergeDeep)(this.options, e);
                            a(c);
                            var u = this.widgets[t] = new i.SmartsuppWidget(t, c, n);
                            return u._initPromise = (0, r.request)("".concat(c.bootstrapUrl, "/widget/").concat(c.key, ".json")).then((function(t) {
                                var n = (0, r.parseJSON)(t);
                                return delete e.features, u.init((0, r.mergeDeep)(n, n.config, e), n.features), e && e.key && (0, o.trackOptions)(u.options, Object.keys(e)), s && s(void 0, u), u.options.renderTo && u.render(u.options.renderTo), null
                            })).catch((function(t) {
                                s && s(t)
                            })), u
                        }, t.prototype.createWidget = function(t, e, n) {
                            var s = this,
                                c = (0, r.mergeDeep)(this.options, e);
                            return a(c), (0, r.request)("".concat(c.bootstrapUrl, "/widget/").concat(c.key, ".json")).then((function(a) {
                                var u = (0, r.parseJSON)(a),
                                    p = s.widgets[t] = new i.SmartsuppWidget(t, c, n);
                                return delete e.features, p.init((0, r.mergeDeep)(u, u.config, e), u.features), e && e.key && (0, o.trackOptions)(p.options, Object.keys(e)), p
                            }))
                        }, t
                    }();
                e.SmartsuppLoader = s;
                var a = function(t) {
                    if (!t.bootstrapUrl) throw new Error("Missing option bootstrapUrl");
                    if (!t.key) throw new Error("Missing option key")
                }
            },
            521: function(t, e, n) {
                "use strict";
                var o = this && this.__awaiter || function(t, e, n, o) {
                        return new(n || (n = Promise))((function(r, i) {
                            function s(t) {
                                try {
                                    c(o.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function a(t) {
                                try {
                                    c(o.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                    t(e)
                                }))).then(s, a)
                            }
                            c((o = o.apply(t, e || [])).next())
                        }))
                    },
                    r = this && this.__generator || function(t, e) {
                        var n, o, r, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function a(i) {
                            return function(a) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return s.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++, o = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    s.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    s.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(i);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        i = e.call(t, s)
                                    } catch (t) {
                                        i = [6, t], o = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, a])
                            }
                        }
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.trackOptions = e.trackOperation = void 0;
                var i = n(416);
                e.trackOperation = function(t, e) {
                    return o(this, void 0, void 0, (function() {
                        return r(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [2, !1];
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, (0, i.request)(t.widgetTrackerUrl + "/track/operation?key=".concat(t.key, "&operation=").concat(e, "&domain=").concat(window.location.hostname))];
                                case 2:
                                    return n.sent(), [2, !0];
                                case 3:
                                    return n.sent(), [2, !1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, e.trackOptions = function(t, e) {
                    return o(this, void 0, void 0, (function() {
                        return r(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [2, !1];
                                case 1:
                                    return e.trys.push([1, 3, , 4]), [4, (0, i.request)(t.widgetTrackerUrl + "/track/options?key=".concat(t.key, "&options=").concat(undefined.join(","), "&domain=").concat(window.location.hostname))];
                                case 2:
                                    return e.sent(), [2, !0];
                                case 3:
                                    return e.sent(), [2, !1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }
            },
            416: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.parseJSON = e.request = e.createScript = e.resolveTargetElement = e.getFrameDocument = e.mergeDeep = void 0;
                var n = function(t) {
                    return t && "object" == typeof t
                };
                e.mergeDeep = function() {
                    for (var t = [], o = 0; o < arguments.length; o++) t[o] = arguments[o];
                    var r = {};
                    return t.forEach((function(t) {
                        Object.keys(t).forEach((function(o) {
                            var i = r[o],
                                s = t[o];
                            void 0 !== s && (Array.isArray(i) || Array.isArray(s) ? r[o] = s : n(i) && n(s) ? r[o] = (0, e.mergeDeep)(i, s) : r[o] = s)
                        }))
                    })), r
                }, e.getFrameDocument = function(t) {
                    return t.contentWindow && t.contentWindow.document || t.contentDocument
                }, e.resolveTargetElement = function(t) {
                    return t instanceof Element ? t : "string" == typeof t ? document.getElementById(t) : document.getElementsByTagName("body")[0]
                }, e.createScript = function(t, e) {
                    var n = t.createElement("script");
                    return n.type = "text/javascript", n.charset = "utf-8", e && (n.src = e), n
                }, e.request = function(t) {
                    var e = new XMLHttpRequest;
                    return new Promise((function(n, o) {
                        e.onreadystatechange = function() {
                            4 === e.readyState && (e.status >= 200 && e.status < 300 ? n(e.response) : o(new Error("Request failed with status ".concat(e.status))))
                        }, e.open("GET", t, !0), e.setRequestHeader("Content-Type", "text/plain"), e.send()
                    }))
                }, e.parseJSON = function(t) {
                    if (JSON.parse) return JSON.parse(t);
                    if (JSON.decode) return JSON.decode(t);
                    throw new Error("Unable to parse json.")
                }
            },
            35: function(t, e, n) {
                "use strict";
                var o = this && this.__assign || function() {
                        return o = Object.assign || function(t) {
                            for (var e, n = 1, o = arguments.length; n < o; n++)
                                for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t
                        }, o.apply(this, arguments)
                    },
                    r = this && this.__awaiter || function(t, e, n, o) {
                        return new(n || (n = Promise))((function(r, i) {
                            function s(t) {
                                try {
                                    c(o.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function a(t) {
                                try {
                                    c(o.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                    t(e)
                                }))).then(s, a)
                            }
                            c((o = o.apply(t, e || [])).next())
                        }))
                    },
                    i = this && this.__generator || function(t, e) {
                        var n, o, r, i, s = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: a(0),
                            throw: a(1),
                            return: a(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function a(i) {
                            return function(a) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return s.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++, o = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                    s.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    s.label = r[1], r = i;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(i);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        i = e.call(t, s)
                                    } catch (t) {
                                        i = [6, t], o = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, a])
                            }
                        }
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.SmartsuppWidget = void 0;
                var s = n(521),
                    a = n(416),
                    c = window,
                    u = function() {
                        function t(t, e, n) {
                            if (void 0 === n && (n = []), this.id = t, this.options = e, this._pushApi = n, this.rendered = !1, this.api = null, this.el = null, this.frame = null, this.version = 2, this.initialized = !1, !e.bootstrapUrl) throw new Error("Missing option bootstrapUrl");
                            if (!e.key) throw new Error("Missing option key")
                        }
                        return t.prototype.setOptions = function(t) {
                            return this.options = (0, a.mergeDeep)(this.options, t), this.features && (this.features.rating || (this.options.ratingEnabled = !1), this.features.groups || (this.options.groupSelectEnabled = !1), this.features.customize || (this.options.hideWidget = !1, this.options.hideOfflineChat = !1, this.options.numberControl = !1, this.options.requireLogin = !1, this.options.privacyNoticeEnabled = !0)), this
                        }, t.prototype.init = function(t, e) {
                            var n = this;
                            this.features = e, this.setOptions(t), this.initialized = !0, "auto" === this.options.position && (this.options.position = this.options.renderTo ? "relative" : "fixed"), this._pushApi && this._pushApi.forEach((function(t) {
                                "recording:disable" === t[0] ? n.options.recordingDisable = !0 : "recording:off" === t[0] && (n.options.recordingOff = !0)
                            }))
                        }, t.prototype.createContainer = function() {
                            var t = document.createElement("div");
                            return t.id = "".concat(this.id, "-application"), t.setAttribute("style", "display: none"), this.options.zIndex && (t.style.zIndex = "".concat(this.options.zIndex + 1)), t.style.position = this.options.position, t
                        }, t.prototype.createFrame = function() {
                            var t = document.createElement("iframe");
                            return t.id = "".concat(this.id, "-application-iframe"), t.setAttribute("title", "Smartsupp"), t.setAttribute("aria-hidden", "true"), t.setAttribute("style", "width: 100%; height: 100%; border: none; position: absolute; left: 0"), this.options.zIndex && (t.style.zIndex = "".concat(this.options.zIndex + 1)), t
                        }, t.prototype.render = function(t) {
                            return r(this, void 0, void 0, (function() {
                                var e;
                                return i(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return document.getElementById(this.id + "-application") ? [2] : this._initPromise ? [4, this._initPromise] : [3, 2];
                                        case 1:
                                            n.sent(), n.label = 2;
                                        case 2:
                                            if (!this.initialized) throw new Error("failed to initialize widget");
                                            if (!t && this.options.renderTo && (t = this.options.renderTo), t && (this.options.zIndex = null), !(e = (0, a.resolveTargetElement)(t))) throw new Error("target element not found");
                                            return this.el = this.createContainer(), this.renderFrame(this.el, e), this.rendered = !0, [2]
                                    }
                                }))
                            }))
                        }, t.prototype.renderFrame = function(t, e) {
                            var n = this,
                                o = this.frame = this.createFrame();
                            o.addEventListener("load", (function() {
                                var t, e, s = null !== (t = o.contentDocument) && void 0 !== t ? t : null === (e = o.contentWindow) || void 0 === e ? void 0 : e.document;
                                if (!s) throw new Error("Cannot find Document");
                                var c = s.getElementsByTagName("head")[0],
                                    u = s.getElementsByTagName("body")[0];
                                u.id = "body", u.dataset.smartsuppId = n.id, u.innerHTML = '<div id="root"></div>', r(n, void 0, void 0, (function() {
                                    var t = this;
                                    return i(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, (0, a.request)("".concat(this.getBaseUrl(), "/asset-manifest.json")).then((function(t) {
                                                    return (0, a.parseJSON)(t)
                                                }))];
                                            case 1:
                                                return e.sent().entrypoints.forEach((function(e) {
                                                    var n = (0, a.createScript)(s, t.getBaseUrl() + "/".concat(e));
                                                    c.appendChild(n)
                                                })), [2]
                                        }
                                    }))
                                }))
                            })), t.appendChild(o), e.childNodes.length > 0 ? e.insertBefore(t, e.childNodes[0]) : e.appendChild(t)
                        }, t.prototype.destroy = function() {
                            this.el && this.el.parentNode && (this.el.parentNode.removeChild(this.el), this.el = null)
                        }, t.prototype.getOption = function(t, e) {
                            return void 0 !== this.options[t] ? this.options[t] : e
                        }, t.prototype.getBaseUrl = function() {
                            return this.options.widgetV2Url
                        }, t.prototype.getInternalApiUrl = function() {
                            return "".concat(this.options.bootstrapUrl, "/widget/").concat(this.options.key, "/code.js")
                        }, t.prototype.exec = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this._pushApi.push(t)
                        }, t.prototype.installApi = function(t) {
                            var e = this;
                            if (this.api = t, c.smartsupp.api = t, this._pushApi && (this._pushApi.forEach((function(n) {
                                    var o = Array.prototype.slice.call(n, 0);
                                    try {
                                        e.options.widgetTrackerEnabled && (0, s.trackOperation)(e.options, o[0]), t.execute(o)
                                    } catch (t) {
                                        console.log(t)
                                    }
                                })), this._pushApi.push = function(n) {
                                    var o = Array.prototype.slice.call(n, 0);
                                    try {
                                        e.options.widgetTrackerEnabled && (0, s.trackOperation)(e.options, o[0]), t.execute(o)
                                    } catch (t) {
                                        console.log(t)
                                    }
                                }), this.options.onStartup) try {
                                this.options.onStartup(t)
                            } catch (t) {
                                console.log(t)
                            }
                        }, t.prototype.initPlugins = function() {
                            this.options.smartlook && this.isAllowedSmartlook() && this.initSmartlook(o(o({}, this.options.smartlook), {
                                cookieDomain: this.options.cookieDomain,
                                cookiePath: this.options.cookiePath
                            }))
                        }, t.prototype.isAllowedSmartlook = function() {
                            return !(c.smartlook || !this.options.smartlook || !this.options.smartlook.enabled || this.options.recordingOff)
                        }, t.prototype.initSmartlook = function(t) {
                            var e = this;
                            this.smartlook = c.smartlook = function() {
                                c.smartlook.api.push(arguments)
                            }, c.smartlook.api = [];
                            var n = window.document.getElementsByTagName("head")[0],
                                o = window.document.createElement("script");
                            o.async = !0, o.type = "text/javascript", o.charset = "utf-8", o.crossOrigin = "anonymous", o.src = t.scriptUrl, n.appendChild(o), this.smartlook("init", t.key, {
                                host: t.serverHost,
                                cookieDomain: t.cookieDomain,
                                cookiePath: t.cookiePath
                            }), this.smartlook("expertForms"), this.smartlook("expertAPI"), this.options.recordingDisable ? this.smartlook("disable") : this.smartlook((function() {
                                e.exec("variables", {
                                    smartlook_vid: e.smartlook.visitorId
                                })
                            }))
                        }, t
                    }();
                e.SmartsuppWidget = u
            }
        },
        e = {};

    function n(o) {
        var r = e[o];
        if (void 0 !== r) return r.exports;
        var i = e[o] = {
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";
        n(412);
        var t = n(228),
            e = n(42);
        if (window.smartsupp || (window.smartsupp = function() {
                window.smartsupp._.push(arguments)
            }, window.smartsupp._ = []), !window.SMARTSUPP_LOADED) {
            window.SMARTSUPP_LOADED = !0, window.$smartsupp = new e.SmartsuppLoader({
                widgetVersion: 1,
                bootstrapUrl: "https://bootstrap.smartsuppchat.com",
                filesUrl: "https://files.smartsuppcdn.com",
                widgetV2Url: "https://widget-v2.smartsuppcdn.com",
                zIndex: 1e7,
                position: "auto",
                orientation: "right",
                autoInlineMode: !0
            }), window.smartsupp.chats = window.$smartsupp.widgets;
            for (var o = 0, r = ["create", "createWidget", "getChat", "getWidget", "setDefaults"]; o < r.length; o++) {
                var i = r[o];
                window.smartsupp[i] = window.$smartsupp[i].bind(window.$smartsupp)
            }!1 !== window.SMARTSUPP_AUTOCREATE && t((function() {
                window.smartsupp("html:apply", document), window.$smartsupp.createWidget("chat", window._smartsupp, window.smartsupp._).then((function(t) {
                    return t.initPlugins(), t.render()
                })).catch((function(t) {
                    console.warn(t)
                }))
            }))
        }
    })()
})();