/*! 20211221-3-RELEASE */

((e, t, o) => {
  const n = {
      "popover.content.approval":
        "We will try not to show you this content anymore.",
      "popover.content.questionnaire.options.misleading": "Misleading",
      "popover.content.questionnaire.options.offensive": "Offensive",
      "popover.content.questionnaire.options.other": "Other",
      "popover.content.questionnaire.options.racy": "Vulgar/Racy",
      "popover.content.questionnaire.options.repetitive": "Repetitive",
      "popover.content.questionnaire.options.uninteresting": "Uninteresting",
      "popover.content.questionnaire.tellUsWhy": "Tell us why?",
      "popover.title.removed": "Removed!",
      "popover.title.scRemoved": "Sponsored link removed",
      "popover.title.thankYou": "Thank You!",
      "removeBtn.title": "Remove this item",
      "undoBtn.label": "Undo",
    },
    r = 8e3,
    i = 4e3;
  let s,
    a,
    c = !0,
    d = -1;

  function p(e) {
    const t = e.which || e.keyCode;
    27 === t && W();
  }

  function l(e) {
    const t = e.target || e.srcElement;
    o.dom.isAncestor(o.userX.popover, t, !0) || W();
  }

  function u(e) {
    return `.trc_user_exclude_btn { background: url("//cdn.taboola.com/libtrc/static/thumbnails/f539211219b796ffbb49949997c764f0.png") no-repeat scroll 0 0 transparent; width: 12px; height: 12px; position: absolute; right: 2px; top: 2px; z-index: 9000; cursor: pointer; visibility: hidden; }.trc_undo_btn { font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 14px; font-weight: normal; color: #3366CC; text-decoration: underline; cursor: pointer; position: absolute; right: 2px; top: 2px; padding: 0 1px; z-index: 11000; visibility: hidden; }.videoCube:hover .trc_user_exclude_btn,.videoCube_hover .trc_user_exclude_btn,.trc_user_excluded.videoCube:hover .trc_undo_btn,.trc_user_excluded.videoCube_hover .trc_undo_btn,.trc_undo_btn.trc_anchor { visibility: visible; }.videoCube.trc_user_excluded .trc_user_exclude_btn { visibility: hidden; }.trc_fade { opacity: 0; filter: alpha(opacity=0); visibility: hidden; -webkit-transition: opacity 500ms 0s, visibility 0s 500ms; -moz-transition: opacity 500ms 0s, visibility 0s 500ms; -ms-transition: opacity 500ms 0s, visibility 0s 500ms; -o-transition: opacity 500ms 0s, visibility 0s 500ms; transition: opacity 500ms 0s, visibility 0s 500ms; }.trc_fade.trc_in,.trc_user_excluded .trc_exclude_overlay { visibility: visible; opacity: 1; filter: alpha(opacity=100); -webkit-transition-delay: 0s, 0s; -moz-transition-delay: 0s, 0s; -ms-transition-delay: 0s, 0s; -o-transition-delay: 0s, 0s; transition-delay: 0s, 0s; }.trc_excludable .trc_exclude_overlay { position: absolute; z-index: 10000; top: 0; left: 0; width: 100%; height: 100%; cursor: default; background-color: white; /* this is to make elements from underneath this overlay unclickable in IE */ }.videoCube.trc_user_excluded .trc_exclude_overlay { visibility: visible; opacity: 0.8; filter: alpha(opacity=80); }.videoCube.trc_user_excluded .thumbBlock { filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0' /></filter></svg>#grayscale"); filter: gray; -webkit-filter: grayscale(100%); }.videoCube.trc_user_excluded:hover a .video-label-box .video-title,.videoCube_hover.trc_user_excluded a .video-label-box .video-title { text-decoration: none; }.videoCube.trc_user_excluded a .video-label-box *,.videoCube.trc_user_excluded:hover a .video-label-box *,.videoCube_hover.trc_user_excluded a .video-label-box * { color: #000000; overflow: hidden; /* fixes a bug in IE7 - opacity does not work with overflow: visible */ -webkit-transition: color 500ms 0s; -moz-transition: color 500ms 0s; -ms-transition: color 500ms 0s; -o-transition: color 500ms 0s; transition: color 500ms 0s; }\n                .trc_popover_aug_container { position: static; }${e}.trc_popover { position: absolute; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 16px; color: #000000; cursor: default; top: 0; right: 0; z-index: 12000; width: 180px; padding: 1px; text-align: left; white-space: normal; background-color: #ffffff; border: 1px solid rgba(0, 0, 0, 0.2); -webkit-border-radius: 6px; -moz-border-radius: 6px; -ms-border-radius: 6px; -o-border-radius: 6px; border-radius: 6px; -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -ms-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -o-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -webkit-background-clip: padding-box; -moz-background-clip: padding-box; -ms-background-clip: padding-box; -o-background-clip: padding-box; background-clip: padding-box; -moz-background-clip: padding; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; -ms-box-sizing: content-box; -o-box-sizing: content-box; box-sizing: content-box; } ${e}.trc_popover.trc_bottom { margin-top: 10px; } ${e}.trc_popover.trc_bottom .trc_popover_arrow { top: -11px; right: 11px; margin-left: -11px; border-bottom-color: #999; border-bottom-color: rgba(0, 0, 0, 0.25); border-top-width: 0; } ${e}.trc_popover.trc_bottom .trc_popover_arrow:after { top: 1px; margin-left: -10px; border-bottom-color: #ffffff; border-top-width: 0; } ${e}.trc_popover iframe { width: 100%; } ${e}.trc_popover .trc_popover_arrow, ${e}.trc_popover .trc_popover_arrow:after { position: absolute; display: block; width: 0; height: 0; border: solid transparent; } ${e}.trc_popover .trc_popover_arrow { border-width: 11px; } ${e}.trc_popover .trc_popover_arrow:after { border-width: 10px; content: ""; }${e}.trc_popover_fade { visibility: hidden; opacity: 0; filter: alpha(opacity=0); -webkit-transition: opacity 500ms 0s, visibility 0s 500ms; -moz-transition: opacity 500ms 0s, visibility 0s 500ms; -ms-transition: opacity 500ms 0s, visibility 0s 500ms; -o-transition: opacity 500ms 0s, visibility 0s 500ms; transition: opacity 500ms 0s, visibility 0s 500ms; } ${e}.trc_popover_fade.trc_in { visibility: visible; opacity: 1; filter: alpha(opacity=100); -webkit-transition-delay: 0s, 0s; -moz-transition-delay: 0s, 0s; -ms-transition-delay: 0s, 0s; -o-transition-delay: 0s, 0s; transition-delay: 0s, 0s; }`;
  }

  function m() {
    return `html { overflow: hidden; }body { display: inline-block; width: 100%; margin: 0; padding: 0; }\n                ${v()}`;
  }

  function v() {
    return `.popupContentWrapper { font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 12px; color: #000000; } .popupContentWrapper .trc_popover_title_wrapper { padding: 8px 14px; margin: 0; font-weight: bold; background-color: #f7f7f7; border-bottom: 1px solid #ebebeb; -webkit-border-radius: 5px 5px 0 0; -moz-border-radius: 5px 5px 0 0; -ms-border-radius: 5px 5px 0 0; -o-border-radius: 5px 5px 0 0; border-radius: 5px 5px 0 0; } .popupContentWrapper .trc_popover_title { width: 100%; display: inline-block; vertical-align: middle; } .popupContentWrapper .trc_popover_title_text { float: left; } .popupContentWrapper .trc_popover_content_wrapper { display: inline-block; float: left; padding: 9px 14px; } .popupContentWrapper .trc_popover_content_wrapper .trc_question_container label { float: left; clear: left; width: 100%; cursor: pointer; line-height: 20px; text-align: left; } .popupContentWrapper .trc_popover_content { width: 100%; } .popupContentWrapper .trc_question_container .trc_question_title { margin: 0 0 3px; } .popupContentWrapper .trc_question_container input[type=radio] { float: left; cursor: pointer; margin: 3px 4px 0 5px; } .popupContentWrapper .trc_question_container_ie.trc_question_container input[type=radio] { margin: 0 2px 0 0; }`;
  }

  function b(n) {
    TRC.tlf && console.time("init userx");
    const r = o.dom.createAugmentingContainers(3, null),
      i = o.dom.generateAugmentationPrefix(r),
      a = n.global["taboola-choice-use-iframe"],
      p = n.global["taboola-choice-auto-detect-iframe"];
    c = TRC.util.isTrue(a) || void 0 === a;
    const l = TRC.util.isTrue(p) || void 0 === p;
    c && l && TRC.dom.isInIframe(!0) && (c = !1),
      r.forEach((e) => (e.className = "trc_popover_aug_container")),
      ([o.userX.mainPopoverContainer] = r),
      t.body.appendChild(o.userX.mainPopoverContainer),
      n.cssLiteInject && !n.global["css-isolation"]
        ? o.dom.aggregateStyles(u(i))
        : o.dom.injectStyle(u(i), t),
      (d = TRC.util.parseTimeout(n.global["defer-userx-render"])),
      (o.userX.popover = y(r[2], n)),
      TRC.dom.on(e, "resize", $),
      (s = TRC.translationManager.getLabel({
        feature: "userx",
      })),
      (o.userX.isInitialized = !0),
      TRC.tlf && console.timeEnd("init userx");
  }

  function f() {
    const { mainPopoverContainer: e } = o.userX;
    e && e.parentNode && e.parentNode.removeChild(e),
      (o.userX.isInitialized = !1);
  }

  function _(e) {
    e.boxes.forEach((e) => {
      -1 === d ? x(e) : setTimeout(() => x(e), d);
    });
  }

  function x(e) {
    if (!e.hasFloatingButton) {
      e.hasFloatingButton = !0;
      const n = t.trcGetCurrentStyle(e, "position"),
        r = t.createElement("div"),
        i = t.createElement("div"),
        a = t.createElement("div");
      (n && "static" !== n) || (e.style.position = "relative"),
        o.dom.addClass(r, "trc_user_exclude_btn"),
        r.setAttribute("title", s["removeBtn.title"]),
        (r.onclick = function (t) {
          D(t, e);
        }.trcBind(e.rbox)),
        e.appendChild(r),
        o.dom.addClass(a, "trc_exclude_overlay trc_fade"),
        e.appendChild(a),
        o.dom.addClass(i, "trc_undo_btn"),
        (i.innerHTML = s["undoBtn.label"]),
        (i.onclick = function (t) {
          S(t, e);
        }.trcBind(this)),
        e.appendChild(i),
        o.dom.addClass(e, "trc_excludable");
    }
  }

  function h(e) {
    const t = document.createElement("iframe");
    return (
      (t.frameBorder = t.border = "0"),
      (t.scrolling = "no"),
      (t.src = "javascript:void(0)"),
      (t.style.width = "100%"),
      e.appendChild(t)
    );
  }

  function g(e, t, o) {
    const n = e.contentDocument ? e.contentDocument : e.contentWindow.document;
    n.write(t),
      setTimeout(() => {
        try {
          n.close(), o && o();
        } catch (e) {}
      }, 0);
  }

  function y(e) {
    const n = t.createElement("div"),
      r = t.createElement("div");
    return (
      o.dom.addClass(n, "trc_popover trc_popover_fade trc_bottom"),
      o.dom.addClass(r, "trc_popover_arrow"),
      n.appendChild(r),
      e.appendChild(n),
      o.dom.on(t, "keyup", p),
      o.dom.on(t, "click", l),
      o.dom.on(n, "mouseover", I),
      o.dom.on(n, "mouseout", A),
      c ? w.renderIFrame(n) : w.renderElement(n),
      n
    );
  }
  (TRC._translationQueue = TRC._translationQueue || []),
    TRC._translationQueue.push({
      userx: n,
    });
  const w = {
    renderElement: (e) => {
      (e.innerHTML += k()),
        (e.trcContentElement = e.querySelector(".popupContentWrapper")),
        (e.trcContentDoc = t),
        o.dom.injectStyle(v(), t);
    },
    renderIFrame: (e) => {
      const t = h(e);
      e.trcContentIFrame = t;
      try {
        e.trcContentDoc = t.contentDocument || t.contentWindow.document;
      } catch (e) {
        return void __trcError(
          "User X popup choice failed to render inside an iFrame.",
          e
        );
      }
      g(t, T(), () => {
        const e = t.contentDocument || t.contentWindow.document;
        (e.TRC = o), o.dom.injectStyle(m(), e);
      });
    },
  };

  function C() {
    const e = "<" + "script>",
      t = "<" + "/script>";
    let o = "";
    return (
      document.domain !== location.hostname &&
        (o += `${e}\n                        document.domain='${document.domain}';\n                     ${t}`),
      (o += `${e}\n                    document.head = document.head || document.getElementsByTagName('head')[0];\n                ${t}`)
    );
  }

  function T() {
    return `<!doctype html>\n                <body>\n                    ${C()}\n                    ${k()}\n                </body>`;
  }

  function k() {
    return `<div class="popupContentWrapper">\n                    <div class=" trc_popover_title_wrapper ">\n                        <div class=" trc_popover_title " id="trc_userx_popover_title">\n                            <span class=" trc_popover_title_text "></span>\n                        </div>\n                    </div>\n                    <div class=" trc_popover_content_wrapper ">\n                        <div id="trc_userx_popover_content" class=" trc_popover_content "></div>\n                    </div>\n                </div>`;
  }

  function E(e, t, n) {
    const { popover: r } = o.userX;
    (e = e || r.videoCube),
      r.anchor && o.dom.removeClass(r.anchor, "trc_anchor"),
      (r.videoCube = e),
      c &&
        (r.trcContentIFrame.style.height = `${r.trcContentDoc.body.offsetHeight}px`),
      o.dom.addClass(r, "trc_in"),
      (t = t || e),
      (r.anchor = t),
      9 === o.Browser.ie && (r.style.display = "block"),
      X(),
      I(),
      n && (a = new L(W, n)),
      (r.isVisible = !0);
  }

  function W() {
    const { popover: e } = o.userX;
    o.dom.removeClass(e, "trc_in"),
      e.anchor && o.dom.removeClass(e.anchor, "trc_anchor"),
      9 === o.Browser.ie && (e.style.display = "none"),
      (e.isVisible = !1),
      I();
  }

  function B(e) {
    const { popover: t } = o.userX,
      n = t.trcContentDoc.getElementById("trc_userx_popover_content");
    if (((n.innerHTML = ""), "string" != typeof e))
      try {
        n.appendChild(e);
      } catch (t) {
        n.innerHTML = e.outerHTML;
      }
    else n.innerHTML = e;
  }

  function R(e) {
    const { popover: t } = o.userX,
      n = t.trcContentDoc.getElementById("trc_userx_popover_title");
    n.innerHTML = e;
  }

  function z(e) {
    const t = {},
      n = function (e) {
        let t = 0;
        if ("string" == typeof e && null !== e && "" !== e) {
          const o = e.indexOf("px");
          t = o >= 0 ? parseInt(e.substring(0, o), 10) : 1;
        }
        return t;
      },
      r = function (e) {
        const t = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        };
        if (window.getComputedStyle) {
          const o = window.getComputedStyle(e, null);
          (t.left = parseInt(o.borderLeftWidth.slice(0, -2), 10)),
            (t.top = parseInt(o.borderTopWidth.slice(0, -2), 10)),
            (t.right = parseInt(o.borderRightWidth.slice(0, -2), 10)),
            (t.bottom = parseInt(o.borderBottomWidth.slice(0, -2), 10));
        } else
          (t.left = n(e.style.borderLeftWidth)),
            (t.top = n(e.style.borderTopWidth)),
            (t.right = n(e.style.borderRightWidth)),
            (t.bottom = n(e.style.borderBottomWidth));
        return t;
      };
    if (((t.x = 0), (t.y = 0), null !== e))
      if (e.getBoundingClientRect) {
        const n = document.documentElement,
          r = e.getBoundingClientRect(),
          i = o.Browser.ie,
          s =
            i || window.scrollX === n.scrollLeft || void 0 === window.scrollX
              ? n.scrollLeft
              : window.scrollX,
          a =
            i || window.scrollY === n.scrollTop || void 0 === window.scrollY
              ? n.scrollTop
              : window.scrollY;
        (t.x = r.left + s), (t.y = r.top + a);
      } else {
        (t.x = e.offsetLeft), (t.y = e.offsetTop);
        let { parentNode: n, offsetParent: i } = e,
          s = null;
        for (; null != i; ) {
          (t.x += i.offsetLeft), (t.y += i.offsetTop);
          const e = i.tagName.toLowerCase();
          if (
            ((o.Browser.firefoxAtleast(3) || o.Browser.chrome) &&
              "td" === e &&
              ((s = r(i)), (t.x += s.left), (t.y += s.top)),
            i !== document.body &&
              i !== document.documentElement &&
              ((t.x -= i.scrollLeft), (t.y -= i.scrollTop)),
            (!o.Browser.ie && !o.Browser.opera) || o.Browser.ieAtleast(8))
          )
            for (; i !== n && null !== n; )
              (t.x -= n.scrollLeft),
                (t.y -= n.scrollTop),
                (o.Browser.firefoxUpto(3) || o.Browser.webkit) &&
                  ((s = r(n)), (t.x += s.left), (t.y += s.top)),
                (n = n.parentNode);
          (n = i.parentNode), (i = i.offsetParent);
        }
      }
    return t;
  }

  function q(e, t, o, n) {
    return e.offsetWidth - t.x - o.offsetWidth / 2 - n.offsetWidth / 2;
  }

  function X() {
    const { popover: e } = o.userX,
      t =
        e &&
        e.videoCube &&
        e.videoCube.rbox.findElement(
          (e) => e.className.search("trc_popover_arrow") >= 0,
          e,
          "div"
        ),
      n = e && e.anchor;
    let r, i, s;
    n &&
      t &&
      (o.dom.addClass(n, "trc_anchor"),
      (i =
        (r = z(n)).x -
        e.offsetWidth +
        n.offsetWidth / 2 +
        t.clientLeft +
        t.offsetWidth / 2 +
        1),
      (s = r.y + n.offsetHeight),
      i < 0
        ? ((t.style.right = `${q(e, r, t, n)}px`), (i = 0))
        : (t.style.right = null),
      (e.style.left = `${i}px`),
      (e.style.top = `${s}px`));
  }

  function $() {
    const e = o.userX && o.userX.popover;
    e && e.isVisible && X();
  }

  function L(e, t) {
    let o,
      n,
      r = t;
    (this.pause = function () {
      clearTimeout(o), (r -= new Date() - n);
    }),
      (this.resume = function () {
        (n = new Date()), (o = setTimeout(e, r));
      }),
      this.resume();
  }

  function I() {
    a && a.pause && a.pause();
  }

  function A() {
    a && a.resume && a.resume();
  }

  function N() {
    const e = t.createElement("div"),
      n = t.createElement("div"),
      r = {
        uninteresting: s["popover.content.questionnaire.options.uninteresting"],
        misleading: s["popover.content.questionnaire.options.misleading"],
        offensive: s["popover.content.questionnaire.options.offensive"],
        repetitive: s["popover.content.questionnaire.options.repetitive"],
        racy: s["popover.content.questionnaire.options.racy"],
        other: s["popover.content.questionnaire.options.other"],
      };
    return (
      o.dom.addClass(e, "trc_question_container"),
      o.Browser.ie && o.dom.addClass(e, "trc_question_container_ie"),
      (n.innerHTML = s["popover.content.questionnaire.tellUsWhy"]),
      o.dom.addClass(n, "trc_question_title"),
      e.appendChild(n),
      Object.keys(r).forEach((o) => {
        const n = t.createElement("label"),
          i = t.createElement("input");
        i.setAttribute("type", "radio"),
          i.setAttribute("name", "excludeReason"),
          i.setAttribute("value", o),
          i.addEventListener("change", function (e) {
            (this.checked = !0),
              TRC.userX.explainExclude(e, TRC.userX.popover.videoCube, 400);
          });
        const s = t.createElement("span");
        (s.innerText = r[o]),
          n.appendChild(i),
          n.appendChild(s),
          e.appendChild(n);
      }),
      e
    );
  }

  function M(e) {
    const t = e && e.video_data,
      o = {};
    return t
      ? ((o.ii = t && t["item-id"]),
        (o.prt = "rc"),
        t["is-syndicated"] && (o.prt = "sc"),
        t["is-in-network"] && (o.prt = "nt"),
        t["is-native"] && (o.prt = "nav"),
        (o.p = t.publisher || ""),
        TRC.pageManager.getValue("past-exclusions") &&
          (o.px = TRC.pageManager.getValue("past-exclusions")),
        o)
      : (__trcWarn(
          "No video data have been found for user exclude event request params. aborting."
        ),
        !1);
  }

  function D(e, t) {
    e = e || event;
    const n = M(t);
    return (t && "true" === t.getAttribute("data-excluded")) || !n
      ? (__trcDebug("No recommendation to exclude. Not sending exclude event."),
        o.dom.stopEvent(e))
      : (t.rbox.sendEvent("exclude", n, null, !1), H(t), o.dom.stopEvent(e));
  }

  function H(e) {
    const t = e.rbox.findElement(
        (e) => e.className.search("trc_undo_btn") >= 0,
        e,
        "div"
      ),
      n =
        e && e.video_data["is-syndicated"]
          ? s["popover.title.scRemoved"]
          : s["popover.title.removed"];
    (o.userX.popover.videoCube = e),
      o.pageManager.storeValue("past-exclusions", 1),
      R(n),
      B(N()),
      E(e, t, r),
      e.setAttribute("data-excluded", "true"),
      o.dom.addClass(e, "trc_user_excluded");
  }

  function S(e, t) {
    e = e || event;
    const n = M(t);
    return t && t.getAttribute("data-excluded") && n
      ? (t.rbox.sendEvent("excludeundo", n, null, !1), F(t), o.dom.stopEvent(e))
      : (__trcDebug(
          "No recommendation to unexclude. Not sending exclude-undo event."
        ),
        o.dom.stopEvent(e));
  }

  function F(e) {
    e.removeAttribute("data-excluded"),
      o.dom.removeClass(e, "trc_user_excluded"),
      W();
  }

  function U(e, t, o) {
    const n = (e = e || event).target || e.srcElement,
      r = M(t);
    I(),
      t && t.getAttribute("data-excluded") && r
        ? ((r.xr = n.getAttribute("value")),
          t.rbox.sendEvent("excludeexplain", r, null, !1))
        : __trcDebug(
            "No recommendation exclude to explain. Not sending exclude-explain event."
          ),
      o
        ? setTimeout(() => {
            P();
          }, o)
        : P();
  }

  function P() {
    const { popover: e } = o.userX,
      t = o.Browser.ieUpto(9) ? 0 : 250;
    W(),
      o.dom.addClass(e.anchor, "trc_anchor"),
      setTimeout(() => {
        R(s["popover.title.thankYou"]),
          B(s["popover.content.approval"]),
          E(e.videoCube, e.anchor, i);
      }, t);
  }
  (o.userX = {
    init: b,
    initForMode: _,
    explainExclude: U,
    reset: f,
    locale: "en",
    isInitialized: !1,
  }),
    window._trcIsUTactive && (o.userX.privateProps = w);
})(window, document, TRC);
