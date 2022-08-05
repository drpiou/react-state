import Q, { createContext as Po, useRef as Eo, useCallback as Qt, useEffect as Co, useContext as Ao, useMemo as jo } from "react";
var fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xo = typeof fr == "object" && fr && fr.Object === Object && fr, Pa = xo, Ro = Pa, Io = typeof self == "object" && self && self.Object === Object && self, Fo = Ro || Io || Function("return this")(), X = Fo, Do = X, Mo = Do.Symbol, _r = Mo, en = _r, Ea = Object.prototype, Lo = Ea.hasOwnProperty, ko = Ea.toString, Ze = en ? en.toStringTag : void 0;
function No(e) {
  var r = Lo.call(e, Ze), n = e[Ze];
  try {
    e[Ze] = void 0;
    var a = !0;
  } catch {
  }
  var i = ko.call(e);
  return a && (r ? e[Ze] = n : delete e[Ze]), i;
}
var Uo = No, Go = Object.prototype, Bo = Go.toString;
function Wo(e) {
  return Bo.call(e);
}
var Ko = Wo, rn = _r, qo = Uo, zo = Ko, Ho = "[object Null]", Yo = "[object Undefined]", tn = rn ? rn.toStringTag : void 0;
function Vo(e) {
  return e == null ? e === void 0 ? Yo : Ho : tn && tn in Object(e) ? qo(e) : zo(e);
}
var xt = Vo;
function Jo(e) {
  return e != null && typeof e == "object";
}
var Ca = Jo, Xo = Function.prototype, Zo = Xo.toString;
Zo.call(Object);
var Qo = xt, ei = Ca, ri = "[object Arguments]";
function ti(e) {
  return ei(e) && Qo(e) == ri;
}
var ni = ti, nn = ni, ai = Ca, Aa = Object.prototype, oi = Aa.hasOwnProperty, ii = Aa.propertyIsEnumerable;
nn(function() {
  return arguments;
}());
var dr = { exports: {} };
function si() {
  return !1;
}
var ui = si;
(function(e, r) {
  var n = X, a = ui, i = r && !r.nodeType && r, s = i && !0 && e && !e.nodeType && e, f = s && s.exports === i, c = f ? n.Buffer : void 0, l = c ? c.isBuffer : void 0, y = l || a;
  e.exports = y;
})(dr, dr.exports);
var lt = { exports: {} };
(function(e, r) {
  var n = Pa, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, f = s && n.process, c = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(lt, lt.exports);
var an = lt.exports;
an && an.isTypedArray;
dr.exports;
function ci(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var ja = ci, fi = xt, li = ja, vi = "[object AsyncFunction]", pi = "[object Function]", yi = "[object GeneratorFunction]", di = "[object Proxy]";
function gi(e) {
  if (!li(e))
    return !1;
  var r = fi(e);
  return r == pi || r == yi || r == vi || r == di;
}
var hi = gi;
function _i() {
  this.__data__ = [], this.size = 0;
}
var bi = _i;
function $i(e, r) {
  return e === r || e !== e && r !== r;
}
var mi = $i, Oi = mi;
function Si(e, r) {
  for (var n = e.length; n--; )
    if (Oi(e[n][0], r))
      return n;
  return -1;
}
var br = Si, wi = br, Ti = Array.prototype, Pi = Ti.splice;
function Ei(e) {
  var r = this.__data__, n = wi(r, e);
  if (n < 0)
    return !1;
  var a = r.length - 1;
  return n == a ? r.pop() : Pi.call(r, n, 1), --this.size, !0;
}
var Ci = Ei, Ai = br;
function ji(e) {
  var r = this.__data__, n = Ai(r, e);
  return n < 0 ? void 0 : r[n][1];
}
var xi = ji, Ri = br;
function Ii(e) {
  return Ri(this.__data__, e) > -1;
}
var Fi = Ii, Di = br;
function Mi(e, r) {
  var n = this.__data__, a = Di(n, e);
  return a < 0 ? (++this.size, n.push([e, r])) : n[a][1] = r, this;
}
var Li = Mi, ki = bi, Ni = Ci, Ui = xi, Gi = Fi, Bi = Li;
function de(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
de.prototype.clear = ki;
de.prototype.delete = Ni;
de.prototype.get = Ui;
de.prototype.has = Gi;
de.prototype.set = Bi;
var Wi = de, Ki = X, qi = Ki["__core-js_shared__"], zi = qi, ot = zi, on = function() {
  var e = /[^.]+$/.exec(ot && ot.keys && ot.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Hi(e) {
  return !!on && on in e;
}
var Yi = Hi, Vi = Function.prototype, Ji = Vi.toString;
function Xi(e) {
  if (e != null) {
    try {
      return Ji.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xa = Xi, Zi = hi, Qi = Yi, es = ja, rs = xa, ts = /[\\^$.*+?()[\]{}|]/g, ns = /^\[object .+?Constructor\]$/, as = Function.prototype, os = Object.prototype, is = as.toString, ss = os.hasOwnProperty, us = RegExp(
  "^" + is.call(ss).replace(ts, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cs(e) {
  if (!es(e) || Qi(e))
    return !1;
  var r = Zi(e) ? us : ns;
  return r.test(rs(e));
}
var fs = cs;
function ls(e, r) {
  return e == null ? void 0 : e[r];
}
var vs = ls, ps = fs, ys = vs;
function ds(e, r) {
  var n = ys(e, r);
  return ps(n) ? n : void 0;
}
var ge = ds, gs = ge, hs = X, _s = gs(hs, "Map"), Ra = _s, bs = ge, $s = bs(Object, "create"), $r = $s, sn = $r;
function ms() {
  this.__data__ = sn ? sn(null) : {}, this.size = 0;
}
var Os = ms;
function Ss(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var ws = Ss, Ts = $r, Ps = "__lodash_hash_undefined__", Es = Object.prototype, Cs = Es.hasOwnProperty;
function As(e) {
  var r = this.__data__;
  if (Ts) {
    var n = r[e];
    return n === Ps ? void 0 : n;
  }
  return Cs.call(r, e) ? r[e] : void 0;
}
var js = As, xs = $r, Rs = Object.prototype, Is = Rs.hasOwnProperty;
function Fs(e) {
  var r = this.__data__;
  return xs ? r[e] !== void 0 : Is.call(r, e);
}
var Ds = Fs, Ms = $r, Ls = "__lodash_hash_undefined__";
function ks(e, r) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ms && r === void 0 ? Ls : r, this;
}
var Ns = ks, Us = Os, Gs = ws, Bs = js, Ws = Ds, Ks = Ns;
function he(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
he.prototype.clear = Us;
he.prototype.delete = Gs;
he.prototype.get = Bs;
he.prototype.has = Ws;
he.prototype.set = Ks;
var qs = he, un = qs, zs = Wi, Hs = Ra;
function Ys() {
  this.size = 0, this.__data__ = {
    hash: new un(),
    map: new (Hs || zs)(),
    string: new un()
  };
}
var Vs = Ys;
function Js(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Xs = Js, Zs = Xs;
function Qs(e, r) {
  var n = e.__data__;
  return Zs(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
var mr = Qs, eu = mr;
function ru(e) {
  var r = eu(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var tu = ru, nu = mr;
function au(e) {
  return nu(this, e).get(e);
}
var ou = au, iu = mr;
function su(e) {
  return iu(this, e).has(e);
}
var uu = su, cu = mr;
function fu(e, r) {
  var n = cu(this, e), a = n.size;
  return n.set(e, r), this.size += n.size == a ? 0 : 1, this;
}
var lu = fu, vu = Vs, pu = tu, yu = ou, du = uu, gu = lu;
function _e(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
_e.prototype.clear = vu;
_e.prototype.delete = pu;
_e.prototype.get = yu;
_e.prototype.has = du;
_e.prototype.set = gu;
var hu = _e, _u = X;
_u.Uint8Array;
var cn = _r, fn = cn ? cn.prototype : void 0;
fn && fn.valueOf;
var bu = ge, $u = X, mu = bu($u, "DataView"), Ou = mu, Su = ge, wu = X, Tu = Su(wu, "Promise"), Pu = Tu, Eu = ge, Cu = X, Au = Eu(Cu, "Set"), ju = Au, xu = ge, Ru = X, Iu = xu(Ru, "WeakMap"), Fu = Iu, vt = Ou, pt = Ra, yt = Pu, dt = ju, gt = Fu, Ia = xt, be = xa, ln = "[object Map]", Du = "[object Object]", vn = "[object Promise]", pn = "[object Set]", yn = "[object WeakMap]", dn = "[object DataView]", Mu = be(vt), Lu = be(pt), ku = be(yt), Nu = be(dt), Uu = be(gt), pe = Ia;
(vt && pe(new vt(new ArrayBuffer(1))) != dn || pt && pe(new pt()) != ln || yt && pe(yt.resolve()) != vn || dt && pe(new dt()) != pn || gt && pe(new gt()) != yn) && (pe = function(e) {
  var r = Ia(e), n = r == Du ? e.constructor : void 0, a = n ? be(n) : "";
  if (a)
    switch (a) {
      case Mu:
        return dn;
      case Lu:
        return ln;
      case ku:
        return vn;
      case Nu:
        return pn;
      case Uu:
        return yn;
    }
  return r;
});
dr.exports;
var Fa = hu, Gu = "Expected a function";
function Rt(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Gu);
  var n = function() {
    var a = arguments, i = r ? r.apply(this, a) : a[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var f = e.apply(this, a);
    return n.cache = s.set(i, f) || s, f;
  };
  return n.cache = new (Rt.Cache || Fa)(), n;
}
Rt.Cache = Fa;
var Bu = Rt, Wu = Bu, Ku = 500;
function qu(e) {
  var r = Wu(e, function(a) {
    return n.size === Ku && n.clear(), a;
  }), n = r.cache;
  return r;
}
var zu = qu, Hu = zu, Yu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vu = /\\(\\)?/g;
Hu(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Yu, function(n, a, i, s) {
    r.push(i ? s.replace(Vu, "$1") : a || n);
  }), r;
});
var gn = _r, hn = gn ? gn.prototype : void 0;
hn && hn.toString;
var Da = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Ju() {
  if (_n)
    return Qe;
  _n = 1;
  var e = Q, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, l, y) {
    var p, _ = {}, b = null, w = null;
    y !== void 0 && (b = "" + y), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (p in l)
      a.call(l, p) && !s.hasOwnProperty(p) && (_[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        _[p] === void 0 && (_[p] = l[p]);
    return { $$typeof: r, type: c, key: b, ref: w, props: _, _owner: i.current };
  }
  return Qe.Fragment = n, Qe.jsx = f, Qe.jsxs = f, Qe;
}
var lr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function Xu() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), P = Symbol.iterator, x = "@@iterator";
    function C(t) {
      if (t === null || typeof t != "object")
        return null;
      var o = P && t[P] || t[x];
      return typeof o == "function" ? o : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(t) {
      {
        for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), v = 1; v < o; v++)
          u[v - 1] = arguments[v];
        D("error", t, u);
      }
    }
    function D(t, o, u) {
      {
        var v = E.ReactDebugCurrentFrame, h = v.getStackAddendum();
        h !== "" && (o += "%s", u = u.concat([h]));
        var $ = u.map(function(g) {
          return String(g);
        });
        $.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, $);
      }
    }
    var N = !1, M = !1, ve = !1, G = !1, xr = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function Rr(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === s || xr || t === i || t === y || t === p || G || t === w || N || M || ve || typeof t == "object" && t !== null && (t.$$typeof === b || t.$$typeof === _ || t.$$typeof === f || t.$$typeof === c || t.$$typeof === l || t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Ir(t, o, u) {
      var v = t.displayName;
      if (v)
        return v;
      var h = o.displayName || o.name || "";
      return h !== "" ? u + "(" + h + ")" : u;
    }
    function Ae(t) {
      return t.displayName || "Context";
    }
    function R(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case y:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var o = t;
            return Ae(o) + ".Consumer";
          case f:
            var u = t;
            return Ae(u._context) + ".Provider";
          case l:
            return Ir(t, t.render, "ForwardRef");
          case _:
            var v = t.displayName || null;
            return v !== null ? v : R(t.type) || "Memo";
          case b: {
            var h = t, $ = h._payload, g = h._init;
            try {
              return R(g($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, B = 0, je, xe, Re, Ie, Fe, De, Me;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Fr() {
      {
        if (B === 0) {
          je = console.log, xe = console.info, Re = console.warn, Ie = console.error, Fe = console.group, De = console.groupCollapsed, Me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Le,
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
        B++;
      }
    }
    function Dr() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, t, {
              value: je
            }),
            info: F({}, t, {
              value: xe
            }),
            warn: F({}, t, {
              value: Re
            }),
            error: F({}, t, {
              value: Ie
            }),
            group: F({}, t, {
              value: Fe
            }),
            groupCollapsed: F({}, t, {
              value: De
            }),
            groupEnd: F({}, t, {
              value: Me
            })
          });
        }
        B < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = E.ReactCurrentDispatcher, re;
    function z(t, o, u) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (h) {
            var v = h.stack.trim().match(/\n( *(at )?)/);
            re = v && v[1] || "";
          }
        return `
` + re + t;
      }
    }
    var te = !1, H;
    {
      var Mr = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Mr();
    }
    function ke(t, o) {
      if (!t || te)
        return "";
      {
        var u = H.get(t);
        if (u !== void 0)
          return u;
      }
      var v;
      te = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = ee.current, ee.current = null, Fr();
      try {
        if (o) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (I) {
              v = I;
            }
            Reflect.construct(t, [], g);
          } else {
            try {
              g.call();
            } catch (I) {
              v = I;
            }
            t.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            v = I;
          }
          t();
        }
      } catch (I) {
        if (I && v && typeof I.stack == "string") {
          for (var d = I.stack.split(`
`), T = v.stack.split(`
`), O = d.length - 1, S = T.length - 1; O >= 1 && S >= 0 && d[O] !== T[S]; )
            S--;
          for (; O >= 1 && S >= 0; O--, S--)
            if (d[O] !== T[S]) {
              if (O !== 1 || S !== 1)
                do
                  if (O--, S--, S < 0 || d[O] !== T[S]) {
                    var A = `
` + d[O].replace(" at new ", " at ");
                    return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), typeof t == "function" && H.set(t, A), A;
                  }
                while (O >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = $, Dr(), Error.prepareStackTrace = h;
      }
      var k = t ? t.displayName || t.name : "", Xe = k ? z(k) : "";
      return typeof t == "function" && H.set(t, Xe), Xe;
    }
    function Lr(t, o, u) {
      return ke(t, !1);
    }
    function kr(t) {
      var o = t.prototype;
      return !!(o && o.isReactComponent);
    }
    function Y(t, o, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ke(t, kr(t));
      if (typeof t == "string")
        return z(t);
      switch (t) {
        case y:
          return z("Suspense");
        case p:
          return z("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Lr(t.render);
          case _:
            return Y(t.type, o, u);
          case b: {
            var v = t, h = v._payload, $ = v._init;
            try {
              return Y($(h), o, u);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Ne = {}, Ue = E.ReactDebugCurrentFrame;
    function J(t) {
      if (t) {
        var o = t._owner, u = Y(t.type, t._source, o ? o.type : null);
        Ue.setExtraStackFrame(u);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Nr(t, o, u, v, h) {
      {
        var $ = Function.call.bind(V);
        for (var g in t)
          if ($(t, g)) {
            var d = void 0;
            try {
              if (typeof t[g] != "function") {
                var T = Error((v || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              d = t[g](o, g, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              d = O;
            }
            d && !(d instanceof Error) && (J(h), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, g, typeof d), J(null)), d instanceof Error && !(d.message in Ne) && (Ne[d.message] = !0, J(h), m("Failed %s type: %s", u, d.message), J(null));
          }
      }
    }
    var Ur = Array.isArray;
    function ne(t) {
      return Ur(t);
    }
    function Gr(t) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function Br(t) {
      try {
        return Ge(t), !1;
      } catch {
        return !0;
      }
    }
    function Ge(t) {
      return "" + t;
    }
    function Be(t) {
      if (Br(t))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gr(t)), Ge(t);
    }
    var W = E.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ke, ae;
    ae = {};
    function Kr(t) {
      if (V.call(t, "ref")) {
        var o = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function qr(t) {
      if (V.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function zr(t, o) {
      if (typeof t.ref == "string" && W.current && o && W.current.stateNode !== o) {
        var u = R(W.current.type);
        ae[u] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(W.current.type), t.ref), ae[u] = !0);
      }
    }
    function Hr(t, o) {
      {
        var u = function() {
          We || (We = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Yr(t, o) {
      {
        var u = function() {
          Ke || (Ke = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Vr = function(t, o, u, v, h, $, g) {
      var d = {
        $$typeof: r,
        type: t,
        key: o,
        ref: u,
        props: g,
        _owner: $
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function Jr(t, o, u, v, h) {
      {
        var $, g = {}, d = null, T = null;
        u !== void 0 && (Be(u), d = "" + u), qr(o) && (Be(o.key), d = "" + o.key), Kr(o) && (T = o.ref, zr(o, h));
        for ($ in o)
          V.call(o, $) && !Wr.hasOwnProperty($) && (g[$] = o[$]);
        if (t && t.defaultProps) {
          var O = t.defaultProps;
          for ($ in O)
            g[$] === void 0 && (g[$] = O[$]);
        }
        if (d || T) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          d && Hr(g, S), T && Yr(g, S);
        }
        return Vr(t, d, T, h, v, W.current, g);
      }
    }
    var oe = E.ReactCurrentOwner, qe = E.ReactDebugCurrentFrame;
    function L(t) {
      if (t) {
        var o = t._owner, u = Y(t.type, t._source, o ? o.type : null);
        qe.setExtraStackFrame(u);
      } else
        qe.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function ze() {
      {
        if (oe.current) {
          var t = R(oe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Xr(t) {
      {
        if (t !== void 0) {
          var o = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + o + ":" + u + ".";
        }
        return "";
      }
    }
    var He = {};
    function Zr(t) {
      {
        var o = ze();
        if (!o) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (o = `

Check the top-level render call using <` + u + ">.");
        }
        return o;
      }
    }
    function Ye(t, o) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = Zr(o);
        if (He[u])
          return;
        He[u] = !0;
        var v = "";
        t && t._owner && t._owner !== oe.current && (v = " It was passed a child from " + R(t._owner.type) + "."), L(t), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), L(null);
      }
    }
    function Ve(t, o) {
      {
        if (typeof t != "object")
          return;
        if (ne(t))
          for (var u = 0; u < t.length; u++) {
            var v = t[u];
            se(v) && Ye(v, o);
          }
        else if (se(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var h = C(t);
          if (typeof h == "function" && h !== t.entries)
            for (var $ = h.call(t), g; !(g = $.next()).done; )
              se(g.value) && Ye(g.value, o);
        }
      }
    }
    function Qr(t) {
      {
        var o = t.type;
        if (o == null || typeof o == "string")
          return;
        var u;
        if (typeof o == "function")
          u = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === l || o.$$typeof === _))
          u = o.propTypes;
        else
          return;
        if (u) {
          var v = R(o);
          Nr(u, t.props, "prop", v, t);
        } else if (o.PropTypes !== void 0 && !ie) {
          ie = !0;
          var h = R(o);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(t) {
      {
        for (var o = Object.keys(t.props), u = 0; u < o.length; u++) {
          var v = o[u];
          if (v !== "children" && v !== "key") {
            L(t), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), L(null);
            break;
          }
        }
        t.ref !== null && (L(t), m("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Je(t, o, u, v, h, $) {
      {
        var g = Rr(t);
        if (!g) {
          var d = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = Xr(h);
          T ? d += T : d += ze();
          var O;
          t === null ? O = "null" : ne(t) ? O = "array" : t !== void 0 && t.$$typeof === r ? (O = "<" + (R(t.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : O = typeof t, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, d);
        }
        var S = Jr(t, o, u, h, $);
        if (S == null)
          return S;
        if (g) {
          var A = o.children;
          if (A !== void 0)
            if (v)
              if (ne(A)) {
                for (var k = 0; k < A.length; k++)
                  Ve(A[k], t);
                Object.freeze && Object.freeze(A);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(A, t);
        }
        return t === a ? et(S) : Qr(S), S;
      }
    }
    function rt(t, o, u) {
      return Je(t, o, u, !0);
    }
    function tt(t, o, u) {
      return Je(t, o, u, !1);
    }
    var nt = tt, at = rt;
    lr.Fragment = a, lr.jsx = nt, lr.jsxs = at;
  }()), lr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ju() : e.exports = Xu();
})(Da);
Da.exports.jsx;
const Zu = () => {
  const e = Q.useRef(!1);
  return Q.useEffect(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}, Qu = (e) => {
  const r = Zu(), [n, a] = Q.useState(e), i = Q.useCallback(
    (s) => {
      r.current && a(s);
    },
    [r]
  );
  return [n, i];
};
var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ec = typeof vr == "object" && vr && vr.Object === Object && vr, Ma = ec, rc = Ma, tc = typeof self == "object" && self && self.Object === Object && self, nc = rc || tc || Function("return this")(), K = nc, ac = K, oc = ac.Symbol, It = oc, $n = It, La = Object.prototype, ic = La.hasOwnProperty, sc = La.toString, er = $n ? $n.toStringTag : void 0;
function uc(e) {
  var r = ic.call(e, er), n = e[er];
  try {
    e[er] = void 0;
    var a = !0;
  } catch {
  }
  var i = sc.call(e);
  return a && (r ? e[er] = n : delete e[er]), i;
}
var cc = uc, fc = Object.prototype, lc = fc.toString;
function vc(e) {
  return lc.call(e);
}
var pc = vc, mn = It, yc = cc, dc = pc, gc = "[object Null]", hc = "[object Undefined]", On = mn ? mn.toStringTag : void 0;
function _c(e) {
  return e == null ? e === void 0 ? hc : gc : On && On in Object(e) ? yc(e) : dc(e);
}
var Or = _c;
function bc(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var ka = bc, $c = Or, mc = ka, Oc = "[object AsyncFunction]", Sc = "[object Function]", wc = "[object GeneratorFunction]", Tc = "[object Proxy]";
function Pc(e) {
  if (!mc(e))
    return !1;
  var r = $c(e);
  return r == Sc || r == wc || r == Oc || r == Tc;
}
var Ec = Pc, Cc = K, Ac = Cc["__core-js_shared__"], jc = Ac, it = jc, Sn = function() {
  var e = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xc(e) {
  return !!Sn && Sn in e;
}
var Rc = xc, Ic = Function.prototype, Fc = Ic.toString;
function Dc(e) {
  if (e != null) {
    try {
      return Fc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Na = Dc, Mc = Ec, Lc = Rc, kc = ka, Nc = Na, Uc = /[\\^$.*+?()[\]{}|]/g, Gc = /^\[object .+?Constructor\]$/, Bc = Function.prototype, Wc = Object.prototype, Kc = Bc.toString, qc = Wc.hasOwnProperty, zc = RegExp(
  "^" + Kc.call(qc).replace(Uc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hc(e) {
  if (!kc(e) || Lc(e))
    return !1;
  var r = Mc(e) ? zc : Gc;
  return r.test(Nc(e));
}
var Yc = Hc;
function Vc(e, r) {
  return e == null ? void 0 : e[r];
}
var Jc = Vc, Xc = Yc, Zc = Jc;
function Qc(e, r) {
  var n = Zc(e, r);
  return Xc(n) ? n : void 0;
}
var ce = Qc, ef = ce, rf = K, tf = ef(rf, "Map"), nf = tf, af = ce;
af(Object, "create");
var of = ce;
(function() {
  try {
    var e = of(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function sf(e) {
  return e != null && typeof e == "object";
}
var Ft = sf, uf = Or, cf = Ft, ff = "[object Arguments]";
function lf(e) {
  return cf(e) && uf(e) == ff;
}
var vf = lf, wn = vf, pf = Ft, Ua = Object.prototype, yf = Ua.hasOwnProperty, df = Ua.propertyIsEnumerable;
wn(function() {
  return arguments;
}());
var gr = { exports: {} };
function gf() {
  return !1;
}
var hf = gf;
(function(e, r) {
  var n = K, a = hf, i = r && !r.nodeType && r, s = i && !0 && e && !e.nodeType && e, f = s && s.exports === i, c = f ? n.Buffer : void 0, l = c ? c.isBuffer : void 0, y = l || a;
  e.exports = y;
})(gr, gr.exports);
var or = { exports: {} };
(function(e, r) {
  var n = Ma, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, f = s && n.process, c = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(or, or.exports);
var Tn = or.exports;
Tn && Tn.isTypedArray;
gr.exports;
function _f(e, r) {
  return function(n) {
    return e(r(n));
  };
}
var bf = _f, ht = { exports: {} };
(function(e, r) {
  var n = K, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, f = s ? n.Buffer : void 0, c = f ? f.allocUnsafe : void 0;
  function l(y, p) {
    if (p)
      return y.slice();
    var _ = y.length, b = c ? c(_) : new y.constructor(_);
    return y.copy(b), b;
  }
  e.exports = l;
})(ht, ht.exports);
var $f = bf, mf = $f(Object.getPrototypeOf, Object), Of = mf, Sf = ce, wf = K, Tf = Sf(wf, "DataView"), Pf = Tf, Ef = ce, Cf = K, Af = Ef(Cf, "Promise"), jf = Af, xf = ce, Rf = K, If = xf(Rf, "Set"), Ff = If, Df = ce, Mf = K, Lf = Df(Mf, "WeakMap"), kf = Lf, _t = Pf, bt = nf, $t = jf, mt = Ff, Ot = kf, Ga = Or, $e = Na, Pn = "[object Map]", Nf = "[object Object]", En = "[object Promise]", Cn = "[object Set]", An = "[object WeakMap]", jn = "[object DataView]", Uf = $e(_t), Gf = $e(bt), Bf = $e($t), Wf = $e(mt), Kf = $e(Ot), ye = Ga;
(_t && ye(new _t(new ArrayBuffer(1))) != jn || bt && ye(new bt()) != Pn || $t && ye($t.resolve()) != En || mt && ye(new mt()) != Cn || Ot && ye(new Ot()) != An) && (ye = function(e) {
  var r = Ga(e), n = r == Nf ? e.constructor : void 0, a = n ? $e(n) : "";
  if (a)
    switch (a) {
      case Uf:
        return jn;
      case Gf:
        return Pn;
      case Bf:
        return En;
      case Wf:
        return Cn;
      case Kf:
        return An;
    }
  return r;
});
var qf = K;
qf.Uint8Array;
var xn = It, Rn = xn ? xn.prototype : void 0;
Rn && Rn.valueOf;
var In = or.exports;
In && In.isMap;
var Fn = or.exports;
Fn && Fn.isSet;
ht.exports;
gr.exports;
const Dt = (...e) => {
  console.log(...e);
};
var zf = Or, Hf = Of, Yf = Ft, Vf = "[object Object]", Jf = Function.prototype, Xf = Object.prototype, Ba = Jf.toString, Zf = Xf.hasOwnProperty, Qf = Ba.call(Object);
function el(e) {
  if (!Yf(e) || zf(e) != Vf)
    return !1;
  var r = Hf(e);
  if (r === null)
    return !0;
  var n = Zf.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && Ba.call(n) == Qf;
}
var rl = el;
const tl = (...e) => {
  Dt("\x1B[31m%s\x1B[0m", ...e);
}, nl = (...e) => {
  Dt("\x1B[36m%s\x1B[0m", ...e);
}, St = (e, r = "") => {
  const n = [], a = Object.entries(e), i = a.length;
  let s = 0;
  for (; s < i; ) {
    const f = a[s][0], c = a[s][1], l = r ? [r, f].join(".") : f;
    n.push(l), c && rl(c) && n.push(...St(c, l)), s++;
  }
  return n;
};
var pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, al = Array.isArray, U = al, ol = U;
function il() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return ol(e) ? e : [e];
}
var sl = il;
function ul(e, r) {
  for (var n = -1, a = e == null ? 0 : e.length, i = Array(a); ++n < a; )
    i[n] = r(e[n], n, e);
  return i;
}
var Sr = ul, cl = typeof pr == "object" && pr && pr.Object === Object && pr, Wa = cl, fl = Wa, ll = typeof self == "object" && self && self.Object === Object && self, vl = fl || ll || Function("return this")(), q = vl, pl = q, yl = pl.Symbol, sr = yl, Dn = sr, Ka = Object.prototype, dl = Ka.hasOwnProperty, gl = Ka.toString, rr = Dn ? Dn.toStringTag : void 0;
function hl(e) {
  var r = dl.call(e, rr), n = e[rr];
  try {
    e[rr] = void 0;
    var a = !0;
  } catch {
  }
  var i = gl.call(e);
  return a && (r ? e[rr] = n : delete e[rr]), i;
}
var _l = hl, bl = Object.prototype, $l = bl.toString;
function ml(e) {
  return $l.call(e);
}
var Ol = ml, Mn = sr, Sl = _l, wl = Ol, Tl = "[object Null]", Pl = "[object Undefined]", Ln = Mn ? Mn.toStringTag : void 0;
function El(e) {
  return e == null ? e === void 0 ? Pl : Tl : Ln && Ln in Object(e) ? Sl(e) : wl(e);
}
var me = El;
function Cl(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Z = Cl, Al = me, jl = Z, xl = "[object AsyncFunction]", Rl = "[object Function]", Il = "[object GeneratorFunction]", Fl = "[object Proxy]";
function Dl(e) {
  if (!jl(e))
    return !1;
  var r = Al(e);
  return r == Rl || r == Il || r == xl || r == Fl;
}
var Mt = Dl, Ml = q, Ll = Ml["__core-js_shared__"], kl = Ll, st = kl, kn = function() {
  var e = /[^.]+$/.exec(st && st.keys && st.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nl(e) {
  return !!kn && kn in e;
}
var Ul = Nl, Gl = Function.prototype, Bl = Gl.toString;
function Wl(e) {
  if (e != null) {
    try {
      return Bl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var qa = Wl, Kl = Mt, ql = Ul, zl = Z, Hl = qa, Yl = /[\\^$.*+?()[\]{}|]/g, Vl = /^\[object .+?Constructor\]$/, Jl = Function.prototype, Xl = Object.prototype, Zl = Jl.toString, Ql = Xl.hasOwnProperty, ev = RegExp(
  "^" + Zl.call(Ql).replace(Yl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rv(e) {
  if (!zl(e) || ql(e))
    return !1;
  var r = Kl(e) ? ev : Vl;
  return r.test(Hl(e));
}
var tv = rv;
function nv(e, r) {
  return e == null ? void 0 : e[r];
}
var av = nv, ov = tv, iv = av;
function sv(e, r) {
  var n = iv(e, r);
  return ov(n) ? n : void 0;
}
var fe = sv, uv = fe, cv = uv(Object, "create"), wr = cv, Nn = wr;
function fv() {
  this.__data__ = Nn ? Nn(null) : {}, this.size = 0;
}
var lv = fv;
function vv(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var pv = vv, yv = wr, dv = "__lodash_hash_undefined__", gv = Object.prototype, hv = gv.hasOwnProperty;
function _v(e) {
  var r = this.__data__;
  if (yv) {
    var n = r[e];
    return n === dv ? void 0 : n;
  }
  return hv.call(r, e) ? r[e] : void 0;
}
var bv = _v, $v = wr, mv = Object.prototype, Ov = mv.hasOwnProperty;
function Sv(e) {
  var r = this.__data__;
  return $v ? r[e] !== void 0 : Ov.call(r, e);
}
var wv = Sv, Tv = wr, Pv = "__lodash_hash_undefined__";
function Ev(e, r) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Tv && r === void 0 ? Pv : r, this;
}
var Cv = Ev, Av = lv, jv = pv, xv = bv, Rv = wv, Iv = Cv;
function Oe(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
Oe.prototype.clear = Av;
Oe.prototype.delete = jv;
Oe.prototype.get = xv;
Oe.prototype.has = Rv;
Oe.prototype.set = Iv;
var Fv = Oe;
function Dv() {
  this.__data__ = [], this.size = 0;
}
var Mv = Dv;
function Lv(e, r) {
  return e === r || e !== e && r !== r;
}
var ur = Lv, kv = ur;
function Nv(e, r) {
  for (var n = e.length; n--; )
    if (kv(e[n][0], r))
      return n;
  return -1;
}
var Tr = Nv, Uv = Tr, Gv = Array.prototype, Bv = Gv.splice;
function Wv(e) {
  var r = this.__data__, n = Uv(r, e);
  if (n < 0)
    return !1;
  var a = r.length - 1;
  return n == a ? r.pop() : Bv.call(r, n, 1), --this.size, !0;
}
var Kv = Wv, qv = Tr;
function zv(e) {
  var r = this.__data__, n = qv(r, e);
  return n < 0 ? void 0 : r[n][1];
}
var Hv = zv, Yv = Tr;
function Vv(e) {
  return Yv(this.__data__, e) > -1;
}
var Jv = Vv, Xv = Tr;
function Zv(e, r) {
  var n = this.__data__, a = Xv(n, e);
  return a < 0 ? (++this.size, n.push([e, r])) : n[a][1] = r, this;
}
var Qv = Zv, ep = Mv, rp = Kv, tp = Hv, np = Jv, ap = Qv;
function Se(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
Se.prototype.clear = ep;
Se.prototype.delete = rp;
Se.prototype.get = tp;
Se.prototype.has = np;
Se.prototype.set = ap;
var Pr = Se, op = fe, ip = q, sp = op(ip, "Map"), Lt = sp, Un = Fv, up = Pr, cp = Lt;
function fp() {
  this.size = 0, this.__data__ = {
    hash: new Un(),
    map: new (cp || up)(),
    string: new Un()
  };
}
var lp = fp;
function vp(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var pp = vp, yp = pp;
function dp(e, r) {
  var n = e.__data__;
  return yp(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
var Er = dp, gp = Er;
function hp(e) {
  var r = gp(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var _p = hp, bp = Er;
function $p(e) {
  return bp(this, e).get(e);
}
var mp = $p, Op = Er;
function Sp(e) {
  return Op(this, e).has(e);
}
var wp = Sp, Tp = Er;
function Pp(e, r) {
  var n = Tp(this, e), a = n.size;
  return n.set(e, r), this.size += n.size == a ? 0 : 1, this;
}
var Ep = Pp, Cp = lp, Ap = _p, jp = mp, xp = wp, Rp = Ep;
function we(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
we.prototype.clear = Cp;
we.prototype.delete = Ap;
we.prototype.get = jp;
we.prototype.has = xp;
we.prototype.set = Rp;
var kt = we, Ip = "__lodash_hash_undefined__";
function Fp(e) {
  return this.__data__.set(e, Ip), this;
}
var Dp = Fp;
function Mp(e) {
  return this.__data__.has(e);
}
var Lp = Mp, kp = kt, Np = Dp, Up = Lp;
function hr(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new kp(); ++r < n; )
    this.add(e[r]);
}
hr.prototype.add = hr.prototype.push = Np;
hr.prototype.has = Up;
var Nt = hr;
function Gp(e, r, n, a) {
  for (var i = e.length, s = n + (a ? 1 : -1); a ? s-- : ++s < i; )
    if (r(e[s], s, e))
      return s;
  return -1;
}
var Bp = Gp;
function Wp(e) {
  return e !== e;
}
var Kp = Wp;
function qp(e, r, n) {
  for (var a = n - 1, i = e.length; ++a < i; )
    if (e[a] === r)
      return a;
  return -1;
}
var zp = qp, Hp = Bp, Yp = Kp, Vp = zp;
function Jp(e, r, n) {
  return r === r ? Vp(e, r, n) : Hp(e, Yp, n);
}
var Xp = Jp, Zp = Xp;
function Qp(e, r) {
  var n = e == null ? 0 : e.length;
  return !!n && Zp(e, r, 0) > -1;
}
var za = Qp;
function ey(e, r, n) {
  for (var a = -1, i = e == null ? 0 : e.length; ++a < i; )
    if (n(r, e[a]))
      return !0;
  return !1;
}
var Ha = ey;
function ry(e) {
  return function(r) {
    return e(r);
  };
}
var Ya = ry;
function ty(e, r) {
  return e.has(r);
}
var Ut = ty, ny = Nt, ay = za, oy = Ha, iy = Sr, sy = Ya, Gn = Ut, uy = Math.min;
function cy(e, r, n) {
  for (var a = n ? oy : ay, i = e[0].length, s = e.length, f = s, c = Array(s), l = 1 / 0, y = []; f--; ) {
    var p = e[f];
    f && r && (p = iy(p, sy(r))), l = uy(p.length, l), c[f] = !n && (r || i >= 120 && p.length >= 120) ? new ny(f && p) : void 0;
  }
  p = e[0];
  var _ = -1, b = c[0];
  e:
    for (; ++_ < i && y.length < l; ) {
      var w = p[_], P = r ? r(w) : w;
      if (w = n || w !== 0 ? w : 0, !(b ? Gn(b, P) : a(y, P, n))) {
        for (f = s; --f; ) {
          var x = c[f];
          if (!(x ? Gn(x, P) : a(e[f], P, n)))
            continue e;
        }
        b && b.push(P), y.push(w);
      }
    }
  return y;
}
var fy = cy;
function ly(e) {
  return e;
}
var Gt = ly;
function vy(e, r, n) {
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
var py = vy, yy = py, Bn = Math.max;
function dy(e, r, n) {
  return r = Bn(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var a = arguments, i = -1, s = Bn(a.length - r, 0), f = Array(s); ++i < s; )
      f[i] = a[r + i];
    i = -1;
    for (var c = Array(r + 1); ++i < r; )
      c[i] = a[i];
    return c[r] = n(f), yy(e, this, c);
  };
}
var Va = dy;
function gy(e) {
  return function() {
    return e;
  };
}
var hy = gy, _y = fe, by = function() {
  try {
    var e = _y(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ja = by, $y = hy, Wn = Ja, my = Gt, Oy = Wn ? function(e, r) {
  return Wn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $y(r),
    writable: !0
  });
} : my, Sy = Oy, wy = 800, Ty = 16, Py = Date.now;
function Ey(e) {
  var r = 0, n = 0;
  return function() {
    var a = Py(), i = Ty - (a - n);
    if (n = a, i > 0) {
      if (++r >= wy)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var Cy = Ey, Ay = Sy, jy = Cy, xy = jy(Ay), Xa = xy, Ry = Gt, Iy = Va, Fy = Xa;
function Dy(e, r) {
  return Fy(Iy(e, r, Ry), e + "");
}
var Za = Dy, My = 9007199254740991;
function Ly(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= My;
}
var Bt = Ly, ky = Mt, Ny = Bt;
function Uy(e) {
  return e != null && Ny(e.length) && !ky(e);
}
var Te = Uy;
function Gy(e) {
  return e != null && typeof e == "object";
}
var le = Gy, By = Te, Wy = le;
function Ky(e) {
  return Wy(e) && By(e);
}
var Qa = Ky, qy = Qa;
function zy(e) {
  return qy(e) ? e : [];
}
var Hy = zy, Yy = Sr, Vy = fy, Jy = Za, Xy = Hy, Zy = Jy(function(e) {
  var r = Yy(e, Xy);
  return r.length && r[0] === e[0] ? Vy(r) : [];
}), Kn = Zy, Qy = Pr;
function ed() {
  this.__data__ = new Qy(), this.size = 0;
}
var rd = ed;
function td(e) {
  var r = this.__data__, n = r.delete(e);
  return this.size = r.size, n;
}
var nd = td;
function ad(e) {
  return this.__data__.get(e);
}
var od = ad;
function id(e) {
  return this.__data__.has(e);
}
var sd = id, ud = Pr, cd = Lt, fd = kt, ld = 200;
function vd(e, r) {
  var n = this.__data__;
  if (n instanceof ud) {
    var a = n.__data__;
    if (!cd || a.length < ld - 1)
      return a.push([e, r]), this.size = ++n.size, this;
    n = this.__data__ = new fd(a);
  }
  return n.set(e, r), this.size = n.size, this;
}
var pd = vd, yd = Pr, dd = rd, gd = nd, hd = od, _d = sd, bd = pd;
function Pe(e) {
  var r = this.__data__ = new yd(e);
  this.size = r.size;
}
Pe.prototype.clear = dd;
Pe.prototype.delete = gd;
Pe.prototype.get = hd;
Pe.prototype.has = _d;
Pe.prototype.set = bd;
var Wt = Pe;
function $d(e, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(e[n], n, e))
      return !0;
  return !1;
}
var md = $d, Od = Nt, Sd = md, wd = Ut, Td = 1, Pd = 2;
function Ed(e, r, n, a, i, s) {
  var f = n & Td, c = e.length, l = r.length;
  if (c != l && !(f && l > c))
    return !1;
  var y = s.get(e), p = s.get(r);
  if (y && p)
    return y == r && p == e;
  var _ = -1, b = !0, w = n & Pd ? new Od() : void 0;
  for (s.set(e, r), s.set(r, e); ++_ < c; ) {
    var P = e[_], x = r[_];
    if (a)
      var C = f ? a(x, P, _, r, e, s) : a(P, x, _, e, r, s);
    if (C !== void 0) {
      if (C)
        continue;
      b = !1;
      break;
    }
    if (w) {
      if (!Sd(r, function(E, m) {
        if (!wd(w, m) && (P === E || i(P, E, n, a, s)))
          return w.push(m);
      })) {
        b = !1;
        break;
      }
    } else if (!(P === x || i(P, x, n, a, s))) {
      b = !1;
      break;
    }
  }
  return s.delete(e), s.delete(r), b;
}
var eo = Ed, Cd = q, Ad = Cd.Uint8Array, ro = Ad;
function jd(e) {
  var r = -1, n = Array(e.size);
  return e.forEach(function(a, i) {
    n[++r] = [i, a];
  }), n;
}
var xd = jd;
function Rd(e) {
  var r = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++r] = a;
  }), n;
}
var Kt = Rd, qn = sr, zn = ro, Id = ur, Fd = eo, Dd = xd, Md = Kt, Ld = 1, kd = 2, Nd = "[object Boolean]", Ud = "[object Date]", Gd = "[object Error]", Bd = "[object Map]", Wd = "[object Number]", Kd = "[object RegExp]", qd = "[object Set]", zd = "[object String]", Hd = "[object Symbol]", Yd = "[object ArrayBuffer]", Vd = "[object DataView]", Hn = qn ? qn.prototype : void 0, ut = Hn ? Hn.valueOf : void 0;
function Jd(e, r, n, a, i, s, f) {
  switch (n) {
    case Vd:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Yd:
      return !(e.byteLength != r.byteLength || !s(new zn(e), new zn(r)));
    case Nd:
    case Ud:
    case Wd:
      return Id(+e, +r);
    case Gd:
      return e.name == r.name && e.message == r.message;
    case Kd:
    case zd:
      return e == r + "";
    case Bd:
      var c = Dd;
    case qd:
      var l = a & Ld;
      if (c || (c = Md), e.size != r.size && !l)
        return !1;
      var y = f.get(e);
      if (y)
        return y == r;
      a |= kd, f.set(e, r);
      var p = Fd(c(e), c(r), a, i, s, f);
      return f.delete(e), p;
    case Hd:
      if (ut)
        return ut.call(e) == ut.call(r);
  }
  return !1;
}
var Xd = Jd;
function Zd(e, r) {
  for (var n = -1, a = r.length, i = e.length; ++n < a; )
    e[i + n] = r[n];
  return e;
}
var to = Zd, Qd = to, eg = U;
function rg(e, r, n) {
  var a = r(e);
  return eg(e) ? a : Qd(a, n(e));
}
var tg = rg;
function ng(e, r) {
  for (var n = -1, a = e == null ? 0 : e.length, i = 0, s = []; ++n < a; ) {
    var f = e[n];
    r(f, n, e) && (s[i++] = f);
  }
  return s;
}
var ag = ng;
function og() {
  return [];
}
var ig = og, sg = ag, ug = ig, cg = Object.prototype, fg = cg.propertyIsEnumerable, Yn = Object.getOwnPropertySymbols, lg = Yn ? function(e) {
  return e == null ? [] : (e = Object(e), sg(Yn(e), function(r) {
    return fg.call(e, r);
  }));
} : ug, vg = lg;
function pg(e, r) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = r(n);
  return a;
}
var yg = pg, dg = me, gg = le, hg = "[object Arguments]";
function _g(e) {
  return gg(e) && dg(e) == hg;
}
var bg = _g, Vn = bg, $g = le, no = Object.prototype, mg = no.hasOwnProperty, Og = no.propertyIsEnumerable, Sg = Vn(function() {
  return arguments;
}()) ? Vn : function(e) {
  return $g(e) && mg.call(e, "callee") && !Og.call(e, "callee");
}, Cr = Sg, ir = { exports: {} };
function wg() {
  return !1;
}
var Tg = wg;
(function(e, r) {
  var n = q, a = Tg, i = r && !r.nodeType && r, s = i && !0 && e && !e.nodeType && e, f = s && s.exports === i, c = f ? n.Buffer : void 0, l = c ? c.isBuffer : void 0, y = l || a;
  e.exports = y;
})(ir, ir.exports);
var Pg = 9007199254740991, Eg = /^(?:0|[1-9]\d*)$/;
function Cg(e, r) {
  var n = typeof e;
  return r = r == null ? Pg : r, !!r && (n == "number" || n != "symbol" && Eg.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var Ar = Cg, Ag = me, jg = Bt, xg = le, Rg = "[object Arguments]", Ig = "[object Array]", Fg = "[object Boolean]", Dg = "[object Date]", Mg = "[object Error]", Lg = "[object Function]", kg = "[object Map]", Ng = "[object Number]", Ug = "[object Object]", Gg = "[object RegExp]", Bg = "[object Set]", Wg = "[object String]", Kg = "[object WeakMap]", qg = "[object ArrayBuffer]", zg = "[object DataView]", Hg = "[object Float32Array]", Yg = "[object Float64Array]", Vg = "[object Int8Array]", Jg = "[object Int16Array]", Xg = "[object Int32Array]", Zg = "[object Uint8Array]", Qg = "[object Uint8ClampedArray]", eh = "[object Uint16Array]", rh = "[object Uint32Array]", j = {};
j[Hg] = j[Yg] = j[Vg] = j[Jg] = j[Xg] = j[Zg] = j[Qg] = j[eh] = j[rh] = !0;
j[Rg] = j[Ig] = j[qg] = j[Fg] = j[zg] = j[Dg] = j[Mg] = j[Lg] = j[kg] = j[Ng] = j[Ug] = j[Gg] = j[Bg] = j[Wg] = j[Kg] = !1;
function th(e) {
  return xg(e) && jg(e.length) && !!j[Ag(e)];
}
var nh = th, wt = { exports: {} };
(function(e, r) {
  var n = Wa, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, f = s && n.process, c = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || f && f.binding && f.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(wt, wt.exports);
var ah = nh, oh = Ya, Jn = wt.exports, Xn = Jn && Jn.isTypedArray, ih = Xn ? oh(Xn) : ah, qt = ih, sh = yg, uh = Cr, ch = U, fh = ir.exports, lh = Ar, vh = qt, ph = Object.prototype, yh = ph.hasOwnProperty;
function dh(e, r) {
  var n = ch(e), a = !n && uh(e), i = !n && !a && fh(e), s = !n && !a && !i && vh(e), f = n || a || i || s, c = f ? sh(e.length, String) : [], l = c.length;
  for (var y in e)
    (r || yh.call(e, y)) && !(f && (y == "length" || i && (y == "offset" || y == "parent") || s && (y == "buffer" || y == "byteLength" || y == "byteOffset") || lh(y, l))) && c.push(y);
  return c;
}
var ao = dh, gh = Object.prototype;
function hh(e) {
  var r = e && e.constructor, n = typeof r == "function" && r.prototype || gh;
  return e === n;
}
var zt = hh;
function _h(e, r) {
  return function(n) {
    return e(r(n));
  };
}
var oo = _h, bh = oo, $h = bh(Object.keys, Object), mh = $h, Oh = zt, Sh = mh, wh = Object.prototype, Th = wh.hasOwnProperty;
function Ph(e) {
  if (!Oh(e))
    return Sh(e);
  var r = [];
  for (var n in Object(e))
    Th.call(e, n) && n != "constructor" && r.push(n);
  return r;
}
var Eh = Ph, Ch = ao, Ah = Eh, jh = Te;
function xh(e) {
  return jh(e) ? Ch(e) : Ah(e);
}
var Ht = xh, Rh = tg, Ih = vg, Fh = Ht;
function Dh(e) {
  return Rh(e, Fh, Ih);
}
var Mh = Dh, Zn = Mh, Lh = 1, kh = Object.prototype, Nh = kh.hasOwnProperty;
function Uh(e, r, n, a, i, s) {
  var f = n & Lh, c = Zn(e), l = c.length, y = Zn(r), p = y.length;
  if (l != p && !f)
    return !1;
  for (var _ = l; _--; ) {
    var b = c[_];
    if (!(f ? b in r : Nh.call(r, b)))
      return !1;
  }
  var w = s.get(e), P = s.get(r);
  if (w && P)
    return w == r && P == e;
  var x = !0;
  s.set(e, r), s.set(r, e);
  for (var C = f; ++_ < l; ) {
    b = c[_];
    var E = e[b], m = r[b];
    if (a)
      var D = f ? a(m, E, b, r, e, s) : a(E, m, b, e, r, s);
    if (!(D === void 0 ? E === m || i(E, m, n, a, s) : D)) {
      x = !1;
      break;
    }
    C || (C = b == "constructor");
  }
  if (x && !C) {
    var N = e.constructor, M = r.constructor;
    N != M && "constructor" in e && "constructor" in r && !(typeof N == "function" && N instanceof N && typeof M == "function" && M instanceof M) && (x = !1);
  }
  return s.delete(e), s.delete(r), x;
}
var Gh = Uh, Bh = fe, Wh = q, Kh = Bh(Wh, "DataView"), qh = Kh, zh = fe, Hh = q, Yh = zh(Hh, "Promise"), Vh = Yh, Jh = fe, Xh = q, Zh = Jh(Xh, "Set"), io = Zh, Qh = fe, e_ = q, r_ = Qh(e_, "WeakMap"), t_ = r_, Tt = qh, Pt = Lt, Et = Vh, Ct = io, At = t_, so = me, Ee = qa, Qn = "[object Map]", n_ = "[object Object]", ea = "[object Promise]", ra = "[object Set]", ta = "[object WeakMap]", na = "[object DataView]", a_ = Ee(Tt), o_ = Ee(Pt), i_ = Ee(Et), s_ = Ee(Ct), u_ = Ee(At), ue = so;
(Tt && ue(new Tt(new ArrayBuffer(1))) != na || Pt && ue(new Pt()) != Qn || Et && ue(Et.resolve()) != ea || Ct && ue(new Ct()) != ra || At && ue(new At()) != ta) && (ue = function(e) {
  var r = so(e), n = r == n_ ? e.constructor : void 0, a = n ? Ee(n) : "";
  if (a)
    switch (a) {
      case a_:
        return na;
      case o_:
        return Qn;
      case i_:
        return ea;
      case s_:
        return ra;
      case u_:
        return ta;
    }
  return r;
});
var c_ = ue, ct = Wt, f_ = eo, l_ = Xd, v_ = Gh, aa = c_, oa = U, ia = ir.exports, p_ = qt, y_ = 1, sa = "[object Arguments]", ua = "[object Array]", yr = "[object Object]", d_ = Object.prototype, ca = d_.hasOwnProperty;
function g_(e, r, n, a, i, s) {
  var f = oa(e), c = oa(r), l = f ? ua : aa(e), y = c ? ua : aa(r);
  l = l == sa ? yr : l, y = y == sa ? yr : y;
  var p = l == yr, _ = y == yr, b = l == y;
  if (b && ia(e)) {
    if (!ia(r))
      return !1;
    f = !0, p = !1;
  }
  if (b && !p)
    return s || (s = new ct()), f || p_(e) ? f_(e, r, n, a, i, s) : l_(e, r, l, n, a, i, s);
  if (!(n & y_)) {
    var w = p && ca.call(e, "__wrapped__"), P = _ && ca.call(r, "__wrapped__");
    if (w || P) {
      var x = w ? e.value() : e, C = P ? r.value() : r;
      return s || (s = new ct()), i(x, C, n, a, s);
    }
  }
  return b ? (s || (s = new ct()), v_(e, r, n, a, i, s)) : !1;
}
var h_ = g_, __ = h_, fa = le;
function uo(e, r, n, a, i) {
  return e === r ? !0 : e == null || r == null || !fa(e) && !fa(r) ? e !== e && r !== r : __(e, r, n, a, uo, i);
}
var co = uo, b_ = Wt, $_ = co, m_ = 1, O_ = 2;
function S_(e, r, n, a) {
  var i = n.length, s = i, f = !a;
  if (e == null)
    return !s;
  for (e = Object(e); i--; ) {
    var c = n[i];
    if (f && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return !1;
  }
  for (; ++i < s; ) {
    c = n[i];
    var l = c[0], y = e[l], p = c[1];
    if (f && c[2]) {
      if (y === void 0 && !(l in e))
        return !1;
    } else {
      var _ = new b_();
      if (a)
        var b = a(y, p, l, e, r, _);
      if (!(b === void 0 ? $_(p, y, m_ | O_, a, _) : b))
        return !1;
    }
  }
  return !0;
}
var w_ = S_, T_ = Z;
function P_(e) {
  return e === e && !T_(e);
}
var fo = P_, E_ = fo, C_ = Ht;
function A_(e) {
  for (var r = C_(e), n = r.length; n--; ) {
    var a = r[n], i = e[a];
    r[n] = [a, i, E_(i)];
  }
  return r;
}
var j_ = A_;
function x_(e, r) {
  return function(n) {
    return n == null ? !1 : n[e] === r && (r !== void 0 || e in Object(n));
  };
}
var lo = x_, R_ = w_, I_ = j_, F_ = lo;
function D_(e) {
  var r = I_(e);
  return r.length == 1 && r[0][2] ? F_(r[0][0], r[0][1]) : function(n) {
    return n === e || R_(n, e, r);
  };
}
var M_ = D_, L_ = me, k_ = le, N_ = "[object Symbol]";
function U_(e) {
  return typeof e == "symbol" || k_(e) && L_(e) == N_;
}
var Yt = U_, G_ = U, B_ = Yt, W_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, K_ = /^\w*$/;
function q_(e, r) {
  if (G_(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || B_(e) ? !0 : K_.test(e) || !W_.test(e) || r != null && e in Object(r);
}
var Vt = q_, vo = kt, z_ = "Expected a function";
function Jt(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(z_);
  var n = function() {
    var a = arguments, i = r ? r.apply(this, a) : a[0], s = n.cache;
    if (s.has(i))
      return s.get(i);
    var f = e.apply(this, a);
    return n.cache = s.set(i, f) || s, f;
  };
  return n.cache = new (Jt.Cache || vo)(), n;
}
Jt.Cache = vo;
var H_ = Jt, Y_ = H_, V_ = 500;
function J_(e) {
  var r = Y_(e, function(a) {
    return n.size === V_ && n.clear(), a;
  }), n = r.cache;
  return r;
}
var X_ = J_, Z_ = X_, Q_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eb = /\\(\\)?/g, rb = Z_(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Q_, function(n, a, i, s) {
    r.push(i ? s.replace(eb, "$1") : a || n);
  }), r;
}), tb = rb, la = sr, nb = Sr, ab = U, ob = Yt, ib = 1 / 0, va = la ? la.prototype : void 0, pa = va ? va.toString : void 0;
function po(e) {
  if (typeof e == "string")
    return e;
  if (ab(e))
    return nb(e, po) + "";
  if (ob(e))
    return pa ? pa.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -ib ? "-0" : r;
}
var sb = po, ub = sb;
function cb(e) {
  return e == null ? "" : ub(e);
}
var fb = cb, lb = U, vb = Vt, pb = tb, yb = fb;
function db(e, r) {
  return lb(e) ? e : vb(e, r) ? [e] : pb(yb(e));
}
var jr = db, gb = Yt, hb = 1 / 0;
function _b(e) {
  if (typeof e == "string" || gb(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -hb ? "-0" : r;
}
var cr = _b, bb = jr, $b = cr;
function mb(e, r) {
  r = bb(r, e);
  for (var n = 0, a = r.length; e != null && n < a; )
    e = e[$b(r[n++])];
  return n && n == a ? e : void 0;
}
var Xt = mb, Ob = Xt;
function Sb(e, r, n) {
  var a = e == null ? void 0 : Ob(e, r);
  return a === void 0 ? n : a;
}
var wb = Sb;
function Tb(e, r) {
  return e != null && r in Object(e);
}
var Pb = Tb, Eb = jr, Cb = Cr, Ab = U, jb = Ar, xb = Bt, Rb = cr;
function Ib(e, r, n) {
  r = Eb(r, e);
  for (var a = -1, i = r.length, s = !1; ++a < i; ) {
    var f = Rb(r[a]);
    if (!(s = e != null && n(e, f)))
      break;
    e = e[f];
  }
  return s || ++a != i ? s : (i = e == null ? 0 : e.length, !!i && xb(i) && jb(f, i) && (Ab(e) || Cb(e)));
}
var Fb = Ib, Db = Pb, Mb = Fb;
function Lb(e, r) {
  return e != null && Mb(e, r, Db);
}
var yo = Lb, kb = co, Nb = wb, Ub = yo, Gb = Vt, Bb = fo, Wb = lo, Kb = cr, qb = 1, zb = 2;
function Hb(e, r) {
  return Gb(e) && Bb(r) ? Wb(Kb(e), r) : function(n) {
    var a = Nb(n, e);
    return a === void 0 && a === r ? Ub(n, e) : kb(r, a, qb | zb);
  };
}
var Yb = Hb;
function Vb(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
var Jb = Vb, Xb = Xt;
function Zb(e) {
  return function(r) {
    return Xb(r, e);
  };
}
var Qb = Zb, e$ = Jb, r$ = Qb, t$ = Vt, n$ = cr;
function a$(e) {
  return t$(e) ? e$(n$(e)) : r$(e);
}
var o$ = a$, i$ = M_, s$ = Yb, u$ = Gt, c$ = U, f$ = o$;
function l$(e) {
  return typeof e == "function" ? e : e == null ? u$ : typeof e == "object" ? c$(e) ? s$(e[0], e[1]) : i$(e) : f$(e);
}
var v$ = l$;
function p$(e) {
  return function(r, n, a) {
    for (var i = -1, s = Object(r), f = a(r), c = f.length; c--; ) {
      var l = f[e ? c : ++i];
      if (n(s[l], l, s) === !1)
        break;
    }
    return r;
  };
}
var y$ = p$, d$ = y$, g$ = d$(), go = g$, h$ = go, _$ = Ht;
function b$(e, r) {
  return e && h$(e, r, _$);
}
var $$ = b$, m$ = Te;
function O$(e, r) {
  return function(n, a) {
    if (n == null)
      return n;
    if (!m$(n))
      return e(n, a);
    for (var i = n.length, s = r ? i : -1, f = Object(n); (r ? s-- : ++s < i) && a(f[s], s, f) !== !1; )
      ;
    return n;
  };
}
var S$ = O$, w$ = $$, T$ = S$, P$ = T$(w$), E$ = P$, C$ = E$, A$ = Te;
function j$(e, r) {
  var n = -1, a = A$(e) ? Array(e.length) : [];
  return C$(e, function(i, s, f) {
    a[++n] = r(i, s, f);
  }), a;
}
var x$ = j$, R$ = Sr, I$ = v$, F$ = x$, D$ = U;
function M$(e, r) {
  var n = D$(e) ? R$ : F$;
  return n(e, I$(r));
}
var L$ = M$, ya = Ja;
function k$(e, r, n) {
  r == "__proto__" && ya ? ya(e, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[r] = n;
}
var Zt = k$, N$ = Zt, U$ = ur;
function G$(e, r, n) {
  (n !== void 0 && !U$(e[r], n) || n === void 0 && !(r in e)) && N$(e, r, n);
}
var ho = G$, jt = { exports: {} };
(function(e, r) {
  var n = q, a = r && !r.nodeType && r, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, f = s ? n.Buffer : void 0, c = f ? f.allocUnsafe : void 0;
  function l(y, p) {
    if (p)
      return y.slice();
    var _ = y.length, b = c ? c(_) : new y.constructor(_);
    return y.copy(b), b;
  }
  e.exports = l;
})(jt, jt.exports);
var da = ro;
function B$(e) {
  var r = new e.constructor(e.byteLength);
  return new da(r).set(new da(e)), r;
}
var W$ = B$, K$ = W$;
function q$(e, r) {
  var n = r ? K$(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var z$ = q$;
function H$(e, r) {
  var n = -1, a = e.length;
  for (r || (r = Array(a)); ++n < a; )
    r[n] = e[n];
  return r;
}
var Y$ = H$, V$ = Z, ga = Object.create, J$ = function() {
  function e() {
  }
  return function(r) {
    if (!V$(r))
      return {};
    if (ga)
      return ga(r);
    e.prototype = r;
    var n = new e();
    return e.prototype = void 0, n;
  };
}(), X$ = J$, Z$ = oo, Q$ = Z$(Object.getPrototypeOf, Object), _o = Q$, e1 = X$, r1 = _o, t1 = zt;
function n1(e) {
  return typeof e.constructor == "function" && !t1(e) ? e1(r1(e)) : {};
}
var a1 = n1, o1 = me, i1 = _o, s1 = le, u1 = "[object Object]", c1 = Function.prototype, f1 = Object.prototype, bo = c1.toString, l1 = f1.hasOwnProperty, v1 = bo.call(Object);
function p1(e) {
  if (!s1(e) || o1(e) != u1)
    return !1;
  var r = i1(e);
  if (r === null)
    return !0;
  var n = l1.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && bo.call(n) == v1;
}
var y1 = p1;
function d1(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var $o = d1, g1 = Zt, h1 = ur, _1 = Object.prototype, b1 = _1.hasOwnProperty;
function $1(e, r, n) {
  var a = e[r];
  (!(b1.call(e, r) && h1(a, n)) || n === void 0 && !(r in e)) && g1(e, r, n);
}
var mo = $1, m1 = mo, O1 = Zt;
function S1(e, r, n, a) {
  var i = !n;
  n || (n = {});
  for (var s = -1, f = r.length; ++s < f; ) {
    var c = r[s], l = a ? a(n[c], e[c], c, n, e) : void 0;
    l === void 0 && (l = e[c]), i ? O1(n, c, l) : m1(n, c, l);
  }
  return n;
}
var w1 = S1;
function T1(e) {
  var r = [];
  if (e != null)
    for (var n in Object(e))
      r.push(n);
  return r;
}
var P1 = T1, E1 = Z, C1 = zt, A1 = P1, j1 = Object.prototype, x1 = j1.hasOwnProperty;
function R1(e) {
  if (!E1(e))
    return A1(e);
  var r = C1(e), n = [];
  for (var a in e)
    a == "constructor" && (r || !x1.call(e, a)) || n.push(a);
  return n;
}
var I1 = R1, F1 = ao, D1 = I1, M1 = Te;
function L1(e) {
  return M1(e) ? F1(e, !0) : D1(e);
}
var Oo = L1, k1 = w1, N1 = Oo;
function U1(e) {
  return k1(e, N1(e));
}
var G1 = U1, ha = ho, B1 = jt.exports, W1 = z$, K1 = Y$, q1 = a1, _a = Cr, ba = U, z1 = Qa, H1 = ir.exports, Y1 = Mt, V1 = Z, J1 = y1, X1 = qt, $a = $o, Z1 = G1;
function Q1(e, r, n, a, i, s, f) {
  var c = $a(e, n), l = $a(r, n), y = f.get(l);
  if (y) {
    ha(e, n, y);
    return;
  }
  var p = s ? s(c, l, n + "", e, r, f) : void 0, _ = p === void 0;
  if (_) {
    var b = ba(l), w = !b && H1(l), P = !b && !w && X1(l);
    p = l, b || w || P ? ba(c) ? p = c : z1(c) ? p = K1(c) : w ? (_ = !1, p = B1(l, !0)) : P ? (_ = !1, p = W1(l, !0)) : p = [] : J1(l) || _a(l) ? (p = c, _a(c) ? p = Z1(c) : (!V1(c) || Y1(c)) && (p = q1(l))) : _ = !1;
  }
  _ && (f.set(l, p), i(p, l, a, s, f), f.delete(l)), ha(e, n, p);
}
var em = Q1, rm = Wt, tm = ho, nm = go, am = em, om = Z, im = Oo, sm = $o;
function So(e, r, n, a, i) {
  e !== r && nm(r, function(s, f) {
    if (i || (i = new rm()), om(s))
      am(e, r, f, n, So, a, i);
    else {
      var c = a ? a(sm(e, f), s, f + "", e, r, i) : void 0;
      c === void 0 && (c = s), tm(e, f, c);
    }
  }, im);
}
var um = So, cm = ur, fm = Te, lm = Ar, vm = Z;
function pm(e, r, n) {
  if (!vm(n))
    return !1;
  var a = typeof r;
  return (a == "number" ? fm(n) && lm(r, n.length) : a == "string" && r in n) ? cm(n[r], e) : !1;
}
var ym = pm, dm = Za, gm = ym;
function hm(e) {
  return dm(function(r, n) {
    var a = -1, i = n.length, s = i > 1 ? n[i - 1] : void 0, f = i > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (i--, s) : void 0, f && gm(n[0], n[1], f) && (s = i < 3 ? void 0 : s, i = 1), r = Object(r); ++a < i; ) {
      var c = n[a];
      c && e(r, c, a, s);
    }
    return r;
  });
}
var _m = hm, bm = um, $m = _m, mm = $m(function(e, r, n) {
  bm(e, r, n);
}), tr = mm, Om = mo, Sm = jr, wm = Ar, ma = Z, Tm = cr;
function Pm(e, r, n, a) {
  if (!ma(e))
    return e;
  r = Sm(r, e);
  for (var i = -1, s = r.length, f = s - 1, c = e; c != null && ++i < s; ) {
    var l = Tm(r[i]), y = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != f) {
      var p = c[l];
      y = a ? a(p, l, c) : void 0, y === void 0 && (y = ma(p) ? p : wm(r[i + 1]) ? [] : {});
    }
    Om(c, l, y), c = c[l];
  }
  return e;
}
var Em = Pm, Cm = Xt, Am = Em, jm = jr;
function xm(e, r, n) {
  for (var a = -1, i = r.length, s = {}; ++a < i; ) {
    var f = r[a], c = Cm(e, f);
    n(c, f) && Am(s, jm(f, e), c);
  }
  return s;
}
var Rm = xm, Im = Rm, Fm = yo;
function Dm(e, r) {
  return Im(e, r, function(n, a) {
    return Fm(e, a);
  });
}
var Mm = Dm, Oa = sr, Lm = Cr, km = U, Sa = Oa ? Oa.isConcatSpreadable : void 0;
function Nm(e) {
  return km(e) || Lm(e) || !!(Sa && e && e[Sa]);
}
var Um = Nm, Gm = to, Bm = Um;
function wo(e, r, n, a, i) {
  var s = -1, f = e.length;
  for (n || (n = Bm), i || (i = []); ++s < f; ) {
    var c = e[s];
    r > 0 && n(c) ? r > 1 ? wo(c, r - 1, n, a, i) : Gm(i, c) : a || (i[i.length] = c);
  }
  return i;
}
var Wm = wo, Km = Wm;
function qm(e) {
  var r = e == null ? 0 : e.length;
  return r ? Km(e, 1) : [];
}
var zm = qm, Hm = zm, Ym = Va, Vm = Xa;
function Jm(e) {
  return Vm(Ym(e, void 0, Hm), e + "");
}
var Xm = Jm, Zm = Mm, Qm = Xm, eO = Qm(function(e, r) {
  return e == null ? {} : Zm(e, r);
}), rO = eO;
function tO() {
}
var nO = tO, ft = io, aO = nO, oO = Kt, iO = 1 / 0, sO = ft && 1 / oO(new ft([, -0]))[1] == iO ? function(e) {
  return new ft(e);
} : aO, uO = sO, cO = Nt, fO = za, lO = Ha, vO = Ut, pO = uO, yO = Kt, dO = 200;
function gO(e, r, n) {
  var a = -1, i = fO, s = e.length, f = !0, c = [], l = c;
  if (n)
    f = !1, i = lO;
  else if (s >= dO) {
    var y = r ? null : pO(e);
    if (y)
      return yO(y);
    f = !1, i = vO, l = new cO();
  } else
    l = r ? [] : c;
  e:
    for (; ++a < s; ) {
      var p = e[a], _ = r ? r(p) : p;
      if (p = n || p !== 0 ? p : 0, f && _ === _) {
        for (var b = l.length; b--; )
          if (l[b] === _)
            continue e;
        r && l.push(_), c.push(p);
      } else
        i(l, _, n) || (l !== c && l.push(_), c.push(p));
    }
  return c;
}
var hO = gO, _O = hO;
function bO(e) {
  return e && e.length ? _O(e) : [];
}
var $O = bO, To = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function mO() {
  if (wa)
    return nr;
  wa = 1;
  var e = Q, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, l, y) {
    var p, _ = {}, b = null, w = null;
    y !== void 0 && (b = "" + y), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (p in l)
      a.call(l, p) && !s.hasOwnProperty(p) && (_[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        _[p] === void 0 && (_[p] = l[p]);
    return { $$typeof: r, type: c, key: b, ref: w, props: _, _owner: i.current };
  }
  return nr.Fragment = n, nr.jsx = f, nr.jsxs = f, nr;
}
var ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function OO() {
  return Ta || (Ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Q, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), P = Symbol.iterator, x = "@@iterator";
    function C(t) {
      if (t === null || typeof t != "object")
        return null;
      var o = P && t[P] || t[x];
      return typeof o == "function" ? o : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(t) {
      {
        for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), v = 1; v < o; v++)
          u[v - 1] = arguments[v];
        D("error", t, u);
      }
    }
    function D(t, o, u) {
      {
        var v = E.ReactDebugCurrentFrame, h = v.getStackAddendum();
        h !== "" && (o += "%s", u = u.concat([h]));
        var $ = u.map(function(g) {
          return String(g);
        });
        $.unshift("Warning: " + o), Function.prototype.apply.call(console[t], console, $);
      }
    }
    var N = !1, M = !1, ve = !1, G = !1, xr = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function Rr(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === s || xr || t === i || t === y || t === p || G || t === w || N || M || ve || typeof t == "object" && t !== null && (t.$$typeof === b || t.$$typeof === _ || t.$$typeof === f || t.$$typeof === c || t.$$typeof === l || t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Ir(t, o, u) {
      var v = t.displayName;
      if (v)
        return v;
      var h = o.displayName || o.name || "";
      return h !== "" ? u + "(" + h + ")" : u;
    }
    function Ae(t) {
      return t.displayName || "Context";
    }
    function R(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case y:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var o = t;
            return Ae(o) + ".Consumer";
          case f:
            var u = t;
            return Ae(u._context) + ".Provider";
          case l:
            return Ir(t, t.render, "ForwardRef");
          case _:
            var v = t.displayName || null;
            return v !== null ? v : R(t.type) || "Memo";
          case b: {
            var h = t, $ = h._payload, g = h._init;
            try {
              return R(g($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, B = 0, je, xe, Re, Ie, Fe, De, Me;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Fr() {
      {
        if (B === 0) {
          je = console.log, xe = console.info, Re = console.warn, Ie = console.error, Fe = console.group, De = console.groupCollapsed, Me = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Le,
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
        B++;
      }
    }
    function Dr() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, t, {
              value: je
            }),
            info: F({}, t, {
              value: xe
            }),
            warn: F({}, t, {
              value: Re
            }),
            error: F({}, t, {
              value: Ie
            }),
            group: F({}, t, {
              value: Fe
            }),
            groupCollapsed: F({}, t, {
              value: De
            }),
            groupEnd: F({}, t, {
              value: Me
            })
          });
        }
        B < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = E.ReactCurrentDispatcher, re;
    function z(t, o, u) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (h) {
            var v = h.stack.trim().match(/\n( *(at )?)/);
            re = v && v[1] || "";
          }
        return `
` + re + t;
      }
    }
    var te = !1, H;
    {
      var Mr = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Mr();
    }
    function ke(t, o) {
      if (!t || te)
        return "";
      {
        var u = H.get(t);
        if (u !== void 0)
          return u;
      }
      var v;
      te = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = ee.current, ee.current = null, Fr();
      try {
        if (o) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (I) {
              v = I;
            }
            Reflect.construct(t, [], g);
          } else {
            try {
              g.call();
            } catch (I) {
              v = I;
            }
            t.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            v = I;
          }
          t();
        }
      } catch (I) {
        if (I && v && typeof I.stack == "string") {
          for (var d = I.stack.split(`
`), T = v.stack.split(`
`), O = d.length - 1, S = T.length - 1; O >= 1 && S >= 0 && d[O] !== T[S]; )
            S--;
          for (; O >= 1 && S >= 0; O--, S--)
            if (d[O] !== T[S]) {
              if (O !== 1 || S !== 1)
                do
                  if (O--, S--, S < 0 || d[O] !== T[S]) {
                    var A = `
` + d[O].replace(" at new ", " at ");
                    return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), typeof t == "function" && H.set(t, A), A;
                  }
                while (O >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = $, Dr(), Error.prepareStackTrace = h;
      }
      var k = t ? t.displayName || t.name : "", Xe = k ? z(k) : "";
      return typeof t == "function" && H.set(t, Xe), Xe;
    }
    function Lr(t, o, u) {
      return ke(t, !1);
    }
    function kr(t) {
      var o = t.prototype;
      return !!(o && o.isReactComponent);
    }
    function Y(t, o, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ke(t, kr(t));
      if (typeof t == "string")
        return z(t);
      switch (t) {
        case y:
          return z("Suspense");
        case p:
          return z("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case l:
            return Lr(t.render);
          case _:
            return Y(t.type, o, u);
          case b: {
            var v = t, h = v._payload, $ = v._init;
            try {
              return Y($(h), o, u);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Ne = {}, Ue = E.ReactDebugCurrentFrame;
    function J(t) {
      if (t) {
        var o = t._owner, u = Y(t.type, t._source, o ? o.type : null);
        Ue.setExtraStackFrame(u);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Nr(t, o, u, v, h) {
      {
        var $ = Function.call.bind(V);
        for (var g in t)
          if ($(t, g)) {
            var d = void 0;
            try {
              if (typeof t[g] != "function") {
                var T = Error((v || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              d = t[g](o, g, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              d = O;
            }
            d && !(d instanceof Error) && (J(h), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, g, typeof d), J(null)), d instanceof Error && !(d.message in Ne) && (Ne[d.message] = !0, J(h), m("Failed %s type: %s", u, d.message), J(null));
          }
      }
    }
    var Ur = Array.isArray;
    function ne(t) {
      return Ur(t);
    }
    function Gr(t) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function Br(t) {
      try {
        return Ge(t), !1;
      } catch {
        return !0;
      }
    }
    function Ge(t) {
      return "" + t;
    }
    function Be(t) {
      if (Br(t))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gr(t)), Ge(t);
    }
    var W = E.ReactCurrentOwner, Wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ke, ae;
    ae = {};
    function Kr(t) {
      if (V.call(t, "ref")) {
        var o = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function qr(t) {
      if (V.call(t, "key")) {
        var o = Object.getOwnPropertyDescriptor(t, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function zr(t, o) {
      if (typeof t.ref == "string" && W.current && o && W.current.stateNode !== o) {
        var u = R(W.current.type);
        ae[u] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(W.current.type), t.ref), ae[u] = !0);
      }
    }
    function Hr(t, o) {
      {
        var u = function() {
          We || (We = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Yr(t, o) {
      {
        var u = function() {
          Ke || (Ke = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Vr = function(t, o, u, v, h, $, g) {
      var d = {
        $$typeof: r,
        type: t,
        key: o,
        ref: u,
        props: g,
        _owner: $
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function Jr(t, o, u, v, h) {
      {
        var $, g = {}, d = null, T = null;
        u !== void 0 && (Be(u), d = "" + u), qr(o) && (Be(o.key), d = "" + o.key), Kr(o) && (T = o.ref, zr(o, h));
        for ($ in o)
          V.call(o, $) && !Wr.hasOwnProperty($) && (g[$] = o[$]);
        if (t && t.defaultProps) {
          var O = t.defaultProps;
          for ($ in O)
            g[$] === void 0 && (g[$] = O[$]);
        }
        if (d || T) {
          var S = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          d && Hr(g, S), T && Yr(g, S);
        }
        return Vr(t, d, T, h, v, W.current, g);
      }
    }
    var oe = E.ReactCurrentOwner, qe = E.ReactDebugCurrentFrame;
    function L(t) {
      if (t) {
        var o = t._owner, u = Y(t.type, t._source, o ? o.type : null);
        qe.setExtraStackFrame(u);
      } else
        qe.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function ze() {
      {
        if (oe.current) {
          var t = R(oe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Xr(t) {
      {
        if (t !== void 0) {
          var o = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + o + ":" + u + ".";
        }
        return "";
      }
    }
    var He = {};
    function Zr(t) {
      {
        var o = ze();
        if (!o) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (o = `

Check the top-level render call using <` + u + ">.");
        }
        return o;
      }
    }
    function Ye(t, o) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = Zr(o);
        if (He[u])
          return;
        He[u] = !0;
        var v = "";
        t && t._owner && t._owner !== oe.current && (v = " It was passed a child from " + R(t._owner.type) + "."), L(t), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), L(null);
      }
    }
    function Ve(t, o) {
      {
        if (typeof t != "object")
          return;
        if (ne(t))
          for (var u = 0; u < t.length; u++) {
            var v = t[u];
            se(v) && Ye(v, o);
          }
        else if (se(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var h = C(t);
          if (typeof h == "function" && h !== t.entries)
            for (var $ = h.call(t), g; !(g = $.next()).done; )
              se(g.value) && Ye(g.value, o);
        }
      }
    }
    function Qr(t) {
      {
        var o = t.type;
        if (o == null || typeof o == "string")
          return;
        var u;
        if (typeof o == "function")
          u = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === l || o.$$typeof === _))
          u = o.propTypes;
        else
          return;
        if (u) {
          var v = R(o);
          Nr(u, t.props, "prop", v, t);
        } else if (o.PropTypes !== void 0 && !ie) {
          ie = !0;
          var h = R(o);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function et(t) {
      {
        for (var o = Object.keys(t.props), u = 0; u < o.length; u++) {
          var v = o[u];
          if (v !== "children" && v !== "key") {
            L(t), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), L(null);
            break;
          }
        }
        t.ref !== null && (L(t), m("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Je(t, o, u, v, h, $) {
      {
        var g = Rr(t);
        if (!g) {
          var d = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = Xr(h);
          T ? d += T : d += ze();
          var O;
          t === null ? O = "null" : ne(t) ? O = "array" : t !== void 0 && t.$$typeof === r ? (O = "<" + (R(t.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : O = typeof t, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, d);
        }
        var S = Jr(t, o, u, h, $);
        if (S == null)
          return S;
        if (g) {
          var A = o.children;
          if (A !== void 0)
            if (v)
              if (ne(A)) {
                for (var k = 0; k < A.length; k++)
                  Ve(A[k], t);
                Object.freeze && Object.freeze(A);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(A, t);
        }
        return t === a ? et(S) : Qr(S), S;
      }
    }
    function rt(t, o, u) {
      return Je(t, o, u, !0);
    }
    function tt(t, o, u) {
      return Je(t, o, u, !1);
    }
    var nt = tt, at = rt;
    ar.Fragment = a, ar.jsx = nt, ar.jsxs = at;
  }()), ar;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = mO() : e.exports = OO();
})(To);
const SO = To.exports.jsx, wO = {
  commitSagaOnError: !1,
  ignoreSagaError: !1,
  log: !1,
  throwSagaError: !0
}, PO = (e, r) => {
  const n = Po({
    state: e,
    setState: () => e
  }), a = {
    ...wO,
    ...r
  };
  return [(f) => {
    const c = Ao(n);
    if (c === void 0)
      throw new Error("Couldn't find a context object. Is your component inside StateProvider?");
    return jo(() => ({
      ...rO(c.state, f),
      setState: c.setState
    }), [c.setState, c.state, f]);
  }, (f) => {
    const {
      state: c,
      defaultState: l,
      onChange: y,
      children: p
    } = f, _ = Eo(y);
    _.current = y;
    const b = Qt((C, E) => {
      const m = tr({}, C, E);
      let D = tr({}, m), N = St(E || {});
      return L$(a.sagas, (M) => {
        const ve = sl(M.keys);
        if (Kn(N, ve).length)
          try {
            const G = M.saga(D);
            a.log && (!a.logFilters || Kn(a.logFilters, ve)) && Dt("state:saga:run", {
              keys: M.keys,
              sagaState: G
            }), G !== null && (D = tr(D, G), N = $O([...N, ...St(G)]));
          } catch (G) {
            if (a.log && tl("state:saga:error", M.keys, {
              error: G
            }), a.throwSagaError)
              throw G;
            if (!a.ignoreSagaError)
              return a.commitSagaOnError ? D : m;
          }
      }), a.log && nl("state:update", {
        prevState: C,
        updatedState: E,
        newState: m,
        newStateWithSaga: D
      }), D;
    }, []), [w, P] = Qu(() => {
      const C = tr({}, e, l);
      return b(C, C);
    });
    Co(() => {
      var C;
      console.log("__DEV__:createStateContext@useEffect", {
        state: w
      }), (C = _.current) == null || C.call(_, w);
    }, [w]);
    const x = Qt((C) => {
      P((E) => {
        if (typeof C == "function") {
          const m = C(E);
          return m === null ? E : b(E, m);
        } else
          return b(E, C);
      });
    }, [P, b]);
    return /* @__PURE__ */ SO(n.Provider, {
      value: {
        state: c ? tr({}, w, c) : w,
        setState: x
      },
      children: p
    });
  }];
};
export {
  PO as createStateContext
};
