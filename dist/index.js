"use strict";var e=require("react");function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t,n={exports:{}},o={exports:{}},a={};var i,c,u,s,f,p,l,y,d,m,b,v,h,g,S={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function O(){return c||(c=1,"production"===process.env.NODE_ENV?o.exports=function(){if(t)return a;t=1;var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case p:case o:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case s:case l:case b:case m:case u:return e;default:return t}}case n:return t}}}function w(e){return O(e)===p}return a.AsyncMode=f,a.ConcurrentMode=p,a.ContextConsumer=s,a.ContextProvider=u,a.Element=r,a.ForwardRef=l,a.Fragment=o,a.Lazy=b,a.Memo=m,a.Portal=n,a.Profiler=c,a.StrictMode=i,a.Suspense=y,a.isAsyncMode=function(e){return w(e)||O(e)===f},a.isConcurrentMode=w,a.isContextConsumer=function(e){return O(e)===s},a.isContextProvider=function(e){return O(e)===u},a.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},a.isForwardRef=function(e){return O(e)===l},a.isFragment=function(e){return O(e)===o},a.isLazy=function(e){return O(e)===b},a.isMemo=function(e){return O(e)===m},a.isPortal=function(e){return O(e)===n},a.isProfiler=function(e){return O(e)===c},a.isStrictMode=function(e){return O(e)===i},a.isSuspense=function(e){return O(e)===y},a.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===p||e===c||e===i||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===s||e.$$typeof===l||e.$$typeof===h||e.$$typeof===g||e.$$typeof===S||e.$$typeof===v)},a.typeOf=O,a}():o.exports=(i||(i=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,l=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var l=e.$$typeof;switch(l){case r:var m=e.type;switch(m){case u:case s:case n:case a:case o:case p:return m;default:var b=m&&m.$$typeof;switch(b){case c:case f:case d:case y:case i:return b;default:return l}}case t:return l}}}var O=u,w=s,E=c,x=i,$=r,j=f,T=n,P=d,C=y,_=t,N=a,R=o,I=p,k=!1;function M(e){return g(e)===s}S.AsyncMode=O,S.ConcurrentMode=w,S.ContextConsumer=E,S.ContextProvider=x,S.Element=$,S.ForwardRef=j,S.Fragment=T,S.Lazy=P,S.Memo=C,S.Portal=_,S.Profiler=N,S.StrictMode=R,S.Suspense=I,S.isAsyncMode=function(e){return k||(k=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||g(e)===u},S.isConcurrentMode=M,S.isContextConsumer=function(e){return g(e)===c},S.isContextProvider=function(e){return g(e)===i},S.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},S.isForwardRef=function(e){return g(e)===f},S.isFragment=function(e){return g(e)===n},S.isLazy=function(e){return g(e)===d},S.isMemo=function(e){return g(e)===y},S.isPortal=function(e){return g(e)===t},S.isProfiler=function(e){return g(e)===a},S.isStrictMode=function(e){return g(e)===o},S.isSuspense=function(e){return g(e)===p},S.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===s||e===a||e===o||e===p||e===l||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===i||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===h||e.$$typeof===m)},S.typeOf=g}()),S)),o.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function w(){if(s)return u;s=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;return u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))r.call(a,s)&&(c[s]=a[s]);if(e){i=e(a);for(var f=0;f<i.length;f++)t.call(a,i[f])&&(c[i[f]]=a[i[f]])}}return c},u}function E(){if(p)return f;p=1;return f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function x(){return y?l:(y=1,l=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var $=O();n.exports=function(){if(v)return b;v=1;var e=O(),r=w(),t=E(),n=x(),o=function(){if(m)return d;m=1;var e=function(){};if("production"!==process.env.NODE_ENV){var r=E(),t={},n=x();e=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function o(o,a,i,c,u){if("production"!==process.env.NODE_ENV)for(var s in o)if(n(o,s)){var f;try{if("function"!=typeof o[s]){var p=Error((c||"React class")+": "+i+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}f=o[s](a,s,c,i,null,r)}catch(e){f=e}if(!f||f instanceof Error||e((c||"React class")+": type specification of "+i+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof f+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),f instanceof Error&&!(f.message in t)){t[f.message]=!0;var l=u?u():"";e("Failed "+i+" type: "+f.message+(null!=l?l:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(t={})},d=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),b=function(c,u){var s="function"==typeof Symbol&&Symbol.iterator,f="<<anonymous>>",p={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:d(i),arrayOf:function(e){return d((function(r,n,o,a,i){if("function"!=typeof e)return new y("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=r[n];if(!Array.isArray(c))return new y("Invalid "+a+" `"+i+"` of type `"+h(c)+"` supplied to `"+o+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,o,a,i+"["+u+"]",t);if(s instanceof Error)return s}return null}))},element:d((function(e,r,t,n,o){var a=e[r];return c(a)?null:new y("Invalid "+n+" `"+o+"` of type `"+h(a)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:d((function(r,t,n,o,a){var i=r[t];return e.isValidElementType(i)?null:new y("Invalid "+o+" `"+a+"` of type `"+h(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return d((function(r,t,n,o,a){if(!(r[t]instanceof e)){var i=e.name||f;return new y("Invalid "+o+" `"+a+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:f)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var c;return null}))},node:d((function(e,r,t,n,o){return v(e[r])?null:new y("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return d((function(r,o,a,i,c){if("function"!=typeof e)return new y("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var u=r[o],s=h(u);if("object"!==s)return new y("Invalid "+i+" `"+c+"` of type `"+s+"` supplied to `"+a+"`, expected an object.");for(var f in u)if(n(u,f)){var p=e(u,f,a,i,c+"."+f,t);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?d((function(r,t,n,o,a){for(var i=r[t],c=0;c<e.length;c++)if(l(i,e[c]))return null;var u=JSON.stringify(e,(function(e,r){return"symbol"===g(r)?String(r):r}));return new y("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+u+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(o)+" at index "+r+"."),i}return d((function(r,o,a,i,c){for(var u=[],s=0;s<e.length;s++){var f=(0,e[s])(r,o,a,i,c,t);if(null==f)return null;f.data&&n(f.data,"expectedType")&&u.push(f.data.expectedType)}return new y("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return d((function(r,n,o,a,i){var c=r[n],u=h(c);if("object"!==u)return new y("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var s in e){var f=e[s];if("function"!=typeof f)return b(o,a,i,s,g(f));var p=f(c,s,o,a,i+"."+s,t);if(p)return p}return null}))},exact:function(e){return d((function(o,a,i,c,u){var s=o[a],f=h(s);if("object"!==f)return new y("Invalid "+c+" `"+u+"` of type `"+f+"` supplied to `"+i+"`, expected `object`.");var p=r({},o[a],e);for(var l in p){var d=e[l];if(n(e,l)&&"function"!=typeof d)return b(i,c,u,l,g(d));if(!d)return new y("Invalid "+c+" `"+u+"` key `"+l+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(s,l,i,c,u+"."+l,t);if(m)return m}return null}))}};function l(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function y(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function d(e){if("production"!==process.env.NODE_ENV)var r={},n=0;function o(o,i,c,s,p,l,d){if(s=s||f,l=l||c,d!==t){if(u){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=s+":"+c;!r[b]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[b]=!0,n++)}}return null==i[c]?o?null===i[c]?new y("The "+p+" `"+l+"` is marked as required in `"+s+"`, but its value is `null`."):new y("The "+p+" `"+l+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(i,c,s,p,l)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function m(e){return d((function(r,t,n,o,a,i){var c=r[t];return h(c)!==e?new y("Invalid "+o+" `"+a+"` of type `"+g(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,o){return new y((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||c(e))return!0;var r=function(e){var r=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof r)return r}(e);if(!r)return!1;var t,n=r.call(e);if(r!==e.entries){for(;!(t=n.next()).done;)if(!v(t.value))return!1}else for(;!(t=n.next()).done;){var o=t.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function h(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function g(e){if(null==e)return""+e;var r=h(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function S(e){var r=g(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return y.prototype=Error.prototype,p.checkPropTypes=o,p.resetWarningCache=o.resetWarningCache,p.PropTypes=p,p},b}()($.isElement,!0)}else n.exports=function(){if(g)return h;g=1;var e=E();function r(){}function t(){}return t.resetWarningCache=r,h=function(){function n(r,t,n,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return a.PropTypes=a,a}}()();var j=r(n.exports);const T=({amount:r,fromCurrency:t,toCurrency:n,apiKey:o})=>{const[a,i]=e.useState(null),[c,u]=e.useState(null);e.useEffect((()=>{(async()=>{if(r&&t&&n)try{const e=await fetch(`https://api.exchangerate-api.com/v4/latest/${t}`),o=await e.json();if(!o.rates||!o.rates[n])throw new Error("Invalid currency code");const a=o.rates[n],c=(parseFloat(r)*a).toFixed(2);i(c),u(null)}catch(e){u("Error fetching exchange rate"),console.error("Currency conversion error:",e)}else u("Missing required parameters")})()}),[r,t,n,o]);return c?React.createElement("span",{className:"currency-error"},c):a?React.createElement("span",{className:"currency-converted"},{USD:"$",EUR:"€",GBP:"£",JPY:"¥"}[s=n]||s," ",a):React.createElement("span",{className:"currency-loading"},"Converting...");var s};T.propTypes={amount:j.oneOfType([j.string,j.number]).isRequired,fromCurrency:j.string.isRequired,toCurrency:j.string.isRequired,apiKey:j.string},module.exports=T;
//# sourceMappingURL=index.js.map
