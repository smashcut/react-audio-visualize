(function(V,S){typeof exports=="object"&&typeof module<"u"?S(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],S):(V=typeof globalThis<"u"?globalThis:V||self,S(V.AudioVisualize={},V.React))})(this,function(V,S){"use strict";var Z={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ie(){if(se)return B;se=1;var d=S,p=Symbol.for("react.element"),T=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,y=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function _(s,c,h){var a,i={},f=null,O=null;h!==void 0&&(f=""+h),c.key!==void 0&&(f=""+c.key),c.ref!==void 0&&(O=c.ref);for(a in c)R.call(c,a)&&!E.hasOwnProperty(a)&&(i[a]=c[a]);if(s&&s.defaultProps)for(a in c=s.defaultProps,c)i[a]===void 0&&(i[a]=c[a]);return{$$typeof:p,type:s,key:f,ref:O,props:i,_owner:y.current}}return B.Fragment=T,B.jsx=_,B.jsxs=_,B}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Ve(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&function(){var d=S,p=Symbol.for("react.element"),T=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),a=Symbol.for("react.suspense_list"),i=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),P=Symbol.iterator,k="@@iterator";function F(e){if(e===null||typeof e!="object")return null;var r=P&&e[P]||e[k];return typeof r=="function"?r:null}var m=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];w("error",e,t)}}function w(e,r,t){{var n=m.ReactDebugCurrentFrame,l=n.getStackAddendum();l!==""&&(r+="%s",t=t.concat([l]));var g=t.map(function(u){return String(u)});g.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,g)}}var A=!1,Be=!1,Ne=!1,Ue=!1,ze=!1,le;le=Symbol.for("react.module.reference");function Je(e){return!!(typeof e=="string"||typeof e=="function"||e===R||e===E||ze||e===y||e===h||e===a||Ue||e===O||A||Be||Ne||typeof e=="object"&&e!==null&&(e.$$typeof===f||e.$$typeof===i||e.$$typeof===_||e.$$typeof===s||e.$$typeof===c||e.$$typeof===le||e.getModuleId!==void 0))}function Ke(e,r,t){var n=e.displayName;if(n)return n;var l=r.displayName||r.name||"";return l!==""?t+"("+l+")":t}function de(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case T:return"Portal";case E:return"Profiler";case y:return"StrictMode";case h:return"Suspense";case a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case s:var r=e;return de(r)+".Consumer";case _:var t=e;return de(t._context)+".Provider";case c:return Ke(e,e.render,"ForwardRef");case i:var n=e.displayName||null;return n!==null?n:I(e.type)||"Memo";case f:{var l=e,g=l._payload,u=l._init;try{return I(u(g))}catch{return null}}}return null}var Y=Object.assign,U=0,ve,pe,he,ge,me,ye,Re;function Ee(){}Ee.__reactDisabledLog=!0;function Ge(){{if(U===0){ve=console.log,pe=console.info,he=console.warn,ge=console.error,me=console.group,ye=console.groupCollapsed,Re=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ee,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function Xe(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Y({},e,{value:ve}),info:Y({},e,{value:pe}),warn:Y({},e,{value:he}),error:Y({},e,{value:ge}),group:Y({},e,{value:me}),groupCollapsed:Y({},e,{value:ye}),groupEnd:Y({},e,{value:Re})})}U<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var $=m.ReactCurrentDispatcher,q;function K(e,r,t){{if(q===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);q=n&&n[1]||""}return`
`+q+e}}var ee=!1,G;{var He=typeof WeakMap=="function"?WeakMap:Map;G=new He}function be(e,r){if(!e||ee)return"";{var t=G.get(e);if(t!==void 0)return t}var n;ee=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var g;g=$.current,$.current=null,Ge();try{if(r){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(j){n=j}Reflect.construct(e,[],u)}else{try{u.call()}catch(j){n=j}e.call(u.prototype)}}else{try{throw Error()}catch(j){n=j}e()}}catch(j){if(j&&n&&typeof j.stack=="string"){for(var o=j.stack.split(`
`),C=n.stack.split(`
`),b=o.length-1,x=C.length-1;b>=1&&x>=0&&o[b]!==C[x];)x--;for(;b>=1&&x>=0;b--,x--)if(o[b]!==C[x]){if(b!==1||x!==1)do if(b--,x--,x<0||o[b]!==C[x]){var D=`
`+o[b].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,D),D}while(b>=1&&x>=0);break}}}finally{ee=!1,$.current=g,Xe(),Error.prepareStackTrace=l}var W=e?e.displayName||e.name:"",M=W?K(W):"";return typeof e=="function"&&G.set(e,M),M}function Ze(e,r,t){return be(e,!1)}function Qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function X(e,r,t){if(e==null)return"";if(typeof e=="function")return be(e,Qe(e));if(typeof e=="string")return K(e);switch(e){case h:return K("Suspense");case a:return K("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ze(e.render);case i:return X(e.type,r,t);case f:{var n=e,l=n._payload,g=n._init;try{return X(g(l),r,t)}catch{}}}return""}var z=Object.prototype.hasOwnProperty,_e={},xe=m.ReactDebugCurrentFrame;function H(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);xe.setExtraStackFrame(t)}else xe.setExtraStackFrame(null)}function $e(e,r,t,n,l){{var g=Function.call.bind(z);for(var u in e)if(g(e,u)){var o=void 0;try{if(typeof e[u]!="function"){var C=Error((n||"React class")+": "+t+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}o=e[u](r,u,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(b){o=b}o&&!(o instanceof Error)&&(H(l),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,u,typeof o),H(null)),o instanceof Error&&!(o.message in _e)&&(_e[o.message]=!0,H(l),v("Failed %s type: %s",t,o.message),H(null))}}}var qe=Array.isArray;function re(e){return qe(e)}function er(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function rr(e){try{return Se(e),!1}catch{return!0}}function Se(e){return""+e}function Te(e){if(rr(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",er(e)),Se(e)}var J=m.ReactCurrentOwner,tr={key:!0,ref:!0,__self:!0,__source:!0},we,Oe,te;te={};function nr(e){if(z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ar(e){if(z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ir(e,r){if(typeof e.ref=="string"&&J.current&&r&&J.current.stateNode!==r){var t=I(J.current.type);te[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',I(J.current.type),e.ref),te[t]=!0)}}function or(e,r){{var t=function(){we||(we=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function sr(e,r){{var t=function(){Oe||(Oe=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ur=function(e,r,t,n,l,g,u){var o={$$typeof:p,type:e,key:r,ref:t,props:u,_owner:g};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:l}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function cr(e,r,t,n,l){{var g,u={},o=null,C=null;t!==void 0&&(Te(t),o=""+t),ar(r)&&(Te(r.key),o=""+r.key),nr(r)&&(C=r.ref,ir(r,l));for(g in r)z.call(r,g)&&!tr.hasOwnProperty(g)&&(u[g]=r[g]);if(e&&e.defaultProps){var b=e.defaultProps;for(g in b)u[g]===void 0&&(u[g]=b[g])}if(o||C){var x=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&or(u,x),C&&sr(u,x)}return ur(e,o,C,l,n,J.current,u)}}var ne=m.ReactCurrentOwner,Pe=m.ReactDebugCurrentFrame;function L(e){if(e){var r=e._owner,t=X(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var ae;ae=!1;function ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function Ce(){{if(ne.current){var e=I(ne.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var je={};function lr(e){{var r=Ce();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ae(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=lr(r);if(je[t])return;je[t]=!0;var n="";e&&e._owner&&e._owner!==ne.current&&(n=" It was passed a child from "+I(e._owner.type)+"."),L(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),L(null)}}function De(e,r){{if(typeof e!="object")return;if(re(e))for(var t=0;t<e.length;t++){var n=e[t];ie(n)&&Ae(n,r)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var l=F(e);if(typeof l=="function"&&l!==e.entries)for(var g=l.call(e),u;!(u=g.next()).done;)ie(u.value)&&Ae(u.value,r)}}}function dr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===i))t=r.propTypes;else return;if(t){var n=I(r);$e(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ae){ae=!0;var l=I(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",l||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function vr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){L(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),L(null);break}}e.ref!==null&&(L(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}var ke={};function Fe(e,r,t,n,l,g){{var u=Je(e);if(!u){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var C=fr(l);C?o+=C:o+=Ce();var b;e===null?b="null":re(e)?b="array":e!==void 0&&e.$$typeof===p?(b="<"+(I(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):b=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",b,o)}var x=cr(e,r,t,l,g);if(x==null)return x;if(u){var D=r.children;if(D!==void 0)if(n)if(re(D)){for(var W=0;W<D.length;W++)De(D[W],e);Object.freeze&&Object.freeze(D)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else De(D,e)}if(z.call(r,"key")){var M=I(e),j=Object.keys(r).filter(function(Rr){return Rr!=="key"}),oe=j.length>0?"{key: someKey, "+j.join(": ..., ")+": ...}":"{key: someKey}";if(!ke[M+oe]){var yr=j.length>0?"{"+j.join(": ..., ")+": ...}":"{}";v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,oe,M,yr,M),ke[M+oe]=!0}}return e===R?vr(x):dr(x),x}}function pr(e,r,t){return Fe(e,r,t,!0)}function hr(e,r,t){return Fe(e,r,t,!1)}var gr=hr,mr=pr;N.Fragment=R,N.jsx=gr,N.jsxs=mr}()),N}process.env.NODE_ENV==="production"?Z.exports=Ie():Z.exports=Ve();var ce=Z.exports;const Ye=(d,p,T,R)=>{let y=p/(T+R),E=Math.floor(d.length/y);y>d.length&&(y=d.length,E=1);const _=[];for(let s=0;s<y;s++){let c=0;for(let h=0;h<E&&s*E+h<d.length;h++)c+=d[s*E+h];_.push(c/E)}return _},Me=(d,p,T,R,y,E)=>{const _=p.height/2,s=p.getContext("2d");s&&(s.clearRect(0,0,p.width,p.height),y!=="transparent"&&(s.fillStyle=y,s.fillRect(0,0,p.width,p.height)),d.forEach((c,h)=>{s.fillStyle=E;const a=h*(T+R),i=_-c/2,f=T,O=c||1;s.beginPath(),s.roundRect?(s.roundRect(a,i,f,O,50),s.fill()):s.fillRect(a,i,f,O)}))},Le=({mediaRecorder:d,width:p="100%",height:T="100%",barWidth:R=2,gap:y=1,backgroundColor:E="transparent",barColor:_="rgb(160, 198, 255)",fftSize:s=1024,maxDecibels:c=-10,minDecibels:h=-90,smoothingTimeConstant:a=.4})=>{const[i]=S.useState(()=>new AudioContext),[f,O]=S.useState(),P=S.useRef(null);S.useEffect(()=>{if(!d.stream)return;const m=i.createAnalyser();O(m),m.fftSize=s,m.minDecibels=h,m.maxDecibels=c,m.smoothingTimeConstant=a,i.createMediaStreamSource(d.stream).connect(m)},[d.stream]),S.useEffect(()=>{f&&d.state==="recording"&&k()},[f,d.state]);const k=S.useCallback(()=>{if(!f)return;const m=new Uint8Array(f==null?void 0:f.frequencyBinCount);d.state==="recording"?(f==null||f.getByteFrequencyData(m),F(m),requestAnimationFrame(k)):d.state==="paused"?F(m):d.state==="inactive"&&i.state!=="closed"&&i.close()},[f,i.state]),F=m=>{if(!P.current)return;const v=Ye(m,P.current.width,R,y);Me(v,P.current,R,y,E,_)};return ce.jsx("canvas",{ref:P,width:p,height:T,style:{aspectRatio:"unset"}})},We=(d,p,T,R,y)=>{const E=d.getChannelData(0),_=T/(R+y),s=Math.floor(E.length/_),c=p/2;let h=[],a=0;for(let i=0;i<_;i++){const f=[];let O=0;const P=[];let k=0;for(let w=0;w<s&&i*s+w<d.length;w++){const A=E[i*s+w];A<=0&&(f.push(A),O++),A>0&&(P.push(A),k++)}const F=f.reduce((w,A)=>w+A,0)/O,v={max:P.reduce((w,A)=>w+A,0)/k,min:F};v.max>a&&(a=v.max),Math.abs(v.min)>a&&(a=Math.abs(v.min)),h.push(v)}if(c*.8>a*c){const i=c*.8/a;h=h.map(f=>({max:f.max*i,min:f.min*i}))}return h},Q=(d,p,T,R,y,E,_,s=0,c=1)=>{const h=p.height/2,a=p.getContext("2d");if(!a)return;a.clearRect(0,0,p.width,p.height),y!=="transparent"&&(a.fillStyle=y,a.fillRect(0,0,p.width,p.height));const i=(s||0)/c;d.forEach((f,O)=>{const P=O/d.length,k=i>P;a.fillStyle=k&&_?_:E;const F=O*(T+R),m=h+f.min,v=T,w=h+f.max-m;a.beginPath(),a.roundRect?(a.roundRect(F,m,v,w,50),a.fill()):a.fillRect(F,m,v,w)})},fe=S.forwardRef(({blob:d,width:p,height:T,barWidth:R=2,gap:y=1,currentTime:E,style:_,backgroundColor:s="transparent",barColor:c="rgb(184, 184, 184)",barPlayedColor:h="rgb(160, 198, 255)"},a)=>{const i=S.useRef(null),[f,O]=S.useState([]),[P,k]=S.useState(0);return S.useImperativeHandle(a,()=>i.current,[]),S.useEffect(()=>{(async()=>{if(!i.current)return;if(!d){const w=Array.from({length:100},()=>({max:0,min:0}));Q(w,i.current,R,y,s,c,h);return}const m=await d.arrayBuffer();await new AudioContext().decodeAudioData(m,w=>{if(!i.current)return;k(w.duration);const A=We(w,T,p,R,y);O(A),Q(A,i.current,R,y,s,c,h)})})()},[d,i.current]),S.useEffect(()=>{i.current&&Q(f,i.current,R,y,s,c,h,E,P)},[E,P]),ce.jsx("canvas",{ref:i,width:p,height:T,style:{..._}})});fe.displayName="AudioVisualizer",V.AudioVisualizer=fe,V.LiveAudioVisualizer=Le,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"})});
