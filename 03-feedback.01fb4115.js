var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("kEUo3");const n={formEl:document.querySelector(".feedback-form"),textarea:document.querySelector('[name="message"]'),emailEl:document.querySelector('[name="email"]')};let l=JSON.parse(localStorage.getItem("feedback-form-state"))||{};n.formEl.addEventListener("input",(0,a.throttle)((function(e){l[e.target.name]=e.target.value;const t=JSON.stringify(l);localStorage.setItem("feedback-form-state",t)}),500)),n.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log(l),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),l={}})),function(){if(null===l)return;n.textarea.value=l.message||"",n.emailEl.value=l.email||""}();
//# sourceMappingURL=03-feedback.01fb4115.js.map