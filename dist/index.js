"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=f(function(y,v){
var h=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,w=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function q(r,e,u,m){var a,s,t,i;if(!h(r))throw new TypeError(n('1XbAh',r));if(!o(e))throw new TypeError(n('1Xb45',e));if(!w(u))throw new TypeError(n('1Xb3N',u));for(t=r.length,a=0,i=t-1;i>=0;i--){if(s=u.call(m,r[i],i,r),s&&(a+=1,a===e))return!0;t!==r.length&&(i+=r.length-t,t=r.length)}return!1}v.exports=q
});var l=g();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
