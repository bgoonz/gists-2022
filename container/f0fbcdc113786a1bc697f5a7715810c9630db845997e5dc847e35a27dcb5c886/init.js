! function() {
    var t = "https://widget.stackbit.com",
        e = "https://app.stackbit.com";

    function r(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var r = [],
                i = !0,
                n = !1,
                c = void 0;
            try {
                for (var a, o = t[Symbol.iterator](); !(i = (a = o.next()).done) && (r.push(a.value), !e || r.length !== e); i = !0);
            } catch (t) {
                n = !0, c = t
            } finally {
                try {
                    i || null == o.return || o.return()
                } finally {
                    if (n) throw c
                }
            }
            return r
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var i, n, c = /[?&](widget|stackbit)(=|&|$)/i.test(location.search),
        a = /\/admin(?:\/|$)/i.test(location.pathname),
        o = !0,
        s = !1,
        u = !1;
    try {
        s = localStorage.getItem("stackbit-widget.show"), u = sessionStorage.getItem("stackbit-widget.snippet")
    } catch (t) {
        o = !1, t.toString().includes("SecurityError") && (u = !0)
    }
    if (!a) {
        var l = function(t) {
            var e = t.href,
                r = t.as,
                i = document.createElement("link");
            i.setAttribute("rel", "preload"), i.setAttribute("href", e), i.setAttribute("as", r), document.head.appendChild(i)
        };
        if (c || s || u) {
            var d = (i = location.search, (n = "?" === i[0] ? i.slice(1) : i) ? n.split("&").reduce(function(t, e) {
                    var i = r(e.split("="), 2),
                        n = i[0],
                        c = i[1],
                        a = void 0 === c ? "" : c;
                    return t[n.trim()] = a.trim(), t
                }, {}) : {}),
                p = document.getElementById("stackbit-widget-init"),
                m = function(e) {
                    if (!e) return t;
                    var r = document.createElement("a");
                    return r.href = e, r.origin
                }(p.getAttribute("src")),
                f = d.stackbitWidgetVersion || o && sessionStorage.getItem("stackbit-widget.version");
            if (f) {
                o && sessionStorage.setItem("stackbit-widget.version", f), m = "https://".concat(f, "--stackbitwidget.netlify.com"), p.setAttribute("src", "".concat(m, "/init.js")), delete d.stackbitWidgetVersion;
                var g = function(t) {
                    var e = Object.keys(t).map(function(e) {
                        return "".concat(e, "=").concat(t[e])
                    }).join("&");
                    return location.origin + location.pathname + (e ? "?".concat(e) : "")
                }(d);
                window.history.replaceState({}, document.title, g), console.log("%cStackbit", "color: #3398DB", "Loading ".concat(f))
            }
            var b = document.getElementsByTagName("script")[0];
            if ("false" === d.stackbit || u) {
                var h = document.createElement("script");
                h.setAttribute("defer", "true"), h.setAttribute("src", "".concat(e, "/snippet.js")), b.parentElement.insertBefore(h, b), o && sessionStorage.setItem("stackbit-widget.snippet", "true"), "Append snippet from ".concat(m)
            } else {
                l({
                    href: "".concat(m, "/widget.css"),
                    as: "style"
                }), l({
                    href: "".concat(m, "/widget.js"),
                    as: "script"
                });
                var v = document.createElement("script");
                v.setAttribute("defer", "true"), v.setAttribute("src", "".concat(m, "/bootstrap.js")), b.parentElement.insertBefore(v, b), "Append bootstrap from ".concat(m)
            }
        }
    }
}();