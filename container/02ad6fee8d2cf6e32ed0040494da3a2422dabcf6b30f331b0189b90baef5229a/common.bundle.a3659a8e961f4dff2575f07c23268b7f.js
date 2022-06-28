var requirejs, require, define;
!(function (global, setTimeout) {
  function commentReplace(a, b) {
    return b || "";
  }

  function isFunction(a) {
    return "[object Function]" === ostring.call(a);
  }

  function isArray(a) {
    return "[object Array]" === ostring.call(a);
  }

  function each(a, b) {
    if (a) {
      var c;
      for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
    }
  }

  function eachReverse(a, b) {
    if (a) {
      var c;
      for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
    }
  }

  function hasProp(a, b) {
    return hasOwn.call(a, b);
  }

  function getOwn(a, b) {
    return hasProp(a, b) && a[b];
  }

  function eachProp(a, b) {
    var c;
    for (c in a) if (hasProp(a, c) && b(a[c], c)) break;
  }

  function mixin(a, b, c, d) {
    return (
      b &&
        eachProp(b, function (b, e) {
          (!c && hasProp(a, e)) ||
            (!d ||
            "object" != typeof b ||
            !b ||
            isArray(b) ||
            isFunction(b) ||
            b instanceof RegExp
              ? (a[e] = b)
              : (a[e] || (a[e] = {}), mixin(a[e], b, c, d)));
        }),
      a
    );
  }

  function bind(a, b) {
    return function () {
      return b.apply(a, arguments);
    };
  }

  function scripts() {
    return document.getElementsByTagName("script");
  }

  function defaultOnError(a) {
    throw a;
  }

  function getGlobal(a) {
    if (!a) return a;
    var b = global;
    return (
      each(a.split("."), function (a) {
        b = b[a];
      }),
      b
    );
  }

  function makeError(a, b, c, d) {
    var e = new Error(b + "\nhttp://requirejs.org/docs/errors.html#" + a);
    return (
      (e.requireType = a), (e.requireModules = d), c && (e.originalError = c), e
    );
  }

  function newContext(a) {
    function b(a) {
      var b, c;
      for (b = 0; b < a.length; b++)
        if (((c = a[b]), "." === c)) a.splice(b, 1), (b -= 1);
        else if (".." === c) {
          if (0 === b || (1 === b && ".." === a[2]) || ".." === a[b - 1])
            continue;
          b > 0 && (a.splice(b - 1, 2), (b -= 2));
        }
    }

    function c(a, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = c && c.split("/"),
        r = x.map,
        s = r && r["*"];
      if (
        (a &&
          ((a = a.split("/")),
          (k = a.length - 1),
          x.nodeIdCompat &&
            jsSuffixRegExp.test(a[k]) &&
            (a[k] = a[k].replace(jsSuffixRegExp, "")),
          "." === a[0].charAt(0) &&
            q &&
            ((p = q.slice(0, q.length - 1)), (a = p.concat(a))),
          b(a),
          (a = a.join("/"))),
        d && r && (q || s))
      ) {
        g = a.split("/");
        a: for (h = g.length; h > 0; h -= 1) {
          if (((j = g.slice(0, h).join("/")), q))
            for (i = q.length; i > 0; i -= 1)
              if (
                ((f = getOwn(r, q.slice(0, i).join("/"))),
                f && (f = getOwn(f, j)))
              ) {
                (l = f), (m = h);
                break a;
              }
          !n && s && getOwn(s, j) && ((n = getOwn(s, j)), (o = h));
        }
        !l && n && ((l = n), (m = o)),
          l && (g.splice(0, m, l), (a = g.join("/")));
      }
      return (e = getOwn(x.pkgs, a)), e ? e : a;
    }

    function d(a) {
      isBrowser &&
        each(scripts(), function (b) {
          if (
            b.getAttribute("data-requiremodule") === a &&
            b.getAttribute("data-requirecontext") === u.contextName
          )
            return b.parentNode.removeChild(b), !0;
        });
    }

    function e(a) {
      var b = getOwn(x.paths, a);
      if (b && isArray(b) && b.length > 1)
        return (
          b.shift(),
          u.require.undef(a),
          u.makeRequire(null, {
            skipMap: !0,
          })([a]),
          !0
        );
    }

    function f(a) {
      var b,
        c = a ? a.indexOf("!") : -1;
      return (
        c > -1 && ((b = a.substring(0, c)), (a = a.substring(c + 1, a.length))),
        [b, a]
      );
    }

    function g(a, b, d, e) {
      var g,
        h,
        i,
        j,
        k = null,
        l = b ? b.name : null,
        m = a,
        n = !0,
        o = "";
      return (
        a || ((n = !1), (a = "_@r" + (F += 1))),
        (j = f(a)),
        (k = j[0]),
        (a = j[1]),
        k && ((k = c(k, l, e)), (h = getOwn(C, k))),
        a &&
          (k
            ? (o = d
                ? a
                : h && h.normalize
                ? h.normalize(a, function (a) {
                    return c(a, l, e);
                  })
                : a.indexOf("!") === -1
                ? c(a, l, e)
                : a)
            : ((o = c(a, l, e)),
              (j = f(o)),
              (k = j[0]),
              (o = j[1]),
              (d = !0),
              (g = u.nameToUrl(o)))),
        (i = !k || h || d ? "" : "_unnormalized" + (G += 1)),
        {
          prefix: k,
          name: o,
          parentMap: b,
          unnormalized: !!i,
          url: g,
          originalName: m,
          isDefine: n,
          id: (k ? k + "!" + o : o) + i,
        }
      );
    }

    function h(a) {
      var b = a.id,
        c = getOwn(y, b);
      return c || (c = y[b] = new u.Module(a)), c;
    }

    function i(a, b, c) {
      var d = a.id,
        e = getOwn(y, d);
      !hasProp(C, d) || (e && !e.defineEmitComplete)
        ? ((e = h(a)), e.error && "error" === b ? c(e.error) : e.on(b, c))
        : "defined" === b && c(C[d]);
    }

    function j(a, b) {
      var c = a.requireModules,
        d = !1;
      b
        ? b(a)
        : (each(c, function (b) {
            var c = getOwn(y, b);
            c &&
              ((c.error = a), c.events.error && ((d = !0), c.emit("error", a)));
          }),
          d || req.onError(a));
    }

    function k() {
      globalDefQueue.length &&
        (each(globalDefQueue, function (a) {
          var b = a[0];
          "string" == typeof b && (u.defQueueMap[b] = !0), B.push(a);
        }),
        (globalDefQueue = []));
    }

    function l(a) {
      delete y[a], delete z[a];
    }

    function m(a, b, c) {
      var d = a.map.id;
      a.error
        ? a.emit("error", a.error)
        : ((b[d] = !0),
          each(a.depMaps, function (d, e) {
            var f = d.id,
              g = getOwn(y, f);
            !g ||
              a.depMatched[e] ||
              c[f] ||
              (getOwn(b, f) ? (a.defineDep(e, C[f]), a.check()) : m(g, b, c));
          }),
          (c[d] = !0));
    }

    function n() {
      var a,
        b,
        c = 1e3 * x.waitSeconds,
        f = c && u.startTime + c < new Date().getTime(),
        g = [],
        h = [],
        i = !1,
        k = !0;
      if (!s) {
        if (
          ((s = !0),
          eachProp(z, function (a) {
            var c = a.map,
              j = c.id;
            if (a.enabled && (c.isDefine || h.push(a), !a.error))
              if (!a.inited && f)
                e(j) ? ((b = !0), (i = !0)) : (g.push(j), d(j));
              else if (
                !a.inited &&
                a.fetched &&
                c.isDefine &&
                ((i = !0), !c.prefix)
              )
                return (k = !1);
          }),
          f && g.length)
        )
          return (
            (a = makeError(
              "timeout",
              "Load timeout for modules: " + g,
              null,
              g
            )),
            (a.contextName = u.contextName),
            j(a)
          );
        k &&
          each(h, function (a) {
            m(a, {}, {});
          }),
          (f && !b) ||
            !i ||
            (!isBrowser && !isWebWorker) ||
            w ||
            (w = setTimeout(function () {
              (w = 0), n();
            }, 50)),
          (s = !1);
      }
    }

    function o(a) {
      hasProp(C, a[0]) || h(g(a[0], null, !0)).init(a[1], a[2]);
    }

    function p(a, b, c, d) {
      a.detachEvent && !isOpera
        ? d && a.detachEvent(d, b)
        : a.removeEventListener(c, b, !1);
    }

    function q(a) {
      var b = a.currentTarget || a.srcElement;
      return (
        p(b, u.onScriptLoad, "load", "onreadystatechange"),
        p(b, u.onScriptError, "error"),
        {
          node: b,
          id: b && b.getAttribute("data-requiremodule"),
        }
      );
    }

    function r() {
      var a;
      for (k(); B.length; ) {
        if (((a = B.shift()), null === a[0]))
          return j(
            makeError(
              "mismatch",
              "Mismatched anonymous define() module: " + a[a.length - 1]
            )
          );
        o(a);
      }
      u.defQueueMap = {};
    }
    var s,
      t,
      u,
      v,
      w,
      x = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        bundles: {},
        pkgs: {},
        shim: {},
        config: {},
      },
      y = {},
      z = {},
      A = {},
      B = [],
      C = {},
      D = {},
      E = {},
      F = 1,
      G = 1;
    return (
      (v = {
        require: function (a) {
          return a.require ? a.require : (a.require = u.makeRequire(a.map));
        },
        exports: function (a) {
          if (((a.usingExports = !0), a.map.isDefine))
            return a.exports
              ? (C[a.map.id] = a.exports)
              : (a.exports = C[a.map.id] = {});
        },
        module: function (a) {
          return a.module
            ? a.module
            : (a.module = {
                id: a.map.id,
                uri: a.map.url,
                config: function () {
                  return getOwn(x.config, a.map.id) || {};
                },
                exports: a.exports || (a.exports = {}),
              });
        },
      }),
      (t = function (a) {
        (this.events = getOwn(A, a.id) || {}),
          (this.map = a),
          (this.shim = getOwn(x.shim, a.id)),
          (this.depExports = []),
          (this.depMaps = []),
          (this.depMatched = []),
          (this.pluginMaps = {}),
          (this.depCount = 0);
      }),
      (t.prototype = {
        init: function (a, b, c, d) {
          (d = d || {}),
            this.inited ||
              ((this.factory = b),
              c
                ? this.on("error", c)
                : this.events.error &&
                  (c = bind(this, function (a) {
                    this.emit("error", a);
                  })),
              (this.depMaps = a && a.slice(0)),
              (this.errback = c),
              (this.inited = !0),
              (this.ignore = d.ignore),
              d.enabled || this.enabled ? this.enable() : this.check());
        },
        defineDep: function (a, b) {
          this.depMatched[a] ||
            ((this.depMatched[a] = !0),
            (this.depCount -= 1),
            (this.depExports[a] = b));
        },
        fetch: function () {
          if (!this.fetched) {
            (this.fetched = !0), (u.startTime = new Date().getTime());
            var a = this.map;
            return this.shim
              ? void u.makeRequire(this.map, {
                  enableBuildCallback: !0,
                })(
                  this.shim.deps || [],
                  bind(this, function () {
                    return a.prefix ? this.callPlugin() : this.load();
                  })
                )
              : a.prefix
              ? this.callPlugin()
              : this.load();
          }
        },
        load: function () {
          var a = this.map.url;
          D[a] || ((D[a] = !0), u.load(this.map.id, a));
        },
        check: function () {
          if (this.enabled && !this.enabling) {
            var a,
              b,
              c = this.map.id,
              d = this.depExports,
              e = this.exports,
              f = this.factory;
            if (this.inited) {
              if (this.error) this.emit("error", this.error);
              else if (!this.defining) {
                if (
                  ((this.defining = !0), this.depCount < 1 && !this.defined)
                ) {
                  if (isFunction(f)) {
                    if (
                      (this.events.error && this.map.isDefine) ||
                      req.onError !== defaultOnError
                    )
                      try {
                        e = u.execCb(c, f, d, e);
                      } catch (g) {
                        a = g;
                      }
                    else e = u.execCb(c, f, d, e);
                    if (
                      (this.map.isDefine &&
                        void 0 === e &&
                        ((b = this.module),
                        b
                          ? (e = b.exports)
                          : this.usingExports && (e = this.exports)),
                      a)
                    )
                      return (
                        (a.requireMap = this.map),
                        (a.requireModules = this.map.isDefine
                          ? [this.map.id]
                          : null),
                        (a.requireType = this.map.isDefine
                          ? "define"
                          : "require"),
                        j((this.error = a))
                      );
                  } else e = f;
                  if (
                    ((this.exports = e),
                    this.map.isDefine &&
                      !this.ignore &&
                      ((C[c] = e), req.onResourceLoad))
                  ) {
                    var h = [];
                    each(this.depMaps, function (a) {
                      h.push(a.normalizedMap || a);
                    }),
                      req.onResourceLoad(u, this.map, h);
                  }
                  l(c), (this.defined = !0);
                }
                (this.defining = !1),
                  this.defined &&
                    !this.defineEmitted &&
                    ((this.defineEmitted = !0),
                    this.emit("defined", this.exports),
                    (this.defineEmitComplete = !0));
              }
            } else hasProp(u.defQueueMap, c) || this.fetch();
          }
        },
        callPlugin: function () {
          var a = this.map,
            b = a.id,
            d = g(a.prefix);
          this.depMaps.push(d),
            i(
              d,
              "defined",
              bind(this, function (d) {
                var e,
                  f,
                  k,
                  m = getOwn(E, this.map.id),
                  n = this.map.name,
                  o = this.map.parentMap ? this.map.parentMap.name : null,
                  p = u.makeRequire(a.parentMap, {
                    enableBuildCallback: !0,
                  });
                return this.map.unnormalized
                  ? (d.normalize &&
                      (n =
                        d.normalize(n, function (a) {
                          return c(a, o, !0);
                        }) || ""),
                    (f = g(a.prefix + "!" + n, this.map.parentMap, !0)),
                    i(
                      f,
                      "defined",
                      bind(this, function (a) {
                        (this.map.normalizedMap = f),
                          this.init(
                            [],
                            function () {
                              return a;
                            },
                            null,
                            {
                              enabled: !0,
                              ignore: !0,
                            }
                          );
                      })
                    ),
                    (k = getOwn(y, f.id)),
                    void (
                      k &&
                      (this.depMaps.push(f),
                      this.events.error &&
                        k.on(
                          "error",
                          bind(this, function (a) {
                            this.emit("error", a);
                          })
                        ),
                      k.enable())
                    ))
                  : m
                  ? ((this.map.url = u.nameToUrl(m)), void this.load())
                  : ((e = bind(this, function (a) {
                      this.init(
                        [],
                        function () {
                          return a;
                        },
                        null,
                        {
                          enabled: !0,
                        }
                      );
                    })),
                    (e.error = bind(this, function (a) {
                      (this.inited = !0),
                        (this.error = a),
                        (a.requireModules = [b]),
                        eachProp(y, function (a) {
                          0 === a.map.id.indexOf(b + "_unnormalized") &&
                            l(a.map.id);
                        }),
                        j(a);
                    })),
                    (e.fromText = bind(this, function (c, d) {
                      var f = a.name,
                        i = g(f),
                        k = useInteractive;
                      d && (c = d),
                        k && (useInteractive = !1),
                        h(i),
                        hasProp(x.config, b) && (x.config[f] = x.config[b]);
                      try {
                        req.exec(c);
                      } catch (l) {
                        return j(
                          makeError(
                            "fromtexteval",
                            "fromText eval for " + b + " failed: " + l,
                            l,
                            [b]
                          )
                        );
                      }
                      k && (useInteractive = !0),
                        this.depMaps.push(i),
                        u.completeLoad(f),
                        p([f], e);
                    })),
                    void d.load(a.name, p, e, x));
              })
            ),
            u.enable(d, this),
            (this.pluginMaps[d.id] = d);
        },
        enable: function () {
          (z[this.map.id] = this),
            (this.enabled = !0),
            (this.enabling = !0),
            each(
              this.depMaps,
              bind(this, function (a, b) {
                var c, d, e;
                if ("string" == typeof a) {
                  if (
                    ((a = g(
                      a,
                      this.map.isDefine ? this.map : this.map.parentMap,
                      !1,
                      !this.skipMap
                    )),
                    (this.depMaps[b] = a),
                    (e = getOwn(v, a.id)))
                  )
                    return void (this.depExports[b] = e(this));
                  (this.depCount += 1),
                    i(
                      a,
                      "defined",
                      bind(this, function (a) {
                        this.undefed || (this.defineDep(b, a), this.check());
                      })
                    ),
                    this.errback
                      ? i(a, "error", bind(this, this.errback))
                      : this.events.error &&
                        i(
                          a,
                          "error",
                          bind(this, function (a) {
                            this.emit("error", a);
                          })
                        );
                }
                (c = a.id),
                  (d = y[c]),
                  hasProp(v, c) || !d || d.enabled || u.enable(a, this);
              })
            ),
            eachProp(
              this.pluginMaps,
              bind(this, function (a) {
                var b = getOwn(y, a.id);
                b && !b.enabled && u.enable(a, this);
              })
            ),
            (this.enabling = !1),
            this.check();
        },
        on: function (a, b) {
          var c = this.events[a];
          c || (c = this.events[a] = []), c.push(b);
        },
        emit: function (a, b) {
          each(this.events[a], function (a) {
            a(b);
          }),
            "error" === a && delete this.events[a];
        },
      }),
      (u = {
        config: x,
        contextName: a,
        registry: y,
        defined: C,
        urlFetched: D,
        defQueue: B,
        defQueueMap: {},
        Module: t,
        makeModuleMap: g,
        nextTick: req.nextTick,
        onError: j,
        configure: function (a) {
          if (
            (a.baseUrl &&
              "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) &&
              (a.baseUrl += "/"),
            "string" == typeof a.urlArgs)
          ) {
            var b = a.urlArgs;
            a.urlArgs = function (a, c) {
              return (c.indexOf("?") === -1 ? "?" : "&") + b;
            };
          }
          var c = x.shim,
            d = {
              paths: !0,
              bundles: !0,
              config: !0,
              map: !0,
            };
          eachProp(a, function (a, b) {
            d[b] ? (x[b] || (x[b] = {}), mixin(x[b], a, !0, !0)) : (x[b] = a);
          }),
            a.bundles &&
              eachProp(a.bundles, function (a, b) {
                each(a, function (a) {
                  a !== b && (E[a] = b);
                });
              }),
            a.shim &&
              (eachProp(a.shim, function (a, b) {
                isArray(a) &&
                  (a = {
                    deps: a,
                  }),
                  (!a.exports && !a.init) ||
                    a.exportsFn ||
                    (a.exportsFn = u.makeShimExports(a)),
                  (c[b] = a);
              }),
              (x.shim = c)),
            a.packages &&
              each(a.packages, function (a) {
                var b, c;
                (a =
                  "string" == typeof a
                    ? {
                        name: a,
                      }
                    : a),
                  (c = a.name),
                  (b = a.location),
                  b && (x.paths[c] = a.location),
                  (x.pkgs[c] =
                    a.name +
                    "/" +
                    (a.main || "main")
                      .replace(currDirRegExp, "")
                      .replace(jsSuffixRegExp, ""));
              }),
            eachProp(y, function (a, b) {
              a.inited || a.map.unnormalized || (a.map = g(b, null, !0));
            }),
            (a.deps || a.callback) && u.require(a.deps || [], a.callback);
        },
        makeShimExports: function (a) {
          function b() {
            var b;
            return (
              a.init && (b = a.init.apply(global, arguments)),
              b || (a.exports && getGlobal(a.exports))
            );
          }
          return b;
        },
        makeRequire: function (b, e) {
          function f(c, d, i) {
            var k, l, m;
            return (
              e.enableBuildCallback &&
                d &&
                isFunction(d) &&
                (d.__requireJsBuild = !0),
              "string" == typeof c
                ? isFunction(d)
                  ? j(makeError("requireargs", "Invalid require call"), i)
                  : b && hasProp(v, c)
                  ? v[c](y[b.id])
                  : req.get
                  ? req.get(u, c, b, f)
                  : ((l = g(c, b, !1, !0)),
                    (k = l.id),
                    hasProp(C, k)
                      ? C[k]
                      : j(
                          makeError(
                            "notloaded",
                            'Module name "' +
                              k +
                              '" has not been loaded yet for context: ' +
                              a +
                              (b ? "" : ". Use require([])")
                          )
                        ))
                : (r(),
                  u.nextTick(function () {
                    r(),
                      (m = h(g(null, b))),
                      (m.skipMap = e.skipMap),
                      m.init(c, d, i, {
                        enabled: !0,
                      }),
                      n();
                  }),
                  f)
            );
          }
          return (
            (e = e || {}),
            mixin(f, {
              isBrowser: isBrowser,
              toUrl: function (a) {
                var d,
                  e = a.lastIndexOf("."),
                  f = a.split("/")[0],
                  g = "." === f || ".." === f;
                return (
                  e !== -1 &&
                    (!g || e > 1) &&
                    ((d = a.substring(e, a.length)), (a = a.substring(0, e))),
                  u.nameToUrl(c(a, b && b.id, !0), d, !0)
                );
              },
              defined: function (a) {
                return hasProp(C, g(a, b, !1, !0).id);
              },
              specified: function (a) {
                return (a = g(a, b, !1, !0).id), hasProp(C, a) || hasProp(y, a);
              },
            }),
            b ||
              (f.undef = function (a) {
                k();
                var c = g(a, b, !0),
                  e = getOwn(y, a);
                (e.undefed = !0),
                  d(a),
                  delete C[a],
                  delete D[c.url],
                  delete A[a],
                  eachReverse(B, function (b, c) {
                    b[0] === a && B.splice(c, 1);
                  }),
                  delete u.defQueueMap[a],
                  e && (e.events.defined && (A[a] = e.events), l(a));
              }),
            f
          );
        },
        enable: function (a) {
          var b = getOwn(y, a.id);
          b && h(a).enable();
        },
        completeLoad: function (a) {
          var b,
            c,
            d,
            f = getOwn(x.shim, a) || {},
            g = f.exports;
          for (k(); B.length; ) {
            if (((c = B.shift()), null === c[0])) {
              if (((c[0] = a), b)) break;
              b = !0;
            } else c[0] === a && (b = !0);
            o(c);
          }
          if (
            ((u.defQueueMap = {}),
            (d = getOwn(y, a)),
            !b && !hasProp(C, a) && d && !d.inited)
          ) {
            if (!(!x.enforceDefine || (g && getGlobal(g))))
              return e(a)
                ? void 0
                : j(
                    makeError("nodefine", "No define call for " + a, null, [a])
                  );
            o([a, f.deps || [], f.exportsFn]);
          }
          n();
        },
        nameToUrl: function (a, b, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = getOwn(x.pkgs, a);
          if ((k && (a = k), (j = getOwn(E, a)))) return u.nameToUrl(j, b, c);
          if (req.jsExtRegExp.test(a)) h = a + (b || "");
          else {
            for (d = x.paths, e = a.split("/"), f = e.length; f > 0; f -= 1)
              if (((g = e.slice(0, f).join("/")), (i = getOwn(d, g)))) {
                isArray(i) && (i = i[0]), e.splice(0, f, i);
                break;
              }
            (h = e.join("/")),
              (h += b || (/^data\:|^blob\:|\?/.test(h) || c ? "" : ".js")),
              (h =
                ("/" === h.charAt(0) || h.match(/^[\w\+\.\-]+:/)
                  ? ""
                  : x.baseUrl) + h);
          }
          return x.urlArgs && !/^blob\:/.test(h) ? h + x.urlArgs(a, h) : h;
        },
        load: function (a, b) {
          req.load(u, a, b);
        },
        execCb: function (a, b, c, d) {
          return b.apply(d, c);
        },
        onScriptLoad: function (a) {
          if (
            "load" === a.type ||
            readyRegExp.test((a.currentTarget || a.srcElement).readyState)
          ) {
            interactiveScript = null;
            var b = q(a);
            u.completeLoad(b.id);
          }
        },
        onScriptError: function (a) {
          var b = q(a);
          if (!e(b.id)) {
            var c = [];
            return (
              eachProp(y, function (a, d) {
                0 !== d.indexOf("_@r") &&
                  each(a.depMaps, function (a) {
                    if (a.id === b.id) return c.push(d), !0;
                  });
              }),
              j(
                makeError(
                  "scripterror",
                  'Script error for "' +
                    b.id +
                    (c.length ? '", needed by: ' + c.join(", ") : '"'),
                  a,
                  [b.id]
                )
              )
            );
          }
        },
      }),
      (u.require = u.makeRequire()),
      u
    );
  }

  function getInteractiveScript() {
    return interactiveScript && "interactive" === interactiveScript.readyState
      ? interactiveScript
      : (eachReverse(scripts(), function (a) {
          if ("interactive" === a.readyState) return (interactiveScript = a);
        }),
        interactiveScript);
  }
  var req,
    s,
    head,
    baseElement,
    dataMain,
    src,
    interactiveScript,
    currentlyAddingScript,
    mainScript,
    subPath,
    version = "2.3.3",
    commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    isBrowser = !(
      "undefined" == typeof window ||
      "undefined" == typeof navigator ||
      !window.document
    ),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp =
      isBrowser && "PLAYSTATION 3" === navigator.platform
        ? /^complete$/
        : /^(complete|loaded)$/,
    defContextName = "_",
    isOpera =
      "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;
  if ("undefined" == typeof define) {
    if ("undefined" != typeof requirejs) {
      if (isFunction(requirejs)) return;
      (cfg = requirejs), (requirejs = void 0);
    }
    "undefined" == typeof require ||
      isFunction(require) ||
      ((cfg = require), (require = void 0)),
      (req = requirejs =
        function (a, b, c, d) {
          var e,
            f,
            g = defContextName;
          return (
            isArray(a) ||
              "string" == typeof a ||
              ((f = a), isArray(b) ? ((a = b), (b = c), (c = d)) : (a = [])),
            f && f.context && (g = f.context),
            (e = getOwn(contexts, g)),
            e || (e = contexts[g] = req.s.newContext(g)),
            f && e.configure(f),
            e.require(a, b, c)
          );
        }),
      (req.config = function (a) {
        return req(a);
      }),
      (req.nextTick =
        "undefined" != typeof setTimeout
          ? function (a) {
              setTimeout(a, 4);
            }
          : function (a) {
              a();
            }),
      require || (require = req),
      (req.version = version),
      (req.jsExtRegExp = /^\/|:|\?|\.js$/),
      (req.isBrowser = isBrowser),
      (s = req.s =
        {
          contexts: contexts,
          newContext: newContext,
        }),
      req({}),
      each(["toUrl", "undef", "defined", "specified"], function (a) {
        req[a] = function () {
          var b = contexts[defContextName];
          return b.require[a].apply(b, arguments);
        };
      }),
      isBrowser &&
        ((head = s.head = document.getElementsByTagName("head")[0]),
        (baseElement = document.getElementsByTagName("base")[0]),
        baseElement && (head = s.head = baseElement.parentNode)),
      (req.onError = defaultOnError),
      (req.createNode = function (a, b, c) {
        var d = a.xhtml
          ? document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "html:script"
            )
          : document.createElement("script");
        return (
          (d.type = a.scriptType || "text/javascript"),
          (d.charset = "utf-8"),
          (d.async = !0),
          d
        );
      }),
      (req.load = function (a, b, c) {
        var d,
          e = (a && a.config) || {};
        if (isBrowser)
          return (
            (d = req.createNode(e, b, c)),
            d.setAttribute("data-requirecontext", a.contextName),
            d.setAttribute("data-requiremodule", b),
            !d.attachEvent ||
            (d.attachEvent.toString &&
              d.attachEvent.toString().indexOf("[native code") < 0) ||
            isOpera
              ? (d.addEventListener("load", a.onScriptLoad, !1),
                d.addEventListener("error", a.onScriptError, !1))
              : ((useInteractive = !0),
                d.attachEvent("onreadystatechange", a.onScriptLoad)),
            (d.src = c),
            e.onNodeCreated && e.onNodeCreated(d, e, b, c),
            (currentlyAddingScript = d),
            baseElement
              ? head.insertBefore(d, baseElement)
              : head.appendChild(d),
            (currentlyAddingScript = null),
            d
          );
        if (isWebWorker)
          try {
            setTimeout(function () {}, 0), importScripts(c), a.completeLoad(b);
          } catch (f) {
            a.onError(
              makeError(
                "importscripts",
                "importScripts failed for " + b + " at " + c,
                f,
                [b]
              )
            );
          }
      }),
      isBrowser &&
        !cfg.skipDataMain &&
        eachReverse(scripts(), function (a) {
          if (
            (head || (head = a.parentNode),
            (dataMain = a.getAttribute("data-main")))
          )
            return (
              (mainScript = dataMain),
              cfg.baseUrl ||
                mainScript.indexOf("!") !== -1 ||
                ((src = mainScript.split("/")),
                (mainScript = src.pop()),
                (subPath = src.length ? src.join("/") + "/" : "./"),
                (cfg.baseUrl = subPath)),
              (mainScript = mainScript.replace(jsSuffixRegExp, "")),
              req.jsExtRegExp.test(mainScript) && (mainScript = dataMain),
              (cfg.deps = cfg.deps
                ? cfg.deps.concat(mainScript)
                : [mainScript]),
              !0
            );
        }),
      (define = function (a, b, c) {
        var d, e;
        "string" != typeof a && ((c = b), (b = a), (a = null)),
          isArray(b) || ((c = b), (b = null)),
          !b &&
            isFunction(c) &&
            ((b = []),
            c.length &&
              (c
                .toString()
                .replace(commentRegExp, commentReplace)
                .replace(cjsRequireRegExp, function (a, c) {
                  b.push(c);
                }),
              (b = (
                1 === c.length ? ["require"] : ["require", "exports", "module"]
              ).concat(b)))),
          useInteractive &&
            ((d = currentlyAddingScript || getInteractiveScript()),
            d &&
              (a || (a = d.getAttribute("data-requiremodule")),
              (e = contexts[d.getAttribute("data-requirecontext")]))),
          e
            ? (e.defQueue.push([a, b, c]), (e.defQueueMap[a] = !0))
            : globalDefQueue.push([a, b, c]);
      }),
      (define.amd = {
        jQuery: !0,
      }),
      (req.exec = function (text) {
        return eval(text);
      }),
      req(cfg);
  }
})(this, "undefined" == typeof setTimeout ? void 0 : setTimeout),
  define("../../../node_modules/requirejs/require", function () {}),
  (function (a, b, c) {
    (b[a] = b[a] || c()),
      "undefined" != typeof module && module.exports
        ? (module.exports = b[a])
        : "function" == typeof define &&
          define.amd &&
          define("native-promise-only", [], function () {
            return b[a];
          });
  })("Promise", "undefined" != typeof global ? global : this, function () {
    "use strict";

    function a(a, b) {
      m.add(a, b), l || (l = o(m.drain));
    }

    function b(a) {
      var b,
        c = typeof a;
      return (
        null == a || ("object" != c && "function" != c) || (b = a.then),
        "function" == typeof b && b
      );
    }

    function c() {
      for (var a = 0; a < this.chain.length; a++)
        d(
          this,
          1 === this.state ? this.chain[a].success : this.chain[a].failure,
          this.chain[a]
        );
      this.chain.length = 0;
    }

    function d(a, c, d) {
      var e, f;
      try {
        c === !1
          ? d.reject(a.msg)
          : ((e = c === !0 ? a.msg : c.call(void 0, a.msg)),
            e === d.promise
              ? d.reject(TypeError("Promise-chain cycle"))
              : (f = b(e))
              ? f.call(e, d.resolve, d.reject)
              : d.resolve(e));
      } catch (g) {
        d.reject(g);
      }
    }

    function e(d) {
      var g,
        i = this;
      if (!i.triggered) {
        (i.triggered = !0), i.def && (i = i.def);
        try {
          (g = b(d))
            ? a(function () {
                var a = new h(i);
                try {
                  g.call(
                    d,
                    function () {
                      e.apply(a, arguments);
                    },
                    function () {
                      f.apply(a, arguments);
                    }
                  );
                } catch (b) {
                  f.call(a, b);
                }
              })
            : ((i.msg = d), (i.state = 1), i.chain.length > 0 && a(c, i));
        } catch (j) {
          f.call(new h(i), j);
        }
      }
    }

    function f(b) {
      var d = this;
      d.triggered ||
        ((d.triggered = !0),
        d.def && (d = d.def),
        (d.msg = b),
        (d.state = 2),
        d.chain.length > 0 && a(c, d));
    }

    function g(a, b, c, d) {
      for (var e = 0; e < b.length; e++)
        !(function (e) {
          a.resolve(b[e]).then(function (a) {
            c(e, a);
          }, d);
        })(e);
    }

    function h(a) {
      (this.def = a), (this.triggered = !1);
    }

    function i(a) {
      (this.promise = a),
        (this.state = 0),
        (this.triggered = !1),
        (this.chain = []),
        (this.msg = void 0);
    }

    function j(b) {
      if ("function" != typeof b) throw TypeError("Not a function");
      if (0 !== this.__NPO__) throw TypeError("Not a promise");
      this.__NPO__ = 1;
      var d = new i(this);
      (this.then = function (b, e) {
        var f = {
          success: "function" != typeof b || b,
          failure: "function" == typeof e && e,
        };
        return (
          (f.promise = new this.constructor(function (a, b) {
            if ("function" != typeof a || "function" != typeof b)
              throw TypeError("Not a function");
            (f.resolve = a), (f.reject = b);
          })),
          d.chain.push(f),
          0 !== d.state && a(c, d),
          f.promise
        );
      }),
        (this["catch"] = function (a) {
          return this.then(void 0, a);
        });
      try {
        b.call(
          void 0,
          function (a) {
            e.call(d, a);
          },
          function (a) {
            f.call(d, a);
          }
        );
      } catch (g) {
        f.call(d, g);
      }
    }
    var k,
      l,
      m,
      n = Object.prototype.toString,
      o =
        "undefined" != typeof setImmediate
          ? function (a) {
              return setImmediate(a);
            }
          : setTimeout;
    try {
      Object.defineProperty({}, "x", {}),
        (k = function (a, b, c, d) {
          return Object.defineProperty(a, b, {
            value: c,
            writable: !0,
            configurable: d !== !1,
          });
        });
    } catch (p) {
      k = function (a, b, c) {
        return (a[b] = c), a;
      };
    }
    m = (function () {
      function a(a, b) {
        (this.fn = a), (this.self = b), (this.next = void 0);
      }
      var b, c, d;
      return {
        add: function (e, f) {
          (d = new a(e, f)), c ? (c.next = d) : (b = d), (c = d), (d = void 0);
        },
        drain: function () {
          var a = b;
          for (b = c = l = void 0; a; ) a.fn.call(a.self), (a = a.next);
        },
      };
    })();
    var q = k({}, "constructor", j, !1);
    return (
      (j.prototype = q),
      k(q, "__NPO__", 0, !1),
      k(j, "resolve", function (a) {
        var b = this;
        return a && "object" == typeof a && 1 === a.__NPO__
          ? a
          : new b(function (b, c) {
              if ("function" != typeof b || "function" != typeof c)
                throw TypeError("Not a function");
              b(a);
            });
      }),
      k(j, "reject", function (a) {
        return new this(function (b, c) {
          if ("function" != typeof b || "function" != typeof c)
            throw TypeError("Not a function");
          c(a);
        });
      }),
      k(j, "all", function (a) {
        var b = this;
        return "[object Array]" != n.call(a)
          ? b.reject(TypeError("Not an array"))
          : 0 === a.length
          ? b.resolve([])
          : new b(function (c, d) {
              if ("function" != typeof c || "function" != typeof d)
                throw TypeError("Not a function");
              var e = a.length,
                f = Array(e),
                h = 0;
              g(
                b,
                a,
                function (a, b) {
                  (f[a] = b), ++h === e && c(f);
                },
                d
              );
            });
      }),
      k(j, "race", function (a) {
        var b = this;
        return "[object Array]" != n.call(a)
          ? b.reject(TypeError("Not an array"))
          : new b(function (c, d) {
              if ("function" != typeof c || "function" != typeof d)
                throw TypeError("Not a function");
              g(
                b,
                a,
                function (a, b) {
                  c(b);
                },
                d
              );
            });
      }),
      j
    );
  }),
  (function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = a.document
          ? b(a, !0)
          : function (a) {
              if (!a.document)
                throw new Error("jQuery requires a window with a document");
              return b(a);
            })
      : b(a);
  })("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
      var b = !!a && "length" in a && a.length,
        c = fa.type(a);
      return (
        "function" !== c &&
        !fa.isWindow(a) &&
        ("array" === c ||
          0 === b ||
          ("number" == typeof b && b > 0 && b - 1 in a))
      );
    }

    function d(a, b, c) {
      if (fa.isFunction(b))
        return fa.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        });
      if (b.nodeType)
        return fa.grep(a, function (a) {
          return (a === b) !== c;
        });
      if ("string" == typeof b) {
        if (pa.test(b)) return fa.filter(b, a, c);
        b = fa.filter(b, a);
      }
      return fa.grep(a, function (a) {
        return _.call(b, a) > -1 !== c;
      });
    }

    function e(a, b) {
      for (; (a = a[b]) && 1 !== a.nodeType; );
      return a;
    }

    function f(a) {
      var b = {};
      return (
        fa.each(a.match(va) || [], function (a, c) {
          b[c] = !0;
        }),
        b
      );
    }

    function g() {
      X.removeEventListener("DOMContentLoaded", g),
        a.removeEventListener("load", g),
        fa.ready();
    }

    function h() {
      this.expando = fa.expando + h.uid++;
    }

    function i(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (
          ((d = "data-" + b.replace(Ca, "-$&").toLowerCase()),
          (c = a.getAttribute(d)),
          "string" == typeof c)
        ) {
          try {
            c =
              "true" === c ||
              ("false" !== c &&
                ("null" === c
                  ? null
                  : +c + "" === c
                  ? +c
                  : Ba.test(c)
                  ? fa.parseJSON(c)
                  : c));
          } catch (e) {}
          Aa.set(a, b, c);
        } else c = void 0;
      return c;
    }

    function j(a, b, c, d) {
      var e,
        f = 1,
        g = 20,
        h = d
          ? function () {
              return d.cur();
            }
          : function () {
              return fa.css(a, b, "");
            },
        i = h(),
        j = (c && c[3]) || (fa.cssNumber[b] ? "" : "px"),
        k = (fa.cssNumber[b] || ("px" !== j && +i)) && Ea.exec(fa.css(a, b));
      if (k && k[3] !== j) {
        (j = j || k[3]), (c = c || []), (k = +i || 1);
        do (f = f || ".5"), (k /= f), fa.style(a, b, k + j);
        while (f !== (f = h() / i) && 1 !== f && --g);
      }
      return (
        c &&
          ((k = +k || +i || 0),
          (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
          d && ((d.unit = j), (d.start = k), (d.end = e))),
        e
      );
    }

    function k(a, b) {
      var c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : [];
      return void 0 === b || (b && fa.nodeName(a, b)) ? fa.merge([a], c) : c;
    }

    function l(a, b) {
      for (var c = 0, d = a.length; c < d; c++)
        za.set(a[c], "globalEval", !b || za.get(b[c], "globalEval"));
    }

    function m(a, b, c, d, e) {
      for (
        var f,
          g,
          h,
          i,
          j,
          m,
          n = b.createDocumentFragment(),
          o = [],
          p = 0,
          q = a.length;
        p < q;
        p++
      )
        if (((f = a[p]), f || 0 === f))
          if ("object" === fa.type(f)) fa.merge(o, f.nodeType ? [f] : f);
          else if (La.test(f)) {
            for (
              g = g || n.appendChild(b.createElement("div")),
                h = (Ia.exec(f) || ["", ""])[1].toLowerCase(),
                i = Ka[h] || Ka._default,
                g.innerHTML = i[1] + fa.htmlPrefilter(f) + i[2],
                m = i[0];
              m--;

            )
              g = g.lastChild;
            fa.merge(o, g.childNodes), (g = n.firstChild), (g.textContent = "");
          } else o.push(b.createTextNode(f));
      for (n.textContent = "", p = 0; (f = o[p++]); )
        if (d && fa.inArray(f, d) > -1) e && e.push(f);
        else if (
          ((j = fa.contains(f.ownerDocument, f)),
          (g = k(n.appendChild(f), "script")),
          j && l(g),
          c)
        )
          for (m = 0; (f = g[m++]); ) Ja.test(f.type || "") && c.push(f);
      return n;
    }

    function n() {
      return !0;
    }

    function o() {
      return !1;
    }

    function p() {
      try {
        return X.activeElement;
      } catch (a) {}
    }

    function q(a, b, c, d, e, f) {
      var g, h;
      if ("object" == typeof b) {
        "string" != typeof c && ((d = d || c), (c = void 0));
        for (h in b) q(a, h, c, d, b[h], f);
        return a;
      }
      if (
        (null == d && null == e
          ? ((e = c), (d = c = void 0))
          : null == e &&
            ("string" == typeof c
              ? ((e = d), (d = void 0))
              : ((e = d), (d = c), (c = void 0))),
        e === !1)
      )
        e = o;
      else if (!e) return a;
      return (
        1 === f &&
          ((g = e),
          (e = function (a) {
            return fa().off(a), g.apply(this, arguments);
          }),
          (e.guid = g.guid || (g.guid = fa.guid++))),
        a.each(function () {
          fa.event.add(this, b, e, d, c);
        })
      );
    }

    function r(a, b) {
      return fa.nodeName(a, "table") &&
        fa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
        ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody"))
        : a;
    }

    function s(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }

    function t(a) {
      var b = Sa.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }

    function u(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (
          za.hasData(a) &&
          ((f = za.access(a)), (g = za.set(b, f)), (j = f.events))
        ) {
          delete g.handle, (g.events = {});
          for (e in j)
            for (c = 0, d = j[e].length; c < d; c++)
              fa.event.add(b, e, j[e][c]);
        }
        Aa.hasData(a) &&
          ((h = Aa.access(a)), (i = fa.extend({}, h)), Aa.set(b, i));
      }
    }

    function v(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && Ha.test(a.type)
        ? (b.checked = a.checked)
        : ("input" !== c && "textarea" !== c) ||
          (b.defaultValue = a.defaultValue);
    }

    function w(a, b, c, d) {
      b = Z.apply([], b);
      var e,
        f,
        g,
        h,
        i,
        j,
        l = 0,
        n = a.length,
        o = n - 1,
        p = b[0],
        q = fa.isFunction(p);
      if (q || (n > 1 && "string" == typeof p && !da.checkClone && Ra.test(p)))
        return a.each(function (e) {
          var f = a.eq(e);
          q && (b[0] = p.call(this, e, f.html())), w(f, b, c, d);
        });
      if (
        n &&
        ((e = m(b, a[0].ownerDocument, !1, a, d)),
        (f = e.firstChild),
        1 === e.childNodes.length && (e = f),
        f || d)
      ) {
        for (g = fa.map(k(e, "script"), s), h = g.length; l < n; l++)
          (i = e),
            l !== o &&
              ((i = fa.clone(i, !0, !0)), h && fa.merge(g, k(i, "script"))),
            c.call(a[l], i, l);
        if (h)
          for (
            j = g[g.length - 1].ownerDocument, fa.map(g, t), l = 0;
            l < h;
            l++
          )
            (i = g[l]),
              Ja.test(i.type || "") &&
                !za.access(i, "globalEval") &&
                fa.contains(j, i) &&
                (i.src
                  ? fa._evalUrl && fa._evalUrl(i.src)
                  : fa.globalEval(i.textContent.replace(Ta, "")));
      }
      return a;
    }

    function x(a, b, c) {
      for (var d, e = b ? fa.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
        c || 1 !== d.nodeType || fa.cleanData(k(d)),
          d.parentNode &&
            (c && fa.contains(d.ownerDocument, d) && l(k(d, "script")),
            d.parentNode.removeChild(d));
      return a;
    }

    function y(a, b) {
      var c = fa(b.createElement(a)).appendTo(b.body),
        d = fa.css(c[0], "display");
      return c.detach(), d;
    }

    function z(a) {
      var b = X,
        c = Va[a];
      return (
        c ||
          ((c = y(a, b)),
          ("none" !== c && c) ||
            ((Ua = (
              Ua || fa("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(b.documentElement)),
            (b = Ua[0].contentDocument),
            b.write(),
            b.close(),
            (c = y(a, b)),
            Ua.detach()),
          (Va[a] = c)),
        c
      );
    }

    function A(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.style;
      return (
        (c = c || Ya(a)),
        (g = c ? c.getPropertyValue(b) || c[b] : void 0),
        ("" !== g && void 0 !== g) ||
          fa.contains(a.ownerDocument, a) ||
          (g = fa.style(a, b)),
        c &&
          !da.pixelMarginRight() &&
          Xa.test(g) &&
          Wa.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f)),
        void 0 !== g ? g + "" : g
      );
    }

    function B(a, b) {
      return {
        get: function () {
          return a()
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
        },
      };
    }

    function C(a) {
      if (a in db) return a;
      for (var b = a[0].toUpperCase() + a.slice(1), c = cb.length; c--; )
        if (((a = cb[c] + b), a in db)) return a;
    }

    function D(a, b, c) {
      var d = Ea.exec(b);
      return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }

    function E(a, b, c, d, e) {
      for (
        var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
          g = 0;
        f < 4;
        f += 2
      )
        "margin" === c && (g += fa.css(a, c + Fa[f], !0, e)),
          d
            ? ("content" === c && (g -= fa.css(a, "padding" + Fa[f], !0, e)),
              "margin" !== c &&
                (g -= fa.css(a, "border" + Fa[f] + "Width", !0, e)))
            : ((g += fa.css(a, "padding" + Fa[f], !0, e)),
              "padding" !== c &&
                (g += fa.css(a, "border" + Fa[f] + "Width", !0, e)));
      return g;
    }

    function F(a, b, c) {
      var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ya(a),
        g = "border-box" === fa.css(a, "boxSizing", !1, f);
      if (e <= 0 || null == e) {
        if (
          ((e = A(a, b, f)),
          (e < 0 || null == e) && (e = a.style[b]),
          Xa.test(e))
        )
          return e;
        (d = g && (da.boxSizingReliable() || e === a.style[b])),
          (e = parseFloat(e) || 0);
      }
      return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }

    function G(a, b) {
      for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++)
        (d = a[g]),
          d.style &&
            ((f[g] = za.get(d, "olddisplay")),
            (c = d.style.display),
            b
              ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display &&
                  Ga(d) &&
                  (f[g] = za.access(d, "olddisplay", z(d.nodeName))))
              : ((e = Ga(d)),
                ("none" === c && e) ||
                  za.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
      for (g = 0; g < h; g++)
        (d = a[g]),
          d.style &&
            ((b && "none" !== d.style.display && "" !== d.style.display) ||
              (d.style.display = b ? f[g] || "" : "none"));
      return a;
    }

    function H(a, b, c, d, e) {
      return new H.prototype.init(a, b, c, d, e);
    }

    function I() {
      return (
        a.setTimeout(function () {
          eb = void 0;
        }),
        (eb = fa.now())
      );
    }

    function J(a, b) {
      var c,
        d = 0,
        e = {
          height: a,
        };
      for (b = b ? 1 : 0; d < 4; d += 2 - b)
        (c = Fa[d]), (e["margin" + c] = e["padding" + c] = a);
      return b && (e.opacity = e.width = a), e;
    }

    function K(a, b, c) {
      for (
        var d,
          e = (N.tweeners[b] || []).concat(N.tweeners["*"]),
          f = 0,
          g = e.length;
        f < g;
        f++
      )
        if ((d = e[f].call(c, b, a))) return d;
    }

    function L(a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        n = a.style,
        o = a.nodeType && Ga(a),
        p = za.get(a, "fxshow");
      c.queue ||
        ((h = fa._queueHooks(a, "fx")),
        null == h.unqueued &&
          ((h.unqueued = 0),
          (i = h.empty.fire),
          (h.empty.fire = function () {
            h.unqueued || i();
          })),
        h.unqueued++,
        l.always(function () {
          l.always(function () {
            h.unqueued--, fa.queue(a, "fx").length || h.empty.fire();
          });
        })),
        1 === a.nodeType &&
          ("height" in b || "width" in b) &&
          ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
          (j = fa.css(a, "display")),
          (k = "none" === j ? za.get(a, "olddisplay") || z(a.nodeName) : j),
          "inline" === k &&
            "none" === fa.css(a, "float") &&
            (n.display = "inline-block")),
        c.overflow &&
          ((n.overflow = "hidden"),
          l.always(function () {
            (n.overflow = c.overflow[0]),
              (n.overflowX = c.overflow[1]),
              (n.overflowY = c.overflow[2]);
          }));
      for (d in b)
        if (((e = b[d]), gb.exec(e))) {
          if (
            (delete b[d],
            (f = f || "toggle" === e),
            e === (o ? "hide" : "show"))
          ) {
            if ("show" !== e || !p || void 0 === p[d]) continue;
            o = !0;
          }
          m[d] = (p && p[d]) || fa.style(a, d);
        } else j = void 0;
      if (fa.isEmptyObject(m))
        "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
      else {
        p ? "hidden" in p && (o = p.hidden) : (p = za.access(a, "fxshow", {})),
          f && (p.hidden = !o),
          o
            ? fa(a).show()
            : l.done(function () {
                fa(a).hide();
              }),
          l.done(function () {
            var b;
            za.remove(a, "fxshow");
            for (b in m) fa.style(a, b, m[b]);
          });
        for (d in m)
          (g = K(o ? p[d] : 0, d, l)),
            d in p ||
              ((p[d] = g.start),
              o &&
                ((g.end = g.start),
                (g.start = "width" === d || "height" === d ? 1 : 0)));
      }
    }

    function M(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (
          ((d = fa.camelCase(c)),
          (e = b[d]),
          (f = a[c]),
          fa.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
          c !== d && ((a[d] = f), delete a[c]),
          (g = fa.cssHooks[d]),
          g && "expand" in g)
        ) {
          (f = g.expand(f)), delete a[d];
          for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
        } else b[d] = e;
    }

    function N(a, b, c) {
      var d,
        e,
        f = 0,
        g = N.prefilters.length,
        h = fa.Deferred().always(function () {
          delete i.elem;
        }),
        i = function () {
          if (e) return !1;
          for (
            var b = eb || I(),
              c = Math.max(0, j.startTime + j.duration - b),
              d = c / j.duration || 0,
              f = 1 - d,
              g = 0,
              i = j.tweens.length;
            g < i;
            g++
          )
            j.tweens[g].run(f);
          return (
            h.notifyWith(a, [j, f, c]),
            f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
          );
        },
        j = h.promise({
          elem: a,
          props: fa.extend({}, b),
          opts: fa.extend(
            !0,
            {
              specialEasing: {},
              easing: fa.easing._default,
            },
            c
          ),
          originalProperties: b,
          originalOptions: c,
          startTime: eb || I(),
          duration: c.duration,
          tweens: [],
          createTween: function (b, c) {
            var d = fa.Tween(
              a,
              j.opts,
              b,
              c,
              j.opts.specialEasing[b] || j.opts.easing
            );
            return j.tweens.push(d), d;
          },
          stop: function (b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; c < d; c++) j.tweens[c].run(1);
            return (
              b
                ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
                : h.rejectWith(a, [j, b]),
              this
            );
          },
        }),
        k = j.props;
      for (M(k, j.opts.specialEasing); f < g; f++)
        if ((d = N.prefilters[f].call(j, a, k, j.opts)))
          return (
            fa.isFunction(d.stop) &&
              (fa._queueHooks(j.elem, j.opts.queue).stop = fa.proxy(d.stop, d)),
            d
          );
      return (
        fa.map(k, K, j),
        fa.isFunction(j.opts.start) && j.opts.start.call(a, j),
        fa.fx.timer(
          fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue,
          })
        ),
        j
          .progress(j.opts.progress)
          .done(j.opts.done, j.opts.complete)
          .fail(j.opts.fail)
          .always(j.opts.always)
      );
    }

    function O(a) {
      return (a.getAttribute && a.getAttribute("class")) || "";
    }

    function P(a) {
      return function (b, c) {
        "string" != typeof b && ((c = b), (b = "*"));
        var d,
          e = 0,
          f = b.toLowerCase().match(va) || [];
        if (fa.isFunction(c))
          for (; (d = f[e++]); )
            "+" === d[0]
              ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
              : (a[d] = a[d] || []).push(c);
      };
    }

    function Q(a, b, c, d) {
      function e(h) {
        var i;
        return (
          (f[h] = !0),
          fa.each(a[h] || [], function (a, h) {
            var j = h(b, c, d);
            return "string" != typeof j || g || f[j]
              ? g
                ? !(i = j)
                : void 0
              : (b.dataTypes.unshift(j), e(j), !1);
          }),
          i
        );
      }
      var f = {},
        g = a === Ab;
      return e(b.dataTypes[0]) || (!f["*"] && e("*"));
    }

    function R(a, b) {
      var c,
        d,
        e = fa.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && fa.extend(!0, a, d), a;
    }

    function S(a, b, c) {
      for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
        i.shift(),
          void 0 === d &&
            (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break;
          }
          g || (g = e);
        }
        f = f || g;
      }
      if (f) return f !== i[0] && i.unshift(f), c[f];
    }

    function T(a, b, c, d) {
      var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f; )
        if (
          (a.responseFields[f] && (c[a.responseFields[f]] = b),
          !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
          (i = f),
          (f = k.shift()))
        )
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
            if (((g = j[i + " " + f] || j["* " + f]), !g))
              for (e in j)
                if (
                  ((h = e.split(" ")),
                  h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                ) {
                  g === !0
                    ? (g = j[e])
                    : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                  break;
                }
            if (g !== !0)
              if (g && a["throws"]) b = g(b);
              else
                try {
                  b = g(b);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f,
                  };
                }
          }
      return {
        state: "success",
        data: b,
      };
    }

    function U(a, b, c, d) {
      var e;
      if (fa.isArray(b))
        fa.each(b, function (b, e) {
          c || Eb.test(a)
            ? d(a, e)
            : U(
                a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
                e,
                c,
                d
              );
        });
      else if (c || "object" !== fa.type(b)) d(a, b);
      else for (e in b) U(a + "[" + e + "]", b[e], c, d);
    }

    function V(a) {
      return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var W = [],
      X = a.document,
      Y = W.slice,
      Z = W.concat,
      $ = W.push,
      _ = W.indexOf,
      aa = {},
      ba = aa.toString,
      ca = aa.hasOwnProperty,
      da = {},
      ea = "2.2.4",
      fa = function (a, b) {
        return new fa.fn.init(a, b);
      },
      ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ha = /^-ms-/,
      ia = /-([\da-z])/gi,
      ja = function (a, b) {
        return b.toUpperCase();
      };
    (fa.fn = fa.prototype =
      {
        jquery: ea,
        constructor: fa,
        selector: "",
        length: 0,
        toArray: function () {
          return Y.call(this);
        },
        get: function (a) {
          return null != a
            ? a < 0
              ? this[a + this.length]
              : this[a]
            : Y.call(this);
        },
        pushStack: function (a) {
          var b = fa.merge(this.constructor(), a);
          return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a) {
          return fa.each(this, a);
        },
        map: function (a) {
          return this.pushStack(
            fa.map(this, function (b, c) {
              return a.call(b, c, b);
            })
          );
        },
        slice: function () {
          return this.pushStack(Y.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (a) {
          var b = this.length,
            c = +a + (a < 0 ? b : 0);
          return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: $,
        sort: W.sort,
        splice: W.splice,
      }),
      (fa.extend = fa.fn.extend =
        function () {
          var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
          for (
            "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
              "object" == typeof g || fa.isFunction(g) || (g = {}),
              h === i && ((g = this), h--);
            h < i;
            h++
          )
            if (null != (a = arguments[h]))
              for (b in a)
                (c = g[b]),
                  (d = a[b]),
                  g !== d &&
                    (j && d && (fa.isPlainObject(d) || (e = fa.isArray(d)))
                      ? (e
                          ? ((e = !1), (f = c && fa.isArray(c) ? c : []))
                          : (f = c && fa.isPlainObject(c) ? c : {}),
                        (g[b] = fa.extend(j, f, d)))
                      : void 0 !== d && (g[b] = d));
          return g;
        }),
      fa.extend({
        expando: "jQuery" + (ea + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
          throw new Error(a);
        },
        noop: function () {},
        isFunction: function (a) {
          return "function" === fa.type(a);
        },
        isArray: Array.isArray,
        isWindow: function (a) {
          return null != a && a === a.window;
        },
        isNumeric: function (a) {
          var b = a && a.toString();
          return !fa.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isPlainObject: function (a) {
          var b;
          if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a))
            return !1;
          if (
            a.constructor &&
            !ca.call(a, "constructor") &&
            !ca.call(a.constructor.prototype || {}, "isPrototypeOf")
          )
            return !1;
          for (b in a);
          return void 0 === b || ca.call(a, b);
        },
        isEmptyObject: function (a) {
          var b;
          for (b in a) return !1;
          return !0;
        },
        type: function (a) {
          return null == a
            ? a + ""
            : "object" == typeof a || "function" == typeof a
            ? aa[ba.call(a)] || "object"
            : typeof a;
        },
        globalEval: function (a) {
          var b,
            c = eval;
          (a = fa.trim(a)),
            a &&
              (1 === a.indexOf("use strict")
                ? ((b = X.createElement("script")),
                  (b.text = a),
                  X.head.appendChild(b).parentNode.removeChild(b))
                : c(a));
        },
        camelCase: function (a) {
          return a.replace(ha, "ms-").replace(ia, ja);
        },
        nodeName: function (a, b) {
          return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b) {
          var d,
            e = 0;
          if (c(a))
            for (d = a.length; e < d && b.call(a[e], e, a[e]) !== !1; e++);
          else for (e in a) if (b.call(a[e], e, a[e]) === !1) break;
          return a;
        },
        trim: function (a) {
          return null == a ? "" : (a + "").replace(ga, "");
        },
        makeArray: function (a, b) {
          var d = b || [];
          return (
            null != a &&
              (c(Object(a))
                ? fa.merge(d, "string" == typeof a ? [a] : a)
                : $.call(d, a)),
            d
          );
        },
        inArray: function (a, b, c) {
          return null == b ? -1 : _.call(b, a, c);
        },
        merge: function (a, b) {
          for (var c = +b.length, d = 0, e = a.length; d < c; d++)
            a[e++] = b[d];
          return (a.length = e), a;
        },
        grep: function (a, b, c) {
          for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
            (d = !b(a[f], f)), d !== h && e.push(a[f]);
          return e;
        },
        map: function (a, b, d) {
          var e,
            f,
            g = 0,
            h = [];
          if (c(a))
            for (e = a.length; g < e; g++)
              (f = b(a[g], g, d)), null != f && h.push(f);
          else for (g in a) (f = b(a[g], g, d)), null != f && h.push(f);
          return Z.apply([], h);
        },
        guid: 1,
        proxy: function (a, b) {
          var c, d, e;
          if (
            ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
            fa.isFunction(a))
          )
            return (
              (d = Y.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, d.concat(Y.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || fa.guid++),
              e
            );
        },
        now: Date.now,
        support: da,
      }),
      "function" == typeof Symbol &&
        (fa.fn[Symbol.iterator] = W[Symbol.iterator]),
      fa.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (a, b) {
          aa["[object " + b + "]"] = b.toLowerCase();
        }
      );
    var ka = (function (a) {
      function b(a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          l,
          n,
          o = b && b.ownerDocument,
          p = b ? b.nodeType : 9;
        if (
          ((c = c || []),
          "string" != typeof a || !a || (1 !== p && 9 !== p && 11 !== p))
        )
          return c;
        if (
          !d &&
          ((b ? b.ownerDocument || b : O) !== G && F(b), (b = b || G), I)
        ) {
          if (11 !== p && (j = ra.exec(a)))
            if ((e = j[1])) {
              if (9 === p) {
                if (!(g = b.getElementById(e))) return c;
                if (g.id === e) return c.push(g), c;
              } else if (
                o &&
                (g = o.getElementById(e)) &&
                M(b, g) &&
                g.id === e
              )
                return c.push(g), c;
            } else {
              if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
              if (
                (e = j[3]) &&
                v.getElementsByClassName &&
                b.getElementsByClassName
              )
                return $.apply(c, b.getElementsByClassName(e)), c;
            }
          if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
            if (1 !== p) (o = b), (n = a);
            else if ("object" !== b.nodeName.toLowerCase()) {
              for (
                (h = b.getAttribute("id"))
                  ? (h = h.replace(ta, "\\$&"))
                  : b.setAttribute("id", (h = N)),
                  l = z(a),
                  f = l.length,
                  i = ma.test(h) ? "#" + h : "[id='" + h + "']";
                f--;

              )
                l[f] = i + " " + m(l[f]);
              (n = l.join(",")), (o = (sa.test(a) && k(b.parentNode)) || b);
            }
            if (n)
              try {
                return $.apply(c, o.querySelectorAll(n)), c;
              } catch (q) {
              } finally {
                h === N && b.removeAttribute("id");
              }
          }
        }
        return B(a.replace(ha, "$1"), b, c, d);
      }

      function c() {
        function a(c, d) {
          return (
            b.push(c + " ") > w.cacheLength && delete a[b.shift()],
            (a[c + " "] = d)
          );
        }
        var b = [];
        return a;
      }

      function d(a) {
        return (a[N] = !0), a;
      }

      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), (b = null);
        }
      }

      function f(a, b) {
        for (var c = a.split("|"), d = c.length; d--; ) w.attrHandle[c[d]] = b;
      }

      function g(a, b) {
        var c = b && a,
          d =
            c &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            (~b.sourceIndex || V) - (~a.sourceIndex || V);
        if (d) return d;
        if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
        return a ? 1 : -1;
      }

      function h(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }

      function i(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }

      function j(a) {
        return d(function (b) {
          return (
            (b = +b),
            d(function (c, d) {
              for (var e, f = a([], c.length, b), g = f.length; g--; )
                c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }

      function k(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a;
      }

      function l() {}

      function m(a) {
        for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
        return d;
      }

      function n(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = Q++;
        return b.first
          ? function (b, c, f) {
              for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
            }
          : function (b, c, g) {
              var h,
                i,
                j,
                k = [P, f];
              if (g) {
                for (; (b = b[d]); )
                  if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
              } else
                for (; (b = b[d]); )
                  if (1 === b.nodeType || e) {
                    if (
                      ((j = b[N] || (b[N] = {})),
                      (i = j[b.uniqueID] || (j[b.uniqueID] = {})),
                      (h = i[d]) && h[0] === P && h[1] === f)
                    )
                      return (k[2] = h[2]);
                    if (((i[d] = k), (k[2] = a(b, c, g)))) return !0;
                  }
            };
      }

      function o(a) {
        return a.length > 1
          ? function (b, c, d) {
              for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }

      function p(a, c, d) {
        for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
        return d;
      }

      function q(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
          (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
        return g;
      }

      function r(a, b, c, e, f, g) {
        return (
          e && !e[N] && (e = r(e)),
          f && !f[N] && (f = r(f, g)),
          d(function (d, g, h, i) {
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              r = d || p(b || "*", h.nodeType ? [h] : h, []),
              s = !a || (!d && b) ? r : q(r, m, a, h, i),
              t = c ? (f || (d ? a : o || e) ? [] : g) : s;
            if ((c && c(s, t, h, i), e))
              for (j = q(t, n), e(j, [], h, i), k = j.length; k--; )
                (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
            if (d) {
              if (f || a) {
                if (f) {
                  for (j = [], k = t.length; k--; )
                    (l = t[k]) && j.push((s[k] = l));
                  f(null, (t = []), j, i);
                }
                for (k = t.length; k--; )
                  (l = t[k]) &&
                    (j = f ? aa(d, l) : m[k]) > -1 &&
                    (d[j] = !(g[j] = l));
              }
            } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
          })
        );
      }

      function s(a) {
        for (
          var b,
            c,
            d,
            e = a.length,
            f = w.relative[a[0].type],
            g = f || w.relative[" "],
            h = f ? 1 : 0,
            i = n(
              function (a) {
                return a === b;
              },
              g,
              !0
            ),
            j = n(
              function (a) {
                return aa(b, a) > -1;
              },
              g,
              !0
            ),
            k = [
              function (a, c, d) {
                var e =
                  (!f && (d || c !== C)) ||
                  ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return (b = null), e;
              },
            ];
          h < e;
          h++
        )
          if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
          else {
            if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
              for (d = ++h; d < e && !w.relative[a[d].type]; d++);
              return r(
                h > 1 && o(k),
                h > 1 &&
                  m(
                    a.slice(0, h - 1).concat({
                      value: " " === a[h - 2].type ? "*" : "",
                    })
                  ).replace(ha, "$1"),
                c,
                h < d && s(a.slice(h, d)),
                d < e && s((a = a.slice(d))),
                d < e && m(a)
              );
            }
            k.push(c);
          }
        return o(k);
      }

      function t(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function (d, g, h, i, j) {
            var k,
              l,
              m,
              n = 0,
              o = "0",
              p = d && [],
              r = [],
              s = C,
              t = d || (f && w.find.TAG("*", j)),
              u = (P += null == s ? 1 : Math.random() || 0.1),
              v = t.length;
            for (
              j && (C = g === G || g || j);
              o !== v && null != (k = t[o]);
              o++
            ) {
              if (f && k) {
                for (
                  l = 0, g || k.ownerDocument === G || (F(k), (h = !I));
                  (m = a[l++]);

                )
                  if (m(k, g || G, h)) {
                    i.push(k);
                    break;
                  }
                j && (P = u);
              }
              e && ((k = !m && k) && n--, d && p.push(k));
            }
            if (((n += o), e && o !== n)) {
              for (l = 0; (m = c[l++]); ) m(p, r, g, h);
              if (d) {
                if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                r = q(r);
              }
              $.apply(i, r),
                j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
            }
            return j && ((P = u), (C = s)), p;
          };
        return e ? d(g) : g;
      }
      var u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = "sizzle" + 1 * new Date(),
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function (a, b) {
          return a === b && (E = !0), 0;
        },
        V = 1 << 31,
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function (a, b) {
          for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
          return -1;
        },
        ba =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ea =
          "\\[" +
          ca +
          "*(" +
          da +
          ")(?:" +
          ca +
          "*([*^$|!~]?=)" +
          ca +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          da +
          "))|)" +
          ca +
          "*\\]",
        fa =
          ":(" +
          da +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ea +
          ")*)|.*)\\)|)",
        ga = new RegExp(ca + "+", "g"),
        ha = new RegExp(
          "^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$",
          "g"
        ),
        ia = new RegExp("^" + ca + "*," + ca + "*"),
        ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        la = new RegExp(fa),
        ma = new RegExp("^" + da + "$"),
        na = {
          ID: new RegExp("^#(" + da + ")"),
          CLASS: new RegExp("^\\.(" + da + ")"),
          TAG: new RegExp("^(" + da + "|[*])"),
          ATTR: new RegExp("^" + ea),
          PSEUDO: new RegExp("^" + fa),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ca +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ca +
              "*(?:([+-]|)" +
              ca +
              "*(\\d+)|))" +
              ca +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ba + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ca +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ca +
              "*((?:-\\d)?\\d*)" +
              ca +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        oa = /^(?:input|select|textarea|button)$/i,
        pa = /^h\d$/i,
        qa = /^[^{]+\{\s*\[native \w/,
        ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        sa = /[+~]/,
        ta = /'|\\/g,
        ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        va = function (a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c
            ? b
            : d < 0
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
        },
        wa = function () {
          F();
        };
      try {
        $.apply((X = _.call(O.childNodes)), O.childNodes),
          X[O.childNodes.length].nodeType;
      } catch (xa) {
        $ = {
          apply: X.length
            ? function (a, b) {
                Z.apply(a, _.call(b));
              }
            : function (a, b) {
                for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                a.length = c - 1;
              },
        };
      }
      (v = b.support = {}),
        (y = b.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
          }),
        (F = b.setDocument =
          function (a) {
            var b,
              c,
              d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement
              ? ((G = d),
                (H = G.documentElement),
                (I = !y(G)),
                (c = G.defaultView) &&
                  c.top !== c &&
                  (c.addEventListener
                    ? c.addEventListener("unload", wa, !1)
                    : c.attachEvent && c.attachEvent("onunload", wa)),
                (v.attributes = e(function (a) {
                  return (a.className = "i"), !a.getAttribute("className");
                })),
                (v.getElementsByTagName = e(function (a) {
                  return (
                    a.appendChild(G.createComment("")),
                    !a.getElementsByTagName("*").length
                  );
                })),
                (v.getElementsByClassName = qa.test(G.getElementsByClassName)),
                (v.getById = e(function (a) {
                  return (
                    (H.appendChild(a).id = N),
                    !G.getElementsByName || !G.getElementsByName(N).length
                  );
                })),
                v.getById
                  ? ((w.find.ID = function (a, b) {
                      if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c ? [c] : [];
                      }
                    }),
                    (w.filter.ID = function (a) {
                      var b = a.replace(ua, va);
                      return function (a) {
                        return a.getAttribute("id") === b;
                      };
                    }))
                  : (delete w.find.ID,
                    (w.filter.ID = function (a) {
                      var b = a.replace(ua, va);
                      return function (a) {
                        var c =
                          "undefined" != typeof a.getAttributeNode &&
                          a.getAttributeNode("id");
                        return c && c.value === b;
                      };
                    })),
                (w.find.TAG = v.getElementsByTagName
                  ? function (a, b) {
                      return "undefined" != typeof b.getElementsByTagName
                        ? b.getElementsByTagName(a)
                        : v.qsa
                        ? b.querySelectorAll(a)
                        : void 0;
                    }
                  : function (a, b) {
                      var c,
                        d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                      if ("*" === a) {
                        for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                        return d;
                      }
                      return f;
                    }),
                (w.find.CLASS =
                  v.getElementsByClassName &&
                  function (a, b) {
                    if ("undefined" != typeof b.getElementsByClassName && I)
                      return b.getElementsByClassName(a);
                  }),
                (K = []),
                (J = []),
                (v.qsa = qa.test(G.querySelectorAll)) &&
                  (e(function (a) {
                    (H.appendChild(a).innerHTML =
                      "<a id='" +
                      N +
                      "'></a><select id='" +
                      N +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      a.querySelectorAll("[msallowcapture^='']").length &&
                        J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                      a.querySelectorAll("[selected]").length ||
                        J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                      a.querySelectorAll("[id~=" + N + "-]").length ||
                        J.push("~="),
                      a.querySelectorAll(":checked").length ||
                        J.push(":checked"),
                      a.querySelectorAll("a#" + N + "+*").length ||
                        J.push(".#.+[+~]");
                  }),
                  e(function (a) {
                    var b = G.createElement("input");
                    b.setAttribute("type", "hidden"),
                      a.appendChild(b).setAttribute("name", "D"),
                      a.querySelectorAll("[name=d]").length &&
                        J.push("name" + ca + "*[*^$|!~]?="),
                      a.querySelectorAll(":enabled").length ||
                        J.push(":enabled", ":disabled"),
                      a.querySelectorAll("*,:x"),
                      J.push(",.*:");
                  })),
                (v.matchesSelector = qa.test(
                  (L =
                    H.matches ||
                    H.webkitMatchesSelector ||
                    H.mozMatchesSelector ||
                    H.oMatchesSelector ||
                    H.msMatchesSelector)
                )) &&
                  e(function (a) {
                    (v.disconnectedMatch = L.call(a, "div")),
                      L.call(a, "[s!='']:x"),
                      K.push("!=", fa);
                  }),
                (J = J.length && new RegExp(J.join("|"))),
                (K = K.length && new RegExp(K.join("|"))),
                (b = qa.test(H.compareDocumentPosition)),
                (M =
                  b || qa.test(H.contains)
                    ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                          d = b && b.parentNode;
                        return (
                          a === d ||
                          !(
                            !d ||
                            1 !== d.nodeType ||
                            !(c.contains
                              ? c.contains(d)
                              : a.compareDocumentPosition &&
                                16 & a.compareDocumentPosition(d))
                          )
                        );
                      }
                    : function (a, b) {
                        if (b)
                          for (; (b = b.parentNode); ) if (b === a) return !0;
                        return !1;
                      }),
                (U = b
                  ? function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var c =
                        !a.compareDocumentPosition - !b.compareDocumentPosition;
                      return c
                        ? c
                        : ((c =
                            (a.ownerDocument || a) === (b.ownerDocument || b)
                              ? a.compareDocumentPosition(b)
                              : 1),
                          1 & c ||
                          (!v.sortDetached &&
                            b.compareDocumentPosition(a) === c)
                            ? a === G || (a.ownerDocument === O && M(O, a))
                              ? -1
                              : b === G || (b.ownerDocument === O && M(O, b))
                              ? 1
                              : D
                              ? aa(D, a) - aa(D, b)
                              : 0
                            : 4 & c
                            ? -1
                            : 1);
                    }
                  : function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var c,
                        d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                      if (!e || !f)
                        return a === G
                          ? -1
                          : b === G
                          ? 1
                          : e
                          ? -1
                          : f
                          ? 1
                          : D
                          ? aa(D, a) - aa(D, b)
                          : 0;
                      if (e === f) return g(a, b);
                      for (c = a; (c = c.parentNode); ) h.unshift(c);
                      for (c = b; (c = c.parentNode); ) i.unshift(c);
                      for (; h[d] === i[d]; ) d++;
                      return d
                        ? g(h[d], i[d])
                        : h[d] === O
                        ? -1
                        : i[d] === O
                        ? 1
                        : 0;
                    }),
                G)
              : G;
          }),
        (b.matches = function (a, c) {
          return b(a, null, null, c);
        }),
        (b.matchesSelector = function (a, c) {
          if (
            ((a.ownerDocument || a) !== G && F(a),
            (c = c.replace(ka, "='$1']")),
            v.matchesSelector &&
              I &&
              !T[c + " "] &&
              (!K || !K.test(c)) &&
              (!J || !J.test(c)))
          )
            try {
              var d = L.call(a, c);
              if (
                d ||
                v.disconnectedMatch ||
                (a.document && 11 !== a.document.nodeType)
              )
                return d;
            } catch (e) {}
          return b(c, G, null, [a]).length > 0;
        }),
        (b.contains = function (a, b) {
          return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }),
        (b.attr = function (a, b) {
          (a.ownerDocument || a) !== G && F(a);
          var c = w.attrHandle[b.toLowerCase()],
            d =
              c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
          return void 0 !== d
            ? d
            : v.attributes || !I
            ? a.getAttribute(b)
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
        (b.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (b.uniqueSort = function (a) {
          var b,
            c = [],
            d = 0,
            e = 0;
          if (
            ((E = !v.detectDuplicates),
            (D = !v.sortStable && a.slice(0)),
            a.sort(U),
            E)
          ) {
            for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
            for (; d--; ) a.splice(c[d], 1);
          }
          return (D = null), a;
        }),
        (x = b.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              e = a.nodeType;
            if (e) {
              if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
              } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (; (b = a[d++]); ) c += x(b);
            return c;
          }),
        (w = b.selectors =
          {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0,
              },
              " ": {
                dir: "parentNode",
              },
              "+": {
                dir: "previousSibling",
                first: !0,
              },
              "~": {
                dir: "previousSibling",
              },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(ua, va)),
                  (a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va)),
                  "~=" === a[2] && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  "nth" === a[1].slice(0, 3)
                    ? (a[3] || b.error(a[0]),
                      (a[4] = +(a[4]
                        ? a[5] + (a[6] || 1)
                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                    : a[3] && b.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b,
                  c = !a[6] && a[2];
                return na.CHILD.test(a[0])
                  ? null
                  : (a[3]
                      ? (a[2] = a[4] || a[5] || "")
                      : c &&
                        la.test(c) &&
                        (b = z(c, !0)) &&
                        (b = c.indexOf(")", c.length - b) - c.length) &&
                        ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                    a.slice(0, 3));
              },
            },
            filter: {
              TAG: function (a) {
                var b = a.replace(ua, va).toLowerCase();
                return "*" === a
                  ? function () {
                      return !0;
                    }
                  : function (a) {
                      return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
              },
              CLASS: function (a) {
                var b = R[a + " "];
                return (
                  b ||
                  ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                    R(a, function (a) {
                      return b.test(
                        ("string" == typeof a.className && a.className) ||
                          ("undefined" != typeof a.getAttribute &&
                            a.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (a, c, d) {
                return function (e) {
                  var f = b.attr(e, a);
                  return null == f
                    ? "!=" === c
                    : !c ||
                        ((f += ""),
                        "=" === c
                          ? f === d
                          : "!=" === c
                          ? f !== d
                          : "^=" === c
                          ? d && 0 === f.indexOf(d)
                          : "*=" === c
                          ? d && f.indexOf(d) > -1
                          : "$=" === c
                          ? d && f.slice(-d.length) === d
                          : "~=" === c
                          ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1
                          : "|=" === c &&
                            (f === d || f.slice(0, d.length + 1) === d + "-"));
                };
              },
              CHILD: function (a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                  g = "last" !== a.slice(-4),
                  h = "of-type" === b;
                return 1 === d && 0 === e
                  ? function (a) {
                      return !!a.parentNode;
                    }
                  : function (b, c, i) {
                      var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                      if (q) {
                        if (f) {
                          for (; p; ) {
                            for (m = b; (m = m[p]); )
                              if (
                                h
                                  ? m.nodeName.toLowerCase() === r
                                  : 1 === m.nodeType
                              )
                                return !1;
                            o = p = "only" === a && !o && "nextSibling";
                          }
                          return !0;
                        }
                        if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                          for (
                            m = q,
                              l = m[N] || (m[N] = {}),
                              k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                              j = k[a] || [],
                              n = j[0] === P && j[1],
                              t = n && j[2],
                              m = n && q.childNodes[n];
                            (m = (++n && m && m[p]) || (t = n = 0) || o.pop());

                          )
                            if (1 === m.nodeType && ++t && m === b) {
                              k[a] = [P, n, t];
                              break;
                            }
                        } else if (
                          (s &&
                            ((m = b),
                            (l = m[N] || (m[N] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (j = k[a] || []),
                            (n = j[0] === P && j[1]),
                            (t = n)),
                          t === !1)
                        )
                          for (
                            ;
                            (m =
                              (++n && m && m[p]) || (t = n = 0) || o.pop()) &&
                            ((h
                              ? m.nodeName.toLowerCase() !== r
                              : 1 !== m.nodeType) ||
                              !++t ||
                              (s &&
                                ((l = m[N] || (m[N] = {})),
                                (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                                (k[a] = [P, t])),
                              m !== b));

                          );
                        return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                      }
                    };
              },
              PSEUDO: function (a, c) {
                var e,
                  f =
                    w.pseudos[a] ||
                    w.setFilters[a.toLowerCase()] ||
                    b.error("unsupported pseudo: " + a);
                return f[N]
                  ? f(c)
                  : f.length > 1
                  ? ((e = [a, a, "", c]),
                    w.setFilters.hasOwnProperty(a.toLowerCase())
                      ? d(function (a, b) {
                          for (var d, e = f(a, c), g = e.length; g--; )
                            (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                        })
                      : function (a) {
                          return f(a, 0, e);
                        })
                  : f;
              },
            },
            pseudos: {
              not: d(function (a) {
                var b = [],
                  c = [],
                  e = A(a.replace(ha, "$1"));
                return e[N]
                  ? d(function (a, b, c, d) {
                      for (var f, g = e(a, null, d, []), h = a.length; h--; )
                        (f = g[h]) && (a[h] = !(b[h] = f));
                    })
                  : function (a, d, f) {
                      return (
                        (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop()
                      );
                    };
              }),
              has: d(function (a) {
                return function (c) {
                  return b(a, c).length > 0;
                };
              }),
              contains: d(function (a) {
                return (
                  (a = a.replace(ua, va)),
                  function (b) {
                    return (
                      (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    );
                  }
                );
              }),
              lang: d(function (a) {
                return (
                  ma.test(a || "") || b.error("unsupported lang: " + a),
                  (a = a.replace(ua, va).toLowerCase()),
                  function (b) {
                    var c;
                    do
                      if (
                        (c = I
                          ? b.lang
                          : b.getAttribute("xml:lang") ||
                            b.getAttribute("lang"))
                      )
                        return (
                          (c = c.toLowerCase()),
                          c === a || 0 === c.indexOf(a + "-")
                        );
                    while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id;
              },
              root: function (a) {
                return a === H;
              },
              focus: function (a) {
                return (
                  a === G.activeElement &&
                  (!G.hasFocus || G.hasFocus()) &&
                  !!(a.type || a.href || ~a.tabIndex)
                );
              },
              enabled: function (a) {
                return a.disabled === !1;
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  ("input" === b && !!a.checked) ||
                  ("option" === b && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                  if (a.nodeType < 6) return !1;
                return !0;
              },
              parent: function (a) {
                return !w.pseudos.empty(a);
              },
              header: function (a) {
                return pa.test(a.nodeName);
              },
              input: function (a) {
                return oa.test(a.nodeName);
              },
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b && "button" === a.type) || "button" === b;
              },
              text: function (a) {
                var b;
                return (
                  "input" === a.nodeName.toLowerCase() &&
                  "text" === a.type &&
                  (null == (b = a.getAttribute("type")) ||
                    "text" === b.toLowerCase())
                );
              },
              first: j(function () {
                return [0];
              }),
              last: j(function (a, b) {
                return [b - 1];
              }),
              eq: j(function (a, b, c) {
                return [c < 0 ? c + b : c];
              }),
              even: j(function (a, b) {
                for (var c = 0; c < b; c += 2) a.push(c);
                return a;
              }),
              odd: j(function (a, b) {
                for (var c = 1; c < b; c += 2) a.push(c);
                return a;
              }),
              lt: j(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: j(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (w.pseudos.nth = w.pseudos.eq);
      for (u in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      })
        w.pseudos[u] = h(u);
      for (u in {
        submit: !0,
        reset: !0,
      })
        w.pseudos[u] = i(u);
      return (
        (l.prototype = w.filters = w.pseudos),
        (w.setFilters = new l()),
        (z = b.tokenize =
          function (a, c) {
            var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
              (d && !(e = ia.exec(h))) ||
                (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                (d = !1),
                (e = ja.exec(h)) &&
                  ((d = e.shift()),
                  f.push({
                    value: d,
                    type: e[0].replace(ha, " "),
                  }),
                  (h = h.slice(d.length)));
              for (g in w.filter)
                !(e = na[g].exec(h)) ||
                  (j[g] && !(e = j[g](e))) ||
                  ((d = e.shift()),
                  f.push({
                    value: d,
                    type: g,
                    matches: e,
                  }),
                  (h = h.slice(d.length)));
              if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
          }),
        (A = b.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = T[a + " "];
            if (!f) {
              for (b || (b = z(a)), c = b.length; c--; )
                (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
              (f = T(a, t(e, d))), (f.selector = a);
            }
            return f;
          }),
        (B = b.select =
          function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = "function" == typeof a && a,
              l = !d && z((a = j.selector || a));
            if (((c = c || []), 1 === l.length)) {
              if (
                ((f = l[0] = l[0].slice(0)),
                f.length > 2 &&
                  "ID" === (g = f[0]).type &&
                  v.getById &&
                  9 === b.nodeType &&
                  I &&
                  w.relative[f[1].type])
              ) {
                if (
                  ((b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0]),
                  !b)
                )
                  return c;
                j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
              }
              for (
                e = na.needsContext.test(a) ? 0 : f.length;
                e-- && ((g = f[e]), !w.relative[(h = g.type)]);

              )
                if (
                  (i = w.find[h]) &&
                  (d = i(
                    g.matches[0].replace(ua, va),
                    (sa.test(f[0].type) && k(b.parentNode)) || b
                  ))
                ) {
                  if ((f.splice(e, 1), (a = d.length && m(f)), !a))
                    return $.apply(c, d), c;
                  break;
                }
            }
            return (
              (j || A(a, l))(
                d,
                b,
                !I,
                c,
                !b || (sa.test(a) && k(b.parentNode)) || b
              ),
              c
            );
          }),
        (v.sortStable = N.split("").sort(U).join("") === N),
        (v.detectDuplicates = !!E),
        F(),
        (v.sortDetached = e(function (a) {
          return 1 & a.compareDocumentPosition(G.createElement("div"));
        })),
        e(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            "#" === a.firstChild.getAttribute("href")
          );
        }) ||
          f("type|href|height|width", function (a, b, c) {
            if (!c)
              return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
        (v.attributes &&
          e(function (a) {
            return (
              (a.innerHTML = "<input/>"),
              a.firstChild.setAttribute("value", ""),
              "" === a.firstChild.getAttribute("value")
            );
          })) ||
          f("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())
              return a.defaultValue;
          }),
        e(function (a) {
          return null == a.getAttribute("disabled");
        }) ||
          f(ba, function (a, b, c) {
            var d;
            if (!c)
              return a[b] === !0
                ? b.toLowerCase()
                : (d = a.getAttributeNode(b)) && d.specified
                ? d.value
                : null;
          }),
        b
      );
    })(a);
    (fa.find = ka),
      (fa.expr = ka.selectors),
      (fa.expr[":"] = fa.expr.pseudos),
      (fa.uniqueSort = fa.unique = ka.uniqueSort),
      (fa.text = ka.getText),
      (fa.isXMLDoc = ka.isXML),
      (fa.contains = ka.contains);
    var la = function (a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
          if (1 === a.nodeType) {
            if (e && fa(a).is(c)) break;
            d.push(a);
          }
        return d;
      },
      ma = function (a, b) {
        for (var c = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== b && c.push(a);
        return c;
      },
      na = fa.expr.match.needsContext,
      oa = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      pa = /^.[^:#\[\.,]*$/;
    (fa.filter = function (a, b, c) {
      var d = b[0];
      return (
        c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType
          ? fa.find.matchesSelector(d, a)
            ? [d]
            : []
          : fa.find.matches(
              a,
              fa.grep(b, function (a) {
                return 1 === a.nodeType;
              })
            )
      );
    }),
      fa.fn.extend({
        find: function (a) {
          var b,
            c = this.length,
            d = [],
            e = this;
          if ("string" != typeof a)
            return this.pushStack(
              fa(a).filter(function () {
                for (b = 0; b < c; b++) if (fa.contains(e[b], this)) return !0;
              })
            );
          for (b = 0; b < c; b++) fa.find(a, e[b], d);
          return (
            (d = this.pushStack(c > 1 ? fa.unique(d) : d)),
            (d.selector = this.selector ? this.selector + " " + a : a),
            d
          );
        },
        filter: function (a) {
          return this.pushStack(d(this, a || [], !1));
        },
        not: function (a) {
          return this.pushStack(d(this, a || [], !0));
        },
        is: function (a) {
          return !!d(
            this,
            "string" == typeof a && na.test(a) ? fa(a) : a || [],
            !1
          ).length;
        },
      });
    var qa,
      ra = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      sa = (fa.fn.init = function (a, b, c) {
        var d, e;
        if (!a) return this;
        if (((c = c || qa), "string" == typeof a)) {
          if (
            ((d =
              "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
                ? [null, a, null]
                : ra.exec(a)),
            !d || (!d[1] && b))
          )
            return !b || b.jquery
              ? (b || c).find(a)
              : this.constructor(b).find(a);
          if (d[1]) {
            if (
              ((b = b instanceof fa ? b[0] : b),
              fa.merge(
                this,
                fa.parseHTML(
                  d[1],
                  b && b.nodeType ? b.ownerDocument || b : X,
                  !0
                )
              ),
              oa.test(d[1]) && fa.isPlainObject(b))
            )
              for (d in b)
                fa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
            return this;
          }
          return (
            (e = X.getElementById(d[2])),
            e && e.parentNode && ((this.length = 1), (this[0] = e)),
            (this.context = X),
            (this.selector = a),
            this
          );
        }
        return a.nodeType
          ? ((this.context = this[0] = a), (this.length = 1), this)
          : fa.isFunction(a)
          ? void 0 !== c.ready
            ? c.ready(a)
            : a(fa)
          : (void 0 !== a.selector &&
              ((this.selector = a.selector), (this.context = a.context)),
            fa.makeArray(a, this));
      });
    (sa.prototype = fa.fn), (qa = fa(X));
    var ta = /^(?:parents|prev(?:Until|All))/,
      ua = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0,
      };
    fa.fn.extend({
      has: function (a) {
        var b = fa(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; a < c; a++) if (fa.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g =
              na.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0;
          d < e;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && fa.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? fa.uniqueSort(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? _.call(fa(a), this[0])
            : _.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(fa.uniqueSort(fa.merge(this.get(), fa(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    }),
      fa.each(
        {
          parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
          },
          parents: function (a) {
            return la(a, "parentNode");
          },
          parentsUntil: function (a, b, c) {
            return la(a, "parentNode", c);
          },
          next: function (a) {
            return e(a, "nextSibling");
          },
          prev: function (a) {
            return e(a, "previousSibling");
          },
          nextAll: function (a) {
            return la(a, "nextSibling");
          },
          prevAll: function (a) {
            return la(a, "previousSibling");
          },
          nextUntil: function (a, b, c) {
            return la(a, "nextSibling", c);
          },
          prevUntil: function (a, b, c) {
            return la(a, "previousSibling", c);
          },
          siblings: function (a) {
            return ma((a.parentNode || {}).firstChild, a);
          },
          children: function (a) {
            return ma(a.firstChild);
          },
          contents: function (a) {
            return a.contentDocument || fa.merge([], a.childNodes);
          },
        },
        function (a, b) {
          fa.fn[a] = function (c, d) {
            var e = fa.map(this, b, c);
            return (
              "Until" !== a.slice(-5) && (d = c),
              d && "string" == typeof d && (e = fa.filter(d, e)),
              this.length > 1 &&
                (ua[a] || fa.uniqueSort(e), ta.test(a) && e.reverse()),
              this.pushStack(e)
            );
          };
        }
      );
    var va = /\S+/g;
    (fa.Callbacks = function (a) {
      a = "string" == typeof a ? f(a) : fa.extend({}, a);
      var b,
        c,
        d,
        e,
        g = [],
        h = [],
        i = -1,
        j = function () {
          for (e = a.once, d = b = !0; h.length; i = -1)
            for (c = h.shift(); ++i < g.length; )
              g[i].apply(c[0], c[1]) === !1 &&
                a.stopOnFalse &&
                ((i = g.length), (c = !1));
          a.memory || (c = !1), (b = !1), e && (g = c ? [] : "");
        },
        k = {
          add: function () {
            return (
              g &&
                (c && !b && ((i = g.length - 1), h.push(c)),
                (function d(b) {
                  fa.each(b, function (b, c) {
                    fa.isFunction(c)
                      ? (a.unique && k.has(c)) || g.push(c)
                      : c && c.length && "string" !== fa.type(c) && d(c);
                  });
                })(arguments),
                c && !b && j()),
              this
            );
          },
          remove: function () {
            return (
              fa.each(arguments, function (a, b) {
                for (var c; (c = fa.inArray(b, g, c)) > -1; )
                  g.splice(c, 1), c <= i && i--;
              }),
              this
            );
          },
          has: function (a) {
            return a ? fa.inArray(a, g) > -1 : g.length > 0;
          },
          empty: function () {
            return g && (g = []), this;
          },
          disable: function () {
            return (e = h = []), (g = c = ""), this;
          },
          disabled: function () {
            return !g;
          },
          lock: function () {
            return (e = h = []), c || (g = c = ""), this;
          },
          locked: function () {
            return !!e;
          },
          fireWith: function (a, c) {
            return (
              e ||
                ((c = c || []),
                (c = [a, c.slice ? c.slice() : c]),
                h.push(c),
                b || j()),
              this
            );
          },
          fire: function () {
            return k.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!d;
          },
        };
      return k;
    }),
      fa.extend({
        Deferred: function (a) {
          var b = [
              ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
              ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
              ["notify", "progress", fa.Callbacks("memory")],
            ],
            c = "pending",
            d = {
              state: function () {
                return c;
              },
              always: function () {
                return e.done(arguments).fail(arguments), this;
              },
              then: function () {
                var a = arguments;
                return fa
                  .Deferred(function (c) {
                    fa.each(b, function (b, f) {
                      var g = fa.isFunction(a[b]) && a[b];
                      e[f[1]](function () {
                        var a = g && g.apply(this, arguments);
                        a && fa.isFunction(a.promise)
                          ? a
                              .promise()
                              .progress(c.notify)
                              .done(c.resolve)
                              .fail(c.reject)
                          : c[f[0] + "With"](
                              this === d ? c.promise() : this,
                              g ? [a] : arguments
                            );
                      });
                    }),
                      (a = null);
                  })
                  .promise();
              },
              promise: function (a) {
                return null != a ? fa.extend(a, d) : d;
              },
            },
            e = {};
          return (
            (d.pipe = d.then),
            fa.each(b, function (a, f) {
              var g = f[2],
                h = f[3];
              (d[f[1]] = g.add),
                h &&
                  g.add(
                    function () {
                      c = h;
                    },
                    b[1 ^ a][2].disable,
                    b[2][2].lock
                  ),
                (e[f[0]] = function () {
                  return (
                    e[f[0] + "With"](this === e ? d : this, arguments), this
                  );
                }),
                (e[f[0] + "With"] = g.fireWith);
            }),
            d.promise(e),
            a && a.call(e, e),
            e
          );
        },
        when: function (a) {
          var b,
            c,
            d,
            e = 0,
            f = Y.call(arguments),
            g = f.length,
            h = 1 !== g || (a && fa.isFunction(a.promise)) ? g : 0,
            i = 1 === h ? a : fa.Deferred(),
            j = function (a, c, d) {
              return function (e) {
                (c[a] = this),
                  (d[a] = arguments.length > 1 ? Y.call(arguments) : e),
                  d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
              };
            };
          if (g > 1)
            for (
              b = new Array(g), c = new Array(g), d = new Array(g);
              e < g;
              e++
            )
              f[e] && fa.isFunction(f[e].promise)
                ? f[e]
                    .promise()
                    .progress(j(e, c, b))
                    .done(j(e, d, f))
                    .fail(i.reject)
                : --h;
          return h || i.resolveWith(d, f), i.promise();
        },
      });
    var wa;
    (fa.fn.ready = function (a) {
      return fa.ready.promise().done(a), this;
    }),
      fa.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
          a ? fa.readyWait++ : fa.ready(!0);
        },
        ready: function (a) {
          (a === !0 ? --fa.readyWait : fa.isReady) ||
            ((fa.isReady = !0),
            (a !== !0 && --fa.readyWait > 0) ||
              (wa.resolveWith(X, [fa]),
              fa.fn.triggerHandler &&
                (fa(X).triggerHandler("ready"), fa(X).off("ready"))));
        },
      }),
      (fa.ready.promise = function (b) {
        return (
          wa ||
            ((wa = fa.Deferred()),
            "complete" === X.readyState ||
            ("loading" !== X.readyState && !X.documentElement.doScroll)
              ? a.setTimeout(fa.ready)
              : (X.addEventListener("DOMContentLoaded", g),
                a.addEventListener("load", g))),
          wa.promise(b)
        );
      }),
      fa.ready.promise();
    var xa = function (a, b, c, d, e, f, g) {
        var h = 0,
          i = a.length,
          j = null == c;
        if ("object" === fa.type(c)) {
          e = !0;
          for (h in c) xa(a, b, h, c[h], !0, f, g);
        } else if (
          void 0 !== d &&
          ((e = !0),
          fa.isFunction(d) || (g = !0),
          j &&
            (g
              ? (b.call(a, d), (b = null))
              : ((j = b),
                (b = function (a, b, c) {
                  return j.call(fa(a), c);
                }))),
          b)
        )
          for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
      },
      ya = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
      };
    (h.uid = 1),
      (h.prototype = {
        register: function (a, b) {
          var c = b || {};
          return (
            a.nodeType
              ? (a[this.expando] = c)
              : Object.defineProperty(a, this.expando, {
                  value: c,
                  writable: !0,
                  configurable: !0,
                }),
            a[this.expando]
          );
        },
        cache: function (a) {
          if (!ya(a)) return {};
          var b = a[this.expando];
          return (
            b ||
              ((b = {}),
              ya(a) &&
                (a.nodeType
                  ? (a[this.expando] = b)
                  : Object.defineProperty(a, this.expando, {
                      value: b,
                      configurable: !0,
                    }))),
            b
          );
        },
        set: function (a, b, c) {
          var d,
            e = this.cache(a);
          if ("string" == typeof b) e[b] = c;
          else for (d in b) e[d] = b[d];
          return e;
        },
        get: function (a, b) {
          return void 0 === b
            ? this.cache(a)
            : a[this.expando] && a[this.expando][b];
        },
        access: function (a, b, c) {
          var d;
          return void 0 === b || (b && "string" == typeof b && void 0 === c)
            ? ((d = this.get(a, b)),
              void 0 !== d ? d : this.get(a, fa.camelCase(b)))
            : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
          var c,
            d,
            e,
            f = a[this.expando];
          if (void 0 !== f) {
            if (void 0 === b) this.register(a);
            else {
              fa.isArray(b)
                ? (d = b.concat(b.map(fa.camelCase)))
                : ((e = fa.camelCase(b)),
                  b in f
                    ? (d = [b, e])
                    : ((d = e), (d = d in f ? [d] : d.match(va) || []))),
                (c = d.length);
              for (; c--; ) delete f[d[c]];
            }
            (void 0 === b || fa.isEmptyObject(f)) &&
              (a.nodeType
                ? (a[this.expando] = void 0)
                : delete a[this.expando]);
          }
        },
        hasData: function (a) {
          var b = a[this.expando];
          return void 0 !== b && !fa.isEmptyObject(b);
        },
      });
    var za = new h(),
      Aa = new h(),
      Ba = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ca = /[A-Z]/g;
    fa.extend({
      hasData: function (a) {
        return Aa.hasData(a) || za.hasData(a);
      },
      data: function (a, b, c) {
        return Aa.access(a, b, c);
      },
      removeData: function (a, b) {
        Aa.remove(a, b);
      },
      _data: function (a, b, c) {
        return za.access(a, b, c);
      },
      _removeData: function (a, b) {
        za.remove(a, b);
      },
    }),
      fa.fn.extend({
        data: function (a, b) {
          var c,
            d,
            e,
            f = this[0],
            g = f && f.attributes;
          if (void 0 === a) {
            if (
              this.length &&
              ((e = Aa.get(f)), 1 === f.nodeType && !za.get(f, "hasDataAttrs"))
            ) {
              for (c = g.length; c--; )
                g[c] &&
                  ((d = g[c].name),
                  0 === d.indexOf("data-") &&
                    ((d = fa.camelCase(d.slice(5))), i(f, d, e[d])));
              za.set(f, "hasDataAttrs", !0);
            }
            return e;
          }
          return "object" == typeof a
            ? this.each(function () {
                Aa.set(this, a);
              })
            : xa(
                this,
                function (b) {
                  var c, d;
                  if (f && void 0 === b) {
                    if (
                      ((c =
                        Aa.get(f, a) ||
                        Aa.get(f, a.replace(Ca, "-$&").toLowerCase())),
                      void 0 !== c)
                    )
                      return c;
                    if (
                      ((d = fa.camelCase(a)), (c = Aa.get(f, d)), void 0 !== c)
                    )
                      return c;
                    if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                  } else
                    (d = fa.camelCase(a)),
                      this.each(function () {
                        var c = Aa.get(this, d);
                        Aa.set(this, d, b),
                          a.indexOf("-") > -1 &&
                            void 0 !== c &&
                            Aa.set(this, a, b);
                      });
                },
                null,
                b,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (a) {
          return this.each(function () {
            Aa.remove(this, a);
          });
        },
      }),
      fa.extend({
        queue: function (a, b, c) {
          var d;
          if (a)
            return (
              (b = (b || "fx") + "queue"),
              (d = za.get(a, b)),
              c &&
                (!d || fa.isArray(c)
                  ? (d = za.access(a, b, fa.makeArray(c)))
                  : d.push(c)),
              d || []
            );
        },
        dequeue: function (a, b) {
          b = b || "fx";
          var c = fa.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = fa._queueHooks(a, b),
            g = function () {
              fa.dequeue(a, b);
            };
          "inprogress" === e && ((e = c.shift()), d--),
            e &&
              ("fx" === b && c.unshift("inprogress"),
              delete f.stop,
              e.call(a, g, f)),
            !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
          var c = b + "queueHooks";
          return (
            za.get(a, c) ||
            za.access(a, c, {
              empty: fa.Callbacks("once memory").add(function () {
                za.remove(a, [b + "queue", c]);
              }),
            })
          );
        },
      }),
      fa.fn.extend({
        queue: function (a, b) {
          var c = 2;
          return (
            "string" != typeof a && ((b = a), (a = "fx"), c--),
            arguments.length < c
              ? fa.queue(this[0], a)
              : void 0 === b
              ? this
              : this.each(function () {
                  var c = fa.queue(this, a, b);
                  fa._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && fa.dequeue(this, a);
                })
          );
        },
        dequeue: function (a) {
          return this.each(function () {
            fa.dequeue(this, a);
          });
        },
        clearQueue: function (a) {
          return this.queue(a || "fx", []);
        },
        promise: function (a, b) {
          var c,
            d = 1,
            e = fa.Deferred(),
            f = this,
            g = this.length,
            h = function () {
              --d || e.resolveWith(f, [f]);
            };
          for (
            "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
            g--;

          )
            (c = za.get(f[g], a + "queueHooks")),
              c && c.empty && (d++, c.empty.add(h));
          return h(), e.promise(b);
        },
      });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ea = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
      Fa = ["Top", "Right", "Bottom", "Left"],
      Ga = function (a, b) {
        return (
          (a = b || a),
          "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
        );
      },
      Ha = /^(?:checkbox|radio)$/i,
      Ia = /<([\w:-]+)/,
      Ja = /^$|\/(?:java|ecma)script/i,
      Ka = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Ka.optgroup = Ka.option),
      (Ka.tbody = Ka.tfoot = Ka.colgroup = Ka.caption = Ka.thead),
      (Ka.th = Ka.td);
    var La = /<|&#?\w+;/;
    !(function () {
      var a = X.createDocumentFragment(),
        b = a.appendChild(X.createElement("div")),
        c = X.createElement("input");
      c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        (da.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.innerHTML = "<textarea>x</textarea>"),
        (da.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
    })();
    var Ma = /^key/,
      Na = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Oa = /^([^.]*)(?:\.(.+)|)/;
    (fa.event = {
      global: {},
      add: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = za.get(a);
        if (q)
          for (
            c.handler && ((f = c), (c = f.handler), (e = f.selector)),
              c.guid || (c.guid = fa.guid++),
              (i = q.events) || (i = q.events = {}),
              (g = q.handle) ||
                (g = q.handle =
                  function (b) {
                    return "undefined" != typeof fa &&
                      fa.event.triggered !== b.type
                      ? fa.event.dispatch.apply(a, arguments)
                      : void 0;
                  }),
              b = (b || "").match(va) || [""],
              j = b.length;
            j--;

          )
            (h = Oa.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n &&
                ((l = fa.event.special[n] || {}),
                (n = (e ? l.delegateType : l.bindType) || n),
                (l = fa.event.special[n] || {}),
                (k = fa.extend(
                  {
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && fa.expr.match.needsContext.test(e),
                    namespace: o.join("."),
                  },
                  f
                )),
                (m = i[n]) ||
                  ((m = i[n] = []),
                  (m.delegateCount = 0),
                  (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                    (a.addEventListener && a.addEventListener(n, g))),
                l.add &&
                  (l.add.call(a, k),
                  k.handler.guid || (k.handler.guid = c.guid)),
                e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                (fa.event.global[n] = !0));
      },
      remove: function (a, b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = za.hasData(a) && za.get(a);
        if (q && (i = q.events)) {
          for (b = (b || "").match(va) || [""], j = b.length; j--; )
            if (
              ((h = Oa.exec(b[j]) || []),
              (n = p = h[1]),
              (o = (h[2] || "").split(".").sort()),
              n)
            ) {
              for (
                l = fa.event.special[n] || {},
                  n = (d ? l.delegateType : l.bindType) || n,
                  m = i[n] || [],
                  h =
                    h[2] &&
                    new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  g = f = m.length;
                f--;

              )
                (k = m[f]),
                  (!e && p !== k.origType) ||
                    (c && c.guid !== k.guid) ||
                    (h && !h.test(k.namespace)) ||
                    (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                    (m.splice(f, 1),
                    k.selector && m.delegateCount--,
                    l.remove && l.remove.call(a, k));
              g &&
                !m.length &&
                ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                  fa.removeEvent(a, n, q.handle),
                delete i[n]);
            } else for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
          fa.isEmptyObject(i) && za.remove(a, "handle events");
        }
      },
      dispatch: function (a) {
        a = fa.event.fix(a);
        var b,
          c,
          d,
          e,
          f,
          g = [],
          h = Y.call(arguments),
          i = (za.get(this, "events") || {})[a.type] || [],
          j = fa.event.special[a.type] || {};
        if (
          ((h[0] = a),
          (a.delegateTarget = this),
          !j.preDispatch || j.preDispatch.call(this, a) !== !1)
        ) {
          for (
            g = fa.event.handlers.call(this, a, i), b = 0;
            (e = g[b++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = e.elem, c = 0;
              (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();

            )
              (a.rnamespace && !a.rnamespace.test(f.namespace)) ||
                ((a.handleObj = f),
                (a.data = f.data),
                (d = (
                  (fa.event.special[f.origType] || {}).handle || f.handler
                ).apply(e.elem, h)),
                void 0 !== d &&
                  (a.result = d) === !1 &&
                  (a.preventDefault(), a.stopPropagation()));
          return j.postDispatch && j.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (a, b) {
        var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
        if (
          h &&
          i.nodeType &&
          ("click" !== a.type || isNaN(a.button) || a.button < 1)
        )
          for (; i !== this; i = i.parentNode || this)
            if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
              for (d = [], c = 0; c < h; c++)
                (f = b[c]),
                  (e = f.selector + " "),
                  void 0 === d[e] &&
                    (d[e] = f.needsContext
                      ? fa(e, this).index(i) > -1
                      : fa.find(e, this, null, [i]).length),
                  d[e] && d.push(f);
              d.length &&
                g.push({
                  elem: i,
                  handlers: d,
                });
            }
        return (
          h < b.length &&
            g.push({
              elem: this,
              handlers: b.slice(h),
            }),
          g
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (a, b) {
          return (
            null == a.which &&
              (a.which = null != b.charCode ? b.charCode : b.keyCode),
            a
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (a, b) {
          var c,
            d,
            e,
            f = b.button;
          return (
            null == a.pageX &&
              null != b.clientX &&
              ((c = a.target.ownerDocument || X),
              (d = c.documentElement),
              (e = c.body),
              (a.pageX =
                b.clientX +
                ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
              (a.pageY =
                b.clientY +
                ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                ((d && d.clientTop) || (e && e.clientTop) || 0))),
            a.which ||
              void 0 === f ||
              (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
            a
          );
        },
      },
      fix: function (a) {
        if (a[fa.expando]) return a;
        var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
        for (
          g ||
            (this.fixHooks[e] = g =
              Na.test(e) ? this.mouseHooks : Ma.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new fa.Event(f),
            b = d.length;
          b--;

        )
          (c = d[b]), (a[c] = f[c]);
        return (
          a.target || (a.target = X),
          3 === a.target.nodeType && (a.target = a.target.parentNode),
          g.filter ? g.filter(a, f) : a
        );
      },
      special: {
        load: {
          noBubble: !0,
        },
        focus: {
          trigger: function () {
            if (this !== p() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === p() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (
              "checkbox" === this.type &&
              this.click &&
              fa.nodeName(this, "input")
            )
              return this.click(), !1;
          },
          _default: function (a) {
            return fa.nodeName(a.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (a) {
            void 0 !== a.result &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          },
        },
      },
    }),
      (fa.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
      }),
      (fa.Event = function (a, b) {
        return this instanceof fa.Event
          ? (a && a.type
              ? ((this.originalEvent = a),
                (this.type = a.type),
                (this.isDefaultPrevented =
                  a.defaultPrevented ||
                  (void 0 === a.defaultPrevented && a.returnValue === !1)
                    ? n
                    : o))
              : (this.type = a),
            b && fa.extend(this, b),
            (this.timeStamp = (a && a.timeStamp) || fa.now()),
            void (this[fa.expando] = !0))
          : new fa.Event(a, b);
      }),
      (fa.Event.prototype = {
        constructor: fa.Event,
        isDefaultPrevented: o,
        isPropagationStopped: o,
        isImmediatePropagationStopped: o,
        isSimulated: !1,
        preventDefault: function () {
          var a = this.originalEvent;
          (this.isDefaultPrevented = n),
            a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function () {
          var a = this.originalEvent;
          (this.isPropagationStopped = n),
            a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var a = this.originalEvent;
          (this.isImmediatePropagationStopped = n),
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      fa.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (a, b) {
          fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
              var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;
              return (
                (e && (e === d || fa.contains(d, e))) ||
                  ((a.type = f.origType),
                  (c = f.handler.apply(this, arguments)),
                  (a.type = b)),
                c
              );
            },
          };
        }
      ),
      fa.fn.extend({
        on: function (a, b, c, d) {
          return q(this, a, b, c, d);
        },
        one: function (a, b, c, d) {
          return q(this, a, b, c, d, 1);
        },
        off: function (a, b, c) {
          var d, e;
          if (a && a.preventDefault && a.handleObj)
            return (
              (d = a.handleObj),
              fa(a.delegateTarget).off(
                d.namespace ? d.origType + "." + d.namespace : d.origType,
                d.selector,
                d.handler
              ),
              this
            );
          if ("object" == typeof a) {
            for (e in a) this.off(e, b, a[e]);
            return this;
          }
          return (
            (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
            c === !1 && (c = o),
            this.each(function () {
              fa.event.remove(this, a, c, b);
            })
          );
        },
      });
    var Pa =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Qa = /<script|<style|<link/i,
      Ra = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Sa = /^true\/(.*)/,
      Ta = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fa.extend({
      htmlPrefilter: function (a) {
        return a.replace(Pa, "<$1></$2>");
      },
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = fa.contains(a.ownerDocument, a);
        if (
          !(
            da.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            fa.isXMLDoc(a)
          )
        )
          for (g = k(h), f = k(a), d = 0, e = f.length; d < e; d++)
            v(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || k(a), g = g || k(h), d = 0, e = f.length; d < e; d++)
              u(f[d], g[d]);
          else u(a, h);
        return (
          (g = k(h, "script")), g.length > 0 && l(g, !i && k(a, "script")), h
        );
      },
      cleanData: function (a) {
        for (
          var b, c, d, e = fa.event.special, f = 0;
          void 0 !== (c = a[f]);
          f++
        )
          if (ya(c)) {
            if ((b = c[za.expando])) {
              if (b.events)
                for (d in b.events)
                  e[d] ? fa.event.remove(c, d) : fa.removeEvent(c, d, b.handle);
              c[za.expando] = void 0;
            }
            c[Aa.expando] && (c[Aa.expando] = void 0);
          }
      },
    }),
      fa.fn.extend({
        domManip: w,
        detach: function (a) {
          return x(this, a, !0);
        },
        remove: function (a) {
          return x(this, a);
        },
        text: function (a) {
          return xa(
            this,
            function (a) {
              return void 0 === a
                ? fa.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = a);
                  });
            },
            null,
            a,
            arguments.length
          );
        },
        append: function () {
          return w(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = r(this, a);
              b.appendChild(a);
            }
          });
        },
        prepend: function () {
          return w(this, arguments, function (a) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var b = r(this, a);
              b.insertBefore(a, b.firstChild);
            }
          });
        },
        before: function () {
          return w(this, arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this);
          });
        },
        after: function () {
          return w(this, arguments, function (a) {
            this.parentNode &&
              this.parentNode.insertBefore(a, this.nextSibling);
          });
        },
        empty: function () {
          for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (fa.cleanData(k(a, !1)), (a.textContent = ""));
          return this;
        },
        clone: function (a, b) {
          return (
            (a = null != a && a),
            (b = null == b ? a : b),
            this.map(function () {
              return fa.clone(this, a, b);
            })
          );
        },
        html: function (a) {
          return xa(
            this,
            function (a) {
              var b = this[0] || {},
                c = 0,
                d = this.length;
              if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
              if (
                "string" == typeof a &&
                !Qa.test(a) &&
                !Ka[(Ia.exec(a) || ["", ""])[1].toLowerCase()]
              ) {
                a = fa.htmlPrefilter(a);
                try {
                  for (; c < d; c++)
                    (b = this[c] || {}),
                      1 === b.nodeType &&
                        (fa.cleanData(k(b, !1)), (b.innerHTML = a));
                  b = 0;
                } catch (e) {}
              }
              b && this.empty().append(a);
            },
            null,
            a,
            arguments.length
          );
        },
        replaceWith: function () {
          var a = [];
          return w(
            this,
            arguments,
            function (b) {
              var c = this.parentNode;
              fa.inArray(this, a) < 0 &&
                (fa.cleanData(k(this)), c && c.replaceChild(b, this));
            },
            a
          );
        },
      }),
      fa.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (a, b) {
          fa.fn[a] = function (a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; g <= f; g++)
              (c = g === f ? this : this.clone(!0)),
                fa(e[g])[b](c),
                $.apply(d, c.get());
            return this.pushStack(d);
          };
        }
      );
    var Ua,
      Va = {
        HTML: "block",
        BODY: "block",
      },
      Wa = /^margin/,
      Xa = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
      Ya = function (b) {
        var c = b.ownerDocument.defaultView;
        return (c && c.opener) || (c = a), c.getComputedStyle(b);
      },
      Za = function (a, b, c, d) {
        var e,
          f,
          g = {};
        for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
      },
      $a = X.documentElement;
    !(function () {
      function b() {
        (h.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (h.innerHTML = ""),
          $a.appendChild(g);
        var b = a.getComputedStyle(h);
        (c = "1%" !== b.top),
          (f = "2px" === b.marginLeft),
          (d = "4px" === b.width),
          (h.style.marginRight = "50%"),
          (e = "4px" === b.marginRight),
          $a.removeChild(g);
      }
      var c,
        d,
        e,
        f,
        g = X.createElement("div"),
        h = X.createElement("div");
      h.style &&
        ((h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (da.clearCloneStyle = "content-box" === h.style.backgroundClip),
        (g.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        g.appendChild(h),
        fa.extend(da, {
          pixelPosition: function () {
            return b(), c;
          },
          boxSizingReliable: function () {
            return null == d && b(), d;
          },
          pixelMarginRight: function () {
            return null == d && b(), e;
          },
          reliableMarginLeft: function () {
            return null == d && b(), f;
          },
          reliableMarginRight: function () {
            var b,
              c = h.appendChild(X.createElement("div"));
            return (
              (c.style.cssText = h.style.cssText =
                "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (c.style.marginRight = c.style.width = "0"),
              (h.style.width = "1px"),
              $a.appendChild(g),
              (b = !parseFloat(a.getComputedStyle(c).marginRight)),
              $a.removeChild(g),
              h.removeChild(c),
              b
            );
          },
        }));
    })();
    var _a = /^(none|table(?!-c[ea]).+)/,
      ab = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      bb = {
        letterSpacing: "0",
        fontWeight: "400",
      },
      cb = ["Webkit", "O", "Moz", "ms"],
      db = X.createElement("div").style;
    fa.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = A(a, "opacity");
              return "" === c ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: "cssFloat",
      },
      style: function (a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e,
            f,
            g,
            h = fa.camelCase(b),
            i = a.style;
          return (
            (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
            (g = fa.cssHooks[b] || fa.cssHooks[h]),
            void 0 === c
              ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                ? e
                : i[b]
              : ((f = typeof c),
                "string" === f &&
                  (e = Ea.exec(c)) &&
                  e[1] &&
                  ((c = j(a, b, e)), (f = "number")),
                null != c &&
                  c === c &&
                  ("number" === f &&
                    (c += (e && e[3]) || (fa.cssNumber[h] ? "" : "px")),
                  da.clearCloneStyle ||
                    "" !== c ||
                    0 !== b.indexOf("background") ||
                    (i[b] = "inherit"),
                  (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                    (i[b] = c)),
                void 0)
          );
        }
      },
      css: function (a, b, c, d) {
        var e,
          f,
          g,
          h = fa.camelCase(b);
        return (
          (b = fa.cssProps[h] || (fa.cssProps[h] = C(h) || h)),
          (g = fa.cssHooks[b] || fa.cssHooks[h]),
          g && "get" in g && (e = g.get(a, !0, c)),
          void 0 === e && (e = A(a, b, d)),
          "normal" === e && b in bb && (e = bb[b]),
          "" === c || c
            ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
            : e
        );
      },
    }),
      fa.each(["height", "width"], function (a, b) {
        fa.cssHooks[b] = {
          get: function (a, c, d) {
            if (c)
              return _a.test(fa.css(a, "display")) && 0 === a.offsetWidth
                ? Za(a, ab, function () {
                    return F(a, b, d);
                  })
                : F(a, b, d);
          },
          set: function (a, c, d) {
            var e,
              f = d && Ya(a),
              g =
                d &&
                E(a, b, d, "border-box" === fa.css(a, "boxSizing", !1, f), f);
            return (
              g &&
                (e = Ea.exec(c)) &&
                "px" !== (e[3] || "px") &&
                ((a.style[b] = c), (c = fa.css(a, b))),
              D(a, c, g)
            );
          },
        };
      }),
      (fa.cssHooks.marginLeft = B(da.reliableMarginLeft, function (a, b) {
        if (b)
          return (
            (parseFloat(A(a, "marginLeft")) ||
              a.getBoundingClientRect().left -
                Za(
                  a,
                  {
                    marginLeft: 0,
                  },
                  function () {
                    return a.getBoundingClientRect().left;
                  }
                )) + "px"
          );
      })),
      (fa.cssHooks.marginRight = B(da.reliableMarginRight, function (a, b) {
        if (b)
          return Za(
            a,
            {
              display: "inline-block",
            },
            A,
            [a, "marginRight"]
          );
      })),
      fa.each(
        {
          margin: "",
          padding: "",
          border: "Width",
        },
        function (a, b) {
          (fa.cssHooks[a + b] = {
            expand: function (c) {
              for (
                var d = 0,
                  e = {},
                  f = "string" == typeof c ? c.split(" ") : [c];
                d < 4;
                d++
              )
                e[a + Fa[d] + b] = f[d] || f[d - 2] || f[0];
              return e;
            },
          }),
            Wa.test(a) || (fa.cssHooks[a + b].set = D);
        }
      ),
      fa.fn.extend({
        css: function (a, b) {
          return xa(
            this,
            function (a, b, c) {
              var d,
                e,
                f = {},
                g = 0;
              if (fa.isArray(b)) {
                for (d = Ya(a), e = b.length; g < e; g++)
                  f[b[g]] = fa.css(a, b[g], !1, d);
                return f;
              }
              return void 0 !== c ? fa.style(a, b, c) : fa.css(a, b);
            },
            a,
            b,
            arguments.length > 1
          );
        },
        show: function () {
          return G(this, !0);
        },
        hide: function () {
          return G(this);
        },
        toggle: function (a) {
          return "boolean" == typeof a
            ? a
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ga(this) ? fa(this).show() : fa(this).hide();
              });
        },
      }),
      (fa.Tween = H),
      (H.prototype = {
        constructor: H,
        init: function (a, b, c, d, e, f) {
          (this.elem = a),
            (this.prop = c),
            (this.easing = e || fa.easing._default),
            (this.options = b),
            (this.start = this.now = this.cur()),
            (this.end = d),
            (this.unit = f || (fa.cssNumber[c] ? "" : "px"));
        },
        cur: function () {
          var a = H.propHooks[this.prop];
          return a && a.get ? a.get(this) : H.propHooks._default.get(this);
        },
        run: function (a) {
          var b,
            c = H.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = b =
                  fa.easing[this.easing](
                    a,
                    this.options.duration * a,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = b = a),
            (this.now = (this.end - this.start) * b + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : H.propHooks._default.set(this),
            this
          );
        },
      }),
      (H.prototype.init.prototype = H.prototype),
      (H.propHooks = {
        _default: {
          get: function (a) {
            var b;
            return 1 !== a.elem.nodeType ||
              (null != a.elem[a.prop] && null == a.elem.style[a.prop])
              ? a.elem[a.prop]
              : ((b = fa.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
          },
          set: function (a) {
            fa.fx.step[a.prop]
              ? fa.fx.step[a.prop](a)
              : 1 !== a.elem.nodeType ||
                (null == a.elem.style[fa.cssProps[a.prop]] &&
                  !fa.cssHooks[a.prop])
              ? (a.elem[a.prop] = a.now)
              : fa.style(a.elem, a.prop, a.now + a.unit);
          },
        },
      }),
      (H.propHooks.scrollTop = H.propHooks.scrollLeft =
        {
          set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
          },
        }),
      (fa.easing = {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return 0.5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (fa.fx = H.prototype.init),
      (fa.fx.step = {});
    var eb,
      fb,
      gb = /^(?:toggle|show|hide)$/,
      hb = /queueHooks$/;
    (fa.Animation = fa.extend(N, {
      tweeners: {
        "*": [
          function (a, b) {
            var c = this.createTween(a, b);
            return j(c.elem, a, Ea.exec(b), c), c;
          },
        ],
      },
      tweener: function (a, b) {
        fa.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(va));
        for (var c, d = 0, e = a.length; d < e; d++)
          (c = a[d]),
            (N.tweeners[c] = N.tweeners[c] || []),
            N.tweeners[c].unshift(b);
      },
      prefilters: [L],
      prefilter: function (a, b) {
        b ? N.prefilters.unshift(a) : N.prefilters.push(a);
      },
    })),
      (fa.speed = function (a, b, c) {
        var d =
          a && "object" == typeof a
            ? fa.extend({}, a)
            : {
                complete: c || (!c && b) || (fa.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !fa.isFunction(b) && b),
              };
        return (
          (d.duration = fa.fx.off
            ? 0
            : "number" == typeof d.duration
            ? d.duration
            : d.duration in fa.fx.speeds
            ? fa.fx.speeds[d.duration]
            : fa.fx.speeds._default),
          (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
          (d.old = d.complete),
          (d.complete = function () {
            fa.isFunction(d.old) && d.old.call(this),
              d.queue && fa.dequeue(this, d.queue);
          }),
          d
        );
      }),
      fa.fn.extend({
        fadeTo: function (a, b, c, d) {
          return this.filter(Ga).css("opacity", 0).show().end().animate(
            {
              opacity: b,
            },
            a,
            c,
            d
          );
        },
        animate: function (a, b, c, d) {
          var e = fa.isEmptyObject(a),
            f = fa.speed(b, c, d),
            g = function () {
              var b = N(this, fa.extend({}, a), f);
              (e || za.get(this, "finish")) && b.stop(!0);
            };
          return (
            (g.finish = g),
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
          );
        },
        stop: function (a, b, c) {
          var d = function (a) {
            var b = a.stop;
            delete a.stop, b(c);
          };
          return (
            "string" != typeof a && ((c = b), (b = a), (a = void 0)),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = fa.timers,
                g = za.get(this);
              if (e) g[e] && g[e].stop && d(g[e]);
              else for (e in g) g[e] && g[e].stop && hb.test(e) && d(g[e]);
              for (e = f.length; e--; )
                f[e].elem !== this ||
                  (null != a && f[e].queue !== a) ||
                  (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
              (!b && c) || fa.dequeue(this, a);
            })
          );
        },
        finish: function (a) {
          return (
            a !== !1 && (a = a || "fx"),
            this.each(function () {
              var b,
                c = za.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = fa.timers,
                g = d ? d.length : 0;
              for (
                c.finish = !0,
                  fa.queue(this, a, []),
                  e && e.stop && e.stop.call(this, !0),
                  b = f.length;
                b--;

              )
                f[b].elem === this &&
                  f[b].queue === a &&
                  (f[b].anim.stop(!0), f.splice(b, 1));
              for (b = 0; b < g; b++)
                d[b] && d[b].finish && d[b].finish.call(this);
              delete c.finish;
            })
          );
        },
      }),
      fa.each(["toggle", "show", "hide"], function (a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function (a, d, e) {
          return null == a || "boolean" == typeof a
            ? c.apply(this, arguments)
            : this.animate(J(b, !0), a, d, e);
        };
      }),
      fa.each(
        {
          slideDown: J("show"),
          slideUp: J("hide"),
          slideToggle: J("toggle"),
          fadeIn: {
            opacity: "show",
          },
          fadeOut: {
            opacity: "hide",
          },
          fadeToggle: {
            opacity: "toggle",
          },
        },
        function (a, b) {
          fa.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
          };
        }
      ),
      (fa.timers = []),
      (fa.fx.tick = function () {
        var a,
          b = 0,
          c = fa.timers;
        for (eb = fa.now(); b < c.length; b++)
          (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
        c.length || fa.fx.stop(), (eb = void 0);
      }),
      (fa.fx.timer = function (a) {
        fa.timers.push(a), a() ? fa.fx.start() : fa.timers.pop();
      }),
      (fa.fx.interval = 13),
      (fa.fx.start = function () {
        fb || (fb = a.setInterval(fa.fx.tick, fa.fx.interval));
      }),
      (fa.fx.stop = function () {
        a.clearInterval(fb), (fb = null);
      }),
      (fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400,
      }),
      (fa.fn.delay = function (b, c) {
        return (
          (b = fa.fx ? fa.fx.speeds[b] || b : b),
          (c = c || "fx"),
          this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
              a.clearTimeout(e);
            };
          })
        );
      }),
      (function () {
        var a = X.createElement("input"),
          b = X.createElement("select"),
          c = b.appendChild(X.createElement("option"));
        (a.type = "checkbox"),
          (da.checkOn = "" !== a.value),
          (da.optSelected = c.selected),
          (b.disabled = !0),
          (da.optDisabled = !c.disabled),
          (a = X.createElement("input")),
          (a.value = "t"),
          (a.type = "radio"),
          (da.radioValue = "t" === a.value);
      })();
    var ib,
      jb = fa.expr.attrHandle;
    fa.fn.extend({
      attr: function (a, b) {
        return xa(this, fa.attr, a, b, arguments.length > 1);
      },
      removeAttr: function (a) {
        return this.each(function () {
          fa.removeAttr(this, a);
        });
      },
    }),
      fa.extend({
        attr: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return "undefined" == typeof a.getAttribute
              ? fa.prop(a, b, c)
              : ((1 === f && fa.isXMLDoc(a)) ||
                  ((b = b.toLowerCase()),
                  (e =
                    fa.attrHooks[b] ||
                    (fa.expr.match.bool.test(b) ? ib : void 0))),
                void 0 !== c
                  ? null === c
                    ? void fa.removeAttr(a, b)
                    : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                    ? d
                    : (a.setAttribute(b, c + ""), c)
                  : e && "get" in e && null !== (d = e.get(a, b))
                  ? d
                  : ((d = fa.find.attr(a, b)), null == d ? void 0 : d));
        },
        attrHooks: {
          type: {
            set: function (a, b) {
              if (!da.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                var c = a.value;
                return a.setAttribute("type", b), c && (a.value = c), b;
              }
            },
          },
        },
        removeAttr: function (a, b) {
          var c,
            d,
            e = 0,
            f = b && b.match(va);
          if (f && 1 === a.nodeType)
            for (; (c = f[e++]); )
              (d = fa.propFix[c] || c),
                fa.expr.match.bool.test(c) && (a[d] = !1),
                a.removeAttribute(c);
        },
      }),
      (ib = {
        set: function (a, b, c) {
          return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c;
        },
      }),
      fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = jb[b] || fa.find.attr;
        jb[b] = function (a, b, d) {
          var e, f;
          return (
            d ||
              ((f = jb[b]),
              (jb[b] = e),
              (e = null != c(a, b, d) ? b.toLowerCase() : null),
              (jb[b] = f)),
            e
          );
        };
      });
    var kb = /^(?:input|select|textarea|button)$/i,
      lb = /^(?:a|area)$/i;
    fa.fn.extend({
      prop: function (a, b) {
        return xa(this, fa.prop, a, b, arguments.length > 1);
      },
      removeProp: function (a) {
        return this.each(function () {
          delete this[fa.propFix[a] || a];
        });
      },
    }),
      fa.extend({
        prop: function (a, b, c) {
          var d,
            e,
            f = a.nodeType;
          if (3 !== f && 8 !== f && 2 !== f)
            return (
              (1 === f && fa.isXMLDoc(a)) ||
                ((b = fa.propFix[b] || b), (e = fa.propHooks[b])),
              void 0 !== c
                ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a[b] = c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (a) {
              var b = fa.find.attr(a, "tabindex");
              return b
                ? parseInt(b, 10)
                : kb.test(a.nodeName) || (lb.test(a.nodeName) && a.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: {
          for: "htmlFor",
          class: "className",
        },
      }),
      da.optSelected ||
        (fa.propHooks.selected = {
          get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
          },
          set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
          },
        }),
      fa.each(
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
          fa.propFix[this.toLowerCase()] = this;
        }
      );
    var mb = /[\t\r\n\f]/g;
    fa.fn.extend({
      addClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (fa.isFunction(a))
          return this.each(function (b) {
            fa(this).addClass(a.call(this, b, O(this)));
          });
        if ("string" == typeof a && a)
          for (b = a.match(va) || []; (c = this[i++]); )
            if (
              ((e = O(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))
            ) {
              for (g = 0; (f = b[g++]); )
                d.indexOf(" " + f + " ") < 0 && (d += f + " ");
              (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
            }
        return this;
      },
      removeClass: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
        if (fa.isFunction(a))
          return this.each(function (b) {
            fa(this).removeClass(a.call(this, b, O(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a)
          for (b = a.match(va) || []; (c = this[i++]); )
            if (
              ((e = O(c)),
              (d = 1 === c.nodeType && (" " + e + " ").replace(mb, " ")))
            ) {
              for (g = 0; (f = b[g++]); )
                for (; d.indexOf(" " + f + " ") > -1; )
                  d = d.replace(" " + f + " ", " ");
              (h = fa.trim(d)), e !== h && c.setAttribute("class", h);
            }
        return this;
      },
      toggleClass: function (a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c
          ? b
            ? this.addClass(a)
            : this.removeClass(a)
          : fa.isFunction(a)
          ? this.each(function (c) {
              fa(this).toggleClass(a.call(this, c, O(this), b), b);
            })
          : this.each(function () {
              var b, d, e, f;
              if ("string" === c)
                for (d = 0, e = fa(this), f = a.match(va) || []; (b = f[d++]); )
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              else
                (void 0 !== a && "boolean" !== c) ||
                  ((b = O(this)),
                  b && za.set(this, "__className__", b),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      b || a === !1 ? "" : za.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (a) {
        var b,
          c,
          d = 0;
        for (b = " " + a + " "; (c = this[d++]); )
          if (
            1 === c.nodeType &&
            (" " + O(c) + " ").replace(mb, " ").indexOf(b) > -1
          )
            return !0;
        return !1;
      },
    });
    var nb = /\r/g,
      ob = /[\x20\t\r\n\f]+/g;
    fa.fn.extend({
      val: function (a) {
        var b,
          c,
          d,
          e = this[0];
        {
          if (arguments.length)
            return (
              (d = fa.isFunction(a)),
              this.each(function (c) {
                var e;
                1 === this.nodeType &&
                  ((e = d ? a.call(this, c, fa(this).val()) : a),
                  null == e
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : fa.isArray(e) &&
                      (e = fa.map(e, function (a) {
                        return null == a ? "" : a + "";
                      })),
                  (b =
                    fa.valHooks[this.type] ||
                    fa.valHooks[this.nodeName.toLowerCase()]),
                  (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                    (this.value = e));
              })
            );
          if (e)
            return (
              (b =
                fa.valHooks[e.type] || fa.valHooks[e.nodeName.toLowerCase()]),
              b && "get" in b && void 0 !== (c = b.get(e, "value"))
                ? c
                : ((c = e.value),
                  "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)
            );
        }
      },
    }),
      fa.extend({
        valHooks: {
          option: {
            get: function (a) {
              var b = fa.find.attr(a, "value");
              return null != b ? b : fa.trim(fa.text(a)).replace(ob, " ");
            },
          },
          select: {
            get: function (a) {
              for (
                var b,
                  c,
                  d = a.options,
                  e = a.selectedIndex,
                  f = "select-one" === a.type || e < 0,
                  g = f ? null : [],
                  h = f ? e + 1 : d.length,
                  i = e < 0 ? h : f ? e : 0;
                i < h;
                i++
              )
                if (
                  ((c = d[i]),
                  (c.selected || i === e) &&
                    (da.optDisabled
                      ? !c.disabled
                      : null === c.getAttribute("disabled")) &&
                    (!c.parentNode.disabled ||
                      !fa.nodeName(c.parentNode, "optgroup")))
                ) {
                  if (((b = fa(c).val()), f)) return b;
                  g.push(b);
                }
              return g;
            },
            set: function (a, b) {
              for (
                var c, d, e = a.options, f = fa.makeArray(b), g = e.length;
                g--;

              )
                (d = e[g]),
                  (d.selected =
                    fa.inArray(fa.valHooks.option.get(d), f) > -1) && (c = !0);
              return c || (a.selectedIndex = -1), f;
            },
          },
        },
      }),
      fa.each(["radio", "checkbox"], function () {
        (fa.valHooks[this] = {
          set: function (a, b) {
            if (fa.isArray(b))
              return (a.checked = fa.inArray(fa(a).val(), b) > -1);
          },
        }),
          da.checkOn ||
            (fa.valHooks[this].get = function (a) {
              return null === a.getAttribute("value") ? "on" : a.value;
            });
      });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    fa.extend(fa.event, {
      trigger: function (b, c, d, e) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = [d || X],
          n = ca.call(b, "type") ? b.type : b,
          o = ca.call(b, "namespace") ? b.namespace.split(".") : [];
        if (
          ((g = h = d = d || X),
          3 !== d.nodeType &&
            8 !== d.nodeType &&
            !pb.test(n + fa.event.triggered) &&
            (n.indexOf(".") > -1 &&
              ((o = n.split(".")), (n = o.shift()), o.sort()),
            (j = n.indexOf(":") < 0 && "on" + n),
            (b = b[fa.expando]
              ? b
              : new fa.Event(n, "object" == typeof b && b)),
            (b.isTrigger = e ? 2 : 3),
            (b.namespace = o.join(".")),
            (b.rnamespace = b.namespace
              ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (b.result = void 0),
            b.target || (b.target = d),
            (c = null == c ? [b] : fa.makeArray(c, [b])),
            (l = fa.event.special[n] || {}),
            e || !l.trigger || l.trigger.apply(d, c) !== !1))
        ) {
          if (!e && !l.noBubble && !fa.isWindow(d)) {
            for (
              i = l.delegateType || n, pb.test(i + n) || (g = g.parentNode);
              g;
              g = g.parentNode
            )
              m.push(g), (h = g);
            h === (d.ownerDocument || X) &&
              m.push(h.defaultView || h.parentWindow || a);
          }
          for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
            (b.type = f > 1 ? i : l.bindType || n),
              (k = (za.get(g, "events") || {})[b.type] && za.get(g, "handle")),
              k && k.apply(g, c),
              (k = j && g[j]),
              k &&
                k.apply &&
                ya(g) &&
                ((b.result = k.apply(g, c)),
                b.result === !1 && b.preventDefault());
          return (
            (b.type = n),
            e ||
              b.isDefaultPrevented() ||
              (l._default && l._default.apply(m.pop(), c) !== !1) ||
              !ya(d) ||
              (j &&
                fa.isFunction(d[n]) &&
                !fa.isWindow(d) &&
                ((h = d[j]),
                h && (d[j] = null),
                (fa.event.triggered = n),
                d[n](),
                (fa.event.triggered = void 0),
                h && (d[j] = h))),
            b.result
          );
        }
      },
      simulate: function (a, b, c) {
        var d = fa.extend(new fa.Event(), c, {
          type: a,
          isSimulated: !0,
        });
        fa.event.trigger(d, null, b);
      },
    }),
      fa.fn.extend({
        trigger: function (a, b) {
          return this.each(function () {
            fa.event.trigger(a, b, this);
          });
        },
        triggerHandler: function (a, b) {
          var c = this[0];
          if (c) return fa.event.trigger(a, b, c, !0);
        },
      }),
      fa.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (a, b) {
          fa.fn[b] = function (a, c) {
            return arguments.length > 0
              ? this.on(b, null, a, c)
              : this.trigger(b);
          };
        }
      ),
      fa.fn.extend({
        hover: function (a, b) {
          return this.mouseenter(a).mouseleave(b || a);
        },
      }),
      (da.focusin = "onfocusin" in a),
      da.focusin ||
        fa.each(
          {
            focus: "focusin",
            blur: "focusout",
          },
          function (a, b) {
            var c = function (a) {
              fa.event.simulate(b, a.target, fa.event.fix(a));
            };
            fa.event.special[b] = {
              setup: function () {
                var d = this.ownerDocument || this,
                  e = za.access(d, b);
                e || d.addEventListener(a, c, !0),
                  za.access(d, b, (e || 0) + 1);
              },
              teardown: function () {
                var d = this.ownerDocument || this,
                  e = za.access(d, b) - 1;
                e
                  ? za.access(d, b, e)
                  : (d.removeEventListener(a, c, !0), za.remove(d, b));
              },
            };
          }
        );
    var qb = a.location,
      rb = fa.now(),
      sb = /\?/;
    (fa.parseJSON = function (a) {
      return JSON.parse(a + "");
    }),
      (fa.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
          c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
          c = void 0;
        }
        return (
          (c && !c.getElementsByTagName("parsererror").length) ||
            fa.error("Invalid XML: " + b),
          c
        );
      });
    var tb = /#.*$/,
      ub = /([?&])_=[^&]*/,
      vb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      wb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      xb = /^(?:GET|HEAD)$/,
      yb = /^\/\//,
      zb = {},
      Ab = {},
      Bb = "*/".concat("*"),
      Cb = X.createElement("a");
    (Cb.href = qb.href),
      fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: qb.href,
          type: "GET",
          isLocal: wb.test(qb.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Bb,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/,
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": fa.parseJSON,
            "text xml": fa.parseXML,
          },
          flatOptions: {
            url: !0,
            context: !0,
          },
        },
        ajaxSetup: function (a, b) {
          return b ? R(R(a, fa.ajaxSettings), b) : R(fa.ajaxSettings, a);
        },
        ajaxPrefilter: P(zb),
        ajaxTransport: P(Ab),
        ajax: function (b, c) {
          function d(b, c, d, h) {
            var j,
              l,
              s,
              t,
              v,
              x = c;
            2 !== u &&
              ((u = 2),
              i && a.clearTimeout(i),
              (e = void 0),
              (g = h || ""),
              (w.readyState = b > 0 ? 4 : 0),
              (j = (b >= 200 && b < 300) || 304 === b),
              d && (t = S(m, w, d)),
              (t = T(m, t, w, j)),
              j
                ? (m.ifModified &&
                    ((v = w.getResponseHeader("Last-Modified")),
                    v && (fa.lastModified[f] = v),
                    (v = w.getResponseHeader("etag")),
                    v && (fa.etag[f] = v)),
                  204 === b || "HEAD" === m.type
                    ? (x = "nocontent")
                    : 304 === b
                    ? (x = "notmodified")
                    : ((x = t.state), (l = t.data), (s = t.error), (j = !s)))
                : ((s = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
              (w.status = b),
              (w.statusText = (c || x) + ""),
              j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]),
              w.statusCode(r),
              (r = void 0),
              k &&
                o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]),
              q.fireWith(n, [w, x]),
              k &&
                (o.trigger("ajaxComplete", [w, m]),
                --fa.active || fa.event.trigger("ajaxStop")));
          }
          "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
          var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = fa.ajaxSetup({}, c),
            n = m.context || m,
            o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
            p = fa.Deferred(),
            q = fa.Callbacks("once memory"),
            r = m.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
              readyState: 0,
              getResponseHeader: function (a) {
                var b;
                if (2 === u) {
                  if (!h)
                    for (h = {}; (b = vb.exec(g)); )
                      h[b[1].toLowerCase()] = b[2];
                  b = h[a.toLowerCase()];
                }
                return null == b ? null : b;
              },
              getAllResponseHeaders: function () {
                return 2 === u ? g : null;
              },
              setRequestHeader: function (a, b) {
                var c = a.toLowerCase();
                return u || ((a = t[c] = t[c] || a), (s[a] = b)), this;
              },
              overrideMimeType: function (a) {
                return u || (m.mimeType = a), this;
              },
              statusCode: function (a) {
                var b;
                if (a)
                  if (u < 2) for (b in a) r[b] = [r[b], a[b]];
                  else w.always(a[w.status]);
                return this;
              },
              abort: function (a) {
                var b = a || v;
                return e && e.abort(b), d(0, b), this;
              },
            };
          if (
            ((p.promise(w).complete = q.add),
            (w.success = w.done),
            (w.error = w.fail),
            (m.url = ((b || m.url || qb.href) + "")
              .replace(tb, "")
              .replace(yb, qb.protocol + "//")),
            (m.type = c.method || c.type || m.method || m.type),
            (m.dataTypes = fa
              .trim(m.dataType || "*")
              .toLowerCase()
              .match(va) || [""]),
            null == m.crossDomain)
          ) {
            j = X.createElement("a");
            try {
              (j.href = m.url),
                (j.href = j.href),
                (m.crossDomain =
                  Cb.protocol + "//" + Cb.host != j.protocol + "//" + j.host);
            } catch (x) {
              m.crossDomain = !0;
            }
          }
          if (
            (m.data &&
              m.processData &&
              "string" != typeof m.data &&
              (m.data = fa.param(m.data, m.traditional)),
            Q(zb, m, c, w),
            2 === u)
          )
            return w;
          (k = fa.event && m.global),
            k && 0 === fa.active++ && fa.event.trigger("ajaxStart"),
            (m.type = m.type.toUpperCase()),
            (m.hasContent = !xb.test(m.type)),
            (f = m.url),
            m.hasContent ||
              (m.data &&
                ((f = m.url += (sb.test(f) ? "&" : "?") + m.data),
                delete m.data),
              m.cache === !1 &&
                (m.url = ub.test(f)
                  ? f.replace(ub, "$1_=" + rb++)
                  : f + (sb.test(f) ? "&" : "?") + "_=" + rb++)),
            m.ifModified &&
              (fa.lastModified[f] &&
                w.setRequestHeader("If-Modified-Since", fa.lastModified[f]),
              fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])),
            ((m.data && m.hasContent && m.contentType !== !1) ||
              c.contentType) &&
              w.setRequestHeader("Content-Type", m.contentType),
            w.setRequestHeader(
              "Accept",
              m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                ? m.accepts[m.dataTypes[0]] +
                    ("*" !== m.dataTypes[0] ? ", " + Bb + "; q=0.01" : "")
                : m.accepts["*"]
            );
          for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
          if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))
            return w.abort();
          v = "abort";
          for (l in {
            success: 1,
            error: 1,
            complete: 1,
          })
            w[l](m[l]);
          if ((e = Q(Ab, m, c, w))) {
            if (
              ((w.readyState = 1), k && o.trigger("ajaxSend", [w, m]), 2 === u)
            )
              return w;
            m.async &&
              m.timeout > 0 &&
              (i = a.setTimeout(function () {
                w.abort("timeout");
              }, m.timeout));
            try {
              (u = 1), e.send(s, d);
            } catch (x) {
              if (!(u < 2)) throw x;
              d(-1, x);
            }
          } else d(-1, "No Transport");
          return w;
        },
        getJSON: function (a, b, c) {
          return fa.get(a, b, c, "json");
        },
        getScript: function (a, b) {
          return fa.get(a, void 0, b, "script");
        },
      }),
      fa.each(["get", "post"], function (a, b) {
        fa[b] = function (a, c, d, e) {
          return (
            fa.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
            fa.ajax(
              fa.extend(
                {
                  url: a,
                  type: b,
                  dataType: e,
                  data: c,
                  success: d,
                },
                fa.isPlainObject(a) && a
              )
            )
          );
        };
      }),
      (fa._evalUrl = function (a) {
        return fa.ajax({
          url: a,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      fa.fn.extend({
        wrapAll: function (a) {
          var b;
          return fa.isFunction(a)
            ? this.each(function (b) {
                fa(this).wrapAll(a.call(this, b));
              })
            : (this[0] &&
                ((b = fa(a, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && b.insertBefore(this[0]),
                b
                  .map(function () {
                    for (var a = this; a.firstElementChild; )
                      a = a.firstElementChild;
                    return a;
                  })
                  .append(this)),
              this);
        },
        wrapInner: function (a) {
          return fa.isFunction(a)
            ? this.each(function (b) {
                fa(this).wrapInner(a.call(this, b));
              })
            : this.each(function () {
                var b = fa(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              });
        },
        wrap: function (a) {
          var b = fa.isFunction(a);
          return this.each(function (c) {
            fa(this).wrapAll(b ? a.call(this, c) : a);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              fa.nodeName(this, "body") ||
                fa(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (fa.expr.filters.hidden = function (a) {
        return !fa.expr.filters.visible(a);
      }),
      (fa.expr.filters.visible = function (a) {
        return (
          a.offsetWidth > 0 ||
          a.offsetHeight > 0 ||
          a.getClientRects().length > 0
        );
      });
    var Db = /%20/g,
      Eb = /\[\]$/,
      Fb = /\r?\n/g,
      Gb = /^(?:submit|button|image|reset|file)$/i,
      Hb = /^(?:input|select|textarea|keygen)/i;
    (fa.param = function (a, b) {
      var c,
        d = [],
        e = function (a, b) {
          (b = fa.isFunction(b) ? b() : null == b ? "" : b),
            (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      if (
        (void 0 === b && (b = fa.ajaxSettings && fa.ajaxSettings.traditional),
        fa.isArray(a) || (a.jquery && !fa.isPlainObject(a)))
      )
        fa.each(a, function () {
          e(this.name, this.value);
        });
      else for (c in a) U(c, a[c], b, e);
      return d.join("&").replace(Db, "+");
    }),
      fa.fn.extend({
        serialize: function () {
          return fa.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var a = fa.prop(this, "elements");
            return a ? fa.makeArray(a) : this;
          })
            .filter(function () {
              var a = this.type;
              return (
                this.name &&
                !fa(this).is(":disabled") &&
                Hb.test(this.nodeName) &&
                !Gb.test(a) &&
                (this.checked || !Ha.test(a))
              );
            })
            .map(function (a, b) {
              var c = fa(this).val();
              return null == c
                ? null
                : fa.isArray(c)
                ? fa.map(c, function (a) {
                    return {
                      name: b.name,
                      value: a.replace(Fb, "\r\n"),
                    };
                  })
                : {
                    name: b.name,
                    value: c.replace(Fb, "\r\n"),
                  };
            })
            .get();
        },
      }),
      (fa.ajaxSettings.xhr = function () {
        try {
          return new a.XMLHttpRequest();
        } catch (b) {}
      });
    var Ib = {
        0: 200,
        1223: 204,
      },
      Jb = fa.ajaxSettings.xhr();
    (da.cors = !!Jb && "withCredentials" in Jb),
      (da.ajax = Jb = !!Jb),
      fa.ajaxTransport(function (b) {
        var c, d;
        if (da.cors || (Jb && !b.crossDomain))
          return {
            send: function (e, f) {
              var g,
                h = b.xhr();
              if (
                (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
              )
                for (g in b.xhrFields) h[g] = b.xhrFields[g];
              b.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(b.mimeType),
                b.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              for (g in e) h.setRequestHeader(g, e[g]);
              (c = function (a) {
                return function () {
                  c &&
                    ((c =
                      d =
                      h.onload =
                      h.onerror =
                      h.onabort =
                      h.onreadystatechange =
                        null),
                    "abort" === a
                      ? h.abort()
                      : "error" === a
                      ? "number" != typeof h.status
                        ? f(0, "error")
                        : f(h.status, h.statusText)
                      : f(
                          Ib[h.status] || h.status,
                          h.statusText,
                          "text" !== (h.responseType || "text") ||
                            "string" != typeof h.responseText
                            ? {
                                binary: h.response,
                              }
                            : {
                                text: h.responseText,
                              },
                          h.getAllResponseHeaders()
                        ));
                };
              }),
                (h.onload = c()),
                (d = h.onerror = c("error")),
                void 0 !== h.onabort
                  ? (h.onabort = d)
                  : (h.onreadystatechange = function () {
                      4 === h.readyState &&
                        a.setTimeout(function () {
                          c && d();
                        });
                    }),
                (c = c("abort"));
              try {
                h.send((b.hasContent && b.data) || null);
              } catch (i) {
                if (c) throw i;
              }
            },
            abort: function () {
              c && c();
            },
          };
      }),
      fa.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: {
          script: /\b(?:java|ecma)script\b/,
        },
        converters: {
          "text script": function (a) {
            return fa.globalEval(a), a;
          },
        },
      }),
      fa.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
      }),
      fa.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
          var b, c;
          return {
            send: function (d, e) {
              (b = fa("<script>")
                .prop({
                  charset: a.scriptCharset,
                  src: a.url,
                })
                .on(
                  "load error",
                  (c = function (a) {
                    b.remove(),
                      (c = null),
                      a && e("error" === a.type ? 404 : 200, a.type);
                  })
                )),
                X.head.appendChild(b[0]);
            },
            abort: function () {
              c && c();
            },
          };
        }
      });
    var Kb = [],
      Lb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var a = Kb.pop() || fa.expando + "_" + rb++;
        return (this[a] = !0), a;
      },
    }),
      fa.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
          f,
          g,
          h =
            b.jsonp !== !1 &&
            (Lb.test(b.url)
              ? "url"
              : "string" == typeof b.data &&
                0 ===
                  (b.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Lb.test(b.data) &&
                "data");
        if (h || "jsonp" === b.dataTypes[0])
          return (
            (e = b.jsonpCallback =
              fa.isFunction(b.jsonpCallback)
                ? b.jsonpCallback()
                : b.jsonpCallback),
            h
              ? (b[h] = b[h].replace(Lb, "$1" + e))
              : b.jsonp !== !1 &&
                (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            (b.converters["script json"] = function () {
              return g || fa.error(e + " was not called"), g[0];
            }),
            (b.dataTypes[0] = "json"),
            (f = a[e]),
            (a[e] = function () {
              g = arguments;
            }),
            d.always(function () {
              void 0 === f ? fa(a).removeProp(e) : (a[e] = f),
                b[e] && ((b.jsonpCallback = c.jsonpCallback), Kb.push(e)),
                g && fa.isFunction(f) && f(g[0]),
                (g = f = void 0);
            }),
            "script"
          );
      }),
      (fa.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && ((c = b), (b = !1)), (b = b || X);
        var d = oa.exec(a),
          e = !c && [];
        return d
          ? [b.createElement(d[1])]
          : ((d = m([a], b, e)),
            e && e.length && fa(e).remove(),
            fa.merge([], d.childNodes));
      });
    var Mb = fa.fn.load;
    (fa.fn.load = function (a, b, c) {
      if ("string" != typeof a && Mb) return Mb.apply(this, arguments);
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = fa.trim(a.slice(h))), (a = a.slice(0, h))),
        fa.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          fa
            .ajax({
              url: a,
              type: e || "GET",
              dataType: "html",
              data: b,
            })
            .done(function (a) {
              (f = arguments),
                g.html(d ? fa("<div>").append(fa.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
      fa.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (a, b) {
          fa.fn[b] = function (a) {
            return this.on(b, a);
          };
        }
      ),
      (fa.expr.filters.animated = function (a) {
        return fa.grep(fa.timers, function (b) {
          return a === b.elem;
        }).length;
      }),
      (fa.offset = {
        setOffset: function (a, b, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = fa.css(a, "position"),
            l = fa(a),
            m = {};
          "static" === k && (a.style.position = "relative"),
            (h = l.offset()),
            (f = fa.css(a, "top")),
            (i = fa.css(a, "left")),
            (j =
              ("absolute" === k || "fixed" === k) &&
              (f + i).indexOf("auto") > -1),
            j
              ? ((d = l.position()), (g = d.top), (e = d.left))
              : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
            fa.isFunction(b) && (b = b.call(a, c, fa.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m);
        },
      }),
      fa.fn.extend({
        offset: function (a) {
          if (arguments.length)
            return void 0 === a
              ? this
              : this.each(function (b) {
                  fa.offset.setOffset(this, a, b);
                });
          var b,
            c,
            d = this[0],
            e = {
              top: 0,
              left: 0,
            },
            f = d && d.ownerDocument;
          if (f)
            return (
              (b = f.documentElement),
              fa.contains(b, d)
                ? ((e = d.getBoundingClientRect()),
                  (c = V(f)),
                  {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft,
                  })
                : e
            );
        },
        position: function () {
          if (this[0]) {
            var a,
              b,
              c = this[0],
              d = {
                top: 0,
                left: 0,
              };
            return (
              "fixed" === fa.css(c, "position")
                ? (b = c.getBoundingClientRect())
                : ((a = this.offsetParent()),
                  (b = this.offset()),
                  fa.nodeName(a[0], "html") || (d = a.offset()),
                  (d.top += fa.css(a[0], "borderTopWidth", !0)),
                  (d.left += fa.css(a[0], "borderLeftWidth", !0))),
              {
                top: b.top - d.top - fa.css(c, "marginTop", !0),
                left: b.left - d.left - fa.css(c, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var a = this.offsetParent;
              a && "static" === fa.css(a, "position");

            )
              a = a.offsetParent;
            return a || $a;
          });
        },
      }),
      fa.each(
        {
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset",
        },
        function (a, b) {
          var c = "pageYOffset" === b;
          fa.fn[a] = function (d) {
            return xa(
              this,
              function (a, d, e) {
                var f = V(a);
                return void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e));
              },
              a,
              d,
              arguments.length
            );
          };
        }
      ),
      fa.each(["top", "left"], function (a, b) {
        fa.cssHooks[b] = B(da.pixelPosition, function (a, c) {
          if (c)
            return (c = A(a, b)), Xa.test(c) ? fa(a).position()[b] + "px" : c;
        });
      }),
      fa.each(
        {
          Height: "height",
          Width: "width",
        },
        function (a, b) {
          fa.each(
            {
              padding: "inner" + a,
              content: b,
              "": "outer" + a,
            },
            function (c, d) {
              fa.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                  g = c || (d === !0 || e === !0 ? "margin" : "border");
                return xa(
                  this,
                  function (b, c, d) {
                    var e;
                    return fa.isWindow(b)
                      ? b.document.documentElement["client" + a]
                      : 9 === b.nodeType
                      ? ((e = b.documentElement),
                        Math.max(
                          b.body["scroll" + a],
                          e["scroll" + a],
                          b.body["offset" + a],
                          e["offset" + a],
                          e["client" + a]
                        ))
                      : void 0 === d
                      ? fa.css(b, c, g)
                      : fa.style(b, c, d, g);
                  },
                  b,
                  f ? d : void 0,
                  f,
                  null
                );
              };
            }
          );
        }
      ),
      fa.fn.extend({
        bind: function (a, b, c) {
          return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
          return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
          return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
          return 1 === arguments.length
            ? this.off(a, "**")
            : this.off(b, a || "**", c);
        },
        size: function () {
          return this.length;
        },
      }),
      (fa.fn.andSelf = fa.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return fa;
        });
    var Nb = a.jQuery,
      Ob = a.$;
    return (
      (fa.noConflict = function (b) {
        return (
          a.$ === fa && (a.$ = Ob), b && a.jQuery === fa && (a.jQuery = Nb), fa
        );
      }),
      b || (a.jQuery = a.$ = fa),
      fa
    );
  }),
  function () {
    function a(a) {
      function b(b, c, d, e, f, g) {
        for (; f >= 0 && f < g; f += a) {
          var h = e ? e[f] : f;
          d = c(d, b[h], h, b);
        }
        return d;
      }
      return function (c, d, e, f) {
        d = t(d, f, 4);
        var g = !A(c) && s.keys(c),
          h = (g || c).length,
          i = a > 0 ? 0 : h - 1;
        return (
          arguments.length < 3 && ((e = c[g ? g[i] : i]), (i += a)),
          b(c, d, e, g, i, h)
        );
      };
    }

    function b(a) {
      return function (b, c, d) {
        c = u(c, d);
        for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && f < e; f += a)
          if (c(b[f], f, b)) return f;
        return -1;
      };
    }

    function c(a, b, c) {
      return function (d, e, f) {
        var g = 0,
          h = z(d);
        if ("number" == typeof f)
          a > 0
            ? (g = f >= 0 ? f : Math.max(f + h, g))
            : (h = f >= 0 ? Math.min(f + 1, h) : f + h + 1);
        else if (c && f && h) return (f = c(d, e)), d[f] === e ? f : -1;
        if (e !== e)
          return (f = b(k.call(d, g, h), s.isNaN)), f >= 0 ? f + g : -1;
        for (f = a > 0 ? g : h - 1; f >= 0 && f < h; f += a)
          if (d[f] === e) return f;
        return -1;
      };
    }

    function d(a, b) {
      var c = F.length,
        d = a.constructor,
        e = (s.isFunction(d) && d.prototype) || h,
        f = "constructor";
      for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--; )
        (f = F[c]), f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f);
    }
    var e = this,
      f = e._,
      g = Array.prototype,
      h = Object.prototype,
      i = Function.prototype,
      j = g.push,
      k = g.slice,
      l = h.toString,
      m = h.hasOwnProperty,
      n = Array.isArray,
      o = Object.keys,
      p = i.bind,
      q = Object.create,
      r = function () {},
      s = function (a) {
        return a instanceof s
          ? a
          : this instanceof s
          ? void (this._wrapped = a)
          : new s(a);
      };
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = s),
        (exports._ = s))
      : (e._ = s),
      (s.VERSION = "1.8.3");
    var t = function (a, b, c) {
        if (void 0 === b) return a;
        switch (null == c ? 3 : c) {
          case 1:
            return function (c) {
              return a.call(b, c);
            };
          case 2:
            return function (c, d) {
              return a.call(b, c, d);
            };
          case 3:
            return function (c, d, e) {
              return a.call(b, c, d, e);
            };
          case 4:
            return function (c, d, e, f) {
              return a.call(b, c, d, e, f);
            };
        }
        return function () {
          return a.apply(b, arguments);
        };
      },
      u = function (a, b, c) {
        return null == a
          ? s.identity
          : s.isFunction(a)
          ? t(a, b, c)
          : s.isObject(a)
          ? s.matcher(a)
          : s.property(a);
      };
    s.iteratee = function (a, b) {
      return u(a, b, 1 / 0);
    };
    var v = function (a, b) {
        return function (c) {
          var d = arguments.length;
          if (d < 2 || null == c) return c;
          for (var e = 1; e < d; e++)
            for (
              var f = arguments[e], g = a(f), h = g.length, i = 0;
              i < h;
              i++
            ) {
              var j = g[i];
              (b && void 0 !== c[j]) || (c[j] = f[j]);
            }
          return c;
        };
      },
      w = function (a) {
        if (!s.isObject(a)) return {};
        if (q) return q(a);
        r.prototype = a;
        var b = new r();
        return (r.prototype = null), b;
      },
      x = function (a) {
        return function (b) {
          return null == b ? void 0 : b[a];
        };
      },
      y = Math.pow(2, 53) - 1,
      z = x("length"),
      A = function (a) {
        var b = z(a);
        return "number" == typeof b && b >= 0 && b <= y;
      };
    (s.each = s.forEach =
      function (a, b, c) {
        b = t(b, c);
        var d, e;
        if (A(a)) for (d = 0, e = a.length; d < e; d++) b(a[d], d, a);
        else {
          var f = s.keys(a);
          for (d = 0, e = f.length; d < e; d++) b(a[f[d]], f[d], a);
        }
        return a;
      }),
      (s.map = s.collect =
        function (a, b, c) {
          b = u(b, c);
          for (
            var d = !A(a) && s.keys(a),
              e = (d || a).length,
              f = Array(e),
              g = 0;
            g < e;
            g++
          ) {
            var h = d ? d[g] : g;
            f[g] = b(a[h], h, a);
          }
          return f;
        }),
      (s.reduce = s.foldl = s.inject = a(1)),
      (s.reduceRight = s.foldr = a(-1)),
      (s.find = s.detect =
        function (a, b, c) {
          var d;
          if (
            ((d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c)),
            void 0 !== d && d !== -1)
          )
            return a[d];
        }),
      (s.filter = s.select =
        function (a, b, c) {
          var d = [];
          return (
            (b = u(b, c)),
            s.each(a, function (a, c, e) {
              b(a, c, e) && d.push(a);
            }),
            d
          );
        }),
      (s.reject = function (a, b, c) {
        return s.filter(a, s.negate(u(b)), c);
      }),
      (s.every = s.all =
        function (a, b, c) {
          b = u(b, c);
          for (
            var d = !A(a) && s.keys(a), e = (d || a).length, f = 0;
            f < e;
            f++
          ) {
            var g = d ? d[f] : f;
            if (!b(a[g], g, a)) return !1;
          }
          return !0;
        }),
      (s.some = s.any =
        function (a, b, c) {
          b = u(b, c);
          for (
            var d = !A(a) && s.keys(a), e = (d || a).length, f = 0;
            f < e;
            f++
          ) {
            var g = d ? d[f] : f;
            if (b(a[g], g, a)) return !0;
          }
          return !1;
        }),
      (s.contains =
        s.includes =
        s.include =
          function (a, b, c, d) {
            return (
              A(a) || (a = s.values(a)),
              ("number" != typeof c || d) && (c = 0),
              s.indexOf(a, b, c) >= 0
            );
          }),
      (s.invoke = function (a, b) {
        var c = k.call(arguments, 2),
          d = s.isFunction(b);
        return s.map(a, function (a) {
          var e = d ? b : a[b];
          return null == e ? e : e.apply(a, c);
        });
      }),
      (s.pluck = function (a, b) {
        return s.map(a, s.property(b));
      }),
      (s.where = function (a, b) {
        return s.filter(a, s.matcher(b));
      }),
      (s.findWhere = function (a, b) {
        return s.find(a, s.matcher(b));
      }),
      (s.max = function (a, b, c) {
        var d,
          e,
          f = -(1 / 0),
          g = -(1 / 0);
        if (null == b && null != a) {
          a = A(a) ? a : s.values(a);
          for (var h = 0, i = a.length; h < i; h++)
            (d = a[h]), d > f && (f = d);
        } else
          (b = u(b, c)),
            s.each(a, function (a, c, d) {
              (e = b(a, c, d)),
                (e > g || (e === -(1 / 0) && f === -(1 / 0))) &&
                  ((f = a), (g = e));
            });
        return f;
      }),
      (s.min = function (a, b, c) {
        var d,
          e,
          f = 1 / 0,
          g = 1 / 0;
        if (null == b && null != a) {
          a = A(a) ? a : s.values(a);
          for (var h = 0, i = a.length; h < i; h++)
            (d = a[h]), d < f && (f = d);
        } else
          (b = u(b, c)),
            s.each(a, function (a, c, d) {
              (e = b(a, c, d)),
                (e < g || (e === 1 / 0 && f === 1 / 0)) && ((f = a), (g = e));
            });
        return f;
      }),
      (s.shuffle = function (a) {
        for (
          var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0;
          f < d;
          f++
        )
          (b = s.random(0, f)), b !== f && (e[f] = e[b]), (e[b] = c[f]);
        return e;
      }),
      (s.sample = function (a, b, c) {
        return null == b || c
          ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)])
          : s.shuffle(a).slice(0, Math.max(0, b));
      }),
      (s.sortBy = function (a, b, c) {
        return (
          (b = u(b, c)),
          s.pluck(
            s
              .map(a, function (a, c, d) {
                return {
                  value: a,
                  index: c,
                  criteria: b(a, c, d),
                };
              })
              .sort(function (a, b) {
                var c = a.criteria,
                  d = b.criteria;
                if (c !== d) {
                  if (c > d || void 0 === c) return 1;
                  if (c < d || void 0 === d) return -1;
                }
                return a.index - b.index;
              }),
            "value"
          )
        );
      });
    var B = function (a) {
      return function (b, c, d) {
        var e = {};
        return (
          (c = u(c, d)),
          s.each(b, function (d, f) {
            var g = c(d, f, b);
            a(e, d, g);
          }),
          e
        );
      };
    };
    (s.groupBy = B(function (a, b, c) {
      s.has(a, c) ? a[c].push(b) : (a[c] = [b]);
    })),
      (s.indexBy = B(function (a, b, c) {
        a[c] = b;
      })),
      (s.countBy = B(function (a, b, c) {
        s.has(a, c) ? a[c]++ : (a[c] = 1);
      })),
      (s.toArray = function (a) {
        return a
          ? s.isArray(a)
            ? k.call(a)
            : A(a)
            ? s.map(a, s.identity)
            : s.values(a)
          : [];
      }),
      (s.size = function (a) {
        return null == a ? 0 : A(a) ? a.length : s.keys(a).length;
      }),
      (s.partition = function (a, b, c) {
        b = u(b, c);
        var d = [],
          e = [];
        return (
          s.each(a, function (a, c, f) {
            (b(a, c, f) ? d : e).push(a);
          }),
          [d, e]
        );
      }),
      (s.first =
        s.head =
        s.take =
          function (a, b, c) {
            if (null != a)
              return null == b || c ? a[0] : s.initial(a, a.length - b);
          }),
      (s.initial = function (a, b, c) {
        return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)));
      }),
      (s.last = function (a, b, c) {
        if (null != a)
          return null == b || c
            ? a[a.length - 1]
            : s.rest(a, Math.max(0, a.length - b));
      }),
      (s.rest =
        s.tail =
        s.drop =
          function (a, b, c) {
            return k.call(a, null == b || c ? 1 : b);
          }),
      (s.compact = function (a) {
        return s.filter(a, s.identity);
      });
    var C = function (a, b, c, d) {
      for (var e = [], f = 0, g = d || 0, h = z(a); g < h; g++) {
        var i = a[g];
        if (A(i) && (s.isArray(i) || s.isArguments(i))) {
          b || (i = C(i, b, c));
          var j = 0,
            k = i.length;
          for (e.length += k; j < k; ) e[f++] = i[j++];
        } else c || (e[f++] = i);
      }
      return e;
    };
    (s.flatten = function (a, b) {
      return C(a, b, !1);
    }),
      (s.without = function (a) {
        return s.difference(a, k.call(arguments, 1));
      }),
      (s.uniq = s.unique =
        function (a, b, c, d) {
          s.isBoolean(b) || ((d = c), (c = b), (b = !1)),
            null != c && (c = u(c, d));
          for (var e = [], f = [], g = 0, h = z(a); g < h; g++) {
            var i = a[g],
              j = c ? c(i, g, a) : i;
            b
              ? ((g && f === j) || e.push(i), (f = j))
              : c
              ? s.contains(f, j) || (f.push(j), e.push(i))
              : s.contains(e, i) || e.push(i);
          }
          return e;
        }),
      (s.union = function () {
        return s.uniq(C(arguments, !0, !0));
      }),
      (s.intersection = function (a) {
        for (var b = [], c = arguments.length, d = 0, e = z(a); d < e; d++) {
          var f = a[d];
          if (!s.contains(b, f)) {
            for (var g = 1; g < c && s.contains(arguments[g], f); g++);
            g === c && b.push(f);
          }
        }
        return b;
      }),
      (s.difference = function (a) {
        var b = C(arguments, !0, !0, 1);
        return s.filter(a, function (a) {
          return !s.contains(b, a);
        });
      }),
      (s.zip = function () {
        return s.unzip(arguments);
      }),
      (s.unzip = function (a) {
        for (
          var b = (a && s.max(a, z).length) || 0, c = Array(b), d = 0;
          d < b;
          d++
        )
          c[d] = s.pluck(a, d);
        return c;
      }),
      (s.object = function (a, b) {
        for (var c = {}, d = 0, e = z(a); d < e; d++)
          b ? (c[a[d]] = b[d]) : (c[a[d][0]] = a[d][1]);
        return c;
      }),
      (s.findIndex = b(1)),
      (s.findLastIndex = b(-1)),
      (s.sortedIndex = function (a, b, c, d) {
        c = u(c, d, 1);
        for (var e = c(b), f = 0, g = z(a); f < g; ) {
          var h = Math.floor((f + g) / 2);
          c(a[h]) < e ? (f = h + 1) : (g = h);
        }
        return f;
      }),
      (s.indexOf = c(1, s.findIndex, s.sortedIndex)),
      (s.lastIndexOf = c(-1, s.findLastIndex)),
      (s.range = function (a, b, c) {
        null == b && ((b = a || 0), (a = 0)), (c = c || 1);
        for (
          var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0;
          f < d;
          f++, a += c
        )
          e[f] = a;
        return e;
      });
    var D = function (a, b, c, d, e) {
      if (!(d instanceof b)) return a.apply(c, e);
      var f = w(a.prototype),
        g = a.apply(f, e);
      return s.isObject(g) ? g : f;
    };
    (s.bind = function (a, b) {
      if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
      if (!s.isFunction(a))
        throw new TypeError("Bind must be called on a function");
      var c = k.call(arguments, 2),
        d = function () {
          return D(a, d, b, this, c.concat(k.call(arguments)));
        };
      return d;
    }),
      (s.partial = function (a) {
        var b = k.call(arguments, 1),
          c = function () {
            for (var d = 0, e = b.length, f = Array(e), g = 0; g < e; g++)
              f[g] = b[g] === s ? arguments[d++] : b[g];
            for (; d < arguments.length; ) f.push(arguments[d++]);
            return D(a, c, this, this, f);
          };
        return c;
      }),
      (s.bindAll = function (a) {
        var b,
          c,
          d = arguments.length;
        if (d <= 1) throw new Error("bindAll must be passed function names");
        for (b = 1; b < d; b++) (c = arguments[b]), (a[c] = s.bind(a[c], a));
        return a;
      }),
      (s.memoize = function (a, b) {
        var c = function (d) {
          var e = c.cache,
            f = "" + (b ? b.apply(this, arguments) : d);
          return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f];
        };
        return (c.cache = {}), c;
      }),
      (s.delay = function (a, b) {
        var c = k.call(arguments, 2);
        return setTimeout(function () {
          return a.apply(null, c);
        }, b);
      }),
      (s.defer = s.partial(s.delay, s, 1)),
      (s.throttle = function (a, b, c) {
        var d,
          e,
          f,
          g = null,
          h = 0;
        c || (c = {});
        var i = function () {
          (h = c.leading === !1 ? 0 : s.now()),
            (g = null),
            (f = a.apply(d, e)),
            g || (d = e = null);
        };
        return function () {
          var j = s.now();
          h || c.leading !== !1 || (h = j);
          var k = b - (j - h);
          return (
            (d = this),
            (e = arguments),
            k <= 0 || k > b
              ? (g && (clearTimeout(g), (g = null)),
                (h = j),
                (f = a.apply(d, e)),
                g || (d = e = null))
              : g || c.trailing === !1 || (g = setTimeout(i, k)),
            f
          );
        };
      }),
      (s.debounce = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i = function () {
            var j = s.now() - g;
            j < b && j >= 0
              ? (d = setTimeout(i, b - j))
              : ((d = null), c || ((h = a.apply(f, e)), d || (f = e = null)));
          };
        return function () {
          (f = this), (e = arguments), (g = s.now());
          var j = c && !d;
          return (
            d || (d = setTimeout(i, b)),
            j && ((h = a.apply(f, e)), (f = e = null)),
            h
          );
        };
      }),
      (s.wrap = function (a, b) {
        return s.partial(b, a);
      }),
      (s.negate = function (a) {
        return function () {
          return !a.apply(this, arguments);
        };
      }),
      (s.compose = function () {
        var a = arguments,
          b = a.length - 1;
        return function () {
          for (var c = b, d = a[b].apply(this, arguments); c--; )
            d = a[c].call(this, d);
          return d;
        };
      }),
      (s.after = function (a, b) {
        return function () {
          if (--a < 1) return b.apply(this, arguments);
        };
      }),
      (s.before = function (a, b) {
        var c;
        return function () {
          return (
            --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c
          );
        };
      }),
      (s.once = s.partial(s.before, 2));
    var E = !{
        toString: null,
      }.propertyIsEnumerable("toString"),
      F = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ];
    (s.keys = function (a) {
      if (!s.isObject(a)) return [];
      if (o) return o(a);
      var b = [];
      for (var c in a) s.has(a, c) && b.push(c);
      return E && d(a, b), b;
    }),
      (s.allKeys = function (a) {
        if (!s.isObject(a)) return [];
        var b = [];
        for (var c in a) b.push(c);
        return E && d(a, b), b;
      }),
      (s.values = function (a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)
          d[e] = a[b[e]];
        return d;
      }),
      (s.mapObject = function (a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; h < f; h++)
          (d = e[h]), (g[d] = b(a[d], d, a));
        return g;
      }),
      (s.pairs = function (a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)
          d[e] = [b[e], a[b[e]]];
        return d;
      }),
      (s.invert = function (a) {
        for (var b = {}, c = s.keys(a), d = 0, e = c.length; d < e; d++)
          b[a[c[d]]] = c[d];
        return b;
      }),
      (s.functions = s.methods =
        function (a) {
          var b = [];
          for (var c in a) s.isFunction(a[c]) && b.push(c);
          return b.sort();
        }),
      (s.extend = v(s.allKeys)),
      (s.extendOwn = s.assign = v(s.keys)),
      (s.findKey = function (a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = 0, g = e.length; f < g; f++)
          if (((d = e[f]), b(a[d], d, a))) return d;
      }),
      (s.pick = function (a, b, c) {
        var d,
          e,
          f = {},
          g = a;
        if (null == g) return f;
        s.isFunction(b)
          ? ((e = s.allKeys(g)), (d = t(b, c)))
          : ((e = C(arguments, !1, !1, 1)),
            (d = function (a, b, c) {
              return b in c;
            }),
            (g = Object(g)));
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h],
            k = g[j];
          d(k, j, g) && (f[j] = k);
        }
        return f;
      }),
      (s.omit = function (a, b, c) {
        if (s.isFunction(b)) b = s.negate(b);
        else {
          var d = s.map(C(arguments, !1, !1, 1), String);
          b = function (a, b) {
            return !s.contains(d, b);
          };
        }
        return s.pick(a, b, c);
      }),
      (s.defaults = v(s.allKeys, !0)),
      (s.create = function (a, b) {
        var c = w(a);
        return b && s.extendOwn(c, b), c;
      }),
      (s.clone = function (a) {
        return s.isObject(a) ? (s.isArray(a) ? a.slice() : s.extend({}, a)) : a;
      }),
      (s.tap = function (a, b) {
        return b(a), a;
      }),
      (s.isMatch = function (a, b) {
        var c = s.keys(b),
          d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), f = 0; f < d; f++) {
          var g = c[f];
          if (b[g] !== e[g] || !(g in e)) return !1;
        }
        return !0;
      });
    var G = function (a, b, c, d) {
      if (a === b) return 0 !== a || 1 / a === 1 / b;
      if (null == a || null == b) return a === b;
      a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
      var e = l.call(a);
      if (e !== l.call(b)) return !1;
      switch (e) {
        case "[object RegExp]":
        case "[object String]":
          return "" + a == "" + b;
        case "[object Number]":
          return +a !== +a
            ? +b !== +b
            : 0 === +a
            ? 1 / +a === 1 / b
            : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
          return +a === +b;
      }
      var f = "[object Array]" === e;
      if (!f) {
        if ("object" != typeof a || "object" != typeof b) return !1;
        var g = a.constructor,
          h = b.constructor;
        if (
          g !== h &&
          !(
            s.isFunction(g) &&
            g instanceof g &&
            s.isFunction(h) &&
            h instanceof h
          ) &&
          "constructor" in a &&
          "constructor" in b
        )
          return !1;
      }
      (c = c || []), (d = d || []);
      for (var i = c.length; i--; ) if (c[i] === a) return d[i] === b;
      if ((c.push(a), d.push(b), f)) {
        if (((i = a.length), i !== b.length)) return !1;
        for (; i--; ) if (!G(a[i], b[i], c, d)) return !1;
      } else {
        var j,
          k = s.keys(a);
        if (((i = k.length), s.keys(b).length !== i)) return !1;
        for (; i--; )
          if (((j = k[i]), !s.has(b, j) || !G(a[j], b[j], c, d))) return !1;
      }
      return c.pop(), d.pop(), !0;
    };
    (s.isEqual = function (a, b) {
      return G(a, b);
    }),
      (s.isEmpty = function (a) {
        return (
          null == a ||
          (A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a))
            ? 0 === a.length
            : 0 === s.keys(a).length)
        );
      }),
      (s.isElement = function (a) {
        return !(!a || 1 !== a.nodeType);
      }),
      (s.isArray =
        n ||
        function (a) {
          return "[object Array]" === l.call(a);
        }),
      (s.isObject = function (a) {
        var b = typeof a;
        return "function" === b || ("object" === b && !!a);
      }),
      s.each(
        [
          "Arguments",
          "Function",
          "String",
          "Number",
          "Date",
          "RegExp",
          "Error",
        ],
        function (a) {
          s["is" + a] = function (b) {
            return l.call(b) === "[object " + a + "]";
          };
        }
      ),
      s.isArguments(arguments) ||
        (s.isArguments = function (a) {
          return s.has(a, "callee");
        }),
      "function" != typeof /./ &&
        "object" != typeof Int8Array &&
        (s.isFunction = function (a) {
          return "function" == typeof a || !1;
        }),
      (s.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a));
      }),
      (s.isNaN = function (a) {
        return s.isNumber(a) && a !== +a;
      }),
      (s.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" === l.call(a);
      }),
      (s.isNull = function (a) {
        return null === a;
      }),
      (s.isUndefined = function (a) {
        return void 0 === a;
      }),
      (s.has = function (a, b) {
        return null != a && m.call(a, b);
      }),
      (s.noConflict = function () {
        return (e._ = f), this;
      }),
      (s.identity = function (a) {
        return a;
      }),
      (s.constant = function (a) {
        return function () {
          return a;
        };
      }),
      (s.noop = function () {}),
      (s.property = x),
      (s.propertyOf = function (a) {
        return null == a
          ? function () {}
          : function (b) {
              return a[b];
            };
      }),
      (s.matcher = s.matches =
        function (a) {
          return (
            (a = s.extendOwn({}, a)),
            function (b) {
              return s.isMatch(b, a);
            }
          );
        }),
      (s.times = function (a, b, c) {
        var d = Array(Math.max(0, a));
        b = t(b, c, 1);
        for (var e = 0; e < a; e++) d[e] = b(e);
        return d;
      }),
      (s.random = function (a, b) {
        return (
          null == b && ((b = a), (a = 0)),
          a + Math.floor(Math.random() * (b - a + 1))
        );
      }),
      (s.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var H = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      },
      I = s.invert(H),
      J = function (a) {
        var b = function (b) {
            return a[b];
          },
          c = "(?:" + s.keys(a).join("|") + ")",
          d = RegExp(c),
          e = RegExp(c, "g");
        return function (a) {
          return (a = null == a ? "" : "" + a), d.test(a) ? a.replace(e, b) : a;
        };
      };
    (s.escape = J(H)),
      (s.unescape = J(I)),
      (s.result = function (a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d;
      });
    var K = 0;
    (s.uniqueId = function (a) {
      var b = ++K + "";
      return a ? a + b : b;
    }),
      (s.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    var L = /(.)^/,
      M = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      N = /\\|'|\r|\n|\u2028|\u2029/g,
      O = function (a) {
        return "\\" + M[a];
      };
    (s.template = function (a, b, c) {
      !b && c && (b = c), (b = s.defaults({}, b, s.templateSettings));
      var d = RegExp(
          [
            (b.escape || L).source,
            (b.interpolate || L).source,
            (b.evaluate || L).source,
          ].join("|") + "|$",
          "g"
        ),
        e = 0,
        f = "__p+='";
      a.replace(d, function (b, c, d, g, h) {
        return (
          (f += a.slice(e, h).replace(N, O)),
          (e = h + b.length),
          c
            ? (f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'")
            : d
            ? (f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'")
            : g && (f += "';\n" + g + "\n__p+='"),
          b
        );
      }),
        (f += "';\n"),
        b.variable || (f = "with(obj||{}){\n" + f + "}\n"),
        (f =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          f +
          "return __p;\n");
      try {
        var g = new Function(b.variable || "obj", "_", f);
      } catch (h) {
        throw ((h.source = f), h);
      }
      var i = function (a) {
          return g.call(this, a, s);
        },
        j = b.variable || "obj";
      return (i.source = "function(" + j + "){\n" + f + "}"), i;
    }),
      (s.chain = function (a) {
        var b = s(a);
        return (b._chain = !0), b;
      });
    var P = function (a, b) {
      return a._chain ? s(b).chain() : b;
    };
    (s.mixin = function (a) {
      s.each(s.functions(a), function (b) {
        var c = (s[b] = a[b]);
        s.prototype[b] = function () {
          var a = [this._wrapped];
          return j.apply(a, arguments), P(this, c.apply(s, a));
        };
      });
    }),
      s.mixin(s),
      s.each(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (a) {
          var b = g[a];
          s.prototype[a] = function () {
            var c = this._wrapped;
            return (
              b.apply(c, arguments),
              ("shift" !== a && "splice" !== a) ||
                0 !== c.length ||
                delete c[0],
              P(this, c)
            );
          };
        }
      ),
      s.each(["concat", "join", "slice"], function (a) {
        var b = g[a];
        s.prototype[a] = function () {
          return P(this, b.apply(this._wrapped, arguments));
        };
      }),
      (s.prototype.value = function () {
        return this._wrapped;
      }),
      (s.prototype.valueOf = s.prototype.toJSON = s.prototype.value),
      (s.prototype.toString = function () {
        return "" + this._wrapped;
      }),
      "function" == typeof define &&
        define.amd &&
        define("underscore", [], function () {
          return s;
        });
  }.call(this),
  (function (a, b) {
    if ("function" == typeof define && define.amd)
      define("backbone.original", [
        "underscore",
        "jquery",
        "exports",
      ], function (c, d, e) {
        a.Backbone = b(a, e, c, d);
      });
    else if ("undefined" != typeof exports) {
      var c = require("underscore");
      b(a, exports, c);
    } else a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$);
  })(this, function (a, b, c, d) {
    var e = a.Backbone,
      f = [],
      g = (f.push, f.slice);
    f.splice;
    (b.VERSION = "1.1.2"),
      (b.$ = d),
      (b.noConflict = function () {
        return (a.Backbone = e), this;
      }),
      (b.emulateHTTP = !1),
      (b.emulateJSON = !1);
    var h = (b.Events = {
        on: function (a, b, c) {
          if (!j(this, "on", a, [b, c]) || !b) return this;
          this._events || (this._events = {});
          var d = this._events[a] || (this._events[a] = []);
          return (
            d.push({
              callback: b,
              context: c,
              ctx: c || this,
            }),
            this
          );
        },
        once: function (a, b, d) {
          if (!j(this, "once", a, [b, d]) || !b) return this;
          var e = this,
            f = c.once(function () {
              e.off(a, f), b.apply(this, arguments);
            });
          return (f._callback = b), this.on(a, f, d);
        },
        off: function (a, b, d) {
          var e, f, g, h, i, k, l, m;
          if (!this._events || !j(this, "off", a, [b, d])) return this;
          if (!a && !b && !d) return (this._events = void 0), this;
          for (
            h = a ? [a] : c.keys(this._events), i = 0, k = h.length;
            i < k;
            i++
          )
            if (((a = h[i]), (g = this._events[a]))) {
              if (((this._events[a] = e = []), b || d))
                for (l = 0, m = g.length; l < m; l++)
                  (f = g[l]),
                    ((b && b !== f.callback && b !== f.callback._callback) ||
                      (d && d !== f.context)) &&
                      e.push(f);
              e.length || delete this._events[a];
            }
          return this;
        },
        trigger: function (a) {
          if (!this._events) return this;
          var b = g.call(arguments, 1);
          if (!j(this, "trigger", a, b)) return this;
          var c = this._events[a],
            d = this._events.all;
          return c && k(c, b), d && k(d, arguments), this;
        },
        stopListening: function (a, b, d) {
          var e = this._listeningTo;
          if (!e) return this;
          var f = !b && !d;
          d || "object" != typeof b || (d = this),
            a && ((e = {})[a._listenId] = a);
          for (var g in e)
            (a = e[g]),
              a.off(b, d, this),
              (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
          return this;
        },
      }),
      i = /\s+/,
      j = function (a, b, c, d) {
        if (!c) return !0;
        if ("object" == typeof c) {
          for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
          return !1;
        }
        if (i.test(c)) {
          for (var f = c.split(i), g = 0, h = f.length; g < h; g++)
            a[b].apply(a, [f[g]].concat(d));
          return !1;
        }
        return !0;
      },
      k = function (a, b) {
        var c,
          d = -1,
          e = a.length,
          f = b[0],
          g = b[1],
          h = b[2];
        switch (b.length) {
          case 0:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx);
            return;
          case 1:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f);
            return;
          case 2:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f, g);
            return;
          case 3:
            for (; ++d < e; ) (c = a[d]).callback.call(c.ctx, f, g, h);
            return;
          default:
            for (; ++d < e; ) (c = a[d]).callback.apply(c.ctx, b);
            return;
        }
      },
      l = {
        listenTo: "on",
        listenToOnce: "once",
      };
    c.each(l, function (a, b) {
      h[b] = function (b, d, e) {
        var f = this._listeningTo || (this._listeningTo = {}),
          g = b._listenId || (b._listenId = c.uniqueId("l"));
        return (
          (f[g] = b),
          e || "object" != typeof d || (e = this),
          b[a](d, e, this),
          this
        );
      };
    }),
      (h.bind = h.on),
      (h.unbind = h.off),
      c.extend(b, h);
    var m = (b.Model = function (a, b) {
      var d = a || {};
      b || (b = {}),
        (this.cid = c.uniqueId("c")),
        (this.attributes = {}),
        b.collection && (this.collection = b.collection),
        b.parse && (d = this.parse(d, b) || {}),
        (d = c.defaults({}, d, c.result(this, "defaults"))),
        this.set(d, b),
        (this.changed = {}),
        this.initialize.apply(this, arguments);
    });
    c.extend(m.prototype, h, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      initialize: function () {},
      toJSON: function (a) {
        return c.clone(this.attributes);
      },
      sync: function () {
        return b.sync.apply(this, arguments);
      },
      get: function (a) {
        return this.attributes[a];
      },
      escape: function (a) {
        return c.escape(this.get(a));
      },
      has: function (a) {
        return null != this.get(a);
      },
      set: function (a, b, d) {
        var e, f, g, h, i, j, k, l;
        if (null == a) return this;
        if (
          ("object" == typeof a ? ((f = a), (d = b)) : ((f = {})[a] = b),
          d || (d = {}),
          !this._validate(f, d))
        )
          return !1;
        (g = d.unset),
          (i = d.silent),
          (h = []),
          (j = this._changing),
          (this._changing = !0),
          j ||
            ((this._previousAttributes = c.clone(this.attributes)),
            (this.changed = {})),
          (l = this.attributes),
          (k = this._previousAttributes),
          this.idAttribute in f && (this.id = f[this.idAttribute]);
        for (e in f)
          (b = f[e]),
            c.isEqual(l[e], b) || h.push(e),
            c.isEqual(k[e], b) ? delete this.changed[e] : (this.changed[e] = b),
            g ? delete l[e] : (l[e] = b);
        if (!i) {
          h.length && (this._pending = d);
          for (var m = 0, n = h.length; m < n; m++)
            this.trigger("change:" + h[m], this, l[h[m]], d);
        }
        if (j) return this;
        if (!i)
          for (; this._pending; )
            (d = this._pending),
              (this._pending = !1),
              this.trigger("change", this, d);
        return (this._pending = !1), (this._changing = !1), this;
      },
      unset: function (a, b) {
        return this.set(
          a,
          void 0,
          c.extend({}, b, {
            unset: !0,
          })
        );
      },
      clear: function (a) {
        var b = {};
        for (var d in this.attributes) b[d] = void 0;
        return this.set(
          b,
          c.extend({}, a, {
            unset: !0,
          })
        );
      },
      hasChanged: function (a) {
        return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a);
      },
      changedAttributes: function (a) {
        if (!a) return !!this.hasChanged() && c.clone(this.changed);
        var b,
          d = !1,
          e = this._changing ? this._previousAttributes : this.attributes;
        for (var f in a)
          c.isEqual(e[f], (b = a[f])) || ((d || (d = {}))[f] = b);
        return d;
      },
      previous: function (a) {
        return null != a && this._previousAttributes
          ? this._previousAttributes[a]
          : null;
      },
      previousAttributes: function () {
        return c.clone(this._previousAttributes);
      },
      fetch: function (a) {
        (a = a ? c.clone(a) : {}), void 0 === a.parse && (a.parse = !0);
        var b = this,
          d = a.success;
        return (
          (a.success = function (c) {
            return (
              !!b.set(b.parse(c, a), a) &&
              (d && d(b, c, a), void b.trigger("sync", b, c, a))
            );
          }),
          L(this, a),
          this.sync("read", this, a)
        );
      },
      save: function (a, b, d) {
        var e,
          f,
          g,
          h = this.attributes;
        if (
          (null == a || "object" == typeof a
            ? ((e = a), (d = b))
            : ((e = {})[a] = b),
          (d = c.extend(
            {
              validate: !0,
            },
            d
          )),
          e && !d.wait)
        ) {
          if (!this.set(e, d)) return !1;
        } else if (!this._validate(e, d)) return !1;
        e && d.wait && (this.attributes = c.extend({}, h, e)),
          void 0 === d.parse && (d.parse = !0);
        var i = this,
          j = d.success;
        return (
          (d.success = function (a) {
            i.attributes = h;
            var b = i.parse(a, d);
            return (
              d.wait && (b = c.extend(e || {}, b)),
              !(c.isObject(b) && !i.set(b, d)) &&
                (j && j(i, a, d), void i.trigger("sync", i, a, d))
            );
          }),
          L(this, d),
          (f = this.isNew() ? "create" : d.patch ? "patch" : "update"),
          "patch" === f && (d.attrs = e),
          (g = this.sync(f, this, d)),
          e && d.wait && (this.attributes = h),
          g
        );
      },
      destroy: function (a) {
        a = a ? c.clone(a) : {};
        var b = this,
          d = a.success,
          e = function () {
            b.trigger("destroy", b, b.collection, a);
          };
        if (
          ((a.success = function (c) {
            (a.wait || b.isNew()) && e(),
              d && d(b, c, a),
              b.isNew() || b.trigger("sync", b, c, a);
          }),
          this.isNew())
        )
          return a.success(), !1;
        L(this, a);
        var f = this.sync("delete", this, a);
        return a.wait || e(), f;
      },
      url: function () {
        var a =
          c.result(this, "urlRoot") || c.result(this.collection, "url") || K();
        return this.isNew()
          ? a
          : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id);
      },
      parse: function (a, b) {
        return a;
      },
      clone: function () {
        return new this.constructor(this.attributes);
      },
      isNew: function () {
        return !this.has(this.idAttribute);
      },
      isValid: function (a) {
        return this._validate(
          {},
          c.extend(a || {}, {
            validate: !0,
          })
        );
      },
      _validate: function (a, b) {
        if (!b.validate || !this.validate) return !0;
        a = c.extend({}, this.attributes, a);
        var d = (this.validationError = this.validate(a, b) || null);
        return (
          !d ||
          (this.trigger(
            "invalid",
            this,
            d,
            c.extend(b, {
              validationError: d,
            })
          ),
          !1)
        );
      },
    });
    var n = ["keys", "values", "pairs", "invert", "pick", "omit"];
    c.each(n, function (a) {
      m.prototype[a] = function () {
        var b = g.call(arguments);
        return b.unshift(this.attributes), c[a].apply(c, b);
      };
    });
    var o = (b.Collection = function (a, b) {
        b || (b = {}),
          b.model && (this.model = b.model),
          void 0 !== b.comparator && (this.comparator = b.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          a &&
            this.reset(
              a,
              c.extend(
                {
                  silent: !0,
                },
                b
              )
            );
      }),
      p = {
        add: !0,
        remove: !0,
        merge: !0,
      },
      q = {
        add: !0,
        remove: !1,
      };
    c.extend(o.prototype, h, {
      model: m,
      initialize: function () {},
      toJSON: function (a) {
        return this.map(function (b) {
          return b.toJSON(a);
        });
      },
      sync: function () {
        return b.sync.apply(this, arguments);
      },
      add: function (a, b) {
        return this.set(
          a,
          c.extend(
            {
              merge: !1,
            },
            b,
            q
          )
        );
      },
      remove: function (a, b) {
        var d = !c.isArray(a);
        (a = d ? [a] : c.clone(a)), b || (b = {});
        var e, f, g, h;
        for (e = 0, f = a.length; e < f; e++)
          (h = a[e] = this.get(a[e])),
            h &&
              (delete this._byId[h.id],
              delete this._byId[h.cid],
              (g = this.indexOf(h)),
              this.models.splice(g, 1),
              this.length--,
              b.silent || ((b.index = g), h.trigger("remove", h, this, b)),
              this._removeReference(h, b));
        return d ? a[0] : a;
      },
      set: function (a, b) {
        (b = c.defaults({}, b, p)), b.parse && (a = this.parse(a, b));
        var d = !c.isArray(a);
        a = d ? (a ? [a] : []) : c.clone(a);
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = b.at,
          n = this.model,
          o = this.comparator && null == l && b.sort !== !1,
          q = c.isString(this.comparator) ? this.comparator : null,
          r = [],
          s = [],
          t = {},
          u = b.add,
          v = b.merge,
          w = b.remove,
          x = !(o || !u || !w) && [];
        for (e = 0, f = a.length; e < f; e++) {
          if (
            ((i = a[e] || {}),
            (g = i instanceof m ? (h = i) : i[n.prototype.idAttribute || "id"]),
            (j = this.get(g)))
          )
            w && (t[j.cid] = !0),
              v &&
                ((i = i === h ? h.attributes : i),
                b.parse && (i = j.parse(i, b)),
                j.set(i, b),
                o && !k && j.hasChanged(q) && (k = !0)),
              (a[e] = j);
          else if (u) {
            if (((h = a[e] = this._prepareModel(i, b)), !h)) continue;
            r.push(h), this._addReference(h, b);
          }
          (h = j || h),
            !x || (!h.isNew() && t[h.id]) || x.push(h),
            (t[h.id] = !0);
        }
        if (w) {
          for (e = 0, f = this.length; e < f; ++e)
            t[(h = this.models[e]).cid] || s.push(h);
          s.length && this.remove(s, b);
        }
        if (r.length || (x && x.length))
          if ((o && (k = !0), (this.length += r.length), null != l))
            for (e = 0, f = r.length; e < f; e++)
              this.models.splice(l + e, 0, r[e]);
          else {
            x && (this.models.length = 0);
            var y = x || r;
            for (e = 0, f = y.length; e < f; e++) this.models.push(y[e]);
          }
        if (
          (k &&
            this.sort({
              silent: !0,
            }),
          !b.silent)
        ) {
          for (e = 0, f = r.length; e < f; e++)
            (h = r[e]).trigger("add", h, this, b);
          (k || (x && x.length)) && this.trigger("sort", this, b);
        }
        return d ? a[0] : a;
      },
      reset: function (a, b) {
        b || (b = {});
        for (var d = 0, e = this.models.length; d < e; d++)
          this._removeReference(this.models[d], b);
        return (
          (b.previousModels = this.models),
          this._reset(),
          (a = this.add(
            a,
            c.extend(
              {
                silent: !0,
              },
              b
            )
          )),
          b.silent || this.trigger("reset", this, b),
          a
        );
      },
      push: function (a, b) {
        return this.add(
          a,
          c.extend(
            {
              at: this.length,
            },
            b
          )
        );
      },
      pop: function (a) {
        var b = this.at(this.length - 1);
        return this.remove(b, a), b;
      },
      unshift: function (a, b) {
        return this.add(
          a,
          c.extend(
            {
              at: 0,
            },
            b
          )
        );
      },
      shift: function (a) {
        var b = this.at(0);
        return this.remove(b, a), b;
      },
      slice: function () {
        return g.apply(this.models, arguments);
      },
      get: function (a) {
        if (null != a)
          return this._byId[a] || this._byId[a.id] || this._byId[a.cid];
      },
      at: function (a) {
        return this.models[a];
      },
      where: function (a, b) {
        return c.isEmpty(a)
          ? b
            ? void 0
            : []
          : this[b ? "find" : "filter"](function (b) {
              for (var c in a) if (a[c] !== b.get(c)) return !1;
              return !0;
            });
      },
      findWhere: function (a) {
        return this.where(a, !0);
      },
      sort: function (a) {
        if (!this.comparator)
          throw new Error("Cannot sort a set without a comparator");
        return (
          a || (a = {}),
          c.isString(this.comparator) || 1 === this.comparator.length
            ? (this.models = this.sortBy(this.comparator, this))
            : this.models.sort(c.bind(this.comparator, this)),
          a.silent || this.trigger("sort", this, a),
          this
        );
      },
      pluck: function (a) {
        return c.invoke(this.models, "get", a);
      },
      fetch: function (a) {
        (a = a ? c.clone(a) : {}), void 0 === a.parse && (a.parse = !0);
        var b = a.success,
          d = this;
        return (
          (a.success = function (c) {
            var e = a.reset ? "reset" : "set";
            d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a);
          }),
          L(this, a),
          this.sync("read", this, a)
        );
      },
      create: function (a, b) {
        if (((b = b ? c.clone(b) : {}), !(a = this._prepareModel(a, b))))
          return !1;
        b.wait || this.add(a, b);
        var d = this,
          e = b.success;
        return (
          (b.success = function (a, c) {
            b.wait && d.add(a, b), e && e(a, c, b);
          }),
          a.save(null, b),
          a
        );
      },
      parse: function (a, b) {
        return a;
      },
      clone: function () {
        return new this.constructor(this.models);
      },
      _reset: function () {
        (this.length = 0), (this.models = []), (this._byId = {});
      },
      _prepareModel: function (a, b) {
        if (a instanceof m) return a;
        (b = b ? c.clone(b) : {}), (b.collection = this);
        var d = new this.model(a, b);
        return d.validationError
          ? (this.trigger("invalid", this, d.validationError, b), !1)
          : d;
      },
      _addReference: function (a, b) {
        (this._byId[a.cid] = a),
          null != a.id && (this._byId[a.id] = a),
          a.collection || (a.collection = this),
          a.on("all", this._onModelEvent, this);
      },
      _removeReference: function (a, b) {
        this === a.collection && delete a.collection,
          a.off("all", this._onModelEvent, this);
      },
      _onModelEvent: function (a, b, c, d) {
        (("add" !== a && "remove" !== a) || c === this) &&
          ("destroy" === a && this.remove(b, d),
          b &&
            a === "change:" + b.idAttribute &&
            (delete this._byId[b.previous(b.idAttribute)],
            null != b.id && (this._byId[b.id] = b)),
          this.trigger.apply(this, arguments));
      },
    });
    var r = [
      "forEach",
      "each",
      "map",
      "collect",
      "reduce",
      "foldl",
      "inject",
      "reduceRight",
      "foldr",
      "find",
      "detect",
      "filter",
      "select",
      "reject",
      "every",
      "all",
      "some",
      "any",
      "include",
      "contains",
      "invoke",
      "max",
      "min",
      "toArray",
      "size",
      "first",
      "head",
      "take",
      "initial",
      "rest",
      "tail",
      "drop",
      "last",
      "without",
      "difference",
      "indexOf",
      "shuffle",
      "lastIndexOf",
      "isEmpty",
      "chain",
      "sample",
    ];
    c.each(r, function (a) {
      o.prototype[a] = function () {
        var b = g.call(arguments);
        return b.unshift(this.models), c[a].apply(c, b);
      };
    });
    var s = ["groupBy", "countBy", "sortBy", "indexBy"];
    c.each(s, function (a) {
      o.prototype[a] = function (b, d) {
        var e = c.isFunction(b)
          ? b
          : function (a) {
              return a.get(b);
            };
        return c[a](this.models, e, d);
      };
    });
    var t = (b.View = function (a) {
        (this.cid = c.uniqueId("view")),
          a || (a = {}),
          c.extend(this, c.pick(a, v)),
          this._ensureElement(),
          this.initialize.apply(this, arguments),
          this.delegateEvents();
      }),
      u = /^(\S+)\s*(.*)$/,
      v = [
        "model",
        "collection",
        "el",
        "id",
        "attributes",
        "className",
        "tagName",
        "events",
      ];
    c.extend(t.prototype, h, {
      tagName: "div",
      $: function (a) {
        return this.$el.find(a);
      },
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this.$el.remove(), this.stopListening(), this;
      },
      setElement: function (a, c) {
        return (
          this.$el && this.undelegateEvents(),
          (this.$el = a instanceof b.$ ? a : b.$(a)),
          (this.el = this.$el[0]),
          c !== !1 && this.delegateEvents(),
          this
        );
      },
      delegateEvents: function (a) {
        if (!a && !(a = c.result(this, "events"))) return this;
        this.undelegateEvents();
        for (var b in a) {
          var d = a[b];
          if ((c.isFunction(d) || (d = this[a[b]]), d)) {
            var e = b.match(u),
              f = e[1],
              g = e[2];
            (d = c.bind(d, this)),
              (f += ".delegateEvents" + this.cid),
              "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d);
          }
        }
        return this;
      },
      undelegateEvents: function () {
        return this.$el.off(".delegateEvents" + this.cid), this;
      },
      _ensureElement: function () {
        if (this.el) this.setElement(c.result(this, "el"), !1);
        else {
          var a = c.extend({}, c.result(this, "attributes"));
          this.id && (a.id = c.result(this, "id")),
            this.className && (a["class"] = c.result(this, "className"));
          var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
          this.setElement(d, !1);
        }
      },
    }),
      (b.sync = function (a, d, e) {
        var f = x[a];
        c.defaults(e || (e = {}), {
          emulateHTTP: b.emulateHTTP,
          emulateJSON: b.emulateJSON,
        });
        var g = {
          type: f,
          dataType: "json",
        };
        if (
          (e.url || (g.url = c.result(d, "url") || K()),
          null != e.data ||
            !d ||
            ("create" !== a && "update" !== a && "patch" !== a) ||
            ((g.contentType = "application/json"),
            (g.data = JSON.stringify(e.attrs || d.toJSON(e)))),
          e.emulateJSON &&
            ((g.contentType = "application/x-www-form-urlencoded"),
            (g.data = g.data
              ? {
                  model: g.data,
                }
              : {})),
          e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f))
        ) {
          (g.type = "POST"), e.emulateJSON && (g.data._method = f);
          var h = e.beforeSend;
          e.beforeSend = function (a) {
            if ((a.setRequestHeader("X-HTTP-Method-Override", f), h))
              return h.apply(this, arguments);
          };
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1),
          "PATCH" === g.type &&
            w &&
            (g.xhr = function () {
              return new ActiveXObject("Microsoft.XMLHTTP");
            });
        var i = (e.xhr = b.ajax(c.extend(g, e)));
        return d.trigger("request", d, i, e), i;
      });
    var w = !(
        "undefined" == typeof window ||
        !window.ActiveXObject ||
        (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
      ),
      x = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET",
      };
    b.ajax = function () {
      return b.$.ajax.apply(b.$, arguments);
    };
    var y = (b.Router = function (a) {
        a || (a = {}),
          a.routes && (this.routes = a.routes),
          this._bindRoutes(),
          this.initialize.apply(this, arguments);
      }),
      z = /\((.*?)\)/g,
      A = /(\(\?)?:\w+/g,
      B = /\*\w+/g,
      C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(y.prototype, h, {
      initialize: function () {},
      route: function (a, d, e) {
        c.isRegExp(a) || (a = this._routeToRegExp(a)),
          c.isFunction(d) && ((e = d), (d = "")),
          e || (e = this[d]);
        var f = this;
        return (
          b.history.route(a, function (c) {
            var g = f._extractParameters(a, c);
            f.execute(e, g),
              f.trigger.apply(f, ["route:" + d].concat(g)),
              f.trigger("route", d, g),
              b.history.trigger("route", f, d, g);
          }),
          this
        );
      },
      execute: function (a, b) {
        a && a.apply(this, b);
      },
      navigate: function (a, c) {
        return b.history.navigate(a, c), this;
      },
      _bindRoutes: function () {
        if (this.routes) {
          this.routes = c.result(this, "routes");
          for (var a, b = c.keys(this.routes); null != (a = b.pop()); )
            this.route(a, this.routes[a]);
        }
      },
      _routeToRegExp: function (a) {
        return (
          (a = a
            .replace(C, "\\$&")
            .replace(z, "(?:$1)?")
            .replace(A, function (a, b) {
              return b ? a : "([^/?]+)";
            })
            .replace(B, "([^?]*?)")),
          new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        );
      },
      _extractParameters: function (a, b) {
        var d = a.exec(b).slice(1);
        return c.map(d, function (a, b) {
          return b === d.length - 1
            ? a || null
            : a
            ? decodeURIComponent(a)
            : null;
        });
      },
    });
    var D = (b.History = function () {
        (this.handlers = []),
          c.bindAll(this, "checkUrl"),
          "undefined" != typeof window &&
            ((this.location = window.location),
            (this.history = window.history));
      }),
      E = /^[#\/]|\s+$/g,
      F = /^\/+|\/+$/g,
      G = /msie [\w.]+/,
      H = /\/$/,
      I = /#.*$/;
    (D.started = !1),
      c.extend(D.prototype, h, {
        interval: 50,
        atRoot: function () {
          return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
        },
        getHash: function (a) {
          var b = (a || this).location.href.match(/#(.*)$/);
          return b ? b[1] : "";
        },
        getFragment: function (a, b) {
          if (null == a)
            if (this._hasPushState || !this._wantsHashChange || b) {
              a = decodeURI(this.location.pathname + this.location.search);
              var c = this.root.replace(H, "");
              a.indexOf(c) || (a = a.slice(c.length));
            } else a = this.getHash();
          return a.replace(E, "");
        },
        start: function (a) {
          if (D.started)
            throw new Error("Backbone.history has already been started");
          (D.started = !0),
            (this.options = c.extend(
              {
                root: "/",
              },
              this.options,
              a
            )),
            (this.root = this.options.root),
            (this._wantsHashChange = this.options.hashChange !== !1),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !!(
              this.options.pushState &&
              this.history &&
              this.history.pushState
            ));
          var d = this.getFragment(),
            e = document.documentMode,
            f = G.exec(navigator.userAgent.toLowerCase()) && (!e || e <= 7);
          if (
            ((this.root = ("/" + this.root + "/").replace(F, "/")),
            f && this._wantsHashChange)
          ) {
            var g = b.$('<iframe src="javascript:0" tabindex="-1">');
            (this.iframe = g.hide().appendTo("body")[0].contentWindow),
              this.navigate(d);
          }
          this._hasPushState
            ? b.$(window).on("popstate", this.checkUrl)
            : this._wantsHashChange && "onhashchange" in window && !f
            ? b.$(window).on("hashchange", this.checkUrl)
            : this._wantsHashChange &&
              (this._checkUrlInterval = setInterval(
                this.checkUrl,
                this.interval
              )),
            (this.fragment = d);
          var h = this.location;
          if (this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot())
              return (
                (this.fragment = this.getFragment(null, !0)),
                this.location.replace(this.root + "#" + this.fragment),
                !0
              );
            this._hasPushState &&
              this.atRoot() &&
              h.hash &&
              ((this.fragment = this.getHash().replace(E, "")),
              this.history.replaceState(
                {},
                document.title,
                this.root + this.fragment
              ));
          }
          if (!this.options.silent) return this.loadUrl();
        },
        stop: function () {
          b
            .$(window)
            .off("popstate", this.checkUrl)
            .off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            (D.started = !1);
        },
        route: function (a, b) {
          this.handlers.unshift({
            route: a,
            callback: b,
          });
        },
        checkUrl: function (a) {
          var b = this.getFragment();
          return (
            b === this.fragment &&
              this.iframe &&
              (b = this.getFragment(this.getHash(this.iframe))),
            b !== this.fragment &&
              (this.iframe && this.navigate(b), void this.loadUrl())
          );
        },
        loadUrl: function (a) {
          return (
            (a = this.fragment = this.getFragment(a)),
            c.any(this.handlers, function (b) {
              if (b.route.test(a)) return b.callback(a), !0;
            })
          );
        },
        navigate: function (a, b) {
          if (!D.started) return !1;
          (b && b !== !0) ||
            (b = {
              trigger: !!b,
            });
          var c = this.root + (a = this.getFragment(a || ""));
          if (((a = a.replace(I, "")), this.fragment !== a)) {
            if (
              ((this.fragment = a),
              "" === a && "/" !== c && (c = c.slice(0, -1)),
              this._hasPushState)
            )
              this.history[b.replace ? "replaceState" : "pushState"](
                {},
                document.title,
                c
              );
            else {
              if (!this._wantsHashChange) return this.location.assign(c);
              this._updateHash(this.location, a, b.replace),
                this.iframe &&
                  a !== this.getFragment(this.getHash(this.iframe)) &&
                  (b.replace || this.iframe.document.open().close(),
                  this._updateHash(this.iframe.location, a, b.replace));
            }
            return b.trigger ? this.loadUrl(a) : void 0;
          }
        },
        _updateHash: function (a, b, c) {
          if (c) {
            var d = a.href.replace(/(javascript:|#).*$/, "");
            a.replace(d + "#" + b);
          } else a.hash = "#" + b;
        },
      }),
      (b.history = new D());
    var J = function (a, b) {
      var d,
        e = this;
      (d =
        a && c.has(a, "constructor")
          ? a.constructor
          : function () {
              return e.apply(this, arguments);
            }),
        c.extend(d, e, b);
      var f = function () {
        this.constructor = d;
      };
      return (
        (f.prototype = e.prototype),
        (d.prototype = new f()),
        a && c.extend(d.prototype, a),
        (d.__super__ = e.prototype),
        d
      );
    };
    m.extend = o.extend = y.extend = t.extend = D.extend = J;
    var K = function () {
        throw new Error('A "url" property or function must be specified');
      },
      L = function (a, b) {
        var c = b.error;
        b.error = function (d) {
          c && c(a, d, b), a.trigger("error", a, d, b);
        };
      };
    return b;
  }),
  define(
    "core/vendor_extensions/backbone.overrides",
    ["backbone.original"],
    function (a) {
      "use strict";
      return (
        (a.ajax = function (a) {
          return (
            "jsonp" === a.dataType && (a.cache = !0),
            require("core/api").ajax(a)
          );
        }),
        (a.Collection.prototype.parse = function (a) {
          return a.response;
        }),
        a
      );
    }
  ),
  define(
    "core/vendor_extensions/backbone.extensions",
    ["backbone.original", "underscore"],
    function (a, b) {
      "use strict";
      return (
        (a.collectionAddNormalizer = function (a, c) {
          return function (d) {
            return function (e, f, g) {
              var h;
              if (e instanceof a) (g = f), (f = e), (h = f.models);
              else if (e instanceof c) h = [e];
              else {
                if (!b.isArray(e))
                  throw new Error("Unknown model: " + typeof e);
                h = e;
              }
              return d.call(this, h, f, g || {});
            };
          };
        }),
        a
      );
    }
  ),
  define(
    "backbone",
    [
      "backbone.original",
      "core/vendor_extensions/backbone.overrides",
      "core/vendor_extensions/backbone.extensions",
    ],
    function (a) {
      "use strict";
      return a;
    }
  ),
  (function (a, b) {
    if ("function" == typeof define && define.amd)
      define("backbone.uniquemodel", ["backbone"], function (a) {
        a.UniqueModel = b(a);
      });
    else if ("undefined" != typeof exports) {
      var c = require("backbone");
      c.UniqueModel = b(c);
    } else a.Backbone.UniqueModel = b(a.Backbone);
  })(this, function (a) {
    "use strict";

    function b(a, c, d) {
      (c = c || _.uniqueId("UniqueModel_")),
        (d = d || b.STORAGE_DEFAULT_ADAPTER);
      var e = b.addModel(a, c, d);
      return e.modelConstructor;
    }

    function c(b, c, e) {
      var f = this;
      (this.instances = {}),
        (this.Model = b),
        (this.modelName = c),
        (this.storage = null),
        "localStorage" === e
          ? (this.storage = new d(this.modelName, localStorage))
          : "sessionStorage" === e &&
            (this.storage = new d(this.modelName, sessionStorage)),
        this.storage &&
          (this.storage.on("sync", this.storageSync, this),
          this.storage.on("destroy", this.storageDestroy, this));
      var g = function (a, b) {
        return f.get(a, b);
      };
      _.extend(g, b),
        _.extend(g, a.Events),
        (g.prototype = this.Model.prototype),
        (this.modelConstructor = g);
    }

    function d(a, b) {
      (this.modelName = a),
        (this.store = b),
        (d.instances[a] = this),
        d.listener ||
          (d.listener = window.addEventListener
            ? window.addEventListener("storage", d.onStorage, !1)
            : window.attachEvent("onstorage", d.onStorage));
    }
    var e = {};
    return (
      (b.STORAGE_DEFAULT_ADAPTER = "memory"),
      (b.STORAGE_KEY_DELIMETER = "."),
      (b.STORAGE_NAMESPACE = "UniqueModel"),
      (b.getModelCache = function (a) {
        var b = e[a];
        if (!b) throw "Unrecognized model: " + a;
        return b;
      }),
      (b.addModel = function (a, b, d) {
        if (e[b]) return e[b];
        var f = new c(a, b, d);
        return (e[b] = f), f;
      }),
      (b.clear = function () {
        for (var a in e) e.hasOwnProperty(a) && delete e[a];
      }),
      _.extend(c.prototype, {
        newModel: function (a, b) {
          var c = new this.Model(a, b);
          return (
            c.id ||
              c.once(
                "change:" + c.idAttribute,
                function () {
                  this.instances[c.id] || (this.instances[c.id] = c);
                },
                this
              ),
            this.storage && c.id && this.storage.save(c.id, c.attributes),
            c.on("sync", this.instanceSync, this),
            c.on("destroy", this.instanceDestroy, this),
            c
          );
        },
        instanceSync: function (a) {
          this.storage && this.storage.save(a.id, a.attributes);
        },
        instanceDestroy: function (a) {
          var b = a.id;
          this.storage && this.storage.remove(b),
            this.instances[b] && delete this.instances[b];
        },
        storageSync: function (a, b) {
          this.get(b, {
            fromStorage: !0,
          });
        },
        storageDestroy: function (a) {
          var b = this.instances[a];
          b && (b.trigger("destroy", b), delete this.instances[a]);
        },
        add: function (a, b, c) {
          var d = this.newModel(b, c);
          return (this.instances[a] = d), d;
        },
        get: function (a, b) {
          b = b || {};
          var c = this.Model,
            d = a && a[c.prototype.idAttribute];
          if (!d) return this.newModel(a, b);
          var e = this.instances[d];
          if (this.storage && !b.fromStorage && !e) {
            var f = this.storage.getFromStorage(this.storage.getStorageKey(d));
            f && (e = this.add(d, f, b));
          }
          return (
            e
              ? (e.set(a), b.fromStorage || this.instanceSync(e))
              : ((e = this.add(d, a, b)),
                b.fromStorage &&
                  this.modelConstructor.trigger("uniquemodel.add", e)),
            e
          );
        },
      }),
      (d.instances = {}),
      (d.listener = null),
      (d.onStorage = function (a) {
        var c = a.key,
          e = new RegExp(
            [b.STORAGE_NAMESPACE, "(\\w+)", "(.+)"].join(
              "\\" + b.STORAGE_KEY_DELIMETER
            )
          ),
          f = c.match(e);
        if (f) {
          var g = f[1],
            h = f[2],
            i = d.instances[g];
          i && i.handleStorageEvent(c, h);
        }
      }),
      _.extend(
        d.prototype,
        {
          handleStorageEvent: function (a, b) {
            var c = this.getFromStorage(a);
            c ? this.trigger("sync", b, c) : this.trigger("destroy", b);
          },
          getFromStorage: function (a) {
            try {
              return JSON.parse(this.store.getItem(a));
            } catch (b) {
              return;
            }
          },
          getStorageKey: function (a) {
            var c = [b.STORAGE_NAMESPACE, this.modelName, a].join(
              b.STORAGE_KEY_DELIMETER
            );
            return c;
          },
          save: function (a, b) {
            if (!a) throw "Cannot save without id";
            var c = JSON.stringify(b);
            this.store.setItem(this.getStorageKey(a), c);
          },
          remove: function (a) {
            if (!a) throw "Cannot remove without id";
            this.store.removeItem(this.getStorageKey(a));
          },
        },
        a.Events
      ),
      _.extend(b, {
        ModelCache: c,
        StorageAdapter: d,
      }),
      b
    );
  }),
  (function (a, b) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = b())
      : "function" == typeof define && define.amd
      ? define("moment", b)
      : (a.moment = b());
  })(this, function () {
    "use strict";

    function a() {
      return Uc.apply(null, arguments);
    }

    function b(a) {
      Uc = a;
    }

    function c(a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    }

    function d(a) {
      return (
        a instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(a)
      );
    }

    function e(a, b) {
      var c,
        d = [];
      for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
      return d;
    }

    function f(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    function g(a, b) {
      for (var c in b) f(b, c) && (a[c] = b[c]);
      return (
        f(b, "toString") && (a.toString = b.toString),
        f(b, "valueOf") && (a.valueOf = b.valueOf),
        a
      );
    }

    function h(a, b, c, d) {
      return Da(a, b, c, d, !0).utc();
    }

    function i() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
      };
    }

    function j(a) {
      return null == a._pf && (a._pf = i()), a._pf;
    }

    function k(a) {
      if (null == a._isValid) {
        var b = j(a);
        (a._isValid = !(
          isNaN(a._d.getTime()) ||
          !(b.overflow < 0) ||
          b.empty ||
          b.invalidMonth ||
          b.invalidWeekday ||
          b.nullInput ||
          b.invalidFormat ||
          b.userInvalidated
        )),
          a._strict &&
            (a._isValid =
              a._isValid &&
              0 === b.charsLeftOver &&
              0 === b.unusedTokens.length &&
              void 0 === b.bigHour);
      }
      return a._isValid;
    }

    function l(a) {
      var b = h(NaN);
      return null != a ? g(j(b), a) : (j(b).userInvalidated = !0), b;
    }

    function m(a) {
      return void 0 === a;
    }

    function n(a, b) {
      var c, d, e;
      if (
        (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
        m(b._i) || (a._i = b._i),
        m(b._f) || (a._f = b._f),
        m(b._l) || (a._l = b._l),
        m(b._strict) || (a._strict = b._strict),
        m(b._tzm) || (a._tzm = b._tzm),
        m(b._isUTC) || (a._isUTC = b._isUTC),
        m(b._offset) || (a._offset = b._offset),
        m(b._pf) || (a._pf = j(b)),
        m(b._locale) || (a._locale = b._locale),
        Wc.length > 0)
      )
        for (c in Wc) (d = Wc[c]), (e = b[d]), m(e) || (a[d] = e);
      return a;
    }

    function o(b) {
      n(this, b),
        (this._d = new Date(null != b._d ? b._d.getTime() : NaN)),
        Xc === !1 && ((Xc = !0), a.updateOffset(this), (Xc = !1));
    }

    function p(a) {
      return a instanceof o || (null != a && null != a._isAMomentObject);
    }

    function q(a) {
      return a < 0 ? Math.ceil(a) : Math.floor(a);
    }

    function r(a) {
      var b = +a,
        c = 0;
      return 0 !== b && isFinite(b) && (c = q(b)), c;
    }

    function s(a, b, c) {
      var d,
        e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;
      for (d = 0; d < e; d++)
        ((c && a[d] !== b[d]) || (!c && r(a[d]) !== r(b[d]))) && g++;
      return g + f;
    }

    function t() {}

    function u(a) {
      return a ? a.toLowerCase().replace("_", "-") : a;
    }

    function v(a) {
      for (var b, c, d, e, f = 0; f < a.length; ) {
        for (
          e = u(a[f]).split("-"),
            b = e.length,
            c = u(a[f + 1]),
            c = c ? c.split("-") : null;
          b > 0;

        ) {
          if ((d = w(e.slice(0, b).join("-")))) return d;
          if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
          b--;
        }
        f++;
      }
      return null;
    }

    function w(a) {
      var b = null;
      if (!Yc[a] && "undefined" != typeof module && module && module.exports)
        try {
          (b = Vc._abbr), require("./locale/" + a), x(b);
        } catch (c) {}
      return Yc[a];
    }

    function x(a, b) {
      var c;
      return a && ((c = m(b) ? z(a) : y(a, b)), c && (Vc = c)), Vc._abbr;
    }

    function y(a, b) {
      return null !== b
        ? ((b.abbr = a), (Yc[a] = Yc[a] || new t()), Yc[a].set(b), x(a), Yc[a])
        : (delete Yc[a], null);
    }

    function z(a) {
      var b;
      if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
        return Vc;
      if (!c(a)) {
        if ((b = w(a))) return b;
        a = [a];
      }
      return v(a);
    }

    function A(a, b) {
      var c = a.toLowerCase();
      Zc[c] = Zc[c + "s"] = Zc[b] = a;
    }

    function B(a) {
      return "string" == typeof a ? Zc[a] || Zc[a.toLowerCase()] : void 0;
    }

    function C(a) {
      var b,
        c,
        d = {};
      for (c in a) f(a, c) && ((b = B(c)), b && (d[b] = a[c]));
      return d;
    }

    function D(a) {
      return (
        a instanceof Function ||
        "[object Function]" === Object.prototype.toString.call(a)
      );
    }

    function E(b, c) {
      return function (d) {
        return null != d
          ? (G(this, b, d), a.updateOffset(this, c), this)
          : F(this, b);
      };
    }

    function F(a, b) {
      return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
    }

    function G(a, b, c) {
      a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }

    function H(a, b) {
      var c;
      if ("object" == typeof a) for (c in a) this.set(c, a[c]);
      else if (((a = B(a)), D(this[a]))) return this[a](b);
      return this;
    }

    function I(a, b, c) {
      var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;
      return (
        (f ? (c ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, e)).toString().substr(1) +
        d
      );
    }

    function J(a, b, c, d) {
      var e = d;
      "string" == typeof d &&
        (e = function () {
          return this[d]();
        }),
        a && (bd[a] = e),
        b &&
          (bd[b[0]] = function () {
            return I(e.apply(this, arguments), b[1], b[2]);
          }),
        c &&
          (bd[c] = function () {
            return this.localeData().ordinal(e.apply(this, arguments), a);
          });
    }

    function K(a) {
      return a.match(/\[[\s\S]/)
        ? a.replace(/^\[|\]$/g, "")
        : a.replace(/\\/g, "");
    }

    function L(a) {
      var b,
        c,
        d = a.match($c);
      for (b = 0, c = d.length; b < c; b++)
        bd[d[b]] ? (d[b] = bd[d[b]]) : (d[b] = K(d[b]));
      return function (e) {
        var f = "";
        for (b = 0; b < c; b++)
          f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
        return f;
      };
    }

    function M(a, b) {
      return a.isValid()
        ? ((b = N(b, a.localeData())), (ad[b] = ad[b] || L(b)), ad[b](a))
        : a.localeData().invalidDate();
    }

    function N(a, b) {
      function c(a) {
        return b.longDateFormat(a) || a;
      }
      var d = 5;
      for (_c.lastIndex = 0; d >= 0 && _c.test(a); )
        (a = a.replace(_c, c)), (_c.lastIndex = 0), (d -= 1);
      return a;
    }

    function O(a, b, c) {
      td[a] = D(b)
        ? b
        : function (a, d) {
            return a && c ? c : b;
          };
    }

    function P(a, b) {
      return f(td, a) ? td[a](b._strict, b._locale) : new RegExp(Q(a));
    }

    function Q(a) {
      return R(
        a
          .replace("\\", "")
          .replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function (a, b, c, d, e) {
              return b || c || d || e;
            }
          )
      );
    }

    function R(a) {
      return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }

    function S(a, b) {
      var c,
        d = b;
      for (
        "string" == typeof a && (a = [a]),
          "number" == typeof b &&
            (d = function (a, c) {
              c[b] = r(a);
            }),
          c = 0;
        c < a.length;
        c++
      )
        ud[a[c]] = d;
    }

    function T(a, b) {
      S(a, function (a, c, d, e) {
        (d._w = d._w || {}), b(a, d._w, d, e);
      });
    }

    function U(a, b, c) {
      null != b && f(ud, a) && ud[a](b, c._a, c, a);
    }

    function V(a, b) {
      return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }

    function W(a, b) {
      return c(this._months)
        ? this._months[a.month()]
        : this._months[Ed.test(b) ? "format" : "standalone"][a.month()];
    }

    function X(a, b) {
      return c(this._monthsShort)
        ? this._monthsShort[a.month()]
        : this._monthsShort[Ed.test(b) ? "format" : "standalone"][a.month()];
    }

    function Y(a, b, c) {
      var d, e, f;
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          d = 0;
        d < 12;
        d++
      ) {
        if (
          ((e = h([2e3, d])),
          c &&
            !this._longMonthsParse[d] &&
            ((this._longMonthsParse[d] = new RegExp(
              "^" + this.months(e, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[d] = new RegExp(
              "^" + this.monthsShort(e, "").replace(".", "") + "$",
              "i"
            ))),
          c ||
            this._monthsParse[d] ||
            ((f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, "")),
            (this._monthsParse[d] = new RegExp(f.replace(".", ""), "i"))),
          c && "MMMM" === b && this._longMonthsParse[d].test(a))
        )
          return d;
        if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
        if (!c && this._monthsParse[d].test(a)) return d;
      }
    }

    function Z(a, b) {
      var c;
      return a.isValid()
        ? "string" == typeof b &&
          ((b = a.localeData().monthsParse(b)), "number" != typeof b)
          ? a
          : ((c = Math.min(a.date(), V(a.year(), b))),
            a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
            a)
        : a;
    }

    function $(b) {
      return null != b
        ? (Z(this, b), a.updateOffset(this, !0), this)
        : F(this, "Month");
    }

    function _() {
      return V(this.year(), this.month());
    }

    function aa(a) {
      return this._monthsParseExact
        ? (f(this, "_monthsRegex") || ca.call(this),
          a ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : this._monthsShortStrictRegex && a
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex;
    }

    function ba(a) {
      return this._monthsParseExact
        ? (f(this, "_monthsRegex") || ca.call(this),
          a ? this._monthsStrictRegex : this._monthsRegex)
        : this._monthsStrictRegex && a
        ? this._monthsStrictRegex
        : this._monthsRegex;
    }

    function ca() {
      function a(a, b) {
        return b.length - a.length;
      }
      var b,
        c,
        d = [],
        e = [],
        f = [];
      for (b = 0; b < 12; b++)
        (c = h([2e3, b])),
          d.push(this.monthsShort(c, "")),
          e.push(this.months(c, "")),
          f.push(this.months(c, "")),
          f.push(this.monthsShort(c, ""));
      for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)
        (d[b] = R(d[b])), (e[b] = R(e[b])), (f[b] = R(f[b]));
      (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i")),
        (this._monthsShortStrictRegex = new RegExp(
          "^(" + d.join("|") + ")$",
          "i"
        ));
    }

    function da(a) {
      var b,
        c = a._a;
      return (
        c &&
          j(a).overflow === -2 &&
          ((b =
            c[wd] < 0 || c[wd] > 11
              ? wd
              : c[xd] < 1 || c[xd] > V(c[vd], c[wd])
              ? xd
              : c[yd] < 0 ||
                c[yd] > 24 ||
                (24 === c[yd] && (0 !== c[zd] || 0 !== c[Ad] || 0 !== c[Bd]))
              ? yd
              : c[zd] < 0 || c[zd] > 59
              ? zd
              : c[Ad] < 0 || c[Ad] > 59
              ? Ad
              : c[Bd] < 0 || c[Bd] > 999
              ? Bd
              : -1),
          j(a)._overflowDayOfYear && (b < vd || b > xd) && (b = xd),
          j(a)._overflowWeeks && b === -1 && (b = Cd),
          j(a)._overflowWeekday && b === -1 && (b = Dd),
          (j(a).overflow = b)),
        a
      );
    }

    function ea(b) {
      a.suppressDeprecationWarnings === !1 &&
        "undefined" != typeof console &&
        console.warn &&
        console.warn("Deprecation warning: " + b);
    }

    function fa(a, b) {
      var c = !0;
      return g(function () {
        return (
          c &&
            (ea(
              a +
                "\nArguments: " +
                Array.prototype.slice.call(arguments).join(", ") +
                "\n" +
                new Error().stack
            ),
            (c = !1)),
          b.apply(this, arguments)
        );
      }, b);
    }

    function ga(a, b) {
      Jd[a] || (ea(b), (Jd[a] = !0));
    }

    function ha(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = a._i,
        i = Kd.exec(h) || Ld.exec(h);
      if (i) {
        for (j(a).iso = !0, b = 0, c = Nd.length; b < c; b++)
          if (Nd[b][1].exec(i[1])) {
            (e = Nd[b][0]), (d = Nd[b][2] !== !1);
            break;
          }
        if (null == e) return void (a._isValid = !1);
        if (i[3]) {
          for (b = 0, c = Od.length; b < c; b++)
            if (Od[b][1].exec(i[3])) {
              f = (i[2] || " ") + Od[b][0];
              break;
            }
          if (null == f) return void (a._isValid = !1);
        }
        if (!d && null != f) return void (a._isValid = !1);
        if (i[4]) {
          if (!Md.exec(i[4])) return void (a._isValid = !1);
          g = "Z";
        }
        (a._f = e + (f || "") + (g || "")), wa(a);
      } else a._isValid = !1;
    }

    function ia(b) {
      var c = Pd.exec(b._i);
      return null !== c
        ? void (b._d = new Date(+c[1]))
        : (ha(b),
          void (
            b._isValid === !1 &&
            (delete b._isValid, a.createFromInputFallback(b))
          ));
    }

    function ja(a, b, c, d, e, f, g) {
      var h = new Date(a, b, c, d, e, f, g);
      return (
        a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
      );
    }

    function ka(a) {
      var b = new Date(Date.UTC.apply(null, arguments));
      return (
        a < 100 &&
          a >= 0 &&
          isFinite(b.getUTCFullYear()) &&
          b.setUTCFullYear(a),
        b
      );
    }

    function la(a) {
      return ma(a) ? 366 : 365;
    }

    function ma(a) {
      return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
    }

    function na() {
      return ma(this.year());
    }

    function oa(a, b, c) {
      var d = 7 + b - c,
        e = (7 + ka(a, 0, d).getUTCDay() - b) % 7;
      return -e + d - 1;
    }

    function pa(a, b, c, d, e) {
      var f,
        g,
        h = (7 + c - d) % 7,
        i = oa(a, d, e),
        j = 1 + 7 * (b - 1) + h + i;
      return (
        j <= 0
          ? ((f = a - 1), (g = la(f) + j))
          : j > la(a)
          ? ((f = a + 1), (g = j - la(a)))
          : ((f = a), (g = j)),
        {
          year: f,
          dayOfYear: g,
        }
      );
    }

    function qa(a, b, c) {
      var d,
        e,
        f = oa(a.year(), b, c),
        g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
      return (
        g < 1
          ? ((e = a.year() - 1), (d = g + ra(e, b, c)))
          : g > ra(a.year(), b, c)
          ? ((d = g - ra(a.year(), b, c)), (e = a.year() + 1))
          : ((e = a.year()), (d = g)),
        {
          week: d,
          year: e,
        }
      );
    }

    function ra(a, b, c) {
      var d = oa(a, b, c),
        e = oa(a + 1, b, c);
      return (la(a) - d + e) / 7;
    }

    function sa(a, b, c) {
      return null != a ? a : null != b ? b : c;
    }

    function ta(b) {
      var c = new Date(a.now());
      return b._useUTC
        ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
        : [c.getFullYear(), c.getMonth(), c.getDate()];
    }

    function ua(a) {
      var b,
        c,
        d,
        e,
        f = [];
      if (!a._d) {
        for (
          d = ta(a),
            a._w && null == a._a[xd] && null == a._a[wd] && va(a),
            a._dayOfYear &&
              ((e = sa(a._a[vd], d[vd])),
              a._dayOfYear > la(e) && (j(a)._overflowDayOfYear = !0),
              (c = ka(e, 0, a._dayOfYear)),
              (a._a[wd] = c.getUTCMonth()),
              (a._a[xd] = c.getUTCDate())),
            b = 0;
          b < 3 && null == a._a[b];
          ++b
        )
          a._a[b] = f[b] = d[b];
        for (; b < 7; b++)
          a._a[b] = f[b] = null == a._a[b] ? (2 === b ? 1 : 0) : a._a[b];
        24 === a._a[yd] &&
          0 === a._a[zd] &&
          0 === a._a[Ad] &&
          0 === a._a[Bd] &&
          ((a._nextDay = !0), (a._a[yd] = 0)),
          (a._d = (a._useUTC ? ka : ja).apply(null, f)),
          null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
          a._nextDay && (a._a[yd] = 24);
      }
    }

    function va(a) {
      var b, c, d, e, f, g, h, i;
      (b = a._w),
        null != b.GG || null != b.W || null != b.E
          ? ((f = 1),
            (g = 4),
            (c = sa(b.GG, a._a[vd], qa(Ea(), 1, 4).year)),
            (d = sa(b.W, 1)),
            (e = sa(b.E, 1)),
            (e < 1 || e > 7) && (i = !0))
          : ((f = a._locale._week.dow),
            (g = a._locale._week.doy),
            (c = sa(b.gg, a._a[vd], qa(Ea(), f, g).year)),
            (d = sa(b.w, 1)),
            null != b.d
              ? ((e = b.d), (e < 0 || e > 6) && (i = !0))
              : null != b.e
              ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
              : (e = f)),
        d < 1 || d > ra(c, f, g)
          ? (j(a)._overflowWeeks = !0)
          : null != i
          ? (j(a)._overflowWeekday = !0)
          : ((h = pa(c, d, e, f, g)),
            (a._a[vd] = h.year),
            (a._dayOfYear = h.dayOfYear));
    }

    function wa(b) {
      if (b._f === a.ISO_8601) return void ha(b);
      (b._a = []), (j(b).empty = !0);
      var c,
        d,
        e,
        f,
        g,
        h = "" + b._i,
        i = h.length,
        k = 0;
      for (e = N(b._f, b._locale).match($c) || [], c = 0; c < e.length; c++)
        (f = e[c]),
          (d = (h.match(P(f, b)) || [])[0]),
          d &&
            ((g = h.substr(0, h.indexOf(d))),
            g.length > 0 && j(b).unusedInput.push(g),
            (h = h.slice(h.indexOf(d) + d.length)),
            (k += d.length)),
          bd[f]
            ? (d ? (j(b).empty = !1) : j(b).unusedTokens.push(f), U(f, d, b))
            : b._strict && !d && j(b).unusedTokens.push(f);
      (j(b).charsLeftOver = i - k),
        h.length > 0 && j(b).unusedInput.push(h),
        j(b).bigHour === !0 &&
          b._a[yd] <= 12 &&
          b._a[yd] > 0 &&
          (j(b).bigHour = void 0),
        (b._a[yd] = xa(b._locale, b._a[yd], b._meridiem)),
        ua(b),
        da(b);
    }

    function xa(a, b, c) {
      var d;
      return null == c
        ? b
        : null != a.meridiemHour
        ? a.meridiemHour(b, c)
        : null != a.isPM
        ? ((d = a.isPM(c)),
          d && b < 12 && (b += 12),
          d || 12 !== b || (b = 0),
          b)
        : b;
    }

    function ya(a) {
      var b, c, d, e, f;
      if (0 === a._f.length)
        return (j(a).invalidFormat = !0), void (a._d = new Date(NaN));
      for (e = 0; e < a._f.length; e++)
        (f = 0),
          (b = n({}, a)),
          null != a._useUTC && (b._useUTC = a._useUTC),
          (b._f = a._f[e]),
          wa(b),
          k(b) &&
            ((f += j(b).charsLeftOver),
            (f += 10 * j(b).unusedTokens.length),
            (j(b).score = f),
            (null == d || f < d) && ((d = f), (c = b)));
      g(a, c || b);
    }

    function za(a) {
      if (!a._d) {
        var b = C(a._i);
        (a._a = e(
          [
            b.year,
            b.month,
            b.day || b.date,
            b.hour,
            b.minute,
            b.second,
            b.millisecond,
          ],
          function (a) {
            return a && parseInt(a, 10);
          }
        )),
          ua(a);
      }
    }

    function Aa(a) {
      var b = new o(da(Ba(a)));
      return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
    }

    function Ba(a) {
      var b = a._i,
        e = a._f;
      return (
        (a._locale = a._locale || z(a._l)),
        null === b || (void 0 === e && "" === b)
          ? l({
              nullInput: !0,
            })
          : ("string" == typeof b && (a._i = b = a._locale.preparse(b)),
            p(b)
              ? new o(da(b))
              : (c(e) ? ya(a) : e ? wa(a) : d(b) ? (a._d = b) : Ca(a),
                k(a) || (a._d = null),
                a))
      );
    }

    function Ca(b) {
      var f = b._i;
      void 0 === f
        ? (b._d = new Date(a.now()))
        : d(f)
        ? (b._d = new Date(+f))
        : "string" == typeof f
        ? ia(b)
        : c(f)
        ? ((b._a = e(f.slice(0), function (a) {
            return parseInt(a, 10);
          })),
          ua(b))
        : "object" == typeof f
        ? za(b)
        : "number" == typeof f
        ? (b._d = new Date(f))
        : a.createFromInputFallback(b);
    }

    function Da(a, b, c, d, e) {
      var f = {};
      return (
        "boolean" == typeof c && ((d = c), (c = void 0)),
        (f._isAMomentObject = !0),
        (f._useUTC = f._isUTC = e),
        (f._l = c),
        (f._i = a),
        (f._f = b),
        (f._strict = d),
        Aa(f)
      );
    }

    function Ea(a, b, c, d) {
      return Da(a, b, c, d, !1);
    }

    function Fa(a, b) {
      var d, e;
      if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return Ea();
      for (d = b[0], e = 1; e < b.length; ++e)
        (b[e].isValid() && !b[e][a](d)) || (d = b[e]);
      return d;
    }

    function Ga() {
      var a = [].slice.call(arguments, 0);
      return Fa("isBefore", a);
    }

    function Ha() {
      var a = [].slice.call(arguments, 0);
      return Fa("isAfter", a);
    }

    function Ia(a) {
      var b = C(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;
      (this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h),
        (this._days = +g + 7 * f),
        (this._months = +e + 3 * d + 12 * c),
        (this._data = {}),
        (this._locale = z()),
        this._bubble();
    }

    function Ja(a) {
      return a instanceof Ia;
    }

    function Ka(a, b) {
      J(a, 0, 0, function () {
        var a = this.utcOffset(),
          c = "+";
        return (
          a < 0 && ((a = -a), (c = "-")),
          c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
        );
      });
    }

    function La(a, b) {
      var c = (b || "").match(a) || [],
        d = c[c.length - 1] || [],
        e = (d + "").match(Ud) || ["-", 0, 0],
        f = +(60 * e[1]) + r(e[2]);
      return "+" === e[0] ? f : -f;
    }

    function Ma(b, c) {
      var e, f;
      return c._isUTC
        ? ((e = c.clone()),
          (f = (p(b) || d(b) ? +b : +Ea(b)) - +e),
          e._d.setTime(+e._d + f),
          a.updateOffset(e, !1),
          e)
        : Ea(b).local();
    }

    function Na(a) {
      return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }

    function Oa(b, c) {
      var d,
        e = this._offset || 0;
      return this.isValid()
        ? null != b
          ? ("string" == typeof b
              ? (b = La(qd, b))
              : Math.abs(b) < 16 && (b = 60 * b),
            !this._isUTC && c && (d = Na(this)),
            (this._offset = b),
            (this._isUTC = !0),
            null != d && this.add(d, "m"),
            e !== b &&
              (!c || this._changeInProgress
                ? cb(this, Za(b - e, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  a.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this)
          : this._isUTC
          ? e
          : Na(this)
        : null != b
        ? this
        : NaN;
    }

    function Pa(a, b) {
      return null != a
        ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this)
        : -this.utcOffset();
    }

    function Qa(a) {
      return this.utcOffset(0, a);
    }

    function Ra(a) {
      return (
        this._isUTC &&
          (this.utcOffset(0, a),
          (this._isUTC = !1),
          a && this.subtract(Na(this), "m")),
        this
      );
    }

    function Sa() {
      return (
        this._tzm
          ? this.utcOffset(this._tzm)
          : "string" == typeof this._i && this.utcOffset(La(pd, this._i)),
        this
      );
    }

    function Ta(a) {
      return (
        !!this.isValid() &&
        ((a = a ? Ea(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
      );
    }

    function Ua() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }

    function Va() {
      if (!m(this._isDSTShifted)) return this._isDSTShifted;
      var a = {};
      if ((n(a, this), (a = Ba(a)), a._a)) {
        var b = a._isUTC ? h(a._a) : Ea(a._a);
        this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0;
      } else this._isDSTShifted = !1;
      return this._isDSTShifted;
    }

    function Wa() {
      return !!this.isValid() && !this._isUTC;
    }

    function Xa() {
      return !!this.isValid() && this._isUTC;
    }

    function Ya() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }

    function Za(a, b) {
      var c,
        d,
        e,
        g = a,
        h = null;
      return (
        Ja(a)
          ? (g = {
              ms: a._milliseconds,
              d: a._days,
              M: a._months,
            })
          : "number" == typeof a
          ? ((g = {}), b ? (g[b] = a) : (g.milliseconds = a))
          : (h = Vd.exec(a))
          ? ((c = "-" === h[1] ? -1 : 1),
            (g = {
              y: 0,
              d: r(h[xd]) * c,
              h: r(h[yd]) * c,
              m: r(h[zd]) * c,
              s: r(h[Ad]) * c,
              ms: r(h[Bd]) * c,
            }))
          : (h = Wd.exec(a))
          ? ((c = "-" === h[1] ? -1 : 1),
            (g = {
              y: $a(h[2], c),
              M: $a(h[3], c),
              d: $a(h[4], c),
              h: $a(h[5], c),
              m: $a(h[6], c),
              s: $a(h[7], c),
              w: $a(h[8], c),
            }))
          : null == g
          ? (g = {})
          : "object" == typeof g &&
            ("from" in g || "to" in g) &&
            ((e = ab(Ea(g.from), Ea(g.to))),
            (g = {}),
            (g.ms = e.milliseconds),
            (g.M = e.months)),
        (d = new Ia(g)),
        Ja(a) && f(a, "_locale") && (d._locale = a._locale),
        d
      );
    }

    function $a(a, b) {
      var c = a && parseFloat(a.replace(",", "."));
      return (isNaN(c) ? 0 : c) * b;
    }

    function _a(a, b) {
      var c = {
        milliseconds: 0,
        months: 0,
      };
      return (
        (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
        a.clone().add(c.months, "M").isAfter(b) && --c.months,
        (c.milliseconds = +b - +a.clone().add(c.months, "M")),
        c
      );
    }

    function ab(a, b) {
      var c;
      return a.isValid() && b.isValid()
        ? ((b = Ma(b, a)),
          a.isBefore(b)
            ? (c = _a(a, b))
            : ((c = _a(b, a)),
              (c.milliseconds = -c.milliseconds),
              (c.months = -c.months)),
          c)
        : {
            milliseconds: 0,
            months: 0,
          };
    }

    function bb(a, b) {
      return function (c, d) {
        var e, f;
        return (
          null === d ||
            isNaN(+d) ||
            (ga(
              b,
              "moment()." +
                b +
                "(period, number) is deprecated. Please use moment()." +
                b +
                "(number, period)."
            ),
            (f = c),
            (c = d),
            (d = f)),
          (c = "string" == typeof c ? +c : c),
          (e = Za(c, d)),
          cb(this, e, a),
          this
        );
      };
    }

    function cb(b, c, d, e) {
      var f = c._milliseconds,
        g = c._days,
        h = c._months;
      b.isValid() &&
        ((e = null == e || e),
        f && b._d.setTime(+b._d + f * d),
        g && G(b, "Date", F(b, "Date") + g * d),
        h && Z(b, F(b, "Month") + h * d),
        e && a.updateOffset(b, g || h));
    }

    function db(a, b) {
      var c = a || Ea(),
        d = Ma(c, this).startOf("day"),
        e = this.diff(d, "days", !0),
        f =
          e < -6
            ? "sameElse"
            : e < -1
            ? "lastWeek"
            : e < 0
            ? "lastDay"
            : e < 1
            ? "sameDay"
            : e < 2
            ? "nextDay"
            : e < 7
            ? "nextWeek"
            : "sameElse",
        g = b && (D(b[f]) ? b[f]() : b[f]);
      return this.format(g || this.localeData().calendar(f, this, Ea(c)));
    }

    function eb() {
      return new o(this);
    }

    function fb(a, b) {
      var c = p(a) ? a : Ea(a);
      return (
        !(!this.isValid() || !c.isValid()) &&
        ((b = B(m(b) ? "millisecond" : b)),
        "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b))
      );
    }

    function gb(a, b) {
      var c = p(a) ? a : Ea(a);
      return (
        !(!this.isValid() || !c.isValid()) &&
        ((b = B(m(b) ? "millisecond" : b)),
        "millisecond" === b ? +this < +c : +this.clone().endOf(b) < +c)
      );
    }

    function hb(a, b, c) {
      return this.isAfter(a, c) && this.isBefore(b, c);
    }

    function ib(a, b) {
      var c,
        d = p(a) ? a : Ea(a);
      return (
        !(!this.isValid() || !d.isValid()) &&
        ((b = B(b || "millisecond")),
        "millisecond" === b
          ? +this === +d
          : ((c = +d),
            +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b)))
      );
    }

    function jb(a, b) {
      return this.isSame(a, b) || this.isAfter(a, b);
    }

    function kb(a, b) {
      return this.isSame(a, b) || this.isBefore(a, b);
    }

    function lb(a, b, c) {
      var d, e, f, g;
      return this.isValid()
        ? ((d = Ma(a, this)),
          d.isValid()
            ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
              (b = B(b)),
              "year" === b || "month" === b || "quarter" === b
                ? ((g = mb(this, d)),
                  "quarter" === b ? (g /= 3) : "year" === b && (g /= 12))
                : ((f = this - d),
                  (g =
                    "second" === b
                      ? f / 1e3
                      : "minute" === b
                      ? f / 6e4
                      : "hour" === b
                      ? f / 36e5
                      : "day" === b
                      ? (f - e) / 864e5
                      : "week" === b
                      ? (f - e) / 6048e5
                      : f)),
              c ? g : q(g))
            : NaN)
        : NaN;
    }

    function mb(a, b) {
      var c,
        d,
        e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");
      return (
        b - f < 0
          ? ((c = a.clone().add(e - 1, "months")), (d = (b - f) / (f - c)))
          : ((c = a.clone().add(e + 1, "months")), (d = (b - f) / (c - f))),
        -(e + d)
      );
    }

    function nb() {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }

    function ob() {
      var a = this.clone().utc();
      return 0 < a.year() && a.year() <= 9999
        ? D(Date.prototype.toISOString)
          ? this.toDate().toISOString()
          : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }

    function pb(b) {
      var c = M(this, b || a.defaultFormat);
      return this.localeData().postformat(c);
    }

    function qb(a, b) {
      return this.isValid() && ((p(a) && a.isValid()) || Ea(a).isValid())
        ? Za({
            to: this,
            from: a,
          })
            .locale(this.locale())
            .humanize(!b)
        : this.localeData().invalidDate();
    }

    function rb(a) {
      return this.from(Ea(), a);
    }

    function sb(a, b) {
      return this.isValid() && ((p(a) && a.isValid()) || Ea(a).isValid())
        ? Za({
            from: this,
            to: a,
          })
            .locale(this.locale())
            .humanize(!b)
        : this.localeData().invalidDate();
    }

    function tb(a) {
      return this.to(Ea(), a);
    }

    function ub(a) {
      var b;
      return void 0 === a
        ? this._locale._abbr
        : ((b = z(a)), null != b && (this._locale = b), this);
    }

    function vb() {
      return this._locale;
    }

    function wb(a) {
      switch ((a = B(a))) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0);
      }
      return (
        "week" === a && this.weekday(0),
        "isoWeek" === a && this.isoWeekday(1),
        "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
        this
      );
    }

    function xb(a) {
      return (
        (a = B(a)),
        void 0 === a || "millisecond" === a
          ? this
          : this.startOf(a)
              .add(1, "isoWeek" === a ? "week" : a)
              .subtract(1, "ms")
      );
    }

    function yb() {
      return +this._d - 6e4 * (this._offset || 0);
    }

    function zb() {
      return Math.floor(+this / 1e3);
    }

    function Ab() {
      return this._offset ? new Date(+this) : this._d;
    }

    function Bb() {
      var a = this;
      return [
        a.year(),
        a.month(),
        a.date(),
        a.hour(),
        a.minute(),
        a.second(),
        a.millisecond(),
      ];
    }

    function Cb() {
      var a = this;
      return {
        years: a.year(),
        months: a.month(),
        date: a.date(),
        hours: a.hours(),
        minutes: a.minutes(),
        seconds: a.seconds(),
        milliseconds: a.milliseconds(),
      };
    }

    function Db() {
      return this.isValid() ? this.toISOString() : "null";
    }

    function Eb() {
      return k(this);
    }

    function Fb() {
      return g({}, j(this));
    }

    function Gb() {
      return j(this).overflow;
    }

    function Hb() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }

    function Ib(a, b) {
      J(0, [a, a.length], 0, b);
    }

    function Jb(a) {
      return Nb.call(
        this,
        a,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }

    function Kb(a) {
      return Nb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function Lb() {
      return ra(this.year(), 1, 4);
    }

    function Mb() {
      var a = this.localeData()._week;
      return ra(this.year(), a.dow, a.doy);
    }

    function Nb(a, b, c, d, e) {
      var f;
      return null == a
        ? qa(this, d, e).year
        : ((f = ra(a, d, e)), b > f && (b = f), Ob.call(this, a, b, c, d, e));
    }

    function Ob(a, b, c, d, e) {
      var f = pa(a, b, c, d, e),
        g = ka(f.year, 0, f.dayOfYear);
      return (
        this.year(g.getUTCFullYear()),
        this.month(g.getUTCMonth()),
        this.date(g.getUTCDate()),
        this
      );
    }

    function Pb(a) {
      return null == a
        ? Math.ceil((this.month() + 1) / 3)
        : this.month(3 * (a - 1) + (this.month() % 3));
    }

    function Qb(a) {
      return qa(a, this._week.dow, this._week.doy).week;
    }

    function Rb() {
      return this._week.dow;
    }

    function Sb() {
      return this._week.doy;
    }

    function Tb(a) {
      var b = this.localeData().week(this);
      return null == a ? b : this.add(7 * (a - b), "d");
    }

    function Ub(a) {
      var b = qa(this, 1, 4).week;
      return null == a ? b : this.add(7 * (a - b), "d");
    }

    function Vb(a, b) {
      return "string" != typeof a
        ? a
        : isNaN(a)
        ? ((a = b.weekdaysParse(a)), "number" == typeof a ? a : null)
        : parseInt(a, 10);
    }

    function Wb(a, b) {
      return c(this._weekdays)
        ? this._weekdays[a.day()]
        : this._weekdays[
            this._weekdays.isFormat.test(b) ? "format" : "standalone"
          ][a.day()];
    }

    function Xb(a) {
      return this._weekdaysShort[a.day()];
    }

    function Yb(a) {
      return this._weekdaysMin[a.day()];
    }

    function Zb(a, b, c) {
      var d, e, f;
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          d = 0;
        d < 7;
        d++
      ) {
        if (
          ((e = Ea([2e3, 1]).day(d)),
          c &&
            !this._fullWeekdaysParse[d] &&
            ((this._fullWeekdaysParse[d] = new RegExp(
              "^" + this.weekdays(e, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[d] = new RegExp(
              "^" + this.weekdaysShort(e, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[d] = new RegExp(
              "^" + this.weekdaysMin(e, "").replace(".", ".?") + "$",
              "i"
            ))),
          this._weekdaysParse[d] ||
            ((f =
              "^" +
              this.weekdays(e, "") +
              "|^" +
              this.weekdaysShort(e, "") +
              "|^" +
              this.weekdaysMin(e, "")),
            (this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i"))),
          c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
        )
          return d;
        if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
        if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
        if (!c && this._weekdaysParse[d].test(a)) return d;
      }
    }

    function $b(a) {
      if (!this.isValid()) return null != a ? this : NaN;
      var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != a
        ? ((a = Vb(a, this.localeData())), this.add(a - b, "d"))
        : b;
    }

    function _b(a) {
      if (!this.isValid()) return null != a ? this : NaN;
      var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == a ? b : this.add(a - b, "d");
    }

    function ac(a) {
      return this.isValid()
        ? null == a
          ? this.day() || 7
          : this.day(this.day() % 7 ? a : a - 7)
        : null != a
        ? this
        : NaN;
    }

    function bc(a) {
      var b =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == a ? b : this.add(a - b, "d");
    }

    function cc() {
      return this.hours() % 12 || 12;
    }

    function dc(a, b) {
      J(a, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), b);
      });
    }

    function ec(a, b) {
      return b._meridiemParse;
    }

    function fc(a) {
      return "p" === (a + "").toLowerCase().charAt(0);
    }

    function gc(a, b, c) {
      return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
    }

    function hc(a, b) {
      b[Bd] = r(1e3 * ("0." + a));
    }

    function ic() {
      return this._isUTC ? "UTC" : "";
    }

    function jc() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }

    function kc(a) {
      return Ea(1e3 * a);
    }

    function lc() {
      return Ea.apply(null, arguments).parseZone();
    }

    function mc(a, b, c) {
      var d = this._calendar[a];
      return D(d) ? d.call(b, c) : d;
    }

    function nc(a) {
      var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];
      return b || !c
        ? b
        : ((this._longDateFormat[a] = c.replace(
            /MMMM|MM|DD|dddd/g,
            function (a) {
              return a.slice(1);
            }
          )),
          this._longDateFormat[a]);
    }

    function oc() {
      return this._invalidDate;
    }

    function pc(a) {
      return this._ordinal.replace("%d", a);
    }

    function qc(a) {
      return a;
    }

    function rc(a, b, c, d) {
      var e = this._relativeTime[c];
      return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }

    function sc(a, b) {
      var c = this._relativeTime[a > 0 ? "future" : "past"];
      return D(c) ? c(b) : c.replace(/%s/i, b);
    }

    function tc(a) {
      var b, c;
      for (c in a) (b = a[c]), D(b) ? (this[c] = b) : (this["_" + c] = b);
      this._ordinalParseLenient = new RegExp(
        this._ordinalParse.source + "|" + /\d{1,2}/.source
      );
    }

    function uc(a, b, c, d) {
      var e = z(),
        f = h().set(d, b);
      return e[c](f, a);
    }

    function vc(a, b, c, d, e) {
      if (
        ("number" == typeof a && ((b = a), (a = void 0)),
        (a = a || ""),
        null != b)
      )
        return uc(a, b, c, e);
      var f,
        g = [];
      for (f = 0; f < d; f++) g[f] = uc(a, f, c, e);
      return g;
    }

    function wc(a, b) {
      return vc(a, b, "months", 12, "month");
    }

    function xc(a, b) {
      return vc(a, b, "monthsShort", 12, "month");
    }

    function yc(a, b) {
      return vc(a, b, "weekdays", 7, "day");
    }

    function zc(a, b) {
      return vc(a, b, "weekdaysShort", 7, "day");
    }

    function Ac(a, b) {
      return vc(a, b, "weekdaysMin", 7, "day");
    }

    function Bc() {
      var a = this._data;
      return (
        (this._milliseconds = se(this._milliseconds)),
        (this._days = se(this._days)),
        (this._months = se(this._months)),
        (a.milliseconds = se(a.milliseconds)),
        (a.seconds = se(a.seconds)),
        (a.minutes = se(a.minutes)),
        (a.hours = se(a.hours)),
        (a.months = se(a.months)),
        (a.years = se(a.years)),
        this
      );
    }

    function Cc(a, b, c, d) {
      var e = Za(b, c);
      return (
        (a._milliseconds += d * e._milliseconds),
        (a._days += d * e._days),
        (a._months += d * e._months),
        a._bubble()
      );
    }

    function Dc(a, b) {
      return Cc(this, a, b, 1);
    }

    function Ec(a, b) {
      return Cc(this, a, b, -1);
    }

    function Fc(a) {
      return a < 0 ? Math.floor(a) : Math.ceil(a);
    }

    function Gc() {
      var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;
      return (
        (f >= 0 && g >= 0 && h >= 0) ||
          (f <= 0 && g <= 0 && h <= 0) ||
          ((f += 864e5 * Fc(Ic(h) + g)), (g = 0), (h = 0)),
        (i.milliseconds = f % 1e3),
        (a = q(f / 1e3)),
        (i.seconds = a % 60),
        (b = q(a / 60)),
        (i.minutes = b % 60),
        (c = q(b / 60)),
        (i.hours = c % 24),
        (g += q(c / 24)),
        (e = q(Hc(g))),
        (h += e),
        (g -= Fc(Ic(e))),
        (d = q(h / 12)),
        (h %= 12),
        (i.days = g),
        (i.months = h),
        (i.years = d),
        this
      );
    }

    function Hc(a) {
      return (4800 * a) / 146097;
    }

    function Ic(a) {
      return (146097 * a) / 4800;
    }

    function Jc(a) {
      var b,
        c,
        d = this._milliseconds;
      if (((a = B(a)), "month" === a || "year" === a))
        return (
          (b = this._days + d / 864e5),
          (c = this._months + Hc(b)),
          "month" === a ? c : c / 12
        );
      switch (((b = this._days + Math.round(Ic(this._months))), a)) {
        case "week":
          return b / 7 + d / 6048e5;
        case "day":
          return b + d / 864e5;
        case "hour":
          return 24 * b + d / 36e5;
        case "minute":
          return 1440 * b + d / 6e4;
        case "second":
          return 86400 * b + d / 1e3;
        case "millisecond":
          return Math.floor(864e5 * b) + d;
        default:
          throw new Error("Unknown unit " + a);
      }
    }

    function Kc() {
      return (
        this._milliseconds +
        864e5 * this._days +
        (this._months % 12) * 2592e6 +
        31536e6 * r(this._months / 12)
      );
    }

    function Lc(a) {
      return function () {
        return this.as(a);
      };
    }

    function Mc(a) {
      return (a = B(a)), this[a + "s"]();
    }

    function Nc(a) {
      return function () {
        return this._data[a];
      };
    }

    function Oc() {
      return q(this.days() / 7);
    }

    function Pc(a, b, c, d, e) {
      return e.relativeTime(b || 1, !!c, a, d);
    }

    function Qc(a, b, c) {
      var d = Za(a).abs(),
        e = Ie(d.as("s")),
        f = Ie(d.as("m")),
        g = Ie(d.as("h")),
        h = Ie(d.as("d")),
        i = Ie(d.as("M")),
        j = Ie(d.as("y")),
        k = (e < Je.s && ["s", e]) ||
          (f <= 1 && ["m"]) ||
          (f < Je.m && ["mm", f]) ||
          (g <= 1 && ["h"]) ||
          (g < Je.h && ["hh", g]) ||
          (h <= 1 && ["d"]) ||
          (h < Je.d && ["dd", h]) ||
          (i <= 1 && ["M"]) ||
          (i < Je.M && ["MM", i]) ||
          (j <= 1 && ["y"]) || ["yy", j];
      return (k[2] = b), (k[3] = +a > 0), (k[4] = c), Pc.apply(null, k);
    }

    function Rc(a, b) {
      return void 0 !== Je[a] && (void 0 === b ? Je[a] : ((Je[a] = b), !0));
    }

    function Sc(a) {
      var b = this.localeData(),
        c = Qc(this, !a, b);
      return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }

    function Tc() {
      var a,
        b,
        c,
        d = Ke(this._milliseconds) / 1e3,
        e = Ke(this._days),
        f = Ke(this._months);
      (a = q(d / 60)),
        (b = q(a / 60)),
        (d %= 60),
        (a %= 60),
        (c = q(f / 12)),
        (f %= 12);
      var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();
      return m
        ? (m < 0 ? "-" : "") +
            "P" +
            (g ? g + "Y" : "") +
            (h ? h + "M" : "") +
            (i ? i + "D" : "") +
            (j || k || l ? "T" : "") +
            (j ? j + "H" : "") +
            (k ? k + "M" : "") +
            (l ? l + "S" : "")
        : "P0D";
    }
    var Uc,
      Vc,
      Wc = (a.momentProperties = []),
      Xc = !1,
      Yc = {},
      Zc = {},
      $c =
        /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      _c = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      ad = {},
      bd = {},
      cd = /\d/,
      dd = /\d\d/,
      ed = /\d{3}/,
      fd = /\d{4}/,
      gd = /[+-]?\d{6}/,
      hd = /\d\d?/,
      id = /\d\d\d\d?/,
      jd = /\d\d\d\d\d\d?/,
      kd = /\d{1,3}/,
      ld = /\d{1,4}/,
      md = /[+-]?\d{1,6}/,
      nd = /\d+/,
      od = /[+-]?\d+/,
      pd = /Z|[+-]\d\d:?\d\d/gi,
      qd = /Z|[+-]\d\d(?::?\d\d)?/gi,
      rd = /[+-]?\d+(\.\d{1,3})?/,
      sd =
        /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      td = {},
      ud = {},
      vd = 0,
      wd = 1,
      xd = 2,
      yd = 3,
      zd = 4,
      Ad = 5,
      Bd = 6,
      Cd = 7,
      Dd = 8;
    J("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
      J("MMM", 0, 0, function (a) {
        return this.localeData().monthsShort(this, a);
      }),
      J("MMMM", 0, 0, function (a) {
        return this.localeData().months(this, a);
      }),
      A("month", "M"),
      O("M", hd),
      O("MM", hd, dd),
      O("MMM", function (a, b) {
        return b.monthsShortRegex(a);
      }),
      O("MMMM", function (a, b) {
        return b.monthsRegex(a);
      }),
      S(["M", "MM"], function (a, b) {
        b[wd] = r(a) - 1;
      }),
      S(["MMM", "MMMM"], function (a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? (b[wd] = e) : (j(c).invalidMonth = a);
      });
    var Ed = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
      Fd =
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
      Gd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      Hd = sd,
      Id = sd,
      Jd = {};
    a.suppressDeprecationWarnings = !1;
    var Kd =
        /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
      Ld =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
      Md = /Z|[+-]\d\d(?::?\d\d)?/,
      Nd = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
      ],
      Od = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      Pd = /^\/?Date\((\-?\d+)/i;
    (a.createFromInputFallback = fa(
      "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
      function (a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
      }
    )),
      J("Y", 0, 0, function () {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a;
      }),
      J(0, ["YY", 2], 0, function () {
        return this.year() % 100;
      }),
      J(0, ["YYYY", 4], 0, "year"),
      J(0, ["YYYYY", 5], 0, "year"),
      J(0, ["YYYYYY", 6, !0], 0, "year"),
      A("year", "y"),
      O("Y", od),
      O("YY", hd, dd),
      O("YYYY", ld, fd),
      O("YYYYY", md, gd),
      O("YYYYYY", md, gd),
      S(["YYYYY", "YYYYYY"], vd),
      S("YYYY", function (b, c) {
        c[vd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
      }),
      S("YY", function (b, c) {
        c[vd] = a.parseTwoDigitYear(b);
      }),
      S("Y", function (a, b) {
        b[vd] = parseInt(a, 10);
      }),
      (a.parseTwoDigitYear = function (a) {
        return r(a) + (r(a) > 68 ? 1900 : 2e3);
      });
    var Qd = E("FullYear", !1);
    a.ISO_8601 = function () {};
    var Rd = fa(
        "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
        function () {
          var a = Ea.apply(null, arguments);
          return this.isValid() && a.isValid() ? (a < this ? this : a) : l();
        }
      ),
      Sd = fa(
        "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
        function () {
          var a = Ea.apply(null, arguments);
          return this.isValid() && a.isValid() ? (a > this ? this : a) : l();
        }
      ),
      Td = function () {
        return Date.now ? Date.now() : +new Date();
      };
    Ka("Z", ":"),
      Ka("ZZ", ""),
      O("Z", qd),
      O("ZZ", qd),
      S(["Z", "ZZ"], function (a, b, c) {
        (c._useUTC = !0), (c._tzm = La(qd, a));
      });
    var Ud = /([\+\-]|\d\d)/gi;
    a.updateOffset = function () {};
    var Vd = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
      Wd =
        /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Za.fn = Ia.prototype;
    var Xd = bb(1, "add"),
      Yd = bb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Zd = fa(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (a) {
        return void 0 === a ? this.localeData() : this.locale(a);
      }
    );
    J(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    }),
      J(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100;
      }),
      Ib("gggg", "weekYear"),
      Ib("ggggg", "weekYear"),
      Ib("GGGG", "isoWeekYear"),
      Ib("GGGGG", "isoWeekYear"),
      A("weekYear", "gg"),
      A("isoWeekYear", "GG"),
      O("G", od),
      O("g", od),
      O("GG", hd, dd),
      O("gg", hd, dd),
      O("GGGG", ld, fd),
      O("gggg", ld, fd),
      O("GGGGG", md, gd),
      O("ggggg", md, gd),
      T(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
        b[d.substr(0, 2)] = r(a);
      }),
      T(["gg", "GG"], function (b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b);
      }),
      J("Q", 0, "Qo", "quarter"),
      A("quarter", "Q"),
      O("Q", cd),
      S("Q", function (a, b) {
        b[wd] = 3 * (r(a) - 1);
      }),
      J("w", ["ww", 2], "wo", "week"),
      J("W", ["WW", 2], "Wo", "isoWeek"),
      A("week", "w"),
      A("isoWeek", "W"),
      O("w", hd),
      O("ww", hd, dd),
      O("W", hd),
      O("WW", hd, dd),
      T(["w", "ww", "W", "WW"], function (a, b, c, d) {
        b[d.substr(0, 1)] = r(a);
      });
    var $d = {
      dow: 0,
      doy: 6,
    };
    J("D", ["DD", 2], "Do", "date"),
      A("date", "D"),
      O("D", hd),
      O("DD", hd, dd),
      O("Do", function (a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient;
      }),
      S(["D", "DD"], xd),
      S("Do", function (a, b) {
        b[xd] = r(a.match(hd)[0], 10);
      });
    var _d = E("Date", !0);
    J("d", 0, "do", "day"),
      J("dd", 0, 0, function (a) {
        return this.localeData().weekdaysMin(this, a);
      }),
      J("ddd", 0, 0, function (a) {
        return this.localeData().weekdaysShort(this, a);
      }),
      J("dddd", 0, 0, function (a) {
        return this.localeData().weekdays(this, a);
      }),
      J("e", 0, 0, "weekday"),
      J("E", 0, 0, "isoWeekday"),
      A("day", "d"),
      A("weekday", "e"),
      A("isoWeekday", "E"),
      O("d", hd),
      O("e", hd),
      O("E", hd),
      O("dd", sd),
      O("ddd", sd),
      O("dddd", sd),
      T(["dd", "ddd", "dddd"], function (a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? (b.d = e) : (j(c).invalidWeekday = a);
      }),
      T(["d", "e", "E"], function (a, b, c, d) {
        b[d] = r(a);
      });
    var ae = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      be = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      ce = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
      A("dayOfYear", "DDD"),
      O("DDD", kd),
      O("DDDD", ed),
      S(["DDD", "DDDD"], function (a, b, c) {
        c._dayOfYear = r(a);
      }),
      J("H", ["HH", 2], 0, "hour"),
      J("h", ["hh", 2], 0, cc),
      J("hmm", 0, 0, function () {
        return "" + cc.apply(this) + I(this.minutes(), 2);
      }),
      J("hmmss", 0, 0, function () {
        return (
          "" + cc.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
        );
      }),
      J("Hmm", 0, 0, function () {
        return "" + this.hours() + I(this.minutes(), 2);
      }),
      J("Hmmss", 0, 0, function () {
        return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2);
      }),
      dc("a", !0),
      dc("A", !1),
      A("hour", "h"),
      O("a", ec),
      O("A", ec),
      O("H", hd),
      O("h", hd),
      O("HH", hd, dd),
      O("hh", hd, dd),
      O("hmm", id),
      O("hmmss", jd),
      O("Hmm", id),
      O("Hmmss", jd),
      S(["H", "HH"], yd),
      S(["a", "A"], function (a, b, c) {
        (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
      }),
      S(["h", "hh"], function (a, b, c) {
        (b[yd] = r(a)), (j(c).bigHour = !0);
      }),
      S("hmm", function (a, b, c) {
        var d = a.length - 2;
        (b[yd] = r(a.substr(0, d))),
          (b[zd] = r(a.substr(d))),
          (j(c).bigHour = !0);
      }),
      S("hmmss", function (a, b, c) {
        var d = a.length - 4,
          e = a.length - 2;
        (b[yd] = r(a.substr(0, d))),
          (b[zd] = r(a.substr(d, 2))),
          (b[Ad] = r(a.substr(e))),
          (j(c).bigHour = !0);
      }),
      S("Hmm", function (a, b, c) {
        var d = a.length - 2;
        (b[yd] = r(a.substr(0, d))), (b[zd] = r(a.substr(d)));
      }),
      S("Hmmss", function (a, b, c) {
        var d = a.length - 4,
          e = a.length - 2;
        (b[yd] = r(a.substr(0, d))),
          (b[zd] = r(a.substr(d, 2))),
          (b[Ad] = r(a.substr(e)));
      });
    var de = /[ap]\.?m?\.?/i,
      ee = E("Hours", !0);
    J("m", ["mm", 2], 0, "minute"),
      A("minute", "m"),
      O("m", hd),
      O("mm", hd, dd),
      S(["m", "mm"], zd);
    var fe = E("Minutes", !1);
    J("s", ["ss", 2], 0, "second"),
      A("second", "s"),
      O("s", hd),
      O("ss", hd, dd),
      S(["s", "ss"], Ad);
    var ge = E("Seconds", !1);
    J("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      J(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      J(0, ["SSS", 3], 0, "millisecond"),
      J(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }),
      J(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }),
      J(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      J(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      J(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      J(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      A("millisecond", "ms"),
      O("S", kd, cd),
      O("SS", kd, dd),
      O("SSS", kd, ed);
    var he;
    for (he = "SSSS"; he.length <= 9; he += "S") O(he, nd);
    for (he = "S"; he.length <= 9; he += "S") S(he, hc);
    var ie = E("Milliseconds", !1);
    J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
    var je = o.prototype;
    (je.add = Xd),
      (je.calendar = db),
      (je.clone = eb),
      (je.diff = lb),
      (je.endOf = xb),
      (je.format = pb),
      (je.from = qb),
      (je.fromNow = rb),
      (je.to = sb),
      (je.toNow = tb),
      (je.get = H),
      (je.invalidAt = Gb),
      (je.isAfter = fb),
      (je.isBefore = gb),
      (je.isBetween = hb),
      (je.isSame = ib),
      (je.isSameOrAfter = jb),
      (je.isSameOrBefore = kb),
      (je.isValid = Eb),
      (je.lang = Zd),
      (je.locale = ub),
      (je.localeData = vb),
      (je.max = Sd),
      (je.min = Rd),
      (je.parsingFlags = Fb),
      (je.set = H),
      (je.startOf = wb),
      (je.subtract = Yd),
      (je.toArray = Bb),
      (je.toObject = Cb),
      (je.toDate = Ab),
      (je.toISOString = ob),
      (je.toJSON = Db),
      (je.toString = nb),
      (je.unix = zb),
      (je.valueOf = yb),
      (je.creationData = Hb),
      (je.year = Qd),
      (je.isLeapYear = na),
      (je.weekYear = Jb),
      (je.isoWeekYear = Kb),
      (je.quarter = je.quarters = Pb),
      (je.month = $),
      (je.daysInMonth = _),
      (je.week = je.weeks = Tb),
      (je.isoWeek = je.isoWeeks = Ub),
      (je.weeksInYear = Mb),
      (je.isoWeeksInYear = Lb),
      (je.date = _d),
      (je.day = je.days = $b),
      (je.weekday = _b),
      (je.isoWeekday = ac),
      (je.dayOfYear = bc),
      (je.hour = je.hours = ee),
      (je.minute = je.minutes = fe),
      (je.second = je.seconds = ge),
      (je.millisecond = je.milliseconds = ie),
      (je.utcOffset = Oa),
      (je.utc = Qa),
      (je.local = Ra),
      (je.parseZone = Sa),
      (je.hasAlignedHourOffset = Ta),
      (je.isDST = Ua),
      (je.isDSTShifted = Va),
      (je.isLocal = Wa),
      (je.isUtcOffset = Xa),
      (je.isUtc = Ya),
      (je.isUTC = Ya),
      (je.zoneAbbr = ic),
      (je.zoneName = jc),
      (je.dates = fa("dates accessor is deprecated. Use date instead.", _d)),
      (je.months = fa("months accessor is deprecated. Use month instead", $)),
      (je.years = fa("years accessor is deprecated. Use year instead", Qd)),
      (je.zone = fa(
        "moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
        Pa
      ));
    var ke = je,
      le = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      },
      me = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      ne = "Invalid date",
      oe = "%d",
      pe = /\d{1,2}/,
      qe = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      },
      re = t.prototype;
    (re._calendar = le),
      (re.calendar = mc),
      (re._longDateFormat = me),
      (re.longDateFormat = nc),
      (re._invalidDate = ne),
      (re.invalidDate = oc),
      (re._ordinal = oe),
      (re.ordinal = pc),
      (re._ordinalParse = pe),
      (re.preparse = qc),
      (re.postformat = qc),
      (re._relativeTime = qe),
      (re.relativeTime = rc),
      (re.pastFuture = sc),
      (re.set = tc),
      (re.months = W),
      (re._months = Fd),
      (re.monthsShort = X),
      (re._monthsShort = Gd),
      (re.monthsParse = Y),
      (re._monthsRegex = Id),
      (re.monthsRegex = ba),
      (re._monthsShortRegex = Hd),
      (re.monthsShortRegex = aa),
      (re.week = Qb),
      (re._week = $d),
      (re.firstDayOfYear = Sb),
      (re.firstDayOfWeek = Rb),
      (re.weekdays = Wb),
      (re._weekdays = ae),
      (re.weekdaysMin = Yb),
      (re._weekdaysMin = ce),
      (re.weekdaysShort = Xb),
      (re._weekdaysShort = be),
      (re.weekdaysParse = Zb),
      (re.isPM = fc),
      (re._meridiemParse = de),
      (re.meridiem = gc),
      x("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (a) {
          var b = a % 10,
            c =
              1 === r((a % 100) / 10)
                ? "th"
                : 1 === b
                ? "st"
                : 2 === b
                ? "nd"
                : 3 === b
                ? "rd"
                : "th";
          return a + c;
        },
      }),
      (a.lang = fa("moment.lang is deprecated. Use moment.locale instead.", x)),
      (a.langData = fa(
        "moment.langData is deprecated. Use moment.localeData instead.",
        z
      ));
    var se = Math.abs,
      te = Lc("ms"),
      ue = Lc("s"),
      ve = Lc("m"),
      we = Lc("h"),
      xe = Lc("d"),
      ye = Lc("w"),
      ze = Lc("M"),
      Ae = Lc("y"),
      Be = Nc("milliseconds"),
      Ce = Nc("seconds"),
      De = Nc("minutes"),
      Ee = Nc("hours"),
      Fe = Nc("days"),
      Ge = Nc("months"),
      He = Nc("years"),
      Ie = Math.round,
      Je = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11,
      },
      Ke = Math.abs,
      Le = Ia.prototype;
    (Le.abs = Bc),
      (Le.add = Dc),
      (Le.subtract = Ec),
      (Le.as = Jc),
      (Le.asMilliseconds = te),
      (Le.asSeconds = ue),
      (Le.asMinutes = ve),
      (Le.asHours = we),
      (Le.asDays = xe),
      (Le.asWeeks = ye),
      (Le.asMonths = ze),
      (Le.asYears = Ae),
      (Le.valueOf = Kc),
      (Le._bubble = Gc),
      (Le.get = Mc),
      (Le.milliseconds = Be),
      (Le.seconds = Ce),
      (Le.minutes = De),
      (Le.hours = Ee),
      (Le.days = Fe),
      (Le.weeks = Oc),
      (Le.months = Ge),
      (Le.years = He),
      (Le.humanize = Sc),
      (Le.toISOString = Tc),
      (Le.toString = Tc),
      (Le.toJSON = Tc),
      (Le.locale = ub),
      (Le.localeData = vb),
      (Le.toIsoString = fa(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        Tc
      )),
      (Le.lang = Zd),
      J("X", 0, 0, "unix"),
      J("x", 0, 0, "valueOf"),
      O("x", od),
      O("X", rd),
      S("X", function (a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10));
      }),
      S("x", function (a, b, c) {
        c._d = new Date(r(a));
      }),
      (a.version = "2.11.2"),
      b(Ea),
      (a.fn = ke),
      (a.min = Ga),
      (a.max = Ha),
      (a.now = Td),
      (a.utc = h),
      (a.unix = kc),
      (a.months = wc),
      (a.isDate = d),
      (a.locale = x),
      (a.invalid = l),
      (a.duration = Za),
      (a.isMoment = p),
      (a.weekdays = yc),
      (a.parseZone = lc),
      (a.localeData = z),
      (a.isDuration = Ja),
      (a.monthsShort = xc),
      (a.weekdaysMin = Ac),
      (a.defineLocale = y),
      (a.weekdaysShort = zc),
      (a.normalizeUnits = B),
      (a.relativeTimeThreshold = Rc),
      (a.prototype = ke);
    var Me = a;
    return Me;
  }),
  (function (a, b) {
    "use strict";
    "object" == typeof module && module.exports && "function" == typeof require
      ? (module.exports = b())
      : "function" == typeof define && "object" == typeof define.amd
      ? define("loglevel", b)
      : (a.log = b());
  })(this, function () {
    "use strict";

    function a(a) {
      return (
        typeof console !== h &&
        (void 0 !== console[a]
          ? b(console, a)
          : void 0 !== console.log
          ? b(console, "log")
          : g)
      );
    }

    function b(a, b) {
      var c = a[b];
      if ("function" == typeof c.bind) return c.bind(a);
      try {
        return Function.prototype.bind.call(c, a);
      } catch (d) {
        return function () {
          return Function.prototype.apply.apply(c, [a, arguments]);
        };
      }
    }

    function c(a, b, c) {
      return function () {
        typeof console !== h &&
          (d.call(this, b, c), this[a].apply(this, arguments));
      };
    }

    function d(a, b) {
      for (var c = 0; c < i.length; c++) {
        var d = i[c];
        this[d] = c < a ? g : this.methodFactory(d, a, b);
      }
    }

    function e(b, d, e) {
      return a(b) || c.apply(this, arguments);
    }

    function f(a, b, c) {
      function f(a) {
        var b = (i[a] || "silent").toUpperCase();
        try {
          return void (window.localStorage[l] = b);
        } catch (c) {}
        try {
          window.document.cookie = encodeURIComponent(l) + "=" + b + ";";
        } catch (c) {}
      }

      function g() {
        var a;
        try {
          a = window.localStorage[l];
        } catch (b) {}
        if (typeof a === h)
          try {
            var c = window.document.cookie,
              d = c.indexOf(encodeURIComponent(l) + "=");
            d && (a = /^([^;]+)/.exec(c.slice(d))[1]);
          } catch (b) {}
        return void 0 === k.levels[a] && (a = void 0), a;
      }
      var j,
        k = this,
        l = "loglevel";
      a && (l += ":" + a),
        (k.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5,
        }),
        (k.methodFactory = c || e),
        (k.getLevel = function () {
          return j;
        }),
        (k.setLevel = function (b, c) {
          if (
            ("string" == typeof b &&
              void 0 !== k.levels[b.toUpperCase()] &&
              (b = k.levels[b.toUpperCase()]),
            !("number" == typeof b && b >= 0 && b <= k.levels.SILENT))
          )
            throw "log.setLevel() called with invalid level: " + b;
          if (
            ((j = b),
            c !== !1 && f(b),
            d.call(k, b, a),
            typeof console === h && b < k.levels.SILENT)
          )
            return "No console available for logging";
        }),
        (k.setDefaultLevel = function (a) {
          g() || k.setLevel(a, !1);
        }),
        (k.enableAll = function (a) {
          k.setLevel(k.levels.TRACE, a);
        }),
        (k.disableAll = function (a) {
          k.setLevel(k.levels.SILENT, a);
        });
      var m = g();
      null == m && (m = null == b ? "WARN" : b), k.setLevel(m, !1);
    }
    var g = function () {},
      h = "undefined",
      i = ["trace", "debug", "info", "warn", "error"],
      j = new f(),
      k = {};
    j.getLogger = function (a) {
      if ("string" != typeof a || "" === a)
        throw new TypeError("You must supply a name when creating a logger.");
      var b = k[a];
      return b || (b = k[a] = new f(a, j.getLevel(), j.methodFactory)), b;
    };
    var l = typeof window !== h ? window.log : void 0;
    return (
      (j.noConflict = function () {
        return typeof window !== h && window.log === j && (window.log = l), j;
      }),
      j
    );
  }),
  (window.Modernizr = (function (a, b, c) {
    function d(a) {
      o.cssText = a;
    }

    function e(a, b) {
      return typeof a === b;
    }
    var f,
      g,
      h,
      i = "2.6.2",
      j = {},
      k = !0,
      l = b.documentElement,
      m = "modernizr",
      n = b.createElement(m),
      o = n.style,
      p = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
      q = {},
      r = [],
      s = r.slice,
      t = function (a, c, d, e) {
        var f,
          g,
          h,
          i,
          j = b.createElement("div"),
          k = b.body,
          n = k || b.createElement("body");
        if (parseInt(d, 10))
          for (; d--; )
            (h = b.createElement("div")),
              (h.id = e ? e[d] : m + (d + 1)),
              j.appendChild(h);
        return (
          (f = ["&#173;", '<style id="s', m, '">', a, "</style>"].join("")),
          (j.id = m),
          ((k ? j : n).innerHTML += f),
          n.appendChild(j),
          k ||
            ((n.style.background = ""),
            (n.style.overflow = "hidden"),
            (i = l.style.overflow),
            (l.style.overflow = "hidden"),
            l.appendChild(n)),
          (g = c(j, a)),
          k
            ? j.parentNode.removeChild(j)
            : (n.parentNode.removeChild(n), (l.style.overflow = i)),
          !!g
        );
      },
      u = {}.hasOwnProperty;
    (h =
      e(u, "undefined") || e(u.call, "undefined")
        ? function (a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined");
          }
        : function (a, b) {
            return u.call(a, b);
          }),
      Function.prototype.bind ||
        (Function.prototype.bind = function (a) {
          var b = this;
          if ("function" != typeof b) throw new TypeError();
          var c = s.call(arguments, 1),
            d = function () {
              if (this instanceof d) {
                var e = function () {};
                e.prototype = b.prototype;
                var f = new e(),
                  g = b.apply(f, c.concat(s.call(arguments)));
                return Object(g) === g ? g : f;
              }
              return b.apply(a, c.concat(s.call(arguments)));
            };
          return d;
        }),
      (q.touch = function () {
        var c;
        return (
          "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
            ? (c = !0)
            : t(
                [
                  "@media (",
                  p.join("touch-enabled),("),
                  m,
                  ")",
                  "{#modernizr{top:9px;position:absolute}}",
                ].join(""),
                function (a) {
                  c = 9 === a.offsetTop;
                }
              ),
          c
        );
      }),
      (q.localstorage = function () {
        try {
          return localStorage.setItem(m, m), localStorage.removeItem(m), !0;
        } catch (a) {
          return !1;
        }
      }),
      (q.sessionstorage = function () {
        try {
          return sessionStorage.setItem(m, m), sessionStorage.removeItem(m), !0;
        } catch (a) {
          return !1;
        }
      });
    for (var v in q)
      h(q, v) &&
        ((g = v.toLowerCase()),
        (j[g] = q[v]()),
        r.push((j[g] ? "" : "no-") + g));
    return (
      (j.addTest = function (a, b) {
        if ("object" == typeof a)
          for (var d in a) h(a, d) && j.addTest(d, a[d]);
        else {
          if (((a = a.toLowerCase()), j[a] !== c)) return j;
          (b = "function" == typeof b ? b() : b),
            "undefined" != typeof k &&
              k &&
              (l.className += " " + (b ? "" : "no-") + a),
            (j[a] = b);
        }
        return j;
      }),
      d(""),
      (n = f = null),
      (j._version = i),
      (j._prefixes = p),
      (j.testStyles = t),
      (l.className =
        l.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        (k ? " js " + r.join(" ") : "")),
      j
    );
  })(this, this.document)),
  Modernizr.addTest(
    "contenteditable",
    "contentEditable" in document.documentElement
  ),
  define(
    "modernizr",
    (function (a) {
      return function () {
        var b;
        return b || a.Modernizr;
      };
    })(this)
  ),
  (function (a) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = a();
    else if ("function" == typeof define && define.amd) define("raven", [], a);
    else {
      var b;
      (b =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this),
        (b.Raven = a());
    }
  })(function () {
    return (function a(b, c, d) {
      function e(g, h) {
        if (!c[g]) {
          if (!b[g]) {
            var i = "function" == typeof require && require;
            if (!h && i) return i(g, !0);
            if (f) return f(g, !0);
            var j = new Error("Cannot find module '" + g + "'");
            throw ((j.code = "MODULE_NOT_FOUND"), j);
          }
          var k = (c[g] = {
            exports: {},
          });
          b[g][0].call(
            k.exports,
            function (a) {
              var c = b[g][1][a];
              return e(c ? c : a);
            },
            k,
            k.exports,
            a,
            b,
            c,
            d
          );
        }
        return c[g].exports;
      }
      for (
        var f = "function" == typeof require && require, g = 0;
        g < d.length;
        g++
      )
        e(d[g]);
      return e;
    })(
      {
        1: [
          function (a, b, c) {
            function d(a) {
              (this.name = "RavenConfigError"), (this.message = a);
            }
            (d.prototype = new Error()),
              (d.prototype.constructor = d),
              (b.exports = d);
          },
          {},
        ],
        2: [
          function (a, b, c) {
            var d = a(5),
              e = function (a, b, c) {
                var e = a[b],
                  f = a;
                if (b in a) {
                  var g = "warn" === b ? "warning" : b;
                  a[b] = function () {
                    var a = [].slice.call(arguments),
                      h = d.safeJoin(a, " "),
                      i = {
                        level: g,
                        logger: "console",
                        extra: {
                          arguments: a,
                        },
                      };
                    "assert" === b
                      ? a[0] === !1 &&
                        ((h =
                          "Assertion failed: " +
                          (d.safeJoin(a.slice(1), " ") || "console.assert")),
                        (i.extra.arguments = a.slice(1)),
                        c && c(h, i))
                      : c && c(h, i),
                      e && Function.prototype.apply.call(e, f, a);
                  };
                }
              };
            b.exports = {
              wrapMethod: e,
            };
          },
          {
            5: 5,
          },
        ],
        3: [
          function (a, b, c) {
            (function (c) {
              function d() {
                return +new Date();
              }

              function e(a, b) {
                return s(b)
                  ? function (c) {
                      return b(c, a);
                    }
                  : b;
              }

              function f() {
                (this._hasJSON = !("object" != typeof JSON || !JSON.stringify)),
                  (this._hasDocument = !r(S)),
                  (this._hasNavigator = !r(T)),
                  (this._lastCapturedException = null),
                  (this._lastData = null),
                  (this._lastEventId = null),
                  (this._globalServer = null),
                  (this._globalKey = null),
                  (this._globalProject = null),
                  (this._globalContext = {}),
                  (this._globalOptions = {
                    release: R.SENTRY_RELEASE && R.SENTRY_RELEASE.id,
                    logger: "javascript",
                    ignoreErrors: [],
                    ignoreUrls: [],
                    whitelistUrls: [],
                    includePaths: [],
                    headers: null,
                    collectWindowErrors: !0,
                    captureUnhandledRejections: !0,
                    maxMessageLength: 0,
                    maxUrlLength: 250,
                    stackTraceLimit: 50,
                    autoBreadcrumbs: !0,
                    instrument: !0,
                    sampleRate: 1,
                    sanitizeKeys: [],
                  }),
                  (this._fetchDefaults = {
                    method: "POST",
                    referrerPolicy: K() ? "origin" : "",
                  }),
                  (this._ignoreOnError = 0),
                  (this._isRavenInstalled = !1),
                  (this._originalErrorStackTraceLimit = Error.stackTraceLimit),
                  (this._originalConsole = R.console || {}),
                  (this._originalConsoleMethods = {}),
                  (this._plugins = []),
                  (this._startTime = d()),
                  (this._wrappedBuiltIns = []),
                  (this._breadcrumbs = []),
                  (this._lastCapturedEvent = null),
                  this._keypressTimeout,
                  (this._location = R.location),
                  (this._lastHref = this._location && this._location.href),
                  this._resetBackoff();
                for (var a in this._originalConsole)
                  this._originalConsoleMethods[a] = this._originalConsole[a];
              }
              var g = a(6),
                h = a(7),
                i = a(8),
                j = a(1),
                k = a(5),
                l = k.isErrorEvent,
                m = k.isDOMError,
                n = k.isDOMException,
                o = k.isError,
                p = k.isObject,
                q = k.isPlainObject,
                r = k.isUndefined,
                s = k.isFunction,
                t = k.isString,
                u = k.isArray,
                v = k.isEmptyObject,
                w = k.each,
                x = k.objectMerge,
                y = k.truncate,
                z = k.objectFrozen,
                A = k.hasKey,
                B = k.joinRegExp,
                C = k.urlencode,
                D = k.uuid4,
                E = k.htmlTreeAsString,
                F = k.isSameException,
                G = k.isSameStacktrace,
                H = k.parseUrl,
                I = k.fill,
                J = k.supportsFetch,
                K = k.supportsReferrerPolicy,
                L = k.serializeKeysForMessage,
                M = k.serializeException,
                N = k.sanitize,
                O = a(2).wrapMethod,
                P = "source protocol user pass host port path".split(" "),
                Q =
                  /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,
                R =
                  "undefined" != typeof window
                    ? window
                    : "undefined" != typeof c
                    ? c
                    : "undefined" != typeof self
                    ? self
                    : {},
                S = R.document,
                T = R.navigator;
              (f.prototype = {
                VERSION: "3.27.0",
                debug: !1,
                TraceKit: g,
                config: function (a, b) {
                  var c = this;
                  if (c._globalServer)
                    return (
                      this._logDebug(
                        "error",
                        "Error: Raven has already been configured"
                      ),
                      c
                    );
                  if (!a) return c;
                  var d = c._globalOptions;
                  b &&
                    w(b, function (a, b) {
                      "tags" === a || "extra" === a || "user" === a
                        ? (c._globalContext[a] = b)
                        : (d[a] = b);
                    }),
                    c.setDSN(a),
                    d.ignoreErrors.push(/^Script error\.?$/),
                    d.ignoreErrors.push(
                      /^Javascript error: Script error\.? on line 0$/
                    ),
                    (d.ignoreErrors = B(d.ignoreErrors)),
                    (d.ignoreUrls = !!d.ignoreUrls.length && B(d.ignoreUrls)),
                    (d.whitelistUrls =
                      !!d.whitelistUrls.length && B(d.whitelistUrls)),
                    (d.includePaths = B(d.includePaths)),
                    (d.maxBreadcrumbs = Math.max(
                      0,
                      Math.min(d.maxBreadcrumbs || 100, 100)
                    ));
                  var e = {
                      xhr: !0,
                      console: !0,
                      dom: !0,
                      location: !0,
                      sentry: !0,
                    },
                    f = d.autoBreadcrumbs;
                  "[object Object]" === {}.toString.call(f)
                    ? (f = x(e, f))
                    : f !== !1 && (f = e),
                    (d.autoBreadcrumbs = f);
                  var h = {
                      tryCatch: !0,
                    },
                    i = d.instrument;
                  return (
                    "[object Object]" === {}.toString.call(i)
                      ? (i = x(h, i))
                      : i !== !1 && (i = h),
                    (d.instrument = i),
                    (g.collectWindowErrors = !!d.collectWindowErrors),
                    c
                  );
                },
                install: function () {
                  var a = this;
                  return (
                    a.isSetup() &&
                      !a._isRavenInstalled &&
                      (g.report.subscribe(function () {
                        a._handleOnErrorStackInfo.apply(a, arguments);
                      }),
                      a._globalOptions.captureUnhandledRejections &&
                        a._attachPromiseRejectionHandler(),
                      a._patchFunctionToString(),
                      a._globalOptions.instrument &&
                        a._globalOptions.instrument.tryCatch &&
                        a._instrumentTryCatch(),
                      a._globalOptions.autoBreadcrumbs &&
                        a._instrumentBreadcrumbs(),
                      a._drainPlugins(),
                      (a._isRavenInstalled = !0)),
                    (Error.stackTraceLimit = a._globalOptions.stackTraceLimit),
                    this
                  );
                },
                setDSN: function (a) {
                  var b = this,
                    c = b._parseDSN(a),
                    d = c.path.lastIndexOf("/"),
                    e = c.path.substr(1, d);
                  (b._dsn = a),
                    (b._globalKey = c.user),
                    (b._globalSecret = c.pass && c.pass.substr(1)),
                    (b._globalProject = c.path.substr(d + 1)),
                    (b._globalServer = b._getGlobalServer(c)),
                    (b._globalEndpoint =
                      b._globalServer +
                      "/" +
                      e +
                      "api/" +
                      b._globalProject +
                      "/store/"),
                    this._resetBackoff();
                },
                context: function (a, b, c) {
                  return (
                    s(a) && ((c = b || []), (b = a), (a = {})),
                    this.wrap(a, b).apply(this, c)
                  );
                },
                wrap: function (a, b, c) {
                  function d() {
                    var d = [],
                      f = arguments.length,
                      g = !a || (a && a.deep !== !1);
                    for (c && s(c) && c.apply(this, arguments); f--; )
                      d[f] = g ? e.wrap(a, arguments[f]) : arguments[f];
                    try {
                      return b.apply(this, d);
                    } catch (h) {
                      throw (
                        (e._ignoreNextOnError(), e.captureException(h, a), h)
                      );
                    }
                  }
                  var e = this;
                  if (r(b) && !s(a)) return a;
                  if ((s(a) && ((b = a), (a = void 0)), !s(b))) return b;
                  try {
                    if (b.__raven__) return b;
                    if (b.__raven_wrapper__) return b.__raven_wrapper__;
                  } catch (f) {
                    return b;
                  }
                  for (var g in b) A(b, g) && (d[g] = b[g]);
                  return (
                    (d.prototype = b.prototype),
                    (b.__raven_wrapper__ = d),
                    (d.__raven__ = !0),
                    (d.__orig__ = b),
                    d
                  );
                },
                uninstall: function () {
                  return (
                    g.report.uninstall(),
                    this._detachPromiseRejectionHandler(),
                    this._unpatchFunctionToString(),
                    this._restoreBuiltIns(),
                    this._restoreConsole(),
                    (Error.stackTraceLimit =
                      this._originalErrorStackTraceLimit),
                    (this._isRavenInstalled = !1),
                    this
                  );
                },
                _promiseRejectionHandler: function (a) {
                  this._logDebug(
                    "debug",
                    "Raven caught unhandled promise rejection:",
                    a
                  ),
                    this.captureException(a.reason, {
                      mechanism: {
                        type: "onunhandledrejection",
                        handled: !1,
                      },
                    });
                },
                _attachPromiseRejectionHandler: function () {
                  return (
                    (this._promiseRejectionHandler =
                      this._promiseRejectionHandler.bind(this)),
                    R.addEventListener &&
                      R.addEventListener(
                        "unhandledrejection",
                        this._promiseRejectionHandler
                      ),
                    this
                  );
                },
                _detachPromiseRejectionHandler: function () {
                  return (
                    R.removeEventListener &&
                      R.removeEventListener(
                        "unhandledrejection",
                        this._promiseRejectionHandler
                      ),
                    this
                  );
                },
                captureException: function (a, b) {
                  if (
                    ((b = x(
                      {
                        trimHeadFrames: 0,
                      },
                      b ? b : {}
                    )),
                    l(a) && a.error)
                  )
                    a = a.error;
                  else {
                    if (m(a) || n(a)) {
                      var c = a.name || (m(a) ? "DOMError" : "DOMException"),
                        d = a.message ? c + ": " + a.message : c;
                      return this.captureMessage(
                        d,
                        x(b, {
                          stacktrace: !0,
                          trimHeadFrames: b.trimHeadFrames + 1,
                        })
                      );
                    }
                    if (o(a)) a = a;
                    else {
                      if (!q(a))
                        return this.captureMessage(
                          a,
                          x(b, {
                            stacktrace: !0,
                            trimHeadFrames: b.trimHeadFrames + 1,
                          })
                        );
                      (b = this._getCaptureExceptionOptionsFromPlainObject(
                        b,
                        a
                      )),
                        (a = new Error(b.message));
                    }
                  }
                  this._lastCapturedException = a;
                  try {
                    var e = g.computeStackTrace(a);
                    this._handleStackInfo(e, b);
                  } catch (f) {
                    if (a !== f) throw f;
                  }
                  return this;
                },
                _getCaptureExceptionOptionsFromPlainObject: function (a, b) {
                  var c = Object.keys(b).sort(),
                    d = x(a, {
                      message:
                        "Non-Error exception captured with keys: " + L(c),
                      fingerprint: [i(c)],
                      extra: a.extra || {},
                    });
                  return (d.extra.__serialized__ = M(b)), d;
                },
                captureMessage: function (a, b) {
                  if (
                    !this._globalOptions.ignoreErrors.test ||
                    !this._globalOptions.ignoreErrors.test(a)
                  ) {
                    (b = b || {}), (a += "");
                    var c,
                      d = x(
                        {
                          message: a,
                        },
                        b
                      );
                    try {
                      throw new Error(a);
                    } catch (e) {
                      c = e;
                    }
                    c.name = null;
                    var f = g.computeStackTrace(c),
                      h = u(f.stack) && f.stack[1];
                    h &&
                      "Raven.captureException" === h.func &&
                      (h = f.stack[2]);
                    var i = (h && h.url) || "";
                    if (
                      (!this._globalOptions.ignoreUrls.test ||
                        !this._globalOptions.ignoreUrls.test(i)) &&
                      (!this._globalOptions.whitelistUrls.test ||
                        this._globalOptions.whitelistUrls.test(i))
                    ) {
                      if (
                        this._globalOptions.stacktrace ||
                        b.stacktrace ||
                        "" === d.message
                      ) {
                        (d.fingerprint =
                          null == d.fingerprint ? a : d.fingerprint),
                          (b = x(
                            {
                              trimHeadFrames: 0,
                            },
                            b
                          )),
                          (b.trimHeadFrames += 1);
                        var j = this._prepareFrames(f, b);
                        d.stacktrace = {
                          frames: j.reverse(),
                        };
                      }
                      return (
                        d.fingerprint &&
                          (d.fingerprint = u(d.fingerprint)
                            ? d.fingerprint
                            : [d.fingerprint]),
                        this._send(d),
                        this
                      );
                    }
                  }
                },
                captureBreadcrumb: function (a) {
                  var b = x(
                    {
                      timestamp: d() / 1e3,
                    },
                    a
                  );
                  if (s(this._globalOptions.breadcrumbCallback)) {
                    var c = this._globalOptions.breadcrumbCallback(b);
                    if (p(c) && !v(c)) b = c;
                    else if (c === !1) return this;
                  }
                  return (
                    this._breadcrumbs.push(b),
                    this._breadcrumbs.length >
                      this._globalOptions.maxBreadcrumbs &&
                      this._breadcrumbs.shift(),
                    this
                  );
                },
                addPlugin: function (a) {
                  var b = [].slice.call(arguments, 1);
                  return (
                    this._plugins.push([a, b]),
                    this._isRavenInstalled && this._drainPlugins(),
                    this
                  );
                },
                setUserContext: function (a) {
                  return (this._globalContext.user = a), this;
                },
                setExtraContext: function (a) {
                  return this._mergeContext("extra", a), this;
                },
                setTagsContext: function (a) {
                  return this._mergeContext("tags", a), this;
                },
                clearContext: function () {
                  return (this._globalContext = {}), this;
                },
                getContext: function () {
                  return JSON.parse(h(this._globalContext));
                },
                setEnvironment: function (a) {
                  return (this._globalOptions.environment = a), this;
                },
                setRelease: function (a) {
                  return (this._globalOptions.release = a), this;
                },
                setDataCallback: function (a) {
                  var b = this._globalOptions.dataCallback;
                  return (this._globalOptions.dataCallback = e(b, a)), this;
                },
                setBreadcrumbCallback: function (a) {
                  var b = this._globalOptions.breadcrumbCallback;
                  return (
                    (this._globalOptions.breadcrumbCallback = e(b, a)), this
                  );
                },
                setShouldSendCallback: function (a) {
                  var b = this._globalOptions.shouldSendCallback;
                  return (
                    (this._globalOptions.shouldSendCallback = e(b, a)), this
                  );
                },
                setTransport: function (a) {
                  return (this._globalOptions.transport = a), this;
                },
                lastException: function () {
                  return this._lastCapturedException;
                },
                lastEventId: function () {
                  return this._lastEventId;
                },
                isSetup: function () {
                  return (
                    !!this._hasJSON &&
                    (!!this._globalServer ||
                      (this.ravenNotConfiguredError ||
                        ((this.ravenNotConfiguredError = !0),
                        this._logDebug(
                          "error",
                          "Error: Raven has not been configured."
                        )),
                      !1))
                  );
                },
                afterLoad: function () {
                  var a = R.RavenConfig;
                  a && this.config(a.dsn, a.config).install();
                },
                showReportDialog: function (a) {
                  if (S) {
                    if (
                      ((a = x(
                        {
                          eventId: this.lastEventId(),
                          dsn: this._dsn,
                          user: this._globalContext.user || {},
                        },
                        a
                      )),
                      !a.eventId)
                    )
                      throw new j("Missing eventId");
                    if (!a.dsn) throw new j("Missing DSN");
                    var b = encodeURIComponent,
                      c = [];
                    for (var d in a)
                      if ("user" === d) {
                        var e = a.user;
                        e.name && c.push("name=" + b(e.name)),
                          e.email && c.push("email=" + b(e.email));
                      } else c.push(b(d) + "=" + b(a[d]));
                    var f = this._getGlobalServer(this._parseDSN(a.dsn)),
                      g = S.createElement("script");
                    (g.async = !0),
                      (g.src = f + "/api/embed/error-page/?" + c.join("&")),
                      (S.head || S.body).appendChild(g);
                  }
                },
                _ignoreNextOnError: function () {
                  var a = this;
                  (this._ignoreOnError += 1),
                    setTimeout(function () {
                      a._ignoreOnError -= 1;
                    });
                },
                _triggerEvent: function (a, b) {
                  var c, d;
                  if (this._hasDocument) {
                    (b = b || {}),
                      (a =
                        "raven" + a.substr(0, 1).toUpperCase() + a.substr(1)),
                      S.createEvent
                        ? ((c = S.createEvent("HTMLEvents")),
                          c.initEvent(a, !0, !0))
                        : ((c = S.createEventObject()), (c.eventType = a));
                    for (d in b) A(b, d) && (c[d] = b[d]);
                    if (S.createEvent) S.dispatchEvent(c);
                    else
                      try {
                        S.fireEvent("on" + c.eventType.toLowerCase(), c);
                      } catch (e) {}
                  }
                },
                _breadcrumbEventHandler: function (a) {
                  var b = this;
                  return function (c) {
                    if (
                      ((b._keypressTimeout = null), b._lastCapturedEvent !== c)
                    ) {
                      b._lastCapturedEvent = c;
                      var d;
                      try {
                        d = E(c.target);
                      } catch (e) {
                        d = "<unknown>";
                      }
                      b.captureBreadcrumb({
                        category: "ui." + a,
                        message: d,
                      });
                    }
                  };
                },
                _keypressEventHandler: function () {
                  var a = this,
                    b = 1e3;
                  return function (c) {
                    var d;
                    try {
                      d = c.target;
                    } catch (e) {
                      return;
                    }
                    var f = d && d.tagName;
                    if (
                      f &&
                      ("INPUT" === f || "TEXTAREA" === f || d.isContentEditable)
                    ) {
                      var g = a._keypressTimeout;
                      g || a._breadcrumbEventHandler("input")(c),
                        clearTimeout(g),
                        (a._keypressTimeout = setTimeout(function () {
                          a._keypressTimeout = null;
                        }, b));
                    }
                  };
                },
                _captureUrlChange: function (a, b) {
                  var c = H(this._location.href),
                    d = H(b),
                    e = H(a);
                  (this._lastHref = b),
                    c.protocol === d.protocol &&
                      c.host === d.host &&
                      (b = d.relative),
                    c.protocol === e.protocol &&
                      c.host === e.host &&
                      (a = e.relative),
                    this.captureBreadcrumb({
                      category: "navigation",
                      data: {
                        to: b,
                        from: a,
                      },
                    });
                },
                _patchFunctionToString: function () {
                  var a = this;
                  (a._originalFunctionToString = Function.prototype.toString),
                    (Function.prototype.toString = function () {
                      return "function" == typeof this && this.__raven__
                        ? a._originalFunctionToString.apply(
                            this.__orig__,
                            arguments
                          )
                        : a._originalFunctionToString.apply(this, arguments);
                    });
                },
                _unpatchFunctionToString: function () {
                  this._originalFunctionToString &&
                    (Function.prototype.toString =
                      this._originalFunctionToString);
                },
                _instrumentTryCatch: function () {
                  function a(a) {
                    return function (b, d) {
                      for (
                        var e = new Array(arguments.length), f = 0;
                        f < e.length;
                        ++f
                      )
                        e[f] = arguments[f];
                      var g = e[0];
                      return (
                        s(g) &&
                          (e[0] = c.wrap(
                            {
                              mechanism: {
                                type: "instrument",
                                data: {
                                  function: a.name || "<anonymous>",
                                },
                              },
                            },
                            g
                          )),
                        a.apply ? a.apply(this, e) : a(e[0], e[1])
                      );
                    };
                  }

                  function b(a) {
                    var b = R[a] && R[a].prototype;
                    b &&
                      b.hasOwnProperty &&
                      b.hasOwnProperty("addEventListener") &&
                      (I(
                        b,
                        "addEventListener",
                        function (b) {
                          return function (d, f, g, h) {
                            try {
                              f &&
                                f.handleEvent &&
                                (f.handleEvent = c.wrap(
                                  {
                                    mechanism: {
                                      type: "instrument",
                                      data: {
                                        target: a,
                                        function: "handleEvent",
                                        handler: (f && f.name) || "<anonymous>",
                                      },
                                    },
                                  },
                                  f.handleEvent
                                ));
                            } catch (i) {}
                            var j, k, l;
                            return (
                              e &&
                                e.dom &&
                                ("EventTarget" === a || "Node" === a) &&
                                ((k = c._breadcrumbEventHandler("click")),
                                (l = c._keypressEventHandler()),
                                (j = function (a) {
                                  if (a) {
                                    var b;
                                    try {
                                      b = a.type;
                                    } catch (c) {
                                      return;
                                    }
                                    return "click" === b
                                      ? k(a)
                                      : "keypress" === b
                                      ? l(a)
                                      : void 0;
                                  }
                                })),
                              b.call(
                                this,
                                d,
                                c.wrap(
                                  {
                                    mechanism: {
                                      type: "instrument",
                                      data: {
                                        target: a,
                                        function: "addEventListener",
                                        handler: (f && f.name) || "<anonymous>",
                                      },
                                    },
                                  },
                                  f,
                                  j
                                ),
                                g,
                                h
                              )
                            );
                          };
                        },
                        d
                      ),
                      I(
                        b,
                        "removeEventListener",
                        function (a) {
                          return function (b, c, d, e) {
                            try {
                              c =
                                c &&
                                (c.__raven_wrapper__ ? c.__raven_wrapper__ : c);
                            } catch (f) {}
                            return a.call(this, b, c, d, e);
                          };
                        },
                        d
                      ));
                  }
                  var c = this,
                    d = c._wrappedBuiltIns,
                    e = this._globalOptions.autoBreadcrumbs;
                  I(R, "setTimeout", a, d),
                    I(R, "setInterval", a, d),
                    R.requestAnimationFrame &&
                      I(
                        R,
                        "requestAnimationFrame",
                        function (a) {
                          return function (b) {
                            return a(
                              c.wrap(
                                {
                                  mechanism: {
                                    type: "instrument",
                                    data: {
                                      function: "requestAnimationFrame",
                                      handler: (a && a.name) || "<anonymous>",
                                    },
                                  },
                                },
                                b
                              )
                            );
                          };
                        },
                        d
                      );
                  for (
                    var f = [
                        "EventTarget",
                        "Window",
                        "Node",
                        "ApplicationCache",
                        "AudioTrackList",
                        "ChannelMergerNode",
                        "CryptoOperation",
                        "EventSource",
                        "FileReader",
                        "HTMLUnknownElement",
                        "IDBDatabase",
                        "IDBRequest",
                        "IDBTransaction",
                        "KeyOperation",
                        "MediaController",
                        "MessagePort",
                        "ModalWindow",
                        "Notification",
                        "SVGElementInstance",
                        "Screen",
                        "TextTrack",
                        "TextTrackCue",
                        "TextTrackList",
                        "WebSocket",
                        "WebSocketWorker",
                        "Worker",
                        "XMLHttpRequest",
                        "XMLHttpRequestEventTarget",
                        "XMLHttpRequestUpload",
                      ],
                      g = 0;
                    g < f.length;
                    g++
                  )
                    b(f[g]);
                },
                _instrumentBreadcrumbs: function () {
                  function a(a, c) {
                    a in c &&
                      s(c[a]) &&
                      I(c, a, function (c) {
                        return b.wrap(
                          {
                            mechanism: {
                              type: "instrument",
                              data: {
                                function: a,
                                handler: (c && c.name) || "<anonymous>",
                              },
                            },
                          },
                          c
                        );
                      });
                  }
                  var b = this,
                    c = this._globalOptions.autoBreadcrumbs,
                    d = b._wrappedBuiltIns;
                  if (c.xhr && "XMLHttpRequest" in R) {
                    var e = R.XMLHttpRequest && R.XMLHttpRequest.prototype;
                    I(
                      e,
                      "open",
                      function (a) {
                        return function (c, d) {
                          return (
                            t(d) &&
                              d.indexOf(b._globalKey) === -1 &&
                              (this.__raven_xhr = {
                                method: c,
                                url: d,
                                status_code: null,
                              }),
                            a.apply(this, arguments)
                          );
                        };
                      },
                      d
                    ),
                      I(
                        e,
                        "send",
                        function (c) {
                          return function () {
                            function d() {
                              if (e.__raven_xhr && 4 === e.readyState) {
                                try {
                                  e.__raven_xhr.status_code = e.status;
                                } catch (a) {}
                                b.captureBreadcrumb({
                                  type: "http",
                                  category: "xhr",
                                  data: e.__raven_xhr,
                                });
                              }
                            }
                            for (
                              var e = this,
                                f = ["onload", "onerror", "onprogress"],
                                g = 0;
                              g < f.length;
                              g++
                            )
                              a(f[g], e);
                            return (
                              "onreadystatechange" in e &&
                              s(e.onreadystatechange)
                                ? I(e, "onreadystatechange", function (a) {
                                    return b.wrap(
                                      {
                                        mechanism: {
                                          type: "instrument",
                                          data: {
                                            function: "onreadystatechange",
                                            handler:
                                              (a && a.name) || "<anonymous>",
                                          },
                                        },
                                      },
                                      a,
                                      d
                                    );
                                  })
                                : (e.onreadystatechange = d),
                              c.apply(this, arguments)
                            );
                          };
                        },
                        d
                      );
                  }
                  c.xhr &&
                    J() &&
                    I(
                      R,
                      "fetch",
                      function (a) {
                        return function () {
                          for (
                            var c = new Array(arguments.length), d = 0;
                            d < c.length;
                            ++d
                          )
                            c[d] = arguments[d];
                          var e,
                            f = c[0],
                            g = "GET";
                          if (
                            ("string" == typeof f
                              ? (e = f)
                              : "Request" in R && f instanceof R.Request
                              ? ((e = f.url), f.method && (g = f.method))
                              : (e = "" + f),
                            e.indexOf(b._globalKey) !== -1)
                          )
                            return a.apply(this, c);
                          c[1] && c[1].method && (g = c[1].method);
                          var h = {
                            method: g,
                            url: e,
                            status_code: null,
                          };
                          return a
                            .apply(this, c)
                            .then(function (a) {
                              return (
                                (h.status_code = a.status),
                                b.captureBreadcrumb({
                                  type: "http",
                                  category: "fetch",
                                  data: h,
                                }),
                                a
                              );
                            })
                            ["catch"](function (a) {
                              throw (
                                (b.captureBreadcrumb({
                                  type: "http",
                                  category: "fetch",
                                  data: h,
                                  level: "error",
                                }),
                                a)
                              );
                            });
                        };
                      },
                      d
                    ),
                    c.dom &&
                      this._hasDocument &&
                      (S.addEventListener
                        ? (S.addEventListener(
                            "click",
                            b._breadcrumbEventHandler("click"),
                            !1
                          ),
                          S.addEventListener(
                            "keypress",
                            b._keypressEventHandler(),
                            !1
                          ))
                        : S.attachEvent &&
                          (S.attachEvent(
                            "onclick",
                            b._breadcrumbEventHandler("click")
                          ),
                          S.attachEvent(
                            "onkeypress",
                            b._keypressEventHandler()
                          )));
                  var f = R.chrome,
                    g = f && f.app && f.app.runtime,
                    h =
                      !g &&
                      R.history &&
                      R.history.pushState &&
                      R.history.replaceState;
                  if (c.location && h) {
                    var i = R.onpopstate;
                    R.onpopstate = function () {
                      var a = b._location.href;
                      if ((b._captureUrlChange(b._lastHref, a), i))
                        return i.apply(this, arguments);
                    };
                    var j = function (a) {
                      return function () {
                        var c = arguments.length > 2 ? arguments[2] : void 0;
                        return (
                          c && b._captureUrlChange(b._lastHref, c + ""),
                          a.apply(this, arguments)
                        );
                      };
                    };
                    I(R.history, "pushState", j, d),
                      I(R.history, "replaceState", j, d);
                  }
                  if (c.console && "console" in R && console.log) {
                    var k = function (a, c) {
                      b.captureBreadcrumb({
                        message: a,
                        level: c.level,
                        category: "console",
                      });
                    };
                    w(
                      ["debug", "info", "warn", "error", "log"],
                      function (a, b) {
                        O(console, b, k);
                      }
                    );
                  }
                },
                _restoreBuiltIns: function () {
                  for (var a; this._wrappedBuiltIns.length; ) {
                    a = this._wrappedBuiltIns.shift();
                    var b = a[0],
                      c = a[1],
                      d = a[2];
                    b[c] = d;
                  }
                },
                _restoreConsole: function () {
                  for (var a in this._originalConsoleMethods)
                    this._originalConsole[a] = this._originalConsoleMethods[a];
                },
                _drainPlugins: function () {
                  var a = this;
                  w(this._plugins, function (b, c) {
                    var d = c[0],
                      e = c[1];
                    d.apply(a, [a].concat(e));
                  });
                },
                _parseDSN: function (a) {
                  var b = Q.exec(a),
                    c = {},
                    d = 7;
                  try {
                    for (; d--; ) c[P[d]] = b[d] || "";
                  } catch (e) {
                    throw new j("Invalid DSN: " + a);
                  }
                  if (c.pass && !this._globalOptions.allowSecretKey)
                    throw new j(
                      "Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key"
                    );
                  return c;
                },
                _getGlobalServer: function (a) {
                  var b = "//" + a.host + (a.port ? ":" + a.port : "");
                  return a.protocol && (b = a.protocol + ":" + b), b;
                },
                _handleOnErrorStackInfo: function (a, b) {
                  (b = b || {}),
                    (b.mechanism = b.mechanism || {
                      type: "onerror",
                      handled: !1,
                    }),
                    this._ignoreOnError || this._handleStackInfo(a, b);
                },
                _handleStackInfo: function (a, b) {
                  var c = this._prepareFrames(a, b);
                  this._triggerEvent("handle", {
                    stackInfo: a,
                    options: b,
                  }),
                    this._processException(
                      a.name,
                      a.message,
                      a.url,
                      a.lineno,
                      c,
                      b
                    );
                },
                _prepareFrames: function (a, b) {
                  var c = this,
                    d = [];
                  if (
                    a.stack &&
                    a.stack.length &&
                    (w(a.stack, function (b, e) {
                      var f = c._normalizeFrame(e, a.url);
                      f && d.push(f);
                    }),
                    b && b.trimHeadFrames)
                  )
                    for (var e = 0; e < b.trimHeadFrames && e < d.length; e++)
                      d[e].in_app = !1;
                  return (d = d.slice(0, this._globalOptions.stackTraceLimit));
                },
                _normalizeFrame: function (a, b) {
                  var c = {
                    filename: a.url,
                    lineno: a.line,
                    colno: a.column,
                    function: a.func || "?",
                  };
                  return (
                    a.url || (c.filename = b),
                    (c.in_app = !(
                      (this._globalOptions.includePaths.test &&
                        !this._globalOptions.includePaths.test(c.filename)) ||
                      /(Raven|TraceKit)\./.test(c["function"]) ||
                      /raven\.(min\.)?js$/.test(c.filename)
                    )),
                    c
                  );
                },
                _processException: function (a, b, c, d, e, f) {
                  var g = (a ? a + ": " : "") + (b || "");
                  if (
                    !this._globalOptions.ignoreErrors.test ||
                    (!this._globalOptions.ignoreErrors.test(b) &&
                      !this._globalOptions.ignoreErrors.test(g))
                  ) {
                    var h;
                    if (
                      (e && e.length
                        ? ((c = e[0].filename || c),
                          e.reverse(),
                          (h = {
                            frames: e,
                          }))
                        : c &&
                          (h = {
                            frames: [
                              {
                                filename: c,
                                lineno: d,
                                in_app: !0,
                              },
                            ],
                          }),
                      (!this._globalOptions.ignoreUrls.test ||
                        !this._globalOptions.ignoreUrls.test(c)) &&
                        (!this._globalOptions.whitelistUrls.test ||
                          this._globalOptions.whitelistUrls.test(c)))
                    ) {
                      var i = x(
                          {
                            exception: {
                              values: [
                                {
                                  type: a,
                                  value: b,
                                  stacktrace: h,
                                },
                              ],
                            },
                            transaction: c,
                          },
                          f
                        ),
                        j = i.exception.values[0];
                      null == j.type &&
                        "" === j.value &&
                        (j.value = "Unrecoverable error caught"),
                        !i.exception.mechanism &&
                          i.mechanism &&
                          ((i.exception.mechanism = i.mechanism),
                          delete i.mechanism),
                        (i.exception.mechanism = x(
                          {
                            type: "generic",
                            handled: !0,
                          },
                          i.exception.mechanism || {}
                        )),
                        this._send(i);
                    }
                  }
                },
                _trimPacket: function (a) {
                  var b = this._globalOptions.maxMessageLength;
                  if (
                    (a.message && (a.message = y(a.message, b)), a.exception)
                  ) {
                    var c = a.exception.values[0];
                    c.value = y(c.value, b);
                  }
                  var d = a.request;
                  return (
                    d &&
                      (d.url &&
                        (d.url = y(d.url, this._globalOptions.maxUrlLength)),
                      d.Referer &&
                        (d.Referer = y(
                          d.Referer,
                          this._globalOptions.maxUrlLength
                        ))),
                    a.breadcrumbs &&
                      a.breadcrumbs.values &&
                      this._trimBreadcrumbs(a.breadcrumbs),
                    a
                  );
                },
                _trimBreadcrumbs: function (a) {
                  for (
                    var b, c, d, e = ["to", "from", "url"], f = 0;
                    f < a.values.length;
                    ++f
                  )
                    if (
                      ((c = a.values[f]),
                      c.hasOwnProperty("data") && p(c.data) && !z(c.data))
                    ) {
                      d = x({}, c.data);
                      for (var g = 0; g < e.length; ++g)
                        (b = e[g]),
                          d.hasOwnProperty(b) &&
                            d[b] &&
                            (d[b] = y(d[b], this._globalOptions.maxUrlLength));
                      a.values[f].data = d;
                    }
                },
                _getHttpData: function () {
                  if (this._hasNavigator || this._hasDocument) {
                    var a = {};
                    return (
                      this._hasNavigator &&
                        T.userAgent &&
                        (a.headers = {
                          "User-Agent": T.userAgent,
                        }),
                      R.location &&
                        R.location.href &&
                        (a.url = R.location.href),
                      this._hasDocument &&
                        S.referrer &&
                        (a.headers || (a.headers = {}),
                        (a.headers.Referer = S.referrer)),
                      a
                    );
                  }
                },
                _resetBackoff: function () {
                  (this._backoffDuration = 0), (this._backoffStart = null);
                },
                _shouldBackoff: function () {
                  return (
                    this._backoffDuration &&
                    d() - this._backoffStart < this._backoffDuration
                  );
                },
                _isRepeatData: function (a) {
                  var b = this._lastData;
                  return (
                    !(
                      !b ||
                      a.message !== b.message ||
                      a.transaction !== b.transaction
                    ) &&
                    (a.stacktrace || b.stacktrace
                      ? G(a.stacktrace, b.stacktrace)
                      : (!a.exception && !b.exception) ||
                        F(a.exception, b.exception))
                  );
                },
                _setBackoffState: function (a) {
                  if (!this._shouldBackoff()) {
                    var b = a.status;
                    if (400 === b || 401 === b || 429 === b) {
                      var c;
                      try {
                        (c = J()
                          ? a.headers.get("Retry-After")
                          : a.getResponseHeader("Retry-After")),
                          (c = 1e3 * parseInt(c, 10));
                      } catch (e) {}
                      (this._backoffDuration = c
                        ? c
                        : 2 * this._backoffDuration || 1e3),
                        (this._backoffStart = d());
                    }
                  }
                },
                _send: function (a) {
                  var b = this._globalOptions,
                    c = {
                      project: this._globalProject,
                      logger: b.logger,
                      platform: "javascript",
                    },
                    e = this._getHttpData();
                  if (
                    (e && (c.request = e),
                    a.trimHeadFrames && delete a.trimHeadFrames,
                    (a = x(c, a)),
                    (a.tags = x(x({}, this._globalContext.tags), a.tags)),
                    (a.extra = x(x({}, this._globalContext.extra), a.extra)),
                    (a.extra["session:duration"] = d() - this._startTime),
                    this._breadcrumbs &&
                      this._breadcrumbs.length > 0 &&
                      (a.breadcrumbs = {
                        values: [].slice.call(this._breadcrumbs, 0),
                      }),
                    this._globalContext.user &&
                      (a.user = this._globalContext.user),
                    b.environment && (a.environment = b.environment),
                    b.release && (a.release = b.release),
                    b.serverName && (a.server_name = b.serverName),
                    (a = this._sanitizeData(a)),
                    Object.keys(a).forEach(function (b) {
                      (null == a[b] || "" === a[b] || v(a[b])) && delete a[b];
                    }),
                    s(b.dataCallback) && (a = b.dataCallback(a) || a),
                    a &&
                      !v(a) &&
                      (!s(b.shouldSendCallback) || b.shouldSendCallback(a)))
                  )
                    return this._shouldBackoff()
                      ? void this._logDebug(
                          "warn",
                          "Raven dropped error due to backoff: ",
                          a
                        )
                      : void ("number" == typeof b.sampleRate
                          ? Math.random() < b.sampleRate &&
                            this._sendProcessedPayload(a)
                          : this._sendProcessedPayload(a));
                },
                _sanitizeData: function (a) {
                  return N(a, this._globalOptions.sanitizeKeys);
                },
                _getUuid: function () {
                  return D();
                },
                _sendProcessedPayload: function (a, b) {
                  var c = this,
                    d = this._globalOptions;
                  if (this.isSetup()) {
                    if (
                      ((a = this._trimPacket(a)),
                      !this._globalOptions.allowDuplicates &&
                        this._isRepeatData(a))
                    )
                      return void this._logDebug(
                        "warn",
                        "Raven dropped repeat event: ",
                        a
                      );
                    (this._lastEventId =
                      a.event_id || (a.event_id = this._getUuid())),
                      (this._lastData = a),
                      this._logDebug("debug", "Raven about to send:", a);
                    var e = {
                      sentry_version: "7",
                      sentry_client: "raven-js/" + this.VERSION,
                      sentry_key: this._globalKey,
                    };
                    this._globalSecret &&
                      (e.sentry_secret = this._globalSecret);
                    var f = a.exception && a.exception.values[0];
                    this._globalOptions.autoBreadcrumbs &&
                      this._globalOptions.autoBreadcrumbs.sentry &&
                      this.captureBreadcrumb({
                        category: "sentry",
                        message: f
                          ? (f.type ? f.type + ": " : "") + f.value
                          : a.message,
                        event_id: a.event_id,
                        level: a.level || "error",
                      });
                    var g = this._globalEndpoint;
                    (d.transport || this._makeRequest).call(this, {
                      url: g,
                      auth: e,
                      data: a,
                      options: d,
                      onSuccess: function () {
                        c._resetBackoff(),
                          c._triggerEvent("success", {
                            data: a,
                            src: g,
                          }),
                          b && b();
                      },
                      onError: function (d) {
                        c._logDebug(
                          "error",
                          "Raven transport failed to send: ",
                          d
                        ),
                          d.request && c._setBackoffState(d.request),
                          c._triggerEvent("failure", {
                            data: a,
                            src: g,
                          }),
                          (d =
                            d ||
                            new Error(
                              "Raven send failed (no additional details provided)"
                            )),
                          b && b(d);
                      },
                    });
                  }
                },
                _makeRequest: function (a) {
                  var b = a.url + "?" + C(a.auth),
                    c = null,
                    d = {};
                  if (
                    (a.options.headers &&
                      (c = this._evaluateHash(a.options.headers)),
                    a.options.fetchParameters &&
                      (d = this._evaluateHash(a.options.fetchParameters)),
                    J())
                  ) {
                    d.body = h(a.data);
                    var e = x({}, this._fetchDefaults),
                      f = x(e, d);
                    return (
                      c && (f.headers = c),
                      R.fetch(b, f)
                        .then(function (b) {
                          if (b.ok) a.onSuccess && a.onSuccess();
                          else {
                            var c = new Error("Sentry error code: " + b.status);
                            (c.request = b), a.onError && a.onError(c);
                          }
                        })
                        ["catch"](function () {
                          a.onError &&
                            a.onError(
                              new Error(
                                "Sentry error code: network unavailable"
                              )
                            );
                        })
                    );
                  }
                  var g = R.XMLHttpRequest && new R.XMLHttpRequest();
                  if (g) {
                    var i =
                      "withCredentials" in g ||
                      "undefined" != typeof XDomainRequest;
                    i &&
                      ("withCredentials" in g
                        ? (g.onreadystatechange = function () {
                            if (4 === g.readyState)
                              if (200 === g.status)
                                a.onSuccess && a.onSuccess();
                              else if (a.onError) {
                                var b = new Error(
                                  "Sentry error code: " + g.status
                                );
                                (b.request = g), a.onError(b);
                              }
                          })
                        : ((g = new XDomainRequest()),
                          (b = b.replace(/^https?:/, "")),
                          a.onSuccess && (g.onload = a.onSuccess),
                          a.onError &&
                            (g.onerror = function () {
                              var b = new Error(
                                "Sentry error code: XDomainRequest"
                              );
                              (b.request = g), a.onError(b);
                            })),
                      g.open("POST", b),
                      c &&
                        w(c, function (a, b) {
                          g.setRequestHeader(a, b);
                        }),
                      g.send(h(a.data)));
                  }
                },
                _evaluateHash: function (a) {
                  var b = {};
                  for (var c in a)
                    if (a.hasOwnProperty(c)) {
                      var d = a[c];
                      b[c] = "function" == typeof d ? d() : d;
                    }
                  return b;
                },
                _logDebug: function (a) {
                  this._originalConsoleMethods[a] &&
                    (this.debug || this._globalOptions.debug) &&
                    Function.prototype.apply.call(
                      this._originalConsoleMethods[a],
                      this._originalConsole,
                      [].slice.call(arguments, 1)
                    );
                },
                _mergeContext: function (a, b) {
                  r(b)
                    ? delete this._globalContext[a]
                    : (this._globalContext[a] = x(
                        this._globalContext[a] || {},
                        b
                      ));
                },
              }),
                (f.prototype.setUser = f.prototype.setUserContext),
                (f.prototype.setReleaseContext = f.prototype.setRelease),
                (b.exports = f);
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          {
            1: 1,
            2: 2,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
          },
        ],
        4: [
          function (a, b, c) {
            (function (c) {
              var d = a(3),
                e =
                  "undefined" != typeof window
                    ? window
                    : "undefined" != typeof c
                    ? c
                    : "undefined" != typeof self
                    ? self
                    : {},
                f = e.Raven,
                g = new d();
              (g.noConflict = function () {
                return (e.Raven = f), g;
              }),
                g.afterLoad(),
                (b.exports = g),
                (b.exports.Client = d);
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          {
            3: 3,
          },
        ],
        5: [
          function (a, b, c) {
            (function (c) {
              function d(a) {
                return "object" == typeof a && null !== a;
              }

              function e(a) {
                switch (Object.prototype.toString.call(a)) {
                  case "[object Error]":
                    return !0;
                  case "[object Exception]":
                    return !0;
                  case "[object DOMException]":
                    return !0;
                  default:
                    return a instanceof Error;
                }
              }

              function f(a) {
                return (
                  "[object ErrorEvent]" === Object.prototype.toString.call(a)
                );
              }

              function g(a) {
                return (
                  "[object DOMError]" === Object.prototype.toString.call(a)
                );
              }

              function h(a) {
                return (
                  "[object DOMException]" === Object.prototype.toString.call(a)
                );
              }

              function i(a) {
                return void 0 === a;
              }

              function j(a) {
                return "function" == typeof a;
              }

              function k(a) {
                return "[object Object]" === Object.prototype.toString.call(a);
              }

              function l(a) {
                return "[object String]" === Object.prototype.toString.call(a);
              }

              function m(a) {
                return "[object Array]" === Object.prototype.toString.call(a);
              }

              function n(a) {
                if (!k(a)) return !1;
                for (var b in a) if (a.hasOwnProperty(b)) return !1;
                return !0;
              }

              function o() {
                try {
                  return new ErrorEvent(""), !0;
                } catch (a) {
                  return !1;
                }
              }

              function p() {
                try {
                  return new DOMError(""), !0;
                } catch (a) {
                  return !1;
                }
              }

              function q() {
                try {
                  return new DOMException(""), !0;
                } catch (a) {
                  return !1;
                }
              }

              function r() {
                if (!("fetch" in U)) return !1;
                try {
                  return new Headers(), new Request(""), new Response(), !0;
                } catch (a) {
                  return !1;
                }
              }

              function s() {
                if (!r()) return !1;
                try {
                  return (
                    new Request("pickleRick", {
                      referrerPolicy: "origin",
                    }),
                    !0
                  );
                } catch (a) {
                  return !1;
                }
              }

              function t() {
                return "function" == typeof PromiseRejectionEvent;
              }

              function u(a) {
                function b(b, c) {
                  var d = a(b) || b;
                  return c ? c(d) || d : d;
                }
                return b;
              }

              function v(a, b) {
                var c, d;
                if (i(a.length)) for (c in a) z(a, c) && b.call(null, c, a[c]);
                else if ((d = a.length))
                  for (c = 0; c < d; c++) b.call(null, c, a[c]);
              }

              function w(a, b) {
                return b
                  ? (v(b, function (b, c) {
                      a[b] = c;
                    }),
                    a)
                  : a;
              }

              function x(a) {
                return !!Object.isFrozen && Object.isFrozen(a);
              }

              function y(a, b) {
                if ("number" != typeof b)
                  throw new Error(
                    "2nd argument to `truncate` function should be a number"
                  );
                return "string" != typeof a || 0 === b
                  ? a
                  : a.length <= b
                  ? a
                  : a.substr(0, b) + "…";
              }

              function z(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b);
              }

              function A(a) {
                for (var b, c = [], d = 0, e = a.length; d < e; d++)
                  (b = a[d]),
                    l(b)
                      ? c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"))
                      : b && b.source && c.push(b.source);
                return new RegExp(c.join("|"), "i");
              }

              function B(a) {
                var b = [];
                return (
                  v(a, function (a, c) {
                    b.push(encodeURIComponent(a) + "=" + encodeURIComponent(c));
                  }),
                  b.join("&")
                );
              }

              function C(a) {
                if ("string" != typeof a) return {};
                var b = a.match(
                    /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
                  ),
                  c = b[6] || "",
                  d = b[8] || "";
                return {
                  protocol: b[2],
                  host: b[4],
                  path: b[5],
                  relative: b[5] + c + d,
                };
              }

              function D() {
                var a = U.crypto || U.msCrypto;
                if (!i(a) && a.getRandomValues) {
                  var b = new Uint16Array(8);
                  a.getRandomValues(b),
                    (b[3] = (4095 & b[3]) | 16384),
                    (b[4] = (16383 & b[4]) | 32768);
                  var c = function (a) {
                    for (var b = a.toString(16); b.length < 4; ) b = "0" + b;
                    return b;
                  };
                  return (
                    c(b[0]) +
                    c(b[1]) +
                    c(b[2]) +
                    c(b[3]) +
                    c(b[4]) +
                    c(b[5]) +
                    c(b[6]) +
                    c(b[7])
                  );
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (a) {
                    var b = (16 * Math.random()) | 0,
                      c = "x" === a ? b : (3 & b) | 8;
                    return c.toString(16);
                  }
                );
              }

              function E(a) {
                for (
                  var b,
                    c = 5,
                    d = 80,
                    e = [],
                    f = 0,
                    g = 0,
                    h = " > ",
                    i = h.length;
                  a &&
                  f++ < c &&
                  ((b = F(a)),
                  !(
                    "html" === b ||
                    (f > 1 && g + e.length * i + b.length >= d)
                  ));

                )
                  e.push(b), (g += b.length), (a = a.parentNode);
                return e.reverse().join(h);
              }

              function F(a) {
                var b,
                  c,
                  d,
                  e,
                  f,
                  g = [];
                if (!a || !a.tagName) return "";
                if (
                  (g.push(a.tagName.toLowerCase()),
                  a.id && g.push("#" + a.id),
                  (b = a.className),
                  b && l(b))
                )
                  for (c = b.split(/\s+/), f = 0; f < c.length; f++)
                    g.push("." + c[f]);
                var h = ["type", "name", "title", "alt"];
                for (f = 0; f < h.length; f++)
                  (d = h[f]),
                    (e = a.getAttribute(d)),
                    e && g.push("[" + d + '="' + e + '"]');
                return g.join("");
              }

              function G(a, b) {
                return !!(!!a ^ !!b);
              }

              function H(a, b) {
                return i(a) && i(b);
              }

              function I(a, b) {
                return (
                  !G(a, b) &&
                  ((a = a.values[0]),
                  (b = b.values[0]),
                  a.type === b.type &&
                    a.value === b.value &&
                    !H(a.stacktrace, b.stacktrace) &&
                    J(a.stacktrace, b.stacktrace))
                );
              }

              function J(a, b) {
                if (G(a, b)) return !1;
                var c = a.frames,
                  d = b.frames;
                if (void 0 === c || void 0 === d) return !1;
                if (c.length !== d.length) return !1;
                for (var e, f, g = 0; g < c.length; g++)
                  if (
                    ((e = c[g]),
                    (f = d[g]),
                    e.filename !== f.filename ||
                      e.lineno !== f.lineno ||
                      e.colno !== f.colno ||
                      e["function"] !== f["function"])
                  )
                    return !1;
                return !0;
              }

              function K(a, b, c, d) {
                if (null != a) {
                  var e = a[b];
                  (a[b] = c(e)),
                    (a[b].__raven__ = !0),
                    (a[b].__orig__ = e),
                    d && d.push([a, b, e]);
                }
              }

              function L(a, b) {
                if (!m(a)) return "";
                for (var c = [], d = 0; d < a.length; d++)
                  try {
                    c.push(String(a[d]));
                  } catch (e) {
                    c.push("[value cannot be serialized]");
                  }
                return c.join(b);
              }

              function M(a) {
                return ~-encodeURI(a).split(/%..|./).length;
              }

              function N(a) {
                return M(JSON.stringify(a));
              }

              function O(a) {
                if ("string" == typeof a) {
                  var b = 40;
                  return y(a, b);
                }
                if (
                  "number" == typeof a ||
                  "boolean" == typeof a ||
                  "undefined" == typeof a
                )
                  return a;
                var c = Object.prototype.toString.call(a);
                return "[object Object]" === c
                  ? "[Object]"
                  : "[object Array]" === c
                  ? "[Array]"
                  : "[object Function]" === c
                  ? a.name
                    ? "[Function: " + a.name + "]"
                    : "[Function]"
                  : a;
              }

              function P(a, b) {
                return 0 === b
                  ? O(a)
                  : k(a)
                  ? Object.keys(a).reduce(function (c, d) {
                      return (c[d] = P(a[d], b - 1)), c;
                    }, {})
                  : Array.isArray(a)
                  ? a.map(function (a) {
                      return P(a, b - 1);
                    })
                  : O(a);
              }

              function Q(a, b, c) {
                if (!k(a)) return a;
                (b = "number" != typeof b ? V : b),
                  (c = "number" != typeof b ? W : c);
                var d = P(a, b);
                return N(T(d)) > c ? Q(a, b - 1) : d;
              }

              function R(a, b) {
                if ("number" == typeof a || "string" == typeof a)
                  return a.toString();
                if (!Array.isArray(a)) return "";
                if (
                  ((a = a.filter(function (a) {
                    return "string" == typeof a;
                  })),
                  0 === a.length)
                )
                  return "[object has no keys]";
                if (((b = "number" != typeof b ? X : b), a[0].length >= b))
                  return a[0];
                for (var c = a.length; c > 0; c--) {
                  var d = a.slice(0, c).join(", ");
                  if (!(d.length > b)) return c === a.length ? d : d + "…";
                }
                return "";
              }

              function S(a, b) {
                function c(a) {
                  return m(a)
                    ? a.map(function (a) {
                        return c(a);
                      })
                    : k(a)
                    ? Object.keys(a).reduce(function (b, d) {
                        return e.test(d) ? (b[d] = f) : (b[d] = c(a[d])), b;
                      }, {})
                    : a;
                }
                if (!m(b) || (m(b) && 0 === b.length)) return a;
                var d,
                  e = A(b),
                  f = "********";
                try {
                  d = JSON.parse(T(a));
                } catch (g) {
                  return a;
                }
                return c(d);
              }
              var T = a(7),
                U =
                  "undefined" != typeof window
                    ? window
                    : "undefined" != typeof c
                    ? c
                    : "undefined" != typeof self
                    ? self
                    : {},
                V = 3,
                W = 51200,
                X = 40;
              b.exports = {
                isObject: d,
                isError: e,
                isErrorEvent: f,
                isDOMError: g,
                isDOMException: h,
                isUndefined: i,
                isFunction: j,
                isPlainObject: k,
                isString: l,
                isArray: m,
                isEmptyObject: n,
                supportsErrorEvent: o,
                supportsDOMError: p,
                supportsDOMException: q,
                supportsFetch: r,
                supportsReferrerPolicy: s,
                supportsPromiseRejectionEvent: t,
                wrappedCallback: u,
                each: v,
                objectMerge: w,
                truncate: y,
                objectFrozen: x,
                hasKey: z,
                joinRegExp: A,
                urlencode: B,
                uuid4: D,
                htmlTreeAsString: E,
                htmlElementAsString: F,
                isSameException: I,
                isSameStacktrace: J,
                parseUrl: C,
                fill: K,
                safeJoin: L,
                serializeException: Q,
                serializeKeysForMessage: R,
                sanitize: S,
              };
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          {
            7: 7,
          },
        ],
        6: [
          function (a, b, c) {
            (function (c) {
              function d() {
                return "undefined" == typeof document ||
                  null == document.location
                  ? ""
                  : document.location.href;
              }

              function e() {
                return "undefined" == typeof document ||
                  null == document.location
                  ? ""
                  : document.location.origin
                  ? document.location.origin
                  : document.location.protocol +
                    "//" +
                    document.location.hostname +
                    (document.location.port
                      ? ":" + document.location.port
                      : "");
              }
              var f = a(5),
                g = {
                  collectWindowErrors: !0,
                  debug: !1,
                },
                h =
                  "undefined" != typeof window
                    ? window
                    : "undefined" != typeof c
                    ? c
                    : "undefined" != typeof self
                    ? self
                    : {},
                i = [].slice,
                j = "?",
                k =
                  /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
              (g.report = (function () {
                function a(a) {
                  m(), s.push(a);
                }

                function b(a) {
                  for (var b = s.length - 1; b >= 0; --b)
                    s[b] === a && s.splice(b, 1);
                }

                function c() {
                  n(), (s = []);
                }

                function e(a, b) {
                  var c = null;
                  if (!b || g.collectWindowErrors) {
                    for (var d in s)
                      if (s.hasOwnProperty(d))
                        try {
                          s[d].apply(null, [a].concat(i.call(arguments, 2)));
                        } catch (e) {
                          c = e;
                        }
                    if (c) throw c;
                  }
                }

                function l(a, b, c, h, i) {
                  var l = null,
                    m = f.isErrorEvent(i) ? i.error : i,
                    n = f.isErrorEvent(a) ? a.message : a;
                  if (v)
                    g.computeStackTrace.augmentStackTraceWithInitialElement(
                      v,
                      b,
                      c,
                      n
                    ),
                      o();
                  else if (m && f.isError(m))
                    (l = g.computeStackTrace(m)), e(l, !0);
                  else {
                    var p,
                      r = {
                        url: b,
                        line: c,
                        column: h,
                      },
                      s = void 0;
                    if ("[object String]" === {}.toString.call(n)) {
                      var p = n.match(k);
                      p && ((s = p[1]), (n = p[2]));
                    }
                    (r.func = j),
                      (l = {
                        name: s,
                        message: n,
                        url: d(),
                        stack: [r],
                      }),
                      e(l, !0);
                  }
                  return !!q && q.apply(this, arguments);
                }

                function m() {
                  r || ((q = h.onerror), (h.onerror = l), (r = !0));
                }

                function n() {
                  r && ((h.onerror = q), (r = !1), (q = void 0));
                }

                function o() {
                  var a = v,
                    b = t;
                  (t = null),
                    (v = null),
                    (u = null),
                    e.apply(null, [a, !1].concat(b));
                }

                function p(a, b) {
                  var c = i.call(arguments, 1);
                  if (v) {
                    if (u === a) return;
                    o();
                  }
                  var d = g.computeStackTrace(a);
                  if (
                    ((v = d),
                    (u = a),
                    (t = c),
                    setTimeout(
                      function () {
                        u === a && o();
                      },
                      d.incomplete ? 2e3 : 0
                    ),
                    b !== !1)
                  )
                    throw a;
                }
                var q,
                  r,
                  s = [],
                  t = null,
                  u = null,
                  v = null;
                return (
                  (p.subscribe = a), (p.unsubscribe = b), (p.uninstall = c), p
                );
              })()),
                (g.computeStackTrace = (function () {
                  function a(a) {
                    if ("undefined" != typeof a.stack && a.stack) {
                      for (
                        var b,
                          c,
                          f,
                          g =
                            /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                          h =
                            /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                          i =
                            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                          k = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                          l = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                          m = a.stack.split("\n"),
                          n = [],
                          o = (/^(.*) is undefined$/.exec(a.message), 0),
                          p = m.length;
                        o < p;
                        ++o
                      ) {
                        if ((c = g.exec(m[o]))) {
                          var q = c[2] && 0 === c[2].indexOf("native"),
                            r = c[2] && 0 === c[2].indexOf("eval");
                          r &&
                            (b = l.exec(c[2])) &&
                            ((c[2] = b[1]), (c[3] = b[2]), (c[4] = b[3])),
                            (f = {
                              url: q ? null : c[2],
                              func: c[1] || j,
                              args: q ? [c[2]] : [],
                              line: c[3] ? +c[3] : null,
                              column: c[4] ? +c[4] : null,
                            });
                        } else if ((c = h.exec(m[o])))
                          f = {
                            url: c[2],
                            func: c[1] || j,
                            args: [],
                            line: +c[3],
                            column: c[4] ? +c[4] : null,
                          };
                        else {
                          if (!(c = i.exec(m[o]))) continue;
                          var r = c[3] && c[3].indexOf(" > eval") > -1;
                          r && (b = k.exec(c[3]))
                            ? ((c[3] = b[1]), (c[4] = b[2]), (c[5] = null))
                            : 0 !== o ||
                              c[5] ||
                              "undefined" == typeof a.columnNumber ||
                              (n[0].column = a.columnNumber + 1),
                            (f = {
                              url: c[3],
                              func: c[1] || j,
                              args: c[2] ? c[2].split(",") : [],
                              line: c[4] ? +c[4] : null,
                              column: c[5] ? +c[5] : null,
                            });
                        }
                        if (
                          (!f.func && f.line && (f.func = j),
                          f.url && "blob:" === f.url.substr(0, 5))
                        ) {
                          var s = new XMLHttpRequest();
                          if (
                            (s.open("GET", f.url, !1),
                            s.send(null),
                            200 === s.status)
                          ) {
                            var t = s.responseText || "";
                            t = t.slice(-300);
                            var u = t.match(/\/\/# sourceMappingURL=(.*)$/);
                            if (u) {
                              var v = u[1];
                              "~" === v.charAt(0) && (v = e() + v.slice(1)),
                                (f.url = v.slice(0, -4));
                            }
                          }
                        }
                        n.push(f);
                      }
                      return n.length
                        ? {
                            name: a.name,
                            message: a.message,
                            url: d(),
                            stack: n,
                          }
                        : null;
                    }
                  }

                  function b(a, b, c, d) {
                    var e = {
                      url: b,
                      line: c,
                    };
                    if (e.url && e.line) {
                      if (
                        ((a.incomplete = !1),
                        e.func || (e.func = j),
                        a.stack.length > 0 && a.stack[0].url === e.url)
                      ) {
                        if (a.stack[0].line === e.line) return !1;
                        if (!a.stack[0].line && a.stack[0].func === e.func)
                          return (a.stack[0].line = e.line), !1;
                      }
                      return a.stack.unshift(e), (a.partial = !0), !0;
                    }
                    return (a.incomplete = !0), !1;
                  }

                  function c(a, e) {
                    for (
                      var h,
                        i,
                        k =
                          /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
                        l = [],
                        m = {},
                        n = !1,
                        o = c.caller;
                      o && !n;
                      o = o.caller
                    )
                      if (o !== f && o !== g.report) {
                        if (
                          ((i = {
                            url: null,
                            func: j,
                            line: null,
                            column: null,
                          }),
                          o.name
                            ? (i.func = o.name)
                            : (h = k.exec(o.toString())) && (i.func = h[1]),
                          "undefined" == typeof i.func)
                        )
                          try {
                            i.func = h.input.substring(0, h.input.indexOf("{"));
                          } catch (p) {}
                        m["" + o] ? (n = !0) : (m["" + o] = !0), l.push(i);
                      }
                    e && l.splice(0, e);
                    var q = {
                      name: a.name,
                      message: a.message,
                      url: d(),
                      stack: l,
                    };
                    return (
                      b(
                        q,
                        a.sourceURL || a.fileName,
                        a.line || a.lineNumber,
                        a.message || a.description
                      ),
                      q
                    );
                  }

                  function f(b, e) {
                    var f = null;
                    e = null == e ? 0 : +e;
                    try {
                      if ((f = a(b))) return f;
                    } catch (h) {
                      if (g.debug) throw h;
                    }
                    try {
                      if ((f = c(b, e + 1))) return f;
                    } catch (h) {
                      if (g.debug) throw h;
                    }
                    return {
                      name: b.name,
                      message: b.message,
                      url: d(),
                    };
                  }
                  return (
                    (f.augmentStackTraceWithInitialElement = b),
                    (f.computeStackTraceFromStackProp = a),
                    f
                  );
                })()),
                (b.exports = g);
            }.call(
              this,
              "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : {}
            ));
          },
          {
            5: 5,
          },
        ],
        7: [
          function (a, b, c) {
            function d(a, b) {
              for (var c = 0; c < a.length; ++c) if (a[c] === b) return c;
              return -1;
            }

            function e(a, b, c, d) {
              return JSON.stringify(a, g(b, d), c);
            }

            function f(a) {
              var b = {
                stack: a.stack,
                message: a.message,
                name: a.name,
              };
              for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
              return b;
            }

            function g(a, b) {
              var c = [],
                e = [];
              return (
                null == b &&
                  (b = function (a, b) {
                    return c[0] === b
                      ? "[Circular ~]"
                      : "[Circular ~." + e.slice(0, d(c, b)).join(".") + "]";
                  }),
                function (g, h) {
                  if (c.length > 0) {
                    var i = d(c, this);
                    ~i ? c.splice(i + 1) : c.push(this),
                      ~i ? e.splice(i, 1 / 0, g) : e.push(g),
                      ~d(c, h) && (h = b.call(this, g, h));
                  } else c.push(h);
                  return null == a
                    ? h instanceof Error
                      ? f(h)
                      : h
                    : a.call(this, g, h);
                }
              );
            }
            (c = b.exports = e), (c.getSerialize = g);
          },
          {},
        ],
        8: [
          function (a, b, c) {
            function d(a, b) {
              var c = (65535 & a) + (65535 & b),
                d = (a >> 16) + (b >> 16) + (c >> 16);
              return (d << 16) | (65535 & c);
            }

            function e(a, b) {
              return (a << b) | (a >>> (32 - b));
            }

            function f(a, b, c, f, g, h) {
              return d(e(d(d(b, a), d(f, h)), g), c);
            }

            function g(a, b, c, d, e, g, h) {
              return f((b & c) | (~b & d), a, b, e, g, h);
            }

            function h(a, b, c, d, e, g, h) {
              return f((b & d) | (c & ~d), a, b, e, g, h);
            }

            function i(a, b, c, d, e, g, h) {
              return f(b ^ c ^ d, a, b, e, g, h);
            }

            function j(a, b, c, d, e, g, h) {
              return f(c ^ (b | ~d), a, b, e, g, h);
            }

            function k(a, b) {
              (a[b >> 5] |= 128 << b % 32),
                (a[(((b + 64) >>> 9) << 4) + 14] = b);
              var c,
                e,
                f,
                k,
                l,
                m = 1732584193,
                n = -271733879,
                o = -1732584194,
                p = 271733878;
              for (c = 0; c < a.length; c += 16)
                (e = m),
                  (f = n),
                  (k = o),
                  (l = p),
                  (m = g(m, n, o, p, a[c], 7, -680876936)),
                  (p = g(p, m, n, o, a[c + 1], 12, -389564586)),
                  (o = g(o, p, m, n, a[c + 2], 17, 606105819)),
                  (n = g(n, o, p, m, a[c + 3], 22, -1044525330)),
                  (m = g(m, n, o, p, a[c + 4], 7, -176418897)),
                  (p = g(p, m, n, o, a[c + 5], 12, 1200080426)),
                  (o = g(o, p, m, n, a[c + 6], 17, -1473231341)),
                  (n = g(n, o, p, m, a[c + 7], 22, -45705983)),
                  (m = g(m, n, o, p, a[c + 8], 7, 1770035416)),
                  (p = g(p, m, n, o, a[c + 9], 12, -1958414417)),
                  (o = g(o, p, m, n, a[c + 10], 17, -42063)),
                  (n = g(n, o, p, m, a[c + 11], 22, -1990404162)),
                  (m = g(m, n, o, p, a[c + 12], 7, 1804603682)),
                  (p = g(p, m, n, o, a[c + 13], 12, -40341101)),
                  (o = g(o, p, m, n, a[c + 14], 17, -1502002290)),
                  (n = g(n, o, p, m, a[c + 15], 22, 1236535329)),
                  (m = h(m, n, o, p, a[c + 1], 5, -165796510)),
                  (p = h(p, m, n, o, a[c + 6], 9, -1069501632)),
                  (o = h(o, p, m, n, a[c + 11], 14, 643717713)),
                  (n = h(n, o, p, m, a[c], 20, -373897302)),
                  (m = h(m, n, o, p, a[c + 5], 5, -701558691)),
                  (p = h(p, m, n, o, a[c + 10], 9, 38016083)),
                  (o = h(o, p, m, n, a[c + 15], 14, -660478335)),
                  (n = h(n, o, p, m, a[c + 4], 20, -405537848)),
                  (m = h(m, n, o, p, a[c + 9], 5, 568446438)),
                  (p = h(p, m, n, o, a[c + 14], 9, -1019803690)),
                  (o = h(o, p, m, n, a[c + 3], 14, -187363961)),
                  (n = h(n, o, p, m, a[c + 8], 20, 1163531501)),
                  (m = h(m, n, o, p, a[c + 13], 5, -1444681467)),
                  (p = h(p, m, n, o, a[c + 2], 9, -51403784)),
                  (o = h(o, p, m, n, a[c + 7], 14, 1735328473)),
                  (n = h(n, o, p, m, a[c + 12], 20, -1926607734)),
                  (m = i(m, n, o, p, a[c + 5], 4, -378558)),
                  (p = i(p, m, n, o, a[c + 8], 11, -2022574463)),
                  (o = i(o, p, m, n, a[c + 11], 16, 1839030562)),
                  (n = i(n, o, p, m, a[c + 14], 23, -35309556)),
                  (m = i(m, n, o, p, a[c + 1], 4, -1530992060)),
                  (p = i(p, m, n, o, a[c + 4], 11, 1272893353)),
                  (o = i(o, p, m, n, a[c + 7], 16, -155497632)),
                  (n = i(n, o, p, m, a[c + 10], 23, -1094730640)),
                  (m = i(m, n, o, p, a[c + 13], 4, 681279174)),
                  (p = i(p, m, n, o, a[c], 11, -358537222)),
                  (o = i(o, p, m, n, a[c + 3], 16, -722521979)),
                  (n = i(n, o, p, m, a[c + 6], 23, 76029189)),
                  (m = i(m, n, o, p, a[c + 9], 4, -640364487)),
                  (p = i(p, m, n, o, a[c + 12], 11, -421815835)),
                  (o = i(o, p, m, n, a[c + 15], 16, 530742520)),
                  (n = i(n, o, p, m, a[c + 2], 23, -995338651)),
                  (m = j(m, n, o, p, a[c], 6, -198630844)),
                  (p = j(p, m, n, o, a[c + 7], 10, 1126891415)),
                  (o = j(o, p, m, n, a[c + 14], 15, -1416354905)),
                  (n = j(n, o, p, m, a[c + 5], 21, -57434055)),
                  (m = j(m, n, o, p, a[c + 12], 6, 1700485571)),
                  (p = j(p, m, n, o, a[c + 3], 10, -1894986606)),
                  (o = j(o, p, m, n, a[c + 10], 15, -1051523)),
                  (n = j(n, o, p, m, a[c + 1], 21, -2054922799)),
                  (m = j(m, n, o, p, a[c + 8], 6, 1873313359)),
                  (p = j(p, m, n, o, a[c + 15], 10, -30611744)),
                  (o = j(o, p, m, n, a[c + 6], 15, -1560198380)),
                  (n = j(n, o, p, m, a[c + 13], 21, 1309151649)),
                  (m = j(m, n, o, p, a[c + 4], 6, -145523070)),
                  (p = j(p, m, n, o, a[c + 11], 10, -1120210379)),
                  (o = j(o, p, m, n, a[c + 2], 15, 718787259)),
                  (n = j(n, o, p, m, a[c + 9], 21, -343485551)),
                  (m = d(m, e)),
                  (n = d(n, f)),
                  (o = d(o, k)),
                  (p = d(p, l));
              return [m, n, o, p];
            }

            function l(a) {
              var b,
                c = "",
                d = 32 * a.length;
              for (b = 0; b < d; b += 8)
                c += String.fromCharCode((a[b >> 5] >>> b % 32) & 255);
              return c;
            }

            function m(a) {
              var b,
                c = [];
              for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1)
                c[b] = 0;
              var d = 8 * a.length;
              for (b = 0; b < d; b += 8)
                c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
              return c;
            }

            function n(a) {
              return l(k(m(a), 8 * a.length));
            }

            function o(a, b) {
              var c,
                d,
                e = m(a),
                f = [],
                g = [];
              for (
                f[15] = g[15] = void 0,
                  e.length > 16 && (e = k(e, 8 * a.length)),
                  c = 0;
                c < 16;
                c += 1
              )
                (f[c] = 909522486 ^ e[c]), (g[c] = 1549556828 ^ e[c]);
              return (
                (d = k(f.concat(m(b)), 512 + 8 * b.length)),
                l(k(g.concat(d), 640))
              );
            }

            function p(a) {
              var b,
                c,
                d = "0123456789abcdef",
                e = "";
              for (c = 0; c < a.length; c += 1)
                (b = a.charCodeAt(c)),
                  (e += d.charAt((b >>> 4) & 15) + d.charAt(15 & b));
              return e;
            }

            function q(a) {
              return unescape(encodeURIComponent(a));
            }

            function r(a) {
              return n(q(a));
            }

            function s(a) {
              return p(r(a));
            }

            function t(a, b) {
              return o(q(a), q(b));
            }

            function u(a, b) {
              return p(t(a, b));
            }

            function v(a, b, c) {
              return b ? (c ? t(b, a) : u(b, a)) : c ? r(a) : s(a);
            }
            b.exports = v;
          },
          {},
        ],
      },
      {},
      [4]
    )(4);
  }),
  define("core/utils/object/has", [], function () {
    "use strict";
    return function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };
  }),
  define("core/utils/collection/each", ["core/utils/object/has"], function (a) {
    "use strict";
    return function (b, c) {
      var d = b.length,
        e = Array.prototype.forEach;
      if (isNaN(d)) for (var f in b) a(b, f) && c(b[f], f, b);
      else if (e) e.call(b, c);
      else for (var g = 0; g < d; g++) c(b[g], g, b);
    };
  }),
  define("core/utils/uniqueId", [], function () {
    "use strict";
    var a = 1e4,
      b = Math.floor(Math.random() * a + 1);
    return function (a) {
      b += 1;
      var c = String(b);
      return a ? a + c : c;
    };
  }),
  define(
    "core/Events",
    [
      "require",
      "core/utils/collection/each",
      "core/utils/object/has",
      "core/utils/uniqueId",
    ],
    function (a) {
      "use strict";
      var b = a("core/utils/collection/each"),
        c = a("core/utils/object/has"),
        d = a("core/utils/uniqueId"),
        e = function (a) {
          var b,
            c = !1;
          return function () {
            return c
              ? b
              : ((c = !0), (b = a.apply(this, arguments)), (a = null), b);
          };
        },
        f =
          Object.keys ||
          function (a) {
            if (a !== Object(a)) throw new TypeError("Invalid object");
            var b = [];
            for (var d in a) c(a, d) && (b[b.length] = d);
            return b;
          },
        g = [].slice,
        h = {
          on: function (a, b, c) {
            if (!j(this, "on", a, [b, c]) || !b) return this;
            this._events = this._events || {};
            var d = this._events[a] || (this._events[a] = []);
            return (
              d.push({
                callback: b,
                context: c,
                ctx: c || this,
              }),
              this
            );
          },
          once: function (a, b, c) {
            if (!j(this, "once", a, [b, c]) || !b) return this;
            var d = this,
              f = e(function () {
                d.off(a, f), b.apply(this, arguments);
              });
            return (f._callback = b), this.on(a, f, c);
          },
          off: function (a, b, c) {
            var d, e, g, h, i, k, l, m;
            if (!this._events || !j(this, "off", a, [b, c])) return this;
            if (!a && !b && !c) return (this._events = {}), this;
            for (h = a ? [a] : f(this._events), i = 0, k = h.length; i < k; i++)
              if (((a = h[i]), (g = this._events[a]))) {
                if (((this._events[a] = d = []), b || c))
                  for (l = 0, m = g.length; l < m; l++)
                    (e = g[l]),
                      ((c && c !== e.context) ||
                        (b &&
                          b !== e.callback &&
                          b !== e.callback._callback)) &&
                        d.push(e);
                d.length || delete this._events[a];
              }
            return this;
          },
          trigger: function (a) {
            if (!this._events) return this;
            var b = g.call(arguments, 1);
            if (!j(this, "trigger", a, b)) return this;
            var c = this._events[a],
              d = this._events.all;
            return c && k(c, b), d && k(d, arguments), this;
          },
          stopListening: function (a, b, c) {
            var d = this._listeners;
            if (!d) return this;
            var e = !b && !c;
            "object" == typeof b && (c = this),
              a && ((d = {})[a._listenerId] = a);
            for (var f in d)
              d[f].off(b, c, this), e && delete this._listeners[f];
            return this;
          },
        },
        i = /\s+/,
        j = function (a, b, c, d) {
          if (!c) return !0;
          if ("object" == typeof c) {
            for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
            return !1;
          }
          if (i.test(c)) {
            for (var f = c.split(i), g = 0, h = f.length; g < h; g++)
              a[b].apply(a, [f[g]].concat(d));
            return !1;
          }
          return !0;
        },
        k = function (a, b) {
          var c,
            d,
            e = a.length,
            f = b[0],
            g = b[1],
            h = b[2];
          switch (b.length) {
            case 0:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx);
              return;
            case 1:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx, f);
              return;
            case 2:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx, f, g);
              return;
            case 3:
              for (d = 0; d < e; d++) (c = a[d]).callback.call(c.ctx, f, g, h);
              return;
            default:
              for (d = 0; d < e; d++) (c = a[d]).callback.apply(c.ctx, b);
          }
        },
        l = {
          listenTo: "on",
          listenToOnce: "once",
        };
      return (
        b(l, function (a, b) {
          h[b] = function (b, c, e) {
            var f = this._listeners || (this._listeners = {}),
              g = b._listenerId || (b._listenerId = d("l"));
            return (
              (f[g] = b),
              "object" == typeof c && (e = this),
              b[a](c, e, this),
              this
            );
          };
        }),
        (h.bind = h.on),
        (h.unbind = h.off),
        h
      );
    }
  ),
  define("core/utils/function/debounce", [], function () {
    "use strict";
    return function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = function () {
          var j = new Date().getTime() - g;
          j < b && j >= 0
            ? (d = setTimeout(i, b - j))
            : ((d = null), c || ((h = a.apply(f, e)), d || (f = e = null)));
        };
      return function () {
        (f = this), (e = arguments), (g = new Date().getTime());
        var j = c && !d;
        return (
          d || (d = setTimeout(i, b)),
          j && ((h = a.apply(f, e)), (f = e = null)),
          h
        );
      };
    };
  }),
  define("core/utils/function/throttle", [], function () {
    "use strict";
    return function (a, b, c) {
      c || (c = 0);
      var d,
        e,
        f,
        g,
        h = 0,
        i = function () {
          (h = new Date()), (f = null), (g = a.apply(d, e));
        };
      return function () {
        var j = new Date(),
          k = b - (j - h);
        return (
          (d = this),
          (e = arguments),
          k <= 0
            ? (clearTimeout(f), (f = null), (h = j), (g = a.apply(d, e)))
            : f || (f = setTimeout(i, k + c)),
          g
        );
      };
    };
  }),
  define(
    "core/utils/object/extend",
    ["core/utils/collection/each", "core/utils/object/has"],
    function (a, b) {
      "use strict";
      return function (c) {
        return (
          a(Array.prototype.slice.call(arguments, 1), function (a) {
            for (var d in a) b(a, d) && (c[d] = a[d]);
          }),
          c
        );
      };
    }
  ),
  define("core/utils/array/indexOf", [], function () {
    "use strict";
    return function (a, b) {
      for (var c = 0; c < a.length; ++c) if (a[c] === b) return c;
      return -1;
    };
  }),
  define("core/utils/array/some", [], function () {
    "use strict";
    return function (a, b, c) {
      for (var d = 0; d < a.length; ++d) if (b.call(c, a[d], d, a)) return !0;
      return !1;
    };
  }),
  define("core/utils/html/getCurrentStyle", [], function () {
    "use strict";
    return window.getComputedStyle
      ? function (a, b, c) {
          try {
            return window.document.defaultView
              .getComputedStyle(a, null)
              .getPropertyValue(b);
          } catch (d) {
            return null;
          }
        }
      : function (a, b, c) {
          return a.currentStyle[b] || a.currentStyle[c];
        };
  }),
  define(
    "core/utils/html/isVisible",
    ["core/utils/html/getCurrentStyle"],
    function (a) {
      "use strict";
      return function (b) {
        return Boolean(
          b &&
            (b.offsetWidth || b.offsetHeight || b.getClientRects().length) &&
            "hidden" !== a(b, "visibility")
        );
      };
    }
  ),
  define("core/utils/lang/isFunction", [], function () {
    "use strict";
    return function (a) {
      return "[object Function]" === Object.prototype.toString.call(a);
    };
  }),
  define(
    "core/utils/object/result",
    ["core/utils/lang/isFunction"],
    function (a) {
      "use strict";
      return function (b, c, d) {
        var e = null === b || void 0 === b ? void 0 : b[c];
        return void 0 === e && (e = d), a(e) ? e.call(b) : e;
      };
    }
  ),
  define("core/utils/lang/isElement", [], function () {
    "use strict";
    return function (a) {
      return Boolean(a && 1 === a.nodeType);
    };
  }),
  define(
    "stance/utils",
    ["exports", "core/utils/lang/isElement", "core/utils/uniqueId"],
    function (a, b, c) {
      "use strict";
      (a.getElement = function (a) {
        return b(a) ? a : a && a.el;
      }),
        (a.EL_ID_ATTR = "data-visibility-id"),
        (a.OBJ_ID_PROP = "_visibility_id"),
        (a.getId = function (d) {
          var e = null;
          return (
            b(d)
              ? ((e = d.getAttribute(a.EL_ID_ATTR) || null),
                e || ((e = c()), d.setAttribute(a.EL_ID_ATTR, e)))
              : d &&
                ((e = d[a.OBJ_ID_PROP] || null),
                e || (e = d[a.OBJ_ID_PROP] = c())),
            e
          );
        }),
        (a.visiblePercent = function (a, b) {
          var c = 0;
          if (!b) return c;
          var d = a.top,
            e = d + a.height,
            f = b.visibleTop < d,
            g = b.visibleBottom > e;
          return (
            (!f && !g) || (f && g)
              ? (c = 1)
              : f
              ? (c = (b.height - (d - b.visibleTop)) / b.height)
              : g && (c = (e - b.visibleTop) / b.height),
            Math.round(100 * c)
          );
        });
    }
  ),
  define(
    "stance/tracking",
    [
      "core/utils/array/indexOf",
      "core/utils/array/some",
      "core/utils/html/isVisible",
      "core/utils/object/result",
      "./utils",
      "exports",
    ],
    function (a, b, c, d, e, f) {
      "use strict";
      (f.events = []),
        (f.lastPos = null),
        (f.clearCache = function (a) {
          if (void 0 === a) f.getElementOffset.cache = {};
          else {
            var b = e.getId(a);
            b && (f.getElementOffset.cache[b] = null);
          }
        }),
        (f.calculateOffset = function (a) {
          if (!a) return null;
          if (!c(a)) return null;
          var b = a.ownerDocument.documentElement;
          return {
            height: a.offsetHeight,
            top:
              a.getBoundingClientRect().top +
              window.pageYOffset -
              (b.clientTop || 0),
          };
        }),
        (f._getElementOffset = function (a) {
          var b = e.getElement(a);
          if (!b) return null;
          var c = f.calculateOffset(b);
          return c
            ? {
                visibleTop: c.top + (d(a, "topEdgeOffset") || 0),
                visibleBottom:
                  c.top + c.height - (d(a, "bottomEdgeOffset") || 0),
                offsetTop: c.top,
                height: c.height,
              }
            : null;
        }),
        (f.getElementOffset = (function () {
          var a = function (b) {
            var c = a.cache,
              d = e.getId(b);
            if (d && c[d]) return c[d];
            var g = f._getElementOffset(b);
            return d && g && (c[d] = g), g;
          };
          return (a.cache = {}), a;
        })()),
        (f.EVENT_NAMES = ["enter", "exit", "visible", "invisible", "all"]),
        (f.updateTracking = function (c) {
          var d,
            e = function (a) {
              return a
                ? function (b) {
                    return a[b];
                  }
                : function () {};
            };
          b(f.EVENT_NAMES, e(c._events))
            ? ((d = a(f.events, c)), d === -1 && f.events.push(c))
            : ((d = a(f.events, c)), d !== -1 && f.events.splice(d, 1));
        }),
        (f.processEvents = function (a) {
          f.lastPos = a;
          var b = f.events;
          if (b.length)
            for (var c = b.length - 1; c >= 0; --c) {
              var d = b[c],
                e = d.isVisible(a);
              null !== e &&
                (e !== d.lastVisible && d.trigger(e ? "enter" : "exit", d, a),
                d.trigger(e ? "visible" : "invisible", d, a),
                (d.lastVisible = e));
            }
        });
    }
  ),
  define(
    "stance/main",
    [
      "core/Events",
      "core/utils/function/debounce",
      "core/utils/function/throttle",
      "core/utils/object/extend",
      "./tracking",
    ],
    function (a, b, c, d, e) {
      "use strict";

      function f(a) {
        return this instanceof f
          ? ((this.obj = a), void (this.lastVisible = !1))
          : new f(a);
      }
      var g = b(function () {
        e.processEvents(e.lastPos);
      }, 250);
      return (
        d(f.prototype, a, {
          on: function (b) {
            var c = !(this._events && this._events[b]),
              d = a.on.apply(this, arguments);
            return c && e.updateTracking(this), g(), d;
          },
          off: function (b) {
            var c = a.off.apply(this, arguments);
            return (
              (this._events && this._events[b]) || e.updateTracking(this), c
            );
          },
          offset: function () {
            return e.getElementOffset(this.obj);
          },
          isVisible: function (a) {
            if (((a = a || e.lastPos), !a)) return null;
            var b = a.top,
              c = b + a.height,
              d = this.offset();
            return (
              !!d &&
              ((d.offsetTop >= b && d.visibleTop < c) ||
                (d.offsetTop + d.height <= c && d.visibleBottom > b))
            );
          },
          invalidate: function () {
            return e.clearCache(this.obj), this;
          },
        }),
        d(f, {
          invalidate: e.clearCache,
          scroll: e.processEvents,
          _windowScrollHandlerBound: !1,
          _ignoreCache: !1,
          _windowScrollHandler: c(function () {
            f._ignoreCache && f.invalidate(),
              e.processEvents({
                top: window.pageYOffset,
                height: window.document.documentElement.clientHeight,
              });
          }, 250),
          bindWindowEvents: function (a) {
            this._windowScrollHandlerBound ||
              ("undefined" != typeof a && (f._ignoreCache = a),
              window.addEventListener("scroll", this._windowScrollHandler),
              window.addEventListener("resize", this._windowScrollHandler),
              (this._windowScrollHandlerBound = !0),
              this._windowScrollHandler());
          },
          unbindWindowEvents: function () {
            (f._ignoreCache = !1),
              window.removeEventListener("scroll", this._windowScrollHandler),
              window.removeEventListener("resize", this._windowScrollHandler),
              (this._windowScrollHandlerBound = !1);
          },
        }),
        f
      );
    }
  ),
  define("stance", ["stance/main"], function (a) {
    return a;
  }),
  define("core/strings", ["loglevel", "translations"], function (a, b) {
    "use strict";
    var c = {
      translations: b,
    };
    return (
      (c.get = function (a) {
        var b = c.translations[a];
        return void 0 === b ? a : b;
      }),
      (c.interpolate = function (b, c) {
        function d(d) {
          var e = "";
          return (
            d in c
              ? (e = void 0 !== c[d] && null !== c[d] ? c[d].toString() : "")
              : a.error("Key `" + d + "` not found in context for: ", b),
            e
          );
        }
        return b.replace(/%\(\w+\)s/g, function (a) {
          return d(a.slice(2, -2));
        });
      }),
      (c.gettext = function (b, d) {
        return (
          (b = c.get(b)),
          (d = d || {}),
          b.split(/(%\(\w+\)s)/g).map(function (c) {
            var e = c.match(/%\((\w+)\)s/);
            return (
              e &&
                (e[1] in d
                  ? (c = d[e[1]])
                  : a.error(
                      "Key `" + e[1] + "` not found in context for: " + b
                    )),
              "" === c ? null : c
            );
          })
        );
      }),
      c
    );
  }),
  define("core/UniqueModel", ["underscore"], function (a) {
    "use strict";

    function b(a, c, d) {
      var e = b.pool(a),
        f = c && c[a.prototype.idAttribute];
      if (!f) return new a(c, d);
      var g = b.get(a, f);
      return g ? e[f].set(c) : (e[f] = new a(c, d)), e[f];
    }
    return (
      (b.pool = {}),
      (b.pool = function (a) {
        var c = b.pool[a.__type__];
        if (!c)
          throw new Error("Model not registered. Use UniqueModel.addType");
        return c;
      }),
      (b.get = function (a, c) {
        return b.pool(a)[c];
      }),
      (b.set = function (a, c) {
        var d = b.pool(a),
          e = c && c.get(a.prototype.idAttribute);
        if (!e) return c;
        var f = b.get(a, e);
        return f ? f.set(c.attributes) : (f = d[e] = c), f;
      }),
      (b.addType = function (a, c) {
        (c.__type__ && b.pool[a]) || ((c.__type__ = a), (b.pool[a] = {}));
      }),
      (b.boundModel = function (c) {
        var d = a.bind(b, b, c);
        return (d.prototype = c.prototype), d;
      }),
      (b.wrap = b.boundModel),
      b
    );
  }),
  define("common/defines", [], function () {
    "use strict";
    return {
      debug: !1,
    };
  }),
  define("common/keys", [], function () {
    "use strict";
    var a = {
      embedAPI:
        "E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F",
      viglinkAPI: "cfdfcf52dffd0a702a61bad27507376d",
      googleAnalytics: "UA-1410476-6",
      facebook: "52254943976",
      google:
        "508198334196-bgmagrg0a2rub674g0shidj8fnd50dji.apps.googleusercontent.com",
    };
    return a;
  }),
  define("common/urls", ["core/utils/object/extend"], function (a) {
    "use strict";
    var b = "https:" === window.location.protocol,
      c = {
        root: "https://disqus.com",
        shortener: "http://disq.us",
        logger: "https://x.disq.us",
        media: "https://c.disquscdn.com/next/current/recommendations",
        realertime: "//realtime.services.disqus.com",
        jester: "https://referrer.disqus.com/juggler",
        glitter: "https://glitter.services.disqus.com/urls/",
        login: "https://disqus.com/next/login/",
        dotcomLogin: "https://disqus.com/profile/login/",
        api: "https://disqus.com/api/3.0/",
        logout: "http://disqus.com/logout/",
        verifyEmail: "https://disqus.com/next/verify/",
        authorize: "https://disqus.com/api/oauth/2.0/authorize/",
        oauth: {
          twitter: "https://disqus.com/_ax/twitter/begin/",
          google: "https://disqus.com/_ax/google/begin/",
          facebook: "https://disqus.com/_ax/facebook/begin/",
        },
        avatar: {
          generic:
            "https://c.disquscdn.com/next/recommendations/assets/img/noavatar92.b5e491fa31234c53d6aaf029f9b0c34e.png",
        },
      };
    return (
      b &&
        (c = a(c, {
          logout: "https://disqus.com/logout/",
          editProfile: "https://disqus.com/home/settings/account/",
          moderate: "https://disqus.com/admin/moderate/",
        })),
      c
    );
  }),
  define(
    "core/config",
    ["common/defines", "common/keys", "common/urls"],
    function (a, b, c) {
      "use strict";
      return {
        urls: {
          avatar: {
            generic: c.avatar.generic,
          },
          api: c.api,
          media: c.media,
          verifyEmail: c.verifyEmail,
          login: c.login,
          oauth: c.oauth,
        },
        keys: {
          api: b.embedAPI,
        },
        TLDS: "aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afl|africa|ag|agakhan|agency|ai|aig|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|amazon|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|casa|case|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|charity|chase|chat|cheap|chintai|christmas|chrome|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cpa|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dog|domains|dot|download|drive|dtv|dubai|dunlop|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|er|ericsson|erni|es|esq|estate|et|etisalat|eu|eurovision|eus|events|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gay|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|inc|industries|infiniti|info|ing|ink|institute|insurance|insure|int|international|intuit|investments|io|ipiranga|iq|ir|irish|is|ismaili|ist|istanbul|it|itau|itv|jaguar|java|jcb|je|jeep|jetzt|jewelry|jio|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|lamborghini|lamer|lancaster|lancia|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|llc|llp|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|merckmsd|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|moda|moe|moi|mom|monash|money|monster|mormon|mortgage|moscow|moto|motorcycles|mov|movie|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|music|mutual|mv|mw|mx|my|mz|na|nab|nagoya|name|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|racing|radio|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|ril|rio|rip|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|spa|space|sport|spot|sr|srl|ss|st|stada|staples|star|statebank|statefarm|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiss|sx|sy|sydney|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4dbrk0ce|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cckwcxetd|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq480n2rg|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgbcpq6gpa1a|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--otu796d|xn--p1acf|xn--p1ai|xn--pgbs0dh|xn--pssy2u|xn--q7ce6a|xn--q9jyb4c|xn--qcka1pmc|xn--qxa6a|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zm|zone|zuerich|zw",
        feedApiVersion: 12,
        debug: a.debug,
      };
    }
  ),
  define("core/utils/browser", [], function () {
    "use strict";
    var a = {
      isIE: function () {
        return Boolean(window.document.documentMode);
      },
      isSafari: function () {
        var a = window.navigator.userAgent.toLowerCase();
        return a.indexOf("safari") > -1 && a.indexOf("chrome") === -1;
      },
      isFirefox: function () {
        var a = window.navigator.userAgent.toLowerCase();
        return a.indexOf("firefox") > -1 && a.indexOf("chrome") === -1;
      },
      isChrome: function () {
        var a = window.navigator.userAgent.toLowerCase();
        return (
          a.indexOf("crios") > -1 ||
          (Boolean(window.chrome) &&
            "Google Inc." === window.navigator.vendor &&
            void 0 === window.opr &&
            a.indexOf("edge") === -1)
        );
      },
      isEdge: function () {
        var a = window.navigator.userAgent.toLowerCase();
        return a.indexOf("edge") > -1;
      },
      isOpera: function () {
        var a = window.navigator.userAgent.toLowerCase();
        return a.indexOf("opera") > -1 || a.indexOf("opr") > -1;
      },
      isCrawler: function (a) {
        void 0 === a && (a = window);
        var b = a.navigator.userAgent;
        return /bot|crawl|slurp|spider|facebookexternalhit|embedly|feedly|pinterest/i.test(
          b
        );
      },
    };
    return a;
  }),
  define("core/utils/isMobileUserAgent", [], function () {
    "use strict";
    return function (a) {
      return (
        (a = a || window),
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(
          a.navigator.userAgent || a.navigator.vendor || a.opera
        )
      );
    };
  }),
  define(
    "core/utils",
    [
      "jquery",
      "underscore",
      "core/config",
      "core/utils/browser",
      "core/utils/isMobileUserAgent",
    ],
    function (a, b, c, d, e) {
      "use strict";

      function f(a) {
        return function (b) {
          return (
            b && b.preventDefault && b.preventDefault(),
            a.apply(this, arguments)
          );
        };
      }

      function g(a) {
        return function (b) {
          return (
            b && b.stopPropagation && b.stopPropagation(),
            a.apply(this, arguments)
          );
        };
      }

      function h(a) {
        return f(g(a));
      }

      function i(a) {
        if (!a) return "";
        a = "http://" + a.replace(/^([a-z+.-]+:)?\/+/i, "");
        var b = o.createElement("a");
        b.href = a;
        var c = b.hostname.replace(/^www\d*\./i, "");
        return (c = c.toLowerCase());
      }

      function j(a) {
        var c = [];
        return (
          b.each(a, function (a, b) {
            void 0 !== a &&
              c.push(b + (null === a ? "" : "=" + encodeURIComponent(a)));
          }),
          c.join("&")
        );
      }

      function k(a, b, c) {
        if (
          (b &&
            (a.indexOf("?") === -1
              ? (a += "?")
              : "&" !== a.charAt(a.length - 1) && (a += "&"),
            (a += this.serializeArgs(b))),
          c)
        ) {
          var d = {};
          return (d[new Date().getTime()] = null), this.serialize(a, d);
        }
        var e = a.length;
        return "&" === a.charAt(e - 1) ? a.slice(0, e - 1) : a;
      }

      function l(a, c, d) {
        d
          ? b.extend(d, {
              location: 1,
              status: 1,
              resizable: 1,
              scrollbars: 1,
            })
          : (d = {}),
          d.width &&
            d.height &&
            b.defaults(d, {
              left: window.screen.width / 2 - d.width / 2,
              top: window.screen.height / 2 - d.height / 2,
            });
        var e = b
          .map(d, function (a, b) {
            return b + "=" + a;
          })
          .join(",");
        return window.open(a, c, e);
      }

      function m(a, b, c) {
        b < 0 && (b = 0);
        var d = a.substring(0, b),
          e = a.substring(b);
        return (
          d.length && !/\s$/.test(d) && (d += " "),
          /^\s/.test(e) || (e = " " + e),
          d + c + e
        );
      }

      function n(a) {
        return "undefined" == typeof a ? null : JSON.parse(JSON.stringify(a));
      }
      var o = window.document,
        p =
          /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        q = function (a) {
          return p.test(a);
        },
        r =
          c.TLDS ||
          "zw|zuerich|zone|zm|zip|za|yt|youtube|yokohama|yoga|yodobashi|ye|yandex|yachts|xyz|xxx|xin|xerox|wtf|wtc|ws|world|works|work|wme|win|williamhill|wiki|wien|whoswho|wf|weir|wedding|wed|website|webcam|watch|wang|wales|vu|voyage|voto|voting|vote|vodka|vn|vlaanderen|vision|villas|video|viajes|vi|vg|vet|versicherung|ventures|vegas|ve|vc|vacations|va|uz|uy|us|uol|uno|university|uk|ug|ua|tz|tw|tv|tui|tt|trust|travel|training|trading|trade|tr|toys|town|tours|toshiba|toray|top|tools|tokyo|today|to|tn|tm|tl|tk|tj|tirol|tires|tips|tienda|tickets|theater|th|tg|tf|tennis|temasek|tel|technology|tech|team|td|tc|taxi|tax|tattoo|tatar|taipei|sz|systems|sydney|sy|sx|swiss|sv|suzuki|surgery|surf|support|supply|supplies|sucks|su|style|study|st|sr|spreadbetting|spiegel|space|soy|sony|solutions|solar|sohu|software|social|so|sn|sm|sl|sky|sk|sj|site|singles|si|shriram|show|shoes|shiksha|sh|sg|sexy|sex|sew|services|sener|seat|se|sd|scot|science|schwarz|schule|school|scholarships|schmidt|scb|sca|sc|sb|saxo|sarl|sap|samsung|sale|saarland|sa|ryukyu|rw|run|ruhr|ru|rsvp|rs|rodeo|rocks|ro|rip|rio|rich|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reit|reisen|reise|rehab|redstone|red|recipes|realtor|re|racing|quebec|qpon|qa|py|pw|pub|pt|ps|property|properties|prof|productions|prod|pro|press|praxi|pr|post|porn|poker|pohl|pn|pm|plus|plumbing|place|pl|pk|pizza|pink|pictures|pictet|pics|piaget|physio|photos|photography|photo|philips|pharmacy|ph|pg|pf|pe|party|parts|partners|paris|panerai|page|pa|ovh|otsuka|osaka|organic|org|oracle|ooo|online|onl|ong|one|om|okinawa|nz|nyc|nu|ntt|nrw|nra|nr|np|no|nl|nissan|ninja|nico|ni|nhk|ngo|ng|nf|nexus|news|new|neustar|network|net|nec|ne|nc|navy|name|nagoya|nadex|na|mz|my|mx|mw|mv|museum|mu|mtpc|mtn|mt|ms|mr|mq|mp|movie|mov|motorcycles|moscow|mortgage|mormon|money|monash|moe|moda|mobi|mo|mn|mma|mm|ml|mk|mini|mil|miami|mh|mg|menu|memorial|meme|melbourne|meet|media|me|md|mc|marriott|markets|marketing|market|mango|management|maison|maif|madrid|ma|ly|lv|luxury|luxe|lu|ltda|lt|ls|lr|love|lotto|lotte|london|lol|loans|loan|lk|link|limo|limited|lighting|life|lidl|liaison|li|lgbt|legal|leclerc|lease|lds|lc|lb|lawyer|latrobe|lat|land|lacaixa|la|kz|kyoto|ky|kw|kred|krd|kr|kp|komatsu|koeln|kn|km|kiwi|kitchen|kim|ki|kh|kg|ke|kddi|kaufen|juegos|jp|joburg|jobs|jo|jm|jewelry|jetzt|je|jcb|java|iwc|it|is|irish|ir|iq|io|investments|international|int|insure|institute|ink|ing|info|infiniti|industries|in|immobilien|immo|im|il|ifm|ie|id|icu|ibm|hu|ht|hr|how|house|hosting|host|horse|honda|homes|holiday|holdings|hockey|hn|hm|hk|hiv|hitachi|hiphop|hermes|here|help|healthcare|haus|hangout|hamburg|gy|gw|guru|guitars|guide|guge|gu|gt|gs|gripe|green|gratis|graphics|gr|gq|gp|gov|gop|google|goog|goo|golf|goldpoint|gold|gn|gmx|gmo|gmail|gm|globo|global|gle|glass|gl|gives|gifts|gift|gi|gh|ggee|gg|gf|gent|ge|gdn|gd|gbiz|gb|garden|gallery|gal|ga|futbol|furniture|fund|frogans|frl|fr|foundation|forsale|forex|football|foo|fo|fm|fly|flsmidth|flowers|florist|flights|fk|fj|fitness|fit|fishing|fish|firmdale|financial|finance|film|fi|feedback|fashion|farm|fans|fan|faith|fail|express|exposed|expert|exchange|everbank|events|eus|eurovision|eu|et|estate|esq|es|erni|er|equipment|epson|enterprises|engineering|engineer|energy|emerck|email|eg|ee|education|edu|ec|eat|dz|dvag|durban|download|doosan|domains|doha|dog|docs|do|dnp|dm|dk|dj|discount|directory|direct|digital|diet|diamonds|dev|design|desi|dentist|dental|democrat|delivery|degree|deals|de|dclk|day|datsun|dating|date|dance|dad|dabur|cz|cyou|cymru|cy|cx|cw|cv|cuisinella|cu|cruises|crs|cricket|creditcard|credit|cr|courses|country|coop|cool|cooking|contractors|consulting|construction|condos|computer|company|community|com|cologne|college|coffee|codes|coach|co|cn|cm|club|clothing|clinic|click|cleaning|claims|cl|ck|city|citic|ci|church|chrome|christmas|chloe|cheap|chat|channel|ch|cg|cfd|cfa|cf|cern|ceo|center|cd|cc|cbn|catering|cat|casino|cash|casa|cartier|cars|careers|career|care|cards|caravan|capital|capetown|canon|cancerresearch|camp|camera|cal|cafe|cab|ca|bzh|bz|by|bw|bv|buzz|business|builders|build|budapest|bt|bs|brussels|brother|broker|bridgestone|br|boutique|boo|bond|boats|bo|bnpparibas|bn|bmw|bm|blue|bloomberg|blackfriday|black|bj|biz|bio|bingo|bike|bid|bi|bh|bg|bf|best|berlin|beer|be|bd|bbc|bb|bayern|bauhaus|bargains|barclays|barclaycard|bar|bank|band|ba|az|axa|ax|aw|autos|auto|audio|auction|au|attorney|at|associates|asia|as|arpa|army|archi|ar|aquarelle|aq|apartments|ao|android|an|amsterdam|am|alsace|allfinanz|al|airforce|aig|ai|agency|ag|afl|af|aero|ae|adult|ads|ad|actor|active|accountants|accountant|accenture|academy|ac|abogado|abbott|abb",
        s = new RegExp(
          "([^@.]|^)\\b(?:\\w[\\w-]*:/{0,3}(?:(?:\\w+:)?\\w+@)?)?([\\w-]+\\.)+(?:" +
            r +
            ')(?!\\.\\w)\\b(?::\\d+)?(?:[/?][^\\s\\{\\}\\|\\\\\\^\\[\\]`<>"\\x80-\\xFF\\x00-\\x1F\\x7F]*)?',
          "g"
        ),
        t = function (a) {
          return Boolean(a.match(s));
        },
        u = /^[\w-]+:\/{0,3}/,
        v = /([.,]+)$/g,
        w = function (a) {
          var b,
            c,
            d,
            e,
            f,
            g = [];
          if (!a) return g;
          for (; (b = s.exec(a)); ) {
            (c = b[0]),
              (f = b[1]),
              (c = c.slice(f.length)),
              (v.lastIndex = 0),
              (d = v.exec(c)),
              d && (c = c.slice(0, c.length - d[0].length)),
              (e = u.test(c) ? c : "http://" + c);
            var h = b.index + f.length;
            g.push({
              text: c,
              url: e,
              index: h,
              endIndex: h + c.length,
            });
          }
          return g;
        },
        x = new RegExp(
          "[\\u0021-\\u002F\\u003A-\\u0040\\u005B-\\u0060\\u007B-\\u007E\\u00A1-\\u00BF\\u2010-\\u2027\\u2030-\\u205E\\u2300-\\u23FF\\u2E00-\\u2E7F\\u3001-\\u303F\\uFE10-\\uFE19\\uFE30-\\uFE4F\\uFE50-\\uFE6B\\uFF01-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF40\\uFF5B-\\uFF60\\uFF5F-\\uFF64]+$"
        ),
        y = 0.5,
        z = function (a, b) {
          if (a.length <= b) return a;
          a = a.slice(0, b - 1);
          var c = a,
            d = /(^.*\S)\s/.exec(a);
          d && (a = d[1]);
          var e = x.exec(a);
          return (
            e && (a = a.slice(0, a.length - e[0].length)),
            a.length < y * c.length && (a = c),
            a + "…"
          );
        },
        A = (function () {
          var a = o.createElement("fakeelement");
          return function (b, c) {
            return void 0 !== a.style[c];
          };
        })(),
        B = (function () {
          var a = {
            transition: "transitionend",
            OTransition: "otransitionend",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
          return b.find(a, A) || null;
        })(),
        C = (function () {
          var a = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
          };
          return b.find(a, A) || null;
        })(),
        D = function (b, c) {
          return (
            c || (c = a(b.currentTarget)),
            "_blank" === c.attr("target") ||
              b.ctrlKey ||
              b.metaKey ||
              b.shiftKey ||
              b.altKey
          );
        },
        E = 500,
        F = (function () {
          var a = {},
            c = /#.*$/,
            d = function (a) {
              var c = a.attr("data-tid");
              return c || ((c = b.uniqueId()), a.attr("data-tid", c)), c;
            };
          return function (b, e) {
            if (b.isDefaultPrevented()) return !1;
            if (!e.is("a")) return !1;
            var f = (e.attr("href") || "").replace(c, "");
            if (!f) return !1;
            var g = d(e),
              h = new Date().getTime();
            return !(a[g] && h - a[g] < E) && ((a[g] = h), !0);
          };
        })();
      return {
        validateEmail: q,
        isUrl: t,
        bleachFindUrls: w,
        niceTruncate: z,
        transitionEndEvent: B,
        animationEndEvent: C,
        isMobileUserAgent: e,
        preventDefaultHandler: f,
        stopPropagationHandler: g,
        stopEventHandler: h,
        getDomain: i,
        serializeArgs: j,
        serialize: k,
        openWindow: l,
        insertWithWhitespace: m,
        willOpenNewWindow: D,
        clickShouldBeLogged: F,
        deepClone: n,
        browser: d,
      };
    }
  ),
  require.config({
    waitSeconds: 0,
    enforceDefine: !0,
    paths: {
      ga: "https://ssl.google-analytics.com/ga",
      "ga-debug": "https://ssl.google-analytics.com/u/ga_debug",
      fb: "https://connect.facebook.net/en_US/sdk",
      gapi: "https://apis.google.com/js/api",
    },
    shim: {
      ga: {
        exports: "_gat",
      },
      "ga-debug": {
        exports: "_gat",
      },
      fb: {
        exports: "FB",
      },
      gapi: {
        exports: "gapi",
      },
    },
  }),
  define("require/config", function () {}),
  define("common/main", ["require", "exports"], function (a, b) {
    "use strict";
    var c = function () {
        return Number(new Date());
      },
      d = window.document;
    (b.ready = !1), (b.timings = {});
    var e = (function (a) {
      for (
        var b = {}, c = a.substr(1).split("&"), d = c.length - 1;
        d >= 0;
        d--
      ) {
        var e = c[d].split("=");
        b[e[0]] = decodeURIComponent((e[1] || "").replace(/\+/g, "%20"));
      }
      return b;
    })(window.location.search);
    (b.params = e),
      (b.version = e.version),
      (b.loadCss = function (a) {
        var b = d.createElement("link");
        return (
          (b.rel = "stylesheet"),
          (b.href = a),
          d.getElementsByTagName("head")[0].appendChild(b),
          b
        );
      }),
      (b.setReady = function () {
        a(["core/bus"], function (a) {
          a.frame.sendHostMessage("ready"), (b.ready = !0);
        });
      }),
      (b.setFailure = function (b) {
        var c = d.getElementById("error");
        c && (c.style.display = "block");
        var e = window.opener || window.parent;
        e &&
          (a.defined("core/bus")
            ? a("core/bus").frame.sendHostMessage("fail", b)
            : e.postMessage(
                JSON.stringify({
                  scope: "host",
                  name: "fail",
                  data: b,
                  sender: window.name,
                }),
                "*"
              ));
      }),
      (b.init = function (f, g) {
        function h(a, e, f, g, h) {
          (b.timings.downloadEnd = c()),
            (d.body.style.display = ""),
            f.setDefaultLevel("SILENT");
          var i = h.lounge.sentry_rate_limit || 0,
            j =
              "//f23ec5683d8e46a9bb12176fbabacf43@sentry.services.disqus.com/27";
          g.debug = !1;
          var k = d.documentMode && d.documentMode < 10;
          j &&
            !k &&
            g
              .config(j, {
                whitelistUrls: ["https://c.disquscdn.com/next/recommendations"],
                release: b.version,
                shouldSendCallback: function () {
                  return i > 0 && Math.random() <= 1 / i;
                },
              })
              .install();
          var l;
          try {
            l = (e.init || a.noop)(b);
          } catch (m) {
            j && g.captureException(m),
              (l = {
                code: "js_exception",
              });
          }
          l ? b.setFailure(l) : b.setReady();
        }

        function i(b, c) {
          require.undef(b), define(b, c), a([b]);
        }

        function j(a) {
          "undefined" != typeof console &&
            "function" == typeof console.log &&
            console.log(a.toString());
          for (var c, d, e = a.requireModules || [], f = 0; f < e.length; ++f)
            (c = e[f]),
              (d = m[c]),
              "undefined" == typeof d
                ? b.setFailure({
                    code: "module_load_error." + c.replace(/\W/g, "_"),
                  })
                : i(c, d);
        }
        if (e.n_s)
          return void (d.documentElement.className +=
            " not-supported type-" + e.n_s);
        b.timings.initStart = c();
        var k = "../lang/",
          l = d.documentElement.lang;
        require.config({
          paths: {
            translations: k + l,
          },
        }),
          (l && "en" !== l) || define("translations", {}),
          b.loadCss(
            g["rtl" === d.documentElement.dir ? "RTL_STYLES" : "STYLES"]
          );
        var m = {
          translations: {},
          "remote/config": {
            recommendations: {},
            experiments: {},
          },
        };
        a(["jquery", f + "/main", "loglevel", "raven", "remote/config"], h, j);
      });
  }),
  define("common.bundle", function () {});
