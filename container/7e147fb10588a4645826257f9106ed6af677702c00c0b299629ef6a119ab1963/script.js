((global, factory) => {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : (global.reframe = factory());
})(this, () => {
  function reframe(target, cName) {
    let frames =
      typeof target === "string" ? document.querySelectorAll(target) : target;
    const c = cName || "js-reframe";
    if (!("length" in frames)) frames = [frames];

    for (const frame of frames) {
      const hasClass = frame.className.split(" ").indexOf(c) !== -1;
      if (hasClass) return;
      const hAttr = frame.getAttribute("height");
      const wAttr = frame.getAttribute("width");
      if (wAttr.indexOf("%") > -1 || frame.style.width.indexOf("%") > -1)
        return;
      const h = hAttr ? hAttr : frame.offsetHeight;
      const w = wAttr ? wAttr : frame.offsetWidth;
      const padding = (h / w) * 100;
      const div = document.createElement("div");
      div.className = c;
      const divStyles = div.style;
      divStyles.position = "relative";
      divStyles.width = "100%";
      divStyles.paddingTop = `${padding}%`;
      const frameStyle = frame.style;
      frameStyle.position = "absolute";
      frameStyle.width = "100%";
      frameStyle.height = "100%";
      frameStyle.left = "0";
      frameStyle.top = "0";
      frame.parentNode.insertBefore(div, frame);
      frame.parentNode.removeChild(frame);
      div.appendChild(frame);
    }
  }

  return reframe;
});

reframe("iframe");
