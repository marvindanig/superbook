/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(6);
	
	var _isTouch = __webpack_require__(304);
	
	var _isTouch2 = _interopRequireDefault(_isTouch);
	
	var _pages = __webpack_require__(305);
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _graph = __webpack_require__(306);
	
	var _graph2 = _interopRequireDefault(_graph);
	
	__webpack_require__(307);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import $ from 'jquery';
	!+-~function (w, d, undefined) {
	
	    var book = {};
	
	    var mq = function mq(query, cb, usePolyfill) {
	        var host = {};
	        var isMatchMediaSupported = !!(w && w.matchMedia) && !usePolyfill;
	
	        if (isMatchMediaSupported) {
	            var res = w.matchMedia(query);
	
	            cb.apply(host, [res.matches, res.media]);
	
	            res.addListener(function (changed) {
	                cb.apply(host, [changed.matches, changed.media]);
	            });
	        } else {
	            // ... polyfill
	        }
	    };
	
	    mq('all and (min-width: 870px)', function (match) {
	        book.mode = match ? 'double' : 'single';
	        console.log(book.mode);
	    });
	}(window, document);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n    box-sizing: border-box;\n}\n\n*:after {\n    box-sizing: border-box;\n}\n\n*:before {\n    box-sizing: border-box;\n}\n\nhtml, body {\n    margin: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    pointer-events: none;\n    /* cursor: none; */    \n    display: -webkit-box;    \n    display: -ms-flexbox;    \n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.viewer {\n    pointer-events: auto;\n    cursor: default;\n   -webkit-perspective: 200px; /* Applies uniformly to its children */\n    perspective: 200px; \n    -webkit-perspective-origin: 50% 50%; \n            perspective-origin: 50% 50%;\n}\n\n#book {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    -webkit-transform: translateZ(0px);\n            transform: translateZ(0px); /* Can effect pinch2zoom */\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d; /* Gets faus 3D space for pages */\n}\n\n.page {\n    height: 100%;\n}\n\n\n.left {\n    float: left;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.right {\n    float: right;\n    position: absolute;\n    top: 0;\n    right: 0\n}\n\n.promoted {\n  will-change: transform;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n\n\n@media (max-width: 870px) {\n    body .viewer {\n        width: calc(100vh * 1540/(1000 * 2));\n        height: 100vh;\n        max-height: calc(100vw * 1443/1114);\n    }\n    body .page {\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n        width: 100%;\n    }\n    body .flipped {\n        -webkit-transform: rotateY( 0deg );\n                transform: rotateY( 0deg );\n    }\n\n}\n\n@media (min-width: 871px) {\n    body .viewer {\n        width: calc(100vh * 1540/1000);\n        height: 100vh;\n        max-height: calc(50vw * 1443/1114);\n    }\n    body .page {\n        -webkit-backface-visibility: visible;\n                backface-visibility: visible;\n        width: 50%;\n    }\n    body .flipped {\n        -webkit-transform: rotateY( 180deg );\n                transform: rotateY( 180deg );\n    }\n}\n\n\n\n\n\n\n\n\n/* Arrow buttons for desktops */\n\n.arrow-controls {\n    -webkit-transition: none;\n    transition: none;\n    width: 30px;\n    height: 100%;\n    opacity: 1;\n    -webkit-transition: opacity 0.2s;\n    transition: opacity 0.2s;\n    cursor: pointer;\n    background: rgba(100, 100, 100, 0.4);\n    color: white;\n    z-index: 10;\n}\n\n.previous-page {\n    float: left;\n    margin: 0 0 0 -30px;\n    float: left;\n    border-radius: 10px 0 0 10px;\n}\n\n.next-page {\n    float: right;\n    margin: 0 -30px 0 0;\n    border-radius: 0 10px 10px 0;\n}\n\n.flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.noselect {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.arrow-tap {\n    opacity: 1;\n}\n\n.first-page .previous-page {\n    opacity: 0;\n}\n\n.last-page .next-page {\n    opacity: 0;\n}\n\n.first-page .next-page {\n    -webkit-animation: next-page 1s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n    -moz-animation: next-page 1s;\n    -moz-animation-iteration-count: infinite;\n    -moz-animation-timing-function: ease-in-out;\n    -o-animation: next-page 1s;\n    -o-animation-iteration-count: infinite;\n    -o-animation-timing-function: ease-in-out;\n    -ms-animation: next-page 1s;\n    -ms-animation-iteration-count: infinite;\n    -ms-animation-timing-function: ease-in-out;\n    -webkit-animation: next-page 1s;\n    animation: next-page 1s;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n}\n\n@-webkit-keyframes next-page {\n    0% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n    50% {\n        -webkit-transform: translateX(6px);\n        transform: translateX(6px);\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n}\n\n@keyframes next-page {\n    0% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n    50% {\n        -webkit-transform: translateX(6px);\n        transform: translateX(6px);\n    }\n    100% {\n        -webkit-transform: translateX(0px);\n        transform: translateX(0px);\n    }\n}\n\n.page iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: 0px none;\n    min-width: 100%;\n    min-height: 100%;\n    margin: 0;\n}\n\n\n.grabbable {\n    cursor: move; /* fallback if grab cursor is unsupported */\n    cursor: grab;\n    cursor: -webkit-grab;\n}\n\n /* (Optional) Apply a \"closed-hand\" cursor during drag operation. */\n.grabbable:active { \n    cursor: grabbing;\n    cursor: -webkit-grabbing;\n}\n\n\n/* Deletable */\n\n.red {\n    background-color: red;\n}\n\n.blue {\n    background-color: lightblue;\n}\n\n.green {\n    background-color: lightgreen;\n}\n\n.yellow {\n    background-color: yellow;\n}\n\n.orange {\n    background-color: orange;\n    -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 200, 1);\n            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 200, 1);\n}\n\n.pink {\n    background-color: pink;\n}\n\n.wheat {\n    background-color: wheat;\n}\n\n.gray {\n    background-color: gray;\n}\n\n#plotter {\n    pointer-events: auto;\n    cursor: default;\n    -webkit-perspective: 200px;\n    /* Applies uniformly to its children */\n    perspective: 200px;\n    -webkit-perspective-origin: 50% 50%;\n            perspective-origin: 50% 50%;\n    background-position: 0 0;\n    background-size: 50% 50%;\n    background-image: -webkit-linear-gradient(left, grey 1px, transparent 1px), -webkit-linear-gradient(top, grey 1px, transparent 1px);\n    background-image: linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px);\n}\n\n#coordinates {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 200px;\n    background: rgba( 0, 190, 0, 0.3);\n}\n\n#xaxis, #yaxis {\n    width: 100%;\n    height: 50%;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(7);
	
	__webpack_require__(298);
	
	__webpack_require__(301);
	
	/* eslint max-len: 0 */
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	// Should be removed in the next major release:
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(8);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(62);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(75);
	__webpack_require__(77);
	__webpack_require__(79);
	__webpack_require__(81);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(90);
	__webpack_require__(92);
	__webpack_require__(94);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(189);
	__webpack_require__(192);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(206);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(209);
	__webpack_require__(216);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(296);
	__webpack_require__(297);
	module.exports = __webpack_require__(14);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var global = __webpack_require__(9),
	    has = __webpack_require__(10),
	    DESCRIPTORS = __webpack_require__(11),
	    $export = __webpack_require__(13),
	    redefine = __webpack_require__(23),
	    META = __webpack_require__(27).KEY,
	    $fails = __webpack_require__(12),
	    shared = __webpack_require__(28),
	    setToStringTag = __webpack_require__(29),
	    uid = __webpack_require__(24),
	    wks = __webpack_require__(30),
	    wksExt = __webpack_require__(31),
	    wksDefine = __webpack_require__(32),
	    keyOf = __webpack_require__(34),
	    enumKeys = __webpack_require__(47),
	    isArray = __webpack_require__(50),
	    anObject = __webpack_require__(17),
	    toIObject = __webpack_require__(37),
	    toPrimitive = __webpack_require__(21),
	    createDesc = __webpack_require__(22),
	    _create = __webpack_require__(51),
	    gOPNExt = __webpack_require__(54),
	    $GOPD = __webpack_require__(56),
	    $DP = __webpack_require__(16),
	    $keys = __webpack_require__(35),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(55).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(49).f = $propertyIsEnumerable;
	  __webpack_require__(48).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(33)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	  wks(symbols[i++]);
	}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	  wksDefine(symbols[i++]);
	}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    core = __webpack_require__(14),
	    hide = __webpack_require__(15),
	    redefine = __webpack_require__(23),
	    ctx = __webpack_require__(25),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(16),
	    createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(11) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(17),
	    IE8_DOM_DEFINE = __webpack_require__(19),
	    toPrimitive = __webpack_require__(21),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(11) && !__webpack_require__(12)(function () {
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18),
	    document = __webpack_require__(9).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    hide = __webpack_require__(15),
	    has = __webpack_require__(10),
	    SRC = __webpack_require__(24)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(14).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(26);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var META = __webpack_require__(24)('meta'),
	    isObject = __webpack_require__(18),
	    has = __webpack_require__(10),
	    setDesc = __webpack_require__(16).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(12)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(16).f,
	    has = __webpack_require__(10),
	    TAG = __webpack_require__(30)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(28)('wks'),
	    uid = __webpack_require__(24),
	    _Symbol = __webpack_require__(9).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.f = __webpack_require__(30);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    core = __webpack_require__(14),
	    LIBRARY = __webpack_require__(33),
	    wksExt = __webpack_require__(31),
	    defineProperty = __webpack_require__(16).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(35),
	    toIObject = __webpack_require__(37);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(36),
	    enumBugKeys = __webpack_require__(46);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(10),
	    toIObject = __webpack_require__(37),
	    arrayIndexOf = __webpack_require__(41)(false),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(38),
	    defined = __webpack_require__(40);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(39);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(37),
	    toLength = __webpack_require__(42),
	    toIndex = __webpack_require__(44);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(43),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(43),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(28)('keys'),
	    uid = __webpack_require__(24);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(35),
	    gOPS = __webpack_require__(48),
	    pIE = __webpack_require__(49);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(39);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(17),
	    dPs = __webpack_require__(52),
	    enumBugKeys = __webpack_require__(46),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(53).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(16),
	    anObject = __webpack_require__(17),
	    getKeys = __webpack_require__(35);
	
	module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(37),
	    gOPN = __webpack_require__(55).f,
	    toString = {}.toString;
	
	var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(36),
	    hiddenKeys = __webpack_require__(46).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pIE = __webpack_require__(49),
	    createDesc = __webpack_require__(22),
	    toIObject = __webpack_require__(37),
	    toPrimitive = __webpack_require__(21),
	    has = __webpack_require__(10),
	    IE8_DOM_DEFINE = __webpack_require__(19),
	    gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(51) });

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(11), 'Object', { defineProperty: __webpack_require__(16).f });

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(11), 'Object', { defineProperties: __webpack_require__(52) });

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(37),
	    $getOwnPropertyDescriptor = __webpack_require__(56).f;
	
	__webpack_require__(61)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13),
	    core = __webpack_require__(14),
	    fails = __webpack_require__(12);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(63),
	    $getPrototypeOf = __webpack_require__(64);
	
	__webpack_require__(61)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(40);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(10),
	    toObject = __webpack_require__(63),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(63),
	    $keys = __webpack_require__(35);
	
	__webpack_require__(61)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(61)('getOwnPropertyNames', function () {
	  return __webpack_require__(54).f;
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18),
	    meta = __webpack_require__(27).onFreeze;
	
	__webpack_require__(61)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18),
	    meta = __webpack_require__(27).onFreeze;
	
	__webpack_require__(61)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18),
	    meta = __webpack_require__(27).onFreeze;
	
	__webpack_require__(61)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(61)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(61)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(61)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(74) });

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(35),
	    gOPS = __webpack_require__(48),
	    pIE = __webpack_require__(49),
	    toObject = __webpack_require__(63),
	    IObject = __webpack_require__(38),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(12)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', { is: __webpack_require__(76) });

/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(78).set });

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(18),
	    anObject = __webpack_require__(17);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(25)(Function.call, __webpack_require__(56).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(80),
	    test = {};
	test[__webpack_require__(30)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(23)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(39),
	    TAG = __webpack_require__(30)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(13);
	
	$export($export.P, 'Function', { bind: __webpack_require__(82) });

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(26),
	    isObject = __webpack_require__(18),
	    invoke = __webpack_require__(83),
	    arraySlice = [].slice,
	    factories = {};
	
	var construct = function construct(F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) {
	      n[i] = 'a[' + i + ']';
	    }factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */) {
	  var fn = aFunction(this),
	      partArgs = arraySlice.call(arguments, 1);
	  var bound = function bound() /* args... */{
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(16).f,
	    createDesc = __webpack_require__(22),
	    has = __webpack_require__(10),
	    FProto = Function.prototype,
	    nameRE = /^\s*function ([^ (]*)/,
	    NAME = 'name';
	
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(11) && dP(FProto, NAME, {
	  configurable: true,
	  get: function get() {
	    try {
	      var that = this,
	          name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch (e) {
	      return '';
	    }
	  }
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18),
	    getPrototypeOf = __webpack_require__(64),
	    HAS_INSTANCE = __webpack_require__(30)('hasInstance'),
	    FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(16).f(FunctionProto, HAS_INSTANCE, { value: function value(O) {
	    if (typeof this != 'function' || !isObject(O)) return false;
	    if (!isObject(this.prototype)) return O instanceof this;
	    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	    while (O = getPrototypeOf(O)) {
	      if (this.prototype === O) return true;
	    }return false;
	  } });

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $parseInt = __webpack_require__(87);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseInt = __webpack_require__(9).parseInt,
	    $trim = __webpack_require__(88).trim,
	    ws = __webpack_require__(89),
	    hex = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    defined = __webpack_require__(40),
	    fails = __webpack_require__(12),
	    spaces = __webpack_require__(89),
	    space = '[' + spaces + ']',
	    non = '​',
	    ltrim = RegExp('^' + space + space + '*'),
	    rtrim = RegExp(space + space + '*$');
	
	var exporter = function exporter(KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = '\t\n\u000b\f\r   ᠎    ' + '         　\u2028\u2029﻿';

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $parseFloat = __webpack_require__(91);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $parseFloat = __webpack_require__(9).parseFloat,
	    $trim = __webpack_require__(88).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(89) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3),
	      result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    has = __webpack_require__(10),
	    cof = __webpack_require__(39),
	    inheritIfRequired = __webpack_require__(93),
	    toPrimitive = __webpack_require__(21),
	    fails = __webpack_require__(12),
	    gOPN = __webpack_require__(55).f,
	    gOPD = __webpack_require__(56).f,
	    dP = __webpack_require__(16).f,
	    $trim = __webpack_require__(88).trim,
	    NUMBER = 'Number',
	    $Number = global[NUMBER],
	    Base = $Number,
	    proto = $Number.prototype
	// Opera ~12 has broken Object#toString
	,
	    BROKEN_COF = cof(__webpack_require__(51)(proto)) == NUMBER,
	    TRIM = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function toNumber(argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0),
	        third,
	        radix,
	        maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:case 98:
	          radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
	        case 79:case 111:
	          radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
	        default:
	          return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      }return parseInt(digits, radix);
	    }
	  }return +it;
	};
	
	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value,
	        that = this;
	    return that instanceof $Number
	    // check on 1..constructor(foo) case
	    && (BROKEN_COF ? fails(function () {
	      proto.valueOf.call(that);
	    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(11) ? gOPN(Base) : (
	  // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	  // ES6 (in case, if modules with ES6 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(23)(global, NUMBER, $Number);
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18),
	    setPrototypeOf = __webpack_require__(78).set;
	module.exports = function (that, target, C) {
	  var P,
	      S = target.constructor;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  }return that;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toInteger = __webpack_require__(43),
	    aNumberValue = __webpack_require__(95),
	    repeat = __webpack_require__(96),
	    $toFixed = 1..toFixed,
	    floor = Math.floor,
	    data = [0, 0, 0, 0, 0, 0],
	    ERROR = 'Number.toFixed: incorrect invocation!',
	    ZERO = '0';
	
	var multiply = function multiply(n, c) {
	  var i = -1,
	      c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function divide(n) {
	  var i = 6,
	      c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = c % n * 1e7;
	  }
	};
	var numToString = function numToString() {
	  var i = 6,
	      s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  }return s;
	};
	var pow = function pow(x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function log(x) {
	  var n = 0,
	      x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  }return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !__webpack_require__(12)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR),
	        f = toInteger(fractionDigits),
	        s = '',
	        m = ZERO,
	        e,
	        z,
	        j,
	        k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    }return m;
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var cof = __webpack_require__(39);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(43),
	    defined = __webpack_require__(40);
	
	module.exports = function repeat(count) {
	  var str = String(defined(this)),
	      res = '',
	      n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (; n > 0; (n >>>= 1) && (str += str)) {
	    if (n & 1) res += str;
	  }return res;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $fails = __webpack_require__(12),
	    aNumberValue = __webpack_require__(95),
	    $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(13),
	    _isFinite = __webpack_require__(9).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(101) });

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18),
	    floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    return number != number;
	  }
	});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(13),
	    isInteger = __webpack_require__(101),
	    abs = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $parseFloat = __webpack_require__(91);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $parseInt = __webpack_require__(87);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(13),
	    log1p = __webpack_require__(109),
	    sqrt = Math.sqrt,
	    $acosh = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	&& Math.floor($acosh(Number.MAX_VALUE)) == 710
	// Tor Browser bug: Math.acosh(Infinity) -> NaN 
	&& $acosh(Infinity) == Infinity), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(13),
	    $asinh = Math.asinh;
	
	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(13),
	    $atanh = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(13),
	    sign = __webpack_require__(113);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(13),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(13),
	    $expm1 = __webpack_require__(117);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";
	
	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = !$expm1
	// Old FF bug
	|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	// Tor Browser bug
	|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(13),
	    sign = __webpack_require__(113),
	    pow = Math.pow,
	    EPSILON = pow(2, -52),
	    EPSILON32 = pow(2, -23),
	    MAX32 = pow(2, 127) * (2 - EPSILON32),
	    MIN32 = pow(2, -126);
	
	var roundTiesToEven = function roundTiesToEven(n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	$export($export.S, 'Math', {
	  fround: function fround(x) {
	    var $abs = Math.abs(x),
	        $sign = sign(x),
	        a,
	        result;
	    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if (result > MAX32 || result != result) return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(13),
	    abs = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) {
	    // eslint-disable-line no-unused-vars
	    var sum = 0,
	        i = 0,
	        aLen = arguments.length,
	        larg = 0,
	        arg,
	        div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(13),
	    $imul = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(12)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff,
	        xn = +x,
	        yn = +y,
	        xl = UINT16 & xn,
	        yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', { log1p: __webpack_require__(109) });

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', { sign: __webpack_require__(113) });

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(13),
	    expm1 = __webpack_require__(117),
	    exp = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(12)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(13),
	    expm1 = __webpack_require__(117),
	    exp = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x),
	        b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toIndex = __webpack_require__(44),
	    fromCharCode = String.fromCharCode,
	    $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) {
	    // eslint-disable-line no-unused-vars
	    var res = [],
	        aLen = arguments.length,
	        i = 0,
	        code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
	    }return res.join('');
	  }
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toIObject = __webpack_require__(37),
	    toLength = __webpack_require__(42);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw),
	        len = toLength(tpl.length),
	        aLen = arguments.length,
	        res = [],
	        i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    }return res.join('');
	  }
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	
	__webpack_require__(88)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(132)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(133)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(43),
	    defined = __webpack_require__(40);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(33),
	    $export = __webpack_require__(13),
	    redefine = __webpack_require__(23),
	    hide = __webpack_require__(15),
	    has = __webpack_require__(10),
	    Iterators = __webpack_require__(134),
	    $iterCreate = __webpack_require__(135),
	    setToStringTag = __webpack_require__(29),
	    getPrototypeOf = __webpack_require__(64),
	    ITERATOR = __webpack_require__(30)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(51),
	    descriptor = __webpack_require__(22),
	    setToStringTag = __webpack_require__(29),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(15)(IteratorPrototype, __webpack_require__(30)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $at = __webpack_require__(132)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	
	var $export = __webpack_require__(13),
	    toLength = __webpack_require__(42),
	    context = __webpack_require__(138),
	    ENDS_WITH = 'endsWith',
	    $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(140)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH),
	        endPosition = arguments.length > 1 ? arguments[1] : undefined,
	        len = toLength(that.length),
	        end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
	        search = String(searchString);
	    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(139),
	    defined = __webpack_require__(40);
	
	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18),
	    cof = __webpack_require__(39),
	    MATCH = __webpack_require__(30)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var MATCH = __webpack_require__(30)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) {/* empty */}
	  }return true;
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	
	var $export = __webpack_require__(13),
	    context = __webpack_require__(138),
	    INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(140)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */) {
	    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(96)
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	
	var $export = __webpack_require__(13),
	    toLength = __webpack_require__(42),
	    context = __webpack_require__(138),
	    STARTS_WITH = 'startsWith',
	    $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(140)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH),
	        index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
	        search = String(searchString);
	    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	
	__webpack_require__(145)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    fails = __webpack_require__(12),
	    defined = __webpack_require__(40),
	    quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function createHTML(string, tag, attribute, value) {
	  var S = String(defined(string)),
	      p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	
	__webpack_require__(145)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	
	__webpack_require__(145)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	
	__webpack_require__(145)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	
	__webpack_require__(145)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	
	__webpack_require__(145)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	
	__webpack_require__(145)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	
	__webpack_require__(145)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	
	__webpack_require__(145)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	
	__webpack_require__(145)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	
	__webpack_require__(145)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	
	__webpack_require__(145)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	
	__webpack_require__(145)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Date', { now: function now() {
	    return new Date().getTime();
	  } });

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toObject = __webpack_require__(63),
	    toPrimitive = __webpack_require__(21);
	
	$export($export.P + $export.F * __webpack_require__(12)(function () {
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function toISOString() {
	      return 1;
	    } }) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key) {
	    var O = toObject(this),
	        pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	
	var $export = __webpack_require__(13),
	    fails = __webpack_require__(12),
	    getTime = Date.prototype.getTime;
	
	var lz = function lz(num) {
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function () {
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString() {
	    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	    var d = this,
	        y = d.getUTCFullYear(),
	        m = d.getUTCMilliseconds(),
	        s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var DateProto = Date.prototype,
	    INVALID_DATE = 'Invalid Date',
	    TO_STRING = 'toString',
	    $toString = DateProto[TO_STRING],
	    getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(23)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TO_PRIMITIVE = __webpack_require__(30)('toPrimitive'),
	    proto = Date.prototype;
	
	if (!(TO_PRIMITIVE in proto)) __webpack_require__(15)(proto, TO_PRIMITIVE, __webpack_require__(163));

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(17),
	    toPrimitive = __webpack_require__(21),
	    NUMBER = 'number';
	
	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Array', { isArray: __webpack_require__(50) });

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(25),
	    $export = __webpack_require__(13),
	    toObject = __webpack_require__(63),
	    call = __webpack_require__(166),
	    isArrayIter = __webpack_require__(167),
	    toLength = __webpack_require__(42),
	    createProperty = __webpack_require__(168),
	    getIterFn = __webpack_require__(169);
	
	$export($export.S + $export.F * !__webpack_require__(170)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(17);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(134),
	    ITERATOR = __webpack_require__(30)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $defineProperty = __webpack_require__(16),
	    createDesc = __webpack_require__(22);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(80),
	    ITERATOR = __webpack_require__(30)('iterator'),
	    Iterators = __webpack_require__(134);
	module.exports = __webpack_require__(14).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(30)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    createProperty = __webpack_require__(168);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(12)(function () {
	  function F() {}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of() /* ...args */{
	    var index = 0,
	        aLen = arguments.length,
	        result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) {
	      createProperty(result, index, arguments[index++]);
	    }result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	
	var $export = __webpack_require__(13),
	    toIObject = __webpack_require__(37),
	    arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(38) != Object || !__webpack_require__(173)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fails = __webpack_require__(12);
	
	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    arg ? method.call(null, function () {}, 1) : method.call(null);
	  });
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    html = __webpack_require__(53),
	    cof = __webpack_require__(39),
	    toIndex = __webpack_require__(44),
	    toLength = __webpack_require__(42),
	    arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(12)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length),
	        klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toIndex(begin, len),
	        upTo = toIndex(end, len),
	        size = toLength(upTo - start),
	        cloned = Array(size),
	        i = 0;
	    for (; i < size; i++) {
	      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
	    }return cloned;
	  }
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    aFunction = __webpack_require__(26),
	    toObject = __webpack_require__(63),
	    fails = __webpack_require__(12),
	    $sort = [].sort,
	    test = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(173)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $forEach = __webpack_require__(177)(0),
	    STRICT = __webpack_require__(173)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(25),
	    IObject = __webpack_require__(38),
	    toObject = __webpack_require__(63),
	    toLength = __webpack_require__(42),
	    asc = __webpack_require__(178);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1,
	      IS_FILTER = TYPE == 2,
	      IS_SOME = TYPE == 3,
	      IS_EVERY = TYPE == 4,
	      IS_FIND_INDEX = TYPE == 6,
	      NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
	      create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this),
	        self = IObject(O),
	        f = ctx(callbackfn, that, 3),
	        length = toLength(self.length),
	        index = 0,
	        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
	        val,
	        res;
	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (TYPE) {
	          if (IS_MAP) result[index] = res; // map
	          else if (res) switch (TYPE) {
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return index; // findIndex
	              case 2:
	                result.push(val); // filter
	            } else if (IS_EVERY) return false; // every
	        }
	      }
	    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(179);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18),
	    isArray = __webpack_require__(50),
	    SPECIES = __webpack_require__(30)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  }return C === undefined ? Array : C;
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $map = __webpack_require__(177)(1);
	
	$export($export.P + $export.F * !__webpack_require__(173)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $filter = __webpack_require__(177)(2);
	
	$export($export.P + $export.F * !__webpack_require__(173)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $some = __webpack_require__(177)(3);
	
	$export($export.P + $export.F * !__webpack_require__(173)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $every = __webpack_require__(177)(4);
	
	$export($export.P + $export.F * !__webpack_require__(173)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $reduce = __webpack_require__(185);
	
	$export($export.P + $export.F * !__webpack_require__(173)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var aFunction = __webpack_require__(26),
	    toObject = __webpack_require__(63),
	    IObject = __webpack_require__(38),
	    toLength = __webpack_require__(42);
	
	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that),
	      self = IObject(O),
	      length = toLength(O.length),
	      index = isRight ? length - 1 : 0,
	      i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (; isRight ? index >= 0 : length > index; index += i) {
	    if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	  }return memo;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $reduce = __webpack_require__(185);
	
	$export($export.P + $export.F * !__webpack_require__(173)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $indexOf = __webpack_require__(41)(false),
	    $native = [].indexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(173)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	    // convert -0 to +0
	    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toIObject = __webpack_require__(37),
	    toInteger = __webpack_require__(43),
	    toLength = __webpack_require__(42),
	    $native = [].lastIndexOf,
	    NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(173)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this),
	        length = toLength(O.length),
	        index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (; index >= 0; index--) {
	      if (index in O) if (O[index] === searchElement) return index || 0;
	    }return -1;
	  }
	});

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(13);
	
	$export($export.P, 'Array', { copyWithin: __webpack_require__(190) });
	
	__webpack_require__(191)('copyWithin');

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(63),
	    toIndex = __webpack_require__(44),
	    toLength = __webpack_require__(42);
	
	module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
	  var O = toObject(this),
	      len = toLength(O.length),
	      to = toIndex(target, len),
	      from = toIndex(start, len),
	      end = arguments.length > 2 ? arguments[2] : undefined,
	      count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
	      inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else delete O[to];
	    to += inc;
	    from += inc;
	  }return O;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(30)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(15)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(13);
	
	$export($export.P, 'Array', { fill: __webpack_require__(193) });
	
	__webpack_require__(191)('fill');

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	
	var toObject = __webpack_require__(63),
	    toIndex = __webpack_require__(44),
	    toLength = __webpack_require__(42);
	module.exports = function fill(value /*, start = 0, end = @length */) {
	  var O = toObject(this),
	      length = toLength(O.length),
	      aLen = arguments.length,
	      index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
	      end = aLen > 2 ? arguments[2] : undefined,
	      endPos = end === undefined ? length : toIndex(end, length);
	  while (endPos > index) {
	    O[index++] = value;
	  }return O;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(13),
	    $find = __webpack_require__(177)(5),
	    KEY = 'find',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(191)(KEY);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	
	var $export = __webpack_require__(13),
	    $find = __webpack_require__(177)(6),
	    KEY = 'findIndex',
	    forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () {
	  forced = false;
	});
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /*, that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(191)(KEY);

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(197)('Array');

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    dP = __webpack_require__(16),
	    DESCRIPTORS = __webpack_require__(11),
	    SPECIES = __webpack_require__(30)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(191),
	    step = __webpack_require__(199),
	    Iterators = __webpack_require__(134),
	    toIObject = __webpack_require__(37);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(133)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 199 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    inheritIfRequired = __webpack_require__(93),
	    dP = __webpack_require__(16).f,
	    gOPN = __webpack_require__(55).f,
	    isRegExp = __webpack_require__(139),
	    $flags = __webpack_require__(201),
	    $RegExp = global.RegExp,
	    Base = $RegExp,
	    proto = $RegExp.prototype,
	    re1 = /a/g,
	    re2 = /a/g
	// "new" creates a new object, old webkit buggy here
	,
	    CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if (__webpack_require__(11) && (!CORRECT_NEW || __webpack_require__(12)(function () {
	  re2[__webpack_require__(30)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp,
	        piRE = isRegExp(p),
	        fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function proxy(key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function get() {
	        return Base[key];
	      },
	      set: function set(it) {
	        Base[key] = it;
	      }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
	    proxy(keys[i++]);
	  }proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(23)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(197)('RegExp');

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	
	var anObject = __webpack_require__(17);
	module.exports = function () {
	  var that = anObject(this),
	      result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(203);
	var anObject = __webpack_require__(17),
	    $flags = __webpack_require__(201),
	    DESCRIPTORS = __webpack_require__(11),
	    TO_STRING = 'toString',
	    $toString = /./[TO_STRING];
	
	var define = function define(fn) {
	  __webpack_require__(23)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(12)(function () {
	  return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
	})) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	  // FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(11) && /./g.flags != 'g') __webpack_require__(16).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(201)
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@match logic
	__webpack_require__(205)('match', 1, function (defined, MATCH, $match) {
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(15),
	    redefine = __webpack_require__(23),
	    fails = __webpack_require__(12),
	    defined = __webpack_require__(40),
	    wks = __webpack_require__(30);
	
	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY),
	      fns = exec(defined, SYMBOL, ''[KEY]),
	      strfn = fns[0],
	      rxfn = fns[1];
	  if (fails(function () {
	    var O = {};
	    O[SYMBOL] = function () {
	      return 7;
	    };
	    return ''[KEY](O) != 7;
	  })) {
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function (string, arg) {
	      return rxfn.call(string, this, arg);
	    }
	    // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function (string) {
	      return rxfn.call(string, this);
	    });
	  }
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@replace logic
	__webpack_require__(205)('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    'use strict';
	
	    var O = defined(this),
	        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@search logic
	__webpack_require__(205)('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    'use strict';
	
	    var O = defined(this),
	        fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// @@split logic
	__webpack_require__(205)('split', 2, function (defined, SPLIT, $split) {
	  'use strict';
	
	  var isRegExp = __webpack_require__(139),
	      _split = $split,
	      $push = [].push,
	      $SPLIT = 'split',
	      LENGTH = 'length',
	      LAST_INDEX = 'lastIndex';
	  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function $split(separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) {
	              if (arguments[i] === undefined) match[i] = undefined;
	            }
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	    // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function $split(separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this),
	        fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(33),
	    global = __webpack_require__(9),
	    ctx = __webpack_require__(25),
	    classof = __webpack_require__(80),
	    $export = __webpack_require__(13),
	    isObject = __webpack_require__(18),
	    aFunction = __webpack_require__(26),
	    anInstance = __webpack_require__(210),
	    forOf = __webpack_require__(211),
	    speciesConstructor = __webpack_require__(212),
	    task = __webpack_require__(213).set,
	    microtask = __webpack_require__(214)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(30)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(215)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(29)($Promise, PROMISE);
	__webpack_require__(197)(PROMISE);
	Wrapper = __webpack_require__(14)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(170)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(25),
	    call = __webpack_require__(166),
	    isArrayIter = __webpack_require__(167),
	    anObject = __webpack_require__(17),
	    toLength = __webpack_require__(42),
	    getIterFn = __webpack_require__(169),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(17),
	    aFunction = __webpack_require__(26),
	    SPECIES = __webpack_require__(30)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(25),
	    invoke = __webpack_require__(83),
	    html = __webpack_require__(53),
	    cel = __webpack_require__(20),
	    global = __webpack_require__(9),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(39)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    macrotask = __webpack_require__(213).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(39)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(23);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(217);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(218)('Map', function (get) {
	  return function Map() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(16).f,
	    create = __webpack_require__(51),
	    redefineAll = __webpack_require__(215),
	    ctx = __webpack_require__(25),
	    anInstance = __webpack_require__(210),
	    defined = __webpack_require__(40),
	    forOf = __webpack_require__(211),
	    $iterDefine = __webpack_require__(133),
	    step = __webpack_require__(199),
	    setSpecies = __webpack_require__(197),
	    DESCRIPTORS = __webpack_require__(11),
	    fastKey = __webpack_require__(27).fastKey,
	    SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function getEntry(that, key) {
	  // fast case
	  var index = fastKey(key),
	      entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
	            entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) {
	            entry = entry.p;
	          }
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function get() {
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var entry = getEntry(that, key),
	        prev,
	        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key, // <- key
	        v: value, // <- value
	        p: prev = that._l, // <- previous entry
	        n: undefined, // <- next entry
	        r: false // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    }return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = iterated; // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function () {
	      var that = this,
	          kind = that._k,
	          entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) {
	        entry = entry.p;
	      } // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    $export = __webpack_require__(13),
	    redefine = __webpack_require__(23),
	    redefineAll = __webpack_require__(215),
	    meta = __webpack_require__(27),
	    forOf = __webpack_require__(211),
	    anInstance = __webpack_require__(210),
	    isObject = __webpack_require__(18),
	    fails = __webpack_require__(12),
	    $iterDetect = __webpack_require__(170),
	    setToStringTag = __webpack_require__(29),
	    inheritIfRequired = __webpack_require__(93);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME],
	      C = Base,
	      ADDER = IS_MAP ? 'set' : 'add',
	      proto = C && C.prototype,
	      O = {};
	  var fixMethod = function fixMethod(KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY, KEY == 'delete' ? function (a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'has' ? function has(a) {
	      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'get' ? function get(a) {
	      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	    } : KEY == 'add' ? function add(a) {
	      fn.call(this, a === 0 ? 0 : a);return this;
	    } : function set(a, b) {
	      fn.call(this, a === 0 ? 0 : a, b);return this;
	    });
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C()
	    // early implementations not supports chaining
	    ,
	        HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    ,
	        THROWS_ON_PRIMITIVES = fails(function () {
	      instance.has(1);
	    })
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    ,
	        ACCEPT_ITERABLES = $iterDetect(function (iter) {
	      new C(iter);
	    }) // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    ,
	        BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C(),
	          index = 5;
	      while (index--) {
	        $instance[ADDER](index, index);
	      }return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(217);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(218)('Set', function (get) {
	  return function Set() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(177)(0),
	    redefine = __webpack_require__(23),
	    meta = __webpack_require__(27),
	    assign = __webpack_require__(74),
	    weak = __webpack_require__(221),
	    isObject = __webpack_require__(18),
	    getWeak = meta.getWeak,
	    isExtensible = Object.isExtensible,
	    uncaughtFrozenStore = weak.ufstore,
	    tmp = {},
	    InternalMap;
	
	var wrapper = function wrapper(get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(218)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype,
	        method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	      }return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefineAll = __webpack_require__(215),
	    getWeak = __webpack_require__(27).getWeak,
	    anObject = __webpack_require__(17),
	    isObject = __webpack_require__(18),
	    anInstance = __webpack_require__(210),
	    forOf = __webpack_require__(211),
	    createArrayMethod = __webpack_require__(177),
	    $has = __webpack_require__(10),
	    arrayFind = createArrayMethod(5),
	    arrayFindIndex = createArrayMethod(6),
	    id = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function UncaughtFrozenStore() {
	  this.a = [];
	};
	var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function get(key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function set(key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;else this.a.push([key, value]);
	  },
	  'delete': function _delete(key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._i = id++; // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function _delete(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var weak = __webpack_require__(221);
	
	// 23.4 WeakSet Objects
	__webpack_require__(218)('WeakSet', function (get) {
	  return function WeakSet() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $typed = __webpack_require__(224),
	    buffer = __webpack_require__(225),
	    anObject = __webpack_require__(17),
	    toIndex = __webpack_require__(44),
	    toLength = __webpack_require__(42),
	    isObject = __webpack_require__(18),
	    ArrayBuffer = __webpack_require__(9).ArrayBuffer,
	    speciesConstructor = __webpack_require__(212),
	    $ArrayBuffer = buffer.ArrayBuffer,
	    $DataView = buffer.DataView,
	    $isView = $typed.ABV && ArrayBuffer.isView,
	    $slice = $ArrayBuffer.prototype.slice,
	    VIEW = $typed.VIEW,
	    ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(12)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength,
	        first = toIndex(start, len),
	        final = toIndex(end === undefined ? len : end, len),
	        result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
	        viewS = new $DataView(this),
	        viewT = new $DataView(result),
	        index = 0;
	    while (first < final) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    }return result;
	  }
	});
	
	__webpack_require__(197)(ARRAY_BUFFER);

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    hide = __webpack_require__(15),
	    uid = __webpack_require__(24),
	    TYPED = uid('typed_array'),
	    VIEW = uid('view'),
	    ABV = !!(global.ArrayBuffer && global.DataView),
	    CONSTR = ABV,
	    i = 0,
	    l = 9,
	    Typed;
	
	var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');
	
	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    DESCRIPTORS = __webpack_require__(11),
	    LIBRARY = __webpack_require__(33),
	    $typed = __webpack_require__(224),
	    hide = __webpack_require__(15),
	    redefineAll = __webpack_require__(215),
	    fails = __webpack_require__(12),
	    anInstance = __webpack_require__(210),
	    toInteger = __webpack_require__(43),
	    toLength = __webpack_require__(42),
	    gOPN = __webpack_require__(55).f,
	    dP = __webpack_require__(16).f,
	    arrayFill = __webpack_require__(193),
	    setToStringTag = __webpack_require__(29),
	    ARRAY_BUFFER = 'ArrayBuffer',
	    DATA_VIEW = 'DataView',
	    PROTOTYPE = 'prototype',
	    WRONG_LENGTH = 'Wrong length!',
	    WRONG_INDEX = 'Wrong index!',
	    $ArrayBuffer = global[ARRAY_BUFFER],
	    $DataView = global[DATA_VIEW],
	    Math = global.Math,
	    RangeError = global.RangeError,
	    Infinity = global.Infinity,
	    BaseBuffer = $ArrayBuffer,
	    abs = Math.abs,
	    pow = Math.pow,
	    floor = Math.floor,
	    log = Math.log,
	    LN2 = Math.LN2,
	    BUFFER = 'buffer',
	    BYTE_LENGTH = 'byteLength',
	    BYTE_OFFSET = 'byteOffset',
	    $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
	    $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
	    $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function packIEEE754(value, mLen, nBytes) {
	  var buffer = Array(nBytes),
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
	      i = 0,
	      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
	      e,
	      m,
	      c;
	  value = abs(value);
	  if (value != value || value === Infinity) {
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {}
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {}
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = eLen - 7,
	      i = nBytes - 1,
	      s = buffer[i--],
	      e = s & 127,
	      m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {}
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {}
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  }return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function packI8(it) {
	  return [it & 0xff];
	};
	var packI16 = function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function packF64(it) {
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function packF32(it) {
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function get() {
	      return this[internal];
	    } });
	};
	
	var get = function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index,
	      intIndex = toInteger(numIndex);
	  if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b,
	      start = intIndex + view[$OFFSET],
	      pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) {
	    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	  }
	};
	
	var validateArrayBufferArguments = function validateArrayBufferArguments(that, length) {
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length,
	      byteLength = toLength(numberLength);
	  if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH],
	        offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	  }) || !fails(function () {
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2)),
	      $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13);
	$export($export.G + $export.W + $export.F * !__webpack_require__(224).ABV, {
	  DataView: __webpack_require__(225).DataView
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	if (__webpack_require__(11)) {
	  var LIBRARY = __webpack_require__(33),
	      global = __webpack_require__(9),
	      fails = __webpack_require__(12),
	      $export = __webpack_require__(13),
	      $typed = __webpack_require__(224),
	      $buffer = __webpack_require__(225),
	      ctx = __webpack_require__(25),
	      anInstance = __webpack_require__(210),
	      propertyDesc = __webpack_require__(22),
	      hide = __webpack_require__(15),
	      redefineAll = __webpack_require__(215),
	      toInteger = __webpack_require__(43),
	      toLength = __webpack_require__(42),
	      toIndex = __webpack_require__(44),
	      toPrimitive = __webpack_require__(21),
	      has = __webpack_require__(10),
	      same = __webpack_require__(76),
	      classof = __webpack_require__(80),
	      isObject = __webpack_require__(18),
	      toObject = __webpack_require__(63),
	      isArrayIter = __webpack_require__(167),
	      create = __webpack_require__(51),
	      getPrototypeOf = __webpack_require__(64),
	      gOPN = __webpack_require__(55).f,
	      getIterFn = __webpack_require__(169),
	      uid = __webpack_require__(24),
	      wks = __webpack_require__(30),
	      createArrayMethod = __webpack_require__(177),
	      createArrayIncludes = __webpack_require__(41),
	      speciesConstructor = __webpack_require__(212),
	      ArrayIterators = __webpack_require__(198),
	      Iterators = __webpack_require__(134),
	      $iterDetect = __webpack_require__(170),
	      setSpecies = __webpack_require__(197),
	      arrayFill = __webpack_require__(193),
	      arrayCopyWithin = __webpack_require__(190),
	      $DP = __webpack_require__(16),
	      $GOPD = __webpack_require__(56),
	      dP = $DP.f,
	      gOPD = $GOPD.f,
	      RangeError = global.RangeError,
	      TypeError = global.TypeError,
	      Uint8Array = global.Uint8Array,
	      ARRAY_BUFFER = 'ArrayBuffer',
	      SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
	      BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
	      PROTOTYPE = 'prototype',
	      ArrayProto = Array[PROTOTYPE],
	      $ArrayBuffer = $buffer.ArrayBuffer,
	      $DataView = $buffer.DataView,
	      arrayForEach = createArrayMethod(0),
	      arrayFilter = createArrayMethod(2),
	      arraySome = createArrayMethod(3),
	      arrayEvery = createArrayMethod(4),
	      arrayFind = createArrayMethod(5),
	      arrayFindIndex = createArrayMethod(6),
	      arrayIncludes = createArrayIncludes(true),
	      arrayIndexOf = createArrayIncludes(false),
	      arrayValues = ArrayIterators.values,
	      arrayKeys = ArrayIterators.keys,
	      arrayEntries = ArrayIterators.entries,
	      arrayLastIndexOf = ArrayProto.lastIndexOf,
	      arrayReduce = ArrayProto.reduce,
	      arrayReduceRight = ArrayProto.reduceRight,
	      arrayJoin = ArrayProto.join,
	      arraySort = ArrayProto.sort,
	      arraySlice = ArrayProto.slice,
	      arrayToString = ArrayProto.toString,
	      arrayToLocaleString = ArrayProto.toLocaleString,
	      ITERATOR = wks('iterator'),
	      TAG = wks('toStringTag'),
	      TYPED_CONSTRUCTOR = uid('typed_constructor'),
	      DEF_CONSTRUCTOR = uid('def_constructor'),
	      ALL_CONSTRUCTORS = $typed.CONSTR,
	      TYPED_ARRAY = $typed.TYPED,
	      VIEW = $typed.VIEW,
	      WRONG_LENGTH = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function () {
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function strictToLength(it, SAME) {
	    if (it === undefined) throw TypeError(WRONG_LENGTH);
	    var number = +it,
	        length = toLength(it);
	    if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function toOffset(it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function validate(it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function allocate(C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    }return new C(length);
	  };
	
	  var speciesFromList = function speciesFromList(O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function fromList(C, list) {
	    var index = 0,
	        length = list.length,
	        result = allocate(C, length);
	    while (length > index) {
	      result[index] = list[index++];
	    }return result;
	  };
	
	  var addGetter = function addGetter(it, key, internal) {
	    dP(it, key, { get: function get() {
	        return this._d[internal];
	      } });
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */) {
	    var O = toObject(source),
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        iterFn = getIterFn(O),
	        i,
	        length,
	        values,
	        result,
	        step,
	        iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      }O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of() /*...items*/{
	    var index = 0,
	        length = arguments.length,
	        result = allocate(this, length);
	    while (length > index) {
	      result[index] = arguments[index++];
	    }return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
	    arrayToLocaleString.call(new Uint8Array(1));
	  });
	
	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */) {
	      // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) {
	      // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
	      // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */) {
	      // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this,
	          length = validate(that).length,
	          middle = Math.floor(length / 2),
	          index = 0,
	          value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      }return that;
	    },
	    some: function some(callbackfn /*, thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this),
	          length = O.length,
	          $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
	    }
	  };
	
	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1),
	        length = this.length,
	        src = toObject(arrayLike),
	        len = toLength(src.length),
	        index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) {
	      this[offset + index] = src[index++];
	    }
	  };
	
	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function isTAIndex(target, key) {
	    return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
	    // TODO: add validation descriptor w/o calling accessors
	    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });
	
	  if (fails(function () {
	    arrayToString.call({});
	  })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function constructor() {/* noop */},
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function get() {
	      return this[TYPED_ARRAY];
	    }
	  });
	
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
	        ISNT_UINT8 = NAME != 'Uint8Array',
	        GETTER = 'get' + KEY,
	        SETTER = 'set' + KEY,
	        TypedArray = global[NAME],
	        Base = TypedArray || {},
	        TAC = TypedArray && getPrototypeOf(TypedArray),
	        FORCED = !TypedArray || !$typed.ABV,
	        O = {},
	        TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function getter(that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function setter(that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function addElement(that, index) {
	      dP(that, index, {
	        get: function get() {
	          return getter(this, index);
	        },
	        set: function set(value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0,
	            offset = 0,
	            buffer,
	            byteLength,
	            length,
	            klass;
	        if (!isObject(data)) {
	          length = strictToLength(data, true);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) {
	          addElement(that, index++);
	        }
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!$iterDetect(function (iter) {
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR],
	        CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
	        $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function get() {
	          return NAME;
	        }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });
	
	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });
	
	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () {/* empty */};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(228)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(13),
	    aFunction = __webpack_require__(26),
	    anObject = __webpack_require__(17),
	    rApply = (__webpack_require__(9).Reflect || {}).apply,
	    fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(12)(function () {
	  rApply(function () {});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target),
	        L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(13),
	    create = __webpack_require__(51),
	    aFunction = __webpack_require__(26),
	    anObject = __webpack_require__(17),
	    isObject = __webpack_require__(18),
	    fails = __webpack_require__(12),
	    bind = __webpack_require__(82),
	    rConstruct = (__webpack_require__(9).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() {}
	  return !(rConstruct(function () {}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () {});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();
	        case 1:
	          return new Target(args[0]);
	        case 2:
	          return new Target(args[0], args[1]);
	        case 3:
	          return new Target(args[0], args[1], args[2]);
	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype,
	        instance = create(isObject(proto) ? proto : Object.prototype),
	        result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(16),
	    $export = __webpack_require__(13),
	    anObject = __webpack_require__(17),
	    toPrimitive = __webpack_require__(21);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(12)(function () {
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(13),
	    gOPD = __webpack_require__(56).f,
	    anObject = __webpack_require__(17);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	
	var $export = __webpack_require__(13),
	    anObject = __webpack_require__(17);
	var Enumerate = function Enumerate(iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0; // next index
	  var keys = this._k = [] // keys
	  ,
	      key;
	  for (key in iterated) {
	    keys.push(key);
	  }
	};
	__webpack_require__(135)(Enumerate, 'Object', function () {
	  var that = this,
	      keys = that._k,
	      key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(56),
	    getPrototypeOf = __webpack_require__(64),
	    has = __webpack_require__(10),
	    $export = __webpack_require__(13),
	    isObject = __webpack_require__(18),
	    anObject = __webpack_require__(17);
	
	function get(target, propertyKey /*, receiver*/) {
	  var receiver = arguments.length < 3 ? target : arguments[2],
	      desc,
	      proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', { get: get });

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(56),
	    $export = __webpack_require__(13),
	    anObject = __webpack_require__(17);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(13),
	    getProto = __webpack_require__(64),
	    anObject = __webpack_require__(17);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(13),
	    anObject = __webpack_require__(17),
	    $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(248) });

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(55),
	    gOPS = __webpack_require__(48),
	    anObject = __webpack_require__(17),
	    Reflect = __webpack_require__(9).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it)),
	      getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(13),
	    anObject = __webpack_require__(17),
	    $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(16),
	    gOPD = __webpack_require__(56),
	    getPrototypeOf = __webpack_require__(64),
	    has = __webpack_require__(10),
	    $export = __webpack_require__(13),
	    createDesc = __webpack_require__(22),
	    anObject = __webpack_require__(17),
	    isObject = __webpack_require__(18);
	
	function set(target, propertyKey, V /*, receiver*/) {
	  var receiver = arguments.length < 4 ? target : arguments[3],
	      ownDesc = gOPD.f(anObject(target), propertyKey),
	      existingDescriptor,
	      proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', { set: set });

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(13),
	    setProto = __webpack_require__(78);
	
	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	
	var $export = __webpack_require__(13),
	    $includes = __webpack_require__(41)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(191)('includes');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	
	var $export = __webpack_require__(13),
	    $at = __webpack_require__(132)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(13),
	    $pad = __webpack_require__(255);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(42),
	    repeat = __webpack_require__(96),
	    defined = __webpack_require__(40);
	
	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that)),
	      stringLength = S.length,
	      fillStr = fillString === undefined ? ' ' : String(fillString),
	      intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength,
	      stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	
	var $export = __webpack_require__(13),
	    $pad = __webpack_require__(255);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(88)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	
	__webpack_require__(88)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	
	var $export = __webpack_require__(13),
	    defined = __webpack_require__(40),
	    toLength = __webpack_require__(42),
	    isRegExp = __webpack_require__(139),
	    getFlags = __webpack_require__(201),
	    RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(135)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this),
	        flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
	        rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(32)('asyncIterator');

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(32)('observable');

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(13),
	    ownKeys = __webpack_require__(248),
	    toIObject = __webpack_require__(37),
	    gOPD = __webpack_require__(56),
	    createProperty = __webpack_require__(168);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object),
	        getDesc = gOPD.f,
	        keys = ownKeys(O),
	        result = {},
	        i = 0,
	        key;
	    while (keys.length > i) {
	      createProperty(result, key = keys[i++], getDesc(O, key));
	    }return result;
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(13),
	    $values = __webpack_require__(264)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(35),
	    toIObject = __webpack_require__(37),
	    isEnum = __webpack_require__(49).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it),
	        keys = getKeys(O),
	        length = keys.length,
	        i = 0,
	        result = [],
	        key;
	    while (length > i) {
	      if (isEnum.call(O, key = keys[i++])) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }return result;
	  };
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(13),
	    $entries = __webpack_require__(264)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toObject = __webpack_require__(63),
	    aFunction = __webpack_require__(26),
	    $defineProperty = __webpack_require__(16);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(11) && $export($export.P + __webpack_require__(267), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(33) || !__webpack_require__(12)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function () {/* empty */});
	  delete __webpack_require__(9)[K];
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toObject = __webpack_require__(63),
	    aFunction = __webpack_require__(26),
	    $defineProperty = __webpack_require__(16);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(11) && $export($export.P + __webpack_require__(267), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toObject = __webpack_require__(63),
	    toPrimitive = __webpack_require__(21),
	    getPrototypeOf = __webpack_require__(64),
	    getOwnPropertyDescriptor = __webpack_require__(56).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(11) && $export($export.P + __webpack_require__(267), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    toObject = __webpack_require__(63),
	    toPrimitive = __webpack_require__(21),
	    getPrototypeOf = __webpack_require__(64),
	    getOwnPropertyDescriptor = __webpack_require__(56).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(11) && $export($export.P + __webpack_require__(267), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this),
	        K = toPrimitive(P, true),
	        D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(13);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(272)('Map') });

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(80),
	    from = __webpack_require__(273);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var forOf = __webpack_require__(211);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(13);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(272)('Set') });

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(13);
	
	$export($export.S, 'System', { global: __webpack_require__(9) });

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(13),
	    cof = __webpack_require__(39);
	
	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0,
	        $x1 = x1 >>> 0,
	        $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >> 16,
	        v1 = $v >> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(13);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff,
	        $u = +u,
	        $v = +v,
	        u0 = $u & UINT16,
	        v0 = $v & UINT16,
	        u1 = $u >>> 16,
	        v1 = $v >>> 16,
	        t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	  } });

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var Map = __webpack_require__(216),
	    $export = __webpack_require__(13),
	    shared = __webpack_require__(28)('metadata'),
	    store = shared.store || (shared.store = new (__webpack_require__(220))());
	
	var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  }return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
	      keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) {
	    keys.push(key);
	  });
	  return keys;
	};
	var toMetaKey = function toMetaKey(it) {
	  return it === undefined || (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : String(it);
	};
	var exp = function exp(O) {
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    toMetaKey = metadata.key,
	    getOrCreateMetadataMap = metadata.map,
	    store = metadata.store;
	
	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
	    var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
	        metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	    if (metadataMap.size) return true;
	    var targetMetadata = store.get(target);
	    targetMetadata['delete'](targetKey);
	    return !!targetMetadata.size || store['delete'](target);
	  } });

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    getPrototypeOf = __webpack_require__(64),
	    ordinaryHasOwnMetadata = metadata.has,
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(219),
	    from = __webpack_require__(273),
	    metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    getPrototypeOf = __webpack_require__(64),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P),
	      parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
	    return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    ordinaryGetOwnMetadata = metadata.get,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    ordinaryOwnMetadataKeys = metadata.keys,
	    toMetaKey = metadata.key;
	
	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
	    return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	  } });

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    getPrototypeOf = __webpack_require__(64),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    ordinaryHasOwnMetadata = metadata.has,
	    toMetaKey = metadata.key;
	
	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
	    return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	  } });

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var metadata = __webpack_require__(282),
	    anObject = __webpack_require__(17),
	    aFunction = __webpack_require__(26),
	    toMetaKey = metadata.key,
	    ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	    return function decorator(target, targetKey) {
	      ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
	    };
	  } });

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(13),
	    microtask = __webpack_require__(214)(),
	    process = __webpack_require__(9).process,
	    isNode = __webpack_require__(39)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	
	var $export = __webpack_require__(13),
	    global = __webpack_require__(9),
	    core = __webpack_require__(14),
	    microtask = __webpack_require__(214)(),
	    OBSERVABLE = __webpack_require__(30)('observable'),
	    aFunction = __webpack_require__(26),
	    anObject = __webpack_require__(17),
	    anInstance = __webpack_require__(210),
	    redefineAll = __webpack_require__(215),
	    hide = __webpack_require__(15),
	    forOf = __webpack_require__(211),
	    RETURN = forOf.RETURN;
	
	var getMethod = function getMethod(fn) {
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function cleanupSubscription(subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function subscriptionClosed(subscription) {
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function closeSubscription(subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function Subscription(observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer),
	        subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
	        subscription.unsubscribe();
	      };else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  }if (subscriptionClosed(this)) cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() {
	    closeSubscription(this);
	  }
	});
	
	var SubscriptionObserver = function SubscriptionObserver(subscription) {
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    }cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function next(value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = Array(l); i < l;) {
	      items[i] = arguments[i++];
	    }return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var i = 0; i < items.length; ++i) {
	            observer.next(items[i]);
	            if (done) return;
	          }observer.complete();
	        }
	      });
	      return function () {
	        done = true;
	      };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function () {
	  return this;
	});
	
	$export($export.G, { Observable: $Observable });
	
	__webpack_require__(197)('Observable');

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(9),
	    $export = __webpack_require__(13),
	    invoke = __webpack_require__(83),
	    partial = __webpack_require__(294),
	    navigator = global.navigator,
	    MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function wrap(set) {
	  return MSIE ? function (fn, time /*, ...args */) {
	    return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(295),
	    invoke = __webpack_require__(83),
	    aFunction = __webpack_require__(26);
	module.exports = function () /* ...pargs */{
	  var fn = aFunction(this),
	      length = arguments.length,
	      pargs = Array(length),
	      i = 0,
	      _ = path._,
	      holder = false;
	  while (length > i) {
	    if ((pargs[i] = arguments[i++]) === _) holder = true;
	  }return function () /* ...args */{
	    var that = this,
	        aLen = arguments.length,
	        j = 0,
	        k = 0,
	        args;
	    if (!holder && !aLen) return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if (holder) for (; length > j; j++) {
	      if (args[j] === _) args[j] = arguments[k++];
	    }while (aLen > k) {
	      args.push(arguments[k++]);
	    }return invoke(fn, args, that);
	  };
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(9);

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(13),
	    $task = __webpack_require__(213);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(198),
	    redefine = __webpack_require__(23),
	    global = __webpack_require__(9),
	    hide = __webpack_require__(15),
	    Iterators = __webpack_require__(134),
	    wks = __webpack_require__(30),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(299)(module), __webpack_require__(300)))

/***/ },
/* 299 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 300 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout.call(null, timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout.call(null, drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(302);
	module.exports = __webpack_require__(14).RegExp.escape;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(13),
	    $re = __webpack_require__(303)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', { escape: function escape(it) {
	    return $re(it);
	  } });

/***/ },
/* 303 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 304 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 305 */
/***/ function(module, exports) {

	'use strict';
	
	+!~-function (w, d, undefined) {
	
	  var pages = []; /* array of page objects */
	
	  var book = d.getElementById('book').children;
	
	  // pages.push(book.length);
	
	  // console.log(book);
	
	  module.exports = pages;
	}(window, document);

/***/ },
/* 306 */
/***/ function(module, exports) {

	'use strict';
	
	+!~-function (w, d, undefined) {
	
	    module.exports = graph;
	
	    var graph = {};
	
	    //  1.
	    w.addEventListener('resize', getDimensions);
	    w.onload = getDimensions;
	
	    function getDimensions() {
	
	        var book = {};
	
	        book.bounds = d.getElementById('plotter').getBoundingClientRect(); // http://caniuse.com/#feat=getboundingclientrect
	
	        d.getElementById("pwidth").textContent = book.bounds.width;
	        d.getElementById("pheight").textContent = book.bounds.height;
	        d.getElementById("ptop").textContent = book.bounds.top;
	        d.getElementById("pleft").textContent = book.bounds.left;
	        d.getElementById("pright").textContent = book.bounds.right;
	        d.getElementById("pbottom").textContent = book.bounds.bottom;
	
	        // origin = d.getElementById('origin').getBoundingClientRect();
	
	        var origin = {};
	
	        origin.bounds = d.getElementsByTagName('body')[0].getBoundingClientRect();
	
	        d.getElementById("originX").textContent = parseInt(origin.bounds.width) / 2;
	        d.getElementById("originY").textContent = parseInt(origin.bounds.height) / 2;
	    }
	
	    // 2.
	    d.getElementById('plotter').onmousemove = handleMouseMove;
	
	    function handleMouseMove(e) {
	        var eventDoc, doc, body, pageX, pageY;
	
	        e = e || w.e;
	
	        if (e.pageX === null && e.clientX !== null) {
	
	            eventDoc = e.target && e.target.ownerDocument || document;
	
	            doc = eventDoc.documentElement;
	
	            body = eventDoc.body;
	
	            e.pageX = e.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	            e.pageY = e.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	        }
	
	        d.getElementById("xaxis").textContent = e.pageX;
	        d.getElementById("yaxis").textContent = e.pageY;
	    }
	
	    // 3.
	
	    // (function() {
	    //     var elem = d.getElementById('plotter');
	
	    //     function updateLog(x, y) {
	    //         console.log('X: ' + x + '; Y: ' + y);
	    //     }
	
	    //     d.addEventListener('touchstart', function(e) {
	    //         updateLog(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
	    //     }, false);
	
	    //     d.addEventListener('touchmove', function(e) {
	    //         e.preventDefault();
	    //         updateLog(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	    //     }, false);
	    // })(d);
	
	}(window, document);

/***/ },
/* 307 */
/***/ function(module, exports) {

	"use strict";
	
	+!~-function (w, d, undefined) {
	
	    // 'use strong';
	
	    // // module.exports = mode;
	
	    // let mode = {};
	
	    // 1.
	    // w.addEventListener('resize', getMode);
	    // w.onload = getMode;
	
	
	    // const mq = (query, cb, usePolyfill) => {
	    //     const host = {};
	    //     const isMatchMediaSupported = !!(w && w.matchMedia) && !usePolyfill;
	
	    //     if (isMatchMediaSupported) {
	    //         const res = w.matchMedia(query);
	
	    //         cb.apply(host, [res.matches, res.media]);
	
	    //         res.addListener(changed => {
	    //             cb.apply(host, [changed.matches, changed.media]);
	    //         });
	    //     } else {
	    //         // ... polyfill
	    //     }
	    // };
	
	    // mq('all and (min-width: 870px)', function(match) {
	    //     mode = match ? 'double' : 'single';
	    //     console.log(mode); 
	    // });
	
	
	    // module.exports = {
	
	    //     mode(w) {
	    //         return mode;
	    //     }
	
	    // };
	
	}(window, document);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmM3ZmQzZjViM2Y5MjAwZTI2ZjMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3M/ODFlZiIsIndlYnBhY2s6Ly8vLi9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9zaGltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19iaW5kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtbnVtYmVyLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIudG8tcHJlY2lzaW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWxvZzFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21hdGgtc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jbHozMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWV4cG0xLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy1pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYW5jaG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJpZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuYm9sZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udGNvbG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZm9udHNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLm5vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWlzby1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGF0ZS10by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubGFzdC1pbmRleC1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWNvcHktd2l0aGluLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZml4LXJlLXdrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmFycmF5LWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3R5cGVkLWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctcGFkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWVuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5tYXRjaC1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLWdldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWZvcmNlZC1wYW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QubG9va3VwLWdldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0Lmxvb2t1cC1zZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zeXN0ZW0uZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pYWRkaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pc3ViaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pbXVsaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC51bXVsaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1vd24tbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QubWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFzYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcGFydGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vcmVnZXhwL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3JlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFD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Q0EscUJBQVEsRUFBUjtBQUNBLHFCQUFRLEVBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFRLEdBQVI7QUFDQSxxQkFBUSxHQUFSO0FBQ0EscUJBQVEsR0FBUjtBQUNBLHFCQUFR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QUssVUFBdEMsSUFBb0QsQ0FEL0MsS0FFTCxPQUFPLElBQUksVUFBWCxJQUF5QixRQUFRLEtBQUssVUFBdEMsSUFBb0QsQ0FGL0MsQ0FBVjtBQUdBLGVBQUUsS0FBRixHQUFVLEVBQUUsT0FBRixJQUNMLE9BQU8sSUFBSSxTQUFYLElBQXdCLFFBQVEsS0FBSyxTQUFyQyxJQUFrRCxDQUQ3QyxLQUVMLE9BQU8sSUFBSSxTQUFYLElBQXdCLFFBQVEsS0FBSyxTQUFyQyxJQUFrRCxDQUY3QyxDQUFWO0FBR0g7O0FBRUQsV0FBRSxjQUFGLENBQWlCLE9BQWpCLEVBQTBCLFdBQTFCLEdBQXdDLEVBQUUsS0FBMUM7QUFDQSxXQUFFLGNBQUYsQ0FBaUIsT0FBakIsRUFBMEIsV0FBMUIsR0FBd0MsRUFBRSxLQUExQztBQUNIOztBQUdEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdILEVBckZHLENBcUZELE1BckZDLEVBcUZPLFFBckZQLENBQUosQzs7Ozs7Ozs7QUNBQSxFQUFDLENBQUMsQ0FBQyxDQUFFLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxTQUFQLEVBQXFCOztBQUV0Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUgsRUE5Q0csQ0E4Q0QsTUE5Q0MsRUE4Q08sUUE5Q1AsQ0FBSixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMmM3ZmQzZjViM2Y5MjAwZTI2ZjNcbiAqKi8iLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnO1xuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGlzVG91Y2ggZnJvbSAnLi9saWIvaXNUb3VjaC5qcyc7XG5cbmltcG9ydCBwYWdlcyBmcm9tICcuL2xpYi9wYWdlcy5qcyc7XG5cbmltcG9ydCBncmFwaCBmcm9tICcuL2xpYi9ncmFwaC5qcyc7XG5cbmltcG9ydCAnLi9saWIvbW9kZS5qcyc7XG5cblxuISstfigodywgZCwgdW5kZWZpbmVkKSA9PiB7XG5cbiAgbGV0IGJvb2sgPSB7fTtcblxuICAgIGNvbnN0IG1xID0gKHF1ZXJ5LCBjYiwgdXNlUG9seWZpbGwpID0+IHtcbiAgICAgICAgY29uc3QgaG9zdCA9IHt9O1xuICAgICAgICBjb25zdCBpc01hdGNoTWVkaWFTdXBwb3J0ZWQgPSAhISh3ICYmIHcubWF0Y2hNZWRpYSkgJiYgIXVzZVBvbHlmaWxsO1xuXG4gICAgICAgIGlmIChpc01hdGNoTWVkaWFTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHcubWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICAgICAgICAgIGNiLmFwcGx5KGhvc3QsIFtyZXMubWF0Y2hlcywgcmVzLm1lZGlhXSk7XG5cbiAgICAgICAgICAgIHJlcy5hZGRMaXN0ZW5lcihjaGFuZ2VkID0+IHtcbiAgICAgICAgICAgICAgICBjYi5hcHBseShob3N0LCBbY2hhbmdlZC5tYXRjaGVzLCBjaGFuZ2VkLm1lZGlhXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIC4uLiBwb2x5ZmlsbFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1xKCdhbGwgYW5kIChtaW4td2lkdGg6IDg3MHB4KScsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIGJvb2subW9kZSA9IG1hdGNoID8gJ2RvdWJsZScgOiAnc2luZ2xlJztcbiAgICAgICAgY29uc29sZS5sb2coYm9vay5tb2RlKTtcblxuICAgIH0pO1xuXG5cblxuXG5cblxufSkod2luZG93LCBkb2N1bWVudCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NjcmlwdC5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzISEuL3N0eWxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzISEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Nzcy9zdHlsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKjpiZWZvcmUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAvKiBjdXJzb3I6IG5vbmU7ICovICAgIFxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDsgICAgXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udmlld2VyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAtd2Via2l0LXBlcnNwZWN0aXZlOiAyMDBweDsgLyogQXBwbGllcyB1bmlmb3JtbHkgdG8gaXRzIGNoaWxkcmVuICovXFxuICAgIHBlcnNwZWN0aXZlOiAyMDBweDsgXFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlOyBcXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxufVxcblxcbiNib29rIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTsgLyogQ2FuIGVmZmVjdCBwaW5jaDJ6b29tICovXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyAvKiBHZXRzIGZhdXMgM0Qgc3BhY2UgZm9yIHBhZ2VzICovXFxufVxcblxcbi5wYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4ubGVmdCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDBcXG59XFxuXFxuLnByb21vdGVkIHtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcXG4gICAgYm9keSAudmlld2VyIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZoICogMTU0MC8oMTAwMCAqIDIpKTtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZ3ICogMTQ0My8xMTE0KTtcXG4gICAgfVxcbiAgICBib2R5IC5wYWdlIHtcXG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgICBib2R5IC5mbGlwcGVkIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKCAwZGVnICk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSggMGRlZyApO1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA4NzFweCkge1xcbiAgICBib2R5IC52aWV3ZXIge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdmggKiAxNTQwLzEwMDApO1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoNTB2dyAqIDE0NDMvMTExNCk7XFxuICAgIH1cXG4gICAgYm9keSAucGFnZSB7XFxuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuICAgIGJvZHkgLmZsaXBwZWQge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApO1xcbiAgICB9XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIEFycm93IGJ1dHRvbnMgZm9yIGRlc2t0b3BzICovXFxuXFxuLmFycm93LWNvbnRyb2xzIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBub25lO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC40KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLnByZXZpb3VzLXBhZ2Uge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDAgMCAtMzBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XFxufVxcblxcbi5uZXh0LXBhZ2Uge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbjogMCAtMzBweCAwIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcblxcbi5mbGV4IHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ub3NlbGVjdCB7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmFycm93LXRhcCB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5maXJzdC1wYWdlIC5wcmV2aW91cy1wYWdlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmxhc3QtcGFnZSAubmV4dC1wYWdlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmZpcnN0LXBhZ2UgLm5leHQtcGFnZSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBuZXh0LXBhZ2UgMXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIC1tb3otYW5pbWF0aW9uOiBuZXh0LXBhZ2UgMXM7XFxuICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIC1vLWFuaW1hdGlvbjogbmV4dC1wYWdlIDFzO1xcbiAgICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgLW8tYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIC1tcy1hbmltYXRpb246IG5leHQtcGFnZSAxcztcXG4gICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBuZXh0LXBhZ2UgMXM7XFxuICAgIGFuaW1hdGlvbjogbmV4dC1wYWdlIDFzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBuZXh0LXBhZ2Uge1xcbiAgICAwJSB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG5leHQtcGFnZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICB9XFxufVxcblxcbi5wYWdlIGlmcmFtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXI6IDBweCBub25lO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuLmdyYWJiYWJsZSB7XFxuICAgIGN1cnNvcjogbW92ZTsgLyogZmFsbGJhY2sgaWYgZ3JhYiBjdXJzb3IgaXMgdW5zdXBwb3J0ZWQgKi9cXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG59XFxuXFxuIC8qIChPcHRpb25hbCkgQXBwbHkgYSBcXFwiY2xvc2VkLWhhbmRcXFwiIGN1cnNvciBkdXJpbmcgZHJhZyBvcGVyYXRpb24uICovXFxuLmdyYWJiYWJsZTphY3RpdmUgeyBcXG4gICAgY3Vyc29yOiBncmFiYmluZztcXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbn1cXG5cXG5cXG4vKiBEZWxldGFibGUgKi9cXG5cXG4ucmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLnllbGxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLm9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDIwMCwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAyMDAsIDEpO1xcbn1cXG5cXG4ucGluayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi53aGVhdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4uZ3JheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbiNwbG90dGVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMjAwcHg7XFxuICAgIC8qIEFwcGxpZXMgdW5pZm9ybWx5IHRvIGl0cyBjaGlsZHJlbiAqL1xcbiAgICBwZXJzcGVjdGl2ZTogMjAwcHg7XFxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIGdyZXkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIGdyZXkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdyZXkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBncmV5IDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcXG59XFxuXFxuI2Nvb3JkaW5hdGVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSggMCwgMTkwLCAwLCAwLjMpO1xcbn1cXG5cXG4jeGF4aXMsICN5YXhpcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL34vcG9zdGNzcy1sb2FkZXIhLi9jc3Mvc3R5bGUuY3NzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9zaGltXCIpO1xuXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9mbi9yZWdleHAvZXNjYXBlXCIpO1xuXG4vKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG5pZiAoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIm9ubHkgb25lIGluc3RhbmNlIG9mIGJhYmVsLXBvbHlmaWxsIGlzIGFsbG93ZWRcIik7XG59XG5nbG9iYWwuX2JhYmVsUG9seWZpbGwgPSB0cnVlO1xuXG4vLyBTaG91bGQgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlOlxuXG52YXIgREVGSU5FX1BST1BFUlRZID0gXCJkZWZpbmVQcm9wZXJ0eVwiO1xuZnVuY3Rpb24gZGVmaW5lKE8sIGtleSwgdmFsdWUpIHtcbiAgT1trZXldIHx8IE9iamVjdFtERUZJTkVfUFJPUEVSVFldKE8sIGtleSwge1xuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5cbmRlZmluZShTdHJpbmcucHJvdG90eXBlLCBcInBhZExlZnRcIiwgXCJcIi5wYWRTdGFydCk7XG5kZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgXCJwYWRSaWdodFwiLCBcIlwiLnBhZEVuZCk7XG5cblwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcyxpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzLGpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsXCIuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBbXVtrZXldICYmIGRlZmluZShBcnJheSwga2V5LCBGdW5jdGlvbi5jYWxsLmJpbmQoW11ba2V5XSkpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL2xpYi9pbmRleC5qc1xuICoqLyIsInJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24uYmluZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5wYXJzZS1pbnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci50by1maXhlZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIudG8tcHJlY2lzaW9uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYWNvc2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hc2luaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY2JydCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNsejMyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY29zaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguaHlwb3QnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5pbXVsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cxcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5zaWduJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguc2luaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnRhbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC50cnVuYycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5yYXcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5hbmNob3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmJpZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuYmxpbmsnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mb250Y29sb3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pdGFsaWNzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5saW5rJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zbWFsbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RyaWtlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdWInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnN1cCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5kYXRlLm5vdycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5kYXRlLnRvLWpzb24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmRhdGUudG8tcHJpbWl0aXZlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkub2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuam9pbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5zbGljZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5zb3J0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZvci1lYWNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lm1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maWx0ZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc29tZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5ldmVyeScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5yZWR1Y2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmluZGV4LW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lmxhc3QtaW5kZXgtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmlsbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi53ZWFrLXNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQudWludDgtY2xhbXBlZC1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC5pbnQxNi1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi50eXBlZC51aW50MTYtYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuaW50MzItYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQudWludDMyLWFycmF5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0MzItYXJyYXknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmhhcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLmF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtc3RhcnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1lbmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1yaWdodCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcubWF0Y2gtYWxsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtZ2V0dGVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5kZWZpbmUtc2V0dGVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtZ2V0dGVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtc2V0dGVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN5c3RlbS5nbG9iYWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuZXJyb3IuaXMtZXJyb3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC5pYWRkaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXRoLmlzdWJoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hdGguaW11bGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWF0aC51bXVsaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlZmluZS1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmRlbGV0ZS1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1tZXRhZGF0YS1rZXlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW93bi1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1tZXRhZGF0YScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWZsZWN0Lmhhcy1vd24tbWV0YWRhdGEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVmbGVjdC5tZXRhZGF0YScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5hc2FwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9ic2VydmFibGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIudGltZXJzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmltbWVkaWF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9tb2R1bGVzL19jb3JlJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvc2hpbS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanNcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbiAqKi8iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qc1xuICoqLyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19rZXlvZi5qc1xuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbiAqKi8iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqLyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qc1xuICoqLyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qc1xuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuICoqLyIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbiAqKi8iLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjMgLyAxNS4yLjMuNyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0aWVzOiByZXF1aXJlKCcuL19vYmplY3QtZHBzJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanNcbiAqKi8iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqLyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuICoqLyIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqLyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuICoqLyIsIi8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5TmFtZXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JykuZjtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzXG4gKiovIiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBtZXRhICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgbWV0YSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykub25GcmVlemU7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzXG4gKiovIiwiLy8gMTkuMS4yLjE1IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBtZXRhICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uKCRwcmV2ZW50RXh0ZW5zaW9ucyl7XG4gIHJldHVybiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucyAmJiBpc09iamVjdChpdCkgPyAkcHJldmVudEV4dGVuc2lvbnMobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4gKiovIiwiLy8gMTkuMS4yLjEyIE9iamVjdC5pc0Zyb3plbihPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnaXNGcm96ZW4nLCBmdW5jdGlvbigkaXNGcm96ZW4pe1xuICByZXR1cm4gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNGcm96ZW4gPyAkaXNGcm96ZW4oaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qc1xuICoqLyIsIi8vIDE5LjEuMi4xMyBPYmplY3QuaXNTZWFsZWQoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2lzU2VhbGVkJywgZnVuY3Rpb24oJGlzU2VhbGVkKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzU2VhbGVkID8gJGlzU2VhbGVkKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTEgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24oJGlzRXh0ZW5zaWJsZSl7XG4gIHJldHVybiBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qc1xuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCIvLyAxOS4xLjMuMTAgT2JqZWN0LmlzKHZhbHVlMSwgdmFsdWUyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2lzOiByZXF1aXJlKCcuL19zYW1lLXZhbHVlJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanNcbiAqKi8iLCIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2FtZS12YWx1ZS5qc1xuICoqLyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiovIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiovIiwiLy8gMTkuMi4zLjIgLyAxNS4zLjQuNSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCh0aGlzQXJnLCBhcmdzLi4uKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdGdW5jdGlvbicsIHtiaW5kOiByZXF1aXJlKCcuL19iaW5kJyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5iaW5kLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpbnZva2UgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBhcnJheVNsaWNlID0gW10uc2xpY2VcbiAgLCBmYWN0b3JpZXMgID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbihGLCBsZW4sIGFyZ3Mpe1xuICBpZighKGxlbiBpbiBmYWN0b3JpZXMpKXtcbiAgICBmb3IodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBsZW47IGkrKyluW2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgZmFjdG9yaWVzW2xlbl0gPSBGdW5jdGlvbignRixhJywgJ3JldHVybiBuZXcgRignICsgbi5qb2luKCcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbbGVuXShGLCBhcmdzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyosIGFyZ3MuLi4gKi8pe1xuICB2YXIgZm4gICAgICAgPSBhRnVuY3Rpb24odGhpcylcbiAgICAsIHBhcnRBcmdzID0gYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBib3VuZCA9IGZ1bmN0aW9uKC8qIGFyZ3MuLi4gKi8pe1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xuICBpZihpc09iamVjdChmbi5wcm90b3R5cGUpKWJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19iaW5kLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBoYXMgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBGUHJvdG8gICAgID0gRnVuY3Rpb24ucHJvdG90eXBlXG4gICwgbmFtZVJFICAgICA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopL1xuICAsIE5BTUUgICAgICAgPSAnbmFtZSc7XG5cbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgICAsIG5hbWUgPSAoJycgKyB0aGF0KS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgaGFzKHRoYXQsIE5BTUUpIHx8ICFpc0V4dGVuc2libGUodGhhdCkgfHwgZFAodGhhdCwgTkFNRSwgY3JlYXRlRGVzYyg1LCBuYW1lKSk7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBIQVNfSU5TVEFOQ0UgICA9IHJlcXVpcmUoJy4vX3drcycpKCdoYXNJbnN0YW5jZScpXG4gICwgRnVuY3Rpb25Qcm90byAgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyAxOS4yLjMuNiBGdW5jdGlvbi5wcm90b3R5cGVbQEBoYXNJbnN0YW5jZV0oVilcbmlmKCEoSEFTX0lOU1RBTkNFIGluIEZ1bmN0aW9uUHJvdG8pKXJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7dmFsdWU6IGZ1bmN0aW9uKE8pe1xuICBpZih0eXBlb2YgdGhpcyAhPSAnZnVuY3Rpb24nIHx8ICFpc09iamVjdChPKSlyZXR1cm4gZmFsc2U7XG4gIGlmKCFpc09iamVjdCh0aGlzLnByb3RvdHlwZSkpcmV0dXJuIE8gaW5zdGFuY2VvZiB0aGlzO1xuICAvLyBmb3IgZW52aXJvbm1lbnQgdy9vIG5hdGl2ZSBgQEBoYXNJbnN0YW5jZWAgbG9naWMgZW5vdWdoIGBpbnN0YW5jZW9mYCwgYnV0IGFkZCB0aGlzOlxuICB3aGlsZShPID0gZ2V0UHJvdG90eXBlT2YoTykpaWYodGhpcy5wcm90b3R5cGUgPT09IE8pcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn19KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcGFyc2VJbnQgPSByZXF1aXJlKCcuL19wYXJzZS1pbnQnKTtcbi8vIDE4LjIuNSBwYXJzZUludChzdHJpbmcsIHJhZGl4KVxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VJbnQgIT0gJHBhcnNlSW50KSwge3BhcnNlSW50OiAkcGFyc2VJbnR9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wYXJzZS1pbnQuanNcbiAqKi8iLCJ2YXIgJHBhcnNlSW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykucGFyc2VJbnRcbiAgLCAkdHJpbSAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW1cbiAgLCB3cyAgICAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctd3MnKVxuICAsIGhleCAgICAgICA9IC9eW1xcLStdPzBbeFhdLztcblxubW9kdWxlLmV4cG9ydHMgPSAkcGFyc2VJbnQod3MgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod3MgKyAnMHgxNicpICE9PSAyMiA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0ciwgcmFkaXgpe1xuICB2YXIgc3RyaW5nID0gJHRyaW0oU3RyaW5nKHN0ciksIDMpO1xuICByZXR1cm4gJHBhcnNlSW50KHN0cmluZywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3Qoc3RyaW5nKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcGFyc2UtaW50LmpzXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNwYWNlcyAgPSByZXF1aXJlKCcuL19zdHJpbmctd3MnKVxuICAsIHNwYWNlICAgPSAnWycgKyBzcGFjZXMgKyAnXSdcbiAgLCBub24gICAgID0gJ1xcdTIwMGJcXHUwMDg1J1xuICAsIGx0cmltICAgPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJylcbiAgLCBydHJpbSAgID0gUmVnRXhwKHNwYWNlICsgc3BhY2UgKyAnKiQnKTtcblxudmFyIGV4cG9ydGVyID0gZnVuY3Rpb24oS0VZLCBleGVjLCBBTElBUyl7XG4gIHZhciBleHAgICA9IHt9O1xuICB2YXIgRk9SQ0UgPSBmYWlscyhmdW5jdGlvbigpe1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pO1xuICB2YXIgZm4gPSBleHBbS0VZXSA9IEZPUkNFID8gZXhlYyh0cmltKSA6IHNwYWNlc1tLRVldO1xuICBpZihBTElBUylleHBbQUxJQVNdID0gZm47XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0UsICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24oc3RyaW5nLCBUWVBFKXtcbiAgc3RyaW5nID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gIGlmKFRZUEUgJiAxKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmKFRZUEUgJiAyKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy10cmltLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy13cy5qc1xuICoqLyIsInZhciAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHBhcnNlRmxvYXQgPSByZXF1aXJlKCcuL19wYXJzZS1mbG9hdCcpO1xuLy8gMTguMi40IHBhcnNlRmxvYXQoc3RyaW5nKVxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkYgKiAocGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksIHtwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnBhcnNlLWZsb2F0LmpzXG4gKiovIiwidmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykucGFyc2VGbG9hdFxuICAsICR0cmltICAgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKS50cmltO1xuXG5tb2R1bGUuZXhwb3J0cyA9IDEgLyAkcGFyc2VGbG9hdChyZXF1aXJlKCcuL19zdHJpbmctd3MnKSArICctMCcpICE9PSAtSW5maW5pdHkgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cil7XG4gIHZhciBzdHJpbmcgPSAkdHJpbShTdHJpbmcoc3RyKSwgMylcbiAgICAsIHJlc3VsdCA9ICRwYXJzZUZsb2F0KHN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgc3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19wYXJzZS1mbG9hdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIGNvZiAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKVxuICAsIHRvUHJpbWl0aXZlICAgICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBmYWlscyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBnT1BOICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIGdPUEQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mXG4gICwgZFAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgJHRyaW0gICAgICAgICAgICAgPSByZXF1aXJlKCcuL19zdHJpbmctdHJpbScpLnRyaW1cbiAgLCBOVU1CRVIgICAgICAgICAgICA9ICdOdW1iZXInXG4gICwgJE51bWJlciAgICAgICAgICAgPSBnbG9iYWxbTlVNQkVSXVxuICAsIEJhc2UgICAgICAgICAgICAgID0gJE51bWJlclxuICAsIHByb3RvICAgICAgICAgICAgID0gJE51bWJlci5wcm90b3R5cGVcbiAgLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG4gICwgQlJPS0VOX0NPRiAgICAgICAgPSBjb2YocmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpKHByb3RvKSkgPT0gTlVNQkVSXG4gICwgVFJJTSAgICAgICAgICAgICAgPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbihhcmd1bWVudCl7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKXtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKVxuICAgICAgLCB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSl7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZih0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMClyZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmKGZpcnN0ID09PSA0OCl7XG4gICAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XG4gICAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdCA6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspe1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZihjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKXtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSl7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWVcbiAgICAgICwgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24oKXsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IEJhc2UodG9OdW1iZXIoaXQpKSwgdGhhdCwgJE51bWJlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvcih2YXIga2V5cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BOKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKyl7XG4gICAgaWYoaGFzKEJhc2UsIGtleSA9IGtleXNbal0pICYmICFoYXMoJE51bWJlciwga2V5KSl7XG4gICAgICBkUCgkTnVtYmVyLCBrZXksIGdPUEQoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9XG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgdGFyZ2V0LCBDKXtcbiAgdmFyIFAsIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIGlmKFMgIT09IEMgJiYgdHlwZW9mIFMgPT0gJ2Z1bmN0aW9uJyAmJiAoUCA9IFMucHJvdG90eXBlKSAhPT0gQy5wcm90b3R5cGUgJiYgaXNPYmplY3QoUCkgJiYgc2V0UHJvdG90eXBlT2Ype1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pbmhlcml0LWlmLXJlcXVpcmVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9JbnRlZ2VyICAgID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgYU51bWJlclZhbHVlID0gcmVxdWlyZSgnLi9fYS1udW1iZXItdmFsdWUnKVxuICAsIHJlcGVhdCAgICAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1yZXBlYXQnKVxuICAsICR0b0ZpeGVkICAgICA9IDEuLnRvRml4ZWRcbiAgLCBmbG9vciAgICAgICAgPSBNYXRoLmZsb29yXG4gICwgZGF0YSAgICAgICAgID0gWzAsIDAsIDAsIDAsIDAsIDBdXG4gICwgRVJST1IgICAgICAgID0gJ051bWJlci50b0ZpeGVkOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnXG4gICwgWkVSTyAgICAgICAgID0gJzAnO1xuXG52YXIgbXVsdGlwbHkgPSBmdW5jdGlvbihuLCBjKXtcbiAgdmFyIGkgID0gLTFcbiAgICAsIGMyID0gYztcbiAgd2hpbGUoKytpIDwgNil7XG4gICAgYzIgKz0gbiAqIGRhdGFbaV07XG4gICAgZGF0YVtpXSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xudmFyIGRpdmlkZSA9IGZ1bmN0aW9uKG4pe1xuICB2YXIgaSA9IDZcbiAgICAsIGMgPSAwO1xuICB3aGlsZSgtLWkgPj0gMCl7XG4gICAgYyArPSBkYXRhW2ldO1xuICAgIGRhdGFbaV0gPSBmbG9vcihjIC8gbik7XG4gICAgYyA9IChjICUgbikgKiAxZTc7XG4gIH1cbn07XG52YXIgbnVtVG9TdHJpbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgaSA9IDZcbiAgICAsIHMgPSAnJztcbiAgd2hpbGUoLS1pID49IDApe1xuICAgIGlmKHMgIT09ICcnIHx8IGkgPT09IDAgfHwgZGF0YVtpXSAhPT0gMCl7XG4gICAgICB2YXIgdCA9IFN0cmluZyhkYXRhW2ldKTtcbiAgICAgIHMgPSBzID09PSAnJyA/IHQgOiBzICsgcmVwZWF0LmNhbGwoWkVSTywgNyAtIHQubGVuZ3RoKSArIHQ7XG4gICAgfVxuICB9IHJldHVybiBzO1xufTtcbnZhciBwb3cgPSBmdW5jdGlvbih4LCBuLCBhY2Mpe1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xudmFyIGxvZyA9IGZ1bmN0aW9uKHgpe1xuICB2YXIgbiAgPSAwXG4gICAgLCB4MiA9IHg7XG4gIHdoaWxlKHgyID49IDQwOTYpe1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSh4MiA+PSAyKXtcbiAgICBuICArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICghISR0b0ZpeGVkICYmIChcbiAgMC4wMDAwOC50b0ZpeGVkKDMpICE9PSAnMC4wMDAnIHx8XG4gIDAuOS50b0ZpeGVkKDApICE9PSAnMScgfHxcbiAgMS4yNTUudG9GaXhlZCgyKSAhPT0gJzEuMjUnIHx8XG4gIDEwMDAwMDAwMDAwMDAwMDAxMjguLnRvRml4ZWQoMCkgIT09ICcxMDAwMDAwMDAwMDAwMDAwMTI4J1xuKSB8fCAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICAkdG9GaXhlZC5jYWxsKHt9KTtcbn0pKSwgJ051bWJlcicsIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cyl7XG4gICAgdmFyIHggPSBhTnVtYmVyVmFsdWUodGhpcywgRVJST1IpXG4gICAgICAsIGYgPSB0b0ludGVnZXIoZnJhY3Rpb25EaWdpdHMpXG4gICAgICAsIHMgPSAnJ1xuICAgICAgLCBtID0gWkVST1xuICAgICAgLCBlLCB6LCBqLCBrO1xuICAgIGlmKGYgPCAwIHx8IGYgPiAyMCl0aHJvdyBSYW5nZUVycm9yKEVSUk9SKTtcbiAgICBpZih4ICE9IHgpcmV0dXJuICdOYU4nO1xuICAgIGlmKHggPD0gLTFlMjEgfHwgeCA+PSAxZTIxKXJldHVybiBTdHJpbmcoeCk7XG4gICAgaWYoeCA8IDApe1xuICAgICAgcyA9ICctJztcbiAgICAgIHggPSAteDtcbiAgICB9XG4gICAgaWYoeCA+IDFlLTIxKXtcbiAgICAgIGUgPSBsb2coeCAqIHBvdygyLCA2OSwgMSkpIC0gNjk7XG4gICAgICB6ID0gZSA8IDAgPyB4ICogcG93KDIsIC1lLCAxKSA6IHggLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYoZSA+IDApe1xuICAgICAgICBtdWx0aXBseSgwLCB6KTtcbiAgICAgICAgaiA9IGY7XG4gICAgICAgIHdoaWxlKGogPj0gNyl7XG4gICAgICAgICAgbXVsdGlwbHkoMWU3LCAwKTtcbiAgICAgICAgICBqIC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgbXVsdGlwbHkocG93KDEwLCBqLCAxKSwgMCk7XG4gICAgICAgIGogPSBlIC0gMTtcbiAgICAgICAgd2hpbGUoaiA+PSAyMyl7XG4gICAgICAgICAgZGl2aWRlKDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KDEsIDEpO1xuICAgICAgICBkaXZpZGUoMik7XG4gICAgICAgIG0gPSBudW1Ub1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoMCwgeik7XG4gICAgICAgIG11bHRpcGx5KDEgPDwgLWUsIDApO1xuICAgICAgICBtID0gbnVtVG9TdHJpbmcoKSArIHJlcGVhdC5jYWxsKFpFUk8sIGYpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihmID4gMCl7XG4gICAgICBrID0gbS5sZW5ndGg7XG4gICAgICBtID0gcyArIChrIDw9IGYgPyAnMC4nICsgcmVwZWF0LmNhbGwoWkVSTywgZiAtIGspICsgbSA6IG0uc2xpY2UoMCwgayAtIGYpICsgJy4nICsgbS5zbGljZShrIC0gZikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gcyArIG07XG4gICAgfSByZXR1cm4gbTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnRvLWZpeGVkLmpzXG4gKiovIiwidmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgbXNnKXtcbiAgaWYodHlwZW9mIGl0ICE9ICdudW1iZXInICYmIGNvZihpdCkgIT0gJ051bWJlcicpdGhyb3cgVHlwZUVycm9yKG1zZyk7XG4gIHJldHVybiAraXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtbnVtYmVyLXZhbHVlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpe1xuICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpXG4gICAgLCByZXMgPSAnJ1xuICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XG4gIHJldHVybiByZXM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1yZXBlYXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZmFpbHMgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgYU51bWJlclZhbHVlID0gcmVxdWlyZSgnLi9fYS1udW1iZXItdmFsdWUnKVxuICAsICR0b1ByZWNpc2lvbiA9IDEuLnRvUHJlY2lzaW9uO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqICgkZmFpbHMoZnVuY3Rpb24oKXtcbiAgLy8gSUU3LVxuICByZXR1cm4gJHRvUHJlY2lzaW9uLmNhbGwoMSwgdW5kZWZpbmVkKSAhPT0gJzEnO1xufSkgfHwgISRmYWlscyhmdW5jdGlvbigpe1xuICAvLyBWOCB+IEFuZHJvaWQgNC4zLVxuICAkdG9QcmVjaXNpb24uY2FsbCh7fSk7XG59KSksICdOdW1iZXInLCB7XG4gIHRvUHJlY2lzaW9uOiBmdW5jdGlvbiB0b1ByZWNpc2lvbihwcmVjaXNpb24pe1xuICAgIHZhciB0aGF0ID0gYU51bWJlclZhbHVlKHRoaXMsICdOdW1iZXIjdG9QcmVjaXNpb246IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICAgIHJldHVybiBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/ICR0b1ByZWNpc2lvbi5jYWxsKHRoYXQpIDogJHRvUHJlY2lzaW9uLmNhbGwodGhhdCwgcHJlY2lzaW9uKTsgXG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci50by1wcmVjaXNpb24uanNcbiAqKi8iLCIvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7RVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzXG4gKiovIiwiLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIF9pc0Zpbml0ZSA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmlzRmluaXRlO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNGaW5pdGU6IGZ1bmN0aW9uIGlzRmluaXRlKGl0KXtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanNcbiAqKi8iLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge2lzSW50ZWdlcjogcmVxdWlyZSgnLi9faXMtaW50ZWdlcicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanNcbiAqKi8iLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZmxvb3IgICAgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0ludGVnZXIoaXQpe1xuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtaW50ZWdlci5qc1xuICoqLyIsIi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcil7XG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanNcbiAqKi8iLCIvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc0ludGVnZXIgPSByZXF1aXJlKCcuL19pcy1pbnRlZ2VyJylcbiAgLCBhYnMgICAgICAgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKXtcbiAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gMHgxZmZmZmZmZmZmZmZmZjtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qc1xuICoqLyIsIi8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanNcbiAqKi8iLCIvLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge01JTl9TQUZFX0lOVEVHRVI6IC0weDFmZmZmZmZmZmZmZmZmfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXIuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi9fcGFyc2UtZmxvYXQnKTtcbi8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChOdW1iZXIucGFyc2VGbG9hdCAhPSAkcGFyc2VGbG9hdCksICdOdW1iZXInLCB7cGFyc2VGbG9hdDogJHBhcnNlRmxvYXR9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanNcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcGFyc2VJbnQgPSByZXF1aXJlKCcuL19wYXJzZS1pbnQnKTtcbi8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKE51bWJlci5wYXJzZUludCAhPSAkcGFyc2VJbnQpLCAnTnVtYmVyJywge3BhcnNlSW50OiAkcGFyc2VJbnR9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzXG4gKiovIiwiLy8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGxvZzFwICAgPSByZXF1aXJlKCcuL19tYXRoLWxvZzFwJylcbiAgLCBzcXJ0ICAgID0gTWF0aC5zcXJ0XG4gICwgJGFjb3NoICA9IE1hdGguYWNvc2g7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2hcbiAgLy8gVjggYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzUwOVxuICAmJiBNYXRoLmZsb29yKCRhY29zaChOdW1iZXIuTUFYX1ZBTFVFKSkgPT0gNzEwXG4gIC8vIFRvciBCcm93c2VyIGJ1ZzogTWF0aC5hY29zaChJbmZpbml0eSkgLT4gTmFOIFxuICAmJiAkYWNvc2goSW5maW5pdHkpID09IEluZmluaXR5XG4pLCAnTWF0aCcsIHtcbiAgYWNvc2g6IGZ1bmN0aW9uIGFjb3NoKHgpe1xuICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiB4ID4gOTQ5MDYyNjUuNjI0MjUxNTZcbiAgICAgID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMlxuICAgICAgOiBsb2cxcCh4IC0gMSArIHNxcnQoeCAtIDEpICogc3FydCh4ICsgMSkpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzXG4gKiovIiwiLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5sb2cxcCB8fCBmdW5jdGlvbiBsb2cxcCh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogTWF0aC5sb2coMSArIHgpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLWxvZzFwLmpzXG4gKiovIiwiLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRhc2luaCAgPSBNYXRoLmFzaW5oO1xuXG5mdW5jdGlvbiBhc2luaCh4KXtcbiAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBNYXRoLmxvZyh4ICsgTWF0aC5zcXJ0KHggKiB4ICsgMSkpO1xufVxuXG4vLyBUb3IgQnJvd3NlciBidWc6IE1hdGguYXNpbmgoMCkgLT4gLTAgXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFzaW5oICYmIDEgLyAkYXNpbmgoMCkgPiAwKSwgJ01hdGgnLCB7YXNpbmg6IGFzaW5ofSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qc1xuICoqLyIsIi8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkYXRhbmggID0gTWF0aC5hdGFuaDtcblxuLy8gVG9yIEJyb3dzZXIgYnVnOiBNYXRoLmF0YW5oKC0wKSAtPiAwIFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhdGFuaCAmJiAxIC8gJGF0YW5oKC0wKSA8IDApLCAnTWF0aCcsIHtcbiAgYXRhbmg6IGZ1bmN0aW9uIGF0YW5oKHgpe1xuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanNcbiAqKi8iLCIvLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBzaWduICAgID0gcmVxdWlyZSgnLi9fbWF0aC1zaWduJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2JydDogZnVuY3Rpb24gY2JydCh4KXtcbiAgICByZXR1cm4gc2lnbih4ID0gK3gpICogTWF0aC5wb3coTWF0aC5hYnMoeCksIDEgLyAzKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzXG4gKiovIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19tYXRoLXNpZ24uanNcbiAqKi8iLCIvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjbHozMjogZnVuY3Rpb24gY2x6MzIoeCl7XG4gICAgcmV0dXJuICh4ID4+Pj0gMCkgPyAzMSAtIE1hdGguZmxvb3IoTWF0aC5sb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzXG4gKiovIiwiLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjb3NoOiBmdW5jdGlvbiBjb3NoKHgpe1xuICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY29zaC5qc1xuICoqLyIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGV4cG0xICA9IHJlcXVpcmUoJy4vX21hdGgtZXhwbTEnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoJGV4cG0xICE9IE1hdGguZXhwbTEpLCAnTWF0aCcsIHtleHBtMTogJGV4cG0xfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5leHBtMS5qc1xuICoqLyIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG0xID0gTWF0aC5leHBtMTtcbm1vZHVsZS5leHBvcnRzID0gKCEkZXhwbTFcbiAgLy8gT2xkIEZGIGJ1Z1xuICB8fCAkZXhwbTEoMTApID4gMjIwMjUuNDY1Nzk0ODA2NzE5IHx8ICRleHBtMSgxMCkgPCAyMjAyNS40NjU3OTQ4MDY3MTY1MTY4XG4gIC8vIFRvciBCcm93c2VyIGJ1Z1xuICB8fCAkZXhwbTEoLTJlLTE3KSAhPSAtMmUtMTdcbikgPyBmdW5jdGlvbiBleHBtMSh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IE1hdGguZXhwKHgpIC0gMTtcbn0gOiAkZXhwbTE7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fbWF0aC1leHBtMS5qc1xuICoqLyIsIi8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgc2lnbiAgICAgID0gcmVxdWlyZSgnLi9fbWF0aC1zaWduJylcbiAgLCBwb3cgICAgICAgPSBNYXRoLnBvd1xuICAsIEVQU0lMT04gICA9IHBvdygyLCAtNTIpXG4gICwgRVBTSUxPTjMyID0gcG93KDIsIC0yMylcbiAgLCBNQVgzMiAgICAgPSBwb3coMiwgMTI3KSAqICgyIC0gRVBTSUxPTjMyKVxuICAsIE1JTjMyICAgICA9IHBvdygyLCAtMTI2KTtcblxudmFyIHJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XG59O1xuXG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCl7XG4gICAgdmFyICRhYnMgID0gTWF0aC5hYnMoeClcbiAgICAgICwgJHNpZ24gPSBzaWduKHgpXG4gICAgICAsIGEsIHJlc3VsdDtcbiAgICBpZigkYWJzIDwgTUlOMzIpcmV0dXJuICRzaWduICogcm91bmRUaWVzVG9FdmVuKCRhYnMgLyBNSU4zMiAvIEVQU0lMT04zMikgKiBNSU4zMiAqIEVQU0lMT04zMjtcbiAgICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gICAgcmVzdWx0ID0gYSAtIChhIC0gJGFicyk7XG4gICAgaWYocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdClyZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgICByZXR1cm4gJHNpZ24gKiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzXG4gKiovIiwiLy8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgYWJzICAgICA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgc3VtICA9IDBcbiAgICAgICwgaSAgICA9IDBcbiAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbGFyZyA9IDBcbiAgICAgICwgYXJnLCBkaXY7XG4gICAgd2hpbGUoaSA8IGFMZW4pe1xuICAgICAgYXJnID0gYWJzKGFyZ3VtZW50c1tpKytdKTtcbiAgICAgIGlmKGxhcmcgPCBhcmcpe1xuICAgICAgICBkaXYgID0gbGFyZyAvIGFyZztcbiAgICAgICAgc3VtICA9IHN1bSAqIGRpdiAqIGRpdiArIDE7XG4gICAgICAgIGxhcmcgPSBhcmc7XG4gICAgICB9IGVsc2UgaWYoYXJnID4gMCl7XG4gICAgICAgIGRpdiAgPSBhcmcgLyBsYXJnO1xuICAgICAgICBzdW0gKz0gZGl2ICogZGl2O1xuICAgICAgfSBlbHNlIHN1bSArPSBhcmc7XG4gICAgfVxuICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmh5cG90LmpzXG4gKiovIiwiLy8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRpbXVsICAgPSBNYXRoLmltdWw7XG5cbi8vIHNvbWUgV2ViS2l0IHZlcnNpb25zIGZhaWxzIHdpdGggYmlnIG51bWJlcnMsIHNvbWUgaGFzIHdyb25nIGFyaXR5XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICRpbXVsKDB4ZmZmZmZmZmYsIDUpICE9IC01IHx8ICRpbXVsLmxlbmd0aCAhPSAyO1xufSksICdNYXRoJywge1xuICBpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgeG4gPSAreFxuICAgICAgLCB5biA9ICt5XG4gICAgICAsIHhsID0gVUlOVDE2ICYgeG5cbiAgICAgICwgeWwgPSBVSU5UMTYgJiB5bjtcbiAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJTlQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJTlQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanNcbiAqKi8iLCIvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cxMDogZnVuY3Rpb24gbG9nMTAoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwLmpzXG4gKiovIiwiLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtsb2cxcDogcmVxdWlyZSgnLi9fbWF0aC1sb2cxcCcpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxcC5qc1xuICoqLyIsIi8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgbG9nMjogZnVuY3Rpb24gbG9nMih4KXtcbiAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzXG4gKiovIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge3NpZ246IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzXG4gKiovIiwiLy8gMjAuMi4yLjMwIE1hdGguc2luaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGV4cG0xICAgPSByZXF1aXJlKCcuL19tYXRoLWV4cG0xJylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbi8vIFY4IG5lYXIgQ2hyb21pdW0gMzggaGFzIGEgcHJvYmxlbSB3aXRoIHZlcnkgc21hbGwgbnVtYmVyc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhTWF0aC5zaW5oKC0yZS0xNykgIT0gLTJlLTE3O1xufSksICdNYXRoJywge1xuICBzaW5oOiBmdW5jdGlvbiBzaW5oKHgpe1xuICAgIHJldHVybiBNYXRoLmFicyh4ID0gK3gpIDwgMVxuICAgICAgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMlxuICAgICAgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChNYXRoLkUgLyAyKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzXG4gKiovIiwiLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGV4cG0xICAgPSByZXF1aXJlKCcuL19tYXRoLWV4cG0xJylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdGFuaDogZnVuY3Rpb24gdGFuaCh4KXtcbiAgICB2YXIgYSA9IGV4cG0xKHggPSAreClcbiAgICAgICwgYiA9IGV4cG0xKC14KTtcbiAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanNcbiAqKi8iLCIvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpe1xuICAgIHJldHVybiAoaXQgPiAwID8gTWF0aC5mbG9vciA6IE1hdGguY2VpbCkoaXQpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzXG4gKiovIiwidmFyICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0luZGV4ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4JylcbiAgLCBmcm9tQ2hhckNvZGUgICA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbiAgLCAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG4vLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcbiAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciByZXMgID0gW11cbiAgICAgICwgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgaSAgICA9IDBcbiAgICAgICwgY29kZTtcbiAgICB3aGlsZShhTGVuID4gaSl7XG4gICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xuICAgICAgaWYodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XG4gICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMFxuICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXG4gICAgICApO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludC5qc1xuICoqLyIsInZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjQgU3RyaW5nLnJhdyhjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcbiAgcmF3OiBmdW5jdGlvbiByYXcoY2FsbFNpdGUpe1xuICAgIHZhciB0cGwgID0gdG9JT2JqZWN0KGNhbGxTaXRlLnJhdylcbiAgICAgICwgbGVuICA9IHRvTGVuZ3RoKHRwbC5sZW5ndGgpXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIHJlcyAgPSBbXVxuICAgICAgLCBpICAgID0gMDtcbiAgICB3aGlsZShsZW4gPiBpKXtcbiAgICAgIHJlcy5wdXNoKFN0cmluZyh0cGxbaSsrXSkpO1xuICAgICAgaWYoaSA8IGFMZW4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjEuMy4yNSBTdHJpbmcucHJvdG90eXBlLnRyaW0oKVxucmVxdWlyZSgnLi9fc3RyaW5nLXRyaW0nKSgndHJpbScsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMyk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkYXQgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxuICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKXtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzXG4gKiovIiwiLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjb250ZXh0ICAgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpXG4gICwgRU5EU19XSVRIID0gJ2VuZHNXaXRoJ1xuICAsICRlbmRzV2l0aCA9ICcnW0VORFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoRU5EU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKXtcbiAgICB2YXIgdGhhdCA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBFTkRTX1dJVEgpXG4gICAgICAsIGVuZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbGVuICAgID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpXG4gICAgICAsIGVuZCAgICA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBNYXRoLm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbilcbiAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRlbmRzV2l0aFxuICAgICAgPyAkZW5kc1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGVuZClcbiAgICAgIDogdGhhdC5zbGljZShlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGguanNcbiAqKi8iLCIvLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpe1xuICBpZihpc1JlZ0V4cChzZWFyY2hTdHJpbmcpKXRocm93IFR5cGVFcnJvcignU3RyaW5nIycgKyBOQU1FICsgXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO1xuICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctY29udGV4dC5qc1xuICoqLyIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBjb2YgICAgICA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgTUFUQ0ggICAgPSByZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzXG4gKiovIiwidmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciByZSA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tLRVldKHJlKTtcbiAgfSBjYXRjaChlKXtcbiAgICB0cnkge1xuICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuICAgIH0gY2F0Y2goZil7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMtaXMtcmVnZXhwLmpzXG4gKiovIiwiLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29udGV4dCAgPSByZXF1aXJlKCcuL19zdHJpbmctY29udGV4dCcpXG4gICwgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzLWlzLXJlZ2V4cCcpKElOQ0xVREVTKSwgJ1N0cmluZycsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcbiAgICByZXR1cm4gISF+Y29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIElOQ0xVREVTKVxuICAgICAgLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qc1xuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXG4gIHJlcGVhdDogcmVxdWlyZSgnLi9fc3RyaW5nLXJlcGVhdCcpXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzXG4gKiovIiwiLy8gMjEuMS4zLjE4IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgWywgcG9zaXRpb24gXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGNvbnRleHQgICAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKVxuICAsIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnXG4gICwgJHN0YXJ0c1dpdGggPSAnJ1tTVEFSVFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoU1RBUlRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcbiAgICB2YXIgdGhhdCAgID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIFNUQVJUU19XSVRIKVxuICAgICAgLCBpbmRleCAgPSB0b0xlbmd0aChNYXRoLm1pbihhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJHN0YXJ0c1dpdGhcbiAgICAgID8gJHN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuICAgICAgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjIgU3RyaW5nLnByb3RvdHlwZS5hbmNob3IobmFtZSlcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2FuY2hvcicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYW5jaG9yKG5hbWUpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ25hbWUnLCBuYW1lKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmFuY2hvci5qc1xuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBxdW90ICAgID0gL1wiL2c7XG4vLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcbnZhciBjcmVhdGVIVE1MID0gZnVuY3Rpb24oc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSlcbiAgICAsIHAxID0gJzwnICsgdGFnO1xuICBpZihhdHRyaWJ1dGUgIT09ICcnKXAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgZXhlYyl7XG4gIHZhciBPID0ge307XG4gIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRlc3QgPSAnJ1tOQU1FXSgnXCInKTtcbiAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcbiAgfSksICdTdHJpbmcnLCBPKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWh0bWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4zIFN0cmluZy5wcm90b3R5cGUuYmlnKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2JpZycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYmlnKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JpZycsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5iaWcuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy40IFN0cmluZy5wcm90b3R5cGUuYmxpbmsoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYmxpbmsnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJsaW5rKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2JsaW5rJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJsaW5rLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNSBTdHJpbmcucHJvdG90eXBlLmJvbGQoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnYm9sZCcsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gYm9sZCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdiJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmJvbGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy42IFN0cmluZy5wcm90b3R5cGUuZml4ZWQoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnZml4ZWQnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZpeGVkKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3R0JywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZpeGVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuNyBTdHJpbmcucHJvdG90eXBlLmZvbnRjb2xvcihjb2xvcilcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ2ZvbnRjb2xvcicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gZm9udGNvbG9yKGNvbG9yKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnZm9udCcsICdjb2xvcicsIGNvbG9yKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRjb2xvci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjggU3RyaW5nLnByb3RvdHlwZS5mb250c2l6ZShzaXplKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnZm9udHNpemUnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZvbnRzaXplKHNpemUpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdmb250JywgJ3NpemUnLCBzaXplKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZvbnRzaXplLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuOSBTdHJpbmcucHJvdG90eXBlLml0YWxpY3MoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnaXRhbGljcycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gaXRhbGljcygpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdpJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0YWxpY3MuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMCBTdHJpbmcucHJvdG90eXBlLmxpbmsodXJsKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnbGluaycsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gbGluayh1cmwpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjExIFN0cmluZy5wcm90b3R5cGUuc21hbGwoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnc21hbGwnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNtYWxsKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3NtYWxsJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnNtYWxsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gQi4yLjMuMTIgU3RyaW5nLnByb3RvdHlwZS5zdHJpa2UoKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnc3RyaWtlJywgZnVuY3Rpb24oY3JlYXRlSFRNTCl7XG4gIHJldHVybiBmdW5jdGlvbiBzdHJpa2UoKXtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnc3RyaWtlJywgJycsICcnKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0cmlrZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEIuMi4zLjEzIFN0cmluZy5wcm90b3R5cGUuc3ViKClcbnJlcXVpcmUoJy4vX3N0cmluZy1odG1sJykoJ3N1YicsIGZ1bmN0aW9uKGNyZWF0ZUhUTUwpe1xuICByZXR1cm4gZnVuY3Rpb24gc3ViKCl7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3N1YicsICcnLCAnJyk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdWIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xNCBTdHJpbmcucHJvdG90eXBlLnN1cCgpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdXAnLCBmdW5jdGlvbihjcmVhdGVIVE1MKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN1cCgpe1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdXAnLCAnJywgJycpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3VwLmpzXG4gKiovIiwiLy8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ0RhdGUnLCB7bm93OiBmdW5jdGlvbigpeyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH19KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLm5vdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gbmV3IERhdGUoTmFOKS50b0pTT04oKSAhPT0gbnVsbCB8fCBEYXRlLnByb3RvdHlwZS50b0pTT04uY2FsbCh7dG9JU09TdHJpbmc6IGZ1bmN0aW9uKCl7IHJldHVybiAxOyB9fSkgIT09IDE7XG59KSwgJ0RhdGUnLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKGtleSl7XG4gICAgdmFyIE8gID0gdG9PYmplY3QodGhpcylcbiAgICAgICwgcHYgPSB0b1ByaW1pdGl2ZShPKTtcbiAgICByZXR1cm4gdHlwZW9mIHB2ID09ICdudW1iZXInICYmICFpc0Zpbml0ZShwdikgPyBudWxsIDogTy50b0lTT1N0cmluZygpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5kYXRlLnRvLWpzb24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgZ2V0VGltZSA9IERhdGUucHJvdG90eXBlLmdldFRpbWU7XG5cbnZhciBseiA9IGZ1bmN0aW9uKG51bSl7XG4gIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xufTtcblxuLy8gUGhhbnRvbUpTIC8gb2xkIFdlYktpdCBoYXMgYSBicm9rZW4gaW1wbGVtZW50YXRpb25zXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gbmV3IERhdGUoLTVlMTMgLSAxKS50b0lTT1N0cmluZygpICE9ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIG5ldyBEYXRlKE5hTikudG9JU09TdHJpbmcoKTtcbn0pKSwgJ0RhdGUnLCB7XG4gIHRvSVNPU3RyaW5nOiBmdW5jdGlvbiB0b0lTT1N0cmluZygpe1xuICAgIGlmKCFpc0Zpbml0ZShnZXRUaW1lLmNhbGwodGhpcykpKXRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICAgIHZhciBkID0gdGhpc1xuICAgICAgLCB5ID0gZC5nZXRVVENGdWxsWWVhcigpXG4gICAgICAsIG0gPSBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gICAgICAsIHMgPSB5IDwgMCA/ICctJyA6IHkgPiA5OTk5ID8gJysnIDogJyc7XG4gICAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgK1xuICAgICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuICAgICAgJ1QnICsgbHooZC5nZXRVVENIb3VycygpKSArICc6JyArIGx6KGQuZ2V0VVRDTWludXRlcygpKSArXG4gICAgICAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1pc28tc3RyaW5nLmpzXG4gKiovIiwidmFyIERhdGVQcm90byAgICA9IERhdGUucHJvdG90eXBlXG4gICwgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSdcbiAgLCBUT19TVFJJTkcgICAgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nICAgID0gRGF0ZVByb3RvW1RPX1NUUklOR11cbiAgLCBnZXRUaW1lICAgICAgPSBEYXRlUHJvdG8uZ2V0VGltZTtcbmlmKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKERhdGVQcm90bywgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gJHRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nLmpzXG4gKiovIiwidmFyIFRPX1BSSU1JVElWRSA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1ByaW1pdGl2ZScpXG4gICwgcHJvdG8gICAgICAgID0gRGF0ZS5wcm90b3R5cGU7XG5cbmlmKCEoVE9fUFJJTUlUSVZFIGluIHByb3RvKSlyZXF1aXJlKCcuL19oaWRlJykocHJvdG8sIFRPX1BSSU1JVElWRSwgcmVxdWlyZSgnLi9fZGF0ZS10by1wcmltaXRpdmUnKSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1wcmltaXRpdmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBOVU1CRVIgICAgICA9ICdudW1iZXInO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhpbnQpe1xuICBpZihoaW50ICE9PSAnc3RyaW5nJyAmJiBoaW50ICE9PSBOVU1CRVIgJiYgaGludCAhPT0gJ2RlZmF1bHQnKXRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcbiAgcmV0dXJuIHRvUHJpbWl0aXZlKGFuT2JqZWN0KHRoaXMpLCBoaW50ICE9IE5VTUJFUik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RhdGUtdG8tcHJpbWl0aXZlLmpzXG4gKiovIiwiLy8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnQXJyYXknLCB7aXNBcnJheTogcmVxdWlyZSgnLi9faXMtYXJyYXknKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmlzLWFycmF5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpXG4gICwgZ2V0SXRlckZuICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCBhTGVuICAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuICoqLyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIFdlYktpdCBBcnJheS5vZiBpc24ndCBnZW5lcmljXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgZnVuY3Rpb24gRigpe31cbiAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xufSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxuICBvZjogZnVuY3Rpb24gb2YoLyogLi4uYXJncyAqLyl7XG4gICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICwgYUxlbiAgID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBuZXcgKHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXkpKGFMZW4pO1xuICAgIHdoaWxlKGFMZW4gPiBpbmRleCljcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBhTGVuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5qb2luKHNlcGFyYXRvcilcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5Sm9pbiA9IFtdLmpvaW47XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBzdHJpbmdzXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChyZXF1aXJlKCcuL19pb2JqZWN0JykgIT0gT2JqZWN0IHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoYXJyYXlKb2luKSksICdBcnJheScsIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3Ipe1xuICAgIHJldHVybiBhcnJheUpvaW4uY2FsbCh0b0lPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuam9pbi5qc1xuICoqLyIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWV0aG9kLCBhcmcpe1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBhcmcgPyBtZXRob2QuY2FsbChudWxsLCBmdW5jdGlvbigpe30sIDEpIDogbWV0aG9kLmNhbGwobnVsbCk7XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpY3QtbWV0aG9kLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGh0bWwgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjb2YgICAgICAgID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCB0b0luZGV4ICAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFycmF5U2xpY2UgPSBbXS5zbGljZTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIGlmKGh0bWwpYXJyYXlTbGljZS5jYWxsKGh0bWwpO1xufSksICdBcnJheScsIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpe1xuICAgIHZhciBsZW4gICA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKVxuICAgICAgLCBrbGFzcyA9IGNvZih0aGlzKTtcbiAgICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZDtcbiAgICBpZihrbGFzcyA9PSAnQXJyYXknKXJldHVybiBhcnJheVNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG4gICAgdmFyIHN0YXJ0ICA9IHRvSW5kZXgoYmVnaW4sIGxlbilcbiAgICAgICwgdXBUbyAgID0gdG9JbmRleChlbmQsIGxlbilcbiAgICAgICwgc2l6ZSAgID0gdG9MZW5ndGgodXBUbyAtIHN0YXJ0KVxuICAgICAgLCBjbG9uZWQgPSBBcnJheShzaXplKVxuICAgICAgLCBpICAgICAgPSAwO1xuICAgIGZvcig7IGkgPCBzaXplOyBpKyspY2xvbmVkW2ldID0ga2xhc3MgPT0gJ1N0cmluZydcbiAgICAgID8gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKVxuICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCB0b09iamVjdCAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIGZhaWxzICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCAkc29ydCAgICAgPSBbXS5zb3J0XG4gICwgdGVzdCAgICAgID0gWzEsIDIsIDNdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIC8vIFY4IGJ1Z1xuICB0ZXN0LnNvcnQobnVsbCk7XG4gIC8vIE9sZCBXZWJLaXRcbn0pIHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoJHNvcnQpKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMjUgQXJyYXkucHJvdG90eXBlLnNvcnQoY29tcGFyZWZuKVxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbil7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29ydC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGZvckVhY2ggPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBTVFJJQ1QgICA9IHJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5mb3JFYWNoLCB0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhU1RSSUNULCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xMCAvIDE1LjQuNC4xOCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZm9yLWVhY2guanNcbiAqKi8iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qc1xuICoqLyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRtYXAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5tYXAsIHRydWUpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xNSAvIDE1LjQuNC4xOSBBcnJheS5wcm90b3R5cGUubWFwKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5tYXAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgyKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLmZpbHRlciwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsdGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRzb21lICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKShbXS5zb21lLCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMjMgLyAxNS40LjQuMTcgQXJyYXkucHJvdG90eXBlLnNvbWUoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgc29tZTogZnVuY3Rpb24gc29tZShjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLyl7XG4gICAgcmV0dXJuICRzb21lKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNvbWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGV2ZXJ5ICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSg0KTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLmV2ZXJ5LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuNSAvIDE1LjQuNC4xNiBBcnJheS5wcm90b3R5cGUuZXZlcnkoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKXtcbiAgICByZXR1cm4gJGV2ZXJ5KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmV2ZXJ5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRyZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheS1yZWR1Y2UnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnJlZHVjZSwgdHJ1ZSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjE4IC8gMTUuNC40LjIxIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKXtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHNbMV0sIGZhbHNlKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkucmVkdWNlLmpzXG4gKiovIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIHRvT2JqZWN0ICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgY2FsbGJhY2tmbiwgYUxlbiwgbWVtbywgaXNSaWdodCl7XG4gIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoYXQpXG4gICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsIGluZGV4ICA9IGlzUmlnaHQgPyBsZW5ndGggLSAxIDogMFxuICAgICwgaSAgICAgID0gaXNSaWdodCA/IC0xIDogMTtcbiAgaWYoYUxlbiA8IDIpZm9yKDs7KXtcbiAgICBpZihpbmRleCBpbiBzZWxmKXtcbiAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaW5kZXggKz0gaTtcbiAgICBpZihpc1JpZ2h0ID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KXtcbiAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgIH1cbiAgfVxuICBmb3IoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpaWYoaW5kZXggaW4gc2VsZil7XG4gICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgc2VsZltpbmRleF0sIGluZGV4LCBPKTtcbiAgfVxuICByZXR1cm4gbWVtbztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktcmVkdWNlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRyZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheS1yZWR1Y2UnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKFtdLnJlZHVjZVJpZ2h0LCB0cnVlKSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pe1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c1sxXSwgdHJ1ZSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnJlZHVjZS1yaWdodC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkaW5kZXhPZiAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCAkbmF0aXZlICAgICAgID0gW10uaW5kZXhPZlxuICAsIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKE5FR0FUSVZFX1pFUk8gfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkbmF0aXZlKSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjExIC8gMTUuNC40LjE0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggPSAwICovKXtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyAkbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHNbMV0pO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pbmRleC1vZi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b0lPYmplY3QgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9JbnRlZ2VyICAgICA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIHRvTGVuZ3RoICAgICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsICRuYXRpdmUgICAgICAgPSBbXS5sYXN0SW5kZXhPZlxuICAsIE5FR0FUSVZFX1pFUk8gPSAhISRuYXRpdmUgJiYgMSAvIFsxXS5sYXN0SW5kZXhPZigxLCAtMCkgPCAwO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChORUdBVElWRV9aRVJPIHx8ICFyZXF1aXJlKCcuL19zdHJpY3QtbWV0aG9kJykoJG5hdGl2ZSkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xNCAvIDE1LjQuNC4xNSBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBsYXN0SW5kZXhPZjogZnVuY3Rpb24gbGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ID0gQFsqLTFdICovKXtcbiAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgaWYoTkVHQVRJVkVfWkVSTylyZXR1cm4gJG5hdGl2ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDA7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCh0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gbGVuZ3RoIC0gMTtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlpbmRleCA9IE1hdGgubWluKGluZGV4LCB0b0ludGVnZXIoYXJndW1lbnRzWzFdKSk7XG4gICAgaWYoaW5kZXggPCAwKWluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgZm9yKDtpbmRleCA+PSAwOyBpbmRleC0tKWlmKGluZGV4IGluIE8paWYoT1tpbmRleF0gPT09IHNlYXJjaEVsZW1lbnQpcmV0dXJuIGluZGV4IHx8IDA7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5sYXN0LWluZGV4LW9mLmpzXG4gKiovIiwiLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2NvcHlXaXRoaW46IHJlcXVpcmUoJy4vX2FycmF5LWNvcHktd2l0aGluJyl9KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2NvcHlXaXRoaW4nKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qc1xuICoqLyIsIi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0luZGV4ICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQvKj0gMCovLCBzdGFydC8qPSAwLCBlbmQgPSBAbGVuZ3RoKi8pe1xuICB2YXIgTyAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuICAgPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsIHRvICAgID0gdG9JbmRleCh0YXJnZXQsIGxlbilcbiAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxuICAgICwgZW5kICAgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuICAgICwgY291bnQgPSBNYXRoLm1pbigoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0luZGV4KGVuZCwgbGVuKSkgLSBmcm9tLCBsZW4gLSB0bylcbiAgICAsIGluYyAgID0gMTtcbiAgaWYoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KXtcbiAgICBpbmMgID0gLTE7XG4gICAgZnJvbSArPSBjb3VudCAtIDE7XG4gICAgdG8gICArPSBjb3VudCAtIDE7XG4gIH1cbiAgd2hpbGUoY291bnQtLSA+IDApe1xuICAgIGlmKGZyb20gaW4gTylPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgdG8gICArPSBpbmM7XG4gICAgZnJvbSArPSBpbmM7XG4gIH0gcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWNvcHktd2l0aGluLmpzXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtmaWxsOiByZXF1aXJlKCcuL19hcnJheS1maWxsJyl9KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2ZpbGwnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzXG4gKiovIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvSW5kZXggID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XG4gIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCBhTGVuICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSB0b0luZGV4KGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpXG4gICAgLCBlbmQgICAgPSBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZFxuICAgICwgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktZmlsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZmluZCAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDUpXG4gICwgS0VZICAgICA9ICdmaW5kJ1xuICAsIGZvcmNlZCAgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy45IEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRmaW5kICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoNilcbiAgLCBLRVkgICAgID0gJ2ZpbmRJbmRleCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzXG4gKiovIiwicmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnQXJyYXknKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4vX2luaGVyaXQtaWYtcmVxdWlyZWQnKVxuICAsIGRQICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGdPUE4gICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgaXNSZWdFeHAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKVxuICAsICRmbGFncyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmxhZ3MnKVxuICAsICRSZWdFeHAgICAgICAgICAgID0gZ2xvYmFsLlJlZ0V4cFxuICAsIEJhc2UgICAgICAgICAgICAgID0gJFJlZ0V4cFxuICAsIHByb3RvICAgICAgICAgICAgID0gJFJlZ0V4cC5wcm90b3R5cGVcbiAgLCByZTEgICAgICAgICAgICAgICA9IC9hL2dcbiAgLCByZTIgICAgICAgICAgICAgICA9IC9hL2dcbiAgLy8gXCJuZXdcIiBjcmVhdGVzIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdneSBoZXJlXG4gICwgQ09SUkVDVF9ORVcgICAgICAgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5cbmlmKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgKCFDT1JSRUNUX05FVyB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJlMltyZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKV0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuICRSZWdFeHAocmUxKSAhPSByZTEgfHwgJFJlZ0V4cChyZTIpID09IHJlMiB8fCAkUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpe1xuICAkUmVnRXhwID0gZnVuY3Rpb24gUmVnRXhwKHAsIGYpe1xuICAgIHZhciB0aVJFID0gdGhpcyBpbnN0YW5jZW9mICRSZWdFeHBcbiAgICAgICwgcGlSRSA9IGlzUmVnRXhwKHApXG4gICAgICAsIGZpVSAgPSBmID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuICF0aVJFICYmIHBpUkUgJiYgcC5jb25zdHJ1Y3RvciA9PT0gJFJlZ0V4cCAmJiBmaVUgPyBwXG4gICAgICA6IGluaGVyaXRJZlJlcXVpcmVkKENPUlJFQ1RfTkVXXG4gICAgICAgID8gbmV3IEJhc2UocGlSRSAmJiAhZmlVID8gcC5zb3VyY2UgOiBwLCBmKVxuICAgICAgICA6IEJhc2UoKHBpUkUgPSBwIGluc3RhbmNlb2YgJFJlZ0V4cCkgPyBwLnNvdXJjZSA6IHAsIHBpUkUgJiYgZmlVID8gJGZsYWdzLmNhbGwocCkgOiBmKVxuICAgICAgLCB0aVJFID8gdGhpcyA6IHByb3RvLCAkUmVnRXhwKTtcbiAgfTtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24oa2V5KXtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCBkUCgkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIEJhc2Vba2V5XTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24oaXQpeyBCYXNlW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICBmb3IodmFyIGtleXMgPSBnT1BOKEJhc2UpLCBpID0gMDsga2V5cy5sZW5ndGggPiBpOyApcHJveHkoa2V5c1tpKytdKTtcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkUmVnRXhwO1xuICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKGdsb2JhbCwgJ1JlZ0V4cCcsICRSZWdFeHApO1xufVxuXG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKCdSZWdFeHAnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aGF0ICAgPSBhbk9iamVjdCh0aGlzKVxuICAgICwgcmVzdWx0ID0gJyc7XG4gIGlmKHRoYXQuZ2xvYmFsKSAgICAgcmVzdWx0ICs9ICdnJztcbiAgaWYodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZih0aGF0Lm11bHRpbGluZSkgIHJlc3VsdCArPSAnbSc7XG4gIGlmKHRoYXQudW5pY29kZSkgICAgcmVzdWx0ICs9ICd1JztcbiAgaWYodGhhdC5zdGlja3kpICAgICByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19mbGFncy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5mbGFncycpO1xudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCAkZmxhZ3MgICAgICA9IHJlcXVpcmUoJy4vX2ZsYWdzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBUT19TVFJJTkcgICA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgICA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24oZm4pe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoe3NvdXJjZTogJ2EnLCBmbGFnczogJ2InfSkgIT0gJy9hL2InOyB9KSl7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmKCR0b1N0cmluZy5uYW1lICE9IFRPX1NUUklORyl7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qc1xuICoqLyIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanNcbiAqKi8iLCIvLyBAQG1hdGNoIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ21hdGNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCl7XG4gIC8vIDIxLjEuMy4xMSBTdHJpbmcucHJvdG90eXBlLm1hdGNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBtYXRjaChyZWdleHApe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gIH0sICRtYXRjaF07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBmYWlscyAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIHdrcyAgICAgID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBsZW5ndGgsIGV4ZWMpe1xuICB2YXIgU1lNQk9MICAgPSB3a3MoS0VZKVxuICAgICwgZm5zICAgICAgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSlcbiAgICAsIHN0cmZuICAgID0gZm5zWzBdXG4gICAgLCByeGZuICAgICA9IGZuc1sxXTtcbiAgaWYoZmFpbHMoZnVuY3Rpb24oKXtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKXtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uKHN0cmluZywgYXJnKXsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbihzdHJpbmcpeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanNcbiAqKi8iLCIvLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKXtcbiAgLy8gMjEuMS4zLjE0IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKVxuICByZXR1cm4gW2Z1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgfSwgJHJlcGxhY2VdO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanNcbiAqKi8iLCIvLyBAQHNlYXJjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzZWFyY2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBTRUFSQ0gsICRzZWFyY2gpe1xuICAvLyAyMS4xLjMuMTUgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2gocmVnZXhwKVxuICByZXR1cm4gW2Z1bmN0aW9uIHNlYXJjaChyZWdleHApe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgfSwgJHNlYXJjaF07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzXG4gKiovIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFNQTElULCAkc3BsaXQpe1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCAgID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJylcbiAgICAsIF9zcGxpdCAgICAgPSAkc3BsaXRcbiAgICAsICRwdXNoICAgICAgPSBbXS5wdXNoXG4gICAgLCAkU1BMSVQgICAgID0gJ3NwbGl0J1xuICAgICwgTEVOR1RIICAgICA9ICdsZW5ndGgnXG4gICAgLCBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG4gIGlmKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApe1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmKCFpc1JlZ0V4cChzZXBhcmF0b3IpKXJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmKCFOUENHKXNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgICB3aGlsZShtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKXtcbiAgICAgICAgLy8gYHNlcGFyYXRvckNvcHkubGFzdEluZGV4YCBpcyBub3QgcmVsaWFibGUgY3Jvc3MtYnJvd3NlclxuICAgICAgICBsYXN0SW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgIGlmKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpe1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgaWYoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspaWYoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZihsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSl7XG4gICAgICAgIGlmKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSl7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24oc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH1cbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KXtcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIHJlZGVmaW5lQWxsICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBtZXRhICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZvck9mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZmFpbHMgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgJGl0ZXJEZXRlY3QgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgICAgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbihLRVkpe1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uKGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgICAgICAgICAgICAgPSBuZXcgQ1xuICAgICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgICAgLCBIQVNOVF9DSEFJTklORyAgICAgICA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2VcbiAgICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgICAgLCBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uKCl7IGluc3RhbmNlLmhhcygxKTsgfSlcbiAgICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICAgICwgQUNDRVBUX0lURVJBQkxFUyAgICAgPSAkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICAgICwgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgICB2YXIgJGluc3RhbmNlID0gbmV3IEMoKVxuICAgICAgICAgICwgaW5kZXggICAgID0gNTtcbiAgICAgICAgd2hpbGUoaW5kZXgtLSkkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgICB9KTtcbiAgICBpZighQUNDRVBUX0lURVJBQkxFUyl7IFxuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgQmFzZSwgdGFyZ2V0LCBDKTtcbiAgICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pe1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORylmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYoSVNfV0VBSyAmJiBwcm90by5jbGVhcilkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZWFjaCAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgcmVkZWZpbmUgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIG1ldGEgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGFzc2lnbiAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKVxuICAsIHdlYWsgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24td2VhaycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBnZXRXZWFrICAgICAgPSBtZXRhLmdldFdlYWtcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlXG4gICwgdW5jYXVnaHRGcm96ZW5TdG9yZSA9IHdlYWsudWZzdG9yZVxuICAsIHRtcCAgICAgICAgICA9IHt9XG4gICwgSW50ZXJuYWxNYXA7XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKXtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgfTtcbn07XG5cbnZhciBtZXRob2RzID0ge1xuICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIGlmKGlzT2JqZWN0KGtleSkpe1xuICAgICAgdmFyIGRhdGEgPSBnZXRXZWFrKGtleSk7XG4gICAgICBpZihkYXRhID09PSB0cnVlKXJldHVybiB1bmNhdWdodEZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuICAgICAgcmV0dXJuIGRhdGEgPyBkYXRhW3RoaXMuX2ldIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSxcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCBrZXksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcbnZhciAkV2Vha01hcCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdXZWFrTWFwJywgd3JhcHBlciwgbWV0aG9kcywgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcbmlmKG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xuICBJbnRlcm5hbE1hcCA9IHdlYWsuZ2V0Q29uc3RydWN0b3Iod3JhcHBlcik7XG4gIGFzc2lnbihJbnRlcm5hbE1hcC5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICBtZXRhLk5FRUQgPSB0cnVlO1xuICBlYWNoKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIHByb3RvICA9ICRXZWFrTWFwLnByb3RvdHlwZVxuICAgICAgLCBtZXRob2QgPSBwcm90b1trZXldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gaW50ZXJuYWwgd2Vha21hcCBzaGltXG4gICAgICBpZihpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKXtcbiAgICAgICAgaWYoIXRoaXMuX2YpdGhpcy5fZiA9IG5ldyBJbnRlcm5hbE1hcDtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2Zba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZUFsbCAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZ2V0V2VhayAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZ2V0V2Vha1xuICAsIGFuT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpXG4gICwgJGhhcyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIGFycmF5RmluZCAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcbiAgLCBhcnJheUZpbmRJbmRleCAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG4gICwgaWQgICAgICAgICAgICAgICAgPSAwO1xuXG4vLyBmYWxsYmFjayBmb3IgdW5jYXVnaHQgZnJvemVuIGtleXNcbnZhciB1bmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24odGhhdCl7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IFVuY2F1Z2h0RnJvemVuU3RvcmUpO1xufTtcbnZhciBVbmNhdWdodEZyb3plblN0b3JlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRVbmNhdWdodEZyb3plbiA9IGZ1bmN0aW9uKHN0b3JlLCBrZXkpe1xuICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuVW5jYXVnaHRGcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gIGdldDogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSlyZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gISFmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBmaW5kVW5jYXVnaHRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSllbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbihpdCl7XG4gICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgICB9KTtcbiAgICBpZih+aW5kZXgpdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgdW5jYXVnaHQgZnJvemVuIG9iamVjdHNcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKSAmJiBkZWxldGUgZGF0YVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgZGF0YSA9IGdldFdlYWsoa2V5KTtcbiAgICAgICAgaWYoZGF0YSA9PT0gdHJ1ZSlyZXR1cm4gdW5jYXVnaHRGcm96ZW5TdG9yZSh0aGlzKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgJGhhcyhkYXRhLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZGF0YSA9IGdldFdlYWsoYW5PYmplY3Qoa2V5KSwgdHJ1ZSk7XG4gICAgaWYoZGF0YSA9PT0gdHJ1ZSl1bmNhdWdodEZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICBlbHNlIGRhdGFbdGhhdC5faV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhhdDtcbiAgfSxcbiAgdWZzdG9yZTogdW5jYXVnaHRGcm96ZW5TdG9yZVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb2xsZWN0aW9uLXdlYWsuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgd2VhayA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24td2VhaycpO1xuXG4vLyAyMy40IFdlYWtTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdXZWFrU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjQuMy4xIFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCB2YWx1ZSwgdHJ1ZSk7XG4gIH1cbn0sIHdlYWssIGZhbHNlLCB0cnVlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICR0eXBlZCAgICAgICA9IHJlcXVpcmUoJy4vX3R5cGVkJylcbiAgLCBidWZmZXIgICAgICAgPSByZXF1aXJlKCcuL190eXBlZC1idWZmZXInKVxuICAsIGFuT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JbmRleCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBBcnJheUJ1ZmZlciAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5BcnJheUJ1ZmZlclxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsICRBcnJheUJ1ZmZlciA9IGJ1ZmZlci5BcnJheUJ1ZmZlclxuICAsICREYXRhVmlldyAgICA9IGJ1ZmZlci5EYXRhVmlld1xuICAsICRpc1ZpZXcgICAgICA9ICR0eXBlZC5BQlYgJiYgQXJyYXlCdWZmZXIuaXNWaWV3XG4gICwgJHNsaWNlICAgICAgID0gJEFycmF5QnVmZmVyLnByb3RvdHlwZS5zbGljZVxuICAsIFZJRVcgICAgICAgICA9ICR0eXBlZC5WSUVXXG4gICwgQVJSQVlfQlVGRkVSID0gJ0FycmF5QnVmZmVyJztcblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQXJyYXlCdWZmZXIgIT09ICRBcnJheUJ1ZmZlciksIHtBcnJheUJ1ZmZlcjogJEFycmF5QnVmZmVyfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISR0eXBlZC5DT05TVFIsIEFSUkFZX0JVRkZFUiwge1xuICAvLyAyNC4xLjMuMSBBcnJheUJ1ZmZlci5pc1ZpZXcoYXJnKVxuICBpc1ZpZXc6IGZ1bmN0aW9uIGlzVmlldyhpdCl7XG4gICAgcmV0dXJuICRpc1ZpZXcgJiYgJGlzVmlldyhpdCkgfHwgaXNPYmplY3QoaXQpICYmIFZJRVcgaW4gaXQ7XG4gIH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuVSArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICFuZXcgJEFycmF5QnVmZmVyKDIpLnNsaWNlKDEsIHVuZGVmaW5lZCkuYnl0ZUxlbmd0aDtcbn0pLCBBUlJBWV9CVUZGRVIsIHtcbiAgLy8gMjQuMS40LjMgQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKXtcbiAgICBpZigkc2xpY2UgIT09IHVuZGVmaW5lZCAmJiBlbmQgPT09IHVuZGVmaW5lZClyZXR1cm4gJHNsaWNlLmNhbGwoYW5PYmplY3QodGhpcyksIHN0YXJ0KTsgLy8gRkYgZml4XG4gICAgdmFyIGxlbiAgICA9IGFuT2JqZWN0KHRoaXMpLmJ5dGVMZW5ndGhcbiAgICAgICwgZmlyc3QgID0gdG9JbmRleChzdGFydCwgbGVuKVxuICAgICAgLCBmaW5hbCAgPSB0b0luZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kLCBsZW4pXG4gICAgICAsIHJlc3VsdCA9IG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRBcnJheUJ1ZmZlcikpKHRvTGVuZ3RoKGZpbmFsIC0gZmlyc3QpKVxuICAgICAgLCB2aWV3UyAgPSBuZXcgJERhdGFWaWV3KHRoaXMpXG4gICAgICAsIHZpZXdUICA9IG5ldyAkRGF0YVZpZXcocmVzdWx0KVxuICAgICAgLCBpbmRleCAgPSAwO1xuICAgIHdoaWxlKGZpcnN0IDwgZmluYWwpe1xuICAgICAgdmlld1Quc2V0VWludDgoaW5kZXgrKywgdmlld1MuZ2V0VWludDgoZmlyc3QrKykpO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoQVJSQVlfQlVGRkVSKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXIuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFRZUEVEICA9IHVpZCgndHlwZWRfYXJyYXknKVxuICAsIFZJRVcgICA9IHVpZCgndmlldycpXG4gICwgQUJWICAgID0gISEoZ2xvYmFsLkFycmF5QnVmZmVyICYmIGdsb2JhbC5EYXRhVmlldylcbiAgLCBDT05TVFIgPSBBQlZcbiAgLCBpID0gMCwgbCA9IDksIFR5cGVkO1xuXG52YXIgVHlwZWRBcnJheUNvbnN0cnVjdG9ycyA9IChcbiAgJ0ludDhBcnJheSxVaW50OEFycmF5LFVpbnQ4Q2xhbXBlZEFycmF5LEludDE2QXJyYXksVWludDE2QXJyYXksSW50MzJBcnJheSxVaW50MzJBcnJheSxGbG9hdDMyQXJyYXksRmxvYXQ2NEFycmF5J1xuKS5zcGxpdCgnLCcpO1xuXG53aGlsZShpIDwgbCl7XG4gIGlmKFR5cGVkID0gZ2xvYmFsW1R5cGVkQXJyYXlDb25zdHJ1Y3RvcnNbaSsrXV0pe1xuICAgIGhpZGUoVHlwZWQucHJvdG90eXBlLCBUWVBFRCwgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZC5wcm90b3R5cGUsIFZJRVcsIHRydWUpO1xuICB9IGVsc2UgQ09OU1RSID0gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBQlY6ICAgIEFCVixcbiAgQ09OU1RSOiBDT05TVFIsXG4gIFRZUEVEOiAgVFlQRUQsXG4gIFZJRVc6ICAgVklFV1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkdHlwZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3R5cGVkJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCB0b0ludGVnZXIgICAgICA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIHRvTGVuZ3RoICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnT1BOICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGFycmF5RmlsbCAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZmlsbCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgQVJSQVlfQlVGRkVSICAgPSAnQXJyYXlCdWZmZXInXG4gICwgREFUQV9WSUVXICAgICAgPSAnRGF0YVZpZXcnXG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIFdST05HX0xFTkdUSCAgID0gJ1dyb25nIGxlbmd0aCEnXG4gICwgV1JPTkdfSU5ERVggICAgPSAnV3JvbmcgaW5kZXghJ1xuICAsICRBcnJheUJ1ZmZlciAgID0gZ2xvYmFsW0FSUkFZX0JVRkZFUl1cbiAgLCAkRGF0YVZpZXcgICAgICA9IGdsb2JhbFtEQVRBX1ZJRVddXG4gICwgTWF0aCAgICAgICAgICAgPSBnbG9iYWwuTWF0aFxuICAsIFJhbmdlRXJyb3IgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcbiAgLCBJbmZpbml0eSAgICAgICA9IGdsb2JhbC5JbmZpbml0eVxuICAsIEJhc2VCdWZmZXIgICAgID0gJEFycmF5QnVmZmVyXG4gICwgYWJzICAgICAgICAgICAgPSBNYXRoLmFic1xuICAsIHBvdyAgICAgICAgICAgID0gTWF0aC5wb3dcbiAgLCBmbG9vciAgICAgICAgICA9IE1hdGguZmxvb3JcbiAgLCBsb2cgICAgICAgICAgICA9IE1hdGgubG9nXG4gICwgTE4yICAgICAgICAgICAgPSBNYXRoLkxOMlxuICAsIEJVRkZFUiAgICAgICAgID0gJ2J1ZmZlcidcbiAgLCBCWVRFX0xFTkdUSCAgICA9ICdieXRlTGVuZ3RoJ1xuICAsIEJZVEVfT0ZGU0VUICAgID0gJ2J5dGVPZmZzZXQnXG4gICwgJEJVRkZFUiAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfYicgOiBCVUZGRVJcbiAgLCAkTEVOR1RIICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19sJyA6IEJZVEVfTEVOR1RIXG4gICwgJE9GRlNFVCAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfbycgOiBCWVRFX09GRlNFVDtcblxuLy8gSUVFRTc1NCBjb252ZXJzaW9ucyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2llZWU3NTRcbnZhciBwYWNrSUVFRTc1NCA9IGZ1bmN0aW9uKHZhbHVlLCBtTGVuLCBuQnl0ZXMpe1xuICB2YXIgYnVmZmVyID0gQXJyYXkobkJ5dGVzKVxuICAgICwgZUxlbiAgID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gICAgLCBlTWF4ICAgPSAoMSA8PCBlTGVuKSAtIDFcbiAgICAsIGVCaWFzICA9IGVNYXggPj4gMVxuICAgICwgcnQgICAgID0gbUxlbiA9PT0gMjMgPyBwb3coMiwgLTI0KSAtIHBvdygyLCAtNzcpIDogMFxuICAgICwgaSAgICAgID0gMFxuICAgICwgcyAgICAgID0gdmFsdWUgPCAwIHx8IHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDAgPyAxIDogMFxuICAgICwgZSwgbSwgYztcbiAgdmFsdWUgPSBhYnModmFsdWUpXG4gIGlmKHZhbHVlICE9IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSl7XG4gICAgbSA9IHZhbHVlICE9IHZhbHVlID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IGZsb29yKGxvZyh2YWx1ZSkgLyBMTjIpO1xuICAgIGlmKHZhbHVlICogKGMgPSBwb3coMiwgLWUpKSA8IDEpe1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZihlICsgZUJpYXMgPj0gMSl7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogcG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmKHZhbHVlICogYyA+PSAyKXtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG4gICAgaWYoZSArIGVCaWFzID49IGVNYXgpe1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYoZSArIGVCaWFzID49IDEpe1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIHBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIHBvdygyLCBlQmlhcyAtIDEpICogcG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG4gIGZvcig7IG1MZW4gPj0gODsgYnVmZmVyW2krK10gPSBtICYgMjU1LCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcbiAgZSA9IGUgPDwgbUxlbiB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yKDsgZUxlbiA+IDA7IGJ1ZmZlcltpKytdID0gZSAmIDI1NSwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG4gIGJ1ZmZlclstLWldIHw9IHMgKiAxMjg7XG4gIHJldHVybiBidWZmZXI7XG59O1xudmFyIHVucGFja0lFRUU3NTQgPSBmdW5jdGlvbihidWZmZXIsIG1MZW4sIG5CeXRlcyl7XG4gIHZhciBlTGVuICA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICAgICwgZU1heCAgPSAoMSA8PCBlTGVuKSAtIDFcbiAgICAsIGVCaWFzID0gZU1heCA+PiAxXG4gICAgLCBuQml0cyA9IGVMZW4gLSA3XG4gICAgLCBpICAgICA9IG5CeXRlcyAtIDFcbiAgICAsIHMgICAgID0gYnVmZmVyW2ktLV1cbiAgICAsIGUgICAgID0gcyAmIDEyN1xuICAgICwgbTtcbiAgcyA+Pj0gNztcbiAgZm9yKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltpXSwgaS0tLCBuQml0cyAtPSA4KTtcbiAgbSA9IGUgJiAoMSA8PCAtbkJpdHMpIC0gMTtcbiAgZSA+Pj0gLW5CaXRzO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW2ldLCBpLS0sIG5CaXRzIC09IDgpO1xuICBpZihlID09PSAwKXtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYoZSA9PT0gZU1heCl7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiBzID8gLUluZmluaXR5IDogSW5maW5pdHk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBwb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfSByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIHBvdygyLCBlIC0gbUxlbik7XG59O1xuXG52YXIgdW5wYWNrSTMyID0gZnVuY3Rpb24oYnl0ZXMpe1xuICByZXR1cm4gYnl0ZXNbM10gPDwgMjQgfCBieXRlc1syXSA8PCAxNiB8IGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcbn07XG52YXIgcGFja0k4ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gW2l0ICYgMHhmZl07XG59O1xudmFyIHBhY2tJMTYgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZl07XG59O1xudmFyIHBhY2tJMzIgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBbaXQgJiAweGZmLCBpdCA+PiA4ICYgMHhmZiwgaXQgPj4gMTYgJiAweGZmLCBpdCA+PiAyNCAmIDB4ZmZdO1xufTtcbnZhciBwYWNrRjY0ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gcGFja0lFRUU3NTQoaXQsIDUyLCA4KTtcbn07XG52YXIgcGFja0YzMiA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHBhY2tJRUVFNzU0KGl0LCAyMywgNCk7XG59O1xuXG52YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24oQywga2V5LCBpbnRlcm5hbCl7XG4gIGRQKENbUFJPVE9UWVBFXSwga2V5LCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpc1tpbnRlcm5hbF07IH19KTtcbn07XG5cbnZhciBnZXQgPSBmdW5jdGlvbih2aWV3LCBieXRlcywgaW5kZXgsIGlzTGl0dGxlRW5kaWFuKXtcbiAgdmFyIG51bUluZGV4ID0gK2luZGV4XG4gICAgLCBpbnRJbmRleCA9IHRvSW50ZWdlcihudW1JbmRleCk7XG4gIGlmKG51bUluZGV4ICE9IGludEluZGV4IHx8IGludEluZGV4IDwgMCB8fCBpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgdmFyIHN0b3JlID0gdmlld1skQlVGRkVSXS5fYlxuICAgICwgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF1cbiAgICAsIHBhY2sgID0gc3RvcmUuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgYnl0ZXMpO1xuICByZXR1cm4gaXNMaXR0bGVFbmRpYW4gPyBwYWNrIDogcGFjay5yZXZlcnNlKCk7XG59O1xudmFyIHNldCA9IGZ1bmN0aW9uKHZpZXcsIGJ5dGVzLCBpbmRleCwgY29udmVyc2lvbiwgdmFsdWUsIGlzTGl0dGxlRW5kaWFuKXtcbiAgdmFyIG51bUluZGV4ID0gK2luZGV4XG4gICAgLCBpbnRJbmRleCA9IHRvSW50ZWdlcihudW1JbmRleCk7XG4gIGlmKG51bUluZGV4ICE9IGludEluZGV4IHx8IGludEluZGV4IDwgMCB8fCBpbnRJbmRleCArIGJ5dGVzID4gdmlld1skTEVOR1RIXSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0lOREVYKTtcbiAgdmFyIHN0b3JlID0gdmlld1skQlVGRkVSXS5fYlxuICAgICwgc3RhcnQgPSBpbnRJbmRleCArIHZpZXdbJE9GRlNFVF1cbiAgICAsIHBhY2sgID0gY29udmVyc2lvbigrdmFsdWUpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgYnl0ZXM7IGkrKylzdG9yZVtzdGFydCArIGldID0gcGFja1tpc0xpdHRsZUVuZGlhbiA/IGkgOiBieXRlcyAtIGkgLSAxXTtcbn07XG5cbnZhciB2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzID0gZnVuY3Rpb24odGhhdCwgbGVuZ3RoKXtcbiAgYW5JbnN0YW5jZSh0aGF0LCAkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG4gIHZhciBudW1iZXJMZW5ndGggPSArbGVuZ3RoXG4gICAgLCBieXRlTGVuZ3RoICAgPSB0b0xlbmd0aChudW1iZXJMZW5ndGgpO1xuICBpZihudW1iZXJMZW5ndGggIT0gYnl0ZUxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gIHJldHVybiBieXRlTGVuZ3RoO1xufTtcblxuaWYoISR0eXBlZC5BQlYpe1xuICAkQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiBBcnJheUJ1ZmZlcihsZW5ndGgpe1xuICAgIHZhciBieXRlTGVuZ3RoID0gdmFsaWRhdGVBcnJheUJ1ZmZlckFyZ3VtZW50cyh0aGlzLCBsZW5ndGgpO1xuICAgIHRoaXMuX2IgICAgICAgPSBhcnJheUZpbGwuY2FsbChBcnJheShieXRlTGVuZ3RoKSwgMCk7XG4gICAgdGhpc1skTEVOR1RIXSA9IGJ5dGVMZW5ndGg7XG4gIH07XG5cbiAgJERhdGFWaWV3ID0gZnVuY3Rpb24gRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICREYXRhVmlldywgREFUQV9WSUVXKTtcbiAgICBhbkluc3RhbmNlKGJ1ZmZlciwgJEFycmF5QnVmZmVyLCBEQVRBX1ZJRVcpO1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBidWZmZXJbJExFTkdUSF1cbiAgICAgICwgb2Zmc2V0ICAgICAgID0gdG9JbnRlZ2VyKGJ5dGVPZmZzZXQpO1xuICAgIGlmKG9mZnNldCA8IDAgfHwgb2Zmc2V0ID4gYnVmZmVyTGVuZ3RoKXRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG9mZnNldCEnKTtcbiAgICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gYnVmZmVyTGVuZ3RoIC0gb2Zmc2V0IDogdG9MZW5ndGgoYnl0ZUxlbmd0aCk7XG4gICAgaWYob2Zmc2V0ICsgYnl0ZUxlbmd0aCA+IGJ1ZmZlckxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgdGhpc1skQlVGRkVSXSA9IGJ1ZmZlcjtcbiAgICB0aGlzWyRPRkZTRVRdID0gb2Zmc2V0O1xuICAgIHRoaXNbJExFTkdUSF0gPSBieXRlTGVuZ3RoO1xuICB9O1xuXG4gIGlmKERFU0NSSVBUT1JTKXtcbiAgICBhZGRHZXR0ZXIoJEFycmF5QnVmZmVyLCBCWVRFX0xFTkdUSCwgJ19sJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQlVGRkVSLCAnX2InKTtcbiAgICBhZGRHZXR0ZXIoJERhdGFWaWV3LCBCWVRFX0xFTkdUSCwgJ19sJyk7XG4gICAgYWRkR2V0dGVyKCREYXRhVmlldywgQllURV9PRkZTRVQsICdfbycpO1xuICB9XG5cbiAgcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcbiAgICBnZXRJbnQ4OiBmdW5jdGlvbiBnZXRJbnQ4KGJ5dGVPZmZzZXQpe1xuICAgICAgcmV0dXJuIGdldCh0aGlzLCAxLCBieXRlT2Zmc2V0KVswXSA8PCAyNCA+PiAyNDtcbiAgICB9LFxuICAgIGdldFVpbnQ4OiBmdW5jdGlvbiBnZXRVaW50OChieXRlT2Zmc2V0KXtcbiAgICAgIHJldHVybiBnZXQodGhpcywgMSwgYnl0ZU9mZnNldClbMF07XG4gICAgfSxcbiAgICBnZXRJbnQxNjogZnVuY3Rpb24gZ2V0SW50MTYoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuICAgICAgcmV0dXJuIChieXRlc1sxXSA8PCA4IHwgYnl0ZXNbMF0pIDw8IDE2ID4+IDE2O1xuICAgIH0sXG4gICAgZ2V0VWludDE2OiBmdW5jdGlvbiBnZXRVaW50MTYoYnl0ZU9mZnNldCAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHZhciBieXRlcyA9IGdldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBhcmd1bWVudHNbMV0pO1xuICAgICAgcmV0dXJuIGJ5dGVzWzFdIDw8IDggfCBieXRlc1swXTtcbiAgICB9LFxuICAgIGdldEludDMyOiBmdW5jdGlvbiBnZXRJbnQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSk7XG4gICAgfSxcbiAgICBnZXRVaW50MzI6IGZ1bmN0aW9uIGdldFVpbnQzMihieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0kzMihnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSkgPj4+IDA7XG4gICAgfSxcbiAgICBnZXRGbG9hdDMyOiBmdW5jdGlvbiBnZXRGbG9hdDMyKGJ5dGVPZmZzZXQgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICByZXR1cm4gdW5wYWNrSUVFRTc1NChnZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgYXJndW1lbnRzWzFdKSwgMjMsIDQpO1xuICAgIH0sXG4gICAgZ2V0RmxvYXQ2NDogZnVuY3Rpb24gZ2V0RmxvYXQ2NChieXRlT2Zmc2V0IC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgcmV0dXJuIHVucGFja0lFRUU3NTQoZ2V0KHRoaXMsIDgsIGJ5dGVPZmZzZXQsIGFyZ3VtZW50c1sxXSksIDUyLCA4KTtcbiAgICB9LFxuICAgIHNldEludDg6IGZ1bmN0aW9uIHNldEludDgoYnl0ZU9mZnNldCwgdmFsdWUpe1xuICAgICAgc2V0KHRoaXMsIDEsIGJ5dGVPZmZzZXQsIHBhY2tJOCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgIHNldCh0aGlzLCAxLCBieXRlT2Zmc2V0LCBwYWNrSTgsIHZhbHVlKTtcbiAgICB9LFxuICAgIHNldEludDE2OiBmdW5jdGlvbiBzZXRJbnQxNihieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCAyLCBieXRlT2Zmc2V0LCBwYWNrSTE2LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9LFxuICAgIHNldFVpbnQxNjogZnVuY3Rpb24gc2V0VWludDE2KGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDIsIGJ5dGVPZmZzZXQsIHBhY2tJMTYsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0SW50MzI6IGZ1bmN0aW9uIHNldEludDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tJMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0VWludDMyOiBmdW5jdGlvbiBzZXRVaW50MzIoYnl0ZU9mZnNldCwgdmFsdWUgLyosIGxpdHRsZUVuZGlhbiAqLyl7XG4gICAgICBzZXQodGhpcywgNCwgYnl0ZU9mZnNldCwgcGFja0kzMiwgdmFsdWUsIGFyZ3VtZW50c1syXSk7XG4gICAgfSxcbiAgICBzZXRGbG9hdDMyOiBmdW5jdGlvbiBzZXRGbG9hdDMyKGJ5dGVPZmZzZXQsIHZhbHVlIC8qLCBsaXR0bGVFbmRpYW4gKi8pe1xuICAgICAgc2V0KHRoaXMsIDQsIGJ5dGVPZmZzZXQsIHBhY2tGMzIsIHZhbHVlLCBhcmd1bWVudHNbMl0pO1xuICAgIH0sXG4gICAgc2V0RmxvYXQ2NDogZnVuY3Rpb24gc2V0RmxvYXQ2NChieXRlT2Zmc2V0LCB2YWx1ZSAvKiwgbGl0dGxlRW5kaWFuICovKXtcbiAgICAgIHNldCh0aGlzLCA4LCBieXRlT2Zmc2V0LCBwYWNrRjY0LCB2YWx1ZSwgYXJndW1lbnRzWzJdKTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgaWYoIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3ICRBcnJheUJ1ZmZlcjsgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIH0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyAkQXJyYXlCdWZmZXIoLjUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICB9KSl7XG4gICAgJEFycmF5QnVmZmVyID0gZnVuY3Rpb24gQXJyYXlCdWZmZXIobGVuZ3RoKXtcbiAgICAgIHJldHVybiBuZXcgQmFzZUJ1ZmZlcih2YWxpZGF0ZUFycmF5QnVmZmVyQXJndW1lbnRzKHRoaXMsIGxlbmd0aCkpO1xuICAgIH07XG4gICAgdmFyIEFycmF5QnVmZmVyUHJvdG8gPSAkQXJyYXlCdWZmZXJbUFJPVE9UWVBFXSA9IEJhc2VCdWZmZXJbUFJPVE9UWVBFXTtcbiAgICBmb3IodmFyIGtleXMgPSBnT1BOKEJhc2VCdWZmZXIpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7ICl7XG4gICAgICBpZighKChrZXkgPSBrZXlzW2orK10pIGluICRBcnJheUJ1ZmZlcikpaGlkZSgkQXJyYXlCdWZmZXIsIGtleSwgQmFzZUJ1ZmZlcltrZXldKTtcbiAgICB9O1xuICAgIGlmKCFMSUJSQVJZKUFycmF5QnVmZmVyUHJvdG8uY29uc3RydWN0b3IgPSAkQXJyYXlCdWZmZXI7XG4gIH1cbiAgLy8gaU9TIFNhZmFyaSA3LnggYnVnXG4gIHZhciB2aWV3ID0gbmV3ICREYXRhVmlldyhuZXcgJEFycmF5QnVmZmVyKDIpKVxuICAgICwgJHNldEludDggPSAkRGF0YVZpZXdbUFJPVE9UWVBFXS5zZXRJbnQ4O1xuICB2aWV3LnNldEludDgoMCwgMjE0NzQ4MzY0OCk7XG4gIHZpZXcuc2V0SW50OCgxLCAyMTQ3NDgzNjQ5KTtcbiAgaWYodmlldy5nZXRJbnQ4KDApIHx8ICF2aWV3LmdldEludDgoMSkpcmVkZWZpbmVBbGwoJERhdGFWaWV3W1BST1RPVFlQRV0sIHtcbiAgICBzZXRJbnQ4OiBmdW5jdGlvbiBzZXRJbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH0sXG4gICAgc2V0VWludDg6IGZ1bmN0aW9uIHNldFVpbnQ4KGJ5dGVPZmZzZXQsIHZhbHVlKXtcbiAgICAgICRzZXRJbnQ4LmNhbGwodGhpcywgYnl0ZU9mZnNldCwgdmFsdWUgPDwgMjQgPj4gMjQpO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59XG5zZXRUb1N0cmluZ1RhZygkQXJyYXlCdWZmZXIsIEFSUkFZX0JVRkZFUik7XG5zZXRUb1N0cmluZ1RhZygkRGF0YVZpZXcsIERBVEFfVklFVyk7XG5oaWRlKCREYXRhVmlld1tQUk9UT1RZUEVdLCAkdHlwZWQuVklFVywgdHJ1ZSk7XG5leHBvcnRzW0FSUkFZX0JVRkZFUl0gPSAkQXJyYXlCdWZmZXI7XG5leHBvcnRzW0RBVEFfVklFV10gPSAkRGF0YVZpZXc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdHlwZWQtYnVmZmVyLmpzXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX3R5cGVkJykuQUJWLCB7XG4gIERhdGFWaWV3OiByZXF1aXJlKCcuL190eXBlZC1idWZmZXInKS5EYXRhVmlld1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZGF0YS12aWV3LmpzXG4gKiovIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50OCcsIDEsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gSW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDgtYXJyYXkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5pZihyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpKXtcbiAgdmFyIExJQlJBUlkgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgICAsIGdsb2JhbCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAgICwgZmFpbHMgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgICAsICRleHBvcnQgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAgICwgJHR5cGVkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3R5cGVkJylcbiAgICAsICRidWZmZXIgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190eXBlZC1idWZmZXInKVxuICAgICwgY3R4ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICAgLCBhbkluc3RhbmNlICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAgICwgcHJvcGVydHlEZXNjICAgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAgICwgaGlkZSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAgICwgcmVkZWZpbmVBbGwgICAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICAgLCB0b0ludGVnZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICAgLCB0b0xlbmd0aCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgICAsIHRvSW5kZXggICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpXG4gICAgLCB0b1ByaW1pdGl2ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgICAsIGhhcyAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAgICwgc2FtZSAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3NhbWUtdmFsdWUnKVxuICAgICwgY2xhc3NvZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAgICwgaXNPYmplY3QgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICAgLCB0b09iamVjdCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgICAsIGlzQXJyYXlJdGVyICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgICAsIGNyZWF0ZSAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgICAsIGdldFByb3RvdHlwZU9mICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgICAsIGdPUE4gICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgICAsIGdldEl0ZXJGbiAgICAgICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICAgLCB1aWQgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgICAsIHdrcyAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAgICwgY3JlYXRlQXJyYXlNZXRob2QgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKVxuICAgICwgY3JlYXRlQXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJylcbiAgICAsIHNwZWNpZXNDb25zdHJ1Y3RvciAgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgICAsIEFycmF5SXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICAgLCBJdGVyYXRvcnMgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgICAsICRpdGVyRGV0ZWN0ICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpXG4gICAgLCBzZXRTcGVjaWVzICAgICAgICAgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAgICwgYXJyYXlGaWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZpbGwnKVxuICAgICwgYXJyYXlDb3B5V2l0aGluICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWNvcHktd2l0aGluJylcbiAgICAsICREUCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAgICwgJEdPUEQgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgICAsIGRQICAgICAgICAgICAgICAgICAgPSAkRFAuZlxuICAgICwgZ09QRCAgICAgICAgICAgICAgICA9ICRHT1BELmZcbiAgICAsIFJhbmdlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuUmFuZ2VFcnJvclxuICAgICwgVHlwZUVycm9yICAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgICAsIFVpbnQ4QXJyYXkgICAgICAgICAgPSBnbG9iYWwuVWludDhBcnJheVxuICAgICwgQVJSQVlfQlVGRkVSICAgICAgICA9ICdBcnJheUJ1ZmZlcidcbiAgICAsIFNIQVJFRF9CVUZGRVIgICAgICAgPSAnU2hhcmVkJyArIEFSUkFZX0JVRkZFUlxuICAgICwgQllURVNfUEVSX0VMRU1FTlQgICA9ICdCWVRFU19QRVJfRUxFTUVOVCdcbiAgICAsIFBST1RPVFlQRSAgICAgICAgICAgPSAncHJvdG90eXBlJ1xuICAgICwgQXJyYXlQcm90byAgICAgICAgICA9IEFycmF5W1BST1RPVFlQRV1cbiAgICAsICRBcnJheUJ1ZmZlciAgICAgICAgPSAkYnVmZmVyLkFycmF5QnVmZmVyXG4gICAgLCAkRGF0YVZpZXcgICAgICAgICAgID0gJGJ1ZmZlci5EYXRhVmlld1xuICAgICwgYXJyYXlGb3JFYWNoICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDApXG4gICAgLCBhcnJheUZpbHRlciAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoMilcbiAgICAsIGFycmF5U29tZSAgICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCgzKVxuICAgICwgYXJyYXlFdmVyeSAgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDQpXG4gICAgLCBhcnJheUZpbmQgICAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcbiAgICAsIGFycmF5RmluZEluZGV4ICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAgICwgYXJyYXlJbmNsdWRlcyAgICAgICA9IGNyZWF0ZUFycmF5SW5jbHVkZXModHJ1ZSlcbiAgICAsIGFycmF5SW5kZXhPZiAgICAgICAgPSBjcmVhdGVBcnJheUluY2x1ZGVzKGZhbHNlKVxuICAgICwgYXJyYXlWYWx1ZXMgICAgICAgICA9IEFycmF5SXRlcmF0b3JzLnZhbHVlc1xuICAgICwgYXJyYXlLZXlzICAgICAgICAgICA9IEFycmF5SXRlcmF0b3JzLmtleXNcbiAgICAsIGFycmF5RW50cmllcyAgICAgICAgPSBBcnJheUl0ZXJhdG9ycy5lbnRyaWVzXG4gICAgLCBhcnJheUxhc3RJbmRleE9mICAgID0gQXJyYXlQcm90by5sYXN0SW5kZXhPZlxuICAgICwgYXJyYXlSZWR1Y2UgICAgICAgICA9IEFycmF5UHJvdG8ucmVkdWNlXG4gICAgLCBhcnJheVJlZHVjZVJpZ2h0ICAgID0gQXJyYXlQcm90by5yZWR1Y2VSaWdodFxuICAgICwgYXJyYXlKb2luICAgICAgICAgICA9IEFycmF5UHJvdG8uam9pblxuICAgICwgYXJyYXlTb3J0ICAgICAgICAgICA9IEFycmF5UHJvdG8uc29ydFxuICAgICwgYXJyYXlTbGljZSAgICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2VcbiAgICAsIGFycmF5VG9TdHJpbmcgICAgICAgPSBBcnJheVByb3RvLnRvU3RyaW5nXG4gICAgLCBhcnJheVRvTG9jYWxlU3RyaW5nID0gQXJyYXlQcm90by50b0xvY2FsZVN0cmluZ1xuICAgICwgSVRFUkFUT1IgICAgICAgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAgICwgVEFHICAgICAgICAgICAgICAgICA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAgICwgVFlQRURfQ09OU1RSVUNUT1IgICA9IHVpZCgndHlwZWRfY29uc3RydWN0b3InKVxuICAgICwgREVGX0NPTlNUUlVDVE9SICAgICA9IHVpZCgnZGVmX2NvbnN0cnVjdG9yJylcbiAgICAsIEFMTF9DT05TVFJVQ1RPUlMgICAgPSAkdHlwZWQuQ09OU1RSXG4gICAgLCBUWVBFRF9BUlJBWSAgICAgICAgID0gJHR5cGVkLlRZUEVEXG4gICAgLCBWSUVXICAgICAgICAgICAgICAgID0gJHR5cGVkLlZJRVdcbiAgICAsIFdST05HX0xFTkdUSCAgICAgICAgPSAnV3JvbmcgbGVuZ3RoISc7XG5cbiAgdmFyICRtYXAgPSBjcmVhdGVBcnJheU1ldGhvZCgxLCBmdW5jdGlvbihPLCBsZW5ndGgpe1xuICAgIHJldHVybiBhbGxvY2F0ZShzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSwgbGVuZ3RoKTtcbiAgfSk7XG5cbiAgdmFyIExJVFRMRV9FTkRJQU4gPSBmYWlscyhmdW5jdGlvbigpe1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShuZXcgVWludDE2QXJyYXkoWzFdKS5idWZmZXIpWzBdID09PSAxO1xuICB9KTtcblxuICB2YXIgRk9SQ0VEX1NFVCA9ICEhVWludDhBcnJheSAmJiAhIVVpbnQ4QXJyYXlbUFJPVE9UWVBFXS5zZXQgJiYgZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgVWludDhBcnJheSgxKS5zZXQoe30pO1xuICB9KTtcblxuICB2YXIgc3RyaWN0VG9MZW5ndGggPSBmdW5jdGlvbihpdCwgU0FNRSl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoV1JPTkdfTEVOR1RIKTtcbiAgICB2YXIgbnVtYmVyID0gK2l0XG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0KTtcbiAgICBpZihTQU1FICYmICFzYW1lKG51bWJlciwgbGVuZ3RoKSl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcblxuICB2YXIgdG9PZmZzZXQgPSBmdW5jdGlvbihpdCwgQllURVMpe1xuICAgIHZhciBvZmZzZXQgPSB0b0ludGVnZXIoaXQpO1xuICAgIGlmKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICUgQllURVMpdGhyb3cgUmFuZ2VFcnJvcignV3Jvbmcgb2Zmc2V0IScpO1xuICAgIHJldHVybiBvZmZzZXQ7XG4gIH07XG5cbiAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24oaXQpe1xuICAgIGlmKGlzT2JqZWN0KGl0KSAmJiBUWVBFRF9BUlJBWSBpbiBpdClyZXR1cm4gaXQ7XG4gICAgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSB0eXBlZCBhcnJheSEnKTtcbiAgfTtcblxuICB2YXIgYWxsb2NhdGUgPSBmdW5jdGlvbihDLCBsZW5ndGgpe1xuICAgIGlmKCEoaXNPYmplY3QoQykgJiYgVFlQRURfQ09OU1RSVUNUT1IgaW4gQykpe1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJdCBpcyBub3QgYSB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvciEnKTtcbiAgICB9IHJldHVybiBuZXcgQyhsZW5ndGgpO1xuICB9O1xuXG4gIHZhciBzcGVjaWVzRnJvbUxpc3QgPSBmdW5jdGlvbihPLCBsaXN0KXtcbiAgICByZXR1cm4gZnJvbUxpc3Qoc3BlY2llc0NvbnN0cnVjdG9yKE8sIE9bREVGX0NPTlNUUlVDVE9SXSksIGxpc3QpO1xuICB9O1xuXG4gIHZhciBmcm9tTGlzdCA9IGZ1bmN0aW9uKEMsIGxpc3Qpe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoXG4gICAgICAsIHJlc3VsdCA9IGFsbG9jYXRlKEMsIGxlbmd0aCk7XG4gICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGxpc3RbaW5kZXgrK107XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgYWRkR2V0dGVyID0gZnVuY3Rpb24oaXQsIGtleSwgaW50ZXJuYWwpe1xuICAgIGRQKGl0LCBrZXksIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLl9kW2ludGVybmFsXTsgfX0pO1xuICB9O1xuXG4gIHZhciAkZnJvbSA9IGZ1bmN0aW9uIGZyb20oc291cmNlIC8qLCBtYXBmbiwgdGhpc0FyZyAqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChzb3VyY2UpXG4gICAgICAsIGFMZW4gICAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGksIGxlbmd0aCwgdmFsdWVzLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIWlzQXJyYXlJdGVyKGl0ZXJGbikpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHZhbHVlcyA9IFtdLCBpID0gMDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpKyspe1xuICAgICAgICB2YWx1ZXMucHVzaChzdGVwLnZhbHVlKTtcbiAgICAgIH0gTyA9IHZhbHVlcztcbiAgICB9XG4gICAgaWYobWFwcGluZyAmJiBhTGVuID4gMiltYXBmbiA9IGN0eChtYXBmbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICBmb3IoaSA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSwgcmVzdWx0ID0gYWxsb2NhdGUodGhpcywgbGVuZ3RoKTsgbGVuZ3RoID4gaTsgaSsrKXtcbiAgICAgIHJlc3VsdFtpXSA9IG1hcHBpbmcgPyBtYXBmbihPW2ldLCBpKSA6IE9baV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyICRvZiA9IGZ1bmN0aW9uIG9mKC8qLi4uaXRlbXMqLyl7XG4gICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBhbGxvY2F0ZSh0aGlzLCBsZW5ndGgpO1xuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBpT1MgU2FmYXJpIDYueCBmYWlscyBoZXJlXG4gIHZhciBUT19MT0NBTEVfQlVHID0gISFVaW50OEFycmF5ICYmIGZhaWxzKGZ1bmN0aW9uKCl7IGFycmF5VG9Mb2NhbGVTdHJpbmcuY2FsbChuZXcgVWludDhBcnJheSgxKSk7IH0pO1xuXG4gIHZhciAkdG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b0xvY2FsZVN0cmluZygpe1xuICAgIHJldHVybiBhcnJheVRvTG9jYWxlU3RyaW5nLmFwcGx5KFRPX0xPQ0FMRV9CVUcgPyBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcykpIDogdmFsaWRhdGUodGhpcyksIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgdmFyIHByb3RvID0ge1xuICAgIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCAvKiwgZW5kICovKXtcbiAgICAgIHJldHVybiBhcnJheUNvcHlXaXRoaW4uY2FsbCh2YWxpZGF0ZSh0aGlzKSwgdGFyZ2V0LCBzdGFydCwgYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4gLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5RXZlcnkodmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZpbGw6IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0LCBlbmQgKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlGaWxsLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gc3BlY2llc0Zyb21MaXN0KHRoaXMsIGFycmF5RmlsdGVyKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLFxuICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCkpO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gZmluZChwcmVkaWNhdGUgLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5RmluZCh2YWxpZGF0ZSh0aGlzKSwgcHJlZGljYXRlLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChwcmVkaWNhdGUgLyosIHRoaXNBcmcgKi8pe1xuICAgICAgcmV0dXJuIGFycmF5RmluZEluZGV4KHZhbGlkYXRlKHRoaXMpLCBwcmVkaWNhdGUsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICBhcnJheUZvckVhY2godmFsaWRhdGUodGhpcyksIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovKXtcbiAgICAgIHJldHVybiBhcnJheUluZGV4T2YodmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8pe1xuICAgICAgcmV0dXJuIGFycmF5SW5jbHVkZXModmFsaWRhdGUodGhpcyksIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5Sm9pbi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIGxhc3RJbmRleE9mOiBmdW5jdGlvbiBsYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8peyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICByZXR1cm4gYXJyYXlMYXN0SW5kZXhPZi5hcHBseSh2YWxpZGF0ZSh0aGlzKSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gbWFwKG1hcGZuIC8qLCB0aGlzQXJnICovKXtcbiAgICAgIHJldHVybiAkbWFwKHZhbGlkYXRlKHRoaXMpLCBtYXBmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiwgaW5pdGlhbFZhbHVlICovKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgcmV0dXJuIGFycmF5UmVkdWNlLmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmVkdWNlUmlnaHQ6IGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gLyosIGluaXRpYWxWYWx1ZSAqLyl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIHJldHVybiBhcnJheVJlZHVjZVJpZ2h0LmFwcGx5KHZhbGlkYXRlKHRoaXMpLCBhcmd1bWVudHMpO1xuICAgIH0sXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpe1xuICAgICAgdmFyIHRoYXQgICA9IHRoaXNcbiAgICAgICAgLCBsZW5ndGggPSB2YWxpZGF0ZSh0aGF0KS5sZW5ndGhcbiAgICAgICAgLCBtaWRkbGUgPSBNYXRoLmZsb29yKGxlbmd0aCAvIDIpXG4gICAgICAgICwgaW5kZXggID0gMFxuICAgICAgICAsIHZhbHVlO1xuICAgICAgd2hpbGUoaW5kZXggPCBtaWRkbGUpe1xuICAgICAgICB2YWx1ZSAgICAgICAgID0gdGhhdFtpbmRleF07XG4gICAgICAgIHRoYXRbaW5kZXgrK10gPSB0aGF0Wy0tbGVuZ3RoXTtcbiAgICAgICAgdGhhdFtsZW5ndGhdICA9IHZhbHVlO1xuICAgICAgfSByZXR1cm4gdGhhdDtcbiAgICB9LFxuICAgIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbiAvKiwgdGhpc0FyZyAqLyl7XG4gICAgICByZXR1cm4gYXJyYXlTb21lKHZhbGlkYXRlKHRoaXMpLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbil7XG4gICAgICByZXR1cm4gYXJyYXlTb3J0LmNhbGwodmFsaWRhdGUodGhpcyksIGNvbXBhcmVmbik7XG4gICAgfSxcbiAgICBzdWJhcnJheTogZnVuY3Rpb24gc3ViYXJyYXkoYmVnaW4sIGVuZCl7XG4gICAgICB2YXIgTyAgICAgID0gdmFsaWRhdGUodGhpcylcbiAgICAgICAgLCBsZW5ndGggPSBPLmxlbmd0aFxuICAgICAgICAsICRiZWdpbiA9IHRvSW5kZXgoYmVnaW4sIGxlbmd0aCk7XG4gICAgICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3IoTywgT1tERUZfQ09OU1RSVUNUT1JdKSkoXG4gICAgICAgIE8uYnVmZmVyLFxuICAgICAgICBPLmJ5dGVPZmZzZXQgKyAkYmVnaW4gKiBPLkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICB0b0xlbmd0aCgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKSkgLSAkYmVnaW4pXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB2YXIgJHNsaWNlID0gZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCl7XG4gICAgcmV0dXJuIHNwZWNpZXNGcm9tTGlzdCh0aGlzLCBhcnJheVNsaWNlLmNhbGwodmFsaWRhdGUodGhpcyksIHN0YXJ0LCBlbmQpKTtcbiAgfTtcblxuICB2YXIgJHNldCA9IGZ1bmN0aW9uIHNldChhcnJheUxpa2UgLyosIG9mZnNldCAqLyl7XG4gICAgdmFsaWRhdGUodGhpcyk7XG4gICAgdmFyIG9mZnNldCA9IHRvT2Zmc2V0KGFyZ3VtZW50c1sxXSwgMSlcbiAgICAgICwgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICAgICwgc3JjICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aChzcmMubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwO1xuICAgIGlmKGxlbiArIG9mZnNldCA+IGxlbmd0aCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgd2hpbGUoaW5kZXggPCBsZW4pdGhpc1tvZmZzZXQgKyBpbmRleF0gPSBzcmNbaW5kZXgrK107XG4gIH07XG5cbiAgdmFyICRpdGVyYXRvcnMgPSB7XG4gICAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpe1xuICAgICAgcmV0dXJuIGFycmF5RW50cmllcy5jYWxsKHZhbGlkYXRlKHRoaXMpKTtcbiAgICB9LFxuICAgIGtleXM6IGZ1bmN0aW9uIGtleXMoKXtcbiAgICAgIHJldHVybiBhcnJheUtleXMuY2FsbCh2YWxpZGF0ZSh0aGlzKSk7XG4gICAgfSxcbiAgICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcygpe1xuICAgICAgcmV0dXJuIGFycmF5VmFsdWVzLmNhbGwodmFsaWRhdGUodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNUQUluZGV4ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpe1xuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpXG4gICAgICAmJiB0YXJnZXRbVFlQRURfQVJSQVldXG4gICAgICAmJiB0eXBlb2Yga2V5ICE9ICdzeW1ib2wnXG4gICAgICAmJiBrZXkgaW4gdGFyZ2V0XG4gICAgICAmJiBTdHJpbmcoK2tleSkgPT0gU3RyaW5nKGtleSk7XG4gIH07XG4gIHZhciAkZ2V0RGVzYyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSl7XG4gICAgcmV0dXJuIGlzVEFJbmRleCh0YXJnZXQsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpXG4gICAgICA/IHByb3BlcnR5RGVzYygyLCB0YXJnZXRba2V5XSlcbiAgICAgIDogZ09QRCh0YXJnZXQsIGtleSk7XG4gIH07XG4gIHZhciAkc2V0RGVzYyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjKXtcbiAgICBpZihpc1RBSW5kZXgodGFyZ2V0LCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKVxuICAgICAgJiYgaXNPYmplY3QoZGVzYylcbiAgICAgICYmIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgICAgJiYgIWhhcyhkZXNjLCAnZ2V0JylcbiAgICAgICYmICFoYXMoZGVzYywgJ3NldCcpXG4gICAgICAvLyBUT0RPOiBhZGQgdmFsaWRhdGlvbiBkZXNjcmlwdG9yIHcvbyBjYWxsaW5nIGFjY2Vzc29yc1xuICAgICAgJiYgIWRlc2MuY29uZmlndXJhYmxlXG4gICAgICAmJiAoIWhhcyhkZXNjLCAnd3JpdGFibGUnKSB8fCBkZXNjLndyaXRhYmxlKVxuICAgICAgJiYgKCFoYXMoZGVzYywgJ2VudW1lcmFibGUnKSB8fCBkZXNjLmVudW1lcmFibGUpXG4gICAgKXtcbiAgICAgIHRhcmdldFtrZXldID0gZGVzYy52YWx1ZTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSBlbHNlIHJldHVybiBkUCh0YXJnZXQsIGtleSwgZGVzYyk7XG4gIH07XG5cbiAgaWYoIUFMTF9DT05TVFJVQ1RPUlMpe1xuICAgICRHT1BELmYgPSAkZ2V0RGVzYztcbiAgICAkRFAuZiAgID0gJHNldERlc2M7XG4gIH1cblxuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFBTExfQ09OU1RSVUNUT1JTLCAnT2JqZWN0Jywge1xuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldERlc2MsXG4gICAgZGVmaW5lUHJvcGVydHk6ICAgICAgICAgICAkc2V0RGVzY1xuICB9KTtcblxuICBpZihmYWlscyhmdW5jdGlvbigpeyBhcnJheVRvU3RyaW5nLmNhbGwoe30pOyB9KSl7XG4gICAgYXJyYXlUb1N0cmluZyA9IGFycmF5VG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciAkVHlwZWRBcnJheVByb3RvdHlwZSQgPSByZWRlZmluZUFsbCh7fSwgcHJvdG8pO1xuICByZWRlZmluZUFsbCgkVHlwZWRBcnJheVByb3RvdHlwZSQsICRpdGVyYXRvcnMpO1xuICBoaWRlKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgSVRFUkFUT1IsICRpdGVyYXRvcnMudmFsdWVzKTtcbiAgcmVkZWZpbmVBbGwoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCB7XG4gICAgc2xpY2U6ICAgICAgICAgICRzbGljZSxcbiAgICBzZXQ6ICAgICAgICAgICAgJHNldCxcbiAgICBjb25zdHJ1Y3RvcjogICAgZnVuY3Rpb24oKXsgLyogbm9vcCAqLyB9LFxuICAgIHRvU3RyaW5nOiAgICAgICBhcnJheVRvU3RyaW5nLFxuICAgIHRvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmdcbiAgfSk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdidWZmZXInLCAnYicpO1xuICBhZGRHZXR0ZXIoJFR5cGVkQXJyYXlQcm90b3R5cGUkLCAnYnl0ZU9mZnNldCcsICdvJyk7XG4gIGFkZEdldHRlcigkVHlwZWRBcnJheVByb3RvdHlwZSQsICdieXRlTGVuZ3RoJywgJ2wnKTtcbiAgYWRkR2V0dGVyKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgJ2xlbmd0aCcsICdlJyk7XG4gIGRQKCRUeXBlZEFycmF5UHJvdG90eXBlJCwgVEFHLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpc1tUWVBFRF9BUlJBWV07IH1cbiAgfSk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIEJZVEVTLCB3cmFwcGVyLCBDTEFNUEVEKXtcbiAgICBDTEFNUEVEID0gISFDTEFNUEVEO1xuICAgIHZhciBOQU1FICAgICAgID0gS0VZICsgKENMQU1QRUQgPyAnQ2xhbXBlZCcgOiAnJykgKyAnQXJyYXknXG4gICAgICAsIElTTlRfVUlOVDggPSBOQU1FICE9ICdVaW50OEFycmF5J1xuICAgICAgLCBHRVRURVIgICAgID0gJ2dldCcgKyBLRVlcbiAgICAgICwgU0VUVEVSICAgICA9ICdzZXQnICsgS0VZXG4gICAgICAsIFR5cGVkQXJyYXkgPSBnbG9iYWxbTkFNRV1cbiAgICAgICwgQmFzZSAgICAgICA9IFR5cGVkQXJyYXkgfHwge31cbiAgICAgICwgVEFDICAgICAgICA9IFR5cGVkQXJyYXkgJiYgZ2V0UHJvdG90eXBlT2YoVHlwZWRBcnJheSlcbiAgICAgICwgRk9SQ0VEICAgICA9ICFUeXBlZEFycmF5IHx8ICEkdHlwZWQuQUJWXG4gICAgICAsIE8gICAgICAgICAgPSB7fVxuICAgICAgLCBUeXBlZEFycmF5UHJvdG90eXBlID0gVHlwZWRBcnJheSAmJiBUeXBlZEFycmF5W1BST1RPVFlQRV07XG4gICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uKHRoYXQsIGluZGV4KXtcbiAgICAgIHZhciBkYXRhID0gdGhhdC5fZDtcbiAgICAgIHJldHVybiBkYXRhLnZbR0VUVEVSXShpbmRleCAqIEJZVEVTICsgZGF0YS5vLCBMSVRUTEVfRU5ESUFOKTtcbiAgICB9O1xuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbih0aGF0LCBpbmRleCwgdmFsdWUpe1xuICAgICAgdmFyIGRhdGEgPSB0aGF0Ll9kO1xuICAgICAgaWYoQ0xBTVBFRCl2YWx1ZSA9ICh2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpKSA8IDAgPyAwIDogdmFsdWUgPiAweGZmID8gMHhmZiA6IHZhbHVlICYgMHhmZjtcbiAgICAgIGRhdGEudltTRVRURVJdKGluZGV4ICogQllURVMgKyBkYXRhLm8sIHZhbHVlLCBMSVRUTEVfRU5ESUFOKTtcbiAgICB9O1xuICAgIHZhciBhZGRFbGVtZW50ID0gZnVuY3Rpb24odGhhdCwgaW5kZXgpe1xuICAgICAgZFAodGhhdCwgaW5kZXgsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICAgIHJldHVybiBnZXR0ZXIodGhpcywgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICByZXR1cm4gc2V0dGVyKHRoaXMsIGluZGV4LCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKXtcbiAgICAgIFR5cGVkQXJyYXkgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGRhdGEsICRvZmZzZXQsICRsZW5ndGgpe1xuICAgICAgICBhbkluc3RhbmNlKHRoYXQsIFR5cGVkQXJyYXksIE5BTUUsICdfZCcpO1xuICAgICAgICB2YXIgaW5kZXggID0gMFxuICAgICAgICAgICwgb2Zmc2V0ID0gMFxuICAgICAgICAgICwgYnVmZmVyLCBieXRlTGVuZ3RoLCBsZW5ndGgsIGtsYXNzO1xuICAgICAgICBpZighaXNPYmplY3QoZGF0YSkpe1xuICAgICAgICAgIGxlbmd0aCAgICAgPSBzdHJpY3RUb0xlbmd0aChkYXRhLCB0cnVlKVxuICAgICAgICAgIGJ5dGVMZW5ndGggPSBsZW5ndGggKiBCWVRFUztcbiAgICAgICAgICBidWZmZXIgICAgID0gbmV3ICRBcnJheUJ1ZmZlcihieXRlTGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIGlmKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpe1xuICAgICAgICAgIGJ1ZmZlciA9IGRhdGE7XG4gICAgICAgICAgb2Zmc2V0ID0gdG9PZmZzZXQoJG9mZnNldCwgQllURVMpO1xuICAgICAgICAgIHZhciAkbGVuID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICAgIGlmKCRsZW5ndGggPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBpZigkbGVuICUgQllURVMpdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgICAgYnl0ZUxlbmd0aCA9ICRsZW4gLSBvZmZzZXQ7XG4gICAgICAgICAgICBpZihieXRlTGVuZ3RoIDwgMCl0aHJvdyBSYW5nZUVycm9yKFdST05HX0xFTkdUSCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ5dGVMZW5ndGggPSB0b0xlbmd0aCgkbGVuZ3RoKSAqIEJZVEVTO1xuICAgICAgICAgICAgaWYoYnl0ZUxlbmd0aCArIG9mZnNldCA+ICRsZW4pdGhyb3cgUmFuZ2VFcnJvcihXUk9OR19MRU5HVEgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZW5ndGggPSBieXRlTGVuZ3RoIC8gQllURVM7XG4gICAgICAgIH0gZWxzZSBpZihUWVBFRF9BUlJBWSBpbiBkYXRhKXtcbiAgICAgICAgICByZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICRmcm9tLmNhbGwoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaGlkZSh0aGF0LCAnX2QnLCB7XG4gICAgICAgICAgYjogYnVmZmVyLFxuICAgICAgICAgIG86IG9mZnNldCxcbiAgICAgICAgICBsOiBieXRlTGVuZ3RoLFxuICAgICAgICAgIGU6IGxlbmd0aCxcbiAgICAgICAgICB2OiBuZXcgJERhdGFWaWV3KGJ1ZmZlcilcbiAgICAgICAgfSk7XG4gICAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKWFkZEVsZW1lbnQodGhhdCwgaW5kZXgrKyk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUgPSBUeXBlZEFycmF5W1BST1RPVFlQRV0gPSBjcmVhdGUoJFR5cGVkQXJyYXlQcm90b3R5cGUkKTtcbiAgICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywgVHlwZWRBcnJheSk7XG4gICAgfSBlbHNlIGlmKCEkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXtcbiAgICAgIC8vIFY4IHdvcmtzIHdpdGggaXRlcmF0b3JzLCBidXQgZmFpbHMgaW4gbWFueSBvdGhlciBjYXNlc1xuICAgICAgLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQ1NTJcbiAgICAgIG5ldyBUeXBlZEFycmF5KG51bGwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgbmV3IFR5cGVkQXJyYXkoaXRlcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfSwgdHJ1ZSkpe1xuICAgICAgVHlwZWRBcnJheSA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgZGF0YSwgJG9mZnNldCwgJGxlbmd0aCl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhhdCwgVHlwZWRBcnJheSwgTkFNRSk7XG4gICAgICAgIHZhciBrbGFzcztcbiAgICAgICAgLy8gYHdzYCBtb2R1bGUgYnVnLCB0ZW1wb3JhcmlseSByZW1vdmUgdmFsaWRhdGlvbiBsZW5ndGggZm9yIFVpbnQ4QXJyYXlcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnNvY2tldHMvd3MvcHVsbC82NDVcbiAgICAgICAgaWYoIWlzT2JqZWN0KGRhdGEpKXJldHVybiBuZXcgQmFzZShzdHJpY3RUb0xlbmd0aChkYXRhLCBJU05UX1VJTlQ4KSk7XG4gICAgICAgIGlmKGRhdGEgaW5zdGFuY2VvZiAkQXJyYXlCdWZmZXIgfHwgKGtsYXNzID0gY2xhc3NvZihkYXRhKSkgPT0gQVJSQVlfQlVGRkVSIHx8IGtsYXNzID09IFNIQVJFRF9CVUZGRVIpe1xuICAgICAgICAgIHJldHVybiAkbGVuZ3RoICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gbmV3IEJhc2UoZGF0YSwgdG9PZmZzZXQoJG9mZnNldCwgQllURVMpLCAkbGVuZ3RoKVxuICAgICAgICAgICAgOiAkb2Zmc2V0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBuZXcgQmFzZShkYXRhLCB0b09mZnNldCgkb2Zmc2V0LCBCWVRFUykpXG4gICAgICAgICAgICAgIDogbmV3IEJhc2UoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoVFlQRURfQVJSQVkgaW4gZGF0YSlyZXR1cm4gZnJvbUxpc3QoVHlwZWRBcnJheSwgZGF0YSk7XG4gICAgICAgIHJldHVybiAkZnJvbS5jYWxsKFR5cGVkQXJyYXksIGRhdGEpO1xuICAgICAgfSk7XG4gICAgICBhcnJheUZvckVhY2goVEFDICE9PSBGdW5jdGlvbi5wcm90b3R5cGUgPyBnT1BOKEJhc2UpLmNvbmNhdChnT1BOKFRBQykpIDogZ09QTihCYXNlKSwgZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIShrZXkgaW4gVHlwZWRBcnJheSkpaGlkZShUeXBlZEFycmF5LCBrZXksIEJhc2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIFR5cGVkQXJyYXlbUFJPVE9UWVBFXSA9IFR5cGVkQXJyYXlQcm90b3R5cGU7XG4gICAgICBpZighTElCUkFSWSlUeXBlZEFycmF5UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHlwZWRBcnJheTtcbiAgICB9XG4gICAgdmFyICRuYXRpdmVJdGVyYXRvciAgID0gVHlwZWRBcnJheVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICAgICwgQ09SUkVDVF9JVEVSX05BTUUgPSAhISRuYXRpdmVJdGVyYXRvciAmJiAoJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gJ3ZhbHVlcycgfHwgJG5hdGl2ZUl0ZXJhdG9yLm5hbWUgPT0gdW5kZWZpbmVkKVxuICAgICAgLCAkaXRlcmF0b3IgICAgICAgICA9ICRpdGVyYXRvcnMudmFsdWVzO1xuICAgIGhpZGUoVHlwZWRBcnJheSwgVFlQRURfQ09OU1RSVUNUT1IsIHRydWUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVFlQRURfQVJSQVksIE5BTUUpO1xuICAgIGhpZGUoVHlwZWRBcnJheVByb3RvdHlwZSwgVklFVywgdHJ1ZSk7XG4gICAgaGlkZShUeXBlZEFycmF5UHJvdG90eXBlLCBERUZfQ09OU1RSVUNUT1IsIFR5cGVkQXJyYXkpO1xuXG4gICAgaWYoQ0xBTVBFRCA/IG5ldyBUeXBlZEFycmF5KDEpW1RBR10gIT0gTkFNRSA6ICEoVEFHIGluIFR5cGVkQXJyYXlQcm90b3R5cGUpKXtcbiAgICAgIGRQKFR5cGVkQXJyYXlQcm90b3R5cGUsIFRBRywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBOQU1FOyB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPW05BTUVdID0gVHlwZWRBcnJheTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKFR5cGVkQXJyYXkgIT0gQmFzZSksIE8pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlMsIE5BTUUsIHtcbiAgICAgIEJZVEVTX1BFUl9FTEVNRU5UOiBCWVRFUyxcbiAgICAgIGZyb206ICRmcm9tLFxuICAgICAgb2Y6ICRvZlxuICAgIH0pO1xuXG4gICAgaWYoIShCWVRFU19QRVJfRUxFTUVOVCBpbiBUeXBlZEFycmF5UHJvdG90eXBlKSloaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIEJZVEVTX1BFUl9FTEVNRU5ULCBCWVRFUyk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCwgTkFNRSwgcHJvdG8pO1xuXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcblxuICAgICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogRk9SQ0VEX1NFVCwgTkFNRSwge3NldDogJHNldH0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAhQ09SUkVDVF9JVEVSX05BTUUsIE5BTUUsICRpdGVyYXRvcnMpO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoVHlwZWRBcnJheVByb3RvdHlwZS50b1N0cmluZyAhPSBhcnJheVRvU3RyaW5nKSwgTkFNRSwge3RvU3RyaW5nOiBhcnJheVRvU3RyaW5nfSk7XG5cbiAgICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgICBuZXcgVHlwZWRBcnJheSgxKS5zbGljZSgpO1xuICAgIH0pLCBOQU1FLCB7c2xpY2U6ICRzbGljZX0pO1xuXG4gICAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiBbMSwgMl0udG9Mb2NhbGVTdHJpbmcoKSAhPSBuZXcgVHlwZWRBcnJheShbMSwgMl0pLnRvTG9jYWxlU3RyaW5nKClcbiAgICB9KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICAgIFR5cGVkQXJyYXlQcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcuY2FsbChbMSwgMl0pO1xuICAgIH0pKSwgTkFNRSwge3RvTG9jYWxlU3RyaW5nOiAkdG9Mb2NhbGVTdHJpbmd9KTtcblxuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IENPUlJFQ1RfSVRFUl9OQU1FID8gJG5hdGl2ZUl0ZXJhdG9yIDogJGl0ZXJhdG9yO1xuICAgIGlmKCFMSUJSQVJZICYmICFDT1JSRUNUX0lURVJfTkFNRSloaWRlKFR5cGVkQXJyYXlQcm90b3R5cGUsIElURVJBVE9SLCAkaXRlcmF0b3IpO1xuICB9O1xufSBlbHNlIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190eXBlZC1hcnJheS5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQ4JywgMSwgZnVuY3Rpb24oaW5pdCl7XG4gIHJldHVybiBmdW5jdGlvbiBVaW50OEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5LmpzXG4gKiovIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnVWludDgnLCAxLCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQ4Q2xhbXBlZEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0sIHRydWUpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWNsYW1wZWQtYXJyYXkuanNcbiAqKi8iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdJbnQxNicsIDIsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gSW50MTZBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQxNi1hcnJheS5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ1VpbnQxNicsIDIsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gVWludDE2QXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5LmpzXG4gKiovIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnSW50MzInLCA0LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEludDMyQXJyYXkoZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKXtcbiAgICByZXR1cm4gaW5pdCh0aGlzLCBkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpO1xuICB9O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MzItYXJyYXkuanNcbiAqKi8iLCJyZXF1aXJlKCcuL190eXBlZC1hcnJheScpKCdVaW50MzInLCA0LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFVpbnQzMkFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheS5qc1xuICoqLyIsInJlcXVpcmUoJy4vX3R5cGVkLWFycmF5JykoJ0Zsb2F0MzInLCA0LCBmdW5jdGlvbihpbml0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIEZsb2F0MzJBcnJheShkYXRhLCBieXRlT2Zmc2V0LCBsZW5ndGgpe1xuICAgIHJldHVybiBpbml0KHRoaXMsIGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCk7XG4gIH07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5LmpzXG4gKiovIiwicmVxdWlyZSgnLi9fdHlwZWQtYXJyYXknKSgnRmxvYXQ2NCcsIDgsIGZ1bmN0aW9uKGluaXQpe1xuICByZXR1cm4gZnVuY3Rpb24gRmxvYXQ2NEFycmF5KGRhdGEsIGJ5dGVPZmZzZXQsIGxlbmd0aCl7XG4gICAgcmV0dXJuIGluaXQodGhpcywgZGF0YSwgYnl0ZU9mZnNldCwgbGVuZ3RoKTtcbiAgfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmZsb2F0NjQtYXJyYXkuanNcbiAqKi8iLCIvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgckFwcGx5ICAgID0gKHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3QgfHwge30pLmFwcGx5XG4gICwgZkFwcGx5ICAgID0gRnVuY3Rpb24uYXBwbHk7XG4vLyBNUyBFZGdlIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgckFwcGx5KGZ1bmN0aW9uKCl7fSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCl7XG4gICAgdmFyIFQgPSBhRnVuY3Rpb24odGFyZ2V0KVxuICAgICAgLCBMID0gYW5PYmplY3QoYXJndW1lbnRzTGlzdCk7XG4gICAgcmV0dXJuIHJBcHBseSA/IHJBcHBseShULCB0aGlzQXJndW1lbnQsIEwpIDogZkFwcGx5LmNhbGwoVCwgdGhpc0FyZ3VtZW50LCBMKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseS5qc1xuICoqLyIsIi8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcbnZhciAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjcmVhdGUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgYUZ1bmN0aW9uICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGZhaWxzICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgYmluZCAgICAgICA9IHJlcXVpcmUoJy4vX2JpbmQnKVxuICAsIHJDb25zdHJ1Y3QgPSAocmVxdWlyZSgnLi9fZ2xvYmFsJykuUmVmbGVjdCB8fCB7fSkuY29uc3RydWN0O1xuXG4vLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHMgYW5kIGFyZ3VtZW50c0xpc3QgYXJndW1lbnQgaXMgb3B0aW9uYWxcbi8vIEZGIE5pZ2h0bHkgc2V0cyB0aGlyZCBhcmd1bWVudCBhcyBgbmV3LnRhcmdldGAsIGJ1dCBkb2VzIG5vdCBjcmVhdGUgYHRoaXNgIGZyb20gaXRcbnZhciBORVdfVEFSR0VUX0JVRyA9IGZhaWxzKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcbn0pO1xudmFyIEFSR1NfQlVHID0gIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJDb25zdHJ1Y3QoZnVuY3Rpb24oKXt9KTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChORVdfVEFSR0VUX0JVRyB8fCBBUkdTX0JVRyksICdSZWZsZWN0Jywge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyosIG5ld1RhcmdldCovKXtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICBhbk9iamVjdChhcmdzKTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZihBUkdTX0JVRyAmJiAhTkVXX1RBUkdFVF9CVUcpcmV0dXJuIHJDb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzLCBuZXdUYXJnZXQpO1xuICAgIGlmKFRhcmdldCA9PSBuZXdUYXJnZXQpe1xuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBUYXJnZXQ7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKTtcbiAgICB9XG4gICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG4gICAgdmFyIHByb3RvICAgID0gbmV3VGFyZ2V0LnByb3RvdHlwZVxuICAgICAgLCBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpXG4gICAgICAsIHJlc3VsdCAgID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdC5qc1xuICoqLyIsIi8vIDI2LjEuMyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpXG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcblxuLy8gTVMgRWRnZSBoYXMgYnJva2VuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkgLSB0aHJvd2luZyBpbnN0ZWFkIG9mIHJldHVybmluZyBmYWxzZVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoZFAuZih7fSwgMSwge3ZhbHVlOiAxfSksIDEsIHt2YWx1ZTogMn0pO1xufSksICdSZWZsZWN0Jywge1xuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKHByb3BlcnR5S2V5LCB0cnVlKTtcbiAgICBhbk9iamVjdChhdHRyaWJ1dGVzKTtcbiAgICB0cnkge1xuICAgICAgZFAuZih0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuICoqLyIsIi8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGdPUEQgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgdmFyIGRlc2MgPSBnT1BEKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgRW51bWVyYXRlID0gZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gYW5PYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB2YXIga2V5cyA9IHRoaXMuX2sgPSBbXSAgICAgICAvLyBrZXlzXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XG59O1xucmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgICAsIGtleXMgPSB0aGF0Ll9rXG4gICAgLCBrZXk7XG4gIGRvIHtcbiAgICBpZih0aGF0Ll9pID49IGtleXMubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIH0gd2hpbGUoISgoa2V5ID0ga2V5c1t0aGF0Ll9pKytdKSBpbiB0aGF0Ll90KSk7XG4gIHJldHVybiB7dmFsdWU6IGtleSwgZG9uZTogZmFsc2V9O1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KXtcbiAgICByZXR1cm4gbmV3IEVudW1lcmF0ZSh0YXJnZXQpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZS5qc1xuICoqLyIsIi8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcbnZhciBnT1BEICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5LyosIHJlY2VpdmVyKi8pe1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxuICAgICwgZGVzYywgcHJvdG87XG4gIGlmKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKXJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBpZihkZXNjID0gZ09QRC5mKHRhcmdldCwgcHJvcGVydHlLZXkpKXJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICA/IGRlc2MudmFsdWVcbiAgICA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICBpZihpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKXJldHVybiBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcik7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtnZXQ6IGdldH0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzXG4gKiovIiwiLy8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgZ09QRCAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgcmV0dXJuIGdPUEQuZihhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiovIiwiLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBnZXRQcm90byA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHRhcmdldCl7XG4gICAgcmV0dXJuIGdldFByb3RvKGFuT2JqZWN0KHRhcmdldCkpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbiAqKi8iLCIvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanNcbiAqKi8iLCIvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcbnZhciAkZXhwb3J0ICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBhbk9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKHRhcmdldCkgOiB0cnVlO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanNcbiAqKi8iLCIvLyAyNi4xLjExIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7b3duS2V5czogcmVxdWlyZSgnLi9fb3duLWtleXMnKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMuanNcbiAqKi8iLCIvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgZ09QTiAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIFJlZmxlY3QgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCl7XG4gIHZhciBrZXlzICAgICAgID0gZ09QTi5mKGFuT2JqZWN0KGl0KSlcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHJldHVybiBnZXRTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb3duLWtleXMuanNcbiAqKi8iLCIvLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxudmFyICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgYW5PYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCAkcHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICB0cnkge1xuICAgICAgaWYoJHByZXZlbnRFeHRlbnNpb25zKSRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4gKiovIiwiLy8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcbnZhciBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgZ09QRCAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWLyosIHJlY2VpdmVyKi8pe1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXVxuICAgICwgb3duRGVzYyAgPSBnT1BELmYoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXG4gICAgLCBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xuICBpZighb3duRGVzYyl7XG4gICAgaWYoaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKSl7XG4gICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcbiAgfVxuICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xuICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9IGdPUEQuZihyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGNyZWF0ZURlc2MoMCk7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICBkUC5mKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge3NldDogc2V0fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanNcbiAqKi8iLCIvLyAyNi4xLjE0IFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bylcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgc2V0UHJvdG8gPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKTtcblxuaWYoc2V0UHJvdG8pJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90byl7XG4gICAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XG4gICAgdHJ5IHtcbiAgICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJGF0ICAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgYXQ6IGZ1bmN0aW9uIGF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcuYXQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1zdHJpbmctcGFkLXN0YXJ0LWVuZFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRwYWQgICAgPSByZXF1aXJlKCcuL19zdHJpbmctcGFkJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBwYWRTdGFydDogZnVuY3Rpb24gcGFkU3RhcnQobWF4TGVuZ3RoIC8qLCBmaWxsU3RyaW5nID0gJyAnICovKXtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1zdGFydC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHJlcGVhdCAgID0gcmVxdWlyZSgnLi9fc3RyaW5nLXJlcGVhdCcpXG4gICwgZGVmaW5lZCAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KXtcbiAgdmFyIFMgICAgICAgICAgICA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICwgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGhcbiAgICAsIGZpbGxTdHIgICAgICA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKVxuICAgICwgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgaWYoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aCB8fCBmaWxsU3RyID09ICcnKXJldHVybiBTO1xuICB2YXIgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aFxuICAgICwgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICBpZihzdHJpbmdGaWxsZXIubGVuZ3RoID4gZmlsbExlbilzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG4gIHJldHVybiBsZWZ0ID8gc3RyaW5nRmlsbGVyICsgUyA6IFMgKyBzdHJpbmdGaWxsZXI7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLXBhZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXN0cmluZy1wYWQtc3RhcnQtZW5kXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHBhZCAgICA9IHJlcXVpcmUoJy4vX3N0cmluZy1wYWQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZEVuZDogZnVuY3Rpb24gcGFkRW5kKG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgZmFsc2UpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWVuZC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vX3N0cmluZy10cmltJykoJ3RyaW1MZWZ0JywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbUxlZnQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMSk7XG4gIH07XG59LCAndHJpbVN0YXJ0Jyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vX3N0cmluZy10cmltJykoJ3RyaW1SaWdodCcsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1SaWdodCgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAyKTtcbiAgfTtcbn0sICd0cmltRW5kJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL1N0cmluZy5wcm90b3R5cGUubWF0Y2hBbGwvXG52YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGlzUmVnRXhwICAgID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJylcbiAgLCBnZXRGbGFncyAgICA9IHJlcXVpcmUoJy4vX2ZsYWdzJylcbiAgLCBSZWdFeHBQcm90byA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbnZhciAkUmVnRXhwU3RyaW5nSXRlcmF0b3IgPSBmdW5jdGlvbihyZWdleHAsIHN0cmluZyl7XG4gIHRoaXMuX3IgPSByZWdleHA7XG4gIHRoaXMuX3MgPSBzdHJpbmc7XG59O1xuXG5yZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpKCRSZWdFeHBTdHJpbmdJdGVyYXRvciwgJ1JlZ0V4cCBTdHJpbmcnLCBmdW5jdGlvbiBuZXh0KCl7XG4gIHZhciBtYXRjaCA9IHRoaXMuX3IuZXhlYyh0aGlzLl9zKTtcbiAgcmV0dXJuIHt2YWx1ZTogbWF0Y2gsIGRvbmU6IG1hdGNoID09PSBudWxsfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgbWF0Y2hBbGw6IGZ1bmN0aW9uIG1hdGNoQWxsKHJlZ2V4cCl7XG4gICAgZGVmaW5lZCh0aGlzKTtcbiAgICBpZighaXNSZWdFeHAocmVnZXhwKSl0aHJvdyBUeXBlRXJyb3IocmVnZXhwICsgJyBpcyBub3QgYSByZWdleHAhJyk7XG4gICAgdmFyIFMgICAgID0gU3RyaW5nKHRoaXMpXG4gICAgICAsIGZsYWdzID0gJ2ZsYWdzJyBpbiBSZWdFeHBQcm90byA/IFN0cmluZyhyZWdleHAuZmxhZ3MpIDogZ2V0RmxhZ3MuY2FsbChyZWdleHApXG4gICAgICAsIHJ4ICAgID0gbmV3IFJlZ0V4cChyZWdleHAuc291cmNlLCB+ZmxhZ3MuaW5kZXhPZignZycpID8gZmxhZ3MgOiAnZycgKyBmbGFncyk7XG4gICAgcngubGFzdEluZGV4ID0gdG9MZW5ndGgocmVnZXhwLmxhc3RJbmRleCk7XG4gICAgcmV0dXJuIG5ldyAkUmVnRXhwU3RyaW5nSXRlcmF0b3IocngsIFMpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcubWF0Y2gtYWxsLmpzXG4gKiovIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4gKiovIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xudmFyICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBvd25LZXlzICAgICAgICA9IHJlcXVpcmUoJy4vX293bi1rZXlzJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUEQgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCl7XG4gICAgdmFyIE8gICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICAgLCBnZXREZXNjID0gZ09QRC5mXG4gICAgICAsIGtleXMgICAgPSBvd25LZXlzKE8pXG4gICAgICAsIHJlc3VsdCAgPSB7fVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoa2V5cy5sZW5ndGggPiBpKWNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5ID0ga2V5c1tpKytdLCBnZXREZXNjKE8sIGtleSkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KXtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbiAqKi8iLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGlzRW51bSAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG4gICAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKXtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXRvLWFycmF5LmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JqZWN0LXZhbHVlcy1lbnRyaWVzXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi9fb2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG5cbi8vIEIuMi4yLjIgT2JqZWN0LnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcilcbnJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgJGV4cG9ydCgkZXhwb3J0LlAgKyByZXF1aXJlKCcuL19vYmplY3QtZm9yY2VkLXBhbScpLCAnT2JqZWN0Jywge1xuICBfX2RlZmluZUdldHRlcl9fOiBmdW5jdGlvbiBfX2RlZmluZUdldHRlcl9fKFAsIGdldHRlcil7XG4gICAgJGRlZmluZVByb3BlcnR5LmYodG9PYmplY3QodGhpcyksIFAsIHtnZXQ6IGFGdW5jdGlvbihnZXR0ZXIpLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9KTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmRlZmluZS1nZXR0ZXIuanNcbiAqKi8iLCIvLyBGb3JjZWQgcmVwbGFjZW1lbnQgcHJvdG90eXBlIGFjY2Vzc29ycyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKXx8ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBLID0gTWF0aC5yYW5kb20oKTtcbiAgLy8gSW4gRkYgdGhyb3dzIG9ubHkgZGVmaW5lIG1ldGhvZHNcbiAgX19kZWZpbmVTZXR0ZXJfXy5jYWxsKG51bGwsIEssIGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovfSk7XG4gIGRlbGV0ZSByZXF1aXJlKCcuL19nbG9iYWwnKVtLXTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1mb3JjZWQtcGFtLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcblxuLy8gQi4yLjIuMyBPYmplY3QucHJvdG90eXBlLl9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fZGVmaW5lU2V0dGVyX186IGZ1bmN0aW9uIF9fZGVmaW5lU2V0dGVyX18oUCwgc2V0dGVyKXtcbiAgICAkZGVmaW5lUHJvcGVydHkuZih0b09iamVjdCh0aGlzKSwgUCwge3NldDogYUZ1bmN0aW9uKHNldHRlciksIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZGVmaW5lLXNldHRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmY7XG5cbi8vIEIuMi4yLjQgT2JqZWN0LnByb3RvdHlwZS5fX2xvb2t1cEdldHRlcl9fKFApXG5yZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICRleHBvcnQoJGV4cG9ydC5QICsgcmVxdWlyZSgnLi9fb2JqZWN0LWZvcmNlZC1wYW0nKSwgJ09iamVjdCcsIHtcbiAgX19sb29rdXBHZXR0ZXJfXzogZnVuY3Rpb24gX19sb29rdXBHZXR0ZXJfXyhQKXtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpXG4gICAgICAsIEsgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKVxuICAgICAgLCBEO1xuICAgIGRvIHtcbiAgICAgIGlmKEQgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgSykpcmV0dXJuIEQuZ2V0O1xuICAgIH0gd2hpbGUoTyA9IGdldFByb3RvdHlwZU9mKE8pKTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0Lmxvb2t1cC1nZXR0ZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZ2V0UHJvdG90eXBlT2YgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG4vLyBCLjIuMi41IE9iamVjdC5wcm90b3R5cGUuX19sb29rdXBTZXR0ZXJfXyhQKVxucmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAkZXhwb3J0KCRleHBvcnQuUCArIHJlcXVpcmUoJy4vX29iamVjdC1mb3JjZWQtcGFtJyksICdPYmplY3QnLCB7XG4gIF9fbG9va3VwU2V0dGVyX186IGZ1bmN0aW9uIF9fbG9va3VwU2V0dGVyX18oUCl7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKVxuICAgICAgLCBLID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSlcbiAgICAgICwgRDtcbiAgICBkbyB7XG4gICAgICBpZihEID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIEspKXJldHVybiBELnNldDtcbiAgICB9IHdoaWxlKE8gPSBnZXRQcm90b3R5cGVPZihPKSk7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5sb29rdXAtc2V0dGVyLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qc1xuICoqLyIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtZ2xvYmFsXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5c3RlbScsIHtnbG9iYWw6IHJlcXVpcmUoJy4vX2dsb2JhbCcpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3lzdGVtLmdsb2JhbC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtaXMtZXJyb3JcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb2YgICAgID0gcmVxdWlyZSgnLi9fY29mJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnRXJyb3InLCB7XG4gIGlzRXJyb3I6IGZ1bmN0aW9uIGlzRXJyb3IoaXQpe1xuICAgIHJldHVybiBjb2YoaXQpID09PSAnRXJyb3InO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5lcnJvci5pcy1lcnJvci5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGlhZGRoOiBmdW5jdGlvbiBpYWRkaCh4MCwgeDEsIHkwLCB5MSl7XG4gICAgdmFyICR4MCA9IHgwID4+PiAwXG4gICAgICAsICR4MSA9IHgxID4+PiAwXG4gICAgICAsICR5MCA9IHkwID4+PiAwO1xuICAgIHJldHVybiAkeDEgKyAoeTEgPj4+IDApICsgKCgkeDAgJiAkeTAgfCAoJHgwIHwgJHkwKSAmIH4oJHgwICsgJHkwID4+PiAwKSkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguaWFkZGguanNcbiAqKi8iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpc3ViaDogZnVuY3Rpb24gaXN1YmgoeDAsIHgxLCB5MCwgeTEpe1xuICAgIHZhciAkeDAgPSB4MCA+Pj4gMFxuICAgICAgLCAkeDEgPSB4MSA+Pj4gMFxuICAgICAgLCAkeTAgPSB5MCA+Pj4gMDtcbiAgICByZXR1cm4gJHgxIC0gKHkxID4+PiAwKSAtICgofiR4MCAmICR5MCB8IH4oJHgwIF4gJHkwKSAmICR4MCAtICR5MCA+Pj4gMCkgPj4+IDMxKSB8IDA7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hdGguaXN1YmguanNcbiAqKi8iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9CcmVuZGFuRWljaC80Mjk0ZDVjMjEyYTZkMjI1NDcwM1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBpbXVsaDogZnVuY3Rpb24gaW11bGgodSwgdil7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuICAgICAgLCAkdSA9ICt1XG4gICAgICAsICR2ID0gK3ZcbiAgICAgICwgdTAgPSAkdSAmIFVJTlQxNlxuICAgICAgLCB2MCA9ICR2ICYgVUlOVDE2XG4gICAgICAsIHUxID0gJHUgPj4gMTZcbiAgICAgICwgdjEgPSAkdiA+PiAxNlxuICAgICAgLCB0ICA9ICh1MSAqIHYwID4+PiAwKSArICh1MCAqIHYwID4+PiAxNik7XG4gICAgcmV0dXJuIHUxICogdjEgKyAodCA+PiAxNikgKyAoKHUwICogdjEgPj4+IDApICsgKHQgJiBVSU5UMTYpID4+IDE2KTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC5pbXVsaC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0JyZW5kYW5FaWNoLzQyOTRkNWMyMTJhNmQyMjU0NzAzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHVtdWxoOiBmdW5jdGlvbiB1bXVsaCh1LCB2KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsICR1ID0gK3VcbiAgICAgICwgJHYgPSArdlxuICAgICAgLCB1MCA9ICR1ICYgVUlOVDE2XG4gICAgICAsIHYwID0gJHYgJiBVSU5UMTZcbiAgICAgICwgdTEgPSAkdSA+Pj4gMTZcbiAgICAgICwgdjEgPSAkdiA+Pj4gMTZcbiAgICAgICwgdCAgPSAodTEgKiB2MCA+Pj4gMCkgKyAodTAgKiB2MCA+Pj4gMTYpO1xuICAgIHJldHVybiB1MSAqIHYxICsgKHQgPj4+IDE2KSArICgodTAgKiB2MSA+Pj4gMCkgKyAodCAmIFVJTlQxNikgPj4+IDE2KTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcubWF0aC51bXVsaC5qc1xuICoqLyIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcbiAgLCBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gbWV0YWRhdGEuc2V0O1xuXG5tZXRhZGF0YS5leHAoe2RlZmluZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCB0YXJnZXRLZXkpe1xuICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCBhbk9iamVjdCh0YXJnZXQpLCB0b01ldGFLZXkodGFyZ2V0S2V5KSk7XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWZpbmUtbWV0YWRhdGEuanNcbiAqKi8iLCJ2YXIgTWFwICAgICA9IHJlcXVpcmUoJy4vZXM2Lm1hcCcpXG4gICwgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgc2hhcmVkICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdtZXRhZGF0YScpXG4gICwgc3RvcmUgICA9IHNoYXJlZC5zdG9yZSB8fCAoc2hhcmVkLnN0b3JlID0gbmV3IChyZXF1aXJlKCcuL2VzNi53ZWFrLW1hcCcpKSk7XG5cbnZhciBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gZnVuY3Rpb24odGFyZ2V0LCB0YXJnZXRLZXksIGNyZWF0ZSl7XG4gIHZhciB0YXJnZXRNZXRhZGF0YSA9IHN0b3JlLmdldCh0YXJnZXQpO1xuICBpZighdGFyZ2V0TWV0YWRhdGEpe1xuICAgIGlmKCFjcmVhdGUpcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBzdG9yZS5zZXQodGFyZ2V0LCB0YXJnZXRNZXRhZGF0YSA9IG5ldyBNYXApO1xuICB9XG4gIHZhciBrZXlNZXRhZGF0YSA9IHRhcmdldE1ldGFkYXRhLmdldCh0YXJnZXRLZXkpO1xuICBpZigha2V5TWV0YWRhdGEpe1xuICAgIGlmKCFjcmVhdGUpcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB0YXJnZXRNZXRhZGF0YS5zZXQodGFyZ2V0S2V5LCBrZXlNZXRhZGF0YSA9IG5ldyBNYXApO1xuICB9IHJldHVybiBrZXlNZXRhZGF0YTtcbn07XG52YXIgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIG1ldGFkYXRhTWFwID0gZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBmYWxzZSk7XG4gIHJldHVybiBtZXRhZGF0YU1hcCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpO1xufTtcbnZhciBvcmRpbmFyeUdldE93bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE8sIFApe1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIGZhbHNlKTtcbiAgcmV0dXJuIG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBtZXRhZGF0YU1hcC5nZXQoTWV0YWRhdGFLZXkpO1xufTtcbnZhciBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhID0gZnVuY3Rpb24oTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApe1xuICBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIHRydWUpLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG59O1xudmFyIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gZnVuY3Rpb24odGFyZ2V0LCB0YXJnZXRLZXkpe1xuICB2YXIgbWV0YWRhdGFNYXAgPSBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwKHRhcmdldCwgdGFyZ2V0S2V5LCBmYWxzZSlcbiAgICAsIGtleXMgICAgICAgID0gW107XG4gIGlmKG1ldGFkYXRhTWFwKW1ldGFkYXRhTWFwLmZvckVhY2goZnVuY3Rpb24oXywga2V5KXsga2V5cy5wdXNoKGtleSk7IH0pO1xuICByZXR1cm4ga2V5cztcbn07XG52YXIgdG9NZXRhS2V5ID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xudmFyIGV4cCA9IGZ1bmN0aW9uKE8pe1xuICAkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCBPKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdG9yZTogc3RvcmUsXG4gIG1hcDogZ2V0T3JDcmVhdGVNZXRhZGF0YU1hcCxcbiAgaGFzOiBvcmRpbmFyeUhhc093bk1ldGFkYXRhLFxuICBnZXQ6IG9yZGluYXJ5R2V0T3duTWV0YWRhdGEsXG4gIHNldDogb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSxcbiAga2V5czogb3JkaW5hcnlPd25NZXRhZGF0YUtleXMsXG4gIGtleTogdG9NZXRhS2V5LFxuICBleHA6IGV4cFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19tZXRhZGF0YS5qc1xuICoqLyIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgPSBtZXRhZGF0YS5rZXlcbiAgLCBnZXRPckNyZWF0ZU1ldGFkYXRhTWFwID0gbWV0YWRhdGEubWFwXG4gICwgc3RvcmUgICAgICAgICAgICAgICAgICA9IG1ldGFkYXRhLnN0b3JlO1xuXG5tZXRhZGF0YS5leHAoe2RlbGV0ZU1ldGFkYXRhOiBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICB2YXIgdGFyZ2V0S2V5ICAgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMl0pXG4gICAgLCBtZXRhZGF0YU1hcCA9IGdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoYW5PYmplY3QodGFyZ2V0KSwgdGFyZ2V0S2V5LCBmYWxzZSk7XG4gIGlmKG1ldGFkYXRhTWFwID09PSB1bmRlZmluZWQgfHwgIW1ldGFkYXRhTWFwWydkZWxldGUnXShtZXRhZGF0YUtleSkpcmV0dXJuIGZhbHNlO1xuICBpZihtZXRhZGF0YU1hcC5zaXplKXJldHVybiB0cnVlO1xuICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBzdG9yZS5nZXQodGFyZ2V0KTtcbiAgdGFyZ2V0TWV0YWRhdGFbJ2RlbGV0ZSddKHRhcmdldEtleSk7XG4gIHJldHVybiAhIXRhcmdldE1ldGFkYXRhLnNpemUgfHwgc3RvcmVbJ2RlbGV0ZSddKHRhcmdldCk7XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5kZWxldGUtbWV0YWRhdGEuanNcbiAqKi8iLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgb3JkaW5hcnlIYXNPd25NZXRhZGF0YSA9IG1ldGFkYXRhLmhhc1xuICAsIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXRcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG52YXIgb3JkaW5hcnlHZXRNZXRhZGF0YSA9IGZ1bmN0aW9uKE1ldGFkYXRhS2V5LCBPLCBQKXtcbiAgdmFyIGhhc093biA9IG9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICBpZihoYXNPd24pcmV0dXJuIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogdW5kZWZpbmVkO1xufTtcblxubWV0YWRhdGEuZXhwKHtnZXRNZXRhZGF0YTogZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldCksIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuZ2V0LW1ldGFkYXRhLmpzXG4gKiovIiwidmFyIFNldCAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9lczYuc2V0JylcbiAgLCBmcm9tICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKVxuICAsIG1ldGFkYXRhICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRQcm90b3R5cGVPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzID0gbWV0YWRhdGEua2V5c1xuICAsIHRvTWV0YUtleSAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG52YXIgb3JkaW5hcnlNZXRhZGF0YUtleXMgPSBmdW5jdGlvbihPLCBQKXtcbiAgdmFyIG9LZXlzICA9IG9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApXG4gICAgLCBwYXJlbnQgPSBnZXRQcm90b3R5cGVPZihPKTtcbiAgaWYocGFyZW50ID09PSBudWxsKXJldHVybiBvS2V5cztcbiAgdmFyIHBLZXlzICA9IG9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XG4gIHJldHVybiBwS2V5cy5sZW5ndGggPyBvS2V5cy5sZW5ndGggPyBmcm9tKG5ldyBTZXQob0tleXMuY29uY2F0KHBLZXlzKSkpIDogcEtleXMgOiBvS2V5cztcbn07XG5cbm1ldGFkYXRhLmV4cCh7Z2V0TWV0YWRhdGFLZXlzOiBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlNZXRhZGF0YUtleXMoYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzFdKSk7XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtbWV0YWRhdGEta2V5cy5qc1xuICoqLyIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIG9yZGluYXJ5R2V0T3duTWV0YWRhdGEgPSBtZXRhZGF0YS5nZXRcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5O1xuXG5tZXRhZGF0YS5leHAoe2dldE93bk1ldGFkYXRhOiBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KVxuICAgICwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5nZXQtb3duLW1ldGFkYXRhLmpzXG4gKiovIiwidmFyIG1ldGFkYXRhICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyA9IG1ldGFkYXRhLmtleXNcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHtnZXRPd25NZXRhZGF0YUtleXM6IGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQgLyosIHRhcmdldEtleSAqLyl7XG4gIHJldHVybiBvcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhhbk9iamVjdCh0YXJnZXQpLCBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IHRvTWV0YUtleShhcmd1bWVudHNbMV0pKTtcbn19KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0LmdldC1vd24tbWV0YWRhdGEta2V5cy5qc1xuICoqLyIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldFByb3RvdHlwZU9mICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxudmFyIG9yZGluYXJ5SGFzTWV0YWRhdGEgPSBmdW5jdGlvbihNZXRhZGF0YUtleSwgTywgUCl7XG4gIHZhciBoYXNPd24gPSBvcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcbiAgaWYoaGFzT3duKXJldHVybiB0cnVlO1xuICB2YXIgcGFyZW50ID0gZ2V0UHJvdG90eXBlT2YoTyk7XG4gIHJldHVybiBwYXJlbnQgIT09IG51bGwgPyBvcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBwYXJlbnQsIFApIDogZmFsc2U7XG59O1xuXG5tZXRhZGF0YS5leHAoe2hhc01ldGFkYXRhOiBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IC8qLCB0YXJnZXRLZXkgKi8pe1xuICByZXR1cm4gb3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgYW5PYmplY3QodGFyZ2V0KSwgYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiB0b01ldGFLZXkoYXJndW1lbnRzWzJdKSk7XG59fSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVmbGVjdC5oYXMtbWV0YWRhdGEuanNcbiAqKi8iLCJ2YXIgbWV0YWRhdGEgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGFkYXRhJylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBvcmRpbmFyeUhhc093bk1ldGFkYXRhID0gbWV0YWRhdGEuaGFzXG4gICwgdG9NZXRhS2V5ICAgICAgICAgICAgICA9IG1ldGFkYXRhLmtleTtcblxubWV0YWRhdGEuZXhwKHtoYXNPd25NZXRhZGF0YTogZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCAvKiwgdGFyZ2V0S2V5ICovKXtcbiAgcmV0dXJuIG9yZGluYXJ5SGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIGFuT2JqZWN0KHRhcmdldClcbiAgICAsIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdW5kZWZpbmVkIDogdG9NZXRhS2V5KGFyZ3VtZW50c1syXSkpO1xufX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZmxlY3QuaGFzLW93bi1tZXRhZGF0YS5qc1xuICoqLyIsInZhciBtZXRhZGF0YSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YWRhdGEnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCB0b01ldGFLZXkgICAgICAgICAgICAgICAgID0gbWV0YWRhdGEua2V5XG4gICwgb3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YSA9IG1ldGFkYXRhLnNldDtcblxubWV0YWRhdGEuZXhwKHttZXRhZGF0YTogZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpe1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgdGFyZ2V0S2V5KXtcbiAgICBvcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKFxuICAgICAgbWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsXG4gICAgICAodGFyZ2V0S2V5ICE9PSB1bmRlZmluZWQgPyBhbk9iamVjdCA6IGFGdW5jdGlvbikodGFyZ2V0KSxcbiAgICAgIHRvTWV0YUtleSh0YXJnZXRLZXkpXG4gICAgKTtcbiAgfTtcbn19KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWZsZWN0Lm1ldGFkYXRhLmpzXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3J3YWxkcm9uL3RjMzktbm90ZXMvYmxvYi9tYXN0ZXIvZXM2LzIwMTQtMDkvc2VwdC0yNS5tZCM1MTAtZ2xvYmFsYXNhcC1mb3ItZW5xdWV1aW5nLWEtbWljcm90YXNrXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgcHJvY2VzcyAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykucHJvY2Vzc1xuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxuJGV4cG9ydCgkZXhwb3J0LkcsIHtcbiAgYXNhcDogZnVuY3Rpb24gYXNhcChmbil7XG4gICAgdmFyIGRvbWFpbiA9IGlzTm9kZSAmJiBwcm9jZXNzLmRvbWFpbjtcbiAgICBtaWNyb3Rhc2soZG9tYWluID8gZG9tYWluLmJpbmQoZm4pIDogZm4pO1xuICB9XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hc2FwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3plbnBhcnNpbmcvZXMtb2JzZXJ2YWJsZVxudmFyICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBtaWNyb3Rhc2sgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBPQlNFUlZBQkxFICA9IHJlcXVpcmUoJy4vX3drcycpKCdvYnNlcnZhYmxlJylcbiAgLCBhRnVuY3Rpb24gICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgaGlkZSAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgUkVUVVJOICAgICAgPSBmb3JPZi5SRVRVUk47XG5cbnZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihmbil7XG4gIHJldHVybiBmbiA9PSBudWxsID8gdW5kZWZpbmVkIDogYUZ1bmN0aW9uKGZuKTtcbn07XG5cbnZhciBjbGVhbnVwU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24oc3Vic2NyaXB0aW9uKXtcbiAgdmFyIGNsZWFudXAgPSBzdWJzY3JpcHRpb24uX2M7XG4gIGlmKGNsZWFudXApe1xuICAgIHN1YnNjcmlwdGlvbi5fYyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwKCk7XG4gIH1cbn07XG5cbnZhciBzdWJzY3JpcHRpb25DbG9zZWQgPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICByZXR1cm4gc3Vic2NyaXB0aW9uLl9vID09PSB1bmRlZmluZWQ7XG59O1xuXG52YXIgY2xvc2VTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihzdWJzY3JpcHRpb24pe1xuICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gIH1cbn07XG5cbnZhciBTdWJzY3JpcHRpb24gPSBmdW5jdGlvbihvYnNlcnZlciwgc3Vic2NyaWJlcil7XG4gIGFuT2JqZWN0KG9ic2VydmVyKTtcbiAgdGhpcy5fYyA9IHVuZGVmaW5lZDtcbiAgdGhpcy5fbyA9IG9ic2VydmVyO1xuICBvYnNlcnZlciA9IG5ldyBTdWJzY3JpcHRpb25PYnNlcnZlcih0aGlzKTtcbiAgdHJ5IHtcbiAgICB2YXIgY2xlYW51cCAgICAgID0gc3Vic2NyaWJlcihvYnNlcnZlcilcbiAgICAgICwgc3Vic2NyaXB0aW9uID0gY2xlYW51cDtcbiAgICBpZihjbGVhbnVwICE9IG51bGwpe1xuICAgICAgaWYodHlwZW9mIGNsZWFudXAudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpY2xlYW51cCA9IGZ1bmN0aW9uKCl7IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgZWxzZSBhRnVuY3Rpb24oY2xlYW51cCk7XG4gICAgICB0aGlzLl9jID0gY2xlYW51cDtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgcmV0dXJuO1xuICB9IGlmKHN1YnNjcmlwdGlvbkNsb3NlZCh0aGlzKSljbGVhbnVwU3Vic2NyaXB0aW9uKHRoaXMpO1xufTtcblxuU3Vic2NyaXB0aW9uLnByb3RvdHlwZSA9IHJlZGVmaW5lQWxsKHt9LCB7XG4gIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpeyBjbG9zZVN1YnNjcmlwdGlvbih0aGlzKTsgfVxufSk7XG5cbnZhciBTdWJzY3JpcHRpb25PYnNlcnZlciA9IGZ1bmN0aW9uKHN1YnNjcmlwdGlvbil7XG4gIHRoaXMuX3MgPSBzdWJzY3JpcHRpb247XG59O1xuXG5TdWJzY3JpcHRpb25PYnNlcnZlci5wcm90b3R5cGUgPSByZWRlZmluZUFsbCh7fSwge1xuICBuZXh0OiBmdW5jdGlvbiBuZXh0KHZhbHVlKXtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIubmV4dCk7XG4gICAgICAgIGlmKG0pcmV0dXJuIG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbG9zZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcih2YWx1ZSl7XG4gICAgdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuX3M7XG4gICAgaWYoc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpdGhyb3cgdmFsdWU7XG4gICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgIHN1YnNjcmlwdGlvbi5fbyA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuZXJyb3IpO1xuICAgICAgaWYoIW0pdGhyb3cgdmFsdWU7XG4gICAgICB2YWx1ZSA9IG0uY2FsbChvYnNlcnZlciwgdmFsdWUpO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICB0cnkge1xuICAgICAgICBjbGVhbnVwU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHZhbHVlKXtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5fcztcbiAgICBpZighc3Vic2NyaXB0aW9uQ2xvc2VkKHN1YnNjcmlwdGlvbikpe1xuICAgICAgdmFyIG9ic2VydmVyID0gc3Vic2NyaXB0aW9uLl9vO1xuICAgICAgc3Vic2NyaXB0aW9uLl9vID0gdW5kZWZpbmVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG0gPSBnZXRNZXRob2Qob2JzZXJ2ZXIuY29tcGxldGUpO1xuICAgICAgICB2YWx1ZSA9IG0gPyBtLmNhbGwob2JzZXJ2ZXIsIHZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH0gY2xlYW51cFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxufSk7XG5cbnZhciAkT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIE9ic2VydmFibGUoc3Vic2NyaWJlcil7XG4gIGFuSW5zdGFuY2UodGhpcywgJE9ic2VydmFibGUsICdPYnNlcnZhYmxlJywgJ19mJykuX2YgPSBhRnVuY3Rpb24oc3Vic2NyaWJlcik7XG59O1xuXG5yZWRlZmluZUFsbCgkT2JzZXJ2YWJsZS5wcm90b3R5cGUsIHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpe1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKG9ic2VydmVyLCB0aGlzLl9mKTtcbiAgfSxcbiAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChmbil7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgKGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGFGdW5jdGlvbihmbik7XG4gICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhhdC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0IDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZm4odmFsdWUpO1xuICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiByZWplY3QsXG4gICAgICAgIGNvbXBsZXRlOiByZXNvbHZlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbnJlZGVmaW5lQWxsKCRPYnNlcnZhYmxlLCB7XG4gIGZyb206IGZ1bmN0aW9uIGZyb20oeCl7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZTtcbiAgICB2YXIgbWV0aG9kID0gZ2V0TWV0aG9kKGFuT2JqZWN0KHgpW09CU0VSVkFCTEVdKTtcbiAgICBpZihtZXRob2Qpe1xuICAgICAgdmFyIG9ic2VydmFibGUgPSBhbk9iamVjdChtZXRob2QuY2FsbCh4KSk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZS5jb25zdHJ1Y3RvciA9PT0gQyA/IG9ic2VydmFibGUgOiBuZXcgQyhmdW5jdGlvbihvYnNlcnZlcil7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnN1YnNjcmliZShvYnNlcnZlcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKG9ic2VydmVyKXtcbiAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIWRvbmUpe1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZihmb3JPZih4LCBmYWxzZSwgZnVuY3Rpb24oaXQpe1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGl0KTtcbiAgICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm4gUkVUVVJOO1xuICAgICAgICAgICAgfSkgPT09IFJFVFVSTilyZXR1cm47XG4gICAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIGlmKGRvbmUpdGhyb3cgZTtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKXsgZG9uZSA9IHRydWU7IH07XG4gICAgfSk7XG4gIH0sXG4gIG9mOiBmdW5jdGlvbiBvZigpe1xuICAgIGZvcih2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IEFycmF5KGwpOyBpIDwgbDspaXRlbXNbaV0gPSBhcmd1bWVudHNbaSsrXTtcbiAgICByZXR1cm4gbmV3ICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiAkT2JzZXJ2YWJsZSkoZnVuY3Rpb24ob2JzZXJ2ZXIpe1xuICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICBpZighZG9uZSl7XG4gICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgKytpKXtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoaXRlbXNbaV0pO1xuICAgICAgICAgICAgaWYoZG9uZSlyZXR1cm47XG4gICAgICAgICAgfSBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpeyBkb25lID0gdHJ1ZTsgfTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmhpZGUoJE9ic2VydmFibGUucHJvdG90eXBlLCBPQlNFUlZBQkxFLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5HLCB7T2JzZXJ2YWJsZTogJE9ic2VydmFibGV9KTtcblxucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnT2JzZXJ2YWJsZScpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9ic2VydmFibGUuanNcbiAqKi8iLCIvLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG52YXIgZ2xvYmFsICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaW52b2tlICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgcGFydGlhbCAgICA9IHJlcXVpcmUoJy4vX3BhcnRpYWwnKVxuICAsIG5hdmlnYXRvciAgPSBnbG9iYWwubmF2aWdhdG9yXG4gICwgTVNJRSAgICAgICA9ICEhbmF2aWdhdG9yICYmIC9NU0lFIC5cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciB3cmFwID0gZnVuY3Rpb24oc2V0KXtcbiAgcmV0dXJuIE1TSUUgPyBmdW5jdGlvbihmbiwgdGltZSAvKiwgLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIHNldChpbnZva2UoXG4gICAgICBwYXJ0aWFsLFxuICAgICAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLFxuICAgICAgdHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKVxuICAgICksIHRpbWUpO1xuICB9IDogc2V0O1xufTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CICsgJGV4cG9ydC5GICogTVNJRSwge1xuICBzZXRUaW1lb3V0OiAgd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBwYXRoICAgICAgPSByZXF1aXJlKCcuL19wYXRoJylcbiAgLCBpbnZva2UgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oLyogLi4ucGFyZ3MgKi8pe1xuICB2YXIgZm4gICAgID0gYUZ1bmN0aW9uKHRoaXMpXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBwYXJncyAgPSBBcnJheShsZW5ndGgpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBfICAgICAgPSBwYXRoLl9cbiAgICAsIGhvbGRlciA9IGZhbHNlO1xuICB3aGlsZShsZW5ndGggPiBpKWlmKChwYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAsIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgICAsIGogPSAwLCBrID0gMCwgYXJncztcbiAgICBpZighaG9sZGVyICYmICFhTGVuKXJldHVybiBpbnZva2UoZm4sIHBhcmdzLCB0aGF0KTtcbiAgICBhcmdzID0gcGFyZ3Muc2xpY2UoKTtcbiAgICBpZihob2xkZXIpZm9yKDtsZW5ndGggPiBqOyBqKyspaWYoYXJnc1tqXSA9PT0gXylhcmdzW2pdID0gYXJndW1lbnRzW2srK107XG4gICAgd2hpbGUoYUxlbiA+IGspYXJncy5wdXNoKGFyZ3VtZW50c1trKytdKTtcbiAgICByZXR1cm4gaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcGFydGlhbC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcGF0aC5qc1xuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkdGFzayAgID0gcmVxdWlyZSgnLi9fdGFzaycpO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIsIHtcbiAgc2V0SW1tZWRpYXRlOiAgICR0YXNrLnNldCxcbiAgY2xlYXJJbW1lZGlhdGU6ICR0YXNrLmNsZWFyXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi5pbW1lZGlhdGUuanNcbiAqKi8iLCJ2YXIgJGl0ZXJhdG9ycyAgICA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJylcbiAgLCByZWRlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB3a3MgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCBJVEVSQVRPUiAgICAgID0gd2tzKCdpdGVyYXRvcicpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKVxuICAsIEFycmF5VmFsdWVzICAgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZVxuICAgICwga2V5O1xuICBpZihwcm90byl7XG4gICAgaWYoIXByb3RvW0lURVJBVE9SXSloaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmKCFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBmb3Ioa2V5IGluICRpdGVyYXRvcnMpaWYoIXByb3RvW2tleV0pcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKChvdXRlckZuIHx8IEdlbmVyYXRvcikucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnRgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLiBTb21lIG1heSBjb25zaWRlciB0aGUgbmFtZSBvZiB0aGlzIG1ldGhvZCB0b29cbiAgLy8gY3V0ZXN5LCBidXQgdGhleSBhcmUgY3VybXVkZ2VvbnMuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gbmV3IEF3YWl0QXJndW1lbnQoYXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgIHRoaXMuYXJnID0gYXJnO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5hcmcpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbiAgdHJ5IHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxufSAoKSlcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgdGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9jb3JlLnJlZ2V4cC5lc2NhcGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlJlZ0V4cC5lc2NhcGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvZm4vcmVnZXhwL2VzY2FwZS5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkcmUgICAgID0gcmVxdWlyZSgnLi9fcmVwbGFjZXInKSgvW1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLnJlZ2V4cC5lc2NhcGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG4gIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gU3RyaW5nKGl0KS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19yZXBsYWNlci5qc1xuICoqLyIsIishfi0oKHcsIGQsIHVuZGVmaW5lZCkgPT4ge1xuXG4gIGxldCBwYWdlcyA9IFtdOyAvKiBhcnJheSBvZiBwYWdlIG9iamVjdHMgKi9cblxuICBsZXQgYm9vayA9IGQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2snKS5jaGlsZHJlbjtcblxuICAvLyBwYWdlcy5wdXNoKGJvb2subGVuZ3RoKTtcblxuICAvLyBjb25zb2xlLmxvZyhib29rKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHBhZ2VzO1xuXG59KSh3aW5kb3csIGRvY3VtZW50KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9wYWdlcy5qc1xuICoqLyIsIishfi0oKHcsIGQsIHVuZGVmaW5lZCkgPT4ge1xuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBncmFwaDtcblxuICAgIGxldCBncmFwaCA9IHt9O1xuXG5cbiAgICAvLyAgMS5cbiAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldERpbWVuc2lvbnMpO1xuICAgIHcub25sb2FkID0gZ2V0RGltZW5zaW9ucztcblxuICAgIGZ1bmN0aW9uIGdldERpbWVuc2lvbnMoKSB7XG5cbiAgICAgICAgbGV0IGJvb2sgPSB7fTtcblxuXG4gICAgICAgIGJvb2suYm91bmRzID0gZC5nZXRFbGVtZW50QnlJZCgncGxvdHRlcicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBodHRwOi8vY2FuaXVzZS5jb20vI2ZlYXQ9Z2V0Ym91bmRpbmdjbGllbnRyZWN0XG5cbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInB3aWR0aFwiKS50ZXh0Q29udGVudCA9IGJvb2suYm91bmRzLndpZHRoO1xuICAgICAgICBkLmdldEVsZW1lbnRCeUlkKFwicGhlaWdodFwiKS50ZXh0Q29udGVudCA9IGJvb2suYm91bmRzLmhlaWdodDtcbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInB0b3BcIikudGV4dENvbnRlbnQgPSBib29rLmJvdW5kcy50b3A7XG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoXCJwbGVmdFwiKS50ZXh0Q29udGVudCA9IGJvb2suYm91bmRzLmxlZnQ7XG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlnaHRcIikudGV4dENvbnRlbnQgPSBib29rLmJvdW5kcy5yaWdodDtcbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInBib3R0b21cIikudGV4dENvbnRlbnQgPSBib29rLmJvdW5kcy5ib3R0b207XG5cbiAgICAgICAgLy8gb3JpZ2luID0gZC5nZXRFbGVtZW50QnlJZCgnb3JpZ2luJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgbGV0IG9yaWdpbiA9IHt9O1xuXG4gICAgICAgIG9yaWdpbi5ib3VuZHMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcIm9yaWdpblhcIikudGV4dENvbnRlbnQgPSBwYXJzZUludChvcmlnaW4uYm91bmRzLndpZHRoKSAvIDI7XG4gICAgICAgIGQuZ2V0RWxlbWVudEJ5SWQoXCJvcmlnaW5ZXCIpLnRleHRDb250ZW50ID0gcGFyc2VJbnQob3JpZ2luLmJvdW5kcy5oZWlnaHQpIC8gMjtcblxuICAgIH1cblxuICAgIC8vIDIuXG4gICAgZC5nZXRFbGVtZW50QnlJZCgncGxvdHRlcicpLm9ubW91c2Vtb3ZlID0gaGFuZGxlTW91c2VNb3ZlO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50RG9jLCBkb2MsIGJvZHksIHBhZ2VYLCBwYWdlWTtcblxuICAgICAgICBlID0gZSB8fCB3LmU7XG5cbiAgICAgICAgaWYgKGUucGFnZVggPT09IG51bGwgJiYgZS5jbGllbnRYICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIGV2ZW50RG9jID0gKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm93bmVyRG9jdW1lbnQpIHx8IGRvY3VtZW50O1xuXG4gICAgICAgICAgICBkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGJvZHkgPSBldmVudERvYy5ib2R5O1xuXG4gICAgICAgICAgICBlLnBhZ2VYID0gZS5jbGllbnRYICtcbiAgICAgICAgICAgICAgICAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC1cbiAgICAgICAgICAgICAgICAoZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDApO1xuICAgICAgICAgICAgZS5wYWdlWSA9IGUuY2xpZW50WSArXG4gICAgICAgICAgICAgICAgKGRvYyAmJiBkb2Muc2Nyb2xsVG9wIHx8IGJvZHkgJiYgYm9keS5zY3JvbGxUb3AgfHwgMCkgLVxuICAgICAgICAgICAgICAgIChkb2MgJiYgZG9jLmNsaWVudFRvcCB8fCBib2R5ICYmIGJvZHkuY2xpZW50VG9wIHx8IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInhheGlzXCIpLnRleHRDb250ZW50ID0gZS5wYWdlWDtcbiAgICAgICAgZC5nZXRFbGVtZW50QnlJZChcInlheGlzXCIpLnRleHRDb250ZW50ID0gZS5wYWdlWTtcbiAgICB9XG5cblxuICAgIC8vIDMuXG5cbiAgICAvLyAoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBlbGVtID0gZC5nZXRFbGVtZW50QnlJZCgncGxvdHRlcicpO1xuXG4gICAgLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZUxvZyh4LCB5KSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnWDogJyArIHggKyAnOyBZOiAnICsgeSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgLy8gICAgICAgICB1cGRhdGVMb2coZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCwgZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSk7XG4gICAgLy8gICAgIH0sIGZhbHNlKTtcblxuICAgIC8vICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICAgIHVwZGF0ZUxvZyhlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsIGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSk7XG4gICAgLy8gICAgIH0sIGZhbHNlKTtcbiAgICAvLyB9KShkKTtcblxuXG59KSh3aW5kb3csIGRvY3VtZW50KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9ncmFwaC5qc1xuICoqLyIsIishfi0oKHcsIGQsIHVuZGVmaW5lZCkgPT4ge1xuXG4gICAgLy8gJ3VzZSBzdHJvbmcnO1xuXG4gICAgLy8gLy8gbW9kdWxlLmV4cG9ydHMgPSBtb2RlO1xuXG4gICAgLy8gbGV0IG1vZGUgPSB7fTtcblxuICAgIC8vIDEuXG4gICAgLy8gdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRNb2RlKTtcbiAgICAvLyB3Lm9ubG9hZCA9IGdldE1vZGU7XG5cblxuICAgIC8vIGNvbnN0IG1xID0gKHF1ZXJ5LCBjYiwgdXNlUG9seWZpbGwpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaG9zdCA9IHt9O1xuICAgIC8vICAgICBjb25zdCBpc01hdGNoTWVkaWFTdXBwb3J0ZWQgPSAhISh3ICYmIHcubWF0Y2hNZWRpYSkgJiYgIXVzZVBvbHlmaWxsO1xuXG4gICAgLy8gICAgIGlmIChpc01hdGNoTWVkaWFTdXBwb3J0ZWQpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlcyA9IHcubWF0Y2hNZWRpYShxdWVyeSk7XG5cbiAgICAvLyAgICAgICAgIGNiLmFwcGx5KGhvc3QsIFtyZXMubWF0Y2hlcywgcmVzLm1lZGlhXSk7XG5cbiAgICAvLyAgICAgICAgIHJlcy5hZGRMaXN0ZW5lcihjaGFuZ2VkID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjYi5hcHBseShob3N0LCBbY2hhbmdlZC5tYXRjaGVzLCBjaGFuZ2VkLm1lZGlhXSk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIC8vIC4uLiBwb2x5ZmlsbFxuICAgIC8vICAgICB9XG4gICAgLy8gfTtcblxuICAgIC8vIG1xKCdhbGwgYW5kIChtaW4td2lkdGg6IDg3MHB4KScsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgLy8gICAgIG1vZGUgPSBtYXRjaCA/ICdkb3VibGUnIDogJ3NpbmdsZSc7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG1vZGUpOyBcbiAgICAvLyB9KTtcblxuICBcblxuXG4gICAgLy8gbW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvLyAgICAgbW9kZSh3KSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gbW9kZTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfTtcblxufSkod2luZG93LCBkb2N1bWVudCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9tb2RlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==