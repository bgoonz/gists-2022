//AB_TEMPLATE
//ab -> 1




var _taboola = _taboola || [];
var TRC = TRC || {};
TRC.perfConfOverride = {
    'logTimer': 50000,
    'logLength': 5,
    'traffic': 50,
    'measureEnable': true,
    'measureTimeToSend': 10000,
    'measureInterval': 10000,
    'disableRawDataSend': true
};












window.TRC = window.TRC || {};
window.TRC.version = "20211221-3-RELEASE";

window.TRC.liteUnit = {
    abTest: 'multipleTvr5_vB'
};

_taboola.push({
    overrideConfig: {
        systemFlags: {
            loaderType: "connect-video-trc-5_ctrl",
            experimentID: 6559
        }
    }
});
try {
    (new Image()).src = "https://cdn.taboola.com/libtrc/tr5?abgroup=connect-video-trc-5_ctrl"
} catch (e) {}
/*! 20220116-1-RELEASE */

! function(e, t) {
    if (t.TRC = t.TRC || {}, "object" == typeof e && "function" == typeof e.now) {
        var n = function() {};
        e.mark && "function" == typeof e.mark || (e.mark = n), TRC.PerfEvenType = {
            START: "start",
            STOP: "stop",
            MARK: "mark",
            REQ_LEVEL_START: "startReq",
            REQ_LEVEL_STOP: "stopReq"
        }, TRC.Performance = function(n) {
            var o = n || {},
                a = "tbl_" + Date.now() + "_",
                r = o.logTimer,
                i = o.logLength || 40,
                s = [],
                l = TRC.EVENT_LOOP_INTERVAL,
                c = 1,
                u = 20,
                d = TRC.EVENT_LOOP_REPORT_INTERVAL;
            this.perfString = "", this.timeout = null, this.modeEvents = {}, this.measurementIds = [], this.modeDictionery = {}, this.measurements = [], this.vitalsCls = 0, this.vitalsClsMax = 0, this.fpsMeasurements = [], this.eventLoopMeasurements = [], this.measurementsCollection = [], this.firstIterationFlag = !0, o.measures = o.measures || {}, o.measures["generalMeasure_loaderLoaded"] = [a + "2.0", a + "measuring"], o.measures["generalMeasure_implLoaded"] = [a + "4.0", a + "measuring"], o.measures["generalMeasure_integration"] = ["tbl_ic", a + "measuring"], o.measures["generalMeasure_inflate"] = ["tbl_inflate_start", "tbl_inflate_end"];
            var m = function(e, t, n) {
                this.measurements.push({
                    name: "generalMeasure_" + e,
                    entryType: "measure",
                    startTime: n || performance.now(),
                    duration: t
                })
            };
            this.addPageConnectionMetrics = function() {
                if (this.firstIterationFlag && navigator.connection) {
                    var e = navigator.connection;
                    if (e.downlink && m.call(this, "connectionDownlink", e.downlink), e.rtt && m.call(this, "connectionRtt", e.rtt), e.effectiveType) {
                        var t;
                        switch (e.effectiveType) {
                            case "slow-2g":
                                t = 1;
                                break;
                            case "2g":
                            case "3g":
                            case "4g":
                                t = e.effectiveType[0];
                                break;
                            default:
                                t = -1
                        }
                        m.call(this, "connectionEffectiveType", Number(t))
                    }
                }
            }, this.addVitalsMetricObserver = function() {
                try {
                    if (t.PerformanceObserver) {
                        var e = this,
                            n;
                        new t.PerformanceObserver(function(t) {
                            for (var n = t.getEntries(), o = 0; o < n.length; o++) {
                                var a = n[o],
                                    r = a.processingStart - a.startTime;
                                m.call(e, "firstInputDelay", r, a.startTime)
                            }
                        }).observe({
                            type: "first-input",
                            buffered: !0
                        });
                        var o = 0,
                            a = 0,
                            r = Number.NEGATIVE_INFINITY,
                            i = Number.NEGATIVE_INFINITY;
                        new PerformanceObserver(function(t) {
                            for (var n = t.getEntries(), s = 0; s < n.length; s++) {
                                var l = n[s];
                                l.hadRecentInput || ((l.startTime - r > 5e3 || l.startTime - i > 1e3) && (r = l.startTime, a = 0), i = l.startTime, a += l.value, o = Math.max(o, a), e.vitalsCls += l.value, e.vitalsClsMax = o, TRC && TRC.dispatch && TRC.dispatch("onCls", l))
                            }
                        }).observe({
                            type: "layout-shift",
                            buffered: !0
                        })
                    }
                } catch (e) {
                    t.__trcWarn && __trcWarn("faile to add taboola web vitals to perf", e)
                }
            }, this.addVitalsMetricObserver(), this.logMeasurements = function n() {
                if (!(performance.now() / 1e3 / 60 > 30)) {
                    var r = [];
                    if (this.measurementIds = [], e.getEntriesByName && e.measure) {
                        var i, s;
                        if (e.mark(a + "measuring"), 0 == e.getEntriesByName(a + "measuring").length) {
                            if (!e.setResourceTimingBufferSize) return;
                            e.setResourceTimingBufferSize(e.getEntries().length + 100), e.mark(a + "measuring")
                        }
                        if (this.firstIterationFlag)
                            for (var l in o.measures)
                                if (o.measures.hasOwnProperty(l)) {
                                    var c = o.measures[l][0],
                                        u = o.measures[l][1];
                                    e.getEntriesByName(c).length > 0 && e.getEntriesByName(u).length > 0 && (e.measure(l, c, u), this.measurementIds.push(l))
                                }
                        for (var d in this.modeEvents)
                            if (this.modeEvents.hasOwnProperty(d))
                                for (var m in this.modeEvents[d])
                                    if (this.modeEvents[d].hasOwnProperty(m)) {
                                        var T = this.modeEvents[d][m];
                                        if (T) {
                                            var h = T["prefix"] + m + "_" + d;
                                            T["start"] && T["stop"] ? (e.measure(h, T["start"], T["stop"]), this.measurementIds.push(h)) : T["mark"] && (e.measure(h, T["mark"], a + "measuring"), this.measurementIds.push(h))
                                        }
                                        this.modeEvents[d][m] = null
                                    }
                        for (var C = 0; C < this.measurementIds.length; C++) {
                            s = this.measurementIds[C];
                            var R, l = e.getEntriesByName(s)[0];
                            this.measurements.push(l)
                        }(r = e.getEntriesByType("navigation")).length > 0 && this.firstIterationFlag && (r = r[0], this.measurements.push({
                            name: "generalMeasure_domInteractive",
                            entryType: "measure",
                            startTime: r.domInteractive,
                            duration: 0
                        }), this.measurements.push({
                            name: "generalMeasure_domContentLoadedEventEnd",
                            entryType: "measure",
                            startTime: r.domContentLoadedEventEnd,
                            duration: 0
                        }), this.measurements.push({
                            name: "generalMeasure_loadEventEnd",
                            entryType: "measure",
                            startTime: r.loadEventEnd,
                            duration: 0
                        }), this.measurements.push({
                            name: "generalMeasure_domComplete",
                            entryType: "measure",
                            startTime: r.domComplete,
                            duration: 0
                        }), this.addPageConnectionMetrics()), 0 !== this.vitalsCls && (this.measurements.push({
                            name: "generalMeasure_clsAggAdjusted",
                            entryType: "measure",
                            startTime: performance.now(),
                            duration: 100 * this.vitalsCls
                        }), this.measurements.push({
                            name: "generalMeasure_clsMaxAggAdjusted",
                            entryType: "measure",
                            startTime: performance.now(),
                            duration: 100 * this.vitalsClsMax
                        })), this.firstIterationFlag = !1, this.returnMeasueObj = {};
                        var b = {};
                        if (0 !== this.measurements.length) {
                            for (; this.fpsMeasurements.length > 0;) this.measurements.push(this.fpsMeasurements.pop());
                            for (; this.eventLoopMeasurements.length > 0;) this.measurements.push(this.eventLoopMeasurements.pop());
                            b.measurements = JSON.stringify(this.measurements), b.dict = JSON.stringify(this.modeDictionery), this.returnMeasueObj.cv = TRC.version || "", TRC.networkId && (this.returnMeasueObj.networkId = TRC.networkId), t.TRCImpl && t.TRCImpl.systemFlags && t.TRCImpl.systemFlags.loaderType && (this.returnMeasueObj.lt = t.TRCImpl.systemFlags.loaderType), this.returnMeasueObj.sd = p(), this.returnMeasueObj.ri = f(), this.returnMeasueObj.vi = g(), this.returnMeasueObj.data = JSON.stringify(b), t.TRCImpl && t.TRCImpl.sendEvent("perf", this.returnMeasueObj), this.measurementsCollection = this.measurementsCollection.concat(this.measurements), this.measurements = []
                        }
                    }
                }
            }, this.mark = function(t, n, o, r, i, s) {
                var l = function(e) {
                        var t = 0;
                        if (0 == e.length) return t;
                        for (var n = 0; n < e.length; n++) {
                            var o;
                            t = (t << 5) - t + e.charCodeAt(n), t &= t
                        }
                        return t
                    },
                    c = n || e.now(),
                    u = l(o + r),
                    d = a + t + (o || r ? "_" + u : "");
                if (e.mark(d), i) {
                    switch (this.modeDictionery[u] = o + "~~@~~" + r, this.modeEvents[u] = this.modeEvents[u] || {}, this.modeEvents[u][i] = this.modeEvents[u][i] || {}, s) {
                        case TRC.PerfEvenType.START:
                        case TRC.PerfEvenType.REQ_LEVEL_START:
                            this.modeEvents[u][i]["start"] = d;
                            break;
                        case TRC.PerfEvenType.STOP:
                        case TRC.PerfEvenType.REQ_LEVEL_STOP:
                            this.modeEvents[u][i]["stop"] = d;
                            break;
                        case TRC.PerfEvenType.MARK:
                            this.modeEvents[u][i]["mark"] = d
                    }
                    s === TRC.PerfEvenType.REQ_LEVEL_STOP || s === TRC.PerfEvenType.REQ_LEVEL_START ? this.modeEvents[u][i]["prefix"] = "reqMeasure_" : this.modeEvents[u][i]["prefix"] = "generalMeasure_"
                }
                return this.perfString = this.perfString + ";" + t + "=" + c, d
            }, window.addEventListener("beforeunload", this.logMeasurements.bind(this));
            var f = function() {
                    var e;
                    return (t.TRCImpl && t.TRCImpl.getGlobalRequestId.trcBind(t.TRCImpl))()
                },
                p = function() {
                    var e;
                    return (t.TRCImpl && t.TRCImpl.getGlobalSessionData.trcBind(t.TRCImpl))()
                },
                g = function() {
                    return t.taboola_view_id || (t.taboola_view_id = (new Date).getTime()), t.taboola_view_id
                },
                T = function() {
                    this.elapsed = 0, this.last = null
                };
            T.prototype = {
                tick: function(e) {
                    this.elapsed = (e - (this.last || e)) / 1e3, this.last = e
                },
                fps: function() {
                    return Math.round(1 / this.elapsed)
                }
            };
            var h = new T;

            function C(e) {
                t.requestAnimationFrame(C), h.tick(e)
            }
            t.requestAnimationFrame && t.requestAnimationFrame(C), this.cancelFpsMeasure = function() {
                C = function() {}
            }, this.getTimer = function() {
                return h
            }, this.getrender = function() {
                return C
            };
            var R = 0,
                b = function() {
                    var e, t, n = {
                        hidden: "visibilitychange",
                        webkitHidden: "webkitvisibilitychange",
                        mozHidden: "mozvisibilitychange",
                        msHidden: "msvisibilitychange"
                    };
                    for (e in n)
                        if (n.hasOwnProperty(e) && e in document) {
                            t = n[e];
                            break
                        }
                    return function(n) {
                        return n && document.addEventListener(t, n), !document[e]
                    }
                }();
            if (b(function() {
                    b() ? (TRC.performance && TRC.performance.mark("windowActiveSTART" + R, null, "active", R, "activeTab", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("windowActiveSTOP" + R, null, "active", R, "activeTab", TRC.PerfEvenType.STOP)) : (TRC.performance && TRC.performance.mark("windowInactiveSTART" + R, null, "inactive", R, "inactiveTab", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("windowInactiveSTOP" + R, null, "inactive", R, "inactiveTab", TRC.PerfEvenType.STOP)), R++
                }), o.measureEnable) {
                TRC.__takeMeasureQueue = TRC.__takeMeasureQueue || [];
                var v = o.measureTimeToSend || 0,
                    _ = this.logMeasurements.bind(this);
                if (TRC.__takeMeasureQueue.push(_), 0 == v) window.addEventListener("beforeunload", TRC.__takeMeasureQueue.pop());
                else if (1 == TRC.__takeMeasureQueue.length) {
                    var y = TRC.__takeMeasureQueue.pop();
                    this.measureTimeout = setTimeout(function() {
                        _(), o.measureInterval && (this.measureInterval = setInterval(_, Math.max(Number(o.measureInterval), 1e4)))
                    }, v)
                }
                setInterval(function() {
                    var t = e.now();
                    setTimeout(function() {
                        s.push(e.now() - t)
                    }, 0)
                }, l), setInterval(function() {
                    var e, t = 0,
                        n = 0,
                        o = 0;
                    if (s.length > 0) {
                        e = s.length;
                        for (var a = 0; a < s.length; a++) n = Math.max(n, s[a]), o += s[a];
                        t = o / e, s = [];
                        var r = Number(performance.now());
                        TRC.performance.eventLoopMeasurements.length <= u && (TRC.performance.eventLoopMeasurements.push({
                            name: "generalMeasure_ELAVG_" + c,
                            entryType: "measure",
                            startTime: r,
                            duration: t
                        }), TRC.performance.eventLoopMeasurements.push({
                            name: "generalMeasure_ELMAX_" + c,
                            entryType: "measure",
                            startTime: r,
                            duration: n
                        }), c++)
                    }
                }, d), "complete" !== document.readyState && document.addEventListener("readystatechange", function(t) {
                    "complete" === t.target.readyState && TRC.performance.measurements.push({
                        name: "generalMeasure_documentReady",
                        entryType: "measure",
                        startTime: e.now(),
                        duration: 0
                    })
                })
            }
        }
    }
}(window.performance, window),
function(e) {
    e.TRC = e.TRC || {}, e.TRC.inflate = {
        STYLE: "__style__",
        COMMON: "__common__",
        KEYS: "__keys__",
        getModeCustom: function e(t, n) {
            var o = "\\/\\*\\ss-split-".concat(t, "\\s\\*\\/[^]*\\*\\se-split-").concat(t, "\\s\\*\\/"),
                a = new RegExp(o, "g"),
                r = n.match(a);
            return r ? r[0] : null
        },
        inflateObject: function e(t, n) {
            var o = this,
                a = {},
                r;
            return this.inflateValue(this.KEYS, t, n).forEach(function(e) {
                a[e] = o.inflateValue(e, t, n)
            }), a
        },
        inflateValue: function e(t, n, o) {
            var a = o[t];
            return void 0 === a && (a = n[t]), a
        },
        inflateStyle: function e(t, n) {
            var o = "";
            return Object.keys(n).forEach(function(e) {
                var a = n[e],
                    r = "";
                e.split(",").forEach(function(e) {
                    "" !== r && (r += ","), r += ".".concat(t, " ").concat(e)
                }), o += "".concat(r, "{").concat(a, "}")
            }), o
        },
        getConfig: function t(n) {
            var o = this,
                a = n.global["enable-mode-injection"] && !(e.navigator && "string" == typeof e.navigator.userAgent && /(iPhone|iPad)(?=.*AppleWebKit)(?!.*CriOS)/i.test(e.navigator.userAgent));
            if (n && n.modes) {
                var r = n.modes,
                    i = n.global,
                    s = i.style,
                    l = r[this.COMMON];
                if (l) {
                    var c = window.performance && "function" == typeof window.performance.mark;
                    c && window.performance.mark("tbl_inflate_start");
                    var u = {},
                        d = s.rtl;
                    Object.keys(r).forEach(function(e) {
                        if (e !== o.COMMON) {
                            var t = r[e];
                            u[e] = o.inflateObject(l, t), a && !n.global["css-isolation"] ? (u[e][o.STYLE] = t[o.STYLE] || l[o.STYLE], n.global["enable-custom-injection"] && (u[e].mode_custom = o.getModeCustom(e, s.mode_custom) || "")) : d += o.inflateStyle(e, o.inflateObject(l[o.STYLE], t[o.STYLE]))
                        }
                    }), a ? u[this.COMMON] = l : (d += s.custom, d += s.mode_custom, i.style = d), n.modes = u, c && window.performance.mark("tbl_inflate_end")
                }
            }
            return n
        }
    }
}(window),
function(win, doc) {
    if (!win.TRC || !win.TRC.utm) {
        win.TRC ? TRC.utm = [] : TRC = {
            utm: []
        };
        var queueName = "_taboola";
        win[queueName] = win[queueName] || [];
        var config = {
            "modes": {
                "ab_thumbnails-a_1x7": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 520,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 7,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }, {
                        "minWidth": 521,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "storyWidget-story-num-title-lines": 0,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 1px 1px 1px;border-color:#D6D5D3;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;",
                        ".video-label-box": "text-align:left;height:76px;margin:5px 0px 0px 0px;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 1px 1px 1px;border-style:NONE;",
                        ".syndicatedItem .video-title": "max-height:57.0px;*height:57.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".syndicatedItem .video-label-box": "height:76px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "ab_thumbnails-a_2x2": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 520,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }, {
                        "minWidth": 521,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 2,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "storyWidget-story-num-title-lines": 0,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 1px 1px 1px;border-color:#D6D5D3;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;",
                        ".video-label-box": "text-align:left;height:76px;margin:5px 0px 0px 0px;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 1px 1px 1px;border-style:NONE;",
                        ".syndicatedItem .video-title": "max-height:57.0px;*height:57.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".syndicatedItem .video-label-box": "height:76px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "ab_thumbnails-a_abp-mode": {
                    "widget-creator-revision": "10492058",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 414,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }, {
                        "minWidth": 415,
                        "maxWidth": 520,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 2,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }, {
                        "minWidth": 521,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "read-more-mode-devices": "",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;line-height:1.2em;display:inline-block;position:relative;height:auto;width:100%;_width:100%;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;",
                        ".video-label-box": "text-align:left;",
                        "": "width:300px;_width:300px;border-width:1px 0px 1px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;border-style:none;",
                        ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:57.0px;*height:57.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-title', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "ab_thumbnails-a_hero": {
                    "header": "You May Like",
                    "attribution-position": "top",
                    "widget-creator-revision": "16073189",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 6,
                        "cells": 1,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "disclosure-position": "top",
                    "read-more-mode-devices": "",
                    "__style__": {
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".trc_rbox_header": "font-family:'Roboto Condensed', sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 1px 1px 1px;border-color:#D6D5D3;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 1px 1px 1px;border-style:NONE;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "ab_thumbnails-b_abp-mode": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 414,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 415,
                        "maxWidth": 520,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }, {
                        "minWidth": 521,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "__style__": {
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 1px 0px;border-color:#D6D5D3;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;",
                        "": "width:300px;_width:300px;border-width:0px 0px 6px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 1px 0px;border-style:NONE;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "ab_thumbnails-q_reco-reel": {
                    "header": "You May Like",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 1.5,
                            "h": 1.5
                        },
                        "rows": 5,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-position": "top",
                    "storyWidget": true,
                    "storyWidget-story-num-title-lines": 0,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                        ".video-label-box": "text-align:left;height:66px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:66px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "alternating-thumbnails-a": {
                    "header": "You May Like",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "organic-thumbs-feed-01": {
                    "header": "No Header",
                    "detail-order": "title,description,branding",
                    "detail-order-syndicated": "title,description,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:125px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-description": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
                        ".syndicatedItem .video-label-box": "height:125px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "organic-thumbs-feed-01-c": {
                    "header": "No Header",
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:96px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "rbox-blended": {
                    "header": "Videos",
                    "orientation": "vertical",
                    "navigation-type": "scrolling",
                    "thumbnail-width": "75",
                    "thumbnail-height": "55",
                    "detail-order": "title,description",
                    "thumbnail-position": "start",
                    "attribution-position": "bottom",
                    "attribution-text": "<span>by<span style=\"font-size:12px;\">Taboola</span></span>",
                    "detail-order-syndicated": "branding,title",
                    "syndicated-static-text": "Sponsored",
                    "auto-size-rules": [{
                        "minWc": 120,
                        "maxWc": 249,
                        "minWsRange": 8,
                        "maxWsRange": 8,
                        "n": 1
                    }, {
                        "minWc": 250,
                        "maxWc": 379,
                        "minWsRange": 8,
                        "maxWsRange": 9,
                        "n": 2
                    }, {
                        "minWc": 380,
                        "maxWc": 609,
                        "minWsRange": 8,
                        "maxWsRange": 10,
                        "n": 3
                    }, {
                        "minWc": 610,
                        "maxWc": 749,
                        "minWsRange": 8,
                        "maxWsRange": 11,
                        "n": 4
                    }, {
                        "minWc": 750,
                        "maxWc": 1029,
                        "minWsRange": 7,
                        "maxWsRange": 11,
                        "n": 5
                    }, {
                        "minWc": 1030,
                        "maxWc": 1419,
                        "minWsRange": 6,
                        "maxWsRange": 11,
                        "n": 6
                    }, {
                        "minWc": 1420,
                        "maxWc": 1729,
                        "minWsRange": 6,
                        "maxWsRange": 12,
                        "n": 7
                    }, {
                        "minWc": 1730,
                        "maxWc": 1920,
                        "minWsRange": 6,
                        "maxWsRange": 13,
                        "n": 8
                    }],
                    "rows": 1,
                    "widget-creator-layout": "autowidget-template",
                    "mode-is-responsive": false,
                    "responsive-rules": null,
                    "use-css-important": false,
                    "disclosure-position": "top",
                    "read-more-mode-devices": "",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:1px;padding:0;",
                        ".videoCube .video-duration": "left:36px;display:block;",
                        ".videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;color:black;border-width:0;background:transparent;border-style:none none solid none;border-color:#D6D5D3;padding:0;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:3px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;",
                        ".video-label-box": "text-align:left;",
                        "": "width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#000000;padding:0;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".videoCube.horizontal": "border-style:none none none solid;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;border-style:none;",
                        ".videoCube.syndicatedItem.horizontal": "border-style:none none none solid;",
                        ".videoCube.syndicatedItem .video-duration": "display:block;left:36px;",
                        ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:2.58em;*height:2.58em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:block;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
                        ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:block;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "rec-reel-sc2": {
                    "header": "No Header",
                    "detail-order": "title,branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 1.5,
                            "h": 1.5
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored",
                    "disclosure-position": "after_branding",
                    "storyWidget": true,
                    "storyWidget-story-num-title-lines": 0,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
                        ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "text-links-a": {
                    "header": "No Header",
                    "item-renderer": function(box, data) {
                        var winWidth = -1,
                            winHeight = -1;

                        function resizeVideoBox() {
                            if (box.labelsBox.firstChild) {
                                box.labelsBox.firstChild.innerHTML = box.video_data['title'];
                            }
                            box.fixTextOverflow(true);
                        }

                        TRC.dom.on(window, 'resize', function(e) {
                            /* IE8 and below has a few issues with window resize. First, it can go into infinite loop due to resize event being called on children resize as well, so we need to check
                               if window dimensions has changed and only if so, call the function. Second issue, is that it will give incorrect dimensions in the calculation unless we use setTimeout() */
                            if (TRC.Browser.ieUpto(8)) {
                                if (document.documentElement.clientWidth != winWidth || document.documentElement.clientHeight != winHeight) {
                                    setTimeout(function() {
                                        resizeVideoBox();
                                        winWidth = document.documentElement.clientWidth;
                                        winHeight = document.documentElement.clientHeight;

                                    });
                                }
                            } else {
                                resizeVideoBox();
                            }
                        });

                        if (TRC.widgetCreatorPreview && jQuery) {
                            jQuery(window).on('videoCubeChange', resizeVideoBox);
                        }

                        if (box.rbox.boxes.length >= box.rbox.recommendationList.length / 2) {
                            box.className += ' rightCol';
                        }
                    },
                    "thumbnail-position": "none",
                    "format-syndicator": function(s) {
                        return '(' + s + ')';
                    },
                    "rows": 1,
                    "widget-creator-layout": "autowidget-template-text-links",
                    "widget-creator-revision": "9324553",
                    "details-inline-with-title": "branding",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 2
                    }],
                    "min-width-for-disclosure": 495,
                    "min-width-for-attribution": 625,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:38.0px;*height:38.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".trc_rbox_div": "width:auto;_width:99%;height:auto;border-width:0;padding:0;",
                        ".videoCube .video-label-box": "margin-left:0;margin-right:0px;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:48%;_width:48%;background-color:transparent;border-width:1px 1px 1px 1px;border-color:#D6D5D3;padding:3px 3px 3px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;",
                        ".video-label-box": "text-align:left;",
                        "": "width:auto;_width:auto;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 1px 1px 1px;border-style:NONE;",
                        ".videoCube.syndicatedItem .video-label-box": "margin-left:0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".syndicatedItem .video-label-box": "height:auto;",
                        ".logoDiv a span": "font-size:11px;color:#000000;font-weight:normal;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.videoCube .video-label-box', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.videoCube.syndicatedItem .video-label-box', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "thumbnails-a": {
                    "widget-creator-revision": "9353156",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 1,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 7,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }, {
                        "minWidth": 2,
                        "maxWidth": 520,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }, {
                        "minWidth": 521,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "storyWidget-story-num-title-lines": 0,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:1px 1px 1px 1px;border-color:#D6D5D3;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;",
                        ".video-label-box": "text-align:left;height:76px;margin:5px 0px 0px 0px;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 1px 1px 1px;border-style:NONE;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:57.0px;*height:57.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:19.0px;",
                        ".syndicatedItem .video-label-box": "height:76px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-title": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-title', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "thumbnails-b": {
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 414,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 415,
                        "maxWidth": 520,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 2,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }, {
                        "minWidth": 521,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "__style__": {
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:15.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 1px 0px;border-color:#D6D5D3;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;",
                        "": "width:300px;_width:300px;border-width:0px 0px 6px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 1px 0px;border-style:NONE;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-ba": {
                    "header": "You May Also Like",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 3
                    }],
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-label,.sponsored,.sponsored-url": "font-family:'segoe ui', 'open sans', sans-serif\\3b ;",
                        ".trc_rbox_header": "font-family:'segoe ui', 'open sans', sans-serif\\3b ;font-size:18.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:'segoe ui', 'open sans', sans-serif\\3b ;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'segoe ui', 'open sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:22.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'segoe ui', 'open sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:22.0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-c": {
                    "header": "No Header",
                    "navigation-type": "scrolling",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 9,
                        "virtualThumbWidth": 11,
                        "virtualThumbHeight": 8
                    }],
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 0px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:66px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:66px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "thumbnails-g": {
                    "attribution-position": "bottom",
                    "attribution-text": " ",
                    "widget-creator-revision": "17806440",
                    "adchoice-position": "bottom",
                    "read-more-mode-devices": "",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#232323;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro';",
                        ".trc_rbox_header": "font-family:'Source Sans Pro';font-size:20.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:76px;margin:0px 0px 0px 0px;",
                        "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 1px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:38.0px;*height:38.0px;color:#232323;font-family:'Source Sans Pro';font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro';background-image:null;text-align:left;line-height:19.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:57px;margin:0px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;position:absolute;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-i": {
                    "thumbnail-width": "2",
                    "thumbnail-height": "1",
                    "attribution-position": "bottom",
                    "attribution-text": " ",
                    "widget-creator-revision": "17806440",
                    "adchoice-position": "bottom",
                    "read-more-mode-devices": "",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#232323;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro';",
                        ".trc_rbox_header": "font-family:'Source Sans Pro';font-size:20.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:76px;margin:0px 0px 0px 0px;",
                        "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 1px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:15px;*height:15px;color:#232323;font-family:'Source Sans Pro';font-size:14.0px;line-height:16px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro';background-image:null;text-align:left;line-height:19.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:76px;margin:0px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;position:absolute;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-i-01": {
                    "thumbnail-width": "2",
                    "thumbnail-height": "1",
                    "attribution-position": "bottom",
                    "attribution-text": " ",
                    "widget-creator-revision": "17806440",
                    "adchoice-position": "bottom",
                    "read-more-mode-devices": "",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#232323;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro';",
                        ".trc_rbox_header": "font-family:'Source Sans Pro';font-size:20.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:76px;margin:0px 0px 0px 0px;",
                        "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 1px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:15px;*height:15px;color:#232323;font-family:'Source Sans Pro';font-size:14.0px;line-height:16px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro';background-image:null;text-align:left;line-height:19.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:76px;margin:0px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;position:absolute;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-l": {
                    "header": "",
                    "thumbnail-position": "start",
                    "attribution-position": "top",
                    "widget-creator-layout": "autowidget-template-stream",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 2,
                        "cells": 1,
                        "virtualThumbWidth": 7,
                        "virtualThumbHeight": 5
                    }],
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;margin:0 0 0 0;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:georgia, times, serif;",
                        ".trc_rbox_header": "font-family:georgia, times, serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;margin:0 0 10px 0;",
                        ".video-label-box": "text-align:left;height:auto;margin:0px 0px 0px 0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:georgia, times, serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:georgia, times, serif;background-image:null;text-align:left;line-height:22.0px;",
                        ".video-label-box.trc-pre-label": "height:auto;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:auto;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:auto;margin:0px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "thumbnails-m": {
                    "thumbnail-width": "2",
                    "thumbnail-height": "1",
                    "attribution-position": "bottom",
                    "attribution-text": " ",
                    "widget-creator-revision": "17806440",
                    "adchoice-position": "bottom",
                    "read-more-mode-devices": "",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#232323;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'Source Sans Pro';",
                        ".trc_rbox_header": "font-family:'Source Sans Pro';font-size:20.0px;font-weight:bold;text-decoration:none;color:#fff;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:76px;margin:0px 0px 0px 0px;",
                        "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 1px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:11px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:15px;*height:15px;color:#232323;font-family:'Source Sans Pro';font-size:14.0px;line-height:16px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'Source Sans Pro';background-image:null;text-align:left;line-height:19.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",
                        ".syndicatedItem .video-label-box": "height:76px;margin:0px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11px;color:#000000;display:inline;font-weight:normal;position:absolute;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-n": {
                    "header": "Sponsored",
                    "attribution-position": "top",
                    "min-width-for-attribution": 10,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                        ".video-label-box": "text-align:left;height:66px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:66px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-o": {
                    "header": "Sponsored",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }],
                    "min-width-for-attribution": 10,
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;",
                        ".video-label-box": "text-align:left;height:66px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-title": "max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:66px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-q": {
                    "header": "Sponsored",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 1,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 5,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 2,
                        "maxWidth": 519,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }, {
                        "minWidth": 520,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 6,
                        "virtualThumbHeight": 5
                    }],
                    "disclosure-link-text-sponsored": "Sponsored",
                    "disclosure-position": "after_branding",
                    "storyWidget-story-num-title-lines": 0,
                    "__style__": {
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-r": {
                    "header": "Sponsored",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 8,
                        "virtualThumbHeight": 5
                    }],
                    "__style__": {
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-rr": {
                    "header": "You May Also Like",
                    "attribution-position": "top",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 4,
                        "cells": 1,
                        "virtualThumbWidth": 3,
                        "virtualThumbHeight": 2
                    }],
                    "disclosure-position": "top",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:96.0px;*height:96.0px;color:#000000;text-decoration:none;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:'segoe ui', 'open sans', sans-serif\\3b ;",
                        ".trc_rbox_header": "font-family:'segoe ui', 'open sans', sans-serif\\3b ;font-size:18.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:96px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-title": "max-height:72.0px;*height:72.0px;color:#000000;font-family:'segoe ui', 'open sans', sans-serif\\3b ;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'segoe ui', 'open sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'segoe ui', 'open sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:24.0px;",
                        ".syndicatedItem .video-label-box": "height:96px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_header_left_column": "width:48%;_width:48%;display:inline-block;height:auto;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;"
                    }
                },
                "thumbnails-v": {
                    "header": "No Header",
                    "navigation-type": "scrolling",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 6,
                        "virtualThumbWidth": 11,
                        "virtualThumbHeight": 8
                    }],
                    "disclosure-link-text-sponsored": "Sponsored",
                    "disclosure-position": "after_branding",
                    "__style__": {
                        ".video-label,.sponsored,.sponsored-url": "font-family:'segoe ui', 'open sans', sans-serif\\3b ;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:'segoe ui', 'open sans', sans-serif\\3b ;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'segoe ui', 'open sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:22.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 5px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'segoe ui', 'open sans', sans-serif\\3b ;background-image:null;text-align:left;line-height:22.0px;",
                        ".syndicatedItem .video-label-box": "height:88px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#000000;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "thumbs-feed-01": {
                    "header": "No Header",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }],
                    "disclosure-link-text-sponsored": "Sponsored",
                    "disclosure-position": "after_branding",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:81px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;",
                        ".syndicatedItem .video-label-box": "height:81px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "thumbs-feed-01-a": {
                    "header": "No Header",
                    "responsive-rules": [{
                        "minWidth": 0,
                        "maxWidth": 480,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }, {
                        "minWidth": 481,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 2,
                        "virtualThumbWidth": 16,
                        "virtualThumbHeight": 9
                    }],
                    "disclosure-link-text-sponsored": "Sponsored",
                    "disclosure-position": "after_branding",
                    "__style__": {
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:#000000;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".video-label-box": "text-align:left;height:72px;margin:5px 0px 0px 0px;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".syndicatedItem .video-title": "max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
                        ".videoCube .video-label-box.trc-pre-label": "margin:0px 0px 0px 0px;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;",
                        ".syndicatedItem .video-label-box": "height:72px;margin:5px 0px 0px 0px;",
                        ".logoDiv a span": "font-size:11.0px;color:#999999;display:inline;font-weight:normal;",
                        ".videoCube:hover .video-label-box .video-description": "text-decoration:underline;",
                        ".videoCube .video-label-box .video-title": "margin:0 0 0 0;",
                        ".video-label-box .branding": "display:block;",
                        ".trc_rbox_header .trc_header_ext": "position:relative;top:auto;right:auto;",
                        ".logoDiv a": "font-size:100%;",
                        ".videoCube a": "padding:0 0 0 0;",
                        ".trc_rbox_header .logoDiv": "line-height:normal;",
                        ".trc_rbox_header_span .trc_header_right_column": "height:auto;",
                        ".trc_header_left_column": "height:auto;",
                        ".trc_header_right_part": "margin:0px 0 0 0;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_left_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line']
                    }
                },
                "__common__": {
                    "syndicated-attribution-tooltip": "",
                    "image-url-prefix": null,
                    "read-more-cutoff-length-from-anchor-element": 30,
                    "syndicated-static-text": "",
                    "expand-animation-duration": 1000,
                    "required-attributes": "none",
                    "change-url": function(url) {
                        return url;
                    },
                    "loading-animation-url": "hide",
                    "pager-style-active-image": "",
                    "syndicated-static-text-position": "top-right",
                    "pager-button-location": "pager",
                    "recommendationReel-enable-text-under-slide-in": false,
                    "player-detail-order": "title,description",
                    "mode-adc-config": null,
                    "slider-scroll-ref-element": function() {
                        return window;
                    },
                    "slider-close-btn-color": "#FFF",
                    "details-inline-with-title": "",
                    "thumbnail-height": "5",
                    "slider-slide-from": "bottom",
                    "shade-scroll": false,
                    "auto-size": false,
                    "pager-button-inactive-image": "",
                    "has-thumbs-image-lazy-load": false,
                    "visibility-constraints": {},
                    "disclosure-alignment": "left",
                    "adchoice-large": false,
                    "responsive-rules": [{
                        "minWidth": 0,
                        "margin": {
                            "v": 2,
                            "h": 2
                        },
                        "rows": 1,
                        "cells": 1,
                        "virtualThumbWidth": 2,
                        "virtualThumbHeight": 1
                    }],
                    "layout-template": "Horizontal 4",
                    "format-description": '%s',
                    "format-x-days-ago": false,
                    "mode-enable-feed-view": false,
                    "storyWidget-story-interval": 7,
                    "ios-sc-link-target-mode": null,
                    "gam-allow-trc-ads": false,
                    "read-more-config": null,
                    "thumbs-image-lazy-load-margins": "600px 1500px",
                    "player-container-id": "trc_Embed_Container_Id",
                    "image-min-width": 100,
                    "organic-static-text-position": "bottom-left",
                    "before-detail-order": "",
                    "read-more-caption": "",
                    "template": "Default",
                    "slider-close-btn-font-size": "30px",
                    "read-more-box-selector": "",
                    "pager-position": "start",
                    "widget-creator-layout": "autowidget-template-static",
                    "format-uploader": 'User: %s',
                    "disclosure-position": "none",
                    "image-size-factor": 1.2,
                    "format-external-data": '%s',
                    "title-icon": "NONE",
                    "lightbox-display-title": true,
                    "has-image-lazy-load": false,
                    "player-thumbnail-height": "200",
                    "emblem-position": "top-left",
                    "header-right": "No Header",
                    "gif-url-prefix": null,
                    "slider-close-btn-size": "24px",
                    "navigation-type": "none",
                    "ctaWidget": true,
                    "cyclical-paging": false,
                    "recommendationReel-interval": 7,
                    "tokenize-strategy": "word",
                    "adchoice-target-url": "",
                    "disclosure-link-text-hybrid": "Promoted Links",
                    "storyWidget-storyWidget-story-num-title-lines": 3,
                    "branding-separator": "|",
                    "format-duration": '%s',
                    "pager-button-active-image": "",
                    "after-visible": function(data) {},
                    "player-thumbnail-width": "75",
                    "enable-category-card": false,
                    "color-scheme": "White",
                    "slider-z-index": 2500000,
                    "rtb-image-url-prefix": null,
                    "slider-transition-duration": 600,
                    "use-css-important": true,
                    "smart-ellipsis": false,
                    "header-icon": "NONE",
                    "image-dpr-factor": 2,
                    "storyWidget-storyWidget-story-interval": 7,
                    "item-renderer": function(box, data) {
                        if (typeof window.trc_itemRenderer == 'function') window.trc_itemRenderer(document.createElement('div'), data, false);
                    },
                    "read-more-minimized-size": 800,
                    "pager-button-hover-image": "",
                    "use-browser-line-clamp": true,
                    "slider": false,
                    "render-player-info": false,
                    "item-data-filter": function(data) {},
                    "mode-has-adchoice": true,
                    "player-embed-code": function() {
                        return '';
                    },
                    "image-allowed-ratio-diff": 0.029,
                    "auto-advance": "-1",
                    "image-min-dimension": 100,
                    "auto-scroll": "none",
                    "recommendationReel-num-title-lines": 3,
                    "use-cdn-recommendations": false,
                    "format-category": '%s',
                    "list-size": 10,
                    "enable-read-more": false,
                    "auto-advance-animation": "down",
                    "format-syndicator": function(s) {
                        return s;
                    },
                    "auto-size-rules": [{
                        "minWc": 120,
                        "maxWc": 349,
                        "minWsRange": 8,
                        "maxWsRange": 8,
                        "n": 1
                    }, {
                        "minWc": 350,
                        "maxWc": 499,
                        "minWsRange": 8,
                        "maxWsRange": 9,
                        "n": 2
                    }, {
                        "minWc": 500,
                        "maxWc": 749,
                        "minWsRange": 8,
                        "maxWsRange": 10,
                        "n": 3
                    }, {
                        "minWc": 750,
                        "maxWc": 999,
                        "minWsRange": 8,
                        "maxWsRange": 11,
                        "n": 4
                    }, {
                        "minWc": 1000,
                        "maxWc": 1249,
                        "minWsRange": 7,
                        "maxWsRange": 11,
                        "n": 5
                    }, {
                        "minWc": 1250,
                        "maxWc": 1499,
                        "minWsRange": 6,
                        "maxWsRange": 11,
                        "n": 6
                    }, {
                        "minWc": 1500,
                        "maxWc": 1749,
                        "minWsRange": 6,
                        "maxWsRange": 12,
                        "n": 7
                    }, {
                        "minWc": 1750,
                        "maxWc": 1920,
                        "minWsRange": 6,
                        "maxWsRange": 13,
                        "n": 8
                    }],
                    "carousel-min-items": 1.33,
                    "p-video-overlay": false,
                    "attribution-text": "by Taboola",
                    "slider-transition-delay": 200,
                    "storyWidget-recommendation-reel-enable-text-under-slide-in": false,
                    "popup-custom-url": "",
                    "format": {
                        'views': 'Views: %s',
                        'uploader': 'By: %s',
                        'duration': 'Duration: %s',
                        'rating': 'Rating: %s'
                    },
                    "mode-start": function(data) {},
                    "auto-syndicated-attribution": true,
                    "storyWidget": false,
                    "pager-style-hover-image": "",
                    "adchoice-position": "none",
                    "syndicated-attribution-position": "bottom-right",
                    "disclosure-link-text-sponsored": "Sponsored Links",
                    "mode-has-userx": true,
                    "attribution-position": "none",
                    "slider-background-color": "#666",
                    "pager-style-inactive-image": "",
                    "image-size-round": 20,
                    "min-width-for-attribution": 325,
                    "detail-order-ad": "title",
                    "style-template": "Light",
                    "header": ".",
                    "read-more-cutoff-length-type": "BELOW",
                    "tabbed": false,
                    "read-more-threshold": 1100,
                    "thumbnail-width": "6",
                    "recommendationReel": false,
                    "min-width-for-disclosure": 225,
                    "detail-order": "title",
                    "image-max-dimension": 1500,
                    "format-published-date": function(d) {
                        return this.dateFormatISO(d, false);
                    },
                    "format-number": function(num) {
                        var out = "",
                            m;
                        while (num.length > 3 && (m = num.match(/\d{3}\s*$/))) {
                            out = m.toString().replace(/\s+/, "") + "," + out;
                            num = num.replace(/\d{3}\s*$/, "", false);
                        }
                        out = num + "," + out;
                        return out.replace(/,$/, "");
                    },
                    "mode-is-responsive": true,
                    "images-radius": "0",
                    "expandable": false,
                    "organic-show-static-text": false,
                    "remove-url-playvideo-behavior": false,
                    "expand-animation-max-height": 1000,
                    "responsive-extra-columns": 1,
                    "title": "Related Videos",
                    "published-date-position": "standalone",
                    "header-icon-url": "",
                    "hide-disclosure-when-no-place": false,
                    "thumbnail-position-ad": "inherit",
                    "format-title": '%s',
                    "pager-button-style": "<span class=\"pager-cont\">&laquo;</span>|<span class=\"pager-cont\">&raquo;</span>",
                    "link-target": "normal",
                    "organic-tracking-params": null,
                    "widget-creator-revision": "-1",
                    "component-id": "rbox-blended",
                    "hide-attribution-when-no-place": false,
                    "pager-type-style": "numbers",
                    "list-suffix": function(internalc, myorigin) {},
                    "detail-order-syndicated": "title,branding",
                    "title-icon-url": "",
                    "read-more-cutoff-from-type": "ARTICLE",
                    "impl-class": "TRCRBox",
                    "has-expand-animation": false,
                    "disclosure-link-text-organic": "",
                    "orientation": "horizontal",
                    "quantcast-label": "",
                    "syndicated-attribution": "",
                    "image-lazy-load-space": 200,
                    "sponsored-location": "top",
                    "__keys__": ['component-id', 'tabbed', 'header', 'expandable', 'list-size', 'orientation', 'navigation-type', 'auto-scroll', 'loading-animation-url', 'thumbnail-width', 'thumbnail-height', 'format', 'detail-order', 'icons', 'format-number', 'change-url', 'list-suffix', 'item-renderer', 'title', 'format-title', 'format-duration', 'format-description', 'format-category', 'format-uploader', 'format-views', 'format-rating', 'format-published-date', 'sponsored-location', 'thumbnail-position', 'color-scheme', 'pager-button-style', 'pager-position', 'pager-type-style', 'template', 'pager-button-location', 'pager-button-active-image', 'pager-button-inactive-image', 'pager-button-hover-image', 'pager-style-active-image', 'pager-style-inactive-image', 'pager-style-hover-image', 'lightbox-display-title', 'detail-order-ad', 'layout-template', 'style-template', 'attribution-position', 'shade-scroll', 'attribution-text', 'required-attributes', 'auto-advance-animation', 'auto-advance', 'format-external-data', 'item-data-filter', 'gam-allow-trc-ads', 'thumbnail-position-ad', 'impl-class', 'player-embed-code', 'player-container-id', 'render-player-info', 'player-thumbnail-width', 'player-thumbnail-height', 'player-detail-order', 'use-cdn-recommendations', 'syndicated-attribution', 'syndicated-attribution-tooltip', 'syndicated-attribution-position', 'detail-order-syndicated', 'format-syndicator', 'syndicated-static-text', 'syndicated-static-text-position', 'quantcast-label', 'cyclical-paging', 'after-visible', 'link-target', 'auto-syndicated-attribution', 'remove-url-playvideo-behavior', 'auto-size', 'auto-size-rules', 'rows', 'widget-creator-layout', 'widget-creator-revision', 'details-inline-with-title', 'mode-is-responsive', 'responsive-extra-columns', 'responsive-rules', 'image-lazy-load-space', 'has-image-lazy-load', 'use-css-important', 'image-url-prefix', 'image-size-factor', 'image-min-width', 'image-size-round', 'image-max-dimension', 'image-min-dimension', 'mode-has-userx', 'min-width-for-disclosure', 'min-width-for-attribution', 'hide-disclosure-when-no-place', 'hide-attribution-when-no-place', 'disclosure-link-text-sponsored', 'disclosure-link-text-hybrid', 'disclosure-link-text-organic', 'disclosure-position', 'header-right', 'use-browser-line-clamp', 'use-dpr-images', 'slider', 'slider-slide-from', 'slider-min-effective-scroll-size', 'slider-transition-duration', 'slider-transition-delay', 'slider-background-color', 'slider-close-btn-font-size', 'slider-close-btn-size', 'slider-close-btn-color', 'slider-scroll-ref-element', 'slider-z-index', 'mode-adc-config', 'images-radius', 'visibility-constraints', 'ios-sc-link-target-mode', 'has-expand-animation', 'expand-animation-duration', 'expand-animation-max-height', 'read-more-config', 'enable-read-more', 'mode-has-adchoice', 'adchoice-large', 'adchoice-position', 'adchoice-target-url', 'read-more-box-selector', 'read-more-threshold', 'read-more-minimized-size', 'read-more-caption', 'mode-start', 'smart-ellipsis', 'tokenize-strategy', 'rtb-image-url-prefix', 'image-dpr-factor', 'image-allowed-ratio-diff', 'popup-custom-url', 'carousel-min-items', 'header-icon-url', 'before-detail-order', 'title-icon-url', 'before-detail-order-syndicated', 'header-icon', 'title-icon', 'has-thumbs-image-lazy-load', 'thumbs-image-lazy-load-margins', 'read-more-cutoff-from-type', 'read-more-anchor-selector', 'read-more-cutoff-length-type', 'read-more-cutoff-length-from-anchor-element', 'read-more-mode-devices', 'branding-separator', 'disclosure-alignment', 'p-video-overlay', 'gif-url-prefix', 'storyWidget', 'storyWidget-story-interval', 'organic-static-text-position', 'organic-show-static-text', 'organic-static-text', 'widget-theme-type', 'storyWidget-story-num-title-lines', 'format-x-days-ago', 'storyWidget-storyWidget-story-interval', 'storyWidget-storyWidget-story-num-title-lines', 'published-date-position', 'enable-category-card', 'emblem-position', 'organic-tracking-params', 'ctaWidget', 'mode-enable-feed-view', 'storyWidget-recommendation-reel-enable-text-under-slide-in', 'recommendationReel-enable-text-under-slide-in', 'recommendationReel-num-title-lines', 'recommendationReel-interval', 'recommendationReel', 'enable-title-icon-on-sc'],
                    "enable-title-icon-on-sc": false,
                    "organic-static-text": "MOST POPULAR",
                    "rows": 2,
                    "icons": false,
                    "format-rating": 'Rating: %s',
                    "thumbnail-position": "top",
                    "format-views": function(n) {
                        return 'Views: ' + this.formatNumber(n, false);
                    },
                    "read-more-mode-devices": "smart_phone",
                    "read-more-anchor-selector": "",
                    "before-detail-order-syndicated": "",
                    "slider-min-effective-scroll-size": 20,
                    "storyWidget-story-num-title-lines": 3,
                    "use-dpr-images": true,
                    "widget-theme-type": "DEFAULT",
                    "__style__": {
                        "": "width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",
                        ".playerCube .video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".trc_lightbox_overlay": "background-color:#000000;opacity:0.70;filter:alpha(opacity=70);",
                        "div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover": "background-color:transparent;",
                        ".playerCube div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
                        ".trc_pager_prev:hover, .trc_pager_next:hover": "color:#6497ED;",
                        ".trc_rbox_border_elm": "border-color:darkgray;",
                        ".syndicatedItem .video-views": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .video-category": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".syndicatedItem .sponsored": "color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;",
                        ".pager_disabled": "color:#7d898f;",
                        ".playerCube .video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".syndicatedItem .video-uploader": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".videoCube.thumbnail_start .thumbBlock_holder": "width:40%;_width:40%;",
                        ".playerCube .video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".video-uploader": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".trc_sponsored_overlay": "background-color:black;",
                        ".syndicatedItem .video-external-data": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".trc_rbox_header": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",
                        ".syndicatedItem .video-rating": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".videoCube.vertical": "border-style:solid none none none;",
                        ".trc_pager_unselected": "color:#7d898f;",
                        ".video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;",
                        ".syndicatedItem": "background-color:transparent;",
                        ".syndicatedItem .video-duration-detail": "color:black;font-size:10px;font-weight:normal;text-decoration:none;",
                        ".playerCube .videoCube.horizontal": "border-style:none none none none;",
                        ".videoCube.syndicatedItem .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                        ".videoCube.syndicatedItem.vertical": "border-style:solid none none none;",
                        ".sponsored": "font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;",
                        ".videoCube.syndicatedItem .thumbBlock": "border-color:darkgray;border-width:0px;",
                        ".videoCube.syndicatedItem .thumbBlock .static-text": "text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",
                        ".videoCube.thumbnail_start.trc-split-label .trc-pre-label": "width:30%;_width:30%;",
                        ".video-category": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".thumbnail-emblem": "background-position:5% 5%;width:35;_width:35;height:35;",
                        ".syndicatedItem .video-description": "max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;",
                        ".tbl-cta-style .cta-button:hover": "color:inherit;border-color:#999990;",
                        ".playerCube .video-published-date": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay": "background-image:null;",
                        ".video-label-box.trc-pre-label": "height:0px;",
                        ".video-label,.sponsored,.sponsored-url": "font-family:Arial, Helvetica, sans-serif;",
                        ".videoCube.thumbnail_start .trc-pre-label": "width:60%;_width:60%;",
                        ".syndicatedItem .video-title": "max-height:66.0px;*height:66.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",
                        ".playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay": "background-image:null;",
                        ".videoCube.thumbnail_start.trc-split-label .trc-main-label": "width:30%;_width:30%;",
                        ".videoCube": "width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",
                        ".sponsored-default .video-description": "max-height:2.2em;*height:2.2em;",
                        ".playerCube .video-description": "font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;",
                        ".playerCube .videoCube .video-label-box": "margin-left:81px;margin-right:0px;",
                        ".videoCube.syndicatedItem .thumbBlock .branding": "text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",
                        "div.videoCube:hover, div.videoCube_hover": "background-color:transparent;",
                        ".videoCube .story-widget.story-widget-text-under .tbl-ui-line": "background-color:#333333;",
                        ".videoCube .sponsored": "margin-top:-7px;",
                        ".trc_pager_pages div": "font-size:12px;font-weight:normal;text-decoration:none;",
                        ".sponsored-url": "font-size:9px;font-weight:bold;text-decoration:underline;color:green;",
                        ".playerCube .video-title": "font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;",
                        ".trc_rbox_header_icon_img": "margin:0px;height:18px;",
                        ".tbl-recommendation-reel .tbl-text-under-title-background": "background-color:#EBEBEB;",
                        ".tbl-recommendation-reel .tbl-ui-line": "background-color:#333333;",
                        ".videoCube.syndicatedItem.horizontal": "border-style:none;",
                        ".videoCube .thumbBlock .static-text": "font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;",
                        ".video-title": "font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#000000;text-decoration:none;",
                        ".playerCube .video-rating": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".syndicatedItem .branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:22.0px;",
                        ".trc_pager_selected": "color:#0056b3;",
                        ".videoCube.syndicatedItem": "background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;",
                        ".branding div.logoDiv": "font-family:inherit;",
                        ".trc_rbox_div": "width:auto;_width:99%;height:410px;border-width:0;padding:0;",
                        ".playerCube .video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".trc_pager div": "font-family:serif;",
                        ".syndicatedItem .video-label-box.trc-pre-label": "height:0px;",
                        ".videoCube.horizontal": "border-style:none;",
                        "div.trc_pager_pages div:hover": "color:#6497ED;",
                        ".pager_enabled": "color:#0056b3;",
                        ".playerCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                        ".videoCube .thumbnail-overlay": "background-image:null;background-position:5% 5%;",
                        ".playerCube .videoCube .video-duration": "display:block;left:36px;",
                        ".syndicatedItem .video-published-date": "color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;",
                        ".syndicatedItem .sponsored-url": "color:green;font-size:9px;font-weight:bold;text-decoration:underline;",
                        ".playerCube .videoCube .thumbBlock": "border-width:0px;border-color:darkgray;",
                        ".playerCube .video-label-box": "text-align:left;",
                        "div.sponsored-default:hover, div.sponsored-default.videoCube_hover": "background-color:inherit;",
                        ".videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background": "background-color:#EBEBEB;",
                        ".video-external-data": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".trc_pager_prev,.trc_pager_next": "font-size:12px;font-weight:normal;text-decoration:none;",
                        ".videoCube .thumbBlock": "border-width:0px;border-color:darkgray;",
                        ".videoCube.syndicatedItem .video-duration": "display:none;left:36px;",
                        ".sponsored-default .video-title": "max-height:2.58em;*height:2.58em;",
                        ".branding": "color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:22.0px;",
                        ".sponsored-default": "background-color:#F7F6C6;",
                        "__keys__": ['.video-title', '.video-description', '.trc_rbox_div', '.videoCube .video-duration', '.video-label,.sponsored,.sponsored-url', '.trc_rbox_header', '.sponsored-url', '.sponsored', '.video-category', '.video-duration-detail', '.video-rating', '.video-uploader', '.video-views', '.video-published-date', '.sponsored-default .video-title', '.sponsored-default .video-description', '.videoCube', 'div.videoCube:hover, div.videoCube_hover', '.sponsored-default', 'div.sponsored-default:hover, div.sponsored-default.videoCube_hover', '.videoCube .thumbnail-overlay', '.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay', '.trc_rbox_border_elm', '.videoCube .thumbBlock', 'div.videoCube:hover .thumbBlock', '.pager_enabled', '.trc_pager_counter', '.pager_disabled', '.trc_pager_prev:hover, .trc_pager_next:hover', '.trc_pager_selected', '.trc_pager_unselected', 'div.trc_pager_pages div:hover', '.trc_lightbox_overlay', '.video-label-box', '.trc_sponsored_overlay', '.thumbnail-emblem', '.videoCube .sponsored', '', '.videoCube.vertical', '.videoCube.horizontal', '.trc_pager_prev,.trc_pager_next', '.trc_pager_pages div', '.video-external-data', '.trc_pager div', '.playerCube .thumbnail-overlay', '.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay', '.playerCube .videoCube', '.playerCube .videoCube.horizontal', '.playerCube .videoCube .video-label-box', '.playerCube .video-duration-detail', '.playerCube .video-external-data', '.playerCube .video-label-box', '.playerCube .video-published-date', '.playerCube .video-category', '.playerCube .video-description', '.playerCube .videoCube .video-duration', '.playerCube .videoCube .thumbBlock', '.playerCube .video-rating', '.playerCube .video-uploader', '.playerCube .video-views', '.playerCube .video-title', '.playerCube div.videoCube:hover, div.videoCube_hover', '.whatsThisSyndicated', 'div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover', 'div.syndicatedItem:hover .thumbBlock', '.videoCube.syndicatedItem', '.videoCube.syndicatedItem.horizontal', '.videoCube.syndicatedItem .thumbBlock', '.videoCube.syndicatedItem .thumbnail-overlay', '.videoCube.syndicatedItem.vertical', '.videoCube.syndicatedItem .video-duration', '.syndicatedItem', '.syndicatedItem .video-description', '.syndicatedItem .video-title', '.syndicatedItem .sponsored', '.syndicatedItem .sponsored-url', '.syndicatedItem .video-category', '.syndicatedItem .video-duration-detail', '.syndicatedItem .video-external-data', '.syndicatedItem .video-published-date', '.syndicatedItem .video-rating', '.syndicatedItem .video-uploader', '.syndicatedItem .video-views', '.syndicatedItem .branding', '.videoCube.syndicatedItem .thumbBlock .branding', '.videoCube.syndicatedItem .thumbBlock .static-text', '.videoCube.thumbnail_start .thumbBlock_holder', '.trc_rbox_header_icon_img', '.video-icon-img', '.video-label-box.trc-pre-label', '.syndicatedItem .video-label-box.trc-pre-label', '.videoCube.thumbnail_start .trc-pre-label', '.videoCube.thumbnail_start.trc-split-label .trc-main-label', '.videoCube.thumbnail_start.trc-split-label .trc-pre-label', '.videoCube .video-label-box.trc-pre-label', '.branding', '.branding .logoDiv a span', '.branding div.logoDiv', '.videoCube .thumbBlock .static-text', '.syndicatedItem .video-label-box', '.logoDiv a span', '.tbl-cta-style .cta-button', '.tbl-cta-style .cta-button:hover', '.videoCube:hover .video-label-box .video-description', '.videoCube .video-label-box .video-title', '.video-label-box .branding', '.trc_header_left_column', '.trc_rbox_header .trc_header_ext', '.logoDiv a', '.videoCube a', '.trc_rbox_header .logoDiv', '.trc_rbox_header_span .trc_header_right_column', '.trc_header_right_part', '.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background', '.videoCube .story-widget.story-widget-text-under .tbl-ui-line', '.tbl-recommendation-reel .tbl-text-under-title-background', '.tbl-recommendation-reel .tbl-ui-line'],
                        ".playerCube .videoCube": "background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;",
                        ".branding .logoDiv a span": "color:inherit;font-size:inherit;",
                        ".video-label-box": "text-align:left;height:88px;margin:5px 0px 0px 0px;",
                        ".video-description": "font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",
                        ".videoCube .video-duration": "left:36px;display:none;",
                        "div.syndicatedItem:hover .thumbBlock": "border-color:inherit;",
                        ".trc_pager_counter": "color:#000000;",
                        ".whatsThisSyndicated": "font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;",
                        ".playerCube .video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".video-duration-detail": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        "div.videoCube:hover .thumbBlock": "border-color:inherit;",
                        ".video-icon-img": "margin:0px;height:18px;",
                        ".video-views": "font-size:10px;font-weight:normal;text-decoration:none;color:black;",
                        ".tbl-cta-style .cta-button": "font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;"
                    }
                }
            },
            "language": "en",
            "testmode": false,
            "direction": "ltr",
            "default-thumbnail": "http://cdn.taboola.com/libtrc/static/thumbnails/759bc49732394dde468c8d65a464e1a4.png",
            "domains": "",
            "sponsored-link-text": "Sponsored Link",
            "sponsored-video-text": "Sponsored Video",
            "branding-url": {},
            "configuration-version": "0",
            "external-credentials": "",
            "brightcove-list-id": "",
            "publisher-start": function() {
                /***** START - disqus-smb-blocked-domains *****/
                try {
                    var disqusBlockedDomains = /fdesouche.com|isaechia.it|myanimesonline.net|blogdacidadania.com.br|tijolaco.com.br\/blog|seriehd.org|elblogdelnarco.com|Holanime.com|btrend.amassly.com|weaselzippers.us|afromotion.tv|mp3beet.com|wanda.pluska.sk|maurizioblondet.it|showsq.org|read1.watchopm.net|luciferbrasil.com.br|middleeastmonitor.com|anitubebrasil.net|animeq.tk|turkceanimeizle.com|worldofsteven.com|guiadobitcoin.com.br|howtoarsenio.blogspot.com|streethiphop.co|bajarjuegospcgratis.com|frieord.no|diadrastika.com|skidrow-games.com|elnarcotube.com|force-download.net|autonet.cafr|redspot.tv|usethebitcoin.com|animesgo.info|komikmama.com|sceneone.tv|meuboymagia.com.br|www.topgear4fan.cz\/topgearoriginal|myasianpark.com|peliculasgoogledrive.info|riojalibre.com.ar|picsofcelebrities.com|jogos-para-android.com|amyscans.com|bulletproofsub.blogspot.com|itastreaming.click|jagledam.com|darkmp3.su|lilsubs.com|pokemonfire.com|ad4msan.com|animewire.net|boyculture.com|dkpopnews.net|gihosoft.com|blogdoandersonpereira.com|pt.downloadatoz.com|exclusivepremieretv.com|lintellettualedissidente.it|truthimedia.com|QanonDrops.com|bluevirginia.us|rahim-soft.com|mckfacts.blogspot.com|tzetze.it|beardburnme.tumblr.com|newsbuzzters.com|apkmaniafull.com|culturacomlegenda.org|lokosom.com.br|shoebat.com|dramaq.tw|nanatsunotaizai.net|shasha.ps|rascals.katbox.net|edmdl.com|complottisti.info|a-yak.com|animeout.com|documentaryheaven.com|pacificpundit.com|7dnevno.hr|freetvall.me|ilsudconsalvini.net|beiruting.com|unduhfilmrama.biz|panathinaikos-press.com|kickasshumor.com|veselepohadky.cz|cccsub.com|technical420.com|vodhk.com|music.sukson.com|videojinni.com|tutoriaisreckless.blogspot.com.br|latitudzer0.com|darktorrent.xyz|anitube.site|yourpinterest.com|dixiebotanicals.com|novelonline.me|overlord-es.blogspot.mx|erbesalus.it|veselerozpravky.sk|vape.deals|capitalvidya.com|sorozatclub.hu|pichodescargas.com|syria.news|mamnoo3ah.com|swooptheworld.com|baaz.us|thedailybell.com|southafricatoday.net\/media|homorazzi.com|you2repeat.com|livetvcafe.me|modapkdescargar.com|dev.citylife.thewebists.net|replens.com|estrategiadelaseduccion.com|wedrama.com|hotkambikathakal.com|thepokerbank.com|colunatech.com.br|fonemonitor.com|amerika.org|cracksnow.com|z1animes.com|news365.co.za|kenyanlife.info|joel.netEbonics|shrouhat4arab.com|appraw.com|panorama.pub|readbooks.me|moje-idealia.pl|newbostonpost.com|mix.dj|androidgalaxys.net|documentarystorm.com|lg-kdz-firmware.com|pusatgratis.com|theothermccain.com|mcdescargas.com|kpophotness.blogspot.com|xdroidzone.blogspot.mx|memoriadatv.com|itslovetranslation.blogspot.com|patriotepourtoujours.com|thegg.net|zon3-android.net|childrenshospitalblog.org|worldscinema.org|cliptomp3.eu|bangkokjack.com|anonimove.com|pokemontowerdefense.net|chibimanga.info|pujanggawebtoon.com|hopkinsworld.com|ghost.estudiopatagon.com|aikanxi.org|lotozabava.com|jdubuzz.com|singledudetravel.com|nuus.info|pccrea.com|eclectablog.com|topsecretwriters.com|mattforney.com|idea.lanyus.com|celebstoner.com|confidentlovers.com|lambingan.ae|watchfomny.com|achotv.com|apkone.net|vactruth.com|fetihmedya.com|judgybitch.com|magnetfox.org|anime-liberty.com|lonebullet.com|foodology.ca|cinepinoy.ag|thecommentator.com|fuzokuu.com|dajuegos.com|tibe-translations.com|softchamp.com|kimamanitranslate.tumblr.com|youtubemultidownloader.online|barcroft.tv|subvito.eu|readshokugekisoma.com|djmusiccrate.com|zonafile.co|freebtc.website|seiyuu.me|irresponsabile.com|artist-grapevine.tumblr.com|kpopexplorer.net|showq.net|emptykingdom.com|topmixtapes.com|theworldofwarcrafters.blogspot.com|needforponies.fr|androidfilebox.com|tuboor.com|kickasskandy.com|cloud.coronation.invg|blog.pianetadonna.it|cent.browser.ideaprog.download|codekiem.com|moipromokody.rumozhno-deshevle|ar-gamez.com|appapks.net|tortuga-ceviri.com|marcaodroid.com|apne.tv|nappyafro.com|droidthunder.com|howdogcare.comtop-10-best-dog-dryer-reviews|softmusic.info|speedwealthy.com|hackromtools.altervista.org|owaahh.com|sherbrooktimes.com|light-multimediax.com|gravitytown.net|nod32-kluchik.ru|mecze4free.huuzy.com|data.ukp.go.id|taiwanhearts.org|documentairenet.nl|ultrasn0w.ca|apkbird.com|planetxnews.com|turkbuzz.net|dbzlatino.com|aurarealm.com|raymondibrahim.com|totobro.com|defensereview.com|hints.binaryage.com|hardlevel.com.br|NegusWhoRead.com|whatsapp-free.ru|replay.fr|hannibaltv.com.tn|bajarfacebook.com|homedefensegun.net|derocket.ru|ww1.readnanatsunotaizai.com|hot-shorts.com|gunwatcher.com|pphchat.com|yesmovieshd.net|trickster-book.com|animesdai.stream|spcnet.tv|ellinotourkika.eu|cactusmartorell.com|lorysims.tumblr.com|W0lfDroid.com|rinf.com|whitecloudpavilion.com|9tensu.com|shinkunovels.com|techincidents.com|amalgam-fansubs.tk|subapics.com|starstorm-ge.blogspot.com|bytecoin.org|dmfa.katbox.net|worthplaying.com|downtr.club|mzansionline.co.za|wizbangpop.com|hemen-indir.com|yosfi1.com|fashthenation.com|animan.net|english-with-fun.com|macos-download.org|androidcentral.us|wemanga.com|certanejo.com.br|omelhordobailedasaudade.blogspot.com.br|gigavideo.sk|repo.biteyourapple.net|tavernadoelfo.com.br|muryodownload.blogspot.com|mixtapemadness.co.uk|mawords.com|mundoapk.com.br|arcadecabin.com|logiosermis.net|rightedition.com|freefq.com|blackclovermanga.com|ihealthtube.com|aldeid.com|u＼ivo.com|bdtorino.eusito|gunsumerreports.com|muslimsandtheworld.com|thermidormag.com|visualgamer.com|exposingtruth.com|mghack.com|elyazpro.tech|howtomine.co|shadowfight-2.ru|teluguwishesh.com|ekasinewsonline.co.za|id.downloadatoz.com|indo-cybershare.com|netchimp.co.uk|skype-free.ru|automps.ru|virtualr.net|cooler.sk|wnow.lk|npetroff.com|pokecompany.com|suki48.web.id|xidea.online|graphic-dl.com|desinerd.co.in|farhadexchange.com|iplusfreemusic.blogspot.com|vibestarmedia.net|thestreetblogs.com|speisa.com|celebslam.com|nudoq.com|urbanroll.com.gh|torshina.me|fxpips.com|musichunt.in|creativeminorityreport.com|drenicasot.com|mundodse.blogspot.com|mawazin.net|simsworld.it|androidweblog.com|2018.magpro.club|toprightnews.com|ZeroSecurity.org|clonescripts.com|windore.blogspot.com|indo-mod.com|lovemenicecomic.com|mp4se.video|tadwinty.com|cinepata.com|winnersedgetrading.com|wt1.at|conservativealert.com|jguana.com|drakormaksnity.org|yalibnan.com|smartandroid.com.br|novelsliterature.blogspot.com|iloveweed.net|mavimanga.com|pandora-team.comlel|pleng-mun.com|tom-dzherri.net|haruhichan.com|chireads.com|videosolo.jp|callernotes.in|poloskaos.com|mp3panda.com|anaman.net|zaronews.world|cydiacrawler.com|7deadlymag.com|tipandtrick.net|appbuntu.com|vaccinationinformationnetwork.com|bookmp3.ru|y8game.com|endoftheamericandream.com|thevitalounge.com|motylewnosie.pl|goldmyne.tv|downloadbatch.com|dramacool.info|tecnoguide.info|kaboom-magazine.com|mastaklomods.com|wmos.info|online-mp3.co|coincheckup.com|coingecko.com|flvpeliculas.org|dogguie.net|parellet.com|shippuden.tv|spi0n.com|respuestario.com|vorterix.commalditosnerds|diario1.com|besyokursulu.com|faqyeah.com|com-magazin.de|jailbreak-mag.de|elblogdelnarco.com|moiceleste.com|iphoneate.com|afromotion.tv|animeflv.me|gameswelt.de|capitulosdesoyluna.net|Holanime.com|codigonuevo.com|danimados.com|bajaryoutube.com|animelatino.tv|mangavadisi.org|fulltorrentindir.net|indirgo.club|mangadenizi.com|korelicenneti.com|mundokodi.com|puzzmos.com|leomanga.com|mangahis.com|nakamafr.com|turkanime.tv|pivigames.blog|starfikir.com|online.yeppudaa.com|b.marfeel.com|programasvirtualespc.net|proandroid.com|servimg.com|tamindir.com|menotty.com|mamcin.com|windowscracker1.net|ufo-spain.com|animeai.xyz|peliculashdr.net|animeon.pl|torrentsbees.com|animehub.ac|bucketlink.net|phys-kids.com|dramatvs.com|animeboys.io|mangaindo.id|seriesplus.tk|lastcrypto.com|umiseries.com|tooncitydl.ga|urgrove.net|songsjumbo.com|cryptokanguru.com|filikula.co|alresalah.ps|readheroacademia.net|kitapindir.net|pdfwala.com|projetos.guilhermexavier.com.brhorainfobeta|apkgamezone.com|freemangahere.com|freezcore.com|haxtalks.com|4filmk.org|hao8tv.com|iogames.fun|pcc-games.com|animes9.com|ozymandiasrealista.blogspot.com.br|rxleaf.com|awnime.net|fullindir.co|freemanga.to|hatigarmscans.net|hit2k.com|sevendeadlysins.net|rampage.us.lt|solarmovie.one|ps4wiki.xyz|comiconline.me|phimnga.com|reanime.org|sambizanga-musik.blogspot.com|localhost\/bloging|tfmclient.cf|cannabismd.com|newdroid.info|bisskeykita.blogspot.com|jbox.com.br|silent-otaku96.com|alfieaufdeutsch.tumblr.com|elamigos-games.com|orvel.me|canna.co.il|morfansub.com|turnupbaze.com|smokeroom.com|ofofonews.com|kireader.altervista.org|read.lhtranslation.com|farming-simulator15.ru|etherdesk.org|taxiasian.com|onepiecetime.tv|hectorvasquezoficial.wix.com\/radio-capital-|musicallanera.co|oneindir.com|cronologiadoacaso.com.br|cartoonntv.blogspot.com|ngomik.in|gamesbae.com|bitcoinindonesia.net|an-online.com|watchwrestlingup.live|lemurtube.com|mangafans.co|icobattle.com|couchtuner2.io|livesia.com|slhiphopmusic.com|mynation.com|yakyusoku.com|crunchyroll.top|pagepoint4u.blogspot.com|mangawt.com|ddlsinhalamovies.blogspot.com|atrocidades18.com|thestash.wikileaf.com|livesportlab.com|mtbtutoriales.com|mightyfansub.com|kariadz.blogspot.com|jambidaily.com|hentaibar.com|us24news.com|rapeton.com|cryptoranker.io|wejeheni.com|mangawww.com|netshadows.it|cptutos.com|metainforma.net|animetx.com|sodownload.com.br|webcache.googleusercontent.com|attackontime.com|deepsid.chordian.net|audiobooks.cloud|lightningnovel.com|animeschan.com|thecalimack.cc|kintamaindo.co|suvooh.com|ehmed.xyz|inependentloud.com|genpact.myhbp.org|koinmedya.com|diariofolletico.com|myhbp.org|zhanlve.org|marutv.io|piratinha.net|web.krlovetv.com|cookiesparanet.com|clients.webkitmedia.com\/hopesubs|animeexanimee.blogspot.com|gizbo.tumblr.com|receitadiy.com|tragediasemortes.com|membros.segredosdepesca.com|wiwianime.com|downloadraw.com|beinghealthforlife.xyz|geefee.rain-labs.com|b48.club|estanteriangelik.postach.io|celebjar.com|unliroom.blogspot.co.id|oof.tumblr.com|historyhit.com|thehollyweirdtimes.com|minosta4u.com|404tube.com|djnetodeananindeua.com.br|plena507.com|seriesonline.droppages.com|arte.tv\/tracks|th.hrm-soft.com|football.sport-nation.net|baixarsoftware.com|dev.tutsport.com|kotalipara.com|tracks.arte.tv\/de|leplangt.com|arte.tv\/de|arte.tv\/guide\/fr|mangaleer.com|freetvall.net|datingwithbouncer.co.za|theconservativebrief.com|teknoup.club|videoviral.live|thepatriotbrief.com|tunesnepal.com|free-cookiesnetflix.blogspot.com|mugensakura.blogspot.com|gledajcrtace.blogspot.com|Punter2Pro.com|sportsf1.com|spieletester.com|tecnotutoshd.net|vsesochineniya.ru|hospital.balajisoftwaresolution.com|acreanimes.com|audiokniga.info|60mbanime.com|balochsaaz.com|play.kpopreplay.com|sosyalcilik.com|blacklove.kinsta.com|dawabio.com|readhxh.com|luinovel.blogspot.com|rabcommentssection.blogspot.com\/?m=1|hiddentaxonhumanity.com|gadgetunlocker.com|newsthessaloniki.gr|arab-cydia.com|realitytvcheck.com|mangalek.com|khaledmega.com|hot-cars.mega.ks.ua|anone.nimegami.com|kabisoftware.com|pamot.com.br|playplus.cc|menutupikekurangan.blogspot.com|sardeath.com|senolkayhan.com|purple-space.com|christianexaminer.com|ketizenstars.com|pcgamesrealm.blogspot.com|softsyard.blogspot.com|thevapemall.com|chrome-portable.com|mestarx.com|ilmumapel.com|oceanofpdf.org|scholarsmarket.com\/beta\/feedback|cacodequengo.com.br|csyoutube.com|coinheaps.com|vinylemusique.fr|cryptocomes.com|appshopfy.co|zambianews24.com|mineable.com|ohsayword.com|itweakos.store|techexplained.net|icopips.com|jio.tumbllr.com|civilisationism.net|goblinslayer.org|igetint0pc.com|kirasa58.ru|jaiefraofficial.blogspot.com|asianfall.com|letiradio.ru|rajaapk.com|ichirinnohanayuri.com|gremiodajustica.com|event.siattend.com|saolightnovel.com.br|9apps.co.in|hqm.disposable.solutions|fullindir.en-erplatforms.com|naspers.myhbp.org|animebatch.web.id|loveryuri.blogspot.com|basicstalk.com|cryptoblockwire.com|tumbilali.tumblr.com|sport365live.blogspot.com|kira97.hgratis.com\/slide|Teknews.vn|androidcottage.com|gameshardyt.blogspot.com|mamsmusic.co.za|nox-player.ru|mzansi365.co.za|jswgroup.myhbp.org|hofbrasil.eplaces.com.br|dramas.biz|noiportal.hu|descargandolo.com.pe|npcsimulator.com|teknodroid.my.id|leermanga.xyz|endtimesherald.com|wgtube.me|appsenjoy.com|offlinemods.net|manga.animelove.cx|drama3sk.com|limetorrents.online|saltytelevision.com|instube.com|apunkatorrents.net|apkgod.net|sakuranovels.net|shinciniku.com|articlefirm.com|kompilabs.com|universoracionalista.org|instazood.com|potatomuncher.tumblr.com|hdwallpapers.at|masterkreatif.net|audioplug.net|demokrasi.co|heylocannabis.com|moviehustle.com|dicasparaminhasaude.com.br|milamcfly.com|entrepreneursays.com|nreporters.com.ng|romsmode.com|forexalgerie.com|gameoverth.com|apkmodif.com|trapadan.com|samanyika.com|ios-today.com|mp3land.co|playq.me|alldyjk-blog.blogspot.com|cusromos.com|koreangossip.net|bdstudiogames.com|readster.me|watchsao3.org|Chronoknight.com|gozeetv.com|radiohotmusic.it|whatsapp-web.ru|mejapraktek.com|society.ga|wordpress-83726-521344.cloudwaysapps.com|nettenoluyo.com|fmportugal.net|afrobeatsglobal.com|solid.tube|bdboss24.net|yuyuhakusho.tv|vtube24.com|static.parastorage.com|leafwell.co|pucuktranslation.pw|sensanostra.com|coitezinho.com|ÊñáÊÄùÈù©.com|cassimirogamer.com|adehgame.com.br|okpadi.ng|canliyayin.tv.tr|apkclean.com|footballstreamings.com|eflix.is|highenergytrading.com|renascans.com|apkenter.com|zerex.sk|skriptprodazha.ru|confereonline.com.br|mubantigua.com|androtechstore.com|aovivoagora.online|wlst.cloud|thesocialmedialab.es|educratsweb.com|greatanimation.org|tecnoblob.it|toonraon.cf|sganime.org|tvtotalaovivo.blogspot.com|facebot.ru|read7deadlysins.net|thewatchwrestling.com|story-kpop.blogspot.com|mp3den.biz|defconnews.com|palcoemp3.net|velhoscartuchos.sonaje.com|anime12top.blogspot.com|febrycell80.blogspot.com|filmoch.com|om-hp.com|kizibox.com|alldyjk-blog.blogspot.com|tapscape.com|prizmbaza.com|inventure.com.ua|tutorialtech.com.br|tediofansub.online|review.cmsod.jp|feed-the-birds.com|upstox.com|pinoygag.tv|vorticeblu.com|webcache.googleusercontent.com|apkindirsene.com|allbooksworld.com|hunterloads.com|apkgk.com|pillowbux.com|123gostream.club|dizimafya.com|stopmandatoryvaccination.com|fanfictranslations.com|kolicurry.net|blog.boxun.com|tamilmicset.com\/sg|evangelionbr.com|alkimation.com|ukcarparks.info|ts4installer.tumblr.com|topcitysound.com|minezilla.ru|sonq.ru|conteudo.academiadalogistica.com.br|usitility.com\/es|kaiquebarreto.com|indoxx1tv.co|onlinemanga.xyz|mangabatch7.blogspot.com|blueplaqueplaces.co.uk|dataunion.tistory.com|anihon.net|casefileng.com|iflix.cool|v-i-t.com|radiocavado.ricardocorreia.me|allthickwomen.com|blacklove.kinsta.com|sixdegreesofzr.com|siesdestino.com|minecraftsemlimites.com|bnha.wbijam.pl|casefileng.com|cc.greatfire.org|crotorrents.com|dramaturca.com|fkmagazine.lv|frapeasy.com|go.bluesguitarmaster.com|hackedarcadegames.com|67k8k.com|OnePiece360.com|Sgn9.strikingly.com|afrikan-daily.com|androiteka.com|aonote.info|appstore.ofadate.com|audienciaetv.com|beinghealthforlife.xyz|blog.dropwow.com|blog.marketcash.io|blogdeizquierda.blogspot.com|cricdaddy.com|dancehallreggae.com|downloadoye.com|dramaindo.info|fairytail3.net|fnbrleaks.net|galaktica.pl|gifgame.in|gogoanime.party|hontra.com|irockumentary.com|lfm42.tmdev.co.uk\/blog|lhtranslation.net|midev.cl\/chilexpressblog3\/wp|nagg.in.ua|natureworksbest.com|ngomik.in|onestensemble.net|otakusave.com|radiodos.float.com.ar|sizzlingguitarlicks.com\/doug-seven-3-steps-to-guitar-mastery-video-1|snaptime.kr|somethingtolaughat.com|szczepienie.info|theotakuarena.com|tokyoghoulre3.com|totv.org|trijo-news.ohmyhosting.se|tvpadnews.com|webnhalam.com|cagayanoakoblog.info|callesguanacaste5.com|como-espiar.com|diziindirmobil.com|dopolavorointer.org|elreinoinfantil.com|handmaidsbrasil.com|hrichina.org|karasardegna.it|komiktime.com|louisefultonkeats.com.au|midiainterior.com.br|mngdoom.com|mundoemfoco.com.br|naturalhealingmagazine.com|odishastudents.com|paktrendingnews.com|realstreetshit.com|sadyk.ru|solomonfreshbeat.com.sb|tambilgi.net|thesocietyinternational.com\/members|timesofamerica.info|tokyoghoul.site|wakionline.com|www1.animeget.net|a-o.ninja|affkars.com|animesimple.com|animeworld.online|archicad-autocad.com|bithub.pl|coinheaps.com|cracked-games.org|criptobuzz.com.br|cutearn.ca|cutsouf.com|dlkpop.com|download-basket.giveawayoftheday.com|flixreel.to|fx5erie2.blogspot.com|icoguru.io|icutit.ca|jatoku.xyz|koreanelements.com|loucosporseriados.com|metta.lionsroar.com|milgra.com|moneytimes.com.br|movisubmalay.com|newsalert.com.ng|qablog.verticalresponse.com|rawqq.com|readnovelfull.com|spoortscar365.com|steamunlocked.com|themindunleashed.com|thetruthrevolution.net|tokyoreanimes.blogspot.com.br|torrents.me|urdukhabrain.com.pk\/video|Brighteon.com|alfadownloads.com.br|apk4fun.com|brightsidestories.com|cuevana2.com|dlgameplays.com|exmvies.com|fameproject.org|humorhimlen.dk|indir.vip|jenomhd.cz|kocaelicumhuriyettv.com|leguilegui.com|medmeister.de|newsapks.com.br|offertegiuste.com|otgtv.com|seraamedia.org|sitstay.com|thepatriotbrief.com|videofk.com|videosolo.com|www1.mydownloadtube.com|jink1982.tistory.com|laurenkelp.com|lokfeeder.com|machineslicedbread.xyz|medycznyolej.org|meioambienterio.com|mp3lover.org|myanmareffectiveprogrammer.com|read.lhtranslation.com|textsheet.com|viralfresh.com|virtualconnect-dev.com|w1.readtokyoghoulre.com|webcache.googleusercontent.com|ww2.watchsao.tv|ygfamilynews.info|thedaoofdragonball.com|hopesubs.com\/home|2018a.svlovetv.com|smotrisport.pro|samehadaku.net.in|apakabs.com|androiteka.com|1stonkpop.com|vinylemusique.fr|plus-belle-la-vie-episode-en-avance.biz|safe.triksimple.info|thebluntblonde.com|gunsumerreports.com|goanimelist.me|4-pics-1-word-answers.com|bappamajhaekdant.com|washmallay.com|everyjoe.com|ww2.narutoget.io|fpgtorrents.net|2game.com.br|lmisports.net|onewebcomic.net|deliriosyaoi.web.app|matakomik.com|topredes.com|watchfireforce.com|storyskpop.blogspot.com|noal0.blogspot.com|bestcustomwriting.com|esoftner.com|apkwonderland.com|rachid.iblogger.org|emu.thesn.net|getintopca.com|Sgn9.strikingly.com|about.disqus.com|buzzeur.xyz\/wire|investigationdiscovery.com|nigeria.smetoolkit.org|myvidster.com|manytoon.com|themindunleashed.com|onepiecetime.tv|vs.wbijam.pl|soyluna3tv.com|trilafmusic.blogspot.com|naturalblaze.com|javhiso.net|opruto.com|mafiakomik.com|mangapdf.net|wdfshare.com|ifxd.bid|natural-homeremedies.com|25anime.com|9anime.ru|allnewspipeline.com|americanlookout.com|aniwatcher.com|anime1.me|animepill.com|animeshow.tv|asia4hb.com|bitcoin.com|chinaq.in|dcclothesline.com|bewell.com|wppmod.blogspot.com|frontpagemag.com|trumptrainnews.com|drama3s.tv|dramacu.com|dramago.com|fmderana.lk|freedomheadlines.com|musvozimbabwenews.com|watchnaruto.tv|redrightvideos.com|songsify.com|activistpost.com|thegatewaypundit.com|wnd.com|xyz.net.au|preservefreedom.org|southafricatoday.net|iharare.com|informationliberation.com|dcalert.com|books-share.com|amalgam-fansubs.moe|25anime.com|9anime.to|dramacool.movie|animeout.xyz|animearchivos.com|koreandrama.es|thenationalpulse.com|bitchute.com|nimeindo.com|nontonanimeindo.net|animetoon.org|animeindo.co|animesonehd.net|vidstreaming.unblockall.org|vidstreaming.io|seriehd.work|bollywoodmaal.com|pashtoaudios.com|soulask.com|dodi-movies.download|yesmovieshd.to|animeonlinehere.net|123movie.movie|a2zmoviesok.blogspot.com|ishits.ru|beiranews-so9dades.blogspot.com|dramanice.movie|likeop.com|tokyoghoulre.xyz|fmovies2.io|vidcloud9.com|k-vid.net|putlocker1.to|gogoanime|altadefinizione|altadefinizione.express|alta-definizione.info|eurekaddl.icu|animeshow.tv|altadefinizione.family|cb01hd.com|marapcana.rocks|anitube.cx|guardaserie.watch|marapcana.london|marapcana.press|altadefinizione.productions|altadefinizione.beer|eurostreaming.band|filmsenzalimiti.pink|seriehd.watch|watchasian.net|cb01.video|alta-definizione.space|igg-games.com|marapcana.best|seriehd.net|bookocean.net|itastreaming.stream|seriehd.life|pfccskanews.ru|altadefinizione.red|filmpertutti.uno|marapcana.store|marapcana.fun|altadefinizione.center|itastreaming.gratis|altadefinizione.band|altadefinizione.studio|eurekaddl.surf|alta-definizione.club|altadefinizione.casa|altadefinizione.fm|altadefinizione.style|marapcana.pro|piratestreaming.watch|marapcana.icu|gogo-stream.com|seriehd.link|marapcana.monster|marapcana.pink|yesmovies.gg|marapcana.cc|seriehd.work|watch-series.co|marapcana.buzz|seriehd.digital|footballhighlights247.com|9anime.to|ziperto.com|eurekaddl.website|samara11x11.ucoz.ru|altadefinizione.rocks|eurekaddl.work|marapcana.space|yo-movies.com|marapcana.sur|amgreatness.com|dailycaller.com|thegreggjarrett.com|therightscoop.com|trendingviews.co|21stcenturywire.com|ahtribune.com|food.news|investmentwatchblog.com|nationalfile.com|talknetwork.com|stream.org|wearechange.org|3ccorp.net|100percentfedup.com|americanlookout.com|bitchute.com|canadafreepress.com|conservativedailypost.com|defiantamerica.com|filmingcops.com|iharare.com|libertyhangout.org|moonbattery.com|newspunch.com|newspushed.com|newsrescue.com|newswars.com|populist.press|en.protothema.gr|redice.tv|rsbnetwork.com|southafricatoday.net|thefederalist.com|thenationalpulse.com|remnantnewspaper.com|townhall.com|trumptrainnews.com|waynedupree.com|worldstarhiphop.com|southfront.org|manga.mexat.com|mangakita.net|tructiepbongda.xyz|bitchute.com|hotnessrater.com|conservativeus.com|romsmode.com|nairobiwire.com|flyheight.com|mrworldpremiere.tv|dailydallying.com|bagi.co.in|ahtribune.com|anitubebrasil.net|411mania.com|lemonidolshow.com|apps.evozi.com|onlineanimeizle.com|freepressers.com|liveuamap.com|armiusate.it|trollalley.com|rawdevart.com|animesrbija.com|xyz.net.au|kingdommanga.com|sites.google.com|assistaonline.com.br|fdesouche.com|trendolizer.com|americanthinker.com|americanlookout.com|iphoneitalia.com|cloverchronicle.com|worldstar.com|planetaneperiano.com|oceanofgames.com|thegatewaypundit.com|ocean0fgames.com|climatedepot.com|rootmygalaxy.net|idownloadblog.com|novelplanet.com|w2.hotanime.me|animetv.to|manualdosgames.com|investmentwatchblog.com|animedao.com|m.facebook.com|paradisenews.ng|pesstatsdatabase.com|southafricatoday.net|skythewood.blogspot.sg|en.protothema.gr|whoiskjozborne.com|thelinkup.com|jagledam.com|shingekikyojin3v2.net|kissmanga.com|pivigames.blog|alloutdoor.com|www2.9anime.to|gamesradar.com|richardsonpost.com|panathinaikoskosmos.com|pecintakomik.com|bajalogratis.com|topexpensive.com|25anime.com|tmonews.com|clickyclicktranslation.blogspot.com|washingtonguardian.org|blazingcatfur.ca|mangapark.net|mangadenizi.com|ovnihoje.com|darktorrent.xyz|moddingway.com|onsports.gr|manytoon.com|ad4msan.com|swordartonline.wbijam.pl|naturalhealth365.com|wppmod.blogspot.com|filehorse.com|kisstvshow.to|fixthisnation.com|nwanime.tv|gogoanime.io|leviatanscans.com|mangakatana.com|lilwaynehq.com|xiaomitips.com|repeatmyvids.com|icomarks.com|mangapark.me|epochtimes.de|opindia.com|elmoslsal.com|lessons.squaretosquaremethod.com|conexaopolitica.com.br|francesoir.fr|shqqaa.com|mangaseeonline.us|thenetnaija.com|faboverfifty.com|kisscartoon.ac|conservativeangle.com|getintopc.com|praag.org|thenationalpulse.com|chatlineguide.com|triklopodia.gr|themostimportantnews.com|constitutionalrightspac.com|dramaq.twF|animeindo.net|hipstrumentals.com|altadefinizione.pink|naturalon.com|blog.buttermouth.com|spetteguless.it|animegafirex.com|jaiminisbox.com|kinowar.com|selfreliancecentral.com|greatgameindia.com|powerlineblog.com|miheadlines.com|usacarry.com|iharare.com|waynedupree.com|summit.news|readcomiconline.to|thejewishvoice.com|test.com|kissasian.sh|thehollywoodconservative.us|gojinshi.com|merakiscans.com|wwx4u.com|thegrandreport.com|neumanga.tv|starsue.net|tribogamer.com|rewayat.club|dailystar.com.lb|lievjournal.com|celebromance.com|mangazuki.co|anime1.me|allfont.ru|kissanime.ru|yourdestinationnow.com|politicallycorrecter.com|windowsreport.com|boxun.com|kissanime.to|theprepperhub.com|getcomics.info/
                    if (document.location.href.match(disqusBlockedDomains) != null) {
                        delete _taboola.push;
                        this.dispatchLoadRequest = function() {};
                    }
                } catch (e) {
                    __trcError('Error in publisher-start disqus-smb-blocked-domains ' + e.message)
                } /***** END - disqus-smb-blocked-domains *****/
            },
            "get-user": function() {
                return null;
            },
            "get-creator": function() {
                var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
                for (var i = 0; i < m.length; i++) {
                    if (m[i].name == 'uploader' || m[i].name == 'item-uploader') return m[i].content;
                }
            },
            "get-views": function() {
                var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
                for (var i = 0; i < m.length; i++) {
                    if (m[i].name == 'views' || m[i].name == 'item-views') return m[i].content;
                }
            },
            "get-rating": function() {
                var m = document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);
                for (var i = 0; i < m.length; i++) {
                    if (m[i].name == 'rating' || m[i].name == 'item-rating') {
                        if (!isNaN(parseFloat(m[i].content))) return m[i].content;
                    }
                }
            },
            "get-tags": function() {
                return [];
            },
            "logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by.png",
            "has_valid_rss": false,
            "actionscript_version": "3",
            "brightcove-uses-reference": false,
            "publisher-end": function(id) {},
            "ie-logo-image": "http://cdn.taboolasyndication.com/taboola/powered-by-small.gif",
            "attribution": true,
            "notify-loaded": true,
            "metafields": "",
            "normalize-item-id": function(itemid, type, canon) {
                if (!canon && type == 'text' && typeof itemid == 'string' && itemid.search(new RegExp('^https?://')) == 0) itemid = itemid.replace(/\?.*/, '', false);
                return itemid.toLowerCase();
            },
            "normalize-item-url": function(itemurl, type, canon) {
                return itemurl;
            },
            "read-paused-bcplayer": false,
            "normalize-request-param": function(req, mode) {
                return req;
            },
            "normalize-log-param": function(name, value, mode) {
                return value;
            },
            "timeout": 8000,
            "prenormalize-item-id": {
                "host": true,
                "fragment": "^(/video/|!)",
                "query": ["p", "id"],
                "truncate-at": ["search.searchcompletion.com", "org.mozilla.javascript.undefined"],
                "trailing-dirsep": true
            },
            "prenormalize-item-url": false,
            "loader-impl": "",
            "trc-network-mapping": {},
            "trc-skip-failover": false,
            "backstage-domain-url": "",
            "adc-config": null,
            "link-target-conf": null,
            "ios-sc-link-target": {
                'NAV': '_self',
                'NT': '_self',
                'SP': '_self'
            },
            "small-ios-device": "iPhone|iPod",
            "read-more-debug": false,
            "read-more-devices": "smart_phone",
            "attribution-disclosure-direction": "ltr",
            "mode-pub-start": function() {},
            "before-video-load": function() {
                return true;
            },
            "publisher-logo": {},
            "detect-item-from-same-host": function(host, itemHost) {},
            "mode-before-video-load": function(rbox) {
                return true;
            },
            "after-card-created": function(placementData, publisherCardNum, feed) {},
            "publisher-branding": {},
            "feed-view-devices": "smart_phone",
            "feed-view-enable": false,
            "global": {
                "GPT-refresh-control": true,
                "abp-detection-enabled": true,
                "advanced-feed-view-telemetry-enabled": "0.01",
                "allow-nofollow-for-exchange": true,
                "amp-support-consent-string": "true",
                "amp_target": "_top",
                "block-video-prob": 0.1,
                "bulk-available-events-delay": 1000,
                "bulk-available-events-strategy": "delay",
                "bulk-body-debug-sample-rate": 1.0E-4,
                "bulk-metrics-events-strategy": "delay",
                "cdn-taboola-path": "cdn.taboola.com",
                "cds:send-dnid": true,
                "cds:send-uad": true,
                "cloudinary-aspect-ratios-list": false,
                "cloudinary-encode": true,
                "cloudinary-encoding-and-100-round-factor": {},
                "config-analytics": {
                    logTimer: 50000,
                    logLength: 5,
                    traffic: 1,
                    measureEnable: true,
                    measureTimeToSend: 10000,
                    disableRawDataSend: true
                },
                "consent-presets": {
                    taboola_default: null
                },
                "css-isolation": false,
                "default-event-route": "trc-events.taboola.com",
                "default-stories-height": 135,
                "defer-cookie-sync": 2000,
                "defer-scripts-render": 500,
                "defer-userx-render": 1000,
                "disable-explore-more-video-reset": true,
                "disable-iframe-for-tracking-pixel": true,
                "disable-rbox-usage-logging": false,
                "disable-scope-feed-css": false,
                "disable-sponsored-for-links": false,
                "disable-unified-iframe-pixel-reporter": true,
                "disable-yield": true,
                "disclosure-enabled": true,
                "enable-analytics": "true",
                "enable-bid-detection": 0,
                "enable-bulk-events": "true",
                "enable-call-to-action-creative-component": false,
                "enable-comscore-brazil-distributed-content": true,
                "enable-consent": true,
                "enable-cta-component": true,
                "enable-custom-injection": true,
                "enable-deferred-available": true,
                "enable-deferred-visible": true,
                "enable-detect-bots": true,
                "enable-events-api": true,
                "enable-exm-inside-iframe": false,
                "enable-experiments-variant-id-event": true,
                "enable-explore-more": true,
                "enable-explore-more-state-check": true,
                "enable-explore-more-video": true,
                "enable-ie-split-click-event": true,
                "enable-item-override": true,
                "enable-loader-cache-buster": true,
                "enable-loader-type-event": true,
                "enable-manual-visible": true,
                "enable-mode-injection": true,
                "enable-multi-pv3": true,
                "enable-new-ellipsis-module": 1,
                "enable-organic-redirect": true,
                "enable-organic-redirect-on-amp": true,
                "enable-rbox-map": false,
                "enable-read-more": true,
                "enable-real-time-user-sync": true,
                "enable-real-time-user-sync-with-consent": true,
                "enable-social-events": true,
                "enable-spatial-data-per-page": 1,
                "enable-text-over": "true",
                "enable-trc-cache": false,
                "enable-trc-route": true,
                "enable-video-ajax": true,
                "enable-visibility-intersection-api": true,
                "event-logger:publisher-enable-spatial-events": true,
                "event-types-to-route": ["debug", "perf", "metrics", "bulk-metrics"],
                "events-api-click-enabled": true,
                "exclude-subd-shift": ["15.taboola.com", "trc.taboola.com", "authentication.taboola.com"],
                "explore-delay": 500,
                "explore-more-google-timer": 10,
                "feed-max-num-of-consecutive-failed-requests": "5",
                "feed-observer-load-next-batch": true,
                "flc-enabled": true,
                "force-reset-on-ready": true,
                "has-adchoice": true,
                "has-mode-geometry": true,
                "has-page-geometry": true,
                "has-page-geometry-extended": true,
                "has-slots-geometry": true,
                "has-slots-saliency": true,
                "has-userx": true,
                "image-optimization-url-per-item-is-enabled": "1",
                "image-url-prefix": "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/",
                "inject-comscore": false,
                "inject-mdotlabs": false,
                "inject-taboolax": false,
                "ios-sc-link-target": {
                    "NAV": "_top",
                    "NT": "_top",
                    "SP": "_top"
                },
                "keep-referrer-in-session": true,
                "lazy-render": {
                    enable: true,
                    raKill: true
                },
                "lazy-render-enable": true,
                "lazy-render-enbale": true,
                "max-wait-for-cmp": 5000,
                "monitor-dup-items-traffic-pct": 5,
                "mw-display-none-on-no-items-to-render": true,
                "new-logging-mechanism-on": 0.1,
                "p-video-overlay-send-events": true,
                "pass-browser-url": true,
                "prefer-response-session-data": true,
                "publisher-onclick-nt-enabled": false,
                "rbox-ajax-post-events-full-rollout": true,
                "rbox-enable-fix-user-id-event": "true",
                "rbox-error-stack-reporting-pct": 0.01,
                "rbox-metrics-enabled": 0.1,
                "rbox-old-chrome-es6-fix": (function() {
                    var mtch = /Chrome\/([0-9]{2})/.exec(window.navigator.userAgent);
                    if (mtch && mtch.length && mtch.length == 2) {
                        var ver = parseInt(mtch[1]);
                        if (ver < 49) {
                            eS6SupportCheckResult = false;
                        }
                    }
                })(),
                "rbox-post-events-as-ajax": true,
                "rbox-trc-protocol": "https:",
                "rbox:collect-eid-from-page": true,
                "read-more-click-delay": true,
                "read-more-events-enabled": "0.1",
                "read-more-scroll-fast-enabled": true,
                "requests-domain": "trc.taboola.com",
                "rtb-image-url-prefix": "https://images.taboola.com/taboola/image/fetch/$pw_{w}%2C$ph_{h}/t_tbl-cnd/",
                "send-avail-as-get": false,
                "send-avail-as-post": true,
                "send-event-as-post": true,
                "send-full-list": true,
                "send-item-query-string-in-req": true,
                "send-next-up-click-abtest-event": false,
                "send-pb-in-click": true,
                "send-user-id-tag": true,
                "send-variant-warning": true,
                "send-visible-as-get": false,
                "show-rtb-ad-choices-icon": true,
                "smart-ellipsis": true,
                "spatial-slots-throttle-th": 1000,
                "stop-channels-threshold": "0.8",
                "store-userid-first-party-cookie": true,
                "switch-abp-class": false,
                "syndication-embed-code": function(box, recommendation, affiliate) {},
                "syndicator-affiliate-id": "",
                "thumb-lazy-load-method": "PAGE_LOAD,PAGE_INTERACTIVE,RBOX_VISIBLE",
                "thumb-lazy-load-switch": false,
                "thumbnail-transformation-per-item-is-enabled": "1",
                "thumbs-image-lazy-load-margins": "2500px 1500px 2500px 1500px",
                "tm-dynamic-load": "true",
                "tmp-use-pb-params": true,
                "touchstart-enabled": true,
                "trc-cache-it": {
                    "text": "c",
                    "home": "d",
                    "video": "d",
                    "search": "d",
                    "category": "d",
                    "photo": "d",
                    "other": "d"
                },
                "trc-event-route-template": "<dc>-trc-events.taboola.com",
                "trc-request-delay": 500,
                "trcinfo-sample-rate": 0.01,
                "ui-innovation-modules-path": "ui-ab-tests",
                "use-abp-uim": true,
                "use-calibration-uim": false,
                "use-delay-image-load": true,
                "use-dpr-images": true,
                "use-native-json-stringify": true,
                "use-storage-detection": true,
                "user-id-tag-macros": ["tags.bluekai.com/site/35702?id={taboolaID}"],
                "user-mapping-enabled": true,
                "user-stop-retarget-campaign-after-click": "false",
                "video-gdpr-applies-use-requires-consent": "true",
                "video-split-start-unit": true,
                "view-tag-delay": 2000,
                "view-tags-domains-url": {
                    'adsafeprotected.com': 1,
                    'cdn.doubleverify.com': 1
                },
                "visibility-intersection-api-delay": 1000,
                "visibility-intersection-api-full-rollout": true,
                "visible-delay": 500,
                "bakeTime": 1642328724487,
                "maxRevision": 124811064,
                "style": {
                    "rtl": "",
                    "custom": "",
                    "mode_custom": "/* s-split-ab_thumbnails-a_1x7 */.ab_thumbnails-a_1x7 img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_thumbnails-a_1x7 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_thumbnails-a_1x7 .trc_rbox_header {\n}\n.ab_thumbnails-a_1x7 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n.ab_thumbnails-a_1x7 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.ab_thumbnails-a_1x7 .logoDiv a {\n}\n.ab_thumbnails-a_1x7 .logoDiv a span {\n}\n.ab_thumbnails-a_1x7 .videoCube a {\n}\n.ab_thumbnails-a_1x7 .thumbBlock {\n    margin: 0;\n}\n.ab_thumbnails-a_1x7 .videoCube .video-label-box .video-title {\n}\n.ab_thumbnails-a_1x7 .videoCube:hover .video-label-box .video-title,\n.ab_thumbnails-a_1x7 .videoCube:hover .video-label-box .video-description {\n}\n.ab_thumbnails-a_1x7 .video-label-box .branding {\n}\n.ab_thumbnails-a_1x7 .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.ab_thumbnails-a_1x7 .trc_header_right_part {\n}\n\n.ab_thumbnails-a_1x7 .trc_rbox_header .logoDiv a {\n}\n\n.ab_thumbnails-a_1x7 .trc_rbox_header .trc_header_ext {\n}\n/* e-split-ab_thumbnails-a_1x7 *//* s-split-ab_thumbnails-a_2x2 */.ab_thumbnails-a_2x2 img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.ab_thumbnails-a_2x2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.ab_thumbnails-a_2x2 .trc_rbox_header {\n}\n\n.ab_thumbnails-a_2x2 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.ab_thumbnails-a_2x2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.ab_thumbnails-a_2x2 .logoDiv a {\n}\n\n.ab_thumbnails-a_2x2 .logoDiv a span {\n}\n\n.ab_thumbnails-a_2x2 .videoCube a {\n}\n\n.ab_thumbnails-a_2x2 .thumbBlock {\n    margin: 0;\n}\n\n.ab_thumbnails-a_2x2 .video-label-box {\n}\n\n.ab_thumbnails-a_2x2 .syndicatedItem .video-label-box {\n}\n\n.ab_thumbnails-a_2x2 .videoCube .video-label-box .video-title {\n}\n\n.ab_thumbnails-a_2x2 .videoCube:hover .video-label-box .video-title,\n.ab_thumbnails-a_2x2 .videoCube:hover .video-label-box .video-description {\n}\n\n.ab_thumbnails-a_2x2 .video-label-box .branding {\n}\n\n.ab_thumbnails-a_2x2 .syndicatedItem .branding {\n}\n.ab_thumbnails-a_2x2 .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.ab_thumbnails-a_2x2 .trc_header_right_part {\n}\n\n.ab_thumbnails-a_2x2 .trc_rbox_header .logoDiv a {\n}\n\n.ab_thumbnails-a_2x2 .trc_rbox_header .trc_header_ext {\n}\n/* e-split-ab_thumbnails-a_2x2 *//* s-split-ab_thumbnails-a_abp-mode */.ab_thumbnails-a_abp-mode img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.ab_thumbnails-a_abp-mode [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.ab_thumbnails-a_abp-mode .trc_rbox_header {\n}\n\n.ab_thumbnails-a_abp-mode .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.ab_thumbnails-a_abp-mode .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.ab_thumbnails-a_abp-mode .logoDiv a {\n}\n\n.ab_thumbnails-a_abp-mode .logoDiv a span {\n}\n\n.ab_thumbnails-a_abp-mode .videoCube a {\n}\n\n.ab_thumbnails-a_abp-mode .thumbBlock {\n    margin: 0;\n}\n\n.trc_elastic .ab_thumbnails-a_abp-mode .video-label-box {\n    height: 76.0px;\n}\n\n.ab_thumbnails-a_abp-mode .videoCube .video-label-box {\n    margin-top: 5px;\n}\n\n.ab_thumbnails-a_abp-mode .videoCube .video-label-box .video-title {\n}\n\n.ab_thumbnails-a_abp-mode .videoCube:hover .video-label-box .video-title {\n}\n\n.ab_thumbnails-a_abp-mode .video-label-box .branding {\n}\n\n.ab_thumbnails-a_abp-mode .syndicatedItem .branding {\n}\n.ab_thumbnails-a_abp-mode .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.ab_thumbnails-a_abp-mode .trc_rbox_header .logoDiv a {\n}\n\n.ab_thumbnails-a_abp-mode .trc_rbox_header .trc_header_ext {\n}\n/* e-split-ab_thumbnails-a_abp-mode *//* s-split-ab_thumbnails-a_hero */.ab_thumbnails-a_hero img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.ab_thumbnails-a_hero [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.ab_thumbnails-a_hero .trc_rbox_header {\n}\n.ab_thumbnails-a_hero .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n}\n.ab_thumbnails-a_hero .trc_rbox_header .logoDiv {\n    font-size: inherit;\n}\n.ab_thumbnails-a_hero .logoDiv a {\n}\n.ab_thumbnails-a_hero .logoDiv a span {\n}\n.ab_thumbnails-a_hero .videoCube a {\n}\n.ab_thumbnails-a_hero .thumbBlock {\n    margin: 0;\n}\n.ab_thumbnails-a_hero .video-label-box {\n}\n.ab_thumbnails-a_hero .syndicatedItem .video-label-box {\n}\n.ab_thumbnails-a_hero .videoCube .video-label-box .video-title {\n}\n.ab_thumbnails-a_hero .videoCube:hover .video-label-box .video-title,\n.ab_thumbnails-a_hero .videoCube:hover .video-label-box .video-description {\n}\n.ab_thumbnails-a_hero .video-label-box .branding {\n}\n.ab_thumbnails-a_hero .syndicatedItem .branding {\n}\n.ab_thumbnails-a_hero .trc_header_left_column {\n    background: transparent;\n}\n.ab_thumbnails-a_hero .trc_header_right_part {\n}\n.ab_thumbnails-a_hero .trc_rbox_header .logoDiv a {\n}\n.ab_thumbnails-a_hero .trc_rbox_header .trc_header_ext {\n}\n@media screen and (min-width: 481px) {\n.ab_thumbnails-a_hero div.videoCube:nth-of-type(1) {\n        width: 48%;\n    }\n.ab_thumbnails-a_hero div.videoCube:nth-of-type(2) {\n        width: 48%;\n    }\n.trc_elastic .ab_thumbnails-a_hero div.videoCube:nth-of-type(6) {\n        display: none;\n    }\n}\n/* e-split-ab_thumbnails-a_hero *//* s-split-ab_thumbnails-b_abp-mode */.ab_thumbnails-b_abp-mode img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.ab_thumbnails-b_abp-mode [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.ab_thumbnails-b_abp-mode .trc_rbox_header {\n}\n\n.ab_thumbnails-b_abp-mode .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.ab_thumbnails-b_abp-mode .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.ab_thumbnails-b_abp-mode .logoDiv a {\n}\n\n.ab_thumbnails-b_abp-mode .logoDiv a span {\n}\n\n.ab_thumbnails-b_abp-mode .videoCube a {\n}\n\n.ab_thumbnails-b_abp-mode .thumbBlock {\n    margin: 0;\n}\n\n.ab_thumbnails-b_abp-mode .video-label-box {\n}\n\n.ab_thumbnails-b_abp-mode .syndicatedItem .video-label-box {\n}\n\n.ab_thumbnails-b_abp-mode .videoCube .video-label-box .video-title {\n}\n\n.ab_thumbnails-b_abp-mode .videoCube:hover .video-label-box .video-title,\n.ab_thumbnails-b_abp-mode .videoCube:hover .video-label-box .video-description {\n}\n\n.ab_thumbnails-b_abp-mode .video-label-box .branding {\n}\n\n.ab_thumbnails-b_abp-mode .syndicatedItem .branding {\n}\n.ab_thumbnails-b_abp-mode .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.ab_thumbnails-b_abp-mode .trc_header_right_part {\n}\n\n.ab_thumbnails-b_abp-mode .trc_rbox_header .logoDiv a {\n}\n\n.ab_thumbnails-b_abp-mode .trc_rbox_header .trc_header_ext {\n}\n/* e-split-ab_thumbnails-b_abp-mode *//* s-split-ab_thumbnails-q_reco-reel */.ab_thumbnails-q_reco-reel img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.ab_thumbnails-q_reco-reel [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.ab_thumbnails-q_reco-reel .trc_rbox_header {\n}\n\n.ab_thumbnails-q_reco-reel .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.ab_thumbnails-q_reco-reel .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.ab_thumbnails-q_reco-reel .logoDiv a {\n}\n\n.ab_thumbnails-q_reco-reel .logoDiv a span {\n}\n\n.ab_thumbnails-q_reco-reel .videoCube a {\n}\n\n.ab_thumbnails-q_reco-reel .thumbBlock {\n    margin: 0;\n}\n\n.ab_thumbnails-q_reco-reel .video-label-box {\n}\n\n.ab_thumbnails-q_reco-reel .syndicatedItem .video-label-box {\n}\n\n.ab_thumbnails-q_reco-reel .videoCube .video-label-box .video-title {\n}\n\n.ab_thumbnails-q_reco-reel .videoCube:hover .video-label-box .video-title,\n.ab_thumbnails-q_reco-reel .videoCube:hover .video-label-box .video-description {\n}\n\n.ab_thumbnails-q_reco-reel .video-label-box .branding {\n}\n\n.ab_thumbnails-q_reco-reel .syndicatedItem .branding {\n}\n.ab_thumbnails-q_reco-reel .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.ab_thumbnails-q_reco-reel .trc_header_right_part {\n}\n\n.ab_thumbnails-q_reco-reel .trc_rbox_header .logoDiv a {\n}\n\n.ab_thumbnails-q_reco-reel .trc_rbox_header .trc_header_ext {\n}\n/* e-split-ab_thumbnails-q_reco-reel *//* s-split-alternating-thumbnails-a */.alternating-thumbnails-a img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.alternating-thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.alternating-thumbnails-a .trc_rbox_header {\n}\n\n.alternating-thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.alternating-thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.alternating-thumbnails-a .logoDiv a {\n}\n\n.alternating-thumbnails-a .logoDiv a span {\n}\n\n.alternating-thumbnails-a .videoCube a {\n}\n\n.alternating-thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.alternating-thumbnails-a .video-label-box {\n}\n\n.alternating-thumbnails-a .syndicatedItem .video-label-box {\n}\n\n.alternating-thumbnails-a .videoCube .video-label-box .video-title {\n}\n\n.alternating-thumbnails-a .videoCube:hover .video-label-box .video-title,\n.alternating-thumbnails-a .videoCube:hover .video-label-box .video-description {\n}\n\n.alternating-thumbnails-a .video-label-box .branding {\n}\n\n.alternating-thumbnails-a .syndicatedItem .branding {\n}\n.alternating-thumbnails-a .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.alternating-thumbnails-a .trc_header_right_part {\n}\n\n.alternating-thumbnails-a .trc_rbox_header .logoDiv a {\n}\n\n.alternating-thumbnails-a .trc_rbox_header .trc_header_ext {\n}\n/* e-split-alternating-thumbnails-a *//* s-split-organic-thumbs-feed-01 */.organic-thumbs-feed-01 img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.organic-thumbs-feed-01 .trc_rbox_header {\n}\n\n.organic-thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01 .logoDiv a {\n}\n\n.organic-thumbs-feed-01 .logoDiv a span {\n}\n\n.organic-thumbs-feed-01 .videoCube a {\n}\n\n.organic-thumbs-feed-01 .thumbBlock {\n    margin: 0;\n}\n\n.organic-thumbs-feed-01 .video-label-box {\n}\n\n.organic-thumbs-feed-01 .syndicatedItem .video-label-box {\n}\n\n.organic-thumbs-feed-01 .videoCube .video-label-box .video-title {\n}\n\n.organic-thumbs-feed-01 .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01 .videoCube:hover .video-label-box .video-description {\n}\n\n.organic-thumbs-feed-01 .video-label-box .branding {\n}\n\n.organic-thumbs-feed-01 .syndicatedItem .branding {\n}\n.organic-thumbs-feed-01 .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01 .trc_header_right_part {\n}\n\n.organic-thumbs-feed-01 .trc_rbox_header .logoDiv a {\n}\n\n.organic-thumbs-feed-01 .trc_rbox_header .trc_header_ext {\n}\n/* e-split-organic-thumbs-feed-01 *//* s-split-organic-thumbs-feed-01-c */.organic-thumbs-feed-01-c img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.organic-thumbs-feed-01-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.organic-thumbs-feed-01-c .trc_rbox_header {\n}\n\n.organic-thumbs-feed-01-c .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.organic-thumbs-feed-01-c .logoDiv a {\n}\n\n.organic-thumbs-feed-01-c .logoDiv a span {\n}\n\n.organic-thumbs-feed-01-c .videoCube a {\n}\n\n.organic-thumbs-feed-01-c .thumbBlock {\n    margin: 0;\n}\n\n.organic-thumbs-feed-01-c .video-label-box {\n}\n\n.organic-thumbs-feed-01-c .syndicatedItem .video-label-box {\n}\n\n.organic-thumbs-feed-01-c .videoCube .video-label-box .video-title {\n}\n\n.organic-thumbs-feed-01-c .videoCube:hover .video-label-box .video-title,\n.organic-thumbs-feed-01-c .videoCube:hover .video-label-box .video-description {\n}\n\n.organic-thumbs-feed-01-c .video-label-box .branding {\n}\n\n.organic-thumbs-feed-01-c .syndicatedItem .branding {\n}\n.organic-thumbs-feed-01-c .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.organic-thumbs-feed-01-c .trc_header_right_part {\n}\n\n.organic-thumbs-feed-01-c .trc_rbox_header .logoDiv a {\n}\n\n.organic-thumbs-feed-01-c .trc_rbox_header .trc_header_ext {\n}\n/* e-split-organic-thumbs-feed-01-c *//* s-split-rec-reel-sc2 */.rec-reel-sc2 img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.rec-reel-sc2 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.rec-reel-sc2 .trc_rbox_header {\n}\n\n.rec-reel-sc2 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.rec-reel-sc2 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.rec-reel-sc2 .logoDiv a {\n}\n\n.rec-reel-sc2 .logoDiv a span {\n}\n\n.rec-reel-sc2 .videoCube a {\n}\n\n.rec-reel-sc2 .thumbBlock {\n    margin: 0;\n}\n\n.rec-reel-sc2 .video-label-box {\n}\n\n.rec-reel-sc2 .syndicatedItem .video-label-box {\n}\n\n.rec-reel-sc2 .videoCube .video-label-box .video-title {\n}\n\n.rec-reel-sc2 .videoCube:hover .video-label-box .video-title,\n.rec-reel-sc2 .videoCube:hover .video-label-box .video-description {\n}\n\n.rec-reel-sc2 .video-label-box .branding {\n}\n\n.rec-reel-sc2 .syndicatedItem .branding {\n}\n.rec-reel-sc2 .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.rec-reel-sc2 .trc_header_right_part {\n}\n\n.rec-reel-sc2 .trc_rbox_header .logoDiv a {\n}\n\n.rec-reel-sc2 .trc_rbox_header .trc_header_ext {\n}\n/* e-split-rec-reel-sc2 *//* s-split-text-links-a *//* override bootstrap default span definitions */\n.text-links-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n.text-links-a .trc_rbox_header {\n}\n\n.text-links-a .trc_rbox_header_span .trc_header_right_column {\n        position: absolute;\n        width: 48%;\n        left: 52%;\n        top: 0;\n\tbackground: transparent;\n}\n\n.text-links-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n        position: relative;\n        z-index: 1;\n}\n\n.text-links-a .logoDiv a {\n}\n\n\n.text-links-a .logoDiv a span {\n}\n\n.text-links-a .syndicatedItem .video-title .branding {\n        line-height: 1.3em;\n}\n\n.text-links-a .trc_rbox_div .videoCube.horizontal {\n        clear: left;\n}\n\n.text-links-a .trc_rbox_div .videoCube.trc_tl_right_col {\n        float: none;\n        clear: right;\n        margin-left: auto;\n}\n\n.text-links-a .videoCube:hover span.branding,\n.text-links-a .videoCube_hover span.branding {\n        text-decoration: none;\n}\n\n.text-links-a .trc_rbox_div .videoCube.thumbnail_none a{\n    display: list-item;\n    list-style: disc outside none;\n    vertical-align: top;\n    overflow: visible;\n    margin-left: 15px;\n    padding: 0;\n}\n\n.text-links-a .videoCube .video-label-box {\n        display: inline-block!important;\n        vertical-align: top;\n        width: 100%;\n        *margin-top: -3px;\n\tmin-height: 19.0px;\n\theight: auto;\n}\n\n.text-links-a .trc_rbox_div .videoCube:hover .video-title {\n        text-decoration: underline;\n}\n.text-links-a .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.text-links-a .trc_rbox_header .logoDiv a {\n}\n\n.text-links-a .syndicatedItem .branding {\n}\n\n.text-links-a .trc_rbox_header .trc_header_ext {\n}\n\n.text-links-a .trc_header_right_part {\n}\n\n.text-links-a .video-label-box .branding {\n}\n\n.text-links-a .syndicatedItem .video-label-box {\n}\n/* e-split-text-links-a *//* s-split-thumbnails-a */.thumbnails-a img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-a .trc_rbox_header {\n}\n\n.thumbnails-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbnails-a .logoDiv a {\n}\n\n.thumbnails-a .logoDiv a span {\n}\n\n.thumbnails-a .videoCube a {\n}\n\n.thumbnails-a .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-a .videoCube .video-label-box .video-title {\n}\n\n.thumbnails-a .videoCube:hover .video-label-box .video-title {\n}\n\n.thumbnails-a .video-label-box .branding {\n\t\n}\n\n.thumbnails-a .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbnails-a .trc_rbox_header .logoDiv a {\n}\n\n.thumbnails-a .trc_rbox_header .trc_header_ext {\n}\n\n.thumbnails-a .trc_header_right_part {\n}\n/* e-split-thumbnails-a *//* s-split-thumbnails-b */.thumbnails-b img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-b [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-b .trc_rbox_header {\n}\n\n.thumbnails-b .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbnails-b .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbnails-b .logoDiv a {\n}\n\n.thumbnails-b .logoDiv a span {\n}\n\n.thumbnails-b .videoCube a {\n}\n\n.thumbnails-b .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-b .video-label-box {\n}\n\n.thumbnails-b .syndicatedItem .video-label-box {\n}\n\n.thumbnails-b .videoCube .video-label-box .video-title {\n}\n\n.thumbnails-b .videoCube:hover .video-label-box .video-title,\n.thumbnails-b .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbnails-b .video-label-box .branding {\n}\n\n.thumbnails-b .syndicatedItem .branding {\n}\n.thumbnails-b .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbnails-b .trc_header_right_part {\n}\n\n.thumbnails-b .trc_rbox_header .logoDiv a {\n}\n\n.thumbnails-b .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbnails-b *//* s-split-thumbnails-ba */.thumbnails-ba img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-ba [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-ba .trc_rbox_header {\n}\n\n.thumbnails-ba .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbnails-ba .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbnails-ba .logoDiv a {\n}\n\n.thumbnails-ba .logoDiv a span {\n}\n\n.thumbnails-ba .videoCube a {\n}\n\n.thumbnails-ba .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-ba .video-label-box {\n}\n\n.thumbnails-ba .syndicatedItem .video-label-box {\n}\n\n.thumbnails-ba .videoCube .video-label-box .video-title {\n}\n\n.thumbnails-ba .videoCube:hover .video-label-box .video-title,\n.thumbnails-ba .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbnails-ba .video-label-box .branding {\n}\n\n.thumbnails-ba .syndicatedItem .branding {\n}\n.thumbnails-ba .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbnails-ba .trc_header_right_part {\n}\n\n.thumbnails-ba .trc_rbox_header .logoDiv a {\n}\n\n.thumbnails-ba .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbnails-ba *//* s-split-thumbnails-c */.thumbnails-c img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-c [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-c .trc_rbox_header {\n}\n\n.thumbnails-c .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbnails-c .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbnails-c .logoDiv a {\n}\n\n.thumbnails-c .logoDiv a span {\n}\n\n.thumbnails-c .videoCube a {\n}\n\n.thumbnails-c .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-c .video-label-box {\n}\n\n.thumbnails-c .syndicatedItem .video-label-box {\n}\n\n.thumbnails-c .videoCube .video-label-box .video-title {\n}\n\n.thumbnails-c .videoCube:hover .video-label-box .video-title,\n.thumbnails-c .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbnails-c .video-label-box .branding {\n}\n\n.thumbnails-c .syndicatedItem .branding {\n}\n.thumbnails-c .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbnails-c .trc_header_right_part {\n}\n\n.thumbnails-c .trc_rbox_header .logoDiv a {\n}\n\n.thumbnails-c .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbnails-c *//* s-split-thumbnails-g */.thumbnails-g img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-g [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-g .trc_rbox_header {\n}\n.thumbnails-g .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n.thumbnails-g .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbnails-g .logoDiv a {\n}\n.thumbnails-g .logoDiv a span {\n    bottom: 15px;\n}\n.thumbnails-g .videoCube a {\n}\n.thumbnails-g .thumbBlock {\n    margin: 0;\n}\n.thumbnails-g .video-label-box {\n}\n.thumbnails-g .syndicatedItem .video-label-box {\n}\n.thumbnails-g .videoCube .video-label-box .video-title {\n}\n.thumbnails-g .videoCube:hover .video-label-box .video-title,\n.thumbnails-g .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-g .video-label-box .branding {\n}\n.thumbnails-g .syndicatedItem .branding {\n}\n.thumbnails-g .trc_header_left_column {\n\tbackground: transparent;\n}\n.thumbnails-g .trc_header_right_part {\n}\n.thumbnails-g .trc_rbox_header .logoDiv a {\n}\n.thumbnails-g .trc_rbox_header .trc_header_ext {\n}\n.thumbnails-g {\n\twidth: 300px !important;\n\theight: 250px;\n}\n/* e-split-thumbnails-g *//* s-split-thumbnails-i */.thumbnails-i img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-i [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-i .trc_rbox_header {\n}\n.thumbnails-i .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n.thumbnails-i .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbnails-i .logoDiv a {\n}\n.thumbnails-i .logoDiv a span {\n    bottom: 23px;\n}\n.thumbnails-i .videoCube a {\n}\n.thumbnails-i .thumbBlock {\n    margin: 0;\n}\n.thumbnails-i .video-label-box {\n}\n.thumbnails-i .syndicatedItem .video-label-box {\n}\n.thumbnails-i .videoCube .video-label-box .video-title {\n}\n.thumbnails-i .videoCube:hover .video-label-box .video-title,\n.thumbnails-i .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-i .video-label-box .branding {\n}\n.thumbnails-i .syndicatedItem .branding {\n}\n.thumbnails-i .trc_header_left_column {\n\tbackground: transparent;\n}\n.thumbnails-i .trc_header_right_part {\n}\n.thumbnails-i .trc_rbox_header .logoDiv a {\n}\n.thumbnails-i .trc_rbox_header .trc_header_ext {\n}\n.thumbnails-i {\n\twidth: 480px !important;\n\theight: 270px;\n}\n.thumbnails-i .syndicatedItem .video-title {\n}\n/* e-split-thumbnails-i *//* s-split-thumbnails-i-01 */.thumbnails-i-01 img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-i-01 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-i-01 .trc_rbox_header {\n}\n.thumbnails-i-01 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n.thumbnails-i-01 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbnails-i-01 .logoDiv a {\n}\n.thumbnails-i-01 .logoDiv a span {\n    bottom: 23px;\n}\n.thumbnails-i-01 .videoCube a {\n}\n.thumbnails-i-01 .thumbBlock {\n    margin: 0;\n}\n.thumbnails-i-01 .video-label-box {\n}\n.thumbnails-i-01 .syndicatedItem .video-label-box {\n}\n.thumbnails-i-01 .videoCube .video-label-box .video-title {\n}\n.thumbnails-i-01 .videoCube:hover .video-label-box .video-title,\n.thumbnails-i-01 .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-i-01 .video-label-box .branding {\n}\n.thumbnails-i-01 .syndicatedItem .branding {\n}\n.thumbnails-i-01 .trc_header_left_column {\n\tbackground: transparent;\n}\n.thumbnails-i-01 .trc_header_right_part {\n}\n.thumbnails-i-01 .trc_rbox_header .logoDiv a {\n}\n.thumbnails-i-01 .trc_rbox_header .trc_header_ext {\n}\n.thumbnails-i-01 {\n\twidth: 480px !important;\n\theight: 270px;\n}\n.thumbnails-i-01 .syndicatedItem .video-title {\n}\n/* e-split-thumbnails-i-01 *//* s-split-thumbnails-l */.thumbnails-l img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-l [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-l .trc_rbox_div {\n}\n.thumbnails-l .trc_rbox_header {\n}\n.thumbnails-l .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n.thumbnails-l .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbnails-l .logoDiv a {\n}\n.thumbnails-l .logoDiv a span {\n}\n.thumbnails-l .videoCube a {\n}\n.thumbnails-l .trc_rbox_outer .videoCube {\n}\n.thumbnails-l .thumbBlock {\n    margin: 0;\n}\n.thumbnails-l .videoCube .video-label-box .video-title {\n}\n.thumbnails-l .videoCube:hover .video-label-box .video-title,\n.thumbnails-l .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-l .video-label-box .branding {\n}\n.thumbnails-l .syndicatedItem .branding {\n}\n.thumbnails-l .video-label-box {\n}\n.thumbnails-l .syndicatedItem .video-label-box {\n}\n.thumbnails-l .trc_header_left_column {\n\tbackground: transparent;\n}\n.thumbnails-l .trc_header_right_part {\n}\n.thumbnails-l .trc_rbox_header .logoDiv a {\n}\n.thumbnails-l .trc_rbox_header .trc_header_ext {\n}\n.thumbnails-l {\n\twidth: 300px !important;\n\theight: 250px;\n}\n/* e-split-thumbnails-l *//* s-split-thumbnails-m */.thumbnails-m img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-m [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-m .trc_rbox_header {\n}\n.thumbnails-m .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n.thumbnails-m .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbnails-m .logoDiv a {\n}\n.thumbnails-m .logoDiv a span {\n    bottom: 23px;\n}\n.thumbnails-m .videoCube a {\n}\n.thumbnails-m .thumbBlock {\n    margin: 0;\n}\n.thumbnails-m .video-label-box {\n}\n.thumbnails-m .syndicatedItem .video-label-box {\n}\n.thumbnails-m .videoCube .video-label-box .video-title {\n}\n.thumbnails-m .videoCube:hover .video-label-box .video-title,\n.thumbnails-m .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-m .video-label-box .branding {\n}\n.thumbnails-m .syndicatedItem .branding {\n}\n.thumbnails-m .trc_header_left_column {\n\tbackground: transparent;\n}\n.thumbnails-m .trc_header_right_part {\n}\n.thumbnails-m .trc_rbox_header .logoDiv a {\n}\n.thumbnails-m .trc_rbox_header .trc_header_ext {\n}\n.thumbnails-m {\n\twidth: 480px !important;\n\theight: 270px;\n}\n.thumbnails-m .syndicatedItem .video-title {\n}\n/* e-split-thumbnails-m *//* s-split-thumbnails-n */.thumbnails-n img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-n [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-n .trc_rbox_header {\n}\n.thumbnails-n .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n}\n.thumbnails-n .trc_rbox_header .logoDiv {\n    font-size: inherit;\n}\n.thumbnails-n .logoDiv a {\n}\n.thumbnails-n .logoDiv a span {\n}\n.thumbnails-n .videoCube a {\n}\n.thumbnails-n .thumbBlock {\n    margin: 0;\n}\n.thumbnails-n .video-label-box {\n}\n.thumbnails-n .syndicatedItem .video-label-box {\n}\n.thumbnails-n .videoCube .video-label-box .video-title {\n}\n.thumbnails-n .videoCube:hover .video-label-box .video-title,\n.thumbnails-n .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-n .video-label-box .branding {\n}\n.thumbnails-n .syndicatedItem .branding {\n}\n.thumbnails-n .trc_header_left_column {\n    background: transparent;\n}\n.thumbnails-n .trc_header_right_part {\n}\n.thumbnails-n .trc_rbox_header .logoDiv a {\n}\n.thumbnails-n .trc_rbox_header .trc_header_ext {\n}\n.trc_rbox.thumbnails-n.trc-content-sponsored  {\n    max-height: 250px;\n    max-width: 300px;\n    overflow: hidden;\n}\n/* e-split-thumbnails-n *//* s-split-thumbnails-o */.thumbnails-o img {\nmax-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-o [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-o .trc_rbox_header {\n}\n.thumbnails-o .trc_rbox_header_span .trc_header_right_column {\n    display: none;\n    background: transparent;\n}\n.thumbnails-o .trc_rbox_header .logoDiv {\n    font-size: inherit;\n}\n.thumbnails-o .logoDiv a {\n}\n.thumbnails-o .logoDiv a span {\n}\n.thumbnails-o .videoCube a {\n}\n.thumbnails-o .thumbBlock {\n    margin: 0;\n}\n.thumbnails-o .video-label-box {\n}\n.thumbnails-o .syndicatedItem .video-label-box {\n}\n.thumbnails-o .videoCube .video-label-box .video-title {\n}\n.thumbnails-o .videoCube:hover .video-label-box .video-title,\n.thumbnails-o .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-o .video-label-box .branding {\n}\n.thumbnails-o .syndicatedItem .branding {\n}\n.thumbnails-o .trc_header_left_column {\n    background: transparent;\n}\n.thumbnails-o .trc_header_right_part {\n}\n.thumbnails-o .trc_rbox_header .logoDiv a {\n}\n.thumbnails-o .trc_rbox_header .trc_header_ext {\n}\n.trc_rbox.thumbnails-o.trc-content-sponsored  {\n    max-height: 250px;\n    max-width: 600px;\n}\n/* e-split-thumbnails-o *//* s-split-thumbnails-q */.thumbnails-q img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-q [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-q .trc_rbox_header {\n}\n\n.thumbnails-q .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbnails-q .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbnails-q .logoDiv a {\n}\n\n.thumbnails-q .logoDiv a span {\n}\n\n.thumbnails-q .videoCube a {\n}\n\n.thumbnails-q .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-q .video-label-box {\n}\n\n.thumbnails-q .syndicatedItem .video-label-box {\n}\n\n.thumbnails-q .videoCube .video-label-box .video-title {\n}\n\n.thumbnails-q .videoCube:hover .video-label-box .video-title,\n.thumbnails-q .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbnails-q .video-label-box .branding {\n}\n\n.thumbnails-q .syndicatedItem .branding {\n}\n.thumbnails-q .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbnails-q .trc_header_right_part {\n}\n\n.thumbnails-q .trc_rbox_header .logoDiv a {\n}\n\n.thumbnails-q .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbnails-q *//* s-split-thumbnails-r */.thumbnails-r img {\n        max-width: none;\n}\n/* override bootstrap default span definitions */\n.thumbnails-r [class*=span] {\n    float:none;\n    margin-left:0;\n}\n.thumbnails-r .trc_rbox_header {\n}\n.thumbnails-r .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n.thumbnails-r .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n.thumbnails-r .logoDiv a {\n}\n.thumbnails-r .logoDiv a span {\n}\n.thumbnails-r .videoCube a {\n}\n.thumbnails-r .thumbBlock {\n    margin: 0;\n}\n.thumbnails-r .video-label-box {\n}\n.thumbnails-r .syndicatedItem .video-label-box {\n}\n.thumbnails-r .videoCube .video-label-box .video-title {\n}\n.thumbnails-r .videoCube:hover .video-label-box .video-title,\n.thumbnails-r .videoCube:hover .video-label-box .video-description {\n}\n.thumbnails-r .video-label-box .branding {\n}\n.thumbnails-r .syndicatedItem .branding {\n}\n.thumbnails-r .trc_header_left_column {\n\tbackground: transparent;\n}\n.thumbnails-r .trc_header_right_part {\n}\n.thumbnails-r .trc_rbox_header .logoDiv a {\n}\n.thumbnails-r .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbnails-r *//* s-split-thumbnails-rr */.thumbnails-rr img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-rr [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-rr .trc_rbox_header {\n}\n\n.thumbnails-rr .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbnails-rr .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbnails-rr .logoDiv a {\n}\n\n.thumbnails-rr .logoDiv a span {\n}\n\n.thumbnails-rr .videoCube a {\n}\n\n.thumbnails-rr .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-rr .video-label-box {\n}\n\n.thumbnails-rr .syndicatedItem .video-label-box {\n}\n\n.thumbnails-rr .videoCube .video-label-box .video-title {\n}\n\n.thumbnails-rr .videoCube:hover .video-label-box .video-title,\n.thumbnails-rr .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbnails-rr .video-label-box .branding {\n}\n\n.thumbnails-rr .syndicatedItem .branding {\n}\n.thumbnails-rr .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbnails-rr .trc_header_right_part {\n}\n\n.thumbnails-rr .trc_rbox_header .logoDiv a {\n}\n\n.thumbnails-rr .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbnails-rr *//* s-split-thumbnails-v */.thumbnails-v img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbnails-v [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbnails-v .trc_rbox_header {\n}\n\n.thumbnails-v .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbnails-v .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbnails-v .logoDiv a {\n}\n\n.thumbnails-v .logoDiv a span {\n}\n\n.thumbnails-v .videoCube a {\n}\n\n.thumbnails-v .thumbBlock {\n    margin: 0;\n}\n\n.thumbnails-v .video-label-box {\n}\n\n.thumbnails-v .syndicatedItem .video-label-box {\n}\n\n.thumbnails-v .videoCube .video-label-box .video-title {\n}\n\n.thumbnails-v .videoCube:hover .video-label-box .video-title,\n.thumbnails-v .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbnails-v .video-label-box .branding {\n}\n\n.thumbnails-v .syndicatedItem .branding {\n}\n.thumbnails-v .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbnails-v .trc_header_right_part {\n}\n\n.thumbnails-v .trc_rbox_header .logoDiv a {\n}\n\n.thumbnails-v .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbnails-v *//* s-split-thumbs-feed-01 */.thumbs-feed-01 img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbs-feed-01 [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbs-feed-01 .trc_rbox_header {\n}\n\n.thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbs-feed-01 .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbs-feed-01 .logoDiv a {\n}\n\n.thumbs-feed-01 .logoDiv a span {\n}\n\n.thumbs-feed-01 .videoCube a {\n}\n\n.thumbs-feed-01 .thumbBlock {\n    margin: 0;\n}\n\n.thumbs-feed-01 .video-label-box {\n}\n\n.thumbs-feed-01 .syndicatedItem .video-label-box {\n}\n\n.thumbs-feed-01 .videoCube .video-label-box .video-title {\n}\n\n.thumbs-feed-01 .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01 .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbs-feed-01 .video-label-box .branding {\n}\n\n.thumbs-feed-01 .syndicatedItem .branding {\n}\n.thumbs-feed-01 .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbs-feed-01 .trc_header_right_part {\n}\n\n.thumbs-feed-01 .trc_rbox_header .logoDiv a {\n}\n\n.thumbs-feed-01 .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbs-feed-01 *//* s-split-thumbs-feed-01-a */.thumbs-feed-01-a img {\n        max-width: none;\n}\n\n/* override bootstrap default span definitions */\n.thumbs-feed-01-a [class*=span] {\n    float:none;\n    margin-left:0;\n}\n\n\n.thumbs-feed-01-a .trc_rbox_header {\n}\n\n.thumbs-feed-01-a .trc_rbox_header_span .trc_header_right_column {\n        display: none;\n\tbackground: transparent;\n}\n\n.thumbs-feed-01-a .trc_rbox_header .logoDiv {\n        font-size: inherit;\n}\n\n.thumbs-feed-01-a .logoDiv a {\n}\n\n.thumbs-feed-01-a .logoDiv a span {\n}\n\n.thumbs-feed-01-a .videoCube a {\n}\n\n.thumbs-feed-01-a .thumbBlock {\n    margin: 0;\n}\n\n.thumbs-feed-01-a .video-label-box {\n}\n\n.thumbs-feed-01-a .syndicatedItem .video-label-box {\n}\n\n.thumbs-feed-01-a .videoCube .video-label-box .video-title {\n}\n\n.thumbs-feed-01-a .videoCube:hover .video-label-box .video-title,\n.thumbs-feed-01-a .videoCube:hover .video-label-box .video-description {\n}\n\n.thumbs-feed-01-a .video-label-box .branding {\n}\n\n.thumbs-feed-01-a .syndicatedItem .branding {\n}\n.thumbs-feed-01-a .trc_header_left_column {\n\tbackground: transparent;\n}\n\n.thumbs-feed-01-a .trc_header_right_part {\n}\n\n.thumbs-feed-01-a .trc_rbox_header .logoDiv a {\n}\n\n.thumbs-feed-01-a .trc_rbox_header .trc_header_ext {\n}\n/* e-split-thumbs-feed-01-a */"
                },
                "locale": null
            },
            "systemFlags": {
                "loaderType": "deflated"
            }
        };
        config = TRC.inflate ? TRC.inflate.getConfig(config) : config, config.global["disable-config-override"] || "object" != typeof TRC.configOverride || setConfig(config.global, TRC.configOverride), initDynamicModules();
        var rtbIndex = 0,
            waitForTrkTimeout = config.global["loader-ready-timeout"] || 500,
            DEFAULT_PROTOCOL = (config.global["rbox-default-protocol"] || "https") + ":",
            PRECONNECT_DOMAINS = config.global["preconnect-domains"] || ["trc.taboola.com", "images.taboola.com"];
        TRC.utm.start = (new Date).getTime(), TRC._taboolaClone = [], TRC.PROTOCOL = config.global["rbox-trc-protocol"] || (win.location.protocol.match(/http/) ? win.location.protocol : DEFAULT_PROTOCOL), TRC.SYNDICATED_CLASS_NAME = "syndicatedItem", TRC.SPONSORED_CONTAINER_CLASS_NAME = "trc-content-sponsored", TRC.rtbRealTimeUserId = null, TRC.version = getParameter("tbl_rbox_version", win.location) || TRC.version || "20220116-1-RELEASE", TRC.imageCounter = 0, TRC.implInlined = TRC.implInlined || !1, TRC.implCustomFile = TRC.implCustomFile || "", win._tblConsole = win._tblConsole || [], TRC.EVENT_LOOP_INTERVAL = config.global["rbox-perf-el-interval"] || 1e3, TRC.EVENT_LOOP_REPORT_INTERVAL = config.global["rbox-perf-el-report-interval"] || 5e3, TRC.pConsole = function(e, t, n, o, a) {
            try {
                win._tblConsole.length > 400 && (win._tblConsole = []), _tblConsole.push({
                    service: "RBox",
                    tab: e,
                    log: {
                        type: t,
                        title: n,
                        infoValue: o,
                        infoType: a || "string",
                        tstmp: (new Date).getTime()
                    }
                })
            } catch (e) {}
        }, TRC.pConsole("", "time", "loader.js loaded", ""), TRC.pConsole("page", "info", "user agent", navigator.userAgent), TRC.isOptim = function(e) {
            return !(!config.global["feed-optim"] || !config.global["feed-optim"][e])
        }, TRC.hasES6Support = function() {
            if (void 0 !== eS6SupportCheckResult) return eS6SupportCheckResult;
            eS6SupportCheckResult = !0;
            try {
                eval("var foo = (x)=>x+1")
            } catch (e) {
                eS6SupportCheckResult = !1
            }
            return eS6SupportCheckResult
        }, TRC.styleInjected = !1;
        var protocol = TRC.PROTOCOL,
            trc = null,
            globalMessages = [],
            originalErrorHandler = win.onerror,
            implElm = null,
            requests = [],
            consents = [],
            notificationsFirst = [],
            requestDispatchTimeout = null,
            notifications = [],
            socials = [],
            p13ns = [],
            abtests = [],
            debugs = [],
            apiListeners = [],
            manualVisibles = [],
            globalParams = {
                publisher: TRC.publisherId = 'disqus-widget-safetylevel20longtail09'
            },
            flush = !1,
            queue = null,
            PAGE_TYPES = {
                video: "video",
                article: "article",
                category: "category",
                home: "home",
                search: "search",
                photo: "photo",
                video_source: "video",
                other: "other",
                content_hub: "content_hub"
            },
            TBX_PAGE_TYPE_VAR = "pm_pgtp",
            taboolaXHosts = {
                prod: "//widget.perfectmarket.com",
                sb: "//widget.sandbox.perfectmarket.com"
            },
            taboolaXHost = taboolaXHosts["prod"],
            isTBXInit = !1,
            loaderHostName = null,
            loaderDomain, eS6SupportCheckResult, RTUS_ID_STORAGE_KEY = "tbl_rtus_id";
        TRC.pConsole("page", "info", "from global params : publisher-id was set to - " + globalParams.publisher), win.onerror = function(e, t, n) {
            try {
                /taboola(syndication)?\.com/.test(t) && __trcError && __trcError(e, n + "@" + t)
            } catch (e) {}
            return originalErrorHandler && originalErrorHandler.apply(win, Array.prototype.slice.call(arguments))
        }, TRC.reset = function() {
            TRC.pConsole("page", "debug", "reset RBox"), requests = [], consents = [], requestDispatchTimeout = null, isTBXInit = !1, win.taboola_view_id = null, TRC._taboolaClone = [], TRC.pushedRboxTracking = !1, notifications = [], globalParams = {
                publisher: TRC.publisherId = 'disqus-widget-safetylevel20longtail09'
            }, flush = !1, doNotifications = function() {}, doRequests = function() {}, injectComScore();
            try {
                TRC.pageTemplate = void 0, TRC.Timeout.reset(), TRC.Interval.reset(), trc && win.TRCImpl && (trc.reset(), win.TRCImpl = trc = null), TRC.eventDelegator && TRC.eventDelegator.resetEvents()
            } catch (e) {
                TRC.pConsole("errors", "error", "error in TRC.reset", e.message)
            }
        }, TRC.ready = function(e) {
            return config.defaults = e, config.version = TRC.version, config.global["enable-events-api"] && registerAPIEvents(), setPush(manualVisibles, doVisibles), TRC.pConsole("page", "info", "configuration version +  : " + config.version), TRC.publisherId = globalParams.publisher, config.global["force-reset-on-ready"] ? win.TRCImpl = trc = new TRC.Manager(config, globalParams) : win.TRCImpl = trc = trc || new TRC.Manager(config, globalParams), __trcInfo(window.location.href), TRC.Rtus && shouldInjectRtus(config.global["enable-real-time-user-sync-with-consent"]) && new TRC.Rtus(TRC).applyRtus(), TRC.isInteractive = !1, (doRequests = realDoRequests)(), config.global["enable-social-events"] && (doSocials = realDoSocials)(), config.global["enable-abtests-events"] && (doABTests = realDoABTests)(), doDebugs(), trc.onclick = queue.onclick, trc.invisible && TRC.aspect.after(trc, "internalDrawRBox", function() {
                (doNotifications = realDoNotifications)()
            }, !0), trc
        }, TRC.shiftDomain = function(e) {
            if (!config.global["enable-shift-cdn-domains"]) return e;
            var t = e,
                n, o = config.global["exclude-subd-shift"] || [],
                a = getHostName(e);
            return loaderDomain && e && (n = lsplit(a, ".", 2)[1], o.indexOf(a) < 0 && n.indexOf("taboola.com") > -1 && (t = e.replace(n, loaderDomain))), t
        }, TRC.loadTaboolaScript = function(e, t, n, o) {
            var a = loaderHostName || "cdn.taboola.com",
                r = doc.getElementsByTagName("script"),
                i;
            i = doc.createElement("script"), r.length && r[0].parentNode.insertBefore(i, r[0]), i.charset = "UTF-8", i.type = "text/javascript", t && i.setAttribute("async", "async");
            var s = chainEventCallbacks(n);
            s && i.addEventListener("load", s, !1);
            var l = chainEventCallbacks(o);
            return o && i.addEventListener("error", l, !1), i.src = TRC.shiftDomain(protocol + "//" + a + "/libtrc/" + e), i
        }, detectBots(), config.global["enable-shift-cdn-domains"] && (findScriptBaseDomain(doc.getElementsByTagName("script")), setLoaderDomains()), config.global["enable-visit-value"] && config.global["load-vv-early"] && loadVV(), TRC.Performance && (activatePerf(config.global["enable-analytics"], config.global["config-analytics"], getParameter("taboola-force-perf", win.location)), TRC.performance && TRC.performance.mark("2.0"));
        var smartEllipsisUrlParam = getParameter("taboola-smart-ellipsis", win.location);
        smartEllipsisUrlParam && (config.global["smart-ellipsis"] = "yes" === smartEllipsisUrlParam);
        var ellipsisPerfUrlParam = getParameter("taboola-ellipsis-perf", win.location);
        ellipsisPerfUrlParam && (TRC.ellipsisPerf = "yes" === ellipsisPerfUrlParam), TRC.hasTrk && (TRC.trk.hasRequestEnded && !TRC.trk.hasRequestEnded(TRC.publisherId) || void 0 === TRC.trkRequestStatus) ? win.setTimeout(doInitialization, waitForTrkTimeout) : (setResourceHints(), doInitialization())
    }

    function setConfig(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    }

    function initDynamicModules() {}

    function doNotifications() {}

    function doNotificationsFirst() {
        for (; msg = notificationsFirst.shift();) switch (msg.notify) {
            case "newPageLoad":
                TRC.reset()
        }
    }

    function findScriptBaseDomain(e) {
        for (var t, n = /^(.*\/libtrc\/.+\/)loader\.js(?:\?(.*))?$/, o = 0; o < e.length; o++) e[o].src && (t = e[o].src.match(n)) && (TRC.baseDomain = t[1], TRC.pConsole("page", "info", "base domain set to : " + TRC.baseDomain))
    }

    function realDoNotifications() {
        for (var e; e = notifications.shift();) switch (e.notify) {
            case "videoPlay":
                TRC.RBoxUsage.logUsage("realDoNotifications", {
                    position: "videoPlay"
                }), this.preloadRequestLoader ? function(e) {
                    TRC.aspect.after(trc, "handleLoadResponse", function() {
                        trc.playVideo(e)
                    }, !0)
                }(e) : trc.playVideo(e);
                break;
            case "videoDone":
                TRC.RBoxUsage.logUsage("realDoNotifications", {
                    position: "videoDone"
                });
                try {
                    TRC.dispatch("videoDone", e)
                } catch (e) {
                    trc.error("Problem in videoDone", e)
                }
        }
    }

    function lsplit(e, t, n) {
        var o = e.split(t);
        return o.slice(0, n - 1).concat(o.length >= n ? o.slice(n - 1).join(t) : [])
    }

    function getHostName(e) {
        for (var t = [{
                key: "?",
                index: 0
            }, {
                key: "://",
                index: 1
            }, {
                key: "//",
                index: 1
            }, {
                key: "/",
                index: 0
            }, {
                key: ":",
                index: 0
            }], n = 0, o = t.length, a = e, r; n < o; n++) a = (r = lsplit(a, t[n].key, 2)).length > 1 ? r[t[n].index] : r[0];
        return a
    }

    function sendLoadRBox() {
        requestDispatchTimeout = null, trc.loadRBox.apply(trc, requests), requests = [], (doNotifications = realDoNotifications)()
    }

    function detectBots() {
        var e;
        config.global["enable-detect-bots"] && (e = new RegExp(config.global["detect-bots-regex"] || "bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex", "i"), TRC.botDetected = e.test(navigator.userAgent))
    }

    function doRequests() {}

    function realDoRequests() {
        return requests.length ? flush ? (flush = !1, void sendLoadRBox()) : (null != requestDispatchTimeout && TRC.Timeout.clear(requestDispatchTimeout), void(requestDispatchTimeout = TRC.Timeout.set(sendLoadRBox, trc.trcRequestDelay))) : flush = !1
    }

    function registerAPIEvents() {
        var e;
        for (apiListeners.push = function(e) {
                TRC.EventsAPI.listen(e.listenTo, e.handler)
            }; apiListeners.length;) e = apiListeners.shift(), TRC.EventsAPI.listen(e.listenTo, e.handler)
    }

    function doDebugs() {
        TRC.eventDelegator.subscribe("user_id_ready", handleDebugs)
    }

    function handleDebugs() {
        for (var e; e = debugs.shift();) __trcError("uid error : " + e.msg)
    }

    function doSocials() {}

    function realDoSocials() {
        TRC.eventDelegator.subscribe("user_id_ready", handleSocials)
    }

    function handleSocials() {
        try {
            sendSocials.call(null, socials)
        } catch (e) {
            TRC.pConsole("errors", "error", "error in handleSocials", e.message)
        }
    }

    function sendSocials(e) {
        for (var t; t = e.shift();) trc.sendEvent("social", {
            st: t.name,
            "unescape-d": encodeURIComponent(__trcJSONify({
                data: t.val
            }))
        }, null, !1, null, null)
    }

    function doABTests() {}

    function realDoABTests() {
        TRC.eventDelegator.subscribe("user_id_ready", handleABTests)
    }

    function handleABTests() {
        try {
            sendImplEvents.call(null, abtests)
        } catch (e) {
            TRC.pConsole("errors", "error", "error in handleABTests", e.message)
        }
    }

    function sendImplEvents(e) {
        for (var t; t = e.shift();) trc.sendEvent("abtests", {
            "unescape-d": encodeURIComponent(__trcJSONify(t.val))
        }, null, !1, null, null)
    }

    function checkModeVisibilityConstraints(e, t) {
        var n = !0,
            o, a;
        try {
            e.modes[t] && (a = e.modes[t]["visibility-constraints"]) && "object" == typeof a && !0 !== TRC["ignoreVisibilityConstraints"] && (o = window.innerWidth || document.body.clientWidth, (a.minWidth && o < a.minWidth || a.maxWidth && o > a.maxWidth) && (n = !1, TRC.pConsole("page", "info", "Mode '" + t + "' will not be displayed due to visibility constraints", a, "object")))
        } catch (e) {
            TRC.pConsole("page", "error", "Error while evaluating visibility constraints of mode '" + t + "': " + e.message)
        }
        return n
    }

    function setLoaderDomains() {
        loaderHostName = config.global["use-loader-host"] || config.global["enable-shift-cdn-domains"] ? getHostName(TRC.baseDomain) : null, loaderDomain = loaderHostName ? lsplit(loaderHostName, ".", 2).pop() : null
    }

    function chainEventCallbacks(e) {
        if (e) return Array.isArray(e) ? function(t) {
            e.forEach(function(e) {
                e(t)
            })
        } : "function" == typeof e ? e : void 0
    }

    function vvReady() {
        TRC.adManager = new TRC.AdServerManager(config.global["vv-config"], TRC.version), TRC.adManager.startVV().then(function() {
            TRC.adManager.run()
        })
    }

    function loadImplementation(e) {
        TRC.implInlined ? TRC.trcReady && TRC.trcReady() : TRC.implLoaded ? TRC.trcReady() : implElm || (implElm = TRC.loadTaboolaScript(e), TRC.performance && TRC.performance.mark("3.0"), TRC.utm.push((new Date).getTime() - TRC.utm.start), TRC.pConsole("page", "debug", "loading impl file : '" + e + "'"))
    }

    function loadVV() {
        TRC.AdServerManager || (TRC.VVReady = vvReady, config.global["load-vv-early"] ? loadAssetFile(protocol + "//cdn.taboola.com/libtrc/vv." + TRC.version + ".js", {
            async: !0
        }) : TRC.loadTaboolaScript("vv." + TRC.version + ".js"))
    }

    function loadAssetFile(e, t) {
        if (!TRC.botDetected) {
            var n = doc.getElementsByTagName("script"),
                o = doc.getElementsByTagName("head"),
                a = doc.createElement("script");
            t && t.async ? a.setAttribute("async", "") : a.setAttribute("defer", ""), t && t.crossorigin && a.setAttribute("crossorigin", t.crossorigin), t && t.id && (a.id = t.id), a.src = TRC.shiftDomain(e), t && t.forceInHead && "head" !== n[0].parentNode.nodeName.toLocaleLowerCase() ? o[0].appendChild(a) : n[0].parentNode.insertBefore(a, n[0]), TRC.pConsole("page", "debug", "loading : " + a.src)
        }
    }

    function doGlobals() {
        if (globalMessages.length) {
            for (var e, t, n, o = TRC.hasES6Support() ? ".js" : ".es5.js"; e = globalMessages.shift();)
                for (var a in e) "onclick" == a ? queue.onclick = e[a] : globalParams[a] = e[a];
            loadImplementation(n = TRC.implCustomFile ? TRC.implCustomFile + o : (t = getParameterOfWhitelist("taboola_impl_file", ["impl", "impl.thin"])) ? t + "." + TRC.version + o : 'impl.' + TRC.version + o)
        }
    }

    function doConsents() {
        for (; msg = consents.shift();) TRC.consent.setConsent ? TRC.consent.setConsent(msg) : globalMessages.push({
            consentMessage: msg
        })
    }

    function executeMessages() {
        doConsents(), doNotificationsFirst(), doGlobals(), doRequests(), doNotifications(), doSocials(), doABTests()
    }

    function registerToAMP_API() {
        var e = window.AMP_MODE && window.AMP_MODE.version ? window.AMP_MODE.version : "1";
        TRC.isAMP = !0, window._taboola.push({
            additional_data: {
                sdkd: {
                    os: "AMP",
                    osv: e,
                    sdkt: "Taboola AMP Driver",
                    sdkv: "1"
                }
            }
        }), window._taboola.push({
            listenTo: "nocontent",
            handler: function(e) {
                var t = document.querySelector(".trc_rbox_container .trc_rbox_div");
                t && t.offsetHeight > 10 || e.detail.isFeedCard || window.context.noContentAvailable()
            }
        }), window.context.observeIntersection(function(e) {
            e.forEach(function(e) {
                window._taboola.push({
                    intersection: !0,
                    rects: e,
                    placement: window.context.data.placement
                }), TRC.lastVisibleRects ? e.time > TRC.lastVisibleRects.time && (TRC.lastVisibleRects = e) : TRC.lastVisibleRects = e
            })
        })
    }

    function dispatchMessage(e) {
        if ("object" == typeof e.overrideConfig && null != e.overrideConfig) return TRC.overrideGlobalConfig = e.overrideConfig.global, void mergeObject(config, e.overrideConfig, 0);
        var t, n;
        extractSubscription(e), updateAmpMessageURL(e), e.cex && !1 !== config.global["cex-enable"] && (TRC.cexConsentData = e.cex), e.cdns && !1 !== config.global["ccpa-cdns-enable"] && (TRC.ccpaCdns = e.cdns), e.ccpaPs && !1 !== config.global["ccpa-ps-enable"] && (TRC.ccpaPs = e.ccpaPs), e.exp && (TRC.exp = e.exp), e.cseg && (TRC.cseg = e.cseg), e.mode ? (TRC.pConsole("page", "info", "push to '_taboola' - mode : " + e.mode, e, "object"), e.framework ? (globalMessages.push({
            framework: e.framework
        }), "amp" === e.framework && registerToAMP_API()) : config.global["enable-cls-plc-optim"] && containerExpand(e.placement, e.container), checkModeVisibilityConstraints(config, e.mode) && requests.push(e)) : e.listenTo ? e.handler && "function" == typeof e.handler ? apiListeners.push(e) : TRC.pConsole("page", "warn", "events API listening to event without a handler.") : e.notify ? "newPageLoad" == e.notify ? (TRC.pConsole("page", "info", "push to '_taboola' - notification : newPageLoad"), resetAllMessages(), notificationsFirst.push(e)) : notifications.push(e) : e.name && -1 !== e.name.indexOf("p13n-") ? p13ns.push(e) : e.name && -1 !== e.name.indexOf("abtests") ? abtests.push(e) : e.clsfilter ? (TRC.CLSEvents = TRC.CLSEvents || [], Array.isArray(e.clsfilter) ? e.clsfilter.forEach(function(e) {
            TRC.CLSEvents.push(e)
        }) : TRC.CLSEvents.push(e.clsfilter)) : (t = getSocialEvent(e)) ? socials.push({
            name: t,
            val: e[t]
        }) : e.debug ? debugs.push(e.debug) : e.consentData || e.consentPreset || e.gdprApplies ? consents.push(e) : (e.intersection || e.visible) && e.placement ? manualVisibles.push({
            event: "visible::" + e.placement,
            rects: e.rects
        }) : (n = getParameter("taboolax-load", win.location), (config.global["inject-taboolax"] || n) && !isTBXInit && setTBXPageType(e) && (taboolaXHost = n ? taboolaXHosts[n] : taboolaXHost, isTBXInit = !0, injectTaboolaX(taboolaXHost)), e.template && void 0 === TRC.pageTemplate && (TRC.pageTemplate = e.template), globalMessages.push(e)), e.flush && (flush = !0)
    }

    function doVisibles(e) {
        TRC.dispatch(e.event, e.rects)
    }

    function setPush(e, t) {
        var n;
        for (e.push = t; n = e.shift();) t(n)
    }

    function getSocialEvent(e) {
        try {
            for (var t in e)
                if (0 == t.indexOf("social-") && e.hasOwnProperty(t)) return t
        } catch (e) {}
        return null
    }

    function extractSubscription(e) {
        var t;
        try {
            if (!e.onrender) return;
            TRC.eventDelegator ? t = TRC.eventDelegator.subscribe : (TRC.subscriptionRegister = [], t = function(e, t, n, o) {
                TRC.subscriptionRegister.push({
                    event: e,
                    handler: t,
                    container: o
                })
            }), t("onrender", e.onrender, e.container ? getContainerId(e.container) : null)
        } catch (e) {
            __trcError && __trcError("extractSubscription", e)
        }
    }

    function updateAmpMessageURL(e) {
        var t = TRC.isAMP && e.hasOwnProperty("url") && !!window.context;
        !config.global["disable-amp-url-override"] && t && (e.url = window.context.canonicalUrl + window.context.location.search)
    }

    function getParameter(e, t) {
        var n, o, a = t.search.substr(1).split(/&/);
        for (o = 0; o < a.length; o++)
            if ((n = a[o].split(new RegExp("="), 2))[0] == e) return n[1];
        return null
    }

    function getParameterOfWhitelist(e, t) {
        for (var n = getParameter(e, win.location), o = 0; o < t.length; o++)
            if (t[o] === n) return n;
        return null
    }

    function getContainerId(e) {
        return "string" == typeof e ? e : msg.container.id || "trc_cont_ " + parseInt(1e4 * Math.random())
    }

    function setTBXPageType(e) {
        var t;
        for (t in e)
            if (PAGE_TYPES.hasOwnProperty(t)) return win[TBX_PAGE_TYPE_VAR] = PAGE_TYPES[t], PAGE_TYPES[t];
        return null
    }

    function resetAllMessages() {
        requests = [], globalMessages = [], notifications = [], notificationsFirst = [], socials = []
    }

    function pushMessage(e) {
        if (e) {
            e.placement && (TRC.performance && TRC.performance.mark("tbl_push_start", null, e.placement.replace(/ /g, "_"), 0, "tblPush", TRC.PerfEvenType.START), TRC.performance && TRC.performance.mark("tbl_push_stop", null, e.placement.replace(/ /g, "_"), 0, "tblPush", TRC.PerfEvenType.STOP)), TRC._taboolaClone.length > 50 && (TRC._taboolaClone = []), TRC._taboolaClone.push(e);
            for (var t = 0; t < arguments.length; t++)
                if (e = arguments[t], TRC.pConsole("page", "debug", "push to '_taboola'", e, "object"), e instanceof Array)
                    for (var n = 0; n < e.length; n++) dispatchMessage(e[n]);
                else dispatchMessage(e);
            return executeMessages(), arguments.length
        }
    }

    function injectComScore() {
        var e;
        config.global["inject-comscore"] && (win._comscore = win._comscore || [], loadAssetFile(("https:" == protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", {
            async: !0
        }), e = {
            c1: "7",
            c2: "13739933",
            c3: "20121515121"
        }, win._comscore.push(e), TRC.pConsole("page", "info", "injected comsocre", e, "object")), injectBrazilComScore()
    }

    function injectBrazilComScore() {
        var e = "https://sb.scorecardresearch.com/beacon.js";
        config.global["enable-comscore-brazil-distributed-content"] && (win._comscore || loadAssetFile(e, {
            async: !0
        }), win._comscore = win._comscore || [], win._comscore.push({
            c1: "7",
            c2: "34354936",
            c3: "1"
        }))
    }

    function injectDeviceId() {
        if (!1 !== config.global["rbox-detect-device-id"]) {
            var e = (t = document.createElement("a"), function(e) {
                    if (!e) return {};
                    var n;
                    t.href = e;
                    for (var o = t.search, a = /\??&?([^=]+)=([^&]+)/gi, r = {}; n = a.exec(o);) r[n[1]] = n[2];
                    return r
                }),
                t, n = function(e) {
                    return e instanceof Array ? e.filter(n).length > 0 : !!e.mode && "amp" === e.framework
                },
                o, a = _taboola.filter(n).length > 0 && window.context && r(window.context.referrer) || r(window.__tbMockReferrer || document.referrer);
            a && (_taboola.unshift({
                device: a.deviceId
            }), TRC.taboolaNews = TRC.taboolaNews || {}, TRC.taboolaNews.timeOn = a)
        }

        function r(t) {
            var n = e(t),
                o = n.redir ? e(decodeURIComponent(n.redir)) : {},
                a = n["dc_data"] || o["dc_data"];
            return a && n["ui"] ? {
                deviceId: n["ui"],
                dc_data: a
            } : null
        }
    }

    function setGloablFlags() {
        TRC.useStorageDetection = !(!config.global || !0 !== config.global["use-storage-detection"])
    }

    function injectTaboolaX(e) {
        loadAssetFile(e + "/" + TRC.publisherId + "/load.js", {
            async: !0
        }), TRC.pConsole("page", "info", "injected taboola-x with publisher id : " + TRC.publisherId)
    }

    function activatePerf(e, t, n) {
        TRC.perfConfOverride && (t = TRC.perfConfOverride), (n || e && t && t.traffic) && (n || t.traffic > 100 * Math.random()) && (TRC.performance = new TRC.Performance(t))
    }

    function preconnectTo(e) {
        var t = document.createElement("link");
        t.rel = "preconnect", t.href = e, document.head && document.head.appendChild(t)
    }

    function setResourceHints() {
        if (config.global["enable-resource-hints"])
            for (var e = 0; e < PRECONNECT_DOMAINS.length; e++) preconnectTo(TRC.PROTOCOL + "//" + PRECONNECT_DOMAINS[e])
    }

    function getConsentData() {
        var e = 0,
            t = 1,
            n = 2,
            o = 3;
        if (TRC.consentData = {}, "function" == typeof __cmp) {
            TRC.consentData.cmpStatus = t;
            try {
                __cmp("getConsentData", null, function(t) {
                    TRC.consentData.cmpStatus = e, TRC.consentData.gdprApplies = t.gdprApplies, TRC.consentData.consentDaisyBit = t.consentData
                })
            } catch (e) {
                TRC.consentData.cmpStatus = n, TRC.pConsole("page", "error", "getConsentData: Error calling __cmp api for user consent", e.message)
            }
        } else TRC.consentData.cmpStatus = o
    }

    function containerExpand(e, t) {
        var n, o, a = config.global["cls-plc-optim-config"];
        a && a[e] && (n = a[e]["vhMulti"] || 1, (o = document.getElementById(t)) && (o.style.minHeight = 100 * n + "vh"))
    }

    function mergeObject(e, t, n) {
        if (!(n > 10))
            for (var o in t) t.hasOwnProperty(o) && ("object" == typeof t[o] ? (void 0 === e[o] && (e[o] = {}), "object" == typeof e[o] && mergeObject(e[o], t[o], ++n)) : "experimentID" === o && e[o] ? e[o] = e[o] + "," + t[o] : e[o] = t[o])
    }

    function doInitialization() {
        if (setGloablFlags(), injectDeviceId(), config.global["enable-shift-cdn-domains"] || (findScriptBaseDomain(doc.getElementsByTagName("script")), setLoaderDomains()), !(queue = win[queueName]).registered) {
            for (queue.push = pushMessage, queue.registered = !0; queue.length;) pushMessage(queue.shift());
            config.global["enable-consent"] || getConsentData(), shouldInjectRtus(!config.global["enable-real-time-user-sync-with-consent"]) && injectRtus(), config.global["enable-visit-value"] && !config.global["load-vv-early"] && loadVV(), injectComScore()
        }
    }

    function shouldInjectRtus(e) {
        try {
            return e && config.global["enable-real-time-user-sync"] && (/^((?!chrome|android).)*safari/i.test(navigator.userAgent.toLowerCase()) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || navigator.userAgent.indexOf("Edg") > -1)
        } catch (e) {
            return !1
        }
    }

    function injectRtus() {
        var e = "getRTUS";
        setRtusCallback(e);
        try {
            loadAssetFile("//gum.criteo.com/sync?c=72&r=2&j=TRC." + e, {
                async: !0
            }), TRC.pConsole("page", "info", "injected RTUS service")
        } catch (e) {
            __trcWarn("Error during RTUS loading asset file: ", e)
        }
    }

    function setRtusCallback(e) {
        try {
            TRC.rtbRealTimeUserId = localStorage.getItem(RTUS_ID_STORAGE_KEY)
        } catch (e) {
            __trcWarn("Error during RTUS fetching data from local storage asset file: ", e)
        }
        TRC[e] = function(e) {
            try {
                if (e && "OK" === e.status) {
                    var t = e.userid;
                    TRC.rtbRealTimeUserId = t, localStorage.setItem(RTUS_ID_STORAGE_KEY, t)
                } else TRC.rtbRealTimeUserId = null, localStorage.removeItem(RTUS_ID_STORAGE_KEY)
            } catch (e) {
                __trcWarn("Error during RTUS callback: ", e)
            }
        }
    }
}(window, document);