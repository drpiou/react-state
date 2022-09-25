import dr, { useState as ji, useCallback as nt, useRef as at, useEffect as it, createContext as Pi, useMemo as Ht, useContext as Vt, memo as Si } from "react";
var or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ai = typeof or == "object" && or && or.Object === Object && or, Ta = Ai, Ei = Ta, Ci = typeof self == "object" && self && self.Object === Object && self, xi = Ei || Ci || Function("return this")(), Z = xi, Ri = Z, Ii = Ri.Symbol, yr = Ii, Jt = yr, ja = Object.prototype, Di = ja.hasOwnProperty, Mi = ja.toString, er = Jt ? Jt.toStringTag : void 0;
function Fi(e) {
  var r = Di.call(e, er), n = e[er];
  try {
    e[er] = void 0;
    var a = !0;
  } catch {
  }
  var o = Mi.call(e);
  return a && (r ? e[er] = n : delete e[er]), o;
}
var Li = Fi, ki = Object.prototype, Ni = ki.toString;
function Ui(e) {
  return Ni.call(e);
}
var Gi = Ui, Xt = yr, Bi = Li, Wi = Gi, qi = "[object Null]", zi = "[object Undefined]", Zt = Xt ? Xt.toStringTag : void 0;
function Ki(e) {
  return e == null ? e === void 0 ? zi : qi : Zt && Zt in Object(e) ? Bi(e) : Wi(e);
}
var Pt = Ki;
function Yi(e) {
  return e != null && typeof e == "object";
}
var Pa = Yi, Hi = Pt, Vi = Pa, Ji = "[object Arguments]";
function Xi(e) {
  return Vi(e) && Hi(e) == Ji;
}
var Zi = Xi, Qt = Zi, Qi = Pa, Sa = Object.prototype, eo = Sa.hasOwnProperty, ro = Sa.propertyIsEnumerable;
Qt(function() {
  return arguments;
}());
var lr = { exports: {} };
function to() {
  return !1;
}
var no = to;
(function(e, r) {
  var n = Z, a = no, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, u = f ? n.Buffer : void 0, l = u ? u.isBuffer : void 0, p = l || a;
  e.exports = p;
})(lr, lr.exports);
var ot = { exports: {} };
(function(e, r) {
  var n = Ta, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, f = s && n.process, u = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(ot, ot.exports);
var en = ot.exports;
en && en.isTypedArray;
lr.exports;
function ao(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Aa = ao, io = Pt, oo = Aa, so = "[object AsyncFunction]", uo = "[object Function]", co = "[object GeneratorFunction]", fo = "[object Proxy]";
function lo(e) {
  if (!oo(e))
    return !1;
  var r = io(e);
  return r == uo || r == co || r == so || r == fo;
}
var vo = lo;
function po() {
  this.__data__ = [], this.size = 0;
}
var yo = po;
function ho(e, r) {
  return e === r || e !== e && r !== r;
}
var go = ho, _o = go;
function bo(e, r) {
  for (var n = e.length; n--; )
    if (_o(e[n][0], r))
      return n;
  return -1;
}
var hr = bo, $o = hr, Oo = Array.prototype, mo = Oo.splice;
function wo(e) {
  var r = this.__data__, n = $o(r, e);
  if (n < 0)
    return !1;
  var a = r.length - 1;
  return n == a ? r.pop() : mo.call(r, n, 1), --this.size, !0;
}
var To = wo, jo = hr;
function Po(e) {
  var r = this.__data__, n = jo(r, e);
  return n < 0 ? void 0 : r[n][1];
}
var So = Po, Ao = hr;
function Eo(e) {
  return Ao(this.__data__, e) > -1;
}
var Co = Eo, xo = hr;
function Ro(e, r) {
  var n = this.__data__, a = xo(n, e);
  return a < 0 ? (++this.size, n.push([e, r])) : n[a][1] = r, this;
}
var Io = Ro, Do = yo, Mo = To, Fo = So, Lo = Co, ko = Io;
function be(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
be.prototype.clear = Do;
be.prototype.delete = Mo;
be.prototype.get = Fo;
be.prototype.has = Lo;
be.prototype.set = ko;
var No = be, Uo = Z, Go = Uo["__core-js_shared__"], Bo = Go, Hr = Bo, rn = function() {
  var e = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wo(e) {
  return !!rn && rn in e;
}
var qo = Wo, zo = Function.prototype, Ko = zo.toString;
function Yo(e) {
  if (e != null) {
    try {
      return Ko.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ea = Yo, Ho = vo, Vo = qo, Jo = Aa, Xo = Ea, Zo = /[\\^$.*+?()[\]{}|]/g, Qo = /^\[object .+?Constructor\]$/, es = Function.prototype, rs = Object.prototype, ts = es.toString, ns = rs.hasOwnProperty, as = RegExp(
  "^" + ts.call(ns).replace(Zo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function is(e) {
  if (!Jo(e) || Vo(e))
    return !1;
  var r = Ho(e) ? as : Qo;
  return r.test(Xo(e));
}
var os = is;
function ss(e, r) {
  return e == null ? void 0 : e[r];
}
var us = ss, cs = os, fs = us;
function ls(e, r) {
  var n = fs(e, r);
  return cs(n) ? n : void 0;
}
var $e = ls, vs = $e, ps = Z, ds = vs(ps, "Map"), Ca = ds, ys = $e, hs = ys(Object, "create"), gr = hs, tn = gr;
function gs() {
  this.__data__ = tn ? tn(null) : {}, this.size = 0;
}
var _s = gs;
function bs(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var $s = bs, Os = gr, ms = "__lodash_hash_undefined__", ws = Object.prototype, Ts = ws.hasOwnProperty;
function js(e) {
  var r = this.__data__;
  if (Os) {
    var n = r[e];
    return n === ms ? void 0 : n;
  }
  return Ts.call(r, e) ? r[e] : void 0;
}
var Ps = js, Ss = gr, As = Object.prototype, Es = As.hasOwnProperty;
function Cs(e) {
  var r = this.__data__;
  return Ss ? r[e] !== void 0 : Es.call(r, e);
}
var xs = Cs, Rs = gr, Is = "__lodash_hash_undefined__";
function Ds(e, r) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Rs && r === void 0 ? Is : r, this;
}
var Ms = Ds, Fs = _s, Ls = $s, ks = Ps, Ns = xs, Us = Ms;
function Oe(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
Oe.prototype.clear = Fs;
Oe.prototype.delete = Ls;
Oe.prototype.get = ks;
Oe.prototype.has = Ns;
Oe.prototype.set = Us;
var Gs = Oe, nn = Gs, Bs = No, Ws = Ca;
function qs() {
  this.size = 0, this.__data__ = {
    hash: new nn(),
    map: new (Ws || Bs)(),
    string: new nn()
  };
}
var zs = qs;
function Ks(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Ys = Ks, Hs = Ys;
function Vs(e, r) {
  var n = e.__data__;
  return Hs(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
var _r = Vs, Js = _r;
function Xs(e) {
  var r = Js(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Zs = Xs, Qs = _r;
function eu(e) {
  return Qs(this, e).get(e);
}
var ru = eu, tu = _r;
function nu(e) {
  return tu(this, e).has(e);
}
var au = nu, iu = _r;
function ou(e, r) {
  var n = iu(this, e), a = n.size;
  return n.set(e, r), this.size += n.size == a ? 0 : 1, this;
}
var su = ou, uu = zs, cu = Zs, fu = ru, lu = au, vu = su;
function me(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
me.prototype.clear = uu;
me.prototype.delete = cu;
me.prototype.get = fu;
me.prototype.has = lu;
me.prototype.set = vu;
var pu = me, du = Z;
du.Uint8Array;
var an = yr, on = an ? an.prototype : void 0;
on && on.valueOf;
var yu = $e, hu = Z, gu = yu(hu, "DataView"), _u = gu, bu = $e, $u = Z, Ou = bu($u, "Promise"), mu = Ou, wu = $e, Tu = Z, ju = wu(Tu, "Set"), Pu = ju, Su = $e, Au = Z, Eu = Su(Au, "WeakMap"), Cu = Eu, st = _u, ut = Ca, ct = mu, ft = Pu, lt = Cu, xa = Pt, we = Ea, sn = "[object Map]", xu = "[object Object]", un = "[object Promise]", cn = "[object Set]", fn = "[object WeakMap]", ln = "[object DataView]", Ru = we(st), Iu = we(ut), Du = we(ct), Mu = we(ft), Fu = we(lt), ye = xa;
(st && ye(new st(new ArrayBuffer(1))) != ln || ut && ye(new ut()) != sn || ct && ye(ct.resolve()) != un || ft && ye(new ft()) != cn || lt && ye(new lt()) != fn) && (ye = function(e) {
  var r = xa(e), n = r == xu ? e.constructor : void 0, a = n ? we(n) : "";
  if (a)
    switch (a) {
      case Ru:
        return ln;
      case Iu:
        return sn;
      case Du:
        return un;
      case Mu:
        return cn;
      case Fu:
        return fn;
    }
  return r;
});
lr.exports;
var Ra = pu, Lu = "Expected a function";
function St(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Lu);
  var n = function() {
    var a = arguments, o = r ? r.apply(this, a) : a[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var f = e.apply(this, a);
    return n.cache = s.set(o, f) || s, f;
  };
  return n.cache = new (St.Cache || Ra)(), n;
}
St.Cache = Ra;
var ku = St, Nu = ku, Uu = 500;
function Gu(e) {
  var r = Nu(e, function(a) {
    return n.size === Uu && n.clear(), a;
  }), n = r.cache;
  return r;
}
var Bu = Gu, Wu = Bu, qu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zu = /\\(\\)?/g;
Wu(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(qu, function(n, a, o, s) {
    r.push(o ? s.replace(zu, "$1") : a || n);
  }), r;
});
var vn = yr, pn = vn ? vn.prototype : void 0;
pn && pn.toString;
const Ku = (e) => e.displayName || e.name || void 0;
var Ia = { exports: {} }, he = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vr, dn;
function Da() {
  if (dn)
    return Vr;
  dn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var f = {}, u = 0; u < 10; u++)
        f["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(f).map(function(v) {
        return f[v];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        p[v] = v;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vr = o() ? Object.assign : function(s, f) {
    for (var u, l = a(s), p, v = 1; v < arguments.length; v++) {
      u = Object(arguments[v]);
      for (var g in u)
        r.call(u, g) && (l[g] = u[g]);
      if (e) {
        p = e(u);
        for (var y = 0; y < p.length; y++)
          n.call(u, p[y]) && (l[p[y]] = u[p[y]]);
      }
    }
    return l;
  }, Vr;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function Yu() {
  if (yn)
    return he;
  yn = 1, Da();
  var e = dr, r = 60103;
  if (he.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var n = Symbol.for;
    r = n("react.element"), he.Fragment = n("react.fragment");
  }
  var a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(u, l, p) {
    var v, g = {}, y = null, m = null;
    p !== void 0 && (y = "" + p), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (v in l)
      o.call(l, v) && !s.hasOwnProperty(v) && (g[v] = l[v]);
    if (u && u.defaultProps)
      for (v in l = u.defaultProps, l)
        g[v] === void 0 && (g[v] = l[v]);
    return { $$typeof: r, type: u, key: y, ref: m, props: g, _owner: a.current };
  }
  return he.jsx = f, he.jsxs = f, he;
}
var hn = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Hu() {
  return gn || (gn = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = dr, n = Da(), a = 60103, o = 60106;
      e.Fragment = 60107;
      var s = 60108, f = 60114, u = 60109, l = 60110, p = 60112, v = 60113, g = 60120, y = 60115, m = 60116, j = 60121, A = 60122, R = 60117, F = 60129, L = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        a = O("react.element"), o = O("react.portal"), e.Fragment = O("react.fragment"), s = O("react.strict_mode"), f = O("react.profiler"), u = O("react.provider"), l = O("react.context"), p = O("react.forward_ref"), v = O("react.suspense"), g = O("react.suspense_list"), y = O("react.memo"), m = O("react.lazy"), j = O("react.block"), A = O("react.server.block"), R = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), F = O("react.debug_trace_mode"), O("react.offscreen"), L = O("react.legacy_hidden");
      }
      var k = typeof Symbol == "function" && Symbol.iterator, C = "@@iterator";
      function G(t) {
        if (t === null || typeof t != "object")
          return null;
        var i = k && t[k] || t[C];
        return typeof i == "function" ? i : null;
      }
      var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function P(t) {
        {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          re("error", t, c);
        }
      }
      function re(t, i, c) {
        {
          var d = I.ReactDebugCurrentFrame, b = d.getStackAddendum();
          b !== "" && (i += "%s", c = c.concat([b]));
          var $ = c.map(function(_) {
            return "" + _;
          });
          $.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, $);
        }
      }
      var Q = !1;
      function de(t) {
        return !!(typeof t == "string" || typeof t == "function" || t === e.Fragment || t === f || t === F || t === s || t === v || t === g || t === L || Q || typeof t == "object" && t !== null && (t.$$typeof === m || t.$$typeof === y || t.$$typeof === u || t.$$typeof === l || t.$$typeof === p || t.$$typeof === R || t.$$typeof === j || t[0] === A));
      }
      function W(t, i, c) {
        var d = i.displayName || i.name || "";
        return t.displayName || (d !== "" ? c + "(" + d + ")" : c);
      }
      function Re(t) {
        return t.displayName || "Context";
      }
      function x(t) {
        if (t == null)
          return null;
        if (typeof t.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
        switch (t) {
          case e.Fragment:
            return "Fragment";
          case o:
            return "Portal";
          case f:
            return "Profiler";
          case s:
            return "StrictMode";
          case v:
            return "Suspense";
          case g:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case l:
              var i = t;
              return Re(i) + ".Consumer";
            case u:
              var c = t;
              return Re(c._context) + ".Provider";
            case p:
              return W(t, t.render, "ForwardRef");
            case y:
              return x(t.type);
            case j:
              return x(t._render);
            case m: {
              var d = t, b = d._payload, $ = d._init;
              try {
                return x($(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var q = 0, Ie, De, Me, Fe, Le, ke, Ne;
      function Ue() {
      }
      Ue.__reactDisabledLog = !0;
      function Sr() {
        {
          if (q === 0) {
            Ie = console.log, De = console.info, Me = console.warn, Fe = console.error, Le = console.group, ke = console.groupCollapsed, Ne = console.groupEnd;
            var t = {
              configurable: !0,
              enumerable: !0,
              value: Ue,
              writable: !0
            };
            Object.defineProperties(console, {
              info: t,
              log: t,
              warn: t,
              error: t,
              group: t,
              groupCollapsed: t,
              groupEnd: t
            });
          }
          q++;
        }
      }
      function Ar() {
        {
          if (q--, q === 0) {
            var t = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: n({}, t, {
                value: Ie
              }),
              info: n({}, t, {
                value: De
              }),
              warn: n({}, t, {
                value: Me
              }),
              error: n({}, t, {
                value: Fe
              }),
              group: n({}, t, {
                value: Le
              }),
              groupCollapsed: n({}, t, {
                value: ke
              }),
              groupEnd: n({}, t, {
                value: Ne
              })
            });
          }
          q < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var te = I.ReactCurrentDispatcher, ne;
      function H(t, i, c) {
        {
          if (ne === void 0)
            try {
              throw Error();
            } catch (b) {
              var d = b.stack.trim().match(/\n( *(at )?)/);
              ne = d && d[1] || "";
            }
          return `
` + ne + t;
        }
      }
      var ae = !1, V;
      {
        var Er = typeof WeakMap == "function" ? WeakMap : Map;
        V = new Er();
      }
      function Ge(t, i) {
        if (!t || ae)
          return "";
        {
          var c = V.get(t);
          if (c !== void 0)
            return c;
        }
        var d;
        ae = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var $;
        $ = te.current, te.current = null, Sr();
        try {
          if (i) {
            var _ = function() {
              throw Error();
            };
            if (Object.defineProperty(_.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(_, []);
              } catch (M) {
                d = M;
              }
              Reflect.construct(t, [], _);
            } else {
              try {
                _.call();
              } catch (M) {
                d = M;
              }
              t.call(_.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (M) {
              d = M;
            }
            t();
          }
        } catch (M) {
          if (M && d && typeof M.stack == "string") {
            for (var h = M.stack.split(`
`), S = d.stack.split(`
`), w = h.length - 1, T = S.length - 1; w >= 1 && T >= 0 && h[w] !== S[T]; )
              T--;
            for (; w >= 1 && T >= 0; w--, T--)
              if (h[w] !== S[T]) {
                if (w !== 1 || T !== 1)
                  do
                    if (w--, T--, T < 0 || h[w] !== S[T]) {
                      var D = `
` + h[w].replace(" at new ", " at ");
                      return typeof t == "function" && V.set(t, D), D;
                    }
                  while (w >= 1 && T >= 0);
                break;
              }
          }
        } finally {
          ae = !1, te.current = $, Ar(), Error.prepareStackTrace = b;
        }
        var U = t ? t.displayName || t.name : "", Qe = U ? H(U) : "";
        return typeof t == "function" && V.set(t, Qe), Qe;
      }
      function Be(t, i, c) {
        return Ge(t, !1);
      }
      function Cr(t) {
        var i = t.prototype;
        return !!(i && i.isReactComponent);
      }
      function J(t, i, c) {
        if (t == null)
          return "";
        if (typeof t == "function")
          return Ge(t, Cr(t));
        if (typeof t == "string")
          return H(t);
        switch (t) {
          case v:
            return H("Suspense");
          case g:
            return H("SuspenseList");
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case p:
              return Be(t.render);
            case y:
              return J(t.type, i, c);
            case j:
              return Be(t._render);
            case m: {
              var d = t, b = d._payload, $ = d._init;
              try {
                return J($(b), i, c);
              } catch {
              }
            }
          }
        return "";
      }
      var We = {}, qe = I.ReactDebugCurrentFrame;
      function X(t) {
        if (t) {
          var i = t._owner, c = J(t.type, t._source, i ? i.type : null);
          qe.setExtraStackFrame(c);
        } else
          qe.setExtraStackFrame(null);
      }
      function xr(t, i, c, d, b) {
        {
          var $ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var _ in t)
            if ($(t, _)) {
              var h = void 0;
              try {
                if (typeof t[_] != "function") {
                  var S = Error((d || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw S.name = "Invariant Violation", S;
                }
                h = t[_](i, _, d, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (w) {
                h = w;
              }
              h && !(h instanceof Error) && (X(b), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", c, _, typeof h), X(null)), h instanceof Error && !(h.message in We) && (We[h.message] = !0, X(b), P("Failed %s type: %s", c, h.message), X(null));
            }
        }
      }
      var z = I.ReactCurrentOwner, ie = Object.prototype.hasOwnProperty, Rr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ze, Ke, oe;
      oe = {};
      function Ir(t) {
        if (ie.call(t, "ref")) {
          var i = Object.getOwnPropertyDescriptor(t, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.ref !== void 0;
      }
      function Dr(t) {
        if (ie.call(t, "key")) {
          var i = Object.getOwnPropertyDescriptor(t, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.key !== void 0;
      }
      function Mr(t, i) {
        if (typeof t.ref == "string" && z.current && i && z.current.stateNode !== i) {
          var c = x(z.current.type);
          oe[c] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(z.current.type), t.ref), oe[c] = !0);
        }
      }
      function Fr(t, i) {
        {
          var c = function() {
            ze || (ze = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          c.isReactWarning = !0, Object.defineProperty(t, "key", {
            get: c,
            configurable: !0
          });
        }
      }
      function Lr(t, i) {
        {
          var c = function() {
            Ke || (Ke = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          c.isReactWarning = !0, Object.defineProperty(t, "ref", {
            get: c,
            configurable: !0
          });
        }
      }
      var kr = function(t, i, c, d, b, $, _) {
        var h = {
          $$typeof: a,
          type: t,
          key: i,
          ref: c,
          props: _,
          _owner: $
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function Nr(t, i, c, d, b) {
        {
          var $, _ = {}, h = null, S = null;
          c !== void 0 && (h = "" + c), Dr(i) && (h = "" + i.key), Ir(i) && (S = i.ref, Mr(i, b));
          for ($ in i)
            ie.call(i, $) && !Rr.hasOwnProperty($) && (_[$] = i[$]);
          if (t && t.defaultProps) {
            var w = t.defaultProps;
            for ($ in w)
              _[$] === void 0 && (_[$] = w[$]);
          }
          if (h || S) {
            var T = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
            h && Fr(_, T), S && Lr(_, T);
          }
          return kr(t, h, S, b, d, z.current, _);
        }
      }
      var se = I.ReactCurrentOwner, Ye = I.ReactDebugCurrentFrame;
      function N(t) {
        if (t) {
          var i = t._owner, c = J(t.type, t._source, i ? i.type : null);
          Ye.setExtraStackFrame(c);
        } else
          Ye.setExtraStackFrame(null);
      }
      var ue;
      ue = !1;
      function ce(t) {
        return typeof t == "object" && t !== null && t.$$typeof === a;
      }
      function He() {
        {
          if (se.current) {
            var t = x(se.current.type);
            if (t)
              return `

Check the render method of \`` + t + "`.";
          }
          return "";
        }
      }
      function Ur(t) {
        {
          if (t !== void 0) {
            var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
            return `

Check your code at ` + i + ":" + c + ".";
          }
          return "";
        }
      }
      var Ve = {};
      function Gr(t) {
        {
          var i = He();
          if (!i) {
            var c = typeof t == "string" ? t : t.displayName || t.name;
            c && (i = `

Check the top-level render call using <` + c + ">.");
          }
          return i;
        }
      }
      function Je(t, i) {
        {
          if (!t._store || t._store.validated || t.key != null)
            return;
          t._store.validated = !0;
          var c = Gr(i);
          if (Ve[c])
            return;
          Ve[c] = !0;
          var d = "";
          t && t._owner && t._owner !== se.current && (d = " It was passed a child from " + x(t._owner.type) + "."), N(t), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, d), N(null);
        }
      }
      function Xe(t, i) {
        {
          if (typeof t != "object")
            return;
          if (Array.isArray(t))
            for (var c = 0; c < t.length; c++) {
              var d = t[c];
              ce(d) && Je(d, i);
            }
          else if (ce(t))
            t._store && (t._store.validated = !0);
          else if (t) {
            var b = G(t);
            if (typeof b == "function" && b !== t.entries)
              for (var $ = b.call(t), _; !(_ = $.next()).done; )
                ce(_.value) && Je(_.value, i);
          }
        }
      }
      function Br(t) {
        {
          var i = t.type;
          if (i == null || typeof i == "string")
            return;
          var c;
          if (typeof i == "function")
            c = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === p || i.$$typeof === y))
            c = i.propTypes;
          else
            return;
          if (c) {
            var d = x(i);
            xr(c, t.props, "prop", d, t);
          } else if (i.PropTypes !== void 0 && !ue) {
            ue = !0;
            var b = x(i);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wr(t) {
        {
          for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
            var d = i[c];
            if (d !== "children" && d !== "key") {
              N(t), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), N(null);
              break;
            }
          }
          t.ref !== null && (N(t), P("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
        }
      }
      function Ze(t, i, c, d, b, $) {
        {
          var _ = de(t);
          if (!_) {
            var h = "";
            (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var S = Ur(b);
            S ? h += S : h += He();
            var w;
            t === null ? w = "null" : Array.isArray(t) ? w = "array" : t !== void 0 && t.$$typeof === a ? (w = "<" + (x(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, h);
          }
          var T = Nr(t, i, c, b, $);
          if (T == null)
            return T;
          if (_) {
            var D = i.children;
            if (D !== void 0)
              if (d)
                if (Array.isArray(D)) {
                  for (var U = 0; U < D.length; U++)
                    Xe(D[U], t);
                  Object.freeze && Object.freeze(D);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Xe(D, t);
          }
          return t === e.Fragment ? Wr(T) : Br(T), T;
        }
      }
      function qr(t, i, c) {
        return Ze(t, i, c, !0);
      }
      function zr(t, i, c) {
        return Ze(t, i, c, !1);
      }
      var Kr = zr, Yr = qr;
      e.jsx = Kr, e.jsxs = Yr;
    }();
  }(hn)), hn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Yu() : e.exports = Hu();
})(Ia);
Ia.exports.jsx;
const Vu = () => {
  const e = at(!1);
  return it(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, Ju = (e) => {
  const r = Vu(), [n, a] = ji(e), o = nt(
    (s) => {
      r.current && a(s);
    },
    [r]
  );
  return [n, o];
};
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xu = typeof sr == "object" && sr && sr.Object === Object && sr, Ma = Xu, Zu = Ma, Qu = typeof self == "object" && self && self.Object === Object && self, ec = Zu || Qu || Function("return this")(), K = ec, rc = K, tc = rc.Symbol, At = tc, _n = At, Fa = Object.prototype, nc = Fa.hasOwnProperty, ac = Fa.toString, rr = _n ? _n.toStringTag : void 0;
function ic(e) {
  var r = nc.call(e, rr), n = e[rr];
  try {
    e[rr] = void 0;
    var a = !0;
  } catch {
  }
  var o = ac.call(e);
  return a && (r ? e[rr] = n : delete e[rr]), o;
}
var oc = ic, sc = Object.prototype, uc = sc.toString;
function cc(e) {
  return uc.call(e);
}
var fc = cc, bn = At, lc = oc, vc = fc, pc = "[object Null]", dc = "[object Undefined]", $n = bn ? bn.toStringTag : void 0;
function yc(e) {
  return e == null ? e === void 0 ? dc : pc : $n && $n in Object(e) ? lc(e) : vc(e);
}
var br = yc;
function hc(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var La = hc, gc = br, _c = La, bc = "[object AsyncFunction]", $c = "[object Function]", Oc = "[object GeneratorFunction]", mc = "[object Proxy]";
function wc(e) {
  if (!_c(e))
    return !1;
  var r = gc(e);
  return r == $c || r == Oc || r == bc || r == mc;
}
var Tc = wc, jc = K, Pc = jc["__core-js_shared__"], Sc = Pc, Jr = Sc, On = function() {
  var e = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ac(e) {
  return !!On && On in e;
}
var Ec = Ac, Cc = Function.prototype, xc = Cc.toString;
function Rc(e) {
  if (e != null) {
    try {
      return xc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ka = Rc, Ic = Tc, Dc = Ec, Mc = La, Fc = ka, Lc = /[\\^$.*+?()[\]{}|]/g, kc = /^\[object .+?Constructor\]$/, Nc = Function.prototype, Uc = Object.prototype, Gc = Nc.toString, Bc = Uc.hasOwnProperty, Wc = RegExp(
  "^" + Gc.call(Bc).replace(Lc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qc(e) {
  if (!Mc(e) || Dc(e))
    return !1;
  var r = Ic(e) ? Wc : kc;
  return r.test(Fc(e));
}
var zc = qc;
function Kc(e, r) {
  return e == null ? void 0 : e[r];
}
var Yc = Kc, Hc = zc, Vc = Yc;
function Jc(e, r) {
  var n = Vc(e, r);
  return Hc(n) ? n : void 0;
}
var le = Jc, Xc = le, Zc = K, Qc = Xc(Zc, "Map"), ef = Qc, rf = le;
rf(Object, "create");
var tf = le;
(function() {
  try {
    var e = tf(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function nf(e) {
  return e != null && typeof e == "object";
}
var Et = nf, af = br, of = Et, sf = "[object Arguments]";
function uf(e) {
  return of(e) && af(e) == sf;
}
var cf = uf, mn = cf, ff = Et, Na = Object.prototype, lf = Na.hasOwnProperty, vf = Na.propertyIsEnumerable;
mn(function() {
  return arguments;
}());
var vr = { exports: {} };
function pf() {
  return !1;
}
var df = pf;
(function(e, r) {
  var n = K, a = df, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, u = f ? n.Buffer : void 0, l = u ? u.isBuffer : void 0, p = l || a;
  e.exports = p;
})(vr, vr.exports);
var nr = { exports: {} };
(function(e, r) {
  var n = Ma, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, f = s && n.process, u = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(nr, nr.exports);
var wn = nr.exports;
wn && wn.isTypedArray;
vr.exports;
function yf(e, r) {
  return function(n) {
    return e(r(n));
  };
}
var hf = yf, vt = { exports: {} };
(function(e, r) {
  var n = K, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, f = s ? n.Buffer : void 0, u = f ? f.allocUnsafe : void 0;
  function l(p, v) {
    if (v)
      return p.slice();
    var g = p.length, y = u ? u(g) : new p.constructor(g);
    return p.copy(y), y;
  }
  e.exports = l;
})(vt, vt.exports);
var gf = hf, _f = gf(Object.getPrototypeOf, Object), bf = _f, $f = le, Of = K, mf = $f(Of, "DataView"), wf = mf, Tf = le, jf = K, Pf = Tf(jf, "Promise"), Sf = Pf, Af = le, Ef = K, Cf = Af(Ef, "Set"), xf = Cf, Rf = le, If = K, Df = Rf(If, "WeakMap"), Mf = Df, pt = wf, dt = ef, yt = Sf, ht = xf, gt = Mf, Ua = br, Te = ka, Tn = "[object Map]", Ff = "[object Object]", jn = "[object Promise]", Pn = "[object Set]", Sn = "[object WeakMap]", An = "[object DataView]", Lf = Te(pt), kf = Te(dt), Nf = Te(yt), Uf = Te(ht), Gf = Te(gt), ge = Ua;
(pt && ge(new pt(new ArrayBuffer(1))) != An || dt && ge(new dt()) != Tn || yt && ge(yt.resolve()) != jn || ht && ge(new ht()) != Pn || gt && ge(new gt()) != Sn) && (ge = function(e) {
  var r = Ua(e), n = r == Ff ? e.constructor : void 0, a = n ? Te(n) : "";
  if (a)
    switch (a) {
      case Lf:
        return An;
      case kf:
        return Tn;
      case Nf:
        return jn;
      case Uf:
        return Pn;
      case Gf:
        return Sn;
    }
  return r;
});
var Bf = K;
Bf.Uint8Array;
var En = At, Cn = En ? En.prototype : void 0;
Cn && Cn.valueOf;
var xn = nr.exports;
xn && xn.isMap;
var Rn = nr.exports;
Rn && Rn.isSet;
vt.exports;
vr.exports;
const Ga = (...e) => {
  console.log(...e);
};
var Wf = br, qf = bf, zf = Et, Kf = "[object Object]", Yf = Function.prototype, Hf = Object.prototype, Ba = Yf.toString, Vf = Hf.hasOwnProperty, Jf = Ba.call(Object);
function Xf(e) {
  if (!zf(e) || Wf(e) != Kf)
    return !1;
  var r = qf(e);
  if (r === null)
    return !0;
  var n = Vf.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && Ba.call(n) == Jf;
}
var Zf = Xf;
const Qf = (...e) => {
  Ga("\x1B[31m%s\x1B[0m", ...e);
}, In = (...e) => {
  Ga("\x1B[36m%s\x1B[0m", ...e);
}, _t = (e, r = "") => {
  const n = [], a = Object.entries(e), o = a.length;
  let s = 0;
  for (; s < o; ) {
    const f = a[s][0], u = a[s][1], l = r ? [r, f].join(".") : f;
    n.push(l), u && Zf(u) && n.push(..._t(u, l)), s++;
  }
  return n;
};
var ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, el = Array.isArray, B = el, rl = B;
function tl() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return rl(e) ? e : [e];
}
var nl = tl, al = typeof ur == "object" && ur && ur.Object === Object && ur, Wa = al, il = Wa, ol = typeof self == "object" && self && self.Object === Object && self, sl = il || ol || Function("return this")(), Y = sl, ul = Y, cl = ul.Symbol, $r = cl, Dn = $r, qa = Object.prototype, fl = qa.hasOwnProperty, ll = qa.toString, tr = Dn ? Dn.toStringTag : void 0;
function vl(e) {
  var r = fl.call(e, tr), n = e[tr];
  try {
    e[tr] = void 0;
    var a = !0;
  } catch {
  }
  var o = ll.call(e);
  return a && (r ? e[tr] = n : delete e[tr]), o;
}
var pl = vl, dl = Object.prototype, yl = dl.toString;
function hl(e) {
  return yl.call(e);
}
var gl = hl, Mn = $r, _l = pl, bl = gl, $l = "[object Null]", Ol = "[object Undefined]", Fn = Mn ? Mn.toStringTag : void 0;
function ml(e) {
  return e == null ? e === void 0 ? Ol : $l : Fn && Fn in Object(e) ? _l(e) : bl(e);
}
var je = ml;
function wl(e) {
  return e != null && typeof e == "object";
}
var ve = wl, Tl = je, jl = ve, Pl = "[object Symbol]";
function Sl(e) {
  return typeof e == "symbol" || jl(e) && Tl(e) == Pl;
}
var Ct = Sl, Al = B, El = Ct, Cl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xl = /^\w*$/;
function Rl(e, r) {
  if (Al(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || El(e) ? !0 : xl.test(e) || !Cl.test(e) || r != null && e in Object(r);
}
var xt = Rl;
function Il(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var ee = Il, Dl = je, Ml = ee, Fl = "[object AsyncFunction]", Ll = "[object Function]", kl = "[object GeneratorFunction]", Nl = "[object Proxy]";
function Ul(e) {
  if (!Ml(e))
    return !1;
  var r = Dl(e);
  return r == Ll || r == kl || r == Fl || r == Nl;
}
var Rt = Ul, Gl = Y, Bl = Gl["__core-js_shared__"], Wl = Bl, Xr = Wl, Ln = function() {
  var e = /[^.]+$/.exec(Xr && Xr.keys && Xr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ql(e) {
  return !!Ln && Ln in e;
}
var zl = ql, Kl = Function.prototype, Yl = Kl.toString;
function Hl(e) {
  if (e != null) {
    try {
      return Yl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var za = Hl, Vl = Rt, Jl = zl, Xl = ee, Zl = za, Ql = /[\\^$.*+?()[\]{}|]/g, ev = /^\[object .+?Constructor\]$/, rv = Function.prototype, tv = Object.prototype, nv = rv.toString, av = tv.hasOwnProperty, iv = RegExp(
  "^" + nv.call(av).replace(Ql, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ov(e) {
  if (!Xl(e) || Jl(e))
    return !1;
  var r = Vl(e) ? iv : ev;
  return r.test(Zl(e));
}
var sv = ov;
function uv(e, r) {
  return e == null ? void 0 : e[r];
}
var cv = uv, fv = sv, lv = cv;
function vv(e, r) {
  var n = lv(e, r);
  return fv(n) ? n : void 0;
}
var pe = vv, pv = pe, dv = pv(Object, "create"), Or = dv, kn = Or;
function yv() {
  this.__data__ = kn ? kn(null) : {}, this.size = 0;
}
var hv = yv;
function gv(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var _v = gv, bv = Or, $v = "__lodash_hash_undefined__", Ov = Object.prototype, mv = Ov.hasOwnProperty;
function wv(e) {
  var r = this.__data__;
  if (bv) {
    var n = r[e];
    return n === $v ? void 0 : n;
  }
  return mv.call(r, e) ? r[e] : void 0;
}
var Tv = wv, jv = Or, Pv = Object.prototype, Sv = Pv.hasOwnProperty;
function Av(e) {
  var r = this.__data__;
  return jv ? r[e] !== void 0 : Sv.call(r, e);
}
var Ev = Av, Cv = Or, xv = "__lodash_hash_undefined__";
function Rv(e, r) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Cv && r === void 0 ? xv : r, this;
}
var Iv = Rv, Dv = hv, Mv = _v, Fv = Tv, Lv = Ev, kv = Iv;
function Pe(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
Pe.prototype.clear = Dv;
Pe.prototype.delete = Mv;
Pe.prototype.get = Fv;
Pe.prototype.has = Lv;
Pe.prototype.set = kv;
var Nv = Pe;
function Uv() {
  this.__data__ = [], this.size = 0;
}
var Gv = Uv;
function Bv(e, r) {
  return e === r || e !== e && r !== r;
}
var ir = Bv, Wv = ir;
function qv(e, r) {
  for (var n = e.length; n--; )
    if (Wv(e[n][0], r))
      return n;
  return -1;
}
var mr = qv, zv = mr, Kv = Array.prototype, Yv = Kv.splice;
function Hv(e) {
  var r = this.__data__, n = zv(r, e);
  if (n < 0)
    return !1;
  var a = r.length - 1;
  return n == a ? r.pop() : Yv.call(r, n, 1), --this.size, !0;
}
var Vv = Hv, Jv = mr;
function Xv(e) {
  var r = this.__data__, n = Jv(r, e);
  return n < 0 ? void 0 : r[n][1];
}
var Zv = Xv, Qv = mr;
function ep(e) {
  return Qv(this.__data__, e) > -1;
}
var rp = ep, tp = mr;
function np(e, r) {
  var n = this.__data__, a = tp(n, e);
  return a < 0 ? (++this.size, n.push([e, r])) : n[a][1] = r, this;
}
var ap = np, ip = Gv, op = Vv, sp = Zv, up = rp, cp = ap;
function Se(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
Se.prototype.clear = ip;
Se.prototype.delete = op;
Se.prototype.get = sp;
Se.prototype.has = up;
Se.prototype.set = cp;
var wr = Se, fp = pe, lp = Y, vp = fp(lp, "Map"), It = vp, Nn = Nv, pp = wr, dp = It;
function yp() {
  this.size = 0, this.__data__ = {
    hash: new Nn(),
    map: new (dp || pp)(),
    string: new Nn()
  };
}
var hp = yp;
function gp(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var _p = gp, bp = _p;
function $p(e, r) {
  var n = e.__data__;
  return bp(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
var Tr = $p, Op = Tr;
function mp(e) {
  var r = Op(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var wp = mp, Tp = Tr;
function jp(e) {
  return Tp(this, e).get(e);
}
var Pp = jp, Sp = Tr;
function Ap(e) {
  return Sp(this, e).has(e);
}
var Ep = Ap, Cp = Tr;
function xp(e, r) {
  var n = Cp(this, e), a = n.size;
  return n.set(e, r), this.size += n.size == a ? 0 : 1, this;
}
var Rp = xp, Ip = hp, Dp = wp, Mp = Pp, Fp = Ep, Lp = Rp;
function Ae(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
Ae.prototype.clear = Ip;
Ae.prototype.delete = Dp;
Ae.prototype.get = Mp;
Ae.prototype.has = Fp;
Ae.prototype.set = Lp;
var Dt = Ae, Ka = Dt, kp = "Expected a function";
function Mt(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(kp);
  var n = function() {
    var a = arguments, o = r ? r.apply(this, a) : a[0], s = n.cache;
    if (s.has(o))
      return s.get(o);
    var f = e.apply(this, a);
    return n.cache = s.set(o, f) || s, f;
  };
  return n.cache = new (Mt.Cache || Ka)(), n;
}
Mt.Cache = Ka;
var Np = Mt, Up = Np, Gp = 500;
function Bp(e) {
  var r = Up(e, function(a) {
    return n.size === Gp && n.clear(), a;
  }), n = r.cache;
  return r;
}
var Wp = Bp, qp = Wp, zp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kp = /\\(\\)?/g, Yp = qp(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(zp, function(n, a, o, s) {
    r.push(o ? s.replace(Kp, "$1") : a || n);
  }), r;
}), Hp = Yp;
function Vp(e, r) {
  for (var n = -1, a = e == null ? 0 : e.length, o = Array(a); ++n < a; )
    o[n] = r(e[n], n, e);
  return o;
}
var jr = Vp, Un = $r, Jp = jr, Xp = B, Zp = Ct, Qp = 1 / 0, Gn = Un ? Un.prototype : void 0, Bn = Gn ? Gn.toString : void 0;
function Ya(e) {
  if (typeof e == "string")
    return e;
  if (Xp(e))
    return Jp(e, Ya) + "";
  if (Zp(e))
    return Bn ? Bn.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -Qp ? "-0" : r;
}
var ed = Ya, rd = ed;
function td(e) {
  return e == null ? "" : rd(e);
}
var nd = td, ad = B, id = xt, od = Hp, sd = nd;
function ud(e, r) {
  return ad(e) ? e : id(e, r) ? [e] : od(sd(e));
}
var Ha = ud, cd = Ct, fd = 1 / 0;
function ld(e) {
  if (typeof e == "string" || cd(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -fd ? "-0" : r;
}
var Pr = ld, vd = Ha, pd = Pr;
function dd(e, r) {
  r = vd(r, e);
  for (var n = 0, a = r.length; e != null && n < a; )
    e = e[pd(r[n++])];
  return n && n == a ? e : void 0;
}
var Va = dd, yd = Va;
function hd(e, r, n) {
  var a = e == null ? void 0 : yd(e, r);
  return a === void 0 ? n : a;
}
var Ja = hd, gd = "__lodash_hash_undefined__";
function _d(e) {
  return this.__data__.set(e, gd), this;
}
var bd = _d;
function $d(e) {
  return this.__data__.has(e);
}
var Od = $d, md = Dt, wd = bd, Td = Od;
function pr(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new md(); ++r < n; )
    this.add(e[r]);
}
pr.prototype.add = pr.prototype.push = wd;
pr.prototype.has = Td;
var Ft = pr;
function jd(e, r, n, a) {
  for (var o = e.length, s = n + (a ? 1 : -1); a ? s-- : ++s < o; )
    if (r(e[s], s, e))
      return s;
  return -1;
}
var Pd = jd;
function Sd(e) {
  return e !== e;
}
var Ad = Sd;
function Ed(e, r, n) {
  for (var a = n - 1, o = e.length; ++a < o; )
    if (e[a] === r)
      return a;
  return -1;
}
var Cd = Ed, xd = Pd, Rd = Ad, Id = Cd;
function Dd(e, r, n) {
  return r === r ? Id(e, r, n) : xd(e, Rd, n);
}
var Md = Dd, Fd = Md;
function Ld(e, r) {
  var n = e == null ? 0 : e.length;
  return !!n && Fd(e, r, 0) > -1;
}
var Xa = Ld;
function kd(e, r, n) {
  for (var a = -1, o = e == null ? 0 : e.length; ++a < o; )
    if (n(r, e[a]))
      return !0;
  return !1;
}
var Za = kd;
function Nd(e) {
  return function(r) {
    return e(r);
  };
}
var Qa = Nd;
function Ud(e, r) {
  return e.has(r);
}
var Lt = Ud, Gd = Ft, Bd = Xa, Wd = Za, qd = jr, zd = Qa, Wn = Lt, Kd = Math.min;
function Yd(e, r, n) {
  for (var a = n ? Wd : Bd, o = e[0].length, s = e.length, f = s, u = Array(s), l = 1 / 0, p = []; f--; ) {
    var v = e[f];
    f && r && (v = qd(v, zd(r))), l = Kd(v.length, l), u[f] = !n && (r || o >= 120 && v.length >= 120) ? new Gd(f && v) : void 0;
  }
  v = e[0];
  var g = -1, y = u[0];
  e:
    for (; ++g < o && p.length < l; ) {
      var m = v[g], j = r ? r(m) : m;
      if (m = n || m !== 0 ? m : 0, !(y ? Wn(y, j) : a(p, j, n))) {
        for (f = s; --f; ) {
          var A = u[f];
          if (!(A ? Wn(A, j) : a(e[f], j, n)))
            continue e;
        }
        y && y.push(j), p.push(m);
      }
    }
  return p;
}
var Hd = Yd;
function Vd(e) {
  return e;
}
var kt = Vd;
function Jd(e, r, n) {
  switch (n.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, n[0]);
    case 2:
      return e.call(r, n[0], n[1]);
    case 3:
      return e.call(r, n[0], n[1], n[2]);
  }
  return e.apply(r, n);
}
var Xd = Jd, Zd = Xd, qn = Math.max;
function Qd(e, r, n) {
  return r = qn(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var a = arguments, o = -1, s = qn(a.length - r, 0), f = Array(s); ++o < s; )
      f[o] = a[r + o];
    o = -1;
    for (var u = Array(r + 1); ++o < r; )
      u[o] = a[o];
    return u[r] = n(f), Zd(e, this, u);
  };
}
var ey = Qd;
function ry(e) {
  return function() {
    return e;
  };
}
var ty = ry, ny = pe, ay = function() {
  try {
    var e = ny(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), ei = ay, iy = ty, zn = ei, oy = kt, sy = zn ? function(e, r) {
  return zn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: iy(r),
    writable: !0
  });
} : oy, uy = sy, cy = 800, fy = 16, ly = Date.now;
function vy(e) {
  var r = 0, n = 0;
  return function() {
    var a = ly(), o = fy - (a - n);
    if (n = a, o > 0) {
      if (++r >= cy)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var py = vy, dy = uy, yy = py, hy = yy(dy), gy = hy, _y = kt, by = ey, $y = gy;
function Oy(e, r) {
  return $y(by(e, r, _y), e + "");
}
var ri = Oy, my = 9007199254740991;
function wy(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= my;
}
var Nt = wy, Ty = Rt, jy = Nt;
function Py(e) {
  return e != null && jy(e.length) && !Ty(e);
}
var Ee = Py, Sy = Ee, Ay = ve;
function Ey(e) {
  return Ay(e) && Sy(e);
}
var ti = Ey, Cy = ti;
function xy(e) {
  return Cy(e) ? e : [];
}
var Ry = xy, Iy = jr, Dy = Hd, My = ri, Fy = Ry, Ly = My(function(e) {
  var r = Iy(e, Fy);
  return r.length && r[0] === e[0] ? Dy(r) : [];
}), Kn = Ly, ky = wr;
function Ny() {
  this.__data__ = new ky(), this.size = 0;
}
var Uy = Ny;
function Gy(e) {
  var r = this.__data__, n = r.delete(e);
  return this.size = r.size, n;
}
var By = Gy;
function Wy(e) {
  return this.__data__.get(e);
}
var qy = Wy;
function zy(e) {
  return this.__data__.has(e);
}
var Ky = zy, Yy = wr, Hy = It, Vy = Dt, Jy = 200;
function Xy(e, r) {
  var n = this.__data__;
  if (n instanceof Yy) {
    var a = n.__data__;
    if (!Hy || a.length < Jy - 1)
      return a.push([e, r]), this.size = ++n.size, this;
    n = this.__data__ = new Vy(a);
  }
  return n.set(e, r), this.size = n.size, this;
}
var Zy = Xy, Qy = wr, eh = Uy, rh = By, th = qy, nh = Ky, ah = Zy;
function Ce(e) {
  var r = this.__data__ = new Qy(e);
  this.size = r.size;
}
Ce.prototype.clear = eh;
Ce.prototype.delete = rh;
Ce.prototype.get = th;
Ce.prototype.has = nh;
Ce.prototype.set = ah;
var Ut = Ce;
function ih(e, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(e[n], n, e))
      return !0;
  return !1;
}
var oh = ih, sh = Ft, uh = oh, ch = Lt, fh = 1, lh = 2;
function vh(e, r, n, a, o, s) {
  var f = n & fh, u = e.length, l = r.length;
  if (u != l && !(f && l > u))
    return !1;
  var p = s.get(e), v = s.get(r);
  if (p && v)
    return p == r && v == e;
  var g = -1, y = !0, m = n & lh ? new sh() : void 0;
  for (s.set(e, r), s.set(r, e); ++g < u; ) {
    var j = e[g], A = r[g];
    if (a)
      var R = f ? a(A, j, g, r, e, s) : a(j, A, g, e, r, s);
    if (R !== void 0) {
      if (R)
        continue;
      y = !1;
      break;
    }
    if (m) {
      if (!uh(r, function(F, L) {
        if (!ch(m, L) && (j === F || o(j, F, n, a, s)))
          return m.push(L);
      })) {
        y = !1;
        break;
      }
    } else if (!(j === A || o(j, A, n, a, s))) {
      y = !1;
      break;
    }
  }
  return s.delete(e), s.delete(r), y;
}
var ni = vh, ph = Y, dh = ph.Uint8Array, ai = dh;
function yh(e) {
  var r = -1, n = Array(e.size);
  return e.forEach(function(a, o) {
    n[++r] = [o, a];
  }), n;
}
var hh = yh;
function gh(e) {
  var r = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++r] = a;
  }), n;
}
var Gt = gh, Yn = $r, Hn = ai, _h = ir, bh = ni, $h = hh, Oh = Gt, mh = 1, wh = 2, Th = "[object Boolean]", jh = "[object Date]", Ph = "[object Error]", Sh = "[object Map]", Ah = "[object Number]", Eh = "[object RegExp]", Ch = "[object Set]", xh = "[object String]", Rh = "[object Symbol]", Ih = "[object ArrayBuffer]", Dh = "[object DataView]", Vn = Yn ? Yn.prototype : void 0, Zr = Vn ? Vn.valueOf : void 0;
function Mh(e, r, n, a, o, s, f) {
  switch (n) {
    case Dh:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Ih:
      return !(e.byteLength != r.byteLength || !s(new Hn(e), new Hn(r)));
    case Th:
    case jh:
    case Ah:
      return _h(+e, +r);
    case Ph:
      return e.name == r.name && e.message == r.message;
    case Eh:
    case xh:
      return e == r + "";
    case Sh:
      var u = $h;
    case Ch:
      var l = a & mh;
      if (u || (u = Oh), e.size != r.size && !l)
        return !1;
      var p = f.get(e);
      if (p)
        return p == r;
      a |= wh, f.set(e, r);
      var v = bh(u(e), u(r), a, o, s, f);
      return f.delete(e), v;
    case Rh:
      if (Zr)
        return Zr.call(e) == Zr.call(r);
  }
  return !1;
}
var Fh = Mh;
function Lh(e, r) {
  for (var n = -1, a = r.length, o = e.length; ++n < a; )
    e[o + n] = r[n];
  return e;
}
var kh = Lh, Nh = kh, Uh = B;
function Gh(e, r, n) {
  var a = r(e);
  return Uh(e) ? a : Nh(a, n(e));
}
var Bh = Gh;
function Wh(e, r) {
  for (var n = -1, a = e == null ? 0 : e.length, o = 0, s = []; ++n < a; ) {
    var f = e[n];
    r(f, n, e) && (s[o++] = f);
  }
  return s;
}
var qh = Wh;
function zh() {
  return [];
}
var Kh = zh, Yh = qh, Hh = Kh, Vh = Object.prototype, Jh = Vh.propertyIsEnumerable, Jn = Object.getOwnPropertySymbols, Xh = Jn ? function(e) {
  return e == null ? [] : (e = Object(e), Yh(Jn(e), function(r) {
    return Jh.call(e, r);
  }));
} : Hh, Zh = Xh;
function Qh(e, r) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = r(n);
  return a;
}
var eg = Qh, rg = je, tg = ve, ng = "[object Arguments]";
function ag(e) {
  return tg(e) && rg(e) == ng;
}
var ig = ag, Xn = ig, og = ve, ii = Object.prototype, sg = ii.hasOwnProperty, ug = ii.propertyIsEnumerable, cg = Xn(function() {
  return arguments;
}()) ? Xn : function(e) {
  return og(e) && sg.call(e, "callee") && !ug.call(e, "callee");
}, Bt = cg, ar = { exports: {} };
function fg() {
  return !1;
}
var lg = fg;
(function(e, r) {
  var n = Y, a = lg, o = r && !r.nodeType && r, s = o && !0 && e && !e.nodeType && e, f = s && s.exports === o, u = f ? n.Buffer : void 0, l = u ? u.isBuffer : void 0, p = l || a;
  e.exports = p;
})(ar, ar.exports);
var vg = 9007199254740991, pg = /^(?:0|[1-9]\d*)$/;
function dg(e, r) {
  var n = typeof e;
  return r = r == null ? vg : r, !!r && (n == "number" || n != "symbol" && pg.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Wt = dg, yg = je, hg = Nt, gg = ve, _g = "[object Arguments]", bg = "[object Array]", $g = "[object Boolean]", Og = "[object Date]", mg = "[object Error]", wg = "[object Function]", Tg = "[object Map]", jg = "[object Number]", Pg = "[object Object]", Sg = "[object RegExp]", Ag = "[object Set]", Eg = "[object String]", Cg = "[object WeakMap]", xg = "[object ArrayBuffer]", Rg = "[object DataView]", Ig = "[object Float32Array]", Dg = "[object Float64Array]", Mg = "[object Int8Array]", Fg = "[object Int16Array]", Lg = "[object Int32Array]", kg = "[object Uint8Array]", Ng = "[object Uint8ClampedArray]", Ug = "[object Uint16Array]", Gg = "[object Uint32Array]", E = {};
E[Ig] = E[Dg] = E[Mg] = E[Fg] = E[Lg] = E[kg] = E[Ng] = E[Ug] = E[Gg] = !0;
E[_g] = E[bg] = E[xg] = E[$g] = E[Rg] = E[Og] = E[mg] = E[wg] = E[Tg] = E[jg] = E[Pg] = E[Sg] = E[Ag] = E[Eg] = E[Cg] = !1;
function Bg(e) {
  return gg(e) && hg(e.length) && !!E[yg(e)];
}
var Wg = Bg, bt = { exports: {} };
(function(e, r) {
  var n = Wa, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, f = s && n.process, u = function() {
    try {
      var l = o && o.require && o.require("util").types;
      return l || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(bt, bt.exports);
var qg = Wg, zg = Qa, Zn = bt.exports, Qn = Zn && Zn.isTypedArray, Kg = Qn ? zg(Qn) : qg, qt = Kg, Yg = eg, Hg = Bt, Vg = B, Jg = ar.exports, Xg = Wt, Zg = qt, Qg = Object.prototype, e_ = Qg.hasOwnProperty;
function r_(e, r) {
  var n = Vg(e), a = !n && Hg(e), o = !n && !a && Jg(e), s = !n && !a && !o && Zg(e), f = n || a || o || s, u = f ? Yg(e.length, String) : [], l = u.length;
  for (var p in e)
    (r || e_.call(e, p)) && !(f && (p == "length" || o && (p == "offset" || p == "parent") || s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || Xg(p, l))) && u.push(p);
  return u;
}
var oi = r_, t_ = Object.prototype;
function n_(e) {
  var r = e && e.constructor, n = typeof r == "function" && r.prototype || t_;
  return e === n;
}
var zt = n_;
function a_(e, r) {
  return function(n) {
    return e(r(n));
  };
}
var si = a_, i_ = si, o_ = i_(Object.keys, Object), s_ = o_, u_ = zt, c_ = s_, f_ = Object.prototype, l_ = f_.hasOwnProperty;
function v_(e) {
  if (!u_(e))
    return c_(e);
  var r = [];
  for (var n in Object(e))
    l_.call(e, n) && n != "constructor" && r.push(n);
  return r;
}
var p_ = v_, d_ = oi, y_ = p_, h_ = Ee;
function g_(e) {
  return h_(e) ? d_(e) : y_(e);
}
var Kt = g_, __ = Bh, b_ = Zh, $_ = Kt;
function O_(e) {
  return __(e, $_, b_);
}
var m_ = O_, ea = m_, w_ = 1, T_ = Object.prototype, j_ = T_.hasOwnProperty;
function P_(e, r, n, a, o, s) {
  var f = n & w_, u = ea(e), l = u.length, p = ea(r), v = p.length;
  if (l != v && !f)
    return !1;
  for (var g = l; g--; ) {
    var y = u[g];
    if (!(f ? y in r : j_.call(r, y)))
      return !1;
  }
  var m = s.get(e), j = s.get(r);
  if (m && j)
    return m == r && j == e;
  var A = !0;
  s.set(e, r), s.set(r, e);
  for (var R = f; ++g < l; ) {
    y = u[g];
    var F = e[y], L = r[y];
    if (a)
      var O = f ? a(L, F, y, r, e, s) : a(F, L, y, e, r, s);
    if (!(O === void 0 ? F === L || o(F, L, n, a, s) : O)) {
      A = !1;
      break;
    }
    R || (R = y == "constructor");
  }
  if (A && !R) {
    var k = e.constructor, C = r.constructor;
    k != C && "constructor" in e && "constructor" in r && !(typeof k == "function" && k instanceof k && typeof C == "function" && C instanceof C) && (A = !1);
  }
  return s.delete(e), s.delete(r), A;
}
var S_ = P_, A_ = pe, E_ = Y, C_ = A_(E_, "DataView"), x_ = C_, R_ = pe, I_ = Y, D_ = R_(I_, "Promise"), M_ = D_, F_ = pe, L_ = Y, k_ = F_(L_, "Set"), ui = k_, N_ = pe, U_ = Y, G_ = N_(U_, "WeakMap"), B_ = G_, $t = x_, Ot = It, mt = M_, wt = ui, Tt = B_, ci = je, xe = za, ra = "[object Map]", W_ = "[object Object]", ta = "[object Promise]", na = "[object Set]", aa = "[object WeakMap]", ia = "[object DataView]", q_ = xe($t), z_ = xe(Ot), K_ = xe(mt), Y_ = xe(wt), H_ = xe(Tt), fe = ci;
($t && fe(new $t(new ArrayBuffer(1))) != ia || Ot && fe(new Ot()) != ra || mt && fe(mt.resolve()) != ta || wt && fe(new wt()) != na || Tt && fe(new Tt()) != aa) && (fe = function(e) {
  var r = ci(e), n = r == W_ ? e.constructor : void 0, a = n ? xe(n) : "";
  if (a)
    switch (a) {
      case q_:
        return ia;
      case z_:
        return ra;
      case K_:
        return ta;
      case Y_:
        return na;
      case H_:
        return aa;
    }
  return r;
});
var V_ = fe, Qr = Ut, J_ = ni, X_ = Fh, Z_ = S_, oa = V_, sa = B, ua = ar.exports, Q_ = qt, eb = 1, ca = "[object Arguments]", fa = "[object Array]", cr = "[object Object]", rb = Object.prototype, la = rb.hasOwnProperty;
function tb(e, r, n, a, o, s) {
  var f = sa(e), u = sa(r), l = f ? fa : oa(e), p = u ? fa : oa(r);
  l = l == ca ? cr : l, p = p == ca ? cr : p;
  var v = l == cr, g = p == cr, y = l == p;
  if (y && ua(e)) {
    if (!ua(r))
      return !1;
    f = !0, v = !1;
  }
  if (y && !v)
    return s || (s = new Qr()), f || Q_(e) ? J_(e, r, n, a, o, s) : X_(e, r, l, n, a, o, s);
  if (!(n & eb)) {
    var m = v && la.call(e, "__wrapped__"), j = g && la.call(r, "__wrapped__");
    if (m || j) {
      var A = m ? e.value() : e, R = j ? r.value() : r;
      return s || (s = new Qr()), o(A, R, n, a, s);
    }
  }
  return y ? (s || (s = new Qr()), Z_(e, r, n, a, o, s)) : !1;
}
var nb = tb, ab = nb, va = ve;
function fi(e, r, n, a, o) {
  return e === r ? !0 : e == null || r == null || !va(e) && !va(r) ? e !== e && r !== r : ab(e, r, n, a, fi, o);
}
var li = fi, ib = Ut, ob = li, sb = 1, ub = 2;
function cb(e, r, n, a) {
  var o = n.length, s = o, f = !a;
  if (e == null)
    return !s;
  for (e = Object(e); o--; ) {
    var u = n[o];
    if (f && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++o < s; ) {
    u = n[o];
    var l = u[0], p = e[l], v = u[1];
    if (f && u[2]) {
      if (p === void 0 && !(l in e))
        return !1;
    } else {
      var g = new ib();
      if (a)
        var y = a(p, v, l, e, r, g);
      if (!(y === void 0 ? ob(v, p, sb | ub, a, g) : y))
        return !1;
    }
  }
  return !0;
}
var fb = cb, lb = ee;
function vb(e) {
  return e === e && !lb(e);
}
var vi = vb, pb = vi, db = Kt;
function yb(e) {
  for (var r = db(e), n = r.length; n--; ) {
    var a = r[n], o = e[a];
    r[n] = [a, o, pb(o)];
  }
  return r;
}
var hb = yb;
function gb(e, r) {
  return function(n) {
    return n == null ? !1 : n[e] === r && (r !== void 0 || e in Object(n));
  };
}
var pi = gb, _b = fb, bb = hb, $b = pi;
function Ob(e) {
  var r = bb(e);
  return r.length == 1 && r[0][2] ? $b(r[0][0], r[0][1]) : function(n) {
    return n === e || _b(n, e, r);
  };
}
var mb = Ob;
function wb(e, r) {
  return e != null && r in Object(e);
}
var Tb = wb, jb = Ha, Pb = Bt, Sb = B, Ab = Wt, Eb = Nt, Cb = Pr;
function xb(e, r, n) {
  r = jb(r, e);
  for (var a = -1, o = r.length, s = !1; ++a < o; ) {
    var f = Cb(r[a]);
    if (!(s = e != null && n(e, f)))
      break;
    e = e[f];
  }
  return s || ++a != o ? s : (o = e == null ? 0 : e.length, !!o && Eb(o) && Ab(f, o) && (Sb(e) || Pb(e)));
}
var Rb = xb, Ib = Tb, Db = Rb;
function Mb(e, r) {
  return e != null && Db(e, r, Ib);
}
var Fb = Mb, Lb = li, kb = Ja, Nb = Fb, Ub = xt, Gb = vi, Bb = pi, Wb = Pr, qb = 1, zb = 2;
function Kb(e, r) {
  return Ub(e) && Gb(r) ? Bb(Wb(e), r) : function(n) {
    var a = kb(n, e);
    return a === void 0 && a === r ? Nb(n, e) : Lb(r, a, qb | zb);
  };
}
var Yb = Kb;
function Hb(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var Vb = Hb, Jb = Va;
function Xb(e) {
  return function(r) {
    return Jb(r, e);
  };
}
var Zb = Xb, Qb = Vb, e$ = Zb, r$ = xt, t$ = Pr;
function n$(e) {
  return r$(e) ? Qb(t$(e)) : e$(e);
}
var a$ = n$, i$ = mb, o$ = Yb, s$ = kt, u$ = B, c$ = a$;
function f$(e) {
  return typeof e == "function" ? e : e == null ? s$ : typeof e == "object" ? u$(e) ? o$(e[0], e[1]) : i$(e) : c$(e);
}
var di = f$;
function l$(e) {
  return function(r, n, a) {
    for (var o = -1, s = Object(r), f = a(r), u = f.length; u--; ) {
      var l = f[e ? u : ++o];
      if (n(s[l], l, s) === !1)
        break;
    }
    return r;
  };
}
var v$ = l$, p$ = v$, d$ = p$(), yi = d$, y$ = yi, h$ = Kt;
function g$(e, r) {
  return e && y$(e, r, h$);
}
var _$ = g$, b$ = Ee;
function $$(e, r) {
  return function(n, a) {
    if (n == null)
      return n;
    if (!b$(n))
      return e(n, a);
    for (var o = n.length, s = r ? o : -1, f = Object(n); (r ? s-- : ++s < o) && a(f[s], s, f) !== !1; )
      ;
    return n;
  };
}
var O$ = $$, m$ = _$, w$ = O$, T$ = w$(m$), hi = T$, j$ = hi, P$ = Ee;
function S$(e, r) {
  var n = -1, a = P$(e) ? Array(e.length) : [];
  return j$(e, function(o, s, f) {
    a[++n] = r(o, s, f);
  }), a;
}
var A$ = S$, E$ = jr, C$ = di, x$ = A$, R$ = B;
function I$(e, r) {
  var n = R$(e) ? E$ : x$;
  return n(e, C$(r));
}
var D$ = I$, pa = ei;
function M$(e, r, n) {
  r == "__proto__" && pa ? pa(e, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[r] = n;
}
var Yt = M$, F$ = Yt, L$ = ir;
function k$(e, r, n) {
  (n !== void 0 && !L$(e[r], n) || n === void 0 && !(r in e)) && F$(e, r, n);
}
var gi = k$, jt = { exports: {} };
(function(e, r) {
  var n = Y, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, f = s ? n.Buffer : void 0, u = f ? f.allocUnsafe : void 0;
  function l(p, v) {
    if (v)
      return p.slice();
    var g = p.length, y = u ? u(g) : new p.constructor(g);
    return p.copy(y), y;
  }
  e.exports = l;
})(jt, jt.exports);
var da = ai;
function N$(e) {
  var r = new e.constructor(e.byteLength);
  return new da(r).set(new da(e)), r;
}
var U$ = N$, G$ = U$;
function B$(e, r) {
  var n = r ? G$(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var W$ = B$;
function q$(e, r) {
  var n = -1, a = e.length;
  for (r || (r = Array(a)); ++n < a; )
    r[n] = e[n];
  return r;
}
var z$ = q$, K$ = ee, ya = Object.create, Y$ = function() {
  function e() {
  }
  return function(r) {
    if (!K$(r))
      return {};
    if (ya)
      return ya(r);
    e.prototype = r;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), H$ = Y$, V$ = si, J$ = V$(Object.getPrototypeOf, Object), _i = J$, X$ = H$, Z$ = _i, Q$ = zt;
function e1(e) {
  return typeof e.constructor == "function" && !Q$(e) ? X$(Z$(e)) : {};
}
var r1 = e1, t1 = je, n1 = _i, a1 = ve, i1 = "[object Object]", o1 = Function.prototype, s1 = Object.prototype, bi = o1.toString, u1 = s1.hasOwnProperty, c1 = bi.call(Object);
function f1(e) {
  if (!a1(e) || t1(e) != i1)
    return !1;
  var r = n1(e);
  if (r === null)
    return !0;
  var n = u1.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && bi.call(n) == c1;
}
var l1 = f1;
function v1(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var $i = v1, p1 = Yt, d1 = ir, y1 = Object.prototype, h1 = y1.hasOwnProperty;
function g1(e, r, n) {
  var a = e[r];
  (!(h1.call(e, r) && d1(a, n)) || n === void 0 && !(r in e)) && p1(e, r, n);
}
var _1 = g1, b1 = _1, $1 = Yt;
function O1(e, r, n, a) {
  var o = !n;
  n || (n = {});
  for (var s = -1, f = r.length; ++s < f; ) {
    var u = r[s], l = a ? a(n[u], e[u], u, n, e) : void 0;
    l === void 0 && (l = e[u]), o ? $1(n, u, l) : b1(n, u, l);
  }
  return n;
}
var m1 = O1;
function w1(e) {
  var r = [];
  if (e != null)
    for (var n in Object(e))
      r.push(n);
  return r;
}
var T1 = w1, j1 = ee, P1 = zt, S1 = T1, A1 = Object.prototype, E1 = A1.hasOwnProperty;
function C1(e) {
  if (!j1(e))
    return S1(e);
  var r = P1(e), n = [];
  for (var a in e)
    a == "constructor" && (r || !E1.call(e, a)) || n.push(a);
  return n;
}
var x1 = C1, R1 = oi, I1 = x1, D1 = Ee;
function M1(e) {
  return D1(e) ? R1(e, !0) : I1(e);
}
var Oi = M1, F1 = m1, L1 = Oi;
function k1(e) {
  return F1(e, L1(e));
}
var N1 = k1, ha = gi, U1 = jt.exports, G1 = W$, B1 = z$, W1 = r1, ga = Bt, _a = B, q1 = ti, z1 = ar.exports, K1 = Rt, Y1 = ee, H1 = l1, V1 = qt, ba = $i, J1 = N1;
function X1(e, r, n, a, o, s, f) {
  var u = ba(e, n), l = ba(r, n), p = f.get(l);
  if (p) {
    ha(e, n, p);
    return;
  }
  var v = s ? s(u, l, n + "", e, r, f) : void 0, g = v === void 0;
  if (g) {
    var y = _a(l), m = !y && z1(l), j = !y && !m && V1(l);
    v = l, y || m || j ? _a(u) ? v = u : q1(u) ? v = B1(u) : m ? (g = !1, v = U1(l, !0)) : j ? (g = !1, v = G1(l, !0)) : v = [] : H1(l) || ga(l) ? (v = u, ga(u) ? v = J1(u) : (!Y1(u) || K1(u)) && (v = W1(l))) : g = !1;
  }
  g && (f.set(l, v), o(v, l, a, s, f), f.delete(l)), ha(e, n, v);
}
var Z1 = X1, Q1 = Ut, eO = gi, rO = yi, tO = Z1, nO = ee, aO = Oi, iO = $i;
function mi(e, r, n, a, o) {
  e !== r && rO(r, function(s, f) {
    if (o || (o = new Q1()), nO(s))
      tO(e, r, f, n, mi, a, o);
    else {
      var u = a ? a(iO(e, f), s, f + "", e, r, o) : void 0;
      u === void 0 && (u = s), eO(e, f, u);
    }
  }, aO);
}
var oO = mi, sO = ir, uO = Ee, cO = Wt, fO = ee;
function lO(e, r, n) {
  if (!fO(n))
    return !1;
  var a = typeof r;
  return (a == "number" ? uO(n) && cO(r, n.length) : a == "string" && r in n) ? sO(n[r], e) : !1;
}
var vO = lO, pO = ri, dO = vO;
function yO(e) {
  return pO(function(r, n) {
    var a = -1, o = n.length, s = o > 1 ? n[o - 1] : void 0, f = o > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0, f && dO(n[0], n[1], f) && (s = o < 3 ? void 0 : s, o = 1), r = Object(r); ++a < o; ) {
      var u = n[a];
      u && e(r, u, a, s);
    }
    return r;
  });
}
var hO = yO, gO = oO, _O = hO, bO = _O(function(e, r, n) {
  gO(e, r, n);
}), fr = bO;
function $O(e, r, n, a) {
  var o = -1, s = e == null ? 0 : e.length;
  for (a && s && (n = e[++o]); ++o < s; )
    n = r(n, e[o], o, e);
  return n;
}
var OO = $O;
function mO(e, r, n, a, o) {
  return o(e, function(s, f, u) {
    n = a ? (a = !1, s) : r(n, s, f, u);
  }), n;
}
var wO = mO, TO = OO, jO = hi, PO = di, SO = wO, AO = B;
function EO(e, r, n) {
  var a = AO(e) ? TO : SO, o = arguments.length < 3;
  return a(e, PO(r), n, o, jO);
}
var CO = EO;
function xO() {
}
var RO = xO, et = ui, IO = RO, DO = Gt, MO = 1 / 0, FO = et && 1 / DO(new et([, -0]))[1] == MO ? function(e) {
  return new et(e);
} : IO, LO = FO, kO = Ft, NO = Xa, UO = Za, GO = Lt, BO = LO, WO = Gt, qO = 200;
function zO(e, r, n) {
  var a = -1, o = NO, s = e.length, f = !0, u = [], l = u;
  if (n)
    f = !1, o = UO;
  else if (s >= qO) {
    var p = r ? null : BO(e);
    if (p)
      return WO(p);
    f = !1, o = GO, l = new kO();
  } else
    l = r ? [] : u;
  e:
    for (; ++a < s; ) {
      var v = e[a], g = r ? r(v) : v;
      if (v = n || v !== 0 ? v : 0, f && g === g) {
        for (var y = l.length; y--; )
          if (l[y] === g)
            continue e;
        r && l.push(g), u.push(v);
      } else
        o(l, g, n) || (l !== u && l.push(g), u.push(v));
    }
  return u;
}
var KO = zO, YO = KO;
function HO(e) {
  return e && e.length ? YO(e) : [];
}
var VO = HO, wi = { exports: {} }, _e = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rt, $a;
function Ti() {
  if ($a)
    return rt;
  $a = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function a(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var f = {}, u = 0; u < 10; u++)
        f["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(f).map(function(v) {
        return f[v];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        p[v] = v;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return rt = o() ? Object.assign : function(s, f) {
    for (var u, l = a(s), p, v = 1; v < arguments.length; v++) {
      u = Object(arguments[v]);
      for (var g in u)
        r.call(u, g) && (l[g] = u[g]);
      if (e) {
        p = e(u);
        for (var y = 0; y < p.length; y++)
          n.call(u, p[y]) && (l[p[y]] = u[p[y]]);
      }
    }
    return l;
  }, rt;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oa;
function JO() {
  if (Oa)
    return _e;
  Oa = 1, Ti();
  var e = dr, r = 60103;
  if (_e.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var n = Symbol.for;
    r = n("react.element"), _e.Fragment = n("react.fragment");
  }
  var a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = Object.prototype.hasOwnProperty, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(u, l, p) {
    var v, g = {}, y = null, m = null;
    p !== void 0 && (y = "" + p), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (v in l)
      o.call(l, v) && !s.hasOwnProperty(v) && (g[v] = l[v]);
    if (u && u.defaultProps)
      for (v in l = u.defaultProps, l)
        g[v] === void 0 && (g[v] = l[v]);
    return { $$typeof: r, type: u, key: y, ref: m, props: g, _owner: a.current };
  }
  return _e.jsx = f, _e.jsxs = f, _e;
}
var tt = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function XO() {
  return ma || (ma = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var r = dr, n = Ti(), a = 60103, o = 60106;
      e.Fragment = 60107;
      var s = 60108, f = 60114, u = 60109, l = 60110, p = 60112, v = 60113, g = 60120, y = 60115, m = 60116, j = 60121, A = 60122, R = 60117, F = 60129, L = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        a = O("react.element"), o = O("react.portal"), e.Fragment = O("react.fragment"), s = O("react.strict_mode"), f = O("react.profiler"), u = O("react.provider"), l = O("react.context"), p = O("react.forward_ref"), v = O("react.suspense"), g = O("react.suspense_list"), y = O("react.memo"), m = O("react.lazy"), j = O("react.block"), A = O("react.server.block"), R = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), F = O("react.debug_trace_mode"), O("react.offscreen"), L = O("react.legacy_hidden");
      }
      var k = typeof Symbol == "function" && Symbol.iterator, C = "@@iterator";
      function G(t) {
        if (t === null || typeof t != "object")
          return null;
        var i = k && t[k] || t[C];
        return typeof i == "function" ? i : null;
      }
      var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function P(t) {
        {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
            c[d - 1] = arguments[d];
          re("error", t, c);
        }
      }
      function re(t, i, c) {
        {
          var d = I.ReactDebugCurrentFrame, b = d.getStackAddendum();
          b !== "" && (i += "%s", c = c.concat([b]));
          var $ = c.map(function(_) {
            return "" + _;
          });
          $.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, $);
        }
      }
      var Q = !1;
      function de(t) {
        return !!(typeof t == "string" || typeof t == "function" || t === e.Fragment || t === f || t === F || t === s || t === v || t === g || t === L || Q || typeof t == "object" && t !== null && (t.$$typeof === m || t.$$typeof === y || t.$$typeof === u || t.$$typeof === l || t.$$typeof === p || t.$$typeof === R || t.$$typeof === j || t[0] === A));
      }
      function W(t, i, c) {
        var d = i.displayName || i.name || "";
        return t.displayName || (d !== "" ? c + "(" + d + ")" : c);
      }
      function Re(t) {
        return t.displayName || "Context";
      }
      function x(t) {
        if (t == null)
          return null;
        if (typeof t.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
        switch (t) {
          case e.Fragment:
            return "Fragment";
          case o:
            return "Portal";
          case f:
            return "Profiler";
          case s:
            return "StrictMode";
          case v:
            return "Suspense";
          case g:
            return "SuspenseList";
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case l:
              var i = t;
              return Re(i) + ".Consumer";
            case u:
              var c = t;
              return Re(c._context) + ".Provider";
            case p:
              return W(t, t.render, "ForwardRef");
            case y:
              return x(t.type);
            case j:
              return x(t._render);
            case m: {
              var d = t, b = d._payload, $ = d._init;
              try {
                return x($(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var q = 0, Ie, De, Me, Fe, Le, ke, Ne;
      function Ue() {
      }
      Ue.__reactDisabledLog = !0;
      function Sr() {
        {
          if (q === 0) {
            Ie = console.log, De = console.info, Me = console.warn, Fe = console.error, Le = console.group, ke = console.groupCollapsed, Ne = console.groupEnd;
            var t = {
              configurable: !0,
              enumerable: !0,
              value: Ue,
              writable: !0
            };
            Object.defineProperties(console, {
              info: t,
              log: t,
              warn: t,
              error: t,
              group: t,
              groupCollapsed: t,
              groupEnd: t
            });
          }
          q++;
        }
      }
      function Ar() {
        {
          if (q--, q === 0) {
            var t = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: n({}, t, {
                value: Ie
              }),
              info: n({}, t, {
                value: De
              }),
              warn: n({}, t, {
                value: Me
              }),
              error: n({}, t, {
                value: Fe
              }),
              group: n({}, t, {
                value: Le
              }),
              groupCollapsed: n({}, t, {
                value: ke
              }),
              groupEnd: n({}, t, {
                value: Ne
              })
            });
          }
          q < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var te = I.ReactCurrentDispatcher, ne;
      function H(t, i, c) {
        {
          if (ne === void 0)
            try {
              throw Error();
            } catch (b) {
              var d = b.stack.trim().match(/\n( *(at )?)/);
              ne = d && d[1] || "";
            }
          return `
` + ne + t;
        }
      }
      var ae = !1, V;
      {
        var Er = typeof WeakMap == "function" ? WeakMap : Map;
        V = new Er();
      }
      function Ge(t, i) {
        if (!t || ae)
          return "";
        {
          var c = V.get(t);
          if (c !== void 0)
            return c;
        }
        var d;
        ae = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var $;
        $ = te.current, te.current = null, Sr();
        try {
          if (i) {
            var _ = function() {
              throw Error();
            };
            if (Object.defineProperty(_.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(_, []);
              } catch (M) {
                d = M;
              }
              Reflect.construct(t, [], _);
            } else {
              try {
                _.call();
              } catch (M) {
                d = M;
              }
              t.call(_.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (M) {
              d = M;
            }
            t();
          }
        } catch (M) {
          if (M && d && typeof M.stack == "string") {
            for (var h = M.stack.split(`
`), S = d.stack.split(`
`), w = h.length - 1, T = S.length - 1; w >= 1 && T >= 0 && h[w] !== S[T]; )
              T--;
            for (; w >= 1 && T >= 0; w--, T--)
              if (h[w] !== S[T]) {
                if (w !== 1 || T !== 1)
                  do
                    if (w--, T--, T < 0 || h[w] !== S[T]) {
                      var D = `
` + h[w].replace(" at new ", " at ");
                      return typeof t == "function" && V.set(t, D), D;
                    }
                  while (w >= 1 && T >= 0);
                break;
              }
          }
        } finally {
          ae = !1, te.current = $, Ar(), Error.prepareStackTrace = b;
        }
        var U = t ? t.displayName || t.name : "", Qe = U ? H(U) : "";
        return typeof t == "function" && V.set(t, Qe), Qe;
      }
      function Be(t, i, c) {
        return Ge(t, !1);
      }
      function Cr(t) {
        var i = t.prototype;
        return !!(i && i.isReactComponent);
      }
      function J(t, i, c) {
        if (t == null)
          return "";
        if (typeof t == "function")
          return Ge(t, Cr(t));
        if (typeof t == "string")
          return H(t);
        switch (t) {
          case v:
            return H("Suspense");
          case g:
            return H("SuspenseList");
        }
        if (typeof t == "object")
          switch (t.$$typeof) {
            case p:
              return Be(t.render);
            case y:
              return J(t.type, i, c);
            case j:
              return Be(t._render);
            case m: {
              var d = t, b = d._payload, $ = d._init;
              try {
                return J($(b), i, c);
              } catch {
              }
            }
          }
        return "";
      }
      var We = {}, qe = I.ReactDebugCurrentFrame;
      function X(t) {
        if (t) {
          var i = t._owner, c = J(t.type, t._source, i ? i.type : null);
          qe.setExtraStackFrame(c);
        } else
          qe.setExtraStackFrame(null);
      }
      function xr(t, i, c, d, b) {
        {
          var $ = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var _ in t)
            if ($(t, _)) {
              var h = void 0;
              try {
                if (typeof t[_] != "function") {
                  var S = Error((d || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw S.name = "Invariant Violation", S;
                }
                h = t[_](i, _, d, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (w) {
                h = w;
              }
              h && !(h instanceof Error) && (X(b), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", c, _, typeof h), X(null)), h instanceof Error && !(h.message in We) && (We[h.message] = !0, X(b), P("Failed %s type: %s", c, h.message), X(null));
            }
        }
      }
      var z = I.ReactCurrentOwner, ie = Object.prototype.hasOwnProperty, Rr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ze, Ke, oe;
      oe = {};
      function Ir(t) {
        if (ie.call(t, "ref")) {
          var i = Object.getOwnPropertyDescriptor(t, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.ref !== void 0;
      }
      function Dr(t) {
        if (ie.call(t, "key")) {
          var i = Object.getOwnPropertyDescriptor(t, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return t.key !== void 0;
      }
      function Mr(t, i) {
        if (typeof t.ref == "string" && z.current && i && z.current.stateNode !== i) {
          var c = x(z.current.type);
          oe[c] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(z.current.type), t.ref), oe[c] = !0);
        }
      }
      function Fr(t, i) {
        {
          var c = function() {
            ze || (ze = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          c.isReactWarning = !0, Object.defineProperty(t, "key", {
            get: c,
            configurable: !0
          });
        }
      }
      function Lr(t, i) {
        {
          var c = function() {
            Ke || (Ke = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          c.isReactWarning = !0, Object.defineProperty(t, "ref", {
            get: c,
            configurable: !0
          });
        }
      }
      var kr = function(t, i, c, d, b, $, _) {
        var h = {
          $$typeof: a,
          type: t,
          key: i,
          ref: c,
          props: _,
          _owner: $
        };
        return h._store = {}, Object.defineProperty(h._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(h, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function Nr(t, i, c, d, b) {
        {
          var $, _ = {}, h = null, S = null;
          c !== void 0 && (h = "" + c), Dr(i) && (h = "" + i.key), Ir(i) && (S = i.ref, Mr(i, b));
          for ($ in i)
            ie.call(i, $) && !Rr.hasOwnProperty($) && (_[$] = i[$]);
          if (t && t.defaultProps) {
            var w = t.defaultProps;
            for ($ in w)
              _[$] === void 0 && (_[$] = w[$]);
          }
          if (h || S) {
            var T = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
            h && Fr(_, T), S && Lr(_, T);
          }
          return kr(t, h, S, b, d, z.current, _);
        }
      }
      var se = I.ReactCurrentOwner, Ye = I.ReactDebugCurrentFrame;
      function N(t) {
        if (t) {
          var i = t._owner, c = J(t.type, t._source, i ? i.type : null);
          Ye.setExtraStackFrame(c);
        } else
          Ye.setExtraStackFrame(null);
      }
      var ue;
      ue = !1;
      function ce(t) {
        return typeof t == "object" && t !== null && t.$$typeof === a;
      }
      function He() {
        {
          if (se.current) {
            var t = x(se.current.type);
            if (t)
              return `

Check the render method of \`` + t + "`.";
          }
          return "";
        }
      }
      function Ur(t) {
        {
          if (t !== void 0) {
            var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
            return `

Check your code at ` + i + ":" + c + ".";
          }
          return "";
        }
      }
      var Ve = {};
      function Gr(t) {
        {
          var i = He();
          if (!i) {
            var c = typeof t == "string" ? t : t.displayName || t.name;
            c && (i = `

Check the top-level render call using <` + c + ">.");
          }
          return i;
        }
      }
      function Je(t, i) {
        {
          if (!t._store || t._store.validated || t.key != null)
            return;
          t._store.validated = !0;
          var c = Gr(i);
          if (Ve[c])
            return;
          Ve[c] = !0;
          var d = "";
          t && t._owner && t._owner !== se.current && (d = " It was passed a child from " + x(t._owner.type) + "."), N(t), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, d), N(null);
        }
      }
      function Xe(t, i) {
        {
          if (typeof t != "object")
            return;
          if (Array.isArray(t))
            for (var c = 0; c < t.length; c++) {
              var d = t[c];
              ce(d) && Je(d, i);
            }
          else if (ce(t))
            t._store && (t._store.validated = !0);
          else if (t) {
            var b = G(t);
            if (typeof b == "function" && b !== t.entries)
              for (var $ = b.call(t), _; !(_ = $.next()).done; )
                ce(_.value) && Je(_.value, i);
          }
        }
      }
      function Br(t) {
        {
          var i = t.type;
          if (i == null || typeof i == "string")
            return;
          var c;
          if (typeof i == "function")
            c = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === p || i.$$typeof === y))
            c = i.propTypes;
          else
            return;
          if (c) {
            var d = x(i);
            xr(c, t.props, "prop", d, t);
          } else if (i.PropTypes !== void 0 && !ue) {
            ue = !0;
            var b = x(i);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Wr(t) {
        {
          for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
            var d = i[c];
            if (d !== "children" && d !== "key") {
              N(t), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), N(null);
              break;
            }
          }
          t.ref !== null && (N(t), P("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
        }
      }
      function Ze(t, i, c, d, b, $) {
        {
          var _ = de(t);
          if (!_) {
            var h = "";
            (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var S = Ur(b);
            S ? h += S : h += He();
            var w;
            t === null ? w = "null" : Array.isArray(t) ? w = "array" : t !== void 0 && t.$$typeof === a ? (w = "<" + (x(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : w = typeof t, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, h);
          }
          var T = Nr(t, i, c, b, $);
          if (T == null)
            return T;
          if (_) {
            var D = i.children;
            if (D !== void 0)
              if (d)
                if (Array.isArray(D)) {
                  for (var U = 0; U < D.length; U++)
                    Xe(D[U], t);
                  Object.freeze && Object.freeze(D);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Xe(D, t);
          }
          return t === e.Fragment ? Wr(T) : Br(T), T;
        }
      }
      function qr(t, i, c) {
        return Ze(t, i, c, !0);
      }
      function zr(t, i, c) {
        return Ze(t, i, c, !1);
      }
      var Kr = zr, Yr = qr;
      e.jsx = Kr, e.jsxs = Yr;
    }();
  }(tt)), tt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = JO() : e.exports = XO();
})(wi);
const wa = wi.exports.jsx, ZO = {
  commitSagaOnError: !1,
  ignoreSagaError: !1,
  log: !1,
  throwSagaError: !0
}, em = (e, r) => {
  const n = Pi({
    state: e,
    setState: () => e
  }), a = {
    ...ZO,
    ...r
  };
  return [() => {
    const u = Vt(n);
    if (u === void 0)
      throw new Error("Couldn't find a context object. Is your component inside StateProvider?");
    return u;
  }, (u) => {
    const {
      state: l,
      defaultState: p,
      onChange: v,
      onRef: g,
      children: y
    } = u, m = at(v), j = at(g);
    m.current = v, j.current = g;
    const A = nt((C, G) => {
      const I = fr({}, C, G);
      let P = fr({}, I), re = _t(G || {});
      return D$(a.sagas, (Q) => {
        const de = nl(Q.keys);
        if (Kn(re, de).length)
          try {
            const W = Q.saga(P);
            a.log && (!a.logFilters || Kn(a.logFilters, de)) && In("state:saga:run", {
              keys: Q.keys,
              sagaState: W
            }), W !== null && (P = fr(P, W), re = VO([...re, ..._t(W)]));
          } catch (W) {
            if (a.log && Qf("state:saga:error", Q.keys, {
              error: W
            }), a.throwSagaError)
              throw W;
            if (!a.ignoreSagaError)
              return a.commitSagaOnError ? P : I;
          }
      }), a.log && In("state:update", {
        prevState: C,
        updatedState: G,
        newState: P
      }), P;
    }, []), [R, F] = Ju(() => {
      const C = fr({}, e, p);
      return A(C, C);
    }), L = nt((C) => {
      F((G) => {
        if (typeof C == "function") {
          const I = C(G);
          return I === null ? G : A(G, I);
        } else
          return A(G, C);
      });
    }, [F, A]), O = l || R, k = Ht(() => ({
      state: O,
      setState: L
    }), [L, O]);
    return it(() => {
      var C;
      (C = m.current) == null || C.call(m, R);
    }, [R]), it(() => {
      var C;
      (C = j.current) == null || C.call(j, k);
    }, [k]), /* @__PURE__ */ wa(n.Provider, {
      value: k,
      children: y
    });
  }, (u) => (l) => {
    const p = Si(l), v = (g) => {
      const y = Vt(n), m = Ht(() => ({
        ...CO(u, (j, A, R) => (j[R] = Ja(y.state, A, void 0), j), {}),
        setState: y.setState
      }), [y]);
      return /* @__PURE__ */ wa(p, {
        ...g,
        ...m
      });
    };
    return v.displayName = Ku(l), v;
  }];
};
export {
  em as createStateContext
};
