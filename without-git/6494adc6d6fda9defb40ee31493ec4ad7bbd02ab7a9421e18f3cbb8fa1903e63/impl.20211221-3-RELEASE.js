/*! 20211221-3-RELEASE */

! function(e) {
    e.TRC = e.TRC || {}, e.TRC.sharedObjects = e.TRC.sharedObjects || {}, e.TRC.sharedObjects.loadedScripts = e.TRC.sharedObjects.loadedScripts || {}, e.TRC.sharedObjects.loadedPixels = e.TRC.sharedObjects.loadedPixels || {}
}(window),
function() {
    var win, doc;
    ((e, t, r) => {
        const i = "trc_modal_hidden",
            o = "trc_modal_mask",
            n = "trc_modal_dialog",
            s = "trc_close_modal",
            a = t.createElement("div"),
            l = t.createElement("div");
        let c, d = "";

        function h() {
            u(l, i), u(a, i), r.dom.off(t, "keyup", g), r.dom.off(t, "click", m), r.dom.off(t.getElementById(s), "click", m), r.dom.off(e, "message", b)
        }

        function p() {
            u(l, o), u(l, i), u(a, n), u(a, i), x.appendChild(l), x.appendChild(a), t.body.appendChild(R), T(d), c = !0
        }
        const u = function(e, t) {
                if (e.classList) return e.classList.add(t);
                r.dom.removeClass(e, t), e.className += ` ${t}`
            },
            g = e => {
                const t = e.which || e.keyCode;
                27 === t && h()
            },
            m = e => {
                const t = e.target || e.srcElement;
                t !== l && t.id !== s || (r.dom.stopEvent(e), h())
            },
            b = e => {
                /http(s)?:\/\/www\.taboola\.com/.test(e.origin) && e.data && 1025 == +e.data && h()
            },
            f = function(e, t = "no") {
                const r = [];
                return r.push(`<a id="${s}" class="trc_modal_close">&times;</a>\n                <iframe class="trc_modal_frame" scrolling=${t} frameborder=0 allowTransparency=true src="${e}"></iframe>`), r.join("")
            },
            v = function(e, t) {
                for (; e.tagName.toUpperCase() !== t.toUpperCase();) e = e.parentNode;
                return e
            },
            C = function(i) {
                const o = v(i.target || i.srcElement, "A");
                i && r.dom.stopEvent(i), c || p();
                const n = o.getAttribute("tblEnablesScrolling");
                a.innerHTML = f(o.href, n), r.dom.removeClass(l, "trc_modal_hidden"), r.dom.removeClass(a, "trc_modal_hidden"), r.dom.on(t, "keyup", g), r.dom.on(t, "click", m), r.dom.on(t.getElementById("trc_close_modal"), "click", m), r.dom.on(e, "message", b)
            },
            y = function(e) {
                const r = t.createElement("div");
                return r.id = `tbl-aug-${Math.floor(2147483648*Math.random()).toString(36)}`, d = `#${r.id}`, e && e.appendChild(r), r
            },
            T = function(e) {
                TRC.dom.injectStyle(`${e} .trc_modal_dialog { width: 660px; height: 550px; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; padding: 12px; border: 2px solid #417cc3; position: fixed; z-index: 9999999; background: #f7f9fc; top: 50%; left: 50%; margin-top: -250px; margin-left: -330px; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; -ms-box-sizing: content-box; -o-box-sizing: content-box; box-sizing: content-box; -webkit-box-shadow: black 0 0 18px 0; -moz-box-shadow: black 0 0 18px 0; -ms-box-shadow: black 0 0 18px 0; -o-box-shadow: black 0 0 18px 0; box-shadow: black 0 0 18px 0; -webkit-border-radius: 10px; -moz-border-radius: 10px; -ms-border-radius: 10px; -o-border-radius: 10px; border-radius: 10px; }${e} .trc_modal_mask { z-index: 9999998; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #000; opacity: 0.5; filter: alpha(opacity=50); }${e} .trc_modal_close { font-family: sans-serif !important; width: 30px !important; height: 30px !important; font-size: 30px !important; font-weight: bold !important; line-height: 28px !important; color: #fff !important; text-shadow: 0 1px 0 #000; opacity: 0.9; filter: alpha(opacity=90); background: #417cc3; padding: 0; cursor: pointer; border: 0; -webkit-appearance: none; text-align: center; position: absolute !important; top: -13px; right: -13px; text-decoration: none !important; z-index: 9; -webkit-border-radius: 15px !important; -moz-border-radius: 15px !important; -ms-border-radius: 15px !important; -o-border-radius: 15px !important; border-radius: 15px !important; }${e} .trc_modal_hidden { display: none !important; }${e} .trc_modal_frame { width: 100% !important; height: 550px !important; }`, null)
            },
            R = y(),
            w = y(R),
            x = y(w);
        r.aboutUs = {
            open: C,
            close: h
        }
    })(window, document, TRC), win = window, doc = document, TRC.blocker = TRC.blocker || {
            states: {
                ABP_DETECTION_DISABLED: -2,
                ABP_NOT_DETECTED: 0,
                ABP_DETECTED: 1
            },
            createBlockDetectionDiv: function(e) {
                var t = doc.createElement("div");
                return t.className = e, t.style.fontSize = "12px", t.style.lineHeight = "1", t.appendChild(doc.createTextNode(".")), doc.documentElement.appendChild(t), t
            },
            isBlockDetectedOnDiv: function(e) {
                return e.offsetHeight ? (TRC.pConsole("page", "warn", "No AdBlockPlus detected on div with class: " + e.className), !1) : (TRC.pConsole("page", "warn", "AdBlockPlus detected on div with class: " + e.className), !0)
            },
            isBlockDetectedOnClassNames: function(e) {
                var t, r = e.length,
                    i;
                for (t = 0; t < r; t++)
                    if (e[t]) {
                        i = this.createBlockDetectionDiv(e[t]);
                        try {
                            if (this.isBlockDetectedOnDiv(i)) return !0
                        } catch (e) {
                            TRC.pConsole("page", "error", "unable to inspect offsetHeight of div with class: " + i.className)
                        } finally {
                            doc.documentElement.removeChild(i)
                        }
                    }
                return !1
            },
            setTopDocument: function() {
                try {
                    doc = top.document || doc
                } catch (e) {}
            },
            getBlockedState: function(e, t) {
                return this.blockedState !== this.states.ABP_DETECTED || t ? (this.setTopDocument(), this.blockedState = e && this.isBlockDetectedOnClassNames(e) ? this.states.ABP_DETECTED : this.states.ABP_NOT_DETECTED, this.blockedState) : this.blockedState
            }
        },
        function() {
            TRC.amp = {};
            var e = TRC.amp,
                t, r;
            e.getRboxContainer = function() {
                return t || (t = document.getElementsByClassName("trc_rbox_container")[0]), t
            }, e.getAMPContainer = function() {
                return r || (r = document.getElementById("c"))
            }, e.setAMPmodule = function(t) {
                t.manualVisibilityTrigger = !0, t.disableReadMore = !0, t.slider = !1;
                var r = null,
                    i = this.sendAMPResize,
                    o = this.sendAMPFeedResize,
                    n = t.global["amp-neg-threshold"] || 5,
                    s = t.global["amp-pos-threshold"] || 100,
                    a = t.global["amp-debounce-time"] || 200,
                    l = void 0 !== t.amp_disable_resize ? t.amp_disable_resize : t.global["amp-disable-resize"],
                    c = "function" == typeof t.global["amp-onrender"] ? t.global["amp-onrender"] : function() {
                        return !0
                    };
                e.getAMPContainer().classList.add("tbl-amp-container"), TRC.eventDelegator.subscribe("onrender", function(t) {
                    var d = {
                        negative: n,
                        positive: s
                    };
                    if (!c(t) || l) return !1;
                    null === r && (r = !(!t.container.placementData || !t.container.placementData.isFeedCard)), r ? (e.getAMPContainer().style.position = "static", o()) : (i(d, TRC.lastVisibleRects ? TRC.lastVisibleRects : null), TRC.listen("visible::" + t.placement, TRC.util.debounce(i.trcBind(this, d), a, !1, this)))
                })
            }, e.sendAMPResize = function(t, r) {
                var i = r ? r.boundingClientRect.height : TRC.dom.getWindowHeight(),
                    o = e.getRboxContainer().scrollHeight,
                    n = i - o,
                    s = n < 0 ? t.negative : t.positive;
                Math.abs(n) >= s && window.context.requestResize(void 0, o)
            }, e.sendAMPFeedResize = function() {
                window.context.requestResize(void 0, e.getAMPContainer().offsetHeight + 50), TRC.dispatch("ampFeedResize")
            }
        }(),
        function(e, t) {
            TRC.aspect = {
                before: function(e, t, r, i) {
                    var o = e[t];
                    e[t] = function() {
                        return i && (e[t] = o), r.apply(this, arguments), o.apply(this, arguments)
                    }
                },
                after: function(e, t, r, i) {
                    var o = e[t];
                    e[t] = function() {
                        i && (e[t] = o);
                        var n = o.apply(this, arguments);
                        return r.apply(this, arguments), n
                    }
                }
            }
        }(window, document), (() => {
            const e = "tbl-labels-arrow",
                t = "video-title",
                r = "FAST",
                i = "MARGIN",
                o = "uics",
                n = "uicm";
            class s {
                constructor(e, t, r) {
                    this.trcManager = e.trc, this.container = t, this.blockClicksSource = s.getBlockClicksSource(this.trcManager.global, r), this.isBlockingFastClicks = !0, this.isRecommendationReel = TRC.RecommendationReel.shouldInitRecommendationReel(e), this.blockMarginalClicksValue = this.getBlockMarginalClicksValue(r, n), this.fastClicksTimeoutInMilliseconds = this.getBlockFastClicksTimeoutInMilliseconds(r, o), TRC.dom.on(this.container, "click", this.handleBlockClicks.trcBind(this)), this.observeItem()
                }
                getBlockMarginalClicksValue(e, t) {
                    const r = this.getClickValueByPriority(e, t);
                    return s.isValidClickValue(r) ? r : s.getDefaultMarginValue()
                }
                getBlockFastClicksTimeoutInMilliseconds(e, t) {
                    const r = this.getClickValueByPriority(e, t);
                    return s.isValidClickValue(r) ? 1e3 * parseFloat(r) : s.getDefaultFastClickValue()
                }
                static getBlockClicksSource(e, t) {
                    return s.checkIsFraudEnabled(e) ? s.BLOCK_CLICK_SOURCE.fraud : s.checkIsDemandEnabled(t) ? s.BLOCK_CLICK_SOURCE.demand : null
                }
                getClickValueByPriority(e, t) {
                    switch (this.blockClicksSource) {
                        case s.BLOCK_CLICK_SOURCE.fraud:
                            return this.trcManager.global[`unintentional-clicks-fraud-${t}`];
                        case s.BLOCK_CLICK_SOURCE.demand:
                            return e[t];
                        default:
                            return this.trcManager.global[`unintentional-clicks-${t}`]
                    }
                }
                static isBlockClicksEnabled(e, t) {
                    return !1 === s.isBlockClicksDisabled(e) && (s.checkIsFraudEnabled(e) || s.checkIsDemandEnabled(t))
                }
                static isBlockClicksDisabled(e) {
                    return TRC.util.isTrue(e["unintentional-clicks-disabled"])
                }
                static checkIsFraudEnabled(e) {
                    return TRC.util.isTrue(e["unintentional-clicks-fraud-enable"])
                }
                static checkIsDemandEnabled(e) {
                    return TRC.util.isTrue(e.uic)
                }
                sendBlockClickEvent(e) {
                    this.trcManager.sendEvent("supply-feature", {
                        d: JSON.stringify({
                            event_type: s.CLICK_BLOCKED_EVENT[e],
                            block_clicks_source: this.blockClicksSource
                        })
                    }, null)
                }
                handleBlockClicks(e) {
                    if (this.isBlockingFastClicks) return s.preventClickBubbling(e), void this.sendBlockClickEvent(r);
                    this.isMarginalClick(e) && this.isBlockableClick(e) && (s.preventClickBubbling(e), this.sendBlockClickEvent(i))
                }
                isBlockableClick(r) {
                    return !(this.isRecommendationReel && r.target.parentNode.className.indexOf(e) > -1) && !(r.target.className.indexOf(t) > -1)
                }
                isMarginalClick(e) {
                    const t = this.container.offsetWidth,
                        r = this.container.offsetHeight,
                        i = this.transformBlockMarginalClicksConfig(t, r),
                        o = this.container.getBoundingClientRect(),
                        n = e.clientX - o.left,
                        s = e.clientY - o.top;
                    return s < i.top || n > t - i.right || n < i.left || s > r - i.bottom
                }
                static preventClickBubbling(e) {
                    e.preventDefault(), e.stopPropagation()
                }
                transformBlockMarginalClicksConfig(e, t) {
                    return {
                        top: s.calculatePercentage(this.blockMarginalClicksValue, t),
                        right: s.calculatePercentage(this.blockMarginalClicksValue, e),
                        bottom: s.calculatePercentage(this.blockMarginalClicksValue, t),
                        left: s.calculatePercentage(this.blockMarginalClicksValue, e)
                    }
                }
                static calculatePercentage(e, t) {
                    return parseFloat(e) / 100 * t
                }
                observeItem() {
                    TRC.intersections.observe({
                        targetElement: this.container,
                        threshold: 0,
                        onExit: () => this.clearFastClickTimeout(),
                        onEnter: () => this.setFastClickTimeout()
                    })
                }
                setFastClickTimeout() {
                    this.clearFastClickTimeoutId(), this.setIsBlockingFastClicks(!0);
                    const e = TRC.Timeout.set(() => {
                        this.setIsBlockingFastClicks(!1), this.clearFastClickTimeoutId()
                    }, this.fastClicksTimeoutInMilliseconds);
                    this.timeoutId = e
                }
                clearFastClickTimeout() {
                    this.setIsBlockingFastClicks(!0), this.timeoutId && this.clearFastClickTimeoutId()
                }
                clearFastClickTimeoutId() {
                    TRC.Timeout.clear(this.timeoutId), this.timeoutId = null
                }
                setIsBlockingFastClicks(e) {
                    this.isBlockingFastClicks = e
                }
                static isValidClickValue(e) {
                    return !isNaN(parseFloat(e))
                }
                static getDefaultMarginValue() {
                    return "0.5"
                }
                static getDefaultFastClickValue() {
                    return "3000"
                }
            }
            s.CLICK_BLOCKED_EVENT = {
                MARGIN: "marginal_click_blocked",
                FAST: "fast_click_blocked"
            }, s.BLOCK_CLICK_SOURCE = {
                fraud: "fraud",
                demand: "demand"
            }, TRC.BlockClicksManager = s
        })(),
        function(e, t) {
            var r = function() {
                    this.dom = !!t.getElementById && 1, this.dom && (!t.importNode || (this.dom = 2), !t.normalizeDocument || (this.dom = 3));
                    var r = this.opera = !!e.opera && 9;
                    if (this.opera && (!navigator.geolocation || (this.opera = 10), !e.opera.version || (this.opera = parseFloat(e.opera.version()))), this.ie = navigator.userAgent.match(/Trident/) && /rv:11.0/i.test(navigator.userAgent) ? 11 : "object" == typeof t.all && !r && ("CSS1Compat" != t.compatMode ? 6 : e.XMLHttpRequest ? Object.defineProperty ? "object" != typeof DOMImplementation || "function" != typeof DOMImplementation.prototype.createDocument ? 8 : e["msMatchMedia"] ? 10 : 9 : 7 : 6), this.webkit = !!e.openDatabase && !this.opera, this.chrome = !(!this.webkit || !e.chrome), this.safari = this.webkit && !this.chrome, this.safari && (!t.compareDocumentPosition || (this.safari = 4), !navigator["registerContentHandler"] || (this.safari = 5), !e["matchMedia"] || (this.safari = 6)), this.firefox = !!navigator.userAgent.match(/firefox/i), this.firefox) {
                        try {
                            "function" == typeof t.createElement("canvas").getContext && (this.firefox = 1.5)
                        } catch (e) {}
                        "object" == typeof e["globalStorage"] && (this.firefox = 2), !t.elementFromPoint || (this.firefox = 3), !t.querySelector || (this.firefox = 3.5), !t.getElementsByTagName("head")[0]["mozMatchesSelector"] || (this.firefox = 3.6), !e.Uint8Array || (this.firefox = 4), !Function.prototype["isGenerator"] || (this.firefox = 5), !e["matchMedia"] || (this.firefox = 6), !e.FileReader || !e.FileReader.prototype.readAsArrayBuffer || (this.firefox = 7), !t.head || !t.head.insertAdjacentHTML || (this.firefox = 8)
                    }
                    for (var i = ["firefox", "chrome", "safari", "webkit", "khtml", "ie", "opera"], o = 0; o < i.length; o++) ! function(e, t) {
                        e[t + "Upto"] = function(e) {
                            return this[t] && ("number" != typeof this[t] || this[t] <= e)
                        }, e[t + "Atleast"] = function(e) {
                            return this[t] && ("number" != typeof this[t] || this[t] >= e)
                        }
                    }(this, i[o]);
                    return this.compatibility = {
                        lineClamp: void 0 !== t.createElement("div").style["webkitLineClamp"],
                        cssTransforms: function() {
                            for (var e = t.createElement("div"), r = ["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], i = 0; i < r.length; i++)
                                if (void 0 !== e.style[r[i]]) return !0;
                            return !1
                        }(),
                        passiveEvents: function() {
                            var e = !1;
                            try {
                                window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                                    get: function() {
                                        e = !0
                                    }
                                }))
                            } catch (e) {}
                            return e
                        }()
                    }, this
                },
                i = function() {
                    var e;
                    this.isTouchDevice = "ontouchstart" in window, this.deviceType = (e = navigator.userAgent.match(/iPhone|iPod|iPad/i)) ? e[0] : "other"
                },
                o = {
                    isEnabled: function() {
                        return !!e.taboolaMobile
                    }
                };
            TRC.Browser = new r, TRC.Device = new i, TRC.MobileSdk = o
        }(window, document), (() => {
            class e {
                init() {
                    this.bulkLoggers = {
                        availableBulkLogger: new TRC.TRCBulkLogger("bulk"),
                        metricBulkLogger: new TRC.TRCBulkLogger("bulk-metrics")
                    }, this.eventToLogger = {
                        available: this.bulkLoggers.availableBulkLogger,
                        metrics: this.bulkLoggers.metricBulkLogger
                    }, this.initialized = !0
                }
                bulkPost(e, t, r, i, o) {
                    this.initialized || this.init();
                    const n = this.eventToLogger[t];
                    if (!n) return TRC.TRCLogger.post(e, t, r, i, o), void __trcWarn(`Failed sending bulk event for eventType: ${t}, bulk is not currently supported`);
                    n.bulkPost(e, t, r, i, o)
                }
            }
            TRC.BulkLoggerManager = new e
        })(), (() => {
            class e {
                constructor(e, t, r) {
                    this.localStorage = e, this.cacheName = t, this.cacheTtl = r
                }
                isOverTtl(e) {
                    const t = (new Date).getTime();
                    return t - e > this.cacheTtl
                }
                setCacheClean(e, t) {
                    const {
                        localStorage: r,
                        cacheName: i,
                        cacheTtl: o
                    } = this;
                    TRC.Timeout.set(() => {
                        TRC.tlf && console.time("in setCacheClean"), t.removeKey(e), r.setValue(i, __trcJSONify(t.getData())), TRC.tlf && console.timeEnd("in setCacheClean")
                    }, o)
                }
                static removeKey(e, t) {
                    return !!t.getValue(e) && (t.removeKey(e), !0)
                }
                cleanCache(e, t, r) {
                    const i = e || TRC.util.keys(t.getData());
                    let o;
                    for (let n = 0; n < i.length; n++) o = i[n], this.isOverTtl(t.getValue(o).s) && r.removeKey(o);
                    this.localStorage.setValue(this.cacheName, __trcJSONify(t.getData()))
                }
                getCache(e) {
                    const t = this.localStorage.getValue(this.cacheName) || {};
                    try {
                        if (t) return e.getDummyStorage(TRC.util.jsonParseWithNative(t))
                    } catch (t) {
                        return e.getDummyStorage()
                    }
                }
            }
            TRC.CacheUtils = e
        })(), (() => {
            const e = "allowed-categories-map";
            class t {
                constructor(t) {
                    const {
                        sourceCategory: r,
                        global: i
                    } = t.trc, {
                        publisherId: o,
                        dom: {
                            addClass: n
                        }
                    } = TRC, s = i[e];
                    let a = {};
                    if (this.text = "", this.isCategoryCard = !0, this.sourceCategory = r, n(t.container, "tbl-category-card-enabled"), !r) return void this.sendEvent("No Source Category");
                    s && (a = s[o] || s);
                    const l = a[r];
                    l ? (this.render = this.validateCategoryLogic(t), this.render && (n(t.container, "tbl-category-card-rendered"), this.text = l.toUpperCase())) : this.sendEvent("No category translation")
                }
                sendEvent(e) {
                    TRCImpl.sendAbTestEvent("category-card", `Channel: ${this.sourceCategory}, Result: ${e}`)
                }
                validateCategoryLogic(e) {
                    const {
                        length: t = 0
                    } = e.recommendationList;
                    if (!t) return !1;
                    for (let r = 0; r < t; r++) {
                        const t = e.recommendationList[r];
                        if (!t.category) return this.sendEvent("No Category"), !1;
                        if (this.sourceCategory !== t.category) return this.sendEvent(`fallback. item category is: ${t.category}`), !1
                    }
                    return !0
                }
                static enableCategoryCard(e) {
                    return !!e.trc.getProperty(e.mode_name, "enable-category-card", e.propertiesOverride)
                }
            }
            TRC.CategoryCard = t
        })(), ((e, t, r) => {
            const i = (e = [], t = {}) => {
                    h.isInitialized = !0, n(t), o(e), TRC.dom.injectStyle(`a.tbl-ccpa { font-weight: normal; font-size: 11px; Color: #999999; margin: 0 3px 0 0; text-decoration: none; font-family: Arial, Helvetica, sans-serif; float: right; } a.tbl-ccpa.tbl-ccpa-left { float: left; } a.tbl-ccpa.tbl-ccpa-right { float: right; }.logoDiv a.tbl-ccpa span { font-size: 11px; color: #999999; }div.tbl-feed-header.tbl-ccpa-container .tbl-ccpa { margin-top: 3px; }div.tbl-feed-header.tbl-ccpa-container div.tbl-feed-header-logo { display: inline-block; }.trc-widget-footer a.tbl-ccpa.tbl-cpa-pipe-before::before { content: '|'; margin-right: 2px; font-size: 11px; color: #999999; }.tbl-rtl .tb-ccpa-mobile { line-height: 11px; }.tbl-rtl .logoDiv.link-ccpa { display: inline-block; }.tbl-rtl div.tbl-feed-header .tbl-ccpa { margin-top: 0; }.tbl-rtl .trc-widget-footer a.tbl-ccpa { float: none; } .tbl-rtl .trc-widget-footer a.tbl-ccpa.tbl-cpa-pipe-before::before { content: ''; } .tbl-rtl .trc-widget-footer a.tbl-ccpa.tbl-cpa-pipe-before::after { content: '|'; margin-left: 2px; font-size: 11px; color: #999999; }`, null), d()
                },
                o = e => {
                    let t = h.config && h.config.placement;
                    if (t) return r.ccpa.placement = t, t;
                    for (let r = 0; r < e.length; r++) {
                        const i = e[r];
                        if ((t = i.dc || i.uuip || i.uip).toLowerCase().indexOf("below") > -1 && i.v.length > 0) return h.placement = t, t
                    }
                    h.placement = t
                },
                n = ({
                    markup: e = "CCPA Notice",
                    href: t = "https://ccparequest.taboola.com/",
                    enableScrolling: r = "yes",
                    classList: i,
                    style: o,
                    inlineStyle: n = "",
                    location: s = "beforeend",
                    renderOnce: a = !0,
                    placement: l = ""
                }) => {
                    const c = i ? [...i, "tbl-ccpa"] : "tbl-ccpa";
                    h.config = {
                        markup: e,
                        href: t,
                        enableScrolling: r,
                        classList: c,
                        style: o,
                        inlineStyle: n,
                        location: s,
                        renderOnce: a,
                        placement: l
                    }
                },
                s = e => {
                    const {
                        config: t,
                        firstTime: r,
                        placement: i
                    } = h;
                    return t && !t.renderOnce || r && i === e
                },
                a = (e, t = {}) => {
                    r.ccpa.firstTime = !1;
                    let i = "tbl-ccpa-container";
                    TRC.dom.isSmartPhone() && (i += " tb-ccpa-mobile"), TRC.dom.addClass(e, i);
                    const o = TRC.util.merge({}, h.config, t);
                    TRC.PopupLink.create(e, o)
                },
                l = (e, t, r) => {
                    if (h.shouldCreateCcpa(t)) {
                        const t = {};
                        let i = "";
                        "RIGHT" === r ? i = " tbl-ccpa-left" : "LEFT" === r && (i = " tbl-ccpa-right"), t.classList = `${h.config.classList}${i}`, h.create(e, t)
                    }
                },
                c = e => {
                    if (e.isFeedCard || !s(e.placement)) return;
                    const t = e.getWidgetFooter();
                    let r = "";
                    t.children.length > 0 && (r = " tbl-cpa-pipe-before");
                    const i = {
                        markup: `<span>${h.config.markup}</span>`,
                        classList: `${h.config.classList} tbl-ccpa-on-widget${r}`,
                        location: "afterbegin",
                        wrapper: {
                            type: "div",
                            className: "logoDiv link-ccpa"
                        }
                    };
                    e.hasAdChoicesLogo && (i.children = '<span class="trc_logos_v_align">&nbsp;</span>'), h.create(t, i)
                },
                d = function(e = "taboola", t = "Rendered", r = null) {
                    if (TRC.dom.isInIframe()) {
                        const e = "in-iframe";
                        r = r ? [r, e].join(", ") : e
                    }
                    const i = {
                        event_type: "ccpa",
                        event_state: t,
                        event_value: e,
                        event_msg: r
                    };
                    TRCImpl.sendEvent("supply-feature", {
                        d: JSON.stringify(i)
                    }, null)
                },
                h = r.ccpa = {
                    placement: "",
                    isInitialized: !1,
                    firstTime: !0,
                    sendCcpaEvent: d,
                    create: a,
                    init: i,
                    shouldCreateCcpa: s,
                    renderOnWidgetFooter: c,
                    renderOnHeaderFeed: l
                }
        })(window, document, TRC),
        function() {
            var e = 0,
                t = 1,
                r = 2,
                i = 3,
                o = 5,
                n = {
                    taboola_default: "BOOx2jhOOx2mtAKABDENAqAAAAAYSAAA"
                },
                s = {
                    cmpStatus: i
                },
                a = "",
                l = {
                    getConsentData: []
                },
                c = {
                    getConsentData: 1
                };

            function d() {
                s.gdprApplies = !0, s.consentData = n.taboola_default, s.consentPreset = "taboola_default"
            }

            function h(e, t, r) {
                return c[e] && l[e].push(r), "tcf" === a ? b() : "iab" === a ? u() : void 0
            }

            function p(t) {
                t.cmpStatus = e, f(t)
            }

            function u() {
                return !!window.__cmp && (window.__cmp("getConsentData", null, p), !0)
            }

            function g(e, t) {
                if (t && ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus)) {
                    m(e), f(s);
                    try {
                        window.__tcfapi("removeEventListener", 2, function() {}, e.listenerId)
                    } catch (e) {
                        __trcWarn("Error while calling __tcfapi:removeEventListener", e)
                    }
                }
            }

            function m(t) {
                s.cmpStatus = e, s.gdprApplies = t.gdprApplies, s.tcString = t.tcString, s.consentData = null
            }

            function b() {
                try {
                    return window.__tcfapi("addEventListener", 2, g), !0
                } catch (e) {
                    __trcWarn("Error while calling __tcfapi:addEventListener", e)
                }
            }

            function f(e) {
                s = TRC.util.merge(s, e), v()
            }

            function v() {
                var e = l["getConsentData"];
                if (!0 !== e.pushOverride) {
                    e.push = function(e) {
                        "function" == typeof e && e(s)
                    }, e.pushOverride = !0;
                    for (var t = 0; t < e.length; t++) e[t](s)
                }
            }

            function C(e) {
                try {
                    window.__tcfapi("getTCData", 2, function(t, r) {
                        r && (m(t), s = TRC.util.merge(s, e))
                    })
                } catch (e) {
                    __trcWarn("Error while calling __tcfapi:getTCData", e)
                }
                f()
            }
            TRC.consent = TRC.consent || {}, TRC.consent.setPresets = function(e) {
                n = TRC.util.merge(n, e)
            }, TRC.consent.setConsent = function(t) {
                "tcf" === a ? C(t) : TRC.consent.hasCMP() ? (d(), t && (s.cmpStatus = t.consentData ? e : s.cmpStatus, s.consentPreset = t.consentData ? "" : s.consentPreset, (s = TRC.util.merge(s, t)).consentData = n[t.consentPreset] || s.consentData), f()) : __trcError("TRC.consent.setConsent:- no consent source was set")
            }, TRC.consent.getConsentStatus = function() {
                return s.cmpStatus
            }, TRC.consent.hasCMP = function() {
                return !!a
            }, TRC.consent.setConsentSource = function(e, r) {
                return d(), a = e.source.toLowerCase() || a, n = TRC.util.merge(n, e.presets), TRC.cmp = h, s.cmpStatus = t, r && (n = r), !0
            }, TRC.consent.getAMPConsent = function(e) {
                if (window.context)
                    if (TRC.util.isEmptyString(window.context.initialConsentValue))
                        if ("function" == typeof window.context.getConsentState) try {
                            window.context.getConsentState(function(t) {
                                1 === t.consentState ? e("true", null) : 2 === t.consentState ? e("false", null) : e(null, null)
                            })
                        } catch (t) {
                            __trcError("Error while calling AMP getConsentState", t), e(null, null)
                        } else e(null, null);
                        else /\d[YN-]{3}$/.test(window.context.initialConsentValue) ? (s.ccpaString = window.context.initialConsentValue, s.gdprApplies = null, s.consentData = null, s.tcString = null) : (s.tcString = window.context.initialConsentValue, s.gdprApplies = !0, s.consentData = null), s.cmpStatus = o, e(null, s);
                else e(null, null)
            }, window._trcIsUTactive && (TRC.consent.setCurrentSource = function(e) {
                a = e, l = {
                    getConsentData: []
                }, s = {
                    cmpStatus: i
                }
            })
        }(), (e => {
            TRC.CLSReporter = {
                listenStarted: !1,
                CLSEventsFilters: [],
                maxSelectors2Send: 100,
                CLSSelectorsEnabled: !1,
                CLSSelectorsMessage: "",
                CLSSelectorsFilter: "selectors",
                generateQuerySelector(e) {
                    if (!e) return null;
                    let t = e.tagName;
                    return e.id ? t += `#${e.id}` : e.className && (t += `${e.className}`), t
                },
                getSelectorEventData(e) {
                    let t = "";
                    for (let r = 0; r < e.sources.length; r++) {
                        const i = e.sources[r],
                            {
                                node: o
                            } = i;
                        if (o) {
                            const r = TRC.CLSReporter.generateQuerySelector(o);
                            r && (t += `selector='${r}',val=${e.value}|`)
                        }
                    }
                    return t
                },
                push(e) {
                    e && e.prefixMessage && TRC.CLSReporter.reportFilteredCLS(e.prefixMessage, e.eventFilter)
                },
                addCLSEventFilter(e, t) {
                    t === TRC.CLSReporter.CLSSelectorsFilter ? TRC.CLSReporter.CLSSelectorsEnabled || (TRC.CLSReporter.CLSSelectorsEnabled = !0, TRC.CLSReporter.CLSSelectorsMessage = e) : TRC.CLSReporter.CLSEventsFilters.push({
                        prefixMessage: e,
                        eventFilter: t,
                        clsValue: 0
                    })
                },
                reportFilteredCLS(e, t) {
                    TRC.CLSReporter.addCLSEventFilter(e, t), TRC.CLSReporter.listenToCLSEventsAndReport()
                },
                listenToCLSEventsAndReport() {
                    if (!TRC.CLSReporter.listenStarted && TRC.performance) {
                        TRC.CLSReporter.listenStarted = !0;
                        let t = 0;
                        TRC.listen("onCls", e => {
                            TRC.CLSReporter.CLSEventsFilters.forEach(t => {
                                t.eventFilter && !t.eventFilter(e) || (t.clsValue += e.value)
                            }), TRC.CLSReporter.CLSSelectorsEnabled && TRC.CLSReporter.maxSelectors2Send > t++ && (TRC.CLSReporter.CLSSelectorsMessage += TRC.CLSReporter.getSelectorEventData(e))
                        }), e.addEventListener("beforeunload", TRC.CLSReporter.fireCLSBeaconOnUnload.bind(this))
                    }
                },
                fireCLSBeaconOnUnload() {
                    TRC.CLSReporter.CLSEventsFilters.forEach(e => {
                        __trcWarnUsingBeacon(`${e.prefixMessage}:${e.clsValue.toFixed(6)}`)
                    }), TRC.CLSReporter.CLSSelectorsEnabled && __trcWarnUsingBeacon(TRC.CLSReporter.CLSSelectorsMessage)
                },
                init() {
                    TRC.CLSEvents && TRC.CLSEvents.forEach(e => {
                        TRC.CLSReporter.push(e)
                    }), TRCImpl.global["cls-max-selectors"] && (TRC.CLSReporter.maxSelectors2Send = TRCImpl.global["cls-max-selectors"]), TRCImpl.global["enable-cls-selectors"] && TRC.CLSReporter.push({
                        prefixMessage: "accumulating cls selectors:",
                        eventFilter: TRC.CLSReporter.CLSSelectorsFilter
                    })
                }
            }
        })(window), TRC.CustomModulesManager = {
            registeredModules: {},
            getPath(e, t) {
                switch (e) {
                    case void 0:
                    case "ui-innovation":
                        return `${this.PATH.UI}/${t}`;
                    case "demand-formats":
                        return `${this.PATH.DEMAND}/${t}`;
                    default:
                        return e
                }
            },
            setGlobalPaths() {
                const e = TRCImpl.global["cdn-taboola-path"] || "cdn.taboola.com";
                this.setGlobal = !0, this.CDN = TRC.shiftDomain(e), this.PATH = {
                    UI: TRCImpl.global["ui-innovation-modules-path"] || "ui-ab-tests",
                    DEMAND: "demand-formats"
                }
            },
            getCustomModulesFromResponse(e) {
                if (!e || !e.trc) return;
                this.customModuleCga = TRC.Manager.prototype.parseClientGenericAction(e);
                const t = {
                    feedExtension: this.createModuleMap(e.trc.f, !0, "drp"),
                    demandGenericAction: this.createModuleMap(e.trc.dcga, !1),
                    clientGenericActionPageLevel: this.createModuleMap(this.customModuleCga, !1),
                    clientGenericActionPlacementLevel: this.createModuleMap(e.trc.vl, !0, "cga")
                };
                this.loadModules(t)
            },
            createModuleMap: (e, t, r) => ({
                root: e,
                loop: t,
                key: r
            }),
            loadModules(e) {
                !this.setGlobal && this.setGlobalPaths();
                const t = Object.keys(e);
                t.forEach(t => {
                    const r = e[t];
                    r.root && (r.loop ? this.loadModulesFromChildren(r) : this.loadModulesFromRoot(r))
                })
            },
            loadModulesFromChildren(e) {
                Object.keys(e.root).forEach(t => {
                    const r = e.root[t];
                    r && r[e.key] && r[e.key].customModules && this.loadCustomModules(r[e.key].customModules, t)
                })
            },
            loadModulesFromRoot(e) {
                e.root && e.root.customModules && this.loadCustomModules(e.root.customModules)
            },
            loadCustomModules(e, t) {
                try {
                    const r = __trcUnJSONify(e);
                    Object.keys(r).forEach(e => {
                        this.loadModule(e, r[e], t)
                    })
                } catch (t) {
                    __trcError(`Error while trying to parse json custom module, error msg: ${t} ,module data: ${e}`)
                }
            },
            loadModule(e, t, r) {
                let i = this.registeredModules[e];
                const o = i && -1 === i.feedsOriginPlacementNames.indexOf(r);
                if (o && i.feedsOriginPlacementNames.push(r), i || !0 === t.disable) return;
                i = this.registeredModules[e] = {
                    options: t,
                    moduleName: e,
                    feedsOriginPlacementNames: [r]
                };
                const n = this.getPath(t.path, e);
                if (this.shouldLoadResource(t.js) && !i.jsRequested) {
                    TRC.customHooks || (TRC.customHooks = {});
                    const r = t.js || e;
                    this.loadModuleResource(`${n}/${r}`, "js", e, i), i.jsRequested = !0
                }
                if (this.shouldLoadResource(t.css) && !i.cssRequested) {
                    const r = t.css || e;
                    this.loadModuleResource(`${n}/${r}`, "css", e, i), i.cssRequested = !0
                }
            },
            shouldLoadResource: e => void 0 === e || !TRC.util.isFalse(e),
            runHook(e, t, r, ...i) {
                this.dispatchHook(e, t, r, i)
            },
            dispatchHook(e, t, r, i) {
                Object.keys(this.registeredModules).forEach(o => {
                    const n = this.registeredModules[o];
                    if (this.isRelevantType(t, n, r))
                        if (n.ready) {
                            const t = this.getModuleHook(n, e, r, ...i);
                            t && t()
                        } else TRC.listen(`TRC.${o}.ready`, () => {
                            const t = this.getModuleHook(n, e, r, ...i);
                            t && t()
                        })
                })
            },
            isRelevantType(e, t, r) {
                const {
                    uiModes: i,
                    placements: o
                } = t.options;
                return !e || (r instanceof TRC.Feed ? -1 !== t.feedsOriginPlacementNames.indexOf(r.mainContainerPlacement) && (!o || e && o && o.indexOf(e) > -1) : r instanceof TRC.implClasses.TRCRBox ? !i || e && i && i.indexOf(e) > -1 : void 0)
            },
            getModuleHook(e, t, r, ...i) {
                const o = TRC.customHooks[e.moduleName];
                return o && o.hooks && o.hooks[t] && o.hooks[t].trcBind(r, ...i, r)
            },
            isEveryModuleNeededLoaded(e) {
                const t = this.shouldLoadResource(e.options.js),
                    r = this.shouldLoadResource(e.options.css);
                return !(t && !e.jsReady || r && !e.cssReady)
            },
            loadModuleResource(e, t, r, i, o = 0) {
                const n = `${TRC.PROTOCOL}//${this.CDN}/${e}.${t}`,
                    s = TRCImpl.global["module-load-retry"] || 2;
                TRC.net.loadScript(n, t, a => {
                    "error" === a.type ? o >= s ? __trcError(`Failed to load custom module resource ${n}`) : TRC.CustomModulesManager.loadModuleResource(e, t, r, i, ++o) : (i[`${t}Ready`] = !0, this.isEveryModuleNeededLoaded(i) && (TRC.dispatch(`TRC.${r}.ready`), i.ready = !0))
                })
            }
        }, ((e, t) => {
            TRC.docVisibilityUtil = function() {
                let e = "",
                    r = "";
                if (void 0 !== t.hidden ? (e = "hidden", r = "visibilitychange") : void 0 !== t.msHidden ? (e = "msHidden", r = "msvisibilitychange") : void 0 !== t.webkitHidden && (e = "webkitHidden", r = "webkitvisibilitychange"), !e) return {
                    addEventListener: () => {},
                    isVisible: () => null
                };

                function i() {
                    return !t[e]
                }

                function o(e) {
                    t.addEventListener(r, () => {
                        e(i())
                    }, !1)
                }
                return {
                    addEventListener: o,
                    isVisible: i
                }
            }()
        })(window, document), TRC.lazyLoadingDependencies = {
            "distance-from-article": [{
                fileName: "article-detection",
                objectName: "ArticleDetection"
            }],
            "tfa-eid": [{
                fileName: "sha256",
                objectName: "sha256"
            }],
            "bid-detection": [{
                fileName: "distance-from-article",
                objectName: "DistanceFromArticle"
            }],
            "stories-vertical-ui": [{
                fileName: "stories-transition-manager",
                objectName: "StoriesTransitionsManager",
                isMandatory: !0
            }, {
                fileName: "stories-video-manager",
                objectName: "StoriesVideoManager"
            }]
        }, TRC.ModuleLoader = {
            requestedModules: {},
            load(e, t, r, i, o) {
                if (o = void 0 === o ? window.TRCImpl && TRCImpl.global && TRCImpl.global["module-load-retry"] || 2 : o, t) r();
                else if (this.requestedModules[e] && !i) this.requestedModules[e].callbacks.push(r);
                else {
                    i || (this.requestedModules[e] = {
                        callbacks: [this.logSuccessToPerformance.trcBind(this, e), r]
                    }, TRC.performance && TRC.performance.mark(`moduleLazyLoad${e}start`, null, "", e, "moduleLazyLoadTime", TRC.PerfEvenType.START));
                    const n = this.toFingerPrintedName(e),
                        s = TRC.lazyLoadingDependencies[e];
                    if (!s || s.length <= 0) TRC.loadTaboolaScript(n, !0, this.requestedModules[e].callbacks, i => {
                        this.loadErrorCallback(i, o, e, t, r, n)
                    });
                    else {
                        const a = () => {
                                TRC.loadTaboolaScript(n, !0, t => {
                                    this.invokeCallbackUponFullLoad(++c, s.length, e, t)
                                }, i => {
                                    this.loadErrorCallback(i, o, e, t, r, n)
                                })
                            },
                            l = this.createMandatoryTable(s) || {};
                        let c = 0;
                        0 === Object.keys(l).length && a(), i || s.forEach(t => {
                            const {
                                fileName: r
                            } = t;
                            this.load(t.fileName, TRC[t.objectName], t => {
                                this.invokeCallbackUponFullLoad(++c, s.length, e, t);
                                try {
                                    !1 === l[r] && (l[r] = !0, this.isMandatoryModulesLoaded(l) && a())
                                } catch (e) {
                                    __trcError(`failed to check mandatory module ${r}. Error is: ${e.message}`, e)
                                }
                            })
                        })
                    }
                }
            },
            createMandatoryTable: e => Array.isArray(e) ? e.reduce((e, t) => (t.isMandatory && (e[t.fileName] = !1), e), {}) : {},
            isMandatoryModulesLoaded: e => Object.keys(e).every(t => e[t]),
            invokeCallbackUponFullLoad(e, t, r, i) {
                if (e < t + 1) return;
                const o = this.chainCallbacks(this.requestedModules[r].callbacks);
                o(i)
            },
            logSuccessToPerformance(e) {
                TRC.performance && TRC.performance.mark(`moduleLazyLoad${e}stop`, null, "", e, "moduleLazyLoadTime", TRC.PerfEvenType.STOP)
            },
            toFingerPrintedName(e) {
                const t = `${TRC.hasES6Support()?"es6":"es5"}.js`;
                return `${e}.${TRC.version}.${t}`
            },
            chainCallbacks: e => Array.isArray(e) ? t => {
                e.forEach(e => e(t))
            } : "function" == typeof e ? e : () => {},
            loadErrorCallback(e, t, r, i, o, n) {
                t > 0 ? TRC.ModuleLoader.load(r, i, o, !0, --t) : (this.logError(e, n), this.requestedModules[r] = null, TRC.dispatch("module-loader-failure", {
                    moduleFile: r,
                    moduleObj: i,
                    fingerPrintedFileName: n
                }))
            },
            logError(e, t) {
                __trcError(`failed to load module ${t}. Error is: ${e.message}`, e)
            }
        }, (e => {
            const t = !!e.navigator.sendBeacon;
            TRC.hasNetworkAsyncSupport = (() => t), TRC.sendPostAsyncCall = ((r, i) => !!t && (e.navigator.sendBeacon(r, i), !0))
        })(window), TRC.RBoxUsage = {
            logUsage(e, {
                file: t = "",
                method: r = "",
                position: i = "",
                skipCaching: o,
                extraData: n = {}
            } = {}) {
                TRCImpl && TRCImpl.global && TRCImpl.global["disable-rbox-usage-logging"] || TRC.modDebug.logMessageToServer(4, e, {
                    file: t,
                    method: r,
                    position: i,
                    extraData: __trcJSONify(n)
                }, o)
            }
        }, TRC.unifiedPlacementsProductsUtil = {
            containersReset: (e, t) => {
                Object.keys(e).forEach(r => {
                    const i = e[r].mainContainerId,
                        o = document.querySelectorAll(`[${t}=${i}]`);
                    for (let e = 0; e < o.length; e++) {
                        const t = o[e],
                            r = t.getAttribute(TRC.intersections.TARGET_ATTRIB);
                        e > 0 ? t.remove() : (t.className = t.origClassName, t.innerHTML = "", r && TRC.intersections.unobserveAll(r))
                    }
                })
            }
        }, (() => {
            class e {
                constructor() {
                    this.cardIndexOnPage = 0, this.globalConfig = [], this.shouldReport = Math.random() < .05, this.horizontalMarginToFilter = .1, this.ctaChildrenParentGap = 10, this.videoLabelBoxWidthRatio = .98, this.ctaButtonTextAmountOfChars = 15, this.maxCharsForItemId = 40, this.urlParams = {}, this.ctaButtons = {}, this.windowLocation = this.shouldReport ? (window.location.href || "").slice(0, 200) : ""
                }
                static initialize(t, r) {
                    if (!TRC.ctaManager) {
                        if (!e.shouldCreateCTAManager(t, r)) return;
                        TRC.ctaManager = new e, TRC.ctaManager.setupFromConfig(t)
                    }
                    TRC.ctaManager.prepareDataForCTA(t, r)
                }
                static shouldCreateCTAManager(e, t) {
                    if (!e.trc.global["enable-cta-component"]) return !1;
                    const r = TRC.CTAManager.getPubConfigOverrideFromRboxResponse("enable-call-to-action-creative-component", e);
                    return !(!r || "true" !== r) && !!t.video_data["cta-text"]
                }
                static getButtonInnerHeight() {
                    return 24
                }
                static getButtonHeight() {
                    return TRC.CTAManager.getButtonInnerHeight() + 7
                }
                static getPriceRatingHeight() {
                    return 22
                }
                static getPubConfigOverrideFromRboxResponse(e, t) {
                    const r = t && t.globalTrcResponseJSON && t.globalTrcResponseJSON.dcga && t.globalTrcResponseJSON.dcga.pubConfigOverride;
                    return r && r[e]
                }
                setupFromConfig(t) {
                    this.moduleName = e.getPubConfigOverrideFromRboxResponse("module-name", t), this.options = {
                        isInheritTitleColor: this.getPubConfigOverride("inherit-title-color", t, !0),
                        style: {
                            borderColor: this.getPubConfigOverride("border-color", t, !0),
                            color: this.getPubConfigOverride("title-color", t, !0),
                            fontSize: this.getPubConfigOverride("cta-font-size", t, !0),
                            fontWeight: this.getPubConfigOverride("font-weight", t, !0)
                        }
                    }
                }
                getPubConfigOverride(t, r, i) {
                    const o = e.getPubConfigOverrideFromRboxResponse(t, r);
                    return null != o && i && (this.globalConfig[t] = o), null != o ? o : this.globalConfig[t]
                }
                renderCTAItems(t, r) {
                    TRC.ModuleLoader.load("cta-component", TRC.CallToActionComponent, () => {
                        const t = r.boxes,
                            i = {
                                shouldAdjustHeight: !1,
                                maxDesiredHeight: 0
                            };
                        t.forEach(e => {
                            try {
                                const t = this.getCtaData(e);
                                if (!t) return;
                                const o = new TRC.CallToActionComponent(e, t);
                                t.callToActionComponent = o, o.renderCTAButton(i, r)
                            } catch (t) {
                                throw this.sendEvent(e, null, t.message, "error"), t
                            }
                        }), i.shouldAdjustHeight && t.forEach(t => {
                            const r = this.getCtaData(t);
                            if (e.fixVideoBoxHeight(t, i.maxDesiredHeight, r), !r) return;
                            const {
                                callToActionComponent: o
                            } = r;
                            o && o.reportBack(t, r)
                        })
                    })
                }
                static fixVideoBoxHeight(t, r, i) {
                    const o = t.querySelector(".video-label-box");
                    if (t.rbox.ctaData.shouldAdjustAllItemsHeight) {
                        if (r <= 0) return;
                        return void(o.style.height = `${r}px`)
                    }
                    const n = o.querySelector(".branding"),
                        s = e.getDesiredVideoBoxHeight(o, n, i, t.rbox);
                    if (s <= 0) return;
                    o.style.height = `${s}px`;
                    const a = e.getComputedStyleProp(o, "max-height", 0);
                    a > 0 && a < s && (o.style.maxHeight = `${s}px`)
                }
                static getDesiredVideoBoxHeight(t, r, i, o) {
                    let n = e.getVideoLabelBoxChildrenWithoutButtonHeight(t);
                    if ((!n || 0 === n) && (n = e.getComputedStyleProp(t, "height")) <= 0) return 0;
                    if (null != i && !i.shouldRenderAsCTA || !r) return o.ctaData.shouldAdjustAllItemsHeight ? n : 0;
                    const s = null != i && i.isPriceRating ? e.getPriceRatingHeight() : 0,
                        a = e.getHeightOfElementIncludeMargin(r),
                        l = n + s - a + Math.max(e.getButtonHeight(), a);
                    return l <= n ? o.ctaData.shouldAdjustAllItemsHeight ? n : 0 : l
                }
                prepareDataForCTA(t, r) {
                    if (!r.video_data["cta-text"]) return !1;
                    this.ctaButtons[e.getItemId(r)] = this.getCtaData(r) || {};
                    const i = this.getCtaData(r);
                    try {
                        t.ctaData = t.ctaData || {};
                        const o = r.video_data;
                        i.cardIndex = this.cardIndexOnPage++, i.index = o.itemIndex, i.placement = t.placement, i.itemId = this.shouldReport ? (o["item-id"] || o.id || "").slice(0, this.maxCharsForItemId) : "";
                        const n = this.getFilterOutItemForCTAReason(t, r);
                        if (n) return void this.sendEvent(r, i, n);
                        this.sendEvent(r, i, "has_cta_text"), i.shouldRenderAsCTA = !0, i.actionText = TRC.util.getHtmlDecodeText(o["cta-text"]).slice(0, this.ctaButtonTextAmountOfChars), i.price = o.fpr || o["cta-price"];
                        const s = o["stars-rating"];
                        s && (i.rating = e.roundHalf(s)), i.isPriceRating = i.rating || i.price;
                        const a = i.isPriceRating ? "cta_app_render_candidate" : "cta_render_candidate";
                        if (this.sendEvent(r, i, a), t.ctaData.isInit) return;
                        t.ctaData.isInit = !0, t.ctaData.hasCTAItem = !0, t.ctaData.isStream = e.isStream(t), t.ctaData.shouldAdjustAllItemsHeight = !t.ctaData.isStream && !e.isSingleColumnWidget(t)
                    } catch (e) {
                        throw this.sendEvent(r, i, e.message, "error"), __trcError("Error on prepareDataForCTA", e), e
                    }
                }
                getCtaData(t) {
                    return this.ctaButtons[e.getItemId(t)]
                }
                static getItemId(e) {
                    return e.video_data.id
                }
                getFilterOutItemForCTAReason(t, r) {
                    const i = r.video_data;
                    return e.isNotSyndicated(i) || e.isInNetwork(i) || e.isNextUp(t) || e.isDescriptionBlocked(i) || e.isDetailOrderBlocked(r) || e.hasLink(r) || this.areVideoLabelBoxOrBrandingBlocked(r) || e.isBelowMinWidth(r) || e.isHeroWidget(r) || e.isStoryWidget(r) || e.isNextUpWidget(r) || e.hasIcon(r)
                }
                static isNotSyndicated(e) {
                    return e.isSyndicated ? null : "filtered_non_sc"
                }
                static isInNetwork(e) {
                    return e["is-in-network"] ? "filtered_in_network" : null
                }
                static isNextUp(e) {
                    const t = e.options && e.options.trcResponse && !!e.options.trcResponse.nup;
                    return t ? "filtered_next_up" : null
                }
                static isDescriptionBlocked(t) {
                    const r = !window.TRCImpl || !window.TRCImpl.global || e.nullish(window.TRCImpl.global["enable-cta-with-description"], !0);
                    return t.description && !r ? "filterd_item_with_description" : null
                }
                static isDetailOrderBlocked(e) {
                    const t = e.detail_order;
                    return t && t.length && "branding" === t[0] ? "filterd_item_branding_before_title" : null
                }
                static hasLink(e) {
                    const t = e.link;
                    return t ? null : "filtered_no_link"
                }
                areVideoLabelBoxOrBrandingBlocked(t) {
                    const r = t.querySelector(".video-label-box");
                    if (!r) return "filtered_no_video_label_box";
                    const i = r.querySelector(".branding");
                    return i ? this.isVideoLabelBoxHeightBlocked(r) || this.isVideoLabelBoxBoxSizingBlocked(r) || this.isBrandingMarginBlocked(i) || e.isBrandingPositionBlocked(i) || e.isBrandingInnerPositionBlocked(i) || e.isBrandingLogoPositionBlocked(i) : "filtered_no_branding"
                }
                isVideoLabelBoxHeightBlocked(t) {
                    const r = e.getComputedStyleProp(t, "height");
                    if (!r) return null;
                    const i = e.getVideoLabelBoxChildrenWithoutButtonHeight(t);
                    return r + this.ctaChildrenParentGap < i ? "filtered_videoLabelBox_smaller_than_children" : null
                }
                isVideoLabelBoxBoxSizingBlocked(t) {
                    const r = e.getComputedStyleProp(t, "boxSizing", null);
                    if (r && "border-box" === r) return null;
                    const i = t.getBoundingClientRect();
                    if (!i || i.width <= 0) return null;
                    const o = parseFloat(e.getComputedStyleProp(t, "width", 0)) / i.width;
                    if (o <= this.videoLabelBoxWidthRatio) return null;
                    const n = e.getComputedStyleProp(t, "paddingLeft", 0),
                        s = e.getComputedStyleProp(t, "paddingRight", 0);
                    return n > 0 || s > 0 ? "filtered_padding_on_full_width" : null
                }
                isBrandingMarginBlocked(t) {
                    const r = t.getBoundingClientRect();
                    if (!(r && r.width > 0)) return null;
                    const i = parseFloat(e.getComputedStyleProp(t, "margin-left", 0)) / r.width;
                    if (i > this.horizontalMarginToFilter) return "filtered_high_margin_left";
                    const o = parseFloat(e.getComputedStyleProp(t, "margin-right", 0)) / r.width;
                    return o > this.horizontalMarginToFilter ? "filtered_high_margin_right" : null
                }
                static isBrandingInnerPositionBlocked(t) {
                    const r = t.querySelector(".branding-inner");
                    return r && e.isElementPositionAbsolute(r) ? "filtered_branding_inner_absolute_position" : null
                }
                static isBrandingLogoPositionBlocked(t) {
                    const r = t.querySelector("div.logoDiv");
                    return r && e.isElementPositionAbsolute(r) ? "filtered_branding_logo_div_inner_absolute_position" : null
                }
                static isBrandingPositionBlocked(t) {
                    return e.isElementPositionAbsolute(t) ? "filtered_branding_absolute_position_item_renderer" : null
                }
                static isElementPositionAbsolute(t) {
                    const r = e.getComputedStyleProp(t, "position");
                    return !(!r || "absolute" !== r)
                }
                static isBelowMinWidth(e) {
                    const t = e.getBoundingClientRect().width;
                    return t > 0 && t < 170 ? "filtered_below_min_width" : null
                }
                static isHeroWidget(e) {
                    return e.rbox.mode_name && e.rbox.mode_name.indexOf("hero") > -1 ? "filtered_item_in_hero_widget" : null
                }
                static isStoryWidget(e) {
                    return e.rbox.container.querySelector(".story-widget") ? "filterd_item_in_reco_reel_story_widget" : null
                }
                static isNextUpWidget(e) {
                    return TRC.dom.containsClass(e, "tbl-next-up-widget-item") ? "filterd_item_next_up" : null
                }
                static hasIcon(e) {
                    return e.querySelector(".added-icon-svg") ? "filterd_item_branding_has_icon" : null
                }
                static getVideoLabelBoxChildrenWithoutButtonHeight(t) {
                    let r = 0;
                    const i = ["border-bottom-width", "border-top-width", "padding-bottom", "padding-top"];
                    if (i.forEach(i => {
                            r += e.getComputedStyleProp(t, i) || 0
                        }), t.hasChildNodes()) {
                        const i = t.childNodes;
                        for (let t = 0; t < i.length; t++) {
                            const o = i[t];
                            if (TRC.dom.containsClass(o, "video-cta-href")) continue;
                            const n = e.getHeightOfElementIncludeMargin(o);
                            r += n
                        }
                    }
                    return r
                }
                static getComputedStyleProp(e, t, r) {
                    const i = window.getComputedStyle(e),
                        o = i[t];
                    if (!o) return r || null;
                    const n = parseInt(i[t], 10);
                    return isNaN(n) ? i[t] : n
                }
                static getHeightOfElementIncludeMargin(t) {
                    const {
                        offsetHeight: r
                    } = t, i = e.getComputedStyleProp(t, "margin-top", 0), o = e.getComputedStyleProp(t, "margin-bottom", 0);
                    return r + i + o
                }
                static nullish(e, t) {
                    return null == e ? t : e
                }
                sendEvent(e, t, r, i, o) {
                    if (__trcDebug(`${this.moduleName} ${r} ${i} ${o} ${e.innerText}`), !TRC.ctaManager.shouldReport && !t.shouldReport) return;
                    const n = this.options.style || {},
                        s = {
                            location: TRC.ctaManager.windowLocation,
                            itemId: t.itemId,
                            rating: t.rating,
                            price: t.price,
                            text: t.actionText,
                            type: null != i ? i : "event",
                            description: o,
                            module: this.moduleName,
                            event: r,
                            cardIndexOnPage: t.cardIndex,
                            index: t.index,
                            placement: t.placement,
                            innerText: e.innerText,
                            config: {
                                borderColor: n.borderColor,
                                color: n.color,
                                fontSize: n.fontSize,
                                fontWeight: n.fontWeight,
                                isInheritTitleColor: this.options.isInheritTitleColor
                            }
                        };
                    window.TRCImpl.sendAbTestEvent(this.moduleName, JSON.stringify(s))
                }
                static roundHalf(e) {
                    return Math.round(2 * e) / 2
                }
                static isStream(e) {
                    const t = e.trc.getProperty(e.mode_name, "widget-creator-layout", e.propertiesOverride);
                    return "autowidget-template-stream" === t
                }
                static isSingleColumnWidget(e) {
                    const t = e.getEffectiveResponsiveRule();
                    return !(!t || 1 !== t.cells)
                }
            }
            TRC.CTAManager = e
        })(), (() => {
            const e = {},
                t = "page view Id str";

            function r() {
                return window.crypto.subtle.generateKey({
                    name: "AES-GCM",
                    length: 256
                }, !0, ["encrypt", "decrypt"])
            }

            function i(e, t, r) {
                return window.crypto.subtle.encrypt({
                    name: "AES-GCM",
                    iv: r,
                    tagLength: 128
                }, t, e)
            }

            function o(e) {
                return [...new Uint8Array(e)].map(e => e.toString(16).padStart(2, "0")).join("")
            }
            const n = function() {
                let n = null;
                return window._trcIsUTactive && (TRC.cryptoKeysUtils = {
                        resetPageViewUniqueIdPromise() {
                            n = null
                        }
                    }),
                    function() {
                        return e.pvuid ? Promise.resolve(e.pvuid) : n || (n = n || r().then(e => {
                            const r = new Uint8Array([188, 185, 57, 146, 246, 194, 114, 34, 12, 80, 198, 77]),
                                o = new TextEncoder,
                                n = o.encode(t);
                            return i(n, e, r)
                        }).then(t => {
                            const r = o(t);
                            return e.pvuid = r, e.pvuid
                        }))
                    }
            }();
            TRC.cryptoKeysManager = {
                getPageViewUniqueID: n
            }, window._trcIsUTactive && (TRC.cryptoKeysUtils.setPageViewUniqueID = function(t, r) {
                e[t] = r
            }, TRC.cryptoKeysUtils.PVUID_STR_LEN = 32 + 2 * t.length)
        })(), TRC.css = TRC.css || {}, TRC.css.utils = (() => {
            let e = 0,
                t = 0,
                r = "";
            const i = 4040,
                o = " style_split",
                n = "{class},",
                s = "vidiscovery-note";

            function a(e, r) {
                const i = e.indexOf("@media") >= 0 ? `${e.split("{")[0]}{` : "",
                    o = (e = i ? e.substring(e.indexOf("{") + 1) : e).split("{"),
                    n = o.length > 1 ? o[0].split(".") : e.split("."),
                    a = n.length;
                if (a < 2) return i + e;
                const l = n[1];
                return __trcTrim(l) === s ? i + e : (r[__trcTrim(l)] ? (h(1), n[0] = `#${r[__trcTrim(l)].cssDivsArr.join(" #")} ${n[0]}`) : (h(t), n[0] = g(n.join(".")) + n[0]), o.length > 1 ? (o[0] = n.join("."), i + o.join("{")) : i + n.join("."))
            }

            function l(e, t) {
                const r = e.split(","),
                    n = r.length;
                let s = "";
                if (u() > i && (s = o, __trcDebug(`Number of augmented css rules before Split : ${u()}`), p(0)), null === t) return c(n < 2 ? e : r, s);
                if (n < 2) return s + a(e, t);
                for (let i = 0; i < n && (r[i] = a(r[i], t), !(r[i].indexOf("{") >= 0 && i < n - 1)); i++);
                return s + r.join(",")
            }

            function c(e, t) {
                const r = e.length;
                if ("string" == typeof e) return h(1), t + e;
                for (let i = 0; i < r && (h(1), !(e[i].indexOf("{") >= 0 && i < r - 1)); i++);
                return t + e.join(",")
            }

            function d(e, t) {
                const r = e.split("}"),
                    i = r.length;
                return i < 2 ? l(e, t) : (r.forEach(e => l(e, t)), r.join("}"))
            }

            function h(t) {
                e += t
            }

            function p(t) {
                e = t
            }

            function u() {
                return e
            }

            function g(e) {
                return m(!1, !1).replace(new RegExp("{class}", "gm"), e)
            }

            function m(e, i) {
                let o;
                if ("object" == typeof e) {
                    r = "", Object.keys(e).forEach(i => {
                        "string" == typeof i && "" !== i && (o = `#${e[i].cssDivsArr.join(" #")} `, r = `${r}${o} ${n}`), t++
                    });
                    const s = `#${i.iframe.join(" #")} ${n}`,
                        a = `#${i.topDiv.join(" #")} ${n}`,
                        l = r.slice(0, r.length - n.length);
                    return r = `${s}${a}${l}`
                }
                return r
            }

            function b(e, t, r) {
                const i = e.trc.vl,
                    {
                        modes: o
                    } = r,
                    n = o[TRC.inflate.COMMON];
                let s = "",
                    a = "";
                return i && i.forEach((i, l) => {
                    const c = f(e, i, l, r);
                    c.forEach(e => {
                        TRC.injectedModes.indexOf(e) < 0 && o[e] && (s += TRC.inflate.inflateStyle(e, TRC.inflate.inflateObject(n[TRC.inflate.STYLE], o[e][TRC.inflate.STYLE])), t && o[e].mode_custom && (a += o[e].mode_custom), TRC.injectedModes.push(e))
                    })
                }), {
                    inflatedStyle: s,
                    customCss: a
                }
            }

            function f(e, t, r, i) {
                const {
                    TRCRBox: o
                } = TRC.implClasses, n = i.preloadRequest[t.fpl || t.uuip || t.uip], s = o.prototype.calcModeName(i.addVariantProperties(null, e, r).trc, n ? n.mode : void 0), a = v(s, t, n, i);
                let l = a ? [a] : [];
                return t.multiWidget && t.multiWidget.children && (l = [...l, ...C(t.multiWidget.children)]), l
            }

            function v(e, t, r, i) {
                return i.modes[e] ? e : i.modes[t.m] ? t.m : r && i.modes[r.mode] ? r.mode : void 0
            }

            function C(e) {
                let t = [];
                return e.forEach(e => {
                    e.children ? t = [...t, ...C(e.children)] : e.name && t.push(e.name)
                }), t
            }
            return {
                bakeCss(e, t) {
                    const r = t.global["enable-custom-injection"];
                    TRC.injectedModes = TRC.injectedModes || [];
                    let i = TRC.injectedCustomStyle ? "" : t.defaults.style + t.global.style.rtl;
                    const o = b(e, r, t);
                    i += o.inflatedStyle, i += t.global.style.custom && !TRC.injectedCustomStyle ? t.global.style.custom : "", i += r ? o.customCss ? o.customCss : "" : t.global.style.mode_custom && !TRC.injectedCustomStyle ? t.global.style.mode_custom : "", (i += TRC.injectedCustomStyle ? "" : TRC.dom.pullAggregatedStyle()) && (TRC.dom.injectStyle(i, null), TRC.injectedCustomStyle = !0)
                },
                setStyleTextIdPrefix(e, t, r) {
                    t && m(t, r);
                    const i = d(e, t);
                    return __trcDebug(`Number of augmented css rules left : ${u()}`), p(0), i
                },
                setStyleElements(e) {
                    const t = e.split(o),
                        r = t.length;
                    r > 1 && TRC.pConsole("page", "debug", "splitting css", ""), t.forEach(e => TRC.dom.injectStyle(e))
                },
                setStyleProperty(e, t, r, i) {
                    let {
                        cssText: o
                    } = e.style;
                    o += `;${t}:${r}${i?"!important":""}`, e.style.cssText = o
                },
                generateCssRuleWithVendorPrefixes(e, t) {
                    const r = [" -webkit-", "-moz-", "-ms-", "-o-"],
                        i = "{property}: {value};",
                        o = i.replace("{property}", e).replace("{value}", t),
                        n = [];
                    return r.forEach(e => n.push(e + o)), n.push(o), n.join(" ")
                },
                escape: (() => window.CSS && window.CSS.escape || function(e) {
                    const t = function(e) {
                        this.message = e
                    };
                    (t.prototype = new Error).name = "InvalidCharacterError";
                    const r = String(e),
                        {
                            length: i
                        } = r;
                    let o = -1,
                        n, s = "";
                    const a = r.charCodeAt(0);
                    for (; ++o < i;) {
                        if (0 === (n = r.charCodeAt(o))) throw new t("Invalid character: the input contains U+0000.");
                        n >= 1 && n <= 31 || 127 === n || 0 === o && n >= 48 && n <= 57 || 1 === o && n >= 48 && n <= 57 && 45 === a ? s += `\\${n.toString(16)} ` : s += n >= 128 || 45 === n || 95 === n || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 ? r.charAt(o) : `\\${r.charAt(o)}`
                    }
                    return s
                })()
            }
        })(window), TRC.css.Stack = function(e, t) {
            const {
                stack: r,
                idPrefix: i = "tab_"
            } = e, o = {}, n = document.createDocumentFragment(), s = t ? document.head.appendChild(document.createElement("style")) : null;
            r.forEach(e => o[e.type] = TRC.dom.injectStyle(e.cssText || "", n, i + e.type)), this.injectAllStyles = function() {
                s ? document.head.insertBefore(n, s) : document.head.appendChild(n), TRC.styleInjected = !0
            }, this.addStyle = function(e, t, r) {
                const s = o[e],
                    a = r ? document : n,
                    l = i + e;
                t && (s ? s.styleSheet ? s.styleSheet.cssText += t : s.appendChild(document.createTextNode(t)) : o[e] = TRC.dom.injectStyle(t, a, l))
            }
        }, TRC.css.responsive = function() {
            function e(e, t) {
                return (99.99 - e * t) / e
            }

            function t(t, r, i, o, n, s) {
                const a = e(t, i),
                    l = "rtl" === s ? "right" : "left",
                    {
                        utils: c
                    } = TRC.css,
                    d = `.${r} .videoCube{width: ${a}%; position: relative; float: ${l}; margin: 0 0 ${i}% 0; margin-${l}: ${i}%;}`;
                n ? o.push(c.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset)) : o.push(d)
            }

            function r(e, t, r, i, o) {
                const n = "rtl" === o ? "right" : "left",
                    s = "rtl" === o ? "left" : "right",
                    a = `.${t} .trc_rbox_div .videoCube {width: ${1==+e.cells?"100":"48"}%;}`,
                    l = `.${t} .trc_header_left_column {width: ${1==+e.cells?"100":"48"}%;}`,
                    c = `.${t} .trc_header_right_column {display: ${1==+e.cells?"none":"inline"};}`,
                    d = `.${t} .trc_rbox_div div.videoCube:nth-of-type(-n+${e.rows}){float:${n};clear:${n};}`,
                    h = `.${t} .trc_rbox_div div.videoCube:nth-of-type(n+${e.rows+1}){float:none;clear:${s};margin-${n}:auto;}`;
                i ? (r.push(TRC.css.utils.setStyleTextIdPrefix(h, TRC.modesCache, TRC.lightBoxCssReset)), r.push(TRC.css.utils.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset)), r.push(TRC.css.utils.setStyleTextIdPrefix(a, TRC.modesCache, TRC.lightBoxCssReset)), r.push(TRC.css.utils.setStyleTextIdPrefix(l, TRC.modesCache, TRC.lightBoxCssReset)), r.push(TRC.css.utils.setStyleTextIdPrefix(c, TRC.modesCache, TRC.lightBoxCssReset))) : (r.push(h), r.push(d), r.push(a), r.push(l), r.push(c))
            }

            function i(e, t, r, i, n, s, a) {
                const l = e.rows * e.cells,
                    c = `.${t} div.videoCube:nth-of-type(-n+${l}){display:block;visibility:visible;}`,
                    d = `.${t} div.videoCube:nth-of-type(n+${l+1}){display:none;visibility:hidden;}`;
                n ? (r.push(TRC.css.utils.setStyleTextIdPrefix(c, TRC.modesCache, TRC.lightBoxCssReset)), r.push(TRC.css.utils.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset))) : (r.push(c), r.push(d)), s && o(e, t, r, a)
            }

            function o(e, t, r, i) {
                const o = e.cells,
                    n = o / i * 100;
                r.push(`.${t} .trc_rbox_div { width: ${n}%; }`), r.push(`.${t} .trc_rbox_outer { overflow-x: scroll; -webkit-overflow-scrolling: touch; }`)
            }

            function n(e, t, r, i, o) {
                const n = "rtl" === r ? "right" : "left";
                return i ? `.${t} .trc_rbox_div{margin-${n}:-${e.margin*e.cells/o}%;}` : `.${t} .trc_rbox_outer{margin-${n}:-${e.margin}%;}`
            }

            function s(e, r, i, o, s, a, l) {
                const c = 1 == +e.cells ? "video-label-box" : "trc-main-label",
                    d = `.${r} .trc_rbox_outer .videoCube .${c} {height:auto;}`,
                    h = `.${r} .trc_rbox_outer .videoCube {margin-bottom:10px;}`,
                    p = n(e, r, s, a, l),
                    u = TRCImpl.global["disable-one-row-widget-auto-height"],
                    g = (a || !u) && 1 == +e.rows;
                (1 == +e.cells || g) && (o ? (i.push(TRC.css.utils.setStyleTextIdPrefix(d, TRC.modesCache, TRC.lightBoxCssReset)), i.push(TRC.css.utils.setStyleTextIdPrefix(h, TRC.modesCache, TRC.lightBoxCssReset))) : (i.push(d), i.push(h))), o ? i.push(TRC.css.utils.setStyleTextIdPrefix(p, TRC.modesCache, TRC.lightBoxCssReset)) : i.push(p), i.push(`.${r} .videoCube_aspect{padding-bottom:${e.ratio}%; width: 100%;}`), t(e.cells, r, e.margin, i, o, s)
            }
            return {
                injectedStyles: {},
                rulesToCssText(e, t, o, n, a, l, c, d) {
                    const h = [];
                    let p, u, g;
                    for (p = 0; u = t[p]; p++)(g = void 0 !== u.min || void 0 !== u.max) && h.push("@media screen and "), void 0 !== u.min && (h.push(`(min-width: ${u.min}px) `), u.max && h.push("and ")), void 0 !== u.max && h.push(`(max-width: ${u.max}px) `), g && h.push("{"), a ? r(u, e, h, n, l) : s(u, e, h, n, l, c, d), i(u, e, h, o, n, c, d), g && h.push("} ");
                    return h.join("")
                },
                getRulePercentageWidth: e
            }
        }(), (() => {
            const e = {
                now: "Now",
                today: "Today",
                yesterday: "Yesterday",
                minutes: "{0} minutes ago",
                hour: "1 hour ago",
                hours: "{0} hours ago",
                days: "{0} days ago"
            };
            TRC._translationQueue = TRC._translationQueue || [], TRC._translationQueue.push({
                "time-ago": e
            });
            class t {
                static setTimeAgoCustomLanguage() {
                    __trcWarn("TRCRbox.dateFormatDays - custom language is depreciated")
                }
                static dateFormatTimeAgo(r, i, o) {
                    let n;
                    if (!r || 0 === parseInt(r, 10) || isNaN(r)) return __trcWarn(`TRCRbox.dateFormatDays - published_date cannot be parsed, it is ${r}`), "";
                    n = new Date(1e3 * parseInt(r, 10));
                    const s = "time-ago",
                        {
                            getLabel: a
                        } = TRC.translationManager,
                        l = a({
                            feature: "time-ago"
                        }) || e,
                        c = new Date,
                        d = Date.now() - n.getTime();
                    try {
                        if (d < 30 * t.minute) return a({
                            feature: s,
                            label: "now"
                        });
                        if (d < t.hour) {
                            const e = Math.floor(d / t.minute);
                            return a({
                                feature: s,
                                label: "minutes",
                                data: [e]
                            })
                        }
                        if (d < 7 * t.hour) {
                            const e = Math.floor(d / t.hour);
                            return 1 === e ? a({
                                feature: s,
                                label: "hour"
                            }) : !l["hours-above5"] || e < 5 ? a({
                                feature: s,
                                label: "hours",
                                data: [e]
                            }) : a({
                                feature: s,
                                label: "hours-above5",
                                data: [e]
                            })
                        }
                        if (d < 24 * t.hour && c.getDate() === n.getDate()) return a({
                            feature: s,
                            label: "today"
                        });
                        if (TRC.util.isTrue(TRCImpl.global["timeago-string-dates"])) return o.formatData("published-date", r);
                        if (d < 48 * t.hour) return a({
                            feature: s,
                            label: "yesterday"
                        });
                        const e = Math.floor(d / t.day);
                        return !l["days-above5"] || e < 5 ? a({
                            feature: s,
                            label: "days",
                            data: [e]
                        }) : a({
                            feature: s,
                            label: "days-above5",
                            data: [e]
                        })
                    } catch (e) {
                        return __trcError(`TRCRbox.dateFormatDays - error in calculating time ago. this might be due to bad date or custom lang not properly init. date: ${r} lang: ${i}`), ""
                    }
                }
                static dateFormatISO(e) {
                    const t = new Date(1e3 * parseInt(e, 10)),
                        r = t.getFullYear();
                    let i = t.getMonth() + 1,
                        o = t.getDate();
                    return o < 10 && (o = `0${o}`), i < 10 && (i = `0${i}`), `${r}-${i}-${o}`
                }
                static dateFormatAmerican(e) {
                    const t = new Date(1e3 * parseInt(e, 10)),
                        r = t.getFullYear(),
                        i = t.getMonth() + 1,
                        o = t.getDate();
                    return `${i}/${o}/${r}`
                }
                static dateFormatEuropean(e) {
                    const t = new Date(1e3 * parseInt(e, 10)),
                        r = t.getFullYear(),
                        i = t.getMonth() + 1,
                        o = t.getDate();
                    return `${o}/${i}/${r}`
                }
            }
            t.millisecond = 1, t.second = 1e3 * t.millisecond, t.minute = 60 * t.second, t.hour = 60 * t.minute, t.day = 24 * t.hour, TRC.DateUtils = t
        })(), TRC.modDebug = function(e, t) {
            var r = 2,
                i, o = (n = {}, {
                    setMessageCache: function(e) {
                        n[e] ? n[e] += 1 : n[e] = 1
                    },
                    getMessageCount: function(e) {
                        return n[e] ? n[e] : 0
                    }
                }),
                n;

            function s(e) {
                switch (e) {
                    case 0:
                        return "error";
                    case .5:
                        return "perf";
                    case 1:
                        return "warn";
                    case 2:
                        return "info";
                    case 3:
                        return "debug";
                    case 4:
                        return "usage";
                    default:
                        return
                }
            }
            return i = {
                logMessageToServer: function(t, i, n, s, a) {
                    if (o.setMessageCache(i), o.getMessageCount(i) <= r || s) {
                        var l = e.TRCImpl && TRCImpl.domain ? TRCImpl.domain : "trc.taboola.com",
                            c = e.TRCImpl ? TRCImpl["normalize-log-param"]("publisher", TRC.publisherId) : TRC.publisherId,
                            d = __trcClientTimestamp(),
                            h = TRC.newDebugLogger.logMsg.bind(TRC.newDebugLogger);
                        TRCImpl.trcEventRoute && TRCImpl.eventTypesToRoute.indexOf("debug") > -1 ? (h(TRCImpl.trcEventRoute, t, i, d, c, n, a), TRCImpl.enableTrcEventRouteExperiment && h(l, t, i, d, c, n, a)) : h(l, t, i, d, c, n, a)
                    }
                },
                getType: s
            }
        }(window, document), (() => {
            const e = "-delta",
                t = (r, i) => {
                    if (r.children) r.children.forEach(e => {
                        t(e, i)
                    });
                    else if (r.name && !o(r.name) && r.dlt) {
                        const t = r.name + e;
                        i.modes[t] ? r.name = t : i.modes[r.name] && __trcWarn(`Could not resolve Multi-Widget delta mode name ${t}`)
                    }
                },
                r = (t, r) => {
                    const i = t.m + e;
                    o(t.m) || (r.modes[i] ? t.m = i : r.modes[t.m] && __trcWarn(`Could not resolve Feed / Added Widget delta mode name ${i}`))
                },
                i = (t, r) => {
                    const i = r.preloadRequest[t.uip];
                    if (i) {
                        if (o(i.mode)) return;
                        const t = i.mode + e;
                        r.modes[t] ? i.mode = i.mode_name = t : r.modes[i.mode] && __trcWarn(`Could not resolve Widget delta mode name ${t}`)
                    } else __trcWarn(`Delta mode replace: placement ${t.uip} is missing from preloadRequest`)
                },
                o = t => new RegExp(`${e}$`).test(t);
            TRC.deltaModeAdapter = {
                switchModeNamesIfInDeltaTest(e, o) {
                    o && o.trc && o.trc.vl && o.trc.vl.length && o.trc.vl.forEach(o => {
                        TRC.util.isTrue(o.dlt) && (o.multiWidget ? t(o.multiWidget, e) : o.m ? r(o, e) : i(o, e))
                    })
                }
            }
        })(),
        function(e, t) {
            var r = [],
                i = null,
                o = !1,
                n, s, a;

            function l(e) {
                try {
                    if (i && (TRC.Browser["ieUpto"](10) ? t.detachEvent("onreadystatechange", i) : (t.removeEventListener("DOMContentLoaded", arguments.callee, !1), TRC.Interval.clear(i))), TRC.dom.isReady) return;
                    TRC.dom.isReady = !0, TRC.dom.onReady = function(e) {
                        e()
                    };
                    for (var o = 0; o < r.length; o++) r[o]()
                } catch (e) {
                    __trcError("Error in DOMReady processing", e)
                }
            }

            function c() {
                return e.pageXOffset || t.body.scrollLeft
            }
            TRC.dom = {
                injectedStyles: [],
                aggregatedStyles: "",
                isReady: !1,
                onReady: function(e, t) {
                    t ? TRC.Timeout.set(e, 10) : r.push(e)
                },
                init: function() {
                    if (!o)
                        if (o = !0, t.readyState && /loaded|complete/.test(t.readyState)) l(!0);
                        else {
                            if (TRC.Browser["ieUpto"](10)) {
                                var r = t.createElement("div");
                                ! function() {
                                    try {
                                        r.doScroll("left")
                                    } catch (e) {
                                        return void(r.to = TRC.Timeout.set(arguments.callee, 10))
                                    }
                                    l()
                                }(), t.attachEvent("onreadystatechange", i = function() {
                                    /loaded|complete/.test(t.readyState) && (TRC.Timeout.clear(r.to), l())
                                })
                            } else {
                                if (/interactive/.test(t.readyState)) return void l(!0);
                                t.addEventListener("DOMContentLoaded", l, !1), i = TRC.Interval.set(function() {
                                    /loaded|complete|interactive/.test(t.readyState) && l()
                                }, 10)
                            }
                            var n = e.onload;
                            e.onload = function() {
                                if (l(), n) try {
                                    n()
                                } catch (e) {}
                            }
                        }
                },
                on: e.addEventListener ? function(e, t, r) {
                    var i;
                    "touchstart" !== t && "touchmove" !== t || !TRC.Browser.compatibility.passiveEvents || (i = {
                        passive: !0
                    }), e.addEventListener(t, r, i)
                } : e.attachEvent ? function(e, t, r) {
                    e.attachEvent("on" + t, r)
                } : void(el["on" + sType] = fn),
                off: e.removeEventListener ? function(e, t, r) {
                    e.removeEventListener(t, r, !1)
                } : e.detachEvent ? function(e, t, r) {
                    e.detachEvent("on" + t, r)
                } : void(el["on" + sType] = fn),
                getText: function(e) {
                    return e.textContent || e.innerText || e.innerHTML
                },
                lineHeight: function(e) {
                    var t;
                    return e.computedClientHeight || (t = e.style.display, e.style.display = "inline-block", e.computedClientHeight = parseFloat(getComputedStyle(e).height), e.style.display = t), e.computedClientHeight
                },
                isAncestor: function(e, t, r) {
                    for (t = r ? t : t.parentNode; t && t !== e && 9 != t.nodeType;) t = t.parentNode;
                    return e === t
                },
                pullAggregatedStyle: function() {
                    var e = this.aggregatedStyles;
                    return this.aggregatedStyles = "", e
                },
                aggregateStyles: function(e) {
                    TRC.styleInjected ? this.injectStyle(e) : this.aggregatedStyles += e
                },
                injectStyle: function(e, r, i) {
                    var o = document.createElement("style"),
                        r = r || t;
                    return o.type = "text/css", i && (o.id = i), r.head ? r.head.appendChild(o) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)), this.injectStyleOverflowFix(e), TRC.styleInjected = !0, this.injectedStyles.push(o), o
                },
                injectStyleOverflowFix: function(e) {
                    if (TRC.Browser.ie && 31 == document.styleSheets.length) {
                        var r = document.getElementById("trc_rbox_css_loaded");
                        if (null == r && ((r = document.createElement("div")).id = "trc_rbox_css_loaded", t.body.appendChild(r)), "hidden" != document.trcGetCurrentStyle(r, "overflow")) {
                            var i = e.split("}"),
                                o = null;
                            try {
                                for (var n = 0; n < document.styleSheets.length; n++) {
                                    var s = document.styleSheets[n];
                                    if (i.length + s.rules.length <= 4096) {
                                        o = s;
                                        break
                                    }
                                }
                                null != o && (o.cssText += e)
                            } catch (e) {
                                __trcError("Error in injectStyleOverflowFix processing", e)
                            }
                        }
                    }
                },
                removeAllInjectedStyleSheets: function() {
                    for (var e, t = 0; t < this.injectedStyles.length; t++)(e = this.injectedStyles[t]).parentNode && e.parentNode.removeChild(e);
                    this.injectedStyles = [], this.aggregatedStyles = "", TRC.styleInjected = !1, TRC.css.responsive.injectedStyles = []
                },
                swapElements: function(e, t, r) {
                    return r && TRC.dom.purgeEventHandlers(e), e && e.parentNode && e.parentNode.replaceChild(t, e), t
                },
                iterateOnNode: function(e, t) {
                    for (t(e), e = e.firstChild; e;) arguments.callee(e, t), e = e.nextSibling
                },
                purgeEventHandlers: function(e) {
                    try {
                        TRC.dom.iterateOnNode(e, function(e) {
                            for (var t in e) "function" == typeof e[t] && (e[t] = null)
                        })
                    } catch (e) {
                        __trcError("TRC.dom.purgeEventHandlers : ", e.message)
                    }
                },
                clearInnerElements: function(e) {
                    for (var t; t = e.firstChild;) this.purgeEventHandlers(t), e.removeChild(t)
                },
                stopEvent: function(e) {
                    return e.cancelBubble = !0, e.returnValue = !1, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), !1
                },
                addClass: function(e, t) {
                    e && (e.className += " " + t + " ")
                },
                removeClass: function(e, t) {
                    var r;
                    if (e) {
                        if (e.classList) return e.classList.remove(t);
                        r = new RegExp("s*" + t, "g"), e.className = e.className.replace(r, "")
                    }
                },
                containsClass: function(e, t) {
                    return e && e.className.split(" ").indexOf(t) > -1
                },
                detectAnimationEvent: function(e, t) {
                    var r = "animation" + t,
                        i = {
                            animation: "animation" + t,
                            WebkitAnimation: "webkitAnimation" + t.charAt(0).toUpperCase() + t.slice(1),
                            OAnimation: "oanimation" + t,
                            MozAnimation: "animation" + t,
                            MSAnimation: "MSAnimation" + t
                        };
                    return Object.keys(i).some(function(t) {
                        if (void 0 !== e.style[t]) return r = i[t], !0
                    }), r
                },
                createHTMLElement: function(e, t) {
                    var r;
                    return r = document.createElement(e), t && Object.keys(t).length && Object.keys(t).forEach(function(e) {
                        r[e] = t[e]
                    }), r
                },
                elementMatchesSelector: function(e, t) {
                    var r, i;
                    return ["matches", "msMatchesSelector", "oMatchesSelector", "mozMatchesSelector", "webkitMatchesSelector"].some(function(t) {
                        return "function" == typeof e[t] && (i = t), e[t]
                    }), i ? e[i](t) : null
                },
                closest: function(e, t) {
                    if (TRC.util.isNativeFunction(e.closest)) return e.closest(t);
                    for (; !this.elementMatchesSelector(e, t);)
                        if (!(e = e.parentElement)) return null;
                    return e
                },
                getWindowWidth: function() {
                    return window.innerWidth ? this.getWindowWidth = function() {
                        return window.innerWidth
                    } : 0 != document.documentElement.clientWidth ? this.getWindowWidth = function() {
                        return document.documentElement.clientWidth
                    } : this.getWindowWidth = function() {
                        return document.body.clientWidth
                    }, this.getWindowWidth()
                },
                getWindowHeight: function() {
                    return window.innerHeight ? this.getWindowHeight = function() {
                        return window.innerHeight
                    } : 0 != document.documentElement.clientHeight ? this.getWindowHeight = function() {
                        return document.documentElement.clientHeight
                    } : this.getWindowHeight = function() {
                        return document.body.clientHeight
                    }, this.getWindowHeight()
                },
                getDocumentWidth: function() {
                    return Math.max(Math.max(t.body.scrollWidth, t.documentElement.scrollWidth), Math.max(t.body.offsetWidth, t.documentElement.offsetWidth), Math.max(t.body.clientWidth, t.documentElement.clientWidth))
                },
                getDocumentHeight: function() {
                    return Math.max(Math.max(t.body.scrollHeight, t.documentElement.scrollHeight), Math.max(t.body.offsetHeight, t.documentElement.offsetHeight), Math.max(t.body.clientHeight, t.documentElement.clientHeight))
                },
                getScreenDensity: function() {
                    var e = window.devicePixelRatio && window.devicePixelRatio.toFixed(3);
                    return e || (e = -1), e
                },
                getPageVerticalScroll: function() {
                    return e.pageYOffset || t.body.scrollTop
                },
                getScrollTop: function(t) {
                    return t === e ? this.getPageVerticalScroll() || document.documentElement.scrollTop : t.scrollTop
                },
                getViewportVerticalRange: function() {
                    var e = this.getPageVerticalScroll(),
                        t;
                    return {
                        min: e,
                        max: e + this.getWindowHeight()
                    }
                },
                getViewportHorizontalRange: function() {
                    var e = c(),
                        t;
                    return {
                        min: e,
                        max: e + this.getWindowWidth()
                    }
                },
                getElementRect: function(e) {
                    return e.getBoundingClientRect()
                },
                isInIframe: function(t) {
                    try {
                        return e.top !== e.self
                    } catch (e) {
                        return "boolean" == typeof t && t
                    }
                },
                createAugmentingContainers: function(e, t) {
                    for (var r = [], i = null, o, n = 0; n < e; n++) i = o = this.createAugmentingContainer(i), r.push(o);
                    return t && r[e - 1].appendChild(t), r
                },
                createAugmentingContainer: function(e) {
                    var r = t.createElement("div");
                    return r.id = "tbl-aug-" + Math.floor(2147483648 * Math.random()).toString(36), e && e.appendChild(r), r
                },
                generateAugmentationPrefix: function(e) {
                    for (var t = "", r = 0; r < e.length; r++) t += "#" + e[r].id + " ";
                    return t
                },
                isHighDensity: (a = window.matchMedia && (window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches) || window.devicePixelRatio && window.devicePixelRatio > 1.3, function() {
                    return a
                }),
                isSmartPhone: (s = window.matchMedia && window.matchMedia(" only screen and (min-device-width : 320px) and (max-device-width : 480px)").matches || /(iPhone|iPod)/g.test(navigator.userAgent), function() {
                    return s
                }),
                isTablet: (n = window.matchMedia && window.matchMedia(" only screen and (min-device-width : 768px) and (max-device-width : 1024px)").matches || /(iPhone|iPod)/g.test(navigator.userAgent), function() {
                    return n
                }),
                isDesktop: function() {
                    return !(this.isTablet() || this.isSmartPhone())
                },
                getOuterWidth: function(e) {
                    var t, r, i;
                    return e.getBoundingClientRect().width + parseFloat(getComputedStyle(e).marginLeft) + parseFloat(getComputedStyle(e).marginRight)
                },
                isHtmlContent: function(e) {
                    return /(?:%3C|[<>&])/.test(e)
                },
                setContentToElement: function(e, t) {
                    TRC.dom.isHtmlContent(t) ? e.innerHTML = t : e.innerText = t
                }
            }
        }(window, document), (() => {
            const e = {
                ID: "id",
                TITLE: "title",
                THUMBNAIL: "thumb",
                FOUND: "found"
            };
            class t {
                constructor(e, t) {
                    this.trcManager = e, this.parentContainerSelector = t.parentContainerSelector, this.additionalLogDataBuilder = t.additionalLogDataBuilder, this.isDedupEventSent = !1, this.initReportedItemsMap(), this.trcManager.sendPubsGenericEvent("DEDUP_DEBUG", "true"), TRC.modDebug.logMessageToServer(1, "Duplicated items monitoring enabled", {
                        pcs: this.parentContainerSelector,
                        vi: TRC.pageManager.getPageData()
                    })
                }
                initReportedItemsMap() {
                    this.reportedItems = {}, Object.keys(e).forEach(t => {
                        const r = e[t];
                        this.reportedItems[r] = []
                    })
                }
                checkForDuplicatedItems() {
                    if (this.isDedupEventSent) return;
                    const t = [].slice.call(document.querySelectorAll(`${this.parentContainerSelector} .videoCube`));
                    this.checkAndNotifyMetaDataDuplication(t, e.ID) || (this.checkAndNotifyMetaDataDuplication(t, e.TITLE), this.checkAndNotifyMetaDataDuplication(t, e.THUMBNAIL))
                }
                checkAndNotifyMetaDataDuplication(e, r) {
                    const i = `data-item-${r}`,
                        o = e.map(e => e.getAttribute(i)),
                        n = e.filter(e => t.isItemMetaDataFoundMoreThanOnce(e, o, i));
                    if (n.length) return n.forEach(e => this.notifyItemMetaDataDuplication(e, i, r)), !0
                }
                static isItemMetaDataFoundMoreThanOnce(e, t, r) {
                    const i = e.getAttribute(r);
                    return t.indexOf(i) !== t.lastIndexOf(i)
                }
                notifyItemMetaDataDuplication(t, r, i) {
                    if (-1 !== this.reportedItems[i].indexOf(t) || this.isDedupEventSent) return;
                    const o = `DUP_${e.FOUND.toUpperCase()}`,
                        n = t.getAttribute("data-item-id"),
                        s = t.getAttribute(r),
                        a = {
                            mdt: i,
                            md: s,
                            ii: n,
                            pcs: this.parentContainerSelector,
                            vi: TRC.pageManager.getPageData()
                        };
                    this.trcManager.sendPubsGenericEvent(o, n), "function" == typeof this.additionalLogDataBuilder && __trcCopyProps(this.additionalLogDataBuilder(t), a), TRC.modDebug.logMessageToServer(1, "Duplicated item served", a, !0), this.reportedItems[i].push(t), this.isDedupEventSent = !0
                }
            }
            TRC.DuplicatedItemsMonitor = t
        })(), (() => {
            function e(e) {
                if (TRC.DynamicModulesHooks) {
                    const t = TRC.DynamicModulesHooks.filter(t => t.type === e);
                    if (t) return t
                }
                return []
            }

            function t(e) {
                TRC.DynamicModulesHooks && TRC.DynamicModulesHooks.forEach(t => {
                    t.type === e && t.callback && t.callback()
                })
            }
            TRC.DynamicModulesManager = {
                getDynamicModules: e,
                executeDynamicModules: t
            }
        })(),
        function(e, t) {
            var r = {},
                i = e.TRC,
                o;

            function n(e, t) {
                e.innerHTML = r._tokenizeSingle(i.dom.getText(e), t)
            }

            function s(e, t) {
                if (e) {
                    var r = o(function e(t) {
                            return t.className.search("title") >= 0
                        }, e, "span"),
                        i = o(function e(t) {
                            return t.className.search("description") >= 0
                        }, e, "span");
                    t.call(this, e, r, i)
                }
            }

            function a(e) {
                return function(t) {
                    for (var r in t) {
                        var i;
                        if (t.hasOwnProperty(r)) t[r].boxes.forEach(function t(r) {
                            s(r.labelsBox, e), s(r.preLabelsBox, e)
                        })
                    }
                }
            }
            i.Ellipsis = r, r.doEllipsis = function(e) {
                o = o || i.implClasses.TRCRBox.prototype.findElement, i.ellipsisPerf && console.timeStamp("Taboola new ellipsis"), i.performance && i.performance.mark("7.2.1", null, "Ellipsis", "all", "SmartEllipsis", i.PerfEvenType.START), r.measure(e), r.renderEllipsis(e), i.performance && i.performance.mark("7.2.9", null, "Ellipsis", "all", "SmartEllipsis", i.PerfEvenType.STOP)
            }, r.tokenize = function(e, t) {
                return t = t in r._tokenizeStrategies ? t : "word", a(function(e, i, o) {
                    e.trcEllipsisTokenized && delete e.trcEllipsisTokenized;
                    var s = r._tokenizeStrategies[t];
                    i && n(i, s), o && n(o, s), e.trcEllipsisTokenized = !0
                })(e)
            }, r.verifyTokenized = function(e) {
                var t = !0;
                return a(function(e) {
                    t = t && e.trcEllipsisTokenized
                })(e), t
            }, r.measure = a(function(e, t, i) {
                var o = t && r._measureSingleElementSizes(t),
                    n = i && r._measureSingleElementSizes(i);
                e.trcEllipsisPositions = {
                    title: o,
                    description: n
                }
            }), r.renderEllipsis = a(function(e, t, i) {
                var o = e.trcEllipsisPositions;
                if (!o || t && !o.title || i && !o.description) __trcDebug("Calling renderEllipsis without measuring first. Skipping");
                else try {
                    t && r._repaintSingleEllipsis(t, o.title), i && r._repaintSingleEllipsis(i, o.description)
                } catch (e) {
                    __trcDebug(e.message + ". Skipping")
                }
            }), r._tokenizeStrategies = {
                word: function(e) {
                    return {
                        spaces: !0,
                        tokens: e.split(/\s+/)
                    }
                },
                letter: function(e) {
                    return {
                        spaces: !1,
                        tokens: e.match(/&[\w#]+;|./g)
                    }
                }
            }, r._tokenizeSingle = function(e, t) {
                var r = t.call(this, e);
                return i.util.map(r.tokens, function(e) {
                    return " " === e ? e : "<ins>" + e + "</ins>"
                }).join(r.spaces ? " " : "")
            }, r._measureSingleElementSizes = function(e) {
                if (!e || !e.offsetHeight) return null;
                if (!e.firstChild || "INS" != e.firstChild.tagName) return __trcDebug("Attempted to call measure on element before tokenize. Skipping");
                var t = o(function e(t) {
                    return t.className.search("lastLineEllipsis") >= 0
                }, e, "ins");
                if (t) {
                    var r = e.getElementsByTagName("ins");
                    if (t.className.replace(/[\t\r\n\f]/g, " ").indexOf("tblHideAllButFirst") >= 0)
                        for (var n = 0; n < r.length; n++) {
                            var s;
                            (s = r[n]).style.display = ""
                        }
                    t.parentNode.removeChild(t)
                }
                for (var r = e.getElementsByTagName("ins"), a = i.dom.lineHeight(r[0]), l = Math.floor(parseFloat(getComputedStyle(e).height) / a) * a, c = l - a, d = e.offsetWidth, h = r[0].offsetWidth, p = [], u, g, n = 0; n < r.length; n++) {
                    var s = r[n];
                    void 0 === u && s.offsetTop >= c && (u = r[n]), void 0 !== u && p.push(i.dom.getText(s)), !g && s.offsetTop >= l && (g = r[n - 1])
                }
                return {
                    lastLineStartsAt: u,
                    lastVisibleWord: g,
                    singleLineContent: p,
                    elementWidth: d,
                    firstWordWidth: h
                }
            }, r._repaintSingleEllipsis = function(e, o) {
                if (o.lastVisibleWord) {
                    var n = t.createElement("ins");
                    i.dom.addClass(n, "lastLineEllipsis");
                    var s = e.tokenizeStrategy || "word",
                        a = r._tokenizeStrategies[s]("").spaces;
                    if (n.appendChild(document.createTextNode(o.singleLineContent.join(a ? " " : ""))), e.insertBefore(n, o.lastLineStartsAt), "word" === s && o.firstWordWidth >= o.elementWidth)
                        for (var l = e.getElementsByTagName("ins"), c = 0; c < l.length; c++) {
                            var d = l[c]; - 1 == d.className.replace(/[\t\r\n\f]/g, " ").indexOf("lastLineEllipsis") ? d.style.display = "none" : d.className += " tblHideAllButFirst"
                        }
                }
            }
        }(window, document), TRC.eventDelegator = function(e, t) {
            var r = [],
                i = {},
                o;

            function n(e, t) {
                var i;
                r[e] && (s(i = r[e]["_all"], t || ""), t && r[e][t.container.id] && s(i = r[e][t.container.id], t))
            }

            function s(e, t) {
                if (e) {
                    var r, i = e.length;
                    for (r = 0; r < i; r++) try {
                        "function" == typeof e[r] && setTimeout(function(e, t) {
                            return function() {
                                e(t)
                            }
                        }(e[r], t), 0)
                    } catch (e) {
                        __trcError("executeHandlers", e)
                    }
                }
            }

            function a(e, t) {
                var r;
                if (t)
                    for (r in t) try {
                        "function" == typeof e && setTimeout(function(e, t) {
                            return function() {
                                e(t)
                            }
                        }(e, t[r]), 0)
                    } catch (e) {
                        __trcError("executeHandlers", e)
                    } else setTimeout(e, 0)
            }

            function l(e) {
                r[e] = [], r[e]["_all"] = []
            }

            function c(e, t) {
                r[e][t] = []
            }
            var d = {
                subscribe: function(e, t, o) {
                    r[e] || l(e), o ? (r[e][o] || c(e, o), r[e][o].push(t), i[e] && i[e][o] && a(t, {
                        mode: i[e][o]
                    })) : (r[e]["_all"].push(t), i[e] && a(t, i[e]))
                },
                dispatch: function(e, t) {
                    i[e] = i[e] || {}, t ? i[e][t.container.id] = t : i[e]["_all"] = {}, n(e, t || null)
                },
                resetEvents: function() {
                    i = {}
                }
            };
            if (e._trcIsUTactive && (d.processDelegatorsStack = n, d.executeHandlers = s, d.executePreviousEvents = a, d.delegatorsStack = r, d.eventsStack = i), TRC.subscriptionRegister)
                for (; TRC.subscriptionRegister.length;) o = TRC.subscriptionRegister.shift(), d.subscribe(o.event, o.handler, o.container);
            return d
        }(window, document),
        function(e, t) {
            function r(e) {
                return {
                    detail: e
                }
            }

            function i(e) {
                return "api::" + e
            }

            function o(e, t) {
                TRC.dispatch(i(e), r(t))
            }

            function n(e, t) {
                var r = TRC.TRCParser,
                    i;
                return e = e || {}, i = {
                    mode: r.parseModeName(e),
                    placement: r.parsePlacementName(e),
                    baseMode: r.parseBaseModeName(e),
                    variant: r.parseTestVariant(e),
                    itemCount: r.getItemCount(e)
                }, t && (i.container = t.container, i.items = t.apiData), i
            }
            TRC.EventsAPI = {
                dispatchClick: function(e, t) {
                    var r = TRC.TRCParser,
                        i;
                    e = e || {}, i = new TRC.ItemParser(e), t = t || {}, o("click", {
                        slot: i.getSlot(),
                        id: i.getId(),
                        type: i.getType(),
                        title: i.getTitle(),
                        url: i.getUrl(),
                        linkTarget: i.getLinkTarget(),
                        mode: r.parseModeName(t),
                        placement: r.parsePlacementName(t),
                        baseMode: r.parseBaseModeName(t),
                        variant: r.parseTestVariant(t),
                        itemCount: r.getItemCount(t)
                    })
                },
                dispatchVisible: function(e, t) {
                    var r;
                    o("visible", n(e, t))
                },
                dispatchRender: function(e, t) {
                    var r;
                    o("render", n(e, t))
                },
                dispatchNoContent: function(e, t, r) {
                    var i = {
                        reason: e
                    };
                    t && (i.placement = t), i.isFeedCard = r || !1, o("nocontent", i)
                },
                listen: function(e, t) {
                    TRC.listen(i(e), t, !0)
                },
                dispatchStoriesLoaded: function() {
                    o("storiesLoaded")
                },
                dispatchStoriesCloseVerticalUi: function() {
                    o("closedVerticalUI")
                },
                dispatchStoriesSwipeVerticalUi: function(e) {
                    o("swipeVerticalUI", e)
                },
                dispatchTrcImplAvailable: function() {
                    o("trcImplAvailable")
                },
                dispatchPlacementNoRendered: function(e, t) {
                    var r = TRC.TRCParser,
                        i;
                    e = e || {}, o("trcPlacementNotRendered", i = {
                        mode: r.parseModeName(e),
                        placement: r.parsePlacementName(e),
                        unifiedPlacement: e.unifiedPlacement || null,
                        reason: t || null
                    })
                },
                readmore: function(e, t) {
                    var r = TRC.TRCParser;
                    t = t || {}, o("readmore." + e, {
                        mode: r.parseModeName(t),
                        placement: r.parsePlacementName(t),
                        variant: r.parseTestVariant(t)
                    })
                }
            }
        }(window, document),
        function(e, t) {
            var r, i, o = {},
                n = 0;

            function s(e) {
                void 0 === o[e] && (o[e] = [])
            }

            function a(e, t) {
                s(e), o[e] = o[e].filter(function(e) {
                    return t !== e.id
                })
            }
            if (TRC.listen = function(e, t, r) {
                    if ("object" == typeof e && e.length) return e.forEach(function(e) {
                        TRC.listen(e, t)
                    }), null;
                    s(e);
                    var i = {
                        id: n++,
                        handler: t,
                        eventName: e,
                        sync: r,
                        remove: function() {
                            a(this.eventName, this.id)
                        }
                    };
                    return o[e].push(i), i
                }, TRC.dispatch = function(e, t) {
                    s(e);
                    var n = r(e, t);
                    o[e].forEach(function(e) {
                        if (e.sync) try {
                            e.handler.call(this, n)
                        } catch (e) {} else i(function() {
                            e.handler.call(this, n)
                        }.trcBind(this))
                    }.trcBind(this))
                }, TRC.getEventsMap = function() {
                    return o
                }, t.addEventListener && t.dispatchEvent) return t.addEventListener("trcFakeEvents", function(e) {
                e.cx()
            }, !1), r = function(e, r) {
                var i = t.createEvent("Event");
                return i.initEvent(e, !1, !1), "[object Array]" === Object.prototype.toString.call(r) ? i.data = r : "object" == typeof r ? __trcCopyProps(r, i) : i.data = r, i
            }, void(i = function(e) {
                var i = r("trcFakeEvents");
                i.cx = e, t.dispatchEvent(i)
            });
            t.documentElement.attachEvent("onpropertychange", function(e) {
                "trcFakeEvents" == e.propertyName && e.cx()
            }), r = function(e, r) {
                var i;
                return r && r.generator && "ceo" === r.generator ? (r.type = e, r) : ((i = t.createEventObject()).generator = "ceo", i.type = e, "[object Array]" === Object.prototype.toString.call(r) ? i.data = r : "object" == typeof r ? __trcCopyProps(r, i) : i.data = r, i)
            }, i = function(e) {
                var i = r("trcFakeEvents");
                i.cx = e, i.propertyName = "trcFakeEvents", t.documentElement.fireEvent("onpropertychange", i)
            }
        }(window, document),
        function(e) {
            var t = TRC.ExpandAnimationManager = function(t) {
                TRC.RBoxUsage.logUsage("ExpandAnimationManager"), this.rbox = t, this.container = t.container, this.trcContainer = this.container._trc_container, TRC.css.utils.setStyleElements(this.createCSS()), this.trcContainer.className += " trc_expandable", this.throttledExpandScrollHandler = this.scrollHandler.trcBind(this).trcThrottle(10), TRC.dom.on(e, "scroll", this.throttledExpandScrollHandler)
            };
            t.prototype.scrollHandler = function() {
                this.rbox.isInViewPort(this.container, 0) ? this.trcContainer.wasOutOfViewPort && (this.trcContainer.className += " trc_show", TRC.dom.off(window, "scroll", this.throttledExpandScrollHandler)) : this.trcContainer.wasOutOfViewPort = !0
            }, t.prototype.createCSS = function() {
                for (var e = [], t = "#" + TRC.css.utils.escape(this.container.id), r = this.rbox.trc.getProperty(this.rbox.mode_name, "expand-animation-duration"), i = this.rbox.trc.getProperty(this.rbox.mode_name, "expand-animation-max-height"), o = [t + " .trc_rbox_container.trc_expandable {" + TRC.css.utils.generateCssRuleWithVendorPrefixes("transition-duration", r + "ms") + "}", t + " .trc_rbox_container.trc_expandable.trc_show { max-height: " + i + "px;}"], n = 0; n < o.length; n++) this.rbox.trc.cssReset ? e.push(TRC.css.utils.setStyleTextIdPrefix(o[n], TRC.modesCache, TRC.lightBoxCssReset)) : e.push(o[n]);
                return e.join("")
            }
        }(window), (() => {
            const e = {
                collapsedHeight: 490,
                expandButtonCaption: "Show More",
                collapseButtonCaption: "Show Less",
                fadeBackgroundColor: "#fff",
                fadeHeight: 60,
                buttonTop: 28,
                buttonBottom: 10,
                fadeGradient: 40
            };
            class t {
                constructor(t, r, i) {
                    this.externalCardMaxRetries = t.global["external-card-max-retries"] || 5, this.externalCardRetryInterval = t.global["external-card-retry-interval"] || 1e3, i = __trcCopyProps(e, {}, i), this.init(r, i)
                }
                init(e, r, i = 0) {
                    if (this.boxElement = document.getElementById(e), this.boxElement) {
                        if (this.boxElement.getBoundingClientRect().height < r.collapsedHeight) return void(i < this.externalCardMaxRetries ? (i++, setTimeout(this.init.trcBind(this, e, r, i), this.externalCardRetryInterval)) : TRC.dom.addClass(this.boxElement, "tbl-expandable-box-inactive"));
                        TRC.dom.addClass(this.boxElement, "tbl-collapsed"), TRC.dom.injectStyle(t.getExpandableBoxCSS(e, r)), this.boxElement.appendChild(this.createExpandButton(r)), this.boxElement.appendChild(this.createCollapseButton(r)), this.listenToBoxClick()
                    } else __trcError(`Cannot find expandable box element by ID: ${e}`)
                }
                createExpandButton(e) {
                    return this.createButton(e.expandButtonCaption, this.handleExpandClick, "tbl-expand-btn-container")
                }
                createCollapseButton(e) {
                    return this.createButton(e.collapseButtonCaption, this.handleCollapseClick, "tbl-collapse-btn-container")
                }
                createButton(e, t, r) {
                    const i = document.createElement("div"),
                        o = document.createElement("a");
                    return o.className += "tbl-expandable-box-btn", o.textContent ? o.textContent = e : o.innerText = e, TRC.dom.on(o, "click", t.trcBind(this)), i.className = `tbl-expandable-box-btn-container ${r}`, i.appendChild(o), i
                }
                addExpandClasses() {
                    TRC.dom.addClass(this.boxElement, "tbl-expanded"), TRC.dom.removeClass(this.boxElement, "tbl-collapsed"), this.isExpanded = !0
                }
                addCollapseClasses() {
                    TRC.dom.addClass(this.boxElement, "tbl-collapsed"), TRC.dom.removeClass(this.boxElement, "tbl-expanded"), this.isExpanded = !1
                }
                handleExpandClick(e) {
                    e.preventDefault(), e.stopPropagation(), this.isExpanded || this.addExpandClasses()
                }
                handleCollapseClick(e) {
                    e.preventDefault(), e.stopPropagation(), this.addCollapseClasses(), this.boxElement.scrollIntoView && this.boxElement.scrollIntoView()
                }
                static getExpandableBoxCSS(e, t) {
                    return `#${e}.tbl-expanded { max-height: inherit; } #${e}.tbl-expanded .tbl-collapse-btn-container { display: block; padding: 0 5px; }#${e}.tbl-collapsed { max-height: ${t.collapsedHeight}px; overflow: hidden; position: relative; } #${e}.tbl-collapsed .tbl-expand-btn-container { display: block; }#${e} .tbl-expandable-box-btn { margin: ${t.buttonTop}px 0 ${t.buttonBottom}px !important; display: inline-block !important; line-height: 38px !important; text-align: center !important; white-space: nowrap !important; vertical-align: middle !important; cursor: pointer !important; -webkit-touch-action: manipulation; -moz-touch-action: manipulation; -ms-touch-action: manipulation; -o-touch-action: manipulation; touch-action: manipulation; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none; color: #326891 !important; background: #edf2f5 none !important; border: 1px solid #93abbc !important; height: 38px !important; width: 100% !important; font-size: 15px !important; font-weight: bold !important; border-radius: 3px !important; font-family: sans-serif !important; } #${e} .tbl-expandable-box-btn:hover { background-color: #bed0dc !important; border-color: #7399b3 !important; color: #326891 !important; }#${e} .tbl-expandable-box-btn-container { display: none; text-align: center; }#${e} .tbl-expand-btn-container { position: absolute; z-index: 100; left: 0; right: 0; bottom: 0; padding: ${t.fadeHeight}px 10px 0px 10px; box-sizing: border-box; background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(50%, ${t.fadeBackgroundColor}), color-stop(100%, ${t.fadeBackgroundColor})); background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: -o-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: -ms-linear-gradient(top, rgba(255, 255, 255, 0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${t.fadeBackgroundColor} ${t.fadeGradient}%, ${t.fadeBackgroundColor} 100%); }`
                }
                listenToBoxClick() {
                    TRC.listen("expandableBoxChildIFrameClick", e => {
                        e.container !== this.boxElement || this.isExpanded || this.addExpandClasses()
                    })
                }
            }
            TRC.ExpandableBox = t
        })(), TRC.ExternalContainerAppender = {
            MAX_RETRIES: 50,
            TIMEOUT: 100,
            move(e, t, r = 0) {
                if (document.querySelector)
                    if (t) {
                        let i, o = !1;
                        try {
                            i = document.querySelector(e)
                        } catch (t) {
                            __trcWarn(`Exception while trying to find external container with selector ${e}: ${t}`), o = !0
                        }
                        i ? (t.appendChild(i), TRC.dispatch("trcContentReady", {
                            container: t
                        })) : r < this.MAX_RETRIES && !o ? TRC.Timeout.set(this.move.trcBind(this, e, t, r + 1), this.TIMEOUT) : __trcWarn(`Could not find external container with selector ${e} to move`)
                    } else __trcError(`Could not find target container for external container move`)
            }
        },
        function() {
            let e = {};
            const t = {},
                r = {
                    isPlacementApprovedToRender: () => !0,
                    hideFallbackElements() {
                        return this
                    },
                    reportTimeToRender() {}
                };
            class i {
                constructor(e, {
                    enable: t,
                    elements_to_hide: r
                } = {}, {
                    should_render: i
                } = {}) {
                    this.originalPlacementName = e, this.isApprovedToRender = null, this.triedToHideFallbackElements = !1, this.enable = t, this.elements_to_hide = r, this.should_render = i
                }
                setIsApprovedToRender() {
                    if (null === this.isApprovedToRender && this.enable && "function" == typeof this.should_render) try {
                        this.should_render() ? this.isApprovedToRender = !0 : (this.isApprovedToRender = !1, c.report({
                            type: "ERROR",
                            reason: "notAllowedToRender",
                            originalPlacementName: this.originalPlacementName
                        }))
                    } catch (e) {
                        this.isApprovedToRender = !1, __trcError("Fallback Error in should_render", e)
                    }
                }
                isPlacementApprovedToRender() {
                    return this.setIsApprovedToRender(), this.isApprovedToRender
                }
                hideFallbackElements({
                    placement: e
                }) {
                    return this.isApprovedToRender && !this.triedToHideFallbackElements && (this.triedToHideFallbackElements = !0, this.hideElements(e)), this
                }
                reportTimeToRender({
                    isCache: e,
                    placement: t,
                    recommendationList: r
                }) {
                    c.report({
                        type: "placementData",
                        timeToRendered: performance.now && performance.now(),
                        originalPlacementName: this.originalPlacementName,
                        placementName: t,
                        items: r ? r.length : null,
                        isCache: !!e
                    })
                }
                hideElements(e) {
                    Array.isArray(this.elements_to_hide) && this.elements_to_hide.forEach(t => {
                        const r = document.querySelectorAll(t);
                        if (r.length)
                            for (let e = 0; e < r.length; ++e) r[e].style.display = "none";
                        else c.report({
                            type: "ERROR",
                            reason: "noFallbackElements",
                            placement: e
                        })
                    })
                }
            }
            const o = (e, t) => {
                    try {
                        const r = e.fpl || e.uip,
                            i = t[r];
                        if (i && i.skip_dom_render) return !1
                    } catch (e) {
                        __trcError("Fallback shouldRenderPlacementByRequest Error", e)
                    }
                    return !0
                },
                n = (e, t) => {
                    try {
                        return a(e, t).isPlacementApprovedToRender()
                    } catch (e) {
                        __trcError("Fallback shouldRenderPlacement Error", e)
                    }
                    return !0
                },
                s = e => {
                    try {
                        l(e).hideFallbackElements(e).reportTimeToRender(e)
                    } catch (e) {
                        __trcError("Fallback Error in finalize", e, .2)
                    }
                },
                a = ({
                    cga: t,
                    fpl: o,
                    uip: n
                }, s = {}) => {
                    const a = o || n,
                        l = e[a];
                    if (l) return l;
                    const c = t && t.fallback;
                    return c && !l ? (e[a] = new i(a, c, s[a]), e[a]) : r
                },
                l = ({
                    response: t,
                    placement: i
                }) => {
                    const o = t.feedPlacement || i;
                    return e[o] || r
                },
                c = {
                    report: e => {
                        if (TRC.util.isPercentEnabled(TRCImpl.global, "enable-fallback-events")) {
                            const t = {
                                data: JSON.stringify(e),
                                type: "fallback"
                            };
                            TRCImpl.sendEvent("pubs-generic", {
                                d: JSON.stringify(t)
                            }, {})
                        }
                    },
                    runOnError: r => {
                        const {
                            placement: i
                        } = r, o = e[i], n = t[i];
                        if (n && "function" == typeof n) try {
                            n()
                        } catch (e) {
                            __trcError("Fallback Error in on_error", e)
                        }
                        o && o.enable && c.report({
                            type: "ERROR",
                            reason: "failedToRender",
                            placement: i
                        })
                    },
                    setOnError: ({
                        placement: e,
                        on_error: r
                    }) => {
                        t[e] = r
                    }
                };
            TRC.listen("onRboxFlowError", c.runOnError), TRC.fallbackApi = {
                shouldRenderPlacement: n,
                shouldRenderPlacementByRequest: o,
                finalize: s,
                setOnError: c.setOnError
            }, window._trcIsUTactive && (TRC.fallbackApi.unitestsHelpers = {
                fallbackUtils: c,
                getFallbackPlacement: l,
                build: a,
                clearFallbackPlacements: () => {
                    e = {}
                }
            })
        }(),
        function() {
            let e = !1;

            function t() {
                try {
                    !e && r() && (TRCImpl.sendAbTestEvent("isFeedViewIframe", window.top.TRC.pageManager.getPageData()), e = !0)
                } catch (e) {
                    __trcError("Error in TRC.FeedViewInIframeReport.report(): ", e)
                }
            }

            function r() {
                let e = !1,
                    t, r;
                try {
                    return TRC.dom.isInIframe(!0) && (t = window.top && window.top.TRC && window.top.TRC.FeedView) && (r = t.getSelectors(), e = window.frames && window.frames.name === r.IFRAME_ID), e
                } catch (e) {
                    __trcError("Error in TRC.FeedViewInIframeReport.isFeedViewIframe(): ", e)
                }
            }
            TRC.FeedViewInIframeReport = {
                report: t
            }, window._trcIsUTactive && (TRC.FeedViewInIframeReport.isFeedViewIframe = r)
        }(), (() => {
            class e {
                constructor(t) {
                    e.loadFeedViewModuleWhenNeeded(), t.feedViewConfig = !0, TRC.hasFeedView = !0
                }
                static loadFeedViewModuleWhenNeeded() {
                    const e = TRC.util.isRboxEncapsulated(TRC),
                        t = TRC.dom.isInIframe(!0);
                    e || t || TRC.feedViewModuleLoaded || TRC.ModuleLoader.load("feed-view", TRC.FeedView, () => {
                        TRC.feedViewModuleLoaded = !0
                    })
                }
                static isFeedViewWidget(e, t) {
                    const r = e.getProperty(null, "feed-view-devices"),
                        i = e.getProperty(null, "feed-view-enable"),
                        o = e => "all" === r || r === e;
                    return !(TRC.util.isFalse(i) || TRC.util.isTrue(TRC.dom.isSmartPhone()) && TRC.util.isFalse(o("smart_phone")) || TRC.util.isFalse(TRC.dom.isSmartPhone()) && TRC.util.isFalse(o("desktop")) || TRC.util.isFalse(e.getProperty(t.mode_name, "mode-enable-feed-view")) || TRC.util.isTrue(TRC.hasFeedView) || e.global["disable-feed-view-top-referrer"])
                }
            }
            TRC.FeedViewWidgetLoaderManager = e
        })(), (() => {
            class e {
                constructor(e, t) {
                    this.trcManager = e, this.trcCache = e.trcCache, this.firstIframe = t, this.renderedCardsPreviously = !1, this.feedContainerNum = TRC.feedContainerNum, this.shouldBreakForAMPSplitFeed = !1, this.CACHE_KEYS = {
                        F: "tbl_f",
                        SYNC_FI: "tbl_syncFi",
                        SYNC_FB: "tbl_syncFb",
                        SYNC_VIEW_ID: "tbl_syncViewID",
                        PUB_CARD_LOCS: "tbl_pubCardLocs",
                        NEXT_IFRAME_TO_LOAD: "tbl_nextIframeToLoad",
                        CURRENT_AMP_FRAME_NUM: "tbl_currentAmpFrameNum"
                    }
                }
                cacheOrAssignFeedResponseData(e) {
                    !0 === this.firstIframe && !1 === this.renderedCardsPreviously ? (this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.F, e.trc.f), this.renderedCardsPreviously = !0) : !1 === this.renderedCardsPreviously && !1 === this.firstIframe && (e.trc.f = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.F), this.renderedCardsPreviously = !0)
                }
                handleFeedIndexOffset(e) {
                    return e.fi = this.syncFi + 1, e.fi
                }
                cacheLeftoverCards(e, t) {
                    const r = {};
                    __trcCopyProps(e, r);
                    const i = TRC.TrcCache.extractKey(this.reqForCacheKey);
                    this.trcCache.enableCacheViaStorageFlag(), r.trc.vl.splice(0, t + 1), this.trcCache.cacheResponse(i, r)
                }
                handlePubCardInResponse(e, t) {
                    const r = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.PUB_CARD_LOCS),
                        i = parseInt(sessionStorage.getItem(this.CACHE_KEYS.NEXT_IFRAME_TO_LOAD), 10);
                    i === parseInt(this.feedContainerNum, 10) && sessionStorage.setItem(this.CACHE_KEYS.NEXT_IFRAME_TO_LOAD, i + 1);
                    const o = t + 1 + this.oldSyncFi; - 1 === r.indexOf(o) && this.currentAmpFrameNum <= this.feedContainerNum && r.push(o), this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.PUB_CARD_LOCS, r), this.currentAmpFrameNum = r.length + 1, TRC.currentAmpFrameNum = this.currentAmpFrameNum, this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.CURRENT_AMP_FRAME_NUM, this.currentAmpFrameNum), TRC.keyWriting = !0, this.cacheLeftoverCards(e, t), this.shouldBreakForAMPSplitFeed = !0
                }
                updateFeedIndexAndBatch(e) {
                    let t, r;
                    this.oldSyncFi = this.syncFi, t = Number(this.oldSyncFi) + e.trc.vl.length;
                    const i = Object.keys(e.trc.f),
                        o = i[0];
                    this.syncFb = parseInt(e.trc.f[o].nb, 10), !0 === e.cached && (t -= r = e.trc.vl.length), this.syncFi = t, this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.SYNC_FI, t), this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.SYNC_FB, this.syncFb)
                }
                copyReqToReqForCacheKey(e) {
                    this.reqForCacheKey = {}, __trcCopyProps(e, this.reqForCacheKey)
                }
                static getPlacementId(e) {
                    return e && e.placement ? e.placement.split("|").pop().trim() : ""
                }
                detectDuplicateCards(t) {
                    const r = e.getPlacementId(t);
                    null !== this.ampSplitFeedCache.getCacheData(r) ? __trcError("Duplicate Card Index In AMP Split Feed") : this.ampSplitFeedCache.cacheData(r, !0)
                }
                detectSkippedCard(t) {
                    const r = e.getPlacementId(t),
                        i = r.split(" "),
                        o = i[0],
                        n = i[1];
                    if (isNaN(n)) return void __trcError("Card name doesn't contain numeric index In AMP Split Feed");
                    const s = `${o} ${parseInt(n,10)-1}`;
                    n > 1 && null === this.ampSplitFeedCache.getCacheData(s) && __trcError("Card(s) Skipped In AMP Split Feed")
                }
                initParametersForSplitFeedFrames() {
                    const e = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.SYNC_FI),
                        t = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.SYNC_FB);
                    this.syncFi = null === e ? null : parseInt(e, 10), this.syncFb = null === t ? null : parseInt(t, 10);
                    const r = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.SYNC_VIEW_ID);
                    null === r ? this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.SYNC_VIEW_ID, TRC.pageManager.getPageData()) : TRC.syncViewID = r;
                    let i = this.ampSplitFeedCache.getCacheData(this.CACHE_KEYS.PUB_CARD_LOCS);
                    i || (i = [], this.ampSplitFeedCache.cacheData(this.CACHE_KEYS.PUB_CARD_LOCS, i)), this.currentAmpFrameNum = i.length + 1
                }
                checkAMPSplitFeedFlagsAndInit(e, t) {
                    this.nextIframeToLoad = sessionStorage.getItem("tbl_nextIframeToLoad"), this.sentIframeLoadFailed = !1, this.attemptCounter = 0, this.MAX_ATTEMPTS = 20, !this.nextIframeToLoad && this.firstIframe && (this.nextIframeToLoad = "1", sessionStorage.setItem("tbl_nextIframeToLoad", this.nextIframeToLoad)), this.nextIframeToLoad !== this.feedContainerNum ? this.timeoutID = setTimeout(this.delayInit.trcBind(this, e, t), 300) : (this.didInit = !0, t(e))
                }
                static sendIframeLoadFailed(e) {
                    TRC.pConsole("errors", "error", "AMP split feed iframe", e, "blocked from out of order loading")
                }
                delayInit(t, r) {
                    try {
                        this.attemptCounter++, !this.sentIframeLoadFailed && this.attemptCounter >= this.MAX_ATTEMPTS && (e.sendIframeLoadFailed(TRC.feedContainerNum), this.sentIframeLoadFailed = !0), this.nextIframeToLoad = sessionStorage.getItem("tbl_nextIframeToLoad"), this.nextIframeToLoad === TRC.feedContainerNum ? (this.didInit = !0, clearTimeout(this.timeoutID), r(t)) : this.timeoutID = setTimeout(this.delayInit.trcBind(this, t, r), 300)
                    } catch (e) {
                        __trcError("AMP split feed - error in delaying iframe init", e)
                    }
                }
                initAmpSplitFeedIframe(e) {
                    this.trcManager.trcCache.reloadCache(), this.ampSplitFeedCache = new TRC.KeyValueCache({
                        cacheName: "trc_amp_split_feed_cache",
                        noTtl: !0
                    }), this.initParametersForSplitFeedFrames(), this.trcManager.dispatchRequestWrapper(e)
                }
            }
            TRC.AmpSplitFeedManager = e
        })(), (() => {
            const e = "card-available",
                t = "card-visible",
                r = "card-interaction",
                i = ["click"];
            class o {
                constructor(e, t, r, i) {
                    const {
                        feedDynamicParameters: o
                    } = t;
                    this.trcManager = e, this.cardPlacementData = r, this.exactVisibleDistanceThresholdFromTop = o && o.exactVisibleDistanceThresholdFromTop || this.trcManager.global["exact-visible-distance-threshold-from-top"] || 200, this.listenToCardInteractionEvents(i)
                }
                sendEvent(e, t) {
                    TRC.TrcEventsLogger.sendPlacementEvent(this.trcManager, this.cardPlacementData, e, t)
                }
                handleRenderedCard(t) {
                    t.style.position = "relative", this.sendEvent(e), this.observeCardVisibility(t)
                }
                listenToCardInteractionEvents(e) {
                    i.forEach(t => {
                        TRC.dom.on(e, t, this.sendCardInteractionEvent.trcBind(this, t)), "click" === t && e.querySelector("iframe") && TRC.dom.on(window, "blur", this.checkIfCardIFrameClickedAndLog.trcBind(this, e))
                    })
                }
                checkIfCardIFrameClickedAndLog(e) {
                    const {
                        activeElement: t
                    } = document;
                    t && "iframe" === t.tagName.toLowerCase() && (t === e || e.contains(t)) && this.sendCardInteractionEvent("click")
                }
                sendCardInteractionEvent(e) {
                    const t = {
                            id: Date.now(),
                            type: e
                        },
                        i = {
                            d: JSON.stringify(t)
                        };
                    this.sendEvent(r, i)
                }
                observeCardVisibility(e) {
                    const r = {
                        targetElement: e,
                        enableDelayedVisibilityCheck: !0,
                        exactVisibleThresholdFromTop: this.exactVisibleDistanceThresholdFromTop,
                        onTrigger: this.sendEvent.trcBind(this, t, null)
                    };
                    TRC.intersections.isInViewPort(r)
                }
            }
            TRC.CardEventsManager = o
        })(), (() => {
            const e = "tbl-feed-container",
                t = "tbl-feed-card",
                r = "tbl-feed-full-width",
                i = "tbl-feed-partial-width",
                o = "tbl-feed-abp",
                n = "data-feed-container-num",
                s = "data-feed-main-container-id",
                a = "data-parent-placement-name",
                l = "data-pub-lang",
                c = {
                    FULL_WIDTH: "FULL_WIDTH",
                    PARTIAL_WIDTH: "PARTIAL_WIDTH"
                };
            class d {
                constructor(e, t, r) {
                    const i = __trcCopyProps(r, {});
                    this.trcManager = e, this.container = t.container, this.origContainer = this.container, this.mainContainerId = this.container.id, this.mainContainerPlacement = t.placement, this.numContainers = 1, this.testData = e.testData, this.experimentsData = e.experimentsData, this.experimentsHash = e.experimentsHash, this.options = r, this.numPendingPublisherCards = 0, this.layout = r.mobileLayout || r.feedUi && r.feedUi.layout, this.shouldDisableScopeCss = this.trcManager.global["disable-scope-feed-css"], this.firstCardRequestId = t.firstCardRequestId, this.unifiedPlacement = t.unifiedPlacement, this.feedInViewPort = !1, r.wasWidget && (this.widgetToFeedHelper = new TRC.WidgetToFeedHelper(this, e, r.hasFeedUI)), r.videoSingleManager && this.loadVideoSingleManager(t, e, r), !1 !== r.hasFeedUI && TRC.dom.injectStyle(this.createCss(r), null), i.afterPlacementContainerCreated = d.addFeedCardAttributes.trcBind(this), i.itemsParentContainerSelector = `[${s}="${this.mainContainerId}"]`, this.infiniteScrollEngine = new TRC.InfiniteScrollEngine(e, t, i), this.publisherCardsManager = new TRC.PublisherCardsManager(this, e, t, r);
                    const o = d.getFeedConfig(r, "footerOverlayConfig", "footerOverlay");
                    o && TRC.ModuleLoader.load("feed-footer-overlay", TRC.FooterOverlay, () => {
                        this.footerOverlay = new TRC.FooterOverlay(e, o)
                    }), TRC.isAMPSplitFeed && (this.numContainers = this.trcManager.ampSplitFeedManager.feedContainerNum), this.setMainContainerCssClassesAndAttributes(this.container, r), this.listenToCardContentReady(), this.header = this.createHeader(r.feedUi), TRC.Heatmap.isEnabled(this.trcManager) && (this.heatmap = new TRC.Heatmap(e), TRC.dom.on(this.container, "click", e => {
                        this.heatmap.captureAndSendClickData(e)
                    })), this.observeFeed()
                }
                handlePlacement(e) {
                    const t = e.trcResponse && e.trcResponse.spl,
                        r = e.trcResponse && e.trcResponse.pcp,
                        i = e.trcResponse && e.trcResponse.scac ? null : this.infiniteScrollEngine.numPlacements;
                    return t ? (this.infiniteScrollEngine.handlePlacement(e), this.publisherCardsManager.registerPublisherCardForHandling(e), void this.publisherCardsManager.handlePendingPublisherCards(0, i, null, t)) : (TRC.isAMPSplitFeed && (this.trcManager.ampSplitFeedManager.detectDuplicateCards(e), this.trcManager.ampSplitFeedManager.detectSkippedCard(e)), r ? TRC.isAMPSplitFeed ? void this.stopScrolling() : (this.publisherCardsManager.registerPublisherCardForHandling(e), this.infiniteScrollEngine.numPlacements++, void this.numPendingPublisherCards++) : (this.numPendingPublisherCards > 0 && (this.publisherCardsManager.handlePendingPublisherCards(0, i, null, t), this.numPendingPublisherCards = 0), this.infiniteScrollEngine.handlePlacement(e), this.trcManager["after-card-created"](e, i, this), void TRC.CustomModulesManager.runHook("after-card-created", this.mainContainerPlacement, this, e, i, this)))
                }
                stopScrolling() {
                    this.infiniteScrollEngine.stopScrolling()
                }
                setIsAllowedToRequestMoreContent(e) {
                    this.infiniteScrollEngine.setIsAllowedToRequestMoreContent(e)
                }
                updateNextBatchNumber(e) {
                    this.infiniteScrollEngine.updateNextBatchNumber(e)
                }
                setMainContainerCssClassesAndAttributes(t, d) {
                    const h = [e];
                    switch (this.layout) {
                        case c.FULL_WIDTH:
                            h.push(r);
                            break;
                        case c.PARTIAL_WIDTH:
                            h.push(i)
                    }
                    d.feedUi && d.feedUi.cardFrame && h.push(`tbl-feed-frame-${d.feedUi.cardFrame}`), TRC.blocker.blockedState > 0 && h.push(o), TRC.dom.addClass(this.container, h.join(" ")), this.numContainers > 1 && (this.container.id = `${this.mainContainerId}-split-num-${this.numContainers-1}`), t.setAttribute(n, this.numContainers), t.setAttribute(s, this.mainContainerId), t.setAttribute(a, this.mainContainerPlacement), this.trcManager.language && t.setAttribute(l, this.trcManager.language)
                }
                createHeader(e) {
                    if (TRC.isAMPSplitFeed && this.trcManager.ampSplitFeedManager && 1 !== Number(this.trcManager.ampSplitFeedManager.feedContainerNum)) return;
                    const t = document.createElement("div"),
                        r = document.createElement("div"),
                        i = !(!e || !e.feedHeaderData),
                        o = e && e.logoPosition && "NONE" !== e.logoPosition ? e.logoPosition : null,
                        n = o ? `tbl-logo-${o.toLowerCase()}-position` : "";
                    if (r.className = "tbl-feed-header-logo", t.className = ` tbl-feed-header ${n}`, t.appendChild(r), TRC.ccpa.renderOnHeaderFeed(t, this.unifiedPlacement, o), i) {
                        const r = d.createFeedHeaderTextElement(e.feedHeaderData.headerText);
                        t.className += " tbl-header-with-text", t.appendChild(r)
                    }
                    return this.container.insertBefore(t, this.container.firstChild), t
                }
                static createFeedHeaderTextElement(e) {
                    const t = document.createElement("div");
                    return t.className = "tbl-feed-header-text", t.innerText = e, t
                }
                static addFeedCardAttributes(e, t) {
                    e.setAttribute("tbl-feed-card", ""), t.isStandaloneVideo && d.setFeedVideoCardAttribute(e), d.setFeedCardVideoIndication(e, t)
                }
                static setFeedCardVideoIndication(e, t) {
                    t.trcResponse.nvb && e.setAttribute("no-vbelow", ""), t.trcResponse.nva && e.setAttribute("no-vabove", "")
                }
                static setFeedVideoCardAttribute(e) {
                    e.setAttribute("tbl-feed-video", "")
                }
                listenToCardContentReady() {
                    TRC.listen("trcContentReady", this.onTrcContentReady.trcBind(this))
                }
                onTrcContentReady(e) {
                    const {
                        container: t
                    } = e;
                    if (t && t.placementData) {
                        const {
                            placementData: e
                        } = t;
                        if (!e.isFeedCard) return;
                        this.onCardContentReady(t, e)
                    }
                }
                onCardContentReady(e, r) {
                    const {
                        style: i,
                        id: o
                    } = e, {
                        trcResponse: n,
                        expandOptions: s
                    } = r;
                    TRC.dom.addClass(e, t), n.cpad && (i.padding = n.cpad), s && (e.expandableBox = new TRC.ExpandableBox(this.trcManager, o, s), this.listenToBoxChildIFrameClick())
                }
                listenToBoxChildIFrameClick() {
                    this.expandableBoxIFrameClickListener || (this.expandableBoxIFrameClickListener = !0, TRC.dom.on(window, "blur", () => {
                        const {
                            activeElement: e
                        } = document;
                        e && TRC.dom.elementMatchesSelector(e, `[${s}="${this.mainContainerId}"] .${t} iframe`) && TRC.dispatch("expandableBoxChildIFrameClick", {
                            container: TRC.dom.closest(e, ` .${t}`)
                        })
                    }))
                }
                createCss(e) {
                    const t = [];
                    e.feedCss ? t.push(e.feedCss.replace(/{FEED_MAIN_CONTAINER_ID_ATT}/g, `[${s}="${this.mainContainerId}"]`)) : t.push(d.getDefaultFeedCSS()), this.isFullWidthMobileFeed(e) && t.push(this.getMobileFullWidthMarginsCss()), e.feedUi && t.push(d.getFeedUiCss(e.feedUi, this.mainContainerId)), e.publisherFeedCss && t.push(e.publisherFeedCss), t.push(e.feedCssOverride);
                    let r = t.join("");
                    return this.shouldDisableScopeCss || (r = d.scopeCss(r, this.mainContainerId)), r
                }
                static scopeCss(t, r) {
                    return t.replace(new RegExp(`.${e}`, "g"), `[${s}="${r}"]`)
                }
                getTestData() {
                    return this.testData
                }
                getExperimentsData() {
                    return this.experimentsData
                }
                getExperimentsHash() {
                    return this.experimentsHash
                }
                static getFeedUiCss(e, t) {
                    const r = [],
                        i = e.feedBackgroundColor || e.feedBackground,
                        o = `[${s}="${t}"]`;
                    if (r.push(`${o}[${n}] {background-color: ${i}; padding: ${e.feedPadding};}`), "NONE" === e.logoPosition ? r.push(`${o} .tbl-feed-header .tbl-feed-header-logo {display:none;}`) : r.push(`${o} .tbl-feed-header {padding: 0px 5px 10px 5px; background: transparent; text-align: initial; display: table; width: 100%;}`), e.feedHeaderData) {
                        const {
                            headerFontSize: t = "20px",
                            headerFontFamily: i = "Arial, Helvetica, sans-serif",
                            headerColor: n = "#000000",
                            headerFontStyle: s = "normal"
                        } = e.feedHeaderData;
                        r.push(`${o} .tbl-feed-header .tbl-feed-header-text {font-size: ${t}; color: ${n}; line-height: ${t}; font-family: ${i}; font-weight: ${s}}`)
                    }
                    return r.join("")
                }
                getMobileFullWidthMarginsCss(t) {
                    const i = t ? this.container.parentNode : this.container,
                        o = i.getBoundingClientRect(),
                        s = -1 * o.left,
                        a = -1 * (document.documentElement.clientWidth - o.width - Math.abs(s));
                    let l = `#${this.container.id}.${e}.${r}`;
                    return (s || a) && i.offsetParent ? (t && (l += `[${n}="${t}"]`), `@media screen and (max-width: 480px) {\n                        ${l} {\n                            margin-left: ${s}px;\n                            margin-right: ${a}px;\n                        }\n                    }`) : ""
                }
                static getDefaultFeedCSS() {
                    return `.${e} { position: relative; margin-top: 20px; margin-bottom: 20px; -webkit-text-size-adjust: 100%; clear: both; } .${e} .tbl-feed-header { padding: 5px; background-color: #ffffff; display: inline-block; } .${e} .tbl-feed-header-logo { background: url(//cdn.taboola.com/static/f8/f89e1763-220d-4e09-ba69-9e040548fb7a.svg) no-repeat 0 0; background-size: contain; height: 11px; width: 76px; display: inline-block; } .${e} .tbl-loading-spinner { margin-bottom: 10px; } .${e} .${t} { margin-bottom: 10px; background-color: #ffffff; border: 1px solid #f1f1f1; } .${e} .${o} { max-width: 770px; margin: 20px auto 0; }/** Mobile CSS Rules **/@media screen and (max-width: 480px) { .${e} { padding: 0; background-color: #ffffff; } .${e} .tbl-feed-header { margin-left: 2px; padding: 5px 0; } .${e} .${t} { margin-bottom: 5px; padding-bottom: 5px; border-width: 0; border-bottom: 4px solid #f1f1f1; } .${e} .trc_header_ext, .${e} .trc-widget-footer { padding-right: 3px; } }/** End of Mobile CSS Rules **/`
                }
                getVideoManagerRequestData() {
                    return {
                        "session-data": TRC.pageManager.getPublisherValue(TRC.publisherId, "session-data"),
                        req: this.firstCardRequestId
                    }
                }
                loadVideoSingleManager(e, t, r) {
                    const i = __trcCopyProps(e, {}, null),
                        o = __trcCopyProps(r.videoSingleManager, {});
                    o.parentFeedOptions = r, this.videoManager = new TRC.VideoTagLoader(t, o, i, null, this.getVideoManagerRequestData()), this.videoManager.loadVideo()
                }
                switchMainContainer(e) {
                    this.container = e, this.infiniteScrollEngine.switchMainContainer(this.container)
                }
                isFullWidthMobileFeed(e) {
                    const t = e.mobileLayout || this.layout;
                    return t === c.FULL_WIDTH
                }
                getIsFirstBatch() {
                    return this.infiniteScrollEngine.getIsFirstBatch()
                }
                static getFeedConfig(e, t, r) {
                    if (e) {
                        const i = this.getFeedDynamicParameter(e.feedDynamicParameters, t);
                        return i || e[r]
                    }
                    return null
                }
                static getFeedDynamicParameter(e, t) {
                    if (e) {
                        const r = e[t];
                        if (r) return JSON.parse(r)
                    }
                    return null
                }
                observeFeed() {
                    TRC.intersections.observe({
                        targetElement: this.container,
                        onEnter: this.onFeedEnterViewport.trcBind(this),
                        onExit: this.onFeedExitViewport.trcBind(this),
                        rootMargin: "0px"
                    })
                }
                onFeedEnterViewport() {
                    this.feedInViewPort = !0, TRC.dispatch("feed-present-in-viewport", !0)
                }
                onFeedExitViewport() {
                    this.feedInViewPort = !1, TRC.dispatch("feed-present-in-viewport", !1)
                }
            }
            TRC.Feed = d
        })(), (() => {
            class e {
                constructor(e) {
                    this.trcManager = e, this.feeds = {}, this.invalidFeedsMap = {}, this.configs = {}
                }
                handleFeedCardPlacement(t, r) {
                    r.isFeedCard = !0, e.setScaArray(r, t);
                    const i = this.getOrCreateFeed(t),
                        o = i && i.options,
                        n = o && TRC.Feed.getFeedDynamicParameter(o.feedDynamicParameters, "feedViewConfig"),
                        s = o && o.feedView,
                        a = o && (n || s),
                        l = n && TRC.util.isFalse(n.isFeedView) ? n.isFeedView : a;
                    i && (l && (TRC.hasFeedView || this.trcManager.global["disable-feed-view-top-referrer"] || (TRC.hasFeedView = !0), TRC.FeedViewWidgetLoaderManager.loadFeedViewModuleWhenNeeded(), a && a.enableAEClicks && (i.enableAEClicks = !0), r.feedViewConfig = a), r.parentFeed = i, r.parentFeed.handlePlacement(r))
                }
                getOrCreateFeed(e) {
                    const t = e.fpl,
                        r = this.getFeedConfig(t),
                        i = this.feeds[t] || this.createNewFeed(r, t, e);
                    if (window.__trcInfo(JSON.stringify({
                            name: t,
                            nb: r.nb || "",
                            eof: r.eof || "",
                            fti: r.fti || "",
                            vsm: !!r.vsm
                        })), i instanceof TRC.Feed) return r.eof && i.stopScrolling(), r.nb && i.updateNextBatchNumber(r.nb), i
                }
                createNewFeed(t, r, i) {
                    const {
                        uuip: o,
                        ri: n,
                        sca: s
                    } = i, {
                        fcs: a,
                        rooc: l,
                        exm: c
                    } = t, d = e.parseFeedOptionsFromResponse(t);
                    c && this.trcManager.enableExploreMore(t, r), TRC.VirtualPlacementsManager.handleVirtualPlacement(this.trcManager, r);
                    const h = this.trcManager.preloadRequest[r];
                    if (h) {
                        if (h.isFeed = !0, !a || (h.container = this.getNewFeedContainer(h.container, r, a, l), h.container)) return h.fti = t.fti, h.unifiedPlacement = o, h.firstCardRequestId = n, h.sca = s, this.feeds[r] = new TRC.Feed(this.trcManager, h, d)
                    } else __trcDebug(`'createNewFeed' : placement '${r}' was not in the request - ignore`)
                }
                getNewFeedContainer(e, t, r, i) {
                    const o = "feed",
                        n = {
                            container: e,
                            "container-selectors": r,
                            "render-on-orig-container": i
                        },
                        s = this.trcManager.getWidgetContainer(n, o);
                    if (s) return s;
                    this.invalidFeedsMap[t] = !0
                }
                getFeedConfig(e) {
                    return this.configs && this.configs[e] ? this.configs[e] : {}
                }
                hasFeedConflict(e, t) {
                    return this.feeds[e] || this.hasFeedTestDataMismatch(t)
                }
                hasFeedTestDataMismatch(e) {
                    const t = this.feeds[e];
                    if (!t) return !1;
                    if (t.getTestData() !== this.trcManager.testData) return !0;
                    const r = t.getExperimentsHash(),
                        i = this.trcManager.experimentsHash;
                    return r && !i || !r && i || r && i && r !== i
                }
                static setScaArray(e, t) {
                    e && e.globalTrcResponseJSON && e.globalTrcResponseJSON.sca && (t.sca = e.globalTrcResponseJSON.sca)
                }
                static isExperimentDataEqual(e, t) {
                    const r = JSON.stringify(e),
                        i = JSON.stringify(t);
                    return r === i
                }
                static parseFeedOptionsFromResponse(e) {
                    return {
                        nextBatchDistanceThreshold: e.nbdt,
                        feedCss: e.css,
                        feedCssOverride: e.fcss,
                        publisherFeedCss: e.pfcss,
                        mobileLayout: e.fml,
                        videoSingleManager: e.vsm,
                        feedUi: e.fui,
                        feedNextUp: e.fnu,
                        exploreMore: e.exm,
                        footerOverlay: e.fov,
                        feedDynamicParameters: e.drp,
                        videoDisclosurePosition: e.vdp,
                        uiDesignVersion: e.udv,
                        wasWidget: TRC.util.isTrue(e.ww),
                        firstBatchLazyLoadingEnabled: TRC.util.isTrue(e.fbll),
                        hasFeedUI: void 0 === e.hfu || TRC.util.isTrue(e.hfu),
                        hasPreventReachingFooter: TRC.util.isTrue(e.prf),
                        preventReachingFooterData: e.prfd,
                        feedView: TRC.util.isTrue(e.fv)
                    }
                }
                static createFeedScriptWidgetData(e, t) {
                    return {
                        placement: e,
                        scriptData: t,
                        addWidget: !0
                    }
                }
                static createFeedIframe(e, t) {
                    return {
                        placement: e,
                        iframeData: t,
                        addWidget: !0,
                        isIframeCard: !0
                    }
                }
                static createPublisherCardData(e, t) {
                    return {
                        placement: e,
                        addWidget: !0,
                        publisherCardData: t.pcp
                    }
                }
                static createExternalWidgetData(e, t) {
                    return {
                        placement: e,
                        externalContainerSelector: t.es
                    }
                }
                static isExternalContainerWidget(e) {
                    return void 0 !== e.es && null !== e.es
                }
                static isFeedScriptWidget(e) {
                    return e.fpl && e.js
                }
                static isFeedIframe(e) {
                    return e.fpl && e.ifr
                }
                static isPublisherCard(e) {
                    return e.fpl && e.pcp
                }
            }
            TRC.FeedsManager = e
        })(), (() => {
            class e {
                constructor(e, t, r) {
                    this.trcManager = e, this.parentPlacementData = t, this.parentPlacementName = t.placement, this.container = t.container, this.origContainer = this.container, this.parentContainerId = this.container.id, this.afterPlacementContainerCreated = r.afterPlacementContainerCreated, this.nextBatchDistanceThreshold = r.nextBatchDistanceThreshold || 2e3, this.numPlacements = 1, this.scAdjacencyPlacements = 0, this.feedDynamicParameters = r.feedDynamicParameters, this.uiBatchNumberCounter = 1, this.isPendingNextBatch = !0, this.numOfConsecutiveFailedRequests = 0, this.maxNumOfConsecutiveFailedRequests = this.trcManager.global["feed-max-num-of-consecutive-failed-requests"] || 10, this.nbLoaderLayerEnabled = this.trcManager.global["enable-cls-loader-optim"], this.firstBatchLazyLoadingEnabled = r.firstBatchLazyLoadingEnabled, this.isFirstBatchRequest = !0, this.isLoadNextBatchAnchorObserveEnter = !1, this.currentBatchSuccessful = !1, this.enableManualLoadNextBatch = this.trcManager.manualVisibilityTrigger && this.trcManager.global["enable-manual-visible"] || this.feedDynamicParameters && this.feedDynamicParameters.manualLoadNextBatch, this.numPlaceholderItems = this.feedDynamicParameters && this.feedDynamicParameters.numPlaceholderItems || 3, this.itemsParentContainerSelector = r.itemsParentContainerSelector || `#${this.parentContainerId}`;
                    const i = this.feedDynamicParameters && this.feedDynamicParameters.rootSelectorScrollElement || this.trcManager.global["feed-load-next-batch-root-selector"];
                    this.observerRootSelector = i || null, this.observerScrollElement = i && document.querySelector(i) || window, this.feedObserverLoadNextBatch = this.feedDynamicParameters && this.feedDynamicParameters.feedObserverLoadNextBatch, this.firstBatchDistanceThresholdFromTop = this.feedDynamicParameters && this.feedDynamicParameters.firstBatchDistanceThresholdFromTop || this.trcManager.global["first-batch-distance-threshold-from-top"];
                    const o = TRC.util.isTrue(this.trcManager.global["feed-observer-load-next-batch"]);
                    (o || this.feedObserverLoadNextBatch && !this.enableManualLoadNextBatch) && (this.isLoadNextBatchUsingObserver = !0), this.firstBatchDistanceThresholdFromTop && !this.enableManualLoadNextBatch && (this.throttledLoadRestOfBatchScrollHandler = this.loadRestOfBatchScrollHandler.trcBind(this, this.firstBatchDistanceThresholdFromTop).trcThrottle(10), TRC.dom.on(this.observerScrollElement, "scroll", this.throttledLoadRestOfBatchScrollHandler)), this.enableManualLoadNextBatch && (this.lastManualRectsTop = 0, this.listenToManualLoadNextBatchEvent()), this.feedDynamicParameters && this.feedDynamicParameters.enableHistory && (this.historyManager = new TRC.HistoryManager(e)), this.isLoadNextBatchUsingObserver && this.createLoadNextBatchObserverAnchorElement();
                    const n = TRC.Feed.getFeedConfig(r, "preventReachingFooterConfig", "preventReachingFooterData");
                    this.hasPreventReachingFooter = n && void 0 !== n.enable ? TRC.util.isTrue(n.enable) : r.hasPreventReachingFooter, n && this.hasPreventReachingFooter && TRC.PreventReachingTheFooter.init(this, n), this.listenToTrcResponse(), this.createLoadingIndicator(), this.initMonitoringOfDuplicatedItemsIfNeeded()
                }
                loadRestOfBatchScrollHandler(e) {
                    const t = this.isNearingStartOfPage(e);
                    this.restOfFirstBatchLoaded || this.isCache ? TRC.dom.off(this.observerScrollElement, "scroll", this.throttledLoadRestOfBatchScrollHandler) : !this.restOfFirstBatchLoaded && t && (this.getNextBatch(), TRC.dom.off(this.observerScrollElement, "scroll", this.throttledLoadRestOfBatchScrollHandler))
                }
                createNewNextBatchAnchorObserver() {
                    TRC.dom.off(this.observerScrollElement, "scroll", this.nextBatchObserverCreator), TRC.intersections.unobserve(this.loadNextBatchAnchorObserverId), this.ampFeedResizeListener && this.ampFeedResizeListener.remove(), this.nextBatchObserverCreator = null, this.isLoadNextBatchAnchorObserveEnter = !1, this.observeNextBatchAnchor()
                }
                observeNextBatchAnchor() {
                    const e = this.getNextBatchDistanceThreshold(),
                        t = {
                            rootSelector: this.observerRootSelector,
                            targetElement: this.loadNextBatchAnchorContainer,
                            threshold: [0, .25, .5, .75, 1],
                            rootMargin: `0px 0px ${e}px 0px`,
                            onEnter: this.getNextBatch.trcBind(this)
                        };
                    this.loadNextBatchAnchorObserverId = TRC.intersections.observe(t)
                }
                createLoadingSpinner() {
                    this.spinnerContainer = document.createElement("div"), this.spinnerContainer.className += "tbl-loading-spinner tbl-hidden", this.container.appendChild(this.spinnerContainer)
                }
                createLoadingCardPlaceholder() {
                    this.spinnerContainer = document.createElement("div"), TRC.ModuleLoader.load("feed-card-placeholder", TRC.FeedCardPlaceHolder, () => {
                        TRC.FeedCardPlaceHolder.createLoadingCardPlaceholder({
                            direction: this.trcManager.direction,
                            container: this.container,
                            cardPlaceholder: this.spinnerContainer,
                            numPlaceholderItems: this.numPlaceholderItems
                        })
                    })
                }
                reserveSpaceForLoader(e, t, r) {
                    if (this.nbLoaderLayerEnabled)
                        if (t) {
                            const e = t.style.getPropertyValue("padding-bottom");
                            t.style.removeProperty("padding-bottom"), r.style.setProperty("padding-bottom", `${e}`, "important")
                        } else {
                            let t;
                            if (e) t = 50;
                            else if (TRC.dom.isSmartPhone()) {
                                const e = 95,
                                    r = 8;
                                t = this.numPlaceholderItems * e + r
                            } else {
                                const e = 173,
                                    r = 40;
                                t = this.numPlaceholderItems * e + r
                            }
                            r.style.setProperty("padding-bottom", `${t}px`, "important"), this.spinnerContainer.style.setProperty("position", "absolute", "important")
                        }
                }
                createLoadingIndicator() {
                    const e = this.trcManager.global["disable-nb-anim"];
                    if (!e) {
                        const e = this.feedDynamicParameters && "true" === this.feedDynamicParameters.disableLoadingCardsPlaceholder || this.trcManager.global["disable-loading-cards-placeholder"];
                        e ? this.createLoadingSpinner() : this.createLoadingCardPlaceholder(), this.reserveSpaceForLoader(e, null, this.container)
                    }
                }
                createLoadNextBatchObserverAnchorElement() {
                    this.loadNextBatchAnchorContainer = document.createElement("div"), this.loadNextBatchAnchorContainer.className = "tbl-batch-anchor", this.container.appendChild(this.loadNextBatchAnchorContainer), this.observeNextBatchAnchor()
                }
                stopScrolling() {
                    if (this.preventReachingTheFooter && this.preventReachingTheFooter.disable(), this.isLoadNextBatchUsingObserver) return this.isAllowedToRequestMoreContent = !1, void TRC.intersections.unobserve(this.loadNextBatchAnchorObserverId);
                    this.enableManualLoadNextBatch ? this.isAllowedToRequestMoreContent = !1 : TRC.dom.off(this.observerScrollElement, "scroll", this.throttledScrollHandler)
                }
                hideLoadingSpinner() {
                    this.spinnerContainer && -1 === this.spinnerContainer.className.indexOf("tbl-hidden") && TRC.dom.addClass(this.spinnerContainer, "tbl-hidden")
                }
                showLoadingSpinner() {
                    this.spinnerContainer && TRC.dom.removeClass(this.spinnerContainer, "tbl-hidden")
                }
                listenToTrcResponse() {
                    let e;
                    e = this.hasPreventReachingFooter ? this.onTrcResponsePreventReachingFooterWrapper.trcBind(this) : this.onTrcResponse.trcBind(this), TRC.EventsAPI.listen("nocontent", this.onTrcNoContent.trcBind(this)), TRC.listen("trcResponseHandled", e), TRC.listen("resumeFeedRendering", e)
                }
                listenToManualLoadNextBatchEvent() {
                    TRC.listen(`visible::${this.parentPlacementName}`, this.manualLoadNextBatchHandler.trcBind(this))
                }
                shouldEnableLoadNextBatch(e) {
                    const t = e.boundingClientRect.top < this.lastManualRectsTop,
                        r = e.boundingClientRect.top + e.boundingClientRect.height - e.rootBounds.height,
                        i = r <= this.getNextBatchDistanceThreshold();
                    return i && t
                }
                manualLoadNextBatchHandler(e) {
                    this.shouldEnableLoadNextBatch(e) && this.getNextBatch(), this.lastManualRectsTop = e.boundingClientRect.top
                }
                isNearingStartOfPage(e) {
                    return e <= this.getScrollTop()
                }
                getNextBatchDistanceThreshold() {
                    if (!this.isFirstBatchRequest) return this.nextBatchDistanceThreshold;
                    const e = this.firstBatchLazyLoadingEnabled && this.trcManager.global["feed-first-batch-distance-threshold"] || this.nextBatchDistanceThreshold;
                    return this.trcManager.renderController.isLazyRenderEnabled ? this.trcManager.renderController.getBatchThreshold(this, e) : e
                }
                updateNextBatchNumber(e) {
                    this.trcNextBatchNumber = +e
                }
                getNextBatch(e) {
                    try {
                        this.preventReachingTheFooter && this.preventReachingTheFooter.lateRenderEnabled && this.preventReachingTheFooter.handleGetNextBatch();
                        const t = {};
                        if (!1 === this.isAllowedToRequestMoreContent || this.isPendingNextBatch) return;
                        if (this.isLoadNextBatchUsingObserver) {
                            if (!e && this.isLoadNextBatchAnchorObserveEnter) return;
                            this.isLoadNextBatchAnchorObserveEnter = !0
                        }
                        this.isFirstBatchRequest = !1, this.parentPlacementData.fb = this.trcNextBatchNumber || ++this.uiBatchNumberCounter, this.restOfFirstBatchLoaded = !0, this.parentPlacementData.fi = this.numPlacements + this.scAdjacencyPlacements, t[this.parentPlacementName] = this.parentPlacementData, this.isPendingNextBatch = !0, this.showLoadingSpinner(), this.trcManager.dispatchLoadRequest(t)
                    } catch (e) {
                        __trcError("Failed to load next batch in getNextBatch()", e)
                    }
                }
                getScrollTop() {
                    return TRC.dom.getScrollTop(this.observerScrollElement)
                }
                static isVideoItemPreviewOn(e, t) {
                    return !(e.uimvip !== t.mode && !e.evip)
                }
                handlePlacement(t) {
                    const r = document.createElement("div"),
                        i = t.trcResponse.scac;
                    if (this.feedDynamicParameters && e.isVideoItemPreviewOn(this.feedDynamicParameters, t) && (r.className = "tbl-preview"), t.isCache) {
                        if (this.isCache = !0, this.cachedViewId = t.cachedViewId, !this.loadFromCacheEventSent) {
                            const e = "backToFeed_loadFromCache",
                                r = __trcJSONify({
                                    origViewId: this.cachedViewId,
                                    placement: t.placement,
                                    cardIndex: i ? null : this.numPlacements
                                });
                            this.trcManager.sendAbTestEvent(e, r), this.loadFromCacheEventSent = !0
                        }
                    } else if (this.isCache && !this.loadNotFromCacheEventSent) {
                        const e = "backToFeed_loadNotFromCache",
                            r = __trcJSONify({
                                origViewId: this.cachedViewId,
                                placement: t.placement,
                                cardIndex: i ? null : this.numPlacements
                            });
                        this.trcManager.sendAbTestEvent(e, r), this.loadNotFromCacheEventSent = !0
                    }
                    t.container = r, t.modeGroupOrder = this.numPlacements, i || r.setAttribute("data-card-index", this.numPlacements), r.placementData = t, this.uiBatchNumberCounter = +t.trcResponse.fb || this.uiBatchNumberCounter, this.parentContainerId && (r.id = `${this.parentContainerId}${i?`-sca${this.scAdjacencyPlacements+1}`:`-pl${this.numPlacements}`}`, r.setAttribute("data-batch-num", this.uiBatchNumberCounter)), "function" == typeof this.afterPlacementContainerCreated && this.afterPlacementContainerCreated(r, t), this.isLoadNextBatchUsingObserver ? this.container.insertBefore(r, this.container.querySelector(".tbl-batch-anchor")) : this.container.insertBefore(r, this.container.querySelector(".tbl-loading-spinner")), this.historyManager && (this.historyManager.trackElement(r), this.historyManager.scrollToElementIfWasLastInViewPort(r)), i ? this.scAdjacencyPlacements++ : this.numPlacements++, (!t.trcResponse.v || t.trcResponse.v.length > 0) && (this.currentBatchSuccessful = !0)
                }
                switchMainContainer(e) {
                    this.nbLoaderLayerEnabled && this.reserveSpaceForLoader(null, this.container, e), this.container = e, this.isLoadNextBatchUsingObserver && this.container.appendChild(this.loadNextBatchAnchorContainer), this.container.appendChild(this.spinnerContainer)
                }
                onTrcResponsePreventReachingFooterWrapper(e) {
                    this.preventReachingTheFooter && this.preventReachingTheFooter.preparePreventScroll(e)
                }
                onTrcNoContent(e) {
                    e.detail.placement || (this.currentBatchSuccessful = !1, this.onTrcResponse())
                }
                onTrcResponse() {
                    if (this.currentBatchSuccessful) this.numOfConsecutiveFailedRequests = 0;
                    else if (this.numOfConsecutiveFailedRequests++, this.numOfConsecutiveFailedRequests >= this.maxNumOfConsecutiveFailedRequests) return this.stopScrolling(), void this.hideLoadingSpinner();
                    this.currentBatchSuccessful = !1, this.isPendingNextBatch = !1, this.preventReachingTheFooter && !0 === this.preventReachingTheFooter.isWaitToHide ? this.preventReachingTheFooter.isWaitToHide = !1 : this.hideLoadingSpinner(), this.isLoadNextBatchUsingObserver && !this.nextBatchObserverCreator && !1 !== this.isAllowedToRequestMoreContent && (this.nextBatchObserverCreator = this.createNewNextBatchAnchorObserver.trcBind(this).trcThrottle(10), TRC.dom.on(this.observerScrollElement, "scroll", this.nextBatchObserverCreator), this.ampFeedResizeListener = TRC.listen("ampFeedResize", this.nextBatchObserverCreator)), this.duplicatedItemsMonitor && this.duplicatedItemsMonitor.checkForDuplicatedItems(), this.preventReachingTheFooter && this.preventReachingTheFooter.isEnableLateRender && (this.preventReachingTheFooter.isEnableLateRender = !1, this.getNextBatch(!0))
                }
                setIsAllowedToRequestMoreContent(e) {
                    this.isAllowedToRequestMoreContent = e
                }
                getIsFirstBatch() {
                    return this.isFirstBatchRequest
                }
                initMonitoringOfDuplicatedItemsIfNeeded() {
                    if (this.shouldMonitorForDuplicatedItems()) {
                        const e = {
                            parentContainerSelector: this.itemsParentContainerSelector,
                            additionalLogDataBuilder: e => ({
                                cardIndex: TRC.dom.closest(e, "[data-card-index]").getAttribute("data-card-index")
                            })
                        };
                        this.duplicatedItemsMonitor = new TRC.DuplicatedItemsMonitor(this.trcManager, e)
                    }
                }
                shouldMonitorForDuplicatedItems() {
                    return this.trcManager.global["monitor-dup-items-traffic-pct"] > 100 * Math.random() || -1 !== ["yes", "true", "1"].indexOf(TRC.URL.prototype.getParameter.call(location.href, "taboola_dedup_debug"))
                }
            }
            TRC.InfiniteScrollEngine = e
        })(), (() => {
            class e {
                constructor(e) {
                    this.getConfig(e), this.trackFastScroller()
                }
                getConfig(e) {
                    this.lateRenderTimeout = parseInt(e.timeout, 10) || 5e3, this.fastScrollerTime = parseInt(e.fastScrollerTime, 10) || 1e4, this.maxCards = parseInt(e.maxCards, 10) || 5, this.detectCardNumber = parseInt(e.detectCardNumber, 10) || 5, this.trcManager = e.trcManager, this.infiniteScrollEngine = e.infiniteScrollEngine, this.cardOneTime = null, this.detectCardTime = null, this.observerTargets = [], this.onScroll = this.observeScroll.trcBind(this).trcThrottle(50), this.onEndKey = this.endKeyHandler.trcBind(this), this.isFastScroller = !1, this.prevPosition = window.pageYOffset, this.scrollThrottleTime = parseInt(e.scrollThrottleTime, 10) || 10, this.timeout = null, this.scrollTimeoutLength = parseInt(e.scrollTimeoutLength, 10) || 5e3, this.timeoutEnabled = !1, this.stopListenToBatch = !0, this.shouldPreventScrolling = !0, this.loadNextBatchAnchorContainer = e.infiniteScrollEngine.loadNextBatchAnchorContainer, this.isPreventScroll = !1
                }
                trackFastScroller() {
                    TRC.dom.on(window, "scroll", this.onScroll), TRC.dom.on(document, "keydown", this.onEndKey)
                }
                unTrackFastScroller() {
                    TRC.dom.off(window, "scroll", this.onScroll), TRC.dom.off(document, "keydown", this.onEndKey), this.observerTargets.forEach(e => {
                        TRC.intersections.unobserve(e)
                    })
                }
                enableLateRender() {
                    this.isFastScroller = !0, this.lateRenderEnabled = !0
                }
                observeScroll() {
                    this.cardOne && 0 !== this.cardOne.length || (this.cardOne = this.infiniteScrollEngine.origContainer.querySelector('[data-card-index="1"]'), this.cardOne && this.observeCard(this.cardOne, this.saveCardVisibilityTime.trcBind(this, "cardOneTime"))), this.detectCard && 0 !== this.detectCard.length || (this.detectCard = this.infiniteScrollEngine.origContainer.querySelector(`[data-card-index="${this.detectCardNumber}"]`), this.detectCard && this.observeCard(this.detectCard, this.saveCardVisibilityTime.trcBind(this, "detectCardTime"))), this.detectCardTime && this.cardOneTime && (this.detectCardTime - this.cardOneTime < this.fastScrollerTime && this.enableLateRender(), this.unTrackFastScroller())
                }
                observeCard(e, t) {
                    const r = {
                            targetElement: e,
                            onEnter: t,
                            threshold: .5
                        },
                        i = TRC.intersections.observe(r);
                    this.observerTargets.push(i)
                }
                saveCardVisibilityTime(e) {
                    this[e] || (this[e] = (new Date).getTime())
                }
                endKeyHandler() {
                    const e = window.event,
                        {
                            keyCode: t,
                            metaKey: r
                        } = e;
                    this.lateRenderEnabled || (35 === t || r && 40 === t) && (this.unTrackFastScroller(), this.enableLateRender())
                }
                handleGetNextBatch() {
                    this.getNextBatchTime = (new Date).getTime()
                }
                handleBatch(e, t) {
                    const r = t.trc.vl.length;
                    void 0 === this.numOfCards && (this.numOfCards = 0), this.numOfCards += r, this.isPreventScroll = !1, this.numOfCards >= this.maxCards && (this.numOfCards = 0, this.isPreventScroll = !0, this.isEnableLateRender = !0, this.preventScrollBelowAnchor()), this.stopListenToBatch || this.stopListenToScrollForPrevent()
                }
                listenToScrollForPrevent() {
                    this.onScrollForPrevent = this.observeScrollForPrevent.trcBind(this), TRC.dom.on(window, "scroll", this.onScrollForPrevent), this.stopListenToBatch = !1
                }
                stopListenToScrollForPrevent() {
                    TRC.dom.off(window, "scroll", this.onScrollForPrevent), TRC.dom.off(document, "keydown", this.onEndKeyOnPreventScroll), this.stopListenToBatch = !0, clearTimeout(this.timeout)
                }
                observeScrollForPrevent() {
                    const e = (new Date).getTime();
                    if (e - this.scrollEventTime < this.scrollThrottleTime) return;
                    const t = TRC.dom.getScrollTop(window),
                        r = this.prevPosition > t,
                        i = this.infiniteScrollEngine.parentContainerId,
                        o = document.getElementById(`${i}-pl${this.infiniteScrollEngine.numPlacements-1}`).scrollHeight,
                        n = window.innerHeight - o / 1.5,
                        s = TRC.PreventReachingTheFooter.getOffsetFromTopOfPage(this.loadNextBatchAnchorContainer),
                        a = s < t + n;
                    if (!r && a && this.shouldPreventScrolling) {
                        const e = s - n;
                        window.scrollTo(TRC.PreventReachingTheFooter.getWindowScrollLeft(), e), this.timeoutEnabled || this.enableScrollBelowAnchorOnTimeout()
                    }
                    this.prevPosition = TRC.dom.getScrollTop(window), this.scrollEventTime = (new Date).getTime()
                }
                enableScrollBelowAnchorOnTimeout() {
                    this.timeout = setTimeout(() => {
                        this.shouldPreventScrolling = !1
                    }, this.scrollTimeoutLength), this.timeoutEnabled = !0
                }
                preventScrollBelowAnchor() {
                    this.shouldPreventScrolling = !0, clearTimeout(this.timeout), this.timeoutEnabled = !1
                }
                static getWindowScrollLeft() {
                    return window.scrollX ? window.scrollX : document.documentElement.scrollLeft
                }
                static getOffsetFromTopOfPage(e) {
                    return e.getBoundingClientRect().top + window.pageYOffset
                }
                listenToKeysOnPreventScroll() {
                    this.onEndKeyOnPreventScroll = this.endKeyHandlerOnPreventScroll.trcBind(this), TRC.dom.on(document, "keydown", this.onEndKeyOnPreventScroll)
                }
                endKeyHandlerOnPreventScroll(e) {
                    const t = e || window.event,
                        {
                            keyCode: r,
                            metaKey: i
                        } = t;
                    (35 === r || i && 40 === r) && window.scrollTo(0, TRC.PreventReachingTheFooter.getOffsetFromTopOfPage(this.loadNextBatchAnchorContainer) - window.innerHeight)
                }
                shouldLateRender(e) {
                    return this.isFastScroller && this.isEnableLateRender && e < this.lateRenderTimeout
                }
                preparePreventScroll(e) {
                    this.trcResponseTime = (new Date).getTime();
                    const t = this.trcResponseTime - this.getNextBatchTime;
                    if (!this.shouldLateRender(t)) return void this.infiniteScrollEngine.onTrcResponse(e);
                    const r = this.lateRenderTimeout - t;
                    setTimeout(this.infiniteScrollEngine.onTrcResponse.trcBind(this.infiniteScrollEngine, e), r), this.trcResponseTime = null, this.getNextBatchTime = null, this.isWaitToHide = !0, this.isPreventScroll && (this.listenToScrollForPrevent(), this.listenToKeysOnPreventScroll())
                }
                disable() {
                    this.infiniteScrollEngine.hideLoadingSpinner(), this.isPreventScroll = !1, this.stopListenToScrollForPrevent()
                }
                static init(e, t) {
                    e.preventReachingTheFooter = new TRC.PreventReachingTheFooter({
                        timeout: t.timeout,
                        fastScrollerTime: t.fastScrollerTime,
                        maxCards: t.maxCards,
                        detectCardNumber: t.detectCardNumber,
                        infiniteScrollEngine: e,
                        trcManager: TRCImpl,
                        scrollTimeoutLength: t.scrollTimeoutLength,
                        scrollThrottleTime: t.scrollThrottleTime
                    })
                }
            }
            TRC.PreventReachingTheFooter = e
        })(), (() => {
            const e = 5,
                t = 1e3,
                r = 100;
            class i {
                constructor(i, o, n, s) {
                    this.parentFeed = i, this.trcManager = o, this.options = s, this.container = i.container, this.origContainer = this.container, this.pendingPublisherCardsList = [], this.feedDynamicParameters = this.options.feedDynamicParameters, this.shouldStopFeedOnMissingPublisherCard = this.feedDynamicParameters && "STOP" === this.feedDynamicParameters.missingPublisherCardFeedStrategy || "STOP" === this.trcManager.global["missing-publisher-card-feed-strategy"], this.shouldSendCardEvents = !(this.feedDynamicParameters && this.feedDynamicParameters.disableSendingCardEvents || this.trcManager.global["disable-sending-card-events"]), this.publisherCardMaxRetries = o.global["feed-split-max-retries"] || e, this.publisherCardRetryInterval = o.global["feed-split-retry-interval"] || t, this.feedCardEventsMaxRetries = o.global["feed-card-events-max-retries"] || e, this.feedCardEventsRetryInterval = o.global["feed-card-events-retry-interval"] || t, this.feedCardEventsMinContainerHeight = o.global["feed-card-events-min-container-height"] || r
                }
                handlePendingPublisherCards(e = 0, t, r, i) {
                    const o = (r = r || this.pendingPublisherCardsList[0]).trcResponse,
                        n = i ? "spl" : "pcp",
                        s = o[n],
                        a = s.tps,
                        l = s.sun || s.pun;
                    let c, d = !1;
                    try {
                        c = document.querySelector(a)
                    } catch (e) {
                        __trcWarn(`Exception while trying to find publisher card with selector ${a}: ${e}`), d = !0
                    }
                    if (!c || !c.parentNode) return this.parentFeed.setIsAllowedToRequestMoreContent(!1), void(e < this.publisherCardMaxRetries && !d ? (e++, setTimeout(this.handlePendingPublisherCards.trcBind(this, e, t, r, i), this.publisherCardRetryInterval)) : (e = 0, this.pendingPublisherCardsList.shift(), this.pendingPublisherCardsList.length ? setTimeout(this.handlePendingPublisherCards.trcBind(this, e, t, this.pendingPublisherCardsList[0], i), this.publisherCardRetryInterval) : (i || this.shouldStopFeedOnMissingPublisherCard ? this.parentFeed.stopScrolling() : (this.pendingPublisherCardsList = [], this.parentFeed.setIsAllowedToRequestMoreContent(!0), TRC.dispatch("resumeFeedRendering")), TRC.modDebug.logMessageToServer(1, `Load publisher card: ${l} on Card: ${t} with the anchor element selector: ${a} failed after ${this.publisherCardMaxRetries} retries`, {
                        idx: "pc",
                        pc: l,
                        st: 0,
                        sel: a,
                        slot: t,
                        plat: this.trcManager.getPlatformCode()
                    }))));
                    this.createFeedContainerForResumeAfterPublisherCard(c, s), this.shouldSendCardEvents && !i && this.pendingPublisherCardsList.forEach(this.initCardEventsManager.trcBind(this)), TRC.modDebug.logMessageToServer(2, `Load publisher card: ${l} on Card: ${t} with the anchor element selector: ${a} succeed`, {
                        idx: "pc",
                        pc: l,
                        st: 1
                    }), this.pendingPublisherCardsList = [], this.parentFeed.setIsAllowedToRequestMoreContent(!0), e > 0 && TRC.dispatch("resumeFeedRendering")
                }
                initCardEventsManager(e, t = 0) {
                    const r = e.trcResponse.pcp.tps,
                        i = document.querySelector(r);
                    if (!i) return void(t < this.publisherCardMaxRetries && (t++, setTimeout(this.initCardEventsManager.trcBind(this, e, t), this.feedCardEventsRetryInterval)));
                    const o = new TRC.CardEventsManager(this.trcManager, this.options, e, i);
                    this.checkIfCardRendered(o, i)
                }
                createFeedContainerForResumeAfterPublisherCard(e, t) {
                    const r = document.createElement("div"),
                        o = this.parentFeed.container;
                    if (this.parentFeed.numContainers++, this.parentFeed.switchMainContainer(r), this.parentFeed.setMainContainerCssClassesAndAttributes(r, this.options), e.parentNode.insertBefore(r, e.nextElementSibling), t && (TRC.util.isTrue(t.scw) || TRC.util.isTrue(t.acw)) && (this.setPublisherCardContainerStyle(r), TRC.dom.on(window, "resize", this.setPublisherCardContainerStyle.trcBind(this, r))), i.sendWarnIfAnchorIsIncorrectlyPositioned(o, e), this.parentFeed.isFullWidthMobileFeed(this.options)) {
                        const e = this.parentFeed.getMobileFullWidthMarginsCss(this.parentFeed.numContainers);
                        e && TRC.dom.injectStyle(e, null)
                    }
                }
                static sendWarnIfAnchorIsIncorrectlyPositioned(e, t) {
                    const r = t.getBoundingClientRect().top,
                        i = e.getBoundingClientRect().top;
                    r < i && __trcWarn("anchor element is above the original feed container")
                }
                static getContainerWidth(e) {
                    return getComputedStyle(e).width
                }
                getPageDirection() {
                    return "rtl" === this.trcManager.direction ? "right" : "left"
                }
                setPublisherCardContainerMargin(e) {
                    const t = this.getPageDirection(),
                        r = this.origContainer.getBoundingClientRect()[t],
                        i = e.getBoundingClientRect()[t];
                    let o, n = 1;
                    if (r === i) return;
                    "right" === t ? (o = "marginRight", n = -1) : o = "marginLeft";
                    const s = parseInt(getComputedStyle(e)[o], 10),
                        a = r - i,
                        l = (a + s) * n;
                    e.style[o] = `${l}px`
                }
                setPublisherCardContainerStyle(e) {
                    const t = i.getContainerWidth(this.origContainer),
                        r = i.getContainerWidth(e),
                        {
                            feedDynamicParameters: o
                        } = this.options,
                        n = o && o.disableFeedSplitContainerAlignment || this.trcManager.global["disable-feed-split-container-alignment"],
                        s = t === r;
                    s && n || (s || (e.style.width = t), n || this.setPublisherCardContainerMargin(e))
                }
                registerPublisherCardForHandling(e) {
                    this.pendingPublisherCardsList.unshift(e)
                }
                checkIfCardRendered(e, t, r = 0) {
                    t.getBoundingClientRect().height < this.feedCardEventsMinContainerHeight ? r < this.feedCardEventsMaxRetries && (r++, setTimeout(this.checkIfCardRendered.trcBind(this, e, t, r), this.feedCardEventsRetryInterval)) : e.handleRenderedCard(t)
                }
            }
            TRC.PublisherCardsManager = i
        })(), (() => {
            const e = "trc-w2f",
                t = "trc-w2f-no-ui";
            class r {
                constructor(e, t, r) {
                    this.parentFeed = e, this.trcManager = t, this.hasFeedUI = r, this.setUpFeedContainer(), TRC.listen("trcResponseHandled", this.setContentTypeCssClass.trcBind(this))
                }
                setUpFeedContainer() {
                    const r = this.parentFeed.container;
                    r.className += ` ${e}`, !1 === this.hasFeedUI && (r.className += ` ${t}`)
                }
                setContentTypeCssClass() {
                    const e = this.parentFeed.container,
                        t = e.querySelectorAll(".videoCube.syndicatedItem").length,
                        r = e.querySelectorAll(".videoCube:not(.syndicatedItem)").length;
                    let i = "sponsored";
                    r && (i = t ? "hybrid" : "organic"), this.parentFeed.container.className = this.parentFeed.container.className.replace(/\btrc-content-(hybrid|sponsored|organic)\b/g, ""), this.parentFeed.container.className += ` trc-content-${i}`
                }
                addHeaderToFeed(e) {
                    this.parentFeed.header.appendChild(e), this.header = e
                }
                addFooterToFeed(e) {
                    this.footer = document.createElement("div"), this.footer.className = "tbl-feed-footer", this.footer.appendChild(e), this.parentFeed.container.appendChild(this.footer)
                }
                getHeader() {
                    return this.header
                }
                getFooter() {
                    return this.footer
                }
                applyWidgetHeaderAndFooterStylesToFeed(t) {
                    if (this.headerAndFooterStylesApplied) return;
                    const r = new RegExp(`(\\.${t})([^{]+\\.(trc_rbox_header|logoDiv|trc-widget-footer))`, "g"),
                        i = new RegExp(`^(?![^}]*.${e}[^{]+).*$`, "gm");
                    TRC.dom.injectedStyles.forEach(t => {
                        if (!r.test(t.innerText)) return;
                        let o = t.innerText.replace(r, `.${e}$2`);
                        o = (o = (o = (o = o.replace(/\n/g, "")).replace(/}/g, "}\n")).replace(i, "")).replace(/\n/g, ""), TRC.dom.injectStyle(o, document)
                    }), this.headerAndFooterStylesApplied = !0
                }
            }
            TRC.WidgetToFeedHelper = r
        })(), (() => {
            const e = {
                TABOOLA_REMINDER: {
                    name: "taboola_reminder",
                    responseKey: "taboola-reminder",
                    contentElementId: "tbl-taboola-reminder-inner",
                    moduleFileName: "taboola-reminder",
                    moduleClass: "TaboolaReminder",
                    closeBtn: "tbl-taboola-reminder-closeBtn",
                    closeBtnWrapper: "tbl-taboola-reminder-closeBtn-wrapper"
                },
                NEXT_UP: {
                    name: "next_up",
                    responseKey: "next-up-widget",
                    contentElementId: "tbl-next-up-inner",
                    moduleFileName: "next-up-widget",
                    moduleClass: "NextUpWidget",
                    closeBtn: "tbl-next-up-closeBtn",
                    closeBtnWrapper: "tbl-next-up-closeBtn-wrapper"
                }
            };
            class t {
                constructor(e, r, i) {
                    t.isFloatingUnitOn ? __trcWarn("Floating Unit: Trying To Add More Than One Floating Unit") : (t.isFloatingUnitOn = !0, this.formattedResponse = e, this.placementData = r, this.trcManager = i, this.videoList = this.formattedResponse.trc["video-list"], this.unit = t.getUnitByResponseKey(this.videoList), this.contentSelector = `#${this.unit.contentElementId}`, this.sendSupplyEvent("RENDERED"), this.initFloatingUnit())
                }
                sendSupplyEvent(e, t = null, r = null) {
                    const i = {
                        event_type: this.unit.name,
                        event_state: e,
                        event_value: t,
                        event_msg: r
                    };
                    TRCImpl.sendEvent("supply-feature", {
                        d: JSON.stringify(i)
                    }, null)
                }
                static getUnitByResponseKey(t) {
                    let r;
                    return Object.keys(e).some(i => {
                        const o = e[i];
                        return !!t[o.responseKey] && (r = o, !0)
                    }), r
                }
                initFloatingUnit() {
                    this.createElementForFloatingUnitContent(), this.setFloatingUnitOptions(), this.definePlacementDataContainerSelector(), this.lazyLoadModules()
                }
                definePlacementDataContainerSelector() {
                    this.placementData["container-selectors"] = [{
                        container: this.contentSelector,
                        location: "first",
                        shouldCreateContainer: !0,
                        isFloatingUnit: !0
                    }]
                }
                setFloatingUnitOptions() {
                    this.floatingUnitOptions = this.videoList[this.unit.responseKey] || {}, this.floatingUnitOptions.unit = this.unit
                }
                setNextUpSpecificOptions() {
                    this.floatingUnitOptions.nupOverlayConfig = this.trcManager.global["nup-overlay-config"] ? JSON.parse(this.trcManager.global["nup-overlay-config"]) : {}
                }
                lazyLoadModules() {
                    TRC.ModuleLoader.load("floating-unit", TRC.FloatingUnit, (() => {
                        this.lazyLoadChildClass()
                    }).trcBind(this))
                }
                lazyLoadChildClass() {
                    this.unit.responseKey === e.NEXT_UP.responseKey && this.setNextUpSpecificOptions(), TRC.ModuleLoader.load(this.unit.moduleFileName, TRC[this.unit.moduleClass], (() => {
                        const e = TRC[this.unit.moduleClass];
                        new e(this.floatingUnitOptions, this.trcManager, this.contentElement), this.trcManager.initRBoxDrawingIfPlacementEligible(this.placementData)
                    }).trcBind(this))
                }
                createElementForFloatingUnitContent() {
                    const e = document.createElement("div");
                    e.id = this.unit.contentElementId, e.className = this.unit.contentElementId, TRC.dom.addClass(e, "tbl-hidden"), this.contentElement = document.body.appendChild(e)
                }
                static isFloatingUnit(e) {
                    return e && !!t.getUnitByResponseKey(e)
                }
            }
            t.isFloatingUnitOn = !1, TRC.FloatingUnitGenerator = t
        })(),
        function() {
            var t = 1000075,
                r = {},
                i = "",
                o;

            function n(e, n, s, a, h) {
                var p;
                i = l(), o = TRCImpl.additional_data && TRCImpl.additional_data.sdkd || {};
                var g = c(),
                    m = a.global["fraud-detection-script-url"] || "https://js.ad-score.com/score.min.js?pid=" + t + "#",
                    b = r = {
                        tid: d(),
                        l1: e,
                        l4: s,
                        uid: n,
                        pub_domain: g,
                        ref: s
                    };
                o.appid ? b["l3"] = b["pub_app"] = o.appid : b["l3"] = TRC.platform_code, p = TRC.URL.prototype.switchProtocol.call(m, TRC.PROTOCOL) + TRC.util.keys(b).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(b[e])
                }).join("&"), this.isInitialized = !0, u(p, {
                    impressionUTID: {
                        enabled: !0 === a.global["fraud-enable-impression-utid"],
                        publisherId: e,
                        userId: n,
                        viewId: h
                    }
                })
            }

            function s(i, o, n, s, a, l) {
                setTimeout(function() {
                    try {
                        if (TRC.clickFraudDetect.isLoaded) {
                            var c = {},
                                d = TRC.clickFraudDetect.impressionUTID;
                            TRC.util.keys(r).forEach(function(e) {
                                c[e] = r[e]
                            }), c["pid"] = "" + t, c["l2"] = i, c["l3"] = c["l3"] || TRC.platform_code, c["l4"] = s, c["l5"] = a, c["l6"] = "clicked", c["uid"] = o, c["utid"] = d ? d + "_" + n : n, c["isTRCUrl"] = l, adScore("send", "adclick", {}, c)
                        } else __trcWarn("Fraud script did not render", e)
                    } catch (e) {
                        __trcWarn("fraudScriptCallback: Error in fraud detection", e)
                    }
                }, 0)
            }

            function a() {
                return TRC.MobileSdk.isEnabled()
            }

            function l() {
                if (!a()) return TRC.isAMP && window.context && window.context.canonicalUrl || TRC.pageManager.getTopMostWindow().location.href;
                var e = TRC._taboolaClone && TRC._taboolaClone.filter(function(e) {
                    return !!e.url
                });
                return e && e.url || window.location.href
            }

            function c() {
                var e = document.createElement("a");
                return e.href = i || l(), e.hostname
            }

            function d() {
                return a() ? "_InAPP" : "PHON" === TRC.platform_code ? "_MW" : "_Desktop"
            }

            function h(e) {
                TRC.clickFraudDetect.isLoaded = !0, e.impressionUTID.enabled && p(e.impressionUTID)
            }

            function p(e) {
                var r = [e.viewId, e.publisherId, e.userId].join("-");
                if (e.publisherId && e.userId && e.viewId) try {
                    window.adScore("set", "utid", {}, {
                        pid: t,
                        utid: r
                    }), TRC.clickFraudDetect.impressionUTID = r
                } catch (e) {
                    __trcError("Failed to set fraud UTID on impression", e)
                } else __trcError("Error in clickFraudDetect.setImpressionUTID: missing parameters")
            }

            function u(e, t) {
                if (!TRC.botDetected) try {
                    TRC.net.loadScript(e, "js", h.bind(null, t), null, !0)
                } catch (e) {
                    __trcWarn("loadFraudScript: Error appending fraud script", e)
                }
            }
            TRC.clickFraudDetect = {
                init: n,
                fraudScriptCallback: s,
                isInitialized: !1,
                isLoaded: !1,
                impressionUTID: null
            }
        }(), TRC.util = function(win, doc) {
            var modObject = {
                    isType: function(e, t) {
                        return t = t.charAt(0).toUpperCase() + t.substr(1), Object.prototype.toString.call(e) == "[object " + t + "]"
                    },
                    hasKeys: function(e) {
                        var t;
                        if (this.isType(e, "object"))
                            if (Object.keys && !Object.propertyIsEnumerable("keys")) {
                                if (Object.keys(e).length > 0) return !0
                            } else
                                for (t in e)
                                    if (e.hasOwnProperty(t)) return !0;
                        return !1
                    },
                    getRandomIds: function(e) {
                        for (var t = 0; t < e.len; t++) e.arr[t] = e.prefix + Math.floor(Math.random() * Math.pow(10, e.strength) + 1) + e.suffix
                    },
                    getHtmlDecodeText: (element = doc.createElement("div"), decodeSpecialCharacters = function() {
                        var e = {
                                amp: "&",
                                apos: "'",
                                "#x27": "'",
                                "#x2F": "/",
                                "#39": "'",
                                "#47": "/",
                                lt: "<",
                                gt: ">",
                                nbsp: " ",
                                quot: '"'
                            },
                            t = /&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi;

                        function r(t, r) {
                            return "#" === r[0] ? String.fromCharCode("x" === r[1].toLowerCase() ? parseInt(r.substr(2), 16) : parseInt(r.substr(1), 10)) : e[r] || t
                        }
                        return function(e) {
                            return e.replace(t, r)
                        }
                    }(), function(e) {
                        if ("string" != typeof e) return "";
                        if (!TRC.dom.isHtmlContent(e)) return e;
                        var t = decodeSpecialCharacters(e);
                        return TRC.dom.isHtmlContent(t) ? (element.innerHTML = encodeURI(e), t = element.textContent || element.innerText, decodeURI(t)) : t
                    }),
                    isEmptyString: function(e) {
                        return !e || /^\s*$/.test(e)
                    },
                    keys: function() {
                        if (Object.keys) return function(e) {
                            return "object" == typeof e || "function" == typeof e && null !== e ? Object.keys(e) : []
                        };
                        var e = Object.prototype.hasOwnProperty,
                            t = !{
                                toString: null
                            }.propertyIsEnumerable("toString"),
                            r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                            i = r.length;
                        return function(o) {
                            if ("object" != typeof o && ("function" != typeof o || null === o)) return [];
                            var n = [],
                                s, a;
                            for (s in o) e.call(o, s) && n.push(s);
                            if (t)
                                for (a = 0; a < i; a++) e.call(o, r[a]) && n.push(r[a]);
                            return n
                        }
                    }(),
                    merge: function(e) {
                        if (void 0 === e || null === e || e.constructor !== Object) return null;
                        for (var t = TRC.util, r = 1; r < arguments.length; r++) {
                            var i = arguments[r];
                            if (void 0 !== i && null !== i && i.constructor === Object)
                                for (var o = t.keys(i), n = 0, s, a = o.length; n < a; n++) e[s = o[n]] = i[s]
                        }
                        return e
                    },
                    debounce: function(e, t, r, i) {
                        var o;
                        return function() {
                            var n = i || window,
                                s = arguments,
                                a = function() {
                                    o = null, r || e.apply(n, s)
                                },
                                l = r && !o;
                            clearTimeout(o), o = setTimeout(a, t), l && e.apply(n, s)
                        }
                    },
                    preprocessJsonString: function(e) {
                        return "string" != typeof e ? "" : ([{
                            regex: /({|\[)\s*'/g,
                            replace: '$1"'
                        }, {
                            regex: /'\s*(:|}|,|\])/g,
                            replace: '"$1'
                        }, {
                            regex: /(:|,)\s*'/g,
                            replace: '$1"'
                        }, {
                            regex: /(?:([^"\s:\[{,])"([^"\s:,\]}]))/g,
                            replace: '$1\\"$2'
                        }].forEach(function(t) {
                            e = e.replace(t.regex, t.replace)
                        }), e);
                        var t
                    },
                    jsonParseWithNative: function(e) {
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            return TRC.util.jsonParseWithEval(e)
                        }
                    },
                    jsonParseCustomNative: function(e) {
                        if (win.TRCImpl && win.TRCImpl.global && TRC.util.isTrue(TRCImpl.global["enable-json-parse-preprocess"])) try {
                            return JSON.parse(TRC.util.preprocessJsonString(e))
                        } catch (t) {
                            return __trcWarn("JSON Preprocess failed: '" + e + "'"), null
                        }
                        return TRC.util.jsonParseWithEval(e)
                    },
                    jsonParseWithEval: function(text) {
                        try {
                            return eval("(" + String(text) + ")")
                        } catch (e) {
                            throw new Error("JSON parse error - invalid input!")
                        }
                    },
                    isNativeFunction: function(e) {
                        return /\{\s*\[native code\]\s*\}/.test("" + e)
                    },
                    filterObj: function(e, t) {
                        var r = {};
                        for (var i in t) t.hasOwnProperty(i) && e.call(this, t[i], i, t) && (r[i] = t[i]);
                        return r
                    },
                    textIsRTL: function(e) {
                        if (!e) return !1;
                        var t = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜︀-﹯﻽-￿",
                            r = "֑-߿יִ-﷿ﹰ-ﻼ",
                            i = e.match(new RegExp("^[^" + t + r + "]*(?:([" + t + "]+)|([" + r + "]+))"));
                        return !(!i || !i[2])
                    },
                    isArray: function(e) {
                        return !(!e || Array !== e.constructor)
                    },
                    map: function(e, t, r) {
                        if (Array.prototype.map) return e.map(t, r);
                        var i, o, n;
                        if (null == e) throw new TypeError(" array is null or not defined");
                        var s = Object(e),
                            a = s.length >>> 0;
                        if ("function" != typeof t) throw new TypeError(t + " is not a function");
                        for (arguments.length > 1 && (i = r), o = new Array(a), n = 0; n < a;) {
                            var l, c;
                            n in s && (l = s[n], c = t.call(i, l, n, s), o[n] = c), n++
                        }
                        return o
                    },
                    isTrue: function(e) {
                        return "true" === e || !0 === e || "1" === e
                    },
                    isFalse: function(e) {
                        return !e || "false" === e
                    },
                    isNumber: function(e) {
                        if (TRC.util.isType(e, "string")) {
                            if (!e.trim()) return !1
                        } else if (!TRC.util.isType(e, "number")) return !1;
                        return e - e + 1 >= 0
                    },
                    parseTimeout: function(e, t) {
                        var r;
                        return t = void 0 !== t ? t : -1, void 0 !== e ? parseInt(e, 10) : t
                    },
                    splitUrlParts: (linkElement = document.createElement("a"), function(e) {
                        return e ? (linkElement.href = e, {
                            search: linkElement.search
                        }) : {}
                    }),
                    hashString: function(e) {
                        var t = 0;
                        if (0 == e.length) return t;
                        for (var r = 0; r < e.length; r++) {
                            var i;
                            t = (t << 5) - t + e.charCodeAt(r), t &= t
                        }
                        return t
                    },
                    isPercentEnabled: (flags = {}, window._trcIsUTactive && (TRC._rolledFlagsByPercent = flags), function(e, t) {
                        if (void 0 === flags[t] || null === flags[t]) {
                            var r = Math.random();
                            flags[t] = "true" === e[t] || r <= +e[t]
                        }
                        return flags[t]
                    }),
                    haveMutualKeys: function(e, t) {
                        if (!(e && TRC.util.hasKeys(e) && t && TRC.util.hasKeys(t))) return !1;
                        var r = TRC.util.merge({}, e, t);
                        return Object.keys(r).length < Object.keys(e).length + Object.keys(t).length
                    },
                    isAmp: function(e) {
                        return !!e.isAMP
                    },
                    isMobileSDK: function(e) {
                        return !(!e.mobile || !e.mobile.reportClick)
                    },
                    isRboxEncapsulated: function(e) {
                        return !(!this.isAmp(e) && !this.isMobileSDK(e))
                    },
                    formatString: function(e, t) {
                        var r;
                        return r = t && 0 !== t.length ? e.replace(/\{(\d+)\}/g, function(e, r) {
                            var i = r[0];
                            return void 0 !== t[i] ? t[i] : e
                        }) : e
                    }
                },
                flags, linkElement, element, decodeSpecialCharacters;
            return modObject
        }(window, document), window.__trcCopyProps = function(e, t, r) {
            for (i in e) t[i] = e[i];
            if (r)
                for (var i in r) t[i] = r[i];
            return t
        }, window.__trcFromError = function(e) {
            return TRC.Browser.ie && e.message ? e.message + "[" + e.number + ": " + e.name + "]" : e.message ? e.message + (e.fileName ? e.fileName + ":" + e.lineNumber : "") : e
        }, window.__trcClientTimestamp = function() {
            var e = new Date,
                t = e.getHours(),
                r = e.getMinutes(),
                i = e.getSeconds() + e.getMilliseconds() / 1e3;
            return (t < 10 ? "0" : "") + t + ":" + (r < 10 ? "0" : "") + r + ":" + (i < 10 ? "0" : "") + i.toFixed(3)
        }, window.__trcLog = function e(t, r, i, o, n) {
            function s(e) {
                return e && e.stack && window.TRCImpl && TRC.util && TRC.util.isPercentEnabled(window.TRCImpl.global, "rbox-error-stack-reporting-pct")
            }

            function a(e, t) {
                return Math.random() <= +t && (e <= window.trc_debug_level || document.cookie && document.cookie.search("taboola-debug") > 0)
            }
            if (TRC.pConsole("page", TRC.modDebug.getType(t), r, r), "0" == t && TRC.pConsole("errors", TRC.modDebug.getType(t), r, r), !(window.trc_debug_level < t)) {
                "object" == typeof window.console && console.log(r);
                try {
                    if ((isNaN(o) || null === o) && (o = 1), a(t, o)) {
                        var l = {
                            pct: o
                        };
                        if (s(i)) {
                            var c = TRCImpl && TRCImpl.global["rbox-err-stack-max-length"] || 250;
                            l.errStack = i.stack.substr(0, c)
                        }
                        TRC.modDebug.logMessageToServer(t, r, l, n)
                    }
                } catch (e) {}
            }
        }, window.__trcError = function(e, t, r) {
            __trcLog(0, e + (t ? ": " + __trcFromError(t) : ""), t, r), t && t.stack && void 0 !== window.console && console.trace && console.trace()
        }, window.__trcDebug = function(e, t, r) {
            __trcLog(3, e, t, r)
        }, window.__trcInfo = function(e, t, r) {
            TRC.util.isPercentEnabled(TRCImpl.global, "trcinfo-sample-rate") && __trcLog(2, e, t, r)
        }, window.__trcWarn = function(e, t, r) {
            __trcLog(1, e + (t ? "(" + t + ")" : ""), t, r)
        }, window.__trcWarnUsingBeacon = function e(t, r, i) {
            __trcLog(1, t + (r ? "(" + r + ")" : ""), r, i, !0)
        }, window.__trcDOMWalker = function(e, t) {
            for (t(e), e = e.firstChild; e;) arguments.callee(e, t), e = e.nextSibling
        }, window.__trcJSONify = function(e) {
            return window.JSON.stringify(e)
        }, window.__trcUnJSONify = function(e) {
            try {
                return "string" == typeof e ? TRC.util.jsonParseWithNative(e) : e
            } catch (t) {
                throw new Error("JSON parse update error - invalid input! " + e)
            }
        }, void 0 === document.trcGetCurrentStyle && (document.trcGetCurrentStyle = function(e, t, r) {
            if ("string" == typeof e && (e = document.getElementById(e)), window.getComputedStyle) {
                var i = window.getComputedStyle(e, r);
                return i ? i.getPropertyValue(t) : r ? null : e.style[t]
            }
            return t = t.replace(/-(\w)/, function(e, t) {
                return t.toUpperCase()
            }), e.currentStyle[t]
        }), window.__trcTrim = function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        }, window.__trcGetElementsByClass = function(e, t, r) {
            var i = [],
                o = new RegExp("(^|\\s)" + e + "(\\s|$)"),
                n, s, a;
            for (r = r || document, t = t || "*", s = (n = r.getElementsByTagName(t)).length, a = 0; a < s; a++) o.test(n[a].className) && i.push(n[a]);
            return i
        }, window.__trcToArray = function(e, t) {
            var r;
            for (r in e) e.hasOwnProperty(r) && t.push([r, e[r]])
        }, window.__trcObjectCreate = function(e) {
            if ("function" == typeof Object.create) return Object.create(e);
            var t = function() {};
            if (e !== Object(e) && null !== e) throw TypeError("Argument must be an object, or null");
            t.prototype = e || {};
            var r = new t;
            return t.prototype = null, null === e && (r.__proto__ = null), r
        }, Function.prototype.trcBind || (Function.prototype.trcBind = Function.prototype.bind), void 0 === Function.prototype.trcThrottle && (Function.prototype.trcThrottle = function(e) {
            var t, r = this;
            return function() {
                var i = arguments;
                t && clearTimeout(t), t = setTimeout(function() {
                    r.apply(r, i)
                }, e)
            }
        }), void 0 === document.head && (document.head = document.getElementsByTagName("head")[0]), TRC.GoogleAds = function() {
            return "object" == typeof window.console && console.log("TRC.GoogleAds is Deprecated"), {
                draw: function() {}
            }
        }, TRC.math = TRC.math || function(e, t) {
            function r(e, t, r) {
                return void 0 === r || 0 == +r ? Math[e](t) : (t = +t, r = +r, isNaN(t) || "number" != typeof r || r % 1 != 0 ? NaN : (t = t.toString().split("e"), +((t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - r : -r)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + r : r))))
            }
            return {
                roundByDecimal: function e(t, r) {
                    var i = t / r,
                        o = i.toFixed(0),
                        n = i - o;
                    return o * r + r * Math.round(n)
                },
                round10: function(e, t) {
                    return r("round", e, t)
                }
            }
        }(window, document), (() => {
            const e = "trc_rbox_div",
                t = "videoCube",
                r = "item-thumbnail-href",
                i = "item-label-href";
            class o {
                constructor(e) {
                    this.trcManager = e, this.itemAppearanceTime = {}
                }
                static isEnabled(e) {
                    return TRC.util.isPercentEnabled(e.global, "enable-rbox-heatmap")
                }
                captureItemTime(e) {
                    this.itemAppearanceTime[e] = Date.now()
                }
                captureAndSendClickData(n) {
                    if (!c(n) || a(n)) return;
                    const s = o.collectClickHeatmapCardData(n);

                    function a(e) {
                        return TRC.dom.closest(e.target, `a.${r}`) || TRC.dom.closest(e.target, `a.${i}`)
                    }

                    function l(e) {
                        return TRC.dom.closest(e.target, `.${t}`)
                    }

                    function c(t) {
                        return TRC.dom.closest(t.target, `.${e}`)
                    }
                    l(n) && (s["item-d"] = this.collectClickHeatmapItemData(n)), this.trcManager.sendEvent("heatmap", {
                        d: JSON.stringify(s)
                    }, {})
                }
                static collectEventTargetData(r, i) {
                    const n = i ? e : t,
                        s = TRC.dom.containsClass(r.target, n),
                        a = s ? r.target : TRC.dom.closest(r.target, `.${n}`),
                        l = a.getClientRects()[0],
                        c = s ? {
                            x: 0,
                            y: 0
                        } : r.target.getClientRects()[0],
                        [d, h] = o.getClickPoints(r, c),
                        p = s ? d : Math.abs((c.x || c.left) - (l.x || l.left)) + d,
                        u = s ? h : Math.abs((c.y || c.top) - (l.y || l.top)) + h;
                    return {
                        el: a,
                        x: p,
                        y: u,
                        h: l.height,
                        w: l.width
                    }
                }
                static collectClickHeatmapCardData(e) {
                    const t = o.collectEventTargetData(e, !0);
                    return {
                        x: t.x,
                        y: t.y,
                        h: t.h,
                        w: t.w,
                        "c-time": Math.floor(e.timeStamp)
                    }
                }
                collectClickHeatmapItemData(e) {
                    const t = o.collectEventTargetData(e, !1),
                        r = this.itemAppearanceTime[t.el.video_data.id],
                        i = {
                            x: t.x,
                            y: t.y,
                            h: t.h,
                            w: t.w,
                            slot: t.el.video_data.itemIndex,
                            "ap-time": r
                        };
                    return i
                }
                static getClickPoints(e, t) {
                    if (r(e)) {
                        const r = {
                            x: t.x || t.left,
                            y: t.y || t.top
                        };
                        return [e.touches[0].clientX - r.x, e.touches[0].clientY - r.y]
                    }
                    return [e.offsetX, e.offsetY];

                    function r(e) {
                        return e.touches
                    }
                }
            }
            TRC.Heatmap = o
        })(), (() => {
            let e, t, r = .1,
                i = .3,
                o = !1;
            const n = ["4", "254"],
                s = function({
                    mybox: t,
                    containerElm: o,
                    boxesList: n
                }) {
                    e = n;
                    const s = !(!t.trcResponse || !t.trcResponse.vtag) && t.trcResponse.vtag,
                        c = !!s.advancedVideoConfiguration && s.advancedVideoConfiguration;
                    if (!s || !a(s.unitType, c)) return !1;
                    if (c) {
                        const e = c["mid-article-hip-rbox-percent-inview-to-report"],
                            t = c["mid-article-hip-min-percent-to-display"];
                        r = e ? Number(e) : r, i = t ? Number(t) : r
                    }
                    l(t.id, o), o.classList.add("tbl-invisible"), TRC.listen("noAdjacInFirstWF", e => {
                        t.trcResponse.scac && (TRC.trcHipCloseUnit = TRC.trcHipCloseUnit ? TRC.trcHipCloseUnit : {}, TRC.trcHipCloseUnit[e.data] = !0), TRCImpl.sendAbTestEvent("HipLostNoAdjacInFirstWF", "HipLost"), h(e.data)
                    })
                },
                a = (e, t) => (!t || "true" !== t["mid-article-hip-opt-out"]) && -1 !== n.indexOf(e.toString()),
                l = (e, t) => {
                    c(e, t), d(e, t)
                },
                c = (e, i) => {
                    const o = [];
                    for (let t = 10 * r; t <= 10; t++) {
                        const e = t / 100;
                        o.push(e)
                    }
                    const n = {
                        targetElement: i,
                        threshold: o,
                        onEnter: u.trcBind(void 0, e)
                    };
                    t = TRC.intersections.observe(n)
                },
                d = (e, t) => {
                    const r = {
                            targetElement: t,
                            threshold: [i],
                            onEnter: p.trcBind(void 0, e),
                            disableDuplicatePrevention: !0
                        },
                        o = TRC.intersections.observe(r);
                    TRC.listen("adjacAdPlaying", g.trcBind(void 0, o)), TRC.listen("rBoxVisible", g.trcBind(void 0, o))
                },
                h = t => {
                    const {
                        container: r
                    } = e[t];
                    r.classList.remove("tbl-invisible"), TRC.dispatch("rBoxVisible", t), TRC.trcHipContainersShowing = TRC.trcHipContainersShowing ? TRC.trcHipContainersShowing : {}, TRC.trcHipContainersShowing[t] = !0
                },
                p = (e, t) => {
                    TRCImpl.sendAbTestEvent("HipLostRboxInViewPort", Math.floor(100 * t.intersectionRatio)), h(e)
                },
                u = (e, i) => {
                    i.intersectionRatio > r && !o ? (o = !0, TRCImpl.sendAbTestEvent("rboxViewPortIntersection", Math.floor(100 * i.intersectionRatio))) : i.intersectionRatio < r && o && (TRCImpl.sendAbTestEvent("rboxOutOfViewPort", Math.floor(100 * i.intersectionRatio)), g(t))
                },
                g = e => {
                    TRC.intersections.unobserve(e)
                };
            TRC.HighImpactPlacement = {
                handleHighImpactPlacement: s
            }, window._trcIsUTactive && (TRC.HighImpactPlacement.reportRboxInViewPort = u, TRC.HighImpactPlacement.checkIfHIP = a), TRC.listen("beforeBoxRender", s)
        })(),
        function() {
            var e = "trc_vp_els",
                t = 5;

            function r(e) {
                this.trcManager = e, this.sessionStorage = TRC.pageManager.getLocalStorageImplementation("strict-w3c-storage", "session"), this.lastViewportElementData = this.getVPElementsHistory()[e.getItemId()], e.trcCache.enableCacheViaStorageFlag()
            }
            r.prototype.trackElement = function(e) {
                TRC.dom.on(e, "click", this.storeElementPosition.trcBind(this, e))
            }, r.prototype.scrollToElementIfWasLastInViewPort = function(e) {
                var t, r = this.trcManager;
                this.lastViewportElementData && e.id === this.lastViewportElementData.id && (delete(t = this.getVPElementsHistory())[this.trcManager.getItemId()], this.storeVPElementsHistory(t), "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), setTimeout(function() {
                    e.scrollIntoView(!1);
                    var t = {
                        abTestsEventType: "simple",
                        name: "backToFeed_backToCard",
                        type: __trcJSONify({
                            origViewId: e.placementData.cachedViewId,
                            viewId: TRC.pageManager.getPageData(),
                            placement: e.getAttribute("data-placement-name"),
                            cardIndex: e.getAttribute("data-card-index")
                        }),
                        eventTime: (new Date).getTime()
                    };
                    r.sendEvent("abtests", {
                        "unescape-d": encodeURIComponent(__trcJSONify(t))
                    }, null, !1, null, null)
                }, 0))
            }, r.prototype.storeElementPosition = function(e) {
                var t = this.getVPElementsHistory();
                t[this.trcManager.getItemId()] = {
                    id: e.id,
                    s: (new Date).getTime()
                };
                var r = {
                    abTestsEventType: "simple",
                    name: "backToFeed_exitFromCard",
                    type: __trcJSONify({
                        viewId: TRC.pageManager.getPageData(),
                        placement: e.getAttribute("data-placement-name"),
                        cardIndex: e.getAttribute("data-card-index")
                    }),
                    eventTime: (new Date).getTime()
                };
                this.trcManager.sendEvent("abtests", {
                    "unescape-d": encodeURIComponent(__trcJSONify(r))
                }, null, !1, null, null), this.storeVPElementsHistory(t)
            }, r.prototype.storeVPElementsHistory = function(t) {
                t = this.removeEntriesToLimit(t), this.sessionStorage.setValue(e, __trcJSONify(t))
            }, r.prototype.getVPElementsHistory = function() {
                var t = this.sessionStorage.getValue(e) || "{}";
                return TRC.util.jsonParseWithNative(t)
            }, r.prototype.removeEntriesToLimit = function(e) {
                var r = {},
                    i;
                if (TRC.util.keys(e).length <= t) return e;
                for (var o in e) e.hasOwnProperty(o) && (r[e[o].s] = o);
                for ((i = TRC.util.keys(r)).sort(); i.length > t;) i.shift();
                for (var n in r) r.hasOwnProperty(n) && -1 === i.indexOf(n) && delete e[r[n]];
                return e
            }, TRC.HistoryManager = r
        }(), (({
            history: e
        }) => {
            function t() {
                e.back()
            }

            function r() {
                e.forward()
            }

            function i() {
                return e.state
            }

            function o(t) {
                e.pushState(t, document.title)
            }

            function n(t) {
                e.replaceState(t, document.title)
            }

            function s(t) {
                let r = i();
                null == r && (r = {}), Object.assign(r, t), e.replaceState(r, document.title)
            }

            function a() {
                return "complete" !== window.document.readyState
            }

            function l(e, t, r) {
                const o = TRC.Interval.set(() => {
                    a() || TRC.Interval.clear(o), i() && t(i()) && (e(), TRC.Interval.clear(o))
                }, r)
            }

            function c(e, t) {
                const r = Object.assign({
                    stateCheck: null,
                    stateCheckIntervalTime: 200
                }, t || {});
                TRC.dom.on(window, "popstate", e), a() && r.stateCheck && l(e, r.stateCheck, r.stateCheckIntervalTime)
            }
            TRC.historyApi = {
                pushState: o,
                replaceState: n,
                appendState: s,
                back: t,
                forward: r,
                currentState: i,
                onPopState: c
            }
        })(window), (() => {
            const e = "https://images.taboola.com/taboola/image/fetch";
            TRC.imageUtils = {
                getImageUrlBasedOnCloudinaryApi(t, r, i = e) {
                    const o = this.cloudinaryEncoding(t);
                    return [i, r, o].join("/")
                },
                cloudinaryEncoding(e) {
                    if (null === e || void 0 === e) return "";
                    let t = void 0,
                        r = void 0,
                        i = "",
                        o = 0;
                    const n = `${e}`,
                        s = n.length;
                    for (t = r = 0; o < s;) {
                        const e = n.charCodeAt(o);
                        let s = null;
                        e < 128 ? r++ : s = e > 127 && e < 2048 ? String.fromCharCode(e >> 6 | 192, 63 & e | 128) : String.fromCharCode(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128), null !== s && (r > t && (i += n.slice(t, r)), i += s, t = r = o + 1), o++
                    }
                    return r > t && (i += n.slice(t, s)), escape(i)
                }
            }
        })(),
        /** @license
         * Copyright 2016 Google Inc. All Rights Reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *     http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function(e, t) {
            if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
            else {
                var r = [];
                o.prototype.THROTTLE_TIMEOUT = 1e3, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(e) {
                    if (!this._observationTargets.some(function(t) {
                            return t.element == e
                        })) {
                        if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: e,
                            entry: null
                        }), this._monitorIntersections()
                    }
                }, o.prototype.unobserve = function(e) {
                    this._observationTargets = this._observationTargets.filter(function(t) {
                        return t.element != e
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, o.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, o.prototype.takeRecords = function() {
                    var e = this._queuedEntries.slice();
                    return this._queuedEntries = [], e
                }, o.prototype._initThresholds = function(e) {
                    var t = e || [0];
                    return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, r) {
                        if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return e !== r[t - 1]
                    })
                }, o.prototype._parseRootMargin = function(e) {
                    var t, r = (e || "0px").split(/\s+/).map(function(e) {
                        var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                        if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(t[1]),
                            unit: t[2]
                        }
                    });
                    return r[1] = r[1] || r[0], r[2] = r[2] || r[0], r[3] = r[3] || r[1], r
                }, o.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, o.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, l(e, "resize", this._checkForIntersections, !0), l(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, o.prototype._checkForIntersections = function() {
                    var e = this._rootIsInDom(),
                        t = e ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach(function(r) {
                        var o = r.element,
                            s = d(o),
                            a = this._rootContainsTarget(o),
                            l = r.entry,
                            c = e && a && this._computeTargetAndRootIntersection(o, t),
                            h = r.entry = new i({
                                time: n(),
                                target: o,
                                boundingClientRect: s,
                                rootBounds: t,
                                intersectionRect: c
                            });
                        l ? e && a ? this._hasCrossedThreshold(l, h) && this._queuedEntries.push(h) : l && l.isIntersecting && this._queuedEntries.push(h) : this._queuedEntries.push(h)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, o.prototype._computeTargetAndRootIntersection = function(r, i) {
                    var o = e.getComputedStyle(r);
                    if (o && "none" !== o.display) {
                        for (var n, s = d(r), a = u(r), l = !1; !l;) {
                            var h = null,
                                p = 1 == a.nodeType ? e.getComputedStyle(a) : {};
                            if (!p || "none" === p.display) return;
                            if (a == this.root || a == t ? (l = !0, h = i) : a != t.body && a != t.documentElement && "visible" != p.overflow && (h = d(a)), h && !(s = c(h, s))) break;
                            a = u(a)
                        }
                        return s
                    }
                }, o.prototype._getRootRect = function() {
                    var e;
                    if (this.root) e = d(this.root);
                    else {
                        var r = t.documentElement,
                            i = t.body;
                        e = {
                            top: 0,
                            left: 0,
                            right: r.clientWidth || i.clientWidth,
                            width: r.clientWidth || i.clientWidth,
                            bottom: r.clientHeight || i.clientHeight,
                            height: r.clientHeight || i.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(e)
                }, o.prototype._expandRectByRootMargin = function(e) {
                    var t = this._rootMarginValues.map(function(t, r) {
                            return "px" == t.unit ? t.value : t.value * (r % 2 ? e.width : e.height) / 100
                        }),
                        r = {
                            top: e.top - t[0],
                            right: e.right + t[1],
                            bottom: e.bottom + t[2],
                            left: e.left - t[3]
                        };
                    return r.width = r.right - r.left, r.height = r.bottom - r.top, r
                }, o.prototype._hasCrossedThreshold = function(e, t) {
                    var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                        i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                    if (r !== i)
                        for (var o = 0; o < this.thresholds.length; o++) {
                            var n = this.thresholds[o];
                            if (n == r || n == i || n < r != n < i) return !0
                        }
                }, o.prototype._rootIsInDom = function() {
                    return !this.root || p(t, this.root)
                }, o.prototype._rootContainsTarget = function(e) {
                    return p(this.root || t, e)
                }, o.prototype._registerInstance = function() {
                    r.indexOf(this) < 0 && r.push(this)
                }, o.prototype._unregisterInstance = function() {
                    var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
                }, TRC.IntersectionObserver = o, TRC.IntersectionObserverEntry = i
            }

            function i(e) {
                this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!e.intersectionRect;
                var t = this.boundingClientRect,
                    r = t.width * t.height,
                    i = this.intersectionRect,
                    o = i.width * i.height;
                this.intersectionRatio = r ? o / r : this.isIntersecting ? 1 : 0
            }

            function o(e, t) {
                var r = t || {};
                if ("function" != typeof e) throw new Error("callback must be a function");
                if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = s(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
                    return e.value + e.unit
                }).join(" ")
            }

            function n() {
                return e.performance && performance.now && performance.now()
            }

            function s(e, t) {
                var r = null;
                return function() {
                    r || (r = setTimeout(function() {
                        e(), r = null
                    }, t))
                }
            }

            function a(e, t, r, i) {
                "function" == typeof e.addEventListener ? e.addEventListener(t, r, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
            }

            function l(e, t, r, i) {
                "function" == typeof e.removeEventListener ? e.removeEventListener(t, r, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
            }

            function c(e, t) {
                var r = Math.max(e.top, t.top),
                    i = Math.min(e.bottom, t.bottom),
                    o = Math.max(e.left, t.left),
                    n = Math.min(e.right, t.right),
                    s = n - o,
                    a = i - r;
                return s >= 0 && a >= 0 && {
                    top: r,
                    bottom: i,
                    left: o,
                    right: n,
                    width: s,
                    height: a
                }
            }

            function d(e) {
                var t;
                try {
                    t = e.getBoundingClientRect()
                } catch (e) {}
                return t ? (t.width && t.height || (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }), t) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function h() {
                return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function p(e, t) {
                for (var r = t; r;) {
                    if (r == e) return !0;
                    r = u(r)
                }
                return !1
            }

            function u(e) {
                var t = e.parentNode;
                return t && 11 == t.nodeType && t.host ? t.host : t
            }
        }(window, document), TRC.intersections = function(e, t) {
            var r = 0,
                i = {},
                o = {},
                n = "observeId";

            function s() {}

            function a(e, t) {
                if (TRC.util.isArray(e.threshold))
                    for (var r = 0; r < e.threshold.length; r++) {
                        var i = e.threshold[r]; - 1 === t.indexOf(i) && t.push(e.threshold)
                    } else -1 === t.indexOf(e.threshold) && t.push(e.threshold)
            }

            function l(e, r, i, o, n) {
                var s, a;
                return e.disableCheckOverlay || r !== TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE || (s = t.elementFromPoint(o - 1, n - 1) || t.elementFromPoint(o + 1, n + 1), isNaN(e.exactVisibleThresholdFromTop) || (a = t.elementFromPoint(o, i.boundingClientRect.top + e.exactVisibleThresholdFromTop)), c(s, i.target) || c(a, i.target) || (r = TRC.intersections.visibilityState.IN_VIEW_PORT_NOT_VISIBLE, i.intersectionRatio >= 1 && null !== s && TRC.intersections.observePolling(e))), r
            }

            function c(e, t) {
                return e && (e === t || t.contains(e) || "getAttribute" in e && e.getAttribute("data-tbl-friendly-overlay"))
            }

            function d(e, t, r, i) {
                return r.height >= i || e <= r.right && t <= r.bottom && t > 0
            }

            function h(e) {
                var t, r;
                return c(p(e), e)
            }

            function p(e) {
                var r, i = u(e.getBoundingClientRect()),
                    o = i.targetElementCenterX,
                    n = i.targetElementCenterY;
                return t.elementFromPoint(o, n)
            }

            function u(e) {
                return g(e, ["mm"]).mm
            }

            function g(e, t) {
                var r = {};
                return t.forEach(function(t) {
                    r[t] = i(e, t)
                }), r;

                function i(e, t) {
                    switch (t) {
                        case "lt":
                            return o(e, 0, 0);
                        case "mt":
                            return o(e, .5, 0);
                        case "rt":
                            return o(e, 1, 0);
                        case "lm":
                            return o(e, 0, .5);
                        case "mm":
                            return o(e, .5, .5);
                        case "rm":
                            return o(e, 1, .5);
                        case "lb":
                            return o(e, 0, 1);
                        case "mb":
                            return o(e, .5, 1);
                        case "rb":
                            return o(e, 1, 1);
                        default:
                            __trcWarn("intersections.getPointInElementByPosition - pos parameter not recognized. pos is: " + t)
                    }
                }

                function o(e, t, r) {
                    return {
                        targetElementCenterX: e.left + Math.round((e.right - e.left) * t),
                        targetElementCenterY: e.top + Math.round((e.bottom - e.top) * r)
                    }
                }
            }

            function m(e, t) {
                t === TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE && TRC.intersections.unObservePolling(e)
            }

            function b(e, t, r) {
                t.onTrigger(e, t.observer, r, t.lastBoundingClientRect), m(r, t)
            }

            function f(e) {
                TRC.Timeout.clear(e.visibleTimeout), delete e.visibleTimeout
            }

            function v(e, t, r) {
                t.isEnter && e.isVisible && ("function" != typeof t.visibleWidgetPredicate || t.visibleWidgetPredicate()) && (delete e.isVisible, e.visibilityReported = !0, b(e, t, r))
            }

            function C(e, t, r) {
                f(e), e.visibilityReported || v(e, t, r)
            }

            function y(e, t, r) {
                var i = TRCImpl && TRCImpl.global["visibility-intersection-api-delay"] || 1e3,
                    o = r === TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE && !e.visibleTimeout || TRC.intersections.forceEnableDelayedVisibilityState();
                t.enableDelayedVisibilityCheck ? o && (e.isVisible = !0, e.lastVisibleBoundingClientRect = t.lastBoundingClientRect, e.lastVisibleBoundingClientRect.pageXOffset = t.geometryOffsets.pageXOffset, e.lastVisibleBoundingClientRect.pageYOffset = t.geometryOffsets.pageYOffset, e.visibleTimeout = TRC.Timeout.set(C.trcBind(this, e, t, r), i)) : b(e, t, r)
            }

            function T(e, t, r) {
                var i = t.target,
                    o, n, s, a, c;
                e.isEnter = t.isIntersecting, e.isExit = !e.isEnter, e.intersection = t.intersectionRatio, e.isEnter ? e.onEnter(t, i, e.observer) : e.isExit && (i.visibleTimeout && f(i), i.isVisible = !1, e.onExit(t, i, e.observer), TRC.intersections.unObservePolling(e));
                var h = u(o = t.boundingClientRect);
                return s = h.targetElementCenterX, a = h.targetElementCenterY, n = TRCImpl && TRCImpl.global["visibility-threshold-override"] || 0, c = l(e, c = t.isIntersecting && t.intersectionRatio >= n && d(s, a, t.intersectionRect, e.exactVisibleThresholdFromTop) ? TRC.intersections.visibilityState.IN_VIEW_PORT_VISIBLE : t.isIntersecting ? TRC.intersections.visibilityState.IN_VIEW_PORT_NOT_VISIBLE : TRC.intersections.visibilityState.NOT_IN_VIEW_PORT, t, s, a), r.disableDuplicatePrevention ? y(i, e, c) : e.lastEventId && e.lastEventId === c || (y(i, e, c), e.lastEventId = c), c
            }
            var R = {
                getPointsOnElement: g,
                TARGET_ATTRIB: n,
                visibilityState: {
                    IN_VIEW_PORT_VISIBLE: 1,
                    IN_VIEW_PORT_NOT_VISIBLE: 2,
                    NOT_IN_VIEW_PORT: 3
                },
                observe: function(e) {
                    var t, l, c, d = e.disableCheckOverlay ? [0, .5] : [0, .25, .5, .75, 1];

                    function h(t) {
                        for (var r, o = 0; o < t.length; o++) {
                            var s = t[o];
                            r = s.target.getAttribute(n).split(" ");
                            for (var a = 0; a < r.length; a++) {
                                var l = r[a],
                                    c = i[l];
                                c.lastBoundingClientRect = s.boundingClientRect, c.geometryOffsets = {
                                    pageXOffset: window.pageXOffset,
                                    pageYOffset: window.pageYOffset
                                }, c && c.observer.tblObserverKey === this.tblObserverKey && T(c, s, e)
                            }
                        }
                    }
                    if (e.targetElement && null !== e.threshold && (e.onEnter || e.onExit || e.onTrigger)) {
                        t = e.targetElement, l = "tbl-observe-" + r, c = t.getAttribute(n) ? t.getAttribute(n) + " " + l : l, t.setAttribute(n, c), r++, a(e, d), i[l] = {
                            targetSelector: l,
                            targetElement: t,
                            isEnter: null,
                            isExit: null,
                            intersection: null,
                            disableCheckOverlay: e.disableCheckOverlay,
                            disableDuplicatePrevention: e.disableDuplicatePrevention,
                            enableDelayedVisibilityCheck: e.enableDelayedVisibilityCheck,
                            visibleWidgetPredicate: e.visibleWidgetPredicate,
                            exactVisibleThresholdFromTop: e.exactVisibleThresholdFromTop,
                            threshold: e.threshold,
                            onExit: e.onExit || s,
                            onEnter: e.onEnter || s,
                            onTrigger: e.onTrigger || s,
                            boundingClientRect: null
                        };
                        var p = {
                                root: e.rootSelector || null,
                                rootMargin: e.rootMargin || "0px",
                                threshold: e.threshold
                            },
                            u = TRC.util.hashString(JSON.stringify(p)),
                            g;
                        return o[u] ? g = o[u] : (p.root = p.root && document.querySelector(p.root), g = TRC.IntersectionObserver ? new TRC.IntersectionObserver(h.trcBind(p), p) : new IntersectionObserver(h.trcBind(p), p), "MutationObserver" in window || (g.POLL_INTERVAL = TRCImpl.global["intersections-polyfill-poll-interval"] || 500), p.tblObserverKey = g.tblObserverKey = u, o[u] = g), i[l].observer = g, g.observe(t), l
                    }
                    __trcDebug("missing params for intersectionHandler")
                },
                isInViewPort: function(e) {
                    var t = TRCImpl.global["visibility-threshold"] || e.disableCheckOverlay ? [0, .5] : [0, .25, .5, .75, 1],
                        r = {
                            rootSelector: e.rootSelector || null,
                            targetElement: e.targetElement,
                            threshold: t,
                            rootMargin: "0px",
                            disableCheckOverlay: e.disableCheckOverlay,
                            disableDuplicatePrevention: e.disableDuplicatePrevention,
                            enableDelayedVisibilityCheck: e.enableDelayedVisibilityCheck,
                            visibleWidgetPredicate: e.visibleWidgetPredicate,
                            exactVisibleThresholdFromTop: e.exactVisibleThresholdFromTop,
                            onTrigger: e.onTrigger,
                            onEnter: e.onEnter
                        };
                    return this.observe(r)
                },
                unobserve: function(e) {
                    var t = i[e],
                        r, o;
                    if (t) return o = (r = (t = i[e].targetElement).getAttribute(n).split(" ")).indexOf(e), 1 === r.length && (i[e].observer.unobserve(t), t.removeAttribute(n)), o > -1 && r.length > 1 && (r.splice(o, 1), t.setAttribute(n, r.join(" "))), delete i[e];
                    __trcLog("missing target element for unobserve")
                },
                unobserveAll: function(e) {
                    for (var t = e.split(" "), r = 0; r < t.length; r++) this.unobserve(t[r])
                },
                getIntersectionState: function() {
                    return i
                },
                observePolling: function(e) {
                    var t = 500;
                    this.observedElementsInPolling[e.targetSelector] || (this.observedElementsInPolling[e.targetSelector] = {
                        target: e.targetElement,
                        state: e
                    }, e.underPolling = !0, this.observedElementsInPollingCounter++), this.observedElementsInPollingCounter > 0 && this.startPolling(t)
                },
                unObservePolling: function(e) {
                    this.observedElementsInPolling[e.targetSelector] && (delete this.observedElementsInPolling[e.targetSelector], this.observedElementsInPollingCounter--, e.underPolling = !1), 0 === this.observedElementsInPollingCounter && this.stopPolling()
                },
                stopPolling: function() {
                    clearInterval(this.pollingInterval), this.pollingInterval = null
                },
                startPolling: function(e) {
                    this.pollingInterval || (this.pollingInterval = setInterval(function() {
                        var e, t = !1,
                            r, i, o = R.observedElementsInPolling;
                        for (var n in o)
                            if (o.hasOwnProperty(n) && (t = h((e = o[n]).target))) {
                                r = e.target.getAttribute(R.TARGET_ATTRIB).split(" "), i = R.getIntersectionState();
                                for (var s = 0; s < r.length; s++) {
                                    var a = r[s];
                                    y(e.target, i[a], R.visibilityState.IN_VIEW_PORT_VISIBLE)
                                }
                                R.unObservePolling(e.state)
                            }
                    }, e))
                },
                observedElementsInPolling: {},
                observedElementsInPollingCounter: 0,
                forceEnableDelayedVisibilityState: function() {
                    return !1
                }
            };
            return R
        }(window, document), (() => {
            const e = "tbl_creative_preview",
                t = "tbl_should_override_all_slots",
                r = "tbl_should_repeat_override_items",
                i = "additional-properties",
                o = {
                    sentUsageLog: !1,
                    overriddenPlacements: {}
                },
                n = !1,
                s = !0,
                a = {
                    autoTriggerConfig: {
                        hover: "true",
                        viewabilityConfig: {
                            percentage: "5",
                            time: "0"
                        }
                    },
                    repeat: "true",
                    scriptUrlTemplate: "//15.taboola.com/tbp?oid=15&pubid=166277&tagid=948107&pstn=[pstn]&cb=[cb]&callback={CALLBACK_NAME}",
                    unitBootSrc: "//vidstat.taboola.com/vpaid/units/{version}/creatives/creative_js.js"
                },
                l = "tbl_pvideo_version",
                c = "27_6_17",
                d = (e, t) => {
                    if (o.isEnabled(e)) {
                        const e = o.getNewItemFromUrl();
                        u(e);
                        const [r] = e, i = t && t.trc && t.trc.vl || [];
                        e && r && i.length && (T(e, t), o.handleOverrideItems(i, e))
                    }
                };
            o.handleOverrideItems = ((e, r) => {
                let i;
                i = o.getValueFromUrl(t, n) ? f(e, r) : b(e, r[0].itemType), o.overrideItems(i, r)
            });
            const h = e => {
                    const t = e[i];
                    if (t) try {
                        return __trcUnJSONify(t)
                    } catch (t) {
                        return __trcDebug(`invalid json in ${e[i]}`), {}
                    }
                    return {}
                },
                p = (e, t) => {
                    const r = h(e);
                    r && Object.keys(r).forEach(e => {
                        t[e] = r[e]
                    })
                };
            o.overrideItems = ((e, t) => {
                e.length > 0 && t && e.forEach((r, i) => {
                    const n = i % t.length;
                    o.overrideItem(e[i], t[n])
                })
            }), o.overrideItem = ((e, t) => {
                e.thumbnail = t.thumbnail || "", e.title = t.title || "", e.description = t.description || "", e["branding-text"] = t["branding-text"] || "", e.uploader = t.uploader || "", p(t, e), e.url = "#"
            });
            const u = e => {
                if (!o.sentUsageLog) {
                    const t = e ? e.map(e => e && e.creativeId || null) : null;
                    TRC.RBoxUsage.logUsage("TRC.ItemOverride", {
                        extraData: {
                            creativeIds: t,
                            url: window.location.href
                        }
                    }), o.sentUsageLog = !0
                }
            };
            o.isEnabled = (e => e && o.isItemOverrideUrlParam()), o.isItemOverrideUrlParam = (() => location.search.indexOf(e) >= 0);
            const g = (e, t) => !!e[t] || !(e["is-syndicated"] || e["is-in-network"] || e["is-native"]) && "is-organic" === t,
                m = (e, t) => {
                    if (!t) return e[0];
                    for (let r = 0; r < e.length; r++)
                        if (g(e[r], t)) return e[r]
                },
                b = (e, t) => {
                    const {
                        overriddenPlacements: r = {}
                    } = o, i = [];
                    let n, s;
                    return e.forEach(e => {
                        s = e.uuip || e.uip;
                        const {
                            v: o
                        } = e;
                        o && s && !r[s] && (n = m(o, t)) && (i.push(n), r[s] = !0)
                    }), i
                },
                f = (e, t) => {
                    const i = o.getValueFromUrl(r, s),
                        n = [];
                    return i || v(e, t), e.forEach(e => {
                        e.v && e.v.forEach(e => {
                            n.push(e)
                        })
                    }), n
                },
                v = (e, t) => {
                    let r = t.length;
                    for (let i = 0; i < e.length; i++) {
                        const t = e[i].v;
                        t && (t.length >= r ? C(e, i + 1, r) : (r -= t.length, i === e.length - 1 && r > 0 && y(t, r)))
                    }
                },
                C = (e, t, r) => {
                    e.splice(t), e[t - 1].v.splice(r)
                },
                y = (e, t) => {
                    for (let r = 0; r < t; r++) e.push(Object.assign({}, e[0]))
                };
            o.getValueFromUrl = ((e, t) => {
                try {
                    const r = TRC.URL.prototype.getParameter.call(window.location.search, e, decodeURIComponent);
                    let i = __trcUnJSONify(r);
                    return (void 0 === i || null === i && t) && (i = t), i
                } catch (t) {
                    return __trcDebug(`invalid data in url param ${e}`), null
                }
            }), o.getNewItemFromUrl = (() => {
                let t = o.getValueFromUrl(e);
                return Array.isArray(t) || (t = [t]), t
            }), TRC.ItemOverride = {
                run: d
            }, window._trcIsUTactive && (TRC.ItemOverride.privateProps = o);
            const T = (e, t) => {
                const r = o.getValueFromUrl(l, c);
                a.unitBootSrc = a.unitBootSrc.replace("{version}", r);
                for (let i = 0; i < e.length; i++)
                    if (e[i] && e[i]["additional-properties"] && e[i]["additional-properties"]["pvideo-url"]) {
                        for (let e = 0; e < t.trc.vl.length; e++) t.trc.vl[e].pvc = a;
                        return
                    }
            }
        })(),
        function() {
            function e(e) {
                this._data = e
            }
            e.prototype.getId = function() {
                return this._data.id
            }, e.prototype.getLinkTarget = function() {
                return this._data.linkTarget
            }, e.prototype.getUrl = function() {
                return this._data.url
            }, e.prototype.getTitle = function() {
                return this._data.title
            }, e.prototype.getType = function() {
                var e = this._data;
                return e["is-syndicated"] ? "sponsored" : e["is-in-network"] ? "exchange" : e["is-native"] ? "native" : "organic"
            }, e.prototype.getSlot = function() {
                return this._data.itemIndex
            }, TRC.ItemParser = e
        }(), (() => {
            class e {
                constructor(e, t = !1) {
                    if (this.onlyClean = t, this.pm = TRC.pageManager, this.storageType = e.storageType || "session", this.localStorage = this.pm.getLocalStorageImplementation("strict-w3c-storage", this.storageType), this.keyValueCache = null, this.cacheTtl = e.ttl || 1e3 * 60 * 20, this.noTtl = e.noTtl || !1, this.cacheName = e.cacheName || "key_value_cache", this.cacheUtils = new TRC.CacheUtils(this.localStorage, this.cacheName, this.cacheTtl), !localStorage) return {
                        isValidCache: !1
                    };
                    this.isValidCache = !0, this.init()
                }
                cacheData(e, t) {
                    const r = this.setCacheData(e, t);
                    return this.localStorage.setValue(this.cacheName, __trcJSONify(this.keyValueCache.getData())), r
                }
                setCacheData(e, t) {
                    const r = (new Date).getTime();
                    try {
                        this.keyValueCache.setValue(e, {
                            value: t,
                            s: r
                        }), !1 === this.noTtl && this.setCacheClean(e)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }
                getCacheData(e) {
                    const t = this.keyValueCache.getValue(e);
                    return !0 === this.noTtl && t || t && !this.isOverTtl(this.keyValueCache.getValue(e).s) ? this.keyValueCache.getValue(e).value : null
                }
                isOverTtl(e) {
                    return this.cacheUtils.isOverTtl(e)
                }
                setCacheClean(e) {
                    this.cacheUtils.setCacheClean(e, this.keyValueCache)
                }
                cleanCache(e) {
                    this.cacheUtils.cleanCache(e, this.keyValueCache, this)
                }
                removeKey(e) {
                    TRC.CacheUtils.removeKey(e, this.keyValueCache)
                }
                getKeyValueCache() {
                    return this.cacheUtils.getCache(this.pm)
                }
                init() {
                    if (this.onlyClean) return this.localStorage.removeKey(this.cacheName), !1;
                    this.keyValueCache = this.getKeyValueCache();
                    const e = TRC.util.keys(this.keyValueCache.getData());
                    return this.cleanCache(e), !0
                }
            }
            TRC.KeyValueCache = e
        })(window, document), (() => {
            let e = !1,
                t = [];
            const r = TRC.LineClamp = {
                fixBoxOverflow(e, t, i, o, n, s, a, l) {
                    let c = !1;
                    if (null == e) return;
                    if (a && (c = r.setupBoxLineClamp(e))) return;
                    if (l && !c) return __trcDebug("Skipping fixBoxOverflow due to feature flag.");
                    if (TRC.ellipsisPerf && console.timeStamp("Taboola old ellipsis"), e.clientHeight <= 0 || e.clientWidth <= 0) return;
                    let d = !1;
                    e.parentNode.font = r.getFontSize(e);
                    const h = e.innerHTML;
                    e.innerText = "";
                    const p = r.add_span(null, "H", e),
                        u = Math.max(p.offsetHeight, p.clientHeight),
                        g = Math.max(0, e.scrollHeight - e.clientHeight);
                    for (e.removeChild(p), TRC.dom.setContentToElement(e, h), r.addInlineElementsForMeasure(e.inlineDetailsElements, e, !0), e.inlineDetailsElementsHTML = e.innerHTML.replace(h, ""), t = t.replace(/^\s+|\s+$/g, ""); e.clientHeight + g + u / 2 < e.scrollHeight && t.length;) d = !0, t = r.truncateOverflowingText(e, t, i), e.inlineDetailsElementsHTML && (e.innerHTML += e.inlineDetailsElementsHTML);
                    r.hideClonedElementsAfterMeasure(n, s), TRC.Browser.ie && !d && (e.style.height = "auto")
                },
                setupBoxLineClamp(i) {
                    const o = parseInt(document.trcGetCurrentStyle(i, "line-height"), 10),
                        n = parseInt(document.trcGetCurrentStyle(i, "height"), 10),
                        s = o && n ? Math.round(n / o).toString() : null;
                    return !(!s || i.isRTL || "rtl" === document.trcGetCurrentStyle(i, "direction")) && (t.push({
                        domElm: i,
                        numLine: s
                    }), window._trcIsUTactive && (TRC._lineClampCache = t), !!e || (requestAnimationFrame(() => {
                        t.forEach(e => {
                            const t = e && e.domElm,
                                i = e && e.numLine;
                            TRC.dom.addClass(t, "trc_ellipsis"), TRC.css.utils.setStyleProperty(t, "-webkit-line-clamp", i, !1), t.parentNode.font = r.getFontSize(t)
                        }), e = !1, t = []
                    }), e = !0, !0))
                },
                getFontSize(e) {
                    let t = 0,
                        r = !1,
                        i = document.trcGetCurrentStyle(e, "font-size");
                    const o = ["px", "pt", "em", "ch"];
                    for (; !r && t < o.length;) {
                        if (i.indexOf(o[t])) {
                            switch (i = parseInt(i, 10), o[t]) {
                                case "px":
                                    break;
                                case "pt":
                                    i /= .75;
                                    break;
                                case "em":
                                case "ch":
                                    i *= 10
                            }
                            r = !0
                        }
                        t++
                    }
                    return i
                },
                add_span(e, t, r) {
                    const i = document.createElement("span");
                    return null != e && (i.className = e), null != t && ("object" == typeof t ? i.appendChild(t) : TRC.dom.setContentToElement(i, t)), void 0 !== r && r.appendChild(i), i
                },
                addInlineElementsForMeasure(e, t, i) {
                    let o, n, s;
                    for (let a = 0; e && a < e.length; a++) o = e[a], !(n = r.findElement(e => {
                        const r = e.className.search(o) >= 0 && e.parentNode === t;
                        return r
                    }, t)) && o && ((s = document.createElement("span")).className = "trc_inline_detail_spacer", s.innerHTML = " ", t.appendChild(s), t.appendChild(i ? o.cloneNode(!0) : o))
                },
                findElement(e, t, r, i) {
                    void 0 === t && (t = document), void 0 === r && (r = "*");
                    const o = t.getElementsByTagName(r);
                    for (let n = 0; n < o.length; n++)
                        if (e(o[n])) return o[n];
                    return i
                },
                truncateOverflowingText(e, t, i) {
                    t = i && t.search(/\s/) >= 0 ? t.replace(/\s+\S+$/, "") : t.substr(0, t.length - 1);
                    const o = e.getElementsByTagName("bde");
                    let n;
                    e.inlineDetailsElementsHTML && o.length && (n = e.innerHTML.replace(e.inlineDetailsElementsHTML, ""), TRC.dom.setContentToElement(e, n)), e.getElementsByTagName("span").length > 0 && e.removeChild(e.getElementsByTagName("span")[0]);
                    const s = o.length > 0 ? o[0] : e;
                    return TRC.dom.setContentToElement(s, t), r.add_span(null, r.createEllipsis(), e), t
                },
                hideClonedElementsAfterMeasure(e, t) {
                    let i, o;
                    for (let n = 0; e && n < e.length; n++) i = e[n], (o = r.findElement(e => {
                        const r = e.className.search(i) >= 0 && e.parentNode === t;
                        return r
                    }, t, "span")) && (o.style.display = "none")
                },
                createEllipsis: () => document.createTextNode("…")
            }
        })(),
        function(e, t) {
            var r = {
                    source: "|v|h|c|t|s|p|o|z|video|home|category|text|search|photo|other|content_hub",
                    target: "|v|p|t|m|video|photo|text|mix|"
                },
                i = "v",
                o = function(e, t) {
                    return e = e.toLowerCase(), -1 !== r[t].indexOf("|" + e + "|") ? "content_hub" === e ? "z" : e.substr(0, 1) : (__trcError('illegal parameter "' + e + '" was passed to trc_ListOriginBuilder method: "set' + t.substr(0, 1).toUpperCase() + t.substr(1) + '" \nUsing "video" instead'), "v")
                },
                n = TRC.ListOriginBuilder = function(e, t) {
                    this.setSource(e || i), this.setTarget(t || "v")
                };
            n.prototype.setSource = function(e) {
                i = o(e, "source")
            }, n.prototype.getSource = function() {
                return i
            }, n.prototype.setTarget = function(e) {
                this.target = o(e, "target")
            }, n.prototype.getTarget = function() {
                return this.target
            }, n.prototype.toString = function() {
                return (i + "2" + this.target).replace(/v2v/, "blended")
            }
        }(window, document), (() => {
            const e = {};
            class t {
                static metricIncrement(t) {
                    e[t] = e[t] || 0, e[t]++
                }
                static getMetricValue(t) {
                    return e[t] || 0
                }
                static isMetricsEnabled(e, t) {
                    return t.util.isPercentEnabled(e.global, "rbox-metrics-enabled") && e.global["bulk-metrics-events-strategy"] && e.global["rbox-post-events-as-ajax"]
                }
                static sendMetricsEvent(e, r, i, o) {
                    if (!t.isMetricsEnabled(r, e)) return;
                    const n = t.formatMetricsData(e, i);
                    r.sendEvent("metrics", n, null, !1, o, null, !1)
                }
                static formatMetricsData(e, t) {
                    return {
                        dimensions: JSON.stringify({
                            publisher: e.publisherId,
                            "integration-type": r(e)
                        }),
                        type: t.type,
                        metricName: t.name,
                        value: t.value
                    };

                    function r(e) {
                        return t(e) && "SDK" || r(e) && "AMP" || "normal";

                        function t(e) {
                            return !(!e.mobile || !e.mobile.reportClick)
                        }

                        function r(e) {
                            return e.isAMP
                        }
                    }
                }
            }
            window._trcIsUTactive && (t.setMetricValue = function(t, r) {
                e[t] = r
            }), TRC.MetricsManager = t
        })(), (() => {
            const e = "https://cdn.taboola.com/ui-ab-tests/stories/mixpanel/mixpanel_init.js";
            class t {
                static loadMixpanelScript(r, i) {
                    const o = TRC.Mixpanel;
                    o.mixpanelScriptLoaded || o.requested || (o.requested = !0, TRC.net && TRC.net.loadScript(e, "js", e => {
                        t.onMixpanelLoad(e, r, i)
                    }))
                }
                static onMixpanelLoad(e, t, r) {
                    "error" === e.type ? (__trcError("Failed to load mixpanel script"), TRC.Mixpanel.mixpanelScriptFailed = !0, TRC.dispatch("mixpanelScriptFailed"), r && r()) : (TRC.Mixpanel.mixpanelScriptLoaded = !0, TRC.dispatch("mixpanelScriptSucceeded"), t && t())
                }
                static sendMixpanelEvent(e, t = {}, r) {
                    if (!window.mixpanel) return void __trcWarn(`No Mixpanel instance - ${e}`);
                    const {
                        publisherId: i,
                        pageManager: o
                    } = TRC, {
                        sessionId: n,
                        formattedTRCRequest: s,
                        experimentsData: a
                    } = TRCImpl, l = r || {
                        pubId: i,
                        sessionId: n,
                        taboolaUserId: o && o.getUserId(),
                        pageViewId: o && o.getPageData(),
                        pageType: s && s.it,
                        experimentsData: a
                    }, c = TRC.util.merge({}, t, l);
                    window.mixpanel.identify(l.taboolaUserId), window.mixpanel.people.set({
                        "Taboola User ID": l.taboolaUserId
                    }), window.mixpanel.track(e, c)
                }
            }
            TRC.Mixpanel = t
        })(window), TRC.multiWidget = {
            init({
                originalContainer: e,
                multiWidget: t,
                widgetOptions: r,
                initRBox: i,
                trcManager: o
            }) {
                const n = e;
                this.trcManager = o;
                const s = "rtl" === this.trcManager.direction,
                    a = [t];
                return e.parentNode ? (r.multiWidgetRecItems = [].slice.call(r.response.trc["video-list"].video), !r.multiWidgetRecItems.length && this.trcManager.global["mw-display-none-on-no-items-to-render"] && (e.style.display = "none"), TRC.multiWidget.recursiveBuild.call(this, {
                    widgetsArr: a,
                    containerElm: n,
                    depth: 0,
                    parentLayout: a,
                    widgetOptions: r,
                    initRBox: i,
                    isRTL: s
                }), n.className += " trc_multi_widget", n) : null
            },
            recursiveBuild({
                widgetsArr: e,
                containerElm: t,
                depth: r,
                parentLayout: i,
                widgetOptions: o,
                initRBox: n,
                isRTL: s
            }) {
                i.isRTL = s, e.forEach(e => {
                    const a = __trcCopyProps(e, {});
                    if (a.children) {
                        if (!a.children.length) return;
                        const e = TRC.multiWidget.createWrapper(a);
                        t.appendChild(e), t = e, TRC.multiWidget.addMargin(t.previousSibling, i), TRC.multiWidget.recursiveBuild.call(this, {
                            widgetsArr: a.children,
                            depth: r + 1,
                            parentLayout: a,
                            containerElm: t,
                            widgetOptions: o,
                            initRBox: n,
                            isRTL: s
                        })
                    } else {
                        const e = TRC.multiWidget.createWidget.call(this, {
                            layout: a,
                            widgetOptions: o,
                            initRBox: n,
                            isRTL: s
                        });
                        t.appendChild(e), TRC.multiWidget.addMargin(e.previousSibling, i)
                    }
                    a.flexSize && (a.container.style.msFlex = a.container.style.flex = a.flexSize, a.container.style.overflow = "hidden")
                })
            },
            addMargin(e, {
                gap: t,
                orientation: r,
                isRTL: i
            }) {
                if (!e || !t) return;
                const o = i ? "Left" : "Right",
                    n = `margin${"V"===r?"Bottom":o}`;
                e.style[n] = t
            },
            createWrapper(e) {
                const t = document.createElement("div");
                return t.className += " trc_multi_widget_container", "V" === e.orientation && (t.style.msFlexDirection = t.style.flexDirection = "column"), e.container = t, t
            },
            createWidget({
                layout: e,
                widgetOptions: t,
                initRBox: r
            }) {
                e.container = document.createElement("div");
                const {
                    container: i,
                    name: o
                } = e;
                return this.ensureValidContainer(i), o && i.setAttribute("widget-name", o), t.mode_name = t.mode = t.response.trc["video-list"]["base-mode"] = e.name, t.multiWidgetModeLevelData = TRC.multiWidget.formatMultiWidgetPO(e), e.RBox = r.call(this, i, t), i
            },
            formatMultiWidgetPO(e) {
                if (e.po) {
                    const t = __trcCopyProps(e, {});
                    return t["properties-override"] = TRC.util.jsonParseCustomNative(`{${e.po}}`), t
                }
                return e
            }
        }, TRC.net = function(e, t) {
            var r = [],
                i;
            return {
                loadScript: function(e, r, i, o, n) {
                    var s = t.getElementsByTagName("script")[0],
                        a = null;
                    if ("js" == r)(a = t.createElement("script")).type = "text/javascript", a.src = TRC.shiftDomain(e), a.charset = "UTF-8", o ? a.setAttribute("defer", "defer") : n && a.setAttribute("async", "async");
                    else {
                        if ("css" != r) throw new Error("External reference loaded must be of type 'js' or 'css'!");
                        (a = t.createElement("link")).rel = "stylesheet", a.type = "text/css", a.href = e
                    }
                    return "function" == typeof i && (a.addEventListener("load", i, !1), a.addEventListener("error", i, !1)), s.parentNode.insertBefore(a, s), a
                },
                fireSimpleHttpRequest: function(e) {
                    var t = new Image;
                    t.src = e, r.push(t)
                },
                fireBeaconHttpRequest: function(t) {
                    e.navigator && navigator.sendBeacon && navigator.sendBeacon(t)
                }
            }
        }(window, document), (() => {
            const e = {
                    timeStamp: "tim=",
                    type: "type=",
                    message: "msg=",
                    debugLevel: "llvl=",
                    id: "id="
                },
                t = TRC.PROTOCOL,
                r = function(e) {
                    const t = [];
                    return Object.keys(e).forEach(r => {
                        t.push(`${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`)
                    }), t.join("&")
                };
            let i = 0;

            function o() {
                return TRC.util.isPercentEnabled(TRCImpl.global, "new-logging-mechanism-on")
            }

            function n(e, t) {
                t ? TRC.net.fireBeaconHttpRequest(e) : TRC.net.fireSimpleHttpRequest(e)
            }

            function s(e, r, i, n, s, l, c) {
                if (o() && window.SubtleCrypto) return TRC.cryptoKeysManager.getPageViewUniqueID().then(o => {
                    this.logMsgToServer(`${t}//${e}/${s}/log/2/debug?${a(r,i,n,l,o)}`, c)
                }).catch(() => {
                    this.logMsgToServer(`${t}//${e}/${s}/log/2/debug?${a(r,i,n,l)}`, c)
                });
                this.logMsgToServer(`${t}//${e}/${s}/log/2/debug?${a(r,i,n,l)}`)
            }

            function a(t, n, s, a, l) {
                const c = window.TRCImpl && window.TRCImpl.getSystemFlag("loaderType");
                return `${e.timeStamp+encodeURIComponent(s)}&${e.type}${encodeURIComponent(TRC.modDebug.getType(t))}&${e.message}${encodeURIComponent(n)}${window.trc_debug_level>1?`&${e.debugLevel}${window.trc_debug_level}`:""}&${e.id}${Math.floor(1e4*Math.random())}${window.TRC.version?`&cv=${window.TRC.version}`:""}${c?`&lt=${c}`:""}${o()&&window.SubtleCrypto&&l?`&uuid=${l}&dcc=${++i}`:""}${a?`&${r(a)}`:""}`
            }
            TRC.newDebugLogger = {
                logMsg: s,
                logMsgToServer: n
            }, window._trcIsUTactive && (TRC.newDebugLogger.getLogParams = a, TRC.newDebugLogger.resetCounter = function() {
                i = 0
            })
        })(), (() => {
            const e = "ack";
            TRC.pageLevelFeaturesManager = {
                features: {
                    "explore-more": {
                        responseKey: "exm",
                        enableInIframe: !0,
                        functionCall: (e, t) => {
                            TRC.pageLevelFeaturesManager.getFeatureOnFeedLevel(e, t)
                        }
                    },
                    "virtual-placement": {
                        responseKey: "vpl",
                        enableInIframe: !0,
                        functionCall: (e, t) => {
                            TRC.pageLevelFeaturesManager.getFeatureOnPageLevel(e, t)
                        }
                    }
                },
                pageLevelFeatures: {},
                disableFeatureOnIframe() {
                    const {
                        pageLevelFeatures: e
                    } = TRC.pageLevelFeaturesManager, t = window.self !== window.top;
                    if (t) {
                        const t = Object.keys(this.features);
                        for (let r = 0; r < t.length; r++) {
                            const i = t[r],
                                {
                                    responseKey: o
                                } = this.features[i],
                                n = TRCImpl.global[`enable-${o}-inside-iframe`];
                            let {
                                enableInIframe: s
                            } = this.features[i];
                            if (void 0 !== n && (s = n), !1 === s) {
                                const t = this.getPlfKey(o);
                                e[t] = !0
                            }
                        }
                    }
                },
                getFeature(e) {
                    Object.keys(this.features).forEach(t => {
                        const r = this.features[t],
                            i = r.responseKey,
                            o = this.pageLevelFeatures[i];
                        if (!o) try {
                            r.functionCall(e, i)
                        } catch (e) {
                            __trcError("Error in functionCall in pageLevelFeaturesManager", e)
                        }
                    })
                },
                getFeatureOnFeedLevel(e, t) {
                    const r = e.trc.f,
                        i = r && Object.keys(r);
                    if (i)
                        for (let o = 0; o < i.length; o++) {
                            const e = r[i[o]],
                                n = e[t];
                            if (n) {
                                const e = this.getPlfKey(t);
                                return this.pageLevelFeatures[e] = !0
                            }
                        }
                },
                getFeatureOnPageLevel(e, t) {
                    if (e.trc && e.trc[t]) {
                        const e = this.getPlfKey(t);
                        return this.pageLevelFeatures[e] = !0
                    }
                },
                getPlfKey: t => `${e}_${t}`
            }
        })(), (() => {
            let e = null;
            class t {
                static init(e) {
                    t.setReferrer(e), e["keep-referrer-in-session"] && TRC.pageManager.sessionStorageSetValue("tbl-session-referrer", location.href)
                }
                static updateReferrer(t) {
                    e = t
                }
                static getReferrer() {
                    return e
                }
                static setReferrer(t) {
                    function r() {
                        const e = document.head.getElementsByTagName("link");
                        for (let t = 0; t < e.length; t++)
                            if ("referrer" === e[t].rel) return e[t].href
                    }

                    function i() {
                        let e = "";
                        try {
                            return (e = top.window.TRC && top.window.TRC.hasFeedView ? decodeURI(document.referrer) : decodeURI(top.window.document.referrer)) && !/https?:\/\/(\w+)\.taboola(syndication)?\.com/.test(e) ? e.substr(0, 400) : e.split("?")[0]
                        } catch (e) {
                            __trcDebug("TRC.Manager.getReferrer : rendering in cross domain iframe")
                        }
                    }

                    function o(e) {
                        if (e["keep-referrer-in-session"]) {
                            const e = TRC.pageManager.sessionStorageGetValue("tbl-session-referrer");
                            if (e && location.hostname === new TRC.URL(e).host) return e
                        }
                    }
                    e = e || r() || i() || o(t) || ""
                }
            }
            TRC.PageReferrer = t
        })(),
        function(e, t) {
            e.TRC = e.TRC || {};
            var r, i = !1,
                o = "taboola global",
                n = "trctestcookie";

            function s() {
                for (var e = "trc_cookie_storage", t = {}, r = document.cookie.split(/;\s+/), i = 0; i < r.length; i++) {
                    var o = TRC.text.lsplit(r[i], "=", 2),
                        n = unescape(o[0]),
                        s = unescape(o[1]);
                    if (n == e) {
                        for (var a = s.split("|"), l = 0; l < a.length; l++) {
                            var o = a[l].split("=");
                            t[unescape(o[0])] = unescape(o[1])
                        }
                        break
                    }
                }
                return this.save = function() {
                    var r = new Array,
                        i, o;
                    for (var n in t) t.hasOwnProperty(n) && null != t[n] && (r[r.length] = escape(n) + "=" + escape(t[n]));
                    i = r.length > 0 ? 1 : -1, o = new Date((new Date).getTime() + 365 * i * 864e5);
                    var s = this.getDomain();
                    void 0 !== document.cookie && (document.cookie = e + "=" + escape(r.join("|")) + ";domain=" + s + ";path=/;expires=" + o.toUTCString())
                }, this.getDomain = function() {
                    return !0 === TRCImpl.global["store-first-party-cookie-in-subdomain"] || "true" === TRCImpl.global["store-first-party-cookie-in-subdomain"] ? h.getPageSubDomain() : ""
                }, this.getValue = function(e) {
                    return t.hasOwnProperty(e) ? t[e] : null
                }, this.setValue = function(e, r) {
                    t[e] = r, this.save()
                }, this.removeKey = function(e) {
                    delete t[e], this.save()
                }, this.delete = function() {
                    t = {}, this.save()
                }, this
            }

            function a(e) {
                var t = e || {};
                return this.getValue = function(e) {
                    return t[e] ? t[e] : null
                }, this.setValue = function(e, r) {
                    t[e] = r
                }, this.removeKey = function(e) {
                    delete t[e]
                }, this.getData = function() {
                    return t
                }, this.delete = function() {
                    t = {}
                }, this
            }

            function l(t) {
                return this.getValue = function(r) {
                    return e[t + "Storage"].getItem(r)
                }, this.setValue = function(r, i) {
                    try {
                        e[t + "Storage"].setItem(r, i)
                    } catch (e) {}
                }, this.removeKey = function(r) {
                    try {
                        e[t + "Storage"].removeItem(r)
                    } catch (e) {}
                }, this
            }

            function c(t) {
                var r = e[t + "Storage"],
                    i = (new Date).getTime() + "",
                    o = "_taboolaStorageDetection";
                try {
                    if (r.setItem(o, i), r.getItem(o) == i) return r.removeItem(o), r
                } catch (e) {}
                return null
            }

            function d(t) {
                try {
                    if (e.localStorage instanceof Storage && TRC.useStorageDetection && c(t)) return new l(t)
                } catch (e) {
                    return null
                }
            }
            var h = function() {
                return this.publisher_id = null, this.item_id = null, this.page_id = null, this.state = {}, this.stateStack = [], this.getPageSubDomain = function() {
                    return this.getPageDomainFromHostName(t.location.hostname)
                }, this.getPageDomainFromHostName = function(e) {
                    var t = "";
                    try {
                        var r = e.split(".").reverse();
                        t = "." + r[1] + "." + r[0], r.length >= 3 && r[1].match(/^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i) && (t = "." + r[2] + "." + r[1] + "." + r[0])
                    } catch (e) {}
                    return t
                }, this.getLocalStorageImplementation = function(t, r) {
                    if (null != this.state.privateStorageImpl && "strict-w3c-storage" != t) return this.state.privateStorageImpl;
                    var i = e.TRCImpl ? e.TRCImpl.global : {};
                    switch (t = t || (i["local-storage-usage"] ? i["local-storage-usage"] : "prefer-w3c-storage")) {
                        case "strict-w3c-storage":
                            return d("session" === r ? "session" : "local");
                        case "prefer-w3c-storage":
                            var o = d("local");
                            if (o) return this.state.privateStorageImpl = o;
                        case "prefer-cookies":
                            try {
                                if (this.canWriteCookies()) return this.state.privateStorageImpl = new s
                            } catch (e) {}
                        default:
                            return this.state.privateStorageImpl = new a
                    }
                }, this.getFirstPartyCookie = function() {
                    if (this.state.firstPartyCookie) return this.state.firstPartyCookie;
                    var e = this.getLocalStorageImplementation();
                    if (e instanceof s || e instanceof a) return this.state.firstPartyCookie = e;
                    try {
                        if (this.canWriteCookies()) return this.state.firstPartyCookie = new s
                    } catch (e) {}
                    return this.state.firstPartyCookie = new a
                }, this.canWriteCookies = function() {
                    var t, r;
                    return (e.TRCImpl ? e.TRCImpl.global : {})["use-trctestcookie"] ? (document.cookie = n + "=ok", r = -1 !== document.cookie.indexOf(n), document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", r) : e.navigator.cookieEnabled
                }, this.getDummyStorage = function(e) {
                    return new a(e)
                }, this.trcParseParams = function(e) {
                    if (e && !owner.item_id)
                        for (var t = e.split("&"), r = 0; r < t.length; r++) {
                            var i = TRC.text.lsplit(t[r], "=", 2);
                            switch (unescape(i[0])) {
                                case "item_id":
                                    owner.item_id = unescape(i[1]);
                                    break;
                                case "publisher_id":
                                    owner.publisher_id = unescape(i[1])
                            }
                        }
                }, this.trcGetPublisherParams = function() {
                    for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                        var r = e[t].src.split("taboola(syndication)?.com/libtrc/")[1];
                        if (r && e[t].src.search(/taboola(syndication)?.com.*page_management/) >= 0) {
                            var i = (r = r.split("?")[0]).split("/");
                            owner.page_id = i[0], i.length > 2 && (owner.page_id += "/" + i[1]), owner.trcParseParams(e[t].src.split("?")[1])
                        }
                    }
                }, this.getPageData = function() {
                    var e = this.getTopMostWindow();
                    return e.taboola_view_id || (e.taboola_view_id = (new Date).getTime()), TRC.isAMPSplitFeed && void 0 !== TRC.syncViewID && "" !== TRC.syncViewID ? TRC.syncViewID : e.taboola_view_id
                }, this.storeValue = function(e, t) {
                    this.storePublisherValue(o, e, t)
                }, this.removeKey = function(e) {
                    this.removePublisherKey(o, e)
                }, this.getValue = function(e) {
                    return this.getPublisherValue(o, e)
                }, this.storePublisherValue = function(e, t, r) {
                    var i;
                    this.isNotAllowedToWriteValue(t, r) || (i = this.buildKeyWithPublisher(e, t), this.getLocalStorageImplementation().setValue(i, r), this.addKeyToStoredKeysList(i))
                }, this.isNotAllowedToWriteValue = function(e, t) {
                    return null == t || void 0 == t || TRC.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(e)
                }, this.buildKeyWithPublisher = function(e, t) {
                    return e + ":" + t
                }, this.getPublisherValue = function(e, t) {
                    return TRC.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(t) ? null : this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(e, t))
                }, this.removePublisherKey = function(e, t) {
                    return this.getLocalStorageImplementation().removeKey(this.buildKeyWithPublisher(e, t))
                }, this.removeAllKeys = function() {
                    for (var e = this.getStoredKeysList(), t = [], r, i = 0; i < e.length; i++) r = e[i], this.isAllowedKeyWhenDoNotTrack(r) ? t.push(r) : this.getLocalStorageImplementation().removeKey(r);
                    this.setStoredKeysList(t)
                }, this.addKeyToStoredKeysList = function(e) {
                    var t = this.getStoredKeysList(); - 1 === t.indexOf(e) && (t.push(e), this.setStoredKeysList(t))
                }, this.getStoredKeysList = function() {
                    var e = this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(o, "local-storage-keys")),
                        t;
                    try {
                        t = TRC.util.jsonParseWithNative(e) || []
                    } catch (e) {
                        t = [], __trcError("Could not parse local storage keys", e)
                    }
                    return t
                }, this.setStoredKeysList = function(e) {
                    var t;
                    try {
                        t = __trcJSONify(e), this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(o, "local-storage-keys"), t)
                    } catch (e) {
                        return void __trcError("Could not stringify local storage keys", e)
                    }
                }, this.isAllowedKeyWhenDoNotTrack = function(t) {
                    var r, i = (e.TRCImpl && e.TRCImpl.global || {})["dnt-allowed-keys"] || ["session-id", "trc_css-isolation"],
                        o;
                    return null !== t && void 0 !== t && (o = t.split(":")[1] || t, -1 !== i.indexOf(o))
                }, this.removeUserId = function() {
                    TRC.pageManager.removeKey("user-id"), TRCImpl.global["store-userid-first-party-cookie"] && this.getFirstPartyCookie().removeKey(this.buildKeyWithPublisher(o, "user-id"))
                }, this.storeUserId = function(e, t) {
                    this.isNotAllowedToWriteValue("user-id", e) || (t ? this.getFirstPartyCookie().delete() : (this.storePublisherValue(o, "user-id", e), TRCImpl.global["store-userid-first-party-cookie"] && this.getFirstPartyCookie() !== this.getLocalStorageImplementation() && this.getFirstPartyCookie().setValue(this.buildKeyWithPublisher(o, "user-id"), e)))
                }, this.getUserId = function() {
                    return TRC.user_id || TRC.pageManager.getValue("user-id")
                }, this.storeSessionId = function(e, t) {
                    this.isNotAllowedToWriteValue("session-id", e) || (t ? this.getFirstPartyCookie().delete() : 1 == TRCImpl.global["store-sessiondata-first-party-cookie"] && this.getFirstPartyCookie() !== this.getLocalStorageImplementation() && this.getFirstPartyCookie().setValue(this.buildKeyWithPublisher(o, "session-data"), e))
                }, this.getUserIdFirstPartyCookie = function() {
                    return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(o, "user-id"))
                }, this.getUserIdFromReferrer = function() {
                    var e = this.getReferrer();
                    return e && e.indexOf("taboola") > -1 ? TRC.URL.prototype.getParameter.call(e, "ui") : null
                }, this.getTopMostWindow = function() {
                    var t;
                    try {
                        if ((t = e.top).TRC = t.TRC || {}, t.TRC || (t = e), !TRCImpl || !TRCImpl.global || !TRCImpl.global["disable-strict-top-window-check"]) var r = t.location
                    } catch (r) {
                        t = e
                    }
                    return t
                }, this.additionalDispatchParams = function() {
                    return null == this.state.moreDispatchParams && (this.state.moreDispatchParams = this.getCurrentURL().filtered), 0 == this.state.moreDispatchParams.length ? "" : "&" + this.state.moreDispatchParams.join("&")
                }, this.getForceTrcCache = function() {
                    return i
                }, this.getCurrentURL = function() {
                    var t = TRC.isAMP && e.context && e.context.canonicalUrl || e.location.href,
                        r = new TRC.URL(t),
                        o = [],
                        n = [],
                        s = function(e) {
                            return function(t) {
                                t && (0 == t.search("trc_") || "taboola-debug" == t ? (i = new Boolean(t.match(/trc_cache/)).valueOf(), n.push(t)) : e && o.push(t))
                            }
                        };
                    e.context && e.context.location && e.context.location.search.replace(/^\?/, "").split(/&/).forEach(s(!1)), r.search.replace(/^\?/, "").split(/&/).forEach(s(!0)), r.search = o.length > 0 ? "?" + o.join("&") : "";
                    var a = new String(r.toString());
                    return a.filtered = n, a
                }, this.sessionStorageGetValue = function(e) {
                    var t = this.getLocalStorageImplementation("strict-w3c-storage", "session");
                    return t && t.getValue(e) || null
                }, this.sessionStorageSetValue = function(e, t) {
                    var r = this.getLocalStorageImplementation("strict-w3c-storage", "session");
                    r && r.setValue(e, t)
                }, this.initState = function() {
                    void 0 === this.state && (this.state = {}), this.state.privateStorageImpl = null, this.state.m_publisherDomains = {
                        host: [],
                        path: [],
                        query: []
                    }, this.state.moreDispatchParams = null
                }, this.getReferrer = function() {
                    return TRC.PageReferrer.getReferrer()
                }, this.updateReferrer = function(e) {
                    TRC.PageReferrer.updateReferrer(e)
                }, this.initReferrer = function(e) {
                    TRC.PageReferrer.init(e)
                }, this.pushState = function() {
                    this.stateStack.push(this.state), delete this.state, this.initState()
                }, this.popState = function() {
                    this.stateStack.length > 0 && (this.state = this.stateStack.pop())
                }, this.initState(), this
            };
            h.getPageData = function() {
                return r.getPageData()
            }, h.storeValue = function(e, t) {
                return r.storeValue(e, t)
            }, h.storePublisherValue = function(e, t, i) {
                return r.storePublisherValue(e, t, i)
            }, h.getValue = function(e) {
                return r.getValue(e)
            }, h.getPublisherValue = function(e, t) {
                return r.getPublisherValue(e, t)
            }, h.additionalDispatchParams = function() {
                return r.additionalDispatchParams()
            }, h.getCurrentURL = function() {
                return r.getCurrentURL()
            }, h.getPageSubDomain = function() {
                return r.getPageSubDomain()
            }, h.pushState = function() {
                return r.pushState()
            }, h.popState = function() {
                return r.popState()
            }, TRC.pageManager = r = TRC.pageManager || new h, e.PageManager = e.PageManager || h
        }(window, document), (() => {
            class e {
                constructor() {
                    this.postData = {}
                }
                setFullItemList(e) {
                    "object" == typeof e ? this.postData.fil = __trcJSONify(e) : "string" == typeof e && (this.postData.fil = e)
                }
                setScreenHeight(e) {
                    this.postData.sh = e
                }
                setScreenWidth(e) {
                    this.postData.sw = e
                }
                setScreenDensity(e) {
                    this.postData.sde = e
                }
                setBrowserWidth(e) {
                    this.postData.bw = e
                }
                setBrowserHeight(e) {
                    this.postData.bh = e
                }
                setDocumentWidth(e) {
                    this.postData.dw = e
                }
                setDocumentHeight(e) {
                    this.postData.dh = e
                }
                setArticlePos(e) {
                    this.postData.bad = e
                }
                setContainerPos(e) {
                    this.postData.cd = e
                }
                setContainerWidth(e) {
                    this.postData.mw = e
                }
                getAll() {
                    return this.postData
                }
            }
            TRC.PlacementEventPostData = e
        })(), ((e, t, r) => {
            const i = (e, t) => {
                    const {
                        style: r = "",
                        location: i = "beforeend"
                    } = t;
                    r && TRC.dom.injectStyle(r), e.insertAdjacentHTML(i, o(t)), n(s(i, e))
                },
                o = e => {
                    const {
                        markup: t = "",
                        href: r = "#",
                        enableScrolling: i = "no",
                        classList: o = "",
                        children: n = "",
                        inlineStyle: s = "",
                        wrapper: a
                    } = e;
                    let l = `<a tblenablesscrolling="${i}" href="${r}" \n                               class="${o}" style="${s}" rel="nofollow" target="_blank"\n                               >${t}${n}</a>`;
                    return a && (l = `<${a.type} class="${a.className}">${l}</${a.type}>`), l
                },
                n = e => {
                    TRC.Device.isTouchDevice || TRC.dom.isInIframe() || TRC.dom.on(e, "click", e => TRC.aboutUs.open(e) || !1)
                },
                s = (e, t) => {
                    switch (e) {
                        case "beforebegin":
                            return t.previousElementSibling;
                        case "afterbegin":
                            return t.firstElementChild;
                        case "beforeend":
                            return t.lastElementChild;
                        case "afterend":
                            return t.nextElementSibling;
                        default:
                            return t.firstElementChild
                    }
                };
            r.PopupLink = {
                create: i
            }
        })(window, document, TRC),
        function(e, t) {
            var r = TRC.PostRenderQueue = function() {
                return this.backend = [], this
            };
            r.prototype.pushBack = function(e, t) {
                __trcDebug("postRenderQueue.pushBack(" + e + ")"), this.backend.push({
                    name: e,
                    func: t
                })
            }, r.prototype.pushFront = function(e, t) {
                __trcDebug("postRenderQueue.pushFront(" + e + ")"), this.backend.unshift({
                    name: e,
                    func: t
                })
            }, r.prototype.popFront = function() {
                if (0 == this.backend.length) return null;
                var e = this.backend.shift();
                return "function" == typeof e ? {
                    name: "unknown",
                    func: e
                } : e
            }
        }(window, document), ((e, t) => {
            const r = "tbl-forkorts-article",
                i = ` ${r} ${r}-active`,
                o = `tbl-read-more-box-btn`,
                n = "tbl-read-more-button-arrow",
                s = "Read%20More",
                a = 400;

            function l(e, t) {
                const r = TRC.translationManager.getLabel({
                    feature: "read-more",
                    label: "DEFAULT_CAPTION"
                }) || s;
                return {
                    caption: e && e.caption || t && t.caption || r && decodeURIComponent(r),
                    boxSelector: e && e.boxSelector || t && t.boxSelector || null,
                    threshold: e && e.threshold || t && t.threshold || 1100,
                    backgroundColor: e && e.backgroundColor || t && t.backgroundColor || "#fff",
                    minimizedSize: e && e.minimizedSize || t && t.minimizedSize || 800,
                    scrollSize: e && e.scrollSize || t && t.scrollSize || 800,
                    buttonTop: e && e.buttonTop || t && t.buttonTop || 48,
                    buttonBottom: e && e.buttonBottom || t && t.buttonBottom || 28,
                    divTop: e && e.divTop || t && t.divTop || 75,
                    gradient: e && e.gradient || t && t.gradient || 40,
                    cutoffType: e && e.cutoffType || t && t.cutoffType || "ARTICLE",
                    anchorSelector: e && e.anchorSelector || t && t.anchorSelector || null,
                    lengthFromAnchorElementType: e && e.lengthFromAnchorElementType || t && t.lengthFromAnchorElementType || "BELOW",
                    lengthFromAnchorElement: e && e.lengthFromAnchorElement || t && t.lengthFromAnchorElement || 30
                }
            }

            function c(e) {
                return `.${r} { max-height: inherit; } .${r}.tbl-forkorts-article-active { max-height: calc(${e.minimizedSize}px - 35px); overflow: hidden; position: relative; }.tbl-read-more-box { position: absolute; z-index: 4; left: 0; right: 0; /* there's a small line between the start of the feed/widget aand you can see the content there. so i placed the gradient 2px lower. */ bottom: -2px; display: none; text-align: center; padding: ${e.divTop}px 12px calc(50px - 35px); background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 10%, ${e.backgroundColor} 60%, ${e.backgroundColor} 100%); } .tbl-read-more-box .tbl-read-more-btn { background: #F7F7F7; border: 1px solid #bebebe; border-radius: 24px; color: #5C5C5C; width: 130px; margin: -6px 0 40px 0; padding: 8px 20px 8px 25px; height: 30px; line-height: 14px; font-size: 14px; font-weight: 500; text-align: center; } .tbl-read-more-box .tbl-read-more-btn.tbl-rtl-read-more-btn { padding: 8px 25px 8px 20px; } .tbl-read-more-box .tbl-read-more-btn.tbl-rtl-read-more-btn .tbl-read-more-button-arrow { margin: 0 6px 0 0; } .tbl-read-more-box .tbl-read-more-btn .tbl-read-more-button-arrow { width: 8px; height: 8px; margin: 0 0 0 6px; } .tbl-read-more-box .tbl-read-more-btn:hover { cursor: pointer; text-decoration: none; background: #ececec; color: #5C5C5C; }.${r}-active .tbl-read-more-box { display: block; }`
            }

            function d() {
                return e.pageYOffset || t.documentElement.scrollTop || t.body.scrollTop
            }

            function h(e) {
                const i = t.querySelector(`.${r}`);
                e.preventDefault(), e.stopPropagation(), i.classList.remove(`${r}-active`), i.style.maxHeight = "", f.call(this, "clicked", "true", null), TRC.EventsAPI.readmore("click", this.response && this.response.trc), TRC.dispatch("readMoreClicked"), TRC.readMoreVisible = !1
            }

            function p(e, r) {
                const i = t.createElement("div");
                return i.className = `tbl-read-more-box`, i.innerHTML = `<a \n                            id="${o}_${r}" \n                            class="tbl-read-more-btn ${"rtl"===TRCImpl.direction?"tbl-rtl-read-more-btn":""}"\n                            href="#" \n                        > \n                            ${e.caption}\n                            ${u()}\n                        </a>`, i
            }

            function u() {
                return `\n            <svg class='${n}' viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path \n                    d="M6.85381 0.203525L3.99181 3.06553L1.12981 0.203525C1.00407 0.0820867 0.835672 0.0148905 0.660874 0.0164095C0.486076 0.0179284 0.318868 0.088041 0.195262 0.211646C0.0716568 0.335252 0.00154415 0.50246 2.52017e-05 0.677258C-0.00149374 0.852056 0.0657025 1.02046 0.187141 1.14619L3.52047 4.47953C3.64549 4.60451 3.81503 4.67472 3.99181 4.67472C4.16858 4.67472 4.33812 4.60451 4.46314 4.47953L7.79647 1.14619C7.86015 1.08469 7.91094 1.01113 7.94588 0.929795C7.98081 0.848459 7.99921 0.760979 7.99997 0.67246C8.00074 0.58394 7.98388 0.496154 7.95036 0.414223C7.91683 0.332292 7.86733 0.257857 7.80474 0.195262C7.74214 0.132667 7.66771 0.083165 7.58578 0.0496444C7.50385 0.0161238 7.41606 -0.00074404 7.32754 2.51711e-05C7.23902 0.000794382 7.15154 0.0191852 7.0702 0.0541246C6.98887 0.0890639 6.91531 0.139852 6.85381 0.203525Z"\n                    fill="#BCBCBC"\n                />\n            </svg>\n        `
            }

            function g(r, i) {
                const o = r.context || i.context;
                "parent" === o && (e = e.parent, t = e.parent.document), "top" === o && (e = e.top, t = e.top.document)
            }

            function m(e, r) {
                const i = r || "kortWidgetCssStyle";
                let o = t.querySelector(`#${i}`);
                o && o.parentNode.removeChild(o), (o = t.createElement("div")).id = i, o.innerHTML = `&shy;<style>${e}</style>`, t.documentElement.appendChild(o)
            }

            function b(e, r, i) {
                let o, n;
                if ("PAGE_ELEMENT" === e.cutoffType && (n = t.querySelector(e.anchorSelector))) {
                    const t = n.getBoundingClientRect(),
                        s = r.getBoundingClientRect();
                    "ABOVE" === e.lengthFromAnchorElementType ? o = t.top - s.top - e.lengthFromAnchorElement : (o = t.bottom - s.top + e.lengthFromAnchorElement, o += i.getBoundingClientRect().height)
                }
                return o
            }

            function f(e, t, r) {
                if (TRC.util.isPercentEnabled(TRCImpl.global, "read-more-events-enabled")) {
                    const i = {
                        event_type: "read_more",
                        event_state: e,
                        event_value: t,
                        event_msg: r
                    };
                    this.sendEvent("supply-feature", {
                        d: JSON.stringify(i)
                    }, null)
                }
            }

            function v(e, t, r) {
                function i(e) {
                    for (; - 1 === e.className.indexOf("trc_related_container") || e.parentNode.className.indexOf("trc_related_container") > -1;) e = e.parentNode;
                    return e
                }
                const o = i(e.container),
                    n = d(),
                    s = r.getBoundingClientRect().top + n;
                if (n < t.scrollSize) return {
                    scrollHeight: n,
                    renderHeight: t.minimizedSize + s,
                    articleRenderOffset: t.minimizedSize
                };
                const l = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
                    c = o.getBoundingClientRect().top,
                    h = c - l;
                if (h < 2 * a) return null;
                const p = n + l,
                    u = {
                        scrollHeight: n,
                        renderHeight: p + a,
                        articleRenderOffset: p + a - s
                    };
                return u
            }

            function C(n) {
                const s = a(n);

                function a(n) {
                    try {
                        const s = f.trcBind(n);
                        TRC.tlf && console.time("init Read More"), s("Available", !0, null);
                        const a = l(n.readMorePageConfig, n.readMoreConfig);
                        if (g(n.readMorePageConfig, n.readMoreConfig), !e.matchMedia) return s("Rendered", !1, "match media is not supported"), !1;
                        if (!a.boxSelector) return s("Rendered", !1, "no box selector defined"), !1;
                        const u = t.querySelector(a.boxSelector);
                        if (!u) return s("Rendered", !1, "box content not detected"), !1;
                        if (t.querySelector(`.${r}`) === u) return s("Rendered", !1, "box content already in use"), !1;
                        let C = !(u.offsetHeight < a.threshold || d() >= a.scrollSize);
                        if (TRCImpl.global["read-more-scroll-fast-enabled"] && (C = v(n, a, u)), !C) return s("Rendered", !1, "dimensions exception"), !1;
                        u.className += i, m(c(a));
                        const y = p(a, n.id);
                        u.appendChild(y);
                        const T = b(a, u, y);
                        T && (u.style.maxHeight = `${T}px`), TRC.readMoreVisible = !0, TRC.dispatch("readMoreRendered"), TRC.EventsAPI.readmore("render", n.response && n.response.trc), TRCImpl.global["read-more-scroll-fast-enabled"] && TRCImpl.sendAbTestEvent("rendered", {
                            renderingHeight: C.renderHeight,
                            scrollHeight: C.scrollHeight
                        }), t.querySelector(`#${o}_${n.id}`).addEventListener("click", h.trcBind(n), !1), s("Rendered", !0, null);
                        const R = {
                                targetElement: y,
                                onEnter: () => {
                                    s("Visible", !0, null), TRC.intersections.unobserve(w)
                                }
                            },
                            w = TRC.intersections.observe(R);
                        return TRC.tlf && console.timeEnd("init Read More"), !0
                    } catch (e) {
                        return __trcError("Error read more init", e), !1
                    }
                }
                s || TRC.EventsAPI.readmore("none", n.response && n.response.trc)
            }
            TRC._translationQueue = TRC._translationQueue || [], TRC._translationQueue.push({
                "read-more": {
                    DEFAULT_CAPTION: s
                }
            }), TRC.setReadMore = C
        })(window, document),
        function() {
            let e = !1;
            const t = {
                    RECO_REEL: "tbl-reco-reel story-widget",
                    PROGRESS_BAR: "tbl-reco-reel-progressBar tbl-story-progressBar",
                    PROGRESS_BAR_WRAPPER: "tbl-reco-reel-progressBar-wrp tbl-story-progressBar-wrp",
                    PROGRESS_BAR_WRAPPER_TEXT_OVER: "tbl-reco-reel-progressBar-wrp-text-over tbl-story-progressBar-wrp-text-over",
                    PROGRESS_BAR_OVERFLOW_WRAPPER: "tbl-reco-reel-progressBar-overflow-wrp tbl-story-progressBar-overflow-wrp",
                    TOUCH_DEVICE: "tbl-reco-reel-touch-device tbl-story-touch-device",
                    DESKTOP: "tbl-reco-reel-desktop tbl-story-desktop",
                    TEXT_OVER: "tbl-reco-reel-text-over story-widget-text-over",
                    TEXT_UNDER_SLIDE_IN: "tbl-reco-reel-text-under-slide-in story-widget-text-under-slide-in",
                    TEXT_UNDER_RTL: "tbl-reco-reel-text-under-rtl story-widget-text-under-rtl",
                    SHOW_ITEM: "tbl-show-item",
                    NEXT_ITEM: "tbl-next-item",
                    REMOVE_LEFT: "tbl-remove-item",
                    REMOVE_RIGHT: "tbl-remove-item-to-right",
                    IMAGE_HOLDER: "thumbBlock_holder",
                    ZOOM_IN: TRC.Browser.ie ? "" : "tbl-zoom-in-item",
                    PROGRESS_RUNNER: "tbl-progress-runner",
                    PROGRESS_ANIM: "tbl-progress-anim",
                    PREVENT_CLICK: "tbl-prevent-click-progressBar",
                    ARROW_BUTTON: "tbl-arrow-btn",
                    CLICKABLE_AREA: "tbl-clickable-area-btn",
                    TEXT_UNDER_CONTROLS: "tbl-text-under-controls",
                    HIDDEN: "tbl-hidden",
                    LABEL_SHOW: "label-show",
                    ANIMATION_ZOOM_IN: "tbl-animation-zoom-In"
                },
                r = {
                    SLIDE_OUT_LEFT: "tbl-animation-slide-out-left",
                    SLIDE_OUT_RIGHT: "tbl-animation-slide-out-right",
                    PROGRESS_BAR_ANIMATION: "tbl-animation-progress-bar"
                },
                i = {
                    LABELS: ".item-label-href",
                    LABELS_BOX: ".item-label-href .video-label-box",
                    LABELS_BRANDING: ".item-label-href .branding",
                    LABELS_GRADIENT_CONTAINER: "tbl-text-over-container",
                    LABELS_GRADIENT_OVERLAY: "tbl-text-over",
                    LABELS_ALIGN: "tbl-text-over-align",
                    LABELS_ALIGN_LEFT: "tbl-text-over-labels-left",
                    LABELS_ALIGN_RIGHT: "tbl-text-over-labels-right",
                    VIDEO_TITLE: "video-title"
                },
                o = [r.SLIDE_OUT_LEFT, r.SLIDE_OUT_RIGHT],
                n = 56,
                s = .15,
                a = 100,
                l = 300,
                c = 270,
                d = -38,
                h = -35,
                p = {
                    BACK: "back",
                    PLAY: "play",
                    PAUSE: "pause",
                    FORWARD: "forward"
                },
                u = {
                    play: "running",
                    pause: "paused"
                };
            class g {
                constructor(r) {
                    this.props = g.GetRecommendationReelProps(r), this.active = !1, this.finishFirstCycle = !1, this.browserWidth = TRC.dom.getWindowWidth(), this.internalc = r.internalContainer, this.mainContainer = r.container, this.rbox = r, this.setNumOfItems(r.responsiveRules), this.items = Array.prototype.slice.call(r.boxes, 0, this.amountOfItems), this.intervalLength = this.props.recoReelInterval, this.debugWidget = -1 !== window.location.search.indexOf("tbl-debug=true"), this.isTouchDevice = TRC.Device.isTouchDevice, this.deviceType = this.isTouchDevice ? t.TOUCH_DEVICE : t.DESKTOP, this.calcImageHeight(), this.thumbnailPosition = r.getThumbnailPosition(), this.isTextOver = "under" === this.thumbnailPosition, this.direction = g.getDirection(r), this.isTextUnderSlideIn = g.checkIsTextUnderSlideIn(r) && !this.isTextOver, this.state = {
                        previousItem: null,
                        showItem: this.items[0],
                        showNextItem: this.items[1],
                        activePB: null,
                        previousPosition: null,
                        currentPosition: 0
                    }, !e && g.setDefaultCss();
                    const i = TRC.listen("trcContentReady", e => {
                        e.container === this.mainContainer && this.init(i)
                    })
                }
                static shouldInitRecommendationReel(e) {
                    return TRC.util.isTrue(g.getProperty(e, "recommendationReel", "storyWidget"))
                }
                static GetRecommendationReelProps(e) {
                    return {
                        recoReelInterval: g.getProperty(e, "interval", "storyWidget-story-interval") || 7
                    }
                }
                static checkIsTextUnderSlideIn(e) {
                    return TRC.util.isTrue(g.getProperty(e, "enable-text-under-slide-in", "storyWidget-recommendation-reel-enable-text-under-slide-in"))
                }
                static getProperty(e, t, r) {
                    return e.trc.getProperty(e.mode_name, t, e.propertiesOverride) || e.trc.getProperty(e.mode_name, r, e.propertiesOverride)
                }
                static setTextOverForRecommendationReel(e, t) {
                    const r = document.createElement("span"),
                        o = this.getDirection(e);
                    TRC.dom.addClass(r, i.LABELS_GRADIENT_OVERLAY), t.link.appendChild(r), TRC.dom.addClass(t.link, i.LABELS_GRADIENT_CONTAINER), this.alignLabelsBox(t, o), this.addArrowIcon(t.link, o)
                }
                calcImageHeight() {
                    this.imageHeight = g.getOuter("height", this.items[0].querySelector(`.${t.IMAGE_HOLDER}`)), this.imageWidth = g.getOuter("width", this.items[0].querySelector(`.${t.IMAGE_HOLDER}`))
                }
                init(e) {
                    const r = this.getRecoReelTypeContainerClass();
                    try {
                        e.remove(), setTimeout(() => {
                            this.container = this.mainContainer.querySelector(".trc_rbox_container"), TRC.dom.addClass(this.container, `${t.RECO_REEL} ${r} ${this.deviceType}`), TRC.dom.addClass(this.internalc, "tbl-recommendation-reel"), this.isTextUnderSlideIn && (this.addLabelsBoxAnimatedElements(), this.calcLabelBoxSizes()), this.calcImageHeight(), this.buildRecommendationReel(), this.setDynamicCss(), TRC.dispatch("widgetHeightReady"), this.resizeIfAMPFeed()
                        }, 0);
                        const i = {
                            onEnter: this.startTheReel.trcBind(this),
                            onExit: this.stopTheReel.trcBind(this),
                            targetElement: this.internalc
                        };
                        TRC.intersections.observe(i)
                    } catch (e) {
                        __trcError("error on reco reel initialisation", e)
                    }
                }
                resizeIfAMPFeed() {
                    try {
                        TRC && TRC.isAMP && TRC.amp && "function" == typeof TRC.amp.sendAMPFeedResize && this.rbox && this.rbox.isFeedCard && TRC.amp.sendAMPFeedResize()
                    } catch (e) {
                        __trcWarn("error in resize amp feed", e)
                    }
                }
                buildRecommendationReel() {
                    if (this.rbox.trc.sendAbTestEvent("recommendation-reel", "available"), this.listenToAnimationEvents(), this.arrows = [], this.clickedAreas = [], this.progressBar = this.createProgressBar(), this.internalc.parentNode.appendChild(this.progressBar), this.allowRecalculateSize = !0, this.deviceType === t.DESKTOP) this.arrows = [], this.isTextUnderSlideIn || (this.arrows = this.createArrowBtns(), TRC.dom.on(this.internalc, "mouseover", this.playStateAnimation.trcBind(this, "paused")), TRC.dom.on(this.internalc, "mouseleave", this.playStateAnimation.trcBind(this, "running")));
                    else {
                        this.clickedAreas = this.createMobileClickedArea();
                        const e = document.createElement("div");
                        e.className = t.PREVENT_CLICK, this.progressBar.appendChild(e)
                    }
                    const e = this.calcCardHeight();
                    this.isTextUnderSlideIn ? (this.createControls(), this.responsiveAlignmentTextUnder(e)) : this.responsiveAlignment(e), TRC.dom.on(window, "resize", TRC.util.debounce(() => {
                        this.recalculateWidgetSize(e), this.isTextUnderSlideIn && this.calcLabelBoxSizes()
                    }, 100, !1, this))
                }
                recalculateWidgetSize(e) {
                    e.item.style.removeProperty("top"), e.itemHeight = g.getOuter("height", e.item), this.isTextUnderSlideIn ? this.responsiveAlignmentTextUnder(e) : this.responsiveAlignment(e)
                }
                static getConsts() {
                    return {
                        CSS_CLASSES: t,
                        CSS_ANIMATION: r,
                        SLIDE_EVENTS: o,
                        ARROW_SIZE: n,
                        PROGRESS_BAR_HEIGHT: a
                    }
                }
                setNumOfItems(e) {
                    const t = this.rbox.boxes.length;
                    e ? e.forEach(e => {
                        const r = e.min < this.browserWidth && (this.browserWidth < e.max || void 0 === e.max),
                            i = e.rows * e.cells,
                            o = i <= t;
                        r && (this.amountOfItems = o ? i : t)
                    }) : this.amountOfItems = t
                }
                getRecoReelTypeContainerClass() {
                    let e = "";
                    return this.isTextUnderSlideIn ? (e = t.TEXT_UNDER_SLIDE_IN, "rtl" === this.direction && (e += ` ${t.TEXT_UNDER_RTL}`)) : this.isTextOver && (e = t.TEXT_OVER), e
                }
                static setDefaultCss() {
                    e = !0, TRC.dom.injectStyle(`div.tbl-reco-reel, div.story-widget { position: relative; /*DEFAULTS */ /*EVENTS*/ /*PROGRESS BAR */ /*ARROWS */ } div.tbl-reco-reel .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { position: absolute; } div.tbl-reco-reel .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { width: 91%; } div.tbl-reco-reel .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-right, div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-right { right: 0; left: auto; } div.tbl-reco-reel .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-left, div.story-widget .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-left { left: 0; right: auto; } div.tbl-reco-reel.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp { position: absolute; width: 100%; font-size: 0; background: -webkit-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(1, 0, 0, 0.8)), to(rgba(0, 0, 0, 0))); background: -o-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: linear-gradient(to bottom, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); } div.tbl-reco-reel.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar { top: 5px; height: 2px; } div.tbl-reco-reel.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, div.tbl-reco-reel.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, div.tbl-reco-reel.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar, div.story-widget.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, div.story-widget.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, div.story-widget.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar { pointer-events: auto; } div.tbl-reco-reel.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.tbl-reco-reel.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 0; } div.tbl-reco-reel.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.tbl-reco-reel.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.story-widget.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { bottom: 10px; } div.tbl-reco-reel.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right, div.tbl-reco-reel.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right { right: 3%; } div.tbl-reco-reel.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left, div.tbl-reco-reel.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left { left: 3%; } div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp, div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-story-progressBar-wrp, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-story-progressBar-wrp, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp { opacity: 0; transform: translateY(100px); } div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp-text-over, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-story-progressBar-wrp-text-over, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over { opacity: 1; transform: none; } div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 15px; } div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow { bottom: 20px; } div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-right, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-right { right: 4%; } div.tbl-reco-reel:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-left, div.tbl-reco-reel:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget:not(.tbl-reco-reel-text-under-slide-in).tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget:not(.story-widget-text-under-slide-in).tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-left { left: 4%; } div.tbl-reco-reel .trc_rbox_outer, div.story-widget .trc_rbox_outer { margin: 0; } div.tbl-reco-reel .trc_rbox_outer .trc_rbox_div, div.story-widget .trc_rbox_outer .trc_rbox_div { overflow: hidden; } div.tbl-reco-reel .trc_rbox_outer .videoCube, div.story-widget .trc_rbox_outer .videoCube { position: absolute; width: 100%; margin: 0; bottom: 0; } div.tbl-reco-reel .trc_rbox_outer .videoCube .thumbBlock_holder, div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder { overflow: hidden; z-index: -1; } div.tbl-reco-reel .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock_placeholder, div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock_placeholder { background-color: #aeaeae; position: absolute; top: 0; left: 0; width: 100%; height: 100%; } div.tbl-reco-reel .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock_placeholder svg, div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock_placeholder svg { width: 100px; height: 100px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); } div.tbl-reco-reel .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock, div.story-widget .trc_rbox_outer .videoCube .thumbBlock_holder .thumbBlock { -webkit-transform: scale(1.00); -moz-transform: scale(1.00); -ms-transform: scale(1.00); -o-transform: scale(1.00); transform: scale(1.00); } div.tbl-reco-reel .trc_rbox_outer .videoCube .video-label-box, div.story-widget .trc_rbox_outer .videoCube .video-label-box { z-index: -1; opacity: 0; } div.tbl-reco-reel .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container, div.story-widget .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container { z-index: -1; opacity: 0; } div.tbl-reco-reel .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container .video-label-box, div.story-widget .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container .video-label-box { z-index: auto; opacity: 1; } div.tbl-reco-reel .videoCube.tbl-show-item, div.story-widget .videoCube.tbl-show-item { z-index: 1; } div.tbl-reco-reel .videoCube.tbl-show-item .thumbBlock_holder, div.story-widget .videoCube.tbl-show-item .thumbBlock_holder { z-index: 1; } div.tbl-reco-reel .videoCube.tbl-show-item .video-label-box, div.story-widget .videoCube.tbl-show-item .video-label-box { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.tbl-reco-reel .videoCube.tbl-show-item .item-label-href.tbl-text-over-container, div.story-widget .videoCube.tbl-show-item .item-label-href.tbl-text-over-container { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.tbl-reco-reel .videoCube.tbl-show-item .item-label-href.tbl-text-over-container .video-label-box, div.story-widget .videoCube.tbl-show-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; z-index: auto; } div.tbl-reco-reel .videoCube.tbl-show-item .tbl-labels-arrow-right, div.story-widget .videoCube.tbl-show-item .tbl-labels-arrow-right { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.tbl-reco-reel .videoCube.tbl-show-item .tbl-labels-arrow-left, div.story-widget .videoCube.tbl-show-item .tbl-labels-arrow-left { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.tbl-reco-reel .videoCube.tbl-remove-item .thumbBlock_holder, div.story-widget .videoCube.tbl-remove-item .thumbBlock_holder { -webkit-animation: tbl-animation-slide-out-left 0.75s; -moz-animation: tbl-animation-slide-out-left 0.75s; -ms-animation: tbl-animation-slide-out-left 0.75s; -o-animation: tbl-animation-slide-out-left 0.75s; animation: tbl-animation-slide-out-left 0.75s; } div.tbl-reco-reel .videoCube.tbl-remove-item .video-label-box, div.story-widget .videoCube.tbl-remove-item .video-label-box { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container, div.story-widget .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container .video-label-box, div.story-widget .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.tbl-reco-reel .videoCube.tbl-remove-item .tbl-labels-arrow-right, div.story-widget .videoCube.tbl-remove-item .tbl-labels-arrow-right { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel .videoCube.tbl-remove-item .tbl-labels-arrow-left, div.story-widget .videoCube.tbl-remove-item .tbl-labels-arrow-left { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel .videoCube.tbl-remove-item-to-right .thumbBlock_holder, div.story-widget .videoCube.tbl-remove-item-to-right .thumbBlock_holder { -webkit-animation: tbl-animation-slide-out-right 0.75s; animation: tbl-animation-slide-out-right 0.75s; } div.tbl-reco-reel .videoCube.tbl-remove-item-to-right .video-label-box, div.story-widget .videoCube.tbl-remove-item-to-right .video-label-box { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container, div.story-widget .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container .video-label-box, div.story-widget .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.tbl-reco-reel .videoCube.tbl-next-item .video-label-box, div.story-widget .videoCube.tbl-next-item .video-label-box { opacity: 0; } div.tbl-reco-reel .videoCube.tbl-next-item .item-label-href.tbl-text-over-container, div.story-widget .videoCube.tbl-next-item .item-label-href.tbl-text-over-container { opacity: 0; } div.tbl-reco-reel .videoCube.tbl-next-item .item-label-href.tbl-text-over-container .video-label-box, div.story-widget .videoCube.tbl-next-item .item-label-href.tbl-text-over-container .video-label-box { opacity: 0; } div.tbl-reco-reel .videoCube.tbl-next-item .thumbBlock_holder, div.story-widget .videoCube.tbl-next-item .thumbBlock_holder { z-index: 0; } div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp, div.story-widget .tbl-story-progressBar-overflow-wrp, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp { z-index: 9; position: absolute; pointer-events: none; overflow: hidden; width: 100%; } div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp { direction: ltr; width: 100%; box-sizing: border-box; position: absolute; padding: 0 4%; background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.8) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(1, 0, 0, 0.8))); background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.8) 100%); background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(1, 0, 0, 0.8) 100%); opacity: 1; } div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar { position: relative; top: 85px; display: inline-block; vertical-align: top; /* set bars to the absolute top container when using inline block */ width: 23%; height: 3px; background-color: rgba(255, 255, 255, 0.4); margin: 0 1%; overflow: hidden; } div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar span.tbl-progress-runner, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar span.tbl-progress-runner { width: 100%; height: 100%; position: absolute; left: 0; overflow: hidden; display: block; background-color: #fcfcfc; } div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar .tbl-progress-anim, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar .tbl-progress-anim { -webkit-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.story-widget .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.story-widget .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over { padding: 0 3%; background: none; } div.tbl-reco-reel .tbl-arrow-btn, div.story-widget .tbl-arrow-btn { position: absolute; background-color: rgba(0, 0, 0, 0.419608); z-index: 2; font-size: 40px; text-align: center; color: #ffffff; cursor: pointer; line-height: 0; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none; -webkit-transition: transform 1s; -moz-transition: transform 1s; -ms-transition: transform 1s; -o-transition: transform 1s; transition: transform 1s; display: none; } div.tbl-reco-reel .tbl-arrow-btn svg, div.story-widget .tbl-arrow-btn svg { transform: translateY(50%); margin: auto; } div.tbl-reco-reel .tbl-arrow-btn.tbl-arrow-left, div.story-widget .tbl-arrow-btn.tbl-arrow-left { -webkit-transform: scaleX(-1); -moz-transform: scaleX(-1); -ms-transform: scaleX(-1); -o-transform: scaleX(-1); transform: scaleX(-1); } div.tbl-reco-reel .tbl-clickable-area-btn, div.story-widget .tbl-clickable-area-btn { position: absolute; z-index: 2; } div.tbl-reco-reel .tbl-clickable-area-btn.tbl-clickable-area-back, div.story-widget .tbl-clickable-area-btn.tbl-clickable-area-back { left: 0; } div.tbl-reco-reel .tbl-clickable-area-btn.tbl-clickable-area-forward, div.story-widget .tbl-clickable-area-btn.tbl-clickable-area-forward { right: 0; }@-webkit-keyframes tbl-animation-slide-out-left { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(-100%); -moz-transform: translateX(-100%); -ms-transform: translateX(-100%); -o-transform: translateX(-100%); transform: translateX(-100%); } }@keyframes tbl-animation-slide-out-left { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(-100%); -moz-transform: translateX(-100%); -ms-transform: translateX(-100%); -o-transform: translateX(-100%); transform: translateX(-100%); } }@-webkit-keyframes tbl-animation-slide-out-right { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }@keyframes tbl-animation-slide-out-right { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }@-webkit-keyframes tbl-animation-fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }@keyframes tbl-animation-fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }@-webkit-keyframes tbl-animation-fade-out { 0% { opacity: 1; } 100% { opacity: 0; } }@keyframes tbl-animation-fade-out { 0% { opacity: 1; } 100% { opacity: 0; } }@-webkit-keyframes tbl-animation-zoom-In { 0% { -webkit-transform: scale(1.00); -moz-transform: scale(1.00); -ms-transform: scale(1.00); -o-transform: scale(1.00); transform: scale(1.00); } 100% { -webkit-transform: scale(1.1); -moz-transform: scale(1.1); -ms-transform: scale(1.1); -o-transform: scale(1.1); transform: scale(1.1); } }@keyframes tbl-animation-zoom-In { 0% { -webkit-transform: scale(1.00); -moz-transform: scale(1.00); -ms-transform: scale(1.00); -o-transform: scale(1.00); transform: scale(1.00); } 100% { -webkit-transform: scale(1.1); -moz-transform: scale(1.1); -ms-transform: scale(1.1); -o-transform: scale(1.1); transform: scale(1.1); } }@-webkit-keyframes tbl-animation-progress-bar { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }@keyframes tbl-animation-progress-bar { 0% { -webkit-transform: translateX(0); -moz-transform: translateX(0); -ms-transform: translateX(0); -o-transform: translateX(0); transform: translateX(0); } 100% { -webkit-transform: translateX(100%); -moz-transform: translateX(100%); -ms-transform: translateX(100%); -o-transform: translateX(100%); transform: translateX(100%); } }`), TRC.dom.injectStyle(`div.tbl-reco-reel.tbl-reco-reel-text-over, div.story-widget.story-widget-text-over { position: relative; /*DEFAULTS */ /*EVENTS*/ /*PROGRESS BAR */ } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { position: absolute; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { width: 91%; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-right, div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-right { right: 0; left: auto; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-left, div.story-widget.story-widget-text-over .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-labels-left { left: 0; right: auto; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-story-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-story-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp { background: -webkit-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(1, 0, 0, 0.8)), to(rgba(0, 0, 0, 0))); background: -o-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: linear-gradient(to bottom, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 0; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow { bottom: 10px; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-right { right: 3%; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget.story-widget-text-over.tbl-story-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget.story-widget-text-over.tbl-reco-reel-touch-device .videoCube.thumbnail_under .tbl-text-over-container .tbl-labels-arrow-left { left: 3%; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop:hover .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-story-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp { opacity: 0; transform: translateY(100px); } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop:hover .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-story-progressBar-wrp-text-over, div.story-widget.story-widget-text-over.tbl-story-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop:hover .tbl-story-progressBar-wrp-text-over, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop:hover .tbl-reco-reel-progressBar-wrp-text-over { opacity: 1; transform: none; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop .tbl-text-over-container .video-label-box.tbl-text-over-align { bottom: 15px; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow, div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow { bottom: 20px; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-right, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-right, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-right { right: 4%; } div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-left, div.tbl-reco-reel.tbl-reco-reel-text-over.tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget.story-widget-text-over.tbl-story-desktop .tbl-text-over-container .tbl-labels-arrow-left, div.story-widget.story-widget-text-over.tbl-reco-reel-desktop .tbl-text-over-container .tbl-labels-arrow-left { left: 4%; } div.tbl-reco-reel.tbl-reco-reel-text-over .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container, div.story-widget.story-widget-text-over .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container { z-index: -1; opacity: 0; } div.tbl-reco-reel.tbl-reco-reel-text-over .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container .video-label-box, div.story-widget.story-widget-text-over .trc_rbox_outer .videoCube .item-label-href.tbl-text-over-container .video-label-box { opacity: 1; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-show-item .item-label-href.tbl-text-over-container, div.story-widget.story-widget-text-over .videoCube.tbl-show-item .item-label-href.tbl-text-over-container { z-index: 1; -webkit-animation: tbl-animation-fade-in 1s; -moz-animation: tbl-animation-fade-in 1s; -ms-animation: tbl-animation-fade-in 1s; -o-animation: tbl-animation-fade-in 1s; animation: tbl-animation-fade-in 1s; -webkit-animation-fill-mode: forwards; -moz-animation-fill-mode: forwards; -ms-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; animation-fill-mode: forwards; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-show-item .item-label-href.tbl-text-over-container .video-label-box, div.story-widget.story-widget-text-over .videoCube.tbl-show-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; z-index: auto; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container, div.story-widget.story-widget-text-over .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container .video-label-box, div.story-widget.story-widget-text-over .videoCube.tbl-remove-item .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container, div.story-widget.story-widget-text-over .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container { -webkit-animation: tbl-animation-fade-out 1s; -moz-animation: tbl-animation-fade-out 1s; -ms-animation: tbl-animation-fade-out 1s; -o-animation: tbl-animation-fade-out 1s; animation: tbl-animation-fade-out 1s; opacity: 0; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container .video-label-box, div.story-widget.story-widget-text-over .videoCube.tbl-remove-item-to-right .item-label-href.tbl-text-over-container .video-label-box { animation: none; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-next-item .item-label-href.tbl-text-over-container, div.story-widget.story-widget-text-over .videoCube.tbl-next-item .item-label-href.tbl-text-over-container { opacity: 0; } div.tbl-reco-reel.tbl-reco-reel-text-over .videoCube.tbl-next-item .item-label-href.tbl-text-over-container .video-label-box, div.story-widget.story-widget-text-over .videoCube.tbl-next-item .item-label-href.tbl-text-over-container .video-label-box { opacity: 0; } div.tbl-reco-reel.tbl-reco-reel-text-over .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel.tbl-reco-reel-text-over .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over, div.tbl-reco-reel.tbl-reco-reel-text-over .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.tbl-reco-reel.tbl-reco-reel-text-over .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget.story-widget-text-over .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.story-widget.story-widget-text-over .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over, div.story-widget.story-widget-text-over .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp-text-over, div.story-widget.story-widget-text-over .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp-text-over { padding: 0 3%; background: none; }`), TRC.dom.injectStyle(`.tbl-reco-reel-text-under-slide-in .tbl-ui-line, .story-widget-text-under-slide-in .tbl-ui-line { background-color: #333333; }.tbl-reco-reel-text-under-slide-in .tbl-text-under-title-background, .story-widget-text-under-slide-in .tbl-text-under-title-background { background-color: #EBEBEB; }.tbl-reco-reel.tbl-reco-reel-text-under-slide-in, .story-widget.story-widget-text-under-slide-in { /*Here added weak selectors for css client properties to be able to override SW styles*/ /* Device specifics */ /*DEFAULTS */ /*PROGRESS BAR */ /* Control buttons */ } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .video-label-box, .story-widget.story-widget-text-under-slide-in .video-label-box { margin: 0; max-height: initial; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .video-title, .story-widget.story-widget-text-under-slide-in .video-title { max-height: initial; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .branding, .story-widget.story-widget-text-under-slide-in .branding { display: inline-block; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href { left: 10px; width: 90%; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .video-label-box, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .video-label-box, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .video-label-box, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .video-label-box, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper { top: -35px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .video-label-box .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .video-label-box .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .video-title, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .video-title, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .video-title, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .video-title, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .video-title { margin: 10px 0 10px 7px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-story-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-touch-device .trc_rbox_outer .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar { top: 7px; height: 2px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer { /*EVENTS*/ } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href { position: absolute; left: 20px; width: 90%; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box { position: absolute; top: -38px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding { z-index: 0; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title { position: relative; margin: 10px 0 10px 7px; left: 5px; opacity: 0; transition: opacity .3s; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title.label-show, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-title.label-show { opacity: 1; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background { position: absolute; display: inline; top: 0; left: -5px; width: 122%; height: 100%; z-index: -1; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding.tbl-branding-on-top, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding.tbl-branding-on-top { top: -2px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding { margin: 0 0 0 12px; position: relative; left: -110%; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding.label-show, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .video-label-box .branding.label-show { left: 0; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper { position: absolute; top: -38px; left: 0; display: block; overflow: hidden; width: 5px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .tbl-ui-line, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .tbl-ui-line { position: absolute; top: 0; left: 0; right: 0; bottom: 100%; transition: bottom .3s; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .tbl-ui-line.label-show, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper .tbl-ui-line.label-show { bottom: 0; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper { position: absolute; top: -38px; left: 5px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .tbl-text-under-title-background, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .tbl-text-under-title-background { position: absolute; top: 0; height: 100%; width: 0; transition: width .3s; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .tbl-text-under-title-background.label-show, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper .tbl-text-under-title-background.label-show { width: 100%; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item { z-index: 1; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .thumbBlock_holder, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .thumbBlock_holder { z-index: 1; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .video-description, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .branding, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-show-item .item-label-href .video-label-box .branding { z-index: 2; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .videoCube.tbl-remove-item .thumbBlock_holder, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-remove-item .thumbBlock_holder { -webkit-animation: tbl-animation-slide-out-left 0.75s; -moz-animation: tbl-animation-slide-out-left 0.75s; -ms-animation: tbl-animation-slide-out-left 0.75s; -o-animation: tbl-animation-slide-out-left 0.75s; animation: tbl-animation-slide-out-left 0.75s; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .trc_rbox_outer .videoCube.tbl-next-item .thumbBlock_holder, .story-widget.story-widget-text-under-slide-in .trc_rbox_outer .videoCube.tbl-next-item .thumbBlock_holder { z-index: 0; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-story-progressBar-overflow-wrp, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp, .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp, .story-widget.story-widget-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp { top: 0; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, .story-widget.story-widget-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .story-widget.story-widget-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp { background: -webkit-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: -webkit-gradient(linear, left top, left bottom, from(rgba(1, 0, 0, 0.8)), to(rgba(0, 0, 0, 0))); background: -o-linear-gradient(top, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); background: linear-gradient(to bottom, rgba(1, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%); } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-reco-reel-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-story-progressBar, .story-widget.story-widget-text-under-slide-in .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-reco-reel-progressBar { top: 10px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-text-under-controls, .story-widget.story-widget-text-under-slide-in .tbl-text-under-controls { position: absolute; right: 10px; z-index: 2; direction: ltr; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-text-under-controls span, .story-widget.story-widget-text-under-slide-in .tbl-text-under-controls span { cursor: pointer; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in .tbl-text-under-controls span svg, .story-widget.story-widget-text-under-slide-in .tbl-text-under-controls span svg { width: 33px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href { left: auto; right: 20px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-title, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-title, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-title { margin: 10px 7px 10px 0; left: auto; right: 5px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding { position: relative; margin: 0 12px 0 0; left: auto; right: -110%; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding .tbl-text-under-branding-background { left: auto; right: -5px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding.label-show, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding.label-show, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding.label-show, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .video-description.label-show, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .video-label-box .branding.label-show { left: auto; right: 0; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .tbl-ui-line-wrapper { left: auto; right: 0; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .trc_rbox_outer .item-label-href .tbl-text-under-title-background-wrapper { left: auto; right: 5px; } .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.tbl-reco-reel-text-under-rtl .tbl-text-under-controls, .tbl-reco-reel.tbl-reco-reel-text-under-slide-in.story-widget-text-under-rtl .tbl-text-under-controls, .story-widget.story-widget-text-under-slide-in.tbl-reco-reel-text-under-rtl .tbl-text-under-controls, .story-widget.story-widget-text-under-slide-in.story-widget-text-under-rtl .tbl-text-under-controls { right: auto; left: 10px; }`)
                }
                setDynamicCss() {
                    const e = `${this.intervalLength}s`,
                        t = `${+this.intervalLength+.5}s`,
                        r = `${n}`,
                        i = this.rbox.mode_name,
                        o = this.isTouchDevice ? Math.round(.3 * this.imageHeight) : a,
                        s = this.isTouchDevice ? Math.round(.15 * this.imageHeight) : 0,
                        l = this.imageHeight - a;
                    TRC.dom.injectStyle(`.tbl-reco-reel.tbl-story-touch-device .${i} .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, .tbl-reco-reel.tbl-story-touch-device .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar, .tbl-reco-reel.tbl-reco-reel-touch-device .${i} .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, .tbl-reco-reel.tbl-reco-reel-touch-device .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar, .story-widget.tbl-story-touch-device .${i} .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, .story-widget.tbl-story-touch-device .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar, .story-widget.tbl-reco-reel-touch-device .${i} .tbl-story-progressBar-overflow-wrp .tbl-prevent-click-progressBar, .story-widget.tbl-reco-reel-touch-device .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-prevent-click-progressBar { height: ${s}px; }.tbl-reco-reel .${i}, .story-widget .${i} { /*EVENTS*/ } .tbl-reco-reel .${i} .videoCube.tbl-show-item.tbl-zoom-in-item .thumbBlock_holder .thumbBlock, .story-widget .${i} .videoCube.tbl-show-item.tbl-zoom-in-item .thumbBlock_holder .thumbBlock { -webkit-animation: tbl-animation-zoom-In ${t} ease-in; -moz-animation: tbl-animation-zoom-In ${t} ease-in; -ms-animation: tbl-animation-zoom-In ${t} ease-in; -o-animation: tbl-animation-zoom-In ${t} ease-in; animation: tbl-animation-zoom-In ${t} ease-in; } .tbl-reco-reel .${i} .tbl-story-progressBar-overflow-wrp, .tbl-reco-reel .${i} .tbl-reco-reel-progressBar-overflow-wrp, .story-widget .${i} .tbl-story-progressBar-overflow-wrp, .story-widget .${i} .tbl-reco-reel-progressBar-overflow-wrp { height: ${o}px; } .tbl-reco-reel .${i} .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .tbl-reco-reel .${i} .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, .tbl-reco-reel .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .tbl-reco-reel .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, .story-widget .${i} .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .story-widget .${i} .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp, .story-widget .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp, .story-widget .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp { height: ${o}px; -webkit--webkit-transition: all 1s; -moz--webkit-transition: all 1s; -ms--webkit-transition: all 1s; -o--webkit-transition: all 1s; -webkit-transition: all 1s; } .tbl-reco-reel .${i} .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-progress-anim, .tbl-reco-reel .${i} .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-progress-anim, .tbl-reco-reel .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-progress-anim, .tbl-reco-reel .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-progress-anim, .story-widget .${i} .tbl-story-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-progress-anim, .story-widget .${i} .tbl-story-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-progress-anim, .story-widget .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-story-progressBar-wrp .tbl-progress-anim, .story-widget .${i} .tbl-reco-reel-progressBar-overflow-wrp .tbl-reco-reel-progressBar-wrp .tbl-progress-anim { -webkit-animation: tbl-animation-progress-bar ${e} linear; -moz-animation: tbl-animation-progress-bar ${e} linear; -ms-animation: tbl-animation-progress-bar ${e} linear; -o-animation: tbl-animation-progress-bar ${e} linear; animation: tbl-animation-progress-bar ${e} linear; } .tbl-reco-reel .${i} .tbl-arrow-btn, .story-widget .${i} .tbl-arrow-btn { height: ${r}px; width: ${r}px; display: block; } .tbl-reco-reel .${i} .tbl-clickable-area-btn, .story-widget .${i} .tbl-clickable-area-btn { top: ${s}px; width: ${r}px; height: ${this.imageHeight-s}px; } .tbl-reco-reel .${i} .tbl-arrow-btn.tbl-arrow-left, .story-widget .${i} .tbl-arrow-btn.tbl-arrow-left { left: ${-1*r}px; } .tbl-reco-reel .${i} .tbl-arrow-btn.tbl-arrow-right, .story-widget .${i} .tbl-arrow-btn.tbl-arrow-right { right: ${-1*r}px; }.tbl-reco-reel.tbl-story-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-left, .tbl-reco-reel.tbl-reco-reel-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-left, .story-widget.tbl-story-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-left, .story-widget.tbl-reco-reel-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-left { -webkit-transform: scaleX(-1) translateX(${-1*r}px); -moz-transform: scaleX(-1) translateX(${-1*r}px); -ms-transform: scaleX(-1) translateX(${-1*r}px); -o-transform: scaleX(-1) translateX(${-1*r}px); transform: scaleX(-1) translateX(${-1*r}px); }.tbl-reco-reel.tbl-story-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-right, .tbl-reco-reel.tbl-reco-reel-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-right, .story-widget.tbl-story-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-right, .story-widget.tbl-reco-reel-desktop .${i}:hover .tbl-arrow-btn.tbl-arrow-right { -webkit-transform: translateX(${-1*r}px); -moz-transform: translateX(${-1*r}px); -ms-transform: translateX(${-1*r}px); -o-transform: translateX(${-1*r}px); transform: translateX(${-1*r}px); }`)
                }
                listenToAnimationEvents() {
                    const e = TRC.dom.detectAnimationEvent(this.container, "end") || "animationend",
                        t = TRC.dom.detectAnimationEvent(this.container, "start") || "animationstart";
                    TRC.dom.on(this.container, t, e => this.animationStartHandler(e)), TRC.dom.on(this.container, e, e => this.animationEndHandler(e))
                }
                static getOuter(e, t) {
                    return t && t.getBoundingClientRect()[e]
                }
                static addASvgArrow() {
                    return `<svg width="17px" height="29px" viewBox="0 0 17 29" version="1.1" xmlns="http://www.w3.org/2000/svg">\n                       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                           <g id="Desktop-4-cards" transform="translate(-1073.000000, -436.000000)" fill="#FFFDFD" fill-rule="nonzero">\n                               <g id="Group" transform="translate(1081.500000, 450.500000) scale(-1, 1) translate(-1081.500000, -450.500000) translate(1073.000000, 436.000000)">\n                                   <polygon id="Rectangle-5" transform="translate(8.294336, 8.495231) rotate(45.000000) translate(-8.294336, -8.495231) " points="7.05498966 -1.37457069 9.68971053 -1.39537442 9.53368258 18.3650322 6.8989617 18.3858359"></polygon>\n                                   <polygon id="Rectangle-5" transform="translate(8.294336, 20.257858) scale(1, -1) rotate(45.000000) translate(-8.294336, -20.257858) " points="7.05498966 10.3880565 9.68971053 10.3672528 9.53368258 30.1276594 6.8989617 30.1484631"></polygon>\n                               </g>\n'\n                           </g>\n'\n                       </g>\n'\n                   </svg>`
                }
                static addASvgPlaceHolder() {
                    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n                    viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n                     <rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">\n                    <animateTransform\n                       attributeName="transform"\n                       dur="0.5s"\n                       from="0 50 50"\n                       to="180 50 50"\n                       type="rotate"\n                       id="strokeBox"\n                       attributeType="XML"\n                       begin="rectBox.end"/>\n                    </rect>\n                     <rect x="27" y="27" fill="#fff" width="46" height="50">\n                    <animate\n                       attributeName="height"\n                       dur="1.3s"\n                       attributeType="XML"\n                       from="50" \n                       to="0"\n                       id="rectBox" \n                       fill="freeze"\n                       begin="0s;strokeBox.end"/>\n                    </rect>\n                  </svg>`
                }
                static addArrowIcon(e, t) {
                    let r;
                    r = "ltr" === t ? `<div class="tbl-labels-arrow tbl-labels-arrow-right">\n                          <?xml version="1.0" encoding="UTF-8"?>\n                          <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n                          <title>Group 3</title>\n                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n                          <g id="Mobile-SC-CTA" transform="translate(-320.000000, -479.000000)" stroke="#FFFFFF">\n                          <g id="Group-3" transform="translate(321.000000, 480.000000)">\n                          <polyline id="Path" points="8.2173913 5.47826087 13.6956522 10.0434783 8.2173913 14.6086957"></polyline>\n                          <circle id="Oval" cx="10.5" cy="10.5" r="10.5"></circle>\n                          </g>\n                          </g>\n                          </g>\n                          </svg>\n                        </div>` : `<div class="tbl-labels-arrow tbl-labels-arrow-left">\n                    <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\n                    <svg width="23px" height="23px"\n                         viewBox="0 0 23 23"\n                         version="1.1"\n                         xmlns="http://www.w3.org/2000/svg"\n                         xmlns:xlink="http://www.w3.org/1999/xlink">\n                      <title id="title37">Group 3</title>\n                      <desc id="desc39">Created with Sketch.</desc>\n                      <g transform="rotate(180,11.5,11.5)"\n                         stroke-linejoin="round"\n                         stroke-linecap="round"\n                         fill-rule="evenodd"\n                         fill="none"\n                         stroke-width="1"\n                         stroke="none"\n                         id="Page-1">\n                        <g stroke="#ffffff" transform="translate(-320,-479)" id="Mobile-SC-CTA">\n                          <g transform="translate(321,480)" id="Group-3">\n                            <polyline points="8.2173913 5.47826087 13.6956522 10.0434783 8.2173913 14.6086957" id="Path" />\n                            <circle r="10.5" cy="10.5" cx="10.5" id="Oval" />\n                          </g>\n                        </g>\n                      </g>\n                    </svg>\n                    </div>`, e.insertAdjacentHTML("beforeend", r)
                }
                createControls() {
                    this.controls = document.createElement("div"), TRC.dom.addClass(this.controls, t.TEXT_UNDER_CONTROLS);
                    const e = Object.keys(p).map(e => p[e]);
                    e.forEach(e => this[`${e}Button`] = this.createControlButton(e)), this.internalc.parentNode.insertAdjacentElement("beforeend", this.controls)
                }
                createControlButton(e) {
                    const r = {
                            back: `<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter0_d)">\n                            <rect x="11" y="12.137" width="3.27471" height="14.1904" fill="white"/>\n                            <path d="M27.1615 11.0844C27.0293 11.0181 26.8811 10.99 26.7338 11.0032C26.5865 11.0164 26.4457 11.0704 26.3274 11.1592L16.7761 18.3226C16.6773 18.3967 16.5971 18.4929 16.5418 18.6034C16.4865 18.7139 16.4578 18.8358 16.4578 18.9593C16.4578 19.0829 16.4865 19.2048 16.5418 19.3153C16.5971 19.4258 16.6773 19.522 16.7761 19.5961L26.3274 26.7595C26.4651 26.8629 26.6327 26.9187 26.8049 26.9187C26.9287 26.9182 27.0507 26.8894 27.1615 26.8343C27.2936 26.7682 27.4046 26.6666 27.4822 26.5409C27.5598 26.4152 27.6009 26.2705 27.6009 26.1228V11.7959C27.6009 11.6482 27.5598 11.5035 27.4822 11.3778C27.4046 11.2521 27.2936 11.1505 27.1615 11.0844Z" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter0_d" x="0" y="0" width="38.6009" height="37.9187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`,
                            play: `<svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter1_d)">\n                            <path d="M11.4787 11.0844C11.6228 11.0181 11.7841 10.99 11.9446 11.0032C12.1052 11.0164 12.2585 11.0704 12.3874 11.1592L22.7932 18.3226C22.9009 18.3967 22.9883 18.4929 23.0485 18.6034C23.1087 18.7139 23.14 18.8358 23.14 18.9593C23.14 19.0829 23.1087 19.2048 23.0485 19.3153C22.9883 19.4258 22.9009 19.522 22.7932 19.5961L12.3874 26.7595C12.2373 26.8629 12.0548 26.9187 11.8672 26.9187C11.7323 26.9182 11.5994 26.8894 11.4787 26.8343C11.3348 26.7682 11.2139 26.6666 11.1293 26.5409C11.0448 26.4152 11 26.2705 11 26.1228V11.7959C11 11.6482 11.0448 11.5035 11.1293 11.3778C11.2139 11.2521 11.3348 11.1505 11.4787 11.0844Z" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter1_d" x="0" y="0" width="34.14" height="37.9187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`,
                            pause: `<svg width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter2_d)">\n                            <rect x="11" y="11.0455" width="3.82049" height="15.8278" fill="white"/>\n                            <rect x="18.0952" y="11.0455" width="3.82049" height="15.8278" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter2_d" x="0" y="0.0454712" width="32.9157" height="37.8278" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`,
                            forward: `<svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <g filter="url(#filter3_d)">\n                            <rect width="3.27471" height="14.1904" transform="matrix(-1 0 0 1 28.0001 12.137)" fill="white"/>\n                            <path d="M11.8385 11.0844C11.9708 11.0181 12.1189 10.99 12.2663 11.0032C12.4136 11.0164 12.5543 11.0704 12.6727 11.1592L22.2239 18.3226C22.3228 18.3967 22.403 18.4929 22.4583 18.6034C22.5135 18.7139 22.5423 18.8358 22.5423 18.9593C22.5423 19.0829 22.5135 19.2048 22.4583 19.3153C22.403 19.4258 22.3228 19.522 22.2239 19.5961L12.6727 26.7595C12.5349 26.8629 12.3673 26.9187 12.1951 26.9187C12.0714 26.9182 11.9494 26.8894 11.8385 26.8343C11.7065 26.7682 11.5955 26.6666 11.5179 26.5409C11.4403 26.4152 11.3992 26.2705 11.3992 26.1228V11.7959C11.3992 11.6482 11.4403 11.5035 11.5179 11.3778C11.5955 11.2521 11.7065 11.1505 11.8385 11.0844Z" fill="white"/>\n                            </g>\n                            <defs>\n                            <filter id="filter3_d" x="0.39917" y="0" width="38.6009" height="37.9187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n                            <feOffset/>\n                            <feGaussianBlur stdDeviation="5.5"/>\n                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.64 0"/>\n                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n                            </filter>\n                            </defs>\n                            </svg>`
                        },
                        i = document.createElement("span");
                    e === p.PLAY && TRC.dom.addClass(i, t.HIDDEN), i.innerHTML = r[e];
                    const o = this.generateControlButtonOnClick(e);
                    return TRC.dom.on(i, "click", o), this.controls.insertAdjacentElement("beforeend", i), i
                }
                generateControlButtonOnClick(e) {
                    switch (e) {
                        case p.BACK:
                        case p.FORWARD:
                            return TRC.util.debounce(() => {
                                this.animationInProgress || (this.toggleMiddleControlButton(p.PLAY), this.slideCard(e === p.BACK ? "right" : "left", !0))
                            }, l, !0, this);
                        case p.PAUSE:
                        case p.PLAY:
                            return this.toggleMiddleControlButton.trcBind(this, e)
                    }
                }
                toggleMiddleControlButton(e) {
                    if (!this.animationInProgress) switch (this.playStateAnimation(u[e]), e) {
                        case p.PLAY:
                            TRC.dom.addClass(this.playButton, t.HIDDEN), TRC.dom.removeClass(this.pauseButton, t.HIDDEN);
                            break;
                        case p.PAUSE:
                            TRC.dom.addClass(this.pauseButton, t.HIDDEN), TRC.dom.removeClass(this.playButton, t.HIDDEN)
                    }
                }
                static getDirection(e) {
                    const t = e.trc.getProperty(e.mode_name, "direction", e.propertiesOverride);
                    return TRC.direction || t || "ltr"
                }
                static alignLabelsBox(e, t) {
                    const r = "rtl" === t ? i.LABELS_ALIGN_RIGHT : i.LABELS_ALIGN_LEFT;
                    TRC.dom.addClass(e.labelsBox, i.LABELS_ALIGN), TRC.dom.addClass(e.labelsBox, r)
                }
                listenToSwipeEvents(e) {
                    const t = {
                        start: {
                            screenX: 0,
                            screenY: 0
                        },
                        end: {
                            screenX: 0,
                            screenY: 0
                        }
                    };
                    TRC.dom.on(e, "touchstart", e => {
                        t.start = {
                            screenX: e.changedTouches[0].screenX,
                            screenY: e.changedTouches[0].screenY
                        }
                    }), TRC.dom.on(e, "touchend", r => {
                        t.end = {
                            screenX: r.changedTouches[0].screenX,
                            screenY: r.changedTouches[0].screenY
                        }, this.handleGesture(e, t)
                    })
                }
                handleGesture(e, t) {
                    const {
                        start: r,
                        end: i
                    } = t, o = e.getBoundingClientRect(), {
                        width: n,
                        height: s
                    } = o, a = (i.screenX - r.screenX) / n, l = (i.screenY - r.screenY) / s, c = .25;
                    return a > l && a > c ? this.slideCard("right", !0) : a < l && a < -c ? this.slideCard("left", !0) : void 0
                }
                calcCardHeight() {
                    let e = {
                        itemHeight: 0,
                        item: null
                    };
                    return this.items.forEach((r, i) => {
                        0 === i && (e.item = r);
                        const o = r.querySelector(".thumbBlock_holder");
                        o && o.insertAdjacentHTML("afterbegin", `<div class="thumbBlock_placeholder">${g.addASvgPlaceHolder()}</div>`);
                        const n = g.getOuter("height", r);
                        r.style.top = 0, n > e.itemHeight && (e = {
                            itemHeight: n,
                            item: r
                        }), this.isTouchDevice && this.listenToSwipeEvents(r.querySelector(`.${t.IMAGE_HOLDER}`))
                    }), e
                }
                responsiveAlignment(e) {
                    const {
                        progressBar: t,
                        arrows: r,
                        clickedAreas: i
                    } = this;
                    e.item.style.top = 0, this.calcImageHeight(), e.itemHeight > 0 && (this.internalc.style.height = `${e.itemHeight}px`);
                    const o = this.items[0];
                    let l = 0;
                    o && o.pre_detail_order && o.pre_detail_order.length > 0 && (l += g.getOuter("height", o.preLabelsBox));
                    const c = `${this.imageHeight-a+l}px`;
                    t.firstChild.style.top = 0, t.style.top = this.isTouchDevice ? `${l}px` : c, r.forEach(e => {
                        e.style.top = `${(this.imageHeight+l)/2-n/2}px`
                    }), i.forEach(e => {
                        e.style.width = `${this.imageWidth*s}px`
                    })
                }
                responsiveAlignmentTextUnder(e) {
                    const {
                        controls: t,
                        clickedAreas: r
                    } = this;
                    e.item.style.top = 0, this.calcImageHeight();
                    let i = 0;
                    this.items.forEach(e => {
                        const t = g.getOuter("height", e.querySelector(".video-label-box"));
                        i < t && (i = t)
                    }), e.itemHeight > 0 && (this.internalc.style.height = `${e.itemHeight+i+h}px`);
                    let o = .25;
                    const n = parseInt(this.imageHeight, 10);
                    n <= c ? (o = .37, !TRC.dom.containsClass(this.container, "tbl-reco-reel-touch-device") && TRC.dom.addClass(this.container, "tbl-reco-reel-touch-device"), TRC.dom.removeClass(this.container, "tbl-reco-reel-desktop")) : (!TRC.dom.containsClass(this.container, "tbl-reco-reel-desktop") && TRC.dom.addClass(this.container, "tbl-reco-reel-desktop"), TRC.dom.removeClass(this.container, "tbl-reco-reel-touch-device")), t.style.top = `${n-n*o}px`, this.isTouchDevice && r.forEach(e => {
                        e.style.width = `${this.imageWidth*s}px`
                    })
                }
                static calcLabelsTopByDetailsOrder(e) {
                    const t = e.querySelector(i.LABELS_BOX),
                        r = TRC.dom.isDesktop();
                    let o = r ? d : h;
                    const n = t.children;
                    for (let s = 0; s < n.length; s++) {
                        const e = n[s];
                        if (TRC.dom.containsClass(e, i.VIDEO_TITLE)) break;
                        const t = getComputedStyle(e).height,
                            r = parseInt(t, 10);
                        r > 0 ? o -= r : e.style.display = "none"
                    }
                    return r && o !== d || !r && o !== h ? o : ""
                }
                static insertBrandingBackground(e) {
                    const t = e.querySelector(i.LABELS_BRANDING);
                    TRC.dom.addClass(t, "tbl-branding-on-top");
                    const r = `<span class="tbl-text-under-branding-background"></span>`;
                    t.insertAdjacentHTML("beforeend", r)
                }
                addLabelsBoxAnimatedElements() {
                    this.items.forEach(e => {
                        const t = e.querySelector(i.LABELS),
                            r = g.calcLabelsTopByDetailsOrder(e);
                        if (r) {
                            const t = e.querySelector(i.LABELS_BOX);
                            t.style.top = `${r}px`, g.insertBrandingBackground(e)
                        }
                        const o = `<span class="tbl-ui-line-wrapper">\n                                             <span class="tbl-ui-line"></span></span>\n                                             <span class="tbl-text-under-title-background-wrapper">\n                                             <span class="tbl-text-under-title-background"></span></span>`;
                        t.insertAdjacentHTML("beforeend", o)
                    })
                }
                playStateAnimation(e) {
                    const {
                        activePB: t,
                        showItem: r
                    } = this.state, i = r.querySelector(".thumbBlock"), o = t.firstChild;
                    o && (o.style.webkitAnimationPlayState = e, o.style.animationPlayState = e), i && (i.style.webkitAnimationPlayState = e, i.style.animationPlayState = e)
                }
                createProgressBar() {
                    const e = document.createElement("div");
                    e.className = t.PROGRESS_BAR_OVERFLOW_WRAPPER;
                    const r = document.createElement("div");
                    return r.className = t.PROGRESS_BAR_WRAPPER, "under" === this.thumbnailPosition && TRC.dom.addClass(r, t.PROGRESS_BAR_WRAPPER_TEXT_OVER), r.insertAdjacentHTML("afterbegin", this.createProgressUnits()), this.progressBars = Array.prototype.slice.call(r.childNodes), this.state.activePB = this.progressBars[0], e.appendChild(r), e
                }
                createProgressUnits() {
                    let e = "";
                    for (let r = 0; this.amountOfItems > r; r++) e += `<div class="${t.PROGRESS_BAR}" style="width: ${100/this.amountOfItems-2}%" data-progress-bar-index="${r}"><span class="${t.PROGRESS_RUNNER}"></span></div>`;
                    return `${e}`
                }
                createArrowBtns() {
                    return ["left", "right"].map(e => {
                        const r = document.createElement("div");
                        return r.className = `${t.ARROW_BUTTON} tbl-arrow-${e}`, r.insertAdjacentHTML("beforeend", g.addASvgArrow()), TRC.dom.on(r, "click", this.slideCard.trcBind(this)), this.internalc.parentNode.appendChild(r), r
                    })
                }
                createMobileClickedArea() {
                    return [p.BACK, p.FORWARD].map(e => {
                        const r = document.createElement("div");
                        r.style.height = `${this.calcImageHeight()}px`;
                        const i = this.isTextUnderSlideIn ? this.generateControlButtonOnClick(e) : this.slideCard.trcBind(this);
                        return r.className = `${t.CLICKABLE_AREA} tbl-clickable-area-${e}`, TRC.dom.on(r, "click", i), this.internalc.parentNode.appendChild(r), r
                    })
                }
                startTheReel() {
                    if (this.isImageHeightChanged() && this.allowRecalculateSize) {
                        this.allowRecalculateSize = !1;
                        const e = this.calcCardHeight();
                        this.recalculateWidgetSize(e)
                    }
                    this.active = !0, this.restartAnimation()
                }
                isImageHeightChanged() {
                    const {
                        imageHeight: e
                    } = this;
                    return this.calcImageHeight(), e !== this.imageHeight
                }
                stopTheReel() {
                    this.active = !1
                }
                restartAnimation() {
                    setTimeout(() => {
                        this.isTextUnderSlideIn && this.calcLabelBoxSizes(), this.updateItem(), this.updateCarouselIteration("left")
                    })
                }
                slideCard(e, t) {
                    if (this.disableClickEvents) return !1;
                    const r = g.resolveAnimationDirection(e, t),
                        {
                            showItem: i
                        } = this.state;
                    return TRCImpl.sendAbTestEvent("recommendation-reel", `click_${"left"===r?"right":"left"}`), this.isTextUnderSlideIn ? this.hideAnimatedLabelBox(i, this.updateIteration.trcBind(this, r)) : this.updateIteration(r), !0
                }
                static resolveAnimationDirection(e, r) {
                    let i;
                    return i = r ? e : TRC.dom.containsClass(e.currentTarget, t.ARROW_BUTTON) ? TRC.dom.containsClass(e.currentTarget, "tbl-arrow-left") ? "right" : "left" : TRC.dom.containsClass(e.currentTarget, t.CLICKABLE_AREA) && TRC.dom.containsClass(e.currentTarget, "tbl-clickable-area-back") ? "right" : "left"
                }
                updateIteration(e) {
                    e = e || "left", this.debugWidget && this.debugSlider();
                    let r = 1;
                    const {
                        showNextItem: i,
                        currentPosition: o
                    } = this.state;
                    if ("right" === e) {
                        let e;
                        TRC.dom.removeClass(i, t.NEXT_ITEM), o ? (r = -1, e = o - 1) : e = r = this.amountOfItems - 1, TRC.dom.addClass(this.items[e], t.NEXT_ITEM)
                    }
                    const n = +o + r === this.amountOfItems ? 0 : o + r;
                    this.setState({
                        showPosition: n,
                        nextShowPosition: Number(n + 1) === this.amountOfItems ? 0 : n + 1
                    }), this.updateCarouselIteration(e)
                }
                setState({
                    showPosition: e,
                    nextShowPosition: t
                }) {
                    const r = this.items[e],
                        i = this.items[t],
                        o = this.progressBars[e];
                    return this.state = {
                        previousItem: this.state.showItem,
                        showItem: r,
                        showNextItem: i,
                        activePB: o,
                        previousPosition: this.state.currentPosition,
                        currentPosition: e
                    }
                }
                isFirstIteration() {
                    return null === this.state.previousPosition
                }
                updateCarouselIteration(e) {
                    if (!this.active) return;
                    const {
                        REMOVE_LEFT: r,
                        REMOVE_RIGHT: i
                    } = t, o = "left" === e ? r : i, {
                        previousPosition: n
                    } = this.state;
                    !this.isFirstIteration() && this.slideAnimation(o), this.updateProgressBar(), this.progressBars.length - 1 === n && (this.finishFirstCycle = !0)
                }
                debugSlider() {
                    const e = {},
                        r = ["SHOW_ITEM", "NEXT_ITEM", "REMOVE_LEFT", "REMOVE_RIGHT", "ZOOM_IN"];
                    this.items.forEach((i, o) => {
                        e[`item_${o}`] = {}, Object.keys(t).forEach(i => {
                            -1 !== r.indexOf(i) && (e[`item_${o}`][i] = TRC.dom.containsClass(t[i]) ? "X" : null)
                        })
                    }), console.log(`%c card ${this.container.dataset.cardIndex}`, `background: #5${10*this.container.dataset.cardIndex}; color: white`), console.table(e)
                }
                slideAnimation(e = t.REMOVE_LEFT) {
                    const r = this.state.previousPosition,
                        i = this.items[r];
                    TRC.dom.addClass(i, e)
                }
                updateProgressBar() {
                    const {
                        activePB: e,
                        currentPosition: r,
                        previousPosition: i
                    } = this.state;
                    this.isFirstIteration() || TRC.dom.removeClass(this.progressBars[i].firstChild, t.PROGRESS_ANIM), TRC.dom.addClass(e.firstChild, t.PROGRESS_ANIM), this.progressBars.forEach((e, t) => {
                        e.firstChild.style.left = r > t ? "0" : "-100%"
                    })
                }
                updateItem() {
                    const {
                        showItem: e,
                        showNextItem: r,
                        currentPosition: i
                    } = this.state;
                    this.clearThePreviousItem(), document.querySelector(`.${t.SHOW_ITEM}`) && this.clearAll(), TRC.dom.addClass(e, `${t.SHOW_ITEM} ${t.ZOOM_IN}`), TRC.dom.removeClass(e, t.NEXT_ITEM), TRC.dom.addClass(r, t.NEXT_ITEM), this.finishFirstCycle || TRCImpl.sendAbTestEvent("recommendation-reel", `Visible_${i+1}`)
                }
                clearThePreviousItem() {
                    const {
                        previousItem: e
                    } = this.state;
                    return !!e && (g.clearClassNames(e), !0)
                }
                clearAll() {
                    this.items.forEach(e => (g.clearClassNames(e), !0))
                }
                static clearClassNames(e) {
                    TRC.dom.removeClass(e, t.SHOW_ITEM), TRC.dom.removeClass(e, t.REMOVE_LEFT), TRC.dom.removeClass(e, t.REMOVE_RIGHT), t.ZOOM_IN && TRC.dom.removeClass(e, t.ZOOM_IN)
                }
                calcLabelBoxSizes() {
                    requestAnimationFrame(() => {
                        this.items.forEach(e => {
                            const t = e.querySelector(".item-label-href .video-title"),
                                r = e.querySelector(".item-label-href .tbl-ui-line-wrapper"),
                                i = e.querySelector(".item-label-href .tbl-text-under-title-background-wrapper"),
                                o = getComputedStyle(t);
                            e.titleElemsAndSizes = {
                                line: r,
                                background: i,
                                titleHeight: `${parseInt(o.height,10)+20}px`,
                                titleWidth: `${parseInt(o.width,10)+20}px`
                            }
                        }), this.items.forEach(e => {
                            const {
                                line: t,
                                background: r,
                                titleHeight: i,
                                titleWidth: o
                            } = e.titleElemsAndSizes;
                            t && (t.style.height = i), r && (r.style.height = i, r.style.width = o)
                        })
                    })
                }
                static getLabelBoxElements(e) {
                    return {
                        href: e.querySelector(".item-label-href"),
                        title: e.querySelector(".item-label-href .video-title"),
                        background: e.querySelector(".item-label-href .tbl-text-under-title-background"),
                        branding: e.querySelector(".item-label-href .branding"),
                        description: e.querySelector(".item-label-href .video-description"),
                        line: e.querySelector(".item-label-href .tbl-ui-line")
                    }
                }
                showAnimatedLabelBox(e) {
                    const r = g.getLabelBoxElements(e);
                    Object.keys(r).forEach(e => {
                        TRC.dom.removeClass(r[e], t.LABEL_SHOW)
                    }), r.href && (r.href.style.zIndex = "2"), TRC.dom.addClass(r.line, t.LABEL_SHOW), setTimeout(() => {
                        TRC.dom.addClass(r.background, t.LABEL_SHOW), TRC.dom.addClass(r.branding, t.LABEL_SHOW), TRC.dom.addClass(r.description, t.LABEL_SHOW), setTimeout(() => {
                            TRC.dom.addClass(r.title, t.LABEL_SHOW), this.animationInProgress = !1
                        }, l)
                    }, l)
                }
                hideAnimatedLabelBox(e, r) {
                    if (this.animationInProgress) return;
                    this.animationInProgress = !0;
                    const i = g.getLabelBoxElements(e);
                    TRC.dom.removeClass(i.title, t.LABEL_SHOW), setTimeout(() => {
                        TRC.dom.removeClass(i.background, t.LABEL_SHOW), TRC.dom.removeClass(i.branding, t.LABEL_SHOW), TRC.dom.removeClass(i.description, t.LABEL_SHOW), setTimeout(() => {
                            TRC.dom.removeClass(i.line, t.LABEL_SHOW), setTimeout(() => {
                                i.href && (i.href.style.zIndex = "-1"), r()
                            }, l)
                        }, l)
                    }, l)
                }
                animationStartHandler(e) {
                    if (this.isTextUnderSlideIn) {
                        const {
                            showItem: t
                        } = this.state;
                        e.animationName === r.PROGRESS_BAR_ANIMATION && this.showAnimatedLabelBox(t)
                    } - 1 !== o.indexOf(e.animationName) && (this.disableClickEvents = !0)
                }
                animationEndHandler(e) {
                    if (e.animationName === r.PROGRESS_BAR_ANIMATION)
                        if (this.disableClickEvents = !1, this.isTextUnderSlideIn) {
                            const {
                                showItem: e
                            } = this.state;
                            this.hideAnimatedLabelBox(e, this.updateIteration.trcBind(this))
                        } else this.updateIteration(); - 1 !== o.indexOf(e.animationName) && (this.disableClickEvents = !1, this.updateItem())
                }
            }
            TRC.RecommendationReel = g
        }(), (() => {
            const e = "Feed - Explore More",
                t = "api::render",
                r = 5,
                i = 1,
                o = "2500px",
                n = {
                    threshold: 0,
                    disableCheckOverlay: !0,
                    root: null
                };
            class s {
                constructor(e) {
                    this.trcManager = e, this.cardsCounters = {}, this.lazyBatches = {}, this.init()
                }
                init() {
                    this.isLazyRenderEnabled = "boolean" == typeof this.isLazyRenderEnabled ? this.isLazyRenderEnabled : this.checkLazyRenderEnabled(), this.isLazyRenderEnabled && this.setLazyConfig()
                }
                checkLazyRenderEnabled() {
                    const {
                        global: e,
                        yieldingEnabled: t,
                        framework: r
                    } = this.trcManager, i = !(!e || !e["lazy-render-enable"]), o = !t, n = !r, s = !TRC.dom.isInIframe(!0);
                    return i && o && n && s
                }
                setLazyConfig() {
                    const t = this.trcManager.global["lazy-render"] || {},
                        {
                            excPlc: r,
                            sbKill: i,
                            dispatchPlacements: o,
                            raKill: n
                        } = t;
                    this.lazyConfig = {
                        excludePlacements: TRC.util.isArray(r) ? r : [e],
                        sbKill: TRC.util.isTrue(i),
                        dispatchPlacements: s.getDispatchPlacements(o),
                        raKill: TRC.util.isTrue(n)
                    }, this.lazyConfig.sbKill && (TRC.pageLevelFeaturesManager.pageLevelFeatures.sb_kill = !0), this.placementsConfigs = {}, __trcCopyProps(s.proxyPlacementLevelConfigs(t), this.lazyConfig)
                }
                getPlacementConfig(e, t) {
                    const {
                        unifiedPlacement: r
                    } = t;
                    return this.isFppEnabled(r) && this.placementsConfigs[r][e] || this.lazyConfig[e]
                }
                setPlacementsConfig(e) {
                    e && Object.keys(e).forEach(t => {
                        this.placementsConfigs[t] = s.proxyPlacementLevelConfigs(e[t])
                    })
                }
                static proxyPlacementLevelConfigs(e) {
                    const {
                        enable: t,
                        rootMargin: n,
                        minCards: s,
                        maxBatch: a,
                        fullLazyBatch: l,
                        dispatchEnabled: c
                    } = e;
                    return {
                        enable: TRC.util.isTrue(t),
                        minCards: TRC.util.isNumber(s) ? parseInt(s, 10) : r,
                        maxBatch: TRC.util.isNumber(a) ? parseInt(a, 10) : i,
                        rootMargin: "string" == typeof n && n.indexOf("px") > 1 ? n : o,
                        fullLazyBatch: TRC.util.isTrue(l),
                        dispatchEnabled: TRC.util.isTrue(c)
                    }
                }
                static getDispatchPlacements(e) {
                    return Array.isArray(e) ? e : "string" == typeof e ? __trcUnJSONify(e) : []
                }
                static hasVideo(e) {
                    if (e.trcResponse && e.trcResponse.vtag) return !0
                }
                isLazyBatch(e, t) {
                    return !!(this.getPlacementConfig("maxBatch", t) >= e || t.isCache)
                }
                addResponse(e) {
                    const t = e.trc.vl;
                    this.onePlacementRendered = !1, e.trc.f ? this.updateCardsCounters(t) : this.onePlacementRendered = !0
                }
                updateCardsCounters(e) {
                    e.forEach(e => {
                        if (e.fb) {
                            const {
                                uuip: t,
                                fb: r
                            } = e;
                            this.cardsCounters[t] = this.cardsCounters[t] || {}, this.cardsCounters[t][r] = this.cardsCounters[t][r] ? ++this.cardsCounters[t][r] : 1
                        }
                    })
                }
                placementRender(e) {
                    (void 0 !== e.container || e.addWidget) && (this.trcManager.yieldingEnabled ? this.yieldRenderer(e) : this.isLazyRenderEnabled && this.isLazyPlacement(e) ? this.lazyRenderer(e) : this.standardRenderer(e))
                }
                getBatchThreshold(e, t) {
                    const {
                        uiBatchNumberCounter: r,
                        parentPlacementData: i
                    } = e;
                    if (this.isValidLazyPlacement(i) && this.isLazyBatch(r, i)) {
                        const e = this.getNumberOfCards(i.unifiedPlacement, r),
                            o = this.getPlacementConfig("minCards", i);
                        return e && e > o ? Math.floor(t * o / e) : t
                    }
                    return t
                }
                getNumberOfCards(e, t) {
                    try {
                        return this.cardsCounters[e][t]
                    } catch (r) {
                        return __trcError(`failed to get number of cards for lazy rendering :- ${e} | ${t}`), 0
                    }
                }
                isValidLazyPlacement(e) {
                    const {
                        unifiedPlacement: t,
                        placement: r
                    } = e, i = t || r;
                    if (s.hasVideo(e)) return !1;
                    if (e.isStories) {
                        const t = this.trcManager.storiesManager.stories[e.parentStories.unifiedPlacementName];
                        if (t.isFirstCardRendered) return t.isFirstCardRendered = !0, !1
                    }
                    if (this.isFppEnabled(i)) return !0;
                    if (this.isFppDisabled(i) || !this.lazyConfig.enable) return !1;
                    const o = this.lazyConfig.excludePlacements.indexOf(i) > -1,
                        n = !(!e.trcResponse || !e.trcResponse.nup);
                    return !n && !o
                }
                isFppEnabled(e) {
                    const t = this.placementsConfigs[e];
                    return !(!t || !TRC.util.isTrue(t.enable))
                }
                isFppDisabled(e) {
                    const t = this.placementsConfigs[e];
                    return !(!t || !TRC.util.isFalse(t.enable))
                }
                yieldRenderer(e) {
                    this.trcManager.loadRBoxDrawQueue(e)
                }
                standardRenderer(e) {
                    this.onePlacementRendered = !1, this.trcManager.internalDrawRBox(e)
                }
                static getRootElement(e) {
                    return e.parentFeed && e.parentFeed.infiniteScrollEngine.observerScrollElement.children ? e.parentFeed.infiniteScrollEngine.observerScrollElement : null
                }
                lazyRenderer(e) {
                    const t = this.getPlacementConfig("minCards", e),
                        {
                            unifiedPlacement: r
                        } = e;
                    if (void 0 === r || e.modeGroupOrder > t) {
                        const t = this.getPlacementConfig("fullLazyBatch", e),
                            {
                                dispatchPlacements: i
                            } = this.lazyConfig,
                            o = this.getPlacementConfig("dispatchEnabled", e) || i.indexOf(r) > -1;
                        o ? this.dispatchPlacements(e) : r && t && this.lazyBatches[r] ? this.pushLazyBatchPlacement(e) : this.setObserverParams(e)
                    } else this.standardRenderer(e)
                }
                dispatchPlacements(e) {
                    this.pushLazyBatchPlacement(e), this.listener || (this.listener = TRC.listen("render-placement", e => {
                        this.lazyRenderBatch(e.placement, e.cb)
                    }))
                }
                setObserverParams(e) {
                    const t = this.getObserverConfig(e),
                        r = TRC.IntersectionObserver ? new TRC.IntersectionObserver(t.onEnter, t.observerParams) : new IntersectionObserver(t.onEnter, t.observerParams);
                    r.observe(e.container)
                }
                isLazyPlacement(e) {
                    return !(this.onRenderApiKill() || this.onePlacementRendered || !e.container || !this.isValidLazyPlacement(e)) && (!e.trcResponse.fb || this.isLazyBatch(e.trcResponse.fb, e))
                }
                onRenderApiKill() {
                    const e = TRC.getEventsMap()[t];
                    return !!(this.lazyConfig.raKill && Array.isArray(e) && e.length > 0)
                }
                pushLazyBatchPlacement(e) {
                    const t = this.lazyBatches[e.unifiedPlacement];
                    t ? this.lazyBatches[e.unifiedPlacement].push(e) : this.lazyBatches[e.unifiedPlacement] = [e]
                }
                lazyRenderBatch(e, t) {
                    const r = this.lazyBatches[e];
                    r && (r.forEach(e => this.standardRenderer(e)), delete this.lazyBatches[e]), t && t()
                }
                getObserverConfig(e) {
                    let t;
                    const r = __trcCopyProps(n, {});
                    return r.root = s.getRootElement(e), r.rootMargin = this.getPlacementConfig("rootMargin", e), this.getPlacementConfig("fullLazyBatch", e) ? (this.pushLazyBatchPlacement(e), t = this.lazyRenderBatch.trcBind(this, e.unifiedPlacement)) : t = this.trcManager.internalDrawRBox.trcBind(this.trcManager, e), {
                        targetElement: e.container,
                        observerParams: r,
                        onEnter: (r, i) => {
                            r[0].isIntersecting && (t(), i.unobserve(e.container))
                        }
                    }
                }
            }
            TRC.RenderControl = s
        })(), (() => {
            const e = "tbl_rtus_id",
                t = 1,
                r = 2,
                i = 42,
                o = 91,
                n = "RealTimeUserSyncMain",
                s = "RealTimeUserSyncCallback";
            class a {
                constructor(e) {
                    this.trc = e, this.localStorage = e.pageManager.getLocalStorageImplementation()
                }
                applyRtus() {
                    this.trc.ccpaPs ? (this._log("ccpaPushTriggerRtus"), this._validateCcpaConsentAndCallRtusWithCcpaParams(this.trc.ccpaPs)) : "function" == typeof window.__uspapi ? this._applyRtusWithCcpa() : "function" == typeof window.__tcfapi ? this._applyRtusWithGdpr() : "function" == typeof window.__cmp ? this._log("gdprV1") : (this._log("default"), this._triggerRtusCall(""))
                }
                _applyRtusWithCcpa() {
                    window.__uspapi("getUSPData", t, (e, t) => {
                        try {
                            t ? (this._log("ccpaApiTriggerRtus"), this._validateCcpaConsentAndCallRtusWithCcpaParams(e.uspString)) : this._log("ccpaApiFail")
                        } catch (e) {
                            this._log("ccpaApiError")
                        }
                    })
                }
                _validateCcpaConsentAndCallRtusWithCcpaParams(e) {
                    if ("Y" === e.charAt(2)) return;
                    const t = `&us_privacy=${e}&gdpr=0&gdpr_consent=&gdpr_pd=`;
                    this._triggerRtusCall(t)
                }
                _applyRtusWithGdpr() {
                    window.__tcfapi("getTCData", r, (e, t) => {
                        try {
                            t ? TRC.Rtus.shouldCallRtusWithGdprParams(e) ? (this._log("gdprV2triggerRtus"), this._callRtusWithGdprParams(e)) : this._log("gdprV2notTriggerRtus") : this._log("gdprV2fail")
                        } catch (e) {
                            this._log("gdprV2error")
                        }
                    }, [i, o])
                }
                static shouldCallRtusWithGdprParams(e) {
                    return TRC.Rtus.isGdprNotApplies(e) || TRC.Rtus.hasConsent(e)
                }
                static isGdprNotApplies(e) {
                    return !e.gdprApplies
                }
                static hasConsent(e) {
                    const {
                        consents: t
                    } = e.vendor || {};
                    return t[i] && t[o]
                }
                _callRtusWithGdprParams(e) {
                    const t = `&us_privacy=&gdpr=${e.gdprApplies?1:0}&gdpr_consent=${e.tcString}&gdpr_pd=0`;
                    this._triggerRtusCall(t)
                }
                _triggerRtusCall(t) {
                    const r = "getRTUS",
                        i = `//gum.criteo.com/sync?c=72&r=2&j=TRC.${r}${t}`;
                    this._setRtusCallback(r), this.trc.performance && this.trc.performance.mark(`${n}Start`, null, n, 0, n, this.trc.PerfEvenType.START), this.trc.performance && this.trc.performance.mark(`${s}Start`, null, s, 0, s, this.trc.PerfEvenType.START);
                    try {
                        this.trc.net.loadScript(i, "js", null, null, !0), this.trc.pConsole("page", "info", "injected RTUS service")
                    } catch (e) {
                        __trcWarn("Error during RTUS loading asset file: ", e)
                    }
                    try {
                        this.trc.rtbRealTimeUserId = this.localStorage.getValue(e)
                    } catch (e) {
                        __trcWarn("Error during fetching RTUI from local storage: ", e)
                    }
                }
                _setRtusCallback(t) {
                    this.trc[t] = (t => {
                        try {
                            this.trc.performance && this.trc.performance.mark(`${s}Stop`, null, s, 0, s, this.trc.PerfEvenType.STOP);
                            const {
                                status: r,
                                userid: i
                            } = t || {};
                            "OK" === r ? (this.trc.rtbRealTimeUserId = i, this.localStorage.setValue(e, i)) : (this.trc.rtbRealTimeUserId = null, this.localStorage.removeKey(e))
                        } catch (e) {
                            __trcWarn("Error during RTUS callback: ", e)
                        }
                    })
                }
                _log(e) {
                    this.trc.RBoxUsage.logUsage("rtus", {
                        file: "rtus.js",
                        method: "injectRtus",
                        position: e
                    })
                }
            }
            TRC.Rtus = a
        })(), TRC.ScriptRenderer = {
            render(e, t) {
                e && e.js ? (e.normalizedTag = TRC.text.htmlUnescape(e.js), this.renderInIframe(this.createIframe(t.container), e)) : __trcError("could not find script to render")
            },
            createIframe(e) {
                if (!e) return void __trcError("could not find container to create Iframe within");
                const t = document.createElement("iframe");
                return t.style.border = t.frameBorder = t.border = "0", t.style.display = "block", t.scrolling = "no", e.appendChild(t), t
            },
            renderInIframe(e, t) {
                if (!e) return void __trcError("could not find iframe to render within");
                let r = e.contentWindow || e.contentDocument;
                r.document && (r = r.document), this.setOuterIframeStyle(e, t), this.runTagInIframe(r, t.normalizedTag), this.resetStyleInIframe(r)
            },
            setOuterIframeStyle(e, t) {
                e.style.width = t.w || "0px", e.style.height = t.h || "0px"
            },
            runTagInIframe(e, t) {
                void 0 !== t && null !== t ? (e.open(), e.write(t), e.close()) : __trcError("could not find normalizedTag to render")
            },
            resetStyleInIframe(e) {
                const t = e.createElement("style"),
                    r = "body { margin: 0px }";
                t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = r : t.appendChild(e.createTextNode(r)), e.getElementsByTagName("head")[0].appendChild(t)
            }
        }, (() => {
            function e(e) {
                try {
                    if (!e || !e.ks || !e.ks.pl) return !1;
                    const t = TRC.URL.prototype.getParameter.call(location.href, "tbl_force_taboola", !1);
                    return !(parseInt(t, 10) || "true" === t)
                } catch (e) {
                    return !1
                }
            }

            function t(t, r) {
                let i = !1;
                try {
                    if (!e(r)) return !1;
                    const o = t.fpl,
                        n = t.uip,
                        s = n || o;
                    if (-1 !== r.ks.pl.indexOf(s)) return !0;
                    r.ks.pl.forEach(e => {
                        if (TRC.text.isEndWith(e, "$")) {
                            const t = new RegExp(e);
                            t.test(s) && (i = !0)
                        }
                    })
                } catch (e) {
                    __trcError("SectionFront personalization killSwitchEnabled Error", e)
                }
                return i
            }
            TRC.personalizationApi = {
                killSwitchEnabled: t
            }
        })(),
        function(e, t) {
            TRC.SpotlightLoader = {
                load: function(e) {
                    this.shouldLoad(e) && (this.loadedScript ? TRC.dispatch("trc_afterRboxDraw") : (__trcDebug("Detected Spotlight Administrator(" + e.trc["pi"] + ")"), TRC.backstageDomainPrefix = e.trc["bdp"], TRC.backstageDomainSuffix = e.trc["bds"], this.loadedScript = TRC.URL.prototype.switchProtocol.call(TRC.getBackstageUrl() + "resources/js/1.1.0/spotlight.js", TRC.PROTOCOL), TRC.Manager.prototype.loadExternal(this.loadedScript, "js")))
                },
                shouldLoad: function(e) {
                    return !(!t.querySelectorAll || TRC.Device.isTouchDevice || !e || !e.trc || "1" != e.trc["sl"])
                },
                registerOnMainContainer: function(e, t) {
                    e && this.shouldLoad(t) && e.setAttribute("data-spotlight-publisher-id", t.trc["pi"])
                }
            }
        }(window, document), (() => {
            class e {
                constructor(e, t) {
                    this._createInstanceList(e, t)
                }
                _createInstanceList(e, t) {
                    if (TRC[t] || __trcError(`${t} does not exist under TRC`, null), TRC[t].instances) {
                        if (TRC[t].instances[e]) throw new Error("instance already exists under this uniqueid");
                        return void(TRC[t].instances[e] = this)
                    }
                    const r = function(e) {
                        return TRC[this].instances ? TRC[this].instances[e] : null
                    };
                    TRC[t].instances = {}, TRC[t].getInstance = r.bind(t), TRC[t].instances[e] = this
                }
            }
            TRC.StoriesBase = e
        })(), TRC.listen("stories-initiation", () => {
            const e = {
                    CAROUSEL_ANIMATION: "bouncing-animation",
                    CAROUSEL_CONTAINER: "tbl-stories-carousel-container",
                    CAROUSEL_TOPICS_WRAPPER: "tbl-stories-topics-wrapper",
                    CAROUSEL_TOPIC_CONTAINER: "tbl-stories-topics-container",
                    CAROUSEL_TOPIC_IMAGE_WRAPPER: "tbl-stories-topic-image-wrapper",
                    CAROUSEL_TOPIC_TITLE: "tbl-stories-topic-title",
                    CAROUSEL_TOPIC_IMAGE: "tbl-stories-topic-image",
                    CAROUSEL_TOPIC_CLICK_LOADING: "tbl-stories-topic-loading",
                    CAROUSEL_ONBOARDING: "tbl-stories-onboarding",
                    CAROUSEL_ONBOARDING_STATIC: "tbl-stories-onboarding-static",
                    CAROUSEL_READY: "tbl-stories-carousel-ready"
                },
                t = {
                    CATEGORIES_DISPLAYED: "categoriesDisplayed"
                },
                r = {
                    cs: "#4472c4",
                    ce: "#00b5d9"
                },
                i = {
                    TOPIC_CLICKED: "topic-click"
                },
                o = {
                    LONG_VISIBLE_TIMEOUT: 3e3,
                    ON_BOARDING_TEXT: "New! Click to view visual Stories",
                    ON_BOARDING_COLOR: "#2676F7",
                    ON_BOARDING_FIRST_WORDS: 1
                };
            class n extends TRC.StoriesBase {
                constructor(e, t) {
                    super(e, "StoriesCarousel");
                    try {
                        this.unifiedPlacementName = e, this.eventsManager = TRC.StoriesEventsManager.getInstance(e), this.options = this.getCarouselOptions(), this.injectCarouselStyle(), this.createCarouselLayout(), this.setStickyStories(t), this.eventsManager.observeCarousel(this)
                    } catch (e) {
                        this.eventsManager.onError(`StoriesCarousel instance`, e)
                    }
                }
                injectCarouselStyle() {
                    const {
                        onBoardingColor: e,
                        extendedStyle: t
                    } = this.options;
                    TRC.dom.injectStyle(`.tbl-stories-carousel-container { box-sizing: initial; float: initial; padding: initial; width: initial; vertical-align: initial; border: initial; }.tbl-stories-carousel-container .tbl-stories-topic-image { top: 0; left: 0; bottom: 0; right: 0; }.bouncing-animation > li { transform: translateY(-100%); -webkit-animation: bouncingDown 1s ease-in-out 1s forwards; -moz-animation: bouncingDown 1s ease-in-out 1s forwards; -ms-animation: bouncingDown 1s ease-in-out 1s forwards; -o-animation: bouncingDown 1s ease-in-out 1s forwards; animation: bouncingDown 1s ease-in-out 1s forwards; }.bouncing-animation > li:nth-child(1) { -webkit-animation: bouncingDown 1s ease-in-out 0.1s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.1s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.1s forwards; -o-animation: bouncingDown 1s ease-in-out 0.1s forwards; animation: bouncingDown 1s ease-in-out 0.1s forwards; }.bouncing-animation > li:nth-child(2) { -webkit-animation: bouncingDown 1s ease-in-out 0.2s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.2s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.2s forwards; -o-animation: bouncingDown 1s ease-in-out 0.2s forwards; animation: bouncingDown 1s ease-in-out 0.2s forwards; }.bouncing-animation > li:nth-child(3) { -webkit-animation: bouncingDown 1s ease-in-out 0.3s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.3s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.3s forwards; -o-animation: bouncingDown 1s ease-in-out 0.3s forwards; animation: bouncingDown 1s ease-in-out 0.3s forwards; }.bouncing-animation > li:nth-child(4) { -webkit-animation: bouncingDown 1s ease-in-out 0.4s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.4s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.4s forwards; -o-animation: bouncingDown 1s ease-in-out 0.4s forwards; animation: bouncingDown 1s ease-in-out 0.4s forwards; }.bouncing-animation > li:nth-child(5) { -webkit-animation: bouncingDown 1s ease-in-out 0.5s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.5s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.5s forwards; -o-animation: bouncingDown 1s ease-in-out 0.5s forwards; animation: bouncingDown 1s ease-in-out 0.5s forwards; }.bouncing-animation > li:nth-child(6) { -webkit-animation: bouncingDown 1s ease-in-out 0.6s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.6s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.6s forwards; -o-animation: bouncingDown 1s ease-in-out 0.6s forwards; animation: bouncingDown 1s ease-in-out 0.6s forwards; }.bouncing-animation > li:nth-child(7) { -webkit-animation: bouncingDown 1s ease-in-out 0.7s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.7s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.7s forwards; -o-animation: bouncingDown 1s ease-in-out 0.7s forwards; animation: bouncingDown 1s ease-in-out 0.7s forwards; }.bouncing-animation > li:nth-child(8) { -webkit-animation: bouncingDown 1s ease-in-out 0.8s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.8s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.8s forwards; -o-animation: bouncingDown 1s ease-in-out 0.8s forwards; animation: bouncingDown 1s ease-in-out 0.8s forwards; }.bouncing-animation > li:nth-child(9) { -webkit-animation: bouncingDown 1s ease-in-out 0.9s forwards; -moz-animation: bouncingDown 1s ease-in-out 0.9s forwards; -ms-animation: bouncingDown 1s ease-in-out 0.9s forwards; -o-animation: bouncingDown 1s ease-in-out 0.9s forwards; animation: bouncingDown 1s ease-in-out 0.9s forwards; }.bouncing-animation > li:nth-child(10) { -webkit-animation: bouncingDown 1s ease-in-out 1s forwards; -moz-animation: bouncingDown 1s ease-in-out 1s forwards; -ms-animation: bouncingDown 1s ease-in-out 1s forwards; -o-animation: bouncingDown 1s ease-in-out 1s forwards; animation: bouncingDown 1s ease-in-out 1s forwards; }.tbl-stories-carousel-container { position: relative; overflow: hidden; } .tbl-stories-carousel-container .tbl-stories-topics-wrapper { overflow-y: hidden; overflow-x: scroll; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; margin: 0; padding: 0 5px; z-index: 0; } .tbl-stories-carousel-container .tbl-stories-topics-wrapper::-webkit-scrollbar { display: none; } .tbl-stories-carousel-container .tbl-stories-topics-container { list-style: none; text-align: center; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: 72px; position: relative; } .tbl-stories-carousel-container .tbl-stories-topic-image-wrapper { height: 64px; width: 64px; position: relative; left: 0; top: 0; border-radius: 32px; margin: 0 4px; z-index: 0; } .tbl-stories-carousel-container .tbl-stories-topic-image-wrapper svg { vertical-align: inherit; fill: transparent; } .tbl-stories-carousel-container .tbl-stories-topic-title { position: relative; bottom: 0; left: 0; width: 100%; font-size: 12px; font-weight: normal; font-style: normal; display: block; padding: 4px 0 0; word-break: break-word; word-wrap: break-word; } .tbl-stories-carousel-container .tbl-stories-topic-loading svg { animation: tbl-stories-rotate 2s infinite linear; -webkit-animation: tbl-stories-rotate 2s infinite linear; } .tbl-stories-carousel-container .tbl-stories-topic-loading .tbl-stories-topic-image { filter: grayscale(100%); } .tbl-stories-carousel-container .tbl-stories-onboarding { position: absolute; opacity: 0; background-color: ${e}; color: #fcfcfc; padding: 0 15px; z-index: 1; right: 0; -webkit-transform: translateX(-100vh); -ms-transform: translateX(-100vh); transform: translateX(-100vh); border-radius: 16px 0 0 16px; font-size: 12px; height: 30px; line-height: 30px; top: 0; } .tbl-stories-carousel-container .tbl-stories-onboarding-static { position: relative; font-size: 14px; color: initial; padding: 5px 15px; z-index: 1; line-height: initial; overflow-y: hidden; } .tbl-stories-carousel-container .tbl-stories-topic-image { width: 60px; height: 60px; border: 2px solid #fcfcfc; position: absolute; border-radius: 50%; z-index: 1; opacity: 0; transition: opacity 1s ease-in, filter 1s ease-in; box-sizing: border-box; margin: auto; overflow: auto; } .tbl-stories-carousel-container.tbl-stories-carousel-ready .tbl-stories-topic-image { opacity: 1; } .tbl-stories-carousel-container.tbl-stories-carousel-ready .tbl-stories-onboarding { -webkit-animation: tbl-stories-onboarding-fade 6s linear; animation: tbl-stories-onboarding-fade 6s linear; -webkit-animation-delay: 2s; animation-delay: 2s; }@-webkit-keyframes tbl-stories-rotate { from { -webkit-transform: rotate(-360deg); transform: rotate(-360deg); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }@keyframes tbl-stories-rotate { from { -webkit-transform: rotate(-360deg); transform: rotate(-360deg); } to { -webkit-transform: rotate(360deg); transform: rotate(360deg); } }@-webkit-keyframes tbl-stories-onboarding-fade { 0%, 100% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0; } 10%, 90% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0.8; } }@keyframes tbl-stories-onboarding-fade { 0%, 100% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0; } 10%, 90% { -webkit-transform: translate(0, -10px); transform: translate(0, -10px); opacity: 0.8; } }@-webkit-keyframes bouncingDown { 0% { -webkit-transform: translateY(-100%); } 50% { -webkit-transform: translateY(10px); } 100% { -webkit-transform: translateY(0); } }@keyframes bouncingDown { 0% { transform: translateY(-100%); } 50% { transform: translateY(10px); } 100% { transform: translateY(0); } }`), t && TRC.dom.injectStyle(t)
                }
                carouselReady() {
                    requestAnimationFrame(() => {
                        TRC.dom.addClass(this.carouselContainer, e.CAROUSEL_READY), TRC.dom.addClass(this.topicsList, e.CAROUSEL_ANIMATION)
                    })
                }
                getCarouselOptions() {
                    const {
                        options: e
                    } = this.eventsManager;
                    let {
                        cc: t
                    } = e.storiesUi;
                    t || (t = {});
                    let {
                        ob: i
                    } = t;
                    return i || (i = {}), {
                        extendedStyle: t.style || "",
                        topicBorderColor: t.tc || r,
                        onBoardingEnableTooltip: !!i.obet || !1,
                        onBoardingColor: i.obc || o.ON_BOARDING_COLOR,
                        onBoardingText: i.obtxt || o.ON_BOARDING_TEXT,
                        onBoardingFirstWordsNum: i.obfwn ? parseInt(i.obfwn, 10) : o.ON_BOARDING_FIRST_WORDS,
                        useCloudinaryCroppingForThumbs: void 0 === t.clcrt || TRC.util.isTrue(t.clcrt),
                        visibleDuration: t.vsd ? parseInt(t.vsd, 10) : o.LONG_VISIBLE_TIMEOUT,
                        stickyStories: t.stcy
                    }
                }
                createCarouselLayout() {
                    this.carouselContainer = TRC.dom.createHTMLElement("nav", {
                        className: e.CAROUSEL_CONTAINER
                    }), this.topicsList = TRC.dom.createHTMLElement("ul", {
                        className: e.CAROUSEL_TOPICS_WRAPPER
                    }), this.carouselContainer.insertAdjacentHTML("afterbegin", this.getOnBoarding()), this.carouselContainer.appendChild(this.topicsList)
                }
                addTopic(e) {
                    this.topicsList.insertAdjacentElement("beforeend", this.getTopicElement(e))
                }
                getTopicElement({
                    id: t,
                    imageUrl: r,
                    title: i,
                    slotPosition: o
                }) {
                    const n = TRC.dom.createHTMLElement("li", {
                            className: e.CAROUSEL_TOPIC_CONTAINER,
                            topicName: i,
                            topicPosition: o,
                            topicId: t
                        }),
                        s = `<div class="${e.CAROUSEL_TOPIC_IMAGE_WRAPPER}">\n                            <img alt="${t}" class="${e.CAROUSEL_TOPIC_IMAGE}" src="${r}" onerror="this.style.display='none'">\n                            ${this.getBorderTopic()}\n                           </div>`,
                        a = `<label class="${e.CAROUSEL_TOPIC_TITLE}">${i}</label>`;
                    return n.insertAdjacentHTML("afterbegin", `${s}${a}`), TRC.CustomModulesManager.runHook("stories-topic-rendered", null, this, t, n, i), TRC.dom.on(n, "click", this.carouselTopicClickHandler.trcBind(this, t)), this.eventsManager.observeCarouselTopic(n), n
                }
                carouselTopicClickHandler(e, r) {
                    const o = TRC.Stories.getInstance(this.unifiedPlacementName),
                        s = o.topics[e],
                        {
                            videoTag: a
                        } = o.options;
                    n.clickOnCarouselTopicLoadingIndication(r.currentTarget), TRC.StoriesVerticalUi ? o.renderVerticalUiPlacements(s) : TRC.listen("vertical-ui-loaded", o.renderVerticalUiPlacements.trcBind(o, s));
                    const l = s.title,
                        c = s.slotPosition;
                    this.eventsManager.sendEvent(i.TOPIC_CLICKED, {
                        ab: [l, c],
                        mxp: {
                            topicName: l,
                            topicPosition: c
                        }
                    }), a && TRC.StoriesVideoManager && TRC.dispatch(t.CATEGORIES_DISPLAYED)
                }
                carouselSDKTopicClickHandler(e) {
                    const t = TRC.Stories.getInstance(this.unifiedPlacementName),
                        r = t.topics[e];
                    TRC.StoriesVerticalUi ? t.renderVerticalUiPlacements(r, !0) : TRC.listen("vertical-ui-loaded", t.renderVerticalUiPlacements.trcBind(t, r))
                }
                getBorderTopic() {
                    const {
                        topicBorderColor: e
                    } = this.options;
                    return `<svg height="64px" width="64px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xml:space="preserve">  \n                            <linearGradient id="topic-background-grad" x1="0%" y1="0%" x2="100%" y2="0%">\n                                <stop offset="0%" style="stop-color:${e.cs};stop-opacity:1"></stop>\n                                <stop offset="100%" style="stop-color:${e.ce};stop-opacity:1"></stop>\n                            </linearGradient>\n                            <circle cx="50" cy="50" r="50" fill="url(#topic-background-grad)"></circle>\n                        </svg>`
                }
                getTopicImage(e, t) {
                    const r = "g_auto,c_thumb,w_128,h_128,fl_advanced_resize,e_sharpen,q_auto:best,f_auto",
                        {
                            useCloudinaryCroppingForThumbs: i
                        } = this.options;
                    let o = t.length > 0 ? t[0].thumbnail : "";
                    return e && (o = e), i ? TRC.imageUtils.getImageUrlBasedOnCloudinaryApi(o, r) : o
                }
                static clickOnCarouselTopicLoadingIndication(t) {
                    TRC.dom.addClass(t, e.CAROUSEL_TOPIC_CLICK_LOADING), TRC.Timeout.set(() => {
                        TRC.dom.removeClass(t, e.CAROUSEL_TOPIC_CLICK_LOADING)
                    }, 2e3)
                }
                getOnBoarding() {
                    const {
                        onBoardingText: t,
                        onBoardingFirstWordsNum: r,
                        onBoardingColor: i,
                        onBoardingEnableTooltip: o
                    } = this.options;
                    if (o) return `<div class="${e.CAROUSEL_ONBOARDING}">${t}</div>`;
                    const [s, a] = n.getOnBoardingSliced(t, r);
                    return `<div class="${e.CAROUSEL_ONBOARDING_STATIC}">\n                    <span class="tbl-stories-onboarding-static-first-words" style="color: ${i}">${s}</span> ${a}</div>`
                }
                static getOnBoardingSliced(e, t) {
                    t = t < 0 ? 0 : t;
                    const r = e.split(" ");
                    return [r.slice(0, t).join(" "), r.slice(t, r.length).join(" ")]
                }
                setStickyStories(e) {
                    this.stickyStories = null, this.options.stickyStories && (this.stickyStories = new TRC.StoriesSticky(e, this.options.stickyStories, this.unifiedPlacementName))
                }
            }
            TRC.StoriesCarousel = n
        }), TRC.listen("stories-initiation", () => {
            const e = {
                VISIBLE: "visible",
                LONG_VISIBLE: "long-visible",
                TOPIC_VISIBLE: "topic-visible"
            };
            class t extends TRC.StoriesBase {
                constructor(e, t) {
                    super(t, "StoriesEventsManager"), this.options = e, this.unifiedPlacementName = t
                }
                sendLifeCycleEvents(e) {
                    try {
                        const {
                            responseEnd: t
                        } = window.performance.timing, r = Date.now(), i = r - t;
                        this.sendEvent(e, {
                            ab: [i],
                            mxp: {
                                timeFromLoad: i
                            }
                        })
                    } catch (e) {
                        this.onError("sendLifeCycleEvents", e)
                    }
                }
                sendDefaultEvent(e, t, r = []) {
                    const {
                        topicName: i,
                        topicPosition: o,
                        itemPosition: n
                    } = t, s = {};
                    r.forEach((e, t) => {
                        s[`extraData_${++t}`] = e
                    }), s.topicName = i, s.topicPosition = o, s.itemPosition = n;
                    const a = {
                        ab: [i, o, n, ...r],
                        mxp: s
                    };
                    this.sendEvent(e, a)
                }
                sendEvent(e, {
                    ab: r,
                    mxp: i
                }) {
                    const o = `stories-${e}`;
                    t.sendAbEvent(o, r.join("_")), this.sendMixpanelEvent(o, i)
                }
                sendMixpanelEvent(e, t) {
                    this.options.enableMixpanel && (TRC.Mixpanel.mixpanelScriptLoaded ? TRC.Mixpanel.sendMixpanelEvent(e, t) : TRC.listen("mixpanelScriptSucceeded", () => {
                        TRC.Mixpanel.sendMixpanelEvent(e, t)
                    }))
                }
                static sendAbEvent(e, t) {
                    TRCImpl.sendAbTestEvent(e, t)
                }
                onError(e, t, r = __trcWarn) {
                    let i = {};
                    t ? i = {
                        errorMsg: `${e} - error: ${t.message}`,
                        errorStack: t.stack
                    } : i.errorMsg = e, this.sendMixpanelEvent("stories-error", i), r(`stories ${i.errorMsg}`, t)
                }
                observeCarousel({
                    carouselContainer: e,
                    options: t
                }) {
                    const r = TRC.intersections.observe({
                        targetElement: e,
                        onEnter: () => {
                            this.onCarouselVisible(r, t.visibleDuration)
                        },
                        onExit: () => {
                            TRC.Timeout.clear(this.visibleTimeoutId)
                        },
                        threshold: .5
                    })
                }
                onCarouselVisible(t, r) {
                    const {
                        options: i
                    } = TRC.Stories.getInstance(this.unifiedPlacementName);
                    this.sendLifeCycleEvents(e.VISIBLE), this.visibleTimeoutId = TRC.Timeout.set(() => {
                        TRC.intersections.unobserve(t), TRC.Timeout.clear(this.visibleTimeoutId), this.sendLifeCycleEvents(e.LONG_VISIBLE), TRC.CustomModulesManager.runHook("stories-long-visible", null, this, i.storiesUi)
                    }, r)
                }
                observeCarouselTopic(t) {
                    let r;
                    const i = {
                        targetElement: t,
                        onEnter: ({
                            target: t
                        }) => {
                            TRC.intersections.unobserve(r);
                            const {
                                topicName: i,
                                topicPosition: o
                            } = t;
                            this.sendEvent(e.TOPIC_VISIBLE, {
                                ab: [i, o],
                                mxp: {
                                    topicName: i,
                                    topicPosition: o
                                }
                            })
                        },
                        threshold: .5
                    };
                    r = TRC.intersections.observe(i)
                }
            }
            TRC.StoriesEventsManager = t
        }), TRC.listen("stories-initiation", () => {
            class e extends TRC.StoriesBase {
                constructor(e, t) {
                    super(t, "StoriesHistoryController"), this._historyApi = TRC.historyApi, this._inactiveKey = `${e}-open`, this._activeKey = `${e}-close`, this._applyOpen = [], this._applyClose = [], this._currentArgs = [], this._reason = "History controller init", this._setupEventListeners()
                }
                onOpen(e) {
                    this._applyOpen.push(e)
                }
                onClose(e) {
                    this._applyClose.push(e)
                }
                _setupEventListeners() {
                    this._historyApi.onPopState(() => {
                        this.isInactive() ? this._close() : this.isActive() && this._open()
                    }, {
                        stateCheck: e => e[this._inactiveKey]
                    }), this.isActive() && this.close()
                }
                isActive() {
                    const e = this._historyApi.currentState();
                    return e && e[this._activeKey]
                }
                isInactive() {
                    const e = this._historyApi.currentState();
                    return e && e[this._inactiveKey]
                }
                _open() {
                    this._applyOpen.forEach(e => e(...this._currentArgs))
                }
                open(...e) {
                    this._currentArgs = e, this._open(), this.isActive() || (this._historyApi.appendState({
                        [this._inactiveKey]: !0
                    }), this._historyApi.pushState({
                        [this._activeKey]: !0
                    }))
                }
                _close() {
                    const e = this._reason || "Browser back";
                    delete this._reason, this._applyClose.forEach(t => t(e))
                }
                close(e) {
                    this._reason = e, this._historyApi.back()
                }
            }
            TRC.StoriesHistoryController = e
        }), (() => {
            const e = {
                "stories-transition-manager": !0,
                "stories-vertical-ui": !0
            };
            class t {
                constructor(e) {
                    this.trcManager = e, this.stories = {}, this.configs = {}, TRC.Stories || TRC.dispatch("stories-initiation")
                }
                static lazyLoadStoriesModules() {
                    TRC.StoriesVerticalUi || TRC.ModuleLoader.load("stories-vertical-ui", TRC.StoriesVerticalUi, () => {
                        TRC.dispatch("vertical-ui-loaded")
                    })
                }
                lazyLoadFailure(t, r) {
                    e[t.moduleFile] && (r.forEach(e => this.stories[e].collapseContainer()), __trcWarn(`failed to load ${t.moduleFile}, stories collapsed`))
                }
                createNewStories({
                    s: e,
                    cga: r
                }, i) {
                    try {
                        TRC.listen("module-loader-failure", t => this.lazyLoadFailure(t, Object.keys(e))), t.lazyLoadStoriesModules(), Object.keys(e).forEach(o => {
                            if (this.stories[o]) return void __trcWarn(`Stories already created for '${o}'`);
                            const n = t.getOptions(e, r, o, i);
                            n.enableMixpanel && TRC.Mixpanel.loadMixpanelScript(), TRC.VirtualPlacementsManager.handleVirtualPlacement(this.trcManager, o), TRC.CustomModulesManager.runHook("stories-init", null, this), this.stories[o] = new TRC.Stories(this.trcManager, o, n)
                        })
                    } catch (e) {
                        __trcWarn(`Stories - failed to create Stories Instance`, e.message)
                    }
                }
                handleStoryPlacement(e, t) {
                    t.isStories = !0, t.parentStories = this.getRelevantStories(e), t.parentStories.handlePlacement(t)
                }
                getRelevantStories(e) {
                    return this.stories[e.stpl]
                }
                static getOptions(e, r, i, o) {
                    const n = e[i],
                        s = r && r.storiesExtendConfig && r.storiesExtendConfig[i],
                        a = t.parseStoriesOptionsFromResponse(n);
                    return t.overrideOptionsConfiguration("cc", a, s), t.overrideOptionsConfiguration("vui", a, s), a.storiesPlacementsAmount = o, a
                }
                static overrideOptionsConfiguration(e, t, r) {
                    r && r[e] && t.storiesUi && t.storiesUi[e] && (t.storiesUi[e] = TRC.util.merge(t.storiesUi[e], r[e]))
                }
                static parseStoriesOptionsFromResponse({
                    sti: e,
                    sui: t,
                    fv: r,
                    st: i,
                    vtag: o,
                    dm: n,
                    dir: s
                } = null) {
                    return {
                        storiesProductId: e,
                        storiesUi: t || {},
                        enableFeedView: TRC.util.isTrue(r),
                        injectScStrategy: i || "static",
                        enableMixpanel: TRC.util.isTrue(n) || !0,
                        videoTag: o,
                        direction: s
                    }
                }
            }
            TRC.StoriesManager = t
        })(), TRC.listen("stories-initiation", () => {
            const e = {
                    STICKY_ACTIVE: "tbl-stories-sticky-active",
                    STICKY_HIDDEN: "tbl-stories-sticky-hidden",
                    STICKY_SCROLL_UP: "tbl-stories-sticky-scroll-direction-up",
                    STICKY_SCROLL_DOWN: "tbl-stories-sticky-scroll-direction-down",
                    STICKY_STYLE_ID: "tbl-sticky-style"
                },
                t = {
                    SHOW: "SHOW",
                    HIDE: "HIDE"
                },
                r = {
                    UP: "UP",
                    DOWN: "DOWN"
                },
                i = "#fff";
            class o extends TRC.StoriesBase {
                constructor(e, t, r) {
                    super(r, "StoriesSticky"), this.storiesContainer = e, this.eventsManager = TRC.StoriesEventsManager.getInstance(r), this.feedInViewPort = !1, this.isStickyActive = !1, this.options = this.getStickyOptions(t), this.options.enabled && (o.injectStickyStyles(this.options), this.setStickyScrollListener(), this.listenForFeedInViewPort(), this.options.topScrollDownValue || this.setPublisherHeaderListener())
                }
                setStickyScrollListener() {
                    this.lastScrollTop = TRC.dom.getScrollTop(window), this.initialScroll = !0, window.addEventListener("scroll", this.onScroll.trcBind(this))
                }
                setPublisherHeaderListener() {
                    try {
                        const e = new ResizeObserver(e => {
                            [].slice.call(e).forEach(e => {
                                const {
                                    height: t
                                } = e.contentRect;
                                this.options.topScrollDownValue = this.options.topScrollUpValue = t
                            })
                        });
                        e.observe(this.publisherHeaderEl)
                    } catch (e) {
                        this.eventsManager.onError(`Error creating resizeObserver for sticky stories`, e)
                    }
                }
                listenForFeedInViewPort() {
                    TRC.listen("feed-present-in-viewport", ({
                        data: e
                    }) => {
                        this.feedInViewPort = TRC.util.isTrue(e)
                    })
                }
                static injectStickyStyles({
                    stickyBackgroundColor: e,
                    zIndex: t,
                    topScrollDownValue: r
                }) {
                    TRC.dom.injectStyle(`.tbl-stories-container { transition: transform 1s, top 1s; z-index: ${t}; top: ${r}px; } .tbl-stories-container.tbl-stories-sticky-active { background: ${e}; position: sticky; border-bottom: 1px solid #ccc; } .tbl-stories-container.tbl-stories-sticky-hidden.tbl-stories-sticky-hidden { top: -100%; }`)
                }
                getStickyOptions(e) {
                    const {
                        e: t,
                        uthrsld: r,
                        scrldwn: o,
                        isc: n,
                        zi: s,
                        bgc: a
                    } = e, l = e.slctr || "header";
                    this.publisherHeaderEl = document.querySelector(l), this.publisherHeaderEl || this.eventsManager.onError(`Sticky Stories header was not found on the page: ${l}`);
                    const c = parseInt(e.thrsld || this.getHeaderComputedStyle("height"), 10);
                    return {
                        enabled: "false" !== t && !!this.publisherHeaderEl,
                        zIndex: this.getZIndex(s),
                        stickyScrollDownDepth: o ? parseInt(o, 10) : 1e3,
                        ignoreScrollChanges: n ? parseInt(n, 10) : 10,
                        stickyBackgroundColor: a || i,
                        topScrollDownValue: c,
                        topScrollUpValue: r || c
                    }
                }
                getZIndex(e) {
                    return e ? parseInt(e, 10) : (e = this.getHeaderComputedStyle("zIndex"), TRC.util.isNumber(e) ? parseInt(e, 10) - 1 : e)
                }
                getHeaderComputedStyle(e) {
                    if (this.publisherHeaderEl) return this._getComputedStyle || (this._getComputedStyle = getComputedStyle(this.publisherHeaderEl)), this._getComputedStyle[e]
                }
                onScroll() {
                    TRC.util.debounce(requestAnimationFrame(() => {
                        this.toggleStoriesOnScroll()
                    }), 50)
                }
                toggleStoriesOnScroll() {
                    const {
                        stickyScrollDownDepth: e,
                        ignoreScrollChanges: i,
                        topScrollDownValue: o
                    } = this.options, n = TRC.dom.getScrollTop(window) + i, s = n < o, a = this.getStickyScrollDirection(n), l = +o + e, c = n < l;
                    s || a !== r.UP && !c ? this.toggleStickyStories(t.HIDE, s, a) : this.toggleStickyStories(t.SHOW, !1, a), this.lastScrollTop = n <= 0 ? 0 : n, this.direction = a
                }
                getStickyScrollDirection(e) {
                    return this.lastScrollTop > e ? r.UP : r.DOWN
                }
                toggleStickyStories(r, i, o) {
                    const {
                        topScrollDownValue: n,
                        topScrollUpValue: s
                    } = this.options, a = n !== s;
                    this.isStickyActive && r === t.SHOW || !this.isStickyActive && r === t.HIDE ? o !== this.direction && r === t.SHOW && a && this.changeTopPosition(o) : r === t.SHOW && this.feedInViewPort || (this.initialScroll ? this.initialScroll = !1 : (r === t.HIDE && (TRC.dom.addClass(this.storiesContainer, e.STICKY_HIDDEN), i && TRC.dom.removeClass(this.storiesContainer, e.STICKY_ACTIVE)), r === t.SHOW && (TRC.dom.removeClass(this.storiesContainer, e.STICKY_HIDDEN), TRC.dom.containsClass(this.storiesContainer, e.STICKY_HIDDEN) || TRC.dom.addClass(this.storiesContainer, e.STICKY_ACTIVE)), a && this.changeTopPosition(o), this.isStickyActive = !this.isStickyActive))
                }
                changeTopPosition(e) {
                    e === r.UP ? this.storiesContainer.style.top !== `${this.options.topScrollUpValue}px` && (this.storiesContainer.style.top = `${this.options.topScrollUpValue}px`) : this.storiesContainer.style.top !== `${this.options.topScrollDownValue}px` && (this.storiesContainer.style.top = `${this.options.topScrollDownValue}px`)
                }
            }
            TRC.StoriesSticky = o
        }), TRC.listen("stories-initiation", () => {
            const e = {
                    STORIES_CONTAINER: "tbl-stories-container",
                    PLACEMENTS_CONTAINER: "tbl-stories-placements-container",
                    CAROUSEL_CONTAINER: "tbl-stories-carousel-container",
                    STORIES_PLACEMENT: "tbl-stories-placement",
                    STORIES_RTL: "tbl-stories-rtl"
                },
                t = {
                    MAIN_CONTAINER_ID: "data-stories-main-container-id",
                    STORY_INDEX: "data-story-index",
                    STORY_TOPIC_INDEX: "data-story-topic-index",
                    STORY_TOPIC: "data-story-topic"
                },
                r = {
                    AVAILABLE: "available",
                    COLLAPSED: "collapsed",
                    COLLAPSED_TOPIC: "collapsed-topic",
                    VIDEO_PLAYING: "video-playing",
                    TOPIC_SWIPED: "topic-swiped"
                };
            class i extends TRC.StoriesBase {
                constructor(e, t, o) {
                    if (super(t, "Stories"), this.trcManager = e, this.storiesPlacements = {}, this.topics = {}, this.isFirstCardRendered = !1, this.options = o, this.unifiedPlacementName = t, this.numPlacements = 0, this.numTopics = 0, this.placementData = e.preloadRequest[t], this.container = this.placementData.container, this.parentContainerId = this.container.id, new TRC.StoriesHistoryController(`tbl-stories-${this.parentContainerId}`, t), this.topicMinAmount = 4, this.storiesHeight = e.global["default-stories-height"], this.enableClsReducer = e.global["enable-cls-reducer"] || !1, this.eventsManager = new TRC.StoriesEventsManager(o, t), this.isRtl = this.options.direction || "rtl" === this.trcManager.direction, this.isVideoInitiated = !1, this.placementData.isStories = !0, !this.isLazyRenderEnabled()) {
                        const e = `lazy render disabled: ${this.unifiedPlacementName}`;
                        return this.eventsManager.sendEvent(r.COLLAPSED, {
                            ab: [e],
                            mxp: {
                                errorMsg: e
                            }
                        }), this.collapseContainer(), void __trcWarn(e)
                    }
                    TRC.listen("trcContentReady", e => this.initVideoTag(e)), i.injectCss(), this.createStoriesContainer(), this.eventsManager.sendLifeCycleEvents(r.AVAILABLE);
                    try {
                        new TRC.StoriesCarousel(t, this.container)
                    } catch (e) {
                        this.eventsManager.onError(`failed to create StoriesCarousel`, e), this.collapseContainer()
                    }
                }
                isLazyRenderEnabled() {
                    const {
                        isLazyRenderEnabled: e,
                        placementsConfigs: t
                    } = this.trcManager.renderController, r = `Stories - ${this.unifiedPlacementName}`, i = t ? t[r] : {};
                    return e && i && i.enable
                }
                shouldLoadVideo(e) {
                    return this.options.videoTag && !this.isVideoInitiated && e.isStories && e.trc["mode-before-video-load"](e)
                }
                initVideoTag({
                    trcbox: e
                }) {
                    if (this.shouldLoadVideo(e)) {
                        const t = {
                            placement: e.placement,
                            container: e.container
                        };
                        this.isVideoInitiated = !0, this.videoTagLoader = new TRC.VideoTagLoader(e.trc, this.options.videoTag, t, e, e.response.trc), this.videoTagLoader.loadVideo()
                    }
                }
                static createBlurImageBox(e) {
                    const t = document.createElement("div");
                    e.appendChild(t), e.blurImageStoriesBox = t
                }
                static injectCss() {
                    TRC.dom.injectStyle(`.tbl-stories-container { width: 100vw; font-family: helvetica, arial, sans-serif; -webkit-overflow-scrolling: auto; padding: 0 0 5px; } .tbl-stories-container.tbl-stories-rtl { direction: rtl; } .tbl-stories-container .tbl-stories-placement { display: none; } .tbl-stories-container svg { /*override publisher css on svg tag*/ vertical-align: inherit; fill: transparent; }.tbl-feed-view-parent-wrapper body.tbl-stories-show { position: initial; overflow: initial; }`)
                }
                createStoriesContainer() {
                    TRC.dom.addClass(this.container, e.STORIES_CONTAINER), this.isRtl && TRC.dom.addClass(this.container, e.STORIES_RTL), this.container.setAttribute(t.MAIN_CONTAINER_ID, this.unifiedPlacementName), this.placementsContainer = TRC.dom.createHTMLElement("section", {
                        className: e.PLACEMENTS_CONTAINER
                    })
                }
                handlePlacement(i) {
                    try {
                        if (this.storiesColapsed) return;
                        const {
                            placement: o,
                            trcResponse: n
                        } = i;
                        if (this.storiesPlacements[o]) return void this.eventsManager.onError(`placement already created for '${o}'`);
                        const s = i.trcResponse.v.length;
                        if (!s) return this.options.storiesPlacementsAmount--, this.eventsManager.sendEvent(r.COLLAPSED_TOPIC, {
                            ab: [o, this.numPlacements + 1],
                            mxp: {
                                topicName: o,
                                topicPosition: this.numPlacements + 1
                            }
                        }), void this.isStoriesLastPlacement();
                        const a = document.createElement("section");
                        i.container = a, i.modeGroupOrder = ++this.numPlacements, a.setAttribute(t.STORY_INDEX, this.numPlacements), a.placementData = i, a.id = `${this.parentContainerId}-pl${this.numPlacements}`, TRC.dom.addClass(a, e.STORIES_PLACEMENT), this.handleTopicRelatedPlacement(a, n, i), this.placementsContainer.appendChild(a), this.isStoriesLastPlacement(), this.storiesPlacements[o] = i
                    } catch (e) {
                        this.eventsManager.onError(`failed to handlePlacement`, e), this.collapseContainer()
                    }
                }
                collapseContainer() {
                    this.storiesColapsed = !0, TRC.dom.addClass(this.container, "tbl-hidden")
                }
                isStoriesLastPlacement() {
                    if (this.options.storiesPlacementsAmount === this.numPlacements) {
                        if (this.numTopics < this.topicMinAmount) {
                            __trcWarn(`Stories Collapsed - Topics Rendered: ${this.numTopics}`);
                            const e = `topics length is : ${this.numTopics}`;
                            return this.eventsManager.sendEvent(r.COLLAPSED, {
                                ab: [e],
                                mxp: {
                                    errorMsg: e
                                }
                            }), void this.collapseContainer()
                        }
                        this.clsReducer(() => {
                            const e = TRC.StoriesCarousel.getInstance(this.unifiedPlacementName),
                                {
                                    carouselContainer: t
                                } = e;
                            this.container.appendChild(t), this.container.appendChild(this.placementsContainer), e.carouselReady()
                        }), TRC.EventsAPI.dispatchStoriesLoaded()
                    }
                }
                clsReducer(e) {
                    const {
                        virtualPlacementsMap: t
                    } = this.trcManager.virtualPlacementsManager;
                    this.enableClsReducer && t[this.unifiedPlacementName] ? (window.scroll({
                        top: this.storiesHeight
                    }), TRC.Timeout.set(e, 0)) : e()
                }
                renderVerticalUiPlacements(e, t) {
                    try {
                        let r = TRC.StoriesVerticalUi.getInstance && TRC.StoriesVerticalUi.getInstance(this.unifiedPlacementName);
                        r || (r = new TRC.StoriesVerticalUi(this.unifiedPlacementName)), t && r.handleVerticalUiLayout(), r.openVerticalUi(e)
                    } catch (e) {
                        this.eventsManager.onError("renderVerticalUiPlacements", e)
                    }
                }
                handleTopicRelatedPlacement(e, r, o) {
                    const {
                        categoryId: n,
                        categoryTitle: s,
                        categoryImage: a
                    } = i.getPlacementCategoryData(r), l = TRC.StoriesCarousel.getInstance(this.unifiedPlacementName);
                    if (!n) return;
                    this.loadFeedView(o), e.setAttribute(t.STORY_TOPIC, n), e.setAttribute(t.STORY_TOPIC_INDEX, ++this.numTopics);
                    const c = {
                        id: n,
                        title: s || n,
                        imageUrl: l.getTopicImage(a, r.v),
                        slotPosition: this.numPlacements,
                        placementContainer: e
                    };
                    this.topics[n] = o.topicData = c, l.addTopic(c)
                }
                static getPlacementCategoryData(e) {
                    const {
                        cid: t,
                        ct: r,
                        ciu: i
                    } = e;
                    return {
                        categoryId: t,
                        categoryTitle: r,
                        categoryImage: i
                    }
                }
                loadFeedView(e) {
                    if (this.options.enableFeedView) {
                        new TRC.FeedViewWidgetLoaderManager(e);
                        const {
                            fvConfig: t
                        } = this.options.storiesUi.vui;
                        t && (e.feedViewConfig = t)
                    }
                }
            }
            TRC.Stories = i
        }),
        function() {
            var e = TRC.taboolaConnect = {},
                t = !1,
                r = {},
                i = !!(TRC && TRC.mobile && TRC.mobile.reportClick),
                o = "dynamic-content-loader";

            function n(e, t) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            }

            function s(e, t) {
                "available" === t && TRC.dispatch("available::" + e.placementName, {
                    container: e.container
                }), "click" === t && TRC.dispatch("click::" + e.placementName)
            }

            function a(e, t, r) {
                var i = t.config["max-height"] && parseInt(t.config["max-height"]);
                i && parseInt(r.height) > i && (r.height = i), e.height = e.style.height = parseInt(r.height) + "px"
            }
            e.createIframe = function(t, o, s, a, l, c) {
                if (t) {
                    var d = s || {},
                        h = Math.floor(2147483648 * Math.random()).toString(36),
                        p = document.createElement("iframe");
                    return d.attributes && n(d.attributes, p), p.style.border = p.frameBorder = p.border = "0", p.style.display = "block", p.style.height = parseInt(s.height) ? parseInt(s.height) + "px" : "0px", p.style.width = "100%", p.scrolling = "no", p.sandbox = d.sandbox || "allow-same-origin allow-scripts allow-popups allow-forms", d.fifr ? e.lazyLoadDynamicContentLoader(p) : (o = addHashParam(o, "tbcId", h), o = addHashParam(o, "lang", c || window.navigator.language), i && (o = addHashParam(o, "isMobileSDK", "" + i)), p.src = o), r[h] = {
                        origin: a,
                        placementName: l,
                        frame: p,
                        config: s,
                        container: t
                    }, t.innerHTML = "", t.appendChild(p), p
                }
                __trcError("could not find container to create Iframe within")
            }, e.lazyLoadDynamicContentLoader = function(e) {
                TRC.ModuleLoader.load(o, TRC.dcl, function() {
                    var t = e.contentWindow || e.contentDocument;
                    t && (t.document.open(), t.document.write(TRC.dcl), t.document.close())
                }.trcBind(e))
            }, e.receiveMessage = function(e, t) {
                var i = t.data,
                    o;
                i && r[i.id] && ((void 0 === e.origin ? r[i.id].origin : e.origin) === t.origin && this[i.action] && this[i.action](i.payload ? i.payload : {
                    sizeObject: i.sizeObject
                }, r[i.id]))
            }, e.openInIframe = function(t, r) {
                var i = r.frame,
                    o = r.container,
                    n = t.iframeArgs,
                    s = {
                        isSmallIOS: function() {
                            return TRCImpl["small-ios-device"].indexOf(TRC.Device.deviceType) >= 0
                        },
                        getPublisherBrandingName: function() {
                            return n.publisherName
                        },
                        trc: TRCImpl
                    },
                    a = {
                        title: n.title,
                        url: n.logger_url,
                        logger_url: n.logger_url
                    };
                new TRC.FeedView(s, a, o), e.postMessage(i, {
                    action: "openInIframe",
                    message: "openInIframe done",
                    dimension: {
                        height: i.style.height
                    }
                }, "*")
            }, window.addHashParam = function(e, t, r) {
                var i, o = t + "=" + r;
                if (e.indexOf("#") > 0) {
                    var n = e.slice(-1);
                    return e + (o = "&" === n || "#" === n ? o : "&" + o)
                }
                return e + "#" + o
            }, e.getOrigin = function(e) {
                return e.match(/^(https:|http:)?\/\/[^/]+/i)[0]
            }, e.postMessage = function(e, t, r) {
                e.contentWindow.postMessage(t, r)
            }, e.rendered = function(t, r) {
                var i = r.frame,
                    o = r.container,
                    n;
                a(i, r, t.sizeObject), o.className += " tbl-feed-card", s(r, "available");
                var l = {
                        action: "rendered",
                        message: "rendered done",
                        dimension: {
                            height: i.style.height
                        }
                    },
                    c = TRCImpl.global["start-magazine-url"];
                c && r.origin === c && (l.publisherId = TRC.publisherId, l.placementName = r.placementName), e.postMessage(i, l, "*")
            }, e.expand = function(t, r) {
                var i = r.frame,
                    o;
                a(i, r, t.sizeObject), e.postMessage(i, {
                    action: "expand",
                    message: "expand done",
                    dimension: {
                        height: i.style.height
                    }
                }, "*")
            }, e.click = function(t, r) {
                var i = r.frame,
                    o = t.sizeObject;
                o && a(i, r, o), s(r, "click"), e.postMessage(i, {
                    action: "click",
                    message: "click done",
                    dimension: {
                        height: i.style.height
                    }
                }, "*"), TRC.mobile && TRC.mobile.reportClick && TRC.mobile.reportClick(t.sizeObject)
            }, e.collapse = function(t, r) {
                var i = r.frame,
                    o;
                a(i, r, t.sizeObject), e.postMessage(i, {
                    action: "collapse",
                    message: "collapse done",
                    dimension: {
                        height: i.style.height
                    }
                }, "*")
            }, e.maxHeight = function(t, r) {
                var i = r.frame,
                    o = r.config["max-height"] ? r.config["max-height"] : "";
                e.postMessage(i, {
                    action: "maxHeight",
                    message: o,
                    dimension: {
                        height: i.style.height
                    }
                }, "*")
            }, e.createCard = function(e, r, i, o, n) {
                if (!i.fifr) {
                    var s = this.getOrigin(i.origin || r);
                    if (!s) return void __trcError("non valid origin for third party card")
                }
                t || (window.addEventListener("message", this.receiveMessage.bind(this, i), !1), t = !0), this.createIframe(e, r, i, s, o, n)
            }, e.error = function(e) {
                __trcWarn("External error report to taboola-connect: " + e)
            }, window._trcIsUTactive && (TRC.taboolaConnect.addHashParam = addHashParam)
        }();
    class TasksExecutorQueue {
        constructor() {
            this.tasks = [], this.runningTask = null
        }
        add(e) {
            return this.tasks.push(e), 1 === this.tasks.length && this.callNext(), this
        }
        callNext() {
            if (this.tasks.length)
                if ("function" == typeof this.tasks[0]) {
                    [this.runningTask] = this.tasks;
                    let e = !1;
                    const t = () => {
                        e || (e = !0, this.tasks.shift(), this.callNext())
                    };
                    this.runningTask.cancel = (() => {
                        e = !0
                    }), this.runningTask(t)
                } else this.tasks.shift(), this.callNext()
        }
        resetQueue() {
            this.runningTask.cancel(), this.tasks = []
        }
    }
    TRC.TasksExecutorQueue = TasksExecutorQueue, window, document, TRC.text = {
            replaceAll(e, t, r, i) {
                let o;
                return void 0 !== t && void 0 !== r && t !== r ? (o = new RegExp(t, "gi"), e.replace(o, "function" == typeof r && "object" == typeof i ? r.trcBind(i) : r)) : e
            },
            lsplit(e, t, r) {
                const i = e.split(t);
                return i.slice(0, r - 1).concat(i.length >= r ? i.slice(r - 1).join(t) : [])
            },
            parseCSV(e) {
                const t = e.split(","),
                    r = [];
                for (; t.length;) {
                    let e = t.shift();
                    if ('"' === e[0]) {
                        do {
                            if ('"' === e.slice(1).replace(/""/g, "").slice(-1)) break;
                            e += `,${t.shift()}`
                        } while (t.length);
                        r.push(e.slice(1, e.length - 1).replace(/""/g, '"'))
                    } else r.push(e)
                }
                return r
            },
            toStringList(e) {
                if (!e) return [];
                if (!(e instanceof Array)) return [`${e}`];
                const t = [];
                return e.forEach(e => {
                    e && t.push(`${e}`)
                }), t
            },
            htmlUnescape: e => String(e).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#34;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"),
            encodeHTML: e => "string" == typeof e && e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"),
            toLowerCamelCase(e) {
                if (-1 === e.indexOf("-")) return e;
                const t = e.toLowerCase().split("-").map(e => e.charAt(0).toUpperCase() + e.substr(1)).join("");
                return t.charAt(0).toLowerCase() + t.substr(1)
            },
            splitAndJoin(e, t) {
                let r = e.split(".");
                return r = (r = r.map(e => t(e))).join(".")
            },
            isEndWith(e, t) {
                if (!String.prototype.endsWith) {
                    const {
                        length: r
                    } = e;
                    return e.substring(r - t.length, r) === t
                }
                return e.endsWith(t)
            }
        }, (() => {
            let e = !1;
            const t = {
                    POSITION: {
                        SPONSORED: "syndicated-static-text-position",
                        ORGANIC: "organic-static-text-position",
                        EMBLEM: "emblem-position"
                    },
                    TEXT: {
                        SPONSORED: "syndicated-static-text",
                        ORGANIC: "organic-static-text"
                    },
                    SHOW_ORGANIC_FIXED_LABEL: "organic-show-static-text",
                    EMBLEM: "emblem"
                },
                r = {
                    EMBLEM_WRAPPER: "thumbnail-emblem",
                    STATIC_TEXT: "static-text",
                    FIXED_LABEL: "tbl-fixed-label",
                    BIG_LABEL: "tbl-big-label",
                    SMALL_LABEL: "tbl-small-label"
                };
            class i {
                constructor(e, r, o) {
                    const {
                        categoryCard: n,
                        recommendationList: s,
                        add_span: a
                    } = o, l = r ? "SPONSORED" : "ORGANIC";
                    if (this.categoryCard = n, this.getModeClientProperty = o.getModeClientProperty.trcBind(o), this.size = s && s.length, this.addSpan = a, this.emblemSrc = this.getModeClientProperty(t.EMBLEM), this.fixedLabelPosition = this.getFixedLabelPosition(r, t.POSITION[l]), this.fixedLabelText = this.getModeClientProperty(t.TEXT[l]), this.emblemSrc && "null" !== this.emblemSrc && (i.setCss(), this.emblemPosition = this.getModeClientProperty(t.POSITION.EMBLEM) || "top-left", this.addEmblem(e, l)), !this.emblemRenderd || this.isEmblemAndTextNotOnSamePosition()) {
                        if (this.categoryCard && this.categoryCard.isCategoryCard && !this.categoryCard.render) return;
                        this.addFixedLabel(e, r)
                    }
                }
                static setCss() {
                    e || (e = !0, TRC.dom.injectStyle(`.thumbnail-emblem { height: 35px; width: 35px; }.trc_related_container .thumbnail-emblem.bottom-right, .trc_related_container .static-text.bottom-right { bottom: 0; right: 0; background-position: bottom; }.trc_related_container .thumbnail-emblem.top-right, .trc_related_container .static-text.top-right { top: 0; right: 0; background-position: top; }.trc_related_container .thumbnail-emblem.bottom-left, .trc_related_container .static-text.bottom-left { bottom: 0; left: 0; background-position: bottom; }.trc_related_container .thumbnail-emblem.top-left, .trc_related_container .static-text.top-left { top: 0; left: 0; background-position: top; }.trc_related_container .thumbnail-emblem.top, .trc_related_container .static-text.top { width: 100%; top: 0; }.trc_related_container .thumbnail-emblem.bottom, .trc_related_container .static-text.bottom { width: 100%; bottom: 0; padding: 2px 0; }.trc_related_container .videoCube .thumbBlock .static-text { position: absolute; z-index: 1; margin: 0; padding: 5px; display: block; opacity: 0.7; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label { opacity: 1; padding: 0 5px; text-align: center; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label.tbl-small-label { min-width: 107px; min-height: 27px; line-height: 27px; letter-spacing: 0.31px; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label.tbl-big-label { min-width: 140px; min-height: 33px; font-size: 14px; line-height: 33px; letter-spacing: 0.39px; }.trc_related_container .thumbnail-emblem { background-position-x: center; }`))
                }
                isEmblemAndTextNotOnSamePosition() {
                    return this.emblemRenderd && this.fixedLabelPosition !== this.emblemPosition
                }
                addEmblem(e) {
                    this.emblemRenderd = !0;
                    const t = this.addSpan(r.EMBLEM_WRAPPER, null, e);
                    t.style.backgroundImage = `url('${this.emblemSrc}')`, TRC.dom.addClass(t, this.emblemPosition)
                }
                addFixedLabel(e, o) {
                    const n = [r.STATIC_TEXT],
                        s = document.createElement("span");
                    if (!o) {
                        const e = this.getModeClientProperty(t.SHOW_ORGANIC_FIXED_LABEL);
                        if (!e) return;
                        n.push(r.FIXED_LABEL), n.push(1 === this.size ? r.BIG_LABEL : r.SMALL_LABEL), this.categoryCard && this.categoryCard.render && (this.fixedLabelText = this.categoryCard.text)
                    }
                    i.setCss(), n.push(this.fixedLabelPosition), s.className = n.join(" "), this.fixedLabelText && s.appendChild(document.createTextNode(this.fixedLabelText)), e.appendChild(s)
                }
                getFixedLabelPosition(e, t) {
                    const r = e ? "top-right" : "bottom-left";
                    return this.getModeClientProperty(t) || r
                }
            }
            TRC.ThumbnailOverlayComponents = i
        })(), (e => {
            const t = "tn_t_on",
                r = TRC.pageManager.getLocalStorageImplementation("strict-w3c-storage", "session");
            let i = TRC.taboolaNews && TRC.taboolaNews.timeOn,
                o = !1;
            if (!i && r) try {
                i = JSON.parse(r.getValue(t)), o = !0
            } catch (e) {
                __trcError("Error occurred while trying to read Taboola News data from SessionStorage but object data was corrupted.")
            }
            if (!i) return;

            function n() {
                const t = (new Date).getTime();
                if (!TRC.isAMP) return e.performance && e.performance.timing && e.performance.timing.navigationStart || t;
                try {
                    const r = JSON.parse(e.context.ca).attributes._context.initialIntersection.time || t;
                    return new Date(e.context.startTime - r)
                } catch (e) {
                    return t
                }
            }!o && r && r.setValue(t, JSON.stringify(i));
            let s = n(),
                a = -1,
                l = 0;

            function c(e) {
                e ? s = (new Date).getTime() : (a = (new Date).getTime(), l += 1, TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent("taboola_news_timeon", `${l.toString()}::${(a-s).toString()}`, null, !0))
            }
            TRC.docVisibilityUtil.addEventListener(c)
        })(window),
        function() {
            function e(e, t) {
                var i = document.createElement("span");
                s(i, "span");
                for (var o = 0; o < t.length; o++) {
                    var n = r(t[o], e);
                    i.appendChild(n)
                }
                e.appendChild(i)
            }

            function t(e, t) {
                var r;
                if (e && e.contentDocument && t) return (r = e.contentDocument.querySelector(".moat_trackable")).moatObject = {
                    adElement: t,
                    adLoaded: 1,
                    creativeType: "banner",
                    versions: "1"
                }, r;
                __trcError("Error occurred while trying to prepare trackable object for MOAT")
            }

            function r(e, r) {
                var o = document.createElement("iframe");
                return s(o, "iFrame"), e && r ? (e.tag && e.trackableObject ? (o.src = "javascript:'<html><head></head><body>" + e.tag + e.trackableObject + "</body></html>'", TRC.dom.on(o, "load", function() {
                    e.trackableObject.indexOf("moat_trackable") > -1 && i(t(o, r))
                })) : e.tag ? o.src = "javascript:'<html><head></head><body>" + e.tag + "</body></html>'" : o.src = "javascript:'<html><head></head><body>" + e + "</body></html>'", o) : o
            }

            function i(e) {
                if (e) try {
                    __trcDebug("dispatching adLoaded event for MOAT"), e.dispatchEvent(new CustomEvent("adLoaded", {
                        bubbles: !0,
                        cancelable: !1
                    }))
                } catch (e) {}
            }

            function o(e, t) {
                try {
                    TRC.dom.addClass(e, t)
                } catch (e) {
                    __trcError("Error occurred while trying to add tblUniqueTagId To Relevant videoBoxContainer")
                }
            }

            function n(e, t) {
                var r, i = [];
                try {
                    for (var o = 0; o < e.length; o++) r = TRC.TrackingScriptIdAppender && TRC.TrackingScriptIdAppender.setTagDetails(e[o], t), i.push(r)
                } catch (t) {
                    return __trcError("Error occurred while trying to add tblUniqueTagId To Relevant Js Tags"), e
                }
                return i
            }

            function s(e, t) {
                e.id = "script-tracking-" + t + "-" + parseInt(1e4 * Math.random(), 10), e.name = e.id, e.width = 0, e.height = 0, e.style.display = "none"
            }
            TRC.TrackingScriptLoader = {
                TRC_SCRIPT_TAGS_ATTRIBUTE: "viewability-tags",
                renderScriptTagIntoVideoBox: function(t, r, i, s) {
                    try {
                        if (t && r && r[this.TRC_SCRIPT_TAGS_ATTRIBUTE] && r[this.TRC_SCRIPT_TAGS_ATTRIBUTE].length > 0) {
                            var a = n(r[this.TRC_SCRIPT_TAGS_ATTRIBUTE], i);
                            o(t, i), TRC.MobileSdk.isEnabled() || (s ? setTimeout(e.trcBind(this, t, a), s) : e(t, a))
                        } else __trcDebug("renderScriptTagIntoVideoBox: videoBoxContainer/recommendation is null or TRC_SCRIPT_TAGS_ATTRIBUTE not exist")
                    } catch (e) {
                        __trcError("failed to add JS script tracking to single videoBoxContainer Container")
                    }
                }
            }
        }(),
        function() {
            var e = "adsafeprotected.com",
                t = "ias_adpath",
                r = ".{uniqueId}",
                i = "><\/script>",
                o = "cdn.doubleverify.com",
                n = "btreg",
                s = "z.moatads.com",
                a = "taboolaTrackable",
                l, c = "({paramName}=.*?)(&|$)",
                d = new RegExp('(src|SRC)\\s*=\\s*"?(.+?)\\"|\\|s>'),
                h = [new p(e, t, r, g, !1, null), new p(o, n, null, m, !1, null), new p(s, a, null, b, !0, f)];

            function p(e, t, r, i, o, n) {
                this.tagDomain = e, this.tagParamName = t, this.uniqueParamFormat = r, this.tagUrlExtractor = i, this.hasTrackableObject = o, this.trackableObjectCreator = n
            }

            function u(e, t) {
                const r = "{paramName}";
                var i = t.match(new RegExp(TRC.text.replaceAll(c, r, e, null)));
                return i && (i[1] || i[0]) || null
            }

            function g(e) {
                var t = e.indexOf(i),
                    r = e.slice(0, t);
                return this.extractSrcValue(r)
            }

            function m(e) {
                return this.extractSrcValue(e)
            }

            function b(e) {
                return this.extractSrcValue(e)
            }

            function f() {
                return '<div class="moat_trackable" style="display: none;"></div>'
            }
            p.prototype.isMatchingTagDomain = function(e) {
                return -1 !== e.indexOf(this.tagDomain)
            }, p.prototype.shouldAddTrackableObject = function() {
                return this.hasTrackableObject
            }, p.prototype.appendId = function(e, t) {
                try {
                    var r = this.tagUrlExtractor(e),
                        i = "";
                    if (r) {
                        t = this.formatUniqueId(t);
                        var o = u(this.tagParamName, r);
                        return i = o ? r.replace(o, this.tagParamName + "=" + t) : r + this.getUrlParamsSeparator(r) + this.tagParamName + "=" + t, e.replace(r, i)
                    }
                } catch (t) {
                    return __trcWarn("failed to append unique Id to a specific tag: " + e), e
                }
                return e
            }, p.prototype.extractSrcValue = function(e) {
                var t = d.exec(e),
                    r;
                return t[t.length - 1].replace(/^"+|"+$/g, "")
            }, p.prototype.formatUniqueId = function(e) {
                return this.uniqueParamFormat ? this.uniqueParamFormat.replace("{uniqueId}", e) : e
            }, p.prototype.getUrlParamsSeparator = function(e) {
                return -1 !== e.indexOf("?") || -1 !== e.indexOf("#") ? "&" : "?"
            }, p.prototype.createTrackableObject = function() {
                return this.trackableObjectCreator()
            }, TRC.TrackingScriptIdAppender = {
                setTagDetails: function(e, t) {
                    if (!e || !t) return e;
                    for (var r = 0; r < h.length; r++) {
                        var i = h[r];
                        if (i.isMatchingTagDomain(e)) {
                            var o = {};
                            return o.tag = i.appendId(e, t), i.shouldAddTrackableObject() && (o.trackableObject = i.createTrackableObject()), o
                        }
                    }
                    return e
                }
            }
        }(), (() => {
            const e = "stop_tslt",
                t = {};
            let r = {},
                i = {};

            function o(e) {
                const {
                    feature: t,
                    label: r = "",
                    data: o = []
                } = e, n = t + r + JSON.stringify(o), s = i[n];
                return s ? {
                    cached: !0,
                    translation: s
                } : {
                    cached: !1,
                    translationId: n
                }
            }

            function n(e, t) {
                const r = s(e),
                    {
                        label: i,
                        data: o
                    } = t,
                    n = r[i];
                return n ? o ? TRC.util.formatString(n, o) : n : r
            }

            function s(e) {
                const i = r[e];
                return i || (__trcWarn(`TRC.TranslationsManager - missing feature in translationMap: ${e}.`), t[e])
            }

            function a(e) {
                Object.keys(e).forEach(t => {
                    TRC.translationManager.register(t, e[t])
                })
            }
            TRC.translationManager = {
                getLabel: e => {
                    const s = e.feature;
                    if (!r[s] && !t[s]) return;
                    const {
                        cached: a,
                        translation: l,
                        translationId: c
                    } = o(e);
                    if (a) return l;
                    const d = n(s, e);
                    return d ? (i[c] = d, d) : void 0
                },
                setTranslations: t => {
                    t && TRC.util.hasKeys(t) && (r = t, i = {}, TRC.pageLevelFeaturesManager.pageLevelFeatures[e] = !0)
                },
                register: (e, r) => {
                    t[e] = r
                }
            }, TRC._translationQueue || (TRC._translationQueue = []), TRC._translationQueue.forEach(a), TRC._translationQueue.push = a
        })(), (e => {
            e.TRC = e.TRC || {};
            const t = "disable",
                r = 0;
            let i, o;
            class n {
                constructor(e) {
                    this.bulkingStrategy = {
                        delay: (() => {
                            let t = [];
                            const r = (r, i, o, s, a) => {
                                t.push(o), 1 === t.length && setTimeout(() => {
                                    const i = n.buildParamsForBulkEvent(t);
                                    if ((a = a || {}).bulkSize = t.length, TRC.util.isPercentEnabled(TRCImpl.global, "bulk-body-debug-sample-rate")) {
                                        const e = i.events;
                                        TRC.RBoxUsage.logUsage("Debug body size of bulk events", {
                                            extraData: {
                                                name: "bulk_body_debug",
                                                method: "bulkPost",
                                                body: {
                                                    type: typeof e,
                                                    size: (e && e.length) + 0
                                                }
                                            }
                                        })
                                    }
                                    TRC.TRCLogger.post(r, e, i, s, a), t = []
                                }, n.getDelayConfig(i))
                            };
                            return r.events = t, r
                        })(),
                        sendFirstThenDelay: (() => {
                            const e = {},
                                t = (t, r, i, o, s) => {
                                    e[r] ? this.bulkingStrategy.delay(t, r, i, o, s) : ((s = s || {}).bulkSize = 1, TRC.TRCLogger.post(t, "bulk", n.buildParamsForBulkEvent([i]), o, s), e[r] = !0)
                                };
                            return t.events = e, t
                        })()
                    }, window._trcIsUTactive && (this.getEventState = function(e) {
                        return this.bulkingStrategy[e].events
                    }.bind(this))
                }
                static getDelayConfig(e) {
                    return "number" == typeof TRCImpl.global[`bulk-${e}-events-delay`] ? TRCImpl.global[`bulk-${e}-events-delay`] : "number" == typeof TRCImpl.global[`bulk-events-delay`] ? TRCImpl.global[`bulk-events-delay`] : r
                }
                static buildParamsForBulkEvent(e) {
                    return e.forEach(e => {
                        e.data = TRC.TRCLogger.formatParams(e.data)
                    }), {
                        sd: o,
                        ui: i,
                        events: __trcJSONify(e)
                    }
                }
                static buildBulkEventParam(e, t) {
                    return {
                        type: e,
                        timestamp: Date.now(),
                        data: t
                    }
                }
                getValidBulkingMethod(e) {
                    if (e && e !== t) {
                        const t = this.bulkingStrategy[e];
                        if ("function" == typeof t) return t
                    }
                    return null
                }
                bulkPost(e, r, s, a, l) {
                    const c = TRCImpl.global[`bulk-${r}-events-strategy`] || t,
                        d = this.getValidBulkingMethod(c);
                    d ? (o = o || s.sd, i = i || s.ui, d(e, r, n.buildBulkEventParam(r, s), a, l)) : (TRC.TRCLogger.post(e, r, s, a, l), c !== t && __trcWarn(`FailedSendingBulkEvent for eventType: ${r}, with strategy: ${c}`))
                }
            }
            e.TRC.TRCBulkLogger = TRC.TRCBulkLogger = n
        })(window), (() => {
            class e {
                constructor(e, t = !1) {
                    if (this.onlyClean = t, this.pm = TRC.pageManager, this.storageType = e.storageType || "session", this.localStorage = this.pm.getLocalStorageImplementation("strict-w3c-storage", this.storageType), this.currentSize = 0, this.trcCache = null, this.trcCacheByPlacement = null, this.cacheSize = e.cacheSize || 5, this.cacheTtl = e.ttl || 1e3 * 60 * 20, this.disableFeedCache = e.disableFeedCache, this.trcCacheName = e.cacheName || "trc_cache", this.trcCacheByPlacementName = `${this.trcCacheName}_by_placement`, this.TRC_CACHE_ACTIVE_STORAGE_KEY = "trc_cache_active", this.cacheUtils = new TRC.CacheUtils(this.localStorage, this.trcCacheName, this.cacheTtl), this.cacheByPlacementUtils = new TRC.CacheUtils(this.localStorage, this.trcCacheByPlacementName, this.cacheTtl), !this.localStorage) return {
                        isValidCache: !1
                    };
                    this.isValidCache = !0, this.init()
                }
                extractAndResolveKey(e) {
                    const t = TRC.TrcCache.extractKey(e);
                    return this.getFeedRelatedKeyFromCache(this.trcCacheByPlacement, this.trcCache, t) || t
                }
                static extractKey(t) {
                    const r = t.it,
                        i = t.ii,
                        o = [];
                    let n = `${r}=${i}`;
                    for (let e = 0; e < t.r.length; e++) o.push(`,${t.r[e].uip}=${t.r[e].uim}`);
                    return e.sortByPlacements(o), n += o.join(), TRC.isAMPSplitFeed && void 0 !== TRC.currentAmpFrameNum && (!0 === TRC.keyWriting ? (n += TRC.currentAmpFrameNum, TRC.keyWriting = !1) : n += TRC.feedContainerNum), n
                }
                cacheResponse(e, t) {
                    TRC.tlf && console.time("in cacheResponse");
                    const r = this.setCacheResponse(e, t);
                    return this.currentSize > this.cacheSize && this.removeToLimit(), this.localStorage.setValue(this.trcCacheName, __trcJSONify(this.trcCache.getData())), this.localStorage.setValue(this.trcCacheByPlacementName, __trcJSONify(this.trcCacheByPlacement.getData())), TRC.tlf && console.timeEnd("in cacheResponse"), r
                }
                setCacheResponse(t, r) {
                    const i = (new Date).getTime(),
                        o = this.trcCache.getData();
                    let n;
                    try {
                        if ((n = o[t]) && n.r.trc.f) TRC.TrcCache.updateFeedConfigPropsInCache(r.trc.f, n.r.trc.f), TRC.TrcCache.addNewFeedCardsToCachedResponse(r.trc.vl, n.r.trc.vl);
                        else {
                            const o = {
                                    s: i,
                                    r: r,
                                    vi: this.pm.getPageData()
                                },
                                n = !(!r.trc || !r.trc.cga) && !!r.trc.cga.selectiveCache;
                            n && (o.is = n), this.trcCache.setValue(t, o), e.splitKeyToPlacementLookupKeys(t).forEach(e => {
                                this.trcCacheByPlacement.setValue(e, t)
                            }), this.currentSize++, this.setCacheClean(t)
                        }
                    } catch (e) {
                        return __trcError("setCacheResponse Error", e), !1
                    }
                    return !0
                }
                getCacheResponse(e) {
                    TRC.tlf && console.time("in getCacheResponse");
                    const t = this.trcCache.getValue(e);
                    if (t && !this.isOverTtl(this.trcCache.getValue(e).s)) {
                        TRC.tlf && console.timeEnd("in getCacheResponse");
                        const t = this.trcCache.getValue(e);
                        return {
                            response: t.r,
                            viewId: t.vi,
                            isSelective: t.is
                        }
                    }
                    return TRC.tlf && console.timeEnd("in getCacheResponse"), null
                }
                isOverTtl(e) {
                    this.cacheUtils.isOverTtl(e)
                }
                static splitKeyToPlacementLookupKeys(e) {
                    const t = (e, t, r) => 0 !== t && e ? `${r[0]},${e}` : null;
                    return "string" != typeof e ? [] : e.split(",").map(t).filter(e => null !== e)
                }
                setCacheClean(t) {
                    this.cacheUtils.setCacheClean(t, this.trcCache), e.splitKeyToPlacementLookupKeys(t).forEach(e => this.cacheByPlacementUtils.setCacheClean(e, this.trcCacheByPlacement))
                }
                cleanCache(t) {
                    const r = e => e.reduce((e, t) => e.concat(t), []);
                    this.cacheUtils.cleanCache(t, this.trcCache, this);
                    const i = r(t.map(e.splitKeyToPlacementLookupKeys));
                    this.cacheByPlacementUtils.cleanCache(i, this.trcCacheByPlacement, this)
                }
                removeKey(t) {
                    const r = TRC.CacheUtils.removeKey(t, this.trcCache);
                    !0 === r && this.currentSize--, e.splitKeyToPlacementLookupKeys(r).forEach(e => {
                        TRC.CacheUtils.removeKey(e, this.trcCacheByPlacement)
                    })
                }
                getTrcCache() {
                    return this.cacheUtils.getCache(this.pm)
                }
                getTrcCacheByPlacement() {
                    return this.cacheByPlacementUtils.getCache(this.pm)
                }
                removeToLimit(e) {
                    e = e || TRC.util.keys(this.trcCache.getData());
                    const t = this.currentSize - this.cacheSize;
                    let r;
                    this.sortByStamp(e);
                    for (let i = 0; i < t; i++) r = e.shift(), this.removeKey(r)
                }
                static sortByPlacements(e) {
                    let t, r;
                    for (let i = 1; i <= e.length - 1; ++i) {
                        for (t = e[i], r = i; r > 0 && e[r - 1] >= t;) e[r] = e[r - 1], --r;
                        e[r] = t
                    }
                }
                sortByStamp(e) {
                    let t, r;
                    for (let i = 1; i <= e.length - 1; ++i)
                        for (r = i; r > 0 && this.trcCache.getValue(e[r - 1]).s >= t;) t = e[r], e[r] = this.keys[r - 1], e[r] = t, --r
                }
                reloadCache() {
                    this.trcCache = this.getTrcCache(), this.trcCacheByPlacement = this.getTrcCacheByPlacement()
                }
                init() {
                    if (TRC.tlf && console.time("in init cache trc"), this.onlyClean) return void this.localStorage.removeKey(this.trcCacheName);
                    this.trcCache = this.getTrcCache(), this.trcCacheByPlacement = this.getTrcCacheByPlacement();
                    const e = TRC.util.keys(this.trcCache.getData());
                    this.currentSize = e.length, this.cleanCache(e), this.currentSize > this.cacheSize && this.removeToLimit(e), TRC.tlf && console.timeEnd("in init cache trc")
                }
                enableCacheViaStorageFlag() {
                    this.localStorage.setValue(this.TRC_CACHE_ACTIVE_STORAGE_KEY, "true")
                }
                isCacheEnabledViaStorageFlag() {
                    return "true" === this.localStorage.getValue(this.TRC_CACHE_ACTIVE_STORAGE_KEY)
                }
                getFeedRelatedKeyFromCache(e, t, r) {
                    const i = e.getData(),
                        o = r.split(",");
                    if (o.length > 2) return;
                    if (this.disableFeedCache) return;
                    const n = t.getValue(r);
                    if (n) return n.r && n.r.trc && n.r.trc.f ? r : void 0;
                    const s = `${o[0]},${o[1]}`;
                    return i[s]
                }
                static addNewFeedCardsToCachedResponse(e, t) {
                    e.forEach(e => {
                        let r;
                        for (let i = 0; i < t.length; i++)
                            if (e.uip === t[i].uip) {
                                t[i] = e, r = !0;
                                break
                            }
                        r || t.push(e)
                    })
                }
                static updateFeedConfigPropsInCache(e, t) {
                    e && t && Object.keys(e).forEach(r => {
                        Object.keys(t).some(i => {
                            if (i === r) {
                                const o = e[r],
                                    n = t[i];
                                return n.nb = o.nb, n.eof = o.eof, !0
                            }
                            return !1
                        })
                    })
                }
                shouldRequestUseViewIdFromCache(e, t, r, i) {
                    const o = e && e.response && i.cachedResponses[t];
                    return o && (this.isCacheEnabledViaStorageFlag() || !i.global["disable-trc-cache-reuse-view-id"] && r)
                }
            }
            TRC.TrcCache = e
        })(window, document), (() => {
            const e = TRC.TrcEventsLogger = {};
            e.sendPlacementEvent = function(e, t, r, i, o, n, s, a) {
                let l = !1;
                const c = t.trcResponse,
                    d = t.globalTrcResponseJSON,
                    h = c.ri,
                    p = d.sd,
                    u = t.placement,
                    g = Math.floor(1e5 * Math.random()),
                    m = {
                        ri: h,
                        sd: e.getSessionData(p),
                        ui: TRC.pageManager.getUserId(),
                        pi: e.getItemId(),
                        wi: d.wi,
                        pt: e.getItemType(),
                        vi: t.cachedViewId || TRC.pageManager.getPageData()
                    },
                    b = function() {
                        l || (l = !0, s && s())
                    };
                t.cachedViewId && (m.cache = "1"), __trcCopyProps(i, m), n ? (TRC.pConsole(u, "info", `sending event type: ${r}`, m, "object"), e.log1(r, m, o, b, u)) : e.logTrcEvent(r, m, o, b);
                const f = null;
                TRC.performance && "card-visible" === r && TRC.performance.mark(`11.0.${g}`, f, u, h, "card-visible", TRC.PerfEvenType.MARK), "number" == typeof a && TRC.Timeout.set(b, a)
            }
        })(),
        function(e, t) {
            TRC.TRCParser = {
                parseModeName: function(e) {
                    return e.mode || null
                },
                parsePlacementName: function(e) {
                    return e.placement || null
                },
                parseABModeName: function(e, t) {
                    var r = this.parseTestVariant(t);
                    return null === r ? null : "ab_" + e + "_" + r
                },
                parseBaseModeName: function(e) {
                    if ("object" != typeof e) return null;
                    var t = e["video-list"];
                    return "object" == typeof t && t["base-mode"] ? t["base-mode"] : null
                },
                parseTestVariant: function(e) {
                    var t;
                    return "object" != typeof e ? null : (t = e["video-list"], e.uvpw && "object" == typeof t && t["test-variant"] ? t["test-variant"] : void 0 === e["test-variant"] ? null : e["test-variant"])
                },
                IsBaseModeAndABModeExist: function(e) {
                    var t = this.parseBaseModeName(e),
                        r = this.parseTestVariant(e);
                    return !(!t || !r)
                },
                parseBaseModeAndABModeName: function(e) {
                    var t = this.parseTestVariant(e),
                        r = this.parseBaseModeName(e);
                    return null !== r && null !== t ? "ab_" + r + "_" + t : null
                },
                getItemCount: function(e) {
                    return e["video-list"].video ? e["video-list"].video.length : 0
                },
                hasVariantMismatch: function(e) {
                    var t = e["test-variant"],
                        r = e["video-list"]["test-variant"];
                    return !(!t || !r) && t !== r
                }
            }
        }(window, document), (() => {
            let e = "";
            const t = "rbox:serving-piggyback-enabled";
            TRC.TrcRequestPiggyBack = {
                setPiggyBackData: r => {
                    TRCImpl.global[t] && r && r.trc && r.trc.srpg && (e = r.trc.srpg)
                },
                getPiggyBackData: () => TRCImpl.global[t] && e ? e : ""
            }
        })(),
        function(win, doc) {
            var TRANSPORT_FORM_ELEMENT = "trc-transport-form-element";

            function initEventsRedirectParams(e, t, r) {
                if (this.enableTrcEventRoute || e.trc.el2r && TRC.util.isArray(e.trc.el2r)) {
                    try {
                        e.trc.el2r && (this.eventTypesToRoute = e.trc.el2r)
                    } catch (e) {
                        __trcError("TRC.parseResponse: even list to route is not a valid json", e)
                    }
                    e.trc.route && (t = e.trc.route.split(":")[1], r = this.global["trc-event-route-template"] || "<dc>-trc-events.taboola.com", this.trcEventRoute = r.replace("<dc>", t.toLocaleLowerCase()))
                }
            }
            var Manager = TRC.Manager = function(e, t) {
                    this.feedsManager = new window.TRC.FeedsManager(this), this.storiesManager = new window.TRC.StoriesManager(this), this.totalModeCounter = 0, this.renderedModeCounter = 0;
                    var r = 500;

                    function i(e, t) {
                        var r;
                        if ((t ? t.global : {})["disable-yield"]) return !1;
                        if (TRC.URL.prototype.getParameter.call(win.location.href, "yield-batch")) return !0;
                        for (var i in e) {
                            var o;
                            if (void 0 !== e[i].modeGroupOrder) return !0
                        }
                        return !1
                    }

                    function o(e) {
                        try {
                            var t = window.sessionStorage && window.sessionStorage.getItem("tbl_disable_cache");
                            e["enable-trc-cache"] && (t || TRC.URL.prototype.getParameter.call(location.href, "tbl_disable_cache")) && (window.sessionStorage.setItem("tbl_disable_cache", "true"), e["enable-trc-cache"] = !1)
                        } catch (e) {}
                    }
                    this.numOfResetCssDivs = 3, this.eventLogger = [], this.eventCounter = {}, this.NO_CONTENT = {
                        noItems: "NO_ITEMS",
                        mute: "MUTE",
                        error: "ERROR",
                        timeOut: "TIMEOUT"
                    }, this.cloudinarySortedRatios, this.cachedResponses = {}, this.pendingRequests = [], this.iframePixelReporter, this.virtualPlacementsManager = new TRC.VirtualPlacementsManager, this.reset = function() {
                        for (var e in this.reset = !0, TRC.dispatch("trcReset"), this.clearPageElements(), this.widgetContainerReset(), TRC.unifiedPlacementsProductsUtil.containersReset(this.feedsManager.feeds, "data-feed-main-container-id"), TRC.unifiedPlacementsProductsUtil.containersReset(this.storiesManager.stories, "data-stories-main-container-id"), TRC.callbacks) TRC.callbacks.hasOwnProperty(e) && e.search("recommendations") >= 0 && (TRC.callbacks[e] = function() {});
                        this.global["enable-old-preloadRequestLoader"] && this.preloadRequestLoader && (TRC.Timeout.clear(this.preloadRequestLoader.timeout), this.clearPreloadRequestLoader());
                        try {
                            delete win.trc_video_id, delete win.trc_article_id, delete win.trc_item_url, delete win.trc_adPlayer
                        } catch (e) {
                            win.trc_video_id = null, win.trc_article_id = null, win.trc_item_url = null, win.trc_adPlayer = null
                        } finally {
                            this.global["enable-old-preloadRequestLoader"] || this.clearPreloadRequestLoaderAndResetQueue()
                        }
                    }, this.renderRBox = function(e) {
                        var t = TRC.dom.closest(e.getContainer(), ".trc_rbox_container");

                        function r() {
                            try {
                                t.style.display = "none"
                            } catch (e) {
                                __trcError("Failed to hide main container on Error", e)
                            }
                        }
                        e.load(r)
                    }, this.getConfig = function(e, t) {
                        return void 0 !== e[t] ? e[t] : void 0 !== win["trc_" + t] && null != win["trc_" + t] ? e[t] = win["trc_" + t] : (void 0 !== this[t] && this[t], e[t] = this[t])
                    }, this.getItemId = function() {
                        var e = this.itemid;
                        return win.trc_video_id || "" == win.trc_video_id ? e = win.trc_video_id : (win.trc_article_id || "" == win.trc_article_id) && (e = win.trc_article_id), "" == e && (e = this.getAutoItemMeta("item-id", null, this.urlPreNormalizer, this["normalize-item-id"])), this.itemid = e
                    }, this.getGlobalRequestId = function() {
                        return TRC.events_ri
                    }, this.getGlobalSessionData = function() {
                        return TRC.session_data
                    }, this.getSessionId = function() {
                        return this.sessionId
                    }, this.getPlatformCode = function() {
                        return TRC.platform_code
                    }, this.getReferrer = function() {
                        return TRC.pageManager.getReferrer()
                    }, this.getItemUrlQueryString = function() {
                        if (this.itemUrlQueryString) return this.itemUrlQueryString;
                        var e = TRC.pageManager.getTopMostWindow(),
                            t = this.global["item-query-string-max-length"] || 400,
                            r;
                        if (TRC.isAMP) {
                            var i = TRC.util.splitUrlParts(document.referrer);
                            this.itemUrlQueryString = i.search || ""
                        } else this.itemUrlQueryString = e.location.search;
                        return this.itemUrlQueryString.length > t && (r = this.itemUrlQueryString.substring(0, t - 1), this.itemUrlQueryString = r.substring(0, r.lastIndexOf("&"))), this.itemUrlQueryString
                    }, this.getListSize = function(e) {
                        return e.visible && "rbox-only-video" !== e.mode ? this.calculateAutoListSize(e) : 0
                    }, this.getListId = function(e) {
                        return "rbox-only-video" === e.mode ? "rbox-invisible-widget" : e.list_id || "rbox-tracking" === e.mode ? e.mode : "rbox-" + (e.visible ? e.origin.toString() : "tracking")
                    }, this.getExtraResponsiveRecom = function(e) {
                        var t = this.getProperty(e.mode_name, "responsive-extra-columns"),
                            r = this.getProperty(e.mode_name, "rows");
                        return t ? t * (r || 1) : 0
                    }, this.getResponsiveRecommendations = function(e) {
                        var t, r = 0,
                            i, o, n, s = "function" == typeof win["matchMedia"];
                        t = this.getMatchMediaRuleMaxWidth(e, s);
                        for (var a = 0, l = e.length; a < l; a++) i = (n = e[a]).cells * n.rows, o = s && (win["matchMedia"]("(min-width: " + n.minWidth + "px)" + (isNaN(n.maxWidth) ? "" : " and (max-width: " + n.maxWidth + "px)")).matches || win["matchMedia"]("screen and (min-height: " + n.minWidth + "px)" + (isNaN(n.maxWidth) ? "" : " and (max-height: " + n.maxWidth + "px)") + " and (orientation: portrait)").matches), (isNaN(t) || n.minWidth <= t || t < 0 || o) && r < i && (r = i);
                        return {
                            listSize: r,
                            rule: r ? n : null
                        }
                    }, this.getMatchMediaRuleMaxWidth = function(e, t) {
                        var r, i;
                        if (!t) return screen.width;
                        for (var o = 0, n = e.length; o < n; o++)
                            if (i = e[o], (r = win["matchMedia"]("screen and (min-device-width: " + i.minWidth + "px)" + (isNaN(i.maxWidth) ? "" : " and (max-device-width: " + i.maxWidth + "px)"))).matches) return i.maxWidth
                    }, this.calculateAutoListSize = function(e) {
                        var t = this.getProperty(e.mode_name, "list-size"),
                            r = 0,
                            i = this.getProperty(e.mode_name, "responsive-rules"),
                            o = null,
                            n, s;
                        if (this.getProperty(e.mode_name, "mode-is-responsive")) {
                            if (i && i.length) return o = this.getResponsiveRecommendations(i), e.matched_rule = o.rule, o.listSize;
                            r = this.getExtraResponsiveRecom(e)
                        }
                        if (s = t + r, e.autoSize = this.getProperty(e.mode_name, "auto-size"), !e.autoSize) return e.autoSize = !1, s;
                        if (0 == (n = Math.floor(e.container.clientWidth > 0 ? e.container.clientWidth : e.container.offsetWidth))) return e.autoSize = !1, s;
                        for (var a = this.getProperty(e.mode_name, "auto-size-rules"), l = 0; l < a.length; l++) parseInt(a[l]["minWc"]) <= n && n <= parseInt(a[l]["maxWc"]) && (e.AutoSizeRule = a[l]);
                        return e.AutoSizeRule ? (e.rows = this.getProperty(e.mode_name, "rows"), e.rows <= 1 ? this.modes[e.mode_name]["list-size"] = e.AutoSizeRule.n + r : this.modes[e.mode_name]["list-size"] = e.AutoSizeRule.n * e.rows + r) : 0
                    }, this.calculateAutoSizeParameters = function(e) {
                        var t, r;
                        if (this.calculateAutoListSize(e), e.AutoSizeRule)
                            for (var i = Math.floor(e.container.clientWidth > 0 ? e.container.clientWidth : e.container.offsetWidth), o = e.AutoSizeRule["minWsRange"]; o <= e.AutoSizeRule["maxWsRange"]; o++)
                                if (t = (i - (e.AutoSizeRule.n - 1) * o) / e.AutoSizeRule.n, (r = parseInt(t)) == t) {
                                    e.AutoSizeRule.Wi = t, e.AutoSizeRule.Ws = o;
                                    break
                                }
                    }, this.getItemUrl = function() {
                        var e = this.itemurl;
                        return (win.trc_item_url || null == this.itemurl) && (e = this.getAutoItemMeta("item-url", null, this.urlPreNormalizer, this["normalize-item-url"])), this.itemurl = e
                    }, this.getBrowserUrl = function() {
                        const e = TRC.isAMP ? win.context : win;
                        return e.location.href
                    }, this.urlPreNormalizer = function(e, t) {
                        var r = this["prenormalize-" + e],
                            i;
                        if (!r) return t;
                        (r["truncate-at"] || []).forEach(function(e) {
                            var r = t.search(e);
                            r >= 0 && (t = t.substr(0, r))
                        });
                        var o = new win.TRC.URL(t);
                        for (var n in r)
                            if (r.hasOwnProperty(n)) {
                                if (!r[n]) continue;
                                switch (n) {
                                    case "host":
                                        delete o.host;
                                        break;
                                    case "trailing-dirsep":
                                        for (;
                                            "/" == o.pathname.substr(o.pathname.length - 1);) o.pathname = o.pathname.substr(0, o.pathname.length - 1);
                                        break;
                                    case "query":
                                        var s = [],
                                            a = o.search.replace(/^\?/, "").split("&");
                                        "string" == typeof(i = r[n]) && (i = new RegExp(i));
                                        var l = i instanceof Array ? function(e) {
                                            for (var t = 0; t < i.length; t++)
                                                if (e == i[t]) return !0;
                                            return !1
                                        } : i instanceof RegExp ? i.test.trcBind(i) : function() {
                                            return !1
                                        };
                                        a.forEach(function(e) {
                                            l(decodeURIComponent(e.split("=")[0])) && s.push(e)
                                        }), o.search = (s.length ? "?" : "") + s.join("&");
                                        break;
                                    case "fragment":
                                        var c = o.hash.replace(/^#/, "");
                                        "string" == typeof(i = r[n]) && (i = new RegExp(i)), o.hash = "", i instanceof RegExp && i.test(c) ? o.hash = "#" + c : i instanceof Array && i.forEach(function(e) {
                                            c.search(e) >= 0 && (o.hash = "#" + c)
                                        })
                                }
                            }
                        return o.pathname || (o.pathname = "/"), "item-id" == e ? o.toString().toLowerCase() : o.toString()
                    }, this.genCallback = function(e) {
                        var t = "recommendations_" + (TRC.callbacks.auto_gen_callback_seq = TRC.callbacks.auto_gen_callback_seq + 1 || 1);
                        return TRC.callbacks[t] = e, "TRC.callbacks." + t
                    }, this.formatTRCRequest = function(e, t, r) {
                        try {
                            e.hasOwnProperty("rbox-tracking") && Object.keys && Object.keys(e).length > 1 && delete e["rbox-tracking"], TRC.pageLevelFeaturesManager.disableFeatureOnIframe();
                            var i = new this.GlobalRequetParams,
                                o;
                            return (TRC.isOptim("geom") && !r || !TRC.isOptim("geom")) && (this.setGlobalParmas(i, t), this.setGlobalParamsDecorators(i)), i.setPlacementsParamsArray(this.getPlacementsRequestParams(e, i, r)), TRC.pConsole("recommendations", "debug", "hook : normalize-request-param", this["normalize-request-param"].toString(), "string"), i.setAll(this["normalize-request-param"](i.getAll(), null)), TRC.DynamicModulesManager.getDynamicModules("normalize-request-param").forEach(function(e) {
                                var t = e.callback(i.getAll());
                                t && "globalRequestParams" === t.toString() && i.setAll(t)
                            }), this.setNewPlacementsInRequest(e, i), TRC.pConsole("recommendations", "info", "formatted request", i.getAll(), "object"), i.getAll()
                        } catch (e) {
                            __trcError("TRC.formatTRCRequest", e)
                        }
                    }, this.setGlobalParmas = function(e, t) {
                        var r = e,
                            i = TRCImpl ? TRCImpl.global : {};
                        r.setItemId(this.getItemId()), r.setTemplate(TRC.pageTemplate), r.setItemType(t || this.getItemType()), r.setSessionData(this.getSessionData(TRC.session_data)), r.setUserId(this.getUserId(TRC.user_id)), i["store-userid-first-party-cookie"] && r.setUserIdFirstPartyCookie(TRC.pageManager.getUserIdFirstPartyCookie()), r.setLoaderBuildTime(this.global["bakeTime"]), r.setViewId(TRC.pageManager.getPageData()), r.setClientVersion(this.version), r.setPublisherVersion(this.getPublisherVersion()), r.setItemUrl(this.getItemUrl()), r.setDeviceId(this.deviceId), r.setUnifiedId(this.unifiedId), r.setUserType(this.userType), r.setPaywall(this.paywall), r.setPremium(this.premium), r.setAdvertorialSource(this.advertorialSource), r.setExternalPageView(this.external_page_view), r.setBlockVideoLoader(this.blockVideoLoader ? "1" : "0"), r.setUserLanguages(this.getUserLanguages()), r.setExperimentVariant(this.getSystemFlag("experimentID")), this.consentState && (r.setCmpStatus(this.consentState.cmpStatus), r.setGdprApplies(this.consentState.gdprApplies), r.setConsentDaisyBit(this.consentState.consentData), r.setConsentTcString(this.consentState.tcString, this.global["max-tcs-size"]), r.setGdprWasTimeout(this.consentState.wasTimeout)), TRC.consentData && (r.setCmpStatus(TRC.consentData.cmpStatus), r.setGdprApplies(TRC.consentData.gdprApplies), r.setConsentDaisyBit(TRC.consentData.consentDaisyBit)), this.getUSPData(function(e) {
                            TRC.ccpaPs = e
                        }), r.setCex(TRC.cexConsentData), r.setCcpaDns(TRC.ccpaCdns), r.setCcpaPs(TRC.ccpaPs), r.setExcludedPublishers(TRC.exp), r.setBlockThumbnailVideoLoader(this.blockThumbnailVideoLoader ? "1" : "0"), i["flc-enabled"] && TRC.flc && r.setFlc(TRC.flc.readFlcFromLocalStorage()), void 0 !== navigator.connection && (r.setConnectionType(navigator.connection.type), r.setConnectionSpeed(navigator.connection.effectiveType)), r.setPageLevelFeature(TRC.pageLevelFeaturesManager.pageLevelFeatures), r.setTrcPiggyBack(TRC.TrcRequestPiggyBack.getPiggyBackData()), r.setCseg(TRC.cseg), this.global["pass-browser-url"] && r.setBrowserUrl(this.getBrowserUrl())
                    }, this.setNewPlacementsInRequest = function(e, t) {
                        var r, i, o = t.getPlacementsParamsArray();
                        if (e)
                            for (var n = 0, s = o.length; n < s; n++) r = o[n].uip, i = o[n].orig_uip, e[r] || (e[r] = e[i], e[i] = e[r], e[i].new_uip = r)
                    }, this.setRequestMetaData = function(e) {
                        var t = {};
                        for (var r in this.tags && this.tags.length && (t.k = this.tags.join(",")), this.metadata) this.metadata.hasOwnProperty(r) && this.metadata[r] && (t[this.parseMetaName(r)] = this.metadata[r]);
                        TRC.util.hasKeys(t) && e.setMetaData(t)
                    }, this.parseMetaName = function(e) {
                        switch (e) {
                            case "user":
                                return "u";
                            case "uploader":
                                return "U";
                            case "content-rating":
                                return "c";
                            case "publish-date":
                                return "t";
                            case "duration":
                                return "d";
                            case "category":
                                return "x";
                            case "v":
                            case "r":
                            default:
                                return e
                        }
                    }, this.getPlacementsRequestParams = function(e, t, r) {
                        for (var i = [], o, n = TRC.util.keys(e), s, a, l = 0; l < n.length; l++) s = e[a = n[l]], __trcInfo(s.placement + " " + s.mode_name), s.placement && (this.setModeGlobalParamsDecorators(t, s), (o = this.createNewPlacementParams(s, e[a], r)).setAll(this["normalize-request-param"](o.getAll(), s.mode_name)), i.push(o.getAll()));
                        return i
                    }, this.createNewPlacementParams = function(e, t, r) {
                        var i = new this.PlacementParams;
                        return i.setListId(this.getListId(e)), i.setListSize(this.getListSize(e)), i.setUIMode(this.computeUIM(t)), i.setUIPlacement(e.placement), i.setOriginalUIPlacement(e.placement), this.setPlacementParamsDecorators(i, e, r), i
                    }, this.setPlacementParamsDecorators = function(e, t, r) {
                        var i = this.getProperty(t.mode_name, "required-attributes");
                        if ("string" == typeof i && "none" != i && e.setRequiredAttr(i), t.dfp && t.dfp.campaign_id && e.setNativeCampaignID(t.dfp.campaign_id), t.category && e.setAllowedCategories(t.category), this.enablePlacementGeometry && (TRC.isOptim("geom") && !r || !TRC.isOptim("geom")) && this.addGeometryPlacementData(e, t.container), t.exclude && e.setExclusions(TRC.text.toStringList(t.exclude)), t.fi && (TRC.isAMPSplitFeed && (t.fi = this.ampSplitFeedManager.handleFeedIndexOffset(t)), e.setFeedIndex(t.fi)), t.fb) {
                            if (TRC.isAMPSplitFeed) {
                                var o = Number(this.ampSplitFeedManager.syncFb);
                                null !== o && (t.fb = o)
                            }
                            e.setFeedBatch(t.fb)
                        }
                        t.fti && e.setFeedTemplateId(t.fti)
                    }, this.addGeometryPageData = function(e, t) {
                        try {
                            TRC.tlf && console.time("page geometry"), e.setArticlePos(this.getGeometryPageData(t)), e.setScreenWidth(window.screen.availWidth), e.setScreenHeight(window.screen.availHeight), e.setBrowserWidth(TRC.dom.getWindowWidth()), TRC.tlf && console.timeEnd("page geometry")
                        } catch (t) {
                            e.bad = -5
                        }
                    }, this.addGeometryExtendedPageData = function(e) {
                        try {
                            TRC.tlf && console.time("page geometry extended"), e.setScreenDensity(TRC.dom.getScreenDensity()), e.setBrowserHeight(TRC.dom.getWindowHeight()), e.setDocumentWidth(TRC.dom.getDocumentWidth()), e.setDocumentHeight(TRC.dom.getDocumentHeight()), TRC.tlf && console.timeEnd("page geometry extended")
                        } catch (t) {
                            e.bad = -6
                        }
                    }, this.addGeometryPlacementData = function(e, t) {
                        try {
                            TRC.tlf && console.time("mode geometry - " + e.getAll().uim), e.setContainerPos(this.getPosFromDocTop(t, "top")), e.setContainerWidth(this.getModeWidth(t)), TRC.tlf && console.timeEnd("mode geometry - " + e.getAll().uim)
                        } catch (t) {
                            e.cd = -5
                        }
                    }, this.getModeWidth = function(e) {
                        return e.getBoundingClientRect().width
                    }, this.getGeometryPageData = function(e) {
                        var t, r;
                        switch (!0) {
                            case "function" != typeof doc.querySelector:
                                return -4;
                            case "string" == typeof e:
                                return this.computeGeometryPageData(e);
                            case e instanceof Array && e.length > 0:
                                for (r = 0; r < e.length; r++)
                                    if ((t = this.computeGeometryPageData(e)) > -1) return t;
                                return -2;
                            default:
                                return -1
                        }
                    }, this.computeGeometryPageData = function(e) {
                        try {
                            var t = doc.querySelector(e);
                            return t ? this.getPosFromDocTop(t, "bottom") : -2
                        } catch (e) {
                            return -3
                        }
                    }, this.getPosFromDocTop = function(e, t) {
                        return e.getBoundingClientRect()[t] + TRC.dom.getPageVerticalScroll()
                    }, this.setGlobalParamsDecorators = function(e) {
                        TRC.pageManager.getValue("past-exclusions") && e.setPastExclusions(TRC.pageManager.getValue("past-exclusions")), this.excludedItems && e.setExclusions(TRC.text.toStringList(this.excludedItems)), this.getReferrer() && e.setReferrer(this.getReferrer()), this.enablePageGeometry && this.addGeometryPageData(e, this.global["page-geometry-selectors"]), this.enablePageGeometryExtended && this.addGeometryExtendedPageData(e), this.setRequestMetaData(e), !0 === this.global["send-item-query-string-in-req"] && e.setItemUrlQueryString(this.getItemUrlQueryString()), TRC.networkId && e.setNetworkID(TRC.networkId), this.tracking_codes && e.setUTMParams(this.buildUTMParams(this.tracking_codes)), this.additional_data && e.setAdditionalData(this.additional_data), TRC.rtbRealTimeUserId && (TRC.performance && TRC.performance.mark("RealTimeUserSyncMainStop", null, "RealTimeUserSyncMain", 0, "RealTimeUserSyncMain", TRC.PerfEvenType.STOP), e.setRtui(TRC.rtbRealTimeUserId))
                    }, Manager.prototype.buildUTMParams = function(e) {
                        var t = [];
                        for (var r in e) e.hasOwnProperty(r) && t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
                        return t.join("&")
                    }, this.setModeGlobalParamsDecorators = function(e, t) {
                        this.setPlayerGlobalParams(e, t), 0 == t.origin.toString().indexOf("h2") && e.setItemId("_homepage_")
                    }, this.setPlayerGlobalParams = function(e, t) {
                        e.setItemId(t.item_id), e.setItemType(t.item_type), e.setItemUrl(t.item_url)
                    }, this.computeUIM = function(e) {
                        var t = e.mode_name,
                            r, i, o;
                        return t + (this.global["disable-network-uim"] || void 0 === TRC.networkId ? "" : ":pub=" + TRC.networkId) + (TRC.blocker.blockedState > -2 && this.global["use-abp-uim"] ? ":abp=" + TRC.blocker.blockedState : "") + (this.global["use-calibration-uim"] && this.getProperty(t, "mode-is-responsive") ? this.computeCalbUIM(e) : "")
                    }, this.computeCalbUIM = function(e) {
                        if (!e.matched_rule) return "";
                        var t = TRC.implClasses.TRCRBox,
                            r = this.modes[e.mode_name],
                            i = e.matched_rule,
                            o = "none" != r["thumbnail-position"] && r["thumbnail-position"] || void 0,
                            n = o ? TRC.math.round10(t.prototype.getRuleAspectRatio(i, "ratio") || t.prototype.getThumbAspectRatio(r, "ratio") || t.prototype.DEFAULT_THUMB_RATIO, -1) : void 0,
                            s = o ? this.caclculateThumbnailWidth(e.container, i) : void 0;
                        return ":type=responsive,rows=" + i.rows + ",cells=" + i.cells + ",thumb-pos=" + o + (o && "none" != o ? ",thumb-ratio=" + n + ",thumb-width=" + s : "")
                    }, this.caclculateThumbnailWidth = function(e, t) {
                        var r = TRC.css.responsive.getRulePercentageWidth(t.cells, t.margin.h) / 100,
                            i, o = 50;
                        return e && r ? (i = parseInt(e.clientWidth > 0 ? e.clientWidth : e.offsetWidth, 10), TRC.math.roundByDecimal(i * r, o)) : null
                    }, this.dispatchLoadRequest = function(e) {
                        this.global["enable-old-preloadRequestLoader"] ? this.performDispatchLoadRequest(e) : TRC.recoRequestsQueue.add(this.performDispatchLoadRequest.bind(this, e))
                    }, this.getCalculatedTimeout = function() {
                        var e = TRC.URL.prototype.getParameter.call(location.href, "trc_debug");
                        return TRC.util.isTrue(e) || "yes" === e ? 0 : this.getProperty(null, "timeout") || 8e3
                    }, this.performDispatchLoadRequest = function(e, t) {
                        if (TRC.util.hasKeys(e))
                            if (this.global["enable-old-preloadRequestLoader"] && this.preloadRequestLoader && !this.global["disable-simultaneous-req-protection"]) {
                                var r = arguments;
                                TRC.Timeout.set(function() {
                                    r.callee.apply(this, [].slice.call(r).concat([!0]))
                                }.trcBind(this), 100)
                            } else {
                                var i = this.getCalculatedTimeout(),
                                    o, n, s = !1;
                                if (this.preloadRequest = e, null != this.getItemId()) {
                                    this.delayedDispatchLoadRequest = null;
                                    try {
                                        if (this.formattedTRCRequest = o = this.formatTRCRequest(this.preloadRequest), TRC.isAMPSplitFeed && this.ampSplitFeedManager.copyReqToReqForCacheKey(o), TRC.utm.push((new Date).getTime() - TRC.utm.start), this.isValidForCache(o.it) && (s = this.activateTrcCache(o, this.trcCache, this.trcCacheItemType, this.handleLoadResponse, this))) return "function" == typeof t && t(), void(TRC.usingCacheForPageRefresh = !this.trcCache.isCacheEnabledViaStorageFlag());
                                        o.cb = this.genCallback(this.handleLoadResponse.trcBind(this, o.cacheKey)), this.useAlternativeDomain(e) && this.global["requests-domain-alternative"] && (o.trcDomain = TRC.shiftDomain(this.global["requests-domain-alternative"])), n = this.createRequestUrl(o);
                                        var a = void 0 === this.global["enable-trc-ajax"] || TRC.util.isTrue(this.global["enable-trc-ajax"]);
                                        TRC.workerInited || TRC.initWorkerIfAvailable(n, i), TRC.worker ? this.callTrcByWorker(n, o, i) : a ? this.callTrcByAjax(n, o, i, t) : this.callTrc(n, o, i, t), delete o.cacheKey, TRC.MetricsManager.sendMetricsEvent(TRC, this, {
                                            name: "LoadRequestSent",
                                            value: "1",
                                            type: "counter"
                                        }, null)
                                    } catch (e) {
                                        __trcError("TRC.dispatchLoadRequest: Error in request processing", e)
                                    }
                                } else this.delayedDispatchLoadRequest = this.dispatchLoadRequest.trcBind(this, e)
                            }
                    }, this.useAlternativeDomain = function(e) {
                        var t = !1;
                        for (prop in e)
                            if (e[prop]["alternative_domain"]) {
                                t = !0;
                                break
                            }
                        return t
                    }, this.isValidForCache = function(e) {
                        return !!(this.trcCache && this.trcCache.isValidCache && (this.trcCache.isCacheEnabledViaStorageFlag() || this.trcCacheItemType[e] && ("" === this.trcParams || TRC.pageManager.getForceTrcCache())))
                    }, this.activateTrcCache = function(e, t, r, i, o) {
                        if (!e.r && !e.r.length) return !1;
                        void 0 === TRC.currentAmpFrameNum && (TRC.currentAmpFrameNum = 1);
                        var n = t.extractAndResolveKey(e),
                            s = t.getCacheResponse(n),
                            a = "c" === r[e.it];
                        if (s && s.response && !this.cachedResponses[n]) {
                            if (a || t.isCacheEnabledViaStorageFlag() || s.isSelective) return this.setCachedResponse(s, i, o), this.cachedResponses[n] = !0, !0;
                            "d" === r[e.it] && (e.cache = 1, e.cacheKey = n)
                        } else e.cacheKey = n, t.shouldRequestUseViewIdFromCache(s, n, a, this) && (e.vi = s.viewId);
                        return !1
                    }, this.setCachedResponse = function(e, t, r) {
                        e.response.cached = !0, e.response.cachedViewId = e.viewId, TRC.Timeout.set(t.trcBind(r, null, e.response, !0), 0), TRC.pConsole("recommendations", "warn", "using cached recommendations", "")
                    }, this.createRequestUrl = function(e) {
                        this.systemFlags && this.systemFlags.loaderType && (e.lt = this.systemFlags.loaderType);
                        var t = "";
                        e.cache && (t = "&cache=1", delete e.cache);
                        var r = e.trcDomain ? e.trcDomain : this.domain,
                            i = protocol + "//" + r + "/" + encodeURIComponent(TRC.publisherId) + "/trc/3/json?" + "tim=" + encodeURIComponent(__trcClientTimestamp()) + (this.trcByPass ? "&trc_skip_failover=yes&" : "&") + (this.enableTrcRoute && this.trcRoute ? "route=" + this.trcRoute + "&" : "") + (this.enableExperimentsVariantIdEvent && this.experimentsVariantIdParamsStr ? this.experimentsVariantIdParamsStr + "&" : "") + (this.getLoaderTypesValue() ? this.getLoaderTypesValue() + "&" : "") + "data=" + encodeURIComponent(__trcJSONify(e)) + this.getOptOut() + TRC.pageManager.additionalDispatchParams() + t + (win.trc_debug_level > 1 ? "&llvl=" + win.trc_debug_level : "");
                        return this.enableTrcEventRouteExperiment && (i += "&trc_evi=21|1434|2154"), i
                    }, this.abortLoadRequest = function(e, t) {
                        var r;
                        for (r in e ? TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.timeOut) : TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.error), this.preloadRequest)
                            if (this.preloadRequest.hasOwnProperty(r)) {
                                if (r.search("rbox-tracking") >= 0) continue;
                                e && (e = !1, __trcWarn("TRC.abortLoadRequest: pv3 timeout"), t && (TRC.callbacks[t.replace("TRC.callbacks.", "")] = function() {})), TRC.dispatch("onRboxFlowError", {
                                    placement: r
                                });
                                var i = this.preloadRequest[r];
                                delete this.preloadRequest[r], i.loadRBoxRequestFailed = !0, this.internalDrawRBox(i)
                            }
                        this.clearPreloadRequestLoaderAndCallNext()
                    }, this.getOptOut = function() {
                        return void 0 !== this.userOptOut && null !== this.userOptOut && [!0, "true", !1, "false"].indexOf(this.userOptOut) > -1 ? "&user.opt_out=" + this.userOptOut : ""
                    }, this.handleLoadResponseFailure = function(e) {
                        TRC.performance && TRC.performance.mark("5.1.8", null, "TrcPv3", this.lastReqId, "pv3call", TRC.PerfEvenType.STOP), null == this.preloadRequestLoader || !this.global["disable-simultaneous-req-protection"] && e && e.target && this.preloadRequestLoader.src !== e.target.src || (__trcError("Server did not respond to loadRBox"), this.abortLoadRequest())
                    }, this.isActivePlacementData = function(e, t) {
                        return !e.new_uip || t === e.new_uip
                    }, this.loadEid = function(e) {
                        !this.global["eid-enabled"] || e.trc["DNT"] || e.trc["cm"] || TRC.ModuleLoader.load("tfa-eid", TRC.tfaEid, function() {})
                    }, this.sendUserIdsMapping = function(e) {
                        if (this.global["user-mapping-enabled"] && !e.trc["DNT"] && !e.trc["cm"] && TRC.user_id) {
                            var t = TRC.pageManager.getUserIdFromReferrer();
                            if (t && TRC.user_id !== t) {
                                var r = [];
                                r.push("uils=" + TRC.user_id), r.push("uiref=" + t);
                                var i = new Image;
                                return i.src = TRC.PROTOCOL + "//trc.taboola.com/sg/taboola-rbox/1/um/?" + r.join("&"), i
                            }
                        }
                    }, this.handleLoadResponse = function(e, t, r) {
                        TRC.performance && TRC.performance.mark("handleLoadResponseStart", null, "handleLoadResponse", "", "handleLoadResponse", TRC.PerfEvenType.START), this.global["disable-delta-mode-switch"] || TRC.deltaModeAdapter.switchModeNamesIfInDeltaTest(this, t), this.cssLiteInject && !this.global["css-isolation"] && TRC.css.utils.bakeCss(t, this), TRC.ItemOverride.run(this.global["enable-item-override"], t);
                        var i, o = TRCImpl ? TRCImpl.global : {};

                        function n() {
                            this.parseResponse(t, r), TRC.util.isPercentEnabled(TRCImpl.global, "enable-feed-view-iframe-report") && TRC.FeedViewInIframeReport.report(), this.global["enable-old-preloadRequestLoader"] && this.checkPreloadRequest(i), this.global["smart-ellipsis"] && TRC.dom.on(win, "resize", TRC.util.debounce(this._repaintEllipsis, 500, !1, this)), this.clearPreloadRequestLoaderAndCallNext();
                            try {
                                TRC.SpotlightLoader.load(t)
                            } catch (e) {
                                __trcError("Error while trying to load Spotlight")
                            }
                            TRC.tlf && console.timeEnd("in handleLoadResponse"), TRC.tlf && console.timeStamp("end handleLoadResponse"), TRC.performance && TRC.performance.mark("6.0.9", null, "TrcPv3", "", "pv3prase", TRC.PerfEvenType.STOP)
                        }
                        try {
                            if (TRC.tlf && console.timeStamp("start handleLoadResponse(pv3)"), TRC.tlf && console.time("in handleLoadResponse"), TRC.performance && TRC.performance.mark("6.0.1", null, "TrcPv3", "", "pv3prase", TRC.PerfEvenType.START), TRC.pConsole("recommendations", "info", "recommendations response", t, t.trc.verbose ? "verbose" : "object"), TRC.pConsole("", "time", "recommendations loaded", ""), TRC.utm.push((new Date).getTime() - TRC.utm.start), t && t.trc && t.trc.f)
                                for (var s = Object.keys(t.trc.f), a = 0; a < s.length; a++) {
                                    var l = s[a];
                                    if (this.feedsManager && this.feedsManager.feeds && this.feedsManager.feeds[l]) {
                                        var c = this.feedsManager.feeds[l];
                                        if (c && c.infiniteScrollEngine && c.infiniteScrollEngine.preventReachingTheFooter) {
                                            var d = c.infiniteScrollEngine.preventReachingTheFooter;
                                            d && d.lateRenderEnabled && c.infiniteScrollEngine.preventReachingTheFooter.handleBatch(e, t)
                                        }
                                    }
                                }
                            if (t && t.trc && t.trc.ui) {
                                this.watchedItem = t.trc["wi"], this.globaleRequestId = t.trc["vl"] && t.trc["vl"].length ? t.trc["vl"][0].ri : this.globaleRequestId, TRC.events_ri = this.globaleRequestId, TRC.session_data = t && t.trc ? t.trc["sd"] : null, TRC.platform_code = t && t.trc ? t.trc["plc"] : null, TRC.user_id = t.trc["ui"] || null, TRC.isOptim("defer-events") ? setTimeout(function() {
                                    TRC.eventDelegator.dispatch("user_id_ready")
                                }, 0) : TRC.eventDelegator.dispatch("user_id_ready"), TRC.eventDelegator.dispatch("user_id_ready");
                                var h = TRC.util.parseTimeout(this.global["defer-cookie-sync"]);
                                t.trc.stp && (-1 === h ? TRC.dispatch("send_user_id", t.trc.stp) : setTimeout(function() {
                                    TRC.dispatch("send_user_id", t.trc.stp)
                                }, h)), t.trc.jst && (-1 === h ? TRC.dispatch("load_script_tags", t.trc.jst) : setTimeout(function() {
                                    TRC.dispatch("load_script_tags", t.trc.jst)
                                }, h)), TRC.responseLoaded = !0, TRC.alertVVResponseLoaded && TRC.alertVVResponseLoaded(TRC.version)
                            }
                            if (TRC.CustomModulesManager.getCustomModulesFromResponse(t), !(t && t.trc && t.trc["vl"] && t.trc["vl"].length)) return __trcError("Invalid response from server: " + t), this.abortLoadRequest(), void TRC.MetricsManager.sendMetricsEvent(TRC, this, {
                                name: "EmptyResponse",
                                value: "1",
                                type: "counter"
                            }, null);
                            t.trc["tc"] && !TRC.taboolaConsole && TRC.Manager.prototype.loadExternal("//c2.taboola.com/console/console_loader.js", "js"), TRC.UserIdMerger.notifyPossibleUserChange(this, TRC.publisherId, t.trc["ui"], t.trc["sd"]), t.trc["cm"] || TRC.pageManager.storePublisherValue(TRC.publisherId, "session-data", t.trc["sd"]), TRC.TrcRequestPiggyBack.setPiggyBackData(t), TRC.translationManager.setTranslations(t.trc.tslt), t.trc["DNT"] && "TRUE" === t.trc["DNT"].toUpperCase() ? (TRC.doNotTrack = !0, TRC.pageManager.removeAllKeys(), TRC.pageManager.removeUserId()) : (TRC.pageManager.storeUserId(t.trc["ui"], t.trc["cm"]), !0 !== o["store-sessiondata-first-party-cookie"] && "true" !== o["store-sessiondata-first-party-cookie"] || TRC.pageManager.storeSessionId(t.trc["sd"], t.trc["cm"]), TRC.pConsole("page", "debug", "Storing user-id: " + t.trc["ui"])), this.sendUserIdsMapping(t), this.loadEid(t), e && (this.trcCache.cacheResponse(e, t, TRC.pageManager.state.moreDispatchParams), this.cachedResponses[e] = !0), o["disable-page-level-feature"] || TRC.pageLevelFeaturesManager.getFeature(t), n.call(this), this.global["enable-old-preloadRequestLoader"] ? this.handleLoadResponseFailure() : this.checkPreloadRequest(), this.triggerAfterHandleLoadResponseCustomModuleHook(e, t, r), TRC.dispatch("trcResponseHandled"), TRC.performance && TRC.performance.mark("handleLoadResponseStop", null, "handleLoadResponse", "", "handleLoadResponse", TRC.PerfEvenType.STOP)
                        } catch (e) {
                            __trcError("Error in TRC.handleLoadResponse : ", e)
                        }
                    }, this.triggerAfterHandleLoadResponseCustomModuleHook = function(e, t, r) {
                        TRC.CustomModulesManager.runHook("after-handle-load-response", null, this, [e, t, r])
                    }, this.parseResponse = function(e, r) {
                        var o, n, s, a, l, c = {},
                            d, h, p, u = e.trc["vl"];
                        this.yieldingEnabled = i(this.preloadRequest, this), this.testData = e.trc["td"], this.experimentsData = e.trc["evi"], this.experimentsHash = e.trc["evh"], this.sourceCategory = e.trc["scat"], e.trc["vpl"] && (this.virtualPlacementsManager.response = e.trc["vpl"]);
                        var g = this.parseClientGenericAction(e),
                            m, b;
                        if (this.initCcpa(g, e), this.initPubConfigGenericActionOverride(g), this.renderController.setLazyConfig(), this.renderController.setPlacementsConfig(e.trc.lzr), this.enableTrcRoute && (d = e.trc["route"]) && (this.trcRoute = d), this.enableLoaderCacheBuster) try {
                            window.fetch && window.Request && "deflated" === this.systemFlags.loaderType ? (m = TRC.PROTOCOL + "//cdn.taboola.com/libtrc/" + t.publisher + "/loader.js", e.trc["lfr"] && (b = new Request(m, {
                                cache: "reload",
                                mode: "no-cors"
                            }), fetch(b))) : __trcDebug("Cache Bust not supported")
                        } catch (e) {
                            __trcError("failed to run cache busting on this browser on: " + m, e)
                        }
                        if (initEventsRedirectParams.call(this, e, h, p), this.enableExperimentsVariantIdEvent && this.experimentsData && this.buildExperimentsVariantIdParams(), e.trc["s"]) {
                            var f = u.filter(function(e) {
                                return !!e.stpl
                            });
                            this.storiesManager.createNewStories(e.trc, f.length)
                        }
                        for (TRC.isAMPSplitFeed && (this.ampSplitFeedManager.updateFeedIndexAndBatch(e), this.ampSplitFeedManager.cacheOrAssignFeedResponseData(e)), __trcCopyProps(e.trc["f"], this.feedsManager.configs), this.renderController.addResponse(e), s = 0; s < u.length; s++) {
                            var v;
                            if ((a = u[s])["pcp"] && TRC.isAMPSplitFeed && this.ampSplitFeedManager.handlePubCardInResponse(e, s), o = a.uip, this.global["disable-skip-placement"] || !this.shouldSkipPlacement(a, e))
                                if (this.sessionId = e.trc["si"], void 0 !== (n = this.getOrCreatePlacementData(o, a)))
                                    if (n.unifiedPlacement = a.uuip, n.globalTrcResponseJSON = e.trc, n.trcResponse = a, this.currentRecommendation = a, !TRC.fallbackApi.shouldRenderPlacement(a, this.preloadRequest) || TRC.personalizationApi.killSwitchEnabled(a, e.trc.op)) TRC.EventsAPI.dispatchPlacementNoRendered(n, "notAllowedToRender");
                                    else if (o.search("rbox-tracking") >= 0) n.response = this.formatPlacementRecommendations(e, s);
                            else if (this.feedsManager.hasFeedConflict(o, a.fpl)) __trcWarn("Feed conflict detected for '" + o + "' with feed placement '" + a.fpl + "' and test data '" + this.td + "' and '" + JSON.stringify(this.experimentsData) + "'"), TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.noItems, o, !0);
                            else {
                                if (a.et && (n.expandOptions = this.getExpandOptions(a)), n.isCache = r, e.cachedViewId && (n.cachedViewId = e.cachedViewId), a.fpl) {
                                    if (this.feedsManager.invalidFeedsMap[a.fpl]) continue;
                                    if (this.feedsManager.handleFeedCardPlacement(a, n), !n.parentFeed) continue
                                } else a.stpl && this.storiesManager.handleStoryPlacement(a, n);
                                if (TRC.isAMPSplitFeed && !0 === this.ampSplitFeedManager.shouldBreakForAMPSplitFeed) break;
                                if (!n.scriptData && !n.publisherCardData)
                                    if (a.es) TRC.ExternalContainerAppender.move(a.es, n.container);
                                    else if (this.isStandaloneVideo(a)) n.videoTagLoader = new TRC.VideoTagLoader(this, a.vtag, n, null, {
                                    "session-data": e.trc["sd"],
                                    req: a["ri"]
                                }), n.videoTagLoader.loadVideo();
                                else if (l = this.formatPlacementRecommendations(e, s, c), n.response = l, this.addFormattedResponseToWidgetAddedFromTrc(a, l, n.addWidget), n.response) {
                                    n.dc && delete n.dc;
                                    var C = l.trc["video-list"];
                                    TRC.FloatingUnitGenerator.isFloatingUnit(C) ? this.floatingUnitGenerator = new TRC.FloatingUnitGenerator(l, n, this) : (C && (n["container-selectors"] = C["container-selectors"], n["render-on-orig-container"] = C["render-on-orig-container"]), !a.fpl && TRC.FeedViewWidgetLoaderManager.isFeedViewWidget(this, n) && new TRC.FeedViewWidgetLoaderManager(n), this.initRBoxDrawingIfPlacementEligible(n))
                                }
                            } else __trcWarn("Invalid placement in server response", o);
                            else __trcDebug("'parseResponse' : Skip on placement '" + o + "'")
                        }
                        if (c.text && (TRC.cssStack ? TRC.cssStack.addStyle("override", c.text, TRC.styleInjected) : TRC.dom.injectStyle(c.text)), this.yieldingEnabled) {
                            var y = this.global ? this.global : {},
                                T = y["yield-delay"] ? y["yield-delay"] : 0;
                            this.executeRBoxDrawQueue(T)
                        }
                    }, this.checkPreloadRequest = function() {
                        var e = TRC.util.parseTimeout(this.global["defer-scripts-render"]);
                        for (var t in this.preloadRequest)
                            if (this.preloadRequest.hasOwnProperty(t) && (win.placementData = this.preloadRequest[t], this.placementShouldHaveResponseData(placementData, t) && !this.placementHasResponseData(placementData) && (__trcWarn("Server did not provide response for '" + t + '"!'), delete this.preloadRequest[t], this.shouldRetryFailedPlacementRequest(placementData) ? this.retryFailedPlacementRequest(t, placementData) : TRC.dispatch("onRboxFlowError", {
                                    placement: t
                                })), this.isActivePlacementData(placementData, t) && placementData.dc && placementData.dc.renderAd(), placementData.scriptData && (-1 !== e ? setTimeout(function(e, t) {
                                    TRC.ScriptRenderer.render(t.scriptData, t)
                                }.trcBind(null, placementData.scriptData, placementData), e) : TRC.ScriptRenderer.render(placementData.scriptData, placementData)), placementData.iframeData)) {
                                var r = "tb-jp" === this.language ? "ja-JP" : this.language;
                                TRC.taboolaConnect.createCard(placementData.container, placementData.iframeData.url, placementData.iframeData.config, placementData.placement, r)
                            }
                    }, this.initRBoxDrawingIfPlacementEligible = function(e) {
                        this.renderController.placementRender(e)
                    }, this.buildExperimentsVariantIdParams = function() {
                        var e = this.global["rbox-reported-experiments-layers"] || [2, 6];
                        this.experimentsVariantIdParamsStr = "", this.experimentsVariantIdParamsMap = Object.keys(this.experimentsData).reduce(function(t, r) {
                            return e.indexOf(Number(r)) > -1 && (t["tvi" + r] = this.experimentsData[r].split("|")[1]), t
                        }.trcBind(this), {}), this.experimentsVariantIdParamsStr = TRC.TRCLogger.formatParams(this.experimentsVariantIdParamsMap)
                    }, this.addFormattedResponseToWidgetAddedFromTrc = function(e, t, r) {
                        r && (this.preloadRequest[e.uip].response = t)
                    }, this.getWidgetContainer = function(e, t) {
                        var r = e["container"],
                            i = !(0 == e["render-on-orig-container"]);
                        if (!doc.querySelectorAll) return r;
                        var o = this.getOrCreateContainerForMoveOrAddWidget(e["container-selectors"], r, t);
                        return o || (i ? r : (__trcWarn("TRC.getWidgetContainer: Not falling back to original container even though could not find valid container when trying to move " + t), null))
                    }, this.getOrCreateContainerForMoveOrAddWidget = function(e, t, r) {
                        if (e) try {
                            for (var i = 0; i < e.length; i++) {
                                var o = this.getOrCreateContainer(e[i], t);
                                if (o) return o
                            }
                            __trcWarn("TRC.extractValidContainer: Could not find any valid container when trying to move " + r)
                        } catch (e) {
                            __trcError("TRC.extractValidContainer: Error occured while trying to find valid container", e)
                        }
                        return null
                    }, this.getOrCreateContainer = function(e, t) {
                        var r = e.container,
                            i = e.shouldCreateContainer,
                            o = doc.querySelectorAll(r);
                        if (o && 1 === o.length) {
                            TRC.util.isTrue(i) && (e.shouldCreateContainer = !1, o = [this.createNewContainer(e.location, o[0], e.id)]);
                            var n = this.ensureValidContainer(o[0]);
                            if (n === t) return t;
                            if (n) return e.isFloatingUnit || this.cleanContainerClasses(t), n
                        }
                    }, this.createNewContainer = function(e, t, r) {
                        var i, o, n, s = !1 === this.global["add-widgets-id-prefix"] ? "" : "tbl_";
                        return i = doc.createElement("div"), o = r || s + (new Date).getTime(), i.id = o, (n = this.getLocationContainer(e)) && t.insertAdjacentElement(n, i), i
                    }, this.getLocationContainer = function(e) {
                        switch (e) {
                            case "first":
                                return "afterbegin";
                            case "last":
                                return "beforeend";
                            case "before":
                                return "beforebegin";
                            case "after":
                                return "afterend";
                            default:
                                return ""
                        }
                    }, this.cleanContainerClasses = function(e) {
                        e && (e.className = "")
                    }, this.addVariantProperties = function(e, t, r) {
                        var i = t.trc["vl"][r],
                            o = e || {
                                trc: {
                                    "video-list": {}
                                }
                            };
                        return o.trc["test-variant"] = t.trc.t, o.trc.uvpw = t.trc.uvpw, o.trc["video-list"]["base-mode"] = i.m, o.trc["video-list"]["test-variant"] = i.t, o
                    }, this.formatPlacementRecommendations = function(e, t, r) {
                        var i = e.trc["vl"][t],
                            o, n = this.preloadRequest[i.uip] || {},
                            s = {
                                trc: {
                                    req: i["ri"],
                                    "session-id": e.trc["si"],
                                    "session-data": e.trc["sd"],
                                    "user-id": e.trc["ui"],
                                    "watched-item": e.trc["wi"],
                                    "country-code": e.trc["cc"],
                                    "test-variant": e.trc["t"],
                                    "is-provider": !!e.trc["iframeData"],
                                    uvpw: e.trc["uvpw"],
                                    placement: i.uip,
                                    mode: n.mode,
                                    DNT: e.trc["DNT"],
                                    cpb: e.trc["cpb"],
                                    sl: e.trc["sl"],
                                    pi: e.trc["pi"],
                                    bdp: e.trc["bdp"],
                                    ppb: i["ppb"],
                                    "test-data": e.trc["td"],
                                    "placement-group": i["pg"],
                                    "organic-personalization": e.trc["op"]
                                }
                            };
                        return (i.prty || i.caty) && (s.trc.prty = i.prty, s.trc.caty = i.caty), e.cached && (s.cached = !0, s.cachedViewId = e.cachedViewId), i.dc && "tbl" !== i.typ ? s.trc["tag"] = i : s.trc["video-list"] = {
                            video: i["v"],
                            "base-mode": i["m"],
                            "test-variant": i["t"],
                            "properties-override": i["po"] && TRC.util.jsonParseCustomNative("{" + i["po"] + "}") || null,
                            "container-selectors": i["cs"],
                            "next-up-widget": i["nup"],
                            "taboola-reminder": i["tr"],
                            "render-on-orig-container": i["rooc"],
                            vtag: i["vtag"],
                            pvc: i["pvc"],
                            "content-hub-forced-placement": !!i["chf"]
                        }, e.trc["cm"] && (s.trc["consent-missing"] = e.trc["cm"]), (o = i["csso"]) && (r.text = this.getModeOverrideCss(r, o, n)), i["fpl"] && (s.feedPlacement = i["fpl"]), e.trc["evi"] && (s.experimentsData = e.trc["evi"]), this.addVariantProperties(s, e, t)
                    }, this.getModeOverrideCss = function(e, t, r) {
                        if (t.indexOf("$container_id$") > -1) try {
                            t = TRC.text.replaceAll(t, "\\$container_id\\$", "#" + r.container.id, null)
                        } catch (e) {
                            t = TRC.text.replaceAll(t, "\\$container_id\\$", "", null)
                        }
                        return e.text ? e.text + t : t
                    }, this.loadSpotlight = function() {
                        document.querySelectorAll && (this.spotlightLoaded ? TRC.dispatch("trc_afterRboxDraw") : (this.spotlightLoaded = TRC.URL.prototype.switchProtocol.call(TRC.getBackstageUrl() + "resources/js/1.1.0/spotlight.js", protocol), this.loadExternal(this.spotlightLoaded, "js")))
                    }, this.setCssDivsIds = function(e, t) {
                        var r = 4;
                        for (var i in e) e.hasOwnProperty(i) && (e[i].cssDivsArr = [], i && TRC.util.getRandomIds({
                            arr: e[i].cssDivsArr,
                            len: t,
                            strength: r,
                            prefix: "t",
                            suffix: "_r"
                        }))
                    }, this.setLBCssDivsIds = function(e, t) {
                        var r = 4;
                        TRC.util.getRandomIds({
                            arr: e.iframe,
                            len: t,
                            strength: r,
                            prefix: "t",
                            suffix: "_r"
                        }), TRC.util.getRandomIds({
                            arr: e.topDiv,
                            len: t,
                            strength: r,
                            prefix: "t",
                            suffix: "_r"
                        })
                    }, this.getModesCache = function() {
                        if (TRC.modesCache) return TRC.modesCache;
                        for (var e in TRC.modesCache = {}, this.modes) this.modes.hasOwnProperty(e) && (TRC.modesCache[e] = {});
                        return TRC.modesCache
                    }, this.sendUserIdTags = function(e) {
                        return this.sendExternalTracking(e.data, win.TRC.sharedObjects.loadedPixels)
                    }, this.initFrameworks = function(e) {
                        "amp" === e && TRC.amp ? TRC.amp.setAMPmodule(this) : "mobile-sdk" !== e || (this.manualVisibilityTrigger = !0)
                    }, this.init = function(e) {
                        TRC.tlf && console.timeStamp("init TRCImpl");
                        var i = TRC.URL.prototype.getParameter.call(location.href, "trc_css-isolation") || TRC.pageManager.getValue("trc_css-isolation"),
                            n = TRC.URL.prototype.getParameter.call(location.href, "trc_abp"),
                            s;
                        if (__trcCopyProps(e, this), TRC.util.hasKeys(this["trc-network-mapping"])) {
                            TRC.networkId = TRC.publisherId, this.shiftPublisherId(this["trc-network-mapping"]);
                            var a = this["network-pubs-global"];
                            a && a[TRC.publisherId] && TRC.util.merge(this.global, a[TRC.publisherId])
                        }
                        t.framework && this.initFrameworks(t.framework), this.boxes = {}, this.unique_placement_count = {}, this.tags = [], this.metadata = {}, this.cssReset = "yes" === i || "no" !== i && !1 !== this.global["css-isolation"], this.trcRequestDelay = this.global["trc-request-delay"] || r, this.trcByPass = !0 === this["trc-skip-failover"], this.enablePageGeometry = this.global["has-page-geometry"], this.enablePageGeometryExtended = this.global["has-page-geometry-extended"], this.enableSlotsGeometry = this.global["has-slots-geometry"], this.enableSlotsSaliency = this.global["has-slots-saliency"], this.cssLiteInject = this.global["enable-mode-injection"] && !(window.navigator && "string" == typeof window.navigator.userAgent && /(iPhone|iPad)(?=.*AppleWebKit)(?!.*CriOS)/i.test(window.navigator.userAgent)), this.spatialSlotsThrottleMax = this.global["spatial-slots-throttle-max"], this.spatialSlotsThrottleTH = this.global["spatial-slots-throttle-th"], this.spatialSlotsThrottleTHPerPage = this.global["spatial-slots-throttle-th-per-page"], this.enablePlacementGeometry = this.global["has-mode-geometry"], this.maxRetriesPerFailedPlacementRequest = this.global["max-retries-per-failed-placement-req"] || 1, i && TRC.pageManager.storeValue("trc_css-isolation", i), doc.interestCohort && this.global["flc-enabled"] && TRC.ModuleLoader.load("flc", TRC.flc, function() {}), this.configForPostEvent = {
                            available: this.global["send-avail-as-post"],
                            visible: this.global["send-event-as-post"],
                            "new-visible": this.global["send-event-as-post"],
                            explore: this.global["send-explore-as-post"],
                            "content-hub-available": this.global["send-avail-as-post"],
                            "content-hub-visible": this.global["send-event-as-post"],
                            "content-hub-explore": this.global["send-explore-as-post"],
                            perf: !0,
                            "rtb-win": !0,
                            metrics: !0
                        }, this.configForGetEvent = {
                            available: this.global["send-avail-as-get"],
                            visible: this.global["send-visible-as-get"],
                            "new-visible": this.global["send-visible-as-get"],
                            explore: this.global["send-explore-as-get"],
                            "content-hub-available": this.global["send-avail-as-get"],
                            "content-hub-visible": this.global["send-visible-as-get"],
                            "content-hub-explore": this.global["send-explore-as-get"],
                            perf: !1,
                            "rtb-win": !1,
                            metrics: !1
                        }, this.trcRoute = null, this.enableTrcRoute = !0 === this.global["enable-trc-route"], this.enableLoaderCacheBuster = !0 === this.global["enable-loader-cache-buster"], this.eventTypesToRoute = this.global["event-types-to-route"] || [], this.enableTrcEventRoute = this.eventTypesToRoute.length > 0, this.trcEventRoute = this.enableTrcEventRoute ? this.global["default-event-route"] || !1 : null, this.enableTrcEventRouteExperiment = !0 === this.global["enable-trc-event-route-experiment"], this.enableExperimentsVariantIdEvent = this.global["enable-experiments-variant-id-event"], this.enableLoaderTypeEvent = this.global["enable-loader-type-event"], this.isDeferredAvailable = this.global["enable-deferred-available"], this.enableExpoImageTag = !1 !== this.global["enable-expo-img-tag"], this.trcParams = TRC.pageManager.additionalDispatchParams(), this.trcCacheClean = this.global["clean-trc-cache"], o(this.global), this.trcCache = this.global["enable-trc-cache"] ? new TRC.TrcCache(this.global["trc-cache-conf"] || {}) : null, this.trcCacheItemType = this.global["trc-cache-it"], this.disableReadMore = !1 === this.global["enable-read-more"] || !1 === this.disableReadMore, this.blockVideoLoader = this.shouldBlockVideoLoader(this.global["block-video-prob"]), this.blockThumbnailVideoLoader = this.shouldBlockThumbnailVideoLoader(this.global["block-thumbnail-video-prob"]), this.global["enable-consent"] && this.setConsentConfig(this.consentConfigOverride, this.global["consent-presets"]), TRC.getBackstageUrl = function() {
                            var e = TRC.backstageDomainPrefix || "backstage",
                                t = TRC.backstageDomainSuffix || "taboola.com";
                            return this["backstage-domain-url"] || "https://" + e + "." + t + "/backstage/"
                        }.trcBind(this), n ? this.setABPEmulation(n) : this.global["abp-detection-enabled"] ? TRC.blocker.blockedState = TRC.blocker.getBlockedState(this.global["abp-detection-class-names"] || ["banner_ad", "sponsored_ad"], this.global["abp-ignore-cached-state"]) : TRC.blocker.blockedState = TRC.blocker.states.ABP_DETECTION_DISABLED, TRC.styleInjected || this.cssLiteInject || this.bakedStyelInjection(), this.domain = TRC.shiftDomain(this.global["requests-domain"] ? this.global["requests-domain"] : "trc.taboola.com"), this.origin instanceof Array || (this.origin = [this.origin]), null != this.userMetadata ? this.metadata.user = __trcJSONify(this.userMetadata) : void 0 === win["trc_user_id"] ? this.metadata.user = this["get-user"]() : this.metadata.user = win["trc_user_id"];
                        try {
                            TRC.pConsole("page", "debug", "Hook : publisher_start", this["publisher-start"].toString()), this["publisher-start"]()
                        } catch (e) {
                            __trcError("Error running publisher-start", e)
                        }
                        this.metadata.uploader = this["get-creator"](), this.tags = this["get-tags"]();
                        try {
                            this.metadata.v = this["get-views"](), this.metadata.r = this["get-rating"](), this["metafields"].split(",").forEach(function(e) {
                                e && (this.metadata[e] = this["get-" + e] ? this["get-" + e]() : this.readMetaTag(e))
                            }.trcBind(this))
                        } catch (e) {}
                        this.initFraudDetection(), TRC.listen("send_user_id", this.sendUserIdTags.trcBind(this)), TRC.listen("load_script_tags", this.loadScriptTags.trcBind(this)), window.context && window.context.data && window.context.data.feedContainerNum && parseInt(window.context.data.feedContainerNum, 10) >= 1 && (TRC.isAMPSplitFeed = !0, TRC.feedContainerNum = window.context.data.feedContainerNum), !(!TRC.mobile || !TRC.mobile.reportClick) || TRC.isAMP || !TRC.util.isPercentEnabled(this.global, "spa-detection-enabled") || TRC.ModuleLoader.load("spa-detector", TRC.SpaDetector, function() {
                            TRC.SpaDetector.getInstance(this)
                        }.trcBind(this)), TRC.util.isPercentEnabled(this.global, "guarantee-card-clash-detection") && TRC.ModuleLoader.load("card-interference-detector", TRC.CardInterferenceDetector, function() {}), TRC.pageManager.initReferrer(this.global), this.renderController = new TRC.RenderControl(this), this.init = function() {}, TRC.isInteractive = !1, TRC.isPageLoaded = !1, this.trcCacheClean && !this.trcCache && (this.trcCache = new TRC.TrcCache({}, !0), this.trcCache = null), this.listenToRenderedModes(), this.global["enable-always-track"] && !TRC.pushedRboxTracking && (l(), TRC.pushedRboxTracking = !0)
                    }, this.initFraudDetection = function() {
                        this.shouldEnableFraudDetection() && TRC.listen("trcResponseHandled", this.enableFraudDetection.trcBind(this))
                    };
                    var n = null;
                    this.getExpoImageTag = function() {
                        return null !== n ? n : (n = "", this.enableExpoImageTag && null !== this.getSystemFlag("imageExternal") && (n = "tb_expo_img=" + this.getSystemFlag("imageExternal")), n)
                    };
                    var s = null,
                        a = null;

                    function l() {
                        if (document.body) {
                            var e = "rbox-tracking",
                                t = e + "-div";
                            if (!document.getElementById(t)) {
                                var r = document.createElement("div");
                                r.id = t, document.body.appendChild(r).style.display = "none"
                            }
                            win._taboola.push({
                                mode: e,
                                container: t
                            })
                        }
                    }
                    return this.getLoaderTypesValue = function() {
                        if (a) return s;
                        if (s = "", a = {}, !this.enableLoaderTypeEvent) return s;
                        this.systemFlags.loaderType && (s = "lti=" + this.systemFlags.loaderType, a["lti"] = this.systemFlags.loaderType);
                        var e = this.systemFlags.eventExternal;
                        return e ? (Object.keys(e).forEach(function(t) {
                            s += (s ? "&" : "") + "ex_" + t + "=" + e[t], a["ex_" + t] = e[t]
                        }), s) : s
                    }, this.getLoaderTypesObject = function() {
                        return a || this.getLoaderTypesValue(), a
                    }, this.stackedStyleInjection = function(e, t, r, i) {
                        TRC.cssStack || (TRC.cssStack = new TRC.css.Stack({
                            idPrefix: "tab_",
                            stack: [{
                                type: "default",
                                cssText: e + (r || "")
                            }, {
                                type: "mode",
                                cssText: ""
                            }, {
                                type: "publisher",
                                cssText: t
                            }, {
                                type: "custom",
                                cssText: ""
                            }]
                        }, i))
                    }, this.bakedStyelInjection = function() {
                        var e = this.defaults.style + this.global.style;
                        this.cssReset ? (this.setLBCssDivsIds(TRC.lightBoxCssReset = {
                            iframe: [],
                            topDiv: []
                        }, this.numOfResetCssDivs), this.setCssDivsIds(this.getModesCache(), this.numOfResetCssDivs), TRC.css.utils.setStyleElements(TRC.css.utils.setStyleTextIdPrefix(e, TRC.modesCache, TRC.lightBoxCssReset)), __trcInfo("CSS Isolation is active")) : this.global["css-ie-split"] && TRC.Browser["ieUpto"](9) ? TRC.css.utils.setStyleElements(TRC.css.utils.setStyleTextIdPrefix(e, null, TRC.lightBoxCssReset)) : TRC.dom.injectStyle(e)
                    }, this.setABPEmulation = function(e) {
                        TRC.blocker.blockedState = e, this.global["abp-detection-enabled"] = !0, this.global["use-abp-uim"] = !0, TRC.pConsole("page", "warn", "emulating Ad Blocker Plus detection.")
                    }, this.setConsentConfig = function(e, t) {
                        TRC.consent.hasCMP() || (t && TRC.consent.setPresets(t), e ? TRC.consent.setConsentSource(TRC.util.merge({
                            source: "iab_override"
                        }, e)) : "function" == typeof window.__tcfapi ? TRC.consent.setConsentSource({
                            source: "tcf"
                        }) : "function" == typeof window.__cmp && TRC.consent.setConsentSource({
                            source: "iab"
                        }))
                    }, this.countTrcContainerMissingError = 0, this.ensureValidContainer = function(e, t) {
                        var r = e,
                            i = "trc_related_container",
                            o, n, s = " " + i + " trc_spotlight_widget" + (TRC.dom.isInIframe(!0) ? " trc_in_iframe" : "") + ("rtl" === this.direction ? " tbl-rtl" : "");
                        if ("string" == typeof e && (e = document.getElementById(e), t && !e)) return null;
                        if ("object" != typeof e && (e = null), null != e) {
                            if (e.className.match(i)) return e;
                            for (; e.hasChildNodes();) e.removeChild(e.firstChild);
                            return e.origClassName = e.className, e.className += s, e
                        }
                        return null != (e = document.getElementById(i)) ? (e.className.search(i) <= 0 && (e.origClassName = e.className), e.className += s, e) : document.body ? (this.countTrcContainerMissingError < 2 && (this.countTrcContainerMissingError += 1, __trcError("Didn't manage to find TRC container for R-Box with ID " + r + " (retry=" + this.countTrcContainerMissingError + ") " + (TRC.dom.isReady ? "(Document is Ready)" : "") + "!")), null) : null
                    }, this.getPublisherVersion = function() {
                        return "default"
                    }, this.getItemType = function() {
                        switch (TRC.listOrigin.getSource()) {
                            case "h":
                                return "home";
                            case "c":
                                return "category";
                            case "t":
                                return "text";
                            case "s":
                                return "search";
                            case "p":
                                return "photo";
                            case "o":
                                return "other";
                            case "z":
                                return "content_hub";
                            case "v":
                            default:
                                return "video"
                        }
                    }, this.getUserLanguages = function() {
                        return navigator.languages || (navigator.language ? [navigator.language] : [])
                    }, this.playVideo = function(e) {
                        TRC.RBoxUsage.logUsage("TRCImpl.playVideo");
                        try {
                            TRC.dispatch("videoPlaying", e)
                        } catch (e) {
                            __trcError("Problem in playVideo:videoPlaying", e)
                        }
                        if (void 0 !== e.id && win.trc_video_id != e.id) {
                            var t = TRC.listOrigin.getSource();
                            void 0 === e.url && (win.trc_video_id || "v" != t ? e.url = null : (e.url = this.getAutoItemMeta("item-url", null, this.urlPreNormalizer, this["normalize-item-url"]), this.trc_url_auto_detection = e.id)), win.trc_video_id = e.id, win.trc_item_url = e.url, null != this.delayedDispatchLoadRequest && this.delayedDispatchLoadRequest()
                        }
                    }, this.setUser = function(e) {
                        this.userMetadata = e, TRC.pConsole("page", "info", "user meta data ", e, "object")
                    }, this.calculatePlacement = function(e) {
                        if (e["mode_name"].search("rbox-tracking") >= 0) return e["mode_name"];
                        var t = e["mode_name"] + (e["category"] ? "!" + e["category"] : "");
                        return void 0 !== this.unique_placement_count[t] && (t += "#" + ++this.unique_placement_count[t]), t
                    }, this.computeRBoxOptions = function(e) {
                        return "string" == typeof e && (e = {
                            mode_name: e
                        }), e.pubOpts ? e : (e.pubOpts = __trcCopyProps(e, {}), e.on_error && TRC.fallbackApi.setOnError(e), e["tracking"] = (this.tracking ? this.tracking : "") + (e["tracking"] ? e["tracking"] : ""), e["target_type"] = e["target_type"] || this.target_type || this.getProperty(e["mode_name"], "target_type") || "video", e["origin"] = new TRC.ListOriginBuilder(TRC.listOrigin.getSource(), e["target_type"]), e["mode_name"] = !!e["mode"] && e["mode"] || !!e["mode_name"] && e["mode_name"] || !!win["trc_mode_name"] && win["trc_mode_name"] || "rbox-" + e["origin"].toString(), e["mode_name"] = e["mode_name"].replace(/\s+/g, ""), e["category"] = !!e["category"] && e["category"], e["link_target"] = e["link_target"] || this.link_target, void 0 === e["placement"] && (e["placement"] = this.calculatePlacement(e)), this.unique_placement_count[e["placement"]] = 0, e["visible"] = "boolean" == typeof e["visible"] ? e["visible"] : !this.invisible, "string" == typeof e["autoplaybox"] && (e["autoplaybox"] = document.getElementById(e["autoplaybox"])), !e["player"] && !0 !== e["slider"] && e["visible"] && (e["original_container"] = e["container"], e["container"] = this.ensureValidContainer(e["container"])), e.addWidget || (e.response = null), e.computed = !0, e)
                    }, this.listenToPlayer = function(e, t) {
                        var r = "trc_related_container",
                            i = "rtl" === this.direction ? " tbl-rtl" : "",
                            o;
                        o = TRC.listen("videoPlaying", function(n) {
                            var s = document.getElementById(n.player_id),
                                a;
                            s ? TRC.dom.isAncestor(t, s, !0) ? (o.remove(), TRC.listen("videoPlaying", function(e) {
                                e.player_id === t.player_id ? a.style.left = "-999999em" : __trcError("TRC.listenToPlayer: wrong player_id was used for videoPlaying")
                            }), t.player_id = n.player_id, e["container"] && ("string" == typeof e["container"] && (e["container"] = document.getElementById(e["container"])), a = e["container"]), a || (e["container"] = a = document.createElement("div")), a.className = r + " trc-inplayer-rbox" + i, a.style.left = "-999999em", a.style.width = s.offsetWidth + "px", a.style.marginTop = "-" + s.offsetHeight + "px", t.appendChild(a), TRC.kaltura_API && TRC.Browser.firefox && (delete TRC.kaltura_API, TRC.kaltura_support()), e.getListId = function() {
                                return "rplayer-after"
                            }, e.list_id = e.getListId(), e.loaded = !0, this.internalDrawRBox(e)) : __trcError("TRC.listenToPlayer: object with player_id wasn't found in playerContainer that was passed") : __trcError("TRC.listenToPlayer: wrong player_id was passed")
                        }.trcBind(this)), TRC.listen("videoDone", function(r) {
                            var i = e["container"];
                            i ? r.player_id === t.player_id ? i.style.left = "0" : __trcError("TRC.listenToPlayer: wrong player_id was used for videoDone") : __trcError("TRC.listenToPlayer:videoDone mainContainer wasn't found")
                        }), TRC.ooyala_API && (TRC.listen("ooyala_stateChanged", function(r) {
                            var i = e["container"];
                            i && (r.player_id === t.player_id ? i.style.left = "-999999em" : __trcError("TRC.listenToPlayer: wrong player_id was used for ooyala_stateChanged"))
                        }), TRC.listen("ooyala_activePanelChanged", function(r) {
                            var i = e["container"];
                            i && (r.player_id === t.player_id ? i.style.left = "more" === r["activePanel"] || "info" === r["activePanel"] ? "0" : "-999999em" : __trcError("TRC.listenToPlayer: wrong player_id was used for ooyala_activePanelChanged"))
                        }))
                    }, this.loadRBoxDrawQueue = function e(t) {
                        function r(e) {
                            if (!this.urlOverrideYieldArr) {
                                var t = TRC.URL.prototype.getParameter.call(win.location.href, "yield-batch");
                                this.urlOverrideYieldArr = t ? t.split("|") : []
                            }
                            return this.urlOverrideYieldArr.indexOf(e) > -1
                        }
                        if (r(t.placement) && (t.modeGroupOrder = 0), this.itemsToDraw = this.itemsToDraw || [], this.itemsToDrawWithoutOrder = this.itemsToDrawWithoutOrder || [], void 0 !== t.modeGroupOrder) {
                            var i = parseInt(t.modeGroupOrder, 10);
                            isNaN(i) ? this.itemsToDrawWithoutOrder.push(t) : (this.itemsToDraw[i] = this.itemsToDraw[i] || [], this.itemsToDraw[i].push(t))
                        } else this.itemsToDrawWithoutOrder.push(t)
                    }, this.executeRBoxDrawQueue = function e(t, r) {
                        TRC.yieldingOrderArr = TRC.yieldingOrderArr || [];
                        var r = r || 0;
                        TRC.taboola_yield_report && 0 == r && (console.time("executeRBoxDrawQ"), performance.mark("start executeRBoxDrawQueue")), this.itemsToDrawWithoutOrder.length > 0 && (this.itemsToDraw.push(this.itemsToDrawWithoutOrder), this.itemsToDrawWithoutOrder = []);
                        var i = this.itemsToDraw.shift();
                        if (TRC.yieldingOrderArr.push(i ? i.length : 0), i) {
                            TRC.taboola_yield_report && (console.time("executeRBoxDrawQueue batch-" + r), performance.mark("start executeRBoxDrawQueue batch-" + r));
                            var o = {};
                            i.forEach(function e(t) {
                                var r = this.internalDrawRBox(t);
                                r && (o[r.id] = r)
                            }.trcBind(this)), TRC.dispatch("batchrender", {
                                data: {
                                    boxes: o
                                }
                            }), TRC.taboola_yield_report && (console.timeEnd("executeRBoxDrawQueue batch-" + r), performance.mark("end executeRBoxDrawQueue batch-" + r))
                        }
                        var n = function(e, t) {
                            this.executeRBoxDrawQueue(e, t)
                        }.bind(this);
                        if (this.itemsToDraw.length > 0) return i ? void TRC.Timeout.set(function() {
                            n(t, ++r)
                        }, t) : void n(t, ++r);
                        TRC.taboola_yield_report && (console.timeEnd("executeRBoxDrawQ"), performance.mark("end executeRBoxDrawQueue"), performance.measure("total rbox rendering time", "start executeRBoxDrawQueue", "end executeRBoxDrawQueue"));
                        var s = this;
                        r > 0 && (s = {
                            boxes: {}
                        }), TRC.dispatch("allrender", {
                            data: s
                        })
                    }, this.internalDrawRBox = function(e) {
                        var t, r = "widget";
                        if (e["container"] = this.getWidgetContainer(e, r), (e = this.computeRBoxOptions(e))["player"]) {
                            var i = e["player"];
                            return delete e["player"], void this.listenToPlayer(e, document.getElementById(i))
                        }
                        if (t = e["container"]) {
                            if (e["visible"] || (t.style.display = "none"), e["spotlight"] && t.setAttribute("data-spotlight-publisher-id", e["spotlight-publisher-id"]), null != e.response || !this.loadCalled || void 0 === this.preloadRequest[e["placement"]] || (e.response = this.preloadRequest[e["placement"]].response, __trcCopyProps(e, this.preloadRequest[e["placement"]]), null != e.response)) {
                                try {
                                    TRC.SpotlightLoader.registerOnMainContainer(t, e.response)
                                } catch (e) {
                                    __trcError("Error while trying to register Spotlight data on main container")
                                }
                                return e.trcResponse && e.trcResponse.multiWidget ? (TRC.multiWidget.init.call(this, {
                                    originalContainer: t,
                                    multiWidget: e.trcResponse.multiWidget,
                                    widgetOptions: e,
                                    initRBox: this.initRBox,
                                    trcManager: this
                                }), this.boxes) : this.initRBox.call(this, t, e)
                            }
                            this.preloadRequest[e["placement"]]["container"] = e["container"]
                        }
                    }, this.createCssResetContainers = function(e, t) {
                        for (var r = TRC.modesCache[t] ? TRC.modesCache[t].cssDivsArr : [], i, o = e, n, s = r.length - 1; s >= 0; s--)(n = document.createElement("div")).id = r[s], n.className = "trc_isolation", n.appendChild(o), o = n;
                        return o
                    }, this.handleAMPSplitFeedRequest = function(e) {
                        if (void 0 === this.ampSplitFeedManager) {
                            var t = 1 === parseInt(window.context.data.feedContainerNum, 10);
                            this.ampSplitFeedManager = new TRC.AmpSplitFeedManager(this, t)
                        }!0 !== this.ampSplitFeedManager.didInit && this.ampSplitFeedManager.checkAMPSplitFeedFlagsAndInit(e, this.ampSplitFeedManager.initAmpSplitFeedIframe.trcBind(this.ampSplitFeedManager))
                    }, this.handlePushedRequest = function(e) {
                        this.global["disable-skip-load-request"] || !this.shouldSkipPushedRequest(e) ? TRC.isAMPSplitFeed ? this.handleAMPSplitFeedRequest(e) : e[Object.keys(e)[0]] && e[Object.keys(e)[0]].rec ? (this.preloadRequest = e, this.handleLoadResponse("", e[Object.keys(e)[0]].rec)) : this.dispatchRequestWrapper(e) : __trcDebug("'handlePushedRequest' : Skip on push request")
                    }, this.dispatchRequestWrapper = function(e) {
                        this.loadCalled = !0, this.dispatchLoadRequest(e), this.isPendingLoadRBox = !1
                    }, this.dispatchCMPRequest = function(e, t) {
                        var r = parseInt(1e5 * Math.random());
                        this.pendingRequests[r] = 1, TRC.cmp("getConsentData", null, function(i) {
                            e.pendingRequests[r] && (delete e.pendingRequests[r], e.consentState = i, e.handlePushedRequest(t))
                        }), this.global["max-wait-for-cmp"] && TRC.Timeout.set(function() {
                            e.pendingRequests[r] && TRC.consent.setConsent({
                                wasTimeout: !0
                            })
                        }, this.global["max-wait-for-cmp"])
                    }, this.dispatchAmpConsentRequest = function(e, t) {
                        if (!1 === this.global["amp-consent-enable"]) e.handlePushedRequest(t);
                        else {
                            var r = parseInt(1e5 * Math.random());
                            this.pendingRequests[r] = 1, TRC.consent.getAMPConsent(function(i, o) {
                                e.pendingRequests[r] && (delete e.pendingRequests[r], o && (e.consentState = o, TRC.ccpaPs = o.ccpaString), TRC.cexConsentData = i, e.handlePushedRequest(t))
                            }), this.global["max-wait-for-cmp"] && TRC.Timeout.set(function() {
                                e.pendingRequests[r] && (e.consentState = {
                                    wasTimeout: !0
                                })
                            }, this.global["max-wait-for-cmp"])
                        }
                    }, this.getUSPData = function(e) {
                        if (!1 !== this.global["ccpa-ps-enable"] && "function" == typeof __uspapi) try {
                            __uspapi("getUSPData", 1, function(t, r) {
                                r && t && e(t.uspString)
                            })
                        } catch (e) {
                            __trcError("Error while calling __uspapi for getUSPData", e)
                        }
                    }, this.loadRBox = function() {
                        var e = arguments,
                            t = Array.prototype.slice.call(arguments),
                            r = {},
                            i, o = 40,
                            n = this;
                        if (!(t.length < 1)) try {
                            if (this.isPendingLoadRBox || this.preloadRequestLoader) return void setTimeout(function() {
                                this.loadRBox.apply(this, e)
                            }.trcBind(this), 100);
                            t[0] instanceof Array && (t = t[0]), this.till_request_count = 0;
                            for (var s = 0; s < t.length; s++) t[s]["player"] || this.till_request_count++;

                            function a(e, t) {
                                var r = {};
                                r[t.placement] = t, this.handlePushedRequest(r)
                            }
                            for (; t.length;) {
                                var l = t.shift();
                                try {
                                    l.placement && l.mode && __trcInfo(JSON.stringify(l))
                                } catch (e) {
                                    __trcWarn("failed to send Placement commands")
                                }
                                if ((i = this.computeRBoxOptions(__trcCopyProps(l, {})))["player"] || !0 === i["slider"]) !0 === i["slider"] && this.createContainerForEscalatorWidget(i), TRC.Timeout.set(a.trcBind(this, r, i), 0);
                                else {
                                    if (r[i.placement]) throw new Error("Placement '" + i.placement + "' is not unique in loadRBox()!");
                                    r[i.placement] = i,
                                        function(e, t, r) {
                                            if (this.isPendingLoadRBox = !0, e.container && 1 === e.container.nodeType) this.till_request_count--;
                                            else {
                                                if (!TRC.dom.isReady) return !e["player"] && e["visible"] && (e["container"] = this.ensureValidContainer(e["original_container"])), void TRC.Timeout.set(arguments.callee.trcBind(this, e, t, r), t);
                                                this.error("Invalid container provided for request " + e.placement + " (" + e.container + ")!"), delete r[e.placement], this.till_request_count--
                                            }
                                            this.till_request_count <= 0 && (TRC.isAMP ? this.dispatchAmpConsentRequest(n, r) : TRC.consent.hasCMP() ? this.dispatchCMPRequest(n, r) : this.handlePushedRequest(r))
                                        }.trcBind(this, i, o, r)()
                                }
                            }
                        } catch (e) {
                            throw __trcError("Error in loadRBox()", e), e
                        }
                    }, this.parseLoaderParams(t), TRC.dom.init(), this.init(e), this
                },
                protocol = TRC.PROTOCOL;
            TRC.recoRequestsQueue = new TRC.TasksExecutorQueue, Manager.prototype["list-size"] = 0, Manager.prototype.MAX_RETRY = 2, Manager.prototype.drawInterface = !1, Manager.prototype.delayedDispatchLoadRequest = null, Manager.prototype.invisible = !1, Manager.prototype.excludedItems = null, Manager.prototype.boxes = {}, Manager.prototype.itemid = null, Manager.prototype.itemurl = null, Manager.prototype.tags = [], Manager.prototype.metadata = {}, Manager.prototype.userMetadata = null, Manager.prototype.loadCalled = !1, Manager.prototype.unique_placement_count = {}, Manager.prototype.trc_url_auto_detection = null, Manager.prototype.shiftPublisherId = function(e) {
                var t = TRC.URL.prototype.getParameter.call(location.href, "taboola_sim_domain") || TRC.URL.prototype.getParameter.call(location.href, "fakeurl"),
                    r = win.trc_item_url ? new TRC.URL(win.trc_item_url) : null,
                    i = (t || (r ? r.host : null) || location.host).toLowerCase(),
                    o = (t || (r ? r.href : null) || location.href).toLowerCase(),
                    n = e[i],
                    s = "/",
                    a = ["m", "mobile", "www2", "www3"],
                    l, c, d, h, p, u;
                if (!n) {
                    for (__trcToArray(e, l = []), l.sort(function(e, t) {
                            return e[0].length > t[0].length ? -1 : e[0].length < t[0].length ? 1 : 0
                        }), c = 0, d = l.length; c < d; c++)
                        if ((h = l[c][0].toLowerCase()).indexOf(s) > 0) {
                            if (o.match(h)) {
                                n = l[c][1];
                                break
                            }
                            if (h.indexOf("www.") > -1 && o.match(h.replace("www.", ""))) {
                                n = l[c][1];
                                break
                            }
                        } else if (i.match(h)) {
                        n = l[c][1];
                        break
                    }
                    if (!n && i.indexOf("www.") < 0) {
                        for (c = 0, d = a.length; c < d && (p = new RegExp("(https://|http://|^)" + a[c] + "."), !(n = e[u = i.replace(p, "www.")])); c++);
                        n || (n = e[u = "www." + i])
                    }
                }
                TRC.publisherId = n || "unknown-site-on-" + TRC.publisherId, TRC.pConsole("page", "info", "in 'Network-Solution' : publisher-id was set to - " + TRC.publisherId, "")
            }, Manager.prototype.widgetContainerReset = function() {
                for (var e in this.boxes)
                    if (this.boxes.hasOwnProperty(e)) {
                        var t = this.boxes[e].container,
                            r;
                        if (t) {
                            for (r = t.getAttribute(TRC.intersections.TARGET_ATTRIB), t.className = t.origClassName, delete t._trc_container, delete t._trc_anonbox; t.hasChildNodes();) t.removeChild(t.lastChild);
                            r && TRC.intersections.unobserveAll(r)
                        }
                        TRC.Timeout.reset(), TRC.Interval.reset(), delete this.boxes[e]
                    }
            }, Manager.prototype.getProperty = function(e, t, r) {
                return r && r.hasOwnProperty(t) && void 0 !== r[t] ? r[t] : void 0 === this.modes || void 0 === this.modes[e] || void 0 === this.modes[e][t] ? this[t] : TRC.propertiesOverride && void 0 !== TRC.propertiesOverride[t] ? TRC.propertiesOverride[t] : this.modes[e][t]
            }, Manager.prototype.runHook = function(e, t, r, i, o) {
                var n = Array.prototype.slice.call(arguments, 5),
                    s = this.getFunction(t, r, i, n);
                return o && TRC.CustomModulesManager.dispatchHook(r, t, e, n), s
            }, Manager.prototype.getFunction = function(e, t, r, i) {
                this.global["disable-runHook"] && (i = Array.prototype.slice.call(arguments, 3));
                var o = this.getProperty(e, t, r);
                if ("function" == typeof o) return TRC.pConsole(e, "debug", "Hook : " + t, o.toString(), "function"), o.apply(this, i)
            }, Manager.prototype.readMetaTag = function(e) {
                for (var t = document.head.getElementsByTagName("meta"), r = null, i = 0; i < t.length; i++)
                    if (t[i].name) {
                        if (t[i].name.toLowerCase() == "item-" + e.toLowerCase()) return t[i].content;
                        t[i].name.toLowerCase() == e.toLowerCase() && (r = t[i].content)
                    }
                return r
            }, Manager.prototype.get_intent = function() {
                var e = win.location.href,
                    t = TRC.pageManager.getPublisherValue(TRC.publisherId, "auto-play-intent");
                if (null != t) {
                    var r = t.split(":");
                    if (parseInt(r[0]) > (new Date).getTime() - 3e4 && r[1] == this.getItemId()) return void 0 !== r[2] ? r[2] : "n"
                }
                return e.search(this.getItemId()) >= 0 ? "s" : "u"
            }, Manager.prototype["get-creator"] = function() {
                return this.readMetaTag("uploader") || this.readMetaTag("creator")
            }, Manager.prototype["get-tags"] = function() {}, TRC.implClasses = TRC.implClasses || {}, Manager.prototype.logTrcEvent = function(e, t, r, i, o) {
                var n = !1,
                    s, a, l, c, d;
                if (t.tim = __trcClientTimestamp(), t.id = parseInt(1e4 * Math.random()), t.llvl = win.trc_debug_level, this.global["tmp-disable-cv"] || (t.cv = this.version), this.configForPostEvent[e]) try {
                    if (s = this.global["send-full-list"] && r ? __trcCopyProps(t, {}, r) : t, c = this.shouldPostEventAsAjax(e), l = (a = (d = this.global["rbox-ajax-post-events-full-rollout"]) ? "" : "new-") + e, c) try {
                        this.logPostTrcEventAsAjax(l, s)
                    } catch (n) {
                        !1 !== this.configForGetEvent[e] && d || (t.fbe = 1, this.logGetTrcEvent(l, t, i, r, o))
                    }
                    d || this.logPostTrcEvent(e, s)
                } catch (e) {
                    n = !0, __trcError("Error in sending post event", e)
                }(n || !1 !== this.configForGetEvent[e] || !0 !== this.configForPostEvent[e]) && ((!1 === this.configForGetEvent[e] || n) && (t.fbe = 1), this.logGetTrcEvent(e, t, i, r, o))
            }, Manager.prototype.isValidForFill = function(e, t) {
                try {
                    if (("available" == e || "visible" == e) && this.global["enable-get-fil"] && this.global["get-fil-n-items"] >= this.preloadRequest[t].response.trc["video-list"].video.length) return !0
                } catch (e) {}
                return !1
            }, Manager.prototype.shouldEnableFraudDetection = function() {
                var e, t, r;
                return !!this.global["test_for_fraud"] && (0 !== (t = this.global["fraud-traffic-percentage"]) && (t = t || 10, (r = Math.floor(100 * Math.random())) <= t))
            }, Manager.prototype.enableFraudDetection = function() {
                if (!TRC.clickFraudDetect.isInitialized) try {
                    TRC.clickFraudDetect.init(TRC.publisherId, TRC.pageManager.getUserId(), this.getReferrer(), this, TRC.pageManager.getPageData())
                } catch (e) {
                    __trcWarn("failed to init fraud detection")
                }
            }, Manager.prototype.logGetTrcEvent = function(e, t, r, i, o) {
                this.trcEventRoute && this.eventTypesToRoute.indexOf(e) > -1 ? (this.logGetTrcEventImpl(this.trcEventRoute, e, t, r, i, o), this.enableTrcEventRouteExperiment && this.logGetTrcEventImpl(this.domain, e, t, r, i, o)) : this.logGetTrcEventImpl(this.domain, e, t, r, i, o)
            }, Manager.prototype.logGetTrcEventImpl = function(e, t, r, i, o, n) {
                var s, a;
                for (var l in TRC.tlf && console.time("in logGetTrcEvent - " + t), r) r.hasOwnProperty(l) && (r[l] = this["normalize-log-param"](l, r[l]));
                t = this["normalize-log-param"]("type", t), this.isValidForFill(t, n) && (r = __trcCopyProps(r, {}, o));
                try {
                    s = this.composeGetURL(t, r, e), a = new Image, this.eventLogger.push(a), i && (a.onload = a.onerror = function() {
                        if ("function" == typeof i) try {
                            i()
                        } catch (e) {
                            __trcError("Error in event callback", e)
                        }
                        return !0
                    }), a.src = s
                } catch (e) {
                    __trcError("Error in sending event", e)
                }
                TRC.tlf && console.timeEnd("in logGetTrcEvent - " + t), TRC.performance && "available" === t && TRC.performance.mark("8.1.9"), TRC.performance && "visible" === t && TRC.performance.mark("9.1.9")
            }, Manager.prototype.logPostTrcEvent = function(e, t) {
                this.trcEventRoute && this.eventTypesToRoute.indexOf(e) > -1 ? (this.logPostTrcEventImpl(this.trcEventRoute, e, t), this.enableTrcEventRouteExperiment && this.logPostTrcEventImpl(this.domain, e, t)) : this.logPostTrcEventImpl(this.domain, e, t)
            }, Manager.prototype.logPostTrcEventImpl = function(e, t, r) {
                TRC.tlf && console.time("in logPostTrcEvent - " + t);
                var i, o = this["normalize-log-param"]("publisher", TRC.publisherId),
                    t, n = "tb-trc-transportFrame-" + (t = this["normalize-log-param"]("type", t)) + "-" + r.id,
                    s = this.getTransportForm(n),
                    a = document.getElementById(n),
                    l;
                for (var c in r) r.hasOwnProperty(c) && ((i = doc.createElement("input")).name = ("_" == c.charAt(0) ? c.substr(1) : c).replace(/unescape-/g, ""), i.type = "hidden", i.value = this["normalize-log-param"](c, r[c]), s.appendChild(i));
                if (!a) throw new Error("post iframe can be created");
                TRC.Browser.ie && ((l = a.contentDocument ? a.contentDocument : a.contentWindow.document).write(""), l.close());
                var d = [];
                this.trcByPass && d.push("trc_skip_failover=yes"), this.enableTrcRoute && this.trcRoute && d.push("route=" + this.trcRoute), this.enableExperimentsVariantIdEvent && this.experimentsVariantIdParamsStr && d.push(this.experimentsVariantIdParamsStr), this.getLoaderTypesValue() && d.push(this.getLoaderTypesValue()), s.action = protocol + "//" + e + "/" + o + "/log/3/" + escape(t) + (d.length > 0 ? "?" + d.join("&") : ""), s.submit(), TRC.tlf && console.timeEnd("in logPostTrcEvent - " + t), TRC.performance && "available" === t && TRC.performance.mark("8.2.9"), TRC.performance && "visible" === t && TRC.performance.mark("9.2.9")
            }, Manager.prototype.getTransportForm = function(e) {
                var t, r;
                return (r = doc.createElement("form")).className = "trc-hidden " + TRANSPORT_FORM_ELEMENT, r.target = e, r.style.display = "none", r.method = "post", doc.body.appendChild(r), (t = doc.createElement("span")).className = TRANSPORT_FORM_ELEMENT, t.innerHTML = '<iframe class="trc-hidden" id="' + e + '" name="' + e + '" width="0" height="0" style="display:none"></iframe>', doc.body.appendChild(t), r
            }, Manager.prototype.shouldPostEventAsAjax = function(e) {
                var t = this.global["rbox-post-events-as-ajax"];
                return t && ("boolean" == typeof t || -1 !== t.indexOf(e))
            }, Manager.prototype.logPostTrcEventAsAjax = function(e, t) {
                var r = !1,
                    i = win.XDomainRequest || TRC.Browser.ieUpto(9);
                if (!i) try {
                    this.queryParamsObj = __trcCopyProps(this.experimentsVariantIdParamsMap, {}), this.enableTrcRoute && this.trcRoute && (this.queryParamsObj.route = this.trcRoute), __trcCopyProps(this.getLoaderTypesObject(), this.queryParamsObj);
                    var o = function(r, i) {
                        TRC.util.isPercentEnabled(r.global, "enable-bulk-events") && r.global["bulk-" + e + "-events-strategy"] ? TRC.BulkLoggerManager.bulkPost(i, e, t, null, r.queryParamsObj) : TRC.TRCLogger.post(i, e, t, null, r.queryParamsObj)
                    };
                    this.trcEventRoute && this.eventTypesToRoute.indexOf(e) > -1 ? (o(this, protocol + "//" + this.trcEventRoute), this.enableTrcEventRouteExperiment && o(this, protocol + "//" + this.domain)) : o(this, protocol + "//" + this.domain)
                } catch (e) {
                    r = !0, __trcError("Error in sending post event as ajax", e)
                }(i || r) && this.logPostTrcEvent(e, t)
            }, Manager.prototype.log1 = function(e, t, r, i, o, n) {
                var s = e + ":" + (o || t.li + t.ii) + t.ri;
                t.ii && t.it && (s = e + ":" + t.li + t.ii + t.ri), this.eventCounter[s] ? this.eventCounter[s]++ : ("function" == typeof n ? n() : this.logTrcEvent(e, t, r, i, o), this.eventCounter[s] = 1)
            }, Manager.prototype.loadExternal = function() {
                return TRC.net.loadScript.apply(null, arguments)
            }, Manager.prototype.parseLoaderParams = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var r = e[t];
                        if ("unknown" == r) continue;
                        switch ("auto" == r && (r = ""), t) {
                            case "visible":
                                this.invisible = !("boolean" == typeof r ? r : "false" != r);
                                break;
                            case "video":
                                win.trc_video_id = r, TRC.listOrigin.setSource("v");
                                break;
                            case "url":
                                win.trc_item_url = r;
                                break;
                            case "article":
                                win.trc_article_id = r, TRC.listOrigin.setSource("t");
                                break;
                            case "category":
                                win.trc_article_id = r, TRC.listOrigin.setSource("c");
                                break;
                            case "home":
                            case "homepage":
                                win.trc_article_id = r, TRC.listOrigin.setSource("h");
                                break;
                            case "search":
                                win.trc_article_id = r, TRC.listOrigin.setSource("s");
                                break;
                            case "photo":
                                win.trc_article_id = r, TRC.listOrigin.setSource("p");
                                break;
                            case "other":
                                win.trc_article_id = r, TRC.listOrigin.setSource("o");
                                break;
                            case "content_hub":
                                win.trc_article_id = r, TRC.listOrigin.setSource("z");
                                break;
                            case "link_target":
                                this.link_target = r;
                                break;
                            case "video_source":
                                this.video_source = r;
                                break;
                            case "callback":
                                this.video_player_callback = r;
                                break;
                            case "player_reference":
                                this.video_player_reference = r;
                                break;
                            case "target_type":
                                TRC.listOrigin.setTarget(this.target_type = r);
                                break;
                            case "exclude":
                                this.excludedItems = r instanceof Array ? r : [r];
                                break;
                            case "tracking":
                                this.tracking = r;
                                break;
                            case "referrer":
                                TRC.pageManager.updateReferrer(r);
                                break;
                            case "amp_disable_resize":
                                this.amp_disable_resize = r;
                                break;
                            case "user_opt_out":
                                this.userOptOut = !(!r || "false" == r || "0" == r) || r;
                                break;
                            case "device":
                                this.deviceId = r;
                                break;
                            case "unified_id":
                                this.unifiedId = r;
                                break;
                            case "user_type":
                                this.userType = r;
                                break;
                            case "paywall":
                                this.paywall = r;
                                break;
                            case "premium":
                                this.premium = !!r;
                                break;
                            case "advertorial_source":
                                this.advertorialSource = r;
                                break;
                            case "external_page_view":
                                this.external_page_view = r;
                                break;
                            case "tracking_codes":
                                this.tracking_codes = r;
                                break;
                            case "additional_data":
                                this.additional_data = r;
                                break;
                            case "framework":
                                this.framework = r;
                                break;
                            case "iab_alternative_config":
                                this.consentConfigOverride = r;
                                break;
                            case "consentMessage":
                                TRC.consent.setConsent(r)
                        }
                    }
            }, Manager.prototype.getItemByMetaValue = function(e) {
                for (var t = document.head.getElementsByTagName("meta"), r = 0; r < t.length; r++)
                    if (t[r].name == e) return t[r].content;
                return null
            }, Manager.prototype.getItemByCanonicalValue = function(e, t) {
                for (var r = document.head.getElementsByTagName("link"), i = 0; i < r.length; i++)
                    if ("canonical" == r[i].rel) return t.call(this, e, r[i].href);
                return null
            }, Manager.prototype.getItemByOgValue = function(e, t) {
                for (var r = document.head.getElementsByTagName("meta"), i = 0; i < r.length; i++)
                    if ("og:url" == r[i].getAttribute("property") && r[i].content.length > 5) return t.call(this, e, r[i].content);
                return null
            }, Manager.prototype.getItemByLocationValue = function(e, t) {
                return t.call(this, e, TRC.pageManager.getCurrentURL().toString())
            }, Manager.prototype.getItemByParamUrl = function(e, t) {
                return !win.trc_item_url || "item-id" != e && "item-url" != e ? null : t.call(this, e, win.trc_item_url)
            }, Manager.prototype.getAutoItemMeta = function(e, t, r, i) {
                var o = ["paramUrl", "meta", "canonical", "og", "location"],
                    n = {
                        paramUrl: "getItemByParamUrl",
                        meta: "getItemByMetaValue",
                        canonical: "getItemByCanonicalValue",
                        og: "getItemByOgValue",
                        location: "getItemByLocationValue"
                    },
                    s = this.global["url-extract-order"] ? this.global["url-extract-order"] : o,
                    a = 0,
                    l, c, d;
                for (s.push("location"), t = t ? r.call(this, e, t) : null; a < s.length && TRC.util.isEmptyString(t);) {
                    c = s[a], l = this[n[s[a]]];
                    try {
                        t = l ? l.call(this, e, r) : null
                    } catch (e) {
                        if (!this.global["tmp-catch-item-url-err"]) throw new Error(e.message);
                        t = ""
                    }
                    a++
                }
                return "item-url" == e && "getItemByParamUrl" == c ? t : (d = "getItemByLocationValue" != c, t = i ? i.call(this, t, win.trc_video_id ? "video" : "text", d) : t)
            }, Manager.prototype.getEventParams = function() {
                return {
                    ri: TRC.events_ri,
                    sd: this.getSessionData(TRC.session_data),
                    ui: TRC.pageManager.getUserId(),
                    pi: this.getItemId(),
                    wi: this.watchedItem ? this.watchedItem : null,
                    pt: this.getItemType(),
                    vi: TRC.pageManager.getPageData()
                }
            }, Manager.prototype.sendEvent = function(e, t, r, i, o, n) {
                var s = !1,
                    a = this.getEventParams(),
                    l = function() {
                        s || (s = !0, o && o())
                    };
                __trcCopyProps(t, a), i ? (this.log1(e, a, r, l, this.placement), TRC.pConsole("page", "info", "event type : " + e + " - this event will be sent only once for the widget", a, "object")) : (this.logTrcEvent(e, a, r, l), TRC.pConsole("page", "info", "sending event type : " + e, a, "object")), "number" == typeof n && TRC.Timeout.set(l, n)
            }, Manager.prototype.getSystemFlag = function(e) {
                return this.systemFlags && void 0 !== this.systemFlags[e] ? this.systemFlags[e] : null
            }, Manager.prototype.getSessionData = function(e) {
                var t = TRC.pageManager.getPublisherValue(TRC.publisherId, "session-data"),
                    r, i;
                return (!0 === this.global["prefer-response-session-data"] || !t) && e ? e : t
            }, Manager.prototype.getUserId = function(e) {
                var t = TRC.pageManager.getValue("user-id");
                return t || e || TRC.pageManager.getUserIdFromReferrer() || null
            }, Manager.prototype.GlobalRequetParams = function() {
                var e = {
                    id: parseInt(1e3 * Math.random()),
                    toString: function() {
                        return "globalRequestParams"
                    }
                };
                this.setItemId = function(t) {
                    t && (e.ii = t)
                }, this.setTemplate = function(t) {
                    t && (e.tmpl = t)
                }, this.setItemType = function(t) {
                    t && (e.it = t)
                }, this.setSessionData = function(t) {
                    e.sd = t
                }, this.setUserId = function(t) {
                    e.ui = t
                }, this.setLoaderBuildTime = function(t) {
                    t && (e.lbt = t)
                }, this.setUserIdFirstPartyCookie = function(t) {
                    e.uifp = t
                }, this.setUserLanguages = function(t) {
                    t && (e.ul = t)
                }, this.setCmpStatus = function(t) {
                    "number" == typeof t && (e.cmps = t)
                }, this.setConsentDaisyBit = function(t) {
                    "string" == typeof t && (e.cdb = t)
                }, this.setConsentTcString = function(t, r) {
                    "string" == typeof t && (!r || t.length < r) && (e.tcs = t)
                }, this.setCmpStatus = function(t) {
                    "number" == typeof t && (e.cmps = t)
                }, this.setGdprApplies = function(t) {
                    "boolean" == typeof t && (e.ga = t)
                }, this.setGdprWasTimeout = function(t) {
                    "boolean" == typeof t && (e.gwto = t)
                }, this.setCex = function(t) {
                    t && "string" == typeof t && (e.cex = t)
                }, this.setCcpaDns = function(t) {
                    t && "string" == typeof t && (e.ccpa_dns = t)
                }, this.setCcpaPs = function(t) {
                    t && "string" == typeof t && (e.ccpa_ps = t)
                }, this.setExcludedPublishers = function(t) {
                    t && "string" == typeof t && (e.exp = t)
                }, this.setCseg = function(t) {
                    t && "string" == typeof t && (e.cseg = t)
                }, this.setViewId = function(t) {
                    e.vi = t
                }, this.setClientVersion = function(t) {
                    e.cv = t
                }, this.setPublisherVersion = function(t) {
                    e.uiv = t
                }, this.setItemUrl = function(t) {
                    t && (e.u = t)
                }, this.setBrowserUrl = function(t) {
                    t && "string" == typeof t && (e.bu = t)
                }, this.setPlacementsParamsArray = function(t) {
                    e.r = t
                }, this.getPlacementsParamsArray = function() {
                    return e.r
                }, this.setExperimentVariant = function(t) {
                    t && (e.pev = t)
                }, this.setPastExclusions = function(t) {
                    e.px = t
                }, this.setScreenHeight = function(t) {
                    e.sh = t
                }, this.setScreenWidth = function(t) {
                    e.sw = t
                }, this.setBrowserWidth = function(t) {
                    e.bw = t
                }, this.setArticlePos = function(t) {
                    e.bad = t
                }, this.setScreenDensity = function(t) {
                    e.sde = t
                }, this.setBrowserHeight = function(t) {
                    e.bh = t
                }, this.setDocumentWidth = function(t) {
                    e.dw = t
                }, this.setDocumentHeight = function(t) {
                    e.dh = t
                }, this.setExclusions = function(t) {
                    e.ex = t
                }, this.enableTrcTesMode = function() {
                    e.y = !0
                }, this.setReferrer = function(t) {
                    e.e = t
                }, this.setMetaData = function(t) {
                    e.m = t
                }, this.setItemUrlQueryString = function(t) {
                    t && (e.qs = t)
                }, this.setNetworkID = function(t) {
                    e.nsid = t
                }, this.getId = function() {
                    return e.id
                }, this.setAll = function(t) {
                    t && (e = t)
                }, this.getAll = function() {
                    return e
                }, this.setRtui = function(t) {
                    e.rtui = t
                }, this.setDeviceId = function(t) {
                    t && (e.did = t)
                }, this.setUnifiedId = function(t) {
                    t && (e.unuid = t)
                }, this.setUserType = function(t) {
                    t && (e.usrtyp = t)
                }, this.setPaywall = function(t) {
                    t && (e.pywl = t)
                }, this.setPremium = function(t) {
                    t && (e.prem = t)
                }, this.setAdvertorialSource = function(t) {
                    t && (e.advrtsrc = t)
                }, this.setExternalPageView = function(t) {
                    t && (e.extpvid = t)
                }, this.setUTMParams = function(t) {
                    t && (e.pp = t)
                }, this.setBlockVideoLoader = function(t) {
                    t && (e.bv = t)
                }, this.setFlc = function(t) {
                    t && (e.fl = t)
                }, this.setBlockThumbnailVideoLoader = function(t) {
                    t && (e.btv = t)
                }, this.setConnectionType = function(t) {
                    t && (e.con = t)
                }, this.setConnectionSpeed = function(t) {
                    t && (e.cos = t)
                }, this.setAdditionalData = function(t) {
                    t && (e.ad = t)
                }, this.setPageLevelFeature = function(t) {
                    t && Object.keys(t).length > 0 && (e.plf = t)
                }, this.setTrcPiggyBack = function(t) {
                    t && (e.srpg = t)
                }
            }, Manager.prototype.PlacementParams = function() {
                var e = {};
                this.setListId = function(t) {
                    e.li = t
                }, this.setListSize = function(t) {
                    e.s = t
                }, this.setUIMode = function(t) {
                    e.uim = t
                }, this.setUIPlacement = function(t) {
                    e.uip = t
                }, this.setContainerPos = function(t) {
                    e.cd = t
                }, this.setContainerWidth = function(t) {
                    e.mw = t
                }, this.setOriginalUIPlacement = function(t) {
                    e.orig_uip = t
                }, this.setRequiredAttr = function(t) {
                    e.ra = t
                }, this.setAllowedCategories = function(t) {
                    e.ac = t
                }, this.setNativeCampaignID = function(t) {
                    e.nvcid = t
                }, this.setExclusions = function(t) {
                    e.ex = t
                }, this.setAll = function(t) {
                    e = t
                }, this.getAll = function() {
                    return e
                }, this.setFeedBatch = function(t) {
                    e.fb = t
                }, this.setFeedTemplateId = function(t) {
                    e.fti = t
                }, this.setFeedIndex = function(t) {
                    e.fi = t
                }
            }, Manager.prototype.log = __trcLog, Manager.prototype.error = __trcError, Manager.prototype.warn = __trcWarn, Manager.prototype.info = __trcInfo, Manager.prototype.debug = __trcDebug, Manager.prototype._repaintEllipsis = function(e) {
                var t = e.data && e.data.boxes;
                TRC.Ellipsis.doEllipsis(TRC.util.filterObj(function(e) {
                    return e.shouldUseSmartEllipsis()
                }, t || this.boxes))
            }, Manager.prototype.sendExternalTracking = function(e, t) {
                if (!TRC.botDetected) {
                    var r = this.generatePixelsMarkup(e, t),
                        i, o = this.shouldWritePixelsToIframe(e);
                    try {
                        r && (o && (o = this.appendPixelsToIFrame(r)), o || ((i = doc.createElement("span")).innerHTML = r, doc.body.appendChild(i)))
                    } catch (e) {
                        __trcError("Error in Manager.sendExternalTracking", e)
                    }
                    return r
                }
            }, Manager.prototype.shouldWritePixelsToIframe = function(e) {
                return e && this.isInternalPixels(e) || void 0 === this.global["disable-iframe-for-tracking-pixel"] || !this.global["disable-iframe-for-tracking-pixel"]
            }, Manager.prototype.isInternalPixels = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var r;
                    if (this.stripDomainFromPixel(e[t]).indexOf("taboola.com") > -1) return !0
                }
                return !1
            }, Manager.prototype.stripDomainFromPixel = function(e) {
                var t = e.replace(/(http[s]*:\/\/)|(^\/\/)/, "");
                return t.indexOf("?") > -1 && (t = t.substring(0, t.indexOf("?"))), t.indexOf("/") > -1 && (t = t.substring(0, t.indexOf("/"))), t
            }, Manager.prototype.loadScriptTags = function(e) {
                var t = e.data,
                    r, i, o = win.TRC.sharedObjects.loadedScripts,
                    n = [];
                for (i = 0; t && i < t.length; i++)
                    if ((r = t[i]) && !o[r]) try {
                        o[r] = !0, r = TRC.URL.prototype.switchProtocol.call(r, TRC.PROTOCOL), n.push(TRC.net.loadScript(r, "js", null, null, !0))
                    } catch (e) {
                        __trcWarn("Error appending script at position " + i + ", url=" + r, e)
                    }
                return n
            }, Manager.prototype.listenToRenderedModes = function() {
                TRC.eventDelegator.subscribe("onrender", function() {
                    this.renderedModeCounter++, this.renderedModeCounter !== this.totalModeCounter || TRC.yieldingEnabled || TRC.dispatch("allrender", {
                        data: this
                    })
                }.trcBind(this))
            }, Manager.prototype.generatePixelsMarkup = function(e, t) {
                for (var r = "", i, o, n = 0; e && n < e.length; n++)(i = e[n]) && (!t || t && !t[i]) && (t && (t[i] = !0), (o = TRC.text.encodeHTML(i)) && (r += '<img width="0" height="0" src="' + TRC.URL.prototype.switchProtocol.call(o, protocol, !0) + '">'));
                return r
            }, Manager.prototype.appendPixelsToIFrame = function(e) {
                var t = /<img [^>]*src="([^"]+)"[^>]*>/gm,
                    r;
                return (r = this.global["disable-unified-iframe-pixel-reporter"] ? this.appendPixelsToIFrameMultipleIframes(e) : this.appendPixelsToIFrameUnifiedIframes(e)) && this.global["track-external-pixel-traffic"] && this.global["track-external-pixel-traffic"] > 100 * Math.random() && TRC.modDebug.logMessageToServer(1, "fire external pixel", {
                    idx: "pix",
                    plat: this.getPlatformCode(),
                    urls: e.match(t)
                }), r
            }, Manager.prototype.appendPixelsToIFrameUnifiedIframes = function(e) {
                var t, r = "trc-pixel-iframe-" + parseInt(1e4 * Math.random(), 10),
                    i, o, n = !1,
                    s;
                if (e) {
                    try {
                        this.iframePixelReporter ? i = this.iframePixelReporter : (t = this.getPixelWrapper(r), doc.body.appendChild(t), i = doc.getElementById(r), this.iframePixelReporter = i), o = i.contentDocument ? i.contentDocument : i.contentWindow.document, (s = doc.createElement("span")).innerHTML = e, o.body.appendChild(s), n = !0, o.close()
                    } catch (e) {
                        __trcDebug("Failed to create IFrame for external tracking")
                    }
                    return n
                }
            }, Manager.prototype.appendPixelsToIFrameMultipleIframes = function(e) {
                var t = "trc-pixel-iframe-" + parseInt(1e4 * Math.random(), 10),
                    r, i, o, n = !1;
                if (e) {
                    try {
                        i = this.getPixelWrapper(t), doc.body.appendChild(i), r = doc.getElementById(t), this.iframePixelReporter = r, (o = r.contentDocument ? r.contentDocument : r.contentWindow.document).body.innerHTML = e, n = !0, o.close()
                    } catch (e) {
                        __trcDebug("Failed to create IFrame for external tracking")
                    }
                    return n
                }
            }, Manager.prototype.getPixelWrapper = function(e) {
                var t;
                return !this.global["disable-iframe-span-wrapping"] || TRC.Browser["ieUpto"](8) ? (t = doc.createElement("span")).innerHTML = '<iframe class="trc-hidden" id="' + e + '" name="' + e + '" width="0" height="0" style="display:none"></iframe>' : ((t = doc.createElement("iframe")).className = "trc-hidden", t.id = e, t.name = e, t.style.height = "0px", t.style.width = "0px", t.style.display = "none"), t
            }, Manager.prototype.placementShouldHaveResponseData = function(e, t) {
                return !(!(t.search("rbox-tracking") < 0) || e.isFeed || e.isStories || e.isIframeCard || e.externalContainerSelector || e.isStandaloneVideo || e.scriptData || e.publisherCardData)
            }, Manager.prototype.placementHasResponseData = function(e) {
                return null != e.response || e.dc
            }, Manager.prototype.getOrCreatePlacementData = function(e, t) {
                var r = this.preloadRequest[e];
                return r || (r = this.createPlacementData(e, t)) && (this.preloadRequest[e] = r), r
            }, Manager.prototype.createPlacementData = function(e, t) {
                return this.isRegularWidget(t) ? this.createAddedWidgetData(e, t) : this.isStandaloneVideo(t) ? this.createStandaloneVideoWidgetData(e, t) : TRC.FeedsManager.isFeedIframe(t) ? TRC.FeedsManager.createFeedIframe(e, t) : TRC.FeedsManager.isFeedScriptWidget(t) ? TRC.FeedsManager.createFeedScriptWidgetData(e, t) : TRC.FeedsManager.isExternalContainerWidget(t) ? TRC.FeedsManager.createExternalWidgetData(e, t) : TRC.FeedsManager.isPublisherCard(t) ? TRC.FeedsManager.createPublisherCardData(e, t) : void 0
            }, Manager.prototype.isRegularWidget = function(e) {
                return e.m
            }, Manager.prototype.createAddedWidgetData = function(e, t) {
                return {
                    placement: e,
                    mode: t.m,
                    mode_name: t.m,
                    addWidget: !0
                }
            }, Manager.prototype.isStandaloneVideo = function(e) {
                return e.vtag && e.vtag.position === TRC.VideoTagLoader.prototype.LOCATION_TYPES.STANDALONE
            }, Manager.prototype.createStandaloneVideoWidgetData = function(e, t) {
                return {
                    placement: e,
                    isStandaloneVideo: !0
                }
            }, Manager.prototype.getSortedCloudinaryRatios = function() {
                var e, t;
                if (!this.cloudinarySortedRatios) {
                    e = this.global["cloudinary-aspect-ratios-list"] || [
                        [1, 2],
                        [1, 1.9],
                        [1, 1.8],
                        [9, 16],
                        [1, 1.7],
                        [1, 1.6],
                        [1, 1.5],
                        [1, 1.4],
                        [3, 4],
                        [1, 1.3],
                        [1, 1.2],
                        [1, 1.1],
                        [1, 1],
                        [1, .9],
                        [6, 5],
                        [1, .8],
                        [4, 3],
                        [1, .7],
                        [3, 2],
                        [1, .6],
                        [16, 9],
                        [2, 1]
                    ];
                    for (var r = 0; r < e.length; r++) t = e[r], e[r] = t[0] / t[1];
                    this.cloudinarySortedRatios = e.sort()
                }
                return this.cloudinarySortedRatios
            }, Manager.prototype.getExpandOptions = function(e) {
                var t = {
                    expandType: e["et"]
                };
                return e["ch"] && (t.collapsedHeight = e["ch"]), e["ebc"] && (t.expandButtonCaption = e["ebc"]), e["cbc"] && (t.collapseButtonCaption = e["cbc"]), t
            }, Manager.prototype.clearPageElements = function() {
                this.clearTransportFrames(), this.clearUserXElements(), this.clearStyleSheets()
            }, Manager.prototype.clearTransportFrames = function() {
                var e;
                document.querySelector && [].slice.call(document.querySelectorAll("." + TRANSPORT_FORM_ELEMENT)).forEach(function(e) {
                    e.parentNode.removeChild(e)
                })
            }, Manager.prototype.clearUserXElements = function() {
                TRC.userX && TRC.userX.reset()
            }, Manager.prototype.clearStyleSheets = function() {
                this.global["clear-styles-on-reset"] && TRC.dom.removeAllInjectedStyleSheets()
            }, Manager.prototype.shouldBlockVideoLoader = function(e) {
                var t = !1;
                return isNaN(e) || (t = Math.random() < e / 100), TRC.pConsole("page", "info", "Blocked video: " + t + ", block-video-prob: " + e, "string"), t
            }, Manager.prototype.shouldBlockThumbnailVideoLoader = function(e) {
                var t = !1;
                return isNaN(e) || (t = Math.random() < e / 100), TRC.pConsole("page", "info", "Blocked thumbnail video: " + t + ", block-Thumbnail-video-prob: " + e, "string"), t
            }, Manager.prototype.getPublisherVersionPropertyWithFallbackToNetwork = function(e) {
                return this[e][TRC.publisherId] || TRC.networkId && this[e][TRC.networkId]
            }, Manager.prototype.getSiteNameOgValue = function() {
                return this.siteName || (this.siteName = this.getPageMetaPropertyValue("og:site_name")), this.siteName
            }, Manager.prototype.getPageMetaPropertyValue = function(e) {
                for (var t = document.head.getElementsByTagName("meta"), r = 0; r < t.length; r++)
                    if (t[r].getAttribute("property") === e) return t[r].content;
                return __trcDebug("Failed finding meta tag property : " + e + " value"), null
            }, Manager.prototype.composeGetURL = function(e, t, r) {
                var i = this["normalize-log-param"]("publisher", TRC.publisherId),
                    o = protocol + "//" + (r || this.domain) + "/" + i + "/log/3/" + escape(e) + "?";
                for (var n in o += this.trcByPass ? "trc_skip_failover=yes&" : "", o += this.enableTrcRoute && this.trcRoute ? "route=" + this.trcRoute + "&" : "", o += this.enableExperimentsVariantIdEvent && this.experimentsVariantIdParamsStr ? this.experimentsVariantIdParamsStr + "&" : "", o += this.getLoaderTypesValue() ? this.getLoaderTypesValue() + "&" : "", t) t.hasOwnProperty(n) && (win.nam = "_" == n.charAt(0) ? n.substr(1) : n, void 0 !== t[n] && null != t[n] && (0 == n.indexOf("unescape-") ? o += n.replace("unescape-", "") + "=" + t[n] + "&" : o += escape(nam) + "=" + escape(t[n]) + "&"));
                return o
            }, Manager.prototype.sendPubsGenericEvent = function(e, t, r, i) {
                var o = {
                    data: JSON.stringify(t),
                    type: e,
                    eventTime: (new Date).getTime()
                };
                this.generateEvent("pubs-generic", o, r, i)
            }, Manager.prototype.sendAbTestEvent = function(e, t, r, i) {
                var o = {
                    abTestsEventType: "simple",
                    name: e,
                    type: t,
                    eventTime: (new Date).getTime()
                };
                this.generateEvent("abtests", o, r, i)
            }, Manager.prototype.generateEvent = function(e, t, r, i) {
                var o = {
                    "unescape-d": encodeURIComponent(__trcJSONify(t))
                };
                if (i && TRC.hasNetworkAsyncSupport()) {
                    o.tim = __trcClientTimestamp(), o.id = parseInt(1e4 * Math.random()), o.llvl = win.trc_debug_level, __trcCopyProps(this.getEventParams(), o);
                    var n = this.composeGetURL(e, o);
                    TRC.sendPostAsyncCall(n)
                } else this.sendEvent(e, o, null, !1, r, null, i)
            }, Manager.prototype.initRBox = function(e, t) {
                var r, i;
                return r = new TRC.implClasses.TRCRBox(t.origin.toString(), t, this), TRC.dispatch("preBoxRender", {
                    mybox: r
                }), this.currentRecommendation && !TRC.fallbackApi.shouldRenderPlacementByRequest(this.currentRecommendation, this.preloadRequest) ? r : (e._trcRboxId = r.id, this.boxes[r.id] = r, e._trc_container || (e._trc_container = document.createElement("div"), e._trc_container.className = "trc_rbox_container", e._trc_anonbox = document.createElement("div"), e._trc_container.appendChild(e._trc_anonbox), e.appendChild(e._trc_container), this.cssReset && "rbox-tracking" !== r.mode_name ? (i = doc.createElement("div"), TRC.dom.swapElements(e, i, !1), r["outermostContainer"] = this.createCssResetContainers(e, r.mode_name), TRC.dom.swapElements(i, r["outermostContainer"], !1), TRC.pConsole("page", "info", "CSS reset is enabled on all widgets")) : r["outermostContainer"] = e), TRC.dispatch("beforeBoxRender", {
                    mybox: r,
                    containerElm: e,
                    boxesList: this.boxes
                }), r.render(e._trc_anonbox), this.renderRBox(r), win.TRC.trc_drawRBox = !0, r)
            }, Manager.prototype.shouldRetryFailedPlacementRequest = function(e) {
                return !e.addWidget && !e.fpl && (!e.numFailedRequests || e.numFailedRequests < this.maxRetriesPerFailedPlacementRequest)
            }, Manager.prototype.retryFailedPlacementRequest = function(e, t) {
                t.numFailedRequests = t.numFailedRequests || 0;
                var r = {};
                r[e] = t, t.numFailedRequests++, this.dispatchLoadRequest(r)
            }, Manager.prototype.createContainerForEscalatorWidget = function(e) {
                e["container"] = document.createElement("div"), e["container"].id = "trc_rbox_slider_" + Math.floor(2147483648 * Math.random()).toString(36), e["container"].className = "trc_related_container", this.cssReset && doc.body.appendChild(e["container"])
            }, Manager.prototype.callTrc = function(e, t, r, i) {
                TRC.isAMPSplitFeed && this.ampSplitFeedManager.ampSplitFeedCache.getCacheData("tbl_syncViewID") !== t.vi && __trcError("View ID Not Synched Between AMP Split Feed iFrames"), this.preloadRequestLoader = this.loadExternal(e, "js", this.handleLoadResponseFailure.trcBind(this), !0), this.preloadRequestLoader.doneCurrentRequest = i, this.preloadRequestLoader.timeout = TRC.Timeout.set(this.abortLoadRequest.trcBind(this, !0, t.cb), r), this.lastReqId = t.id, TRC.performance && TRC.performance.mark("5.1.0", null, "TrcPv3", this.lastReqId, "pv3call", TRC.PerfEvenType.START), TRC.pConsole("", "time", "dispatch recommendation request", "")
            }, Manager.prototype.callTrcByWorker = function(url, req, timeout) {
                TRC.performance && TRC.performance.mark("5.1.0", null, "TrcPv3", this.lastReqId, "pv3call", TRC.PerfEvenType.START), this.lastReqId = req.id, TRC.worker.xhr(url, timeout, function(data) {
                    try {
                        eval(data)
                    } catch (e) {
                        __trcError("TRC.worker: Worker Error in trc response", e)
                    }
                }, this.handleLoadResponseFailure.bind(this)), TRC.pConsole("", "time", "dispatch recommendation request", "")
            }, Manager.prototype.callTrcByAjax = function(e, t, r, i) {
                TRC.performance && TRC.performance.mark("5.1.0", null, "TrcPv3", this.lastReqId, "pv3call", TRC.PerfEvenType.START), this.lastReqId = t.id;
                var o = function(e) {
                        this.handleLoadResponseFailure(), this.abortLoadRequest(!0, t.cb), __trcWarn(e)
                    }.trcBind(this),
                    n = this.handleLoadResponse.trcBind(this, t.cacheKey);
                this.preloadRequestLoader = {}, this.preloadRequestLoader.doneCurrentRequest = i;
                var s = new XMLHttpRequest;
                s.open("GET", e, !0), s.setRequestHeader("Content-Type", "text/plain"), s.withCredentials = !0, s.timeout = r, s.addEventListener("readystatechange", this.handleTrcAjaxResponseStatus.trcBind(this, s, n, o)), s.addEventListener("error", function() {
                    o("Network error")
                }), s.addEventListener("timeout", function() {
                    o("Network timeout: " + r)
                }), s.send(""), TRC.pConsole("", "time", "dispatch recommendation request", "")
            }, Manager.prototype.handleTrcAjaxResponseStatus = function(e, t, r) {
                if (4 === e.readyState && 0 !== e.status)
                    if (e.status < 200 || e.status >= 300) r("Ajax status code not valid");
                    else {
                        var i = /^[^{]*(.*)\)$/,
                            o = e.responseText;
                        if (!o || o.indexOf('{"trc":{}}') > -1) r("Invalid response from server: " + o);
                        else if (o.indexOf("TRC.callbacks.mute()") > -1) TRC.callbacks.mute();
                        else {
                            var n = o.match(i);
                            if (n) try {
                                t(JSON.parse(n[1]))
                            } catch (e) {
                                r("TRC response not a valid JSON: " + o)
                            } else r("Can't validate TRC response: " + o)
                        }
                    }
            }, Manager.prototype.clearPreloadRequestLoader = function() {
                this.preloadRequestLoader && (TRC.Timeout.clear(this.preloadRequestLoader.timeout), this.preloadRequestLoader.parentNode && this.preloadRequestLoader.parentNode.removeChild(this.preloadRequestLoader), this.preloadRequestLoader = null)
            }, Manager.prototype.clearPreloadRequestLoaderAndCallNext = function() {
                var e;
                this.preloadRequestLoader && "function" == typeof this.preloadRequestLoader.doneCurrentRequest && (e = this.preloadRequestLoader.doneCurrentRequest), this.clearPreloadRequestLoader(), e && e()
            }, Manager.prototype.clearPreloadRequestLoaderAndResetQueue = function() {
                this.clearPreloadRequestLoader(), TRC.recoRequestsQueue.resetQueue()
            }, Manager.prototype.enableExploreMore = function(e, t) {
                e.shouldNotCopyPublisherHeaderHtml = this.global["shouldNotCopyPublisherHeaderHtml"] || !1, this.loadExploreMoreModule(e);
                var r = this.createAndAppendExploreMoreContainer(e.exm.container);
                this.setPlacementDataInPreloadRequest(t, r), TRC.exploreMoreInitialized = !0
            }, Manager.prototype.setPlacementDataInPreloadRequest = function(e, t) {
                this.preloadRequest[e] = this.computeRBoxOptions({
                    container: t,
                    placement: e,
                    target_type: "mix",
                    addedWidget: !0
                })
            }, Manager.prototype.createAndAppendExploreMoreContainer = function(e) {
                var t = document.createElement("div");
                return t.id = e, TRC.dom.addClass(t, "tbl-invisible"), document.body.appendChild(t), t
            }, Manager.prototype.loadExploreMoreModule = function(e) {
                TRC.ModuleLoader.load("explore-more", TRC.ExploreMore, function() {
                    this.exploreMore = new TRC.ExploreMore(this, e)
                }.trcBind(this))
            }, Manager.prototype.shouldSkipPlacement = function(e, t) {
                return !!TRC.exploreMoreInitialized && (TRC.ExploreMore && TRC.ExploreMore.shouldSkipPlacement(e, t, this.feedsManager))
            }, Manager.prototype.shouldSkipPushedRequest = function(e) {
                return !!TRC.exploreMoreInitialized && (TRC.ExploreMore && TRC.ExploreMore.shouldSkipPushedRequest(e))
            }, Manager.prototype.parseClientGenericAction = function(e) {
                var t = this.emulateCga() || e.trc["cga"];
                if (t) return __trcUnJSONify(t)
            }, Manager.prototype.emulateCga = function() {
                return TRC.URL.prototype.getParameter.call(location.href, "trc_cga")
            }, Manager.prototype.initCcpa = function(e, t) {
                var r = e && e.ccpa;
                !this.global["disable-ccpa"] && r && TRC.ccpa && !TRC.ccpa.isInitialized && (TRC.ccpaPs ? (TRC.ccpa.isInitialized = !0, TRC.ccpa.sendCcpaEvent("publisher")) : TRC.ccpa.init(t.trc["vl"], e.ccpa))
            }, Manager.prototype.initPubConfigGenericActionOverride = function(e) {
                if (e && e.pubConfigOverride) {
                    this.isExpoTest() && TRC.util.haveMutualKeys(e.pubConfigOverride, TRC.overrideGlobalConfig) && __trcError("client generic action override publisher config used in an expo test! expo test:" + this.getSystemFlag("experimentID") + ",override is:" + JSON.stringify(e.pubConfigOverride) + " expo is:" + JSON.stringify(TRC.overrideGlobalConfig));
                    var t = TRC.util.merge({}, this.global, e.pubConfigOverride);
                    Object.defineProperty(this, "global", {
                        get: function() {
                            return t
                        }
                    })
                }
            }, Manager.prototype.isExpoTest = function() {
                return !!this.getSystemFlag("experimentID")
            }
        }(window, document),
        function(e, t) {
            var r = "sponsored";

            function i() {
                return document.createTextNode(" ")
            }

            function o() {
                return document.createTextNode("…")
            }
            TRC.implClasses = TRC.implClasses || {};
            var n = TRC.implClasses.TRCRBox = function(e, t, r) {
                    return this._id = Math.floor(1e5 * Math.random()), this.fixHeight = t.height, this.domain = r.domain, this.origin = e, this.header = !1, this.id = "trc_" + this._id, this.response = this.request = null, __trcCopyProps(t, this), this.loaded = !!this.loaded && this.loaded, this.element = null, this.listContainer = null, this.retryCount = 0, this.drawList = !1, this.forceItemType = !1, this.trc = r, this.util = TRC.util, this.timeoutId = null, this.errorHandler = "", this.boxes = [], this.recommendationList = null, this.use_cdn = !0 === this.trc.getProperty(this.mode_name, "use-cdn-recommendations", this.propertiesOverride), this.postRenderQueue = new TRC["PostRenderQueue"], this.src = null, this.fullEventItemsHash = {}, this.isCssImportant = this.trc.getProperty(this.mode_name, "use-css-important", this.propertiesOverride), this.publisher = TRC.publisherId, this.smallIOSDevice = this.trc["small-ios-device"] || "iPhone|iPod", this.isSmallIOS = this.smallIOSDevice.indexOf(TRC.Device.deviceType) >= 0, this.isFeedCard = t.isFeedCard, this.enableFeedView = t.feedViewConfig || this.trc.global["enable-feed-view"] || !1, this.iosLinkTarget = this.trc.getProperty(this.mode_name, "ios-sc-link-target-mode", this.propertiesOverride) || this.trc.global["ios-sc-link-target"], this.defaultLinkTarget = this.trc.global["link-target-conf"] || {
                        NAV: "_self",
                        NT: "_blank",
                        SP: "_blank"
                    }, this.linkTargetConf = this.isSmallIOS && this.iosLinkTarget ? this.iosLinkTarget : this.trc["link-target-conf"], this.ntHandlerEnabled = this.trc.global["publisher-onclick-nt-enabled"], this.organicRedirParam = this.trc.global["organic-redirect-param"], this.shiftRedirOnclick = this.trc.global["shift-redir-onclick"], this.useRedirect = TRC.util.isAmp(TRC) ? this.trc.global["enable-organic-redirect-on-amp"] : this.trc.global["enable-organic-redirect"], this.useRedirectOnLink = this.trc.global["use-redirect-on-link"], this.adcItemTypes = this.trc.global["adchoice-item-types"] || {
                        "is-organic": !1,
                        "is-in-network": !1,
                        "is-syndicated": !0,
                        "is-native": !0
                    }, this.sendClickPiggyBack = this.trc.global["send-pb-in-click"], this.imagesAltUrls = this.trc.global["images-alt-urls"] || [], this.disableResponsiveCSSReuse = this.trc.global["disable-responsive-css-reuse"], this.disableViolationMeasurementOnPaywall = this.trc.global["disable-violation-measurement-paywall"] || !1, this.disableViolationSelectorOnPaywall = this.trc.global["paywall-violation-disabled-selector"] || null, this.options = t, this.apiData = [], this.lazyLoadImageObserversIds = [], this.isMultiWidget = t.trcResponse && t.trcResponse.multiWidget, this.multiWidgetModeLevelData = this.isMultiWidget && t.multiWidgetModeLevelData, TRC.util.isPercentEnabled(this.trc.global, "custom-image-size-round-percent") && (this.customImageSizeRound = this.trc.global["custom-image-size-round-value"]), this
                },
                s = "https://images.taboola.com/taboola/image/fetch/",
                a = "h_{h},w_{w}",
                l = s + "f_jpg%2Cq_80%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces%2Ce_sharpen/",
                c = s + "fl_lossy%2Cf_gif%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/",
                d = s + "$pw_{w}%2C$ph_{h}/t_tbl-cnd/",
                h = TRC.PROTOCOL,
                p, u;
            n.prototype.DEFAULT_THUMB_RATIO = .8, n.prototype.getImageUrlPrefix = function() {
                return l
            }, n.prototype.getListId = function() {
                return this.visible ? "rbox-" + this.origin : "rbox-tracking"
            }, n.prototype.getSessionId = function() {
                return this.response && this.response.trc ? this.response.trc["session-id"] : null
            }, n.prototype.getItemType = function() {
                return this.forceItemType ? this.forceItemType : this.trc.getItemType()
            }, n.prototype.generateHeader = function(e) {
                var t = this.getWidgetToFeedHelper(),
                    r = document.createElement("div"),
                    i = document.createElement("span"),
                    o = this.trc.getProperty(this.mode_name, "header", this.propertiesOverride),
                    n = this.trc.getProperty(this.mode_name, "header-right", this.propertiesOverride),
                    s = "No Header" !== n;
                if (r.id = this.id.replace("trc_", "trc_header_"), r.className = "trc_rbox_header trc_rbox_border_elm", i.className = "trc_rbox_header_span", this.generateHeaderIcon(i), r["ext"] = document.createElement("div"), r["ext"].className = "trc_header_ext", r.appendChild(r["ext"]), s) this.generateHeaderPart(i, o, "trc_header_left_column trc_header_left_part"), this.generateHeaderPart(i, n, "trc_header_right_column trc_header_right_part");
                else {
                    var a = "No Header" !== o ? o : "";
                    i.insertAdjacentHTML("beforeend", a)
                }
                return r["titleBox"] = i, r.appendChild(i), t && !t.getHeader() ? t.addHeaderToFeed(r) : e.appendChild(r), r
            }, n.prototype.generateHeaderIcon = function(e) {
                var t, r, i, o = this.trc.getProperty(this.mode_name, "header-icon", this.propertiesOverride) || "NONE";
                "CUSTOM" === o ? i = this.trc.getProperty(this.mode_name, "header-icon-url", this.propertiesOverride) : "PUBLISHER_LOGO" === o && (i = this.trc.getPublisherVersionPropertyWithFallbackToNetwork("publisher-logo")), i && ((r = document.createElement("img")).className = "trc_rbox_header_icon_img trc_img", r.src = TRC.URL.prototype.switchProtocol.call(i, h), (t = document.createElement("div")).className = "trc_rbox_header_icon_div", t.appendChild(r), e.appendChild(t), e.className += " trc_rbox_header_icon_span")
            }, n.prototype.generateHeaderPart = function(e, t, r) {
                var i = document.createElement("span");
                i.className = "trc_inner_header " + (r || ""), i.insertAdjacentHTML("beforeend", t), e.appendChild(i)
            }, n.prototype.render = function(e) {
                this.element = document.createElement("div"), this.element.id = this.id.replace("trc_", "trc_wrapper_"), this.element.className = "trc_rbox " + this.mode_name, this.element.style.overflow = "hidden", e.appendChild(this.element), this.element.style.display = "none", !0 === this.trc.getProperty(this.mode_name, "has-expand-animation", this.propertiesOverride) && new TRC.ExpandAnimationManager(this)
            }, n.prototype.setTargetItemsList = function(e, t, r) {
                if (t)
                    for (var i = 0, o = t.length; i < o; i++) e[t[i]["item-id"]] = {
                        tii: t[i]["item-id"],
                        tipt: this.getProviderType(t[i]),
                        tit: t[i]["type"],
                        tids: r
                    }
            }, n.prototype.getJsonTargetItemsList = function(e) {
                var t = [],
                    r;
                for (r in e) e.hasOwnProperty(r) && t.push(e[r]);
                return t
            }, n.prototype.getProviderType = function(e, t) {
                return e["is-syndicated"] ? t ? "sponsored" : "SP" : e["is-in-network"] ? t ? "exchange" : "NT" : e["is-native"] ? t ? "native" : "NAV" : t ? "organic" : "RC"
            }, n.prototype.setApiItemsData = function(e) {
                this.apiData.push({
                    url: e.url,
                    slot: e.itemIndex,
                    id: e.id,
                    type: this.getProviderType(e, !0),
                    title: e.title
                })
            }, n.prototype.isReadMoreDevice = function(e) {
                for (var t = e.split("|"), r = {
                        smart_phone: TRC.dom.isSmartPhone(),
                        tablet: TRC.dom.isTablet(),
                        desktop: TRC.dom.isDesktop()
                    }, i = 0; i < t.length; i++) {
                    if ("all" === t[i]) return !0;
                    if (r[t[i]]) return !0
                }
                return !1
            }, n.prototype.getReadMoreConfig = function() {
                var e = this.trc.getProperty(this.mode_name, "read-more-config", this.propertiesOverride) || {};
                return e.boxSelector = this.trc.getProperty(this.mode_name, "read-more-box-selector", this.propertiesOverride), e.threshold = this.trc.getProperty(this.mode_name, "read-more-threshold", this.propertiesOverride), e.minimizedSize = this.trc.getProperty(this.mode_name, "read-more-minimized-size", this.propertiesOverride), e.caption = this.trc.getProperty(this.mode_name, "read-more-caption", this.propertiesOverride), e.cutoffType = this.trc.getProperty(this.mode_name, "read-more-cutoff-from-type", this.propertiesOverride), e.anchorSelector = this.trc.getProperty(this.mode_name, "read-more-anchor-selector", this.propertiesOverride), e.lengthFromAnchorElementType = this.trc.getProperty(this.mode_name, "read-more-cutoff-length-type", this.propertiesOverride), e.lengthFromAnchorElement = this.trc.getProperty(this.mode_name, "read-more-cutoff-length-from-anchor-element", this.propertiesOverride), e.modeDevices = this.trc.getProperty(this.mode_name, "read-more-mode-devices", this.propertiesOverride), e
            }, n.prototype.isNoRecommendationsMode = function() {
                return "rbox-tracking" == this.getListId() || "rbox-only-video" === this.mode_name
            }, n.prototype.calcModeName = function(e, t) {
                var r, i;
                return TRC.TRCParser.IsBaseModeAndABModeExist(e) ? TRC.TRCParser.parseBaseModeAndABModeName(e) : (r = TRC.TRCParser.parseBaseModeName(e)) ? r : (i = TRC.TRCParser.parseTestVariant(e)) ? (TRC.pConsole(this.mode_name, "info", "test variant = " + i), TRC.TRCParser.parseABModeName(t, e)) : void 0
            }, n.prototype.loadScriptCallback = function(e, t) {
                this.propertiesOverride = this.getPropertiesOverride(t), this.isProviderIframe = this.trcResponse && this.trcResponse.hasOwnProperty("ifr") && this.trcResponse.ifr;
                var r = "TRCRBox.loadScriptCallback" + "(retry=" + this.retryCount + ")",
                    i = t.trc,
                    o, n = this.response && this.response.trc["DNT"] && "TRUE" === this.response.trc["DNT"].toUpperCase(),
                    s = TRC.TRCParser,
                    a, l, c, d, h = this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride);
                if (__trcDebug("Enter " + r), this.abortRequest(), this.utm = this.requestTime && [this.requestTime, (new Date).getTime() - TRC.utm.start], e && (this.trc.trcCache.cacheResponse(e, t, TRC.pageManager.state.moreDispatchParams), this.trc.cachedResponses[e] = !0), i && i["video-list"] && i["video-list"].pvc && (this.pVideoLoader = new TRC.PVideoLoader(this, i["video-list"].pvc, this.response.trc, this.trc)), !(i && i["video-list"] && i["video-list"].video || this.isProviderIframe)) {
                    __trcError("Exit " + r + ": request format error");
                    var p = this.response.feedPlacement || this.placement;
                    return TRC.dispatch("onRboxFlowError", {
                        placement: p
                    }), void TRC.EventsAPI.dispatchNoContent(this.trc.NO_CONTENT.noItems, this.placement, this.isFeedCard)
                }
                if (TRC.UserIdMerger.notifyPossibleUserChange(this.trc, TRC.publisherId, i["user-id"], i["session-data"]), i["consent-missing"] || TRC.pageManager.storePublisherValue(TRC.publisherId, "session-data", i["session-data"]), t.trc["DNT"] && "TRUE" === t.trc["DNT"].toUpperCase() ? (TRC.doNotTrack = !0, TRC.pageManager.removeAllKeys(), TRC.pageManager.removeUserId()) : TRC.pageManager.storeUserId(i["user-id"], i["consent-missing"]), this.drawList) __trcWarn("Exit " + r + ": got another response after already drawing");
                else {
                    if (this.response = t, this.isResponseFromCache() && (this.cachedViewId = this.response.cachedViewId), this.setTargetItemsList(this.fullEventItemsHash, i["video-list"].video, "a"), (c = new TRC.PlacementEventPostData).setFullItemList(this.getJsonTargetItemsList(this.fullEventItemsHash)), d = this.createUtmParam(), void 0 !== this.modeGroupOrder && this.util.merge(d, {
                            mgo: this.modeGroupOrder
                        }), i["video-list"].video && i["video-list"].video.length < 1 && !this.isNoRecommendationsMode()) {
                        __trcError("Exit " + r + ": no items in response - " + this.mode_name), TRC.EventsAPI.dispatchRender(i), this.abortRendering(), this.sendAvailableEvent(d, c, !0, !1);
                        var p = this.response.feedPlacement || this.placement;
                        return TRC.dispatch("onRboxFlowError", {
                            placement: p
                        }), void TRC.EventsAPI.dispatchNoContent(this.trc.NO_CONTENT.noItems, this.placement, this.isFeedCard)
                    }
                    if (this.isResponsive = this.trc.getProperty(this.mode_name, "mode-is-responsive", this.propertiesOverride), this.recommendationList = this.isMultiWidget ? this.multiWidgetRecItems.splice(0, this.getCurrentListSize()) : i["video-list"].video || [], this.isProviderIframe ? TRC.listen("available::" + this.placement, function(e) {
                            !1 !== this.trcResponse.config["send-events"] && (this.sendAvailableEvent(d, c, !1, !0), this.visibilityReporter = new TRC.WidgetVisibilityReporter(this), TRC.intersections.isInViewPort({
                                targetElement: e.container,
                                enableDelayedVisibilityCheck: !0,
                                onTrigger: function() {
                                    this.recommendationList.length && this.visibilityReporter.calculateVisibleItems(null, !0, this.recommendationList), this.visibilityReporter.reportVisibility()
                                }.trcBind(this)
                            }), this.registerProviderClicks(this.recommendationList)), this.sendPlacementTrackingPixelsOnce("i")
                        }.trcBind(this)) : this.sendAvailableEvent(d, c, !1, !1), this["rtb-win"] && this.sendEvent("rtb-win", this["rtb-win"]), this.itemsTypes = this.getItemsTypesList(this.recommendationList), this.privacyId = this.getPrivacyId(this.recommendationList), this.orig_name = this.mode_name, this.orig_placement = this.placement, this.isProviderIframe || this.sendPlacementTrackingPixelsOnce("i"), o = this.calcModeName(t.trc, this.mode_name), this.changeModeName(o, !0, "mode - " + o + " has no config :- fallback - " + this.mode_name), this.isProviderIframe || this.isNoRecommendationsMode() || void 0 !== this.trc.modes[this.mode_name]) {
                        a = this.trc.getProperty(this.mode_name, "auto-size", this.propertiesOverride), l = "none" != this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride), this.useNativeLineClamp = TRC.Browser.compatibility.lineClamp && !this.trc.getProperty(this.mode_name, "details-inline-with-title", this.propertiesOverride) && this.trc.getProperty(this.mode_name, "use-browser-line-clamp", this.propertiesOverride), this.widgetCreatorLayout = this.trc.getProperty(this.mode_name, "widget-creator-layout", this.propertiesOverride), this.isWCTextLinks = "autowidget-template-text-links" === this.widgetCreatorLayout, this.isCarousel = "scrolling" === this.trc.getProperty(this.mode_name, "navigation-type", this.propertiesOverride), this.shouldLazyLoadImages = this.trc.getProperty(this.mode_name, "has-thumbs-image-lazy-load", this.propertiesOverride) || this.trc.global["thumbnail-image-lazy-load"], this.link_target = this.link_target || this.trc.getProperty(this.mode_name, "link-target") || "normal", __trcDebug("Exit " + r + ": success"), this.drawList = !0, this.hasReadMore = !0 !== this.trc.disableReadMore && this.trc.getProperty(this.mode_name, "enable-read-more", this.propertiesOverride), this.readMorePageConfig = this["read_more"] || {}, this.readMoreConfig = this.getReadMoreConfig(), this.readMoreDevices = this.trc.getProperty(this.mode_name, "read-more-mode-devices", this.propertiesOverride) || this.trc["read-more-devices"], this.getWidgetToFeedHelper() && this.getWidgetToFeedHelper().applyWidgetHeaderAndFooterStylesToFeed(this.mode_name), this.callPreRenderHooks(), this.trc.getProperty(this.mode_name, "pending-archive") && TRC.modDebug.logMessageToServer(0, "PENDING_ARCHIVE_MODE_ERROR[" + this.mode_name + "]", {
                            "event-type": "ARCHIVE_MODE_ERROR"
                        }), TRC.setReadMore && this.hasReadMore && this.isReadMoreDevice(this.readMoreDevices) ? TRC.isOptim("defer-read-more") ? setTimeout(function() {
                            TRC.setReadMore(this)
                        }.trcBind(this), 0) : TRC.setReadMore(this) : TRC.EventsAPI.readmore("none", this.response && this.response.trc), this.trc.yieldingEnabled || this.trc.totalModeCounter++;
                        var u = null;
                        try {
                            this.reqId = this.response.trc.req
                        } catch (e) {
                            this.reqId = -1
                        }
                        TRC.performance && TRC.performance.mark("7.0.1." + this._id, u, this.mode_name, this.reqId, "rendering", TRC.PerfEvenType.REQ_LEVEL_START), this.container && this.container.setAttribute("data-placement-name", this.placement), this.isProviderIframe || (TRC.CategoryCard.enableCategoryCard(this) && (this.categoryCard = new TRC.CategoryCard(this)), this.isResponsive && !this.isWCTextLinks ? (this.generateResponsiveOuters(this.element), this.drawResponsiveList(i), this.postHandleRecommendationsResponseData(i, t, h, l, n, u)) : "rbox-only-video" === t.trc.mode ? (this.postHandleRecommendationsResponseData(i, t, h, l, n, u), this.postRender()) : (a && this.container && 0 == this.container.clientWidth && (this.container.style.width = "100%"), TRC.ModuleLoader.load("non-responsive-widget", this.drawListBody, function() {
                            this.generateVisibleParts(), this.drawListBody(i), this.postHandleRecommendationsResponseData(i, t, h, l, n, u)
                        }.trcBind(this))))
                    } else __trcError("TRCRBox.loadScriptCallback: Mode name '" + this.mode_name + "' doesn't exist in configuration file ")
                }
            }, n.prototype.getPropertiesOverride = function(e) {
                if (e.trc && e.trc["video-list"]) return this.isMultiWidget ? this.multiWidgetModeLevelData && this.multiWidgetModeLevelData["properties-override"] : e.trc["video-list"]["properties-override"]
            }, n.prototype.postHandleRecommendationsResponseData = function(e, t, r, i, o, n) {
                if (this.shouldLazyLoadImages && (this.lazyLoadViewportMarginThreshold = this.trc.getProperty(this.mode_name, "thumbs-image-lazy-load-margins", this.propertiesOverride) || this.trc.global["thumbs-image-lazy-load-margins"] || "600px 1500px 600px 1500px", this.isCarousel && "none" !== r && this.createCarouselContainerImgLazyLoadObserver()), TRC.RecommendationReel.shouldInitRecommendationReel(this) && new TRC.RecommendationReel(this), TRC.performance && TRC.performance.mark("7.0.9." + this._id, n, this.mode_name, this.reqId, "rendering", TRC.PerfEvenType.REQ_LEVEL_STOP), TRC.dispatch("trcContentReady", {
                        container: this.container,
                        trcbox: this
                    }), e && e["video-list"] && e["video-list"].vtag && this.trc["mode-before-video-load"](this)) {
                    TRC.performance && TRC.performance.mark("10.0.1." + this._id, null, "videotag", "", "videoTagLoad", TRC.PerfEvenType.START);
                    var s = {
                        placement: this.placement,
                        container: this.container
                    };
                    this.videoTagLoader = new TRC.VideoTagLoader(this.trc, e["video-list"].vtag, s, this, this.response.trc), this.videoTagLoader.loadVideo(), TRC.performance && TRC.performance.mark("10.0.9." + this._id, null, "videotag", "", "videoTagLoad", TRC.PerfEvenType.STOP)
                }
                try {
                    TRC.SpotlightLoader.registerOnMainContainer(this.container, t), TRC.SpotlightLoader.load(this.response)
                } catch (e) {
                    __trcError("Error while trying to load Spotlight")
                }
                this.shouldInitRTBUserAdChoice(i, o) && TRC.ModuleLoader.load("user-adchoice", TRC.userAdChoice, this.initRTBUserAdChoice.trcBind(this)), this.shouldInitTaboolaChoice(i, o) && TRC.ModuleLoader.load("userx", TRC.userX, this.initTaboolaChoice.trcBind(this)), this.shouldInitSliderManager() && (TRC.RBoxUsage.logUsage("Init Escalator"), TRC.ModuleLoader.load("slider", TRC.SliderManager, function() {
                    new TRC.SliderManager(this)
                }.trcBind(this)))
            }, n.prototype.shouldInitTaboolaChoice = function(e, t) {
                var r = this.trc.global["has-userx"] && this.trc.getProperty(this.mode_name, "mode-has-userx", this.propertiesOverride),
                    i = this.options && this.options.trcResponse && !!this.options.trcResponse.nup;
                return TRC.pConsole(this.mode_name, "info", "has user X = " + r, ""), r && e && !t && !TRC.Device.isTouchDevice && !TRC.SpotlightLoader.loadedScript && !i
            }, n.prototype.initTaboolaChoice = function() {
                if (TRC.userX && !TRC.userX.isInitialized) try {
                    TRC.userX.init(this.trc)
                } catch (e) {
                    __trcDebug("failed to init Taboola Choice", e)
                }
                try {
                    TRC.userX.initForMode(this)
                } catch (e) {
                    __trcDebug("failed to init Taboola Choice for mode " + this.mode_name)
                }
            }, n.prototype.shouldInitRTBUserAdChoice = function(e, t) {
                return this.trc.global["show-rtb-ad-choices-icon"] && e && !t && !TRC.SpotlightLoader.loadedScript && this.recommendationList && this.recommendationList.some(function(e) {
                    return e.plink
                })
            }, n.prototype.initRTBUserAdChoice = function() {
                if (!TRC.userAdChoice.isInitialized) try {
                    TRC.userAdChoice.init()
                } catch (e) {
                    __trcDebug("failed to init RTB Choice")
                }
                try {
                    TRC.userAdChoice.initForMode(this)
                } catch (e) {
                    __trcDebug("failed to init RTB Choice for mode " + this.mode_name)
                }
            }, n.prototype.shouldInitSliderManager = function() {
                return (!0 === this.slider || !0 === this.trc.getProperty(this.mode_name, "slider", this.propertiesOverride)) && !1 !== this.trc.slider
            }, n.prototype.callPreRenderHooks = function() {
                var e = this.trc.getProperty(this.mode_name, "mode-start"),
                    t = this.trc["mode-pub-start"];
                try {
                    "function" == typeof t && (t(this, this.container), TRC.CustomModulesManager.runHook("mode-pub-start", null, this, this, this.container)), "function" == typeof e && e(this, this.container)
                } catch (e) {
                    __trcError("Error in pre rendered hooks - " + e.message)
                }
            }, n.prototype.registerProviderClicks = function(e) {
                for (var t, r = 0; r < e.length; r++) {
                    t = e[r], TRC.listen("click::" + this.placement, function() {
                        this.sendEvent("click", {
                            it: t.type,
                            ii: t["item-id"],
                            p: t["is-syndicated"] ? t.publisher : "",
                            li: this.getListId()
                        }, null, !1), this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()["c"])
                    }.trcBind(this));
                    break
                }
            }, n.prototype.changeModeName = function(e, t, r) {
                e && (void 0 !== this.trc.modes[e] ? (this.trc.cssReset && this.switchCSSResetDivIds(this.mode_name, e), this.mode_name = e, this.element.className = "trc_rbox" + " " + this.mode_name) : this.trc.global["send-variant-warning"] && (t ? __trcWarn(r) : __trcDebug(r)))
            }, n.prototype.switchCSSResetDivIds = function(e, r) {
                var i = TRC.modesCache[e] ? TRC.modesCache[e].cssDivsArr : [],
                    o = TRC.modesCache[r] ? TRC.modesCache[r].cssDivsArr : [],
                    n = i.length;
                try {
                    for (var s = 0; s < n; s++) t.getElementById(i[s]).id = o[s]
                } catch (e) {
                    __trcError("TRCRBox.prototype.switchCSSResetDivs : ", e.message)
                }
            }, n.prototype.abortRequest = function() {
                this.timeoutId && (TRC.Timeout.clear(this.timeoutId), this.timeoutId = null), this.request && (this.request.parentNode.removeChild(this.request), this.request = null)
            }, n.prototype.abortRendering = function() {
                var e = "TRCRBox.abortRendering" + "(retry=" + this.retryCount + ")";
                switch (__trcDebug("Called " + e), this.drawList = !0, typeof this.errorHandler) {
                    case "string":
                        return void(null != this.listContainer && this.listContainer.appendChild(document.createTextNode("Error getting recommendations: " + this.errorHandler)));
                    case "function":
                        return void this["errorHandler"]()
                }
            }, n.prototype.getContainer = function() {
                return this.element.parentNode
            }, n.prototype.sendEvent = function(e, t, r, i, o, n) {
                var s = !1,
                    a = this.trc.formattedTRCRequest && this.trc.formattedTRCRequest.tmpl,
                    l = this.response.trc["placement-group"],
                    c = this.response && this.response.trc ? this.response.trc["session-data"] : null,
                    d = {
                        ri: this.response ? this.response.trc["req"] : null,
                        sd: this.trc.getSessionData(c),
                        ui: TRC.pageManager.getUserId(),
                        pi: this.trc.getItemId(),
                        wi: this.response ? this.response.trc["watched-item"] : null,
                        pt: this.getItemType(),
                        vi: this.cachedViewId || TRC.pageManager.getPageData(),
                        li: this.getListId()
                    },
                    h = function() {
                        s || (s = !0, o && o())
                    };
                this.isResponseFromCache() && (d.cache = "1"), this.trc.formattedTRCRequest && this.trc.formattedTRCRequest.ad && (d.ad = __trcJSONify(this.trc.formattedTRCRequest.ad)), this.trc.systemFlags && "normal" !== this.trc.systemFlags.loaderType && (d.lt = this.trc.systemFlags.loaderType), this.response.trc && (this.trc.global["tmp-use-pb-params"] && this.trc.configForPostEvent[e] || "click" === e && this.sendClickPiggyBack) && (this.response.trc["ppb"] && (t.ppb = this.response.trc["ppb"]), this.response.trc["cpb"] && (t.cpb = this.response.trc["cpb"]), this.response.trc["prty"] && (t.prty = this.response.trc["prty"]), this.response.trc["caty"] && (t.caty = this.response.trc["caty"])), "click" == e && "nt" == t.prt && (d = {}), a && (d.tmpl = a), l && (d.pg = l), __trcCopyProps(t, d), !0 !== this.response.trc["video-list"]["content-hub-forced-placement"] || "available" !== e && "explore" !== e && "visible" !== e || (e = "content-hub-" + e), i ? (TRC.pConsole(this.mode_name, "info", "sending event type : " + e, d, "object"), this.trc.log1(e, d, r, h, this.placement)) : this.trc.logTrcEvent(e, d, r, h);
                var p = null;
                TRC.performance && "visible" == e && TRC.performance.mark("11.0." + this._id, p, this.mode_name, this.reqId, "visible", TRC.PerfEvenType.MARK), "number" == typeof n && TRC.Timeout.set(h, n)
            }, n.prototype.load = function(e) {
                if (this.errorHandler = e, this.loadRBoxRequestFailed) return __trcError("loadRBox failed, aborting."), void this.abortRendering();
                var t;
                ({})[this.placement] = this, this.loadScriptCallback(null, this.response), this.detectBids(), this.measureDistanceFromArticle(), this.takePageScreenshot()
            }, n.prototype.detectBids = function() {
                TRC.util.isPercentEnabled(this.trc.global, "enable-bid-detection") && TRC.ModuleLoader.load("bid-detection", TRC.BidDetection, function() {
                    TRC.bidDetector || (TRC.bidDetector = new TRC.BidDetection(this.response.trc), TRC.bidDetector.detect())
                }.trcBind(this))
            }, n.prototype.isDistanceViolationEnabled = function() {
                return !TRC.util.isRboxEncapsulated(TRC) && ((!TRC.util.isTrue(this.trc.paywall) || !this.disableViolationMeasurementOnPaywall) && (!(document.querySelectorAll(this.disableViolationSelectorOnPaywall).length > 0) && !!TRC.util.isPercentEnabled(this.trc.global, "enable-distance-from-article")))
            }, n.prototype.measureDistanceFromArticle = function() {
                this.isDistanceViolationEnabled() && TRC.ModuleLoader.load("distance-from-article", TRC.DistanceFromArticle, function() {
                    TRC.DistanceFromArticle.measureAndReport(this.trc.global["distance-violation-minimal-article-text-percentage"])
                }.bind(this))
            }, n.prototype.takePageScreenshot = function() {
                !TRC.util.isRboxEncapsulated(TRC) && TRC.util.isPercentEnabled(this.trc.global, "screenshot-capture-enabled") && TRC.ModuleLoader.load("screenshot-capture", TRC.screenshotCaputre, function() {
                    TRC.screenshotCaputre.init(document.body, {
                        keepImages: !0
                    })
                }.trcBind(this))
            }, n.prototype.getBoundingClientRect = function(e, t) {
                var r;
                return t ? {
                    left: t.boundingClientRect.left + e.left,
                    right: t.boundingClientRect.right + e.left,
                    top: t.boundingClientRect.top + e.top,
                    bottom: t.boundingClientRect.top + e.bottom,
                    width: t.boundingClientRect.width,
                    height: t.boundingClientRect.height
                } : e
            }, n.prototype.clearChilds = function(e) {
                for (; e.hasChildNodes();) e.removeChild(e.lastChild)
            }, n.prototype.hasDuration = function() {
                for (var e, t = this.trc.getProperty(this.mode_name, "detail-order", this.propertiesOverride).split(","), r = 0; e = t[r]; r++)
                    if ("duration" == e) return !0;
                return !1
            }, n.prototype.cleanStyleDimensions = function(e) {
                var t = null;
                try {
                    __trcDOMWalker(e, function(e) {
                        e.style.cssText && (e.style.width = "", e.style.height = ""), -1 !== (e.className + "").indexOf("video-duration") && (t = e)
                    })
                } catch (e) {}
                return t
            }, n.prototype.createBillboard = function() {
                var e = __trcGetElementsByClass("trc_rbox_outer", "div", this.element)[0];
                if (!e) return null;
                var t = document.createElement("div");
                return this.billboard = t, t.className = "trc_billboard", t.style.width = "auto", e.parentNode.insertBefore(t, e), e.style.clear = "both", t
            }, n.prototype.checkForBlocking = function() {
                var e, t, r, i, o, n, s, a, l = "",
                    c = [],
                    d = [],
                    h = [];
                if (this.trc.global["enable-old-abp-check"]) {
                    for (e = 0; t = this.boxes[e]; e++) {
                        try {
                            (o = t.video_data["is-in-network"] || t.video_data["is-native"]) || (i = t.video_data["is-syndicated"])
                        } catch (e) {}
                        n = o ? d : i ? h : c, t && 1 === t.nodeType && t.childNodes.length ? (s = document.trcGetCurrentStyle(t, "-moz-binding"), r = document.trcGetCurrentStyle(t, "orphans"), "hidden" != (a = document.trcGetCurrentStyle(t, "visibility")) && ("none" == document.trcGetCurrentStyle(t, "display") ? ("4321" == document.trcGetCurrentStyle(t, "orphans") && (l = l || "adblockplus"), n.push(1)) : s && "none" != s && (l = l || "adblockplus", n.push(1)))) : n.push(1)
                    }(c.length || h.length || d.length) && __trcWarn("blocked:" + c.length + "-" + d.length + "-" + h.length + "-" + (l || "unknown"))
                }
            }, n.prototype.setVideoPlayerLoad = function(e, t, r, i, o, n) {
                try {
                    this.pVideoLoader.loadVideo({
                        playerContainer: e,
                        url: t,
                        poster: r,
                        itemIndex: i,
                        itemId: o
                    }, n), TRC.tlf && console.time("in setVideoPlayerLoad")
                } catch (e) {
                    __trcWarn("Error in setVideoPlayerLoad", e)
                }
            }, n.prototype.getThumbnailsDimensions = function(e) {
                var t = e.boundingClientRect,
                    r;
                return {
                    width: Math.ceil(t.width),
                    height: Math.ceil(t.height)
                }
            }, n.prototype.removeCarouselItemImgLazyLoadObserver = function(e) {
                for (var e = e.split(" "), t, r = 0; r < e.length; r++) - 1 !== (t = this.lazyLoadImageObserversIds.indexOf(e[r])) && (TRC.intersections.unobserve(this.lazyLoadImageObserversIds[t]), this.lazyLoadImageObserversIds.splice(t, 1))
            }, n.prototype.createCarouselContainerImgLazyLoadObserver = function() {
                var e = {
                    targetElement: this.container,
                    threshold: 0,
                    rootMargin: this.lazyLoadViewportMarginThreshold,
                    disableCheckOverlay: !0,
                    onEnter: this.createCarouselItemImgLazyLoadObserver.trcBind(this)
                };
                this.lazyLoadImageObserversIds.push(TRC.intersections.observe(e))
            }, n.prototype.loadCarouselItemImage = function(e, t, r, i, o, n, s, a, l, c) {
                var d = this.getThumbnailsDimensions(s),
                    h = a.getAttribute(TRC.intersections.TARGET_ATTRIB);
                this.setImageLoad(e, t, r, i, o, n, !0, d), h && this.removeCarouselItemImgLazyLoadObserver(h)
            }, n.prototype.createCarouselItemImgLazyLoadObserver = function(e, t, r, i) {
                for (var o, n = t.getAttribute(TRC.intersections.TARGET_ATTRIB), s = 0; s < this.boxes.length; s++) o = {
                    rootSelector: "#" + this.outerBox.id,
                    targetElement: this.boxes[s].thumbBlock,
                    threshold: 0,
                    rootMargin: this.lazyLoadViewportMarginThreshold,
                    onEnter: this.loadCarouselItemImage.trcBind(this, this.boxes[s].img, this.boxes[s], this.boxes[s].img_src, 100, this.boxes[s].thumbBlock, this.trc.global["thumb-lazy-load-switch"])
                }, this.lazyLoadImageObserversIds.push(TRC.intersections.observe(o));
                n && this.removeCarouselItemImgLazyLoadObserver(n)
            }, n.prototype.lazyLoadImage = function(e, t, r, i, o, n, s, a, l, c) {
                var d = this.getThumbnailsDimensions(s),
                    h = a.getAttribute(TRC.intersections.TARGET_ATTRIB);
                this.setImageLoad(e, t, r, i, o, n, !0, d), h && this.removeCarouselItemImgLazyLoadObserver(h)
            }, n.prototype.alternateImgBaseUrl = function(e) {
                return TRC.imageCounter++, e.replace("images.taboola.com", this.imagesAltUrls[TRC.imageCounter % this.imagesAltUrls.length])
            }, n.prototype.setImageLoad = function(e, t, r, i, o, n, s, a) {
                var l, c, d, p, u, g, m, b, f;
                if (m = TRC.util.isPercentEnabled(this.trc.global, "cloudinary-encode") ? TRC.imageUtils.cloudinaryEncoding(r) : this.trc.global["tmp-image-utf8-encode"] ? encodeURIComponent(r) : escape(r), !s && this.shouldLazyLoadImages) {
                    if (this.isCarousel) return;
                    return b = {
                        targetElement: o,
                        threshold: 0,
                        rootMargin: this.lazyLoadViewportMarginThreshold,
                        disableCheckOverlay: !0,
                        onEnter: this.lazyLoadImage.trcBind(this, e, t, r, i, o, n)
                    }, void this.lazyLoadImageObserversIds.push(TRC.intersections.observe(b))
                }
                if (g = s ? a : this.getContainerDim(o, t, this.isHiddenItem(t))) p = this.getImageOptimizationUrlByItemRtbProp(t.video_data), r = this.getImageOptimizePrefix(r, p, g) + m;
                else if (i) return void TRC.Timeout.set(this.setImageLoad.trcBind(this, e, t, r, --i, o, n, s, a), 50);
                l = t.video_data["pvideo-url"], c = t.video_data.itemIndex, d = t.video_data["item-id"], this.imagesAltUrls.length > 0 && (r = this.alternateImgBaseUrl(r)), this.trc.getExpoImageTag() && (r += (-1 === r.indexOf("?") ? "?" : "&") + this.trc.getExpoImageTag()), t.img_src = r = TRC.URL.prototype.switchProtocol.call(r, h), e.src = r, f = Date.now(), TRC.performance && TRC.performance.mark("imgLoad" + f + "start", null, "", f, "imgLoadTime", TRC.PerfEvenType.START), TRC.dom.on(e, "load", function(e) {
                    return TRC.performance && TRC.performance.mark("imgLoad" + f + "stop", null, "", f, "imgLoadTime", TRC.PerfEvenType.STOP), !0
                }), this.pVideoLoader && l && (u = {
                    isCreatePVideoOverlay: this.trc.getProperty(this.mode_name, "p-video-overlay", this.propertiesOverride),
                    video_data: t.video_data,
                    container: t,
                    language: this.trc["language"],
                    isSendEvents: this.trc.global["p-video-overlay-send-events"]
                }, o = this.isResponsive ? o : o.firstChild, this.setVideoPlayerLoad(o, l, r, c, d, u))
            }, n.prototype.getImageOptimizationUrlByItemRtbProp = function(e) {
                return this.imageOptimizePrefixFlag = !0, e["is-rtb"] ? this.rtbImageOptimizePrefix = this.rtbImageOptimizePrefix || this.getImageOptimizationUrl(e) : (e["thumbnail-transformations"] || e["is-gift"]) && this.trc.global["image-optimization-url-per-item-is-enabled"] ? this.getImageOptimizationUrl(e) : this.imageOptimizePrefix = this.imageOptimizePrefix || this.getImageOptimizationUrl(e)
            }, n.prototype.setImagePrefixUrl = function(e) {
                var t = "image-url-prefix",
                    r = l,
                    i;
                return e["is-rtb"] ? (t = "rtb-image-url-prefix", r = d) : e["is-gift"] ? (t = "gif-url-prefix", r = c) : e["thumbnail-transformations"] && (i = s + a + "," + e["thumbnail-transformations"] + "/"), TRC.shiftDomain(i || this.trc.getProperty(this.mode_name, t, this.propertiesOverride) || this.trc.global[t] || r)
            }, n.prototype.handleGifPrefixParams = function(e) {
                var t = this.trc.global["gif-fade-effect-in-ms"],
                    r, i;
                return t && "0" !== t && (i = encodeURIComponent(",e_fade:{fade},e_fade:-{fade}".replace(new RegExp("{fade}", "g"), t)), e = e.substr(0, e.length - 1) + i + (e.lastIndexOf("/") === e.length - 1 ? "/" : "")), e
            }, n.prototype.forceGifPrefixUrl = function() {
                return TRC.shiftDomain(this.trc.getProperty(this.mode_name, "gif-url-prefix", this.propertiesOverride) || this.trc.global["gif-url-prefix"] || c)
            }, n.prototype.getImageOptimizationUrl = function(e) {
                var t = this.setImagePrefixUrl(e),
                    r = this.trc.global["images-host"],
                    i = this.trc.getProperty(this.mode_name, "images-radius", this.propertiesOverride),
                    o = e["is-gift"],
                    n;
                return e["pvideo-url"] && e.thumbnail && e.thumbnail.indexOf(".gif") > -1 && (t = this.forceGifPrefixUrl(), o = !0), r && r.length > 2 && ((n = new TRC.URL(t)).host = r, t = n.toString()), i && "0" != i && (t = o ? t.replace(new RegExp("f_gif"), "f_gif%2Cr_" + i) : (t = t.replace(/f_jpg(%2C)?/, "")).replace(/fetch\//, "fetch/f_png%2C" + "r_" + i + "%2C")), o && (t = this.handleGifPrefixParams(t)), t
            }, n.prototype.isHiddenItem = function(e) {
                return "none" === t.trcGetCurrentStyle(e, "display", null)
            }, n.prototype.getContainerDim = function(e, t, r) {
                var i, o, n = 100;
                if (r) {
                    if (this.cachedImageDim) return this.cachedImageDim
                } else if (i = TRC.dom.getElementRect(e), o = Math.ceil(i.right - i.left)) return n = Math.ceil(i.bottom - i.top || this.getAspectHeight(t) || o * this.getThumbAspectRatio(this.trc.modes[this.mode_name], "ratio") || n), this.cachedImageDim = {
                    width: o,
                    height: n
                };
                return null
            }, n.prototype.getAspectHeight = function(e) {
                var t;
                return e.thumbnail_aspect ? (t = TRC.dom.getElementRect(e.thumbnail_aspect)).bottom - t.top : 0
            }, n.prototype.getImageOptimizePrefix = function(e, t, r) {
                TRC.performance && TRC.performance.mark("7.1.1." + this._id);
                var i = this.getImageSizeFactor(),
                    o = this.trc.getProperty(this.mode_name, "image-min-width", this.propertiesOverride) || 110,
                    n = this.trc.getProperty(this.mode_name, "image-max-dimension", this.propertiesOverride) || 1500,
                    s = parseInt(this.customImageSizeRound) || this.trc.getProperty(this.mode_name, "image-size-round", this.propertiesOverride) || 20,
                    a = this.trc.getProperty(this.mode_name, "image-max-ratio", this.propertiesOverride) || 2.5,
                    l = Math.min(Math.ceil(Math.max(r.width * i, o) / s) * s, n),
                    c = Math.max(Math.min(this.getAllowedRatio(r), a), 1 / a),
                    d = Math.ceil(l * c);
                return t = t.replace(new RegExp("{w}", "g"), l.toString()).replace(new RegExp("{h}", "g"), d.toString()), TRC.performance && TRC.performance.mark("7.1.9." + this._id), t
            }, n.prototype.getImageSizeFactor = function() {
                var e = this.trc.getProperty(this.mode_name, "image-size-factor", this.propertiesOverride) || 1.2;
                return this.trc.global["use-dpr-images"] && this.trc.getProperty(this.mode_name, "use-dpr-images", this.propertiesOverride) && TRC.dom.isHighDensity() && (e = this.trc.getProperty(this.mode_name, "image-dpr-factor", this.propertiesOverride) || e), e
            }, n.prototype.getAllowedRatio = function(e) {
                for (var t = this.trc.getSortedCloudinaryRatios(), r = this.trc.getProperty(this.mode_name, "image-allowed-ratio-diff", this.propertiesOverride) || .01, i = 1 * e.height / e.width, o = Math.abs(i - r), n = 0; n < t.length; n++) {
                    var s = t[n];
                    if (!isNaN(s) && s >= o) return s
                }
                return i
            }, n.prototype.isInViewPort = function(e, t) {
                var r = TRC.visibility.getMinViewPortOffsets(this.container);
                return !(r < 0 && Math.abs(r) > t)
            }, n.prototype.createUtmParam = function() {
                return {
                    utm: TRC.utm.join(",") + (this.utm ? "," + this.utm.join(",") : "")
                }
            }, n.prototype.postRender = function(e) {
                if (e) {
                    var t = this.postRenderQueue.popFront();
                    if (null == t) return void __trcDebug("TRCRBox.postRender: finished");
                    try {
                        t.func.call(this), TRC.pConsole(this.mode_name, "debug", "executing postRender functions - see info", t.func.toString())
                    } catch (e) {
                        __trcError("Error in TRCRBox.postRender while executing " + t.name, e)
                    }
                }
                __trcInfo("Finish Rendering " + (this.response.trc ? this.response.trc.placement : "")), TRC.Timeout.set(this.postRender.trcBind(this, !0), 0)
            }, n.prototype.getPopupUrl = function() {
                return this.trc.getProperty(this.mode_name, "popup-custom-url", this.propertiesOverride) || "popup.taboola.com/" + (this.trc["language"] || "en")
            }, n.prototype.check_visibility = function() {
                for (var e = 0; e < this.boxes.length; e++) {
                    var t = this.boxes[e];
                    this.itemMaxHeight && (t.style.height = this.itemMaxHeight + "px")
                }
            }, n.prototype.findElement = function(e, t, r, i) {
                void 0 === t && (t = document), void 0 === r && (r = "*");
                for (var o = t.getElementsByTagName(r), n = 0; n < o.length; n++)
                    if (e(o[n])) return o[n];
                return i
            }, n.prototype.findElements = function(e, t, r) {
                for (var i = [], o = 0; e && o < e.length; o++) {
                    var n = e[o],
                        s = this.findElement(function(e) {
                            return e.className.search(n) >= 0
                        }, t, "span");
                    s && (r && (s = s.cloneNode(!0)), i.push(s))
                }
                return i
            }, n.prototype.getLinkTarget = function(e, t, r) {
                var i;
                return (i = t && t[e] || r[e]) || (i = "_blank"), i
            }, n.prototype.addPiggyBackParams = function(e) {
                if (e) return e + "&ppb=" + this.response.trc["ppb"] + "&cpb=" + this.response.trc["cpb"]
            }, n.prototype.detectItemFromSameHost = function(e, t) {
                if (e === t || this.trc["detect-item-from-same-host"](e, t)) return !0;
                for (var r = e.split(".").reverse().join(""), i = t.split(".").reverse().join(""), o = 6, n = !0, s = 0; s < o; s++)
                    if (r[s] !== i[s]) {
                        n = !1;
                        break
                    }
                return n
            }, n.prototype.createVideoLinkRel = function(e, t, i) {
                var o;
                return (this.trc.global["allow-nofollow-for-exchange"] || !e["is-in-network"] || e["is-in-network"] && !t) && (o = "nofollow", this.trc.global["disable-noopener-for-links"] || "_blank" !== i || (o += " noopener")), this.trc.global["disable-sponsored-for-links"] || e["is-in-network"] || e["is-dc"] || (o += " " + r), o
            }, n.prototype.createVideoLink = function(e, t) {
                var r = document.createElement("a"),
                    i = this.ntHandlerEnabled && e["is-in-network"],
                    o, n, s = this.sendClickPiggyBack ? this.addPiggyBackParams(e.logger_url) : e.logger_url,
                    a = !0 !== this.trc.global["disable-stop-propagation"],
                    l = TRC.pageManager.getTopMostWindow().location.hostname,
                    c = TRC.URL(e["url"]).host,
                    d, h;
                !0 === this.response.trc["video-list"]["content-hub-forced-placement"] && (s = s.replace("click", "content-hub-click"));
                var p = !1;
                return h = this.detectItemFromSameHost(l, c), e["is-in-network"] && TRC.hasFeedView && this.parentFeed && this.parentFeed.enableAEClicks && (h ? (e.scParams = e.scParams || {}, e.original_url = e.original_url || e.url, p = !0) : (this.feedViewExchangeFallbackEventData = {
                    eventType: "fallback",
                    original_url: l,
                    target_url: c
                }, this.shouldSendFeedViewExchangeFallbackEvent = !0)), i && (e.hasNtClckHnadler = !0), TRC.isOptim("title-decode") ? r.title = t : r.title = TRC.util.getHtmlDecodeText(t), e.link_target = this.link_target, !e.isSyndicated || i || p ? (r.href = e.url, "blank" != this.link_target ? TRC.util.isAmp(TRC) && this.trc.global["amp_target"] ? r.target = this.trc.global["amp_target"] : r.target = "_parent" : (r.target = "_blank", r.onmousedown = function(e) {
                    ((e = e || event).target || e.srcElement).target = "_blank"
                }), e["is-in-network"] && (e.scParams.prt = "nt"), this.organicRedirParam && (s = s.replace("&url=", "&" + this.organicRedirParam + "=")), this.useRedirect && this.useRedirectOnLink && (r.href = s), r.onmousedown = function(e) {
                    var t = this.attachHeatMapDataToLink(s, e);
                    r.href = t
                }.trcBind(this), r.onclick = this.videoLinkClickHandler.trcBind(this, e, r, s)) : (r.href = e.url, o = this.getLinkTarget(this.getProviderType(e), this.linkTargetConf, this.defaultLinkTarget), (d = this.createVideoLinkRel(e, h, o)) && (r.rel = d), r.logger_url = s.replace("&url=", "&redir=") + (e["is-in-network"] ? "&prt=nt" : "") + (e["is-native"] ? "&prt=nav" : ""), r.target = o, 1 == this.trc.global["enable-ie-split-click-event"] && TRC.Browser.ie && (n = r.logger_url.length > 2048), !0 === this.trc.global["touchstart-enabled"] && TRC.dom.on(r, "touchstart", function(e) {
                    var t = this.attachHeatMapDataToLink(r.logger_url, e);
                    r.href = t, r.isTouchPropagation = 1, a && e.stopPropagation()
                }.trcBind(this)), r.onmousedown = function(e) {
                    if (((e = e || event).target || e.srcElement).target = o, r.isTouchPropagation) return !0;
                    if (!n)
                        if (this.shiftRedirOnclick) r.href = r.logger_url;
                        else {
                            var t = this.attachHeatMapDataToLink(r.logger_url, e);
                            r.href = t
                        }
                }.trcBind(this), r.onclick = function(t) {
                    try {
                        if (TRC.clickFraudDetect.isInitialized && e["is-syndicated"]) {
                            var i = r.search.match(/[^&??=]+/g),
                                o = i.indexOf("ri"),
                                s = "";
                            if (o > -1 && (s += i[o + 1]), (o = i.indexOf("ii")) > -1) {
                                var a = i[o + 1].match(/^~~V1~~(-?[\d]{10,})/);
                                s += a ? "_" + a[1] : ""
                            }
                            var l = r.href.indexOf("trc.taboola.com") >= 0;
                            TRC.clickFraudDetect.fraudScriptCallback(this.placement, TRC.pageManager.getUserId(), s, this.trc.referrer, e.itemIndex, l)
                        }
                    } catch (e) {
                        __trcError("Publisher 'onclick' Fraud handler had an error", e)
                    }
                    if (this.shouldSendFeedViewExchangeFallbackEvent && this.trc.sendAbTestEvent("feedView_ae", this.feedViewExchangeFallbackEventData), this.trc.sendExternalTracking(this.getItemExternalTrackingURLsList(e)["c"]), r.isTouchPropagation) return !0;
                    if (n) this.sendEvent("click", {
                        ii: e["item-id"],
                        it: e.type
                    }, null, !1);
                    else if (this.shiftRedirOnclick) {
                        var c = this.attachHeatMapDataToLink(r.logger_url, t);
                        r.href = c
                    }
                    return !0
                }.trcBind(this)), this.trc.global["events-api-click-enabled"] && TRC.dom.on(r, "click", function(t) {
                    var i = r.target;
                    e.linkTarget = i, "_blank" === i ? setTimeout(function() {
                        TRC.EventsAPI.dispatchClick(e, this.response.trc)
                    }.trcBind(this), 0) : TRC.EventsAPI.dispatchClick(e, this.response.trc)
                }.trcBind(this)), r
            }, n.prototype.attachHeatMapDataToLink = function(e, t) {
                if (!TRC.Heatmap.isEnabled(this.trc) || !this.listContainer.heatmap) return e;
                try {
                    var r = this.listContainer.heatmap,
                        i = TRC.Heatmap.collectClickHeatmapCardData(t),
                        o;
                    return i["item-d"] = r.collectClickHeatmapItemData(t), e + "&" + "d=" + JSON.stringify(i)
                } catch (t) {
                    return __trcError("Error in trcrbox-ui.attachHeatMapDataToLink - " + t, t), e
                }
            }, n.prototype.videoLinkClickHandler = (p = 2e3, u = function(e, t, r, i) {
                return r.target = "_blank", i ? !!TRC.Browser["firefoxUpto"](8) || (e.clickLink(r.href, r.target), !1) : (r.href = t.url, e.sendEvent("click", {
                    ii: t["item-id"],
                    it: t.type
                }, null, !1), !0)
            }, function(t, r, i, o) {
                o = o || event;
                var n = !(!TRC.feedViewModuleLoaded || !TRC.FeedView.openIfFeedView(this, t, r)),
                    s = t.link_target,
                    a = this.useRedirect;
                switch ("embed" !== s && this.trc.sendExternalTracking(this.getItemExternalTrackingURLsList(t)["c"]), s) {
                    case "feedView":
                        break;
                    case "blank":
                        if ((o.target || o.srcElement).target = "_blank", a) {
                            var l = this.attachHeatMapDataToLink(i, o);
                            r.href = l
                        }
                        n = u(this, t, r, a);
                        break;
                    default:
                        if (a && "local" != t.link_target && "function" != typeof this.onclick && "function" != typeof this.trc.onclick) {
                            if (this.shiftRedirOnclick) {
                                var l = this.attachHeatMapDataToLink(i, o);
                                r.href = l
                            }
                            n = !0
                        } else this.sendEvent("click", t.hasNtClckHnadler ? t.scParams : {
                            ii: t["item-id"],
                            it: t.type
                        }, null, !1, this.publisherClickHandler.trcBind(this, t, this.clickLink.trcBind(this, t.url)), p)
                }
                return t.url != t.original_url && __trcDebug("url:" + t.original_url + ", changed to:" + t.url + ", on page:" + e.location.href), n || (o.cancelBubble = !0, o.stopPropagation && o.stopPropagation()), n
            }), n.prototype.clickLink = function(t, r) {
                TRC.Browser["firefoxUpto"](8) && (e.location.href = t);
                var i = document.createElement("a");
                if (i.href = t, i.target = r || "_parent", i.style.visibility = "hidden", document.body.appendChild(i), i.click) i.click();
                else {
                    var o = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        button: 0
                    });
                    i.dispatchEvent(o)
                }
            }, n.prototype.publisherClickHandler = function(e, t) {
                var r = __trcCopyProps(e, {});
                delete r["item-id"], delete r.link;
                try {
                    if ("function" == typeof this.onclick && !this.onclick.call(this.pubOpts, r)) return !1;
                    if ("function" == typeof this.trc.onclick && !this.trc.onclick.call(this.pubOpts, r)) return !1
                } catch (e) {
                    __trcError("Publisher 'onclick' handler had an error", e)
                }
                return t()
            }, n.prototype.add_span = function(e, t, r) {
                var i = document.createElement("span");
                return null != e && (i.className = e), null != t && ("object" == typeof t ? i.appendChild(t) : TRC.dom.setContentToElement(i, t)), void 0 !== r && r.appendChild(i), i
            }, n.prototype.genBidiLabel = function(e, t, r) {
                var i, o, n = TRC.util.textIsRTL(t),
                    s = o = t,
                    a = "video-label " + r;
                if (this.shouldUseSmartEllipsis()) {
                    var l = this.trc.getProperty(this.mode_name, "tokenize-strategy") || "word",
                        c = TRC.Ellipsis._tokenizeStrategies[l],
                        d;
                    s = TRC.Ellipsis._tokenizeSingle(o.innerHTML || o, c), a += " trc-smart-ellipsis", "ltr" === this.trc.direction && (n ? a += " tbl-rtl-label" : "title" !== r && (a += " tbl-ltr-label"))
                }
                return i = this.add_span(a, s, e), e[r] = i, i.isRTL = n, i.tokenizeStrategy = l, i
            }, n.prototype.handlePublishedDate = function(e, t) {
                var r = "published-date",
                    i, o = this.trc.getProperty(this.mode_name, "format-x-days-ago", this.propertiesOverride) ? TRC.DateUtils.dateFormatTimeAgo(e[r], this.trc.language, this) : this.formatData(r, e[r]),
                    n;
                if ("with-branding" === this.trc.getProperty(this.mode_name, "published-date-position", this.propertiesOverride)) {
                    var s = t.querySelector(".branding"),
                        a;
                    s && TRC.dom.addClass(s, "inline-branding"), o = " " + (this.trc.getProperty(this.mode_name, "branding-separator", this.propertiesOverride) || "|") + " " + o
                }
                this.add_span("video-label video-published-date", o, t)
            }, n.prototype.buildLabelBox = function(e, t, r) {
                var i, o, n, s = -1 !== r.indexOf("title"),
                    a = this.trc.getProperty(this.mode_name, "enable-title-icon-on-sc", this.propertiesOverride),
                    l = t.isSyndicated && s && a,
                    c;
                for ((!t.isSyndicated && s || l) && this.createTitleAndIconContainer(e), i = 0; i < r.length; i++) switch (o = r[i]) {
                    case "title":
                        this.genBidiLabel(e, t.title, "video-title");
                        break;
                    case "uploader":
                        void 0 !== t.uploader && this.add_span("video-label video-uploader", this.formatData("uploader", t.uploader), e);
                        break;
                    case "category":
                        var d = "";
                        this.isStories && !t.isSyndicated ? d = this.parentStories.storiesPlacements[this.options.placement].topicData.title : void 0 !== t.category && (d = t.category.split(";")[0].split("//")[0]), this.add_span("video-label video-category", this.formatData("category", decodeURIComponent(d)), e);
                        break;
                    case "views":
                        this.add_span("video-label video-views", this.formatData("views", t["views"]), e);
                        break;
                    case "rating":
                        this.add_span("video-label video-rating", this.formatData("rating", t["rating"]), e);
                        break;
                    case "description":
                        var h;
                        this.genBidiLabel(e, t.description, "video-description").title = '"Description: ' + this.removeHtmlTags(t.description) + '"';
                        break;
                    case "duration":
                        void 0 !== t.duration && "" != t.duration && this.add_span("video-label video-duration-detail", this.formatData("duration", t.duration), e);
                        break;
                    case "branding":
                        n = t.isSyndicated ? this.shouldHandleScBrandingWithSponsoredLink() ? this.createScBrandingWithSponsoredLink(t, e) : this.createScBranding(t, e) : this.createOrganicBranding(t, e), e["branding"] = n;
                        break;
                    case "url":
                        break;
                    case "published-date":
                        this.handlePublishedDate(t, e);
                        break;
                    default:
                        void 0 !== t[o] && t[o] && this.add_span("video-label video-" + o, this.formatData(o, t[o]), e)
                }
            }, n.prototype.shouldHandleScBrandingWithSponsoredLink = function() {
                return "after_branding" === this.getDisclosurePosition()
            }, n.prototype.getDisclosurePosition = function() {
                return this.disclosurePosition || (this.disclosurePosition = this.trc.getProperty(this.mode_name, "disclosure-position", this.propertiesOverride)), this.disclosurePosition
            }, n.prototype.getDisclosureAlignment = function() {
                return this.disclosureAlignment || (this.disclosureAlignment = this.trc.getProperty(this.mode_name, "disclosure-alignment", this.propertiesOverride)), this.disclosureAlignment
            }, n.prototype.createScBrandingWithSponsoredLink = function(e, t) {
                var r, i, o;
                if (r = this.trc.getProperty(this.mode_name, "branding-separator", this.propertiesOverride), this.branding = this.add_span("branding composite-branding", null, t), this.add_span("branding-inner", this.formatData("syndicator", e["branding-text"]), this.branding), i = this.trc.getProperty(this.mode_name, "disclosure-link-text-sponsored", this.propertiesOverride)) return "right" !== (o = this.getDisclosureAlignment()) && this.add_span("branding-separator", r, this.branding), this.renderDisclosureLinkWithBranding(this.branding, i, o), this.branding
            }, n.prototype.createScBranding = function(e, t) {
                return e["branding-text"] ? this.add_span("branding", this.formatData("syndicator", e["branding-text"]), t) : e["branding-url"] ? this.add_span("branding", "<img src='" + e["branding-url"] + "'>", t) : void 0
            }, n.prototype.createOrganicBranding = function(e, t) {
                return this.add_span("branding", this.formatData("syndicator", this.getPublisherBrandingName()), t)
            }, n.prototype.createTitleAndIconContainer = function(e) {
                var t, r, i, o = this.trc.getProperty(this.mode_name, "title-icon", this.propertiesOverride) || "NONE";
                "CUSTOM" === o ? i = this.trc.getProperty(this.mode_name, "title-icon-url", this.propertiesOverride) : "PUBLISHER_LOGO" === o && (i = this.trc.getPublisherVersionPropertyWithFallbackToNetwork("publisher-logo")), i && (t = document.createElement("span"), r = document.createElement("img"), t.className = "video-icon-container", r.className = "video-icon-img trc_img", r.src = TRC.URL.prototype.switchProtocol.call(i, h), e.className += " label-box-with-title-icon", t.appendChild(r), e.appendChild(t))
            }, n.prototype.isUsingImageOptimizationService = function(e) {
                var t = this.trc.global["images-host"] ? this.trc.global["images-host"] : "images.taboola.com";
                return e.indexOf(t) > -1
            }, n.prototype.isTaboolaCDNImage = function(e) {
                return e.match(/cdn.taboola.com\/.*thumbnails\S/)
            }, n.prototype.logImageError = function(e, t, r, i) {
                var o = i ? i + " " : "",
                    n = this.trc.global["rbox-image-error-reporting-pct"] || .1;
                __trcWarn("Failed to load " + o + "thumbnail " + e + " for item=" + t + ", loading " + r + " thumbnail instead", null, n)
            }, n.prototype.getFallbackImageForTaboolaCDNImage = function(e, t, r) {
                var i = this.isUsingImageOptimizationService(e),
                    o = e.search(/\Shttp\S/),
                    n = unescape(e.slice(o + 1)),
                    s = TRC.URL.prototype.switchProtocol.call(i ? unescape(n) : n, r);
                return this.logImageError(e, t, s, "taboola CDN"), s
            }, n.prototype.getFallbackImageForNonTaboolaCDNImage = function(e, t, r) {
                var i = e.src,
                    o = this.isUsingImageOptimizationService(i),
                    n = i.search(/\Shttp\S/),
                    s = o && unescape(e.src.slice(n + 1)),
                    a = "https:" !== r || s && 0 === s.indexOf(r) || this.trc.global["always-allow-orig-image-fallback"];
                return n > 5 && o && a ? this.getOrigImageFromOptimizationUrl(e.src, s, t) : this.getDefaultThumbnail(e, t, r)
            }, n.prototype.getOrigImageFromOptimizationUrl = function(e, t, r) {
                return this.logImageError(e, r, t), t
            }, n.prototype.getDefaultThumbnail = function(e, t, r) {
                var i = this.trc.getProperty(this.mode_name, "default-thumbnail", this.propertiesOverride),
                    o = TRC.URL.prototype.switchProtocol.call("undefined" != i ? i : "", r);
                return e.onerror = null, this.logImageError(e.src, t, "default"), o
            }, n.prototype.getRuleAspectRatio = function(e, t) {
                return !(!e["virtualThumbWidth"] || !e["virtualThumbHeight"] || isNaN(e["virtualThumbWidth"]) || isNaN(e["virtualThumbHeight"])) && ("ratio" == t ? e["virtualThumbHeight"] / e["virtualThumbWidth"] : e["virtualThumbHeight"] / e["virtualThumbWidth"] * 100)
            }, n.prototype.getThumbAspectRatio = function(e, t) {
                try {
                    var r = e["thumbnail-height"] / e["thumbnail-width"];
                    return "ratio" == t ? r : Math.round(100 * r)
                } catch (e) {
                    return __trcWarn("getThumbAspectRatio", e.message), null
                }
            }, n.prototype.getThumbnailURL = function(e, t, r) {
                if (void 0 === e["thumb-size"]) return e["thumbnail"];
                for (var i = [{
                        w: e["thumb-size"].split("x")[0],
                        h: e["thumb-size"].split("x")[1],
                        u: e["thumbnail"]
                    }], o = 1; void 0 !== e["thumb-size-" + o]; o++) i.push({
                    w: e["thumb-size-" + o].split("x")[0],
                    h: e["thumb-size-" + o].split("x")[1],
                    u: e["thumbnail-" + o]
                });
                i = i.sort(function(e, t) {
                    return e.w * e.h - t.w * t.h
                });
                for (var n = 0; n < i.length; n++)
                    if (t * r <= i[n].w * i[n].h) return i[n].u;
                return i.pop().u
            }, n.prototype.addTaboolaLogo = function() {
                this.renderAdchoicesLink(this.getAdchoiceConfig(), this.itemsTypes, this.adcItemTypes), this.renderAttributionLink(), this.renderDisclosureLink(), this.addClearingDiv(), this.addWidgetContentType(), TRC.ccpa.renderOnWidgetFooter(this)
            }, n.prototype.renderAttributionLink = function() {
                var e = this.add_span(null, this.trc.getProperty(this.mode_name, "attribution-text", this.propertiesOverride)),
                    t = this.trc.getProperty(this.mode_name, "attribution-position", this.propertiesOverride),
                    r = this.trc["attribution"] && "none" != t,
                    i = this.trc.getProperty(this.mode_name, "hide-attribution-when-no-place", this.propertiesOverride),
                    o = this.trc["attribution-disclosure-direction"];
                r && ("top" === t ? this.isContainerNarrowForAttribution() ? i || this.generateLinksBox(this.getWidgetFooter(), e, o, "attribution", null, "bottom") : this.generateLinksBox(this.header.ext, e, o, "attribution", null, "top") : this.generateLinksBox(this.getWidgetFooter(), e, o, "attribution", null, "bottom"))
            }, n.prototype.isContainerNarrowForAttribution = function() {
                if (TRC.isOptim("attribution") && this.isFeedCard) return !1;
                var e = this.trc.getProperty(this.mode_name, "min-width-for-attribution", this.propertiesOverride),
                    t = this.container.clientWidth || this.container.offsetWidth;
                return t && e > t
            }, n.prototype.adcHoverHandler = function(e, t) {
                var r = __trcGetElementsByClass("trc_adc_b_logo", null, e)[0];
                r.style.display = t ? "inline-block" : "none"
            }, n.prototype.isAdchoicesEnabled = function(e, t, r) {
                return !!e && ("off" != e.status && !!this.isAdchoiceItemTypes(t, r))
            }, n.prototype.isAdchoiceItemTypes = function(e, t) {
                for (var r in e)
                    if (t[r]) return !0;
                return !1
            }, n.prototype.getAdchoiceConfig = function() {
                var e = this.trc.getProperty(this.mode_name, "adchoice-position", this.propertiesOverride);
                return {
                    status: this.trc.global["has-adchoice"] && "none" !== e ? "on" : "off",
                    position: e,
                    url: this.trc.getProperty(this.mode_name, "adchoice-target-url", this.propertiesOverride) || this.trc.global["adchoice-url"],
                    enableBig: this.trc.getProperty(this.mode_name, "adchoice-large", this.propertiesOverride)
                }
            }, n.prototype.getAdchoicesPosition = function(e, t) {
                var r = "top";
                return "auto" === e ? (r = "none" === t ? r : t, this.isContainerNarrowForAttribution() && (r = "bottom")) : r = e, r
            }, n.prototype.renderAdchoicesLink = function(e, t, r) {
                if (this.hasAdChoicesLogo = this.isAdchoicesEnabled(e, t, r), this.hasAdChoicesLogo) {
                    var o = null,
                        s = this.getAdchoicesPosition(e.position, this.trc.getProperty(this.mode_name, "attribution-position", this.propertiesOverride)),
                        a, l = e.url || null,
                        c = this.trc["attribution-disclosure-direction"];
                    (o = this.add_span("trc_adc_wrapper", null)).appendChild(this.add_span("trc_adc_s_logo", null)), e.enableBig && o.appendChild(this.add_span("trc_adc_b_logo", null)), o.appendChild(i()), a = "top" === s ? this.generateLinksBox(this.header.ext, o, c, "adc", null, "top", l) : this.generateLinksBox(this.getWidgetFooter(), o, c, "adc", null, s, l), e.enableBig && (a.onmouseover = function() {
                        n.prototype.adcHoverHandler(this, !0)
                    }, a.onmouseout = function() {
                        n.prototype.adcHoverHandler(this, !1)
                    })
                }
            }, n.prototype.generateLinksBox = function(e, t, r, o, n, s, a, l) {
                var c, d = document.createElement("div"),
                    h = ["trc_desktop_" + o + "_link", "trc_mobile_" + o + "_link"],
                    p, u = this.getPopupUrl(),
                    g = TRC.PROTOCOL + "//" + TRC.shiftDomain(u) + "/?" + this.getAttributionLinkParams(),
                    m = a || g,
                    b = "sponsored",
                    f = function(e) {
                        return TRC.aboutUs.open(e) || !1
                    };
                if (e) {
                    for (c = 0; c < h.length; c++) {
                        if ((p = document.createElement("a")).className = h[c] + " trc_attribution_position_" + (s || "bottom"), p.rel = "nofollow", this.trc.global["disable-sponsored-for-links"] || (p.rel += " " + b), this.trc.global["disable-noopener-for-links"] || (p.rel += " noopener"), p.appendChild(t.cloneNode(!0)), p.href = m, p.target = "_blank", this.hasAdChoicesLogo) {
                            var v = this.add_span("trc_logos_v_align", null);
                            v.appendChild(i()), p.appendChild(v)
                        }
                        c || (p.onclick = f), d.appendChild(p)
                    }
                    return "rtl" === r && (d.style.cssFloat = d.style.styleFloat = "left"), d.className = "logoDiv link-" + o + " " + (n ? " attribution-disclosure-link-" + n : "") + (l ? " align-" + o + "-" + l : ""), e.appendChild(d), d
                }
            }, n.prototype.getAttributionLinkParams = function() {
                var e = ["template=colorbox", "utm_source=" + this.publisher, "utm_medium=referral", "utm_content=" + this.mode_name + ":" + this.placement + ":" + (this.trc["test-variant"] || "")];
                return !this.trc.global["show-rtb-ad-choices-icon"] && this.privacyId && e.push("plink=" + this.privacyId), e.join("&")
            }, n.prototype.addWidgetContentType = function() {
                var e = this.getWidgetContentType(this.itemsTypes);
                this.element.className += " trc-content-" + e + " "
            }, n.prototype.getWidgetContentType = function(e) {
                var t = e["is-syndicated"] || e["is-in-network"] || e["is-native"];
                return t && e["is-organic"] ? "hybrid" : t ? "sponsored" : "organic"
            }, n.prototype.getItemsTypesList = function(e) {
                for (var t = {}, r = 0, i; i = e[r]; r++) i["is-syndicated"] ? t["is-syndicated"] = !0 : i["is-in-network"] ? t["is-in-network"] = !0 : i["is-native"] ? t["is-native"] = !0 : t["is-organic"] = !0, i["is-adc"] && (t["is-adc"] = !0);
                return t
            }, n.prototype.getPrivacyId = function(e) {
                for (var t = 0, r; r = e[t]; t++)
                    if (r["plink"]) return r["plink"];
                return null
            }, n.prototype.getWidgetFooter = function() {
                var e = this.getWidgetToFeedHelper();
                return this.footer || (this.footer = document.createElement("div"), this.footer.className = "trc-widget-footer", e && !e.getFooter() ? e.addFooterToFeed(this.footer) : this.element.appendChild(this.footer)), this.footer
            }, n.prototype.renderDisclosureLink = function() {
                var e = this.trc.getProperty(this.mode_name, "min-width-for-disclosure", this.propertiesOverride),
                    t = this.trc.getProperty(this.mode_name, "hide-disclosure-when-no-place", this.propertiesOverride),
                    r = this.add_span(null, this.trc.getProperty(this.mode_name, "disclosure-link-text-sponsored", this.propertiesOverride)),
                    i = this.add_span(null, this.trc.getProperty(this.mode_name, "disclosure-link-text-hybrid", this.propertiesOverride)),
                    o, n = this.trc["attribution-disclosure-direction"];
                "none" !== this.getDisclosurePosition() && "after_branding" !== this.getDisclosurePosition() && (o = this.isFeedCard && TRC.isOptim("disclosure") ? 0 : this.container.clientWidth || this.container.offsetWidth, "bottom" !== this.getDisclosurePosition() && this.isHeaderExtContainerAvailable() && (!o || o >= e) ? (this.generateLinksBox(this.header.ext, r, n, "disclosure", "sponsored", "top"), this.generateLinksBox(this.header.ext, i, n, "disclosure", "hybrid", "top")) : t || (this.generateLinksBox(this.getWidgetFooter(), r, n, "disclosure", "sponsored", "bottom"), this.generateLinksBox(this.getWidgetFooter(), i, n, "disclosure", "hybrid", "bottom")))
            }, n.prototype.renderDisclosureLinkWithBranding = function(e, t) {
                var r = this.add_span(null, t),
                    i = "right" === this.getDisclosureAlignment() ? this.trc.direction : null;
                this.generateLinksBox(e, r, i, "disclosure", "sponsored", this.getDisclosurePosition(), null, this.getDisclosureAlignment())
            }, n.prototype.isHeaderExtContainerAvailable = function() {
                return this.header.ext && "No Header" != this.trc.getProperty(this.mode_name, "header", this.propertiesOverride)
            }, n.prototype.addClearingDiv = function() {
                var e = document.createElement("div");
                e.className = "trc_clearer", this.element.appendChild(e)
            }, n.prototype.genDuration = function(e) {
                var t = this.formatDuration(e),
                    r = document.createElement("dt");
                r.style.position = "absolute", r.style.overflow = "hidden", r.style.height = "auto", r.style.width = "auto", r.style.zIndex = 48, r.style.right = 0;
                var i = document.createElement("div");
                return i.style.zIndex = 50, i.style.paddingLeft = "4px", i.style.paddingRight = "4px", i.innerText = t, r.appendChild(i), r
            }, n.prototype.fixBoxOverflow = function(e, t, r, i, o, n) {
                return TRC.util.isPercentEnabled(TRCImpl.global, "enable-new-ellipsis-module") ? TRC.LineClamp.fixBoxOverflow(e, t, r, i, o, n, this.useNativeLineClamp, this.shouldUseSmartEllipsis()) : this.legacyFixBoxOverflow(e, t, r, i, o, n)
            }, n.prototype.legacyFixBoxOverflow = function(e, t, r, i, o, n) {
                var s = !1;
                if (!(null == e || this.useNativeLineClamp && (s = this.setupBoxLineClamp(e)))) {
                    if (this.shouldUseSmartEllipsis() && !s) return __trcDebug("Skipping fixBoxOverflow due to feature flag.");
                    if (TRC.ellipsisPerf && console.timeStamp("Taboola old ellipsis"), !(e.clientHeight <= 0 || e.clientWidth <= 0)) {
                        var a = !1;
                        e.parentNode.font = this.getFontSize(e);
                        var l = e.innerHTML;
                        e.innerText = "";
                        var c = this.add_span(null, "H", e),
                            d = Math.max(c.offsetHeight, c.clientHeight),
                            h = Math.max(0, e.scrollHeight - e.clientHeight);
                        for (e.removeChild(c), TRC.dom.setContentToElement(e, l), this.addInlineElementsForMeasure(e.inlineDetailsElements, e, !0), e.inlineDetailsElementsHTML = e.innerHTML.replace(l, ""), t = t.replace(/^\s+|\s+$/g, ""); e.clientHeight + h + d / 2 < e.scrollHeight && t.length;) a = !0, t = this.truncateOverflowingText(e, t, r), e.inlineDetailsElementsHTML && (e.innerHTML += e.inlineDetailsElementsHTML);
                        this.hideClonedElementsAfterMeasure(o, n), TRC.Browser.ie && !a && (e.style.height = "auto")
                    }
                }
            }, n.prototype.setupBoxLineClamp = function(e) {
                TRC.dom.removeClass(e, "trc_ellipsis");
                var t = parseInt(document.trcGetCurrentStyle(e, "line-height"), 10),
                    r = parseInt(document.trcGetCurrentStyle(e, "height"), 10),
                    i = t && r ? Math.round(r / t).toString() : null;
                return !(!i || e.isRTL || "rtl" == document.trcGetCurrentStyle(e, "direction")) && (TRC.dom.addClass(e, "trc_ellipsis"), TRC.css.utils.setStyleProperty(e, "-webkit-line-clamp", i, !1), e.parentNode.font = this.getFontSize(e), !0)
            }, n.prototype.truncateOverflowingText = function(e, t, r) {
                t = r && t.search(/\s/) >= 0 ? t.replace(/\s+\S+$/, "") : t.substr(0, t.length - 1);
                var i = e.getElementsByTagName("bde");
                if (e.inlineDetailsElementsHTML && i.length) {
                    var n = e.innerHTML.replace(e.inlineDetailsElementsHTML, "");
                    TRC.dom.setContentToElement(e, n)
                }
                e.getElementsByTagName("span").length > 0 && e.removeChild(e.getElementsByTagName("span")[0]);
                var s = i.length > 0 ? i[0] : e;
                return TRC.dom.setContentToElement(s, t), this.add_span(null, o(), e), t
            }, n.prototype.addInlineElementsForMeasure = function(e, t, r) {
                for (var i, o, n, s = 0; e && s < e.length; s++) i = e[s], !(o = this.findElement(function(e) {
                    return e.className.search(i) >= 0 && e.parentNode === t
                }, t)) && i && ((n = document.createElement("span")).className = "trc_inline_detail_spacer", n.innerHTML = " ", t.appendChild(n), t.appendChild(r ? i.cloneNode(!0) : i))
            }, n.prototype.hideClonedElementsAfterMeasure = function(e, t) {
                for (var r, i, o = 0; e && o < e.length; o++) r = e[o], (i = this.findElement(function(e) {
                    return e.className.search(r) >= 0 && e.parentNode === t
                }, t, "span")) && (i.style.display = "none")
            }, n.prototype.removeHtmlTags = function(e) {
                return e.replace(new RegExp("<[^>]+>", "g"), "")
            }, n.prototype.formatData = function(e, t) {
                var r = this.trc.getProperty(this.mode_name, "format-" + e, this.propertiesOverride);
                return "function" == typeof(r = r || "%s") ? r.call(this, t) : ((e.search("duration") >= 0 || e.search("Duration") >= 0) && (t = this.formatDuration(t)), void 0 === t && (t = ""), r.replace(new RegExp("%\\w"), '<dt style="display:inline">' + t + "</dt>"))
            }, n.prototype.formatDuration = function(e) {
                var t = parseInt(e / 3600);
                t >= 1 ? e %= 3600 : t = 0;
                var r = parseInt(e / 60),
                    i = parseInt(e % 60);
                return "number" != typeof t || "number" != typeof r || "number" != typeof i || isNaN(t) || isNaN(r) || isNaN(i) || e < 1 ? "" : (t >= 1 ? t + ":" : "") + (r < 10 ? "0" : "") + r + ":" + (i < 10 ? "0" : "") + i
            }, n.prototype.formatNumber = function(e) {
                return void 0 === e ? "" : this.trc.runHook(this, this.mode_name, "format-number", this.propertiesOverride, !1, e)
            }, n.prototype.dateFormatISO = TRC.DateUtils.dateFormatISO, n.prototype.dateFormatAmerican = TRC.DateUtils.dateFormatAmerican, n.prototype.dateFormatEuropean = TRC.DateUtils.dateFormatEuropean, n.prototype.getFontSize = function(e) {
                for (var t = 0, r = !1, i = document.trcGetCurrentStyle(e, "font-size"), o = ["px", "pt", "em", "ch"]; !r && t < o.length;) {
                    if (i.indexOf(o[t])) {
                        switch (i = parseInt(i), o[t]) {
                            case "px":
                                break;
                            case "pt":
                                i /= .75;
                                break;
                            case "em":
                            case "ch":
                                i *= 10
                        }
                        r = !0
                    }
                    t++
                }
                return i
            }, n.prototype.sendExploreEvent = function() {
                this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null), this.sendEvent("explore", {}, null, !0)
            }, n.prototype.onMouseOverExploreTrackerHandler = function(t, r) {
                var i = (r = r || e.event).target || r.srcElement;
                i != this.container && null != this.exploreTimeoutId || i == this.container && null != this.exploreTimeoutId || (this.exploreTimeoutId = TRC.Timeout.set(this.sendExploreEvent.trcBind(this), t))
            }, n.prototype.setExploreTracker = function() {
                var e = 0;
                this.exploreTimeoutId = null, void 0 !== this.trc.global && (e = this.trc.global["explore-delay"] ? this.trc.global["explore-delay"] : e), this.container.onmouseover = this.onMouseOverExploreTrackerHandler.trcBind(this, e), 0 != e && (this.container.onmouseout = this.onMouseOutExploreTrackerHandler.trcBind(this))
            }, n.prototype.onMouseOutExploreTrackerHandler = function(t) {
                t = t || e.event;
                var r = this.container.getBoundingClientRect();
                t.clientX >= r.left && t.clientX < r.right && t.clientY >= r.top && t.clientY < r.bottom || this.exploreTimeoutId && (TRC.Timeout.clear(this.exploreTimeoutId), this.exploreTimeoutId = null)
            }, n.prototype.resetBoxes = function() {
                this.boxes = []
            }, n.prototype.setResponsiveRules = function(e, t) {
                if (!TRC.css.responsive.injectedStyles[e] || this.disableResponsiveCSSReuse) {
                    var r = this.trc.getProperty(this.mode_name, "responsive-rules", this.propertiesOverride);
                    r ? this.setOnStandardResponsiveRules(e, t, r) : this.setOnAutoSizeResponsiveRules(e, t, this.trc.getProperty(this.mode_name, "auto-size-rules", this.propertiesOverride)), TRC.css.responsive.injectedStyles[e] = !0
                }
            }, n.prototype.setOnStandardResponsiveRules = function(e, t, r) {
                var i = this.trc.getProperty(this.mode_name, "rows", this.propertiesOverride),
                    o = 1,
                    n, s = this.trc.getProperty(this.mode_name, "carousel-min-items", this.propertiesOverride) || 1.33;
                try {
                    n = this.responsiveRules = [];
                    for (var a = 0, l = r.length; a < l; a++) n[a] = {
                        rows: r[a].rows || i || o,
                        cells: r[a].cells,
                        min: r[a].minWidth,
                        max: r[a].maxWidth,
                        margin: r[a].margin.h,
                        ratio: this.getRuleAspectRatio(r[a]) || this.getThumbAspectRatio(this.trc.modes[this.mode_name]) || 100 * this.DEFAULT_THUMB_RATIO
                    };
                    TRC.css.utils.setStyleElements(TRC.css.responsive.rulesToCssText(e, this.responsiveRules, t, this.trc.cssReset, this.isWCTextLinks, this.trc.direction, this.isCarousel, s))
                } catch (e) {
                    __trcError("Error in setOnStandardResponsiveRules : ", e.message)
                }
            }, n.prototype.setOnAutoSizeResponsiveRules = function(e, t, r) {
                var i = TRC.dom.getWindowWidth(),
                    o = this.container.clientWidth > 0 ? this.container.clientWidth : this.container.offsetWidth,
                    n = i / o,
                    s = this.trc.getProperty(this.mode_name, "rows", this.propertiesOverride),
                    a = 1,
                    l, c = this.trc.getProperty(this.mode_name, "carousel-min-items", this.propertiesOverride);
                try {
                    l = this.responsiveRules = [];
                    for (var d = 0, h = r.length; d < h; d++) l[d] = {
                        rows: r[d].rows || s || a,
                        cells: r[d].n,
                        min: n * r[d]["minWc"],
                        margin: Math.round((r[d]["maxWsRange"] + r[d]["minWsRange"]) / 2) / o * 100,
                        ratio: this.getThumbAspectRatio(this.trc.modes[this.mode_name]) || r[d].ratio || 100 * this.DEFAULT_THUMB_RATIO
                    };
                    TRC.css.utils.setStyleElements(TRC.css.responsive.rulesToCssText(e, this.responsiveRules, t, this.trc.cssReset, !1, this.trc.direction), this.isCarousel, c)
                } catch (e) {
                    __trcError("Error in setOnAutoSizeResponsiveRules : ", e.message)
                }
            }, n.prototype.setMetaAttribute = function(e) {
                e.meta = {}, __trcCopyProps(this.trc, e.meta), delete e.meta["video-list"]
            }, n.prototype.drawResponsiveList = function(t) {
                TRC.tlf && console.timeStamp("start mode - " + this.mode_name), TRC.tlf && console.group("mode - " + this.mode_name), TRC.tlf && console.time("mode rendering");
                var r = this.listContainer,
                    i = document.createElement("div"),
                    o = this.recommendationList.length,
                    n = 0,
                    s = 1e3,
                    a = TRC.dom.closest(this.getContainer(), ".trc_related_container"),
                    l = "trc_elastic";
                TRC.pConsole(this.mode_name, "debug", "start drawing responsive mode - see info", this.trc.getProperty(this.mode_name, "responsive-rules", this.propertiesOverride), "object"), this.internalContainer = i, this.orientation = this.trc.getProperty(this.mode_name, "orientation", this.propertiesOverride);
                var c = this.disableResponsiveCSSReuse ? this.id : this.mode_name;
                if (TRC.dom.addClass(a, l + " " + l + "_" + c), this.resetBoxes(), i.id = "internal_" + this.id, TRC.dom.clearInnerElements(r), r.appendChild(i), this.setExploreTracker(), this.setMetaAttribute(i), this.firstVideo = null, this.setResponsiveRules(l + "_" + c, o), this.pasreRecommendationList(o, this.hasDuration(), i), this.renderCTA(i, this), this.trc.global["smart-ellipsis"] || (this.isClassFilter ? TRC.listen("IE_ClassShift", this.fixResponsiveVideoBoxes.trcBind(this)) : (TRC.dom.on(e, "resize", this.fixResponsiveVideoBoxes.trcBind(this).trcThrottle(500)), TRC.listen("videoCubeChange", this.fixResponsiveVideoBoxes.trcBind(this)))), !this.boxes.length || this.boxes.length <= 0) {
                    var d = this.response.feedPlacement || this.placement;
                    TRC.dispatch("onRboxFlowError", {
                        placement: d
                    })
                }
                TRC.dom.addClass(this.boxes[0], "trc-first-recommendation trc-spotlight-first-recommendation"), this.postRenderQueue.pushBack("list-suffix,publisher-end", function(e) {
                    this.trc.runHook(this, this.mode_name, "list-suffix", this.propertiesOverride, !0, e, this), this.trc["publisher-end"](this.id), TRC.CustomModulesManager.runHook("publisher-end", null, this, this.id)
                }.trcBind(this, i)), this.postRenderQueue.pushBack("checkForBlocking", this.checkForBlocking.trcBind(this)), this.postRender(), this.visibleTimeoutId = null, void 0 !== this.trc.global && (n = this.trc.global["visible-delay"] ? this.trc.global["visible-delay"] : n, s = this.trc.global["visible-cycle"] ? this.trc.global["visible-cycle"] : s), TRC.MetricsManager.sendMetricsEvent(TRC, this.trc, {
                    name: "UiItemsRendered",
                    value: TRC.MetricsManager.getMetricValue("UiItemsRendered"),
                    type: "counter"
                }, null), TRC.fallbackApi.finalize(this), TRC.Heatmap.isEnabled(this.trc) && this.attachHeatMapToContainer(a), this.visibilityReporter = new TRC.WidgetVisibilityReporter(this), TRC.eventDelegator.dispatch("onrender", {
                    name: this.mode_name,
                    container: this.container,
                    placement: this.orig_placement
                }), TRC.EventsAPI.dispatchRender(t, this), TRC.tlf && console.timeEnd("mode rendering"), TRC.tlf && console.groupEnd()
            }, n.prototype.attachHeatMapToContainer = function(e) {
                this.isFeedCard ? this.listContainer.heatmap = this.getCurrentFeed(e).heatmap : (this.listContainer.heatmap = new TRC.Heatmap(this.trc), TRC.dom.on(this.listContainer, "click", function(e) {
                    this.listContainer.heatmap.captureAndSendClickData(e)
                }.bind(this)))
            }, n.prototype.getCurrentFeed = function(e) {
                var t = this.trc.feedsManager.feeds,
                    r = e.getAttribute("data-placement-name");
                for (var i in t)
                    if (t.hasOwnProperty(i) && r.indexOf(i) > -1) return t[i]
            }, n.prototype.createVideoBoxDirectURL = function(e) {
                var t = e.video_data,
                    r = t.url;
                try {
                    if (!t.isSyndicated) {
                        t.original_url = r;
                        var i = this.formatTrackingParam() || this.tracking;
                        (r = this.trc.runHook(this, this.mode_name, "change-url", this.propertiesOverride, !1, r, e, i)) === t.original_url && i && (r = TRC.URL.prototype.addParamsToUrl(r, i))
                    }
                    t.url = r, e.directURL = r
                } catch (e) {
                    __trcError("Error in createVideoBoxDirectURL", e)
                }
            }, n.prototype.formatTrackingParam = function() {
                var e = this.getModeClientProperty("organic-tracking-params");
                if (e) return Object.keys(e).reduce(function(t, r, i) {
                    return t + (0 !== i ? "&" : "") + r + "=" + e[r]
                }, "")
            }, n.prototype.createVideoBoxClickUrlParams = function(e, t) {
                var r = this.response && this.response.trc ? this.response.trc["session-data"] : null,
                    i = {
                        pi: this.trc.getItemId(),
                        ri: this.response.trc["req"],
                        sd: this.trc.getSessionData(r),
                        ui: TRC.pageManager.getUserId(),
                        it: e.type,
                        ii: e["item-id"],
                        pt: this.getItemType(),
                        li: this.listContainer.id,
                        sig: e.sig,
                        url: t,
                        vi: this.cachedViewId || TRC.pageManager.getPageData(),
                        p: e.isSyndicated ? e.publisher : "",
                        r: Math.floor(100 * Math.random())
                    },
                    o = this.trc.formattedTRCRequest && this.trc.formattedTRCRequest.tmpl,
                    n = this.response.trc["placement-group"];
                return o && (i.tmpl = o), n && (i.pg = n), i
            }, n.prototype.createVideoBoxClickUrlWithParams = function(e) {
                var t = [],
                    r;
                for (var i in e) e.hasOwnProperty(i) && e[i] && (this.trc["normalize-log-param"](i, e[i]), t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i])));
                return r = h + "//" + this.domain + "/" + encodeURIComponent(this.trc["normalize-log-param"]("publisher", TRC.publisherId)) + "/log/3/click?" + t.join("&"), this.trc.enableExperimentsVariantIdEvent && this.trc.experimentsVariantIdParamsStr && (r += "&" + this.trc.experimentsVariantIdParamsStr), this.trc.getLoaderTypesValue() && (r += "&" + this.trc.getLoaderTypesValue()), r
            }, n.prototype.createVideoBoxClickUrl = function(e, t) {
                var r = this.createVideoBoxClickUrlParams(e, t);
                return this.createVideoBoxClickUrlWithParams(r)
            }, n.prototype.fixResponsiveBoxTitleAndDesc = function(e) {
                var t = e.labelsBox,
                    r = e.video_data,
                    i = e.link,
                    o = this.getDetailSpansFromLabelsBoxes("title", e),
                    n = this.getDetailSpansFromLabelsBoxes("description", e),
                    s = function() {
                        r.thumbUnder && t.font && (i.style.fontSize = t.font + "px")
                    };
                try {
                    if (!this.trc.global["smart-ellipsis"])
                        for (var a = 0; a < o.length; a++) TRC.dom.setContentToElement(o[a], e.getAttribute("data-item-title"));
                    setTimeout(function() {
                        for (var t = 0; t < o.length; t++) this.fixBoxOverflow(o[t], e.getAttribute("data-item-title"), !1, "false" != r["truncate-title"]);
                        s()
                    }.trcBind(this), 0), n.length && setTimeout(function() {
                        for (var e = 0; e < n.length; e++) this.fixBoxOverflow(n[e], r["description"], !0, !0)
                    }.trcBind(this), 0)
                } catch (e) {
                    __trcError("Problem in fixResponsiveBoxTitleAndDesc", e)
                }
            }, n.prototype.getDetailSpansFromLabelsBoxes = function(e, t) {
                var r = t.querySelectorAll('.video-label-box [class*="' + e + '"]');
                return [].slice.call(r)
            }, n.prototype.createVideoBoxLabels = function(e) {
                var t = document.createElement("span");
                return this.setVideoBoxLabelsClass(t), e.appendChild(t), t
            }, n.prototype.setVideoBoxLabelsClass = function(e) {
                e.className = "video-label-box"
            }, n.prototype.createThumbBlockHolder = function(e, r, i) {
                var o = t.createElement("div");
                o.className = "thumbBlock_holder", r.appendChild(o), this.createVideoBoxThumbBlock(e, o, i), this.createVideoBoxAspect(o, e)
            }, n.prototype.createVideoBoxAspect = function(e, t) {
                var r = document.createElement("div");
                r.className = "videoCube_aspect", e.appendChild(r), t.thumbnail_aspect = r
            }, n.prototype.drawVideoBoxThumbnailLink = function(e, t, r, i) {
                var o;
                return e.img_src = this.getThumbnailURL(r, this.trc.getProperty(this.mode_name, "thumbnail-width", this.propertiesOverride), this.trc.getProperty(this.mode_name, "thumbnail-height", this.propertiesOverride)), o = this.createVideoLink(r, i), TRC.dom.addClass(o, "item-thumbnail-href"), this.createThumbBlockHolder(e, o, t), o
            }, n.prototype.createVideoBoxThumbBlock = function(e, t, r) {
                var i = document.createElement("span"),
                    o = "",
                    n = e.video_data;
                r || "video" != n.type || void 0 === n.duration || "" == n.duration || "0" == n.duration || (o = this.genDuration(n.duration)), i.className = "thumbBlock", n.imageIframe && (this.drawImageIframe(i, n.imageIframe, (e.link || e.preLink).logger_url), e.hasFloatingButton = !0), e.thumbBlock = i, t.appendChild(i)
            }, n.prototype.setVideoBoxImageHandlers = function(e, t, r) {
                e.onerror = this.responsiveImageOnErrorHandler.trcBind(this, e, t, r, h), e.onload = this.responsiveImageOnLoadHandler.trcBind(this, e, t, r)
            }, n.prototype.responsiveImageOnErrorHandler = function(e, t, r, i) {
                var o = e.src,
                    n = o.search(/\Shttp\S/),
                    s = r["item-id"];
                if (n > 5 && this.isTaboolaCDNImage(o) && !TRC.Browser.ie) return o = this.getFallbackImageForTaboolaCDNImage(o, s, i), void(t.img_src = e.src = o);
                o = this.getFallbackImageForNonTaboolaCDNImage(e, s, i), t.thumbBlock.style.backgroundImage = "URL('" + o + "')"
            }, n.prototype.responsiveImageOnLoadHandler = function(e, t, r) {
                e && e.complete ? this.appendVideoBoxImage(t) : TRC.Timeout.set(arguments.callee.trcBind(this, t.thumbBlock, e), 50)
            }, n.prototype.fixResponsiveVideoImage = function(e, t, r) {
                var i;
                if (this.imageOptimizePrefixFlag) return t.style.visibility = "visible", t.style.width = "100%", void(t.style.height = "100%");
                var o = null,
                    n = e.thumbBlock,
                    s = o ? o.right - o.left : n.clientWidth,
                    a = o ? o.bottom - o.top : n.clientHeight,
                    l, c, d, h, p, u = this.isCssImportant,
                    g = TRC.css.utils;
                if (0 != a && 0 != s && 0 != t.height) try {
                    (l = s / a) > (c = this.getImageAspectRatio(t)) ? (d = Math.floor(s / c), h = Math.floor((a - d) / 2), g.setStyleProperty(t, "width", s + "px", u), 0 != h && (t.style.position = "relative", g.setStyleProperty(t, "top", h + "px", u))) : (i = Math.floor(a * c), p = Math.floor((s - i) / 2), g.setStyleProperty(t, "height", a + "px", u), 0 != p && (t.style.position = "relative", "ltr" == this.trc.direction ? g.setStyleProperty(t, "left", p + "px", u) : g.setStyleProperty(t, "left", -1 * p + "px", u))), t.style.visibility = "visible"
                } catch (e) {
                    alert(e.message), __trcError("Error in fixResponsiveVideoImage : ", e.message)
                } else r || TRC.Timeout.set(this.fixResponsiveVideoImage.trcBind(this, e, t, !0), 500)
            }, n.prototype.getImageAspectRatio = function(e) {
                return e.trcRatio || (e.trcRatio = e.width / e.height), e.trcRatio
            }, n.prototype.createVideoBoxImageLoader = function(e) {
                var t = new Image,
                    r = e.video_data,
                    i = e.thumbBlock;
                this.trc.global["thumb-lazy-load-switch"] && this.updateThumbnailStack(t), t.style.visibility = "hidden", e.img = t, this.setVideoBoxImageHandlers(t, e, r), this.trc.global["use-delay-image-load"] ? TRC.Timeout.set(this.setImageLoad.trcBind(this, t, e, e.img_src, 100, i, this.trc.global["thumb-lazy-load-switch"]), 10) : this.setImageLoad(t, e, e.img_src, 100, i, this.trc.global["thumb-lazy-load-switch"]), this.add_span("thumbnail-overlay", null, i), r.isSyndicated && this.addVideoBoxBranding(i, r), new TRC.ThumbnailOverlayComponents(i, r.isSyndicated, this)
            }, n.prototype.updateThumbnailStack = function(e) {
                this.thumbnailImageStack = this.thumbnailImageStack || [], this.thumbnailImageStack.push(e)
            }, n.prototype.addVideoBoxBranding = function(e, t) {
                var r = document.createElement("span");
                r.className = "branding", t["branding-text"] ? r.appendChild(document.createTextNode(this.formatData("syndicator", t["branding-text"]))) : t["branding-url"] && this.createBrandingImage(r, t["branding-url"]), e.appendChild(r)
            }, n.prototype.createBrandingImage = function(e, r) {
                var i = t.createElement("img");
                i.src = r, e.appendChild(i)
            }, n.prototype.createVideoBoxThumbLink = function(e, t) {
                try {
                    var r = e.video_data,
                        i = e.thumbnail_position,
                        o = this.drawVideoBoxThumbnailLink(e, t, r, e.getAttribute("data-item-title"));
                    if ("under" === i) {
                        if (o.title = e.link.title = "", e.insertBefore(o, e.link), TRC.RecommendationReel.shouldInitRecommendationReel(this)) TRC.RecommendationReel.setTextOverForRecommendationReel(this, e);
                        else {
                            var n = document.createElement("span");
                            TRC.dom.addClass(e.link, "tbl-text-over-container"), TRC.dom.addClass(n, "tbl-text-over"), e.link.appendChild(n)
                        }
                        this.findElement(function(e) {
                            return e.className.search("title") >= 0
                        }, e.labelsBox, "span", null), r.thumbUnder = !0
                    } else "bottom" === i ? e.appendChild(o) : e.insertBefore(o, e.link)
                } catch (e) {
                    __trcError("Error in createVideoBoxThumbLink", e)
                }
            }, n.prototype.setVideoBoxDataAttr = function(e, t) {
                e.setAttribute("data-item-id", t["item-id"]), e.setAttribute("data-item-title", t.title), e.setAttribute("data-item-thumb", this.getThumbnailURL(t, 100, 80)), e.setAttribute("data-item-syndicated", !!t.isSyndicated)
            }, n.prototype.getThumbnailPosition = function(e, t) {
                return t || this.trc.getProperty(this.mode_name, "thumbnail-position", this.propertiesOverride)
            }, n.prototype.drawResponsiveVideoBox = function(e, t, r, i, o, n) {
                var s = this.videoBoxContainer = document.createElement("div");
                try {
                    if (t = __trcCopyProps(t, {}, {
                            isSyndicated: t["is-syndicated"] || t["is-in-network"] || t["is-native"],
                            isPhoto: "photo" === t.type,
                            isText: "text" === t.type,
                            imageIframe: t.hasOwnProperty("image-iframe") && t["image-iframe"],
                            tags: "string" == typeof t.tags ? TRC.text.parseCSV(t.tags) : []
                        }), this.setApiItemsData(t), this.createResponsiveVideoBox(s, t, o, n), "none" !== s.thumbnail_position && this.createVideoBoxThumbLink(s, r), this.isStories && TRC.Stories.createBlurImageBox(s), this.createResponsiveLabelsBoxes(s), !TRC.botDetected && t[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE] && t[TRC.TrackingScriptLoader.TRC_SCRIPT_TAGS_ATTRIBUTE].length > 0) {
                        var a = this.outermostContainer.id ? this.outermostContainer.id : this.placement.split(" ").join("-"),
                            l = this.trc.global["view-tag-delay"],
                            c = l && "number" == typeof l && TRC.util.isTrue(t.uvtd) ? l : 0;
                        a += "-" + t["itemIndex"], TRC.TrackingScriptLoader.renderScriptTagIntoVideoBox(s, t, a, c)
                    }
                    return this.trc.runHook(this, this.mode_name, "item-renderer", this.propertiesOverride, !0, s, s.video_data), TRC.CTAManager.initialize(this, s), e.appendChild(s), this.fixResponsiveBoxTitleAndDesc(s), this.boxes.push(s), this.shouldHandleScBrandingWithSponsoredLink() && TRC.Browser.ieUpto(10) && this.handleBrandingWithDisclosureContainerWidth(), t.imageIframe || this.createVideoBoxImageLoader(s), TRC.BlockClicksManager.isBlockClicksEnabled(this.trc.global, t) && new TRC.BlockClicksManager(this, s, t), TRC.MetricsManager.metricIncrement("UiItemsRendered"), s
                } catch (e) {
                    __trcError("Error in drawResponsiveVideoBox", e)
                }
                return null
            }, n.prototype.createResponsiveLabelsBoxes = function(e) {
                this.buildLabelBox(e.preLabelsBox, e.video_data, e.pre_detail_order), this.buildLabelBox(e.labelsBox, e.video_data, e.detail_order)
            }, n.prototype.renderCTA = function(e, t) {
                TRC.ctaManager && TRC.ctaManager.renderCTAItems(e, t)
            }, n.prototype.handleBrandingWithDisclosureContainerWidth = function() {
                var e = this.branding;
                if (e) {
                    var t = e.querySelector(".branding-inner"),
                        r = e.querySelector(".branding-separator"),
                        i = e.querySelector(".logoDiv"),
                        o = r && TRC.dom.getOuterWidth(r),
                        n = TRC.dom.getOuterWidth(i);
                    t.style.maxWidth = "calc(100% - " + (o + n) + "px)"
                }
            }, n.prototype.createResponsiveVideoBox = function(e, t, r, i) {
                e.rbox = this, e.video_data = t, e.thumbnail_position = this.getThumbnailPosition(t, i || null), this.setVideoBoxDataAttr(e, t), this.setVideoBoxClassName(e), this.createVideoBoxDirectURL(e), t.logger_url = this.createVideoBoxClickUrl(e.video_data, e.directURL), e.setAttribute("data-item-title", t.title), this.setVideoBoxDetailsOrder(e, r || null), this.createDetailsLabelsContainers(e)
            }, n.prototype.createDetailsLabelsContainers = function(e) {
                var t = 0;
                e.pre_detail_order.length > 0 && (this.createVideoBoxPreThumbnailLink(e), t++), e.detail_order.length > 0 && (this.createVideoBoxAfterThumbnailLink(e), t++), t > 1 && TRC.dom.addClass(e, "trc-split-label")
            }, n.prototype.setVideoBoxClassName = function(e) {
                var t = 0,
                    r = this.isResponsive,
                    i = this.trc.getProperty(this.mode_name, "orientation", this.propertiesOverride),
                    o = TRC.SYNDICATED_CLASS_NAME;
                this.setVideoBoxClassName = function(e) {
                    var n = e.video_data;
                    e.className = "videoCube " + "trc_spotlight_item " + "origin-" + n.origin + " thumbnail_" + e.thumbnail_position + (n.isSyndicated ? " " + o : "") + (n["is-in-network"] ? " inNetworkItem" : "") + (n["is-native"] ? " tabNativeItem" : "") + (n.isPhoto ? " photoItem" : "") + (n.isText ? " textItem" : "") + " " + (r ? "videoCube_" + (t += 1) + "_child" : i)
                }, this.setVideoBoxClassName(e)
            }, n.prototype.setVideoBoxDetailsOrder = function(e, t) {
                var r = t || this.trc.getProperty(this.mode_name, "detail-order" + (e.video_data.isSyndicated ? "-syndicated" : ""), this.propertiesOverride),
                    i = this.trc.getProperty(this.mode_name, "before-detail-order" + (e.video_data.isSyndicated ? "-syndicated" : ""), this.propertiesOverride);
                e.detail_order = r ? r.split(",") : [], e.pre_detail_order = i ? i.split(",") : []
            }, n.prototype.createVideoBoxAfterThumbnailLink = function(e) {
                var t = e.video_data,
                    r = e.getAttribute("data-item-title"),
                    i = this.createVideoLink(t, r);
                e.labelsBox = this.createVideoBoxLabels(i), e.appendChild(i), e.link = i, TRC.dom.addClass(i, "item-label-href"), TRC.dom.addClass(e.labelsBox, "trc-main-label")
            }, n.prototype.createVideoBoxPreThumbnailLink = function(e) {
                var t = e.video_data,
                    r = e.getAttribute("data-item-title"),
                    i = this.createVideoLink(t, r);
                e.preLabelsBox = this.createVideoBoxLabels(i), e.appendChild(i), e.preLink = i, TRC.dom.addClass(i, "item-label-href"), TRC.dom.addClass(e.preLabelsBox, "trc-pre-label"), TRC.dom.addClass(e, "item-has-pre-label")
            }, n.prototype.appendVideoBoxImage = function(e) {
                try {
                    (null != e.img_src || this.trc.global["thumb-lazy-load-switch"]) && (void 0 === e.image_div ? (TRC.dispatch("item-image-loaded", {
                        videoData: e.video_data,
                        container: e
                    }), e.thumbBlock.style.backgroundImage = "URL('" + e.img_src + "')") : (e.thumbBlock.appendChild(e.image_div), e.image_div.appendChild(e.img), e.img.style.visibility = "visible"))
                } catch (e) {
                    __trcError("Pager thumbnail images fixing errors", e)
                }
            }, n.prototype.pasreRecommendationList = function(e, t, r) {
                var i, o;
                this.stopBoxRendering = !1;
                for (var n = 0; n < e; n++) {
                    TRC.tlf && 0 === n && console.time("item rendering"), (i = this.recommendationList[n]).itemIndex = n, null == this.firstVideo && "video" == i.type && (this.firstVideo = i);
                    try {
                        this.trc.runHook(this, this.mode_name, "item-data-filter", this.propertiesOverride, !1, i), this.fixHeight && !this.stopBoxRendering ? (o = this.drawResponsiveVideoBox(r, i, t, this.orientation), this.stopBoxRendering = this.hasMaxHeightExploitation(parseInt(document.trcGetCurrentStyle(this.container, "height"), 10), this.fixHeight), this.stopBoxRendering && this.safeRemoveItem(o)) : this.fixHeight || this.drawResponsiveVideoBox(r, i, t, this.orientation, null, null)
                    } catch (e) {
                        __trcError("Error in pasreRecommendationList", e)
                    }
                    TRC.tlf && 0 == n && console.timeEnd("item rendering")
                }
            }, n.prototype.safeRemoveItem = function(e) {
                var t = e.parentNode;
                TRC.dom.clearInnerElements(e), t.removeChild(e)
            }, n.prototype.hasMaxHeightExploitation = function(e, t) {
                return t <= e
            }, n.prototype.fixResponsiveVideoBoxes = function() {
                for (var e = this.boxes, t = 0, r = e.length; t < r; t++) this.fixResponsiveBoxTitleAndDesc(e[t])
            }, n.prototype.createSponsoredOverlay = function(e) {
                var r = t.createElement("span");
                r.className = "trc_sponsored_overlay", e.appendChild(r)
            }, n.prototype.setSponsoredOverlayClass = function(e, t) {
                t.className = "thumbnail" == e ? "trc_sponsored_overlay_base" : "trc_sponsored_overlay_base round"
            }, n.prototype.genrateResponsiveSponsoredLabel = function(e, t) {
                var r = this.trc.getProperty(this.mode_name, "sponsored-location", this.propertiesOverride);
                if (r.match(/^thumbnail/)) {
                    var i = document.createElement("span");
                    try {
                        this.setSponsoredOverlayClass(r, i), this.createSponsoredOverlay(i), t.appendChild(i), e["spnoverlay"] = i
                    } catch (e) {
                        __trcError("Error while generating sponsored label", e)
                    }
                }
            }, n.prototype.generateResponsiveOuters = function(e) {
                if (null == this.listContainer) {
                    this.header = this.generateHeader(e);
                    var r = t.createElement("div");
                    r.id = this.id.replace("trc_", "outer_"), r.className = "trc_rbox_outer", this.generateResponsiveRBoxDiv(r), e.appendChild(r), this.outerBox = r, this.addTaboolaLogo(), e.style.display = "block", __trcInfo("Start Rendering " + (this.response.trc ? this.response.trc.placement : ""))
                }
            }, n.prototype.generateResponsiveRBoxDiv = function(e) {
                var r = t.createElement("div");
                r.id = this.getListId(), r.className = "trc_rbox_div trc_rbox_border_elm", e.appendChild(r), this.listContainer = r
            }, n.prototype.getAllExternalTrackingURLsList = function() {
                var e = this.response.trc["video-list"].video,
                    t;
                try {
                    if (!this.externalTrackingURLsList) {
                        this.externalTrackingURLsList = {};
                        for (var r = 0; e && r < e.length; r++)
                            for (var i in t = this.getItemExternalTrackingURLsList(e[r])) t.hasOwnProperty(i) && (this.externalTrackingURLsList[i] || (this.externalTrackingURLsList[i] = []), this.externalTrackingURLsList[i] = this.externalTrackingURLsList[i].concat(t[i]))
                    }
                    return this.externalTrackingURLsList
                } catch (e) {
                    return __trcError("Error in TRCRBox.getAllExternalTrackingURLsList"), {}
                }
            }, n.prototype.getItemExternalTrackingURLsList = function(e) {
                var t = e["item-id"],
                    r = e["itp"],
                    i, o, n, s = {};
                if (!t) return __trcDebug("Item does not have id. External tracking pixel will not be sent if defined"), [];
                try {
                    if (this.externalTrackingURLsListByItemId || (this.externalTrackingURLsListByItemId = {}), !this.externalTrackingURLsListByItemId[t]) {
                        for (var a = 0; r && a < r.length; a++) o = (i = r[a])["t"], n = i["u"], o && n && (s[o] || (s[o] = []), s[o].push(n));
                        this.externalTrackingURLsListByItemId[t] = s
                    }
                    return this.externalTrackingURLsListByItemId[t]
                } catch (e) {
                    return __trcError("Error in TRCRBox.getItemExternalTrackingURLsList"), []
                }
            }, n.prototype.sendPlacementTrackingPixelsOnce = function(e) {
                this.trc.log1(e, {
                    ri: this.response.trc.req
                }, null, null, this.placement, this.sendAllTrackingPixelsOfType.trcBind(this, e))
            }, n.prototype.sendAllTrackingPixelsOfType = function(e) {
                this.trc.sendExternalTracking(this.getAllExternalTrackingURLsList()[e])
            }, n.prototype.shouldUseSmartEllipsis = function() {
                return this.trc.global["smart-ellipsis"] && ("enableAndOverrideModeFlag" === this.trc.global["smart-ellipsis"] || this.trc.getProperty(this.mode_name, "smart-ellipsis"))
            }, n.prototype.getEffectiveResponsiveRule = function(t, r, i) {
                if (t = t || this.responsiveRules, r = r || "min", i = i || "max", "function" != typeof e["matchMedia"] || !this.isResponsive || !t) return null;
                for (var o = 0; o < t.length; o++)
                    if (e["matchMedia"]("screen and (min-width: " + t[o][r] + "px)" + (isNaN(t[o][i]) ? "" : " and (max-width: " + t[o][i] + "px)")).matches) return t[o];
                return null
            }, n.prototype.getCurrentListSize = function() {
                var e = this.trc.getProperty(this.mode_name, "responsive-rules", this.propertiesOverride),
                    t = this.getEffectiveResponsiveRule(e, "minWidth", "maxWidth");
                return this.isResponsive && t ? t.rows * t.cells : this.trc.getListSize(this)
            }, n.prototype.drawImageIframe = function(e, t, r) {
                t = t || "", r = r && r.replace(/&redir=[^&]*/, "") + "&redir=", e.innerHTML = t.replace("${CLICK_URL_ESC}", encodeURIComponent(r))
            }, n.prototype.getWidgetToFeedHelper = function() {
                return this.parentFeed && this.parentFeed.widgetToFeedHelper
            }, n.prototype.getPublisherBrandingName = function() {
                if (!this.publisherBrandingText) {
                    var e = this.trc.getPublisherVersionPropertyWithFallbackToNetwork("publisher-branding") || "";
                    this.publisherBrandingText = TRC.text.encodeHTML(e) || this.trc.getSiteNameOgValue() || ""
                }
                return this.publisherBrandingText
            }, n.prototype.sendAvailableEvent = function(e, t, r, i) {
                if (!this.isResponseFromCache() || this.trc.global["send-available-for-cached-response"])
                    if (!i && this.trc.isDeferredAvailable) {
                        TRC.performance && TRC.performance.mark("8.0.1." + this._id);
                        var o = this.sendEvent.trcBind(this, "available", this.util.merge(e, {
                            df: 1
                        }), t.getAll(), !0);
                        r ? TRC.Timeout.set(o, 0) : this.postRenderQueue.pushBack("available", o)
                    } else this.sendEvent("available", e, t.getAll(), !0)
            }, n.prototype.isResponseFromCache = function() {
                return this.response && this.response.cached
            }, n.prototype.getModeClientProperty = function(e) {
                return this.trc.getProperty(this.mode_name, e, this.propertiesOverride)
            }
        }(window, document),
        function(e, t) {
            var r = TRC.URL = function(e) {
                    var t = TRC.text.lsplit;
                    if (!e) throw new Error("Invalid URL!");
                    this.href = e;
                    var r = t(e, "#", 2);
                    return this.hash = r.length > 1 ? "#" + r.pop() : "", r = t(e = r[0], "?", 2), this.search = r.length > 1 ? "?" + r.pop() : "", r = t(e = r[0], "://", 2), this.protocol = r.length > 1 ? r.shift() + ":" : "", r = t(e = r[0], "/", 2), this.pathname = r.length > 1 ? "/" + r.pop() : "/", r = t(e = r[0], "@", 2), this.auth = r.length > 1 ? r.shift() : "", r = t(e = r[0], ":", 2), this.port = r.length > 1 ? parseInt(r.pop()) : 0, this.host = r[0], this
                },
                i = {
                    "http:": 1,
                    "https:": 1
                };
            r.prototype.toString = function(e) {
                return (this.host ? this.protocol + "//" + (this.auth ? this.auth + "@" : "") + this.host + (this.port ? ":" + this.port : "") : "") + this.pathname + this.search + (e ? "" : this.hash || "")
            }, r.prototype.switchProtocol = function(e, t) {
                var r = this instanceof TRC.URL ? this : new TRC.URL(this),
                    o;
                return i[e] && (t && "https:" == r.protocol || (r.protocol = e)), (o = r.toString(!1)).length > 1 ? o : ""
            }, r.prototype.getParameter = function(e, t) {
                var r = TRC.URL.prototype.getQueryStringObj.call(this);
                for (var i in r)
                    if (unescape(i) == e) return t ? t(r[i]) : unescape(r[i]);
                return null
            }, r.prototype.getQueryStringObj = function() {
                for (var e, t = (this instanceof TRC.URL ? this : new TRC.URL(this)).search.substr(1).split(/&/), r = {}, i = 0; i < t.length; i++)
                    if (t[i]) {
                        var o = t[i].split(new RegExp("="), 2);
                        r[o[0]] = o[1]
                    }
                return r
            }, r.prototype.addParamsToUrl = function(e, t) {
                var r = e.split("#");
                return r[0] + (r[0].search("\\?") >= 0 ? "&" : "?") + t + (r[1] ? "#" + r[1] : "")
            }
        }(window, document),
        function(e, t) {
            e.TRC = e.TRC || {}, TRC.UserIdMerger = {
                notifyPossibleUserChange: function(e, t, r, i) {
                    var o, n, s;
                    e.global["rbox-enable-fix-user-id-event"] && (o = TRC.pageManager.getValue("user-id"), n = TRC.pageManager.getPublisherValue(t, "session-data"), this.multipleUsersExist(r, o) && this.sendUserIdFixEvent(e, o, r, n, i))
                },
                multipleUsersExist: function(e, t) {
                    return t && e && t !== e
                },
                sendUserIdFixEvent: function(e, t, r, i, o) {
                    var n = {
                        time: (new Date).getTime(),
                        fromUser: t,
                        toUser: r,
                        fromSD: i,
                        toSD: o
                    };
                    e.sendEvent("fix-user-id", n)
                }
            }
        }(window, document),
        function() {
            TRC.InvokePVideoLoader = function() {
                TRC.PVideoLoader = function e(t, r, i, o) {
                    this.blockVideo = o.blockThumbnailVideoLoader, this.blockVideo || (TRC.VideoLoader.call(this, t.trc, r, t.placement, t.container, i), this.rbox = t)
                }, TRC.PVideoLoader.prototype = __trcObjectCreate(TRC.VideoLoader.prototype), TRC.VideoLoader.prototype.ITEM_ID_SEPARATOR = "~~", TRC.PVideoLoader.prototype.getCallbacksObjectKey = function() {
                    return "pVideoCallbacks"
                }, TRC.PVideoLoader.prototype.genVideoCallback = function(videoCallbackParams) {
                    var videoCallbackName = this.generateCallbackName(),
                        that = this;
                    return TRC.pVideoCallbacks[videoCallbackName] = function(data) {
                        if (TRCImpl.global["enable-video-ajax"]) {
                            if (!TRC.VideoTagLoader.prototype.isXHRDone(data.target)) return;
                            TRC.performance && TRC.performance.mark("videoAjaxStop", null, "", "", "videoAjaxRoundtrip", TRC.PerfEvenType.STOP), data = TRC.VideoTagLoader.prototype.parseTBResponse(data.target.responseText)
                        }
                        if (TRC.performance && TRC.performance.mark("videoJsonpRequestStop", null, "", "", "videoJsonpRequestTime", TRC.PerfEvenType.STOP), data = data || {}, data.tags && data.tags[0]) {
                            var unitBootSrc = data.tags[0].unitBootSrc || that.videoConfig.unitBootSrc,
                                script = document.createElement("script");
                            script.src = unitBootSrc, script.setAttribute("type", "text/javascript"), script.setAttribute("src", unitBootSrc), script.onload = function() {
                                var unit = eval(data.tags[0].url),
                                    viewabilityConfig = that.videoConfig["autoTriggerConfig"]["viewabilityConfig"];
                                if (-1 == viewabilityConfig.time && (viewabilityConfig.time = 0, viewabilityConfig.percentage = 101), unit.set("pVideoUrl", videoCallbackParams.url), unit.set("playerContainer", videoCallbackParams.playerContainer), unit.set("components.PosterView", {
                                        isActive: !0,
                                        imageLocation: videoCallbackParams.poster
                                    }), unit.set("customization.placeHolder.background-color", "black"), unit.set("viewPercent", viewabilityConfig.percentage), unit.set("secondsInView", viewabilityConfig.time), unit.set("isPlayOnHover", that.videoConfig["autoTriggerConfig"]["hover"]), unit.set("isRepeat", that.videoConfig.repeat), that.videoConfig["videoEventsEnabled"]) {
                                    var videoDataForEvent = that.getVideoDataForEvent(videoCallbackParams.itemIndex, videoCallbackParams.itemId);
                                    unit.on("error", function() {
                                        that.sendDebugEvent("error", videoDataForEvent)
                                    }), unit.on("eligible", function() {
                                        that.sendDebugEvent("eligible", videoDataForEvent)
                                    }), unit.on("play", function(e) {
                                        that.sendDebugEvent("play", videoDataForEvent, e)
                                    }), unit.on("render", function() {
                                        that.sendDebugEvent("rendered", videoDataForEvent)
                                    }), unit.on("quarterly", function(e) {
                                        that.sendDebugEvent("quarterly", videoDataForEvent, e)
                                    }), unit.on("complete", function() {
                                        that.sendDebugEvent("complete", videoDataForEvent)
                                    })
                                }
                                TRC.tlf && console.timeEnd("in setVideoPlayerLoad"), TRC.tlf && console.timeStamp("end setVideoPlayerLoad")
                            }, document.getElementsByTagName("head")[0].appendChild(script)
                        }
                    }, "TRC." + this.getCallbacksObjectKey() + "." + videoCallbackName
                }, TRC.PVideoLoader.prototype.sendDebugEvent = function(e, t, r) {
                    var i, o = window.trc_debug_level;
                    i = {
                        event: e,
                        data: r || null,
                        rii: t.rii,
                        placement: t.placement,
                        mode: t.modeName,
                        itemIndex: t.itemIndex,
                        itemId: t.itemId
                    }, window.trc_debug_level = 3, __trcDebug("Performance Video Event: " + JSON.stringify(i)), window.trc_debug_level = o
                }, TRC.PVideoLoader.prototype.getVideoDataForEvent = function(e, t) {
                    return {
                        rii: this.rbox["response"]["trc"]["req"],
                        placement: this.rbox["placement"],
                        modeName: this.rbox["mode_name"],
                        itemIndex: e,
                        itemId: this.extractRealItemId(t)
                    }
                }, TRC.PVideoLoader.prototype.extractRealItemId = function(e) {
                    if (!e) return null;
                    var t = e.split(this.ITEM_ID_SEPARATOR)[2];
                    return t && t.length > 0 && !isNaN(parseFloat(t)) && isFinite(t) ? t : null
                }, TRC.PVideoLoader.prototype.loadVideo = function(e, t) {
                    var r, i, o, n = TRC.VideoLoader.prototype.loadVideo.call(this, e);
                    return n && t && (r = (o = t.container.getElementsByClassName("thumbBlock_holder")) && o[0]) && t.isCreatePVideoOverlay && (i = TRC.pVideoOverlay.create(t.video_data, t.language, t.isSendEvents), r.appendChild(i)), n
                }
            }
        }(), ((e, t, r) => {
            const i = {
                    cancel: "CANCEL",
                    goto: "GO TO"
                },
                o = (r = r || {
                    dom: {
                        stopEvent(e) {
                            e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault()
                        },
                        on(e, t, r) {
                            e.addEventListener(t, r)
                        },
                        addClass(e, t) {
                            e.className += ` ${t} `
                        },
                        removeClass(e, t) {
                            const r = new RegExp(`s*${t}`, "g");
                            e.className = e.className.replace(r, "")
                        }
                    },
                    global: {
                        "p-video-overlay-send-events": !1
                    }
                }).dom;
            TRC._translationQueue = TRC._translationQueue || [], TRC._translationQueue.push({
                "p-video-overlay": i
            });
            let n = {},
                s;
            const a = function(e, t) {
                    if (!s) return;
                    const i = {
                        itemId: t["item-id"],
                        publisher: t.publisher,
                        syndicatorId: t["syndicator-id"]
                    };
                    TRCImpl.sendAbTestEvent && TRCImpl.sendAbTestEvent(e, __trcJSONify(i)), r.modDebug.logMessageToServer(1, e, i)
                },
                l = function(e) {
                    if (!e || !e.length) return "";
                    const t = e.replace(/(^\w+:|^)\/\//, "");
                    return t.replace(/\/.*/, "")
                },
                c = function(e) {
                    const t = e.className.match(/p-video-overlay-show/);
                    o[t ? "removeClass" : "addClass"](e, "p-video-overlay-show")
                },
                d = function(e, t) {
                    c(t.currentTarget.firstElementChild), void 0 === t.gotoSyndicator && a("p-video-overlay__display-overlay", e), t.gotoSyndicator || o.stopEvent(t)
                },
                h = function(e, t, r) {
                    a(t.msg, e), r.gotoSyndicator = t.flag
                },
                p = function(e, t, r) {
                    const i = o.createHTMLElement("div", {
                        className: e || ""
                    });
                    return "function" == typeof t && o.on(i, "click", t), r && r.length && r.forEach && r.forEach(e => {
                        i.appendChild(e)
                    }), i
                },
                u = function(e) {
                    const t = o.createHTMLElement("span", {
                            className: "p-video-back-action-label",
                            innerText: n.cancel || i.cancel
                        }),
                        r = p("p-video-overlay-action p-video-back-action", h.bind(this, e, {
                            msg: "p-video-overlay__hide-overlay",
                            flag: !1
                        }), [t]);
                    return r
                },
                g = function(e) {
                    const t = o.createHTMLElement("span", {
                            className: "p-video-goto-action-label",
                            innerText: n.goto || i.goto
                        }),
                        r = o.createHTMLElement("span", {
                            className: "p-video-goto-action-url",
                            innerHTML: e["branding-text"]
                        }),
                        s = p("p-video-overlay-action p-video-goto-action", h.bind(this, e, {
                            msg: "p-video-overlay__go-to-syndicator-page",
                            flag: !0
                        }), [t, r]);
                    return s
                },
                m = function(e) {
                    const t = u(e),
                        r = g(e),
                        i = p("p-video-overlay", null, [r, t]);
                    return i
                },
                b = function(e, t, r) {
                    const o = m(e);
                    s = r, n = TRC.translationManager.getLabel({
                        feature: "p-video-overlay"
                    }) || i;
                    const l = p("p-video-overlay-container", d.bind(this, e), [o]);
                    return a("p-video-overlay__overlay-created-on-item", e), l
                };
            r.pVideoOverlay = {
                create: b,
                createVideoPlayerOverlayElement: m,
                createActionElement: p,
                createGotoActionElement: g,
                createBackActionElement: u,
                actionClickHandler: h,
                videoOverlayClickHandler: d,
                videoOverlayToggleDisplay: c,
                stripUrl: l,
                sendDebugEvent: a
            }
        })(window, document, TRC), (() => {
            class BaseVideoUnitLoader {
                constructor(e) {
                    this.videoConfig = e
                }
                loadUnit(videoCallbackData) {
                    TRC.performance && TRC.performance.mark("videoEvalBaseLoadUnitStart", null, "", "", "videoEvalBaseLoadUnitTime", TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    TRC.performance && TRC.performance.mark("videoEvalBaseLoadUnitStop", null, "", "", "videoEvalBaseLoadUnitTime", TRC.PerfEvenType.STOP);
                    const {
                        rawJsonValue: rawJsonValue
                    } = this.videoConfig;
                    return this.setUnitParams(unit, rawJsonValue), unit
                }
                getVideoContainerSelector() {
                    return null
                }
                setUnitParams(e) {
                    const {
                        advancedVideoConfiguration: t
                    } = this.videoConfig, r = {
                        detachToSlider: !0,
                        unitType: !0,
                        parentFeedOptions: !0,
                        rawJsonValue: !0
                    };
                    Object.keys(this.videoConfig).forEach(t => {
                        this.videoConfig[t] && (r[t] || e.set(t, this.videoConfig[t]))
                    }), BaseVideoUnitLoader.setAdvancedVideoConfiguration(e, t);
                    const i = this.videoConfig.aggLevel || 1,
                        o = {
                            level: i
                        };
                    i > 1 && e.set("preset", o)
                }
                static setAdvancedVideoConfiguration(e, t) {
                    t && Object.keys(t).forEach(r => {
                        const i = TRC.text.splitAndJoin(r, TRC.text.toLowerCamelCase);
                        BaseVideoUnitLoader.setToUnit(e, t, r, i)
                    })
                }
                static setToUnit(e, t, r, i) {
                    const o = {
                        unitType: !0,
                        parentFeedOptions: !0,
                        rawJsonValue: !0
                    };
                    "IN_WIDGET" !== t.unitType && (o.detachToSlider = !0);
                    const n = {
                        "additionalCss.zIndex": "additionalCss.z-index"
                    };
                    o[i] || (n[i] ? e.set(n[i], t[r]) : e.set(i, t[r]))
                }
            }
            TRC.BaseVideoUnitLoader = BaseVideoUnitLoader
        })(), (() => {
            class SingleVideoManagerUnitLoader extends TRC.BaseVideoUnitLoader {
                constructor(e, t) {
                    super(e), this.trcManager = t, this.parentFeedOptions = e.parentFeedOptions
                }
                loadUnit(videoCallbackData) {
                    TRC.performance && TRC.performance.mark("videoEvalSingleManagerLoadUnitStart", null, "", "", "videoEvalSingleManagerLoadUnitTime", TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    return TRC.performance && TRC.performance.mark("videoEvalSingleManagerLoadUnitStop", null, "", "", "videoEvalSingleManagerLoadUnitTime", TRC.PerfEvenType.STOP), this.setUnitParams(unit), unit
                }
                getVideoContainerSelector() {
                    return null
                }
                setUnitParams(e) {
                    super.setUnitParams(e);
                    const t = this.videoConfig.distanceRepeat || 0,
                        r = TRC.util.isTrue(this.videoConfig.startFromSlider),
                        i = TRC.util.isTrue(this.videoConfig.detachToSlider),
                        o = TRC.util.isTrue(this.videoConfig.detachToSliderAnimation),
                        n = this.videoConfig.videoAbTest || null,
                        s = this.videoConfig.startCard || null,
                        a = this.videoConfig.maxVideoCards || null,
                        l = this.videoConfig.permanentCard || null,
                        {
                            feedDynamicParameters: c
                        } = this.parentFeedOptions,
                        d = c && c.videoDisclosurePosition || this.parentFeedOptions.videoDisclosurePosition || this.trcManager.global["video-disclosure-position"],
                        h = this.parentFeedOptions && this.parentFeedOptions.uiDesignVersion;
                    e.set("distanceRepeat", t), e.set("detachToSlider.isStartFromSlider", r), e.set("detachToSlider.isDetachToSlider", i), e.set("detachToSlider.animation", o), e.set("abTest", n), s && e.set("startCard", s), a && e.set("maxVideoCards", a), l && e.set("permanentCard", l), d && e.set("components.adChoice.position", d), h >= 3 && (e.set("components.adChoice.title.style.color", "#999999"), e.set("components.adChoice.title.logoStyle.display", "none"))
                }
            }
            TRC.SingleVideoManagerUnitLoader = SingleVideoManagerUnitLoader
        })(), (() => {
            class SliderVideoUnitLoader extends TRC.BaseVideoUnitLoader {
                loadUnit(videoCallbackData) {
                    let unit;
                    TRC.performance && TRC.performance.mark("videoEvalSliderLoadUnitStart", null, "", "", "videoEvalSliderLoadUnitTime", TRC.PerfEvenType.START);
                    try {
                        unit = eval(videoCallbackData.tags[0].url)
                    } catch (e) {
                        __trcError(`video debug: SliderVideoUnitLoader loadUnit ${TRCImpl.experimentsData&&TRCImpl.experimentsData["2"]||""}`, e)
                    }
                    return TRC.performance && TRC.performance.mark("videoEvalSliderLoadUnitStop", null, "", "", "videoEvalSliderLoadUnitTime", TRC.PerfEvenType.STOP), this.setUnitParams(unit), unit
                }
                getVideoContainerSelector() {
                    return null
                }
                setUnitParams(e) {
                    super.setUnitParams(e)
                }
            }
            TRC.SliderVideoUnitLoader = SliderVideoUnitLoader
        })(), (() => {
            class StandaloneVideoUnitLoader extends TRC.BaseVideoUnitLoader {
                constructor(e, t) {
                    super(e), this.options = t
                }
                loadUnit(videoCallbackData, videoContainer) {
                    this.setCmTag(videoContainer), TRC.performance && TRC.performance.mark("videoEvalStandaloneLoadUnitStart", null, "", "", "videoEvalStandaloneLoadUnitTime", TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    return TRC.performance && TRC.performance.mark("videoEvalStandaloneLoadUnitStop", null, "", "", "videoEvalStandaloneLoadUnitTime", TRC.PerfEvenType.STOP), this.setupVideo(videoContainer, unit), unit
                }
                getVideoContainerSelector(e) {
                    return e && e.id ? `#${e.id}` : (__trcWarn("Cannot get a selector for standalone video container - Taboola publisher container must be defined and have an ID"), null)
                }
                setCmTag(e) {
                    window.cmTag.set("isCustomEvents", !0), window.cmTag.set("width", e.getBoundingClientRect().width), window.cmTag.set("customization", this.options.videoCssCustomization)
                }
                setupVideo(e, t) {
                    let r = !1;
                    const i = TRC.util.isTrue(this.videoConfig.startFromSlider),
                        o = TRC.util.isTrue(this.videoConfig.detachToSlider),
                        n = TRC.util.isTrue(this.videoConfig.detachToSliderAnimation),
                        s = function() {
                            !r && TRC.visibility.isInViewPortWithOffset(e, -50) && (t.play && "function" == typeof t.play && t.play(e), r = !0, TRC.dispatch("trcContentReady", {
                                container: e
                            }), TRC.dom.off(window, "scroll", s))
                        };
                    t.set("detachToSlider.isStartFromSlider", i), t.set("detachToSlider.isDetachToSlider", o), t.set("detachToSlider.animation", n), t.on("ready", () => {
                        s(), r || TRC.dom.on(window, "scroll", s)
                    })
                }
            }
            TRC.StandaloneVideoUnitLoader = StandaloneVideoUnitLoader
        })(), (() => {
            class VideoAsItemUnitLoader extends TRC.BaseVideoUnitLoader {
                constructor(e, t, r) {
                    super(e), this.options = t, this.rbox = r, this.allowExpandInViewport = TRC.util.isTrue(e.allowExpandInViewport), this.replaceWidgetItems = TRC.util.isTrue(e.replaceWidgetItems), this.disableFitToSizeForSingleColumn = TRC.util.isTrue(e.disableFitToSizeForSingleColumn), this.isContainerRatioValidForTakeOver = !1, this.getContainerDimensions(t.container)
                }
                loadUnit(videoCallbackData, videoContainer) {
                    const itemsToHide = this.getSponsoredItemsToHide();
                    let unit;
                    if (!this.replaceWidgetItems || itemsToHide && itemsToHide.length) {
                        const slotItem = this.getSlotWidgetItem();
                        if (slotItem) {
                            const slotItemComputedStyle = getComputedStyle(slotItem);
                            this.setCmTag(slotItem, slotItemComputedStyle), TRC.performance && TRC.performance.mark("videoEvalItemLoadUnitStart", null, "", "", "videoEvalItemLoadUnitTime", TRC.PerfEvenType.START), unit = eval(videoCallbackData.tags[0].url), TRC.performance && TRC.performance.mark("videoEvalItemLoadUnitStop", null, "", "", "videoEvalItemLoadUnitTime", TRC.PerfEvenType.STOP), this.setUnitParams(unit), this.setupVideo(unit, itemsToHide, videoContainer, slotItemComputedStyle)
                        }
                    }
                    return unit
                }
                getVideoContainerSelector(e) {
                    const t = this.createVideoContainer(e);
                    return t ? `#${t.id}` : null
                }
                createVideoContainer(e) {
                    const t = document.createElement("figure"),
                        r = this.getSlotWidgetItem(),
                        i = r && r.parentNode;
                    return r && i && e ? (e.id ? t.id = e.id : t.id = Math.floor(2147483648 * Math.random()).toString(36), t.id += "-video", i.insertBefore(t, r), t) : (__trcWarn("Could not create video container selector for integrated widget - nowhere to append the video container"), null)
                }
                setCmTag(e, t) {
                    const r = this.getUnitContainerStyle(e, t);
                    window.cmTag.set("isCustomEvents", !0), window.cmTag.set("width", parseInt(r.width, 10)), window.cmTag.set("customization", this.getUnitCustomization(e, r)), window.cmTag.set("isFitToSize", this.isFitToSizeVideo()), window.cmTag.set("openingEffect", this.videoConfig.expandEffect), window.cmTag.set("isContainerRatioNotValidForTakeOver", !this.isContainerRatioValidForTakeOver), window.cmTag.set("rboxContainerRatio", this.containerRatio)
                }
                getUnitCustomization(e, t) {
                    const r = {};
                    if (r.unitContainer = t, !this.isFitToSizeVideo()) {
                        const t = e.querySelector(".thumbBlock_holder"),
                            i = e.querySelector(".video-label-box .video-title"),
                            o = e.querySelector(".video-label-box .branding");
                        r.placeHolder = getComputedStyle(t), r.titleContainer = {
                            title: getComputedStyle(i),
                            branding: getComputedStyle(o)
                        }
                    }
                    return r
                }
                isFitToSizeVideo() {
                    if (!this.disableFitToSizeForSingleColumn) return !0;
                    const e = this.rbox.getEffectiveResponsiveRule();
                    return !e || 1 !== e.cells
                }
                getUnitContainerStyle(e, t) {
                    const r = parseFloat(t.marginLeft),
                        i = parseFloat(t.marginRight),
                        o = parseFloat(t.width),
                        n = this.getNumOfSlotsToOccupy(),
                        s = Math.ceil(o * n + (r + i) * (n - 1));
                    return {
                        width: `${s}px`,
                        height: t.height
                    }
                }
                setTakeOverUnitContainerStyle(e, t) {
                    const r = this.getUnitContainerStyle(e, t),
                        i = this.rbox.getEffectiveResponsiveRule(),
                        o = parseFloat(t.marginTop),
                        n = parseFloat(t.marginBottom),
                        s = parseFloat(t.height),
                        a = i.rows;
                    r.height = Math.ceil(s * a + (o + n) * (a - 1)), TRC.dispatch("widgetTakeoverSizeChange", {
                        width: parseInt(r.width, 10),
                        customization: this.getUnitCustomization(e, r)
                    })
                }
                setupVideo(e, t, r, i) {
                    const {
                        allowExpandInViewport: o
                    } = this, n = this.rbox.container;
                    let s = this.getSlotWidgetItem();
                    this.setVideoContainerInitialStyle(r, i), e.on("ready", i => {
                        if (i && i.isTakeoverWidget && i.isContainerRatioValidForTakeOver) {
                            this.setPlacementSingleAdConf(), s = this.getMaxHeightSlot();
                            const e = getComputedStyle(s);
                            this.setTakeOverUnitContainerStyle(s, e), this.setVideoContainerInitialStyle(r, e), r.style.zIndex = 999
                        }!o && TRC.visibility.isInViewPortWithOffset(s, 0) || (n && TRC.dom.addClass(n, "iw_video_frame"), this.replaceWidgetItems ? t && t.length ? (parseInt(this.videoConfig.expandEffect, 10) ? e.on("renderAnimation:completed", VideoAsItemUnitLoader.displayVideoInsteadOfItems.trcBind(this, r, t)) : VideoAsItemUnitLoader.displayVideoInsteadOfItems(r, t), e.play && "function" == typeof e.play && e.play(r)) : __trcDebug("Not enough sponsored items to hide - aborting integrated widget video load") : e.play && "function" == typeof e.play && e.play(r))
                    })
                }
                setVideoContainerInitialStyle(e, t) {
                    const r = this.getSlotWidgetItem(),
                        i = parseFloat(t.marginLeft),
                        o = this.getOuterRBoxComputedStyle(),
                        n = parseFloat(o.marginLeft),
                        s = r.offsetLeft - i - (n + i);
                    e.style.position = "absolute", e.style.float = t.float, e.style.top = `${r.offsetTop}px`, e.style.left = `${s}px`, e.style.width = "auto", e.style.marginLeft = t.marginLeft, e.style.marginRight = t.marginRight, e.style.marginTop = t.marginTop, e.style.marginBottom = t.marginBottom, this.replaceWidgetItems || (e.style.zIndex = 90)
                }
                getOuterRBoxComputedStyle() {
                    const e = this.rbox.outerBox;
                    return getComputedStyle(e)
                }
                static displayVideoInsteadOfItems(e, t) {
                    VideoAsItemUnitLoader.hideWidgetItems(t), e.style.position = "static"
                }
                static hideWidgetItems(e) {
                    e.forEach(e => {
                        e.style.display = "none", e.style.visibility = "hidden"
                    })
                }
                getSlotWidgetItem() {
                    if (this.slotWidgetItem) return this.slotWidgetItem;
                    const e = this.getWidgetItems(),
                        t = this.getInsertionPointSlotNumber() - 1;
                    return isNaN(t) ? void 0 : this.slotWidgetItem = e[t]
                }
                getInsertionPointSlotNumber() {
                    const e = this.getWidgetItems(),
                        t = parseInt(this.videoConfig.slot, 10);
                    if (void 0 !== this.insertionPointSlotNumber) return this.insertionPointSlotNumber;
                    if (!isNaN(t) && t > 0) {
                        if (this.allowExpandInViewport) return this.insertionPointSlotNumber = t;
                        let r;
                        for (let i = t; i <= e.length; i++)
                            if (r = i - 1, !TRC.visibility.isInViewPortWithOffset(e[r], 0)) return this.insertionPointSlotNumber = i
                    }
                    return __trcWarn(`video tag loader - unknown slot (${t}) for integrated widget implementation`), null
                }
                getSponsoredItemsToHide() {
                    const e = this.getWidgetItems(),
                        t = this.getInsertionPointSlotNumber(),
                        r = this.getNumOfSlotsToOccupy(),
                        i = [];
                    let o = e.length,
                        n, s;
                    for (; o >= t; o--)
                        if ((n = e[s = o - 1]).video_data["is-syndicated"] && null !== n.offsetParent && (i.push(n), i.length === r)) return i;
                    return __trcWarn("video tag loader - didn't find enough sponsored items for integrated widget replacement"), null
                }
                getWidgetItems() {
                    return this.rbox.boxes
                }
                getNumOfSlotsToOccupy() {
                    const e = this.videoConfig.slotMaxSize || 2,
                        t = this.getInsertionPointSlotNumber();
                    if (void 0 === this.numOfSlotsToOccupy) {
                        const r = this.rbox.getEffectiveResponsiveRule();
                        if (r) {
                            const i = t % r.cells || r.cells,
                                o = r.cells - i + 1;
                            this.numOfSlotsToOccupy = Math.min(o, e)
                        } else this.numOfSlotsToOccupy = e
                    }
                    return this.numOfSlotsToOccupy
                }
                setPlacementSingleAdConf() {
                    this.videoConfig.slot = 1, this.videoConfig.slotMaxSize = 99, this.slotWidgetItem = null, this.insertionPointSlotNumber = void 0, this.numOfSlotsToOccupy = void 0, this.isTakeoverWidget = !0
                }
                getContainerDimensions(e) {
                    if (e) {
                        const t = e.getBoundingClientRect();
                        this.containerWidth = t.width, this.containerHeight = t.height, this.containerRatio = this.containerWidth / this.containerHeight, this.containerRatio < 2.36 && this.containerRatio > 1 && (this.isContainerRatioValidForTakeOver = !0)
                    }
                }
                getMaxHeightSlot() {
                    const e = this.getWidgetItems();
                    let t = -1,
                        r = e[0];
                    for (let i = 0; i < e.length; i++) {
                        const o = parseInt(getComputedStyle(e[i]).height, 10);
                        o > t && (t = o, r = e[i])
                    }
                    return r
                }
            }
            TRC.VideoAsItemUnitLoader = VideoAsItemUnitLoader
        })(), (() => {
            class WidgetAdjacentVideoUnitLoader extends TRC.BaseVideoUnitLoader {
                loadUnit(videoCallbackData) {
                    TRC.performance && TRC.performance.mark("videoEvalWidgetLoadUnitStart", null, "", "", "videoEvalWidgetLoadUnitTime", TRC.PerfEvenType.START);
                    const unit = eval(videoCallbackData.tags[0].url);
                    return TRC.performance && TRC.performance.mark("videoEvalWidgetLoadUnitStop", null, "", "", "videoEvalWidgetLoadUnitTime", TRC.PerfEvenType.STOP), this.setUnitParams(unit), unit
                }
                getVideoContainerSelector(e) {
                    if (this.videoConfig.position) {
                        const t = this.createVideoContainer(e);
                        return `#${t.id}`
                    }
                    return null
                }
                createVideoContainer(e) {
                    const t = document.createElement("div"),
                        r = e._trc_container;
                    if (e.id ? t.id = e.id : t.id = Math.floor(2147483648 * Math.random()).toString(36), t.id += "-video", !r) return __trcWarn("Cannot generate a selector for widget adjacent video container - widget container is not found"), null;
                    let i;
                    switch (this.videoConfig.position) {
                        case "above":
                            i = r;
                            break;
                        case "below":
                            i = r.nextSibling;
                            break;
                        default:
                            __trcWarn(`Unknown position in video config: ${this.videoConfig.position}`)
                    }
                    return e.insertBefore(t, i), t
                }
            }
            TRC.WidgetAdjacentVideoUnitLoader = WidgetAdjacentVideoUnitLoader
        })(), TRC.InvokeVideoLoader = function() {
            TRC.VideoLoader = function e(t, r, i, o, n) {
                this.trcManager = t, this.videoConfig = r, this.placement = i, this.unifiedPlacement = r.unifiedPlacement, this.taboolaContainer = o, this.trcResponse = n, this.consentData = t.consentState || TRC.consentData || {}
            }, TRC.VideoLoader.prototype.CALLBACK_NAME_PREFIX = "videoCallback", TRC.VideoLoader.prototype.valueOrEmptyString = function(e) {
                return null !== e && void 0 !== e ? e : ""
            }, TRC.VideoLoader.prototype.loadVideo = function(r) {
                if (TRC.botDetected) __trcDebug("video loader - not loading. Bot detected.");
                else if (this.blockVideo) __trcDebug("video loader - not loading. Video was blocked due to configuration.");
                else {
                    if (!TRC.Browser["ieUpto"](10)) {
                        var i = this.genVideoCallback(r);
                        if (this.trcManager.global["use-unit-fetcher-response-instead-of-tb"] && this.videoConfig.unitFetcherResponse) return e(this.videoConfig.unitFetcherResponse, i), !0;
                        var o = this.videoConfig.scriptUrlTemplate,
                            n = TRC.util.isTrue(TRCImpl.global["enable-video-ajax"]);
                        TRC.pConsole("video loader", "info", "loading video for placement: " + this.placement);
                        var s = TRC.URL.prototype.getParameter.call(location.href, "video-integration-variant");
                        if (null === s && (s = this.trcManager.global["video-integration-variant"]), o) {
                            var a = document.createElement("script");
                            a.id = this.taboolaContainer.id + "-v-loader", a.src = t.trcBind(this, r, s, TRC.shiftDomain(o), i)(), TRC.performance && TRC.performance.mark("videoJsonpRequestStart", null, "", "", "videoJsonpRequestTime", TRC.PerfEvenType.START), n ? this.loadVideoByAjax(a.src, i) : this.taboolaContainer.appendChild(a)
                        } else TRC.pConsole("video loader", "error", "error while loading video for placement: " + this.placement + ". missing script url template in response");
                        return !0
                    }
                    __trcDebug("video loader - not loading. Unsupported browser.")
                }
            };
            var e = function(e, t) {
                    const r = {
                            target: {
                                status: 200,
                                readyState: XMLHttpRequest.DONE,
                                responseText: t.toString() + "(" + e.toString() + ")"
                            }
                        },
                        i = s(t);
                    i(r)
                },
                t = function(e, t, i, n) {
                    return i.replace("{PUBLISHER_NAME}", TRC.publisherId).replace("{UNIT_TYPE}", encodeURIComponent(this.videoConfig.unitType)).replace("{UNIT_LOCATION}", encodeURIComponent(this.valueOrEmptyString(this.videoConfig.unitLocation))).replace("{SOURCE_PAGE_TYPE}", this.trcManager.getItemType()).replace("{PLACEMENT_NAME}", encodeURIComponent(this.getPlacementName())).replace("{UNIFIED_PLACEMENT_NAME}", encodeURIComponent(this.valueOrEmptyString(this.getUnifiedPlacementName()))).replace("{USER_ID}", TRC.pageManager.getUserId()).replace("{CALLBACK_NAME}", n).replace("{REFERRER}", encodeURIComponent(this.trcManager.getReferrer())).replace("{PAGE_URL}", encodeURIComponent(this.valueOrEmptyString(this.getItemUrlForVideo()))).replace("{CACHE_BUSTER}", this.getScriptCacheBuster()).replace("{PLATFORM}", this.valueOrEmptyString(this.videoConfig.platform)).replace("{NORM_PLATFORM}", this.valueOrEmptyString(this.videoConfig.fullyNormalizedPlatform)).replace("{COUNTRY}", this.valueOrEmptyString(this.videoConfig.country)).replace("{TAG_ID}", this.valueOrEmptyString(this.videoConfig.tagId)).replace("{VARIANT}", this.valueOrEmptyString(this.videoConfig.variant)).replace("{INTEGRATION_VARIANT}", this.valueOrEmptyString(t)).replace("{SESSION_ID}", this.valueOrEmptyString(this.trcManager.getSessionId())).replace("{SOURCE_ITEM_ID}", this.valueOrEmptyString(this.trcManager.getItemId())).replace("{VIEW_ID}", this.valueOrEmptyString(TRC.pageManager.getPageData())).replace("{GEO_LAT}", this.valueOrEmptyString((o("loc") || {}).lat)).replace("{GEO_ING}", this.valueOrEmptyString((o("loc") || {}).ing)).replace("{DEVICE_IFA}", this.valueOrEmptyString(this.trcManager.deviceId)).replace("{APP_ID}", this.valueOrEmptyString(o("appid"))).replace("{SESSION_DATA}", this.valueOrEmptyString(this.getSessionData())).replace("{REQUEST_ID}", this.valueOrEmptyString(this.getRequestId())).replace("{APP_NAME}", this.valueOrEmptyString(o("app"))).replace("{CONSENT_DAISY_BIT}", this.valueOrEmptyString(this.getConsentString())).replace("{GDPR_APPLIES}", this.valueOrEmptyString(this.getGdprApplies())).replace("{OPEN_EXCHANGE_ENABLED}", this.valueOrEmptyString(this.getOpenExchangeEnabled())).replace("{EXTERNAL_VIEW_ID}", this.valueOrEmptyString(this.getExternalViewId())).replace("{SOURCE_ITEM_ID}", this.valueOrEmptyString(this.getSourceItemId())).replace("{SOURCE_ITEM_ID_INT}", this.valueOrEmptyString(this.getSourceItemId())).replace("{PUBLISHER_ID}", this.valueOrEmptyString(this.getPublisherId())).replace("{SDK_NAME}", encodeURIComponent(this.valueOrEmptyString(o("sdkt")))).replace("{SDK_VERSION}", this.valueOrEmptyString(o("sdkv"))).replace("{OS}", encodeURIComponent(this.valueOrEmptyString(o("os")))).replace("{USER_ID_SOURCE}", this.valueOrEmptyString(this.getUserIdSource())).replace("{FAGG}", this.valueOrEmptyString(this.videoConfig.aggLevel || 1)).replace("{CCPA_DNS}", this.valueOrEmptyString(this.getCcpaDoNotSell())).replace("{CCPA_PRIVACY}", this.valueOrEmptyString(this.getCcpaPrivacyString())).replace("{REGION}", this.valueOrEmptyString(this.getRegion())).replace("{HAS_GDPR_CONSENT}", this.valueOrEmptyString(this.getHasGDPRConsent())).replace("{TCF_VERSION}", this.valueOrEmptyString(this.getTCFVersion())).replace("{CMP_STATUS}", this.valueOrEmptyString(this.consentData.cmpStatus)).replace("{TABOOLA_NETWORK_ID}", this.valueOrEmptyString(this.getTaboolaNetworkId())).replace("{AB_TEST_PERCENT}", this.valueOrEmptyString(r("vidABTestPercent"))).replace("{AB_TEST_LAYER}", this.valueOrEmptyString(r("vidABTestLayer")))
                },
                r = function(e) {
                    try {
                        var t;
                        return TRC.URL.prototype.getParameter.call(i(), "tb_" + e, !1)
                    } catch (e) {
                        return ""
                    }
                },
                i = function() {
                    return window.TRCImpl.getItemUrlQueryString && "function" == typeof window.TRCImpl.getItemUrlQueryString ? window.TRCImpl.getItemUrlQueryString() || "" : document.location.search
                },
                o = function(e) {
                    if (n() && void 0 !== TRCImpl.additional_data.sdkd[e]) return TRCImpl.additional_data.sdkd[e]
                },
                n = function() {
                    return void 0 !== TRCImpl.additional_data && void 0 !== TRCImpl.additional_data.sdkd
                };
            TRC.VideoLoader.prototype.loadVideoByAjax = function(e, t) {
                var r = new XMLHttpRequest;
                r.open("GET", this.addProtocolToUrl(e), !0), r.setRequestHeader("Content-Type", "text/plain"), r.withCredentials = !0, r.addEventListener("readystatechange", s(t)), TRC.performance && TRC.performance.mark("videoAjaxStart", null, "", "", "videoAjaxRoundtrip", TRC.PerfEvenType.START), r.send(null)
            }, TRC.VideoLoader.prototype.addProtocolToUrl = function(e) {
                return 0 === e.indexOf("//") && (e = TRC.PROTOCOL + e), e
            };
            var s = function(e) {
                for (var t = e.split(".") || [], r = window, i = 0; i < t.length; i++) {
                    var o = t[i];
                    if (!r[o]) {
                        r = function() {};
                        break
                    }
                    r = r[o]
                }
                return r
            };
            TRC.VideoLoader.prototype.generateCallbackName = function() {
                var e, t = this.getCallbacksObjectKey();
                return TRC[t] = TRC[t] || {}, e = TRC[t].auto_gen_callback_seq = TRC[t].auto_gen_callback_seq + 1 || 1, this.CALLBACK_NAME_PREFIX + e
            }, TRC.VideoLoader.prototype.genVideoCallback = function() {
                throw new Error("This is an abstract method that should be inherited.")
            }, TRC.VideoLoader.prototype.getCallbacksObjectKey = function() {
                throw new Error("This is an abstract method that should be inherited.")
            }, TRC.VideoLoader.prototype.getItemUrlForVideo = function() {
                var e = [],
                    t = "",
                    r, i, o, n, s;
                if (!(r = this.trcManager.getItemUrl())) return null;
                if (i = this.getVideoParametersToKeep(), (o = (o = this.getWindowLocationSearch()).substr(1)).length) {
                    e = o.split("&");
                    for (var a = 0; a < e.length; a++)(n = e[a].split("=")[0]).length && -1 !== i.indexOf(n) && -1 === r.indexOf(n.concat("=")) && (t = t.concat(n, "=", e[a].split("=")[1], "&"));
                    t.length >= 1 && (t = t.substring(0, t.length - 1), t = (s = -1 === r.indexOf("?") ? "?" : "&").concat(t)), r = r.concat(t)
                }
                return r
            }, TRC.VideoLoader.prototype.getSessionData = function() {
                return this.trcResponse["session-data"]
            }, TRC.VideoLoader.prototype.getRequestId = function() {
                return this.trcResponse["req"]
            }, TRC.VideoLoader.prototype.getPlacementName = function() {
                return this.videoConfig.placement || this.placement
            }, TRC.VideoLoader.prototype.getUnifiedPlacementName = function() {
                return this.unifiedPlacement
            }, TRC.VideoLoader.prototype.getExternalViewId = function() {
                return this.videoConfig.rid
            }, TRC.VideoLoader.prototype.getOpenExchangeEnabled = function() {
                return this.videoConfig.oee
            }, TRC.VideoLoader.prototype.getSourceItemId = function() {
                return this.videoConfig.sii
            }, TRC.VideoLoader.prototype.getScriptCacheBuster = function() {
                return (new Date).getTime().toString()
            }, TRC.VideoLoader.prototype.getWindowLocationSearch = function() {
                return window.location.search || ""
            }, TRC.VideoLoader.prototype.getVideoParametersToKeep = function() {
                return this.trcManager.global["video-tag-keep-url-params"] || ["vstaging", "keyword", "customTB"]
            }, TRC.VideoLoader.prototype.getPublisherId = function() {
                return this.videoConfig.tpubid
            }, TRC.VideoLoader.prototype.getUserIdSource = function() {
                return this.videoConfig.uis
            }, TRC.VideoLoader.prototype.getCcpaDoNotSell = function() {
                return this.videoConfig.ccpaDns
            }, TRC.VideoLoader.prototype.getCcpaPrivacyString = function() {
                return this.videoConfig.ccpaPrivacy
            }, TRC.VideoLoader.prototype.getRegion = function() {
                return this.videoConfig.region
            }, TRC.VideoLoader.prototype.getHasGDPRConsent = function() {
                return this.videoConfig.hasGDPRConsent
            }, TRC.VideoLoader.prototype.getConsentDaisyBit = function() {
                return this.consentData.consentData || this.consentData.consentDaisyBit
            }, TRC.VideoLoader.prototype.getTCFVersionByConsentStr = function() {
                return this.consentData.tcString ? 2 : this.getConsentDaisyBit() ? 1 : void 0
            }, TRC.VideoLoader.prototype.getTCFVersionByMethodImpl = function() {
                return "function" == typeof window.__tcfapi ? 2 : "function" == typeof window.__cmp ? 1 : void 0
            }, TRC.VideoLoader.prototype.getTCFVersion = function() {
                return this.videoConfig.tcfVersion || this.getTCFVersionByConsentStr() || this.getTCFVersionByMethodImpl()
            }, TRC.VideoLoader.prototype.getConsentString = function() {
                return 2 == this.getTCFVersion() ? this.consentData.tcString : this.getConsentDaisyBit()
            }, TRC.VideoLoader.prototype.getTaboolaNetworkId = function() {
                return this.videoConfig.tnetid
            }, TRC.VideoLoader.prototype.getGdprApplies = function() {
                return this.trcManager.global["video-gdpr-applies-use-requires-consent"] ? this.videoConfig.gdprApplies : this.consentData.gdprApplies
            }
        }, TRC.InvokeVideoTagLoader = function() {
            TRC.VideoTagLoader = function e(t, r, i, o, n) {
                o && "rbox-only-video" === o.mode && (this.invisibleContainer = "#" + i.container.id), this.blockVideo = t.blockVideoLoader || !t["before-video-load"](), this.blockVideo || (TRC.VideoLoader.call(this, t, r, i.placement, i.container, n), this.options = i, this.videoConfig = r, this.videoConfig.isHip = this.isHip(o), this.videoConfig.rboxContainerId = o && o.id, this.unitLoader = this.initUnitLoader(r, i, o, t))
            }, TRC.VideoTagLoader.prototype = __trcObjectCreate(TRC.VideoLoader.prototype), TRC.VideoTagLoader.prototype.LOCATION_TYPES = {
                ABOVE: "above",
                BELOW: "below",
                ITEM: "item",
                STANDALONE: "standalone",
                SINGLE_MANAGER: "singleManager"
            }, TRC.VideoTagLoader.prototype.initUnitLoader = function(e, t, r, i) {
                switch (e.position) {
                    case this.LOCATION_TYPES.STANDALONE:
                        return new TRC.StandaloneVideoUnitLoader(e, t);
                    case this.LOCATION_TYPES.ITEM:
                        return new TRC.VideoAsItemUnitLoader(e, t, r);
                    case this.LOCATION_TYPES.SINGLE_MANAGER:
                        return new TRC.SingleVideoManagerUnitLoader(e, i);
                    case this.LOCATION_TYPES.ABOVE:
                    case this.LOCATION_TYPES.BELOW:
                        return new TRC.WidgetAdjacentVideoUnitLoader(e);
                    default:
                        return new TRC.SliderVideoUnitLoader(e)
                }
            }, TRC.VideoTagLoader.prototype.setGlobalUnitParams = function(e) {
                this.trcManager && this.trcManager.framework && "mobile-sdk" === this.trcManager.framework && (e.set("isSDK", !0), e.set("widgetPlacement", this.getPlacementName())), this.options && this.options.isFeed && this.options.container && e.set("feedContainer", this.options.container);
                var t = this.getPlacementName();
                this.options && this.options.sca && this.isFeedHasSC(this.options.sca, t) && e.set("placementWithScAdjacency", t), TRC.filledImpressions = TRC.filledImpressions || [], e.on("filledImpression", function(e) {
                    TRC.filledImpressions.push(e)
                })
            }, TRC.VideoTagLoader.prototype.getCallbacksObjectKey = function() {
                return "videoTagCallbacks"
            }, TRC.VideoTagLoader.prototype.genVideoCallback = function() {
                var e = this.generateCallbackName(),
                    t = this;
                return TRC.videoTagCallbacks[e] = function(e) {
                    if (TRCImpl.global["enable-video-ajax"]) {
                        if (!t.isXHRDone(e.target)) return;
                        TRC.performance && TRC.performance.mark("videoAjaxStop", null, "", "", "videoAjaxRoundtrip", TRC.PerfEvenType.STOP), e = t.parseTBResponse(e.target.responseText)
                    }
                    var r, i;
                    if (TRC.performance && TRC.performance.mark("videoJsonpRequestStop", null, "", "", "videoJsonpRequestTime", TRC.PerfEvenType.STOP), (e = e || {}).tags && e.tags[0]) {
                        (r = t.getLiteUnitVersion(e.tags[0].liteUnitBootSrc || t.videoConfig.liteUnitBootSrc)) || (r = e.tags[0].unitBootSrc || t.videoConfig.unitBootSrc), window.TRC.liteUnit && (r = t.getLiteUnitFromTRCConfig(r));
                        var o = t.getVideoMacrosLiteUnitVersion(e.tags[0].url);
                        o && -1 === window.location.href.indexOf("static-test-files.taboolasyndication") && (r = t.replaceVersion(r, o));
                        var n = TRC.isAMP ? window.context.location.search : window.TRCImpl.getItemUrlQueryString() || "";
                        (n.indexOf("tb_liteUnitUrl") > -1 || n.indexOf("tb_liteUnitVersion") > -1) && (r = t.getVersionFromUrl(r, n)), (i = document.createElement("script")).src = r, i.onload = function() {
                            window.TRC = window.TRC || {}, window.TRC.liteUnit = window.TRC.liteUnit || {}, TRCImpl.global["enable-mw-no-items-exit"] ? window.TRC.liteUnit.abTest = "scadjtst1_vA" : TRCImpl.global["enable-mw-content-ready-margins"] ? window.TRC.liteUnit.abTest = "scadjtst1_vB" : TRCImpl.global["enable-mw-control"] && (window.TRC.liteUnit.abTest = "scadjtst1_vC"), window.TRC.liteUnit && window.TRC.liteUnit.abTest && (window.cmTag.set("pixels.startWithABT.isFire", !0), window.cmTag.push("abTest", window.TRC.liteUnit.abTest));
                            var r = t.videoConfig.containerSelector || t.unitLoader.getVideoContainerSelector(t.taboolaContainer) || t.invisibleContainer,
                                i;
                            r && (window.cmTag.set("parentSelector", r), i = document.querySelector(r));
                            var o = t.unitLoader.loadUnit(e, i);
                            o && t.setGlobalUnitParams(o)
                        }, document.getElementsByTagName("head")[0].appendChild(i)
                    }
                }, "TRC." + this.getCallbacksObjectKey() + "." + e
            }, TRC.VideoTagLoader.prototype.isXHRDone = function(e) {
                return 200 === e.status && e.readyState === XMLHttpRequest.DONE
            }, TRC.VideoTagLoader.prototype.parseTBResponse = function(e) {
                var t;
                try {
                    TRC.performance && TRC.performance.mark("videoAjaxParsingStart", null, "", "", "videoAjaxParsing", TRC.PerfEvenType.START), t = JSON.parse(this.extractJSONFromResponse(e))
                } catch (e) {
                    t = void 0, __trcError("video debug: VideoTagLoader exception " + (TRCImpl.experimentsData && TRCImpl.experimentsData["2"] || ""), e)
                } finally {
                    TRC.performance && TRC.performance.mark("videoAjaxParsingStop", null, "", "", "videoAjaxParsing", TRC.PerfEvenType.STOP)
                }
                return t
            }, TRC.VideoTagLoader.prototype.extractJSONFromResponse = function(e) {
                return e.slice(e.indexOf("(") + 1, e.lastIndexOf(")"))
            }, TRC.VideoTagLoader.prototype.getLiteUnitVersion = function(e) {
                if (e && "lite-unit-boot-src" !== (e = decodeURIComponent(e))) {
                    var t = this.getUnitType();
                    if (t) return e.replace("{{UNIT_TYPE}}", t).replace("{{PLATFORM}}", TRC.dom.isDesktop() ? "Desktop" : "Mobile")
                }
                return ""
            }, TRC.VideoTagLoader.prototype.getUnitType = function() {
                for (var e in this.UNIT_TYPES)
                    if (this.UNIT_TYPES[e].indexOf(this.videoConfig.unitType) > -1) return e;
                return ""
            }, TRC.VideoTagLoader.prototype.UNIT_TYPES = {
                Slider: ["46", "59"],
                Inline: ["193", "198", "199", "194", "216", "48", "32", "215"],
                WidgetItem: ["226", "227", "248", "4", "5"],
                FeedManager: ["244", "245", "247"],
                VideoForPerformance: ["232", "233"],
                RecoReelWidget: ["254", "255"],
                StoriesWidget: ["143", "144"],
                Instream: ["107", "108"]
            }, TRC.VideoTagLoader.prototype.getLiteUnitFromTRCConfig = function(e) {
                return window.TRC.liteUnit.liteUnitVersion && (e = this.getLiteUnitVersion(window.TRC.liteUnit.liteUnitVersion)), window.TRC.liteUnit.version && (e = this.replaceVersion(e, window.TRC.liteUnit.version)), e
            }, TRC.VideoTagLoader.prototype.replaceVersion = function(e, t) {
                return e.replace(/\d+[_|.]\d+[_|.]\d+/, t)
            }, TRC.VideoTagLoader.prototype.getVideoMacrosLiteUnitVersion = function(e) {
                for (var t = new RegExp("liteUnitVersion", "gi"), r = void 0; t.exec(e);) r = t.lastIndex;
                if (void 0 !== r) {
                    var i = (e = (e = e.substring(r)).substring(2, e.indexOf(");"))).replace(/\'|\"|\s+/g, "");
                    if (i) return i
                }
            }, TRC.VideoTagLoader.prototype.getVersionFromUrl = function(e, t) {
                var r = void 0,
                    i = void 0;
                return t.split("&").forEach(function(e) {
                    e.indexOf("tb_liteUnitUrl") > -1 ? r = e.split("=")[1] : e.indexOf("tb_liteUnitVersion") > -1 && (i = e.split("=")[1])
                }), r && (e = this.getLiteUnitVersion(r)), i && (e = this.replaceVersion(e, i)), e
            }, TRC.VideoTagLoader.prototype.isFeedHasSC = function(e, t) {
                for (var r = 0; r < e.length; r++)
                    if (e[r] === t) return !0;
                return !1
            }, TRC.VideoTagLoader.prototype.isHip = function(e) {
                var t = ["4", "254"];
                if (!e || !e.trcResponse || !e.trcResponse.vtag) return !1;
                var r = e.trcResponse.vtag;
                return (!r.advancedVideoConfiguration || "true" !== r.advancedVideoConfiguration["mid-article-hip-opt-out"]) && r.unitType && t.indexOf(r.unitType.toString()) > -1
            }
        }, (() => {
            class e {
                constructor() {
                    this.virtualPlacementsMap = {}, this.response = {}
                }
                static handleVirtualPlacement(e, t) {
                    const {
                        virtualPlacementsManager: r
                    } = e, i = r.response[t];
                    if (i) {
                        const o = __trcCopyProps(i, {});
                        o.id = t, r.createVirtualPlacement(o, t, e)
                    }
                }
                createVirtualPlacement(e, t, r) {
                    if (!e || this.virtualPlacementsMap[t]) return;
                    this.virtualPlacementsMap[t] = e;
                    const i = r.getOrCreateContainer(e);
                    r.setPlacementDataInPreloadRequest(t, i)
                }
            }
            TRC.VirtualPlacementsManager = e
        })(), TRC.visibility = TRC.visibility || {}, TRC.visibility = function(e, t) {
            function r(e) {
                var t = TRC.dom.getViewportVerticalRange(),
                    r = TRC.dom.getElementRect(e);
                return r.top < 0 ? Math.max(r.top, r.bottom) : t.max - r.top - t.min
            }

            function i(e) {
                var t = TRC.dom.getViewportHorizontalRange(),
                    r = TRC.dom.getElementRect(e);
                return r.left < 0 ? Math.max(r.left, r.right) : t.max - r.left - t.min
            }
            var o = {
                getViewPortOffsets: function(e) {
                    var t, o;
                    return {
                        verticalOffset: r(e),
                        horizontalOffset: i(e)
                    }
                },
                getMinViewPortOffsets: function(e) {
                    var t = this.getViewPortOffsets(e);
                    return t.verticalOffset < 0 && t.horizontalOffset < 0 ? Math.max(t.verticalOffset, t.horizontalOffset) : Math.min(t.verticalOffset, t.horizontalOffset)
                },
                isInViewPortWithOffset: function(e, t) {
                    var r;
                    return !(this.getMinViewPortOffsets(e) < (t = t || 0))
                }
            };
            return e._trcIsUTactive && (o.getVerticalVPShift = r, o.getHorizontalVPShift = i), o
        }(window, document), (() => {
            const e = {
                init() {
                    this.initiated = !0, this.selector = ".video-title", TRC.listen("trcResponseHandled", this.checkEncoding.bind(this))
                },
                getText(e) {
                    const t = document.querySelector(e);
                    return t ? t.textContent : ""
                },
                searchBadEncoding(e) {
                    const t = /×.×.×.×/;
                    return t.exec(e)
                },
                checkEncoding() {
                    if (TRCImpl.global["disable-bad-encoding-report"]) return;
                    const e = this.getText(this.selector),
                        t = this.searchBadEncoding(e);
                    t && __trcWarn(`Found bad encoding: ${t}`)
                }
            };
            e.init(), window._trcIsUTactive && (TRC.widgetBadEncodingReporter = e)
        })(), (() => {
            const e = {
                defaultMaxSlotsGeometryPerPage: 50,
                maxDefaultThrottleNumber: 1e3,
                defaultThresholdThrottleNumber: 10
            };
            class t {
                constructor(e) {
                    this.rBoxWidget = e, this.trcManager = this.rBoxWidget.trc, this.widgetContainer = this.rBoxWidget.container, this.widgetItems = this.rBoxWidget.boxes, this.uiModeName = this.rBoxWidget.mode_name, this.MIN_VISIBLE_ITMES = this.trcManager.global["min-visible-items"] || 1, this.init()
                }
                init() {
                    this.resetVisibilityData(), this.rBoxWidget.isProviderIframe || (this.isManualVisibilityMode() ? TRC.listen(`visible::${this.rBoxWidget.orig_placement}`, this.reportManualVisibilityIfVisibleByRects.trcBind(this)) : this.initVisibilityObserver())
                }
                resetVisibilityData() {
                    this.organicVisibleItems = {}, this.sponsoredVisibleItems = {}, this.exchangeVisibleItems = {}, this.nativeVisibleItems = {}, this.visibleItemsIdxList = []
                }
                isManualVisibilityMode() {
                    return !((this.rBoxWidget.isFeedCard || window.AMP_MODE) && "mobile-sdk" !== this.trcManager.framework || !this.rBoxWidget.manualVisibilityTrigger && !this.trcManager.manualVisibilityTrigger || !this.trcManager.global["enable-manual-visible"])
                }
                reportVisibility() {
                    const e = new TRC.PlacementEventPostData,
                        t = this.trcManager.getProperty(this.uiModeName, "thumbnail-position", this.rBoxWidget.propertiesOverride),
                        r = [],
                        i = [],
                        o = [],
                        n = [],
                        s = [],
                        a = [],
                        l = [],
                        c = [],
                        d = [],
                        h = [],
                        p = [];
                    if (!this.visibilityReported && (Object.keys(this.organicVisibleItems).forEach(e => {
                            r.push(this.organicVisibleItems[e].id), o.push(this.organicVisibleItems[e].type)
                        }), Object.keys(this.sponsoredVisibleItems).forEach(e => {
                            i.push(this.sponsoredVisibleItems[e].id), n.push(this.sponsoredVisibleItems[e].type), l.push(this.sponsoredVisibleItems[e].publisher)
                        }), Object.keys(this.exchangeVisibleItems).forEach(e => {
                            s.push(this.exchangeVisibleItems[e].id), a.push(this.exchangeVisibleItems[e].type), c.push(this.exchangeVisibleItems[e].publisher)
                        }), Object.keys(this.nativeVisibleItems).forEach(e => {
                            d.push(this.nativeVisibleItems[e].id), h.push(this.nativeVisibleItems[e].type), p.push(this.nativeVisibleItems[e].publisher)
                        }), r.length > 0 || i.length > 0 || s.length > 0 || d.length > 0 || this.rBoxWidget.isProviderIframe)) {
                        TRC.pConsole(this.uiModeName, "info", "sending new visible event", ""), e.setFullItemList(this.rBoxWidget.getJsonTargetItemsList(this.rBoxWidget.fullEventItemsHash)), this.trcManager.enablePageGeometry && this.trcManager.addGeometryPageData(e, this.trcManager.global["page-geometry-selectors"]), this.trcManager.enablePageGeometryExtended && this.trcManager.addGeometryExtendedPageData(e), this.trcManager.enablePlacementGeometry && this.trcManager.addGeometryPlacementData(e, this.widgetContainer), TRC.EventsAPI.dispatchVisible(this.rBoxWidget.response.trc, this);
                        const u = {
                            il: r.join(","),
                            sil: i.join(","),
                            ilt: o.join(","),
                            navil: d.join(","),
                            silt: n.join(","),
                            ntil: s.join(","),
                            ntilt: a.join(","),
                            navilt: h.join(","),
                            niltp: c.join(","),
                            siltp: l.join(","),
                            naviltp: p.join(","),
                            tp: t
                        };
                        this.processSpatialSlotsData(u), this.rBoxWidget.sendEvent("visible", u, e.getAll(), !0), !this.trcManager.global["disable-external-visibility-once"] && this.externalVisibleSent || (this.rBoxWidget.sendPlacementTrackingPixelsOnce("vi"), this.externalVisibleSent = !0), this.trcManager.global["disable-runHook"] ? (this.trcManager.getFunction(this.uiModeName, "after-visible", this.rBoxWidget.propertiesOverride, this.rBoxWidget.internalContainer, this), TRC.CustomModulesManager.runHook("after-visible", this.uiModeName, this, this.rBoxWidget.propertiesOverride, this.rBoxWidget.internalContainer, this)) : this.trcManager.runHook(this, this.uiModeName, "after-visible", this.rBoxWidget.propertiesOverride, !0, this.rBoxWidget.internalContainer, this), this.visibilityReported = !0
                    }
                }
                static isSpatialEnabled(e) {
                    return TRC.util.isPercentEnabled(e.global, "enable-spatial-data-per-page") || e.spatialSlotsThrottleTHPerPage
                }
                processSpatialSlotsData(r) {
                    if (this.rBoxWidget.isProviderIframe) return;
                    if (!t.isSpatialEnabled(this.trcManager)) return;
                    if (!this.isThrottleValidated()) return;
                    const i = this.trcManager.global["max-slots-geometry-per-page"] || e.defaultMaxSlotsGeometryPerPage,
                        o = [],
                        n = [];
                    let s = null;
                    this.trcManager.enableSlotsSaliency && (s = window.getComputedStyle(window.document.body)), this.visibleItemsIdxList.slice(-i).forEach(e => {
                        const r = this.rBoxWidget.boxes[e];
                        this.trcManager.enableSlotsGeometry && t.processVisibleItemGeometry(r, o), this.trcManager.enableSlotsSaliency && t.processVisibleItemSaliency(r, s, n)
                    });
                    const a = [];
                    if (0 === o.length && n.length > 0) {
                        const e = n.map(e => e.id);
                        e.forEach((e, t) => {
                            const r = n[t];
                            delete r.id, a.push({
                                id: e,
                                ssd: r
                            })
                        }), r.spatialData = __trcJSONify(a)
                    } else if (o.length > 0 && 0 === n.length) {
                        const e = o.map(e => e.id);
                        e.forEach((e, t) => {
                            const r = o[t];
                            delete r.id, a.push({
                                id: e,
                                sgd: r
                            })
                        }), r.spatialData = __trcJSONify(a)
                    } else if (o.length > 0 && n.length > 0) {
                        const e = o.map(e => e.id);
                        e.forEach((e, t) => {
                            const r = o[t];
                            delete r.id;
                            const i = n[t];
                            delete i.id, a.push({
                                id: e,
                                sgd: r,
                                ssd: i
                            })
                        }), r.spatialData = __trcJSONify(a)
                    }
                }
                isThrottleValidated() {
                    const t = this.trcManager.spatialSlotsThrottleMax || e.maxDefaultThrottleNumber;
                    let r = this.trcManager.spatialSlotsThrottleTH;
                    if ("number" != typeof r && (r = e.defaultThresholdThrottleNumber), r !== t) {
                        if (!(r > 0)) return !1; {
                            const e = Math.floor(Math.random() * t);
                            if (e > r) return !1
                        }
                    }
                    return !0
                }
                static processVisibleItemGeometry(e, t) {
                    let r = {
                        id: -1,
                        x: -1,
                        y: -1,
                        h: -1,
                        w: -1
                    };
                    if (e.lastVisibleBoundingClientRect) {
                        const t = (e.lastVisibleBoundingClientRect.left + e.lastVisibleBoundingClientRect.pageXOffset).toFixed(2),
                            i = (e.lastVisibleBoundingClientRect.top + e.lastVisibleBoundingClientRect.pageYOffset).toFixed(2);
                        r = {
                            id: e.video_data["item-id"],
                            x: t,
                            y: i,
                            h: e.lastVisibleBoundingClientRect.height.toFixed(2),
                            w: e.lastVisibleBoundingClientRect.width.toFixed(2)
                        }
                    }
                    t.push(r)
                }
                static processVisibleItemSaliency(e, t, r) {
                    const i = window.getComputedStyle(e),
                        o = {
                            id: e.video_data["item-id"],
                            fsi: i.getPropertyValue("font-size"),
                            fst: i.getPropertyValue("font-style"),
                            fn: i.getPropertyValue("font-family"),
                            cbg: i.getPropertyValue("background-color"),
                            dbg: t.getPropertyValue("background-color")
                        };
                    r.push(o)
                }
                calculateVisibleItems(e, r, i) {
                    const o = i || this.rBoxWidget.boxes;
                    let n = 0;
                    return this.visibleItemsIdxList = [], o.forEach((i, o) => {
                        const s = i.video_data || i,
                            a = this.rBoxWidget.fullEventItemsHash[s["item-id"]];
                        r || i.isVisible || e && this.isElementVisibleByRects(i, e) ? (s["is-syndicated"] ? t.addVisibleItemToList(this.sponsoredVisibleItems, s, "is-syndicated") : s["is-in-network"] ? t.addVisibleItemToList(this.exchangeVisibleItems, s, "is-in-network") : s["is-native"] ? t.addVisibleItemToList(this.nativeVisibleItems, s, "is-native") : t.addVisibleItemToList(this.organicVisibleItems, s, "is-organic"), a.tids = "vp", n++, this.visibleItemsIdxList.push(o)) : "vp" !== a.tids && (a.tids = "nvp")
                    }), n
                }
                static addVisibleItemToList(e, t) {
                    e[t["item-id"]] = {
                        id: t["item-id"],
                        type: t.type,
                        publisher: t.publisher
                    }
                }
                isVisibleWidget() {
                    return this.calculateVisibleItems() >= this.MIN_VISIBLE_ITMES || this.widgetContainer.isVisible
                }
                initVisibilityObserver() {
                    const e = this.reportVisibility.trcBind(this),
                        t = this.isVisibleWidget.trcBind(this);
                    if (TRC.tlf && console.time(`visibility - ${this.uiModeName}`), this.resetVisibilityData(), !this.isVisibilityObserverInitialized) {
                        const r = {
                            targetElement: this.widgetContainer,
                            enableDelayedVisibilityCheck: !0,
                            visibleWidgetPredicate: t,
                            onTrigger: e,
                            onEnter: () => {
                                TRC.util.isPercentEnabled(this.trcManager.global, "guarantee-card-clash-detection") && TRC.ModuleLoader.load("card-interference-detector", TRC.CardInterferenceDetector, () => {
                                    TRC.CardInterferenceDetector.detectCardInterrupted(this.widgetContainer)
                                })
                            }
                        };
                        TRC.intersections.isInViewPort(r);
                        const i = this.rBoxWidget.listContainer && this.rBoxWidget.listContainer.heatmap;
                        this.widgetItems.forEach(r => {
                            const o = {
                                targetElement: r,
                                enableDelayedVisibilityCheck: !0,
                                visibleWidgetPredicate: t,
                                onTrigger: e,
                                onEnter: () => i && i.captureItemTime(r.video_data.id)
                            };
                            TRC.intersections.isInViewPort(o)
                        }), this.isVisibilityObserverInitialized = !0
                    }
                    TRC.tlf && console.timeEnd(`visibility - ${this.uiModeName}`)
                }
                reportManualVisibilityIfVisibleByRects(e) {
                    (this.calculateVisibleItems(e) >= this.MIN_VISIBLE_ITMES || this.isElementVisibleByRects(this.widgetContainer, e)) && this.reportVisibility()
                }
                isElementVisibleByRects(e, r) {
                    const i = (e = e || this.widgetContainer).getBoundingClientRect();
                    if (!t.hasVolume(i)) return !1;
                    const o = this.rBoxWidget.getBoundingClientRect(i, r),
                        n = o.left + Math.round((o.right - o.left) / 2),
                        s = o.top + Math.round((o.bottom - o.top) / 2),
                        a = TRC.Browser.operaUpto(10.1) || TRC.Browser.safariUpto(4) ? document.elementFromPoint(n + document.body.scrollLeft, s + document.body.scrollTop) : document.elementFromPoint(n, s),
                        l = t.getRootBounds(r),
                        c = n > 0 && n < l.maxX && s > 0 && s < l.maxY;
                    return r ? c : c && a && t.isAncestor(a, e)
                }
                static hasVolume(e) {
                    return e.top !== e.bottom
                }
                static getRootBounds(e) {
                    const t = {};
                    return e ? (t.maxX = e.rootBounds.width, t.maxY = e.rootBounds.height, t) : (t.maxX = "CSS1Compat" === document.compatMode && document.documentElement.clientWidth || document.body.clientWidth, t.maxY = "CSS1Compat" === document.compatMode && document.documentElement.clientHeight || document.body.clientHeight, t)
                }
                static isAncestor(e, r) {
                    return !(!e.parentNode || e.parentNode === document.documentElement && e !== r) && (e === r || t.isAncestor(e.parentNode, r))
                }
            }
            TRC.WidgetVisibilityReporter = t
        })(), (() => {
            const e = -1;
            class t {
                constructor(e) {
                    this.initialUrl = e.initialUrl, this.initialUrlTimeout = e.initialUrlTimeout, this.initialUrl && (this.initialUrlPending = !0);
                    const r = new Worker(t._buildBlob(this.initialUrl, this.initialUrlTimeout));
                    TRC.URL = TRC.URL || TRC.webkitURL, r.onmessage = this.onWorkerMessage.bind(this), this.worker = r, this.contextCallbacks = {}, this.context = 0
                }
                handshake(e) {
                    const t = {
                        type: "handshake",
                        _context: this._generateContextId()
                    };
                    this.contextCallbacks[t._context] = {
                        resolve: e
                    }, this.worker.postMessage(t)
                }
                xhr(t, r, i, o) {
                    const n = {
                        url: t,
                        timeout: r || 8e3,
                        type: "xhr",
                        _context: this._generateContextId()
                    };
                    t === this.initialUrl && this.initialUrlPending && (n._context = e), this.initialUrlPending = !1, this.contextCallbacks[n._context] = {
                        resolve: i,
                        reject: o
                    }, n._context !== e && this.worker.postMessage(n)
                }
                onWorkerMessage(e) {
                    const t = e.data,
                        {
                            _context: r,
                            type: i,
                            error: o
                        } = t,
                        n = this.contextCallbacks[r] || {},
                        {
                            resolve: s,
                            reject: a
                        } = n,
                        l = "xhrBlob" === i ? t.buffer : t.result;
                    s && "function" == typeof s && !o ? s(l || {}) : "function" == typeof a && a(), delete this.contextCallbacks[r]
                }
                _generateContextId() {
                    return ++this.context
                }
                static _buildBlob(e, t) {
                    e = e || "";
                    let r = `/*! 20211221-3-RELEASE */\n\nfunction onHandshake(t){const e={_context:t,type:"handshake"};self.postMessage(e)}function fetch(t,e,o,n){t=t.replace("/trc/3/json?","/trc/3/json?wrkr=1&");const r=new XMLHttpRequest;r.withCredentials=!0,r.onreadystatechange=function(){r.readyState<4||200!==r.status||4===r.readyState&&o(r)},r.onerror=function(t){(new Image).src="http://trc.taboola.com/xhrworker-errors/log/2/debug?tim=10:24:11.81&type=xhrerror",n(t)},r.ontimeout=function(t){(new Image).src="http://trc.taboola.com/xhrworker-errors/log/2/debug?tim=10:24:11.81&type=xhrtimeout",n(t)},r.open("GET",t,!0),e&&(r.timeout=e),r.send("")}self.addEventListener("message",t=>{const e=t.data,{url:o,timeout:n,_context:r,type:s}=e;if("handshake"===s)return onHandshake(r);fetch(o,n,t=>{const e=t.responseText,o={result:e,type:s,_context:r};self.postMessage(o)},()=>{const t={error:!0,type:s,_context:r};self.postMessage(t)})},!1);const initialUrl="%%initialUrl%%",initialTimeout="%%timeout%%"||8e3;initialUrl&&fetch(initialUrl,initialTimeout,t=>{const e=t.responseText,o={result:e,_context:-1,type:"xhr"};postMessage(o)},()=>{const t={_context:-1,error:!0,type:"xhr"};postMessage(t)});`;
                    r = (r = r.replace("%%initialUrl%%", e)).replace("%%timeout%%", t || "");
                    const i = new Blob([r], {
                        type: "text/javascript"
                    });
                    return window.URL.createObjectURL(i)
                }
            }
            TRC.initWorkerIfAvailable = function(e, r) {
                if (TRC.workerInited = !0, !TRC.worker && window.Worker && window.URL && window.URL.createObjectURL && TRCImpl.global["xhr-worker"]) {
                    const i = new t({
                        initialUrl: e,
                        timeout: r
                    });
                    TRC.worker = i;
                    const o = setTimeout(() => {
                        __trcError("worker timeout"), n = (() => {}), TRC.worker = !1
                    }, 200);
                    let n = () => clearTimeout(o);
                    i.handshake(() => n())
                }
            }, TRC.WebWorker = t
        })()
}(),
function(e, t) {
    e.TRC = e.TRC || {};
    var r = function() {
            return !0
        },
        i = function(r, i, o, n) {
            var s = r + "/" + encodeURIComponent(o || e.TRC.publisherId) + "/log/3" + "/" + i;
            return n && (s += "?" + t.TRCLogger.formatParams(n)), s
        },
        o = function(t, i) {
            var o, n = new(e.XDomainRequest || e.XMLHttpRequest);
            return n.open(t, i), n.onload = r, n.onerror = r, n.ontimeout = r, n.onprogress = r, n.withCredentials = !0, n
        };
    e.TRC.TRCLogger = t.TRCLogger = {
        post: function(e, r, n, s, a) {
            var l = i(e, r, s, a),
                c = o("POST", l);
            c.setRequestHeader && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(t.TRCLogger.formatParams(n))
        },
        get: function(e, t, r, n) {
            var s = i(e, t, n, r),
                a;
            o("GET", s).send()
        },
        formatParams: function(e) {
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
            return t.join("&")
        }
    }
}(window, window["${jsScope}".indexOf("{jsScope}") >= 0 ? "TRC" : "${jsScope}"]),
function(win, doc) {
    TRC.performance && TRC.performance.mark("4.0");
    var protocol = TRC.PROTOCOL,
        getParameter = TRC.URL.prototype.getParameter,
        taboolaConsole = getParameter.call(location.href, "trc_console"),
        timers, div;

    function invokeInheritedModules() {
        TRC.InvokeVideoLoader(), TRC.InvokePVideoLoader(), TRC.InvokeVideoTagLoader()
    }
    win.trc_debug_level = getParameter.call(location.href, "taboola-debug"), TRC.tlf = !!getParameter.call(location.href, "taboola-perf"), TRC.taboola_yield_report = !!getParameter.call(location.href, "taboola-yield-report"), taboolaConsole && "yes" === taboolaConsole.toLowerCase() && (TRC.taboolaConsole = !0, TRC.Manager.prototype.loadExternal("http://c2.taboola.com/console/console_loader.js", "js")), isNaN(parseInt(win.trc_debug_level)) && (trc_debug_level = 2), TRC.callbacks = {
        mute: function() {
            var e = TRCImpl.boxes,
                t;
            if (TRCImpl.clearPreloadRequestLoaderAndCallNext(), TRC.Timeout.reset(), e)
                for (t in e) e[t].request = null;
            TRC.EventsAPI.dispatchNoContent(TRCImpl.NO_CONTENT.mute), TRC.pConsole("warning - mute!", "warn", "server returned mute", "")
        }
    }, TRC.trc_drawRBox = !1, TRC.listOrigin = new TRC.ListOriginBuilder, TRC.baseDomain = TRC.baseDomain || protocol + "//cdn.taboola.com/libtrc/" + TRC.publisherId + "/", TRC.prototype = TRC.prototype || {}, TRC.Interval = function() {
        var intervals = {};
        return {
            set: function(callback, interval) {
                var aArgs = Array.prototype.slice.call(arguments, 2),
                    intervalId = win.setInterval(function() {
                        "function" == typeof callback ? callback.apply(null, aArgs) : eval(callback)
                    }, interval);
                return intervals[intervalId.toString()] = 1, intervalId
            },
            clear: function(e) {
                e && (win.clearInterval(e), delete intervals[e.toString()])
            },
            reset: function() {
                for (intervalId in intervals) win.clearInterval(intervalId), delete intervals[intervalId.toString()]
            }
        }
    }(), TRC.Timeout = (timers = {}, {
        set: function(e, t) {
            var r = win.setTimeout(function() {
                delete timers[r.toString()], e()
            }, t);
            return timers[r.toString()] = 1, r
        },
        clear: function(e) {
            e && (win.clearTimeout(e), delete timers[e.toString()])
        },
        reset: function() {
            var e;
            for (e in timers) win.clearTimeout(e), delete timers[e.toString()]
        }
    }), TRC.trcReady = function() {
        try {
            TRC.pConsole("page", "debug", "libtrc : calling TRC.ready", ""), invokeInheritedModules(), TRC.implLoaded = !0;
            var e = TRC.ready({
                style: ".trc_rbox_container{direction:ltr;text-align:left}.trc_rbox_container [class*=span]{float:none;margin-left:0}.trc_multi_widget_container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.trc_multi_widget_container .trc_rbox_div{margin:0}.trc_rbox_header{border:0 solid;overflow:hidden;vertical-align:middle}.trc_rbox_container .trc_img{display:inline-block!important}.trc_rbox_header_icon_div{display:table-cell;vertical-align:baseline}.trc_rbox_header .trc_rbox_header_icon_div .trc_rbox_header_icon_img{vertical-align:middle;width:auto}.trc_rbox_header_icon_span{display:inline-table}.in_trc_header{position:relative!important;float:right;margin:0}#trc_rbox_css_loaded{overflow:hidden;width:0;height:0}.trc_rbox{margin-top:0}.trc_rbox_div{margin:0 0 3px;direction:ltr;padding:0;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;overflow:auto;position:relative;width:auto;border:solid #ccc 1px}.loading-animation span{display:block}.videoCube{zoom:1;cursor:pointer;float:none;overflow:hidden;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.videoCube_hover,div.videoCube:hover{cursor:pointer}.videoCube span.video-title:hover,.videoCube_hover span.video-title{text-decoration:underline}.videoCube a{text-decoration:none;border:0;color:#000;cursor:pointer}.videoCube a,.videoCube a:hover,.videoCube a:link,.videoCube_hover a{text-decoration:none!important;outline:0}.videoCube a .thumbBlock{float:left;display:block;overflow:hidden!important}.videoCube a img,.videoCube img{border:0;display:block;margin:0;height:auto;width:auto}.videoCube .video-label{display:block;overflow:hidden}.videoCube .video-label{width:auto!important;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.videoCube .video-label-box.label-box-with-title-icon{display:table}.video-icon-container{float:left;display:table-cell;vertical-align:baseline}.video-icon-img{vertical-align:middle}.videoCube .video-duration{height:0;float:left;position:relative;color:#fff;font-size:11px}.videoCube .video-duration dt{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;background-color:#000;opacity:.6}.videoCube span.video-label.trc_ellipsis{position:relative;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.videoCube span.video-label.trc-smart-ellipsis{position:relative;overflow:hidden}.videoCube span.video-label.trc-smart-ellipsis ins{display:inline-block;text-decoration:inherit}.videoCube span.video-label.trc-smart-ellipsis.tbl-ltr-label{direction:ltr}.videoCube span.video-label.trc-smart-ellipsis.tbl-ltr-label ins{float:left;margin-right:5px;direction:ltr}.videoCube span.video-label.trc-smart-ellipsis.tbl-rtl-label{float:right;direction:rtl;width:100%!important}.videoCube span.video-label.trc-smart-ellipsis.tbl-rtl-label ins{float:right;margin-left:5px;direction:rtl}.videoCube span.video-label.trc-smart-ellipsis ins.lastLineEllipsis{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;width:100%}.video-duration.video-duration-detail div{color:#fff}.trc_rbox .sponsored{position:relative;display:block;overflow:visible;height:auto;width:auto;padding-right:0;text-align:right;font-size:9px}.trc_rbox_div{height:410px}.videoCube{direction:ltr;font-size:11px;margin:0;color:#000;border-width:0}.videoCube.vertical:first-child{border-top:0;margin-top:0}.videoCube.horizontal:first-child{border-left:0;margin-left:0}.videoCube_hover,div.videoCube:hover{background-color:#ebf0ff;color:#000}.videoCube .thumbBlock{margin:0;border-style:solid}.videoCube a img,.videoCube img{border-color:#ececec}.videoCube .video-label-box{margin-left:81px}.videoCube .video-label dt{font-weight:700}.videoCube .video-title{height:auto;margin-bottom:3px;white-space:normal}.videoCube .trc_inline_detail_spacer{display:inline-block;white-space:pre}.loading-animation{font-family:sans;font-size:1.5em;text-align:center;color:gray;height:100%}.trc_rbox_header{font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;text-decoration:none;color:#000}.trc_header_right_part{position:absolute;left:50%;top:0}.branding_div{overflow:visible;float:right}.branding_div img{height:20px}.videoCube .branding .logoDiv{font-size:inherit;line-height:inherit;background:0 0;margin:0;padding:0}.videoCube .branding .logoDiv a{vertical-align:inherit;color:inherit;line-height:inherit}.videoCube .branding .logoDiv a span{vertical-align:inherit}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored{display:inline-block;float:none}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored.align-disclosure-right{float:right;margin-left:auto;padding-left:2px}.videoCube .video-label-box .branding.composite-branding{display:-webkit-box;display:-ms-flexbox;display:flex}.branding.composite-branding>*{display:inline-block;vertical-align:bottom}.branding .branding-separator{margin:0 2px;font-weight:400}.branding .branding-inner{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.video-label-box span.branding.inline-branding{display:inline-block}.trc_related_container div.horizontal{float:left;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.trc_related_container DIV.videoCube.thumbnail_bottom .thumbBlock,.trc_related_container DIV.videoCube.thumbnail_top .thumbBlock{float:none}.vidiscovery-note{display:none}.videoCube .thumbBlock .trc_sponsored_overlay_base{display:block;width:auto;margin-left:0;position:absolute;color:#fff!important}.videoCube .thumbBlock .trc_sponsored_overlay{opacity:.6;display:block;position:absolute}.videoCube .thumbBlock .trc_sponsored_overlay_base .sponsored{position:relative;display:block;overflow:visible;width:auto;text-align:center;padding:0 5px;margin-top:0}.videoCube .thumbBlock .trc_sponsored_overlay_base.round .trc_sponsored_overlay{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px}.videoCube .thumbBlock .trc_sponsored_overlay_base.round{margin-left:4px}.thumbnail-emblem,.videoCube .thumbnail-overlay,.videoCube:hover .thumbnail-overlay,.videoCube_hover .thumbnail-overlay{position:absolute;background:transparent no-repeat;background-size:contain;z-index:50}.thumbnail_bottom{padding-bottom:8px}.trc_related_container .logoDiv{font-family:Arial,Helvetica,sans-serif;white-space:nowrap;font-size:9px}.trc_related_container .logoDiv a{font-size:9px;text-decoration:none!important;color:#000;margin-right:1px;vertical-align:text-bottom}.logoDiv a span:hover{text-decoration:underline}.trc_rbox_header .logoDiv{font-size:1em}.trc_tl .trc_rbox_header .logoDiv{position:relative;z-index:1}.trc_tl .trc_rbox_header_span .trc_header_right_column{position:absolute;width:48%;left:52%;top:0}.trc_tl .trc_rbox_div .videoCube.horizontal{clear:left}.trc_tl .trc_rbox_div .videoCube.trc_tl_right_col{float:none;clear:right;margin-left:auto}.trc_tl .videoCube .video-title .branding{line-height:1.3em}.trc_tl .videoCube:hover span.branding,.trc_tl .videoCube_hover span.branding{text-decoration:none}.trc_tl .trc_rbox_div .videoCube.thumbnail_none a{vertical-align:top;overflow:visible}.trc_tl .videoCube .video-label-box{display:inline-block;vertical-align:top;width:100%}.trc_rbox_container.trc_expandable{overflow:hidden;max-height:0;transition-property:max-height;-webkit-transition-property:max-height;-moz-transition-property:max-height;-o-transition-property:max-height;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.trc_related_container .videoCube .thumbBlock .branding{position:absolute;bottom:0;z-index:1;width:100%;margin:0;padding:5px 0;text-align:center}.syndicatedItem .branding{margin:0}.trc-inplayer-rbox{background:#333;background:rgba(30,30,30,.9);bottom:0;position:absolute;height:300px;text-align:center}.trc-inplayer-rbox .trc_rbox_container{margin:50px auto 0;width:640px}.trc_rbox.trc-auto-size{width:100%;height:100%}.videoCube.thumbnail_under .video-title{min-height:2.58em}.videoCube.thumbnail_under .tbl-text-over-container{width:100%;position:absolute;z-index:1;left:0;bottom:0;min-height:66%;max-height:66%;padding-top:2px;padding-bottom:2px;line-height:1.25em}.videoCube.thumbnail_under .tbl-text-over-container .tbl-text-over{height:100%;width:100%;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 100%)}.videoCube.thumbnail_under .tbl-text-over-container span.branding,.videoCube.thumbnail_under .tbl-text-over-container span.video-description,.videoCube.thumbnail_under .tbl-text-over-container span.video-title{position:relative;z-index:1;padding:0 8px;margin:0}.videoCube.thumbnail_under .tbl-text-over-container span.video-title{margin-bottom:6px;min-height:auto}.videoCube.thumbnail_under .tbl-text-over-container .video-label-box{position:absolute;bottom:0;left:0;width:100%;padding:0 8px 6px 8px;min-height:auto}.trc-auto-size .trc_rbox_outer .trc_rbox_div{height:auto;width:auto}.trc-auto-size .trc_rbox_div .videoCube{height:auto}.trc-auto-size .trc_rbox_div .videoCube.trc-first-recommendation{margin-top:0}.trc_rbox .trc_rbox_outer .trc_rbox_div .videoCube.trc-first-in-row{margin-left:0}.trc_elastic .trc_rbox{width:auto}.trc_elastic .videoCube{overflow:hidden}.trc_elastic .videoCube .thumbBlock{background:transparent no-repeat center center;background-size:cover;position:absolute;display:inline-block;top:0;right:0;bottom:0;left:0;margin-left:0;margin-right:0}.trc_elastic .thumbBlock_holder{position:relative;width:100%}.trc_elastic .thumbnail_start .thumbBlock_holder{float:left;margin-right:10px}.trc_elastic .thumbnail_start.item-has-pre-label .thumbBlock_holder{margin-right:0}.trc_elastic .videoCube_aspect{width:1px}.trc_elastic .trc_rbox .trc_rbox_div{height:auto}.trc_elastic .thumbnail_start .trc-pre-label{float:left;padding-right:10px}.trc_elastic .thumbnail_start.trc-split-label .trc-main-label{float:left;padding-left:10px}.trc_elastic .video-label-box{display:block}.trc_elastic .thumbnail_start .video-label-box{box-sizing:border-box}.trc_user_adChoice_btn{background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat scroll 0 0 rgba(255,255,255,1);border-radius:0 0 0 5px;width:16px;height:16px;position:absolute;right:0;top:0;z-index:9000;cursor:pointer;border-width:2px 0 2px 4px;border-style:solid;border-color:#fff;opacity:.7;background-size:contain;visibility:hidden}.videoCube:hover .trc_user_adChoice_btn,.videoCube_hover .trc_user_adChoice_btn{visibility:visible}.videoCube .trc_user_adChoice_btn_static{visibility:visible}.p-video-overlay-container{position:absolute;width:100%;height:100%;top:0;left:0;background-color:transparent}.p-video-overlay.p-video-overlay-show{display:flex}.p-video-overlay{display:none;background-color:#000;opacity:.7;width:100%;height:100%;flex-direction:column}.p-video-overlay-action{color:#fff;width:100%;direction:ltr;text-align:center;display:flex;justify-content:center;flex-direction:column}.p-video-overlay-action.p-video-back-action{height:34%}.p-video-back-action-label{font-family:Helvetica Neue,serif;font-size:14px;font-weight:200;letter-spacing:1px}.p-video-overlay-action.p-video-goto-action{height:66%}.p-video-goto-action-url{font-family:Helvetica Neue,serif;font-size:24px;font-weight:400;text-decoration:underline;margin-top:5px}.p-video-goto-action-label{font-family:Helvetica Neue,serif;font-size:14px;font-weight:100;letter-spacing:1px}.trc_related_container .trc_clearer{clear:both;height:0;overflow:hidden;font-size:0;line-height:0;visibility:hidden}.link-adc{float:right!important}.trc-widget-footer .logoDiv{line-height:normal;padding-bottom:5px}.trc-widget-footer .link-adc a .trc_adc_wrapper,.trc_header_ext .link-adc a .trc_adc_wrapper{height:12px;width:18px;display:inline-block;padding-left:1px;margin-bottom:2px}.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_s_logo{vertical-align:middle;height:15px;display:inline-block;margin-top:-1px}.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_s_logo{width:12px;height:14px;background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat;background-size:contain;vertical-align:middle}.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_b_logo{width:77px;background:#fff url(//cdn.taboola.com/libtrc/static/thumbnails/0781f9c5a8637d1e162874f157460048.png) no-repeat!important;right:-1px;display:none;position:absolute}.logoDiv .trc_mobile_adc_link,.logoDiv .trc_mobile_attribution_link,.logoDiv .trc_mobile_disclosure_link{display:none}.logoDiv .trc_desktop_adc_link,.logoDiv .trc_desktop_attribution_link,.logoDiv .trc_desktop_disclosure_link{display:inline}@media screen and (max-width:767px){.logoDiv .trc_mobile_disclosure_link{display:inline}.logoDiv .trc_mobile_attribution_link{display:inline}.logoDiv .trc_mobile_adc_link{display:inline}.logoDiv .trc_desktop_disclosure_link{display:none}.logoDiv .trc_desktop_attribution_link{display:none}.logoDiv .trc_desktop_adc_link{display:none}}.trc_in_iframe .logoDiv .trc_mobile_attribution_link,.trc_in_iframe .logoDiv .trc_mobile_disclosure_link{display:inline}.trc_in_iframe .logoDiv .trc_desktop_attribution_link,.trc_in_iframe .logoDiv .trc_desktop_disclosure_link{display:none}.trc_related_container .logoDiv,.trc_related_container .trc_header_ext .logoDiv{float:right}.trc_related_container .logoDiv+.logoDiv{margin-right:2px}.trc_related_container .attribution-disclosure-link-hybrid,.trc_related_container .attribution-disclosure-link-sponsored{display:none}.trc-w2f.trc-content-sponsored .attribution-disclosure-link-sponsored,.trc_related_container .trc-content-sponsored .attribution-disclosure-link-sponsored{display:block}.trc-w2f.trc-content-hybrid .attribution-disclosure-link-hybrid,.trc_related_container .trc-content-hybrid .attribution-disclosure-link-hybrid{display:block}.trc_related_container .trc-widget-footer:hover a span,.trc_related_container .trc_header_ext:hover a span{text-decoration:underline!important}.logoDiv a span.trc_logos_v_align{display:inline-block!important;font-size:15px!important;line-height:1em!important;width:0!important}.trc_related_container .trc-widget-footer:hover a span.trc_adc_wrapper,.trc_related_container .trc-widget-footer:hover a span.trc_logos_v_align,.trc_related_container .trc_header_ext:hover a span.trc_adc_wrapper,.trc_related_container .trc_header_ext:hover a span.trc_logos_v_align{text-decoration:none!important}.trc_related_container .trc_rbox_header_span .trc_header_right_column{display:none}.trc_related_container img{max-width:none}.trc_related_container{clear:both}.tbl-loading-spinner{width:100%;height:40px;background:url(//cdn.taboola.com/static/91/91a25024-792d-4b52-84e6-ad1478c3f552.gif) center center no-repeat;background-size:40px}.tbl-hidden{display:none!important}.tbl-invisible{opacity:0;pointer-events:none}.tbl-batch-anchor{width:100%;height:1px}.iw_video_frame .trc_rbox_div{overflow:hidden}.trc-w2f .trc_rbox .trc-widget-footer,.trc-w2f .trc_rbox .trc_rbox_header{display:none!important}"
            });
            if (TRC.EventsAPI.dispatchTrcImplAvailable(), e.global["smart-ellipsis"] && !TRC.ellipsisListening && (TRC.listen("ellipsis", e._repaintEllipsis.trcBind(e)), TRC.listen("allrender", e._repaintEllipsis.trcBind(e)), TRC.listen("batchrender", e._repaintEllipsis.trcBind(e)), TRC.ellipsisListening = !0), TRC.CLSReporter && TRC.CLSReporter.init(), !e.invisible) return;
            TRC.dom.onReady(function() {
                div ? (div.innerHTML = "", div.style.display = "none") : (div = doc.createElement("div"), doc.body.appendChild(div).style.display = "none"), _taboola.push({
                    mode: "rbox-tracking",
                    container: div
                })
            })
        } catch (e) {
            __trcError("Error in libtrc initialization", e)
        }
    }, TRC.pConsole("", "time", "impl file loaded", ""), TRC.utm.push((new Date).getTime() - TRC.utm.start), TRC.tlf && console.timeStamp("call trcReady"), TRC.trcReady()
}(window, document);