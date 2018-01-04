!function(e,n){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js","../cp-styles/cp-styles.compiled.js","../cp-accordion-heading/cp-accordion-heading.compiled.js","../cp-accordion-panel/cp-accordion-panel.compiled.js"],n);else if("undefined"!=typeof exports)n(require("../rhelement/rhelement.compiled.js"),require("../cp-styles/cp-styles.compiled.js"),require("../cp-accordion-heading/cp-accordion-heading.compiled.js"),require("../cp-accordion-panel/cp-accordion-panel.compiled.js"));else{n(e.rhelementCompiled,e.cpStylesCompiled,e.cpAccordionHeadingCompiled,e.cpAccordionPanelCompiled),e.cpAccordion={}}}(this,function(e){"use strict";function n(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var t=function(e){return e&&e.__esModule?e:{default:e}}(e),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),t=n.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var a=arguments[1],i=0;i<t;){var r=n[i];if(e.call(a,r,i,n))return i;i++}return-1}});var i=document.createElement("template");i.innerHTML='\n<style>*, *::before, *:after {\n  box-sizing: var(--box-sizing, border-box); }\n\n:host {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  margin: 0; }\n\n:host(cp-accordion[data-theme="striped"]) ::slotted(cp-accordion-heading.even) {\n  background-color: var(--white, white); }</style>\n<slot></slot>\n';var r=function(e){function r(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,"cp-accordion",i))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(r,t.default),a(r,null,[{key:"observedAttributes",get:function(){return["data-theme"]}}]),a(r,[{key:"connectedCallback",value:function(){(function e(n,t,a){null===n&&(n=Function.prototype);var i=Object.getOwnPropertyDescriptor(n,t);if(void 0===i){var r=Object.getPrototypeOf(n);return null===r?void 0:e(r,t,a)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(a)})(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.setAttribute("role","tablist"),this.setAttribute("defined",""),this.addEventListener("cp-accordion-change",this._changeHandler),this.addEventListener("keydown",this._keydownHandler)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("cp-accordion-change",this._changeHandler),this.removeEventListener("keydown",this._keydownHandler)}},{key:"attributeChangedCallback",value:function(e,t,a){if("data-theme"===e){var i=this.querySelectorAll("cp-accordion-heading");"striped"===a?[].concat(n(i)).forEach(function(e,n){var t=n%2?"even":"odd";e.classList.add(t)}):[].concat(n(i)).forEach(function(e,n){e.classList.remove("even","odd")})}}},{key:"toggle",value:function(e){var n=this._allHeadings(),t=this._allPanels(),a=n[e],i=t[e];a&&i&&(a.expanded?(this._collapseHeading(a),this._collapsePanel(i)):(this._expandHeading(a),this._expandPanel(i)))}},{key:"expand",value:function(e){var n=this._allHeadings(),t=this._allPanels(),a=n[e],i=t[e];a&&i&&(this._expandHeading(a),this._expandPanel(i))}},{key:"expandAll",value:function(){var e=this,n=this._allHeadings(),t=this._allPanels();n.forEach(function(n){return e._expandHeading(n)}),t.forEach(function(n){return e._expandPanel(n)})}},{key:"collapse",value:function(e){var n=this._allHeadings(),t=this._allPanels(),a=n[e],i=t[e];a&&i&&(this._collapseHeading(a),this._collapsePanel(i))}},{key:"collapseAll",value:function(){var e=this,n=this._allHeadings(),t=this._allPanels();n.forEach(function(n){return e._collapseHeading(n)}),t.forEach(function(n){return e._collapsePanel(n)})}},{key:"_changeHandler",value:function(e){if(!this.classList.contains("animating")){var n=e.target,t=e.target.nextElementSibling;e.detail.expanded?(this._expandHeading(n),this._expandPanel(t)):(this._collapseHeading(n),this._collapsePanel(t))}}},{key:"_toggle",value:function(e,n){}},{key:"_expandHeading",value:function(e){e.expanded=!0}},{key:"_expandPanel",value:function(e){if(!e.expanded){e.expanded=!0;var n=e.getBoundingClientRect().height;this._animate(e,0,n)}}},{key:"_collapseHeading",value:function(e){e.expanded=!1}},{key:"_collapsePanel",value:function(e){if(e.expanded){var n=e.getBoundingClientRect().height;e.expanded=!1,this._animate(e,n,0)}}},{key:"_animate",value:function(e,n,t){var a=this;e.classList.add("animating"),e.style.height=n+"px",requestAnimationFrame(function(){requestAnimationFrame(function(){e.style.height=t+"px",e.classList.add("animating"),e.addEventListener("transitionend",a._transitionEndHandler)})})}},{key:"_keydownHandler",value:function(e){var n=e.target;if(this._isHeading(n)){var t=void 0;switch(e.key){case"ArrowDown":case"Down":case"ArrowRight":case"Right":t=this._nextHeading();break;case"ArrowUp":case"Up":case"ArrowLeft":case"Left":t=this._previousHeading();break;case"Home":t=this._firstHeading();break;case"End":t=this._lastHeading();break;default:return}t.shadowRoot.querySelector("button").focus()}}},{key:"_transitionEndHandler",value:function(e){e.target.style.height="",e.target.classList.remove("animating"),e.target.removeEventListener("transitionend",this._transitionEndHandler)}},{key:"_allHeadings",value:function(){return[].concat(n(this.querySelectorAll("cp-accordion-heading")))}},{key:"_allPanels",value:function(){return[].concat(n(this.querySelectorAll("cp-accordion-panel")))}},{key:"_previousHeading",value:function(){var e=this._allHeadings();return e[(e.findIndex(function(e){return e===document.activeElement})-1+e.length)%e.length]}},{key:"_nextHeading",value:function(){var e=this._allHeadings();return e[(e.findIndex(function(e){return e===document.activeElement})+1)%e.length]}},{key:"_firstHeading",value:function(){return this._allHeadings()[0]}},{key:"_lastHeading",value:function(){var e=this._allHeadings();return e[e.length-1]}},{key:"_isHeading",value:function(e){return"cp-accordion-heading"===e.tagName.toLowerCase()}}]),r}();window.customElements.define("cp-accordion",r)});