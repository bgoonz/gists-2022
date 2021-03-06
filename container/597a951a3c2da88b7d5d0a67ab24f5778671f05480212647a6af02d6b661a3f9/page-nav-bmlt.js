function getScript(e, t) {
  var n = document.getElementsByTagName("head")[0],
    r = false;
  var i = document.createElement("script");
  i.src = e;
  i.onload = i.onreadystatechange = function () {
    if (
      !r &&
      (!this.readyState ||
        this.readyState == "loaded" ||
        this.readyState == "complete")
    ) {
      r = true;
      t();
    }
  };
  n.appendChild(i);
}
function init() {
  $('<link type="text/css" rel="stylesheet">')
    .attr("href", cssUrl)
    .appendTo($("head"));
  $(
    '<div id="menuOverlay"><div id="menuInner"><div id="menuHeader"><a href="#" class="closeOverlay">×</a></div></div></div>'
  ).appendTo($(".content, div#main"));
  $.when(
    $.getJSON(url + params[0])
      .done(success_callback)
      .fail(fail_callback),
    $.getJSON(url + params[1])
      .done(success_callback)
      .fail(fail_callback),
    $.getJSON(url + params[2])
      .done(success_callback)
      .fail(fail_callback),
    $.getJSON(url + params[3])
      .done(success_callback)
      .fail(fail_callback)
  ).then(initEvents);
}
function initEvents() {
  $("a.modelLink").click(function (e) {
    e.preventDefault();
    var t = $(this).data("model"),
      n = $(this).attr("href").slice(1),
      r = $(this).parent().parent().data("bodystyle"),
      i = getPageType(window.location.pathname);
    if (i == "model" || i == "build") {
      procClick(n, t, r);
    } else {
      updateUrl(
        window.location.origin,
        "/mercedes/vehicles/model/class-" + n + "/model-" + t
      );
    }
  });
  $(".classLink a").click(function (e) {
    e.preventDefault();
    var t = $(this).data("model"),
      n = $(this).attr("href").slice(1),
      r = $(this).parent().parent().parent().find("h4").data("bodystyle");
    updateUrl(
      window.location.origin,
      "/mercedes/vehicles/class/class-" + n + "/bodystyle-" + r
    );
  });
  $(".closeOverlay").click(function (e) {
    e.preventDefault();
    $("#menuOverlay").remove();
  });
}
function success_callback(e) {
  console.log("success", e);
  var t = e.page_json_vehicles.contentGroups;
  var n = Handlebars.compile(nav_template);
  var r = n(e.page_json_vehicles);
  $($.parseHTML(r)).appendTo($("#menuInner"));
}
function fail_callback() {
  $('<p style="color:red;">Failed to load data! Try again.</p>').appendTo(
    $("#menuInner")
  );
}
function getPageType(e) {
  var t = /\/vehicles\/(class|model|build)\//;
  var n = t.exec(e);
  return n === null ? false : n[1];
}
function procClick(e, t, n) {
  var r = window.location.pathname,
    i = "";
  pageType = getPageType(r);
  if (pageType) {
    if (pageType == "model") {
      i = setClass(e, r);
      i = setModel(t, i);
    } else if (pageType == "build") {
      i = setClass(e, r);
      i = setModel(t, i);
    } else if (pageType == "class") {
      i = setClass(e, r);
      i = setBodystyle(n, i);
    }
    console.log("updateUrl", pageType, e, t, n);
    updateUrl(window.location.origin, i);
  } else {
    console.log("Page invalid");
    r = "/mercedes/vehicles/model/class-CLA/model-CLA250C";
    i = setClass(e, r);
    i = setModel(t, i);
    updateUrl(window.location.origin, i);
  }
}
function updateUrl(e, t) {
  window.location.href = e + t;
}
function setModel(e, t) {
  var n = /(.*)\/model-([\d\w]{3,8})\/?(.*)?/;
  var r = t.replace(n, "$1/model-" + e + "");
  return r;
}
function setClass(e, t) {
  var n = /(.*)\/class-(.*)\/(.*)?/;
  var r = t.replace(n, "$1/class-" + e + "/$3");
  return r;
}
function setBodystyle(e, t) {
  var n = /(.*)\/bodystyle-(CPE|SDN|WGN|CAB|SUV|RDS)(.*)?/;
  var r = t.replace(n, "$1/bodystyle-" + e + "$3");
  return r;
}
function getModel(e) {
  var t = /\/model-([\d\w]{3,8})\/?/;
  var n = t.exec(e);
  return n[1] || false;
}
function getClass(e) {
  var t = /\/class-(.*)\//;
  var n = t.exec(e);
  return n[1] || false;
}
function getBodystyle(e) {
  var t = /\/bodystyle-(CPE|SDN|WGN|CAB|SUV|RDS|EDV)\/?/;
  var n = t.exec(e);
  return n[1] || false;
}
var cssUrl = "https://rawgit.com/r-sal/9838615/raw/page-nav-styles.css",
  hbUrl =
    "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.2/handlebars.min.js",
  params = ["CPE", "SDN", "SUV_WGN", "CAB_RDS"],
  url = window.location.origin + "/mercedes/json/vehicles/bodystyle-";
window.nav_template = "";
nav_template += "";
nav_template += "{{#contentGroups}}";
nav_template += '<div class="bodystyle">';
nav_template += "   {{getBodystle body}}";
nav_template += "   ";
nav_template += "   {{#children}}";
nav_template += '   <div class="classNavWrap" data-class="{{id}}">';
nav_template +=
  '       <b class="classLink"><a href="#{{id}}">{{title}}</a></b>';
nav_template += "       {{#touts}}";
nav_template +=
  '           <a href="#{{../id}}" data-model="{{vehicle.id}}" class="modelLink">{{vehicle.name}}</a>';
nav_template += "       {{/touts}}";
nav_template += "   </div>";
nav_template += "{{/children}}";
nav_template += "</div>";
nav_template += "{{/contentGroups}}";
if (!window.jQuery) {
  (function (e, t) {
    function H(e) {
      var t = e.length,
        n = w.type(e);
      return w.isWindow(e)
        ? !1
        : 1 === e.nodeType && t
        ? !0
        : "array" === n ||
          ("function" !== n &&
            (0 === t || ("number" == typeof t && t > 0 && t - 1 in e)));
    }
    function j(e) {
      var t = (B[e] = {});
      return (
        w.each(e.match(S) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function q(e, n, r, i) {
      if (w.acceptData(e)) {
        var s,
          o,
          u = w.expando,
          a = e.nodeType,
          f = a ? w.cache : e,
          l = a ? e[u] : e[u] && u;
        if ((l && f[l] && (i || f[l].data)) || r !== t || "string" != typeof n)
          return (
            l || (l = a ? (e[u] = c.pop() || w.guid++) : u),
            f[l] || (f[l] = a ? {} : { toJSON: w.noop }),
            ("object" == typeof n || "function" == typeof n) &&
              (i
                ? (f[l] = w.extend(f[l], n))
                : (f[l].data = w.extend(f[l].data, n))),
            (o = f[l]),
            i || (o.data || (o.data = {}), (o = o.data)),
            r !== t && (o[w.camelCase(n)] = r),
            "string" == typeof n
              ? ((s = o[n]), null == s && (s = o[w.camelCase(n)]))
              : (s = o),
            s
          );
      }
    }
    function R(e, t, n) {
      if (w.acceptData(e)) {
        var r,
          i,
          s = e.nodeType,
          o = s ? w.cache : e,
          u = s ? e[w.expando] : w.expando;
        if (o[u]) {
          if (t && (r = n ? o[u] : o[u].data)) {
            w.isArray(t)
              ? (t = t.concat(w.map(t, w.camelCase)))
              : t in r
              ? (t = [t])
              : ((t = w.camelCase(t)), (t = t in r ? [t] : t.split(" "))),
              (i = t.length);
            while (i--) delete r[t[i]];
            if (n ? !z(r) : !w.isEmptyObject(r)) return;
          }
          (n || (delete o[u].data, z(o[u]))) &&
            (s
              ? w.cleanData([e], !0)
              : w.support.deleteExpando || o != o.window
              ? delete o[u]
              : (o[u] = null));
        }
      }
    }
    function U(e, n, r) {
      if (r === t && 1 === e.nodeType) {
        var i = "data-" + n.replace(I, "-$1").toLowerCase();
        if (((r = e.getAttribute(i)), "string" == typeof r)) {
          try {
            r =
              "true" === r
                ? !0
                : "false" === r
                ? !1
                : "null" === r
                ? null
                : +r + "" === r
                ? +r
                : F.test(r)
                ? w.parseJSON(r)
                : r;
          } catch (s) {}
          w.data(e, n, r);
        } else r = t;
      }
      return r;
    }
    function z(e) {
      var t;
      for (t in e)
        if (("data" !== t || !w.isEmptyObject(e[t])) && "toJSON" !== t)
          return !1;
      return !0;
    }
    function it() {
      return !0;
    }
    function st() {
      return !1;
    }
    function ot() {
      try {
        return o.activeElement;
      } catch (e) {}
    }
    function ct(e, t) {
      do e = e[t];
      while (e && 1 !== e.nodeType);
      return e;
    }
    function ht(e, t, n) {
      if (w.isFunction(t))
        return w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        });
      if (t.nodeType)
        return w.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (ut.test(t)) return w.filter(t, e, n);
        t = w.filter(t, e);
      }
      return w.grep(e, function (e) {
        return w.inArray(e, t) >= 0 !== n;
      });
    }
    function pt(e) {
      var t = dt.split("|"),
        n = e.createDocumentFragment();
      if (n.createElement) while (t.length) n.createElement(t.pop());
      return n;
    }
    function Mt(e, t) {
      return w.nodeName(e, "table") &&
        w.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function _t(e) {
      return (e.type = (null !== w.find.attr(e, "type")) + "/" + e.type), e;
    }
    function Dt(e) {
      var t = Ct.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function Pt(e, t) {
      var n,
        r = 0;
      for (; null != (n = e[r]); r++)
        w._data(n, "globalEval", !t || w._data(t[r], "globalEval"));
    }
    function Ht(e, t) {
      if (1 === t.nodeType && w.hasData(e)) {
        var n,
          r,
          i,
          s = w._data(e),
          o = w._data(t, s),
          u = s.events;
        if (u) {
          delete o.handle, (o.events = {});
          for (n in u)
            for (r = 0, i = u[n].length; i > r; r++) w.event.add(t, n, u[n][r]);
        }
        o.data && (o.data = w.extend({}, o.data));
      }
    }
    function Bt(e, t) {
      var n, r, i;
      if (1 === t.nodeType) {
        if (
          ((n = t.nodeName.toLowerCase()),
          !w.support.noCloneEvent && t[w.expando])
        ) {
          i = w._data(t);
          for (r in i.events) w.removeEvent(t, r, i.handle);
          t.removeAttribute(w.expando);
        }
        "script" === n && t.text !== e.text
          ? ((_t(t).text = e.text), Dt(t))
          : "object" === n
          ? (t.parentNode && (t.outerHTML = e.outerHTML),
            w.support.html5Clone &&
              e.innerHTML &&
              !w.trim(t.innerHTML) &&
              (t.innerHTML = e.innerHTML))
          : "input" === n && xt.test(e.type)
          ? ((t.defaultChecked = t.checked = e.checked),
            t.value !== e.value && (t.value = e.value))
          : "option" === n
          ? (t.defaultSelected = t.selected = e.defaultSelected)
          : ("input" === n || "textarea" === n) &&
            (t.defaultValue = e.defaultValue);
      }
    }
    function jt(e, n) {
      var r,
        s,
        o = 0,
        u =
          typeof e.getElementsByTagName !== i
            ? e.getElementsByTagName(n || "*")
            : typeof e.querySelectorAll !== i
            ? e.querySelectorAll(n || "*")
            : t;
      if (!u)
        for (u = [], r = e.childNodes || e; null != (s = r[o]); o++)
          !n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
      return n === t || (n && w.nodeName(e, n)) ? w.merge([e], u) : u;
    }
    function Ft(e) {
      xt.test(e.type) && (e.defaultChecked = e.checked);
    }
    function tn(e, t) {
      if (t in e) return t;
      var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;
      while (i--) if (((t = en[i] + n), t in e)) return t;
      return r;
    }
    function nn(e, t) {
      return (
        (e = t || e),
        "none" === w.css(e, "display") || !w.contains(e.ownerDocument, e)
      );
    }
    function rn(e, t) {
      var n,
        r,
        i,
        s = [],
        o = 0,
        u = e.length;
      for (; u > o; o++)
        (r = e[o]),
          r.style &&
            ((s[o] = w._data(r, "olddisplay")),
            (n = r.style.display),
            t
              ? (s[o] || "none" !== n || (r.style.display = ""),
                "" === r.style.display &&
                  nn(r) &&
                  (s[o] = w._data(r, "olddisplay", an(r.nodeName))))
              : s[o] ||
                ((i = nn(r)),
                ((n && "none" !== n) || !i) &&
                  w._data(r, "olddisplay", i ? n : w.css(r, "display"))));
      for (o = 0; u > o; o++)
        (r = e[o]),
          r.style &&
            ((t && "none" !== r.style.display && "" !== r.style.display) ||
              (r.style.display = t ? s[o] || "" : "none"));
      return e;
    }
    function sn(e, t, n) {
      var r = $t.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function on(e, t, n, r, i) {
      var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        o = 0;
      for (; 4 > s; s += 2)
        "margin" === n && (o += w.css(e, n + Zt[s], !0, i)),
          r
            ? ("content" === n && (o -= w.css(e, "padding" + Zt[s], !0, i)),
              "margin" !== n &&
                (o -= w.css(e, "border" + Zt[s] + "Width", !0, i)))
            : ((o += w.css(e, "padding" + Zt[s], !0, i)),
              "padding" !== n &&
                (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
      return o;
    }
    function un(e, t, n) {
      var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        s = qt(e),
        o =
          w.support.boxSizing && "border-box" === w.css(e, "boxSizing", !1, s);
      if (0 >= i || null == i) {
        if (
          ((i = Rt(e, t, s)),
          (0 > i || null == i) && (i = e.style[t]),
          Jt.test(i))
        )
          return i;
        (r = o && (w.support.boxSizingReliable || i === e.style[t])),
          (i = parseFloat(i) || 0);
      }
      return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px";
    }
    function an(e) {
      var t = o,
        n = Qt[e];
      return (
        n ||
          ((n = fn(e, t)),
          ("none" !== n && n) ||
            ((It = (
              It ||
              w("<iframe frameborder='0' width='0' height='0'/>").css(
                "cssText",
                "display:block !important"
              )
            ).appendTo(t.documentElement)),
            (t = (It[0].contentWindow || It[0].contentDocument).document),
            t.write("<!doctype html><html><body>"),
            t.close(),
            (n = fn(e, t)),
            It.detach()),
          (Qt[e] = n)),
        n
      );
    }
    function fn(e, t) {
      var n = w(t.createElement(e)).appendTo(t.body),
        r = w.css(n[0], "display");
      return n.remove(), r;
    }
    function vn(e, t, n, r) {
      var i;
      if (w.isArray(t))
        w.each(t, function (t, i) {
          n || cn.test(e)
            ? r(e, i)
            : vn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        });
      else if (n || "object" !== w.type(t)) r(e, t);
      else for (i in t) vn(e + "[" + i + "]", t[i], n, r);
    }
    function _n(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var r,
          i = 0,
          s = t.toLowerCase().match(S) || [];
        if (w.isFunction(n))
          while ((r = s[i++]))
            "+" === r[0]
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function Dn(e, n, r, i) {
      function u(a) {
        var f;
        return (
          (s[a] = !0),
          w.each(e[a] || [], function (e, a) {
            var l = a(n, r, i);
            return "string" != typeof l || o || s[l]
              ? o
                ? !(f = l)
                : t
              : (n.dataTypes.unshift(l), u(l), !1);
          }),
          f
        );
      }
      var s = {},
        o = e === An;
      return u(n.dataTypes[0]) || (!s["*"] && u("*"));
    }
    function Pn(e, n) {
      var r,
        i,
        s = w.ajaxSettings.flatOptions || {};
      for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
      return r && w.extend(!0, e, r), e;
    }
    function Hn(e, n, r) {
      var i,
        s,
        o,
        u,
        a = e.contents,
        f = e.dataTypes;
      while ("*" === f[0])
        f.shift(),
          s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
      if (s)
        for (u in a)
          if (a[u] && a[u].test(s)) {
            f.unshift(u);
            break;
          }
      if (f[0] in r) o = f[0];
      else {
        for (u in r) {
          if (!f[0] || e.converters[u + " " + f[0]]) {
            o = u;
            break;
          }
          i || (i = u);
        }
        o = o || i;
      }
      return o ? (o !== f[0] && f.unshift(o), r[o]) : t;
    }
    function Bn(e, t, n, r) {
      var i,
        s,
        o,
        u,
        a,
        f = {},
        l = e.dataTypes.slice();
      if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
      s = l.shift();
      while (s)
        if (
          (e.responseFields[s] && (n[e.responseFields[s]] = t),
          !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (a = s),
          (s = l.shift()))
        )
          if ("*" === s) s = a;
          else if ("*" !== a && a !== s) {
            if (((o = f[a + " " + s] || f["* " + s]), !o))
              for (i in f)
                if (
                  ((u = i.split(" ")),
                  u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]]))
                ) {
                  o === !0
                    ? (o = f[i])
                    : f[i] !== !0 && ((s = u[0]), l.unshift(u[1]));
                  break;
                }
            if (o !== !0)
              if (o && e["throws"]) t = o(t);
              else
                try {
                  t = o(t);
                } catch (c) {
                  return {
                    state: "parsererror",
                    error: o ? c : "No conversion from " + a + " to " + s,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function zn() {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    }
    function Wn() {
      try {
        return new e.ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}
    }
    function Yn() {
      return (
        setTimeout(function () {
          Xn = t;
        }),
        (Xn = w.now())
      );
    }
    function Zn(e, t, n) {
      var r,
        i = (Gn[t] || []).concat(Gn["*"]),
        s = 0,
        o = i.length;
      for (; o > s; s++) if ((r = i[s].call(n, t, e))) return r;
    }
    function er(e, t, n) {
      var r,
        i,
        s = 0,
        o = Qn.length,
        u = w.Deferred().always(function () {
          delete a.elem;
        }),
        a = function () {
          if (i) return !1;
          var t = Xn || Yn(),
            n = Math.max(0, f.startTime + f.duration - t),
            r = n / f.duration || 0,
            s = 1 - r,
            o = 0,
            a = f.tweens.length;
          for (; a > o; o++) f.tweens[o].run(s);
          return (
            u.notifyWith(e, [f, s, n]),
            1 > s && a ? n : (u.resolveWith(e, [f]), !1)
          );
        },
        f = u.promise({
          elem: e,
          props: w.extend({}, t),
          opts: w.extend(!0, { specialEasing: {} }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Xn || Yn(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = w.Tween(
              e,
              f.opts,
              t,
              n,
              f.opts.specialEasing[t] || f.opts.easing
            );
            return f.tweens.push(r), r;
          },
          stop: function (t) {
            var n = 0,
              r = t ? f.tweens.length : 0;
            if (i) return this;
            for (i = !0; r > n; n++) f.tweens[n].run(1);
            return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this;
          },
        }),
        l = f.props;
      for (tr(l, f.opts.specialEasing); o > s; s++)
        if ((r = Qn[s].call(f, e, l, f.opts))) return r;
      return (
        w.map(l, Zn, f),
        w.isFunction(f.opts.start) && f.opts.start.call(e, f),
        w.fx.timer(w.extend(a, { elem: e, anim: f, queue: f.opts.queue })),
        f
          .progress(f.opts.progress)
          .done(f.opts.done, f.opts.complete)
          .fail(f.opts.fail)
          .always(f.opts.always)
      );
    }
    function tr(e, t) {
      var n, r, i, s, o;
      for (n in e)
        if (
          ((r = w.camelCase(n)),
          (i = t[r]),
          (s = e[n]),
          w.isArray(s) && ((i = s[1]), (s = e[n] = s[0])),
          n !== r && ((e[r] = s), delete e[n]),
          (o = w.cssHooks[r]),
          o && "expand" in o)
        ) {
          (s = o.expand(s)), delete e[r];
          for (n in s) n in e || ((e[n] = s[n]), (t[n] = i));
        } else t[r] = i;
    }
    function nr(e, t, n) {
      var r,
        i,
        s,
        o,
        u,
        a,
        f = this,
        l = {},
        c = e.style,
        h = e.nodeType && nn(e),
        p = w._data(e, "fxshow");
      n.queue ||
        ((u = w._queueHooks(e, "fx")),
        null == u.unqueued &&
          ((u.unqueued = 0),
          (a = u.empty.fire),
          (u.empty.fire = function () {
            u.unqueued || a();
          })),
        u.unqueued++,
        f.always(function () {
          f.always(function () {
            u.unqueued--, w.queue(e, "fx").length || u.empty.fire();
          });
        })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [c.overflow, c.overflowX, c.overflowY]),
          "inline" === w.css(e, "display") &&
            "none" === w.css(e, "float") &&
            (w.support.inlineBlockNeedsLayout && "inline" !== an(e.nodeName)
              ? (c.zoom = 1)
              : (c.display = "inline-block"))),
        n.overflow &&
          ((c.overflow = "hidden"),
          w.support.shrinkWrapBlocks ||
            f.always(function () {
              (c.overflow = n.overflow[0]),
                (c.overflowX = n.overflow[1]),
                (c.overflowY = n.overflow[2]);
            }));
      for (r in t)
        if (((i = t[r]), $n.exec(i))) {
          if (
            (delete t[r],
            (s = s || "toggle" === i),
            i === (h ? "hide" : "show"))
          )
            continue;
          l[r] = (p && p[r]) || w.style(e, r);
        }
      if (!w.isEmptyObject(l)) {
        p ? "hidden" in p && (h = p.hidden) : (p = w._data(e, "fxshow", {})),
          s && (p.hidden = !h),
          h
            ? w(e).show()
            : f.done(function () {
                w(e).hide();
              }),
          f.done(function () {
            var t;
            w._removeData(e, "fxshow");
            for (t in l) w.style(e, t, l[t]);
          });
        for (r in l)
          (o = Zn(h ? p[r] : 0, r, f)),
            r in p ||
              ((p[r] = o.start),
              h &&
                ((o.end = o.start),
                (o.start = "width" === r || "height" === r ? 1 : 0)));
      }
    }
    function rr(e, t, n, r, i) {
      return new rr.prototype.init(e, t, n, r, i);
    }
    function ir(e, t) {
      var n,
        r = { height: e },
        i = 0;
      for (t = t ? 1 : 0; 4 > i; i += 2 - t)
        (n = Zt[i]), (r["margin" + n] = r["padding" + n] = e);
      return t && (r.opacity = r.width = e), r;
    }
    function sr(e) {
      return w.isWindow(e)
        ? e
        : 9 === e.nodeType
        ? e.defaultView || e.parentWindow
        : !1;
    }
    var n,
      r,
      i = typeof t,
      s = e.location,
      o = e.document,
      u = o.documentElement,
      a = e.jQuery,
      f = e.$,
      l = {},
      c = [],
      h = "1.10.2",
      p = c.concat,
      d = c.push,
      v = c.slice,
      m = c.indexOf,
      g = l.toString,
      y = l.hasOwnProperty,
      b = h.trim,
      w = function (e, t) {
        return new w.fn.init(e, t, r);
      },
      E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      S = /\S+/g,
      x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      C = /^[\],:{}\s]*$/,
      k = /(?:^|:|,)(?:\s*\[)+/g,
      L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      O = /^-ms-/,
      M = /-([\da-z])/gi,
      _ = function (e, t) {
        return t.toUpperCase();
      },
      D = function (e) {
        (o.addEventListener ||
          "load" === e.type ||
          "complete" === o.readyState) &&
          (P(), w.ready());
      },
      P = function () {
        o.addEventListener
          ? (o.removeEventListener("DOMContentLoaded", D, !1),
            e.removeEventListener("load", D, !1))
          : (o.detachEvent("onreadystatechange", D),
            e.detachEvent("onload", D));
      };
    (w.fn = w.prototype =
      {
        jquery: h,
        constructor: w,
        init: function (e, n, r) {
          var i, s;
          if (!e) return this;
          if ("string" == typeof e) {
            if (
              ((i =
                "<" === e.charAt(0) &&
                ">" === e.charAt(e.length - 1) &&
                e.length >= 3
                  ? [null, e, null]
                  : T.exec(e)),
              !i || (!i[1] && n))
            )
              return !n || n.jquery
                ? (n || r).find(e)
                : this.constructor(n).find(e);
            if (i[1]) {
              if (
                ((n = n instanceof w ? n[0] : n),
                w.merge(
                  this,
                  w.parseHTML(
                    i[1],
                    n && n.nodeType ? n.ownerDocument || n : o,
                    !0
                  )
                ),
                N.test(i[1]) && w.isPlainObject(n))
              )
                for (i in n)
                  w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
              return this;
            }
            if (((s = o.getElementById(i[2])), s && s.parentNode)) {
              if (s.id !== i[2]) return r.find(e);
              (this.length = 1), (this[0] = s);
            }
            return (this.context = o), (this.selector = e), this;
          }
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : w.isFunction(e)
            ? r.ready(e)
            : (e.selector !== t &&
                ((this.selector = e.selector), (this.context = e.context)),
              w.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function () {
          return v.call(this);
        },
        get: function (e) {
          return null == e
            ? this.toArray()
            : 0 > e
            ? this[this.length + e]
            : this[e];
        },
        pushStack: function (e) {
          var t = w.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
          return w.each(this, e, t);
        },
        ready: function (e) {
          return w.ready.promise().done(e), this;
        },
        slice: function () {
          return this.pushStack(v.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        map: function (e) {
          return this.pushStack(
            w.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: d,
        sort: [].sort,
        splice: [].splice,
      }),
      (w.fn.init.prototype = w.fn),
      (w.extend = w.fn.extend =
        function () {
          var e,
            n,
            r,
            i,
            s,
            o,
            u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
          for (
            "boolean" == typeof u &&
              ((l = u), (u = arguments[1] || {}), (a = 2)),
              "object" == typeof u || w.isFunction(u) || (u = {}),
              f === a && ((u = this), --a);
            f > a;
            a++
          )
            if (null != (s = arguments[a]))
              for (i in s)
                (e = u[i]),
                  (r = s[i]),
                  u !== r &&
                    (l && r && (w.isPlainObject(r) || (n = w.isArray(r)))
                      ? (n
                          ? ((n = !1), (o = e && w.isArray(e) ? e : []))
                          : (o = e && w.isPlainObject(e) ? e : {}),
                        (u[i] = w.extend(l, o, r)))
                      : r !== t && (u[i] = r));
          return u;
        }),
      w.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
          return (
            e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
          );
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? w.readyWait++ : w.ready(!0);
        },
        ready: function (e) {
          if (e === !0 ? !--w.readyWait : !w.isReady) {
            if (!o.body) return setTimeout(w.ready);
            (w.isReady = !0),
              (e !== !0 && --w.readyWait > 0) ||
                (n.resolveWith(o, [w]),
                w.fn.trigger && w(o).trigger("ready").off("ready"));
          }
        },
        isFunction: function (e) {
          return "function" === w.type(e);
        },
        isArray:
          Array.isArray ||
          function (e) {
            return "array" === w.type(e);
          },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? l[g.call(e)] || "object"
            : typeof e;
        },
        isPlainObject: function (e) {
          var n;
          if (!e || "object" !== w.type(e) || e.nodeType || w.isWindow(e))
            return !1;
          try {
            if (
              e.constructor &&
              !y.call(e, "constructor") &&
              !y.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (r) {
            return !1;
          }
          if (w.support.ownLast) for (n in e) return y.call(e, n);
          for (n in e);
          return n === t || y.call(e, n);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        error: function (e) {
          throw Error(e);
        },
        parseHTML: function (e, t, n) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && ((n = t), (t = !1)), (t = t || o);
          var r = N.exec(e),
            i = !n && [];
          return r
            ? [t.createElement(r[1])]
            : ((r = w.buildFragment([e], t, i)),
              i && w(i).remove(),
              w.merge([], r.childNodes));
        },
        parseJSON: function (n) {
          return e.JSON && e.JSON.parse
            ? e.JSON.parse(n)
            : null === n
            ? n
            : "string" == typeof n &&
              ((n = w.trim(n)),
              n && C.test(n.replace(L, "@").replace(A, "]").replace(k, "")))
            ? Function("return " + n)()
            : (w.error("Invalid JSON: " + n), t);
        },
        parseXML: function (n) {
          var r, i;
          if (!n || "string" != typeof n) return null;
          try {
            e.DOMParser
              ? ((i = new DOMParser()), (r = i.parseFromString(n, "text/xml")))
              : ((r = new ActiveXObject("Microsoft.XMLDOM")),
                (r.async = "false"),
                r.loadXML(n));
          } catch (s) {
            r = t;
          }
          return (
            (r &&
              r.documentElement &&
              !r.getElementsByTagName("parsererror").length) ||
              w.error("Invalid XML: " + n),
            r
          );
        },
        noop: function () {},
        globalEval: function (t) {
          t &&
            w.trim(t) &&
            (
              e.execScript ||
              function (t) {
                e.eval.call(e, t);
              }
            )(t);
        },
        camelCase: function (e) {
          return e.replace(O, "ms-").replace(M, _);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, n) {
          var r,
            i = 0,
            s = e.length,
            o = H(e);
          if (n) {
            if (o) {
              for (; s > i; i++) if (((r = t.apply(e[i], n)), r === !1)) break;
            } else for (i in e) if (((r = t.apply(e[i], n)), r === !1)) break;
          } else if (o) {
            for (; s > i; i++)
              if (((r = t.call(e[i], i, e[i])), r === !1)) break;
          } else
            for (i in e) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
          return e;
        },
        trim:
          b && !b.call("﻿ ")
            ? function (e) {
                return null == e ? "" : b.call(e);
              }
            : function (e) {
                return null == e ? "" : (e + "").replace(x, "");
              },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (H(Object(e))
                ? w.merge(n, "string" == typeof e ? [e] : e)
                : d.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          var r;
          if (t) {
            if (m) return m.call(t, e, n);
            for (
              r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
              r > n;
              n++
            )
              if (n in t && t[n] === e) return n;
          }
          return -1;
        },
        merge: function (e, n) {
          var r = n.length,
            i = e.length,
            s = 0;
          if ("number" == typeof r) for (; r > s; s++) e[i++] = n[s];
          else while (n[s] !== t) e[i++] = n[s++];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          var r,
            i = [],
            s = 0,
            o = e.length;
          for (n = !!n; o > s; s++) (r = !!t(e[s], s)), n !== r && i.push(e[s]);
          return i;
        },
        map: function (e, t, n) {
          var r,
            i = 0,
            s = e.length,
            o = H(e),
            u = [];
          if (o)
            for (; s > i; i++)
              (r = t(e[i], i, n)), null != r && (u[u.length] = r);
          else for (i in e) (r = t(e[i], i, n)), null != r && (u[u.length] = r);
          return p.apply([], u);
        },
        guid: 1,
        proxy: function (e, n) {
          var r, i, s;
          return (
            "string" == typeof n && ((s = e[n]), (n = e), (e = s)),
            w.isFunction(e)
              ? ((r = v.call(arguments, 2)),
                (i = function () {
                  return e.apply(n || this, r.concat(v.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || w.guid++),
                i)
              : t
          );
        },
        access: function (e, n, r, i, s, o, u) {
          var a = 0,
            f = e.length,
            l = null == r;
          if ("object" === w.type(r)) {
            s = !0;
            for (a in r) w.access(e, n, a, r[a], !0, o, u);
          } else if (
            i !== t &&
            ((s = !0),
            w.isFunction(i) || (u = !0),
            l &&
              (u
                ? (n.call(e, i), (n = null))
                : ((l = n),
                  (n = function (e, t, n) {
                    return l.call(w(e), n);
                  }))),
            n)
          )
            for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
          return s ? e : l ? n.call(e) : f ? n(e[0], r) : o;
        },
        now: function () {
          return new Date().getTime();
        },
        swap: function (e, t, n, r) {
          var i,
            s,
            o = {};
          for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s]);
          i = n.apply(e, r || []);
          for (s in t) e.style[s] = o[s];
          return i;
        },
      }),
      (w.ready.promise = function (t) {
        if (!n)
          if (((n = w.Deferred()), "complete" === o.readyState))
            setTimeout(w.ready);
          else if (o.addEventListener)
            o.addEventListener("DOMContentLoaded", D, !1),
              e.addEventListener("load", D, !1);
          else {
            o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
            var r = !1;
            try {
              r = null == e.frameElement && o.documentElement;
            } catch (i) {}
            r &&
              r.doScroll &&
              (function s() {
                if (!w.isReady) {
                  try {
                    r.doScroll("left");
                  } catch (e) {
                    return setTimeout(s, 50);
                  }
                  P(), w.ready();
                }
              })();
          }
        return n.promise(t);
      }),
      w.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (e, t) {
          l["[object " + t + "]"] = t.toLowerCase();
        }
      );
    (r = w(o)),
      (function (e, t) {
        function ot(e, t, n, i) {
          var s, o, u, a, f, l, p, m, g, w;
          if (
            ((t ? t.ownerDocument || t : E) !== h && c(t),
            (t = t || h),
            (n = n || []),
            !e || "string" != typeof e)
          )
            return n;
          if (1 !== (a = t.nodeType) && 9 !== a) return [];
          if (d && !i) {
            if ((s = Z.exec(e)))
              if ((u = s[1])) {
                if (9 === a) {
                  if (((o = t.getElementById(u)), !o || !o.parentNode))
                    return n;
                  if (o.id === u) return n.push(o), n;
                } else if (
                  t.ownerDocument &&
                  (o = t.ownerDocument.getElementById(u)) &&
                  y(t, o) &&
                  o.id === u
                )
                  return n.push(o), n;
              } else {
                if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                if (
                  (u = s[3]) &&
                  r.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return H.apply(n, t.getElementsByClassName(u)), n;
              }
            if (r.qsa && (!v || !v.test(e))) {
              if (
                ((m = p = b),
                (g = t),
                (w = 9 === a && e),
                1 === a && "object" !== t.nodeName.toLowerCase())
              ) {
                (l = mt(e)),
                  (p = t.getAttribute("id"))
                    ? (m = p.replace(nt, "\\$&"))
                    : t.setAttribute("id", m),
                  (m = "[id='" + m + "'] "),
                  (f = l.length);
                while (f--) l[f] = m + gt(l[f]);
                (g = ($.test(e) && t.parentNode) || t), (w = l.join(","));
              }
              if (w)
                try {
                  return H.apply(n, g.querySelectorAll(w)), n;
                } catch (S) {
                } finally {
                  p || t.removeAttribute("id");
                }
            }
          }
          return Nt(e.replace(W, "$1"), t, n, i);
        }
        function ut() {
          function t(n, r) {
            return (
              e.push((n += " ")) > s.cacheLength && delete t[e.shift()],
              (t[n] = r)
            );
          }
          var e = [];
          return t;
        }
        function at(e) {
          return (e[b] = !0), e;
        }
        function ft(e) {
          var t = h.createElement("div");
          try {
            return !!e(t);
          } catch (n) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function lt(e, t) {
          var n = e.split("|"),
            r = e.length;
          while (r--) s.attrHandle[n[r]] = t;
        }
        function ct(e, t) {
          var n = t && e,
            r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              (~t.sourceIndex || O) - (~e.sourceIndex || O);
          if (r) return r;
          if (n) while ((n = n.nextSibling)) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function ht(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return "input" === n && t.type === e;
          };
        }
        function pt(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function dt(e) {
          return at(function (t) {
            return (
              (t = +t),
              at(function (n, r) {
                var i,
                  s = e([], n.length, t),
                  o = s.length;
                while (o--) n[(i = s[o])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function vt() {}
        function mt(e, t) {
          var n,
            r,
            i,
            o,
            u,
            a,
            f,
            l = N[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (u = e), (a = []), (f = s.preFilter);
          while (u) {
            (!n || (r = X.exec(u))) &&
              (r && (u = u.slice(r[0].length) || u), a.push((i = []))),
              (n = !1),
              (r = V.exec(u)) &&
                ((n = r.shift()),
                i.push({ value: n, type: r[0].replace(W, " ") }),
                (u = u.slice(n.length)));
            for (o in s.filter)
              !(r = G[o].exec(u)) ||
                (f[o] && !(r = f[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (u = u.slice(n.length)));
            if (!n) break;
          }
          return t ? u.length : u ? ot.error(e) : N(e, a).slice(0);
        }
        function gt(e) {
          var t = 0,
            n = e.length,
            r = "";
          for (; n > t; t++) r += e[t].value;
          return r;
        }
        function yt(e, t, n) {
          var r = t.dir,
            s = n && "parentNode" === r,
            o = x++;
          return t.first
            ? function (t, n, i) {
                while ((t = t[r])) if (1 === t.nodeType || s) return e(t, n, i);
              }
            : function (t, n, u) {
                var a,
                  f,
                  l,
                  c = S + " " + o;
                if (u) {
                  while ((t = t[r]))
                    if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                } else
                  while ((t = t[r]))
                    if (1 === t.nodeType || s)
                      if (
                        ((l = t[b] || (t[b] = {})), (f = l[r]) && f[0] === c)
                      ) {
                        if ((a = f[1]) === !0 || a === i) return a === !0;
                      } else if (
                        ((f = l[r] = [c]),
                        (f[1] = e(t, n, u) || i),
                        f[1] === !0)
                      )
                        return !0;
              };
        }
        function bt(e) {
          return e.length > 1
            ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function wt(e, t, n, r, i) {
          var s,
            o = [],
            u = 0,
            a = e.length,
            f = null != t;
          for (; a > u; u++)
            (s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
          return o;
        }
        function Et(e, t, n, r, i, s) {
          return (
            r && !r[b] && (r = Et(r)),
            i && !i[b] && (i = Et(i, s)),
            at(function (s, o, u, a) {
              var f,
                l,
                c,
                h = [],
                p = [],
                d = o.length,
                v = s || Tt(t || "*", u.nodeType ? [u] : u, []),
                m = !e || (!s && t) ? v : wt(v, h, e, u, a),
                g = n ? (i || (s ? e : d || r) ? [] : o) : m;
              if ((n && n(m, g, u, a), r)) {
                (f = wt(g, p)), r(f, [], u, a), (l = f.length);
                while (l--) (c = f[l]) && (g[p[l]] = !(m[p[l]] = c));
              }
              if (s) {
                if (i || e) {
                  if (i) {
                    (f = []), (l = g.length);
                    while (l--) (c = g[l]) && f.push((m[l] = c));
                    i(null, (g = []), f, a);
                  }
                  l = g.length;
                  while (l--)
                    (c = g[l]) &&
                      (f = i ? j.call(s, c) : h[l]) > -1 &&
                      (s[f] = !(o[f] = c));
                }
              } else (g = wt(g === o ? g.splice(d, g.length) : g)), i ? i(null, o, g, a) : H.apply(o, g);
            })
          );
        }
        function St(e) {
          var t,
            n,
            r,
            i = e.length,
            o = s.relative[e[0].type],
            u = o || s.relative[" "],
            a = o ? 1 : 0,
            l = yt(
              function (e) {
                return e === t;
              },
              u,
              !0
            ),
            c = yt(
              function (e) {
                return j.call(t, e) > -1;
              },
              u,
              !0
            ),
            h = [
              function (e, n, r) {
                return (
                  (!o && (r || n !== f)) ||
                  ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                );
              },
            ];
          for (; i > a; a++)
            if ((n = s.relative[e[a].type])) h = [yt(bt(h), n)];
            else {
              if (((n = s.filter[e[a].type].apply(null, e[a].matches)), n[b])) {
                for (r = ++a; i > r; r++) if (s.relative[e[r].type]) break;
                return Et(
                  a > 1 && bt(h),
                  a > 1 &&
                    gt(
                      e
                        .slice(0, a - 1)
                        .concat({ value: " " === e[a - 2].type ? "*" : "" })
                    ).replace(W, "$1"),
                  n,
                  r > a && St(e.slice(a, r)),
                  i > r && St((e = e.slice(r))),
                  i > r && gt(e)
                );
              }
              h.push(n);
            }
          return bt(h);
        }
        function xt(e, t) {
          var n = 0,
            r = t.length > 0,
            o = e.length > 0,
            u = function (u, a, l, c, p) {
              var d,
                v,
                m,
                g = [],
                y = 0,
                b = "0",
                w = u && [],
                E = null != p,
                x = f,
                T = u || (o && s.find.TAG("*", (p && a.parentNode) || a)),
                N = (S += null == x ? 1 : Math.random() || 0.1);
              for (
                E && ((f = a !== h && a), (i = n));
                null != (d = T[b]);
                b++
              ) {
                if (o && d) {
                  v = 0;
                  while ((m = e[v++]))
                    if (m(d, a, l)) {
                      c.push(d);
                      break;
                    }
                  E && ((S = N), (i = ++n));
                }
                r && ((d = !m && d) && y--, u && w.push(d));
              }
              if (((y += b), r && b !== y)) {
                v = 0;
                while ((m = t[v++])) m(w, g, a, l);
                if (u) {
                  if (y > 0) while (b--) w[b] || g[b] || (g[b] = D.call(c));
                  g = wt(g);
                }
                H.apply(c, g),
                  E &&
                    !u &&
                    g.length > 0 &&
                    y + t.length > 1 &&
                    ot.uniqueSort(c);
              }
              return E && ((S = N), (f = x)), w;
            };
          return r ? at(u) : u;
        }
        function Tt(e, t, n) {
          var r = 0,
            i = t.length;
          for (; i > r; r++) ot(e, t[r], n);
          return n;
        }
        function Nt(e, t, n, i) {
          var o,
            u,
            f,
            l,
            c,
            h = mt(e);
          if (!i && 1 === h.length) {
            if (
              ((u = h[0] = h[0].slice(0)),
              u.length > 2 &&
                "ID" === (f = u[0]).type &&
                r.getById &&
                9 === t.nodeType &&
                d &&
                s.relative[u[1].type])
            ) {
              if (
                ((t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0]),
                !t)
              )
                return n;
              e = e.slice(u.shift().value.length);
            }
            o = G.needsContext.test(e) ? 0 : u.length;
            while (o--) {
              if (((f = u[o]), s.relative[(l = f.type)])) break;
              if (
                (c = s.find[l]) &&
                (i = c(
                  f.matches[0].replace(rt, it),
                  ($.test(u[0].type) && t.parentNode) || t
                ))
              ) {
                if ((u.splice(o, 1), (e = i.length && gt(u)), !e))
                  return H.apply(n, i), n;
                break;
              }
            }
          }
          return a(e, h)(i, t, !d, n, $.test(e)), n;
        }
        var n,
          r,
          i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y,
          b = "sizzle" + -new Date(),
          E = e.document,
          S = 0,
          x = 0,
          T = ut(),
          N = ut(),
          C = ut(),
          k = !1,
          L = function (e, t) {
            return e === t ? ((k = !0), 0) : 0;
          },
          A = typeof t,
          O = 1 << 31,
          M = {}.hasOwnProperty,
          _ = [],
          D = _.pop,
          P = _.push,
          H = _.push,
          B = _.slice,
          j =
            _.indexOf ||
            function (e) {
              var t = 0,
                n = this.length;
              for (; n > t; t++) if (this[t] === e) return t;
              return -1;
            },
          F =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          I = "[\\x20\\t\\r\\n\\f]",
          q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          R = q.replace("w", "w#"),
          U =
            "\\[" +
            I +
            "*(" +
            q +
            ")" +
            I +
            "*(?:([*^$|!~]?=)" +
            I +
            "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
            R +
            ")|)|)" +
            I +
            "*\\]",
          z =
            ":(" +
            q +
            ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
            U.replace(3, 8) +
            ")*)|.*)\\)|)",
          W = RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
          X = RegExp("^" + I + "*," + I + "*"),
          V = RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
          $ = RegExp(I + "*[+~]"),
          J = RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
          K = RegExp(z),
          Q = RegExp("^" + R + "$"),
          G = {
            ID: RegExp("^#(" + q + ")"),
            CLASS: RegExp("^\\.(" + q + ")"),
            TAG: RegExp("^(" + q.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + U),
            PSEUDO: RegExp("^" + z),
            CHILD: RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                I +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                I +
                "*(?:([+-]|)" +
                I +
                "*(\\d+)|))" +
                I +
                "*\\)|)",
              "i"
            ),
            bool: RegExp("^(?:" + F + ")$", "i"),
            needsContext: RegExp(
              "^" +
                I +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                I +
                "*((?:-\\d)?\\d*)" +
                I +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          Y = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          et = /^(?:input|select|textarea|button)$/i,
          tt = /^h\d$/i,
          nt = /'|\\/g,
          rt = RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
          it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n
              ? t
              : 0 > r
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode(55296 | (r >> 10), 56320 | (1023 & r));
          };
        try {
          H.apply((_ = B.call(E.childNodes)), E.childNodes),
            _[E.childNodes.length].nodeType;
        } catch (st) {
          H = {
            apply: _.length
              ? function (e, t) {
                  P.apply(e, B.call(t));
                }
              : function (e, t) {
                  var n = e.length,
                    r = 0;
                  while ((e[n++] = t[r++]));
                  e.length = n - 1;
                },
          };
        }
        (u = ot.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
          }),
          (r = ot.support = {}),
          (c = ot.setDocument =
            function (e) {
              var n = e ? e.ownerDocument || e : E,
                i = n.defaultView;
              return n !== h && 9 === n.nodeType && n.documentElement
                ? ((h = n),
                  (p = n.documentElement),
                  (d = !u(n)),
                  i &&
                    i.attachEvent &&
                    i !== i.top &&
                    i.attachEvent("onbeforeunload", function () {
                      c();
                    }),
                  (r.attributes = ft(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (r.getElementsByTagName = ft(function (e) {
                    return (
                      e.appendChild(n.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (r.getElementsByClassName = ft(function (e) {
                    return (
                      (e.innerHTML =
                        "<div class='a'></div><div class='a i'></div>"),
                      (e.firstChild.className = "i"),
                      2 === e.getElementsByClassName("i").length
                    );
                  })),
                  (r.getById = ft(function (e) {
                    return (
                      (p.appendChild(e).id = b),
                      !n.getElementsByName || !n.getElementsByName(b).length
                    );
                  })),
                  r.getById
                    ? ((s.find.ID = function (e, t) {
                        if (typeof t.getElementById !== A && d) {
                          var n = t.getElementById(e);
                          return n && n.parentNode ? [n] : [];
                        }
                      }),
                      (s.filter.ID = function (e) {
                        var t = e.replace(rt, it);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }))
                    : (delete s.find.ID,
                      (s.filter.ID = function (e) {
                        var t = e.replace(rt, it);
                        return function (e) {
                          var n =
                            typeof e.getAttributeNode !== A &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      })),
                  (s.find.TAG = r.getElementsByTagName
                    ? function (e, n) {
                        return typeof n.getElementsByTagName !== A
                          ? n.getElementsByTagName(e)
                          : t;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          s = t.getElementsByTagName(e);
                        if ("*" === e) {
                          while ((n = s[i++])) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return s;
                      }),
                  (s.find.CLASS =
                    r.getElementsByClassName &&
                    function (e, n) {
                      return typeof n.getElementsByClassName !== A && d
                        ? n.getElementsByClassName(e)
                        : t;
                    }),
                  (m = []),
                  (v = []),
                  (r.qsa = Y.test(n.querySelectorAll)) &&
                    (ft(function (e) {
                      (e.innerHTML =
                        "<select><option selected=''></option></select>"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + I + "*(?:value|" + F + ")"),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked");
                    }),
                    ft(function (e) {
                      var t = n.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("t", ""),
                        e.querySelectorAll("[t^='']").length &&
                          v.push("[*^$]=" + I + "*(?:''|\"\")"),
                        e.querySelectorAll(":enabled").length ||
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (r.matchesSelector = Y.test(
                    (g =
                      p.webkitMatchesSelector ||
                      p.mozMatchesSelector ||
                      p.oMatchesSelector ||
                      p.msMatchesSelector)
                  )) &&
                    ft(function (e) {
                      (r.disconnectedMatch = g.call(e, "div")),
                        g.call(e, "[s!='']:x"),
                        m.push("!=", z);
                    }),
                  (v = v.length && RegExp(v.join("|"))),
                  (m = m.length && RegExp(m.join("|"))),
                  (y =
                    Y.test(p.contains) || p.compareDocumentPosition
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            while ((t = t.parentNode)) if (t === e) return !0;
                          return !1;
                        }),
                  (L = p.compareDocumentPosition
                    ? function (e, t) {
                        if (e === t) return (k = !0), 0;
                        var i =
                          t.compareDocumentPosition &&
                          e.compareDocumentPosition &&
                          e.compareDocumentPosition(t);
                        return i
                          ? 1 & i ||
                            (!r.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                            ? e === n || y(E, e)
                              ? -1
                              : t === n || y(E, t)
                              ? 1
                              : l
                              ? j.call(l, e) - j.call(l, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1
                          : e.compareDocumentPosition
                          ? -1
                          : 1;
                      }
                    : function (e, t) {
                        var r,
                          i = 0,
                          s = e.parentNode,
                          o = t.parentNode,
                          u = [e],
                          a = [t];
                        if (e === t) return (k = !0), 0;
                        if (!s || !o)
                          return e === n
                            ? -1
                            : t === n
                            ? 1
                            : s
                            ? -1
                            : o
                            ? 1
                            : l
                            ? j.call(l, e) - j.call(l, t)
                            : 0;
                        if (s === o) return ct(e, t);
                        r = e;
                        while ((r = r.parentNode)) u.unshift(r);
                        r = t;
                        while ((r = r.parentNode)) a.unshift(r);
                        while (u[i] === a[i]) i++;
                        return i
                          ? ct(u[i], a[i])
                          : u[i] === E
                          ? -1
                          : a[i] === E
                          ? 1
                          : 0;
                      }),
                  n)
                : h;
            }),
          (ot.matches = function (e, t) {
            return ot(e, null, null, t);
          }),
          (ot.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== h && c(e),
              (t = t.replace(J, "='$1']")),
              !(
                !r.matchesSelector ||
                !d ||
                (m && m.test(t)) ||
                (v && v.test(t))
              ))
            )
              try {
                var n = g.call(e, t);
                if (
                  n ||
                  r.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return n;
              } catch (i) {}
            return ot(t, h, null, [e]).length > 0;
          }),
          (ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && c(e), y(e, t);
          }),
          (ot.attr = function (e, n) {
            (e.ownerDocument || e) !== h && c(e);
            var i = s.attrHandle[n.toLowerCase()],
              o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
            return o === t
              ? r.attributes || !d
                ? e.getAttribute(n)
                : (o = e.getAttributeNode(n)) && o.specified
                ? o.value
                : null
              : o;
          }),
          (ot.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e);
          }),
          (ot.uniqueSort = function (e) {
            var t,
              n = [],
              i = 0,
              s = 0;
            if (
              ((k = !r.detectDuplicates),
              (l = !r.sortStable && e.slice(0)),
              e.sort(L),
              k)
            ) {
              while ((t = e[s++])) t === e[s] && (i = n.push(s));
              while (i--) e.splice(n[i], 1);
            }
            return e;
          }),
          (o = ot.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r]); r++) n += o(t);
              return n;
            }),
          (s = ot.selectors =
            {
              cacheLength: 50,
              createPseudo: at,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(rt, it)),
                    (e[3] = (e[4] || e[5] || "").replace(rt, it)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ot.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ot.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var n,
                    r = !e[5] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3] && e[4] !== t
                        ? (e[2] = e[4])
                        : r &&
                          K.test(r) &&
                          (n = mt(r, !0)) &&
                          (n = r.indexOf(")", r.length - n) - r.length) &&
                          ((e[0] = e[0].slice(0, n)), (e[2] = r.slice(0, n))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(rt, it).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = T[e + " "];
                  return (
                    t ||
                    ((t = RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                      T(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (typeof e.getAttribute !== A &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ot.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : t
                      ? ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                          ? i !== n
                          : "^=" === t
                          ? n && 0 === i.indexOf(n)
                          : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                          ? n && i.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + i + " ").indexOf(n) > -1
                          : "|=" === t
                          ? i === n || i.slice(0, n.length + 1) === n + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var s = "nth" !== e.slice(0, 3),
                    o = "last" !== e.slice(-4),
                    u = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, a) {
                        var f,
                          l,
                          c,
                          h,
                          p,
                          d,
                          v = s !== o ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          g = u && t.nodeName.toLowerCase(),
                          y = !a && !u;
                        if (m) {
                          if (s) {
                            while (v) {
                              c = t;
                              while ((c = c[v]))
                                if (
                                  u
                                    ? c.nodeName.toLowerCase() === g
                                    : 1 === c.nodeType
                                )
                                  return !1;
                              d = v = "only" === e && !d && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((d = [o ? m.firstChild : m.lastChild]), o && y)
                          ) {
                            (l = m[b] || (m[b] = {})),
                              (f = l[e] || []),
                              (p = f[0] === S && f[1]),
                              (h = f[0] === S && f[2]),
                              (c = p && m.childNodes[p]);
                            while (
                              (c = (++p && c && c[v]) || (h = p = 0) || d.pop())
                            )
                              if (1 === c.nodeType && ++h && c === t) {
                                l[e] = [S, p, h];
                                break;
                              }
                          } else if (
                            y &&
                            (f = (t[b] || (t[b] = {}))[e]) &&
                            f[0] === S
                          )
                            h = f[1];
                          else
                            while (
                              (c = (++p && c && c[v]) || (h = p = 0) || d.pop())
                            )
                              if (
                                (u
                                  ? c.nodeName.toLowerCase() === g
                                  : 1 === c.nodeType) &&
                                ++h &&
                                (y && ((c[b] || (c[b] = {}))[e] = [S, h]),
                                c === t)
                              )
                                break;
                          return (
                            (h -= i), h === r || (0 === h % r && h / r >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    r =
                      s.pseudos[e] ||
                      s.setFilters[e.toLowerCase()] ||
                      ot.error("unsupported pseudo: " + e);
                  return r[b]
                    ? r(t)
                    : r.length > 1
                    ? ((n = [e, e, "", t]),
                      s.setFilters.hasOwnProperty(e.toLowerCase())
                        ? at(function (e, n) {
                            var i,
                              s = r(e, t),
                              o = s.length;
                            while (o--)
                              (i = j.call(e, s[o])), (e[i] = !(n[i] = s[o]));
                          })
                        : function (e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: at(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(W, "$1"));
                  return r[b]
                    ? at(function (e, t, n, i) {
                        var s,
                          o = r(e, null, i, []),
                          u = e.length;
                        while (u--) (s = o[u]) && (e[u] = !(t[u] = s));
                      })
                    : function (e, i, s) {
                        return (t[0] = e), r(t, null, s, n), !n.pop();
                      };
                }),
                has: at(function (e) {
                  return function (t) {
                    return ot(e, t).length > 0;
                  };
                }),
                contains: at(function (e) {
                  return function (t) {
                    return (
                      (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    );
                  };
                }),
                lang: at(function (e) {
                  return (
                    Q.test(e || "") || ot.error("unsupported lang: " + e),
                    (e = e.replace(rt, it).toLowerCase()),
                    function (t) {
                      var n;
                      do
                        if (
                          (n = d
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()),
                            n === e || 0 === n.indexOf(e + "-")
                          );
                      while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === p;
                },
                focus: function (e) {
                  return (
                    e === h.activeElement &&
                    (!h.hasFocus || h.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: function (e) {
                  return e.disabled === !1;
                },
                disabled: function (e) {
                  return e.disabled === !0;
                },
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (
                      e.nodeName > "@" ||
                      3 === e.nodeType ||
                      4 === e.nodeType
                    )
                      return !1;
                  return !0;
                },
                parent: function (e) {
                  return !s.pseudos.empty(e);
                },
                header: function (e) {
                  return tt.test(e.nodeName);
                },
                input: function (e) {
                  return et.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      t.toLowerCase() === e.type)
                  );
                },
                first: dt(function () {
                  return [0];
                }),
                last: dt(function (e, t) {
                  return [t - 1];
                }),
                eq: dt(function (e, t, n) {
                  return [0 > n ? n + t : n];
                }),
                even: dt(function (e, t) {
                  var n = 0;
                  for (; t > n; n += 2) e.push(n);
                  return e;
                }),
                odd: dt(function (e, t) {
                  var n = 1;
                  for (; t > n; n += 2) e.push(n);
                  return e;
                }),
                lt: dt(function (e, t, n) {
                  var r = 0 > n ? n + t : n;
                  for (; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: dt(function (e, t, n) {
                  var r = 0 > n ? n + t : n;
                  for (; t > ++r; ) e.push(r);
                  return e;
                }),
              },
            }),
          (s.pseudos.nth = s.pseudos.eq);
        for (n in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          s.pseudos[n] = ht(n);
        for (n in { submit: !0, reset: !0 }) s.pseudos[n] = pt(n);
        (vt.prototype = s.filters = s.pseudos), (s.setFilters = new vt());
        a = ot.compile = function (e, t) {
          var n,
            r = [],
            i = [],
            s = C[e + " "];
          if (!s) {
            t || (t = mt(e)), (n = t.length);
            while (n--) (s = St(t[n])), s[b] ? r.push(s) : i.push(s);
            s = C(e, xt(i, r));
          }
          return s;
        };
        (r.sortStable = b.split("").sort(L).join("") === b),
          (r.detectDuplicates = k),
          c(),
          (r.sortDetached = ft(function (e) {
            return 1 & e.compareDocumentPosition(h.createElement("div"));
          })),
          ft(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            lt("type|href|height|width", function (e, n, r) {
              return r
                ? t
                : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
            }),
          (r.attributes &&
            ft(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            lt("value", function (e, n, r) {
              return r || "input" !== e.nodeName.toLowerCase()
                ? t
                : e.defaultValue;
            }),
          ft(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            lt(F, function (e, n, r) {
              var i;
              return r
                ? t
                : (i = e.getAttributeNode(n)) && i.specified
                ? i.value
                : e[n] === !0
                ? n.toLowerCase()
                : null;
            }),
          (w.find = ot),
          (w.expr = ot.selectors),
          (w.expr[":"] = w.expr.pseudos),
          (w.unique = ot.uniqueSort),
          (w.text = ot.getText),
          (w.isXMLDoc = ot.isXML),
          (w.contains = ot.contains);
      })(e);
    var B = {};
    (w.Callbacks = function (e) {
      e = "string" == typeof e ? B[e] || j(e) : w.extend({}, e);
      var n,
        r,
        i,
        s,
        o,
        u,
        a = [],
        f = !e.once && [],
        l = function (t) {
          for (
            r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
            a && s > o;
            o++
          )
            if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
              r = !1;
              break;
            }
          (n = !1),
            a && (f ? f.length && l(f.shift()) : r ? (a = []) : c.disable());
        },
        c = {
          add: function () {
            if (a) {
              var t = a.length;
              (function i(t) {
                w.each(t, function (t, n) {
                  var r = w.type(n);
                  "function" === r
                    ? (e.unique && c.has(n)) || a.push(n)
                    : n && n.length && "string" !== r && i(n);
                });
              })(arguments),
                n ? (s = a.length) : r && ((u = t), l(r));
            }
            return this;
          },
          remove: function () {
            return (
              a &&
                w.each(arguments, function (e, t) {
                  var r;
                  while ((r = w.inArray(t, a, r)) > -1)
                    a.splice(r, 1), n && (s >= r && s--, o >= r && o--);
                }),
              this
            );
          },
          has: function (e) {
            return e ? w.inArray(e, a) > -1 : !(!a || !a.length);
          },
          empty: function () {
            return (a = []), (s = 0), this;
          },
          disable: function () {
            return (a = f = r = t), this;
          },
          disabled: function () {
            return !a;
          },
          lock: function () {
            return (f = t), r || c.disable(), this;
          },
          locked: function () {
            return !f;
          },
          fireWith: function (e, t) {
            return (
              !a ||
                (i && !f) ||
                ((t = t || []),
                (t = [e, t.slice ? t.slice() : t]),
                n ? f.push(t) : l(t)),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return c;
    }),
      w.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", w.Callbacks("once memory"), "resolved"],
              ["reject", "fail", w.Callbacks("once memory"), "rejected"],
              ["notify", "progress", w.Callbacks("memory")],
            ],
            n = "pending",
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return i.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return w
                  .Deferred(function (n) {
                    w.each(t, function (t, s) {
                      var o = s[0],
                        u = w.isFunction(e[t]) && e[t];
                      i[s[1]](function () {
                        var e = u && u.apply(this, arguments);
                        e && w.isFunction(e.promise)
                          ? e
                              .promise()
                              .done(n.resolve)
                              .fail(n.reject)
                              .progress(n.notify)
                          : n[o + "With"](
                              this === r ? n.promise() : this,
                              u ? [e] : arguments
                            );
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? w.extend(e, r) : r;
              },
            },
            i = {};
          return (
            (r.pipe = r.then),
            w.each(t, function (e, s) {
              var o = s[2],
                u = s[3];
              (r[s[1]] = o.add),
                u &&
                  o.add(
                    function () {
                      n = u;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (i[s[0]] = function () {
                  return (
                    i[s[0] + "With"](this === i ? r : this, arguments), this
                  );
                }),
                (i[s[0] + "With"] = o.fireWith);
            }),
            r.promise(i),
            e && e.call(i, i),
            i
          );
        },
        when: function (e) {
          var t = 0,
            n = v.call(arguments),
            r = n.length,
            i = 1 !== r || (e && w.isFunction(e.promise)) ? r : 0,
            s = 1 === i ? e : w.Deferred(),
            o = function (e, t, n) {
              return function (r) {
                (t[e] = this),
                  (n[e] = arguments.length > 1 ? v.call(arguments) : r),
                  n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
              };
            },
            u,
            a,
            f;
          if (r > 1)
            for (u = Array(r), a = Array(r), f = Array(r); r > t; t++)
              n[t] && w.isFunction(n[t].promise)
                ? n[t]
                    .promise()
                    .done(o(t, f, n))
                    .fail(s.reject)
                    .progress(o(t, a, u))
                : --i;
          return i || s.resolveWith(f, n), s.promise();
        },
      }),
      (w.support = (function (t) {
        var n,
          r,
          s,
          u,
          a,
          f,
          l,
          c,
          h,
          p = o.createElement("div");
        if (
          (p.setAttribute("className", "t"),
          (p.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (n = p.getElementsByTagName("*") || []),
          (r = p.getElementsByTagName("a")[0]),
          !r || !r.style || !n.length)
        )
          return t;
        (u = o.createElement("select")),
          (f = u.appendChild(o.createElement("option"))),
          (s = p.getElementsByTagName("input")[0]),
          (r.style.cssText = "top:1px;float:left;opacity:.5"),
          (t.getSetAttribute = "t" !== p.className),
          (t.leadingWhitespace = 3 === p.firstChild.nodeType),
          (t.tbody = !p.getElementsByTagName("tbody").length),
          (t.htmlSerialize = !!p.getElementsByTagName("link").length),
          (t.style = /top/.test(r.getAttribute("style"))),
          (t.hrefNormalized = "/a" === r.getAttribute("href")),
          (t.opacity = /^0.5/.test(r.style.opacity)),
          (t.cssFloat = !!r.style.cssFloat),
          (t.checkOn = !!s.value),
          (t.optSelected = f.selected),
          (t.enctype = !!o.createElement("form").enctype),
          (t.html5Clone =
            "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML),
          (t.inlineBlockNeedsLayout = !1),
          (t.shrinkWrapBlocks = !1),
          (t.pixelPosition = !1),
          (t.deleteExpando = !0),
          (t.noCloneEvent = !0),
          (t.reliableMarginRight = !0),
          (t.boxSizingReliable = !0),
          (s.checked = !0),
          (t.noCloneChecked = s.cloneNode(!0).checked),
          (u.disabled = !0),
          (t.optDisabled = !f.disabled);
        try {
          delete p.test;
        } catch (d) {
          t.deleteExpando = !1;
        }
        (s = o.createElement("input")),
          s.setAttribute("value", ""),
          (t.input = "" === s.getAttribute("value")),
          (s.value = "t"),
          s.setAttribute("type", "radio"),
          (t.radioValue = "t" === s.value),
          s.setAttribute("checked", "t"),
          s.setAttribute("name", "t"),
          (a = o.createDocumentFragment()),
          a.appendChild(s),
          (t.appendChecked = s.checked),
          (t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
          p.attachEvent &&
            (p.attachEvent("onclick", function () {
              t.noCloneEvent = !1;
            }),
            p.cloneNode(!0).click());
        for (h in { submit: !0, change: !0, focusin: !0 })
          p.setAttribute((l = "on" + h), "t"),
            (t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1);
        (p.style.backgroundClip = "content-box"),
          (p.cloneNode(!0).style.backgroundClip = ""),
          (t.clearCloneStyle = "content-box" === p.style.backgroundClip);
        for (h in w(t)) break;
        return (
          (t.ownLast = "0" !== h),
          w(function () {
            var n,
              r,
              s,
              u =
                "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
              a = o.getElementsByTagName("body")[0];
            a &&
              ((n = o.createElement("div")),
              (n.style.cssText =
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
              a.appendChild(n).appendChild(p),
              (p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (s = p.getElementsByTagName("td")),
              (s[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
              (c = 0 === s[0].offsetHeight),
              (s[0].style.display = ""),
              (s[1].style.display = "none"),
              (t.reliableHiddenOffsets = c && 0 === s[0].offsetHeight),
              (p.innerHTML = ""),
              (p.style.cssText =
                "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
              w.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () {
                t.boxSizing = 4 === p.offsetWidth;
              }),
              e.getComputedStyle &&
                ((t.pixelPosition =
                  "1%" !== (e.getComputedStyle(p, null) || {}).top),
                (t.boxSizingReliable =
                  "4px" ===
                  (e.getComputedStyle(p, null) || { width: "4px" }).width),
                (r = p.appendChild(o.createElement("div"))),
                (r.style.cssText = p.style.cssText = u),
                (r.style.marginRight = r.style.width = "0"),
                (p.style.width = "1px"),
                (t.reliableMarginRight = !parseFloat(
                  (e.getComputedStyle(r, null) || {}).marginRight
                ))),
              typeof p.style.zoom !== i &&
                ((p.innerHTML = ""),
                (p.style.cssText =
                  u + "width:1px;padding:1px;display:inline;zoom:1"),
                (t.inlineBlockNeedsLayout = 3 === p.offsetWidth),
                (p.style.display = "block"),
                (p.innerHTML = "<div></div>"),
                (p.firstChild.style.width = "5px"),
                (t.shrinkWrapBlocks = 3 !== p.offsetWidth),
                t.inlineBlockNeedsLayout && (a.style.zoom = 1)),
              a.removeChild(n),
              (n = p = s = r = null));
          }),
          (n = u = a = f = r = s = null),
          t
        );
      })({}));
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      I = /([A-Z])/g;
    w.extend({
      cache: {},
      noData: {
        applet: !0,
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (e) {
        return (
          (e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando]), !!e && !z(e)
        );
      },
      data: function (e, t, n) {
        return q(e, t, n);
      },
      removeData: function (e, t) {
        return R(e, t);
      },
      _data: function (e, t, n) {
        return q(e, t, n, !0);
      },
      _removeData: function (e, t) {
        return R(e, t, !0);
      },
      acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
        var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
        return !t || (t !== !0 && e.getAttribute("classid") === t);
      },
    }),
      w.fn.extend({
        data: function (e, n) {
          var r,
            i,
            s = null,
            o = 0,
            u = this[0];
          if (e === t) {
            if (
              this.length &&
              ((s = w.data(u)), 1 === u.nodeType && !w._data(u, "parsedAttrs"))
            ) {
              for (r = u.attributes; r.length > o; o++)
                (i = r[o].name),
                  0 === i.indexOf("data-") &&
                    ((i = w.camelCase(i.slice(5))), U(u, i, s[i]));
              w._data(u, "parsedAttrs", !0);
            }
            return s;
          }
          return "object" == typeof e
            ? this.each(function () {
                w.data(this, e);
              })
            : arguments.length > 1
            ? this.each(function () {
                w.data(this, e, n);
              })
            : u
            ? U(u, e, w.data(u, e))
            : null;
        },
        removeData: function (e) {
          return this.each(function () {
            w.removeData(this, e);
          });
        },
      });
    w.extend({
      queue: function (e, n, r) {
        var i;
        return e
          ? ((n = (n || "fx") + "queue"),
            (i = w._data(e, n)),
            r &&
              (!i || w.isArray(r)
                ? (i = w._data(e, n, w.makeArray(r)))
                : i.push(r)),
            i || [])
          : t;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          s = w._queueHooks(e, t),
          o = function () {
            w.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
          !r && s && s.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          w._data(e, n) ||
          w._data(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              w._removeData(e, t + "queue"), w._removeData(e, n);
            }),
          })
        );
      },
    }),
      w.fn.extend({
        queue: function (e, n) {
          var r = 2;
          return (
            "string" != typeof e && ((n = e), (e = "fx"), r--),
            r > arguments.length
              ? w.queue(this[0], e)
              : n === t
              ? this
              : this.each(function () {
                  var t = w.queue(this, e, n);
                  w._queueHooks(this, e),
                    "fx" === e && "inprogress" !== t[0] && w.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            w.dequeue(this, e);
          });
        },
        delay: function (e, t) {
          return (
            (e = w.fx ? w.fx.speeds[e] || e : e),
            (t = t || "fx"),
            this.queue(t, function (t, n) {
              var r = setTimeout(t, e);
              n.stop = function () {
                clearTimeout(r);
              };
            })
          );
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, n) {
          var r,
            i = 1,
            s = w.Deferred(),
            o = this,
            u = this.length,
            a = function () {
              --i || s.resolveWith(o, [o]);
            };
          "string" != typeof e && ((n = e), (e = t)), (e = e || "fx");
          while (u--)
            (r = w._data(o[u], e + "queueHooks")),
              r && r.empty && (i++, r.empty.add(a));
          return a(), s.promise(n);
        },
      });
    var W,
      X,
      V = /[\t\r\n\f]/g,
      $ = /\r/g,
      J = /^(?:input|select|textarea|button|object)$/i,
      K = /^(?:a|area)$/i,
      Q = /^(?:checked|selected)$/i,
      G = w.support.getSetAttribute,
      Y = w.support.input;
    w.fn.extend({
      attr: function (e, t) {
        return w.access(this, w.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          w.removeAttr(this, e);
        });
      },
      prop: function (e, t) {
        return w.access(this, w.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return (
          (e = w.propFix[e] || e),
          this.each(function () {
            try {
              (this[e] = t), delete this[e];
            } catch (n) {}
          })
        );
      },
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          s,
          o = 0,
          u = this.length,
          a = "string" == typeof e && e;
        if (w.isFunction(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, this.className));
          });
        if (a)
          for (t = (e || "").match(S) || []; u > o; o++)
            if (
              ((n = this[o]),
              (r =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(V, " ")
                  : " ")))
            ) {
              s = 0;
              while ((i = t[s++]))
                0 > r.indexOf(" " + i + " ") && (r += i + " ");
              n.className = w.trim(r);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          s,
          o = 0,
          u = this.length,
          a = 0 === arguments.length || ("string" == typeof e && e);
        if (w.isFunction(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, this.className));
          });
        if (a)
          for (t = (e || "").match(S) || []; u > o; o++)
            if (
              ((n = this[o]),
              (r =
                1 === n.nodeType &&
                (n.className ? (" " + n.className + " ").replace(V, " ") : "")))
            ) {
              s = 0;
              while ((i = t[s++]))
                while (r.indexOf(" " + i + " ") >= 0)
                  r = r.replace(" " + i + " ", " ");
              n.className = e ? w.trim(r) : "";
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : w.isFunction(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, this.className, t), t);
            })
          : this.each(function () {
              if ("string" === n) {
                var t,
                  r = 0,
                  s = w(this),
                  o = e.match(S) || [];
                while ((t = o[r++]))
                  s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
              } else (n === i || "boolean" === n) && (this.className && w._data(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t = " " + e + " ",
          n = 0,
          r = this.length;
        for (; r > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0
          )
            return !0;
        return !1;
      },
      val: function (e) {
        var n,
          r,
          i,
          s = this[0];
        {
          if (arguments.length)
            return (
              (i = w.isFunction(e)),
              this.each(function (n) {
                var s;
                1 === this.nodeType &&
                  ((s = i ? e.call(this, n, w(this).val()) : e),
                  null == s
                    ? (s = "")
                    : "number" == typeof s
                    ? (s += "")
                    : w.isArray(s) &&
                      (s = w.map(s, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  (r =
                    w.valHooks[this.type] ||
                    w.valHooks[this.nodeName.toLowerCase()]),
                  (r && "set" in r && r.set(this, s, "value") !== t) ||
                    (this.value = s));
              })
            );
          if (s)
            return (
              (r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()]),
              r && "get" in r && (n = r.get(s, "value")) !== t
                ? n
                : ((n = s.value),
                  "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
            );
        }
      },
    }),
      w.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = w.find.attr(e, "value");
              return null != t ? t : e.text;
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                s = "select-one" === e.type || 0 > i,
                o = s ? null : [],
                u = s ? i + 1 : r.length,
                a = 0 > i ? u : s ? i : 0;
              for (; u > a; a++)
                if (
                  ((n = r[a]),
                  !(
                    (!n.selected && a !== i) ||
                    (w.support.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      w.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((t = w(n).val()), s)) return t;
                  o.push(t);
                }
              return o;
            },
            set: function (e, t) {
              var n,
                r,
                i = e.options,
                s = w.makeArray(t),
                o = i.length;
              while (o--)
                (r = i[o]),
                  (r.selected = w.inArray(w(r).val(), s) >= 0) && (n = !0);
              return n || (e.selectedIndex = -1), s;
            },
          },
        },
        attr: function (e, n, r) {
          var s,
            o,
            u = e.nodeType;
          if (e && 3 !== u && 8 !== u && 2 !== u)
            return typeof e.getAttribute === i
              ? w.prop(e, n, r)
              : ((1 === u && w.isXMLDoc(e)) ||
                  ((n = n.toLowerCase()),
                  (s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W))),
                r === t
                  ? s && "get" in s && null !== (o = s.get(e, n))
                    ? o
                    : ((o = w.find.attr(e, n)), null == o ? t : o)
                  : null !== r
                  ? s && "set" in s && (o = s.set(e, r, n)) !== t
                    ? o
                    : (e.setAttribute(n, r + ""), r)
                  : (w.removeAttr(e, n), t));
        },
        removeAttr: function (e, t) {
          var n,
            r,
            i = 0,
            s = t && t.match(S);
          if (s && 1 === e.nodeType)
            while ((n = s[i++]))
              (r = w.propFix[n] || n),
                w.expr.match.bool.test(n)
                  ? (Y && G) || !Q.test(n)
                    ? (e[r] = !1)
                    : (e[w.camelCase("default-" + n)] = e[r] = !1)
                  : w.attr(e, n, ""),
                e.removeAttribute(G ? n : r);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (
                !w.support.radioValue &&
                "radio" === t &&
                w.nodeName(e, "input")
              ) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
        prop: function (e, n, r) {
          var i,
            s,
            o,
            u = e.nodeType;
          if (e && 3 !== u && 8 !== u && 2 !== u)
            return (
              (o = 1 !== u || !w.isXMLDoc(e)),
              o && ((n = w.propFix[n] || n), (s = w.propHooks[n])),
              r !== t
                ? s && "set" in s && (i = s.set(e, r, n)) !== t
                  ? i
                  : (e[n] = r)
                : s && "get" in s && null !== (i = s.get(e, n))
                ? i
                : e[n]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = w.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : J.test(e.nodeName) || (K.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
      }),
      (X = {
        set: function (e, t, n) {
          return (
            t === !1
              ? w.removeAttr(e, n)
              : (Y && G) || !Q.test(n)
              ? e.setAttribute((!G && w.propFix[n]) || n, n)
              : (e[w.camelCase("default-" + n)] = e[n] = !0),
            n
          );
        },
      }),
      w.each(w.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] =
          (Y && G) || !Q.test(n)
            ? function (e, n, i) {
                var s = w.expr.attrHandle[n],
                  o = i
                    ? t
                    : (w.expr.attrHandle[n] = t) != r(e, n, i)
                    ? n.toLowerCase()
                    : null;
                return (w.expr.attrHandle[n] = s), o;
              }
            : function (e, n, r) {
                return r
                  ? t
                  : e[w.camelCase("default-" + n)]
                  ? n.toLowerCase()
                  : null;
              };
      }),
      (Y && G) ||
        (w.attrHooks.value = {
          set: function (e, n, r) {
            return w.nodeName(e, "input")
              ? ((e.defaultValue = n), t)
              : W && W.set(e, n, r);
          },
        }),
      G ||
        ((W = {
          set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return (
              i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
              (i.value = n += ""),
              "value" === r || n === e.getAttribute(r) ? n : t
            );
          },
        }),
        (w.expr.attrHandle.id =
          w.expr.attrHandle.name =
          w.expr.attrHandle.coords =
            function (e, n, r) {
              var i;
              return r
                ? t
                : (i = e.getAttributeNode(n)) && "" !== i.value
                ? i.value
                : null;
            }),
        (w.valHooks.button = {
          get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t;
          },
          set: W.set,
        }),
        (w.attrHooks.contenteditable = {
          set: function (e, t, n) {
            W.set(e, "" === t ? !1 : t, n);
          },
        }),
        w.each(["width", "height"], function (e, n) {
          w.attrHooks[n] = {
            set: function (e, r) {
              return "" === r ? (e.setAttribute(n, "auto"), r) : t;
            },
          };
        })),
      w.support.hrefNormalized ||
        w.each(["href", "src"], function (e, t) {
          w.propHooks[t] = {
            get: function (e) {
              return e.getAttribute(t, 4);
            },
          };
        }),
      w.support.style ||
        (w.attrHooks.style = {
          get: function (e) {
            return e.style.cssText || t;
          },
          set: function (e, t) {
            return (e.style.cssText = t + "");
          },
        }),
      w.support.optSelected ||
        (w.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return (
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
              null
            );
          },
        }),
      w.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          w.propFix[this.toLowerCase()] = this;
        }
      ),
      w.support.enctype || (w.propFix.enctype = "encoding"),
      w.each(["radio", "checkbox"], function () {
        (w.valHooks[this] = {
          set: function (e, n) {
            return w.isArray(n)
              ? (e.checked = w.inArray(w(e).val(), n) >= 0)
              : t;
          },
        }),
          w.support.checkOn ||
            (w.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;
    (w.event = {
      global: {},
      add: function (e, n, r, s, o) {
        var u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g,
          y = w._data(e);
        if (y) {
          r.handler && ((l = r), (r = l.handler), (o = l.selector)),
            r.guid || (r.guid = w.guid++),
            (a = y.events) || (a = y.events = {}),
            (h = y.handle) ||
              ((h = y.handle =
                function (e) {
                  return typeof w === i || (e && w.event.triggered === e.type)
                    ? t
                    : w.event.dispatch.apply(h.elem, arguments);
                }),
              (h.elem = e)),
            (n = (n || "").match(S) || [""]),
            (f = n.length);
          while (f--)
            (u = rt.exec(n[f]) || []),
              (v = g = u[1]),
              (m = (u[2] || "").split(".").sort()),
              v &&
                ((c = w.event.special[v] || {}),
                (v = (o ? c.delegateType : c.bindType) || v),
                (c = w.event.special[v] || {}),
                (p = w.extend(
                  {
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join("."),
                  },
                  l
                )),
                (d = a[v]) ||
                  ((d = a[v] = []),
                  (d.delegateCount = 0),
                  (c.setup && c.setup.call(e, s, m, h) !== !1) ||
                    (e.addEventListener
                      ? e.addEventListener(v, h, !1)
                      : e.attachEvent && e.attachEvent("on" + v, h))),
                c.add &&
                  (c.add.call(e, p),
                  p.handler.guid || (p.handler.guid = r.guid)),
                o ? d.splice(d.delegateCount++, 0, p) : d.push(p),
                (w.event.global[v] = !0));
          e = null;
        }
      },
      remove: function (e, t, n, r, i) {
        var s,
          o,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m = w.hasData(e) && w._data(e);
        if (m && (l = m.events)) {
          (t = (t || "").match(S) || [""]), (f = t.length);
          while (f--)
            if (
              ((u = rt.exec(t[f]) || []),
              (p = v = u[1]),
              (d = (u[2] || "").split(".").sort()),
              p)
            ) {
              (c = w.event.special[p] || {}),
                (p = (r ? c.delegateType : c.bindType) || p),
                (h = l[p] || []),
                (u =
                  u[2] &&
                  RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                (a = s = h.length);
              while (s--)
                (o = h[s]),
                  (!i && v !== o.origType) ||
                    (n && n.guid !== o.guid) ||
                    (u && !u.test(o.namespace)) ||
                    (r && r !== o.selector && ("**" !== r || !o.selector)) ||
                    (h.splice(s, 1),
                    o.selector && h.delegateCount--,
                    c.remove && c.remove.call(e, o));
              a &&
                !h.length &&
                ((c.teardown && c.teardown.call(e, d, m.handle) !== !1) ||
                  w.removeEvent(e, p, m.handle),
                delete l[p]);
            } else for (p in l) w.event.remove(e, p + t[f], n, r, !0);
          w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"));
        }
      },
      trigger: function (n, r, i, s) {
        var u,
          a,
          f,
          l,
          c,
          h,
          p,
          d = [i || o],
          v = y.call(n, "type") ? n.type : n,
          m = y.call(n, "namespace") ? n.namespace.split(".") : [];
        if (
          ((f = h = i = i || o),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !nt.test(v + w.event.triggered) &&
            (v.indexOf(".") >= 0 &&
              ((m = v.split(".")), (v = m.shift()), m.sort()),
            (a = 0 > v.indexOf(":") && "on" + v),
            (n = n[w.expando] ? n : new w.Event(v, "object" == typeof n && n)),
            (n.isTrigger = s ? 2 : 3),
            (n.namespace = m.join(".")),
            (n.namespace_re = n.namespace
              ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (n.result = t),
            n.target || (n.target = i),
            (r = null == r ? [n] : w.makeArray(r, [n])),
            (c = w.event.special[v] || {}),
            s || !c.trigger || c.trigger.apply(i, r) !== !1))
        ) {
          if (!s && !c.noBubble && !w.isWindow(i)) {
            for (
              l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
              f;
              f = f.parentNode
            )
              d.push(f), (h = f);
            h === (i.ownerDocument || o) &&
              d.push(h.defaultView || h.parentWindow || e);
          }
          p = 0;
          while ((f = d[p++]) && !n.isPropagationStopped())
            (n.type = p > 1 ? l : c.bindType || v),
              (u =
                (w._data(f, "events") || {})[n.type] && w._data(f, "handle")),
              u && u.apply(f, r),
              (u = a && f[a]),
              u &&
                w.acceptData(f) &&
                u.apply &&
                u.apply(f, r) === !1 &&
                n.preventDefault();
          if (
            ((n.type = v),
            !s &&
              !n.isDefaultPrevented() &&
              (!c._default || c._default.apply(d.pop(), r) === !1) &&
              w.acceptData(i) &&
              a &&
              i[v] &&
              !w.isWindow(i))
          ) {
            (h = i[a]), h && (i[a] = null), (w.event.triggered = v);
            try {
              i[v]();
            } catch (g) {}
            (w.event.triggered = t), h && (i[a] = h);
          }
          return n.result;
        }
      },
      dispatch: function (e) {
        e = w.event.fix(e);
        var n,
          r,
          i,
          s,
          o,
          u = [],
          a = v.call(arguments),
          f = (w._data(this, "events") || {})[e.type] || [],
          l = w.event.special[e.type] || {};
        if (
          ((a[0] = e),
          (e.delegateTarget = this),
          !l.preDispatch || l.preDispatch.call(this, e) !== !1)
        ) {
          (u = w.event.handlers.call(this, e, f)), (n = 0);
          while ((s = u[n++]) && !e.isPropagationStopped()) {
            (e.currentTarget = s.elem), (o = 0);
            while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
              (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                ((e.handleObj = i),
                (e.data = i.data),
                (r = (
                  (w.event.special[i.origType] || {}).handle || i.handler
                ).apply(s.elem, a)),
                r !== t &&
                  (e.result = r) === !1 &&
                  (e.preventDefault(), e.stopPropagation()));
          }
          return l.postDispatch && l.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, n) {
        var r,
          i,
          s,
          o,
          u = [],
          a = n.delegateCount,
          f = e.target;
        if (a && f.nodeType && (!e.button || "click" !== e.type))
          for (; f != this; f = f.parentNode || this)
            if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
              for (s = [], o = 0; a > o; o++)
                (i = n[o]),
                  (r = i.selector + " "),
                  s[r] === t &&
                    (s[r] = i.needsContext
                      ? w(r, this).index(f) >= 0
                      : w.find(r, this, null, [f]).length),
                  s[r] && s.push(i);
              s.length && u.push({ elem: f, handlers: s });
            }
        return n.length > a && u.push({ elem: this, handlers: n.slice(a) }), u;
      },
      fix: function (e) {
        if (e[w.expando]) return e;
        var t,
          n,
          r,
          i = e.type,
          s = e,
          u = this.fixHooks[i];
        u ||
          (this.fixHooks[i] = u =
            tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
          (r = u.props ? this.props.concat(u.props) : this.props),
          (e = new w.Event(s)),
          (t = r.length);
        while (t--) (n = r[t]), (e[n] = s[n]);
        return (
          e.target || (e.target = s.srcElement || o),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          (e.metaKey = !!e.metaKey),
          u.filter ? u.filter(e, s) : e
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (e, n) {
          var r,
            i,
            s,
            u = n.button,
            a = n.fromElement;
          return (
            null == e.pageX &&
              null != n.clientX &&
              ((i = e.target.ownerDocument || o),
              (s = i.documentElement),
              (r = i.body),
              (e.pageX =
                n.clientX +
                ((s && s.scrollLeft) || (r && r.scrollLeft) || 0) -
                ((s && s.clientLeft) || (r && r.clientLeft) || 0)),
              (e.pageY =
                n.clientY +
                ((s && s.scrollTop) || (r && r.scrollTop) || 0) -
                ((s && s.clientTop) || (r && r.clientTop) || 0))),
            !e.relatedTarget &&
              a &&
              (e.relatedTarget = a === e.target ? n.toElement : a),
            e.which ||
              u === t ||
              (e.which = 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0),
            e
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== ot() && this.focus)
              try {
                return this.focus(), !1;
              } catch (e) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === ot() && this.blur ? (this.blur(), !1) : t;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return w.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : t;
          },
          _default: function (e) {
            return w.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== t && (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, n, r) {
        var i = w.extend(new w.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (w.removeEvent = o.removeEventListener
        ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
          }
        : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent &&
              (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n));
          }),
      (w.Event = function (e, n) {
        return this instanceof w.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  e.returnValue === !1 ||
                  (e.getPreventDefault && e.getPreventDefault())
                    ? it
                    : st))
              : (this.type = e),
            n && w.extend(this, n),
            (this.timeStamp = (e && e.timeStamp) || w.now()),
            (this[w.expando] = !0),
            t)
          : new w.Event(e, n);
      }),
      (w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = it),
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = it),
            e &&
              (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          (this.isImmediatePropagationStopped = it), this.stopPropagation();
        },
      }),
      w.each(
        { mouseenter: "mouseover", mouseleave: "mouseout" },
        function (e, t) {
          w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                r = this,
                i = e.relatedTarget,
                s = e.handleObj;
              return (
                (!i || (i !== r && !w.contains(r, i))) &&
                  ((e.type = s.origType),
                  (n = s.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      w.support.submitBubbles ||
        (w.event.special.submit = {
          setup: function () {
            return w.nodeName(this, "form")
              ? !1
              : (w.event.add(
                  this,
                  "click._submit keypress._submit",
                  function (e) {
                    var n = e.target,
                      r =
                        w.nodeName(n, "input") || w.nodeName(n, "button")
                          ? n.form
                          : t;
                    r &&
                      !w._data(r, "submitBubbles") &&
                      (w.event.add(r, "submit._submit", function (e) {
                        e._submit_bubble = !0;
                      }),
                      w._data(r, "submitBubbles", !0));
                  }
                ),
                t);
          },
          postDispatch: function (e) {
            e._submit_bubble &&
              (delete e._submit_bubble,
              this.parentNode &&
                !e.isTrigger &&
                w.event.simulate("submit", this.parentNode, e, !0));
          },
          teardown: function () {
            return w.nodeName(this, "form")
              ? !1
              : (w.event.remove(this, "._submit"), t);
          },
        }),
      w.support.changeBubbles ||
        (w.event.special.change = {
          setup: function () {
            return Z.test(this.nodeName)
              ? (("checkbox" === this.type || "radio" === this.type) &&
                  (w.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName &&
                      (this._just_changed = !0);
                  }),
                  w.event.add(this, "click._change", function (e) {
                    this._just_changed &&
                      !e.isTrigger &&
                      (this._just_changed = !1),
                      w.event.simulate("change", this, e, !0);
                  })),
                !1)
              : (w.event.add(this, "beforeactivate._change", function (e) {
                  var t = e.target;
                  Z.test(t.nodeName) &&
                    !w._data(t, "changeBubbles") &&
                    (w.event.add(t, "change._change", function (e) {
                      !this.parentNode ||
                        e.isSimulated ||
                        e.isTrigger ||
                        w.event.simulate("change", this.parentNode, e, !0);
                    }),
                    w._data(t, "changeBubbles", !0));
                }),
                t);
          },
          handle: function (e) {
            var n = e.target;
            return this !== n ||
              e.isSimulated ||
              e.isTrigger ||
              ("radio" !== n.type && "checkbox" !== n.type)
              ? e.handleObj.handler.apply(this, arguments)
              : t;
          },
          teardown: function () {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName);
          },
        }),
      w.support.focusinBubbles ||
        w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = 0,
            r = function (e) {
              w.event.simulate(t, e.target, w.event.fix(e), !0);
            };
          w.event.special[t] = {
            setup: function () {
              0 === n++ && o.addEventListener(e, r, !0);
            },
            teardown: function () {
              0 === --n && o.removeEventListener(e, r, !0);
            },
          };
        }),
      w.fn.extend({
        on: function (e, n, r, i, s) {
          var o, u;
          if ("object" == typeof e) {
            "string" != typeof n && ((r = r || n), (n = t));
            for (o in e) this.on(o, n, r, e[o], s);
            return this;
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = t))
              : null == i &&
                ("string" == typeof n
                  ? ((i = r), (r = t))
                  : ((i = r), (r = n), (n = t))),
            i === !1)
          )
            i = st;
          else if (!i) return this;
          return (
            1 === s &&
              ((u = i),
              (i = function (e) {
                return w().off(e), u.apply(this, arguments);
              }),
              (i.guid = u.guid || (u.guid = w.guid++))),
            this.each(function () {
              w.event.add(this, e, i, r, n);
            })
          );
        },
        one: function (e, t, n, r) {
          return this.on(e, t, n, r, 1);
        },
        off: function (e, n, r) {
          var i, s;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              w(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (s in e) this.off(s, n, e[s]);
            return this;
          }
          return (
            (n === !1 || "function" == typeof n) && ((r = n), (n = t)),
            r === !1 && (r = st),
            this.each(function () {
              w.event.remove(this, e, r, n);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            w.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, n) {
          var r = this[0];
          return r ? w.event.trigger(e, n, r, !0) : t;
        },
      });
    var ut = /^.[^:#\[\.,]*$/,
      at = /^(?:parents|prev(?:Until|All))/,
      ft = w.expr.match.needsContext,
      lt = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; i > t; t++) if (w.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; i > t; t++) w.find(e, r[t], n);
        return (
          (n = this.pushStack(i > 1 ? w.unique(n) : n)),
          (n.selector = this.selector ? this.selector + " " + e : e),
          n
        );
      },
      has: function (e) {
        var t,
          n = w(e, this),
          r = n.length;
        return this.filter(function () {
          for (t = 0; r > t; t++) if (w.contains(this, n[t])) return !0;
        });
      },
      not: function (e) {
        return this.pushStack(ht(this, e || [], !0));
      },
      filter: function (e) {
        return this.pushStack(ht(this, e || [], !1));
      },
      is: function (e) {
        return !!ht(
          this,
          "string" == typeof e && ft.test(e) ? w(e) : e || [],
          !1
        ).length;
      },
      closest: function (e, t) {
        var n,
          r = 0,
          i = this.length,
          s = [],
          o = ft.test(e) || "string" != typeof e ? w(e, t || this.context) : 0;
        for (; i > r; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              11 > n.nodeType &&
              (o
                ? o.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              n = s.push(n);
              break;
            }
        return this.pushStack(s.length > 1 ? w.unique(s) : s);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? w.inArray(this[0], w(e))
            : w.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        var n =
            "string" == typeof e
              ? w(e, t)
              : w.makeArray(e && e.nodeType ? [e] : e),
          r = w.merge(this.get(), n);
        return this.pushStack(w.unique(r));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    });
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return w.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return w.dir(e, "parentNode", n);
        },
        next: function (e) {
          return ct(e, "nextSibling");
        },
        prev: function (e) {
          return ct(e, "previousSibling");
        },
        nextAll: function (e) {
          return w.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return w.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return w.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return w.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return w.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return w.sibling(e.firstChild);
        },
        contents: function (e) {
          return w.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : w.merge([], e.childNodes);
        },
      },
      function (e, t) {
        w.fn[e] = function (n, r) {
          var i = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 &&
              (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      }
    ),
      w.extend({
        filter: function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? w.find.matchesSelector(r, e)
                ? [r]
                : []
              : w.find.matches(
                  e,
                  w.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        },
        dir: function (e, n, r) {
          var i = [],
            s = e[n];
          while (
            s &&
            9 !== s.nodeType &&
            (r === t || 1 !== s.nodeType || !w(s).is(r))
          )
            1 === s.nodeType && i.push(s), (s = s[n]);
          return i;
        },
        sibling: function (e, t) {
          var n = [];
          for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
      });
    var dt =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      vt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:" + dt + ")[\\s/>]", "i"),
      gt = /^\s+/,
      yt =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      wt = /<tbody/i,
      Et = /<|&#?\w+;/,
      St = /<(?:script|style|link)/i,
      xt = /^(?:checkbox|radio)$/i,
      Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Nt = /^$|\/(?:java|ecma)script/i,
      Ct = /^true\/(.*)/,
      kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Lt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: w.support.htmlSerialize
          ? [0, "", ""]
          : [1, "X<div>", "</div>"],
      },
      At = pt(o),
      Ot = At.appendChild(o.createElement("div"));
    (Lt.optgroup = Lt.option),
      (Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead),
      (Lt.th = Lt.td),
      w.fn.extend({
        text: function (e) {
          return w.access(
            this,
            function (e) {
              return e === t
                ? w.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || o).createTextNode(e)
                  );
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = Mt(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = Mt(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          var n,
            r = e ? w.filter(e, this) : this,
            i = 0;
          for (; null != (n = r[i]); i++)
            t || 1 !== n.nodeType || w.cleanData(jt(n)),
              n.parentNode &&
                (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          var e,
            t = 0;
          for (; null != (e = this[t]); t++) {
            1 === e.nodeType && w.cleanData(jt(e, !1));
            while (e.firstChild) e.removeChild(e.firstChild);
            e.options && w.nodeName(e, "select") && (e.options.length = 0);
          }
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null == e ? !1 : e),
            (t = null == t ? e : t),
            this.map(function () {
              return w.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return w.access(
            this,
            function (e) {
              var n = this[0] || {},
                r = 0,
                i = this.length;
              if (e === t)
                return 1 === n.nodeType ? n.innerHTML.replace(vt, "") : t;
              if (
                !(
                  "string" != typeof e ||
                  St.test(e) ||
                  (!w.support.htmlSerialize && mt.test(e)) ||
                  (!w.support.leadingWhitespace && gt.test(e)) ||
                  Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]
                )
              ) {
                e = e.replace(yt, "<$1></$2>");
                try {
                  for (; i > r; r++)
                    (n = this[r] || {}),
                      1 === n.nodeType &&
                        (w.cleanData(jt(n, !1)), (n.innerHTML = e));
                  n = 0;
                } catch (s) {}
              }
              n && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = w.map(this, function (e) {
              return [e.nextSibling, e.parentNode];
            }),
            t = 0;
          return (
            this.domManip(
              arguments,
              function (n) {
                var r = e[t++],
                  i = e[t++];
                i &&
                  (r && r.parentNode !== i && (r = this.nextSibling),
                  w(this).remove(),
                  i.insertBefore(n, r));
              },
              !0
            ),
            t ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t, n) {
          e = p.apply([], e);
          var r,
            i,
            s,
            o,
            u,
            a,
            f = 0,
            l = this.length,
            c = this,
            h = l - 1,
            d = e[0],
            v = w.isFunction(d);
          if (
            v ||
            (!(1 >= l || "string" != typeof d || w.support.checkClone) &&
              Tt.test(d))
          )
            return this.each(function (r) {
              var i = c.eq(r);
              v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
            });
          if (
            l &&
            ((a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this)),
            (r = a.firstChild),
            1 === a.childNodes.length && (a = r),
            r)
          ) {
            for (o = w.map(jt(a, "script"), _t), s = o.length; l > f; f++)
              (i = a),
                f !== h &&
                  ((i = w.clone(i, !0, !0)), s && w.merge(o, jt(i, "script"))),
                t.call(this[f], i, f);
            if (s)
              for (
                u = o[o.length - 1].ownerDocument, w.map(o, Dt), f = 0;
                s > f;
                f++
              )
                (i = o[f]),
                  Nt.test(i.type || "") &&
                    !w._data(i, "globalEval") &&
                    w.contains(u, i) &&
                    (i.src
                      ? w._evalUrl(i.src)
                      : w.globalEval(
                          (
                            i.text ||
                            i.textContent ||
                            i.innerHTML ||
                            ""
                          ).replace(kt, "")
                        ));
            a = r = null;
          }
          return this;
        },
      });
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          var n,
            r = 0,
            i = [],
            s = w(e),
            o = s.length - 1;
          for (; o >= r; r++)
            (n = r === o ? this : this.clone(!0)),
              w(s[r])[t](n),
              d.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
    w.extend({
      clone: function (e, t, n) {
        var r,
          i,
          s,
          o,
          u,
          a = w.contains(e.ownerDocument, e);
        if (
          (w.support.html5Clone ||
          w.isXMLDoc(e) ||
          !mt.test("<" + e.nodeName + ">")
            ? (s = e.cloneNode(!0))
            : ((Ot.innerHTML = e.outerHTML),
              Ot.removeChild((s = Ot.firstChild))),
          !(
            (w.support.noCloneEvent && w.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            w.isXMLDoc(e)
          ))
        )
          for (r = jt(s), u = jt(e), o = 0; null != (i = u[o]); ++o)
            r[o] && Bt(i, r[o]);
        if (t)
          if (n)
            for (u = u || jt(e), r = r || jt(s), o = 0; null != (i = u[o]); o++)
              Ht(i, r[o]);
          else Ht(e, s);
        return (
          (r = jt(s, "script")),
          r.length > 0 && Pt(r, !a && jt(e, "script")),
          (r = u = i = null),
          s
        );
      },
      buildFragment: function (e, t, n, r) {
        var i,
          s,
          o,
          u,
          a,
          f,
          l,
          c = e.length,
          h = pt(t),
          p = [],
          d = 0;
        for (; c > d; d++)
          if (((s = e[d]), s || 0 === s))
            if ("object" === w.type(s)) w.merge(p, s.nodeType ? [s] : s);
            else if (Et.test(s)) {
              (u = u || h.appendChild(t.createElement("div"))),
                (a = (bt.exec(s) || ["", ""])[1].toLowerCase()),
                (l = Lt[a] || Lt._default),
                (u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2]),
                (i = l[0]);
              while (i--) u = u.lastChild;
              if (
                (!w.support.leadingWhitespace &&
                  gt.test(s) &&
                  p.push(t.createTextNode(gt.exec(s)[0])),
                !w.support.tbody)
              ) {
                (s =
                  "table" !== a || wt.test(s)
                    ? "<table>" !== l[1] || wt.test(s)
                      ? 0
                      : u
                    : u.firstChild),
                  (i = s && s.childNodes.length);
                while (i--)
                  w.nodeName((f = s.childNodes[i]), "tbody") &&
                    !f.childNodes.length &&
                    s.removeChild(f);
              }
              w.merge(p, u.childNodes), (u.textContent = "");
              while (u.firstChild) u.removeChild(u.firstChild);
              u = h.lastChild;
            } else p.push(t.createTextNode(s));
        u && h.removeChild(u),
          w.support.appendChecked || w.grep(jt(p, "input"), Ft),
          (d = 0);
        while ((s = p[d++]))
          if (
            (!r || -1 === w.inArray(s, r)) &&
            ((o = w.contains(s.ownerDocument, s)),
            (u = jt(h.appendChild(s), "script")),
            o && Pt(u),
            n)
          ) {
            i = 0;
            while ((s = u[i++])) Nt.test(s.type || "") && n.push(s);
          }
        return (u = null), h;
      },
      cleanData: function (e, t) {
        var n,
          r,
          s,
          o,
          u = 0,
          a = w.expando,
          f = w.cache,
          l = w.support.deleteExpando,
          h = w.event.special;
        for (; null != (n = e[u]); u++)
          if ((t || w.acceptData(n)) && ((s = n[a]), (o = s && f[s]))) {
            if (o.events)
              for (r in o.events)
                h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
            f[s] &&
              (delete f[s],
              l
                ? delete n[a]
                : typeof n.removeAttribute !== i
                ? n.removeAttribute(a)
                : (n[a] = null),
              c.push(s));
          }
      },
      _evalUrl: function (e) {
        return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      },
    }),
      w.fn.extend({
        wrapAll: function (e) {
          if (w.isFunction(e))
            return this.each(function (t) {
              w(this).wrapAll(e.call(this, t));
            });
          if (this[0]) {
            var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  var e = this;
                  while (e.firstChild && 1 === e.firstChild.nodeType)
                    e = e.firstChild;
                  return e;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (e) {
          return w.isFunction(e)
            ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = w(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = w.isFunction(e);
          return this.each(function (n) {
            w(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              w.nodeName(this, "body") || w(this).replaceWith(this.childNodes);
            })
            .end();
        },
      });
    var It,
      qt,
      Rt,
      Ut = /alpha\([^)]*\)/i,
      zt = /opacity\s*=\s*([^)]*)/,
      Wt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Vt = /^margin/,
      $t = RegExp("^(" + E + ")(.*)$", "i"),
      Jt = RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
      Kt = RegExp("^([+-])=(" + E + ")", "i"),
      Qt = { BODY: "block" },
      Gt = { position: "absolute", visibility: "hidden", display: "block" },
      Yt = { letterSpacing: 0, fontWeight: 400 },
      Zt = ["Top", "Right", "Bottom", "Left"],
      en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
      css: function (e, n) {
        return w.access(
          this,
          function (e, n, r) {
            var i,
              s,
              o = {},
              u = 0;
            if (w.isArray(n)) {
              for (s = qt(e), i = n.length; i > u; u++)
                o[n[u]] = w.css(e, n[u], !1, s);
              return o;
            }
            return r !== t ? w.style(e, n, r) : w.css(e, n);
          },
          e,
          n,
          arguments.length > 1
        );
      },
      show: function () {
        return rn(this, !0);
      },
      hide: function () {
        return rn(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              nn(this) ? w(this).show() : w(this).hide();
            });
      },
    }),
      w.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Rt(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: w.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (e, n, r, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var s,
              o,
              u,
              a = w.camelCase(n),
              f = e.style;
            if (
              ((n = w.cssProps[a] || (w.cssProps[a] = tn(f, a))),
              (u = w.cssHooks[n] || w.cssHooks[a]),
              r === t)
            )
              return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            if (
              ((o = typeof r),
              "string" === o &&
                (s = Kt.exec(r)) &&
                ((r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n))),
                (o = "number")),
              !(
                null == r ||
                ("number" === o && isNaN(r)) ||
                ("number" !== o || w.cssNumber[a] || (r += "px"),
                w.support.clearCloneStyle ||
                  "" !== r ||
                  0 !== n.indexOf("background") ||
                  (f[n] = "inherit"),
                u && "set" in u && (r = u.set(e, r, i)) === t)
              ))
            )
              try {
                f[n] = r;
              } catch (l) {}
          }
        },
        css: function (e, n, r, i) {
          var s,
            o,
            u,
            a = w.camelCase(n);
          return (
            (n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a))),
            (u = w.cssHooks[n] || w.cssHooks[a]),
            u && "get" in u && (o = u.get(e, !0, r)),
            o === t && (o = Rt(e, n, i)),
            "normal" === o && n in Yt && (o = Yt[n]),
            "" === r || r
              ? ((s = parseFloat(o)), r === !0 || w.isNumeric(s) ? s || 0 : o)
              : o
          );
        },
      }),
      e.getComputedStyle
        ? ((qt = function (t) {
            return e.getComputedStyle(t, null);
          }),
          (Rt = function (e, n, r) {
            var i,
              s,
              o,
              u = r || qt(e),
              a = u ? u.getPropertyValue(n) || u[n] : t,
              f = e.style;
            return (
              u &&
                ("" !== a ||
                  w.contains(e.ownerDocument, e) ||
                  (a = w.style(e, n)),
                Jt.test(a) &&
                  Vt.test(n) &&
                  ((i = f.width),
                  (s = f.minWidth),
                  (o = f.maxWidth),
                  (f.minWidth = f.maxWidth = f.width = a),
                  (a = u.width),
                  (f.width = i),
                  (f.minWidth = s),
                  (f.maxWidth = o))),
              a
            );
          }))
        : o.documentElement.currentStyle &&
          ((qt = function (e) {
            return e.currentStyle;
          }),
          (Rt = function (e, n, r) {
            var i,
              s,
              o,
              u = r || qt(e),
              a = u ? u[n] : t,
              f = e.style;
            return (
              null == a && f && f[n] && (a = f[n]),
              Jt.test(a) &&
                !Wt.test(n) &&
                ((i = f.left),
                (s = e.runtimeStyle),
                (o = s && s.left),
                o && (s.left = e.currentStyle.left),
                (f.left = "fontSize" === n ? "1em" : a),
                (a = f.pixelLeft + "px"),
                (f.left = i),
                o && (s.left = o)),
              "" === a ? "auto" : a
            );
          }));
    w.each(["height", "width"], function (e, n) {
      w.cssHooks[n] = {
        get: function (e, r, i) {
          return r
            ? 0 === e.offsetWidth && Xt.test(w.css(e, "display"))
              ? w.swap(e, Gt, function () {
                  return un(e, n, i);
                })
              : un(e, n, i)
            : t;
        },
        set: function (e, t, r) {
          var i = r && qt(e);
          return sn(
            e,
            t,
            r
              ? on(
                  e,
                  n,
                  r,
                  w.support.boxSizing &&
                    "border-box" === w.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
      w.support.opacity ||
        (w.cssHooks.opacity = {
          get: function (e, t) {
            return zt.test(
              (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : t
              ? "1"
              : "";
          },
          set: function (e, t) {
            var n = e.style,
              r = e.currentStyle,
              i = w.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
              s = (r && r.filter) || n.filter || "";
            (n.zoom = 1),
              ((t >= 1 || "" === t) &&
                "" === w.trim(s.replace(Ut, "")) &&
                n.removeAttribute &&
                (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
                (n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i);
          },
        }),
      w(function () {
        w.support.reliableMarginRight ||
          (w.cssHooks.marginRight = {
            get: function (e, n) {
              return n
                ? w.swap(e, { display: "inline-block" }, Rt, [e, "marginRight"])
                : t;
            },
          }),
          !w.support.pixelPosition &&
            w.fn.position &&
            w.each(["top", "left"], function (e, n) {
              w.cssHooks[n] = {
                get: function (e, r) {
                  return r
                    ? ((r = Rt(e, n)),
                      Jt.test(r) ? w(e).position()[n] + "px" : r)
                    : t;
                },
              };
            });
      }),
      w.expr &&
        w.expr.filters &&
        ((w.expr.filters.hidden = function (e) {
          return (
            (0 >= e.offsetWidth && 0 >= e.offsetHeight) ||
            (!w.support.reliableHiddenOffsets &&
              "none" === ((e.style && e.style.display) || w.css(e, "display")))
          );
        }),
        (w.expr.filters.visible = function (e) {
          return !w.expr.filters.hidden(e);
        })),
      w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (w.cssHooks[e + t] = {
          expand: function (n) {
            var r = 0,
              i = {},
              s = "string" == typeof n ? n.split(" ") : [n];
            for (; 4 > r; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
            return i;
          },
        }),
          Vt.test(e) || (w.cssHooks[e + t].set = sn);
      });
    var ln = /%20/g,
      cn = /\[\]$/,
      hn = /\r?\n/g,
      pn = /^(?:submit|button|image|reset|file)$/i,
      dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              dn.test(this.nodeName) &&
              !pn.test(e) &&
              (this.checked || !xt.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : w.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(hn, "\r\n") };
                })
              : { name: t.name, value: n.replace(hn, "\r\n") };
          })
          .get();
      },
    }),
      (w.param = function (e, n) {
        var r,
          i = [],
          s = function (e, t) {
            (t = w.isFunction(t) ? t() : null == t ? "" : t),
              (i[i.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
        if (
          (n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional),
          w.isArray(e) || (e.jquery && !w.isPlainObject(e)))
        )
          w.each(e, function () {
            s(this.name, this.value);
          });
        else for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+");
      });
    w.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
      w.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      });
    var mn,
      gn,
      yn = w.now(),
      bn = /\?/,
      wn = /#.*$/,
      En = /([?&])_=[^&]*/,
      Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Tn = /^(?:GET|HEAD)$/,
      Nn = /^\/\//,
      Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      kn = w.fn.load,
      Ln = {},
      An = {},
      On = "*/".concat("*");
    try {
      gn = s.href;
    } catch (Mn) {
      (gn = o.createElement("a")), (gn.href = ""), (gn = gn.href);
    }
    mn = Cn.exec(gn.toLowerCase()) || [];
    (w.fn.load = function (e, n, r) {
      if ("string" != typeof e && kn) return kn.apply(this, arguments);
      var i,
        s,
        o,
        u = this,
        a = e.indexOf(" ");
      return (
        a >= 0 && ((i = e.slice(a, e.length)), (e = e.slice(0, a))),
        w.isFunction(n)
          ? ((r = n), (n = t))
          : n && "object" == typeof n && (o = "POST"),
        u.length > 0 &&
          w
            .ajax({ url: e, type: o, dataType: "html", data: n })
            .done(function (e) {
              (s = arguments),
                u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
            })
            .complete(
              r &&
                function (e, t) {
                  u.each(r, s || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
      w.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          w.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: gn,
          type: "GET",
          isLocal: xn.test(mn[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": On,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": w.parseJSON,
            "text xml": w.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e);
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
          function N(e, n, r, i) {
            var l,
              g,
              y,
              E,
              S,
              T = n;
            2 !== b &&
              ((b = 2),
              u && clearTimeout(u),
              (f = t),
              (o = i || ""),
              (x.readyState = e > 0 ? 4 : 0),
              (l = (e >= 200 && 300 > e) || 304 === e),
              r && (E = Hn(c, x, r)),
              (E = Bn(c, E, x, l)),
              l
                ? (c.ifModified &&
                    ((S = x.getResponseHeader("Last-Modified")),
                    S && (w.lastModified[s] = S),
                    (S = x.getResponseHeader("etag")),
                    S && (w.etag[s] = S)),
                  204 === e || "HEAD" === c.type
                    ? (T = "nocontent")
                    : 304 === e
                    ? (T = "notmodified")
                    : ((T = E.state), (g = E.data), (y = E.error), (l = !y)))
                : ((y = T), (e || !T) && ((T = "error"), 0 > e && (e = 0))),
              (x.status = e),
              (x.statusText = (n || T) + ""),
              l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]),
              x.statusCode(m),
              (m = t),
              a &&
                p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]),
              v.fireWith(h, [x, T]),
              a &&
                (p.trigger("ajaxComplete", [x, c]),
                --w.active || w.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((n = e), (e = t)), (n = n || {});
          var r,
            i,
            s,
            o,
            u,
            a,
            f,
            l,
            c = w.ajaxSetup({}, n),
            h = c.context || c,
            p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
            d = w.Deferred(),
            v = w.Callbacks("once memory"),
            m = c.statusCode || {},
            g = {},
            y = {},
            b = 0,
            E = "canceled",
            x = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === b) {
                  if (!l) {
                    l = {};
                    while ((t = Sn.exec(o))) l[t[1].toLowerCase()] = t[2];
                  }
                  t = l[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === b ? o : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return b || ((e = y[n] = y[n] || e), (g[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return b || (c.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                  else x.always(e[x.status]);
                return this;
              },
              abort: function (e) {
                var t = e || E;
                return f && f.abort(t), N(0, t), this;
              },
            };
          if (
            ((d.promise(x).complete = v.add),
            (x.success = x.done),
            (x.error = x.fail),
            (c.url = ((e || c.url || gn) + "")
              .replace(wn, "")
              .replace(Nn, mn[1] + "//")),
            (c.type = n.method || n.type || c.method || c.type),
            (c.dataTypes = w
              .trim(c.dataType || "*")
              .toLowerCase()
              .match(S) || [""]),
            null == c.crossDomain &&
              ((r = Cn.exec(c.url.toLowerCase())),
              (c.crossDomain = !(
                !r ||
                (r[1] === mn[1] &&
                  r[2] === mn[2] &&
                  (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                    (mn[3] || ("http:" === mn[1] ? "80" : "443")))
              ))),
            c.data &&
              c.processData &&
              "string" != typeof c.data &&
              (c.data = w.param(c.data, c.traditional)),
            Dn(Ln, c, n, x),
            2 === b)
          )
            return x;
          (a = c.global),
            a && 0 === w.active++ && w.event.trigger("ajaxStart"),
            (c.type = c.type.toUpperCase()),
            (c.hasContent = !Tn.test(c.type)),
            (s = c.url),
            c.hasContent ||
              (c.data &&
                ((s = c.url += (bn.test(s) ? "&" : "?") + c.data),
                delete c.data),
              c.cache === !1 &&
                (c.url = En.test(s)
                  ? s.replace(En, "$1_=" + yn++)
                  : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)),
            c.ifModified &&
              (w.lastModified[s] &&
                x.setRequestHeader("If-Modified-Since", w.lastModified[s]),
              w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])),
            ((c.data && c.hasContent && c.contentType !== !1) ||
              n.contentType) &&
              x.setRequestHeader("Content-Type", c.contentType),
            x.setRequestHeader(
              "Accept",
              c.dataTypes[0] && c.accepts[c.dataTypes[0]]
                ? c.accepts[c.dataTypes[0]] +
                    ("*" !== c.dataTypes[0] ? ", " + On + "; q=0.01" : "")
                : c.accepts["*"]
            );
          for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
          if (c.beforeSend && (c.beforeSend.call(h, x, c) === !1 || 2 === b))
            return x.abort();
          E = "abort";
          for (i in { success: 1, error: 1, complete: 1 }) x[i](c[i]);
          if ((f = Dn(An, c, n, x))) {
            (x.readyState = 1),
              a && p.trigger("ajaxSend", [x, c]),
              c.async &&
                c.timeout > 0 &&
                (u = setTimeout(function () {
                  x.abort("timeout");
                }, c.timeout));
            try {
              (b = 1), f.send(g, N);
            } catch (T) {
              if (!(2 > b)) throw T;
              N(-1, T);
            }
          } else N(-1, "No Transport");
          return x;
        },
        getJSON: function (e, t, n) {
          return w.get(e, t, n, "json");
        },
        getScript: function (e, n) {
          return w.get(e, t, n, "script");
        },
      }),
      w.each(["get", "post"], function (e, n) {
        w[n] = function (e, r, i, s) {
          return (
            w.isFunction(r) && ((s = s || i), (i = r), (r = t)),
            w.ajax({ url: e, type: n, dataType: s, data: r, success: i })
          );
        };
      });
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
      w.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1),
          e.crossDomain && ((e.type = "GET"), (e.global = !1));
      }),
      w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var n,
            r = o.head || w("head")[0] || o.documentElement;
          return {
            send: function (t, i) {
              (n = o.createElement("script")),
                (n.async = !0),
                e.scriptCharset && (n.charset = e.scriptCharset),
                (n.src = e.url),
                (n.onload = n.onreadystatechange =
                  function (e, t) {
                    (t ||
                      !n.readyState ||
                      /loaded|complete/.test(n.readyState)) &&
                      ((n.onload = n.onreadystatechange = null),
                      n.parentNode && n.parentNode.removeChild(n),
                      (n = null),
                      t || i(200, "success"));
                  }),
                r.insertBefore(n, r.firstChild);
            },
            abort: function () {
              n && n.onload(t, !0);
            },
          };
        }
      });
    var jn = [],
      Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = jn.pop() || w.expando + "_" + yn++;
        return (this[e] = !0), e;
      },
    }),
      w.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s,
          o,
          u,
          a =
            n.jsonp !== !1 &&
            (Fn.test(n.url)
              ? "url"
              : "string" == typeof n.data &&
                !(n.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                Fn.test(n.data) &&
                "data");
        return a || "jsonp" === n.dataTypes[0]
          ? ((s = n.jsonpCallback =
              w.isFunction(n.jsonpCallback)
                ? n.jsonpCallback()
                : n.jsonpCallback),
            a
              ? (n[a] = n[a].replace(Fn, "$1" + s))
              : n.jsonp !== !1 &&
                (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s),
            (n.converters["script json"] = function () {
              return u || w.error(s + " was not called"), u[0];
            }),
            (n.dataTypes[0] = "json"),
            (o = e[s]),
            (e[s] = function () {
              u = arguments;
            }),
            i.always(function () {
              (e[s] = o),
                n[s] && ((n.jsonpCallback = r.jsonpCallback), jn.push(s)),
                u && w.isFunction(o) && o(u[0]),
                (u = o = t);
            }),
            "script")
          : t;
      });
    var In,
      qn,
      Rn = 0,
      Un =
        e.ActiveXObject &&
        function () {
          var e;
          for (e in In) In[e](t, !0);
        };
    (w.ajaxSettings.xhr = e.ActiveXObject
      ? function () {
          return (!this.isLocal && zn()) || Wn();
        }
      : zn),
      (qn = w.ajaxSettings.xhr()),
      (w.support.cors = !!qn && "withCredentials" in qn),
      (qn = w.support.ajax = !!qn),
      qn &&
        w.ajaxTransport(function (n) {
          if (!n.crossDomain || w.support.cors) {
            var r;
            return {
              send: function (i, s) {
                var o,
                  u,
                  a = n.xhr();
                if (
                  (n.username
                    ? a.open(n.type, n.url, n.async, n.username, n.password)
                    : a.open(n.type, n.url, n.async),
                  n.xhrFields)
                )
                  for (u in n.xhrFields) a[u] = n.xhrFields[u];
                n.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(n.mimeType),
                  n.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                  for (u in i) a.setRequestHeader(u, i[u]);
                } catch (f) {}
                a.send((n.hasContent && n.data) || null),
                  (r = function (e, i) {
                    var u, f, l, c;
                    try {
                      if (r && (i || 4 === a.readyState))
                        if (
                          ((r = t),
                          o &&
                            ((a.onreadystatechange = w.noop),
                            Un && delete In[o]),
                          i)
                        )
                          4 !== a.readyState && a.abort();
                        else {
                          (c = {}),
                            (u = a.status),
                            (f = a.getAllResponseHeaders()),
                            "string" == typeof a.responseText &&
                              (c.text = a.responseText);
                          try {
                            l = a.statusText;
                          } catch (h) {
                            l = "";
                          }
                          u || !n.isLocal || n.crossDomain
                            ? 1223 === u && (u = 204)
                            : (u = c.text ? 200 : 404);
                        }
                    } catch (p) {
                      i || s(-1, p);
                    }
                    c && s(u, l, c, f);
                  }),
                  n.async
                    ? 4 === a.readyState
                      ? setTimeout(r)
                      : ((o = ++Rn),
                        Un && (In || ((In = {}), w(e).unload(Un)), (In[o] = r)),
                        (a.onreadystatechange = r))
                    : r();
              },
              abort: function () {
                r && r(t, !0);
              },
            };
          }
        });
    var Xn,
      Vn,
      $n = /^(?:toggle|show|hide)$/,
      Jn = RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
      Kn = /queueHooks$/,
      Qn = [nr],
      Gn = {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t),
              r = n.cur(),
              i = Jn.exec(t),
              s = (i && i[3]) || (w.cssNumber[e] ? "" : "px"),
              o =
                (w.cssNumber[e] || ("px" !== s && +r)) &&
                Jn.exec(w.css(n.elem, e)),
              u = 1,
              a = 20;
            if (o && o[3] !== s) {
              (s = s || o[3]), (i = i || []), (o = +r || 1);
              do (u = u || ".5"), (o /= u), w.style(n.elem, e, o + s);
              while (u !== (u = n.cur() / r) && 1 !== u && --a);
            }
            return (
              i &&
                ((o = n.start = +o || +r || 0),
                (n.unit = s),
                (n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2])),
              n
            );
          },
        ],
      };
    w.Animation = w.extend(er, {
      tweener: function (e, t) {
        w.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
        var n,
          r = 0,
          i = e.length;
        for (; i > r; r++) (n = e[r]), (Gn[n] = Gn[n] || []), Gn[n].unshift(t);
      },
      prefilter: function (e, t) {
        t ? Qn.unshift(e) : Qn.push(e);
      },
    });
    (w.Tween = rr),
      (rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, s) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || "swing"),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = s || (w.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = rr.propHooks[this.prop];
          return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = rr.propHooks[this.prop];
          return (
            (this.pos = t =
              this.options.duration
                ? w.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  )
                : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
          );
        },
      }),
      (rr.prototype.init.prototype = rr.prototype),
      (rr.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] ||
              (e.elem.style && null != e.elem.style[e.prop])
              ? ((t = w.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
              : e.elem[e.prop];
          },
          set: function (e) {
            w.fx.step[e.prop]
              ? w.fx.step[e.prop](e)
              : e.elem.style &&
                (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop])
              ? w.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (rr.propHooks.scrollTop = rr.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(ir(t, !0), e, r, i);
        };
      }),
      w.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(nn)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var i = w.isEmptyObject(e),
            s = w.speed(t, n, r),
            o = function () {
              var t = er(this, w.extend({}, e), s);
              (i || w._data(this, "finish")) && t.stop(!0);
            };
          return (
            (o.finish = o),
            i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
          );
        },
        stop: function (e, n, r) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(r);
          };
          return (
            "string" != typeof e && ((r = n), (n = e), (e = t)),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                n = null != e && e + "queueHooks",
                s = w.timers,
                o = w._data(this);
              if (n) o[n] && o[n].stop && i(o[n]);
              else for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
              for (n = s.length; n--; )
                s[n].elem !== this ||
                  (null != e && s[n].queue !== e) ||
                  (s[n].anim.stop(r), (t = !1), s.splice(n, 1));
              (t || !r) && w.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                n = w._data(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                s = w.timers,
                o = r ? r.length : 0;
              for (
                n.finish = !0,
                  w.queue(this, e, []),
                  i && i.stop && i.stop.call(this, !0),
                  t = s.length;
                t--;

              )
                s[t].elem === this &&
                  s[t].queue === e &&
                  (s[t].anim.stop(!0), s.splice(t, 1));
              for (t = 0; o > t; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      });
    w.each(
      {
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
      (w.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? w.extend({}, e)
            : {
                complete: n || (!n && t) || (w.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !w.isFunction(t) && t),
              };
        return (
          (r.duration = w.fx.off
            ? 0
            : "number" == typeof r.duration
            ? r.duration
            : r.duration in w.fx.speeds
            ? w.fx.speeds[r.duration]
            : w.fx.speeds._default),
          (null == r.queue || r.queue === !0) && (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            w.isFunction(r.old) && r.old.call(this),
              r.queue && w.dequeue(this, r.queue);
          }),
          r
        );
      }),
      (w.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (w.timers = []),
      (w.fx = rr.prototype.init),
      (w.fx.tick = function () {
        var e,
          n = w.timers,
          r = 0;
        for (Xn = w.now(); n.length > r; r++)
          (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
        n.length || w.fx.stop(), (Xn = t);
      }),
      (w.fx.timer = function (e) {
        e() && w.timers.push(e) && w.fx.start();
      }),
      (w.fx.interval = 13),
      (w.fx.start = function () {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval));
      }),
      (w.fx.stop = function () {
        clearInterval(Vn), (Vn = null);
      }),
      (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (w.fx.step = {}),
      w.expr &&
        w.expr.filters &&
        (w.expr.filters.animated = function (e) {
          return w.grep(w.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
      (w.fn.offset = function (e) {
        if (arguments.length)
          return e === t
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var n,
          r,
          s = { top: 0, left: 0 },
          o = this[0],
          u = o && o.ownerDocument;
        if (u)
          return (
            (n = u.documentElement),
            w.contains(n, o)
              ? (typeof o.getBoundingClientRect !== i &&
                  (s = o.getBoundingClientRect()),
                (r = sr(u)),
                {
                  top:
                    s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                  left:
                    s.left +
                    (r.pageXOffset || n.scrollLeft) -
                    (n.clientLeft || 0),
                })
              : s
          );
      }),
      (w.offset = {
        setOffset: function (e, t, n) {
          var r = w.css(e, "position");
          "static" === r && (e.style.position = "relative");
          var i = w(e),
            s = i.offset(),
            o = w.css(e, "top"),
            u = w.css(e, "left"),
            a =
              ("absolute" === r || "fixed" === r) &&
              w.inArray("auto", [o, u]) > -1,
            f = {},
            l = {},
            c,
            h;
          a
            ? ((l = i.position()), (c = l.top), (h = l.left))
            : ((c = parseFloat(o) || 0), (h = parseFloat(u) || 0)),
            w.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + c),
            null != t.left && (f.left = t.left - s.left + h),
            "using" in t ? t.using.call(e, f) : i.css(f);
        },
      }),
      w.fn.extend({
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = { top: 0, left: 0 },
              r = this[0];
            return (
              "fixed" === w.css(r, "position")
                ? (t = r.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  w.nodeName(e[0], "html") || (n = e.offset()),
                  (n.top += w.css(e[0], "borderTopWidth", !0)),
                  (n.left += w.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - n.top - w.css(r, "marginTop", !0),
                left: t.left - n.left - w.css(r, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            var e = this.offsetParent || u;
            while (
              e &&
              !w.nodeName(e, "html") &&
              "static" === w.css(e, "position")
            )
              e = e.offsetParent;
            return e || u;
          });
        },
      }),
      w.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, n) {
          var r = /Y/.test(n);
          w.fn[e] = function (i) {
            return w.access(
              this,
              function (e, i, s) {
                var o = sr(e);
                return s === t
                  ? o
                    ? n in o
                      ? o[n]
                      : o.document.documentElement[i]
                    : e[i]
                  : (o
                      ? o.scrollTo(
                          r ? w(o).scrollLeft() : s,
                          r ? s : w(o).scrollTop()
                        )
                      : (e[i] = s),
                    t);
              },
              e,
              i,
              arguments.length,
              null
            );
          };
        }
      );
    w.each({ Height: "height", Width: "width" }, function (e, n) {
      w.each(
        { padding: "inner" + e, content: n, "": "outer" + e },
        function (r, i) {
          w.fn[i] = function (i, s) {
            var o = arguments.length && (r || "boolean" != typeof i),
              u = r || (i === !0 || s === !0 ? "margin" : "border");
            return w.access(
              this,
              function (n, r, i) {
                var s;
                return w.isWindow(n)
                  ? n.document.documentElement["client" + e]
                  : 9 === n.nodeType
                  ? ((s = n.documentElement),
                    Math.max(
                      n.body["scroll" + e],
                      s["scroll" + e],
                      n.body["offset" + e],
                      s["offset" + e],
                      s["client" + e]
                    ))
                  : i === t
                  ? w.css(n, r, u)
                  : w.style(n, r, i, u);
              },
              n,
              o ? i : t,
              o,
              null
            );
          };
        }
      );
    }),
      (w.fn.size = function () {
        return this.length;
      }),
      (w.fn.andSelf = w.fn.addBack),
      "object" == typeof module && module && "object" == typeof module.exports
        ? (module.exports = w)
        : ((e.jQuery = e.$ = w),
          "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
              return w;
            }));
  })(window);
}
if (typeof Handlebars === "undefined") {
  var Handlebars = {};
  !(function (e, t) {
    e.VERSION = "1.0.0";
    e.COMPILER_REVISION = 4;
    e.REVISION_CHANGES = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: ">= 1.0.0",
    };
    e.helpers = {};
    e.partials = {};
    var n = Object.prototype.toString,
      r = "[object Function]",
      i = "[object Object]";
    e.registerHelper = function (t, r, s) {
      if (n.call(t) === i) {
        if (s || r) {
          throw new e.Exception("Arg not supported with multiple helpers");
        }
        e.Utils.extend(this.helpers, t);
      } else {
        if (s) {
          r.not = s;
        }
        this.helpers[t] = r;
      }
    };
    e.registerPartial = function (t, r) {
      if (n.call(t) === i) {
        e.Utils.extend(this.partials, t);
      } else {
        this.partials[t] = r;
      }
    };
    e.registerHelper("helperMissing", function (e) {
      if (arguments.length === 2) {
        return t;
      } else {
        throw new Error("Missing helper: '" + e + "'");
      }
    });
    e.registerHelper("blockHelperMissing", function (t, i) {
      var s = i.inverse || function () {},
        o = i.fn;
      var u = n.call(t);
      if (u === r) {
        t = t.call(this);
      }
      if (t === true) {
        return o(this);
      } else if (t === false || t == null) {
        return s(this);
      } else if (u === "[object Array]") {
        if (t.length > 0) {
          return e.helpers.each(t, i);
        } else {
          return s(this);
        }
      } else {
        return o(t);
      }
    });
    e.K = function () {};
    e.createFrame =
      Object.create ||
      function (t) {
        e.K.prototype = t;
        var n = new e.K();
        e.K.prototype = null;
        return n;
      };
    e.logger = {
      DEBUG: 0,
      INFO: 1,
      WARN: 2,
      ERROR: 3,
      level: 3,
      methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" },
      log: function (t, n) {
        if (e.logger.level <= t) {
          var r = e.logger.methodMap[t];
          if (typeof console !== "undefined" && console[r]) {
            console[r].call(console, n);
          }
        }
      },
    };
    e.log = function (t, n) {
      e.logger.log(t, n);
    };
    e.registerHelper("each", function (t, i) {
      var s = i.fn,
        o = i.inverse;
      var u = 0,
        a = "",
        f;
      var l = n.call(t);
      if (l === r) {
        t = t.call(this);
      }
      if (i.data) {
        f = e.createFrame(i.data);
      }
      if (t && typeof t === "object") {
        if (t instanceof Array) {
          for (var c = t.length; u < c; u++) {
            if (f) {
              f.index = u;
            }
            a = a + s(t[u], { data: f });
          }
        } else {
          for (var h in t) {
            if (t.hasOwnProperty(h)) {
              if (f) {
                f.key = h;
              }
              a = a + s(t[h], { data: f });
              u++;
            }
          }
        }
      }
      if (u === 0) {
        a = o(this);
      }
      return a;
    });
    e.registerHelper("if", function (t, i) {
      var s = n.call(t);
      if (s === r) {
        t = t.call(this);
      }
      if (!t || e.Utils.isEmpty(t)) {
        return i.inverse(this);
      } else {
        return i.fn(this);
      }
    });
    e.registerHelper("unless", function (t, n) {
      return e.helpers["if"].call(this, t, { fn: n.inverse, inverse: n.fn });
    });
    e.registerHelper("with", function (t, i) {
      var s = n.call(t);
      if (s === r) {
        t = t.call(this);
      }
      if (!e.Utils.isEmpty(t)) return i.fn(t);
    });
    e.registerHelper("log", function (t, n) {
      var r = n.data && n.data.level != null ? parseInt(n.data.level, 10) : 1;
      e.log(r, t);
    });
    var s = (function () {
      function n() {
        this.yy = {};
      }
      var e = {
        trace: function () {},
        yy: {},
        symbols_: {
          error: 2,
          root: 3,
          program: 4,
          EOF: 5,
          simpleInverse: 6,
          statements: 7,
          statement: 8,
          openInverse: 9,
          closeBlock: 10,
          openBlock: 11,
          mustache: 12,
          partial: 13,
          CONTENT: 14,
          COMMENT: 15,
          OPEN_BLOCK: 16,
          inMustache: 17,
          CLOSE: 18,
          OPEN_INVERSE: 19,
          OPEN_ENDBLOCK: 20,
          path: 21,
          OPEN: 22,
          OPEN_UNESCAPED: 23,
          CLOSE_UNESCAPED: 24,
          OPEN_PARTIAL: 25,
          partialName: 26,
          params: 27,
          hash: 28,
          dataName: 29,
          param: 30,
          STRING: 31,
          INTEGER: 32,
          BOOLEAN: 33,
          hashSegments: 34,
          hashSegment: 35,
          ID: 36,
          EQUALS: 37,
          DATA: 38,
          pathSegments: 39,
          SEP: 40,
          $accept: 0,
          $end: 1,
        },
        terminals_: {
          2: "error",
          5: "EOF",
          14: "CONTENT",
          15: "COMMENT",
          16: "OPEN_BLOCK",
          18: "CLOSE",
          19: "OPEN_INVERSE",
          20: "OPEN_ENDBLOCK",
          22: "OPEN",
          23: "OPEN_UNESCAPED",
          24: "CLOSE_UNESCAPED",
          25: "OPEN_PARTIAL",
          31: "STRING",
          32: "INTEGER",
          33: "BOOLEAN",
          36: "ID",
          37: "EQUALS",
          38: "DATA",
          40: "SEP",
        },
        productions_: [
          0,
          [3, 2],
          [4, 2],
          [4, 3],
          [4, 2],
          [4, 1],
          [4, 1],
          [4, 0],
          [7, 1],
          [7, 2],
          [8, 3],
          [8, 3],
          [8, 1],
          [8, 1],
          [8, 1],
          [8, 1],
          [11, 3],
          [9, 3],
          [10, 3],
          [12, 3],
          [12, 3],
          [13, 3],
          [13, 4],
          [6, 2],
          [17, 3],
          [17, 2],
          [17, 2],
          [17, 1],
          [17, 1],
          [27, 2],
          [27, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [30, 1],
          [28, 1],
          [34, 2],
          [34, 1],
          [35, 3],
          [35, 3],
          [35, 3],
          [35, 3],
          [35, 3],
          [26, 1],
          [26, 1],
          [26, 1],
          [29, 2],
          [21, 1],
          [39, 3],
          [39, 1],
        ],
        performAction: function (t, n, r, i, s, o, u) {
          var a = o.length - 1;
          switch (s) {
            case 1:
              return o[a - 1];
              break;
            case 2:
              this.$ = new i.ProgramNode([], o[a]);
              break;
            case 3:
              this.$ = new i.ProgramNode(o[a - 2], o[a]);
              break;
            case 4:
              this.$ = new i.ProgramNode(o[a - 1], []);
              break;
            case 5:
              this.$ = new i.ProgramNode(o[a]);
              break;
            case 6:
              this.$ = new i.ProgramNode([], []);
              break;
            case 7:
              this.$ = new i.ProgramNode([]);
              break;
            case 8:
              this.$ = [o[a]];
              break;
            case 9:
              o[a - 1].push(o[a]);
              this.$ = o[a - 1];
              break;
            case 10:
              this.$ = new i.BlockNode(
                o[a - 2],
                o[a - 1].inverse,
                o[a - 1],
                o[a]
              );
              break;
            case 11:
              this.$ = new i.BlockNode(
                o[a - 2],
                o[a - 1],
                o[a - 1].inverse,
                o[a]
              );
              break;
            case 12:
              this.$ = o[a];
              break;
            case 13:
              this.$ = o[a];
              break;
            case 14:
              this.$ = new i.ContentNode(o[a]);
              break;
            case 15:
              this.$ = new i.CommentNode(o[a]);
              break;
            case 16:
              this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
              break;
            case 17:
              this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
              break;
            case 18:
              this.$ = o[a - 1];
              break;
            case 19:
              this.$ = new i.MustacheNode(
                o[a - 1][0],
                o[a - 1][1],
                o[a - 2][2] === "&"
              );
              break;
            case 20:
              this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], true);
              break;
            case 21:
              this.$ = new i.PartialNode(o[a - 1]);
              break;
            case 22:
              this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
              break;
            case 23:
              break;
            case 24:
              this.$ = [[o[a - 2]].concat(o[a - 1]), o[a]];
              break;
            case 25:
              this.$ = [[o[a - 1]].concat(o[a]), null];
              break;
            case 26:
              this.$ = [[o[a - 1]], o[a]];
              break;
            case 27:
              this.$ = [[o[a]], null];
              break;
            case 28:
              this.$ = [[o[a]], null];
              break;
            case 29:
              o[a - 1].push(o[a]);
              this.$ = o[a - 1];
              break;
            case 30:
              this.$ = [o[a]];
              break;
            case 31:
              this.$ = o[a];
              break;
            case 32:
              this.$ = new i.StringNode(o[a]);
              break;
            case 33:
              this.$ = new i.IntegerNode(o[a]);
              break;
            case 34:
              this.$ = new i.BooleanNode(o[a]);
              break;
            case 35:
              this.$ = o[a];
              break;
            case 36:
              this.$ = new i.HashNode(o[a]);
              break;
            case 37:
              o[a - 1].push(o[a]);
              this.$ = o[a - 1];
              break;
            case 38:
              this.$ = [o[a]];
              break;
            case 39:
              this.$ = [o[a - 2], o[a]];
              break;
            case 40:
              this.$ = [o[a - 2], new i.StringNode(o[a])];
              break;
            case 41:
              this.$ = [o[a - 2], new i.IntegerNode(o[a])];
              break;
            case 42:
              this.$ = [o[a - 2], new i.BooleanNode(o[a])];
              break;
            case 43:
              this.$ = [o[a - 2], o[a]];
              break;
            case 44:
              this.$ = new i.PartialNameNode(o[a]);
              break;
            case 45:
              this.$ = new i.PartialNameNode(new i.StringNode(o[a]));
              break;
            case 46:
              this.$ = new i.PartialNameNode(new i.IntegerNode(o[a]));
              break;
            case 47:
              this.$ = new i.DataNode(o[a]);
              break;
            case 48:
              this.$ = new i.IdNode(o[a]);
              break;
            case 49:
              o[a - 2].push({ part: o[a], separator: o[a - 1] });
              this.$ = o[a - 2];
              break;
            case 50:
              this.$ = [{ part: o[a] }];
              break;
          }
        },
        table: [
          {
            3: 1,
            4: 2,
            5: [2, 7],
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          { 1: [3] },
          { 5: [1, 17] },
          {
            5: [2, 6],
            7: 18,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 6],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            5: [2, 5],
            6: 20,
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            20: [2, 5],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            17: 23,
            18: [1, 22],
            21: 24,
            29: 25,
            36: [1, 28],
            38: [1, 27],
            39: 26,
          },
          {
            5: [2, 8],
            14: [2, 8],
            15: [2, 8],
            16: [2, 8],
            19: [2, 8],
            20: [2, 8],
            22: [2, 8],
            23: [2, 8],
            25: [2, 8],
          },
          {
            4: 29,
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            20: [2, 7],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            4: 30,
            6: 3,
            7: 4,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 5],
            20: [2, 7],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            5: [2, 12],
            14: [2, 12],
            15: [2, 12],
            16: [2, 12],
            19: [2, 12],
            20: [2, 12],
            22: [2, 12],
            23: [2, 12],
            25: [2, 12],
          },
          {
            5: [2, 13],
            14: [2, 13],
            15: [2, 13],
            16: [2, 13],
            19: [2, 13],
            20: [2, 13],
            22: [2, 13],
            23: [2, 13],
            25: [2, 13],
          },
          {
            5: [2, 14],
            14: [2, 14],
            15: [2, 14],
            16: [2, 14],
            19: [2, 14],
            20: [2, 14],
            22: [2, 14],
            23: [2, 14],
            25: [2, 14],
          },
          {
            5: [2, 15],
            14: [2, 15],
            15: [2, 15],
            16: [2, 15],
            19: [2, 15],
            20: [2, 15],
            22: [2, 15],
            23: [2, 15],
            25: [2, 15],
          },
          { 17: 31, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          { 17: 32, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          { 17: 33, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          { 21: 35, 26: 34, 31: [1, 36], 32: [1, 37], 36: [1, 28], 39: 26 },
          { 1: [2, 1] },
          {
            5: [2, 2],
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 2],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          { 17: 23, 21: 24, 29: 25, 36: [1, 28], 38: [1, 27], 39: 26 },
          {
            5: [2, 4],
            7: 38,
            8: 6,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 4],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            5: [2, 9],
            14: [2, 9],
            15: [2, 9],
            16: [2, 9],
            19: [2, 9],
            20: [2, 9],
            22: [2, 9],
            23: [2, 9],
            25: [2, 9],
          },
          {
            5: [2, 23],
            14: [2, 23],
            15: [2, 23],
            16: [2, 23],
            19: [2, 23],
            20: [2, 23],
            22: [2, 23],
            23: [2, 23],
            25: [2, 23],
          },
          { 18: [1, 39] },
          {
            18: [2, 27],
            21: 44,
            24: [2, 27],
            27: 40,
            28: 41,
            29: 48,
            30: 42,
            31: [1, 45],
            32: [1, 46],
            33: [1, 47],
            34: 43,
            35: 49,
            36: [1, 50],
            38: [1, 27],
            39: 26,
          },
          { 18: [2, 28], 24: [2, 28] },
          {
            18: [2, 48],
            24: [2, 48],
            31: [2, 48],
            32: [2, 48],
            33: [2, 48],
            36: [2, 48],
            38: [2, 48],
            40: [1, 51],
          },
          { 21: 52, 36: [1, 28], 39: 26 },
          {
            18: [2, 50],
            24: [2, 50],
            31: [2, 50],
            32: [2, 50],
            33: [2, 50],
            36: [2, 50],
            38: [2, 50],
            40: [2, 50],
          },
          { 10: 53, 20: [1, 54] },
          { 10: 55, 20: [1, 54] },
          { 18: [1, 56] },
          { 18: [1, 57] },
          { 24: [1, 58] },
          { 18: [1, 59], 21: 60, 36: [1, 28], 39: 26 },
          { 18: [2, 44], 36: [2, 44] },
          { 18: [2, 45], 36: [2, 45] },
          { 18: [2, 46], 36: [2, 46] },
          {
            5: [2, 3],
            8: 21,
            9: 7,
            11: 8,
            12: 9,
            13: 10,
            14: [1, 11],
            15: [1, 12],
            16: [1, 13],
            19: [1, 19],
            20: [2, 3],
            22: [1, 14],
            23: [1, 15],
            25: [1, 16],
          },
          {
            14: [2, 17],
            15: [2, 17],
            16: [2, 17],
            19: [2, 17],
            20: [2, 17],
            22: [2, 17],
            23: [2, 17],
            25: [2, 17],
          },
          {
            18: [2, 25],
            21: 44,
            24: [2, 25],
            28: 61,
            29: 48,
            30: 62,
            31: [1, 45],
            32: [1, 46],
            33: [1, 47],
            34: 43,
            35: 49,
            36: [1, 50],
            38: [1, 27],
            39: 26,
          },
          { 18: [2, 26], 24: [2, 26] },
          {
            18: [2, 30],
            24: [2, 30],
            31: [2, 30],
            32: [2, 30],
            33: [2, 30],
            36: [2, 30],
            38: [2, 30],
          },
          { 18: [2, 36], 24: [2, 36], 35: 63, 36: [1, 64] },
          {
            18: [2, 31],
            24: [2, 31],
            31: [2, 31],
            32: [2, 31],
            33: [2, 31],
            36: [2, 31],
            38: [2, 31],
          },
          {
            18: [2, 32],
            24: [2, 32],
            31: [2, 32],
            32: [2, 32],
            33: [2, 32],
            36: [2, 32],
            38: [2, 32],
          },
          {
            18: [2, 33],
            24: [2, 33],
            31: [2, 33],
            32: [2, 33],
            33: [2, 33],
            36: [2, 33],
            38: [2, 33],
          },
          {
            18: [2, 34],
            24: [2, 34],
            31: [2, 34],
            32: [2, 34],
            33: [2, 34],
            36: [2, 34],
            38: [2, 34],
          },
          {
            18: [2, 35],
            24: [2, 35],
            31: [2, 35],
            32: [2, 35],
            33: [2, 35],
            36: [2, 35],
            38: [2, 35],
          },
          { 18: [2, 38], 24: [2, 38], 36: [2, 38] },
          {
            18: [2, 50],
            24: [2, 50],
            31: [2, 50],
            32: [2, 50],
            33: [2, 50],
            36: [2, 50],
            37: [1, 65],
            38: [2, 50],
            40: [2, 50],
          },
          { 36: [1, 66] },
          {
            18: [2, 47],
            24: [2, 47],
            31: [2, 47],
            32: [2, 47],
            33: [2, 47],
            36: [2, 47],
            38: [2, 47],
          },
          {
            5: [2, 10],
            14: [2, 10],
            15: [2, 10],
            16: [2, 10],
            19: [2, 10],
            20: [2, 10],
            22: [2, 10],
            23: [2, 10],
            25: [2, 10],
          },
          { 21: 67, 36: [1, 28], 39: 26 },
          {
            5: [2, 11],
            14: [2, 11],
            15: [2, 11],
            16: [2, 11],
            19: [2, 11],
            20: [2, 11],
            22: [2, 11],
            23: [2, 11],
            25: [2, 11],
          },
          {
            14: [2, 16],
            15: [2, 16],
            16: [2, 16],
            19: [2, 16],
            20: [2, 16],
            22: [2, 16],
            23: [2, 16],
            25: [2, 16],
          },
          {
            5: [2, 19],
            14: [2, 19],
            15: [2, 19],
            16: [2, 19],
            19: [2, 19],
            20: [2, 19],
            22: [2, 19],
            23: [2, 19],
            25: [2, 19],
          },
          {
            5: [2, 20],
            14: [2, 20],
            15: [2, 20],
            16: [2, 20],
            19: [2, 20],
            20: [2, 20],
            22: [2, 20],
            23: [2, 20],
            25: [2, 20],
          },
          {
            5: [2, 21],
            14: [2, 21],
            15: [2, 21],
            16: [2, 21],
            19: [2, 21],
            20: [2, 21],
            22: [2, 21],
            23: [2, 21],
            25: [2, 21],
          },
          { 18: [1, 68] },
          { 18: [2, 24], 24: [2, 24] },
          {
            18: [2, 29],
            24: [2, 29],
            31: [2, 29],
            32: [2, 29],
            33: [2, 29],
            36: [2, 29],
            38: [2, 29],
          },
          { 18: [2, 37], 24: [2, 37], 36: [2, 37] },
          { 37: [1, 65] },
          {
            21: 69,
            29: 73,
            31: [1, 70],
            32: [1, 71],
            33: [1, 72],
            36: [1, 28],
            38: [1, 27],
            39: 26,
          },
          {
            18: [2, 49],
            24: [2, 49],
            31: [2, 49],
            32: [2, 49],
            33: [2, 49],
            36: [2, 49],
            38: [2, 49],
            40: [2, 49],
          },
          { 18: [1, 74] },
          {
            5: [2, 22],
            14: [2, 22],
            15: [2, 22],
            16: [2, 22],
            19: [2, 22],
            20: [2, 22],
            22: [2, 22],
            23: [2, 22],
            25: [2, 22],
          },
          { 18: [2, 39], 24: [2, 39], 36: [2, 39] },
          { 18: [2, 40], 24: [2, 40], 36: [2, 40] },
          { 18: [2, 41], 24: [2, 41], 36: [2, 41] },
          { 18: [2, 42], 24: [2, 42], 36: [2, 42] },
          { 18: [2, 43], 24: [2, 43], 36: [2, 43] },
          {
            5: [2, 18],
            14: [2, 18],
            15: [2, 18],
            16: [2, 18],
            19: [2, 18],
            20: [2, 18],
            22: [2, 18],
            23: [2, 18],
            25: [2, 18],
          },
        ],
        defaultActions: { 17: [2, 1] },
        parseError: function (t, n) {
          throw new Error(t);
        },
        parse: function (t) {
          function v(e) {
            r.length = r.length - 2 * e;
            i.length = i.length - e;
            s.length = s.length - e;
          }
          function m() {
            var e;
            e = n.lexer.lex() || 1;
            if (typeof e !== "number") {
              e = n.symbols_[e] || e;
            }
            return e;
          }
          var n = this,
            r = [0],
            i = [null],
            s = [],
            o = this.table,
            u = "",
            a = 0,
            f = 0,
            l = 0,
            c = 2,
            h = 1;
          this.lexer.setInput(t);
          this.lexer.yy = this.yy;
          this.yy.lexer = this.lexer;
          this.yy.parser = this;
          if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
          var p = this.lexer.yylloc;
          s.push(p);
          var d = this.lexer.options && this.lexer.options.ranges;
          if (typeof this.yy.parseError === "function")
            this.parseError = this.yy.parseError;
          var g,
            y,
            b,
            w,
            E,
            S,
            x = {},
            T,
            N,
            C,
            k;
          while (true) {
            b = r[r.length - 1];
            if (this.defaultActions[b]) {
              w = this.defaultActions[b];
            } else {
              if (g === null || typeof g == "undefined") {
                g = m();
              }
              w = o[b] && o[b][g];
            }
            if (typeof w === "undefined" || !w.length || !w[0]) {
              var L = "";
              if (!l) {
                k = [];
                for (T in o[b])
                  if (this.terminals_[T] && T > 2) {
                    k.push("'" + this.terminals_[T] + "'");
                  }
                if (this.lexer.showPosition) {
                  L =
                    "Parse error on line " +
                    (a + 1) +
                    ":\n" +
                    this.lexer.showPosition() +
                    "\nExpecting " +
                    k.join(", ") +
                    ", got '" +
                    (this.terminals_[g] || g) +
                    "'";
                } else {
                  L =
                    "Parse error on line " +
                    (a + 1) +
                    ": Unexpected " +
                    (g == 1
                      ? "end of input"
                      : "'" + (this.terminals_[g] || g) + "'");
                }
                this.parseError(L, {
                  text: this.lexer.match,
                  token: this.terminals_[g] || g,
                  line: this.lexer.yylineno,
                  loc: p,
                  expected: k,
                });
              }
            }
            if (w[0] instanceof Array && w.length > 1) {
              throw new Error(
                "Parse Error: multiple actions possible at state: " +
                  b +
                  ", token: " +
                  g
              );
            }
            switch (w[0]) {
              case 1:
                r.push(g);
                i.push(this.lexer.yytext);
                s.push(this.lexer.yylloc);
                r.push(w[1]);
                g = null;
                if (!y) {
                  f = this.lexer.yyleng;
                  u = this.lexer.yytext;
                  a = this.lexer.yylineno;
                  p = this.lexer.yylloc;
                  if (l > 0) l--;
                } else {
                  g = y;
                  y = null;
                }
                break;
              case 2:
                N = this.productions_[w[1]][1];
                x.$ = i[i.length - N];
                x._$ = {
                  first_line: s[s.length - (N || 1)].first_line,
                  last_line: s[s.length - 1].last_line,
                  first_column: s[s.length - (N || 1)].first_column,
                  last_column: s[s.length - 1].last_column,
                };
                if (d) {
                  x._$.range = [
                    s[s.length - (N || 1)].range[0],
                    s[s.length - 1].range[1],
                  ];
                }
                S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
                if (typeof S !== "undefined") {
                  return S;
                }
                if (N) {
                  r = r.slice(0, -1 * N * 2);
                  i = i.slice(0, -1 * N);
                  s = s.slice(0, -1 * N);
                }
                r.push(this.productions_[w[1]][0]);
                i.push(x.$);
                s.push(x._$);
                C = o[r[r.length - 2]][r[r.length - 1]];
                r.push(C);
                break;
              case 3:
                return true;
            }
          }
          return true;
        },
      };
      var t = (function () {
        var e = {
          EOF: 1,
          parseError: function (t, n) {
            if (this.yy.parser) {
              this.yy.parser.parseError(t, n);
            } else {
              throw new Error(t);
            }
          },
          setInput: function (e) {
            this._input = e;
            this._more = this._less = this.done = false;
            this.yylineno = this.yyleng = 0;
            this.yytext = this.matched = this.match = "";
            this.conditionStack = ["INITIAL"];
            this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
            };
            if (this.options.ranges) this.yylloc.range = [0, 0];
            this.offset = 0;
            return this;
          },
          input: function () {
            var e = this._input[0];
            this.yytext += e;
            this.yyleng++;
            this.offset++;
            this.match += e;
            this.matched += e;
            var t = e.match(/(?:\r\n?|\n).*/g);
            if (t) {
              this.yylineno++;
              this.yylloc.last_line++;
            } else {
              this.yylloc.last_column++;
            }
            if (this.options.ranges) this.yylloc.range[1]++;
            this._input = this._input.slice(1);
            return e;
          },
          unput: function (e) {
            var t = e.length;
            var n = e.split(/(?:\r\n?|\n)/g);
            this._input = e + this._input;
            this.yytext = this.yytext.substr(0, this.yytext.length - t - 1);
            this.offset -= t;
            var r = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1);
            this.matched = this.matched.substr(0, this.matched.length - 1);
            if (n.length - 1) this.yylineno -= n.length - 1;
            var i = this.yylloc.range;
            this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: n
                ? (n.length === r.length ? this.yylloc.first_column : 0) +
                  r[r.length - n.length].length -
                  n[0].length
                : this.yylloc.first_column - t,
            };
            if (this.options.ranges) {
              this.yylloc.range = [i[0], i[0] + this.yyleng - t];
            }
            return this;
          },
          more: function () {
            this._more = true;
            return this;
          },
          less: function (e) {
            this.unput(this.match.slice(e));
          },
          pastInput: function () {
            var e = this.matched.substr(
              0,
              this.matched.length - this.match.length
            );
            return (
              (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
            );
          },
          upcomingInput: function () {
            var e = this.match;
            if (e.length < 20) {
              e += this._input.substr(0, 20 - e.length);
            }
            return (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(
              /\n/g,
              ""
            );
          },
          showPosition: function () {
            var e = this.pastInput();
            var t = new Array(e.length + 1).join("-");
            return e + this.upcomingInput() + "\n" + t + "^";
          },
          next: function () {
            if (this.done) {
              return this.EOF;
            }
            if (!this._input) this.done = true;
            var e, t, n, r, i, s;
            if (!this._more) {
              this.yytext = "";
              this.match = "";
            }
            var o = this._currentRules();
            for (var u = 0; u < o.length; u++) {
              n = this._input.match(this.rules[o[u]]);
              if (n && (!t || n[0].length > t[0].length)) {
                t = n;
                r = u;
                if (!this.options.flex) break;
              }
            }
            if (t) {
              s = t[0].match(/(?:\r\n?|\n).*/g);
              if (s) this.yylineno += s.length;
              this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: s
                  ? s[s.length - 1].length -
                    s[s.length - 1].match(/\r?\n?/)[0].length
                  : this.yylloc.last_column + t[0].length,
              };
              this.yytext += t[0];
              this.match += t[0];
              this.matches = t;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
              }
              this._more = false;
              this._input = this._input.slice(t[0].length);
              this.matched += t[0];
              e = this.performAction.call(
                this,
                this.yy,
                this,
                o[r],
                this.conditionStack[this.conditionStack.length - 1]
              );
              if (this.done && this._input) this.done = false;
              if (e) return e;
              else return;
            }
            if (this._input === "") {
              return this.EOF;
            } else {
              return this.parseError(
                "Lexical error on line " +
                  (this.yylineno + 1) +
                  ". Unrecognized text.\n" +
                  this.showPosition(),
                { text: "", token: null, line: this.yylineno }
              );
            }
          },
          lex: function () {
            var t = this.next();
            if (typeof t !== "undefined") {
              return t;
            } else {
              return this.lex();
            }
          },
          begin: function (t) {
            this.conditionStack.push(t);
          },
          popState: function () {
            return this.conditionStack.pop();
          },
          _currentRules: function () {
            return this.conditions[
              this.conditionStack[this.conditionStack.length - 1]
            ].rules;
          },
          topState: function () {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function (t) {
            this.begin(t);
          },
        };
        e.options = {};
        e.performAction = function (t, n, r, i) {
          var s = i;
          switch (r) {
            case 0:
              n.yytext = "\\";
              return 14;
              break;
            case 1:
              if (n.yytext.slice(-1) !== "\\") this.begin("mu");
              if (n.yytext.slice(-1) === "\\")
                (n.yytext = n.yytext.substr(0, n.yyleng - 1)),
                  this.begin("emu");
              if (n.yytext) return 14;
              break;
            case 2:
              return 14;
              break;
            case 3:
              if (n.yytext.slice(-1) !== "\\") this.popState();
              if (n.yytext.slice(-1) === "\\")
                n.yytext = n.yytext.substr(0, n.yyleng - 1);
              return 14;
              break;
            case 4:
              n.yytext = n.yytext.substr(0, n.yyleng - 4);
              this.popState();
              return 15;
              break;
            case 5:
              return 25;
              break;
            case 6:
              return 16;
              break;
            case 7:
              return 20;
              break;
            case 8:
              return 19;
              break;
            case 9:
              return 19;
              break;
            case 10:
              return 23;
              break;
            case 11:
              return 22;
              break;
            case 12:
              this.popState();
              this.begin("com");
              break;
            case 13:
              n.yytext = n.yytext.substr(3, n.yyleng - 5);
              this.popState();
              return 15;
              break;
            case 14:
              return 22;
              break;
            case 15:
              return 37;
              break;
            case 16:
              return 36;
              break;
            case 17:
              return 36;
              break;
            case 18:
              return 40;
              break;
            case 19:
              break;
            case 20:
              this.popState();
              return 24;
              break;
            case 21:
              this.popState();
              return 18;
              break;
            case 22:
              n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"');
              return 31;
              break;
            case 23:
              n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\'/g, "'");
              return 31;
              break;
            case 24:
              return 38;
              break;
            case 25:
              return 33;
              break;
            case 26:
              return 33;
              break;
            case 27:
              return 32;
              break;
            case 28:
              return 36;
              break;
            case 29:
              n.yytext = n.yytext.substr(1, n.yyleng - 2);
              return 36;
              break;
            case 30:
              return "INVALID";
              break;
            case 31:
              return 5;
              break;
          }
        };
        e.rules = [
          /^(?:\\\\(?=(\{\{)))/,
          /^(?:[^\x00]*?(?=(\{\{)))/,
          /^(?:[^\x00]+)/,
          /^(?:[^\x00]{2,}?(?=(\{\{|$)))/,
          /^(?:[\s\S]*?--\}\})/,
          /^(?:\{\{>)/,
          /^(?:\{\{#)/,
          /^(?:\{\{\/)/,
          /^(?:\{\{\^)/,
          /^(?:\{\{\s*else\b)/,
          /^(?:\{\{\{)/,
          /^(?:\{\{&)/,
          /^(?:\{\{!--)/,
          /^(?:\{\{![\s\S]*?\}\})/,
          /^(?:\{\{)/,
          /^(?:=)/,
          /^(?:\.(?=[}\/ ]))/,
          /^(?:\.\.)/,
          /^(?:[\/.])/,
          /^(?:\s+)/,
          /^(?:\}\}\})/,
          /^(?:\}\})/,
          /^(?:"(\\["]|[^"])*")/,
          /^(?:'(\\[']|[^'])*')/,
          /^(?:@)/,
          /^(?:true(?=[}\s]))/,
          /^(?:false(?=[}\s]))/,
          /^(?:-?[0-9]+(?=[}\s]))/,
          /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/,
          /^(?:\[[^\]]*\])/,
          /^(?:.)/,
          /^(?:$)/,
        ];
        e.conditions = {
          mu: {
            rules: [
              5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
              23, 24, 25, 26, 27, 28, 29, 30, 31,
            ],
            inclusive: false,
          },
          emu: { rules: [3], inclusive: false },
          com: { rules: [4], inclusive: false },
          INITIAL: { rules: [0, 1, 2, 31], inclusive: true },
        };
        return e;
      })();
      e.lexer = t;
      n.prototype = e;
      e.Parser = n;
      return new n();
    })();
    e.Parser = s;
    e.parse = function (t) {
      if (t.constructor === e.AST.ProgramNode) {
        return t;
      }
      e.Parser.yy = e.AST;
      return e.Parser.parse(t);
    };
    e.AST = {};
    e.AST.ProgramNode = function (t, n) {
      this.type = "program";
      this.statements = t;
      if (n) {
        this.inverse = new e.AST.ProgramNode(n);
      }
    };
    e.AST.MustacheNode = function (e, t, n) {
      this.type = "mustache";
      this.escaped = !n;
      this.hash = t;
      var r = (this.id = e[0]);
      var i = (this.params = e.slice(1));
      var s = (this.eligibleHelper = r.isSimple);
      this.isHelper = s && (i.length || t);
    };
    e.AST.PartialNode = function (e, t) {
      this.type = "partial";
      this.partialName = e;
      this.context = t;
    };
    e.AST.BlockNode = function (t, n, r, i) {
      var s = function (t, n) {
        if (t.original !== n.original) {
          throw new e.Exception(t.original + " doesn't match " + n.original);
        }
      };
      s(t.id, i);
      this.type = "block";
      this.mustache = t;
      this.program = n;
      this.inverse = r;
      if (this.inverse && !this.program) {
        this.isInverse = true;
      }
    };
    e.AST.ContentNode = function (e) {
      this.type = "content";
      this.string = e;
    };
    e.AST.HashNode = function (e) {
      this.type = "hash";
      this.pairs = e;
    };
    e.AST.IdNode = function (t) {
      this.type = "ID";
      var n = "",
        r = [],
        i = 0;
      for (var s = 0, o = t.length; s < o; s++) {
        var u = t[s].part;
        n += (t[s].separator || "") + u;
        if (u === ".." || u === "." || u === "this") {
          if (r.length > 0) {
            throw new e.Exception("Invalid path: " + n);
          } else if (u === "..") {
            i++;
          } else {
            this.isScoped = true;
          }
        } else {
          r.push(u);
        }
      }
      this.original = n;
      this.parts = r;
      this.string = r.join(".");
      this.depth = i;
      this.isSimple = t.length === 1 && !this.isScoped && i === 0;
      this.stringModeValue = this.string;
    };
    e.AST.PartialNameNode = function (e) {
      this.type = "PARTIAL_NAME";
      this.name = e.original;
    };
    e.AST.DataNode = function (e) {
      this.type = "DATA";
      this.id = e;
    };
    e.AST.StringNode = function (e) {
      this.type = "STRING";
      this.original = this.string = this.stringModeValue = e;
    };
    e.AST.IntegerNode = function (e) {
      this.type = "INTEGER";
      this.original = this.integer = e;
      this.stringModeValue = Number(e);
    };
    e.AST.BooleanNode = function (e) {
      this.type = "BOOLEAN";
      this.bool = e;
      this.stringModeValue = e === "true";
    };
    e.AST.CommentNode = function (e) {
      this.type = "comment";
      this.comment = e;
    };
    var o = [
      "description",
      "fileName",
      "lineNumber",
      "message",
      "name",
      "number",
      "stack",
    ];
    e.Exception = function (e) {
      var t = Error.prototype.constructor.apply(this, arguments);
      for (var n = 0; n < o.length; n++) {
        this[o[n]] = t[o[n]];
      }
    };
    e.Exception.prototype = new Error();
    e.SafeString = function (e) {
      this.string = e;
    };
    e.SafeString.prototype.toString = function () {
      return this.string.toString();
    };
    var u = {
      "&": "&",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    };
    var a = /[&<>"'`]/g;
    var f = /[&<>"'`]/;
    var l = function (e) {
      return u[e] || "&";
    };
    e.Utils = {
      extend: function (e, t) {
        for (var n in t) {
          if (t.hasOwnProperty(n)) {
            e[n] = t[n];
          }
        }
      },
      escapeExpression: function (t) {
        if (t instanceof e.SafeString) {
          return t.toString();
        } else if (t == null || t === false) {
          return "";
        }
        t = t.toString();
        if (!f.test(t)) {
          return t;
        }
        return t.replace(a, l);
      },
      isEmpty: function (e) {
        if (!e && e !== 0) {
          return true;
        } else if (n.call(e) === "[object Array]" && e.length === 0) {
          return true;
        } else {
          return false;
        }
      },
    };
    var c = (e.Compiler = function () {});
    var h = (e.JavaScriptCompiler = function () {});
    c.prototype = {
      compiler: c,
      disassemble: function () {
        var e = this.opcodes,
          t,
          n = [],
          r,
          i;
        for (var s = 0, o = e.length; s < o; s++) {
          t = e[s];
          if (t.opcode === "DECLARE") {
            n.push("DECLARE " + t.name + "=" + t.value);
          } else {
            r = [];
            for (var u = 0; u < t.args.length; u++) {
              i = t.args[u];
              if (typeof i === "string") {
                i = '"' + i.replace("\n", "\\n") + '"';
              }
              r.push(i);
            }
            n.push(t.opcode + " " + r.join(" "));
          }
        }
        return n.join("\n");
      },
      equals: function (e) {
        var t = this.opcodes.length;
        if (e.opcodes.length !== t) {
          return false;
        }
        for (var n = 0; n < t; n++) {
          var r = this.opcodes[n],
            i = e.opcodes[n];
          if (r.opcode !== i.opcode || r.args.length !== i.args.length) {
            return false;
          }
          for (var s = 0; s < r.args.length; s++) {
            if (r.args[s] !== i.args[s]) {
              return false;
            }
          }
        }
        t = this.children.length;
        if (e.children.length !== t) {
          return false;
        }
        for (n = 0; n < t; n++) {
          if (!this.children[n].equals(e.children[n])) {
            return false;
          }
        }
        return true;
      },
      guid: 0,
      compile: function (e, t) {
        this.children = [];
        this.depths = { list: [] };
        this.options = t;
        var n = this.options.knownHelpers;
        this.options.knownHelpers = {
          helperMissing: true,
          blockHelperMissing: true,
          each: true,
          if: true,
          unless: true,
          with: true,
          log: true,
        };
        if (n) {
          for (var r in n) {
            this.options.knownHelpers[r] = n[r];
          }
        }
        return this.program(e);
      },
      accept: function (e) {
        return this[e.type](e);
      },
      program: function (e) {
        var t = e.statements,
          n;
        this.opcodes = [];
        for (var r = 0, i = t.length; r < i; r++) {
          n = t[r];
          this[n.type](n);
        }
        this.isSimple = i === 1;
        this.depths.list = this.depths.list.sort(function (e, t) {
          return e - t;
        });
        return this;
      },
      compileProgram: function (e) {
        var t = new this.compiler().compile(e, this.options);
        var n = this.guid++,
          r;
        this.usePartial = this.usePartial || t.usePartial;
        this.children[n] = t;
        for (var i = 0, s = t.depths.list.length; i < s; i++) {
          r = t.depths.list[i];
          if (r < 2) {
            continue;
          } else {
            this.addDepth(r - 1);
          }
        }
        return n;
      },
      block: function (e) {
        var t = e.mustache,
          n = e.program,
          r = e.inverse;
        if (n) {
          n = this.compileProgram(n);
        }
        if (r) {
          r = this.compileProgram(r);
        }
        var i = this.classifyMustache(t);
        if (i === "helper") {
          this.helperMustache(t, n, r);
        } else if (i === "simple") {
          this.simpleMustache(t);
          this.opcode("pushProgram", n);
          this.opcode("pushProgram", r);
          this.opcode("emptyHash");
          this.opcode("blockValue");
        } else {
          this.ambiguousMustache(t, n, r);
          this.opcode("pushProgram", n);
          this.opcode("pushProgram", r);
          this.opcode("emptyHash");
          this.opcode("ambiguousBlockValue");
        }
        this.opcode("append");
      },
      hash: function (e) {
        var t = e.pairs,
          n,
          r;
        this.opcode("pushHash");
        for (var i = 0, s = t.length; i < s; i++) {
          n = t[i];
          r = n[1];
          if (this.options.stringParams) {
            if (r.depth) {
              this.addDepth(r.depth);
            }
            this.opcode("getContext", r.depth || 0);
            this.opcode("pushStringParam", r.stringModeValue, r.type);
          } else {
            this.accept(r);
          }
          this.opcode("assignToHash", n[0]);
        }
        this.opcode("popHash");
      },
      partial: function (e) {
        var t = e.partialName;
        this.usePartial = true;
        if (e.context) {
          this.ID(e.context);
        } else {
          this.opcode("push", "depth0");
        }
        this.opcode("invokePartial", t.name);
        this.opcode("append");
      },
      content: function (e) {
        this.opcode("appendContent", e.string);
      },
      mustache: function (e) {
        var t = this.options;
        var n = this.classifyMustache(e);
        if (n === "simple") {
          this.simpleMustache(e);
        } else if (n === "helper") {
          this.helperMustache(e);
        } else {
          this.ambiguousMustache(e);
        }
        if (e.escaped && !t.noEscape) {
          this.opcode("appendEscaped");
        } else {
          this.opcode("append");
        }
      },
      ambiguousMustache: function (e, t, n) {
        var r = e.id,
          i = r.parts[0],
          s = t != null || n != null;
        this.opcode("getContext", r.depth);
        this.opcode("pushProgram", t);
        this.opcode("pushProgram", n);
        this.opcode("invokeAmbiguous", i, s);
      },
      simpleMustache: function (e) {
        var t = e.id;
        if (t.type === "DATA") {
          this.DATA(t);
        } else if (t.parts.length) {
          this.ID(t);
        } else {
          this.addDepth(t.depth);
          this.opcode("getContext", t.depth);
          this.opcode("pushContext");
        }
        this.opcode("resolvePossibleLambda");
      },
      helperMustache: function (e, t, n) {
        var r = this.setupFullMustacheParams(e, t, n),
          i = e.id.parts[0];
        if (this.options.knownHelpers[i]) {
          this.opcode("invokeKnownHelper", r.length, i);
        } else if (this.options.knownHelpersOnly) {
          throw new Error(
            "You specified knownHelpersOnly, but used the unknown helper " + i
          );
        } else {
          this.opcode("invokeHelper", r.length, i);
        }
      },
      ID: function (e) {
        this.addDepth(e.depth);
        this.opcode("getContext", e.depth);
        var t = e.parts[0];
        if (!t) {
          this.opcode("pushContext");
        } else {
          this.opcode("lookupOnContext", e.parts[0]);
        }
        for (var n = 1, r = e.parts.length; n < r; n++) {
          this.opcode("lookup", e.parts[n]);
        }
      },
      DATA: function (t) {
        this.options.data = true;
        if (t.id.isScoped || t.id.depth) {
          throw new e.Exception(
            "Scoped data references are not supported: " + t.original
          );
        }
        this.opcode("lookupData");
        var n = t.id.parts;
        for (var r = 0, i = n.length; r < i; r++) {
          this.opcode("lookup", n[r]);
        }
      },
      STRING: function (e) {
        this.opcode("pushString", e.string);
      },
      INTEGER: function (e) {
        this.opcode("pushLiteral", e.integer);
      },
      BOOLEAN: function (e) {
        this.opcode("pushLiteral", e.bool);
      },
      comment: function () {},
      opcode: function (e) {
        this.opcodes.push({ opcode: e, args: [].slice.call(arguments, 1) });
      },
      declare: function (e, t) {
        this.opcodes.push({ opcode: "DECLARE", name: e, value: t });
      },
      addDepth: function (e) {
        if (isNaN(e)) {
          throw new Error("EWOT");
        }
        if (e === 0) {
          return;
        }
        if (!this.depths[e]) {
          this.depths[e] = true;
          this.depths.list.push(e);
        }
      },
      classifyMustache: function (e) {
        var t = e.isHelper;
        var n = e.eligibleHelper;
        var r = this.options;
        if (n && !t) {
          var i = e.id.parts[0];
          if (r.knownHelpers[i]) {
            t = true;
          } else if (r.knownHelpersOnly) {
            n = false;
          }
        }
        if (t) {
          return "helper";
        } else if (n) {
          return "ambiguous";
        } else {
          return "simple";
        }
      },
      pushParams: function (e) {
        var t = e.length,
          n;
        while (t--) {
          n = e[t];
          if (this.options.stringParams) {
            if (n.depth) {
              this.addDepth(n.depth);
            }
            this.opcode("getContext", n.depth || 0);
            this.opcode("pushStringParam", n.stringModeValue, n.type);
          } else {
            this[n.type](n);
          }
        }
      },
      setupMustacheParams: function (e) {
        var t = e.params;
        this.pushParams(t);
        if (e.hash) {
          this.hash(e.hash);
        } else {
          this.opcode("emptyHash");
        }
        return t;
      },
      setupFullMustacheParams: function (e, t, n) {
        var r = e.params;
        this.pushParams(r);
        this.opcode("pushProgram", t);
        this.opcode("pushProgram", n);
        if (e.hash) {
          this.hash(e.hash);
        } else {
          this.opcode("emptyHash");
        }
        return r;
      },
    };
    var p = function (e) {
      this.value = e;
    };
    h.prototype = {
      nameLookup: function (e, t) {
        if (/^[0-9]+$/.test(t)) {
          return e + "[" + t + "]";
        } else if (h.isValidJavaScriptVariableName(t)) {
          return e + "." + t;
        } else {
          return e + "['" + t + "']";
        }
      },
      appendToBuffer: function (e) {
        if (this.environment.isSimple) {
          return "return " + e + ";";
        } else {
          return {
            appendToBuffer: true,
            content: e,
            toString: function () {
              return "buffer += " + e + ";";
            },
          };
        }
      },
      initializeBuffer: function () {
        return this.quotedString("");
      },
      namespace: "Handlebars",
      compile: function (t, n, r, i) {
        this.environment = t;
        this.options = n || {};
        e.log(e.logger.DEBUG, this.environment.disassemble() + "\n\n");
        this.name = this.environment.name;
        this.isChild = !!r;
        this.context = r || { programs: [], environments: [], aliases: {} };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.registers = { list: [] };
        this.compileStack = [];
        this.inlineStack = [];
        this.compileChildren(t, n);
        var s = t.opcodes,
          o;
        this.i = 0;
        for (g = s.length; this.i < g; this.i++) {
          o = s[this.i];
          if (o.opcode === "DECLARE") {
            this[o.name] = o.value;
          } else {
            this[o.opcode].apply(this, o.args);
          }
        }
        return this.createFunctionContext(i);
      },
      nextOpcode: function () {
        var e = this.environment.opcodes;
        return e[this.i + 1];
      },
      eat: function () {
        this.i = this.i + 1;
      },
      preamble: function () {
        var e = [];
        if (!this.isChild) {
          var t = this.namespace;
          var n = "helpers = this.merge(helpers, " + t + ".helpers);";
          if (this.environment.usePartial) {
            n = n + " partials = this.merge(partials, " + t + ".partials);";
          }
          if (this.options.data) {
            n = n + " data = data || {};";
          }
          e.push(n);
        } else {
          e.push("");
        }
        if (!this.environment.isSimple) {
          e.push(", buffer = " + this.initializeBuffer());
        } else {
          e.push("");
        }
        this.lastContext = 0;
        this.source = e;
      },
      createFunctionContext: function (t) {
        var n = this.stackVars.concat(this.registers.list);
        if (n.length > 0) {
          this.source[1] = this.source[1] + ", " + n.join(", ");
        }
        if (!this.isChild) {
          for (var r in this.context.aliases) {
            if (this.context.aliases.hasOwnProperty(r)) {
              this.source[1] =
                this.source[1] + ", " + r + "=" + this.context.aliases[r];
            }
          }
        }
        if (this.source[1]) {
          this.source[1] = "var " + this.source[1].substring(2) + ";";
        }
        if (!this.isChild) {
          this.source[1] += "\n" + this.context.programs.join("\n") + "\n";
        }
        if (!this.environment.isSimple) {
          this.source.push("return buffer;");
        }
        var i = this.isChild
          ? ["depth0", "data"]
          : ["Handlebars", "depth0", "helpers", "partials", "data"];
        for (var s = 0, o = this.environment.depths.list.length; s < o; s++) {
          i.push("depth" + this.environment.depths.list[s]);
        }
        var u = this.mergeSource();
        if (!this.isChild) {
          var a = e.COMPILER_REVISION,
            f = e.REVISION_CHANGES[a];
          u = "this.compilerInfo = [" + a + ",'" + f + "'];\n" + u;
        }
        if (t) {
          i.push(u);
          return Function.apply(this, i);
        } else {
          var l =
            "function " +
            (this.name || "") +
            "(" +
            i.join(",") +
            ") {\n  " +
            u +
            "}";
          e.log(e.logger.DEBUG, l + "\n\n");
          return l;
        }
      },
      mergeSource: function () {
        var e = "",
          n;
        for (var r = 0, i = this.source.length; r < i; r++) {
          var s = this.source[r];
          if (s.appendToBuffer) {
            if (n) {
              n = n + "\n    + " + s.content;
            } else {
              n = s.content;
            }
          } else {
            if (n) {
              e += "buffer += " + n + ";\n  ";
              n = t;
            }
            e += s + "\n  ";
          }
        }
        return e;
      },
      blockValue: function () {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e);
        this.replaceStack(function (t) {
          e.splice(1, 0, t);
          return "blockHelperMissing.call(" + e.join(", ") + ")";
        });
      },
      ambiguousBlockValue: function () {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e);
        var t = this.topStack();
        e.splice(1, 0, t);
        e[e.length - 1] = "options";
        this.source.push(
          "if (!" +
            this.lastHelper +
            ") { " +
            t +
            " = blockHelperMissing.call(" +
            e.join(", ") +
            "); }"
        );
      },
      appendContent: function (e) {
        this.source.push(this.appendToBuffer(this.quotedString(e)));
      },
      append: function () {
        this.flushInline();
        var e = this.popStack();
        this.source.push(
          "if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"
        );
        if (this.environment.isSimple) {
          this.source.push("else { " + this.appendToBuffer("''") + " }");
        }
      },
      appendEscaped: function () {
        this.context.aliases.escapeExpression = "this.escapeExpression";
        this.source.push(
          this.appendToBuffer("escapeExpression(" + this.popStack() + ")")
        );
      },
      getContext: function (e) {
        if (this.lastContext !== e) {
          this.lastContext = e;
        }
      },
      lookupOnContext: function (e) {
        this.push(this.nameLookup("depth" + this.lastContext, e, "context"));
      },
      pushContext: function () {
        this.pushStackLiteral("depth" + this.lastContext);
      },
      resolvePossibleLambda: function () {
        this.context.aliases.functionType = '"function"';
        this.replaceStack(function (e) {
          return (
            "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
          );
        });
      },
      lookup: function (e) {
        this.replaceStack(function (t) {
          return (
            t +
            " == null || " +
            t +
            " === false ? " +
            t +
            " : " +
            this.nameLookup(t, e, "context")
          );
        });
      },
      lookupData: function (e) {
        this.push("data");
      },
      pushStringParam: function (e, t) {
        this.pushStackLiteral("depth" + this.lastContext);
        this.pushString(t);
        if (typeof e === "string") {
          this.pushString(e);
        } else {
          this.pushStackLiteral(e);
        }
      },
      emptyHash: function () {
        this.pushStackLiteral("{}");
        if (this.options.stringParams) {
          this.register("hashTypes", "{}");
          this.register("hashContexts", "{}");
        }
      },
      pushHash: function () {
        this.hash = { values: [], types: [], contexts: [] };
      },
      popHash: function () {
        var e = this.hash;
        this.hash = t;
        if (this.options.stringParams) {
          this.register("hashContexts", "{" + e.contexts.join(",") + "}");
          this.register("hashTypes", "{" + e.types.join(",") + "}");
        }
        this.push("{\n    " + e.values.join(",\n    ") + "\n  }");
      },
      pushString: function (e) {
        this.pushStackLiteral(this.quotedString(e));
      },
      push: function (e) {
        this.inlineStack.push(e);
        return e;
      },
      pushLiteral: function (e) {
        this.pushStackLiteral(e);
      },
      pushProgram: function (e) {
        if (e != null) {
          this.pushStackLiteral(this.programExpression(e));
        } else {
          this.pushStackLiteral(null);
        }
      },
      invokeHelper: function (e, t) {
        this.context.aliases.helperMissing = "helpers.helperMissing";
        var n = (this.lastHelper = this.setupHelper(e, t, true));
        var r = this.nameLookup("depth" + this.lastContext, t, "context");
        this.push(n.name + " || " + r);
        this.replaceStack(function (e) {
          return (
            e +
            " ? " +
            e +
            ".call(" +
            n.callParams +
            ") " +
            ": helperMissing.call(" +
            n.helperMissingParams +
            ")"
          );
        });
      },
      invokeKnownHelper: function (e, t) {
        var n = this.setupHelper(e, t);
        this.push(n.name + ".call(" + n.callParams + ")");
      },
      invokeAmbiguous: function (e, t) {
        this.context.aliases.functionType = '"function"';
        this.pushStackLiteral("{}");
        var n = this.setupHelper(0, e, t);
        var r = (this.lastHelper = this.nameLookup("helpers", e, "helper"));
        var i = this.nameLookup("depth" + this.lastContext, e, "context");
        var s = this.nextStack();
        this.source.push(
          "if (" +
            s +
            " = " +
            r +
            ") { " +
            s +
            " = " +
            s +
            ".call(" +
            n.callParams +
            "); }"
        );
        this.source.push(
          "else { " +
            s +
            " = " +
            i +
            "; " +
            s +
            " = typeof " +
            s +
            " === functionType ? " +
            s +
            ".apply(depth0) : " +
            s +
            "; }"
        );
      },
      invokePartial: function (e) {
        var t = [
          this.nameLookup("partials", e, "partial"),
          "'" + e + "'",
          this.popStack(),
          "helpers",
          "partials",
        ];
        if (this.options.data) {
          t.push("data");
        }
        this.context.aliases.self = "this";
        this.push("self.invokePartial(" + t.join(", ") + ")");
      },
      assignToHash: function (e) {
        var t = this.popStack(),
          n,
          r;
        if (this.options.stringParams) {
          r = this.popStack();
          n = this.popStack();
        }
        var i = this.hash;
        if (n) {
          i.contexts.push("'" + e + "': " + n);
        }
        if (r) {
          i.types.push("'" + e + "': " + r);
        }
        i.values.push("'" + e + "': (" + t + ")");
      },
      compiler: h,
      compileChildren: function (e, t) {
        var n = e.children,
          r,
          i;
        for (var s = 0, o = n.length; s < o; s++) {
          r = n[s];
          i = new this.compiler();
          var u = this.matchExistingProgram(r);
          if (u == null) {
            this.context.programs.push("");
            u = this.context.programs.length;
            r.index = u;
            r.name = "program" + u;
            this.context.programs[u] = i.compile(r, t, this.context);
            this.context.environments[u] = r;
          } else {
            r.index = u;
            r.name = "program" + u;
          }
        }
      },
      matchExistingProgram: function (e) {
        for (var t = 0, n = this.context.environments.length; t < n; t++) {
          var r = this.context.environments[t];
          if (r && r.equals(e)) {
            return t;
          }
        }
      },
      programExpression: function (e) {
        this.context.aliases.self = "this";
        if (e == null) {
          return "self.noop";
        }
        var t = this.environment.children[e],
          n = t.depths.list,
          r;
        var i = [t.index, t.name, "data"];
        for (var s = 0, o = n.length; s < o; s++) {
          r = n[s];
          if (r === 1) {
            i.push("depth0");
          } else {
            i.push("depth" + (r - 1));
          }
        }
        return (
          (n.length === 0 ? "self.program(" : "self.programWithDepth(") +
          i.join(", ") +
          ")"
        );
      },
      register: function (e, t) {
        this.useRegister(e);
        this.source.push(e + " = " + t + ";");
      },
      useRegister: function (e) {
        if (!this.registers[e]) {
          this.registers[e] = true;
          this.registers.list.push(e);
        }
      },
      pushStackLiteral: function (e) {
        return this.push(new p(e));
      },
      pushStack: function (e) {
        this.flushInline();
        var t = this.incrStack();
        if (e) {
          this.source.push(t + " = " + e + ";");
        }
        this.compileStack.push(t);
        return t;
      },
      replaceStack: function (e) {
        var t = "",
          n = this.isInline(),
          r;
        if (n) {
          var i = this.popStack(true);
          if (i instanceof p) {
            r = i.value;
          } else {
            var s = this.stackSlot ? this.topStackName() : this.incrStack();
            t = "(" + this.push(s) + " = " + i + "),";
            r = this.topStack();
          }
        } else {
          r = this.topStack();
        }
        var o = e.call(this, r);
        if (n) {
          if (this.inlineStack.length || this.compileStack.length) {
            this.popStack();
          }
          this.push("(" + t + o + ")");
        } else {
          if (!/^stack/.test(r)) {
            r = this.nextStack();
          }
          this.source.push(r + " = (" + t + o + ");");
        }
        return r;
      },
      nextStack: function () {
        return this.pushStack();
      },
      incrStack: function () {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) {
          this.stackVars.push("stack" + this.stackSlot);
        }
        return this.topStackName();
      },
      topStackName: function () {
        return "stack" + this.stackSlot;
      },
      flushInline: function () {
        var e = this.inlineStack;
        if (e.length) {
          this.inlineStack = [];
          for (var t = 0, n = e.length; t < n; t++) {
            var r = e[t];
            if (r instanceof p) {
              this.compileStack.push(r);
            } else {
              this.pushStack(r);
            }
          }
        }
      },
      isInline: function () {
        return this.inlineStack.length;
      },
      popStack: function (e) {
        var t = this.isInline(),
          n = (t ? this.inlineStack : this.compileStack).pop();
        if (!e && n instanceof p) {
          return n.value;
        } else {
          if (!t) {
            this.stackSlot--;
          }
          return n;
        }
      },
      topStack: function (e) {
        var t = this.isInline() ? this.inlineStack : this.compileStack,
          n = t[t.length - 1];
        if (!e && n instanceof p) {
          return n.value;
        } else {
          return n;
        }
      },
      quotedString: function (e) {
        return (
          '"' +
          e
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"')
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\u2028/g, "\\u2028")
            .replace(/\u2029/g, "\\u2029") +
          '"'
        );
      },
      setupHelper: function (e, t, n) {
        var r = [];
        this.setupParams(e, r, n);
        var i = this.nameLookup("helpers", t, "helper");
        return {
          params: r,
          name: i,
          callParams: ["depth0"].concat(r).join(", "),
          helperMissingParams:
            n && ["depth0", this.quotedString(t)].concat(r).join(", "),
        };
      },
      setupParams: function (e, t, n) {
        var r = [],
          i = [],
          s = [],
          o,
          u,
          a;
        r.push("hash:" + this.popStack());
        u = this.popStack();
        a = this.popStack();
        if (a || u) {
          if (!a) {
            this.context.aliases.self = "this";
            a = "self.noop";
          }
          if (!u) {
            this.context.aliases.self = "this";
            u = "self.noop";
          }
          r.push("inverse:" + u);
          r.push("fn:" + a);
        }
        for (var f = 0; f < e; f++) {
          o = this.popStack();
          t.push(o);
          if (this.options.stringParams) {
            s.push(this.popStack());
            i.push(this.popStack());
          }
        }
        if (this.options.stringParams) {
          r.push("contexts:[" + i.join(",") + "]");
          r.push("types:[" + s.join(",") + "]");
          r.push("hashContexts:hashContexts");
          r.push("hashTypes:hashTypes");
        }
        if (this.options.data) {
          r.push("data:data");
        }
        r = "{" + r.join(",") + "}";
        if (n) {
          this.register("options", r);
          t.push("options");
        } else {
          t.push(r);
        }
        return t.join(", ");
      },
    };
    var d = (
      "break else new var" +
      " case finally return void" +
      " catch for switch while" +
      " continue function this with" +
      " default if throw" +
      " delete in try" +
      " do instanceof typeof" +
      " abstract enum int short" +
      " boolean export interface static" +
      " byte extends long super" +
      " char final native synchronized" +
      " class float package throws" +
      " const goto private transient" +
      " debugger implements protected volatile" +
      " double import public let yield"
    ).split(" ");
    var v = (h.RESERVED_WORDS = {});
    for (var m = 0, g = d.length; m < g; m++) {
      v[d[m]] = true;
    }
    h.isValidJavaScriptVariableName = function (e) {
      if (!h.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e)) {
        return true;
      }
      return false;
    };
    e.precompile = function (t, n) {
      if (
        t == null ||
        (typeof t !== "string" && t.constructor !== e.AST.ProgramNode)
      ) {
        throw new e.Exception(
          "You must pass a string or Handlebars AST to Handlebars.precompile. You passed " +
            t
        );
      }
      n = n || {};
      if (!("data" in n)) {
        n.data = true;
      }
      var r = e.parse(t);
      var i = new c().compile(r, n);
      return new h().compile(i, n);
    };
    e.compile = function (n, r) {
      function s() {
        var i = e.parse(n);
        var s = new c().compile(i, r);
        var o = new h().compile(s, r, t, true);
        return e.template(o);
      }
      if (
        n == null ||
        (typeof n !== "string" && n.constructor !== e.AST.ProgramNode)
      ) {
        throw new e.Exception(
          "You must pass a string or Handlebars AST to Handlebars.compile. You passed " +
            n
        );
      }
      r = r || {};
      if (!("data" in r)) {
        r.data = true;
      }
      var i;
      return function (e, t) {
        if (!i) {
          i = s();
        }
        return i.call(this, e, t);
      };
    };
    e.VM = {
      template: function (t) {
        var n = {
          escapeExpression: e.Utils.escapeExpression,
          invokePartial: e.VM.invokePartial,
          programs: [],
          program: function (t, n, r) {
            var i = this.programs[t];
            if (r) {
              i = e.VM.program(t, n, r);
            } else if (!i) {
              i = this.programs[t] = e.VM.program(t, n);
            }
            return i;
          },
          merge: function (t, n) {
            var r = t || n;
            if (t && n) {
              r = {};
              e.Utils.extend(r, n);
              e.Utils.extend(r, t);
            }
            return r;
          },
          programWithDepth: e.VM.programWithDepth,
          noop: e.VM.noop,
          compilerInfo: null,
        };
        return function (r, i) {
          i = i || {};
          var s = t.call(n, e, r, i.helpers, i.partials, i.data);
          var o = n.compilerInfo || [],
            u = o[0] || 1,
            a = e.COMPILER_REVISION;
          if (u !== a) {
            if (u < a) {
              var f = e.REVISION_CHANGES[a],
                l = e.REVISION_CHANGES[u];
              throw (
                "Template was precompiled with an older version of Handlebars than the current runtime. " +
                "Please update your precompiler to a newer version (" +
                f +
                ") or downgrade your runtime to an older version (" +
                l +
                ")."
              );
            } else {
              throw (
                "Template was precompiled with a newer version of Handlebars than the current runtime. " +
                "Please update your runtime to a newer version (" +
                o[1] +
                ")."
              );
            }
          }
          return s;
        };
      },
      programWithDepth: function (e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3);
        var i = function (e, i) {
          i = i || {};
          return t.apply(this, [e, i.data || n].concat(r));
        };
        i.program = e;
        i.depth = r.length;
        return i;
      },
      program: function (e, t, n) {
        var r = function (e, r) {
          r = r || {};
          return t(e, r.data || n);
        };
        r.program = e;
        r.depth = 0;
        return r;
      },
      noop: function () {
        return "";
      },
      invokePartial: function (n, r, i, s, o, u) {
        var a = { helpers: s, partials: o, data: u };
        if (n === t) {
          throw new e.Exception("The partial " + r + " could not be found");
        } else if (n instanceof Function) {
          return n(i, a);
        } else if (!e.compile) {
          throw new e.Exception(
            "The partial " +
              r +
              " could not be compiled when running in runtime-only mode"
          );
        } else {
          o[r] = e.compile(n, { data: u !== t });
          return o[r](i, a);
        }
      },
    };
    e.template = e.VM.template;
  })(Handlebars);
}
init();
Handlebars.registerHelper("getBodystle", function (e) {
  var t = "";
  switch (e) {
    case "Convertibles":
      t = "CAB";
      break;
    case "Sedans":
      t = "SDN";
      break;
    case "Roadsters":
      t = "RDS";
      break;
    case "Coupes":
      t = "CPE";
      break;
    case "Wagons":
      t = "WGN";
      break;
    case "SUVs":
      t = "SUV";
      break;
    default:
      t = ":(";
      break;
  }
  return new Handlebars.SafeString(
    '<h4 class="bsHeading" data-bodystyle="' + t + '">' + e + "</h4>"
  );
});
