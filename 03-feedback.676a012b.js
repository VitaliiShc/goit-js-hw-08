!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,m=function(){return s.Date.now()};function b(e,t,n){var o,i,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,f=setTimeout(T,t),d?b(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function T(){var e=m();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?b(e):(o=i=void 0,u)}function w(){var e=m(),n=j(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(T,t),b(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:h(m())},w}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var O="feedback-form-state",j=document.querySelector(".feedback-form");j.addEventListener("input",e(t)((function(e){var t=localStorage.getItem(O);console.log(t),(t=t?JSON.parse(t):{})[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(t))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(O))),e.currentTarget.reset(),localStorage.removeItem(O)})),function(){if(localStorage.getItem(O)){var e=JSON.parse(localStorage.getItem(O));for(var t in console.log(e),e)j[t].value=e[t]}}()}();
//# sourceMappingURL=03-feedback.676a012b.js.map
