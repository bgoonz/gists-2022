function udm_(e, o) {
  var n,
    c,
    r,
    t,
    i,
    p = "comScore=",
    a = document,
    s = a.cookie,
    f = "",
    d = "indexOf",
    u = "substring",
    m = "length",
    l = 2048,
    _ = "&ns_",
    g = "&",
    h = window,
    w = h.encodeURIComponent || escape;
  if (s[d](p) + 1)
    for (t = 0, r = s.split(";"), i = r[m]; i > t; t++)
      (c = r[t][d](p)), c + 1 && (f = g + unescape(r[t][u](c + p[m])));
  (e +=
    _ +
    "_t=" +
    +new Date() +
    _ +
    "c=" +
    (a.characterSet || a.defaultCharset || "") +
    (h === h.top ? "" : _ + "if=1") +
    "&cv=3.5&c8=" +
    w(a.title) +
    f +
    "&c7=" +
    w(a.URL) +
    "&c9=" +
    w(a.referrer)),
    e[m] > l &&
      e[d](g) > 0 &&
      ((n = e[u](0, l - 8).lastIndexOf(g)),
      (e = (e[u](0, n) + _ + "cut=" + w(e[u](n + 1)))[u](0, l))),
    a.images
      ? ((c = new Image()),
        h.ns_p || (ns_p = c),
        "function" == typeof o && (c.onload = c.onerror = o),
        (c.src = e))
      : a.write(
          "<",
          "p",
          "><",
          'img src="',
          e,
          '" height="1" width="1" alt="*"',
          "><",
          "/p",
          ">"
        );
}
"undefined" == typeof _comscore && (_comscore = []),
  (function () {
    var e,
      o = "length",
      n = window,
      c = n.encodeURIComponent ? encodeURIComponent : escape,
      r = function (e) {
        if (e) {
          var n,
            r,
            t,
            i,
            p = [],
            a = 0,
            s = "";
          for (var f in e)
            (r = typeof e[f]),
              ("string" != r && "number" != r) ||
                ((p[p[o]] = f + "=" + c(e[f])),
                "c2" == f ? (s = e[f]) : "c1" == f && (a = 1));
          if (p[o] <= 0 || "" == s) return;
          if (
            ((i = e.options || {}),
            (i.d = i.d || document),
            "string" == typeof i.url_append)
          ) {
            t = i.url_append.replace(/&amp;/, "&").split("&");
            for (var d, f = 0, u = t[o]; u > f; f++)
              (d = t[f].split("=")),
                2 == d[o] && (p[p[o]] = d[0] + "=" + c(d[1]));
          }
          (n = [
            "https://sb",
            ".scorecardresearch.com/b?",
            a ? "" : "c1=2&",
            p.join("&").replace(/&$/, ""),
          ]),
            udm_(n.join(""));
        }
      },
      t = function (e) {
        e = e || _comscore;
        for (var n = 0, c = e[o]; c > n; n++) r(e[n]);
        e = _comscore = [];
      };
    t(),
      (e = n.COMSCORE)
        ? ((e.purge = t), (e.beacon = r))
        : (COMSCORE = {
            purge: t,
            beacon: r,
          });
  })();
