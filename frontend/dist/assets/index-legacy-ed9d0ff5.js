System.register(["./index-legacy-b17e8fc7.js"],(function(e,n){"use strict";var t,r,o;return{setters:[e=>{t=e.v,r=e.P,o=e.A}],execute:function(){var n={exports:{}};!function(e){var n=Object.prototype.hasOwnProperty,t="~";function r(){}function o(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function i(e,n,r,i,a){if("function"!=typeof r)throw new TypeError("The listener must be a function");var s=new o(r,i||e,a),c=t?t+n:n;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,n){0==--e._eventsCount?e._events=new r:delete e._events[n]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),s.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)n.call(e,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},s.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},s.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,n,r,o,i,a){var s=t?t+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,n),!0;case 3:return u.fn.call(u.context,n,r),!0;case 4:return u.fn.call(u.context,n,r,o),!0;case 5:return u.fn.call(u.context,n,r,o,i),!0;case 6:return u.fn.call(u.context,n,r,o,i,a),!0}for(l=1,c=new Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var f,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,n);break;case 3:u[l].fn.call(u[l].context,n,r);break;case 4:u[l].fn.call(u[l].context,n,r,o);break;default:if(!c)for(f=1,c=new Array(d-1);f<d;f++)c[f-1]=arguments[f];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,n,t){return i(this,e,n,t,!1)},s.prototype.once=function(e,n,t){return i(this,e,n,t,!0)},s.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return a(this,i),this;var s=this._events[i];if(s.fn)s.fn!==n||o&&!s.once||r&&s.context!==r||a(this,i);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==n||o&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[i]=1===l.length?l[0]:l:a(this,i)}return this},s.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&a(this,n)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,e.exports=s}(n);const i=t(n.exports);var a,s=globalThis&&globalThis.__extends||(a=function(e,n){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},a(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),c=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return s(n,e),n}(i),l=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)},d=globalThis&&globalThis.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},f=globalThis&&globalThis.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(s){i=[6,s],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},p=globalThis&&globalThis.__read||function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a},h=function(e){function n(n,t){var i,a=e.call(this)||this;if(a._handleMessage=function(e){if(a._injectedProvider&&e.source===window||e.origin===a._providerUrl.origin&&e.source===a._popup)if("connected"===e.data.method){var n=new r(e.data.params.publicKey);a._publicKey&&a._publicKey.equals(n)||(a._publicKey&&!a._publicKey.equals(n)&&a._handleDisconnect(),a._publicKey=n,a._autoApprove=!!e.data.params.autoApprove,a.emit("connect",a._publicKey))}else if("disconnected"===e.data.method)a._handleDisconnect();else if((e.data.result||e.data.error)&&a._responsePromises.has(e.data.id)){var t=p(a._responsePromises.get(e.data.id),2),o=t[0],i=t[1];e.data.result?o(e.data.result):i(new Error(e.data.error))}},a._handleConnect=function(){return a._handlerAdded||(a._handlerAdded=!0,window.addEventListener("message",a._handleMessage),window.addEventListener("beforeunload",a.disconnect)),a._injectedProvider?new Promise((function(e){a._sendRequest("connect",{}),e()})):(window.name="parent",a._popup=window.open(a._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){a.once("connect",e)})))},a._handleDisconnect=function(){a._handlerAdded&&(a._handlerAdded=!1,window.removeEventListener("message",a._handleMessage),window.removeEventListener("beforeunload",a.disconnect)),a._publicKey&&(a._publicKey=null,a.emit("disconnect")),a._responsePromises.forEach((function(e,n){var t=p(e,2);t[0];var r=t[1];a._responsePromises.delete(n),r("Wallet disconnected")}))},a._sendRequest=function(e,n){return d(a,void 0,void 0,(function(){var t,r=this;return f(this,(function(o){if("connect"!==e&&!this.connected)throw new Error("Wallet not connected");return t=this._nextRequestId,++this._nextRequestId,[2,new Promise((function(o,i){r._responsePromises.set(t,[o,i]),r._injectedProvider?r._injectedProvider.postMessage({jsonrpc:"2.0",id:t,method:e,params:u({network:r._network},n)}):(r._popup.postMessage({jsonrpc:"2.0",id:t,method:e,params:n},r._providerUrl.origin),r.autoApprove||r._popup.focus())}))]}))}))},a.connect=function(){return a._popup&&a._popup.close(),a._handleConnect()},a.disconnect=function(){return d(a,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:e.sent(),e.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}}))}))},a.sign=function(e,n){return d(a,void 0,void 0,(function(){var t,i,a;return f(this,(function(s){switch(s.label){case 0:if(!(e instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:e,display:n})];case 1:return t=s.sent(),i=o.decode(t.signature),a=new r(t.publicKey),[2,{signature:i,publicKey:a}]}}))}))},a.signTransaction=function(e){return d(a,void 0,void 0,(function(){var n,t,i;return f(this,(function(a){switch(a.label){case 0:return[4,this._sendRequest("signTransaction",{message:o.encode(e.serializeMessage())})];case 1:return n=a.sent(),t=o.decode(n.signature),i=new r(n.publicKey),e.addSignature(i,t),[2,e]}}))}))},a.signAllTransactions=function(e){return d(a,void 0,void 0,(function(){var n,t,i;return f(this,(function(a){switch(a.label){case 0:return[4,this._sendRequest("signAllTransactions",{messages:e.map((function(e){return o.encode(e.serializeMessage())}))})];case 1:return n=a.sent(),t=n.signatures.map((function(e){return o.decode(e)})),i=new r(n.publicKey),[2,e=e.map((function(e,n){return e.addSignature(i,t[n]),e}))]}}))}))},function(e){return"object"==typeof e&&null!==e}(i=n)&&function(e){return"function"==typeof e}(i.postMessage))a._injectedProvider=n;else{if(!function(e){return"string"==typeof e}(n))throw new Error("provider parameter must be an injected provider or a URL string.");a._providerUrl=new URL(n),a._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:t}).toString()}return a._network=t,a._publicKey=null,a._autoApprove=!1,a._popup=null,a._handlerAdded=!1,a._nextRequestId=1,a._responsePromises=new Map,a}return l(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return null!==this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),n}(i),v=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),_=globalThis&&globalThis.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},y=globalThis&&globalThis.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(c){s=[6,c],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},g=function(e){function n(n,t,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,n){return _(o,void 0,void 0,(function(){return y(this,(function(t){switch(t.label){case 0:return this._instance.sendRequest?[4,this._instance.sendRequest(e,n)]:[3,2];case 1:case 3:return[2,t.sent()];case 2:return this._instance._sendRequest?[4,this._instance._sendRequest(e,n)]:[3,4];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}}))}))},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=t,o._provider=r,o}return v(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return _(this,void 0,void 0,(function(){var e=this;return y(this,(function(n){switch(n.label){case 0:return this._instance=new h(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var n,t;!1!==(null===(t=null===(n=e._instance)||void 0===n?void 0:n._popup)||void 0===t?void 0:t.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return _(this,void 0,void 0,(function(){return y(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return _(this,void 0,void 0,(function(){var n;return y(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:o.encode(e)})];case 1:return n=t.sent(),[2,o.decode(n.signature)]}}))}))},n.prototype.signAllTransactions=function(e){return _(this,void 0,void 0,(function(){return y(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:e.map((function(e){return o.encode(e)}))})];case 1:return[2,n.sent().signatures.map((function(e){return o.decode(e)}))]}}))}))},n.prototype.signAndSendTransaction=function(e,n){return _(this,void 0,void 0,(function(){return y(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:o.encode(e),options:n})];case 1:return[2,t.sent().signature]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),_(this,void 0,void 0,(function(){var t;return y(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,n)];case 1:return t=r.sent().signature,[2,Uint8Array.from(t)]}}))}))},n}(c);let b;const m=new Uint8Array(16);function w(){if(!b&&(b="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(m)}const x=[];for(let e=0;e<256;++e)x.push((e+256).toString(16).slice(1));const T={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function A(e,n,t){if(T.randomUUID&&!n&&!e)return T.randomUUID();const r=(e=e||{}).random||(e.rng||w)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(let e=0;e<16;++e)n[t+e]=r[e];return n}return function(e,n=0){return x[e[n+0]]+x[e[n+1]]+x[e[n+2]]+x[e[n+3]]+"-"+x[e[n+4]]+x[e[n+5]]+"-"+x[e[n+6]]+x[e[n+7]]+"-"+x[e[n+8]]+x[e[n+9]]+"-"+x[e[n+10]]+x[e[n+11]]+x[e[n+12]]+x[e[n+13]]+x[e[n+14]]+x[e[n+15]]}(r)}var I=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),P=globalThis&&globalThis.__assign||function(){return P=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},P.apply(this,arguments)},E=globalThis&&globalThis.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},j=globalThis&&globalThis.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(c){s=[6,c],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},S=function(e){function n(n,t){var o,i=this;return(i=e.call(this)||this)._publicKey=null,i._messageHandlers={},i.handleMessage=function(e){if(i._messageHandlers[e.id]){var n=i._messageHandlers[e.id],t=n.resolve,r=n.reject;delete i._messageHandlers[e.id],e.error?r(e.error):t(e.result)}},i._sendMessage=function(e){if(!i.connected)throw new Error("Wallet not connected");return new Promise((function(n,t){var r,o,a=A();i._messageHandlers[a]={resolve:n,reject:t},null===(o=null===(r=i._iframe)||void 0===r?void 0:r.contentWindow)||void 0===o||o.postMessage({channel:"solflareWalletAdapterToIframe",data:P({id:a},e)},"*")}))},i._iframe=n,i._publicKey=new r(null===(o=null==t?void 0:t.toString)||void 0===o?void 0:o.call(t)),i}return I(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return E(this,void 0,void 0,(function(){return j(this,(function(e){return[2]}))}))},n.prototype.disconnect=function(){return E(this,void 0,void 0,(function(){return j(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){var n;return E(this,void 0,void 0,(function(){var t,r;return j(this,(function(i){switch(i.label){case 0:if(!this.connected)throw new Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:o.encode(e)}})];case 2:return t=i.sent().signature,[2,o.decode(t)];case 3:throw r=i.sent(),new Error((null===(n=null==r?void 0:r.toString)||void 0===n?void 0:n.call(r))||"Failed to sign transaction");case 4:return[2]}}))}))},n.prototype.signAllTransactions=function(e){var n;return E(this,void 0,void 0,(function(){var t;return j(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map((function(e){return o.encode(e)}))}})];case 2:return[2,r.sent().signatures.map((function(e){return o.decode(e)}))];case 3:throw t=r.sent(),new Error((null===(n=null==t?void 0:t.toString)||void 0===n?void 0:n.call(t))||"Failed to sign transactions");case 4:return[2]}}))}))},n.prototype.signAndSendTransaction=function(e,n){var t;return E(this,void 0,void 0,(function(){var r;return j(this,(function(i){switch(i.label){case 0:if(!this.connected)throw new Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:o.encode(e),options:n}})];case 2:return[2,i.sent()];case 3:throw r=i.sent(),new Error((null===(t=null==r?void 0:r.toString)||void 0===t?void 0:t.call(r))||"Failed to sign and send transaction");case 4:return[2]}}))}))},n.prototype.signMessage=function(e,n){var t;return void 0===n&&(n="hex"),E(this,void 0,void 0,(function(){var r,i;return j(this,(function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:n}})];case 2:return r=a.sent(),[2,Uint8Array.from(o.decode(r))];case 3:throw i=a.sent(),new Error((null===(t=null==i?void 0:i.toString)||void 0===t?void 0:t.call(i))||"Failed to sign message");case 4:return[2]}}))}))},n}(c);function O(e){return void 0===e.version}var M=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),K=globalThis&&globalThis.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},R=globalThis&&globalThis.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(c){s=[6,c],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}},k=globalThis&&globalThis.__values||function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};e("default",function(e){function n(t){var r=e.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var n,t,o,i;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new g(r._iframe,r._network,(null===(n=e.data)||void 0===n?void 0:n.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new S(r._iframe,(null===(t=e.data)||void 0===t?void 0:t.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"accountChanged":return void((null===(i=e.data)||void 0===i?void 0:i.publicKey)?(r._adapterInstance=new S(r._iframe,e.data.publicKey),r._adapterInstance.connect(),r.emit("accountChanged",r.publicKey)):r.emit("accountChanged",void 0));case"collapse":return void r._collapseIframe();default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){var n;if("solflareIframeToWalletAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)){var t=e.data.data||{};"event"===t.type?r._handleEvent(t.event):"resize"===t.type?r._handleResize(t):"response"===t.type&&r._adapterInstance&&r._adapterInstance.handleMessage(t)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,n,t=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=k(t),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(n.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin),"&version=1"),t=r._getPreferredAdapter();t&&(e+="&adapter=".concat(encodeURIComponent(t))),r._provider&&(e+="&provider=".concat(encodeURIComponent(r._provider))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var n,t;null===(t=null===(n=r._iframe)||void 0===n?void 0:n.contentWindow)||void 0===t||t.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null==t?void 0:t.network)&&(r._network=null==t?void 0:t.network),(null==t?void 0:t.provider)&&(r._provider=null==t?void 0:t.provider),r}return M(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return K(this,void 0,void 0,(function(){var e=this;return R(this,(function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(n,t){e._connectHandler={resolve:n,reject:t}}))]);case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return K(this,void 0,void 0,(function(){return R(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},n.prototype.signTransaction=function(e){return K(this,void 0,void 0,(function(){var n,t,r,o,i=this;return R(this,(function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=O(e)?e.serializeMessage():e.message.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return t=a.sent(),O(e)?e.addSignature(this.publicKey,Buffer.from(t)):(r=e.message.staticAccountKeys.slice(0,e.message.header.numRequiredSignatures),(o=r.findIndex((function(e){return e.equals(i.publicKey)})))>=0&&(e.signatures[o]=t)),[2,e]}}))}))},n.prototype.signAllTransactions=function(e){return K(this,void 0,void 0,(function(){var n,t,r,o,i,a,s=this;return R(this,(function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=e.map((function(e){return O(e)?e.serializeMessage():e.message.serialize()})),[4,this._adapterInstance.signAllTransactions(n)];case 1:for(t=c.sent(),r=0;r<e.length;r++)O(o=e[r])?o.addSignature(this.publicKey,Buffer.from(t[r])):(i=o.message.staticAccountKeys.slice(0,o.message.header.numRequiredSignatures),(a=i.findIndex((function(e){return e.equals(s.publicKey)})))>=0&&(o.signatures[a]=t[r]));return[2,e]}}))}))},n.prototype.signAndSendTransaction=function(e,n){return K(this,void 0,void 0,(function(){var t;return R(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=O(e)?e.serialize({verifySignatures:!1,requireAllSignatures:!1}):e.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,n)];case 1:return[2,r.sent()]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="utf8"),K(this,void 0,void 0,(function(){return R(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.sign=function(e,n){return void 0===n&&(n="utf8"),K(this,void 0,void 0,(function(){return R(this,(function(t){switch(t.label){case 0:return[4,this.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.detectWallet=function(e){var n;return void 0===e&&(e=10),K(this,void 0,void 0,(function(){return R(this,(function(t){return window.SolflareApp||(null===(n=window.solflare)||void 0===n?void 0:n.isSolflare)?[2,!0]:[2,new Promise((function(n){var t,r;t=setInterval((function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(t),clearTimeout(r),n(!0))}),500),r=setTimeout((function(){clearInterval(t),n(!1)}),1e3*e)}))]}))}))},n.IFRAME_URL="https://connect.solflare.com/",n}(i))}}}));