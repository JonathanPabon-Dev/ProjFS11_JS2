function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequire0783;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},n.parcelRequire0783=s),s.register("kyEFX",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var s={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},r=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s("kyEFX").register(JSON.parse('{"7bk21":"index.54752283.js","5UBio":"not-found.06cb99de.jpg"}'));var o,a,c,l=o={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function d(t){if(a===setTimeout)return setTimeout(t,0);if((a===u||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:u}catch(t){a=u}try{c="function"==typeof clearTimeout?clearTimeout:h}catch(t){c=h}}();var f,p=[],m=!1,g=-1;function y(){m&&f&&(m=!1,f.length?p=f.concat(p):g=-1,p.length&&v())}function v(){if(!m){var t=d(y);m=!0;for(var e=p.length;e;){for(f=p,p=[];++g<e;)f&&f[g].run();g=-1,e=p.length}f=null,m=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===h||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function w(t,e){this.fun=t,this.array=e}function b(){}l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new w(t,e)),1!==p.length||m||d(v)},w.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=b,l.addListener=b,l.once=b,l.off=b,l.removeListener=b,l.removeAllListeners=b,l.emit=b,l.prependListener=b,l.prependOnceListener=b,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const x=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new _;const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const E=function(t){return function(t){const e=x(t);return k.encodeByteArray(e,!0)}(t).replace(/\./g,"")},I=function(t){try{return k.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,C=()=>{try{return T()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&I(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},S=t=>{var e,n;return null===(n=null===(e=C())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},N=t=>{const e=S(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},A=()=>{var t;return null===(t=C())||void 0===t?void 0:t.config},R=t=>{var e;return null===(e=C())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[E(JSON.stringify({alg:"none",type:"JWT"})),E(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function M(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function P(){const t=O();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F(){return!function(){var t;const e=null===(t=C())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(t){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function U(){try{return"object"==typeof indexedDB}catch(t){return!1}}class V extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(B,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new V(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const B=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function W(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(q(n)&&q(s)){if(!W(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function q(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function K(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e){const n=new X(t,e);return n.subscribe.bind(n)}class X{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Q),void 0===i.error&&(i.error=Q),void 0===i.complete&&(i.complete=Q);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function Q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(t){return t&&t._delegate?t._delegate:t}class Y{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new L;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class tt{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Z(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=[];var nt,it;(it=nt||(nt={}))[it.DEBUG=0]="DEBUG",it[it.VERBOSE=1]="VERBOSE",it[it.INFO=2]="INFO",it[it.WARN=3]="WARN",it[it.ERROR=4]="ERROR",it[it.SILENT=5]="SILENT";const rt={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},st=nt.INFO,ot={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},at=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=ot[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class ct{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?rt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...t),this._logHandler(this,nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...t),this._logHandler(this,nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...t),this._logHandler(this,nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...t),this._logHandler(this,nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...t),this._logHandler(this,nt.ERROR,...t)}constructor(t){this.name=t,this._logLevel=st,this._logHandler=at,this._userLogHandler=null,et.push(this)}}let lt,ut;const ht=new WeakMap,dt=new WeakMap,ft=new WeakMap,pt=new WeakMap,mt=new WeakMap;let gt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return dt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ft.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function yt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(bt(this),e),wt(ht.get(this))}:function(...e){return wt(t.apply(bt(this),e))}:function(e,...n){const i=t.call(bt(this),e,...n);return ft.set(i,e.sort?e.sort():[e]),wt(i)}}function vt(t){return"function"==typeof t?yt(t):(t instanceof IDBTransaction&&function(t){if(dt.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));dt.set(t,e)}(t),e=t,(lt||(lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,gt):t);var e}function wt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(wt(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&ht.set(e,t)})).catch((()=>{})),mt.set(e,t),e}(t);if(pt.has(t))return pt.get(t);const e=vt(t);return e!==t&&(pt.set(t,e),mt.set(e,t)),e}const bt=t=>mt.get(t);function xt(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=wt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(wt(o.result),t.oldVersion,t.newVersion,wt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const kt=["get","getKey","getAll","getAllKeys","count"],_t=["put","add","delete","clear"],Et=new Map;function It(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Et.get(e))return Et.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=_t.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!kt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Et.set(e,s),s}gt=(t=>({...t,get:(e,n,i)=>It(e,n)||t.get(e,n,i),has:(e,n)=>!!It(e,n)||t.has(e,n)}))(gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ct=new ct("@firebase/app"),St={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Nt=new Map,At=new Map;function Rt(t,e){try{t.container.addComponent(e)}catch(n){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if(At.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;At.set(e,t);for(const e of Nt.values())Rt(e,t);return!0}function Dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ot=new z("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Y("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Ot.create("bad-app-name",{appName:String(r)});if(n||(n=A()),!n)throw Ot.create("no-options");const s=Nt.get(r);if(s){if(W(n,s.options)&&W(i,s.config))return s;throw Ot.create("duplicate-app",{appName:r})}const o=new tt(r);for(const t of At.values())o.addComponent(t);const a=new Mt(n,i,o);return Nt.set(r,a),a}function Ft(t="[DEFAULT]"){const e=Nt.get(t);if(!e&&"[DEFAULT]"===t&&A())return Pt();if(!e)throw Ot.create("no-app",{appName:t});return e}function Ut(t,e,n){var i;let r=null!==(i=St[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ct.warn(t.join(" "))}Lt(new Y(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let Vt=null;function zt(){return Vt||(Vt=xt("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore("firebase-heartbeat-store")}catch(t){console.warn(t)}}}).catch((t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})}))),Vt}async function Bt(t,e){try{const n=(await zt()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(e,jt(t)),await n.done}catch(t){if(t instanceof V)Ct.warn(t.message);else{const e=Ot.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ct.warn(e.message)}}}function jt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qt();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=qt(),{heartbeatsToSend:n,unsentEntries:i}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),$t(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),$t(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=E(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ht(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function qt(){return(new Date).toISOString().substring(0,10)}class Ht{async runIndexedDBEnvironmentCheck(){return!!U()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await zt()).transaction("firebase-heartbeat-store"),n=await e.objectStore("firebase-heartbeat-store").get(jt(t));return await e.done,n}catch(t){if(t instanceof V)Ct.warn(t.message);else{const e=Ot.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ct.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Bt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Bt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function $t(t){return E(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;Kt="",Lt(new Y("platform-logger",(t=>new Tt(t)),"PRIVATE")),Lt(new Y("heartbeat",(t=>new Wt(t)),"PRIVATE")),Ut("@firebase/app","0.9.28",Kt),Ut("@firebase/app","0.9.28","esm2017"),Ut("fire-js","");function Gt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function Xt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qt=Xt,Jt=new z("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Yt=new ct("@firebase/auth");function Zt(t,...e){Yt.logLevel<=nt.ERROR&&Yt.error(`Auth (10.8.1): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,...e){throw re(t,...e)}function ee(t,...e){return re(t,...e)}function ne(t,e,n){const i=Object.assign(Object.assign({},Qt()),{[e]:n});return new z("auth","Firebase",i).create(e,{appName:t.name})}function ie(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&te(t,"argument-error"),ne(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function re(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Jt.create(t,...e)}function se(t,e,...n){if(!t)throw re(e,...n)}function oe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zt(e),new Error(e)}function ae(t,e){t||oe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function le(){return"http:"===ue()||"https:"===ue()}function ue(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(le()||M()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{get(){return he()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,ae(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(O())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e){ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},ge=new de(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ve(t,e,n,i,r={}){return we(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=H(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),pe.fetch()(xe(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function we(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},me),e);try{const e=new _e(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Ee(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ee(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ee(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ee(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ne(t,a,o);te(t,a)}}catch(e){if(e instanceof V)throw e;te(t,"network-request-failed",{message:String(e)})}}async function be(t,e,n,i,r={}){const s=await ve(t,e,n,i,r);return"mfaPendingCredential"in s&&te(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xe(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?fe(t.config,r):`${t.config.apiScheme}://${r}`}function ke(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _e{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(ee(this.auth,"network-request-failed"))),ge.get())}))}}function Ee(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ee(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){return void 0!==t&&void 0!==t.enterprise}class Te{getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return ke(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e){return ve(t,"GET","/v2/recaptchaConfig",ye(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Se(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return 1e3*Number(t)}function Ae(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return Zt("JWT malformed, contained fewer than 3 sections"),null;try{const t=I(n);return t?JSON.parse(t):(Zt("Failed to decode base64 JWT payload"),null)}catch(t){return Zt("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof V&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Le{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{_initializeTime(){this.lastSignInTime=Se(this.lastLoginAt),this.creationTime=Se(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Re(t,async function(t,e){return ve(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));se(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Gt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new De(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){se(t.idToken,"internal-error"),se(void 0!==t.idToken,"internal-error"),se(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ae(t);return se(e,"internal-error"),se(void 0!==e.exp,"internal-error"),se(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return se(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await we(t,{},(async()=>{const n=H({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=xe(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",pe.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new Me;return n&&(se("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(se("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(se("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Me,this.toJSON())}_performRefresh(){return oe("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){se("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Fe{async getIdToken(t){const e=await Re(this,this.stsTokenManager.getToken(this.auth,t));return se(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=J(t),i=await n.getIdToken(e),r=Ae(i);se(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Se(Ne(r.auth_time)),issuedAtTime:Se(Ne(r.iat)),expirationTime:Se(Ne(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=J(t);await Oe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(se(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Fe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Oe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Re(this,async function(t,e){return ve(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:x,stsTokenManager:k}=e;se(v&&k,t,"internal-error");const _=Me.fromJSON(this.name,k);se("string"==typeof v,t,"internal-error"),Pe(u,t.name),Pe(h,t.name),se("boolean"==typeof w,t,"internal-error"),se("boolean"==typeof b,t,"internal-error"),Pe(d,t.name),Pe(f,t.name),Pe(p,t.name),Pe(m,t.name),Pe(g,t.name),Pe(y,t.name);const E=new Fe({uid:v,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(E.providerData=x.map((t=>Object.assign({},t)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(t,e,n=!1){const i=new Me;i.updateFromServerResponse(e);const r=new Fe({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Oe(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=Gt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Le(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new De(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Map;function Ve(t){ae(t instanceof Function,"Expected a class definition");let e=Ue.get(t);return e?(ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ue.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}ze.type="NONE";const Be=ze;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e,n){return`firebase:${t}:${e}:${n}`}class We{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new We(Ve(Be),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||Ve(Be);const s=je(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=Fe._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new We(r,t,n)):new We(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=je(this.userKey,i.apiKey,r),this.fullPersistenceKey=je("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ge(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(He(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qe(e))return"Blackberry";if(Je(e))return"Webos";if($e(e))return"Safari";if((e.includes("chrome/")||Ke(e))&&!e.includes("edge/"))return"Chrome";if(Xe(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function He(t=O()){return/firefox\//i.test(t)}function $e(t=O()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ke(t=O()){return/crios\//i.test(t)}function Ge(t=O()){return/iemobile/i.test(t)}function Xe(t=O()){return/android/i.test(t)}function Qe(t=O()){return/blackberry/i.test(t)}function Je(t=O()){return/webos/i.test(t)}function Ye(t=O()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ze(){return P()&&10===document.documentMode}function tn(t=O()){return Ye(t)||Xe(t)||Je(t)||Qe(t)||/windows phone/i.test(t)||Ge(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(t,e=[]){let n;switch(t){case"Browser":n=qe(O());break;case"Worker":n=`${qe(O())}-${t}`;break;default:n=t}return`${n}/JsCore/10.8.1/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{validatePassword(t){var e,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}constructor(t){var e,n,i,r;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=t.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=t.schemaVersion}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ve(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await We.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Oe(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?J(t):null;return e&&se(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&se(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ve(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await async function(t,e={}){return ve(t,"GET","/v2/passwordPolicy",ye(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),e=new rn(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new z("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(e.tenantId=this.tenantId),await async function(t,e){return ve(t,"POST","/v2/accounts:revokeToken",ye(t,e))}(this,e)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ve(t)||this._popupRedirectResolver;se(e,this,"argument-error"),this.redirectPersistenceManager=await We.create(this,[Ve(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"==typeof e){const r=t.addObserver(e,n,i);return()=>{s=!0,r()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=en(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){Yt.logLevel<=nt.WARN&&Yt.warn(`Auth (10.8.1): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new an(this),this.idTokenSubscription=new an(this),this.beforeStateQueue=new nn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}}function on(t){return J(t)}class an{get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=G((t=>this.observer=t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ln(t){return cn.loadJS(t)}function un(t){return`__${t}${Math.floor(1e6*Math.random())}`}class hn{async verify(t="verify",e=!1){function n(e,n,i){const r=window.grecaptcha;Ie(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Ce(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Te(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((r=>{if(!e&&Ie(window.grecaptcha))n(r,t,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let e=cn.recaptchaEnterpriseScript;0!==e.length&&(e+=r),ln(e).then((()=>{n(r,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}constructor(t){this.type="recaptcha-enterprise",this.auth=on(t)}}async function dn(t,e,n,i=!1){const r=new hn(t);let s;try{s=await r.verify(n)}catch(t){s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fn(t,e,n,i){var r;if(null===(r=t._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await dn(t,e,n,"getOobCode"===n);return i(t,r)}return i(t,e).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await dn(t,e,n,"getOobCode"===n);return i(t,r)}return Promise.reject(r)}))}function pn(t,e,n){const i=on(t);se(i._canInitEmulator,i,"emulator-config-failed"),se(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=mn(e),{host:o,port:a}=function(t){const e=mn(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:gn(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:gn(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function mn(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class yn{toJSON(){return oe("not implemented")}_getIdTokenResponse(t){return oe("not implemented")}_linkToIdToken(t,e){return oe("not implemented")}_getReauthenticationResolver(t){return oe("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e){return ve(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wn(t,e){return be(t,"POST","/v1/accounts:signInWithPassword",ye(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends yn{static _fromEmailAndPassword(t,e){return new bn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new bn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return fn(t,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",wn);case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return be(t,"POST","/v1/accounts:signInWithEmailLink",ye(t,e))}(t,{email:this._email,oobCode:this._password});default:te(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return fn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vn);case"emailLink":return async function(t,e){return be(t,"POST","/v1/accounts:signInWithEmailLink",ye(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:te(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(t,e){return be(t,"POST","/v1/accounts:signInWithIdp",ye(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends yn{static _fromParams(t){const e=new kn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):te("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=Gt(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new kn(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return xn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,xn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,xn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=H(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En extends yn{static _fromVerification(t,e){return new En({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new En({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return be(t,"POST","/v1/accounts:signInWithPhoneNumber",ye(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await be(t,"POST","/v1/accounts:signInWithPhoneNumber",ye(t,e));if(n.temporaryProof)throw Ee(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return be(t,"POST","/v1/accounts:signInWithPhoneNumber",ye(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),_n)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new En({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{static parseLink(t){const e=function(t){const e=$(K(t)).link,n=e?$(K(e)).deep_link_id:null,i=$(K(t)).deep_link_id;return(i?$(K(i)).link:null)||i||n||e||t}(t);try{return new In(e)}catch(t){return null}}constructor(t){var e,n,i,r,s,o;const a=$(K(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);se(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn{static credential(t,e){return bn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=In.parseLink(e);return se(n,"argument-error"),bn._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=Tn.PROVIDER_ID}}Tn.PROVIDER_ID="password",Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Cn{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn extends Sn{static credential(t){return kn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nn.credentialFromTaggedObject(t)}static credentialFromError(t){return Nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Nn.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Nn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An extends Sn{static credential(t,e){return kn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return An.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}An.GOOGLE_SIGN_IN_METHOD="google.com",An.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn extends Sn{static credential(t){return kn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Rn.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Rn.GITHUB_SIGN_IN_METHOD="github.com",Rn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ln extends Sn{static credential(t,e){return kn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ln.credentialFromTaggedObject(t)}static credentialFromError(t){return Ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ln.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com",Ln.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await Fe._fromIdTokenResponse(t,n,i),s=On(n);return new Dn({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=On(n);return new Dn({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function On(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn extends V{static _fromErrorAndOperation(t,e,n,i){return new Mn(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Pn(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Mn._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e,n=!1){const i=await Re(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Un(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Re(t,Pn(i,r,e,t),n);se(s.idToken,i,"internal-error");const o=Ae(s.idToken);se(o,i,"internal-error");const{sub:a}=o;return se(t.uid===a,i,"user-mismatch"),Dn._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&te(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){const i="signIn",r=await Pn(t,i,e),s=await Dn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function zn(t,e,n,i){return J(t).onAuthStateChanged(e,n,i)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Bn{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Ze()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=O();return $e(t)||Ye(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=tn(),this._shouldAllowMigration=!0}}jn.type="LOCAL";const Wn=jn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Bn{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}qn.type="SESSION";const Hn=qn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $n{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new $n(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n.receivers=[];class Gn{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Kn("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(){return void 0!==Xn().WorkerGlobalScope&&"function"==typeof Xn().importScripts}class Jn{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Yn(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Zn(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Jn(t).toPromise()}(),e(await Zn()))}))}))}async function ti(t,e,n){const i=Yn(t,!0).put({fbase_key:e,value:n});return new Jn(i).toPromise()}function ei(t,e){const n=Yn(t,!0).delete(e);return new Jn(n).toPromise()}class ni{async _openDb(){return this.db||(this.db=await Zn()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$n._getInstance(Qn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Gn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zn();return await ti(t,"__sak","1"),await ei(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ti(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Yn(t,!1).get(e),i=await new Jn(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ei(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Yn(t,!1).getAll();return new Jn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}ni.type="LOCAL";const ii=ni;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
un("rcb"),new de(3e4,6e4);async function ri(t,e,n){var i;const r=await n.verify();try{let s;if(se("string"==typeof r,t,"argument-error"),se("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){se("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return ve(t,"POST","/v2/accounts/mfaEnrollment:start",ye(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{se("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;se(n,t,"missing-multi-factor-info");const o=await function(t,e){return ve(t,"POST","/v2/accounts/mfaSignIn:start",ye(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return ve(t,"POST","/v1/accounts:sendVerificationCode",ye(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{verifyPhoneNumber(t,e){return ri(this.auth,t,J(e))}static credential(t,e){return En._fromVerification(t,e)}static credentialFromResult(t){const e=t;return si.credentialFromTaggedObject(e)}static credentialFromError(t){return si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?En._fromTokenResponse(e,n):null}constructor(t){this.providerId=si.PROVIDER_ID,this.auth=on(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(t,e){return e?Ve(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si.PROVIDER_ID="phone",si.PHONE_SIGN_IN_METHOD="phone";class ai extends yn{_getIdTokenResponse(t){return xn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return xn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return xn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function ci(t){return Vn(t.auth,new ai(t),t.bypassAuthState)}function li(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Un(n,new ai(t),t.bypassAuthState)}async function ui(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Fn(n,new ai(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ci;case"linkViaPopup":case"linkViaRedirect":return ui;case"reauthViaPopup":case"reauthViaRedirect":return li;default:te(this.auth,"internal-error")}}resolve(t){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new de(2e3,1e4);class fi extends hi{async executeNotNull(){const t=await this.execute();return se(t,this.auth,"internal-error"),t}async onExecution(){ae(1===this.filter.length,"Popup operations only handle one event");const t=Kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(ee(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ee(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,di.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}}fi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pi=new Map;class mi extends hi{async execute(){let t=pi.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=wi(e),i=vi(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}pi.set(this.auth._key(),t)}return this.bypassAuthState||pi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}async function gi(t,e){return vi(t)._set(wi(e),"true")}function yi(t,e){pi.set(t._key(),e)}function vi(t){return Ve(t._redirectPersistence)}function wi(t){return je("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,e,n){return async function(t,e,n){const i=on(t);ie(t,e,Cn),await i._initializationPromise;const r=oi(i,n);return await gi(r,i),r._openRedirect(i,e,"signInViaRedirect")}(t,e,n)}async function xi(t,e,n=!1){const i=on(t),r=oi(i,e),s=new mi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class ki{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ei(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ei(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(ee(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_i(t))}saveEventToCache(t){this.cachedEventUids.add(_i(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function _i(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ei({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ii=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ti=/^https?/;async function Ci(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return ve(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Si(t))return}catch(t){}te(t,"unauthorized-domain")}function Si(t){const e=ce(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ti.test(n))return!1;if(Ii.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new de(3e4,6e4);function Ai(){const t=Xn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function Ri(t){return new Promise(((e,n)=>{var i,r,s;function o(){Ai(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ai(),n(ee(t,"network-request-failed"))},timeout:Ni.get()})}if(null===(r=null===(i=Xn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Xn().gapi)||void 0===s?void 0:s.load)){const e=un("iframefcb");return Xn()[e]=()=>{gapi.load?o():n(ee(t,"network-request-failed"))},ln(`${cn.gapiScript}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Li=null,t}))}let Li=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Di=new de(5e3,15e3),Oi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pi(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fe(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"10.8.1"},r=Mi.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${H(i).slice(1)}`}async function Fi(t){const e=await function(t){return Li=Li||Ri(t),Li}(t),n=Xn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:Pi(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oi,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=ee(t,"network-request-failed"),s=Xn().setTimeout((()=>{i(r)}),Di.get());function o(){Xn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Vi{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function zi(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ui),{width:i.toString(),height:r.toString(),top:s,left:o}),l=O().toLowerCase();n&&(a=Ke(l)?"_blank":n),He(l)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=O()){var e;return Ye(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Vi(null);const h=window.open(e||"",a,u);se(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Vi(h)}const Bi=encodeURIComponent("fac");async function ji(t,e,n,i,r,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"10.8.1",eventId:r};if(e instanceof Cn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",j(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Sn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];const c=await t._getAppCheckToken(),l=c?`#${Bi}=${encodeURIComponent(c)}`:"";return`${function({config:t}){return t.emulator?fe(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${H(a).slice(1)}${l}`}const Wi=class{async _openPopup(t,e,n,i){var r;ae(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return zi(t,await ji(t,e,n,ce(),i),Kn())}async _openRedirect(t,e,n,i){await this._originValidation(t);return function(t){Xn().location.href=t}(await ji(t,e,n,ce(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(ae(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Fi(t),n=new ki(t);return e.register("authEvent",(e=>{se(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),te(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ci(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return tn()||$e()||Ye()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hn,this._completeRedirectFn=xi,this._overrideRedirectResult=yi}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi=R("authIdTokenMaxAge")||300;let $i=null;var Ki,Gi;Ki={loadJS:t=>new Promise(((e,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=ee("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},cn=Ki,Gi="Browser",Lt(new Y("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;se(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Gi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:en(Gi)},c=new sn(n,i,r,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ve);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Lt(new Y("auth-internal",(t=>{const e=on(t.getProvider("auth").getImmediate());return new qi(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut("@firebase/auth","1.6.1",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Gi)),Ut("@firebase/auth","1.6.1","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ut("firebase","10.8.1","app");var Xi,Qi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},Ji={},Yi=Yi||{},Zi=Qi||self;function tr(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function er(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var nr="closure_uid_"+(1e9*Math.random()>>>0),ir=0;function rr(t,e,n){return t.call.apply(t.bind,arguments)}function sr(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function or(t,e,n){return(or=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?rr:sr).apply(null,arguments)}function ar(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function cr(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function lr(){this.s=this.s,this.o=this.o}lr.prototype.s=!1,lr.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,nr)&&t[nr]||(t[nr]=++ir))},lr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ur=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function dr(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(tr(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function fr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}fr.prototype.h=function(){this.defaultPrevented=!0};var pr=function(){if(!Zi.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};Zi.addEventListener("test",t,e),Zi.removeEventListener("test",t,e)}catch(t){}return t}();function mr(t){return/^[\s\xa0]*$/.test(t)}function gr(){var t=Zi.navigator;return t&&(t=t.userAgent)?t:""}function yr(t){return-1!=gr().indexOf(t)}function vr(t){return vr[" "](t),t}vr[" "]=function(){};var wr,br,xr,kr=yr("Opera"),_r=yr("Trident")||yr("MSIE"),Er=yr("Edge"),Ir=Er||_r,Tr=yr("Gecko")&&!(-1!=gr().toLowerCase().indexOf("webkit")&&!yr("Edge"))&&!(yr("Trident")||yr("MSIE"))&&!yr("Edge"),Cr=-1!=gr().toLowerCase().indexOf("webkit")&&!yr("Edge");function Sr(){var t=Zi.document;return t?t.documentMode:void 0}t:{var Nr="",Ar=(br=gr(),Tr?/rv:([^\);]+)(\)|;)/.exec(br):Er?/Edge\/([\d\.]+)/.exec(br):_r?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(br):Cr?/WebKit\/(\S+)/.exec(br):kr?/(?:Version)[ \/]?(\S+)/.exec(br):void 0);if(Ar&&(Nr=Ar?Ar[1]:""),_r){var Rr=Sr();if(null!=Rr&&Rr>parseFloat(Nr)){wr=String(Rr);break t}}wr=Nr}if(Zi.document&&_r){var Lr=Sr();xr=Lr||(parseInt(wr,10)||void 0)}else xr=void 0;var Dr=xr;function Or(t,e){if(fr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tr){t:{try{vr(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Mr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Or.$.h.call(this)}}cr(Or,fr);var Mr={2:"touch",3:"pen",4:"mouse"};Or.prototype.h=function(){Or.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pr="closure_listenable_"+(1e6*Math.random()|0),Fr=0;function Ur(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Fr,this.fa=this.ia=!1}function Vr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function zr(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Br(t){const e={};for(const n in t)e[n]=t[n];return e}const jr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wr(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<jr.length;e++)n=jr[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function qr(t){this.src=t,this.g={},this.h=0}function Hr(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=ur(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Vr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function $r(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}qr.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=$r(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new Ur(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var Kr="closure_lm_"+(1e6*Math.random()|0),Gr={};function Xr(t,e,n,i,r){if(i&&i.once)return Jr(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Xr(t,e[s],n,i,r);return null}return n=rs(n),t&&t[Pr]?t.O(e,n,er(i)?!!i.capture:!!i,r):Qr(t,e,n,!1,i,r)}function Qr(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=er(r)?!!r.capture:!!r,a=ns(t);if(a||(t[Kr]=a=new qr(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=es;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)pr||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ts(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Jr(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jr(t,e[s],n,i,r);return null}return n=rs(n),t&&t[Pr]?t.P(e,n,er(i)?!!i.capture:!!i,r):Qr(t,e,n,!0,i,r)}function Yr(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Yr(t,e[s],n,i,r);else i=er(i)?!!i.capture:!!i,n=rs(n),t&&t[Pr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=$r(s=t.g[e],n,i,r))&&(Vr(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=ns(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$r(e,n,i,r)),(n=-1<t?e[t]:null)&&Zr(n))}function Zr(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Pr])Hr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ts(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ns(e))?(Hr(n,t),0==n.h&&(n.src=null,e[Kr]=null)):Vr(t)}}}function ts(t){return t in Gr?Gr[t]:Gr[t]="on"+t}function es(t,e){if(t.fa)t=!0;else{e=new Or(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Zr(t),t=n.call(i,e)}return t}function ns(t){return(t=t[Kr])instanceof qr?t:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function rs(t){return"function"==typeof t?t:(t[is]||(t[is]=function(e){return t.handleEvent(e)}),t[is])}function ss(){lr.call(this),this.i=new qr(this),this.S=this,this.J=null}function os(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new fr(e,t);else if(e instanceof fr)e.target=e.target||t;else{var r=e;Wr(e=new fr(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=as(o,i,!0,e)&&r}if(r=as(o=e.g=t,i,!0,e)&&r,r=as(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=as(o=e.g=n[s],i,!1,e)&&r}function as(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Hr(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}cr(ss,lr),ss.prototype[Pr]=!0,ss.prototype.removeEventListener=function(t,e,n,i){Yr(this,t,e,n,i)},ss.prototype.N=function(){if(ss.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Vr(n[i]);delete e.g[t],e.h--}}this.J=null},ss.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ss.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var cs=Zi.JSON.stringify;function ls(){var t=gs;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var us=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new hs),(t=>t.reset()));class hs{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function ds(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function fs(t){Zi.setTimeout((()=>{throw t}),0)}let ps,ms=!1,gs=new class{add(t,e){const n=us.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}},ys=()=>{const t=Zi.Promise.resolve(void 0);ps=()=>{t.then(vs)}};var vs=()=>{for(var t;t=ls();){try{t.h.call(t.g)}catch(t){fs(t)}var e=us;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ms=!1};function ws(t,e){ss.call(this),this.h=t||1,this.g=e||Zi,this.j=or(this.qb,this),this.l=Date.now()}function bs(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function xs(t,e,n){if("function"==typeof t)n&&(t=or(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=or(t.handleEvent,t)}return 2147483647<Number(e)?-1:Zi.setTimeout(t,e||0)}function ks(t){t.g=xs((()=>{t.g=null,t.i&&(t.i=!1,ks(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}cr(ws,ss),(Xi=ws.prototype).ga=!1,Xi.T=null,Xi.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),os(this,"tick"),this.ga&&(bs(this),this.start()))}},Xi.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Xi.N=function(){ws.$.N.call(this),bs(this),delete this.g};class _s extends lr{l(t){this.h=arguments,this.g?this.i=!0:ks(this)}N(){super.N(),this.g&&(Zi.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Es(t){lr.call(this),this.h=t,this.g={}}cr(Es,lr);var Is=[];function Ts(t,e,n,i){Array.isArray(n)||(n&&(Is[0]=n.toString()),n=Is);for(var r=0;r<n.length;r++){var s=Xr(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Cs(t){zr(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Zr(t)}),t),t.g={}}function Ss(){this.g=!0}function Ns(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return cs(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Es.prototype.N=function(){Es.$.N.call(this),Cs(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ss.prototype.Ea=function(){this.g=!1},Ss.prototype.info=function(){};var As={},Rs=null;function Ls(){return Rs=Rs||new ss}function Ds(t){fr.call(this,As.Ta,t)}function Os(t){const e=Ls();os(e,new Ds(e))}function Ms(t,e){fr.call(this,As.STAT_EVENT,t),this.stat=e}function Ps(t){const e=Ls();os(e,new Ms(e,t))}function Fs(t,e){fr.call(this,As.Ua,t),this.size=e}function Us(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Zi.setTimeout((function(){t()}),e)}As.Ta="serverreachability",cr(Ds,fr),As.STAT_EVENT="statevent",cr(Ms,fr),As.Ua="timingevent",cr(Fs,fr);var Vs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zs={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bs(){}function js(t){return t.h||(t.h=t.i())}function Ws(){}Bs.prototype.h=null;var qs,Hs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $s(){fr.call(this,"d")}function Ks(){fr.call(this,"c")}function Gs(){}function Xs(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Es(this),this.P=Js,t=Ir?125:void 0,this.V=new ws(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Qs}function Qs(){this.i=null,this.g="",this.h=!1}cr($s,fr),cr(Ks,fr),cr(Gs,Bs),Gs.prototype.g=function(){return new XMLHttpRequest},Gs.prototype.i=function(){return{}},qs=new Gs;var Js=45e3,Ys={},Zs={};function to(t,e,n){t.L=1,t.A=bo(mo(e)),t.u=n,t.S=!0,eo(t,null)}function eo(t,e){t.G=Date.now(),so(t),t.B=mo(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),Do(n.i,"t",i),t.o=0,n=t.l.J,t.h=new Qs,t.g=Ra(t.l,n?e:null,!t.u),0<t.O&&(t.M=new _s(or(t.Pa,t,t.g),t.O)),Ts(t.U,t.g,"readystatechange",t.nb),e=t.I?Br(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Os(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function no(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function io(t,e,n){let i,r=!0;for(;!t.J&&t.o<n.length;){if(i=ro(t,n),i==Zs){4==e&&(t.s=4,Ps(14),r=!1),Ns(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ys){t.s=4,Ps(15),Ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Ns(t.j,t.m,i,null),uo(t,i)}no(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,Ps(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),_a(e),e.M=!0,Ps(11))):(Ns(t.j,t.m,n,"[Invalid Chunked Response]"),lo(t),co(t))}function ro(t,e){var n=t.o,i=e.indexOf("\n",n);return-1==i?Zs:(n=Number(e.substring(n,i)),isNaN(n)?Ys:(i+=1)+n>e.length?Zs:(e=e.slice(i,i+n),t.o=i+n,e))}function so(t){t.Y=Date.now()+t.P,oo(t,t.P)}function oo(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=Us(or(t.lb,t),e)}function ao(t){t.C&&(Zi.clearTimeout(t.C),t.C=null)}function co(t){0==t.l.H||t.J||Ta(t.l,t)}function lo(t){ao(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,bs(t.V),Cs(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function uo(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Vo(n.i,t)))if(!t.K&&Vo(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Ia(n),ma(n)}ka(n),Ps(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Us(or(n.ib,n),6e3));if(1>=Uo(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Sa(n,11)}else if((t.K||n.g==t)&&Ia(n),!mr(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const e=l[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(zo(s,s.h),s.h=null))}if(i.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,wo(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Aa(i,i.J?i.pa:null,i.Y),o.K){Bo(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(ao(a),so(a)),i.g=o}else xa(i);0<n.j.length&&ya(n)}else"stop"!=l[0]&&"close"!=l[0]||Sa(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Sa(n,7):pa(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}Os()}catch(t){}}function ho(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(tr(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(tr(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(tr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(Xi=Xs.prototype).setTimeout=function(t){this.P=t},Xi.nb=function(t){t=t.target;const e=this.M;e&&3==ca(t)?e.l():this.Pa(t)},Xi.Pa=function(t){try{if(t==this.g)t:{const u=ca(this.g);var e=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ir||this.g&&(this.h.h||this.g.ja()||la(this.g)))){this.J||4!=u||7==e||Os(),ao(this);var n=this.g.da();this.ca=n;e:if(no(this)){var i=la(this.g);t="";var r=i.length,s=4==ca(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){lo(this),co(this);var o="";break e}this.h.i=new Zi.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mr(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.s=3,Ps(12),lo(this),co(this);break t}Ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uo(this,n)}this.S?(io(this,u,o),Ir&&this.i&&3==u&&(Ts(this.U,this.V,"tick",this.mb),this.V.start())):(Ns(this.j,this.m,o,null),uo(this,o)),4==u&&lo(this),this.i&&!this.J&&(4==u?Ta(this.l,this):(this.i=!1,so(this)))}else(function(t){const e={};t=(t.g&&2<=ca(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(mr(t[i]))continue;var n=ds(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Ps(12)):(this.s=0,Ps(13)),lo(this),co(this)}}}catch(t){}},Xi.mb=function(){if(this.g){var t=ca(this.g),e=this.g.ja();this.o<e.length&&(ao(this),io(this,t,e),this.i&&4!=t&&so(this))}},Xi.cancel=function(){this.J=!0,lo(this)},Xi.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&(Os(),Ps(17)),lo(this),this.s=2,co(this)):oo(this,this.Y-t)};var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function po(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof po){this.h=t.h,go(this,t.j),this.s=t.s,this.g=t.g,yo(this,t.m),this.l=t.l;var e=t.i,n=new No;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vo(this,n),this.o=t.o}else t&&(e=String(t).match(fo))?(this.h=!1,go(this,e[1]||"",!0),this.s=xo(e[2]||""),this.g=xo(e[3]||"",!0),yo(this,e[4]),this.l=xo(e[5]||"",!0),vo(this,e[6]||"",!0),this.o=xo(e[7]||"")):(this.h=!1,this.i=new No(null,this.h))}function mo(t){return new po(t)}function go(t,e,n){t.j=n?xo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vo(t,e,n){e instanceof No?(t.i=e,function(t,e){e&&!t.j&&(Ao(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ro(this,e),Do(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ko(e,Co)),t.i=new No(e,t.h))}function wo(t,e,n){t.i.set(e,n)}function bo(t){return wo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ko(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,_o),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _o(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}po.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ko(e,Eo,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ko(e,Eo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ko(n,"/"==n.charAt(0)?To:Io,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ko(n,So)),t.join("")};var Eo=/[#\/\?@]/g,Io=/[#\?:]/g,To=/[#\?]/g,Co=/[#\?@]/g,So=/#/g;function No(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ao(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ro(t,e){Ao(t),e=Oo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lo(t,e){return Ao(t),e=Oo(t,e),t.g.has(e)}function Do(t,e,n){Ro(t,e),0<n.length&&(t.i=null,t.g.set(Oo(t,e),hr(n)),t.h+=n.length)}function Oo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Xi=No.prototype).add=function(t,e){Ao(this),this.i=null,t=Oo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Xi.forEach=function(t,e){Ao(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Xi.ta=function(){Ao(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Xi.Z=function(t){Ao(this);let e=[];if("string"==typeof t)Lo(this,t)&&(e=e.concat(this.g.get(Oo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Xi.set=function(t,e){return Ao(this),this.i=null,Lo(this,t=Oo(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Xi.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Xi.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Mo(t){this.l=t||Po,Zi.PerformanceNavigationTiming?t=0<(t=Zi.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Zi.g&&Zi.g.Ka&&Zi.g.Ka()&&Zi.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Po=10;function Fo(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Uo(t){return t.h?1:t.g?t.g.size:0}function Vo(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function zo(t,e){t.g?t.g.add(e):t.h=e}function Bo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function jo(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hr(t.i)}Mo.prototype.cancel=function(){if(this.i=jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function Wo(){this.g=new class{stringify(t){return Zi.JSON.stringify(t,void 0)}parse(t){return Zi.JSON.parse(t,void 0)}}}function qo(t,e,n){const i=n||"";try{ho(t,(function(t,n){let r=t;er(t)&&(r=cs(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Ho(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function $o(t){this.l=t.ec||null,this.j=t.ob||!1}function Ko(t,e){ss.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Go,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}cr($o,Bs),$o.prototype.g=function(){return new Ko(this.l,this.j)},$o.prototype.i=function(t){return function(){return t}}({}),cr(Ko,ss);var Go=0;function Xo(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Qo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jo(t)}function Jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Xi=Ko.prototype).open=function(t,e){if(this.readyState!=Go)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jo(this)},Xi.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Zi).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Xi.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qo(this)),this.readyState=Go},Xi.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Zi.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xo(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Xi.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qo(this):Jo(this),3==this.readyState&&Xo(this)}},Xi.Za=function(t){this.g&&(this.response=this.responseText=t,Qo(this))},Xi.Ya=function(t){this.g&&(this.response=t,Qo(this))},Xi.ka=function(){this.g&&Qo(this)},Xi.setRequestHeader=function(t,e){this.v.append(t,e)},Xi.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Xi.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Yo=Zi.JSON.parse;function Zo(t){ss.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ta,this.L=this.M=!1}cr(Zo,ss);var ta="",ea=/^https?$/i,na=["POST","PUT"];function ia(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ra(t),oa(t)}function ra(t){t.F||(t.F=!0,os(t,"complete"),os(t,"error"))}function sa(t){if(t.h&&void 0!==Yi&&(!t.C[1]||4!=ca(t)||2!=t.da()))if(t.v&&4==ca(t))xs(t.La,0,t);else if(os(t,"readystatechange"),4==ca(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(fo)[1]||null;!r&&Zi.self&&Zi.self.location&&(r=Zi.self.location.protocol.slice(0,-1)),i=!ea.test(r?r.toLowerCase():"")}n=i}if(n)os(t,"complete"),os(t,"success");else{t.m=6;try{var s=2<ca(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",ra(t)}}finally{oa(t)}}}function oa(t,e){if(t.g){aa(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||os(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function aa(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Zi.clearTimeout(t.A),t.A=null)}function ca(t){return t.g?t.g.readyState:0}function la(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ta:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ua(t){let e="";return zr(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ha(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ua(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):wo(t,e,n))}function da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fa(t){this.Ga=0,this.j=[],this.l=new Ss,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=da("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=da("baseRetryDelayMs",5e3,t),this.hb=da("retryDelaySeedMs",1e4,t),this.eb=da("forwardChannelMaxRetries",2,t),this.xa=da("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Mo(t&&t.concurrentRequestLimit),this.Ja=new Wo,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function pa(t){if(ga(t),3==t.H){var e=t.W++,n=mo(t.I);if(wo(n,"SID",t.K),wo(n,"RID",e),wo(n,"TYPE","terminate"),wa(t,n),(e=new Xs(t,t.l,e)).L=2,e.A=bo(mo(n)),n=!1,Zi.navigator&&Zi.navigator.sendBeacon)try{n=Zi.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&Zi.Image&&((new Image).src=e.A,n=!0),n||(e.g=Ra(e.l,null),e.g.ha(e.A)),e.G=Date.now(),so(e)}Na(t)}function ma(t){t.g&&(_a(t),t.g.cancel(),t.g=null)}function ga(t){ma(t),t.u&&(Zi.clearTimeout(t.u),t.u=null),Ia(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Zi.clearTimeout(t.m),t.m=null)}function ya(t){if(!Fo(t.i)&&!t.m){t.m=!0;var e=t.Na;ps||ys(),ms||(ps(),ms=!0),gs.add(e,t),t.C=0}}function va(t,e){var n;n=e?e.m:t.W++;const i=mo(t.I);wo(i,"SID",t.K),wo(i,"RID",n),wo(i,"AID",t.V),wa(t,i),t.o&&t.s&&ha(i,t.o,t.s),n=new Xs(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ba(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),zo(t.i,n),to(n,i,e)}function wa(t,e){t.na&&zr(t.na,(function(t,n){wo(e,n,t)})),t.h&&ho({},(function(t,n){wo(e,n,t)}))}function ba(t,e,n){n=Math.min(t.j.length,n);var i=t.h?or(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{qo(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function xa(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ps||ys(),ms||(ps(),ms=!0),gs.add(e,t),t.A=0}}function ka(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Us(or(t.Ma,t),Ca(t,t.A)),t.A++,!0)}function _a(t){null!=t.B&&(Zi.clearTimeout(t.B),t.B=null)}function Ea(t){t.g=new Xs(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=mo(t.wa);wo(e,"RID","rpc"),wo(e,"SID",t.K),wo(e,"AID",t.V),wo(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&wo(e,"TO",t.qa),wo(e,"TYPE","xmlhttp"),wa(t,e),t.o&&t.s&&ha(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=bo(mo(e)),n.u=null,n.S=!0,eo(n,t)}function Ia(t){null!=t.v&&(Zi.clearTimeout(t.v),t.v=null)}function Ta(t,e){var n=null;if(t.g==e){Ia(t),_a(t),t.g=null;var i=2}else{if(!Vo(t.i,e))return;n=e.F,Bo(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;os(i=Ls(),new Fs(i,n)),ya(t)}else xa(t);else if(3==(r=e.s)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(Uo(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Us(or(t.Na,t,e),Ca(t,t.C)),t.C++,0)))}(t,e)||2==i&&ka(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Sa(t,5);break;case 4:Sa(t,10);break;case 3:Sa(t,6);break;default:Sa(t,2)}}function Ca(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Sa(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=or(t.pb,t);n||(n=new po("//www.google.com/images/cleardot.gif"),Zi.location&&"http"==Zi.location.protocol||go(n,"https"),bo(n)),function(t,e){const n=new Ss;if(Zi.Image){const i=new Image;i.onload=ar(Ho,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ar(Ho,n,i,"TestLoadImage: error",!1,e),i.onabort=ar(Ho,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ar(Ho,n,i,"TestLoadImage: timeout",!1,e),Zi.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Ps(2);t.H=0,t.h&&t.h.za(e),Na(t),ga(t)}function Na(t){if(t.H=0,t.ma=[],t.h){const e=jo(t.i);0==e.length&&0==t.j.length||(dr(t.ma,e),dr(t.ma,t.j),t.i.i.length=0,hr(t.j),t.j.length=0),t.h.ya()}}function Aa(t,e,n){var i=n instanceof po?mo(n):new po(n);if(""!=i.g)e&&(i.g=e+"."+i.g),yo(i,i.m);else{var r=Zi.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new po(null);i&&go(s,i),e&&(s.g=e),r&&yo(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&wo(i,n,e),wo(i,"VER",t.ra),wa(t,i),i}function Ra(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new Zo(new $o({ob:n})):new Zo(t.va)).Oa(t.J),e}function La(){}function Da(){if(_r&&!(10<=Number(Dr)))throw Error("Environmental error: no available transport.")}function Oa(t,e){ss.call(this),this.g=new fa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!mr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mr(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Fa(this)}function Ma(t){$s.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Pa(){Ks.call(this),this.status=1}function Fa(t){this.g=t}function Ua(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Va(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function za(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(Xi=Zo.prototype).Oa=function(t){this.M=t},Xi.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qs.g(),this.C=this.u?js(this.u):js(qs),this.g.onreadystatechange=or(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void ia(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Zi.FormData&&t instanceof Zi.FormData,!(0<=ur(na,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{aa(this),0<this.B&&((this.L=function(t){return _r&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=or(this.ua,this)):this.A=xs(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ia(this,t)}},Xi.ua=function(){void 0!==Yi&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,os(this,"timeout"),this.abort(8))},Xi.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,os(this,"complete"),os(this,"abort"),oa(this))},Xi.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oa(this,!0)),Zo.$.N.call(this)},Xi.La=function(){this.s||(this.G||this.v||this.l?sa(this):this.kb())},Xi.kb=function(){sa(this)},Xi.isActive=function(){return!!this.g},Xi.da=function(){try{return 2<ca(this)?this.g.status:-1}catch(t){return-1}},Xi.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Xi.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Yo(e)}},Xi.Ia=function(){return this.m},Xi.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Xi=fa.prototype).ra=8,Xi.H=1,Xi.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Xs(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Br(s),Wr(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ba(this,r,e),wo(n=mo(this.I),"RID",t),wo(n,"CVER",22),this.F&&wo(n,"X-HTTP-Session-Id",this.F),wa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ua(s)))+"&"+e:this.o&&ha(n,this.o,s)),zo(this.i,r),this.bb&&wo(n,"TYPE","init"),this.P?(wo(n,"$req",e),wo(n,"SID","null"),r.aa=!0,to(r,n,null)):to(r,n,e),this.H=2}}else 3==this.H&&(t?va(this,t):0==this.j.length||Fo(this.i)||va(this))},Xi.Ma=function(){if(this.u=null,Ea(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Us(or(this.jb,this),t)}},Xi.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ps(10),ma(this),Ea(this))},Xi.ib=function(){null!=this.v&&(this.v=null,ma(this),ka(this),Ps(19))},Xi.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ps(2)):(this.l.info("Failed to ping google.com"),Ps(1))},Xi.isActive=function(){return!!this.h&&this.h.isActive(this)},(Xi=La.prototype).Ba=function(){},Xi.Aa=function(){},Xi.za=function(){},Xi.ya=function(){},Xi.isActive=function(){return!0},Xi.Va=function(){},Da.prototype.g=function(t,e){return new Oa(t,e)},cr(Oa,ss),Oa.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ps(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Aa(t,null,t.Y),ya(t)},Oa.prototype.close=function(){pa(this.g)},Oa.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=cs(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&ya(e)},Oa.prototype.N=function(){this.g.h=null,delete this.j,pa(this.g),delete this.g,Oa.$.N.call(this)},cr(Ma,$s),cr(Pa,Ks),cr(Fa,La),Fa.prototype.Ba=function(){os(this.g,"a")},Fa.prototype.Aa=function(t){os(this.g,new Ma(t))},Fa.prototype.za=function(t){os(this.g,new Pa)},Fa.prototype.ya=function(){os(this.g,"b")},cr(Ua,(function(){this.blockSize=-1})),Ua.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ua.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)Va(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Va(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Va(this,i),r=0;break}}this.h=r,this.i+=e},Ua.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var Ba={};function ja(t){return-128<=t&&128>t?function(t,e){var n=Ba;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new za([0|t],0>t?-1:0)})):new za([0|t],0>t?-1:0)}function Wa(t){if(isNaN(t)||!isFinite(t))return Ha;if(0>t)return Qa(Wa(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=qa;return new za(e,0)}var qa=4294967296,Ha=ja(0),$a=ja(1),Ka=ja(16777216);function Ga(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Xa(t){return-1==t.h}function Qa(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new za(n,~t.h).add($a)}function Ja(t,e){return t.add(Qa(e))}function Ya(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Za(t,e){this.g=t,this.h=e}function tc(t,e){if(Ga(e))throw Error("division by zero");if(Ga(t))return new Za(Ha,Ha);if(Xa(t))return e=tc(Qa(t),e),new Za(Qa(e.g),Qa(e.h));if(Xa(e))return e=tc(t,Qa(e)),new Za(Qa(e.g),e.h);if(30<t.g.length){if(Xa(t)||Xa(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$a,i=e;0>=i.X(t);)n=ec(n),i=ec(i);var r=nc(n,1),s=nc(i,1);for(i=nc(i,2),n=nc(n,2);!Ga(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=nc(i,1),n=nc(n,1)}return e=Ja(t,r.R(e)),new Za(r,e)}for(r=Ha;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=Wa(n)).R(e);Xa(o)||0<o.X(t);)o=(s=Wa(n-=i)).R(e);Ga(s)&&(s=$a),r=r.add(s),t=Ja(t,o)}return new Za(r,t)}function ec(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new za(n,t.h)}function nc(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new za(r,t.h)}(Xi=za.prototype).ea=function(){if(Xa(this))return-Qa(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:qa+i)*e,e*=qa}return t},Xi.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Ga(this))return"0";if(Xa(this))return"-"+Qa(this).toString(t);for(var e=Wa(Math.pow(t,6)),n=this,i="";;){var r=tc(n,e).g,s=((0<(n=Ja(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(Ga(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},Xi.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Xi.X=function(t){return Xa(t=Ja(this,t))?-1:Ga(t)?0:1},Xi.abs=function(){return Xa(this)?Qa(this):this},Xi.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new za(n,-2147483648&n[n.length-1]?-1:0)},Xi.R=function(t){if(Ga(this)||Ga(t))return Ha;if(Xa(this))return Xa(t)?Qa(this).R(Qa(t)):Qa(Qa(this).R(t));if(Xa(t))return Qa(this.R(Qa(t)));if(0>this.X(Ka)&&0>t.X(Ka))return Wa(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,c=65535&t.D(r);n[2*i+2*r]+=o*c,Ya(n,2*i+2*r),n[2*i+2*r+1]+=s*c,Ya(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Ya(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Ya(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new za(n,0)},Xi.gb=function(t){return tc(this,t).h},Xi.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new za(n,this.h&t.h)},Xi.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new za(n,this.h|t.h)},Xi.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new za(n,this.h^t.h)},Da.prototype.createWebChannel=Da.prototype.g,Oa.prototype.send=Oa.prototype.u,Oa.prototype.open=Oa.prototype.m,Oa.prototype.close=Oa.prototype.close,Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,zs.COMPLETE="complete",Ws.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",ss.prototype.listen=ss.prototype.O,Zo.prototype.listenOnce=Zo.prototype.P,Zo.prototype.getLastError=Zo.prototype.Sa,Zo.prototype.getLastErrorCode=Zo.prototype.Ia,Zo.prototype.getStatus=Zo.prototype.da,Zo.prototype.getResponseJson=Zo.prototype.Wa,Zo.prototype.getResponseText=Zo.prototype.ja,Zo.prototype.send=Zo.prototype.ha,Zo.prototype.setWithCredentials=Zo.prototype.Oa,Ua.prototype.digest=Ua.prototype.l,Ua.prototype.reset=Ua.prototype.reset,Ua.prototype.update=Ua.prototype.j,za.prototype.add=za.prototype.add,za.prototype.multiply=za.prototype.R,za.prototype.modulo=za.prototype.gb,za.prototype.compare=za.prototype.X,za.prototype.toNumber=za.prototype.ea,za.prototype.toString=za.prototype.toString,za.prototype.getBits=za.prototype.D,za.fromNumber=Wa,za.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return Qa(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Wa(Math.pow(n,8)),r=Ha,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Wa(Math.pow(n,o)),r=r.R(o).add(Wa(a))):r=(r=r.R(i)).add(Wa(a))}return r};var ic=Ji.createWebChannelTransport=function(){return new Da},rc=Ji.getStatEventTarget=function(){return Ls()},sc=Ji.ErrorCode=Vs,oc=Ji.EventType=zs,ac=Ji.Event=As,cc=Ji.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},lc=(Ji.FetchXmlHttpFactory=$o,Ji.WebChannel=Ws),uc=Ji.XhrIo=Zo,hc=Ji.Md5=Ua,dc=Ji.Integer=za;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}fc.UNAUTHENTICATED=new fc(null),fc.GOOGLE_CREDENTIALS=new fc("google-credentials-uid"),fc.FIRST_PARTY=new fc("first-party-uid"),fc.MOCK_USER=new fc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let pc="10.8.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new ct("@firebase/firestore");function gc(){return mc.logLevel}function yc(t,...e){if(mc.logLevel<=nt.DEBUG){const n=e.map(bc);mc.debug(`Firestore (${pc}): ${t}`,...n)}}function vc(t,...e){if(mc.logLevel<=nt.ERROR){const n=e.map(bc);mc.error(`Firestore (${pc}): ${t}`,...n)}}function wc(t,...e){if(mc.logLevel<=nt.WARN){const n=e.map(bc);mc.warn(`Firestore (${pc}): ${t}`,...n)}}function bc(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t="Unexpected state"){const e=`FIRESTORE (${pc}) INTERNAL ASSERTION FAILED: `+t;throw vc(e),new Error(e)}function kc(t,e){t||xc()}function _c(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ic extends V{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(fc.UNAUTHENTICATED)))}shutdown(){}}class Nc{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class Ac{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Tc;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tc,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{yc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(yc("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tc)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(yc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(kc("string"==typeof e.accessToken),new Cc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return kc(null===t||"string"==typeof t),new fc(t)}constructor(t){this.t=t,this.currentUser=fc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Rc{T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=fc.FIRST_PARTY,this.I=new Map}}class Lc{getToken(){return Promise.resolve(new Rc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(fc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.l=t,this.h=e,this.P=n}}class Dc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Oc{start(t,e){const n=t=>{null!=t.error&&yc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,yc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{yc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):yc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(kc("string"==typeof t.token),this.R=t.token,new Dc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Mc(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Fc(t,e){return t<e?-1:t>e?1:0}function Uc(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{static now(){return Vc.fromMillis(Date.now())}static fromDate(t){return Vc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Vc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Fc(this.nanoseconds,t.nanoseconds):Fc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ic(Ec.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ic(Ec.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ic(Ec.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ic(Ec.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{static fromTimestamp(t){return new zc(t)}static min(){return new zc(new Vc(0,0))}static max(){return new zc(new Vc(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{get length(){return this.len}isEqual(t){return 0===Bc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&xc(),void 0===n?n=t.length-e:n>t.length-e&&xc(),this.segments=t,this.offset=e,this.len=n}}class jc extends Bc{construct(t,e,n){return new jc(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ic(Ec.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new jc(e)}static emptyPath(){return new jc([])}}const Wc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qc extends Bc{construct(t,e,n){return new qc(t,e,n)}static isValidIdentifier(t){return Wc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qc.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new qc(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Ic(Ec.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Ic(Ec.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ic(Ec.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Ic(Ec.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new qc(e)}static emptyPath(){return new qc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{static fromPath(t){return new Hc(jc.fromString(t))}static fromName(t){return new Hc(jc.fromString(t).popFirst(5))}static empty(){return new Hc(jc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===jc.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return jc.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Hc(new jc(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}$c.UNKNOWN_ID=-1;function Kc(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=zc.fromTimestamp(1e9===i?new Vc(n+1,0):new Vc(n,i));return new Xc(r,Hc.empty(),e)}function Gc(t){return new Xc(t.readTime,t.key,-1)}class Xc{static min(){return new Xc(zc.min(),Hc.empty(),-1)}static max(){return new Xc(zc.max(),Hc.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Qc(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Hc.comparator(t.documentKey,e.documentKey),0!==n?n:Fc(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yc{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zc(t){if(t.code!==Ec.FAILED_PRECONDITION||t.message!==Jc)throw t;yc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&xc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new tl(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof tl?e:tl.resolve(e)}catch(t){return tl.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):tl.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):tl.reject(e)}static resolve(t){return new tl(((e,n)=>{e(t)}))}static reject(t){return new tl(((e,n)=>{n(t)}))}static waitFor(t){return new tl(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=tl.resolve(!1);for(const n of t)e=e.next((t=>t?tl.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new tl(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new tl(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{static open(t,e,n,i){try{return new el(e,t.transaction(i,n))}catch(t){throw new rl(e,t)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(yc("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new ol(e)}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Tc,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new rl(t,e.error)):this.V.resolve()},this.transaction.onerror=e=>{const n=ll(e.target.error);this.V.reject(new rl(t,n))}}}class nl{static delete(t){return yc("SimpleDb","Removing database:",t),al(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!U())return!1;if(nl.C())return!0;const t=O(),e=nl.S(t),n=0<e&&e<10,i=nl.v(t),r=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static C(){var t;return void 0!==o&&"YES"===(null===(t=o.__PRIVATE_env)||void 0===t?void 0:t.F)}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(t){return this.db||(yc("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=t=>{const n=t.target.result;e(n)},i.onblocked=()=>{n(new rl(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=e=>{const i=e.target.error;"VersionError"===i.name?n(new Ic(Ec.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new Ic(Ec.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new rl(t,i))},i.onupgradeneeded=t=>{yc("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.p.N(e,i.transaction,t.oldVersion,this.version).next((()=>{yc("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const r="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.O(t);const e=el.open(this.db,t,r?"readonly":"readwrite",n),s=i(e).next((t=>(e.g(),t))).catch((t=>(e.abort(t),tl.reject(t)))).toPromise();return s.catch((()=>{})),await e.m,s}catch(t){const e=t,n="FirebaseError"!==e.name&&s<3;if(yc("SimpleDb","Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}constructor(t,e,n){this.name=t,this.version=e,this.p=n,12.2===nl.S(O())&&vc("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}}class il{get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return al(this.k.delete())}constructor(t){this.k=t,this.q=!1,this.K=null}}class rl extends Ic{constructor(t,e){super(Ec.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function sl(t){return"IndexedDbTransactionError"===t.name}class ol{put(t,e){let n;return void 0!==e?(yc("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(yc("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),al(n)}add(t){return yc("SimpleDb","ADD",this.store.name,t,t),al(this.store.add(t))}get(t){return al(this.store.get(t)).next((e=>(void 0===e&&(e=null),yc("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return yc("SimpleDb","DELETE",this.store.name,t),al(this.store.delete(t))}count(){return yc("SimpleDb","COUNT",this.store.name),al(this.store.count())}W(t,e){const n=this.options(t,e),i=n.index?this.store.index(n.index):this.store;if("function"==typeof i.getAll){const t=i.getAll(n.range);return new tl(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}{const t=this.cursor(n),e=[];return this.G(t,((t,n)=>{e.push(n)})).next((()=>e))}}j(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new tl(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}H(t,e){yc("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.J=!1;const i=this.cursor(n);return this.G(i,((t,e,n)=>n.delete()))}Y(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.G(i,e)}Z(t){const e=this.cursor({});return new tl(((n,i)=>{e.onerror=t=>{const e=ll(t.target.error);i(e)},e.onsuccess=e=>{const i=e.target.result;i?t(i.primaryKey,i.value).next((t=>{t?i.continue():n()})):n()}}))}G(t,e){const n=[];return new tl(((i,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void i();const s=new il(r),o=e(r.primaryKey,r.value,s);if(o instanceof tl){const t=o.catch((t=>(s.done(),tl.reject(t))));n.push(t)}s.isDone?i():null===s.$?r.continue():r.continue(s.$)}})).next((()=>tl.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.J?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}constructor(t){this.store=t}}function al(t){return new tl(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=ll(t.target.error);n(e)}}))}let cl=!1;function ll(t){const e=nl.S(O());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new Ic("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cl||(cl=!0,setTimeout((()=>{throw t}),0)),t}}return t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}}function hl(t){return null==t}function dl(t){return 0===t&&1/t==-1/0}function fl(t){return"number"==typeof t&&Number.isInteger(t)&&!dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ul._e=-1;const pl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ml=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],gl=ml;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{insert(t,e){return new bl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,kl.BLACK,null,null))}remove(t){return new bl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,kl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xl(this.root,t,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xl(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||kl.EMPTY}}class xl{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class kl{copy(t,e,n,i,r){return new kl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return kl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return kl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,kl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,kl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xc();if(this.right.isRed())throw xc();const t=this.left.check();if(t!==this.right.check())throw xc();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:kl.RED,this.left=null!=i?i:kl.EMPTY,this.right=null!=r?r:kl.EMPTY,this.size=this.left.size+1+this.right.size}}kl.EMPTY=null,kl.RED=!0,kl.BLACK=!1,kl.EMPTY=new class{get key(){throw xc()}get value(){throw xc()}get color(){throw xc()}get left(){throw xc()}get right(){throw xc()}copy(t,e,n,i,r){return this}insert(t,e,n){return new kl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _l{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new El(this.data.getIterator())}getIteratorFrom(t){return new El(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof _l))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new _l(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new bl(this.comparator)}}class El{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Il{static empty(){return new Il([])}unionWith(t){let e=new _l(qc.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Il(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Uc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(qc.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Tl("Invalid base64 string: "+t):t}}(t);return new Sl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Sl(e)}[Cl](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Fc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Sl.EMPTY_BYTE_STRING=new Sl("");const Nl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Al(t){if(kc(!!t),"string"==typeof t){let e=0;const n=Nl.exec(t);if(kc(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Rl(t.seconds),nanos:Rl(t.nanos)}}function Rl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ll(t){return"string"==typeof t?Sl.fromBase64String(t):Sl.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ol(t){const e=t.mapValue.fields.__previous_value__;return Dl(e)?Ol(e):e}function Ml(t){const e=Al(t.mapValue.fields.__local_write_time__.timestampValue);return new Vc(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,e,n,i,r,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Fl{static empty(){return new Fl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fl&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dl(t)?4:Zl(t)?9007199254740991:10:xc()}function zl(t,e){if(t===e)return!0;const n=Vl(t);if(n!==Vl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ml(t).isEqual(Ml(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Al(t.timestampValue),i=Al(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,Ll(t.bytesValue).isEqual(Ll(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Rl(t.geoPointValue.latitude)===Rl(e.geoPointValue.latitude)&&Rl(t.geoPointValue.longitude)===Rl(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Rl(t.integerValue)===Rl(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Rl(t.doubleValue),i=Rl(e.doubleValue);return n===i?dl(n)===dl(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Uc(t.arrayValue.values||[],e.arrayValue.values||[],zl);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(yl(n)!==yl(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!zl(n[t],i[t])))return!1;return!0}(t,e);default:return xc()}var i}function Bl(t,e){return void 0!==(t.values||[]).find((t=>zl(t,e)))}function jl(t,e){if(t===e)return 0;const n=Vl(t),i=Vl(e);if(n!==i)return Fc(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Rl(t.integerValue||t.doubleValue),i=Rl(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Wl(t.timestampValue,e.timestampValue);case 4:return Wl(Ml(t),Ml(e));case 5:return Fc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ll(t),i=Ll(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Fc(n[t],i[t]);if(0!==e)return e}return Fc(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Fc(Rl(t.latitude),Rl(e.latitude));return 0!==n?n:Fc(Rl(t.longitude),Rl(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=jl(n[t],i[t]);if(e)return e}return Fc(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ul.mapValue&&e===Ul.mapValue)return 0;if(t===Ul.mapValue)return 1;if(e===Ul.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=Fc(i[t],s[t]);if(0!==e)return e;const o=jl(n[i[t]],r[s[t]]);if(0!==o)return o}return Fc(i.length,s.length)}(t.mapValue,e.mapValue);default:throw xc()}}function Wl(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Fc(t,e);const n=Al(t),i=Al(e),r=Fc(n.seconds,i.seconds);return 0!==r?r:Fc(n.nanos,i.nanos)}function ql(t){return Hl(t)}function Hl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Al(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ll(t.bytesValue).toBase64():"referenceValue"in t?function(t){return Hc.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Hl(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Hl(t.fields[r])}`;return n+"}"}(t.mapValue):xc()}function $l(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kl(t){return!!t&&"integerValue"in t}function Gl(t){return!!t&&"arrayValue"in t}function Xl(t){return!!t&&"nullValue"in t}function Ql(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jl(t){return!!t&&"mapValue"in t}function Yl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vl(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Yl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Zl(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tu{static empty(){return new tu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Jl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yl(e)}setAll(t){let e=qc.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Yl(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Jl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zl(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){vl(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new tu(Yl(this.value))}constructor(t){this.value=t}}function eu(t){const e=[];return vl(t.fields,((t,n)=>{const i=new qc([t]);if(Jl(n)){const t=eu(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Il(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class nu{static newInvalidDocument(t){return new nu(t,0,zc.min(),zc.min(),zc.min(),tu.empty(),0)}static newFoundDocument(t,e,n,i){return new nu(t,1,e,zc.min(),n,i,0)}static newNoDocument(t,e){return new nu(t,2,e,zc.min(),zc.min(),tu.empty(),0)}static newUnknownDocument(t,e){return new nu(t,3,e,zc.min(),zc.min(),tu.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(zc.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=tu.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=tu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=zc.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof nu&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e){this.position=t,this.inclusive=e}}function ru(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?Hc.comparator(Hc.fromName(o.referenceValue),n.key):jl(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function su(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zl(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,e="asc"){this.field=t,this.dir=e}}function au(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{}class lu extends cu{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new yu(t,e,n):"array-contains"===e?new xu(t,n):"in"===e?new ku(t,n):"not-in"===e?new _u(t,n):"array-contains-any"===e?new Eu(t,n):new lu(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new vu(t,n):new wu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(jl(e,this.value)):null!==e&&Vl(this.value)===Vl(e)&&this.matchesComparison(jl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return xc()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class uu extends cu{static create(t,e){return new uu(t,e)}matches(t){return hu(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}}function hu(t){return"and"===t.op}function du(t){return fu(t)&&hu(t)}function fu(t){for(const e of t.filters)if(e instanceof uu)return!1;return!0}function pu(t){if(t instanceof lu)return t.field.canonicalString()+t.op.toString()+ql(t.value);if(du(t))return t.filters.map((t=>pu(t))).join(",");{const e=t.filters.map((t=>pu(t))).join(",");return`${t.op}(${e})`}}function mu(t,e){return t instanceof lu?(n=t,(i=e)instanceof lu&&n.op===i.op&&n.field.isEqual(i.field)&&zl(n.value,i.value)):t instanceof uu?function(t,e){return e instanceof uu&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&mu(n,e.filters[i])),!0)}(t,e):void xc();var n,i}function gu(t){return t instanceof lu?`${(e=t).field.canonicalString()} ${e.op} ${ql(e.value)}`:t instanceof uu?function(t){return t.op.toString()+" {"+t.getFilters().map(gu).join(" ,")+"}"}(t):"Filter";var e}class yu extends lu{matches(t){const e=Hc.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=Hc.fromName(n.referenceValue)}}class vu extends lu{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=bu("in",e)}}class wu extends lu{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=bu("not-in",e)}}function bu(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Hc.fromName(t.referenceValue)))}class xu extends lu{matches(t){const e=t.data.field(this.field);return Gl(e)&&Bl(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class ku extends lu{matches(t){const e=t.data.field(this.field);return null!==e&&Bl(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class _u extends lu{matches(t){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Bl(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Eu extends lu{matches(t){const e=t.data.field(this.field);return!(!Gl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Bl(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ce=null}}function Tu(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Iu(t,e,n,i,r,s,o)}function Cu(t){const e=_c(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>pu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),hl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ql(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ql(t))).join(",")),e.ce=t}return e.ce}function Su(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!au(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!su(t.startAt,e.startAt)&&su(t.endAt,e.endAt)}function Nu(t){return Hc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Au{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Ru(t,e,n,i,r,s,o,a){return new Au(t,e,n,i,r,s,o,a)}function Lu(t){return new Au(t)}function Du(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ou(t){return null!==t.collectionGroup}function Mu(t){const e=_c(t);if(null===e.le){e.le=[];const t=new Set;for(const n of e.explicitOrderBy)e.le.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new _l(qc.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new ou(i,n))})),t.has(qc.keyField().canonicalString())||e.le.push(new ou(qc.keyField(),n))}return e.le}function Pu(t){const e=_c(t);return e.he||(e.he=Fu(e,Mu(t))),e.he}function Fu(t,e){if("F"===t.limitType)return Tu(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new ou(t.field,e)}));const n=t.endAt?new iu(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new iu(t.startAt.position,t.startAt.inclusive):null;return Tu(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Uu(t,e){const n=t.filters.concat([e]);return new Au(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vu(t,e,n){return new Au(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zu(t,e){return Su(Pu(t),Pu(e))&&t.limitType===e.limitType}function Bu(t){return`${Cu(Pu(t))}|lt:${t.limitType}`}function ju(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>gu(t))).join(", ")}]`),hl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ql(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ql(t))).join(",")),`Target(${e})`}(Pu(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Hc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Mu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=ru(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,Mu(n),i)||n.endAt&&!function(t,e,n){const i=ru(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,Mu(n),i)));var n,i}function qu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hu(t){return(e,n)=>{let i=!1;for(const r of Mu(t)){const t=$u(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function $u(t,e,n){const i=t.field.isKeyField()?Hc.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?jl(i,r):xc()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return xc()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){vl(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return wl(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new bl(Hc.comparator);function Xu(){return Gu}const Qu=new bl(Hc.comparator);function Ju(...t){let e=Qu;for(const n of t)e=e.insert(n.key,n);return e}function Yu(t){let e=Qu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Zu(){return eh()}function th(){return eh()}function eh(){return new Ku((t=>t.toString()),((t,e)=>t.isEqual(e)))}const nh=new bl(Hc.comparator),ih=new _l(Hc.comparator);function rh(...t){let e=ih;for(const n of t)e=e.add(n);return e}const sh=new _l(Fc);function oh(){return sh}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dl(e)?"-0":e}}function ch(t){return{integerValue:""+t}}function lh(t,e){return fl(e)?ch(e):ah(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function hh(t,e,n){return t instanceof ph?mh(t,e):t instanceof gh?yh(t,e):n}function dh(t,e){return t instanceof vh?Kl(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null;var n,i}class fh extends uh{}class ph extends uh{constructor(t){super(),this.elements=t}}function mh(t,e){const n=bh(e);for(const e of t.elements)n.some((t=>zl(t,e)))||n.push(e);return{arrayValue:{values:n}}}class gh extends uh{constructor(t){super(),this.elements=t}}function yh(t,e){let n=bh(e);for(const e of t.elements)n=n.filter((t=>!zl(t,e)));return{arrayValue:{values:n}}}class vh extends uh{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function wh(t){return Rl(t.integerValue||t.doubleValue)}function bh(t){return Gl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e){this.version=t,this.transformResults=e}}class kh{static none(){return new kh}static exists(t){return new kh(void 0,t)}static updateTime(t){return new kh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function _h(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Eh{}function Ih(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Mh(t.key,kh.none()):new Ah(t.key,t.data,kh.none());{const n=t.data,i=tu.empty();let r=new _l(qc.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Rh(t.key,i,new Il(r.toArray()),kh.none())}}function Th(t,e,n){var i;t instanceof Ah?function(t,e,n){const i=t.value.clone(),r=Dh(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Rh?function(t,e,n){if(!_h(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Dh(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Lh(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function Ch(t,e,n,i){return t instanceof Ah?function(t,e,n,i){if(!_h(t.precondition,e))return n;const r=t.value.clone(),s=Oh(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Rh?function(t,e,n,i){if(!_h(t.precondition,e))return n;const r=Oh(t.fieldTransforms,i,e),s=e.data;return s.setAll(Lh(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(r=e,s=n,_h(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function Sh(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=dh(i.transform,t||null);null!=r&&(null===n&&(n=tu.empty()),n.set(i.field,r))}return n||null}function Nh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Uc(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof ph&&i instanceof ph||n instanceof gh&&i instanceof gh?Uc(n.elements,i.elements,zl):n instanceof vh&&i instanceof vh?zl(n.Ie,i.Ie):n instanceof fh&&i instanceof fh);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Ah extends Eh{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Rh extends Eh{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Lh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Dh(t,e,n){const i=new Map;kc(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,hh(o,a,n[r]))}return i}function Oh(t,e,n){const i=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);i.set(a.field,(s=c,o=e,(r=t)instanceof fh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Dl(e)&&(e=Ol(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):r instanceof ph?mh(r,s):r instanceof gh?yh(r,s):function(t,e){const n=dh(t,e),i=wh(n)+wh(t.Ie);return Kl(n)&&Kl(t.Ie)?ch(i):ah(t.serializer,i)}(r,s)))}var r,s,o;return i}class Mh extends Eh{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ph extends Eh{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Th(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ch(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ch(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=th();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Ih(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(zc.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),rh())}isEqual(t){return this.batchId===t.batchId&&Uc(this.mutations,t.mutations,((t,e)=>Nh(t,e)))&&Uc(this.baseMutations,t.baseMutations,((t,e)=>Nh(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class Uh{static from(t,e,n){kc(t.mutations.length===n.length);let i=nh;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new Uh(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zh{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bh,jh;function Wh(t){switch(t){default:return xc();case Ec.CANCELLED:case Ec.UNKNOWN:case Ec.DEADLINE_EXCEEDED:case Ec.RESOURCE_EXHAUSTED:case Ec.INTERNAL:case Ec.UNAVAILABLE:case Ec.UNAUTHENTICATED:return!1;case Ec.INVALID_ARGUMENT:case Ec.NOT_FOUND:case Ec.ALREADY_EXISTS:case Ec.PERMISSION_DENIED:case Ec.FAILED_PRECONDITION:case Ec.ABORTED:case Ec.OUT_OF_RANGE:case Ec.UNIMPLEMENTED:case Ec.DATA_LOSS:return!0}}function qh(t){if(void 0===t)return vc("GRPC error has no .code"),Ec.UNKNOWN;switch(t){case Bh.OK:return Ec.OK;case Bh.CANCELLED:return Ec.CANCELLED;case Bh.UNKNOWN:return Ec.UNKNOWN;case Bh.DEADLINE_EXCEEDED:return Ec.DEADLINE_EXCEEDED;case Bh.RESOURCE_EXHAUSTED:return Ec.RESOURCE_EXHAUSTED;case Bh.INTERNAL:return Ec.INTERNAL;case Bh.UNAVAILABLE:return Ec.UNAVAILABLE;case Bh.UNAUTHENTICATED:return Ec.UNAUTHENTICATED;case Bh.INVALID_ARGUMENT:return Ec.INVALID_ARGUMENT;case Bh.NOT_FOUND:return Ec.NOT_FOUND;case Bh.ALREADY_EXISTS:return Ec.ALREADY_EXISTS;case Bh.PERMISSION_DENIED:return Ec.PERMISSION_DENIED;case Bh.FAILED_PRECONDITION:return Ec.FAILED_PRECONDITION;case Bh.ABORTED:return Ec.ABORTED;case Bh.OUT_OF_RANGE:return Ec.OUT_OF_RANGE;case Bh.UNIMPLEMENTED:return Ec.UNIMPLEMENTED;case Bh.DATA_LOSS:return Ec.DATA_LOSS;default:return xc()}}(jh=Bh||(Bh={}))[jh.OK=0]="OK",jh[jh.CANCELLED=1]="CANCELLED",jh[jh.UNKNOWN=2]="UNKNOWN",jh[jh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jh[jh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jh[jh.NOT_FOUND=5]="NOT_FOUND",jh[jh.ALREADY_EXISTS=6]="ALREADY_EXISTS",jh[jh.PERMISSION_DENIED=7]="PERMISSION_DENIED",jh[jh.UNAUTHENTICATED=16]="UNAUTHENTICATED",jh[jh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jh[jh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jh[jh.ABORTED=10]="ABORTED",jh[jh.OUT_OF_RANGE=11]="OUT_OF_RANGE",jh[jh.UNIMPLEMENTED=12]="UNIMPLEMENTED",jh[jh.INTERNAL=13]="INTERNAL",jh[jh.UNAVAILABLE=14]="UNAVAILABLE",jh[jh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Hh=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=new dc([4294967295,4294967295],0);function Gh(t){const e=$h().encode(t),n=new hc;return n.update(e),new Uint8Array(n.digest())}function Xh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dc([n,i],0),new dc([r,s],0)]}class Qh{de(t,e,n){let i=t.add(e.multiply(dc.fromNumber(n)));return 1===i.compare(Kh)&&(i=new dc([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Gh(t),[n,i]=Xh(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,i,t);if(!this.Ae(e))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),s=new Qh(r,i,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=Gh(t),[n,i]=Xh(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,i,t);this.Re(e)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Jh(`Invalid padding: ${e}`);if(n<0)throw new Jh(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Jh(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Jh(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=dc.fromNumber(this.Te)}}class Jh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Zh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Yh(zc.min(),i,new bl(Fc),Xu(),rh())}constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}}class Zh{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Zh(n,e,rh(),rh(),rh())}constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,n,i){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=i}}class ed{constructor(t,e){this.targetId=t,this.fe=e}}class nd{constructor(t,e,n=Sl.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class id{get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=rh(),e=rh(),n=rh();return this.pe.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:xc()}})),new Zh(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=od()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,kc(this.ge>=0)}Be(){this.Se=!0,this.we=!0}constructor(){this.ge=0,this.pe=od(),this.ye=Sl.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}}class rd{$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:xc()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,i=this.Ye(e);if(i){const r=i.target;if(Nu(r))if(0===n){const t=new Hc(r.path);this.We(e,t,nu.newNoDocument(t,zc.min()))}else kc(1===n);else{const i=this.Ze(e);if(i!==n){const n=this.Xe(t),r=n?this.et(n,t,i):1;if(0!==r){this.He(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==Hh||Hh.tt(function(t,e,n,i,r){var s,o,a,c,l,u;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:t=>{var e;return null!==(e=null==i?void 0:i.mightContain(t))&&void 0!==e&&e}}),h}(i,t.fe,this.Le.nt(),n,r))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=e;let s,o;try{s=Ll(n).toUint8Array()}catch(t){if(t instanceof Tl)return wc("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Qh(s,i,r)}catch(t){return wc(t instanceof Jh?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const r=this.Le.nt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),i++)})),i}it(t){const e=new Map;this.ke.forEach(((n,i)=>{const r=this.Ye(i);if(r){if(n.current&&Nu(r.target)){const e=new Hc(r.target.path);null!==this.qe.get(e)||this.st(i,e)||this.We(i,e,nu.newNoDocument(e,t))}n.De&&(e.set(i,n.ve()),n.Fe())}}));let n=rh();this.Qe.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const i=new Yh(t,e,this.Ke,this.qe,n);return this.qe=Xu(),this.Qe=sd(),this.Ke=new bl(Fc),i}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new id,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new _l(Fc),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||yc("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new id),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Le=t,this.ke=new Map,this.qe=Xu(),this.Qe=sd(),this.Ke=new bl(Fc)}}function sd(){return new bl(Hc.comparator)}function od(){return new bl(Hc.comparator)}const ad={asc:"ASCENDING",desc:"DESCENDING"},cd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ld={and:"AND",or:"OR"};class ud{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hd(t,e){return t.useProto3Json||hl(e)?e:{value:e}}function dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fd(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pd(t,e){return dd(t,e.toTimestamp())}function md(t){return kc(!!t),zc.fromTimestamp(function(t){const e=Al(t);return new Vc(e.seconds,e.nanos)}(t))}function gd(t,e){return yd(t,e).canonicalString()}function yd(t,e){const n=(i=t,new jc(["projects",i.projectId,"databases",i.database])).child("documents");var i;return void 0===e?n:n.child(e)}function vd(t){const e=jc.fromString(t);return kc(Fd(e)),e}function wd(t,e){return gd(t.databaseId,e.path)}function bd(t,e){const n=vd(e);if(n.get(1)!==t.databaseId.projectId)throw new Ic(Ec.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ic(Ec.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Hc(Ed(n))}function xd(t,e){return gd(t.databaseId,e)}function kd(t){const e=vd(t);return 4===e.length?jc.emptyPath():Ed(e)}function _d(t){return new jc(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ed(t){return kc(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Id(t,e,n){return{name:wd(t,e),fields:n.value.mapValue.fields}}function Td(t,e){let n;if(e instanceof Ah)n={update:Id(t,e.key,e.value)};else if(e instanceof Mh)n={delete:wd(t,e.key)};else if(e instanceof Rh)n={update:Id(t,e.key,e.data),updateMask:Pd(e.fieldMask)};else{if(!(e instanceof Ph))return xc();n={verify:wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof fh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ph)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof gh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof vh)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw xc()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:pd(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:xc())),n;var i,r}function Cd(t,e){return{documents:[xd(t,e.path)]}}function Sd(t,e){const n={structuredQuery:{}},i=e.path;let r;null!==e.collectionGroup?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=xd(t,r);const s=function(t){if(0!==t.length)return Md(uu.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:Dd((e=t).field),direction:Rd(e.dir)};var e}))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hd(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ut:n,parent:r};var c}function Nd(t){let e=kd(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){kc(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ad(t);return e instanceof uu&&du(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new ou(Od((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,hl(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new iu(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new iu(n,e)}(n.endAt)),Ru(e,r,o,s,a,"F",c,l)}function Ad(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Od(t.unaryFilter.field);return lu.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Od(t.unaryFilter.field);return lu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Od(t.unaryFilter.field);return lu.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Od(t.unaryFilter.field);return lu.create(r,"!=",{nullValue:"NULL_VALUE"});default:return xc()}}(t):void 0!==t.fieldFilter?(n=t,lu.create(Od(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xc()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,uu.create(e.compositeFilter.filters.map((t=>Ad(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return xc()}}(e.compositeFilter.op))):xc();var e,n}function Rd(t){return ad[t]}function Ld(t){return cd[t]}function Dd(t){return{fieldPath:t.canonicalString()}}function Od(t){return qc.fromServerFormat(t.fieldPath)}function Md(t){return t instanceof lu?function(t){if("=="===t.op){if(Ql(t.value))return{unaryFilter:{field:Dd(t.field),op:"IS_NAN"}};if(Xl(t.value))return{unaryFilter:{field:Dd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ql(t.value))return{unaryFilter:{field:Dd(t.field),op:"IS_NOT_NAN"}};if(Xl(t.value))return{unaryFilter:{field:Dd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dd(t.field),op:Ld(t.op),value:t.value}}}(t):t instanceof uu?function(t){const e=t.getFilters().map((t=>Md(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,ld[n]),filters:e}};var n}(t):xc()}function Pd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Fd(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{withSequenceNumber(t){return new Ud(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ud(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ud(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ud(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}constructor(t,e,n,i,r=zc.min(),s=zc.min(),o=Sl.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.ct=t}}function zd(t){const e=Nd({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Vu(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(Rl(t.integerValue));else if("doubleValue"in t){const n=Rl(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),dl(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(Ll(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?Zl(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):xc()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const t of Object.keys(n))this.Rt(t,e),this.It(n[t],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const t of n)this.It(t,e)}gt(t,e){this.Et(e,37),Hc.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}constructor(){}}Bd.bt=new Bd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jd{addToCollectionParentIndex(t,e){return this._n.add(e),tl.resolve()}getCollectionParents(t,e){return tl.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return tl.resolve()}deleteFieldIndex(t,e){return tl.resolve()}deleteAllFieldIndexes(t){return tl.resolve()}createTargetIndexes(t,e){return tl.resolve()}getDocumentsMatchingTarget(t,e){return tl.resolve(null)}getIndexType(t,e){return tl.resolve(0)}getFieldIndexes(t,e){return tl.resolve([])}getNextCollectionGroupToUpdate(t){return tl.resolve(null)}getMinOffset(t,e){return tl.resolve(Xc.min())}getMinOffsetFromCollectionGroup(t,e){return tl.resolve(Xc.min())}updateCollectionGroup(t,e,n){return tl.resolve()}updateIndexEntries(t,e){return tl.resolve()}constructor(){this._n=new Wd}}class Wd{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new _l(jc.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new _l(jc.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class qd{static withCacheSize(t){return new qd(t,qd.DEFAULT_COLLECTION_PERCENTILE,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qd.DEFAULT_COLLECTION_PERCENTILE=10,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qd.DEFAULT=new qd(41943040,qd.DEFAULT_COLLECTION_PERCENTILE,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qd.DISABLED=new qd(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hd{next(){return this.On+=2,this.On}static Nn(){return new Hd(0)}static Bn(){return new Hd(-1)}constructor(t){this.On=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $d{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,nu.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?tl.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new Ku((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ch(n.mutation,t,Il.empty(),Vc.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,rh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=rh()){const i=Zu();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Ju();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Zu();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,rh())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Xu();const s=eh(),o=eh();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Rh)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Ch(o.mutation,e,o.mutation.getFieldMask(),Vc.now())):s.set(e.key,Il.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Kd(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=eh();let i=new bl(((t,e)=>t-e)),r=rh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Il.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||rh()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=th();c.forEach((t=>{if(!r.has(t)){const i=Ih(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return tl.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return r=e,Hc.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Ou(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i);var r}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):tl.resolve(Zu());let o=-1,a=r;return s.next((e=>tl.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?tl.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,rh()))).next((t=>({batchId:o,changes:Yu(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Hc(e)).next((t=>{let e=Ju();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=Ju();return this.indexManager.getCollectionParents(t,r).next((o=>tl.forEach(o,(o=>{const a=(c=e,l=o.child(r),new Au(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,l;return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,nu.newInvalidDocument(i)))}));let n=Ju();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&Ch(s.mutation,i,Il.empty(),Vc.now()),Wu(e,i)&&(n=n.insert(t,i))})),n}))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{getBundleMetadata(t,e){return tl.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,{id:(n=e).id,version:n.version,createTime:md(n.createTime)}),tl.resolve();var n}getNamedQuery(t,e){return tl.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,{name:(n=e).name,query:zd(n.bundledQuery),readTime:md(n.readTime)}),tl.resolve();var n}constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{getOverlay(t,e){return tl.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Zu();return tl.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),tl.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),tl.resolve()}getOverlaysForCollection(t,e,n){const i=Zu(),r=e.length+1,s=new Hc(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return tl.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new bl(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Zu(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Zu(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return tl.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Vh(e,n));let r=this.hr.get(e);void 0===r&&(r=rh(),this.hr.set(e,r)),this.hr.set(e,r.add(n.key))}constructor(){this.overlays=new bl(Hc.comparator),this.hr=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new Yd(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new Yd(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new Hc(new jc([])),n=new Yd(e,t),i=new Yd(e,t+1),r=[];return this.Tr.forEachInRange([n,i],(t=>{this.Ar(t),r.push(t.key)})),r}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new Hc(new jc([])),n=new Yd(e,t),i=new Yd(e,t+1);let r=rh();return this.Tr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Yd(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Pr=new _l(Yd.Ir),this.Tr=new _l(Yd.Er)}}class Yd{static Ir(t,e){return Hc.comparator(t.key,e.key)||Fc(t.pr,e.pr)}static Er(t,e){return Fc(t.pr,e.pr)||Hc.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.pr=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{checkEmpty(t){return tl.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Fh(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.wr=this.wr.add(new Yd(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return tl.resolve(s)}lookupMutationBatch(t,e){return tl.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.br(n),r=i<0?0:i;return tl.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return tl.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return tl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Yd(e,0),i=new Yd(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],(t=>{const e=this.Sr(t.pr);r.push(e)})),tl.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new _l(Fc);return e.forEach((t=>{const e=new Yd(t,0),i=new Yd(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,i],(t=>{n=n.add(t.pr)}))})),tl.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;Hc.isDocumentKey(r)||(r=r.child(""));const s=new Yd(new Hc(r),0);let o=new _l(Fc);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.pr)),!0)}),s),tl.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){kc(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return tl.forEach(e.mutations,(i=>{const r=new Yd(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new Yd(e,0),i=this.wr.firstAfterOrEqual(n);return tl.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,tl.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new _l(Yd.Ir)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return tl.resolve(n?n.document.mutableCopy():nu.newInvalidDocument(e))}getEntries(t,e){let n=Xu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():nu.newInvalidDocument(t))})),tl.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Xu();const s=e.path,o=new Hc(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Qc(Gc(o),n)<=0||(i.has(o.key)||Wu(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return tl.resolve(r)}getAllFromCollectionGroup(t,e,n,i){xc()}Fr(t,e){return tl.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ef(this)}getSize(t){return tl.resolve(this.size)}constructor(t){this.vr=t,this.docs=new bl(Hc.comparator),this.size=0}}class ef extends $d{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(n)})),tl.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}constructor(t){super(),this.ar=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),tl.resolve()}getLastRemoteSnapshotVersion(t){return tl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return tl.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),tl.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),tl.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Hd(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,tl.resolve()}updateTargetData(t,e){return this.qn(e),tl.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,tl.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),tl.waitFor(r).next((()=>i))}getTargetCount(t){return tl.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return tl.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),tl.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),tl.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),tl.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return tl.resolve(n)}containsKey(t,e){return tl.resolve(this.Nr.containsKey(e))}constructor(t){this.persistence=t,this.Mr=new Ku((t=>Cu(t)),Su),this.lastRemoteSnapshotVersion=zc.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Jd,this.targetCount=0,this.Br=Hd.Nn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Lr[t.toKey()];return n||(n=new Zd(e,this.referenceDelegate),this.Lr[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){yc("MemoryPersistence","Starting transaction:",t);const i=new sf(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((t=>this.referenceDelegate.Wr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Gr(t,e){return tl.or(Object.values(this.Lr).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Lr={},this.overlays={},this.kr=new ul(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new nf(this),this.indexManager=new jd,this.remoteDocumentCache=new tf((t=>this.referenceDelegate.Kr(t))),this.serializer=new Vd(e),this.$r=new Xd(this.serializer)}}class sf extends Yc{constructor(t){super(),this.currentSequenceNumber=t}}class of{static Hr(t){return new of(t)}get Jr(){if(this.jr)return this.jr;throw xc()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),tl.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),tl.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),tl.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tl.forEach(this.Jr,(n=>{const i=Hc.fromPath(n);return this.Yr(t,i).next((t=>{t||e.removeEntry(i,zc.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return tl.or([()=>tl.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}constructor(t){this.persistence=t,this.zr=new Jd,this.jr=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class af{static Ki(t,e){let n=rh(),i=rh();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new af(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=i}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}constructor(){this._documentReadCount=0}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.ji(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Hi(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new cf;return this.Ji(t,e,n).next((i=>{if(r.result=i,this.Ui)return this.Yi(t,e,n,i.size)}))})).next((()=>r.result))}Yi(t,e,n,i){return n.documentReadCount<this.Wi?(gc()<=nt.DEBUG&&yc("QueryEngine","SDK will not create cache indexes for query:",ju(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),tl.resolve()):(gc()<=nt.DEBUG&&yc("QueryEngine","Query:",ju(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(gc()<=nt.DEBUG&&yc("QueryEngine","The SDK decides to create cache indexes for query:",ju(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pu(e))):tl.resolve())}ji(t,e){if(Du(e))return tl.resolve(null);let n=Pu(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Vu(e,null,"F"),n=Pu(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=rh(...i);return this.zi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Zi(e,i);return this.Xi(e,s,r,n.readTime)?this.ji(t,Vu(e,null,"F")):this.es(t,s,e,n)}))))})))))}Hi(t,e,n,i){return Du(e)||i.isEqual(zc.min())?tl.resolve(null):this.zi.getDocuments(t,n).next((r=>{const s=this.Zi(e,r);return this.Xi(e,s,n,i)?tl.resolve(null):(gc()<=nt.DEBUG&&yc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ju(e)),this.es(t,s,e,Kc(i,-1)).next((t=>t)))}))}Zi(t,e){let n=new _l(Hu(t));return e.forEach(((e,i)=>{Wu(t,i)&&(n=n.add(i))})),n}Xi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(t,e,n){return gc()<=nt.DEBUG&&yc("QueryEngine","Using full collection scan to execute query:",ju(e)),this.zi.getDocumentsMatchingQuery(t,e,Xc.min(),n)}es(t,e,n,i){return this.zi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=F()?8:nl.v(O())>0?6:4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gd(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}constructor(t,e,n,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new bl(Fc),this.rs=new Ku((t=>Cu(t)),Su),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}}function hf(t,e,n,i){return new uf(t,e,n,i)}async function df(t,e){const n=_c(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=rh();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function ff(t){const e=_c(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}function pf(t,e,n){let i=rh(),r=rh();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Xu();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(zc.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):yc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{cs:i,ls:r}}))}function mf(t,e){const n=_c(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function gf(t,e){const n=_c(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Qr.getTargetData(t,e).next((r=>r?(i=r,tl.resolve(i)):n.Qr.allocateTargetId(t).next((r=>(i=new Ud(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.Qr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.ns.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(t.targetId,t),n.rs.set(e,t.targetId)),t}))}async function yf(t,e,n){const i=_c(t),r=i.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!sl(t))throw t;yc("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.ns=i.ns.remove(e),i.rs.delete(r.target)}function vf(t,e,n){const i=_c(t);let r=zc.min(),s=rh();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const i=_c(t),r=i.rs.get(n);return void 0!==r?tl.resolve(i.ns.get(r)):i.Qr.getTargetData(e,n)}(i,t,Pu(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.ts.getDocumentsMatchingQuery(t,e,n?r:zc.min(),n?s:rh()))).next((t=>(wf(i,qu(e),t),{documents:t,hs:s})))))}function wf(t,e,n){let i=t.ss.get(e)||zc.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.ss.set(e,i)}class bf{As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=oh()}}class xf{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new bf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.no=new bf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{io(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){yc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){yc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ef=null;function If(){return null===Ef?Ef=268435456+Math.round(2147483648*Math.random()):Ef++,"0x"+Ef.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Tf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}constructor(t){this.lo=t.lo,this.ho=t.ho}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends class{get wo(){return!1}So(t,e,n,i,r){const s=If(),o=this.bo(t,e.toUriEncodedString());yc("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,i,r),this.Co(t,o,a,n).then((e=>(yc("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw wc("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,i,r,s){return this.So(t,e,n,i,r)}Do(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+pc,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}bo(t,e){const n=Tf[t];return`${this.fo}/v1/${e}:${n}`}terminate(){}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=e+"://"+t.host,this.po=`projects/${n}/databases/${i}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}}{Co(t,e,n,i){const r=If();return new Promise(((s,o)=>{const a=new uc;a.setWithCredentials(!0),a.listenOnce(oc.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case sc.NO_ERROR:const e=a.getResponseJson();yc("WebChannelConnection",`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case sc.TIMEOUT:yc("WebChannelConnection",`RPC '${t}' ${r} timed out`),o(new Ic(Ec.DEADLINE_EXCEEDED,"Request time out"));break;case sc.HTTP_ERROR:const n=a.getStatus();if(yc("WebChannelConnection",`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ec).indexOf(e)>=0?e:Ec.UNKNOWN}(e.status);o(new Ic(t,e.message))}else o(new Ic(Ec.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ic(Ec.UNAVAILABLE,"Connection failed."));break;default:xc()}}finally{yc("WebChannelConnection",`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);yc("WebChannelConnection",`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}Fo(t,e,n){const i=If(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=ic(),o=rc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=r.join("");yc("WebChannelConnection",`Creating RPC '${t}' stream ${i}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new Cf({lo:e=>{d?yc("WebChannelConnection",`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(yc("WebChannelConnection",`Opening RPC '${t}' stream ${i} transport.`),u.open(),h=!0),yc("WebChannelConnection",`RPC '${t}' stream ${i} sending:`,e),u.send(e))},ho:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,lc.EventType.OPEN,(()=>{d||yc("WebChannelConnection",`RPC '${t}' stream ${i} transport opened.`)})),p(u,lc.EventType.CLOSE,(()=>{d||(d=!0,yc("WebChannelConnection",`RPC '${t}' stream ${i} transport closed`),f.Vo())})),p(u,lc.EventType.ERROR,(e=>{d||(d=!0,wc("WebChannelConnection",`RPC '${t}' stream ${i} transport errored:`,e),f.Vo(new Ic(Ec.UNAVAILABLE,"The operation could not be completed")))})),p(u,lc.EventType.MESSAGE,(e=>{var n;if(!d){const r=e.data[0];kc(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){yc("WebChannelConnection",`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Bh[t];if(void 0!==e)return qh(e)}(e),r=o.message;void 0===n&&(n=Ec.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),d=!0,f.Vo(new Ic(n,r)),u.close()}else yc("WebChannelConnection",`RPC '${t}' stream ${i} received:`,r),f.mo(r)}})),p(o,ac.STAT_EVENT,(e=>{e.stat===cc.PROXY?yc("WebChannelConnection",`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===cc.NOPROXY&&yc("WebChannelConnection",`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t){return new ud(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-n);i>0&&yc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Lo=Date.now(),t()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}constructor(t,e,n=1e3,i=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=n,this.xo=i,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==t?this.jo.reset():e&&e.code===Ec.RESOURCE_EXHAUSTED?(vc(e.toString()),vc("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===Ec.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Wo===e&&this.o_(t,n)}),(e=>{t((()=>{const t=new Ic(Ec.UNKNOWN,"Fetching auth token failed: "+e.message);return this.__(t)}))}))}o_(t,e){const n=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((t=>{n((()=>this.__(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(t){return yc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget((()=>this.Wo===t?e():(yc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,r,s,o,a){this.oi=t,this.$o=n,this.Uo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Rf(t,e)}}class Df extends Lf{a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(i=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:xc(),s=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(kc(void 0===e||"string"==typeof e),Sl.fromBase64String(e||"")):(kc(void 0===e||e instanceof Uint8Array),Sl.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Ec.UNKNOWN:qh(t.code);return new Ic(e,t.message||"")}(a);n=new nd(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=bd(t,i.document.name),s=md(i.document.updateTime),o=i.document.createTime?md(i.document.createTime):zc.min(),a=new tu({mapValue:{fields:i.document.fields}}),c=nu.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new td(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=bd(t,i.document),s=i.readTime?md(i.readTime):zc.min(),o=nu.newNoDocument(r,s),a=i.removedTargetIds||[];n=new td([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=bd(t,i.document),s=i.removedTargetIds||[];n=new td([],s,r,null)}else{if(!("filter"in e))return xc();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:r}=t,s=new zh(i,r),o=t.targetId;n=new ed(o,s)}}var i;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return zc.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?zc.min():e.readTime?md(e.readTime):zc.min()}(t);return this.listener.u_(e,n)}c_(t){const e={};e.database=_d(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=Nu(i)?{documents:Cd(t,i)}:{query:Sd(t,i).ut},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=fd(t,e.resumeToken);const i=hd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(zc.min())>0){n.readTime=dd(t,e.snapshotVersion.toTimestamp());const i=hd(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xc()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.t_(e)}l_(t){const e={};e.database=_d(this.serializer),e.removeTarget=t,this.t_(e)}constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}}class Of extends Lf{get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(kc(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(kc(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?md(t.updateTime):md(e);return n.isEqual(zc.min())&&(n=md(e)),new xh(n,t.transformResults||[])}(t,n)))):[]),r=md(t.commitTime);return this.listener.T_(r,i)}var e,n;return kc(!t.writeResults||0===t.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=_d(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Td(this.serializer,t)))};this.t_(e)}constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.h_=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends class{}{R_(){if(this.A_)throw new Ic(Ec.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.So(t,yd(e,n),i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ec.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ic(Ec.UNKNOWN,t.toString())}))}vo(t,e,n,i,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(t,yd(e,n),i,s,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ec.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ic(Ec.UNKNOWN,t.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.A_=!1}}class Pf{p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(t){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,"Online"===t&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(vc(e),this.g_=!1):yc("OnlineStateTracker",e)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io((t=>{n.enqueueAndForget((async()=>{$f(this)&&(yc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_c(t);e.v_.add(4),await Vf(e),e.x_.set("Unknown"),e.v_.delete(4),await Uf(e)}(this))}))})),this.x_=new Pf(n,i)}}async function Uf(t){if($f(t))for(const e of t.F_)await e(!0)}async function Vf(t){for(const e of t.F_)await e(!1)}function zf(t,e){const n=_c(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Hf(n)?qf(n):up(n).Jo()&&jf(n,e))}function Bf(t,e){const n=_c(t),i=up(n);n.C_.delete(e),i.Jo()&&Wf(n,e),0===n.C_.size&&(i.Jo()?i.Xo():$f(n)&&n.x_.set("Unknown"))}function jf(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(zc.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}up(t).c_(e)}function Wf(t,e){t.O_.Oe(e),up(t).l_(e)}function qf(t){t.O_=new rd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),up(t).start(),t.x_.p_()}function Hf(t){return $f(t)&&!up(t).Ho()&&t.C_.size>0}function $f(t){return 0===_c(t).v_.size}function Kf(t){t.O_=void 0}async function Gf(t){t.C_.forEach(((e,n)=>{jf(t,e)}))}async function Xf(t,e){Kf(t),Hf(t)?(t.x_.S_(e),qf(t)):t.x_.set("Unknown")}async function Qf(t,e,n){if(t.x_.set("Online"),e instanceof nd&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.C_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.C_.delete(i),t.O_.removeTarget(i))}(t,e)}catch(n){yc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Jf(t,n)}else if(e instanceof td?t.O_.$e(e):e instanceof ed?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(zc.min()))try{const e=await ff(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.O_.it(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.C_.get(i);r&&t.C_.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.C_.get(e);if(!i)return;t.C_.set(e,i.withResumeToken(Sl.EMPTY_BYTE_STRING,i.snapshotVersion)),Wf(t,e);const r=new Ud(i.target,e,n,i.sequenceNumber);jf(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){yc("RemoteStore","Failed to raise snapshot:",e),await Jf(t,e)}}async function Jf(t,e,n){if(!sl(e))throw e;t.v_.add(1),await Vf(t),t.x_.set("Offline"),n||(n=()=>ff(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{yc("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Uf(t)}))}function Yf(t,e){return e().catch((n=>Jf(t,n,e)))}async function Zf(t){const e=_c(t),n=hp(e);let i=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;tp(e);)try{const t=await mf(e.localStore,i);if(null===t){0===e.D_.length&&n.Xo();break}i=t.batchId,ep(e,t)}catch(t){await Jf(e,t)}np(e)&&ip(e)}function tp(t){return $f(t)&&t.D_.length<10}function ep(t,e){t.D_.push(e);const n=hp(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function np(t){return $f(t)&&!hp(t).Ho()&&t.D_.length>0}function ip(t){hp(t).start()}async function rp(t){hp(t).d_()}async function sp(t){const e=hp(t);for(const n of t.D_)e.I_(n.mutations)}async function op(t,e,n){const i=t.D_.shift(),r=Uh.from(i,e,n);await Yf(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Zf(t)}async function ap(t,e){e&&hp(t).P_&&await async function(t,e){if(Wh(n=e.code)&&n!==Ec.ABORTED){const n=t.D_.shift();hp(t).Zo(),await Yf(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zf(t)}var n}(t,e),np(t)&&ip(t)}async function cp(t,e){const n=_c(t);n.asyncQueue.verifyOperationInProgress(),yc("RemoteStore","RemoteStore received new credentials");const i=$f(n);n.v_.add(3),await Vf(n),i&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Uf(n)}async function lp(t,e){const n=_c(t);e?(n.v_.delete(2),await Uf(n)):e||(n.v_.add(2),await Vf(n),n.x_.set("Unknown"))}function up(t){return t.N_||(t.N_=function(t,e,n){const i=_c(t);return i.R_(),new Df(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Po:Gf.bind(null,t),To:Xf.bind(null,t),u_:Qf.bind(null,t)}),t.F_.push((async e=>{e?(t.N_.Zo(),Hf(t)?qf(t):t.x_.set("Unknown")):(await t.N_.stop(),Kf(t))}))),t.N_}function hp(t){return t.B_||(t.B_=function(t,e,n){const i=_c(t);return i.R_(),new Of(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Po:rp.bind(null,t),To:ap.bind(null,t),E_:sp.bind(null,t),T_:op.bind(null,t)}),t.F_.push((async e=>{e?(t.B_.Zo(),await Zf(t)):(await t.B_.stop(),t.D_.length>0&&(yc("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))}))),t.B_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dp{get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new dp(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ic(Ec.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Tc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function fp(t,e){if(vc("AsyncQueue",`${e}: ${t}`),sl(t))return new Ic(Ec.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{static emptySet(t){return new pp(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pp))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new pp;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||Hc.comparator(e.key,n.key):(t,e)=>Hc.comparator(t.key,e.key),this.keyedMap=Ju(),this.sortedSet=new bl(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{track(t){const e=t.doc.key,n=this.L_.get(e);n?0!==t.type&&3===n.type?this.L_=this.L_.insert(e,t):3===t.type&&1!==n.type?this.L_=this.L_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.L_=this.L_.remove(e):1===t.type&&2===n.type?this.L_=this.L_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):xc():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.L_=new bl(Hc.comparator)}}class gp{static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new gp(t,e,pp.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.q_=void 0,this.Q_=[]}}class vp{constructor(){this.queries=new Ku((t=>Bu(t)),zu),this.onlineState="Unknown",this.K_=new Set}}async function wp(t,e){const n=_c(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new yp),r)try{s.q_=await n.onListen(i)}catch(t){const n=fp(t,`Initialization of query '${ju(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&_p(n)}async function bp(t,e){const n=_c(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.Q_.indexOf(e);t>=0&&(s.Q_.splice(t,1),r=0===s.Q_.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function xp(t,e){const n=_c(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.Q_)e.W_(t)&&(i=!0);r.q_=t}}i&&_p(n)}function kp(t,e,n){const i=_c(t),r=i.queries.get(e);if(r)for(const t of r.Q_)t.onError(n);i.queries.delete(e)}function _p(t){t.K_.forEach((t=>{t.next()}))}class Ep{W_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new gp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Y_(t){t=gp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}constructor(t,e,n){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ip{constructor(t){this.key=t}}class Tp{constructor(t){this.key=t}}class Cp{get la(){return this.oa}ha(t,e){const n=e?e.Pa:new mp,i=e?e.ca:this.ca;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Wu(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Ia(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.ua(u,a)>0||c&&this.ua(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{ca:s,Pa:n,Xi:o,mutatedKeys:r}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const r=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const s=t.Pa.k_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xc()}};return n(t)-n(e)}(t.type,e.type)||this.ua(t.doc,e.doc))),this.Ta(n),i=null!=i&&i;const o=e&&!i?this.Ea():[],a=0===this.aa.size&&this.current&&!i?1:0,c=a!==this._a;return this._a=a,0!==s.length||c?{snapshot:new gp(this.query,t.ca,r,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:o}:{da:o}}U_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new mp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach((t=>this.oa=this.oa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.oa=this.oa.delete(t))),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=rh(),this.ca.forEach((t=>{this.Aa(t.key)&&(this.aa=this.aa.add(t.key))}));const e=[];return t.forEach((t=>{this.aa.has(t)||e.push(new Tp(t))})),this.aa.forEach((n=>{t.has(n)||e.push(new Ip(n))})),e}Ra(t){this.oa=t.hs,this.aa=rh();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return gp.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=rh(),this.mutatedKeys=rh(),this.ua=Hu(t),this.ca=new pp(this.ua)}}class Sp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Np{constructor(t){this.key=t,this.ma=!1}}class Ap{get isPrimaryClient(){return!0===this.Fa}constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Ku((t=>Bu(t)),zu),this.pa=new Map,this.ya=new Set,this.wa=new bl(Hc.comparator),this.Sa=new Map,this.ba=new Jd,this.Da={},this.Ca=new Map,this.va=Hd.Bn(),this.onlineState="Unknown",this.Fa=void 0}}async function Rp(t,e){const n=Xp(t);let i,r;const s=n.ga.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Va();else{const t=await gf(n.localStore,Pu(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Lp(n,e,i,"current"===s,t.resumeToken),n.isPrimaryClient&&zf(n.remoteStore,t)}return r}async function Lp(t,e,n,i,r){t.Ma=(e,n,i)=>async function(t,e,n,i){let r=e.view.ha(n);r.Xi&&(r=await vf(t.localStore,e.query,!1).then((({documents:t})=>e.view.ha(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=i&&null!=i.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,s,o);return Wp(t,e.targetId,a.da),a.snapshot}(t,e,n,i);const s=await vf(t.localStore,e,!0),o=new Cp(e,s.hs),a=o.ha(s.documents),c=Zh.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,c);Wp(t,n,l.da);const u=new Sp(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function Dp(t,e){const n=_c(t),i=n.ga.get(e),r=n.pa.get(i.targetId);if(r.length>1)return n.pa.set(i.targetId,r.filter((t=>!zu(t,e)))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await yf(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Bf(n.remoteStore,i.targetId),Bp(n,i.targetId)})).catch(Zc)):(Bp(n,i.targetId),await yf(n.localStore,i.targetId,!0))}async function Op(t,e){const n=_c(t);try{const t=await function(t,e){const n=_c(t),i=e.snapshotVersion;let r=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.os.newChangeBuffer({trackRemovals:!0});r=n.ns;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);var u,h,d;null!==e.targetMismatches.get(a)?l=l.withResumeToken(Sl.EMPTY_BYTE_STRING,zc.min()).withLastLimboFreeSnapshotVersion(zc.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),h=l,d=s,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Qr.updateTargetData(t,l))}));let a=Xu(),c=rh();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(pf(t,s,e.documentUpdates).next((t=>{a=t.cs,c=t.ls}))),!i.isEqual(zc.min())){const e=n.Qr.getLastRemoteSnapshotVersion(t).next((e=>n.Qr.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return tl.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ns=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Sa.get(e);i&&(kc(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.ma=!0:t.modifiedDocuments.size>0?kc(i.ma):t.removedDocuments.size>0&&(kc(i.ma),i.ma=!1))})),await $p(n,t,e)}catch(t){await Zc(t)}}function Mp(t,e,n){const i=_c(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ga.forEach(((n,i)=>{const r=i.view.U_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=_c(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.Q_)t.U_(e)&&(i=!0)})),i&&_p(n)}(i.eventManager,e),t.length&&i.fa.u_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Pp(t,e,n){const i=_c(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Sa.get(e),s=r&&r.key;if(s){let t=new bl(Hc.comparator);t=t.insert(s,nu.newNoDocument(s,zc.min()));const n=rh().add(s),r=new Yh(zc.min(),new Map,new bl(Fc),t,n);await Op(i,r),i.wa=i.wa.remove(s),i.Sa.delete(e),Hp(i)}else await yf(i.localStore,e,!1).then((()=>Bp(i,e,n))).catch(Zc)}async function Fp(t,e){const n=_c(t),i=e.batch.batchId;try{const t=await function(t,e){const n=_c(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=tl.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);kc(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=rh();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);zp(n,i,null),Vp(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await $p(n,t)}catch(t){await Zc(t)}}async function Up(t,e,n){const i=_c(t);try{const t=await function(t,e){const n=_c(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(kc(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);zp(i,e,n),Vp(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await $p(i,t)}catch(t){await Zc(t)}}function Vp(t,e){(t.Ca.get(e)||[]).forEach((t=>{t.resolve()})),t.Ca.delete(e)}function zp(t,e,n){const i=_c(t);let r=i.Da[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Da[i.currentUser.toKey()]=r}}function Bp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.pa.get(e))t.ga.delete(i),n&&t.fa.xa(i,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach((e=>{t.ba.containsKey(e)||jp(t,e)}))}function jp(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);null!==n&&(Bf(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Hp(t))}function Wp(t,e,n){for(const i of n)i instanceof Ip?(t.ba.addReference(i.key,e),qp(t,i)):i instanceof Tp?(yc("SyncEngine","Document no longer in limbo: "+i.key),t.ba.removeReference(i.key,e),t.ba.containsKey(i.key)||jp(t,i.key)):xc()}function qp(t,e){const n=e.key,i=n.path.canonicalString();t.wa.get(n)||t.ya.has(i)||(yc("SyncEngine","New document in limbo: "+n),t.ya.add(i),Hp(t))}function Hp(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Hc(jc.fromString(e)),i=t.va.next();t.Sa.set(i,new Np(n)),t.wa=t.wa.insert(n,i),zf(t.remoteStore,new Ud(Pu(Lu(n.path)),i,"TargetPurposeLimboResolution",ul._e))}}async function $p(t,e,n){const i=_c(t),r=[],s=[],o=[];i.ga.isEmpty()||(i.ga.forEach(((t,a)=>{o.push(i.Ma(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=af.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.fa.u_(r),await async function(t,e){const n=_c(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>tl.forEach(e,(e=>tl.forEach(e.qi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>tl.forEach(e.Qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!sl(t))throw t;yc("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(e,r)}}}(i.localStore,s))}async function Kp(t,e){const n=_c(t);if(!n.currentUser.isEqual(e)){yc("SyncEngine","User change. New user:",e.toKey());const t=await df(n.localStore,e);n.currentUser=e,r="'waitForPendingWrites' promise is rejected due to a user change.",(i=n).Ca.forEach((t=>{t.forEach((t=>{t.reject(new Ic(Ec.CANCELLED,r))}))})),i.Ca.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await $p(n,t.us)}var i,r}function Gp(t,e){const n=_c(t),i=n.Sa.get(e);if(i&&i.ma)return rh().add(i.key);{let t=rh();const i=n.pa.get(e);if(!i)return t;for(const e of i){const i=n.ga.get(e);t=t.unionWith(i.view.la)}return t}}function Xp(t){const e=_c(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Op.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pp.bind(null,e),e.fa.u_=xp.bind(null,e.eventManager),e.fa.xa=kp.bind(null,e.eventManager),e}function Qp(t){const e=_c(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Up.bind(null,e),e}class Jp{async initialize(t){this.serializer=Af(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return hf(this.persistence,new lf,t.initialUser,this.serializer)}createPersistence(t){return new rf(of.Hr,this.serializer)}createSharedClientState(t){return new xf}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Yp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Mp(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kp.bind(null,this.syncEngine),await lp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new vp}createDatastore(t){const e=Af(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Sf(i));var i;return function(t,e,n,i){return new Mf(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Mp(this.syncEngine,t,0),s=_f.D()?new _f:new kf,new Ff(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Ap(t,e,n,i,r,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(t){const e=_c(t);yc("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await Vf(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zp{next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):vc("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tm{get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ic(Ec.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=fp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=fc.UNAUTHENTICATED,this.clientId=Pc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{yc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(yc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function em(t,e){t.asyncQueue.verifyOperationInProgress(),yc("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await df(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function nm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rm(t);yc("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>cp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>cp(e.remoteStore,n))),t._onlineComponents=e}function im(t){return"FirebaseError"===t.name?t.code===Ec.FAILED_PRECONDITION||t.code===Ec.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function rm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){yc("FirestoreClient","Using user provided OfflineComponentProvider");try{await em(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!im(n))throw n;wc("Error using user provided cache. Falling back to memory cache: "+n),await em(t,new Jp)}}else yc("FirestoreClient","Using default OfflineComponentProvider"),await em(t,new Jp);return t._offlineComponents}async function sm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(yc("FirestoreClient","Using user provided OnlineComponentProvider"),await nm(t,t._uninitializedComponentsProvider._online)):(yc("FirestoreClient","Using default OnlineComponentProvider"),await nm(t,new Yp))),t._onlineComponents}function om(t){return sm(t).then((t=>t.syncEngine))}async function am(t){const e=await sm(t),n=e.eventManager;return n.onListen=Rp.bind(null,e.syncEngine),n.onUnlisten=Dp.bind(null,e.syncEngine),n}function cm(t,e,n={}){const i=new Tc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Zp({next:n=>{e.enqueueAndForget((()=>bp(t,o))),n.fromCache&&"server"===i.source?r.reject(new Ic(Ec.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Ep(n,s,{includeMetadataChanges:!0,Z_:!0});return wp(t,o)}(await am(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lm(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const um=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t,e,n){if(!n)throw new Ic(Ec.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dm(t){if(!Hc.isDocumentKey(t))throw new Ic(Ec.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fm(t){if(Hc.isDocumentKey(t))throw new Ic(Ec.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pm(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":xc()}function mm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ic(Ec.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pm(t);throw new Ic(Ec.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gm{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Ic(Ec.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ic(Ec.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Ic(Ec.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lm(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Ic(Ec.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Ic(Ec.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Ic(Ec.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}}class ym{get app(){if(!this._app)throw new Ic(Ec.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ic(Ec.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gm(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Sc;switch(t.type){case"firstParty":return new Lc(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ic(Ec.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=um.get(t);e&&(yc("ComponentProvider","Removing Datastore"),um.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gm({}),this._settingsFrozen=!1}}function vm(t,e,n,i={}){var r;const s=(t=mm(t,ym))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&wc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=fc.MOCK_USER;else{e=D(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Ic(Ec.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new fc(s)}t._authCredentials=new Nc(new Cc(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{withConverter(t){return new wm(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class bm{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xm(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bm(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class xm extends wm{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bm(this.firestore,null,new Hc(t))}withConverter(t){return new xm(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,Lu(n)),this._path=n,this.type="collection"}}function km(t,e,...n){if(t=J(t),hm("collection","path",e),t instanceof ym){const i=jc.fromString(e,...n);return fm(i),new xm(t,null,i)}{if(!(t instanceof bm||t instanceof xm))throw new Ic(Ec.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(jc.fromString(e,...n));return fm(i),new xm(t.firestore,null,i)}}function _m(t,e,...n){if(t=J(t),1===arguments.length&&(e=Pc.newId()),hm("doc","path",e),t instanceof ym){const i=jc.fromString(e,...n);return dm(i),new bm(t,null,new Hc(i))}{if(!(t instanceof bm||t instanceof xm))throw new Ic(Ec.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(jc.fromString(e,...n));return dm(i),new bm(t.firestore,t instanceof xm?t.converter:null,new Hc(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Em{get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=Nf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise((()=>{}));const e=new Tc;return this.uu((()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.eu.push(t),this.cu())))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!sl(t))throw t;yc("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo((()=>this.cu()))}}uu(t){const e=this.Xa.then((()=>(this.iu=!0,t().catch((t=>{this.ru=t,this.iu=!1;throw vc("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.iu=!1,t))))));return this.Xa=e,e}enqueueAfterDelay(t,e,n){this.au(),this.ou.indexOf(t)>-1&&(e=0);const i=dp.createAndSchedule(this,t,e,n,(t=>this.lu(t)));return this.nu.push(i),i}au(){this.ru&&xc()}verifyOperationInProgress(){}async hu(){let t;do{t=this.Xa,await t}while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then((()=>{this.nu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.nu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.hu()}))}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Rf(this,"async_queue_retry"),this._u=()=>{const t=Nf();t&&yc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const t=Nf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._u)}}class Im extends ym{_terminate(){return this._firestoreClient||Cm(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Em,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function Tm(t){return t._firestoreClient||Cm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cm(t){var e,n,i;const r=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new Pl(o,a,c,(l=r).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,lm(l.experimentalLongPollingOptions),l.useFetchStreams));var o,a,c,l;t._firestoreClient=new tm(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sm{static fromBase64String(t){try{return new Sm(Sl.fromBase64String(t))}catch(t){throw new Ic(Ec.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Sm(Sl.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ic(Ec.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qc(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Am{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Fc(this._lat,t._lat)||Fc(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ic(Ec.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ic(Ec.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=/^__.*__$/;class Dm{toMutation(t,e){return null!==this.fieldMask?new Rh(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ah(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Om(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xc()}}class Mm{get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Mm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Au({path:n,Vu:!1});return i.mu(t),i}fu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Au({path:n,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Km(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(0===t.length)throw this.pu("Document fields must not be empty");if(Om(this.du)&&Lm.test(t))throw this.pu('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Eu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}}class Pm{Su(t,e,n,i=!1){return new Mm({du:t,methodName:e,wu:n,path:qc.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Af(t)}}function Fm(t){const e=t._freezeSettings(),n=Af(t._databaseId);return new Pm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Um(t,e,n,i,r,s={}){const o=t.Su(s.merge||s.mergeFields?2:0,e,n,r);Wm("Data must be an object, but it was:",o,i);const a=Bm(i,o);let c,l;if(s.merge)c=new Il(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=qm(e,i,n);if(!o.contains(r))throw new Ic(Ec.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Gm(t,r)||t.push(r)}c=new Il(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Dm(new tu(a),c,l)}function Vm(t,e,n,i=!1){return zm(n,t.Su(i?4:3,e))}function zm(t,e){if(jm(t=J(t)))return Wm("Unsupported field value:",e,t),Bm(t,e);if(t instanceof Am)return function(t,e){if(!Om(e.du))throw e.pu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.pu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&4!==e.du)throw e.pu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=zm(r,e.gu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=J(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return lh(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Vc.fromDate(t);return{timestampValue:dd(e.serializer,n)}}if(t instanceof Vc){const n=new Vc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:dd(e.serializer,n)}}if(t instanceof Rm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Sm)return{bytesValue:fd(e.serializer,t._byteString)};if(t instanceof bm){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.pu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gd(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.pu(`Unsupported field value: ${pm(t)}`)}(t,e)}function Bm(t,e){const n={};return wl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vl(t,((t,i)=>{const r=zm(i,e.Ru(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function jm(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Vc||t instanceof Rm||t instanceof Sm||t instanceof bm||t instanceof Am)}function Wm(t,e,n){if(!jm(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=pm(n);throw"an object"===i?e.pu(t+" a custom object"):e.pu(t+" "+i)}var i}function qm(t,e,n){if((e=J(e))instanceof Nm)return e._internalPath;if("string"==typeof e)return $m(t,e);throw Km("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hm=new RegExp("[~\\*/\\[\\]]");function $m(t,e,n){if(e.search(Hm)>=0)throw Km(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nm(...e.split("."))._internalPath}catch(i){throw Km(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Km(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Ic(Ec.INVALID_ARGUMENT,a+t+c)}function Gm(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{get id(){return this._key.path.lastSegment()}get ref(){return new bm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Jm("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}}class Qm extends Xm{data(){return super.data()}}function Jm(t,e){return"string"==typeof e?$m(t,e):e instanceof Nm?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Ic(Ec.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zm{}class tg extends Zm{}function eg(t,e,...n){let i=[];e instanceof Zm&&i.push(e),i=i.concat(n),function(t){const e=t.filter((t=>t instanceof rg)).length,n=t.filter((t=>t instanceof ng)).length;if(e>1||e>0&&n>0)throw new Ic(Ec.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const e of i)t=e._apply(t);return t}class ng extends tg{static _create(t,e,n){return new ng(t,e,n)}_apply(t){const e=this._parse(t);return ag(t._query,e),new wm(t.firestore,t.converter,Uu(t._query,e))}_parse(t){const e=Fm(t.firestore);return function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Ic(Ec.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){og(o,s);const e=[];for(const n of o)e.push(sg(i,t,n));a={arrayValue:{values:e}}}else a=sg(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||og(o,s),a=Vm(n,e,o,"in"===s||"not-in"===s);return lu.create(r,s,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}}function ig(t,e,n){const i=e,r=Jm("where",t);return ng._create(r,i,n)}class rg extends Zm{static _create(t,e){return new rg(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:uu.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const i=e.getFlattenedFilters();for(const t of i)ag(n,t),n=Uu(n,t)}(t._query,e),new wm(t.firestore,t.converter,Uu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}constructor(t,e){super(),this.type=t,this._queryConstraints=e}}function sg(t,e,n){if("string"==typeof(n=J(n))){if(""===n)throw new Ic(Ec.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ou(e)&&-1!==n.indexOf("/"))throw new Ic(Ec.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(jc.fromString(n));if(!Hc.isDocumentKey(i))throw new Ic(Ec.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return $l(t,new Hc(i))}if(n instanceof bm)return $l(t,n._key);throw new Ic(Ec.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pm(n)}.`)}function og(t,e){if(!Array.isArray(t)||0===t.length)throw new Ic(Ec.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ag(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Ic(Ec.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Ic(Ec.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class cg{convertValue(t,e="none"){switch(Vl(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Rl(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ll(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw xc()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return vl(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Rm(Rl(t.latitude),Rl(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ol(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ml(t));default:return null}}convertTimestamp(t){const e=Al(t);return new Vc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=jc.fromString(t);kc(Fd(n));const i=new Fl(n.get(1),n.get(3)),r=new Hc(n.popFirst(5));return i.isEqual(e)||vc(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ug{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class hg extends Xm{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new dg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Jm("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}}class dg extends hg{data(t={}){return super.data(t)}}class fg{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new dg(this._firestore,this._userDataWriter,n.key,n,new ug(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ic(Ec.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new dg(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ug(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new dg(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ug(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:pg(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ug(i.hasPendingWrites,i.fromCache),this.query=n}}function pg(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xc()}}class mg extends cg{convertBytes(t){return new Sm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bm(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function gg(t){t=mm(t,wm);const e=mm(t.firestore,Im),n=Tm(e),i=new mg(e);return Ym(t._query),cm(n,t._query).then((n=>new fg(e,i,t,n)))}function yg(t){return wg(mm(t.firestore,Im),[new Mh(t._key,kh.none())])}function vg(t,e){const n=mm(t.firestore,Im),i=_m(t),r=lg(t.converter,e);return wg(n,[Um(Fm(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,kh.exists(!1))]).then((()=>i))}function wg(t,e){return function(t,e){const n=new Tc;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Qp(t);try{const t=await function(t,e){const n=_c(t),i=Vc.now(),r=e.reduce(((t,e)=>t.add(e.key)),rh());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Xu(),c=rh();return n.os.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Sh(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Rh(t.key,e,eu(e.value.mapValue),kh.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Yu(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Da[t.currentUser.toKey()];i||(i=new bl(Fc)),i=i.insert(e,n),t.Da[t.currentUser.toKey()]=i}(i,t.batchId,n),await $p(i,t.changes),await Zf(i.remoteStore)}catch(t){const e=fp(t,"Failed to persist write");n.reject(e)}}(await om(t),e,n))),n.promise}(Tm(t),e)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){pc="10.8.1",Lt(new Y("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new Im(new Ac(t.getProvider("auth-internal")),new Oc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ic(Ec.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fl(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Ut("@firebase/firestore","4.4.3",t),Ut("@firebase/firestore","4.4.3","esm2017")}();var bg,xg,kg={};bg=void 0===n?"undefined"==typeof window?kg:window:n,xg=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",h="Info",d={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",w="Ask",b="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",_="Hourglass",E="Circle",I="Arrows",T="Dots",C="Pulse",S="Custom",N="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",L="Hourglass",D="Circle",O="Arrows",M="Dots",P="Pulse",F={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},U=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+o)},V=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+o)},z=function(e){return e||(e="head"),null!==t.document[e]||(U('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},B=function(e,n){if(!z("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},j=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?j(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},W=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Y=function(n,i,r,s){if(!z("body"))return!1;e||ct.Notify.init({});var o=j(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var f={};"object"==typeof r?f=r:"object"==typeof s&&(f=s),e=j(!0,e,f)}var p=e[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=W(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=j(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(d.wrapID)||t.document.createElement("div");if(m.id=d.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(d.overlayID)||t.document.createElement("div");g.id=d.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(d.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(d.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+J,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var w="";n===c?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(w='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=w+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var b=t.document.getElementById(d.wrapID);b.insertBefore(y,b.firstChild)}else t.document.getElementById(d.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,_,E=function(){x.classList.add("nx-remove");var e=t.document.getElementById(d.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},I=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(d.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(_)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){E();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),E();var t=setTimeout((function(){I(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var T=function(){k=setTimeout((function(){E()}),e.timeout),_=setTimeout((function(){I()}),e.timeout+e.cssAnimationDuration)};T(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(_)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),T()})))}}if(e.showOnlyTheLastOne&&0<J)for(var C,S=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+J+"])"),N=0;N<S.length;N++)null!==(C=S[N]).parentNode&&C.parentNode.removeChild(C);e=j(!0,e,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,s,o,c){if(!z("body"))return!1;n||ct.Report.init({});var l={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof o?u=o:"object"==typeof c&&(u=c),l=j(!0,n,{}),n=j(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=W(i),r=W(r),s=W(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=y.ID,d.className=n.className,d.style.zIndex=n.zindex,d.style.borderRadius=n.borderRadius,d.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on")),d.style.display="flex",d.style.flexWrap="wrap",d.style.flexDirection="column",d.style.alignItems="center",d.style.justifyContent="center";var v="",w=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(w?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var b,x,k="";if(e===f?(b=n.svgSize,x=h.svgColor,b||(b="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+b+'" height="'+b+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),d.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var _=function(){var e=t.document.getElementById(d.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),_()})),v&&w&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){_()}))}n=j(!0,n,l)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,s,o,c,l,u,h){if(!z("body"))return!1;i||ct.Confirm.init({});var d=j(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=j(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),r=W(r),o=W(o),c=W(c)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",c="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",c="..."),(o.length||c.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",c="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),c.length>i.buttonsMaxLength&&(c=c.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=x.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+c+"</a>");var y="",v=null,k=void 0;if(e===w||e===b){v=s||"";var _=e===w||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===b?'value="'+v+'"':"")+' maxlength="'+_+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var E=t.document.getElementById(f.id),I=t.document.getElementById("NXConfirmButtonOk"),T=t.document.getElementById("NXConfirmValidationInput");T&&(T.focus(),T.setSelectionRange(0,(T.value||"").length),T.addEventListener("keyup",(function(t){var n=t.target.value;e===w&&n!==v?(t.preventDefault(),T.classList.add("nx-validation-failure"),T.classList.remove("nx-validation-success")):(e===w&&(T.classList.remove("nx-validation-failure"),T.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(t){if(e===w&&v&&T){if((T.value||"").toString()!==v)return T.focus(),T.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;T.classList.remove("nx-validation-failure")}"function"==typeof l&&(e===b&&T&&(k=T.value||""),l(k)),E.classList.add("nx-remove");var n=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof l&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===b&&T&&(k=T.value||""),u(k)),E.classList.add("nx-remove");var t=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(t))}),i.cssAnimationDuration)}))}i=j(!0,i,d)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,s,o){if(!z("body"))return!1;r||ct.Loading.init({});var c=j(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var l={};"object"==typeof n?l=n:"object"==typeof i&&(l=i),r=j(!0,r,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?W(u).toString().substring(0,r.messageMaxLength)+"...":W(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var d="";if(e===k)d=q(r.svgSize,r.svgColor);else if(e===_)d=H(r.svgSize,r.svgColor);else if(e===E)d=$(r.svgSize,r.svgColor);else if(e===I)d=K(r.svgSize,r.svgColor);else if(e===T)d=G(r.svgSize,r.svgColor);else if(e===C)d=X(r.svgSize,r.svgColor);else if(e===S&&null!==r.customSvgCode&&null===r.customSvgUrl)d=r.customSvgCode||"";else if(e===S&&null!==r.customSvgUrl&&null===r.customSvgCode)d='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===S&&(null===r.customSvgUrl||null===r.customSvgCode))return U('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;d=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+d+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),w=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(w)}),o);r=j(!0,r,c)},st=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ot=0,at=function(e,n,i,r,o,c){var l;if(Array.isArray(i)){if(1>i.length)return U("Array of HTMLElements should contains at least one HTMLElement."),!1;l=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return U("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return U("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return U('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;l=u}s||ct.Block.init({});var h=j(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var d={};"object"==typeof r?d=r:"object"==typeof o&&(d=o),s=j(!0,s,d)}var f="";"string"==typeof r&&0<r.length&&(f=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=F.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,y="nx-block-temporary-position";if(e){for(var v,w=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],b=0;b<g;b++)if(v=l[b]){if(-1<w.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+F.ID+"]");if(1>x.length){var k="";n&&(k=n===L?H(s.svgSize,s.svgColor):n===D?$(s.svgSize,s.svgColor):n===O?K(s.svgSize,s.svgColor):n===M?G(s.svgSize,s.svgColor):n===P?X(s.svgSize,s.svgColor):q(s.svgSize,s.svgColor));var _='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",E="";0<f.length&&(f=f.length>s.messageMaxLength?W(f).substring(0,s.messageMaxLength)+"...":W(f),E='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+f+"</span>"),ot++;var I=t.document.createElement("div");I.id=F.ID+"-"+ot,I.className=p+(s.cssAnimation?" nx-with-animation":""),I.style.position=s.position,I.style.zIndex=s.zindex,I.style.background=s.backgroundColor,I.style.animationDuration=s.cssAnimationDuration+"ms",I.style.fontFamily='"'+s.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",s.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=_+E;var T,C=t.getComputedStyle(v).getPropertyValue("position"),S="string"==typeof C?C.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(s.svgSize))+40,A="";N>(v.offsetHeight||0)&&(A="min-height:"+N+"px;"),T=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",B=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(B||0<A.length){if(!z("head"))return!1;B&&(R="position:relative!important;");var Q='<style id="Style-'+F.ID+"-"+ot+'">'+T+"."+y+"{"+R+A+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Y=J.createContextualFragment(Q);t.document.head.appendChild(Y),v.classList.add(y)}v.appendChild(I)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else V("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),s.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=l[e])&&(et(t),x=t.querySelectorAll("[id^="+F.ID+"]"),tt(x));clearTimeout(nt)}),c);s=j(!0,s,h)},ct={Notify:{init:function(t){e=j(!0,d,t),B(Q,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=j(!0,e,t)):(U("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Y(c,t,e,n)},failure:function(t,e,n){Y(l,t,e,n)},warning:function(t,e,n){Y(u,t,e,n)},info:function(t,e,n){Y(h,t,e,n)}},Report:{init:function(t){n=j(!0,y,t),B(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=j(!0,n,t)):(U("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(f,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=j(!0,x,t),B(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=j(!0,i,t)):(U("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,s,o){nt(v,t,e,null,n,i,r,s,o)},ask:function(t,e,n,i,r,s,o,a){nt(w,t,e,n,i,r,s,o,a)},prompt:function(t,e,n,i,r,s,o,a){nt(b,t,e,n,i,r,s,o,a)}},Loading:{init:function(t){r=j(!0,A,t),B(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=j(!0,r,t)):(U("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(_,t,e,!0,0)},circle:function(t,e){rt(E,t,e,!0,0)},arrows:function(t,e){rt(I,t,e,!0,0)},dots:function(t,e){rt(T,t,e,!0,0)},pulse:function(t,e){rt(C,t,e,!0,0)},custom:function(t,e){rt(S,t,e,!0,0)},notiflix:function(t,e){rt(N,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?W(e).substring(0,r.messageMaxLength)+"...":W(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var s=t.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=e,n.appendChild(s)}}else U("Where is the new message?")}(e)}},Block:{init:function(t){s=j(!0,F,t),B(st,"NotiflixBlockInternalCSS")},merge:function(t){return s?void(s=j(!0,s,t)):(U('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,R,t,e,n)},hourglass:function(t,e,n){at(!0,L,t,e,n)},circle:function(t,e,n){at(!0,D,t,e,n)},arrows:function(t,e,n){at(!0,O,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,P,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?j(!0,t.Notiflix,{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}):{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}},"function"==typeof define&&define.amd?define([],(function(){return xg(bg)})):"object"==typeof kg?kg=xg(bg):bg.Notiflix=xg(bg);const _g=Pt({apiKey:"AIzaSyAk36pN47e9TyiXdI_dQhLgGsUMyQYNiw0",authDomain:"movie-auth-97cbb.firebaseapp.com",projectId:"movie-auth-97cbb",storageBucket:"movie-auth-97cbb.appspot.com",messagingSenderId:"804704371491",appId:"1:804704371491:web:40524ad09546d96b344296",measurementId:"G-H5C7DKB0H3"}),Eg=function(t=Ft()){const e=Dt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){const n=Dt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(W(n.getOptions(),null!=e?e:{}))return t;te(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Wi,persistence:[ii,Wn,Hn]}),i=R("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Hi)return;const i=null==e?void 0:e.token;$i!==i&&($i=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){J(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){J(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=S("auth");return s&&pn(n,`http://${s}`),n}(_g),Ig=new An,Tg=function(t,e){const n="string"==typeof t?t:e||"(default)",i=Dt("object"==typeof t?t:Ft(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=N("firestore");t&&vm(i,...t)}return i}(_g);Ig.addScope("https://www.googleapis.com/auth/contacts.readonly"),Eg.languageCode="es";const Cg=()=>{var t;(t=Eg,J(t).signOut()).then((()=>{kg.Notify.warning("User logged out successfully")})).catch((t=>{console.error(t)}))},Sg=()=>{bi(Eg,Ig).then((t=>{An.credentialFromResult(t).accessToken,t.user})).catch((t=>{t.code,t.message,t.customData.email,An.credentialFromError(t)}))},Ng=async(t,e)=>{let n="";if(1==e)try{n=await vg(km(Tg,"watched"),{id:t.id,poster_path:t.poster_path,title:t.title,vote_average:t.vote_average,vote_count:t.vote_count,original_title:t.original_title,popularity:t.popularity,overview:t.overview,genre_ids:t.genre_ids,release_date:t.release_date,user_id:Eg.currentUser.uid})}catch{kg.Notify.failure("Ha ocurrido un error")}else if(0==e)try{n=await vg(km(Tg,"queued"),{id:t.id,poster_path:t.poster_path,title:t.title,vote_average:t.vote_average,vote_count:t.vote_count,original_title:t.original_title,popularity:t.popularity,overview:t.overview,genre_ids:t.genre_ids,release_date:t.release_date,user_id:Eg.currentUser.uid})}catch(t){kg.Notify.failure(t.code)}},Ag=async t=>{await yg(_m(Tg,"watched",t))},Rg=async t=>{await yg(_m(Tg,"queued",t))},Lg=async()=>{if(null!==Eg.currentUser){const t=eg(km(Tg,"watched"),ig("user_id","==",Eg.currentUser.uid));return await gg(t)}kg.Notify.warning("To add Movie please sign up")},Dg=async t=>{const e=eg(km(Tg,"watched"),ig("user_id","==",Eg.currentUser.uid),ig("id","==",t));return await gg(e)},Og=async()=>{if(null!==Eg.currentUser){const t=eg(km(Tg,"queued"),ig("user_id","==",Eg.currentUser.uid));return await gg(t)}kg.Notify.warning("To add Movie please sign up")},Mg=async t=>{const e=eg(km(Tg,"queued"),ig("user_id","==",Eg.currentUser.uid),ig("id","==",t));return await gg(e)},Pg={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTJhZGIyZDI0ZTY0MjA2M2JhYmMyNDE2NTZmMTE5MSIsInN1YiI6IjY1ZGQ0ZDVlZGNiNmEzMDE4NTg1YjBkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ltWwgOGVxJr4cJ0XudTwZnS_NTOZbUx4iZEkiQDdqbs"}};async function Fg(t){try{let n=new URLSearchParams({language:"en-US",page:t});return await fetch("https://api.themoviedb.org/3/trending/movie/day?"+n,Pg).then((t=>(t.ok||e(kg).Notify.failure("Data bad request"),t.json()))).catch((t=>console.error(t)))}catch(t){return[]}}async function Ug(t,e=1){try{let n=new URLSearchParams({query:t,page:e});return await fetch("https://api.themoviedb.org/3/search/movie?"+n,Pg).then((t=>t.json())).catch((t=>console.error(t)))}catch(t){return[]}}async function Vg(t){try{return await fetch("https://api.themoviedb.org/3/movie/"+t,Pg).then((t=>t.json())).catch((t=>console.error(t)))}catch(t){return[]}}async function zg(){try{return fetch("https://api.themoviedb.org/3/genre/movie/list",Pg).then((t=>t.json())).catch((t=>console.error(t)))}catch(t){return[]}}const Bg=document.querySelector(".loader"),jg=document.querySelector(".movies");function Wg(){Bg.classList.remove("is-hidden"),jg.classList.add("is-hidden")}async function qg(t){Wg();let n=0;return await Fg(t).then((t=>{n=t.total_results,Xg(t.results)})).catch((t=>e(kg).Notify.failure("error",t))),n}async function Hg(t,n){Wg();let i=0;return await Ug(t,n).then((t=>{i=t.total_results,Xg(t.results)})).catch((t=>e(kg).Notify.failure(t))),i}async function $g(t,n){Wg();let i=await Lg(),r=[];i.forEach((t=>r.push(t.data())));let s=(t-1)*n,o=Math.min(t*n,r.length);return Xg(r.slice(s,o)),0===i.length&&e(kg).Notify.failure("No watched movies found!"),r.length}async function Kg(t,n){Wg();let i=await Og(),r=[];i.forEach((t=>r.push(t.data())));let s=(t-1)*n,o=Math.min(t*n,r.length);return Xg(r.slice(s,o)),0===r.length&&e(kg).Notify.failure("No queue movies found!"),r.length}var Gg;async function Xg(t){let n=[];await zg().then((t=>{n=t.genres})).catch((t=>e(kg).Notify.failure(t))),Bg.classList.add("is-hidden"),jg.classList.remove("is-hidden");const i=document.getElementById("movie-container");i.innerHTML="",t.forEach((t=>{const e=document.createElement("li"),r=document.createElement("img");null!==t.poster_path?r.src="https://image.tmdb.org/t/p/w500"+t.poster_path:r.src=new URL(Gg),r.setAttribute("data-modal-open",t.id),r.setAttribute("loading","lazy"),e.appendChild(r);const s=document.createElement("p");s.className="movie-title",s.textContent=t.title,e.appendChild(s);const o=t.genre_ids.map((t=>n.find((e=>e.id===t)).name)),a=document.createElement("p");a.className="release-year-genres",a.textContent=o.join(", ")+" | "+t.release_date.substring(0,4),e.appendChild(a),i.appendChild(e)}))}async function Qg(t){let n=[];try{(await Lg()).forEach((t=>n.push(t.data().id)));if(null===(n.find((e=>e===t.id))||null))Ng(t,1),e(kg).Notify.success("Movie added to watched list"),ey();else{let n=null;(await Dg(t.id)).forEach((t=>{n=t.id})),Ag(n),setTimeout((()=>{ey(),Iy(),$g()}),500),e(kg).Notify.success("Movie removed from watched list")}}catch(t){}}async function Jg(t){try{let n=[];(await Og()).forEach((t=>n.push(t.data().id)));if(null===(n.find((e=>e===t.id))||null))Ng(t,0),e(kg).Notify.success("Movie added to queue list"),ey();else{let n=null;(await Mg(t.id)).forEach((t=>{n=t.id})),Rg(n),e(kg).Notify.success("Movie removed from queued list"),setTimeout((()=>{ey(),Iy(1),Kg()}),500)}}catch(t){}}Gg=new URL(s("kyEFX").resolve("5UBio"),import.meta.url).toString();class Yg{constructor(t,e,n,i,r,s,o,a,c,l){this.id=t,this.poster_path=e,this.title=n,this.vote_average=i,this.vote_count=r,this.original_title=s,this.popularity=o,this.overview=a,this.genre_ids=c,this.release_date=l}}const Zg={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),movieTitle:document.querySelector("#movie-title"),vote:document.querySelector("#vote"),votes:document.querySelector("#votes"),popularity:document.querySelector("#popularity"),ogTitle:document.querySelector("#og-title"),genre:document.querySelector("#genre"),sinopsis:document.querySelector("#sinopsis"),poster:document.querySelector("#poster"),btnWatched:document.querySelector("#watched-list"),btnQueued:document.querySelector("#queue-list"),movie:"",addIdToWatched:()=>{Qg(Zg.movie)},addIdToQueue:()=>{Jg(Zg.movie)}};function ty(t){Zg.modal.classList.remove("is-hidden"),Zg.modal.classList.add("flex-modal"),Vg(t).then((e=>{null!==e.poster_path?Zg.poster.src=`https://image.tmdb.org/t/p/w400${e.poster_path}`:Zg.poster.src=new URL(Gg),Zg.vote.textContent=e.vote_average.toFixed(1)||"None",Zg.votes.textContent=e.vote_count||"None",Zg.ogTitle.textContent=e.original_title||"None",Zg.popularity.textContent=e.popularity.toFixed(1)||"None",Zg.movieTitle.textContent=e.title||"None",Zg.sinopsis.textContent=e.overview||"None",Zg.genre.textContent=e.genres.map((({name:t})=>t)).length>0?e.genres.map((({name:t})=>t)).join(", "):"None",Zg.btnWatched.value=e.id,Zg.btnQueued.value=e.id,Zg.movie=new Yg(t,`https://image.tmdb.org/t/p/w400${e.poster_path}`,e.title,e.vote_average,e.vote_count,e.original_title,e.popularity,e.overview,e.genres.map((({id:t})=>t)),e.release_date)})).catch((t=>console.log(t))),Zg.btnWatched.addEventListener("click",Zg.addIdToWatched),Zg.btnQueued.addEventListener("click",Zg.addIdToQueue)}function ey(){Zg.modal.classList.add("is-hidden"),Zg.modal.classList.remove("flex-modal"),Zg.poster.src=new URL(Gg),Zg.vote.textContent="none",Zg.votes.textContent="none",Zg.ogTitle.textContent="none",Zg.popularity.textContent="none",Zg.movieTitle.textContent="none",Zg.sinopsis.textContent="none",Zg.genre.textContent="none",Zg.btnWatched.removeEventListener("click",Zg.addIdToWatched),Zg.btnQueued.removeEventListener("click",Zg.addIdToQueue)}function ny(t,e,n=20,i=!1){const r=Math.ceil(e/n),s=document.querySelector(".pg-container");s.innerHTML="";const o=r>5?Math.max(t-2,1):1,a=r>5?Math.min(o+4,r):r,c=[];t>4&&r>5&&!i&&(c.push({type:"button",value:1}),c.push({type:"dot",value:"..."}));for(let t=o;t<=a;t++)c.push({type:"button",value:t});a<r-1&&!i&&(c.push({type:"dot",value:"..."}),c.push({type:"button",value:r})),c.unshift({type:"button",value:"Prev",disabled:1===t}),c.push({type:"button",value:"Next",disabled:t===r}),c.forEach((e=>{if("button"===e.type){const n=document.createElement("button");n.textContent="",n.classList.add("pg-btn"),n.type="button",n.value=e.value,"Prev"===e.value?(n.id="prev-btn",n.classList.add("pg-btn__arrow"),n.innerHTML='<svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                            <path d="M12.6666 8H3.33325" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n                            <path d="M7.99992 12.6667L3.33325 8.00004L7.99992 3.33337" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n                            </svg>'):"Next"===e.value?(n.id="next-btn",n.classList.add("pg-btn__arrow"),n.innerHTML='<svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">\n                            <path d="M3.33341 8H12.6667" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n                            <path d="M8.00008 12.6667L12.6667 8.00004L8.00008 3.33337" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>\n                            </svg>'):n.textContent=e.value,e.value===t&&n.classList.add("pg-active"),e.disabled&&(n.disabled=!0,n.classList.add("disabled")),s.appendChild(n)}else if("dot"===e.type){const t=document.createElement("button");t.classList.add("pg-btn","pg-btn__dot"),t.textContent=e.value,s.appendChild(t)}}))}function iy(t,e){window.innerWidth>=768?ny(e,t):ny(e,t,20,!0)}Zg.closeModalBtn.addEventListener("click",ey),window.addEventListener("keydown",(t=>{"Escape"===t.code&&ey()})),Zg.modal.addEventListener("click",(t=>{"backdrop flex-modal"===t.target.className&&ey()}));const ry=document.querySelector(".header"),sy=document.querySelector(".form"),oy=document.querySelector("input"),ay=document.querySelector("#homeBtn"),cy=document.querySelector("#libraryBtn"),ly=document.querySelector(".headerSearch"),uy=document.querySelector(".headerBtns"),hy=document.querySelector("#watched-btn"),dy=document.querySelector("#queue-btn"),fy=document.querySelector("#movie-container"),py=document.querySelector(".pg-container"),my=document.querySelector("a[sign-up-g]"),gy=document.querySelector("#log-out-btn"),yy=document.querySelector("#top-btn");let vy=0,wy=1;const by="trend",xy="same",ky="watched",_y="queue";let Ey;function Iy(t=0){0==t?(ry.classList.add("header-library"),cy.classList.add("active"),ay.classList.remove("active"),hy.classList.add("library-header__button--active"),dy.classList.remove("library-header__button--active"),ly.classList.add("is-hidden"),uy.classList.remove("is-hidden")):(ry.classList.add("header-library"),cy.classList.add("active"),ay.classList.remove("active"),hy.classList.remove("library-header__button--active"),dy.classList.add("library-header__button--active"),ly.classList.add("is-hidden"),uy.classList.remove("is-hidden"))}document.addEventListener("DOMContentLoaded",(t=>{function n(){Ey=by,(async()=>{vy=await qg(wy),i(wy,vy),iy(vy,wy)})(),oy.textContent="",oy.value=""}function i(t,e){vy>20?(ny(t,e),py.classList.remove("is-hidden")):py.classList.add("is-hidden")}t.preventDefault(),n(),my.addEventListener("click",Sg),gy.addEventListener("click",Cg),ay.addEventListener("click",(()=>{Ey=by,ry.classList.remove("header-library"),ay.classList.add("active"),cy.classList.remove("active"),uy.classList.add("is-hidden"),ly.classList.remove("is-hidden"),wy=1,n()})),cy.addEventListener("click",(()=>{Ey=ky,ry.classList.add("header-library"),cy.classList.add("active"),ay.classList.remove("active"),hy.classList.add("library-header__button--active"),dy.classList.remove("library-header__button--active"),ly.classList.add("is-hidden"),uy.classList.remove("is-hidden"),wy=1,(async()=>{vy=await $g(wy,20),i(wy,vy)})()})),hy.addEventListener("click",(()=>{Ey=ky,hy.classList.add("library-header__button--active"),dy.classList.remove("library-header__button--active"),wy=1,(async()=>{vy=await $g(wy,20),i(wy,vy)})()})),dy.addEventListener("click",(()=>{Ey=_y,dy.classList.add("library-header__button--active"),hy.classList.remove("library-header__button--active"),wy=1,(async()=>{vy=await Kg(wy,20),i(wy,vy)})()})),fy.addEventListener("click",(t=>{const e=t.target.dataset.modalOpen||"0";"0"!==e&&ty(e)})),sy.addEventListener("submit",(t=>{t.preventDefault(),Ey=xy;const e=document.querySelector(".header__searcher").value;wy=1,(async()=>{vy=await Hg(e,wy),i(wy,vy)})()})),zn(Eg,(t=>{null!==t?(my.classList.add("is-hidden"),gy.classList.remove("is-hidden")):(cy.classList.add("is-hidden"),my.classList.remove("is-hidden"),gy.classList.add("is-hidden"),ry.classList.remove("header-library"),ay.classList.add("active"),cy.classList.remove("active"),uy.classList.add("is-hidden"),ly.classList.remove("is-hidden"),n())})),py.addEventListener("click",(t=>{try{const e=t.target.closest("button").value;"Prev"===e?wy--:"Next"===e?wy++:wy=Number(e)}catch(t){wy=1,e(kg).Notify.failure(typeof t)}finally{i(wy,vy),function(t){switch(t){case by:qg(wy);break;case xy:Hg(document.querySelector(".header__searcher").value,wy);break;case ky:$g(wy,20);break;case _y:Kg(wy,20);break;default:n()}}(Ey)}})),window.addEventListener("resize",(()=>{iy(vy,wy)})),window.addEventListener("scroll",(()=>{window.scrollY>200?yy.classList.remove("is-hidden"):yy.classList.add("is-hidden")})),yy.addEventListener("click",(()=>{window.scroll({top:0,behavior:"smooth"})}))}));
//# sourceMappingURL=index.54752283.js.map
