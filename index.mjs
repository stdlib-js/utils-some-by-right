// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(i,n,o,d){var l,m,h;if(!t(i))throw new TypeError(s("1XbAh",i));if(!r(n))throw new TypeError(s("1Xb45",n));if(!e(o))throw new TypeError(s("1Xb3N",o));for(l=0,h=(m=i.length)-1;h>=0;h--){if(o.call(d,i[h],h,i)&&(l+=1)===n)return!0;m!==i.length&&(h+=i.length-m,m=i.length)}return!1}export{i as default};
//# sourceMappingURL=index.mjs.map