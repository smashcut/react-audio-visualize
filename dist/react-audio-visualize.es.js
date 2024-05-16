import ke, { useState as K, useRef as Fe, useEffect as G, useCallback as hr, forwardRef as gr, useImperativeHandle as mr } from "react";
var oe = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function yr() {
  if (Ae)
    return B;
  Ae = 1;
  var d = ke, p = Symbol.for("react.element"), w = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, y = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(s, c, h) {
    var a, i = {}, l = null, S = null;
    h !== void 0 && (l = "" + h), c.key !== void 0 && (l = "" + c.key), c.ref !== void 0 && (S = c.ref);
    for (a in c)
      R.call(c, a) && !E.hasOwnProperty(a) && (i[a] = c[a]);
    if (s && s.defaultProps)
      for (a in c = s.defaultProps, c)
        i[a] === void 0 && (i[a] = c[a]);
    return { $$typeof: p, type: s, key: l, ref: S, props: i, _owner: y.current };
  }
  return B.Fragment = w, B.jsx = b, B.jsxs = b, B;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Rr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var d = ke, p = Symbol.for("react.element"), w = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = Symbol.iterator, D = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[D];
      return typeof r == "function" ? r : null;
    }
    var m = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        T("error", e, t);
      }
    }
    function T(e, r, t) {
      {
        var n = m.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var g = t.map(function(u) {
          return String(u);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var j = !1, $e = !1, Ye = !1, Me = !1, Ve = !1, se;
    se = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === E || Ve || e === y || e === h || e === a || Me || e === S || j || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === l || e.$$typeof === i || e.$$typeof === b || e.$$typeof === s || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case w:
          return "Portal";
        case E:
          return "Profiler";
        case y:
          return "StrictMode";
        case h:
          return "Suspense";
        case a:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var r = e;
            return ue(r) + ".Consumer";
          case b:
            var t = e;
            return ue(t._context) + ".Provider";
          case c:
            return We(e, e.render, "ForwardRef");
          case i:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case l: {
            var f = e, g = f._payload, u = f._init;
            try {
              return F(u(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, V = 0, ce, le, fe, de, ve, pe, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Be() {
      {
        if (V === 0) {
          ce = console.log, le = console.info, fe = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function Ne() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ce
            }),
            info: I({}, e, {
              value: le
            }),
            warn: I({}, e, {
              value: fe
            }),
            error: I({}, e, {
              value: de
            }),
            group: I({}, e, {
              value: ve
            }),
            groupCollapsed: I({}, e, {
              value: pe
            }),
            groupEnd: I({}, e, {
              value: he
            })
          });
        }
        V < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = m.ReactCurrentDispatcher, H;
    function U(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, z;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Ue();
    }
    function me(e, r) {
      if (!e || Z)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = X.current, X.current = null, Be();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (P) {
              n = P;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (P) {
              n = P;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            n = P;
          }
          e();
        }
      } catch (P) {
        if (P && n && typeof P.stack == "string") {
          for (var o = P.stack.split(`
`), C = n.stack.split(`
`), _ = o.length - 1, x = C.length - 1; _ >= 1 && x >= 0 && o[_] !== C[x]; )
            x--;
          for (; _ >= 1 && x >= 0; _--, x--)
            if (o[_] !== C[x]) {
              if (_ !== 1 || x !== 1)
                do
                  if (_--, x--, x < 0 || o[_] !== C[x]) {
                    var A = `
` + o[_].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, A), A;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = g, Ne(), Error.prepareStackTrace = f;
      }
      var M = e ? e.displayName || e.name : "", $ = M ? U(M) : "";
      return typeof e == "function" && z.set(e, $), $;
    }
    function ze(e, r, t) {
      return me(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Je(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case h:
          return U("Suspense");
        case a:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return ze(e.render);
          case i:
            return J(e.type, r, t);
          case l: {
            var n = e, f = n._payload, g = n._init;
            try {
              return J(g(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, ye = {}, Re = m.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, f) {
      {
        var g = Function.call.bind(L);
        for (var u in e)
          if (g(e, u)) {
            var o = void 0;
            try {
              if (typeof e[u] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              o = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              o = _;
            }
            o && !(o instanceof Error) && (q(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof o), q(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, q(f), v("Failed %s type: %s", t, o.message), q(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Q(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function _e(e) {
      if (Xe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), Ee(e);
    }
    var W = m.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, xe, ee;
    ee = {};
    function Ze(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = F(W.current.type);
        ee[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(W.current.type), e.ref), ee[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, f, g, u) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, n, f) {
      {
        var g, u = {}, o = null, C = null;
        t !== void 0 && (_e(t), o = "" + t), Qe(r) && (_e(r.key), o = "" + r.key), Ze(r) && (C = r.ref, er(r, f));
        for (g in r)
          L.call(r, g) && !He.hasOwnProperty(g) && (u[g] = r[g]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (g in _)
            u[g] === void 0 && (u[g] = _[g]);
        }
        if (o || C) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(u, x), C && tr(u, x);
        }
        return nr(e, o, C, f, n, W.current, u);
      }
    }
    var re = m.ReactCurrentOwner, we = m.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Te() {
      {
        if (re.current) {
          var e = F(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Se = {};
    function or(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + F(e._owner.type) + "."), Y(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Oe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = k(e);
          if (typeof f == "function" && f !== e.entries)
            for (var g = f.call(e), u; !(u = g.next()).done; )
              ne(u.value) && Oe(u.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === i))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = F(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var f = F(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Pe = {};
    function je(e, r, t, n, f, g) {
      {
        var u = Le(e);
        if (!u) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = ir(f);
          C ? o += C : o += Te();
          var _;
          e === null ? _ = "null" : Q(e) ? _ = "array" : e !== void 0 && e.$$typeof === p ? (_ = "<" + (F(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, o);
        }
        var x = ar(e, r, t, f, g);
        if (x == null)
          return x;
        if (u) {
          var A = r.children;
          if (A !== void 0)
            if (n)
              if (Q(A)) {
                for (var M = 0; M < A.length; M++)
                  Ce(A[M], e);
                Object.freeze && Object.freeze(A);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(A, e);
        }
        if (L.call(r, "key")) {
          var $ = F(e), P = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ae = P.length > 0 ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[$ + ae]) {
            var vr = P.length > 0 ? "{" + P.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, $, vr, $), Pe[$ + ae] = !0;
          }
        }
        return e === R ? ur(x) : sr(x), x;
      }
    }
    function cr(e, r, t) {
      return je(e, r, t, !0);
    }
    function lr(e, r, t) {
      return je(e, r, t, !1);
    }
    var fr = lr, dr = cr;
    N.Fragment = R, N.jsx = fr, N.jsxs = dr;
  }()), N;
}
process.env.NODE_ENV === "production" ? oe.exports = yr() : oe.exports = Rr();
var Ie = oe.exports;
const Er = (d, p, w, R) => {
  let y = p / (w + R), E = Math.floor(d.length / y);
  y > d.length && (y = d.length, E = 1);
  const b = [];
  for (let s = 0; s < y; s++) {
    let c = 0;
    for (let h = 0; h < E && s * E + h < d.length; h++)
      c += d[s * E + h];
    b.push(c / E);
  }
  return b;
}, _r = (d, p, w, R, y, E) => {
  const b = p.height / 2, s = p.getContext("2d");
  s && (s.clearRect(0, 0, p.width, p.height), y !== "transparent" && (s.fillStyle = y, s.fillRect(0, 0, p.width, p.height)), d.forEach((c, h) => {
    s.fillStyle = E;
    const a = h * (w + R), i = b - c / 2, l = w, S = c || 1;
    s.beginPath(), s.roundRect ? (s.roundRect(a, i, l, S, 50), s.fill()) : s.fillRect(a, i, l, S);
  }));
}, Tr = ({
  mediaRecorder: d,
  width: p = "100%",
  height: w = "100%",
  barWidth: R = 2,
  gap: y = 1,
  backgroundColor: E = "transparent",
  barColor: b = "rgb(160, 198, 255)",
  fftSize: s = 1024,
  maxDecibels: c = -10,
  minDecibels: h = -90,
  smoothingTimeConstant: a = 0.4
}) => {
  const [i] = K(() => new AudioContext()), [l, S] = K(), O = Fe(null);
  G(() => {
    if (!d.stream)
      return;
    const m = i.createAnalyser();
    S(m), m.fftSize = s, m.minDecibels = h, m.maxDecibels = c, m.smoothingTimeConstant = a, i.createMediaStreamSource(d.stream).connect(m);
  }, [d.stream]), G(() => {
    l && d.state === "recording" && D();
  }, [l, d.state]);
  const D = hr(() => {
    if (!l)
      return;
    const m = new Uint8Array(l == null ? void 0 : l.frequencyBinCount);
    d.state === "recording" ? (l == null || l.getByteFrequencyData(m), k(m), requestAnimationFrame(D)) : d.state === "paused" ? k(m) : d.state === "inactive" && i.state !== "closed" && i.close();
  }, [l, i.state]), k = (m) => {
    if (!O.current)
      return;
    const v = Er(
      m,
      O.current.width,
      R,
      y
    );
    _r(
      v,
      O.current,
      R,
      y,
      E,
      b
    );
  };
  return /* @__PURE__ */ Ie.jsx(
    "canvas",
    {
      ref: O,
      width: p,
      height: w,
      style: {
        aspectRatio: "unset"
      }
    }
  );
}, br = (d, p, w, R, y) => {
  const E = d.getChannelData(0), b = w / (R + y), s = Math.floor(E.length / b), c = p / 2;
  let h = [], a = 0;
  for (let i = 0; i < b; i++) {
    const l = [];
    let S = 0;
    const O = [];
    let D = 0;
    for (let T = 0; T < s && i * s + T < d.length; T++) {
      const j = E[i * s + T];
      j <= 0 && (l.push(j), S++), j > 0 && (O.push(j), D++);
    }
    const k = l.reduce((T, j) => T + j, 0) / S, v = { max: O.reduce((T, j) => T + j, 0) / D, min: k };
    v.max > a && (a = v.max), Math.abs(v.min) > a && (a = Math.abs(v.min)), h.push(v);
  }
  if (c * 0.8 > a * c) {
    const i = c * 0.8 / a;
    h = h.map((l) => ({
      max: l.max * i,
      min: l.min * i
    }));
  }
  return h;
}, ie = (d, p, w, R, y, E, b, s = 0, c = 1) => {
  const h = p.height / 2, a = p.getContext("2d");
  if (!a)
    return;
  a.clearRect(0, 0, p.width, p.height), y !== "transparent" && (a.fillStyle = y, a.fillRect(0, 0, p.width, p.height));
  const i = (s || 0) / c;
  d.forEach((l, S) => {
    const O = S / d.length, D = i > O;
    a.fillStyle = D && b ? b : E;
    const k = S * (w + R), m = h + l.min, v = w, T = h + l.max - m;
    a.beginPath(), a.roundRect ? (a.roundRect(k, m, v, T, 50), a.fill()) : a.fillRect(k, m, v, T);
  });
}, xr = gr(
  ({
    blob: d,
    width: p,
    height: w,
    barWidth: R = 2,
    gap: y = 1,
    currentTime: E,
    style: b,
    backgroundColor: s = "transparent",
    barColor: c = "rgb(184, 184, 184)",
    barPlayedColor: h = "rgb(160, 198, 255)"
  }, a) => {
    const i = Fe(null), [l, S] = K([]), [O, D] = K(0);
    return mr(
      a,
      () => i.current,
      []
    ), G(() => {
      (async () => {
        if (!i.current)
          return;
        if (!d) {
          const T = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ie(
            T,
            i.current,
            R,
            y,
            s,
            c,
            h
          );
          return;
        }
        const m = await d.arrayBuffer();
        await new AudioContext().decodeAudioData(m, (T) => {
          if (!i.current)
            return;
          D(T.duration);
          const j = br(
            T,
            w,
            p,
            R,
            y
          );
          S(j), ie(
            j,
            i.current,
            R,
            y,
            s,
            c,
            h
          );
        });
      })();
    }, [d, i.current]), G(() => {
      i.current && ie(
        l,
        i.current,
        R,
        y,
        s,
        c,
        h,
        E,
        O
      );
    }, [E, O]), /* @__PURE__ */ Ie.jsx(
      "canvas",
      {
        ref: i,
        width: p,
        height: w,
        style: {
          ...b
        }
      }
    );
  }
);
xr.displayName = "AudioVisualizer";
export {
  xr as AudioVisualizer,
  Tr as LiveAudioVisualizer
};
