!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("superagent")):"function"==typeof define&&define.amd?define(["superagent"],t):"object"==typeof exports?exports["gapi-js"]=t(require("superagent")):e["gapi-js"]=t(e._)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){n(this,e),this.resource=null}return s(e,[{key:"countries",get:function(){return this.resource="countries",this},set:function(e){return this}},{key:"places",get:function(){return this.resource="places",this},set:function(e){return this}},{key:"dossiers",get:function(){return this.resource="dossiers",this},set:function(e){return this}},{key:"country_dossiers",get:function(){return this.resource="country_dossiers",this},set:function(e){return this}},{key:"place_dossiers",get:function(){return this.resource="place_dossiers",this},set:function(e){return this}},{key:"transport_dossiers",get:function(){return this.resource="transport_dossiers",this},set:function(e){return this}},{key:"activity_dossiers",get:function(){return this.resource="activity_dossiers",this},set:function(e){return this}},{key:"accommodation_dossiers",get:function(){return this.resource="accommodation_dossiers",this},set:function(e){return this}},{key:"features",get:function(){return this.resource="features",this},set:function(e){return this}},{key:"dossier_features",get:function(){return this.resource="dossier_features",this},set:function(e){return this}},{key:"dossier_segments",get:function(){return this.resource="dossier_segments",this},set:function(e){return this}},{key:"itineraries",get:function(){return this.resource="itineraries",this},set:function(e){return this}}]),e}();t.default=i},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),a=n(c),f=r(0),h=n(f),l=function(e){function t(e){var r=e.url,n=void 0===r?"https://rest.gadventures.com":r,o=e.key,u=e.proxy;s(this,t);var c=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(!o)throw"A gapi key is required when instantiating Gapi";return c.baseUrl=n,c.key=o,c.proxy=u,c}return o(t,e),u(t,[{key:"_setHeaders",value:function(){this.request.accept(this.proxy?"application/json;"+this.proxy:"application/json"),this.request.type("application/json"),this.request.set("X-Application-Key",this.key)}},{key:"_getUrl",value:function(){if(!this.resource)throw"No resource has been provided.";for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return[this.baseUrl,this.resource].concat(t).join("/")+"/"}},{key:"get",value:function(e){var t=this._getUrl(e);return this.request=a.default.get(t),this._setHeaders(),this}},{key:"list",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,r=this._getUrl();return this.request=a.default.get(r),this.page(e,t),this._setHeaders(),this}},{key:"query",value:function(e){return this.request.query(e),this}},{key:"page",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return this.query({page:e,max_per_page:t}),this}},{key:"order",value:function(){for(var e=this,t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach(function(t){var r=t,n=0===t.indexOf("-");if(n&&(r=t.slice(1)),0===r.length)throw new Error("Order parameter property is an empty string");var s="order_by__"+(n?"desc":"asc");e.request.query(s+"="+r)}),this}},{key:"post",value:function(){var e=this._getUrl();return this.request=a.default.post(e),this._setHeaders(),this}},{key:"patch",value:function(e){var t=this._getUrl(e);return this.request=a.default.patch(t),this._setHeaders(),this}},{key:"del",value:function(e){var t=this._getUrl(e);return this.request=a.default.del(t),this._setHeaders(),this}},{key:"send",value:function(e){return this.request.send(e),this}},{key:"end",value:function(e){return this.request.end(e),this}},{key:"then",value:function(e,t){return this.request.then(e,t)}}]),t}(h.default);t.default=l}])});
//# sourceMappingURL=gapi-js.js.map