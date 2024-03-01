// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}var t=9007199254740991,n="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function o(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function s(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,j,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,y,"$1."),t=d.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var S=String.fromCharCode,T=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,o,a,u,l,f,p,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))a+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,T(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+E(h):E(h)+p)),a+=n.arg||"",u+=1}return a}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var N,P=Object.prototype,C=P.toString,$=P.__defineGetter__,R=P.__defineSetter__,B=P.__lookupGetter__,G=P.__lookupSetter__;N=function(){try{return n({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var L=N;function X(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",D=U()?function(e){var r,t,n,i,o;if(null==e)return W.call(e);t=e[q],o=q,r=null!=(i=e)&&Y.call(i,o);try{e[q]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[q]=t:delete e[q],n}:function(e){return W.call(e)},H=Number,J=H.prototype.toString,K=U();function Q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function ee(e){return Z(e)||Q(e)}X(ee,"isPrimitive",Z),X(ee,"isObject",Q);var re=Number.POSITIVE_INFINITY,te=H.NEGATIVE_INFINITY;function ne(e){return e<re&&e>te&&r(e)}function ie(e){return Z(e)&&ne(e)}function oe(e){return Q(e)&&ne(e.valueOf())}function ae(e){return ie(e)||oe(e)}function ce(e){return ie(e)&&e>0}function ue(e){return oe(e)&&e.valueOf()>0}function le(e){return ce(e)||ue(e)}X(ae,"isPrimitive",ie),X(ae,"isObject",oe),X(le,"isPrimitive",ce),X(le,"isObject",ue);var se=/./;function fe(e){return"boolean"==typeof e}var pe=Boolean,ge=Boolean.prototype.toString,de=U();function he(e){return"object"==typeof e&&(e instanceof pe||(de?function(e){try{return ge.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function be(e){return fe(e)||he(e)}X(be,"isPrimitive",fe),X(be,"isObject",he);var ye="object"==typeof self?self:null,ve="object"==typeof window?window:null,we="object"==typeof globalThis?globalThis:null,me=function(e){if(arguments.length){if(!fe(e))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(we)return we;if(ye)return ye;if(ve)return ve;throw new Error("unexpected error. Unable to resolve global object.")}(),je=me.document&&me.document.childNodes,_e=Int8Array;function Ee(){return/^\s*function\s*([^(]*)/i}var Se=/^\s*function\s*([^(]*)/i;X(Ee,"REGEXP",Se);var Te=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function xe(e){return null!==e&&"object"==typeof e}function ke(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Se.exec(n.toString()))return r[1]}return xe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}X(xe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Te(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(xe));var Ie="function"==typeof se||"object"==typeof _e||"function"==typeof je?function(e){return ke(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ke(e).toLowerCase():r};function Oe(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,n,i,o){var a,c,u,l;if(!("object"==typeof(l=e)&&null!==l&&"number"==typeof l.length&&r(l.length)&&l.length>=0&&l.length<=t))throw new TypeError(Oe("1XbAh",e));if(!ce(n))throw new TypeError(Oe("1Xb45",n));if(!function(e){return"function"===Ie(e)}(i))throw new TypeError(Oe("1Xb3N",i));for(a=0,u=(c=e.length)-1;u>=0;u--){if(i.call(o,e[u],u,e)&&(a+=1)===n)return!0;c!==e.length&&(u+=e.length-c,c=e.length)}return!1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).someByRight=r();
//# sourceMappingURL=browser.js.map
