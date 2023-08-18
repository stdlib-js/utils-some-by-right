// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).someByRight=e()}(this,(function(){"use strict";var t=Math.floor;function e(e){return t(e)===e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,o=Object.defineProperty,i=Object.prototype,u=i.toString,f=i.__defineGetter__,c=i.__defineSetter__,l=i.__lookupGetter__,a=i.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?o:function(t,e,r){var n,o,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(l.call(t,e)||a.call(t,e)?(n=t.__proto__,t.__proto__=i,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&f&&f.call(t,e,r.get),y&&c&&c.call(t,e,r.set),t};var p=n;function y(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(t){return"number"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=v()?function(t){var e,r,n,o,i;if(null==t)return d.call(t);r=t[m],i=m,e=null!=(o=t)&&g.call(o,i);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},j=Number,w=j.prototype.toString;var _=v();function O(t){return"object"==typeof t&&(t instanceof j||(_?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function E(t){return b(t)||O(t)}y(E,"isPrimitive",b),y(E,"isObject",O);var S=Number.POSITIVE_INFINITY,T=j.NEGATIVE_INFINITY;function I(t){return t<S&&t>T&&e(t)}function A(t){return b(t)&&I(t)}function P(t){return O(t)&&I(t.valueOf())}function N(t){return A(t)||P(t)}function B(t){return A(t)&&t>0}function V(t){return P(t)&&t.valueOf()>0}function x(t){return B(t)||V(t)}y(N,"isPrimitive",A),y(N,"isObject",P),y(x,"isPrimitive",B),y(x,"isObject",V);var G=/./;function C(t){return"boolean"==typeof t}var F=Boolean.prototype.toString;var X=v();function k(t){return"object"==typeof t&&(t instanceof Boolean||(X?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function L(t){return C(t)||k(t)}function M(){return new Function("return this;")()}y(L,"isPrimitive",C),y(L,"isObject",k);var R="object"==typeof self?self:null,U="object"==typeof window?window:null,Y="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},q="object"==typeof Y?Y:null;var z=function(t){if(arguments.length){if(!C(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return M()}if(R)return R;if(U)return U;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")}(),D=z.document&&z.document.childNodes,H=Int8Array;function J(){return/^\s*function\s*([^(]*)/i}var K=/^\s*function\s*([^(]*)/i;y(J,"REGEXP",K);var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function W(t){return null!==t&&"object"==typeof t}function Z(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=K.exec(n.toString()))return e[1]}return W(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(W,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Q(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(W));var $="function"==typeof G||"object"==typeof H||"function"==typeof D?function(t){return Z(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Z(t).toLowerCase():e};function tt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,r,n,o){var i,u,f,c;if(!("object"==typeof(c=t)&&null!==c&&"number"==typeof c.length&&e(c.length)&&c.length>=0&&c.length<=9007199254740991))throw new TypeError(tt("1XbAh,O3",t));if(!B(r))throw new TypeError(tt("1Xb45,IB",r));if(!function(t){return"function"===$(t)}(n))throw new TypeError(tt("1Xb3N,G4",n));for(i=0,f=(u=t.length)-1;f>=0;f--){if(n.call(o,t[f],f,t)&&(i+=1)===r)return!0;u!==t.length&&(f+=t.length-u,u=t.length)}return!1}}));
//# sourceMappingURL=browser.js.map
