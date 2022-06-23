//>>built
dojoRequire({
    cache: {
        "dijit/_base/manager": function() {
            dojoDefine(["dojo/_base/array", "dojo/_base/config", "dojo/_base/lang", "../registry", "../main"], function(m, h, g, l, d) {
                var b = {};
                m.forEach("byId getUniqueId findWidgets _destroyAll byNode getEnclosingWidget".split(" "), function(d) {
                    b[d] = l[d];
                });
                g.mixin(b, {
                    defaultDuration: h.defaultDuration || 200
                });
                g.mixin(d, b);
                return d;
            });
        },
        "dijit/registry": function() {
            dojoDefine(["dojo/_base/array", "dojo/_base/window", "./main"], function(m, h, g) {
                var l = {},
                    d = {},
                    b = {
                        length: 0,
                        add: function(b) {
                            if (d[b.id]) throw Error("Tried to register widget with id\x3d\x3d" + b.id + " but that id is already registered");
                            d[b.id] = b;
                            this.length++;
                        },
                        remove: function(b) {
                            d[b] && (delete d[b], this.length--);
                        },
                        byId: function(b) {
                            return "string" == typeof b ? d[b] : b;
                        },
                        byNode: function(b) {
                            return d[b.getAttribute("widgetId")];
                        },
                        toArray: function() {
                            var b = [],
                                e;
                            for (e in d) b.push(d[e]);
                            return b;
                        },
                        getUniqueId: function(b) {
                            var e;
                            do e = b + "_" + (b in l ? ++l[b] : l[b] = 0); while (d[e]);
                            return "dijit" == g._scopeName ? e : g._scopeName + "_" + e;
                        },
                        findWidgets: function(b, e) {
                            function a(c) {
                                for (c = c.firstChild; c; c = c.nextSibling)
                                    if (1 == c.nodeType) {
                                        var b = c.getAttribute("widgetId");
                                        b ? (b = d[b]) && f.push(b) : c !== e && a(c);
                                    }
                            }
                            var f = [];
                            a(b);
                            return f;
                        },
                        _destroyAll: function() {
                            g._curFocus = null;
                            g._prevFocus = null;
                            g._activeStack = [];
                            m.forEach(b.findWidgets(h.body()), function(b) {
                                b._destroyed || (b.destroyRecursive ? b.destroyRecursive() : b.destroy && b.destroy());
                            });
                        },
                        getEnclosingWidget: function(b) {
                            for (; b;) {
                                var e = 1 == b.nodeType && b.getAttribute("widgetId");
                                if (e) return d[e];
                                b = b.parentNode;
                            }
                            return null;
                        },
                        _hash: d
                    };
                return g.registry = b;
            });
        },
        "dijit/main": function() {
            dojoDefine(["dojo/_base/kernel"], function(m) {
                return m.dijit;
            });
        },
        "mojo/signup-forms/PopupSignupForm": function() {
            dojoDefine("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/modal.html ./SignupFormFrame ./BannerFrame dojo/query dojo/_base/lang dojo/on dojo/dom-construct dojo/dom-style dojo/sniff dojo/keys dojo/promise/all dojo/Deferred dojo/dom-class mojo/widgets/_CustomStyleRulesMixin dojo/NodeList-manipulate".split(" "), function(m, h, g, l, d, b, k, e, a, f, c, C, n, r, x, v, w) {
                var y = null;
                return m("PopupSignupForm", [h, g, w], {
                    templateString: l,
                    popupDelay: 1E3,
                    popupOpacity: .65,
                    closeLabel: "close",
                    origOverflowValue: null,
                    version: "1.0",
                    config: {},
                    subscribeUrl: "#",
                    honeypotFieldName: "",
                    customCssNode: null,
                    env: "prod",
                    ignoreCookie: !1,
                    closable: !0,
                    appDomain: "",
                    postMixInProperties: function() {
                        this.config.popupOpacity && (this.popupOpacity = this.config.popupOpacity / 100);
                        this.config.popupDelay && (isNaN(Number(this.config.popupDelay)) ? this.popupDelay = this.config.popupDelay : this.popupDelay = 1E3 * this.config.popupDelay);
                        this.config.styles && (this.styles = this.config.styles);
                        this.config.closeLabel && (this.closeLabel = this.config.closeLabel);
                        this.config.version && (this.version = this.config.version);
                        this.config.template && (this.template = this.config.template);
                        this.config.appDomain && (this.appDomain = this.config.appDomain);
                    },
                    placeAt: function() {
                        null === y && this.inherited(arguments);
                    },
                    postCreate: function() {
                        this.inherited(arguments);
                    },
                    startup: function() {
                        this.inherited(arguments);
                        null === y && (y = this, c.set(this.bannerContainer, "display", "none"), c.set(this.modalOverlay, "display", "none"), c.set(this.modalContainer, "display", "none"), this._skipShowingPopup() || (this.bannerFrame = new b({
                            iframe: this.iframeBannerContainer,
                            config: this.config,
                            appDomain: this.appDomain
                        }), this.bannerFrame.startup(), this.modalFrame = new d({
                            iframe: this.iframeModalContainer,
                            config: this.config,
                            subscribeUrl: this.subscribeUrl,
                            honeypotFieldName: this.honeypotFieldName,
                            env: this.env,
                            appDomain: this.appDomain
                        }), this.modalFrame.startup(), this._setupModal(), r([this.loadModalCss(), this.loadCustomCss()]).then(e.hitch(this, "openModal"))));
                    },
                    openModal: function() {
                        function a() {
                            c();
                            document.removeEventListener(p, a, !1);
                        }

                        function f() {
                            window.innerHeight + window.scrollY >= document.body.offsetHeight / 2 && (c(), document.removeEventListener("scroll", f, !1));
                        }

                        function b() {
                            window.innerHeight + window.scrollY >= document.body.offsetHeight && (c(), document.removeEventListener("scroll", b, !1));
                        }
                        var c = this._openModal.bind(this),
                            p = dojo.isFF ? "mouseout" : "mouseleave";
                        "exit" == this.popupDelay ? -1 < window.navigator.userAgent.indexOf("Edge") || dojo.isIE || window.screen && 640 > window.screen.width ? setTimeout(c, 1E3) : document.firstElementChild.addEventListener(p, a, !1) : "middle" == this.popupDelay ? document.addEventListener("scroll", f, !1) : "bottom" == this.popupDelay ? document.addEventListener("scroll", b, !1) : setTimeout(c, this.popupDelay);
                    },
                    closeModal: function() {
                        this._closeModal();
                    },
                    showModal: function() {
                        c.set(this.bannerContainer, "display", "none");
                        c.set(this.modalOverlay, "visibility", "visible");
                        c.set(this.modalContainer, "visibility", "visible");
                    },
                    closeBanner: function() {
                        this.closable && (c.set(this.bannerContainer, "display", "none"), this._closeModal());
                    },
                    _openModal: function() {
                        c.set(this.bannerContainer, "display", "block");
                        c.set(this.modalOverlay, "display", "block");
                        c.set(this.modalContainer, "display", "block");
                        this.modalFrame.updateDocHeight();
                        this.bannerFrame.updateDocHeight();
                        c.set(this.modalOverlay, "opacity", this.popupOpacity);
                        c.set(this.modalContainer, "opacity", 1);
                    },
                    _closeModal: function() {
                        if (this.closable)
                            if (-1 === window.location.href.indexOf("mailchimp.com") && this._setCookie(), void 0 === this.modalContainer.style.animation || "fixed" !== this.config.modalVariation && "slide" !== this.config.modalVariation) this._hideOverlay();
                            else try {
                                this.modalContainer.addEventListener("webkitAnimationEnd", this._hideOverlay.bind(this)), this.modalContainer.addEventListener("animationend", this._hideOverlay.bind(this)), v.add(this.modalContainer, "mc-modal--close");
                            } catch (a) {
                                this._hideOverlay();
                            }
                    },
                    _hideOverlay: function() {
                        c.set(this.modalOverlay, "opacity", 0);
                        c.set(this.modalOverlay, "display", "none");
                        this._cleanup();
                    },
                    _cleanup: function() {
                        f.destroy(this.domNode);
                        c.set(document.body, "overflow", this.origOverflowValue);
                        y = null;
                    },
                    _setupModal: function() {
                        this.origOverflowValue = dojo.getComputedStyle(document.body).overflow;
                        c.set(document.body, "overflow", "auto");
                        var f = this.bannerFrame.bannerContent;
                        a(f.modalOpen, "click", e.hitch(this, "closeBanner"));
                        a(f.bannerClose, "click", e.hitch(this, "showModal"));
                        a(k("[data-action\x3d'close-mc-modal']")[0], "click", e.hitch(this, "closeModal"));
                        a(window.document, "keyup", e.hitch(this, function(a) {
                            a.keyCode == n.ESCAPE && this.closeModal();
                        }));
                        a(this.modalFrame.frameDoc, "keyup", e.hitch(this, function(a) {
                            a.keyCode == n.ESCAPE && this.closeModal();
                        }));
                    },
                    loadModalCss: function() {
                        var f = new x(),
                            b = document.createElement("link");
                        b.rel = "stylesheet";
                        b.type = "text/css";
                        "dev" == this.env ? (b.href = "//" + this.appDomain + "/css/signup-forms/popup/modal.css", "slide" === this.config.modalVariation ? b.href = "//" + this.appDomain + "/css/signup-forms/popup/modal-slidein.css" : "fixed" === this.config.modalVariation && (b.href = "//" + this.appDomain + "/css/signup-forms/popup/modal-fixed.css")) : (b.href = "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/modal.css", "slide" === this.config.modalVariation ? b.href = "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/modal-slidein.css" : "fixed" === this.config.modalVariation && (b.href = "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/modal-fixed.css"));
                        b.media = "all";
                        a(b, "load", function() {
                            f.resolve();
                        });
                        document.getElementsByTagName("head")[0].appendChild(b);
                        return f.promise;
                    },
                    loadCustomCss: function() {
                        this.customCssNode && f.destroy(this.customCssNode);
                        var a = new x();
                        this.customCssNode = this.createStyleNode(document);
                        var b = this.getStyleSheet(this.customCssNode);
                        if (this.styles)
                            for (var c in this.styles)
                                if (this.styles.hasOwnProperty(c)) switch (c) {
                                    case "modal":
                                        for (var d in this.styles[c]) switch (d) {
                                            case "close_link_color":
                                                this.addCSSRule(b, ".mc-closeModal", "color:" + this.styles[c][d] + ";");
                                        }
                                }!this.template || 3 !== this.template && 4 !== this.template || this.addCSSRule(b, ".mc-modal", "width: 603px;");
                        a.resolve();
                        return a.promise;
                    },
                    _setCookie: function() {
                        var a = new Date(new Date().getTime() + 31536E6);
                        document.cookie = "MCPopupClosed\x3dyes;expires\x3d" + a.toGMTString() + ";path\x3d/";
                    },
                    _skipShowingPopup: function() {
                        return !this.ignoreCookie && this._hasCookie();
                    },
                    _hasCookie: function() {
                        var a = document.cookie.split(";");
                        for (i = 0; i < a.length; i++)
                            if (parts = a[i].split("\x3d"), -1 !== parts[0].indexOf("MCPopupClosed") || -1 !== parts[0].indexOf("MCPopupSubscribed")) return !0;
                        return !1;
                    }
                });
            });
        },
        "dijit/_WidgetBase": function() {
            dojoDefine("require dojo/_base/array dojo/aspect dojo/_base/config dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/_base/kernel dojo/_base/lang dojo/on dojo/ready dojo/Stateful dojo/topic dojo/_base/window ./Destroyable dojo/has!dojo-bidi?./_BidiMixin ./registry".split(" "), function(m, h, g, l, d, b, k, e, a, f, c, C, n, r, x, v, w, y, t, q, u, z, p) {
                function L(a) {
                    return function(b) {
                        e[b ? "set" : "remove"](this.domNode, a, b);
                        this._set(a, b);
                    };
                }
                n.add("dijit-legacy-requires", !r.isAsync);
                n.add("dojo-bidi", !1);
                n("dijit-legacy-requires") && w(0, function() {
                    m(["dijit/_base/manager"]);
                });
                var K = {};
                l = b("dijit._WidgetBase", [y, u], {
                    id: "",
                    _setIdAttr: "domNode",
                    lang: "",
                    _setLangAttr: L("lang"),
                    dir: "",
                    _setDirAttr: L("dir"),
                    "class": "",
                    _setClassAttr: {
                        node: "domNode",
                        type: "class"
                    },
                    _setTypeAttr: null,
                    style: "",
                    title: "",
                    tooltip: "",
                    baseClass: "",
                    srcNodeRef: null,
                    domNode: null,
                    containerNode: null,
                    ownerDocument: null,
                    _setOwnerDocumentAttr: function(a) {
                        this._set("ownerDocument", a);
                    },
                    attributeMap: {},
                    _blankGif: l.blankGif || m.toUrl("dojo/resources/blank.gif"),
                    _introspect: function() {
                        var a = this.constructor;
                        if (!a._setterAttrs) {
                            var b = a.prototype,
                                f = a._setterAttrs = [],
                                a = a._onMap = {},
                                c;
                            for (c in b.attributeMap) f.push(c);
                            for (c in b) /^on/.test(c) && (a[c.substring(2).toLowerCase()] = c), /^_set[A-Z](.*)Attr$/.test(c) && (c = c.charAt(4).toLowerCase() + c.substr(5, c.length - 9), b.attributeMap && c in b.attributeMap || f.push(c));
                        }
                    },
                    postscript: function(a, b) {
                        this.create(a, b);
                    },
                    create: function(a, b) {
                        this._introspect();
                        this.srcNodeRef = k.byId(b);
                        this._connects = [];
                        this._supportingWidgets = [];
                        this.srcNodeRef && "string" == typeof this.srcNodeRef.id && (this.id = this.srcNodeRef.id);
                        a && (this.params = a, x.mixin(this, a));
                        this.postMixInProperties();
                        this.id || (this.id = p.getUniqueId(this.declaredClass.replace(/\./g, "_")), this.params && delete this.params.id);
                        this.ownerDocument = this.ownerDocument || (this.srcNodeRef ? this.srcNodeRef.ownerDocument : document);
                        this.ownerDocumentBody = q.body(this.ownerDocument);
                        p.add(this);
                        this.buildRendering();
                        var f;
                        if (this.domNode) {
                            this._applyAttributes();
                            var c = this.srcNodeRef;
                            c && c.parentNode && this.domNode !== c && (c.parentNode.replaceChild(this.domNode, c), f = !0);
                            this.domNode.setAttribute("widgetId", this.id);
                        }
                        this.postCreate();
                        f && delete this.srcNodeRef;
                        this._created = !0;
                    },
                    _applyAttributes: function() {
                        var a = {},
                            b;
                        for (b in this.params || {}) a[b] = this._get(b);
                        h.forEach(this.constructor._setterAttrs, function(b) {
                            if (!(b in a)) {
                                var f = this._get(b);
                                f && this.set(b, f);
                            }
                        }, this);
                        for (b in a) this.set(b, a[b]);
                    },
                    postMixInProperties: function() {},
                    buildRendering: function() {
                        this.domNode || (this.domNode = this.srcNodeRef || this.ownerDocument.createElement("div"));
                        if (this.baseClass) {
                            var b = this.baseClass.split(" ");
                            this.isLeftToRight() || (b = b.concat(h.map(b, function(a) {
                                return a + "Rtl";
                            })));
                            a.add(this.domNode, b);
                        }
                    },
                    postCreate: function() {},
                    startup: function() {
                        this._started || (this._started = !0, h.forEach(this.getChildren(), function(a) {
                            a._started || a._destroyed || !x.isFunction(a.startup) || (a.startup(), a._started = !0);
                        }));
                    },
                    destroyRecursive: function(a) {
                        this._beingDestroyed = !0;
                        this.destroyDescendants(a);
                        this.destroy(a);
                    },
                    destroy: function(a) {
                        function b(f) {
                            f.destroyRecursive ? f.destroyRecursive(a) : f.destroy && f.destroy(a);
                        }
                        this._beingDestroyed = !0;
                        this.uninitialize();
                        h.forEach(this._connects, x.hitch(this, "disconnect"));
                        h.forEach(this._supportingWidgets, b);
                        this.domNode && h.forEach(p.findWidgets(this.domNode, this.containerNode), b);
                        this.destroyRendering(a);
                        p.remove(this.id);
                        this._destroyed = !0;
                    },
                    destroyRendering: function(a) {
                        this.bgIframe && (this.bgIframe.destroy(a), delete this.bgIframe);
                        this.domNode && (a ? e.remove(this.domNode, "widgetId") : f.destroy(this.domNode), delete this.domNode);
                        this.srcNodeRef && (a || f.destroy(this.srcNodeRef), delete this.srcNodeRef);
                    },
                    destroyDescendants: function(a) {
                        h.forEach(this.getChildren(), function(b) {
                            b.destroyRecursive && b.destroyRecursive(a);
                        });
                    },
                    uninitialize: function() {
                        return !1;
                    },
                    _setStyleAttr: function(a) {
                        var b = this.domNode;
                        x.isObject(a) ? C.set(b, a) : b.style.cssText = b.style.cssText ? b.style.cssText + ("; " + a) : a;
                        this._set("style", a);
                    },
                    _attrToDom: function(b, f, c) {
                        c = 3 <= arguments.length ? c : this.attributeMap[b];
                        h.forEach(x.isArray(c) ? c : [c], function(c) {
                            var p = this[c.node || c || "domNode"];
                            switch (c.type || "attribute") {
                                case "attribute":
                                    x.isFunction(f) && (f = x.hitch(this, f));
                                    c = c.attribute ? c.attribute : /^on[A-Z][a-zA-Z]*$/.test(b) ? b.toLowerCase() : b;
                                    p.tagName ? e.set(p, c, f) : p.set(c, f);
                                    break;
                                case "innerText":
                                    p.innerHTML = "";
                                    p.appendChild(this.ownerDocument.createTextNode(f));
                                    break;
                                case "innerHTML":
                                    p.innerHTML = f;
                                    break;
                                case "class":
                                    a.replace(p, f, this[b]);
                            }
                        }, this);
                    },
                    get: function(a) {
                        var b = this._getAttrNames(a);
                        return this[b.g] ? this[b.g]() : this._get(a);
                    },
                    set: function(a, b) {
                        if ("object" === typeof a) {
                            for (var f in a) this.set(f, a[f]);
                            return this;
                        }
                        f = this._getAttrNames(a);
                        var c = this[f.s];
                        if (x.isFunction(c)) var p = c.apply(this, Array.prototype.slice.call(arguments, 1));
                        else {
                            var c = this.focusNode && !x.isFunction(this.focusNode) ? "focusNode" : "domNode",
                                d = this[c] && this[c].tagName,
                                n;
                            if ((n = d) && !(n = K[d])) {
                                n = this[c];
                                var C = {},
                                    e;
                                for (e in n) C[e.toLowerCase()] = !0;
                                n = K[d] = C;
                            }
                            e = n;
                            f = a in this.attributeMap ? this.attributeMap[a] : f.s in this ? this[f.s] : e && f.l in e && "function" != typeof b || /^aria-|^data-|^role$/.test(a) ? c : null;
                            null != f && this._attrToDom(a, b, f);
                            this._set(a, b);
                        }
                        return p || this;
                    },
                    _attrPairNames: {},
                    _getAttrNames: function(a) {
                        var b = this._attrPairNames;
                        if (b[a]) return b[a];
                        var f = a.replace(/^[a-z]|-[a-zA-Z]/g, function(a) {
                            return a.charAt(a.length - 1).toUpperCase();
                        });
                        return b[a] = {
                            n: a + "Node",
                            s: "_set" + f + "Attr",
                            g: "_get" + f + "Attr",
                            l: f.toLowerCase()
                        };
                    },
                    _set: function(a, b) {
                        var f = this[a];
                        this[a] = b;
                        !this._created || f === b || f !== f && b !== b || (this._watchCallbacks && this._watchCallbacks(a, f, b), this.emit("attrmodified-" + a, {
                            detail: {
                                prevValue: f,
                                newValue: b
                            }
                        }));
                    },
                    _get: function(a) {
                        return this[a];
                    },
                    emit: function(a, b, f) {
                        b = b || {};
                        void 0 === b.bubbles && (b.bubbles = !0);
                        void 0 === b.cancelable && (b.cancelable = !0);
                        b.detail || (b.detail = {});
                        b.detail.widget = this;
                        var c, p = this["on" + a];
                        p && (c = p.apply(this, f ? f : [b]));
                        this._started && !this._beingDestroyed && v.emit(this.domNode, a.toLowerCase(), b);
                        return c;
                    },
                    on: function(a, b) {
                        var f = this._onMap(a);
                        return f ? g.after(this, f, b, !0) : this.own(v(this.domNode, a, b))[0];
                    },
                    _onMap: function(a) {
                        var b = this.constructor,
                            f = b._onMap;
                        if (!f) {
                            var f = b._onMap = {},
                                c;
                            for (c in b.prototype) /^on/.test(c) && (f[c.replace(/^on/, "").toLowerCase()] = c);
                        }
                        return f["string" == typeof a && a.toLowerCase()];
                    },
                    toString: function() {
                        return "[Widget " + this.declaredClass + ", " + (this.id || "NO ID") + "]";
                    },
                    getChildren: function() {
                        return this.containerNode ? p.findWidgets(this.containerNode) : [];
                    },
                    getParent: function() {
                        return p.getEnclosingWidget(this.domNode.parentNode);
                    },
                    connect: function(a, b, f) {
                        return this.own(d.connect(a, b, this, f))[0];
                    },
                    disconnect: function(a) {
                        a.remove();
                    },
                    subscribe: function(a, b) {
                        return this.own(t.subscribe(a, x.hitch(this, b)))[0];
                    },
                    unsubscribe: function(a) {
                        a.remove();
                    },
                    isLeftToRight: function() {
                        return this.dir ? "ltr" == this.dir.toLowerCase() : c.isBodyLtr(this.ownerDocument);
                    },
                    isFocusable: function() {
                        return this.focus && "none" != C.get(this.domNode, "display");
                    },
                    placeAt: function(a, b) {
                        var c = !a.tagName && p.byId(a);
                        !c || !c.addChild || b && "number" !== typeof b ? (c = c && "domNode" in c ? c.containerNode && !/after|before|replace/.test(b || "") ? c.containerNode : c.domNode : k.byId(a, this.ownerDocument), f.place(this.domNode, c, b), !this._started && (this.getParent() || {})._started && this.startup()) : c.addChild(this, b);
                        return this;
                    },
                    defer: function(a, b) {
                        var f = setTimeout(x.hitch(this, function() {
                            f && (f = null, this._destroyed || x.hitch(this, a)());
                        }), b || 0);
                        return {
                            remove: function() {
                                f && (clearTimeout(f), f = null);
                                return null;
                            }
                        };
                    }
                });
                n("dojo-bidi") && l.extend(z);
                return l;
            });
        },
        "dojo/Stateful": function() {
            dojoDefine(["./_base/declare", "./_base/lang", "./_base/array", "./when"], function(m, h, g, l) {
                return m("dojo.Stateful", null, {
                    _attrPairNames: {},
                    _getAttrNames: function(d) {
                        var b = this._attrPairNames;
                        return b[d] ? b[d] : b[d] = {
                            s: "_" + d + "Setter",
                            g: "_" + d + "Getter"
                        };
                    },
                    postscript: function(d) {
                        d && this.set(d);
                    },
                    _get: function(d, b) {
                        return "function" === typeof this[b.g] ? this[b.g]() : this[d];
                    },
                    get: function(d) {
                        return this._get(d, this._getAttrNames(d));
                    },
                    set: function(d, b) {
                        if ("object" === typeof d) {
                            for (var k in d) d.hasOwnProperty(k) && "_watchCallbacks" != k && this.set(k, d[k]);
                            return this;
                        }
                        k = this._getAttrNames(d);
                        var e = this._get(d, k);
                        k = this[k.s];
                        var a;
                        "function" === typeof k ? a = k.apply(this, Array.prototype.slice.call(arguments, 1)) : this[d] = b;
                        if (this._watchCallbacks) {
                            var f = this;
                            l(a, function() {
                                f._watchCallbacks(d, e, b);
                            });
                        }
                        return this;
                    },
                    _changeAttrValue: function(d, b) {
                        var k = this.get(d);
                        this[d] = b;
                        this._watchCallbacks && this._watchCallbacks(d, k, b);
                        return this;
                    },
                    watch: function(d, b) {
                        var k = this._watchCallbacks;
                        if (!k) var e = this,
                            k = this._watchCallbacks = function(a, b, f, d) {
                                var g = function(d) {
                                    if (d) {
                                        d = d.slice();
                                        for (var k = 0, g = d.length; k < g; k++) d[k].call(e, a, b, f);
                                    }
                                };
                                g(k["_" + a]);
                                d || g(k["*"]);
                            };
                        b || "function" !== typeof d ? d = "_" + d : (b = d, d = "*");
                        var a = k[d];
                        "object" !== typeof a && (a = k[d] = []);
                        a.push(b);
                        var f = {};
                        f.unwatch = f.remove = function() {
                            var f = g.indexOf(a, b); - 1 < f && a.splice(f, 1);
                        };
                        return f;
                    }
                });
            });
        },
        "dijit/Destroyable": function() {
            dojoDefine(["dojo/_base/array", "dojo/aspect", "dojo/_base/declare"], function(m, h, g) {
                return g("dijit.Destroyable", null, {
                    destroy: function(g) {
                        this._destroyed = !0;
                    },
                    own: function() {
                        var g = ["destroyRecursive", "destroy", "remove"];
                        m.forEach(arguments, function(d) {
                            function b() {
                                e.remove();
                                m.forEach(a, function(a) {
                                    a.remove();
                                });
                            }
                            var k, e = h.before(this, "destroy", function(a) {
                                    d[k](a);
                                }),
                                a = [];
                            d.then ? (k = "cancel", d.then(b, b)) : m.forEach(g, function(f) {
                                "function" === typeof d[f] && (k || (k = f), a.push(h.after(d, f, b, !0)));
                            });
                        }, this);
                        return arguments;
                    }
                });
            });
        },
        "dijit/_TemplatedMixin": function() {
            dojoDefine("dojo/cache dojo/_base/declare dojo/dom-construct dojo/_base/lang dojo/on dojo/sniff dojo/string ./_AttachMixin".split(" "), function(m, h, g, l, d, b, k, e) {
                var a = h("dijit._TemplatedMixin", e, {
                    templateString: null,
                    templatePath: null,
                    _skipNodeCache: !1,
                    searchContainerNode: !0,
                    _stringRepl: function(a) {
                        var b = this.declaredClass,
                            d = this;
                        return k.substitute(a, this, function(a, f) {
                            "!" == f.charAt(0) && (a = l.getObject(f.substr(1), !1, d));
                            if ("undefined" == typeof a) throw Error(b + " template:" + f);
                            return null == a ? "" : "!" == f.charAt(0) ? a : this._escapeValue("" + a);
                        }, this);
                    },
                    _escapeValue: function(a) {
                        return a.replace(/["'<>&]/g, function(a) {
                            return {
                                "\x26": "\x26amp;",
                                "\x3c": "\x26lt;",
                                "\x3e": "\x26gt;",
                                '"': "\x26quot;",
                                "'": "\x26#x27;"
                            }[a];
                        });
                    },
                    buildRendering: function() {
                        if (!this._rendered) {
                            this.templateString || (this.templateString = m(this.templatePath, {
                                sanitize: !0
                            }));
                            var b = a.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument),
                                c;
                            if (l.isString(b)) {
                                if (c = g.toDom(this._stringRepl(b), this.ownerDocument), 1 != c.nodeType) throw Error("Invalid template: " + b);
                            } else c = b.cloneNode(!0);
                            this.domNode = c;
                        }
                        this.inherited(arguments);
                        this._rendered || this._fillContent(this.srcNodeRef);
                        this._rendered = !0;
                    },
                    _fillContent: function(a) {
                        var b = this.containerNode;
                        if (a && b)
                            for (; a.hasChildNodes();) b.appendChild(a.firstChild);
                    }
                });
                a._templateCache = {};
                a.getCachedTemplate = function(b, c, d) {
                    var n = a._templateCache,
                        e = b,
                        l = n[e];
                    if (l) {
                        try {
                            if (!l.ownerDocument || l.ownerDocument == (d || document)) return l;
                        } catch (h) {}
                        g.destroy(l);
                    }
                    b = k.trim(b);
                    if (c || b.match(/\$\{([^\}]+)\}/g)) return n[e] = b;
                    c = g.toDom(b, d);
                    if (1 != c.nodeType) throw Error("Invalid template: " + b);
                    return n[e] = c;
                };
                b("ie") && d(window, "unload", function() {
                    var b = a._templateCache,
                        c;
                    for (c in b) {
                        var d = b[c];
                        "object" == typeof d && g.destroy(d);
                        delete b[c];
                    }
                });
                return a;
            });
        },
        "dojo/cache": function() {
            dojoDefine(["./_base/kernel", "./text"], function(m) {
                return m.cache;
            });
        },
        "dojo/text": function() {
            dojoDefine(["./_base/kernel", "require", "./has", "./request"], function(m, h, g, l) {
                var d;
                d = function(a, b, d) {
                    l(a, {
                        sync: !!b,
                        headers: {
                            "X-Requested-With": null
                        }
                    }).then(d);
                };
                var b = {},
                    k = function(a) {
                        if (a) {
                            a = a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, "");
                            var b = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
                            b && (a = b[1]);
                        } else a = "";
                        return a;
                    },
                    e = {},
                    a = {};
                m.cache = function(a, c, e) {
                    var n;
                    "string" == typeof a ? /\//.test(a) ? (n = a, e = c) : n = h.toUrl(a.replace(/\./g, "/") + (c ? "/" + c : "")) : (n = a + "", e = c);
                    a = void 0 != e && "string" != typeof e ? e.value : e;
                    e = e && e.sanitize;
                    if ("string" == typeof a) return b[n] = a, e ? k(a) : a;
                    if (null === a) return delete b[n], null;
                    n in b || d(n, !0, function(a) {
                        b[n] = a;
                    });
                    return e ? k(b[n]) : b[n];
                };
                return {
                    dynamic: !0,
                    normalize: function(a, b) {
                        var d = a.split("!"),
                            e = d[0];
                        return (/^\./.test(e) ? b(e) : e) + (d[1] ? "!" + d[1] : "");
                    },
                    load: function(f, c, g) {
                        f = f.split("!");
                        var n = 1 < f.length,
                            l = f[0],
                            h = c.toUrl(f[0]);
                        f = "url:" + h;
                        var m = e,
                            w = function(a) {
                                g(n ? k(a) : a);
                            };
                        l in b ? m = b[l] : c.cache && f in c.cache ? m = c.cache[f] : h in b && (m = b[h]);
                        if (m === e) {
                            if (a[h]) a[h].push(w);
                            else {
                                var y = a[h] = [w];
                                d(h, !c.async, function(c) {
                                    b[l] = b[h] = c;
                                    for (var f = 0; f < y.length;) y[f++](c);
                                    delete a[h];
                                });
                            }
                        } else w(m);
                    }
                };
            });
        },
        "dojo/request": function() {
            dojoDefine(["./request/default!"], function(m) {
                return m;
            });
        },
        "dojo/request/default": function() {
            dojoDefine(["exports", "require", "../has"], function(m, h, g) {
                var l = g("config-requestProvider");
                l || (l = "./xhr");
                m.getPlatformDefaultId = function() {
                    return "./xhr";
                };
                m.load = function(d, b, g, e) {
                    h(["platform" == d ? "./xhr" : l], function(a) {
                        g(a);
                    });
                };
            });
        },
        "dojo/string": function() {
            dojoDefine(["./_base/kernel", "./_base/lang"], function(m, h) {
                var g = /[&<>'"\/]/g,
                    l = {
                        "\x26": "\x26amp;",
                        "\x3c": "\x26lt;",
                        "\x3e": "\x26gt;",
                        '"': "\x26quot;",
                        "'": "\x26#x27;",
                        "/": "\x26#x2F;"
                    },
                    d = {};
                h.setObject("dojo.string", d);
                d.escape = function(b) {
                    return b ? b.replace(g, function(b) {
                        return l[b];
                    }) : "";
                };
                d.rep = function(b, d) {
                    if (0 >= d || !b) return "";
                    for (var e = [];;) {
                        d & 1 && e.push(b);
                        if (!(d >>= 1)) break;
                        b += b;
                    }
                    return e.join("");
                };
                d.pad = function(b, g, e, a) {
                    e || (e = "0");
                    b = String(b);
                    g = d.rep(e, Math.ceil((g - b.length) / e.length));
                    return a ? b + g : g + b;
                };
                d.substitute = function(b, d, e, a) {
                    a = a || m.global;
                    e = e ? h.hitch(a, e) : function(a) {
                        return a;
                    };
                    return b.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function(b, c, g) {
                        b = h.getObject(c, !1, d);
                        g && (b = h.getObject(g, !1, a).call(a, b, c));
                        return e(b, c).toString();
                    });
                };
                d.trim = String.prototype.trim ? h.trim : function(b) {
                    b = b.replace(/^\s+/, "");
                    for (var d = b.length - 1; 0 <= d; d--)
                        if (/\S/.test(b.charAt(d))) {
                            b = b.substring(0, d + 1);
                            break;
                        }
                    return b;
                };
                return d;
            });
        },
        "dijit/_AttachMixin": function() {
            dojoDefine("require dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/_base/lang dojo/mouse dojo/on dojo/touch ./_WidgetBase".split(" "), function(m, h, g, l, d, b, k, e, a) {
                var f = d.delegate(e, {
                        mouseenter: b.enter,
                        mouseleave: b.leave,
                        keypress: g._keypress
                    }),
                    c;
                g = l("dijit._AttachMixin", null, {
                    constructor: function() {
                        this._attachPoints = [];
                        this._attachEvents = [];
                    },
                    buildRendering: function() {
                        this.inherited(arguments);
                        this._attachTemplateNodes(this.domNode);
                        this._beforeFillContent();
                    },
                    _beforeFillContent: function() {},
                    _attachTemplateNodes: function(a) {
                        for (var b = a;;)
                            if (1 == b.nodeType && (this._processTemplateNode(b, function(a, b) {
                                    return a.getAttribute(b);
                                }, this._attach) || this.searchContainerNode) && b.firstChild) b = b.firstChild;
                            else {
                                if (b == a) break;
                                for (; !b.nextSibling;)
                                    if (b = b.parentNode, b == a) return;
                                b = b.nextSibling;
                            }
                    },
                    _processTemplateNode: function(a, b, c) {
                        var f = !0,
                            e = this.attachScope || this,
                            g = b(a, "dojoAttachPoint") || b(a, "data-dojo-attach-point");
                        if (g)
                            for (var l = g.split(/\s*,\s*/); g = l.shift();) d.isArray(e[g]) ? e[g].push(a) : e[g] = a, f = "containerNode" != g, this._attachPoints.push(g);
                        if (b = b(a, "dojoAttachEvent") || b(a, "data-dojo-attach-event"))
                            for (g = b.split(/\s*,\s*/), l = d.trim; b = g.shift();)
                                if (b) {
                                    var h = null; - 1 != b.indexOf(":") ? (h = b.split(":"), b = l(h[0]), h = l(h[1])) : b = l(b);
                                    h || (h = b);
                                    this._attachEvents.push(c(a, b, d.hitch(e, h)));
                                }
                        return f;
                    },
                    _attach: function(a, b, d) {
                        b = b.replace(/^on/, "").toLowerCase();
                        b = "dijitclick" == b ? c || (c = m("./a11yclick")) : f[b] || b;
                        return k(a, b, d);
                    },
                    _detachTemplateNodes: function() {
                        var a = this.attachScope || this;
                        h.forEach(this._attachPoints, function(b) {
                            delete a[b];
                        });
                        this._attachPoints = [];
                        h.forEach(this._attachEvents, function(a) {
                            a.remove();
                        });
                        this._attachEvents = [];
                    },
                    destroyRendering: function() {
                        this._detachTemplateNodes();
                        this.inherited(arguments);
                    }
                });
                d.extend(a, {
                    dojoAttachEvent: "",
                    dojoAttachPoint: ""
                });
                return g;
            });
        },
        "dojo/touch": function() {
            dojoDefine("./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "), function(m, h, g, l, d, b, k, e, a, f) {
                function c(a, c, f) {
                    return x && f ? function(a, c) {
                        return b(a, f, c);
                    } : w ? function(f, d) {
                        var p = b(f, c, function(a) {
                                d.call(this, a);
                                G = new Date().getTime();
                            }),
                            e = b(f, a, function(a) {
                                (!G || new Date().getTime() > G + 1E3) && d.call(this, a);
                            });
                        return {
                            remove: function() {
                                p.remove();
                                e.remove();
                            }
                        };
                    } : function(c, f) {
                        return b(c, a, f);
                    };
                }

                function C(a) {
                    do
                        if (void 0 !== a.dojoClick) return a; while (a = a.parentNode);
                }

                function n(a, c, d) {
                    if (!e.isRight(a)) {
                        var n = C(a.target);
                        if (t = !a.target.disabled && n && n.dojoClick)
                            if (u = (q = "useTarget" == t) ? n : a.target, q && a.preventDefault(), z = a.changedTouches ? a.changedTouches[0].pageX - f.global.pageXOffset : a.clientX, p = a.changedTouches ? a.changedTouches[0].pageY - f.global.pageYOffset : a.clientY, L = ("object" == typeof t ? t.x : "number" == typeof t ? t : 0) || 4, K = ("object" == typeof t ? t.y : "number" == typeof t ? t : 0) || 4, !y) {
                                a = function(a) {
                                    f.doc.addEventListener(a, function(b) {
                                        var c = b.target;
                                        if (t && !b._dojo_click && new Date().getTime() <= M + 1E3 && ("INPUT" != c.tagName || !l.contains(c, "dijitOffScreen")) && (b.stopPropagation(), b.stopImmediatePropagation && b.stopImmediatePropagation(), "click" == a && ("INPUT" != c.tagName || "radio" == c.type && (l.contains(c, "dijitCheckBoxInput") || l.contains(c, "mblRadioButton")) || "checkbox" == c.type && (l.contains(c, "dijitCheckBoxInput") || l.contains(c, "mblCheckBox"))) && "TEXTAREA" != c.tagName && "AUDIO" != c.tagName && "VIDEO" != c.tagName)) {
                                            var f = null;
                                            try {
                                                if ("A" == c.tagName) {
                                                    for (;
                                                        (c = c.parentElement) && !c.classList.contains("dijitMenu") && !c.classList.contains("dijitButtonNode"););
                                                    f = c;
                                                }
                                            } catch (d) {}
                                            f || b.preventDefault();
                                        }
                                    }, !0);
                                };
                                var h = function(a) {
                                    t = q ? g.isDescendant(f.doc.elementFromPoint(a.changedTouches ? a.changedTouches[0].pageX - f.global.pageXOffset : a.clientX, a.changedTouches ? a.changedTouches[0].pageY - f.global.pageYOffset : a.clientY), u) : t && (a.changedTouches ? a.changedTouches[0].target : a.target) == u && Math.abs((a.changedTouches ? a.changedTouches[0].pageX - f.global.pageXOffset : a.clientX) - z) <= L && Math.abs((a.changedTouches ? a.changedTouches[0].pageY - f.global.pageYOffset : a.clientY) - p) <= K;
                                };
                                y = !0;
                                f.doc.addEventListener(c, function(a) {
                                    e.isRight(a) || (h(a), q && a.preventDefault());
                                }, !0);
                                f.doc.addEventListener(d, function(a) {
                                    if (!e.isRight(a) && (h(a), t)) {
                                        var c = function(b) {
                                            var c = document.createEvent("MouseEvents");
                                            c._dojo_click = !0;
                                            c.initMouseEvent(b, !0, !0, a.view, a.detail, d.screenX, d.screenY, d.clientX, d.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null);
                                            return c;
                                        };
                                        M = new Date().getTime();
                                        var f = q ? u : a.target;
                                        "LABEL" === f.tagName && (f = g.byId(f.getAttribute("for")) || f);
                                        var d = a.changedTouches ? a.changedTouches[0] : a,
                                            p = c("mousedown"),
                                            z = c("mouseup"),
                                            n = c("click");
                                        setTimeout(function() {
                                            b.emit(f, "mousedown", p);
                                            b.emit(f, "mouseup", z);
                                            b.emit(f, "click", n);
                                            M = new Date().getTime();
                                        }, 0);
                                    }
                                }, !0);
                                a("click");
                                a("mousedown");
                                a("mouseup");
                            }
                    }
                }
                var r = 5 > k("ios"),
                    x = k("pointer-events") || k("MSPointer"),
                    v = function() {
                        var a = {},
                            b;
                        for (b in {
                                down: 1,
                                move: 1,
                                up: 1,
                                cancel: 1,
                                over: 1,
                                out: 1
                            }) a[b] = k("MSPointer") ? "MSPointer" + b.charAt(0).toUpperCase() + b.slice(1) : "pointer" + b;
                        return a;
                    }(),
                    w = k("touch-events"),
                    y, t, q = !1,
                    u, z, p, L, K, M, G, H;
                k("touch") && (x ? a(function() {
                    f.doc.addEventListener(v.down, function(a) {
                        n(a, v.move, v.up);
                    }, !0);
                }) : a(function() {
                    function a(b) {
                        var c = d.delegate(b, {
                            bubbles: !0
                        });
                        6 <= k("ios") && (c.touches = b.touches, c.altKey = b.altKey, c.changedTouches = b.changedTouches, c.ctrlKey = b.ctrlKey, c.metaKey = b.metaKey, c.shiftKey = b.shiftKey, c.targetTouches = b.targetTouches);
                        return c;
                    }
                    H = f.body();
                    f.doc.addEventListener("touchstart", function(a) {
                        G = new Date().getTime();
                        var c = H;
                        H = a.target;
                        b.emit(c, "dojotouchout", {
                            relatedTarget: H,
                            bubbles: !0
                        });
                        b.emit(H, "dojotouchover", {
                            relatedTarget: c,
                            bubbles: !0
                        });
                        n(a, "touchmove", "touchend");
                    }, !0);
                    b(f.doc, "touchmove", function(c) {
                        G = new Date().getTime();
                        var d = f.doc.elementFromPoint(c.pageX - (r ? 0 : f.global.pageXOffset), c.pageY - (r ? 0 : f.global.pageYOffset));
                        d && (H !== d && (b.emit(H, "dojotouchout", {
                            relatedTarget: d,
                            bubbles: !0
                        }), b.emit(d, "dojotouchover", {
                            relatedTarget: H,
                            bubbles: !0
                        }), H = d), b.emit(d, "dojotouchmove", a(c)) || c.preventDefault());
                    });
                    b(f.doc, "touchend", function(c) {
                        G = new Date().getTime();
                        var d = f.doc.elementFromPoint(c.pageX - (r ? 0 : f.global.pageXOffset), c.pageY - (r ? 0 : f.global.pageYOffset)) || f.body();
                        b.emit(d, "dojotouchend", a(c));
                    });
                }));
                h = {
                    press: c("mousedown", "touchstart", v.down),
                    move: c("mousemove", "dojotouchmove", v.move),
                    release: c("mouseup", "dojotouchend", v.up),
                    cancel: c(e.leave, "touchcancel", x ? v.cancel : null),
                    over: c("mouseover", "dojotouchover", v.over),
                    out: c("mouseout", "dojotouchout", v.out),
                    enter: e._eventHandler(c("mouseover", "dojotouchover", v.over)),
                    leave: e._eventHandler(c("mouseout", "dojotouchout", v.out))
                };
                return m.touch = h;
            });
        },
        "mojo/signup-forms/SignupFormFrame": function() {
            dojoDefine("dojo/_base/declare dijit/_WidgetBase ./SignupForm dojo/query dojo/_base/lang dojo/window dojo/on dojo/dom dojo/dom-geometry dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/dom-class dojo/promise/all dojo/Deferred dojo/html dojo/sniff mojo/widgets/_CustomStyleRulesMixin".split(" "), function(m, h, g, l, d, b, k, e, a, f, c, C, n, r, x, v, w, y) {
                var t = {
                    arial: "Arial, 'Helvetica Neue', Helvetica, sans-serif",
                    comic_sans: "'Comic Sans MS', 'Marker Felt-Thin', Arial, sans-serif",
                    courier_new: "'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace",
                    georgia: "Georgia, Times, 'Times New Roman', serif",
                    helvetica: "'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif",
                    lucida: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
                    tahoma: "Tahoma, Verdana, Segoe, sans-serif",
                    times_new_roman: "'Times New Roman', Times, Baskerville, Georgia, serif",
                    trebuchet_ms: "'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif",
                    verdana: "Verdana, Geneva, sans-serif"
                };
                return m([h, y], {
                    version: "1.0",
                    template: 1,
                    iframe: null,
                    frameDoc: null,
                    maxWidth: 768,
                    mobileView: !1,
                    config: {},
                    subscribeUrl: "#",
                    honeypotFieldName: "",
                    layoutCssNode: null,
                    customCssNode: null,
                    imageUrl: null,
                    imageEdgeToEdge: null,
                    env: "prod",
                    appDomain: "",
                    constructor: function(a) {
                        if (!a.iframe || !a.iframe.tagName || "iframe" != a.iframe.tagName.toLowerCase()) throw Error("You must specify an iframe attribute to an iframe element");
                    },
                    postMixInProperties: function() {
                        this.config.template && (this.template = this.config.template);
                        this.config.version && (this.version = this.config.version);
                        this.config.imageUrl && (this.imageUrl = this.config.imageUrl);
                        this.config.hasOwnProperty("imageEdgeToEdge") && (this.imageEdgeToEdge = this.config.imageEdgeToEdge);
                        this.config.styles && (this.styles = this.config.styles);
                        this.styles.hasOwnProperty("modal") && this.styles.modal.hasOwnProperty("max_width") && (this.maxWidth = this.styles.modal.max_width - 20);
                        this.frameDoc = this.iframe.contentWindow.document;
                    },
                    postCreate: function() {
                        this.signupForm = new g({
                            config: this.config,
                            subscribeUrl: this.subscribeUrl,
                            honeypotFieldName: this.honeypotFieldName
                        });
                        this.frameDoc.write('\x3c!DOCTYPE html\x3e\x3chtml\x3e\x3chead\x3e\x3cmeta name\x3d"viewport" content\x3d"width\x3ddevice-width, initial-scale\x3d1, maximum-scale\x3d1, user-scalable\x3dno"/\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e');
                        this.frameDoc.close();
                        this.signupForm.placeAt(this.frameDoc.body);
                        this.signupForm.startup();
                        r([this.loadCommonCss(), this.loadLayoutCss(), this.loadCustomCss()]).then(d.hitch(this, "updateDocHeight"));
                        k(window, "resize", d.hitch(this, function() {
                            this.updateDocHeight();
                            this._addMobileClass(this._isMobileView());
                        }));
                        this.signupForm.on("resizeFrame", d.hitch(this, function() {
                            this.updateDocHeight();
                        }));
                        "fixed" === this.config.modalVariation && (this._overrideDescriptionForFixedLayout(), this._showPlaceholderTextForEmail());
                    },
                    _overrideDescriptionForFixedLayout: function() {
                        var a = this._cleanText(this.config.description);
                        this.signupForm.isStrictContent() && (a = "\x3cp\x3e" + a + "\x3c/p\x3e");
                        v.set(this.signupForm.descriptionContainer, a);
                    },
                    startup: function() {
                        this.inherited(arguments);
                        this.mobileView = this._isMobileView();
                        this._addMobileClass(this.mobileView);
                    },
                    _cleanText: function(a) {
                        a = a.replace(/<\/?[^>]+(>|$)/gi, "");
                        a = a.replace(/&nbsp;/gi, " ");
                        return 50 < a.length ? a.substring(0, 50) + "..." : a;
                    },
                    _addMobileClass: function(a) {
                        var b = this.frameDoc.getElementsByClassName("modalContent")[0];
                        a ? n.add(b, "modalContent--mobile") : n.remove(b, "modalContent--mobile");
                    },
                    _showPlaceholderTextForEmail: function() {
                        this.mobileView = this._isMobileView();
                        var a = this.signupForm.getEmailField();
                        a && a.toggleEmailPlaceholder(!this.mobileView);
                    },
                    docHeight: function() {
                        return a.getContentBox(this.signupForm.domNode).h;
                    },
                    updateDocHeight: function() {
                        try {
                            c.set(this.iframe, "height", this.docHeight() + "px"), c.set(l(".mc-layout__modalContent")[0], "max-height", this.docHeight() + "px"), "fixed" === this.config.modalVariation && c.set(l(".mc-layout__modalContent")[0], "max-height", this.docHeight() + 1 + "px");
                        } catch (a) {}
                    },
                    _isMobileView: function() {
                        return b.getBox().w <= this.maxWidth ? !0 : !1;
                    },
                    loadCommonCss: function() {
                        var a = new x(),
                            b = this.frameDoc.createElement("link");
                        b.rel = "stylesheet";
                        b.type = "text/css";
                        b.href = "dev" === this.env ? "//" + this.appDomain + "/css/signup-forms/popup/common.css" : "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/common.css";
                        b.media = "all";
                        k(b, "load", function() {
                            a.resolve();
                        });
                        this.frameDoc.getElementsByTagName("head")[0].appendChild(b);
                        return a.promise;
                    },
                    loadLayoutCss: function() {
                        this.layoutCssNode && f.destroy(this.layoutCssNode);
                        var a = new x();
                        this.layoutCssNode = this.frameDoc.createElement("link");
                        this.layoutCssNode.rel = "stylesheet";
                        this.layoutCssNode.type = "text/css";
                        "dev" === this.env ? (this.layoutCssNode.href = "//" + this.appDomain + "/css/signup-forms/popup/layout-" + this.template + ".css", "fixed" === this.config.modalVariation && (this.layoutCssNode.href = "//" + this.appDomain + "/css/signup-forms/popup/layout-fixed.css", this.template = 1)) : (this.layoutCssNode.href = "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/layout-" + this.template + ".css", "fixed" === this.config.modalVariation && (this.layoutCssNode.href = "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/layout-fixed.css", this.template = 1));
                        this.layoutCssNode.media = "all";
                        k(this.layoutCssNode, "load", function() {
                            a.resolve();
                        });
                        this.frameDoc.getElementsByTagName("head")[0].appendChild(this.layoutCssNode);
                        return a.promise;
                    },
                    _getFontFamilyByKey: function(a) {
                        return t[a] ? t[a] : t.helvetica;
                    },
                    loadCustomCss: function() {
                        this.customCssNode && f.destroy(this.customCssNode);
                        var a = new x();
                        this.customCssNode = this.createStyleNode(this.frameDoc);
                        var b = this.getStyleSheet(this.customCssNode);
                        if (this.styles)
                            for (var c in this.styles)
                                if (this.styles.hasOwnProperty(c)) switch (c) {
                                    case "button":
                                        for (var d in this.styles[c]) switch (d) {
                                            case "color":
                                                this.addCSSRule(b, ".button", "background-color:" + this.styles[c][d] + ";");
                                                break;
                                            case "hover_color":
                                                this.addCSSRule(b, ".button:hover", "background-color:" + this.styles[c][d] + ";");
                                                break;
                                            case "text_color":
                                                this.addCSSRule(b, ".button", "color:" + this.styles[c][d] + ";");
                                                break;
                                            case "alignment":
                                                "right" == this.styles[c][d] ? this.addCSSRule(b, ".button", "float:right;") : "center" == this.styles[c][d] ? (this.addCSSRule(b, ".button", "float:none;margin-left:auto;margin-right:auto;"), 9 >= w("ie") ? (this.addCSSRule(b, ".button", "display:table-cell;"), this.addCSSRule(b, ".content__button", "margin-left:auto;margin-right:auto;display:table;")) : this.addCSSRule(b, ".button", "display:table;")) : this.addCSSRule(b, ".button", "float:left;");
                                                break;
                                            case "style":
                                                "full" == this.styles[c][d] && this.addCSSRule(b, ".button", "width:100%;");
                                        }
                                        break;
                                    case "labels":
                                        if (!this.signupForm.isStrictContent())
                                            for (d in this.styles[c]) switch (d) {
                                                case "color":
                                                    this.addCSSRule(b, "label", "color:" + this.styles[c][d] + ";");
                                                    break;
                                                case "font":
                                                    this.addCSSRule(b, "label", "font-family:" + this.styles[c][d] + ";");
                                            }
                                        break;
                                    case "headingColor":
                                        this.addCSSRule(b, ".strictContent h1, .strictContent h2, .strictContent h3, .strictContent h4", "color:" + this.styles[c] + ";");
                                        break;
                                    case "paragraphColor":
                                        this.addCSSRule(b, ".strictContent p, .strictContent .helpText, label", "color:" + this.styles[c] + ";");
                                        break;
                                    case "headingFont":
                                        this.addCSSRule(b, ".strictContent h1, .strictContent h2, .strictContent h3, .strictContent h4", "font-family:" + this._getFontFamilyByKey(this.styles[c]) + ";");
                                        break;
                                    case "paragraphFont":
                                        this.addCSSRule(b, ".strictContent p, .strictContent .helpText, label", "font-family:" + this._getFontFamilyByKey(this.styles[c]) + ";");
                                }
                        this.imageUrl && 1 != this.template && this.addCSSRule(b, ".modalContent__image", "background-image:url(" + this.imageUrl + ");");
                        this.imageEdgeToEdge && this.addCSSRule(b, ".modalContent__image", "background-size:cover;");
                        a.resolve();
                        return a.promise;
                    }
                });
            });
        },
        "mojo/signup-forms/SignupForm": function() {
            dojoDefine("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_FocusMixin dojo/_base/array dojo/query dojo/io-query dojo/on dojo/_base/lang dojo/request/script dojo/dom-form dojo/dom-geometry dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/dom-class dojo/html dojo/Evented mojo/widgets/badges/TextBadge dojo/text!./templates/form.html dojo/text!./templates/gdprBlock.html dojo/text!./inputs/templates/Text.html dojo/text!./inputs/templates/Popup/Address.html dojo/text!./inputs/templates/Email.html dojo/text!./inputs/templates/Birthday.html dojo/text!./inputs/templates/Date.html dojo/text!./inputs/templates/Phone.html dojo/text!./inputs/templates/Number.html dojo/text!./inputs/templates/Url.html dojo/text!./inputs/templates/Popup/RadioCheckbox.html dojo/text!./inputs/templates/GdprCheckbox.html dojo/text!./inputs/templates/Select.html".split(" "), function(m, h, g, l, d, b, k, e, a, f, c, C, n, r, x, v, w, y, t, q, u, z, p, L, K, M, G, H, O, P, T, U) {
                var F = m([], {
                    isEmpty: function() {
                        var b;
                        d.forEach(this.inputs, a.hitch(this, function(a) {
                            b = "radio" == a.type || "checkbox" == a.type || "option" == a.tagName.toLowerCase() ? "boolean" === typeof b ? b && !this._checked(a) : !this._checked(a) : "boolean" === typeof b ? b && this._empty(a.value) : this._empty(a.value);
                        }));
                        return b;
                    },
                    isChecked: function() {
                        d.some(this.inputs, a.hitch(this, function(a) {
                            if (this._checked(a)) return !0;
                        }));
                        return !1;
                    },
                    isEmail: function() {
                        return this._email(this.inputs[0].value);
                    },
                    isPhone: function() {
                        return this._phone(this.phoneAreaNode.value, this.phoneDetail1Node.value, this.phoneDetail2Node.value);
                    },
                    isUrl: function() {
                        return this._url(this.inputs[0].value);
                    },
                    isNumber: function() {
                        return this._number(this.inputs[0].value);
                    },
                    isBirthday: function() {
                        return this._monthDigits(this.monthNode.value) && this._dayDigits(this.dayNode.value);
                    },
                    isDate: function() {
                        return this._yearDigits(this.yearNode.value) && this._monthDigits(this.monthNode.value) && this._dayDigits(this.dayNode.value);
                    },
                    isAddress: function() {
                        return !this._empty(this.address1Node.value) && !this._empty(this.cityNode.value) && !this._empty(this.stateNode.value) && this._checked(b(":checked", this.countrySelectNode)[0]) && !this._empty(this.zipNode.value);
                    },
                    _required: function(a) {
                        return 0 < a.trim().length;
                    },
                    _empty: function(a) {
                        return null === a || "undefined" === typeof a || "" === a;
                    },
                    _email: function(a) {
                        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
                    },
                    _yearDigits: function(a) {
                        return this._digits(a) && this._range(a, [1, 9999]);
                    },
                    _monthDigits: function(a) {
                        return this._digits(a) && this._range(a, [1, 12]);
                    },
                    _dayDigits: function(a) {
                        return this._digits(a) && this._range(a, [1, 31]);
                    },
                    _digits: function(a) {
                        return /^\d+$/.test(a);
                    },
                    _range: function(a, b) {
                        return a >= b[0] && a <= b[1];
                    },
                    _number: function(a) {
                        return this._digits(a) && !isNaN(a);
                    },
                    _minlength: function(a, b) {
                        return a.trim().length >= b;
                    },
                    _maxlength: function(a, b) {
                        return a.trim().length <= b;
                    },
                    _exactLength: function(a, b) {
                        return a.trim().length == b;
                    },
                    _zipcode: function(a) {
                        return /^\d{5}-\d{4}$|^\d{5}$/.test(a);
                    },
                    _url: function(a) {
                        return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
                    },
                    _phone: function(a, b, c) {
                        return this._digits(a) && this._digits(b) && this._digits(c) && this._exactLength(a, 3) && this._exactLength(b, 3) && this._exactLength(c, 4);
                    },
                    _checked: function(a) {
                        return a.checked || a.selected && !this._empty(a.value);
                    },
                    _checkable: function(a) {
                        return /radio|checkbox/i.test(a.type);
                    }
                });
                l = m([l, F], {
                    _onBlur: function() {
                        this.inherited(arguments);
                        this.validateField();
                    },
                    validateField: function() {
                        var a = [],
                            b, c;
                        this.required && ((b = !this.isEmpty()) || a.push("This field is required."));
                        switch (this.validateAsType) {
                            case "email":
                                b = this.isEmpty() || this.isEmail();
                                c = "Please enter a valid email address.";
                                break;
                            case "address":
                                b = this.isEmpty() || this.isAddress();
                                c = "Please enter a valid address.";
                                break;
                            case "phone":
                                b = this.isEmpty() || this.isPhone();
                                c = "Please enter a valid phone number.";
                                break;
                            case "url":
                                b = this.isEmpty() || this.isUrl();
                                c = "Please enter a valid url.";
                                break;
                            case "number":
                                b = this.isEmpty() || this.isNumber();
                                c = "Please enter a valid number.";
                                break;
                            case "birthday":
                                b = this.isEmpty() || this.isBirthday();
                                c = "Please enter a valid birthday.";
                                break;
                            case "date":
                                b = this.isEmpty() || this.isDate();
                                c = "Please enter a valid date.";
                                break;
                            case "radiocheckbox":
                            case "select":
                                this.isEmpty() || this.isChecked();
                            default:
                                b = !0;
                        }
                        b || a.push(c);
                        this.setFieldValidationStatus(a);
                        return a;
                    },
                    setFieldValidationStatus: function(a) {
                        0 < a.length ? this.setFieldAsInvalid(a[0]) : this.setFieldAsValid();
                    },
                    setFieldAsInvalid: function(a) {
                        this.inputs.addClass("invalid").removeClass("valid");
                        w.set(this.errorsNode, a);
                        r.set(this.errorsNode, "display", "block");
                        this.placeholderNode && r.set(this.placeholderNode, "display", "none");
                    },
                    setFieldAsValid: function() {
                        this.inputs.addClass("valid").removeClass("invalid");
                        r.set(this.errorsNode, "display", "none");
                        this.placeholderNode && r.set(this.placeholderNode, "display", "block");
                    },
                    resetField: function() {
                        this.inputs.removeClass("valid").removeClass("invalid");
                        r.set(this.errorsNode, "display", "none");
                        this.placeholderNode && r.set(this.placeholderNode, "display", "block");
                    },
                    _getErrorsNode: function() {
                        var a = b(".invalid-error", this.domNode)[0];
                        a || (a = n.place('\x3cdiv class\x3d"invalid-error"\x3e\x3c/div\x3e', this.domNode));
                        return a;
                    }
                });
                l = m([h, g, l], {
                    required: !1,
                    inputs: [],
                    errorsNode: null,
                    placeholderNode: null,
                    postCreate: function() {
                        this.inputs = b("input:not([type\x3d'hidden']), select option", this.domNode);
                        this.setupPlaceHelperText();
                        this.errorsNode = this._getErrorsNode();
                    },
                    setupPlaceHelperText: function() {
                        if (this.helper_text) {
                            var a = this.placeholderNode ? this.placeholderNode : this._createPlaceholderNode();
                            a.innerText = this.helper_text;
                            this.placeholderNode = a;
                        } else this.placeholderNode && n.destroy(this.placeholderNode);
                    },
                    _createPlaceholderNode: function() {
                        return n.place('\x3cdiv class\x3d"helpText"\x3e\x3c/div\x3e', this.domNode);
                    }
                });
                var A = m([l], {
                        templateString: z,
                        validateAsType: "text"
                    }),
                    B = m([l], {
                        templateString: H,
                        validateAsType: "number"
                    }),
                    D = m([l], {
                        templateString: p,
                        validateAsType: "address",
                        postCreate: function() {
                            d.forEach([{
                                id: "286",
                                name: "Aaland Islands"
                            }, {
                                id: "274",
                                name: "Afghanistan"
                            }, {
                                id: "2",
                                name: "Albania"
                            }, {
                                id: "3",
                                name: "Algeria"
                            }, {
                                id: "178",
                                name: "American Samoa"
                            }, {
                                id: "4",
                                name: "Andorra"
                            }, {
                                id: "5",
                                name: "Angola"
                            }, {
                                id: "176",
                                name: "Anguilla"
                            }, {
                                id: "175",
                                name: "Antigua And Barbuda"
                            }, {
                                id: "6",
                                name: "Argentina"
                            }, {
                                id: "7",
                                name: "Armenia"
                            }, {
                                id: "179",
                                name: "Aruba"
                            }, {
                                id: "8",
                                name: "Australia"
                            }, {
                                id: "9",
                                name: "Austria"
                            }, {
                                id: "10",
                                name: "Azerbaijan"
                            }, {
                                id: "11",
                                name: "Bahamas"
                            }, {
                                id: "12",
                                name: "Bahrain"
                            }, {
                                id: "13",
                                name: "Bangladesh"
                            }, {
                                id: "14",
                                name: "Barbados"
                            }, {
                                id: "15",
                                name: "Belarus"
                            }, {
                                id: "16",
                                name: "Belgium"
                            }, {
                                id: "17",
                                name: "Belize"
                            }, {
                                id: "18",
                                name: "Benin"
                            }, {
                                id: "19",
                                name: "Bermuda"
                            }, {
                                id: "20",
                                name: "Bhutan"
                            }, {
                                id: "21",
                                name: "Bolivia"
                            }, {
                                id: "22",
                                name: "Bosnia and Herzegovina"
                            }, {
                                id: "23",
                                name: "Botswana"
                            }, {
                                id: "181",
                                name: "Bouvet Island"
                            }, {
                                id: "24",
                                name: "Brazil"
                            }, {
                                id: "180",
                                name: "Brunei Darussalam"
                            }, {
                                id: "25",
                                name: "Bulgaria"
                            }, {
                                id: "26",
                                name: "Burkina Faso"
                            }, {
                                id: "27",
                                name: "Burundi"
                            }, {
                                id: "28",
                                name: "Cambodia"
                            }, {
                                id: "29",
                                name: "Cameroon"
                            }, {
                                id: "30",
                                name: "Canada"
                            }, {
                                id: "31",
                                name: "Cape Verde"
                            }, {
                                id: "32",
                                name: "Cayman Islands"
                            }, {
                                id: "33",
                                name: "Central African Republic"
                            }, {
                                id: "34",
                                name: "Chad"
                            }, {
                                id: "35",
                                name: "Chile"
                            }, {
                                id: "36",
                                name: "China"
                            }, {
                                id: "185",
                                name: "Christmas Island"
                            }, {
                                id: "37",
                                name: "Colombia"
                            }, {
                                id: "204",
                                name: "Comoros"
                            }, {
                                id: "38",
                                name: "Congo"
                            }, {
                                id: "183",
                                name: "Cook Islands"
                            }, {
                                id: "268",
                                name: "Costa Rica"
                            }, {
                                id: "275",
                                name: "Cote D'Ivoire"
                            }, {
                                id: "40",
                                name: "Croatia"
                            }, {
                                id: "276",
                                name: "Cuba"
                            }, {
                                id: "298",
                                name: "Curacao"
                            }, {
                                id: "41",
                                name: "Cyprus"
                            }, {
                                id: "42",
                                name: "Czech Republic"
                            }, {
                                id: "43",
                                name: "Denmark"
                            }, {
                                id: "44",
                                name: "Djibouti"
                            }, {
                                id: "289",
                                name: "Dominica"
                            }, {
                                id: "187",
                                name: "Dominican Republic"
                            }, {
                                id: "233",
                                name: "East Timor"
                            }, {
                                id: "45",
                                name: "Ecuador"
                            }, {
                                id: "46",
                                name: "Egypt"
                            }, {
                                id: "47",
                                name: "El Salvador"
                            }, {
                                id: "48",
                                name: "Equatorial Guinea"
                            }, {
                                id: "49",
                                name: "Eritrea"
                            }, {
                                id: "50",
                                name: "Estonia"
                            }, {
                                id: "51",
                                name: "Ethiopia"
                            }, {
                                id: "189",
                                name: "Falkland Islands"
                            }, {
                                id: "191",
                                name: "Faroe Islands"
                            }, {
                                id: "52",
                                name: "Fiji"
                            }, {
                                id: "53",
                                name: "Finland"
                            }, {
                                id: "54",
                                name: "France"
                            }, {
                                id: "193",
                                name: "French Guiana"
                            }, {
                                id: "277",
                                name: "French Polynesia"
                            }, {
                                id: "56",
                                name: "Gabon"
                            }, {
                                id: "57",
                                name: "Gambia"
                            }, {
                                id: "58",
                                name: "Georgia"
                            }, {
                                id: "59",
                                name: "Germany"
                            }, {
                                id: "60",
                                name: "Ghana"
                            }, {
                                id: "194",
                                name: "Gibraltar"
                            }, {
                                id: "61",
                                name: "Greece"
                            }, {
                                id: "195",
                                name: "Greenland"
                            }, {
                                id: "192",
                                name: "Grenada"
                            }, {
                                id: "196",
                                name: "Guadeloupe"
                            }, {
                                id: "62",
                                name: "Guam"
                            }, {
                                id: "198",
                                name: "Guatemala"
                            }, {
                                id: "270",
                                name: "Guernsey"
                            }, {
                                id: "63",
                                name: "Guinea"
                            }, {
                                id: "65",
                                name: "Guyana"
                            }, {
                                id: "200",
                                name: "Haiti"
                            }, {
                                id: "66",
                                name: "Honduras"
                            }, {
                                id: "67",
                                name: "Hong Kong"
                            }, {
                                id: "68",
                                name: "Hungary"
                            }, {
                                id: "69",
                                name: "Iceland"
                            }, {
                                id: "70",
                                name: "India"
                            }, {
                                id: "71",
                                name: "Indonesia"
                            }, {
                                id: "278",
                                name: "Iran"
                            }, {
                                id: "279",
                                name: "Iraq"
                            }, {
                                id: "74",
                                name: "Ireland"
                            }, {
                                id: "75",
                                name: "Israel"
                            }, {
                                id: "76",
                                name: "Italy"
                            }, {
                                id: "202",
                                name: "Jamaica"
                            }, {
                                id: "78",
                                name: "Japan"
                            }, {
                                id: "288",
                                name: "Jersey  (Channel Islands)"
                            }, {
                                id: "79",
                                name: "Jordan"
                            }, {
                                id: "80",
                                name: "Kazakhstan"
                            }, {
                                id: "81",
                                name: "Kenya"
                            }, {
                                id: "203",
                                name: "Kiribati"
                            }, {
                                id: "82",
                                name: "Kuwait"
                            }, {
                                id: "83",
                                name: "Kyrgyzstan"
                            }, {
                                id: "84",
                                name: "Lao People's Democratic Republic"
                            }, {
                                id: "85",
                                name: "Latvia"
                            }, {
                                id: "86",
                                name: "Lebanon"
                            }, {
                                id: "87",
                                name: "Lesotho"
                            }, {
                                id: "88",
                                name: "Liberia"
                            }, {
                                id: "281",
                                name: "Libya"
                            }, {
                                id: "90",
                                name: "Liechtenstein"
                            }, {
                                id: "91",
                                name: "Lithuania"
                            }, {
                                id: "92",
                                name: "Luxembourg"
                            }, {
                                id: "208",
                                name: "Macau"
                            }, {
                                id: "93",
                                name: "Macedonia"
                            }, {
                                id: "94",
                                name: "Madagascar"
                            }, {
                                id: "95",
                                name: "Malawi"
                            }, {
                                id: "96",
                                name: "Malaysia"
                            }, {
                                id: "97",
                                name: "Maldives"
                            }, {
                                id: "98",
                                name: "Mali"
                            }, {
                                id: "99",
                                name: "Malta"
                            }, {
                                id: "207",
                                name: "Marshall Islands"
                            }, {
                                id: "210",
                                name: "Martinique"
                            }, {
                                id: "100",
                                name: "Mauritania"
                            }, {
                                id: "212",
                                name: "Mauritius"
                            }, {
                                id: "241",
                                name: "Mayotte"
                            }, {
                                id: "101",
                                name: "Mexico"
                            }, {
                                id: "102",
                                name: "Moldova, Republic of"
                            }, {
                                id: "103",
                                name: "Monaco"
                            }, {
                                id: "104",
                                name: "Mongolia"
                            }, {
                                id: "290",
                                name: "Montenegro"
                            }, {
                                id: "294",
                                name: "Montserrat"
                            }, {
                                id: "105",
                                name: "Morocco"
                            }, {
                                id: "106",
                                name: "Mozambique"
                            }, {
                                id: "242",
                                name: "Myanmar"
                            }, {
                                id: "107",
                                name: "Namibia"
                            }, {
                                id: "108",
                                name: "Nepal"
                            }, {
                                id: "109",
                                name: "Netherlands"
                            }, {
                                id: "110",
                                name: "Netherlands Antilles"
                            }, {
                                id: "213",
                                name: "New Caledonia"
                            }, {
                                id: "111",
                                name: "New Zealand"
                            }, {
                                id: "112",
                                name: "Nicaragua"
                            }, {
                                id: "113",
                                name: "Niger"
                            }, {
                                id: "114",
                                name: "Nigeria"
                            }, {
                                id: "217",
                                name: "Niue"
                            }, {
                                id: "214",
                                name: "Norfolk Island"
                            }, {
                                id: "272",
                                name: "North Korea"
                            }, {
                                id: "116",
                                name: "Norway"
                            }, {
                                id: "117",
                                name: "Oman"
                            }, {
                                id: "118",
                                name: "Pakistan"
                            }, {
                                id: "222",
                                name: "Palau"
                            }, {
                                id: "282",
                                name: "Palestine"
                            }, {
                                id: "119",
                                name: "Panama"
                            }, {
                                id: "219",
                                name: "Papua New Guinea"
                            }, {
                                id: "120",
                                name: "Paraguay"
                            }, {
                                id: "121",
                                name: "Peru"
                            }, {
                                id: "122",
                                name: "Philippines"
                            }, {
                                id: "221",
                                name: "Pitcairn"
                            }, {
                                id: "123",
                                name: "Poland"
                            }, {
                                id: "124",
                                name: "Portugal"
                            }, {
                                id: "126",
                                name: "Qatar"
                            }, {
                                id: "315",
                                name: "Republic of Kosovo"
                            }, {
                                id: "127",
                                name: "Reunion"
                            }, {
                                id: "128",
                                name: "Romania"
                            }, {
                                id: "129",
                                name: "Russia"
                            }, {
                                id: "130",
                                name: "Rwanda"
                            }, {
                                id: "205",
                                name: "Saint Kitts and Nevis"
                            }, {
                                id: "206",
                                name: "Saint Lucia"
                            }, {
                                id: "237",
                                name: "Saint Vincent and the Grenadines"
                            }, {
                                id: "132",
                                name: "Samoa (Independent)"
                            }, {
                                id: "227",
                                name: "San Marino"
                            }, {
                                id: "133",
                                name: "Saudi Arabia"
                            }, {
                                id: "134",
                                name: "Senegal"
                            }, {
                                id: "266",
                                name: "Serbia"
                            }, {
                                id: "135",
                                name: "Seychelles"
                            }, {
                                id: "136",
                                name: "Sierra Leone"
                            }, {
                                id: "137",
                                name: "Singapore"
                            }, {
                                id: "302",
                                name: "Sint Maarten"
                            }, {
                                id: "138",
                                name: "Slovakia"
                            }, {
                                id: "139",
                                name: "Slovenia"
                            }, {
                                id: "223",
                                name: "Solomon Islands"
                            }, {
                                id: "140",
                                name: "Somalia"
                            }, {
                                id: "141",
                                name: "South Africa"
                            }, {
                                id: "257",
                                name: "South Georgia and the South Sandwich Islands"
                            }, {
                                id: "142",
                                name: "South Korea"
                            }, {
                                id: "311",
                                name: "South Sudan"
                            }, {
                                id: "143",
                                name: "Spain"
                            }, {
                                id: "144",
                                name: "Sri Lanka"
                            }, {
                                id: "293",
                                name: "Sudan"
                            }, {
                                id: "146",
                                name: "Suriname"
                            }, {
                                id: "225",
                                name: "Svalbard and Jan Mayen Islands"
                            }, {
                                id: "147",
                                name: "Swaziland"
                            }, {
                                id: "148",
                                name: "Sweden"
                            }, {
                                id: "149",
                                name: "Switzerland"
                            }, {
                                id: "285",
                                name: "Syria"
                            }, {
                                id: "152",
                                name: "Taiwan"
                            }, {
                                id: "260",
                                name: "Tajikistan"
                            }, {
                                id: "153",
                                name: "Tanzania"
                            }, {
                                id: "154",
                                name: "Thailand"
                            }, {
                                id: "155",
                                name: "Togo"
                            }, {
                                id: "232",
                                name: "Tonga"
                            }, {
                                id: "234",
                                name: "Trinidad and Tobago"
                            }, {
                                id: "156",
                                name: "Tunisia"
                            }, {
                                id: "157",
                                name: "Turkey"
                            }, {
                                id: "287",
                                name: "Turks \x26amp; Caicos Islands"
                            }, {
                                id: "159",
                                name: "Uganda"
                            }, {
                                id: "161",
                                name: "Ukraine"
                            }, {
                                id: "162",
                                name: "United Arab Emirates"
                            }, {
                                id: "262",
                                name: "United Kingdom"
                            }, {
                                id: "163",
                                name: "Uruguay"
                            }, {
                                id: "165",
                                name: "Uzbekistan"
                            }, {
                                id: "239",
                                name: "Vanuatu"
                            }, {
                                id: "166",
                                name: "Vatican City State (Holy See)"
                            }, {
                                id: "167",
                                name: "Venezuela"
                            }, {
                                id: "168",
                                name: "Vietnam"
                            }, {
                                id: "169",
                                name: "Virgin Islands (British)"
                            }, {
                                id: "238",
                                name: "Virgin Islands (U.S.)"
                            }, {
                                id: "188",
                                name: "Western Sahara"
                            }, {
                                id: "170",
                                name: "Yemen"
                            }, {
                                id: "173",
                                name: "Zambia"
                            }, {
                                id: "174",
                                name: "Zimbabwe"
                            }], a.hitch(this, function(a) {
                                n.place('\x3coption value\x3d"' + a.id + '"\x3e' + a.name + "\x3c/option\x3e", this.countrySelectNode, "last");
                            }));
                            this.inherited(arguments);
                        }
                    }),
                    W = m([l], {
                        templateString: L,
                        validateAsType: "email",
                        toggleEmailPlaceholder: function(a) {
                            a ? x.set(this.emailInput, "placeholder", "Enter your email") : x.remove(this.emailInput, "placeholder");
                        }
                    }),
                    N = m([l], {
                        templateString: K,
                        validateAsType: "birthday",
                        validateAsGroup: !0,
                        postCreate: function() {
                            this.inherited(arguments);
                            "DD/MM" == this.dateformat && (n.place(this.dayNode, this.inputsContainer, "first"), n.place(this.monthNode, this.inputsContainer, "last"));
                        }
                    }),
                    E = m([l], {
                        templateString: M,
                        validateAsType: "date",
                        validateAsGroup: !0,
                        postCreate: function() {
                            this.inherited(arguments);
                            "MM/DD/YYYY" == this.dateformat ? (n.place(this.monthNode, this.inputsContainer, "first"), n.place(this.yearNode, this.inputsContainer, "last")) : "DD/MM/YYYY" === this.dateformat && (n.place(this.dayNode, this.inputsContainer, "first"), n.place(this.yearNode, this.inputsContainer, "last"));
                        }
                    }),
                    I = m([l], {
                        templateString: G,
                        validateAsType: "phone",
                        validateAsGroup: !0
                    }),
                    J = m([l], {
                        templateString: O,
                        validateAsType: "url"
                    }),
                    Q = m([l], {
                        templateString: P,
                        validateAsType: "radiocheckbox",
                        postCreate: function() {
                            d.forEach(this.choices, a.hitch(this, function(a, b) {
                                var c = this.merge_id ? this.name + "-" + b : this.name + "-" + this.group_id + "-" + b,
                                    c = "mc-" + c,
                                    f = '\x3cli\x3e\x3cinput id \x3d"' + c + '" type\x3d"' + this.type + '" value\x3d"' + a.value + '" name\x3d"' + this.name;
                                "checkbox" == this.type && (f += "[" + a.value + "]");
                                f += '" /\x3e\x3clabel for\x3d"' + c + '"\x3e' + a.label + "\x3c/label\x3e\x3c/li\x3e";
                                n.place(f, this.choicesContainer, "last");
                            }));
                            this.inherited(arguments);
                        }
                    }),
                    R = m([l], {
                        templateString: T,
                        validateAsType: "radiocheckbox"
                    }),
                    S = m([h, g], {
                        templateString: u,
                        gdprLabel: "",
                        gdprDescription: "",
                        gdprLegal: "",
                        gdprMCLegal: "",
                        postCreate: function() {
                            this.inherited(arguments);
                            n.place(this.gdprMCLegal, this.gdprMcLegalContainer);
                        }
                    }),
                    V = m([l], {
                        templateString: U,
                        validateAsType: "select",
                        postCreate: function() {
                            var b = [];
                            d.forEach(this.choices, a.hitch(this, function(a) {
                                var c = n.toDom('\x3coption value\x3d"' + a.value + '"\x3e' + a.label + "\x3c/option\x3e");
                                this._empty(a.label) && b.push(c);
                                n.place(c, this.choicesContainer, "last");
                            }));
                            0 < b.length ? x.set(b[0], "selected", "selected") : n.place('\x3coption value\x3d"" selected\x3d"selected"\x3e\x3c/option\x3e', this.choicesContainer, "first");
                            this.inherited(arguments);
                        }
                    });
                return m("SignupForm", [h, g, y], {
                    templateString: q,
                    subscribeUrl: "#",
                    honeypotFieldName: "",
                    fields: [],
                    buttonLabel: "Subscribe",
                    description: "",
                    footer: "",
                    config: {},
                    constructor: function() {
                        this.formIsValid = !1;
                        this.fieldNodes = [];
                    },
                    postMixInProperties: function() {
                        this.fields = this.config.fields;
                        this.footer = this.config.footer;
                        this.description = this.config.description;
                        this.modalVariation = this.config.modalVariation;
                        this.template = this.config.template;
                        this.hasGdprEnabled = this.config.hasGdprEnabled;
                        this.gdprLabel = this.config.gdprLabel;
                        this.gdprDescription = this.config.gdprDescription;
                        this.gdprLegal = this.config.gdprLegal;
                        this.gdprMCLegal = n.toDom("\x3cspan\x3e" + this.config.gdprMCLegal + "\x3c/span\x3e");
                        this.config.buttonLabel && (this.buttonLabel = this.config.buttonLabel);
                    },
                    postCreate: function() {
                        this.hasGdprEnabled && (this.gdprContainer = new S({
                            gdprLabel: this.gdprLabel,
                            gdprDescription: this.gdprDescription,
                            gdprLegal: this.gdprLegal,
                            gdprMCLegal: this.gdprMCLegal
                        }), "modal" !== this.modalVariation || 1 !== this.template && 2 !== this.template || this.gdprContainer.placeAt(this.formFieldsContainer, "after"));
                        this.addFields();
                        this.addHoneypot();
                        this.applyStrictContentClasses();
                        w.set(this.footerContainer, this.footer);
                        w.set(this.descriptionContainer, this.description);
                        var a = this;
                        e(this.formNode, "submit", function(d) {
                            d.stopPropagation();
                            d.preventDefault();
                            a._validateForm();
                            a.formIsValid ? (a.config.captcha ? (d = a._getCaptchaForm(), window.open(d), r.set(b(".mc-closeModal", this.modalClose)[0], "display", "none"), r.set(b(".mc-modal", this.mcModal)[0], "display", "none"), r.set(b(".mc-modal-bg", this.modalOverlay)[0], "display", "none")) : f.get(a._getJsonPostUrl(), {
                                jsonp: "c",
                                query: c.toQuery(a.formNode)
                            }).then(function(b) {
                                "error" === b.result ? a._handleErrorResponse(b) : (a._handleSuccessResponse(b), b.webEngagementCookieValue && a.setCookie("mcListMember", b.webEngagementCookieValue, 7889238E3));
                                a.emit("resizeFrame", {});
                            }), a.setCookieOnSubscribe()) : a.emit("resizeFrame", {});
                        });
                        this.updateBadge();
                    },
                    applyStrictContentClasses: function() {
                        if (this.isStrictContent()) {
                            var a = this.getStrictContentContainerClasses();
                            v.add(this.formContentContainer, a);
                        }
                    },
                    isStrictContent: function() {
                        return Boolean(this.config.styles && this.config.styles.baseFontSize);
                    },
                    getStrictContentContainerClasses: function() {
                        return this.isStrictContent() ? "strictContent " + this.config.styles.baseFontSize : "";
                    },
                    setCookie: function(a, b, c) {
                        c = c || 7889238E3;
                        c = new Date(new Date().getTime() + c);
                        document.cookie = a + "\x3d" + b + ";expires\x3d" + c.toUTCString() + ";path\x3d/";
                    },
                    setCookieOnSubscribe: function() {
                        var a = new Date(new Date().getTime() + 7889238E3);
                        document.cookie = "MCPopupSubscribed\x3dyes;expires\x3d" + a.toUTCString() + ";path\x3d/";
                    },
                    updateBadge: function() {
                        var a = "1.0" !== this.config.version && !!this.config.useRewards && !!this.config.rewardsUrl,
                            b = this.textBadge && this.textBadgefixed;
                        a && !b ? (this.textBadgefixed = new t({
                            rewardsUrl: this.config.rewardsUrl
                        }).placeAt(this.fixedBadge, "last"), this.textBadge = new t({
                            rewardsUrl: this.config.rewardsUrl
                        }).placeAt(this.formContentContainer, "after")) : !a && b && (this.textBadgefixed.destroyRecursive(!1), this.textBadge.destroyRecursive(!1), this.textBadge = this.textBadgefixed = null);
                    },
                    addFields: function() {
                        this.fieldNodes.length && (d.forEach(this.fieldNodes, function(a) {
                            a.destroy();
                        }), this.fieldNodes = [], n.empty(this.formFieldsContainer), this.hasGdprEnabled && n.empty(this.gdprContainer.gdprFieldsContainer));
                        d.forEach(this.fields, a.hitch(this, function(a) {
                            var b = this._createField(a);
                            this.hasGdprEnabled && a.marketing_preference_id ? b.placeAt(this.gdprContainer.gdprFieldsContainer) : b.placeAt(this.formFieldsContainer);
                            b.startup();
                        }));
                    },
                    getEmailField: function() {
                        var a = d.filter(this.fieldNodes, function(a) {
                            return "email" === a.type;
                        });
                        return a.length ? a[0] : null;
                    },
                    addHoneypot: function() {
                        var a = n.toDom('\x3cdiv style\x3d"position:absolute;left:-5000px;"\x3e\x3cinput type\x3d"text" name\x3d"' + this.honeypotFieldName + '" tabindex\x3d"-1" value\x3d""\x3e\x3c/div\x3e');
                        "fixed" === this.modalVariation && (a = n.toDom('\x3cdiv style\x3d"position:absolute;top:-5000px;width:0" aria-hidden\x3d"true"\x3e\x3cinput type\x3d"text" name\x3d"' + this.honeypotFieldName + '" tabindex\x3d"-1" value\x3d""\x3e\x3c/div\x3e'));
                        n.place(a, this.formFieldsContainer, "last");
                    },
                    _validateForm: function() {
                        var a = [];
                        d.forEach(this.fieldNodes, function(b) {
                            b = b.validateField();
                            0 < b.length && a.push(b);
                        });
                        this.formIsValid = !(0 < a.length);
                    },
                    _createField: function(a) {
                        switch (a.type) {
                            case "email":
                                a = new W(a);
                                break;
                            case "address":
                                a = new D(a);
                                break;
                            case "birthday":
                                a = new N(a);
                                break;
                            case "date":
                                a = new E(a);
                                break;
                            case "phone":
                                a = "US" == a.phoneformat ? new I(a) : new A(a);
                                break;
                            case "number":
                                a = new B(a);
                                break;
                            case "select":
                            case "dropdown":
                                a = new V(a);
                                break;
                            case "radio":
                            case "checkbox":
                                a = a.marketing_preference_id ? new R(a) : new Q(a);
                                break;
                            case "url":
                            case "image":
                                a = new J(a);
                                break;
                            default:
                                a = new A(a);
                        }
                        this.fieldNodes.push(a);
                        return a;
                    },
                    getOrCreateFormSuccessNode: function() {
                        var a = this.getFormSuccessNode();
                        a || (a = ("popup-signup-success " + this.getStrictContentContainerClasses()).trim(), a = n.place('\x3cdiv class\x3d"' + a + '"\x3e\x3c/div\x3e', this.formResponseMessages));
                        return a;
                    },
                    setFormSuccessMessage: function(a) {
                        var b = this.getOrCreateFormSuccessNode();
                        w.set(b, a);
                    },
                    getFormSuccessNode: function() {
                        return b(".popup-signup-success", this.formResponseMessages)[0];
                    },
                    _handleSuccessResponse: function(c) {
                        var f = this.getOrCreateFormSuccessNode(),
                            p = "",
                            e = c.type,
                            p = "custom" !== e ? "\x3cspan style\x3d'font-size: 24px;'\x3e\x3cspan style\x3d'font-family:arial,helvetica neue,helvetica,sans-serif;'\x3e" + c.msg + "\x3c/span\x3e\x3c/span\x3e" : c.msg;
                        this.setFormSuccessMessage(p);
                        (c = b(".flash-errors", this.formResponseMessages)[0]) && r.set(c, "display", "none");
                        this.formNode.reset();
                        d.forEach(this.fieldNodes, function(a) {
                            a.resetField();
                        });
                        r.set(this.formContentContainer, "display", "none");
                        r.set(this.formImageContainer, "display", "none");
                        if ("confirmation" !== e) {
                            var g = b(".mc-closeModal", this.modalClose)[0],
                                n = b(".mc-modal", this.mcModal)[0],
                                h = b(".mc-modal-bg", this.modalOverlay)[0];
                            setTimeout(a.hitch(this, function() {
                                r.set(f, "display", "none");
                                r.set(g, "display", "none");
                                r.set(n, "display", "none");
                                r.set(h, "display", "none");
                            }), 3E3);
                        }
                    },
                    _handleErrorResponse: function(a) {
                        var c = this.getFormSuccessNode();
                        c && r.set(c, "display", "none");
                        a.msg && ((c = b(".flash-errors", this.formResponseMessages)[0]) || (c = n.place('\x3cdiv class\x3d"flash-errors"\x3e\x3c/div\x3e', this.formResponseMessages)), w.set(c, a.msg), "absolute" === r.getComputedStyle(this.formImageContainer).position && r.set(this.formImageContainer, {
                            top: C.getMarginBox(c).h + "px"
                        }));
                        a.errors && (this.hasGdprEnabled && "gdpr_error" === a.type ? n.place("\x3cdiv class\x3d'invalid-error'\x3e" + a.errors.msg + "\x3c/div\x3e", this.gdprContainer.gdprFormResponseMessages, "only") : d.forEach(this.fieldNodes, function(b) {
                            a.errors.hasOwnProperty(b.merge_id) ? b.setFieldAsInvalid(a.errors[b.merge_id]) : b.setFieldAsValid();
                        }));
                    },
                    _getJsonPostUrl: function() {
                        var a = this.subscribeUrl;
                        return a = a.replace("/form-post?u\x3d", "/form-post-json?u\x3d");
                    },
                    _getCaptchaForm: function() {
                        var a = this.subscribeUrl.replace("/form-post?u\x3d", "/post?u\x3d"),
                            b = a.substring(a.indexOf("?") + 1, a.length),
                            a = a.split("?")[0],
                            b = k.queryToObject(b),
                            f = c.toObject(this.formNode),
                            b = Object.assign(b, f),
                            b = k.objectToQuery(b);
                        return a + "?" + b;
                    },
                    toHTML: function() {
                        return this.domNode.outerHTML;
                    }
                });
            });
        },
        "dijit/_FocusMixin": function() {
            dojoDefine(["./focus", "./_WidgetBase", "dojo/_base/declare", "dojo/_base/lang"], function(m, h, g, l) {
                l.extend(h, {
                    focused: !1,
                    onFocus: function() {},
                    onBlur: function() {},
                    _onFocus: function() {
                        this.onFocus();
                    },
                    _onBlur: function() {
                        this.onBlur();
                    }
                });
                return g("dijit._FocusMixin", null, {
                    _focusManager: m
                });
            });
        },
        "dijit/focus": function() {
            dojoDefine("dojo/aspect dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/Evented dojo/_base/lang dojo/on dojo/domReady dojo/sniff dojo/Stateful dojo/_base/window dojo/window ./a11y ./registry ./main".split(" "), function(m, h, g, l, d, b, k, e, a, f, c, C, n, r, x, v, w) {
                var y, t, q = new(h([C, k], {
                    curNode: null,
                    activeStack: [],
                    constructor: function() {
                        var a = e.hitch(this, function(a) {
                            g.isDescendant(this.curNode, a) && this.set("curNode", null);
                            g.isDescendant(this.prevNode, a) && this.set("prevNode", null);
                        });
                        m.before(b, "empty", a);
                        m.before(b, "destroy", a);
                    },
                    registerIframe: function(a) {
                        return this.registerWin(a.contentWindow, a);
                    },
                    registerWin: function(b, f) {
                        var d = this,
                            e = b.document && b.document.body;
                        if (e) {
                            var g = c("pointer-events") ? "pointerdown" : c("MSPointer") ? "MSPointerDown" : c("touch-events") ? "mousedown, touchstart" : "mousedown",
                                n = a(b.document, g, function(a) {
                                    a && a.target && null == a.target.parentNode || d._onTouchNode(f || a.target, "mouse");
                                }),
                                h = a(e, "focusin", function(a) {
                                    if (a.target.tagName) {
                                        var b = a.target.tagName.toLowerCase();
                                        "#document" != b && "body" != b && (x.isFocusable(a.target) ? d._onFocusNode(f || a.target) : d._onTouchNode(f || a.target));
                                    }
                                }),
                                l = a(e, "focusout", function(a) {
                                    d._onBlurNode(f || a.target);
                                });
                            return {
                                remove: function() {
                                    n.remove();
                                    h.remove();
                                    l.remove();
                                    e = n = h = l = null;
                                }
                            };
                        }
                    },
                    _onBlurNode: function(a) {
                        a = new Date().getTime();
                        a < y + 100 || (this._clearFocusTimer && clearTimeout(this._clearFocusTimer), this._clearFocusTimer = setTimeout(e.hitch(this, function() {
                            this.set("prevNode", this.curNode);
                            this.set("curNode", null);
                        }), 0), this._clearActiveWidgetsTimer && clearTimeout(this._clearActiveWidgetsTimer), a < t + 100 || (this._clearActiveWidgetsTimer = setTimeout(e.hitch(this, function() {
                            delete this._clearActiveWidgetsTimer;
                            this._setStack([]);
                        }), 0)));
                    },
                    _onTouchNode: function(a, b) {
                        t = new Date().getTime();
                        this._clearActiveWidgetsTimer && (clearTimeout(this._clearActiveWidgetsTimer), delete this._clearActiveWidgetsTimer);
                        d.contains(a, "dijitPopup") && (a = a.firstChild);
                        var c = [];
                        try {
                            for (; a;) {
                                var f = l.get(a, "dijitPopupParent");
                                if (f) a = v.byId(f).domNode;
                                else if (a.tagName && "body" == a.tagName.toLowerCase()) {
                                    if (a === n.body()) break;
                                    a = r.get(a.ownerDocument).frameElement;
                                } else {
                                    var e = a.getAttribute && a.getAttribute("widgetId"),
                                        g = e && v.byId(e);
                                    !g || "mouse" == b && g.get("disabled") || c.unshift(e);
                                    a = a.parentNode;
                                }
                            }
                        } catch (h) {}
                        this._setStack(c, b);
                    },
                    _onFocusNode: function(a) {
                        a && 9 != a.nodeType && (y = new Date().getTime(), this._clearFocusTimer && (clearTimeout(this._clearFocusTimer), delete this._clearFocusTimer), this._onTouchNode(a), a != this.curNode && (this.set("prevNode", this.curNode), this.set("curNode", a)));
                    },
                    _setStack: function(a, b) {
                        var c = this.activeStack,
                            f = c.length - 1,
                            d = a.length - 1;
                        if (a[d] != c[f]) {
                            this.set("activeStack", a);
                            var e;
                            for (e = f; 0 <= e && c[e] != a[e]; e--)
                                if (f = v.byId(c[e])) f._hasBeenBlurred = !0, f.set("focused", !1), f._focusManager == this && f._onBlur(b), this.emit("widget-blur", f, b);
                            for (e++; e <= d; e++)
                                if (f = v.byId(a[e])) f.set("focused", !0), f._focusManager == this && f._onFocus(b), this.emit("widget-focus", f, b);
                        }
                    },
                    focus: function(a) {
                        if (a) try {
                            a.focus();
                        } catch (b) {}
                    }
                }))();
                f(function() {
                    var b = q.registerWin(r.get(document));
                    c("ie") && a(window, "unload", function() {
                        b && (b.remove(), b = null);
                    });
                });
                w.focus = function(a) {
                    q.focus(a);
                };
                for (var u in q) /^_/.test(u) || (w.focus[u] = "function" == typeof q[u] ? e.hitch(q, u) : q[u]);
                q.watch(function(a, b, c) {
                    w.focus[a] = c;
                });
                return q;
            });
        },
        "dojo/window": function() {
            dojoDefine("./_base/lang ./sniff ./_base/window ./dom ./dom-geometry ./dom-style ./dom-construct".split(" "), function(m, h, g, l, d, b, k) {
                h.add("rtl-adjust-position-for-verticalScrollBar", function(a, b) {
                    var c = g.body(b),
                        e = k.create("div", {
                            style: {
                                overflow: "scroll",
                                overflowX: "visible",
                                direction: "rtl",
                                visibility: "hidden",
                                position: "absolute",
                                left: "0",
                                top: "0",
                                width: "64px",
                                height: "64px"
                            }
                        }, c, "last"),
                        n = k.create("div", {
                            style: {
                                overflow: "hidden",
                                direction: "ltr"
                            }
                        }, e, "last"),
                        h = 0 != d.position(n).x;
                    e.removeChild(n);
                    c.removeChild(e);
                    return h;
                });
                h.add("position-fixed-support", function(a, b) {
                    var c = g.body(b),
                        e = k.create("span", {
                            style: {
                                visibility: "hidden",
                                position: "fixed",
                                left: "1px",
                                top: "1px"
                            }
                        }, c, "last"),
                        n = k.create("span", {
                            style: {
                                position: "fixed",
                                left: "0",
                                top: "0"
                            }
                        }, e, "last"),
                        h = d.position(n).x != d.position(e).x;
                    e.removeChild(n);
                    c.removeChild(e);
                    return h;
                });
                var e = {
                    getBox: function(a) {
                        a = a || g.doc;
                        var b = "BackCompat" == a.compatMode ? g.body(a) : a.documentElement,
                            c = d.docScroll(a);
                        if (h("touch")) {
                            var l = e.get(a);
                            a = l.innerWidth || b.clientWidth;
                            b = l.innerHeight || b.clientHeight;
                        } else a = b.clientWidth, b = b.clientHeight;
                        return {
                            l: c.x,
                            t: c.y,
                            w: a,
                            h: b
                        };
                    },
                    get: function(a) {
                        if (h("ie") && e !== document.parentWindow) {
                            a.parentWindow.execScript("document._parentWindow \x3d window;", "Javascript");
                            var b = a._parentWindow;
                            a._parentWindow = null;
                            return b;
                        }
                        return a.parentWindow || a.defaultView;
                    },
                    scrollIntoView: function(a, f) {
                        try {
                            a = l.byId(a);
                            var c = a.ownerDocument || g.doc,
                                e = g.body(c),
                                n = c.documentElement || e.parentNode,
                                k = h("ie"),
                                m = h("webkit");
                            if (a != e && a != n)
                                if (!(h("mozilla") || k || m || h("opera") || h("trident")) && "scrollIntoView" in a) a.scrollIntoView(!1);
                                else {
                                    var v = "BackCompat" == c.compatMode,
                                        w = Math.min(e.clientWidth || n.clientWidth, n.clientWidth || e.clientWidth),
                                        y = Math.min(e.clientHeight || n.clientHeight, n.clientHeight || e.clientHeight),
                                        c = m || v ? e : n,
                                        t = f || d.position(a),
                                        q = a.parentNode,
                                        m = function(a) {
                                            return 6 >= k || 7 == k && v ? !1 : h("position-fixed-support") && "fixed" == b.get(a, "position").toLowerCase();
                                        },
                                        u = this,
                                        z = function(a, b, c) {
                                            "BODY" == a.tagName || "HTML" == a.tagName ? u.get(a.ownerDocument).scrollBy(b, c) : (b && (a.scrollLeft += b), c && (a.scrollTop += c));
                                        };
                                    if (!m(a))
                                        for (; q;) {
                                            q == e && (q = c);
                                            var p = d.position(q),
                                                L = m(q),
                                                K = "rtl" == b.getComputedStyle(q).direction.toLowerCase();
                                            if (q == c) {
                                                p.w = w;
                                                p.h = y;
                                                c == n && (k || h("trident")) && K && (p.x += c.offsetWidth - p.w);
                                                if (0 > p.x || !k || 9 <= k || h("trident")) p.x = 0;
                                                if (0 > p.y || !k || 9 <= k || h("trident")) p.y = 0;
                                            } else {
                                                var M = d.getPadBorderExtents(q);
                                                p.w -= M.w;
                                                p.h -= M.h;
                                                p.x += M.l;
                                                p.y += M.t;
                                                var G = q.clientWidth,
                                                    H = p.w - G;
                                                0 < G && 0 < H && (K && h("rtl-adjust-position-for-verticalScrollBar") && (p.x += H), p.w = G);
                                                G = q.clientHeight;
                                                H = p.h - G;
                                                0 < G && 0 < H && (p.h = G);
                                            }
                                            L && (0 > p.y && (p.h += p.y, p.y = 0), 0 > p.x && (p.w += p.x, p.x = 0), p.y + p.h > y && (p.h = y - p.y), p.x + p.w > w && (p.w = w - p.x));
                                            var O = t.x - p.x,
                                                P = t.y - p.y,
                                                T = O + t.w - p.w,
                                                U = P + t.h - p.h,
                                                F, A;
                                            0 < T * O && (q.scrollLeft || q == c || q.scrollWidth > q.offsetHeight) && (F = Math[0 > O ? "max" : "min"](O, T), K && (8 == k && !v || 9 <= k || h("trident")) && (F = -F), A = q.scrollLeft, z(q, F, 0), F = q.scrollLeft - A, t.x -= F);
                                            0 < U * P && (q.scrollTop || q == c || q.scrollHeight > q.offsetHeight) && (F = Math.ceil(Math[0 > P ? "max" : "min"](P, U)), A = q.scrollTop, z(q, 0, F), F = q.scrollTop - A, t.y -= F);
                                            q = q != c && !L && q.parentElement;
                                        }
                                }
                        } catch (B) {
                            a.scrollIntoView(!1);
                        }
                    }
                };
                m.setObject("dojo.window", e);
                return e;
            });
        },
        "dijit/a11y": function() {
            dojoDefine("dojo/_base/array dojo/dom dojo/dom-attr dojo/dom-style dojo/_base/lang dojo/sniff ./main".split(" "), function(m, h, g, l, d, b, k) {
                var e = {
                    _isElementShown: function(a) {
                        var b = l.get(a);
                        return "hidden" != b.visibility && "collapsed" != b.visibility && "none" != b.display && "hidden" != g.get(a, "type");
                    },
                    hasDefaultTabStop: function(a) {
                        switch (a.nodeName.toLowerCase()) {
                            case "a":
                                return g.has(a, "href");
                            case "area":
                            case "button":
                            case "input":
                            case "object":
                            case "select":
                            case "textarea":
                                return !0;
                            case "iframe":
                                var b;
                                try {
                                    var c = a.contentDocument;
                                    if ("designMode" in c && "on" == c.designMode) return !0;
                                    b = c.body;
                                } catch (d) {
                                    try {
                                        b = a.contentWindow.document.body;
                                    } catch (e) {
                                        return !1;
                                    }
                                }
                                return b && ("true" == b.contentEditable || b.firstChild && "true" == b.firstChild.contentEditable);
                            default:
                                return "true" == a.contentEditable;
                        }
                    },
                    effectiveTabIndex: function(a) {
                        return g.get(a, "disabled") ? void 0 : g.has(a, "tabIndex") ? +g.get(a, "tabIndex") : e.hasDefaultTabStop(a) ? 0 : void 0;
                    },
                    isTabNavigable: function(a) {
                        return 0 <= e.effectiveTabIndex(a);
                    },
                    isFocusable: function(a) {
                        return -1 <= e.effectiveTabIndex(a);
                    },
                    _getTabNavigable: function(a) {
                        function f(a) {
                            return a && "input" == a.tagName.toLowerCase() && a.type && "radio" == a.type.toLowerCase() && a.name && a.name.toLowerCase();
                        }

                        function c(a) {
                            return y[f(a)] || a;
                        }
                        var d, h, l, k, m, w, y = {},
                            t = e._isElementShown,
                            q = e.effectiveTabIndex,
                            u = function(a) {
                                for (a = a.firstChild; a; a = a.nextSibling)
                                    if (!(1 != a.nodeType || 9 >= b("ie") && "HTML" !== a.scopeName) && t(a)) {
                                        var c = q(a);
                                        if (0 <= c) {
                                            if (0 == c) d || (d = a), h = a;
                                            else if (0 < c) {
                                                if (!l || c < k) k = c, l = a;
                                                if (!m || c >= w) w = c, m = a;
                                            }
                                            c = f(a);
                                            g.get(a, "checked") && c && (y[c] = a);
                                        }
                                        "SELECT" != a.nodeName.toUpperCase() && u(a);
                                    }
                            };
                        t(a) && u(a);
                        return {
                            first: c(d),
                            last: c(h),
                            lowest: c(l),
                            highest: c(m)
                        };
                    },
                    getFirstInTabbingOrder: function(a, b) {
                        var c = e._getTabNavigable(h.byId(a, b));
                        return c.lowest ? c.lowest : c.first;
                    },
                    getLastInTabbingOrder: function(a, b) {
                        var c = e._getTabNavigable(h.byId(a, b));
                        return c.last ? c.last : c.highest;
                    }
                };
                d.mixin(k, e);
                return e;
            });
        },
        "dojo/request/script": function() {
            dojoDefine("module ./watch ./util ../_base/kernel ../_base/array ../_base/lang ../on ../dom ../dom-construct ../has ../_base/window".split(" "), function(m, h, g, l, d, b, k, e, a, f, c) {
                function C(a, b) {
                    a.canDelete && w._remove(a.id, b.options.frameDoc, !0);
                }

                function n(a) {
                    z && z.length && (d.forEach(z, function(a) {
                        w._remove(a.id, a.frameDoc);
                        a.frameDoc = null;
                    }), z = []);
                    return a.options.jsonp ? !a.data : !0;
                }

                function r(a) {
                    return !!this.scriptLoaded;
                }

                function x(a) {
                    return (a = a.options.checkString) && eval("typeof(" + a + ') !\x3d\x3d "undefined"');
                }

                function v(a, b) {
                    if (this.canDelete) {
                        var c = this.response.options;
                        z.push({
                            id: this.id,
                            frameDoc: c.ioArgs ? c.ioArgs.frameDoc : c.frameDoc
                        });
                        c.ioArgs && (c.ioArgs.frameDoc = null);
                        c.frameDoc = null;
                    }
                    b ? this.reject(b) : this.resolve(a);
                }

                function w(a, c, f) {
                    var d = g.parseArgs(a, g.deepCopy({}, c));
                    a = d.url;
                    c = d.options;
                    var e = g.deferred(d, C, n, c.jsonp ? null : c.checkString ? x : r, v);
                    b.mixin(e, {
                        id: "dojo_request_script" + y++,
                        canDelete: !1
                    });
                    c.jsonp && (new RegExp("[?\x26]" + c.jsonp + "\x3d").test(a) || (a += (~a.indexOf("?") ? "\x26" : "?") + c.jsonp + "\x3d" + (c.frameDoc ? "parent." : "") + "dojo_request_script_callbacks." + e.id), e.canDelete = !0, u[e.id] = function(a) {
                        d.data = a;
                        e.handleResponse(d);
                    });
                    g.notify && g.notify.emit("send", d, e.promise.cancel);
                    if (!c.canAttach || c.canAttach(e)) {
                        var l = w._attach(e.id, a, c.frameDoc);
                        if (!c.jsonp && !c.checkString) var m = k(l, t, function(a) {
                            if ("load" === a.type || q.test(l.readyState)) m.remove(), e.scriptLoaded = a;
                        });
                    }
                    h(e);
                    return f ? e : e.promise;
                }
                f.add("script-readystatechange", function(a, b) {
                    return "undefined" !== typeof b.createElement("script").onreadystatechange && ("undefined" === typeof a.opera || "[object Opera]" !== a.opera.toString());
                });
                var y = 0,
                    t = f("script-readystatechange") ? "readystatechange" : "load",
                    q = /complete|loaded/,
                    u = l.global.dojo_request_script_callbacks = {},
                    z = [];
                w.get = w;
                w._attach = function(a, b, f) {
                    f = f || c.doc;
                    var d = f.createElement("script");
                    d.type = "text/javascript";
                    d.src = b;
                    d.id = a;
                    d.async = !0;
                    d.charset = "utf-8";
                    return f.getElementsByTagName("head")[0].appendChild(d);
                };
                w._remove = function(b, c, f) {
                    a.destroy(e.byId(b, c));
                    u[b] && (f ? u[b] = function() {
                        delete u[b];
                    } : delete u[b]);
                };
                w._callbacksProperty = "dojo_request_script_callbacks";
                return w;
            });
        },
        "dojo/html": function() {
            dojoDefine("./_base/kernel ./_base/lang ./_base/array ./_base/declare ./dom ./dom-construct ./parser".split(" "), function(m, h, g, l, d, b, k) {
                var e = 0,
                    a = {
                        _secureForInnerHtml: function(a) {
                            return a.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "");
                        },
                        _emptyNode: b.empty,
                        _setNodeContent: function(a, c) {
                            b.empty(a);
                            if (c)
                                if ("string" == typeof c && (c = b.toDom(c, a.ownerDocument)), !c.nodeType && h.isArrayLike(c))
                                    for (var d = c.length, e = 0; e < c.length; e = d == c.length ? e + 1 : 0) b.place(c[e], a, "last");
                                else b.place(c, a, "last");
                            return a;
                        },
                        _ContentSetter: l("dojo.html._ContentSetter", null, {
                            node: "",
                            content: "",
                            id: "",
                            cleanContent: !1,
                            extractContent: !1,
                            parseContent: !1,
                            parserScope: m._scopeName,
                            startup: !0,
                            constructor: function(a, b) {
                                h.mixin(this, a || {});
                                b = this.node = d.byId(this.node || b);
                                this.id || (this.id = ["Setter", b ? b.id || b.tagName : "", e++].join("_"));
                            },
                            set: function(a, b) {
                                void 0 !== a && (this.content = a);
                                b && this._mixin(b);
                                this.onBegin();
                                this.setContent();
                                var d = this.onEnd();
                                return d && d.then ? d : this.node;
                            },
                            setContent: function() {
                                var b = this.node;
                                if (!b) throw Error(this.declaredClass + ": setContent given no node");
                                try {
                                    b = a._setNodeContent(b, this.content);
                                } catch (d) {
                                    var c = this.onContentError(d);
                                    try {
                                        b.innerHTML = c;
                                    } catch (e) {}
                                }
                                this.node = b;
                            },
                            empty: function() {
                                this.parseDeferred && (this.parseDeferred.isResolved() || this.parseDeferred.cancel(), delete this.parseDeferred);
                                this.parseResults && this.parseResults.length && (g.forEach(this.parseResults, function(a) {
                                    a.destroy && a.destroy();
                                }), delete this.parseResults);
                                b.empty(this.node);
                            },
                            onBegin: function() {
                                var b = this.content;
                                if (h.isString(b) && (this.cleanContent && (b = a._secureForInnerHtml(b)), this.extractContent)) {
                                    var c = b.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
                                    c && (b = c[1]);
                                }
                                this.empty();
                                this.content = b;
                                return this.node;
                            },
                            onEnd: function() {
                                this.parseContent && this._parse();
                                return this.node;
                            },
                            tearDown: function() {
                                delete this.parseResults;
                                delete this.parseDeferred;
                                delete this.node;
                                delete this.content;
                            },
                            onContentError: function(a) {
                                return "Error occurred setting content: " + a;
                            },
                            onExecError: function(a) {
                                return "Error occurred executing scripts: " + a;
                            },
                            _mixin: function(a) {
                                var b = {},
                                    d;
                                for (d in a) d in b || (this[d] = a[d]);
                            },
                            _parse: function() {
                                var a = this.node;
                                try {
                                    var b = {};
                                    g.forEach(["dir", "lang", "textDir"], function(a) {
                                        this[a] && (b[a] = this[a]);
                                    }, this);
                                    var d = this;
                                    this.parseDeferred = k.parse({
                                        rootNode: a,
                                        noStart: !this.startup,
                                        inherited: b,
                                        scope: this.parserScope
                                    }).then(function(a) {
                                        return d.parseResults = a;
                                    }, function(a) {
                                        d._onError("Content", a, "Error parsing in _ContentSetter#" + this.id);
                                    });
                                } catch (e) {
                                    this._onError("Content", e, "Error parsing in _ContentSetter#" + this.id);
                                }
                            },
                            _onError: function(b, c, d) {
                                b = this["on" + b + "Error"].call(this, c);
                                d || b && a._setNodeContent(this.node, b, !0);
                            }
                        }),
                        set: function(b, c, d) {
                            void 0 == c && (c = "");
                            return d ? new a._ContentSetter(h.mixin(d, {
                                content: c,
                                node: b
                            })).set() : a._setNodeContent(b, c, !0);
                        }
                    };
                h.setObject("dojo.html", a);
                return a;
            });
        },
        "dojo/parser": function() {
            dojoDefine("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "), function(m, h, g, l, d, b, k, e, a, f, c, C, n, r, x, v) {
                function w(a) {
                    return eval("(" + a + ")");
                }

                function y(a) {
                    var b = a._nameCaseMap,
                        c = a.prototype;
                    if (!b || b._extendCnt < q) {
                        var b = a._nameCaseMap = {},
                            d;
                        for (d in c) "_" !== d.charAt(0) && (b[d.toLowerCase()] = d);
                        b._extendCnt = q;
                    }
                    return b;
                }

                function t(a, b) {
                    var c = a.join();
                    if (!u[c]) {
                        for (var d = [], f = 0, e = a.length; f < e; f++) {
                            var h = a[f];
                            d[d.length] = u[h] = u[h] || g.getObject(h) || ~h.indexOf("/") && (b ? b(h) : m(h));
                        }
                        f = d.shift();
                        u[c] = d.length ? f.createSubclass ? f.createSubclass(d) : f.extend.apply(f, d) : f;
                    }
                    return u[c];
                }
                new Date("X");
                var q = 0;
                a.after(g, "extend", function() {
                    q++;
                }, !0);
                var u = {},
                    z = {
                        _clearCache: function() {
                            q++;
                            u = {};
                        },
                        _functionFromScript: function(a, b) {
                            var c = "",
                                d = "",
                                f = a.getAttribute(b + "args") || a.getAttribute("args"),
                                e = a.getAttribute("with"),
                                f = (f || "").split(/\s*,\s*/);
                            e && e.length && l.forEach(e.split(/\s*,\s*/), function(a) {
                                c += "with(" + a + "){";
                                d += "}";
                            });
                            return new Function(f, c + a.innerHTML + d);
                        },
                        instantiate: function(a, b, c) {
                            b = b || {};
                            c = c || {};
                            var d = (c.scope || h._scopeName) + "Type",
                                f = "data-" + (c.scope || h._scopeName) + "-",
                                e = f + "type",
                                g = f + "mixins",
                                k = [];
                            l.forEach(a, function(a) {
                                var c = d in b ? b[d] : a.getAttribute(e) || a.getAttribute(d);
                                if (c) {
                                    var f = a.getAttribute(g),
                                        c = f ? [c].concat(f.split(/\s*,\s*/)) : [c];
                                    k.push({
                                        node: a,
                                        types: c
                                    });
                                }
                            });
                            return this._instantiate(k, b, c);
                        },
                        _instantiate: function(a, b, c, d) {
                            function e(a) {
                                b._started || c.noStart || l.forEach(a, function(a) {
                                    "function" !== typeof a.startup || a._started || a.startup();
                                });
                                return a;
                            }
                            a = l.map(a, function(a) {
                                var d = a.ctor || t(a.types, c.contextRequire);
                                if (!d) throw Error("Unable to resolve constructor for: '" + a.types.join() + "'");
                                return this.construct(d, a.node, b, c, a.scripts, a.inherited);
                            }, this);
                            return d ? f(a).then(e) : e(a);
                        },
                        construct: function(b, d, f, k, m, q) {
                            function u(b) {
                                z && g.setObject(z, b);
                                for (B = 0; B < J.length; B++) a[J[B].advice || "after"](b, J[B].method, g.hitch(b, J[B].func), !0);
                                for (B = 0; B < Q.length; B++) Q[B].call(b);
                                for (B = 0; B < R.length; B++) b.watch(R[B].prop, R[B].func);
                                for (B = 0; B < S.length; B++) x(b, S[B].event, S[B].func);
                                return b;
                            }
                            var C = b && b.prototype;
                            k = k || {};
                            var v = {};
                            k.defaults && g.mixin(v, k.defaults);
                            q && g.mixin(v, q);
                            var t;
                            n("dom-attributes-explicit") ? t = d.attributes : n("dom-attributes-specified-flag") ? t = l.filter(d.attributes, function(a) {
                                return a.specified;
                            }) : (q = (/^input$|^img$/i.test(d.nodeName) ? d : d.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), t = l.map(q.split(/\s+/), function(a) {
                                var b = a.toLowerCase();
                                return {
                                    name: a,
                                    value: "LI" == d.nodeName && "value" == a || "enctype" == b ? d.getAttribute(b) : d.getAttributeNode(b).value
                                };
                            }));
                            var F = k.scope || h._scopeName;
                            q = "data-" + F + "-";
                            var A = {};
                            "dojo" !== F && (A[q + "props"] = "data-dojo-props", A[q + "type"] = "data-dojo-type", A[q + "mixins"] = "data-dojo-mixins", A[F + "type"] = "dojoType", A[q + "id"] = "data-dojo-id");
                            for (var B = 0, D, F = [], z, N; D = t[B++];) {
                                var E = D.name,
                                    I = E.toLowerCase();
                                D = D.value;
                                switch (A[I] || I) {
                                    case "data-dojo-type":
                                    case "dojotype":
                                    case "data-dojo-mixins":
                                        break;
                                    case "data-dojo-props":
                                        N = D;
                                        break;
                                    case "data-dojo-id":
                                    case "jsid":
                                        z = D;
                                        break;
                                    case "data-dojo-attach-point":
                                    case "dojoattachpoint":
                                        v.dojoAttachPoint = D;
                                        break;
                                    case "data-dojo-attach-event":
                                    case "dojoattachevent":
                                        v.dojoAttachEvent = D;
                                        break;
                                    case "class":
                                        v["class"] = d.className;
                                        break;
                                    case "style":
                                        v.style = d.style && d.style.cssText;
                                        break;
                                    default:
                                        if (E in C || (E = y(b)[I] || E), E in C) switch (typeof C[E]) {
                                            case "string":
                                                v[E] = D;
                                                break;
                                            case "number":
                                                v[E] = D.length ? Number(D) : NaN;
                                                break;
                                            case "boolean":
                                                v[E] = "false" != D.toLowerCase();
                                                break;
                                            case "function":
                                                "" === D || -1 != D.search(/[^\w\.]+/i) ? v[E] = new Function(D) : v[E] = g.getObject(D, !1) || new Function(D);
                                                F.push(E);
                                                break;
                                            default:
                                                I = C[E], v[E] = I && "length" in I ? D ? D.split(/\s*,\s*/) : [] : I instanceof Date ? "" == D ? new Date("") : "now" == D ? new Date() : c.fromISOString(D) : I instanceof e ? h.baseUrl + D : w(D);
                                        } else v[E] = D;
                                }
                            }
                            for (t = 0; t < F.length; t++) A = F[t].toLowerCase(), d.removeAttribute(A), d[A] = null;
                            if (N) try {
                                N = w.call(k.propsThis, "{" + N + "}"), g.mixin(v, N);
                            } catch (V) {
                                throw Error(V.toString() + " in data-dojo-props\x3d'" + N + "'");
                            }
                            g.mixin(v, f);
                            m || (m = b && (b._noScript || C._noScript) ? [] : r("\x3e script[type^\x3d'dojo/']", d));
                            var J = [],
                                Q = [],
                                R = [],
                                S = [];
                            if (m)
                                for (B = 0; B < m.length; B++) A = m[B], d.removeChild(A), f = A.getAttribute(q + "event") || A.getAttribute("event"), k = A.getAttribute(q + "prop"), N = A.getAttribute(q + "method"), F = A.getAttribute(q + "advice"), t = A.getAttribute("type"), A = this._functionFromScript(A, q), f ? "dojo/connect" == t ? J.push({
                                    method: f,
                                    func: A
                                }) : "dojo/on" == t ? S.push({
                                    event: f,
                                    func: A
                                }) : v[f] = A : "dojo/aspect" == t ? J.push({
                                    method: N,
                                    advice: F,
                                    func: A
                                }) : "dojo/watch" == t ? R.push({
                                    prop: k,
                                    func: A
                                }) : Q.push(A);
                            b = (m = b.markupFactory || C.markupFactory) ? m(v, d, b) : new b(v, d);
                            return b.then ? b.then(u) : u(b);
                        },
                        scan: function(a, b) {
                            function c(a) {
                                if (!a.inherited) {
                                    a.inherited = {};
                                    var b = a.node,
                                        d = c(a.parent),
                                        b = {
                                            dir: b.getAttribute("dir") || d.dir,
                                            lang: b.getAttribute("lang") || d.lang,
                                            textDir: b.getAttribute(v) || d.textDir
                                        },
                                        f;
                                    for (f in b) b[f] && (a.inherited[f] = b[f]);
                                }
                                return a.inherited;
                            }
                            var d = [],
                                f = [],
                                e = {},
                                g = (b.scope || h._scopeName) + "Type",
                                k = "data-" + (b.scope || h._scopeName) + "-",
                                q = k + "type",
                                v = k + "textdir",
                                k = k + "mixins",
                                u = a.firstChild,
                                r = b.inherited;
                            if (!r) {
                                var w = function(a, b) {
                                        return a.getAttribute && a.getAttribute(b) || a.parentNode && w(a.parentNode, b);
                                    },
                                    r = {
                                        dir: w(a, "dir"),
                                        lang: w(a, "lang"),
                                        textDir: w(a, v)
                                    },
                                    x;
                                for (x in r) r[x] || delete r[x];
                            }
                            for (var r = {
                                    inherited: r
                                }, z, y;;)
                                if (u) {
                                    if (1 != u.nodeType) u = u.nextSibling;
                                    else if (z && "script" == u.nodeName.toLowerCase())(E = u.getAttribute("type")) && /^dojo\/\w/i.test(E) && z.push(u), u = u.nextSibling;
                                    else if (y) u = u.nextSibling;
                                    else {
                                        var E = u.getAttribute(q) || u.getAttribute(g);
                                        x = u.firstChild;
                                        if (E || x && (3 != x.nodeType || x.nextSibling)) {
                                            y = null;
                                            if (E) {
                                                var I = u.getAttribute(k);
                                                z = I ? [E].concat(I.split(/\s*,\s*/)) : [E];
                                                try {
                                                    y = t(z, b.contextRequire);
                                                } catch (Q) {}
                                                y || l.forEach(z, function(a) {
                                                    ~a.indexOf("/") && !e[a] && (e[a] = !0, f[f.length] = a);
                                                });
                                                I = y && !y.prototype._noScript ? [] : null;
                                                r = {
                                                    types: z,
                                                    ctor: y,
                                                    parent: r,
                                                    node: u,
                                                    scripts: I
                                                };
                                                r.inherited = c(r);
                                                d.push(r);
                                            } else r = {
                                                node: u,
                                                scripts: z,
                                                parent: r
                                            };
                                            z = I;
                                            y = u.stopParser || y && y.prototype.stopParser && !b.template;
                                            u = x;
                                        } else u = u.nextSibling;
                                    }
                                } else {
                                    if (!r || !r.node) break;
                                    u = r.node.nextSibling;
                                    y = !1;
                                    r = r.parent;
                                    z = r.scripts;
                                }
                            var J = new C();
                            f.length ? (n("dojo-debug-messages"), (b.contextRequire || m)(f, function() {
                                J.resolve(l.filter(d, function(a) {
                                    if (!a.ctor) try {
                                        a.ctor = t(a.types, b.contextRequire);
                                    } catch (c) {}
                                    for (var d = a.parent; d && !d.types;) d = d.parent;
                                    var f = a.ctor && a.ctor.prototype;
                                    a.instantiateChildren = !(f && f.stopParser && !b.template);
                                    a.instantiate = !d || d.instantiate && d.instantiateChildren;
                                    return a.instantiate;
                                }));
                            })) : J.resolve(d);
                            return J.promise;
                        },
                        _require: function(a, b) {
                            var c = w("{" + a.innerHTML + "}"),
                                d = [],
                                f = [],
                                e = new C(),
                                h = b && b.contextRequire || m,
                                k;
                            for (k in c) d.push(k), f.push(c[k]);
                            h(f, function() {
                                for (var a = 0; a < d.length; a++) g.setObject(d[a], arguments[a]);
                                e.resolve(arguments);
                            });
                            return e.promise;
                        },
                        _scanAmd: function(a, b) {
                            var c = new C(),
                                d = c.promise;
                            c.resolve(!0);
                            var f = this;
                            r("script[type\x3d'dojo/require']", a).forEach(function(a) {
                                d = d.then(function() {
                                    return f._require(a, b);
                                });
                                a.parentNode.removeChild(a);
                            });
                            return d;
                        },
                        parse: function(a, c) {
                            !a || "string" == typeof a || "nodeType" in a || (c = a, a = c.rootNode);
                            var d = a ? b.byId(a) : k.body();
                            c = c || {};
                            var f = c.template ? {
                                    template: !0
                                } : {},
                                e = [],
                                h = this,
                                l = this._scanAmd(d, c).then(function() {
                                    return h.scan(d, c);
                                }).then(function(a) {
                                    return h._instantiate(a, f, c, !0);
                                }).then(function(a) {
                                    return e = e.concat(a);
                                }).otherwise(function(a) {
                                    throw a;
                                });
                            g.mixin(e, l);
                            return e;
                        }
                    };
                h.parser = z;
                d.parseOnLoad && v(100, z, "parse");
                return z;
            });
        },
        "dojo/_base/url": function() {
            dojoDefine(["./kernel"], function(m) {
                var h = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
                    g = /^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,
                    l = function() {
                        for (var d = arguments, b = [d[0]], k = 1; k < d.length; k++)
                            if (d[k]) {
                                var e = new l(d[k] + ""),
                                    b = new l(b[0] + "");
                                if ("" == e.path && !e.scheme && !e.authority && !e.query) null != e.fragment && (b.fragment = e.fragment), e = b;
                                else if (!e.scheme && (e.scheme = b.scheme, !e.authority && (e.authority = b.authority, "/" != e.path.charAt(0)))) {
                                    for (var b = (b.path.substring(0, b.path.lastIndexOf("/") + 1) + e.path).split("/"), a = 0; a < b.length; a++) "." == b[a] ? a == b.length - 1 ? b[a] = "" : (b.splice(a, 1), a--) : 0 < a && (1 != a || "" != b[0]) && ".." == b[a] && ".." != b[a - 1] && (a == b.length - 1 ? (b.splice(a, 1), b[a - 1] = "") : (b.splice(a - 1, 2), a -= 2));
                                    e.path = b.join("/");
                                }
                                b = [];
                                e.scheme && b.push(e.scheme, ":");
                                e.authority && b.push("//", e.authority);
                                b.push(e.path);
                                e.query && b.push("?", e.query);
                                e.fragment && b.push("#", e.fragment);
                            }
                        this.uri = b.join("");
                        d = this.uri.match(h);
                        this.scheme = d[2] || (d[1] ? "" : null);
                        this.authority = d[4] || (d[3] ? "" : null);
                        this.path = d[5];
                        this.query = d[7] || (d[6] ? "" : null);
                        this.fragment = d[9] || (d[8] ? "" : null);
                        null != this.authority && (d = this.authority.match(g), this.user = d[3] || null, this.password = d[4] || null, this.host = d[6] || d[7], this.port = d[9] || null);
                    };
                l.prototype.toString = function() {
                    return this.uri;
                };
                return m._Url = l;
            });
        },
        "dojo/promise/all": function() {
            dojoDefine(["../_base/array", "../Deferred", "../when"], function(m, h, g) {
                var l = m.some;
                return function(d) {
                    var b, k;
                    d instanceof Array ? k = d : d && "object" === typeof d && (b = d);
                    var e, a = [];
                    if (b) {
                        k = [];
                        for (var f in b) Object.hasOwnProperty.call(b, f) && (a.push(f), k.push(b[f]));
                        e = {};
                    } else k && (e = []);
                    if (!k || !k.length) return new h().resolve(e);
                    var c = new h();
                    c.promise.always(function() {
                        e = a = null;
                    });
                    var m = k.length;
                    l(k, function(d, f) {
                        b || a.push(f);
                        g(d, function(b) {
                            c.isFulfilled() || (e[a[f]] = b, 0 === --m && c.resolve(e));
                        }, c.reject);
                        return c.isFulfilled();
                    });
                    return c.promise;
                };
            });
        },
        "dojo/date/stamp": function() {
            dojoDefine(["../_base/lang", "../_base/array"], function(m, h) {
                var g = {};
                m.setObject("dojo.date.stamp", g);
                g.fromISOString = function(l, d) {
                    g._isoRegExp || (g._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);
                    var b = g._isoRegExp.exec(l),
                        k = null;
                    if (b) {
                        b.shift();
                        b[1] && b[1]--;
                        b[6] && (b[6] *= 1E3);
                        d && (d = new Date(d), h.forEach(h.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "), function(a) {
                            return d["get" + a]();
                        }), function(a, c) {
                            b[c] = b[c] || a;
                        }));
                        k = new Date(b[0] || 1970, b[1] || 0, b[2] || 1, b[3] || 0, b[4] || 0, b[5] || 0, b[6] || 0);
                        100 > b[0] && k.setFullYear(b[0] || 1970);
                        var e = 0,
                            a = b[7] && b[7].charAt(0);
                        "Z" != a && (e = 60 * (b[8] || 0) + (Number(b[9]) || 0), "-" != a && (e *= -1));
                        a && (e -= k.getTimezoneOffset());
                        e && k.setTime(k.getTime() + 6E4 * e);
                    }
                    return k;
                };
                g.toISOString = function(g, d) {
                    var b = function(a) {
                        return 10 > a ? "0" + a : a;
                    };
                    d = d || {};
                    var h = [],
                        e = d.zulu ? "getUTC" : "get",
                        a = "";
                    "time" != d.selector && (a = g[e + "FullYear"](), a = ["0000".substr((a + "").length) + a, b(g[e + "Month"]() + 1), b(g[e + "Date"]())].join("-"));
                    h.push(a);
                    if ("date" != d.selector) {
                        a = [b(g[e + "Hours"]()), b(g[e + "Minutes"]()), b(g[e + "Seconds"]())].join(":");
                        e = g[e + "Milliseconds"]();
                        d.milliseconds && (a += "." + (100 > e ? "0" : "") + b(e));
                        if (d.zulu) a += "Z";
                        else if ("time" != d.selector) var e = g.getTimezoneOffset(),
                            f = Math.abs(e),
                            a = a + ((0 < e ? "-" : "+") + b(Math.floor(f / 60)) + ":" + b(f % 60));
                        h.push(a);
                    }
                    return h.join("T");
                };
                return g;
            });
        },
        "mojo/widgets/badges/TextBadge": function() {
            dojoDefine(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/textBadge.html", "dojo/dom-attr"], function(m, h, g, l, d) {
                return m([h, g], {
                    templateString: l,
                    rewardsUrl: "mailchimp.com",
                    postCreate: function() {
                        this.inherited(arguments);
                        d.set(this.monkeyRewardsLink, "href", this.rewardsUrl);
                    }
                });
            });
        },
        "mojo/widgets/_CustomStyleRulesMixin": function() {
            dojoDefine(["dojo/_base/declare", "dojo/sniff"], function(m, h) {
                return m([], {
                    createStyleNode: function(g, h) {
                        var d;
                        if (h && (d = g.getElementById(h))) return d;
                        d = document.createElement("style");
                        d.type = "text/css";
                        d.setAttribute("id", h ? h : "");
                        g.getElementsByTagName("head")[0].appendChild(d);
                        return d;
                    },
                    getStyleSheet: function(g) {
                        9 > h("ie") ? g = g.styleSheet : (g.appendChild(document.createTextNode("")), g = g.sheet);
                        this.addCSSRule(g, "body", "width:100%;height:100%;", 0);
                        return g;
                    },
                    addCSSRule: function(g, h, d, b) {
                        b = "undefined" !== typeof b ? b : "cssRules" in g ? g.cssRules.length : g.rules.length;
                        "insertRule" in g ? g.insertRule(h + "{" + d + "}", b) : "addRule" in g && g.addRule(h, d, b);
                    }
                });
            });
        },
        "mojo/signup-forms/BannerFrame": function() {
            dojoDefine("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/query dojo/_base/lang dojo/window dojo/on dojo/dom dojo/dom-geometry dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/html dojo/promise/all dojo/Deferred dojo/sniff dojo/text!./templates/banner.html mojo/widgets/_CustomStyleRulesMixin dojo/NodeList-manipulate".split(" "), function(m, h, g, l, d, b, k, e, a, f, c, C, n, r, x, v, w, y) {
                var t = m([h, g], {
                    templateString: w,
                    config: {},
                    description: "",
                    subscribeLabel: "Subscribe",
                    closeLabel: "Close",
                    appDomain: "",
                    postMixInProperties: function() {
                        this.config.closeLabel && (this.closeLabel = this.config.closeLabel);
                        this.config.description && (this.description = this.config.description);
                        this.config.buttonLabel && (this.subscribeLabel = this.config.buttonLabel);
                    },
                    postCreate: function() {
                        this.inherited(arguments);
                        n.set(this.bannerDescription, this._cleanText(this.description));
                    },
                    _cleanText: function(a) {
                        a = a.replace(/<\/?[^>]+(>|$)/gi, "");
                        return a = a.replace(/&nbsp;/gi, " ");
                    }
                });
                return m([h, y], {
                    version: "1.0",
                    iframe: null,
                    frameDoc: null,
                    config: {},
                    customCssNode: null,
                    env: "prod",
                    constructor: function(a) {
                        if (!a.iframe || !a.iframe.tagName || "iframe" != a.iframe.tagName.toLowerCase()) throw Error("You must specify an iframe attribute to an iframe element");
                    },
                    postMixInProperties: function() {
                        this.config.version && (this.version = this.config.version);
                        this.config.styles && (this.styles = this.config.styles);
                        this.frameDoc = this.iframe.contentWindow.document;
                    },
                    postCreate: function() {
                        this.bannerContent = new t({
                            config: this.config
                        });
                        this.frameDoc.write('\x3c!DOCTYPE html\x3e\x3chtml\x3e\x3chead\x3e\x3cmeta name\x3d"viewport" content\x3d"width\x3ddevice-width, initial-scale\x3d1, maximum-scale\x3d1, user-scalable\x3dno"/\x3e\x3c/head\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e');
                        this.frameDoc.close();
                        this.bannerContent.placeAt(this.frameDoc.body);
                        r([this.loadCommonCss(), this.loadBannerCss(), this.loadCustomCss()]).then(d.hitch(this, function() {
                            this.defer(this.updateDocHeight, 500);
                        }));
                        k(window, "resize", d.hitch(this, function() {
                            this.updateDocHeight();
                        }));
                    },
                    startup: function() {
                        this.inherited(arguments);
                    },
                    docHeight: function() {
                        return a.getMarginBox(this.bannerContent.bannerContainer).h;
                    },
                    updateDocHeight: function() {
                        try {
                            c.set(this.iframe, "height", this.docHeight() + "px");
                        } catch (a) {}
                    },
                    loadCommonCss: function() {
                        var a = new x(),
                            b = this.frameDoc.createElement("link");
                        b.rel = "stylesheet";
                        b.type = "text/css";
                        b.href = "dev" == this.env ? "//" + this.appDomain + "/css/signup-forms/popup/common.css" : "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/common.css";
                        b.media = "all";
                        k(b, "load", function() {
                            a.resolve();
                        });
                        this.frameDoc.getElementsByTagName("head")[0].appendChild(b);
                        return a.promise;
                    },
                    loadBannerCss: function() {
                        var a = new x(),
                            b = document.createElement("link");
                        b.rel = "stylesheet";
                        b.type = "text/css";
                        b.href = "dev" == this.env ? "//" + this.appDomain + "/css/signup-forms/popup/banner.css" : "//downloads.mailchimp.com/css/signup-forms/popup/" + this.version + "/banner.css";
                        b.media = "all";
                        k(b, "load", function() {
                            a.resolve();
                        });
                        this.frameDoc.getElementsByTagName("head")[0].appendChild(b);
                        return a.promise;
                    },
                    loadCustomCss: function() {
                        this.customCssNode && f.destroy(this.customCssNode);
                        var a = new x();
                        this.customCssNode = this.createStyleNode(this.frameDoc);
                        var b = this.getStyleSheet(this.customCssNode);
                        if (this.styles)
                            for (var c in this.styles)
                                if (this.styles.hasOwnProperty(c)) switch (c) {
                                    case "button":
                                        for (var d in this.styles[c]) switch (d) {
                                            case "color":
                                                this.addCSSRule(b, ".bannerContent__subscribeButton", "background-color:" + this.styles[c][d] + ";");
                                                break;
                                            case "hover_color":
                                                this.addCSSRule(b, ".bannerContent__subscribeButton:hover", "background-color:" + this.styles[c][d] + ";");
                                                break;
                                            case "text_color":
                                                this.addCSSRule(b, ".bannerContent__subscribeButton", "color:" + this.styles[c][d] + ";");
                                                break;
                                            case "alignment":
                                                "right" === this.styles[c][d] ? this.addCSSRule(b, ".bannerContent__subscribeButton", "float:right;") : "center" === this.styles[c][d] ? (this.addCSSRule(b, ".bannerContent__subscribeButton", "float:none;margin-left:auto;margin-right:auto;"), 9 >= v("ie") ? (this.addCSSRule(b, ".bannerContent__subscribeButton", "display:table-cell;"), this.addCSSRule(b, ".bannerContent__buttonContainer", "margin-left:auto;margin-right:auto;display:table;")) : this.addCSSRule(b, ".bannerContent__subscribeButton", "display:table;")) : this.addCSSRule(b, ".bannerContent__subscribeButton", "float:left;");
                                                break;
                                            case "style":
                                                "full" == this.styles[c][d] && this.addCSSRule(b, ".bannerContent__subscribeButton", "width:100%;");
                                        }
                                }
                        a.resolve();
                        return a.promise;
                    }
                });
            });
        },
        "dojo/NodeList-manipulate": function() {
            dojoDefine("./query ./_base/lang ./_base/array ./dom-construct ./dom-attr ./NodeList-dom".split(" "), function(m, h, g, l, d) {
                function b(a) {
                    for (; a.childNodes[0] && 1 == a.childNodes[0].nodeType;) a = a.childNodes[0];
                    return a;
                }

                function k(a, b) {
                    "string" == typeof a ? (a = l.toDom(a, b && b.ownerDocument), 11 == a.nodeType && (a = a.childNodes[0])) : 1 == a.nodeType && a.parentNode && (a = a.cloneNode(!1));
                    return a;
                }
                var e = m.NodeList;
                h.extend(e, {
                    _placeMultiple: function(a, b) {
                        for (var c = "string" == typeof a || a.nodeType ? m(a) : a, d = [], e = 0; e < c.length; e++)
                            for (var g = c[e], h = this.length, k = h - 1, w; w = this[k]; k--) 0 < e && (w = this._cloneNode(w), d.unshift(w)), k == h - 1 ? l.place(w, g, b) : g.parentNode.insertBefore(w, g), g = w;
                        d.length && (d.unshift(0), d.unshift(this.length - 1), Array.prototype.splice.apply(this, d));
                        return this;
                    },
                    innerHTML: function(a) {
                        return arguments.length ? this.addContent(a, "only") : this[0].innerHTML;
                    },
                    text: function(a) {
                        if (arguments.length) {
                            for (var b = 0, c; c = this[b]; b++) 1 == c.nodeType && d.set(c, "textContent", a);
                            return this;
                        }
                        for (var e = "", b = 0; c = this[b]; b++) e += d.get(c, "textContent");
                        return e;
                    },
                    val: function(a) {
                        if (arguments.length) {
                            for (var b = h.isArray(a), c = 0, d; d = this[c]; c++) {
                                var e = d.nodeName.toUpperCase(),
                                    k = d.type,
                                    l = b ? a[c] : a;
                                if ("SELECT" == e)
                                    for (e = d.options, k = 0; k < e.length; k++) {
                                        var m = e[k];
                                        m.selected = d.multiple ? -1 != g.indexOf(a, m.value) : m.value == l;
                                    } else "checkbox" == k || "radio" == k ? d.checked = d.value == l : d.value = l;
                            }
                            return this;
                        }
                        if ((d = this[0]) && 1 == d.nodeType) {
                            a = d.value || "";
                            if ("SELECT" == d.nodeName.toUpperCase() && d.multiple) {
                                a = [];
                                e = d.options;
                                for (k = 0; k < e.length; k++) m = e[k], m.selected && a.push(m.value);
                                a.length || (a = null);
                            }
                            return a;
                        }
                    },
                    append: function(a) {
                        return this.addContent(a, "last");
                    },
                    appendTo: function(a) {
                        return this._placeMultiple(a, "last");
                    },
                    prepend: function(a) {
                        return this.addContent(a, "first");
                    },
                    prependTo: function(a) {
                        return this._placeMultiple(a, "first");
                    },
                    after: function(a) {
                        return this.addContent(a, "after");
                    },
                    insertAfter: function(a) {
                        return this._placeMultiple(a, "after");
                    },
                    before: function(a) {
                        return this.addContent(a, "before");
                    },
                    insertBefore: function(a) {
                        return this._placeMultiple(a, "before");
                    },
                    remove: e.prototype.orphan,
                    wrap: function(a) {
                        if (this[0]) {
                            a = k(a, this[0]);
                            for (var d = 0, c; c = this[d]; d++) {
                                var e = this._cloneNode(a);
                                c.parentNode && c.parentNode.replaceChild(e, c);
                                b(e).appendChild(c);
                            }
                        }
                        return this;
                    },
                    wrapAll: function(a) {
                        if (this[0]) {
                            a = k(a, this[0]);
                            this[0].parentNode.replaceChild(a, this[0]);
                            a = b(a);
                            for (var d = 0, c; c = this[d]; d++) a.appendChild(c);
                        }
                        return this;
                    },
                    wrapInner: function(a) {
                        if (this[0]) {
                            a = k(a, this[0]);
                            for (var b = 0; b < this.length; b++) {
                                var c = this._cloneNode(a);
                                this._wrap(h._toArray(this[b].childNodes), null, this._NodeListCtor).wrapAll(c);
                            }
                        }
                        return this;
                    },
                    replaceWith: function(a) {
                        a = this._normalize(a, this[0]);
                        for (var b = 0, c; c = this[b]; b++) this._place(a, c, "before", 0 < b), c.parentNode.removeChild(c);
                        return this;
                    },
                    replaceAll: function(a) {
                        a = m(a);
                        for (var b = this._normalize(this, this[0]), c = 0, d; d = a[c]; c++) this._place(b, d, "before", 0 < c), d.parentNode.removeChild(d);
                        return this;
                    },
                    clone: function() {
                        for (var a = [], b = 0; b < this.length; b++) a.push(this._cloneNode(this[b]));
                        return this._wrap(a, this, this._NodeListCtor);
                    }
                });
                e.prototype.html || (e.prototype.html = e.prototype.innerHTML);
                return e;
            });
        },
        "url:mojo/signup-forms/templates/modal.html": '\x3cdiv\x3e\n    \x3c!-- MC BANNER --\x3e\n    \x3cdiv class\x3d"mc-banner" data-dojo-attach-point\x3d"bannerContainer"\x3e\n        \x3cdiv class\x3d"mc-layout__bannerContent"\x3e\n            \x3ciframe src\x3d"about:blank" frameborder\x3d"0" marginwidth\x3d"0" marginheight\x3d"0" scrolling\x3d"no" src\x3d"about:blank" style\x3d"width:100%;" data-dojo-attach-point\x3d"iframeBannerContainer"\x3e\x3c/iframe\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\n    \x3c!-- MC MODAL --\x3e\n    \x3cdiv class\x3d"mc-modal" data-dojo-attach-point\x3d"modalContainer"\x3e\n        \x3cdiv class\x3d"mc-closeModal" style\x3d"display:block !important;" data-action\x3d"close-mc-modal" data-dojo-attach-point\x3d"modalClose"\x3e\x3c/div\x3e\n        \x3cdiv class\x3d"mc-layout__modalContent"\x3e\n            \x3ciframe src\x3d"about:blank" frameborder\x3d"0" marginwidth\x3d"0" marginheight\x3d"0" src\x3d"about:blank" style\x3d"width:100%;" data-dojo-attach-point\x3d"iframeModalContainer"\x3e\x3c/iframe\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\n    \x3c!-- MC MODAL OVERLAY --\x3e\n    \x3cdiv class\x3d"mc-modal-bg" data-dojo-attach-point\x3d"modalOverlay"\x3e\x3c/div\x3e\n\x3c/div\x3e\n',
        "url:mojo/widgets/badges/templates/textBadge.html": '\x3cdiv class\x3d"content__monkeyRewards"\x3e\n    \x3ca data-dojo-attach-point\x3d"monkeyRewardsLink" href\x3d"" target\x3d"_blank"\x3e\n        Made with Mailchimp\n    \x3c/a\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/templates/form.html": '\x3cdiv class\x3d"modalContent"\x3e\n    \x3cdiv class\x3d"flash-block" data-dojo-attach-point\x3d"formResponseMessages"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"modalContent__content" data-dojo-attach-point\x3d"formContentContainer"\x3e\n        \n        \x3c!-- Title \x26 Description - Holds HTML from CK editor --\x3e\n        \x3cdiv class\x3d"content__titleDescription"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"descriptionContainer"\x3e\x3c/div\x3e\n            \x3cdiv class\x3d"content__fixedBadge" data-dojo-attach-point\x3d"fixedBadge"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n\n        \x3c!-- Form Fields --\x3e\n\t\t\x3cform action\x3d"${subscribeUrl}" accept-charset\x3d"UTF-8" method\x3d"post" enctype\x3d"multipart/form-data" data-dojo-attach-point\x3d"formNode" novalidate\x3e\n\t\t\t\x3cdiv class\x3d"content__formFields" data-dojo-attach-point\x3d"formFieldsContainer"\x3e\x3c/div\x3e\n\t\t    \x3cdiv class\x3d"content__button"\x3e\n\t\t        \x3cinput class\x3d"button" type\x3d"submit" value\x3d"${buttonLabel}" data-dojo-attach-point\x3d"submitButton"/\x3e\n\t\t    \x3c/div\x3e\n\t\t\x3c/form\x3e\n\n        \x3c!-- Footer - Holds HTML from CK editor --\x3e\n        \x3cdiv class\x3d"content__footer" data-dojo-attach-point\x3d"footerContainer"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"modalContent__image" data-dojo-attach-point\x3d"formImageContainer"\x3e\x3c/div\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/templates/gdprBlock.html": '\x3cdiv class\x3d"content__gdprBlock"\x3e\n    \x3cdiv class\x3d"content__gdpr"\x3e\n        \x3clabel\x3e${gdprLabel}\x3c/label\x3e\n        \x3cp\x3e${gdprDescription}\x3c/p\x3e\n        \x3cdiv data-dojo-attach-point\x3d"gdprFormResponseMessages"\x3e\x3c/div\x3e\n        \x3cul class\x3d"content__gdprFields" data-dojo-attach-point\x3d"gdprFieldsContainer"\x3e\x3c/ul\x3e\n        \x3cp\x3e${gdprLegal}\x3c/p\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"content__gdprLegal"\x3e\n        \x3ca href\x3d"https://www.mailchimp.com/gdpr" target\x3d"_blank"\x3e\x3cimg src\x3d"https://cdn-images.mailchimp.com/icons/mailchimp-gdpr.svg" alt\x3d"GDPR" /\x3e\x3c/a\x3e\n        \x3cp data-dojo-attach-point\x3d"gdprMcLegalContainer"\x3e\x3c/p\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n',
        "url:mojo/signup-forms/inputs/templates/Text.html": '\x3cdiv class\x3d"field-wrapper"\x3e\n\t\x3clabel for\x3d"mc-${name}"\x3e${label}\x3c/label\x3e\n\t\x3cinput type\x3d"text" name\x3d"${name}" value\x3d"" id\x3d"mc-${name}" /\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Popup/Address.html": '\x3cdiv class\x3d"field-wrapper address"\x3e\n    \x3cdiv\x3e\n        \x3clabel for\x3d"mc-${name}-addr1"\x3e${label}\x3c/label\x3e\n        \x3cdiv class\x3d"helpText" data-dojo-attach-point\x3d"placeholderNode"\x3e\x3c/div\x3e\n        \x3cinput class\x3d"address1" type\x3d"text" name\x3d"${name}[addr1]" value\x3d"" id\x3d"mc-${name}-addr1" data-dojo-attach-point\x3d"address1Node" /\x3e\n    \x3c/div\x3e\n    \x3cdiv\x3e\n        \x3clabel for\x3d"mc-${name}-addr2"\x3eAddress Line 2\x3c/label\x3e\n        \x3cinput class\x3d"address2" type\x3d"text" name\x3d"${name}[addr2]" value\x3d"" id\x3d"mc-${name}-addr2" /\x3e\n    \x3c/div\x3e\n    \x3cdiv\x3e\n        \x3clabel for\x3d"mc-${name}-city"\x3eCity\x3c/label\x3e\n        \x3cinput class\x3d"city" type\x3d"text" name\x3d"${name}[city]" value\x3d"" id\x3d"mc-${name}-city" data-dojo-attach-point\x3d"cityNode" /\x3e\n    \x3c/div\x3e\n    \x3cdiv\x3e\n        \x3clabel for\x3d"mc-${name}-state"\x3eState/Province/Region\x3c/label\x3e\n        \x3cinput class\x3d"state" type\x3d"text" name\x3d"${name}[state]" value\x3d"" id\x3d"mc-${name}-state" data-dojo-attach-point\x3d"stateNode" /\x3e\n    \x3c/div\x3e\n    \x3cdiv\x3e\n        \x3clabel for\x3d"mc-${name}-zip"\x3ePostal / Zip Code\x3c/label\x3e\n        \x3cinput class\x3d"zip" type\x3d"text" name\x3d"${name}[zip]" value\x3d"" id\x3d"mc-${name}-zip" data-dojo-attach-point\x3d"zipNode" /\x3e\n    \x3c/div\x3e\n    \x3cdiv\x3e\n        \x3clabel for\x3d"mc-${name}-country"\x3eCountry\x3c/label\x3e\n        \x3c!-- TODO: Is there a formatting option for which country should be top of the list? --\x3e\n        \x3cselect class\x3d"country" name\x3d"${name}[country]" id\x3d"mc-${name}-country" data-dojo-attach-point\x3d"countrySelectNode"\x3e\n            \x3coption value\x3d"" selected\x3e\x3c/option\x3e\n            \x3coption value\x3d"164"\x3eUSA\x3c/option\x3e\n        \x3c/select\x3e\n    \x3c/div\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Email.html": '\x3cdiv class\x3d"field-wrapper email-field"\x3e\n    \x3clabel for\x3d"mc-${name}"\x3e${label}\x3c/label\x3e\n    \x3cinput type\x3d"email" name\x3d"${name}" value\x3d"" id\x3d"mc-${name}" data-dojo-attach-point\x3d"emailInput"/\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Birthday.html": '\x3cdiv class\x3d"field-wrapper birthday"\x3e\n\t\x3clabel for\x3d"mc-${name}-month"\x3e${label}\x3c/label\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"inputsContainer"\x3e \n        \x3cinput class\x3d"birthday-month" type\x3d"text" placeholder\x3d"MM" maxlength\x3d"2" name\x3d"${name}[month]" value\x3d"" id\x3d"mc-${name}-month" data-dojo-attach-point\x3d"monthNode" /\x3e\n        \x3cinput class\x3d"birthday-day" type\x3d"text" placeholder\x3d"DD" maxlength\x3d"2" name\x3d"${name}[day]" value\x3d"" id\x3d"mc-${name}-day" data-dojo-attach-point\x3d"dayNode" /\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Date.html": '\x3cdiv class\x3d"field-wrapper date"\x3e\n\t\x3clabel for\x3d"mc-${name}-month"\x3e${label}\x3c/label\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"inputsContainer"\x3e\n\t\t\x3cinput class\x3d"date-year" type\x3d"text" maxlength\x3d"4" placeholder\x3d"YYYY" name\x3d"${name}[year]" value\x3d"" id\x3d"mc-${name}-year" data-dojo-attach-point\x3d"yearNode" /\x3e\n\t\t\x3cinput class\x3d"date-month" type\x3d"text" maxlength\x3d"2" placeholder\x3d"MM" name\x3d"${name}[month]" value\x3d"" id\x3d"mc-${name}-month" data-dojo-attach-point\x3d"monthNode" /\x3e\n\t\t\x3cinput class\x3d"date-day" type\x3d"text" maxlength\x3d"2" placeholder\x3d"DD" name\x3d"${name}[day]" value\x3d"" id\x3d"mc-${name}-day" data-dojo-attach-point\x3d"dayNode" /\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Phone.html": '\x3cdiv class\x3d"field-wrapper phone"\x3e\n\t\x3clabel for\x3d"mc-${name}-area"\x3e${label}\x3c/label\x3e\n    \x3cdiv\x3e\n        \x3cinput class\x3d"phone-area" type\x3d"text" maxlength\x3d"3" placeholder\x3d"###" name\x3d"${name}[area]" value\x3d"" id\x3d"mc-${name}-area" data-dojo-attach-point\x3d"phoneAreaNode" /\x3e\n        \x3cinput class\x3d"phone-detail1" type\x3d"text" maxlength\x3d"3" placeholder\x3d"###" name\x3d"${name}[detail1]" value\x3d"" id\x3d"mc-${name}-detail1" data-dojo-attach-point\x3d"phoneDetail1Node" /\x3e\n       \t\x3cinput class\x3d"phone-detail2" type\x3d"text" maxlength\x3d"4" placeholder\x3d"####" name\x3d"${name}[detail2]" value\x3d"" id\x3d"mc-${name}-detail2" data-dojo-attach-point\x3d"phoneDetail2Node" /\x3e\n    \x3c/div\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Number.html": '\x3cdiv class\x3d"field-wrapper"\x3e\n\t\x3clabel for\x3d"mc-${name}"\x3e${label}\x3c/label\x3e\n\t\x3cinput type\x3d"text" name\x3d"${name}" value\x3d"" id\x3d"mc-${name}" /\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Url.html": '\x3cdiv class\x3d"field-wrapper"\x3e\n\t\x3clabel for\x3d"mc-${name}"\x3e${label}\x3c/label\x3e\n\t\x3cinput type\x3d"text" placeholder\x3d"http://" name\x3d"${name}" value\x3d"" id\x3d"mc-${name}" /\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/Popup/RadioCheckbox.html": '\x3cdiv class\x3d"field-wrapper radio-group"\x3e\n    \x3clabel for\x3d"mc-${name}"\x3e${label}\x3c/label\x3e\n    \x3cdiv class\x3d"helpText" data-dojo-attach-point\x3d"placeholderNode"\x3e\x3c/div\x3e\n    \x3cul class\x3d"radioCheckboxContainer" data-dojo-attach-point\x3d"choicesContainer"\x3e\x3c/ul\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/inputs/templates/GdprCheckbox.html": '\x3cli class\x3d"field-wrapper !margin-bottom--lv2"\x3e\n\t\x3clabel class\x3d"checkbox" for\x3d"gdpr-${marketing_preference_id}"\x3e\n\t\t\t\x3cinput type\x3d"checkbox" id\x3d"gdpr-${marketing_preference_id}" name\x3d"${name}" data-dojo-attach-point\x3d"choicesContainer" /\x3e\n\t\t\t\x3cspan\x3e${label}\x3c/span\x3e\n\t\x3c/label\x3e\n\x3c/li\x3e\n',
        "url:mojo/signup-forms/inputs/templates/Select.html": '\x3cdiv class\x3d"field-wrapper"\x3e\n\t\x3clabel for\x3d"mc-${name}"\x3e${label}\x3c/label\x3e\n\t\x3cselect name\x3d"${name}" id\x3d"mc-${name}" data-dojo-attach-point\x3d"choicesContainer"\x3e\x3c/select\x3e\n\x3c/div\x3e',
        "url:mojo/signup-forms/templates/banner.html": '\x3cdiv class\x3d"bannerContent" data-dojo-attach-point\x3d"bannerContainer"\x3e\n    \x3c!-- Banner close button --\x3e\n    \x3cdiv class\x3d"bannerContent__closeButton" data-dojo-attach-point\x3d"modalOpen"\x3e\x3c/div\x3e\n    \x3c!-- Description text from CK editor --\x3e\n    \x3cdiv class\x3d"bannerContent__description" data-dojo-attach-point\x3d"bannerDescription"\x3e${description}\x3c/div\x3e\n    \x3c!-- Banner open full modal --\x3e\n    \x3cdiv class\x3d"bannerContent__buttonContainer"\x3e\n        \x3cbutton class\x3d"button bannerContent__subscribeButton" data-dojo-attach-point\x3d"bannerClose"\x3e${subscribeLabel}\x3c/button\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'
    }
});
dojoDefine("mojo/signup-forms/popup", [], 1);