!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function O(e){return l=e,f=setTimeout(T,t),d?b(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=g();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?b(e):(r=i=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(s)return f=setTimeout(T,t),b(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=a.test(e);return o||f.test(e)?c(e.slice(2),o?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var O,j=document.querySelector(".feedback-form"),T=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),w="feedback-form-state";j.addEventListener("input",n((function(e){var t={email:T.value,message:h.value};localStorage.setItem(w,JSON.stringify(t))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(w))),e.currentTarget.reset(),localStorage.removeItem(w)})),(O=localStorage.getItem(w))&&(T.value=JSON.parse(O).email,h.value=JSON.parse(O).message)}();
//# sourceMappingURL=03-feedback.ddc2569b.js.map
