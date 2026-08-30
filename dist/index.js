"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var g=f(function(y,v){
var h=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,w=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function q(r,e,t,m){var a,s,u,i;if(!h(r))throw new TypeError(n('1XbAh',r));if(!o(e))throw new TypeError(n('1Xb45',e));if(!w(t))throw new TypeError(n('1Xb3N',t));for(u=r.length,a=0,i=u-1;i>=0;i--){if(s=t.call(m,r[i],i,r),s&&(a+=1,a===e))return!0;u!==r.length&&(i+=r.length-u,u=r.length)}return!1}v.exports=q
});var l=g();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
